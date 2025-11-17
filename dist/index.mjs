var ve = Object.defineProperty;
var _e = (n, e, t) => e in n ? ve(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => _e(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as D, createElementBlock as O, openBlock as m, createElementVNode as U, createVNode as T, createBlock as C, createCommentVNode as w, unref as o, mergeProps as te, normalizeClass as E, toDisplayString as j, renderSlot as fe, resolveComponent as Ce, normalizeProps as oe, guardReactiveProps as re, withCtx as V, createTextVNode as Fe, Fragment as Y, renderList as W, ref as b, onMounted as N, watch as Se, resolveDynamicComponent as L, nextTick as ae, getCurrentInstance as xe, useSlots as ke } from "vue";
import { QBtn as A, QIcon as J, QItem as Ve, QItemSection as De, QItemLabel as Be, QInput as Z, QPopupProxy as ne, QDate as me, QTime as Te, QCheckbox as Oe, QSelect as le, date as v } from "quasar";
const qe = { class: "flex column" }, Re = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Pe = /* @__PURE__ */ D({
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
      const r = e.functionsProvider.getFormFactoryInstance().formStyle;
      return {
        outline: r.fieldOutlined,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        color: r.fieldColor,
        noCaps: !0
      };
    }
    return (r, a) => (m(), O("div", qe, [
      U("div", Re, [
        T(o(A), te(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (m(), C(o(A), te({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : w("", !0),
        e.clear ? (m(), C(o(A), te({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : w("", !0)
      ])
    ]));
  }
}), Ee = { class: "flex row items-center" }, Ne = { class: "text-body1 text-weight-medium" }, ze = { class: "flex column q-gutter-sm" }, $e = /* @__PURE__ */ D({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance().formStyle;
    return (r, a) => (m(), O("div", {
      class: E(["flex column", e.section.cssClass])
    }, [
      U("div", Ee, [
        e.section.icon ? (m(), C(o(J), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: o(t).fieldColor
        }, null, 8, ["name", "color"])) : w("", !0),
        U("div", Ne, j(e.section.label), 1)
      ]),
      U("div", ze, [
        fe(r.$slots, "default")
      ])
    ], 2));
  }
}), we = /* @__PURE__ */ D({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, r) => {
      const a = Ce("q-icon");
      return m(), C(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
      });
    };
  }
}), Ie = /* @__PURE__ */ D({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (m(), C(o(Ve), oe(re(e.itemProps)), {
      default: V(() => [
        T(o(De), null, {
          default: V(() => [
            T(o(Be), null, {
              default: V(() => [
                Fe(j(e.entry.label), 1)
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
}), Ue = { class: "flex column" }, Le = /* @__PURE__ */ D({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    functionsProvider: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (m(), O("div", Ue, [
      (m(!0), O(Y, null, W(e.orphanErrors, (a, i) => (m(), O("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, j(i) + " : " + j(a.join(",")), 1))), 128))
    ]));
  }
}), X = class X {
  constructor() {
    k(this, "_formSettings");
    k(this, "_formStyle");
    k(this, "_actionComponent");
    k(this, "_orphanErrorsComponent");
    k(this, "_sectionComponent");
    k(this, "_wrapperResetComponent");
    k(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Pe, this._orphanErrorsComponent = Le, this._sectionComponent = $e, this._wrapperResetComponent = we, this._associationDisplayComponent = Ie;
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
k(X, "_instance", new X());
let $ = X;
const Ge = { class: "row items-center justify-end" }, He = /* @__PURE__ */ D({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = b(), l = b();
    function d() {
      s.value && s.value.hide();
    }
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return N(() => {
      e.registerBehaviourCallbacks(u, c);
    }), (y, x) => (m(), C(o(Z), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[1] || (x[1] = (B) => e.modelValueOnUpdate(B)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
      class: E(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        T(o(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            T(o(ne), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                T(o(me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[0] || (x[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    U("div", Ge, [
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
}), je = { class: "row items-center justify-end" }, Ae = { class: "row items-center justify-end" }, Qe = /* @__PURE__ */ D({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = b(), l = b(), d = b();
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
    return N(() => {
      e.registerBehaviourCallbacks(y, x);
    }), (B, F) => (m(), C(o(Z), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (p) => e.modelValueOnUpdate(p)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
      class: E(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        T(o(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            T(o(ne), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                T(o(me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    U("div", je, [
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
        T(o(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            T(o(ne), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                T(o(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    U("div", Ae, [
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
}, Ke = /* @__PURE__ */ D({
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
    const e = n, t = b(!0), a = e.functionsProvider.getFormFactoryInstance().formStyle;
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
    ), N(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (l, d) => (m(), O("div", Ye, [
      T(o(Oe), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(a).fieldDense,
        color: o(a).fieldColor,
        "aria-readonly": e.field.readonly,
        class: E([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (m(), O("div", We, j(e.field.hint), 1)) : w("", !0),
      t.value !== !0 ? (m(), O("div", Je, j(t.value), 1)) : w("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ D({
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
    const t = n.functionsProvider.getFormFactoryInstance(), r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (a, i) => " TODO json edit ? ";
  }
}), Ze = /* @__PURE__ */ D({
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
    const e = n, t = b([]), r = b([]), a = b(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, l = i.formStyle, d = s.rulesBehaviour === "lazy";
    function u(F, p) {
      if (F === "") {
        p(() => {
          r.value = [...t.value];
        });
        return;
      }
      p(() => {
        const S = F.toLowerCase();
        r.value = t.value.filter((h) => h.label.toLowerCase().includes(S));
      });
    }
    function c() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function y() {
      return a.value ? a.value.validate() : !1;
    }
    function x() {
      a.value && a.value.resetValidation();
    }
    function B() {
      e.clear(), r.value = [];
    }
    return N(() => {
      c(), e.registerBehaviourCallbacks(y, x);
    }), (F, p) => (m(), C(o(le), {
      ref_key: "fieldRef",
      ref: a,
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
      class: E(e.field.cssClass),
      "lazy-rules": d,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: B,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function K() {
  return 20;
}
const Me = /* @__PURE__ */ D({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), a = r.formSettings, i = r.formStyle, s = a.rulesBehaviour === "lazy", l = b([]), d = b({
      limit: K(),
      offset: 0
    }), u = b();
    function c(p, S) {
      const h = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: K(),
        offset: 0
      }), S(() => {
        const q = e.functionsProvider.getForm();
        h({
          resourceName: q.resourceName,
          resourceId: q.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: q.context
        }).then((I) => {
          l.value = I.rows;
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
    function B() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return N(() => {
      y(), e.registerBehaviourCallbacks(x, B);
    }), (p, S) => (m(), C(o(le), {
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
      class: E(e.field.cssClass),
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
      options: V((h) => [
        (m(), C(L(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), et = /* @__PURE__ */ D({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), a = r.formSettings, i = r.formStyle, s = a.rulesBehaviour === "lazy", l = b([]), d = b({
      limit: K(),
      offset: 0
    }), u = b();
    function c(p, S) {
      const h = e.functionsProvider.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: K(),
        offset: 0
      }), S(() => {
        const q = e.functionsProvider.getForm();
        h({
          resourceName: q.resourceName,
          resourceId: q.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: q.context
        }).then((I) => {
          l.value = I.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function y() {
      ae(() => {
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
    function x() {
      return u.value ? u.value.validate() : !1;
    }
    function B() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), l.value = [];
    }
    return N(() => {
      y(), e.registerBehaviourCallbacks(x, B);
    }), (p, S) => (m(), C(o(le), {
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
      class: E(e.field.cssClass),
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
      options: V((h) => [
        (m(), C(L(o(t)), oe(re({
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ce = /* @__PURE__ */ D({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = b();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return N(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(Z), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
      class: E(e.field.cssClass),
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
}), tt = /* @__PURE__ */ D({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = b();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return N(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (u, c) => (m(), C(o(Z), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
      class: E(e.field.cssClass),
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
  constructor(e, t, r, a) {
    k(this, "resourceName");
    k(this, "formSettings");
    k(this, "formStyle");
    k(this, "actionComponent");
    k(this, "orphanErrorsComponent");
    k(this, "sectionComponent");
    k(this, "wrapperResetComponent");
    k(this, "associationDisplayComponent");
    this.resourceName = e, this.formSettings = {
      ...r,
      ...$.getGlobalFormSetting()
    }, this.formStyle = {
      ...a,
      ...$.getGlobalFormStyle()
    }, this.actionComponent = t.actionComponent ?? $.getGlobalActionComponent(), this.orphanErrorsComponent = t.orphanErrorsComponent ?? $.getGlobalOrphanErrorComponent(), this.sectionComponent = t.sectionComponent ?? $.getGlobalSectionComponent(), this.wrapperResetComponent = t.wrapperResetComponent ?? $.getGlobalWrapperResetComponent(), this.associationDisplayComponent = t.associationDisplayComponent ?? $.getGlobalAssociationDisplayComponent();
  }
  getForm(e, t, r) {
    const a = [];
    return e.form.sections.forEach((s) => {
      const l = [];
      s.fields.forEach((u) => {
        const c = ie.getFieldComponentByFormFieldType(
          u.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayComponent,
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
          mainComponent: c,
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
      a.push(d);
    }), {
      sections: a,
      resourceName: e.form.resource_name,
      resourceId: t,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      readonly: e.form.readonly,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      context: r
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ce,
      text: ce,
      number: tt,
      date: He,
      datetime: Qe,
      selectString: Ze,
      selectBelongsTo: Me,
      selectHasMany: et,
      checkbox: Ke,
      object: Xe
    }[e];
  }
}
function nt(n, e, t) {
  const r = t.getFormFactoryInstance().formSettings, a = t.getForm(), i = (u, c, y) => u[c] ? y ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
    v.formatDate(
      v.extractDate(u, a.backendDateFormat),
      r.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(de(r.dateFormat));
      break;
    case "datetime":
      l.push(de(r.datetimeFormat));
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
        l.push(pe(c.including));
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
        l.push(ht());
        break;
      case "numberNumericOnly":
        l.push(yt());
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
          Ct(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ft(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          St(
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
          xt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Dt(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Bt(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Tt(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Ot(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          qt(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Rt(
            i(c, "equal_to", !0),
            r.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Pt(
            i(c, "other_than", !0),
            r.dateFormat
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
function pe(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function rt(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${pe.toString()}`
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
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function st(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
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
    const r = n();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function gt(n, e) {
  return (t) => {
    const r = n();
    return Number(t) !== r || `Doit être différent de ${n}`;
  };
}
function ht() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function yt() {
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
function Ct(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Ft(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function St(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function xt(n, e) {
  return (t) => {
    const r = n(), a = e();
    return String(t).length >= r && String(t).length <= a || `Entre ${r} et ${a}`;
  };
}
function kt(n, e) {
  return (t) => {
    const r = n();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Vt(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Dt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Bt(n, e) {
  return (t) => {
    const r = n(), a = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return a <= i || `Inf. ou égal à ${r}`;
  };
}
function Tt(n, e) {
  return (t) => {
    const r = n(), a = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return a < i || `Inf. à ${r}`;
  };
}
function Ot(n, e) {
  return (t) => {
    const r = n(), a = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return a >= i || `Sup. ou égal à ${r}`;
  };
}
function qt(n, e) {
  return (t) => {
    const r = n(), a = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return a > i || `Sup. à ${r}`;
  };
}
function Rt(n, e) {
  return (t) => {
    const r = n(), a = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return a === i || `Égale à ${a}`;
  };
}
function Pt(n, e) {
  return (t) => {
    const r = n();
    return v.extractDate(String(t), e) !== v.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function de(n) {
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
}, zt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, $t = ["index"], wt = /* @__PURE__ */ D({
  __name: "FieldWrapper",
  props: {
    field: {},
    functionsProvider: {},
    context: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let r = () => !0, a = () => {
    };
    const i = x(), s = b(), l = b([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = u(s.value), ae(() => {
        q();
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
    function h() {
      return r();
    }
    function q() {
      return a();
    }
    function I(f, G) {
      r = f, a = G;
    }
    return e({
      reset: d,
      clear: y,
      validate: h,
      resetValidation: q,
      getValueDeserialized: p,
      getValueSerialized: F,
      setupBackendErrors: S
    }), N(() => {
      var G;
      d();
      const f = (G = xe()) == null ? void 0 : G.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, G) => (m(), O("div", null, [
      fe(f.$slots, "default", {
        is: t.field.mainComponent,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: y,
        getValueDeserialized: p,
        getValueSerialized: F,
        validate: h,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: I
      }, () => [
        t.field.beforeComponent ? (m(), C(L(t.field.beforeComponent), {
          key: 0,
          field: t.field
        }, null, 8, ["field"])) : w("", !0),
        (m(), C(L(t.field.mainComponent), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: y,
          getValueDeserialized: p,
          getValueSerialized: F,
          validate: h,
          modelValueOnUpdate: B,
          registerBehaviourCallbacks: I
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        t.field.afterComponent ? (m(), C(L(t.field.afterComponent), {
          key: 1,
          field: t.field
        }, null, 8, ["field"])) : w("", !0),
        l.value.length > 0 ? (m(), O("div", zt, [
          (m(!0), O(Y, null, W(l.value, (M, ee) => (m(), O("div", {
            index: ee,
            class: "flex column"
          }, j(M), 9, $t))), 256))
        ])) : w("", !0)
      ])
    ]));
  }
}), It = {
  key: 0,
  class: "flex column"
}, Ht = /* @__PURE__ */ D({
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
    let r = null;
    const a = Object.freeze(
      new ie(
        t.resourceName,
        F(),
        t.formSettings,
        t.formStyle
      )
    ), i = {
      registerRef: G,
      getDataByFieldName: M,
      getFieldDataByFieldName: ee,
      getFormFactoryInstance: se,
      getForm: ue,
      getAssociationDataCallback: ge
    }, s = b(/* @__PURE__ */ new Map()), l = b(), d = b(!1), u = b(!1), c = b("create"), y = b({});
    async function x() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        a.getForm(
          r,
          t.resourceId,
          t.context
        )
      ), t.resourceId && (c.value = "edit"), d.value = !0;
    }
    async function B() {
      var R, H;
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
        y.value = {}, c.value === "create" && (c.value = "edit"), r && _.resource_data && (r.resource_data = _.resource_data), h(), (H = t.onSubmitSuccess) == null || H.call(t);
      else {
        y.value = {};
        const P = [];
        [...s.value].forEach((z) => {
          const Q = _.errors[z[0]];
          Q && (z[1].setupBackendErrors(Q), P.push(z[0]));
        }), Object.entries(_.errors).forEach((z) => {
          P.includes(z[0]) || (y.value[z[0]] = z[1]);
        }), (R = t.onSubmitFail) == null || R.call(t);
      }
      u.value = !1;
    }
    function F() {
      const g = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      }, _ = ke();
      for (const R in _) {
        const H = _[R];
        if (H) {
          const P = D({
            inheritAttrs: !1,
            setup(z, { attrs: Q, slots: be }) {
              return () => H({
                ...z,
                ...Q,
                slots: be
              });
            }
          });
          switch (R) {
            case "sections":
              g.sectionComponent = P;
              break;
            case "actions":
              g.actionComponent = P;
              break;
            case "orphan-errors":
              g.orphanErrorsComponent = P;
              break;
            case "association-display":
              g.associationDisplayComponent = P;
              break;
            default:
              g.dynamicComponentRecord[R] = P;
              break;
          }
        }
      }
      return console.log(g), g;
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
    function q() {
      s.value.forEach((g) => {
        g.clear();
      });
    }
    function I() {
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
    function M(g) {
      if (r)
        return r.resource_data[g];
    }
    function ee(g) {
      const _ = [...s.value].find((R) => R[0] === g);
      return _ ? _[1].getValueSerialized() : null;
    }
    function se() {
      return a;
    }
    function ue() {
      return o(l.value);
    }
    function ge() {
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
    function ye() {
      return c.value;
    }
    return e({
      getMode: ye,
      getFormFactoryInstance: se,
      getForm: ue,
      validateForm: S,
      resetForm: h,
      clearForm: q,
      resetValidation: I,
      submitForm: B
    }), N(async () => {
      he(), await x();
    }), (g, _) => d.value && l.value ? (m(), O("div", It, [
      U("div", {
        class: E(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), O(Y, null, W(l.value.sections, (R, H) => (m(), C(L(o(a).sectionComponent), {
          key: H,
          section: R,
          context: t.context,
          functionsProvider: i
        }, {
          default: V(() => [
            (m(!0), O(Y, null, W(R.fields, (P) => (m(), C(wt, {
              key: P.metadata.field_name,
              field: P,
              context: t.context,
              functionsProvider: i
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), C(L(o(a).orphanErrorsComponent), {
        orphanErrors: y.value,
        functionsProvider: i
      }, null, 8, ["orphanErrors"])),
      (m(), C(L(o(a).actionComponent), {
        isLoadingSubmit: u.value,
        submit: B,
        clear: l.value.clearable ? q : void 0,
        reset: l.value.resetable ? h : void 0,
        functionsProvider: i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : w("", !0);
  }
});
export {
  $ as Submit64,
  Ht as Submit64Form
};
