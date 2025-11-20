import {
  TContext,
  TFormEvent,
  TFormFieldEvent,
  TFormSectionEvent,
  TSubmit64FullFormApi,
} from "./models";

export class DynamicLogicBuilder {
  private fullFormApi: TSubmit64FullFormApi;
  private events: FormEvent[] = [];

  private constructor(fullFormApi: TSubmit64FullFormApi) {
    this.fullFormApi = fullFormApi;
  }

  when<K extends keyof TWhenArgs>(arg1: K, arg2: TWhenArgs[K]) {
    const operatorInstance = new BuilderOperator(this, this.fullFormApi);
    const eventType = arg1;
    const data = arg2 as TWhenArgs[K];
    const formEvent = new FormEvent(eventType, data);
    this.events.push(formEvent);
    return operatorInstance;
  }

  static create(fullFormApi: TSubmit64FullFormApi) {
    const instance = new DynamicLogicBuilder(fullFormApi);
    return instance;
  }

  static getEventsObjectFromInstance(instance: DynamicLogicBuilder) {
    const allEventObject: {
      fields: Record<string, TFormFieldEvent>;
      sections: Record<string, TFormSectionEvent>;
      form: TFormEvent;
    } = {
      fields: {},
      sections: {},
      form: {},
    };
    instance.events.forEach((event) => {
      const targetDefinition = event.getTarget();
      switch (targetDefinition.target) {
        case "field":
          if (!allEventObject.fields[targetDefinition.target]) {
            allEventObject.fields[targetDefinition.target] = {};
          }
          if (
            !allEventObject.fields[targetDefinition.target][
              targetDefinition.key
            ]
          ) {
            allEventObject.fields[targetDefinition.target][
              targetDefinition.key
            ] = [];
          }
          allEventObject.fields[targetDefinition.target][
            targetDefinition.key
          ]!.push(event.getActionCallback());
          break;

        case "section":
          if (!allEventObject.sections[targetDefinition.target]) {
            allEventObject.sections[targetDefinition.target] = {};
          }
          if (
            !allEventObject.sections[targetDefinition.target][
              targetDefinition.key
            ]
          ) {
            allEventObject.sections[targetDefinition.target][
              targetDefinition.key
            ] = [];
          }
          allEventObject.sections[targetDefinition.target][
            targetDefinition.key
          ]!.push(event.getActionCallback());
          break;

        case "form":
          if (!allEventObject.form[targetDefinition.key]) {
            allEventObject.form[targetDefinition.key] = [];
          }
          allEventObject.form[targetDefinition.key]!.push(
            event.getActionCallback()
          );
          break;
      }
    });
    return allEventObject;
  }
}
type TWhenArgs = {
  "Field is updated": { fieldName: string };
  "Field is valid": { fieldName: string };
  "Field is validated": { fieldName: string };
  "Field is cleared": { fieldName: string };
  "Field is reseted": { fieldName: string };
  "Field confirm statement": { fieldName: string; statement: () => void };
  "Field is hidden": { fieldName: string };
  "Field is unhidden": { fieldName: string };
  "Section is valid": { sectionName: string };
  "Section is validated": { sectionName: string };
  "Section is hidden": { sectionName: string };
  "Section is unhidden": { sectionName: string };
  "Section is cleared": { sectionName: string };
  "Section is reseted": { sectionName: string };
  "Form is ready": undefined;
  "Form is submited": undefined;
  "Form is updated": undefined;
  "Form is cleared": undefined;
  "Form is reseted": undefined;
  "Form is valid": undefined;
  "Form is validated": undefined;
  "Function is called": { functionToListenTo: () => void };
};

class BuilderOperator {
  private logicBuilder: DynamicLogicBuilder;
  private fullFormApi: TSubmit64FullFormApi;

  constructor(
    logicBuilder: DynamicLogicBuilder,
    fullFormApi: TSubmit64FullFormApi
  ) {
    this.logicBuilder = logicBuilder;
    this.fullFormApi = fullFormApi;
  }

