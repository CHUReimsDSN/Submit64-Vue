var b = Object.defineProperty;
var N = (i, e, t) => e in i ? b(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => N(i, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as d, createElementBlock as l, openBlock as a, createElementVNode as p, createVNode as y, createBlock as m, createCommentVNode as C, unref as s, mergeProps as g, toDisplayString as u, renderSlot as v, resolveComponent as F, normalizeProps as A, guardReactiveProps as E, withCtx as h, createTextVNode as D, Fragment as w, renderList as x } from "vue";
import { QBtn as _, QIcon as R, QItem as G, QItemSection as B, QItemLabel as q } from "quasar";
const V = { class: "flex column" }, $ = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, I = /* @__PURE__ */ d({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(i) {
    const e = i;
    function t() {
      const o = e.formApi.form.formStyle;
      return {
        outline: o.fieldOutlined,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        color: o.fieldColor,
        noCaps: !0
      };
    }
    return (o, n) => (a(), l("div", V, [
      p("div", $, [
        y(s(_), g(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (a(), m(s(_), g({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : C("", !0),
        e.clear ? (a(), m(s(_), g({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : C("", !0)
      ])
    ]));
  }
}), O = { class: "flex row items-center" }, Y = { class: "text-body1 text-weight-medium" }, H = { class: "flex column q-gutter-md" }, L = /* @__PURE__ */ d({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(i) {
    const e = i;
    return (t, o) => (a(), l("div", null, [
      p("div", O, [
        e.sectionApi.section.icon ? (a(), m(s(R), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : C("", !0),
        p("div", Y, u(e.sectionApi.section.label), 1)
      ]),
      p("div", H, [
        v(t.$slots, "default")
      ])
    ]));
  }
}), P = /* @__PURE__ */ d({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(i) {
    const e = i;
    return (t, o) => {
      const n = F("q-icon");
      return a(), m(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (c) => e.reset())
      });
    };
  }
}), Q = /* @__PURE__ */ d({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(i) {
    const e = i;
    return (t, o) => (a(), m(s(G), A(E(e.itemProps)), {
      default: h(() => [
        y(s(B), null, {
          default: h(() => [
            y(s(q), null, {
              default: h(() => [
                D(u(e.entry.label), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16));
  }
}), M = { class: "flex column" }, T = /* @__PURE__ */ d({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(i) {
    const e = i;
    return (t, o) => (a(), l("div", M, [
      (a(!0), l(w, null, x(e.orphanErrors, (n, c) => (a(), l("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, u(c) + " : " + u(n.join(",")), 1))), 128))
    ]));
  }
}), f = class f {
  constructor() {
    r(this, "_formSettings");
    r(this, "_formStyle");
    r(this, "_actionComponent");
    r(this, "_orphanErrorsComponent");
    r(this, "_sectionComponent");
    r(this, "_wrapperResetComponent");
    r(this, "_associationDisplayComponent");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0
    }, this._formStyle = {
      fieldOutlined: !1,
      fieldDense: !0,
      fieldHideBottomSpace: !0,
      fieldFilled: !1,
      fieldStandout: !1,
      fieldBorderless: !1,
      fieldRounded: !1,
      fieldSquare: !1,
      fieldClass: "",
      fieldColor: "primary",
      fieldBgColor: "white"
    }, this._actionComponent = I, this._orphanErrorsComponent = T, this._sectionComponent = L, this._wrapperResetComponent = P, this._associationDisplayComponent = Q;
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...e
    };
  }
  static registerGlobalFormStyle(e) {
    this._instance._formStyle = {
      ...this._instance._formStyle,
      ...e
    };
  }
  static registerGlobalActionComponent(e) {
    this._instance._actionComponent = e;
  }
  static registerGlobalOrphanErrorsComponent(e) {
    this._instance._orphanErrorsComponent = e;
  }
  static registerGlobalSectionComponent(e) {
    this._instance._sectionComponent = e;
  }
  static registerGlobalWrapperResetComponent(e) {
    this._instance._wrapperResetComponent = e;
  }
  static registerGlobalAssociationDisplayComponent(e) {
    this._instance._associationDisplayComponent = e;
  }
  static getGlobalFormSetting() {
    return this._instance._formSettings;
  }
  static getGlobalFormStyle() {
    return this._instance._formStyle;
  }
  static getGlobalActionComponent() {
    return this._instance._actionComponent;
  }
  static getGlobalOrphanErrorComponent() {
    return this._instance._orphanErrorsComponent;
  }
  static getGlobalSectionComponent() {
    return this._instance._sectionComponent;
  }
  static getGlobalWrapperResetComponent() {
    return this._instance._wrapperResetComponent;
  }
  static getGlobalAssociationDisplayComponent() {
    return this._instance._associationDisplayComponent;
  }
};
r(f, "_instance", new f());
let k = f;
class S {
  constructor(e) {
    r(this, "formApi");
    r(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const o = e, n = t, c = new j(o, n, this.formApi);
    return this.events.push(c), new U(c);
  }
  static create(e) {
    return new S(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((o) => {
      const n = o.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(o.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(o.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            o.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class U {
  constructor(e) {
    r(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class j {
  constructor(e, t, o) {
    r(this, "type");
    r(this, "data");
    r(this, "formApi");
    r(this, "actions", []);
    r(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = o;
  }
  getTarget() {
    switch (this.type) {
      case "Field is updated":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onUpdate"
        };
      case "Field is valid":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onIsValid"
        };
      case "Field is validated":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onValidated"
        };
      case "Field is cleared":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onClear"
        };
      case "Field is reseted":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onReset"
        };
      case "Field confirm value statement":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onConfirmStatement"
        };
      case "Field is hidden":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onHide"
        };
      case "Field is unhidden":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onUnhide"
        };
      case "Section is valid":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onReset"
        };
      case "Section is hidden":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onHide"
        };
      case "Section is unhidden":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onUnhide"
        };
      case "Section is cleared":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onClear"
        };
      case "Section is reseted":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onReset"
        };
      case "Section is validated":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onValidated"
        };
      case "Form is ready":
        return {
          target: "form",
          key: "onReady"
        };
      case "Form is submited":
        return {
          target: "form",
          key: "onSubmit"
        };
      case "Form is updated":
        return {
          target: "form",
          key: "onUpdate"
        };
      case "Form is cleared":
        return {
          target: "form",
          key: "onClear"
        };
      case "Form is reseted":
        return {
          target: "form",
          key: "onReset"
        };
      case "Form is valid":
        return {
          target: "form",
          key: "onIsValid"
        };
      case "Form is validated":
        return {
          target: "form",
          key: "onValidated"
        };
      default:
        return console.warn(`Submit64 -> unhandled event target : ${this.type}`), {
          target: null
        };
    }
  }
  getActionCallback() {
    return () => {
      this.cyclicActionCallSet.add(this.type), this.actions.forEach((e) => {
        e(this.formApi);
      }), this.cyclicActionCallSet.clear();
    };
  }
}
export {
  S as DynamicLogicBuilder,
  k as Submit64
};
