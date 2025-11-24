<script setup lang="ts">
import { QSelect } from "quasar";
import { TSubmit64FieldProps, TSubmit64StaticSelectOptions } from "../models";
import { onMounted, ref } from "vue";
import { QItemLabel, QItem, QItemSection } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const selectOptions = ref<Readonly<TSubmit64StaticSelectOptions[]>>([]);
const selectOptionsFiltered = ref<TSubmit64StaticSelectOptions[]>([]);
const fieldRef = ref<InstanceType<typeof QSelect>>();

// consts
const form = propsComponent.formApi.form;
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
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
function setupSelectOptions() {
  selectOptions.value = Object.freeze(
    propsComponent.field.staticSelectOptions ?? []
  );
  selectOptionsFiltered.value = propsComponent.field.staticSelectOptions ?? [];
}
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return fieldRef.value.validate() as boolean;
}
function isValid() {
  if (!fieldRef.value) {
    return false;
  }
  return !fieldRef.value.hasError
}
function resetValidation() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.resetValidation();
}
function clear() {
  propsComponent.clear();
  selectOptionsFiltered.value = [];
}

// lifeCycle
onMounted(() => {
  setupSelectOptions();
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation);
});
</script>

<template>
  <q-select
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
    :clearable="propsComponent.field.clearable"
    :prefix="propsComponent.field.prefix"
    :suffix="propsComponent.field.suffix"
    :readonly="propsComponent.field.readonly"
    :rules="propsComponent.rules"
    :options="selectOptionsFiltered"
    :mapOptions="true"
    :emitValue="true"
    :useInput="true"
    @clear="clear"
    @filter="inputFilter"
  >
    <q-item :dense="styleConfig.fieldDense">
      <q-item-section>
        <q-item-label>{{
          propsComponent.formApi.form.formSettings.associationEmptyMessage
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-select>
</template>
