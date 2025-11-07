import { InjectionKey, type Component, type ComponentPublicInstance } from "vue";
import type { TSubmit64Rule } from "./rules";
import { type QItemProps, ValidationRule } from "quasar";
import { FormFactory } from "./form-factory";
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
    resetable?: boolean;
    clearable?: boolean;
    css_class?: string;
    readonly?: boolean;
};
export type TResourceFormSectionMetadata = {
    fields: TResourceFieldMetadata[];
    label?: string;
    icon?: string;
    css_class?: string;
    readonly?: boolean;
};
export type TResourceFieldMetadata = {
    field_name: string;
    field_type: TFormFieldDef["type"];
    label: string;
    field_association_name?: string;
    field_association_class?: string;
    hint?: string;
    prefix?: string;
    suffix?: string;
    readonly?: boolean;
    rules?: TSubmit64Rule[];
    select_options?: {
        label: string;
        value: unknown;
        disabled?: boolean;
    }[];
    css_class?: string;
    default_display_value?: string;
};
export type TSubmit64AssociationData = {
    rows: TSubmit64AssociationRowEntry[];
    row_count: number;
};
export type TSubmit64AssociationRowEntry = {
    label: string;
    value: unknown;
    disabled?: boolean;
};
export type TSubmit64SubmitSubmitData = {
    success: boolean;
    errors: Record<string, string[]>;
    resource_id: TRecord["id"] | null;
    resource_data: TResourceData | null;
};
export type TFormSettings = {
    rulesBehaviour?: "lazy" | "ondemand";
    dateFormat?: string;
    datetimeFormat?: string;
    renderBackendHint?: boolean;
};
export type TFormStyle = {
    fieldFilled?: boolean;
    fieldOutlined?: boolean;
    fieldStandout?: boolean | string;
    fieldBorderless?: boolean;
    fieldRounded?: boolean;
    fieldSquare?: boolean;
    fieldDense?: boolean;
    fieldHideBottomSpace?: boolean;
    fieldColor?: string;
    fieldBgColor?: string;
    fieldClass?: string;
};
export type TFormDef = {
    sections: TFormSection[];
    resourceName: string;
    backendDateFormat: string;
    backendDatetimeFormat: string;
    resetable?: boolean;
    clearable?: boolean;
    readonly?: boolean;
    cssClass?: string;
    context?: TContext;
};
export type TFormSection = {
    fields: TFormFieldDef[];
    label?: string;
    icon?: string;
    cssClass?: string;
    readonly?: boolean;
};
export type TFormFieldDef = {
    type: "string" | "text" | "date" | "datetime" | "selectString" | "selectBelongsTo" | "selectHasMany" | "checkbox" | "number" | "object";
    metadata: TResourceFieldMetadata;
    provideUniqKey: InjectionKey<TSubmit64FormProvider>;
    label?: string;
    hint?: string;
    suffix?: string;
    prefix?: string;
    readonly?: boolean;
    rules?: TSubmit64Rule[];
    cssClass?: string;
    clearable?: boolean;
    defaultDisplayValue?: string | string[];
    selectOptions?: TSubmit64AssociationRowEntry[];
    component: Component;
    componentOptions: {
        associationDisplayComponent?: Component;
        regularFieldType?: "textarea";
    };
};
export type TSubmit64FieldWrapper = ComponentPublicInstance & {
    getValue: () => unknown;
    getValueDeserialized: () => unknown;
    reset: () => void;
    clear: () => void;
    validate: () => boolean;
    resetValidation: () => void;
    setupBackendErrors: (errors: string[]) => void;
};
export type TSubmit64FieldProps = {
    wrapper: TSubmit64FieldWrapperPropsSlot;
};
export type TSubmit64FieldWrapperPropsSlot = {
    modelValue: unknown;
    field: TFormFieldDef;
    injectForm: TSubmit64FormProvider;
    rules: ValidationRule[];
    modelValueOnUpdate: (value: unknown) => void;
    reset: () => void;
    clear: () => void;
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    registerBehaviourCallbacks: (registerValidationArg: () => boolean, registerResetValidationArg: () => void) => void;
};
export type TSubmit64FieldWrapperResetPropsSlot = {
    reset: () => void;
};
export type TSubmit64AssociationDisplayPropsSlot = {
    index: number;
    label: string;
    selected: boolean;
    focused: boolean;
    opt: TSubmit64AssociationRowEntry;
    itemProps: QItemProps;
};
export type TSubmit64FormProvider = {
    registerRef: (resourceDataKey: string, fieldRef: TSubmit64FieldWrapper) => void;
    getDataByFieldName: (fieldName: string) => void | unknown;
    getFieldDataByFieldName: (fieldName: string) => unknown;
    getFormFactoryInstance: () => Readonly<FormFactory>;
    getForm: () => TFormDef;
    getAssociationDataCallback(): (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
};
export type TSubmit64FormProps = {
    resourceName: string;
    getMetadataAndData: (submit64Params: TSubmit64GetMetadataAndData) => Promise<TResourceFormMetadataAndData>;
    getSubmitFormData: (submit64Params: TSubmit64GetSubmitData) => Promise<TSubmit64SubmitSubmitData>;
    getAssociationData?: (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
    resourceId?: TRecord["id"];
    formSettings?: TFormSettings;
    formStyle?: TFormStyle;
    sectionComponent?: Component;
    actionComponent?: Component;
    wrapperResetComponent?: Component;
    associationDisplayComponent?: Component;
    associationDisplayRecord?: Record<string, Component>;
    onSubmitFail?: () => void;
    onSubmitSuccess?: () => void;
    context?: TContext;
};
export type TSubmit64SectionFormProps = {
    section: TFormSection;
    context?: TContext;
};
export type TSubmit64ActionFormProps = {
    isLoadingSubmit: boolean;
    reset?: () => void;
    clear?: () => void;
    submit: () => Promise<void> | void;
};
export type TSubmit64GetMetadataAndData = {
    resourceName: string;
    resourceId?: TRecord["id"];
    context?: TContext;
};
export type TSubmit64GetAssociationData = {
    resourceName: string;
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
export type TSubmit64FormExpose = {
    getMode: () => TSubmit64FormMode;
    getFormFactoryInstance: () => Readonly<FormFactory>;
    getForm: () => TFormDef;
    validateForm: () => boolean;
    resetForm: () => void;
    clearForm: () => void;
    resetValidation: () => void;
    submitForm: () => Promise<void>;
};
export type TContext = Record<string, unknown>;
export type TSelectOptionPagination = {
    limit: number;
    offset: number;
};
export type TPropsWithClass = {
    class?: string;
};
export type TSubmit64ValidationRule = (val: unknown) => boolean | string;
export type TSubmit64FormMode = 'edit' | 'create';
export {};
