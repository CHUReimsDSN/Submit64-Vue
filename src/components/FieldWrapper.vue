<script setup lang="ts">
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  unref,
  watch,
} from "vue";
import type {
  TSubmit64FieldWrapperComponent,
  TSubmit64FieldWrapperProps,
} from "../models";
import { Submit64Rules } from "../rules";
import { date } from "quasar";
import { callAllEvents } from "../utils";

// props
const propsComponent = defineProps<TSubmit64FieldWrapperProps>();

// var
let validationCallback: () => boolean = () => {
  return true;
};
let isValidCallback: () => boolean = () => {
  return true;
};
let resetValidationCallback: () => void = () => {
  return;
};

// consts
const rules = getComputedRules();

// refs
const modelValue = ref<unknown>();
const backendErrors = ref<string[]>([]);

// functions
function reset() {
  modelValue.value = propsComponent.privateFormApi.getInitialValueByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
  callAllEvents(propsComponent.field.events.onReset);
  void nextTick(() => {
    resetValidation();
  });
}
function formModelSerializeByType(value: unknown) {
  const form = propsComponent.formApi.getForm();
  switch (propsComponent.field.type) {
    case "checkbox":
      if (value === null || value === undefined || value === "") {
        return false;
      }
      return value;
    case "date":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(String(value), form.formSettings.backendDateFormat),
        form.formSettings.dateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          form.formSettings.backendDatetimeFormat
        ),
        form.formSettings.datetimeFormat
      );
  }
  return value;
}
function formModelDeserializeByType(value: unknown) {
  const form = propsComponent.formApi.getForm();
  switch (propsComponent.field.type) {
    case "date":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(String(value), form.formSettings.dateFormat),
        form.formSettings.backendDateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(String(value), form.formSettings.datetimeFormat),
        form.formSettings.backendDatetimeFormat
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
      modelValue.value = undefined;
      break;
    case "text":
      modelValue.value = "";
      break;
    case "object":
      modelValue.value = {};
      break;
    case "selectBelongsTo":
      modelValue.value = undefined;
      break;
    case "selectHasMany":
      modelValue.value = undefined;
      break;
  }
  callAllEvents(propsComponent.field.events.onClear);
}
function getComputedRules() {
  return Submit64Rules.computeServerRules(
    propsComponent.field.rules ?? [],
    propsComponent.field.type,
    propsComponent.formApi
  );
}
function modelValueOnUpdate(value: unknown) {
  modelValue.value = value;
}
function getValueSerialized() {
  return unref(modelValue);
}
function getValueDeserialized() {
  return formModelDeserializeByType(unref(modelValue));
}
function setupBackendErrors(errorsArg: string[]) {
  backendErrors.value = errorsArg;
}
function hide() {}
function unhide() {}
function validate() {
  const validated = validationCallback();
  callAllEvents(propsComponent.field.events.onValidated);
  return validated;
}
function isValid() {
  const isValid = isValidCallback();
  return isValid;
}
function resetValidation() {
  return resetValidationCallback();
}
function getDataRef() {
  return propsComponent.privateFormApi.getFormRef().value?.sections.map((section => section.fields)).flat().find((field) => {
    return field.metadata.field_name === propsComponent.field.metadata.field_name
  })!
}
function registerBehaviourCallbacks(
  registerValidationArg: () => boolean,
  registerIsValidArg: () => boolean,
  registerResetValidationArg: () => void
) {
  validationCallback = registerValidationArg;
  isValidCallback = registerIsValidArg;
  resetValidationCallback = registerResetValidationArg;
}

// exposes
defineExpose({
  reset,
  clear,
  validate,
  isValid,
  hide,
  unhide,
  resetValidation,
  getValueDeserialized,
  getValueSerialized,
  setupBackendErrors,
  getDataRef
});

// watchs
watch(
  () => (propsComponent.field.events.onUpdate ? modelValue.value : null),
  () => {
    callAllEvents(propsComponent.field.events.onUpdate);
  }
);
watch(
  () => (propsComponent.field.events.onIsValid ? isValid() : null),
  (newValue) => {
    if (newValue) {
      callAllEvents(propsComponent.field.events.onIsValid);
    }
  }
);
// TODO confirm statement

// lifeCycle
onMounted(() => {
  reset();
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef && propsComponent.formApi) {
    propsComponent.registerRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64FieldWrapperComponent
    );
  }
});
</script>

<template>
  <div :class="propsComponent.field.hidden ? 'submit64-field-hidden' : ''">
    <Component
      v-if="propsComponent.field.beforeComponent"
      :is="propsComponent.field.beforeComponent"
      :field="propsComponent.field"
      :formApi="propsComponent.formApi"
    />
    <Component
      :is="propsComponent.field.mainComponent"
      :modelValue="modelValue"
      :field="propsComponent.field"
      :formApi="propsComponent.formApi"
      :rules="rules"
      :reset="reset"
      :clear="clear"
      :getValueDeserialized="getValueDeserialized"
      :getValueSerialized="getValueSerialized"
      :validate="validate"
      :modelValueOnUpdate="modelValueOnUpdate"
      :registerBehaviourCallbacks="registerBehaviourCallbacks"
    />
    <Component
      v-if="propsComponent.field.afterComponent"
      :is="propsComponent.field.afterComponent"
      :field="propsComponent.field"
      :formApi="propsComponent.formApi"
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
  </div>
</template>

<style>
.submit64-field-hidden {
  opacity: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
}
</style>
