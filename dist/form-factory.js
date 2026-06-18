import { markRaw } from "vue";
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
import { Submit64Rules } from "./rules";
import { Utils } from "./utils";
import { Bindings } from "./bindings";
export class FormFactory {
    resourceName;
    resourceId;
    formMetadataAndData;
    context;
    formSettings;
    formBind;
    actionComponent;
    orphanErrorsComponent;
    sectionComponent;
    wrapperResetComponent;
    associationDisplayComponent;
    dynamicComponentRecord;
    formApi;
    registerEventCallback;
    constructor(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formBind, context, formApi, eventManager) {
        this.dynamicComponentRecord =
            overridedComponent.dynamicComponentRecord ?? {};
        this.formMetadataAndData = formMetadataAndData;
        this.resourceId = resourceId;
        this.context = context;
        this.resourceName = resourceName;
        this.formApi = formApi;
        this.formSettings = Utils.deepMergeObject(Utils.deepDupeObject(Submit64.getGlobalFormSetting()), Utils.deepDupeObject(formSettings ?? {}));
        this.formBind = Utils.deepMergeObject(Utils.deepDupeObject(Submit64.getGlobalFormBind()), Utils.deepDupeObject(formBind ?? {}));
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
    static getEmptyFormBeforeInit() {
        return {
            resourceName: "",
            sections: [],
            formSettings: Submit64.getGlobalFormSetting(),
            events: {},
            bindings: Bindings.getEmptyDefaultBindings(),
            actionComponent: markRaw(Submit64.getGlobalActionComponent()),
            orphanErrorsComponent: markRaw(Submit64.getGlobalOrphanErrorComponent()),
            wrapperResetComponent: markRaw(Submit64.getGlobalWrapperResetComponent()),
            dynamicComponentRecord: {},
        };
    }
    static getForm(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formBind, context, formApi, eventManager) {
        const instance = new FormFactory(resourceName, resourceId, overridedComponent, formMetadataAndData, formSettings, formBind, context, formApi, eventManager);
        return instance.generateFormDef();
    }
    generateFormDef() {
        const eventBuilderInstance = DynamicLogicBuilder.create(this.formApi);
        this.registerEventCallback(eventBuilderInstance);
        const fieldNames = new Set();
        const events = DynamicLogicBuilder.getEventsObjectFromInstance(eventBuilderInstance);
        const sections = [];
        this.formMetadataAndData.form.sections.forEach((sectionMetadata, sectionIndex) => {
            const fields = [];
            sectionMetadata.fields.forEach((columnMetadata) => {
                const beforeComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-before`];
                const mainComponent = FormFactory.getFieldComponentByFormFieldType(columnMetadata);
                const afterComponent = this.dynamicComponentRecord[`field-${columnMetadata.field_name}-after`];
                const componentOptions = {
                    associationDisplayComponent: markRaw(this.associationDisplayComponent),
                    regularFieldType: FormFactory.getRegularFieldTypeByFieldType(columnMetadata.field_type),
                };
                const computedBinding = this.getBindingsByFormFieldType(columnMetadata);
                let fieldLabel = columnMetadata.label;
                if (this.formSettings.requiredFieldsHasAsterisk &&
                    columnMetadata.rules.find((rule) => rule.type === "required")) {
                    fieldLabel = fieldLabel.concat("*");
                }
                const field = {
                    type: columnMetadata.field_type,
                    extraType: columnMetadata.field_extra_type,
                    metadata: Object.freeze(columnMetadata),
                    label: fieldLabel,
                    readonly: this.formMetadataAndData.form.readonly ??
                        sectionMetadata.readonly ??
                        columnMetadata.readonly ??
                        undefined,
                    cssClass: columnMetadata.css_class ?? undefined,
                    staticSelectOptions: columnMetadata.static_select_options,
                    associationData: columnMetadata.field_association_data,
                    attachmentData: columnMetadata.field_attachment_data,
                    rules: columnMetadata.rules,
                    computedRules: [], // late init
                    bindings: computedBinding,
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
                field.computedRules = Submit64Rules.computeServerRules(field, this.formApi);
                fields.push(field);
                fieldNames.add(columnMetadata.field_name);
            });
            const beforeComponent = this.dynamicComponentRecord[`section-${sectionMetadata.name ?? sectionIndex}-before`];
            const mainComponent = this.sectionComponent;
            const afterComponent = this.dynamicComponentRecord[`section-${sectionMetadata.name ?? sectionIndex}-after`];
            const section = {
                label: sectionMetadata.label ?? undefined,
                icon: sectionMetadata.icon ?? undefined,
                cssClass: sectionMetadata.css_class ?? undefined,
                hidden: false,
                name: sectionMetadata.name ?? sectionIndex.toString(),
                bindings: Utils.deepDupeObject(this.formBind.sections),
                readonly: this.formMetadataAndData.form.readonly ??
                    sectionMetadata.readonly ??
                    undefined,
                events: events.sections[sectionMetadata.name ?? sectionIndex.toString()] ??
                    {},
                beforeComponent: beforeComponent
                    ? markRaw(beforeComponent)
                    : undefined,
                mainComponent: markRaw(mainComponent),
                fieldsComponent: undefined,
                afterComponent: afterComponent ? markRaw(afterComponent) : undefined,
                fields,
            };
            sections.push(section);
        });
        const form = {
            sections,
            resourceName: this.formMetadataAndData.form.resource_name,
            resourceId: this.resourceId,
            formSettings: this.formSettings,
            bindings: this.formBind,
            cssClass: this.formMetadataAndData.form.css_class ?? undefined,
            readonly: this.formMetadataAndData.form.readonly ?? undefined,
            events: events.form,
            actionComponent: markRaw(this.actionComponent),
            orphanErrorsComponent: markRaw(this.orphanErrorsComponent),
            wrapperResetComponent: markRaw(this.wrapperResetComponent),
            dynamicComponentRecord: this.dynamicComponentRecord,
            context: this.context,
        };
        if (fieldNames.size <
            this.formMetadataAndData.form.sections.reduce((acc, section) => {
                return acc + section.fields.length;
            }, 0)) {
            console.warn("Submit64 -> Found fields with the same name");
        }
        return form;
    }
    getBindingsByFormFieldType(field) {
        switch (field.field_type) {
            case "string":
                switch (field.field_extra_type) {
                    case "color":
                        return Utils.deepDupeObject(this.formBind.fields.color);
                    case "wysiwyg":
                        return Utils.deepDupeObject(this.formBind.fields.wysiwyg);
                    default:
                        return Utils.deepDupeObject(this.formBind.fields.string);
                }
            case "text":
                return Utils.deepDupeObject(this.formBind.fields.string);
            case "number":
                return Utils.deepDupeObject(this.formBind.fields.number);
            case "date":
                return Utils.deepDupeObject(this.formBind.fields.date);
            case "datetime":
                return Utils.deepDupeObject(this.formBind.fields.datetime);
            case "select":
                return Utils.deepDupeObject(this.formBind.fields.select);
            case "selectBelongsTo":
                return Utils.deepDupeObject(this.formBind.fields.belongsTo);
            case "selectHasMany":
                return Utils.deepDupeObject(this.formBind.fields.hasMany);
            case "selectHasAndBelongsToMany":
                return Utils.deepDupeObject(this.formBind.fields.hasMany);
            case "selectHasOne":
                return Utils.deepDupeObject(this.formBind.fields.belongsTo);
            case "checkbox":
                return Utils.deepDupeObject(this.formBind.fields.checkbox);
            case "object":
                return {};
            case "attachmentHasOne":
                return Utils.deepDupeObject(this.formBind.fields.attachmentBelongsTo);
            case "attachmentHasMany":
                return Utils.deepDupeObject(this.formBind.fields.attachmentHasMany);
            default:
                return Utils.deepDupeObject(this.formBind.fields.string);
        }
    }
    static getRegularFieldTypeByFieldType(fieldType) {
        const mapping = {
            text: "textarea",
        };
        return mapping[fieldType] || undefined;
    }
    static getFieldComponentByFormFieldType(field) {
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
