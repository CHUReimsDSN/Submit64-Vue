var $e = Object.defineProperty;
var ze = (o, e, t) => e in o ? $e(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => ze(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as O, createElementBlock as q, openBlock as h, createElementVNode as Y, createVNode as T, createBlock as R, createCommentVNode as P, unref as a, mergeProps as ve, toDisplayString as j, renderSlot as Ae, resolveComponent as Ie, normalizeProps as Ue, guardReactiveProps as Pe, withCtx as B, createTextVNode as Ge, Fragment as re, renderList as ae, ref as D, onMounted as U, normalizeClass as H, watch as J, resolveDynamicComponent as G, nextTick as X, markRaw as z, getCurrentInstance as Ee, withDirectives as _e, vShow as Se, useSlots as Le } from "vue";
import { QBtn as Q, QIcon as ie, QItem as He, QItemSection as Ye, QItemLabel as je, QInput as ce, QPopupProxy as Ce, QDate as Be, QTime as We, QCheckbox as Qe, QSelect as Fe, date as x } from "quasar";
const Me = { class: "flex column" }, Je = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ke = /* @__PURE__ */ O({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(o) {
    const e = o;
    function t() {
      const r = e.formApi.form.formStyle;
      return {
        outline: r.fieldOutlined,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        color: r.fieldColor,
        noCaps: !0
      };
    }
    return (r, n) => (h(), q("div", Me, [
      Y("div", Je, [
        T(a(Q), ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), R(a(Q), ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.clear ? (h(), R(a(Q), ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), Xe = { class: "flex row items-center" }, Ze = { class: "text-body1 text-weight-medium" }, et = { class: "flex column q-gutter-md" }, tt = /* @__PURE__ */ O({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      Y("div", Xe, [
        e.sectionApi.section.icon ? (h(), R(a(ie), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : P("", !0),
        Y("div", Ze, j(e.sectionApi.section.label), 1)
      ]),
      Y("div", et, [
        Ae(t.$slots, "default")
      ])
    ]));
  }
}), nt = /* @__PURE__ */ O({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Ie("q-icon");
      return h(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), ot = /* @__PURE__ */ O({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), R(a(He), Ue(Pe(e.itemProps)), {
      default: B(() => [
        T(a(Ye), null, {
          default: B(() => [
            T(a(je), null, {
              default: B(() => [
                Ge(j(e.entry.label), 1)
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
}), rt = { class: "flex column" }, at = /* @__PURE__ */ O({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", rt, [
      (h(!0), q(re, null, ae(e.orphanErrors, (n, s) => (h(), q("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, j(s) + " : " + j(n.join(",")), 1))), 128))
    ]));
  }
}), ue = class ue {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyle");
    _(this, "_actionComponent");
    _(this, "_orphanErrorsComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
    _(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Ke, this._orphanErrorsComponent = at, this._sectionComponent = tt, this._wrapperResetComponent = nt, this._associationDisplayComponent = ot;
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
_(ue, "_instance", new ue());
let w = ue;
class le {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new lt(r, n, this.formApi);
    return this.events.push(s), new it(s);
  }
  static create(e) {
    return new le(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((r) => {
      const n = r.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(r.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            r.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class it {
  constructor(e) {
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class lt {
  constructor(e, t, r) {
    _(this, "type");
    _(this, "data");
    _(this, "actions", []);
    _(this, "formApi");
    this.type = e, this.data = t, this.formApi = r;
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
      this.actions.forEach((e) => {
        e(this.formApi);
      });
    };
  }
}
const st = { class: "row items-center justify-end" }, ut = /* @__PURE__ */ O({
  __name: "DateField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D(), u = D();
    function l() {
      i.value && i.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function S() {
      return u.value ? u.value.hasError : !1;
    }
    function C() {
      u.value && u.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(c, S, C);
    }), (y, A) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (E) => e.modelValueOnUpdate(E)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Be), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (E) => e.modelValueOnUpdate(E)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: B(() => [
                    Y("div", st, [
                      T(a(Q), {
                        onClick: l,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), ct = { class: "row items-center justify-end" }, dt = { class: "row items-center justify-end" }, ft = /* @__PURE__ */ O({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D(), u = D(), l = D();
    function c() {
      i.value && i.value.hide();
    }
    function S() {
      u.value && u.value.hide();
    }
    function C() {
      return l.value ? l.value.validate() : !1;
    }
    function y() {
      return l.value ? l.value.hasError : !1;
    }
    function A() {
      l.value && l.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(C, y, A);
    }), (E, k) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[2] || (k[2] = (b) => e.modelValueOnUpdate(b)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Be), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: B(() => [
                    Y("div", ct, [
                      T(a(Q), {
                        onClick: c,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(We), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[1] || (k[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: B(() => [
                    Y("div", dt, [
                      T(a(Q), {
                        onClick: S,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), mt = { class: "flex column" }, pt = {
  key: 0,
  class: "q-field__bottom"
}, gt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, ht = /* @__PURE__ */ O({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = D(!0), n = e.formApi.form.formStyle;
    function s() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return J(
      () => e.modelValue,
      (l) => {
        for (const c of e.rules)
          if (t.value = c(l), t.value !== !0)
            break;
      }
    ), U(() => {
      e.registerBehaviourCallbacks(s, i, u);
    }), (l, c) => (h(), q("div", mt, [
      T(a(Qe), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: H([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", pt, j(e.field.hint), 1)) : P("", !0),
      t.value !== !0 ? (h(), q("div", gt, j(t.value), 1)) : P("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ O({
  __name: "ObjectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const t = o.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), bt = /* @__PURE__ */ O({
  __name: "SelectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = D([]), r = D([]), n = D(), s = e.formApi.form, i = s.formSettings, u = s.formStyle, l = i.rulesBehaviour === "lazy";
    function c(k, b) {
      if (k === "") {
        b(() => {
          r.value = [...t.value];
        });
        return;
      }
      b(() => {
        const V = k.toLowerCase();
        r.value = t.value.filter((f) => f.label.toLowerCase().includes(V));
      });
    }
    function S() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? n.value.hasError : !1;
    }
    function A() {
      n.value && n.value.resetValidation();
    }
    function E() {
      e.clear(), r.value = [];
    }
    return U(() => {
      S(), e.registerBehaviourCallbacks(C, y, A);
    }), (k, b) => (h(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (V) => e.modelValueOnUpdate(V)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(u).fieldOutlined,
      filled: a(u).fieldFilled,
      standout: a(u).fieldStandout,
      borderless: a(u).fieldBorderless,
      rounded: a(u).fieldRounded,
      square: a(u).fieldSquare,
      dense: a(u).fieldDense,
      hideBottomSpace: a(u).fieldHideBottomSpace,
      color: a(u).fieldColor,
      bgColor: a(u).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: E,
      onFilter: c
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function se() {
  return 20;
}
function N(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const vt = /* @__PURE__ */ O({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = D([]), l = D({
      limit: se(),
      offset: 0
    }), c = D();
    function S(b, V) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: se(),
        offset: 0
      }), V(() => {
        const g = e.formApi.form;
        f({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then((I) => {
          u.value = I.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function C() {
      X(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: b,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function y() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? c.value.hasError : !1;
    }
    function E() {
      c.value && c.value.resetValidation();
    }
    function k() {
      e.clear(), u.value = [];
    }
    return U(() => {
      C(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, V) => (h(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      outlined: a(s).fieldOutlined,
      filled: a(s).fieldFilled,
      standout: a(s).fieldStandout,
      borderless: a(s).fieldBorderless,
      rounded: a(s).fieldRounded,
      square: a(s).fieldSquare,
      dense: a(s).fieldDense,
      hideBottomSpace: a(s).fieldHideBottomSpace,
      color: a(s).fieldColor,
      bgColor: a(s).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: k,
      onFilter: S
    }, {
      option: B((f) => [
        (h(), R(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ct = /* @__PURE__ */ O({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = D([]), l = D({
      limit: se(),
      offset: 0
    }), c = D();
    function S(b, V) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: se(),
        offset: 0
      }), V(() => {
        const g = e.formApi.form;
        f({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then((I) => {
          u.value = I.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function C() {
      X(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = b.map(
          (V, f) => ({
            label: e.field.associationData.label[f] ?? "???",
            value: V,
            data: e.field.associationData.data[f]
          })
        ));
      });
    }
    function y() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? c.value.hasError : !1;
    }
    function E() {
      c.value && c.value.resetValidation();
    }
    function k() {
      e.clear(), u.value = [];
    }
    return U(() => {
      C(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, V) => (h(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(s).fieldOutlined,
      filled: a(s).fieldFilled,
      standout: a(s).fieldStandout,
      borderless: a(s).fieldBorderless,
      rounded: a(s).fieldRounded,
      square: a(s).fieldSquare,
      dense: a(s).fieldDense,
      hideBottomSpace: a(s).fieldHideBottomSpace,
      color: a(s).fieldColor,
      bgColor: a(s).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: k,
      onFilter: S
    }, {
      option: B((f) => [
        (h(), R(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), De = /* @__PURE__ */ O({
  __name: "StringField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function l() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, l, c);
    }), (S, C) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), _t = /* @__PURE__ */ O({
  __name: "NumberField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function l() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, l, c);
    }), (S, C) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class M {
  constructor(e, t, r, n, s, i, u, l, c) {
    _(this, "resourceName");
    _(this, "resourceId");
    _(this, "formMetadataAndData");
    _(this, "context");
    _(this, "formSettings");
    _(this, "formStyle");
    _(this, "actionComponent");
    _(this, "orphanErrorsComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    _(this, "associationDisplayComponent");
    _(this, "dynamicComponentRecord");
    _(this, "formApi");
    _(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = l, this.formSettings = {
      ...s,
      ...w.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...w.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? w.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? w.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? w.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? w.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? w.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...w.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: w.getGlobalFormStyle(),
      events: {},
      actionComponent: z(w.getGlobalActionComponent()),
      orphanErrorsComponent: z(w.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: z(w.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, s, i, u, l, c) {
    return new M(
      e,
      t,
      r,
      n,
      s,
      i,
      u,
      l,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = le.create(this.formApi);
    this.registerEventCallback(e);
    const t = le.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, i) => {
        const u = [];
        s.fields.forEach((y) => {
          const A = this.dynamicComponentRecord[`field-${y.field_name}-before`], E = M.getFieldComponentByFormFieldType(
            y.field_type
          ), k = this.dynamicComponentRecord[`field-${y.field_name}-after`], b = {
            associationDisplayComponent: z(
              this.associationDisplayComponent
            ),
            regularFieldType: M.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, V = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: y.label,
            hint: y.hint ?? void 0,
            prefix: y.prefix ?? void 0,
            suffix: y.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? y.readonly ?? void 0,
            cssClass: y.css_class ?? void 0,
            staticSelectOptions: y.static_select_options,
            associationData: y.field_association_data,
            rules: y.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: A ? z(A) : void 0,
            mainComponent: z(E),
            afterComponent: k ? z(k) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: b
          };
          u.push(V);
        });
        const l = this.dynamicComponentRecord[`section-${s.name ?? i}-before`], c = this.sectionComponent, S = this.dynamicComponentRecord[`section-${s.name ?? i}-after`], C = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? i.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? i.toString()] ?? {},
          beforeComponent: l ? z(l) : void 0,
          mainComponent: z(c),
          afterComponent: S ? z(S) : void 0,
          fields: u
        };
        r.push(C);
      }
    ), {
      sections: r,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: t.form,
      actionComponent: z(this.actionComponent),
      orphanErrorsComponent: z(this.orphanErrorsComponent),
      wrapperResetComponent: z(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
  }
  static getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: De,
      text: De,
      number: _t,
      date: ut,
      datetime: ft,
      selectString: bt,
      selectBelongsTo: vt,
      selectHasMany: Ct,
      checkbox: ht,
      object: yt
    }[e];
  }
}
function St(o, e, t) {
  const r = t.form, n = (l, c, S) => l[c] ? S ? () => s(l[c]) : () => l[c] : l.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(l.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (l) => String(
    x.formatDate(
      x.extractDate(l, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], u = [];
  switch (e) {
    case "date":
      i.push(Re(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(Re(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((l) => {
    const c = l;
    switch (c.type) {
      case "required":
        i.push(Ft());
        break;
      case "absence":
        i.push(Vt());
        break;
      case "acceptance":
        i.push(xt());
        break;
      case "inclusion":
        i.push(Ne(c.including));
        break;
      case "exclusion":
        i.push(kt(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        u.push("allowNull");
        break;
      case "allowBlank":
        u.push("allowBlank");
        break;
      case "positiveNumber":
        i.push(At());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Et(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          Bt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          Nt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          Ot(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          Tt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          qt(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(wt());
        break;
      case "numberNumericOnly":
        i.push($t());
        break;
      case "numberEvenOnly":
        i.push(zt());
        break;
      case "numberOddOnly":
        i.push(It());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          Ut(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          Pt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          Gt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Lt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          jt(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Yt(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          Ht(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          Wt(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Qt(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          Mt(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          Jt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          Kt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Xt(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Zt(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((l) => {
    switch (l) {
      case "allowBlank":
        return Rt(i);
      case "allowNull":
        return Dt(i);
    }
  }) : i;
}
function Ft() {
  return (o) => !!o || "Ce champ est requis";
}
function Ne(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function kt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ne.toString()}`
  );
}
function Vt() {
  return (o) => !o || "Ce champ doit être vide";
}
function xt() {
  return (o) => !!o || "Doit être accepté";
}
function Dt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Rt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function At() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Et(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Bt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Nt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ot(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Tt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function qt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function wt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function $t() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function zt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function It() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Ut(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Pt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Gt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Lt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Ht(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Yt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Wt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Qt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function Mt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function Jt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function Xt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Zt(o, e) {
  return (t) => {
    const r = o();
    return x.extractDate(String(t), e) !== x.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Re(o) {
  return (e) => e == null || e === "" ? !0 : en(e, o) || `Date invalide. Format : ${o}`;
}
function en(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = x.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : x.formatDate(t, e) === o;
}
const tn = {
  computeServerRules: St
}, nn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, on = ["index"], rn = /* @__PURE__ */ O({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, s = () => {
    };
    const i = A(), u = D(), l = D([]);
    function c() {
      u.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), u.value = S(u.value), N(t.field.events.onReset), X(() => {
        te();
      });
    }
    function S(m) {
      const v = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), v.formSettings.backendDateFormat),
            v.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(
              String(m),
              v.formSettings.backendDatetimeFormat
            ),
            v.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function C(m) {
      const v = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), v.formSettings.dateFormat),
            v.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), v.formSettings.datetimeFormat),
            v.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          u.value = "";
          break;
        case "checkbox":
          u.value = !1;
          break;
        case "date":
          u.value = null;
          break;
        case "datetime":
          u.value = null;
          break;
        case "number":
          u.value = null;
          break;
        case "selectString":
          u.value = void 0;
          break;
        case "text":
          u.value = "";
          break;
        case "object":
          u.value = {};
          break;
        case "selectBelongsTo":
          u.value = void 0;
          break;
        case "selectHasMany":
          u.value = void 0;
          break;
      }
      N(t.field.events.onClear);
    }
    function A() {
      return tn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function E(m) {
      u.value = m;
    }
    function k() {
      return a(u);
    }
    function b() {
      return C(a(u));
    }
    function V(m) {
      l.value = m;
    }
    function f() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0);
    }
    function g() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1);
    }
    function I(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.readonly = m);
    }
    function de(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.hint = m);
    }
    function fe(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.cssClass = m);
    }
    function me(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.suffix = m);
    }
    function pe(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.prefix = m);
    }
    function ge(m) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.label = m);
    }
    function Z() {
      const m = r();
      return N(t.field.events.onValidated), m;
    }
    function ee() {
      return n();
    }
    function te() {
      return s();
    }
    function he(m, v, K) {
      r = m, n = v, s = K;
    }
    const ye = {
      reset: c,
      clear: y,
      validate: Z,
      isValid: ee,
      hide: f,
      unhide: g,
      resetValidation: te,
      getValueDeserialized: b,
      getValueSerialized: k,
      setupBackendErrors: V,
      setReadonlyState: I,
      setHint: de,
      setCssClass: fe,
      setSuffix: me,
      setPrefix: pe,
      setLabel: ge,
      field: t.field
    };
    return e(ye), J(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid ? ee() : null,
      (m) => {
        m && N(t.field.events.onIsValid);
      }
    ), U(() => {
      var v;
      c();
      const m = (v = Ee()) == null ? void 0 : v.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, v) => _e((h(), q("div", null, [
      t.field.beforeComponent ? (h(), R(G(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      (h(), R(G(t.field.mainComponent), {
        modelValue: u.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: c,
        clear: y,
        getValueDeserialized: b,
        getValueSerialized: k,
        validate: Z,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), R(G(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      l.value.length > 0 ? (h(), q("div", nn, [
        (h(!0), q(re, null, ae(l.value, (K, be) => (h(), q("div", {
          index: be,
          class: "flex column"
        }, j(K), 9, on))), 256))
      ])) : P("", !0)
    ], 512)), [
      [Se, t.field.hidden !== !0]
    ]);
  }
}), an = { class: "flex column" }, ln = /* @__PURE__ */ O({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: i,
      clear: u,
      validate: S,
      isValid: C,
      hide: l,
      unhide: c,
      resetValidation: y,
      getFields: A,
      setReadonlyState: E,
      setCssClass: k,
      setIcon: b,
      setLabel: V,
      section: t.section
    };
    function s() {
      t.section.fields.forEach((f) => {
        const g = f.metadata.field_name, I = t.formApi.getFieldByName(g);
        I && r.set(g, I);
      });
    }
    function i() {
      r.forEach((f) => {
        f.reset();
      }), N(t.section.events.onReset);
    }
    function u() {
      r.forEach((f) => {
        f.clear();
      }), N(t.section.events.onClear);
    }
    function l() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((g) => {
        g.hide();
      }), f.hidden = !0, N(t.section.events.onHide));
    }
    function c() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((g) => {
        g.unhide();
      }), f.hidden = !1, N(t.section.events.onUnhide));
    }
    function S() {
      let f = !0;
      return r.forEach((g) => {
        if (!g.validate()) {
          f = !1;
          return;
        }
      }), N(t.section.events.onValidated), f;
    }
    function C() {
      let f = !0;
      return r.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function y() {
      r.forEach((f) => {
        f.resetValidation();
      });
    }
    function A() {
      return r;
    }
    function E(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.readonly = f);
    }
    function k(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.cssClass = f);
    }
    function b(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.icon = f);
    }
    function V(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.label = f);
    }
    return e(n), J(
      () => t.section.events.onIsValid ? C() : null,
      (f) => {
        f && N(t.section.events.onIsValid);
      }
    ), U(() => {
      var g;
      const f = (g = Ee()) == null ? void 0 : g.exposed;
      f && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        f
      ), s();
    }), (f, g) => _e((h(), q("div", an, [
      t.section.beforeComponent ? (h(), R(G(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0),
      (h(), R(G(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: B(() => [
          Ae(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), R(G(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0)
    ], 512)), [
      [Se, t.section.hidden !== !0]
    ]);
  }
}), sn = { class: "flex column" }, fn = /* @__PURE__ */ O({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    formStyle: {},
    actionComponent: {},
    orphanErrorsComponent: {},
    sectionComponent: {},
    wrapperResetComponent: {},
    associationDisplayComponent: {},
    associationDisplayRecord: {},
    eventManager: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = "";
    const s = Le(), i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), l = D(M.getEmptyFormBeforeInit()), c = D(!1), S = D(!1), C = D("create"), y = D({});
    async function A() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = M.getForm(
        t.resourceName,
        t.resourceId,
        k(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        W,
        t.eventManager
      ), t.resourceId && (C.value = "edit"), c.value = !0, X(() => {
        var d, p;
        N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReady);
      });
    }
    async function E() {
      var F, $;
      if (!V())
        return;
      S.value = !0, fe();
      const d = b(), p = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (p.success)
        y.value = {}, C.value === "create" && (C.value = "edit"), r && p.resource_data && (r.resource_data = p.resource_data), n = JSON.stringify(b()), g();
      else {
        y.value = {};
        const ne = [];
        [...i].forEach((L) => {
          const oe = p.errors[L[0]];
          oe && (L[1].setupBackendErrors(oe), ne.push(L[0]));
        }), Object.entries(p.errors).forEach((L) => {
          ne.includes(L[0]) || (y.value[L[0]] = L[1]);
        });
      }
      N(($ = (F = l.value) == null ? void 0 : F.events) == null ? void 0 : $.onSubmit), S.value = !1;
    }
    function k() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const p in s) {
        const F = s[p];
        if (F) {
          const $ = O({
            inheritAttrs: !1,
            setup(ne, { attrs: L, slots: oe }) {
              return () => F({
                ...ne,
                ...L,
                slots: oe
              });
            }
          });
          switch (p) {
            case "sections":
              d.sectionComponent = $;
              break;
            case "actions":
              d.actionComponent = $;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = $;
              break;
            case "association-display":
              d.associationDisplayComponent = $;
              break;
            default:
              d.dynamicComponentRecord[p] = $;
              break;
          }
        }
      }
      return d;
    }
    function b() {
      const d = {};
      return [...i].forEach((p) => {
        d[p[0]] = p[1].getValueDeserialized();
      }), d;
    }
    function V() {
      var p, F;
      let d = !0;
      return i.forEach(($) => {
        if (!$.validate()) {
          d = !1;
          return;
        }
      }), N((F = (p = l.value) == null ? void 0 : p.events) == null ? void 0 : F.onValidated), d;
    }
    function f() {
      let d = !0;
      return i.forEach((p) => {
        if (!p.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function g() {
      var d, p;
      i.forEach((F) => {
        F.reset();
      }), N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReset);
    }
    function I() {
      var d, p;
      i.forEach((F) => {
        F.clear();
      }), N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onClear);
    }
    function de() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function fe() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function me(d) {
      if (r)
        return r.resource_data[d];
    }
    function pe(d) {
      return u.get(d);
    }
    function ge() {
      return u;
    }
    function Z(d) {
      return i.get(d);
    }
    function ee() {
      return i;
    }
    function te() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function he() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((p) => {
        (t[p] === null || t[p] === void 0) && console.warn(`Missing props for <Submit64> -> ${p}`);
      });
    }
    function ye() {
      return a(C);
    }
    function m() {
      return n !== JSON.stringify(b());
    }
    function v(d) {
      l.value && (l.value.context = d);
    }
    function K(d) {
      l.value && (l.value.cssClass = d);
    }
    function be(d) {
      l.value && (l.value.readonly = d);
    }
    function Oe() {
      return l;
    }
    function Te(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.find((F) => F.name === d);
    }
    function qe(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.map((F) => F.fields).flat().find((F) => F.metadata.field_name === d);
    }
    function ke(d, p) {
      u.set(d, p);
    }
    function Ve(d, p) {
      i.set(d, p);
    }
    const xe = {
      getFormRef: Oe,
      getSectionRef: Te,
      getFieldRef: qe,
      registerSectionWrapperRef: ke,
      registerFieldWrapperRef: Ve
    }, we = new Proxy({}, {
      get(d, p) {
        var F;
        return (F = l.value) == null ? void 0 : F[p];
      }
    }), W = {
      getMode: ye,
      getSectionByName: pe,
      getSections: ge,
      getFieldByName: Z,
      getFields: ee,
      validateForm: V,
      isFormValid: f,
      resetForm: g,
      clearForm: I,
      resetValidation: de,
      submitForm: E,
      valuesHasChanged: m,
      getInitialValueByFieldName: me,
      getAssociationDataCallback: te,
      setContext: v,
      setCssClass: K,
      setReadonlyState: be,
      form: we
    };
    return e(W), J(
      () => {
        var d;
        return (d = l.value) != null && d.events.onIsValid ? f() : null;
      },
      () => {
        var d, p;
        N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onIsValid);
      }
    ), J(
      () => {
        var d;
        return (d = l.value) != null && d.events.onUpdate ? b() : null;
      },
      () => {
        var d, p;
        N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onUpdate);
      }
    ), U(async () => {
      he(), await A(), X(() => {
        n = JSON.stringify(b());
      });
    }), (d, p) => _e((h(), q("div", sn, [
      Y("div", {
        class: H(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(re, null, ae(l.value.sections, (F) => (h(), R(ln, {
          key: F.name,
          section: F,
          context: t.context,
          formApi: W,
          privateFormApi: xe,
          registerRef: ke
        }, {
          default: B(() => [
            (h(!0), q(re, null, ae(F.fields, ($) => (h(), R(rn, {
              key: $.metadata.field_name,
              field: $,
              context: t.context,
              formApi: W,
              privateFormApi: xe,
              registerRef: Ve
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), R(G(l.value.orphanErrorsComponent), {
        orphanErrors: y.value,
        formApi: W
      }, null, 8, ["orphanErrors"])),
      (h(), R(G(l.value.actionComponent), {
        isLoadingSubmit: S.value,
        submit: E,
        clear: l.value.clearable ? I : void 0,
        reset: l.value.resetable ? g : void 0,
        formApi: W
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ], 512)), [
      [Se, c.value]
    ]);
  }
});
export {
  le as DynamicLogicBuilder,
  w as Submit64,
  fn as Submit64Form
};
