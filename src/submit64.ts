import { Component } from "vue";
import { TFormStyle, TFormSettingsProps } from "./models";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";
import DefaultOrphanErrorsComponent from "./components/DefaultOrphanErrorsComponent.vue";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: Required<TFormSettingsProps>;
  private _formStyle: Required<TFormStyle>;
  private _actionComponent: Component;
  private _orphanErrorsComponent: Component;
  private _sectionComponent: Component;
  private _wrapperResetComponent: Component;
  private _associationDisplayComponent: Component;

  private constructor() {
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: true,
      associationEmptyMessage: 'Empty',
      requiredFieldsHasAsterisk: true
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
      fieldBgColor: "",
    };
    this._actionComponent = DefaultActionComponent;
    this._orphanErrorsComponent = DefaultOrphanErrorsComponent;
    this._sectionComponent = DefaultSectionComponent;
    this._wrapperResetComponent = DefaultWrapperResetComponent;
    this._associationDisplayComponent = DefaultAssociationDisplayComponent;
  }

  static registerGlobalFormSetting(formSetting: TFormSettingsProps) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...formSetting,
    };
  }

  static registerGlobalFormStyle(formStyle: TFormStyle) {
    this._instance._formStyle = {
      ...this._instance._formStyle,
      ...formStyle,
    };
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
    displayComponent: Component
  ) {
    this._instance._associationDisplayComponent = displayComponent;
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
  
}
