import { TSubmit64Event } from "./models";

export function getSubmit64AssociationDataDefaultLimit() {
  return 20
}
export function callAllEvents(events: TSubmit64Event | undefined) {
  events?.forEach((event) => {
    event()
  })
}