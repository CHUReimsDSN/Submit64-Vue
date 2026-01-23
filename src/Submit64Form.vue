<script setup lang="ts">
import {
  onMounted,
  ref,
  unref,
  useSlots,
  defineComponent,
  nextTick,
  watch,
  computed,
  type Ref,
  type WatchStopHandle,
  type Component,
} from "vue";
import type {
  TForm,
  TSubmit64FieldApi,
  TSubmit64FormProps,
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64FormMode,
  TSubmit64FormApi,
  TSubmit64OverridedComponents,
  TSubmit64SectionApi,
  TContext,
  TSubmit64FormPrivateApi,
  TSubmit64SubmitData,
  TFormSection,
} from "./models";
import { FormFactory } from "./form-factory";
import { callAllEvents } from "./utils";
import SectionWrapper from "./components/SectionWrapper.vue";
import FieldWrapper from "./components/FieldWrapper.vue";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps>(), {});

// vars
let formMetadataAndData: TResourceFormMetadataAndData | null = null;
let stringyfiedValues = "";
let sectionCount = 0;
let fieldCount = 0;
let stopWatchIsValid: WatchStopHandle | null = null;
let stopWatchIsInvalid: WatchStopHandle | null = null;
let stopWatchIsUpdated: WatchStopHandle | null = null;
let submitData: TSubmit64SubmitData["resource_data"] | null = null;
let bulkSubmitData: TSubmit64SubmitData["bulk_data"] = null;

// consts
const slots = useSlots();

// refs
const form = ref<TForm>(FormFactory.getEmptyFormBeforeInit());
const setupSectionsIsDone = ref(false);
const setupFieldsIsDone = ref(false);
const setupIsDone = ref(false);
const isLoadingSubmit = ref(false);
const mode = ref<TSubmit64FormMode>("create");
const orphanErrors = ref<Record<string, string[]>>({});
const sectionsWrapperRefs = ref<Map<string, TSubmit64SectionApi>>(new Map());
const fieldWrapperRefs = ref<Map<string, TSubmit64FieldApi>>(new Map());

