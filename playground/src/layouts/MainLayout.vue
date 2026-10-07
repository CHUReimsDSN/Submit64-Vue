<script setup lang="ts">
import { useRoute } from 'vue-router';

// consts
const route = useRoute()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="home" :to="{ name: 'home' }" />
        <q-toolbar-title> Playground Submit64 - {{ route.name }} </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex column q-px-md justify-start items-center q-py-xl">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
