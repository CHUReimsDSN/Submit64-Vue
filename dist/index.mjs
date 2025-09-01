var se = Object.defineProperty;
var ue = (o, e, n) => e in o ? se(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var C = (o, e, n) => ue(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as N, openBlock as f, createVNode as S, createBlock as b, createCommentVNode as O, unref as m, normalizeClass as Q, createElementVNode as $, toDisplayString as G, renderSlot as I, resolveComponent as ce, inject as de, ref as D, onMounted as Y, getCurrentInstance as me, resolveDynamicComponent as p, withCtx as h, normalizeProps as B, guardReactiveProps as w, mergeProps as x, createTextVNode as K, provide as fe, Fragment as z, renderList as A } from "vue";
import { QBtn as E, QIcon as M, date as _, QInput as U, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as H, QItem as J, QItemSection as X, QItemLabel as Z, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Se = /* @__PURE__ */ F({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => (f(), N("div", ye, [
      S(m(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), b(m(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      e.clear ? (f(), b(m(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : O("", !0)
    ]));
  }
}), Ce = { class: "flex row items-center" }, Fe = { class: "text-body1 text-weight-medium" }, De = { class: "flex column q-gutter-sm" }, ve = /* @__PURE__ */ F({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(o) {
    const e = o;
    return (n, t) => (f(), N("div", {
      class: Q(["flex column", e.section.cssClass])
    }, [
      $("div", Ce, [
        e.section.icon ? (f(), b(m(M), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        $("div", Fe, G(e.section.label), 1)
      ]),
      $("div", De, [
        I(n.$slots, "default")
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => {
      const a = ce("q-icon");
      return f(), b(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), L = class L {
  constructor() {
    C(this, "_formSettings");
    C(this, "_formStyleConfig");
    C(this, "_actionComponent");
    C(this, "_sectionComponent");
    C(this, "_wrapperResetComponent");
    C(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Se, this._sectionComponent = ve, this._wrapperResetComponent = Ve, this._associationDisplayDictonary = {};
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
C(L, "_instance", new L());
let V = L;
function ke(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), s = (c, i, d) => c[i] ? d ? () => u(c[i]) : () => c[i] : c.compare_to ? () => n.getFieldDataByFieldName(c.compare_to) : () => "", u = (c) => String(
    _.formatDate(
      _.extractDate(c, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], r = [];
  switch (e) {
    case "date":
      l.push(ot(t.dateFormat));
  }
  return o.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        l.push(Te());
        break;
      case "absence":
        l.push(Be());
        break;
      case "acceptance":
        l.push(xe());
        break;
      case "inclusion":
        l.push(W(i.including));
        break;
      case "exclusion":
        l.push(Ne(i.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        r.push("allowNull");
        break;
      case "allowBlank":
        r.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(qe());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Re(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $e(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          we(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ie(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ee(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          je(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Le());
        break;
      case "numberNumericOnly":
        l.push(Ue());
        break;
      case "numberEvenOnly":
        l.push(ze());
        break;
      case "numberOddOnly":
        l.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          He(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Pe(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ae(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qe(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Me(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ke(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ye(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Je(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Xe(
            s(i, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Ze(
            s(i, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          We(
            s(i, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          et(
            s(i, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          tt(
            s(i, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          nt(
            s(i, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((c) => {
    switch (c) {
      case "allowBlank":
        return Oe(l);
      case "allowNull":
        return pe(l);
    }
  }) : l;
}
function Te() {
  return (o) => !!o || "Ce champ est requis";
}
function W(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Ne(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${W.toString()}`
  );
}
function Be() {
  return (o) => !o || "Ce champ doit être vide";
}
function xe() {
  return (o) => !!o || "Doit être accepté";
}
function pe(o) {
  return (e) => (e === null || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Oe(o) {
  return (e) => (e === "" || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Re(o) {
  return (e) => {
    const n = o();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function $e(o) {
  return (e) => {
    const n = o();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function we(o) {
  return (e) => {
    const n = o();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Ie(o) {
  return (e) => {
    const n = o();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function Ee(o, e) {
  return (n) => {
    const t = o();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function je(o, e) {
  return (n) => {
    const t = o();
    return Number(n) !== t || `Doit être différent de ${o}`;
  };
}
function Le() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Ue() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ze() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function He(o) {
  return (e) => {
    const n = o();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Pe(o) {
  return (e) => {
    const n = o();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Ae(o) {
  return (e) => {
    const n = o();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function Qe(o) {
  return (e) => {
    const n = o();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Ye(o, e) {
  return (n) => {
    const t = o(), a = e();
    return String(n).length >= t && String(n).length <= a || `Entre ${t} et ${a}`;
  };
}
function Ke(o, e) {
  return (n) => {
    const t = o();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Me(o) {
  return (e) => {
    const n = o();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Je(o) {
  return (e) => {
    const n = o();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Xe(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= s || `Inf. ou égal à ${t}`;
  };
}
function Ze(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < s || `Inf. à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= s || `Sup. ou égal à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > s || `Sup. à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return a === s || `Égale à ${a}`;
  };
}
function nt(o, e) {
  return (n) => {
    const t = o();
    return _.extractDate(String(n), e) !== _.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function ot(o) {
  return (e) => !Number.isNaN(_.extractDate(String(e), o).getTime()) || "Date invalide";
}
const lt = {
  computeServerRules: ke
}, v = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const n = o, t = de(n.field.provideUniqKey), a = D();
    function s() {
      return a.value;
    }
    function u() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = l(a.value));
    }
    function l(g) {
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
    function r() {
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
    function c() {
      return lt.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function i(g) {
      a.value = g;
    }
    function d() {
      return m(a);
    }
    return e({
      reset: u,
      clear: r,
      getValue: s
    }), Y(() => {
      var q;
      u();
      const g = (q = me()) == null ? void 0 : q.exposed;
      g && t && t.registerRef(
        n.field.metadata.field_name,
        g
      );
    }), (g, q) => (f(), N("div", null, [
      n.field.resetable ? I(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: u }
      }, () => [
        (f(), b(p(m(t).getFormFactoryInstance().wrapperResetComponent), { reset: u }))
      ]) : O("", !0),
      I(g.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: i, field: g.field, injectForm: m(t), reset: u, clear: r, getComputedRules: c, getModelValueValue: d }
      })
    ]));
  }
}), at = /* @__PURE__ */ F({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, u = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        S(m(U), B(w(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, u = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        S(m(U), x(n(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = { class: "row items-center justify-end" }, st = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D();
    function t(l) {
      const r = l.injectForm.getFormFactoryInstance(), c = r.formSettings, i = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        // events
        onClear: l.clear,
        // display
        label: l.field.label,
        hint: l.field.hint,
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
        class: l.field.cssClass
      };
    }
    function a(l) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function s(l) {
      return {
        "onUpdate:modelValue": (r) => l.modelValueOnUpdate(r),
        modelValue: l.modelValue,
        mask: l.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function u() {
      n.value && n.value.hide();
    }
    return (l, r) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        S(m(U), B(w(t(c))), {
          append: h(() => [
            S(m(M), B(w(a())), {
              default: h(() => [
                S(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: h(() => [
                    S(m(he), B(w(s(c))), {
                      default: h(() => [
                        $("div", rt, [
                          S(m(E), {
                            onClick: u,
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
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        S(m(be), B(w(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ F({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, u = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        S(m(U), x(n(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(o) {
  return Symbol(o);
}
function j() {
  return 20;
}
const mt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: j(),
      offset: 0
    });
    function s(r) {
      const c = r.injectForm.getFormFactoryInstance(), i = c.formSettings, d = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => r.modelValueOnUpdate(g),
        modelValue: r.modelValue,
        lazyRules: i.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        // events
        onClear: r.clear,
        onFilter: u(r),
        // display
        label: r.field.label,
        hint: r.field.hint,
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
        class: r.field.cssClass
      };
    }
    function u(r) {
      return (c, i) => {
        const d = r.injectForm.getAssociationDataCallback();
        c === "" && (a.value = {
          limit: j(),
          offset: 0
        }), i(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: c,
            context: r.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function l(r) {
      setTimeout(() => {
        t.value = [
          {
            label: r.field.defaultDisplayValue ?? String(r.getModelValueValue()),
            value: r.getModelValueValue()
          }
        ];
      }, 0);
    }
    return (r, c) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: i }) => [
        S(m(H), x(s(i), {
          onVnodeMounted: (d) => l(i),
          options: t.value
        }), {
          options: h((d) => [
            m(n) ? (f(), b(m(J), B(x({ key: 0 }, d.itemProps)), {
              default: h(() => [
                S(m(X), null, {
                  default: h(() => [
                    S(m(Z), null, {
                      default: h(() => [
                        K(G(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(p(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted", "options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ft = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, gt = {};
function ht(o, e) {
  return " TODO json edit ? ";
}
const bt = /* @__PURE__ */ ft(gt, [["render", ht]]), _t = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D([]), t = D([]);
    function a(l) {
      const r = l.injectForm.getFormFactoryInstance(), c = r.formSettings, i = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        // events
        onClear: l.clear,
        onFilter: s,
        // display
        label: l.field.label,
        hint: l.field.hint,
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
        class: l.field.cssClass
      };
    }
    function s(l, r) {
      if (l === "") {
        r(() => {
          t.value = [...n.value];
        });
        return;
      }
      r(() => {
        const c = l.toLowerCase();
        t.value = n.value.filter((i) => i.label.toLowerCase().includes(c));
      });
    }
    function u(l) {
      n.value = Object.freeze(l.field.selectOptions ?? []), t.value = l.field.selectOptions ?? [];
    }
    return (l, r) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        S(m(H), x(a(c), {
          onVnodeMounted: u,
          options: t.value
        }), null, 16, ["options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ F({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: j(),
      offset: 0
    });
    function s(r) {
      const c = r.injectForm.getFormFactoryInstance(), i = c.formSettings, d = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => r.modelValueOnUpdate(g),
        modelValue: r.modelValue,
        lazyRules: i.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        // events
        onClear: r.clear,
        onFilter: u(r),
        // display
        label: r.field.label,
        hint: r.field.hint,
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
        class: r.field.cssClass
      };
    }
    function u(r) {
      return (c, i) => {
        const d = r.injectForm.getAssociationDataCallback();
        c === "" && (a.value = {
          limit: j(),
          offset: 0
        }), i(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: c,
            context: r.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function l(r) {
      setTimeout(() => {
        t.value = [
          {
            label: r.field.defaultDisplayValue ?? String(r.getModelValueValue()),
            value: r.getModelValueValue()
          }
        ];
      }, 0);
    }
    return (r, c) => (f(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: i }) => [
        S(m(H), x(s(i), {
          onVnodeMounted: (d) => l(i),
          options: t.value
        }), {
          options: h((d) => [
            m(n) ? (f(), b(m(J), B(x({ key: 0 }, d.itemProps)), {
              default: h(() => [
                S(m(X), null, {
                  default: h(() => [
                    S(m(Z), null, {
                      default: h(() => [
                        K(G(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(p(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted", "options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class P {
  constructor(e, n, t, a, s, u, l) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    C(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...V.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...V.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = a ?? V.getGlobalActionComponent(), this.sectionComponent = s ?? V.getGlobalSectionComponent(), this.wrapperResetComponent = u ?? V.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? V.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: at,
      text: it,
      number: ct,
      date: st,
      selectString: _t,
      selectBelongsTo: yt,
      selectHasMany: mt,
      checkbox: ut,
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((u) => {
      const l = [];
      u.fields.forEach((c) => {
        const i = P.getFieldComponentByFormFieldType(
          c.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, g = {
          type: c.field_type,
          metadata: c,
          label: c.label,
          hint: c.hint,
          cssClass: c.css_class,
          selectOptions: c.select_options,
          rules: c.rules,
          clearable: c.clearable,
          resetable: c.resetable,
          provideUniqKey: n,
          defaultDisplayValue: c.default_display_value,
          component: i,
          componentOptions: d
        };
        l.push(g);
      });
      const r = {
        label: u.label,
        icon: u.icon,
        cssClass: u.css_class,
        fields: l
      };
      a.push(r);
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
const St = {
  key: 0,
  class: "flex column"
}, vt = /* @__PURE__ */ F({
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
  setup(o, { expose: e }) {
    const n = o;
    let t = null;
    const a = Object.freeze(
      new P(
        n.resourceName,
        n.globalFormSettings
      )
    ), s = dt(_e()), u = D({}), l = D(), r = D(!1), c = D(!1);
    async function i() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), l.value = Object.freeze(
        a.getForm(
          t,
          s,
          n.context
        )
      ), r.value = !0;
    }
    async function d() {
      c.value = !0;
      const y = {};
      Object.entries(u.value).forEach((T) => {
        y[T[0]] = T[1].getValue();
      });
      const k = await n.submitForm({ formData: y });
      t && (t.resource_data = k), g(), c.value = !1;
    }
    function g() {
      Object.values(u.value).forEach((y) => {
        y.reset();
      });
    }
    function q() {
      Object.values(u.value).forEach((y) => {
        y.clear();
      });
    }
    function ee(y, k) {
      u.value[y] = k;
    }
    function te(y) {
      if (t)
        return t.resource_data[y];
    }
    function ne(y) {
      const k = Object.entries(u.value).find((T) => T[0] === y);
      return k ? k[1].getValue() : null;
    }
    function oe() {
      return a;
    }
    function le() {
      return l.value;
    }
    function ae() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return fe(s, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), Y(async () => {
      await i();
    }), (y, k) => r.value && l.value ? (f(), N("div", St, [
      $("div", {
        class: Q(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), N(z, null, A(l.value.sections, (T, ie) => (f(), b(p(m(a).sectionComponent), {
          key: ie,
          section: T
        }, {
          default: h(() => [
            (f(!0), N(z, null, A(T.fields, (R) => (f(), N(z, {
              key: R.metadata.field_name
            }, [
              y.$slots[R.metadata.field_name] ? (f(), b(v, {
                key: 1,
                field: R
              }, {
                default: h(({ propsWrapper: re }) => [
                  I(y.$slots, "default", { propsWrapper: re })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), b(p(R.component), {
                key: 0,
                field: R
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), b(p(m(a).actionComponent), {
        isLoadingSubmit: c.value,
        submit: d,
        clear: l.value.clearable ? q : void 0,
        reset: l.value.resetable ? g : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? I(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  V as Submit64,
  vt as Submit64Form
};
