import { Component } from "vue";
import { TFormStyleConfig, TFormSettings } from "./models";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formStyleConfig;
    private _actionComponent;
    private _sectionComponent;
    private _wrapperResetComponent;
    private constructor();
    static registerGlobalFormSetting(formSetting: Partial<TFormSettings>): void;
    static registerGlobalFormStyleSetting(formStyle: Partial<TFormStyleConfig>): void;
    static registerGlobalActionComponent(actionComponent: Component): void;
    static registerGlobalSectionComponent(sectionComponent: Component): void;
    static registerGlobalWrapperResetComponent(wrapperResetComponent: Component): void;
    static getGlobalFormSetting(): TFormSettings;
    static getGlobalFormStyleConfig(): TFormStyleConfig;
    static getGlobalActionComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
    static getGlobalSectionComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
    static getGlobalWrapperResetComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
}
