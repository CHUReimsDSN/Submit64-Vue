import { date } from "quasar";

export type TSubmit64Rule = {
  type:
    | "required"
    | "positiveNumber"
    | "maxNumber"
    | "minNumber"
    | "maxString"
    | "minString"
    | "maxDate"
    | "minDate"
    | "validDate";
};
export type TSubmit64RuleMaxLength = TSubmit64Rule & {
  max: number;
};
export type TSubmit64RuleMinLength = TSubmit64Rule & {
  min: number;
};
export type TSubmit64RuleMaxDate = TSubmit64Rule & {
  max: string;
  format: string;
};
export type TSubmit64RuleMinDate = TSubmit64Rule & {
  min: string;
  format: string;
};
export type TSubmit64RuleValidDate = TSubmit64Rule & {
  format: string;
}

const required = (val: unknown) => !!val || "Ce champ est requis";
const positiveNumber = (val: unknown) =>
  Number(val) > 0 || "Val. positive uniquement";
const maxNumber = (maxNumber: number) => (val: unknown) =>
  Number(val) <= maxNumber || `Max. ${maxNumber}`;
const minNumber = (minNumber: number) => (val: unknown) =>
  Number(val) >= minNumber || `Min. ${minNumber}`;
const maxString = (maxLimit: number) => (val: unknown) =>
  String(val).length <= maxLimit || `Max. ${maxLimit}`;
const minString = (minLimit: number) => (val: unknown) =>
  String(val).length >= minLimit || `Min. ${minLimit}`;
const maxDate = (max: string, format: string) => (val: unknown) =>
  (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
    date.extractDate(String(val), format) <= date.extractDate(max, format)) ||
  `Max. ${date.formatDate(max, format)}`;
const minDate = (min: string, format: string) => (val: unknown) =>
  (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
    date.extractDate(String(val), format) >= date.extractDate(min, format)) ||
  `Min. ${date.formatDate(min, format)}`;
const validDate = (format: string) => (val: unknown) =>
  !Number.isNaN(date.extractDate(String(val), format).getTime()) ||
  "Date invalide";

export const Submit64Rules = {
  required,
  positiveNumber,
  maxNumber,
  minNumber,
  maxString,
  minString,
  maxDate,
  minDate,
  validDate,
};
