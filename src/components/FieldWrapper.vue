<script setup lang="ts" generic="T">
import { getCurrentInstance, inject, onMounted, ref } from "vue";
import type {
  TFormFieldDef,
  TSubmit64Field,
  TSubmit64FieldWrapperPropsSlot,
  TSubmit64FieldWrapperResetPropsSlot,
} from "../models";
import { Submit64Rules } from "../rules";

// props
const propsComponent = defineProps<{
  field: TFormFieldDef;
}>();

// consts
const injectForm = inject(propsComponent.field.provideUniqKey)!;

// refs
const modelValue = ref<T>();

// functions
function getValue() {
  return modelValue.value;
}
function reset() {
  if (!injectForm) {
    return;
  }
  modelValue.value = injectForm.getDefaultDataByFieldName(
    propsComponent.field.metadata.field_name
  ) as T;
}
function clear() {
  switch (typeof modelValue.value) {
    case "boolean":
      modelValue.value = false as T;
    case "string":
      modelValue.value = "" as T;
    case "number":
      modelValue.value = 0 as T;
    case "object":
      modelValue.value = {} as T;
  }
}
function getComputedRules() {
  if (!injectForm) {
  }
  return Submit64Rules.computeServerRules(
    propsComponent.field.rules ?? [],
    injectForm.getFormFactory().formSettings,
    propsComponent.field.type
  );
}
function modelValueOnUpdate(value: unknown) {
  modelValue.value = value as T;
}

// exposes
defineExpose({
  reset,
  clear,
  getValue,
});

// lifeCycle
onMounted(() => {
  reset();
  const proxyInstanceRef = getCurrentInstance()?.proxy;
  if (proxyInstanceRef && injectForm) {
    injectForm.registerRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64Field
    );
  }
});
</script>

<template>
  <div>
    <template v-if="propsComponent.field.resetable">
      <slot
        name="reset"
        :actionProps="({ reset } as TSubmit64FieldWrapperResetPropsSlot)"
      >
        <component :is="injectForm.getFormFactory().wrapperResetComponent" :reset="reset" />
      </slot>
    </template>
    <slot
      :propsWrapper="({ modelValue, modelValueOnUpdate, field, injectForm, reset, clear, getComputedRules } as TSubmit64FieldWrapperPropsSlot)"
    ></slot>
  </div>
</template>
