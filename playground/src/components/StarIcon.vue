<script setup lang="ts">
// props
const propsComponent = withDefaults(
  defineProps<{
    color: string;
  }>(),
  {
    color: 'grey',
  },
);

// const
const starBind = {
  name: 'star',
  size: 'sm',
};
</script>

<template>
  <q-icon v-bind="starBind" :color="propsComponent.color">
    <slot></slot>
  </q-icon>
</template>
