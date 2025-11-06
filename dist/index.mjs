var me = Object.defineProperty;
var fe = (r, e, t) => e in r ? me(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var k = (r, e, t) => fe(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as T, openBlock as f, createVNode as x, createBlock as D, createCommentVNode as I, unref as a, normalizeClass as R, createElementVNode as j, toDisplayString as G, renderSlot as K, resolveComponent as ge, normalizeProps as be, guardReactiveProps as ye, withCtx as V, createTextVNode as he, ref as _, onMounted as q, watch as Se, Fragment as L, resolveDynamicComponent as P, nextTick as ae, inject as _e, getCurrentInstance as we, renderList as te, provide as Fe } from "vue";
import { QBtn as U, QIcon as J, QItem as ve, QItemSection as Ce, QItemLabel as De, QInput as Z, QPopupProxy as re, QDate as ue, QTime as Ve, QCheckbox as ke, QSelect as ne, date as S, uid as xe } from "quasar";
const Be = { class: "flex row items-center no-wrap q-pt-sm" }, Te = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), T("div", Be, [
      x(a(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: o[0] || (o[0] = (l) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), D(a(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: o[1] || (o[1] = (l) => e.reset())
      }, null, 8, ["loading"])) : I("", !0),
      e.clear ? (f(), D(a(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: o[2] || (o[2] = (l) => e.clear())
      }, null, 8, ["loading"])) : I("", !0)
    ]));
  }
}), Re = { class: "flex row items-center" }, qe = { class: "text-body1 text-weight-medium" }, Oe = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (f(), T("div", {
      class: R(["flex column", e.section.cssClass])
    }, [
      j("div", Re, [
        e.section.icon ? (f(), D(a(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : I("", !0),
        j("div", qe, G(e.section.label), 1)
      ]),
      j("div", Oe, [
        K(t.$slots, "default")
      ])
    ], 2));
  }
}), $e = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const l = ge("q-icon");
      return f(), D(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (s) => e.reset())
      });
    };
  }
}), Ee = /* @__PURE__ */ B({
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
    return (t, o) => (f(), D(a(ve), be(ye(e.itemProps)), {
      default: V(() => [
        x(a(Ce), null, {
          default: V(() => [
            x(a(De), null, {
              default: V(() => [
                he(G(e.opt.label), 1)
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
    }, this._actionComponent = Te, this._sectionComponent = Ne, this._wrapperResetComponent = $e, this._associationDisplayComponent = Ee, this._associationDisplayDictonary = {};
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
let N = X;
const Ie = { class: "row items-center justify-end" }, ze = /* @__PURE__ */ B({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _(), n = _();
    function d() {
      c.value && c.value.hide();
    }
    function u() {
      return n.value ? n.value.validate() : !1;
    }
    function i() {
      n.value && n.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(u, i);
    }), (h, y) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: n,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        y[2] || (y[2] = (w) => e.wrapper.modelValue = w),
        y[3] || (y[3] = (w) => e.wrapper.modelValueOnUpdate(w))
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        x(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            x(a(re), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                x(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    y[0] || (y[0] = (w) => e.wrapper.modelValue = w),
                    y[1] || (y[1] = (w) => e.wrapper.modelValueOnUpdate(w))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    j("div", Ie, [
                      x(a(U), {
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
}), je = { class: "row items-center justify-end" }, Ue = { class: "row items-center justify-end" }, Le = /* @__PURE__ */ B({
  __name: "DateTimeField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _(), n = _(), d = _();
    function u() {
      c.value && c.value.hide();
    }
    function i() {
      n.value && n.value.hide();
    }
    function h() {
      return d.value ? d.value.validate() : !1;
    }
    function y() {
      d.value && d.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(h, y);
    }), (w, g) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: d,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[4] || (g[4] = (p) => e.wrapper.modelValue = p),
        g[5] || (g[5] = (p) => e.wrapper.modelValueOnUpdate(p))
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: V(() => [
        x(a(J), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            x(a(re), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                x(a(ue), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[0] || (g[0] = (p) => e.wrapper.modelValue = p),
                    g[1] || (g[1] = (p) => e.wrapper.modelValueOnUpdate(p))
                  ],
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    j("div", je, [
                      x(a(U), {
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
        x(a(J), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            x(a(re), {
              ref_key: "timePopupProxyRef",
              ref: n,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                x(a(Ve), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    g[2] || (g[2] = (p) => e.wrapper.modelValue = p),
                    g[3] || (g[3] = (p) => e.wrapper.modelValueOnUpdate(p))
                  ],
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    j("div", Ue, [
                      x(a(U), {
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
}, Pe = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ae = /* @__PURE__ */ B({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _(!0), l = e.wrapper.injectForm.getFormFactoryInstance().formStyle;
    function s() {
      return t.value === !0;
    }
    function c() {
      t.value = !0;
    }
    return Se(
      () => e.wrapper.modelValue,
      (n) => {
        for (const d of e.wrapper.rules)
          if (t.value = d(n), t.value !== !0)
            break;
      }
    ), q(() => {
      e.wrapper.registerBehaviourCallbacks(s, c);
    }), (n, d) => (f(), T(L, null, [
      x(a(ke), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (u) => e.wrapper.modelValue = u),
          d[1] || (d[1] = (u) => e.wrapper.modelValueOnUpdate(u))
        ],
        label: e.wrapper.field.label,
        dense: a(l).fieldDense,
        color: a(l).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: R(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (f(), T("div", Ge, G(e.wrapper.field.hint), 1)) : I("", !0),
      t.value !== !0 ? (f(), T("div", Pe, G(t.value), 1)) : I("", !0)
    ], 64));
  }
}), He = /* @__PURE__ */ B({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (l, s) => " TODO json edit ? ";
  }
}), Qe = /* @__PURE__ */ B({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = _([]), o = _([]), l = _(), s = e.wrapper.injectForm.getFormFactoryInstance(), c = s.formSettings, n = s.formStyle, d = c.rulesBehaviour === "lazy";
    function u(w, g) {
      if (w === "") {
        g(() => {
          o.value = [...t.value];
        });
        return;
      }
      g(() => {
        const p = w.toLowerCase();
        o.value = t.value.filter((F) => F.label.toLowerCase().includes(p));
      });
    }
    function i(w) {
      t.value = Object.freeze(w.field.selectOptions ?? []), o.value = w.field.selectOptions ?? [];
    }
    function h() {
      return l.value ? l.value.validate() : !1;
    }
    function y() {
      l.value && l.value.resetValidation();
    }
    return q(() => {
      i(e.wrapper), e.wrapper.registerBehaviourCallbacks(h, y);
    }), (w, g) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: l,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (p) => e.wrapper.modelValue = p),
        g[1] || (g[1] = (p) => e.wrapper.modelValueOnUpdate(p))
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
      class: R(e.wrapper.field.cssClass),
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
function Ye(r) {
  return Symbol(r);
}
function M() {
  return 20;
}
const We = /* @__PURE__ */ B({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = _([]), d = _({
      limit: M(),
      offset: 0
    }), u = _();
    function i(p, F) {
      const v = e.wrapper.injectForm.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: M(),
        offset: 0
      }), F(() => {
        v({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          n.value = O.rows;
        }).catch(() => {
          n.value = [];
        });
      });
    }
    function h() {
      const p = e.wrapper.getValueSerialized();
      p && ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: p
          }
        ];
      });
    }
    function y() {
      return u.value ? u.value.validate() : !1;
    }
    function w() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [
        {
          label: "",
          value: void 0
        }
      ];
    }
    return q(() => {
      h(), e.wrapper.registerBehaviourCallbacks(y, w);
    }), (p, F) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        F[0] || (F[0] = (v) => e.wrapper.modelValue = v),
        F[1] || (F[1] = (v) => e.wrapper.modelValueOnUpdate(v))
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": c,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: g,
      onFilter: i
    }, {
      options: V((v) => [
        (f(), D(P(a(t)), { scope: v }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options"]));
  }
}), Ke = /* @__PURE__ */ B({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, o = e.wrapper.injectForm.getFormFactoryInstance(), l = o.formSettings, s = o.formStyle, c = l.rulesBehaviour === "lazy", n = _([]), d = _({
      limit: M(),
      offset: 0
    }), u = _();
    function i(p, F) {
      const v = e.wrapper.injectForm.getAssociationDataCallback();
      p === "" && (d.value = {
        limit: M(),
        offset: 0
      }), F(() => {
        v({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: p,
          context: e.wrapper.injectForm.getForm().context
        }).then((O) => {
          n.value = O.rows;
        }).catch(() => {
          n.value = [];
        });
      });
    }
    function h() {
      const p = e.wrapper.getValueSerialized();
      p && ae(() => {
        n.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? "???",
            value: p
          }
        ];
      });
    }
    function y() {
      return u.value ? u.value.validate() : !1;
    }
    function w() {
      u.value && u.value.resetValidation();
    }
    function g() {
      e.wrapper.clear(), n.value = [];
    }
    return q(() => {
      h(), e.wrapper.registerBehaviourCallbacks(y, w);
    }), (p, F) => (f(), D(a(ne), {
      ref_key: "fieldRef",
      ref: u,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        F[0] || (F[0] = (v) => e.wrapper.modelValue = v),
        F[1] || (F[1] = (v) => e.wrapper.modelValueOnUpdate(v))
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
      class: R(e.wrapper.field.cssClass),
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
      onClear: g,
      onFilter: i
    }, {
      options: V((v) => [
        (f(), D(P(a(t)), { scope: v }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options"]));
  }
}), le = /* @__PURE__ */ B({
  __name: "StringField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (h) => e.wrapper.modelValue = h),
        i[1] || (i[1] = (h) => e.wrapper.modelValueOnUpdate(h))
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
      class: R(e.wrapper.field.cssClass),
      "lazy-rules": s,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Je = /* @__PURE__ */ B({
  __name: "NumberField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), o = t.formSettings, l = t.formStyle, s = o.rulesBehaviour === "lazy", c = _();
    function n() {
      return c.value ? c.value.validate() : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return q(() => {
      e.wrapper.registerBehaviourCallbacks(n, d);
    }), (u, i) => (f(), D(a(Z), {
      ref_key: "fieldRef",
      ref: c,
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        i[0] || (i[0] = (h) => e.wrapper.modelValue = h),
        i[1] || (i[1] = (h) => e.wrapper.modelValueOnUpdate(h))
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
      class: R(e.wrapper.field.cssClass),
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
      ...N.getGlobalFormSetting()
    }, this.formStyle = {
      ...o,
      ...N.getGlobalFormStyle()
    }, this.actionComponent = l ?? N.getGlobalActionComponent(), this.sectionComponent = s ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n ?? N.getGlobalAssociationDisplayComponent(), this.associationDisplayRecord = d ?? N.getGlobalAssociationDisplayRecord();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: le,
      text: le,
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
  getForm(e, t, o) {
    const l = [];
    return e.form.sections.forEach((c) => {
      const n = [];
      c.fields.forEach((u) => {
        const i = oe.getFieldComponentByFormFieldType(
          u.field_type
        ), h = {
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
          componentOptions: h
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
  const o = t.getFormFactoryInstance().formSettings, l = t.getForm(), s = (u, i, h) => u[i] ? h ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    S.formatDate(
      S.extractDate(u, l.backendDateFormat),
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
        n.push(Xe());
        break;
      case "absence":
        n.push(et());
        break;
      case "acceptance":
        n.push(tt());
        break;
      case "inclusion":
        n.push(ce(i.including));
        break;
      case "exclusion":
        n.push(Ze(i.excluding));
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
        n.push(nt());
        break;
      case "lessThanOrEqualNumber":
        n.push(
          ot(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        n.push(
          lt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        n.push(
          st(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        n.push(
          it(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        n.push(
          ut(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        n.push(
          ct(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        n.push(dt());
        break;
      case "numberNumericOnly":
        n.push(pt());
        break;
      case "numberEvenOnly":
        n.push(mt());
        break;
      case "numberOddOnly":
        n.push(ft());
        break;
      case "lessThanOrEqualStringLength":
        n.push(
          gt(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        n.push(
          bt(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        n.push(
          yt(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        n.push(
          ht(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        n.push(
          wt(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        n.push(
          _t(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        n.push(
          St(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        n.push(
          Ft(
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
          Ct(
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
          Vt(
            s(i, "greater_than", !0),
            o.dateFormat
          )
        );
        break;
      case "equalToDate":
        n.push(
          kt(
            s(i, "equal_to", !0),
            o.dateFormat
          )
        );
        break;
      case "otherThanDate":
        n.push(
          xt(
            s(i, "other_than", !0),
            o.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return at(n);
      case "allowNull":
        return rt(n);
    }
  }) : n;
}
function Xe() {
  return (r) => !!r || "Ce champ est requis";
}
function ce(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ze(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ce.toString()}`
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
    const o = r(), l = e();
    return String(t).length >= o && String(t).length <= l || `Entre ${o} et ${l}`;
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
function Ft(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function vt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l <= s || `Inf. ou égal à ${o}`;
  };
}
function Ct(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l < s || `Inf. à ${o}`;
  };
}
function Dt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l >= s || `Sup. ou égal à ${o}`;
  };
}
function Vt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l > s || `Sup. à ${o}`;
  };
}
function kt(r, e) {
  return (t) => {
    const o = r(), l = S.extractDate(String(t), e), s = S.extractDate(o, e);
    return l === s || `Égale à ${l}`;
  };
}
function xt(r, e) {
  return (t) => {
    const o = r();
    return S.extractDate(String(t), e) !== S.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function se(r) {
  return (e) => e == null || e === "" ? !0 : Bt(e, r) || `Date invalide. Format : ${r}`;
}
function Bt(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = S.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : S.formatDate(t, e) === r;
}
const Tt = {
  computeServerRules: Me
}, Rt = {
  key: 0,
  class: "q-field__bottom text-negative q-pt-none"
}, qt = ["index"], ie = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = () => !0, l = () => {
    };
    const s = _e(t.field.provideUniqKey), c = w(), n = _(), d = _([]);
    function u() {
      s && (n.value = s.getDataByFieldName(
        t.field.metadata.field_name
      ), n.value = i(n.value), ae(() => {
        A();
      }));
    }
    function i(m) {
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : S.formatDate(
            S.extractDate(String(m), s.getForm().backendDateFormat),
            s.getFormFactoryInstance().formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : S.formatDate(
            S.extractDate(
              String(m),
              s.getForm().backendDatetimeFormat
            ),
            s.getFormFactoryInstance().formSettings.datetimeFormat
          );
      }
      return m;
    }
    function h(m) {
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : S.formatDate(
            S.extractDate(
              String(m),
              s.getFormFactoryInstance().formSettings.dateFormat
            ),
            s.getForm().backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : S.formatDate(
            S.extractDate(
              String(m),
              s.getFormFactoryInstance().formSettings.datetimeFormat
            ),
            s.getForm().backendDatetimeFormat
          );
      }
      return m;
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
          n.value = void 0;
          break;
        case "selectHasMany":
          n.value = void 0;
          break;
      }
    }
    function w() {
      return Tt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        s
      );
    }
    function g(m) {
      n.value = m;
    }
    function p() {
      return n;
    }
    function F() {
      return h(a(n));
    }
    function v(m) {
      d.value = m;
    }
    function O() {
      return o();
    }
    function A() {
      return l();
    }
    function H(m, $) {
      o = m, l = $;
    }
    return e({
      reset: u,
      clear: y,
      validate: O,
      resetValidation: A,
      getValueDeserialized: F,
      getValueSerialized: p,
      setupBackendErrors: v
    }), q(() => {
      var $;
      u();
      const m = ($ = we()) == null ? void 0 : $.exposed;
      m && s && s.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, $) => (f(), T("div", null, [
      K(m.$slots, "default", {
        propsWrapper: { modelValue: n.value, modelValueOnUpdate: g, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: y, getValueDeserialized: F, getValueSerialized: p, validate: O, registerBehaviourCallbacks: H }
      }, () => [
        (f(), D(P(t.field.component), {
          wrapper: { modelValue: n.value, modelValueOnUpdate: g, field: t.field, injectForm: a(s), rules: a(c), reset: u, clear: y, getValueDeserialized: F, getValueSerialized: p, validate: O, registerBehaviourCallbacks: H }
        }, null, 8, ["wrapper"])),
        d.value.length > 0 ? (f(), T("div", Rt, [
          (f(!0), T(L, null, te(d.value, (Q, ee) => (f(), T("div", {
            index: ee,
            class: "flex column"
          }, G(Q), 9, qt))), 256))
        ])) : I("", !0)
      ])
    ]));
  }
}), Ot = {
  key: 0,
  class: "flex column"
}, It = /* @__PURE__ */ B({
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
    ), s = Ye(xe()), c = _(/* @__PURE__ */ new Map()), n = _(), d = _(!1), u = _(!1), i = _("create");
    async function h() {
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
      var z, Y;
      if (!g())
        return;
      u.value = !0, O();
      const b = w(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      C.success ? (i.value === "create" && (i.value = "edit"), o && C.resource_data && (o.resource_data = C.resource_data), p(), (Y = t.onSubmitSuccess) == null || Y.call(t)) : ([...c.value].forEach((E) => {
        const W = C.errors[E[0]];
        W && E[1].setupBackendErrors(W);
      }), (z = t.onSubmitFail) == null || z.call(t)), u.value = !1;
    }
    function w() {
      const b = {};
      return [...c.value].forEach((C) => {
        b[C[0]] = C[1].getValueDeserialized();
      }), b;
    }
    function g() {
      let b = !0;
      return c.value.forEach((C) => {
        if (!C.validate()) {
          b = !1;
          return;
        }
      }), b;
    }
    function p() {
      c.value.forEach((b) => {
        b.reset();
      });
    }
    function F() {
      c.value.forEach((b) => {
        b.clear();
      });
    }
    function v() {
      c.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function O() {
      c.value.forEach((b) => {
        b.setupBackendErrors([]);
      });
    }
    function A(b, C) {
      c.value.set(b, C);
    }
    function H(b) {
      if (o)
        return o.resource_data[b];
    }
    function m(b) {
      const C = [...c.value].find((z) => z[0] === b);
      return C ? C[1].getValue() : null;
    }
    function $() {
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
    function de() {
      [
        "getMetadataAndData",
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function pe() {
      return i.value;
    }
    return Fe(s, {
      registerRef: A,
      getDataByFieldName: H,
      getFieldDataByFieldName: m,
      getFormFactoryInstance: $,
      getForm: Q,
      getAssociationDataCallback: ee
    }), e({
      getMode: pe,
      getFormFactoryInstance: $,
      getForm: Q,
      validateForm: g,
      resetForm: p,
      clearForm: F,
      resetValidation: v,
      submitForm: y
    }), q(async () => {
      de(), await h();
    }), (b, C) => d.value && n.value ? (f(), T("div", Ot, [
      j("div", {
        class: R(n.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), T(L, null, te(n.value.sections, (z, Y) => (f(), D(P(a(l).sectionComponent), {
          key: Y,
          section: z
        }, {
          default: V(() => [
            (f(!0), T(L, null, te(z.fields, (E) => (f(), T(L, {
              key: E.metadata.field_name
            }, [
              b.$slots[E.metadata.field_name] ? (f(), D(ie, {
                key: 1,
                field: E
              }, {
                default: V(({ propsWrapper: W }) => [
                  K(b.$slots, E.metadata.field_name, { propsWrapper: W })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), D(ie, {
                key: 0,
                field: E
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), D(P(a(l).actionComponent), {
        isLoadingSubmit: u.value,
        submit: y,
        clear: n.value.clearable ? F : void 0,
        reset: n.value.resetable ? p : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? K(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: n.value }
      }) : I("", !0)
    ])) : I("", !0);
  }
});
export {
  N as Submit64,
  It as Submit64Form
};
