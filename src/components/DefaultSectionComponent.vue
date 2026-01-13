<script setup lang="ts">
import { QIcon } from "quasar";
import type { TSubmit64SectionProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64SectionProps>();
</script>

<template>
  <div>
    <div class="flex row items-center" :class="propsComponent.sectionApi.section.cssClass">
      <q-icon
        v-if="propsComponent.sectionApi.section.icon"
        :name="propsComponent.sectionApi.section.icon"
        size="sm"
        :color="propsComponent.formApi.form.formStyle.fieldColor"
      />
      <div class="text-body1 text-weight-medium">
        {{ propsComponent.sectionApi.section.label }}
      </div>
    </div>

    <div class="flex column q-gutter-md">
      <slot></slot>
    </div>
  </div>
</template>

