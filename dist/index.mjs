var pe = Object.defineProperty;
var me = (r, e, t) => e in r ? pe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var F = (r, e, t) => me(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as v, createElementBlock as D, openBlock as f, createVNode as k, createBlock as S, createCommentVNode as B, unref as a, normalizeClass as x, createElementVNode as R, toDisplayString as E, renderSlot as A, resolveComponent as fe, ref as C, withCtx as w, Fragment as G, onMounted as j, normalizeProps as Z, mergeProps as M, createTextVNode as W, resolveDynamicComponent as I, inject as ge, getCurrentInstance as be, provide as he, renderList as J } from "vue";
import { QBtn as U, QIcon as ee, QInput as te, QPopupProxy as ye, QDate as Se, QCheckbox as _e, QSelect as Y, QItem as re, QItemSection as ne, QItemLabel as oe, date as _, uid as Fe } from "quasar";
const Ce = { class: "flex row items-center no-wrap q-pt-sm" }, we = /* @__PURE__ */ v({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), D("div", Ce, [
      k(a(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: n[0] || (n[0] = (s) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), S(a(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: n[1] || (n[1] = (s) => e.reset())
      }, null, 8, ["loading"])) : B("", !0),
      e.clear ? (f(), S(a(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: n[2] || (n[2] = (s) => e.clear())
      }, null, 8, ["loading"])) : B("", !0)
    ]));
  }
}), ve = { class: "flex row items-center" }, De = { class: "text-body1 text-weight-medium" }, ke = { class: "flex column q-gutter-sm" }, Ve = /* @__PURE__ */ v({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (f(), D("div", {
      class: x(["flex column", e.section.cssClass])
    }, [
      R("div", ve, [
        e.section.icon ? (f(), S(a(ee), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : B("", !0),
        R("div", De, E(e.section.label), 1)
      ]),
      R("div", ke, [
        A(t.$slots, "default")
      ])
    ], 2));
  }
}), Te = /* @__PURE__ */ v({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => {
      const s = fe("q-icon");
      return f(), S(s, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (o) => e.reset())
      });
    };
  }
}), P = class P {
  constructor() {
    F(this, "_formSettings");
    F(this, "_formStyleConfig");
    F(this, "_actionComponent");
    F(this, "_sectionComponent");
    F(this, "_wrapperResetComponent");
    F(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = we, this._sectionComponent = Ve, this._wrapperResetComponent = Te, this._associationDisplayDictonary = {};
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
F(P, "_instance", new P());
let N = P;
const Q = /* @__PURE__ */ v({
  __name: "RegularField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, o = n.rulesBehaviour === "lazy";
    return (c, l) => (f(), S(a(te), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        l[0] || (l[0] = (p) => e.wrapper.modelValue = p),
        l[1] || (l[1] = (p) => e.wrapper.modelValueOnUpdate(p))
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
      "lazy-rules": o,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), Ne = { class: "row items-center justify-end" }, xe = /* @__PURE__ */ v({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, o = n.rulesBehaviour === "lazy", c = C();
    function l() {
      c.value && c.value.hide();
    }
    return (p, u) => (f(), S(a(te), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[2] || (u[2] = (i) => e.wrapper.modelValue = i),
        u[3] || (u[3] = (i) => e.wrapper.modelValueOnUpdate(i))
      ],
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
      "lazy-rules": o,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        k(a(ee), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            k(a(ye), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                k(a(Se), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    u[0] || (u[0] = (i) => e.wrapper.modelValue = i),
                    u[1] || (u[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: w(() => [
                    R("div", Ne, [
                      k(a(U), {
                        onClick: l,
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
}), Oe = {
  key: 0,
  class: "q-field__bottom"
}, qe = {
  key: 1,
  class: "q-field__error q-field__bottom"
}, Be = /* @__PURE__ */ v({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C(!0), s = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function o(c) {
      e.wrapper.modelValueOnUpdate(c), t.value = e.wrapper.validate();
    }
    return (c, l) => (f(), D(G, null, [
      k(a(_e), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          l[0] || (l[0] = (p) => e.wrapper.modelValue = p),
          l[1] || (l[1] = (p) => o(p))
        ],
        label: e.wrapper.field.label,
        dense: a(s).fieldDense,
        color: a(s).fieldColor,
        class: x(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "class"]),
      e.wrapper.field.hint ? (f(), D("div", Oe, E(e.wrapper.field.hint), 1)) : B("", !0),
      t.value !== !0 ? (f(), D("div", qe, E(t.value), 1)) : B("", !0)
    ], 64));
  }
}), $e = /* @__PURE__ */ v({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyleConfig, n.rulesBehaviour, (s, o) => " TODO json edit ? ";
  }
}), Re = /* @__PURE__ */ v({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C([]), n = C([]), s = e.wrapper.injectForm.getFormFactoryInstance(), o = s.formSettings, c = s.formStyleConfig, l = o.rulesBehaviour === "lazy";
    function p(i, d) {
      if (i === "") {
        d(() => {
          n.value = [...t.value];
        });
        return;
      }
      d(() => {
        const m = i.toLowerCase();
        n.value = t.value.filter((g) => g.label.toLowerCase().includes(m));
      });
    }
    function u(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), n.value = i.field.selectOptions ?? [];
    }
    return j(() => {
      u(e.wrapper);
    }), (i, d) => (f(), S(a(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (m) => e.wrapper.modelValue = m),
        d[1] || (d[1] = (m) => e.wrapper.modelValueOnUpdate(m))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: a(c).fieldOutlined,
      filled: a(c).fieldFilled,
      standout: a(c).fieldStandout,
      borderless: a(c).fieldBorderless,
      rounded: a(c).fieldRounded,
      square: a(c).fieldSquare,
      dense: a(c).fieldDense,
      hideBottomSpace: a(c).fieldHideBottomSpace,
      color: a(c).fieldColor,
      bgColor: a(c).fieldBgColor,
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": l,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: p
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function Ee(r) {
  return Symbol(r);
}
function H() {
  return 20;
}
const Ie = /* @__PURE__ */ v({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, o = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = C([]), p = C({
      limit: H(),
      offset: 0
    });
    function u(d) {
      return (m, g) => {
        const V = d.injectForm.getAssociationDataCallback();
        m === "" && (p.value = {
          limit: H(),
          offset: 0
        }), g(() => {
          V({
            resourceName: d.injectForm.getForm().resourceName,
            associationName: d.field.metadata.field_association_name,
            limit: p.value.limit,
            offset: p.value.offset,
            labelFilter: m,
            context: d.injectForm.getForm().context
          }).then((b) => {
            l.value = b.rows;
          });
        });
      };
    }
    function i(d) {
      setTimeout(() => {
        l.value = [
          {
            label: d.field.defaultDisplayValue ?? String(d.getValue()),
            value: d.getValue()
          }
        ];
      }, 0);
    }
    return j(() => {
      i(e.wrapper);
    }), (d, m) => (f(), S(a(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
        m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": c,
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
      options: w((g) => [
        a(t) ? (f(), S(a(re), Z(M({ key: 0 }, g.itemProps)), {
          default: w(() => [
            k(a(ne), null, {
              default: w(() => [
                k(a(oe), null, {
                  default: w(() => [
                    W(E(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), S(I(a(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), je = /* @__PURE__ */ v({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, o = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = C([]), p = C({
      limit: H(),
      offset: 0
    });
    function u(d) {
      return (m, g) => {
        const V = d.injectForm.getAssociationDataCallback();
        m === "" && (p.value = {
          limit: H(),
          offset: 0
        }), g(() => {
          V({
            resourceName: d.injectForm.getForm().resourceName,
            associationName: d.field.metadata.field_association_name,
            limit: p.value.limit,
            offset: p.value.offset,
            labelFilter: m,
            context: d.injectForm.getForm().context
          }).then((b) => {
            l.value = b.rows;
          });
        });
      };
    }
    function i(d) {
      setTimeout(() => {
        l.value = [
          {
            label: d.field.defaultDisplayValue ?? String(d.getValue()),
            value: d.getValue()
          }
        ];
      }, 0);
    }
    return j(() => {
      i(e.wrapper);
    }), (d, m) => (f(), S(a(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
        m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
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
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": c,
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
      options: w((g) => [
        a(t) ? (f(), S(a(re), Z(M({ key: 0 }, g.itemProps)), {
          default: w(() => [
            k(a(ne), null, {
              default: w(() => [
                k(a(oe), null, {
                  default: w(() => [
                    W(E(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), S(I(a(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
class K {
  constructor(e, t, n, s, o, c, l) {
    F(this, "resourceName");
    F(this, "formSettings");
    F(this, "formStyleConfig");
    F(this, "actionComponent");
    F(this, "sectionComponent");
    F(this, "wrapperResetComponent");
    F(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...N.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...N.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = s ?? N.getGlobalActionComponent(), this.sectionComponent = o ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? N.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Q,
      text: Q,
      number: Q,
      date: xe,
      selectString: Re,
      selectBelongsTo: Ie,
      selectHasMany: je,
      checkbox: Be,
      object: $e
    }[e];
  }
  getForm(e, t, n) {
    const s = [];
    return e.form.sections.forEach((c) => {
      const l = [];
      c.fields.forEach((u) => {
        const i = K.getFieldComponentByFormFieldType(
          u.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(
            e.form.resource_name
          ),
          regularFieldType: this.getRegularFieldTypeByFieldType(
            u.field_type
          )
        }, m = {
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
          componentOptions: d
        };
        l.push(m);
      });
      const p = {
        label: c.label,
        icon: c.icon,
        cssClass: c.css_class,
        fields: l
      };
      s.push(p);
    }), {
      sections: s,
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
function Le(r, e, t) {
  const n = t.getFormFactoryInstance().formSettings, s = t.getForm(), o = (u, i, d) => u[i] ? d ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    _.formatDate(
      _.extractDate(u, s.backendDateFormat),
      n.dateFormat
    )
  ), l = [], p = [];
  switch (e) {
    case "date":
      l.push(ht(n.dateFormat));
  }
  return r.forEach((u) => {
    const i = u;
    switch (i.type) {
      case "required":
        l.push(ze());
        break;
      case "absence":
        l.push(Ue());
        break;
      case "acceptance":
        l.push(Ae());
        break;
      case "inclusion":
        l.push(ae(i.including));
        break;
      case "exclusion":
        l.push(Ge(i.excluding));
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
        l.push(Qe());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Ye(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Ke(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Je(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Xe(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ze(o(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Me(
            o(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(We());
        break;
      case "numberNumericOnly":
        l.push(et());
        break;
      case "numberEvenOnly":
        l.push(tt());
        break;
      case "numberOddOnly":
        l.push(rt());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          nt(
            o(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          ot(
            o(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          at(
            o(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          lt(
            o(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          ut(
            o(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          it(o(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          st(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          ct(
            o(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          dt(
            o(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          pt(
            o(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          mt(
            o(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          ft(
            o(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          gt(
            o(i, "equal_to", !0),
            n.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          bt(
            o(i, "other_than", !0),
            n.dateFormat
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((u) => {
    switch (u) {
      case "allowBlank":
        return Pe(l);
      case "allowNull":
        return He(l);
    }
  }) : l;
}
function ze() {
  return (r) => !!r || "Ce champ est requis";
}
function ae(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ge(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${ae.toString()}`
  );
}
function Ue() {
  return (r) => !r || "Ce champ doit être vide";
}
function Ae() {
  return (r) => !!r || "Doit être accepté";
}
function He(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Pe(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Qe() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function Ye(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Ke(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Je(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Xe(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Ze(r, e) {
  return (t) => {
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Me(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function We() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function et() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function tt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function rt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function nt(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ot(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function at(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function lt(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function st(r, e) {
  return (t) => {
    const n = r(), s = e();
    return String(t).length >= n && String(t).length <= s || `Entre ${n} et ${s}`;
  };
}
function it(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function ut(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function ct(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function dt(r, e) {
  return (t) => {
    const n = r(), s = _.extractDate(String(t), e), o = _.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s <= o || `Inf. ou égal à ${n}`;
  };
}
function pt(r, e) {
  return (t) => {
    const n = r(), s = _.extractDate(String(t), e), o = _.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s < o || `Inf. à ${n}`;
  };
}
function mt(r, e) {
  return (t) => {
    const n = r(), s = _.extractDate(String(t), e), o = _.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s >= o || `Sup. ou égal à ${n}`;
  };
}
function ft(r, e) {
  return (t) => {
    const n = r(), s = _.extractDate(String(t), e), o = _.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s > o || `Sup. à ${n}`;
  };
}
function gt(r, e) {
  return (t) => {
    const n = r(), s = _.extractDate(String(t), e), o = _.extractDate(n, e);
    return s === o || `Égale à ${s}`;
  };
}
function bt(r, e) {
  return (t) => {
    const n = r();
    return _.extractDate(String(t), e) !== _.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function ht(r) {
  return (e) => !Number.isNaN(_.extractDate(String(e), r).getTime()) || "Date invalide";
}
const yt = {
  computeServerRules: Le
}, X = /* @__PURE__ */ v({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r, n = ge(t.field.provideUniqKey), s = i(), o = C(), c = C([]);
    function l() {
      n && (o.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), o.value = p(o.value));
    }
    function p(b) {
      switch (t.field.type) {
        case "date":
          return _.formatDate(
            _.extractDate(
              String(b),
              n.getForm().backendDateFormat
            ),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return b;
    }
    function u() {
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
    function i() {
      return yt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function d(b) {
      o.value = b;
    }
    function m() {
      return a(o);
    }
    function g(b) {
      c.value = b;
    }
    function V() {
      let b = !0;
      return s.forEach((O) => {
        const $ = O(m());
        if (console.log("wrapper" + $), $ !== !0) {
          b = $;
          return;
        }
      }), b;
    }
    return e({
      reset: l,
      clear: u,
      validate: V,
      getValue: m,
      setupBackendErrors: g
    }), j(() => {
      var O;
      l();
      const b = (O = be()) == null ? void 0 : O.exposed;
      b && n && n.registerRef(
        t.field.metadata.field_name,
        b
      );
    }), (b, O) => (f(), D("div", null, [
      A(b.$slots, "default", {
        propsWrapper: { modelValue: o.value, modelValueOnUpdate: d, backendErrors: c.value, field: b.field, injectForm: a(n), rules: a(s), reset: l, clear: u, getValue: m, validate: V }
      }, () => [
        (f(), S(I(t.field.component), {
          wrapper: { modelValue: o.value, modelValueOnUpdate: d, backendErrors: c.value, field: b.field, injectForm: a(n), rules: a(s), reset: l, clear: u, getValue: m, validate: V }
        }, null, 8, ["wrapper"]))
      ])
    ]));
  }
}), St = {
  key: 0,
  class: "flex column"
}, wt = /* @__PURE__ */ v({
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
    const s = Object.freeze(
      new K(t.resourceName, t.formSettings)
    ), o = Ee(Fe()), c = C({}), l = C(), p = C(!1), u = C(!1), i = C("create");
    async function d() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        s.getForm(
          n,
          o,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), p.value = !0;
    }
    async function m() {
      var q, L;
      if (!V())
        return;
      u.value = !0;
      const h = g(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: h,
        context: t.context
      });
      y.success ? (i.value === "create" && (i.value = "edit"), n && y.resource_data && (n.resource_data = y.resource_data), b(), (L = t.onSubmitSuccess) == null || L.call(t)) : (Object.entries(c.value).forEach((T) => {
        const z = y.errors[T[0]];
        z && T[1].setupBackendErrors(z);
      }), (q = t.onSubmitFail) == null || q.call(t)), u.value = !1;
    }
    function g() {
      const h = {};
      return Object.entries(c.value).forEach((y) => {
        h[y[0]] = y[1].getValue();
      }), h;
    }
    function V() {
      let h = !0;
      return Object.values(c.value).forEach((y) => {
        if (y.validate() !== !0) {
          h = !1;
          return;
        }
      }), h;
    }
    function b() {
      Object.values(c.value).forEach((h) => {
        h.reset();
      });
    }
    function O() {
      Object.values(c.value).forEach((h) => {
        h.clear();
      });
    }
    function $(h, y) {
      c.value[h] = y;
    }
    function le(h) {
      if (n)
        return n.resource_data[h];
    }
    function se(h) {
      const y = Object.entries(c.value).find((q) => q[0] === h);
      return y ? y[1].getValue() : null;
    }
    function ie() {
      return s;
    }
    function ue() {
      return l.value;
    }
    function ce() {
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
      ].forEach((y) => {
        (t[y] === null || t[y] === void 0) && console.warn(`Missing props for <Submit64> -> ${y}`);
      });
    }
    return he(o, {
      registerRef: $,
      getDefaultDataByFieldName: le,
      getFieldDataByFieldName: se,
      getFormFactoryInstance: ie,
      getForm: ue,
      getAssociationDataCallback: ce
    }), e({}), j(async () => {
      de(), await d();
    }), (h, y) => p.value && l.value ? (f(), D("div", St, [
      R("div", {
        class: x(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), D(G, null, J(l.value.sections, (q, L) => (f(), S(I(a(s).sectionComponent), {
          key: L,
          section: q
        }, {
          default: w(() => [
            (f(!0), D(G, null, J(q.fields, (T) => (f(), D(G, {
              key: T.metadata.field_name
            }, [
              h.$slots[T.metadata.field_name] ? (f(), S(X, {
                key: 1,
                field: T
              }, {
                default: w(({ propsWrapper: z }) => [
                  A(h.$slots, T.metadata.field_name, { propsWrapper: z })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), S(X, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), S(I(a(s).actionComponent), {
        isLoadingSubmit: u.value,
        submit: m,
        clear: l.value.clearable ? O : void 0,
        reset: l.value.resetable ? b : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? A(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : B("", !0)
    ])) : B("", !0);
  }
});
export {
  N as Submit64,
  wt as Submit64Form
};
