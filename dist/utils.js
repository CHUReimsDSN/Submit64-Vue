export function getSubmit64AssociationDataDefaultLimit() {
    return 20;
}
export function callAllEvents(events) {
    events?.forEach((event) => {
        event();
    });
}
