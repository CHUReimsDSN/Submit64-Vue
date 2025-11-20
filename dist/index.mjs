var Ee = Object.defineProperty;
var Be = (r, e, t) => e in r ? Ee(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v = (r, e, t) => Be(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as N, createElementBlock as T, openBlock as y, createElementVNode as j, createVNode as O, createBlock as k, createCommentVNode as $, unref as a, mergeProps as me, toDisplayString as W, renderSlot as Oe, resolveComponent as Te, normalizeProps as we, guardReactiveProps as qe, withCtx as E, createTextVNode as $e, Fragment as ne, renderList as oe, ref as _, onMounted as z, normalizeClass as I, watch as J, resolveDynamicComponent as U, nextTick as ce, markRaw as H, getCurrentInstance as ve, useSlots as ze } from "vue";
import { QBtn as M, QIcon as re, QItem as Ie, QItemSection as Ue, QItemLabel as Pe, QInput as ue, QPopupProxy as pe, QDate as Fe, QTime as Le, QCheckbox as He, QSelect as he, date as S } from "quasar";
const Ge = { class: "flex column" }, je = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Qe = /* @__PURE__ */ N({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(r) {
    const e = r;
    function t() {
      const n = e.formApi.getForm().formStyle;
      return {
        outline: n.fieldOutlined,
        rounded: n.fieldRounded,
        square: n.fieldSquare,
        dense: n.fieldDense,
        color: n.fieldColor,
        noCaps: !0
      };
    }
    return (n, o) => (y(), T("div", Ge, [
      j("div", je, [
        O(a(M), me(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (y(), k(a(M), me({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : $("", !0),
        e.clear ? (y(), k(a(M), me({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : $("", !0)
      ])
    ]));
  }
}), We = { class: "flex row items-center" }, Ye = { class: "text-body1 text-weight-medium" }, Me = { class: "flex column q-gutter-md" }, Je = /* @__PURE__ */ N({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(r) {
    const e = r, t = e.formApi.getForm().formStyle;
    return (n, o) => (y(), T("div", null, [
      j("div", We, [
        e.sectionApi.getDataRef().icon ? (y(), k(a(re), {
          key: 0,
          name: e.sectionApi.getDataRef().icon,
          size: "sm",
          color: a(t).fieldColor
        }, null, 8, ["name", "color"])) : $("", !0),
        j("div", Ye, W(e.sectionApi.getDataRef().label), 1)
      ]),
      j("div", Me, [
        Oe(n.$slots, "default")
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ N({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => {
      const o = Te("q-icon");
      return y(), k(o, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (s) => e.reset())
      });
    };
  }
}), Xe = /* @__PURE__ */ N({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (y(), k(a(Ie), we(qe(e.itemProps)), {
      default: E(() => [
        O(a(Ue), null, {
          default: E(() => [
            O(a(Pe), null, {
              default: E(() => [
                $e(W(e.entry.label), 1)
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
}), Ze = { class: "flex column" }, et = /* @__PURE__ */ N({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (y(), T("div", Ze, [
      (y(!0), T(ne, null, oe(e.orphanErrors, (o, s) => (y(), T("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, W(s) + " : " + W(o.join(",")), 1))), 128))
    ]));
  }
}), le = class le {
  constructor() {
    v(this, "_formSettings");
    v(this, "_formStyle");
    v(this, "_actionComponent");
    v(this, "_orphanErrorsComponent");
    v(this, "_sectionComponent");
    v(this, "_wrapperResetComponent");
    v(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Qe, this._orphanErrorsComponent = et, this._sectionComponent = Je, this._wrapperResetComponent = Ke, this._associationDisplayComponent = Xe;
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
v(le, "_instance", new le());
let G = le;
const tt = { class: "row items-center justify-end" }, nt = /* @__PURE__ */ N({
  __name: "DateField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _(), l = _();
    function u() {
      i.value && i.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function C() {
      return l.value ? l.value.hasError : !1;
    }
    function p() {
      l.value && l.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(c, C, p);
    }), (b, x) => (y(), k(a(ue), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[1] || (x[1] = (D) => e.modelValueOnUpdate(D)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: I(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: E(() => [
        O(a(re), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: E(() => [
            O(a(pe), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: E(() => [
                O(a(Fe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[0] || (x[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: E(() => [
                    j("div", tt, [
                      O(a(M), {
                        onClick: u,
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
}), ot = { class: "row items-center justify-end" }, rt = { class: "row items-center justify-end" }, at = /* @__PURE__ */ N({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _(), l = _(), u = _();
    function c() {
      i.value && i.value.hide();
    }
    function C() {
      l.value && l.value.hide();
    }
    function p() {
      return u.value ? u.value.validate() : !1;
    }
    function b() {
      return u.value ? u.value.hasError : !1;
    }
    function x() {
      u.value && u.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(p, b, x);
    }), (D, f) => (y(), k(a(ue), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[2] || (f[2] = (m) => e.modelValueOnUpdate(m)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: I(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: E(() => [
        O(a(re), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: E(() => [
            O(a(pe), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: E(() => [
                O(a(Fe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[0] || (f[0] = (m) => e.modelValueOnUpdate(m)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: E(() => [
                    j("div", ot, [
                      O(a(M), {
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
        O(a(re), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: E(() => [
            O(a(pe), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: E(() => [
                O(a(Le), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[1] || (f[1] = (m) => e.modelValueOnUpdate(m)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: E(() => [
                    j("div", rt, [
                      O(a(M), {
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
}), it = { class: "flex column" }, st = {
  key: 0,
  class: "q-field__bottom"
}, lt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, ct = /* @__PURE__ */ N({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = _(!0), o = e.formApi.getForm().formStyle;
    function s() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return J(
      () => e.modelValue,
      (u) => {
        for (const c of e.rules)
          if (t.value = c(u), t.value !== !0)
            break;
      }
    ), z(() => {
      e.registerBehaviourCallbacks(s, i, l);
    }), (u, c) => (y(), T("div", it, [
      O(a(He), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (C) => e.modelValueOnUpdate(C)),
        label: e.field.label,
        dense: a(o).fieldDense,
        color: a(o).fieldColor,
        "aria-readonly": e.field.readonly,
        class: I([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (y(), T("div", st, W(e.field.hint), 1)) : $("", !0),
      t.value !== !0 ? (y(), T("div", lt, W(t.value), 1)) : $("", !0)
    ]));
  }
}), ut = /* @__PURE__ */ N({
  __name: "ObjectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const t = r.formApi.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyle, n.rulesBehaviour, (o, s) => " TODO json edit ? ";
  }
}), dt = /* @__PURE__ */ N({
  __name: "SelectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = _([]), n = _([]), o = _(), s = e.formApi.getForm(), i = s.formSettings, l = s.formStyle, u = i.rulesBehaviour === "lazy";
    function c(f, m) {
      if (f === "") {
        m(() => {
          n.value = [...t.value];
        });
        return;
      }
      m(() => {
        const F = f.toLowerCase();
        n.value = t.value.filter((V) => V.label.toLowerCase().includes(F));
      });
    }
    function C() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), n.value = e.field.staticSelectOptions ?? [];
    }
    function p() {
      return o.value ? o.value.validate() : !1;
    }
    function b() {
      return o.value ? o.value.hasError : !1;
    }
    function x() {
      o.value && o.value.resetValidation();
    }
    function D() {
      e.clear(), n.value = [];
    }
    return z(() => {
      C(), e.registerBehaviourCallbacks(p, b, x);
    }), (f, m) => (y(), k(a(he), {
      ref_key: "fieldRef",
      ref: o,
      "model-value": e.modelValue,
      "onUpdate:modelValue": m[0] || (m[0] = (F) => e.modelValueOnUpdate(F)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(l).fieldOutlined,
      filled: a(l).fieldFilled,
      standout: a(l).fieldStandout,
      borderless: a(l).fieldBorderless,
      rounded: a(l).fieldRounded,
      square: a(l).fieldSquare,
      dense: a(l).fieldDense,
      hideBottomSpace: a(l).fieldHideBottomSpace,
      color: a(l).fieldColor,
      bgColor: a(l).fieldBgColor,
      class: I(e.field.cssClass),
      "lazy-rules": u,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: D,
      onFilter: c
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function ae() {
  return 20;
}
function Ce(r) {
  return Object.keys(r).forEach((e) => {
    const t = r[e];
    t && typeof t == "object" && Ce(t);
  }), Object.freeze(r);
}
function R(r) {
  r == null || r.forEach((e) => {
    e();
  });
}
const ft = /* @__PURE__ */ N({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi.getForm(), o = n.formSettings, s = n.formStyle, i = o.rulesBehaviour === "lazy", l = _([]), u = _({
      limit: ae(),
      offset: 0
    }), c = _();
    function C(m, F) {
      const V = e.privateFormApi.getAssociationDataCallback();
      m === "" && (u.value = {
        limit: ae(),
        offset: 0
      }), F(() => {
        const w = e.formApi.getForm();
        V({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: u.value.offset,
          labelFilter: m,
          context: w.context
        }).then((P) => {
          l.value = P.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function p() {
      ce(() => {
        const m = e.getValueSerialized();
        !m || !e.field.associationData || (l.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: m,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function b() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function f() {
      e.clear(), l.value = [];
    }
    return z(() => {
      p(), e.registerBehaviourCallbacks(b, x, D);
    }), (m, F) => (y(), k(a(he), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (V) => e.modelValueOnUpdate(V)),
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
      class: I(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: f,
      onFilter: C
    }, {
      option: E((V) => [
        (y(), k(U(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: V.opt,
          itemProps: V.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), mt = /* @__PURE__ */ N({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi.getForm(), o = n.formSettings, s = n.formStyle, i = o.rulesBehaviour === "lazy", l = _([]), u = _({
      limit: ae(),
      offset: 0
    }), c = _();
    function C(m, F) {
      const V = e.privateFormApi.getAssociationDataCallback();
      m === "" && (u.value = {
        limit: ae(),
        offset: 0
      }), F(() => {
        const w = e.formApi.getForm();
        V({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: u.value.offset,
          labelFilter: m,
          context: w.context
        }).then((P) => {
          l.value = P.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function p() {
      ce(() => {
        const m = e.getValueSerialized();
        !m || !e.field.associationData || (l.value = m.map(
          (F, V) => ({
            label: e.field.associationData.label[V] ?? "???",
            value: F,
            data: e.field.associationData.data[V]
          })
        ));
      });
    }
    function b() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function f() {
      e.clear(), l.value = [];
    }
    return z(() => {
      p(), e.registerBehaviourCallbacks(b, x, D);
    }), (m, F) => (y(), k(a(he), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (V) => e.modelValueOnUpdate(V)),
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
      class: I(e.field.cssClass),
      "lazy-rules": i,
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
      onClear: f,
      onFilter: C
    }, {
      option: E((V) => [
        (y(), k(U(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: V.opt,
          itemProps: V.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ye = /* @__PURE__ */ N({
  __name: "StringField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    function u() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, u, c);
    }), (C, p) => (y(), k(a(ue), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (b) => e.modelValueOnUpdate(b)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: I(e.field.cssClass),
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
}), pt = /* @__PURE__ */ N({
  __name: "NumberField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    privateFormApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(r) {
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    function u() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, u, c);
    }), (C, p) => (y(), k(a(ue), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (b) => e.modelValueOnUpdate(b)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: I(e.field.cssClass),
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
class ie {
  constructor(e) {
    v(this, "fullFormApi");
    v(this, "events", []);
    this.fullFormApi = e;
  }
  when(e, t) {
    const n = new ht(this, this.fullFormApi), o = e, s = t, i = new gt(o, s);
    return this.events.push(i), n;
  }
  static create(e) {
    return new ie(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((n) => {
      const o = n.getTarget();
      switch (o.target) {
        case "field":
          t.fields[o.target] || (t.fields[o.target] = {}), t.fields[o.target][o.key] || (t.fields[o.target][o.key] = []), t.fields[o.target][o.key].push(n.getActionCallback());
          break;
        case "section":
          t.sections[o.target] || (t.sections[o.target] = {}), t.sections[o.target][o.key] || (t.sections[o.target][o.key] = []), t.sections[o.target][o.key].push(n.getActionCallback());
          break;
        case "form":
          t.form[o.key] || (t.form[o.key] = []), t.form[o.key].push(
            n.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class ht {
  constructor(e, t) {
    v(this, "logicBuilder");
    v(this, "fullFormApi");
    this.logicBuilder = e, this.fullFormApi = t;
  }
  then(e, t) {
    if (typeof e == "function")
      new se(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        e
      );
    else {
      const n = e, o = t;
      new se(this.fullFormApi, n, o);
    }
    return new ge(this.fullFormApi);
  }
}
class ge {
  constructor(e) {
    v(this, "fullFormApi");
    this.fullFormApi = e;
  }
  then(e, t) {
    if (typeof e == "function")
      new se(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        e
      );
    else {
      const n = e, o = t;
      new se(this.fullFormApi, n, o);
    }
    return new ge(this.fullFormApi);
  }
}
class gt {
  constructor(e, t) {
    v(this, "type");
    v(this, "data");
    v(this, "actions", []);
    this.type = e, this.data = t;
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
      case "Field confirm statement":
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
    const e = this.actions.map((t) => t.generateEvent());
    return () => {
      e.forEach((t) => {
        t();
      });
    };
  }
}
class se {
  constructor(e, t, n, o) {
    v(this, "fullFormApi");
    v(this, "type");
    v(this, "data");
    v(this, "customCallback");
    v(this, "cyclicActionCalls", /* @__PURE__ */ new Set());
    this.fullFormApi = e, this.type = t, this.data = n, this.customCallback = o;
  }
  generateEvent() {
    const e = this.getEventCallback();
    return () => {
      this.cyclicActionCalls.has(this.type) || (this.cyclicActionCalls.add(this.type), e(), this.cyclicActionCalls.clear());
    };
  }
  getEventCallback() {
    if (this.customCallback)
      return () => {
        var e;
        (e = this.customCallback) == null || e.call(this, this.fullFormApi);
      };
    switch (this.type) {
      case "Set field label":
        return this.setFieldLabel;
      case "Set field prefix":
        return this.setFieldPrefix;
      case "Set field suffix":
        return this.setFieldSuffix;
      case "Set field css class":
        return this.setFieldCssClass;
      case "Set field hint":
        return this.setFieldHint;
      case "Set field readonly state":
        return this.setFieldReadonlyState;
      case "Hide field":
        return this.hideField;
      case "Unhide field":
        return this.unhideField;
      case "Clear field":
        return this.clearField;
      case "Reset field":
        return this.resetField;
      case "Validate field":
        return this.validateField;
      case "Set section label":
        return this.setSectionLabel;
      case "Set section icon":
        return this.setSectionIcon;
      case "Set section css class":
        return this.setSectionCssClass;
      case "Set section readonly state":
        return this.setSectionReadonlyState;
      case "Hide section":
        return this.hideSection;
      case "Unhide section":
        return this.unHideSection;
      case "Clear section":
        return this.clearSection;
      case "Reset section":
        return this.resetSection;
      case "Validate section":
        return this.validateSection;
      case "Set form readonly state":
        return this.setFormReadonlyState;
      case "Set form css class":
        return this.setFormCssClass;
      case "Set form context":
        return this.setFormContext;
      case "Submit form":
        return this.submitForm;
      case "Clear form":
        return this.clearForm;
      case "Reset form":
        return this.resetForm;
      case "Validate form":
        return this.validateForm;
      default:
        return console.warn(
          `Submit64 -> unhandled builder action callback generation : ${this.type}`
        ), () => {
        };
    }
  }
  setFieldLabel() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.label = e.newLabel);
  }
  setFieldPrefix() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.prefix = e.newPrefix);
  }
  setFieldSuffix() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.suffix = e.newSuffix);
  }
  setFieldCssClass() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.cssClass = e.newCssClass);
  }
  setFieldHint() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.hint = e.newHint);
  }
  setFieldReadonlyState() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getField(e.fieldName)) == null ? void 0 : n.getDataRef();
    t && (t.readonly = e.newState);
  }
  hideField() {
    const e = this.data, t = this.fullFormApi.getField(e.fieldName);
    t && t.hide();
  }
  unhideField() {
    const e = this.data, t = this.fullFormApi.getField(e.fieldName);
    t && t.unhide();
  }
  clearField() {
    const e = this.data, t = this.fullFormApi.getField(e.fieldName);
    t && t.clear();
  }
  resetField() {
    const e = this.data, t = this.fullFormApi.getField(e.fieldName);
    t && t.reset();
  }
  validateField() {
    const e = this.data, t = this.fullFormApi.getField(e.fieldName);
    t && t.validate();
  }
  setSectionLabel() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getSection(e.sectionName)) == null ? void 0 : n.getDataRef();
    t && (t.label = e.newLabel);
  }
  setSectionIcon() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getSection(e.sectionName)) == null ? void 0 : n.getDataRef();
    t && (t.icon = e.newIcon);
  }
  setSectionCssClass() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getSection(e.sectionName)) == null ? void 0 : n.getDataRef();
    t && (t.cssClass = e.newCssClass);
  }
  setSectionReadonlyState() {
    var n;
    const e = this.data, t = (n = this.fullFormApi.getSection(e.sectionName)) == null ? void 0 : n.getDataRef();
    t && (t.readonly = e.newState);
  }
  hideSection() {
    const e = this.data, t = this.fullFormApi.getSection(e.sectionName);
    t && t.hide();
  }
  unHideSection() {
    const e = this.data, t = this.fullFormApi.getSection(e.sectionName);
    t && t.unhide();
  }
  clearSection() {
    const e = this.data, t = this.fullFormApi.getSection(e.sectionName);
    t && t.clear();
  }
  resetSection() {
    const e = this.data, t = this.fullFormApi.getSection(e.sectionName);
    t && t.reset();
  }
  validateSection() {
    const e = this.data, t = this.fullFormApi.getSection(e.sectionName);
    t && t.validate();
  }
  setFormReadonlyState() {
    const e = this.data, t = this.fullFormApi.getFormRef().value;
    t && (t.readonly = e.newState);
  }
  setFormCssClass() {
    const e = this.data, t = this.fullFormApi.getFormRef().value;
    t && (t.cssClass = e.newCssClass);
  }
  setFormContext() {
    const e = this.data, t = this.fullFormApi.getFormRef().value;
    t && (t.context = e.newContext);
  }
  submitForm() {
    this.fullFormApi.submitForm();
  }
  clearForm() {
    this.fullFormApi.clearForm();
  }
  resetForm() {
    this.fullFormApi.resetForm();
  }
  validateForm() {
    this.fullFormApi.validateForm();
  }
}
class Z {
  constructor(e, t, n, o, s, i, l, u, c) {
    v(this, "resourceName");
    v(this, "resourceId");
    v(this, "formMetadataAndData");
    v(this, "context");
    v(this, "formSettings");
    v(this, "formStyle");
    v(this, "actionComponent");
    v(this, "orphanErrorsComponent");
    v(this, "sectionComponent");
    v(this, "wrapperResetComponent");
    v(this, "associationDisplayComponent");
    v(this, "dynamicComponentRecord");
    v(this, "fullFormApi");
    v(this, "registerEventCallback");
    this.dynamicComponentRecord = n.dynamicComponentRecord ?? {}, this.formMetadataAndData = o, this.resourceId = t, this.context = l, this.resourceName = e, this.fullFormApi = u, this.formSettings = {
      ...s,
      ...G.getGlobalFormSetting(),
      backendDateFormat: o.form.backend_date_format,
      backendDatetimeFormat: o.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...G.getGlobalFormStyle()
    }, this.actionComponent = n.actionComponent ?? G.getGlobalActionComponent(), this.orphanErrorsComponent = n.orphanErrorsComponent ?? G.getGlobalOrphanErrorComponent(), this.sectionComponent = n.sectionComponent ?? G.getGlobalSectionComponent(), this.wrapperResetComponent = n.wrapperResetComponent ?? G.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n.associationDisplayComponent ?? G.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getForm(e, t, n, o, s, i, l, u, c) {
    return new Z(
      e,
      t,
      n,
      o,
      s,
      i,
      l,
      u,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ie.create(this.fullFormApi);
    this.registerEventCallback(e);
    const t = ie.getEventsObjectFromInstance(e), n = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, i) => {
        const l = [];
        s.fields.forEach((b) => {
          const x = this.dynamicComponentRecord[`field-${b.field_name}-before`], D = Z.getFieldComponentByFormFieldType(
            b.field_type
          ), f = this.dynamicComponentRecord[`field-${b.field_name}-after`], m = {
            associationDisplayComponent: this.associationDisplayComponent,
            regularFieldType: Z.getRegularFieldTypeByFieldType(
              b.field_type
            )
          }, F = {
            type: b.field_type,
            metadata: Object.freeze(b),
            label: b.label,
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
            beforeComponent: H(x),
            mainComponent: H(D),
            afterComponent: H(f),
            events: t.fields[b.field_name] ?? {},
            componentOptions: m
          };
          l.push(F);
        });
        const u = this.dynamicComponentRecord[`section-${s.name ?? i}-before`], c = this.sectionComponent, C = this.dynamicComponentRecord[`section-${s.name ?? i}-after`], p = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? void 0,
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? i.toString()] ?? {},
          beforeComponent: H(u),
          mainComponent: H(c),
          afterComponent: H(C),
          fields: l
        };
        n.push(p);
      }
    ), {
      sections: n,
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
      string: ye,
      text: ye,
      number: pt,
      date: nt,
      datetime: at,
      selectString: dt,
      selectBelongsTo: ft,
      selectHasMany: mt,
      checkbox: ct,
      object: ut
    }[e];
  }
}
function yt(r, e, t) {
  const n = t.getForm(), o = (u, c, C) => u[c] ? C ? () => s(u[c]) : () => u[c] : u.compare_to ? () => {
    var p;
    return ((p = t.getField(u.compare_to)) == null ? void 0 : p.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (u) => String(
    S.formatDate(
      S.extractDate(u, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), i = [], l = [];
  switch (e) {
    case "date":
      i.push(be(n.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(be(n.formSettings.datetimeFormat));
      break;
  }
  return r.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        i.push(bt());
        break;
      case "absence":
        i.push(Ft());
        break;
      case "acceptance":
        i.push(Ct());
        break;
      case "inclusion":
        i.push(Se(c.including));
        break;
      case "exclusion":
        i.push(vt(c.excluding));
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
        i.push(kt());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          xt(
            o(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          Vt(
            o(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          Dt(
            o(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          At(
            o(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          Rt(o(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          Nt(
            o(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Et());
        break;
      case "numberNumericOnly":
        i.push(Bt());
        break;
      case "numberEvenOnly":
        i.push(Ot());
        break;
      case "numberOddOnly":
        i.push(Tt());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          wt(
            o(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          qt(
            o(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          $t(
            o(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          zt(
            o(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Pt(
            o(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Ut(o(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          It(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          Lt(
            o(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Ht(
            o(c, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          Gt(
            o(c, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          jt(
            o(c, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          Qt(
            o(c, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Wt(
            o(c, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Yt(
            o(c, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
    }
  }), l.length > 0 ? l.map((u) => {
    switch (u) {
      case "allowBlank":
        return _t(i);
      case "allowNull":
        return St(i);
    }
  }) : i;
}
function bt() {
  return (r) => !!r || "Ce champ est requis";
}
function Se(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function vt(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${Se.toString()}`
  );
}
function Ft() {
  return (r) => !r || "Ce champ doit être vide";
}
function Ct() {
  return (r) => !!r || "Doit être accepté";
}
function St(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function _t(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function kt() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function xt(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Vt(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Dt(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function At(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Rt(r, e) {
  return (t) => {
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Nt(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function Et() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function Bt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function Ot() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function Tt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function wt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function qt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function $t(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function zt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function It(r, e) {
  return (t) => {
    const n = r(), o = e();
    return String(t).length >= n && String(t).length <= o || `Entre ${n} et ${o}`;
  };
}
function Ut(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function Pt(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Lt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ht(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o <= s || `Inf. ou égal à ${n}`;
  };
}
function Gt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o < s || `Inf. à ${n}`;
  };
}
function jt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o >= s || `Sup. ou égal à ${n}`;
  };
}
function Qt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o > s || `Sup. à ${n}`;
  };
}
function Wt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o === s || `Égale à ${o}`;
  };
}
function Yt(r, e) {
  return (t) => {
    const n = r();
    return S.extractDate(String(t), e) !== S.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function be(r) {
  return (e) => e == null || e === "" ? !0 : Mt(e, r) || `Date invalide. Format : ${r}`;
}
function Mt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Jt = {
  computeServerRules: yt
}, Kt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Xt = ["index"], Zt = /* @__PURE__ */ N({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {},
    registerRef: { type: Function },
    context: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let n = () => !0, o = () => !0, s = () => {
    };
    const i = x(), l = _(), u = _([]);
    function c() {
      l.value = t.privateFormApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = C(l.value), R(t.field.events.onReset), ce(() => {
        Y();
      });
    }
    function C(h) {
      const A = t.formApi.getForm();
      switch (t.field.type) {
        case "checkbox":
          return h == null || h === "" ? !1 : h;
        case "date":
          return h == null || h === "" ? null : S.formatDate(
            S.extractDate(String(h), A.formSettings.backendDateFormat),
            A.formSettings.dateFormat
          );
        case "datetime":
          return h == null || h === "" ? null : S.formatDate(
            S.extractDate(
              String(h),
              A.formSettings.backendDatetimeFormat
            ),
            A.formSettings.datetimeFormat
          );
      }
      return h;
    }
    function p(h) {
      const A = t.formApi.getForm();
      switch (t.field.type) {
        case "date":
          return h == null || h === "" ? null : S.formatDate(
            S.extractDate(String(h), A.formSettings.dateFormat),
            A.formSettings.backendDateFormat
          );
        case "datetime":
          return h == null || h === "" ? null : S.formatDate(
            S.extractDate(String(h), A.formSettings.datetimeFormat),
            A.formSettings.backendDatetimeFormat
          );
      }
      return h;
    }
    function b() {
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
      R(t.field.events.onClear);
    }
    function x() {
      return Jt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function D(h) {
      l.value = h;
    }
    function f() {
      return a(l);
    }
    function m() {
      return p(a(l));
    }
    function F(h) {
      u.value = h;
    }
    function V() {
    }
    function w() {
    }
    function P() {
      const h = n();
      return R(t.field.events.onValidated), h;
    }
    function K() {
      return o();
    }
    function Y() {
      return s();
    }
    function ee() {
      var h;
      return (h = t.privateFormApi.getFormRef().value) == null ? void 0 : h.sections.map((A) => A.fields).flat().find((A) => A.metadata.field_name === t.field.metadata.field_name);
    }
    function de(h, A, X) {
      n = h, o = A, s = X;
    }
    return e({
      reset: c,
      clear: b,
      validate: P,
      isValid: K,
      hide: V,
      unhide: w,
      resetValidation: Y,
      getValueDeserialized: m,
      getValueSerialized: f,
      setupBackendErrors: F,
      getDataRef: ee
    }), J(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid ? K() : null,
      (h) => {
        h && R(t.field.events.onIsValid);
      }
    ), z(() => {
      var A;
      c();
      const h = (A = ve()) == null ? void 0 : A.exposed;
      h && t.formApi && t.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, A) => (y(), T("div", {
      class: I(t.field.hidden ? "submit64-field-hidden" : "")
    }, [
      t.field.beforeComponent ? (y(), k(U(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : $("", !0),
      (y(), k(U(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: c,
        clear: b,
        getValueDeserialized: m,
        getValueSerialized: f,
        validate: P,
        modelValueOnUpdate: D,
        registerBehaviourCallbacks: de
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (y(), k(U(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : $("", !0),
      u.value.length > 0 ? (y(), T("div", Kt, [
        (y(!0), T(ne, null, oe(u.value, (X, fe) => (y(), T("div", {
          index: fe,
          class: "flex column"
        }, W(X), 9, Xt))), 256))
      ])) : $("", !0)
    ], 2));
  }
}), en = /* @__PURE__ */ N({
  __name: "SectionWrapper",
  props: {
    section: {},
    sectionIndex: {},
    formApi: {},
    privateFormApi: {},
    registerRef: { type: Function },
    context: {}
  },
  setup(r, { expose: e }) {
    const t = r, n = /* @__PURE__ */ new Map(), o = {
      reset: i,
      clear: l,
      validate: C,
      isValid: p,
      hide: u,
      unhide: c,
      resetValidation: b,
      getDataRef: x,
      getFields: D
    };
    function s() {
      t.section.fields.forEach((f) => {
        const m = f.metadata.field_name, F = t.formApi.getField(m);
        F && n.set(m, F);
      });
    }
    function i() {
      n.forEach((f) => {
        f.reset();
      }), R(t.section.events.onReset);
    }
    function l() {
      n.forEach((f) => {
        f.clear();
      }), R(t.section.events.onClear);
    }
    function u() {
      var m;
      const f = (m = t.privateFormApi.getFormRef().value) == null ? void 0 : m.sections.find((F) => F.name === t.section.name || F.name === t.sectionIndex.toString());
      f && (n.forEach((F) => {
        F.hide();
      }), f.hidden = !0, R(t.section.events.onHide));
    }
    function c() {
      var m;
      const f = (m = t.privateFormApi.getFormRef().value) == null ? void 0 : m.sections.find((F) => F.name === t.section.name || F.name === t.sectionIndex.toString());
      f && (n.forEach((F) => {
        F.unhide();
      }), f.hidden = !1, R(t.section.events.onUnhide));
    }
    function C() {
      let f = !0;
      return n.forEach((m) => {
        if (!m.validate()) {
          f = !1;
          return;
        }
      }), R(t.section.events.onValidated), f;
    }
    function p() {
      let f = !0;
      return n.forEach((m) => {
        if (!m.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function b() {
      n.forEach((f) => {
        f.resetValidation();
      });
    }
    function x() {
      var f;
      return (f = t.privateFormApi.getFormRef().value) == null ? void 0 : f.sections.find((m) => m.name === t.section.name || m.name === t.sectionIndex.toString());
    }
    function D() {
      return n;
    }
    return e(o), J(
      () => t.section.events.onIsValid ? p() : null,
      (f) => {
        f && R(t.section.events.onIsValid);
      }
    ), z(() => {
      var m;
      const f = (m = ve()) == null ? void 0 : m.exposed;
      f && t.registerRef(
        t.section.name ?? t.sectionIndex.toString(),
        f
      ), s();
    }), (f, m) => (y(), T("div", {
      class: I(["flex column", t.section.hidden ? "submit64-section-hidden" : ""])
    }, [
      t.section.beforeComponent ? (y(), k(U(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: o
      }, null, 8, ["formApi"])) : $("", !0),
      (y(), k(U(t.section.mainComponent), {
        sectionApi: o,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (y(), k(U(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: o
      }, null, 8, ["formApi"])) : $("", !0)
    ], 2));
  }
}), tn = {
  key: 0,
  class: "flex column"
}, an = /* @__PURE__ */ N({
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
  setup(r, { expose: e }) {
    const t = r;
    let n = null, o = "";
    const s = ze(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = {
      getMode: Re,
      getForm: _e,
      getSection: xe,
      getField: Ve,
      validateForm: P,
      isFormValid: K,
      resetForm: Y,
      clearForm: ee,
      resetValidation: de,
      submitForm: F,
      valuesHasChanged: Ne
    }, c = {
      getInitialValueByFieldName: fe,
      getAssociationDataCallback: De,
      getFormRef: ke
    }, C = {
      ...u,
      ...c
    }, p = _(), b = _(!1), x = _(!1), D = _("create"), f = _({});
    async function m() {
      var d, g;
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), p.value = Z.getForm(
        t.resourceName,
        t.resourceId,
        V(),
        n,
        t.formSettings,
        t.formStyle,
        t.context,
        C,
        t.eventManager
      ), t.resourceId && (D.value = "edit"), b.value = !0, R((g = (d = p.value) == null ? void 0 : d.events) == null ? void 0 : g.onReady);
    }
    async function F() {
      var B, q;
      if (!P())
        return;
      x.value = !0, h();
      const d = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        f.value = {}, D.value === "create" && (D.value = "edit"), n && g.resource_data && (n.resource_data = g.resource_data), o = JSON.stringify(w()), Y();
      else {
        f.value = {};
        const Q = [];
        [...i].forEach((L) => {
          const te = g.errors[L[0]];
          te && (L[1].setupBackendErrors(te), Q.push(L[0]));
        }), Object.entries(g.errors).forEach((L) => {
          Q.includes(L[0]) || (f.value[L[0]] = L[1]);
        });
      }
      R((q = (B = p.value) == null ? void 0 : B.events) == null ? void 0 : q.onSubmit), x.value = !1;
    }
    function V() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in s) {
        const B = s[g];
        if (B) {
          const q = N({
            inheritAttrs: !1,
            setup(Q, { attrs: L, slots: te }) {
              return () => B({
                ...Q,
                ...L,
                slots: te
              });
            }
          });
          switch (g) {
            case "sections":
              d.sectionComponent = q;
              break;
            case "actions":
              d.actionComponent = q;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = q;
              break;
            case "association-display":
              d.associationDisplayComponent = q;
              break;
            default:
              d.dynamicComponentRecord[g] = q;
              break;
          }
        }
      }
      return d;
    }
    function w() {
      const d = {};
      return [...i].forEach((g) => {
        d[g[0]] = g[1].getValueDeserialized();
      }), d;
    }
    function P() {
      var g, B;
      let d = !0;
      return i.forEach((q) => {
        if (!q.validate()) {
          d = !1;
          return;
        }
      }), R((B = (g = p.value) == null ? void 0 : g.events) == null ? void 0 : B.onValidated), d;
    }
    function K() {
      let d = !0;
      return i.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function Y() {
      var d, g;
      i.forEach((B) => {
        B.reset();
      }), R((g = (d = p.value) == null ? void 0 : d.events) == null ? void 0 : g.onReset);
    }
    function ee() {
      var d, g;
      i.forEach((B) => {
        B.clear();
      }), R((g = (d = p.value) == null ? void 0 : d.events) == null ? void 0 : g.onClear);
    }
    function de() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function h() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function A(d, g) {
      l.set(d, g);
    }
    function X(d, g) {
      i.set(d, g);
    }
    function fe(d) {
      if (n)
        return n.resource_data[d];
    }
    function _e() {
      return Ce(a(p.value));
    }
    function ke() {
      return p;
    }
    function xe(d) {
      return l.get(d);
    }
    function Ve(d) {
      return i.get(d);
    }
    function De() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ae() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Re() {
      return a(D);
    }
    function Ne() {
      return o !== JSON.stringify(w());
    }
    return e(u), J(
      () => {
        var d;
        return (d = p.value) != null && d.events.onIsValid ? K() : null;
      },
      () => {
        var d, g;
        R((g = (d = p.value) == null ? void 0 : d.events) == null ? void 0 : g.onIsValid);
      }
    ), J(
      () => {
        var d;
        return (d = p.value) != null && d.events.onUpdate ? w() : null;
      },
      () => {
        var d, g;
        R((g = (d = p.value) == null ? void 0 : d.events) == null ? void 0 : g.onUpdate);
      }
    ), z(async () => {
      console.time("mount and ready"), Ae(), await m(), ce(() => {
        o = JSON.stringify(w());
      }), console.timeEnd("mount and ready");
    }), (d, g) => b.value && p.value ? (y(), T("div", tn, [
      j("div", {
        class: I(p.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (y(!0), T(ne, null, oe(p.value.sections, (B, q) => (y(), k(en, {
          key: B.name ?? q,
          section: B,
          sectionIndex: q,
          context: t.context,
          formApi: u,
          privateFormApi: c,
          registerRef: A
        }, {
          default: E(() => [
            (y(!0), T(ne, null, oe(B.fields, (Q) => (y(), k(Zt, {
              key: Q.metadata.field_name,
              field: Q,
              context: t.context,
              formApi: u,
              privateFormApi: c,
              registerRef: X
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "sectionIndex", "context"]))), 128))
      ], 2),
      (y(), k(U(p.value.orphanErrorsComponent), {
        orphanErrors: f.value,
        formApi: u
      }, null, 8, ["orphanErrors"])),
      (y(), k(U(p.value.actionComponent), {
        isLoadingSubmit: x.value,
        submit: F,
        clear: p.value.clearable ? ee : void 0,
        reset: p.value.resetable ? Y : void 0,
        formApi: u,
        privateFormApi: c
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : $("", !0);
  }
});
export {
  G as Submit64,
  an as Submit64Form
};
