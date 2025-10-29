import { date } from "quasar";
function computeServerRules(metadataRules, fieldType, formProvider) {
    const formFactorySettings = formProvider.getFormFactoryInstance().formSettings;
    const form = formProvider.getForm();
    const getCompareToValueRule = (rule, operateTo, dateMode) => {
        if (rule[operateTo]) {
            if (!dateMode) {
                return () => rule[operateTo];
            }
            return () => computedRuleDateFormatToFormFactoryFormat(rule[operateTo]);
        }
        if (rule.compare_to) {
            return () => formProvider.getFieldDataByFieldName(rule.compare_to) ??
                "Submit64 error : missing comparator definition";
        }
        return () => "";
    };
    const computedRuleDateFormatToFormFactoryFormat = (ruleDate) => {
        return String(date.formatDate(date.extractDate(ruleDate, form.backendDateFormat), formFactorySettings.dateFormat));
    };
    const rules = [];
    const upperRules = [];
    switch (fieldType) {
        case "date":
            rules.push(validDate(formFactorySettings.dateFormat));
        case "datetime":
            rules.push(validDate(formFactorySettings.datetimeFormat));
        case "number":
            rules.push(validNumber());
    }
    metadataRules.forEach((metadataRule) => {
        const rule = metadataRule;
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
                rules.push(including(rule.including));
                break;
            case "exclusion":
                rules.push(excluding(rule.excluding));
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
                rules.push(lessThanOrEqualNumber(getCompareToValueRule(rule, "less_than")));
                break;
            case "lessThanNumber":
                rules.push(lessThanNumber(getCompareToValueRule(rule, "less_than")));
                break;
            case "greaterThanOrEqualNumber":
                rules.push(greaterThanOrEqualNumber(getCompareToValueRule(rule, "greater_than")));
                break;
            case "greaterThanNumber":
                rules.push(greaterThanNumber(getCompareToValueRule(rule, "greater_than")));
                break;
            case "equalToNumber":
                rules.push(equalToNumber(getCompareToValueRule(rule, "equal_to")));
                break;
            case "otherThanNumber":
                rules.push(otherThanNumber(getCompareToValueRule(rule, "other_than")));
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
                rules.push(lessThanOrEqualStringLength(getCompareToValueRule(rule, "less_than")));
                break;
            case "lessThanStringLength":
                rules.push(lessThanStringLength(getCompareToValueRule(rule, "less_than")));
                break;
            case "greaterThanOrEqualStringLength":
                rules.push(greaterThanOrEqualStringLength(getCompareToValueRule(rule, "greater_than")));
                break;
            case "greaterThanStringLength":
                rules.push(greaterThanStringLength(getCompareToValueRule(rule, "greater_than")));
                break;
            case "equalToStringLength":
                rules.push(equalToStringLength(getCompareToValueRule(rule, "equal_to")));
                break;
            case "equalToString":
                rules.push(equalToString(getCompareToValueRule(rule, "equal_to")));
                break;
            case "betweenStringLength":
                rules.push(betweenStringLength(() => rule.min, () => rule.max));
                break;
            case "otherThanString":
                rules.push(otherThanString(getCompareToValueRule(rule, "other_than")));
                break;
            // date
            case "lessThanOrEqualDate":
                rules.push(lessThanOrEqualDate(getCompareToValueRule(rule, "less_than", true), formFactorySettings.dateFormat));
                break;
            case "lessThanDate":
                rules.push(lessThanDate(getCompareToValueRule(rule, "less_than", true), formFactorySettings.dateFormat));
                break;
            case "greaterThanOrEqualDate":
                rules.push(greaterThanOrEqualDate(getCompareToValueRule(rule, "greater_than", true), formFactorySettings.dateFormat));
                break;
            case "greaterThanDate":
                rules.push(greaterThanDate(getCompareToValueRule(rule, "greater_than", true), formFactorySettings.dateFormat));
                break;
            case "equalToDate":
                rules.push(equalToDate(getCompareToValueRule(rule, "equal_to", true), formFactorySettings.dateFormat));
                break;
            case "otherThanDate":
                rules.push(otherThanDate(getCompareToValueRule(rule, "other_than", true), formFactorySettings.dateFormat));
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
function validNumber() {
    return (val) => {
        const regex = /^[0-9,b]+$/;
        return regex.test(String(val)) || "Nombre incorrect";
    };
}
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
    return (val) => {
        const equalToVal = equalTo();
        return (Number(val) === equalToVal ||
            `Égale à ${source ? "source (" + equalTo + ")" : equalToVal}`);
    };
}
function otherThanNumber(otherThan, source) {
    return (val) => {
        const otherThanVal = otherThan();
        return (Number(val) !== otherThanVal ||
            `Doit être différent de ${source ? "source (" + otherThan + ")" : otherThan}`);
    };
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
    return (val) => {
        const lessThanVal = lessThan();
        return String(val).length <= lessThanVal || `Inf. ou égal à ${lessThanVal}`;
    };
}
function lessThanStringLength(lessThan) {
    return (val) => {
        const lessThanValue = lessThan();
        return String(val).length < lessThanValue || `Inf. à ${lessThanValue}`;
    };
}
function greaterThanOrEqualStringLength(greaterThan) {
    return (val) => {
        const greaterThanValue = greaterThan();
        return (String(val).length >= greaterThanValue ||
            `Sup. ou égal à ${greaterThanValue}`);
    };
}
function greaterThanStringLength(greaterThan) {
    return (val) => {
        const greaterThanValue = greaterThan();
        return (String(val).length > greaterThanValue || `Sup. à ${greaterThanValue}`);
    };
}
function betweenStringLength(min, max) {
    return (val) => {
        const minValue = min();
        const maxValue = max();
        return ((String(val).length >= minValue && String(val).length <= maxValue) ||
            `Entre ${minValue} et ${maxValue}`);
    };
}
function equalToString(equalTo, source) {
    return (val) => {
        const equalToValue = equalTo();
        return (String(val) === equalToValue ||
            `Égale à ${source ? "source (" + equalToValue + ")" : equalToValue}`);
    };
}
function equalToStringLength(equalTo) {
    return (val) => {
        const equalToVal = equalTo();
        return (String(val).length === equalToVal ||
            `Doit contenir ${equalToVal} caractères`);
    };
}
function otherThanString(otherThan) {
    return (val) => {
        const otherThanVal = otherThan();
        return (String(val) !== otherThanVal || `Doit être différent de ${otherThanVal}`);
    };
}
// date
function lessThanOrEqualDate(lessThan, format) {
    return (val) => {
        const lessThanValue = lessThan();
        const valExtracted = date.extractDate(String(val), format);
        const lessThanExtracted = date.extractDate(lessThanValue, format);
        return ((!Number.isNaN(valExtracted.getTime()) &&
            valExtracted <= lessThanExtracted) ||
            `Inf. ou égal à ${lessThanValue}`);
    };
}
function lessThanDate(lessThan, format) {
    return (val) => {
        const lessThanValue = lessThan();
        const valExtracted = date.extractDate(String(val), format);
        const lessThanExtracted = date.extractDate(lessThanValue, format);
        return ((!Number.isNaN(valExtracted.getTime()) &&
            valExtracted < lessThanExtracted) ||
            `Inf. à ${lessThanValue}`);
    };
}
function greaterThanOrEqualDate(greaterThan, format) {
    return (val) => {
        const greaterThanValue = greaterThan();
        const valExtracted = date.extractDate(String(val), format);
        const greaterThanExtracted = date.extractDate(greaterThanValue, format);
        return ((!Number.isNaN(valExtracted.getTime()) &&
            valExtracted >= greaterThanExtracted) ||
            `Sup. ou égal à ${greaterThanValue}`);
    };
}
function greaterThanDate(greaterThan, format) {
    return (val) => {
        const greaterThanValue = greaterThan();
        const valExtracted = date.extractDate(String(val), format);
        const greaterThanExtracted = date.extractDate(greaterThanValue, format);
        return ((!Number.isNaN(valExtracted.getTime()) &&
            valExtracted > greaterThanExtracted) ||
            `Sup. à ${greaterThanValue}`);
    };
}
function equalToDate(equalTo, format) {
    return (val) => {
        const equalToValue = equalTo();
        const valExtracted = date.extractDate(String(val), format);
        const equalToExtracted = date.extractDate(equalToValue, format);
        return valExtracted === equalToExtracted || `Égale à ${valExtracted}`;
    };
}
function otherThanDate(otherThan, format) {
    return (val) => {
        const otherThanValue = otherThan();
        return (date.extractDate(String(val), format) !==
            date.extractDate(otherThanValue, format) ||
            `Doit être différent de ${otherThanValue}`);
    };
}
function validDate(format) {
    return (val) => !Number.isNaN(date.extractDate(String(val), format).getTime()) ||
        "Date invalide";
}
export const Submit64Rules = {
    computeServerRules,
};
