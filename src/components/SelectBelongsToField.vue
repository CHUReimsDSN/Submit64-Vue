<script setup lang="ts">
import { QSelect, QItemLabel, QItem, QItemSection } from "quasar";
import {
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { onMounted, ref } from "vue";
import { getSubmit64AssociationDataDefaultLimit } from "../utils";

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
    }).then((response) => {
      selectOptionsFiltered.value = response.rows;
    });
  });
}
function setupDefaultSelectValue() {
  setTimeout(() => {
    selectOptionsFiltered.value = [
      {
        label:
          propsComponent.wrapper.field.defaultDisplayValue ??
          String(propsComponent.wrapper.getValue()),
        value: propsComponent.wrapper.getValue(),
      },
    ];
  }, 0);
}

// lifeCycle
onMounted(() => {
  setupDefaultSelectValue();
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
