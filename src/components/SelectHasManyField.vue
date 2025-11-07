<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSelectOptionPagination,
  TSubmit64AssociationDisplayPropsSlot,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";
import { nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.wrapper.field.componentOptions.associationDisplayComponent;
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
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
    propsComponent.wrapper.injectForm.getAssociationDataCallback();
  if (val === "") {
    selectOptionsScrollPagination.value = {
      limit: getSubmit64AssociationDataDefaultLimit(),
      offset: 0,
    };
  }
  update(() => {
    callback({
      resourceName: propsComponent.wrapper.injectForm.getForm().resourceName,
      associationName:
        propsComponent.wrapper.field.metadata.field_association_name!,
      limit: selectOptionsScrollPagination.value.limit,
      offset: selectOptionsScrollPagination.value.offset,
      labelFilter: val,
      context: propsComponent.wrapper.injectForm.getForm().context,
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
  const value = propsComponent.wrapper.getValueSerialized();
  if (!value) {
    console.log('early return shit')
    return;
  }
  void nextTick(() => {
    console.log('in next tick => ', value)
    selectOptionsFiltered.value = (value as unknown[]).map(
      (valueMap, valueMapIndex) => {
        console.log('in map => ', valueMap, valueMapIndex)
        return {
          label:
            (
              propsComponent.wrapper.field.defaultDisplayValue as (
                | string
                | undefined
              )[]
            )[valueMapIndex] ?? "???",
          value: valueMap,
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
function resetValidation() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.resetValidation();
}
function clear() {
  propsComponent.wrapper.clear();
  selectOptionsFiltered.value = [];
}

// lifeCycle
onMounted(() => {
  setupDefaultSelectValue();
  propsComponent.wrapper.registerBehaviourCallbacks(validate, resetValidation);
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
    :prefix="propsComponent.wrapper.field.prefix"
    :suffix="propsComponent.wrapper.field.suffix"
    :readonly="propsComponent.wrapper.field.readonly"
    :rules="propsComponent.wrapper.rules"
    :options="selectOptionsFiltered"
    :mapOptions="true"
    :emitValue="true"
    :useInput="true"
    :multiple="true"
    :use-chips="true"
    @clear="clear"
    @filter="onFilter"
  >
    <template v-slot:options="scope: TSubmit64AssociationDisplayPropsSlot">
      <component :is="displayComponent" :scope="scope" />
    </template>
  </q-select>
</template>
