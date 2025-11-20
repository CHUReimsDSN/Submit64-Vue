var Ne = Object.defineProperty;
var Ee = (r, e, t) => e in r ? Ne(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v = (r, e, t) => Ee(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as N, createElementBlock as T, openBlock as y, createElementVNode as j, createVNode as O, createBlock as x, createCommentVNode as $, unref as a, mergeProps as fe, toDisplayString as Q, renderSlot as Be, resolveComponent as Oe, normalizeProps as Te, guardReactiveProps as we, withCtx as B, createTextVNode as qe, Fragment as ee, renderList as te, ref as k, onMounted as z, normalizeClass as I, watch as M, resolveDynamicComponent as P, nextTick as se, getCurrentInstance as be, useSlots as $e } from "vue";
import { QBtn as Y, QIcon as ne, QItem as ze, QItemSection as Ie, QItemLabel as Ue, QInput as le, QPopupProxy as me, QDate as ve, QTime as Pe, QCheckbox as Le, QSelect as pe, date as _ } from "quasar";
const He = { class: "flex column" }, Ge = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, je = /* @__PURE__ */ N({
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
    return (n, o) => (y(), T("div", He, [
      j("div", Ge, [
        O(a(Y), fe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (y(), x(a(Y), fe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : $("", !0),
        e.clear ? (y(), x(a(Y), fe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : $("", !0)
      ])
    ]));
  }
}), Qe = { class: "flex row items-center" }, We = { class: "text-body1 text-weight-medium" }, Ye = { class: "flex column q-gutter-md" }, Me = /* @__PURE__ */ N({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(r) {
    const e = r, t = e.formApi.getForm().formStyle;
    return (n, o) => (y(), T("div", null, [
      j("div", Qe, [
        e.section.icon ? (y(), x(a(ne), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: a(t).fieldColor
        }, null, 8, ["name", "color"])) : $("", !0),
        j("div", We, Q(e.section.label), 1)
      ]),
      j("div", Ye, [
        Be(n.$slots, "default")
      ])
    ]));
  }
}), Je = /* @__PURE__ */ N({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => {
      const o = Oe("q-icon");
      return y(), x(o, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (i) => e.reset())
      });
    };
  }
}), Ke = /* @__PURE__ */ N({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (y(), x(a(ze), Te(we(e.itemProps)), {
      default: B(() => [
        O(a(Ie), null, {
          default: B(() => [
            O(a(Ue), null, {
              default: B(() => [
                qe(Q(e.entry.label), 1)
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
}), Xe = { class: "flex column" }, Ze = /* @__PURE__ */ N({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (y(), T("div", Xe, [
      (y(!0), T(ee, null, te(e.orphanErrors, (o, i) => (y(), T("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, Q(i) + " : " + Q(o.join(",")), 1))), 128))
    ]));
  }
}), ie = class ie {
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
    }, this._actionComponent = je, this._orphanErrorsComponent = Ze, this._sectionComponent = Me, this._wrapperResetComponent = Je, this._associationDisplayComponent = Ke;
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
v(ie, "_instance", new ie());
let G = ie;
const et = { class: "row items-center justify-end" }, tt = /* @__PURE__ */ N({
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
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, i = n.rulesBehaviour === "lazy", s = k(), l = k();
    function u() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function h() {
      return l.value ? l.value.hasError : !1;
    }
    function C() {
      l.value && l.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(c, h, C);
    }), (b, V) => (y(), x(a(le), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[1] || (V[1] = (D) => e.modelValueOnUpdate(D)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        O(a(ne), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            O(a(me), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                O(a(ve), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: B(() => [
                    j("div", et, [
                      O(a(Y), {
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
}), nt = { class: "row items-center justify-end" }, ot = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ N({
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
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, i = n.rulesBehaviour === "lazy", s = k(), l = k(), u = k();
    function c() {
      s.value && s.value.hide();
    }
    function h() {
      l.value && l.value.hide();
    }
    function C() {
      return u.value ? u.value.validate() : !1;
    }
    function b() {
      return u.value ? u.value.hasError : !1;
    }
    function V() {
      u.value && u.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(C, b, V);
    }), (D, m) => (y(), x(a(le), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": m[2] || (m[2] = (f) => e.modelValueOnUpdate(f)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        O(a(ne), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            O(a(me), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                O(a(ve), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": m[0] || (m[0] = (f) => e.modelValueOnUpdate(f)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: B(() => [
                    j("div", nt, [
                      O(a(Y), {
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
        O(a(ne), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            O(a(me), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                O(a(Pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": m[1] || (m[1] = (f) => e.modelValueOnUpdate(f)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: B(() => [
                    j("div", ot, [
                      O(a(Y), {
                        onClick: h,
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
}), at = { class: "flex column" }, it = {
  key: 0,
  class: "q-field__bottom"
}, st = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, lt = /* @__PURE__ */ N({
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
    const e = r, t = k(!0), o = e.formApi.getForm().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return M(
      () => e.modelValue,
      (u) => {
        for (const c of e.rules)
          if (t.value = c(u), t.value !== !0)
            break;
      }
    ), z(() => {
      e.registerBehaviourCallbacks(i, s, l);
    }), (u, c) => (y(), T("div", at, [
      O(a(Le), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (h) => e.modelValueOnUpdate(h)),
        label: e.field.label,
        dense: a(o).fieldDense,
        color: a(o).fieldColor,
        "aria-readonly": e.field.readonly,
        class: I([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (y(), T("div", it, Q(e.field.hint), 1)) : $("", !0),
      t.value !== !0 ? (y(), T("div", st, Q(t.value), 1)) : $("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ N({
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
    return t.formStyle, n.rulesBehaviour, (o, i) => " TODO json edit ? ";
  }
}), ut = /* @__PURE__ */ N({
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
    const e = r, t = k([]), n = k([]), o = k(), i = e.formApi.getForm(), s = i.formSettings, l = i.formStyle, u = s.rulesBehaviour === "lazy";
    function c(m, f) {
      if (m === "") {
        f(() => {
          n.value = [...t.value];
        });
        return;
      }
      f(() => {
        const F = m.toLowerCase();
        n.value = t.value.filter((S) => S.label.toLowerCase().includes(F));
      });
    }
    function h() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), n.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return o.value ? o.value.validate() : !1;
    }
    function b() {
      return o.value ? o.value.hasError : !1;
    }
    function V() {
      o.value && o.value.resetValidation();
    }
    function D() {
      e.clear(), n.value = [];
    }
    return z(() => {
      h(), e.registerBehaviourCallbacks(C, b, V);
    }), (m, f) => (y(), x(a(pe), {
      ref_key: "fieldRef",
      ref: o,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (F) => e.modelValueOnUpdate(F)),
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
function oe() {
  return 20;
}
function Fe(r) {
  return Object.keys(r).forEach((e) => {
    const t = r[e];
    t && typeof t == "object" && Fe(t);
  }), Object.freeze(r);
}
function R(r) {
  r == null || r.forEach((e) => {
    e();
  });
}
const dt = /* @__PURE__ */ N({
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi.getForm(), o = n.formSettings, i = n.formStyle, s = o.rulesBehaviour === "lazy", l = k([]), u = k({
      limit: oe(),
      offset: 0
    }), c = k();
    function h(f, F) {
      const S = e.privateFormApi.getAssociationDataCallback();
      f === "" && (u.value = {
        limit: oe(),
        offset: 0
      }), F(() => {
        const w = e.formApi.getForm();
        S({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: u.value.offset,
          labelFilter: f,
          context: w.context
        }).then((L) => {
          l.value = L.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function C() {
      se(() => {
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
    function b() {
      return c.value ? c.value.validate() : !1;
    }
    function V() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function m() {
      e.clear(), l.value = [];
    }
    return z(() => {
      C(), e.registerBehaviourCallbacks(b, V, D);
    }), (f, F) => (y(), x(a(pe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (S) => e.modelValueOnUpdate(S)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: I(e.field.cssClass),
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
      onClear: m,
      onFilter: h
    }, {
      option: B((S) => [
        (y(), x(P(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: S.opt,
          itemProps: S.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ft = /* @__PURE__ */ N({
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi.getForm(), o = n.formSettings, i = n.formStyle, s = o.rulesBehaviour === "lazy", l = k([]), u = k({
      limit: oe(),
      offset: 0
    }), c = k();
    function h(f, F) {
      const S = e.privateFormApi.getAssociationDataCallback();
      f === "" && (u.value = {
        limit: oe(),
        offset: 0
      }), F(() => {
        const w = e.formApi.getForm();
        S({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: u.value.offset,
          labelFilter: f,
          context: w.context
        }).then((L) => {
          l.value = L.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function C() {
      se(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (l.value = f.map(
          (F, S) => ({
            label: e.field.associationData.label[S] ?? "???",
            value: F,
            data: e.field.associationData.data[S]
          })
        ));
      });
    }
    function b() {
      return c.value ? c.value.validate() : !1;
    }
    function V() {
      return c.value ? c.value.hasError : !1;
    }
    function D() {
      c.value && c.value.resetValidation();
    }
    function m() {
      e.clear(), l.value = [];
    }
    return z(() => {
      C(), e.registerBehaviourCallbacks(b, V, D);
    }), (f, F) => (y(), x(a(pe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (S) => e.modelValueOnUpdate(S)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: I(e.field.cssClass),
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
      onClear: m,
      onFilter: h
    }, {
      option: B((S) => [
        (y(), x(P(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: S.opt,
          itemProps: S.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ge = /* @__PURE__ */ N({
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
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, i = n.rulesBehaviour === "lazy", s = k();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function u() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, u, c);
    }), (h, C) => (y(), x(a(le), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (b) => e.modelValueOnUpdate(b)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), mt = /* @__PURE__ */ N({
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
    const e = r, t = e.formApi.getForm(), n = t.formSettings, o = t.formStyle, i = n.rulesBehaviour === "lazy", s = k();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function u() {
      return s.value ? s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, u, c);
    }), (h, C) => (y(), x(a(le), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (b) => e.modelValueOnUpdate(b)),
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
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class re {
  constructor(e) {
    v(this, "fullFormApi");
    v(this, "events", []);
    this.fullFormApi = e;
  }
  when(e, t) {
    const n = new pt(this, this.fullFormApi), o = e, i = t, s = new ht(o, i);
    return this.events.push(s), n;
  }
  static create(e) {
    return new re(e);
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
class pt {
  constructor(e, t) {
    v(this, "logicBuilder");
    v(this, "fullFormApi");
    this.logicBuilder = e, this.fullFormApi = t;
  }
  then(e, t) {
    if (typeof e == "function")
      new ae(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        e
      );
    else {
      const n = e, o = t;
      new ae(this.fullFormApi, n, o);
    }
    return new he(this.fullFormApi);
  }
}
class he {
  constructor(e) {
    v(this, "fullFormApi");
    this.fullFormApi = e;
  }
  then(e, t) {
    if (typeof e == "function")
      new ae(
        this.fullFormApi,
        "Hide field",
        { fieldName: "" },
        e
      );
    else {
      const n = e, o = t;
      new ae(this.fullFormApi, n, o);
    }
    return new he(this.fullFormApi);
  }
}
class ht {
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
class ae {
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
class X {
  constructor(e, t, n, o, i, s, l, u, c) {
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
      ...i,
      ...G.getGlobalFormSetting(),
      backendDateFormat: o.form.backend_date_format,
      backendDatetimeFormat: o.form.backend_datetime_format
    }, this.formStyle = {
      ...s,
      ...G.getGlobalFormStyle()
    }, this.actionComponent = n.actionComponent ?? G.getGlobalActionComponent(), this.orphanErrorsComponent = n.orphanErrorsComponent ?? G.getGlobalOrphanErrorComponent(), this.sectionComponent = n.sectionComponent ?? G.getGlobalSectionComponent(), this.wrapperResetComponent = n.wrapperResetComponent ?? G.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n.associationDisplayComponent ?? G.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getForm(e, t, n, o, i, s, l, u, c) {
    return new X(
      e,
      t,
      n,
      o,
      i,
      s,
      l,
      u,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = re.create(this.fullFormApi);
    this.registerEventCallback(e);
    const t = re.getEventsObjectFromInstance(e), n = [];
    return this.formMetadataAndData.form.sections.forEach(
      (i, s) => {
        const l = [];
        i.fields.forEach((b) => {
          const V = this.dynamicComponentRecord[`field-${b.field_name}-before`], D = X.getFieldComponentByFormFieldType(
            b.field_type
          ), m = this.dynamicComponentRecord[`field-${b.field_name}-after`], f = {
            associationDisplayComponent: this.associationDisplayComponent,
            regularFieldType: X.getRegularFieldTypeByFieldType(
              b.field_type
            )
          }, F = {
            type: b.field_type,
            metadata: Object.freeze(b),
            label: b.label,
            hint: b.hint ?? void 0,
            prefix: b.prefix ?? void 0,
            suffix: b.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? i.readonly ?? b.readonly ?? void 0,
            cssClass: b.css_class ?? void 0,
            staticSelectOptions: b.static_select_options,
            associationData: b.field_association_data,
            rules: b.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: V,
            mainComponent: D,
            afterComponent: m,
            events: t.fields[b.field_name],
            componentOptions: f
          };
          l.push(F);
        });
        const u = this.dynamicComponentRecord[`section-${i.name ?? s}-before`], c = this.sectionComponent, h = this.dynamicComponentRecord[`section-${i.name ?? s}-after`], C = {
          label: i.label ?? void 0,
          icon: i.icon ?? void 0,
          cssClass: i.css_class ?? void 0,
          hidden: !1,
          name: i.name ?? void 0,
          readonly: this.formMetadataAndData.form.readonly ?? i.readonly ?? void 0,
          events: t.sections[i.name ?? s.toString()],
          beforeComponent: u,
          mainComponent: c,
          afterComponent: h,
          fields: l
        };
        n.push(C);
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
      actionComponent: this.actionComponent,
      orphanErrorsComponent: this.orphanErrorsComponent,
      wrapperResetComponent: this.wrapperResetComponent,
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
      string: ge,
      text: ge,
      number: mt,
      date: tt,
      datetime: rt,
      selectString: ut,
      selectBelongsTo: dt,
      selectHasMany: ft,
      checkbox: lt,
      object: ct
    }[e];
  }
}
function gt(r, e, t) {
  const n = t.getForm(), o = (u, c, h) => u[c] ? h ? () => i(u[c]) : () => u[c] : u.compare_to ? () => {
    var C;
    return ((C = t.getField(u.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", i = (u) => String(
    _.formatDate(
      _.extractDate(u, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), s = [], l = [];
  switch (e) {
    case "date":
      s.push(ye(n.formSettings.dateFormat));
      break;
    case "datetime":
      s.push(ye(n.formSettings.datetimeFormat));
      break;
  }
  return r.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        s.push(yt());
        break;
      case "absence":
        s.push(vt());
        break;
      case "acceptance":
        s.push(Ft());
        break;
      case "inclusion":
        s.push(Ce(c.including));
        break;
      case "exclusion":
        s.push(bt(c.excluding));
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
        s.push(_t());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          kt(
            o(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          xt(
            o(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          Vt(
            o(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          Dt(
            o(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          At(o(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          Rt(
            o(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(Nt());
        break;
      case "numberNumericOnly":
        s.push(Et());
        break;
      case "numberEvenOnly":
        s.push(Bt());
        break;
      case "numberOddOnly":
        s.push(Ot());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          Tt(
            o(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          wt(
            o(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          qt(
            o(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          $t(
            o(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          Ut(
            o(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          It(o(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          zt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          Pt(
            o(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          Lt(
            o(c, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          Ht(
            o(c, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          Gt(
            o(c, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          jt(
            o(c, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          Qt(
            o(c, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          Wt(
            o(c, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
    }
  }), l.length > 0 ? l.map((u) => {
    switch (u) {
      case "allowBlank":
        return St(s);
      case "allowNull":
        return Ct(s);
    }
  }) : s;
}
function yt() {
  return (r) => !!r || "Ce champ est requis";
}
function Ce(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function bt(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${Ce.toString()}`
  );
}
function vt() {
  return (r) => !r || "Ce champ doit être vide";
}
function Ft() {
  return (r) => !!r || "Doit être accepté";
}
function Ct(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function St(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function _t() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function kt(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function xt(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Vt(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Dt(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function At(r, e) {
  return (t) => {
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Rt(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function Nt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function Et() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function Bt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function Ot() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function Tt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function wt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function qt(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function $t(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function zt(r, e) {
  return (t) => {
    const n = r(), o = e();
    return String(t).length >= n && String(t).length <= o || `Entre ${n} et ${o}`;
  };
}
function It(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function Ut(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Pt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Lt(r, e) {
  return (t) => {
    const n = r(), o = _.extractDate(String(t), e), i = _.extractDate(n, e);
    return o <= i || `Inf. ou égal à ${n}`;
  };
}
function Ht(r, e) {
  return (t) => {
    const n = r(), o = _.extractDate(String(t), e), i = _.extractDate(n, e);
    return o < i || `Inf. à ${n}`;
  };
}
function Gt(r, e) {
  return (t) => {
    const n = r(), o = _.extractDate(String(t), e), i = _.extractDate(n, e);
    return o >= i || `Sup. ou égal à ${n}`;
  };
}
function jt(r, e) {
  return (t) => {
    const n = r(), o = _.extractDate(String(t), e), i = _.extractDate(n, e);
    return o > i || `Sup. à ${n}`;
  };
}
function Qt(r, e) {
  return (t) => {
    const n = r(), o = _.extractDate(String(t), e), i = _.extractDate(n, e);
    return o === i || `Égale à ${o}`;
  };
}
function Wt(r, e) {
  return (t) => {
    const n = r();
    return _.extractDate(String(t), e) !== _.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function ye(r) {
  return (e) => e == null || e === "" ? !0 : Yt(e, r) || `Date invalide. Format : ${r}`;
}
function Yt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = _.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : _.formatDate(t, e) === r;
}
const Mt = {
  computeServerRules: gt
}, Jt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Kt = ["index"], Xt = /* @__PURE__ */ N({
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
    let n = () => !0, o = () => !0, i = () => {
    };
    const s = V(), l = k(), u = k([]);
    function c() {
      l.value = t.privateFormApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = h(l.value), R(t.field.events.onReset), se(() => {
        J();
      });
    }
    function h(p) {
      const A = t.formApi.getForm();
      switch (t.field.type) {
        case "checkbox":
          return p == null || p === "" ? !1 : p;
        case "date":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(String(p), A.formSettings.backendDateFormat),
            A.formSettings.dateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(
              String(p),
              A.formSettings.backendDatetimeFormat
            ),
            A.formSettings.datetimeFormat
          );
      }
      return p;
    }
    function C(p) {
      const A = t.formApi.getForm();
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(String(p), A.formSettings.dateFormat),
            A.formSettings.backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(String(p), A.formSettings.datetimeFormat),
            A.formSettings.backendDatetimeFormat
          );
      }
      return p;
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
    function V() {
      return Mt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function D(p) {
      l.value = p;
    }
    function m() {
      return a(l);
    }
    function f() {
      return C(a(l));
    }
    function F(p) {
      u.value = p;
    }
    function S() {
    }
    function w() {
    }
    function L() {
      const p = n();
      return R(t.field.events.onValidated), p;
    }
    function W() {
      return o();
    }
    function J() {
      return i();
    }
    function ce() {
      var p;
      return (p = t.privateFormApi.getFormRef().value) == null ? void 0 : p.sections.map((A) => A.fields).flat().find((A) => A.metadata.field_name === t.field.metadata.field_name);
    }
    function ue(p, A, K) {
      n = p, o = A, i = K;
    }
    return e({
      reset: c,
      clear: b,
      validate: L,
      isValid: W,
      hide: S,
      unhide: w,
      resetValidation: J,
      getValueDeserialized: f,
      getValueSerialized: m,
      setupBackendErrors: F,
      getDataRef: ce
    }), M(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), M(
      () => t.field.events.onIsValid ? W() : null,
      (p) => {
        p && R(t.field.events.onIsValid);
      }
    ), z(() => {
      var A;
      c();
      const p = (A = be()) == null ? void 0 : A.exposed;
      p && t.formApi && t.registerRef(
        t.field.metadata.field_name,
        p
      );
    }), (p, A) => (y(), T("div", {
      class: I(t.field.hidden ? "submit64-field-hidden" : "")
    }, [
      t.field.beforeComponent ? (y(), x(P(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : $("", !0),
      (y(), x(P(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: c,
        clear: b,
        getValueDeserialized: f,
        getValueSerialized: m,
        validate: L,
        modelValueOnUpdate: D,
        registerBehaviourCallbacks: ue
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (y(), x(P(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : $("", !0),
      u.value.length > 0 ? (y(), T("div", Jt, [
        (y(!0), T(ee, null, te(u.value, (K, de) => (y(), T("div", {
          index: de,
          class: "flex column"
        }, Q(K), 9, Kt))), 256))
      ])) : $("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ N({
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
      reset: s,
      clear: l,
      validate: h,
      isValid: C,
      hide: u,
      unhide: c,
      resetValidation: b,
      getDataRef: V,
      getFields: D
    };
    function i() {
      t.section.fields.forEach((m) => {
        const f = m.metadata.field_name, F = t.formApi.getField(f);
        F && n.set(f, F);
      });
    }
    function s() {
      n.forEach((m) => {
        m.reset();
      }), R(t.section.events.onReset);
    }
    function l() {
      n.forEach((m) => {
        m.clear();
      }), R(t.section.events.onClear);
    }
    function u() {
      var f;
      const m = (f = t.privateFormApi.getFormRef().value) == null ? void 0 : f.sections.find((F) => F.name === t.section.name || F.name === t.sectionIndex.toString());
      m && (n.forEach((F) => {
        F.hide();
      }), m.hidden = !0, R(t.section.events.onHide));
    }
    function c() {
      var f;
      const m = (f = t.privateFormApi.getFormRef().value) == null ? void 0 : f.sections.find((F) => F.name === t.section.name || F.name === t.sectionIndex.toString());
      m && (n.forEach((F) => {
        F.unhide();
      }), m.hidden = !1, R(t.section.events.onUnhide));
    }
    function h() {
      let m = !0;
      return n.forEach((f) => {
        if (!f.validate()) {
          m = !1;
          return;
        }
      }), R(t.section.events.onValidated), m;
    }
    function C() {
      let m = !0;
      return n.forEach((f) => {
        if (!f.isValid()) {
          m = !1;
          return;
        }
      }), m;
    }
    function b() {
      n.forEach((m) => {
        m.resetValidation();
      });
    }
    function V() {
      var m;
      return (m = t.privateFormApi.getFormRef().value) == null ? void 0 : m.sections.find((f) => f.name === t.section.name || f.name === t.sectionIndex.toString());
    }
    function D() {
      return n;
    }
    return e(o), M(
      () => t.section.events.onIsValid ? C() : null,
      (m) => {
        m && R(t.section.events.onIsValid);
      }
    ), z(() => {
      var f;
      const m = (f = be()) == null ? void 0 : f.exposed;
      m && t.registerRef(
        t.section.name ?? t.sectionIndex.toString(),
        m
      ), i();
    }), (m, f) => (y(), T("div", {
      class: I(["flex column", t.section.hidden ? "submit64-section-hidden" : ""])
    }, [
      t.section.beforeComponent ? (y(), x(P(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: o
      }, null, 8, ["formApi"])) : $("", !0),
      (y(), x(P(t.section.mainComponent), {
        sectionApi: o,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (y(), x(P(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: o
      }, null, 8, ["formApi"])) : $("", !0)
    ], 2));
  }
}), en = {
  key: 0,
  class: "flex column"
}, rn = /* @__PURE__ */ N({
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
    const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = {
      getMode: De,
      getForm: de,
      getSection: _e,
      getField: ke,
      validateForm: w,
      isFormValid: L,
      resetForm: W,
      clearForm: J,
      resetValidation: ce,
      submitForm: f,
      valuesHasChanged: Ae
    }, u = {
      getInitialValueByFieldName: K,
      getAssociationDataCallback: xe,
      getFormRef: Se
    }, c = {
      ...l,
      ...u
    }, h = k(), C = k(!1), b = k(!1), V = k("create"), D = k({});
    async function m() {
      var d, g;
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), h.value = X.getForm(
        t.resourceName,
        t.resourceId,
        F(),
        n,
        t.formSettings,
        t.formStyle,
        t.context,
        c,
        t.eventManager
      ), t.resourceId && (V.value = "edit"), C.value = !0, R((g = (d = h.value) == null ? void 0 : d.events) == null ? void 0 : g.onReady);
    }
    async function f() {
      var E, U;
      if (!w())
        return;
      b.value = !0, ue();
      const d = S(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        D.value = {}, V.value === "create" && (V.value = "edit"), n && g.resource_data && (n.resource_data = g.resource_data), o = JSON.stringify(S()), W();
      else {
        D.value = {};
        const q = [];
        [...i].forEach((H) => {
          const Z = g.errors[H[0]];
          Z && (H[1].setupBackendErrors(Z), q.push(H[0]));
        }), Object.entries(g.errors).forEach((H) => {
          q.includes(H[0]) || (D.value[H[0]] = H[1]);
        });
      }
      R((U = (E = h.value) == null ? void 0 : E.events) == null ? void 0 : U.onSubmit), b.value = !1;
    }
    function F() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      }, g = $e();
      for (const E in g) {
        const U = g[E];
        if (U) {
          const q = N({
            inheritAttrs: !1,
            setup(H, { attrs: Z, slots: Re }) {
              return () => U({
                ...H,
                ...Z,
                slots: Re
              });
            }
          });
          switch (E) {
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
              d.dynamicComponentRecord[E] = q;
              break;
          }
        }
      }
      return d;
    }
    function S() {
      const d = {};
      return [...i].forEach((g) => {
        d[g[0]] = g[1].getValueDeserialized();
      }), d;
    }
    function w() {
      var g, E;
      let d = !0;
      return i.forEach((U) => {
        if (!U.validate()) {
          d = !1;
          return;
        }
      }), R((E = (g = h.value) == null ? void 0 : g.events) == null ? void 0 : E.onValidated), d;
    }
    function L() {
      let d = !0;
      return i.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function W() {
      var d, g;
      i.forEach((E) => {
        E.reset();
      }), R((g = (d = h.value) == null ? void 0 : d.events) == null ? void 0 : g.onReset);
    }
    function J() {
      var d, g;
      i.forEach((E) => {
        E.clear();
      }), R((g = (d = h.value) == null ? void 0 : d.events) == null ? void 0 : g.onClear);
    }
    function ce() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function ue() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function p(d, g) {
      s.set(d, g);
    }
    function A(d, g) {
      i.set(d, g);
    }
    function K(d) {
      if (n)
        return n.resource_data[d];
    }
    function de() {
      return Fe(a(h.value));
    }
    function Se() {
      return h;
    }
    function _e(d) {
      return s.get(d);
    }
    function ke(d) {
      return i.get(d);
    }
    function xe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ve() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function De() {
      return a(V);
    }
    function Ae() {
      return o !== JSON.stringify(S());
    }
    return e(l), M(
      () => {
        var d;
        return (d = h.value) != null && d.events.onIsValid ? L() : null;
      },
      () => {
        var d, g;
        R((g = (d = h.value) == null ? void 0 : d.events) == null ? void 0 : g.onIsValid);
      }
    ), M(
      () => {
        var d;
        return (d = h.value) != null && d.events.onUpdate ? S() : null;
      },
      () => {
        var d, g;
        R((g = (d = h.value) == null ? void 0 : d.events) == null ? void 0 : g.onUpdate);
      }
    ), z(async () => {
      console.time("mount and ready"), Ve(), await m(), se(() => {
        o = JSON.stringify(S());
      }), console.timeEnd("mount and ready");
    }), (d, g) => C.value && h.value ? (y(), T("div", en, [
      j("div", {
        class: I(h.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (y(!0), T(ee, null, te(h.value.sections, (E, U) => (y(), x(Zt, {
          key: E.name ?? U,
          section: E,
          sectionIndex: U,
          context: t.context,
          formApi: l,
          privateFormApi: u,
          registerRef: p
        }, {
          default: B(() => [
            (y(!0), T(ee, null, te(E.fields, (q) => (y(), x(Xt, {
              key: q.metadata.field_name,
              field: q,
              context: t.context,
              formApi: l,
              privateFormApi: u,
              registerRef: A
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "sectionIndex", "context"]))), 128))
      ], 2),
      (y(), x(P(h.value.orphanErrorsComponent), {
        orphanErrors: D.value,
        formApi: l
      }, null, 8, ["orphanErrors"])),
      (y(), x(P(h.value.actionComponent), {
        isLoadingSubmit: b.value,
        submit: f,
        clear: h.value.clearable ? J : void 0,
        reset: h.value.resetable ? W : void 0,
        formApi: l,
        privateFormApi: u
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : $("", !0);
  }
});
export {
  G as Submit64,
  rn as Submit64Form
};
