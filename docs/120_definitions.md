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
  * Renvoi si le formulaire à été modifier ou non
  */
  valuesHasChanged: () => boolean;
  
  /*
  * Renvoi si le formulaire est valide, déclanche toutes les validations
  */
  isFormValid: () => boolean;

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
};
```

## TSubmit64SectionApi
```typescript
type TSubmit64SectionApi = {
  /*
  * Réinitialise les champs de la section
  */
  reset: () => void;

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
  * MEt à jour l'icon de la section
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

## TSubmit64FieldApi
```typescript
type TSubmit64FieldApi = {

  /*
  * Réinitialise le champ
  */
  reset: () => void;

  /*
  * Vide le champ
  */
  clear: () => void;

  /*
  * Valide le champ
  */
  validate: () => boolean;

  /*
  * Renvoi si le champ est valid
  */
  isValid: () => boolean;

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

## TWhenArgs
```typescript
type TWhenArgs = {
  "Field is updated": { fieldName: string };
  "Field is valid": { fieldName: string };
  "Field is validated": { fieldName: string };
  "Field is cleared": { fieldName: string };
  "Field is reseted": { fieldName: string };
  "Field is hidden": { fieldName: string };
  "Field is unhidden": { fieldName: string };
  "Section is valid": { sectionName: string };
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
  "Form is validated": undefined;
};
```