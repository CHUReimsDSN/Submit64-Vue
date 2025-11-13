<script setup lang="ts">
import { QIcon } from "quasar";
import type { TSubmit64SectionFormProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64SectionFormProps>();

// const
const formStyle =
  propsComponent.functionsProvider.getFormFactoryInstance().formStyle;
</script>

<template>
  <div class="flex column" :class="propsComponent.section.cssClass">
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

    <div class="flex column q-gutter-sm">
      <slot></slot>
    </div>
  </div>
</template>