  // and() {
  //   this.logicBuilderDelegate.addOperatorCallback("and");
  //   return this.logicBuilder;
  // }
  // or() {
  //   this.logicBuilderDelegate.addOperatorCallback("or");
  //   return this.logicBuilder;
  // }
  then<K extends keyof TThenArgs>(
    actionType: K,
    data: TThenArgs[K]
  ): BuilderActionOperator;
  then(customAction: TThenCustomCallback, _: undefined): BuilderActionOperator;
  then(arg1: unknown, arg2: unknown) {
    let actionInstance: BuilderAction;
    if (typeof arg1 === "function") {
      actionInstance = new BuilderAction(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        arg1 as TThenCustomCallback
      );
    } else {
      const actionType = arg1 as keyof TThenArgs;
      const data = arg2 as TThenArgs[keyof TThenArgs];
      actionInstance = new BuilderAction(this.fullFormApi, actionType, data);
    }
    return new BuilderActionOperator(this.fullFormApi);
  }
}
class BuilderActionOperator {
  private fullFormApi: TSubmit64FullFormApi;
  constructor(fullFormApi: TSubmit64FullFormApi) {
    this.fullFormApi = fullFormApi;
  }
  then<K extends keyof TThenArgs>(
    actionType: K,
    data: TThenArgs[K]
  ): BuilderActionOperator;
  then(customAction: TThenCustomCallback): BuilderActionOperator;
  then(arg1: unknown, arg2?: unknown) {
    let actionInstance: BuilderAction;
    if (typeof arg1 === "function") {
      actionInstance = new BuilderAction(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        arg1 as TThenCustomCallback
      );
    } else {
      const actionType = arg1 as keyof TThenArgs;
      const data = arg2 as TThenArgs[keyof TThenArgs];
      actionInstance = new BuilderAction(this.fullFormApi, actionType, data);
    }
    return new BuilderActionOperator(this.fullFormApi);
  }
}

class FormEvent<K extends keyof TWhenArgs = keyof TWhenArgs> {
  type: K;
  data: TWhenArgs[K];
  actions: BuilderAction[] = [];
  constructor(type: K, data: TWhenArgs[K]) {
    this.type = type;
    this.data = data;
  }
  getTarget(): TFormEventTarget {
    switch (this.type) {
      case "Field is updated":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is updated"]).fieldName,
          key: "onUpdate",
        };
      case "Field is valid":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is valid"]).fieldName,
          key: "onIsValid",
        };
      case "Field is validated":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is validated"]).fieldName,
          key: "onValidated",
        };
      case "Field is cleared":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is cleared"]).fieldName,
          key: "onClear",
        };

      case "Field is reseted":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is reseted"]).fieldName,
          key: "onReset",
        };

      case "Field confirm statement":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field confirm statement"])
            .fieldName,
          key: "onConfirmStatement",
        };
      case "Field is hidden":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is hidden"]).fieldName,
          key: "onHide",
        };
      case "Field is unhidden":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field is unhidden"]).fieldName,
          key: "onUnhide",
        };

      case "Section is valid":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is valid"]).sectionName,
          key: "onReset",
        };
      case "Section is hidden":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is hidden"]).sectionName,
          key: "onHide",
        };
      case "Section is unhidden":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is unhidden"])
            .sectionName,
          key: "onUnhide",
        };
      case "Section is cleared":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is cleared"])
            .sectionName,
          key: "onClear",
        };
      case "Section is reseted":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is reseted"])
            .sectionName,
          key: "onReset",
        };
      case "Section is validated":
        return {
          target: "section",
          targetName: (this.data as TWhenArgs["Section is validated"])
            .sectionName,
          key: "onValidated",
        };

      case "Form is ready":
        return {
          target: "form",
          key: "onReady",
        };
      case "Form is submited":
        return {
          target: "form",
          key: "onSubmit",
        };
      case "Form is updated":
        return {
          target: "form",
          key: "onUpdate",
        };
      case "Form is cleared":
        return {
          target: "form",
          key: "onClear",
        };
      case "Form is reseted":
        return {
          target: "form",
          key: "onReset",
        };
      case "Form is valid":
        return {
          target: "form",
          key: "onIsValid",
        };
      case "Form is validated":
        return {
          target: "form",
          key: "onValidated",
        };

      default:
        console.warn(`Submit64 -> unhandled event target : ${this.type}`);
        return {
          target: null,
        };
    }
  }
  getActionCallback() {
    const allCallbacks = this.actions.map((action) => {
      return action.generateEvent();
    });
    return () => {
      allCallbacks.forEach((callback) => {
        callback();
      });
    };
  }
}

