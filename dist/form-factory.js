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
    static getFieldComponentByFormFieldType(fieldType) {
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
    resourceName;
    formSettings;
    formStyle;
    actionComponent;
    sectionComponent;
    wrapperResetComponent;
    associationDisplayComponent;
    associationDisplayRecord;
    constructor(resourceName, formSettings, formStyle, actionComponent, sectionComponent, wrapperResetComponent, associationDisplayComponent, associationDisplayRecord) {
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
    getForm(formMetadataAndData, resourceId, context) {
        const sections = [];
        formMetadataAndData.form.sections.forEach((sectionMetadata) => {
            const fields = [];
            sectionMetadata.fields.forEach((columnMetadata) => {
                const component = FormFactory.getFieldComponentByFormFieldType(columnMetadata.field_type);
                const componentOptions = {
                    associationDisplayComponent: this.associationDisplayRecord[columnMetadata.field_association_class ?? ''] ?? this.associationDisplayComponent,
                    regularFieldType: this.getRegularFieldTypeByFieldType(columnMetadata.field_type),
                };
                const field = {
                    type: columnMetadata.field_type,
                    metadata: columnMetadata,
                    label: columnMetadata.label,
                    hint: columnMetadata.hint,
                    prefix: columnMetadata.prefix,
                    suffix: columnMetadata.suffix,
                    readonly: formMetadataAndData.form.readonly ?? sectionMetadata.readonly ?? columnMetadata.readonly,
                    cssClass: columnMetadata.css_class,
                    staticSelectOptions: columnMetadata.static_select_options,
                    associationData: columnMetadata.field_association_data,
                    rules: columnMetadata.rules,
                    clearable: formMetadataAndData.form.clearable,
                    component,
                    componentOptions,
                };
                fields.push(field);
            });
            const section = {
                label: sectionMetadata.label,
                icon: sectionMetadata.icon,
                cssClass: sectionMetadata.css_class,
                readonly: formMetadataAndData.form.readonly ?? sectionMetadata.readonly,
                fields,
            };
            sections.push(section);
        });
        const form = {
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
    getRegularFieldTypeByFieldType(fieldType) {
        const mapping = {
            text: "textarea",
        };
        return mapping[fieldType] || undefined;
    }
}
