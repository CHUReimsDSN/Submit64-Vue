import type { Component } from "vue";
import type {
  TFormDef,
  TFormFieldDef,
  TFormStyle,
  TFormSettings,
  TFormSection,
  TResourceFormMetadataAndData,
  TContext,
  TResourceFieldMetadata,
  TSubmit64OverridedComponents,
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
  resourceName: string;
  formSettings: Required<TFormSettings>;
  formStyle: Required<TFormStyle>;
  actionComponent: Component;
  orphanErrorsComponent: Component;
  sectionComponent: Component;
  wrapperResetComponent: Component;
  associationDisplayComponent: Component;
  dynamicComponentRecord: Record<string, Component>;

  constructor(
    resourceName: string,
    overridedComponent: TSubmit64OverridedComponents,
    formSettings?: Partial<TFormSettings>,
    formStyle?: Partial<TFormStyle>,
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
      overridedComponent.actionComponent ?? Submit64.getGlobalActionComponent();
    this.orphanErrorsComponent =
      overridedComponent.orphanErrorsComponent ?? Submit64.getGlobalOrphanErrorComponent();
    this.sectionComponent =
      overridedComponent.sectionComponent ?? Submit64.getGlobalSectionComponent();
    this.wrapperResetComponent =
      overridedComponent.wrapperResetComponent ?? Submit64.getGlobalWrapperResetComponent();
      console.log(overridedComponent.associationDisplayComponent)
    this.associationDisplayComponent =
      overridedComponent.associationDisplayComponent ??
      Submit64.getGlobalAssociationDisplayComponent();
    this.dynamicComponentRecord = overridedComponent.dynamicComponentRecord ?? {};
  }

  getForm(
    formMetadataAndData: TResourceFormMetadataAndData,
    resourceId?: TFormDef["resourceId"],
    context?: TContext
  ): TFormDef {
    const sections: TFormSection[] = [];
    formMetadataAndData.form.sections.forEach((sectionMetadata) => {
      const fields: TFormFieldDef[] = [];
      sectionMetadata.fields.forEach((columnMetadata) => {
        const beforeComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-before`]
        const component = FormFactory.getFieldComponentByFormFieldType(
          columnMetadata.field_type
        );
        const afterComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-after`]
        const componentOptions = {
          associationDisplayComponent: this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            columnMetadata.field_type
          ),
        };
        const field: TFormFieldDef = {
          type: columnMetadata.field_type,
          metadata: columnMetadata,
          label: columnMetadata.label,
          hint: columnMetadata.hint,
          prefix: columnMetadata.prefix,
          suffix: columnMetadata.suffix,
          readonly:
            formMetadataAndData.form.readonly ??
            sectionMetadata.readonly ??
            columnMetadata.readonly,
          cssClass: columnMetadata.css_class,
          staticSelectOptions: columnMetadata.static_select_options,
          associationData: columnMetadata.field_association_data,
          rules: columnMetadata.rules,
          clearable: formMetadataAndData.form.clearable,
          beforeComponent: beforeComponent,
          mainComponent: component,
          afterComponent: afterComponent,
          componentOptions,
        };
        fields.push(field);
      });
      const section: TFormSection = {
        label: sectionMetadata.label,
        icon: sectionMetadata.icon,
        cssClass: sectionMetadata.css_class,
        readonly: formMetadataAndData.form.readonly ?? sectionMetadata.readonly,
        fields,
      };
      sections.push(section);
    });
    const form: TFormDef = {
      sections,
      resourceName: formMetadataAndData.form.resource_name,
      resourceId: resourceId,
      cssClass: formMetadataAndData.form.css_class,
      resetable: formMetadataAndData.form.resetable,
      clearable: formMetadataAndData.form.clearable,
      readonly: formMetadataAndData.form.readonly,
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
}
