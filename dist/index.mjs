var rt = Object.defineProperty;
var it = (a, e, t) => e in a ? rt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var F = (a, e, t) => it(a, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as $, createElementBlock as L, openBlock as b, createElementVNode as Z, createVNode as D, createBlock as O, createCommentVNode as Q, unref as o, mergeProps as Ve, toDisplayString as J, renderSlot as ze, resolveComponent as lt, normalizeProps as st, guardReactiveProps as ut, withCtx as _, createTextVNode as be, Fragment as pe, renderList as ge, ref as k, onMounted as j, normalizeClass as K, watch as U, nextTick as ce, resolveDynamicComponent as W, createSlots as ct, markRaw as H, getCurrentInstance as $e, withDirectives as De, vShow as Ae, computed as oe, useSlots as dt } from "vue";
import { QBtn as re, QIcon as ue, QItem as Ce, QItemSection as _e, QItemLabel as Se, QInput as Fe, QPopupProxy as ve, QDate as Pe, QTime as ft, QCheckbox as mt, QSelect as Re, QColor as pt, date as T } from "quasar";
const gt = { class: "flex column" }, vt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, ht = /* @__PURE__ */ $({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(a) {
    const e = a;
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
    return (r, n) => (b(), L("div", gt, [
      Z("div", vt, [
        D(o(re), Ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (b(), O(o(re), Ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : Q("", !0),
        e.formApi.clear ? (b(), O(o(re), Ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : Q("", !0)
      ])
    ]));
  }
}), yt = { class: "flex row items-center" }, bt = { class: "text-body1 text-weight-medium" }, Ct = { class: "flex column q-gutter-md" }, _t = /* @__PURE__ */ $({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (b(), L("div", null, [
      Z("div", yt, [
        e.sectionApi.section.icon ? (b(), O(o(ue), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : Q("", !0),
        Z("div", bt, J(e.sectionApi.section.label), 1)
      ]),
      Z("div", Ct, [
        ze(t.$slots, "default")
      ])
    ]));
  }
}), St = /* @__PURE__ */ $({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(a) {
    const e = a;
    return (t, r) => {
      const n = lt("q-icon");
      return b(), O(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), Ft = /* @__PURE__ */ $({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (b(), O(o(Ce), st(ut(e.itemProps)), {
      default: _(() => [
        D(o(_e), null, {
          default: _(() => [
            D(o(Se), null, {
              default: _(() => [
                be(J(e.entry.label), 1)
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
}), kt = { class: "flex column" }, xt = /* @__PURE__ */ $({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (b(), L("div", kt, [
      (b(!0), L(pe, null, ge(e.orphanErrors, (n, s) => (b(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, J(s) + " : " + J(n.join(",")), 1))), 128))
    ]));
  }
}), ye = class ye {
  constructor() {
    F(this, "_formSettings");
    F(this, "_formStyle");
    F(this, "_actionComponent");
    F(this, "_orphanErrorsComponent");
    F(this, "_sectionComponent");
    F(this, "_wrapperResetComponent");
    F(this, "_associationDisplayComponent");
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
    }, this._actionComponent = ht, this._orphanErrorsComponent = xt, this._sectionComponent = _t, this._wrapperResetComponent = St, this._associationDisplayComponent = Ft;
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
F(ye, "_instance", new ye());
let G = ye;
class he {
  constructor(e) {
    F(this, "formApi");
    F(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new Vt(r, n, this.formApi);
    return this.events.push(s), new Dt(s);
  }
  static create(e) {
    return new he(e);
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
class Vt {
  constructor(e, t, r) {
    F(this, "type");
    F(this, "data");
    F(this, "formApi");
    F(this, "action", () => {
    });
    F(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class Dt {
  constructor(e) {
    F(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const At = { class: "row items-center justify-end" }, Rt = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k(), u = k();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function S() {
      return u.value ? !u.value.hasError : !1;
    }
    function f() {
      u.value && u.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(c, S, f);
    }), (y, E) => (b(), O(o(Fe), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[1] || (E[1] = (q) => e.modelValueOnUpdate(q)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(n).fieldOutlined,
      filled: o(n).fieldFilled,
      standout: o(n).fieldStandout,
      borderless: o(n).fieldBorderless,
      rounded: o(n).fieldRounded,
      square: o(n).fieldSquare,
      dense: o(n).fieldDense,
      hideBottomSpace: o(n).fieldHideBottomSpace,
      color: o(n).fieldColor,
      bgColor: o(n).fieldBgColor,
      class: K(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: _(() => [
        D(o(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: _(() => [
            D(o(ve), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: _(() => [
                D(o(Pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[0] || (E[0] = (q) => e.modelValueOnUpdate(q)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: _(() => [
                    Z("div", At, [
                      D(o(re), {
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
}), Nt = { class: "row items-center justify-end" }, Et = { class: "row items-center justify-end" }, Bt = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k(), u = k(), i = k();
    function c() {
      l.value && l.value.hide();
    }
    function S() {
      u.value && u.value.hide();
    }
    function f() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? !i.value.hasError : !1;
    }
    function E() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(f, y, E);
    }), (q, A) => (b(), O(o(Fe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[2] || (A[2] = (R) => e.modelValueOnUpdate(R)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(n).fieldOutlined,
      filled: o(n).fieldFilled,
      standout: o(n).fieldStandout,
      borderless: o(n).fieldBorderless,
      rounded: o(n).fieldRounded,
      square: o(n).fieldSquare,
      dense: o(n).fieldDense,
      hideBottomSpace: o(n).fieldHideBottomSpace,
      color: o(n).fieldColor,
      bgColor: o(n).fieldBgColor,
      class: K(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: _(() => [
        D(o(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: _(() => [
            D(o(ve), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: _(() => [
                D(o(Pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (R) => e.modelValueOnUpdate(R)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: _(() => [
                    Z("div", Nt, [
                      D(o(re), {
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
        D(o(ue), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: _(() => [
            D(o(ve), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: _(() => [
                D(o(ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[1] || (A[1] = (R) => e.modelValueOnUpdate(R)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: _(() => [
                    Z("div", Et, [
                      D(o(re), {
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
}), Tt = { class: "flex column" }, Ot = {
  key: 0,
  class: "q-field__bottom"
}, qt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, wt = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = k(!0), n = e.formApi.form.formStyle;
    function s() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return U(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), j(() => {
      e.registerBehaviourCallbacks(s, l, u);
    }), (i, c) => (b(), L("div", Tt, [
      D(o(mt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: o(n).fieldDense,
        color: o(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: K([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (b(), L("div", Ot, J(e.field.hint), 1)) : Q("", !0),
      t.value !== !0 ? (b(), L("div", qt, J(t.value), 1)) : Q("", !0)
    ]));
  }
}), It = /* @__PURE__ */ $({
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
  setup(a) {
    const t = a.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), zt = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = k([]), r = k([]), n = k(), s = e.formApi.form, l = s.formSettings, u = s.formStyle, i = l.rulesBehaviour === "lazy";
    function c(A, R) {
      if (A === "") {
        R(() => {
          r.value = [...t.value];
        });
        return;
      }
      R(() => {
        const I = A.toLowerCase();
        r.value = t.value.filter((P) => P.label.toLowerCase().includes(I));
      });
    }
    function S() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function f() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? !n.value.hasError : !1;
    }
    function E() {
      n.value && n.value.resetValidation();
    }
    function q() {
      e.clear(), r.value = [];
    }
    return j(() => {
      S(), e.registerBehaviourCallbacks(f, y, E);
    }), (A, R) => (b(), O(o(Re), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (I) => e.modelValueOnUpdate(I)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(u).fieldOutlined,
      filled: o(u).fieldFilled,
      standout: o(u).fieldStandout,
      borderless: o(u).fieldBorderless,
      rounded: o(u).fieldRounded,
      square: o(u).fieldSquare,
      dense: o(u).fieldDense,
      hideBottomSpace: o(u).fieldHideBottomSpace,
      color: o(u).fieldColor,
      bgColor: o(u).fieldBgColor,
      class: K(e.field.cssClass),
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
      onClear: q,
      onFilter: c
    }, {
      default: _(() => [
        D(o(Ce), {
          dense: o(u).fieldDense
        }, {
          default: _(() => [
            D(o(_e), null, {
              default: _(() => [
                D(o(Se), null, {
                  default: _(() => [
                    be(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Oe = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = k([]), i = k(
      f()
    ), c = k(), S = k("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(v, B) {
      if (v === S.value) {
        B(() => {
        });
        return;
      }
      const x = e.formApi.getAssociationDataCallback();
      i.value = f(), S.value = v;
      const z = e.formApi.form;
      i.value.isLoading = !0, x({
        resourceName: z.resourceName,
        resourceId: z.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: v,
        context: z.context
      }).then((w) => {
        B(() => {
          u.value = w.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function E() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (u.value = [
        {
          label: e.field.associationData.label[0] ?? "???",
          value: v,
          data: e.field.associationData.data[0]
        }
      ]);
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? !c.value.hasError : !1;
    }
    function R() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [];
    }
    function P(v) {
      const B = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && v.to === B && B !== -1) {
        const x = e.formApi.form, z = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, z({
          resourceName: x.resourceName,
          resourceId: x.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: S.value,
          context: x.context
        }).then((w) => {
          u.value = u.value.concat(
            w.rows
          ), i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), w.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return j(() => {
      ce(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        A,
        R,
        E
      );
    }), (v, B) => (b(), O(o(Re), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[0] || (B[0] = (x) => e.modelValueOnUpdate(x)),
      label: e.field.label,
      outlined: o(s).fieldOutlined,
      filled: o(s).fieldFilled,
      standout: o(s).fieldStandout,
      borderless: o(s).fieldBorderless,
      rounded: o(s).fieldRounded,
      square: o(s).fieldSquare,
      dense: o(s).fieldDense,
      hideBottomSpace: o(s).fieldHideBottomSpace,
      color: o(s).fieldColor,
      bgColor: o(s).fieldBgColor,
      class: K(e.field.cssClass),
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
      onFilter: y,
      onVirtualScroll: P
    }, {
      "no-option": _(() => [
        D(o(Ce), {
          dense: o(s).fieldDense
        }, {
          default: _(() => [
            D(o(_e), null, {
              default: _(() => [
                D(o(Se), null, {
                  default: _(() => [
                    be(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: _((x) => [
        (b(), O(W(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: x.opt,
          itemProps: x.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), qe = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = k([]), i = k(
      f()
    ), c = k(), S = k("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function y(v, B) {
      if (v === S.value) {
        B(() => {
        });
        return;
      }
      const x = e.formApi.getAssociationDataCallback();
      i.value = f(), S.value = v;
      const z = e.formApi.form;
      i.value.isLoading = !0, x({
        resourceName: z.resourceName,
        resourceId: z.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: v,
        context: z.context
      }).then((w) => {
        B(() => {
          u.value = w.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function E() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (u.value = v.map((B, x) => ({
        label: e.field.associationData.label[x] ?? "???",
        value: B,
        data: e.field.associationData.data[x]
      })));
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? !c.value.hasError : !1;
    }
    function R() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [];
    }
    function P(v) {
      const B = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && v.to === B && B !== -1) {
        const x = e.formApi.form, z = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, z({
          resourceName: x.resourceName,
          resourceId: x.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: S.value,
          context: x.context
        }).then((w) => {
          u.value = u.value.concat(
            w.rows
          ), i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), w.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return j(() => {
      ce(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        A,
        R,
        E
      );
    }), (v, B) => (b(), O(o(Re), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[0] || (B[0] = (x) => e.modelValueOnUpdate(x)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(s).fieldOutlined,
      filled: o(s).fieldFilled,
      standout: o(s).fieldStandout,
      borderless: o(s).fieldBorderless,
      rounded: o(s).fieldRounded,
      square: o(s).fieldSquare,
      dense: o(s).fieldDense,
      hideBottomSpace: o(s).fieldHideBottomSpace,
      color: o(s).fieldColor,
      bgColor: o(s).fieldBgColor,
      class: K(e.field.cssClass),
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
      onFilter: y,
      onVirtualScroll: P
    }, {
      "no-option": _(() => [
        D(o(Ce), {
          dense: o(s).fieldDense
        }, {
          default: _(() => [
            D(o(_e), null, {
              default: _(() => [
                D(o(Se), null, {
                  default: _(() => [
                    be(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: _((x) => [
        (b(), O(W(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: x.opt,
          itemProps: x.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), we = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (S, f) => (b(), O(o(Fe), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[1] || (f[1] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(n).fieldOutlined,
      filled: o(n).fieldFilled,
      standout: o(n).fieldStandout,
      borderless: o(n).fieldBorderless,
      rounded: o(n).fieldRounded,
      square: o(n).fieldSquare,
      dense: o(n).fieldDense,
      hideBottomSpace: o(n).fieldHideBottomSpace,
      color: o(n).fieldColor,
      bgColor: o(n).fieldBgColor,
      class: K(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, ct({ _: 2 }, [
      e.field.extraType === "color" ? {
        name: "append",
        fn: _(() => [
          D(o(ue), {
            name: "colorize",
            class: "cursor-pointer"
          }, {
            default: _(() => [
              D(o(ve), {
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: _(() => [
                  D(o(pt), {
                    "model-value": e.modelValue,
                    "onUpdate:modelValue": f[0] || (f[0] = (y) => e.modelValueOnUpdate(y))
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), $t = /* @__PURE__ */ $({
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
  setup(a) {
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (S, f) => (b(), O(o(Fe), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(n).fieldOutlined,
      filled: o(n).fieldFilled,
      standout: o(n).fieldStandout,
      borderless: o(n).fieldBorderless,
      rounded: o(n).fieldRounded,
      square: o(n).fieldSquare,
      dense: o(n).fieldDense,
      hideBottomSpace: o(n).fieldHideBottomSpace,
      color: o(n).fieldColor,
      bgColor: o(n).fieldBgColor,
      class: K(e.field.cssClass),
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
class te {
  constructor(e, t, r, n, s, l, u, i, c) {
    F(this, "resourceName");
    F(this, "resourceId");
    F(this, "formMetadataAndData");
    F(this, "context");
    F(this, "formSettings");
    F(this, "formStyle");
    F(this, "actionComponent");
    F(this, "orphanErrorsComponent");
    F(this, "sectionComponent");
    F(this, "wrapperResetComponent");
    F(this, "associationDisplayComponent");
    F(this, "dynamicComponentRecord");
    F(this, "formApi");
    F(this, "registerEventCallback");
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
      dynamicComponentRecord: {}
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
    const e = he.create(this.formApi);
    this.registerEventCallback(e);
    const t = he.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((y) => {
          const E = this.dynamicComponentRecord[`field-${y.field_name}-before`], q = te.getFieldComponentByFormFieldType(
            y.field_type
          ), A = this.dynamicComponentRecord[`field-${y.field_name}-after`], R = {
            associationDisplayComponent: H(
              this.associationDisplayComponent
            ),
            regularFieldType: te.getRegularFieldTypeByFieldType(
              y.field_type
            )
          };
          let I = y.label;
          this.formSettings.requiredFieldsHasAsterisk && y.rules.find((v) => v.type === "required") && (I = I.concat("*"));
          const P = {
            type: y.field_type,
            extraType: y.field_extra_type,
            metadata: Object.freeze(y),
            label: I,
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
            beforeComponent: E ? H(E) : void 0,
            mainComponent: H(q),
            afterComponent: A ? H(A) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: R
          };
          u.push(P);
        });
        const i = this.dynamicComponentRecord[`section-${s.name ?? l}-before`], c = this.sectionComponent, S = this.dynamicComponentRecord[`section-${s.name ?? l}-after`], f = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? l.toString()] ?? {},
          beforeComponent: i ? H(i) : void 0,
          mainComponent: H(c),
          afterComponent: S ? H(S) : void 0,
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
    return {
      string: we,
      text: we,
      number: $t,
      date: Rt,
      datetime: Bt,
      selectString: zt,
      selectBelongsTo: Oe,
      selectHasMany: qe,
      selectHasAndBelongsToMany: qe,
      selectHasOne: Oe,
      checkbox: wt,
      object: It
    }[e];
  }
}
function N(a) {
  a == null || a.forEach((e) => {
    e();
  });
}
function Pt(a, e, t) {
  const r = t.form, n = (i, c, S) => i[c] ? S ? () => s(i[c]) : () => i[c] : i.compare_to ? () => {
    var f;
    return ((f = t.getFieldByName(i.compare_to)) == null ? void 0 : f.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (i) => String(
    T.formatDate(
      T.extractDate(i, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], u = [];
  switch (e) {
    case "date":
      l.push(Ie(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Ie(r.formSettings.datetimeFormat));
      break;
  }
  return a.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(Ut());
        break;
      case "absence":
        l.push(Gt());
        break;
      case "acceptance":
        l.push(Ht());
        break;
      case "inclusion":
        l.push(Ue(c.including));
        break;
      case "exclusion":
        l.push(Lt(c.excluding));
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
        l.push(jt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Qt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Wt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Jt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Kt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Xt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Zt(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(en());
        break;
      case "numberNumericOnly":
        l.push(tn());
        break;
      case "numberEvenOnly":
        l.push(nn());
        break;
      case "numberOddOnly":
        l.push(an());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          on(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          rn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          ln(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          sn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          dn(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          cn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          un(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          fn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          mn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          pn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          gn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          vn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          hn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          yn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return Yt(l);
      case "allowNull":
        return Mt(l);
    }
  }) : l;
}
function Ut() {
  return (a) => !!a || "Ce champ est requis";
}
function Ue(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function Lt(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${Ue.toString()}`
  );
}
function Gt() {
  return (a) => !a || "Ce champ doit être vide";
}
function Ht() {
  return (a) => !!a || "Doit être accepté";
}
function Mt(a) {
  return (e) => (e === null || a.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Yt(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function jt() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function Qt(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Wt(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Jt(a) {
  return (e) => {
    const t = a();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Kt(a) {
  return (e) => {
    const t = a();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Xt(a, e) {
  return (t) => {
    const r = a();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Zt(a, e) {
  return (t) => {
    const r = a();
    return Number(t) !== r || `Doit être différent de ${a}`;
  };
}
function en() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function tn() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function nn() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function an() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function on(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function rn(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ln(a) {
  return (e) => {
    const t = a();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function sn(a) {
  return (e) => {
    const t = a();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function un(a, e) {
  return (t) => {
    const r = a(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function cn(a, e) {
  return (t) => {
    const r = a();
    return String(t) === r || `Égale à ${r}`;
  };
}
function dn(a) {
  return (e) => {
    const t = a();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function fn(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function mn(a, e) {
  return (t) => {
    const r = a(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function pn(a, e) {
  return (t) => {
    const r = a(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function gn(a, e) {
  return (t) => {
    const r = a(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function vn(a, e) {
  return (t) => {
    const r = a(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function hn(a, e) {
  return (t) => {
    const r = a(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function yn(a, e) {
  return (t) => {
    const r = a();
    return T.extractDate(String(t), e) !== T.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Ie(a) {
  return (e) => e == null || e === "" ? !0 : bn(e, a) || `Date invalide. Format : ${a}`;
}
function bn(a, e) {
  if (typeof a != "string" || !a.trim())
    return !1;
  const t = T.extractDate(a, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : T.formatDate(t, e) === a;
}
const Cn = {
  computeServerRules: Pt
}, _n = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Sn = ["index"], Fn = /* @__PURE__ */ $({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let r = () => !0, n = () => !0, s = () => {
    }, l = () => {
    };
    const u = q(), i = k(), c = k([]);
    function S(m = !0) {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = f(i.value), m && N(t.field.events.onReset), l(), ce(() => {
        de();
      });
    }
    function f(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function y(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function E() {
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
      N(t.field.events.onClear);
    }
    function q() {
      return Cn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(m) {
      i.value = m;
    }
    function R() {
      return o(i);
    }
    function I() {
      return y(o(i));
    }
    function P(m) {
      c.value = m;
    }
    function v() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, N(t.field.events.onHide));
    }
    function B() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, N(t.field.events.onUnhide));
    }
    function x(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function z(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.hint = m);
    }
    function w(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.cssClass = m);
    }
    function ie(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = m);
    }
    function ne(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = m);
    }
    function p(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = m);
    }
    function h() {
      const m = r();
      return N(t.field.events.onValidated), m;
    }
    function M() {
      return n();
    }
    function ke() {
      return !M();
    }
    function de() {
      return s();
    }
    function xe(m, C, se, ae) {
      r = m, n = C, s = se, ae && (l = ae);
    }
    const le = {
      reset: S,
      clear: E,
      validate: h,
      isValid: M,
      isInvalid: ke,
      hide: v,
      unhide: B,
      resetValidation: de,
      getValueDeserialized: I,
      getValueSerialized: R,
      setupBackendErrors: P,
      setReadonlyState: x,
      setHint: z,
      setCssClass: w,
      setSuffix: ie,
      setPrefix: ne,
      setLabel: p,
      setValue: A,
      field: t.field
    };
    return e(le), U(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), U(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        N(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var C;
      S(!1);
      const m = (C = $e()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => De((b(), L("div", null, [
      t.field.beforeComponent ? (b(), O(W(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : Q("", !0),
      (b(), O(W(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: o(u),
        reset: S,
        clear: E,
        getValueDeserialized: I,
        getValueSerialized: R,
        validate: h,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: xe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (b(), O(W(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : Q("", !0),
      c.value.length > 0 ? (b(), L("div", _n, [
        (b(!0), L(pe, null, ge(c.value, (se, ae) => (b(), L("div", {
          index: ae,
          class: "flex column"
        }, J(se), 9, Sn))), 256))
      ])) : Q("", !0)
    ], 512)), [
      [Ae, t.field.hidden !== !0]
    ]);
  }
}), kn = { class: "flex column" }, xn = /* @__PURE__ */ $({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let r = null, n = null, s = null;
    const l = {
      reset: c,
      clear: S,
      validate: E,
      isValid: q,
      isInvalid: A,
      hide: f,
      unhide: y,
      resetValidation: R,
      getFields: I,
      setReadonlyState: P,
      setCssClass: v,
      setIcon: B,
      setLabel: x,
      section: t.section
    }, u = k(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const h = p.metadata.field_name, M = t.formApi.getFieldByName(h);
        M && u.value.set(h, M);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.reset();
      }), N(t.section.events.onReset);
    }
    function S() {
      u.value.forEach((p) => {
        p.clear();
      }), N(t.section.events.onClear);
    }
    function f() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((h) => {
        h.hide();
      }), p.hidden = !0, N(t.section.events.onHide));
    }
    function y() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((h) => {
        h.unhide();
      }), p.hidden = !1, N(t.section.events.onUnhide));
    }
    function E() {
      let p = !0;
      return u.value.forEach((h) => {
        if (!h.validate()) {
          p = !1;
          return;
        }
      }), N(t.section.events.onValidated), p;
    }
    function q() {
      let p = !0;
      return u.value.forEach((h) => {
        if (!h.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function A() {
      return !q();
    }
    function R() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function I() {
      return u.value;
    }
    function P(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.readonly = p);
    }
    function v(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.cssClass = p);
    }
    function B(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.icon = p);
    }
    function x(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.label = p);
    }
    function z() {
      const p = {};
      for (const [h, M] of u.value)
        p[h] = M.getValueSerialized();
      return p;
    }
    e(l);
    const w = oe(() => q()), ie = oe(() => A()), ne = oe(() => z());
    return U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = U(w, (h) => {
          h && N(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = U(ie, (h) => {
          var M;
          h && N((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        s == null || s(), s = null, p && (s = U(
          ne,
          () => {
            var h;
            N((h = t.section) == null ? void 0 : h.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var h;
      const p = (h = $e()) == null ? void 0 : h.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ce(() => {
        i();
      });
    }), (p, h) => De((b(), L("div", kn, [
      t.section.beforeComponent ? (b(), O(W(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0),
      (b(), O(W(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: _(() => [
          ze(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (b(), O(W(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0)
    ], 512)), [
      [Ae, t.section.hidden !== !0]
    ]);
  }
}), Vn = { class: "flex column" }, Nn = /* @__PURE__ */ $({
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
  setup(a, { expose: e }) {
    const t = a;
    let r = null, n = "", s = 0, l = 0, u = null, i = null, c = null;
    const S = dt(), f = k(te.getEmptyFormBeforeInit()), y = k(!1), E = k(!1), q = k(!1), A = k(!1), R = k("create"), I = k({}), P = k(/* @__PURE__ */ new Map()), v = k(/* @__PURE__ */ new Map());
    async function B() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = te.getForm(
        t.resourceName,
        t.resourceId,
        z(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ee,
        t.eventManager
      ), s = f.value.sections.length, l = f.value.sections.map((d) => d.fields).flat().length, t.resourceId && (R.value = "edit");
    }
    async function x() {
      var V, Y, fe;
      if (!ne())
        return;
      N((V = f.value) == null ? void 0 : V.events.onSubmit), A.value = !0, xe();
      const d = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        I.value = {}, R.value === "create" && (R.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), f.value = te.getForm(
          t.resourceName,
          t.resourceId,
          z(),
          {
            form: g.form,
            resource_data: g.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), N((fe = f.value) == null ? void 0 : fe.events.onSubmitSuccess);
      else {
        I.value = {};
        const me = [];
        for (const [X, ot] of v.value) {
          const Te = g.errors[X];
          Te && (ot.setupBackendErrors(Te), me.push(X));
        }
        Object.entries(g.errors).forEach((X) => {
          me.includes(X[0]) || (I.value[X[0]] = X[1]);
        }), N((Y = f.value) == null ? void 0 : Y.events.onSubmitUnsuccess);
      }
      A.value = !1;
    }
    function z() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in S) {
        const V = S[g];
        if (V) {
          const Y = $({
            inheritAttrs: !1,
            setup(fe, { attrs: me, slots: X }) {
              return () => V({
                ...fe,
                ...me,
                slots: X
              });
            }
          });
          switch (g) {
            case "sections":
              d.sectionComponent = Y;
              break;
            case "actions":
              d.actionComponent = Y;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = Y;
              break;
            case "association-display":
              d.associationDisplayComponent = Y;
              break;
            default:
              d.dynamicComponentRecord[g] = Y;
              break;
          }
        }
      }
      return d;
    }
    function w() {
      const d = {};
      for (const [g, V] of v.value)
        d[g] = V.getValueDeserialized();
      return d;
    }
    function ie() {
      const d = {};
      for (const [g, V] of v.value)
        d[g] = V.getValueSerialized();
      return d;
    }
    function ne() {
      var g;
      let d = !0;
      return v.value.forEach((V) => {
        if (!V.validate()) {
          d = !1;
          return;
        }
      }), N((g = f.value) == null ? void 0 : g.events.onValidated), d;
    }
    function p() {
      let d = !0;
      return v.value.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function h() {
      return !p();
    }
    function M() {
      var d;
      v.value.forEach((g) => {
        g.reset();
      }), N((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function ke() {
      var d;
      v.value.forEach((g) => {
        g.clear();
      }), N((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function de() {
      v.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function xe() {
      v.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function le(d) {
      if (r)
        return r.resource_data[d];
    }
    function m(d) {
      return P.value.get(d);
    }
    function C(d) {
      return [...P.value.values()].at(d);
    }
    function se() {
      return P.value;
    }
    function ae(d) {
      return v.value.get(d);
    }
    function Le() {
      return v.value;
    }
    function Ge() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function He() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Me() {
      return o(R);
    }
    function Ye() {
      return n !== JSON.stringify(w());
    }
    function je(d) {
      f.value && (f.value.context = d);
    }
    function Qe(d) {
      f.value && (f.value.cssClass = d);
    }
    function We(d) {
      f.value && (f.value.readonly = d);
    }
    function Je() {
      return q.value;
    }
    function Ke() {
      return f;
    }
    function Xe(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.find((V) => V.name === d);
    }
    function Ze(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.map((V) => V.fields).flat().find((V) => V.metadata.field_name === d);
    }
    function Ne(d, g) {
      P.value.set(d, g), s === P.value.size && (y.value = !0);
    }
    function Ee(d, g) {
      v.value.set(d, g), l === v.value.size && (E.value = !0);
    }
    const Be = {
      getFormRef: Ke,
      getSectionRef: Xe,
      getFieldRef: Ze,
      registerSectionWrapperRef: Ne,
      registerFieldWrapperRef: Ee
    }, et = new Proxy({}, {
      get(d, g) {
        var V;
        return (V = f.value) == null ? void 0 : V[g];
      }
    }), ee = {
      getMode: Me,
      getSectionByName: m,
      getSectionByIndex: C,
      getSections: se,
      getFieldByName: ae,
      getFields: Le,
      validate: ne,
      isValid: p,
      isInvalid: h,
      reset: M,
      clear: ke,
      resetValidation: de,
      submit: x,
      valuesHasChanged: Ye,
      getInitialValueByFieldName: le,
      getAssociationDataCallback: Ge,
      setContext: je,
      setCssClass: Qe,
      setReadonlyState: We,
      isReady: Je,
      form: et
    };
    e(ee);
    const tt = oe(() => p()), nt = oe(() => h()), at = oe(() => ie());
    return U(
      () => y.value && E.value,
      (d) => {
        var g;
        d && !q.value && (N((g = f.value) == null ? void 0 : g.events.onReady), q.value = !0);
      }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        u == null || u(), u = null, d && (u = U(tt, (g) => {
          var V;
          g && N((V = f.value) == null ? void 0 : V.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        i == null || i(), i = null, d && (i = U(nt, (g) => {
          var V;
          g && N((V = f.value) == null ? void 0 : V.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        c == null || c(), c = null, d && (c = U(
          at,
          () => {
            var g;
            N((g = f.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      He(), await B(), ce(() => {
        n = JSON.stringify(w());
      });
    }), (d, g) => De((b(), L("div", Vn, [
      Z("div", {
        class: K(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (b(!0), L(pe, null, ge(f.value.sections, (V) => (b(), O(xn, {
          key: V.name,
          section: V,
          context: t.context,
          formApi: ee,
          privateFormApi: Be,
          registerRef: Ne
        }, {
          default: _(() => [
            (b(!0), L(pe, null, ge(V.fields, (Y) => (b(), O(Fn, {
              key: Y.metadata.field_name,
              field: Y,
              context: t.context,
              formApi: ee,
              privateFormApi: Be,
              registerRef: Ee
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (b(), O(W(f.value.orphanErrorsComponent), {
        orphanErrors: I.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (b(), O(W(f.value.actionComponent), {
        isLoadingSubmit: A.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Ae, q.value]
    ]);
  }
});
export {
  he as DynamicLogicBuilder,
  G as Submit64,
  Nn as Submit64Form
};
