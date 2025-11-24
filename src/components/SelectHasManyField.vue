<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.field.componentOptions.associationDisplayComponent;
const form = propsComponent.formApi.form;
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const selectOptionsScrollPagination = ref<TSelectOptionPagination>(
  getDefaultPagination()
);
const fieldRef = ref<InstanceType<typeof QSelect>>();
const lastLabelFilter = ref("");

// functions
function getDefaultPagination() {
  const pagination: TSelectOptionPagination = {
    limit: 30,
    nextPage: 2,
    lastPage: 2,
    isLoading: false,
  };
  return pagination;
}
function onFilter(val: string, update: (callbackGetData: () => void) => void) {
const callback = propsComponent.formApi.getAssociationDataCallback();
  selectOptionsScrollPagination.value = getDefaultPagination();
  lastLabelFilter.value = val;
  const form = propsComponent.formApi.form;
  selectOptionsScrollPagination.value.isLoading = true;
  callback({
    resourceName: form.resourceName,
    resourceId: form.resourceId,
    associationName: propsComponent.field.metadata.field_association_name!,
    limit: selectOptionsScrollPagination.value.limit,
    offset:
      (selectOptionsScrollPagination.value.nextPage - 1) *
      selectOptionsScrollPagination.value.limit,
    labelFilter: val,
    context: form.context,
  })
    .then((response) => {
      update(() => {
        selectOptionsFiltered.value = response.rows;
        selectOptionsScrollPagination.value.lastPage = Math.ceil(
          response.row_count / selectOptionsScrollPagination.value.limit
        );
        selectOptionsScrollPagination.value.isLoading = false;
      });
    })
    .catch(() => {
      selectOptionsFiltered.value = [];
      selectOptionsScrollPagination.value = getDefaultPagination();
    });
}
function setupDefaultSelectValue() {
  void nextTick(() => {
    const value = propsComponent.getValueSerialized();
    if (!value || !propsComponent.field.associationData) {
      return;
    }
    selectOptionsFiltered.value = (value as unknown[]).map(
      (valueMap, valueMapIndex) => {
        return {
          label:
            propsComponent.field.associationData!.label[valueMapIndex] ?? "???",
          value: valueMap,
          data: propsComponent.field.associationData!.data[valueMapIndex],
        };
      }
    );
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
    return false;
  }
  return fieldRef.value.hasError;
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
function onVirtualScroll(scrollArgs: {
  to: number;
  ref: InstanceType<typeof QSelect>;
}) {
  const lastIndex = selectOptionsFiltered.value.length - 1;
  if (
    selectOptionsScrollPagination.value.isLoading !== true &&
    selectOptionsScrollPagination.value.nextPage <
      selectOptionsScrollPagination.value.lastPage &&
    scrollArgs.to === lastIndex
  ) {
    const form = propsComponent.formApi.form;
    const callback = propsComponent.formApi.getAssociationDataCallback();
    selectOptionsScrollPagination.value.isLoading = true;
    callback({
      resourceName: form.resourceName,
      resourceId: form.resourceId,
      associationName: propsComponent.field.metadata.field_association_name!,
      limit: selectOptionsScrollPagination.value.limit,
      offset:
        (selectOptionsScrollPagination.value.nextPage - 1) *
        selectOptionsScrollPagination.value.limit,
      labelFilter: lastLabelFilter.value,
      context: form.context,
    }).then((response) => {
      selectOptionsFiltered.value = selectOptionsFiltered.value.concat(
        response.rows
      );
      selectOptionsScrollPagination.value.lastPage = Math.ceil(
        response.row_count / selectOptionsScrollPagination.value.limit
      );
      selectOptionsScrollPagination.value.nextPage++;
      selectOptionsScrollPagination.value.isLoading = false;
      scrollArgs.ref.refresh();
    });
  }
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
    :multiple="true"
    :use-chips="true"
    @clear="clear"
    @filter="onFilter"
    @virtual-scroll="onVirtualScroll"
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
