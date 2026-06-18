import type { DeepPartial } from "quasar";
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
function deepMergeObject<T extends Record<string, unknown>>(
  objToMergeTo: T,
  objPrio: DeepPartial<T> | Partial<T>,
): T {
  const merged = { ...objToMergeTo };
  for (const key of Object.keys(objPrio) as Array<keyof T>) {
    const prioValue = objPrio[key];
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
      ) as T[keyof T];
    } else if (prioValue !== undefined) {
      merged[key] = prioValue as T[keyof T];
    }
  }

  return merged;
}
function deepDupeObject<T>(objectToDupe: T): T {
  if (typeof structuredClone === "function") {
    return structuredClone(objectToDupe);
  }
  return JSON.parse(JSON.stringify(objectToDupe));
}

export const Utils = {
  callAllEvents,
  humanStorageSize,
  deepMergeObject,
  deepDupeObject,
};
