import { date, ValidationRule } from "quasar";
import { TFormFieldDef, TFormSettings } from "./models";

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
type TSubmit64RuleLessThan = TSubmit64Rule & {
  less_than?: number;
  compare_to?: string;
};
type TSubmit64RuleGreaterThan = TSubmit64Rule & {
  greater_than?: number;
  compare_to?: string;
};
type TSubmit64RuleLessThanDate = TSubmit64Rule & {
  less_than?: string;
  compare_to?: string;
  format: string;
};
type TSubmit64RuleGreaterThanDate = TSubmit64Rule & {
  greater_than?: string;
  compare_to?: string;
  format: string;
};
type TSubmit64RuleInclusion = TSubmit64Rule & {
  including: string[];
};
type TSubmit64RuleExclusion = TSubmit64Rule & {
  excluding: string[];
};
type TSubmit64RuleEqualNumber = TSubmit64Rule & {
  equal_to: number;
};
type TSubmit64RuleEqualString = TSubmit64Rule & {
  equal_to: string;
};
type TSubmit64RuleOtherThanString = TSubmit64Rule & {
  other_than: string;
};
type TSubmit64RuleOtherThanNumber = TSubmit64Rule & {
  other_than: number;
};
type TSubmit64RuleBetween = TSubmit64Rule & {
  min: number;
  max: number;
};
type TUpperRule = "allowNull" | "allowBlank";
type TSubmit64ValidationRule = (val: unknown) => boolean | string;

