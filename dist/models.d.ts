import { Ref, type Component } from "vue";
import type { TSubmit64Rule } from "./rules";
import { type QItemProps, ValidationRule } from "quasar";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
type TRecord = {
    id: number | string;
} & unknown;
export type TResourceData = TRecord & Record<string, unknown>;
export type TResourceFormMetadataAndData = {
    form: TResourceFormMetadata;
    resource_data: TResourceData;
};
export type TResourceFormMetadata = {
    sections: TResourceFormSectionMetadata[];
    resource_name: string;
    backend_date_format: string;
    backend_datetime_format: string;
    resetable?: boolean | null;
    clearable: boolean | null;
    css_class: string | null;
    readonly: boolean | null;
};
export type TResourceFormSectionMetadata = {
    fields: TResourceFieldMetadata[];
    label: string | null;
    name: string | null;
    icon: string | null;
    css_class: string | null;
    readonly: boolean | null;
};
export type TResourceFieldMetadata = {
    field_name: string;
    field_type: TFormField["type"];
    field_extra_type?: TFormField['extraType'];
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
    field_association_data?: {
        label: string[];
        data: TRecord[];
    };
};
export type TSubmit64AssociationData = {
    rows: TSubmit64AssociationRowEntry[];
    row_count: number;
};
export type TSubmit64AssociationRowEntry = {
    label: string;
    value: TRecord['id'];
    data: TRecord;
};
export type TSubmit64SubmitSubmitData = {
    success: boolean;
    errors: Record<string, string[]>;
    resource_id: TRecord["id"] | null;
    resource_data: TResourceData | null;
    form: TResourceFormMetadata | null;
};
export type TFormSettings = {
    backendDateFormat: string;
    backendDatetimeFormat: string;
    rulesBehaviour?: "lazy" | "ondemand" | undefined;
    dateFormat?: string | undefined;
    datetimeFormat?: string | undefined;
    renderBackendHint?: boolean | undefined;
    associationEmptyMessage?: string | undefined;
    requiredFieldsHasAsterisk?: boolean | undefined;
};
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
export type TForm = {
    sections: TFormSection[];
    resourceName: string;
    resourceId?: TRecord["id"];
    formSettings: Required<TFormSettings>;
    formStyle: Required<TFormStyle>;
    events: Readonly<TFormEvent>;
    resetable?: boolean;
    clearable?: boolean;
    readonly?: boolean;
    cssClass?: string;
    actionComponent: Readonly<Component>;
    orphanErrorsComponent: Readonly<Component>;
    wrapperResetComponent: Readonly<Component>;
    dynamicComponentRecord: Readonly<Record<string, Component>>;
    context?: TContext;
};
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
    afterComponent?: Readonly<Component> | undefined;
    events: Readonly<TFormSectionEvent>;
};
export type TFormField = {
    type: Readonly<"string" | "text" | "date" | "datetime" | "selectString" | "selectBelongsTo" | "selectHasMany" | "selectHasOne" | 'selectHasAndBelongsToMany' | "checkbox" | "number" | "object">;
    extraType?: Readonly<'color'> | undefined;
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
        label: string[];
        data: TRecord[];
    };
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
export type TSubmit64FormApi = {
    getMode: () => TSubmit64FormMode;
    getSectionByName: (sectionName: string) => TSubmit64SectionApi | undefined;
    getSectionByIndex: (sectionIndex: number) => TSubmit64SectionApi | undefined;
    getSections: () => Map<string, TSubmit64SectionApi>;
    getFieldByName: (fieldName: string) => TSubmit64FieldApi | undefined;
    getFields: () => Map<string, TSubmit64FieldApi>;
    validate: () => boolean;
    isValid: () => boolean;
    isInvalid: () => boolean;
    reset: () => void;
    clear: () => void;
    resetValidation: () => void;
    submit: () => Promise<void>;
    valuesHasChanged: () => boolean;
    getInitialValueByFieldName: (fieldName: string) => unknown;
    getAssociationDataCallback: () => (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
    setContext: (context: TContext) => void;
    setCssClass: (cssClass: string) => void;
    setReadonlyState: (state: boolean) => void;
    isReady: () => boolean;
    form: TForm;
};
export type TSubmit64FormPrivateApi = {
    getFormRef: () => Ref<TForm>;
    getSectionRef: (sectionName: string) => TFormSection | undefined;
    getFieldRef: (fieldName: string) => TFormField | undefined;
    registerSectionWrapperRef: (sectionName: string, sectionComponent: TSubmit64SectionApi) => void;
    registerFieldWrapperRef: (fieldName: string, fieldComponent: TSubmit64FieldApi) => void;
};
export type TSubmit64SectionApi = {
    reset: () => void;
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
    section: TFormSection;
};
export type TSubmit64FieldApi = {
    reset: () => void;
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
    setHint: (hint: string) => void;
    setCssClass: (cssClass: string) => void;
    setSuffix: (suffix: string) => void;
    setPrefix: (prefix: string) => void;
    setLabel: (label: string) => void;
    setValue: (value: unknown) => void;
    field: TFormField;
};
export type TSubmit64FormProps = {
    resourceName: string;
    getMetadataAndData: (submit64Params: TSubmit64GetMetadataAndData) => Promise<TResourceFormMetadataAndData>;
    getSubmitFormData: (submit64Params: TSubmit64GetSubmitData) => Promise<TSubmit64SubmitSubmitData>;
    getAssociationData?: ((submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>) | undefined;
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
export type TFormSettingsProps = Omit<TFormSettings, 'backendDateFormat' | 'backendDatetimeFormat'>;
export type TSubmit64SectionWrapperProps = {
    section: TFormSection;
    formApi: TSubmit64FormApi;
    privateFormApi: TSubmit64FormPrivateApi;
};
export type TSubmit64SectionProps = {
    formApi: TSubmit64FormApi;
    sectionApi: TSubmit64SectionApi;
};
export type TSubmit64FieldWrapperProps = {
    field: TFormField;
    formApi: TSubmit64FormApi;
    privateFormApi: TSubmit64FormPrivateApi;
};
export type TSubmit64FieldProps = {
    modelValue: unknown;
    field: TFormField;
    formApi: TSubmit64FormApi;
    rules: ValidationRule[];
    modelValueOnUpdate: (value: unknown) => void;
    reset: () => void;
    clear: () => void;
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    registerBehaviourCallbacks: (registerValidationArg: () => boolean, registerIsValidArg: () => boolean, registerResetValidationArg: () => void, registerOnResetArg?: () => void) => void;
};
export type TSubmit64FieldWrapperResetProps = {
    reset: () => void;
};
export type TSubmit64AssociationDisplayProps = {
    associationName: string;
    entry: TSubmit64AssociationRowEntry;
    itemProps: QItemProps;
};
export type TSubmit64OrphanErrorFormProps = {
    orphanErrors: Record<string, string[]>;
    formApi: TSubmit64FormApi;
};
export type TSubmit64ActionFormProps = {
    isLoadingSubmit: boolean;
    formApi: TSubmit64FormApi;
};
export type TSubmit64BeforeAfterSectionProps = {
    formApi: TSubmit64FormApi;
    sectionApi: TSubmit64SectionApi;
};
export type TSubmit64BeforeAfterFieldProps = {
    formApi: TSubmit64FormApi;
    fieldApi: TSubmit64FieldApi;
};
export type TSubmit64GetMetadataAndData = {
    resourceName: string;
    resourceId?: TRecord["id"];
    context?: TContext;
};
export type TSubmit64GetAssociationData = {
    resourceName: string;
    resourceId?: TRecord["id"];
    associationName: string;
    limit: number;
    offset: number;
    labelFilter?: string;
    context?: TContext;
};
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
export type TPropsWithClass = {
    class?: string | undefined;
};
export type TSubmit64ValidationRule = (val: unknown) => boolean | string;
export type TSubmit64FormMode = "edit" | "create";
export type TSubmit64StaticSelectOptions = {
    label: string;
    value: unknown;
    disabled?: boolean;
};
export type TSubmit64OverridedComponents = Partial<{
    actionComponent: Component;
    orphanErrorsComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    dynamicComponentRecord: Record<string, Component>;
}>;
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
export {};
