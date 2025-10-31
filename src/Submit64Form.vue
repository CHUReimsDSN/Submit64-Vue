<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import type {
  TFormDef,
  TSubmit64FormExpose,
  TSubmit64FieldWrapper,
  TSubmit64FormProps,
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64FormMode,
} from "./models";
import { FormFactory } from "./form-factory";
import FieldWrapper from "./components/FieldWrapper.vue";
import { uid } from "quasar";
import { getSubmit64FormProviderSymbol } from "./utils";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps>(), {});

// consts
let formMetadataAndData: TResourceFormMetadataAndData | null = null;
const formFactoryInstance = Object.freeze(
  new FormFactory(
    propsComponent.resourceName,
    propsComponent.formSettings,
    propsComponent.formStyle,
    propsComponent.actionComponent,
    propsComponent.sectionComponent,
    propsComponent.wrapperResetComponent,
    propsComponent.associationDisplayComponent,
    propsComponent.associationDisplayRecord
  )
);
const providingUniqKey = getSubmit64FormProviderSymbol(uid());

// refs
const fieldRefs = ref<Map<string, TSubmit64FieldWrapper>>(new Map());
const generatedForm = ref<TFormDef>();
const setupIsDone = ref(false);
const isLoadingSubmit = ref(false);
const mode = ref<TSubmit64FormMode>("create");

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
      providingUniqKey,
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
    [...fieldRefs.value].forEach((entry) => {
      const entryBackendErrors = newData.errors[entry[0]];
      if (entryBackendErrors) {
        entry[1].setupBackendErrors(entryBackendErrors);
      }
    });
    propsComponent.onSubmitFail?.();
  } else {
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
function registerRef(resourceDataKey: string, fieldComponent: TSubmit64FieldWrapper) {
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
  return fieldRef[1].getValue();
}
function getFormFactoryInstance() {
  return formFactoryInstance;
}
function getForm() {
  return generatedForm.value!;
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
  return mode.value
}

// provides
provide(providingUniqKey, {
  registerRef,
  getDataByFieldName,
  getFieldDataByFieldName,
  getFormFactoryInstance,
  getForm,
  getAssociationDataCallback,
});

// exposes
defineExpose({
  getMode,
  getFormFactoryInstance,
  getForm,
  validateForm,
  resetForm,
  clearForm,
  resetValidation,
  submitForm
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
      <Component
        v-for="(section, indexSection) in generatedForm.sections"
        :key="indexSection"
        :is="formFactoryInstance.sectionComponent"
        :section="section"
      >
        <template
          v-for="field in section.fields"
          :key="field.metadata.field_name"
        >
          <FieldWrapper
            v-if="!$slots[field.metadata.field_name]"
            :field="field"
          />

          <template v-else>
            <FieldWrapper :field="field">
              <template v-slot:default="{ propsWrapper }">
                <slot
                  :name="field.metadata.field_name"
                  :propsWrapper="propsWrapper"
                >
                </slot>
              </template>
            </FieldWrapper>
          </template>
        </template>
      </Component>
    </div>
    <component
      :is="formFactoryInstance.actionComponent"
      :isLoadingSubmit="isLoadingSubmit"
      :submit="submitForm"
      :clear="generatedForm.clearable ? clearForm : undefined"
      :reset="generatedForm.resetable ? resetForm : undefined"
    />
    <template v-if="$slots['more_actions']">
      <slot name="more_actions" :propsForm="{ generatedForm }"></slot>
    </template>
  </div>
</template>
