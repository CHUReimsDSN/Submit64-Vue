import {
  TFormEvent,
  TFormFieldEvent,
  TFormSectionEvent,
  TSubmit64FormApi,
} from "./models";

export class DynamicLogicBuilder {
  private formApi: TSubmit64FormApi;
  private events: FormEvent[] = [];

  private constructor(formApi: TSubmit64FormApi) {
    this.formApi = formApi;
  }

  when<K extends keyof TWhenArgs>(arg1: K, arg2: TWhenArgs[K]) {
    const eventType = arg1;
    const data = arg2 as TWhenArgs[K];
    const formEvent = new FormEvent(eventType, data, this.formApi);
    this.events.push(formEvent);
    const operatorInstance = new BuilderOperator(formEvent);
    return operatorInstance;
  }

  static create(formApi: TSubmit64FormApi) {
    const instance = new DynamicLogicBuilder(formApi);
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
  "Field confirm value statement": { fieldName: string; statement: () => void };
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
};

class BuilderOperator {
  private formEvent: FormEvent;

  constructor(formEvent: FormEvent) {
    this.formEvent = formEvent;
  }

  then(customAction: TThenCustomCallback): BuilderOperator {
    this.formEvent.actions.push(customAction);
    return this;
  }
}

class FormEvent<K extends keyof TWhenArgs = keyof TWhenArgs> {
  type: K;
  data: TWhenArgs[K];
  actions: TThenCustomCallback[] = [];
  formApi: TSubmit64FormApi;

  constructor(type: K, data: TWhenArgs[K], formApi: TSubmit64FormApi) {
    this.type = type;
    this.data = data;
    this.formApi = formApi;
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

      case "Field confirm value statement":
        return {
          target: "field",
          targetName: (this.data as TWhenArgs["Field confirm value statement"])
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
    return () => {
      this.actions.forEach((callback) => {
        callback(this.formApi);
      });
    };
  }
}

type TThenCustomCallback = (formApi: TSubmit64FormApi) => void;
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
