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
  TContext,
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
  formSettings: TFormSettings;
  formStyleConfig: TFormStyleConfig;
  actionComponent: Component;
  sectionComponent: Component;
  wrapperResetComponent: Component;
  associationDisplayDictionary: Record<string, Component>;

  constructor(
    resourceName: string,
    globalFormSettings?: Partial<TFormSettings>,
    globalFormStyleConfig?: Partial<TFormStyleConfig>,
    actionComponent?: Component,
    sectionComponent?: Component,
    wrapperResetComponent?: Component,
    associationDisplayDictionary?: Record<string, Component>
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
      actionComponent ?? Submit64.getGlobalActionComponent();
    this.sectionComponent =
      sectionComponent ?? Submit64.getGlobalSectionComponent();
    this.wrapperResetComponent =
      wrapperResetComponent ?? Submit64.getGlobalWrapperResetComponent();
    this.associationDisplayDictionary =
      associationDisplayDictionary ??
      Submit64.getGlobalAssociationDisplayDictonary();
  }

  getForm(
    formMetadataAndData: TResourceFormMetadataAndData,
    providingUniqKey: InjectionKey<TSubmit64FormProvider>,
    context?: TContext
  ): TFormDef {
    const sections: TFormSection[] = [];
    formMetadataAndData.form.sections.forEach((sectionMetadata) => {
      const fields: TFormFieldDef[] = [];
      sectionMetadata.fields.forEach((columnMetadata) => {
        const component = FormFactory.getFieldComponentByFormFieldType(
          columnMetadata.field_type
        );
        const componentOptions = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(formMetadataAndData.form.resource_name)
        }
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
          defaultDisplayValue: columnMetadata.default_display_value,
          component,
          componentOptions
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
      resourceName: formMetadataAndData.form.resource_name,
      cssClass: formMetadataAndData.form.css_class,
      resetable: formMetadataAndData.form.resetable,
      clearable: formMetadataAndData.form.clearable,
      backendDateFormat: formMetadataAndData.form.backend_date_format,
      backendDatetimeFormat: formMetadataAndData.form.backend_datetime_format,
      hasGlobalCustomValidation:
        formMetadataAndData.form.has_global_custom_validation ?? false,
      context
    };
    return form;
  }

  private getAssociationDisplayComponentByResourceName(resourceName: string) {
    return this.associationDisplayDictionary[resourceName]
  }
}
