var he = Object.defineProperty;
var ve = (n, e, t) => e in n ? he(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => ve(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as O, createElementBlock as T, openBlock as m, createElementVNode as z, Fragment as A, renderList as J, toDisplayString as G, createVNode as B, createBlock as C, createCommentVNode as E, unref as o, mergeProps as W, normalizeClass as q, renderSlot as K, resolveComponent as _e, normalizeProps as oe, guardReactiveProps as re, withCtx as D, createTextVNode as Fe, ref as h, onMounted as P, watch as Se, resolveDynamicComponent as j, nextTick as ae, getCurrentInstance as Ce } from "vue";
import { QBtn as H, QIcon as X, QItem as xe, QItemSection as De, QItemLabel as ke, QInput as ee, QPopupProxy as ne, QDate as me, QTime as Ve, QCheckbox as Be, QSelect as le, date as v } from "quasar";
const Te = { class: "flex column" }, Oe = { class: "flex column" }, Re = { class: "flex row items-center no-wrap q-pt-sm" }, qe = /* @__PURE__ */ O({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    orphelanErrors: {},
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
    return (a, r) => (m(), T("div", Te, [
      z("div", Oe, [
        (m(!0), T(A, null, J(e.orphelanErrors, (i, s) => (m(), T("div", {
          key: s,
          class: "q-field--error q-field__bottom text-negative"
        }, G(s) + " : " + G(i.join(",")), 1))), 128))
      ]),
      z("div", Re, [
        B(o(H), W(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: r[0] || (r[0] = (i) => e.submit())
        }), null, 16, ["loading"]),
        e.reset ? (m(), C(o(H), W({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: r[1] || (r[1] = (i) => e.reset())
        }), null, 16, ["loading"])) : E("", !0),
        e.clear ? (m(), C(o(H), W({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: r[2] || (r[2] = (i) => e.clear())
        }), null, 16, ["loading"])) : E("", !0)
      ])
    ]));
  }
}), Pe = { class: "flex row items-center" }, Ne = { class: "text-body1 text-weight-medium" }, $e = { class: "flex column q-gutter-sm" }, ze = /* @__PURE__ */ O({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance().formStyle;
    return (a, r) => (m(), T("div", {
      class: q(["flex column", e.section.cssClass])
    }, [
      z("div", Pe, [
        e.section.icon ? (m(), C(o(X), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: o(t).fieldColor
        }, null, 8, ["name", "color"])) : E("", !0),
        z("div", Ne, G(e.section.label), 1)
      ]),
      z("div", $e, [
        K(a.$slots, "default")
      ])
    ], 2));
  }
}), we = /* @__PURE__ */ O({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, a) => {
      const r = _e("q-icon");
      return m(), C(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (i) => e.reset())
      });
    };
  }
}), Ee = /* @__PURE__ */ O({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, a) => (m(), C(o(xe), oe(re(e.itemProps)), {
      default: D(() => [
        B(o(De), null, {
          default: D(() => [
            B(o(ke), null, {
              default: D(() => [
                Fe(G(e.entry.label), 1)
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
}), M = class M {
  constructor() {
    k(this, "_formSettings");
    k(this, "_formStyle");
    k(this, "_actionComponent");
    k(this, "_sectionComponent");
    k(this, "_wrapperResetComponent");
    k(this, "_associationDisplayComponent");
    k(this, "_associationDisplayDictonary");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0
    }, this._formStyle = {
      fieldOutlined: !0,
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
    }, this._actionComponent = qe, this._sectionComponent = ze, this._wrapperResetComponent = we, this._associationDisplayComponent = Ee, this._associationDisplayDictonary = {};
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
k(M, "_instance", new M());
let $ = M;
const Ie = { class: "row items-center justify-end" }, Ue = /* @__PURE__ */ O({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = h(), l = h();
    function d() {
      s.value && s.value.hide();
    }
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(u, c);
    }), (y, x) => (m(), C(o(ee), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[1] || (x[1] = (V) => e.modelValueOnUpdate(V)),
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
      class: q(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        B(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(ne), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[0] || (x[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: D(() => [
                    z("div", Ie, [
                      B(o(H), {
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
}), Le = { class: "row items-center justify-end" }, Ge = { class: "row items-center justify-end" }, He = /* @__PURE__ */ O({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = h(), l = h(), d = h();
    function u() {
      s.value && s.value.hide();
    }
    function c() {
      l.value && l.value.hide();
    }
    function y() {
      return d.value ? d.value.validate() : !1;
    }
    function x() {
      d.value && d.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(y, x);
    }), (V, F) => (m(), C(o(ee), {
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
      class: q(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        B(o(X), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(ne), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: D(() => [
                    z("div", Le, [
                      B(o(H), {
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
        B(o(X), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(ne), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(Ve), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: D(() => [
                    z("div", Ge, [
                      B(o(H), {
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
}), Ae = { class: "flex column" }, je = {
  key: 0,
  class: "q-field__bottom"
}, Qe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ye = /* @__PURE__ */ O({
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
    const e = n, t = h(!0), r = e.functionsProvider.getFormFactoryInstance().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return Se(
      () => e.modelValue,
      (l) => {
        for (const d of e.rules)
          if (t.value = d(l), t.value !== !0)
            break;
      }
    ), P(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (l, d) => (m(), T("div", Ae, [
      B(o(Be), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(r).fieldDense,
        color: o(r).fieldColor,
        "aria-readonly": e.field.readonly,
        class: q([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (m(), T("div", je, G(e.field.hint), 1)) : E("", !0),
      t.value !== !0 ? (m(), T("div", Qe, G(t.value), 1)) : E("", !0)
    ]));
  }
}), We = /* @__PURE__ */ O({
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
}), Je = /* @__PURE__ */ O({
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
    const e = n, t = h([]), a = h([]), r = h(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, l = i.formStyle, d = s.rulesBehaviour === "lazy";
    function u(F, p) {
      if (F === "") {
        p(() => {
          a.value = [...t.value];
        });
        return;
      }
      p(() => {
        const _ = F.toLowerCase();
        a.value = t.value.filter((b) => b.label.toLowerCase().includes(_));
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
    function x() {
      r.value && r.value.resetValidation();
    }
    function V() {
      e.clear(), a.value = [];
    }
    return P(() => {
      c(), e.registerBehaviourCallbacks(y, x);
    }), (F, p) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (_) => e.modelValueOnUpdate(_)),
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
      class: q(e.field.cssClass),
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
      onClear: V,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function Z() {
  return 20;
}
const Ke = /* @__PURE__ */ O({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, a = e.functionsProvider.getFormFactoryInstance(), r = a.formSettings, i = a.formStyle, s = r.rulesBehaviour === "lazy", l = h([]), d = h({
      limit: Z(),
      offset: 0
    }), u = h();
    function c(p, _) {
      const b = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), _(() => {
        const R = e.functionsProvider.getForm();
        b({
          resourceName: R.resourceName,
          resourceId: R.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: R.context
        }).then((w) => {
          l.value = w.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function y() {
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
    function x() {
      return u.value ? u.value.validate() : !1;
    }
    function V() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return P(() => {
      y(), e.registerBehaviourCallbacks(x, V);
    }), (p, _) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: q(e.field.cssClass),
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
      options: D((b) => [
        (m(), C(j(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Xe = /* @__PURE__ */ O({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, a = e.functionsProvider.getFormFactoryInstance(), r = a.formSettings, i = a.formStyle, s = r.rulesBehaviour === "lazy", l = h([]), d = h({
      limit: Z(),
      offset: 0
    }), u = h();
    function c(p, _) {
      const b = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: Z(),
        offset: 0
      }), _(() => {
        const R = e.functionsProvider.getForm();
        b({
          resourceName: R.resourceName,
          resourceId: R.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: R.context
        }).then((w) => {
          l.value = w.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function y() {
      ae(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (l.value = p.map(
          (_, b) => ({
            label: e.field.associationData.label[b] ?? "???",
            value: _,
            data: e.field.associationData.data[b]
          })
        ));
      });
    }
    function x() {
      return u.value ? u.value.validate() : !1;
    }
    function V() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return P(() => {
      y(), e.registerBehaviourCallbacks(x, V);
    }), (p, _) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: q(e.field.cssClass),
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
      options: D((b) => [
        (m(), C(j(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ce = /* @__PURE__ */ O({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = h();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(ee), {
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
      class: q(e.field.cssClass),
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
}), Ze = /* @__PURE__ */ O({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), a = t.formSettings, r = t.formStyle, i = a.rulesBehaviour === "lazy", s = h();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(ee), {
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
      class: q(e.field.cssClass),
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
  constructor(e, t, a, r, i, s, l, d) {
    k(this, "resourceName");
    k(this, "formSettings");
    k(this, "formStyle");
    k(this, "actionComponent");
    k(this, "sectionComponent");
    k(this, "wrapperResetComponent");
    k(this, "associationDisplayComponent");
    k(this, "associationDisplayRecord");
    this.resourceName = e, this.formSettings = {
      ...t,
      ...$.getGlobalFormSetting()
    }, this.formStyle = {
      ...a,
      ...$.getGlobalFormStyle()
    }, this.actionComponent = r ?? $.getGlobalActionComponent(), this.sectionComponent = i ?? $.getGlobalSectionComponent(), this.wrapperResetComponent = s ?? $.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l ?? $.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? $.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ce,
      text: ce,
      number: Ze,
      date: Ue,
      datetime: He,
      selectString: Je,
      selectBelongsTo: Ke,
      selectHasMany: Xe,
      checkbox: Ye,
      object: We
    }[e];
  }
  getForm(e, t, a) {
    const r = [];
    return e.form.sections.forEach((s) => {
      const l = [];
      s.fields.forEach((u) => {
        const c = ie.getFieldComponentByFormFieldType(
          u.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayRecord[u.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, x = {
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
        l.push(x);
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
}
function Me(n, e, t) {
  const a = t.getFormFactoryInstance().formSettings, r = t.getForm(), i = (u, c, y) => u[c] ? y ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
    v.formatDate(
      v.extractDate(u, r.backendDateFormat),
      a.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(de(a.dateFormat));
      break;
    case "datetime":
      l.push(de(a.datetimeFormat));
      break;
  }
  return n.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        l.push(et());
        break;
      case "absence":
        l.push(nt());
        break;
      case "acceptance":
        l.push(ot());
        break;
      case "inclusion":
        l.push(pe(c.including));
        break;
      case "exclusion":
        l.push(tt(c.excluding));
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
        l.push(lt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          it(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          st(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          ut(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          ct(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          dt(i(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          ft(
            i(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(mt());
        break;
      case "numberNumericOnly":
        l.push(pt());
        break;
      case "numberEvenOnly":
        l.push(gt());
        break;
      case "numberOddOnly":
        l.push(yt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          bt(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          ht(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          vt(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          _t(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Ct(
            i(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          St(i(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ft(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          xt(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Dt(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          kt(
            i(c, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Vt(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Bt(
            i(c, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Tt(
            i(c, "equal_to", !0),
            a.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Ot(
            i(c, "other_than", !0),
            a.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return at(l);
      case "allowNull":
        return rt(l);
    }
  }) : l;
}
function et() {
  return (n) => !!n || "Ce champ est requis";
}
function pe(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function tt(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${pe.toString()}`
  );
}
function nt() {
  return (n) => !n || "Ce champ doit être vide";
}
function ot() {
  return (n) => !!n || "Doit être accepté";
}
function rt(n) {
  return (e) => (e === null || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function at(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function lt() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function it(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function st(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ut(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ct(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function dt(n, e) {
  return (t) => {
    const a = n();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function ft(n, e) {
  return (t) => {
    const a = n();
    return Number(t) !== a || `Doit être différent de ${n}`;
  };
}
function mt() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function pt() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function gt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function yt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function bt(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ht(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function vt(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function _t(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Ft(n, e) {
  return (t) => {
    const a = n(), r = e();
    return String(t).length >= a && String(t).length <= r || `Entre ${a} et ${r}`;
  };
}
function St(n, e) {
  return (t) => {
    const a = n();
    return String(t) === a || `Égale à ${a}`;
  };
}
function Ct(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function xt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r <= i || `Inf. ou égal à ${a}`;
  };
}
function kt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r < i || `Inf. à ${a}`;
  };
}
function Vt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r >= i || `Sup. ou égal à ${a}`;
  };
}
function Bt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r > i || `Sup. à ${a}`;
  };
}
function Tt(n, e) {
  return (t) => {
    const a = n(), r = v.extractDate(String(t), e), i = v.extractDate(a, e);
    return r === i || `Égale à ${r}`;
  };
}
function Ot(n, e) {
  return (t) => {
    const a = n();
    return v.extractDate(String(t), e) !== v.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function de(n) {
  return (e) => e == null || e === "" ? !0 : Rt(e, n) || `Date invalide. Format : ${n}`;
}
function Rt(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = v.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : v.formatDate(t, e) === n;
}
const qt = {
  computeServerRules: Me
}, Pt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Nt = ["index"], fe = /* @__PURE__ */ O({
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
    const i = x(), s = h(), l = h([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = u(s.value), ae(() => {
        R();
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
    function x() {
      return qt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function V(f) {
      s.value = f;
    }
    function F() {
      return o(s);
    }
    function p() {
      return c(o(s));
    }
    function _(f) {
      l.value = f;
    }
    function b() {
      return a();
    }
    function R() {
      return r();
    }
    function w(f, I) {
      a = f, r = I;
    }
    return e({
      reset: d,
      clear: y,
      validate: b,
      resetValidation: R,
      getValueDeserialized: p,
      getValueSerialized: F,
      setupBackendErrors: _
    }), P(() => {
      var I;
      d();
      const f = (I = Ce()) == null ? void 0 : I.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, I) => (m(), T("div", null, [
      K(f.$slots, "default", {
        is: t.field.component,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: y,
        getValueDeserialized: p,
        getValueSerialized: F,
        validate: b,
        modelValueOnUpdate: V,
        registerBehaviourCallbacks: w
      }, () => [
        (m(), C(j(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: y,
          getValueDeserialized: p,
          getValueSerialized: F,
          validate: b,
          modelValueOnUpdate: V,
          registerBehaviourCallbacks: w
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        l.value.length > 0 ? (m(), T("div", Pt, [
          (m(!0), T(A, null, J(l.value, (te, Q) => (m(), T("div", {
            index: Q,
            class: "flex column"
          }, G(te), 9, Nt))), 256))
        ])) : E("", !0)
      ])
    ]));
  }
}), $t = {
  key: 0,
  class: "flex column"
}, It = /* @__PURE__ */ O({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    formStyle: {},
    sectionComponent: {},
    actionComponent: {},
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
        t.formSettings,
        t.formStyle,
        t.actionComponent,
        t.sectionComponent,
        t.wrapperResetComponent,
        t.associationDisplayComponent,
        t.associationDisplayRecord
      )
    ), i = {
      registerRef: f,
      getDataByFieldName: I,
      getFieldDataByFieldName: te,
      getFormFactoryInstance: Q,
      getForm: se,
      getAssociationDataCallback: ge
    }, s = h(/* @__PURE__ */ new Map()), l = h(), d = h(!1), u = h(!1), c = h("create"), y = h({});
    async function x() {
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
    async function V() {
      var U, Y;
      if (!p())
        return;
      u.value = !0, w();
      const g = F(), S = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        context: t.context
      });
      if (S.success)
        y.value = {}, c.value === "create" && (c.value = "edit"), a && S.resource_data && (a.resource_data = S.resource_data), _(), (Y = t.onSubmitSuccess) == null || Y.call(t);
      else {
        y.value = {};
        const L = [];
        [...s.value].forEach((N) => {
          const ue = S.errors[N[0]];
          ue && (N[1].setupBackendErrors(ue), L.push(N[0]));
        }), Object.entries(S.errors).forEach((N) => {
          L.includes(N[0]) || (y.value[N[0]] = N[1]);
        }), (U = t.onSubmitFail) == null || U.call(t);
      }
      u.value = !1;
    }
    function F() {
      const g = {};
      return [...s.value].forEach((S) => {
        g[S[0]] = S[1].getValueDeserialized();
      }), g;
    }
    function p() {
      let g = !0;
      return s.value.forEach((S) => {
        if (!S.validate()) {
          g = !1;
          return;
        }
      }), g;
    }
    function _() {
      s.value.forEach((g) => {
        g.reset();
      });
    }
    function b() {
      s.value.forEach((g) => {
        g.clear();
      });
    }
    function R() {
      s.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function w() {
      s.value.forEach((g) => {
        g.setupBackendErrors([]);
      });
    }
    function f(g, S) {
      s.value.set(g, S);
    }
    function I(g) {
      if (a)
        return a.resource_data[g];
    }
    function te(g) {
      const S = [...s.value].find((U) => U[0] === g);
      return S ? S[1].getValueSerialized() : null;
    }
    function Q() {
      return r;
    }
    function se() {
      return o(l.value);
    }
    function ge() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ye() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((S) => {
        (t[S] === null || t[S] === void 0) && console.warn(`Missing props for <Submit64> -> ${S}`);
      });
    }
    function be() {
      return c.value;
    }
    return e({
      getMode: be,
      getFormFactoryInstance: Q,
      getForm: se,
      validateForm: p,
      resetForm: _,
      clearForm: b,
      resetValidation: R,
      submitForm: V
    }), P(async () => {
      ye(), await x();
    }), (g, S) => d.value && l.value ? (m(), T("div", $t, [
      z("div", {
        class: q(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), T(A, null, J(l.value.sections, (U, Y) => (m(), C(j(o(r).sectionComponent), {
          key: Y,
          section: U,
          context: t.context,
          "functions-provider": i
        }, {
          default: D(() => [
            (m(!0), T(A, null, J(U.fields, (L) => (m(), T(A, {
              key: L.metadata.field_name
            }, [
              g.$slots[L.metadata.field_name] ? (m(), C(fe, {
                key: 1,
                field: L,
                context: t.context,
                "functions-provider": i
              }, {
                default: D((N) => [
                  K(g.$slots, "default", W({ ref_for: !0 }, N))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (m(), C(fe, {
                key: 0,
                field: L,
                context: t.context,
                "functions-provider": i
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), C(j(o(r).actionComponent), {
        isLoadingSubmit: u.value,
        orphelanErrors: y.value,
        submit: V,
        clear: l.value.clearable ? b : void 0,
        reset: l.value.resetable ? _ : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "orphelanErrors", "clear", "reset"])),
      g.$slots.more_actions ? K(g.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : E("", !0)
    ])) : E("", !0);
  }
});
export {
  $ as Submit64,
  It as Submit64Form
};
