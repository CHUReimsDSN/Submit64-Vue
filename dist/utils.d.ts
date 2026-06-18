import type { DeepPartial } from "quasar";
import { TSubmit64Event } from "./models";
declare function callAllEvents(events: TSubmit64Event | undefined): void;
declare function humanStorageSize(bytes: number): string;
declare function deepMergeObject<T extends Record<string, unknown>>(objToMergeTo: T, objPrio: DeepPartial<T> | Partial<T>): T;
declare function deepDupeObject<T>(objectToDupe: T): T;
export declare const Utils: {
    callAllEvents: typeof callAllEvents;
    humanStorageSize: typeof humanStorageSize;
    deepMergeObject: typeof deepMergeObject;
    deepDupeObject: typeof deepDupeObject;
};
export {};
