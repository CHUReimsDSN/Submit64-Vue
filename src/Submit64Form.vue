<script setup lang="ts" generic="T">
import { onMounted, provide, ref } from "vue";
import {
  type TFormDef,
  type TSubmit64Expose,
  type TSubmit64Field,
  type TResourceColumnMetaData,
  type TSubmit64FormProps,
  TFormFieldDef,
} from "./models";
import { FormFactory } from "./form-factory";
import { submit64FormProviderSymbol } from "./inject-provider-symbol";
import FieldWrapper from "./components/FieldWrapper.vue";

// props
const propsComponent = withDefaults(defineProps<TSubmit64FormProps<T>>(), {});

// consts
let resourceMetaDatas: TResourceColumnMetaData[] = [];
const formFactory = new FormFactory(
  propsComponent.resourceName,
  propsComponent.globalFormSettings
);

// refs
const fieldRefs = ref<TSubmit64Field[]>([]);
const generatedForm = ref<TFormDef>();
const resourceData = ref<T>();
const setupIsDone = ref(false);

// functions
async function setupMetadatasAndForm() {
  resourceMetaDatas = await propsComponent.getMetadata({
    resourceName: propsComponent.resourceName,
  });
  generatedForm.value = formFactory.getAllField(
    propsComponent.resourceName,
    resourceMetaDatas
  );
}
async function setupResourceData() {
  resourceData.value = await propsComponent.getResourceData({
    resourceName: propsComponent.resourceName,
    resourceId: propsComponent.resourceId,
  });
}
async function submitForm(): Promise<unknown> {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.getValue()
  });
  return;
}
function resetForm() {
  fieldRefs.value.forEach((fieldRef) => {
    fieldRef.reset()
  })
}
function registerRef(fieldComponent: TSubmit64Field) {
  fieldRefs.value.push(fieldComponent);
}
function getDataByFieldName(field: TFormFieldDef) {
  if (!resourceData.value) {
    return;
  }
  const rawFieldName = (
    field.metadata.field_name.includes(".")
      ? field.metadata.field_name.split(".")[1].split("::")[0]
      : field.metadata.field_name
  ) as keyof T;
  const associationName = field.metadata.field_name.includes(".")
    ? (field.metadata.field_name.split(".")[0] as keyof T)
    : null;
  if (associationName !== null) {
    return resourceData.value[associationName][
      rawFieldName as keyof T[keyof T]
    ];
  }
  return resourceData.value[rawFieldName];
}

// provides
provide(submit64FormProviderSymbol, {
  registerRef,
});

// exposes
defineExpose<TSubmit64Expose>({});

// lifeCycle
onMounted(async () => {
  await setupMetadatasAndForm();
  await setupResourceData();
});
</script>

<template>
  <q-form
    v-if="setupIsDone && generatedForm"
    class="flex q-pa-sm q-gutter-sm"
    @submit="submitForm"
    @reset="resetForm"
  >
    <Component
      v-for="(section, indexSection) in generatedForm.sections"
      :key="indexSection"
      :is="formFactory.sectionComponent"
    >
      <template
        v-for="field in section.fields"
        :key="field.metadata.field_name"
      >
        <Component
          v-if="!$slots[field.metadata.field_name]"
          :is="field.component"
          :field="field"
          :data="getDataByFieldName(field)"
        />

        <template v-else>
          <FieldWrapper :model-value="getDataByFieldName(field)">
            <template v-slot:default="propsWrapper">
              <slot
                :name="field.metadata.field_name"
                :propsSlot="{ field, propsWrapper }"
              >
              </slot>
            </template>
          </FieldWrapper>
        </template>
      </template>
    </Component>

    <component :is="formFactory.actionComponent" />
    <template v-if="$slots.">
      <slot name="more_actions"></slot>
    </template>
  </q-form>
</template>
