import { Component } from "vue";
import { TFormStyle, TFormSettings } from "./models";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import DefaultAssociationDisplayComponent from "./components/DefaultAssociationDisplayComponent.vue";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: Required<TFormSettings>;
  private _formStyle: Required<TFormStyle>;
  private _actionComponent: Component;
  private _sectionComponent: Component;
  private _wrapperResetComponent: Component;
  private _associationDisplayComponent: Component;
  private _associationDisplayDictonary: Record<string, Component>;

  private constructor() {
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
    this._associationDisplayDictonary = {}
  }

  static registerGlobalFormSetting(formSetting: TFormSettings) {
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

  static registerGlobalAssociationDisplayRecord(
    dictionary: Record<string, Component>
  ) {
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
  
  static getGlobalAssociationDisplayRecord() {
    return this._instance._associationDisplayDictonary;
  }
}
