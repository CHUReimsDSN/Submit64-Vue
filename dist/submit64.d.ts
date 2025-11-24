import { Component } from "vue";
import { TFormStyle, TFormSettingsProps } from "./models";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formStyle;
    private _actionComponent;
    private _orphanErrorsComponent;
    private _sectionComponent;
    private _wrapperResetComponent;
    private _associationDisplayComponent;
    private constructor();
    static registerGlobalFormSetting(formSetting: TFormSettingsProps): void;
    static registerGlobalFormStyle(formStyle: TFormStyle): void;
    static registerGlobalActionComponent(actionComponent: Component): void;
    static registerGlobalOrphanErrorsComponent(orphanErrorComponent: Component): void;
    static registerGlobalSectionComponent(sectionComponent: Component): void;
    static registerGlobalWrapperResetComponent(wrapperResetComponent: Component): void;
    static registerGlobalAssociationDisplayComponent(displayComponent: Component): void;
    static getGlobalFormSetting(): Required<TFormSettingsProps>;
    static getGlobalFormStyle(): Required<TFormStyle>;
    static getGlobalActionComponent(): Component;
    static getGlobalOrphanErrorComponent(): Component;
    static getGlobalSectionComponent(): Component;
    static getGlobalWrapperResetComponent(): Component;
    static getGlobalAssociationDisplayComponent(): Component;
}
