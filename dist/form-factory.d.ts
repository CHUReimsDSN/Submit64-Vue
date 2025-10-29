import type { Component, InjectionKey } from "vue";
import type { TFormDef, TFormStyleConfig, TFormSettings, TResourceFormMetadataAndData, TSubmit64FormProvider, TContext } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    resourceName: string;
    formSettings: TFormSettings;
    formStyleConfig: TFormStyleConfig;
    actionComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayDictionary: Record<string, Component>;
    constructor(resourceName: string, formSettings?: Partial<TFormSettings>, formStyleConfig?: Partial<TFormStyleConfig>, actionComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component, associationDisplayDictionary?: Record<string, Component>);
    getForm(formMetadataAndData: TResourceFormMetadataAndData, providingUniqKey: InjectionKey<TSubmit64FormProvider>, context?: TContext): TFormDef;
    private getAssociationDisplayComponentByResourceName;
    private getRegularFieldTypeByFieldType;
}
