<script setup lang="ts">
import type { TSubmit64FormSlotPropsSegment } from "../../../models";

const propsComponent = defineProps<TSubmit64FormSlotPropsSegment>();
</script>

<template>
  <div
    :class="
      propsComponent.formApi.form.bindings.default.sectionContainerClass ??
      'flex column q-pa-sm q-gutter-sm'
    "
  >
    <slot></slot>
  </div>
</template>
