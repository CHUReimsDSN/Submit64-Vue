import type { Component } from "vue";
import type { TFormDef, TFormStyleConfig, TFormSettings, TResourceFormMetadataAndData } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    private static getDefaultFormSettings;
    private static getDefaultFormStyleSettings;
    private static getDefaultActionComponent;
    private static getDefaultSectionComponent;
    private static getDefaultWrapperResetComponent;
    resourceName: string;
    formSettings: TFormSettings;
    formStyleConfig: TFormStyleConfig;
    actionComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    constructor(resourceName: string, globalFormSettings?: Partial<TFormSettings>, globalFormStyleConfig?: Partial<TFormStyleConfig>, actionComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component);
    getAllField(formMetadataAndData: TResourceFormMetadataAndData): TFormDef;
}
