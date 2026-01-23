import type {
  TFormEvent,
  TFormFieldEvent,
  TFormSectionEvent,
  TSubmit64FormApi,
  TSubmit64EventWhen,
} from "./models";

export class DynamicLogicBuilder {
  private formApi: TSubmit64FormApi;
  private events: FormEvent[] = [];

  private constructor(formApi: TSubmit64FormApi) {
    this.formApi = formApi;
  }

  when<K extends keyof TSubmit64EventWhen>(arg1: K, arg2?: TSubmit64EventWhen[K]) {
    const eventType = arg1;
    const data = arg2 as TSubmit64EventWhen[K];
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
          if (!allEventObject.fields[targetDefinition.targetName]) {
            allEventObject.fields[targetDefinition.targetName] = {};
          }
          if (
            !allEventObject.fields[targetDefinition.targetName][
              targetDefinition.key
            ]
          ) {
            allEventObject.fields[targetDefinition.targetName][
              targetDefinition.key
            ] = [];
          }
          allEventObject.fields[targetDefinition.targetName][
            targetDefinition.key
          ]!.push(event.getActionCallback());
          break;

        case "section":
          if (!allEventObject.sections[targetDefinition.targetName]) {
            allEventObject.sections[targetDefinition.targetName] = {};
          }
          if (
            !allEventObject.sections[targetDefinition.targetName][
              targetDefinition.key
            ]
          ) {
            allEventObject.sections[targetDefinition.targetName][
              targetDefinition.key
            ] = [];
          }
          allEventObject.sections[targetDefinition.targetName][
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
class FormEvent<K extends keyof TSubmit64EventWhen = keyof TSubmit64EventWhen> {
  type: K;
  data: TSubmit64EventWhen[K];
  formApi: TSubmit64FormApi;
  action: TThenCustomCallback = () => {};
  cyclicActionCallSet: Set<K> = new Set();

  constructor(type: K, data: TSubmit64EventWhen[K], formApi: TSubmit64FormApi) {
    this.type = type;
    this.data = data;
    this.formApi = formApi;
  }
  getTarget(): TFormEventTarget {
    switch (this.type) {
      case "Field is updated":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is updated"]).fieldName,
          key: "onUpdate",
        };
      case "Field is valid":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is valid"]).fieldName,
          key: "onIsValid",
        };
      case "Field is invalid":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is invalid"]).fieldName,
          key: "onIsInvalid",
        };
      case "Field is validated":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is validated"]).fieldName,
          key: "onValidated",
        };
      case "Field is cleared":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is cleared"]).fieldName,
          key: "onClear",
        };

      case "Field is reseted":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is reseted"]).fieldName,
          key: "onReset",
        };
      case "Field is hidden":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is hidden"]).fieldName,
          key: "onHide",
        };
      case "Field is unhidden":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is unhidden"]).fieldName,
          key: "onUnhide",
        };
      case "Field is ready":
        return {
          target: "field",
          targetName: (this.data as TSubmit64EventWhen["Field is ready"]).fieldName,
          key: "onReady",
        };

      case "Section is valid":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is valid"]).sectionName,
          key: "onIsValid",
        };
      case "Section is invalid":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is invalid"])
            .sectionName,
          key: "onIsInvalid",
        };
      case "Section is hidden":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is hidden"]).sectionName,
          key: "onHide",
        };
      case "Section is unhidden":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is unhidden"])
            .sectionName,
          key: "onUnhide",
        };
      case "Section is cleared":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is cleared"])
            .sectionName,
          key: "onClear",
        };
      case "Section is reseted":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is reseted"])
            .sectionName,
          key: "onReset",
        };
      case "Section is validated":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is validated"])
            .sectionName,
          key: "onValidated",
        };
      case "Section is updated":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is updated"])
            .sectionName,
          key: "onUpdate",
        };
      case "Section is ready":
        return {
          target: "section",
          targetName: (this.data as TSubmit64EventWhen["Section is ready"]).sectionName,
          key: "onReady",
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
      case "Form submit is successful":
        return {
          target: "form",
          key: "onSubmitSuccess",
        };
      case "Form submit is unsuccessful":
        return {
          target: "form",
          key: "onSubmitUnsuccess",
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
      case "Form is invalid":
        return {
          target: "form",
          key: "onIsInvalid",
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
      if (this.cyclicActionCallSet.has(this.type)) {
        return;
      }
      this.cyclicActionCallSet.add(this.type);
      this.action(this.formApi);
      this.cyclicActionCallSet.clear();
    };
  }
}

class BuilderOperator {
  private formEvent: FormEvent;

  constructor(formEvent: FormEvent) {
    this.formEvent = formEvent;
  }

  then(customAction: TThenCustomCallback): BuilderOperator {
    this.formEvent.action = customAction;
    return this;
  }
}
type TThenCustomCallback = (formApi: TSubmit64FormApi) => void | Promise<void>;
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
