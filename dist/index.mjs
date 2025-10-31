var ye = Object.defineProperty;
var he = (r, e, t) => e in r ? ye(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var k = (r, e, t) => he(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as x, openBlock as f, createVNode as v, createBlock as F, createCommentVNode as O, unref as a, normalizeClass as T, createElementVNode as $, toDisplayString as z, renderSlot as W, resolveComponent as Se, normalizeProps as le, guardReactiveProps as _e, withCtx as w, createTextVNode as se, ref as _, onMounted as B, watch as we, Fragment as L, resolveDynamicComponent as P, nextTick as ie, mergeProps as Fe, inject as Ce, getCurrentInstance as ve, renderList as M, provide as De } from "vue";
import { QBtn as I, QIcon as K, QItem as ue, QItemSection as ce, QItemLabel as de, QInput as Z, QPopupProxy as ee, QDate as pe, QTime as ke, QCheckbox as Ve, QSelect as te, date as S, uid as xe } from "quasar";
const Te = { class: "flex row items-center no-wrap q-pt-sm" }, Be = /* @__PURE__ */ V({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), x("div", Te, [
      v(a(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: n[0] || (n[0] = (o) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), F(a(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: n[1] || (n[1] = (o) => e.reset())
      }, null, 8, ["loading"])) : O("", !0),
      e.clear ? (f(), F(a(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: n[2] || (n[2] = (o) => e.clear())
      }, null, 8, ["loading"])) : O("", !0)
    ]));
  }
}), qe = { class: "flex row items-center" }, Re = { class: "text-body1 text-weight-medium" }, Oe = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ V({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), x("div", {
      class: T(["flex column", e.section.cssClass])
    }, [
      $("div", qe, [
        e.section.icon ? (f(), F(a(K), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        $("div", Re, z(e.section.label), 1)
      ]),
      $("div", Oe, [
        W(t.$slots, "default")
      ])
    ], 2));
  }
}), $e = /* @__PURE__ */ V({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => {
      const o = Se("q-icon");
      return f(), F(o, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (s) => e.reset())
      });
    };
  }
}), Ee = /* @__PURE__ */ V({
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
    return (t, n) => (f(), F(a(ue), le(_e(e.itemProps)), {
      default: w(() => [
        v(a(ce), null, {
          default: w(() => [
            v(a(de), null, {
              default: w(() => [
                se(z(e.opt.label), 1)
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
    }, this._actionComponent = Be, this._sectionComponent = Ne, this._wrapperResetComponent = $e, this._associationDisplayComponent = Ee, this._associationDisplayDictonary = {};
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
k(X, "_instance", new X());
let q = X;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ V({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _(), l = _();
    function p() {
      i.value && i.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(c);
    }), (u, y) => (f(), F(a(Z), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[2] || (y[2] = (b) => e.wrapper.modelValue = b),
        y[3] || (y[3] = (b) => e.wrapper.modelValueOnUpdate(b))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        v(a(K), {
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
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (b) => e.wrapper.modelValue = b),
                    y[1] || (y[1] = (b) => e.wrapper.modelValueOnUpdate(b))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: w(() => [
                    $("div", Ie, [
                      v(a(I), {
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
}), je = { class: "row items-center justify-end" }, Ue = { class: "row items-center justify-end" }, Le = /* @__PURE__ */ V({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _(), l = _(), p = _();
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
    }), (b, d) => (f(), F(a(Z), {
      ref_key: "fieldRef",
      ref: p,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[4] || (d[4] = (m) => e.wrapper.modelValue = m),
        d[5] || (d[5] = (m) => e.wrapper.modelValueOnUpdate(m))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        v(a(K), {
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
                v(a(pe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (m) => e.wrapper.modelValue = m),
                    d[1] || (d[1] = (m) => e.wrapper.modelValueOnUpdate(m))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: w(() => [
                    $("div", je, [
                      v(a(I), {
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
        v(a(K), {
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
                v(a(ke), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[2] || (d[2] = (m) => e.wrapper.modelValue = m),
                    d[3] || (d[3] = (m) => e.wrapper.modelValueOnUpdate(m))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: w(() => [
                    $("div", Ue, [
                      v(a(I), {
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
}), Pe = {
  key: 0,
  class: "q-field__bottom"
}, Ge = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ae = /* @__PURE__ */ V({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _(!0), o = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    return we(
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
        dense: a(o).fieldDense,
        color: a(o).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: T(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), x("div", Pe, z(e.wrapper.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (f(), x("div", Ge, z(t.value), 1)) : O("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ V({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyle, n.rulesBehaviour, (o, s) => " TODO json edit ? ";
  }
}), Qe = /* @__PURE__ */ V({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _([]), n = _([]), o = _(), s = e.wrapper.injectForm.getFormFactoryInstance(), i = s.formSettings, l = s.formStyle, p = i.rulesBehaviour === "lazy";
    function c(b, d) {
      if (b === "") {
        d(() => {
          n.value = [...t.value];
        });
        return;
      }
      d(() => {
        const m = b.toLowerCase();
        n.value = t.value.filter((D) => D.label.toLowerCase().includes(m));
      });
    }
    function u(b) {
      t.value = Object.freeze(b.field.selectOptions ?? []), n.value = b.field.selectOptions ?? [];
    }
    function y() {
      return o.value ? o.value.validate() : !1;
    }
    return B(() => {
      u(e.wrapper), e.wrapper.registerValidationCallback(y);
    }), (b, d) => (f(), F(a(te), {
      ref_key: "fieldRef",
      ref: o,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (m) => e.wrapper.modelValue = m),
        d[1] || (d[1] = (m) => e.wrapper.modelValueOnUpdate(m))
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
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: c
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Ye(r) {
  return Symbol(r);
}
function J() {
  return 20;
}
const We = /* @__PURE__ */ V({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), o = n.formSettings, s = n.formStyle, i = o.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: J(),
      offset: 0
    }), c = _();
    function u(d, m) {
      const D = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: J(),
        offset: 0
      }), m(() => {
        D({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((E) => {
          l.value = E.rows;
        });
      });
    }
    function y() {
      ie(() => {
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
    }), (d, m) => (f(), F(a(te), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (D) => e.wrapper.modelValue = D),
        m[1] || (m[1] = (D) => e.wrapper.modelValueOnUpdate(D))
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
        (f(), F(P(a(t)), { scope: D }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Ke = /* @__PURE__ */ V({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), o = n.formSettings, s = n.formStyle, i = o.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: J(),
      offset: 0
    });
    function c(y, b) {
      const d = e.wrapper.injectForm.getAssociationDataCallback();
      y === "" && (p.value = {
        limit: J(),
        offset: 0
      }), b(() => {
        d({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: y,
          context: e.wrapper.injectForm.getForm().context
        }).then((m) => {
          l.value = m.rows;
        });
      });
    }
    function u() {
      ie(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValueSerialized()),
            value: e.wrapper.getValueSerialized()
          }
        ];
      });
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
        a(t) ? (f(), F(a(ue), le(Fe({ key: 0 }, d.itemProps)), {
          default: w(() => [
            v(a(ce), null, {
              default: w(() => [
                v(a(de), null, {
                  default: w(() => [
                    se(z(d.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), F(P(a(t)), {
          key: 1,
          scope: d
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ae = /* @__PURE__ */ V({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, c) => (f(), F(a(Z), {
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
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
      class: T(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Je = /* @__PURE__ */ V({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, o = t.formStyle, s = n.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, c) => (f(), F(a(Z), {
      ref_key: "fieldRef",
      ref: i,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (u) => e.wrapper.modelValue = u),
        c[1] || (c[1] = (u) => e.wrapper.modelValueOnUpdate(u))
      ],
      modelModifiers: { number: !0 },
      type: "number",
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(o).fieldOutlined,
      filled: a(o).fieldFilled,
      standout: a(o).fieldStandout,
      borderless: a(o).fieldBorderless,
      rounded: a(o).fieldRounded,
      square: a(o).fieldSquare,
      dense: a(o).fieldDense,
      hideBottomSpace: a(o).fieldHideBottomSpace,
      color: a(o).fieldColor,
      bgColor: a(o).fieldBgColor,
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
  constructor(e, t, n, o, s, i, l, p) {
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
      ...q.getGlobalFormSetting()
    }, this.formStyle = {
      ...n,
      ...q.getGlobalFormStyle()
    }, this.actionComponent = o ?? q.getGlobalActionComponent(), this.sectionComponent = s ?? q.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? q.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l ?? q.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = p ?? q.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ae,
      text: ae,
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
  getForm(e, t, n) {
    const o = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((c) => {
        const u = re.getFieldComponentByFormFieldType(
          c.field_type
        ), y = {
          associationDisplayComponent: this.associationDisplayRecord[c.field_association_class ?? ""] ?? this.associationDisplayComponent,
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
      o.push(p);
    }), {
      sections: o,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1,
      context: n
    };
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
}
function Xe(r, e, t) {
  const n = t.getFormFactoryInstance().formSettings, o = t.getForm(), s = (c, u, y) => c[u] ? y ? () => i(c[u]) : () => c[u] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", i = (c) => String(
    S.formatDate(
      S.extractDate(c, o.backendDateFormat),
      n.dateFormat
    )
  ), l = [], p = [];
  switch (e) {
    case "date":
      l.push(oe(n.dateFormat));
      break;
    case "datetime":
      l.push(oe(n.datetimeFormat));
      break;
  }
  return r.forEach((c) => {
    const u = c;
    switch (u.type) {
      case "required":
        l.push(Ze());
        break;
      case "absence":
        l.push(et());
        break;
      case "acceptance":
        l.push(tt());
        break;
      case "inclusion":
        l.push(me(u.including));
        break;
      case "exclusion":
        l.push(Me(u.excluding));
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
        l.push(ot());
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
          lt(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          st(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          it(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          ut(s(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          ct(
            s(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(dt());
        break;
      case "numberNumericOnly":
        l.push(pt());
        break;
      case "numberEvenOnly":
        l.push(mt());
        break;
      case "numberOddOnly":
        l.push(ft());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          gt(
            s(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          bt(
            s(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          yt(
            s(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          ht(
            s(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          wt(
            s(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          _t(s(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          St(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Ft(
            s(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ct(
            s(u, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          vt(
            s(u, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Dt(
            s(u, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          kt(
            s(u, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Vt(
            s(u, "equal_to", !0),
            n.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          xt(
            s(u, "other_than", !0),
            n.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((c) => {
    switch (c) {
      case "allowBlank":
        return at(l);
      case "allowNull":
        return rt(l);
    }
  }) : l;
}
function Ze() {
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
function et() {
  return (r) => !r || "Ce champ doit être vide";
}
function tt() {
  return (r) => !!r || "Doit être accepté";
}
function rt(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function at(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function ot() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function nt(r) {
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
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function ct(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function dt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function pt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function mt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function ft() {
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
    const n = r(), o = e();
    return String(t).length >= n && String(t).length <= o || `Entre ${n} et ${o}`;
  };
}
function _t(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function wt(r) {
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
function Ct(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o <= s || `Inf. ou égal à ${n}`;
  };
}
function vt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o < s || `Inf. à ${n}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o >= s || `Sup. ou égal à ${n}`;
  };
}
function kt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o > s || `Sup. à ${n}`;
  };
}
function Vt(r, e) {
  return (t) => {
    const n = r(), o = S.extractDate(String(t), e), s = S.extractDate(n, e);
    return o === s || `Égale à ${o}`;
  };
}
function xt(r, e) {
  return (t) => {
    const n = r();
    return S.extractDate(String(t), e) !== S.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function oe(r) {
  return (e) => e == null || e === "" ? !0 : Tt(e, r) || `Date invalide. Format : ${r}`;
}
function Tt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Bt = {
  computeServerRules: Xe
}, qt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Rt = ["index"], ne = /* @__PURE__ */ V({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let n = () => !0;
    const o = Ce(t.field.provideUniqKey), s = b(), i = _(), l = _([]);
    function p() {
      o && (i.value = o.getDataByFieldName(
        t.field.metadata.field_name
      ), i.value = c(i.value));
    }
    function c(g) {
      switch (t.field.type) {
        case "date":
          return g == null || g === "" ? null : S.formatDate(
            S.extractDate(String(g), o.getForm().backendDateFormat),
            o.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : S.formatDate(
            S.extractDate(
              String(g),
              o.getForm().backendDatetimeFormat
            ),
            o.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return g;
    }
    function u(g) {
      switch (t.field.type) {
        case "date":
          return g == null || g === "" ? null : S.formatDate(
            S.extractDate(
              String(g),
              o.getFormFactoryInstance().formSettings.dateFormat
            ),
            o.getForm().backendDateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : S.formatDate(
            S.extractDate(
              String(g),
              o.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            o.getForm().backendDatetimeFormat
          );
      }
      return g;
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
      return Bt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        o
      );
    }
    function d(g) {
      i.value = g;
    }
    function m() {
      return i;
    }
    function D() {
      return u(a(i));
    }
    function E(g) {
      l.value = g;
    }
    function j() {
      return n();
    }
    function G(g) {
      n = g;
    }
    return e({
      reset: p,
      clear: y,
      validate: j,
      getValueDeserialized: D,
      getValueSerialized: m,
      setupBackendErrors: E
    }), B(() => {
      var U;
      p();
      const g = (U = ve()) == null ? void 0 : U.exposed;
      g && o && o.registerRef(
        t.field.metadata.field_name,
        g
      );
    }), (g, U) => (f(), x("div", null, [
      W(g.$slots, "default", {
        propsWrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(o), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: m, validate: j, registerValidationCallback: G }
      }, () => [
        (f(), F(P(t.field.component), {
          wrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(o), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: m, validate: j, registerValidationCallback: G }
        }, null, 8, ["wrapper"])),
        l.value.length > 0 ? (f(), x("div", qt, [
          (f(!0), x(L, null, M(l.value, (A, H) => (f(), x("div", {
            index: H,
            class: "flex column"
          }, z(A), 9, Rt))), 256))
        ])) : O("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, It = /* @__PURE__ */ V({
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
    let n = null;
    const o = Object.freeze(
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
    ), s = Ye(xe()), i = _(/* @__PURE__ */ new Map()), l = _(), p = _(!1), c = _(!1), u = _("create");
    async function y() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        o.getForm(
          n,
          s,
          t.context
        )
      ), t.resourceId && (u.value = "edit"), p.value = !0;
    }
    async function b() {
      var N, Q;
      if (!m())
        return;
      c.value = !0, j();
      const h = d(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      C.success ? (u.value === "create" && (u.value = "edit"), n && C.resource_data && (n.resource_data = C.resource_data), D(), (Q = t.onSubmitSuccess) == null || Q.call(t)) : ([...i.value].forEach((R) => {
        const Y = C.errors[R[0]];
        Y && R[1].setupBackendErrors(Y);
      }), (N = t.onSubmitFail) == null || N.call(t)), c.value = !1;
    }
    function d() {
      const h = {};
      return [...i.value].forEach((C) => {
        h[C[0]] = C[1].getValueDeserialized();
      }), h;
    }
    function m() {
      let h = !0;
      return i.value.forEach((C) => {
        if (!C.validate()) {
          h = !1;
          return;
        }
      }), h;
    }
    function D() {
      i.value.forEach((h) => {
        h.reset();
      });
    }
    function E() {
      i.value.forEach((h) => {
        h.clear();
      });
    }
    function j() {
      i.value.forEach((h) => {
        h.setupBackendErrors([]);
      });
    }
    function G(h, C) {
      i.value.set(h, C);
    }
    function g(h) {
      if (n)
        return n.resource_data[h];
    }
    function U(h) {
      const C = [...i.value].find((N) => N[0] === h);
      return C ? C[1].getValue() : null;
    }
    function A() {
      return o;
    }
    function H() {
      return l.value;
    }
    function fe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ge() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function be() {
      return u.value;
    }
    return De(s, {
      registerRef: G,
      getDataByFieldName: g,
      getFieldDataByFieldName: U,
      getFormFactoryInstance: A,
      getForm: H,
      getAssociationDataCallback: fe
    }), e({
      getMode: be,
      getFormFactoryInstance: A,
      getForm: H,
      validateForm: m,
      resetForm: D,
      clearForm: E,
      submitForm: b
    }), B(async () => {
      ge(), await y();
    }), (h, C) => p.value && l.value ? (f(), x("div", Ot, [
      $("div", {
        class: T(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), x(L, null, M(l.value.sections, (N, Q) => (f(), F(P(a(o).sectionComponent), {
          key: Q,
          section: N
        }, {
          default: w(() => [
            (f(!0), x(L, null, M(N.fields, (R) => (f(), x(L, {
              key: R.metadata.field_name
            }, [
              h.$slots[R.metadata.field_name] ? (f(), F(ne, {
                key: 1,
                field: R
              }, {
                default: w(({ propsWrapper: Y }) => [
                  W(h.$slots, R.metadata.field_name, { propsWrapper: Y })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), F(ne, {
                key: 0,
                field: R
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), F(P(a(o).actionComponent), {
        isLoadingSubmit: c.value,
        submit: b,
        clear: l.value.clearable ? E : void 0,
        reset: l.value.resetable ? D : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? W(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  q as Submit64,
  It as Submit64Form
};
