import { Utils } from "./utils";
import { Bindings } from "./bindings";
import { Slots } from "./slots";
export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formBindings;
    _formSlots;
    constructor() {
        this._formSettings = {
            backendDateFormat: "YYYY/MM/DD",
            backendDatetimeFormat: "YYYY/MM/DD HH:mm",
            dateFormat: "DD/MM/YYYY",
            datetimeFormat: "DD/MM/YYYY HH:mm",
            associationEmptyMessage: "Vide", // TODO i18n like system with big object for all translation
            renderBackendHint: true,
            requiredFieldsHasAsterisk: true,
            showResetButton: true,
            showClearButton: true,
            autofocus: true,
            displayLabelInsideInput: true,
        };
        this._formBindings = Bindings.getDefaultFormBindings();
        this._formSlots = Slots.getDefaultFormSlots();
    }
    static registerGlobalFormSetting(formSetting) {
        this._instance._formSettings = Utils.deepMergeObject(this._instance._formSettings, formSetting);
    }
    static registerGlobalFormBindings(bindings) {
        this._instance._formBindings = Utils.deepMergeObject(this._instance._formBindings, bindings);
    }
    static registerGlobalFormSlots(slots) {
        this._instance._formSlots = Utils.deepMergeObject(this._instance._formSlots, slots);
    }
    static getGlobalFormSetting() {
        return this._instance._formSettings;
    }
    static getGlobalFormBind() {
        return this._instance._formBindings;
    }
    static getBlobalFormSlot() {
        return this._instance._formSlots;
    }
}
