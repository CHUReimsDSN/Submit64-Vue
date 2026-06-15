import { Component } from "vue";
import type { TFormBindings, TFormSettings } from "./models";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";
import DefaultOrphanErrorsComponent from "./components/DefaultOrphanErrorsComponent.vue";
import { Bindings } from "./bindings";
import { Utils } from "./utils";
import type { DeepPartial } from "quasar";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: TFormSettings;
  private _formBind: TFormBindings;
  private _actionComponent: Component;
  private _orphanErrorsComponent: Component;
  private _sectionComponent: Component;
  private _wrapperResetComponent: Component;
  private _associationDisplayComponent: Component;

  private constructor() {
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

  static registerGlobalFormSetting(formSetting: Partial<TFormSettings>) {
    this._instance._formSettings = Utils.deepMergeObject(
      Utils.deepDupeObject(this._instance._formSettings),
      Utils.deepDupeObject(formSetting)
    )
  }

  static registerGlobalFormBindings(bindings: DeepPartial<TFormBindings>) {
    this._instance._formBind = Utils.deepMergeObject(
      Utils.deepDupeObject(this._instance._formBind),
      Utils.deepDupeObject(bindings),
    );
  }

  static registerGlobalActionComponent(actionComponent: Component) {
    this._instance._actionComponent = actionComponent;
  }

  static registerGlobalOrphanErrorsComponent(orphanErrorComponent: Component) {
    this._instance._orphanErrorsComponent = orphanErrorComponent;
  }

  static registerGlobalSectionComponent(sectionComponent: Component) {
    this._instance._sectionComponent = sectionComponent;
  }

  static registerGlobalWrapperResetComponent(wrapperResetComponent: Component) {
    this._instance._wrapperResetComponent = wrapperResetComponent;
  }

  static registerGlobalAssociationDisplayComponent(
    displayComponent: Component,
  ) {
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
