var Ye = Object.defineProperty;
var Me = (o, e, t) => e in o ? Ye(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => Me(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as w, openBlock as v, createElementVNode as W, createVNode as q, createBlock as R, createCommentVNode as G, unref as a, mergeProps as ye, toDisplayString as X, renderSlot as Ne, resolveComponent as je, normalizeProps as We, guardReactiveProps as Qe, withCtx as O, createTextVNode as Je, Fragment as se, renderList as ue, ref as F, onMounted as L, normalizeClass as j, watch as J, resolveDynamicComponent as H, nextTick as ne, markRaw as P, getCurrentInstance as Ee, withDirectives as Ce, vShow as Se, useSlots as Ke } from "vue";
import { QBtn as Z, QIcon as ce, QItem as Xe, QItemSection as Ze, QItemLabel as et, QInput as me, QPopupProxy as be, QDate as Oe, QTime as tt, QCheckbox as nt, QSelect as _e, date as D } from "quasar";
const ot = { class: "flex column" }, rt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, at = /* @__PURE__ */ T({
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
    return (r, n) => (v(), w("div", ot, [
      W("div", rt, [
        q(a(Z), ye(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (v(), R(a(Z), ye({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : G("", !0),
        e.clear ? (v(), R(a(Z), ye({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : G("", !0)
      ])
    ]));
  }
}), it = { class: "flex row items-center" }, lt = { class: "text-body1 text-weight-medium" }, st = { class: "flex column q-gutter-md" }, ut = /* @__PURE__ */ T({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), w("div", null, [
      W("div", it, [
        e.sectionApi.section.icon ? (v(), R(a(ce), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : G("", !0),
        W("div", lt, X(e.sectionApi.section.label), 1)
      ]),
      W("div", st, [
        Ne(t.$slots, "default")
      ])
    ]));
  }
}), ct = /* @__PURE__ */ T({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = je("q-icon");
      return v(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (u) => e.reset())
      });
    };
  }
}), dt = /* @__PURE__ */ T({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), R(a(Xe), We(Qe(e.itemProps)), {
      default: O(() => [
        q(a(Ze), null, {
          default: O(() => [
            q(a(et), null, {
              default: O(() => [
                Je(X(e.entry.label), 1)
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
}), ft = { class: "flex column" }, mt = /* @__PURE__ */ T({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), w("div", ft, [
      (v(!0), w(se, null, ue(e.orphanErrors, (n, u) => (v(), w("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, X(u) + " : " + X(n.join(",")), 1))), 128))
    ]));
  }
}), fe = class fe {
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
    }, this._actionComponent = at, this._orphanErrorsComponent = mt, this._sectionComponent = ut, this._wrapperResetComponent = ct, this._associationDisplayComponent = dt;
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
S(fe, "_instance", new fe());
let z = fe;
class de {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, u = new pt(r, n, this.formApi);
    return this.events.push(u), new gt(u);
  }
  static create(e) {
    return new de(e);
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
class pt {
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
const ht = { class: "row items-center justify-end" }, vt = /* @__PURE__ */ T({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", l = F(), s = F();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return s.value ? s.value.validate() : !1;
    }
    function m() {
      return s.value ? s.value.hasError : !1;
    }
    function C() {
      s.value && s.value.resetValidation();
    }
    return L(() => {
      e.registerBehaviourCallbacks(c, m, C);
    }), (y, V) => (v(), R(a(me), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[1] || (V[1] = (A) => e.modelValueOnUpdate(A)),
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
      class: j(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        q(a(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            q(a(be), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                q(a(Oe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: O(() => [
                    W("div", ht, [
                      q(a(Z), {
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
}), yt = { class: "row items-center justify-end" }, bt = { class: "row items-center justify-end" }, Ct = /* @__PURE__ */ T({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", l = F(), s = F(), i = F();
    function c() {
      l.value && l.value.hide();
    }
    function m() {
      s.value && s.value.hide();
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? i.value.hasError : !1;
    }
    function V() {
      i.value && i.value.resetValidation();
    }
    return L(() => {
      e.registerBehaviourCallbacks(C, y, V);
    }), (A, k) => (v(), R(a(me), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[2] || (k[2] = (x) => e.modelValueOnUpdate(x)),
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
      class: j(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        q(a(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            q(a(be), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                q(a(Oe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (x) => e.modelValueOnUpdate(x)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: O(() => [
                    W("div", yt, [
                      q(a(Z), {
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
        q(a(ce), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            q(a(be), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                q(a(tt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[1] || (k[1] = (x) => e.modelValueOnUpdate(x)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: O(() => [
                    W("div", bt, [
                      q(a(Z), {
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
}), St = { class: "flex column" }, _t = {
  key: 0,
  class: "q-field__bottom"
}, Ft = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, kt = /* @__PURE__ */ T({
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
    const e = o, t = F(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return J(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), L(() => {
      e.registerBehaviourCallbacks(u, l, s);
    }), (i, c) => (v(), w("div", St, [
      q(a(nt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => e.modelValueOnUpdate(m)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: j([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), w("div", _t, X(e.field.hint), 1)) : G("", !0),
      t.value !== !0 ? (v(), w("div", Ft, X(t.value), 1)) : G("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ T({
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
    return t.formStyle, r.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
}), Vt = /* @__PURE__ */ T({
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
    const e = o, t = F([]), r = F([]), n = F(), u = e.formApi.form, l = u.formSettings, s = u.formStyle, i = l.rulesBehaviour === "lazy";
    function c(k, x) {
      if (k === "") {
        x(() => {
          r.value = [...t.value];
        });
        return;
      }
      x(() => {
        const $ = k.toLowerCase();
        r.value = t.value.filter((p) => p.label.toLowerCase().includes($));
      });
    }
    function m() {
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
    function V() {
      n.value && n.value.resetValidation();
    }
    function A() {
      e.clear(), r.value = [];
    }
    return L(() => {
      m(), e.registerBehaviourCallbacks(C, y, V);
    }), (k, x) => (v(), R(a(_e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[0] || (x[0] = ($) => e.modelValueOnUpdate($)),
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
      class: j(e.field.cssClass),
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
      onClear: A,
      onFilter: c
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), De = /* @__PURE__ */ T({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, u = r.formStyle, l = n.rulesBehaviour === "lazy", s = F([]), i = F(
      C()
    ), c = F(), m = F("__init");
    function C() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(g, _) {
      if (g === m.value)
        return;
      const E = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = g;
      const I = e.formApi.form;
      i.value.isLoading = !0, E({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: g,
        context: I.context
      }).then((Y) => {
        _(() => {
          s.value = Y.rows, i.value.lastPage = Math.ceil(
            Y.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        s.value = [], i.value = C();
      });
    }
    function V() {
      ne(() => {
        const g = e.getValueSerialized();
        !g || !e.field.associationData || (s.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: g,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function A() {
      return c.value ? c.value.validate() : !1;
    }
    function k() {
      return c.value ? c.value.hasError : !1;
    }
    function x() {
      c.value && c.value.resetValidation();
    }
    function $() {
      e.clear(), s.value = [];
    }
    function p(g) {
      const _ = s.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && g.to === _ && _ > i.value.limit - 1) {
        const E = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, I({
          resourceName: E.resourceName,
          resourceId: E.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: m.value,
          context: E.context
        }).then((Y) => {
          s.value = s.value.concat(
            Y.rows
          ), i.value.lastPage = Math.ceil(
            Y.row_count / i.value.limit
          ), i.value.nextPage++, i.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    return L(() => {
      V(), e.registerBehaviourCallbacks(A, k, x);
    }), (g, _) => (v(), R(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (E) => e.modelValueOnUpdate(E)),
      label: e.field.label,
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
      class: j(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: $,
      onFilter: y,
      onVirtualScroll: p
    }, {
      option: O((E) => [
        (v(), R(H(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: E.opt,
          itemProps: E.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Re = /* @__PURE__ */ T({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, u = r.formStyle, l = n.rulesBehaviour === "lazy", s = F([]), i = F(
      C()
    ), c = F(), m = F("__init");
    function C() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(p, g) {
      if (p === m.value)
        return;
      const _ = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = p;
      const E = e.formApi.form;
      i.value.isLoading = !0, _({
        resourceName: E.resourceName,
        resourceId: E.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: p,
        context: E.context
      }).then((I) => {
        g(() => {
          s.value = I.rows, i.value.lastPage = Math.ceil(
            I.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        s.value = [], i.value = C();
      });
    }
    function V() {
      ne(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (s.value = p.map(
          (g, _) => ({
            label: e.field.associationData.label[_] ?? "???",
            value: g,
            data: e.field.associationData.data[_]
          })
        ));
      });
    }
    function A() {
      return c.value ? c.value.validate() : !1;
    }
    function k() {
      return c.value ? c.value.hasError : !1;
    }
    function x() {
      c.value && c.value.resetValidation();
    }
    function $() {
      e.clear(), s.value = [];
    }
    return L(() => {
      V(), e.registerBehaviourCallbacks(A, k, x);
    }), (p, g) => (v(), R(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[0] || (g[0] = (_) => e.modelValueOnUpdate(_)),
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
      class: j(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: $,
      onFilter: y
    }, {
      option: O((_) => [
        (v(), R(H(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: _.opt,
          itemProps: _.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ae = /* @__PURE__ */ T({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", l = F();
    function s() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return L(() => {
      e.registerBehaviourCallbacks(s, i, c);
    }), (m, C) => (v(), R(a(me), {
      ref_key: "fieldRef",
      ref: l,
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
      class: j(e.field.cssClass),
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
}), Dt = /* @__PURE__ */ T({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", l = F();
    function s() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return L(() => {
      e.registerBehaviourCallbacks(s, i, c);
    }), (m, C) => (v(), R(a(me), {
      ref_key: "fieldRef",
      ref: l,
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
      class: j(e.field.cssClass),
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
class K {
  constructor(e, t, r, n, u, l, s, i, c) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = s, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...u,
      ...z.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...z.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? z.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? z.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? z.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? z.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? z.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...z.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: z.getGlobalFormStyle(),
      events: {},
      actionComponent: P(z.getGlobalActionComponent()),
      orphanErrorsComponent: P(z.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: P(z.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, u, l, s, i, c) {
    return new K(
      e,
      t,
      r,
      n,
      u,
      l,
      s,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = de.create(this.formApi);
    this.registerEventCallback(e);
    const t = de.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, l) => {
        const s = [];
        u.fields.forEach((y) => {
          const V = this.dynamicComponentRecord[`field-${y.field_name}-before`], A = K.getFieldComponentByFormFieldType(
            y.field_type
          ), k = this.dynamicComponentRecord[`field-${y.field_name}-after`], x = {
            associationDisplayComponent: P(
              this.associationDisplayComponent
            ),
            regularFieldType: K.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, $ = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: y.label,
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
            beforeComponent: V ? P(V) : void 0,
            mainComponent: P(A),
            afterComponent: k ? P(k) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: x
          };
          s.push($);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? l}-before`], c = this.sectionComponent, m = this.dynamicComponentRecord[`section-${u.name ?? l}-after`], C = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? l.toString()] ?? {},
          beforeComponent: i ? P(i) : void 0,
          mainComponent: P(c),
          afterComponent: m ? P(m) : void 0,
          fields: s
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
      actionComponent: P(this.actionComponent),
      orphanErrorsComponent: P(this.orphanErrorsComponent),
      wrapperResetComponent: P(this.wrapperResetComponent),
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
      string: Ae,
      text: Ae,
      number: Dt,
      date: vt,
      datetime: Ct,
      selectString: Vt,
      selectBelongsTo: De,
      selectHasMany: Re,
      selectHasAndBelongsToMany: Re,
      selectHasOne: De,
      checkbox: kt,
      object: xt
    }[e];
  }
}
function N(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Rt(o, e, t) {
  const r = t.form, n = (i, c, m) => i[c] ? m ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(i.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    D.formatDate(
      D.extractDate(i, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], s = [];
  switch (e) {
    case "date":
      l.push(Be(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Be(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(At());
        break;
      case "absence":
        l.push(Nt());
        break;
      case "acceptance":
        l.push(Et());
        break;
      case "inclusion":
        l.push(Te(c.including));
        break;
      case "exclusion":
        l.push(Bt(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        s.push("allowNull");
        break;
      case "allowBlank":
        s.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(qt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          wt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $t(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          zt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          It(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Pt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Ut(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Lt());
        break;
      case "numberNumericOnly":
        l.push(Gt());
        break;
      case "numberEvenOnly":
        l.push(Ht());
        break;
      case "numberOddOnly":
        l.push(Yt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Mt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          jt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Wt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Xt(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Kt(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Jt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Zt(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          en(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          tn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          nn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          on(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          rn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          an(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((i) => {
    switch (i) {
      case "allowBlank":
        return Tt(l);
      case "allowNull":
        return Ot(l);
    }
  }) : l;
}
function At() {
  return (o) => !!o || "Ce champ est requis";
}
function Te(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Bt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Te.toString()}`
  );
}
function Nt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Et() {
  return (o) => !!o || "Doit être accepté";
}
function Ot(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Tt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
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
function zt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Pt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Ut(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
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
function Yt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Mt(o) {
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
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
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
    const r = o(), n = D.extractDate(String(t), e), u = D.extractDate(r, e);
    return n <= u || `Inf. ou égal à ${r}`;
  };
}
function tn(o, e) {
  return (t) => {
    const r = o(), n = D.extractDate(String(t), e), u = D.extractDate(r, e);
    return n < u || `Inf. à ${r}`;
  };
}
function nn(o, e) {
  return (t) => {
    const r = o(), n = D.extractDate(String(t), e), u = D.extractDate(r, e);
    return n >= u || `Sup. ou égal à ${r}`;
  };
}
function on(o, e) {
  return (t) => {
    const r = o(), n = D.extractDate(String(t), e), u = D.extractDate(r, e);
    return n > u || `Sup. à ${r}`;
  };
}
function rn(o, e) {
  return (t) => {
    const r = o(), n = D.extractDate(String(t), e), u = D.extractDate(r, e);
    return n === u || `Égale à ${n}`;
  };
}
function an(o, e) {
  return (t) => {
    const r = o();
    return D.extractDate(String(t), e) !== D.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Be(o) {
  return (e) => e == null || e === "" ? !0 : ln(e, o) || `Date invalide. Format : ${o}`;
}
function ln(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = D.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : D.formatDate(t, e) === o;
}
const sn = {
  computeServerRules: Rt
}, un = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, cn = ["index"], dn = /* @__PURE__ */ T({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, u = () => {
    };
    const l = V(), s = F(), i = F([]);
    function c() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = m(s.value), N(t.field.events.onReset), ne(() => {
        ae();
      });
    }
    function m(f) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : D.formatDate(
            D.extractDate(String(f), b.formSettings.backendDateFormat),
            b.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : D.formatDate(
            D.extractDate(
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
          return f == null || f === "" ? null : D.formatDate(
            D.extractDate(String(f), b.formSettings.dateFormat),
            b.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : D.formatDate(
            D.extractDate(String(f), b.formSettings.datetimeFormat),
            b.formSettings.backendDatetimeFormat
          );
      }
      return f;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          s.value = "";
          break;
        case "checkbox":
          s.value = !1;
          break;
        case "date":
          s.value = null;
          break;
        case "datetime":
          s.value = null;
          break;
        case "number":
          s.value = null;
          break;
        case "selectString":
          s.value = void 0;
          break;
        case "text":
          s.value = "";
          break;
        case "object":
          s.value = {};
          break;
        case "selectBelongsTo":
          s.value = void 0;
          break;
        case "selectHasMany":
          s.value = void 0;
          break;
      }
      N(t.field.events.onClear);
    }
    function V() {
      return sn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(f) {
      s.value = f;
    }
    function k() {
      return a(s);
    }
    function x() {
      return C(a(s));
    }
    function $(f) {
      i.value = f;
    }
    function p() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !0);
    }
    function g() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !1);
    }
    function _(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.readonly = f);
    }
    function E(f) {
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
    function Y(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.suffix = f);
    }
    function pe(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.prefix = f);
    }
    function ge(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.label = f);
    }
    function oe() {
      const f = r();
      return N(t.field.events.onValidated), f;
    }
    function re() {
      return n();
    }
    function ae() {
      return u();
    }
    function he(f, b, te) {
      r = f, n = b, u = te;
    }
    const ee = {
      reset: c,
      clear: y,
      validate: oe,
      isValid: re,
      hide: p,
      unhide: g,
      resetValidation: ae,
      getValueDeserialized: x,
      getValueSerialized: k,
      setupBackendErrors: $,
      setReadonlyState: _,
      setHint: E,
      setCssClass: I,
      setSuffix: Y,
      setPrefix: pe,
      setLabel: ge,
      setValue: A,
      field: t.field
    };
    return e(ee), J(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid ? re() : null,
      (f) => {
        f && N(t.field.events.onIsValid);
      }
    ), L(() => {
      var b;
      c();
      const f = (b = Ee()) == null ? void 0 : b.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, b) => Ce((v(), w("div", null, [
      t.field.beforeComponent ? (v(), R(H(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ee
      }, null, 8, ["formApi"])) : G("", !0),
      (v(), R(H(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(l),
        reset: c,
        clear: y,
        getValueDeserialized: x,
        getValueSerialized: k,
        validate: oe,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), R(H(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ee
      }, null, 8, ["formApi"])) : G("", !0),
      i.value.length > 0 ? (v(), w("div", un, [
        (v(!0), w(se, null, ue(i.value, (te, ve) => (v(), w("div", {
          index: ve,
          class: "flex column"
        }, X(te), 9, cn))), 256))
      ])) : G("", !0)
    ], 512)), [
      [Se, t.field.hidden !== !0]
    ]);
  }
}), fn = { class: "flex column" }, mn = /* @__PURE__ */ T({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: l,
      clear: s,
      validate: m,
      isValid: C,
      hide: i,
      unhide: c,
      resetValidation: y,
      getFields: V,
      setReadonlyState: A,
      setCssClass: k,
      setIcon: x,
      setLabel: $,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((p) => {
        const g = p.metadata.field_name, _ = t.formApi.getFieldByName(g);
        _ && r.set(g, _);
      });
    }
    function l() {
      r.forEach((p) => {
        p.reset();
      }), N(t.section.events.onReset);
    }
    function s() {
      r.forEach((p) => {
        p.clear();
      }), N(t.section.events.onClear);
    }
    function i() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (r.forEach((g) => {
        g.hide();
      }), p.hidden = !0, N(t.section.events.onHide));
    }
    function c() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (r.forEach((g) => {
        g.unhide();
      }), p.hidden = !1, N(t.section.events.onUnhide));
    }
    function m() {
      let p = !0;
      return r.forEach((g) => {
        if (!g.validate()) {
          p = !1;
          return;
        }
      }), N(t.section.events.onValidated), p;
    }
    function C() {
      let p = !0;
      return r.forEach((g) => {
        if (!g.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function y() {
      r.forEach((p) => {
        p.resetValidation();
      });
    }
    function V() {
      return r;
    }
    function A(p) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.readonly = p);
    }
    function k(p) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.cssClass = p);
    }
    function x(p) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.icon = p);
    }
    function $(p) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.label = p);
    }
    return e(n), J(
      () => t.section.events.onIsValid ? C() : null,
      (p) => {
        p && N(t.section.events.onIsValid);
      }
    ), L(() => {
      var g;
      const p = (g = Ee()) == null ? void 0 : g.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ne(() => {
        u();
      });
    }), (p, g) => Ce((v(), w("div", fn, [
      t.section.beforeComponent ? (v(), R(H(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : G("", !0),
      (v(), R(H(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: O(() => [
          Ne(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), R(H(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : G("", !0)
    ], 512)), [
      [Se, t.section.hidden !== !0]
    ]);
  }
}), pn = { class: "flex column" }, yn = /* @__PURE__ */ T({
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
    let r = null, n = "", u = 0, l = 0;
    const s = Ke(), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), m = F(K.getEmptyFormBeforeInit()), C = F(!1), y = F(!1), V = F(!1), A = F(!1), k = F("create"), x = F({});
    async function $() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), m.value = K.getForm(
        t.resourceName,
        t.resourceId,
        g(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), u = m.value.sections.length, l = m.value.sections.map((d) => d.fields).flat().length, t.resourceId && (k.value = "edit");
    }
    async function p() {
      var B, U, ie;
      if (!E())
        return;
      A.value = !0, oe();
      const d = _(), h = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (h.success)
        x.value = {}, k.value === "create" && (k.value = "edit"), r && h.resource_data && (r.resource_data = h.resource_data), n = JSON.stringify(_()), m.value = K.getForm(
          t.resourceName,
          t.resourceId,
          g(),
          {
            form: h.form,
            resource_data: h.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          Q,
          t.eventManager
        ), N((U = m.value) == null ? void 0 : U.events.onSubmitSuccess);
      else {
        x.value = {};
        const le = [];
        [...i].forEach((M) => {
          const Ve = h.errors[M[0]];
          Ve && (M[1].setupBackendErrors(Ve), le.push(M[0]));
        }), Object.entries(h.errors).forEach((M) => {
          le.includes(M[0]) || (x.value[M[0]] = M[1]);
        }), N((B = m.value) == null ? void 0 : B.events.onSubmitUnsuccess);
      }
      N((ie = m.value) == null ? void 0 : ie.events.onSubmit), A.value = !1;
    }
    function g() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const h in s) {
        const B = s[h];
        if (B) {
          const U = T({
            inheritAttrs: !1,
            setup(ie, { attrs: le, slots: M }) {
              return () => B({
                ...ie,
                ...le,
                slots: M
              });
            }
          });
          switch (h) {
            case "sections":
              d.sectionComponent = U;
              break;
            case "actions":
              d.actionComponent = U;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = U;
              break;
            case "association-display":
              d.associationDisplayComponent = U;
              break;
            default:
              d.dynamicComponentRecord[h] = U;
              break;
          }
        }
      }
      return d;
    }
    function _() {
      const d = {};
      return [...i].forEach((h) => {
        d[h[0]] = h[1].getValueDeserialized();
      }), d;
    }
    function E() {
      var h;
      let d = !0;
      return i.forEach((B) => {
        if (!B.validate()) {
          d = !1;
          return;
        }
      }), N((h = m.value) == null ? void 0 : h.events.onValidated), d;
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
    function Y() {
      var d;
      i.forEach((h) => {
        h.reset();
      }), N((d = m.value) == null ? void 0 : d.events.onReset);
    }
    function pe() {
      var d;
      i.forEach((h) => {
        h.clear();
      }), N((d = m.value) == null ? void 0 : d.events.onClear);
    }
    function ge() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function oe() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function re(d) {
      if (r)
        return r.resource_data[d];
    }
    function ae(d) {
      return c.get(d);
    }
    function he(d) {
      return [...c.values()].at(d);
    }
    function ee() {
      return c;
    }
    function f(d) {
      return i.get(d);
    }
    function b() {
      return i;
    }
    function te() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ve() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((h) => {
        (t[h] === null || t[h] === void 0) && console.warn(`Missing props for <Submit64> -> ${h}`);
      });
    }
    function qe() {
      return a(k);
    }
    function we() {
      return n !== JSON.stringify(_());
    }
    function $e(d) {
      m.value && (m.value.context = d);
    }
    function ze(d) {
      m.value && (m.value.cssClass = d);
    }
    function Ie(d) {
      m.value && (m.value.readonly = d);
    }
    function Pe() {
      return V.value;
    }
    function Ue() {
      return m;
    }
    function Le(d) {
      var h;
      return (h = m.value) == null ? void 0 : h.sections.find((B) => B.name === d);
    }
    function Ge(d) {
      var h;
      return (h = m.value) == null ? void 0 : h.sections.map((B) => B.fields).flat().find((B) => B.metadata.field_name === d);
    }
    function Fe(d, h) {
      c.set(d, h), u === c.size && (C.value = !0);
    }
    function ke(d, h) {
      i.set(d, h), l === i.size && (y.value = !0);
    }
    const xe = {
      getFormRef: Ue,
      getSectionRef: Le,
      getFieldRef: Ge,
      registerSectionWrapperRef: Fe,
      registerFieldWrapperRef: ke
    }, He = new Proxy({}, {
      get(d, h) {
        var B;
        return (B = m.value) == null ? void 0 : B[h];
      }
    }), Q = {
      getMode: qe,
      getSectionByName: ae,
      getSectionByIndex: he,
      getSections: ee,
      getFieldByName: f,
      getFields: b,
      validate: E,
      isFormValid: I,
      reset: Y,
      clear: pe,
      resetValidation: ge,
      submit: p,
      valuesHasChanged: we,
      getInitialValueByFieldName: re,
      getAssociationDataCallback: te,
      setContext: $e,
      setCssClass: ze,
      setReadonlyState: Ie,
      isReady: Pe,
      form: He
    };
    return e(Q), J(
      () => C.value && y.value,
      (d) => {
        var h;
        d && !V.value && (N((h = m.value) == null ? void 0 : h.events.onReady), V.value = !0);
      }
    ), J(
      () => {
        var d;
        return (d = m.value) != null && d.events.onIsValid ? I() : null;
      },
      () => {
        var d;
        N((d = m.value) == null ? void 0 : d.events.onIsValid);
      }
    ), J(
      () => {
        var d;
        return (d = m.value) != null && d.events.onUpdate ? _() : null;
      },
      () => {
        var d;
        N((d = m.value) == null ? void 0 : d.events.onUpdate);
      }
    ), L(async () => {
      ve(), await $(), ne(() => {
        n = JSON.stringify(_());
      });
    }), (d, h) => Ce((v(), w("div", pn, [
      W("div", {
        class: j(m.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), w(se, null, ue(m.value.sections, (B) => (v(), R(mn, {
          key: B.name,
          section: B,
          context: t.context,
          formApi: Q,
          privateFormApi: xe,
          registerRef: Fe
        }, {
          default: O(() => [
            (v(!0), w(se, null, ue(B.fields, (U) => (v(), R(dn, {
              key: U.metadata.field_name,
              field: U,
              context: t.context,
              formApi: Q,
              privateFormApi: xe,
              registerRef: ke
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), R(H(m.value.orphanErrorsComponent), {
        orphanErrors: x.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (v(), R(H(m.value.actionComponent), {
        isLoadingSubmit: A.value,
        formApi: Q
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Se, V.value]
    ]);
  }
});
export {
  de as DynamicLogicBuilder,
  z as Submit64,
  yn as Submit64Form
};
