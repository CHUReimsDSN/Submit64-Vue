export class DynamicLogicBuilder {
    fullFormApi;
    events = [];
    constructor(fullFormApi) {
        this.fullFormApi = fullFormApi;
    }
    when(arg1, arg2) {
        const operatorInstance = new BuilderOperator(this, this.fullFormApi);
        const eventType = arg1;
        const data = arg2;
        const formEvent = new FormEvent(eventType, data);
        this.events.push(formEvent);
        return operatorInstance;
    }
    static create(fullFormApi) {
        const instance = new DynamicLogicBuilder(fullFormApi);
        return instance;
    }
    static getEventsObjectFromInstance(instance) {
        const allEventObject = {
            fields: {},
            sections: {},
            form: {},
        };
        instance.events.forEach((event) => {
            const targetDefinition = event.getTarget();
            switch (targetDefinition.target) {
                case "field":
                    if (!allEventObject.fields[targetDefinition.target]) {
                        allEventObject.fields[targetDefinition.target] = {};
                    }
                    if (!allEventObject.fields[targetDefinition.target][targetDefinition.key]) {
                        allEventObject.fields[targetDefinition.target][targetDefinition.key] = [];
                    }
                    allEventObject.fields[targetDefinition.target][targetDefinition.key].push(event.getActionCallback());
                    break;
                case "section":
                    if (!allEventObject.sections[targetDefinition.target]) {
                        allEventObject.sections[targetDefinition.target] = {};
                    }
                    if (!allEventObject.sections[targetDefinition.target][targetDefinition.key]) {
                        allEventObject.sections[targetDefinition.target][targetDefinition.key] = [];
                    }
                    allEventObject.sections[targetDefinition.target][targetDefinition.key].push(event.getActionCallback());
                    break;
                case "form":
                    if (!allEventObject.form[targetDefinition.key]) {
                        allEventObject.form[targetDefinition.key] = [];
                    }
                    allEventObject.form[targetDefinition.key].push(event.getActionCallback());
                    break;
            }
        });
        return allEventObject;
    }
}
class BuilderOperator {
    logicBuilder;
    fullFormApi;
    constructor(logicBuilder, fullFormApi) {
        this.logicBuilder = logicBuilder;
        this.fullFormApi = fullFormApi;
    }
    then(arg1, arg2) {
        let actionInstance;
        if (typeof arg1 === "function") {
            actionInstance = new BuilderAction(this.fullFormApi, "Hide field", { fieldName: "" }, arg1);
        }
        else {
            const actionType = arg1;
            const data = arg2;
            actionInstance = new BuilderAction(this.fullFormApi, actionType, data);
        }
        return new BuilderActionOperator(this.fullFormApi);
    }
}
class BuilderActionOperator {
    fullFormApi;
    constructor(fullFormApi) {
        this.fullFormApi = fullFormApi;
    }
    then(arg1, arg2) {
        let actionInstance;
        if (typeof arg1 === "function") {
            actionInstance = new BuilderAction(this.fullFormApi, "Hide field", { fieldName: "" }, arg1);
        }
        else {
            const actionType = arg1;
            const data = arg2;
            actionInstance = new BuilderAction(this.fullFormApi, actionType, data);
        }
        return new BuilderActionOperator(this.fullFormApi);
    }
}
class FormEvent {
    type;
    data;
    actions = [];
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    getTarget() {
        switch (this.type) {
            case "Field is updated":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onUpdate",
                };
            case "Field is valid":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onIsValid",
                };
            case "Field is validated":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onValidated",
                };
            case "Field is cleared":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onClear",
                };
            case "Field is reseted":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onReset",
                };
            case "Field confirm statement":
                return {
                    target: "field",
                    targetName: this.data
                        .fieldName,
                    key: "onConfirmStatement",
                };
            case "Field is hidden":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onHide",
                };
            case "Field is unhidden":
                return {
                    target: "field",
                    targetName: this.data.fieldName,
                    key: "onUnhide",
                };
            case "Section is valid":
                return {
                    target: "section",
                    targetName: this.data.sectionName,
                    key: "onReset",
                };
            case "Section is hidden":
                return {
                    target: "section",
                    targetName: this.data.sectionName,
                    key: "onHide",
                };
            case "Section is unhidden":
                return {
                    target: "section",
                    targetName: this.data
                        .sectionName,
                    key: "onUnhide",
                };
            case "Section is cleared":
                return {
                    target: "section",
                    targetName: this.data
                        .sectionName,
                    key: "onClear",
                };
            case "Section is reseted":
                return {
                    target: "section",
                    targetName: this.data
                        .sectionName,
                    key: "onReset",
                };
            case "Section is validated":
                return {
                    target: "section",
                    targetName: this.data
                        .sectionName,
                    key: "onValidated",
                };
            case "Form is ready":
                return {
                    target: "form",
                    key: "onReady",
                };
            case "Form is submited":
                return {
                    target: "form",
                    key: "onSubmit",
                };
            case "Form is updated":
                return {
                    target: "form",
                    key: "onUpdate",
                };
            case "Form is cleared":
                return {
                    target: "form",
                    key: "onClear",
                };
            case "Form is reseted":
                return {
                    target: "form",
                    key: "onReset",
                };
            case "Form is valid":
                return {
                    target: "form",
                    key: "onIsValid",
                };
            case "Form is validated":
                return {
                    target: "form",
                    key: "onValidated",
                };
            default:
                console.warn(`Submit64 -> unhandled event target : ${this.type}`);
                return {
                    target: null,
                };
        }
    }
    getActionCallback() {
        const allCallbacks = this.actions.map((action) => {
            return action.generateEvent();
        });
        return () => {
            allCallbacks.forEach((callback) => {
                callback();
            });
        };
    }
}
class BuilderAction {
    fullFormApi;
    type;
    data;
    customCallback;
    cyclicActionCalls = new Set();
    constructor(fullFormApi, type, data, customCallback) {
        this.fullFormApi = fullFormApi;
        this.type = type;
        this.data = data;
        this.customCallback = customCallback;
    }
    generateEvent() {
        const eventCallback = this.getEventCallback();
        return () => {
            if (this.cyclicActionCalls.has(this.type)) {
                return;
            }
            this.cyclicActionCalls.add(this.type);
            eventCallback();
            this.cyclicActionCalls.clear();
        };
    }
    getEventCallback() {
        if (this.customCallback) {
            return () => {
                this.customCallback?.(this.fullFormApi);
            };
        }
        switch (this.type) {
            case "Set field label":
                return this.setFieldLabel;
            case "Set field prefix":
                return this.setFieldPrefix;
            case "Set field suffix":
                return this.setFieldSuffix;
            case "Set field css class":
                return this.setFieldCssClass;
            case "Set field hint":
                return this.setFieldHint;
            case "Set field readonly state":
                return this.setFieldReadonlyState;
            case "Hide field":
                return this.hideField;
            case "Unhide field":
                return this.unhideField;
            case "Clear field":
                return this.clearField;
            case "Reset field":
                return this.resetField;
            case "Validate field":
                return this.validateField;
            case "Set section label":
                return this.setSectionLabel;
            case "Set section icon":
                return this.setSectionIcon;
            case "Set section css class":
                return this.setSectionCssClass;
            case "Set section readonly state":
                return this.setSectionReadonlyState;
            case "Hide section":
                return this.hideSection;
            case "Unhide section":
                return this.unHideSection;
            case "Clear section":
                return this.clearSection;
            case "Reset section":
                return this.resetSection;
            case "Validate section":
                return this.validateSection;
            case "Set form readonly state":
                return this.setFormReadonlyState;
            case "Set form css class":
                return this.setFormCssClass;
            case "Set form context":
                return this.setFormContext;
            case "Submit form":
                return this.submitForm;
            case "Clear form":
                return this.clearForm;
            case "Reset form":
                return this.resetForm;
            case "Validate form":
                return this.validateForm;
            default:
                console.warn(`Submit64 -> unhandled builder action callback generation : ${this.type}`);
                return () => { };
        }
    }
    setFieldLabel() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.label = data.newLabel;
        }
    }
    setFieldPrefix() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.prefix = data.newPrefix;
        }
    }
    setFieldSuffix() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.suffix = data.newSuffix;
        }
    }
    setFieldCssClass() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.cssClass = data.newCssClass;
        }
    }
    setFieldHint() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.hint = data.newHint;
        }
    }
    setFieldReadonlyState() {
        const data = this.data;
        const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
        if (fieldRef) {
            fieldRef.readonly = data.newState;
        }
    }
    hideField() {
        const data = this.data;
        const field = this.fullFormApi.getField(data.fieldName);
        if (field) {
            field.hide();
        }
    }
    unhideField() {
        const data = this.data;
        const field = this.fullFormApi.getField(data.fieldName);
        if (field) {
            field.unhide();
        }
    }
    clearField() {
        const data = this.data;
        const field = this.fullFormApi.getField(data.fieldName);
        if (field) {
            field.clear();
        }
    }
    resetField() {
        const data = this.data;
        const field = this.fullFormApi.getField(data.fieldName);
        if (field) {
            field.reset();
        }
    }
    validateField() {
        const data = this.data;
        const field = this.fullFormApi.getField(data.fieldName);
        if (field) {
            field.validate();
        }
    }
    setSectionLabel() {
        const data = this.data;
        const sectionRef = this.fullFormApi
            .getSection(data.sectionName)
            ?.getDataRef();
        if (sectionRef) {
            sectionRef.label = data.newLabel;
        }
    }
    setSectionIcon() {
        const data = this.data;
        const sectionRef = this.fullFormApi
            .getSection(data.sectionName)
            ?.getDataRef();
        if (sectionRef) {
            sectionRef.icon = data.newIcon;
        }
    }
    setSectionCssClass() {
        const data = this.data;
        const sectionRef = this.fullFormApi
            .getSection(data.sectionName)
            ?.getDataRef();
        if (sectionRef) {
            sectionRef.cssClass = data.newCssClass;
        }
    }
    setSectionReadonlyState() {
        const data = this.data;
        const sectionRef = this.fullFormApi
            .getSection(data.sectionName)
            ?.getDataRef();
        if (sectionRef) {
            sectionRef.readonly = data.newState;
        }
    }
    hideSection() {
        const data = this.data;
        const section = this.fullFormApi.getSection(data.sectionName);
        if (section) {
            section.hide();
        }
    }
    unHideSection() {
        const data = this.data;
        const section = this.fullFormApi.getSection(data.sectionName);
        if (section) {
            section.unhide();
        }
    }
    clearSection() {
        const data = this.data;
        const section = this.fullFormApi.getSection(data.sectionName);
        if (section) {
            section.clear();
        }
    }
    resetSection() {
        const data = this.data;
        const section = this.fullFormApi.getSection(data.sectionName);
        if (section) {
            section.reset();
        }
    }
    validateSection() {
        const data = this.data;
        const section = this.fullFormApi.getSection(data.sectionName);
        if (section) {
            section.validate();
        }
    }
    setFormReadonlyState() {
        const data = this.data;
        const formRef = this.fullFormApi.getFormRef().value;
        if (formRef) {
            formRef.readonly = data.newState;
        }
    }
    setFormCssClass() {
        const data = this.data;
        const formRef = this.fullFormApi.getFormRef().value;
        if (formRef) {
            formRef.cssClass = data.newCssClass;
        }
    }
    setFormContext() {
        const data = this.data;
        const formRef = this.fullFormApi.getFormRef().value;
        if (formRef) {
            formRef.context = data.newContext;
        }
    }
    submitForm() {
        this.fullFormApi.submitForm();
    }
    clearForm() {
        this.fullFormApi.clearForm();
    }
    resetForm() {
        this.fullFormApi.resetForm();
    }
    validateForm() {
        this.fullFormApi.validateForm();
    }
}