type TThenArgs = {
  "Set field label": { fieldName: string; newLabel: string };
  "Set field prefix": { fieldName: string; newPrefix: string };
  "Set field suffix": { fieldName: string; newSuffix: string };
  "Set field css class": { fieldName: string; newCssClass: string };
  "Set field hint": { fieldName: string; newHint: string };
  "Set field readonly state": { fieldName: string; newState: boolean };
  "Hide field": { fieldName: string };
  "Unhide field": { fieldName: string };
  "Clear field": { fieldName: string };
  "Reset field": { fieldName: string };
  "Validate field": { fieldName: string };

  "Set section label": { sectionName: string; newLabel: string };
  "Set section icon": { sectionName: string; newIcon: string };
  "Set section css class": { sectionName: string; newCssClass: string };
  "Set section readonly state": { sectionName: string; newState: boolean };
  "Hide section": { sectionName: string };
  "Unhide section": { sectionName: string };
  "Validate section": { sectionName: string };
  "Reset section": { sectionName: string };
  "Clear section": { sectionName: string };

  "Set form readonly state": { newState: boolean };
  "Set form css class": { newCssClass: string };
  "Set form context": { newContext: TContext };
  "Submit form": undefined;
  "Clear form": undefined;
  "Reset form": undefined;
  "Validate form": undefined;
};
type TThenCustomCallback = (fullFormApi: TSubmit64FullFormApi) => void;
type TFormEventTarget =
  | {
      target: "field";
      targetName: string;
      key: keyof TFormFieldEvent;
    }
  | {
      target: "section";
      targetName: string;
      key: keyof TFormSectionEvent;
    }
  | {
      target: "form";
      key: keyof TFormEvent;
    }
  | {
      target: null;
    };

class BuilderAction<K extends keyof TThenArgs = keyof TThenArgs> {
  private readonly fullFormApi: TSubmit64FullFormApi;
  private readonly type: K;
  private readonly data: TThenArgs[K];
  private readonly customCallback?: TThenCustomCallback;
  private cyclicActionCalls: Set<keyof TThenArgs> = new Set();

