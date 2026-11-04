import type { TFormBindings, TComponentBindingCb } from "./models";
declare function getDefaultFormBindings(cb: TComponentBindingCb): TFormBindings;
declare function getEmptyDefaultBindings(): TFormBindings;
declare function getDefaultBindingCallback(): TComponentBindingCb;
export declare const Bindings: {
    getDefaultFormBindings: typeof getDefaultFormBindings;
    getEmptyDefaultBindings: typeof getEmptyDefaultBindings;
    getDefaultBindingCallback: typeof getDefaultBindingCallback;
};
export {};
