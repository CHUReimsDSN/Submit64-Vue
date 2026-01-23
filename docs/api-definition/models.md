---
title: Définition API
---

# Définition API


## TResourceFormMetadataAndData
```typescript
export type TResourceFormMetadataAndData = {
  form: TResourceFormMetadata;
  resource_data: TResourceData;
};
```


## TResourceFormMetadata
```typescript
export type TResourceFormMetadata = {
  sections: TResourceFormSectionMetadata[];
  resource_name: string;
  backend_date_format: string;
  backend_datetime_format: string;
  resetable?: boolean | null;
  clearable: boolean | null;
  css_class: string | null;
  readonly: boolean | null;
  allow_bulk: boolean | null;
};
```


## TResourceFormSectionMetadata
```typescript
export type TResourceFormSectionMetadata = {
  fields: TResourceFieldMetadata[];
  label: string | null;
  name: string | null;
  icon: string | null;
  css_class: string | null;
  readonly: boolean | null;
};
```


## TResourceFieldMetadata
```typescript
export type TResourceFieldMetadata = {
  field_name: string;
  field_type: TFormField["type"];
  field_extra_type?: TFormField["extraType"];
  label: string;
  field_association_name: string | null;
  field_association_class: string | null;
  hint: string | null;
  prefix: string | null;
  suffix: string | null;
  readonly: boolean | null;
  rules: TSubmit64Rule[];
  static_select_options: TSubmit64StaticSelectOptions[];
  css_class: string | null;
  unlinked: boolean;
  field_association_data?: {
    label: string;
    data: TRecord;
  }[];
  field_attachment_data?: {
    attachment_id: TRecord["id"];
    filename: string;
    size: number;
  }[];
};
```


## TSubmit64AssociationData
```typescript
export type TSubmit64AssociationData = {
  rows: TSubmit64AssociationRowEntry[];
  row_count: number;
};
```


## TSubmit64AssociationRowEntry
```typescript
export type TSubmit64AssociationRowEntry = {
  label: string;
  value: TRecord["id"];
  data: TRecord;
};
```


## TSubmit64SubmitData
```typescript
export type TSubmit64SubmitData = {
  success: boolean;
  errors: Record<string, string[]>;
  resource_id: TRecord["id"] | null;
  resource_data: TResourceData | null;
  form: TResourceFormMetadata | null;
  bulk_data: TResourceData[] | null;
};
```


## TFormSettings
```typescript
export type TFormSettings = {
  backendDateFormat: string;
  backendDatetimeFormat: string;

  /*
   * Comportement des règles, validation à chaque saisie ou à la soummission du formulaire
   */
  rulesBehaviour?: "lazy" | "ondemand" | undefined;

  /*
   * Format des dates à afficher/editer
   */
  dateFormat?: string | undefined;

  /*
   * Format des datetimes à afficher/editer
   */
  datetimeFormat?: string | undefined;

  /*
   * Affiche les indices déclarés coté serveur
   */
  renderBackendHint?: boolean | undefined;

  /*
   * Message affiché lors d'une recherche vide sur les champs d'associations
   */
  associationEmptyMessage?: string | undefined;

  /*
   * Affiche les libelles des champs requis avec un astérisque
   */
  requiredFieldsHasAsterisk?: boolean | undefined;
};
```


## TFormStyle
```typescript
export type TFormStyle = {
  fieldFilled?: boolean | undefined;
  fieldOutlined?: boolean | undefined;
  fieldStandout?: boolean | string | undefined;
  fieldBorderless?: boolean | undefined;
  fieldRounded?: boolean | undefined;
  fieldSquare?: boolean | undefined;
  fieldDense?: boolean | undefined;
  fieldHideBottomSpace?: boolean | undefined;
  fieldColor?: string | undefined;
  fieldBgColor?: string | undefined;
  fieldClass?: string | undefined;
};
```


## TFormSection
```typescript
export type TFormSection = {
  fields: TFormField[];
  name: Readonly<string>;
  label?: string;
  icon?: string;
  hidden: boolean;
  cssClass?: string;
  readonly?: boolean;
  beforeComponent?: Readonly<Component> | undefined;
  mainComponent: Readonly<Component>;
  fieldsComponent: Readonly<Component>; // late init
  afterComponent?: Readonly<Component> | undefined;
  events: Readonly<TFormSectionEvent>;
};
```


## TFormField
```typescript
export type TFormField = {
  type: Readonly<
    | "string"
    | "text"
    | "date"
    | "datetime"
    | "select"
    | "selectBelongsTo"
    | "selectHasMany"
    | "selectHasOne"
    | "selectHasAndBelongsToMany"
    | "checkbox"
    | "number"
    | "object"
    | "attachmentHasOne"
    | "attachmentHasMany"
  >;
  extraType?: Readonly<"color" | "wysiwyg"> | undefined;
  metadata: Readonly<TResourceFieldMetadata>;
  label?: string;
  hint?: string;
  suffix?: string;
  prefix?: string;
  readonly?: boolean;
  rules?: TSubmit64Rule[];
  cssClass?: string;
  clearable?: boolean;
  hidden: boolean;
  associationData?: {
    label: string;
    data: TRecord;
  }[];
  attachmentData?: {
    attachment_id: TRecord["id"];
    filename: string;
    size: number;
  }[];
  staticSelectOptions?: TSubmit64StaticSelectOptions[];
  beforeComponent?: Readonly<Component> | undefined;
  mainComponent: Readonly<Component>;
  afterComponent?: Readonly<Component> | undefined;
  events: Readonly<TFormFieldEvent>;
  componentOptions: {
    associationDisplayComponent?: Readonly<Component>;
    regularFieldType?: "textarea";
  };
};
```


