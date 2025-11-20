<script setup lang="ts">
import { QBtn, type QBtnProps } from "quasar";
import type { TSubmit64ActionFormProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64ActionFormProps>();

// functions
function getButtonBindStyle(): QBtnProps {
  const formStyle =
    propsComponent.formApi.form.formStyle;
  return {
    outline: formStyle.fieldOutlined,
    rounded: formStyle.fieldRounded,
    square: formStyle.fieldSquare,
    dense: formStyle.fieldDense,
    color: formStyle.fieldColor,
    noCaps: true
  };
}
</script>

<template>
  <div class="flex column">
    <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
      <q-btn
        v-bind="getButtonBindStyle()"
        label="Enregistrer"
        :loading="propsComponent.isLoadingSubmit"
        @click="propsComponent.submit"
      />
      <q-btn
        v-if="propsComponent.reset"
        v-bind="getButtonBindStyle()"
        :loading="propsComponent.isLoadingSubmit"
        label="Réinitialiser"
        @click="propsComponent.reset"
      />
      <q-btn
        v-if="propsComponent.clear"
        v-bind="getButtonBindStyle()"
        :loading="propsComponent.isLoadingSubmit"
        label="Vider"
        @click="propsComponent.clear"
      />
    </div>
  </div>
</template>
