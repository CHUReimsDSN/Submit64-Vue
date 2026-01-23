---
title: Réference
---

# Réference

Il est possible de définir une référence sur le composant Submit64Form afin d'accèder à des méthodes ou données utilitaires.


Exemple d'accès au formulaire :  

```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import type { TSubmit64FormApi } from 'submit64-vue';

const submit64Form = ref<TSubmit64FormApi>()

function example() {
  if (!submit64Form.value) {
    return
  }
  submit64Form.value.clear()
}
</script>

<template>
  <Submit64Form ref="submit64Form" />
</template>
```

{: .important }
Consulter les [Définitions]({% link 120_definitions.md %}) pour savoir quelles méthodes sont disponibles.

