var pe = Object.defineProperty;
var me = (r, e, t) => e in r ? pe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var F = (r, e, t) => me(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as v, createElementBlock as D, openBlock as f, createVNode as k, createBlock as _, createCommentVNode as q, unref as o, normalizeClass as x, createElementVNode as $, toDisplayString as R, renderSlot as U, resolveComponent as fe, ref as C, withCtx as w, Fragment as L, onMounted as E, normalizeProps as Z, mergeProps as M, createTextVNode as W, resolveDynamicComponent as A, inject as ge, getCurrentInstance as be, provide as he, renderList as J } from "vue";
import { QBtn as G, QIcon as ee, QInput as te, QPopupProxy as ye, QDate as Se, QCheckbox as _e, QSelect as Y, QItem as re, QItemSection as ne, QItemLabel as ae, date as S, uid as Fe } from "quasar";
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
      k(o(G), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: n[0] || (n[0] = (s) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (f(), _(o(G), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: n[1] || (n[1] = (s) => e.reset())
      }, null, 8, ["loading"])) : q("", !0),
      e.clear ? (f(), _(o(G), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: n[2] || (n[2] = (s) => e.clear())
      }, null, 8, ["loading"])) : q("", !0)
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
      $("div", ve, [
        e.section.icon ? (f(), _(o(ee), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        $("div", De, R(e.section.label), 1)
      ]),
      $("div", ke, [
        U(t.$slots, "default")
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
      return f(), _(s, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (a) => e.reset())
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
const Ne = { class: "row items-center justify-end" }, xe = /* @__PURE__ */ v({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, a = n.rulesBehaviour === "lazy", c = C();
    function l() {
      c.value && c.value.hide();
    }
    return (p, u) => (f(), _(o(te), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        u[2] || (u[2] = (i) => e.wrapper.modelValue = i),
        u[3] || (u[3] = (i) => e.wrapper.modelValueOnUpdate(i))
      ],
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: o(s).fieldOutlined,
      filled: o(s).fieldFilled,
      standout: o(s).fieldStandout,
      borderless: o(s).fieldBorderless,
      rounded: o(s).fieldRounded,
      square: o(s).fieldSquare,
      dense: o(s).fieldDense,
      hideBottomSpace: o(s).fieldHideBottomSpace,
      color: o(s).fieldColor,
      bgColor: o(s).fieldBgColor,
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": a,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: w(() => [
        k(o(ee), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: w(() => [
            k(o(ye), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: w(() => [
                k(o(Se), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    u[0] || (u[0] = (i) => e.wrapper.modelValue = i),
                    u[1] || (u[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: w(() => [
                    $("div", Ne, [
                      k(o(G), {
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
  class: "caption"
}, Be = {
  key: 1,
  class: "text-negative"
}, qe = /* @__PURE__ */ v({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C(!0), n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, a = n.formStyleConfig, c = s.rulesBehaviour === "lazy";
    function l(p) {
      e.wrapper.modelValueOnUpdate(p), c && (t.value = e.wrapper.validate());
    }
    return (p, u) => (f(), D(L, null, [
      k(o(_e), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          u[0] || (u[0] = (i) => e.wrapper.modelValue = i),
          u[1] || (u[1] = (i) => l(i))
        ],
        label: e.wrapper.field.label,
        dense: o(a).fieldDense,
        color: o(a).fieldColor,
        class: x(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "class"]),
      e.wrapper.field.hint ? (f(), D("div", Oe, R(e.wrapper.field.hint), 1)) : q("", !0),
      t.value !== !0 ? (f(), D("div", Be, R(t.value), 1)) : q("", !0)
    ], 64));
  }
});
function $e(r) {
  return Symbol(r);
}
function H() {
  return 20;
}
const Re = /* @__PURE__ */ v({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, a = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = C([]), p = C({
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
          }).then((h) => {
            l.value = h.rows;
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
    return E(() => {
      i(e.wrapper);
    }), (d, m) => (f(), _(o(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
        m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
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
        o(t) ? (f(), _(o(re), Z(M({ key: 0 }, g.itemProps)), {
          default: w(() => [
            k(o(ne), null, {
              default: w(() => [
                k(o(ae), null, {
                  default: w(() => [
                    W(R(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), _(A(o(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Ee = /* @__PURE__ */ v({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyleConfig, n.rulesBehaviour, (s, a) => " TODO json edit ? ";
  }
}), Ie = /* @__PURE__ */ v({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = C([]), n = C([]), s = e.wrapper.injectForm.getFormFactoryInstance(), a = s.formSettings, c = s.formStyleConfig, l = a.rulesBehaviour === "lazy";
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
    return E(() => {
      u(e.wrapper);
    }), (i, d) => (f(), _(o(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (m) => e.wrapper.modelValue = m),
        d[1] || (d[1] = (m) => e.wrapper.modelValueOnUpdate(m))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: o(c).fieldOutlined,
      filled: o(c).fieldFilled,
      standout: o(c).fieldStandout,
      borderless: o(c).fieldBorderless,
      rounded: o(c).fieldRounded,
      square: o(c).fieldSquare,
      dense: o(c).fieldDense,
      hideBottomSpace: o(c).fieldHideBottomSpace,
      color: o(c).fieldColor,
      bgColor: o(c).fieldBgColor,
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
}), je = /* @__PURE__ */ v({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, a = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = C([]), p = C({
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
          }).then((h) => {
            l.value = h.rows;
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
    return E(() => {
      i(e.wrapper);
    }), (d, m) => (f(), _(o(Y), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (g) => e.wrapper.modelValue = g),
        m[1] || (m[1] = (g) => e.wrapper.modelValueOnUpdate(g))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: o(a).fieldOutlined,
      filled: o(a).fieldFilled,
      standout: o(a).fieldStandout,
      borderless: o(a).fieldBorderless,
      rounded: o(a).fieldRounded,
      square: o(a).fieldSquare,
      dense: o(a).fieldDense,
      hideBottomSpace: o(a).fieldHideBottomSpace,
      color: o(a).fieldColor,
      bgColor: o(a).fieldBgColor,
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
        o(t) ? (f(), _(o(re), Z(M({ key: 0 }, g.itemProps)), {
          default: w(() => [
            k(o(ne), null, {
              default: w(() => [
                k(o(ae), null, {
                  default: w(() => [
                    W(R(g.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (f(), _(A(o(t)), {
          key: 1,
          scope: g
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), Q = /* @__PURE__ */ v({
  __name: "RegularField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, a = n.rulesBehaviour === "lazy";
    return (c, l) => (f(), _(o(te), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        l[0] || (l[0] = (p) => e.wrapper.modelValue = p),
        l[1] || (l[1] = (p) => e.wrapper.modelValueOnUpdate(p))
      ],
      type: e.wrapper.field.componentOptions.regularFieldType,
      label: e.wrapper.field.label,
      hint: e.wrapper.field.hint,
      outlined: o(s).fieldOutlined,
      filled: o(s).fieldFilled,
      standout: o(s).fieldStandout,
      borderless: o(s).fieldBorderless,
      rounded: o(s).fieldRounded,
      square: o(s).fieldSquare,
      dense: o(s).fieldDense,
      hideBottomSpace: o(s).fieldHideBottomSpace,
      color: o(s).fieldColor,
      bgColor: o(s).fieldBgColor,
      class: x(e.wrapper.field.cssClass),
      "lazy-rules": a,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
});
class K {
  constructor(e, t, n, s, a, c, l) {
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
    }, this.actionComponent = s ?? N.getGlobalActionComponent(), this.sectionComponent = a ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = c ?? N.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? N.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Q,
      text: Q,
      number: Q,
      date: xe,
      selectString: Ie,
      selectBelongsTo: je,
      selectHasMany: Re,
      checkbox: qe,
      object: Ee
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
function ze(r, e, t) {
  const n = t.getFormFactoryInstance().formSettings, s = t.getForm(), a = (u, i, d) => u[i] ? d ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    S.formatDate(
      S.extractDate(u, s.backendDateFormat),
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
        l.push(Le());
        break;
      case "absence":
        l.push(Ue());
        break;
      case "acceptance":
        l.push(Ae());
        break;
      case "inclusion":
        l.push(oe(i.including));
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
            a(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Ke(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Je(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Xe(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ze(a(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Me(
            a(i, "other_than")
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
            a(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          at(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          ot(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          lt(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          ut(
            a(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          it(a(i, "equal_to"))
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
            a(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          dt(
            a(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          pt(
            a(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          mt(
            a(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          ft(
            a(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          gt(
            a(i, "equal_to", !0),
            n.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          bt(
            a(i, "other_than", !0),
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
function Le() {
  return (r) => !!r || "Ce champ est requis";
}
function oe(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ge(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${oe.toString()}`
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
function at(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ot(r) {
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
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s <= a || `Inf. ou égal à ${n}`;
  };
}
function pt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s < a || `Inf. à ${n}`;
  };
}
function mt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s >= a || `Sup. ou égal à ${n}`;
  };
}
function ft(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s > a || `Sup. à ${n}`;
  };
}
function gt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return s === a || `Égale à ${s}`;
  };
}
function bt(r, e) {
  return (t) => {
    const n = r();
    return S.extractDate(String(t), e) !== S.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function ht(r) {
  return (e) => !Number.isNaN(S.extractDate(String(e), r).getTime()) || "Date invalide";
}
const yt = {
  computeServerRules: ze
}, X = /* @__PURE__ */ v({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r, n = ge(t.field.provideUniqKey), s = i(), a = C(), c = C([]);
    function l() {
      n && (a.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), a.value = p(a.value));
    }
    function p(h) {
      switch (t.field.type) {
        case "date":
          return S.formatDate(
            S.extractDate(
              String(h),
              n.getForm().backendDateFormat
            ),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return h;
    }
    function u() {
      switch (t.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = S.formatDate(
            /* @__PURE__ */ new Date(),
            n.getFormFactoryInstance().formSettings.dateFormat
          );
          break;
        case "number":
          a.value = 0;
          break;
        case "selectString":
          a.value = null;
          break;
        case "text":
          a.value = "";
          break;
        case "object":
          a.value = {};
          break;
        case "selectBelongsTo":
          a.value = null;
          break;
        case "selectHasMany":
          a.value = null;
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
    function d(h) {
      a.value = h;
    }
    function m() {
      return o(a);
    }
    function g(h) {
      c.value = h;
    }
    function V() {
      let h = !0;
      return s.forEach((O) => {
        const I = O(m());
        if (I !== !0) {
          h = I;
          return;
        }
      }), h;
    }
    return e({
      reset: l,
      clear: u,
      validate: V,
      getValue: m,
      setupBackendErrors: g
    }), E(() => {
      var O;
      l();
      const h = (O = be()) == null ? void 0 : O.exposed;
      h && n && n.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, O) => (f(), D("div", null, [
      U(h.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: d, backendErrors: c.value, field: h.field, injectForm: o(n), rules: o(s), reset: l, clear: u, getValue: m, validate: V }
      })
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
    ), a = $e(Fe()), c = C({}), l = C(), p = C(!1), u = C(!1), i = C("create");
    async function d() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        s.getForm(
          n,
          a,
          t.context
        )
      ), t.resourceId && (i.value = "edit"), p.value = !0;
    }
    async function m() {
      var B, j;
      if (u.value = !0, !V())
        return;
      const b = g(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        context: t.context
      });
      y.success ? (i.value === "create" && (i.value = "edit"), n && y.resource_data && (n.resource_data = y.resource_data), h(), (j = t.onSubmitSuccess) == null || j.call(t)) : (Object.entries(c.value).forEach((T) => {
        const z = y.errors[T[0]];
        z && T[1].setupBackendErrors(z);
      }), (B = t.onSubmitFail) == null || B.call(t)), u.value = !1;
    }
    function g() {
      const b = {};
      return Object.entries(c.value).forEach((y) => {
        b[y[0]] = y[1].getValue();
      }), b;
    }
    function V() {
      let b = !0;
      return Object.values(c.value).forEach((y) => {
        if (y.validate() !== !0) {
          b = !1;
          return;
        }
      }), b;
    }
    function h() {
      Object.values(c.value).forEach((b) => {
        b.reset();
      });
    }
    function O() {
      Object.values(c.value).forEach((b) => {
        b.clear();
      });
    }
    function I(b, y) {
      c.value[b] = y;
    }
    function le(b) {
      if (n)
        return n.resource_data[b];
    }
    function se(b) {
      const y = Object.entries(c.value).find((B) => B[0] === b);
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
    return he(a, {
      registerRef: I,
      getDefaultDataByFieldName: le,
      getFieldDataByFieldName: se,
      getFormFactoryInstance: ie,
      getForm: ue,
      getAssociationDataCallback: ce
    }), e({}), E(async () => {
      de(), await d();
    }), (b, y) => p.value && l.value ? (f(), D("div", St, [
      $("div", {
        class: x(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), D(L, null, J(l.value.sections, (B, j) => (f(), _(A(o(s).sectionComponent), {
          key: j,
          section: B
        }, {
          default: w(() => [
            (f(!0), D(L, null, J(B.fields, (T) => (f(), D(L, {
              key: T.metadata.field_name
            }, [
              b.$slots[T.metadata.field_name] ? (f(), _(X, {
                key: 1,
                field: T
              }, {
                default: w(({ propsWrapper: z }) => [
                  U(b.$slots, T.metadata.field_name, { propsWrapper: z })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), _(X, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), _(A(o(s).actionComponent), {
        isLoadingSubmit: u.value,
        submit: m,
        clear: l.value.clearable ? O : void 0,
        reset: l.value.resetable ? h : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      b.$slots.more_actions ? U(b.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  N as Submit64,
  wt as Submit64Form
};
