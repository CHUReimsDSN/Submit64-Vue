import { TSubmit64Event } from "./models";
declare function callAllEvents(events: TSubmit64Event | undefined): void;
declare function humanStorageSize(bytes: number): string;
declare function deepMergeObject(objToMergeTo: Record<string, unknown>, objPrio: Record<string, unknown>): {
    [x: string]: unknown;
};
declare function deepDupeObject(objectToDupe: Record<string, unknown>): any;
export declare const Utils: {
    callAllEvents: typeof callAllEvents;
    humanStorageSize: typeof humanStorageSize;
    deepMergeObject: typeof deepMergeObject;
    deepDupeObject: typeof deepDupeObject;
};
export {};
