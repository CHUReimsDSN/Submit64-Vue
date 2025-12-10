<script setup lang="ts">
import { TSubmit64FieldProps } from "../models";
import { QInput, QIcon, QPopupProxy, QDate, QTime, QBtn } from "quasar";
import { nextTick, onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const form = propsComponent.formApi.form;
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

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

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation)
  if (!lazyRules) {
    void nextTick(() => {
      fieldRef.value?.resetValidation()
    })
  }
});
</script>

<template>
  <q-input
    ref="fieldRef"
    :model-value="(propsComponent.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.modelValueOnUpdate(value)
    "
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
    :prefix="propsComponent.field.prefix"
    :suffix="propsComponent.field.suffix"
    :readonly="propsComponent.field.readonly"
    :clearable="propsComponent.field.clearable"
    :rules="propsComponent.rules"
    @clear="propsComponent.clear"
  >
    <template v-slot:append>
      <q-icon size="sm" color="primary" name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="datePopupProxyRef"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            :model-value="(propsComponent.modelValue as string)"
            v-on:update:model-value="
              (value: unknown) => propsComponent.modelValueOnUpdate(value)
            "
            :mask="form.formSettings.datetimeFormat"
          >
            <div class="row items-center justify-end">
              <q-btn
                @click="closePopUpDate"
                label="Fermer"
                color="secondary"
                flat
                no-caps
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
      <q-icon
        size="sm"
        color="primary"
        name="access_time"
        class="cursor-pointer"
      >
        <q-popup-proxy
          ref="timePopupProxyRef"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-time
            :model-value="(propsComponent.modelValue as string)"
            v-on:update:model-value="
          (value: unknown) => propsComponent.modelValueOnUpdate(value)"
            :mask="form.formSettings.datetimeFormat"
            format24h
          >
            <div class="row items-center justify-end">
              <q-btn
                @click="closePopUpTime"
                label="Fermer"
                color="secondary"
                flat
                no-caps
              />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
