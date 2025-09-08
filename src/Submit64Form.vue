<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import {
  type TFormDef,
  type TSubmit64Expose,
  type TSubmit64Field,
  type TSubmit64FormProps,
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
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
  new FormFactory(propsComponent.resourceName, propsComponent.formSettings)
);
const providingUniqKey = getSubmit64FormProviderSymbol(uid());

// refs
const fieldRefs = ref<Record<string, TSubmit64Field>>({});
const generatedForm = ref<TFormDef>();
const setupIsDone = ref(false);
const isLoadingSubmit = ref(false);
const mode = ref<"edit" | "create">("create");

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
  console.log(generatedForm.value)
  if (propsComponent.resourceId) {
    mode.value = "edit";
  }
  setupIsDone.value = true;
}
async function submitForm(): Promise<void> {
  isLoadingSubmit.value = true;
  if (!validateForm()) {
    return;
  }
  const resourceData = getValuesForm();
  const newData = await propsComponent.getSubmitFormData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    resourceData,
    context: propsComponent.context,
  });
  if (!newData.success) {
    Object.entries(fieldRefs.value).forEach((entry) => {
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
function getValuesForm(): Record<string, unknown> {
  const resourceData: Record<string, unknown> = {};
  Object.entries(fieldRefs.value).forEach((entry) => {
    resourceData[entry[0]] = entry[1].getValue();
  });
  return resourceData;
}
function validateForm() {
  let formValid = true;
  Object.values(fieldRefs.value).forEach((fieldRef) => {
    if (fieldRef.validate() !== true) {
      formValid = false;
      return;
    }
  });
  return formValid;
}
function resetForm() {
  Object.values(fieldRefs.value).forEach((fieldRef) => {
    fieldRef.reset();
  });
}
function clearForm() {
  Object.values(fieldRefs.value).forEach((fieldRef) => {
    fieldRef.clear();
  });
}
function registerRef(resourceDataKey: string, fieldComponent: TSubmit64Field) {
  fieldRefs.value[resourceDataKey] = fieldComponent;
}
function getDefaultDataByFieldName(fieldName: string) {
  if (!formMetadataAndData) {
    return;
  }
  return formMetadataAndData.resource_data[fieldName];
}
function getFieldDataByFieldName(fieldName: string) {
  const fieldRef = Object.entries(fieldRefs.value).find((entry) => {
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

// provides
provide(providingUniqKey, {
  registerRef,
  getDefaultDataByFieldName,
  getFieldDataByFieldName,
  getFormFactoryInstance,
  getForm,
  getAssociationDataCallback,
});

// exposes
defineExpose<TSubmit64Expose>({});

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
