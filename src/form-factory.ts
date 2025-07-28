import StringField from "./components/StringField.vue";
import TextField from "./components/TextField.vue";
import DateField from "./components/DateField.vue";
import SelectField from "./components/SelectField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import type { Component } from "vue";
import type {
  TFormDef,
  TFormFieldDef,
  TFormStyleConfig as TFormStyleConfig,
  TFormSettings,
  TResourceColumnMetaData,
  TFormSection,
} from "./models";
import { Submit64 } from "./submit64";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import {
  Submit64Rules,
  TSubmit64Rule,
  TSubmit64RuleMaxDate,
  TSubmit64RuleMaxLength,
  TSubmit64RuleMinDate,
  TSubmit64RuleMinLength,
  TSubmit64RuleValidDate,
} from "./rules";
import { ValidationRule } from "quasar";

export class FormFactory {
  private static getFieldComponentByFormFieldType(): Record<
    TFormFieldDef["type"],
    Component
  > {
    return {
      string: StringField,
      text: TextField,
      date: DateField,
      select: SelectField,
      checkbox: CheckboxField,
    };
  }
  private static getDefaultFormSettings(): TFormSettings {
    return {
      rulesBehaviour: "lazy",
      stringDefaultMaxLength: 255,
      textDefaultMaxLength: 1000,
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY:HHmm",
    };
  }

  private static getDefaultFormStyleSettings(): TFormStyleConfig {
    return {
      fieldOutlined: true,
      fieldDense: true,
      fieldHideBottomSpace: true,
      fieldColor: "primary",
      fieldBgColor: "white",
    };
  }

  private static getDefaultActionComponent(): Component {
    return DefaultActionComponent;
  }

  private static getDefaultSectionComponent(): Component {
    return DefaultSectionComponent;
  }

  resourceName: string;
  formSettings: TFormSettings;
  formStyleConfig: TFormStyleConfig;
  actionComponent: Component;
  sectionComponent: Component;

  constructor(
    resourceName: string,
    globalFormSettings?: TFormSettings,
    globalFormStyleConfig?: TFormStyleConfig,
    actionComponent?: Component,
    sectionComponent?: Component
  ) {
    this.resourceName = resourceName;
    this.formSettings =
      globalFormSettings ??
      Submit64.getGlobalFormSetting() ??
      FormFactory.getDefaultFormSettings();
    this.formStyleConfig =
      globalFormStyleConfig ??
      Submit64.getGlobalFormStyleConfig() ??
      FormFactory.getDefaultFormStyleSettings();
    this.actionComponent =
      actionComponent ??
      Submit64.getGlobalActionComponent() ??
      FormFactory.getDefaultActionComponent();
    this.sectionComponent =
      sectionComponent ??
      Submit64.getGlobalSectionComponent() ??
      FormFactory.getDefaultSectionComponent();
  }

  getAllField(
    resourceName: string,
    resourceMetaDatas: TResourceColumnMetaData[]
  ): TFormDef {
    const form: TFormDef = {
      sections: [],
    };
    resourceMetaDatas.forEach((metadata) => {
      // TODO comment déclarer ça en back ?
      // TODO faire les espacement dans le layout dans le form aussi
      const section: TFormSection = {
        fields: []
      }
      form.sections.push(section)
    });
    return form;
  }

  private static computedServerRule(rule: TSubmit64Rule): ValidationRule {
    switch (rule.type) {
      case "required":
        return Submit64Rules.required;
      case "maxNumber":
        return Submit64Rules.maxNumber((rule as TSubmit64RuleMaxLength).max);
      case "minNumber":
        return Submit64Rules.minNumber((rule as TSubmit64RuleMinLength).min);
      case "maxString":
        return Submit64Rules.maxString((rule as TSubmit64RuleMaxLength).max);
      case "minString":
        return Submit64Rules.minString((rule as TSubmit64RuleMinLength).min);
      case "maxDate":
        return Submit64Rules.maxDate(
          (rule as TSubmit64RuleMaxDate).max,
          (rule as TSubmit64RuleMaxDate).format
        );
      case "minDate":
        return Submit64Rules.minDate(
          (rule as TSubmit64RuleMaxDate).max,
          (rule as TSubmit64RuleMinDate).format
        );
      case "validDate":
        return Submit64Rules.validDate((rule as TSubmit64RuleValidDate).format);
      case "positiveNumber":
        return Submit64Rules.positiveNumber;
    }
  }
}
