<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { TSubmit64FieldProps, TSubmit64ValidationRule } from "../models";
import { QCheckbox } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const ruleResult = ref<boolean | string>(true);

// functions
function validate() {
  return ruleResult.value === true;
}
function isValid() {
  return ruleResult.value === true;
}
function resetValidation() {
  ruleResult.value = true;
}

// watchs
watch(
  () => propsComponent.modelValue,
  (newValue) => {
    for (const rule of propsComponent.field.computedRules as TSubmit64ValidationRule[]) {
      ruleResult.value = rule(newValue);
      if (ruleResult.value !== true) {
        break;
      }
    }
  }
);

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation);
});
</script>

<template>
  <div class="flex column">
    <q-checkbox
      ref="checkboxRef"
      v-bind="propsComponent.field.bindings"
      :model-value="(propsComponent.modelValue as boolean)"
      :label="propsComponent.field.label"
      :aria-readonly="propsComponent.field.readonly"
      :class="propsComponent.field.cssClass"
      class="q-pb-md"
      @update:model-value="propsComponent.modelValueOnUpdate"
    />
    <div
      v-if="ruleResult !== true"
      class="q-field--error q-field__bottom text-negative"
    >
      {{ ruleResult }}
    </div>
  </div>
</template>
