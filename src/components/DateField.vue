<script setup lang="ts">
import { TSubmit64FieldProps } from "../models";
import { QInput, QIcon, QPopupProxy, QDate, QBtn } from "quasar";
import { onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.functionsProvider.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";

// refs
const popupProxyRef = ref<InstanceType<typeof QPopupProxy>>();
const fieldRef = ref<InstanceType<typeof QInput>>()

// functions
function closePopUp() {
  if (!popupProxyRef.value) {
    return;
  }
  popupProxyRef.value.hide();
}
function validate() {
  if (!fieldRef.value) {
    return false
  }
  return fieldRef.value.validate() as boolean
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.resetValidation()
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, resetValidation)
})
</script>

<template>
  <q-input
    ref="fieldRef"
    v-model="(propsComponent.modelValue as string)"
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
          ref="popupProxyRef"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            v-model="(propsComponent.modelValue as string)"
            v-on:update:model-value="
              (value: unknown) => propsComponent.modelValueOnUpdate(value)
            "
            :mask="formFactory.formSettings.dateFormat"
          >
            <div class="row items-center justify-end">
              <q-btn
                @click="closePopUp"
                label="Fermer"
                color="secondary"
                flat
                no-caps
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
