<script setup lang="ts">
import { TFormSection } from '../models';

// props
const propsComponent = defineProps<{
  section: TFormSection;
}>();
</script>

<template>
  <div class="flex column" :class="propsComponent.section.cssClass">
    <div class="flex row items-center">

      <q-icon v-if="propsComponent.section.icon" :name="propsComponent.section.icon" size="sm" />
      <div class="text-body1 text-weight-medium">
        {{ propsComponent.section.label }}
      </div>
    </div>

    <div class="flex column q-gutter-sm">
      <slot></slot>
    </div>
  </div>
</template>
