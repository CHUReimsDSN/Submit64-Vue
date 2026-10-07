import type { TFormBindings, TFormSettings, TFormSlots } from "./models";
import type { DeepPartial } from "quasar";
export declare class Submit64 {
    private static _instance;
    private _formSettings;
    private _formBindings;
    private _formSlots;
    private constructor();
    static registerGlobalFormSetting(formSetting: Partial<TFormSettings>): void;
    static registerGlobalFormBindings(bindings: DeepPartial<TFormBindings>): void;
    static registerGlobalFormSlots(slots: DeepPartial<TFormSlots>): void;
    static getGlobalFormSetting(): TFormSettings;
    static getGlobalFormBind(): TFormBindings;
    static getBlobalFormSlot(): TFormSlots;
}
