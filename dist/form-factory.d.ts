import { type Component } from "vue";
import type { TForm, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TContext, TSubmit64OverridedComponents, TFormSettingsProps, TSubmit64FormApi } from "./models";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
export declare class FormFactory {
    resourceName: string;
    resourceId: TForm["resourceId"];
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
    formApi: TSubmit64FormApi;
    registerEventCallback: (builder: DynamicLogicBuilder) => void;
    private constructor();
    static getEmptyFormBeforeInit(): TForm;
    static getForm(resourceName: string, resourceId: TForm["resourceId"], overridedComponent: TSubmit64OverridedComponents, formMetadataAndData: TResourceFormMetadataAndData, formSettings: Partial<TFormSettingsProps> | undefined, formStyle: Partial<TFormStyle> | undefined, context: TContext | undefined, formApi: TSubmit64FormApi, eventManager: ((builder: DynamicLogicBuilder) => void) | undefined): TForm;
    private generateFormDef;
    private static getRegularFieldTypeByFieldType;
    private static getFieldComponentByFormFieldType;
}
