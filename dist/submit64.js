export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formStyleConfig;
    _actionComponent;
    _sectionComponent;
    _wrapperResetComponent;
    static registerGlobalFormSetting(formSetting) {
        this._instance._formSettings = formSetting;
    }
    static registerGlobalFormStyleSetting(formStyle) {
        this._instance._formStyleConfig = formStyle;
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
    constructor() { }
}
