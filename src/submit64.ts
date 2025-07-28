import { Component } from "vue";
import { TFormStyleConfig, TFormSettings } from "./models";

export class Submit64 {
  private static _instance: Submit64 = new Submit64();
  private _formSettings: TFormSettings | undefined;
  private _formStyleConfig: TFormStyleConfig | undefined;
  private _actionComponent: Component | undefined;
  private _sectionComponent: Component | undefined;

  static registerGlobalFormSetting(formSetting: TFormSettings) {
    this._instance._formSettings = formSetting;
  }

  static registerGlobalFormStyleSetting(formStyle: TFormStyleConfig) {
    this._instance._formStyleConfig = formStyle;
  }

  static registerGlobalActionComponent(actionComponent: Component) {
    this._instance._actionComponent = actionComponent;
  }

  static registerGlobalSectionComponent(sectionComponent: Component) {
    this._instance._sectionComponent = sectionComponent;
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

  private constructor() {}
}
