import { type Component, type ComponentPublicInstance } from "vue";
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
    static_select_options?: TSubmit64StaticSelectOptions[];
    css_class?: string;
    field_association_data?: {
        label?: string | string[];
        data?: TRecord | TRecord[];
    };
};
export type TSubmit64AssociationData = {
    rows: TSubmit64AssociationRowEntry[];
    row_count: number;
};
export type TSubmit64AssociationRowEntry = {
    label: string;
    value: unknown;
    data: TRecord;
};
export type TSubmit64SubmitSubmitData = {
    success: boolean;
    errors: Record<string, string[]>;
    resource_id: TRecord["id"] | null;
    resource_data: TResourceData | null;
};
export type TFormSettings = {
    rulesBehaviour?: "lazy" | "ondemand" | undefined;
    dateFormat?: string | undefined;
    datetimeFormat?: string | undefined;
    renderBackendHint?: boolean | undefined;
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
export type TFormDef = {
    sections: TFormSection[];
    resourceName: string;
    resourceId?: TRecord["id"];
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
    label?: string;
    hint?: string;
    suffix?: string;
    prefix?: string;
    readonly?: boolean;
    rules?: TSubmit64Rule[];
    cssClass?: string;
    clearable?: boolean;
    associationData?: {
        label?: string | string[];
        data?: TRecord | TRecord[];
    };
    staticSelectOptions?: TSubmit64StaticSelectOptions[];
    component: Component;
    componentOptions: {
        associationDisplayComponent?: Component;
        regularFieldType?: "textarea";
    };
};
export type TSubmit64FieldWrapper = ComponentPublicInstance & {
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    reset: () => void;
    clear: () => void;
    validate: () => boolean;
    resetValidation: () => void;
    setupBackendErrors: (errors: string[]) => void;
};
export type TSubmit64FormProps = {
    resourceName: string;
    getMetadataAndData: (submit64Params: TSubmit64GetMetadataAndData) => Promise<TResourceFormMetadataAndData>;
    getSubmitFormData: (submit64Params: TSubmit64GetSubmitData) => Promise<TSubmit64SubmitSubmitData>;
    getAssociationData?: ((submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>) | undefined;
    resourceId?: TRecord["id"] | undefined;
    formSettings?: TFormSettings | undefined;
    formStyle?: TFormStyle | undefined;
    sectionComponent?: Component | undefined;
    actionComponent?: Component | undefined;
    wrapperResetComponent?: Component | undefined;
    associationDisplayComponent?: Component | undefined;
    associationDisplayRecord?: Record<string, Component> | undefined;
    onSubmitFail?: (() => void) | undefined;
    onSubmitSuccess?: (() => void) | undefined;
    context?: TContext | undefined;
};
export type TSubmit64SectionFormProps = {
    section: TFormSection;
    functionsProvider: TSubmit64FunctionsProvider;
    context?: TContext | undefined;
};
export type TSubmit64FieldWrapperProps = {
    field: TFormFieldDef;
    functionsProvider: TSubmit64FunctionsProvider;
    context?: TContext | undefined;
};
export type TSubmit64FieldProps = {
    modelValue: unknown;
    field: TFormFieldDef;
    functionsProvider: TSubmit64FunctionsProvider;
    rules: ValidationRule[];
    modelValueOnUpdate: (value: unknown) => void;
    reset: () => void;
    clear: () => void;
    getValueSerialized: () => unknown;
    getValueDeserialized: () => unknown;
    registerBehaviourCallbacks: (registerValidationArg: () => boolean, registerResetValidationArg: () => void) => void;
};
export type TSubmit64FieldWrapperResetProps = {
    reset: () => void;
};
export type TSubmit64AssociationDisplayProps = {
    associationName: string;
    entry: TSubmit64AssociationRowEntry;
    itemProps: QItemProps;
};
export type TSubmit64ActionFormProps = {
    isLoadingSubmit: boolean;
    formDef: TFormDef;
    functionsProvider: TSubmit64FunctionsProvider;
    submit: () => Promise<void> | void;
    reset?: (() => void) | undefined;
    clear?: (() => void) | undefined;
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
    class?: string | undefined;
};
export type TSubmit64ValidationRule = (val: unknown) => boolean | string;
export type TSubmit64FormMode = "edit" | "create";
export type TSubmit64FunctionsProvider = {
    registerRef: (resourceDataKey: string, fieldRef: TSubmit64FieldWrapper) => void;
    getDataByFieldName: (fieldName: string) => void | unknown;
    getFieldDataByFieldName: (fieldName: string) => unknown;
    getFormFactoryInstance: () => Readonly<FormFactory>;
    getForm: () => TFormDef;
    getAssociationDataCallback(): (submit64Params: TSubmit64GetAssociationData) => Promise<TSubmit64AssociationData>;
};
export type TSubmit64StaticSelectOptions = {
    label: string;
    value: unknown;
    disabled?: boolean;
};
export {};
