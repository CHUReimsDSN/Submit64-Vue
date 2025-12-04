var lt = Object.defineProperty;
var st = (o, e, t) => e in o ? lt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var k = (o, e, t) => st(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as y, createElementVNode as Z, createVNode as D, createBlock as E, createCommentVNode as j, unref as a, mergeProps as xe, toDisplayString as K, renderSlot as Ue, resolveComponent as ut, normalizeProps as ct, guardReactiveProps as dt, withCtx as F, createTextVNode as Ce, Fragment as ge, renderList as ve, ref as S, onMounted as M, normalizeClass as W, watch as P, nextTick as ce, resolveDynamicComponent as J, markRaw as H, getCurrentInstance as Pe, withDirectives as Ae, vShow as Re, computed as oe, useSlots as ft } from "vue";
import { QBtn as re, QIcon as ue, QItem as _e, QItemSection as Se, QItemLabel as Fe, QInput as de, QPopupProxy as he, QDate as Le, QTime as mt, QCheckbox as pt, QSelect as Ne, QColor as gt, useQuasar as vt, QEditor as ht, date as O } from "quasar";
const yt = { class: "flex column" }, bt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ct = /* @__PURE__ */ z({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
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
    return (r, n) => (y(), L("div", yt, [
      Z("div", bt, [
        D(a(re), xe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (y(), E(a(re), xe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : j("", !0),
        e.formApi.clear ? (y(), E(a(re), xe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : j("", !0)
      ])
    ]));
  }
}), _t = { class: "flex row items-center" }, St = { class: "text-body1 text-weight-medium" }, Ft = { class: "flex column q-gutter-md" }, kt = /* @__PURE__ */ z({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), L("div", null, [
      Z("div", _t, [
        e.sectionApi.section.icon ? (y(), E(a(ue), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : j("", !0),
        Z("div", St, K(e.sectionApi.section.label), 1)
      ]),
      Z("div", Ft, [
        Ue(t.$slots, "default")
      ])
    ]));
  }
}), Vt = /* @__PURE__ */ z({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = ut("q-icon");
      return y(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), xt = /* @__PURE__ */ z({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), E(a(_e), ct(dt(e.itemProps)), {
      default: F(() => [
        D(a(Se), null, {
          default: F(() => [
            D(a(Fe), null, {
              default: F(() => [
                Ce(K(e.entry.label), 1)
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
}), Dt = { class: "flex column" }, At = /* @__PURE__ */ z({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), L("div", Dt, [
      (y(!0), L(ge, null, ve(e.orphanErrors, (n, s) => (y(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, K(s) + " : " + K(n.join(",")), 1))), 128))
    ]));
  }
}), be = class be {
  constructor() {
    k(this, "_formSettings");
    k(this, "_formStyle");
    k(this, "_actionComponent");
    k(this, "_orphanErrorsComponent");
    k(this, "_sectionComponent");
    k(this, "_wrapperResetComponent");
    k(this, "_associationDisplayComponent");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0,
      associationEmptyMessage: "Empty",
      requiredFieldsHasAsterisk: !0
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
      fieldBgColor: ""
    }, this._actionComponent = Ct, this._orphanErrorsComponent = At, this._sectionComponent = kt, this._wrapperResetComponent = Vt, this._associationDisplayComponent = xt;
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
k(be, "_instance", new be());
let G = be;
class ye {
  constructor(e) {
    k(this, "formApi");
    k(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new Rt(r, n, this.formApi);
    return this.events.push(s), new Nt(s);
  }
  static create(e) {
    return new ye(e);
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
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(r.getActionCallback());
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
class Rt {
  constructor(e, t, r) {
    k(this, "type");
    k(this, "data");
    k(this, "formApi");
    k(this, "action", () => {
    });
    k(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
      case "Field is invalid":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onIsInvalid"
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
          key: "onIsValid"
        };
      case "Section is invalid":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onIsInvalid"
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
      case "Section is updated":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onUpdate"
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
      case "Form submit is successful":
        return {
          target: "form",
          key: "onSubmitSuccess"
        };
      case "Form submit is unsuccessful":
        return {
          target: "form",
          key: "onSubmitUnsuccess"
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
      case "Form is invalid":
        return {
          target: "form",
          key: "onIsInvalid"
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
      this.cyclicActionCallSet.has(this.type) || (this.cyclicActionCallSet.add(this.type), this.action(this.formApi), this.cyclicActionCallSet.clear());
    };
  }
}
class Nt {
  constructor(e) {
    k(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Bt = { class: "row items-center justify-end" }, Et = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = S(), u = S();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function C() {
      return u.value ? !u.value.hasError : !1;
    }
    function f() {
      u.value && u.value.resetValidation();
    }
    return M(() => {
      e.registerBehaviourCallbacks(c, C, f);
    }), (v, A) => (y(), E(a(de), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (T) => e.modelValueOnUpdate(T)),
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
      class: W(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        D(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(a(he), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(a(Le), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (T) => e.modelValueOnUpdate(T)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: F(() => [
                    Z("div", Bt, [
                      D(a(re), {
                        onClick: i,
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
}), wt = { class: "row items-center justify-end" }, Ot = { class: "row items-center justify-end" }, Tt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = S(), u = S(), i = S();
    function c() {
      l.value && l.value.hide();
    }
    function C() {
      u.value && u.value.hide();
    }
    function f() {
      return i.value ? i.value.validate() : !1;
    }
    function v() {
      return i.value ? !i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    return M(() => {
      e.registerBehaviourCallbacks(f, v, A);
    }), (T, R) => (y(), E(a(de), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[2] || (R[2] = (N) => e.modelValueOnUpdate(N)),
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
      class: W(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        D(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(a(he), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(a(Le), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[0] || (R[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: F(() => [
                    Z("div", wt, [
                      D(a(re), {
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
        D(a(ue), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(a(he), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(a(mt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[1] || (R[1] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: F(() => [
                    Z("div", Ot, [
                      D(a(re), {
                        onClick: C,
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
}), qt = { class: "flex column" }, It = {
  key: 0,
  class: "q-field__bottom"
}, zt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, $t = /* @__PURE__ */ z({
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
    const e = o, t = S(!0), n = e.formApi.form.formStyle;
    function s() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return P(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), M(() => {
      e.registerBehaviourCallbacks(s, l, u);
    }), (i, c) => (y(), L("div", qt, [
      D(a(pt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (C) => e.modelValueOnUpdate(C)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: W([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (y(), L("div", It, K(e.field.hint), 1)) : j("", !0),
      t.value !== !0 ? (y(), L("div", zt, K(t.value), 1)) : j("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ z({
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
    const e = o, t = S([]), r = S([]), n = S(), s = e.formApi.form, l = s.formSettings, u = s.formStyle, i = l.rulesBehaviour === "lazy";
    function c(R, N) {
      if (R === "") {
        N(() => {
          r.value = [...t.value];
        });
        return;
      }
      N(() => {
        const I = R.toLowerCase();
        r.value = t.value.filter((U) => U.label.toLowerCase().includes(I));
      });
    }
    function C() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function f() {
      return n.value ? n.value.validate() : !1;
    }
    function v() {
      return n.value ? !n.value.hasError : !1;
    }
    function A() {
      n.value && n.value.resetValidation();
    }
    function T() {
      e.clear(), r.value = [];
    }
    return M(() => {
      C(), e.registerBehaviourCallbacks(f, v, A);
    }), (R, N) => (y(), E(a(Ne), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (I) => e.modelValueOnUpdate(I)),
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
      class: W(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: T,
      onFilter: c
    }, {
      default: F(() => [
        D(a(_e), {
          dense: a(u).fieldDense
        }, {
          default: F(() => [
            D(a(Se), null, {
              default: F(() => [
                D(a(Fe), null, {
                  default: F(() => [
                    Ce(K(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Te = "__init", qe = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = S([]), i = S(
      f()
    ), c = S(), C = S(Te);
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function v(h, w) {
      if (h === C.value) {
        w(() => {
        });
        return;
      }
      const V = e.formApi.getAssociationDataCallback();
      i.value = f(), C.value = h;
      const $ = e.formApi.form;
      i.value.isLoading = !0, V({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: h,
        context: $.context
      }).then((q) => {
        w(() => {
          u.value = q.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function A() {
      const h = e.getValueSerialized();
      !h || !e.field.associationData || (u.value = [
        {
          label: e.field.associationData.label[0] ?? "???",
          value: h,
          data: e.field.associationData.data[0]
        }
      ]);
    }
    function T() {
      return c.value ? c.value.validate() : !1;
    }
    function R() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [], C.value = Te;
    }
    function U(h) {
      const w = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && h.to === w && w !== -1) {
        const V = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: V.resourceName,
          resourceId: V.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: C.value,
          context: V.context
        }).then((q) => {
          u.value = u.value.concat(
            q.rows
          ), i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), q.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, h.ref.refresh();
        });
      }
    }
    return M(() => {
      ce(() => {
        A();
      }), e.registerBehaviourCallbacks(
        T,
        R,
        N,
        A
      );
    }), (h, w) => (y(), E(a(Ne), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": w[0] || (w[0] = (V) => e.modelValueOnUpdate(V)),
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
      class: W(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: I,
      onFilter: v,
      onVirtualScroll: U
    }, {
      "no-option": F(() => [
        D(a(_e), {
          dense: a(s).fieldDense
        }, {
          default: F(() => [
            D(a(Se), null, {
              default: F(() => [
                D(a(Fe), null, {
                  default: F(() => [
                    Ce(K(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      option: F((V) => [
        (y(), E(J(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: V.opt,
          itemProps: V.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ie = "__init", ze = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = S([]), i = S(
      f()
    ), c = S(), C = S(Ie);
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function v(h, w) {
      if (h === C.value) {
        w(() => {
        });
        return;
      }
      const V = e.formApi.getAssociationDataCallback();
      i.value = f(), C.value = h;
      const $ = e.formApi.form;
      i.value.isLoading = !0, V({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: h,
        context: $.context
      }).then((q) => {
        w(() => {
          u.value = q.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function A() {
      const h = e.getValueSerialized();
      !h || !e.field.associationData || (u.value = h.map((w, V) => ({
        label: e.field.associationData.label[V] ?? "???",
        value: w,
        data: e.field.associationData.data[V]
      })));
    }
    function T() {
      return c.value ? c.value.validate() : !1;
    }
    function R() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [], C.value = Ie;
    }
    function U(h) {
      const w = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && h.to === w && w !== -1) {
        const V = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: V.resourceName,
          resourceId: V.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: C.value,
          context: V.context
        }).then((q) => {
          u.value = u.value.concat(
            q.rows
          ), i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), q.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, h.ref.refresh();
        });
      }
    }
    return M(() => {
      ce(() => {
        A();
      }), e.registerBehaviourCallbacks(
        T,
        R,
        N,
        A
      );
    }), (h, w) => (y(), E(a(Ne), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": w[0] || (w[0] = (V) => e.modelValueOnUpdate(V)),
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
      class: W(e.field.cssClass),
      "lazy-rules": l,
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
      onClear: I,
      onFilter: v,
      onVirtualScroll: U
    }, {
      "no-option": F(() => [
        D(a(_e), {
          dense: a(s).fieldDense
        }, {
          default: F(() => [
            D(a(Se), null, {
              default: F(() => [
                D(a(Fe), null, {
                  default: F(() => [
                    Ce(K(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      option: F((V) => [
        (y(), E(J(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: V.opt,
          itemProps: V.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), De = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = S();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return M(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (C, f) => (y(), E(a(de), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: W(e.field.cssClass),
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
}), Pt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = S();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return M(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (C, f) => (y(), E(a(de), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: W(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), Lt = /* @__PURE__ */ z({
  __name: "ColorField",
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = S();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return M(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (C, f) => (y(), E(a(de), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[1] || (f[1] = (v) => e.modelValueOnUpdate(v)),
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
      class: W(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        D(a(ue), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(a(he), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(a(gt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[0] || (f[0] = (v) => e.modelValueOnUpdate(v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Gt = /* @__PURE__ */ z({
  __name: "WysiwygField",
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
    const e = o, t = vt(), n = e.formApi.form.formStyle, s = [
      [
        {
          label: t.lang.editor.align,
          icon: t.iconSet.editor.align,
          fixedLabel: !0,
          list: "only-icons",
          options: ["left", "center", "right", "justify"]
        }
      ],
      ["bold", "italic", "strike", "underline", "subscript", "superscript"],
      ["token", "hr", "link", "custom_btn"],
      ["print", "fullscreen"],
      [
        {
          label: t.lang.editor.formatting,
          icon: t.iconSet.editor.formatting,
          list: "no-icons",
          options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
        },
        {
          label: t.lang.editor.fontSize,
          icon: t.iconSet.editor.fontSize,
          fixedLabel: !0,
          fixedIcon: !0,
          list: "no-icons",
          options: [
            "size-1",
            "size-2",
            "size-3",
            "size-4",
            "size-5",
            "size-6",
            "size-7"
          ]
        },
        {
          label: t.lang.editor.defaultFont,
          icon: t.iconSet.editor.font,
          fixedIcon: !0,
          list: "no-icons",
          options: [
            "default_font",
            "arial",
            "arial_black",
            "comic_sans",
            "courier_new",
            "impact",
            "lucida_grande",
            "times_new_roman",
            "verdana"
          ]
        },
        "removeFormat"
      ],
      ["quote", "unordered", "ordered", "outdent", "indent"],
      ["undo", "redo"],
      ["viewsource"]
    ], l = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, u = S();
    function i() {
      return !!u.value;
    }
    function c() {
      return !!u.value;
    }
    function C() {
    }
    return M(() => {
      e.registerBehaviourCallbacks(i, c, C);
    }), (f, v) => e.modelValue ? (y(), E(a(ht), {
      key: 0,
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (A) => e.modelValueOnUpdate(A)),
      toolbar: s,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: W(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : j("", !0);
  }
});
class te {
  constructor(e, t, r, n, s, l, u, i, c) {
    k(this, "resourceName");
    k(this, "resourceId");
    k(this, "formMetadataAndData");
    k(this, "context");
    k(this, "formSettings");
    k(this, "formStyle");
    k(this, "actionComponent");
    k(this, "orphanErrorsComponent");
    k(this, "sectionComponent");
    k(this, "wrapperResetComponent");
    k(this, "associationDisplayComponent");
    k(this, "dynamicComponentRecord");
    k(this, "formApi");
    k(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...s,
      ...G.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...G.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? G.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? G.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? G.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? G.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? G.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...G.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: G.getGlobalFormStyle(),
      events: {},
      actionComponent: H(G.getGlobalActionComponent()),
      orphanErrorsComponent: H(G.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: H(G.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, s, l, u, i, c) {
    return new te(
      e,
      t,
      r,
      n,
      s,
      l,
      u,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ye.create(this.formApi);
    this.registerEventCallback(e);
    const t = ye.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((v) => {
          const A = this.dynamicComponentRecord[`field-${v.field_name}-before`], T = te.getFieldComponentByFormFieldType(v), R = this.dynamicComponentRecord[`field-${v.field_name}-after`], N = {
            associationDisplayComponent: H(
              this.associationDisplayComponent
            ),
            regularFieldType: te.getRegularFieldTypeByFieldType(
              v.field_type
            )
          };
          let I = v.label;
          this.formSettings.requiredFieldsHasAsterisk && v.rules.find((h) => h.type === "required") && (I = I.concat("*"));
          const U = {
            type: v.field_type,
            extraType: v.field_extra_type,
            metadata: Object.freeze(v),
            label: I,
            hint: v.hint ?? void 0,
            prefix: v.prefix ?? void 0,
            suffix: v.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? v.readonly ?? void 0,
            cssClass: v.css_class ?? void 0,
            staticSelectOptions: v.static_select_options,
            associationData: v.field_association_data,
            rules: v.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: A ? H(A) : void 0,
            mainComponent: H(T),
            afterComponent: R ? H(R) : void 0,
            events: t.fields[v.field_name] ?? {},
            componentOptions: N
          };
          u.push(U);
        });
        const i = this.dynamicComponentRecord[`section-${s.name ?? l}-before`], c = this.sectionComponent, C = this.dynamicComponentRecord[`section-${s.name ?? l}-after`], f = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? l.toString()] ?? {},
          beforeComponent: i ? H(i) : void 0,
          mainComponent: H(c),
          afterComponent: C ? H(C) : void 0,
          fields: u
        };
        r.push(f);
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
      allowBulk: this.formMetadataAndData.form.allow_bulk ?? !1,
      events: t.form,
      actionComponent: H(this.actionComponent),
      orphanErrorsComponent: H(this.orphanErrorsComponent),
      wrapperResetComponent: H(this.wrapperResetComponent),
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
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return Lt;
          case "wysiwyg":
            return Gt;
          default:
            return De;
        }
      case "text":
        return De;
      case "number":
        return Pt;
      case "date":
        return Et;
      case "datetime":
        return Tt;
      case "selectString":
        return Ut;
      case "selectBelongsTo":
        return qe;
      case "selectHasMany":
        return ze;
      case "selectHasAndBelongsToMany":
        return ze;
      case "selectHasOne":
        return qe;
      case "checkbox":
        return $t;
      case "object":
      default:
        return De;
    }
  }
}
function B(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Ht(o, e, t) {
  const r = t.form, n = (i, c, C) => i[c] ? C ? () => s(i[c]) : () => i[c] : i.compare_to ? () => {
    var f;
    return ((f = t.getFieldByName(i.compare_to)) == null ? void 0 : f.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (i) => String(
    O.formatDate(
      O.extractDate(i, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], u = [];
  switch (e) {
    case "date":
      l.push($e(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push($e(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(Mt());
        break;
      case "absence":
        l.push(Qt());
        break;
      case "acceptance":
        l.push(jt());
        break;
      case "inclusion":
        l.push(Ge(c.including));
        break;
      case "exclusion":
        l.push(Yt(c.excluding));
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
        l.push(Kt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Xt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Zt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          en(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          tn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          nn(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          an(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(on());
        break;
      case "numberNumericOnly":
        l.push(rn());
        break;
      case "numberEvenOnly":
        l.push(ln());
        break;
      case "numberOddOnly":
        l.push(sn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          un(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          cn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          dn(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          fn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          gn(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          pn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          mn(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          vn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          hn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          yn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          bn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Cn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          _n(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Sn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return Jt(l);
      case "allowNull":
        return Wt(l);
    }
  }) : l;
}
function Mt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ge(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Yt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ge.toString()}`
  );
}
function Qt() {
  return (o) => !o || "Ce champ doit être vide";
}
function jt() {
  return (o) => !!o || "Doit être accepté";
}
function Wt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Jt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Kt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Xt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Zt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function en(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function tn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function nn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function an(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function on() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function rn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ln() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function sn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function un(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function cn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function dn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function fn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function mn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function pn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function gn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function vn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function hn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function yn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function bn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function Cn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function _n(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Sn(o, e) {
  return (t) => {
    const r = o();
    return O.extractDate(String(t), e) !== O.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function $e(o) {
  return (e) => e == null || e === "" ? !0 : Fn(e, o) || `Date invalide. Format : ${o}`;
}
function Fn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = O.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : O.formatDate(t, e) === o;
}
const kn = {
  computeServerRules: Ht
}, Vn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, xn = ["index"], Dn = /* @__PURE__ */ z({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, s = () => {
    }, l = () => {
    };
    const u = T(), i = S(), c = S([]);
    function C(m = !0) {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = f(i.value), m && B(t.field.events.onReset), l(), ce(() => {
        fe();
      });
    }
    function f(m) {
      const _ = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), _.formSettings.backendDateFormat),
            _.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(
              String(m),
              _.formSettings.backendDatetimeFormat
            ),
            _.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function v(m) {
      const _ = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), _.formSettings.dateFormat),
            _.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), _.formSettings.datetimeFormat),
            _.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function A() {
      switch (t.field.type) {
        case "string":
          i.value = "";
          break;
        case "checkbox":
          i.value = !1;
          break;
        case "date":
          i.value = null;
          break;
        case "datetime":
          i.value = null;
          break;
        case "number":
          i.value = null;
          break;
        case "selectString":
          i.value = void 0;
          break;
        case "text":
          i.value = "";
          break;
        case "object":
          i.value = {};
          break;
        case "selectBelongsTo":
          i.value = void 0;
          break;
        case "selectHasMany":
          i.value = void 0;
          break;
      }
      B(t.field.events.onClear);
    }
    function T() {
      return kn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function R(m) {
      i.value = m;
    }
    function N() {
      return a(i);
    }
    function I() {
      return v(a(i));
    }
    function U(m) {
      c.value = m;
    }
    function h() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, B(t.field.events.onHide));
    }
    function w() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, B(t.field.events.onUnhide));
    }
    function V(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.readonly = m);
    }
    function $(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hint = m);
    }
    function q(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.cssClass = m);
    }
    function ie(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.suffix = m);
    }
    function ne(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.prefix = m);
    }
    function p(m) {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.label = m);
    }
    function b() {
      const m = r();
      return B(t.field.events.onValidated), m;
    }
    function Y() {
      return n();
    }
    function ke() {
      return !Y();
    }
    function fe() {
      return s();
    }
    function Ve(m, _, se, ae) {
      r = m, n = _, s = se, ae && (l = ae);
    }
    const le = {
      reset: C,
      clear: A,
      validate: b,
      isValid: Y,
      isInvalid: ke,
      hide: h,
      unhide: w,
      resetValidation: fe,
      getValueDeserialized: I,
      getValueSerialized: N,
      setupBackendErrors: U,
      setReadonlyState: V,
      setHint: $,
      setCssClass: q,
      setSuffix: ie,
      setPrefix: ne,
      setLabel: p,
      setValue: R,
      field: t.field
    };
    return e(le), P(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        B(t.field.events.onUpdate);
      }
    ), P(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        B(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), M(() => {
      var _;
      C(!1);
      const m = (_ = Pe()) == null ? void 0 : _.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, _) => Ae((y(), L("div", null, [
      t.field.beforeComponent ? (y(), E(J(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : j("", !0),
      (y(), E(J(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(u),
        reset: C,
        clear: A,
        getValueDeserialized: I,
        getValueSerialized: N,
        validate: b,
        modelValueOnUpdate: R,
        registerBehaviourCallbacks: Ve
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (y(), E(J(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : j("", !0),
      c.value.length > 0 ? (y(), L("div", Vn, [
        (y(!0), L(ge, null, ve(c.value, (se, ae) => (y(), L("div", {
          index: ae,
          class: "flex column"
        }, K(se), 9, xn))), 256))
      ])) : j("", !0)
    ], 512)), [
      [Re, t.field.hidden !== !0]
    ]);
  }
}), An = { class: "flex column" }, Rn = /* @__PURE__ */ z({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, s = null;
    const l = {
      reset: c,
      clear: C,
      validate: A,
      isValid: T,
      isInvalid: R,
      hide: f,
      unhide: v,
      resetValidation: N,
      getFields: I,
      setReadonlyState: U,
      setCssClass: h,
      setIcon: w,
      setLabel: V,
      section: t.section
    }, u = S(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const b = p.metadata.field_name, Y = t.formApi.getFieldByName(b);
        Y && u.value.set(b, Y);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.reset();
      }), B(t.section.events.onReset);
    }
    function C() {
      u.value.forEach((p) => {
        p.clear();
      }), B(t.section.events.onClear);
    }
    function f() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((b) => {
        b.hide();
      }), p.hidden = !0, B(t.section.events.onHide));
    }
    function v() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((b) => {
        b.unhide();
      }), p.hidden = !1, B(t.section.events.onUnhide));
    }
    function A() {
      let p = !0;
      return u.value.forEach((b) => {
        if (!b.validate()) {
          p = !1;
          return;
        }
      }), B(t.section.events.onValidated), p;
    }
    function T() {
      let p = !0;
      return u.value.forEach((b) => {
        if (!b.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function R() {
      return !T();
    }
    function N() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function I() {
      return u.value;
    }
    function U(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.readonly = p);
    }
    function h(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.cssClass = p);
    }
    function w(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.icon = p);
    }
    function V(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.label = p);
    }
    function $() {
      const p = {};
      for (const [b, Y] of u.value)
        p[b] = Y.getValueSerialized();
      return p;
    }
    e(l);
    const q = oe(() => T()), ie = oe(() => R()), ne = oe(() => $());
    return P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = P(q, (b) => {
          b && B(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = P(ie, (b) => {
          var Y;
          b && B((Y = t.section) == null ? void 0 : Y.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        s == null || s(), s = null, p && (s = P(
          ne,
          () => {
            var b;
            B((b = t.section) == null ? void 0 : b.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), M(() => {
      var b;
      const p = (b = Pe()) == null ? void 0 : b.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ce(() => {
        i();
      });
    }), (p, b) => Ae((y(), L("div", An, [
      t.section.beforeComponent ? (y(), E(J(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : j("", !0),
      (y(), E(J(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: F(() => [
          Ue(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (y(), E(J(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : j("", !0)
    ], 512)), [
      [Re, t.section.hidden !== !0]
    ]);
  }
}), Nn = { class: "flex column" }, On = /* @__PURE__ */ z({
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
    let r = null, n = "", s = 0, l = 0, u = null, i = null, c = null;
    const C = ft(), f = S(te.getEmptyFormBeforeInit()), v = S(!1), A = S(!1), T = S(!1), R = S(!1), N = S("create"), I = S({}), U = S(/* @__PURE__ */ new Map()), h = S(/* @__PURE__ */ new Map());
    async function w() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = te.getForm(
        t.resourceName,
        t.resourceId,
        $(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ee,
        t.eventManager
      ), s = f.value.sections.length, l = f.value.sections.map((d) => d.fields).flat().length, t.resourceId && (N.value = "edit");
    }
    async function V() {
      var x, Q, me;
      if (!ne())
        return;
      B((x = f.value) == null ? void 0 : x.events.onSubmit), R.value = !0, Ve();
      const d = q(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        I.value = {}, N.value === "create" && (N.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(q()), f.value = te.getForm(
          t.resourceName,
          t.resourceId,
          $(),
          {
            form: g.form,
            resource_data: g.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), B((me = f.value) == null ? void 0 : me.events.onSubmitSuccess);
      else {
        I.value = {};
        const pe = [];
        for (const [X, it] of h.value) {
          const Oe = g.errors[X];
          Oe && (it.setupBackendErrors(Oe), pe.push(X));
        }
        Object.entries(g.errors).forEach((X) => {
          pe.includes(X[0]) || (I.value[X[0]] = X[1]);
        }), B((Q = f.value) == null ? void 0 : Q.events.onSubmitUnsuccess);
      }
      R.value = !1;
    }
    function $() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in C) {
        const x = C[g];
        if (x) {
          const Q = z({
            inheritAttrs: !1,
            setup(me, { attrs: pe, slots: X }) {
              return () => x({
                ...me,
                ...pe,
                slots: X
              });
            }
          });
          switch (g) {
            case "sections":
              d.sectionComponent = Q;
              break;
            case "actions":
              d.actionComponent = Q;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = Q;
              break;
            case "association-display":
              d.associationDisplayComponent = Q;
              break;
            default:
              d.dynamicComponentRecord[g] = Q;
              break;
          }
        }
      }
      return d;
    }
    function q() {
      const d = {};
      for (const [g, x] of h.value)
        d[g] = x.getValueDeserialized();
      return d;
    }
    function ie() {
      const d = {};
      for (const [g, x] of h.value)
        d[g] = x.getValueSerialized();
      return d;
    }
    function ne() {
      var g;
      let d = !0;
      return h.value.forEach((x) => {
        if (!x.validate()) {
          d = !1;
          return;
        }
      }), B((g = f.value) == null ? void 0 : g.events.onValidated), d;
    }
    function p() {
      let d = !0;
      return h.value.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function b() {
      return !p();
    }
    function Y() {
      var d;
      h.value.forEach((g) => {
        g.reset();
      }), B((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function ke() {
      var d;
      h.value.forEach((g) => {
        g.clear();
      }), B((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function fe() {
      h.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function Ve() {
      h.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function le(d) {
      if (r)
        return r.resource_data[d];
    }
    function m(d) {
      return U.value.get(d);
    }
    function _(d) {
      return [...U.value.values()].at(d);
    }
    function se() {
      return U.value;
    }
    function ae(d) {
      return h.value.get(d);
    }
    function He() {
      return h.value;
    }
    function Me() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ye() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Qe() {
      return a(N);
    }
    function je() {
      return n !== JSON.stringify(q());
    }
    function We(d) {
      f.value && (f.value.context = d);
    }
    function Je(d) {
      f.value && (f.value.cssClass = d);
    }
    function Ke(d) {
      f.value && (f.value.readonly = d);
    }
    function Xe() {
      return T.value;
    }
    function Ze() {
      return f;
    }
    function et(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.find((x) => x.name === d);
    }
    function tt(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.map((x) => x.fields).flat().find((x) => x.metadata.field_name === d);
    }
    function Be(d, g) {
      U.value.set(d, g), s === U.value.size && (v.value = !0);
    }
    function Ee(d, g) {
      h.value.set(d, g), l === h.value.size && (A.value = !0);
    }
    const we = {
      getFormRef: Ze,
      getSectionRef: et,
      getFieldRef: tt,
      registerSectionWrapperRef: Be,
      registerFieldWrapperRef: Ee
    }, nt = new Proxy({}, {
      get(d, g) {
        var x;
        return (x = f.value) == null ? void 0 : x[g];
      }
    }), ee = {
      getMode: Qe,
      getSectionByName: m,
      getSectionByIndex: _,
      getSections: se,
      getFieldByName: ae,
      getFields: He,
      validate: ne,
      isValid: p,
      isInvalid: b,
      reset: Y,
      clear: ke,
      resetValidation: fe,
      submit: V,
      valuesHasChanged: je,
      getInitialValueByFieldName: le,
      getAssociationDataCallback: Me,
      setContext: We,
      setCssClass: Je,
      setReadonlyState: Ke,
      isReady: Xe,
      form: nt
    };
    e(ee);
    const at = oe(() => p()), ot = oe(() => b()), rt = oe(() => ie());
    return P(
      () => v.value && A.value,
      (d) => {
        var g;
        d && !T.value && (B((g = f.value) == null ? void 0 : g.events.onReady), T.value = !0);
      }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        u == null || u(), u = null, d && (u = P(at, (g) => {
          var x;
          g && B((x = f.value) == null ? void 0 : x.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        i == null || i(), i = null, d && (i = P(ot, (g) => {
          var x;
          g && B((x = f.value) == null ? void 0 : x.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        c == null || c(), c = null, d && (c = P(
          rt,
          () => {
            var g;
            B((g = f.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), M(async () => {
      Ye(), await w(), ce(() => {
        n = JSON.stringify(q());
      });
    }), (d, g) => Ae((y(), L("div", Nn, [
      Z("div", {
        class: W(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (y(!0), L(ge, null, ve(f.value.sections, (x) => (y(), E(Rn, {
          key: x.name,
          section: x,
          context: t.context,
          formApi: ee,
          privateFormApi: we,
          registerRef: Be
        }, {
          default: F(() => [
            (y(!0), L(ge, null, ve(x.fields, (Q) => (y(), E(Dn, {
              key: Q.metadata.field_name,
              field: Q,
              context: t.context,
              formApi: ee,
              privateFormApi: we,
              registerRef: Ee
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (y(), E(J(f.value.orphanErrorsComponent), {
        orphanErrors: I.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (y(), E(J(f.value.actionComponent), {
        isLoadingSubmit: R.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Re, T.value]
    ]);
  }
});
export {
  ye as DynamicLogicBuilder,
  G as Submit64,
  On as Submit64Form
};
