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
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
export class FormFactory {
    resourceName;
    resourceId;
    formMetadataAndData;
    context;
    formSettings;
    formStyle;
    actionComponent;
    orphanErrorsComponent;
    sectionComponent;
    wrapperResetComponent;
    associationDisplayComponent;
    dynamicComponentRecord;
    fullFormApi;
    registerEventCallback;
    constructor(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formStyle, context, fullFormApi, eventManager) {
        this.dynamicComponentRecord =
            overridedComponent.dynamicComponentRecord ?? {};
        this.formMetadataAndData = formMetadataAndData;
        this.resourceId = resourceId;
        this.context = context;
        this.resourceName = resourceName;
        this.fullFormApi = fullFormApi;
        this.formSettings = {
            ...formSettings,
            ...Submit64.getGlobalFormSetting(),
            backendDateFormat: formMetadataAndData.form.backend_date_format,
            backendDatetimeFormat: formMetadataAndData.form.backend_datetime_format
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
        this.registerEventCallback = eventManager ?? (() => { });
    }
    static getForm(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formStyle, context, fullFormApi, eventManager) {
        const instance = new FormFactory(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formStyle, context, fullFormApi, eventManager);
        return instance.generateFormDef();
    }
    generateFormDef() {
        const eventBuilderInstance = DynamicLogicBuilder.create(this.fullFormApi);
        this.registerEventCallback(eventBuilderInstance);
        const events = DynamicLogicBuilder.getEventsObjectFromInstance(eventBuilderInstance);
        const sections = [];
        this.formMetadataAndData.form.sections.forEach((sectionMetadata, sectionIndex) => {
            const fields = [];
            sectionMetadata.fields.forEach((columnMetadata) => {
                const beforeComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-before`];
                const mainComponent = FormFactory.getFieldComponentByFormFieldType(columnMetadata.field_type);
                const afterComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-after`];
                const componentOptions = {
                    associationDisplayComponent: this.associationDisplayComponent,
                    regularFieldType: FormFactory.getRegularFieldTypeByFieldType(columnMetadata.field_type),
                };
                const field = {
                    type: columnMetadata.field_type,
                    metadata: Object.freeze(columnMetadata),
                    label: columnMetadata.label,
                    hint: columnMetadata.hint ?? undefined,
                    prefix: columnMetadata.prefix ?? undefined,
                    suffix: columnMetadata.suffix ?? undefined,
                    readonly: this.formMetadataAndData.form.readonly ??
                        sectionMetadata.readonly ??
                        columnMetadata.readonly ??
                        undefined,
                    cssClass: columnMetadata.css_class ?? undefined,
                    staticSelectOptions: columnMetadata.static_select_options,
                    associationData: columnMetadata.field_association_data,
                    rules: columnMetadata.rules,
                    clearable: this.formMetadataAndData.form.clearable ?? undefined,
                    hidden: false,
                    beforeComponent: beforeComponent,
                    mainComponent: mainComponent,
                    afterComponent: afterComponent,
                    events: events.fields[columnMetadata.field_name],
                    componentOptions,
                };
                fields.push(field);
            });
            const beforeComponent = this.dynamicComponentRecord[`section-${sectionMetadata.name ?? sectionIndex}-before`];
            const mainComponent = this.sectionComponent;
            const afterComponent = this.dynamicComponentRecord[`section-${sectionMetadata.name ?? sectionIndex}-after`];
            const section = {
                label: sectionMetadata.label ?? undefined,
                icon: sectionMetadata.icon ?? undefined,
                cssClass: sectionMetadata.css_class ?? undefined,
                hidden: false,
                name: sectionMetadata.name ?? undefined,
                readonly: this.formMetadataAndData.form.readonly ??
                    sectionMetadata.readonly ??
                    undefined,
                events: events.sections[sectionMetadata.name ?? sectionIndex.toString()],
                beforeComponent: beforeComponent,
                mainComponent: mainComponent,
                afterComponent: afterComponent,
                fields,
            };
            sections.push(section);
        });
        const form = {
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
            actionComponent: this.actionComponent,
            orphanErrorsComponent: this.orphanErrorsComponent,
            wrapperResetComponent: this.wrapperResetComponent,
            dynamicComponentRecord: this.dynamicComponentRecord,
            context: this.context,
        };
        return form;
    }
    static getRegularFieldTypeByFieldType(fieldType) {
        const mapping = {
            text: "textarea",
        };
        return mapping[fieldType] || undefined;
    }
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
}
