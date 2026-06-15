import { TSubmit64Event } from "./models";

function callAllEvents(events: TSubmit64Event | undefined) {
  events?.forEach((event) => {
    event();
  });
}
function humanStorageSize(bytes: number) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let u = 0;
  while (parseInt(bytes.toString(), 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }
  return `${bytes.toFixed(1)}${units[u]}`;
}
function deepMergeObject(
  objToMergeTo: Record<string, unknown>,
  objPrio: Record<string, unknown>,
) {
  return Object.keys(objPrio).reduce(
    (merged, key) => {
      merged[key] =
        objPrio[key] instanceof Object && !Array.isArray(objPrio[key])
          ? deepMergeObject(
              objPrio[key] as typeof objToMergeTo,
              (merged[key] as typeof objToMergeTo) ?? {},
            )
          : objPrio[key];
      return merged;
    },
    { ...objToMergeTo },
  );
}
function deepDupeObject(objectToDupe: Record<string, unknown>) {
  return JSON.parse(JSON.stringify(objectToDupe))
}

export const Utils = {
  callAllEvents,
  humanStorageSize,
  deepMergeObject,
  deepDupeObject
};
