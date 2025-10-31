<script setup lang="ts">
import {
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  ref,
  unref,
} from "vue";
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
let validationCallback: () => boolean = () => {
  return true;
};
let resetValidationCallback: () => void = () => {
  return;
};

// consts
const injectForm = inject(propsComponent.field.provideUniqKey)!;
const rules = getComputedRules();

// refs
const modelValue = ref<unknown>();
const backendErrors = ref<string[]>([]);

// functions
function reset() {
  if (!injectForm) {
    return;
  }
  modelValue.value = injectForm.getDataByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
  void nextTick(() => {
    resetValidation();
  });
}
function formModelSerializeByType(value: unknown) {
  switch (propsComponent.field.type) {
    case "date":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(String(value), injectForm.getForm().backendDateFormat),
        injectForm.getFormFactoryInstance().formSettings.dateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getForm().backendDatetimeFormat
        ),
        injectForm.getFormFactoryInstance().formSettings.datetimeFormat
      );
  }
  return value;
}
function formModelDeserializeByType(value: unknown) {
  switch (propsComponent.field.type) {
    case "date":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getFormFactoryInstance().formSettings.dateFormat
        ),
        injectForm.getForm().backendDateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          injectForm.getFormFactoryInstance().formSettings.datetimeFormat
        ),
        injectForm.getForm().backendDatetimeFormat
      );
  }
  return value;
}
function clear() {
  switch (propsComponent.field.type) {
    case "string":
      modelValue.value = "";
      break;
    case "checkbox":
      modelValue.value = false;
      break;
    case "date":
      modelValue.value = null;
      break;
    case "datetime":
      modelValue.value = null;
      break;
    case "number":
      modelValue.value = null;
      break;
    case "selectString":
      modelValue.value = null;
      break;
    case "text":
      modelValue.value = "";
      break;
    case "object":
      modelValue.value = {};
      break;
    case "selectBelongsTo":
      modelValue.value = null;
      break;
    case "selectHasMany":
      modelValue.value = null;
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
  modelValue.value = value;
}
function getValueSerialized() {
  return modelValue;
}
function getValueDeserialized() {
  return formModelDeserializeByType(unref(modelValue));
}
function setupBackendErrors(errorsArg: string[]) {
  backendErrors.value = errorsArg;
}
function validate() {
  return validationCallback();
}
function resetValidation() {
  return resetValidationCallback();
}
function registerBehaviourCallbacks(
  registerValidationArg: () => boolean,
  registerResetValidationArg: () => void
) {
  validationCallback = registerValidationArg;
  resetValidationCallback = registerResetValidationArg;
}

// exposes
defineExpose({
  reset,
  clear,
  validate,
  resetValidation,
  getValueDeserialized,
  getValueSerialized,
  setupBackendErrors,
});

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
    <slot
      :propsWrapper="({ modelValue, modelValueOnUpdate, field: propsComponent.field, injectForm, rules, reset, clear, getValueDeserialized, getValueSerialized, validate, registerBehaviourCallbacks } as TSubmit64FieldWrapperPropsSlot)"
    >
      <Component
        :is="propsComponent.field.component"
        :wrapper="({ modelValue, modelValueOnUpdate, field: propsComponent.field, injectForm, rules, reset, clear, getValueDeserialized, getValueSerialized, validate, registerBehaviourCallbacks } as TSubmit64FieldWrapperPropsSlot)"
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
