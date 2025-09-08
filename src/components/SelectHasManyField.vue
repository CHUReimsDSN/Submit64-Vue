<script setup lang="ts">
import { QSelect, QItemLabel, QItem, QItemSection } from "quasar";
import {
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";
import { onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.wrapper.field.componentOptions.associationDisplayComponent;
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyleConfig;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const selectOptionsScrollPagination = ref<TSelectOptionPagination>({
  limit: getSubmit64AssociationDataDefaultLimit(),
  offset: 0,
});

// functions
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
  setTimeout(() => {
    selectOptionsFiltered.value = [
      {
        label:
          propsWrapper.field.defaultDisplayValue ??
          String(propsWrapper.getValue()),
        value: propsWrapper.getValue(),
      },
    ];
  }, 0);
}

// lifeCycle
onMounted(() => {
  setupDefaultSelectValue(propsComponent.wrapper);
});
</script>

<template>
  <q-select
    v-model="(propsComponent.wrapper.modelValue as string)"
    v-on:update:model-value="
      (value) => propsComponent.wrapper.modelValueOnUpdate(value)
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
    :multiple="true"
    :use-chips="true"
    @clear="propsComponent.wrapper.clear"
    @filter="onFilter"
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
