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
    return Object.keys(objPrio).reduce((merged, key) => {
        merged[key] =
            objPrio[key] instanceof Object && !Array.isArray(objPrio[key])
                ? deepMergeObject(objPrio[key], merged[key] ?? {})
                : objPrio[key];
        return merged;
    }, { ...objToMergeTo });
}
function deepDupeObject(objectToDupe) {
    return JSON.parse(JSON.stringify(objectToDupe));
}
export const Utils = {
    callAllEvents,
    humanStorageSize,
    deepMergeObject,
    deepDupeObject
};
