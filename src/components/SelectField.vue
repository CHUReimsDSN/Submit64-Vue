<script setup lang="ts">
import type { QSelectProps } from "quasar";
import { QSelect } from 'quasar';
import {
  TPropsWithClass,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import FieldWrapper from "./FieldWrapper.vue";
import { ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const selectOptions = ref<Readonly<TSubmit64AssociationRowEntry[]>>([])
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([])

// functions
function getBindings(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QSelectProps & TPropsWithClass {
  const formFactory = propsWrapper.injectForm.getFormFactoryInstance()
  const formSetting = formFactory.formSettings;
  const styleConfig = formFactory.formStyleConfig;
  return {
    // behaviour
    "onUpdate:modelValue": (value) => propsWrapper.modelValueOnUpdate(value),
    modelValue: propsWrapper.modelValue as string,
    lazyRules: formSetting.rulesBehaviour === "lazy",
    clearable: propsWrapper.field.clearable,
    rules: propsWrapper.getComputedRules(),
    mapOptions: true,
    emitValue: true,
    useInput: true,

    // events
    onClear: propsWrapper.clear,
    onFilter: inputFilter,

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
function inputFilter(val: string, update: (callback: () => void) => void) {
  if (val === '') {
    update(() => {
      selectOptionsFiltered.value = [...selectOptions.value]
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    selectOptionsFiltered.value = selectOptions.value.filter((option) => {
      return option.label.toLowerCase().includes(needle)
    })
  })
}
function setupSelectOptions(propsWrapper: TSubmit64FieldWrapperPropsSlot) {
  selectOptions.value = Object.freeze(propsWrapper.field.selectOptions ?? []);
  selectOptionsFiltered.value = propsWrapper.field.selectOptions ?? [];
}
</script>

<template>
  <FieldWrapper :field="propsComponent.field">
    <template v-slot:default="{ propsWrapper }">
      <q-select v-bind="getBindings(propsWrapper)" @vue:mounted="setupSelectOptions" :options="selectOptionsFiltered" />
    </template>
  </FieldWrapper>
</template>

