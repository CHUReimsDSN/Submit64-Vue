<script setup lang="ts">
import { QIcon } from "quasar";
import type { TSubmit64SectionProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64SectionProps>();
</script>

<template>
  <div>
    <div class="flex row items-center">
      <q-icon
        v-if="propsComponent.sectionApi.icon"
        :name="propsComponent.sectionApi.icon"
        size="sm"
        :color="propsComponent.formApi.formStyle.fieldColor"
      />
      <div class="text-body1 text-weight-medium">
        {{ propsComponent.sectionApi.label }}
      </div>
    </div>

    <div class="flex column q-gutter-md">
      <slot></slot>
    </div>
  </div>
</template>

