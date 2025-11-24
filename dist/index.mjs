var Me = Object.defineProperty;
var Ye = (o, e, t) => e in o ? Me(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => Ye(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as $, openBlock as v, createElementVNode as W, createVNode as w, createBlock as A, createCommentVNode as H, unref as r, mergeProps as ye, toDisplayString as X, renderSlot as Be, resolveComponent as je, normalizeProps as We, guardReactiveProps as Qe, withCtx as O, createTextVNode as Je, Fragment as se, renderList as ue, ref as F, onMounted as G, normalizeClass as j, watch as J, resolveDynamicComponent as M, nextTick as ne, markRaw as U, getCurrentInstance as Ee, withDirectives as Ce, vShow as Se, useSlots as Ke } from "vue";
import { QBtn as Z, QIcon as ce, QItem as Xe, QItemSection as Ze, QItemLabel as et, QInput as me, QPopupProxy as be, QDate as Oe, QTime as tt, QCheckbox as nt, QSelect as _e, date as R } from "quasar";
const ot = { class: "flex column" }, at = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, rt = /* @__PURE__ */ T({
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
    return (a, n) => (v(), $("div", ot, [
      W("div", at, [
        w(r(Z), ye(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (v(), A(r(Z), ye({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.clear ? (v(), A(r(Z), ye({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : H("", !0)
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
    return (t, a) => (v(), $("div", null, [
      W("div", it, [
        e.sectionApi.section.icon ? (v(), A(r(ce), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        W("div", lt, X(e.sectionApi.section.label), 1)
      ]),
      W("div", st, [
        Be(t.$slots, "default")
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
    return (t, a) => {
      const n = je("q-icon");
      return v(), A(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (u) => e.reset())
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
    return (t, a) => (v(), A(r(Xe), We(Qe(e.itemProps)), {
      default: O(() => [
        w(r(Ze), null, {
          default: O(() => [
            w(r(et), null, {
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
    return (t, a) => (v(), $("div", ft, [
      (v(!0), $(se, null, ue(e.orphanErrors, (n, u) => (v(), $("div", {
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
S(fe, "_instance", new fe());
let P = fe;
class de {
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
    return new de(e);
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", l = F(), s = F();
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
    return G(() => {
      e.registerBehaviourCallbacks(c, m, C);
    }), (y, D) => (v(), A(r(me), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[1] || (D[1] = (N) => e.modelValueOnUpdate(N)),
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
        w(r(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            w(r(be), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                w(r(Oe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: O(() => [
                    W("div", ht, [
                      w(r(Z), {
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", l = F(), s = F(), i = F();
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
    function D() {
      i.value && i.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(C, y, D);
    }), (N, k) => (v(), A(r(me), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[2] || (k[2] = (x) => e.modelValueOnUpdate(x)),
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
        w(r(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            w(r(be), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                w(r(Oe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (x) => e.modelValueOnUpdate(x)),
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: O(() => [
                    W("div", yt, [
                      w(r(Z), {
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
        w(r(ce), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            w(r(be), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                w(r(tt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[1] || (k[1] = (x) => e.modelValueOnUpdate(x)),
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: O(() => [
                    W("div", bt, [
                      w(r(Z), {
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
    ), G(() => {
      e.registerBehaviourCallbacks(u, l, s);
    }), (i, c) => (v(), $("div", St, [
      w(r(nt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => e.modelValueOnUpdate(m)),
        label: e.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: j([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), $("div", _t, X(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (v(), $("div", Ft, X(t.value), 1)) : H("", !0)
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
    const t = o.formApi.form, a = t.formSettings;
    return t.formStyle, a.rulesBehaviour, (n, u) => " TODO json edit ? ";
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
    const e = o, t = F([]), a = F([]), n = F(), u = e.formApi.form, l = u.formSettings, s = u.formStyle, i = l.rulesBehaviour === "lazy";
    function c(k, x) {
      if (k === "") {
        x(() => {
          a.value = [...t.value];
        });
        return;
      }
      x(() => {
        const I = k.toLowerCase();
        a.value = t.value.filter((g) => g.label.toLowerCase().includes(I));
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
    function D() {
      n.value && n.value.resetValidation();
    }
    function N() {
      e.clear(), a.value = [];
    }
    return G(() => {
      m(), e.registerBehaviourCallbacks(C, y, D);
    }), (k, x) => (v(), A(r(_e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[0] || (x[0] = (I) => e.modelValueOnUpdate(I)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(s).fieldOutlined,
      filled: r(s).fieldFilled,
      standout: r(s).fieldStandout,
      borderless: r(s).fieldBorderless,
      rounded: r(s).fieldRounded,
      square: r(s).fieldSquare,
      dense: r(s).fieldDense,
      hideBottomSpace: r(s).fieldHideBottomSpace,
      color: r(s).fieldColor,
      bgColor: r(s).fieldBgColor,
      class: j(e.field.cssClass),
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
      onClear: N,
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, l = n.rulesBehaviour === "lazy", s = F([]), i = F(
      C()
    ), c = F(), m = F("");
    function C() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(p, V) {
      if (p === m.value)
        return;
      const _ = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = p;
      const q = e.formApi.form;
      i.value.isLoading = !0, _({
        resourceName: q.resourceName,
        resourceId: q.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: p,
        context: q.context
      }).then((z) => {
        V(() => {
          s.value = z.rows, i.value.lastPage = Math.ceil(
            z.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        s.value = [], i.value = C();
      });
    }
    function D() {
      ne(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (s.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: p,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function N() {
      return c.value ? c.value.validate() : !1;
    }
    function k() {
      return c.value ? c.value.hasError : !1;
    }
    function x() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), s.value = [];
    }
    function g(p) {
      const V = s.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && p.to === V) {
        const _ = e.formApi.form, q = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, q({
          resourceName: _.resourceName,
          resourceId: _.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: m.value,
          context: _.context
        }).then((z) => {
          s.value = s.value.concat(
            z.rows
          ), i.value.lastPage = Math.ceil(
            z.row_count / i.value.limit
          ), i.value.nextPage++, i.value.isLoading = !1, p.ref.refresh();
        });
      }
    }
    return G(() => {
      D(), e.registerBehaviourCallbacks(N, k, x);
    }), (p, V) => (v(), A(r(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (_) => e.modelValueOnUpdate(_)),
      type: e.field.componentOptions.regularFieldType,
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
      onClear: I,
      onFilter: y,
      onVirtualScroll: g
    }, {
      option: O((_) => [
        (v(), A(M(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: _.opt,
          itemProps: _.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, l = n.rulesBehaviour === "lazy", s = F([]), i = F(
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
    function y(p, V) {
      if (console.log("filter"), p === m.value)
        return;
      const _ = e.formApi.getAssociationDataCallback();
      i.value = C(), m.value = p;
      const q = e.formApi.form;
      i.value.isLoading = !0, _({
        resourceName: q.resourceName,
        resourceId: q.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: p,
        context: q.context
      }).then((z) => {
        V(() => {
          s.value = z.rows, i.value.lastPage = Math.ceil(
            z.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        s.value = [], i.value = C();
      });
    }
    function D() {
      ne(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (s.value = p.map(
          (V, _) => ({
            label: e.field.associationData.label[_] ?? "???",
            value: V,
            data: e.field.associationData.data[_]
          })
        ));
      });
    }
    function N() {
      return c.value ? c.value.validate() : !1;
    }
    function k() {
      return c.value ? c.value.hasError : !1;
    }
    function x() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), s.value = [];
    }
    function g(p) {
      console.log("scroll");
      const V = s.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && p.to === V) {
        const _ = e.formApi.form, q = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, q({
          resourceName: _.resourceName,
          resourceId: _.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: m.value,
          context: _.context
        }).then((z) => {
          s.value = s.value.concat(
            z.rows
          ), i.value.lastPage = Math.ceil(
            z.row_count / i.value.limit
          ), i.value.nextPage++, i.value.isLoading = !1, p.ref.refresh();
        });
      }
    }
    return G(() => {
      D(), e.registerBehaviourCallbacks(N, k, x);
    }), (p, V) => (v(), A(r(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (_) => e.modelValueOnUpdate(_)),
      type: e.field.componentOptions.regularFieldType,
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
      onClear: I,
      onFilter: y,
      onVirtualScroll: g
    }, {
      option: O((_) => [
        (v(), A(M(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: _.opt,
          itemProps: _.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", l = F();
    function s() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(s, i, c);
    }), (m, C) => (v(), A(r(me), {
      ref_key: "fieldRef",
      ref: l,
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", l = F();
    function s() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return G(() => {
      e.registerBehaviourCallbacks(s, i, c);
    }), (m, C) => (v(), A(r(me), {
      ref_key: "fieldRef",
      ref: l,
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
  constructor(e, t, a, n, u, l, s, i, c) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = s, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...u,
      ...P.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
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
  static getForm(e, t, a, n, u, l, s, i, c) {
    return new K(
      e,
      t,
      a,
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
    const t = de.getEventsObjectFromInstance(e), a = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, l) => {
        const s = [];
        u.fields.forEach((y) => {
          const D = this.dynamicComponentRecord[`field-${y.field_name}-before`], N = K.getFieldComponentByFormFieldType(
            y.field_type
          ), k = this.dynamicComponentRecord[`field-${y.field_name}-after`], x = {
            associationDisplayComponent: U(
              this.associationDisplayComponent
            ),
            regularFieldType: K.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, I = {
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
            beforeComponent: D ? U(D) : void 0,
            mainComponent: U(N),
            afterComponent: k ? U(k) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: x
          };
          s.push(I);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? l}-before`], c = this.sectionComponent, m = this.dynamicComponentRecord[`section-${u.name ?? l}-after`], C = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? l.toString()] ?? {},
          beforeComponent: i ? U(i) : void 0,
          mainComponent: U(c),
          afterComponent: m ? U(m) : void 0,
          fields: s
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
function E(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Rt(o, e, t) {
  const a = t.form, n = (i, c, m) => i[c] ? m ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(i.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    R.formatDate(
      R.extractDate(i, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), l = [], s = [];
  switch (e) {
    case "date":
      l.push(Ne(a.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Ne(a.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(At());
        break;
      case "absence":
        l.push(Bt());
        break;
      case "acceptance":
        l.push(Et());
        break;
      case "inclusion":
        l.push(Te(c.including));
        break;
      case "exclusion":
        l.push(Nt(c.excluding));
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
          It(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          zt(
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
        l.push(Mt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Yt(
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
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          tn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          nn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          on(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          an(
            n(c, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          rn(
            n(c, "other_than", !0),
            a.formSettings.dateFormat
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
function Nt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Te.toString()}`
  );
}
function Bt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Et() {
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
function Ne(o) {
  return (e) => e == null || e === "" ? !0 : ln(e, o) || `Date invalide. Format : ${o}`;
}
function ln(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = R.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : R.formatDate(t, e) === o;
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
    let a = () => !0, n = () => !0, u = () => {
    };
    const l = D(), s = F(), i = F([]);
    function c() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = m(s.value), E(t.field.events.onReset), ne(() => {
        re();
      });
    }
    function m(f) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : R.formatDate(
            R.extractDate(String(f), b.formSettings.backendDateFormat),
            b.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : R.formatDate(
            R.extractDate(
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
          return f == null || f === "" ? null : R.formatDate(
            R.extractDate(String(f), b.formSettings.dateFormat),
            b.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : R.formatDate(
            R.extractDate(String(f), b.formSettings.datetimeFormat),
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
      E(t.field.events.onClear);
    }
    function D() {
      return sn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function N(f) {
      s.value = f;
    }
    function k() {
      return r(s);
    }
    function x() {
      return C(r(s));
    }
    function I(f) {
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
    function V(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.readonly = f);
    }
    function _(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hint = f);
    }
    function q(f) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.cssClass = f);
    }
    function z(f) {
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
      const f = a();
      return E(t.field.events.onValidated), f;
    }
    function ae() {
      return n();
    }
    function re() {
      return u();
    }
    function he(f, b, te) {
      a = f, n = b, u = te;
    }
    const ee = {
      reset: c,
      clear: y,
      validate: oe,
      isValid: ae,
      hide: g,
      unhide: p,
      resetValidation: re,
      getValueDeserialized: x,
      getValueSerialized: k,
      setupBackendErrors: I,
      setReadonlyState: V,
      setHint: _,
      setCssClass: q,
      setSuffix: z,
      setPrefix: pe,
      setLabel: ge,
      setValue: N,
      field: t.field
    };
    return e(ee), J(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        E(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid ? ae() : null,
      (f) => {
        f && E(t.field.events.onIsValid);
      }
    ), G(() => {
      var b;
      c();
      const f = (b = Ee()) == null ? void 0 : b.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, b) => Ce((v(), $("div", null, [
      t.field.beforeComponent ? (v(), A(M(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ee
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(M(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        rules: r(l),
        reset: c,
        clear: y,
        getValueDeserialized: x,
        getValueSerialized: k,
        validate: oe,
        modelValueOnUpdate: N,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), A(M(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ee
      }, null, 8, ["formApi"])) : H("", !0),
      i.value.length > 0 ? (v(), $("div", un, [
        (v(!0), $(se, null, ue(i.value, (te, ve) => (v(), $("div", {
          index: ve,
          class: "flex column"
        }, X(te), 9, cn))), 256))
      ])) : H("", !0)
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
    const t = o, a = /* @__PURE__ */ new Map(), n = {
      reset: l,
      clear: s,
      validate: m,
      isValid: C,
      hide: i,
      unhide: c,
      resetValidation: y,
      getFields: D,
      setReadonlyState: N,
      setCssClass: k,
      setIcon: x,
      setLabel: I,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((g) => {
        const p = g.metadata.field_name, V = t.formApi.getFieldByName(p);
        V && a.set(p, V);
      });
    }
    function l() {
      a.forEach((g) => {
        g.reset();
      }), E(t.section.events.onReset);
    }
    function s() {
      a.forEach((g) => {
        g.clear();
      }), E(t.section.events.onClear);
    }
    function i() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (a.forEach((p) => {
        p.hide();
      }), g.hidden = !0, E(t.section.events.onHide));
    }
    function c() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (a.forEach((p) => {
        p.unhide();
      }), g.hidden = !1, E(t.section.events.onUnhide));
    }
    function m() {
      let g = !0;
      return a.forEach((p) => {
        if (!p.validate()) {
          g = !1;
          return;
        }
      }), E(t.section.events.onValidated), g;
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
    function D() {
      return a;
    }
    function N(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.readonly = g);
    }
    function k(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.cssClass = g);
    }
    function x(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.icon = g);
    }
    function I(g) {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (p.label = g);
    }
    return e(n), J(
      () => t.section.events.onIsValid ? C() : null,
      (g) => {
        g && E(t.section.events.onIsValid);
      }
    ), G(() => {
      var p;
      const g = (p = Ee()) == null ? void 0 : p.exposed;
      g && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        g
      ), ne(() => {
        u();
      });
    }), (g, p) => Ce((v(), $("div", fn, [
      t.section.beforeComponent ? (v(), A(M(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(M(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: O(() => [
          Be(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), A(M(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : H("", !0)
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
    let a = null, n = "", u = 0, l = 0;
    const s = Ke(), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), m = F(K.getEmptyFormBeforeInit()), C = F(!1), y = F(!1), D = F(!1), N = F(!1), k = F("create"), x = F({});
    async function I() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), m.value = K.getForm(
        t.resourceName,
        t.resourceId,
        p(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), u = m.value.sections.length, l = m.value.sections.map((d) => d.fields).flat().length, t.resourceId && (k.value = "edit");
    }
    async function g() {
      var B, L, ie;
      if (!_())
        return;
      N.value = !0, oe();
      const d = V(), h = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (h.success)
        x.value = {}, k.value === "create" && (k.value = "edit"), a && h.resource_data && (a.resource_data = h.resource_data), n = JSON.stringify(V()), m.value = K.getForm(
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
          Q,
          t.eventManager
        ), E((L = m.value) == null ? void 0 : L.events.onSubmitSuccess);
      else {
        x.value = {};
        const le = [];
        [...i].forEach((Y) => {
          const Ve = h.errors[Y[0]];
          Ve && (Y[1].setupBackendErrors(Ve), le.push(Y[0]));
        }), Object.entries(h.errors).forEach((Y) => {
          le.includes(Y[0]) || (x.value[Y[0]] = Y[1]);
        }), E((B = m.value) == null ? void 0 : B.events.onSubmitUnsuccess);
      }
      E((ie = m.value) == null ? void 0 : ie.events.onSubmit), N.value = !1;
    }
    function p() {
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
          const L = T({
            inheritAttrs: !1,
            setup(ie, { attrs: le, slots: Y }) {
              return () => B({
                ...ie,
                ...le,
                slots: Y
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
    function V() {
      const d = {};
      return [...i].forEach((h) => {
        d[h[0]] = h[1].getValueDeserialized();
      }), d;
    }
    function _() {
      var h;
      let d = !0;
      return i.forEach((B) => {
        if (!B.validate()) {
          d = !1;
          return;
        }
      }), E((h = m.value) == null ? void 0 : h.events.onValidated), d;
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
    function z() {
      var d;
      i.forEach((h) => {
        h.reset();
      }), E((d = m.value) == null ? void 0 : d.events.onReset);
    }
    function pe() {
      var d;
      i.forEach((h) => {
        h.clear();
      }), E((d = m.value) == null ? void 0 : d.events.onClear);
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
    function ae(d) {
      if (a)
        return a.resource_data[d];
    }
    function re(d) {
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
      return r(k);
    }
    function we() {
      return n !== JSON.stringify(V());
    }
    function $e(d) {
      m.value && (m.value.context = d);
    }
    function Ie(d) {
      m.value && (m.value.cssClass = d);
    }
    function ze(d) {
      m.value && (m.value.readonly = d);
    }
    function Pe() {
      return D.value;
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
      getSectionByName: re,
      getSectionByIndex: he,
      getSections: ee,
      getFieldByName: f,
      getFields: b,
      validate: _,
      isFormValid: q,
      reset: z,
      clear: pe,
      resetValidation: ge,
      submit: g,
      valuesHasChanged: we,
      getInitialValueByFieldName: ae,
      getAssociationDataCallback: te,
      setContext: $e,
      setCssClass: Ie,
      setReadonlyState: ze,
      isReady: Pe,
      form: He
    };
    return e(Q), J(
      () => C.value && y.value,
      (d) => {
        var h;
        d && !D.value && (E((h = m.value) == null ? void 0 : h.events.onReady), D.value = !0);
      }
    ), J(
      () => {
        var d;
        return (d = m.value) != null && d.events.onIsValid ? q() : null;
      },
      () => {
        var d;
        E((d = m.value) == null ? void 0 : d.events.onIsValid);
      }
    ), J(
      () => {
        var d;
        return (d = m.value) != null && d.events.onUpdate ? V() : null;
      },
      () => {
        var d;
        E((d = m.value) == null ? void 0 : d.events.onUpdate);
      }
    ), G(async () => {
      ve(), await I(), ne(() => {
        n = JSON.stringify(V());
      });
    }), (d, h) => Ce((v(), $("div", pn, [
      W("div", {
        class: j(m.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), $(se, null, ue(m.value.sections, (B) => (v(), A(mn, {
          key: B.name,
          section: B,
          context: t.context,
          formApi: Q,
          privateFormApi: xe,
          registerRef: Fe
        }, {
          default: O(() => [
            (v(!0), $(se, null, ue(B.fields, (L) => (v(), A(dn, {
              key: L.metadata.field_name,
              field: L,
              context: t.context,
              formApi: Q,
              privateFormApi: xe,
              registerRef: ke
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), A(M(m.value.orphanErrorsComponent), {
        orphanErrors: x.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (v(), A(M(m.value.actionComponent), {
        isLoadingSubmit: N.value,
        formApi: Q
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Se, D.value]
    ]);
  }
});
export {
  de as DynamicLogicBuilder,
  P as Submit64,
  yn as Submit64Form
};
