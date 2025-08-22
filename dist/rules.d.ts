import { ValidationRule } from "quasar";
import { TFormFieldDef, TSubmit64FormProvider } from "./models";
export type TSubmit64Rule = {
    type: "required" | "absence" | "acceptance" | "inclusion" | "exclusion" | "backend" | "allowNull" | "allowBlank" | "positiveNumber" | "lessThanOrEqualNumber" | "lessThanNumber" | "greaterThanOrEqualNumber" | "greaterThanNumber" | "equalToNumber" | "otherThanNumber" | "numberIntegerOnly" | "numberNumericOnly" | "numberEvenOnly" | "numberOddOnly" | "lessThanOrEqualStringLength" | "lessThanStringLength" | "greaterThanOrEqualStringLength" | "greaterThanStringLength" | "equalToString" | "betweenStringLength" | "equalToStringLength" | "otherThanString" | "lessThanOrEqualDate" | "lessThanDate" | "greaterThanOrEqualDate" | "greaterThanDate" | "equalToDate" | "otherThanDate" | "validDate";
    backend_hint?: string;
};
declare function computeServerRules(metadataRules: TSubmit64Rule[], fieldType: TFormFieldDef["type"], formProvider: TSubmit64FormProvider): ValidationRule[];
export declare const Submit64Rules: {
    computeServerRules: typeof computeServerRules;
};
export {};
