---
title: Gestionnaire d'évenements
---

# Gestionnaire d'évenements

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

{: .important }
Consulter les [Définitions]({% link 120_definitions.md %}) pour savoir quels événements (TWhenArgs) sont disponibles.
