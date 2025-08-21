import StringField from "./components/StringField.vue";
import TextField from "./components/TextField.vue";
import DateField from "./components/DateField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import type { Component } from "vue";
import type {
  TFormDef,
  TFormFieldDef,
  TFormStyleConfig,
  TFormSettings,
  TFormSection,
  TResourceFormMetadataAndData,
} from "./models";
import { Submit64 } from "./submit64";
import DefaultSectionComponent from "./components/DefaultSectionComponent.vue";
import DefaultActionComponent from "./components/DefaultActionComponent.vue";
import NumberField from "./components/NumberField.vue";
import SelectHasManyField from "./components/SelectHasManyField.vue";
import ObjectField from "./components/ObjectField.vue";
import SelectField from "./components/SelectField.vue";
import SelectBelongsToField from "./components/SelectBelongsToField.vue";
import DefaultWrapperResetComponent from "./components/DefaultWrapperResetComponent.vue";
import { getSubmit64FormProviderSymbol } from "./inject-provider-symbol";

export class FormFactory {
  private static getFieldComponentByFormFieldType(
    fieldType: TFormFieldDef["type"]
  ): Component {
    return {
      string: StringField,
      text: TextField,
      number: NumberField,
      date: DateField,
      selectString: SelectField,
      selectBelongsTo: SelectBelongsToField,
      selectHasMany: SelectHasManyField,
      checkbox: CheckboxField,
      object: ObjectField,
    }[fieldType];
  }
  private static getDefaultFormSettings(): TFormSettings {
    return {
      rulesBehaviour: "lazy",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY:HHmm",
      renderBackendHint: true,
    };
  }

  private static getDefaultFormStyleSettings(): TFormStyleConfig {
    return {
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
  }

  private static getDefaultActionComponent(): Component {
    return DefaultActionComponent;
  }

  private static getDefaultSectionComponent(): Component {
    return DefaultSectionComponent;
  }

  private static getDefaultWrapperResetComponent(): Component {
    return DefaultWrapperResetComponent;
  }

  resourceName: string;
  formSettings: TFormSettings;
  formStyleConfig: TFormStyleConfig;
  actionComponent: Component;
  sectionComponent: Component;
  wrapperResetComponent: Component;

  constructor(
    resourceName: string,
    globalFormSettings?: Partial<TFormSettings>,
    globalFormStyleConfig?: Partial<TFormStyleConfig>,
    actionComponent?: Component,
    sectionComponent?: Component,
    wrapperResetComponent?: Component
  ) {
    this.resourceName = resourceName;
    this.formSettings = {
      ...FormFactory.getDefaultFormSettings(),
      ...Submit64.getGlobalFormSetting(),
      ...globalFormSettings,
    };
    this.formStyleConfig = {
      ...FormFactory.getDefaultFormStyleSettings(),
      ...Submit64.getGlobalFormStyleConfig(),
      ...globalFormStyleConfig,
    };
    this.actionComponent =
      actionComponent ??
      Submit64.getGlobalActionComponent() ??
      FormFactory.getDefaultActionComponent();
    this.sectionComponent =
      sectionComponent ??
      Submit64.getGlobalSectionComponent() ??
      FormFactory.getDefaultSectionComponent();
    this.wrapperResetComponent =
      wrapperResetComponent ??
      Submit64.getGlobalWrapperResetComponent() ??
      FormFactory.getDefaultWrapperResetComponent();
  }

  getAllField(formMetadataAndData: TResourceFormMetadataAndData, provideUuid: string): TFormDef {
    const provideUniqKey = getSubmit64FormProviderSymbol(provideUuid);
    const sections: TFormSection[] = [];
    formMetadataAndData.form.sections.forEach((sectionMetadata) => {
      const fields: TFormFieldDef[] = [];
      sectionMetadata.fields.forEach((columnMetadata) => {
        const component = FormFactory.getFieldComponentByFormFieldType(
          columnMetadata.field_type
        );
        const field: TFormFieldDef = {
          type: columnMetadata.field_type,
          metadata: columnMetadata,
          label: columnMetadata.label,
          hint: columnMetadata.hint,
          cssClass: columnMetadata.css_class,
          selectOptions: columnMetadata.select_options,
          rules: columnMetadata.rules,
          clearable: columnMetadata.clearable,
          resetable: columnMetadata.resetable,
          provideUniqKey,
          component,
        };
        fields.push(field);
      });
      const section: TFormSection = {
        label: sectionMetadata.label,
        icon: sectionMetadata.icon,
        cssClass: sectionMetadata.css_class,
        fields,
      };
      sections.push(section);
    });
    const form: TFormDef = {
      sections,
      cssClass: formMetadataAndData.form.css_class,
      resetable: formMetadataAndData.form.resetable,
      clearable: formMetadataAndData.form.clearable,
      hasGlobalCustomValidation:
        formMetadataAndData.form.has_global_custom_validation ?? false,
    };
    return form;
  }
}
