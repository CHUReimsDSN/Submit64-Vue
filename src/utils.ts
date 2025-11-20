import { TSubmit64Event } from "./models";

export function getSubmit64AssociationDataDefaultLimit() {
  return 20
}
export function deepFreeze<T extends Record<string, any>>(object: T): Readonly<T> {
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });

  return Object.freeze(object);
}
export function callAllEvents(events: TSubmit64Event | undefined) {
  events?.forEach((event) => {
    event()
  })
}