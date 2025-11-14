var ve = Object.defineProperty;
var _e = (n, e, t) => e in n ? ve(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var x = (n, e, t) => _e(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as O, openBlock as m, createElementVNode as I, createVNode as T, createBlock as C, createCommentVNode as U, unref as o, mergeProps as Y, normalizeClass as $, toDisplayString as L, renderSlot as W, resolveComponent as Fe, normalizeProps as oe, guardReactiveProps as re, withCtx as k, createTextVNode as Se, Fragment as Q, renderList as J, ref as b, onMounted as z, watch as Ce, resolveDynamicComponent as H, nextTick as ae, getCurrentInstance as xe, useSlots as De } from "vue";
import { QBtn as A, QIcon as X, QItem as ke, QItemSection as Ve, QItemLabel as Be, QInput as M, QPopupProxy as ne, QDate as pe, QTime as Te, QCheckbox as Oe, QSelect as le, date as v } from "quasar";
const Re = { class: "flex column" }, qe = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Pe = /* @__PURE__ */ V({
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
    return (a, r) => (m(), O("div", Re, [
      I("div", qe, [
        T(o(A), Y(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: r[0] || (r[0] = (i) => e.submit())
        }), null, 16, ["loading"]),
        e.reset ? (m(), C(o(A), Y({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: r[1] || (r[1] = (i) => e.reset())
        }), null, 16, ["loading"])) : U("", !0),
        e.clear ? (m(), C(o(A), Y({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: r[2] || (r[2] = (i) => e.clear())
        }), null, 16, ["loading"])) : U("", !0)
      ])
    ]));
  }
}), Ee = { class: "flex row items-center" }, Ne = { class: "text-body1 text-weight-medium" }, $e = { class: "flex column q-gutter-sm" }, ze = /* @__PURE__ */ V({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance().formStyle;
    return (a, r) => (m(), O("div", {
      class: $(["flex column", e.section.cssClass])
    }, [
      I("div", Ee, [
        e.section.icon ? (m(), C(o(X), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: o(t).fieldColor
        }, null, 8, ["name", "color"])) : U("", !0),
        I("div", Ne, L(e.section.label), 1)
      ]),
      I("div", $e, [
        W(a.$slots, "default")
      ])
    ], 2));
  }
}), we = /* @__PURE__ */ V({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, a) => {
      const r = Fe("q-icon");
      return m(), C(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (i) => e.reset())
      });
    };
  }
}), Ie = /* @__PURE__ */ V({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, a) => (m(), C(o(ke), oe(re(e.itemProps)), {
      default: k(() => [
        T(o(Ve), null, {
          default: k(() => [
            T(o(Be), null, {
              default: k(() => [
                Se(L(e.entry.label), 1)
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
}), Ue = { class: "flex column" }, Ge = /* @__PURE__ */ V({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    functionsProvider: {}
  },
  setup(n) {
    const e = n;
    return (t, a) => (m(), O("div", Ue, [
      (m(!0), O(Q, null, J(e.orphanErrors, (r, i) => (m(), O("div", {
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
    }, this._actionComponent = Pe, this._orphanErrorsComponent = Ge, this._sectionComponent = ze, this._wrapperResetComponent = we, this._associationDisplayComponent = Ie, this._associationDisplayDictonary = {};
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
const Le = { class: "row items-center justify-end" }, He = /* @__PURE__ */ V({
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
    }), (h, D) => (m(), C(o(M), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[1] || (D[1] = (B) => e.modelValueOnUpdate(B)),
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
        T(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            T(o(ne), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                T(o(pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: k(() => [
                    I("div", Le, [
                      T(o(A), {
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
}), Ae = { class: "row items-center justify-end" }, je = { class: "row items-center justify-end" }, Qe = /* @__PURE__ */ V({
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
    function h() {
      return d.value ? d.value.validate() : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    return z(() => {
      e.registerBehaviourCallbacks(h, D);
    }), (B, F) => (m(), C(o(M), {
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
        T(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            T(o(ne), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                T(o(pe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: k(() => [
                    I("div", Ae, [
                      T(o(A), {
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
        T(o(X), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            T(o(ne), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                T(o(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: k(() => [
                    I("div", je, [
                      T(o(A), {
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
}), Ye = { class: "flex column" }, We = {
  key: 0,
  class: "q-field__bottom"
}, Je = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Xe = /* @__PURE__ */ V({
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
    return Ce(
      () => e.modelValue,
      (l) => {
        for (const d of e.rules)
          if (t.value = d(l), t.value !== !0)
            break;
      }
    ), z(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (l, d) => (m(), O("div", Ye, [
      T(o(Oe), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(r).fieldDense,
        color: o(r).fieldColor,
        "aria-readonly": e.field.readonly,
        class: $([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (m(), O("div", We, L(e.field.hint), 1)) : U("", !0),
      t.value !== !0 ? (m(), O("div", Je, L(t.value), 1)) : U("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ V({
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
}), Ke = /* @__PURE__ */ V({
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
        a.value = t.value.filter((y) => y.label.toLowerCase().includes(S));
      });
    }
    function c() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function h() {
      return r.value ? r.value.validate() : !1;
    }
    function D() {
      r.value && r.value.resetValidation();
    }
    function B() {
      e.clear(), a.value = [];
    }
    return z(() => {
      c(), e.registerBehaviourCallbacks(h, D);
    }), (F, p) => (m(), C(o(le), {
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
      onClear: B,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function Z() {
  return 20;
}
const Me = /* @__PURE__ */ V({
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
      const y = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), S(() => {
        const P = e.functionsProvider.getForm();
        y({
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
    function h() {
      ae(() => {
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
    function B() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return z(() => {
      h(), e.registerBehaviourCallbacks(D, B);
    }), (p, S) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (y) => e.modelValueOnUpdate(y)),
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
      options: k((y) => [
        (m(), C(H(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: y.opt,
          itemProps: y.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), et = /* @__PURE__ */ V({
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
      const y = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), S(() => {
        const P = e.functionsProvider.getForm();
        y({
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
    function h() {
      ae(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (l.value = p.map(
          (S, y) => ({
            label: e.field.associationData.label[y] ?? "???",
            value: S,
            data: e.field.associationData.data[y]
          })
        ));
      });
    }
    function D() {
      return u.value ? u.value.validate() : !1;
    }
    function B() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return z(() => {
      h(), e.registerBehaviourCallbacks(D, B);
    }), (p, S) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (y) => e.modelValueOnUpdate(y)),
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
      options: k((y) => [
        (m(), C(H(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: y.opt,
          itemProps: y.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), de = /* @__PURE__ */ V({
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
      "onUpdate:modelValue": c[0] || (c[0] = (h) => e.modelValueOnUpdate(h)),
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
}), tt = /* @__PURE__ */ V({
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
      "onUpdate:modelValue": c[0] || (c[0] = (h) => e.modelValueOnUpdate(h)),
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
class ie {
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
        const c = ie.getFieldComponentByFormFieldType(
          u.field_type
        ), h = {
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
          componentOptions: h
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
      number: tt,
      date: He,
      datetime: Qe,
      selectString: Ke,
      selectBelongsTo: Me,
      selectHasMany: et,
      checkbox: Xe,
      object: Ze
    }[e];
  }
}
function nt(n, e, t) {
  const a = t.getFormFactoryInstance().formSettings, r = t.getForm(), i = (u, c, h) => u[c] ? h ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
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
        l.push(ot());
        break;
      case "absence":
        l.push(at());
        break;
      case "acceptance":
        l.push(lt());
        break;
      case "inclusion":
        l.push(ge(c.including));
        break;
      case "exclusion":
        l.push(rt(c.excluding));
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
        l.push(ut());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          ct(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          dt(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          ft(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          mt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          pt(i(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          gt(
            i(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(yt());
        break;
      case "numberNumericOnly":
        l.push(ht());
        break;
      case "numberEvenOnly":
        l.push(bt());
        break;
      case "numberOddOnly":
        l.push(vt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          _t(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Ft(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          St(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Ct(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          kt(
            i(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Dt(i(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          xt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Vt(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Bt(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Tt(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Ot(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Rt(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          qt(
            i(c, "equal_to", !0),
            a.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Pt(
            i(c, "other_than", !0),
            a.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return st(l);
      case "allowNull":
        return it(l);
    }
  }) : l;
}
function ot() {
  return (n) => !!n || "Ce champ est requis";
}
function ge(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function rt(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${ge.toString()}`
  );
}
function at() {
  return (n) => !n || "Ce champ doit être vide";
}
function lt() {
  return (n) => !!n || "Doit être accepté";
}
function it(n) {
  return (e) => (e === null || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function st(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function ut() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function ct(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function dt(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ft(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function mt(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function pt(n, e) {
  return (t) => {
    const a = n();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function gt(n, e) {
  return (t) => {
    const a = n();
    return Number(t) !== a || `Doit être différent de ${n}`;
  };
}
function yt() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function ht() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function bt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function vt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function _t(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Ft(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function St(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ct(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function xt(n, e) {
  return (t) => {
    const a = n(), r = e();
    return String(t).length >= a && String(t).length <= r || `Entre ${a} et ${r}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const a = n();
    return String(t) === a || `Égale à ${a}`;
  };
}
function kt(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Vt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Bt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r <= i || `Inf. ou égal à ${a}`;
  };
}
function Tt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r < i || `Inf. à ${a}`;
  };
}
function Ot(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r >= i || `Sup. ou égal à ${a}`;
  };
}
function Rt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r > i || `Sup. à ${a}`;
  };
}
function qt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r === i || `Égale à ${r}`;
  };
}
function Pt(n, e) {
  return (t) => {
    const a = n();
    return v.extractDate(String(t), e) !== v.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function fe(n) {
  return (e) => e == null || e === "" ? !0 : Et(e, n) || `Date invalide. Format : ${n}`;
}
function Et(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = v.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : v.formatDate(t, e) === n;
}
const Nt = {
  computeServerRules: nt
}, $t = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, zt = ["index"], me = /* @__PURE__ */ V({
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
      ), s.value = u(s.value), ae(() => {
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
    function h() {
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
      return Nt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function B(f) {
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
    function y() {
      return a();
    }
    function P() {
      return r();
    }
    function w(f, G) {
      a = f, r = G;
    }
    return e({
      reset: d,
      clear: h,
      validate: y,
      resetValidation: P,
      getValueDeserialized: p,
      getValueSerialized: F,
      setupBackendErrors: S
    }), z(() => {
      var G;
      d();
      const f = (G = xe()) == null ? void 0 : G.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, G) => (m(), O("div", null, [
      W(f.$slots, "default", {
        is: t.field.component,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: h,
        getValueDeserialized: p,
        getValueSerialized: F,
        validate: y,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: w
      }, () => [
        (m(), C(H(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: h,
          getValueDeserialized: p,
          getValueSerialized: F,
          validate: y,
          modelValueOnUpdate: B,
          registerBehaviourCallbacks: w
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        l.value.length > 0 ? (m(), O("div", $t, [
          (m(!0), O(Q, null, J(l.value, (ee, te) => (m(), O("div", {
            index: te,
            class: "flex column"
          }, L(ee), 9, zt))), 256))
        ])) : U("", !0)
      ])
    ]));
  }
}), wt = {
  key: 0,
  class: "flex column"
}, Lt = /* @__PURE__ */ V({
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
      new ie(
        t.resourceName,
        F(),
        t.formSettings,
        t.formStyle
      )
    ), i = {
      registerRef: G,
      getDataByFieldName: ee,
      getFieldDataByFieldName: te,
      getFormFactoryInstance: se,
      getForm: ue,
      getAssociationDataCallback: ye
    }, s = b(/* @__PURE__ */ new Map()), l = b(), d = b(!1), u = b(!1), c = b("create"), h = b({});
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
    async function B() {
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
        h.value = {}, c.value === "create" && (c.value = "edit"), a && _.resource_data && (a.resource_data = _.resource_data), y(), (j = t.onSubmitSuccess) == null || j.call(t);
      else {
        h.value = {};
        const q = [];
        [...s.value].forEach((R) => {
          const ce = _.errors[R[0]];
          ce && (R[1].setupBackendErrors(ce), q.push(R[0]));
        }), Object.entries(_.errors).forEach((R) => {
          q.includes(R[0]) || (h.value[R[0]] = R[1]);
        }), (E = t.onSubmitFail) == null || E.call(t);
      }
      u.value = !1;
    }
    function F() {
      const g = {}, _ = De(), E = /* @__PURE__ */ new Map();
      for (const q in _) {
        const R = _[q];
        R && E.set(
          q,
          V(() => () => R())
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
      ].forEach((q) => {
        const R = t[q[0]];
        R && !E.has(q[1]) && (g[q[2]] = R);
      }), g.associationDisplayRecord = t.associationDisplayRecord, g;
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
    function y() {
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
    function G(g, _) {
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
    function se() {
      return r;
    }
    function ue() {
      return o(l.value);
    }
    function ye() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function he() {
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
      getFormFactoryInstance: se,
      getForm: ue,
      validateForm: S,
      resetForm: y,
      clearForm: P,
      resetValidation: w,
      submitForm: B
    }), z(async () => {
      he(), await D();
    }), (g, _) => d.value && l.value ? (m(), O("div", wt, [
      I("div", {
        class: $(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), O(Q, null, J(l.value.sections, (E, j) => (m(), C(H(o(r).sectionComponent), {
          key: j,
          section: E,
          context: t.context,
          "functions-provider": i
        }, {
          default: k(() => [
            (m(!0), O(Q, null, J(E.fields, (q) => (m(), O(Q, {
              key: q.metadata.field_name
            }, [
              g.$slots[q.metadata.field_name] ? (m(), C(me, {
                key: 1,
                field: q,
                context: t.context,
                "functions-provider": i
              }, {
                default: k((R) => [
                  W(g.$slots, "default", Y({ ref_for: !0 }, R))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (m(), C(me, {
                key: 0,
                field: q,
                context: t.context,
                "functions-provider": i
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), C(H(o(r).orphanErrorsComponent), {
        orphanErrors: h.value,
        "functions-provider": i
      }, null, 8, ["orphanErrors"])),
      (m(), C(H(o(r).actionComponent), {
        isLoadingSubmit: u.value,
        submit: B,
        clear: l.value.clearable ? P : void 0,
        reset: l.value.resetable ? y : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      g.$slots.more_actions ? W(g.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : U("", !0)
    ])) : U("", !0);
  }
});
export {
  N as Submit64,
  Lt as Submit64Form
};
