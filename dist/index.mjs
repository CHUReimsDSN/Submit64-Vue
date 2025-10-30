var ge = Object.defineProperty;
var be = (r, e, t) => e in r ? ge(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => be(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as x, openBlock as f, createVNode as v, createBlock as C, createCommentVNode as R, unref as a, normalizeClass as T, createElementVNode as $, toDisplayString as I, renderSlot as Q, resolveComponent as ye, normalizeProps as se, guardReactiveProps as he, withCtx as w, createTextVNode as ie, ref as _, onMounted as B, Fragment as j, resolveDynamicComponent as L, mergeProps as Se, inject as _e, getCurrentInstance as we, renderList as ee, provide as Ce } from "vue";
import { QBtn as E, QIcon as Y, QItem as ue, QItemSection as ce, QItemLabel as de, QInput as M, QPopupProxy as te, QDate as pe, QTime as Fe, QCheckbox as ve, QSelect as re, date as S, uid as De } from "quasar";
const ke = { class: "flex row items-center no-wrap q-pt-sm" }, Ve = /* @__PURE__ */ V({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), x("div", ke, [
      v(a(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), C(a(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : R("", !0),
      e.clear ? (f(), C(a(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (n) => e.clear())
      }, null, 8, ["loading"])) : R("", !0)
    ]));
  }
}), xe = { class: "flex row items-center" }, Te = { class: "text-body1 text-weight-medium" }, Be = { class: "flex column q-gutter-sm" }, qe = /* @__PURE__ */ V({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), x("div", {
      class: T(["flex column", e.section.cssClass])
    }, [
      $("div", xe, [
        e.section.icon ? (f(), C(a(Y), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        $("div", Te, I(e.section.label), 1)
      ]),
      $("div", Be, [
        Q(t.$slots, "default")
      ])
    ], 2));
  }
}), Oe = /* @__PURE__ */ V({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = ye("q-icon");
      return f(), C(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Re = /* @__PURE__ */ V({
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
    return (t, o) => (f(), C(a(ue), se(he(e.itemProps)), {
      default: w(() => [
        v(a(ce), null, {
          default: w(() => [
            v(a(de), null, {
              default: w(() => [
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
}), K = class K {
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
D(K, "_instance", new K());
let q = K;
const Ne = { class: "row items-center justify-end" }, $e = /* @__PURE__ */ V({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _(), l = _();
    function p() {
      i.value && i.value.hide();
    }
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(u);
    }), (c, y) => (f(), C(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[2] || (y[2] = (b) => e.wrapper.modelValue = b),
        y[3] || (y[3] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        v(a(Y), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            v(a(te), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (b) => e.wrapper.modelValue = b),
                    y[1] || (y[1] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: w(() => [
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
}), Ee = { class: "row items-center justify-end" }, Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ V({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _(), l = _(), p = _();
    function u() {
      i.value && i.value.hide();
    }
    function c() {
      l.value && l.value.hide();
    }
    function y() {
      return p.value ? p.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(y);
    }), (b, d) => (f(), C(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[4] || (d[4] = (g) => e.wrapper.modelValue = g),
        d[5] || (d[5] = (g) => e.wrapper.modelValueOnUpdate(g))
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
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        v(a(Y), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            v(a(te), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
                    d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: w(() => [
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
        v(a(Y), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            v(a(te), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(Fe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[2] || (d[2] = (g) => e.wrapper.modelValue = g),
                    d[3] || (d[3] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: w(() => [
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
}, Le = /* @__PURE__ */ V({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function s(l) {
      e.wrapper.modelValueOnUpdate(l);
    }
    function i() {
      return t.value === !0;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(i);
    }), (l, p) => (f(), x(j, null, [
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
        class: T(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), x("div", Ue, I(e.wrapper.field.hint), 1)) : R("", !0),
      t.value !== !0 ? (f(), x("div", je, I(t.value), 1)) : R("", !0)
    ], 64));
  }
}), Ge = /* @__PURE__ */ V({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyleConfig, o.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), Pe = /* @__PURE__ */ V({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _([]), o = _([]), n = _(), s = e.wrapper.injectForm.getFormFactoryInstance(), i = s.formSettings, l = s.formStyleConfig, p = i.rulesBehaviour === "lazy";
    function u(b, d) {
      if (b === "") {
        d(() => {
          o.value = [...t.value];
        });
        return;
      }
      d(() => {
        const g = b.toLowerCase();
        o.value = t.value.filter((k) => k.label.toLowerCase().includes(g));
      });
    }
    function c(b) {
      t.value = Object.freeze(b.field.selectOptions ?? []), o.value = b.field.selectOptions ?? [];
    }
    function y() {
      return n.value ? n.value.validate() : !1;
    }
    return B(() => {
      c(e.wrapper), e.wrapper.registerValidationCallback(y);
    }), (b, d) => (f(), C(a(re), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
        d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
function W() {
  return 20;
}
const He = /* @__PURE__ */ V({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: W(),
      offset: 0
    }), u = _();
    function c(d, g) {
      const k = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: W(),
        offset: 0
      }), g(() => {
        k({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((z) => {
          l.value = z.rows;
        });
      });
    }
    function y() {
      setTimeout(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      }, 0);
    }
    function b() {
      return u.value ? u.value.validate() : !1;
    }
    return B(() => {
      y(), e.wrapper.registerValidationCallback(b);
    }), (d, g) => (f(), C(a(re), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (k) => e.wrapper.modelValue = k),
        g[1] || (g[1] = (k) => e.wrapper.modelValueOnUpdate(k))
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
      options: w((k) => [
        (f(), C(L(a(t)), { scope: k }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Qe = /* @__PURE__ */ V({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: W(),
      offset: 0
    });
    function u(y, b) {
      const d = e.wrapper.injectForm.getAssociationDataCallback();
      y === "" && (p.value = {
        limit: W(),
        offset: 0
      }), b(() => {
        d({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: y,
          context: e.wrapper.injectForm.getForm().context
        }).then((g) => {
          l.value = g.rows;
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
    return B(() => {
      c();
    }), (y, b) => (f(), C(a(re), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (d) => e.wrapper.modelValue = d),
        b[1] || (b[1] = (d) => e.wrapper.modelValueOnUpdate(d))
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
      options: w((d) => [
        a(t) ? (f(), C(a(ue), se(Se({ key: 0 }, d.itemProps)), {
          default: w(() => [
            v(a(ce), null, {
              default: w(() => [
                v(a(de), null, {
                  default: w(() => [
                    ie(I(d.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), C(L(a(t)), {
          key: 1,
          scope: d
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ne = /* @__PURE__ */ V({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, u) => (f(), C(a(M), {
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
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Ye = /* @__PURE__ */ V({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, u) => (f(), C(a(M), {
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
      class: T(e.wrapper.field.cssClass),
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
        }, b = {
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
        l.push(b);
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
    S.formatDate(
      S.extractDate(u, n.backendDateFormat),
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
          St(
            s(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          _t(
            s(c, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          wt(
            s(c, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Ct(
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
function St(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function _t(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n <= s || `Inf. ou égal à ${o}`;
  };
}
function wt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n < s || `Inf. à ${o}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n >= s || `Sup. ou égal à ${o}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n > s || `Sup. à ${o}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n === s || `Égale à ${n}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r();
    return S.extractDate(String(t), e) !== S.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function oe(r) {
  return (e) => e == null || e === "" ? !0 : kt(e, r) || `Date invalide. Format : ${r}`;
}
function kt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Vt = {
  computeServerRules: We
}, xt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Tt = ["index"], le = /* @__PURE__ */ V({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    var o = () => !0;
    const n = _e(t.field.provideUniqKey), s = b(), i = _(), l = _([]);
    function p() {
      n && (i.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value));
    }
    function u(m) {
      switch (t.field.type) {
        case "date":
          return m == null ? m : S.formatDate(
            S.extractDate(String(m), n.getForm().backendDateFormat),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return m == null ? m : S.formatDate(
            S.extractDate(
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
          return m == null || m === "" ? m : S.formatDate(
            S.extractDate(
              String(m),
              n.getFormFactoryInstance().formSettings.dateFormat
            ),
            n.getForm().backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? m : S.formatDate(
            S.extractDate(
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
    function b() {
      return Vt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function d(m) {
      i.value = m;
    }
    function g() {
      return a(i);
    }
    function k() {
      return c(a(i));
    }
    function z(m) {
      l.value = m;
    }
    function G() {
      return o();
    }
    function J(m) {
      o = m;
    }
    e({
      reset: p,
      clear: y,
      validate: G,
      getValueDeserialized: k,
      getValueSerialized: g,
      setupBackendErrors: z
    });
    const P = {
      modelValue: i,
      modelValueOnUpdate: d,
      field: t.field,
      injectForm: n,
      rules: s,
      reset: p,
      clear: y,
      getValueDeserialized: k,
      getValueSerialized: g,
      validate: G,
      registerValidationCallback: J
    };
    return B(() => {
      var U;
      p();
      const m = (U = we()) == null ? void 0 : U.exposed;
      m && n && n.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, U) => (f(), x("div", null, [
      Q(m.$slots, "default", { propsWrapper: P }, () => [
        (f(), C(L(t.field.component), { wrapper: P })),
        l.value.length > 0 ? (f(), x("div", xt, [
          (f(!0), x(j, null, ee(l.value, (X, Z) => (f(), x("div", {
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
}, Nt = /* @__PURE__ */ V({
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
    ), s = Ae(De()), i = _(/* @__PURE__ */ new Map()), l = _(), p = _(!1), u = _(!1), c = _("create");
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
    async function b() {
      var N, A;
      if (!g())
        return;
      u.value = !0, G();
      const h = d(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      F.success ? (c.value === "create" && (c.value = "edit"), o && F.resource_data && (o.resource_data = F.resource_data), k(), (A = t.onSubmitSuccess) == null || A.call(t)) : ([...i.value].forEach((O) => {
        const H = F.errors[O[0]];
        H && O[1].setupBackendErrors(H);
      }), (N = t.onSubmitFail) == null || N.call(t)), u.value = !1;
    }
    function d() {
      const h = {};
      return [...i.value].forEach((F) => {
        h[F[0]] = F[1].getValueDeserialized();
      }), h;
    }
    function g() {
      let h = !0;
      return i.value.forEach((F) => {
        if (F.validate() !== !0) {
          h = !1;
          return;
        }
      }), h;
    }
    function k() {
      i.value.forEach((h) => {
        h.reset();
      });
    }
    function z() {
      i.value.forEach((h) => {
        h.clear();
      });
    }
    function G() {
      i.value.forEach((h) => {
        h.setupBackendErrors([]);
      });
    }
    function J(h, F) {
      i.value.set(h, F);
    }
    function P(h) {
      if (o)
        return o.resource_data[h];
    }
    function m(h) {
      const F = [...i.value].find((N) => N[0] === h);
      return F ? F[1].getValue() : null;
    }
    function U() {
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
    return Ce(s, {
      registerRef: J,
      getDefaultDataByFieldName: P,
      getFieldDataByFieldName: m,
      getFormFactoryInstance: U,
      getForm: X,
      getAssociationDataCallback: Z
    }), e({}), B(async () => {
      fe(), await y();
    }), (h, F) => p.value && l.value ? (f(), x("div", Bt, [
      $("div", {
        class: T(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), x(j, null, ee(l.value.sections, (N, A) => (f(), C(L(a(n).sectionComponent), {
          key: A,
          section: N
        }, {
          default: w(() => [
            (f(!0), x(j, null, ee(N.fields, (O) => (f(), x(j, {
              key: O.metadata.field_name
            }, [
              h.$slots[O.metadata.field_name] ? (f(), C(le, {
                key: 1,
                field: O
              }, {
                default: w(({ propsWrapper: H }) => [
                  Q(h.$slots, O.metadata.field_name, { propsWrapper: H })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), C(le, {
                key: 0,
                field: O
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), C(L(a(n).actionComponent), {
        isLoadingSubmit: u.value,
        submit: b,
        clear: l.value.clearable ? z : void 0,
        reset: l.value.resetable ? k : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? Q(h.$slots, "more_actions", {
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
