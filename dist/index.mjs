var ve = Object.defineProperty;
var _e = (n, e, t) => e in n ? ve(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => _e(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as O, openBlock as m, createElementVNode as U, createVNode as T, createBlock as x, createCommentVNode as I, unref as o, mergeProps as te, normalizeClass as N, toDisplayString as j, renderSlot as ce, resolveComponent as Ce, normalizeProps as Fe, guardReactiveProps as Se, withCtx as D, createTextVNode as xe, Fragment as Y, renderList as W, ref as b, onMounted as E, watch as ke, resolveDynamicComponent as L, nextTick as oe, getCurrentInstance as Ve, useSlots as De } from "vue";
import { QBtn as A, QIcon as J, QItem as Be, QItemSection as Te, QItemLabel as Oe, QInput as Z, QPopupProxy as ne, QDate as de, QTime as qe, QCheckbox as Re, QSelect as re, date as v } from "quasar";
const Pe = { class: "flex column" }, Ne = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ee = /* @__PURE__ */ B({
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
    return (r, l) => (m(), O("div", Pe, [
      U("div", Ne, [
        T(o(A), te(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (m(), x(o(A), te({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.clear ? (m(), x(o(A), te({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), $e = { class: "flex row items-center" }, ze = { class: "text-body1 text-weight-medium" }, we = { class: "flex column q-gutter-md" }, Ie = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n, t = e.functionsProvider.getFormFactoryInstance().formStyle;
    return (r, l) => (m(), O("div", {
      class: N(["flex column", e.section.cssClass])
    }, [
      U("div", $e, [
        e.section.icon ? (m(), x(o(J), {
          key: 0,
          name: e.section.icon,
          size: "sm",
          color: o(t).fieldColor
        }, null, 8, ["name", "color"])) : I("", !0),
        U("div", ze, j(e.section.label), 1)
      ]),
      U("div", we, [
        ce(r.$slots, "default")
      ])
    ], 2));
  }
}), Ue = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, r) => {
      const l = Ce("q-icon");
      return m(), x(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
      });
    };
  }
}), Le = /* @__PURE__ */ B({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (m(), x(o(Be), Fe(Se(e.itemProps)), {
      default: D(() => [
        T(o(Te), null, {
          default: D(() => [
            T(o(Oe), null, {
              default: D(() => [
                xe(j(e.entry.label), 1)
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
}), Ge = { class: "flex column" }, He = /* @__PURE__ */ B({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    functionsProvider: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (m(), O("div", Ge, [
      (m(!0), O(Y, null, W(e.orphanErrors, (l, i) => (m(), O("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, j(i) + " : " + j(l.join(",")), 1))), 128))
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
    }, this._actionComponent = Ee, this._orphanErrorsComponent = He, this._sectionComponent = Ie, this._wrapperResetComponent = Ue, this._associationDisplayComponent = Le;
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
let w = X;
const je = { class: "row items-center justify-end" }, Ae = /* @__PURE__ */ B({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = b(), a = b();
    function d() {
      s.value && s.value.hide();
    }
    function u() {
      return a.value ? a.value.validate() : !1;
    }
    function c() {
      a.value && a.value.resetValidation();
    }
    return E(() => {
      e.registerBehaviourCallbacks(u, c);
    }), (y, F) => (m(), x(o(Z), {
      ref_key: "fieldRef",
      ref: a,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[1] || (F[1] = (V) => e.modelValueOnUpdate(V)),
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
      class: N(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        T(o(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            T(o(ne), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                T(o(de), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: D(() => [
                    U("div", je, [
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
}), Qe = { class: "row items-center justify-end" }, Ye = { class: "row items-center justify-end" }, We = /* @__PURE__ */ B({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = b(), a = b(), d = b();
    function u() {
      s.value && s.value.hide();
    }
    function c() {
      a.value && a.value.hide();
    }
    function y() {
      return d.value ? d.value.validate() : !1;
    }
    function F() {
      d.value && d.value.resetValidation();
    }
    return E(() => {
      e.registerBehaviourCallbacks(y, F);
    }), (V, _) => (m(), x(o(Z), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[2] || (_[2] = (p) => e.modelValueOnUpdate(p)),
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
      class: N(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        T(o(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            T(o(ne), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                T(o(de), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": _[0] || (_[0] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: D(() => [
                    U("div", Qe, [
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
          default: D(() => [
            T(o(ne), {
              ref_key: "timePopupProxyRef",
              ref: a,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                T(o(qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": _[1] || (_[1] = (p) => e.modelValueOnUpdate(p)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: D(() => [
                    U("div", Ye, [
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
}), Je = { class: "flex column" }, Ke = {
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
    const e = n, t = b(!0), l = e.functionsProvider.getFormFactoryInstance().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return ke(
      () => e.modelValue,
      (a) => {
        for (const d of e.rules)
          if (t.value = d(a), t.value !== !0)
            break;
      }
    ), E(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (a, d) => (m(), O("div", Je, [
      T(o(Re), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(l).fieldDense,
        color: o(l).fieldColor,
        "aria-readonly": e.field.readonly,
        class: N([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (m(), O("div", Ke, j(e.field.hint), 1)) : I("", !0),
      t.value !== !0 ? (m(), O("div", Xe, j(t.value), 1)) : I("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ B({
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
    return t.formStyle, r.rulesBehaviour, (l, i) => " TODO json edit ? ";
  }
}), et = /* @__PURE__ */ B({
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
    const e = n, t = b([]), r = b([]), l = b(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, a = i.formStyle, d = s.rulesBehaviour === "lazy";
    function u(_, p) {
      if (_ === "") {
        p(() => {
          r.value = [...t.value];
        });
        return;
      }
      p(() => {
        const S = _.toLowerCase();
        r.value = t.value.filter((h) => h.label.toLowerCase().includes(S));
      });
    }
    function c() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function y() {
      return l.value ? l.value.validate() : !1;
    }
    function F() {
      l.value && l.value.resetValidation();
    }
    function V() {
      e.clear(), r.value = [];
    }
    return E(() => {
      c(), e.registerBehaviourCallbacks(y, F);
    }), (_, p) => (m(), x(o(re), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (S) => e.modelValueOnUpdate(S)),
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
      class: N(e.field.cssClass),
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
      onClear: V,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function K() {
  return 20;
}
const tt = /* @__PURE__ */ B({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = b([]), d = b({
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
        }).then(($) => {
          a.value = $.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function y() {
      oe(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (a.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: p,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function F() {
      return u.value ? u.value.validate() : !1;
    }
    function V() {
      u.value && u.value.resetValidation();
    }
    function _() {
      e.clear(), a.value = [];
    }
    return E(() => {
      y(), e.registerBehaviourCallbacks(F, V);
    }), (p, S) => (m(), x(o(re), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (h) => e.modelValueOnUpdate(h)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
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
      class: N(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: _,
      onFilter: c
    }, {
      option: D((h) => [
        (m(), x(L(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), nt = /* @__PURE__ */ B({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = b([]), d = b({
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
        }).then(($) => {
          a.value = $.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function y() {
      oe(() => {
        const p = e.getValueSerialized();
        !p || !e.field.associationData || (a.value = p.map(
          (S, h) => ({
            label: e.field.associationData.label[h] ?? "???",
            value: S,
            data: e.field.associationData.data[h]
          })
        ));
      });
    }
    function F() {
      return u.value ? u.value.validate() : !1;
    }
    function V() {
      u.value && u.value.resetValidation();
    }
    function _() {
      e.clear(), a.value = [];
    }
    return E(() => {
      y(), e.registerBehaviourCallbacks(F, V);
    }), (p, S) => (m(), x(o(re), {
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
      class: N(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: _,
      onFilter: c
    }, {
      option: D((h) => [
        (m(), x(L(o(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), se = /* @__PURE__ */ B({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = b();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return E(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (u, c) => (m(), x(o(Z), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: N(e.field.cssClass),
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
}), ot = /* @__PURE__ */ B({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = b();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return E(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (u, c) => (m(), x(o(Z), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
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
      class: N(e.field.cssClass),
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
class ae {
  constructor(e, t, r, l) {
    k(this, "resourceName");
    k(this, "formSettings");
    k(this, "formStyle");
    k(this, "actionComponent");
    k(this, "orphanErrorsComponent");
    k(this, "sectionComponent");
    k(this, "wrapperResetComponent");
    k(this, "associationDisplayComponent");
    k(this, "dynamicComponentRecord");
    this.resourceName = e, this.formSettings = {
      ...r,
      ...w.getGlobalFormSetting()
    }, this.formStyle = {
      ...l,
      ...w.getGlobalFormStyle()
    }, this.actionComponent = t.actionComponent ?? w.getGlobalActionComponent(), this.orphanErrorsComponent = t.orphanErrorsComponent ?? w.getGlobalOrphanErrorComponent(), this.sectionComponent = t.sectionComponent ?? w.getGlobalSectionComponent(), this.wrapperResetComponent = t.wrapperResetComponent ?? w.getGlobalWrapperResetComponent(), this.associationDisplayComponent = t.associationDisplayComponent ?? w.getGlobalAssociationDisplayComponent(), this.dynamicComponentRecord = t.dynamicComponentRecord ?? {};
  }
  getForm(e, t, r) {
    const l = [];
    return e.form.sections.forEach((s) => {
      const a = [];
      s.fields.forEach((u) => {
        const c = this.dynamicComponentRecord[`field-${u.field_name}-before`], y = ae.getFieldComponentByFormFieldType(
          u.field_type
        ), F = this.dynamicComponentRecord[`field-${u.field_name}-after`], V = {
          associationDisplayComponent: this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, _ = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint ?? void 0,
          prefix: u.prefix ?? void 0,
          suffix: u.suffix ?? void 0,
          readonly: e.form.readonly ?? s.readonly ?? u.readonly ?? void 0,
          cssClass: u.css_class ?? void 0,
          staticSelectOptions: u.static_select_options,
          associationData: u.field_association_data,
          rules: u.rules,
          clearable: e.form.clearable ?? void 0,
          beforeComponent: c,
          mainComponent: y,
          afterComponent: F,
          componentOptions: V
        };
        a.push(_);
      });
      const d = {
        label: s.label ?? void 0,
        icon: s.icon ?? void 0,
        cssClass: s.css_class ?? void 0,
        readonly: e.form.readonly ?? s.readonly ?? void 0,
        fields: a
      };
      l.push(d);
    }), {
      sections: l,
      resourceName: e.form.resource_name,
      resourceId: t,
      cssClass: e.form.css_class ?? void 0,
      resetable: e.form.resetable ?? void 0,
      clearable: e.form.clearable ?? void 0,
      readonly: e.form.readonly ?? void 0,
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
      string: se,
      text: se,
      number: ot,
      date: Ae,
      datetime: We,
      selectString: et,
      selectBelongsTo: tt,
      selectHasMany: nt,
      checkbox: Ze,
      object: Me
    }[e];
  }
}
function rt(n, e, t) {
  const r = t.getFormFactoryInstance().formSettings, l = t.getForm(), i = (u, c, y) => u[c] ? y ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
    v.formatDate(
      v.extractDate(u, l.backendDateFormat),
      r.dateFormat
    )
  ), a = [], d = [];
  switch (e) {
    case "date":
      a.push(ue(r.dateFormat));
      break;
    case "datetime":
      a.push(ue(r.datetimeFormat));
      break;
  }
  return n.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        a.push(at());
        break;
      case "absence":
        a.push(it());
        break;
      case "acceptance":
        a.push(st());
        break;
      case "inclusion":
        a.push(fe(c.including));
        break;
      case "exclusion":
        a.push(lt(c.excluding));
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
        a.push(dt());
        break;
      case "lessThanOrEqualNumber":
        a.push(
          ft(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          mt(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          pt(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          gt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          yt(i(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          ht(
            i(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        a.push(bt());
        break;
      case "numberNumericOnly":
        a.push(vt());
        break;
      case "numberEvenOnly":
        a.push(_t());
        break;
      case "numberOddOnly":
        a.push(Ct());
        break;
      case "lessThanOrEqualStringLength":
        a.push(
          Ft(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          St(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          xt(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          kt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          Bt(
            i(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          Dt(i(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          Vt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          Tt(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          Ot(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          qt(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          Rt(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          Pt(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          Nt(
            i(c, "equal_to", !0),
            r.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          Et(
            i(c, "other_than", !0),
            r.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return ct(a);
      case "allowNull":
        return ut(a);
    }
  }) : a;
}
function at() {
  return (n) => !!n || "Ce champ est requis";
}
function fe(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function lt(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${fe.toString()}`
  );
}
function it() {
  return (n) => !n || "Ce champ doit être vide";
}
function st() {
  return (n) => !!n || "Doit être accepté";
}
function ut(n) {
  return (e) => (e === null || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function ct(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function dt() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function ft(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function mt(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function pt(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function gt(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function yt(n, e) {
  return (t) => {
    const r = n();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function ht(n, e) {
  return (t) => {
    const r = n();
    return Number(t) !== r || `Doit être différent de ${n}`;
  };
}
function bt() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function vt() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function _t() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function Ct() {
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
function xt(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function kt(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Vt(n, e) {
  return (t) => {
    const r = n(), l = e();
    return String(t).length >= r && String(t).length <= l || `Entre ${r} et ${l}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const r = n();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Bt(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Tt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ot(n, e) {
  return (t) => {
    const r = n(), l = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return l <= i || `Inf. ou égal à ${r}`;
  };
}
function qt(n, e) {
  return (t) => {
    const r = n(), l = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return l < i || `Inf. à ${r}`;
  };
}
function Rt(n, e) {
  return (t) => {
    const r = n(), l = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return l >= i || `Sup. ou égal à ${r}`;
  };
}
function Pt(n, e) {
  return (t) => {
    const r = n(), l = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return l > i || `Sup. à ${r}`;
  };
}
function Nt(n, e) {
  return (t) => {
    const r = n(), l = v.extractDate(String(t), e), i = v.extractDate(r, e);
    return l === i || `Égale à ${l}`;
  };
}
function Et(n, e) {
  return (t) => {
    const r = n();
    return v.extractDate(String(t), e) !== v.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function ue(n) {
  return (e) => e == null || e === "" ? !0 : $t(e, n) || `Date invalide. Format : ${n}`;
}
function $t(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = v.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : v.formatDate(t, e) === n;
}
const zt = {
  computeServerRules: rt
}, wt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, It = ["index"], Ut = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {},
    functionsProvider: {},
    context: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let r = () => !0, l = () => {
    };
    const i = F(), s = b(), a = b([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = u(s.value), oe(() => {
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
    function F() {
      return zt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function V(f) {
      s.value = f;
    }
    function _() {
      return o(s);
    }
    function p() {
      return c(o(s));
    }
    function S(f) {
      a.value = f;
    }
    function h() {
      return r();
    }
    function q() {
      return l();
    }
    function $(f, G) {
      r = f, l = G;
    }
    return e({
      reset: d,
      clear: y,
      validate: h,
      resetValidation: q,
      getValueDeserialized: p,
      getValueSerialized: _,
      setupBackendErrors: S
    }), E(() => {
      var G;
      d();
      const f = (G = Ve()) == null ? void 0 : G.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, G) => (m(), O("div", null, [
      ce(f.$slots, "default", {
        is: t.field.mainComponent,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: y,
        getValueDeserialized: p,
        getValueSerialized: _,
        validate: h,
        modelValueOnUpdate: V,
        registerBehaviourCallbacks: $
      }, () => [
        t.field.beforeComponent ? (m(), x(L(t.field.beforeComponent), {
          key: 0,
          field: t.field
        }, null, 8, ["field"])) : I("", !0),
        (m(), x(L(t.field.mainComponent), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: y,
          getValueDeserialized: p,
          getValueSerialized: _,
          validate: h,
          modelValueOnUpdate: V,
          registerBehaviourCallbacks: $
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        t.field.afterComponent ? (m(), x(L(t.field.afterComponent), {
          key: 1,
          field: t.field
        }, null, 8, ["field"])) : I("", !0),
        a.value.length > 0 ? (m(), O("div", wt, [
          (m(!0), O(Y, null, W(a.value, (M, ee) => (m(), O("div", {
            index: ee,
            class: "flex column"
          }, j(M), 9, It))), 256))
        ])) : I("", !0)
      ])
    ]));
  }
}), Lt = {
  key: 0,
  class: "flex column"
}, At = /* @__PURE__ */ B({
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
    let r = null, l = "";
    const i = Object.freeze(
      new ae(
        t.resourceName,
        p(),
        t.formSettings,
        t.formStyle
      )
    ), s = {
      registerRef: M,
      getDataByFieldName: ee,
      getFieldDataByFieldName: me,
      getFormFactoryInstance: le,
      getForm: ie,
      getAssociationDataCallback: pe
    }, a = b(/* @__PURE__ */ new Map()), d = b(), u = b(!1), c = b(!1), y = b("create"), F = b({});
    async function V() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = Object.freeze(
        i.getForm(
          r,
          t.resourceId,
          t.context
        )
      ), t.resourceId && (y.value = "edit"), l = JSON.stringify(S()), u.value = !0;
    }
    async function _() {
      var R, H;
      if (!h())
        return;
      c.value = !0, G();
      const g = S(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        context: t.context
      });
      if (C.success)
        F.value = {}, y.value === "create" && (y.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), q(), (H = t.onSubmitSuccess) == null || H.call(t);
      else {
        F.value = {};
        const P = [];
        [...a.value].forEach((z) => {
          const Q = C.errors[z[0]];
          Q && (z[1].setupBackendErrors(Q), P.push(z[0]));
        }), Object.entries(C.errors).forEach((z) => {
          P.includes(z[0]) || (F.value[z[0]] = z[1]);
        }), (R = t.onSubmitFail) == null || R.call(t);
      }
      c.value = !1;
    }
    function p() {
      const g = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      }, C = De();
      for (const R in C) {
        const H = C[R];
        if (H) {
          const P = B({
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
      return g;
    }
    function S() {
      const g = {};
      return [...a.value].forEach((C) => {
        g[C[0]] = C[1].getValueDeserialized();
      }), g;
    }
    function h() {
      let g = !0;
      return a.value.forEach((C) => {
        if (!C.validate()) {
          g = !1;
          return;
        }
      }), g;
    }
    function q() {
      a.value.forEach((g) => {
        g.reset();
      });
    }
    function $() {
      a.value.forEach((g) => {
        g.clear();
      });
    }
    function f() {
      a.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function G() {
      a.value.forEach((g) => {
        g.setupBackendErrors([]);
      });
    }
    function M(g, C) {
      a.value.set(g, C);
    }
    function ee(g) {
      if (r)
        return r.resource_data[g];
    }
    function me(g) {
      const C = [...a.value].find((R) => R[0] === g);
      return C ? C[1].getValueSerialized() : null;
    }
    function le() {
      return i;
    }
    function ie() {
      return o(d.value);
    }
    function pe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ge() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function ye() {
      return o(y);
    }
    function he() {
      return l == JSON.stringify(S());
    }
    return e({
      getMode: ye,
      getFormFactoryInstance: le,
      getForm: ie,
      validateForm: h,
      resetForm: q,
      clearForm: $,
      resetValidation: f,
      submitForm: _,
      valuesHasChanged: he
    }), E(async () => {
      ge(), await V();
    }), (g, C) => u.value && d.value ? (m(), O("div", Lt, [
      U("div", {
        class: N(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), O(Y, null, W(d.value.sections, (R, H) => (m(), x(L(o(i).sectionComponent), {
          key: H,
          section: R,
          context: t.context,
          functionsProvider: s
        }, {
          default: D(() => [
            (m(!0), O(Y, null, W(R.fields, (P) => (m(), x(Ut, {
              key: P.metadata.field_name,
              field: P,
              context: t.context,
              functionsProvider: s
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), x(L(o(i).orphanErrorsComponent), {
        orphanErrors: F.value,
        functionsProvider: s
      }, null, 8, ["orphanErrors"])),
      (m(), x(L(o(i).actionComponent), {
        isLoadingSubmit: c.value,
        submit: _,
        clear: d.value.clearable ? $ : void 0,
        reset: d.value.resetable ? q : void 0,
        functionsProvider: s
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : I("", !0);
  }
});
export {
  w as Submit64,
  At as Submit64Form
};
