import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";
import DefaultOrphanErrorsComponent from "./components/DefaultOrphanErrorsComponent.vue";
import { Bindings } from "./bindings";
import { Utils } from "./utils";
export class Submit64 {
    static _instance = new Submit64();
    _formSettings;
    _formBind;
    _actionComponent;
    _orphanErrorsComponent;
    _sectionComponent;
    _wrapperResetComponent;
    _associationDisplayComponent;
    constructor() {
        this._formSettings = {
            backendDateFormat: "YYYY/MM/DD",
            backendDatetimeFormat: "YYYY/MM/DD HH:mm",
            dateFormat: "DD/MM/YYYY",
            datetimeFormat: "DD/MM/YYYY HH:mm",
            associationEmptyMessage: "Vide",
            renderBackendHint: true,
            requiredFieldsHasAsterisk: true,
            showResetButton: true,
            showClearButton: true,
            autofocus: true,
        };
        ((this._formBind = Bindings.getDefaultFormBindings()),
            (this._actionComponent = DefaultActionComponent));
        this._orphanErrorsComponent = DefaultOrphanErrorsComponent;
        this._sectionComponent = DefaultSectionComponent;
        this._wrapperResetComponent = DefaultWrapperResetComponent;
        this._associationDisplayComponent = DefaultAssociationDisplayComponent;
    }
    static registerGlobalFormSetting(formSetting) {
        this._instance._formSettings = Utils.deepMergeObject(Utils.deepDupeObject(this._instance._formSettings), Utils.deepDupeObject(formSetting));
    }
    static registerGlobalFormBindings(bindings) {
        this._instance._formBind = Utils.deepMergeObject(Utils.deepDupeObject(this._instance._formBind), Utils.deepDupeObject(bindings));
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
    static getGlobalFormSetting() {
        return this._instance._formSettings;
    }
    static getGlobalFormBind() {
        return this._instance._formBind;
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
}
