import { date } from "quasar";
function computeServerRules(metadataRules, formFactorySettings, form, fieldType) {
    const computedRuleDateFormatToFormFactoryFormat = (ruleDate) => {
        return String(date.formatDate(date.extractDate(ruleDate, form.backendDateFormat), formFactorySettings.dateFormat));
    };
    const rules = [];
    const upperRules = [];
    switch (fieldType) {
        case "date":
            rules.push(validDate(formFactorySettings.dateFormat));
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
                const ruleCastInclusion = rule;
                rules.push(including(ruleCastInclusion.including));
                break;
            case "exclusion":
                const ruleCastExclusion = rule;
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
                const ruleCastLessthanOrEqualNumber = rule;
                if (ruleCastLessthanOrEqualNumber.less_than) {
                    rules.push(lessThanOrEqualNumber(() => ruleCastLessthanOrEqualNumber.less_than));
                    break;
                }
            case "lessThanNumber":
                const ruleCastLessThanNumber = rule;
                if (ruleCastLessThanNumber.less_than) {
                    rules.push(lessThanNumber(() => ruleCastLessThanNumber.less_than));
                    break;
                }
            case "greaterThanOrEqualNumber":
                const ruleCastGreaterThanOrEqualNumber = rule;
                if (ruleCastGreaterThanOrEqualNumber.greater_than) {
                    rules.push(greaterThanOrEqualNumber(() => ruleCastGreaterThanOrEqualNumber.greater_than));
                    break;
                }
            case "greaterThanNumber":
                const ruleCastGreaterThanNumber = rule;
                if (ruleCastGreaterThanNumber.greater_than) {
                    rules.push(greaterThanNumber(() => ruleCastGreaterThanNumber.greater_than));
                    break;
                }
            case "equalToNumber":
                const ruleCastEqualToNumber = rule;
                if (ruleCastEqualToNumber.equal_to) {
                    rules.push(equalToNumber(() => ruleCastEqualToNumber.equal_to));
                    break;
                }
            case "otherThanNumber":
                const ruleCastOtherThanNumber = rule;
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
                const ruleCastLessThanOrEqualStringLength = rule;
                if (ruleCastLessThanOrEqualStringLength.less_than) {
                    rules.push(lessThanOrEqualStringLength(() => ruleCastLessThanOrEqualStringLength.less_than));
                    break;
                }
            case "lessThanStringLength":
                const ruleCastLessthanStringLength = rule;
                if (ruleCastLessthanStringLength.less_than) {
                    rules.push(lessThanStringLength(() => ruleCastLessthanStringLength.less_than));
                    break;
                }
            case "greaterThanOrEqualStringLength":
                const ruleCastGreaterThanOrEqualStringLength = rule;
                if (ruleCastGreaterThanOrEqualStringLength.greater_than) {
                    rules.push(greaterThanOrEqualStringLength(() => ruleCastGreaterThanOrEqualStringLength.greater_than));
                    break;
                }
            case "greaterThanStringLength":
                const ruleCastGreaterThanStringLength = rule;
                if (ruleCastGreaterThanStringLength.greater_than) {
                    rules.push(greaterThanStringLength(() => ruleCastGreaterThanStringLength.greater_than));
                    break;
                }
            case "equalToString":
                const ruleCastEqualToString = rule;
                if (ruleCastEqualToString.equal_to) {
                    rules.push(equalToString(() => ruleCastEqualToString.equal_to));
                    break;
                }
            case "betweenStringLength":
                const ruleBetweenStringLength = rule;
                rules.push(betweenStringLength(() => ruleBetweenStringLength.min, () => ruleBetweenStringLength.max));
                break;
            case "equalToStringLength":
                const ruleEqualToStringLength = rule;
                rules.push(equalToStringLength(() => ruleEqualToStringLength.equal_to));
                break;
            case "otherThanString":
                const ruleOtherThanString = rule;
                rules.push(otherThanString(() => ruleOtherThanString.other_than));
                break;
            // date
            case "lessThanOrEqualDate":
                const ruleLessthanOrEqualDate = rule;
                rules.push(lessThanOrEqualDate(() => computedRuleDateFormatToFormFactoryFormat(ruleLessthanOrEqualDate.less_than), formFactorySettings.dateFormat));
                break;
            case "lessThanDate":
                const ruleLessThanDate = rule;
                rules.push(lessThanDate(() => computedRuleDateFormatToFormFactoryFormat(ruleLessThanDate.less_than), formFactorySettings.dateFormat));
                break;
            case "greaterThanOrEqualDate":
                const ruleGreaterThanOrEqualDate = rule;
                rules.push(greaterThanOrEqualDate(() => computedRuleDateFormatToFormFactoryFormat(ruleGreaterThanOrEqualDate.greater_than), formFactorySettings.dateFormat));
                break;
            case "greaterThanDate":
                const ruleGreaterThanDate = rule;
                rules.push(greaterThanDate(() => computedRuleDateFormatToFormFactoryFormat(ruleGreaterThanDate.greater_than), formFactorySettings.dateFormat));
                break;
            case "equalToDate":
                const ruleEqualToDate = rule;
                rules.push(equalToDate(() => computedRuleDateFormatToFormFactoryFormat(ruleEqualToDate.equal_to), formFactorySettings.dateFormat));
                break;
            case "otherThanDate":
                const ruleOtherThanDate = rule;
                rules.push(otherThanDate(() => computedRuleDateFormatToFormFactoryFormat(ruleOtherThanDate.other_than), formFactorySettings.dateFormat));
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
    return (val) => !!val || "Ce champ est requis";
}
function including(including) {
    return (val) => including.includes(String(val)) ||
        `Doit être contenu dans ${including.toString()}`;
}
function excluding(excluding) {
    return (val) => !excluding.includes(String(val) || `Ne doit pas être contenu dans ${including.toString()}`);
}
function absence() {
    return (val) => !val || "Ce champ doit être vide";
}
function acceptance() {
    return (val) => Boolean(val) || "Doit être accepté";
}
function allowNull(subRules) {
    return (val) => {
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
function allowBlank(subRules) {
    return (val) => {
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
    return (val) => Number(val) > 0 || "Val. positive uniquement";
}
function lessThanOrEqualNumber(lessThan) {
    return (val) => {
        const lessThanVal = lessThan();
        return Number(val) <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
    };
}
function lessThanNumber(lessThan) {
    return (val) => {
        const lessThanVal = lessThan();
        return Number(val) < lessThanVal || `Inf. ${lessThanVal}`;
    };
}
function greaterThanOrEqualNumber(greaterThan) {
    return (val) => {
        const greaterThanVal = greaterThan();
        return Number(val) >= greaterThanVal || `Sup. ou égal à ${greaterThanVal}`;
    };
}
function greaterThanNumber(greaterThan) {
    return (val) => {
        const greaterThanVal = greaterThan();
        return Number(val) > greaterThanVal || `Sup. à ${greaterThanVal}`;
    };
}
function equalToNumber(equalTo, source) {
    const equalToVal = equalTo();
    return (val) => Number(val) === equalToVal ||
        `Égale à ${source ? "source (" + equalTo + ")" : equalToVal}`;
}
function otherThanNumber(otherThan, source) {
    const otherThanVal = otherThan();
    return (val) => Number(val) !== otherThanVal ||
        `Doit être différent de ${source ? "source (" + otherThan + ")" : otherThan}`;
}
function numberIntegerOnly() {
    return (val) => /^-?\d+$/.test(String(val).trim()) || "Nombre entier uniquement";
}
function numberNumericOnly() {
    return (val) => /^-?\d+(\.\d+)?$/.test(String(val).trim()) ||
        "Caractère numérique uniquement";
}
function numberEven() {
    return (val) => (Number.isInteger(Number(val)) && Number(val) % 2 === 0) ||
        "Nombre pair uniquement";
}
function numberOdd() {
    return (val) => (Number.isInteger(Number(val)) && Number(val) % 2 === 1) ||
        "Nombre impair uniquement";
}
// string
function lessThanOrEqualStringLength(lessThan) {
    const lessThanVal = lessThan();
    return (val) => String(val).length <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
}
function lessThanStringLength(lessThan) {
    const lessThanValue = lessThan();
    return (val) => String(val).length < lessThanValue || `Inf. à ${lessThanValue}`;
}
function greaterThanOrEqualStringLength(greaterThan) {
    const greaterThanValue = greaterThan();
    return (val) => String(val).length >= greaterThanValue ||
        `Sup. ou égal à ${greaterThanValue}`;
}
function greaterThanStringLength(greaterThan) {
    const greaterThanValue = greaterThan();
    return (val) => String(val).length > greaterThanValue || `Sup. à ${greaterThanValue}`;
}
function betweenStringLength(min, max) {
    const minValue = min();
    const maxValue = max();
    return (val) => (String(val).length >= minValue && String(val).length <= maxValue) ||
        `Entre ${minValue} et ${maxValue}`;
}
function equalToString(equalTo, source) {
    const equalToValue = equalTo();
    return (val) => String(val) === equalToValue ||
        `Égale à ${source ? "source (" + equalToValue + ")" : equalToValue}`;
}
function equalToStringLength(equalTo) {
    const equalToVal = equalTo();
    return (val) => String(val).length === equalToVal ||
        `Doit contenir ${equalToVal} caractères`;
}
function otherThanString(otherThan, source) {
    const otherThanVal = otherThan();
    return (val) => String(val) !== otherThanVal ||
        `Doit être différent de ${source ? "source (" + otherThanVal + ")" : otherThanVal}`;
}
// date
function lessThanOrEqualDate(lessThan, format) {
    const lessThanValue = lessThan();
    return (val) => (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
        date.extractDate(String(val), format) <=
            date.extractDate(lessThanValue, format)) ||
        `Inf. ou égal à ${date.formatDate(lessThanValue, format)}`;
}
function lessThanDate(lessThan, format) {
    const lessThanValue = lessThan();
    return (val) => (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
        date.extractDate(String(val), format) <
            date.extractDate(lessThanValue, format)) ||
        `Inf. à ${date.formatDate(lessThanValue, format)}`;
}
function greaterThanOrEqualDate(greaterThan, format) {
    const greaterThanValue = greaterThan();
    return (val) => (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
        date.extractDate(String(val), format) >=
            date.extractDate(greaterThanValue, format)) ||
        `Sup. ou égal à ${date.formatDate(greaterThanValue, format)}`;
}
function greaterThanDate(greaterThan, format) {
    const greaterThanValue = greaterThan();
    return (val) => (!Number.isNaN(date.extractDate(String(val), format).getTime()) &&
        date.extractDate(String(val), format) >
            date.extractDate(greaterThanValue, format)) ||
        `Sup. à ${date.formatDate(greaterThanValue, format)}`;
}
function equalToDate(equalTo, format, source) {
    const equalToValue = equalTo();
    return (val) => date.extractDate(String(val), format) ===
        date.extractDate(equalToValue, format) ||
        `Égale à ${source
            ? "source (" + date.extractDate(equalToValue, format) + ")"
            : date.extractDate(equalToValue, format)}`;
}
function otherThanDate(otherThan, format, source) {
    const otherThanValue = otherThan();
    return (val) => date.extractDate(String(val), format) !==
        date.extractDate(otherThanValue, format) ||
        `Doit être différent de ${source ? "source (" + otherThanValue + ")" : otherThanValue}`;
}
function validDate(format) {
    return (val) => !Number.isNaN(date.extractDate(String(val), format).getTime()) ||
        "Date invalide";
}
export const Submit64Rules = {
    computeServerRules,
};
