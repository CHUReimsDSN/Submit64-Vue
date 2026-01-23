---
title: Gestionnaire d'événements
---

# Gestionnaire d'événements

Submit64 propose un gestionnaire d'événement centralisé défini sous forme de fonction passer en props au composant `Submit64Form`.  
Cette fonction aura accès à un paramètre mis à disposition par Submit64 qui represente la reférence du composant.  

```vue
<script setup lang="ts">
import { Submit64Form, type DynamicLogicBuilder, } from 'submit64-vue';

function formEventManager(eventBuilder: DynamicLogicBuilder) {
  eventBuilder.when('Form is ready').then((formApi) => {
    formApi.getSectionByIndex(0)?.hide()
  })

  eventBuilder.when('Field is valid', { fieldName: 'libelle'}).then((formApi) => {
    formApi.getFieldByName('libelle')?.setCssClass('rainbow-field')
  })
}
</script>

<template>
  <Submit64Form
    :eventManager="formEventManager"
  />
</template>
```

::: warning Important 
Consulter la [Définition API](/api-definition/models.md#TSubmit64EventWhen) pour connaitre les événements disponibles. 
:::

::: tip Conseil
Le premier paramètre de la fonction `when` sera toujours un string, laisser vous guider par l'intellisence pour voir les événements disponibles
et leurs paramètres !
:::

