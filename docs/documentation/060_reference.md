---
title: Réference
icon: anchor
---

# Réference

Il est possible de définir une référence sur un composant `Submit64Form` afin d'accéder à son API depuis le script du composant Vue.

Cette référence permet notamment d'utiliser les méthodes et les données utilitaires exposées par le formulaire.  
Elle est particulièrement utile lorsque certaines actions doivent être déclenchées depuis le composant parent, par exemple pour réinitialiser le formulaire, modifier sa configuration ou interagir avec son état.

Exemple d'accès au formulaire :  

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import type { TSubmit64FormApi } from 'submit64-vue';

const submit64Api = ref<TSubmit64FormApi>()

function example() {
  if (!submit64Api.value) {
    return
  }
  submit64Api.value.clear()
}
</script>

<template>
  <Submit64Form ref="submit64Api" />
</template>
```

## `TSubmit64FormApi`

<!--@include: ./999_definition.md#tsubmit64formapi-->

## `TSubmit64SectionApi`

<!--@include: ./999_definition.md#tsubmit64sectionapi-->

## `TSubmit64FieldApi`

<!--@include: ./999_definition.md#tsubmit64fieldapi-->