<script setup lang="ts" generic="T">
import { getCurrentInstance, inject, onMounted, ref, unref } from "vue";
import type {
  TFormFieldDef,
  TSubmit64FieldWrapper,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { Submit64Rules } from "../rules";
import { date } from "quasar";

// props
const propsComponent = defineProps<{
  field: TFormFieldDef;
}>();

// var
var validationCallback: () => boolean = () => {
  return true;
};

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
  modelValue.value = formModelSerializeByType(modelValue.value);
}
function formModelSerializeByType(value: T) {
  switch (propsComponent.field.type) {
    case "date":
      if (value === null || value === undefined) {
        return value;
      }
      return date.formatDate(
        date.extractDate(String(value), injectForm.getForm().backendDateFormat),
        injectForm.getFormFactoryInstance().formSettings.dateFormat
      ) as T;
    case "datetime":
      if (value === null || value === undefined) {
        return value;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getForm().backendDatetimeFormat
        ),
        injectForm.getFormFactoryInstance().formSettings.datetimeFormat
      ) as T;
  }
  return value;
}
function formModelDeserializeByType(value: T) {
  switch (propsComponent.field.type) {
    case "date":
      if (value === null || value === undefined || value === "") {
        return value;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getFormFactoryInstance().formSettings.dateFormat
        ),
        injectForm.getForm().backendDateFormat
      ) as T;
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return value;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getFormFactoryInstance().formSettings.datetimeFormat
        ),
        injectForm.getForm().backendDatetimeFormat
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
      modelValue.value = null as T;
      break;
    case "datetime":
      modelValue.value = null as T;
      break;
    case "number":
      modelValue.value = null as T;
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
function getValueSerialized() {
  return modelValue;
}
function getValueDeserialized() {
  return formModelDeserializeByType(unref(modelValue) as T);
}
function setupBackendErrors(errorsArg: string[]) {
  backendErrors.value = errorsArg;
}
function validate(): boolean | string {
  return validationCallback();
}
function registerValidationCallback(validationCallbackArg: () => boolean) {
  validationCallback = validationCallbackArg;
}

// exposes
defineExpose({
  reset,
  clear,
  validate,
  getValueDeserialized,
  getValueSerialized,
  setupBackendErrors,
});

const propsWrapper = {
  modelValue,
  modelValueOnUpdate,
  field: propsComponent.field,
  injectForm,
  rules,
  reset,
  clear,
  getValueDeserialized,
  getValueSerialized,
  validate,
  registerValidationCallback,
} as TSubmit64FieldWrapperPropsSlot;

// lifeCycle
onMounted(() => {
  reset();
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef && injectForm) {
    injectForm.registerRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64FieldWrapper
    );
  }
});
</script>

<template>
  <div>
    <slot :propsWrapper="propsWrapper">
      <Component
        :is="propsComponent.field.component"
        :wrapper="propsWrapper"
      />
      <div
        v-if="backendErrors.length > 0"
        class="q-field__bottom text-negative q-pt-none"
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
