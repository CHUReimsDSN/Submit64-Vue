<script setup lang="ts">
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  unref,
  watch,
} from "vue";
import type { TFieldBindings, TFormField, TSubmit64FieldApi, TSubmit64FieldWrapperProps, TSubmit64FileDataValue } from "../models";
import { date } from "quasar";
import { Utils } from "../utils";

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
let resetCallback: () => void = () => {
  return;
};
let clearCallback: () => void = () => {
  return;
}
let focusCallback: () => void = () => {
  return;
}
let unfocusCallback: () => void = () => {
  return;
}

// refs
const modelValue = ref<unknown>();
const isFocused = ref(false)
const backendErrors = ref<string[]>([]);

// functions
function softReset() {
  modelValue.value = propsComponent.formApi.getInitialValueByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
}
function reset() {
  modelValue.value = propsComponent.formApi.getInitialValueByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
  Utils.callAllEvents(propsComponent.field.events.onReset);
  resetCallback();
  void nextTick(() => {
    resetValidation();
  });
}
function formModelSerializeByType(value: unknown) {
  const form = propsComponent.formApi.form;
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
    case "attachmentHasOne":
    case "attachmentHasMany":
      return <TSubmit64FileDataValue>{
        add: [],
        delete: []
      }
  }
  return value;
}
function formModelDeserializeByType(value: unknown) {
  const form = propsComponent.formApi.form;
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
    case 'selectBelongsTo':
    case 'selectHasOne':
      if (value === undefined) {
        return null
      }
    case 'selectHasMany':
    case 'selectHasAndBelongsToMany':
      if (value === undefined) {
        return []
      }
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
    case "select":
      modelValue.value = undefined;
      break;
    case "text":
      modelValue.value = "";
      break;
    case "object":
      modelValue.value = {};
      break;
    case "selectBelongsTo":
    case "selectHasMany":
    case "selectHasAndBelongsToMany":
    case "selectHasOne":
      modelValue.value = undefined;
      break;
    case "attachmentHasOne":
    case "attachmentHasMany":
      modelValue.value = <TSubmit64FileDataValue>{
        add: [],
        delete: []
      }
      break;
  }
  clearCallback();
  Utils.callAllEvents(propsComponent.field.events.onClear);
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
function getFieldRef(): TFormField {
  return propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  )!;
}
function hide() {
  const fieldRef = getFieldRef()
  fieldRef.hidden = true;
  Utils.callAllEvents(propsComponent.field.events.onHide);
}
function unhide() {
  const fieldRef = getFieldRef()
  fieldRef.hidden = false;
  Utils.callAllEvents(propsComponent.field.events.onUnhide);
}
function setReadonlyState(state: boolean) {
  const fieldRef = getFieldRef()
  fieldRef.readonly = state;
}
function setCssClass(cssClass: string) {
  const fieldRef = getFieldRef()
  fieldRef.cssClass = cssClass;
}
function setLabel(label: string) {
  const fieldRef = getFieldRef()
  fieldRef.label = label;
}
function validate() {
  const validated = validationCallback();
  Utils.callAllEvents(propsComponent.field.events.onValidated);
  return validated;
}
function isValid() {
  const isValid = isValidCallback();
  return isValid;
}
function isInvalid() {
  return !isValid();
}
function resetValidation() {
  return resetValidationCallback();
}
function tryFocus() {
  if (!isFocused.value) {
    focusCallback();
    isFocused.value = true
  }
}
function tryUnfocus() {
  if (isFocused.value) {
    unfocusCallback();
    isFocused.value = false
  }
}
function isFocus() {
  return isFocused.value
}
function addBindings(bindings: TFieldBindings) {
  const fieldRef = getFieldRef()
  fieldRef.bindings = Utils.deepMergeObject(
    Utils.deepDupeObject(fieldRef.bindings),
    Utils.deepDupeObject(bindings)
  )
}
function registerBehaviourCallbacks(
  registerValidationArg: () => boolean,
  registerIsValidArg: () => boolean,
  registerResetValidationArg: () => void,
  registerOnResetArg?: () => void,
  registerOnClearArg?: () => void,
  registerOnFocusArg?: () => void,
  registerOnUnfocusArg?: () => void,
) {
  validationCallback = registerValidationArg;
  isValidCallback = registerIsValidArg;
  resetValidationCallback = registerResetValidationArg;
  if (registerOnResetArg) {
    resetCallback = registerOnResetArg;
  }
  if (registerOnClearArg) {
    clearCallback = registerOnClearArg
  }
  if (registerOnFocusArg) {
    focusCallback = registerOnFocusArg
  }
  if (registerOnUnfocusArg) {
    unfocusCallback = registerOnUnfocusArg
  }
}

// expose
const api: TSubmit64FieldApi = {
  softReset,
  reset,
  clear,
  validate,
  isValid,
  isInvalid,
  hide,
  unhide,
  resetValidation,
  getValueDeserialized,
  getValueSerialized,
  setupBackendErrors,
  setReadonlyState,
  setCssClass,
  setLabel,
  tryFocus,
  tryUnfocus,
  isFocus,
  addBindings,
  setValue: modelValueOnUpdate,
  field: propsComponent.field,
};
defineExpose(api);

// watchs
watch(
  () => (propsComponent.field.events.onUpdate ? modelValue.value : null),
  () => {
    Utils.callAllEvents(propsComponent.field.events.onUpdate);
  }
);
watch(
  () =>
    propsComponent.field.events.onIsValid ||
      propsComponent.field.events.onIsInvalid
      ? modelValue.value
      : null,
  (newValue) => {
    if (newValue) {
      Utils.callAllEvents(propsComponent.field.events.onIsValid);
    } else {
      Utils.callAllEvents(propsComponent.field.events.onIsInvalid);
    }
  }
);

// lifeCycle
onMounted(() => {
  softReset();
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef && propsComponent.formApi) {
    propsComponent.privateFormApi.registerFieldWrapperRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64FieldApi
    );
  }
  Utils.callAllEvents(propsComponent.field?.events.onReady);
});
</script>

<template>
  <div v-show="propsComponent.field.hidden !== true">
    <Component v-if="propsComponent.field.beforeComponent" :is="propsComponent.field.beforeComponent"
      :formApi="propsComponent.formApi" :fieldApi="api" />
    <Component :is="propsComponent.field.mainComponent" :modelValue="modelValue" :field="propsComponent.field"
      :formApi="propsComponent.formApi" :reset="reset" :clear="clear" :getValueDeserialized="getValueDeserialized"
      :getValueSerialized="getValueSerialized" :validate="validate" :modelValueOnUpdate="modelValueOnUpdate"
      :registerBehaviourCallbacks="registerBehaviourCallbacks" />
    <Component v-if="propsComponent.field.afterComponent" :is="propsComponent.field.afterComponent"
      :formApi="propsComponent.formApi" :fieldApi="api" />
    <div v-if="backendErrors.length > 0" class="q-field__bottom text-negative q-pt-none">
      <div v-for="(backendError, index) in backendErrors" :index="index" class="flex column">
        {{ backendError }}
      </div>
    </div>
  </div>
</template>
