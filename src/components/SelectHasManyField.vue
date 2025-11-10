<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSelectOptionPagination,
  TSubmit64AssociationDisplayProps,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";
import { nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const displayComponent =
  propsComponent.field.componentOptions.associationDisplayComponent;
const formFactory = propsComponent.functionsProvider.getFormFactoryInstance();
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
    propsComponent.functionsProvider.getAssociationDataCallback();
  if (val === "") {
    selectOptionsScrollPagination.value = {
      limit: getSubmit64AssociationDataDefaultLimit(),
      offset: 0,
    };
  }
  update(() => {
    callback({
      resourceName: propsComponent.functionsProvider.getForm().resourceName,
      associationName: propsComponent.field.metadata.field_association_name!,
      limit: selectOptionsScrollPagination.value.limit,
      offset: selectOptionsScrollPagination.value.offset,
      labelFilter: val,
      context: propsComponent.functionsProvider.getForm().context,
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
    selectOptionsFiltered.value = (value as unknown[]).map(
      (valueMap, valueMapIndex) => {
        return {
          label:
            (propsComponent.field.associationData!.label as string[])[
              valueMapIndex
            ][valueMapIndex] ?? "???",
          value: valueMap,
          data: (
            propsComponent.field.associationData!
              .data as TSubmit64AssociationRowEntry["data"][]
          )[valueMapIndex],
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
  propsComponent.clear();
  selectOptionsFiltered.value = [];
}

// lifeCycle
onMounted(() => {
  setupDefaultSelectValue();
  propsComponent.registerBehaviourCallbacks(validate, resetValidation);
});
</script>

<template>
  <q-select
    ref="fieldRef"
    v-model="(propsComponent.modelValue as string)"
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
  >
    <template v-slot:options="scope">
      <component
        :is="displayComponent"
        v-bind="{ 
        associationName: propsComponent.field.metadata.field_association_name,
        entry: scope.opt,
        itemProps: scope.itemProps
      } as TSubmit64AssociationDisplayProps"
      />
    </template>
  </q-select>
</template>
