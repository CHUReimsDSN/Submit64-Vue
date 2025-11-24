var je = Object.defineProperty;
var We = (o, e, t) => e in o ? je(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => We(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as $, createElementBlock as z, openBlock as v, createElementVNode as K, createVNode as D, createBlock as E, createCommentVNode as M, unref as r, mergeProps as _e, toDisplayString as W, renderSlot as qe, resolveComponent as Y, normalizeProps as Qe, guardReactiveProps as Je, withCtx as F, createTextVNode as ge, Fragment as ce, renderList as de, ref as k, onMounted as H, normalizeClass as J, watch as Z, resolveDynamicComponent as j, nextTick as ae, markRaw as L, getCurrentInstance as Oe, withDirectives as Se, vShow as Fe, useSlots as Ke } from "vue";
import { QBtn as te, QIcon as fe, QItem as Xe, QItemSection as Ze, QItemLabel as et, QInput as he, QPopupProxy as Ce, QDate as Te, QTime as tt, QCheckbox as nt, QSelect as ke, date as R } from "quasar";
const ot = { class: "flex column" }, at = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, rt = /* @__PURE__ */ $({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(o) {
    const e = o;
    function t() {
      const a = e.formApi.form.formStyle;
      return {
        outline: a.fieldOutlined,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        color: a.fieldColor,
        noCaps: !0
      };
    }
    return (a, n) => (v(), z("div", ot, [
      K("div", at, [
        D(r(te), _e(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (v(), E(r(te), _e({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : M("", !0),
        e.clear ? (v(), E(r(te), _e({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : M("", !0)
      ])
    ]));
  }
}), it = { class: "flex row items-center" }, lt = { class: "text-body1 text-weight-medium" }, st = { class: "flex column q-gutter-md" }, ut = /* @__PURE__ */ $({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", null, [
      K("div", it, [
        e.sectionApi.section.icon ? (v(), E(r(fe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : M("", !0),
        K("div", lt, W(e.sectionApi.section.label), 1)
      ]),
      K("div", st, [
        qe(t.$slots, "default")
      ])
    ]));
  }
}), ct = /* @__PURE__ */ $({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Y("q-icon");
      return v(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (u) => e.reset())
      });
    };
  }
}), dt = /* @__PURE__ */ $({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), E(r(Xe), Qe(Je(e.itemProps)), {
      default: F(() => [
        D(r(Ze), null, {
          default: F(() => [
            D(r(et), null, {
              default: F(() => [
                ge(W(e.entry.label), 1)
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
}), ft = { class: "flex column" }, mt = /* @__PURE__ */ $({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", ft, [
      (v(!0), z(ce, null, de(e.orphanErrors, (n, u) => (v(), z("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, W(u) + " : " + W(n.join(",")), 1))), 128))
    ]));
  }
}), pe = class pe {
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
      fieldBgColor: "white"
    }, this._actionComponent = rt, this._orphanErrorsComponent = mt, this._sectionComponent = ut, this._wrapperResetComponent = ct, this._associationDisplayComponent = dt;
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
S(pe, "_instance", new pe());
let U = pe;
class me {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, u = new pt(a, n, this.formApi);
    return this.events.push(u), new gt(u);
  }
  static create(e) {
    return new me(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((a) => {
      const n = a.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(a.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(a.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            a.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class pt {
  constructor(e, t, a) {
    S(this, "type");
    S(this, "data");
    S(this, "formApi");
    S(this, "action", () => {
    });
    S(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = a;
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
class gt {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const ht = { class: "row items-center justify-end" }, vt = /* @__PURE__ */ $({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k(), l = k();
    function i() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function p() {
      return l.value ? l.value.hasError : !1;
    }
    function _() {
      l.value && l.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(c, p, _);
    }), (y, A) => (v(), E(r(he), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (B) => e.modelValueOnUpdate(B)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        D(r(fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(r(Ce), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(r(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: F(() => [
                    K("div", ht, [
                      D(r(te), {
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
}), yt = { class: "row items-center justify-end" }, bt = { class: "row items-center justify-end" }, _t = /* @__PURE__ */ $({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k(), l = k(), i = k();
    function c() {
      s.value && s.value.hide();
    }
    function p() {
      l.value && l.value.hide();
    }
    function _() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(_, y, A);
    }), (B, x) => (v(), E(r(he), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[2] || (x[2] = (V) => e.modelValueOnUpdate(V)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        D(r(fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(r(Ce), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(r(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[0] || (x[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: F(() => [
                    K("div", yt, [
                      D(r(te), {
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
        D(r(fe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            D(r(Ce), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                D(r(tt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[1] || (x[1] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: F(() => [
                    K("div", bt, [
                      D(r(te), {
                        onClick: p,
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
}), Ct = { class: "flex column" }, St = {
  key: 0,
  class: "q-field__bottom"
}, Ft = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, kt = /* @__PURE__ */ $({
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
    const e = o, t = k(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function s() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return Z(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), H(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (i, c) => (v(), z("div", Ct, [
      D(r(nt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: J([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), z("div", St, W(e.field.hint), 1)) : M("", !0),
      t.value !== !0 ? (v(), z("div", Ft, W(t.value), 1)) : M("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ $({
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
    const t = o.formApi.form, a = t.formSettings;
    return t.formStyle, a.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
}), Vt = /* @__PURE__ */ $({
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
    const e = o, t = k([]), a = k([]), n = k(), u = e.formApi.form, s = u.formSettings, l = u.formStyle, i = s.rulesBehaviour === "lazy";
    function c(x, V) {
      if (x === "") {
        V(() => {
          a.value = [...t.value];
        });
        return;
      }
      V(() => {
        const I = x.toLowerCase();
        a.value = t.value.filter((g) => g.label.toLowerCase().includes(I));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function _() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? n.value.hasError : !1;
    }
    function A() {
      n.value && n.value.resetValidation();
    }
    function B() {
      e.clear(), a.value = [];
    }
    return H(() => {
      p(), e.registerBehaviourCallbacks(_, y, A);
    }), (x, V) => {
      const I = Y("q-item-label"), g = Y("q-item-section"), f = Y("q-item");
      return v(), E(r(ke), {
        ref_key: "fieldRef",
        ref: n,
        "model-value": e.modelValue,
        "onUpdate:modelValue": V[0] || (V[0] = (C) => e.modelValueOnUpdate(C)),
        type: e.field.componentOptions.regularFieldType,
        label: e.field.label,
        hint: e.field.hint,
        outlined: r(l).fieldOutlined,
        filled: r(l).fieldFilled,
        standout: r(l).fieldStandout,
        borderless: r(l).fieldBorderless,
        rounded: r(l).fieldRounded,
        square: r(l).fieldSquare,
        dense: r(l).fieldDense,
        hideBottomSpace: r(l).fieldHideBottomSpace,
        color: r(l).fieldColor,
        bgColor: r(l).fieldBgColor,
        class: J(e.field.cssClass),
        "lazy-rules": i,
        clearable: e.field.clearable,
        prefix: e.field.prefix,
        suffix: e.field.suffix,
        readonly: e.field.readonly,
        rules: e.rules,
        options: a.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        onClear: B,
        onFilter: c
      }, {
        default: F(() => [
          D(f, {
            dense: r(l).fieldDense
          }, {
            default: F(() => [
              D(g, null, {
                default: F(() => [
                  D(I, null, {
                    default: F(() => [
                      ge(W(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]);
    };
  }
}), Re = /* @__PURE__ */ $({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = k([]), i = k(
      _()
    ), c = k(), p = k("__init");
    function _() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(f, C) {
      if (f === p.value) {
        C(() => {
        });
        return;
      }
      const N = e.formApi.getAssociationDataCallback();
      i.value = _(), p.value = f;
      const q = e.formApi.form;
      i.value.isLoading = !0, N({
        resourceName: q.resourceName,
        resourceId: q.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: f,
        context: q.context
      }).then((w) => {
        C(() => {
          l.value = w.rows, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = _();
      });
    }
    function A() {
      ae(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (l.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: f,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), l.value = [];
    }
    function g(f) {
      const C = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && f.to === C && C > i.value.limit - 1) {
        const N = e.formApi.form, q = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, q({
          resourceName: N.resourceName,
          resourceId: N.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: p.value,
          context: N.context
        }).then((w) => {
          l.value = l.value.concat(
            w.rows
          ), i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.nextPage++, i.value.isLoading = !1, f.ref.refresh();
        });
      }
    }
    return H(() => {
      A(), e.registerBehaviourCallbacks(B, x, V);
    }), (f, C) => {
      const N = Y("q-item-label"), q = Y("q-item-section"), w = Y("q-item");
      return v(), E(r(ke), {
        ref_key: "fieldRef",
        ref: c,
        "model-value": e.modelValue,
        "onUpdate:modelValue": C[0] || (C[0] = (P) => e.modelValueOnUpdate(P)),
        label: e.field.label,
        outlined: r(u).fieldOutlined,
        filled: r(u).fieldFilled,
        standout: r(u).fieldStandout,
        borderless: r(u).fieldBorderless,
        rounded: r(u).fieldRounded,
        square: r(u).fieldSquare,
        dense: r(u).fieldDense,
        hideBottomSpace: r(u).fieldHideBottomSpace,
        color: r(u).fieldColor,
        bgColor: r(u).fieldBgColor,
        class: J(e.field.cssClass),
        "lazy-rules": s,
        clearable: e.field.clearable,
        prefix: e.field.prefix,
        suffix: e.field.suffix,
        readonly: e.field.readonly,
        rules: e.rules,
        options: l.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        onClear: I,
        onFilter: y,
        onVirtualScroll: g
      }, {
        "no-option": F(() => [
          D(w, {
            dense: r(u).fieldDense
          }, {
            default: F(() => [
              D(q, null, {
                default: F(() => [
                  D(N, null, {
                    default: F(() => [
                      ge(W(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        option: F((P) => [
          (v(), E(j(r(t)), {
            associationName: e.field.metadata.field_association_name,
            entry: P.opt,
            itemProps: P.itemProps
          }, null, 8, ["associationName", "entry", "itemProps"]))
        ]),
        _: 1
      }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]);
    };
  }
}), Ee = /* @__PURE__ */ $({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = k([]), i = k(
      _()
    ), c = k(), p = k("__init");
    function _() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(f, C) {
      if (f === p.value) {
        C(() => {
        });
        return;
      }
      const N = e.formApi.getAssociationDataCallback();
      i.value = _(), p.value = f;
      const q = e.formApi.form;
      i.value.isLoading = !0, N({
        resourceName: q.resourceName,
        resourceId: q.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: f,
        context: q.context
      }).then((w) => {
        C(() => {
          l.value = w.rows, i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = _();
      });
    }
    function A() {
      ae(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (l.value = f.map((C, N) => ({
          label: e.field.associationData.label[N] ?? "???",
          value: C,
          data: e.field.associationData.data[N]
        })));
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), l.value = [];
    }
    function g(f) {
      const C = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && f.to === C && C > i.value.limit - 1) {
        const N = e.formApi.form, q = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, q({
          resourceName: N.resourceName,
          resourceId: N.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: p.value,
          context: N.context
        }).then((w) => {
          l.value = l.value.concat(
            w.rows
          ), i.value.lastPage = Math.ceil(
            w.row_count / i.value.limit
          ), i.value.nextPage++, i.value.isLoading = !1, f.ref.refresh(), console.log(
            l.value.length,
            (/* @__PURE__ */ new Set([...l.value.map((P) => P.value)])).size
          );
        });
      }
    }
    return H(() => {
      A(), e.registerBehaviourCallbacks(B, x, V);
    }), (f, C) => {
      const N = Y("q-item-label"), q = Y("q-item-section"), w = Y("q-item");
      return v(), E(r(ke), {
        ref_key: "fieldRef",
        ref: c,
        "model-value": e.modelValue,
        "onUpdate:modelValue": C[0] || (C[0] = (P) => e.modelValueOnUpdate(P)),
        label: e.field.label,
        hint: e.field.hint,
        outlined: r(u).fieldOutlined,
        filled: r(u).fieldFilled,
        standout: r(u).fieldStandout,
        borderless: r(u).fieldBorderless,
        rounded: r(u).fieldRounded,
        square: r(u).fieldSquare,
        dense: r(u).fieldDense,
        hideBottomSpace: r(u).fieldHideBottomSpace,
        color: r(u).fieldColor,
        bgColor: r(u).fieldBgColor,
        class: J(e.field.cssClass),
        "lazy-rules": s,
        clearable: e.field.clearable,
        prefix: e.field.prefix,
        suffix: e.field.suffix,
        readonly: e.field.readonly,
        rules: e.rules,
        options: l.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        multiple: !0,
        "use-chips": !0,
        onClear: I,
        onFilter: y,
        onVirtualScroll: g
      }, {
        "no-option": F(() => [
          D(w, {
            dense: r(u).fieldDense
          }, {
            default: F(() => [
              D(q, null, {
                default: F(() => [
                  D(N, null, {
                    default: F(() => [
                      ge(W(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        option: F((P) => [
          (v(), E(j(r(t)), {
            associationName: e.field.metadata.field_association_name,
            entry: P.opt,
            itemProps: P.itemProps
          }, null, 8, ["associationName", "entry", "itemProps"]))
        ]),
        _: 1
      }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]);
    };
  }
}), Ne = /* @__PURE__ */ $({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (p, _) => (v(), E(r(he), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Dt = /* @__PURE__ */ $({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (p, _) => (v(), E(r(he), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": u,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class ee {
  constructor(e, t, a, n, u, s, l, i, c) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...u,
      ...U.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...s,
      ...U.getGlobalFormStyle()
    }, this.actionComponent = a.actionComponent ?? U.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? U.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? U.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? U.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? U.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...U.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: U.getGlobalFormStyle(),
      events: {},
      actionComponent: L(U.getGlobalActionComponent()),
      orphanErrorsComponent: L(U.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: L(U.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, u, s, l, i, c) {
    return new ee(
      e,
      t,
      a,
      n,
      u,
      s,
      l,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = me.create(this.formApi);
    this.registerEventCallback(e);
    const t = me.getEventsObjectFromInstance(e), a = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, s) => {
        const l = [];
        u.fields.forEach((y) => {
          const A = this.dynamicComponentRecord[`field-${y.field_name}-before`], B = ee.getFieldComponentByFormFieldType(
            y.field_type
          ), x = this.dynamicComponentRecord[`field-${y.field_name}-after`], V = {
            associationDisplayComponent: L(
              this.associationDisplayComponent
            ),
            regularFieldType: ee.getRegularFieldTypeByFieldType(
              y.field_type
            )
          };
          let I = y.label;
          this.formSettings.requiredFieldsHasAsterisk && y.rules.find((f) => f.type === "required") && (I = I.concat("*"));
          const g = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: I,
            hint: y.hint ?? void 0,
            prefix: y.prefix ?? void 0,
            suffix: y.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? y.readonly ?? void 0,
            cssClass: y.css_class ?? void 0,
            staticSelectOptions: y.static_select_options,
            associationData: y.field_association_data,
            rules: y.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: A ? L(A) : void 0,
            mainComponent: L(B),
            afterComponent: x ? L(x) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: V
          };
          l.push(g);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? s}-before`], c = this.sectionComponent, p = this.dynamicComponentRecord[`section-${u.name ?? s}-after`], _ = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? s.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? s.toString()] ?? {},
          beforeComponent: i ? L(i) : void 0,
          mainComponent: L(c),
          afterComponent: p ? L(p) : void 0,
          fields: l
        };
        a.push(_);
      }
    ), {
      sections: a,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: t.form,
      actionComponent: L(this.actionComponent),
      orphanErrorsComponent: L(this.orphanErrorsComponent),
      wrapperResetComponent: L(this.wrapperResetComponent),
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
      string: Ne,
      text: Ne,
      number: Dt,
      date: vt,
      datetime: _t,
      selectString: Vt,
      selectBelongsTo: Re,
      selectHasMany: Ee,
      selectHasAndBelongsToMany: Ee,
      selectHasOne: Re,
      checkbox: kt,
      object: xt
    }[e];
  }
}
function T(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function At(o, e, t) {
  const a = t.form, n = (i, c, p) => i[c] ? p ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var _;
    return ((_ = t.getFieldByName(i.compare_to)) == null ? void 0 : _.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    R.formatDate(
      R.extractDate(i, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), s = [], l = [];
  switch (e) {
    case "date":
      s.push(Be(a.formSettings.dateFormat));
      break;
    case "datetime":
      s.push(Be(a.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        s.push(Rt());
        break;
      case "absence":
        s.push(Nt());
        break;
      case "acceptance":
        s.push(Bt());
        break;
      case "inclusion":
        s.push(we(c.including));
        break;
      case "exclusion":
        s.push(Et(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        l.push("allowNull");
        break;
      case "allowBlank":
        l.push("allowBlank");
        break;
      case "positiveNumber":
        s.push(Tt());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          wt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          $t(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          It(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          zt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          Pt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          Ut(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(Lt());
        break;
      case "numberNumericOnly":
        s.push(Gt());
        break;
      case "numberEvenOnly":
        s.push(Ht());
        break;
      case "numberOddOnly":
        s.push(Mt());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          Yt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          jt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          Wt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          Qt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          Xt(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          Kt(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          Jt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          Zt(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          en(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          tn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          nn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          on(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          an(
            n(c, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          rn(
            n(c, "other_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
    }
  }), l.length > 0 ? l.map((i) => {
    switch (i) {
      case "allowBlank":
        return Ot(s);
      case "allowNull":
        return qt(s);
    }
  }) : s;
}
function Rt() {
  return (o) => !!o || "Ce champ est requis";
}
function we(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Et(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${we.toString()}`
  );
}
function Nt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Bt() {
  return (o) => !!o || "Doit être accepté";
}
function qt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Ot(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Tt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function wt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function $t(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function zt(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Pt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function Ut(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function Lt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Gt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Ht() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Mt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Yt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Wt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Qt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Jt(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function Xt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Zt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function en(o, e) {
  return (t) => {
    const a = o(), n = R.extractDate(String(t), e), u = R.extractDate(a, e);
    return n <= u || `Inf. ou égal à ${a}`;
  };
}
function tn(o, e) {
  return (t) => {
    const a = o(), n = R.extractDate(String(t), e), u = R.extractDate(a, e);
    return n < u || `Inf. à ${a}`;
  };
}
function nn(o, e) {
  return (t) => {
    const a = o(), n = R.extractDate(String(t), e), u = R.extractDate(a, e);
    return n >= u || `Sup. ou égal à ${a}`;
  };
}
function on(o, e) {
  return (t) => {
    const a = o(), n = R.extractDate(String(t), e), u = R.extractDate(a, e);
    return n > u || `Sup. à ${a}`;
  };
}
function an(o, e) {
  return (t) => {
    const a = o(), n = R.extractDate(String(t), e), u = R.extractDate(a, e);
    return n === u || `Égale à ${n}`;
  };
}
function rn(o, e) {
  return (t) => {
    const a = o();
    return R.extractDate(String(t), e) !== R.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Be(o) {
  return (e) => e == null || e === "" ? !0 : ln(e, o) || `Date invalide. Format : ${o}`;
}
function ln(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = R.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : R.formatDate(t, e) === o;
}
const sn = {
  computeServerRules: At
}, un = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, cn = ["index"], dn = /* @__PURE__ */ $({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = () => !0, n = () => !0, u = () => {
    };
    const s = A(), l = k(), i = k([]);
    function c() {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = p(l.value), T(t.field.events.onReset), ae(() => {
        le();
      });
    }
    function p(m) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : R.formatDate(
            R.extractDate(String(m), b.formSettings.backendDateFormat),
            b.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : R.formatDate(
            R.extractDate(
              String(m),
              b.formSettings.backendDatetimeFormat
            ),
            b.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function _(m) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : R.formatDate(
            R.extractDate(String(m), b.formSettings.dateFormat),
            b.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : R.formatDate(
            R.extractDate(String(m), b.formSettings.datetimeFormat),
            b.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          l.value = "";
          break;
        case "checkbox":
          l.value = !1;
          break;
        case "date":
          l.value = null;
          break;
        case "datetime":
          l.value = null;
          break;
        case "number":
          l.value = null;
          break;
        case "selectString":
          l.value = void 0;
          break;
        case "text":
          l.value = "";
          break;
        case "object":
          l.value = {};
          break;
        case "selectBelongsTo":
          l.value = void 0;
          break;
        case "selectHasMany":
          l.value = void 0;
          break;
      }
      T(t.field.events.onClear);
    }
    function A() {
      return sn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function B(m) {
      l.value = m;
    }
    function x() {
      return r(l);
    }
    function V() {
      return _(r(l));
    }
    function I(m) {
      i.value = m;
    }
    function g() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0);
    }
    function f() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1);
    }
    function C(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.readonly = m);
    }
    function N(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hint = m);
    }
    function q(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.cssClass = m);
    }
    function w(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.suffix = m);
    }
    function P(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.prefix = m);
    }
    function ve(m) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.label = m);
    }
    function re() {
      const m = a();
      return T(t.field.events.onValidated), m;
    }
    function ie() {
      return n();
    }
    function le() {
      return u();
    }
    function ye(m, b, oe) {
      a = m, n = b, u = oe;
    }
    const ne = {
      reset: c,
      clear: y,
      validate: re,
      isValid: ie,
      hide: g,
      unhide: f,
      resetValidation: le,
      getValueDeserialized: V,
      getValueSerialized: x,
      setupBackendErrors: I,
      setReadonlyState: C,
      setHint: N,
      setCssClass: q,
      setSuffix: w,
      setPrefix: P,
      setLabel: ve,
      setValue: B,
      field: t.field
    };
    return e(ne), Z(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        T(t.field.events.onUpdate);
      }
    ), Z(
      () => t.field.events.onIsValid ? ie() : null,
      (m) => {
        m && T(t.field.events.onIsValid);
      }
    ), H(() => {
      var b;
      c();
      const m = (b = Oe()) == null ? void 0 : b.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, b) => Se((v(), z("div", null, [
      t.field.beforeComponent ? (v(), E(j(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      (v(), E(j(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: r(s),
        reset: c,
        clear: y,
        getValueDeserialized: V,
        getValueSerialized: x,
        validate: re,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: ye
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), E(j(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      i.value.length > 0 ? (v(), z("div", un, [
        (v(!0), z(ce, null, de(i.value, (oe, be) => (v(), z("div", {
          index: be,
          class: "flex column"
        }, W(oe), 9, cn))), 256))
      ])) : M("", !0)
    ], 512)), [
      [Fe, t.field.hidden !== !0]
    ]);
  }
}), fn = { class: "flex column" }, mn = /* @__PURE__ */ $({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, a = /* @__PURE__ */ new Map(), n = {
      reset: s,
      clear: l,
      validate: p,
      isValid: _,
      hide: i,
      unhide: c,
      resetValidation: y,
      getFields: A,
      setReadonlyState: B,
      setCssClass: x,
      setIcon: V,
      setLabel: I,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((g) => {
        const f = g.metadata.field_name, C = t.formApi.getFieldByName(f);
        C && a.set(f, C);
      });
    }
    function s() {
      a.forEach((g) => {
        g.reset();
      }), T(t.section.events.onReset);
    }
    function l() {
      a.forEach((g) => {
        g.clear();
      }), T(t.section.events.onClear);
    }
    function i() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (a.forEach((f) => {
        f.hide();
      }), g.hidden = !0, T(t.section.events.onHide));
    }
    function c() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (a.forEach((f) => {
        f.unhide();
      }), g.hidden = !1, T(t.section.events.onUnhide));
    }
    function p() {
      let g = !0;
      return a.forEach((f) => {
        if (!f.validate()) {
          g = !1;
          return;
        }
      }), T(t.section.events.onValidated), g;
    }
    function _() {
      let g = !0;
      return a.forEach((f) => {
        if (!f.isValid()) {
          g = !1;
          return;
        }
      }), g;
    }
    function y() {
      a.forEach((g) => {
        g.resetValidation();
      });
    }
    function A() {
      return a;
    }
    function B(g) {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (f.readonly = g);
    }
    function x(g) {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (f.cssClass = g);
    }
    function V(g) {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (f.icon = g);
    }
    function I(g) {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (f.label = g);
    }
    return e(n), Z(
      () => t.section.events.onIsValid ? _() : null,
      (g) => {
        g && T(t.section.events.onIsValid);
      }
    ), H(() => {
      var f;
      const g = (f = Oe()) == null ? void 0 : f.exposed;
      g && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        g
      ), ae(() => {
        u();
      });
    }), (g, f) => Se((v(), z("div", fn, [
      t.section.beforeComponent ? (v(), E(j(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0),
      (v(), E(j(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: F(() => [
          qe(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), E(j(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0)
    ], 512)), [
      [Fe, t.section.hidden !== !0]
    ]);
  }
}), pn = { class: "flex column" }, yn = /* @__PURE__ */ $({
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
    let a = null, n = "", u = 0, s = 0;
    const l = Ke(), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = k(ee.getEmptyFormBeforeInit()), _ = k(!1), y = k(!1), A = k(!1), B = k(!1), x = k("create"), V = k({});
    async function I() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), p.value = ee.getForm(
        t.resourceName,
        t.resourceId,
        f(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        X,
        t.eventManager
      ), u = p.value.sections.length, s = p.value.sections.map((d) => d.fields).flat().length, t.resourceId && (x.value = "edit");
    }
    async function g() {
      var O, G, se;
      if (!N())
        return;
      B.value = !0, re();
      const d = C(), h = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (h.success)
        V.value = {}, x.value === "create" && (x.value = "edit"), a && h.resource_data && (a.resource_data = h.resource_data), n = JSON.stringify(C()), p.value = ee.getForm(
          t.resourceName,
          t.resourceId,
          f(),
          {
            form: h.form,
            resource_data: h.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          X,
          t.eventManager
        ), T((G = p.value) == null ? void 0 : G.events.onSubmitSuccess);
      else {
        V.value = {};
        const ue = [];
        [...i].forEach((Q) => {
          const Ae = h.errors[Q[0]];
          Ae && (Q[1].setupBackendErrors(Ae), ue.push(Q[0]));
        }), Object.entries(h.errors).forEach((Q) => {
          ue.includes(Q[0]) || (V.value[Q[0]] = Q[1]);
        }), T((O = p.value) == null ? void 0 : O.events.onSubmitUnsuccess);
      }
      T((se = p.value) == null ? void 0 : se.events.onSubmit), B.value = !1;
    }
    function f() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const h in l) {
        const O = l[h];
        if (O) {
          const G = $({
            inheritAttrs: !1,
            setup(se, { attrs: ue, slots: Q }) {
              return () => O({
                ...se,
                ...ue,
                slots: Q
              });
            }
          });
          switch (h) {
            case "sections":
              d.sectionComponent = G;
              break;
            case "actions":
              d.actionComponent = G;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = G;
              break;
            case "association-display":
              d.associationDisplayComponent = G;
              break;
            default:
              d.dynamicComponentRecord[h] = G;
              break;
          }
        }
      }
      return d;
    }
    function C() {
      const d = {};
      return [...i].forEach((h) => {
        d[h[0]] = h[1].getValueDeserialized();
      }), d;
    }
    function N() {
      var h;
      let d = !0;
      return i.forEach((O) => {
        if (!O.validate()) {
          d = !1;
          return;
        }
      }), T((h = p.value) == null ? void 0 : h.events.onValidated), d;
    }
    function q() {
      let d = !0;
      return i.forEach((h) => {
        if (!h.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function w() {
      var d;
      i.forEach((h) => {
        h.reset();
      }), T((d = p.value) == null ? void 0 : d.events.onReset);
    }
    function P() {
      var d;
      i.forEach((h) => {
        h.clear();
      }), T((d = p.value) == null ? void 0 : d.events.onClear);
    }
    function ve() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function re() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function ie(d) {
      if (a)
        return a.resource_data[d];
    }
    function le(d) {
      return c.get(d);
    }
    function ye(d) {
      return [...c.values()].at(d);
    }
    function ne() {
      return c;
    }
    function m(d) {
      return i.get(d);
    }
    function b() {
      return i;
    }
    function oe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function be() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((h) => {
        (t[h] === null || t[h] === void 0) && console.warn(`Missing props for <Submit64> -> ${h}`);
      });
    }
    function $e() {
      return r(x);
    }
    function Ie() {
      return n !== JSON.stringify(C());
    }
    function ze(d) {
      p.value && (p.value.context = d);
    }
    function Pe(d) {
      p.value && (p.value.cssClass = d);
    }
    function Ue(d) {
      p.value && (p.value.readonly = d);
    }
    function Le() {
      return A.value;
    }
    function Ge() {
      return p;
    }
    function He(d) {
      var h;
      return (h = p.value) == null ? void 0 : h.sections.find((O) => O.name === d);
    }
    function Me(d) {
      var h;
      return (h = p.value) == null ? void 0 : h.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === d);
    }
    function xe(d, h) {
      c.set(d, h), u === c.size && (_.value = !0);
    }
    function Ve(d, h) {
      i.set(d, h), s === i.size && (y.value = !0);
    }
    const De = {
      getFormRef: Ge,
      getSectionRef: He,
      getFieldRef: Me,
      registerSectionWrapperRef: xe,
      registerFieldWrapperRef: Ve
    }, Ye = new Proxy({}, {
      get(d, h) {
        var O;
        return (O = p.value) == null ? void 0 : O[h];
      }
    }), X = {
      getMode: $e,
      getSectionByName: le,
      getSectionByIndex: ye,
      getSections: ne,
      getFieldByName: m,
      getFields: b,
      validate: N,
      isFormValid: q,
      reset: w,
      clear: P,
      resetValidation: ve,
      submit: g,
      valuesHasChanged: Ie,
      getInitialValueByFieldName: ie,
      getAssociationDataCallback: oe,
      setContext: ze,
      setCssClass: Pe,
      setReadonlyState: Ue,
      isReady: Le,
      form: Ye
    };
    return e(X), Z(
      () => _.value && y.value,
      (d) => {
        var h;
        d && !A.value && (T((h = p.value) == null ? void 0 : h.events.onReady), A.value = !0);
      }
    ), Z(
      () => {
        var d;
        return (d = p.value) != null && d.events.onIsValid ? q() : null;
      },
      () => {
        var d;
        T((d = p.value) == null ? void 0 : d.events.onIsValid);
      }
    ), Z(
      () => {
        var d;
        return (d = p.value) != null && d.events.onUpdate ? C() : null;
      },
      () => {
        var d;
        T((d = p.value) == null ? void 0 : d.events.onUpdate);
      }
    ), H(async () => {
      be(), await I(), ae(() => {
        n = JSON.stringify(C());
      });
    }), (d, h) => Se((v(), z("div", pn, [
      K("div", {
        class: J(p.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), z(ce, null, de(p.value.sections, (O) => (v(), E(mn, {
          key: O.name,
          section: O,
          context: t.context,
          formApi: X,
          privateFormApi: De,
          registerRef: xe
        }, {
          default: F(() => [
            (v(!0), z(ce, null, de(O.fields, (G) => (v(), E(dn, {
              key: G.metadata.field_name,
              field: G,
              context: t.context,
              formApi: X,
              privateFormApi: De,
              registerRef: Ve
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), E(j(p.value.orphanErrorsComponent), {
        orphanErrors: V.value,
        formApi: X
      }, null, 8, ["orphanErrors"])),
      (v(), E(j(p.value.actionComponent), {
        isLoadingSubmit: B.value,
        formApi: X
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Fe, A.value]
    ]);
  }
});
export {
  me as DynamicLogicBuilder,
  U as Submit64,
  yn as Submit64Form
};
