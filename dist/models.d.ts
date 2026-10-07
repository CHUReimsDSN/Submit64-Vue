import { type Ref, type Component, DeepReadonly } from "vue";
import type { TSubmit64Rule } from "./rules";
import type { DeepPartial, QBtnProps, QCheckboxProps, QColorProps, QDateProps, QEditorProps, QIconProps, QInputProps, QItemProps, QMenuProps, QSelectProps, QTimeProps, QUploaderProps, ValidationRule } from "quasar";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
type TRecord = {
    id: number | string;
} & unknown;
export type TResourceData = TRecord & Record<string, unknown>;
/**
 * @exportToDoc
 */
export type TResourceFormMetadataAndData = {
    form: TResourceFormMetadata;
    resource_data: TResourceData;
};
/**
 * @exportToDoc
 */
export type TResourceFormMetadata = {
    sections: TResourceFormSectionMetadata[];
    resource_name: string;
    backend_date_format: string;
    backend_datetime_format: string;
    css_class: string | null;
    readonly: boolean | null;
};
/**
 * @exportToDoc
 */
export type TResourceFormSectionMetadata = {
    fields: TResourceFieldMetadata[];
    label: string | null;
    name: string | null;
    icon: string | null;
    css_class: string | null;
    readonly: boolean | null;
};
/**
 * @exportToDoc
 */
export type TResourceFieldMetadata = {
    field_name: string;
    field_type: Readonly<"string" | "text" | "date" | "datetime" | "select" | "selectBelongsTo" | "selectHasMany" | "selectHasOne" | "selectHasAndBelongsToMany" | "checkbox" | "number" | "object" | "attachmentHasOne" | "attachmentHasMany">;
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
/**
 * @exportToDoc
 */
export type TSubmit64AssociationData = {
    rows: TSubmit64AssociationRowEntry[];
    row_count: number;
};
/**
 * @exportToDoc
 */
export type TSubmit64AssociationRowEntry = {
    label: string;
    value: TRecord["id"];
    data: TRecord;
};
/**
 * @exportToDoc
 */
export type TSubmit64SubmitData = {
    success: boolean;
    errors: Record<string, string[]>;
    resource_id: TRecord["id"] | null;
    resource_data: TResourceData | null;
    form: TResourceFormMetadata | null;
};
/**
 * @exportToDoc
 */
export type TFormSettings = {
    backendDateFormat: string;
    backendDatetimeFormat: string;
    dateFormat: string;
    datetimeFormat: string;
    renderBackendHint?: boolean | undefined;
    associationEmptyMessage?: string | undefined;
    requiredFieldsHasAsterisk?: boolean | undefined;
    showResetButton?: boolean | undefined;
    showClearButton?: boolean | undefined;
    autofocus?: boolean | undefined;
    displayLabelInsideInput?: boolean | undefined;
};
/**
 * @exportToDoc
 */
export type TFormBindings = {
    fields: {
        string: TStringBindings;
        number: TNumberBindings;
        wysiwyg: TWysiwygBindings;
        color: TColorBindings;
        checkbox: TCheckboxBindings;
        date: TDateBindings;
        datetime: TDatetimeBindings;
        select: TSelectBindings;
        hasMany: THasManyBindings;
        belongsTo: TBelongsToBindings;
        attachmentHasOne: TAttachmentHasOneBindings;
        attachmentHasMany: TAttachmentHasManyBindings;
        byName: Record<string, TFieldBindings>;
    };
    sections: {
        default: TSectionBindings;
        byName: Record<string, TSectionBindings>;
    };
    form: {
        actions: TActionBindings;
    };
};
/**
 * @exportToDoc
 */
export type TFormSlots = {
    fields: {
        string: Record<string, Component | undefined>;
        number: Record<string, Component | undefined>;
        wysiwyg: Record<string, Component | undefined>;
        color: Record<string, Component | undefined>;
        checkbox: Record<string, Component | undefined>;
        date: Record<string, Component | undefined>;
        datetime: Record<string, Component | undefined>;
        select: Record<string, Component | undefined>;
        hasMany: Record<string, Component | undefined>;
        belongsTo: Record<string, Component | undefined>;
        attachmentHasOne: Record<string, Component | undefined>;
        attachmentHasMany: Record<string, Component | undefined>;
        byName: Record<string, Record<string, Component | undefined>>;
    };
    sections: {
        default: Component | undefined;
        byName: Record<string, Component | undefined>;
    };
    form: {
        actions?: Component | undefined;
        orphanErrors?: Component | undefined;
    };
};
/**
 * @exportToDoc
 */
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
/**
 * @exportToDoc
 */
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
    fieldsComponent: Readonly<Component>;
    events: Readonly<TFormSectionEvent>;
};
/**
 * @exportToDoc
 */
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
export type TFormFieldType = Readonly<"string" | "number" | "color" | "wysiwyg" | "checkbox" | "date" | "datetime" | "select" | "belongsTo" | "hasMany" | "attachmentHasOne" | "attachmentHasMany">;
/**
 * @exportToDoc
 */
