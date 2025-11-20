import { date } from "quasar";
import { TFormField, TSubmit64FormApi, TSubmit64ValidationRule } from "./models";

export type TSubmit64Rule = {
  type: // general
  | "required"
    | "absence"
    | "acceptance"
    | "inclusion"
    | "exclusion"
    | "backend"
    | "allowNull"
    | "allowBlank"

    // number
    | "positiveNumber"
    | "lessThanOrEqualNumber"
    | "lessThanNumber"
    | "greaterThanOrEqualNumber"
    | "greaterThanNumber"
    | "equalToNumber"
    | "otherThanNumber"
    | "numberIntegerOnly"
    | "numberNumericOnly"
    | "numberEvenOnly"
    | "numberOddOnly"

    // string
    | "lessThanOrEqualStringLength"
    | "lessThanStringLength"
    | "greaterThanOrEqualStringLength"
    | "greaterThanStringLength"
    | "equalToString"
    | "betweenStringLength"
    | "equalToStringLength"
    | "otherThanString"

    // date
    | "lessThanOrEqualDate"
    | "lessThanDate"
    | "greaterThanOrEqualDate"
    | "greaterThanDate"
    | "equalToDate"
    | "otherThanDate"
    | "validDate";

  backend_hint?: string;
};
type TSubmit64RuleOperateTo = TSubmit64Rule & {
  less_than?: number | string;
  greater_than?: number | string;
  format?: string;
  including?: string[];
  excluding?: string[];
  equal_to?: number;
  other_than?: string;
  min?: number;
  max?: number;
  compare_to?: string;
};
type TUpperRule = "allowNull" | "allowBlank";
function computeServerRules(
  metadataRules: TSubmit64Rule[],
  fieldType: TFormField["type"],
  formApi: TSubmit64FormApi
): TSubmit64ValidationRule[] {
  const form = formApi.form;
  const getCompareToValueRule = (
    rule: TSubmit64RuleOperateTo,
    operateTo: keyof TSubmit64RuleOperateTo,
    dateMode?: boolean
  ) => {
    if (rule[operateTo]) {
      if (!dateMode) {
        return () => rule[operateTo];
      }
      return () =>
        computedRuleDateFormatToFormFactoryFormat(rule[operateTo] as string);
    }
    if (rule.compare_to) {
      return () =>
        formApi.getField(rule.compare_to as string)?.getValueSerialized() ??
        "Submit64 error : missing comparator definition";
    }
    return () => "";
  };
  const computedRuleDateFormatToFormFactoryFormat = (
    ruleDate: string
  ): string => {
    return String(
      date.formatDate(
        date.extractDate(ruleDate, form.formSettings.backendDateFormat),
        form.formSettings.dateFormat
      )
    );
  };
  const rules: TSubmit64ValidationRule[] = [];
  const upperRules: TUpperRule[] = [];
  switch (fieldType) {
    case "date":
      rules.push(validDate(form.formSettings.dateFormat));
      break;
    case "datetime":
      rules.push(validDate(form.formSettings.datetimeFormat));
      break;
  }
  metadataRules.forEach((metadataRule) => {
    const rule = metadataRule as TSubmit64RuleOperateTo;
    switch (rule.type) {
      // general
      case "required":
        rules.push(required());
        break;
      case "absence":
        rules.push(absence());
        break;
      case "acceptance":
        rules.push(acceptance());
        break;
      case "inclusion":
        rules.push(including(rule.including!));
        break;
      case "exclusion":
        rules.push(excluding(rule.excluding!));
        break;
      case "backend":
        break;
      case "allowNull":
        upperRules.push("allowNull");
        break;
      case "allowBlank":
        upperRules.push("allowBlank");
        break;

      // number
      case "positiveNumber":
        rules.push(positiveNumber());
        break;
      case "lessThanOrEqualNumber":
        rules.push(
          lessThanOrEqualNumber(
            getCompareToValueRule(rule, "less_than") as () => number
          )
        );
        break;
      case "lessThanNumber":
        rules.push(
          lessThanNumber(
            getCompareToValueRule(rule, "less_than") as () => number
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        rules.push(
          greaterThanOrEqualNumber(
            getCompareToValueRule(rule, "greater_than") as () => number
          )
        );
        break;
      case "greaterThanNumber":
        rules.push(
          greaterThanNumber(
            getCompareToValueRule(rule, "greater_than") as () => number
          )
        );
        break;
      case "equalToNumber":
        rules.push(
          equalToNumber(getCompareToValueRule(rule, "equal_to") as () => number)
        );
        break;
      case "otherThanNumber":
        rules.push(
          otherThanNumber(
            getCompareToValueRule(rule, "other_than") as () => number
          )
        );
        break;
      case "numberIntegerOnly":
        rules.push(numberIntegerOnly());
        break;
      case "numberNumericOnly":
        rules.push(numberNumericOnly());
        break;
      case "numberEvenOnly":
        rules.push(numberEven());
        break;
      case "numberOddOnly":
        rules.push(numberOdd());
        break;

      // string
      case "lessThanOrEqualStringLength":
        rules.push(
          lessThanOrEqualStringLength(
            getCompareToValueRule(rule, "less_than") as () => number
          )
        );
        break;
      case "lessThanStringLength":
        rules.push(
          lessThanStringLength(
            getCompareToValueRule(rule, "less_than") as () => number
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        rules.push(
          greaterThanOrEqualStringLength(
            getCompareToValueRule(rule, "greater_than") as () => number
          )
        );
        break;
      case "greaterThanStringLength":
        rules.push(
          greaterThanStringLength(
            getCompareToValueRule(rule, "greater_than") as () => number
          )
        );
        break;
      case "equalToStringLength":
        rules.push(
          equalToStringLength(
            getCompareToValueRule(rule, "equal_to") as () => number
          )
        );
        break;
      case "equalToString":
        rules.push(
          equalToString(getCompareToValueRule(rule, "equal_to") as () => string)
        );
        break;
      case "betweenStringLength":
        rules.push(
          betweenStringLength(
            () => rule.min!,
            () => rule.max!
          )
        );
        break;
      case "otherThanString":
        rules.push(
          otherThanString(
            getCompareToValueRule(rule, "other_than") as () => string
          )
        );
        break;

      // date
      case "lessThanOrEqualDate":
        rules.push(
          lessThanOrEqualDate(
            getCompareToValueRule(rule, "less_than", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        rules.push(
          lessThanDate(
            getCompareToValueRule(rule, "less_than", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        rules.push(
          greaterThanOrEqualDate(
            getCompareToValueRule(rule, "greater_than", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        rules.push(
          greaterThanDate(
            getCompareToValueRule(rule, "greater_than", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        rules.push(
          equalToDate(
            getCompareToValueRule(rule, "equal_to", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        rules.push(
          otherThanDate(
            getCompareToValueRule(rule, "other_than", true) as () => string,
            form.formSettings.dateFormat
          )
        );
        break;
    }
  });
  if (upperRules.length > 0) {
    return upperRules.map((upperRule) => {
      switch (upperRule) {
        case "allowBlank":
          return allowBlank(rules);
        case "allowNull":
          return allowNull(rules);
      }
    });
  }
  return rules;
}

// general
function required() {
  return (val: unknown) => !!val || "Ce champ est requis";
}
function including(including: string[]) {
  return (val: unknown) =>
    including.includes(String(val)) ||
    `Doit être contenu dans ${including.toString()}`;
}
function excluding(excluding: string[]) {
  return (val: unknown) =>
    !excluding.includes(
      String(val) || `Ne doit pas être contenu dans ${including.toString()}`
    );
}
function absence() {
  return (val: unknown) => !val || "Ce champ doit être vide";
}
function acceptance() {
  return (val: unknown) => Boolean(val) || "Doit être accepté";
}
function allowNull(
  subRules: TSubmit64ValidationRule[]
): TSubmit64ValidationRule {
  return (val: unknown) => {
    if (val === null) {
      return true;
    }
    subRules.forEach((subRule) => {
      const subRuleResult = subRule(val);
      if (subRuleResult !== true) {
        return subRuleResult;
      }
    });
    return true;
  };
}
function allowBlank(
  subRules: TSubmit64ValidationRule[]
): TSubmit64ValidationRule {
  return (val: unknown) => {
    if (val === "") {
      return true;
    }
    subRules.forEach((subRule) => {
      const subRuleResult = subRule(val);
      if (subRuleResult !== true) {
        return subRuleResult;
      }
    });
    return true;
  };
}

// number
function positiveNumber() {
  return (val: unknown) => Number(val) > 0 || "Val. positive uniquement";
}
function lessThanOrEqualNumber(lessThan: () => number) {
  return (val: unknown) => {
    const lessThanVal = lessThan();
    return Number(val) <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
  };
}
function lessThanNumber(lessThan: () => number) {
  return (val: unknown) => {
    const lessThanVal = lessThan();
    return Number(val) < lessThanVal || `Inf. ${lessThanVal}`;
  };
}
function greaterThanOrEqualNumber(greaterThan: () => number) {
  return (val: unknown) => {
    const greaterThanVal = greaterThan();
    return Number(val) >= greaterThanVal || `Sup. ou égal à ${greaterThanVal}`;
  };
}
function greaterThanNumber(greaterThan: () => number) {
  return (val: unknown) => {
    const greaterThanVal = greaterThan();
    return Number(val) > greaterThanVal || `Sup. à ${greaterThanVal}`;
  };
}
function equalToNumber(equalTo: () => number, source?: string) {
  return (val: unknown) => {
    const equalToVal = equalTo();
    return (
      Number(val) === equalToVal ||
      `Égale à ${source ? "source (" + equalTo + ")" : equalToVal}`
    );
  };
}
function otherThanNumber(otherThan: () => number, source?: string) {
  return (val: unknown) => {
    const otherThanVal = otherThan();
    return (
      Number(val) !== otherThanVal ||
      `Doit être différent de ${
        source ? "source (" + otherThan + ")" : otherThan
      }`
    );
  };
}
function numberIntegerOnly() {
  return (val: unknown) =>
    /^-?\d+$/.test(String(val).trim()) || "Nombre entier uniquement";
}
function numberNumericOnly() {
  return (val: unknown) =>
    /^-?\d+(\.\d+)?$/.test(String(val).trim()) ||
    "Caractère numérique uniquement";
}
function numberEven() {
  return (val: unknown) =>
    (Number.isInteger(Number(val)) && Number(val) % 2 === 0) ||
    "Nombre pair uniquement";
}
function numberOdd() {
  return (val: unknown) =>
    (Number.isInteger(Number(val)) && Number(val) % 2 === 1) ||
    "Nombre impair uniquement";
}

// string
function lessThanOrEqualStringLength(lessThan: () => number) {
  return (val: unknown) => {
    const lessThanVal = lessThan();
    return String(val).length <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
  };
}
function lessThanStringLength(lessThan: () => number) {
  return (val: unknown) => {
    const lessThanValue = lessThan();
    return String(val).length < lessThanValue || `Inf. à ${lessThanValue}`;
  };
}
function greaterThanOrEqualStringLength(greaterThan: () => number) {
  return (val: unknown) => {
    const greaterThanValue = greaterThan();
    return (
      String(val).length >= greaterThanValue ||
      `Sup. ou égal à ${greaterThanValue}`
    );
  };
}
function greaterThanStringLength(greaterThan: () => number) {
  return (val: unknown) => {
    const greaterThanValue = greaterThan();
    return (
      String(val).length > greaterThanValue || `Sup. à ${greaterThanValue}`
    );
  };
}
function betweenStringLength(min: () => number, max: () => number) {
  return (val: unknown) => {
    const minValue = min();
    const maxValue = max();
    return (
      (String(val).length >= minValue && String(val).length <= maxValue) ||
      `Entre ${minValue} et ${maxValue}`
    );
  };
}
function equalToString(equalTo: () => string, source?: string) {
  return (val: unknown) => {
    const equalToValue = equalTo();
    return (
      String(val) === equalToValue ||
      `Égale à ${source ? "source (" + equalToValue + ")" : equalToValue}`
    );
  };
}
function equalToStringLength(equalTo: () => number) {
  return (val: unknown) => {
    const equalToVal = equalTo();
    return (
      String(val).length === equalToVal ||
      `Doit contenir ${equalToVal} caractères`
    );
  };
}
function otherThanString(otherThan: () => string) {
  return (val: unknown) => {
    const otherThanVal = otherThan();
    return (
      String(val) !== otherThanVal || `Doit être différent de ${otherThanVal}`
    );
  };
}

// date
function lessThanOrEqualDate(lessThan: () => string, format: string) {
  return (val: unknown) => {
    const lessThanValue = lessThan();
    const valExtracted = date.extractDate(String(val), format);
    const lessThanExtracted = date.extractDate(lessThanValue, format);
    return (
      valExtracted <= lessThanExtracted || `Inf. ou égal à ${lessThanValue}`
    );
  };
}
function lessThanDate(lessThan: () => string, format: string) {
  return (val: unknown) => {
    const lessThanValue = lessThan();
    const valExtracted = date.extractDate(String(val), format);
    const lessThanExtracted = date.extractDate(lessThanValue, format);
    return valExtracted < lessThanExtracted || `Inf. à ${lessThanValue}`;
  };
}
function greaterThanOrEqualDate(greaterThan: () => string, format: string) {
  return (val: unknown) => {
    const greaterThanValue = greaterThan();
    const valExtracted = date.extractDate(String(val), format);
    const greaterThanExtracted = date.extractDate(greaterThanValue, format);
    return (
      valExtracted >= greaterThanExtracted ||
      `Sup. ou égal à ${greaterThanValue}`
    );
  };
}
function greaterThanDate(greaterThan: () => string, format: string) {
  return (val: unknown) => {
    const greaterThanValue = greaterThan();
    const valExtracted = date.extractDate(String(val), format);
    const greaterThanExtracted = date.extractDate(greaterThanValue, format);
    return valExtracted > greaterThanExtracted || `Sup. à ${greaterThanValue}`;
  };
}
function equalToDate(equalTo: () => string, format: string) {
  return (val: unknown) => {
    const equalToValue = equalTo();
    const valExtracted = date.extractDate(String(val), format);
    const equalToExtracted = date.extractDate(equalToValue, format);
    return valExtracted === equalToExtracted || `Égale à ${valExtracted}`;
  };
}
function otherThanDate(otherThan: () => string, format: string) {
  return (val: unknown) => {
    const otherThanValue = otherThan();
    return (
      date.extractDate(String(val), format) !==
        date.extractDate(otherThanValue, format) ||
      `Doit être différent de ${otherThanValue}`
    );
  };
}
function validDate(format: string) {
  return (val: unknown) => {
    if (val === null || val === undefined || val === "") {
      return true;
    }
    return isStrictDate(val, format) || `Date invalide. Format : ${format}`;
  };
}

function isStrictDate(val: unknown, format: string) {
  if (typeof val !== "string" || !val.trim()) {
    return false;
  }
  const extractedDate = date.extractDate(val, format);
  if (!(extractedDate instanceof Date) || isNaN(extractedDate.getTime())) {
    return false;
  }
  const reformatted = date.formatDate(extractedDate, format);
  return reformatted === val;
}

export const Submit64Rules = {
  computeServerRules,
};
