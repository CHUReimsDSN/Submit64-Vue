var be = Object.defineProperty;
var ye = (r, e, t) => e in r ? be(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var k = (r, e, t) => ye(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as x, openBlock as g, createVNode as v, createBlock as C, createCommentVNode as O, unref as a, normalizeClass as T, createElementVNode as $, toDisplayString as z, renderSlot as W, resolveComponent as he, normalizeProps as le, guardReactiveProps as Se, withCtx as w, createTextVNode as se, ref as _, onMounted as B, watch as _e, Fragment as L, resolveDynamicComponent as G, nextTick as we, mergeProps as Ce, inject as Fe, getCurrentInstance as ve, renderList as Z, provide as De } from "vue";
import { QBtn as I, QIcon as K, QItem as ie, QItemSection as ue, QItemLabel as ce, QInput as X, QPopupProxy as ee, QDate as de, QTime as ke, QCheckbox as Ve, QSelect as te, date as S, uid as xe } from "quasar";
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
    return (t, o) => (g(), x("div", Te, [
      v(a(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (g(), C(a(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : O("", !0),
      e.clear ? (g(), C(a(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (n) => e.clear())
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
    return (t, o) => (g(), x("div", {
      class: T(["flex column", e.section.cssClass])
    }, [
      $("div", qe, [
        e.section.icon ? (g(), C(a(K), {
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
    return (t, o) => {
      const n = he("q-icon");
      return g(), C(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
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
    return (t, o) => (g(), C(a(ie), le(Se(e.itemProps)), {
      default: w(() => [
        v(a(ue), null, {
          default: w(() => [
            v(a(ce), null, {
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
}), J = class J {
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
    }, this._actionComponent = Be, this._sectionComponent = Ne, this._wrapperResetComponent = $e, this._associationDisplayComponent = Ee, this._associationDisplayDictonary = /* @__PURE__ */ new Map();
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
k(J, "_instance", new J());
let q = J;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ V({
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
    }), (u, y) => (g(), C(a(X), {
      ref_key: "fieldRef",
      ref: l,
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
                v(a(de), {
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
    }), (b, d) => (g(), C(a(X), {
      ref_key: "fieldRef",
      ref: p,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[4] || (d[4] = (f) => e.wrapper.modelValue = f),
        d[5] || (d[5] = (f) => e.wrapper.modelValueOnUpdate(f))
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
                v(a(de), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (f) => e.wrapper.modelValue = f),
                    d[1] || (d[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
                    d[2] || (d[2] = (f) => e.wrapper.modelValue = f),
                    d[3] || (d[3] = (f) => e.wrapper.modelValueOnUpdate(f))
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
}), Ge = {
  key: 0,
  class: "q-field__bottom"
}, Pe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ae = /* @__PURE__ */ V({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function s() {
      return t.value === !0;
    }
    return _e(
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
    }), (i, l) => (g(), x(L, null, [
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
      e.wrapper.field.hint ? (g(), x("div", Ge, z(e.wrapper.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (g(), x("div", Pe, z(t.value), 1)) : O("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ V({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyleConfig, o.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), Qe = /* @__PURE__ */ V({
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
        const f = b.toLowerCase();
        o.value = t.value.filter((D) => D.label.toLowerCase().includes(f));
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
    }), (b, d) => (g(), C(a(te), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => e.wrapper.modelValue = f),
        d[1] || (d[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
function Ye(r) {
  return Symbol(r);
}
function M() {
  return 20;
}
const We = /* @__PURE__ */ V({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: M(),
      offset: 0
    }), c = _();
    function u(d, f) {
      const D = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (p.value = {
        limit: M(),
        offset: 0
      }), f(() => {
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
      we(() => {
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
    }), (d, f) => (g(), C(a(te), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        f[0] || (f[0] = (D) => e.wrapper.modelValue = D),
        f[1] || (f[1] = (D) => e.wrapper.modelValueOnUpdate(D))
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
        (g(), C(G(a(t)), { scope: D }, null, 8, ["scope"]))
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
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, s = o.formStyleConfig, i = n.rulesBehaviour === "lazy", l = _([]), p = _({
      limit: M(),
      offset: 0
    });
    function c(y, b) {
      const d = e.wrapper.injectForm.getAssociationDataCallback();
      y === "" && (p.value = {
        limit: M(),
        offset: 0
      }), b(() => {
        d({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: y,
          context: e.wrapper.injectForm.getForm().context
        }).then((f) => {
          l.value = f.rows;
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
    }), (y, b) => (g(), C(a(te), {
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
        a(t) ? (g(), C(a(ie), le(Ce({ key: 0 }, d.itemProps)), {
          default: w(() => [
            v(a(ue), null, {
              default: w(() => [
                v(a(ce), null, {
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
        }, 1040)) : (g(), C(G(a(t)), {
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
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, s = o.rulesBehaviour === "lazy", i = _();
    function l() {
      return i.value ? i.value.validate() : !1;
    }
    return B(() => {
      e.wrapper.registerValidationCallback(l);
    }), (p, c) => (g(), C(a(X), {
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
}), Me = /* @__PURE__ */ V({
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
    }), (p, c) => (g(), C(a(X), {
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
    k(this, "resourceName");
    k(this, "formSettings");
    k(this, "formStyleConfig");
    k(this, "actionComponent");
    k(this, "sectionComponent");
    k(this, "wrapperResetComponent");
    k(this, "associationDisplayComponent");
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
      number: Me,
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
function Je(r, e, t) {
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
        l.push(Xe());
        break;
      case "absence":
        l.push(et());
        break;
      case "acceptance":
        l.push(tt());
        break;
      case "inclusion":
        l.push(pe(u.including));
        break;
      case "exclusion":
        l.push(Ze(u.excluding));
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
        l.push(nt());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          ot(
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
          Ct(
            s(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ft(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          vt(
            s(u, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Dt(
            s(u, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          kt(
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
          xt(
            s(u, "other_than", !0),
            o.dateFormat
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
function Xe() {
  return (r) => !!r || "Ce champ est requis";
}
function pe(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ze(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${pe.toString()}`
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
    const o = r(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
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
function Ct(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n <= s || `Inf. ou égal à ${o}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n < s || `Inf. à ${o}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r(), n = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return n >= s || `Sup. ou égal à ${o}`;
  };
}
function kt(r, e) {
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
function xt(r, e) {
  return (t) => {
    const o = r();
    return S.extractDate(String(t), e) !== S.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function ne(r) {
  return (e) => e == null || e === "" ? !0 : Tt(e, r) || `Date invalide. Format : ${r}`;
}
function Tt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Bt = {
  computeServerRules: Je
}, qt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Rt = ["index"], oe = /* @__PURE__ */ V({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    var o = () => !0;
    const n = Fe(t.field.provideUniqKey), s = b(), i = _(), l = _([]);
    function p() {
      n && (i.value = n.getDataByFieldName(
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
      return Bt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function d(m) {
      i.value = m;
    }
    function f() {
      return i;
    }
    function D() {
      return u(a(i));
    }
    function E(m) {
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
      getValueSerialized: f,
      setupBackendErrors: E
    }), B(() => {
      var U;
      p();
      const m = (U = ve()) == null ? void 0 : U.exposed;
      m && n && n.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, U) => (g(), x("div", null, [
      W(m.$slots, "default", {
        propsWrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(n), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: f, validate: j, registerValidationCallback: P }
      }, () => [
        (g(), C(G(t.field.component), {
          wrapper: { modelValue: i.value, modelValueOnUpdate: d, field: t.field, injectForm: a(n), rules: a(s), reset: p, clear: y, getValueDeserialized: D, getValueSerialized: f, validate: j, registerValidationCallback: P }
        }, null, 8, ["wrapper"])),
        l.value.length > 0 ? (g(), x("div", qt, [
          (g(!0), x(L, null, Z(l.value, (A, H) => (g(), x("div", {
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
    ), s = Ye(xe()), i = _(/* @__PURE__ */ new Map()), l = _(), p = _(!1), c = _(!1), u = _("create");
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
      var N, Q;
      if (!f())
        return;
      c.value = !0, j();
      const h = d(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      F.success ? (u.value === "create" && (u.value = "edit"), o && F.resource_data && (o.resource_data = F.resource_data), D(), (Q = t.onSubmitSuccess) == null || Q.call(t)) : ([...i.value].forEach((R) => {
        const Y = F.errors[R[0]];
        Y && R[1].setupBackendErrors(Y);
      }), (N = t.onSubmitFail) == null || N.call(t)), c.value = !1;
    }
    function d() {
      const h = {};
      return [...i.value].forEach((F) => {
        h[F[0]] = F[1].getValueDeserialized();
      }), h;
    }
    function f() {
      let h = !0;
      return i.value.forEach((F) => {
        if (!F.validate()) {
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
    function P(h, F) {
      i.value.set(h, F);
    }
    function m(h) {
      if (o)
        return o.resource_data[h];
    }
    function U(h) {
      const F = [...i.value].find((N) => N[0] === h);
      return F ? F[1].getValue() : null;
    }
    function A() {
      return n;
    }
    function H() {
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
      ].forEach((F) => {
        (t[F] === null || t[F] === void 0) && console.warn(`Missing props for <Submit64> -> ${F}`);
      });
    }
    function ge() {
      return u.value;
    }
    return De(s, {
      registerRef: P,
      getDataByFieldName: m,
      getFieldDataByFieldName: U,
      getFormFactoryInstance: A,
      getForm: H,
      getAssociationDataCallback: me
    }), e({
      getMode: ge,
      getFormFactoryInstance: A,
      getForm: H,
      validateForm: f,
      resetForm: D,
      clearForm: E,
      submitForm: b
    }), B(async () => {
      fe(), await y();
    }), (h, F) => p.value && l.value ? (g(), x("div", Ot, [
      $("div", {
        class: T(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), x(L, null, Z(l.value.sections, (N, Q) => (g(), C(G(a(n).sectionComponent), {
          key: Q,
          section: N
        }, {
          default: w(() => [
            (g(!0), x(L, null, Z(N.fields, (R) => (g(), x(L, {
              key: R.metadata.field_name
            }, [
              h.$slots[R.metadata.field_name] ? (g(), C(oe, {
                key: 1,
                field: R
              }, {
                default: w(({ propsWrapper: Y }) => [
                  W(h.$slots, R.metadata.field_name, { propsWrapper: Y })
                ]),
                _: 2
              }, 1032, ["field"])) : (g(), C(oe, {
                key: 0,
                field: R
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), C(G(a(n).actionComponent), {
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
