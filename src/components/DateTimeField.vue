<script setup lang="ts">
import type { TSubmit64FieldProps } from "../models";
import { QInput } from "quasar";
import { nextTick, onMounted, ref } from "vue";
import FieldLabel from "./FieldLabel.vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps<'datetime'>>();

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
  fieldRef.value.focus();
}
function unfocus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.blur();
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(
    validate,
    isValid,
    resetValidation,
    undefined,
    undefined,
    focus,
    unfocus,
  );
  void nextTick(() => {
    fieldRef.value?.resetValidation();
  });
});
</script>

<template>
  <div class="flex column">
    <FieldLabel
      v-if="!propsComponent.formApi.form.formSettings.displayLabelInsideInput"
      :name="propsComponent.fieldApi.field.label"
    />
    <q-input
      ref="fieldRef"
      v-bind="propsComponent.fieldApi.field.bindings.input"
      :model-value="propsComponent.modelValue as string"
      :label="
        propsComponent.formApi.form.formSettings.displayLabelInsideInput
          ? propsComponent.fieldApi.field.label
          : undefined
      "
      :readonly="propsComponent.fieldApi.field.readonly"
      :rules="propsComponent.fieldApi.field.computedRules"
      @clear="propsComponent.clear"
      @update:model-value="propsComponent.modelValueOnUpdate"
    >
      <template
        v-for="(component, name) of propsComponent.fieldApi.field.slots"
        v-slot:[name]="slotProps"
      >
        <component
          :is="component"
          v-bind="{
            ...(slotProps ?? {}),
            formApi: propsComponent.formApi,
            fieldApi: propsComponent.fieldApi,
          }"
        />
      </template>
    </q-input>
  </div>
</template>
