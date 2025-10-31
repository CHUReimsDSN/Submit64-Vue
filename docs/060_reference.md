---
title: Réference
---

# Réference

Il est possible de définir une référence sur le composant Submit64Form afin d'accèder à des méthodes ou données utilitaires.

```typescript
type TSubmit64FormExpose = {
  /*
  * Obtient le mode du formulaire, edition ou création
  */ 
  getMode: () => TSubmit64FormMode; 

  /*
  * Obtient l'instance de FormFactory qui à générer le formulaire actuel
  */
  getFormFactoryInstance: () => Readonly<FormFactory>;

  /*
  * Obtient le formulaire actuel
  */
  getForm: () => TFormDef;

  /*
  * Valide le formulaire, déclenchant toutes les validations de chaque champ
  */
  validateForm: () => boolean;

  /*
  * Réinitialise tous les champs à leurs valeurs d’origine
  */
  resetForm: () => void;

  /*
  * Efface tout les champs
  */
  clearForm: () => void;

  /*
  * Réinitialise les validations
  */
  resetValidation: () => void;

  /*
  * Soumet le formulaire
  */
  submitForm: () => Promise<void>;
};
```

Exemple d'accès au formulaire :  

```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import type { TSubmit64FormExpose } from 'submit64-vue';

const submit64Form = ref<TSubmit64FormExpose>()

function example() {
  if (!submit64Form.value) {
    return
  }
  submit64Form.value.clearForm()
}
</script>

<template>
  <Submit64Form ref="submit64Form" />
</template>
```
