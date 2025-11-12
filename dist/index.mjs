var ge = Object.defineProperty;
var ye = (n, e, t) => e in n ? ge(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => ye(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as O, openBlock as p, createVNode as V, createBlock as x, createCommentVNode as z, unref as o, normalizeClass as q, createElementVNode as U, toDisplayString as G, renderSlot as J, resolveComponent as be, normalizeProps as ne, guardReactiveProps as oe, withCtx as D, createTextVNode as he, ref as h, onMounted as P, watch as ve, resolveDynamicComponent as H, nextTick as re, getCurrentInstance as _e, Fragment as W, renderList as ee, mergeProps as Fe } from "vue";
import { QBtn as L, QIcon as K, QItem as Se, QItemSection as Ce, QItemLabel as xe, QInput as M, QPopupProxy as te, QDate as ce, QTime as De, QCheckbox as ke, QSelect as ae, date as b } from "quasar";
const Ve = { class: "flex row items-center no-wrap q-pt-sm" }, Be = /* @__PURE__ */ T({
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
    return (t, r) => (p(), O("div", Ve, [
      V(o(L), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: r[0] || (r[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), x(o(L), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: r[1] || (r[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : z("", !0),
      e.clear ? (p(), x(o(L), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: r[2] || (r[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : z("", !0)
    ]));
  }
}), Te = { class: "flex row items-center" }, Oe = { class: "text-body1 text-weight-medium" }, Re = { class: "flex column q-gutter-sm" }, qe = /* @__PURE__ */ T({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    functionsProvider: {},
    context: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (p(), O("div", {
      class: q(["flex column", e.section.cssClass])
    }, [
      U("div", Te, [
        e.section.icon ? (p(), x(o(K), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : z("", !0),
        U("div", Oe, G(e.section.label), 1)
      ]),
      U("div", Re, [
        J(t.$slots, "default")
      ])
    ], 2));
  }
}), Pe = /* @__PURE__ */ T({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, r) => {
      const l = be("q-icon");
      return p(), x(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
      });
    };
  }
}), Ne = /* @__PURE__ */ T({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (p(), x(o(Se), ne(oe(e.itemProps)), {
      default: D(() => [
        V(o(Ce), null, {
          default: D(() => [
            V(o(xe), null, {
              default: D(() => [
                he(G(e.entry.label), 1)
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
}), Z = class Z {
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
    }, this._actionComponent = Be, this._sectionComponent = qe, this._wrapperResetComponent = Pe, this._associationDisplayComponent = Ne, this._associationDisplayDictonary = {};
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
k(Z, "_instance", new Z());
let N = Z;
const $e = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = h(), a = h();
    function d() {
      s.value && s.value.hide();
    }
    function u() {
      return a.value ? a.value.validate() : !1;
    }
    function c() {
      a.value && a.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(u, c);
    }), (v, S) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: a,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[1] || (S[1] = (B) => e.modelValueOnUpdate(B)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        V(o(K), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            V(o(te), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                V(o(ce), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": S[0] || (S[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: D(() => [
                    U("div", $e, [
                      V(o(L), {
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
}), we = { class: "row items-center justify-end" }, Ee = { class: "row items-center justify-end" }, Ie = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = h(), a = h(), d = h();
    function u() {
      s.value && s.value.hide();
    }
    function c() {
      a.value && a.value.hide();
    }
    function v() {
      return d.value ? d.value.validate() : !1;
    }
    function S() {
      d.value && d.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(v, S);
    }), (B, _) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[2] || (_[2] = (m) => e.modelValueOnUpdate(m)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        V(o(K), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            V(o(te), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                V(o(ce), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": _[0] || (_[0] = (m) => e.modelValueOnUpdate(m)),
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: D(() => [
                    U("div", we, [
                      V(o(L), {
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
        V(o(K), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            V(o(te), {
              ref_key: "timePopupProxyRef",
              ref: a,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                V(o(De), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => e.modelValueOnUpdate(m)),
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: D(() => [
                    U("div", Ee, [
                      V(o(L), {
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
}), Ue = { class: "flex column" }, Le = {
  key: 0,
  class: "q-field__bottom"
}, Ge = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, He = /* @__PURE__ */ T({
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
    const e = n, t = h(!0), l = e.functionsProvider.getFormFactoryInstance().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return ve(
      () => e.modelValue,
      (a) => {
        for (const d of e.rules)
          if (t.value = d(a), t.value !== !0)
            break;
      }
    ), P(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (a, d) => (p(), O("div", Ue, [
      V(o(ke), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
        label: e.field.label,
        dense: o(l).fieldDense,
        color: o(l).fieldColor,
        "aria-readonly": e.field.readonly,
        class: q([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (p(), O("div", Le, G(e.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (p(), O("div", Ge, G(t.value), 1)) : z("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ T({
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
}), Qe = /* @__PURE__ */ T({
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
    const e = n, t = h([]), r = h([]), l = h(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, a = i.formStyle, d = s.rulesBehaviour === "lazy";
    function u(_, m) {
      if (_ === "") {
        m(() => {
          r.value = [...t.value];
        });
        return;
      }
      m(() => {
        const F = _.toLowerCase();
        r.value = t.value.filter((y) => y.label.toLowerCase().includes(F));
      });
    }
    function c() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function v() {
      return l.value ? l.value.validate() : !1;
    }
    function S() {
      l.value && l.value.resetValidation();
    }
    function B() {
      e.clear(), r.value = [];
    }
    return P(() => {
      c(), e.registerBehaviourCallbacks(v, S);
    }), (_, m) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": m[0] || (m[0] = (F) => e.modelValueOnUpdate(F)),
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
      class: q(e.field.cssClass),
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
function X() {
  return 20;
}
const je = /* @__PURE__ */ T({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = h([]), d = h({
      limit: X(),
      offset: 0
    }), u = h();
    function c(m, F) {
      const y = e.functionsProvider.getAssociationDataCallback();
      m === "" && (d.value = {
        limit: X(),
        offset: 0
      }), F(() => {
        const R = e.functionsProvider.getForm();
        y({
          resourceName: R.resourceName,
          resourceId: R.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: m,
          context: R.context
        }).then(($) => {
          a.value = $.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function v() {
      re(() => {
        const m = e.getValueSerialized();
        !m || !e.field.associationData || (a.value = [
          {
            label: e.field.associationData.label ?? "???",
            value: m,
            data: e.field.associationData.data
          }
        ]);
      });
    }
    function S() {
      return u.value ? u.value.validate() : !1;
    }
    function B() {
      u.value && u.value.resetValidation();
    }
    function _() {
      e.clear(), a.value = [];
    }
    return P(() => {
      v(), e.registerBehaviourCallbacks(S, B);
    }), (m, F) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (y) => e.modelValueOnUpdate(y)),
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
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: _,
      onFilter: c
    }, {
      options: D((y) => [
        (p(), x(H(o(t)), ne(oe({
          associationName: e.field.metadata.field_association_name,
          entry: y.opt,
          itemProps: y.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ye = /* @__PURE__ */ T({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = h([]), d = h({
      limit: X(),
      offset: 0
    }), u = h();
    function c(m, F) {
      const y = e.functionsProvider.getAssociationDataCallback();
      m === "" && (d.value = {
        limit: X(),
        offset: 0
      }), F(() => {
        const R = e.functionsProvider.getForm();
        y({
          resourceName: R.resourceName,
          resourceId: R.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: m,
          context: R.context
        }).then(($) => {
          a.value = $.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function v() {
      re(() => {
        const m = e.getValueSerialized();
        !m || !e.field.associationData || (a.value = m.map(
          (F, y) => ({
            label: e.field.associationData.label[y] ?? "???",
            value: F,
            data: e.field.associationData.data[y]
          })
        ));
      });
    }
    function S() {
      return u.value ? u.value.validate() : !1;
    }
    function B() {
      u.value && u.value.resetValidation();
    }
    function _() {
      e.clear(), a.value = [];
    }
    return P(() => {
      v(), e.registerBehaviourCallbacks(S, B);
    }), (m, F) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (y) => e.modelValueOnUpdate(y)),
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
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: _,
      onFilter: c
    }, {
      options: D((y) => [
        (p(), x(H(o(t)), ne(oe({
          associationName: e.field.metadata.field_association_name,
          entry: y.opt,
          itemProps: y.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ie = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = h();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (u, c) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (v) => e.modelValueOnUpdate(v)),
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
}), We = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = h();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return P(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (u, c) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (v) => e.modelValueOnUpdate(v)),
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
class le {
  constructor(e, t, r, l, i, s, a, d) {
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
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...r,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = l ?? N.getGlobalActionComponent(), this.sectionComponent = i ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = s ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? N.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ie,
      text: ie,
      number: We,
      date: ze,
      datetime: Ie,
      selectString: Qe,
      selectBelongsTo: je,
      selectHasMany: Ye,
      checkbox: He,
      object: Ae
    }[e];
  }
  getForm(e, t, r) {
    const l = [];
    return e.form.sections.forEach((s) => {
      const a = [];
      s.fields.forEach((u) => {
        const c = le.getFieldComponentByFormFieldType(
          u.field_type
        ), v = {
          associationDisplayComponent: this.associationDisplayRecord[u.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, S = {
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
          componentOptions: v
        };
        a.push(S);
      });
      const d = {
        label: s.label,
        icon: s.icon,
        cssClass: s.css_class,
        readonly: e.form.readonly ?? s.readonly,
        fields: a
      };
      l.push(d);
    }), {
      sections: l,
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
}
function Je(n, e, t) {
  const r = t.getFormFactoryInstance().formSettings, l = t.getForm(), i = (u, c, v) => u[c] ? v ? () => s(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (u) => String(
    b.formatDate(
      b.extractDate(u, l.backendDateFormat),
      r.dateFormat
    )
  ), a = [], d = [];
  switch (e) {
    case "date":
      a.push(se(r.dateFormat));
      break;
    case "datetime":
      a.push(se(r.datetimeFormat));
      break;
  }
  return n.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        a.push(Ke());
        break;
      case "absence":
        a.push(Ze());
        break;
      case "acceptance":
        a.push(Me());
        break;
      case "inclusion":
        a.push(de(c.including));
        break;
      case "exclusion":
        a.push(Xe(c.excluding));
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
        a.push(nt());
        break;
      case "lessThanOrEqualNumber":
        a.push(
          ot(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          rt(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          at(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          lt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          it(i(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          st(
            i(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        a.push(ut());
        break;
      case "numberNumericOnly":
        a.push(ct());
        break;
      case "numberEvenOnly":
        a.push(dt());
        break;
      case "numberOddOnly":
        a.push(ft());
        break;
      case "lessThanOrEqualStringLength":
        a.push(
          mt(
            i(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          pt(
            i(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          gt(
            i(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          yt(
            i(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          vt(
            i(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          ht(i(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          bt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          _t(
            i(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          Ft(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          St(
            i(c, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          Ct(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          xt(
            i(c, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          Dt(
            i(c, "equal_to", !0),
            r.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          kt(
            i(c, "other_than", !0),
            r.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return tt(a);
      case "allowNull":
        return et(a);
    }
  }) : a;
}
function Ke() {
  return (n) => !!n || "Ce champ est requis";
}
function de(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function Xe(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${de.toString()}`
  );
}
function Ze() {
  return (n) => !n || "Ce champ doit être vide";
}
function Me() {
  return (n) => !!n || "Doit être accepté";
}
function et(n) {
  return (e) => (e === null || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function tt(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function nt() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function ot(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function rt(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function at(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function lt(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function it(n, e) {
  return (t) => {
    const r = n();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function st(n, e) {
  return (t) => {
    const r = n();
    return Number(t) !== r || `Doit être différent de ${n}`;
  };
}
function ut() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function ct() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function dt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function ft() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function mt(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function pt(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function gt(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function yt(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function bt(n, e) {
  return (t) => {
    const r = n(), l = e();
    return String(t).length >= r && String(t).length <= l || `Entre ${r} et ${l}`;
  };
}
function ht(n, e) {
  return (t) => {
    const r = n();
    return String(t) === r || `Égale à ${r}`;
  };
}
function vt(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function _t(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ft(n, e) {
  return (t) => {
    const r = n(), l = b.extractDate(String(t), e), i = b.extractDate(r, e);
    return l <= i || `Inf. ou égal à ${r}`;
  };
}
function St(n, e) {
  return (t) => {
    const r = n(), l = b.extractDate(String(t), e), i = b.extractDate(r, e);
    return l < i || `Inf. à ${r}`;
  };
}
function Ct(n, e) {
  return (t) => {
    const r = n(), l = b.extractDate(String(t), e), i = b.extractDate(r, e);
    return l >= i || `Sup. ou égal à ${r}`;
  };
}
function xt(n, e) {
  return (t) => {
    const r = n(), l = b.extractDate(String(t), e), i = b.extractDate(r, e);
    return l > i || `Sup. à ${r}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const r = n(), l = b.extractDate(String(t), e), i = b.extractDate(r, e);
    return l === i || `Égale à ${l}`;
  };
}
function kt(n, e) {
  return (t) => {
    const r = n();
    return b.extractDate(String(t), e) !== b.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function se(n) {
  return (e) => e == null || e === "" ? !0 : Vt(e, n) || `Date invalide. Format : ${n}`;
}
function Vt(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = b.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : b.formatDate(t, e) === n;
}
const Bt = {
  computeServerRules: Je
}, Tt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Ot = ["index"], ue = /* @__PURE__ */ T({
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
    const i = S(), s = h(), a = h([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = u(s.value), re(() => {
        R();
      });
    }
    function u(f) {
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : b.formatDate(
            b.extractDate(
              String(f),
              t.functionsProvider.getForm().backendDateFormat
            ),
            t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : b.formatDate(
            b.extractDate(
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
          return f == null || f === "" ? null : b.formatDate(
            b.extractDate(
              String(f),
              t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
            ),
            t.functionsProvider.getForm().backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : b.formatDate(
            b.extractDate(
              String(f),
              t.functionsProvider.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            t.functionsProvider.getForm().backendDatetimeFormat
          );
      }
      return f;
    }
    function v() {
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
    function S() {
      return Bt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function B(f) {
      s.value = f;
    }
    function _() {
      return o(s);
    }
    function m() {
      return c(o(s));
    }
    function F(f) {
      a.value = f;
    }
    function y() {
      return r();
    }
    function R() {
      return l();
    }
    function $(f, w) {
      r = f, l = w;
    }
    return e({
      reset: d,
      clear: v,
      validate: y,
      resetValidation: R,
      getValueDeserialized: m,
      getValueSerialized: _,
      setupBackendErrors: F
    }), P(() => {
      var w;
      d();
      const f = (w = _e()) == null ? void 0 : w.exposed;
      f && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, w) => (p(), O("div", null, [
      J(f.$slots, "default", {
        is: t.field.component,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: v,
        getValueDeserialized: m,
        getValueSerialized: _,
        validate: y,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: $
      }, () => [
        (p(), x(H(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: v,
          getValueDeserialized: m,
          getValueSerialized: _,
          validate: y,
          modelValueOnUpdate: B,
          registerBehaviourCallbacks: $
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        a.value.length > 0 ? (p(), O("div", Tt, [
          (p(!0), O(W, null, ee(a.value, (A, Q) => (p(), O("div", {
            index: Q,
            class: "flex column"
          }, G(A), 9, Ot))), 256))
        ])) : z("", !0)
      ])
    ]));
  }
}), Rt = {
  key: 0,
  class: "flex column"
}, $t = /* @__PURE__ */ T({
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
    let r = null;
    const l = Object.freeze(
      new le(
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
      registerRef: $,
      getDataByFieldName: f,
      getFieldDataByFieldName: w,
      getFormFactoryInstance: A,
      getForm: Q,
      getAssociationDataCallback: fe
    }, s = h(/* @__PURE__ */ new Map()), a = h(), d = h(!1), u = h(!1), c = h("create");
    async function v() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), a.value = Object.freeze(
        l.getForm(
          r,
          t.resourceId,
          t.context
        )
      ), t.resourceId && (c.value = "edit"), d.value = !0;
    }
    async function S() {
      var E, j;
      if (!_())
        return;
      u.value = !0, R();
      const g = B(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        context: t.context
      });
      C.success ? (c.value === "create" && (c.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), m(), (j = t.onSubmitSuccess) == null || j.call(t)) : ([...s.value].forEach((I) => {
        const Y = C.errors[I[0]];
        Y && I[1].setupBackendErrors(Y);
      }), (E = t.onSubmitFail) == null || E.call(t)), u.value = !1;
    }
    function B() {
      const g = {};
      return [...s.value].forEach((C) => {
        g[C[0]] = C[1].getValueDeserialized();
      }), g;
    }
    function _() {
      let g = !0;
      return s.value.forEach((C) => {
        if (!C.validate()) {
          g = !1;
          return;
        }
      }), g;
    }
    function m() {
      s.value.forEach((g) => {
        g.reset();
      });
    }
    function F() {
      s.value.forEach((g) => {
        g.clear();
      });
    }
    function y() {
      s.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function R() {
      s.value.forEach((g) => {
        g.setupBackendErrors([]);
      });
    }
    function $(g, C) {
      s.value.set(g, C);
    }
    function f(g) {
      if (r)
        return r.resource_data[g];
    }
    function w(g) {
      const C = [...s.value].find((E) => E[0] === g);
      return C ? C[1].getValueSerialized() : null;
    }
    function A() {
      return l;
    }
    function Q() {
      return o(a.value);
    }
    function fe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function me() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function pe() {
      return c.value;
    }
    return e({
      getMode: pe,
      getFormFactoryInstance: A,
      getForm: Q,
      validateForm: _,
      resetForm: m,
      clearForm: F,
      resetValidation: y,
      submitForm: S
    }), P(async () => {
      me(), await v();
    }), (g, C) => d.value && a.value ? (p(), O("div", Rt, [
      U("div", {
        class: q(a.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), O(W, null, ee(a.value.sections, (E, j) => (p(), x(H(o(l).sectionComponent), {
          key: j,
          section: E,
          context: t.context,
          "functions-provider": i
        }, {
          default: D(() => [
            (p(!0), O(W, null, ee(E.fields, (I) => (p(), O(W, {
              key: I.metadata.field_name
            }, [
              g.$slots[I.metadata.field_name] ? (p(), x(ue, {
                key: 1,
                field: I,
                context: t.context,
                "functions-provider": i
              }, {
                default: D((Y) => [
                  J(g.$slots, "default", Fe({ ref_for: !0 }, Y))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (p(), x(ue, {
                key: 0,
                field: I,
                context: t.context,
                "functions-provider": i
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (p(), x(H(o(l).actionComponent), {
        isLoadingSubmit: u.value,
        submit: S,
        clear: a.value.clearable ? F : void 0,
        reset: a.value.resetable ? m : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      g.$slots.more_actions ? J(g.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: a.value }
      }) : z("", !0)
    ])) : z("", !0);
  }
});
export {
  N as Submit64,
  $t as Submit64Form
};
