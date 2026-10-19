---
title: Démarage rapide
icon: electric_bolt
---

# Démarrage rapide

Le composant `Submit64Form` permet d'afficher et de gérer un formulaire Submit64 à partir des données fournies par votre application.

Pour l'utiliser, vous devez lui fournir :

- le nom et l'identifiant (si présent) de la ressource
- une fonction permettant de récupérer les métadonnées et les données de la ressource
- une fonction permettant de récupérer les données des associations
- une fonction permettant de récupérer les données nécessaires à la soumission du formulaire


## Utiliser *Submit64Form*

Commencez par importer le composant ainsi que les fonctions qui seront utilisées pour fournir les données au formulaire :


```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import { 
  getMetadataAndResourceDataSubmit64, 
  getAssociationDataSubmit64,
  getSubmitFormDataSubmit64
} from 'submit64.api.ts'
</script>

<template>
  <Submit64Form
    resourceName="MaRessource"
    :resourceId="12"
    :getMetadataAndData="getMetadataAndResourceDataSubmit64"
    :getAssociationData="getAssociationDataSubmit64"
    :getSubmitFormData="getSubmitFormDataSubmit64"
  />
</template>
```

Dans cet exemple :

- `resourceName` correspond au nom de la ressource à manipuler
- `resourceId` correspond à l'identifiant de la ressource
- `getMetadataAndData` permet de récupérer les métadonnées et les données de la ressource
- `getAssociationData` permet de récupérer les données nécessaires aux associations du formulaire
- `getSubmitFormData` permet de récupérer les données nécessaires lors de la soumission du formulaire

Les trois fonctions sont fournies par votre application.   
Le composant `Submit64Form` se charge de les appeler au moment approprié et d'utiliser les données retournées.



## Définir les fonctions de récupération des données

Les fonctions fournies au composant doivent respecter les types définis par le package.  
Elles ne sont pas liées à une méthode particulière de récupération des données.   
Elles peuvent par exemple utiliser une API HTTP, fetch, un store ou toute autre source de données.



Pour commencer, vous pouvez simplement définir les trois fonctions :


```ts [submit64.api.ts]
import type {
  TResourceFormMetadataAndData,
  TSubmit64GetMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64GetAssociationData,
  TSubmit64SubmitSubmitData,
  TSubmit64GetSubmitData,
} from 'submit64-vue';
import { api } from 'boot/axios';

export async function getMetadataAndResourceDataSubmit64(
  submit64Params: TSubmit64GetMetadataAndData,
): Promise<TResourceFormMetadataAndData> {
  return (
    await api.post('my-api/get-metadata-and-data-submit64', {
      submit64Params,
    })
  ).data;
}

export async function getAssociationDataSubmit64(
  submit64Params: TSubmit64GetAssociationData,
): Promise<TSubmit64AssociationData> {
  return (
    await api.post('my-api/get-association-data-submit64', {
      submit64Params,
    })
  ).data;
}

export async function getSubmitFormDataSubmit64(
  submit64Params: TSubmit64GetSubmitData,
): Promise<TSubmit64SubmitSubmitData> {
  return (
    await api.post('my-api/get-submit-data-submit64', {
      submit64Params,
    })
  ).data;
}
```

::: info
L'implémentation de ces fonctions dépend de votre application.   
**Le package ne fait aucune hypothèse sur la manière dont les données sont récupérées.**  
Par exemple, si votre application communique avec un backend HTTP, ces fonctions pourront effectuer les appels nécessaires vers votre API et retourner les données reçues de manière automatique.
:::
