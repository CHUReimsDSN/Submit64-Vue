var me = Object.defineProperty;
var fe = (r, e, t) => e in r ? me(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var F = (r, e, t) => fe(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as D, createElementBlock as v, openBlock as p, createVNode as k, createBlock as _, createCommentVNode as x, unref as o, normalizeClass as q, createElementVNode as R, toDisplayString as E, renderSlot as A, resolveComponent as ge, ref as w, withCtx as C, watch as be, Fragment as I, onMounted as L, normalizeProps as Z, mergeProps as M, createTextVNode as ee, resolveDynamicComponent as j, inject as he, getCurrentInstance as ye, renderList as W, provide as _e } from "vue";
import { QBtn as U, QIcon as te, QInput as re, QPopupProxy as Se, QDate as Fe, QCheckbox as we, QSelect as K, QItem as ne, QItemSection as ae, QItemLabel as oe, date as S, uid as Ce } from "quasar";
const ve = { class: "flex row items-center no-wrap q-pt-sm" }, De = /* @__PURE__ */ D({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => (p(), v("div", ve, [
      k(o(U), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: n[0] || (n[0] = (s) => e.submit())
      }, null, 8, ["loading"]),
      e.reset ? (p(), _(o(U), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: n[1] || (n[1] = (s) => e.reset())
      }, null, 8, ["loading"])) : x("", !0),
      e.clear ? (p(), _(o(U), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: n[2] || (n[2] = (s) => e.clear())
      }, null, 8, ["loading"])) : x("", !0)
    ]));
  }
}), ke = { class: "flex row items-center" }, Ve = { class: "text-body1 text-weight-medium" }, Te = { class: "flex column q-gutter-sm" }, Ne = /* @__PURE__ */ D({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(r) {
    const e = r;
    return (t, n) => (p(), v("div", {
      class: q(["flex column", e.section.cssClass])
    }, [
      R("div", ke, [
        e.section.icon ? (p(), _(o(te), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
        R("div", Ve, E(e.section.label), 1)
      ]),
      R("div", Te, [
        A(t.$slots, "default")
      ])
    ], 2));
  }
}), xe = /* @__PURE__ */ D({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, n) => {
      const s = ge("q-icon");
      return p(), _(s, {
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
    }, this._actionComponent = De, this._sectionComponent = Ne, this._wrapperResetComponent = xe, this._associationDisplayDictonary = {};
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
const Y = /* @__PURE__ */ D({
  __name: "RegularField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, a = n.rulesBehaviour === "lazy";
    return (c, l) => (p(), _(o(re), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        l[0] || (l[0] = (d) => e.wrapper.modelValue = d),
        l[1] || (l[1] = (d) => e.wrapper.modelValueOnUpdate(d))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": a,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      autogrow: !0,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "onClear"]));
  }
}), qe = { class: "row items-center justify-end" }, Oe = /* @__PURE__ */ D({
  __name: "DateField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings, s = t.formStyleConfig, a = n.rulesBehaviour === "lazy", c = w();
    function l() {
      c.value && c.value.hide();
    }
    return (d, u) => (p(), _(o(re), {
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": a,
      readonly: e.wrapper.field.readonly,
      clearable: e.wrapper.field.clearable,
      rules: e.wrapper.rules,
      onClear: e.wrapper.clear
    }, {
      append: C(() => [
        k(o(te), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: C(() => [
            k(o(Se), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: C(() => [
                k(o(Fe), {
                  modelValue: e.wrapper.modelValue,
                  "onUpdate:modelValue": [
                    u[0] || (u[0] = (i) => e.wrapper.modelValue = i),
                    u[1] || (u[1] = (i) => e.wrapper.modelValueOnUpdate(i))
                  ],
                  mask: o(t).formSettings.dateFormat
                }, {
                  default: C(() => [
                    R("div", qe, [
                      k(o(U), {
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
}), Be = {
  key: 0,
  class: "q-field__bottom"
}, $e = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ee = /* @__PURE__ */ D({
  __name: "CheckboxField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = w(!0), s = e.wrapper.injectForm.getFormFactoryInstance().formStyleConfig;
    function a(c) {
      e.wrapper.modelValueOnUpdate(c);
    }
    return be(() => e.wrapper.modelValue, () => {
      t.value = e.wrapper.validate();
    }), (c, l) => (p(), v(I, null, [
      k(o(we), {
        modelValue: e.wrapper.modelValue,
        "onUpdate:modelValue": [
          l[0] || (l[0] = (d) => e.wrapper.modelValue = d),
          l[1] || (l[1] = (d) => a(d))
        ],
        label: e.wrapper.field.label,
        dense: o(s).fieldDense,
        color: o(s).fieldColor,
        "aria-readonly": e.wrapper.field.readonly,
        class: q(e.wrapper.field.cssClass)
      }, null, 8, ["modelValue", "label", "dense", "color", "aria-readonly", "class"]),
      e.wrapper.field.hint ? (p(), v("div", Be, E(e.wrapper.field.hint), 1)) : x("", !0),
      t.value !== !0 ? (p(), v("div", $e, E(t.value), 1)) : x("", !0)
    ], 64));
  }
}), Re = /* @__PURE__ */ D({
  __name: "ObjectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const t = r.wrapper.injectForm.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyleConfig, n.rulesBehaviour, (s, a) => " TODO json edit ? ";
  }
}), Ie = /* @__PURE__ */ D({
  __name: "SelectField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = w([]), n = w([]), s = e.wrapper.injectForm.getFormFactoryInstance(), a = s.formSettings, c = s.formStyleConfig, l = a.rulesBehaviour === "lazy";
    function d(i, b) {
      if (i === "") {
        b(() => {
          n.value = [...t.value];
        });
        return;
      }
      b(() => {
        const m = i.toLowerCase();
        n.value = t.value.filter((f) => f.label.toLowerCase().includes(m));
      });
    }
    function u(i) {
      t.value = Object.freeze(i.field.selectOptions ?? []), n.value = i.field.selectOptions ?? [];
    }
    return L(() => {
      u(e.wrapper);
    }), (i, b) => (p(), _(o(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        b[0] || (b[0] = (m) => e.wrapper.modelValue = m),
        b[1] || (b[1] = (m) => e.wrapper.modelValueOnUpdate(m))
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
      class: q(e.wrapper.field.cssClass),
      "lazy-rules": l,
      clearable: e.wrapper.field.clearable,
      readonly: e.wrapper.field.readonly,
      rules: e.wrapper.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.wrapper.clear,
      onFilter: d
    }, null, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
function je(r) {
  return Symbol(r);
}
function H() {
  return 20;
}
const Le = /* @__PURE__ */ D({
  __name: "SelectBelongsToField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, a = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = w([]), d = w({
      limit: H(),
      offset: 0
    });
    function u(b, m) {
      const f = e.wrapper.injectForm.getAssociationDataCallback();
      b === "" && (d.value = {
        limit: H(),
        offset: 0
      }), m(() => {
        f({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: b,
          context: e.wrapper.injectForm.getForm().context
        }).then((V) => {
          l.value = V.rows;
        });
      });
    }
    function i() {
      setTimeout(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValue()),
            value: e.wrapper.getValue()
          }
        ];
      }, 0);
    }
    return L(() => {
      i();
    }), (b, m) => (p(), _(o(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (f) => e.wrapper.modelValue = f),
        m[1] || (m[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      class: q(e.wrapper.field.cssClass),
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
      options: C((f) => [
        o(t) ? (p(), _(o(ne), Z(M({ key: 0 }, f.itemProps)), {
          default: C(() => [
            k(o(ae), null, {
              default: C(() => [
                k(o(oe), null, {
                  default: C(() => [
                    ee(E(f.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (p(), _(j(o(t)), {
          key: 1,
          scope: f
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
}), ze = /* @__PURE__ */ D({
  __name: "SelectHasManyField",
  props: {
    wrapper: {}
  },
  setup(r) {
    const e = r, t = e.wrapper.field.componentOptions.associationDisplayComponent, n = e.wrapper.injectForm.getFormFactoryInstance(), s = n.formSettings, a = n.formStyleConfig, c = s.rulesBehaviour === "lazy", l = w([]), d = w({
      limit: H(),
      offset: 0
    });
    function u(b, m) {
      const f = e.wrapper.injectForm.getAssociationDataCallback();
      b === "" && (d.value = {
        limit: H(),
        offset: 0
      }), m(() => {
        f({
          resourceName: e.wrapper.injectForm.getForm().resourceName,
          associationName: e.wrapper.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: b,
          context: e.wrapper.injectForm.getForm().context
        }).then((V) => {
          l.value = V.rows;
        });
      });
    }
    function i() {
      setTimeout(() => {
        l.value = [
          {
            label: e.wrapper.field.defaultDisplayValue ?? String(e.wrapper.getValue()),
            value: e.wrapper.getValue()
          }
        ];
      }, 0);
    }
    return L(() => {
      i();
    }), (b, m) => (p(), _(o(K), {
      modelValue: e.wrapper.modelValue,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (f) => e.wrapper.modelValue = f),
        m[1] || (m[1] = (f) => e.wrapper.modelValueOnUpdate(f))
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
      class: q(e.wrapper.field.cssClass),
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
      options: C((f) => [
        o(t) ? (p(), _(o(ne), Z(M({ key: 0 }, f.itemProps)), {
          default: C(() => [
            k(o(ae), null, {
              default: C(() => [
                k(o(oe), null, {
                  default: C(() => [
                    ee(E(f.opt.label), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040)) : (p(), _(j(o(t)), {
          key: 1,
          scope: f
        }, null, 8, ["scope"]))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "readonly", "rules", "options", "onClear"]));
  }
});
class J {
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
      string: Y,
      text: Y,
      number: Y,
      date: Oe,
      selectString: Ie,
      selectBelongsTo: Le,
      selectHasMany: ze,
      checkbox: Ee,
      object: Re
    }[e];
  }
  getForm(e, t, n) {
    const s = [];
    return e.form.sections.forEach((c) => {
      const l = [];
      c.fields.forEach((u) => {
        const i = J.getFieldComponentByFormFieldType(
          u.field_type
        ), b = {
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
          componentOptions: b
        };
        l.push(m);
      });
      const d = {
        label: c.label,
        icon: c.icon,
        cssClass: c.css_class,
        fields: l
      };
      s.push(d);
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
function Ge(r, e, t) {
  const n = t.getFormFactoryInstance().formSettings, s = t.getForm(), a = (u, i, b) => u[i] ? b ? () => c(u[i]) : () => u[i] : u.compare_to ? () => t.getFieldDataByFieldName(u.compare_to) ?? "Submit64 error : missing comparator definition" : () => "", c = (u) => String(
    S.formatDate(
      S.extractDate(u, s.backendDateFormat),
      n.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(_t(n.dateFormat));
  }
  return r.forEach((u) => {
    const i = u;
    switch (i.type) {
      case "required":
        l.push(Ue());
        break;
      case "absence":
        l.push(He());
        break;
      case "acceptance":
        l.push(Pe());
        break;
      case "inclusion":
        l.push(le(i.including));
        break;
      case "exclusion":
        l.push(Ae(i.excluding));
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
        l.push(We());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Ke(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Je(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Xe(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ze(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Me(a(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          et(
            a(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(tt());
        break;
      case "numberNumericOnly":
        l.push(rt());
        break;
      case "numberEvenOnly":
        l.push(nt());
        break;
      case "numberOddOnly":
        l.push(at());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          ot(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          lt(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          st(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          it(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          pt(
            a(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          ct(a(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          ut(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          dt(
            a(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          mt(
            a(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          ft(
            a(i, "less_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          gt(
            a(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          bt(
            a(i, "greater_than", !0),
            n.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          ht(
            a(i, "equal_to", !0),
            n.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          yt(
            a(i, "other_than", !0),
            n.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return Ye(l);
      case "allowNull":
        return Qe(l);
    }
  }) : l;
}
function Ue() {
  return (r) => !!r || "Ce champ est requis";
}
function le(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Ae(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${le.toString()}`
  );
}
function He() {
  return (r) => !r || "Ce champ doit être vide";
}
function Pe() {
  return (r) => !!r || "Doit être accepté";
}
function Qe(r) {
  return (e) => (e === null || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Ye(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function We() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function Ke(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Je(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Xe(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ze(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Me(r, e) {
  return (t) => {
    const n = r();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function et(r, e) {
  return (t) => {
    const n = r();
    return Number(t) !== n || `Doit être différent de ${r}`;
  };
}
function tt() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function rt() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function nt() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function at() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function ot(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function lt(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function st(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function it(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function ut(r, e) {
  return (t) => {
    const n = r(), s = e();
    return String(t).length >= n && String(t).length <= s || `Entre ${n} et ${s}`;
  };
}
function ct(r, e) {
  return (t) => {
    const n = r();
    return String(t) === n || `Égale à ${n}`;
  };
}
function pt(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function dt(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function mt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s <= a || `Inf. ou égal à ${n}`;
  };
}
function ft(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s < a || `Inf. à ${n}`;
  };
}
function gt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s >= a || `Sup. ou égal à ${n}`;
  };
}
function bt(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return !Number.isNaN(s.getTime()) && s > a || `Sup. à ${n}`;
  };
}
function ht(r, e) {
  return (t) => {
    const n = r(), s = S.extractDate(String(t), e), a = S.extractDate(n, e);
    return s === a || `Égale à ${s}`;
  };
}
function yt(r, e) {
  return (t) => {
    const n = r();
    return S.extractDate(String(t), e) !== S.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function _t(r) {
  return (e) => !Number.isNaN(S.extractDate(String(e), r).getTime()) || "Date invalide";
}
const St = {
  computeServerRules: Ge
}, Ft = {
  key: 0,
  class: "q-field--error q-field__bottom text-warning"
}, wt = ["index"], X = /* @__PURE__ */ D({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(r, { expose: e }) {
    const t = r, n = he(t.field.provideUniqKey), s = i(), a = w(), c = w([]);
    function l() {
      n && (a.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ), a.value = d(a.value));
    }
    function d(h) {
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
          a.value = "";
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
      return St.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        n
      );
    }
    function b(h) {
      a.value = h;
    }
    function m() {
      return o(a);
    }
    function f(h) {
      c.value = h;
    }
    function V() {
      let h = !0;
      return s.forEach((O) => {
        const $ = O(m());
        if ($ !== !0) {
          h = $;
          return;
        }
      }), h;
    }
    return e({
      reset: l,
      clear: u,
      validate: V,
      getValue: m,
      setupBackendErrors: f
    }), L(() => {
      var O;
      l();
      const h = (O = ye()) == null ? void 0 : O.exposed;
      h && n && n.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, O) => (p(), v("div", null, [
      A(h.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: b, field: h.field, injectForm: o(n), rules: o(s), reset: l, clear: u, getValue: m, validate: V }
      }, () => [
        (p(), _(j(t.field.component), {
          wrapper: { modelValue: a.value, modelValueOnUpdate: b, field: h.field, injectForm: o(n), rules: o(s), reset: l, clear: u, getValue: m, validate: V }
        }, null, 8, ["wrapper"])),
        c.value.length > 0 ? (p(), v("div", Ft, [
          (p(!0), v(I, null, W(c.value, ($, Q) => (p(), v("div", {
            index: Q,
            class: "flex column"
          }, E($), 9, wt))), 256))
        ])) : x("", !0)
      ])
    ]));
  }
}), Ct = {
  key: 0,
  class: "flex column"
}, Vt = /* @__PURE__ */ D({
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
      new J(t.resourceName, t.formSettings)
    ), a = je(Ce()), c = w({}), l = w(), d = w(!1), u = w(!1), i = w("create");
    async function b() {
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
      ), t.resourceId && (i.value = "edit"), d.value = !0;
    }
    async function m() {
      var B, z;
      if (!V())
        return;
      u.value = !0, $();
      const g = f(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        context: t.context
      });
      y.success ? (i.value === "create" && (i.value = "edit"), n && y.resource_data && (n.resource_data = y.resource_data), h(), (z = t.onSubmitSuccess) == null || z.call(t)) : (Object.entries(c.value).forEach((T) => {
        const G = y.errors[T[0]];
        G && T[1].setupBackendErrors(G);
      }), (B = t.onSubmitFail) == null || B.call(t)), u.value = !1;
    }
    function f() {
      const g = {};
      return Object.entries(c.value).forEach((y) => {
        g[y[0]] = y[1].getValue();
      }), g;
    }
    function V() {
      let g = !0;
      return Object.values(c.value).forEach((y) => {
        if (y.validate() !== !0) {
          g = !1;
          return;
        }
      }), g;
    }
    function h() {
      Object.values(c.value).forEach((g) => {
        g.reset();
      });
    }
    function O() {
      Object.values(c.value).forEach((g) => {
        g.clear();
      });
    }
    function $() {
      Object.values(c.value).forEach((g) => {
        g.setupBackendErrors([]);
      });
    }
    function Q(g, y) {
      c.value[g] = y;
    }
    function se(g) {
      if (n)
        return n.resource_data[g];
    }
    function ie(g) {
      const y = Object.entries(c.value).find((B) => B[0] === g);
      return y ? y[1].getValue() : null;
    }
    function ue() {
      return s;
    }
    function ce() {
      return l.value;
    }
    function pe() {
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
    return _e(a, {
      registerRef: Q,
      getDefaultDataByFieldName: se,
      getFieldDataByFieldName: ie,
      getFormFactoryInstance: ue,
      getForm: ce,
      getAssociationDataCallback: pe
    }), e({}), L(async () => {
      de(), await b();
    }), (g, y) => d.value && l.value ? (p(), v("div", Ct, [
      R("div", {
        class: q(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), v(I, null, W(l.value.sections, (B, z) => (p(), _(j(o(s).sectionComponent), {
          key: z,
          section: B
        }, {
          default: C(() => [
            (p(!0), v(I, null, W(B.fields, (T) => (p(), v(I, {
              key: T.metadata.field_name
            }, [
              g.$slots[T.metadata.field_name] ? (p(), _(X, {
                key: 1,
                field: T
              }, {
                default: C(({ propsWrapper: G }) => [
                  A(g.$slots, T.metadata.field_name, { propsWrapper: G })
                ]),
                _: 2
              }, 1032, ["field"])) : (p(), _(X, {
                key: 0,
                field: T
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), _(j(o(s).actionComponent), {
        isLoadingSubmit: u.value,
        submit: m,
        clear: l.value.clearable ? O : void 0,
        reset: l.value.resetable ? h : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      g.$slots.more_actions ? A(g.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : x("", !0)
    ])) : x("", !0);
  }
});
export {
  N as Submit64,
  Vt as Submit64Form
};
