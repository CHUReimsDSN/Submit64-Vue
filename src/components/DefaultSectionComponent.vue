<script setup lang="ts">
// props
const propsComponent = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex column">
    <div class="text-body1 text-weight-medium">
      {{ propsComponent.title }}
    </div>

    <div class="flex column">
      <slot></slot>
    </div>
  </div>
</template>
