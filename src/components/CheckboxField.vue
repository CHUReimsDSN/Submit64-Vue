<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { TSubmit64FieldProps, TSubmit64ValidationRule } from "../models";
import { QCheckbox } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const ruleResult = ref<boolean | string>(true);

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const styleConfig = formFactory.formStyle;

// functions
function validate() {
  return ruleResult.value === true;
}
function resetValidation() {
  ruleResult.value = true
}

// watchs
watch(
  () => propsComponent.wrapper.modelValue,
  (newValue) => {
    (propsComponent.wrapper.rules as TSubmit64ValidationRule[]).forEach(
      (rule) => {
        ruleResult.value = rule(newValue);
        if (ruleResult.value !== true) {
          return;
        }
      }
    );
  }
);

// lifeCycle
onMounted(() => {
  propsComponent.wrapper.registerBehaviourCallbacks(validate, resetValidation)
});
</script>

<template>
  <q-checkbox
    v-model="(propsComponent.wrapper.modelValue as string)"
    v-on:update:model-value="(value: unknown) => propsComponent.wrapper.modelValueOnUpdate(value)"
    :label="propsComponent.wrapper.field.label"
    :dense="styleConfig.fieldDense"
    :color="styleConfig.fieldColor"
    :aria-readonly="propsComponent.wrapper.field.readonly"
    :class="propsComponent.wrapper.field.cssClass"
  />
  <div v-if="propsComponent.wrapper.field.hint" class="q-field__bottom">
    {{ propsComponent.wrapper.field.hint }}
  </div>
  <div
    v-if="ruleResult !== true"
    class="q-field--error q-field__bottom text-negative"
  >
    {{ ruleResult }}
  </div>
</template>
