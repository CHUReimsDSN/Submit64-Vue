<script setup lang="ts">
import { QIcon } from "quasar";
import type { TSubmit64SectionProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64SectionProps>();

// const
const formStyle =
  propsComponent.formApi.getForm().formStyle;
</script>

<template>
  <div>
    <div class="flex row items-center">
      <q-icon
        v-if="propsComponent.section.icon"
        :name="propsComponent.section.icon"
        size="sm"
        :color="formStyle.fieldColor"
      />
      <div class="text-body1 text-weight-medium">
        {{ propsComponent.section.label }}
      </div>
    </div>

    <div class="flex column q-gutter-md">
      <slot></slot>
    </div>
  </div>
</template>

