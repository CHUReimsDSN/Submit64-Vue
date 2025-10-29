var ge = Object.defineProperty;
var be = (r, e, t) => e in r ? ge(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v = (r, e, t) => be(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as V, createElementBlock as D, openBlock as f, createVNode as w, createBlock as _, createCommentVNode as N, unref as a, normalizeClass as k, createElementVNode as $, toDisplayString as j, renderSlot as A, resolveComponent as ye, ref as C, withCtx as S, watch as he, Fragment as z, onMounted as L, normalizeProps as re, mergeProps as ae, createTextVNode as ne, resolveDynamicComponent as U, inject as Se, getCurrentInstance as Fe, renderList as J, provide as _e } from "vue";
import { QBtn as I, QIcon as H, QInput as Z, QPopupProxy as X, QDate as oe, QTime as we, QCheckbox as Ce, QSelect as M, QItem as le, QItemSection as se, QItemLabel as ie, date as h, uid as ve } from "quasar";
const De = { class: "flex row items-center no-wrap q-pt-sm" }, Ve = /* @__PURE__ */ V({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), D("div", De, [
      w(a(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: n[0] || (n[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), _(a(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: n[1] || (n[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : N("", !0),
      e.clear ? (f(), _(a(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: n[2] || (n[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : N("", !0)
    ]));
  }
}), ke = { class: "flex row items-center" }, Te = { class: "text-body1 text-weight-medium" }, xe = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ V({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), D("div", {
      class: k(["flex column", e.section.cssClass])
    }, [
      $("div", ke, [
        e.section.icon ? (f(), _(a(H), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : N("", !0),
        $("div", Te, j(e.section.label), 1)
      ]),
      $("div", xe, [
        A(t.$slots, "default")
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
    return (t, n) => {
      const l = ye("q-icon");
      return f(), _(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (o) => e.reset())
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
    }, this._actionComponent = Ve, this._sectionComponent = Ne, this._wrapperResetComponent = Oe, this._associationDisplayDictonary = {};
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
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, l = t.formStyleConfig, o = n.rulesBehaviour === "lazy";
    return console.log(e.wrapper.field.componentOptions.regularFieldType), (u, s) => (f(), _(a(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
        s[1] || (s[1] = (m) => e.wrapper.modelValueOnUpdate(m))
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
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": o,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Be = { class: "row items-center justify-end" }, qe = /* @__PURE__ */ V({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, l = t.formStyleConfig, o = n.rulesBehaviour === "lazy", u = C();
    function s() {
      u.value && u.value.hide();
    }
    return (m, c) => (f(), _(a(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        c[2] || (c[2] = (i) => e.wrapper.modelValue = i),
        c[3] || (c[3] = (i) => e.wrapper.modelValueOnUpdate(i))
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
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": o,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: S(() => [
        w(a(H), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            w(a(X), {
              ref_key: "popupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                w(a(oe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    c[0] || (c[0] = (i) => e.wrapper.modelValue = i),
                    c[1] || (c[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: S(() => [
                    $("div", Be, [
                      w(a(I), {
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
}), $e = { class: "row items-center justify-end" }, Re = { class: "row items-center justify-end" }, Ee = /* @__PURE__ */ V({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, l = t.formStyleConfig, o = n.rulesBehaviour === "lazy", u = C(), s = C();
    function m() {
      u.value && u.value.hide();
    }
    function c() {
      s.value && s.value.hide();
    }
    return (i, d) => (f(), _(a(Z), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[4] || (d[4] = (p) => e.wrapper.modelValue = p),
        d[5] || (d[5] = (p) => e.wrapper.modelValueOnUpdate(p))
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
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": o,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: S(() => [
        w(a(H), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            w(a(X), {
              ref_key: "datePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                w(a(oe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (p) => e.wrapper.modelValue = p),
                    d[1] || (d[1] = (p) => e.wrapper.modelValueOnUpdate(p))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: S(() => [
                    $("div", $e, [
                      w(a(I), {
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
        w(a(H), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: S(() => [
            w(a(X), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: S(() => [
                w(a(we), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    d[2] || (d[2] = (p) => e.wrapper.modelValue = p),
                    d[3] || (d[3] = (p) => e.wrapper.modelValueOnUpdate(p))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: S(() => [
                    $("div", Re, [
                      w(a(I), {
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
}), Ie = {
  key: 0,
  class: "q-field__bottom"
}, je = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, ze = /* @__PURE__ */ V({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function o(u) {
      e.wrapper.modelValueOnUpdate(u);
    }
    return he(() => e.wrapper.modelValue, () => {
      t.value = e.wrapper.validate();
    }), (u, s) => (f(), D(z, null, [
      w(a(Ce), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          s[0] || (s[0] = (m) => e.wrapper.modelValue = m),
          s[1] || (s[1] = (m) => o(m))
        ],
        label: e.wrapper.field.label,
        dense: a(l).fieldDense,
        color: a(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: k(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), D("div", Ie, j(e.wrapper.field.hint), 1)) : N("", !0),
      t.value !== !0 ? (f(), D("div", je, j(t.value), 1)) : N("", !0)
    ], 64));
  }
}), Ue = /* @__PURE__ */ V({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyleConfig, n.rulesBehaviour, (l, o) => " TODO json edit ? ";
  }
}), Le = /* @__PURE__ */ V({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C([]), n = C([]), l = e.wrapper.injectForm.getFormFactoryInstance(), o = l.formSettings, u = l.formStyleConfig, s = o.rulesBehaviour === "lazy";
    function m(i, d) {
      if (i === "") {
        d(() => {
          n.value = [...t.value];
        });
        return;
      }
      d(() => {
        const p = i.toLowerCase();
        n.value = t.value.filter((g) => g.label.toLowerCase().includes(p));
      });
    }
    function c(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), n.value = i.field.selectOptions ?? [];
    }
    return L(() => {
      c(e.wrapper);
    }), (i, d) => (f(), _(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (p) => e.wrapper.modelValue = p),
        d[1] || (d[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(u).fieldOutlined,
      filled: a(u).fieldFilled,
      standout: a(u).fieldStandout,
      borderless: a(u).fieldBorderless,
      rounded: a(u).fieldRounded,
      square: a(u).fieldSquare,
      dense: a(u).fieldDense,
      hideBottomSpace: a(u).fieldHideBottomSpace,
      color: a(u).fieldColor,
      bgColor: a(u).fieldBgColor,
      class: k(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: m
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Pe(r) {
  return Symbol(r);
}
function Q() {
  return 20;
}
const Ge = /* @__PURE__ */ V({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), l = n.formSettings, o = n.formStyleConfig, u = l.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(d, p) {
      const g = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), p(() => {
        g({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          s.value = O.rows;
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
    }), (d, p) => (f(), _(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        p[0] || (p[0] = (g) => e.wrapper.modelValue = g),
        p[1] || (p[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
        a(t) ? (f(), _(a(le), re(ae({ key: 0 }, g.itemProps)), {
          default: S(() => [
            w(a(se), null, {
              default: S(() => [
                w(a(ie), null, {
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
        }, 1040)) : (f(), _(U(a(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Ae = /* @__PURE__ */ V({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), l = n.formSettings, o = n.formStyleConfig, u = l.rulesBehaviour === "lazy", s = C([]), m = C({
      limit: Q(),
      offset: 0
    });
    function c(d, p) {
      const g = e.wrapper.injectForm.getAssociationDataCallback();
      d === "" && (m.value = {
        limit: Q(),
        offset: 0
      }), p(() => {
        g({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: m.value.limit,
          offset: m.value.offset,
          labelFilter: d,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          s.value = O.rows;
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
    }), (d, p) => (f(), _(a(M), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        p[0] || (p[0] = (g) => e.wrapper.modelValue = g),
        p[1] || (p[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
        a(t) ? (f(), _(a(le), re(ae({ key: 0 }, g.itemProps)), {
          default: S(() => [
            w(a(se), null, {
              default: S(() => [
                w(a(ie), null, {
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
        }, 1040)) : (f(), _(U(a(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
class ee {
  constructor(e, t, n, l, o, u, s) {
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
      ...n
    }, this.actionComponent = l ?? x.getGlobalActionComponent(), this.sectionComponent = o ?? x.getGlobalSectionComponent(), this.wrapperResetComponent = u ?? x.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = s ?? x.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: K,
      text: K,
      number: K,
      date: qe,
      datetime: Ee,
      selectString: Le,
      selectBelongsTo: Ge,
      selectHasMany: Ae,
      checkbox: ze,
      object: Ue
    }[e];
  }
  getForm(e, t, n) {
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
        }, p = {
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
        s.push(p);
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
      context: n
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
function He(r, e, t) {
  const n = t.getFormFactoryInstance().formSettings, l = t.getForm(), o = (c, i, d) => c[i] ? d ? () => u(c[i]) : () => c[i] : c.compare_to ? () => t.getFieldDataByFieldName(c.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", u = (c) => String(
    h.formatDate(
      h.extractDate(c, l.backendDateFormat),
      n.dateFormat
    )
  ), s = [], m = [];
  switch (e) {
    case "date":
      s.push(Ct(n.dateFormat));
  }
  return r.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        s.push(Qe());
        break;
      case "absence":
        s.push(We());
        break;
      case "acceptance":
        s.push(Ke());
        break;
      case "inclusion":
        s.push(ue(i.including));
        break;
      case "exclusion":
        s.push(Ye(i.excluding));
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
        s.push(Ze());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          Me(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          et(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          tt(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          rt(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          at(o(i, "equal_to"))
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
        s.push(ot());
        break;
      case "numberNumericOnly":
        s.push(lt());
        break;
      case "numberEvenOnly":
        s.push(st());
        break;
      case "numberOddOnly":
        s.push(it());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          ut(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          ct(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          pt(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          dt(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          gt(
            o(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          ft(o(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          mt(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          bt(
            o(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          yt(
            o(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          ht(
            o(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          St(
            o(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          Ft(
            o(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          _t(
            o(i, "equal_to", !0),
            n.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          wt(
            o(i, "other_than", !0),
            n.dateFormat
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((c) => {
    switch (c) {
      case "allowBlank":
        return Xe(s);
      case "allowNull":
        return Je(s);
    }
  }) : s;
}
function Qe() {
  return (r) => !!r || "Ce champ est requis";
}
function ue(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ye(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ue.toString()}`
  );
}
function We() {
  return (r) => !r || "Ce champ doit être vide";
}
function Ke() {
  return (r) => !!r || "Doit être accepté";
}
function Je(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Xe(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Ze() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function Me(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function et(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function tt(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function rt(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function at(r, e) {
  return (t) => {
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function nt(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function ot() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function lt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function st() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function it() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function ut(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ct(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function pt(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function dt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function mt(r, e) {
  return (t) => {
    const n = r(), l = e();
    return String(t).length >= n && String(t).length <= l || `Entre ${n} et ${l}`;
  };
}
function ft(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function gt(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function bt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function yt(r, e) {
  return (t) => {
    const n = r(), l = h.extractDate(String(t), e), o = h.extractDate(n, e);
    return !Number.isNaN(l.getTime()) && l <= o || `Inf. ou égal à ${n}`;
  };
}
function ht(r, e) {
  return (t) => {
    const n = r(), l = h.extractDate(String(t), e), o = h.extractDate(n, e);
    return !Number.isNaN(l.getTime()) && l < o || `Inf. à ${n}`;
  };
}
function St(r, e) {
  return (t) => {
    const n = r(), l = h.extractDate(String(t), e), o = h.extractDate(n, e);
    return !Number.isNaN(l.getTime()) && l >= o || `Sup. ou égal à ${n}`;
  };
}
function Ft(r, e) {
  return (t) => {
    const n = r(), l = h.extractDate(String(t), e), o = h.extractDate(n, e);
    return !Number.isNaN(l.getTime()) && l > o || `Sup. à ${n}`;
  };
}
function _t(r, e) {
  return (t) => {
    const n = r(), l = h.extractDate(String(t), e), o = h.extractDate(n, e);
    return l === o || `Égale à ${l}`;
  };
}
function wt(r, e) {
  return (t) => {
    const n = r();
    return h.extractDate(String(t), e) !== h.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function Ct(r) {
  return (e) => !Number.isNaN(h.extractDate(String(e), r).getTime()) || "Date invalide";
}
const vt = {
  computeServerRules: He
}, Dt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, Vt = ["index"], te = /* @__PURE__ */ V({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r, n = Se(t.field.provideUniqKey), l = d(), o = C(), u = C([]);
    function s() {
      n && (o.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), o.value = m(o.value));
    }
    function m(y) {
      switch (t.field.type) {
        case "date":
          return h.formatDate(
            h.extractDate(
              String(y),
              n.getForm().backendDateFormat
            ),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return h.formatDate(
            h.extractDate(
              String(y),
              n.getForm().backendDatetimeFormat
            ),
            n.getFormFactoryInstance().formSettings.datetimeFormat
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
              n.getFormFactoryInstance().formSettings.dateFormat
            ),
            n.getForm().backendDateFormat
          );
        case "datetime":
          return h.formatDate(
            h.extractDate(
              String(y),
              n.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            n.getForm().backendDatetimeFormat
          );
      }
      return y;
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
        case "datetime":
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
      return vt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function p(y) {
      o.value = y;
    }
    function g() {
      return c(a(o));
    }
    function O(y) {
      u.value = y;
    }
    function R() {
      let y = !0;
      return l.forEach((B) => {
        const E = B(g());
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
      setupBackendErrors: O
    }), L(() => {
      var B;
      s();
      const y = (B = Fe()) == null ? void 0 : B.exposed;
      y && n && n.registerRef(
        t.field.metadata.field_name,
        y
      );
    }), (y, B) => (f(), D("div", null, [
      A(y.$slots, "default", {
        propsWrapper: { modelValue: o.value, modelValueOnUpdate: p, field: y.field, injectForm: a(n), rules: a(l), reset: s, clear: i, getValue: g, validate: R }
      }, () => [
        (f(), _(U(t.field.component), {
          wrapper: { modelValue: o.value, modelValueOnUpdate: p, field: y.field, injectForm: a(n), rules: a(l), reset: s, clear: i, getValue: g, validate: R }
        }, null, 8, ["wrapper"])),
        u.value.length > 0 ? (f(), D("div", Dt, [
          (f(!0), D(z, null, J(u.value, (E, W) => (f(), D("div", {
            index: W,
            class: "flex column"
          }, j(E), 9, Vt))), 256))
        ])) : N("", !0)
      ])
    ]));
  }
}), kt = {
  key: 0,
  class: "flex column"
}, Ot = /* @__PURE__ */ V({
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
    let n = null;
    const l = Object.freeze(
      new ee(t.resourceName, t.formSettings)
    ), o = Pe(ve()), u = C({}), s = C(), m = C(!1), c = C(!1), i = C("create");
    async function d() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = Object.freeze(
        l.getForm(
          n,
          o,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), m.value = !0;
    }
    async function p() {
      var q, P;
      if (!O())
        return;
      c.value = !0, B();
      const b = g(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      F.success ? (i.value === "create" && (i.value = "edit"), n && F.resource_data && (n.resource_data = F.resource_data), R(), (P = t.onSubmitSuccess) == null || P.call(t)) : (Object.entries(u.value).forEach((T) => {
        const G = F.errors[T[0]];
        G && T[1].setupBackendErrors(G);
      }), (q = t.onSubmitFail) == null || q.call(t)), c.value = !1;
    }
    function g() {
      const b = {};
      return Object.entries(u.value).forEach((F) => {
        b[F[0]] = F[1].getValue();
      }), b;
    }
    function O() {
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
    function B() {
      Object.values(u.value).forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function E(b, F) {
      u.value[b] = F;
    }
    function W(b) {
      if (n)
        return n.resource_data[b];
    }
    function ce(b) {
      const F = Object.entries(u.value).find((q) => q[0] === b);
      return F ? F[1].getValue() : null;
    }
    function pe() {
      return l;
    }
    function de() {
      return s.value;
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
    return _e(o, {
      registerRef: E,
      getDefaultDataByFieldName: W,
      getFieldDataByFieldName: ce,
      getFormFactoryInstance: pe,
      getForm: de,
      getAssociationDataCallback: me
    }), e({}), L(async () => {
      fe(), await d();
    }), (b, F) => m.value && s.value ? (f(), D("div", kt, [
      $("div", {
        class: k(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), D(z, null, J(s.value.sections, (q, P) => (f(), _(U(a(l).sectionComponent), {
          key: P,
          section: q
        }, {
          default: S(() => [
            (f(!0), D(z, null, J(q.fields, (T) => (f(), D(z, {
              key: T.metadata.field_name
            }, [
              b.$slots[T.metadata.field_name] ? (f(), _(te, {
                key: 1,
                field: T
              }, {
                default: S(({ propsWrapper: G }) => [
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
      (f(), _(U(a(l).actionComponent), {
        isLoadingSubmit: c.value,
        submit: p,
        clear: s.value.clearable ? y : void 0,
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
  Ot as Submit64Form
};
