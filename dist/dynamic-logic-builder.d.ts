import type { TFormEvent, TFormFieldEvent, TFormSectionEvent, TSubmit64FormApi, TSubmit64EventWhen } from "./models";
export declare class DynamicLogicBuilder {
    private formApi;
    private events;
    private constructor();
    when<K extends keyof TSubmit64EventWhen>(arg1: K, arg2?: TSubmit64EventWhen[K]): BuilderOperator;
    static create(formApi: TSubmit64FormApi): DynamicLogicBuilder;
    static getEventsObjectFromInstance(instance: DynamicLogicBuilder): {
        fields: Record<string, TFormFieldEvent>;
        sections: Record<string, TFormSectionEvent>;
        form: TFormEvent;
    };
}
declare class FormEvent<K extends keyof TSubmit64EventWhen = keyof TSubmit64EventWhen> {
    type: K;
    data: TSubmit64EventWhen[K];
    formApi: TSubmit64FormApi;
    action: TThenCustomCallback;
    cyclicActionCallSet: Set<K>;
    constructor(type: K, data: TSubmit64EventWhen[K], formApi: TSubmit64FormApi);
    getTarget(): TFormEventTarget;
    getActionCallback(): () => void;
}
declare class BuilderOperator {
    private formEvent;
    constructor(formEvent: FormEvent);
    then(customAction: TThenCustomCallback): BuilderOperator;
}
type TThenCustomCallback = (formApi: TSubmit64FormApi) => void | Promise<void>;
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
