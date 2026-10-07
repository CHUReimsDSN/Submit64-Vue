---
title: Surcharge
---

# Surcharge

Il est possible de surcharger certains élements de Submit64 :

- Les options d'affichage et de comportement (format pour les dates, etc..)
- Les props des champs de saisie
- Le composant de section
- Le composant d'action
- Le composant d'affichage des erreurs orphelines
- Les composants d'extension de section
- Les composants d'extension de champ de saisie
- Les slots des champs de saisie

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
  showResetButton: true,
  showClearButton: true,
  autofocus: true,
});
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TFormSettings } from "submit64-vue";

const formSettings: TFormSettings = {
  showResetButton: true,
  showClearButton: true,
  autofocus: true,
};
</script>

<template>
  <Submit64Form :formSettings="formSettings" />
</template>
```

<br /><br /> 

## Props des champs
Surcharge globale : 
```typescript
import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormBindings({
  fields: {
    string: {
      hint: 'Bonjour',
      color: 'red'
    }
}});
```

Surcharge locale : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
import type { TSubmit64FormProps } from "submit64-vue";

const formBindings: TSubmit64FormProps['formBindings'] = {
  fields: {
    string: {
      hint: 'Bonjour',
      color: 'red'
    }
  }
};
</script>

<template>
  <Submit64Form :formBindings="formBindings" />
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
import type { TSubmit64SectionSlotPropsSegment } from 'submit64-vue';

const propsComponent = defineProps<TSubmit64SectionSlotPropsSegment>()
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
          <q-btn v-bind="propsAction.formApi.form.bindings.form.actions.submitBtn" label="Enregistrer"
            :loading="propsAction.formApi.refs.isLoadingSubmit.value"
            :disable="!propsAction.formApi.refs.isFormValid.value" @click="propsAction.formApi.submit" />
          <q-btn v-if="propsAction.formApi.form.formSettings.showResetButton"
            v-bind="propsAction.formApi.form.bindings.form.actions.resetBtn"
            :loading="propsAction.formApi.refs.isLoadingSubmit.value" label="Réinitialiser"
            @click="propsAction.formApi.reset" />
          <q-btn v-if="propsAction.formApi.form.formSettings.showClearButton"
            v-bind="propsAction.formApi.form.bindings.form.actions.clearBtn"
            :loading="propsAction.formApi.refs.isLoadingSubmit.value" label="Effacer"
            @click="propsAction.formApi.clear" />
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
  <div class="flex column">
    <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
      <q-btn v-bind="propsComponent.formApi.form.bindings.form.actions.submitBtn" label="Enregistrer"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value"
        :disable="!propsComponent.formApi.refs.isFormValid.value" @click="propsComponent.formApi.submit" />
      <q-btn v-if="propsComponent.formApi.form.formSettings.showResetButton"
        v-bind="propsComponent.formApi.form.bindings.form.actions.resetBtn"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value" label="Réinitialiser"
        @click="propsComponent.formApi.reset" />
      <q-btn v-if="propsComponent.formApi.form.formSettings.showClearButton"
        v-bind="propsComponent.formApi.form.bindings.form.actions.clearBtn"
        :loading="propsComponent.formApi.refs.isLoadingSubmit.value" label="Effacer"
        @click="propsComponent.formApi.clear" />
    </div>
  </div>
</template>
```

Props disponibles :  
```typescript
type TSubmit64ActionFormProps = {
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
          v-for="(errorList, errorKey) in propsOrphanErrors.formApi.refs.orphanErrors.value"
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
        v-for="(errorList, errorKey) in propsComponent.formApi.refs.orphanErrors.value"
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

Deux slots sont disponibles pour les extensions de section : `wrapper-before` et `wrapper-after`.  
Pour utiliser ces slots, Submit64 utilise la convention de nommage suivante : 

- `v-slot:section-[section-name]-[section-slot-name]`

Le nom du slot dépend du nom de la section, ou de l'index de la section le cas où la section n'a pas de nom.
Exemple pour une section nommé `machin`:  

- `v-slot:section-machin-wrapper-before`  
- `v-slot:section-machin-wrapper-after`

Exemple pour une section d'index `2`:  

- `v-slot:section-2-wrapper-before`  
- `v-slot:section-2-wrapper-after`  

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:section-machin-wrapper-before>
      <div class="text-amber">Hello I'm before the machin section</div>
    </template>
    <template v-slot:section-machin-wrapper-after>
      <div class=text-purple>Hello I'm after the machin section</div>
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

Deux slots sont disponibles pour les extensions de champs de saisie : `wrapper-before` et `wrapper-after`.  
Pour utiliser ces slots, Submit64 utilise la convention de nommage suivante : 

- `v-slot:field-[field-name]-[field-slot-name]`

Exemple pour un champ nommé `machin`:  

- `v-slot:field-machin-wrapper-before`  
- `v-slot:field-machin-wrapper-after`

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:field-machin-wrapper-before>
      <div class="text-amber">Hello I'm before the machin field</div>
    </template>
    <template v-slot:field-machin-wrapper-after>
      <div class=text-purple>Hello I'm after the machin field</div>
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

## Slots de champ de saisie

Pour utiliser ces slots, Submit64 utilise la convention de nommage suivante : 

- `v-slot:field-[field-name]-[field-slot-name]`

Exemple pour un champ nommé `machin`:  

- `v-slot:field-machin-prepend`  

Surcharge locale sous forme de slot : 
```vue
<script setup lang="ts">
import { Submit64Form } from "submit64-vue";
</script>

<template>
  <Submit64Form>
    <template v-slot:field-machin-prepend>
      <div class="text-amber">Hello I'm the prepend slot of the 'machin' field</div>
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