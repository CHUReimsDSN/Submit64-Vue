import { date } from "quasar";
function callAllEvents(events) {
    events?.forEach((event) => {
        event();
    });
}
function humanStorageSize(bytes) {
    const units = ["B", "KB", "MB", "GB", "TB", "PB"];
    let u = 0;
    while (parseInt(bytes.toString(), 10) >= 1024 && u < units.length - 1) {
        bytes /= 1024;
        ++u;
    }
    return `${bytes.toFixed(1)}${units[u]}`;
}
function deepMergeObject(objToMergeTo, objPrio) {
    const merged = { ...objToMergeTo };
    for (const key of Object.keys(objPrio)) {
        const prioValue = objPrio[key];
        const targetValue = merged[key];
        if (prioValue &&
            typeof prioValue === "object" &&
            !Array.isArray(prioValue) &&
            targetValue &&
            typeof targetValue === "object" &&
            !Array.isArray(targetValue)) {
            merged[key] = deepMergeObject(targetValue, prioValue);
        }
        else if (prioValue !== undefined) {
            merged[key] = prioValue;
        }
    }
    return merged;
}
function deepDupeObject(objectToDupe) {
    return JSON.parse(JSON.stringify(objectToDupe));
}
function superExtractDate(value, format) {
    // 1. On laisse Quasar essayer en premier
    const result = date.extractDate(value, format);
    if (!Number.isNaN(result.getTime())) {
        return result;
    }
    // 2. Si la valeur est une ISO 8601 valide,
    //    on laisse Date native la parser.
    const isoDate = new Date(value);
    if (!Number.isNaN(isoDate.getTime())) {
        return isoDate;
    }
    // 3. Rien n'a fonctionné : on retourne l'Invalid Date de Quasar
    return result;
}
export const Utils = {
    callAllEvents,
    humanStorageSize,
    deepMergeObject,
    deepDupeObject,
    superExtractDate
};
