var me = Object.defineProperty;
var pe = (n, e, t) => e in n ? me(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => pe(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as O, openBlock as p, createVNode as B, createBlock as x, createCommentVNode as $, unref as o, normalizeClass as R, createElementVNode as I, toDisplayString as G, renderSlot as J, resolveComponent as ge, normalizeProps as ye, guardReactiveProps as be, withCtx as D, createTextVNode as he, ref as S, onMounted as q, watch as ve, Fragment as L, resolveDynamicComponent as H, nextTick as ne, getCurrentInstance as Fe, renderList as ee, mergeProps as Se } from "vue";
import { QBtn as U, QIcon as K, QItem as _e, QItemSection as Ce, QItemLabel as Ve, QInput as M, QPopupProxy as te, QDate as se, QTime as xe, QCheckbox as De, QSelect as oe, date as F } from "quasar";
const ke = { class: "flex row items-center no-wrap q-pt-sm" }, Be = /* @__PURE__ */ T({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formDef: {},
    functionsProvider: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(n) {
    const e = n;
    return (t, r) => (p(), O("div", ke, [
      B(o(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: r[0] || (r[0] = (a) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), x(o(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: r[1] || (r[1] = (a) => e.reset())
      }, null, 8, ["loading"])) : $("", !0),
      e.clear ? (p(), x(o(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: r[2] || (r[2] = (a) => e.clear())
      }, null, 8, ["loading"])) : $("", !0)
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
      class: R(["flex column", e.section.cssClass])
    }, [
      I("div", Te, [
        e.section.icon ? (p(), x(o(K), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : $("", !0),
        I("div", Oe, G(e.section.label), 1)
      ]),
      I("div", Re, [
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
      const a = ge("q-icon");
      return p(), x(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
      });
    };
  }
}), Ne = /* @__PURE__ */ T({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    index: {},
    label: {},
    selected: { type: Boolean },
    focused: { type: Boolean },
    opt: {},
    itemProps: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (p(), x(o(_e), ye(be(e.itemProps)), {
      default: D(() => [
        B(o(Ce), null, {
          default: D(() => [
            B(o(Ve), null, {
              default: D(() => [
                he(G(e.opt.label), 1)
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
let P = Z;
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = S(), l = S();
    function d() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function u() {
      l.value && l.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(c, u);
    }), (b, _) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        _[2] || (_[2] = (C) => e.modelValue = C),
        _[3] || (_[3] = (C) => e.modelValueOnUpdate(C))
      ],
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
      class: R(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        B(o(K), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(te), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(se), {
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": [
                    _[0] || (_[0] = (C) => e.modelValue = C),
                    _[1] || (_[1] = (C) => e.modelValueOnUpdate(C))
                  ],
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: D(() => [
                    I("div", $e, [
                      B(o(U), {
                        onClick: d,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = S(), l = S(), d = S();
    function c() {
      s.value && s.value.hide();
    }
    function u() {
      l.value && l.value.hide();
    }
    function b() {
      return d.value ? d.value.validate() : !1;
    }
    function _() {
      d.value && d.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(b, _);
    }), (C, g) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        g[4] || (g[4] = (f) => e.modelValue = f),
        g[5] || (g[5] = (f) => e.modelValueOnUpdate(f))
      ],
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
      class: R(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: D(() => [
        B(o(K), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(te), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(se), {
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": [
                    g[0] || (g[0] = (f) => e.modelValue = f),
                    g[1] || (g[1] = (f) => e.modelValueOnUpdate(f))
                  ],
                  mask: o(t).formSettings.datetimeFormat
                }, {
                  default: D(() => [
                    I("div", we, [
                      B(o(U), {
                        onClick: c,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        B(o(K), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            B(o(te), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(xe), {
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": [
                    g[2] || (g[2] = (f) => e.modelValue = f),
                    g[3] || (g[3] = (f) => e.modelValueOnUpdate(f))
                  ],
                  mask: o(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: D(() => [
                    I("div", Ee, [
                      B(o(U), {
                        onClick: u,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ue = {
  key: 0,
  class: "q-field__bottom"
}, Le = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ge = /* @__PURE__ */ T({
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
    const e = n, t = S(!0), a = e.functionsProvider.getFormFactoryInstance().formStyle;
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return ve(
      () => e.modelValue,
      (l) => {
        for (const d of e.rules)
          if (t.value = d(l), t.value !== !0)
            break;
      }
    ), q(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (l, d) => (p(), O(L, null, [
      B(o(De), {
        modelValue: e.modelValue,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (c) => e.modelValue = c),
          d[1] || (d[1] = (c) => e.modelValueOnUpdate(c))
        ],
        label: e.field.label,
        dense: o(a).fieldDense,
        color: o(a).fieldColor,
        "aria-readonly": e.field.readonly,
        class: R([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (p(), O("div", Ue, G(e.field.hint), 1)) : $("", !0),
      t.value !== !0 ? (p(), O("div", Le, G(t.value), 1)) : $("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ T({
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
}), Ae = /* @__PURE__ */ T({
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
    const e = n, t = S([]), r = S([]), a = S(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, l = i.formStyle, d = s.rulesBehaviour === "lazy";
    function c(g, f) {
      if (g === "") {
        f(() => {
          r.value = [...t.value];
        });
        return;
      }
      f(() => {
        const h = g.toLowerCase();
        r.value = t.value.filter((v) => v.label.toLowerCase().includes(h));
      });
    }
    function u() {
      t.value = Object.freeze(e.field.selectOptions ?? []), r.value = e.field.selectOptions ?? [];
    }
    function b() {
      return a.value ? a.value.validate() : !1;
    }
    function _() {
      a.value && a.value.resetValidation();
    }
    function C() {
      e.clear(), r.value = [];
    }
    return q(() => {
      u(), e.registerBehaviourCallbacks(b, _);
    }), (g, f) => (p(), x(o(oe), {
      ref_key: "fieldRef",
      ref: a,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        f[0] || (f[0] = (h) => e.modelValue = h),
        f[1] || (f[1] = (h) => e.modelValueOnUpdate(h))
      ],
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
      class: R(e.field.cssClass),
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
      onClear: C,
      onFilter: c
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function X() {
  return 20;
}
const Qe = /* @__PURE__ */ T({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), a = r.formSettings, i = r.formStyle, s = a.rulesBehaviour === "lazy", l = S([]), d = S({
      limit: X(),
      offset: 0
    }), c = S();
    function u(f, h) {
      const v = e.functionsProvider.getAssociationDataCallback();
      f === "" && (d.value = {
        limit: X(),
        offset: 0
      }), h(() => {
        v({
          resourceName: e.functionsProvider.getForm().resourceName,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: f,
          context: e.functionsProvider.getForm().context
        }).then((N) => {
          l.value = N.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function b() {
      ne(() => {
        const f = e.getValueSerialized();
        f && (l.value = [
          {
            label: e.field.defaultDisplayValue ?? "???",
            value: f
          }
        ]);
      });
    }
    function _() {
      return c.value ? c.value.validate() : !1;
    }
    function C() {
      c.value && c.value.resetValidation();
    }
    function g() {
      e.clear(), l.value = [];
    }
    return q(() => {
      b(), e.registerBehaviourCallbacks(_, C);
    }), (f, h) => (p(), x(o(oe), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        h[0] || (h[0] = (v) => e.modelValue = v),
        h[1] || (h[1] = (v) => e.modelValueOnUpdate(v))
      ],
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
      class: R(e.field.cssClass),
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
      onClear: g,
      onFilter: u
    }, {
      options: D((v) => [
        (p(), x(H(o(t)), { scope: v }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), je = /* @__PURE__ */ T({
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), a = r.formSettings, i = r.formStyle, s = a.rulesBehaviour === "lazy", l = S([]), d = S({
      limit: X(),
      offset: 0
    }), c = S();
    function u(f, h) {
      const v = e.functionsProvider.getAssociationDataCallback();
      f === "" && (d.value = {
        limit: X(),
        offset: 0
      }), h(() => {
        v({
          resourceName: e.functionsProvider.getForm().resourceName,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: f,
          context: e.functionsProvider.getForm().context
        }).then((N) => {
          l.value = N.rows;
        }).catch(() => {
          l.value = [];
        });
      });
    }
    function b() {
      ne(() => {
        const f = e.getValueSerialized();
        f && (l.value = f.map(
          (h, v) => ({
            label: e.field.defaultDisplayValue[v] ?? "???",
            value: h
          })
        ));
      });
    }
    function _() {
      return c.value ? c.value.validate() : !1;
    }
    function C() {
      c.value && c.value.resetValidation();
    }
    function g() {
      e.clear(), l.value = [];
    }
    return q(() => {
      b(), e.registerBehaviourCallbacks(_, C);
    }), (f, h) => (p(), x(o(oe), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        h[0] || (h[0] = (v) => e.modelValue = v),
        h[1] || (h[1] = (v) => e.modelValueOnUpdate(v))
      ],
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
      class: R(e.field.cssClass),
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
      onClear: g,
      onFilter: u
    }, {
      options: D((v) => [
        (p(), x(H(o(t)), { scope: v }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), le = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = S();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (c, u) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (b) => e.modelValue = b),
        u[1] || (u[1] = (b) => e.modelValueOnUpdate(b))
      ],
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
      class: R(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ye = /* @__PURE__ */ T({
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, a = t.formStyle, i = r.rulesBehaviour === "lazy", s = S();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(l, d);
    }), (c, u) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (b) => e.modelValue = b),
        u[1] || (u[1] = (b) => e.modelValueOnUpdate(b))
      ],
      modelModifiers: { number: !0 },
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
      class: R(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class re {
  constructor(e, t, r, a, i, s, l, d) {
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
      ...P.getGlobalFormSetting()
    }, this.formStyle = {
      ...r,
      ...P.getGlobalFormStyle()
    }, this.actionComponent = a ?? P.getGlobalActionComponent(), this.sectionComponent = i ?? P.getGlobalSectionComponent(), this.wrapperResetComponent = s ?? P.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l ?? P.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? P.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: le,
      text: le,
      number: Ye,
      date: ze,
      datetime: Ie,
      selectString: Ae,
      selectBelongsTo: Qe,
      selectHasMany: je,
      checkbox: Ge,
      object: He
    }[e];
  }
  getForm(e, t, r) {
    const a = [];
    return e.form.sections.forEach((s) => {
      const l = [];
      s.fields.forEach((c) => {
        const u = re.getFieldComponentByFormFieldType(
          c.field_type
        ), b = {
          associationDisplayComponent: this.associationDisplayRecord[c.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            c.field_type
          )
        }, _ = {
          type: c.field_type,
          metadata: c,
          label: c.label,
          hint: c.hint,
          prefix: c.prefix,
          suffix: c.suffix,
          readonly: e.form.readonly ?? s.readonly ?? c.readonly,
          cssClass: c.css_class,
          selectOptions: c.select_options,
          rules: c.rules,
          clearable: e.form.clearable,
          defaultDisplayValue: c.default_display_value,
          component: u,
          componentOptions: b
        };
        l.push(_);
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
}
function We(n, e, t) {
  const r = t.getFormFactoryInstance().formSettings, a = t.getForm(), i = (c, u, b) => c[u] ? b ? () => s(c[u]) : () => c[u] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (c) => String(
    F.formatDate(
      F.extractDate(c, a.backendDateFormat),
      r.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(ae(r.dateFormat));
      break;
    case "datetime":
      l.push(ae(r.datetimeFormat));
      break;
  }
  return n.forEach((c) => {
    const u = c;
    switch (u.type) {
      case "required":
        l.push(Je());
        break;
      case "absence":
        l.push(Xe());
        break;
      case "acceptance":
        l.push(Ze());
        break;
      case "inclusion":
        l.push(ue(u.including));
        break;
      case "exclusion":
        l.push(Ke(u.excluding));
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
        l.push(tt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          nt(
            i(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          ot(
            i(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          rt(
            i(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          lt(
            i(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          at(i(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          it(
            i(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(st());
        break;
      case "numberNumericOnly":
        l.push(ut());
        break;
      case "numberEvenOnly":
        l.push(ct());
        break;
      case "numberOddOnly":
        l.push(dt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          ft(
            i(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          mt(
            i(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          pt(
            i(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          gt(
            i(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          ht(
            i(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          bt(i(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          yt(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          vt(
            i(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ft(
            i(u, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          St(
            i(u, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          _t(
            i(u, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Ct(
            i(u, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Vt(
            i(u, "equal_to", !0),
            r.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          xt(
            i(u, "other_than", !0),
            r.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((c) => {
    switch (c) {
      case "allowBlank":
        return et(l);
      case "allowNull":
        return Me(l);
    }
  }) : l;
}
function Je() {
  return (n) => !!n || "Ce champ est requis";
}
function ue(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function Ke(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${ue.toString()}`
  );
}
function Xe() {
  return (n) => !n || "Ce champ doit être vide";
}
function Ze() {
  return (n) => !!n || "Doit être accepté";
}
function Me(n) {
  return (e) => (e === null || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function et(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function tt() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function nt(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function ot(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function rt(n) {
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
function at(n, e) {
  return (t) => {
    const r = n();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function it(n, e) {
  return (t) => {
    const r = n();
    return Number(t) !== r || `Doit être différent de ${n}`;
  };
}
function st() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function ut() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function ct() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function dt() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function ft(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function mt(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function pt(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function gt(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function yt(n, e) {
  return (t) => {
    const r = n(), a = e();
    return String(t).length >= r && String(t).length <= a || `Entre ${r} et ${a}`;
  };
}
function bt(n, e) {
  return (t) => {
    const r = n();
    return String(t) === r || `Égale à ${r}`;
  };
}
function ht(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function vt(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ft(n, e) {
  return (t) => {
    const r = n(), a = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return a <= i || `Inf. ou égal à ${r}`;
  };
}
function St(n, e) {
  return (t) => {
    const r = n(), a = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return a < i || `Inf. à ${r}`;
  };
}
function _t(n, e) {
  return (t) => {
    const r = n(), a = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return a >= i || `Sup. ou égal à ${r}`;
  };
}
function Ct(n, e) {
  return (t) => {
    const r = n(), a = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return a > i || `Sup. à ${r}`;
  };
}
function Vt(n, e) {
  return (t) => {
    const r = n(), a = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return a === i || `Égale à ${a}`;
  };
}
function xt(n, e) {
  return (t) => {
    const r = n();
    return F.extractDate(String(t), e) !== F.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function ae(n) {
  return (e) => e == null || e === "" ? !0 : Dt(e, n) || `Date invalide. Format : ${n}`;
}
function Dt(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = F.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : F.formatDate(t, e) === n;
}
const kt = {
  computeServerRules: We
}, Bt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Tt = ["index"], ie = /* @__PURE__ */ T({
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
    const i = _(), s = S(), l = S([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = c(s.value), ne(() => {
        N();
      });
    }
    function c(m) {
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : F.formatDate(
            F.extractDate(
              String(m),
              t.functionsProvider.getForm().backendDateFormat
            ),
            t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : F.formatDate(
            F.extractDate(
              String(m),
              t.functionsProvider.getForm().backendDatetimeFormat
            ),
            t.functionsProvider.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return m;
    }
    function u(m) {
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : F.formatDate(
            F.extractDate(
              String(m),
              t.functionsProvider.getFormFactoryInstance().formSettings.dateFormat
            ),
            t.functionsProvider.getForm().backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : F.formatDate(
            F.extractDate(
              String(m),
              t.functionsProvider.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            t.functionsProvider.getForm().backendDatetimeFormat
          );
      }
      return m;
    }
    function b() {
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
    function _() {
      return kt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function C(m) {
      s.value = m;
    }
    function g() {
      return o(s);
    }
    function f() {
      return u(o(s));
    }
    function h(m) {
      l.value = m;
    }
    function v() {
      return r();
    }
    function N() {
      return a();
    }
    function A(m, z) {
      r = m, a = z;
    }
    return e({
      reset: d,
      clear: b,
      validate: v,
      resetValidation: N,
      getValueDeserialized: f,
      getValueSerialized: g,
      setupBackendErrors: h
    }), q(() => {
      var z;
      d();
      const m = (z = Fe()) == null ? void 0 : z.exposed;
      m && t.functionsProvider && t.functionsProvider.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, z) => (p(), O("div", null, [
      J(m.$slots, "default", {
        is: t.field.component,
        modelValue: s.value,
        field: t.field,
        functionsProvider: t.functionsProvider,
        rules: o(i),
        reset: d,
        clear: b,
        getValueDeserialized: f,
        getValueSerialized: g,
        validate: v,
        modelValueOnUpdate: C,
        registerBehaviourCallbacks: A
      }, () => [
        (p(), x(H(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: b,
          getValueDeserialized: f,
          getValueSerialized: g,
          validate: v,
          modelValueOnUpdate: C,
          registerBehaviourCallbacks: A
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        l.value.length > 0 ? (p(), O("div", Bt, [
          (p(!0), O(L, null, ee(l.value, (Q, j) => (p(), O("div", {
            index: j,
            class: "flex column"
          }, G(Q), 9, Tt))), 256))
        ])) : $("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, Nt = /* @__PURE__ */ T({
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
    const a = Object.freeze(
      new re(
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
      registerRef: A,
      getDataByFieldName: m,
      getFieldDataByFieldName: z,
      getFormFactoryInstance: Q,
      getForm: j,
      getAssociationDataCallback: ce
    }, s = S(/* @__PURE__ */ new Map()), l = S(), d = S(!1), c = S(!1), u = S("create");
    async function b() {
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
      ), t.resourceId && (u.value = "edit"), d.value = !0;
    }
    async function _() {
      var w, Y;
      if (!g())
        return;
      c.value = !0, N();
      const y = C(), V = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        context: t.context
      });
      V.success ? (u.value === "create" && (u.value = "edit"), r && V.resource_data && (r.resource_data = V.resource_data), f(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...s.value].forEach((E) => {
        const W = V.errors[E[0]];
        W && E[1].setupBackendErrors(W);
      }), (w = t.onSubmitFail) == null || w.call(t)), c.value = !1;
    }
    function C() {
      const y = {};
      return [...s.value].forEach((V) => {
        y[V[0]] = V[1].getValueDeserialized();
      }), y;
    }
    function g() {
      let y = !0;
      return s.value.forEach((V) => {
        if (!V.validate()) {
          y = !1;
          return;
        }
      }), y;
    }
    function f() {
      s.value.forEach((y) => {
        y.reset();
      });
    }
    function h() {
      s.value.forEach((y) => {
        y.clear();
      });
    }
    function v() {
      s.value.forEach((y) => {
        y.resetValidation();
      });
    }
    function N() {
      s.value.forEach((y) => {
        y.setupBackendErrors([]);
      });
    }
    function A(y, V) {
      s.value.set(y, V);
    }
    function m(y) {
      if (r)
        return r.resource_data[y];
    }
    function z(y) {
      const V = [...s.value].find((w) => w[0] === y);
      return V ? V[1].getValueSerialized() : null;
    }
    function Q() {
      return a;
    }
    function j() {
      return o(l.value);
    }
    function ce() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function de() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((V) => {
        (t[V] === null || t[V] === void 0) && console.warn(`Missing props for <Submit64> -> ${V}`);
      });
    }
    function fe() {
      return u.value;
    }
    return e({
      getMode: fe,
      getFormFactoryInstance: Q,
      getForm: j,
      validateForm: g,
      resetForm: f,
      clearForm: h,
      resetValidation: v,
      submitForm: _
    }), q(async () => {
      de(), await b();
    }), (y, V) => d.value && l.value ? (p(), O("div", Ot, [
      I("div", {
        class: R(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), O(L, null, ee(l.value.sections, (w, Y) => (p(), x(H(o(a).sectionComponent), {
          key: Y,
          section: w,
          context: t.context,
          "functions-provider": i
        }, {
          default: D(() => [
            (p(!0), O(L, null, ee(w.fields, (E) => (p(), O(L, {
              key: E.metadata.field_name
            }, [
              y.$slots[E.metadata.field_name] ? (p(), x(ie, {
                key: 1,
                field: E,
                context: t.context,
                "functions-provider": i
              }, {
                default: D((W) => [
                  J(y.$slots, "default", Se({ ref_for: !0 }, W))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (p(), x(ie, {
                key: 0,
                field: E,
                context: t.context,
                "functions-provider": i
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (p(), x(H(o(a).actionComponent), {
        isLoadingSubmit: c.value,
        submit: _,
        clear: l.value.clearable ? h : void 0,
        reset: l.value.resetable ? f : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? J(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : $("", !0)
    ])) : $("", !0);
  }
});
export {
  P as Submit64,
  Nt as Submit64Form
};
