---
title: Événements
icon: sensors
---

# Gestionnaire d'événements

Submit64 propose un gestionnaire d'événements centralisé permettant de réagir aux différents événements qui peuvent se produire au cours de la vie d'un formulaire.
Ce gestionnaire est défini sous la forme d'une fonction passée en prop au composant `Submit64Form` via la propriété `eventManager`.  
Tous les événements du formulaire peuvent être **centralisés** et gérés au même endroit grâce a ce gestionnaire.

Cette fonction reçoit un paramètre de type `DynamicLogicBuilder`, fourni par Submit64.   
Il permet de définir des règles d'exécution en associant un événement à une action à effectuer lorsque celui-ci se produit.

Le gestionnaire permet notamment de réagir à des événements concernant le formulaire ou ses champs, puis d'utiliser l'API du formulaire pour effectuer des actions.

L'exemple ci-dessous illustre deux utilisations du gestionnaire d'événements :

- masquer la section `0` lorsque le formulaire est prêt
- essayer de mettre le focus sur le champ `libelle`

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form, type DynamicLogicBuilder, } from 'submit64-vue';

function formEventManager(eventBuilder: DynamicLogicBuilder) {
  eventBuilder.when('Form is ready').do((formApi) => {
    formApi.getSectionByIndex(0)?.hide()
  })

  eventBuilder.when('Field is invalid', { fieldName: 'libelle'}).do((formApi) => {
    formApi.getFieldByName<'string'>('libelle')?.tryFocus()
  })
}
</script>

<template>
  <Submit64Form
    :eventManager="formEventManager"
  />
</template>
```

La méthode `when()` permet de définir l'événement à écouter et, si nécessaire, de lui associer des paramètres permettant de cibler un élément précis.

La méthode `do()` définit l'action à exécuter lorsque l'événement correspondant est déclenché.  
Elle reçoit l'API du formulaire, ce qui permet d'accéder directement au formulaire, à ses sections et à ses champs.

Dans le premier cas, l'événement `Form is ready` est déclenché lorsque le formulaire est prêt.  
L'API du formulaire est alors utilisée pour récupérer la première section avec `getSectionByIndex(0)` et la masquer avec `hide()`.

Dans le second cas, l'événement `Field is invalid` est associé au champ libelle grâce au paramètre `fieldName`.  
Lorsque ce champ devient invalide, son focus devient actif à l'aide de `tryFocus()`.

## `TSubmit64EventWhen`

<!--@include: ./999_definition.md#tsubmit64eventwhen-->