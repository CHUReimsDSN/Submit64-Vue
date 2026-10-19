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




## Inférence des champs

La méthode `getFieldByName` permet de récupérer un champ à partir de son nom.  
Elle accepte un type générique `TFormFieldType`, correspondant au type du champ recherché.

Comme `Submit64Form` ne connaît pas à l'avance les champs qui composent le formulaire, ce paramètre permet de préciser le type du champ afin d'accéder à ses propriétés et méthodes spécifiques.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import type { TSubmit64FormApi } from 'submit64-vue';

const submit64Api = ref<TSubmit64FormApi>()

function example() {
  if (!submit64Api.value) {
    return
  }
  const birthdayField = submit64Api.value.getFieldByName<'date'>('birthday')
}
</script>

<template>
  <Submit64Form ref="submit64Api" />
</template>
```

Dans cet exemple, le type `date` permet à TypeScript d'inférer le type du champ retourné et de proposer l'autocomplétion adaptée à ce type.  
Cette approche permet de bénéficier du typage TypeScript lors de l'utilisation de l'API, tout en conservant la flexibilité des formulaires dynamiques.

## `TSubmit64FormApi`

<!--@include: ./999_definition.md#tsubmit64formapi-->

## `TSubmit64SectionApi`

<!--@include: ./999_definition.md#tsubmit64sectionapi-->

## `TSubmit64FieldApi`

<!--@include: ./999_definition.md#tsubmit64fieldapi-->