import { TFormField, TSubmit64FormApi, TSubmit64ValidationRule } from "./models";
export type TSubmit64Rule = {
    type: "required" | "absence" | "acceptance" | "inclusion" | "exclusion" | "backend" | "allowNull" | "allowBlank" | "positiveNumber" | "lessThanOrEqualNumber" | "lessThanNumber" | "greaterThanOrEqualNumber" | "greaterThanNumber" | "equalToNumber" | "otherThanNumber" | "numberIntegerOnly" | "numberNumericOnly" | "numberEvenOnly" | "numberOddOnly" | "lessThanOrEqualStringLength" | "lessThanStringLength" | "greaterThanOrEqualStringLength" | "greaterThanStringLength" | "equalToString" | "betweenStringLength" | "equalToStringLength" | "otherThanString" | "lessThanOrEqualDate" | "lessThanDate" | "greaterThanOrEqualDate" | "greaterThanDate" | "equalToDate" | "otherThanDate" | "validDate" | "allowFileContentType" | "lessThanOrEqualFileLength" | "greaterThanOrEqualFileLength" | "equalToFileLength" | "lessThanOrEqualFileCount" | "greaterThanOrEqualFileCount" | "lessThanOrEqualTotalFileSize" | "greaterThanOrEqualTotalFileSize" | "equalToTotalFileSize";
    backend_hint?: string;
};
declare function computeServerRules(metadataRules: TSubmit64Rule[], fieldType: TFormField["type"], formApi: TSubmit64FormApi): TSubmit64ValidationRule[];
export declare const Submit64Rules: {
    computeServerRules: typeof computeServerRules;
};
export {};
