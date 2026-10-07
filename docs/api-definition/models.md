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
  css_class: string | null;
  readonly: boolean | null;
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
  field_type: Readonly<
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
  field_extra_type?: Readonly<"color" | "wysiwyg"> | undefined;
  label: string;
  field_association_name: string | null;
  field_association_class: string | null;
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
};
```


## TFormSettings
```typescript
export type TFormSettings = {
  /*
   * Format des dates à envoyer au serveur
   */
  backendDateFormat: string;

  /*
   * Format des datetimes à envoyer au serveur
   */
  backendDatetimeFormat: string;

  /*
   * Format des dates à afficher/editer
   */
  dateFormat: string;

  /*
   * Format des datetimes à afficher/editer
   */
  datetimeFormat: string;

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

  /*
   * Affiche le button de réinitialisation dans les actions (si non surchargé)
   */
  showResetButton?: boolean | undefined;

  /*
   * Affiche le button d'effacement dans les actions (si non surchargé)
   */
  showClearButton?: boolean | undefined;

  /*
   * Essaye de focus le premier champ disponible du formulaire
   */
  autofocus?: boolean | undefined;

  /*
   * Affiche le libelle des champs à l'intérieur de ces derniers
   */
  displayLabelInsideInput?: boolean | undefined;
};
```


## TFormBindings
```typescript
export type TFormBindings = {
  /*
   * Props des champs de saisie
   */
  fields: {
    /*
     * Props des champs de type string
     */
    string: TStringBindings;

    /*
     * Props des champs de type number
     */
    number: TNumberBindings;

    /*
     * Props des champs de type string-wysiwyg
     */
    wysiwyg: TWysiwygBindings;

    /*
     * Props des champs de type string-color
     */
    color: TColorBindings;

    /*
     * Props des champs de type checkbox
     */
    checkbox: TCheckboxBindings;

    /*
     * Props des champs de type date
     */
    date: TDateBindings;

    /*
     * Props des champs de type datetime
     */
    datetime: TDatetimeBindings;

    /*
     * Props des champs de type select
     */
    select: TSelectBindings;

    /*
     * Props des champs de type hasMany
     */
    hasMany: THasManyBindings;

    /*
     * Props des champs de type belongsTo
     */
    belongsTo: TBelongsToBindings;

    /*
     * Props des champs de type attachmentBelongsTo
     */
    attachmentHasOne: TAttachmentHasOneBindings;

    /*
     * Props des champs de type attachmentHasMany
     */
    attachmentHasMany: TAttachmentHasManyBindings;

    /*
     * Props par nom de champ
     */
    byName: Record<string, TFieldBindings>;
  };

  /*
   * Props des sections
   */
  sections: {
    /*
     * Props de toutes les sections
     */
    default: TSectionBindings;

    /*
     * Props par nom de section
     */
    byName: Record<string, TSectionBindings>;
  };

  /*
   * Props du formulaire
   */
  form: {

    /*
     * Props du composant d'action
     */
    actions: TActionBindings;
  };
};
```


## TFormSlots
```typescript
export type TFormSlots = {
  /*
   * Slots des champs de saisie
   */
  fields: {
    /*
     * Slots des champs de type string
     */
    string: Record<string, Component | undefined>;

    /*
     * Slots des champs de type number
     */
    number: Record<string, Component | undefined>;

    /*
     * Slots des champs de type wysiwyg
     */
    wysiwyg: Record<string, Component | undefined>;

    /*
     * Slots des champs de type color
     */
    color: Record<string, Component | undefined>;

    /*
     * Slots des champs de type checkbox
     */
    checkbox: Record<string, Component | undefined>;

    /*
     * Slots des champs de type date
     */
    date: Record<string, Component | undefined>;

    /*
     * Slots des champs de type datetime
     */
    datetime: Record<string, Component | undefined>;

    /*
     * Slots des champs de type select
     */
    select: Record<string, Component | undefined>;

    /*
     * Slots des champs de type hasMany
     */
    hasMany: Record<string, Component | undefined>;

    /*
     * Slots des champs de type belongsTo
     */
    belongsTo: Record<string, Component | undefined>;

    /*
     * Slots des champs de type attachmentBelongsTo
     */
    attachmentHasOne: Record<string, Component | undefined>;

    /*
     * Slots des champs de type attachmentHasMany
     */
    attachmentHasMany: Record<string, Component | undefined>;

    /*
     * Slots par nom de champ
     */
    byName: Record<string, Record<string, Component | undefined>>;
  };
  /*
   * Slots des sections
   */
  sections: {
    /*
     * Slots de toutes les sections
     */
    default: Component | undefined;

    /*
     * Slots par nom de section
     */
    byName: Record<string, Component | undefined>;
  };

  /*
   * Slots du formulaire
   */
  form: {
    /*
     * Slots du composant d'action
     */
    actions?: Component | undefined;

    /*
     * Slots du composant des erreurs orphelines
     */
    orphanErrors?: Component | undefined;
  };
};
```


## TForm
```typescript
export type TForm = {
  sections: TFormSection[];
  resourceName: string;
  resourceId?: TRecord["id"];
  formSettings: TFormSettings;
  events: Readonly<TFormEvent>;
  readonly?: boolean;
  cssClass?: string;
  bindings: TFormBindings['form'];
  slots: Readonly<Record<string, Component | undefined>>;
  context?: TContext;
};
```


## TFormSection
```typescript
export type TFormSection = {
  fields: TFormField[];
  name: Readonly<string>;
  index: number;
  label?: string;
  icon?: string;
  hidden: boolean;
  cssClass?: string;
  readonly?: boolean;
  bindings: TSectionBindings;
  mainComponent: Readonly<Component>;
  slots: Readonly<Record<string, Component | undefined>>;
  fieldsComponent: Readonly<Component>; // late init
  events: Readonly<TFormSectionEvent>;
};
```


## TFormField
```typescript
export type TFormField<T extends TFormFieldType = TFormFieldType> = {
  type: T;
  metadata: Readonly<TResourceFieldMetadata>;
  label: string;
  readonly?: boolean;
  rules?: TSubmit64Rule[];
  computedRules: ValidationRule[];
  cssClass?: string;
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
  mainComponent: Readonly<Component>;
  slots: Readonly<Record<string, Component | undefined>>;
  events: Readonly<TFormFieldEvent>;
  bindings: TFieldBindings<T>;
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
  getFieldByName: <T extends TFormFieldType = TFormFieldType>(fieldName: string) => TSubmit64FieldApi<T> | undefined;

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
   * Focus le premier champ disponible
   */
  tryFocusFirst: () => boolean;

  /*
   * Unfocus d'un champ si possible
   */
  tryUnfocus: () => boolean;

  /*
   * Accés au données du formulaire (pas réactif)
   */
  form: TForm;

  /*
   * Contient les refs readonly du formulaire
   */
  refs: {
    /*
     * Réference des erreurs sans champs
     */
    orphanErrors: Readonly<Ref<Record<string, readonly string[]>>>;

    /*
     * Réference du chargement lors de la soummission
     */
    isLoadingSubmit: Readonly<Ref<boolean>>;

    /*
     * Réference du chargement d'initialisation du formulaire
     */
    setupIsDone: Readonly<Ref<boolean>>;

    /*
     * Réference du formulaire si valide ou non
     */
    isFormValid: Readonly<Ref<boolean>>;
  };
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
   * Focus le premier champ disponible
   */
  tryFocusFirst: () => boolean;

  /*
   * Unfocus d'un champ si possible
   */
  tryUnfocus: () => boolean;

  /*
   * Accés au donnée de la section (pas réactif)
   */
  section: TFormSection;
};
```


## TSubmit64FieldApi
```typescript
export type TSubmit64FieldApi<T extends TFormFieldType = TFormFieldType> = {
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
   * Met à jour la classe css du champ
   */
  setCssClass: (cssClass: string) => void;

  /*
   * Met à jour le libelle du champ
   */
  setLabel: (label: string) => void;

  /*
   * Met à jour la valeur du champ
   */
  setValue: (value: unknown) => void;

  /*
   * Focus le champ
   */
  tryFocus: () => void;

  /*
   * Unfocus du champ
   */
  tryUnfocus: () => void;

  /*
   * Renvoi si le champ est focus
   */
  isFocus: () => boolean;

  /*
   * Met à jour les props (dans la limite des props autorisé par Submit64) du champ
   */
  setBindings: (
    bindings: TFieldBindings<T>,
  ) => void;

  /*
   * Accès au données du champ
   */
  field: TFormField<T>;

  /*
   * Contient les refs readonly du champ de saisie
   */
  refs: {

    /*
    * Réference de la valeur du champs
    */
    modelValue: Readonly<Ref<unknown>>;

    /*
     * Réference du focus
     */
    isFocused: Readonly<Ref<boolean>>;

    /*
     * Réference des erreurs en provenance de l'interop
     */
    backendErrors: DeepReadonly<Ref<string[]>>;
  }
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
  formSettings?: TFormSettings | undefined;
  formBindings?: DeepPartial<TFormBindings> | undefined;
  formSlots?: DeepPartial<TFormSlots> | undefined;
  associationDisplayRecord?: Record<string, Component> | undefined;
  eventManager?: (eventManager: DynamicLogicBuilder) => void;
  context?: TContext | undefined;
};
```


## TSubmit64FormSlotPropsSegment
```typescript
export type TSubmit64FormSlotPropsSegment = {
  formApi: TSubmit64FormApi;
};
```


## TSubmit64SectionSlotPropsSegment
```typescript
export type TSubmit64SectionSlotPropsSegment = {
  formApi: TSubmit64FormApi;
  sectionApi: TSubmit64SectionApi;
};
```


## TSubmit64FieldSlotPropsSegment
```typescript
export type TSubmit64FieldSlotPropsSegment<T extends TFormFieldType = TFormFieldType> = {
  formApi: TSubmit64FormApi;
  fieldApi: TSubmit64FieldApi<T>;
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
  associationName: string | null;
  associationClassname: string;
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
