---
title: Interopérabilité
layout: default
---
# Interopérabilité

Submit64 repose sur la communication entre un client et un serveur.
Dans cette version Vue, on suppose que le client communique via des appels HTTP,
et que ces appels sont envoyés dans des fonctions asynchrones.

Submit64 doit définir trois appels pour communiquer avec le serveur : 
- Récupération des metadata et de la ressource si en mode édition
- Récupération des données pour les champs d'association (facultatif)
- Récupération des données pour la soumission du formulaire

```ts
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

{: .important }
Les appels doivent utiliser les méthodes POST / PUT / PATCH pour pouvoir envoyer les données au serveur.