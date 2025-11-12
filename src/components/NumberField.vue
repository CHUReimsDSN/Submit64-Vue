<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TSubmit64FieldProps } from "../models";
import { QInput } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.functionsProvider.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const fieldRef = ref<InstanceType<typeof QInput>>();

// functions
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return fieldRef.value.validate() as boolean;
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.resetValidation()
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, resetValidation)
});
</script>

<template>
  <q-input
    ref="fieldRef"
    v-model.number="(propsComponent.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.modelValueOnUpdate(value)
    "
    type="number"
    :label="propsComponent.field.label"
    :hint="propsComponent.field.hint"
    :outlined="styleConfig.fieldOutlined"
    :filled="styleConfig.fieldFilled"
    :standout="styleConfig.fieldStandout"
    :borderless="styleConfig.fieldBorderless"
    :rounded="styleConfig.fieldRounded"
    :square="styleConfig.fieldSquare"
    :dense="styleConfig.fieldDense"
    :hideBottomSpace="styleConfig.fieldHideBottomSpace"
    :color="styleConfig.fieldColor"
    :bgColor="styleConfig.fieldBgColor"
    :class="propsComponent.field.cssClass"
    :lazy-rules="lazyRules"
    :clearable="propsComponent.field.clearable"
    :prefix="propsComponent.field.prefix"
    :suffix="propsComponent.field.suffix"
    :readonly="propsComponent.field.readonly"
    :rules="propsComponent.rules"
    @clear="propsComponent.clear"
  />
</template>
