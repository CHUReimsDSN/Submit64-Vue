<script setup lang="ts">
import { ref } from "vue";
import { TSubmit64FieldProps } from "../models";
import { QCheckbox } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const ruleResult = ref<boolean | string>(true);

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyleConfig;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// functions
function updateModel(value: unknown) {
  propsComponent.wrapper.modelValueOnUpdate(value);
  if (!lazyRules) {
    return;
  }
  ruleResult.value = propsComponent.wrapper.validate();
  console.log('checkbox' + ruleResult)
}
</script>

<template>
  <q-checkbox
    v-model="(propsComponent.wrapper.modelValue as string)"
    v-on:update:model-value="(value) => updateModel(value)"
    :label="propsComponent.wrapper.field.label"
    :dense="styleConfig.fieldDense"
    :color="styleConfig.fieldColor"
    :class="propsComponent.wrapper.field.cssClass"
  />
  <!-- TODO test rules -->
  <div v-if="propsComponent.wrapper.field.hint" class="q-field__bottom">
    {{ propsComponent.wrapper.field.hint }}
  </div>
  <div v-if="ruleResult !== true" class="text-negative">ici !{{ ruleResult }}</div>
</template>
