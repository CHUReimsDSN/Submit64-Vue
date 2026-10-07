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
import WysiwygField from "./components/WysiwygField.vue";
import ColorField from "./components/ColorField.vue";
import AttachmentHasOneField from "./components/AttachmentHasOneField.vue";
import AttachmentHasManyField from "./components/AttachmentHasManyField.vue";
import { Submit64Rules } from "./rules";
import { Utils } from "./utils";
import { Bindings } from "./bindings";
import { DynamicLogicBuilder } from "./dynamic-logic-builder";
import { Slots } from "./slots";
import { Logger } from "./logger";
export class FormFactory {
    resourceName;
    resourceId;
    formMetadataAndData;
    context;
    formSettings;
    formBind;
    formSlots;
    templateSlots;
    formApi;
    registerEventCallback;
    constructor(resourceName, resourceId, formMetadataAndData, formSettings, formBind, formSlots, templateSlots, context, formApi, eventManager) {
        this.formMetadataAndData = formMetadataAndData;
        this.resourceId = resourceId;
        this.context = context;
        this.resourceName = resourceName;
        this.formApi = formApi;
        this.formSettings = Utils.deepMergeObject(Submit64.getGlobalFormSetting(), formSettings ?? {});
        this.formBind = Utils.deepMergeObject(Submit64.getGlobalFormBind(), formBind ?? {});
        this.formSlots = Utils.deepMergeObject(Submit64.getBlobalFormSlot(), formSlots ?? {});
        this.templateSlots = templateSlots;
        this.registerEventCallback = eventManager ?? (() => { });
    }
    static getEmptyFormBeforeInit() {
        return {
            resourceName: "",
            sections: [],
            formSettings: Submit64.getGlobalFormSetting(),
            events: {},
            bindings: Bindings.getEmptyDefaultBindings().form,
            slots: Slots.getEmptyDefaultSlots(),
        };
    }
    static getForm(resourceName, resourceId, formMetadataAndData, formSettings, formBindings, formSlots, templateSlots, context, formApi, eventManager) {
        const instance = new FormFactory(resourceName, resourceId, formMetadataAndData, formSettings, formBindings, formSlots, templateSlots, context, formApi, eventManager);
        return instance.generateFormDef();
    }
    generateFormDef() {
        const usedTemplateSlots = new Map();
        for (const entry of Object.keys(this.templateSlots)) {
            usedTemplateSlots.set(entry, false);
        }
        const getTemplateSlots = (prefix, name) => {
            const startWith = `${prefix}-${name ? name + "-" : ""}`;
            return Object.fromEntries(Object.entries(this.templateSlots).reduce((acc, entry) => {
                if (entry[0].includes(startWith) && entry[1] !== undefined) {
                    usedTemplateSlots.set(entry[0], true);
                    const slotName = entry[0].replace(startWith, "");
                    acc.push([slotName, markRaw(entry[1])]);
                }
                return acc;
            }, []));
        };
        const makeComponentsRaw = (record) => {
            for (let value of Object.values(record)) {
                if (value) {
                    value = markRaw(value);
                }
            }
            return record;
        };
        const eventBuilderInstance = DynamicLogicBuilder.create(this.formApi);
        this.registerEventCallback(eventBuilderInstance);
        const fieldNames = new Set();
        const events = DynamicLogicBuilder.getEventsObjectFromInstance(eventBuilderInstance);
        const sections = [];
        this.formMetadataAndData.form.sections.forEach((sectionMetadata, sectionIndex) => {
            const fields = [];
            sectionMetadata.fields.forEach((columnMetadata) => {
                const fieldType = FormFactory.getFieldTypeByFieldMetadata(columnMetadata);
                const mainComponent = FormFactory.getFieldComponentByFieldType(fieldType);
                const computedSlotsField = Utils.deepMergeObject(Utils.deepMergeObject(this.formSlots.fields[fieldType], this.formSlots.fields.byName[columnMetadata.field_name]), getTemplateSlots("field", columnMetadata.field_name));
                const computedBindings = Utils.deepMergeObject(this.getBindingsByFormFieldType(fieldType), this.formBind.fields.byName[columnMetadata.field_name]);
                let fieldLabel = columnMetadata.label;
                if (this.formSettings.requiredFieldsHasAsterisk &&
                    columnMetadata.rules.find((rule) => rule.type === "required")) {
                    fieldLabel = fieldLabel.concat("*");
                }
                const field = {
                    type: fieldType,
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
                    bindings: computedBindings,
                    hidden: false,
                    mainComponent: markRaw(mainComponent),
                    events: events.fields[columnMetadata.field_name] ?? {},
                    slots: makeComponentsRaw(computedSlotsField),
                };
                field.computedRules = Submit64Rules.computeServerRules(field, this.formApi);
                fields.push(field);
                fieldNames.add(columnMetadata.field_name);
            });
            const sectionName = sectionMetadata.name ?? sectionIndex.toString();
            const slotsSection = {
                ...this.formSlots.sections,
                ...getTemplateSlots("section", sectionName),
            };
            const mainComponent = this.formSlots.fields.byName[sectionName]?.default ??
                this.formSlots.sections.default;
            const sectionBindings = Utils.deepMergeObject(this.formBind.sections.default, this.formBind.sections.byName[sectionName]);
            const section = {
                label: sectionMetadata.label ?? undefined,
                icon: sectionMetadata.icon ?? undefined,
                cssClass: sectionMetadata.css_class ?? undefined,
                hidden: false,
                name: sectionName,
                index: sectionIndex,
                bindings: sectionBindings,
                readonly: this.formMetadataAndData.form.readonly ??
                    sectionMetadata.readonly ??
                    undefined,
                events: events.sections[sectionMetadata.name ?? sectionIndex.toString()] ??
                    {},
                mainComponent: markRaw(mainComponent),
                fieldsComponent: undefined,
                fields,
                slots: makeComponentsRaw(slotsSection),
            };
            sections.push(section);
        });
        const slotsForm = {
            ...this.formSlots.form,
            ...getTemplateSlots("form", ""),
        };
        const formBindings = Utils.deepCloneObject(this.formBind.form);
        const form = {
            sections,
            resourceName: this.formMetadataAndData.form.resource_name,
            resourceId: this.resourceId,
            formSettings: this.formSettings,
            bindings: formBindings,
            cssClass: this.formMetadataAndData.form.css_class ?? undefined,
            readonly: this.formMetadataAndData.form.readonly ?? undefined,
            events: events.form,
            slots: makeComponentsRaw(slotsForm),
            context: this.context,
        };
        if (fieldNames.size <
            this.formMetadataAndData.form.sections.reduce((acc, section) => {
                return acc + section.fields.length;
            }, 0)) {
            Logger.log("Found fields with the same name");
        }
        for (const entry of usedTemplateSlots) {
            if (entry[1] !== true) {
                Logger.log(`Found unused slot : ${entry[0]}`);
            }
        }
        return form;
    }
    getBindingsByFormFieldType(fieldType) {
        const bindingsMap = {
            string: this.formBind.fields.string,
            color: this.formBind.fields.color,
            wysiwyg: this.formBind.fields.wysiwyg,
            number: this.formBind.fields.number,
            date: this.formBind.fields.date,
            datetime: this.formBind.fields.datetime,
            checkbox: this.formBind.fields.checkbox,
            select: this.formBind.fields.select,
            belongsTo: this.formBind.fields.belongsTo,
            hasMany: this.formBind.fields.hasMany,
            attachmentHasOne: this.formBind.fields.attachmentHasOne,
            attachmentHasMany: this.formBind.fields.attachmentHasMany,
        };
        return Utils.deepCloneObject(bindingsMap[fieldType]);
    }
    static getFieldTypeByFieldMetadata(field) {
        switch (field.field_type) {
            case "string":
                switch (field.field_extra_type) {
                    case "color":
                        return "color";
                    case "wysiwyg":
                        return "wysiwyg";
                    default:
                        return "string";
                }
            case "text":
                return "string";
            case "number":
                return "number";
            case "date":
                return "date";
            case "datetime":
                return "datetime";
            case "select":
                return "select";
            case "selectBelongsTo":
                return "belongsTo";
            case "selectHasMany":
                return "hasMany";
            case "selectHasAndBelongsToMany":
                return "hasMany";
            case "selectHasOne":
                return "belongsTo";
            case "checkbox":
                return "checkbox";
            case "object":
                return "string";
            case "attachmentHasOne":
                return "attachmentHasOne";
            case "attachmentHasMany":
                return "attachmentHasMany";
            default:
                return "string";
        }
    }
    static getFieldComponentByFieldType(fieldType) {
        const bindingsMap = {
            string: StringField,
            color: ColorField,
            wysiwyg: WysiwygField,
            number: NumberField,
            date: DateField,
            datetime: DateTimeField,
            checkbox: CheckboxField,
            select: SelectField,
            belongsTo: SelectBelongsToField,
            hasMany: SelectHasManyField,
            attachmentHasOne: AttachmentHasOneField,
            attachmentHasMany: AttachmentHasManyField,
        };
        return bindingsMap[fieldType];
    }
}
