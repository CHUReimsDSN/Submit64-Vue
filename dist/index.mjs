var fe = Object.defineProperty;
var me = (r, e, t) => e in r ? fe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var x = (r, e, t) => me(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as T, createElementBlock as R, openBlock as f, createVNode as B, createBlock as D, createCommentVNode as z, unref as a, normalizeClass as q, createElementVNode as U, toDisplayString as P, renderSlot as K, resolveComponent as ge, normalizeProps as be, guardReactiveProps as ye, withCtx as V, createTextVNode as he, ref as y, onMounted as O, watch as Se, Fragment as G, resolveDynamicComponent as A, nextTick as ae, inject as _e, getCurrentInstance as we, renderList as te, provide as ve } from "vue";
import { QBtn as L, QIcon as J, QItem as Fe, QItemSection as Ce, QItemLabel as De, QInput as Z, QPopupProxy as re, QDate as ue, QTime as Ve, QCheckbox as ke, QSelect as ne, date as _, uid as xe } from "quasar";
const Be = { class: "flex row items-center no-wrap q-pt-sm" }, Te = /* @__PURE__ */ T({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), R("div", Be, [
      B(a(L), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), D(a(L), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : z("", !0),
      e.clear ? (f(), D(a(L), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : z("", !0)
    ]));
  }
}), Re = { class: "flex row items-center" }, qe = { class: "text-body1 text-weight-medium" }, Oe = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ T({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), R("div", {
      class: q(["flex column", e.section.cssClass])
    }, [
      U("div", Re, [
        e.section.icon ? (f(), D(a(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : z("", !0),
        U("div", qe, P(e.section.label), 1)
      ]),
      U("div", Oe, [
        K(t.$slots, "default")
      ])
    ], 2));
  }
}), $e = /* @__PURE__ */ T({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const l = ge("q-icon");
      return f(), D(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Ee = /* @__PURE__ */ T({
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
    return (t, o) => (f(), D(a(Fe), be(ye(e.itemProps)), {
      default: V(() => [
        B(a(Ce), null, {
          default: V(() => [
            B(a(De), null, {
              default: V(() => [
                he(P(e.opt.label), 1)
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
}), X = class X {
  constructor() {
    x(this, "_formSettings");
    x(this, "_formStyle");
    x(this, "_actionComponent");
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
x(X, "_instance", new X());
let N = X;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ T({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = y(), n = y();
    function d() {
      c.value && c.value.hide();
    }
    function u() {
      return n.value ? n.value.validate() : !1;
    }
    function i() {
      n.value && n.value.resetValidation();
    }
    return O(() => {
      e.wrapper.registerBehaviourCallbacks(u, i);
    }), (S, h) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        h[2] || (h[2] = (w) => e.wrapper.modelValue = w),
        h[3] || (h[3] = (w) => e.wrapper.modelValueOnUpdate(w))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        B(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(re), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (w) => e.wrapper.modelValue = w),
                    h[1] || (h[1] = (w) => e.wrapper.modelValueOnUpdate(w))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    U("div", Ie, [
                      B(a(L), {
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
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]));
  }
}), je = { class: "row items-center justify-end" }, Ue = { class: "row items-center justify-end" }, Le = /* @__PURE__ */ T({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = y(), n = y(), d = y();
    function u() {
      c.value && c.value.hide();
    }
    function i() {
      n.value && n.value.hide();
    }
    function S() {
      return d.value ? d.value.validate() : !1;
    }
    function h() {
      d.value && d.value.resetValidation();
    }
    return O(() => {
      e.wrapper.registerBehaviourCallbacks(S, h);
    }), (w, m) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[4] || (m[4] = (g) => e.wrapper.modelValue = g),
        m[5] || (m[5] = (g) => e.wrapper.modelValueOnUpdate(g))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        B(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(re), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
                    m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    U("div", je, [
                      B(a(L), {
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
        B(a(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(re), {
              ref_key: "timePopupProxyRef",
              ref: n,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(Ve), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    m[2] || (m[2] = (g) => e.wrapper.modelValue = g),
                    m[3] || (m[3] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    U("div", Ue, [
                      B(a(L), {
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
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ge = {
  key: 0,
  class: "q-field__bottom"
}, Pe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ae = /* @__PURE__ */ T({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = y(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    function c() {
      t.value = !0;
    }
    return Se(
      () => e.wrapper.modelValue,
      (n) => {
        for (const d of e.wrapper.rules)
          if (t.value = d(n), t.value !== !0)
            break;
      }
    ), O(() => {
      e.wrapper.registerBehaviourCallbacks(s, c);
    }), (n, d) => (f(), R(G, null, [
      B(a(ke), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (u) => e.wrapper.modelValue = u),
          d[1] || (d[1] = (u) => e.wrapper.modelValueOnUpdate(u))
        ],
        label: e.wrapper.field.label,
        dense: a(l).fieldDense,
        color: a(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: q(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), R("div", Ge, P(e.wrapper.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (f(), R("div", Pe, P(t.value), 1)) : z("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ T({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (l, s) => " TODO json edit ? ";
  }
}), Qe = /* @__PURE__ */ T({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = y([]), o = y([]), l = y(), s = e.wrapper.injectForm.getFormFactoryInstance(), c = s.formSettings, n = s.formStyle, d = c.rulesBehaviour === "lazy";
    function u(w, m) {
      if (w === "") {
        m(() => {
          o.value = [...t.value];
        });
        return;
      }
      m(() => {
        const g = w.toLowerCase();
        o.value = t.value.filter((v) => v.label.toLowerCase().includes(g));
      });
    }
    function i(w) {
      t.value = Object.freeze(w.field.selectOptions ?? []), o.value = w.field.selectOptions ?? [];
    }
    function S() {
      return l.value ? l.value.validate() : !1;
    }
    function h() {
      l.value && l.value.resetValidation();
    }
    return O(() => {
      i(e.wrapper), e.wrapper.registerBehaviourCallbacks(S, h);
    }), (w, m) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
        m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": d,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: o.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: u
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Ye(r) {
  return Symbol(r);
}
function M() {
  return 20;
}
const We = /* @__PURE__ */ T({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = y([]), d = y({
      limit: M(),
      offset: 0
    }), u = y(), i = y(!1);
    function S(v, k) {
      const F = e.wrapper.injectForm.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: M(),
        offset: 0
      }), i.value = !0, k(() => {
        F({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: e.wrapper.injectForm.getForm().context
        }).then(($) => {
          n.value = $.rows;
        }).catch(() => {
          n.value = [];
        }).finally(() => {
          i.value = !1;
        });
      });
    }
    function h() {
      const v = e.wrapper.getValueSerialized();
      v && ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: v
          }
        ];
      });
    }
    function w() {
      return u.value ? u.value.validate() : !1;
    }
    function m() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [
        {
          label: "",
          value: null
        }
      ];
    }
    return O(() => {
      h(), e.wrapper.registerBehaviourCallbacks(w, m);
    }), (v, k) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        k[0] || (k[0] = (F) => e.wrapper.modelValue = F),
        k[1] || (k[1] = (F) => e.wrapper.modelValueOnUpdate(F))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      loading: i.value,
      onClear: g,
      onFilter: S
    }, {
      options: V((F) => [
        (f(), D(A(a(t)), { scope: F }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "loading"]));
  }
}), Ke = /* @__PURE__ */ T({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = y([]), d = y({
      limit: M(),
      offset: 0
    }), u = y(), i = y(!1);
    function S(v, k) {
      const F = e.wrapper.injectForm.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: M(),
        offset: 0
      }), i.value = !0, k(() => {
        F({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: e.wrapper.injectForm.getForm().context
        }).then(($) => {
          n.value = $.rows;
        }).catch(() => {
          n.value = [];
        }).finally(() => {
          i.value = !1;
        });
      });
    }
    function h() {
      const v = e.wrapper.getValueSerialized();
      v && ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: v
          }
        ];
      });
    }
    function w() {
      return u.value ? u.value.validate() : !1;
    }
    function m() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [];
    }
    return O(() => {
      h(), e.wrapper.registerBehaviourCallbacks(w, m);
    }), (v, k) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        k[0] || (k[0] = (F) => e.wrapper.modelValue = F),
        k[1] || (k[1] = (F) => e.wrapper.modelValueOnUpdate(F))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: g,
      onFilter: S
    }, {
      options: V((F) => [
        (f(), D(A(a(t)), { scope: F }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options"]));
  }
}), le = /* @__PURE__ */ T({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = y();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return O(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (S) => e.wrapper.modelValue = S),
        i[1] || (i[1] = (S) => e.wrapper.modelValueOnUpdate(S))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Je = /* @__PURE__ */ T({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = y();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return O(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (S) => e.wrapper.modelValue = S),
        i[1] || (i[1] = (S) => e.wrapper.modelValueOnUpdate(S))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
});
class oe {
  constructor(e, t, o, l, s, c, n, d) {
    x(this, "resourceName");
    x(this, "formSettings");
    x(this, "formStyle");
    x(this, "actionComponent");
    x(this, "sectionComponent");
    x(this, "wrapperResetComponent");
    x(this, "associationDisplayComponent");
    x(this, "associationDisplayRecord");
    this.resourceName = e, this.formSettings = {
      ...t,
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = l ?? N.getGlobalActionComponent(), this.sectionComponent = s ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? N.getGlobalAssociationDisplayRecord();
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
      c.fields.forEach((u) => {
        const i = oe.getFieldComponentByFormFieldType(
          u.field_type
        ), S = {
          associationDisplayComponent: this.associationDisplayRecord[u.field_association_class ?? ""] ?? this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, h = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint,
          cssClass: u.css_class,
          selectOptions: u.select_options,
          rules: u.rules,
          clearable: e.form.clearable,
          provideUniqKey: t,
          defaultDisplayValue: u.default_display_value,
          component: i,
          componentOptions: S
        };
        n.push(h);
      });
      const d = {
        label: c.label,
        icon: c.icon,
        cssClass: c.css_class,
        fields: n
      };
      l.push(d);
    }), {
      sections: l,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
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
function Me(r, e, t) {
  const o = t.getFormFactoryInstance().formSettings, l = t.getForm(), s = (u, i, S) => u[i] ? S ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    _.formatDate(
      _.extractDate(u, l.backendDateFormat),
      o.dateFormat
    )
  ), n = [], d = [];
  switch (e) {
    case "date":
      n.push(se(o.dateFormat));
      break;
    case "datetime":
      n.push(se(o.datetimeFormat));
      break;
  }
  return r.forEach((u) => {
    const i = u;
    switch (i.type) {
      case "required":
        n.push(Xe());
        break;
      case "absence":
        n.push(et());
        break;
      case "acceptance":
        n.push(tt());
        break;
      case "inclusion":
        n.push(ce(i.including));
        break;
      case "exclusion":
        n.push(Ze(i.excluding));
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
        n.push(nt());
        break;
      case "lessThanOrEqualNumber":
        n.push(
          ot(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        n.push(
          lt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        n.push(
          st(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        n.push(
          it(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        n.push(
          ut(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        n.push(
          ct(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        n.push(dt());
        break;
      case "numberNumericOnly":
        n.push(pt());
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
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        n.push(
          bt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        n.push(
          yt(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        n.push(
          ht(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        n.push(
          wt(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        n.push(
          _t(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        n.push(
          St(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        n.push(
          vt(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        n.push(
          Ft(
            s(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        n.push(
          Ct(
            s(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        n.push(
          Dt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        n.push(
          Vt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        n.push(
          kt(
            s(i, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        n.push(
          xt(
            s(i, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return at(n);
      case "allowNull":
        return rt(n);
    }
  }) : n;
}
function Xe() {
  return (r) => !!r || "Ce champ est requis";
}
function ce(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ze(r) {
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
function dt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function pt() {
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
function St(r, e) {
  return (t) => {
    const o = r(), l = e();
    return String(t).length >= o && String(t).length <= l || `Entre ${o} et ${l}`;
  };
}
function _t(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function wt(r) {
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
function Dt(r, e) {
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
function kt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l === s || `Égale à ${l}`;
  };
}
function xt(r, e) {
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
  computeServerRules: Me
}, Rt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, qt = ["index"], ie = /* @__PURE__ */ T({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = () => !0, l = () => {
    };
    const s = _e(t.field.provideUniqKey), c = w(), n = y(), d = y([]);
    function u() {
      s && (n.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), n.value = i(n.value), ae(() => {
        $();
      }));
    }
    function i(p) {
      switch (t.field.type) {
        case "checkbox":
          return p == null || p === "" ? !1 : p;
        case "date":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(String(p), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(
              String(p),
              s.getForm().backendDatetimeFormat
            ),
            s.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return p;
    }
    function S(p) {
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(
              String(p),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : _.formatDate(
            _.extractDate(
              String(p),
              s.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            s.getForm().backendDatetimeFormat
          );
      }
      return p;
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
          n.value = null;
          break;
        case "text":
          n.value = "";
          break;
        case "object":
          n.value = {};
          break;
        case "selectBelongsTo":
          n.value = null;
          break;
        case "selectHasMany":
          n.value = null;
          break;
      }
    }
    function w() {
      return Tt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function m(p) {
      n.value = p;
    }
    function g() {
      return n;
    }
    function v() {
      return S(a(n));
    }
    function k(p) {
      d.value = p;
    }
    function F() {
      return o();
    }
    function $() {
      return l();
    }
    function H(p, E) {
      o = p, l = E;
    }
    return e({
      reset: u,
      clear: h,
      validate: F,
      resetValidation: $,
      getValueDeserialized: v,
      getValueSerialized: g,
      setupBackendErrors: k
    }), O(() => {
      var E;
      u();
      const p = (E = we()) == null ? void 0 : E.exposed;
      p && s && s.registerRef(
        t.field.metadata.field_name,
        p
      );
    }), (p, E) => (f(), R("div", null, [
      K(p.$slots, "default", {
        propsWrapper: { modelValue: n.value, modelValueOnUpdate: m, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: h, getValueDeserialized: v, getValueSerialized: g, validate: F, registerBehaviourCallbacks: H }
      }, () => [
        (f(), D(A(t.field.component), {
          wrapper: { modelValue: n.value, modelValueOnUpdate: m, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: h, getValueDeserialized: v, getValueSerialized: g, validate: F, registerBehaviourCallbacks: H }
        }, null, 8, ["wrapper"])),
        d.value.length > 0 ? (f(), R("div", Rt, [
          (f(!0), R(G, null, te(d.value, (Q, ee) => (f(), R("div", {
            index: ee,
            class: "flex column"
          }, P(Q), 9, qt))), 256))
        ])) : z("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, It = /* @__PURE__ */ T({
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
    ), s = Ye(xe()), c = y(/* @__PURE__ */ new Map()), n = y(), d = y(!1), u = y(!1), i = y("create");
    async function S() {
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
      ), t.resourceId && (i.value = "edit"), d.value = !0;
    }
    async function h() {
      var j, Y;
      if (!m())
        return;
      u.value = !0, F();
      const b = w(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      C.success ? (i.value === "create" && (i.value = "edit"), o && C.resource_data && (o.resource_data = C.resource_data), g(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach((I) => {
        const W = C.errors[I[0]];
        W && I[1].setupBackendErrors(W);
      }), (j = t.onSubmitFail) == null || j.call(t)), u.value = !1;
    }
    function w() {
      const b = {};
      return [...c.value].forEach((C) => {
        b[C[0]] = C[1].getValueDeserialized();
      }), b;
    }
    function m() {
      let b = !0;
      return c.value.forEach((C) => {
        if (!C.validate()) {
          b = !1;
          return;
        }
      }), b;
    }
    function g() {
      c.value.forEach((b) => {
        b.reset();
      });
    }
    function v() {
      c.value.forEach((b) => {
        b.clear();
      });
    }
    function k() {
      c.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function F() {
      c.value.forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function $(b, C) {
      c.value.set(b, C);
    }
    function H(b) {
      if (o)
        return o.resource_data[b];
    }
    function p(b) {
      const C = [...c.value].find((j) => j[0] === b);
      return C ? C[1].getValue() : null;
    }
    function E() {
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
    function de() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function pe() {
      return i.value;
    }
    return ve(s, {
      registerRef: $,
      getDataByFieldName: H,
      getFieldDataByFieldName: p,
      getFormFactoryInstance: E,
      getForm: Q,
      getAssociationDataCallback: ee
    }), e({
      getMode: pe,
      getFormFactoryInstance: E,
      getForm: Q,
      validateForm: m,
      resetForm: g,
      clearForm: v,
      resetValidation: k,
      submitForm: h
    }), O(async () => {
      de(), await S();
    }), (b, C) => d.value && n.value ? (f(), R("div", Ot, [
      U("div", {
        class: q(n.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), R(G, null, te(n.value.sections, (j, Y) => (f(), D(A(a(l).sectionComponent), {
          key: Y,
          section: j
        }, {
          default: V(() => [
            (f(!0), R(G, null, te(j.fields, (I) => (f(), R(G, {
              key: I.metadata.field_name
            }, [
              b.$slots[I.metadata.field_name] ? (f(), D(ie, {
                key: 1,
                field: I
              }, {
                default: V(({ propsWrapper: W }) => [
                  K(b.$slots, I.metadata.field_name, { propsWrapper: W })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), D(ie, {
                key: 0,
                field: I
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), D(A(a(l).actionComponent), {
        isLoadingSubmit: u.value,
        submit: h,
        clear: n.value.clearable ? v : void 0,
        reset: n.value.resetable ? g : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? K(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: n.value }
      }) : z("", !0)
    ])) : z("", !0);
  }
});
export {
  N as Submit64,
  It as Submit64Form
};