function computeServerRules(
  metadataRules: TSubmit64Rule[],
  formSettings: TFormSettings,
  fieldType: TFormFieldDef['type']
): ValidationRule[] {
  const rules: TSubmit64ValidationRule[] = [];
  const upperRules: TUpperRule[] = [];
  switch (fieldType) {
    case 'date':
        rules.push(validDate(formSettings.dateFormat));
  }
  metadataRules.forEach((rule) => {
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
        const ruleCastInclusion = rule as TSubmit64RuleInclusion;
        rules.push(including(ruleCastInclusion.including));
        break;
      case "exclusion":
        const ruleCastExclusion = rule as TSubmit64RuleExclusion;
        rules.push(excluding(ruleCastExclusion.excluding));
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
        const ruleCastLessthanOrEqualNumber = rule as TSubmit64RuleLessThan;
        if (ruleCastLessthanOrEqualNumber.less_than) {
          rules.push(
            lessThanOrEqualNumber(
              () => ruleCastLessthanOrEqualNumber.less_than!
            )
          );
          break;
        }
      case "lessThanNumber":
        const ruleCastLessThanNumber = rule as TSubmit64RuleLessThan;
        if (ruleCastLessThanNumber.less_than) {
          rules.push(lessThanNumber(() => ruleCastLessThanNumber.less_than!));
          break;
        }
      case "greaterThanOrEqualNumber":
        const ruleCastGreaterThanOrEqualNumber =
          rule as TSubmit64RuleGreaterThan;
        if (ruleCastGreaterThanOrEqualNumber.greater_than) {
          rules.push(
            greaterThanOrEqualNumber(
              () => ruleCastGreaterThanOrEqualNumber.greater_than!
            )
          );
          break;
        }
      case "greaterThanNumber":
        const ruleCastGreaterThanNumber = rule as TSubmit64RuleGreaterThan;
        if (ruleCastGreaterThanNumber.greater_than) {
          rules.push(
            greaterThanNumber(() => ruleCastGreaterThanNumber.greater_than!)
          );
          break;
        }
      case "equalToNumber":
        const ruleCastEqualToNumber = rule as TSubmit64RuleEqualNumber;
        if (ruleCastEqualToNumber.equal_to) {
          rules.push(equalToNumber(() => ruleCastEqualToNumber.equal_to!));
          break;
        }
      case "otherThanNumber":
        const ruleCastOtherThanNumber = rule as TSubmit64RuleOtherThanNumber;
        if (ruleCastOtherThanNumber.other_than) {
          rules.push(otherThanNumber(() => ruleCastOtherThanNumber.other_than));
          break;
        }
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
        const ruleCastLessThanOrEqualStringLength =
          rule as TSubmit64RuleLessThan;
        if (ruleCastLessThanOrEqualStringLength.less_than) {
          rules.push(
            lessThanOrEqualStringLength(
              () => ruleCastLessThanOrEqualStringLength.less_than!
            )
          );
          break;
        }
      case "lessThanStringLength":
        const ruleCastLessthanStringLength = rule as TSubmit64RuleLessThan;
        if (ruleCastLessthanStringLength.less_than) {
          rules.push(
            lessThanStringLength(() => ruleCastLessthanStringLength.less_than!)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const ruleCastGreaterThanOrEqualStringLength =
          rule as TSubmit64RuleGreaterThan;
        if (ruleCastGreaterThanOrEqualStringLength.greater_than) {
          rules.push(
            greaterThanOrEqualStringLength(
              () => ruleCastGreaterThanOrEqualStringLength.greater_than!
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const ruleCastGreaterThanStringLength =
          rule as TSubmit64RuleGreaterThan;
        if (ruleCastGreaterThanStringLength.greater_than) {
          rules.push(
            greaterThanStringLength(
              () => ruleCastGreaterThanStringLength.greater_than!
            )
          );
          break;
        }
      case "equalToString":
        const ruleCastEqualToString = rule as TSubmit64RuleEqualString;
        if (ruleCastEqualToString.equal_to) {
          rules.push(equalToString(() => ruleCastEqualToString.equal_to!));
          break;
        }
      case "betweenStringLength":
        const ruleBetweenStringLength = rule as TSubmit64RuleBetween;
        rules.push(
          betweenStringLength(
            () => ruleBetweenStringLength.min,
            () => ruleBetweenStringLength.max
          )
        );
        break;
      case "equalToStringLength":
        const ruleEqualToStringLength = rule as TSubmit64RuleEqualNumber;
        rules.push(equalToStringLength(() => ruleEqualToStringLength.equal_to));
        break;
      case "otherThanString":
        const ruleOtherThanString = rule as TSubmit64RuleOtherThanString;
        rules.push(otherThanString(() => ruleOtherThanString.other_than));
        break;

      // date
      case "lessThanOrEqualDate":
        const ruleLessthanOrEqualDate = rule as TSubmit64RuleLessThanDate;
        rules.push(
          lessThanOrEqualDate(
            () => ruleLessthanOrEqualDate.less_than!,
            formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const ruleLessThanDate = rule as TSubmit64RuleLessThanDate;
        rules.push(
          lessThanDate(
            () => ruleLessThanDate.less_than!,
            formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const ruleGreaterThanOrEqualDate = rule as TSubmit64RuleGreaterThanDate;
        rules.push(
          greaterThanOrEqualDate(
            () => ruleGreaterThanOrEqualDate.greater_than!,
            formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ruleGreaterThanDate = rule as TSubmit64RuleGreaterThanDate;
        rules.push(
          greaterThanDate(
            () => ruleGreaterThanDate.greater_than!,
            formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        const ruleEqualToDate = rule as TSubmit64RuleEqualString;
        rules.push(
          equalToDate(
            () => ruleEqualToDate.equal_to!,
            formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const ruleOtherThanDate = rule as TSubmit64RuleOtherThanString;
        rules.push(
          otherThanDate(
            () => ruleOtherThanDate.other_than!,
            formSettings.dateFormat
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
  const equalToVal = equalTo();
  return (val: unknown) =>
    Number(val) === equalToVal ||
    `Égale à ${source ? "source (" + equalTo + ")" : equalToVal}`;
}
function otherThanNumber(otherThan: () => number, source?: string) {
  const otherThanVal = otherThan();
  return (val: unknown) =>
    Number(val) !== otherThanVal ||
    `Doit être différent de ${
      source ? "source (" + otherThan + ")" : otherThan
    }`;
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
  const lessThanVal = lessThan();
  return (val: unknown) =>
    String(val).length <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
}
function lessThanStringLength(lessThan: () => number) {
  const lessThanValue = lessThan();
  return (val: unknown) =>
    String(val).length < lessThanValue || `Inf. à ${lessThanValue}`;
}
function greaterThanOrEqualStringLength(greaterThan: () => number) {
  const greaterThanValue = greaterThan();
  return (val: unknown) =>
    String(val).length >= greaterThanValue ||
    `Sup. ou égal à ${greaterThanValue}`;
}
function greaterThanStringLength(greaterThan: () => number) {
  const greaterThanValue = greaterThan();
  return (val: unknown) =>
    String(val).length > greaterThanValue || `Sup. à ${greaterThanValue}`;
}
function betweenStringLength(min: () => number, max: () => number) {
  const minValue = min();
  const maxValue = max();
  return (val: unknown) =>
    (String(val).length >= minValue && String(val).length <= maxValue) ||
    `Entre ${minValue} et ${maxValue}`;
}
function equalToString(equalTo: () => string, source?: string) {
  const equalToValue = equalTo();
  return (val: unknown) =>
    String(val) === equalToValue ||
    `Égale à ${source ? "source (" + equalToValue + ")" : equalToValue}`;
}
function equalToStringLength(equalTo: () => number) {
  const equalToVal = equalTo();
  return (val: unknown) =>
    String(val).length === equalToVal ||
    `Doit contenir ${equalToVal} caractères`;
}
function otherThanString(otherThan: () => string, source?: string) {
  const otherThanVal = otherThan();
  return (val: unknown) =>
    String(val) !== otherThanVal ||
    `Doit être différent de ${
      source ? "source (" + otherThanVal + ")" : otherThanVal
    }`;
}

// date
function lessThanOrEqualDate(lessThan: () => string, format: string) {
  const lessThanValue = lessThan();
  return (val: unknown) =>
    (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
      date.extractDate(String(val), format) <=
        date.extractDate(lessThanValue, format)) ||
    `Inf. ou égal à ${date.formatDate(lessThanValue, format)}`;
}
function lessThanDate(lessThan: () => string, format: string) {
  const lessThanValue = lessThan();
  return (val: unknown) =>
    (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
      date.extractDate(String(val), format) <
        date.extractDate(lessThanValue, format)) ||
    `Inf. à ${date.formatDate(lessThanValue, format)}`;
}
function greaterThanOrEqualDate(greaterThan: () => string, format: string) {
  const greaterThanValue = greaterThan();
  return (val: unknown) =>
    (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
      date.extractDate(String(val), format) >=
        date.extractDate(greaterThanValue, format)) ||
    `Sup. ou égal à ${date.formatDate(greaterThanValue, format)}`;
}
function greaterThanDate(greaterThan: () => string, format: string) {
  const greaterThanValue = greaterThan();
  return (val: unknown) =>
    (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
      date.extractDate(String(val), format) >
        date.extractDate(greaterThanValue, format)) ||
    `Sup. à ${date.formatDate(greaterThanValue, format)}`;
}
function equalToDate(equalTo: () => string, format: string, source?: string) {
  const equalToValue = equalTo();
  return (val: unknown) =>
    date.extractDate(String(val), format) ===
      date.extractDate(equalToValue, format) ||
    `Égale à ${
      source
        ? "source (" + date.extractDate(equalToValue, format) + ")"
        : date.extractDate(equalToValue, format)
    }`;
}
function otherThanDate(
  otherThan: () => string,
  format: string,
  source?: string
) {
  const otherThanValue = otherThan();
  return (val: unknown) =>
    date.extractDate(String(val), format) !==
      date.extractDate(otherThanValue, format) ||
    `Doit être différent de ${
      source ? "source (" + otherThanValue + ")" : otherThanValue
    }`;
}
function validDate(format: string) {
  return (val: unknown) =>
    !Number.isNaN(date.extractDate(String(val), format).getTime()) ||
    "Date invalide";
}

export const Submit64Rules = {
  computeServerRules,
};
