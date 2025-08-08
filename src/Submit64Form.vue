<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import {
  type TFormDef,
  type TSubmit64Expose,
  type TSubmit64Field,
  type TSubmit64FormProps,
  TResourceFormMetadataAndData,
} from "./models";
import { FormFactory } from "./form-factory";
import { submit64FormProviderSymbol } from "./inject-provider-symbol";
import FieldWrapper from "./components/FieldWrapper.vue";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps>(), {});

// consts
let formMetadataAndData: TResourceFormMetadataAndData | null = null;
const formFactory = Object.freeze(
  new FormFactory(
    propsComponent.resourceName,
    propsComponent.globalFormSettings
  )
);

// refs
const fieldRefs = ref<Record<string, TSubmit64Field>>({});
const generatedForm = ref<TFormDef>();
const setupIsDone = ref(false);
const isLoadingSubmit = ref(false);

// functions
async function setupMetadatasAndForm() {
  formMetadataAndData = await propsComponent.getMetadataAndData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
    context: propsComponent.context,
  });
  generatedForm.value = Object.freeze(
    formFactory.getAllField(formMetadataAndData)
  );
  setupIsDone.value = true;
}
async function submitForm(): Promise<void> {
  isLoadingSubmit.value = true;
  const formData: Record<string, unknown> = {};
  Object.entries(fieldRefs.value).forEach((entry) => {
    formData[entry[0]] = entry[1].getValue();
  });
  const newData = await propsComponent.submitForm({ formData });
  if (formMetadataAndData) {
    formMetadataAndData.resource_data = newData;
  }
  resetForm();
  isLoadingSubmit.value = false;
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
function getFormFactory() {
  return formFactory;
}

// provides
// TODO make by resource, for relation edition
provide(submit64FormProviderSymbol, {
  registerRef,
  getDefaultDataByFieldName,
  getFieldDataByFieldName,
  getFormFactory,
});

// exposes
defineExpose<TSubmit64Expose>({});

// lifeCycle
onMounted(async () => {
  await setupMetadatasAndForm();
});
</script>

<template>
  <div v-if="setupIsDone && generatedForm" class="flex column q-pa-sm q-gutter-sm">
    <Component
      v-for="(section, indexSection) in generatedForm.sections"
      :key="indexSection"
      :is="formFactory.sectionComponent"
      :section="section"
    >
      <template
        v-for="field in section.fields"
        :key="field.metadata.field_name"
      >
        <Component
          v-if="!$slots[field.metadata.field_name]"
          :is="field.component"
          :field="field"
        />

        <template v-else>
          <FieldWrapper :field="field">
            <template v-slot:default="{ propsWrapper }">
              <slot :propsWrapper="propsWrapper"> </slot>
            </template>
          </FieldWrapper>
        </template>
      </template>
    </Component>

    <component
      :is="formFactory.actionComponent"
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
