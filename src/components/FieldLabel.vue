<script setup lang="ts">
// props
const propsComponents = defineProps<{
  name: string;
}>()
</script>

<template>
  <div style="font-weight: 500; padding: 4px 0;">
    <slot>{{ propsComponents.name }}</slot>
  </div>
</template>
