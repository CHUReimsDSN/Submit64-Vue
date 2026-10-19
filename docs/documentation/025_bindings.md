---
title: Bindings
icon: input
---

# Bindings

Les bindings permettent de définir ou de surcharger les props des composantes du formulaire.

Ces derniers peuvent être définis à trois niveaux :

- Globale : définit les props par défaut pour l'ensemble des formulaires.
- Locale : permet de surcharger les props pour un formulaire spécifique.
- API du formulaire : permet de modifier dynamiquement une instance donnée.

Ces trois niveaux peuvent être utilisés simultanément.

## Ordre de priorité

Lorsqu'une même configuration de props est définie à plusieurs niveaux, la valeur la plus spécifique est prioritaire.  
L'ordre de priorité est le suivant, du moins prioritaire au plus prioritaire :  

**Global → Locale → API du formulaire**


## Composantes

Les bindings peuvent être appliqués aux trois composantes du formulaire :

- Formulaire
- Section
- Champ

## Bindings globaux

```ts [submit64.ts]
import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormBindings({
  fields: {
    string: {
      color: 'amber'
    }
}});
```

L'argument passé à `registerGlobalFormBindings` est de type `TFormBindings`.   

Dans cet exemple, la configuration cible les champs grace à la clé `fields`.  
Elle précise ensuite que les champs de type `string` auront la props `color` avec la valeur `amber`.  
Ainsi, tous les champs de type `string` auront automatiquement la props `color` avec la valeur `amber`.  

Cette utilisation via la classe `Submit64` est particulièrement utile pour définir les props communes à **l'ensemble de l'application**.


## Bindings locaux

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormBindings } from "submit64-vue";

const formBindings: Partial<TFormBindings> = {
  fields: {
    string: {
      color: 'amber'
    }
  }
};
</script>

<template>
  <Submit64Form :formBindings="formBindings" />
</template>
```

La props passé à `Submit64Form` est de type `TFormBindings`.   

Dans cet exemple, la configuration cible les champs grace à la clé `fields`.  
Elle précise ensuite que les champs de type `string` auront la props `color` avec la valeur `amber`.  
Ainsi, tous les champs de type `string` auront automatiquement la props `color` avec la valeur `amber`.  

Cette utilisation par props est particulièrement utile pour définir les slots sur **un formulaire ciblé**.

<br />

### Bindings ciblés

Les bindings ciblés permettent de définir une configuration de bindings pour une composante spécifique, en fonction de son nom.  
Contrairement aux configurations par type, notament sur les types de champs, cette approche permet de personnaliser les props d'une composante précise.  

Le ciblage s'effectue à l'aide de la clé `byName`, disponible dans `fields` pour les champs et dans `sections` pour les sections du type `TFormBindings`.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormBindings } from "submit64-vue";

const formBindings: Partial<TFormBindings> = {
  fields: {
    byName: {
      label: {
        dense: true
      }
    }
  }
};
</script>

<template>
  <Submit64Form :formBindings="formBindings" />
</template>
```

Dans cet exemple, la configuration `fields.byName.label` cible le champ nommé `label`.  
Ainsi, la props `dense` avec la valeur `true` sera automatiquement injecter dans le champ `birthday`.  
Il est ainsi possible de personnaliser les props d'un champ ou d'une section sans affecter les autres composantes du même type.


## API du formulaire

Modifier les bindings par l'API du formulaire est différente, car les bindings doivent être ciblés directement sur la composante.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form, type TSubmit64FormApi } from "submit64-vue";
import { ref } from 'vue'

const formApi = ref<TSubmit64FormApi>()

// form
formApi?.setBindings(
  {
    default: {
      sectionContainerClass: ''
    }
  }
)

// section
formApi.getSectionByName("first")?.setBindings({
  icon: 'rocket'
});

// champ
formApi.getFieldByName<"string">("label")?.setBindings({
  dense: true,
});
</script>

<template>
  <Submit64Form ref="formApi" />
</template>
```


## `TFormBindings`

<!--@include: ./999_definition.md#tformbindings-->