import { Component } from "vue";
import { TFormStyleConfig, TFormSettings } from "./models";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: Partial<TFormSettings> | undefined;
  private _formStyleConfig: Partial<TFormStyleConfig> | undefined;
  private _actionComponent: Component | undefined;
  private _sectionComponent: Component | undefined;
  private _wrapperResetComponent: Component | undefined;

  static registerGlobalFormSetting(formSetting: Partial<TFormSettings>) {
    this._instance._formSettings = formSetting;
  }

  static registerGlobalFormStyleSetting(formStyle: Partial<TFormStyleConfig>) {
    this._instance._formStyleConfig = formStyle;
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

  private constructor() {}
}
