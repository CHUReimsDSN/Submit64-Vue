import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";
import DefaultOrphanErrorsComponent from "./components/DefaultOrphanErrorsComponent.vue";
export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formStyle;
    _actionComponent;
    _orphanErrorsComponent;
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
            fieldOutlined: false,
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
        this._orphanErrorsComponent = DefaultOrphanErrorsComponent;
        this._sectionComponent = DefaultSectionComponent;
        this._wrapperResetComponent = DefaultWrapperResetComponent;
        this._associationDisplayComponent = DefaultAssociationDisplayComponent;
        this._associationDisplayDictonary = {};
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
    static registerGlobalOrphanErrorsComponent(orphanErrorComponent) {
        this._instance._orphanErrorsComponent = orphanErrorComponent;
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
    static registerGlobalAssociationDisplayRecord(dictionary) {
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
    static getGlobalOrphanErrorComponent() {
        return this._instance._orphanErrorsComponent;
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
    static getGlobalAssociationDisplayRecord() {
        return this._instance._associationDisplayDictonary;
    }
}