// functions
async function setupMetadatasAndForm() {
  formMetadataAndData = await propsComponent.getMetadataAndData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    context: propsComponent.context,
  });
  form.value = FormFactory.getForm(
    propsComponent.resourceName,
    propsComponent.resourceId,
    getOverridedComponents(),
    formMetadataAndData,
    propsComponent.formSettings,
    propsComponent.formStyle,
    propsComponent.context,
    formApi,
    propsComponent.eventManager
  );
  sectionCount = form.value.sections.length;
  fieldCount = form.value.sections.map((s) => s.fields).flat().length;
  if (propsComponent.resourceId) {
    mode.value = "edit";
  }
}
async function submit(): Promise<void> {
  if (!validate()) {
    return;
  }
  callAllEvents(form.value?.events.onSubmit);
  isLoadingSubmit.value = true;
  clearBackendErrors();
  const resourceData = getValuesFormDeserialized();
  const newData = await propsComponent.getSubmitFormData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    resourceData,
    context: propsComponent.context,
  });
  submitData = newData.resource_data;
  if (!newData.success) {
    orphanErrors.value = {};
    const parentedKeys: string[] = [];
    for (const [fieldName, fieldApi] of fieldWrapperRefs.value) {
      const entryBackendErrors = newData.errors[fieldName];
      if (entryBackendErrors) {
        fieldApi.setupBackendErrors(entryBackendErrors);
        parentedKeys.push(fieldName);
      }
    }
    Object.entries(newData.errors).forEach((errorEntry) => {
      if (parentedKeys.includes(errorEntry[0])) {
        return;
      }
      orphanErrors.value[errorEntry[0]] = errorEntry[1];
    });
    callAllEvents(form.value?.events.onSubmitUnsuccess);
  } else {
    orphanErrors.value = {};
    if (mode.value === "create") {
      mode.value = "edit";
    }
    if (formMetadataAndData && newData.resource_data) {
      formMetadataAndData.resource_data = newData.resource_data;
    }
    form.value = FormFactory.getForm(
      propsComponent.resourceName,
      propsComponent.resourceId,
      getOverridedComponents(),
      {
        form: newData.form!,
        resource_data: newData.resource_data!,
      },
      propsComponent.formSettings,
      propsComponent.formStyle,
      propsComponent.context,
      formApi,
      propsComponent.eventManager
    );
    softReset();
    stringyfiedValues = JSON.stringify(getValuesFormDeserialized());
    callAllEvents(form.value?.events.onSubmitSuccess);
  }
  isLoadingSubmit.value = false;
}
async function submitBulk(count: number): Promise<void> {
  if (!form.value.allowBulk || mode.value === "edit") {
    console.warn("Submit64 : you are not allowed to submitBulk");
    return;
  }
  if (!validate()) {
    return;
  }
  callAllEvents(form.value?.events.onSubmit);
  isLoadingSubmit.value = true;
  clearBackendErrors();
  const resourceData = getValuesFormDeserialized();
  const newData = await propsComponent.getSubmitFormData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    resourceData,
    bulkCount: count,
    context: propsComponent.context,
  });
  bulkSubmitData = newData.bulk_data;
  if (!newData.success) {
    orphanErrors.value = {};
    const parentedKeys: string[] = [];
    for (const [fieldName, fieldApi] of fieldWrapperRefs.value) {
      const entryBackendErrors = newData.errors[fieldName];
      if (entryBackendErrors) {
        fieldApi.setupBackendErrors(entryBackendErrors);
        parentedKeys.push(fieldName);
      }
    }
    Object.entries(newData.errors).forEach((errorEntry) => {
      if (parentedKeys.includes(errorEntry[0])) {
        return;
      }
      orphanErrors.value[errorEntry[0]] = errorEntry[1];
    });
    callAllEvents(form.value?.events.onSubmitUnsuccess);
  } else {
    orphanErrors.value = {};
    if (mode.value === "create") {
      mode.value = "edit";
    }
    if (formMetadataAndData && newData.resource_data) {
      formMetadataAndData.resource_data = newData.resource_data;
    }
    form.value = FormFactory.getForm(
      propsComponent.resourceName,
      propsComponent.resourceId,
      getOverridedComponents(),
      {
        form: newData.form!,
        resource_data: newData.resource_data!,
      },
      propsComponent.formSettings,
      propsComponent.formStyle,
      propsComponent.context,
      formApi,
      propsComponent.eventManager
    );
    softReset();
    stringyfiedValues = JSON.stringify(getValuesFormDeserialized());
    callAllEvents(form.value?.events.onSubmitSuccess);
  }
  isLoadingSubmit.value = false;
}
function getOverridedComponents() {
  const overridedComponents: TSubmit64OverridedComponents = {
    sectionComponent: propsComponent.sectionComponent,
    actionComponent: propsComponent.actionComponent,
    orphanErrorsComponent: propsComponent.orphanErrorsComponent,
    associationDisplayComponent: propsComponent.associationDisplayComponent,
    dynamicComponentRecord: {},
  };
  for (const key in slots) {
    const slot = slots[key];
    if (slot) {
      const component = defineComponent({
        inheritAttrs: false,
        setup(props, { attrs, slots: innerSlots }) {
          return () =>
            slot({
              ...props,
              ...attrs,
              innerSlots
            });
        },
      });
      switch (key) {
        case "sections":
          overridedComponents.sectionComponent = component;
          break;
        case "actions":
          overridedComponents.actionComponent = component;
          break;
        case "orphan-errors":
          overridedComponents.orphanErrorsComponent = component;
          break;
        case "association-display":
          overridedComponents.associationDisplayComponent = component;
          break;
        default:
          overridedComponents.dynamicComponentRecord![key] = component;
          break;
      }
    }
  }
  return overridedComponents;
}
function getValuesFormDeserialized(): Record<string, unknown> {
  const resourceData: Record<string, unknown> = {};
  for (const [fieldName, fieldApi] of fieldWrapperRefs.value) {
    resourceData[fieldName] = fieldApi.getValueDeserialized();
  }
  return resourceData;
}
function getValuesFormSerialized(): Record<string, unknown> {
  const resourceData: Record<string, unknown> = {};
  for (const [fieldName, fieldApi] of fieldWrapperRefs.value) {
    resourceData[fieldName] = fieldApi.getValueSerialized();
  }
  return resourceData;
}
function validate() {
  let formValid = true;
  fieldWrapperRefs.value.forEach((fieldRef) => {
    if (!fieldRef.validate()) {
      formValid = false;
      return;
    }
  });
  callAllEvents(form.value?.events.onValidated);
  return formValid;
}
function isValid() {
  let formValid = true;
  fieldWrapperRefs.value.forEach((fieldRef) => {
    if (!fieldRef.isValid()) {
      formValid = false;
      return;
    }
  });
  return formValid;
}
function isInvalid() {
  return !isValid();
}
function softReset() {
  sectionsWrapperRefs.value.forEach((section) => {
    section.softReset();
  });
}
function reset() {
  fieldWrapperRefs.value.forEach((fieldRef) => {
    fieldRef.reset();
  });
  callAllEvents(form.value?.events.onReset);
}
function clear() {
  fieldWrapperRefs.value.forEach((fieldRef) => {
    fieldRef.clear();
  });
  callAllEvents(form.value?.events.onClear);
}
function resetValidation() {
  fieldWrapperRefs.value.forEach((fieldRef) => {
    fieldRef.resetValidation();
  });
}
function clearBackendErrors() {
  fieldWrapperRefs.value.forEach((fieldRef) => {
    fieldRef.setupBackendErrors([]);
  });
}
function getInitialValueByFieldName(fieldName: string) {
  if (!formMetadataAndData) {
    return;
  }
  return formMetadataAndData.resource_data[fieldName];
}
function getSectionByName(sectionName: string) {
  return sectionsWrapperRefs.value.get(sectionName);
}
function getSectionByIndex(sectionIndex: number) {
  return [...sectionsWrapperRefs.value.values()].at(sectionIndex);
}
function getSections() {
  return sectionsWrapperRefs.value;
}
function getFieldByName(fieldName: string) {
  return fieldWrapperRefs.value.get(fieldName);
}
function getFields() {
  return fieldWrapperRefs.value;
}
function getAssociationDataCallback() {
  return (
    propsComponent.getAssociationData ??
    (async (): Promise<TSubmit64AssociationData> => {
      return {
        rows: [],
        row_count: 0,
      };
    })
  );
}
function ensurePropsAreOk() {
  const propsToCheck: (keyof TSubmit64FormProps)[] = [
    "getMetadataAndData",
    "resourceName",
  ];
  propsToCheck.forEach((propsName) => {
    if (
      propsComponent[propsName] === null ||
      propsComponent[propsName] === undefined
    ) {
      console.warn(`Missing props for <Submit64> -> ${propsName}`);
    }
  });
}
function getMode() {
  return unref(mode);
}
function valuesHasChanged() {
  return stringyfiedValues !== JSON.stringify(getValuesFormDeserialized());
}
function setContext(context: TContext) {
  if (form.value) {
    form.value.context = context;
  }
}
function setCssClass(cssClass: string) {
  if (form.value) {
    form.value.cssClass = cssClass;
  }
}
function setReadonlyState(state: boolean) {
  if (form.value) form.value.readonly = state;
}
function isReady() {
  return setupIsDone.value;
}
function getSubmitData() {
  return submitData;
}
function getBulkSubmitData() {
  return bulkSubmitData;
}

