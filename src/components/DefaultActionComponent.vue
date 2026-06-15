<script setup lang="ts">
import { QBtn } from "quasar";
import type { TSubmit64ActionFormProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64ActionFormProps>();
</script>

<template>
  <div class="flex column">
    <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
      <q-btn v-bind="propsComponent.formApi.form.bindings.form.actions.submitBtn"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value"
        :disable="!propsComponent.formApi.refs.isFormValid.value" @click="propsComponent.formApi.submit" />
      <q-btn v-if="propsComponent.formApi.form.formSettings.showResetButton"
        v-bind="propsComponent.formApi.form.bindings.form.actions.resetBtn"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value"
        @click="propsComponent.formApi.reset" />
      <q-btn v-if="propsComponent.formApi.form.formSettings.showClearButton"
        v-bind="propsComponent.formApi.form.bindings.form.actions.clearBtn"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value"
        @click="propsComponent.formApi.clear" />
    </div>
  </div>
</template>
