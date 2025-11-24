var rt = Object.defineProperty;
var it = (a, e, t) => e in a ? rt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var S = (a, e, t) => it(a, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as y, createElementVNode as Z, createVNode as B, createBlock as T, createCommentVNode as Q, unref as o, mergeProps as xe, toDisplayString as J, renderSlot as $e, resolveComponent as lt, normalizeProps as st, guardReactiveProps as ut, withCtx as V, createTextVNode as ye, Fragment as me, renderList as pe, ref as F, onMounted as j, normalizeClass as K, watch as U, nextTick as ue, resolveDynamicComponent as W, markRaw as H, getCurrentInstance as ze, withDirectives as De, vShow as Ae, computed as oe, useSlots as ct } from "vue";
import { QBtn as re, QIcon as ge, QItem as be, QItemSection as Ce, QItemLabel as _e, QInput as Se, QPopupProxy as Ve, QDate as Pe, QTime as dt, QCheckbox as ft, QSelect as Re, date as O } from "quasar";
const mt = { class: "flex column" }, pt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, gt = /* @__PURE__ */ z({
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
    return (r, n) => (y(), L("div", mt, [
      Z("div", pt, [
        B(o(re), xe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (y(), T(o(re), xe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : Q("", !0),
        e.formApi.clear ? (y(), T(o(re), xe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : Q("", !0)
      ])
    ]));
  }
}), vt = { class: "flex row items-center" }, ht = { class: "text-body1 text-weight-medium" }, yt = { class: "flex column q-gutter-md" }, bt = /* @__PURE__ */ z({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (y(), L("div", null, [
      Z("div", vt, [
        e.sectionApi.section.icon ? (y(), T(o(ge), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : Q("", !0),
        Z("div", ht, J(e.sectionApi.section.label), 1)
      ]),
      Z("div", yt, [
        $e(t.$slots, "default")
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ z({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(a) {
    const e = a;
    return (t, r) => {
      const n = lt("q-icon");
      return y(), T(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), _t = /* @__PURE__ */ z({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (y(), T(o(be), st(ut(e.itemProps)), {
      default: V(() => [
        B(o(Ce), null, {
          default: V(() => [
            B(o(_e), null, {
              default: V(() => [
                ye(J(e.entry.label), 1)
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
}), St = { class: "flex column" }, Ft = /* @__PURE__ */ z({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, r) => (y(), L("div", St, [
      (y(!0), L(me, null, pe(e.orphanErrors, (n, s) => (y(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, J(s) + " : " + J(n.join(",")), 1))), 128))
    ]));
  }
}), he = class he {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyle");
    S(this, "_actionComponent");
    S(this, "_orphanErrorsComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
    S(this, "_associationDisplayComponent");
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
    }, this._actionComponent = gt, this._orphanErrorsComponent = Ft, this._sectionComponent = bt, this._wrapperResetComponent = Ct, this._associationDisplayComponent = _t;
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
S(he, "_instance", new he());
let G = he;
class ve {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new kt(r, n, this.formApi);
    return this.events.push(s), new xt(s);
  }
  static create(e) {
    return new ve(e);
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
class kt {
  constructor(e, t, r) {
    S(this, "type");
    S(this, "data");
    S(this, "formApi");
    S(this, "action", () => {
    });
    S(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class xt {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Vt = { class: "row items-center justify-end" }, Dt = /* @__PURE__ */ z({
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
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = F(), u = F();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function _() {
      return u.value ? !u.value.hasError : !1;
    }
    function f() {
      u.value && u.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(c, _, f);
    }), (b, N) => (y(), T(o(Se), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[1] || (N[1] = (q) => e.modelValueOnUpdate(q)),
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
      append: V(() => [
        B(o(ge), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(o(Ve), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(o(Pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[0] || (N[0] = (q) => e.modelValueOnUpdate(q)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    Z("div", Vt, [
                      B(o(re), {
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
}), At = { class: "row items-center justify-end" }, Rt = { class: "row items-center justify-end" }, Nt = /* @__PURE__ */ z({
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
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = F(), u = F(), i = F();
    function c() {
      l.value && l.value.hide();
    }
    function _() {
      u.value && u.value.hide();
    }
    function f() {
      return i.value ? i.value.validate() : !1;
    }
    function b() {
      return i.value ? !i.value.hasError : !1;
    }
    function N() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(f, b, N);
    }), (q, D) => (y(), T(o(Se), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[2] || (D[2] = (A) => e.modelValueOnUpdate(A)),
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
      append: V(() => [
        B(o(ge), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(o(Ve), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(o(Pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    Z("div", At, [
                      B(o(re), {
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
        B(o(ge), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(o(Ve), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(o(dt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[1] || (D[1] = (A) => e.modelValueOnUpdate(A)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    Z("div", Rt, [
                      B(o(re), {
                        onClick: _,
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
}), Et = { class: "flex column" }, Bt = {
  key: 0,
  class: "q-field__bottom"
}, Ot = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Tt = /* @__PURE__ */ z({
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
    const e = a, t = F(!0), n = e.formApi.form.formStyle;
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
    }), (i, c) => (y(), L("div", Et, [
      B(o(ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (_) => e.modelValueOnUpdate(_)),
        label: e.field.label,
        dense: o(n).fieldDense,
        color: o(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: K([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (y(), L("div", Bt, J(e.field.hint), 1)) : Q("", !0),
      t.value !== !0 ? (y(), L("div", Ot, J(t.value), 1)) : Q("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ z({
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
}), wt = /* @__PURE__ */ z({
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
    const e = a, t = F([]), r = F([]), n = F(), s = e.formApi.form, l = s.formSettings, u = s.formStyle, i = l.rulesBehaviour === "lazy";
    function c(D, A) {
      if (D === "") {
        A(() => {
          r.value = [...t.value];
        });
        return;
      }
      A(() => {
        const I = D.toLowerCase();
        r.value = t.value.filter((P) => P.label.toLowerCase().includes(I));
      });
    }
    function _() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function f() {
      return n.value ? n.value.validate() : !1;
    }
    function b() {
      return n.value ? !n.value.hasError : !1;
    }
    function N() {
      n.value && n.value.resetValidation();
    }
    function q() {
      e.clear(), r.value = [];
    }
    return j(() => {
      _(), e.registerBehaviourCallbacks(f, b, N);
    }), (D, A) => (y(), T(o(Re), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (I) => e.modelValueOnUpdate(I)),
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
      default: V(() => [
        B(o(be), {
          dense: o(u).fieldDense
        }, {
          default: V(() => [
            B(o(Ce), null, {
              default: V(() => [
                B(o(_e), null, {
                  default: V(() => [
                    ye(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Te = /* @__PURE__ */ z({
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
    const e = a, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = F([]), i = F(
      f()
    ), c = F(), _ = F("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function b(v, E) {
      if (v === _.value) {
        E(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      i.value = f(), _.value = v;
      const $ = e.formApi.form;
      i.value.isLoading = !0, k({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: v,
        context: $.context
      }).then((w) => {
        E(() => {
          u.value = w.rows, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function N() {
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
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [];
    }
    function P(v) {
      const E = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && v.to === E && E !== -1) {
        const k = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: _.value,
          context: k.context
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
      ue(() => {
        N();
      }), e.registerBehaviourCallbacks(
        q,
        D,
        A,
        N
      );
    }), (v, E) => (y(), T(o(Re), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[0] || (E[0] = (k) => e.modelValueOnUpdate(k)),
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
      onFilter: b,
      onVirtualScroll: P
    }, {
      "no-option": V(() => [
        B(o(be), {
          dense: o(s).fieldDense
        }, {
          default: V(() => [
            B(o(Ce), null, {
              default: V(() => [
                B(o(_e), null, {
                  default: V(() => [
                    ye(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((k) => [
        (y(), T(W(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), qe = /* @__PURE__ */ z({
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
    const e = a, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = F([]), i = F(
      f()
    ), c = F(), _ = F("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function b(v, E) {
      if (v === _.value) {
        E(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      i.value = f(), _.value = v;
      const $ = e.formApi.form;
      i.value.isLoading = !0, k({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: v,
        context: $.context
      }).then((w) => {
        E(() => {
          u.value = w.rows, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = f();
      });
    }
    function N() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (u.value = v.map((E, k) => ({
        label: e.field.associationData.label[k] ?? "???",
        value: E,
        data: e.field.associationData.data[k]
      })));
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), i.value = f(), u.value = [];
    }
    function P(v) {
      const E = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && v.to === E && E !== -1) {
        const k = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: _.value,
          context: k.context
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
      ue(() => {
        N();
      }), e.registerBehaviourCallbacks(
        q,
        D,
        A,
        N
      );
    }), (v, E) => (y(), T(o(Re), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[0] || (E[0] = (k) => e.modelValueOnUpdate(k)),
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
      onFilter: b,
      onVirtualScroll: P
    }, {
      "no-option": V(() => [
        B(o(be), {
          dense: o(s).fieldDense
        }, {
          default: V(() => [
            B(o(Ce), null, {
              default: V(() => [
                B(o(_e), null, {
                  default: V(() => [
                    ye(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((k) => [
        (y(), T(W(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), we = /* @__PURE__ */ z({
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
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = F();
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
    }), (_, f) => (y(), T(o(Se), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (b) => e.modelValueOnUpdate(b)),
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
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), It = /* @__PURE__ */ z({
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
    const e = a, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = F();
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
    }), (_, f) => (y(), T(o(Se), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (b) => e.modelValueOnUpdate(b)),
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
    S(this, "resourceName");
    S(this, "resourceId");
    S(this, "formMetadataAndData");
    S(this, "context");
    S(this, "formSettings");
    S(this, "formStyle");
    S(this, "actionComponent");
    S(this, "orphanErrorsComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayComponent");
    S(this, "dynamicComponentRecord");
    S(this, "formApi");
    S(this, "registerEventCallback");
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
    const e = ve.create(this.formApi);
    this.registerEventCallback(e);
    const t = ve.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((b) => {
          const N = this.dynamicComponentRecord[`field-${b.field_name}-before`], q = te.getFieldComponentByFormFieldType(
            b.field_type
          ), D = this.dynamicComponentRecord[`field-${b.field_name}-after`], A = {
            associationDisplayComponent: H(
              this.associationDisplayComponent
            ),
            regularFieldType: te.getRegularFieldTypeByFieldType(
              b.field_type
            )
          };
          let I = b.label;
          this.formSettings.requiredFieldsHasAsterisk && b.rules.find((v) => v.type === "required") && (I = I.concat("*"));
          const P = {
            type: b.field_type,
            metadata: Object.freeze(b),
            label: I,
            hint: b.hint ?? void 0,
            prefix: b.prefix ?? void 0,
            suffix: b.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? b.readonly ?? void 0,
            cssClass: b.css_class ?? void 0,
            staticSelectOptions: b.static_select_options,
            associationData: b.field_association_data,
            rules: b.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: N ? H(N) : void 0,
            mainComponent: H(q),
            afterComponent: D ? H(D) : void 0,
            events: t.fields[b.field_name] ?? {},
            componentOptions: A
          };
          u.push(P);
        });
        const i = this.dynamicComponentRecord[`section-${s.name ?? l}-before`], c = this.sectionComponent, _ = this.dynamicComponentRecord[`section-${s.name ?? l}-after`], f = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? l.toString()] ?? {},
          beforeComponent: i ? H(i) : void 0,
          mainComponent: H(c),
          afterComponent: _ ? H(_) : void 0,
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
      number: It,
      date: Dt,
      datetime: Nt,
      selectString: wt,
      selectBelongsTo: Te,
      selectHasMany: qe,
      selectHasAndBelongsToMany: qe,
      selectHasOne: Te,
      checkbox: Tt,
      object: qt
    }[e];
  }
}
function R(a) {
  a == null || a.forEach((e) => {
    e();
  });
}
function $t(a, e, t) {
  const r = t.form, n = (i, c, _) => i[c] ? _ ? () => s(i[c]) : () => i[c] : i.compare_to ? () => {
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
        l.push(zt());
        break;
      case "absence":
        l.push(Ut());
        break;
      case "acceptance":
        l.push(Lt());
        break;
      case "inclusion":
        l.push(Ue(c.including));
        break;
      case "exclusion":
        l.push(Pt(c.excluding));
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
        l.push(Mt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Yt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          jt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Qt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Wt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Jt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Kt(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Xt());
        break;
      case "numberNumericOnly":
        l.push(Zt());
        break;
      case "numberEvenOnly":
        l.push(en());
        break;
      case "numberOddOnly":
        l.push(tn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          nn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          an(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          on(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          rn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          un(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          sn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          ln(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          cn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          dn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          fn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          mn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          pn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          gn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          vn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return Ht(l);
      case "allowNull":
        return Gt(l);
    }
  }) : l;
}
function zt() {
  return (a) => !!a || "Ce champ est requis";
}
function Ue(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function Pt(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${Ue.toString()}`
  );
}
function Ut() {
  return (a) => !a || "Ce champ doit être vide";
}
function Lt() {
  return (a) => !!a || "Doit être accepté";
}
function Gt(a) {
  return (e) => (e === null || a.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Ht(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Mt() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function Yt(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function jt(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Qt(a) {
  return (e) => {
    const t = a();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Wt(a) {
  return (e) => {
    const t = a();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Jt(a, e) {
  return (t) => {
    const r = a();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Kt(a, e) {
  return (t) => {
    const r = a();
    return Number(t) !== r || `Doit être différent de ${a}`;
  };
}
function Xt() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function Zt() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function en() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function tn() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function nn(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function an(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function on(a) {
  return (e) => {
    const t = a();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function rn(a) {
  return (e) => {
    const t = a();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function ln(a, e) {
  return (t) => {
    const r = a(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function sn(a, e) {
  return (t) => {
    const r = a();
    return String(t) === r || `Égale à ${r}`;
  };
}
function un(a) {
  return (e) => {
    const t = a();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function cn(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function dn(a, e) {
  return (t) => {
    const r = a(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function fn(a, e) {
  return (t) => {
    const r = a(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function mn(a, e) {
  return (t) => {
    const r = a(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function pn(a, e) {
  return (t) => {
    const r = a(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function gn(a, e) {
  return (t) => {
    const r = a(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function vn(a, e) {
  return (t) => {
    const r = a();
    return O.extractDate(String(t), e) !== O.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Ie(a) {
  return (e) => e == null || e === "" ? !0 : hn(e, a) || `Date invalide. Format : ${a}`;
}
function hn(a, e) {
  if (typeof a != "string" || !a.trim())
    return !1;
  const t = O.extractDate(a, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : O.formatDate(t, e) === a;
}
const yn = {
  computeServerRules: $t
}, bn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Cn = ["index"], _n = /* @__PURE__ */ z({
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
    const u = q(), i = F(), c = F([]);
    function _(m = !0) {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = f(i.value), m && R(t.field.events.onReset), l(), ue(() => {
        ce();
      });
    }
    function f(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function b(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function N() {
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
      R(t.field.events.onClear);
    }
    function q() {
      return yn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function D(m) {
      i.value = m;
    }
    function A() {
      return o(i);
    }
    function I() {
      return b(o(i));
    }
    function P(m) {
      c.value = m;
    }
    function v() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, R(t.field.events.onHide));
    }
    function E() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, R(t.field.events.onUnhide));
    }
    function k(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function $(m) {
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
      return R(t.field.events.onValidated), m;
    }
    function M() {
      return n();
    }
    function Fe() {
      return !M();
    }
    function ce() {
      return s();
    }
    function ke(m, C, se, ae) {
      r = m, n = C, s = se, ae && (l = ae);
    }
    const le = {
      reset: _,
      clear: N,
      validate: h,
      isValid: M,
      isInvalid: Fe,
      hide: v,
      unhide: E,
      resetValidation: ce,
      getValueDeserialized: I,
      getValueSerialized: A,
      setupBackendErrors: P,
      setReadonlyState: k,
      setHint: $,
      setCssClass: w,
      setSuffix: ie,
      setPrefix: ne,
      setLabel: p,
      setValue: D,
      field: t.field
    };
    return e(le), U(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), U(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        R(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var C;
      _(!1);
      const m = (C = ze()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => De((y(), L("div", null, [
      t.field.beforeComponent ? (y(), T(W(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : Q("", !0),
      (y(), T(W(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: o(u),
        reset: _,
        clear: N,
        getValueDeserialized: I,
        getValueSerialized: A,
        validate: h,
        modelValueOnUpdate: D,
        registerBehaviourCallbacks: ke
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (y(), T(W(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: le
      }, null, 8, ["formApi"])) : Q("", !0),
      c.value.length > 0 ? (y(), L("div", bn, [
        (y(!0), L(me, null, pe(c.value, (se, ae) => (y(), L("div", {
          index: ae,
          class: "flex column"
        }, J(se), 9, Cn))), 256))
      ])) : Q("", !0)
    ], 512)), [
      [Ae, t.field.hidden !== !0]
    ]);
  }
}), Sn = { class: "flex column" }, Fn = /* @__PURE__ */ z({
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
      clear: _,
      validate: N,
      isValid: q,
      isInvalid: D,
      hide: f,
      unhide: b,
      resetValidation: A,
      getFields: I,
      setReadonlyState: P,
      setCssClass: v,
      setIcon: E,
      setLabel: k,
      section: t.section
    }, u = F(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const h = p.metadata.field_name, M = t.formApi.getFieldByName(h);
        M && u.value.set(h, M);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.reset();
      }), R(t.section.events.onReset);
    }
    function _() {
      u.value.forEach((p) => {
        p.clear();
      }), R(t.section.events.onClear);
    }
    function f() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((h) => {
        h.hide();
      }), p.hidden = !0, R(t.section.events.onHide));
    }
    function b() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((h) => {
        h.unhide();
      }), p.hidden = !1, R(t.section.events.onUnhide));
    }
    function N() {
      let p = !0;
      return u.value.forEach((h) => {
        if (!h.validate()) {
          p = !1;
          return;
        }
      }), R(t.section.events.onValidated), p;
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
    function D() {
      return !q();
    }
    function A() {
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
    function E(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.icon = p);
    }
    function k(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.label = p);
    }
    function $() {
      const p = {};
      for (const [h, M] of u.value)
        p[h] = M.getValueSerialized();
      return p;
    }
    e(l);
    const w = oe(() => q()), ie = oe(() => D()), ne = oe(() => $());
    return U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = U(w, (h) => {
          h && R(t.section.events.onIsValid);
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
          h && R((M = t.section) == null ? void 0 : M.events.onIsInvalid);
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
            R((h = t.section) == null ? void 0 : h.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var h;
      const p = (h = ze()) == null ? void 0 : h.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ue(() => {
        i();
      });
    }), (p, h) => De((y(), L("div", Sn, [
      t.section.beforeComponent ? (y(), T(W(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0),
      (y(), T(W(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: V(() => [
          $e(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (y(), T(W(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0)
    ], 512)), [
      [Ae, t.section.hidden !== !0]
    ]);
  }
}), kn = { class: "flex column" }, An = /* @__PURE__ */ z({
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
    const _ = ct(), f = F(te.getEmptyFormBeforeInit()), b = F(!1), N = F(!1), q = F(!1), D = F(!1), A = F("create"), I = F({}), P = F(/* @__PURE__ */ new Map()), v = F(/* @__PURE__ */ new Map());
    async function E() {
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
      ), s = f.value.sections.length, l = f.value.sections.map((d) => d.fields).flat().length, t.resourceId && (A.value = "edit");
    }
    async function k() {
      var x, Y, de;
      if (!ne())
        return;
      R((x = f.value) == null ? void 0 : x.events.onSubmit), D.value = !0, ke();
      const d = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        I.value = {}, A.value === "create" && (A.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), f.value = te.getForm(
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
        ), R((de = f.value) == null ? void 0 : de.events.onSubmitSuccess);
      else {
        I.value = {};
        const fe = [];
        for (const [X, ot] of v.value) {
          const Oe = g.errors[X];
          Oe && (ot.setupBackendErrors(Oe), fe.push(X));
        }
        Object.entries(g.errors).forEach((X) => {
          fe.includes(X[0]) || (I.value[X[0]] = X[1]);
        }), R((Y = f.value) == null ? void 0 : Y.events.onSubmitUnsuccess);
      }
      D.value = !1;
    }
    function $() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in _) {
        const x = _[g];
        if (x) {
          const Y = z({
            inheritAttrs: !1,
            setup(de, { attrs: fe, slots: X }) {
              return () => x({
                ...de,
                ...fe,
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
      for (const [g, x] of v.value)
        d[g] = x.getValueDeserialized();
      return d;
    }
    function ie() {
      const d = {};
      for (const [g, x] of v.value)
        d[g] = x.getValueSerialized();
      return d;
    }
    function ne() {
      var g;
      let d = !0;
      return v.value.forEach((x) => {
        if (!x.validate()) {
          d = !1;
          return;
        }
      }), R((g = f.value) == null ? void 0 : g.events.onValidated), d;
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
      }), R((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function Fe() {
      var d;
      v.value.forEach((g) => {
        g.clear();
      }), R((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function ce() {
      v.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function ke() {
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
      return o(A);
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
      return (g = f.value) == null ? void 0 : g.sections.find((x) => x.name === d);
    }
    function Ze(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.map((x) => x.fields).flat().find((x) => x.metadata.field_name === d);
    }
    function Ne(d, g) {
      P.value.set(d, g), s === P.value.size && (b.value = !0);
    }
    function Ee(d, g) {
      v.value.set(d, g), l === v.value.size && (N.value = !0);
    }
    const Be = {
      getFormRef: Ke,
      getSectionRef: Xe,
      getFieldRef: Ze,
      registerSectionWrapperRef: Ne,
      registerFieldWrapperRef: Ee
    }, et = new Proxy({}, {
      get(d, g) {
        var x;
        return (x = f.value) == null ? void 0 : x[g];
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
      clear: Fe,
      resetValidation: ce,
      submit: k,
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
      () => b.value && N.value,
      (d) => {
        var g;
        d && !q.value && (R((g = f.value) == null ? void 0 : g.events.onReady), q.value = !0);
      }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        u == null || u(), u = null, d && (u = U(tt, (g) => {
          var x;
          g && R((x = f.value) == null ? void 0 : x.events.onIsValid);
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
          var x;
          g && R((x = f.value) == null ? void 0 : x.events.onIsInvalid);
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
            R((g = f.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      He(), await E(), ue(() => {
        n = JSON.stringify(w());
      });
    }), (d, g) => De((y(), L("div", kn, [
      Z("div", {
        class: K(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (y(!0), L(me, null, pe(f.value.sections, (x) => (y(), T(Fn, {
          key: x.name,
          section: x,
          context: t.context,
          formApi: ee,
          privateFormApi: Be,
          registerRef: Ne
        }, {
          default: V(() => [
            (y(!0), L(me, null, pe(x.fields, (Y) => (y(), T(_n, {
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
      (y(), T(W(f.value.orphanErrorsComponent), {
        orphanErrors: I.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (y(), T(W(f.value.actionComponent), {
        isLoadingSubmit: D.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Ae, q.value]
    ]);
  }
});
export {
  ve as DynamicLogicBuilder,
  G as Submit64,
  An as Submit64Form
};
