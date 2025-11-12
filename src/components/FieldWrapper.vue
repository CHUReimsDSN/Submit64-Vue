<script setup lang="ts">
import { getCurrentInstance, nextTick, onMounted, ref, unref } from "vue";
import type {
  TSubmit64FieldWrapper,
  TSubmit64FieldWrapperProps,
} from "../models";
import { Submit64Rules } from "../rules";
import { date } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldWrapperProps>();

// var
let validationCallback: () => boolean = () => {
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
  modelValue.value = propsComponent.functionsProvider.getDataByFieldName(
    propsComponent.field.metadata.field_name
  );
  modelValue.value = formModelSerializeByType(modelValue.value);
  void nextTick(() => {
    resetValidation();
  });
}
function formModelSerializeByType(value: unknown) {
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
        date.extractDate(
          String(value),
          propsComponent.functionsProvider.getForm().backendDateFormat
        ),
        propsComponent.functionsProvider.getFormFactoryInstance().formSettings
          .dateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          propsComponent.functionsProvider.getForm().backendDatetimeFormat
        ),
        propsComponent.functionsProvider.getFormFactoryInstance().formSettings
          .datetimeFormat
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
          propsComponent.functionsProvider.getFormFactoryInstance().formSettings
            .dateFormat
        ),
        propsComponent.functionsProvider.getForm().backendDateFormat
      );
    case "datetime":
      if (value === null || value === undefined || value === "") {
        return null;
      }
      return date.formatDate(
        date.extractDate(
          String(value),
          propsComponent.functionsProvider.getFormFactoryInstance().formSettings
            .datetimeFormat
        ),
        propsComponent.functionsProvider.getForm().backendDatetimeFormat
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
}
function getComputedRules() {
  return Submit64Rules.computeServerRules(
    propsComponent.field.rules ?? [],
    propsComponent.field.type,
    propsComponent.functionsProvider
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
  if (proxyInstanceRef && propsComponent.functionsProvider) {
    propsComponent.functionsProvider.registerRef(
      propsComponent.field.metadata.field_name,
      proxyInstanceRef as TSubmit64FieldWrapper
    );
  }
});
</script>

<template>
  <div>
    <slot
      :is="propsComponent.field.component"
      :modelValue="modelValue"
      :field="propsComponent.field"
      :functionsProvider="propsComponent.functionsProvider"
      :rules="rules"
      :reset="reset"
      :clear="clear"
      :getValueDeserialized="getValueDeserialized"
      :getValueSerialized="getValueSerialized"
      :validate="validate"
      :modelValueOnUpdate="modelValueOnUpdate"
      :registerBehaviourCallbacks="registerBehaviourCallbacks"
    >
      <Component
        :is="propsComponent.field.component"
        :modelValue="modelValue"
        :field="propsComponent.field"
        :functionsProvider="propsComponent.functionsProvider"
        :rules="rules"
        :reset="reset"
        :clear="clear"
        :getValueDeserialized="getValueDeserialized"
        :getValueSerialized="getValueSerialized"
        :validate="validate"
        :modelValueOnUpdate="modelValueOnUpdate"
        :registerBehaviourCallbacks="registerBehaviourCallbacks"
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
