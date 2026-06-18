import { type Component } from "vue";
import type { TForm, TFormBindings, TFormSettings, TResourceFormMetadataAndData, TContext, TSubmit64OverridedComponents, TSubmit64FormApi } from "./models";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
import type { DeepPartial } from "quasar";
export declare class FormFactory {
    resourceName: string;
    resourceId: TForm["resourceId"];
    formMetadataAndData: TResourceFormMetadataAndData;
    context?: TContext;
    formSettings: TFormSettings;
    formBind: TFormBindings;
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
    static getForm(resourceName: string, resourceId: TForm["resourceId"], overridedComponent: TSubmit64OverridedComponents, formMetadataAndData: TResourceFormMetadataAndData, formSettings: Partial<TFormSettings> | undefined, formBind: DeepPartial<TFormBindings> | undefined, context: TContext | undefined, formApi: TSubmit64FormApi, eventManager: ((builder: DynamicLogicBuilder) => void) | undefined): TForm;
    private generateFormDef;
    private getBindingsByFormFieldType;
    private static getRegularFieldTypeByFieldType;
    private static getFieldComponentByFormFieldType;
}
