var ge = Object.defineProperty;
var be = (r, e, t) => e in r ? ge(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var V = (r, e, t) => be(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as k, createElementBlock as x, openBlock as f, createVNode as v, createBlock as F, createCommentVNode as R, unref as a, normalizeClass as T, createElementVNode as $, toDisplayString as I, renderSlot as Q, resolveComponent as ye, normalizeProps as le, guardReactiveProps as he, withCtx as w, createTextVNode as se, ref as _, onMounted as B, watch as Se, Fragment as L, resolveDynamicComponent as G, nextTick as _e, mergeProps as we, inject as Ce, getCurrentInstance as Fe, renderList as Z, provide as ve } from "vue";
import { QBtn as E, QIcon as Y, QItem as ie, QItemSection as ue, QItemLabel as ce, QInput as M, QPopupProxy as ee, QDate as de, QTime as De, QCheckbox as Ve, QSelect as te, date as S, uid as ke } from "quasar";
const xe = { class: "flex row items-center no-wrap q-pt-sm" }, Te = /* @__PURE__ */ k({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), x("div", xe, [
      v(a(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), F(a(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : R("", !0),
      e.clear ? (f(), F(a(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (n) => e.clear())
      }, null, 8, ["loading"])) : R("", !0)
    ]));
  }
}), Be = { class: "flex row items-center" }, qe = { class: "text-body1 text-weight-medium" }, Oe = { class: "flex column q-gutter-sm" }, Re = /* @__PURE__ */ k({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), x("div", {
      class: T(["flex column", e.section.cssClass])
    }, [
      $("div", Be, [
        e.section.icon ? (f(), F(a(Y), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        $("div", qe, I(e.section.label), 1)
      ]),
      $("div", Oe, [
        Q(t.$slots, "default")
      ])
    ], 2));
  }
}), Ne = /* @__PURE__ */ k({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = ye("q-icon");
      return f(), F(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), $e = /* @__PURE__ */ k({
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
    return (t, o) => (f(), F(a(ie), le(he(e.itemProps)), {
      default: w(() => [
        v(a(ue), null, {
          default: w(() => [
            v(a(ce), null, {
              default: w(() => [
                se(I(e.opt.label), 1)
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
    }, this._actionComponent = Te, this._sectionComponent = Re, this._wrapperResetComponent = Ne, this._associationDisplayComponent = $e, this._associationDisplayDictonary = /* @__PURE__ */ new Map();
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
V(K, "_instance", new K());
let q = K;
const Ee = { class: "row items-center justify-end" }, Ie = /* @__PURE__ */ k({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _(), l = _();
    function p() {
      i.value && i.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(c);
    }), (u, y) => (f(), F(a(M), {
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
            v(a(ee), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(de), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (b) => e.wrapper.modelValue = b),
                    y[1] || (y[1] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: w(() => [
                    $("div", Ee, [
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
}), ze = { class: "row items-center justify-end" }, je = { class: "row items-center justify-end" }, Ue = /* @__PURE__ */ k({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _(), l = _(), p = _();
    function c() {
      i.value && i.value.hide();
    }
    function u() {
      l.value && l.value.hide();
    }
    function y() {
      return p.value ? p.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(y);
    }), (b, d) => (f(), F(a(M), {
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
            v(a(ee), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(de), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
                    d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: w(() => [
                    $("div", ze, [
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
        }),
        v(a(Y), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            v(a(ee), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                v(a(De), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[2] || (d[2] = (g) => e.wrapper.modelValue = g),
                    d[3] || (d[3] = (g) => e.wrapper.modelValueOnUpdate(g))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: w(() => [
                    $("div", je, [
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
        })
      ]),
      _: 1
    }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]));
  }
}), Le = {
  key: 0,
  class: "q-field__bottom"
}, Ge = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Pe = /* @__PURE__ */ k({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function s() {
      return t.value === !0;
    }
    return Se(
      () => e.wrapper.modelValue,
      (i) => {
        e.wrapper.rules.forEach(
          (l) => {
            t.value = l(i), t.value;
          }
        );
      }
    ), B(() => {
      e.wrapper.registerValidationCallback(s);
    }), (i, l) => (f(), x(L, null, [
      v(a(Ve), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          l[0] || (l[0] = (p) => e.wrapper.modelValue = p),
          l[1] || (l[1] = (p) => e.wrapper.modelValueOnUpdate(p))
        ],
        label: e.wrapper.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: T(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), x("div", Le, I(e.wrapper.field.hint), 1)) : R("", !0),
      t.value !== !0 ? (f(), x("div", Ge, I(t.value), 1)) : R("", !0)
    ], 64));
  }
}), Ae = /* @__PURE__ */ k({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyleConfig, o.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), He = /* @__PURE__ */ k({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _([]), o = _([]), n = _(), s = e.wrapper.injectForm.getFormFactoryInstance(), i = s.formSettings, l = s.formStyleConfig, p = i.rulesBehaviour === "lazy";
    function c(b, d) {
      if (b === "") {
        d(() => {
          o.value = [...t.value];
        });
        return;
      }
      d(() => {
        const g = b.toLowerCase();
        o.value = t.value.filter((D) => D.label.toLowerCase().includes(g));
      });
    }
    function u(b) {
      t.value = Object.freeze(b.field.selectOptions ?? []), o.value = b.field.selectOptions ?? [];
    }
    function y() {
      return n.value ? n.value.validate() : !1;
    }
    return B(() => {
      u(e.wrapper), e.wrapper.registerValidationCallback(y);
    }), (b, d) => (f(), F(a(te), {
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
      onFilter: c
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Qe(r) {
  return Symbol(r);
}
function W() {
  return 20;
}
const Ye = /* @__PURE__ */ k({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: W(),
      offset: 0
    }), c = _();
    function u(d, g) {
      const D = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: W(),
        offset: 0
      }), g(() => {
        D({
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
      _e(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      });
    }
    function b() {
      return c.value ? c.value.validate() : !1;
    }
    return B(() => {
      y(), e.wrapper.registerValidationCallback(b);
    }), (d, g) => (f(), F(a(te), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (D) => e.wrapper.modelValue = D),
        g[1] || (g[1] = (D) => e.wrapper.modelValueOnUpdate(D))
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
      onFilter: u
    }, {
      options: w((D) => [
        (f(), F(G(a(t)), { scope: D }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), We = /* @__PURE__ */ k({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: W(),
      offset: 0
    });
    function c(y, b) {
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
    function u() {
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
      u();
    }), (y, b) => (f(), F(a(te), {
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
      onFilter: c
    }, {
      options: w((d) => [
        a(t) ? (f(), F(a(ie), le(we({ key: 0 }, d.itemProps)), {
          default: w(() => [
            v(a(ue), null, {
              default: w(() => [
                v(a(ce), null, {
                  default: w(() => [
                    se(I(d.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), F(G(a(t)), {
          key: 1,
          scope: d
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ae = /* @__PURE__ */ k({
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
    }), (p, c) => (f(), F(a(M), {
      ref_key: "fieldRef",
      ref: i,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (u) => e.wrapper.modelValue = u),
        c[1] || (c[1] = (u) => e.wrapper.modelValueOnUpdate(u))
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
}), Ke = /* @__PURE__ */ k({
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
    }), (p, c) => (f(), F(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (u) => e.wrapper.modelValue = u),
        c[1] || (c[1] = (u) => e.wrapper.modelValueOnUpdate(u))
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
class re {
  constructor(e, t, o, n, s, i, l) {
    V(this, "resourceName");
    V(this, "formSettings");
    V(this, "formStyleConfig");
    V(this, "actionComponent");
    V(this, "sectionComponent");
    V(this, "wrapperResetComponent");
    V(this, "associationDisplayComponent");
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
      string: ae,
      text: ae,
      number: Ke,
      date: Ie,
      datetime: Ue,
      selectString: He,
      selectBelongsTo: Ye,
      selectHasMany: We,
      checkbox: Pe,
      object: Ae
    }[e];
  }
  getForm(e, t, o) {
    const n = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((c) => {
        const u = re.getFieldComponentByFormFieldType(
          c.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayComponent,
          regularFieldType: this.getRegularFieldTypeByFieldType(
            c.field_type
          )
        }, b = {
          type: c.field_type,
          metadata: c,
          label: c.label,
          hint: c.hint,
          cssClass: c.css_class,
          selectOptions: c.select_options,
          rules: c.rules,
          clearable: e.form.clearable,
          provideUniqKey: t,
          defaultDisplayValue: c.default_display_value,
          component: u,
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
function Me(r, e, t) {
  const o = t.getFormFactoryInstance().formSettings, n = t.getForm(), s = (c, u, y) => c[u] ? y ? () => i(c[u]) : () => c[u] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", i = (c) => String(
    S.formatDate(
      S.extractDate(c, n.backendDateFormat),
      o.dateFormat
    )
  ), l = [], p = [];
  switch (e) {
    case "date":
      l.push(ne(o.dateFormat));
      break;
    case "datetime":
      l.push(ne(o.datetimeFormat));
      break;
  }
  return r.forEach((c) => {
    const u = c;
    switch (u.type) {
      case "required":
        l.push(Je());
        break;
      case "absence":
        l.push(Ze());
        break;
      case "acceptance":
        l.push(et());
        break;
      case "inclusion":
        l.push(pe(u.including));
        break;
      case "exclusion":
        l.push(Xe(u.excluding));
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
        l.push(at());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          nt(
            s(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          ot(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          lt(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          st(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          it(s(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          ut(
            s(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(ct());
        break;
      case "numberNumericOnly":
        l.push(dt());
        break;
      case "numberEvenOnly":
        l.push(pt());
        break;
      case "numberOddOnly":
        l.push(mt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          ft(
            s(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          gt(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          bt(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          yt(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          _t(
            s(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          St(s(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          ht(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          wt(
            s(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ct(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Ft(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          vt(
            s(u, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Dt(
            s(u, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Vt(
            s(u, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          kt(
            s(u, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((c) => {
    switch (c) {
      case "allowBlank":
        return rt(l);
      case "allowNull":
        return tt(l);
    }
  }) : l;
}
function Je() {
  return (r) => !!r || "Ce champ est requis";
}
function pe(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Xe(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${pe.toString()}`
  );
}
function Ze() {
  return (r) => !r || "Ce champ doit être vide";
}
function et() {
  return (r) => !!r || "Doit être accepté";
}
function tt(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function rt(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function at() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function nt(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function ot(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function lt(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function st(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function it(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function ut(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function ct() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function dt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function pt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function mt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function ft(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function gt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function bt(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function yt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function ht(r, e) {
  return (t) => {
    const o = r(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
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
function wt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n <= s || `Inf. ou égal à ${o}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n < s || `Inf. à ${o}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n >= s || `Sup. ou égal à ${o}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n > s || `Sup. à ${o}`;
  };
}
function Vt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n === s || `Égale à ${n}`;
  };
}
function kt(r, e) {
  return (t) => {
    const o = r();
    return S.extractDate(String(t), e) !== S.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function ne(r) {
  return (e) => e == null || e === "" ? !0 : xt(e, r) || `Date invalide. Format : ${r}`;
}
function xt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Tt = {
  computeServerRules: Me
}, Bt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, qt = ["index"], oe = /* @__PURE__ */ k({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    var o = () => !0;
    const n = Ce(t.field.provideUniqKey), s = b(), i = _(), l = _([]);
    function p() {
      n && (i.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), i.value = c(i.value));
    }
    function c(m) {
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
    function u(m) {
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
      return Tt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function d(m) {
      i.value = m;
    }
    function g() {
      return i;
    }
    function D() {
      return u(a(i));
    }
    function z(m) {
      l.value = m;
    }
    function j() {
      return o();
    }
    function P(m) {
      o = m;
    }
    return e({
      reset: p,
      clear: y,
      validate: j,
      getValueDeserialized: D,
      getValueSerialized: g,
      setupBackendErrors: z
    }), B(() => {
      var U;
      p();
      const m = (U = Fe()) == null ? void 0 : U.exposed;
      m && n && n.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, U) => (f(), x("div", null, [
      Q(m.$slots, "default", {
        propsWrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(n), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: g, validate: j, registerValidationCallback: P }
      }, () => [
        (f(), F(G(t.field.component), {
          wrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(n), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: g, validate: j, registerValidationCallback: P }
        }, null, 8, ["wrapper"])),
        l.value.length > 0 ? (f(), x("div", Bt, [
          (f(!0), x(L, null, Z(l.value, (J, X) => (f(), x("div", {
            index: X,
            class: "flex column"
          }, I(J), 9, qt))), 256))
        ])) : R("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, Et = /* @__PURE__ */ k({
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
      new re(
        t.resourceName,
        t.formSettings,
        t.formStyle,
        t.actionComponent,
        t.sectionComponent,
        t.wrapperResetComponent,
        t.associationDisplayDictionary
      )
    ), s = Qe(ke()), i = _(/* @__PURE__ */ new Map()), l = _(), p = _(!1), c = _(!1), u = _("create");
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
      ), t.resourceId && (u.value = "edit"), p.value = !0;
    }
    async function b() {
      var N, A;
      if (!g())
        return;
      c.value = !0, j();
      const h = d(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      C.success ? (u.value === "create" && (u.value = "edit"), o && C.resource_data && (o.resource_data = C.resource_data), D(), (A = t.onSubmitSuccess) == null || A.call(t)) : ([...i.value].forEach((O) => {
        const H = C.errors[O[0]];
        H && O[1].setupBackendErrors(H);
      }), (N = t.onSubmitFail) == null || N.call(t)), c.value = !1;
    }
    function d() {
      const h = {};
      return [...i.value].forEach((C) => {
        h[C[0]] = C[1].getValueDeserialized();
      }), h;
    }
    function g() {
      let h = !0;
      return i.value.forEach((C) => {
        if (C.validate() !== !0) {
          console.log(C), h = !1;
          return;
        }
      }), h;
    }
    function D() {
      i.value.forEach((h) => {
        h.reset();
      });
    }
    function z() {
      i.value.forEach((h) => {
        h.clear();
      });
    }
    function j() {
      i.value.forEach((h) => {
        h.setupBackendErrors([]);
      });
    }
    function P(h, C) {
      i.value.set(h, C);
    }
    function m(h) {
      if (o)
        return o.resource_data[h];
    }
    function U(h) {
      const C = [...i.value].find((N) => N[0] === h);
      return C ? C[1].getValue() : null;
    }
    function J() {
      return n;
    }
    function X() {
      return l.value;
    }
    function me() {
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
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    return ve(s, {
      registerRef: P,
      getDefaultDataByFieldName: m,
      getFieldDataByFieldName: U,
      getFormFactoryInstance: J,
      getForm: X,
      getAssociationDataCallback: me
    }), e({}), B(async () => {
      fe(), await y();
    }), (h, C) => p.value && l.value ? (f(), x("div", Ot, [
      $("div", {
        class: T(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), x(L, null, Z(l.value.sections, (N, A) => (f(), F(G(a(n).sectionComponent), {
          key: A,
          section: N
        }, {
          default: w(() => [
            (f(!0), x(L, null, Z(N.fields, (O) => (f(), x(L, {
              key: O.metadata.field_name
            }, [
              h.$slots[O.metadata.field_name] ? (f(), F(oe, {
                key: 1,
                field: O
              }, {
                default: w(({ propsWrapper: H }) => [
                  Q(h.$slots, O.metadata.field_name, { propsWrapper: H })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), F(oe, {
                key: 0,
                field: O
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), F(G(a(n).actionComponent), {
        isLoadingSubmit: c.value,
        submit: b,
        clear: l.value.clearable ? z : void 0,
        reset: l.value.resetable ? D : void 0
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
  Et as Submit64Form
};
