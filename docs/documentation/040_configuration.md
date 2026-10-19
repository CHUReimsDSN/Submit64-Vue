---
title: Configuration
icon: settings
---

# Configuration

Les configurations permettent de définir ou de surcharger la configuration du formulaire.

Ces dernieres peuvent être définies à trois niveaux :

- Globale : définit la configuration par défaut pour l'ensemble des formulaires.
- Locale : permet de surcharger la configuration pour un formulaire spécifique.
- API du formulaire : permet de modifier dynamiquement une instance donnée.

Ces trois niveaux peuvent être utilisés simultanément.

## Ordre de priorité

Lorsqu'une même configuration est définie à plusieurs niveaux, la valeur la plus spécifique est prioritaire.  
L'ordre de priorité est le suivant, du moins prioritaire au plus prioritaire :  

**Global → Locale → API du formulaire**


## Configuration globale

```ts [submit64.ts]
import { Submit64 } from "submit64-vue";

Submit64.registerGlobalFormSetting({
  autofocus: true,
});
```

L'argument passé à `registerGlobalFormSetting` est de type `TFormSettings`.   

Cette utilisation via la classe `Submit64` est particulièrement utile pour définir la configuration à **l'ensemble de l'application**.


## Configuration locale

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormSettings } from "submit64-vue";

const formSettings: Partial<TFormSettings> = {
  autofocus: true,
};
</script>

<template>
  <Submit64Form :formSettings="formSettings" />
</template>
```

La props passé à `Submit64Form` est de type `TFormSettings`.   
Cette utilisation par props est particulièrement utile pour définir la configuration sur **un formulaire ciblé**.


## API du formulaire

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form, type TSubmit64FormApi } from "submit64-vue";
import { ref } from 'vue'

const formApi = ref<TSubmit64FormApi>()

function removeAutoFocus() {
  formApi.value?.setSettings({ autofocus: false })
}
</script>

<template>
  <Submit64Form ref="formApi" />
</template>
```


## `TFormSettings`

<!--@include: ./999_definition.md#tformsettings-->