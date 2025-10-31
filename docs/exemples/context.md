---
title: Context
layout: default
parent: Exemples
nav_order: 1
---

# Exemple de définition de contexte : 
```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';

const context = {
  template: 'Template1'
}
</script>

<template>
  <Submit64Form :context="context"
  />
</template>
```