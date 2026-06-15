<script setup lang="ts">
import { QSelect } from "quasar";
import type { TSelectBindings, TSubmit64FieldProps, TSubmit64StaticSelectOptions } from "../models";
import { computed, onMounted, ref } from "vue";
import { QItemLabel, QItem, QItemSection } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const selectOptions = ref<Readonly<TSubmit64StaticSelectOptions[]>>([]);
const selectOptionsFiltered = ref<TSubmit64StaticSelectOptions[]>([]);
const fieldRef = ref<InstanceType<typeof QSelect>>();

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
  return !fieldRef.value.hasError;
}
function resetValidation() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.resetValidation();
}
function clear() {
  selectOptionsFiltered.value = [];
}
function focus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.focus()
}
function unfocus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.blur()
}

// computeds
const bindings = computed(() => {
  return propsComponent.field.bindings as TSelectBindings;
})

// lifeCycle
onMounted(() => {
  setupSelectOptions();
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, clear, focus, unfocus);
});
</script>

<template>
  <q-select
    ref="fieldRef"
    v-bind="bindings.select"
    :model-value="(propsComponent.modelValue as string)"
    :label="propsComponent.field.label"
    :class="propsComponent.field.cssClass"
    :readonly="propsComponent.field.readonly"
    :rules="propsComponent.field.computedRules"
    :options="selectOptionsFiltered"
    :mapOptions="true"
    :emitValue="true"
    :useInput="true"
    @clear="propsComponent.clear"
    @filter="inputFilter"
    @update:model-value="propsComponent.modelValueOnUpdate"
  >
    <template v-slot:no-option>
      <q-item v-bind="bindings.itemNoOption" >
        <q-item-section>
          <q-item-label>{{
            propsComponent.formApi.form.formSettings.associationEmptyMessage
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
