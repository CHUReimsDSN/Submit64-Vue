<script setup lang="ts">
import {
  TPropsWithClass,
  TSubmit64FieldProps,
  TSubmit64FieldWrapperPropsSlot,
} from "../models";
import type { QDateProps, QIconProps, QInputProps } from "quasar";
import { QInput, QIcon, QPopupProxy, QDate, QBtn } from "quasar";
import FieldWrapper from "./FieldWrapper.vue";
import { ref } from "vue";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const popupProxyRef = ref<InstanceType<typeof QPopupProxy>>()

// functions
function getBindings(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QInputProps & TPropsWithClass {
  const formFactory = propsWrapper.injectForm.getFormFactory();
  const formSetting = formFactory.formSettings;
  const styleConfig = formFactory.formStyleConfig;
  return {
    // behaviour
    modelValue: propsWrapper.modelValue as string,
    lazyRules: formSetting.rulesBehaviour === "lazy",
    clearable: propsWrapper.field.clearable,
    rules: propsWrapper.getComputedRules(),

    // events
    onClear: propsWrapper.clear,

    // display
    label: propsWrapper.field.label,
    hint: propsWrapper.field.hint,
    outlined: styleConfig.fieldOutlined,
    filled: styleConfig.fieldFilled,
    standout: styleConfig.fieldStandout,
    borderless: styleConfig.fieldBorderless,
    rounded: styleConfig.fieldRounded,
    square: styleConfig.fieldSquare,
    dense: styleConfig.fieldDense,
    hideBottomSpace: styleConfig.fieldHideBottomSpace,
    color: styleConfig.fieldColor,
    bgColor: styleConfig.fieldBgColor,
    class: propsWrapper.field.cssClass,
  };
}
function getBindingsIcon(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QIconProps & TPropsWithClass {
  return {
    size: "sm",
    color: "primary",
    name: "event",
    class: "cursor-pointer",
  };
}
function getBindingsDate(
  propsWrapper: TSubmit64FieldWrapperPropsSlot
): QDateProps & TPropsWithClass {
  return {
    modelValue: propsWrapper.modelValue,
    mask: propsWrapper.injectForm.getFormFactory().formSettings.dateFormat,
  };
}
function closePopUp() {
  if (!popupProxyRef.value) {
    return
  }
  popupProxyRef.value.hide();
}
</script>

<template>
  <FieldWrapper :field="propsComponent.field">
    <template v-slot:default="{ propsWrapper }">
      <q-input v-bind="getBindings(propsWrapper)">
        <template v-slot:append>
          <q-icon v-bind="getBindingsIcon(propsWrapper)">
            <q-popup-proxy
              ref="popupProxyRef"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-bind="getBindingsDate(propsWrapper)">
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
  </FieldWrapper>
</template>
