---
title: Surcharge
---

# Surcharge

Il est possible de surcharger certains élements de Submit64 :

- Les options d'affichage et de comportement (format pour les dates, etc..)
- Le style des champs
- Le composant de section
- Le composant d'action
- Le composant d'affichage dans la liste des associations
- Le composant d'affichage des erreurs orphelines
- Les champs de saisie
- Les composant d'extension de champ de saisie

Il existe deux types possibles de surcharge :  

- Surcharge globale : effective dans toute l'application, concerne tout les formulaires de Submit64  
- Surcharge locale : effective uniquement sur un formulaire ciblé

<br /><br /> 

## Surcharge des options du formulaire
Options disponibles :  
```typescript
type TFormSettings = {
  /*
  * Comportement des règles, validation à chaque saisie ou à la soummission du formulaire
  */
  rulesBehaviour?: "lazy" | "ondemand";

  /*
  * Format des dates à afficher/editer
  */
  dateFormat?: string;

  /*
  * Format des datetimes à afficher/editer
  */
  datetimeFormat?: string;

  /*
  * Affiche les indices déclarés coté serveur
  */
  renderBackendHint?: boolean;
};
```


Surcharge globale :   
```typescript
import { Submit64 } from "submit64-vue";

Submit64.registerGlobalFormSetting({
  dateFormat: "DD-MM-YYYY",
  datetimeFormat: "DD-MM-YYYY HH:mm",
});
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormSettings } from "submit64-vue";

const formSettings: TFormSettings = {
  dateFormat: "DD-MM-YYYY",
  datetimeFormat: "DD-MM-YYYY HH:mm",
};
</script>

<template>
  <Submit64Form :formSettings="formSettings" />
</template>
```

<br /><br /> 

## Surcharge du style des champs
Styles disponibles :  
```typescript
/*
* Style provenant de Quasar
*/
type TFormStyle = {
  fieldFilled?: boolean;
  fieldOutlined?: boolean;
  fieldStandout?: boolean;
  fieldBorderless?: boolean;
  fieldRounded?: boolean;
  fieldSquare?: boolean;
  fieldDense?: boolean;
  fieldHideBottomSpace?: boolean;
  fieldColor?: string;
  fieldBgColor?: string;
  fieldClass?: string;
};
```

Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormStyle({
  fieldRounded: true,
  fieldColor: "secondary"
});
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormStyle } from "submit64-vue";

const formStyle: TFormStyle = {
  fieldRounded: true,
  fieldColor: "secondary",
};
</script>

<template>
  <Submit64Form :formStyle="formStyle" />
</template>
```

<br /><br /> 

## Surcharge du composant de section
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomSection from './MyCustomSection.vue'

Submit64.registerGlobalSectionComponent(MyCustomSection);
```

Surcharge locale sous forme de props : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import MyCustomSection from './MyCustomSection.vue'
</script>

<template>
  <Submit64Form :sectionComponent="MyCustomSection" />
