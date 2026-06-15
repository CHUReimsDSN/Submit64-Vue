import { Component } from "vue";
import type { TFormBindings, TFormSettings } from "./models";
import type { DeepPartial } from "quasar";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formBind;
    private _actionComponent;
    private _orphanErrorsComponent;
    private _sectionComponent;
    private _wrapperResetComponent;
    private _associationDisplayComponent;
    private constructor();
    static registerGlobalFormSetting(formSetting: Partial<TFormSettings>): void;
    static registerGlobalFormBindings(bindings: DeepPartial<TFormBindings>): void;
    static registerGlobalActionComponent(actionComponent: Component): void;
    static registerGlobalOrphanErrorsComponent(orphanErrorComponent: Component): void;
    static registerGlobalSectionComponent(sectionComponent: Component): void;
    static registerGlobalWrapperResetComponent(wrapperResetComponent: Component): void;
    static registerGlobalAssociationDisplayComponent(displayComponent: Component): void;
    static getGlobalFormSetting(): TFormSettings;
    static getGlobalFormBind(): TFormBindings;
    static getGlobalActionComponent(): Component;
    static getGlobalOrphanErrorComponent(): Component;
    static getGlobalSectionComponent(): Component;
    static getGlobalWrapperResetComponent(): Component;
    static getGlobalAssociationDisplayComponent(): Component;
}
