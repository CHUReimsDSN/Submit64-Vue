import { TSubmit64Event } from "./models";

export function callAllEvents(events: TSubmit64Event | undefined) {
  events?.forEach((event) => {
    event();
  });
}
// Forked from Quasar source
export function humanStorageSize(bytes: number) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let u = 0;
  while (parseInt(bytes.toString(), 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }
  return `${bytes.toFixed(1)}${units[u]}`;
}
