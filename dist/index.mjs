var Qe = Object.defineProperty;
var Je = (o, e, t) => e in o ? Qe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => Je(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as q, createElementBlock as z, openBlock as v, createElementVNode as Q, createVNode as A, createBlock as N, createCommentVNode as H, unref as r, mergeProps as Se, toDisplayString as Y, renderSlot as qe, resolveComponent as Ke, normalizeProps as Xe, guardReactiveProps as Ze, withCtx as F, createTextVNode as pe, Fragment as ue, renderList as ce, ref as x, onMounted as G, normalizeClass as W, watch as K, resolveDynamicComponent as M, nextTick as oe, markRaw as U, getCurrentInstance as we, withDirectives as ke, vShow as xe, useSlots as et } from "vue";
import { QBtn as Z, QIcon as de, QItem as ge, QItemSection as he, QItemLabel as ve, QInput as ye, QPopupProxy as Fe, QDate as $e, QTime as tt, QCheckbox as nt, QSelect as Ve, date as E } from "quasar";
const ot = { class: "flex column" }, at = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, rt = /* @__PURE__ */ q({
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
      Q("div", at, [
        A(r(Z), Se(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (v(), N(r(Z), Se({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (v(), N(r(Z), Se({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : H("", !0)
      ])
    ]));
  }
}), it = { class: "flex row items-center" }, lt = { class: "text-body1 text-weight-medium" }, st = { class: "flex column q-gutter-md" }, ut = /* @__PURE__ */ q({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", null, [
      Q("div", it, [
        e.sectionApi.section.icon ? (v(), N(r(de), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        Q("div", lt, Y(e.sectionApi.section.label), 1)
      ]),
      Q("div", st, [
        qe(t.$slots, "default")
      ])
    ]));
  }
}), ct = /* @__PURE__ */ q({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Ke("q-icon");
      return v(), N(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (u) => e.reset())
      });
    };
  }
}), dt = /* @__PURE__ */ q({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), N(r(ge), Xe(Ze(e.itemProps)), {
      default: F(() => [
        A(r(he), null, {
          default: F(() => [
            A(r(ve), null, {
              default: F(() => [
                pe(Y(e.entry.label), 1)
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
}), ft = { class: "flex column" }, mt = /* @__PURE__ */ q({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", ft, [
      (v(!0), z(ue, null, ce(e.orphanErrors, (n, u) => (v(), z("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, Y(u) + " : " + Y(n.join(",")), 1))), 128))
    ]));
  }
}), me = class me {
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
_(me, "_instance", new me());
let P = me;
class fe {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, u = new pt(a, n, this.formApi);
    return this.events.push(u), new gt(u);
  }
  static create(e) {
    return new fe(e);
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
    _(this, "type");
    _(this, "data");
    _(this, "formApi");
    _(this, "action", () => {
    });
    _(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const ht = { class: "row items-center justify-end" }, vt = /* @__PURE__ */ q({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x(), l = x();
    function i() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function m() {
      return l.value ? l.value.hasError : !1;
    }
    function C() {
      l.value && l.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(c, m, C);
    }), (y, R) => (v(), N(r(ye), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[1] || (R[1] = (B) => e.modelValueOnUpdate(B)),
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
      class: W(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            A(r(Fe), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                A(r($e), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[0] || (R[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: F(() => [
                    Q("div", ht, [
                      A(r(Z), {
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
}), yt = { class: "row items-center justify-end" }, bt = { class: "row items-center justify-end" }, Ct = /* @__PURE__ */ q({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x(), l = x(), i = x();
    function c() {
      s.value && s.value.hide();
    }
    function m() {
      l.value && l.value.hide();
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? i.value.hasError : !1;
    }
    function R() {
      i.value && i.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(C, y, R);
    }), (B, V) => (v(), N(r(ye), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[2] || (V[2] = (D) => e.modelValueOnUpdate(D)),
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
      class: W(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: F(() => [
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            A(r(Fe), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                A(r($e), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: F(() => [
                    Q("div", yt, [
                      A(r(Z), {
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
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            A(r(Fe), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                A(r(tt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[1] || (V[1] = (D) => e.modelValueOnUpdate(D)),
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: F(() => [
                    Q("div", bt, [
                      A(r(Z), {
                        onClick: m,
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
}), _t = { class: "flex column" }, St = {
  key: 0,
  class: "q-field__bottom"
}, Ft = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, kt = /* @__PURE__ */ q({
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
    const e = o, t = x(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function s() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return K(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), G(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (i, c) => (v(), z("div", _t, [
      A(r(nt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => e.modelValueOnUpdate(m)),
        label: e.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: W([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), z("div", St, Y(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (v(), z("div", Ft, Y(t.value), 1)) : H("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ q({
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
}), Vt = /* @__PURE__ */ q({
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
    const e = o, t = x([]), a = x([]), n = x(), u = e.formApi.form, s = u.formSettings, l = u.formStyle, i = s.rulesBehaviour === "lazy";
    function c(V, D) {
      if (V === "") {
        D(() => {
          a.value = [...t.value];
        });
        return;
      }
      D(() => {
        const w = V.toLowerCase();
        a.value = t.value.filter((g) => g.label.toLowerCase().includes(w));
      });
    }
    function m() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? n.value.hasError : !1;
    }
    function R() {
      n.value && n.value.resetValidation();
    }
    function B() {
      e.clear(), a.value = [];
    }
    return G(() => {
      m(), e.registerBehaviourCallbacks(C, y, R);
    }), (V, D) => (v(), N(r(Ve), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (w) => e.modelValueOnUpdate(w)),
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
      class: W(e.field.cssClass),
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
        A(r(ge), {
          dense: r(l).fieldDense
        }, {
          default: F(() => [
            A(r(he), null, {
              default: F(() => [
                A(r(ve), null, {
                  default: F(() => [
                    pe(Y(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Ne = /* @__PURE__ */ q({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = x([]), i = x(
      C()
    ), c = x(), m = x("__init");
    function C() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(p, S) {
      if (p === m.value) {
        S(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = p;
      const I = e.formApi.form;
      i.value.isLoading = !0, k({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: p,
        context: I.context
      }).then(($) => {
        S(() => {
          l.value = $.rows, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = C();
      });
    }
    function R() {
      oe(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (l.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: p,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function V() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function w() {
      e.clear(), l.value = [];
    }
    function g(p) {
      const S = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && p.to === S && S !== -1) {
        const k = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, I({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: m.value,
          context: k.context
        }).then(($) => {
          l.value = l.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, p.ref.refresh();
        });
      }
    }
    return G(() => {
      R(), e.registerBehaviourCallbacks(B, V, D);
    }), (p, S) => (v(), N(r(Ve), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (k) => e.modelValueOnUpdate(k)),
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
      class: W(e.field.cssClass),
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
      onClear: w,
      onFilter: y,
      onVirtualScroll: g
    }, {
      "no-option": F(() => [
        A(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: F(() => [
            A(r(he), null, {
              default: F(() => [
                A(r(ve), null, {
                  default: F(() => [
                    pe(Y(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: F((k) => [
        (v(), N(M(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Be = /* @__PURE__ */ q({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = x([]), i = x(
      C()
    ), c = x(), m = x("__init");
    function C() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(p, S) {
      if (p === m.value) {
        S(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = p;
      const I = e.formApi.form;
      i.value.isLoading = !0, k({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: p,
        context: I.context
      }).then(($) => {
        S(() => {
          l.value = $.rows, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = C();
      });
    }
    function R() {
      oe(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (l.value = p.map((S, k) => ({
          label: e.field.associationData.label[k] ?? "???",
          value: S,
          data: e.field.associationData.data[k]
        })));
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function V() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function w() {
      e.clear(), l.value = [];
    }
    function g(p) {
      const S = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && p.to === S && S !== -1) {
        const k = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, I({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: m.value,
          context: k.context
        }).then(($) => {
          l.value = l.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, p.ref.refresh(), console.log(
            l.value.length,
            (/* @__PURE__ */ new Set([...l.value.map((ee) => ee.value)])).size
          );
        });
      }
    }
    return G(() => {
      R(), e.registerBehaviourCallbacks(B, V, D);
    }), (p, S) => (v(), N(r(Ve), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (k) => e.modelValueOnUpdate(k)),
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
      class: W(e.field.cssClass),
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
      onClear: w,
      onFilter: y,
      onVirtualScroll: g
    }, {
      "no-option": F(() => [
        A(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: F(() => [
            A(r(he), null, {
              default: F(() => [
                A(r(ve), null, {
                  default: F(() => [
                    pe(Y(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: F((k) => [
        (v(), N(M(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Oe = /* @__PURE__ */ q({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (m, C) => (v(), N(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: W(e.field.cssClass),
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
}), Dt = /* @__PURE__ */ q({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (m, C) => (v(), N(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: W(e.field.cssClass),
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
class X {
  constructor(e, t, a, n, u, s, l, i, c) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...u,
      ...P.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...s,
      ...P.getGlobalFormStyle()
    }, this.actionComponent = a.actionComponent ?? P.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? P.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? P.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? P.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? P.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...P.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: P.getGlobalFormStyle(),
      events: {},
      actionComponent: U(P.getGlobalActionComponent()),
      orphanErrorsComponent: U(P.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: U(P.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, u, s, l, i, c) {
    return new X(
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
    const e = fe.create(this.formApi);
    this.registerEventCallback(e);
    const t = fe.getEventsObjectFromInstance(e), a = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, s) => {
        const l = [];
        u.fields.forEach((y) => {
          const R = this.dynamicComponentRecord[`field-${y.field_name}-before`], B = X.getFieldComponentByFormFieldType(
            y.field_type
          ), V = this.dynamicComponentRecord[`field-${y.field_name}-after`], D = {
            associationDisplayComponent: U(
              this.associationDisplayComponent
            ),
            regularFieldType: X.getRegularFieldTypeByFieldType(
              y.field_type
            )
          };
          let w = y.label;
          this.formSettings.requiredFieldsHasAsterisk && y.rules.find((p) => p.type === "required") && (w = w.concat("*"));
          const g = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: w,
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
            beforeComponent: R ? U(R) : void 0,
            mainComponent: U(B),
            afterComponent: V ? U(V) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: D
          };
          l.push(g);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? s}-before`], c = this.sectionComponent, m = this.dynamicComponentRecord[`section-${u.name ?? s}-after`], C = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? s.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? s.toString()] ?? {},
          beforeComponent: i ? U(i) : void 0,
          mainComponent: U(c),
          afterComponent: m ? U(m) : void 0,
          fields: l
        };
        a.push(C);
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
      actionComponent: U(this.actionComponent),
      orphanErrorsComponent: U(this.orphanErrorsComponent),
      wrapperResetComponent: U(this.wrapperResetComponent),
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
      string: Oe,
      text: Oe,
      number: Dt,
      date: vt,
      datetime: Ct,
      selectString: Vt,
      selectBelongsTo: Ne,
      selectHasMany: Be,
      selectHasAndBelongsToMany: Be,
      selectHasOne: Ne,
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
  const a = t.form, n = (i, c, m) => i[c] ? m ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(i.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    E.formatDate(
      E.extractDate(i, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), s = [], l = [];
  switch (e) {
    case "date":
      s.push(Te(a.formSettings.dateFormat));
      break;
    case "datetime":
      s.push(Te(a.formSettings.datetimeFormat));
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
        s.push(Ie(c.including));
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
        s.push(qt());
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
        return Tt(s);
      case "allowNull":
        return Ot(s);
    }
  }) : s;
}
function Rt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ie(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Et(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ie.toString()}`
  );
}
function Nt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Bt() {
  return (o) => !!o || "Doit être accepté";
}
function Ot(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Tt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function qt() {
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
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n <= u || `Inf. ou égal à ${a}`;
  };
}
function tn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n < u || `Inf. à ${a}`;
  };
}
function nn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n >= u || `Sup. ou égal à ${a}`;
  };
}
function on(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n > u || `Sup. à ${a}`;
  };
}
function an(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n === u || `Égale à ${n}`;
  };
}
function rn(o, e) {
  return (t) => {
    const a = o();
    return E.extractDate(String(t), e) !== E.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Te(o) {
  return (e) => e == null || e === "" ? !0 : ln(e, o) || `Date invalide. Format : ${o}`;
}
function ln(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = E.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : E.formatDate(t, e) === o;
}
const sn = {
  computeServerRules: At
}, un = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, cn = ["index"], dn = /* @__PURE__ */ q({
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
    const s = R(), l = x(), i = x([]);
    function c() {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = m(l.value), T(t.field.events.onReset), oe(() => {
        ie();
      });
    }
    function m(f) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : E.formatDate(
            E.extractDate(String(f), b.formSettings.backendDateFormat),
            b.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : E.formatDate(
            E.extractDate(
              String(f),
              b.formSettings.backendDatetimeFormat
            ),
            b.formSettings.datetimeFormat
          );
      }
      return f;
    }
    function C(f) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return f == null || f === "" ? null : E.formatDate(
            E.extractDate(String(f), b.formSettings.dateFormat),
            b.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : E.formatDate(
            E.extractDate(String(f), b.formSettings.datetimeFormat),
            b.formSettings.backendDatetimeFormat
          );
      }
      return f;
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
    function R() {
      return sn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function B(f) {
      l.value = f;
    }
    function V() {
      return r(l);
    }
    function D() {
      return C(r(l));
    }
    function w(f) {
      i.value = f;
    }
    function g() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !0);
    }
    function p() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !1);
    }
    function S(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.readonly = f);
    }
    function k(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hint = f);
    }
    function I(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.cssClass = f);
    }
    function $(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.suffix = f);
    }
    function ee(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.prefix = f);
    }
    function be(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.label = f);
    }
    function ae() {
      const f = a();
      return T(t.field.events.onValidated), f;
    }
    function re() {
      return n();
    }
    function ie() {
      return u();
    }
    function Ce(f, b, ne) {
      a = f, n = b, u = ne;
    }
    const te = {
      reset: c,
      clear: y,
      validate: ae,
      isValid: re,
      hide: g,
      unhide: p,
      resetValidation: ie,
      getValueDeserialized: D,
      getValueSerialized: V,
      setupBackendErrors: w,
      setReadonlyState: S,
      setHint: k,
      setCssClass: I,
      setSuffix: $,
      setPrefix: ee,
      setLabel: be,
      setValue: B,
      field: t.field
    };
    return e(te), K(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        T(t.field.events.onUpdate);
      }
    ), K(
      () => t.field.events.onIsValid ? re() : null,
      (f) => {
        f && T(t.field.events.onIsValid);
      }
    ), G(() => {
      var b;
      c();
      const f = (b = we()) == null ? void 0 : b.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, b) => ke((v(), z("div", null, [
      t.field.beforeComponent ? (v(), N(M(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: te
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), N(M(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: r(s),
        reset: c,
        clear: y,
        getValueDeserialized: D,
        getValueSerialized: V,
        validate: ae,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: Ce
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), N(M(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: te
      }, null, 8, ["formApi"])) : H("", !0),
      i.value.length > 0 ? (v(), z("div", un, [
        (v(!0), z(ue, null, ce(i.value, (ne, _e) => (v(), z("div", {
          index: _e,
          class: "flex column"
        }, Y(ne), 9, cn))), 256))
      ])) : H("", !0)
    ], 512)), [
      [xe, t.field.hidden !== !0]
    ]);
  }
}), fn = { class: "flex column" }, mn = /* @__PURE__ */ q({
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
      validate: m,
      isValid: C,
      hide: i,
      unhide: c,
      resetValidation: y,
      getFields: R,
      setReadonlyState: B,
      setCssClass: V,
      setIcon: D,
      setLabel: w,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((g) => {
        const p = g.metadata.field_name, S = t.formApi.getFieldByName(p);
        S && a.set(p, S);
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
      g && (a.forEach((p) => {
        p.hide();
      }), g.hidden = !0, T(t.section.events.onHide));
    }
    function c() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (a.forEach((p) => {
        p.unhide();
      }), g.hidden = !1, T(t.section.events.onUnhide));
    }
    function m() {
      let g = !0;
      return a.forEach((p) => {
        if (!p.validate()) {
          g = !1;
          return;
        }
      }), T(t.section.events.onValidated), g;
    }
    function C() {
      let g = !0;
      return a.forEach((p) => {
        if (!p.isValid()) {
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
    function R() {
      return a;
    }
    function B(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.readonly = g);
    }
    function V(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.cssClass = g);
    }
    function D(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.icon = g);
    }
    function w(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.label = g);
    }
    return e(n), K(
      () => t.section.events.onIsValid ? C() : null,
      (g) => {
        g && T(t.section.events.onIsValid);
      }
    ), G(() => {
      var p;
      const g = (p = we()) == null ? void 0 : p.exposed;
      g && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        g
      ), oe(() => {
        u();
      });
    }), (g, p) => ke((v(), z("div", fn, [
      t.section.beforeComponent ? (v(), N(M(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), N(M(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: F(() => [
          qe(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), N(M(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [xe, t.section.hidden !== !0]
    ]);
  }
}), pn = { class: "flex column" }, yn = /* @__PURE__ */ q({
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
    const l = et(), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), m = x(X.getEmptyFormBeforeInit()), C = x(!1), y = x(!1), R = x(!1), B = x(!1), V = x("create"), D = x({});
    async function w() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), m.value = X.getForm(
        t.resourceName,
        t.resourceId,
        p(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        J,
        t.eventManager
      ), u = m.value.sections.length, s = m.value.sections.map((d) => d.fields).flat().length, t.resourceId && (V.value = "edit");
    }
    async function g() {
      var O, L, le;
      if (!k())
        return;
      B.value = !0, ae();
      const d = S(), h = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (h.success)
        D.value = {}, V.value === "create" && (V.value = "edit"), a && h.resource_data && (a.resource_data = h.resource_data), n = JSON.stringify(S()), m.value = X.getForm(
          t.resourceName,
          t.resourceId,
          p(),
          {
            form: h.form,
            resource_data: h.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          J,
          t.eventManager
        ), T((L = m.value) == null ? void 0 : L.events.onSubmitSuccess);
      else {
        D.value = {};
        const se = [];
        [...i].forEach((j) => {
          const Ee = h.errors[j[0]];
          Ee && (j[1].setupBackendErrors(Ee), se.push(j[0]));
        }), Object.entries(h.errors).forEach((j) => {
          se.includes(j[0]) || (D.value[j[0]] = j[1]);
        }), T((O = m.value) == null ? void 0 : O.events.onSubmitUnsuccess);
      }
      T((le = m.value) == null ? void 0 : le.events.onSubmit), B.value = !1;
    }
    function p() {
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
          const L = q({
            inheritAttrs: !1,
            setup(le, { attrs: se, slots: j }) {
              return () => O({
                ...le,
                ...se,
                slots: j
              });
            }
          });
          switch (h) {
            case "sections":
              d.sectionComponent = L;
              break;
            case "actions":
              d.actionComponent = L;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = L;
              break;
            case "association-display":
              d.associationDisplayComponent = L;
              break;
            default:
              d.dynamicComponentRecord[h] = L;
              break;
          }
        }
      }
      return d;
    }
    function S() {
      const d = {};
      return [...i].forEach((h) => {
        d[h[0]] = h[1].getValueDeserialized();
      }), d;
    }
    function k() {
      var h;
      let d = !0;
      return i.forEach((O) => {
        if (!O.validate()) {
          d = !1;
          return;
        }
      }), T((h = m.value) == null ? void 0 : h.events.onValidated), d;
    }
    function I() {
      let d = !0;
      return i.forEach((h) => {
        if (!h.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function $() {
      var d;
      i.forEach((h) => {
        h.reset();
      }), T((d = m.value) == null ? void 0 : d.events.onReset);
    }
    function ee() {
      var d;
      i.forEach((h) => {
        h.clear();
      }), T((d = m.value) == null ? void 0 : d.events.onClear);
    }
    function be() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function ae() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function re(d) {
      if (a)
        return a.resource_data[d];
    }
    function ie(d) {
      return c.get(d);
    }
    function Ce(d) {
      return [...c.values()].at(d);
    }
    function te() {
      return c;
    }
    function f(d) {
      return i.get(d);
    }
    function b() {
      return i;
    }
    function ne() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function _e() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((h) => {
        (t[h] === null || t[h] === void 0) && console.warn(`Missing props for <Submit64> -> ${h}`);
      });
    }
    function ze() {
      return r(V);
    }
    function Pe() {
      return n !== JSON.stringify(S());
    }
    function Ue(d) {
      m.value && (m.value.context = d);
    }
    function Le(d) {
      m.value && (m.value.cssClass = d);
    }
    function Ge(d) {
      m.value && (m.value.readonly = d);
    }
    function He() {
      return R.value;
    }
    function Me() {
      return m;
    }
    function Ye(d) {
      var h;
      return (h = m.value) == null ? void 0 : h.sections.find((O) => O.name === d);
    }
    function je(d) {
      var h;
      return (h = m.value) == null ? void 0 : h.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === d);
    }
    function De(d, h) {
      c.set(d, h), u === c.size && (C.value = !0);
    }
    function Ae(d, h) {
      i.set(d, h), s === i.size && (y.value = !0);
    }
    const Re = {
      getFormRef: Me,
      getSectionRef: Ye,
      getFieldRef: je,
      registerSectionWrapperRef: De,
      registerFieldWrapperRef: Ae
    }, We = new Proxy({}, {
      get(d, h) {
        var O;
        return (O = m.value) == null ? void 0 : O[h];
      }
    }), J = {
      getMode: ze,
      getSectionByName: ie,
      getSectionByIndex: Ce,
      getSections: te,
      getFieldByName: f,
      getFields: b,
      validate: k,
      isFormValid: I,
      reset: $,
      clear: ee,
      resetValidation: be,
      submit: g,
      valuesHasChanged: Pe,
      getInitialValueByFieldName: re,
      getAssociationDataCallback: ne,
      setContext: Ue,
      setCssClass: Le,
      setReadonlyState: Ge,
      isReady: He,
      form: We
    };
    return e(J), K(
      () => C.value && y.value,
      (d) => {
        var h;
        d && !R.value && (T((h = m.value) == null ? void 0 : h.events.onReady), R.value = !0);
      }
    ), K(
      () => {
        var d;
        return (d = m.value) != null && d.events.onIsValid ? I() : null;
      },
      () => {
        var d;
        T((d = m.value) == null ? void 0 : d.events.onIsValid);
      }
    ), K(
      () => {
        var d;
        return (d = m.value) != null && d.events.onUpdate ? S() : null;
      },
      () => {
        var d;
        T((d = m.value) == null ? void 0 : d.events.onUpdate);
      }
    ), G(async () => {
      _e(), await w(), oe(() => {
        n = JSON.stringify(S());
      });
    }), (d, h) => ke((v(), z("div", pn, [
      Q("div", {
        class: W(m.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), z(ue, null, ce(m.value.sections, (O) => (v(), N(mn, {
          key: O.name,
          section: O,
          context: t.context,
          formApi: J,
          privateFormApi: Re,
          registerRef: De
        }, {
          default: F(() => [
            (v(!0), z(ue, null, ce(O.fields, (L) => (v(), N(dn, {
              key: L.metadata.field_name,
              field: L,
              context: t.context,
              formApi: J,
              privateFormApi: Re,
              registerRef: Ae
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), N(M(m.value.orphanErrorsComponent), {
        orphanErrors: D.value,
        formApi: J
      }, null, 8, ["orphanErrors"])),
      (v(), N(M(m.value.actionComponent), {
        isLoadingSubmit: B.value,
        formApi: J
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [xe, R.value]
    ]);
  }
});
export {
  fe as DynamicLogicBuilder,
  P as Submit64,
  yn as Submit64Form
};
