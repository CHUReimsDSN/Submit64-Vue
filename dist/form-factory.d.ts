import type { Component, InjectionKey } from "vue";
import type { TFormDef, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TSubmit64FormProvider, TContext } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    resourceName: string;
    formSettings: Required<TFormSettings>;
    formStyle: Required<TFormStyle>;
    actionComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    associationDisplayRecord: Record<string, Component>;
    constructor(resourceName: string, formSettings?: Partial<TFormSettings>, formStyle?: Partial<TFormStyle>, actionComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component, associationDisplayComponent?: Component, associationDisplayRecord?: Record<string, Component>);
    getForm(formMetadataAndData: TResourceFormMetadataAndData, providingUniqKey: InjectionKey<TSubmit64FormProvider>, resourceId?: TFormDef['resourceId'], context?: TContext): TFormDef;
    private getRegularFieldTypeByFieldType;
}
