<script setup lang="ts">
import {
  onMounted,
  ref,
  type Component,
  unref,
  useSlots,
  defineComponent,
} from "vue";
import type {
  TFormDef,
  TSubmit64FormExpose,
  TSubmit64FieldWrapper,
  TSubmit64FormProps,
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64FormMode,
  TSubmit64FunctionsProvider,
  TSubmit64OverridedComponents,
} from "./models";
import { FormFactory } from "./form-factory";
import FieldWrapper from "./components/FieldWrapper.vue";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps>(), {});

// vars
let formMetadataAndData: TResourceFormMetadataAndData | null = null;

// consts
const formFactoryInstance = Object.freeze(
  new FormFactory(
    propsComponent.resourceName,
    getOverridedComponents(),
    propsComponent.formSettings,
    propsComponent.formStyle
  )
);
const functionsProvider: TSubmit64FunctionsProvider = {
  registerRef,
  getDataByFieldName,
  getFieldDataByFieldName,
  getFormFactoryInstance,
  getForm,
  getAssociationDataCallback,
};

// refs
const fieldRefs = ref<Map<string, TSubmit64FieldWrapper>>(new Map());
const generatedForm = ref<TFormDef>();
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
  generatedForm.value = Object.freeze(
    formFactoryInstance.getForm(
      formMetadataAndData,
      propsComponent.resourceId,
      propsComponent.context
    )
  );
  if (propsComponent.resourceId) {
    mode.value = "edit";
  }
  setupIsDone.value = true;
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
    [...fieldRefs.value].forEach((entry) => {
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
    propsComponent.onSubmitFail?.();
  } else {
    orphanErrors.value = {};
    if (mode.value === "create") {
      mode.value = "edit";
    }
    if (formMetadataAndData && newData.resource_data) {
      formMetadataAndData.resource_data = newData.resource_data;
    }
    resetForm();
    propsComponent.onSubmitSuccess?.();
  }
  isLoadingSubmit.value = false;
}
function getOverridedComponents() {
  const overridedComponents: TSubmit64OverridedComponents = {};
  const slots = useSlots();
  const map = new Map<string, Component>();
  for (const key in slots) {
    const slot = slots[key];
    if (slot) {
      map.set(
        key,
        defineComponent(() => {
          return () => slot();
        })
      );
    }
  }
  const keyMap = [
    ["actionComponent", "actions", "actionComponent"],
    ["orphanErrorsComponent", "orphan-errors", "orphanErrorsComponent"],
    ["sectionComponent", "sections", "sectionComponent"],
    ["wrapperResetComponent", "wrapper-reset", "wrapperResetComponent"],
    [
      "associationDisplayComponent",
      "association-display",
      "associationDisplayComponent",
    ],
  ] as const;
  keyMap.forEach((entryKey) => {
    const componentFromProps = propsComponent[entryKey[0]];
    if (componentFromProps && !map.has(entryKey[1])) {
      overridedComponents[entryKey[2]] = componentFromProps;
    }
  });
  overridedComponents["associationDisplayRecord"] =
    propsComponent.associationDisplayRecord;
  return overridedComponents;
}
function getValuesFormDeserialized(): Record<string, unknown> {
  const resourceData: Record<string, unknown> = {};
  [...fieldRefs.value].forEach((entry) => {
    resourceData[entry[0]] = entry[1].getValueDeserialized();
  });
  return resourceData;
}
function validateForm() {
  let formValid = true;
  fieldRefs.value.forEach((fieldRef) => {
    if (!fieldRef.validate()) {
      formValid = false;
      return;
    }
  });
  return formValid;
}
function resetForm() {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.reset();
  });
}
function clearForm() {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.clear();
  });
}
function resetValidation() {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.resetValidation();
  });
}
function clearBackendErrors() {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.setupBackendErrors([]);
  });
}
function registerRef(
  resourceDataKey: string,
  fieldComponent: TSubmit64FieldWrapper
) {
  fieldRefs.value.set(resourceDataKey, fieldComponent);
}
function getDataByFieldName(fieldName: string) {
  if (!formMetadataAndData) {
    return;
  }
  return formMetadataAndData.resource_data[fieldName];
}
function getFieldDataByFieldName(fieldName: string) {
  const fieldRef = [...fieldRefs.value].find((entry) => {
    return entry[0] === fieldName;
  });
  if (!fieldRef) {
    return null;
  }
  return fieldRef[1].getValueSerialized();
}
function getFormFactoryInstance() {
  return formFactoryInstance;
}
function getForm() {
  return unref(generatedForm.value)!;
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
  return mode.value;
}

// exposes
defineExpose({
  getMode,
  getFormFactoryInstance,
  getForm,
  validateForm,
  resetForm,
  clearForm,
  resetValidation,
  submitForm,
}) as unknown as TSubmit64FormExpose;

// lifeCycle
onMounted(async () => {
  ensurePropsAreOk();
  await setupMetadatasAndForm();
});
</script>

<template>
  <div v-if="setupIsDone && generatedForm" class="flex column">
    <div :class="generatedForm.cssClass ?? 'flex column q-pa-sm q-gutter-sm'">
      <template
        v-for="(section, _indexSection) in generatedForm.sections"
        :key="_indexSection"
      >
        <Component
          :is="formFactoryInstance.sectionComponent"
          :section="section"
          :context="propsComponent.context"
          :functions-provider="functionsProvider"
        >
          <template
            v-for="field in section.fields"
            :key="field.metadata.field_name"
          >
            <FieldWrapper
              v-if="!$slots[field.metadata.field_name]"
              :field="field"
              :context="propsComponent.context"
              :functions-provider="functionsProvider"
            />

            <template v-else>
              <FieldWrapper
                :field="field"
                :context="propsComponent.context"
                :functions-provider="functionsProvider"
              >
                <template v-slot:default="propsField">
                  <slot v-bind="propsField"></slot>
                </template>
              </FieldWrapper>
            </template>
          </template>
        </Component>
      </template>
    </div>
    <component
      :is="formFactoryInstance.orphanErrorsComponent"
      :orphanErrors="orphanErrors"
      :functions-provider="functionsProvider"
    />
    <component
      :is="formFactoryInstance.actionComponent"
      :isLoadingSubmit="isLoadingSubmit"
      :submit="submitForm"
      :clear="generatedForm.clearable ? clearForm : undefined"
      :reset="generatedForm.resetable ? resetForm : undefined"
      :functions-provider="functionsProvider"
    />
    <template v-if="$slots['more_actions']">
      <slot name="more_actions" :propsForm="{ generatedForm }"></slot>
    </template>
  </div>
</template>
