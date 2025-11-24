import { TSubmit64Event } from "./models";

export function callAllEvents(events: TSubmit64Event | undefined) {
  events?.forEach((event) => {
    event()
  })
}