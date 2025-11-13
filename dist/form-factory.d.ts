import type { Component } from "vue";
import type { TFormDef, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TContext } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    resourceName: string;
    formSettings: Required<TFormSettings>;
    formStyle: Required<TFormStyle>;
    actionComponent: Component;
    orphanErrorsComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    associationDisplayRecord: Record<string, Component>;
    constructor(resourceName: string, formSettings?: Partial<TFormSettings>, formStyle?: Partial<TFormStyle>, actionComponent?: Component, orphanErrorsComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component, associationDisplayComponent?: Component, associationDisplayRecord?: Record<string, Component>);
    getForm(formMetadataAndData: TResourceFormMetadataAndData, resourceId?: TFormDef["resourceId"], context?: TContext): TFormDef;
    private getRegularFieldTypeByFieldType;
}
