<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { nextTick, onMounted, ref } from "vue";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.field.componentOptions.associationDisplayComponent;
const form = propsComponent.formApi.getForm();
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const selectOptionsScrollPagination = ref<TSelectOptionPagination>({
  limit: getSubmit64AssociationDataDefaultLimit(),
  offset: 0,
});
const fieldRef = ref<InstanceType<typeof QSelect>>();

// functions
function onFilter(val: string, update: (callbackGetData: () => void) => void) {
  const callback =
    propsComponent.privateFormApi.getAssociationDataCallback();
  if (val === "") {
    selectOptionsScrollPagination.value = {
      limit: getSubmit64AssociationDataDefaultLimit(),
      offset: 0,
    };
  }
  update(() => {
    const form = propsComponent.formApi.getForm();
    callback({
      resourceName: form.resourceName,
      resourceId: form.resourceId,
      associationName: propsComponent.field.metadata.field_association_name!,
      limit: selectOptionsScrollPagination.value.limit,
      offset: selectOptionsScrollPagination.value.offset,
      labelFilter: val,
      context: form.context,
    })
      .then((response) => {
        selectOptionsFiltered.value = response.rows;
      })
      .catch(() => {
        selectOptionsFiltered.value = [];
      });
  });
}
function setupDefaultSelectValue() {
  void nextTick(() => {
    const value = propsComponent.getValueSerialized();
    if (!value || !propsComponent.field.associationData) {
      return;
    }
    selectOptionsFiltered.value = [
      {
        label: propsComponent.field.associationData.label[0] ?? "???",
        value,
        data: propsComponent.field.associationData.data[0],
      },
    ];
  });
}
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return fieldRef.value.validate() as boolean;
}
function isValid() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.hasError
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
  setupDefaultSelectValue();
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
    @filter="onFilter"
  >
    <template v-slot:option="scope">
      <component
        :is="displayComponent"
        :associationName="propsComponent.field.metadata.field_association_name"
        :entry="scope.opt"
        :itemProps="scope.itemProps"
      />
    </template>
  </q-select>
</template>