// private api
function getFormRef() {
  return form as Ref<TForm>;
}
function getSectionRef(sectionName: string) {
  return form.value?.sections.find((section) => {
    return section.name === sectionName;
  });
}
function getFieldRef(fieldName: string) {
  return form.value?.sections
    .map((s) => s.fields)
    .flat()
    .find((field) => {
      return field.metadata.field_name === fieldName;
    });
}
function registerSectionWrapperRef(
  sectionName: string,
  sectionComponent: TSubmit64SectionApi
) {
  sectionsWrapperRefs.value.set(sectionName, sectionComponent);
  if (sectionCount === sectionsWrapperRefs.value.size) {
    setupSectionsIsDone.value = true;
  }
}
function registerFieldWrapperRef(
  fieldName: string,
  fieldComponent: TSubmit64FieldApi
) {
  fieldWrapperRefs.value.set(fieldName, fieldComponent);
  if (fieldCount === fieldWrapperRefs.value.size) {
    setupFieldsIsDone.value = true;
  }
}
function setSectionFieldComponent(
  section: TFormSection,
  component: Component
) {
  section.fieldsComponent = component;
}

// apis
const privateFormApi: TSubmit64FormPrivateApi = {
  getFormRef,
  getSectionRef,
  getFieldRef,
  registerSectionWrapperRef,
  registerFieldWrapperRef,
  setSectionFieldComponent,
};

