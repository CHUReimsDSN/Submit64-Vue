var fe = Object.defineProperty;
var me = (r, e, t) => e in r ? fe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => me(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as T, openBlock as m, createVNode as k, createBlock as C, createCommentVNode as E, unref as a, normalizeClass as R, createElementVNode as j, toDisplayString as G, renderSlot as K, resolveComponent as ge, normalizeProps as be, guardReactiveProps as ye, withCtx as V, createTextVNode as he, ref as F, onMounted as q, watch as we, Fragment as L, resolveDynamicComponent as P, nextTick as ae, inject as Se, getCurrentInstance as _e, renderList as te, provide as Fe } from "vue";
import { QBtn as U, QIcon as J, QItem as ve, QItemSection as Ce, QItemLabel as xe, QInput as M, QPopupProxy as re, QDate as ue, QTime as Ve, QCheckbox as De, QSelect as ne, date as _, uid as ke } from "quasar";
const Be = { class: "flex row items-center no-wrap q-pt-sm" }, Te = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (m(), T("div", Be, [
      k(a(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (m(), C(a(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : E("", !0),
      e.clear ? (m(), C(a(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : E("", !0)
    ]));
  }
}), Re = { class: "flex row items-center" }, qe = { class: "text-body1 text-weight-medium" }, Oe = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    section: {},
    context: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (m(), T("div", {
      class: R(["flex column", e.section.cssClass])
    }, [
      j("div", Re, [
        e.section.icon ? (m(), C(a(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : E("", !0),
        j("div", qe, G(e.section.label), 1)
      ]),
      j("div", Oe, [
        K(t.$slots, "default")
      ])
    ], 2));
  }
}), $e = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const l = ge("q-icon");
      return m(), C(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Ee = /* @__PURE__ */ B({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    index: {},
    label: {},
    selected: { type: Boolean },
    focused: { type: Boolean },
    opt: {},
    itemProps: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (m(), C(a(ve), be(ye(e.itemProps)), {
      default: V(() => [
        k(a(Ce), null, {
          default: V(() => [
            k(a(xe), null, {
              default: V(() => [
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
    D(this, "_formSettings");
    D(this, "_formStyle");
    D(this, "_actionComponent");
    D(this, "_sectionComponent");
    D(this, "_wrapperResetComponent");
    D(this, "_associationDisplayComponent");
    D(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Te, this._sectionComponent = Ne, this._wrapperResetComponent = $e, this._associationDisplayComponent = Ee, this._associationDisplayDictonary = {};
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
D(Z, "_instance", new Z());
let N = Z;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ B({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = F(), n = F();
    function p() {
      c.value && c.value.hide();
    }
    function i() {
      return n.value ? n.value.validate() : !1;
    }
    function u() {
      n.value && n.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(i, u);
    }), (w, h) => (m(), C(a(M), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        h[2] || (h[2] = (x) => e.wrapper.modelValue = x),
        h[3] || (h[3] = (x) => e.wrapper.modelValueOnUpdate(x))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        k(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            k(a(re), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                k(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (x) => e.wrapper.modelValue = x),
                    h[1] || (h[1] = (x) => e.wrapper.modelValueOnUpdate(x))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    j("div", Ie, [
                      k(a(U), {
                        onClick: p,
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
}), je = { class: "row items-center justify-end" }, Ue = { class: "row items-center justify-end" }, Le = /* @__PURE__ */ B({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = F(), n = F(), p = F();
    function i() {
      c.value && c.value.hide();
    }
    function u() {
      n.value && n.value.hide();
    }
    function w() {
      return p.value ? p.value.validate() : !1;
    }
    function h() {
      p.value && p.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(w, h);
    }), (x, g) => (m(), C(a(M), {
      ref_key: "fieldRef",
      ref: p,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[4] || (g[4] = (d) => e.wrapper.modelValue = d),
        g[5] || (g[5] = (d) => e.wrapper.modelValueOnUpdate(d))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        k(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            k(a(re), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                k(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[0] || (g[0] = (d) => e.wrapper.modelValue = d),
                    g[1] || (g[1] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    j("div", je, [
                      k(a(U), {
                        onClick: i,
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
        k(a(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            k(a(re), {
              ref_key: "timePopupProxyRef",
              ref: n,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                k(a(Ve), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[2] || (g[2] = (d) => e.wrapper.modelValue = d),
                    g[3] || (g[3] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    j("div", Ue, [
                      k(a(U), {
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
}), Ge = {
  key: 0,
  class: "q-field__bottom"
}, Pe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ae = /* @__PURE__ */ B({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = F(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    function c() {
      t.value = !0;
    }
    return we(
      () => e.wrapper.modelValue,
      (n) => {
        for (const p of e.wrapper.rules)
          if (t.value = p(n), t.value !== !0)
            break;
      }
    ), q(() => {
      e.wrapper.registerBehaviourCallbacks(s, c);
    }), (n, p) => (m(), T(L, null, [
      k(a(De), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          p[0] || (p[0] = (i) => e.wrapper.modelValue = i),
          p[1] || (p[1] = (i) => e.wrapper.modelValueOnUpdate(i))
        ],
        label: e.wrapper.field.label,
        dense: a(l).fieldDense,
        color: a(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: R(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (m(), T("div", Ge, G(e.wrapper.field.hint), 1)) : E("", !0),
      t.value !== !0 ? (m(), T("div", Pe, G(t.value), 1)) : E("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ B({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (l, s) => " TODO json edit ? ";
  }
}), Qe = /* @__PURE__ */ B({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = F([]), o = F([]), l = F(), s = e.wrapper.injectForm.getFormFactoryInstance(), c = s.formSettings, n = s.formStyle, p = c.rulesBehaviour === "lazy";
    function i(g, d) {
      if (g === "") {
        d(() => {
          o.value = [...t.value];
        });
        return;
      }
      d(() => {
        const b = g.toLowerCase();
        o.value = t.value.filter((S) => S.label.toLowerCase().includes(b));
      });
    }
    function u(g) {
      t.value = Object.freeze(g.field.selectOptions ?? []), o.value = g.field.selectOptions ?? [];
    }
    function w() {
      return l.value ? l.value.validate() : !1;
    }
    function h() {
      l.value && l.value.resetValidation();
    }
    function x() {
      e.wrapper.clear(), o.value = [];
    }
    return q(() => {
      u(e.wrapper), e.wrapper.registerBehaviourCallbacks(w, h);
    }), (g, d) => (m(), C(a(ne), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
        d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": p,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: o.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: x,
      onFilter: i
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function Ye(r) {
  return Symbol(r);
}
function X() {
  return 20;
}
const We = /* @__PURE__ */ B({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = F([]), p = F({
      limit: X(),
      offset: 0
    }), i = F();
    function u(d, b) {
      const S = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: X(),
        offset: 0
      }), b(() => {
        S({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          n.value = O.rows;
        }).catch(() => {
          n.value = [];
        });
      });
    }
    function w() {
      const d = e.wrapper.getValueSerialized();
      d && ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: d
          }
        ];
      });
    }
    function h() {
      return i.value ? i.value.validate() : !1;
    }
    function x() {
      i.value && i.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [];
    }
    return q(() => {
      w(), e.wrapper.registerBehaviourCallbacks(h, x);
    }), (d, b) => (m(), C(a(ne), {
      ref_key: "fieldRef",
      ref: i,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (S) => e.wrapper.modelValue = S),
        b[1] || (b[1] = (S) => e.wrapper.modelValueOnUpdate(S))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: g,
      onFilter: u
    }, {
      options: V((S) => [
        (m(), C(P(a(t)), { scope: S }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ke = /* @__PURE__ */ B({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = F([]), p = F({
      limit: X(),
      offset: 0
    }), i = F();
    function u(d, b) {
      const S = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: X(),
        offset: 0
      }), b(() => {
        S({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          n.value = O.rows;
        }).catch(() => {
          n.value = [];
        });
      });
    }
    function w() {
      const d = e.wrapper.getValueSerialized();
      if (!d) {
        console.log("early return shit");
        return;
      }
      ae(() => {
        console.log("in next tick => ", d), n.value = d.map(
          (b, S) => (console.log("in map => ", b, S), {
            label: e.wrapper.field.defaultDisplayValue[S] ?? "???",
            value: b
          })
        );
      });
    }
    function h() {
      return i.value ? i.value.validate() : !1;
    }
    function x() {
      i.value && i.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [];
    }
    return q(() => {
      w(), e.wrapper.registerBehaviourCallbacks(h, x);
    }), (d, b) => (m(), C(a(ne), {
      ref_key: "fieldRef",
      ref: i,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (S) => e.wrapper.modelValue = S),
        b[1] || (b[1] = (S) => e.wrapper.modelValueOnUpdate(S))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: g,
      onFilter: u
    }, {
      options: V((S) => [
        (m(), C(P(a(t)), { scope: S }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), le = /* @__PURE__ */ B({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = F();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function p() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(n, p);
    }), (i, u) => (m(), C(a(M), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (w) => e.wrapper.modelValue = w),
        u[1] || (u[1] = (w) => e.wrapper.modelValueOnUpdate(w))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Je = /* @__PURE__ */ B({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = F();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function p() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(n, p);
    }), (i, u) => (m(), C(a(M), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (w) => e.wrapper.modelValue = w),
        u[1] || (u[1] = (w) => e.wrapper.modelValueOnUpdate(w))
      ],
      modelModifiers: { number: !0 },
      type: "number",
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class oe {
  constructor(e, t, o, l, s, c, n, p) {
    D(this, "resourceName");
    D(this, "formSettings");
    D(this, "formStyle");
    D(this, "actionComponent");
    D(this, "sectionComponent");
    D(this, "wrapperResetComponent");
    D(this, "associationDisplayComponent");
    D(this, "associationDisplayRecord");
    this.resourceName = e, this.formSettings = {
      ...t,
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = l ?? N.getGlobalActionComponent(), this.sectionComponent = s ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = p ?? N.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: le,
      text: le,
      number: Je,
      date: ze,
      datetime: Le,
      selectString: Qe,
      selectBelongsTo: We,
      selectHasMany: Ke,
      checkbox: Ae,
      object: He
    }[e];
  }
  getForm(e, t, o) {
    const l = [];
    return e.form.sections.forEach((c) => {
      const n = [];
      c.fields.forEach((i) => {
        const u = oe.getFieldComponentByFormFieldType(
          i.field_type
        ), w = {
          associationDisplayComponent: this.associationDisplayRecord[i.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            i.field_type
          )
        }, h = {
          type: i.field_type,
          metadata: i,
          label: i.label,
          hint: i.hint,
          prefix: i.prefix,
          suffix: i.suffix,
          readonly: e.form.readonly ?? c.readonly ?? i.readonly,
          cssClass: i.css_class,
          selectOptions: i.select_options,
          rules: i.rules,
          clearable: e.form.clearable,
          provideUniqKey: t,
          defaultDisplayValue: i.default_display_value,
          component: u,
          componentOptions: w
        };
        n.push(h);
      });
      const p = {
        label: c.label,
        icon: c.icon,
        cssClass: c.css_class,
        readonly: e.form.readonly ?? c.readonly,
        fields: n
      };
      l.push(p);
    }), {
      sections: l,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      readonly: e.form.readonly,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      context: o
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
}
function Xe(r, e, t) {
  const o = t.getFormFactoryInstance().formSettings, l = t.getForm(), s = (i, u, w) => i[u] ? w ? () => c(i[u]) : () => i[u] : i.compare_to ? () => t.getFieldDataByFieldName(i.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (i) => String(
    _.formatDate(
      _.extractDate(i, l.backendDateFormat),
      o.dateFormat
    )
  ), n = [], p = [];
  switch (e) {
    case "date":
      n.push(se(o.dateFormat));
      break;
    case "datetime":
      n.push(se(o.datetimeFormat));
      break;
  }
  return r.forEach((i) => {
    const u = i;
    switch (u.type) {
      case "required":
        n.push(Ze());
        break;
      case "absence":
        n.push(et());
        break;
      case "acceptance":
        n.push(tt());
        break;
      case "inclusion":
        n.push(ce(u.including));
        break;
      case "exclusion":
        n.push(Me(u.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        p.push("allowNull");
        break;
      case "allowBlank":
        p.push("allowBlank");
        break;
      case "positiveNumber":
        n.push(nt());
        break;
      case "lessThanOrEqualNumber":
        n.push(
          ot(
            s(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        n.push(
          lt(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        n.push(
          st(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        n.push(
          it(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        n.push(
          ut(s(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        n.push(
          ct(
            s(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        n.push(pt());
        break;
      case "numberNumericOnly":
        n.push(dt());
        break;
      case "numberEvenOnly":
        n.push(ft());
        break;
      case "numberOddOnly":
        n.push(mt());
        break;
      case "lessThanOrEqualStringLength":
        n.push(
          gt(
            s(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        n.push(
          bt(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        n.push(
          yt(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        n.push(
          ht(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        n.push(
          _t(
            s(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        n.push(
          St(s(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        n.push(
          wt(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        n.push(
          Ft(
            s(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        n.push(
          vt(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        n.push(
          Ct(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        n.push(
          xt(
            s(u, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        n.push(
          Vt(
            s(u, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        n.push(
          Dt(
            s(u, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        n.push(
          kt(
            s(u, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((i) => {
    switch (i) {
      case "allowBlank":
        return at(n);
      case "allowNull":
        return rt(n);
    }
  }) : n;
}
function Ze() {
  return (r) => !!r || "Ce champ est requis";
}
function ce(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Me(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ce.toString()}`
  );
}
function et() {
  return (r) => !r || "Ce champ doit être vide";
}
function tt() {
  return (r) => !!r || "Doit être accepté";
}
function rt(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function at(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function nt() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function ot(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function lt(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function st(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function it(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function ut(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function ct(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function pt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function dt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function ft() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function mt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function gt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function bt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function yt(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function ht(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function wt(r, e) {
  return (t) => {
    const o = r(), l = e();
    return String(t).length >= o && String(t).length <= l || `Entre ${o} et ${l}`;
  };
}
function St(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function _t(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Ft(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l <= s || `Inf. ou égal à ${o}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l < s || `Inf. à ${o}`;
  };
}
function xt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l >= s || `Sup. ou égal à ${o}`;
  };
}
function Vt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l > s || `Sup. à ${o}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l === s || `Égale à ${l}`;
  };
}
function kt(r, e) {
  return (t) => {
    const o = r();
    return _.extractDate(String(t), e) !== _.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function se(r) {
  return (e) => e == null || e === "" ? !0 : Bt(e, r) || `Date invalide. Format : ${r}`;
}
function Bt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = _.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : _.formatDate(t, e) === r;
}
const Tt = {
  computeServerRules: Xe
}, Rt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, qt = ["index"], ie = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {},
    context: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = () => !0, l = () => {
    };
    const s = Se(t.field.provideUniqKey), c = x(), n = F(), p = F([]);
    function i() {
      s && (n.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), n.value = u(n.value), ae(() => {
        A();
      }));
    }
    function u(f) {
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : _.formatDate(
            _.extractDate(String(f), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : _.formatDate(
            _.extractDate(
              String(f),
              s.getForm().backendDatetimeFormat
            ),
            s.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return f;
    }
    function w(f) {
      switch (t.field.type) {
        case "date":
          return f == null || f === "" ? null : _.formatDate(
            _.extractDate(
              String(f),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : _.formatDate(
            _.extractDate(
              String(f),
              s.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            s.getForm().backendDatetimeFormat
          );
      }
      return f;
    }
    function h() {
      switch (t.field.type) {
        case "string":
          n.value = "";
          break;
        case "checkbox":
          n.value = !1;
          break;
        case "date":
          n.value = null;
          break;
        case "datetime":
          n.value = null;
          break;
        case "number":
          n.value = null;
          break;
        case "selectString":
          n.value = void 0;
          break;
        case "text":
          n.value = "";
          break;
        case "object":
          n.value = {};
          break;
        case "selectBelongsTo":
          n.value = void 0;
          break;
        case "selectHasMany":
          n.value = void 0;
          break;
      }
    }
    function x() {
      return Tt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function g(f) {
      n.value = f;
    }
    function d() {
      return a(n);
    }
    function b() {
      return w(a(n));
    }
    function S(f) {
      p.value = f;
    }
    function O() {
      return o();
    }
    function A() {
      return l();
    }
    function H(f, $) {
      o = f, l = $;
    }
    return e({
      reset: i,
      clear: h,
      validate: O,
      resetValidation: A,
      getValueDeserialized: b,
      getValueSerialized: d,
      setupBackendErrors: S
    }), q(() => {
      var $;
      i();
      const f = ($ = _e()) == null ? void 0 : $.exposed;
      f && s && s.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, $) => (m(), T("div", null, [
      K(f.$slots, "default", {
        propsWrapper: { modelValue: n.value, modelValueOnUpdate: g, field: t.field, injectForm: a(s), rules: a(c), reset: i, clear: h, getValueDeserialized: b, getValueSerialized: d, validate: O, registerBehaviourCallbacks: H }
      }, () => [
        (m(), C(P(t.field.component), {
          wrapper: { modelValue: n.value, modelValueOnUpdate: g, field: t.field, injectForm: a(s), rules: a(c), reset: i, clear: h, getValueDeserialized: b, getValueSerialized: d, validate: O, registerBehaviourCallbacks: H }
        }, null, 8, ["wrapper"])),
        p.value.length > 0 ? (m(), T("div", Rt, [
          (m(!0), T(L, null, te(p.value, (Q, ee) => (m(), T("div", {
            index: ee,
            class: "flex column"
          }, G(Q), 9, qt))), 256))
        ])) : E("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, It = /* @__PURE__ */ B({
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
  setup(r, { expose: e }) {
    const t = r;
    let o = null;
    const l = Object.freeze(
      new oe(
        t.resourceName,
        t.formSettings,
        t.formStyle,
        t.actionComponent,
        t.sectionComponent,
        t.wrapperResetComponent,
        t.associationDisplayComponent,
        t.associationDisplayRecord
      )
    ), s = Ye(ke()), c = F(/* @__PURE__ */ new Map()), n = F(), p = F(!1), i = F(!1), u = F("create");
    async function w() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), n.value = Object.freeze(
        l.getForm(
          o,
          s,
          t.context
        )
      ), t.resourceId && (u.value = "edit"), p.value = !0;
    }
    async function h() {
      var I, Y;
      if (!g())
        return;
      i.value = !0, O();
      const y = x(), v = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        context: t.context
      });
      v.success ? (u.value === "create" && (u.value = "edit"), o && v.resource_data && (o.resource_data = v.resource_data), d(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach((z) => {
        const W = v.errors[z[0]];
        W && z[1].setupBackendErrors(W);
      }), (I = t.onSubmitFail) == null || I.call(t)), i.value = !1;
    }
    function x() {
      const y = {};
      return [...c.value].forEach((v) => {
        y[v[0]] = v[1].getValueDeserialized();
      }), y;
    }
    function g() {
      let y = !0;
      return c.value.forEach((v) => {
        if (!v.validate()) {
          y = !1;
          return;
        }
      }), y;
    }
    function d() {
      c.value.forEach((y) => {
        y.reset();
      });
    }
    function b() {
      c.value.forEach((y) => {
        y.clear();
      });
    }
    function S() {
      c.value.forEach((y) => {
        y.resetValidation();
      });
    }
    function O() {
      c.value.forEach((y) => {
        y.setupBackendErrors([]);
      });
    }
    function A(y, v) {
      c.value.set(y, v);
    }
    function H(y) {
      if (o)
        return o.resource_data[y];
    }
    function f(y) {
      const v = [...c.value].find((I) => I[0] === y);
      return v ? v[1].getValue() : null;
    }
    function $() {
      return l;
    }
    function Q() {
      return n.value;
    }
    function ee() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function pe() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((v) => {
        (t[v] === null || t[v] === void 0) && console.warn(`Missing props for <Submit64> -> ${v}`);
      });
    }
    function de() {
      return u.value;
    }
    return Fe(s, {
      registerRef: A,
      getDataByFieldName: H,
      getFieldDataByFieldName: f,
      getFormFactoryInstance: $,
      getForm: Q,
      getAssociationDataCallback: ee
    }), e({
      getMode: de,
      getFormFactoryInstance: $,
      getForm: Q,
      validateForm: g,
      resetForm: d,
      clearForm: b,
      resetValidation: S,
      submitForm: h
    }), q(async () => {
      pe(), await w();
    }), (y, v) => p.value && n.value ? (m(), T("div", Ot, [
      j("div", {
        class: R(n.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), T(L, null, te(n.value.sections, (I, Y) => (m(), C(P(a(l).sectionComponent), {
          key: Y,
          section: I,
          context: t.context
        }, {
          default: V(() => [
            (m(!0), T(L, null, te(I.fields, (z) => (m(), T(L, {
              key: z.metadata.field_name
            }, [
              y.$slots[z.metadata.field_name] ? (m(), C(ie, {
                key: 1,
                field: z,
                context: t.context
              }, {
                default: V(({ propsWrapper: W }) => [
                  K(y.$slots, "default", { propsWrapper: W })
                ]),
                _: 3
              }, 8, ["field", "context"])) : (m(), C(ie, {
                key: 0,
                field: z,
                context: t.context
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), C(P(a(l).actionComponent), {
        isLoadingSubmit: i.value,
        submit: h,
        clear: n.value.clearable ? b : void 0,
        reset: n.value.resetable ? d : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? K(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: n.value }
      }) : E("", !0)
    ])) : E("", !0);
  }
});
export {
  N as Submit64,
  It as Submit64Form
};
