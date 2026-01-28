import { markRaw, type Component } from "vue";
import type {
  TForm,
  TFormField,
  TFormStyle,
  TFormSettings,
  TFormSection,
  TResourceFormMetadataAndData,
  TContext,
  TResourceFieldMetadata,
  TSubmit64OverridedComponents,
  TFormSettingsProps,
  TSubmit64FormApi,
} from "./models";
import { Submit64 } from "./submit64";
import DateField from "./components/DateField.vue";
import DateTimeField from "./components/DateTimeField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import SelectField from "./components/SelectField.vue";
import SelectBelongsToField from "./components/SelectBelongsToField.vue";
import SelectHasManyField from "./components/SelectHasManyField.vue";
import StringField from "./components/StringField.vue";
import NumberField from "./components/NumberField.vue";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
import ColorField from "./components/ColorField.vue";
import WysiwygField from "./components/WysiwygField.vue";
import JsonField from "./components/JsonField.vue";
import AttachmentHasOneField from "./components/AttachmentHasOneField.vue";
import AttachmentHasManyField from "./components/AttachmentHasManyField.vue";

export class FormFactory {
  resourceName: string;
  resourceId: TForm["resourceId"];
  formMetadataAndData: TResourceFormMetadataAndData;
  context?: TContext;
  formSettings: Required<TFormSettings>;
  formStyle: Required<TFormStyle>;
  actionComponent: Component;
  orphanErrorsComponent: Component;
  sectionComponent: Component;
  wrapperResetComponent: Component;
  associationDisplayComponent: Component;
  dynamicComponentRecord: Record<string, Component>;
  formApi: TSubmit64FormApi;
  registerEventCallback: (builder: DynamicLogicBuilder) => void;

  private constructor(
    resourceName: string,
    resourceId: TForm["resourceId"],
    overridedComponent: TSubmit64OverridedComponents,
    formMetadataAndData: TResourceFormMetadataAndData,
    formSettings: Partial<TFormSettingsProps> | undefined,
    formStyle: Partial<TFormStyle> | undefined,
    context: TContext | undefined,
    formApi: TSubmit64FormApi,
    eventManager: ((builder: DynamicLogicBuilder) => void) | undefined
  ) {
    this.dynamicComponentRecord =
      overridedComponent.dynamicComponentRecord ?? {};
    this.formMetadataAndData = formMetadataAndData;
    this.resourceId = resourceId;
    this.context = context;
    this.resourceName = resourceName;
    this.formApi = formApi;
    this.formSettings = {
      ...formSettings,
      ...Submit64.getGlobalFormSetting(),
      backendDateFormat: formMetadataAndData.form.backend_date_format,
      backendDatetimeFormat: formMetadataAndData.form.backend_datetime_format,
    };
    this.formStyle = {
      ...formStyle,
      ...Submit64.getGlobalFormStyle(),
    };

    this.actionComponent =
      overridedComponent.actionComponent ?? Submit64.getGlobalActionComponent();
    this.orphanErrorsComponent =
      overridedComponent.orphanErrorsComponent ??
      Submit64.getGlobalOrphanErrorComponent();
    this.sectionComponent =
      overridedComponent.sectionComponent ??
      Submit64.getGlobalSectionComponent();
    this.wrapperResetComponent =
      overridedComponent.wrapperResetComponent ??
      Submit64.getGlobalWrapperResetComponent();
    this.associationDisplayComponent =
      overridedComponent.associationDisplayComponent ??
      Submit64.getGlobalAssociationDisplayComponent();

    this.registerEventCallback = eventManager ?? (() => {});
  }

  static getEmptyFormBeforeInit(): TForm {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...Submit64.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm",
      },
      formStyle: Submit64.getGlobalFormStyle(),
      events: {},
      actionComponent: markRaw(Submit64.getGlobalActionComponent()),
      orphanErrorsComponent: markRaw(Submit64.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: markRaw(Submit64.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
    };
  }

  static getForm(
    resourceName: string,
    resourceId: TForm["resourceId"],
    overridedComponent: TSubmit64OverridedComponents,
    formMetadataAndData: TResourceFormMetadataAndData,
    formSettings: Partial<TFormSettingsProps> | undefined,
    formStyle: Partial<TFormStyle> | undefined,
    context: TContext | undefined,
    formApi: TSubmit64FormApi,
    eventManager: ((builder: DynamicLogicBuilder) => void) | undefined
  ): TForm {
    const instance = new FormFactory(
      resourceName,
      resourceId,
      overridedComponent,
      formMetadataAndData,
      formSettings,
      formStyle,
      context,
      formApi,
      eventManager
    );
    return instance.generateFormDef();
  }

