import { Component } from "vue";
import { TFormStyleConfig, TFormSettings } from "./models";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formStyleConfig;
    private _actionComponent;
    private _sectionComponent;
    private _wrapperResetComponent;
    static registerGlobalFormSetting(formSetting: Partial<TFormSettings>): void;
    static registerGlobalFormStyleSetting(formStyle: Partial<TFormStyleConfig>): void;
    static registerGlobalActionComponent(actionComponent: Component): void;
    static registerGlobalSectionComponent(sectionComponent: Component): void;
    static registerGlobalWrapperResetComponent(wrapperResetComponent: Component): void;
    static getGlobalFormSetting(): Partial<TFormSettings> | undefined;
    static getGlobalFormStyleConfig(): Partial<TFormStyleConfig> | undefined;
    static getGlobalActionComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
    static getGlobalSectionComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
    static getGlobalWrapperResetComponent(): Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
    private constructor();
}
