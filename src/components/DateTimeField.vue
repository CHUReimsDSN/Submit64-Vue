<script setup lang="ts">
import type { TDatetimeBindings, TSubmit64FieldProps } from "../models";
import { QInput, QIcon, QPopupProxy, QDate, QTime, QBtn } from "quasar";
import { computed, nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const datePopupProxyRef = ref<InstanceType<typeof QPopupProxy>>();
const timePopupProxyRef = ref<InstanceType<typeof QPopupProxy>>();
const fieldRef = ref<InstanceType<typeof QInput>>();

// functions
function closePopUpDate() {
  if (!datePopupProxyRef.value) {
    return;
  }
  datePopupProxyRef.value.hide();
}
function closePopUpTime() {
  if (!timePopupProxyRef.value) {
    return;
  }
  timePopupProxyRef.value.hide();
}
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return fieldRef.value.validate() as boolean;
}
function isValid() {
  if (!fieldRef.value) {
    return false
  }
  return !fieldRef.value.hasError
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.resetValidation()
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
  return propsComponent.field.bindings as TDatetimeBindings
})

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, undefined, focus, unfocus)
  void nextTick(() => {
    fieldRef.value?.resetValidation()
  })
});
</script>

<template>
  <q-input ref="fieldRef" v-bind="bindings.input" :model-value="(propsComponent.modelValue as string)"
    :label="propsComponent.field.label" :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly"
    :rules="propsComponent.field.computedRules" @clear="propsComponent.clear"
    @update:model-value="propsComponent.modelValueOnUpdate">
    <template v-slot:append>
      <q-icon v-bind="bindings.iconDate">
        <q-popup-proxy ref="popupProxyRef" v-bind="bindings.popupProxyDate">
          <q-date v-bind="bindings.date" :model-value="(propsComponent.modelValue as string)"
            :mask="propsComponent.formApi.form.formSettings.dateFormat"
            @update:model-value="propsComponent.modelValueOnUpdate">
            <div class="row items-center justify-end">
              <q-btn v-bind="bindings.btnDate" @click="closePopUpDate" />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
      <q-icon v-bind="bindings.iconDate">
        <q-popup-proxy ref="timePopupProxyRef" v-bind="bindings.popupProxyDate">
          <q-time v-bind="bindings.datetime" :model-value="(propsComponent.modelValue as string)"
            :mask="propsComponent.formApi.form.formSettings.datetimeFormat"
            @update:model-value="propsComponent.modelValueOnUpdate">
            <div class="row items-center justify-end">
              <q-btn v-bind="bindings.btnDatetime" @click="closePopUpTime" />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
