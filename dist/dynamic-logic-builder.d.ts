import { TFormEvent, TFormFieldEvent, TFormSectionEvent, TSubmit64FormApi } from "./models";
export declare class DynamicLogicBuilder {
    private formApi;
    private events;
    private constructor();
    when<K extends keyof TWhenArgs>(arg1: K, arg2?: TWhenArgs[K]): BuilderOperator;
    static create(formApi: TSubmit64FormApi): DynamicLogicBuilder;
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
};
declare class FormEvent<K extends keyof TWhenArgs = keyof TWhenArgs> {
    type: K;
    data: TWhenArgs[K];
    formApi: TSubmit64FormApi;
    action: TThenCustomCallback;
    cyclicActionCallSet: Set<K>;
    constructor(type: K, data: TWhenArgs[K], formApi: TSubmit64FormApi);
    getTarget(): TFormEventTarget;
    getActionCallback(): () => void;
}
declare class BuilderOperator {
    private formEvent;
    constructor(formEvent: FormEvent);
    then(customAction: TThenCustomCallback): BuilderOperator;
}
type TThenCustomCallback = (formApi: TSubmit64FormApi) => void;
type TFormEventTarget = {
    target: "field";
    targetName: string;
    key: keyof TFormFieldEvent;
} | {
    target: "section";
    targetName: string;
    key: keyof TFormSectionEvent;
} | {
    target: "form";
    key: keyof TFormEvent;
} | {
    target: null;
};
export {};
