export class DynamicLogicBuilder {
    formApi;
    events = [];
    constructor(formApi) {
        this.formApi = formApi;
    }
    when(arg1, arg2) {
        const eventType = arg1;
        const data = arg2;
        const formEvent = new FormEvent(eventType, data, this.formApi);
        this.events.push(formEvent);
        const operatorInstance = new BuilderOperator(formEvent);
        return operatorInstance;
    }
    static create(formApi) {
        const instance = new DynamicLogicBuilder(formApi);
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
class FormEvent {
    type;
    data;
    formApi;
    action = () => { };
    cyclicActionCallSet = new Set();
    constructor(type, data, formApi) {
        this.type = type;
        this.data = data;
        this.formApi = formApi;
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
            // case "Field confirm value statement":
            //   return {
            //     target: "field",
            //     targetName: (this.data as TWhenArgs["Field confirm value statement"])
            //       .fieldName,
            //     key: "onConfirmStatement",
            //   };
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
            case "Form submit is successful":
                return {
                    target: 'form',
                    key: 'onSubmitSuccess'
                };
            case "Form submit is unsuccessful":
                return {
                    target: 'form',
                    key: 'onSubmitUnsuccess'
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
        return () => {
            if (this.cyclicActionCallSet.has(this.type)) {
                return;
            }
            this.cyclicActionCallSet.add(this.type);
            this.action(this.formApi);
            this.cyclicActionCallSet.clear();
        };
    }
}
class BuilderOperator {
    formEvent;
    constructor(formEvent) {
        this.formEvent = formEvent;
    }
    then(customAction) {
        this.formEvent.action = customAction;
        return this;
    }
}
