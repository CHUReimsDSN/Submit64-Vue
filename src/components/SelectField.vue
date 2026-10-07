<script setup lang="ts">
import { QSelect } from "quasar";
import type {
  TSubmit64FieldProps,
  TSubmit64StaticSelectOptions,
} from "../models";
import { onMounted, ref } from "vue";
import FieldLabel from "./FieldLabel.vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps<'select'>>();

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
    propsComponent.fieldApi.field.staticSelectOptions ?? [],
  );
  selectOptionsFiltered.value = propsComponent.fieldApi.field.staticSelectOptions ?? [];
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
  setupSelectOptions();
  propsComponent.registerBehaviourCallbacks(
    validate,
    isValid,
    resetValidation,
    undefined,
    clear,
    focus,
    unfocus,
  );
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
      :label="propsComponent.formApi.form.formSettings.displayLabelInsideInput ? propsComponent.fieldApi.field.label : undefined"
      :readonly="propsComponent.fieldApi.field.readonly"
      :rules="propsComponent.fieldApi.field.computedRules"
      :options="selectOptionsFiltered"
      :mapOptions="true"
      :emitValue="true"
      :useInput="true"
      @clear="propsComponent.clear"
      @filter="inputFilter"
      @update:model-value="propsComponent.modelValueOnUpdate"
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
