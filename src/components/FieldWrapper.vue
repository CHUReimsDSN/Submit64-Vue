<script setup lang="ts" generic="T">
import { getCurrentInstance, inject, onMounted, ref, unref } from "vue";
import type {
  TFormFieldDef,
  TSubmit64Field,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { Submit64Rules } from "../rules";
import { date } from "quasar";

// props
const propsComponent = defineProps<{
  field: TFormFieldDef;
}>();

// consts
const injectForm = inject(propsComponent.field.provideUniqKey)!;
const rules = getComputedRules();

// refs
const modelValue = ref<T>();
const backendErrors = ref<string[]>([]);

// functions
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
      modelValue.value = "" as T;
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
function getValue() {
  return unref(modelValue);
}
function setupBackendErrors(errorsArg: string[]) {
  backendErrors.value = errorsArg;
}
function validate(): boolean | string {
  let isValid: boolean | string = true;
  rules.forEach((rule) => {
    const resultRule = rule(getValue());
    if (resultRule !== true) {
      isValid = resultRule;
      return;
    }
  });
  return isValid;
}

// exposes
defineExpose({
  reset,
  clear,
  validate,
  getValue,
  setupBackendErrors,
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
    <slot
      :propsWrapper="({ modelValue, modelValueOnUpdate, field, injectForm, rules, reset, clear, getValue, validate } as TSubmit64FieldWrapperPropsSlot)"
    >
      <Component
        :is="propsComponent.field.component"
        :wrapper="({ modelValue, modelValueOnUpdate, field, injectForm, rules, reset, clear, getValue, validate } as TSubmit64FieldWrapperPropsSlot)"
      />
      <div
        v-if="backendErrors.length > 0"
        class="q-field--error q-field__bottom text-warning"
      >
        <div
          v-for="(backendError, index) in backendErrors"
          :index="index"
          class="flex column"
        >
          {{ backendError }}
        </div>
      </div>
    </slot>
  </div>
</template>
