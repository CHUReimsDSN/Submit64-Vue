import { TContext, TFormEvent, TFormFieldEvent, TFormSectionEvent, TSubmit64FullFormApi } from "./models";
export declare class DynamicLogicBuilder {
    private fullFormApi;
    private events;
    private constructor();
    when<K extends keyof TWhenArgs>(arg1: K, arg2: TWhenArgs[K]): BuilderOperator;
    static create(fullFormApi: TSubmit64FullFormApi): DynamicLogicBuilder;
    static getEventsObjectFromInstance(instance: DynamicLogicBuilder): {
        fields: Record<string, TFormFieldEvent>;
        sections: Record<string, TFormSectionEvent>;
        form: TFormEvent;
    };
}
type TWhenArgs = {
    "Field is updated": {
        fieldName: string;
    };
    "Field is valid": {
        fieldName: string;
    };
    "Field is validated": {
        fieldName: string;
    };
    "Field is cleared": {
        fieldName: string;
    };
    "Field is reseted": {
        fieldName: string;
    };
    "Field confirm statement": {
        fieldName: string;
        statement: () => void;
    };
    "Field is hidden": {
        fieldName: string;
    };
    "Field is unhidden": {
        fieldName: string;
    };
    "Section is valid": {
        sectionName: string;
    };
    "Section is validated": {
        sectionName: string;
    };
    "Section is hidden": {
        sectionName: string;
    };
    "Section is unhidden": {
        sectionName: string;
    };
    "Section is cleared": {
        sectionName: string;
    };
    "Section is reseted": {
        sectionName: string;
    };
    "Form is ready": undefined;
    "Form is submited": undefined;
    "Form is updated": undefined;
    "Form is cleared": undefined;
    "Form is reseted": undefined;
    "Form is valid": undefined;
    "Form is validated": undefined;
    "Function is called": {
        functionToListenTo: () => void;
    };
};
declare class BuilderOperator {
    private logicBuilder;
    private fullFormApi;
    constructor(logicBuilder: DynamicLogicBuilder, fullFormApi: TSubmit64FullFormApi);
    then<K extends keyof TThenArgs>(actionType: K, data: TThenArgs[K]): BuilderActionOperator;
    then(customAction: TThenCustomCallback, _: undefined): BuilderActionOperator;
}
declare class BuilderActionOperator {
    private fullFormApi;
    constructor(fullFormApi: TSubmit64FullFormApi);
    then<K extends keyof TThenArgs>(actionType: K, data: TThenArgs[K]): BuilderActionOperator;
    then(customAction: TThenCustomCallback): BuilderActionOperator;
}
type TThenArgs = {
    "Set field label": {
        fieldName: string;
        newLabel: string;
    };
    "Set field prefix": {
        fieldName: string;
        newPrefix: string;
    };
    "Set field suffix": {
        fieldName: string;
        newSuffix: string;
    };
    "Set field css class": {
        fieldName: string;
        newCssClass: string;
    };
    "Set field hint": {
        fieldName: string;
        newHint: string;
    };
    "Set field readonly state": {
        fieldName: string;
        newState: boolean;
    };
    "Hide field": {
        fieldName: string;
    };
    "Unhide field": {
        fieldName: string;
    };
    "Clear field": {
        fieldName: string;
    };
    "Reset field": {
        fieldName: string;
    };
    "Validate field": {
        fieldName: string;
    };
    "Set section label": {
        sectionName: string;
        newLabel: string;
    };
    "Set section icon": {
        sectionName: string;
        newIcon: string;
    };
    "Set section css class": {
        sectionName: string;
        newCssClass: string;
    };
    "Set section readonly state": {
        sectionName: string;
        newState: boolean;
    };
    "Hide section": {
        sectionName: string;
    };
    "Unhide section": {
        sectionName: string;
    };
    "Validate section": {
        sectionName: string;
    };
    "Reset section": {
        sectionName: string;
    };
    "Clear section": {
        sectionName: string;
    };
    "Set form readonly state": {
        newState: boolean;
    };
    "Set form css class": {
        newCssClass: string;
    };
    "Set form context": {
        newContext: TContext;
    };
    "Submit form": undefined;
    "Clear form": undefined;
    "Reset form": undefined;
    "Validate form": undefined;
};
type TThenCustomCallback = (fullFormApi: TSubmit64FullFormApi) => void;
export {};
