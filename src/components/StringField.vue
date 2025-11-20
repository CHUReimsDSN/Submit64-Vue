<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { TSubmit64FieldProps } from "../models";
import { QInput } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const form = propsComponent.formApi.getForm();
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const fieldRef = ref<InstanceType<typeof QInput>>()

// functions
function validate() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.validate() as boolean
}
function isValid() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.hasError
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.resetValidation()
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation)
})
</script>

<template>
  <q-input
    ref="fieldRef"
    :model-value="(propsComponent.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.modelValueOnUpdate(value)
    "
    :type="propsComponent.field.componentOptions.regularFieldType"
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
    :prefix="propsComponent.field.prefix"
    :suffix="propsComponent.field.suffix"
    :readonly="propsComponent.field.readonly"
    :clearable="propsComponent.field.clearable"
    :autogrow="true"
    :rules="propsComponent.rules"
    @clear="propsComponent.clear"
  />
</template>
