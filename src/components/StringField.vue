<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QInput } from "quasar";
import type { TSubmit64FieldProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const fieldRef = ref<InstanceType<typeof QInput>>();

// functions
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return fieldRef.value.validate() as boolean;
}
function isValid() {
  if (!fieldRef.value) {
    return false;
  }
  return !fieldRef.value.hasError;
}
function resetValidation() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.resetValidation();
}
function focus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.focus()
}
function unfocus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.blur();
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, undefined, focus, unfocus);
});
</script>

<template>
  <q-input ref="fieldRef" v-bind="propsComponent.field.bindings" :rules="propsComponent.field.computedRules"
    :label="propsComponent.field.label" :readonly="propsComponent.field.readonly" :class="propsComponent.field.cssClass"
    :model-value="(propsComponent.modelValue as string)" @clear="propsComponent.clear"
    @update:model-value="propsComponent.modelValueOnUpdate" />
</template>
