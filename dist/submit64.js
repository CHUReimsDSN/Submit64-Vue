import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";
export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formStyle;
    _actionComponent;
    _sectionComponent;
    _wrapperResetComponent;
    _associationDisplayComponent;
    _associationDisplayDictonary;
    constructor() {
        this._formSettings = {
            rulesBehaviour: "ondemand",
            dateFormat: "DD/MM/YYYY",
            datetimeFormat: "DD/MM/YYYY HH:mm",
            renderBackendHint: true,
        };
        this._formStyle = {
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
        this._associationDisplayComponent = DefaultAssociationDisplayComponent;
        this._associationDisplayDictonary = new Map();
    }
    static registerGlobalFormSetting(formSetting) {
        this._instance._formSettings = {
            ...this._instance._formSettings,
            ...formSetting,
        };
    }
    static registerGlobalFormStyle(formStyle) {
        this._instance._formStyle = {
            ...this._instance._formStyle,
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
    static registerGlobalAssociationDisplayComponent(displayComponent) {
        this._instance._associationDisplayComponent = displayComponent;
    }
    static registerGlobalAssociationDisplayMap(dictionary) {
        this._instance._associationDisplayDictonary = dictionary;
    }
    static getGlobalFormSetting() {
        return this._instance._formSettings;
    }
    static getGlobalFormStyle() {
        return this._instance._formStyle;
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
    static getGlobalAssociationDisplayComponent() {
        return this._instance._associationDisplayComponent;
    }
    static getGlobalAssociationDisplayMap() {
        return this._instance._associationDisplayDictonary;
    }
    static getGlobalAssociationDisplayByResourceName(resourceName) {
        return this._instance._associationDisplayDictonary.get(resourceName);
    }
}
