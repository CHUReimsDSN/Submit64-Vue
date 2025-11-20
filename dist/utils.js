export function getSubmit64AssociationDataDefaultLimit() {
    return 20;
}
export function deepFreeze(object) {
    Object.keys(object).forEach((key) => {
        const value = object[key];
        if (value && typeof value === "object") {
            deepFreeze(value);
        }
    });
    return Object.freeze(object);
}
export function callAllEvents(events) {
    events?.forEach((event) => {
        event();
    });
}
