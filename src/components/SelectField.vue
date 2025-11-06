<script setup lang="ts">
import { QSelect } from "quasar";
import {
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const selectOptions = ref<Readonly<TSubmit64AssociationRowEntry[]>>([]);
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const fieldRef = ref<InstanceType<typeof QSelect>>()

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// functions
function inputFilter(val: string, update: (callback: () => void) => void) {
  if (val === "") {
    update(() => {
      selectOptionsFiltered.value = [...selectOptions.value];
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    selectOptionsFiltered.value = selectOptions.value.filter((option) => {
      return option.label.toLowerCase().includes(needle);
    });
  });
}
function setupSelectOptions(propsWrapper: TSubmit64FieldWrapperPropsSlot) {
  selectOptions.value = Object.freeze(propsWrapper.field.selectOptions ?? []);
  selectOptionsFiltered.value = propsWrapper.field.selectOptions ?? [];
}
function validate() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.validate() as boolean
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.resetValidation()
}
function clear() {
  propsComponent.wrapper.clear();
  selectOptionsFiltered.value = [];
}

// lifeCycle
onMounted(() => {
  setupSelectOptions(propsComponent.wrapper);
  propsComponent.wrapper.registerBehaviourCallbacks(validate, resetValidation)
});
</script>

<template>
  <q-select
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
    :rules="propsComponent.wrapper.rules"
    :options="selectOptionsFiltered"
    :mapOptions="true"
    :emitValue="true"
    :useInput="true"
    @clear="clear"
    @filter="inputFilter"
  />
</template>
