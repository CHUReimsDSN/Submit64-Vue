---
title: Démarage rapide
---

# Démarrage rapide


Utiliser le composant `Submit64Form` pour afficher le formulaire :

```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
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

Obtenir les informations via HTTP (ici avec Axios) :
```ts
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
