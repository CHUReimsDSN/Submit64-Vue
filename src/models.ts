import { type Component, type ComponentPublicInstance } from "vue";
import { QInput } from "quasar";
import { TSubmit64Rule } from "./rules";

type TRecord = {
  id: number | string;
} & unknown;
export type TResourceColumnMetaData = {
  raw_field_name: string;
  field_name: string;
  label_name: string;
  field_type: "string" | "number" | "date" | "boolean" | "object";
  association_name: string | null;
  association_type: string | null;
  association_class_name: string | null;
  rules: TSubmit64Rule[];
};
export type TFormSettings = {
  rulesBehaviour: "lazy" | "ondemande";
  stringDefaultMaxLength: number;
  textDefaultMaxLength: number;
  dateFormat: string;
  datetimeFormat: string;
};
export type TFormDef = {
  sections: TFormSection[];
};
export type TFormSection = {
  fields: TFormFieldDef[];
  label?: string;
  col?: number;
  row?: number;
  class?: string;
}
export type TFormFieldDef = {
  type: "string" | "text" | "date" | "select" | "checkbox";
  metadata: TResourceColumnMetaData;
  label?: string;
  hite?: string;
  rules?: QInput["rules"];
  component: Component;
};
export type TSubmit64Field = ComponentPublicInstance & {
  getValue: () => unknown;
  reset: () => void;
};
export type TSubmit64FormProps<T> = {
  resourceName: string;
  resourceId: TRecord['id'];
  getMetadata: (submit64Params: {
    resourceName: string;
  }) => Promise<TResourceColumnMetaData[]>;
  getResourceData: (submit64Params: {
    resourceName: string;
    resourceId: TRecord["id"];
  }) => Promise<T>;
  globalFormSettings?: TFormSettings;
};
export type TSubmit64Expose = {};
export type TFormStyleConfig = {
  fieldFilled?: boolean;
  fieldOutlined?: boolean;
  fieldStandout?: boolean;
  fieldBorderless?: boolean;
  fieldRounded?: boolean;
  fieldSquare?: boolean;
  fieldDense?: boolean;
  fieldHideBottomSpace?: boolean;
  fieldColor?: string;
  fieldBgColor?: string;
  fieldClass?: string;
};
