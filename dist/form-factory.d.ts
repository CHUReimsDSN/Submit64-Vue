import type { Component, InjectionKey } from "vue";
import type { TFormDef, TFormStyle, TFormSettings, TResourceFormMetadataAndData, TSubmit64FormProvider, TContext } from "./models";
export declare class FormFactory {
    private static getFieldComponentByFormFieldType;
    resourceName: string;
    formSettings: TFormSettings;
    formStyleConfig: TFormStyle;
    actionComponent: Component;
    sectionComponent: Component;
    wrapperResetComponent: Component;
    associationDisplayComponent: Component;
    constructor(resourceName: string, formSettings?: Partial<TFormSettings>, formStyleConfig?: Partial<TFormStyle>, actionComponent?: Component, sectionComponent?: Component, wrapperResetComponent?: Component, associationDisplayComponent?: Component);
    getForm(formMetadataAndData: TResourceFormMetadataAndData, providingUniqKey: InjectionKey<TSubmit64FormProvider>, context?: TContext): TFormDef;
    private getRegularFieldTypeByFieldType;
}
