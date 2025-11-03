var he = Object.defineProperty;
var Se = (r, e, t) => e in r ? he(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => Se(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as x, createElementBlock as B, openBlock as p, createVNode as V, createBlock as C, createCommentVNode as E, unref as a, normalizeClass as q, createElementVNode as j, toDisplayString as L, renderSlot as K, resolveComponent as _e, normalizeProps as ue, guardReactiveProps as we, withCtx as F, createTextVNode as ce, ref as w, onMounted as R, watch as Fe, Fragment as P, resolveDynamicComponent as G, nextTick as ae, mergeProps as Ce, inject as ve, getCurrentInstance as Ve, renderList as te, provide as De } from "vue";
import { QBtn as U, QIcon as J, QItem as de, QItemSection as pe, QItemLabel as me, QInput as M, QPopupProxy as re, QDate as fe, QTime as ke, QCheckbox as xe, QSelect as ne, date as _, uid as Be } from "quasar";
const Te = { class: "flex row items-center no-wrap q-pt-sm" }, qe = /* @__PURE__ */ x({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (p(), B("div", Te, [
      V(a(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), C(a(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : E("", !0),
      e.clear ? (p(), C(a(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : E("", !0)
    ]));
  }
}), Re = { class: "flex row items-center" }, Oe = { class: "text-body1 text-weight-medium" }, Ne = { class: "flex column q-gutter-sm" }, $e = /* @__PURE__ */ x({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (p(), B("div", {
      class: q(["flex column", e.section.cssClass])
    }, [
      j("div", Re, [
        e.section.icon ? (p(), C(a(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : E("", !0),
        j("div", Oe, L(e.section.label), 1)
      ]),
      j("div", Ne, [
        K(t.$slots, "default")
      ])
    ], 2));
  }
}), Ee = /* @__PURE__ */ x({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const l = _e("q-icon");
      return p(), C(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Ie = /* @__PURE__ */ x({
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
    return (t, o) => (p(), C(a(de), ue(we(e.itemProps)), {
      default: F(() => [
        V(a(pe), null, {
          default: F(() => [
            V(a(me), null, {
              default: F(() => [
                ce(L(e.opt.label), 1)
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
    }, this._actionComponent = qe, this._sectionComponent = $e, this._wrapperResetComponent = Ee, this._associationDisplayComponent = Ie, this._associationDisplayDictonary = {};
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
let O = Z;
const ze = { class: "row items-center justify-end" }, je = /* @__PURE__ */ x({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = w(), n = w();
    function d() {
      c.value && c.value.hide();
    }
    function u() {
      return n.value ? n.value.validate() : !1;
    }
    function i() {
      n.value && n.value.resetValidation();
    }
    return R(() => {
      e.wrapper.registerBehaviourCallbacks(u, i);
    }), (S, g) => (p(), C(a(M), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[2] || (g[2] = (f) => e.wrapper.modelValue = f),
        g[3] || (g[3] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      append: F(() => [
        V(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            V(a(re), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                V(a(fe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[0] || (g[0] = (f) => e.wrapper.modelValue = f),
                    g[1] || (g[1] = (f) => e.wrapper.modelValueOnUpdate(f))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: F(() => [
                    j("div", ze, [
                      V(a(U), {
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
}), Ue = { class: "row items-center justify-end" }, Le = { class: "row items-center justify-end" }, Pe = /* @__PURE__ */ x({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = w(), n = w(), d = w();
    function u() {
      c.value && c.value.hide();
    }
    function i() {
      n.value && n.value.hide();
    }
    function S() {
      return d.value ? d.value.validate() : !1;
    }
    function g() {
      d.value && d.value.resetValidation();
    }
    return R(() => {
      e.wrapper.registerBehaviourCallbacks(S, g);
    }), (f, b) => (p(), C(a(M), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[4] || (b[4] = (y) => e.wrapper.modelValue = y),
        b[5] || (b[5] = (y) => e.wrapper.modelValueOnUpdate(y))
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
      append: F(() => [
        V(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            V(a(re), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                V(a(fe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    b[0] || (b[0] = (y) => e.wrapper.modelValue = y),
                    b[1] || (b[1] = (y) => e.wrapper.modelValueOnUpdate(y))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: F(() => [
                    j("div", Ue, [
                      V(a(U), {
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
        V(a(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: F(() => [
            V(a(re), {
              ref_key: "timePopupProxyRef",
              ref: n,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: F(() => [
                V(a(ke), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    b[2] || (b[2] = (y) => e.wrapper.modelValue = y),
                    b[3] || (b[3] = (y) => e.wrapper.modelValueOnUpdate(y))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: F(() => [
                    j("div", Le, [
                      V(a(U), {
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
}, Ae = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, He = /* @__PURE__ */ x({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = w(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    function c() {
      t.value = !0;
    }
    return Fe(
      () => e.wrapper.modelValue,
      (n) => {
        for (const d of e.wrapper.rules)
          if (t.value = d(n), t.value !== !0)
            break;
      }
    ), R(() => {
      e.wrapper.registerBehaviourCallbacks(s, c);
    }), (n, d) => (p(), B(P, null, [
      V(a(xe), {
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
      e.wrapper.field.hint ? (p(), B("div", Ge, L(e.wrapper.field.hint), 1)) : E("", !0),
      t.value !== !0 ? (p(), B("div", Ae, L(t.value), 1)) : E("", !0)
    ], 64));
  }
}), Qe = /* @__PURE__ */ x({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (l, s) => " TODO json edit ? ";
  }
}), Ye = /* @__PURE__ */ x({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = w([]), o = w([]), l = w(), s = e.wrapper.injectForm.getFormFactoryInstance(), c = s.formSettings, n = s.formStyle, d = c.rulesBehaviour === "lazy";
    function u(f, b) {
      if (f === "") {
        b(() => {
          o.value = [...t.value];
        });
        return;
      }
      b(() => {
        const y = f.toLowerCase();
        o.value = t.value.filter((k) => k.label.toLowerCase().includes(y));
      });
    }
    function i(f) {
      t.value = Object.freeze(f.field.selectOptions ?? []), o.value = f.field.selectOptions ?? [];
    }
    function S() {
      return l.value ? l.value.validate() : !1;
    }
    function g() {
      l.value && l.value.resetValidation();
    }
    return R(() => {
      i(e.wrapper), e.wrapper.registerBehaviourCallbacks(S, g);
    }), (f, b) => (p(), C(a(ne), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (y) => e.wrapper.modelValue = y),
        b[1] || (b[1] = (y) => e.wrapper.modelValueOnUpdate(y))
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
function We(r) {
  return Symbol(r);
}
function X() {
  return 20;
}
const Ke = /* @__PURE__ */ x({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = w([]), d = w({
      limit: X(),
      offset: 0
    }), u = w(), i = w(!1);
    function S(y, k) {
      const T = e.wrapper.injectForm.getAssociationDataCallback();
      y === "" && (d.value = {
        limit: X(),
        offset: 0
      }), i.value = !0, k(() => {
        T({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: y,
          context: e.wrapper.injectForm.getForm().context
        }).then((I) => {
          n.value = I.rows;
        }).catch(() => {
          n.value = [];
        }).finally(() => {
          i.value = !1;
        });
      });
    }
    function g() {
      ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      });
    }
    function f() {
      return u.value ? u.value.validate() : !1;
    }
    function b() {
      u.value && u.value.resetValidation();
    }
    return R(() => {
      g(), e.wrapper.registerBehaviourCallbacks(f, b);
    }), (y, k) => (p(), C(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        k[0] || (k[0] = (T) => e.wrapper.modelValue = T),
        k[1] || (k[1] = (T) => e.wrapper.modelValueOnUpdate(T))
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
      onClear: e.wrapper.clear,
      onFilter: S
    }, {
      options: F((T) => [
        (p(), C(G(a(t)), { scope: T }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "loading", "onClear"]));
  }
}), Je = /* @__PURE__ */ x({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = w([]), d = w({
      limit: X(),
      offset: 0
    });
    function u(S, g) {
      const f = e.wrapper.injectForm.getAssociationDataCallback();
      S === "" && (d.value = {
        limit: X(),
        offset: 0
      }), g(() => {
        f({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: S,
          context: e.wrapper.injectForm.getForm().context
        }).then((b) => {
          n.value = b.rows;
        });
      });
    }
    function i() {
      ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      });
    }
    return R(() => {
      i();
    }), (S, g) => (p(), C(a(ne), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (f) => e.wrapper.modelValue = f),
        g[1] || (g[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      onClear: e.wrapper.clear,
      onFilter: u
    }, {
      options: F((f) => [
        a(t) ? (p(), C(a(de), ue(Ce({ key: 0 }, f.itemProps)), {
          default: F(() => [
            V(a(pe), null, {
              default: F(() => [
                V(a(me), null, {
                  default: F(() => [
                    ce(L(f.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (p(), C(G(a(t)), {
          key: 1,
          scope: f
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), le = /* @__PURE__ */ x({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = w();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return R(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (p(), C(a(M), {
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
}), Xe = /* @__PURE__ */ x({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = w();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return R(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (p(), C(a(M), {
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
      ...O.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...O.getGlobalFormStyle()
    }, this.actionComponent = l ?? O.getGlobalActionComponent(), this.sectionComponent = s ?? O.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? O.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n ?? O.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? O.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: le,
      text: le,
      number: Xe,
      date: je,
      datetime: Pe,
      selectString: Ye,
      selectBelongsTo: Ke,
      selectHasMany: Je,
      checkbox: He,
      object: Qe
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
        }, g = {
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
        n.push(g);
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
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1,
      context: o
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
}
function Ze(r, e, t) {
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
        n.push(Me());
        break;
      case "absence":
        n.push(tt());
        break;
      case "acceptance":
        n.push(rt());
        break;
      case "inclusion":
        n.push(ge(i.including));
        break;
      case "exclusion":
        n.push(et(i.excluding));
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
        n.push(ot());
        break;
      case "lessThanOrEqualNumber":
        n.push(
          lt(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        n.push(
          st(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        n.push(
          it(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        n.push(
          ut(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        n.push(
          ct(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        n.push(
          dt(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        n.push(pt());
        break;
      case "numberNumericOnly":
        n.push(mt());
        break;
      case "numberEvenOnly":
        n.push(ft());
        break;
      case "numberOddOnly":
        n.push(gt());
        break;
      case "lessThanOrEqualStringLength":
        n.push(
          bt(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        n.push(
          yt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        n.push(
          ht(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        n.push(
          St(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        n.push(
          Ft(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        n.push(
          wt(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        n.push(
          _t(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        n.push(
          Ct(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        n.push(
          vt(
            s(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        n.push(
          Vt(
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
          kt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        n.push(
          xt(
            s(i, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        n.push(
          Bt(
            s(i, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return nt(n);
      case "allowNull":
        return at(n);
    }
  }) : n;
}
function Me() {
  return (r) => !!r || "Ce champ est requis";
}
function ge(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function et(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ge.toString()}`
  );
}
function tt() {
  return (r) => !r || "Ce champ doit être vide";
}
function rt() {
  return (r) => !!r || "Doit être accepté";
}
function at(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function nt(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function ot() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function lt(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function st(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function it(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ut(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function ct(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function dt(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function pt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function mt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function ft() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function gt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function bt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function yt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ht(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function St(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function _t(r, e) {
  return (t) => {
    const o = r(), l = e();
    return String(t).length >= o && String(t).length <= l || `Entre ${o} et ${l}`;
  };
}
function wt(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function Ft(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Ct(r) {
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
function Vt(r, e) {
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
function kt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l > s || `Sup. à ${o}`;
  };
}
function xt(r, e) {
  return (t) => {
    const o = r(), l = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return l === s || `Égale à ${l}`;
  };
}
function Bt(r, e) {
  return (t) => {
    const o = r();
    return _.extractDate(String(t), e) !== _.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function se(r) {
  return (e) => e == null || e === "" ? !0 : Tt(e, r) || `Date invalide. Format : ${r}`;
}
function Tt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = _.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : _.formatDate(t, e) === r;
}
const qt = {
  computeServerRules: Ze
}, Rt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Ot = ["index"], ie = /* @__PURE__ */ x({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = () => !0, l = () => {
    };
    const s = ve(t.field.provideUniqKey), c = f(), n = w(), d = w([]);
    function u() {
      s && (n.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), n.value = i(n.value), ae(() => {
        A();
      }));
    }
    function i(m) {
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : _.formatDate(
            _.extractDate(String(m), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : _.formatDate(
            _.extractDate(
              String(m),
              s.getForm().backendDatetimeFormat
            ),
            s.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return m;
    }
    function S(m) {
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : _.formatDate(
            _.extractDate(
              String(m),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : _.formatDate(
            _.extractDate(
              String(m),
              s.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            s.getForm().backendDatetimeFormat
          );
      }
      return m;
    }
    function g() {
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
    function f() {
      return qt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function b(m) {
      n.value = m;
    }
    function y() {
      return n;
    }
    function k() {
      return S(a(n));
    }
    function T(m) {
      d.value = m;
    }
    function I() {
      return o();
    }
    function A() {
      return l();
    }
    function H(m, N) {
      o = m, l = N;
    }
    return e({
      reset: u,
      clear: g,
      validate: I,
      resetValidation: A,
      getValueDeserialized: k,
      getValueSerialized: y,
      setupBackendErrors: T
    }), R(() => {
      var N;
      u();
      const m = (N = Ve()) == null ? void 0 : N.exposed;
      m && s && s.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, N) => (p(), B("div", null, [
      K(m.$slots, "default", {
        propsWrapper: { modelValue: n.value, modelValueOnUpdate: b, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: g, getValueDeserialized: k, getValueSerialized: y, validate: I, registerBehaviourCallbacks: H }
      }, () => [
        (p(), C(G(t.field.component), {
          wrapper: { modelValue: n.value, modelValueOnUpdate: b, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: g, getValueDeserialized: k, getValueSerialized: y, validate: I, registerBehaviourCallbacks: H }
        }, null, 8, ["wrapper"])),
        d.value.length > 0 ? (p(), B("div", Rt, [
          (p(!0), B(P, null, te(d.value, (Q, ee) => (p(), B("div", {
            index: ee,
            class: "flex column"
          }, L(Q), 9, Ot))), 256))
        ])) : E("", !0)
      ])
    ]));
  }
}), Nt = {
  key: 0,
  class: "flex column"
}, zt = /* @__PURE__ */ x({
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
    ), s = We(Be()), c = w(/* @__PURE__ */ new Map()), n = w(), d = w(!1), u = w(!1), i = w("create");
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
    async function g() {
      var z, Y;
      if (!b())
        return;
      u.value = !0, I();
      const h = f(), v = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      v.success ? (i.value === "create" && (i.value = "edit"), o && v.resource_data && (o.resource_data = v.resource_data), y(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach(($) => {
        const W = v.errors[$[0]];
        W && $[1].setupBackendErrors(W);
      }), (z = t.onSubmitFail) == null || z.call(t)), u.value = !1;
    }
    function f() {
      const h = {};
      return [...c.value].forEach((v) => {
        h[v[0]] = v[1].getValueDeserialized();
      }), h;
    }
    function b() {
      let h = !0;
      return c.value.forEach((v) => {
        if (!v.validate()) {
          h = !1;
          return;
        }
      }), h;
    }
    function y() {
      c.value.forEach((h) => {
        h.reset();
      });
    }
    function k() {
      c.value.forEach((h) => {
        h.clear();
      });
    }
    function T() {
      c.value.forEach((h) => {
        h.resetValidation();
      });
    }
    function I() {
      c.value.forEach((h) => {
        h.setupBackendErrors([]);
      });
    }
    function A(h, v) {
      c.value.set(h, v);
    }
    function H(h) {
      if (o)
        return o.resource_data[h];
    }
    function m(h) {
      const v = [...c.value].find((z) => z[0] === h);
      return v ? v[1].getValue() : null;
    }
    function N() {
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
    function be() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((v) => {
        (t[v] === null || t[v] === void 0) && console.warn(`Missing props for <Submit64> -> ${v}`);
      });
    }
    function ye() {
      return i.value;
    }
    return De(s, {
      registerRef: A,
      getDataByFieldName: H,
      getFieldDataByFieldName: m,
      getFormFactoryInstance: N,
      getForm: Q,
      getAssociationDataCallback: ee
    }), e({
      getMode: ye,
      getFormFactoryInstance: N,
      getForm: Q,
      validateForm: b,
      resetForm: y,
      clearForm: k,
      resetValidation: T,
      submitForm: g
    }), R(async () => {
      be(), await S();
    }), (h, v) => d.value && n.value ? (p(), B("div", Nt, [
      j("div", {
        class: q(n.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), B(P, null, te(n.value.sections, (z, Y) => (p(), C(G(a(l).sectionComponent), {
          key: Y,
          section: z
        }, {
          default: F(() => [
            (p(!0), B(P, null, te(z.fields, ($) => (p(), B(P, {
              key: $.metadata.field_name
            }, [
              h.$slots[$.metadata.field_name] ? (p(), C(ie, {
                key: 1,
                field: $
              }, {
                default: F(({ propsWrapper: W }) => [
                  K(h.$slots, $.metadata.field_name, { propsWrapper: W })
                ]),
                _: 2
              }, 1032, ["field"])) : (p(), C(ie, {
                key: 0,
                field: $
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), C(G(a(l).actionComponent), {
        isLoadingSubmit: u.value,
        submit: g,
        clear: n.value.clearable ? k : void 0,
        reset: n.value.resetable ? y : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? K(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: n.value }
      }) : E("", !0)
    ])) : E("", !0);
  }
});
export {
  O as Submit64,
  zt as Submit64Form
};
