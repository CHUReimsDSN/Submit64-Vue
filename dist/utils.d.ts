import type { DeepPartial } from "quasar";
import type { TSubmit64Event } from "./models";
declare function callAllEvents(events: TSubmit64Event | undefined): void;
declare function humanStorageSize(bytes: number): string;
declare function deepMergeObject<T extends Record<string, unknown>>(objToMergeTo: T, objPrio: DeepPartial<T>, options?: {
    deepClone: boolean;
}): T;
declare function deepCloneObject<T>(value: T): T;
export declare const Utils: {
    callAllEvents: typeof callAllEvents;
    humanStorageSize: typeof humanStorageSize;
    deepMergeObject: typeof deepMergeObject;
    deepCloneObject: typeof deepCloneObject;
};
export {};
