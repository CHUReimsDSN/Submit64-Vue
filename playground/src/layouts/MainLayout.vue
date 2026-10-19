<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

// consts
const router = useRouter();
const route = useRoute();

// computeds
const allTestRoutes = computed(() => {
  return router.getRoutes().filter((route) => {
    return route.name !== undefined && route.name !== null && route.name !== 'home';
  });
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn icon="home" :to="{ name: 'home' }" />
        <h3>Playground Submit64</h3>
        <q-space />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex column q-px-md items-center q-py-xl">
        <div class="flex q-gutter-sm q-pb-lg">
          <q-btn
            v-for="(routeItem, index) of allTestRoutes"
            :key="index"
            :label="String(routeItem.name ?? index)"
            :to="{ name: routeItem.name }"
            :color="routeItem.name === route.name ? 'primary' : 'secondary'"
          />
        </div>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
