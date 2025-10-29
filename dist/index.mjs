var be = Object.defineProperty;
var ye = (a, e, t) => e in a ? be(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var v = (a, e, t) => ye(a, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as D, createElementBlock as V, openBlock as f, createVNode as _, createBlock as w, createCommentVNode as N, unref as r, normalizeClass as k, createElementVNode as $, toDisplayString as j, renderSlot as H, resolveComponent as he, ref as C, withCtx as S, watch as Se, Fragment as z, onMounted as L, normalizeProps as ae, mergeProps as oe, createTextVNode as ne, resolveDynamicComponent as U, inject as we, getCurrentInstance as Fe, renderList as J, provide as _e } from "vue";
import { QBtn as I, QIcon as A, QInput as W, QPopupProxy as X, QDate as le, QTime as Ce, QCheckbox as ve, QSelect as Z, QItem as se, QItemSection as ie, QItemLabel as ue, date as h, uid as De } from "quasar";
const Ve = { class: "flex row items-center no-wrap q-pt-sm" }, ke = /* @__PURE__ */ D({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(a) {
    const e = a;
    return (t, o) => (f(), V("div", Ve, [
      _(r(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), w(r(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : N("", !0),
      e.clear ? (f(), w(r(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (n) => e.clear())
      }, null, 8, ["loading"])) : N("", !0)
    ]));
  }
}), Te = { class: "flex row items-center" }, xe = { class: "text-body1 text-weight-medium" }, Ne = { class: "flex column q-gutter-sm" }, Be = /* @__PURE__ */ D({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(a) {
    const e = a;
    return (t, o) => (f(), V("div", {
      class: k(["flex column", e.section.cssClass])
    }, [
      $("div", Te, [
        e.section.icon ? (f(), w(r(A), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : N("", !0),
        $("div", xe, j(e.section.label), 1)
      ]),
      $("div", Ne, [
        H(t.$slots, "default")
      ])
    ], 2));
  }
}), qe = /* @__PURE__ */ D({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(a) {
    const e = a;
    return (t, o) => {
      const n = he("q-icon");
      return f(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (l) => e.reset())
      });
    };
  }
}), Y = class Y {
  constructor() {
    v(this, "_formSettings");
    v(this, "_formStyleConfig");
    v(this, "_actionComponent");
    v(this, "_sectionComponent");
    v(this, "_wrapperResetComponent");
    v(this, "_associationDisplayDictonary");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY:HHmm",
      renderBackendHint: !0
    }, this._formStyleConfig = {
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
    }, this._actionComponent = ke, this._sectionComponent = Be, this._wrapperResetComponent = qe, this._associationDisplayDictonary = {};
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...e
    };
  }
  static registerGlobalFormStyleSetting(e) {
    this._instance._formStyleConfig = {
      ...this._instance._formStyleConfig,
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
  static registerGlobalAssociationDisplayDictonary(e) {
    this._instance._associationDisplayDictonary = e;
  }
  static getGlobalFormSetting() {
    return this._instance._formSettings;
  }
  static getGlobalFormStyleConfig() {
    return this._instance._formStyleConfig;
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
  static getGlobalAssociationDisplayDictonary() {
    return this._instance._associationDisplayDictonary;
  }
};
v(Y, "_instance", new Y());
let x = Y;
const Oe = { class: "row items-center justify-end" }, $e = /* @__PURE__ */ D({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, l = o.rulesBehaviour === "lazy", u = C();
    function s() {
      u.value && u.value.hide();
    }
    return (p, c) => (f(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[2] || (c[2] = (i) => e.wrapper.modelValue = i),
        c[3] || (c[3] = (i) => e.wrapper.modelValueOnUpdate(i))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": l,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: S(() => [
        _(r(A), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            _(r(X), {
              ref_key: "popupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                _(r(le), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    c[0] || (c[0] = (i) => e.wrapper.modelValue = i),
                    c[1] || (c[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: S(() => [
                    $("div", Oe, [
                      _(r(I), {
                        onClick: s,
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
}), Re = { class: "row items-center justify-end" }, Ee = { class: "row items-center justify-end" }, Ie = /* @__PURE__ */ D({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, l = o.rulesBehaviour === "lazy", u = C(), s = C();
    function p() {
      u.value && u.value.hide();
    }
    function c() {
      s.value && s.value.hide();
    }
    return (i, m) => (f(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[4] || (m[4] = (d) => e.wrapper.modelValue = d),
        m[5] || (m[5] = (d) => e.wrapper.modelValueOnUpdate(d))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": l,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: S(() => [
        _(r(A), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            _(r(X), {
              ref_key: "datePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                _(r(le), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    m[0] || (m[0] = (d) => e.wrapper.modelValue = d),
                    m[1] || (m[1] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: S(() => [
                    $("div", Re, [
                      _(r(I), {
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
        }),
        _(r(A), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            _(r(X), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                _(r(Ce), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    m[2] || (m[2] = (d) => e.wrapper.modelValue = d),
                    m[3] || (m[3] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: S(() => [
                    $("div", Ee, [
                      _(r(I), {
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
}), je = {
  key: 0,
  class: "q-field__bottom"
}, ze = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ue = /* @__PURE__ */ D({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = C(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function l(u) {
      e.wrapper.modelValueOnUpdate(u);
    }
    return Se(() => e.wrapper.modelValue, () => {
      t.value = e.wrapper.validate();
    }), (u, s) => (f(), V(z, null, [
      _(r(ve), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          s[0] || (s[0] = (p) => e.wrapper.modelValue = p),
          s[1] || (s[1] = (p) => l(p))
        ],
        label: e.wrapper.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: k(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), V("div", je, j(e.wrapper.field.hint), 1)) : N("", !0),
      t.value !== !0 ? (f(), V("div", ze, j(t.value), 1)) : N("", !0)
    ], 64));
  }
}), Le = /* @__PURE__ */ D({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const t = a.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyleConfig, o.rulesBehaviour, (n, l) => " TODO json edit ? ";
  }
}), Pe = /* @__PURE__ */ D({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = C([]), o = C([]), n = e.wrapper.injectForm.getFormFactoryInstance(), l = n.formSettings, u = n.formStyleConfig, s = l.rulesBehaviour === "lazy";
    function p(i, m) {
      if (i === "") {
        m(() => {
          o.value = [...t.value];
        });
        return;
      }
      m(() => {
        const d = i.toLowerCase();
        o.value = t.value.filter((g) => g.label.toLowerCase().includes(d));
      });
    }
    function c(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), o.value = i.field.selectOptions ?? [];
    }
    return L(() => {
      c(e.wrapper);
    }), (i, m) => (f(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (d) => e.wrapper.modelValue = d),
        m[1] || (m[1] = (d) => e.wrapper.modelValueOnUpdate(d))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(u).fieldOutlined,
      filled: r(u).fieldFilled,
      standout: r(u).fieldStandout,
      borderless: r(u).fieldBorderless,
      rounded: r(u).fieldRounded,
      square: r(u).fieldSquare,
      dense: r(u).fieldDense,
      hideBottomSpace: r(u).fieldHideBottomSpace,
      color: r(u).fieldColor,
      bgColor: r(u).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: o.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: p
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Ge(a) {
  return Symbol(a);
}
function Q() {
  return 20;
}
const He = /* @__PURE__ */ D({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, l = o.formStyleConfig, u = n.rulesBehaviour === "lazy", s = C([]), p = C({
      limit: Q(),
      offset: 0
    });
    function c(m, d) {
      const g = e.wrapper.injectForm.getAssociationDataCallback();
      m === "" && (p.value = {
        limit: Q(),
        offset: 0
      }), d(() => {
        g({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: m,
          context: e.wrapper.injectForm.getForm().context
        }).then((B) => {
          s.value = B.rows;
        });
      });
    }
    function i() {
      setTimeout(() => {
        s.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValue()),
            value: e.wrapper.getValue()
          }
        ];
      }, 0);
    }
    return L(() => {
      i();
    }), (m, d) => (f(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
        d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(l).fieldOutlined,
      filled: r(l).fieldFilled,
      standout: r(l).fieldStandout,
      borderless: r(l).fieldBorderless,
      rounded: r(l).fieldRounded,
      square: r(l).fieldSquare,
      dense: r(l).fieldDense,
      hideBottomSpace: r(l).fieldHideBottomSpace,
      color: r(l).fieldColor,
      bgColor: r(l).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": u,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: c
    }, {
      options: S((g) => [
        r(t) ? (f(), w(r(se), ae(oe({ key: 0 }, g.itemProps)), {
          default: S(() => [
            _(r(ie), null, {
              default: S(() => [
                _(r(ue), null, {
                  default: S(() => [
                    ne(j(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), w(U(r(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Ae = /* @__PURE__ */ D({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), n = o.formSettings, l = o.formStyleConfig, u = n.rulesBehaviour === "lazy", s = C([]), p = C({
      limit: Q(),
      offset: 0
    });
    function c(m, d) {
      const g = e.wrapper.injectForm.getAssociationDataCallback();
      m === "" && (p.value = {
        limit: Q(),
        offset: 0
      }), d(() => {
        g({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: p.value.limit,
          offset: p.value.offset,
          labelFilter: m,
          context: e.wrapper.injectForm.getForm().context
        }).then((B) => {
          s.value = B.rows;
        });
      });
    }
    function i() {
      setTimeout(() => {
        s.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValue()),
            value: e.wrapper.getValue()
          }
        ];
      }, 0);
    }
    return L(() => {
      i();
    }), (m, d) => (f(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
        d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(l).fieldOutlined,
      filled: r(l).fieldFilled,
      standout: r(l).fieldStandout,
      borderless: r(l).fieldBorderless,
      rounded: r(l).fieldRounded,
      square: r(l).fieldSquare,
      dense: r(l).fieldDense,
      hideBottomSpace: r(l).fieldHideBottomSpace,
      color: r(l).fieldColor,
      bgColor: r(l).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": u,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: e.wrapper.clear,
      onFilter: c
    }, {
      options: S((g) => [
        r(t) ? (f(), w(r(se), ae(oe({ key: 0 }, g.itemProps)), {
          default: S(() => [
            _(r(ie), null, {
              default: S(() => [
                _(r(ue), null, {
                  default: S(() => [
                    ne(j(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), w(U(r(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ee = /* @__PURE__ */ D({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, l = o.rulesBehaviour === "lazy";
    return (u, s) => (f(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (p) => e.wrapper.modelValue = p),
        s[1] || (s[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": l,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Qe = /* @__PURE__ */ D({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(a) {
    const e = a, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, n = t.formStyleConfig, l = o.rulesBehaviour === "lazy";
    return (u, s) => (f(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (p) => e.wrapper.modelValue = p),
        s[1] || (s[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      modelModifiers: { number: !0 },
      type: "number",
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": l,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
});
class M {
  constructor(e, t, o, n, l, u, s) {
    v(this, "resourceName");
    v(this, "formSettings");
    v(this, "formStyleConfig");
    v(this, "actionComponent");
    v(this, "sectionComponent");
    v(this, "wrapperResetComponent");
    v(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...x.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...x.getGlobalFormStyleConfig(),
      ...o
    }, this.actionComponent = n ?? x.getGlobalActionComponent(), this.sectionComponent = l ?? x.getGlobalSectionComponent(), this.wrapperResetComponent = u ?? x.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = s ?? x.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ee,
      text: ee,
      number: Qe,
      date: $e,
      datetime: Ie,
      selectString: Pe,
      selectBelongsTo: He,
      selectHasMany: Ae,
      checkbox: Ue,
      object: Le
    }[e];
  }
  getForm(e, t, o) {
    const n = [];
    return e.form.sections.forEach((u) => {
      const s = [];
      u.fields.forEach((c) => {
        const i = M.getFieldComponentByFormFieldType(
          c.field_type
        ), m = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(
            e.form.resource_name
          ),
          regularFieldType: this.getRegularFieldTypeByFieldType(
            c.field_type
          )
        }, d = {
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
          component: i,
          componentOptions: m
        };
        s.push(d);
      });
      const p = {
        label: u.label,
        icon: u.icon,
        cssClass: u.css_class,
        fields: s
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
  getAssociationDisplayComponentByResourceName(e) {
    return this.associationDisplayDictionary[e];
  }
  getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
}
function Ye(a, e, t) {
  const o = t.getFormFactoryInstance().formSettings, n = t.getForm(), l = (c, i, m) => c[i] ? m ? () => u(c[i]) : () => c[i] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", u = (c) => String(
    h.formatDate(
      h.extractDate(c, n.backendDateFormat),
      o.dateFormat
    )
  ), s = [], p = [];
  switch (e) {
    case "date":
      s.push(te(o.dateFormat));
    case "datetime":
      s.push(te(o.datetimeFormat));
    case "number":
      s.push(et());
  }
  return a.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        s.push(We());
        break;
      case "absence":
        s.push(Je());
        break;
      case "acceptance":
        s.push(Xe());
        break;
      case "inclusion":
        s.push(ce(i.including));
        break;
      case "exclusion":
        s.push(Ke(i.excluding));
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
        s.push(tt());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          rt(
            l(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          at(
            l(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          ot(
            l(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          nt(
            l(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          lt(l(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          st(
            l(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(it());
        break;
      case "numberNumericOnly":
        s.push(ut());
        break;
      case "numberEvenOnly":
        s.push(ct());
        break;
      case "numberOddOnly":
        s.push(dt());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          pt(
            l(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          mt(
            l(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          ft(
            l(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          gt(
            l(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          ht(
            l(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          yt(l(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          bt(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          St(
            l(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          wt(
            l(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          Ft(
            l(i, "less_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          _t(
            l(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          Ct(
            l(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          vt(
            l(i, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          Dt(
            l(i, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((c) => {
    switch (c) {
      case "allowBlank":
        return Me(s);
      case "allowNull":
        return Ze(s);
    }
  }) : s;
}
function We() {
  return (a) => !!a || "Ce champ est requis";
}
function ce(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function Ke(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${ce.toString()}`
  );
}
function Je() {
  return (a) => !a || "Ce champ doit être vide";
}
function Xe() {
  return (a) => !!a || "Doit être accepté";
}
function Ze(a) {
  return (e) => (e === null || a.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function Me(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function et() {
  return (a) => /^[0-9,b]+$/.test(String(a)) || "Nombre incorrect";
}
function tt() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function rt(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function at(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ot(a) {
  return (e) => {
    const t = a();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function nt(a) {
  return (e) => {
    const t = a();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function lt(a, e) {
  return (t) => {
    const o = a();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function st(a, e) {
  return (t) => {
    const o = a();
    return Number(t) !== o || `Doit être différent de ${a}`;
  };
}
function it() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function ut() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function ct() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function dt() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function pt(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function mt(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ft(a) {
  return (e) => {
    const t = a();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function gt(a) {
  return (e) => {
    const t = a();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function bt(a, e) {
  return (t) => {
    const o = a(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
  };
}
function yt(a, e) {
  return (t) => {
    const o = a();
    return String(t) === o || `Égale à ${o}`;
  };
}
function ht(a) {
  return (e) => {
    const t = a();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function St(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function wt(a, e) {
  return (t) => {
    const o = a(), n = h.extractDate(String(t), e), l = h.extractDate(o, e);
    return !Number.isNaN(n.getTime()) && n <= l || `Inf. ou égal à ${o}`;
  };
}
function Ft(a, e) {
  return (t) => {
    const o = a(), n = h.extractDate(String(t), e), l = h.extractDate(o, e);
    return !Number.isNaN(n.getTime()) && n < l || `Inf. à ${o}`;
  };
}
function _t(a, e) {
  return (t) => {
    const o = a(), n = h.extractDate(String(t), e), l = h.extractDate(o, e);
    return !Number.isNaN(n.getTime()) && n >= l || `Sup. ou égal à ${o}`;
  };
}
function Ct(a, e) {
  return (t) => {
    const o = a(), n = h.extractDate(String(t), e), l = h.extractDate(o, e);
    return !Number.isNaN(n.getTime()) && n > l || `Sup. à ${o}`;
  };
}
function vt(a, e) {
  return (t) => {
    const o = a(), n = h.extractDate(String(t), e), l = h.extractDate(o, e);
    return n === l || `Égale à ${n}`;
  };
}
function Dt(a, e) {
  return (t) => {
    const o = a();
    return h.extractDate(String(t), e) !== h.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function te(a) {
  return (e) => !Number.isNaN(h.extractDate(String(e), a).getTime()) || "Date invalide";
}
const Vt = {
  computeServerRules: Ye
}, kt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Tt = ["index"], re = /* @__PURE__ */ D({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(a, { expose: e }) {
    const t = a, o = we(t.field.provideUniqKey), n = m(), l = C(), u = C([]);
    function s() {
      o && (l.value = o.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), l.value = p(l.value));
    }
    function p(y) {
      switch (t.field.type) {
        case "date":
          return h.formatDate(
            h.extractDate(
              String(y),
              o.getForm().backendDateFormat
            ),
            o.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return h.formatDate(
            h.extractDate(
              String(y),
              o.getForm().backendDatetimeFormat
            ),
            o.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return y;
    }
    function c(y) {
      switch (t.field.type) {
        case "date":
          return h.formatDate(
            h.extractDate(
              String(y),
              o.getFormFactoryInstance().formSettings.dateFormat
            ),
            o.getForm().backendDateFormat
          );
        case "datetime":
          return h.formatDate(
            h.extractDate(
              String(y),
              o.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            o.getForm().backendDatetimeFormat
          );
      }
      return y;
    }
    function i() {
      switch (t.field.type) {
        case "string":
          l.value = "";
          break;
        case "checkbox":
          l.value = !1;
          break;
        case "date":
          l.value = "";
          break;
        case "datetime":
          l.value = "";
          break;
        case "number":
          l.value = 0;
          break;
        case "selectString":
          l.value = null;
          break;
        case "text":
          l.value = "";
          break;
        case "object":
          l.value = {};
          break;
        case "selectBelongsTo":
          l.value = null;
          break;
        case "selectHasMany":
          l.value = null;
          break;
      }
    }
    function m() {
      return Vt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        o
      );
    }
    function d(y) {
      l.value = y;
    }
    function g() {
      return c(r(l));
    }
    function B(y) {
      u.value = y;
    }
    function R() {
      let y = !0;
      return n.forEach((q) => {
        const E = q(g());
        if (E !== !0) {
          y = E;
          return;
        }
      }), y;
    }
    return e({
      reset: s,
      clear: i,
      validate: R,
      getValue: g,
      setupBackendErrors: B
    }), L(() => {
      var q;
      s();
      const y = (q = Fe()) == null ? void 0 : q.exposed;
      y && o && o.registerRef(
        t.field.metadata.field_name,
        y
      );
    }), (y, q) => (f(), V("div", null, [
      H(y.$slots, "default", {
        propsWrapper: { modelValue: l.value, modelValueOnUpdate: d, field: y.field, injectForm: r(o), rules: r(n), reset: s, clear: i, getValue: g, validate: R }
      }, () => [
        (f(), w(U(t.field.component), {
          wrapper: { modelValue: l.value, modelValueOnUpdate: d, field: y.field, injectForm: r(o), rules: r(n), reset: s, clear: i, getValue: g, validate: R }
        }, null, 8, ["wrapper"])),
        u.value.length > 0 ? (f(), V("div", kt, [
          (f(!0), V(z, null, J(u.value, (E, K) => (f(), V("div", {
            index: K,
            class: "flex column"
          }, j(E), 9, Tt))), 256))
        ])) : N("", !0)
      ])
    ]));
  }
}), xt = {
  key: 0,
  class: "flex column"
}, Ot = /* @__PURE__ */ D({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    onSubmitFail: {},
    onSubmitSuccess: {},
    context: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let o = null;
    const n = Object.freeze(
      new M(t.resourceName, t.formSettings)
    ), l = Ge(De()), u = C({}), s = C(), p = C(!1), c = C(!1), i = C("create");
    async function m() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = Object.freeze(
        n.getForm(
          o,
          l,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), p.value = !0;
    }
    async function d() {
      var O, P;
      if (!B())
        return;
      c.value = !0, q();
      const b = g(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      F.success ? (i.value === "create" && (i.value = "edit"), o && F.resource_data && (o.resource_data = F.resource_data), R(), (P = t.onSubmitSuccess) == null || P.call(t)) : (Object.entries(u.value).forEach((T) => {
        const G = F.errors[T[0]];
        G && T[1].setupBackendErrors(G);
      }), (O = t.onSubmitFail) == null || O.call(t)), c.value = !1;
    }
    function g() {
      const b = {};
      return Object.entries(u.value).forEach((F) => {
        b[F[0]] = F[1].getValue();
      }), b;
    }
    function B() {
      let b = !0;
      return Object.values(u.value).forEach((F) => {
        if (F.validate() !== !0) {
          b = !1;
          return;
        }
      }), b;
    }
    function R() {
      Object.values(u.value).forEach((b) => {
        b.reset();
      });
    }
    function y() {
      Object.values(u.value).forEach((b) => {
        b.clear();
      });
    }
    function q() {
      Object.values(u.value).forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function E(b, F) {
      u.value[b] = F;
    }
    function K(b) {
      if (o)
        return o.resource_data[b];
    }
    function de(b) {
      const F = Object.entries(u.value).find((O) => O[0] === b);
      return F ? F[1].getValue() : null;
    }
    function pe() {
      return n;
    }
    function me() {
      return s.value;
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
      ].forEach((F) => {
        (t[F] === null || t[F] === void 0) && console.warn(`Missing props for <Submit64> -> ${F}`);
      });
    }
    return _e(l, {
      registerRef: E,
      getDefaultDataByFieldName: K,
      getFieldDataByFieldName: de,
      getFormFactoryInstance: pe,
      getForm: me,
      getAssociationDataCallback: fe
    }), e({}), L(async () => {
      ge(), await m();
    }), (b, F) => p.value && s.value ? (f(), V("div", xt, [
      $("div", {
        class: k(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), V(z, null, J(s.value.sections, (O, P) => (f(), w(U(r(n).sectionComponent), {
          key: P,
          section: O
        }, {
          default: S(() => [
            (f(!0), V(z, null, J(O.fields, (T) => (f(), V(z, {
              key: T.metadata.field_name
            }, [
              b.$slots[T.metadata.field_name] ? (f(), w(re, {
                key: 1,
                field: T
              }, {
                default: S(({ propsWrapper: G }) => [
                  H(b.$slots, T.metadata.field_name, { propsWrapper: G })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), w(re, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), w(U(r(n).actionComponent), {
        isLoadingSubmit: c.value,
        submit: d,
        clear: s.value.clearable ? y : void 0,
        reset: s.value.resetable ? R : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? H(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : N("", !0)
    ])) : N("", !0);
  }
});
export {
  x as Submit64,
  Ot as Submit64Form
};