</template>
```

```vue
<script setup lang="ts">
// MyCustomSecton.vue
import type { TSubmit64SectionFormProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64SectionFormProps>()
</script>

<template>
  <div :class="propsComponent.section.cssClass">
    <div class="flex row items-center">
      <div class="text-body1 text-weight-medium">
        My custom section -> {{ propsComponent.section.label }}
      </div>
    </div>

    <div class="flex column items-start">
      <slot></slot> <!-- Render all fields -->
    </div>
    
  </div>
</template>
```

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:actions={propsActions}>
      <div :class="propsActions.section.cssClass">
        <div class="flex row items-center">
          <div class="text-body1 text-weight-medium">
            My custom section -> {{ propsActions.section.label }}
          </div>
        </div>

        <div class="flex column items-start">
          <slot></slot> <!-- Render all fields -->
        </div>
        
      </div>
    </template>
  </Submit64Form>
</template>
```


Props disponibles :  
```typescript
type TSubmit64SectionFormProps = {
    section: TFormSection;
};
type TFormSection = {
    fields: TFormFieldDef[];
    label?: string;
    icon?: string;
    cssClass?: string;
};
```

Slots disponibles :
```typescript
defaultSlot // Slot par défaut, affiche les champs
```

<br /><br /> 

## Surcharge du composant d'action
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomAction from './MyCustomAction.vue'

Submit64.registerGlobalActionComponent(MyCustomAction);
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import MyCustomAction from './MyCustomAction.vue'
</script>

<template>
  <Submit64Form :actionComponent="MyCustomAction" />
</template>
```

Exemple de composant :  
```vue
<script setup lang="ts">
import { UiBindUtils } from 'src/utils/ui-bind';
import type { TSubmit64ActionFormProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64ActionFormProps>();
</script>

<template>
  <div class="flex row items-center no-wrap q-pt-md q-gutter-x-sm">
    <q-btn
      :loading="propsComponent.isLoadingSubmit"
      color="amber"
      label="Submit but its custom"
      @click="propsComponent.submit"
    />
  </div>
</template>
```

Props disponibles :  
```typescript
type TSubmit64ActionFormProps = {
  /*
  * Déduis si le formulaire est en procéssus de soummission. Cela prend en compte l'interopérabilité.
  */
  isLoadingSubmit: boolean;

  /*
  * Réinitialise tous les champs à leurs valeurs d’origine
  */
  reset?: () => void;

  /*
  * Efface tout les champs
  */
  clear?: () => void;

  /*
  * Soumet le formulaire
  */
  submit: () => Promise<void> | void;
};
```

<br /><br /> 

## Surcharge du composant des erreurs orphelines
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomOrphanError from './MyCustomOrphanError.vue'

Submit64.registerGlobalOrphanErrorsComponent(MyCustomOrphanError);
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import MyCustomOrphanError from './MyCustomOrphanError.vue'
</script>

<template>
  <Submit64Form :orphanErrorsComponent="MyCustomOrphanError" />
</template>
```

Exemple de composant :  
```vue
<script setup lang="ts">
import { UiBindUtils } from 'src/utils/ui-bind';
import type { TSubmit64OrphanErrorFormProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64OrphanErrorFormProps>();
</script>

<template>
 <div class="flex column">
    <div
      v-for="(errorList, errorKey) in propsComponent.orphelanErrors"
      :key="errorKey"
      class="q-field--error q-field__bottom text-negative"
    >
      {{ errorKey }} : {{ errorList.join(",") }}
    </div>
  </div>
</template>
```

Props disponibles :  
```typescript
type TSubmit64OrphanErrorFormProps = {
  /*
  * Les erreurs orphelines
  */
  orphanErrors: Record<string, string[]>;
};
```

<br /><br /> 

## Surcharge du composant d'affichage dans la liste des associations
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import AssociationDisplay from './AssociationDisplay.vue'

Submit64.registerGlobalAssociationDisplayComponent(AssociationDisplay);
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import AssociationDisplay from './AssociationDisplay.vue'
</script>

<template>
  <Submit64Form :associationDisplayRecord="AssociationDisplay" />
</template>
```

Exemple de composant :  
```vue
<script setup lang="ts">
import type { TSubmit64AssociationDisplayPropsSlot } from "../models";

const propsComponent = defineProps<TSubmit64AssociationDisplayPropsSlot>();
</script>

<template>
  <q-item v-bind="propsComponent.itemProps" class="bg-teal">
    <q-item-section>
      <q-item-label>{{ propsComponent.opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

```

Props disponibles :  
```typescript
type TSubmit64AssociationDisplayPropsSlot = {
  index: number;
  label: string;
  selected: boolean;
  focused: boolean;
  opt: TSubmit64AssociationRowEntry;
  itemProps: QItemProps;
};
```

<br /><br /> 

## Surcharge de composant d'affichage dans la liste des associations par association

{: .warning }
Feature en développement
