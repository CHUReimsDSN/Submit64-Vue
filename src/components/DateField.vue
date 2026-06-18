<script setup lang="ts">
import type { TDateBindings, TSubmit64FieldProps } from "../models";
import { QInput, QIcon, QPopupProxy, QDate, QBtn } from "quasar";
import { computed, nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const popupProxyRef = ref<InstanceType<typeof QPopupProxy>>();
const fieldRef = ref<InstanceType<typeof QInput>>();

// functions
function closePopUp() {
  if (!popupProxyRef.value) {
    return;
  }
  popupProxyRef.value.hide();
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
  return propsComponent.field.bindings as TDateBindings
})

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, undefined, focus, unfocus);
  void nextTick(() => {
    fieldRef.value?.resetValidation();
  });
});
</script>

<template>
  <q-input ref="fieldRef" v-bind="bindings.input" :model-value="(propsComponent.modelValue as string)"
    :label="propsComponent.field.label" :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly"
    :rules="propsComponent.field.computedRules" @clear="propsComponent.clear"
    @update:model-value="propsComponent.modelValueOnUpdate">
    <template v-slot:append>
      <q-icon v-bind="bindings.icon">
        <q-popup-proxy ref="popupProxyRef" v-bind="bindings.popupProxy">
          <q-date v-bind="bindings.date" :model-value="(propsComponent.modelValue as string)"
            :mask="propsComponent.formApi.form.formSettings.dateFormat"
            @update:model-value="propsComponent.modelValueOnUpdate">
            <div class="row items-center justify-end">
              <q-btn v-bind="bindings.btn" @click="closePopUp" />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
