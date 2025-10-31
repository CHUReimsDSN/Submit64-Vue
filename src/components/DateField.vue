<script setup lang="ts">
import { TSubmit64FieldProps } from "../models";
import { QInput, QIcon, QPopupProxy, QDate, QBtn } from "quasar";
import { onMounted, ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
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

// lifeCycle
onMounted(() => {
  propsComponent.wrapper.registerValidationCallback(validate)
})
</script>

<template>
  <q-input
    ref="fieldRef"
    v-model="(propsComponent.wrapper.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.wrapper.modelValueOnUpdate(value)
    "
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
    :readonly="propsComponent.wrapper.field.readonly"
    :clearable="propsComponent.wrapper.field.clearable"
    :rules="propsComponent.wrapper.rules"
    @clear="propsComponent.wrapper.clear"
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
            v-model="(propsComponent.wrapper.modelValue as string)"
            v-on:update:model-value="
              (value: unknown) => propsComponent.wrapper.modelValueOnUpdate(value)
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
