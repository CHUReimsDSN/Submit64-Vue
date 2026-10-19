---
title: Slots
icon: code
---

# Slots

Les slots permettent de définir ou de surcharger les slots des éléments du formulaire.

Ces derniers peuvent être définis à deux niveaux :

- Globale : définit les slots par défaut pour l'ensemble des formulaires.
- Locale : permet de surcharger les slots pour un formulaire spécifique.
- Slots de template : permet de surcharger les slots directement dans la balise `<template>` de `Submit64Form`.

Ces trois niveaux peuvent être utilisés simultanément.

## Ordre de priorité

Lorsqu'une même configuration de slot est définie à plusieurs niveaux, la valeur la plus spécifique est prioritaire.  
L'ordre de priorité est le suivant, du moins prioritaire au plus prioritaire :  

**Global → Locale -> Slots de template**


## Composantes

Les slots peuvent être appliqués aux trois composantes du formulaire :

- Formulaire
- Section
- Champ

## Slots globaux

```ts [submit64.ts]
import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormSlots({
  fields: {
    string: {
      append: MyCustomComponent
    }
  }
};
```
L'argument passé à `registerGlobalFormSlots` est de type `TFormSlots`.   

Dans cet exemple, la configuration cible les champs grace à la clé `fields`.  
Elle précise ensuite que les champs de type `string` doivent utiliser le slot `append` avec le composant `MyCustomComponent`.  
Ainsi, tous les champs de type `string` utiliseront automatiquement `MyCustomComponent` dans leur slot `append`.  

Cette utilisation via la classe `Submit64` est particulièrement utile pour définir les slots communs à **l'ensemble de l'application**.


## Slots locaux

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormSlots } from "submit64-vue";

const formSlots: Partial<TFormSlots> = {
  fields: {
    string: {
      append: MyCustomComponent
    }
  }
};
</script>

<template>
  <Submit64Form :formSlots="formSlots" />
</template>
```

La props passé à `Submit64Form` est de type `TFormSlots`.   

Dans cet exemple, la configuration cible les champs grace à la clé `fields`.  
Elle précise ensuite que les champs de type `string` doivent utiliser le slot `append` avec le composant `MyCustomComponent`.  
Ainsi, tous les champs de type `string` utiliseront automatiquement `MyCustomComponent` dans leur slot `append`.  

Cette utilisation par props est particulièrement utile pour définir les slots sur **un formulaire ciblé**.

<br />

### Slots ciblés

Les slots ciblés permettent de définir une configuration de slots pour une composante spécifique, en fonction de son nom.  
Contrairement aux configurations par type, notament sur les types de champs, cette approche permet de personnaliser le rendu d'une composante précise.  

Le ciblage s'effectue à l'aide de la clé `byName`, disponible dans `fields` pour les champs et dans `sections` pour les sections du type `TFormSlots`.

```vue [MyForm.vue]
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormSlots } from "submit64-vue";

const formSlots: Partial<TFormSlots> = {
  fields: {
    byName: {
      birthday: {
        append: MyCustomComponent
      }
    }
  }
};
</script>

<template>
  <Submit64Form :formSlots="formSlots" />
</template>
```

Dans cet exemple, la configuration `fields.byName.birthday` cible le champ nommé `birthday`.  
Ainsi, le composant `MyCustomComponent` sera automatiquement injecter dans le slot `append` du champ `birthday`.  
Il est ainsi possible de personnaliser les slots d'un champ ou d'une section sans affecter les autres composantes du même type.


## Slots de template

```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
</script>

<template>
  <Submit64Form>
    <template #field-birthday-append>
      <q-icon name="star" color="orange" />
    </template>
  </Submit64Form />
</template>
```

Les slots peuvent être définis directement dans le template de `Submit64Form` grâce à la syntaxe `#` ou anciennement `v-slot:`.  

Les slots sont identifiés dynamiquement selon la convention suivante :

`#[type_de_la_composante]-[nom_de_la_composante]-[nom_du_slot]`

Cette convention permet de cibler précisément un slot en fonction de la composante concernée, de son nom et du slot à surcharger.

Dans cet exemple, `field-birthday-append` permet de cibler le slot `append` du champ nommé `birthday`.  
Il est ainsi possible de personnaliser le rendu d'un champ directement depuis le template du formulaire.

Des slots additionnels sont également disponibles pour agir sur l'encapsulation des composantes de type `section` ou `field` :

- `wrapper-before` : permet d'ajouter du contenu avant la composante encapsulée.
- `wrapper-after` : permet d'ajouter du contenu après la composante encapsulée.

Ces slots sont particulièrement utiles pour ajouter des éléments autour d'une section ou d'un champ, sans modifier directement son rendu interne.

```vue
<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
</script>

<template>
  <Submit64Form>
    <template #section-my_first_section-wrapper-before>
      <q-icon name="star" color="purple" />
    </template>
  </Submit64Form />
</template>
```

Dans cet exemple, `section-my_first_section-wrapper-before` permet de cibler le slot `wrapper-before` de la section nommée `my_first_section`.  


## `TFormSlots`

<!--@include: ./999_definition.md#tformslots-->

