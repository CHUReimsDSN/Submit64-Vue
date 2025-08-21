import StringField from "./components/StringField.vue";
import TextField from "./components/TextField.vue";
import DateField from "./components/DateField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import type { Component, InjectionKey } from "vue";
import type {
  TFormDef,
  TFormFieldDef,
  TFormStyleConfig,
  TFormSettings,
  TFormSection,
  TResourceFormMetadataAndData,
  TSubmit64FormProvider,
} from "./models";
import { Submit64 } from "./submit64";
import NumberField from "./components/NumberField.vue";
import SelectHasManyField from "./components/SelectHasManyField.vue";
import ObjectField from "./components/ObjectField.vue";
import SelectField from "./components/SelectField.vue";
import SelectBelongsToField from "./components/SelectBelongsToField.vue";

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

  resourceName: string;
  formSettings: Partial<TFormSettings>;
  formStyleConfig: Partial<TFormStyleConfig>;
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
      ...Submit64.getGlobalFormSetting(),
      ...globalFormSettings,
    };
    this.formStyleConfig = {
      ...Submit64.getGlobalFormStyleConfig(),
      ...globalFormStyleConfig,
    };
    this.actionComponent =
      actionComponent ??
      Submit64.getGlobalActionComponent()
    this.sectionComponent =
      sectionComponent ??
      Submit64.getGlobalSectionComponent()
    this.wrapperResetComponent =
      wrapperResetComponent ??
      Submit64.getGlobalWrapperResetComponent()
  }

  getAllField(formMetadataAndData: TResourceFormMetadataAndData, providingUniqKey: InjectionKey<TSubmit64FormProvider>): TFormDef {
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
          provideUniqKey: providingUniqKey,
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
