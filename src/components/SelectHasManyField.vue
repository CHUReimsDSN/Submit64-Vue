<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSelectOptionPagination,
  TSubmit64AssociationRowEntry,
  TSubmit64FieldProps,
} from "../models";
import { nextTick, onMounted, ref } from "vue";
import FieldLabel from "./FieldLabel.vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps<'hasMany'>>();

// consts
const defaultLabelFilter = "__init";

// refs
const selectOptionsFiltered = ref<TSubmit64AssociationRowEntry[]>([]);
const selectOptionsScrollPagination = ref<TSelectOptionPagination>(
  getDefaultPagination(),
);
const fieldRef = ref<InstanceType<typeof QSelect>>();
const lastLabelFilter = ref(defaultLabelFilter);

// functions
function getDefaultPagination() {
  const pagination: TSelectOptionPagination = {
    limit: 30,
    nextPage: 1,
    lastPage: 100,
    isLoading: false,
  };
  return pagination;
}
function onFilter(val: string, update: (callbackGetData: () => void) => void) {
  if (val === lastLabelFilter.value) {
    update(() => {});
    return;
  }
  const callback = propsComponent.formApi.getAssociationDataCallback();
  selectOptionsScrollPagination.value = getDefaultPagination();
  lastLabelFilter.value = val;
  const form = propsComponent.formApi.form;
  selectOptionsScrollPagination.value.isLoading = true;
  callback({
    resourceName: form.resourceName,
    resourceId: form.resourceId,
    associationName: propsComponent.fieldApi.field.metadata.field_association_name,
    associationClassname:
      propsComponent.fieldApi.field.metadata.field_association_class!,
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
        selectOptionsScrollPagination.value.nextPage = 2;
        selectOptionsScrollPagination.value.lastPage = Math.ceil(
          response.row_count / selectOptionsScrollPagination.value.limit,
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
  const value = propsComponent.getValueSerialized();
  if (!value || !propsComponent.fieldApi.field.associationData) {
    return;
  }
  selectOptionsFiltered.value = (
    value as TSubmit64AssociationRowEntry["value"][]
  ).map((valueMap, valueMapIndex) => {
    return {
      label:
        propsComponent.fieldApi.field.associationData![valueMapIndex].label ?? "???",
      value: valueMap,
      data: propsComponent.fieldApi.field.associationData![valueMapIndex].data,
    };
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
  return !fieldRef.value.hasError;
}
function resetValidation() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.resetValidation();
}
function clear() {
  selectOptionsScrollPagination.value = getDefaultPagination();
  selectOptionsFiltered.value = [];
  lastLabelFilter.value = defaultLabelFilter;
}
function onVirtualScroll(scrollArgs: {
  to: number;
  ref: InstanceType<typeof QSelect>;
}) {
  const lastIndex = selectOptionsFiltered.value.length - 1;
  if (
    selectOptionsScrollPagination.value.isLoading !== true &&
    selectOptionsScrollPagination.value.nextPage <=
      selectOptionsScrollPagination.value.lastPage &&
    scrollArgs.to === lastIndex &&
    lastIndex !== -1
  ) {
    const form = propsComponent.formApi.form;
    const callback = propsComponent.formApi.getAssociationDataCallback();
    selectOptionsScrollPagination.value.isLoading = true;
    callback({
      resourceName: form.resourceName,
      resourceId: form.resourceId,
      associationName: propsComponent.fieldApi.field.metadata.field_association_name!,
      associationClassname:
        propsComponent.fieldApi.field.metadata.field_association_class!,
      limit: selectOptionsScrollPagination.value.limit,
      offset:
        (selectOptionsScrollPagination.value.nextPage - 1) *
        selectOptionsScrollPagination.value.limit,
      labelFilter: lastLabelFilter.value,
      context: form.context,
    }).then((response) => {
      selectOptionsFiltered.value = selectOptionsFiltered.value.concat(
        response.rows,
      );
      selectOptionsScrollPagination.value.lastPage = Math.ceil(
        response.row_count / selectOptionsScrollPagination.value.limit,
      );
      if (response.row_count >= selectOptionsScrollPagination.value.limit) {
        selectOptionsScrollPagination.value.nextPage++;
      }
      selectOptionsScrollPagination.value.isLoading = false;
      scrollArgs.ref.refresh();
    });
  }
}
function focus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.focus();
}
function unfocus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.blur();
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(
    validate,
    isValid,
    resetValidation,
    setupDefaultSelectValue,
    clear,
    focus,
    unfocus,
  );
  void nextTick(() => {
    setupDefaultSelectValue();
  });
});
</script>

<template>
  <div class="flex column">
    <FieldLabel
      v-if="!propsComponent.formApi.form.formSettings.displayLabelInsideInput"
      :name="propsComponent.fieldApi.field.label"
    />
    <q-select
      ref="fieldRef"
      v-bind="propsComponent.fieldApi.field.bindings.select"
      :model-value="propsComponent.modelValue as string"
      :label="
        propsComponent.formApi.form.formSettings.displayLabelInsideInput
          ? propsComponent.fieldApi.field.label
          : undefined
      "
      :readonly="propsComponent.fieldApi.field.readonly"
      :rules="propsComponent.fieldApi.field.computedRules"
      :options="selectOptionsFiltered"
      :mapOptions="true"
      :emitValue="true"
      :useInput="true"
      :multiple="true"
      :use-chips="true"
      @update:model-value="propsComponent.modelValueOnUpdate"
      @clear="propsComponent.clear"
      @filter="onFilter"
      @virtual-scroll="onVirtualScroll"
    >
      <template
        v-for="(component, name) of propsComponent.fieldApi.field.slots"
        v-slot:[name]="slotProps"
      >
        <component
          :is="component"
          v-bind="{
            ...(slotProps ?? {}),
            formApi: propsComponent.formApi,
            fieldApi: propsComponent.fieldApi,
          }"
        />
      </template>
    </q-select>
  </div>
</template>
