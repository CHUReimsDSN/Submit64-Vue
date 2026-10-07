import type { DeepPartial } from "quasar";
import type { TSubmit64Event } from "./models";

function callAllEvents(events: TSubmit64Event | undefined) {
  for (const event of events ?? []) {
    event()
  }
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
function deepMergeObject<T extends Record<string, unknown>>(
  objToMergeTo: T,
  objPrio: DeepPartial<T>,
  options = {
    deepClone: true
  }
): T {
  let merged = objToMergeTo ?? {}
  let prio = objPrio ?? {}
  if (options.deepClone) {
    merged = deepCloneObject(merged)
    prio = deepCloneObject(prio)
  }
  for (const key of Object.keys(prio) as Array<keyof T>) {
    const prioValue = prio[key];
    const targetValue = merged[key];
    if (
      prioValue &&
      typeof prioValue === "object" &&
      !Array.isArray(prioValue) &&
      targetValue &&
      typeof targetValue === "object" &&
      !Array.isArray(targetValue)
    ) {
      merged[key] = deepMergeObject(
        targetValue as Record<string, unknown>,
        prioValue as DeepPartial<Record<string, unknown>>,
        options
      ) as T[keyof T];
    } else if (prioValue !== undefined) {
      merged[key] = prioValue as T[keyof T];
    }
  }
  return merged;
}
function deepCloneObject<T>(value: T): T {
  if (typeof value === "function") {
    return value;
  }
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(item => deepCloneObject(item)) as T;
  }
  const clone = {} as T
  for (const key of Object.keys(value)) {
    clone[key as keyof T] = deepCloneObject(value[key as keyof T]);
  }
  return clone;
}

export const Utils = {
  callAllEvents,
  humanStorageSize,
  deepMergeObject,
  deepCloneObject,
};
