import { Component } from "vue";
import { TFormStyleConfig, TFormSettings } from "./models";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: TFormSettings;
  private _formStyleConfig: TFormStyleConfig;
  private _actionComponent: Component;
  private _sectionComponent: Component;
  private _wrapperResetComponent: Component;
  private _associationDisplayDictonary: Record<string, Component>;

  private constructor() {
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

  static registerGlobalFormSetting(formSetting: Partial<TFormSettings>) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...formSetting,
    };
  }

  static registerGlobalFormStyleSetting(formStyle: Partial<TFormStyleConfig>) {
    this._instance._formStyleConfig = {
      ...this._instance._formStyleConfig,
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

  static registerGlobalAssociationDisplayDictonary(
    dictionary: Record<string, Component>
  ) {
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
