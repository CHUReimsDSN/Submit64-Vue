<script setup>
import DefaultTheme from 'vitepress/theme'
import AsideBefore from './AsideBefore.vue'
import TitleAfter from './TitleAfter.vue';

// consts
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      <AsideBefore />
    </template>
    <template #nav-bar-title-after>
      <TitleAfter />
    </template>
  </Layout>
</template>
