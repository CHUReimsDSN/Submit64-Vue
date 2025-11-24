<script setup lang="ts">
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  unref,
  watch,
} from "vue";
import type { TSubmit64FieldApi, TSubmit64FieldWrapperProps } from "../models";
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
let resetCallback: () => void = () => {
  return;
};

// consts
const rules = getComputedRules();

// refs
const modelValue = ref<unknown>();
const backendErrors = ref<string[]>([]);

// functions
function reset(triggerCallback = true) {
  modelValue.value = propsComponent.formApi.getInitialValueByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
  if (triggerCallback) {
    callAllEvents(propsComponent.field.events.onReset);
  }
  resetCallback()
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
function hide() {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.hidden = true;
    callAllEvents(propsComponent.field.events.onHide)
  }
}
function unhide() {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.hidden = false;
    callAllEvents(propsComponent.field.events.onUnhide)
  }
}
function setReadonlyState(state: boolean) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.readonly = state;
  }
}
function setHint(hint: string) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.hint = hint;
  }
}
function setCssClass(cssClass: string) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.cssClass = cssClass;
  }
}
function setSuffix(suffix: string) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.suffix = suffix;
  }
}
function setPrefix(prefix: string) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.prefix = prefix;
  }
}
function setLabel(label: string) {
  const fieldRef = propsComponent.privateFormApi.getFieldRef(
    propsComponent.field.metadata.field_name
  );
  if (fieldRef) {
    fieldRef.label = label;
  }
}
function validate() {
  const validated = validationCallback();
  callAllEvents(propsComponent.field.events.onValidated);
  return validated;
}
function isValid() {
  const isValid = isValidCallback();
  return isValid;
}
function isInvalid() {
  return !isValid()
}
function resetValidation() {
  return resetValidationCallback();
}
function registerBehaviourCallbacks(
  registerValidationArg: () => boolean,
  registerIsValidArg: () => boolean,
  registerResetValidationArg: () => void,
  registerOnResetArg?: () => void,
) {
  validationCallback = registerValidationArg;
  isValidCallback = registerIsValidArg;
  resetValidationCallback = registerResetValidationArg;
  if (registerOnResetArg) {
    resetCallback = registerOnResetArg;
  }
}

// expose
const api: TSubmit64FieldApi = {
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
  setHint,
  setCssClass,
  setSuffix,
  setPrefix,
  setLabel,
  setValue: modelValueOnUpdate,
  field: propsComponent.field,
};
defineExpose(api);

// watchs
watch(
  () => (propsComponent.field.events.onUpdate ? modelValue.value : null),
  () => {
    callAllEvents(propsComponent.field.events.onUpdate);
  }
);
watch(
  () => (propsComponent.field.events.onIsValid || propsComponent.field.events.onIsInvalid ? modelValue.value : null),
  (newValue) => {
    if (newValue) {
      callAllEvents(propsComponent.field.events.onIsValid);
    } else {
      callAllEvents(propsComponent.field.events.onIsInvalid)
    }
  }
);

// lifeCycle
onMounted(() => {
  reset(false);
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef && propsComponent.formApi) {
    propsComponent.privateFormApi.registerFieldWrapperRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64FieldApi
    );
  }
});
</script>

<template>
  <div v-show="propsComponent.field.hidden !== true">
    <Component
      v-if="propsComponent.field.beforeComponent"
      :is="propsComponent.field.beforeComponent"
      :formApi="propsComponent.formApi"
      :fieldApi="api"
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
      :formApi="propsComponent.formApi"
      :fieldApi="api"
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
