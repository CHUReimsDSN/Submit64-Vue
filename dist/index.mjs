var _e = Object.defineProperty;
var Fe = (n, e, t) => e in n ? _e(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var x = (n, e, t) => Fe(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as R, openBlock as m, createElementVNode as I, createVNode as O, createBlock as C, createCommentVNode as G, unref as o, mergeProps as W, normalizeClass as $, toDisplayString as L, renderSlot as oe, resolveComponent as Se, normalizeProps as re, guardReactiveProps as ae, withCtx as k, createTextVNode as Ce, Fragment as Q, renderList as J, ref as b, onMounted as z, watch as xe, resolveDynamicComponent as H, nextTick as le, getCurrentInstance as De, useSlots as ke } from "vue";
import { QBtn as A, QIcon as X, QItem as Ve, QItemSection as Be, QItemLabel as Te, QInput as M, QPopupProxy as ne, QDate as pe, QTime as Oe, QCheckbox as Re, QSelect as ie, date as v } from "quasar";
const qe = { class: "flex column" }, Pe = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ee = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    functionsProvider: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(n) {
    const e = n;
    function t() {
      const a = e.functionsProvider.getFormFactoryInstance().formStyle;
      return {
        outline: a.fieldOutlined,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        color: a.fieldColor,
        noCaps: !0
      };
    }
    return (a, r) => (m(), R("div", qe, [
      I("div", Pe, [
        O(o(A), W(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: r[0] || (r[0] = (i) => e.submit())
        }), null, 16, ["loading"]),
        e.reset ? (m(), C(o(A), W({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: r[1] || (r[1] = (i) => e.reset())
        }), null, 16, ["loading"])) : G("", !0),
        e.clear ? (m(), C(o(A), W({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: r[2] || (r[2] = (i) => e.clear())
        }), null, 16, ["loading"])) : G("", !0)
      ])
    ]));
  }
}), Ne = { class: "flex row items-center" }, $e = { class: "text-body1 text-weight-medium" }, ze = { class: "flex column q-gutter-sm" }, we = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance().formStyle;
    return (a, r) => (m(), R("div", {
      class: $(["flex column", e.section.cssClass])
    }, [
      I("div", Ne, [
        e.section.icon ? (m(), C(o(X), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: o(t).fieldColor
        }, null, 8, ["name", "color"])) : G("", !0),
        I("div", $e, L(e.section.label), 1)
      ]),
      I("div", ze, [
        oe(a.$slots, "default")
      ])
    ], 2));
  }
}), Ie = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, a) => {
      const r = Se("q-icon");
      return m(), C(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (i) => e.reset())
      });
    };
  }
}), Ue = /* @__PURE__ */ B({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, a) => (m(), C(o(Ve), re(ae(e.itemProps)), {
      default: k(() => [
        O(o(Be), null, {
          default: k(() => [
            O(o(Te), null, {
              default: k(() => [
                Ce(L(e.entry.label), 1)
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
}), Ge = { class: "flex column" }, Le = /* @__PURE__ */ B({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    functionsProvider: {}
  },
  setup(n) {
    const e = n;
    return (t, a) => (m(), R("div", Ge, [
      (m(!0), R(Q, null, J(e.orphanErrors, (r, i) => (m(), R("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, L(i) + " : " + L(r.join(",")), 1))), 128))
    ]));
  }
}), K = class K {
  constructor() {
    x(this, "_formSettings");
    x(this, "_formStyle");
    x(this, "_actionComponent");
    x(this, "_orphanErrorsComponent");
    x(this, "_sectionComponent");
    x(this, "_wrapperResetComponent");
    x(this, "_associationDisplayComponent");
    x(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Ee, this._orphanErrorsComponent = Le, this._sectionComponent = we, this._wrapperResetComponent = Ie, this._associationDisplayComponent = Ue, this._associationDisplayDictonary = {};
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
  static registerGlobalAssociationDisplayRecord(e) {
    this._instance._associationDisplayDictonary = e;
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
  static getGlobalAssociationDisplayRecord() {
    return this._instance._associationDisplayDictonary;
  }
};
x(K, "_instance", new K());
let N = K;
const He = { class: "row items-center justify-end" }, Ae = /* @__PURE__ */ B({
  __name: "DateField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = b(), l = b();
    function d() {
      s.value && s.value.hide();
    }
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(u, c);
    }), (y, D) => (m(), C(o(M), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[1] || (D[1] = (T) => e.modelValueOnUpdate(T)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(r).fieldOutlined,
      filled: o(r).fieldFilled,
      standout: o(r).fieldStandout,
      borderless: o(r).fieldBorderless,
      rounded: o(r).fieldRounded,
      square: o(r).fieldSquare,
      dense: o(r).fieldDense,
      hideBottomSpace: o(r).fieldHideBottomSpace,
      color: o(r).fieldColor,
      bgColor: o(r).fieldBgColor,
      class: $(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: k(() => [
        O(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            O(o(ne), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                O(o(pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (T) => e.modelValueOnUpdate(T)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: k(() => [
                    I("div", He, [
                      O(o(A), {
                        onClick: d,
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
}), je = { class: "row items-center justify-end" }, Qe = { class: "row items-center justify-end" }, Ye = /* @__PURE__ */ B({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = b(), l = b(), d = b();
    function u() {
      s.value && s.value.hide();
    }
    function c() {
      l.value && l.value.hide();
    }
    function y() {
      return d.value ? d.value.validate() : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(y, D);
    }), (T, F) => (m(), C(o(M), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (p) => e.modelValueOnUpdate(p)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(r).fieldOutlined,
      filled: o(r).fieldFilled,
      standout: o(r).fieldStandout,
      borderless: o(r).fieldBorderless,
      rounded: o(r).fieldRounded,
      square: o(r).fieldSquare,
      dense: o(r).fieldDense,
      hideBottomSpace: o(r).fieldHideBottomSpace,
      color: o(r).fieldColor,
      bgColor: o(r).fieldBgColor,
      class: $(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: k(() => [
        O(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            O(o(ne), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                O(o(pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: k(() => [
                    I("div", je, [
                      O(o(A), {
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
        }),
        O(o(X), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            O(o(ne), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                O(o(Oe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: k(() => [
                    I("div", Qe, [
                      O(o(A), {
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
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), We = { class: "flex column" }, Je = {
  key: 0,
  class: "q-field__bottom"
}, Xe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ze = /* @__PURE__ */ B({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = b(!0), r = e.functionsProvider.getFormFactoryInstance().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return xe(
      () => e.modelValue,
      (l) => {
        for (const d of e.rules)
          if (t.value = d(l), t.value !== !0)
            break;
      }
    ), z(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (l, d) => (m(), R("div", We, [
      O(o(Re), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(r).fieldDense,
        color: o(r).fieldColor,
        "aria-readonly": e.field.readonly,
        class: $([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (m(), R("div", Je, L(e.field.hint), 1)) : G("", !0),
      t.value !== !0 ? (m(), R("div", Xe, L(t.value), 1)) : G("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ B({
  __name: "ObjectField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const t = n.functionsProvider.getFormFactoryInstance(), a = t.formSettings;
    return t.formStyle, a.rulesBehaviour, (r, i) => " TODO json edit ? ";
  }
}), Me = /* @__PURE__ */ B({
  __name: "SelectField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = b([]), a = b([]), r = b(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, l = i.formStyle, d = s.rulesBehaviour === "lazy";
    function u(F, p) {
      if (F === "") {
        p(() => {
          a.value = [...t.value];
        });
        return;
      }
      p(() => {
        const S = F.toLowerCase();
        a.value = t.value.filter((h) => h.label.toLowerCase().includes(S));
      });
    }
    function c() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function y() {
      return r.value ? r.value.validate() : !1;
    }
    function D() {
      r.value && r.value.resetValidation();
    }
    function T() {
      e.clear(), a.value = [];
    }
    return z(() => {
      c(), e.registerBehaviourCallbacks(y, D);
    }), (F, p) => (m(), C(o(ie), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (S) => e.modelValueOnUpdate(S)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(l).fieldOutlined,
      filled: o(l).fieldFilled,
      standout: o(l).fieldStandout,
      borderless: o(l).fieldBorderless,
      rounded: o(l).fieldRounded,
      square: o(l).fieldSquare,
      dense: o(l).fieldDense,
      hideBottomSpace: o(l).fieldHideBottomSpace,
      color: o(l).fieldColor,
      bgColor: o(l).fieldBgColor,
      class: $(e.field.cssClass),
      "lazy-rules": d,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: T,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function Z() {
  return 20;
}
const et = /* @__PURE__ */ B({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.field.componentOptions.associationDisplayComponent, a = e.functionsProvider.getFormFactoryInstance(), r = a.formSettings, i = a.formStyle, s = r.rulesBehaviour === "lazy", l = b([]), d = b({
      limit: Z(),
      offset: 0
    }), u = b();
    function c(p, S) {
      const h = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), S(() => {
        const P = e.functionsProvider.getForm();
        h({
          resourceName: P.resourceName,
          resourceId: P.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: P.context
        }).then((w) => {
          l.value = w.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function y() {
      le(() => {
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
    function D() {
      return u.value ? u.value.validate() : !1;
    }
    function T() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return z(() => {
      y(), e.registerBehaviourCallbacks(D, T);
    }), (p, S) => (m(), C(o(ie), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (h) => e.modelValueOnUpdate(h)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(i).fieldOutlined,
      filled: o(i).fieldFilled,
      standout: o(i).fieldStandout,
      borderless: o(i).fieldBorderless,
      rounded: o(i).fieldRounded,
      square: o(i).fieldSquare,
      dense: o(i).fieldDense,
      hideBottomSpace: o(i).fieldHideBottomSpace,
      color: o(i).fieldColor,
      bgColor: o(i).fieldBgColor,
      class: $(e.field.cssClass),
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
      onClear: F,
      onFilter: c
    }, {
      options: k((h) => [
        (m(), C(H(o(t)), re(ae({
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), tt = /* @__PURE__ */ B({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.field.componentOptions.associationDisplayComponent, a = e.functionsProvider.getFormFactoryInstance(), r = a.formSettings, i = a.formStyle, s = r.rulesBehaviour === "lazy", l = b([]), d = b({
      limit: Z(),
      offset: 0
    }), u = b();
    function c(p, S) {
      const h = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), S(() => {
        const P = e.functionsProvider.getForm();
        h({
          resourceName: P.resourceName,
          resourceId: P.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: P.context
        }).then((w) => {
          l.value = w.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function y() {
      le(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (l.value = p.map(
          (S, h) => ({
            label: e.field.associationData.label[h] ?? "???",
            value: S,
            data: e.field.associationData.data[h]
          })
        ));
      });
    }
    function D() {
      return u.value ? u.value.validate() : !1;
    }
    function T() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return z(() => {
      y(), e.registerBehaviourCallbacks(D, T);
    }), (p, S) => (m(), C(o(ie), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (h) => e.modelValueOnUpdate(h)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(i).fieldOutlined,
      filled: o(i).fieldFilled,
      standout: o(i).fieldStandout,
      borderless: o(i).fieldBorderless,
      rounded: o(i).fieldRounded,
      square: o(i).fieldSquare,
      dense: o(i).fieldDense,
      hideBottomSpace: o(i).fieldHideBottomSpace,
      color: o(i).fieldColor,
      bgColor: o(i).fieldBgColor,
      class: $(e.field.cssClass),
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
      onClear: F,
      onFilter: c
    }, {
      options: k((h) => [
        (m(), C(H(o(t)), re(ae({
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), de = /* @__PURE__ */ B({
  __name: "StringField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = b();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(M), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(r).fieldOutlined,
      filled: o(r).fieldFilled,
      standout: o(r).fieldStandout,
      borderless: o(r).fieldBorderless,
      rounded: o(r).fieldRounded,
      square: o(r).fieldSquare,
      dense: o(r).fieldDense,
      hideBottomSpace: o(r).fieldHideBottomSpace,
      color: o(r).fieldColor,
      bgColor: o(r).fieldBgColor,
      class: $(e.field.cssClass),
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
}), nt = /* @__PURE__ */ B({
  __name: "NumberField",
  props: {
    modelValue: {},
    field: {},
    functionsProvider: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = b();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(M), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(r).fieldOutlined,
      filled: o(r).fieldFilled,
      standout: o(r).fieldStandout,
      borderless: o(r).fieldBorderless,
      rounded: o(r).fieldRounded,
      square: o(r).fieldSquare,
      dense: o(r).fieldDense,
      hideBottomSpace: o(r).fieldHideBottomSpace,
      color: o(r).fieldColor,
      bgColor: o(r).fieldBgColor,
      class: $(e.field.cssClass),
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
class se {
  constructor(e, t, a, r) {
    x(this, "resourceName");
    x(this, "formSettings");
    x(this, "formStyle");
    x(this, "actionComponent");
    x(this, "orphanErrorsComponent");
    x(this, "sectionComponent");
    x(this, "wrapperResetComponent");
    x(this, "associationDisplayComponent");
    x(this, "associationDisplayRecord");
    this.resourceName = e, this.formSettings = {
      ...a,
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...r,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = t.actionComponent ?? N.getGlobalActionComponent(), this.orphanErrorsComponent = t.orphanErrorsComponent ?? N.getGlobalOrphanErrorComponent(), this.sectionComponent = t.sectionComponent ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = t.wrapperResetComponent ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = t.associationDisplayComponent ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = t.associationDisplayRecord ?? N.getGlobalAssociationDisplayRecord();
  }
  getForm(e, t, a) {
    const r = [];
    return e.form.sections.forEach((s) => {
      const l = [];
      s.fields.forEach((u) => {
        const c = se.getFieldComponentByFormFieldType(
          u.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayRecord[u.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, D = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint,
          prefix: u.prefix,
          suffix: u.suffix,
          readonly: e.form.readonly ?? s.readonly ?? u.readonly,
          cssClass: u.css_class,
          staticSelectOptions: u.static_select_options,
          associationData: u.field_association_data,
          rules: u.rules,
          clearable: e.form.clearable,
          component: c,
          componentOptions: y
        };
        l.push(D);
      });
      const d = {
        label: s.label,
        icon: s.icon,
        cssClass: s.css_class,
        readonly: e.form.readonly ?? s.readonly,
        fields: l
      };
      r.push(d);
    }), {
      sections: r,
      resourceName: e.form.resource_name,
      resourceId: t,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      readonly: e.form.readonly,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      context: a
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: de,
      text: de,
      number: nt,
      date: Ae,
      datetime: Ye,
      selectString: Me,
      selectBelongsTo: et,
      selectHasMany: tt,
      checkbox: Ze,
      object: Ke
    }[e];
  }
}
function ot(n, e, t) {
  const a = t.getFormFactoryInstance().formSettings, r = t.getForm(), i = (u, c, y) => u[c] ? y ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
    v.formatDate(
      v.extractDate(u, r.backendDateFormat),
      a.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(fe(a.dateFormat));
      break;
    case "datetime":
      l.push(fe(a.datetimeFormat));
      break;
  }
  return n.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        l.push(rt());
        break;
      case "absence":
        l.push(lt());
        break;
      case "acceptance":
        l.push(it());
        break;
      case "inclusion":
        l.push(ge(c.including));
        break;
      case "exclusion":
        l.push(at(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        d.push("allowNull");
        break;
      case "allowBlank":
        d.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(ct());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          dt(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          ft(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          mt(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          pt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          gt(i(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          ht(
            i(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(yt());
        break;
      case "numberNumericOnly":
        l.push(bt());
        break;
      case "numberEvenOnly":
        l.push(vt());
        break;
      case "numberOddOnly":
        l.push(_t());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Ft(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          St(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ct(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          xt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Vt(
            i(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          kt(i(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Dt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Bt(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Tt(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Ot(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Rt(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          qt(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Pt(
            i(c, "equal_to", !0),
            a.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Et(
            i(c, "other_than", !0),
            a.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return ut(l);
      case "allowNull":
        return st(l);
    }
  }) : l;
}
function rt() {
  return (n) => !!n || "Ce champ est requis";
}
function ge(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function at(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${ge.toString()}`
  );
}
function lt() {
  return (n) => !n || "Ce champ doit être vide";
}
function it() {
  return (n) => !!n || "Doit être accepté";
}
function st(n) {
  return (e) => (e === null || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function ut(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function ct() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function dt(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function ft(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function mt(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function pt(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function gt(n, e) {
  return (t) => {
    const a = n();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function ht(n, e) {
  return (t) => {
    const a = n();
    return Number(t) !== a || `Doit être différent de ${n}`;
  };
}
function yt() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function bt() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function vt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function _t() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ft(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function St(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Ct(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function xt(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const a = n(), r = e();
    return String(t).length >= a && String(t).length <= r || `Entre ${a} et ${r}`;
  };
}
function kt(n, e) {
  return (t) => {
    const a = n();
    return String(t) === a || `Égale à ${a}`;
  };
}
function Vt(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Bt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Tt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r <= i || `Inf. ou égal à ${a}`;
  };
}
function Ot(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r < i || `Inf. à ${a}`;
  };
}
function Rt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r >= i || `Sup. ou égal à ${a}`;
  };
}
function qt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r > i || `Sup. à ${a}`;
  };
}
function Pt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r === i || `Égale à ${r}`;
  };
}
function Et(n, e) {
  return (t) => {
    const a = n();
    return v.extractDate(String(t), e) !== v.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function fe(n) {
  return (e) => e == null || e === "" ? !0 : Nt(e, n) || `Date invalide. Format : ${n}`;
}
function Nt(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = v.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : v.formatDate(t, e) === n;
}
const $t = {
  computeServerRules: ot
}, zt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, wt = ["index"], me = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {},
    functionsProvider: {},
    context: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let a = () => !0, r = () => {
    };
    const i = D(), s = b(), l = b([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = u(s.value), le(() => {
        P();
      });
    }
    function u(f) {
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : v.formatDate(
            v.extractDate(
              String(f),
              t.functionsProvider.getForm().backendDateFormat
            ),
            t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : v.formatDate(
            v.extractDate(
              String(f),
              t.functionsProvider.getForm().backendDatetimeFormat
            ),
            t.functionsProvider.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return f;
    }
    function c(f) {
      switch (t.field.type) {
        case "date":
          return f == null || f === "" ? null : v.formatDate(
            v.extractDate(
              String(f),
              t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
            ),
            t.functionsProvider.getForm().backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : v.formatDate(
            v.extractDate(
              String(f),
              t.functionsProvider.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            t.functionsProvider.getForm().backendDatetimeFormat
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
    }
    function D() {
      return $t.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function T(f) {
      s.value = f;
    }
    function F() {
      return o(s);
    }
    function p() {
      return c(o(s));
    }
    function S(f) {
      l.value = f;
    }
    function h() {
      return a();
    }
    function P() {
      return r();
    }
    function w(f, U) {
      a = f, r = U;
    }
    return e({
      reset: d,
      clear: y,
      validate: h,
      resetValidation: P,
      getValueDeserialized: p,
      getValueSerialized: F,
      setupBackendErrors: S
    }), z(() => {
      var U;
      d();
      const f = (U = De()) == null ? void 0 : U.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, U) => (m(), R("div", null, [
      oe(f.$slots, "default", {
        is: t.field.component,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: y,
        getValueDeserialized: p,
        getValueSerialized: F,
        validate: h,
        modelValueOnUpdate: T,
        registerBehaviourCallbacks: w
      }, () => [
        (m(), C(H(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: y,
          getValueDeserialized: p,
          getValueSerialized: F,
          validate: h,
          modelValueOnUpdate: T,
          registerBehaviourCallbacks: w
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        l.value.length > 0 ? (m(), R("div", zt, [
          (m(!0), R(Q, null, J(l.value, (ee, te) => (m(), R("div", {
            index: te,
            class: "flex column"
          }, L(ee), 9, wt))), 256))
        ])) : G("", !0)
      ])
    ]));
  }
}), It = {
  key: 0,
  class: "flex column"
}, Ht = /* @__PURE__ */ B({
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
    onSubmitFail: {},
    onSubmitSuccess: {},
    context: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let a = null;
    const r = Object.freeze(
      new se(
        t.resourceName,
        F(),
        t.formSettings,
        t.formStyle
      )
    ), i = {
      registerRef: U,
      getDataByFieldName: ee,
      getFieldDataByFieldName: te,
      getFormFactoryInstance: ue,
      getForm: ce,
      getAssociationDataCallback: he
    }, s = b(/* @__PURE__ */ new Map()), l = b(), d = b(!1), u = b(!1), c = b("create"), y = b({});
    async function D() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        r.getForm(
          a,
          t.resourceId,
          t.context
        )
      ), t.resourceId && (c.value = "edit"), d.value = !0;
    }
    async function T() {
      var E, j;
      if (!S())
        return;
      u.value = !0, f();
      const g = p(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        context: t.context
      });
      if (_.success)
        y.value = {}, c.value === "create" && (c.value = "edit"), a && _.resource_data && (a.resource_data = _.resource_data), h(), (j = t.onSubmitSuccess) == null || j.call(t);
      else {
        y.value = {};
        const V = [];
        [...s.value].forEach((q) => {
          const Y = _.errors[q[0]];
          Y && (q[1].setupBackendErrors(Y), V.push(q[0]));
        }), Object.entries(_.errors).forEach((q) => {
          V.includes(q[0]) || (y.value[q[0]] = q[1]);
        }), (E = t.onSubmitFail) == null || E.call(t);
      }
      u.value = !1;
    }
    function F() {
      const g = {}, _ = ke(), E = /* @__PURE__ */ new Map();
      for (const V in _) {
        const q = _[V];
        q && E.set(
          V,
          B({
            setup(Y, { attrs: ve }) {
              return () => q({ ...Y, ...ve });
            }
          })
        );
      }
      return [
        ["actionComponent", "actions", "actionComponent"],
        ["orphanErrorsComponent", "orphan-errors", "orphanErrorsComponent"],
        ["sectionComponent", "sections", "sectionComponent"],
        ["wrapperResetComponent", "wrapper-reset", "wrapperResetComponent"],
        [
          "associationDisplayComponent",
          "association-display",
          "associationDisplayComponent"
        ]
      ].forEach((V) => {
        const q = t[V[0]];
        q && !E.has(V[1]) ? g[V[2]] = q : E.has(V[1]) && (g[V[2]] = E.get(V[1]));
      }), g.associationDisplayRecord = t.associationDisplayRecord, console.log(g), g;
    }
    function p() {
      const g = {};
      return [...s.value].forEach((_) => {
        g[_[0]] = _[1].getValueDeserialized();
      }), g;
    }
    function S() {
      let g = !0;
      return s.value.forEach((_) => {
        if (!_.validate()) {
          g = !1;
          return;
        }
      }), g;
    }
    function h() {
      s.value.forEach((g) => {
        g.reset();
      });
    }
    function P() {
      s.value.forEach((g) => {
        g.clear();
      });
    }
    function w() {
      s.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function f() {
      s.value.forEach((g) => {
        g.setupBackendErrors([]);
      });
    }
    function U(g, _) {
      s.value.set(g, _);
    }
    function ee(g) {
      if (a)
        return a.resource_data[g];
    }
    function te(g) {
      const _ = [...s.value].find((E) => E[0] === g);
      return _ ? _[1].getValueSerialized() : null;
    }
    function ue() {
      return r;
    }
    function ce() {
      return o(l.value);
    }
    function he() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ye() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((_) => {
        (t[_] === null || t[_] === void 0) && console.warn(`Missing props for <Submit64> -> ${_}`);
      });
    }
    function be() {
      return c.value;
    }
    return e({
      getMode: be,
      getFormFactoryInstance: ue,
      getForm: ce,
      validateForm: S,
      resetForm: h,
      clearForm: P,
      resetValidation: w,
      submitForm: T
    }), z(async () => {
      ye(), await D();
    }), (g, _) => d.value && l.value ? (m(), R("div", It, [
      I("div", {
        class: $(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), R(Q, null, J(l.value.sections, (E, j) => (m(), C(H(o(r).sectionComponent), {
          key: j,
          section: E,
          context: t.context,
          "functions-provider": i
        }, {
          default: k(() => [
            (m(!0), R(Q, null, J(E.fields, (V) => (m(), R(Q, {
              key: V.metadata.field_name
            }, [
              g.$slots[V.metadata.field_name] ? (m(), C(me, {
                key: 1,
                field: V,
                context: t.context,
                "functions-provider": i
              }, {
                default: k((q) => [
                  oe(g.$slots, "default", W({ ref_for: !0 }, q))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (m(), C(me, {
                key: 0,
                field: V,
                context: t.context,
                "functions-provider": i
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), C(H(o(r).orphanErrorsComponent), {
        orphanErrors: y.value,
        "functions-provider": i
      }, null, 8, ["orphanErrors"])),
      (m(), C(H(o(r).actionComponent), {
        isLoadingSubmit: u.value,
        submit: T,
        clear: l.value.clearable ? P : void 0,
        reset: l.value.resetable ? h : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : G("", !0);
  }
});
export {
  N as Submit64,
  Ht as Submit64Form
};
