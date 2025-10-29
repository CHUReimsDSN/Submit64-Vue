var be = Object.defineProperty;
var he = (r, e, t) => e in r ? be(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v = (r, e, t) => he(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as D, openBlock as f, createVNode as F, createBlock as _, createCommentVNode as N, unref as n, normalizeClass as k, createElementVNode as $, toDisplayString as j, renderSlot as A, resolveComponent as re, ref as C, withCtx as y, watch as ye, Fragment as z, onMounted as L, normalizeProps as ne, mergeProps as ae, createTextVNode as oe, resolveDynamicComponent as U, inject as Se, getCurrentInstance as _e, renderList as J, provide as we } from "vue";
import { QBtn as I, QIcon as H, QInput as Z, QPopupProxy as X, QDate as le, QCheckbox as Fe, QSelect as M, QItem as se, QItemSection as ie, QItemLabel as ue, date as w, uid as Ce } from "quasar";
const ve = { class: "flex row items-center no-wrap q-pt-sm" }, De = /* @__PURE__ */ V({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, a) => (f(), D("div", ve, [
      F(n(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: a[0] || (a[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), _(n(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: a[1] || (a[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : N("", !0),
      e.clear ? (f(), _(n(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: a[2] || (a[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : N("", !0)
    ]));
  }
}), Ve = { class: "flex row items-center" }, ke = { class: "text-body1 text-weight-medium" }, Te = { class: "flex column q-gutter-sm" }, xe = /* @__PURE__ */ V({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, a) => (f(), D("div", {
      class: k(["flex column", e.section.cssClass])
    }, [
      $("div", Ve, [
        e.section.icon ? (f(), _(n(H), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : N("", !0),
        $("div", ke, j(e.section.label), 1)
      ]),
      $("div", Te, [
        A(t.$slots, "default")
      ])
    ], 2));
  }
}), Ne = /* @__PURE__ */ V({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, a) => {
      const l = re("q-icon");
      return f(), _(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (o) => e.reset())
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
    }, this._actionComponent = De, this._sectionComponent = xe, this._wrapperResetComponent = Ne, this._associationDisplayDictonary = {};
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
const K = /* @__PURE__ */ V({
  __name: "RegularField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, l = t.formStyleConfig, o = a.rulesBehaviour === "lazy";
    return (u, s) => (f(), _(n(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
        s[1] || (s[1] = (m) => e.wrapper.modelValueOnUpdate(m))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": o,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), qe = { class: "row items-center justify-end" }, Be = /* @__PURE__ */ V({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, l = t.formStyleConfig, o = a.rulesBehaviour === "lazy", u = C();
    function s() {
      u.value && u.value.hide();
    }
    return (m, c) => (f(), _(n(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[2] || (c[2] = (i) => e.wrapper.modelValue = i),
        c[3] || (c[3] = (i) => e.wrapper.modelValueOnUpdate(i))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(l).fieldOutlined,
      filled: n(l).fieldFilled,
      standout: n(l).fieldStandout,
      borderless: n(l).fieldBorderless,
      rounded: n(l).fieldRounded,
      square: n(l).fieldSquare,
      dense: n(l).fieldDense,
      hideBottomSpace: n(l).fieldHideBottomSpace,
      color: n(l).fieldColor,
      bgColor: n(l).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": o,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: y(() => [
        F(n(H), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            F(n(X), {
              ref_key: "popupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(n(le), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    c[0] || (c[0] = (i) => e.wrapper.modelValue = i),
                    c[1] || (c[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: n(t).formSettings.dateFormat
                }, {
                  default: y(() => [
                    $("div", qe, [
                      F(n(I), {
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
}), Oe = { class: "row items-center justify-end" }, $e = { class: "row items-center justify-end" }, Re = /* @__PURE__ */ V({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings, l = t.formStyleConfig, o = a.rulesBehaviour === "lazy", u = C(), s = C();
    function m() {
      u.value && u.value.hide();
    }
    function c() {
      s.value && s.value.hide();
    }
    return (i, d) => {
      const g = re("q-time");
      return f(), _(n(Z), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          d[4] || (d[4] = (p) => e.wrapper.modelValue = p),
          d[5] || (d[5] = (p) => e.wrapper.modelValueOnUpdate(p))
        ],
        label: e.wrapper.field.label,
        hint: e.wrapper.field.hint,
        outlined: n(l).fieldOutlined,
        filled: n(l).fieldFilled,
        standout: n(l).fieldStandout,
        borderless: n(l).fieldBorderless,
        rounded: n(l).fieldRounded,
        square: n(l).fieldSquare,
        dense: n(l).fieldDense,
        hideBottomSpace: n(l).fieldHideBottomSpace,
        color: n(l).fieldColor,
        bgColor: n(l).fieldBgColor,
        class: k(e.wrapper.field.cssClass),
        "lazy-rules": o,
        readonly: e.wrapper.field.readonly,
        clearable: e.wrapper.field.clearable,
        rules: e.wrapper.rules,
        onClear: e.wrapper.clear
      }, {
        append: y(() => [
          F(n(H), {
            size: "sm",
            color: "primary",
            name: "event",
            class: "cursor-pointer"
          }, {
            default: y(() => [
              F(n(X), {
                ref_key: "datePopupProxyRef",
                ref: u,
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: y(() => [
                  F(n(le), {
                    modelValue: e.wrapper.modelValue,
                    "onUpdate:modelValue": [
                      d[0] || (d[0] = (p) => e.wrapper.modelValue = p),
                      d[1] || (d[1] = (p) => e.wrapper.modelValueOnUpdate(p))
                    ],
                    mask: n(t).formSettings.datetimeFormat
                  }, {
                    default: y(() => [
                      $("div", Oe, [
                        F(n(I), {
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
          F(n(H), {
            size: "sm",
            color: "primary",
            name: "access_time",
            class: "cursor-pointer"
          }, {
            default: y(() => [
              F(n(X), {
                ref_key: "timePopupProxyRef",
                ref: s,
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: y(() => [
                  F(g, {
                    modelValue: e.wrapper.modelValue,
                    "onUpdate:modelValue": [
                      d[2] || (d[2] = (p) => e.wrapper.modelValue = p),
                      d[3] || (d[3] = (p) => e.wrapper.modelValueOnUpdate(p))
                    ],
                    mask: n(t).formSettings.datetimeFormat,
                    format24h: ""
                  }, {
                    default: y(() => [
                      $("div", $e, [
                        F(n(I), {
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
      }, 8, ["modelValue", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "readonly", "clearable", "rules", "onClear"]);
    };
  }
}), Ee = {
  key: 0,
  class: "q-field__bottom"
}, Ie = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, je = /* @__PURE__ */ V({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function o(u) {
      e.wrapper.modelValueOnUpdate(u);
    }
    return ye(() => e.wrapper.modelValue, () => {
      t.value = e.wrapper.validate();
    }), (u, s) => (f(), D(z, null, [
      F(n(Fe), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
          s[1] || (s[1] = (m) => o(m))
        ],
        label: e.wrapper.field.label,
        dense: n(l).fieldDense,
        color: n(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: k(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), D("div", Ee, j(e.wrapper.field.hint), 1)) : N("", !0),
      t.value !== !0 ? (f(), D("div", Ie, j(t.value), 1)) : N("", !0)
    ], 64));
  }
}), ze = /* @__PURE__ */ V({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), a = t.formSettings;
    return t.formStyleConfig, a.rulesBehaviour, (l, o) => " TODO json edit ? ";
  }
}), Ue = /* @__PURE__ */ V({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C([]), a = C([]), l = e.wrapper.injectForm.getFormFactoryInstance(), o = l.formSettings, u = l.formStyleConfig, s = o.rulesBehaviour === "lazy";
    function m(i, d) {
      if (i === "") {
        d(() => {
          a.value = [...t.value];
        });
        return;
      }
      d(() => {
        const g = i.toLowerCase();
        a.value = t.value.filter((p) => p.label.toLowerCase().includes(g));
      });
    }
    function c(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), a.value = i.field.selectOptions ?? [];
    }
    return L(() => {
      c(e.wrapper);
    }), (i, d) => (f(), _(n(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (g) => e.wrapper.modelValue = g),
        d[1] || (d[1] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(u).fieldOutlined,
      filled: n(u).fieldFilled,
      standout: n(u).fieldStandout,
      borderless: n(u).fieldBorderless,
      rounded: n(u).fieldRounded,
      square: n(u).fieldSquare,
      dense: n(u).fieldDense,
      hideBottomSpace: n(u).fieldHideBottomSpace,
      color: n(u).fieldColor,
      bgColor: n(u).fieldBgColor,
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
function Le(r) {
  return Symbol(r);
}
function Q() {
  return 20;
}
const Pe = /* @__PURE__ */ V({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, a = e.wrapper.injectForm.getFormFactoryInstance(), l = a.formSettings, o = a.formStyleConfig, u = l.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(d, g) {
      const p = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), g(() => {
        p({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((q) => {
          s.value = q.rows;
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
    }), (d, g) => (f(), _(n(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (p) => e.wrapper.modelValue = p),
        g[1] || (g[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(o).fieldOutlined,
      filled: n(o).fieldFilled,
      standout: n(o).fieldStandout,
      borderless: n(o).fieldBorderless,
      rounded: n(o).fieldRounded,
      square: n(o).fieldSquare,
      dense: n(o).fieldDense,
      hideBottomSpace: n(o).fieldHideBottomSpace,
      color: n(o).fieldColor,
      bgColor: n(o).fieldBgColor,
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
      options: y((p) => [
        n(t) ? (f(), _(n(se), ne(ae({ key: 0 }, p.itemProps)), {
          default: y(() => [
            F(n(ie), null, {
              default: y(() => [
                F(n(ue), null, {
                  default: y(() => [
                    oe(j(p.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), _(U(n(t)), {
          key: 1,
          scope: p
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Ge = /* @__PURE__ */ V({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, a = e.wrapper.injectForm.getFormFactoryInstance(), l = a.formSettings, o = a.formStyleConfig, u = l.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(d, g) {
      const p = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), g(() => {
        p({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((q) => {
          s.value = q.rows;
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
    }), (d, g) => (f(), _(n(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (p) => e.wrapper.modelValue = p),
        g[1] || (g[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: n(o).fieldOutlined,
      filled: n(o).fieldFilled,
      standout: n(o).fieldStandout,
      borderless: n(o).fieldBorderless,
      rounded: n(o).fieldRounded,
      square: n(o).fieldSquare,
      dense: n(o).fieldDense,
      hideBottomSpace: n(o).fieldHideBottomSpace,
      color: n(o).fieldColor,
      bgColor: n(o).fieldBgColor,
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
      options: y((p) => [
        n(t) ? (f(), _(n(se), ne(ae({ key: 0 }, p.itemProps)), {
          default: y(() => [
            F(n(ie), null, {
              default: y(() => [
                F(n(ue), null, {
                  default: y(() => [
                    oe(j(p.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), _(U(n(t)), {
          key: 1,
          scope: p
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
class ee {
  constructor(e, t, a, l, o, u, s) {
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
    }, this.actionComponent = l ?? x.getGlobalActionComponent(), this.sectionComponent = o ?? x.getGlobalSectionComponent(), this.wrapperResetComponent = u ?? x.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = s ?? x.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: K,
      text: K,
      number: K,
      date: Be,
      datetime: Re,
      selectString: Ue,
      selectBelongsTo: Pe,
      selectHasMany: Ge,
      checkbox: je,
      object: ze
    }[e];
  }
  getForm(e, t, a) {
    const l = [];
    return e.form.sections.forEach((u) => {
      const s = [];
      u.fields.forEach((c) => {
        const i = ee.getFieldComponentByFormFieldType(
          c.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(
            e.form.resource_name
          ),
          regularFieldType: this.getRegularFieldTypeByFieldType(
            c.field_type
          )
        }, g = {
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
          componentOptions: d
        };
        s.push(g);
      });
      const m = {
        label: u.label,
        icon: u.icon,
        cssClass: u.css_class,
        fields: s
      };
      l.push(m);
    }), {
      sections: l,
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
      number: "number",
      text: "textarea"
    }[e] || void 0;
  }
}
function Ae(r, e, t) {
  const a = t.getFormFactoryInstance().formSettings, l = t.getForm(), o = (c, i, d) => c[i] ? d ? () => u(c[i]) : () => c[i] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", u = (c) => String(
    w.formatDate(
      w.extractDate(c, l.backendDateFormat),
      a.dateFormat
    )
  ), s = [], m = [];
  switch (e) {
    case "date":
      s.push(Ft(a.dateFormat));
  }
  return r.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        s.push(He());
        break;
      case "absence":
        s.push(Ye());
        break;
      case "acceptance":
        s.push(We());
        break;
      case "inclusion":
        s.push(ce(i.including));
        break;
      case "exclusion":
        s.push(Qe(i.excluding));
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
        s.push(Xe());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          Ze(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          Me(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          et(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          tt(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          rt(o(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          nt(
            o(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(at());
        break;
      case "numberNumericOnly":
        s.push(ot());
        break;
      case "numberEvenOnly":
        s.push(lt());
        break;
      case "numberOddOnly":
        s.push(st());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          it(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          ut(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          ct(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          pt(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          ft(
            o(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          mt(o(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          dt(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          gt(
            o(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          bt(
            o(i, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          ht(
            o(i, "less_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          yt(
            o(i, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          St(
            o(i, "greater_than", !0),
            a.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          _t(
            o(i, "equal_to", !0),
            a.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          wt(
            o(i, "other_than", !0),
            a.dateFormat
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((c) => {
    switch (c) {
      case "allowBlank":
        return Je(s);
      case "allowNull":
        return Ke(s);
    }
  }) : s;
}
function He() {
  return (r) => !!r || "Ce champ est requis";
}
function ce(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Qe(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ce.toString()}`
  );
}
function Ye() {
  return (r) => !r || "Ce champ doit être vide";
}
function We() {
  return (r) => !!r || "Doit être accepté";
}
function Ke(r) {
  return (e) => (e === null || r.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Je(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Xe() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function Ze(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Me(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function et(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function tt(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function rt(r, e) {
  return (t) => {
    const a = r();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function nt(r, e) {
  return (t) => {
    const a = r();
    return Number(t) !== a || `Doit être différent de ${r}`;
  };
}
function at() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function ot() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function lt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function st() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function it(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ut(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ct(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function pt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function dt(r, e) {
  return (t) => {
    const a = r(), l = e();
    return String(t).length >= a && String(t).length <= l || `Entre ${a} et ${l}`;
  };
}
function mt(r, e) {
  return (t) => {
    const a = r();
    return String(t) === a || `Égale à ${a}`;
  };
}
function ft(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function gt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function bt(r, e) {
  return (t) => {
    const a = r(), l = w.extractDate(String(t), e), o = w.extractDate(a, e);
    return !Number.isNaN(l.getTime()) && l <= o || `Inf. ou égal à ${a}`;
  };
}
function ht(r, e) {
  return (t) => {
    const a = r(), l = w.extractDate(String(t), e), o = w.extractDate(a, e);
    return !Number.isNaN(l.getTime()) && l < o || `Inf. à ${a}`;
  };
}
function yt(r, e) {
  return (t) => {
    const a = r(), l = w.extractDate(String(t), e), o = w.extractDate(a, e);
    return !Number.isNaN(l.getTime()) && l >= o || `Sup. ou égal à ${a}`;
  };
}
function St(r, e) {
  return (t) => {
    const a = r(), l = w.extractDate(String(t), e), o = w.extractDate(a, e);
    return !Number.isNaN(l.getTime()) && l > o || `Sup. à ${a}`;
  };
}
function _t(r, e) {
  return (t) => {
    const a = r(), l = w.extractDate(String(t), e), o = w.extractDate(a, e);
    return l === o || `Égale à ${l}`;
  };
}
function wt(r, e) {
  return (t) => {
    const a = r();
    return w.extractDate(String(t), e) !== w.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Ft(r) {
  return (e) => !Number.isNaN(w.extractDate(String(e), r).getTime()) || "Date invalide";
}
const Ct = {
  computeServerRules: Ae
}, vt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Dt = ["index"], te = /* @__PURE__ */ V({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r, a = Se(t.field.provideUniqKey), l = d(), o = C(), u = C([]);
    function s() {
      a && (o.value = a.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), o.value = m(o.value));
    }
    function m(h) {
      switch (t.field.type) {
        case "date":
          return w.formatDate(
            w.extractDate(
              String(h),
              a.getForm().backendDateFormat
            ),
            a.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return h;
    }
    function c(h) {
      switch (t.field.type) {
        case "date":
          return w.formatDate(
            w.extractDate(
              String(h),
              a.getFormFactoryInstance().formSettings.dateFormat
            ),
            a.getForm().backendDateFormat
          );
      }
      return h;
    }
    function i() {
      switch (t.field.type) {
        case "string":
          o.value = "";
          break;
        case "checkbox":
          o.value = !1;
          break;
        case "date":
          o.value = "";
          break;
        case "number":
          o.value = 0;
          break;
        case "selectString":
          o.value = null;
          break;
        case "text":
          o.value = "";
          break;
        case "object":
          o.value = {};
          break;
        case "selectBelongsTo":
          o.value = null;
          break;
        case "selectHasMany":
          o.value = null;
          break;
      }
    }
    function d() {
      return Ct.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        a
      );
    }
    function g(h) {
      o.value = h;
    }
    function p() {
      return c(n(o));
    }
    function q(h) {
      u.value = h;
    }
    function R() {
      let h = !0;
      return l.forEach((B) => {
        const E = B(p());
        if (E !== !0) {
          h = E;
          return;
        }
      }), h;
    }
    return e({
      reset: s,
      clear: i,
      validate: R,
      getValue: p,
      setupBackendErrors: q
    }), L(() => {
      var B;
      s();
      const h = (B = _e()) == null ? void 0 : B.exposed;
      h && a && a.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, B) => (f(), D("div", null, [
      A(h.$slots, "default", {
        propsWrapper: { modelValue: o.value, modelValueOnUpdate: g, field: h.field, injectForm: n(a), rules: n(l), reset: s, clear: i, getValue: p, validate: R }
      }, () => [
        (f(), _(U(t.field.component), {
          wrapper: { modelValue: o.value, modelValueOnUpdate: g, field: h.field, injectForm: n(a), rules: n(l), reset: s, clear: i, getValue: p, validate: R }
        }, null, 8, ["wrapper"])),
        u.value.length > 0 ? (f(), D("div", vt, [
          (f(!0), D(z, null, J(u.value, (E, W) => (f(), D("div", {
            index: W,
            class: "flex column"
          }, j(E), 9, Dt))), 256))
        ])) : N("", !0)
      ])
    ]));
  }
}), Vt = {
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
    onSubmitFail: {},
    onSubmitSuccess: {},
    context: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let a = null;
    const l = Object.freeze(
      new ee(t.resourceName, t.formSettings)
    ), o = Le(Ce()), u = C({}), s = C(), m = C(!1), c = C(!1), i = C("create");
    async function d() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = Object.freeze(
        l.getForm(
          a,
          o,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), m.value = !0;
    }
    async function g() {
      var O, P;
      if (!q())
        return;
      c.value = !0, B();
      const b = p(), S = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      S.success ? (i.value === "create" && (i.value = "edit"), a && S.resource_data && (a.resource_data = S.resource_data), R(), (P = t.onSubmitSuccess) == null || P.call(t)) : (Object.entries(u.value).forEach((T) => {
        const G = S.errors[T[0]];
        G && T[1].setupBackendErrors(G);
      }), (O = t.onSubmitFail) == null || O.call(t)), c.value = !1;
    }
    function p() {
      const b = {};
      return Object.entries(u.value).forEach((S) => {
        b[S[0]] = S[1].getValue();
      }), b;
    }
    function q() {
      let b = !0;
      return Object.values(u.value).forEach((S) => {
        if (S.validate() !== !0) {
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
    function h() {
      Object.values(u.value).forEach((b) => {
        b.clear();
      });
    }
    function B() {
      Object.values(u.value).forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function E(b, S) {
      u.value[b] = S;
    }
    function W(b) {
      if (a)
        return a.resource_data[b];
    }
    function pe(b) {
      const S = Object.entries(u.value).find((O) => O[0] === b);
      return S ? S[1].getValue() : null;
    }
    function de() {
      return l;
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
      ].forEach((S) => {
        (t[S] === null || t[S] === void 0) && console.warn(`Missing props for <Submit64> -> ${S}`);
      });
    }
    return we(o, {
      registerRef: E,
      getDefaultDataByFieldName: W,
      getFieldDataByFieldName: pe,
      getFormFactoryInstance: de,
      getForm: me,
      getAssociationDataCallback: fe
    }), e({}), L(async () => {
      ge(), await d();
    }), (b, S) => m.value && s.value ? (f(), D("div", Vt, [
      $("div", {
        class: k(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), D(z, null, J(s.value.sections, (O, P) => (f(), _(U(n(l).sectionComponent), {
          key: P,
          section: O
        }, {
          default: y(() => [
            (f(!0), D(z, null, J(O.fields, (T) => (f(), D(z, {
              key: T.metadata.field_name
            }, [
              b.$slots[T.metadata.field_name] ? (f(), _(te, {
                key: 1,
                field: T
              }, {
                default: y(({ propsWrapper: G }) => [
                  A(b.$slots, T.metadata.field_name, { propsWrapper: G })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), _(te, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), _(U(n(l).actionComponent), {
        isLoadingSubmit: c.value,
        submit: g,
        clear: s.value.clearable ? h : void 0,
        reset: s.value.resetable ? R : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? A(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : N("", !0)
    ])) : N("", !0);
  }
});
export {
  x as Submit64,
  Nt as Submit64Form
};
