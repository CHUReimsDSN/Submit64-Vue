var ge = Object.defineProperty;
var ye = (n, e, t) => e in n ? ge(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => ye(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as O, openBlock as p, createVNode as B, createBlock as x, createCommentVNode as $, unref as o, normalizeClass as R, createElementVNode as I, toDisplayString as L, renderSlot as J, resolveComponent as be, normalizeProps as ne, guardReactiveProps as oe, withCtx as D, createTextVNode as he, ref as S, onMounted as q, watch as ve, resolveDynamicComponent as G, nextTick as re, getCurrentInstance as Fe, Fragment as W, renderList as ee, mergeProps as Se } from "vue";
import { QBtn as U, QIcon as K, QItem as _e, QItemSection as Ce, QItemLabel as Ve, QInput as M, QPopupProxy as te, QDate as ce, QTime as xe, QCheckbox as De, QSelect as ae, date as F } from "quasar";
const ke = { class: "flex row items-center no-wrap q-pt-sm" }, Be = /* @__PURE__ */ T({
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
    return (t, r) => (p(), O("div", ke, [
      B(o(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: r[0] || (r[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), x(o(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: r[1] || (r[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : $("", !0),
      e.clear ? (p(), x(o(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: r[2] || (r[2] = (l) => e.clear())
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
        I("div", Oe, L(e.section.label), 1)
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
    return (t, r) => (p(), x(o(_e), ne(oe(e.itemProps)), {
      default: D(() => [
        B(o(Ce), null, {
          default: D(() => [
            B(o(Ve), null, {
              default: D(() => [
                he(L(e.entry.label), 1)
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = S(), a = S();
    function d() {
      s.value && s.value.hide();
    }
    function c() {
      return a.value ? a.value.validate() : !1;
    }
    function u() {
      a.value && a.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(c, u);
    }), (h, _) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: a,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        _[2] || (_[2] = (C) => e.modelValue = C),
        _[3] || (_[3] = (C) => e.modelValueOnUpdate(C))
      ],
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
                B(o(ce), {
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = S(), a = S(), d = S();
    function c() {
      s.value && s.value.hide();
    }
    function u() {
      a.value && a.value.hide();
    }
    function h() {
      return d.value ? d.value.validate() : !1;
    }
    function _() {
      d.value && d.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(h, _);
    }), (C, y) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        y[4] || (y[4] = (f) => e.modelValue = f),
        y[5] || (y[5] = (f) => e.modelValueOnUpdate(f))
      ],
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
                B(o(ce), {
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (f) => e.modelValue = f),
                    y[1] || (y[1] = (f) => e.modelValueOnUpdate(f))
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
              ref: a,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                B(o(xe), {
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": [
                    y[2] || (y[2] = (f) => e.modelValue = f),
                    y[3] || (y[3] = (f) => e.modelValueOnUpdate(f))
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
    const e = n, t = S(!0), l = e.functionsProvider.getFormFactoryInstance().formStyle;
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
    ), q(() => {
      e.registerBehaviourCallbacks(i, s);
    }), (a, d) => (p(), O("div", Ue, [
      B(o(De), {
        modelValue: e.modelValue,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (c) => e.modelValue = c),
          d[1] || (d[1] = (c) => e.modelValueOnUpdate(c))
        ],
        label: e.field.label,
        dense: o(l).fieldDense,
        color: o(l).fieldColor,
        "aria-readonly": e.field.readonly,
        class: R([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (p(), O("div", Le, L(e.field.hint), 1)) : $("", !0),
      t.value !== !0 ? (p(), O("div", Ge, L(t.value), 1)) : $("", !0)
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
    const e = n, t = S([]), r = S([]), l = S(), i = e.functionsProvider.getFormFactoryInstance(), s = i.formSettings, a = i.formStyle, d = s.rulesBehaviour === "lazy";
    function c(y, f) {
      if (y === "") {
        f(() => {
          r.value = [...t.value];
        });
        return;
      }
      f(() => {
        const v = y.toLowerCase();
        r.value = t.value.filter((g) => g.label.toLowerCase().includes(v));
      });
    }
    function u() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function h() {
      return l.value ? l.value.validate() : !1;
    }
    function _() {
      l.value && l.value.resetValidation();
    }
    function C() {
      e.clear(), r.value = [];
    }
    return q(() => {
      u(), e.registerBehaviourCallbacks(h, _);
    }), (y, f) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        f[0] || (f[0] = (v) => e.modelValue = v),
        f[1] || (f[1] = (v) => e.modelValueOnUpdate(v))
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = S([]), d = S({
      limit: X(),
      offset: 0
    }), c = S();
    function u(f, v) {
      const g = e.functionsProvider.getAssociationDataCallback();
      f === "" && (d.value = {
        limit: X(),
        offset: 0
      }), v(() => {
        g({
          resourceName: e.functionsProvider.getForm().resourceName,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: f,
          context: e.functionsProvider.getForm().context
        }).then((N) => {
          a.value = N.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function h() {
      re(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (a.value = [
          {
            label: e.field.associationData.label ?? "???",
            value: f,
            data: e.field.associationData.data
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
    function y() {
      e.clear(), a.value = [];
    }
    return q(() => {
      h(), e.registerBehaviourCallbacks(_, C);
    }), (f, v) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        v[0] || (v[0] = (g) => e.modelValue = g),
        v[1] || (v[1] = (g) => e.modelValueOnUpdate(g))
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
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: y,
      onFilter: u
    }, {
      options: D((g) => [
        (p(), x(G(o(t)), ne(oe({
          associationName: e.field.metadata.field_association_name,
          entry: g.opt,
          itemProps: g.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
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
    const e = n, t = e.field.componentOptions.associationDisplayComponent, r = e.functionsProvider.getFormFactoryInstance(), l = r.formSettings, i = r.formStyle, s = l.rulesBehaviour === "lazy", a = S([]), d = S({
      limit: X(),
      offset: 0
    }), c = S();
    function u(f, v) {
      const g = e.functionsProvider.getAssociationDataCallback();
      f === "" && (d.value = {
        limit: X(),
        offset: 0
      }), v(() => {
        g({
          resourceName: e.functionsProvider.getForm().resourceName,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: f,
          context: e.functionsProvider.getForm().context
        }).then((N) => {
          a.value = N.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function h() {
      re(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (a.value = f.map(
          (v, g) => ({
            label: e.field.associationData.label[g] ?? "???",
            value: v,
            data: e.field.associationData.data[g]
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
    function y() {
      e.clear(), a.value = [];
    }
    return q(() => {
      h(), e.registerBehaviourCallbacks(_, C);
    }), (f, v) => (p(), x(o(ae), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        v[0] || (v[0] = (g) => e.modelValue = g),
        v[1] || (v[1] = (g) => e.modelValueOnUpdate(g))
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
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: y,
      onFilter: u
    }, {
      options: D((g) => [
        (p(), x(G(o(t)), ne(oe({
          associationName: e.field.metadata.field_association_name,
          entry: g.opt,
          itemProps: g.itemProps
        })), null, 16))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = S();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (c, u) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (h) => e.modelValue = h),
        u[1] || (u[1] = (h) => e.modelValueOnUpdate(h))
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
    const e = n, t = e.functionsProvider.getFormFactoryInstance(), r = t.formSettings, l = t.formStyle, i = r.rulesBehaviour === "lazy", s = S();
    function a() {
      return s.value ? s.value.validate() : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return q(() => {
      e.registerBehaviourCallbacks(a, d);
    }), (c, u) => (p(), x(o(M), {
      ref_key: "fieldRef",
      ref: s,
      modelValue: e.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (h) => e.modelValue = h),
        u[1] || (u[1] = (h) => e.modelValueOnUpdate(h))
      ],
      modelModifiers: { number: !0 },
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
      ...P.getGlobalFormSetting()
    }, this.formStyle = {
      ...r,
      ...P.getGlobalFormStyle()
    }, this.actionComponent = l ?? P.getGlobalActionComponent(), this.sectionComponent = i ?? P.getGlobalSectionComponent(), this.wrapperResetComponent = s ?? P.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a ?? P.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? P.getGlobalAssociationDisplayRecord();
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
      s.fields.forEach((c) => {
        const u = le.getFieldComponentByFormFieldType(
          c.field_type
        ), h = {
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
          staticSelectOptions: c.static_select_options,
          associationData: c.field_association_data,
          rules: c.rules,
          clearable: e.form.clearable,
          component: u,
          componentOptions: h
        };
        a.push(_);
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
  const r = t.getFormFactoryInstance().formSettings, l = t.getForm(), i = (c, u, h) => c[u] ? h ? () => s(c[u]) : () => c[u] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", s = (c) => String(
    F.formatDate(
      F.extractDate(c, l.backendDateFormat),
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
  return n.forEach((c) => {
    const u = c;
    switch (u.type) {
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
        a.push(de(u.including));
        break;
      case "exclusion":
        a.push(Xe(u.excluding));
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
            i(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          rt(
            i(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          at(
            i(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          lt(
            i(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          it(i(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          st(
            i(u, "other_than")
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
            i(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          pt(
            i(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          gt(
            i(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          yt(
            i(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          vt(
            i(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          ht(i(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          bt(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          Ft(
            i(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          St(
            i(u, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          _t(
            i(u, "less_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          Ct(
            i(u, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          Vt(
            i(u, "greater_than", !0),
            r.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          xt(
            i(u, "equal_to", !0),
            r.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          Dt(
            i(u, "other_than", !0),
            r.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((c) => {
    switch (c) {
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
function Ft(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function St(n, e) {
  return (t) => {
    const r = n(), l = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return l <= i || `Inf. ou égal à ${r}`;
  };
}
function _t(n, e) {
  return (t) => {
    const r = n(), l = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return l < i || `Inf. à ${r}`;
  };
}
function Ct(n, e) {
  return (t) => {
    const r = n(), l = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return l >= i || `Sup. ou égal à ${r}`;
  };
}
function Vt(n, e) {
  return (t) => {
    const r = n(), l = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return l > i || `Sup. à ${r}`;
  };
}
function xt(n, e) {
  return (t) => {
    const r = n(), l = F.extractDate(String(t), e), i = F.extractDate(r, e);
    return l === i || `Égale à ${l}`;
  };
}
function Dt(n, e) {
  return (t) => {
    const r = n();
    return F.extractDate(String(t), e) !== F.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function se(n) {
  return (e) => e == null || e === "" ? !0 : kt(e, n) || `Date invalide. Format : ${n}`;
}
function kt(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = F.extractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : F.formatDate(t, e) === n;
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
    const i = _(), s = S(), a = S([]);
    function d() {
      s.value = t.functionsProvider.getDataByFieldName(
        t.field.metadata.field_name
      ), s.value = c(s.value), re(() => {
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
    function _() {
      return Bt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.functionsProvider
      );
    }
    function C(m) {
      s.value = m;
    }
    function y() {
      return o(s);
    }
    function f() {
      return u(o(s));
    }
    function v(m) {
      a.value = m;
    }
    function g() {
      return r();
    }
    function N() {
      return l();
    }
    function H(m, z) {
      r = m, l = z;
    }
    return e({
      reset: d,
      clear: h,
      validate: g,
      resetValidation: N,
      getValueDeserialized: f,
      getValueSerialized: y,
      setupBackendErrors: v
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
        clear: h,
        getValueDeserialized: f,
        getValueSerialized: y,
        validate: g,
        modelValueOnUpdate: C,
        registerBehaviourCallbacks: H
      }, () => [
        (p(), x(G(t.field.component), {
          modelValue: s.value,
          field: t.field,
          functionsProvider: t.functionsProvider,
          rules: o(i),
          reset: d,
          clear: h,
          getValueDeserialized: f,
          getValueSerialized: y,
          validate: g,
          modelValueOnUpdate: C,
          registerBehaviourCallbacks: H
        }, null, 8, ["modelValue", "field", "functionsProvider", "rules"])),
        a.value.length > 0 ? (p(), O("div", Tt, [
          (p(!0), O(W, null, ee(a.value, (A, Q) => (p(), O("div", {
            index: Q,
            class: "flex column"
          }, L(A), 9, Ot))), 256))
        ])) : $("", !0)
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
      registerRef: H,
      getDataByFieldName: m,
      getFieldDataByFieldName: z,
      getFormFactoryInstance: A,
      getForm: Q,
      getAssociationDataCallback: fe
    }, s = S(/* @__PURE__ */ new Map()), a = S(), d = S(!1), c = S(!1), u = S("create");
    async function h() {
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
      ), t.resourceId && (u.value = "edit"), d.value = !0;
    }
    async function _() {
      var w, j;
      if (!y())
        return;
      c.value = !0, N();
      const b = C(), V = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      V.success ? (u.value === "create" && (u.value = "edit"), r && V.resource_data && (r.resource_data = V.resource_data), f(), (j = t.onSubmitSuccess) == null || j.call(t)) : ([...s.value].forEach((E) => {
        const Y = V.errors[E[0]];
        Y && E[1].setupBackendErrors(Y);
      }), (w = t.onSubmitFail) == null || w.call(t)), c.value = !1;
    }
    function C() {
      const b = {};
      return [...s.value].forEach((V) => {
        b[V[0]] = V[1].getValueDeserialized();
      }), b;
    }
    function y() {
      let b = !0;
      return s.value.forEach((V) => {
        if (!V.validate()) {
          b = !1;
          return;
        }
      }), b;
    }
    function f() {
      s.value.forEach((b) => {
        b.reset();
      });
    }
    function v() {
      s.value.forEach((b) => {
        b.clear();
      });
    }
    function g() {
      s.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function N() {
      s.value.forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function H(b, V) {
      s.value.set(b, V);
    }
    function m(b) {
      if (r)
        return r.resource_data[b];
    }
    function z(b) {
      const V = [...s.value].find((w) => w[0] === b);
      return V ? V[1].getValueSerialized() : null;
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
      ].forEach((V) => {
        (t[V] === null || t[V] === void 0) && console.warn(`Missing props for <Submit64> -> ${V}`);
      });
    }
    function pe() {
      return u.value;
    }
    return e({
      getMode: pe,
      getFormFactoryInstance: A,
      getForm: Q,
      validateForm: y,
      resetForm: f,
      clearForm: v,
      resetValidation: g,
      submitForm: _
    }), q(async () => {
      me(), await h();
    }), (b, V) => d.value && a.value ? (p(), O("div", Rt, [
      I("div", {
        class: R(a.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), O(W, null, ee(a.value.sections, (w, j) => (p(), x(G(o(l).sectionComponent), {
          key: j,
          section: w,
          context: t.context,
          "functions-provider": i
        }, {
          default: D(() => [
            (p(!0), O(W, null, ee(w.fields, (E) => (p(), O(W, {
              key: E.metadata.field_name
            }, [
              b.$slots[E.metadata.field_name] ? (p(), x(ue, {
                key: 1,
                field: E,
                context: t.context,
                "functions-provider": i
              }, {
                default: D((Y) => [
                  J(b.$slots, "default", Se({ ref_for: !0 }, Y))
                ]),
                _: 3
              }, 8, ["field", "context"])) : (p(), x(ue, {
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
      (p(), x(G(o(l).actionComponent), {
        isLoadingSubmit: c.value,
        submit: _,
        clear: a.value.clearable ? v : void 0,
        reset: a.value.resetable ? f : void 0,
        "functions-provider": i
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? J(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: a.value }
      }) : $("", !0)
    ])) : $("", !0);
  }
});
export {
  P as Submit64,
  $t as Submit64Form
};