  private generateFormDef(): TForm {
    const eventBuilderInstance = DynamicLogicBuilder.create(this.formApi);
    this.registerEventCallback(eventBuilderInstance);
    const fieldNames = new Set<string>();
    const events =
      DynamicLogicBuilder.getEventsObjectFromInstance(eventBuilderInstance);
    const sections: TFormSection[] = [];
    this.formMetadataAndData.form.sections.forEach(
      (sectionMetadata, sectionIndex) => {
        const fields: TFormField[] = [];
        sectionMetadata.fields.forEach((columnMetadata) => {
          const beforeComponent =
            this.dynamicComponentRecord[
              `field-${columnMetadata.field_name}-before`
            ];
          const mainComponent =
            FormFactory.getFieldComponentByFormFieldType(columnMetadata);
          const afterComponent =
            this.dynamicComponentRecord[
              `field-${columnMetadata.field_name}-after`
            ];
          const componentOptions = {
            associationDisplayComponent: markRaw(
              this.associationDisplayComponent
            ),
            regularFieldType: FormFactory.getRegularFieldTypeByFieldType(
              columnMetadata.field_type
            ),
          };
          let fieldLabel = columnMetadata.label;
          if (
            this.formSettings.requiredFieldsHasAsterisk &&
            columnMetadata.rules.find((rule) => rule.type === "required")
          ) {
            fieldLabel = fieldLabel.concat("*");
          }
          const field: TFormField = {
            type: columnMetadata.field_type,
            extraType: columnMetadata.field_extra_type,
            metadata: Object.freeze(columnMetadata),
            label: fieldLabel,
            hint: columnMetadata.hint ?? undefined,
            prefix: columnMetadata.prefix ?? undefined,
            suffix: columnMetadata.suffix ?? undefined,
            readonly:
              this.formMetadataAndData.form.readonly ??
              sectionMetadata.readonly ??
              columnMetadata.readonly ??
              undefined,
            cssClass: columnMetadata.css_class ?? undefined,
            staticSelectOptions: columnMetadata.static_select_options,
            associationData: columnMetadata.field_association_data,
            attachmentData: columnMetadata.field_attachment_data,
            rules: columnMetadata.rules,
            clearable: this.formMetadataAndData.form.clearable ?? undefined,
            hidden: false,
            beforeComponent: beforeComponent
              ? markRaw(beforeComponent)
              : undefined,
            mainComponent: markRaw(mainComponent),
            afterComponent: afterComponent
              ? markRaw(afterComponent)
              : undefined,
            events: events.fields[columnMetadata.field_name] ?? {},
            componentOptions,
          };
          fields.push(field);
          fieldNames.add(columnMetadata.field_name);
        });
        const beforeComponent =
          this.dynamicComponentRecord[
            `section-${sectionMetadata.name ?? sectionIndex}-before`
          ];
        const mainComponent = this.sectionComponent;
        const afterComponent =
          this.dynamicComponentRecord[
            `section-${sectionMetadata.name ?? sectionIndex}-after`
          ];
        const section: TFormSection = {
          label: sectionMetadata.label ?? undefined,
          icon: sectionMetadata.icon ?? undefined,
          cssClass: sectionMetadata.css_class ?? undefined,
          hidden: false,
          name: sectionMetadata.name ?? sectionIndex.toString(),
          readonly:
            this.formMetadataAndData.form.readonly ??
            sectionMetadata.readonly ??
            undefined,
          events:
            events.sections[sectionMetadata.name ?? sectionIndex.toString()] ??
            {},
          beforeComponent: beforeComponent
            ? markRaw(beforeComponent)
            : undefined,
          mainComponent: markRaw(mainComponent),
          fieldsComponent: undefined as unknown as Component,
          afterComponent: afterComponent ? markRaw(afterComponent) : undefined,
          fields,
        };
        sections.push(section);
      }
    );
    const form: TForm = {
      sections,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? undefined,
      resetable: this.formMetadataAndData.form.resetable ?? undefined,
      clearable: this.formMetadataAndData.form.clearable ?? undefined,
      readonly: this.formMetadataAndData.form.readonly ?? undefined,
      events: events.form,
      actionComponent: markRaw(this.actionComponent),
      orphanErrorsComponent: markRaw(this.orphanErrorsComponent),
      wrapperResetComponent: markRaw(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context,
    };
    if (
      fieldNames.size <
      this.formMetadataAndData.form.sections.reduce((acc, section) => {
        return acc + section.fields.length;
      }, 0)
    ) {
      console.warn("Submit64 -> Found fields with the same name");
    }
    return form;
  }

  private static getRegularFieldTypeByFieldType(
    fieldType: TResourceFieldMetadata["field_type"]
  ): TFormField["componentOptions"]["regularFieldType"] | undefined {
    const mapping: Record<
      TResourceFieldMetadata["field_type"][number],
      TFormField["componentOptions"]["regularFieldType"]
    > = {
      text: "textarea",
    };
    return mapping[fieldType] || undefined;
  }

  private static getFieldComponentByFormFieldType(
    field: TResourceFieldMetadata
  ): Component {
    switch (field.field_type) {
      case "string":
        switch (field.field_extra_type) {
          case "color":
            return ColorField;
          case "wysiwyg":
            return WysiwygField;
          default:
            return StringField;
        }
      case "text":
        return StringField;
      case "number":
        return NumberField;
      case "date":
        return DateField;
      case "datetime":
        return DateTimeField;
      case "select":
        return SelectField;
      case "selectBelongsTo":
        return SelectBelongsToField;
      case "selectHasMany":
        return SelectHasManyField;
      case "selectHasAndBelongsToMany":
        return SelectHasManyField;
      case "selectHasOne":
        return SelectBelongsToField;
      case "checkbox":
        return CheckboxField;
      case "object":
        return JsonField;
      case "attachmentHasOne":
        return AttachmentHasOneField;
      case "attachmentHasMany":
        return AttachmentHasManyField;
      default:
        return StringField;
    }
  }
}
