var be = Object.defineProperty;
var ye = (o, e, t) => e in o ? be(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var v = (o, e, t) => ye(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as D, createElementBlock as V, openBlock as g, createVNode as _, createBlock as w, createCommentVNode as B, unref as r, normalizeClass as k, createElementVNode as $, toDisplayString as j, renderSlot as H, resolveComponent as he, ref as C, withCtx as S, watch as Se, Fragment as z, onMounted as L, normalizeProps as oe, mergeProps as ae, createTextVNode as ne, resolveDynamicComponent as U, inject as we, getCurrentInstance as Fe, renderList as J, provide as _e } from "vue";
import { QBtn as I, QIcon as A, QInput as W, QPopupProxy as X, QDate as le, QTime as Ce, QCheckbox as ve, QSelect as Z, QItem as se, QItemSection as ie, QItemLabel as ue, date as h, uid as De } from "quasar";
const Ve = { class: "flex row items-center no-wrap q-pt-sm" }, ke = /* @__PURE__ */ D({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => (g(), V("div", Ve, [
      _(r(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: a[0] || (a[0] = (n) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (g(), w(r(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: a[1] || (a[1] = (n) => e.reset())
      }, null, 8, ["loading"])) : B("", !0),
      e.clear ? (g(), w(r(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: a[2] || (a[2] = (n) => e.clear())
      }, null, 8, ["loading"])) : B("", !0)
    ]));
  }
}), Te = { class: "flex row items-center" }, xe = { class: "text-body1 text-weight-medium" }, Be = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ D({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (g(), V("div", {
      class: k(["flex column", e.section.cssClass])
    }, [
      $("div", Te, [
        e.section.icon ? (g(), w(r(A), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : B("", !0),
        $("div", xe, j(e.section.label), 1)
      ]),
      $("div", Be, [
        H(t.$slots, "default")
      ])
    ], 2));
  }
}), qe = /* @__PURE__ */ D({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = he("q-icon");
      return g(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (l) => e.reset())
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
    }, this._actionComponent = ke, this._sectionComponent = Ne, this._wrapperResetComponent = qe, this._associationDisplayDictonary = {};
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
  setup(o) {
    const e = o, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, n = t.formStyleConfig, l = a.rulesBehaviour === "lazy", u = C();
    function s() {
      u.value && u.value.hide();
    }
    return (m, c) => (g(), w(r(W), {
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
  setup(o) {
    const e = o, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, n = t.formStyleConfig, l = a.rulesBehaviour === "lazy", u = C(), s = C();
    function m() {
      u.value && u.value.hide();
    }
    function c() {
      s.value && s.value.hide();
    }
    return (i, f) => (g(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        f[4] || (f[4] = (d) => e.wrapper.modelValue = d),
        f[5] || (f[5] = (d) => e.wrapper.modelValueOnUpdate(d))
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
                    f[0] || (f[0] = (d) => e.wrapper.modelValue = d),
                    f[1] || (f[1] = (d) => e.wrapper.modelValueOnUpdate(d))
                  ],
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: S(() => [
                    $("div", Re, [
                      _(r(I), {
                        onClick: m,
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
                    f[2] || (f[2] = (d) => e.wrapper.modelValue = d),
                    f[3] || (f[3] = (d) => e.wrapper.modelValueOnUpdate(d))
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
  setup(o) {
    const e = o, t = C(!0), n = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function l(u) {
      e.wrapper.modelValueOnUpdate(u);
    }
    return Se(() => e.wrapper.modelValue, () => {
      t.value = e.wrapper.validate();
    }), (u, s) => (g(), V(z, null, [
      _(r(ve), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
          s[1] || (s[1] = (m) => l(m))
        ],
        label: e.wrapper.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: k(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (g(), V("div", je, j(e.wrapper.field.hint), 1)) : B("", !0),
      t.value !== !0 ? (g(), V("div", ze, j(t.value), 1)) : B("", !0)
    ], 64));
  }
}), Le = /* @__PURE__ */ D({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(o) {
    const t = o.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings;
    return t.formStyleConfig, a.rulesBehaviour, (n, l) => " TODO json edit ? ";
  }
}), Pe = /* @__PURE__ */ D({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(o) {
    const e = o, t = C([]), a = C([]), n = e.wrapper.injectForm.getFormFactoryInstance(), l = n.formSettings, u = n.formStyleConfig, s = l.rulesBehaviour === "lazy";
    function m(i, f) {
      if (i === "") {
        f(() => {
          a.value = [...t.value];
        });
        return;
      }
      f(() => {
        const d = i.toLowerCase();
        a.value = t.value.filter((b) => b.label.toLowerCase().includes(d));
      });
    }
    function c(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), a.value = i.field.selectOptions ?? [];
    }
    return L(() => {
      c(e.wrapper);
    }), (i, f) => (g(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        f[0] || (f[0] = (d) => e.wrapper.modelValue = d),
        f[1] || (f[1] = (d) => e.wrapper.modelValueOnUpdate(d))
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
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: m
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Ge(o) {
  return Symbol(o);
}
function Q() {
  return 20;
}
const He = /* @__PURE__ */ D({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(o) {
    const e = o, t = e.wrapper.field.componentOptions.associationDisplayComponent, a = e.wrapper.injectForm.getFormFactoryInstance(), n = a.formSettings, l = a.formStyleConfig, u = n.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(f, d) {
      const b = e.wrapper.injectForm.getAssociationDataCallback();
      f === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), d(() => {
        b({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: f,
          context: e.wrapper.injectForm.getForm().context
        }).then((N) => {
          s.value = N.rows;
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
    }), (f, d) => (g(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
        d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      options: S((b) => [
        r(t) ? (g(), w(r(se), oe(ae({ key: 0 }, b.itemProps)), {
          default: S(() => [
            _(r(ie), null, {
              default: S(() => [
                _(r(ue), null, {
                  default: S(() => [
                    ne(j(b.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (g(), w(U(r(t)), {
          key: 1,
          scope: b
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
  setup(o) {
    const e = o, t = e.wrapper.field.componentOptions.associationDisplayComponent, a = e.wrapper.injectForm.getFormFactoryInstance(), n = a.formSettings, l = a.formStyleConfig, u = n.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(f, d) {
      const b = e.wrapper.injectForm.getAssociationDataCallback();
      f === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), d(() => {
        b({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: f,
          context: e.wrapper.injectForm.getForm().context
        }).then((N) => {
          s.value = N.rows;
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
    }), (f, d) => (g(), w(r(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (b) => e.wrapper.modelValue = b),
        d[1] || (d[1] = (b) => e.wrapper.modelValueOnUpdate(b))
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
      options: S((b) => [
        r(t) ? (g(), w(r(se), oe(ae({ key: 0 }, b.itemProps)), {
          default: S(() => [
            _(r(ie), null, {
              default: S(() => [
                _(r(ue), null, {
                  default: S(() => [
                    ne(j(b.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (g(), w(U(r(t)), {
          key: 1,
          scope: b
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
  setup(o) {
    const e = o, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, n = t.formStyleConfig, l = a.rulesBehaviour === "lazy";
    return (u, s) => (g(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
        s[1] || (s[1] = (m) => e.wrapper.modelValueOnUpdate(m))
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
  setup(o) {
    const e = o, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, n = t.formStyleConfig, l = a.rulesBehaviour === "lazy";
    return (u, s) => (g(), w(r(W), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
        s[1] || (s[1] = (m) => e.wrapper.modelValueOnUpdate(m))
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
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
});
class M {
  constructor(e, t, a, n, l, u, s) {
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
      ...a
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
  getForm(e, t, a) {
    const n = [];
    return e.form.sections.forEach((u) => {
      const s = [];
      u.fields.forEach((c) => {
        const i = M.getFieldComponentByFormFieldType(
          c.field_type
        ), f = {
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
          componentOptions: f
        };
        s.push(d);
      });
      const m = {
        label: u.label,
        icon: u.icon,
        cssClass: u.css_class,
        fields: s
      };
      n.push(m);
    }), {
      sections: n,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1,
      context: a
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
function Ye(o, e, t) {
  const a = t.getFormFactoryInstance().formSettings, n = t.getForm(), l = (c, i, f) => c[i] ? f ? () => u(c[i]) : () => c[i] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", u = (c) => String(
    h.formatDate(
      h.extractDate(c, n.backendDateFormat),
      a.dateFormat
    )
  ), s = [], m = [];
  switch (e) {
    case "date":
      s.push(te(a.dateFormat));
      break;
    case "datetime":
      s.push(te(a.datetimeFormat));
      break;
  }
  return o.forEach((c) => {
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
        m.push("allowNull");
        break;
      case "allowBlank":
        m.push("allowBlank");
        break;
      case "positiveNumber":
        s.push(et());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          tt(
            l(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          rt(
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
          at(
            l(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          nt(l(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          lt(
            l(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(st());
        break;
      case "numberNumericOnly":
        s.push(it());
        break;
      case "numberEvenOnly":
        s.push(ut());
        break;
      case "numberOddOnly":
        s.push(ct());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          dt(
            l(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          pt(
            l(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          mt(
            l(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          ft(
            l(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          yt(
            l(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          bt(l(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          gt(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          ht(
            l(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          St(
            l(i, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          wt(
            l(i, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          Ft(
            l(i, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          _t(
            l(i, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          Ct(
            l(i, "equal_to", !0),
            a.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          vt(
            l(i, "other_than", !0),
            a.dateFormat
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((c) => {
    switch (c) {
      case "allowBlank":
        return Me(s);
      case "allowNull":
        return Ze(s);
    }
  }) : s;
}
function We() {
  return (o) => !!o || "Ce champ est requis";
}
function ce(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Ke(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${ce.toString()}`
  );
}
function Je() {
  return (o) => !o || "Ce champ doit être vide";
}
function Xe() {
  return (o) => !!o || "Doit être accepté";
}
function Ze(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Me(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function et() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function tt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function rt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ot(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function at(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function nt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function lt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function st() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function it() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ut() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function ct() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function dt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function pt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function mt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function ft(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function gt(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function bt(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function yt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function ht(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function St(o, e) {
  return (t) => {
    const a = o(), n = h.extractDate(String(t), e), l = h.extractDate(a, e);
    return !Number.isNaN(n.getTime()) && n <= l || `Inf. ou égal à ${a}`;
  };
}
function wt(o, e) {
  return (t) => {
    const a = o(), n = h.extractDate(String(t), e), l = h.extractDate(a, e);
    return !Number.isNaN(n.getTime()) && n < l || `Inf. à ${a}`;
  };
}
function Ft(o, e) {
  return (t) => {
    const a = o(), n = h.extractDate(String(t), e), l = h.extractDate(a, e);
    return !Number.isNaN(n.getTime()) && n >= l || `Sup. ou égal à ${a}`;
  };
}
function _t(o, e) {
  return (t) => {
    const a = o(), n = h.extractDate(String(t), e), l = h.extractDate(a, e);
    return !Number.isNaN(n.getTime()) && n > l || `Sup. à ${a}`;
  };
}
function Ct(o, e) {
  return (t) => {
    const a = o(), n = h.extractDate(String(t), e), l = h.extractDate(a, e);
    return n === l || `Égale à ${n}`;
  };
}
function vt(o, e) {
  return (t) => {
    const a = o();
    return h.extractDate(String(t), e) !== h.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function te(o) {
  return (e) => !Number.isNaN(h.extractDate(String(e), o).getTime()) || "Date invalide";
}
const Dt = {
  computeServerRules: Ye
}, Vt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, kt = ["index"], re = /* @__PURE__ */ D({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const t = o, a = we(t.field.provideUniqKey), n = f(), l = C(), u = C([]);
    function s() {
      a && (l.value = a.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), l.value = m(l.value));
    }
    function m(p) {
      switch (t.field.type) {
        case "date":
          return p == null ? p : h.formatDate(
            h.extractDate(String(p), a.getForm().backendDateFormat),
            a.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return p == null ? p : h.formatDate(
            h.extractDate(
              String(p),
              a.getForm().backendDatetimeFormat
            ),
            a.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return p;
    }
    function c(p) {
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? p : h.formatDate(
            h.extractDate(
              String(p),
              a.getFormFactoryInstance().formSettings.dateFormat
            ),
            a.getForm().backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? p : h.formatDate(
            h.extractDate(
              String(p),
              a.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            a.getForm().backendDatetimeFormat
          );
      }
      return p;
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
          l.value = null;
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
    function f() {
      return Dt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        a
      );
    }
    function d(p) {
      l.value = p;
    }
    function b() {
      return c(r(l));
    }
    function N(p) {
      u.value = p;
    }
    function R() {
      let p = !0;
      return n.forEach((q) => {
        const E = q(b());
        if (E !== !0) {
          p = E;
          return;
        }
      }), p;
    }
    return e({
      reset: s,
      clear: i,
      validate: R,
      getValue: b,
      setupBackendErrors: N
    }), L(() => {
      var q;
      s();
      const p = (q = Fe()) == null ? void 0 : q.exposed;
      p && a && a.registerRef(
        t.field.metadata.field_name,
        p
      );
    }), (p, q) => (g(), V("div", null, [
      H(p.$slots, "default", {
        propsWrapper: { modelValue: l.value, modelValueOnUpdate: d, field: p.field, injectForm: r(a), rules: r(n), reset: s, clear: i, getValue: b, validate: R }
      }, () => [
        (g(), w(U(t.field.component), {
          wrapper: { modelValue: l.value, modelValueOnUpdate: d, field: p.field, injectForm: r(a), rules: r(n), reset: s, clear: i, getValue: b, validate: R }
        }, null, 8, ["wrapper"])),
        u.value.length > 0 ? (g(), V("div", Vt, [
          (g(!0), V(z, null, J(u.value, (E, K) => (g(), V("div", {
            index: K,
            class: "flex column"
          }, j(E), 9, kt))), 256))
        ])) : B("", !0)
      ])
    ]));
  }
}), Tt = {
  key: 0,
  class: "flex column"
}, qt = /* @__PURE__ */ D({
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
  setup(o, { expose: e }) {
    const t = o;
    let a = null;
    const n = Object.freeze(
      new M(t.resourceName, t.formSettings)
    ), l = Ge(De()), u = C({}), s = C(), m = C(!1), c = C(!1), i = C("create");
    async function f() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = Object.freeze(
        n.getForm(
          a,
          l,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), m.value = !0;
    }
    async function d() {
      var O, P;
      if (!N())
        return;
      c.value = !0, q();
      const y = b(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        context: t.context
      });
      F.success ? (i.value === "create" && (i.value = "edit"), a && F.resource_data && (a.resource_data = F.resource_data), R(), (P = t.onSubmitSuccess) == null || P.call(t)) : (Object.entries(u.value).forEach((T) => {
        const G = F.errors[T[0]];
        G && T[1].setupBackendErrors(G);
      }), (O = t.onSubmitFail) == null || O.call(t)), c.value = !1;
    }
    function b() {
      const y = {};
      return Object.entries(u.value).forEach((F) => {
        y[F[0]] = F[1].getValue();
      }), y;
    }
    function N() {
      let y = !0;
      return Object.values(u.value).forEach((F) => {
        if (F.validate() !== !0) {
          y = !1;
          return;
        }
      }), y;
    }
    function R() {
      Object.values(u.value).forEach((y) => {
        y.reset();
      });
    }
    function p() {
      Object.values(u.value).forEach((y) => {
        y.clear();
      });
    }
    function q() {
      Object.values(u.value).forEach((y) => {
        y.setupBackendErrors([]);
      });
    }
    function E(y, F) {
      u.value[y] = F;
    }
    function K(y) {
      if (a)
        return a.resource_data[y];
    }
    function de(y) {
      const F = Object.entries(u.value).find((O) => O[0] === y);
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
      ge(), await f();
    }), (y, F) => m.value && s.value ? (g(), V("div", Tt, [
      $("div", {
        class: k(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), V(z, null, J(s.value.sections, (O, P) => (g(), w(U(r(n).sectionComponent), {
          key: P,
          section: O
        }, {
          default: S(() => [
            (g(!0), V(z, null, J(O.fields, (T) => (g(), V(z, {
              key: T.metadata.field_name
            }, [
              y.$slots[T.metadata.field_name] ? (g(), w(re, {
                key: 1,
                field: T
              }, {
                default: S(({ propsWrapper: G }) => [
                  H(y.$slots, T.metadata.field_name, { propsWrapper: G })
                ]),
                _: 2
              }, 1032, ["field"])) : (g(), w(re, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), w(U(r(n).actionComponent), {
        isLoadingSubmit: c.value,
        submit: d,
        clear: s.value.clearable ? p : void 0,
        reset: s.value.resetable ? R : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? H(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : B("", !0)
    ])) : B("", !0);
  }
});
export {
  x as Submit64,
  qt as Submit64Form
};
