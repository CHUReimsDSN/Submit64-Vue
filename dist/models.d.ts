import { InjectionKey, type Component, type ComponentPublicInstance } from "vue";
import { TSubmit64Rule } from "./rules";
import { ValidationRule } from "quasar";
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
    has_global_custom_validation?: boolean;
    resetable?: boolean;
    clearable?: boolean;
    css_class?: string;
};
export type TResourceFormSectionMetadata = {
    fields: TResourceFieldMetadata[];
    label?: string;
    icon?: string;
    css_class?: string;
};
export type TResourceFieldMetadata = {
    field_name: string;
    field_type: TFormFieldDef["type"];
    label: string;
    field_association_name?: string;
    field_association_class?: string;
    hint?: string;
    rules?: TSubmit64Rule[];
    select_options?: {
        label: string;
        value: unknown;
        disabled?: boolean;
    }[];
    css_class?: string;
    readonly?: boolean;
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
    resource_id: TRecord['id'] | null;
    resource_data: TResourceData | null;
};
export type TFormSettings = {
    rulesBehaviour: "lazy" | "ondemand";
    dateFormat: string;
    datetimeFormat: string;
    renderBackendHint: boolean;
};
export type TFormStyleConfig = {
    fieldFilled: boolean;
    fieldOutlined: boolean;
    fieldStandout: boolean;
    fieldBorderless: boolean;
    fieldRounded: boolean;
    fieldSquare: boolean;
    fieldDense: boolean;
    fieldHideBottomSpace: boolean;
    fieldColor: string;
    fieldBgColor: string;
    fieldClass: string;
};
export type TFormDef = {
    sections: TFormSection[];
    resourceName: string;
    hasGlobalCustomValidation: boolean;
    backendDateFormat: string;
    backendDatetimeFormat: string;
    resetable?: boolean;
    clearable?: boolean;
    cssClass?: string;
    context?: TContext;
};
export type TFormSection = {
    fields: TFormFieldDef[];
    label?: string;
    icon?: string;
    cssClass?: string;
};
export type TFormFieldDef = {
    type: "string" | "text" | "date" | "datetime" | "selectString" | "selectBelongsTo" | "selectHasMany" | "checkbox" | "number" | "object";
    metadata: TResourceFieldMetadata;
    provideUniqKey: InjectionKey<TSubmit64FormProvider>;
    label?: string;
    hint?: string;
    rules?: TSubmit64Rule[];
    cssClass?: string;
    clearable?: boolean;
    readonly?: boolean;
    defaultDisplayValue?: string;
    selectOptions?: TSubmit64AssociationRowEntry[];
    component: Component;
    componentOptions: {
        associationDisplayComponent?: Component;
        regularFieldType?: 'textarea' | 'number';
    };
};
export type TSubmit64Field = ComponentPublicInstance & {
    getValue: () => unknown;
    reset: () => void;
    clear: () => void;
    validate: () => boolean | string;
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
    validate: () => boolean | string;
    getValue: () => unknown | undefined;
};
export type TSubmit64FieldWrapperResetPropsSlot = {
    reset: () => void;
};
export type TSubmit64FormProvider = {
    registerRef: (resourceDataKey: string, fieldRef: TSubmit64Field) => void;
    getDefaultDataByFieldName: (fieldName: string) => void | unknown;
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
    onSubmitFail?: () => void;
    onSubmitSuccess?: () => void;
    context?: TContext;
};
export type TSubmit64SectionFormProps = {
    section: TFormSection;
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
export type TSubmit64Expose = {};
export type TContext = Record<string, unknown>;
export type TSelectOptionPagination = {
    limit: number;
    offset: number;
};
export type TPropsWithClass = {
    class?: string;
};
export {};
