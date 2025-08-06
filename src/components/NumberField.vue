<script setup lang="ts">
import {
  TPropsWithClass,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { QInputProps } from "quasar";
import FieldWrapper from "./FieldWrapper.vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// functions
function getBindings(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QInputProps & TPropsWithClass {
  const formFactory = propsWrapper.injectForm.getFormFactory()
  const formSetting = formFactory.formSettings;
  const styleConfig = formFactory.formStyleConfig;
  return {
    // behaviour
    modelValue: propsWrapper.modelValue as number,
    lazyRules: formSetting.rulesBehaviour === "lazy",
    clearable: propsWrapper.field.clearable,
    rules: propsWrapper.getComputedRules(),

    // events
    onClear: propsWrapper.clear,

    // display
    label: propsWrapper.field.label,
    hint: propsWrapper.field.hint,
    outlined: styleConfig.fieldOutlined,
    filled: styleConfig.fieldFilled,
    standout: styleConfig.fieldStandout,
    borderless: styleConfig.fieldBorderless,
    rounded: styleConfig.fieldRounded,
    square: styleConfig.fieldSquare,
    dense: styleConfig.fieldDense,
    hideBottomSpace: styleConfig.fieldHideBottomSpace,
    color: styleConfig.fieldColor,
    bgColor: styleConfig.fieldBgColor,
    class: propsWrapper.field.cssClass,
  };
}
</script>

<template>
  <FieldWrapper :field="propsComponent.field">
    <template v-slot:default="{ propsWrapper }">
      <q-input v-bind="getBindings(propsWrapper)" type="number" />
    </template>
  </FieldWrapper>
</template>
