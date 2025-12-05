---
title: Définitions
---

# Définitions

## TFormSettingsProps

```typescript
type TFormSettingsProps = {
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

  /*
  * Message affiché lors d'une recherche vide sur les champs d'associations
  */
  associationEmptyMessage: 'Empty',

  /*
  * Affiche les libelles des champs requis avec un astérisque
  */
  requiredFieldsHasAsterisk: true
};
```
<br /><br /> 

## TFormStyle
```typescript
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

<br /><br /> 

## TSubmit64FormApi

```typescript
type TSubmit64FormApi = {
  /*
   * Obtient le mode du formulaire, edition ou création
   */
  getMode: () => TSubmit64FormMode;

  /*
   * Valide le formulaire, déclenchant toutes les validations de chaque champ
   */
  validate: () => boolean;

  /*
   * Réinitialise tous les champs à leurs valeurs d’origine
   */
  reset: () => void;

  /*
   * Réinitialise tous les champs à leurs valeurs d’origine
   * Ne déclanche pas les évenements, ni la réinitialisation des validations
   */
  softReset: () => void;

  /*
   * Efface tout les champs
   */
  clear: () => void;

  /*
   * Réinitialise les validations
   */
  resetValidation: () => void;

  /*
   * Soumet le formulaire
   */
  submit: () => Promise<void>;

  /*
   * Renvoi les données de la dernière soumission
   */
  getSubmitData: () => TSubmit64SubmitData['resource_data'];

  /*
   * Soumet le formulaire pour création multiple
   * Doit avoir activé :allow_bulk dans la définition du formulaire
   */
  submitBulk: (count: number) => Promise<void>;
  

  /*
   * Renvoi les données de la dernière soumission de masse
   */
  getBulkSubmitData: () => TSubmit64SubmitData["bulk_data"];

  /*
   * Renvoi si le formulaire à été modifier ou non
   */
  valuesHasChanged: () => boolean;

  /*
   * Renvoi si le formulaire est valide, déclanche toutes les validations
   */
  isValid: () => boolean;

  /*
   * Renvoi si le formulaire est invalide, déclanche toutes les validations
   */
  isInvalid: () => boolean;

  /*
   * Renvoi si le formulaire est prêt
   */
  isReady: () => boolean;

  /*
   * Renvoi une section par son nom
   */
  getSectionByName: (sectionName: string) => TSubmit64SectionApi | undefined;

  /*
   * Renvoi une section par index
   */
  getSectionByIndex: (sectionIndex: number) => TSubmit64SectionApi | undefined;

  /*
   * Renvoi toutes les sections
   */
  getSections: () => Map<string, TSubmit64SectionApi>;

  /*
   * Renvoi un champ par son nom
   */
  getFieldByName: (fieldName: string) => TSubmit64FieldApi | undefined;

  /*
   * Renvoi tout les champs
   */
  getFields: () => Map<string, TSubmit64FieldApi>;

  /*
   * Renvoi la valeur désérialisée d'un champ par le nom de celui-ci (valeur avant interopérabilité)
   */
  getInitialValueByFieldName: (fieldName: string) => unknown;

  /*
   * Renvoi la fonction d'association
   */
  getAssociationDataCallback: () => (
    submit64Params: TSubmit64GetAssociationData
  ) => Promise<TSubmit64AssociationData>;

  /*
   * Met à jour le context
   */
  setContext: (context: TContext) => void;

  /*
   * Met à jour la classe css du formulaire
   */
  setCssClass: (cssClass: string) => void;

  /*
   * Met à jour l'état de lecture seule
   */
  setReadonlyState: (state: boolean) => void;

  /*
   * Accés au données du formulaire en mode lecture seule
   */
  form: TForm;
}
```

<br /><br /> 

## TSubmit64SectionApi
```typescript
type TSubmit64SectionApi = {
  /*
   * Réinitialise les champs de la section
   */
  reset: () => void;

  /*
   * Réinitialise les champs de la section
   * Ne déclenche pas les évenements, ni la réinitialisation des validations
   */
  softReset: () => void;

  /*
   * Efface les champs de la section
   */
  clear: () => void;

  /*
   * Valide les champs de la section
   */
  validate: () => boolean;

  /*
   * Renvoi si les champs de la section sont valides. Déclanche la validation
   */
  isValid: () => boolean;

  /*
   * Renvoi si les champs de la section sont invalides. Déclanche la validation
   */
  isInvalid: () => boolean;

  /*
   * Cache la section et ses champs
   */
  hide: () => void;

  /*
   * Affiche la section et ses champs
   */
  unhide: () => void;

  /*
   * Réinitialise les validations des champs de la section
   */
  resetValidation: () => void;

  /*
   * Renvoi les champs de la section
   */
  getFields: () => Map<string, TSubmit64FieldApi>;

  /*
   * Met à jour l'état de lecture seule des champs de la section
   */
  setReadonlyState: (state: boolean) => void;

  /*
   * Met à jour la classe css de la section
   */
  setCssClass: (cssClass: string) => void;

  /*
   * Met à jour l'icon de la section
   */
  setIcon: (icon: string) => void;

  /*
   * Met à jour le libelle de la section
   */
  setLabel: (label: string) => void;

  /*
   * Accés au donnée de la section en lecture seule
   */
  section: TFormSection;
};
```

<br /><br /> 

## TSubmit64FieldApi
```typescript
type TSubmit64FieldApi = {
  /*
   * Réinitialise le champ
   */
  reset: () => void;

  /*
   * Réinitialise le champ
   * Ne déclenche pas les évenements, ni la réinitialisation des validations
   */
  softReset: () => void;

  /*
   * Vide le champ
   */
  clear: () => void;

  /*
   * Valide le champ
   */
  validate: () => boolean;

  /*
   * Renvoi si le champ est valide
   */
  isValid: () => boolean;

  /*
   * Renvoi si le champ est invalide
   */
  isInvalid: () => boolean;

  /*
   * Cache le champ
   */
  hide: () => void;

  /*
   * Affiche le champ
   */
  unhide: () => void;

  /*
   * Réinitialise les validations du champ
   */
  resetValidation: () => void;

  /*
   * Renvoi la valeur serialisée du champ
   */
  getValueSerialized: () => unknown;

  /*
   * Renvoi la valeur déserialisée du champ
   */
  getValueDeserialized: () => unknown;

  /*
   * Met à jour les erreurs provenant de l'intéroperabilité
   */
  setupBackendErrors: (errors: string[]) => void;

  /*
   * Met à jour l'état de lecture seule
   */
  setReadonlyState: (state: boolean) => void;

  /*
   * Met à jour l'indice du champ
   */
  setHint: (hint: string) => void;

  /*
   * Met à jour la classe css du champ
   */
  setCssClass: (cssClass: string) => void;

  /*
   * Met à jour le suffix du champ
   */
  setSuffix: (suffix: string) => void;

  /*
   * Met à jour le prefix du champ
   */
  setPrefix: (prefix: string) => void;

  /*
   * Met à jour le libelle du champ
   */
  setLabel: (label: string) => void;

  /*
   * Met à jour la valeur du champ
   */
  setValue: (value: unknown) => void;

  /*
   * Accès au données du champs en lecture seule
   */
  field: TFormField;
};
```

<br /><br /> 

## TWhenArgs
```typescript
type TWhenArgs = {
  "Field is updated": { fieldName: string };
  "Field is valid": { fieldName: string };
  "Field is invalid": { fieldName: string };
  "Field is validated": { fieldName: string };
  "Field is cleared": { fieldName: string };
  "Field is reseted": { fieldName: string };
  "Field is hidden": { fieldName: string };
  "Field is unhidden": { fieldName: string };
  "Section is valid": { sectionName: string };
  "Section is invalid": { sectionName: string };
  "Section is updated": { sectionName: string };
  "Section is validated": { sectionName: string };
  "Section is hidden": { sectionName: string };
  "Section is unhidden": { sectionName: string };
  "Section is cleared": { sectionName: string };
  "Section is reseted": { sectionName: string };
  "Form is ready": undefined;
  "Form is submited": undefined;
  "Form submit is successful": undefined;
  "Form submit is unsuccessful": undefined;
  "Form is updated": undefined;
  "Form is cleared": undefined;
  "Form is reseted": undefined;
  "Form is valid": undefined;
  "Form is invalid": undefined;
  "Form is validated": undefined;
};
```

<br /><br /> 

## DefaultActionComponent

```vue
<script setup lang="ts">
import { QBtn, type QBtnProps } from "quasar";
import type { TSubmit64ActionFormProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64ActionFormProps>();

// functions
function getButtonBindStyle(): QBtnProps {
  const formStyle =
    propsComponent.formApi.form.formStyle;
  return {
    outline: formStyle.fieldOutlined,
    rounded: formStyle.fieldRounded,
    square: formStyle.fieldSquare,
    dense: formStyle.fieldDense,
    color: formStyle.fieldColor,
    noCaps: true
  };
}
</script>

<template>
  <div class="flex column">
    <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
      <q-btn
        v-bind="getButtonBindStyle()"
        label="Enregistrer"
        :loading="propsComponent.isLoadingSubmit"
        @click="propsComponent.formApi.submit"
      />
      <q-btn
        v-if="propsComponent.formApi.reset"
        v-bind="getButtonBindStyle()"
        :loading="propsComponent.isLoadingSubmit"
        label="Réinitialiser"
        @click="propsComponent.formApi.reset"
      />
      <q-btn
        v-if="propsComponent.formApi.clear"
        v-bind="getButtonBindStyle()"
        :loading="propsComponent.isLoadingSubmit"
        label="Vider"
        @click="propsComponent.formApi.clear"
      />
    </div>
  </div>
</template>
```

<br /><br /> 

## DefaultAssociationDisplayComponent

```vue
<script setup lang="ts">
import { QItemLabel, QItem, QItemSection } from "quasar";
import type { TSubmit64AssociationDisplayProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64AssociationDisplayProps>();
</script>

<template>
  <q-item v-bind="propsComponent.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.entry.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
```

<br /><br /> 

## DefaultOrphanErrorsComponent

```vue
<script setup lang="ts">
import type { TSubmit64OrphanErrorFormProps } from '../models';

// props
const propsComponent = defineProps<TSubmit64OrphanErrorFormProps>()
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

<br /><br /> 

## DefaultSectionComponent

```vue
<script setup lang="ts">
import { QIcon } from "quasar";
import type { TSubmit64SectionProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64SectionProps>();
</script>

<template>
  <div>
    <div class="flex row items-center">
      <q-icon
        v-if="propsComponent.sectionApi.section.icon"
        :name="propsComponent.sectionApi.section.icon"
        size="sm"
        :color="propsComponent.formApi.form.formStyle.fieldColor"
      />
      <div class="text-body1 text-weight-medium">
        {{ propsComponent.sectionApi.section.label }}
      </div>
    </div>

    <div class="flex column q-gutter-md">
      <slot></slot>
    </div>
  </div>
</template>


```

<br /><br /> 
