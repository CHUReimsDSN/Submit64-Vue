<script setup lang="ts">
import {
  onMounted,
  ref,
  unref,
  useSlots,
  defineComponent,
  nextTick,
  watch,
} from "vue";
import type {
  TFormDef,
  TSubmit64FormExpose,
  TSubmit64FieldWrapperComponent,
  TSubmit64FormProps,
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64FormMode,
  TSubmit64FormApi,
  TSubmit64OverridedComponents,
  TSubmit64SectionWrapperComponent,
  TSubmit64PrivateFormApi,
  TSubmit64FullFormApi,
} from "./models";
import { FormFactory } from "./form-factory";
import { callAllEvents, deepFreeze } from "./utils";
import FieldWrapper from "./components/FieldWrapper.vue";
import SectionWrapper from "./components/SectionWrapper.vue";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps>(), {});

// vars
let formMetadataAndData: TResourceFormMetadataAndData | null = null;
let stringyfiedValues = "";

// consts
const fieldWrapperRefs: Map<string, TSubmit64FieldWrapperComponent> = new Map();
const sectionsWrapperRefs: Map<string, TSubmit64SectionWrapperComponent> =
  new Map();
const formApi: TSubmit64FormApi = {
  getMode,
  getForm,
  getSection,
  getField,
  validateForm,
  isFormValid,
  resetForm,
  clearForm,
  resetValidation,
  submitForm,
  valuesHasChanged,
};
const privateFormApi: TSubmit64PrivateFormApi = {
  getInitialValueByFieldName,
  getAssociationDataCallback,
  getFormRef,
};
const fullFormApi: TSubmit64FullFormApi = {
  ...formApi,
  ...privateFormApi,
};

