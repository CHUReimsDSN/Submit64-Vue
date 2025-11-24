export function callAllEvents(events) {
    events?.forEach((event) => {
        event();
    });
}
