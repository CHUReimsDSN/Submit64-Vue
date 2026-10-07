<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { TSubmit64FieldProps, TSubmit64ValidationRule } from "../models";
import { QCheckbox } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps<"checkbox">>();

// refs
const ruleResult = ref<boolean | string>(true);

// functions
function validate() {
  for (const rule of propsComponent.fieldApi.field
    .computedRules as TSubmit64ValidationRule[]) {
    ruleResult.value = rule(propsComponent.modelValue);
    if (ruleResult.value !== true) {
      break;
    }
  }
  return isValid();
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
  () => {
    propsComponent.fieldApi.validate();
  },
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
      v-bind="propsComponent.fieldApi.field.bindings"
      :model-value="propsComponent.modelValue as boolean"
      :label="propsComponent.fieldApi.field.label"
      :aria-readonly="propsComponent.fieldApi.field.readonly"
      class="q-pb-md"
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
    </q-checkbox>
    <div
      v-if="ruleResult !== true"
      class="q-field--error q-field__bottom text-negative"
    >
      {{ ruleResult }}
    </div>
  </div>
</template>
