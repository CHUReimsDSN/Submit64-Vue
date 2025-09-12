import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formStyleConfig;
    _actionComponent;
    _sectionComponent;
    _wrapperResetComponent;
    _associationDisplayDictonary;
    constructor() {
        this._formSettings = {
            rulesBehaviour: "ondemand",
            dateFormat: "DD/MM/YYYY",
            datetimeFormat: "DD/MM/YYYY:HHmm",
            renderBackendHint: true,
        };
        this._formStyleConfig = {
            fieldOutlined: true,
            fieldDense: true,
            fieldHideBottomSpace: true,
            fieldFilled: false,
            fieldStandout: false,
            fieldBorderless: false,
            fieldRounded: false,
            fieldSquare: false,
            fieldClass: "",
            fieldColor: "primary",
            fieldBgColor: "white",
        };
        this._actionComponent = DefaultActionComponent;
        this._sectionComponent = DefaultSectionComponent;
        this._wrapperResetComponent = DefaultWrapperResetComponent;
        this._associationDisplayDictonary = {};
    }
    static registerGlobalFormSetting(formSetting) {
        this._instance._formSettings = {
            ...this._instance._formSettings,
            ...formSetting,
        };
    }
    static registerGlobalFormStyleSetting(formStyle) {
        this._instance._formStyleConfig = {
            ...this._instance._formStyleConfig,
            ...formStyle,
        };
    }
    static registerGlobalActionComponent(actionComponent) {
        this._instance._actionComponent = actionComponent;
    }
    static registerGlobalSectionComponent(sectionComponent) {
        this._instance._sectionComponent = sectionComponent;
    }
    static registerGlobalWrapperResetComponent(wrapperResetComponent) {
        this._instance._wrapperResetComponent = wrapperResetComponent;
    }
    static registerGlobalAssociationDisplayDictonary(dictionary) {
        this._instance._associationDisplayDictonary = dictionary;
    }
    static getGlobalFormSetting() {
        return this._instance._formSettings;
    }
    static getGlobalFormStyleConfig() {
        return this._instance._formStyleConfig;
    }
    static getGlobalActionComponent() {
        return this._instance._actionComponent;
    }
    static getGlobalSectionComponent() {
        return this._instance._sectionComponent;
    }
    static getGlobalWrapperResetComponent() {
        return this._instance._wrapperResetComponent;
    }
    static getGlobalAssociationDisplayDictonary() {
        return this._instance._associationDisplayDictonary;
    }
}
