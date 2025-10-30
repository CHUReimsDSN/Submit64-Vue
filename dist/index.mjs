var ge = Object.defineProperty;
var be = (r, e, t) => e in r ? ge(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => be(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as k, createElementBlock as V, openBlock as f, createVNode as v, createBlock as w, createCommentVNode as R, unref as a, normalizeClass as x, createElementVNode as $, toDisplayString as I, renderSlot as H, resolveComponent as ye, normalizeProps as se, guardReactiveProps as he, withCtx as C, createTextVNode as ie, ref as S, onMounted as T, Fragment as U, resolveDynamicComponent as j, mergeProps as _e, inject as Se, getCurrentInstance as Ce, renderList as ee, provide as we } from "vue";
import { QBtn as E, QIcon as Q, QItem as ue, QItemSection as ce, QItemLabel as de, QInput as K, QPopupProxy as te, QDate as pe, QTime as Fe, QCheckbox as ve, QSelect as re, date as _, uid as De } from "quasar";
const ke = { class: "flex row items-center no-wrap q-pt-sm" }, Ve = /* @__PURE__ */ k({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), V("div", ke, [
      v(a(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), w(a(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : R("", !0),
      e.clear ? (f(), w(a(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (n) => e.clear())
      }, null, 8, ["loading"])) : R("", !0)
    ]));
  }
}), xe = { class: "flex row items-center" }, Te = { class: "text-body1 text-weight-medium" }, Be = { class: "flex column q-gutter-sm" }, qe = /* @__PURE__ */ k({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), V("div", {
      class: x(["flex column", e.section.cssClass])
    }, [
      $("div", xe, [
        e.section.icon ? (f(), w(a(Q), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        $("div", Te, I(e.section.label), 1)
      ]),
      $("div", Be, [
        H(t.$slots, "default")
      ])
    ], 2));
  }
}), Oe = /* @__PURE__ */ k({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = ye("q-icon");
      return f(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Re = /* @__PURE__ */ k({
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
    return (t, o) => (f(), w(a(ue), se(he(e.itemProps)), {
      default: C(() => [
        v(a(ce), null, {
          default: C(() => [
            v(a(de), null, {
              default: C(() => [
                ie(I(e.opt.label), 1)
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
}), W = class W {
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
      datetimeFormat: "DD/MM/YYYY:HHmm",
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
    }, this._actionComponent = Ve, this._sectionComponent = qe, this._wrapperResetComponent = Oe, this._associationDisplayComponent = Re, this._associationDisplayDictonary = /* @__PURE__ */ new Map();
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
  static registerGlobalAssociationDisplayMap(e) {
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
  static getGlobalAssociationDisplayMap() {
    return this._instance._associationDisplayDictonary;
  }
  static getGlobalAssociationDisplayByResourceName(e) {
    return this._instance._associationDisplayDictonary.get(e);
  }
};
D(W, "_instance", new W());
let q = W;
const Ne = { class: "row items-center justify-end" }, $e = /* @__PURE__ */ k({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = S(), l = S();
    function p() {
      i.value && i.value.hide();
    }
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(u);
    }), (c, y) => (f(), w(a(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[2] || (y[2] = (g) => e.wrapper.modelValue = g),
        y[3] || (y[3] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: C(() => [
        v(a(Q), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: C(() => [
            v(a(te), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: C(() => [
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (g) => e.wrapper.modelValue = g),
                    y[1] || (y[1] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: C(() => [
                    $("div", Ne, [
                      v(a(E), {
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
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ee = { class: "row items-center justify-end" }, Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ k({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = S(), l = S(), p = S();
    function u() {
      i.value && i.value.hide();
    }
    function c() {
      l.value && l.value.hide();
    }
    function y() {
      return p.value ? p.value.validate() : !1;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(y);
    }), (g, d) => (f(), w(a(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[4] || (d[4] = (b) => e.wrapper.modelValue = b),
        d[5] || (d[5] = (b) => e.wrapper.modelValueOnUpdate(b))
      ],
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: C(() => [
        v(a(Q), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: C(() => [
            v(a(te), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: C(() => [
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
                    d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: C(() => [
                    $("div", Ee, [
                      v(a(E), {
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
        v(a(Q), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: C(() => [
            v(a(te), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: C(() => [
                v(a(Fe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[2] || (d[2] = (b) => e.wrapper.modelValue = b),
                    d[3] || (d[3] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: C(() => [
                    $("div", Ie, [
                      v(a(E), {
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
        })
      ]),
      _: 1
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ue = {
  key: 0,
  class: "q-field__bottom"
}, je = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Le = /* @__PURE__ */ k({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = S(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function s(l) {
      e.wrapper.modelValueOnUpdate(l);
    }
    function i() {
      return t.value === !0;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(i);
    }), (l, p) => (f(), V(U, null, [
      v(a(ve), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          p[0] || (p[0] = (u) => e.wrapper.modelValue = u),
          p[1] || (p[1] = (u) => s(u))
        ],
        label: e.wrapper.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: x(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), V("div", Ue, I(e.wrapper.field.hint), 1)) : R("", !0),
      t.value !== !0 ? (f(), V("div", je, I(t.value), 1)) : R("", !0)
    ], 64));
  }
}), Ge = /* @__PURE__ */ k({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyleConfig, o.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), Pe = /* @__PURE__ */ k({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = S([]), o = S([]), n = S(), s = e.wrapper.injectForm.getFormFactoryInstance(), i = s.formSettings, l = s.formStyleConfig, p = i.rulesBehaviour === "lazy";
    function u(g, d) {
      if (g === "") {
        d(() => {
          o.value = [...t.value];
        });
        return;
      }
      d(() => {
        const b = g.toLowerCase();
        o.value = t.value.filter((B) => B.label.toLowerCase().includes(b));
      });
    }
    function c(g) {
      t.value = Object.freeze(g.field.selectOptions ?? []), o.value = g.field.selectOptions ?? [];
    }
    function y() {
      return n.value ? n.value.validate() : !1;
    }
    return T(() => {
      c(e.wrapper), e.wrapper.registerValidationCallback(y);
    }), (g, d) => (f(), w(a(re), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
        d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": p,
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
function Ae(r) {
  return Symbol(r);
}
function Y() {
  return 20;
}
const He = /* @__PURE__ */ k({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = S([]), p = S({
      limit: Y(),
      offset: 0
    }), u = S();
    function c(g, d) {
      const b = e.wrapper.injectForm.getAssociationDataCallback();
      g === "" && (p.value = {
        limit: Y(),
        offset: 0
      }), d(() => {
        b({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: g,
          context: e.wrapper.injectForm.getForm().context
        }).then((B) => {
          l.value = B.rows;
        });
      });
    }
    function y() {
      return u.value ? u.value.validate() : !1;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(y);
    }), (g, d) => (f(), w(a(re), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
        d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": i,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: c
    }, {
      options: C((b) => [
        (f(), w(j(a(t)), { scope: b }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Qe = /* @__PURE__ */ k({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = S([]), p = S({
      limit: Y(),
      offset: 0
    });
    function u(y, g) {
      const d = e.wrapper.injectForm.getAssociationDataCallback();
      y === "" && (p.value = {
        limit: Y(),
        offset: 0
      }), g(() => {
        d({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: y,
          context: e.wrapper.injectForm.getForm().context
        }).then((b) => {
          l.value = b.rows;
        });
      });
    }
    function c() {
      setTimeout(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      }, 0);
    }
    return T(() => {
      c();
    }), (y, g) => (f(), w(a(re), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (d) => e.wrapper.modelValue = d),
        g[1] || (g[1] = (d) => e.wrapper.modelValueOnUpdate(d))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": i,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: e.wrapper.clear,
      onFilter: u
    }, {
      options: C((d) => [
        a(t) ? (f(), w(a(ue), se(_e({ key: 0 }, d.itemProps)), {
          default: C(() => [
            v(a(ce), null, {
              default: C(() => [
                v(a(de), null, {
                  default: C(() => [
                    ie(I(d.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), w(j(a(t)), {
          key: 1,
          scope: d
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ne = /* @__PURE__ */ k({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = S();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, u) => (f(), w(a(K), {
      ref_key: "fieldRef",
      ref: i,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (c) => e.wrapper.modelValue = c),
        u[1] || (u[1] = (c) => e.wrapper.modelValueOnUpdate(c))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Ye = /* @__PURE__ */ k({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = S();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return T(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, u) => (f(), w(a(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[0] || (u[0] = (c) => e.wrapper.modelValue = c),
        u[1] || (u[1] = (c) => e.wrapper.modelValueOnUpdate(c))
      ],
      modelModifiers: { number: !0 },
      type: "number",
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
});
class ae {
  constructor(e, t, o, n, s, i, l) {
    D(this, "resourceName");
    D(this, "formSettings");
    D(this, "formStyleConfig");
    D(this, "actionComponent");
    D(this, "sectionComponent");
    D(this, "wrapperResetComponent");
    D(this, "associationDisplayComponent");
    this.resourceName = e, this.formSettings = {
      ...q.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...q.getGlobalFormStyle(),
      ...o
    }, this.actionComponent = n ?? q.getGlobalActionComponent(), this.sectionComponent = s ?? q.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? q.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l ?? q.getGlobalAssociationDisplayByResourceName(e) ?? q.getGlobalAssociationDisplayComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ne,
      text: ne,
      number: Ye,
      date: $e,
      datetime: ze,
      selectString: Pe,
      selectBelongsTo: He,
      selectHasMany: Qe,
      checkbox: Le,
      object: Ge
    }[e];
  }
  getForm(e, t, o) {
    const n = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((u) => {
        const c = ae.getFieldComponentByFormFieldType(
          u.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayComponent,
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
          component: c,
          componentOptions: y
        };
        l.push(g);
      });
      const p = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: l
      };
      n.push(p);
    }), {
      sections: n,
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
function We(r, e, t) {
  const o = t.getFormFactoryInstance().formSettings, n = t.getForm(), s = (u, c, y) => u[c] ? y ? () => i(u[c]) : () => u[c] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", i = (u) => String(
    _.formatDate(
      _.extractDate(u, n.backendDateFormat),
      o.dateFormat
    )
  ), l = [], p = [];
  switch (e) {
    case "date":
      l.push(oe(o.dateFormat));
      break;
    case "datetime":
      l.push(oe(o.datetimeFormat));
      break;
  }
  return r.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        l.push(Ke());
        break;
      case "absence":
        l.push(Je());
        break;
      case "acceptance":
        l.push(Xe());
        break;
      case "inclusion":
        l.push(me(c.including));
        break;
      case "exclusion":
        l.push(Me(c.excluding));
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
        l.push(tt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          rt(
            s(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          at(
            s(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          nt(
            s(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          ot(
            s(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          lt(s(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          st(
            s(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(it());
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
          pt(
            s(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          mt(
            s(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          ft(
            s(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          gt(
            s(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          ht(
            s(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          yt(s(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          bt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          _t(
            s(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          St(
            s(c, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Ct(
            s(c, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          wt(
            s(c, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Ft(
            s(c, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          vt(
            s(c, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Dt(
            s(c, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((u) => {
    switch (u) {
      case "allowBlank":
        return et(l);
      case "allowNull":
        return Ze(l);
    }
  }) : l;
}
function Ke() {
  return (r) => !!r || "Ce champ est requis";
}
function me(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Me(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${me.toString()}`
  );
}
function Je() {
  return (r) => !r || "Ce champ doit être vide";
}
function Xe() {
  return (r) => !!r || "Doit être accepté";
}
function Ze(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function et(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function tt() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function rt(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function at(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function nt(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ot(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function lt(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function st(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function it() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function ut() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function ct() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function dt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function pt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function mt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ft(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function gt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function bt(r, e) {
  return (t) => {
    const o = r(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
  };
}
function yt(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function ht(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function _t(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function St(r, e) {
  return (t) => {
    const o = r(), n = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return n <= s || `Inf. ou égal à ${o}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), n = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return n < s || `Inf. à ${o}`;
  };
}
function wt(r, e) {
  return (t) => {
    const o = r(), n = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return n >= s || `Sup. ou égal à ${o}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const o = r(), n = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return n > s || `Sup. à ${o}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), n = _.extractDate(String(t), e), s = _.extractDate(o, e);
    return n === s || `Égale à ${n}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r();
    return _.extractDate(String(t), e) !== _.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function oe(r) {
  return (e) => e == null || e === "" ? !0 : kt(e, r) || `Date invalide. Format : ${r}`;
}
function kt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = _.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : _.formatDate(t, e) === r;
}
const Vt = {
  computeServerRules: We
}, xt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Tt = ["index"], le = /* @__PURE__ */ k({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    var o = () => !0;
    const n = Se(t.field.provideUniqKey), s = g(), i = S(), l = S([]);
    function p() {
      n && (i.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value));
    }
    function u(m) {
      switch (t.field.type) {
        case "date":
          return m == null ? m : _.formatDate(
            _.extractDate(String(m), n.getForm().backendDateFormat),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return m == null ? m : _.formatDate(
            _.extractDate(
              String(m),
              n.getForm().backendDatetimeFormat
            ),
            n.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return m;
    }
    function c(m) {
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? m : _.formatDate(
            _.extractDate(
              String(m),
              n.getFormFactoryInstance().formSettings.dateFormat
            ),
            n.getForm().backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? m : _.formatDate(
            _.extractDate(
              String(m),
              n.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            n.getForm().backendDatetimeFormat
          );
      }
      return m;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          i.value = "";
          break;
        case "checkbox":
          i.value = !1;
          break;
        case "date":
          i.value = null;
          break;
        case "datetime":
          i.value = null;
          break;
        case "number":
          i.value = null;
          break;
        case "selectString":
          i.value = null;
          break;
        case "text":
          i.value = "";
          break;
        case "object":
          i.value = {};
          break;
        case "selectBelongsTo":
          i.value = null;
          break;
        case "selectHasMany":
          i.value = null;
          break;
      }
    }
    function g() {
      return Vt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function d(m) {
      i.value = m;
    }
    function b() {
      return i;
    }
    function B() {
      return c(a(i));
    }
    function M(m) {
      l.value = m;
    }
    function L() {
      return o();
    }
    function J(m) {
      o = m;
    }
    e({
      reset: p,
      clear: y,
      validate: L,
      getValueDeserialized: B,
      getValueSerialized: b,
      setupBackendErrors: M
    });
    const G = {
      modelValue: i,
      modelValueOnUpdate: d,
      field: t.field,
      injectForm: n,
      rules: s,
      reset: p,
      clear: y,
      getValueDeserialized: B,
      getValueSerialized: b,
      validate: L,
      registerValidationCallback: J
    };
    return T(() => {
      var z;
      p();
      const m = (z = Ce()) == null ? void 0 : z.exposed;
      m && n && n.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, z) => (f(), V("div", null, [
      H(m.$slots, "default", { propsWrapper: G }, () => [
        (f(), w(j(t.field.component), { wrapper: G })),
        l.value.length > 0 ? (f(), V("div", xt, [
          (f(!0), V(U, null, ee(l.value, (X, Z) => (f(), V("div", {
            index: Z,
            class: "flex column"
          }, I(X), 9, Tt))), 256))
        ])) : R("", !0)
      ])
    ]));
  }
}), Bt = {
  key: 0,
  class: "flex column"
}, Nt = /* @__PURE__ */ k({
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
    sectionComponent: {},
    wrapperResetComponent: {},
    associationDisplayDictionary: {},
    onSubmitFail: {},
    onSubmitSuccess: {},
    context: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = null;
    const n = Object.freeze(
      new ae(
        t.resourceName,
        t.formSettings,
        t.formStyle,
        t.actionComponent,
        t.sectionComponent,
        t.wrapperResetComponent,
        t.associationDisplayDictionary
      )
    ), s = Ae(De()), i = S(/* @__PURE__ */ new Map()), l = S(), p = S(!1), u = S(!1), c = S("create");
    async function y() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        n.getForm(
          o,
          s,
          t.context
        )
      ), t.resourceId && (c.value = "edit"), p.value = !0;
    }
    async function g() {
      var N, P;
      if (!b())
        return;
      u.value = !0, L();
      const h = d(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      F.success ? (c.value === "create" && (c.value = "edit"), o && F.resource_data && (o.resource_data = F.resource_data), B(), (P = t.onSubmitSuccess) == null || P.call(t)) : ([...i.value].forEach((O) => {
        const A = F.errors[O[0]];
        A && O[1].setupBackendErrors(A);
      }), (N = t.onSubmitFail) == null || N.call(t)), u.value = !1;
    }
    function d() {
      const h = {};
      return [...i.value].forEach((F) => {
        h[F[0]] = F[1].getValueDeserialized();
      }), h;
    }
    function b() {
      let h = !0;
      return i.value.forEach((F) => {
        if (F.validate() !== !0) {
          h = !1;
          return;
        }
      }), h;
    }
    function B() {
      i.value.forEach((h) => {
        h.reset();
      });
    }
    function M() {
      i.value.forEach((h) => {
        h.clear();
      });
    }
    function L() {
      i.value.forEach((h) => {
        h.setupBackendErrors([]);
      });
    }
    function J(h, F) {
      i.value.set(h, F);
    }
    function G(h) {
      if (o)
        return o.resource_data[h];
    }
    function m(h) {
      const F = [...i.value].find((N) => N[0] === h);
      return F ? F[1].getValue() : null;
    }
    function z() {
      return n;
    }
    function X() {
      return l.value;
    }
    function Z() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function fe() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((F) => {
        (t[F] === null || t[F] === void 0) && console.warn(`Missing props for <Submit64> -> ${F}`);
      });
    }
    return we(s, {
      registerRef: J,
      getDefaultDataByFieldName: G,
      getFieldDataByFieldName: m,
      getFormFactoryInstance: z,
      getForm: X,
      getAssociationDataCallback: Z
    }), e({}), T(async () => {
      fe(), await y();
    }), (h, F) => p.value && l.value ? (f(), V("div", Bt, [
      $("div", {
        class: x(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), V(U, null, ee(l.value.sections, (N, P) => (f(), w(j(a(n).sectionComponent), {
          key: P,
          section: N
        }, {
          default: C(() => [
            (f(!0), V(U, null, ee(N.fields, (O) => (f(), V(U, {
              key: O.metadata.field_name
            }, [
              h.$slots[O.metadata.field_name] ? (f(), w(le, {
                key: 1,
                field: O
              }, {
                default: C(({ propsWrapper: A }) => [
                  H(h.$slots, O.metadata.field_name, { propsWrapper: A })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), w(le, {
                key: 0,
                field: O
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), w(j(a(n).actionComponent), {
        isLoadingSubmit: u.value,
        submit: g,
        clear: l.value.clearable ? M : void 0,
        reset: l.value.resetable ? B : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? H(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : R("", !0)
    ])) : R("", !0);
  }
});
export {
  q as Submit64,
  Nt as Submit64Form
};
