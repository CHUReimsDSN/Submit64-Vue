import type { Component } from "vue";
import type { TFormDef, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TContext, TSubmit64OverridedComponents } from "./models";
export declare class FormFactory {
    resourceName: string;
    formSettings: Required<TFormSettings>;
    formStyle: Required<TFormStyle>;
    actionComponent: Component;
    orphanErrorsComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    associationDisplayRecord: Record<string, Component>;
    constructor(resourceName: string, overridedComponent: TSubmit64OverridedComponents, formSettings?: Partial<TFormSettings>, formStyle?: Partial<TFormStyle>);
    getForm(formMetadataAndData: TResourceFormMetadataAndData, resourceId?: TFormDef["resourceId"], context?: TContext): TFormDef;
    private getRegularFieldTypeByFieldType;
    private static getFieldComponentByFormFieldType;
}
