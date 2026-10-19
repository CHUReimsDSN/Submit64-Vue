---
title: Contexte
icon: data_object
---

# Contexte
 
Le contexte est un objet librement défini par l'application qui utilise Submit64.  

Il s'agit d'un objet `{}` dont la structure et le contenu sont entièrement laissés au développeur : Submit64 n'impose aucune propriété et ne fait aucune hypothèse sur les données qu'il contient.  
Il permet de transmettre des informations spécifiques à votre application à travers les différentes fonctions et mécanismes de Submit64.  

Vous pouvez ainsi y placer les données dont votre application a besoin, qu'il s'agisse d'informations liées à l'utilisateur, à la ressource manipulée, à l'environnement de l'application ou à tout autre contexte métier.  
Le même objet peut ensuite être récupéré et utilisé par les différentes fonctions concernées, ce qui permet de faire transiter facilement des informations entre votre application et Submit64.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';

const context = {
  test: true
}
</script>

<template>
  <Submit64Form :context="context" />
</template>
```

Le context peut également être consulté et modifié via l'API du formulaire.  
Cela permet notamment d'ajouter, de modifier ou de supprimer des informations au cours de la vie du formulaire, en fonction des besoins de votre application.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import type { TSubmit64FormApi } from 'submit64-vue';

const submit64Api = ref<TSubmit64FormApi>()
const context = {
  test: true
}

submit64Api.value?.setContext(
  {
    test: false
  }
)
</script>

<template>
  <Submit64Form 
    ref="submit64Api"
    :context="context" 
  />
</template>
```

## `TContext`

<!--@include: ./999_definition.md#tcontext-->