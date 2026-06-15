<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { QInput, QIcon, QPopupProxy, QColor } from "quasar";
import type { TColorBindings, TSubmit64FieldProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const fieldRef = ref<InstanceType<typeof QInput>>();

// functions
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
  fieldRef.value.blur();
}

// computeds
const bindings = computed(() => {
  return propsComponent.field.bindings as TColorBindings
})

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, undefined, focus, unfocus);
});
</script>

<template>
  <q-input ref="fieldRef" v-bind="bindings.input" :model-value="(propsComponent.modelValue as string)"
    :label="propsComponent.field.label" :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly"
    :rules="propsComponent.field.computedRules" @clear="propsComponent.clear"
    @update:model-value="propsComponent.modelValueOnUpdate">
    <template v-slot:append>
      <q-icon v-bind="bindings.icon">
        <q-popup-proxy v-bind="bindings.popupProxy">
          <q-color v-bind="bindings.color" :model-value="(propsComponent.modelValue as string)"
            @update:model-value="propsComponent.modelValueOnUpdate" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