// refs
const form = ref<TFormDef>();
const setupIsDone = ref(false);
const isLoadingSubmit = ref(false);
const mode = ref<TSubmit64FormMode>("create");
const orphanErrors = ref<Record<string, string[]>>({});

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
    fullFormApi,
    propsComponent.eventManager
  );
  if (propsComponent.resourceId) {
    mode.value = "edit";
  }
  setupIsDone.value = true;
  callAllEvents(form.value?.events?.onReady);
}
async function submitForm(): Promise<void> {
  if (!validateForm()) {
    return;
  }
  isLoadingSubmit.value = true;
  clearBackendErrors();
  const resourceData = getValuesFormDeserialized();
  const newData = await propsComponent.getSubmitFormData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    resourceData,
    context: propsComponent.context,
  });
  if (!newData.success) {
    orphanErrors.value = {};
    const parentedKeys: string[] = [];
    [...fieldWrapperRefs].forEach((entry) => {
      const entryBackendErrors = newData.errors[entry[0]];
      if (entryBackendErrors) {
        entry[1].setupBackendErrors(entryBackendErrors);
        parentedKeys.push(entry[0]);
      }
    });
    Object.entries(newData.errors).forEach((errorEntry) => {
      if (parentedKeys.includes(errorEntry[0])) {
        return;
      }
      orphanErrors.value[errorEntry[0]] = errorEntry[1];
    });
  } else {
    orphanErrors.value = {};
    if (mode.value === "create") {
      mode.value = "edit";
    }
    if (formMetadataAndData && newData.resource_data) {
      formMetadataAndData.resource_data = newData.resource_data;
    }
    stringyfiedValues = JSON.stringify(getValuesFormDeserialized());
    resetForm();
  }
  callAllEvents(form.value?.events?.onSubmit);
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
  const slots = useSlots();
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
              slots: innerSlots,
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
  [...fieldWrapperRefs].forEach((entry) => {
    resourceData[entry[0]] = entry[1].getValueDeserialized();
  });
  return resourceData;
}
function validateForm() {
  let formValid = true;
  fieldWrapperRefs.forEach((fieldRef) => {
    if (!fieldRef.validate()) {
      formValid = false;
      return;
    }
  });
  callAllEvents(form.value?.events?.onValidated);
  return formValid;
}
function isFormValid() {
  let formValid = true;
  fieldWrapperRefs.forEach((fieldRef) => {
    if (!fieldRef.isValid()) {
      formValid = false;
      return;
    }
  });
  return formValid;
}
function resetForm() {
  fieldWrapperRefs.forEach((fieldRef) => {
    fieldRef.reset();
  });
  callAllEvents(form.value?.events?.onReset);
}
function clearForm() {
  fieldWrapperRefs.forEach((fieldRef) => {
    fieldRef.clear();
  });
  callAllEvents(form.value?.events?.onClear);
}
function resetValidation() {
  fieldWrapperRefs.forEach((fieldRef) => {
    fieldRef.resetValidation();
  });
}
function clearBackendErrors() {
  fieldWrapperRefs.forEach((fieldRef) => {
    fieldRef.setupBackendErrors([]);
  });
}
function registerSectionWrapperRef(
  sectionName: string,
  sectionComponent: TSubmit64SectionWrapperComponent
) {
  sectionsWrapperRefs.set(sectionName, sectionComponent);
}
function registerFieldWrapperRef(
  fieldName: string,
  fieldComponent: TSubmit64FieldWrapperComponent
) {
  fieldWrapperRefs.set(fieldName, fieldComponent);
}
function getInitialValueByFieldName(fieldName: string) {
  if (!formMetadataAndData) {
    return;
  }
  return formMetadataAndData.resource_data[fieldName];
}
function getForm() {
  return deepFreeze(unref(form.value!));
}
function getFormRef() {
  return form;
}
function getSection(sectionName: string) {
  return sectionsWrapperRefs.get(sectionName);
}
function getField(fieldName: string) {
  return fieldWrapperRefs.get(fieldName);
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

// exposes
defineExpose(formApi) as unknown as TSubmit64FormExpose;

// watchs
watch(
  () => (form.value?.events.onIsValid ? isFormValid() : null),
  () => {
    callAllEvents(form.value?.events?.onIsValid);
  }
);
watch(
  () => (form.value?.events.onUpdate ? getValuesFormDeserialized() : null),
  () => {
    callAllEvents(form.value?.events?.onUpdate);
  }
);

// lifeCycle
onMounted(async () => {
  console.time("mount and ready");
  ensurePropsAreOk();
  await setupMetadatasAndForm();
  void nextTick(() => {
    stringyfiedValues = JSON.stringify(getValuesFormDeserialized());
  });
  console.timeEnd("mount and ready");
});
</script>

<template>
  <div v-if="setupIsDone && form" class="flex column">
    <div :class="form.cssClass ?? 'flex column q-pa-sm q-gutter-sm'">
      <SectionWrapper
        v-for="(section, indexSection) in form.sections"
        :key="section.name ?? indexSection"
        :section="section"
        :sectionIndex="indexSection"
        :context="propsComponent.context"
        :formApi="formApi"
        :privateFormApi="privateFormApi"
        :registerRef="registerSectionWrapperRef"
      >
        <FieldWrapper
          v-for="field in section.fields"
          :key="field.metadata.field_name"
          :field="field"
          :context="propsComponent.context"
          :formApi="formApi"
          :privateFormApi="privateFormApi"
          :registerRef="registerFieldWrapperRef"
        />
      </SectionWrapper>
    </div>
    <component
      :is="form.orphanErrorsComponent"
      :orphanErrors="orphanErrors"
      :formApi="formApi"
    />
    <component
      :is="form.actionComponent"
      :isLoadingSubmit="isLoadingSubmit"
      :submit="submitForm"
      :clear="form.clearable ? clearForm : undefined"
      :reset="form.resetable ? resetForm : undefined"
      :formApi="formApi"
      :privateFormApi="privateFormApi"
    />
  </div>
</template>
