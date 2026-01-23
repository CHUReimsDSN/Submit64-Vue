---
title: Surcharge
---

# Surcharge

Il est possible de surcharger certains élements de Submit64 :

- Les options d'affichage et de comportement (format pour les dates, etc..)
- Le style des champs
- Le composant de section
- Le composant d'action
- Le composant d'affichage des erreurs orphelines
- Le composant d'affichage dans la liste des associations
- Les composants d'extension de section
- Les composants d'extension de champ de saisie

Il existe deux types possibles de surcharge :  

- Surcharge globale : effective dans toute l'application, concerne tout les formulaires de Submit64  
- Surcharge locale : effective uniquement sur un formulaire ciblé


{: .important }
Consulter les [Définitions]({% link 120_definitions.md %}) pour connaitre les différents attributs des types lors des surcharges.


<br /><br /> 

## Options du formulaire
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
import type { TFormSettingsProps } from "submit64-vue";

const formSettings: TFormSettingsProps = {
  dateFormat: "DD-MM-YYYY",
  datetimeFormat: "DD-MM-YYYY HH:mm",
};
</script>

<template>
  <Submit64Form :formSettings="formSettings" />
</template>
```

<br /><br /> 

## Style des champs
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

## Composant de section
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomSection from './MyCustomSection.vue'

Submit64.registerGlobalSectionComponent(MyCustomSection);
```


Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:sections="propsSection">
      <div :class="propsSection.sectionApi.section.cssClass">
        <div class="flex row items-center">
          <div class="text-body1 text-weight-medium">
            My custom section -> {{ propsSection.sectionApi.section.label }}
          </div>
        </div>

        <div class="flex column items-start">
          <component :is="propsSection.sectionApi.section.fieldsComponent" /> <!-- Render all fields -->
        </div>
        
      </div>
    </template>
  </Submit64Form>
