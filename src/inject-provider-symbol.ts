import { InjectionKey } from "vue";
import type { TSubmit64Field } from "./models";

export const submit64FormProviderSymbol = Symbol() as InjectionKey<{
    registerRef: (fieldRef: TSubmit64Field) => void;
}>
