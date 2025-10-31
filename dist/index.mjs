var he = Object.defineProperty;
var Se = (r, e, t) => e in r ? he(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => Se(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as x, createElementBlock as B, openBlock as p, createVNode as V, createBlock as C, createCommentVNode as $, unref as a, normalizeClass as T, createElementVNode as I, toDisplayString as j, renderSlot as K, resolveComponent as _e, normalizeProps as ue, guardReactiveProps as we, withCtx as F, createTextVNode as ce, ref as w, onMounted as q, watch as Fe, Fragment as P, resolveDynamicComponent as G, nextTick as ae, mergeProps as Ce, inject as ve, getCurrentInstance as Ve, renderList as te, provide as De } from "vue";
import { QBtn as z, QIcon as J, QItem as de, QItemSection as pe, QItemLabel as me, QInput as M, QPopupProxy as re, QDate as fe, QTime as ke, QCheckbox as xe, QSelect as ne, date as _, uid as Be } from "quasar";
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
      V(a(z), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), C(a(z), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : $("", !0),
      e.clear ? (p(), C(a(z), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : $("", !0)
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
      class: T(["flex column", e.section.cssClass])
    }, [
      I("div", Re, [
        e.section.icon ? (p(), C(a(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : $("", !0),
        I("div", Oe, j(e.section.label), 1)
      ]),
      I("div", Ne, [
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
                ce(j(e.opt.label), 1)
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
let R = Z;
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
      return n.value ? n.value.resetValidation() : !1;
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(u, i);
    }), (S, y) => (p(), C(a(M), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[2] || (y[2] = (b) => e.wrapper.modelValue = b),
        y[3] || (y[3] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      class: T(e.wrapper.field.cssClass),
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
                    y[0] || (y[0] = (b) => e.wrapper.modelValue = b),
                    y[1] || (y[1] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: F(() => [
                    I("div", ze, [
                      V(a(z), {
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
    function y() {
      return d.value ? d.value.resetValidation() : !1;
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(S, y);
    }), (b, m) => (p(), C(a(M), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[4] || (m[4] = (f) => e.wrapper.modelValue = f),
        m[5] || (m[5] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      class: T(e.wrapper.field.cssClass),
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
                    m[0] || (m[0] = (f) => e.wrapper.modelValue = f),
                    m[1] || (m[1] = (f) => e.wrapper.modelValueOnUpdate(f))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: F(() => [
                    I("div", Ue, [
                      V(a(z), {
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
                    m[2] || (m[2] = (f) => e.wrapper.modelValue = f),
                    m[3] || (m[3] = (f) => e.wrapper.modelValueOnUpdate(f))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: F(() => [
                    I("div", Le, [
                      V(a(z), {
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
    ), q(() => {
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
        class: T(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (p(), B("div", Ge, j(e.wrapper.field.hint), 1)) : $("", !0),
      t.value !== !0 ? (p(), B("div", Ae, j(t.value), 1)) : $("", !0)
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
    function u(b, m) {
      if (b === "") {
        m(() => {
          o.value = [...t.value];
        });
        return;
      }
      m(() => {
        const f = b.toLowerCase();
        o.value = t.value.filter((k) => k.label.toLowerCase().includes(f));
      });
    }
    function i(b) {
      t.value = Object.freeze(b.field.selectOptions ?? []), o.value = b.field.selectOptions ?? [];
    }
    function S() {
      return l.value ? l.value.validate() : !1;
    }
    function y() {
      return l.value ? l.value.resetValidation() : !1;
    }
    return q(() => {
      i(e.wrapper), e.wrapper.registerBehaviourCallbacks(S, y);
    }), (b, m) => (p(), C(a(ne), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (f) => e.wrapper.modelValue = f),
        m[1] || (m[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      class: T(e.wrapper.field.cssClass),
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
    }), u = w();
    function i(m, f) {
      const k = e.wrapper.injectForm.getAssociationDataCallback();
      m === "" && (d.value = {
        limit: X(),
        offset: 0
      }), f(() => {
        k({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: m,
          context: e.wrapper.injectForm.getForm().context
        }).then((U) => {
          n.value = U.rows;
        });
      });
    }
    function S() {
      ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      });
    }
    function y() {
      return u.value ? u.value.validate() : !1;
    }
    function b() {
      return u.value ? u.value.resetValidation() : !1;
    }
    return q(() => {
      S(), e.wrapper.registerBehaviourCallbacks(y, b);
    }), (m, f) => (p(), C(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        f[0] || (f[0] = (k) => e.wrapper.modelValue = k),
        f[1] || (f[1] = (k) => e.wrapper.modelValueOnUpdate(k))
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
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: i
    }, {
      options: F((k) => [
        (p(), C(G(a(t)), { scope: k }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
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
    function u(S, y) {
      const b = e.wrapper.injectForm.getAssociationDataCallback();
      S === "" && (d.value = {
        limit: X(),
        offset: 0
      }), y(() => {
        b({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: S,
          context: e.wrapper.injectForm.getForm().context
        }).then((m) => {
          n.value = m.rows;
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
    return q(() => {
      i();
    }), (S, y) => (p(), C(a(ne), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[0] || (y[0] = (b) => e.wrapper.modelValue = b),
        y[1] || (y[1] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      class: T(e.wrapper.field.cssClass),
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
      options: F((b) => [
        a(t) ? (p(), C(a(de), ue(Ce({ key: 0 }, b.itemProps)), {
          default: F(() => [
            V(a(pe), null, {
              default: F(() => [
                V(a(me), null, {
                  default: F(() => [
                    ce(j(b.opt.label), 1)
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
          scope: b
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
      return c.value ? c.value.resetValidation() : !1;
    }
    return q(() => {
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
      class: T(e.wrapper.field.cssClass),
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
      return c.value ? c.value.resetValidation() : !1;
    }
    return q(() => {
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
      class: T(e.wrapper.field.cssClass),
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
      ...R.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...R.getGlobalFormStyle()
    }, this.actionComponent = l ?? R.getGlobalActionComponent(), this.sectionComponent = s ?? R.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? R.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n ?? R.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? R.getGlobalAssociationDisplayRecord();
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
        }, y = {
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
        n.push(y);
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
    const s = ve(t.field.provideUniqKey), c = b(), n = w(), d = w([]);
    function u() {
      s && (n.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), n.value = i(n.value), A());
    }
    function i(g) {
      switch (t.field.type) {
        case "date":
          return g == null || g === "" ? null : _.formatDate(
            _.extractDate(String(g), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : _.formatDate(
            _.extractDate(
              String(g),
              s.getForm().backendDatetimeFormat
            ),
            s.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return g;
    }
    function S(g) {
      switch (t.field.type) {
        case "date":
          return g == null || g === "" ? null : _.formatDate(
            _.extractDate(
              String(g),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : _.formatDate(
            _.extractDate(
              String(g),
              s.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            s.getForm().backendDatetimeFormat
          );
      }
      return g;
    }
    function y() {
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
    function b() {
      return qt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function m(g) {
      n.value = g;
    }
    function f() {
      return n;
    }
    function k() {
      return S(a(n));
    }
    function U(g) {
      d.value = g;
    }
    function L() {
      return o();
    }
    function A() {
      return l();
    }
    function H(g, O) {
      o = g, l = O;
    }
    return e({
      reset: u,
      clear: y,
      validate: L,
      resetValidation: A,
      getValueDeserialized: k,
      getValueSerialized: f,
      setupBackendErrors: U
    }), q(() => {
      var O;
      ae(() => {
        u();
      });
      const g = (O = Ve()) == null ? void 0 : O.exposed;
      g && s && s.registerRef(
        t.field.metadata.field_name,
        g
      );
    }), (g, O) => (p(), B("div", null, [
      K(g.$slots, "default", {
        propsWrapper: { modelValue: n.value, modelValueOnUpdate: m, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: y, getValueDeserialized: k, getValueSerialized: f, validate: L, registerBehaviourCallbacks: H }
      }, () => [
        (p(), C(G(t.field.component), {
          wrapper: { modelValue: n.value, modelValueOnUpdate: m, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: y, getValueDeserialized: k, getValueSerialized: f, validate: L, registerBehaviourCallbacks: H }
        }, null, 8, ["wrapper"])),
        d.value.length > 0 ? (p(), B("div", Rt, [
          (p(!0), B(P, null, te(d.value, (Q, ee) => (p(), B("div", {
            index: ee,
            class: "flex column"
          }, j(Q), 9, Ot))), 256))
        ])) : $("", !0)
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
    async function y() {
      var E, Y;
      if (!m())
        return;
      u.value = !0, L();
      const h = b(), v = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      v.success ? (i.value === "create" && (i.value = "edit"), o && v.resource_data && (o.resource_data = v.resource_data), f(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach((N) => {
        const W = v.errors[N[0]];
        W && N[1].setupBackendErrors(W);
      }), (E = t.onSubmitFail) == null || E.call(t)), u.value = !1;
    }
    function b() {
      const h = {};
      return [...c.value].forEach((v) => {
        h[v[0]] = v[1].getValueDeserialized();
      }), h;
    }
    function m() {
      let h = !0;
      return c.value.forEach((v) => {
        if (!v.validate()) {
          h = !1;
          return;
        }
      }), h;
    }
    function f() {
      c.value.forEach((h) => {
        h.reset();
      });
    }
    function k() {
      c.value.forEach((h) => {
        h.clear();
      });
    }
    function U() {
      c.value.forEach((h) => {
        h.resetValidation();
      });
    }
    function L() {
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
    function g(h) {
      const v = [...c.value].find((E) => E[0] === h);
      return v ? v[1].getValue() : null;
    }
    function O() {
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
      getFieldDataByFieldName: g,
      getFormFactoryInstance: O,
      getForm: Q,
      getAssociationDataCallback: ee
    }), e({
      getMode: ye,
      getFormFactoryInstance: O,
      getForm: Q,
      validateForm: m,
      resetForm: f,
      clearForm: k,
      resetValidation: U,
      submitForm: y
    }), q(async () => {
      be(), await S();
    }), (h, v) => d.value && n.value ? (p(), B("div", Nt, [
      I("div", {
        class: T(n.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), B(P, null, te(n.value.sections, (E, Y) => (p(), C(G(a(l).sectionComponent), {
          key: Y,
          section: E
        }, {
          default: F(() => [
            (p(!0), B(P, null, te(E.fields, (N) => (p(), B(P, {
              key: N.metadata.field_name
            }, [
              h.$slots[N.metadata.field_name] ? (p(), C(ie, {
                key: 1,
                field: N
              }, {
                default: F(({ propsWrapper: W }) => [
                  K(h.$slots, N.metadata.field_name, { propsWrapper: W })
                ]),
                _: 2
              }, 1032, ["field"])) : (p(), C(ie, {
                key: 0,
                field: N
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), C(G(a(l).actionComponent), {
        isLoadingSubmit: u.value,
        submit: y,
        clear: n.value.clearable ? k : void 0,
        reset: n.value.resetable ? f : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? K(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: n.value }
      }) : $("", !0)
    ])) : $("", !0);
  }
});
export {
  R as Submit64,
  zt as Submit64Form
};