const formReactive = new Proxy({} as TForm, {
  get(_, prop) {
    return form.value?.[prop as keyof TForm];
  },
});
const formApi: TSubmit64FormApi = {
  getMode,
  getSectionByName,
  getSectionByIndex,
  getSections,
  getFieldByName,
  getFields,
  validate,
  isValid,
  isInvalid,
  softReset,
  reset,
  clear,
  resetValidation,
  submit,
  submitBulk,
  valuesHasChanged,
  getInitialValueByFieldName,
  getAssociationDataCallback,
  setContext,
  setCssClass,
  setReadonlyState,
  isReady,
  getSubmitData,
  getBulkSubmitData,
  form: formReactive as unknown as TForm,
};
defineExpose<TSubmit64FormApi>(formApi);

// computeds
const isValidComputed = computed(() => {
  return isValid();
});
const isInvalidComputed = computed(() => {
  return isInvalid();
});
const isUpdatedComputed = computed(() => {
  return getValuesFormSerialized();
});

// watchs
watch(
  () => setupSectionsIsDone.value && setupFieldsIsDone.value,
  (newValue) => {
    if (newValue && !setupIsDone.value) {
      callAllEvents(form.value?.events.onReady);
      setupIsDone.value = true;
    }
  }
);
watch(
  () => form.value?.events.onIsValid,
  (callExist) => {
    stopWatchIsValid?.();
    stopWatchIsValid = null;
    if (callExist) {
      stopWatchIsValid = watch(isValidComputed, (newValue) => {
        if (newValue) {
          callAllEvents(form.value?.events.onIsValid);
        }
      });
    }
  },
  { immediate: true }
);
watch(
  () => form.value?.events.onIsInvalid,
  (callExist) => {
    stopWatchIsInvalid?.();
    stopWatchIsInvalid = null;
    if (callExist) {
      stopWatchIsInvalid = watch(isInvalidComputed, (newValue) => {
        if (newValue) {
          callAllEvents(form.value?.events.onIsInvalid);
        }
      });
    }
  },
  { immediate: true }
);
watch(
  () => form.value?.events.onUpdate,
  (callExist) => {
    stopWatchIsUpdated?.();
    stopWatchIsUpdated = null;
    if (callExist) {
      stopWatchIsUpdated = watch(
        isUpdatedComputed,
        () => {
          callAllEvents(form.value?.events.onUpdate);
        },
        { immediate: true }
      );
    }
  },
  { immediate: true }
);

// lifeCycle
onMounted(async () => {
  ensurePropsAreOk();
  await setupMetadatasAndForm();
  void nextTick(() => {
    stringyfiedValues = JSON.stringify(getValuesFormDeserialized());
  });
});
</script>

<template>
  <div v-show="setupIsDone" class="flex column">
    <div :class="form.cssClass ?? 'flex column q-pa-sm q-gutter-sm'">
      <SectionWrapper v-for="section in form.sections" :key="section.name" :section="section" :formApi="formApi"
        :privateFormApi="privateFormApi">

        <FieldWrapper v-for="field in section.fields" :key="field.metadata.field_name" :field="field" :formApi="formApi"
          :privateFormApi="privateFormApi" />
      </SectionWrapper>
    </div>
    <component :is="form.orphanErrorsComponent" :orphanErrors="orphanErrors" :formApi="formApi" />
    <component :is="form.actionComponent" :isLoadingSubmit="isLoadingSubmit" :formApi="formApi" />
  </div>
</template>
