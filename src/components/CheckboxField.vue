<script setup lang="ts">
import {
  TPropsWithClass,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { QCheckboxProps } from "quasar";
import FieldWrapper from "./FieldWrapper.vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// functions
function getBindings(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QCheckboxProps & TPropsWithClass {
  const styleConfig = propsWrapper.injectForm.getFormFactory().formStyleConfig;
  return {
    // behaviour
    modelValue: propsWrapper.modelValue as boolean,

    // display
    label: propsWrapper.field.label,
    dense: styleConfig.fieldDense,
    color: styleConfig.fieldColor,
    class: propsWrapper.field.cssClass,
  };
}
</script>

<template>
  <FieldWrapper :field="propsComponent.field">
    <template v-slot:default="{ propsWrapper }">
      <q-checkbox v-bind="getBindings(propsWrapper)" />
    </template>
  </FieldWrapper>
</template>
