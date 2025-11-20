import { type Component } from "vue";
import type { TFormDef, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TContext, TSubmit64OverridedComponents, TFormSettingsProps, TSubmit64FullFormApi } from "./models";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
export declare class FormFactory {
    resourceName: string;
    resourceId: TFormDef["resourceId"];
    formMetadataAndData: TResourceFormMetadataAndData;
    context?: TContext;
    formSettings: Required<TFormSettings>;
    formStyle: Required<TFormStyle>;
    actionComponent: Component;
    orphanErrorsComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    dynamicComponentRecord: Record<string, Component>;
    fullFormApi: TSubmit64FullFormApi;
    registerEventCallback: (builder: DynamicLogicBuilder) => void;
    private constructor();
    static getForm(resourceName: string, resourceId: TFormDef["resourceId"], overridedComponent: TSubmit64OverridedComponents, formMetadataAndData: TResourceFormMetadataAndData, formSettings: Partial<TFormSettingsProps> | undefined, formStyle: Partial<TFormStyle> | undefined, context: TContext | undefined, fullFormApi: TSubmit64FullFormApi, eventManager: ((builder: DynamicLogicBuilder) => void) | undefined): TFormDef;
    private generateFormDef;
    private static getRegularFieldTypeByFieldType;
    private static getFieldComponentByFormFieldType;
}
