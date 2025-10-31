import { Component } from "vue";
import { TFormStyle, TFormSettings } from "./models";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formStyle;
    private _actionComponent;
    private _sectionComponent;
    private _wrapperResetComponent;
    private _associationDisplayComponent;
    private _associationDisplayDictonary;
    private constructor();
    static registerGlobalFormSetting(formSetting: TFormSettings): void;
    static registerGlobalFormStyle(formStyle: TFormStyle): void;
    static registerGlobalActionComponent(actionComponent: Component): void;
    static registerGlobalSectionComponent(sectionComponent: Component): void;
    static registerGlobalWrapperResetComponent(wrapperResetComponent: Component): void;
    static registerGlobalAssociationDisplayComponent(displayComponent: Component): void;
    static registerGlobalAssociationDisplayRecord(dictionary: Record<string, Component>): void;
    static getGlobalFormSetting(): Required<TFormSettings>;
    static getGlobalFormStyle(): Required<TFormStyle>;
    static getGlobalActionComponent(): Component;
    static getGlobalSectionComponent(): Component;
    static getGlobalWrapperResetComponent(): Component;
    static getGlobalAssociationDisplayComponent(): Component;
    static getGlobalAssociationDisplayRecord(): Record<string, Component>;
}
