---
title: Création de masse
layout: default
parent: Exemples
nav_order: 2
---

# Exemple de composant d'action pour une création de masse : 
```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';

const context = {
  template: 'Template1'
}
</script>

<template>
  <Submit64Form :context="context" />
</template>
```