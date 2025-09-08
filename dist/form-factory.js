import DateField from "./components/DateField.vue";
import CheckboxField from "./components/CheckboxField.vue";
import { Submit64 } from "./submit64";
import SelectHasManyField from "./components/SelectHasManyField.vue";
import ObjectField from "./components/ObjectField.vue";
import SelectField from "./components/SelectField.vue";
import SelectBelongsToField from "./components/SelectBelongsToField.vue";
import RegularField from "./components/RegularField.vue";
export class FormFactory {
    static getFieldComponentByFormFieldType(fieldType) {
        return {
            string: RegularField,
            text: RegularField,
            number: RegularField,
            date: DateField,
            selectString: SelectField,
            selectBelongsTo: SelectBelongsToField,
            selectHasMany: SelectHasManyField,
            checkbox: CheckboxField,
            object: ObjectField,
        }[fieldType];
    }
    resourceName;
    formSettings;
    formStyleConfig;
    actionComponent;
    sectionComponent;
    wrapperResetComponent;
    associationDisplayDictionary;
    constructor(resourceName, globalFormSettings, globalFormStyleConfig, actionComponent, sectionComponent, wrapperResetComponent, associationDisplayDictionary) {
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
    getForm(formMetadataAndData, providingUniqKey, context) {
        const sections = [];
        formMetadataAndData.form.sections.forEach((sectionMetadata) => {
            const fields = [];
            sectionMetadata.fields.forEach((columnMetadata) => {
                const component = FormFactory.getFieldComponentByFormFieldType(columnMetadata.field_type);
                const componentOptions = {
                    associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(formMetadataAndData.form.resource_name),
                    regularFieldType: this.getRegularFieldTypeByFieldType(columnMetadata.field_type),
                };
                const field = {
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
            const section = {
                label: sectionMetadata.label,
                icon: sectionMetadata.icon,
                cssClass: sectionMetadata.css_class,
                fields,
            };
            sections.push(section);
        });
        const form = {
            sections,
            resourceName: formMetadataAndData.form.resource_name,
            cssClass: formMetadataAndData.form.css_class,
            resetable: formMetadataAndData.form.resetable,
            clearable: formMetadataAndData.form.clearable,
            backendDateFormat: formMetadataAndData.form.backend_date_format,
            backendDatetimeFormat: formMetadataAndData.form.backend_datetime_format,
            hasGlobalCustomValidation: formMetadataAndData.form.has_global_custom_validation ?? false,
            context,
        };
        return form;
    }
    getAssociationDisplayComponentByResourceName(resourceName) {
        return this.associationDisplayDictionary[resourceName];
    }
    getRegularFieldTypeByFieldType(fieldType) {
        const mapping = {
            number: "number",
            text: "textarea",
        };
        return mapping[fieldType] || undefined;
    }
}
