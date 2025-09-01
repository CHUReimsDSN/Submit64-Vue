var re = Object.defineProperty;
var ue = (l, e, n) => e in l ? re(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[e] = n;
var S = (l, e, n) => ue(l, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as x, openBlock as f, createVNode as C, createBlock as b, createCommentVNode as R, unref as m, normalizeClass as Y, createElementVNode as w, toDisplayString as H, renderSlot as I, resolveComponent as ce, inject as de, ref as v, onMounted as K, getCurrentInstance as me, resolveDynamicComponent as O, withCtx as h, normalizeProps as N, guardReactiveProps as q, mergeProps as $, createTextVNode as J, provide as fe, Fragment as G, renderList as Q } from "vue";
import { QBtn as E, QIcon as X, date as _, QInput as U, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as P, QItem as Z, QItemSection as M, QItemLabel as W, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ F({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => (f(), x("div", ye, [
      C(m(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), b(m(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : R("", !0),
      e.clear ? (f(), b(m(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : R("", !0)
    ]));
  }
}), Se = { class: "flex row items-center" }, Fe = { class: "text-body1 text-weight-medium" }, ve = { class: "flex column q-gutter-sm" }, De = /* @__PURE__ */ F({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (n, t) => (f(), x("div", {
      class: Y(["flex column", e.section.cssClass])
    }, [
      w("div", Se, [
        e.section.icon ? (f(), b(m(X), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        w("div", Fe, H(e.section.label), 1)
      ]),
      w("div", ve, [
        I(n.$slots, "default")
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => {
      const a = ce("q-icon");
      return f(), b(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (c) => e.reset())
      });
    };
  }
}), L = class L {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyleConfig");
    S(this, "_actionComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
    S(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Ce, this._sectionComponent = De, this._wrapperResetComponent = Ve, this._associationDisplayDictonary = {};
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
S(L, "_instance", new L());
let k = L;
function ke(l, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), c = (r, u, d) => r[u] ? d ? () => i(r[u]) : () => r[u] : r.compare_to ? () => n.getFieldDataByFieldName(r.compare_to) : () => "", i = (r) => String(
    _.formatDate(
      _.extractDate(r, a.backendDateFormat),
      t.dateFormat
    )
  ), o = [], s = [];
  switch (e) {
    case "date":
      o.push(lt(t.dateFormat));
  }
  return l.forEach((r) => {
    const u = r;
    switch (u.type) {
      case "required":
        o.push(Ne());
        break;
      case "absence":
        o.push(Be());
        break;
      case "acceptance":
        o.push(xe());
        break;
      case "inclusion":
        o.push(ee(u.including));
        break;
      case "exclusion":
        o.push(Te(u.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        s.push("allowNull");
        break;
      case "allowBlank":
        s.push("allowBlank");
        break;
      case "positiveNumber":
        o.push(Re());
        break;
      case "lessThanOrEqualNumber":
        o.push(
          $e(
            c(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        o.push(
          pe(
            c(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        o.push(
          we(
            c(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        o.push(
          Ie(
            c(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        o.push(
          Ee(c(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        o.push(
          je(
            c(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        o.push(Le());
        break;
      case "numberNumericOnly":
        o.push(Ue());
        break;
      case "numberEvenOnly":
        o.push(ze());
        break;
      case "numberOddOnly":
        o.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        o.push(
          He(
            c(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        o.push(
          Pe(
            c(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        o.push(
          Ae(
            c(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        o.push(
          Qe(
            c(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        o.push(
          Je(
            c(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        o.push(
          Ke(c(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        o.push(
          Ye(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        o.push(
          Xe(
            c(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        o.push(
          Ze(
            c(u, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        o.push(
          Me(
            c(u, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        o.push(
          We(
            c(u, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        o.push(
          et(
            c(u, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        o.push(
          tt(
            c(u, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        o.push(
          nt(
            c(u, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((r) => {
    switch (r) {
      case "allowBlank":
        return qe(o);
      case "allowNull":
        return Oe(o);
    }
  }) : o;
}
function Ne() {
  return (l) => !!l || "Ce champ est requis";
}
function ee(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function Te(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function Be() {
  return (l) => !l || "Ce champ doit être vide";
}
function xe() {
  return (l) => !!l || "Doit être accepté";
}
function Oe(l) {
  return (e) => (e === null || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe(l) {
  return (e) => (e === "" || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Re() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function $e(l) {
  return (e) => {
    const n = l();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function pe(l) {
  return (e) => {
    const n = l();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function we(l) {
  return (e) => {
    const n = l();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Ie(l) {
  return (e) => {
    const n = l();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function Ee(l, e) {
  return (n) => {
    const t = l();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function je(l, e) {
  return (n) => {
    const t = l();
    return Number(n) !== t || `Doit être différent de ${l}`;
  };
}
function Le() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Ue() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function ze() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function He(l) {
  return (e) => {
    const n = l();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Pe(l) {
  return (e) => {
    const n = l();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Ae(l) {
  return (e) => {
    const n = l();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function Qe(l) {
  return (e) => {
    const n = l();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Ye(l, e) {
  return (n) => {
    const t = l(), a = e();
    return String(n).length >= t && String(n).length <= a || `Entre ${t} et ${a}`;
  };
}
function Ke(l, e) {
  return (n) => {
    const t = l();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Je(l) {
  return (e) => {
    const n = l();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Xe(l) {
  return (e) => {
    const n = l();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Ze(l, e) {
  return (n) => {
    const t = l(), a = _.extractDate(String(n), e), c = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= c || `Inf. ou égal à ${t}`;
  };
}
function Me(l, e) {
  return (n) => {
    const t = l(), a = _.extractDate(String(n), e), c = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < c || `Inf. à ${t}`;
  };
}
function We(l, e) {
  return (n) => {
    const t = l(), a = _.extractDate(String(n), e), c = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= c || `Sup. ou égal à ${t}`;
  };
}
function et(l, e) {
  return (n) => {
    const t = l(), a = _.extractDate(String(n), e), c = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > c || `Sup. à ${t}`;
  };
}
function tt(l, e) {
  return (n) => {
    const t = l(), a = _.extractDate(String(n), e), c = _.extractDate(t, e);
    return a === c || `Égale à ${a}`;
  };
}
function nt(l, e) {
  return (n) => {
    const t = l();
    return _.extractDate(String(n), e) !== _.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function lt(l) {
  return (e) => !Number.isNaN(_.extractDate(String(e), l).getTime()) || "Date invalide";
}
const ot = {
  computeServerRules: ke
}, D = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const n = l, t = de(n.field.provideUniqKey), a = v();
    function c() {
      return a.value;
    }
    function i() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = o(a.value));
    }
    function o(g) {
      switch (n.field.type) {
        case "date":
          return _.formatDate(
            _.extractDate(
              String(g),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return g;
    }
    function s() {
      switch (n.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = _.formatDate(
            /* @__PURE__ */ new Date(),
            t.getFormFactoryInstance().formSettings.dateFormat
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
    function r() {
      return ot.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function u(g) {
      a.value = g;
    }
    function d() {
      return m(a.value);
    }
    return e({
      reset: i,
      clear: s,
      getValue: c
    }), K(() => {
      var V;
      i();
      const g = (V = me()) == null ? void 0 : V.exposed;
      g && t && t.registerRef(
        n.field.metadata.field_name,
        g
      );
    }), (g, V) => (f(), x("div", null, [
      n.field.resetable ? I(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: i }
      }, () => [
        (f(), b(O(m(t).getFormFactoryInstance().wrapperResetComponent), { reset: i }))
      ]) : R("", !0),
      I(g.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: u, field: g.field, injectForm: m(t), reset: i, clear: s, getComputedRules: r, getModelValueValue: d }
      })
    ]));
  }
}), at = /* @__PURE__ */ F({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: i.fieldOutlined,
        filled: i.fieldFilled,
        standout: i.fieldStandout,
        borderless: i.fieldBorderless,
        rounded: i.fieldRounded,
        square: i.fieldSquare,
        dense: i.fieldDense,
        hideBottomSpace: i.fieldHideBottomSpace,
        color: i.fieldColor,
        bgColor: i.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(m(U), N(q(n(c))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: i.fieldOutlined,
        filled: i.fieldFilled,
        standout: i.fieldStandout,
        borderless: i.fieldBorderless,
        rounded: i.fieldRounded,
        square: i.fieldSquare,
        dense: i.fieldDense,
        hideBottomSpace: i.fieldHideBottomSpace,
        color: i.fieldColor,
        bgColor: i.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(m(U), $(n(c), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = v();
    function t(o) {
      const s = o.injectForm.getFormFactoryInstance(), r = s.formSettings, u = s.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => o.modelValueOnUpdate(d),
        modelValue: o.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: o.field.clearable,
        rules: o.getComputedRules(),
        // events
        onClear: o.clear,
        // display
        label: o.field.label,
        hint: o.field.hint,
        outlined: u.fieldOutlined,
        filled: u.fieldFilled,
        standout: u.fieldStandout,
        borderless: u.fieldBorderless,
        rounded: u.fieldRounded,
        square: u.fieldSquare,
        dense: u.fieldDense,
        hideBottomSpace: u.fieldHideBottomSpace,
        color: u.fieldColor,
        bgColor: u.fieldBgColor,
        class: o.field.cssClass
      };
    }
    function a(o) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function c(o) {
      return {
        "onUpdate:modelValue": (s) => o.modelValueOnUpdate(s),
        modelValue: o.modelValue,
        mask: o.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (o, s) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(m(U), N(q(t(r))), {
          append: h(() => [
            C(m(X), N(q(a())), {
              default: h(() => [
                C(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: h(() => [
                    C(m(he), N(q(c(r))), {
                      default: h(() => [
                        w("div", st, [
                          C(m(E), {
                            onClick: i,
                            label: "Fermer",
                            color: "secondary",
                            flat: "",
                            "no-caps": ""
                          })
                        ])
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 2
                }, 1536)
              ]),
              _: 2
            }, 1040)
          ]),
          _: 2
        }, 1040)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = /* @__PURE__ */ F({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (c) => t.modelValueOnUpdate(c),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(m(be), N(q(n(c))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ F({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: i.fieldOutlined,
        filled: i.fieldFilled,
        standout: i.fieldStandout,
        borderless: i.fieldBorderless,
        rounded: i.fieldRounded,
        square: i.fieldSquare,
        dense: i.fieldDense,
        hideBottomSpace: i.fieldHideBottomSpace,
        color: i.fieldColor,
        bgColor: i.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(m(U), $(n(c), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(l) {
  return Symbol(l);
}
function j() {
  return 20;
}
const mt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = v([]), a = v({
      limit: j(),
      offset: 0
    });
    function c(s) {
      const r = s.injectForm.getFormFactoryInstance(), u = r.formSettings, d = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => s.modelValueOnUpdate(g),
        modelValue: s.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: s.clear,
        onFilter: i(s),
        // display
        label: s.field.label,
        hint: s.field.hint,
        outlined: d.fieldOutlined,
        filled: d.fieldFilled,
        standout: d.fieldStandout,
        borderless: d.fieldBorderless,
        rounded: d.fieldRounded,
        square: d.fieldSquare,
        dense: d.fieldDense,
        hideBottomSpace: d.fieldHideBottomSpace,
        color: d.fieldColor,
        bgColor: d.fieldBgColor,
        class: s.field.cssClass
      };
    }
    function i(s) {
      return (r, u) => {
        const d = s.injectForm.getAssociationDataCallback();
        r === "" && (a.value = {
          limit: j(),
          offset: 0
        }), u(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: r,
            context: s.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function o(s) {
      t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: s.modelValue
        }
      ];
    }
    return (s, r) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: u }) => [
        C(m(P), $(c(u), {
          onVnodeMounted: (d) => o(u)
        }), {
          options: h((d) => [
            m(n) ? (f(), b(m(Z), N($({ key: 0 }, d.itemProps)), {
              default: h(() => [
                C(m(M), null, {
                  default: h(() => [
                    C(m(W), null, {
                      default: h(() => [
                        J(H(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(O(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ft = (l, e) => {
  const n = l.__vccOpts || l;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, gt = {};
function ht(l, e) {
  return " TODO json edit ? ";
}
const bt = /* @__PURE__ */ ft(gt, [["render", ht]]), _t = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = v([]), t = v([]);
    function a(i) {
      const o = i.injectForm.getFormFactoryInstance(), s = o.formSettings, r = o.formStyleConfig;
      return n.value = Object.freeze(i.field.selectOptions ?? []), t.value = i.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (u) => i.modelValueOnUpdate(u),
        modelValue: i.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: i.field.clearable,
        rules: i.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: i.field.selectOptions || [],
        // events
        onClear: i.clear,
        onFilter: c,
        // display
        label: i.field.label,
        hint: i.field.hint,
        outlined: r.fieldOutlined,
        filled: r.fieldFilled,
        standout: r.fieldStandout,
        borderless: r.fieldBorderless,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        hideBottomSpace: r.fieldHideBottomSpace,
        color: r.fieldColor,
        bgColor: r.fieldBgColor,
        class: i.field.cssClass
      };
    }
    function c(i, o) {
      if (i === "") {
        o(() => {
          t.value = [...n.value];
        });
        return;
      }
      o(() => {
        const s = i.toLowerCase();
        t.value = n.value.filter((r) => r.label.toLowerCase().includes(s));
      });
    }
    return (i, o) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        C(m(P), N(q(a(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ F({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = v([]), a = v({
      limit: j(),
      offset: 0
    });
    function c(s) {
      var g, V;
      const r = s.injectForm.getFormFactoryInstance(), u = r.formSettings, d = r.formStyleConfig;
      return console.log("bind : "), console.log(((g = t.value.at(0)) == null ? void 0 : g.value) === s.modelValue), console.log((V = t.value.at(0)) == null ? void 0 : V.value, s.modelValue), {
        // behaviour
        "onUpdate:modelValue": (z) => s.modelValueOnUpdate(z),
        modelValue: s.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: s.clear,
        onFilter: i(s),
        // display
        label: s.field.label,
        hint: s.field.hint,
        outlined: d.fieldOutlined,
        filled: d.fieldFilled,
        standout: d.fieldStandout,
        borderless: d.fieldBorderless,
        rounded: d.fieldRounded,
        square: d.fieldSquare,
        dense: d.fieldDense,
        hideBottomSpace: d.fieldHideBottomSpace,
        color: d.fieldColor,
        bgColor: d.fieldBgColor,
        class: s.field.cssClass
      };
    }
    function i(s) {
      return (r, u) => {
        const d = s.injectForm.getAssociationDataCallback();
        r === "" && (a.value = {
          limit: j(),
          offset: 0
        }), u(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: r,
            context: s.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function o(s) {
      var r, u;
      t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: s.getModelValueValue()
        }
      ], console.log("mounted : "), console.log(((r = t.value.at(0)) == null ? void 0 : r.value) === s.modelValue), console.log(t.value), console.log((u = t.value.at(0)) == null ? void 0 : u.value, s.modelValue);
    }
    return (s, r) => (f(), b(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: u }) => [
        C(m(P), $(c(u), {
          onVnodeMounted: (d) => o(u)
        }), {
          options: h((d) => [
            m(n) ? (f(), b(m(Z), N($({ key: 0 }, d.itemProps)), {
              default: h(() => [
                C(m(M), null, {
                  default: h(() => [
                    C(m(W), null, {
                      default: h(() => [
                        J(H(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(O(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class A {
  constructor(e, n, t, a, c, i, o) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...k.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...k.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = a ?? k.getGlobalActionComponent(), this.sectionComponent = c ?? k.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? k.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = o ?? k.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: at,
      text: it,
      number: ct,
      date: rt,
      selectString: _t,
      selectBelongsTo: yt,
      selectHasMany: mt,
      checkbox: ut,
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((i) => {
      const o = [];
      i.fields.forEach((r) => {
        const u = A.getFieldComponentByFormFieldType(
          r.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, g = {
          type: r.field_type,
          metadata: r,
          label: r.label,
          hint: r.hint,
          cssClass: r.css_class,
          selectOptions: r.select_options,
          rules: r.rules,
          clearable: r.clearable,
          resetable: r.resetable,
          provideUniqKey: n,
          defaultDisplayValue: r.default_display_value,
          component: u,
          componentOptions: d
        };
        o.push(g);
      });
      const s = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: o
      };
      a.push(s);
    }), {
      sections: a,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1,
      context: t
    };
  }
  getAssociationDisplayComponentByResourceName(e) {
    return this.associationDisplayDictionary[e];
  }
}
const Ct = {
  key: 0,
  class: "flex column"
}, Dt = /* @__PURE__ */ F({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    getAssociationData: {},
    globalFormSettings: {},
    context: {}
  },
  setup(l, { expose: e }) {
    const n = l;
    let t = null;
    const a = Object.freeze(
      new A(
        n.resourceName,
        n.globalFormSettings
      )
    ), c = dt(_e()), i = v({}), o = v(), s = v(!1), r = v(!1);
    async function u() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), o.value = Object.freeze(
        a.getForm(
          t,
          c,
          n.context
        )
      ), s.value = !0;
    }
    async function d() {
      r.value = !0;
      const y = {};
      Object.entries(i.value).forEach((B) => {
        y[B[0]] = B[1].getValue();
      });
      const T = await n.submitForm({ formData: y });
      t && (t.resource_data = T), g(), r.value = !1;
    }
    function g() {
      Object.values(i.value).forEach((y) => {
        y.reset();
      });
    }
    function V() {
      Object.values(i.value).forEach((y) => {
        y.clear();
      });
    }
    function z(y, T) {
      i.value[y] = T;
    }
    function te(y) {
      if (t)
        return t.resource_data[y];
    }
    function ne(y) {
      const T = Object.entries(i.value).find((B) => B[0] === y);
      return T ? T[1].getValue() : null;
    }
    function le() {
      return a;
    }
    function oe() {
      return o.value;
    }
    function ae() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return fe(c, {
      registerRef: z,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: le,
      getForm: oe,
      getAssociationDataCallback: ae
    }), e({}), K(async () => {
      await u();
    }), (y, T) => s.value && o.value ? (f(), x("div", Ct, [
      w("div", {
        class: Y(o.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), x(G, null, Q(o.value.sections, (B, ie) => (f(), b(O(m(a).sectionComponent), {
          key: ie,
          section: B
        }, {
          default: h(() => [
            (f(!0), x(G, null, Q(B.fields, (p) => (f(), x(G, {
              key: p.metadata.field_name
            }, [
              y.$slots[p.metadata.field_name] ? (f(), b(D, {
                key: 1,
                field: p
              }, {
                default: h(({ propsWrapper: se }) => [
                  I(y.$slots, "default", { propsWrapper: se })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), b(O(p.component), {
                key: 0,
                field: p
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), b(O(m(a).actionComponent), {
        isLoadingSubmit: r.value,
        submit: d,
        clear: o.value.clearable ? V : void 0,
        reset: o.value.resetable ? g : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? I(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : R("", !0)
    ])) : R("", !0);
  }
});
export {
  k as Submit64,
  Dt as Submit64Form
};