export type TSubmit64FormApi = {
    getMode: () => TSubmit64FormMode;
    validate: () => boolean;
    reset: () => void;
    softReset: () => void;
    clear: () => void;
    resetValidation: () => void;
    submit: () => Promise<void>;
    getSubmitData: () => TSubmit64SubmitData["resource_data"];
    valuesHasChanged: () => boolean;
    isValid: () => boolean;
    isInvalid: () => boolean;
    isReady: () => boolean;
    getSectionByName: (sectionName: string) => TSubmit64SectionApi | undefined;
    getSectionByIndex: (sectionIndex: number) => TSubmit64SectionApi | undefined;
    getSections: () => Map<string, TSubmit64SectionApi>;
    getFieldByName: <T extends TFormFieldType = TFormFieldType>(fieldName: string) => TSubmit64FieldApi<T> | undefined;
    getFields: () => Map<string, TSubmit64FieldApi>;
    getInitialValueByFieldName: (fieldName: string) => unknown;
    getAssociationDataCallback: () => (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
    setContext: (context: TContext) => void;
    setCssClass: (cssClass: string) => void;
    setReadonlyState: (state: boolean) => void;
    tryFocusFirst: () => boolean;
    tryUnfocus: () => boolean;
    form: TForm;
    refs: {
        orphanErrors: Readonly<Ref<Record<string, readonly string[]>>>;
        isLoadingSubmit: Readonly<Ref<boolean>>;
        setupIsDone: Readonly<Ref<boolean>>;
        isFormValid: Readonly<Ref<boolean>>;
    };
};
export type TSubmit64FormPrivateApi = {
    getFormRef: () => Ref<TForm>;
    getSectionRef: (sectionName: string) => TFormSection | undefined;
    getFieldRef: (fieldName: string) => TFormField | undefined;
    registerSectionWrapperRef: (sectionName: string, sectionComponent: TSubmit64SectionApi) => void;
    registerFieldWrapperRef: (fieldName: string, fieldComponent: TSubmit64FieldApi) => void;
    setSectionFieldComponent: (section: TFormSection, component: Component) => void;
};
/**
 * @exportToDoc
 */
export type TSubmit64SectionApi = {
    reset: () => void;
    softReset: () => void;
    clear: () => void;
    validate: () => boolean;
    isValid: () => boolean;
    isInvalid: () => boolean;
    hide: () => void;
    unhide: () => void;
    resetValidation: () => void;
    getFields: () => Map<string, TSubmit64FieldApi>;
    setReadonlyState: (state: boolean) => void;
    setCssClass: (cssClass: string) => void;
    setIcon: (icon: string) => void;
    setLabel: (label: string) => void;
    tryFocusFirst: () => boolean;
    tryUnfocus: () => boolean;
    section: TFormSection;
};
/**
 * @exportToDoc
 */
export type TSubmit64FieldApi<T extends TFormFieldType = TFormFieldType> = {
    reset: () => void;
    softReset: () => void;
    clear: () => void;
    validate: () => boolean;
    isValid: () => boolean;
    isInvalid: () => boolean;
    hide: () => void;
    unhide: () => void;
    resetValidation: () => void;
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    setupBackendErrors: (errors: string[]) => void;
    setReadonlyState: (state: boolean) => void;
    setCssClass: (cssClass: string) => void;
    setLabel: (label: string) => void;
    setValue: (value: unknown) => void;
    tryFocus: () => void;
    tryUnfocus: () => void;
    isFocus: () => boolean;
    setBindings: (bindings: TFieldBindings<T>) => void;
    field: TFormField<T>;
    refs: {
        modelValue: Readonly<Ref<unknown>>;
        isFocused: Readonly<Ref<boolean>>;
        backendErrors: DeepReadonly<Ref<string[]>>;
    };
};
/**
 * @exportToDoc
 */
export type TSubmit64FormProps = {
    resourceName: string;
    getMetadataAndData: (submit64Params: TSubmit64GetMetadataAndData) => Promise<TResourceFormMetadataAndData>;
    getSubmitFormData: (submit64Params: TSubmit64GetSubmitData) => Promise<TSubmit64SubmitData>;
    getAssociationData?: (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
    resourceId?: TRecord["id"] | undefined;
    formSettings?: TFormSettings | undefined;
    formBindings?: DeepPartial<TFormBindings> | undefined;
    formSlots?: DeepPartial<TFormSlots> | undefined;
    associationDisplayRecord?: Record<string, Component> | undefined;
    eventManager?: (eventManager: DynamicLogicBuilder) => void;
    context?: TContext | undefined;
};
export type TSubmit64SectionWrapperProps = {
    section: TFormSection;
    formApi: TSubmit64FormApi;
    privateFormApi: TSubmit64FormPrivateApi;
};
export type TSubmit64FieldWrapperProps = {
    field: TFormField;
    formApi: TSubmit64FormApi;
    privateFormApi: TSubmit64FormPrivateApi;
};
export type TSubmit64FieldProps<T extends TFormFieldType = TFormFieldType> = {
    modelValue: unknown;
    fieldApi: TSubmit64FieldApi<T>;
    formApi: TSubmit64FormApi;
    modelValueOnUpdate: (value: unknown) => void;
    reset: () => void;
    clear: () => void;
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    registerBehaviourCallbacks: (registerValidationArg: () => boolean, registerIsValidArg: () => boolean, registerResetValidationArg: () => void, registerOnResetArg?: () => void, registerOnClearArg?: () => void, registerOnFocusArg?: () => void, registerOnUnfocusArg?: () => void) => void;
};
/**
 * @exportToDoc
 */
export type TSubmit64FormSlotPropsSegment = {
    formApi: TSubmit64FormApi;
};
/**
 * @exportToDoc
 */
export type TSubmit64SectionSlotPropsSegment = {
    formApi: TSubmit64FormApi;
    sectionApi: TSubmit64SectionApi;
};
/**
 * @exportToDoc
 */
export type TSubmit64FieldSlotPropsSegment<T extends TFormFieldType = TFormFieldType> = {
    formApi: TSubmit64FormApi;
    fieldApi: TSubmit64FieldApi<T>;
};
/**
 * @exportToDoc
 */
export type TSubmit64GetMetadataAndData = {
    resourceName: string;
    resourceId?: TRecord["id"];
    context?: TContext;
};
/**
 * @exportToDoc
 */
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
/**
 * @exportToDoc
 */
export type TSubmit64GetSubmitData = {
    resourceName: string;
    resourceData: Record<string, unknown>;
    resourceId?: TRecord["id"];
    context?: TContext;
};
export type TContext = Record<string, unknown>;
export type TSelectOptionPagination = {
    limit: number;
    nextPage: number;
    lastPage: number;
    isLoading: boolean;
};
export type TSubmit64ValidationRule = (val: unknown) => boolean | string;
export type TSubmit64FormMode = "edit" | "create";
export type TSubmit64StaticSelectOptions = {
    label: string;
    value: unknown;
    disabled?: boolean;
};
export type TSubmit64FileDataValue = {
    add: TSubmit64FilePending[];
    delete: Required<TFormField>["attachmentData"][number]["attachment_id"][];
};
export type TSubmit64FilePending = {
    key: string;
    size: number;
    filename: string;
    contentType: string;
    base64: string;
};
export type TFormEvent = {
    onReady?: TSubmit64Event;
    onSubmit?: TSubmit64Event;
    onSubmitSuccess?: TSubmit64Event;
    onSubmitUnsuccess?: TSubmit64Event;
    onUpdate?: TSubmit64Event;
    onClear?: TSubmit64Event;
    onReset?: TSubmit64Event;
    onIsValid?: TSubmit64Event;
    onIsInvalid?: TSubmit64Event;
    onValidated?: TSubmit64Event;
};
export type TFormSectionEvent = {
    onReady?: TSubmit64Event;
    onReset?: TSubmit64Event;
    onClear?: TSubmit64Event;
    onValidated?: TSubmit64Event;
    onHide?: TSubmit64Event;
    onUnhide?: TSubmit64Event;
    onUpdate?: TSubmit64Event;
    onIsValid?: TSubmit64Event;
    onIsInvalid?: TSubmit64Event;
};
export type TFormFieldEvent = {
    onReady?: TSubmit64Event;
    onUpdate?: TSubmit64Event;
    onIsValid?: TSubmit64Event;
    onIsInvalid?: TSubmit64Event;
    onValidated?: TSubmit64Event;
    onClear?: TSubmit64Event;
    onReset?: TSubmit64Event;
    onHide?: TSubmit64Event;
    onUnhide?: TSubmit64Event;
    onConfirmStatement?: TSubmit64Event;
};
export type TSubmit64Event = (() => unknown)[];
/**
 * @exportToDoc
 */
export type TSubmit64EventWhen = {
    "Field is updated": {
        fieldName: string;
    };
    "Field is valid": {
        fieldName: string;
    };
    "Field is invalid": {
        fieldName: string;
    };
    "Field is validated": {
        fieldName: string;
    };
    "Field is cleared": {
        fieldName: string;
    };
    "Field is reseted": {
        fieldName: string;
    };
    "Field is hidden": {
        fieldName: string;
    };
    "Field is unhidden": {
        fieldName: string;
    };
    "Field is ready": {
        fieldName: string;
    };
    "Section is valid": {
        sectionName: string;
    };
    "Section is invalid": {
        sectionName: string;
    };
    "Section is updated": {
        sectionName: string;
    };
    "Section is validated": {
        sectionName: string;
    };
    "Section is hidden": {
        sectionName: string;
    };
    "Section is unhidden": {
        sectionName: string;
    };
    "Section is cleared": {
        sectionName: string;
    };
    "Section is reseted": {
        sectionName: string;
    };
    "Section is ready": {
        sectionName: string;
    };
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
type TQFieldKeysToOmit = "modelValue" | "readonly" | "label" | "rules" | "reactiveRules" | "type";
type TQSelectKeysToOmit = "options" | "optionDisable" | "optionLabel" | "optionValue" | "mapOptions" | "emitValue" | "useInput" | "newValueMode";
type TPropsWithClass = {
    class?: string | undefined;
};
export type TFieldBindings<T extends TFormFieldType = TFormFieldType> = TFieldBindingsMap[T];
export type TFieldBindingsMap = {
    string: TStringBindings;
    number: TNumberBindings;
    color: TColorBindings;
    wysiwyg: TWysiwygBindings;
    checkbox: TCheckboxBindings;
    date: TDateBindings;
    datetime: TDatetimeBindings;
    belongsTo: TBelongsToBindings;
    hasMany: THasManyBindings;
    select: TSelectBindings;
    attachmentHasOne: TAttachmentHasOneBindings;
    attachmentHasMany: TAttachmentHasManyBindings;
};
export type TStringBindings = Omit<QInputProps, TQFieldKeysToOmit>;
export type TNumberBindings = Omit<QInputProps, TQFieldKeysToOmit>;
export type TColorBindings = {
    input?: Omit<QInputProps, TQFieldKeysToOmit>;
    icon?: (QIconProps & TPropsWithClass) | undefined;
    popupProxy?: (Omit<QMenuProps, "modelValue"> & TPropsWithClass) | undefined;
    color?: (Omit<QColorProps, "modelValue"> & TPropsWithClass) | undefined;
};
export type TWysiwygBindings = Omit<QEditorProps, "modelValue" | "readonly" | "placeholder">;
export type TCheckboxBindings = Omit<QCheckboxProps, "modelValue">;
export type TDateBindings = {
    input?: Omit<QInputProps, TQFieldKeysToOmit>;
    icon?: (QIconProps & TPropsWithClass) | undefined;
    popupProxy?: (Omit<QMenuProps, "modelValue"> & TPropsWithClass) | undefined;
    date?: (Omit<QDateProps, "modelValue" | "mask"> & TPropsWithClass) | undefined;
    btn?: QBtnProps | undefined;
};
export type TDatetimeBindings = {
    input?: Omit<QInputProps, TQFieldKeysToOmit>;
    iconDate?: (QIconProps & TPropsWithClass) | undefined;
    popupProxyDate?: (Omit<QMenuProps, "modelValue"> & TPropsWithClass) | undefined;
    date?: (Omit<QDateProps, "modelValue" | "mask"> & TPropsWithClass) | undefined;
    btnDate?: QBtnProps | undefined;
    iconDatetime?: (QIconProps & TPropsWithClass) | undefined;
    popupProxyDatetime?: (Omit<QMenuProps, "modelValue"> & TPropsWithClass) | undefined;
    datetime?: (Omit<QTimeProps, "modelValue" | "mask"> & TPropsWithClass) | undefined;
    btnDatetime?: QBtnProps | undefined;
};
export type TBelongsToBindings = {
    select?: Omit<QSelectProps, TQFieldKeysToOmit | TQSelectKeysToOmit> | undefined;
    itemNoOption?: (QItemProps & TPropsWithClass) | undefined;
};
export type THasManyBindings = {
    select?: Omit<QSelectProps, TQFieldKeysToOmit | TQSelectKeysToOmit | "multiple" | "useChips"> | undefined;
    itemNoOption?: (QItemProps & TPropsWithClass) | undefined;
};
export type TSelectBindings = {
    select?: Omit<QSelectProps, TQFieldKeysToOmit | TQSelectKeysToOmit> | undefined;
    itemNoOption?: (QItemProps & TPropsWithClass) | undefined;
};
export type TAttachmentHasOneBindings = {
    uploader?: Omit<QUploaderProps, "multiple" | "hideUploadBtn"> | undefined;
};
export type TAttachmentHasManyBindings = {
    uploader?: Omit<QUploaderProps, "multiple" | "hideUploadBtn"> | undefined;
};
export type TSectionBindings = {
    icon?: QIconProps | undefined;
};
export type TActionBindings = {
    submitBtn?: Omit<QBtnProps, "loading" | "disabled"> | undefined;
    resetBtn?: Omit<QBtnProps, "loading" | "disabled"> | undefined;
    clearBtn?: Omit<QBtnProps, "loading" | "disabled"> | undefined;
};
export {};