  constructor(
    fullFormApi: TSubmit64FullFormApi,
    type: K,
    data: TThenArgs[K],
    customCallback?: TThenCustomCallback
  ) {
    this.fullFormApi = fullFormApi;
    this.type = type;
    this.data = data;
    this.customCallback = customCallback;
  }
  generateEvent() {
    const eventCallback = this.getEventCallback();
    return () => {
      if (this.cyclicActionCalls.has(this.type)) {
        return;
      }
      this.cyclicActionCalls.add(this.type);
      eventCallback();
      this.cyclicActionCalls.clear();
    };
  }
  private getEventCallback() {
    if (this.customCallback) {
      return () => {
        this.customCallback?.(this.fullFormApi);
      };
    }
    switch (this.type) {
      case "Set field label":
        return this.setFieldLabel;
      case "Set field prefix":
        return this.setFieldPrefix;
      case "Set field suffix":
        return this.setFieldSuffix;
      case "Set field css class":
        return this.setFieldCssClass;
      case "Set field hint":
        return this.setFieldHint;
      case "Set field readonly state":
        return this.setFieldReadonlyState;
      case "Hide field":
        return this.hideField;
      case "Unhide field":
        return this.unhideField;
      case "Clear field":
        return this.clearField;
      case "Reset field":
        return this.resetField;
      case "Validate field":
        return this.validateField;
      case "Set section label":
        return this.setSectionLabel;
      case "Set section icon":
        return this.setSectionIcon;
      case "Set section css class":
        return this.setSectionCssClass;
      case "Set section readonly state":
        return this.setSectionReadonlyState;
      case "Hide section":
        return this.hideSection;
      case "Unhide section":
        return this.unHideSection;
      case "Clear section":
        return this.clearSection;
      case "Reset section":
        return this.resetSection;
      case "Validate section":
        return this.validateSection;
      case "Set form readonly state":
        return this.setFormReadonlyState;
      case "Set form css class":
        return this.setFormCssClass;
      case "Set form context":
        return this.setFormContext;
      case "Submit form":
        return this.submitForm;
      case "Clear form":
        return this.clearForm;
      case "Reset form":
        return this.resetForm;
      case "Validate form":
        return this.validateForm;
      default:
        console.warn(
          `Submit64 -> unhandled builder action callback generation : ${this.type}`
        );
        return () => {};
    }
  }
  private setFieldLabel() {
    const data = this.data as TThenArgs["Set field label"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.label = data.newLabel;
    }
  }
  private setFieldPrefix() {
    const data = this.data as TThenArgs["Set field prefix"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.prefix = data.newPrefix;
    }
  }
  private setFieldSuffix() {
    const data = this.data as TThenArgs["Set field suffix"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.suffix = data.newSuffix;
    }
  }
  private setFieldCssClass() {
    const data = this.data as TThenArgs["Set field css class"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.cssClass = data.newCssClass;
    }
  }
  private setFieldHint() {
    const data = this.data as TThenArgs["Set field hint"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.hint = data.newHint;
    }
  }
  private setFieldReadonlyState() {
    const data = this.data as TThenArgs["Set field readonly state"];
    const fieldRef = this.fullFormApi.getField(data.fieldName)?.getDataRef();
    if (fieldRef) {
      fieldRef.readonly = data.newState;
    }
  }
  private hideField() {
    const data = this.data as TThenArgs["Hide field"];
    const field = this.fullFormApi.getField(data.fieldName);
    if (field) {
      field.hide();
    }
  }
  private unhideField() {
    const data = this.data as TThenArgs["Unhide field"];
    const field = this.fullFormApi.getField(data.fieldName);
    if (field) {
      field.unhide();
    }
  }
  private clearField() {
    const data = this.data as TThenArgs["Clear field"];
    const field = this.fullFormApi.getField(data.fieldName);
    if (field) {
      field.clear();
    }
  }
  private resetField() {
    const data = this.data as TThenArgs["Reset field"];
    const field = this.fullFormApi.getField(data.fieldName);
    if (field) {
      field.reset();
    }
  }
  private validateField() {
    const data = this.data as TThenArgs["Validate field"];
    const field = this.fullFormApi.getField(data.fieldName);
    if (field) {
      field.validate();
    }
  }
  private setSectionLabel() {
    const data = this.data as TThenArgs["Set section label"];
    const sectionRef = this.fullFormApi
      .getSection(data.sectionName)
      ?.getDataRef();
    if (sectionRef) {
      sectionRef.label = data.newLabel;
    }
  }
  private setSectionIcon() {
    const data = this.data as TThenArgs["Set section icon"];
    const sectionRef = this.fullFormApi
      .getSection(data.sectionName)
      ?.getDataRef();
    if (sectionRef) {
      sectionRef.icon = data.newIcon;
    }
  }
  private setSectionCssClass() {
    const data = this.data as TThenArgs["Set section css class"];
    const sectionRef = this.fullFormApi
      .getSection(data.sectionName)
      ?.getDataRef();
    if (sectionRef) {
      sectionRef.cssClass = data.newCssClass;
    }
  }
  private setSectionReadonlyState() {
    const data = this.data as TThenArgs["Set section readonly state"];
    const sectionRef = this.fullFormApi
      .getSection(data.sectionName)
      ?.getDataRef();
    if (sectionRef) {
      sectionRef.readonly = data.newState;
    }
  }
  private hideSection() {
    const data = this.data as TThenArgs["Hide section"];
    const section = this.fullFormApi.getSection(data.sectionName);
    if (section) {
      section.hide();
    }
  }
  private unHideSection() {
    const data = this.data as TThenArgs["Unhide section"];
    const section = this.fullFormApi.getSection(data.sectionName);
    if (section) {
      section.unhide();
    }
  }
  private clearSection() {
    const data = this.data as TThenArgs["Clear section"];
    const section = this.fullFormApi.getSection(data.sectionName);
    if (section) {
      section.clear();
    }
  }
  private resetSection() {
    const data = this.data as TThenArgs["Reset section"];
    const section = this.fullFormApi.getSection(data.sectionName);
    if (section) {
      section.reset();
    }
  }
  private validateSection() {
    const data = this.data as TThenArgs["Validate section"];
    const section = this.fullFormApi.getSection(data.sectionName);
    if (section) {
      section.validate();
    }
  }
  private setFormReadonlyState() {
    const data = this.data as TThenArgs["Set form readonly state"];
    const formRef = this.fullFormApi.getFormRef().value;
    if (formRef) {
      formRef.readonly = data.newState;
    }
  }
  private setFormCssClass() {
    const data = this.data as TThenArgs["Set form css class"];
    const formRef = this.fullFormApi.getFormRef().value;
    if (formRef) {
      formRef.cssClass = data.newCssClass;
    }
  }
  private setFormContext() {
    const data = this.data as TThenArgs["Set form context"];
    const formRef = this.fullFormApi.getFormRef().value;
    if (formRef) {
      formRef.context = data.newContext;
    }
  }
  private submitForm() {
    this.fullFormApi.submitForm();
  }
  private clearForm() {
    this.fullFormApi.clearForm();
  }
  private resetForm() {
    this.fullFormApi.resetForm();
  }
  private validateForm() {
    this.fullFormApi.validateForm();
  }
}
