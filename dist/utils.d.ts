import { TSubmit64Event } from "./models";
export declare function getSubmit64AssociationDataDefaultLimit(): number;
export declare function deepFreeze<T extends Record<string, any>>(object: T): Readonly<T>;
export declare function callAllEvents(events: TSubmit64Event | undefined): void;
