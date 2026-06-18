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
    if (typeof structuredClone === "function") {
        return structuredClone(objectToDupe);
    }
    return JSON.parse(JSON.stringify(objectToDupe));
}
export const Utils = {
    callAllEvents,
    humanStorageSize,
    deepMergeObject,
    deepDupeObject,
};