## TSubmit64FormApi
```typescript
export type TSubmit64FormApi = {
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
   * Ne déclanche pas les événements, ni la réinitialisation des validations
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
  getSubmitData: () => TSubmit64SubmitData["resource_data"];

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
    submit64Params: TSubmit64GetAssociationData,
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
export type TSubmit64SectionApi = {
  /*
   * Réinitialise les champs de la section
   */
  reset: () => void;

  /*
   * Réinitialise les champs de la section
   * Ne déclenche pas les événements, ni la réinitialisation des validations
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


## TSubmit64FieldApi
```typescript
export type TSubmit64FieldApi = {
  /*
   * Réinitialise le champ
   */
  reset: () => void;

  /*
   * Réinitialise le champ
   * Ne déclenche pas les événements, ni la réinitialisation des validations
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


## TSubmit64FormProps
```typescript
export type TSubmit64FormProps = {
  resourceName: string;
  getMetadataAndData: (
    submit64Params: TSubmit64GetMetadataAndData,
  ) => Promise<TResourceFormMetadataAndData>;
  getSubmitFormData: (
    submit64Params: TSubmit64GetSubmitData,
  ) => Promise<TSubmit64SubmitData>;
  getAssociationData?: (
    submit64Params: TSubmit64GetAssociationData,
  ) => Promise<TSubmit64AssociationData>;
  resourceId?: TRecord["id"] | undefined;
  formSettings?: TFormSettingsProps | undefined;
  formStyle?: TFormStyle | undefined;
  actionComponent?: Component | undefined;
  orphanErrorsComponent?: Component | undefined;
  sectionComponent?: Component | undefined;
  wrapperResetComponent?: Component | undefined;
  associationDisplayComponent?: Component | undefined;
  associationDisplayRecord?: Record<string, Component> | undefined;
  eventManager?: (eventManager: DynamicLogicBuilder) => void;
  context?: TContext | undefined;
};
```


## TSubmit64SectionProps
```typescript
export type TSubmit64SectionProps = {
  formApi: TSubmit64FormApi;
  sectionApi: TSubmit64SectionApi;
};
```


## TSubmit64AssociationDisplayProps
```typescript
export type TSubmit64AssociationDisplayProps = {
  associationName: string;
  entry: TSubmit64AssociationRowEntry;
  itemProps: QItemProps;
};
```


## TSubmit64OrphanErrorFormProps
```typescript
export type TSubmit64OrphanErrorFormProps = {
  orphanErrors: Record<string, string[]>;
  formApi: TSubmit64FormApi;
};
```


## TSubmit64ActionFormProps
```typescript
export type TSubmit64ActionFormProps = {
  isLoadingSubmit: boolean;
  formApi: TSubmit64FormApi;
};
```


## TSubmit64BeforeAfterSectionProps
```typescript
export type TSubmit64BeforeAfterSectionProps = {
  formApi: TSubmit64FormApi;
  sectionApi: TSubmit64SectionApi;
};
```


## TSubmit64BeforeAfterFieldProps
```typescript
export type TSubmit64BeforeAfterFieldProps = {
  formApi: TSubmit64FormApi;
  fieldApi: TSubmit64FieldApi;
};
```


## TSubmit64GetMetadataAndData
```typescript
export type TSubmit64GetMetadataAndData = {
  resourceName: string;
  resourceId?: TRecord["id"];
  context?: TContext;
};
```


## TSubmit64GetAssociationData
```typescript
export type TSubmit64GetAssociationData = {
  resourceName: string;
  resourceId?: TRecord["id"];
  associationName: string;
  limit: number;
  offset: number;
  labelFilter?: string;
  context?: TContext;
};
```


## TSubmit64GetSubmitData
```typescript
export type TSubmit64GetSubmitData = {
  resourceName: string;
  resourceData: Record<string, unknown>;
  resourceId?: TRecord["id"];
  bulkCount?: number;
  context?: TContext;
};
```


## TSubmit64EventWhen
```typescript
export type TSubmit64EventWhen = {
  "Field is updated": { fieldName: string };
  "Field is valid": { fieldName: string };
  "Field is invalid": { fieldName: string };
  "Field is validated": { fieldName: string };
  "Field is cleared": { fieldName: string };
  "Field is reseted": { fieldName: string };
  "Field is hidden": { fieldName: string };
  "Field is unhidden": { fieldName: string };
  "Field is ready": { fieldName: string };
  "Section is valid": { sectionName: string };
  "Section is invalid": { sectionName: string };
  "Section is updated": { sectionName: string };
  "Section is validated": { sectionName: string };
  "Section is hidden": { sectionName: string };
  "Section is unhidden": { sectionName: string };
  "Section is cleared": { sectionName: string };
  "Section is reseted": { sectionName: string };
  "Section is ready": { sectionName: string };
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
