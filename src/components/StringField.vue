<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TSubmit64FieldProps } from "../models";
import { QInput } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
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
function resetValidation() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.resetValidation()
}

// lifeCycle
onMounted(() => {
  propsComponent.wrapper.registerBehaviourCallbacks(validate, resetValidation)
})
</script>

<template>
  <q-input
    ref="fieldRef"
    v-model="(propsComponent.wrapper.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.wrapper.modelValueOnUpdate(value)
    "
    :type="propsComponent.wrapper.field.componentOptions.regularFieldType"
    :label="propsComponent.wrapper.field.label"
    :hint="propsComponent.wrapper.field.hint"
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
    :class="propsComponent.wrapper.field.cssClass"
    :lazy-rules="lazyRules"
    :clearable="propsComponent.wrapper.field.clearable"
    :readonly="propsComponent.wrapper.field.readonly"
    :autogrow="true"
    :rules="propsComponent.wrapper.rules"
    @clear="propsComponent.wrapper.clear"
  />
</template>
