<script setup lang="ts">
import type { QSelectProps } from "quasar";
import { QSelect, QItemLabel, QItem, QItemSection } from "quasar";
import {
  TPropsWithClass,
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import FieldWrapper from "./FieldWrapper.vue";
import { ref } from "vue";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.field.componentOptions.associationDisplayComponent;

// refs
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const selectOptionsScrollPagination = ref<TSelectOptionPagination>({
  limit: getSubmit64AssociationDataDefaultLimit(),
  offset: 0,
});

// functions
function getBindings(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QSelectProps & TPropsWithClass {
  const formFactory = propsWrapper.injectForm.getFormFactoryInstance();
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
    options: selectOptionsFiltered.value,

    // events
    onClear: propsWrapper.clear,
    onFilter: onFilter(propsWrapper),

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
function onFilter(propsWrapper: TSubmit64FieldWrapperPropsSlot) {
  return (val: string, update: (callbackGetData: () => void) => void) => {
    const callback = propsWrapper.injectForm.getAssociationDataCallback();
    if (val === "") {
      selectOptionsScrollPagination.value = {
        limit: getSubmit64AssociationDataDefaultLimit(),
        offset: 0,
      };
    }
    update(() => {
      callback({
        resourceName: propsWrapper.injectForm.getForm().resourceName,
        associationName: propsWrapper.field.metadata.field_association_name!,
        limit: selectOptionsScrollPagination.value.limit,
        offset: selectOptionsScrollPagination.value.offset,
        labelFilter: val,
        context: propsWrapper.injectForm.getForm().context,
      }).then((response) => {
        selectOptionsFiltered.value = response.rows;
      });
    });
  };
}
function setupDefaultSelectValue(propsWrapper: TSubmit64FieldWrapperPropsSlot) {
  selectOptionsFiltered.value = [
    {
      label: propsWrapper.field.defaultDisplayValue ?? "",
      value: propsWrapper.modelValue,
    },
  ];
  setTimeout(() => {
    propsWrapper.modelValueOnUpdate(selectOptionsFiltered.value[0].value);
  }, 100);
}
</script>

<template>
  <FieldWrapper :field="propsComponent.field">
    <template v-slot:default="{ propsWrapper }">
      <q-select
        v-bind="getBindings(propsWrapper)"
        @vue:mounted="setupDefaultSelectValue(propsWrapper)"
      >
        <template v-slot:options="scope">
          <template v-if="displayComponent">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-else>
            <component :is="displayComponent" :scope="scope" />
          </template>
        </template>
      </q-select>
    </template>
  </FieldWrapper>
</template>
