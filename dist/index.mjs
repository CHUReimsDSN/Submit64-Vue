var fe = Object.defineProperty;
var me = (r, e, t) => e in r ? fe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var V = (r, e, t) => me(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as T, openBlock as m, createVNode as k, createBlock as x, createCommentVNode as E, unref as n, normalizeClass as R, createElementVNode as j, toDisplayString as G, renderSlot as K, resolveComponent as ge, normalizeProps as be, guardReactiveProps as ye, withCtx as D, createTextVNode as he, ref as _, onMounted as q, watch as we, Fragment as L, resolveDynamicComponent as P, nextTick as ae, inject as Se, getCurrentInstance as _e, renderList as te, provide as ve } from "vue";
import { QBtn as U, QIcon as J, QItem as Fe, QItemSection as Ce, QItemLabel as xe, QInput as M, QPopupProxy as re, QDate as ue, QTime as De, QCheckbox as Ve, QSelect as ne, date as S, uid as ke } from "quasar";
const Be = { class: "flex row items-center no-wrap q-pt-sm" }, Te = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formDef: {},
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (m(), T("div", Be, [
      k(n(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (m(), x(n(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : E("", !0),
      e.clear ? (m(), x(n(U), {
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
        e.section.icon ? (m(), x(n(J), {
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
      return m(), x(l, {
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
    return (t, o) => (m(), x(n(Fe), be(ye(e.itemProps)), {
      default: D(() => [
        k(n(Ce), null, {
          default: D(() => [
            k(n(xe), null, {
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
    V(this, "_formSettings");
    V(this, "_formStyle");
    V(this, "_actionComponent");
    V(this, "_sectionComponent");
    V(this, "_wrapperResetComponent");
    V(this, "_associationDisplayComponent");
    V(this, "_associationDisplayDictonary");
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
V(Z, "_instance", new Z());
let N = Z;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ B({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _(), a = _();
    function p() {
      c.value && c.value.hide();
    }
    function u() {
      return a.value ? a.value.validate() : !1;
    }
    function i() {
      a.value && a.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(u, i);
    }), (w, h) => (m(), x(n(M), {
      ref_key: "fieldRef",
      ref: a,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        h[2] || (h[2] = (F) => e.wrapper.modelValue = F),
        h[3] || (h[3] = (F) => e.wrapper.modelValueOnUpdate(F))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: D(() => [
        k(n(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            k(n(re), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                k(n(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (F) => e.wrapper.modelValue = F),
                    h[1] || (h[1] = (F) => e.wrapper.modelValueOnUpdate(F))
                  ],
                  mask: n(t).formSettings.dateFormat
                }, {
                  default: D(() => [
                    j("div", Ie, [
                      k(n(U), {
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
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _(), a = _(), p = _();
    function u() {
      c.value && c.value.hide();
    }
    function i() {
      a.value && a.value.hide();
    }
    function w() {
      return p.value ? p.value.validate() : !1;
    }
    function h() {
      p.value && p.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(w, h);
    }), (F, g) => (m(), x(n(M), {
      ref_key: "fieldRef",
      ref: p,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[4] || (g[4] = (d) => e.wrapper.modelValue = d),
        g[5] || (g[5] = (d) => e.wrapper.modelValueOnUpdate(d))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: D(() => [
        k(n(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            k(n(re), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                k(n(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[0] || (g[0] = (d) => e.wrapper.modelValue = d),
                    g[1] || (g[1] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: n(t).formSettings.datetimeFormat
                }, {
                  default: D(() => [
                    j("div", je, [
                      k(n(U), {
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
        }),
        k(n(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: D(() => [
            k(n(re), {
              ref_key: "timePopupProxyRef",
              ref: a,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: D(() => [
                k(n(De), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[2] || (g[2] = (d) => e.wrapper.modelValue = d),
                    g[3] || (g[3] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: n(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: D(() => [
                    j("div", Ue, [
                      k(n(U), {
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
    const e = r, t = _(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    function c() {
      t.value = !0;
    }
    return we(
      () => e.wrapper.modelValue,
      (a) => {
        for (const p of e.wrapper.rules)
          if (t.value = p(a), t.value !== !0)
            break;
      }
    ), q(() => {
      e.wrapper.registerBehaviourCallbacks(s, c);
    }), (a, p) => (m(), T(L, null, [
      k(n(Ve), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          p[0] || (p[0] = (u) => e.wrapper.modelValue = u),
          p[1] || (p[1] = (u) => e.wrapper.modelValueOnUpdate(u))
        ],
        label: e.wrapper.field.label,
        dense: n(l).fieldDense,
        color: n(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: R([e.wrapper.field.cssClass, "q-pb-md"])
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
    const e = r, t = _([]), o = _([]), l = _(), s = e.wrapper.injectForm.getFormFactoryInstance(), c = s.formSettings, a = s.formStyle, p = c.rulesBehaviour === "lazy";
    function u(g, d) {
      if (g === "") {
        d(() => {
          o.value = [...t.value];
        });
        return;
      }
      d(() => {
        const b = g.toLowerCase();
        o.value = t.value.filter((v) => v.label.toLowerCase().includes(b));
      });
    }
    function i(g) {
      t.value = Object.freeze(g.field.selectOptions ?? []), o.value = g.field.selectOptions ?? [];
    }
    function w() {
      return l.value ? l.value.validate() : !1;
    }
    function h() {
      l.value && l.value.resetValidation();
    }
    function F() {
      e.wrapper.clear(), o.value = [];
    }
    return q(() => {
      i(e.wrapper), e.wrapper.registerBehaviourCallbacks(w, h);
    }), (g, d) => (m(), x(n(ne), {
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
      outlined: n(a).fieldOutlined,
      filled: n(a).fieldFilled,
      standout: n(a).fieldStandout,
      borderless: n(a).fieldBorderless,
      rounded: n(a).fieldRounded,
      square: n(a).fieldSquare,
      dense: n(a).fieldDense,
      hideBottomSpace: n(a).fieldHideBottomSpace,
      color: n(a).fieldColor,
      bgColor: n(a).fieldBgColor,
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
      onClear: F,
      onFilter: u
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
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", a = _([]), p = _({
      limit: X(),
      offset: 0
    }), u = _();
    function i(d, b) {
      const v = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: X(),
        offset: 0
      }), b(() => {
        v({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          a.value = O.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function w() {
      ae(() => {
        const d = e.wrapper.getValueSerialized();
        d && (a.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: d
          }
        ]);
      });
    }
    function h() {
      return u.value ? u.value.validate() : !1;
    }
    function F() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), a.value = [];
    }
    return q(() => {
      w(), e.wrapper.registerBehaviourCallbacks(h, F);
    }), (d, b) => (m(), x(n(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (v) => e.wrapper.modelValue = v),
        b[1] || (b[1] = (v) => e.wrapper.modelValueOnUpdate(v))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(s).fieldOutlined,
      filled: n(s).fieldFilled,
      standout: n(s).fieldStandout,
      borderless: n(s).fieldBorderless,
      rounded: n(s).fieldRounded,
      square: n(s).fieldSquare,
      dense: n(s).fieldDense,
      hideBottomSpace: n(s).fieldHideBottomSpace,
      color: n(s).fieldColor,
      bgColor: n(s).fieldBgColor,
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: g,
      onFilter: i
    }, {
      options: D((v) => [
        (m(), x(P(n(t)), { scope: v }, null, 8, ["scope"]))
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
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", a = _([]), p = _({
      limit: X(),
      offset: 0
    }), u = _();
    function i(d, b) {
      const v = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: X(),
        offset: 0
      }), b(() => {
        v({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          a.value = O.rows;
        }).catch(() => {
          a.value = [];
        });
      });
    }
    function w() {
      ae(() => {
        const d = e.wrapper.getValueSerialized();
        d && (a.value = d.map(
          (b, v) => ({
            label: e.wrapper.field.defaultDisplayValue[v] ?? "???",
            value: b
          })
        ));
      });
    }
    function h() {
      return u.value ? u.value.validate() : !1;
    }
    function F() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), a.value = [];
    }
    return q(() => {
      w(), e.wrapper.registerBehaviourCallbacks(h, F);
    }), (d, b) => (m(), x(n(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (v) => e.wrapper.modelValue = v),
        b[1] || (b[1] = (v) => e.wrapper.modelValueOnUpdate(v))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(s).fieldOutlined,
      filled: n(s).fieldFilled,
      standout: n(s).fieldStandout,
      borderless: n(s).fieldBorderless,
      rounded: n(s).fieldRounded,
      square: n(s).fieldSquare,
      dense: n(s).fieldDense,
      hideBottomSpace: n(s).fieldHideBottomSpace,
      color: n(s).fieldColor,
      bgColor: n(s).fieldBgColor,
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      prefix: e.wrapper.field.prefix,
      suffix: e.wrapper.field.suffix,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: g,
      onFilter: i
    }, {
      options: D((v) => [
        (m(), x(P(n(t)), { scope: v }, null, 8, ["scope"]))
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
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _();
    function a() {
      return c.value ? c.value.validate() : !1;
    }
    function p() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(a, p);
    }), (u, i) => (m(), x(n(M), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (w) => e.wrapper.modelValue = w),
        i[1] || (i[1] = (w) => e.wrapper.modelValueOnUpdate(w))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
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
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _();
    function a() {
      return c.value ? c.value.validate() : !1;
    }
    function p() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(a, p);
    }), (u, i) => (m(), x(n(M), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (w) => e.wrapper.modelValue = w),
        i[1] || (i[1] = (w) => e.wrapper.modelValueOnUpdate(w))
      ],
      modelModifiers: { number: !0 },
      type: "number",
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
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
  constructor(e, t, o, l, s, c, a, p) {
    V(this, "resourceName");
    V(this, "formSettings");
    V(this, "formStyle");
    V(this, "actionComponent");
    V(this, "sectionComponent");
    V(this, "wrapperResetComponent");
    V(this, "associationDisplayComponent");
    V(this, "associationDisplayRecord");
    this.resourceName = e, this.formSettings = {
      ...t,
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = l ?? N.getGlobalActionComponent(), this.sectionComponent = s ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = p ?? N.getGlobalAssociationDisplayRecord();
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
  getForm(e, t, o, l) {
    const s = [];
    return e.form.sections.forEach((a) => {
      const p = [];
      a.fields.forEach((i) => {
        const w = oe.getFieldComponentByFormFieldType(
          i.field_type
        ), h = {
          associationDisplayComponent: this.associationDisplayRecord[i.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            i.field_type
          )
        }, F = {
          type: i.field_type,
          metadata: i,
          label: i.label,
          hint: i.hint,
          prefix: i.prefix,
          suffix: i.suffix,
          readonly: e.form.readonly ?? a.readonly ?? i.readonly,
          cssClass: i.css_class,
          selectOptions: i.select_options,
          rules: i.rules,
          clearable: e.form.clearable,
          provideUniqKey: t,
          defaultDisplayValue: i.default_display_value,
          component: w,
          componentOptions: h
        };
        p.push(F);
      });
      const u = {
        label: a.label,
        icon: a.icon,
        cssClass: a.css_class,
        readonly: e.form.readonly ?? a.readonly,
        fields: p
      };
      s.push(u);
    }), {
      sections: s,
      resourceName: e.form.resource_name,
      resourceId: o,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      readonly: e.form.readonly,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      context: l
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
}
function Xe(r, e, t) {
  const o = t.getFormFactoryInstance().formSettings, l = t.getForm(), s = (u, i, w) => u[i] ? w ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    S.formatDate(
      S.extractDate(u, l.backendDateFormat),
      o.dateFormat
    )
  ), a = [], p = [];
  switch (e) {
    case "date":
      a.push(se(o.dateFormat));
      break;
    case "datetime":
      a.push(se(o.datetimeFormat));
      break;
  }
  return r.forEach((u) => {
    const i = u;
    switch (i.type) {
      case "required":
        a.push(Ze());
        break;
      case "absence":
        a.push(et());
        break;
      case "acceptance":
        a.push(tt());
        break;
      case "inclusion":
        a.push(ce(i.including));
        break;
      case "exclusion":
        a.push(Me(i.excluding));
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
        a.push(nt());
        break;
      case "lessThanOrEqualNumber":
        a.push(
          ot(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          lt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          st(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          it(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          ut(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          ct(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        a.push(pt());
        break;
      case "numberNumericOnly":
        a.push(dt());
        break;
      case "numberEvenOnly":
        a.push(ft());
        break;
      case "numberOddOnly":
        a.push(mt());
        break;
      case "lessThanOrEqualStringLength":
        a.push(
          gt(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          bt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          yt(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          ht(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          _t(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          St(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          wt(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          vt(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          Ft(
            s(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          Ct(
            s(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          xt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          Dt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          Vt(
            s(i, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          kt(
            s(i, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((u) => {
    switch (u) {
      case "allowBlank":
        return at(a);
      case "allowNull":
        return rt(a);
    }
  }) : a;
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
function vt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l <= s || `Inf. ou égal à ${o}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l < s || `Inf. à ${o}`;
  };
}
function xt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l >= s || `Sup. ou égal à ${o}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l > s || `Sup. à ${o}`;
  };
}
function Vt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l === s || `Égale à ${l}`;
  };
}
function kt(r, e) {
  return (t) => {
    const o = r();
    return S.extractDate(String(t), e) !== S.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function se(r) {
  return (e) => e == null || e === "" ? !0 : Bt(e, r) || `Date invalide. Format : ${r}`;
}
function Bt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
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
    const s = Se(t.field.provideUniqKey), c = F(), a = _(), p = _([]);
    function u() {
      s && (a.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), a.value = i(a.value), ae(() => {
        A();
      }));
    }
    function i(f) {
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : S.formatDate(
            S.extractDate(String(f), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : S.formatDate(
            S.extractDate(
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
          return f == null || f === "" ? null : S.formatDate(
            S.extractDate(
              String(f),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : S.formatDate(
            S.extractDate(
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
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = null;
          break;
        case "datetime":
          a.value = null;
          break;
        case "number":
          a.value = null;
          break;
        case "selectString":
          a.value = void 0;
          break;
        case "text":
          a.value = "";
          break;
        case "object":
          a.value = {};
          break;
        case "selectBelongsTo":
          a.value = void 0;
          break;
        case "selectHasMany":
          a.value = void 0;
          break;
      }
    }
    function F() {
      return Tt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function g(f) {
      a.value = f;
    }
    function d() {
      return n(a);
    }
    function b() {
      return w(n(a));
    }
    function v(f) {
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
      reset: u,
      clear: h,
      validate: O,
      resetValidation: A,
      getValueDeserialized: b,
      getValueSerialized: d,
      setupBackendErrors: v
    }), q(() => {
      var $;
      u();
      const f = ($ = _e()) == null ? void 0 : $.exposed;
      f && s && s.registerRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, $) => (m(), T("div", null, [
      K(f.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: g, field: t.field, injectForm: n(s), rules: n(c), reset: u, clear: h, getValueDeserialized: b, getValueSerialized: d, validate: O, registerBehaviourCallbacks: H }
      }, () => [
        (m(), x(P(t.field.component), {
          wrapper: { modelValue: a.value, modelValueOnUpdate: g, field: t.field, injectForm: n(s), rules: n(c), reset: u, clear: h, getValueDeserialized: b, getValueSerialized: d, validate: O, registerBehaviourCallbacks: H }
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
    ), s = Ye(ke()), c = _(/* @__PURE__ */ new Map()), a = _(), p = _(!1), u = _(!1), i = _("create");
    async function w() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), a.value = Object.freeze(
        l.getForm(
          o,
          s,
          t.resourceId,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), p.value = !0;
    }
    async function h() {
      var I, Y;
      if (!g())
        return;
      u.value = !0, O();
      const y = F(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        context: t.context
      });
      C.success ? (i.value === "create" && (i.value = "edit"), o && C.resource_data && (o.resource_data = C.resource_data), d(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach((z) => {
        const W = C.errors[z[0]];
        W && z[1].setupBackendErrors(W);
      }), (I = t.onSubmitFail) == null || I.call(t)), u.value = !1;
    }
    function F() {
      const y = {};
      return [...c.value].forEach((C) => {
        y[C[0]] = C[1].getValueDeserialized();
      }), y;
    }
    function g() {
      let y = !0;
      return c.value.forEach((C) => {
        if (!C.validate()) {
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
    function v() {
      c.value.forEach((y) => {
        y.resetValidation();
      });
    }
    function O() {
      c.value.forEach((y) => {
        y.setupBackendErrors([]);
      });
    }
    function A(y, C) {
      c.value.set(y, C);
    }
    function H(y) {
      if (o)
        return o.resource_data[y];
    }
    function f(y) {
      const C = [...c.value].find((I) => I[0] === y);
      return C ? C[1].getValue() : null;
    }
    function $() {
      return l;
    }
    function Q() {
      return a.value;
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
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function de() {
      return i.value;
    }
    return ve(s, {
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
      resetValidation: v,
      submitForm: h
    }), q(async () => {
      pe(), await w();
    }), (y, C) => p.value && a.value ? (m(), T("div", Ot, [
      j("div", {
        class: R(a.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), T(L, null, te(a.value.sections, (I, Y) => (m(), x(P(n(l).sectionComponent), {
          key: Y,
          section: I,
          context: t.context
        }, {
          default: D(() => [
            (m(!0), T(L, null, te(I.fields, (z) => (m(), T(L, {
              key: z.metadata.field_name
            }, [
              y.$slots[z.metadata.field_name] ? (m(), x(ie, {
                key: 1,
                field: z,
                context: t.context
              }, {
                default: D(({ propsWrapper: W }) => [
                  K(y.$slots, "default", { propsWrapper: W })
                ]),
                _: 3
              }, 8, ["field", "context"])) : (m(), x(ie, {
                key: 0,
                field: z,
                context: t.context
              }, null, 8, ["field", "context"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (m(), x(P(n(l).actionComponent), {
        isLoadingSubmit: u.value,
        formDef: a.value,
        submit: h,
        clear: a.value.clearable ? b : void 0,
        reset: a.value.resetable ? d : void 0
      }, null, 8, ["isLoadingSubmit", "formDef", "clear", "reset"])),
      y.$slots.more_actions ? K(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: a.value }
      }) : E("", !0)
    ])) : E("", !0);
  }
});
export {
  N as Submit64,
  It as Submit64Form
};
