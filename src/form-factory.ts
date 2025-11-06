import type { Component, InjectionKey } from "vue";
import type {
  TFormDef,
  TFormFieldDef,
  TFormStyle,
  TFormSettings,
  TFormSection,
  TResourceFormMetadataAndData,
  TSubmit64FormProvider,
  TContext,
  TResourceFieldMetadata,
} from "./models";
import { Submit64 } from "./submit64";
import DateField from "./components/DateField.vue";
import DateTimeField from "./components/DateTimeField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import ObjectField from "./components/ObjectField.vue";
import SelectField from "./components/SelectField.vue";
import SelectBelongsToField from "./components/SelectBelongsToField.vue";
import SelectHasManyField from "./components/SelectHasManyField.vue";
import StringField from "./components/StringField.vue";
import NumberField from "./components/NumberField.vue";

export class FormFactory {
  private static getFieldComponentByFormFieldType(
    fieldType: TFormFieldDef["type"]
  ): Component {
    return {
      string: StringField,
      text: StringField,
      number: NumberField,
      date: DateField,
      datetime: DateTimeField,
      selectString: SelectField,
      selectBelongsTo: SelectBelongsToField,
      selectHasMany: SelectHasManyField,
      checkbox: CheckboxField,
      object: ObjectField,
    }[fieldType];
  }

  resourceName: string;
  formSettings: Required<TFormSettings>;
  formStyle: Required<TFormStyle>;
  actionComponent: Component;
  sectionComponent: Component;
  wrapperResetComponent: Component;
  associationDisplayComponent: Component;
  associationDisplayRecord: Record<string, Component>;

  constructor(
    resourceName: string,
    formSettings?: Partial<TFormSettings>,
    formStyle?: Partial<TFormStyle>,
    actionComponent?: Component,
    sectionComponent?: Component,
    wrapperResetComponent?: Component,
    associationDisplayComponent?: Component,
    associationDisplayRecord?: Record<string, Component>
  ) {
    this.resourceName = resourceName;
    this.formSettings = {
      ...formSettings,
      ...Submit64.getGlobalFormSetting(),
    };
    this.formStyle = {
      ...formStyle,
      ...Submit64.getGlobalFormStyle(),
    };
    this.actionComponent =
      actionComponent ?? Submit64.getGlobalActionComponent();
    this.sectionComponent =
      sectionComponent ?? Submit64.getGlobalSectionComponent();
    this.wrapperResetComponent =
      wrapperResetComponent ?? Submit64.getGlobalWrapperResetComponent();
    this.associationDisplayComponent =
      associationDisplayComponent ??
      Submit64.getGlobalAssociationDisplayComponent();
    this.associationDisplayRecord =
      associationDisplayRecord ?? Submit64.getGlobalAssociationDisplayRecord();
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
          associationDisplayComponent: this.associationDisplayRecord[columnMetadata.field_association_class ?? ''] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            columnMetadata.field_type
          ),
        };
        const field: TFormFieldDef = {
          type: columnMetadata.field_type,
          metadata: columnMetadata,
          label: columnMetadata.label,
          hint: columnMetadata.hint,
          cssClass: columnMetadata.css_class,
          selectOptions: columnMetadata.select_options,
          rules: columnMetadata.rules,
          clearable: formMetadataAndData.form.clearable,
          provideUniqKey: providingUniqKey,
          defaultDisplayValue: columnMetadata.default_display_value,
          component,
          componentOptions,
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
      context,
    };
    return form;
  }

  private getRegularFieldTypeByFieldType(
    fieldType: TResourceFieldMetadata["field_type"]
  ): TFormFieldDef["componentOptions"]["regularFieldType"] | undefined {
    const mapping: Record<
      TResourceFieldMetadata["field_type"][number],
      TFormFieldDef["componentOptions"]["regularFieldType"]
    > = {
      text: "textarea",
    };
    return mapping[fieldType] || undefined;
  }
}