</template>
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
import type { TSubmit64SectionProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64SectionProps>()
</script>

<template>
  <div :class="propsComponent.sectionApi.section.cssClass">
    <div class="flex row items-center">
      <div class="text-body1 text-weight-medium">
        My custom section -> {{ propsComponent.sectionApi.section.label }}
      </div>
    </div>

    <div class="flex column items-start">
      <component :is="propsComponent.sectionApi.section.fieldsComponent" /> <!-- Render all fields -->
    </div>
    
  </div>
</template>
```


Props disponibles :  
```typescript
type TSubmit64SectionProps = {
  formApi: TSubmit64FormApi;
  sectionApi: TSubmit64SectionApi;
};
```

<br /><br /> 

## Composant d'action
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomAction from './MyCustomAction.vue'

Submit64.registerGlobalActionComponent(MyCustomAction);
```

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:actions="propsAction">
      <div class="flex column">
        <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
          <q-btn
            label="Save"
            :loading="propsAction.isLoadingSubmit"
            @click="propsAction.formApi.submit"
          />
          <q-btn
            v-if="propsAction.reset"
            :loading="propsAction.isLoadingSubmit"
            label="Reset"
            @click="propsAction.formApi.reset"
          />
          <q-btn
            v-if="propsAction.clear"
            :loading="propsAction.isLoadingSubmit"
            label="Clear"
            @click="propsAction.formApi.clear"
          />
        </div>
      </div>
    </template>
  </Submit64Form>
</template>
```

Surcharge locale sous forme de props : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import MyCustomAction from './MyCustomAction.vue'
</script>

<template>
  <Submit64Form :actionComponent="MyCustomAction" />
</template>
```

```vue
<script setup lang="ts">
// MyCustomAction.vue
import type { TSubmit64ActionFormProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64ActionFormProps>();
</script>

<template>
  <div class="flex row items-center no-wrap q-pt-md q-gutter-x-sm">
    <q-btn
      :loading="propsComponent.isLoadingSubmit"
      color="amber"
      label="Submit but its custom"
      @click="propsComponent.formApi.submit"
    />
  </div>
</template>
```

Props disponibles :  
```typescript
type TSubmit64ActionFormProps = {
  isLoadingSubmit: boolean;
  formApi: TSubmit64FormApi;
};
```

<br /><br /> 

## Composant des erreurs orphelines
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import MyCustomOrphanError from './MyCustomOrphanError.vue'

Submit64.registerGlobalOrphanErrorsComponent(MyCustomOrphanError);
```

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:orphan-errors="propsOrphanErrors">
      <div class="flex column">
        <div
          v-for="(errorList, errorKey) in propsOrphanErrors.orphanErrors"
          :key="errorKey"
          class="q-field--error q-field__bottom text-negative"
        >
          {{ errorKey }} : {{ errorList.join(",") }}
        </div>
      </div>
    </template>
  </Submit64Form>
</template>
```

Surcharge locale sous forme de props : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import MyCustomOrphanError from './MyCustomOrphanError.vue'
</script>

<template>
  <Submit64Form :orphanErrorsComponent="MyCustomOrphanError" />
</template>
```

```vue
<script setup lang="ts">
// MyCustomOrphanError.vue
import { UiBindUtils } from 'src/utils/ui-bind';
import type { TSubmit64OrphanErrorFormProps } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64OrphanErrorFormProps>();
</script>

<template>
 <div class="flex column">
    <div
      v-for="(errorList, errorKey) in propsComponent.orphanErrors"
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
  formApi: TSubmit64FormApi;
  orphanErrors: Record<string, string[]>;
};
```

<br /><br /> 

## Composant liste des associations
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';
import AssociationDisplay from './AssociationDisplay.vue'

Submit64.registerGlobalAssociationDisplayComponent(AssociationDisplay);
```

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:association-display="propsAssociationDisplay">
      <q-item v-bind="propsAssociationDisplay.itemProps">
        <q-item-section>
          <q-item-label>{{ propsAssociationDisplay.entry.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </Submit64Form>
</template>
```

Surcharge locale sous forme de props : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import AssociationDisplay from './AssociationDisplay.vue'
</script>

<template>
  <Submit64Form :associationDisplayRecord="AssociationDisplay" />
</template>
```

```vue
<script setup lang="ts">
// AssociationDisplay.vue
import type { TSubmit64AssociationDisplayProps } from "../models";

const propsComponent = defineProps<TSubmit64AssociationDisplayProps>();
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
type TSubmit64AssociationDisplayProps = {
  associationName: string;
  entry: TSubmit64AssociationRowEntry;
  itemProps: QItemProps;
};
```

<br /><br /> 


## Composants d'extension de section
La surcharge globale n'est pas disponible pour les extensions de section.  
La surcharge sous form de props n'est pas disponible pour les extensions de section.  

Deux slots sont disponibles pour les extensions de section : `before` et `after`.  
Le nom du slot dépend du nom de la section, ou de l'index de la section le cas où la section n'a pas de nom.
Exemple pour une section nommé `machin`:  

- `v-slot:section-machin-before`  
- `v-slot:section-machin-after`

Exemple pour une section d'index `2`:  

- `v-slot:section-2-before`  
- `v-slot:section-2-after`  

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:section-random-before>
      <div class="text-amber">Hello I'm before the random section</div>
    </template>
    <template v-slot:section-random-after>
      <div class=text-purple>Hello I'm after the random section</div>
    </template>
  </Submit64Form>
</template>
```

Props disponibles :  
```typescript
type TSubmit64BeforeAfterSectionProps = {
  formApi: TSubmit64FormApi;
  sectionApi: TSubmit64SectionApi;
}
```

<br /><br /> 



## Composants d'extension de champ de saisie
La surcharge globale n'est pas disponible pour les extensions de champ de saisie.  
La surcharge sous form de props n'est pas disponible pour les extensions de champ de saisie.  

Deux slots sont disponibles pour les extensions de champs de saisie : `before` et `after`.  
Le nom du slot dépend du nom du champ.
Exemple pour un champ nommé `libelle`:  

- `v-slot:field-libelle-before`  
- `v-slot:field-libelle-after`

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:field-label-before>
      <div class="text-amber">Hello I'm before the label field</div>
    </template>
    <template v-slot:field-label-after>
      <div class=text-purple>Hello I'm after the label field</div>
    </template>
  </Submit64Form>
</template>
```

Props disponibles :  
```typescript
type TSubmit64BeforeAfterFieldProps = {
  formApi: TSubmit64FormApi;
  fieldApi: TSubmit64FieldApi;
};
```

<br /><br /> 

