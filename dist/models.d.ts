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
    hint?: string;
    rules?: TSubmit64Rule[];
    select_options?: {
        label: string;
        value: unknown;
        disabled?: boolean;
    }[];
    css_class?: string;
    resetable?: boolean;
    clearable?: boolean;
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
    hasGlobalCustomValidation: boolean;
    backendDateFormat: string;
    backendDatetimeFormat: string;
    resetable?: boolean;
    clearable?: boolean;
    cssClass?: string;
};
export type TFormSection = {
    fields: TFormFieldDef[];
    label?: string;
    icon?: string;
    cssClass?: string;
};
export type TFormFieldDef = {
    type: "string" | "text" | "date" | "selectString" | "selectBelongsTo" | "selectHasMany" | "checkbox" | "number" | "object";
    metadata: TResourceFieldMetadata;
    provideUniqKey: InjectionKey<TSubmit64FormProvider>;
    label?: string;
    hint?: string;
    rules?: TSubmit64Rule[];
    cssClass?: string;
    resetable?: boolean;
    clearable?: boolean;
    selectOptions?: {
        label: string;
        value: unknown;
        disabled?: boolean;
    }[];
    component: Component;
};
export type TSubmit64Field = ComponentPublicInstance & {
    getValue: () => unknown;
    reset: () => void;
    clear: () => void;
};
export type TSubmit64FieldProps = {
    field: TFormFieldDef;
};
export type TSubmit64FieldWrapperPropsSlot = {
    modelValue: unknown;
    modelValueOnUpdate: (value: unknown) => void;
    field: TFormFieldDef;
    injectForm: TSubmit64FormProvider;
    reset: () => void;
    clear: () => void;
    getComputedRules: () => ValidationRule[];
};
export type TSubmit64FieldWrapperResetPropsSlot = {
    reset: () => void;
};
export type TSubmit64FormProvider = {
    registerRef: (resourceDataKey: string, fieldRef: TSubmit64Field) => void;
    getDefaultDataByFieldName: (fieldName: string) => void | unknown;
    getFieldDataByFieldName: (fieldName: string) => unknown;
    getFormFactoryInstance: () => FormFactory;
    getForm: () => TFormDef;
};
export type TSubmit64FormProps = {
    resourceName: string;
    resourceId: TRecord["id"];
    getMetadataAndData: (submit64Params: TSubmit64GetMetadataAndData) => Promise<TResourceFormMetadataAndData>;
    submitForm: (submit64Params: {
        formData: Record<string, unknown>;
    }) => Promise<TResourceData>;
    globalFormSettings?: TFormSettings;
    context?: Record<string, unknown>;
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
    resourceId: TRecord["id"];
    context?: Record<string, unknown>;
};
export type TSubmit64Expose = {};
export type TPropsWithClass = {
    class?: string;
};
export {};
