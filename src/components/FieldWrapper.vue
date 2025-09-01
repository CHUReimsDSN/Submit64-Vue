<script setup lang="ts" generic="T">
import { getCurrentInstance, inject, onMounted, ref, unref } from "vue";
import type {
  TFormFieldDef,
  TSubmit64Field,
  TSubmit64FieldWrapperPropsSlot,
  TSubmit64FieldWrapperResetPropsSlot,
} from "../models";
import { Submit64Rules } from "../rules";
import { date } from "quasar";

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
  modelValue.value = formModelValueByType(modelValue.value);
}
function formModelValueByType(value: T) {
  switch (propsComponent.field.type) {
    case "date":
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getForm().backendDateFormat!
        ),
        injectForm.getFormFactoryInstance().formSettings.dateFormat
      ) as T;
  }
  return value;
}
function clear() {
  switch (propsComponent.field.type) {
    case "string":
      modelValue.value = "" as T;
      break;
    case "checkbox":
      modelValue.value = false as T;
      break;
    case "date":
      modelValue.value = date.formatDate(
        new Date(),
        injectForm.getFormFactoryInstance().formSettings.dateFormat
      ) as T;
      break;
    case "number":
      modelValue.value = 0 as T;
      break;
    case "selectString":
      modelValue.value = null as T;
      break;
    case "text":
      modelValue.value = "" as T;
      break;
    case "object":
      modelValue.value = {} as T;
      break;
    case "selectBelongsTo":
      modelValue.value = null as T;
      break;
    case "selectHasMany":
      modelValue.value = null as T;
      break;
  }
}
function getComputedRules() {
  return Submit64Rules.computeServerRules(
    propsComponent.field.rules ?? [],
    propsComponent.field.type,
    injectForm
  );
}
function modelValueOnUpdate(value: unknown) {
  modelValue.value = value as T;
}
function getModelValueValue() {
  return unref(modelValue.value)
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
  const proxyInstanceRef = getCurrentInstance()?.exposed;
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
        <component
          :is="injectForm.getFormFactoryInstance().wrapperResetComponent"
          :reset="reset"
        />
      </slot>
    </template>
    <slot
      :propsWrapper="({ modelValue, modelValueOnUpdate, field, injectForm, reset, clear, getComputedRules, getModelValueValue } as TSubmit64FieldWrapperPropsSlot)"
    ></slot>
  </div>
</template>
