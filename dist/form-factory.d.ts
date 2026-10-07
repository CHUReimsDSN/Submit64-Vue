import { type Component } from "vue";
import type { TForm, TFormBindings, TFormSettings, TResourceFormMetadataAndData, TContext, TSubmit64FormApi, TFormSlots } from "./models";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
import type { DeepPartial } from "quasar";
export declare class FormFactory {
    resourceName: string;
    resourceId: TForm["resourceId"];
    formMetadataAndData: TResourceFormMetadataAndData;
    context?: TContext;
    formSettings: TFormSettings;
    formBind: TFormBindings;
    formSlots: TFormSlots;
    templateSlots: Record<string, Component | undefined>;
    formApi: TSubmit64FormApi;
    registerEventCallback: (builder: DynamicLogicBuilder) => void;
    private constructor();
    static getEmptyFormBeforeInit(): TForm;
    static getForm(resourceName: string, resourceId: TForm["resourceId"], formMetadataAndData: TResourceFormMetadataAndData, formSettings: Partial<TFormSettings> | undefined, formBindings: DeepPartial<TFormBindings> | undefined, formSlots: DeepPartial<TFormSlots> | undefined, templateSlots: Record<string, Component | undefined>, context: TContext | undefined, formApi: TSubmit64FormApi, eventManager: ((builder: DynamicLogicBuilder) => void) | undefined): TForm;
    private generateFormDef;
    private getBindingsByFormFieldType;
    private static getFieldTypeByFieldMetadata;
    private static getFieldComponentByFieldType;
}
