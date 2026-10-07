<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

// consts
const router = useRouter();

// computeds
const allTestRoutes = computed(() => {
  return router.getRoutes().filter((route) => {
    return route.name !== undefined && route.name !== null && route.name !== 'home';
  });
});
</script>

<template>
  <div class="flex q-gutter-sm">
    <q-btn
      v-for="(route, index) of allTestRoutes"
      :key="index"
      :label="String(route.name ?? index)"
      :to="{ name: route.name }"
    />
  </div>
</template>
