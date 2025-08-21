import type { Component, InjectionKey } from "vue";
import type { TFormDef, TFormStyleConfig, TFormSettings, TResourceFormMetadataAndData, TSubmit64FormProvider } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    resourceName: string;
    formSettings: TFormSettings;
    formStyleConfig: TFormStyleConfig;
    actionComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    constructor(resourceName: string, globalFormSettings?: Partial<TFormSettings>, globalFormStyleConfig?: Partial<TFormStyleConfig>, actionComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component);
    getAllField(formMetadataAndData: TResourceFormMetadataAndData, providingUniqKey: InjectionKey<TSubmit64FormProvider>): TFormDef;
}
