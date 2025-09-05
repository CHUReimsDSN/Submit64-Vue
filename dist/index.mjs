var ue = Object.defineProperty;
var ce = (o, e, n) => e in o ? ue(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var C = (o, e, n) => ce(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as v, createElementBlock as x, openBlock as m, createVNode as S, createBlock as b, createCommentVNode as R, unref as f, normalizeClass as X, createElementVNode as w, toDisplayString as P, renderSlot as E, resolveComponent as de, inject as fe, ref as F, onMounted as Z, getCurrentInstance as me, resolveDynamicComponent as p, withCtx as g, normalizeProps as O, guardReactiveProps as I, mergeProps as q, createTextVNode as Y, provide as ge, Fragment as Q, renderList as J } from "vue";
import { QBtn as z, QIcon as W, date as h, QInput as A, QPopupProxy as be, QDate as he, QCheckbox as _e, QSelect as K, QItem as ee, QItemSection as te, QItemLabel as ne, uid as Se } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ v({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => (m(), x("div", ye, [
      S(f(z), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (m(), b(f(z), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : R("", !0),
      e.clear ? (m(), b(f(z), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : R("", !0)
    ]));
  }
}), Fe = { class: "flex row items-center" }, De = { class: "text-body1 text-weight-medium" }, ve = { class: "flex column q-gutter-sm" }, ke = /* @__PURE__ */ v({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(o) {
    const e = o;
    return (n, t) => (m(), x("div", {
      class: X(["flex column", e.section.cssClass])
    }, [
      w("div", Fe, [
        e.section.icon ? (m(), b(f(W), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        w("div", De, P(e.section.label), 1)
      ]),
      w("div", ve, [
        E(n.$slots, "default")
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ v({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => {
      const a = de("q-icon");
      return m(), b(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), H = class H {
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
    }, this._actionComponent = Ce, this._sectionComponent = ke, this._wrapperResetComponent = Ve, this._associationDisplayDictonary = {};
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
C(H, "_instance", new H());
let T = H;
function Ne(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), s = (c, i, d) => c[i] ? d ? () => u(c[i]) : () => c[i] : c.compare_to ? () => n.getFieldDataByFieldName(c.compare_to) : () => "", u = (c) => String(
    h.formatDate(
      h.extractDate(c, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], r = [];
  switch (e) {
    case "date":
      l.push(lt(t.dateFormat));
  }
  return o.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        l.push(Te());
        break;
      case "absence":
        l.push(xe());
        break;
      case "acceptance":
        l.push(Oe());
        break;
      case "inclusion":
        l.push(oe(i.including));
        break;
      case "exclusion":
        l.push(Be(i.excluding));
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
        l.push(Re());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          $e(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          we(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Ie(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ee(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          je(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Le(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Ue());
        break;
      case "numberNumericOnly":
        l.push(ze());
        break;
      case "numberEvenOnly":
        l.push(Ge());
        break;
      case "numberOddOnly":
        l.push(He());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Pe(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Ae(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Qe(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Ye(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Je(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Me(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ke(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Xe(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ze(
            s(i, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          We(
            s(i, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          et(
            s(i, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          tt(
            s(i, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          nt(
            s(i, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          ot(
            s(i, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((c) => {
    switch (c) {
      case "allowBlank":
        return pe(l);
      case "allowNull":
        return qe(l);
    }
  }) : l;
}
function Te() {
  return (o) => !!o || "Ce champ est requis";
}
function oe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Be(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${oe.toString()}`
  );
}
function xe() {
  return (o) => !o || "Ce champ doit être vide";
}
function Oe() {
  return (o) => !!o || "Doit être accepté";
}
function qe(o) {
  return (e) => (e === null || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function pe(o) {
  return (e) => (e === "" || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Re() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function $e(o) {
  return (e) => {
    const n = o();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function we(o) {
  return (e) => {
    const n = o();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function Ie(o) {
  return (e) => {
    const n = o();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Ee(o) {
  return (e) => {
    const n = o();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function je(o, e) {
  return (n) => {
    const t = o();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function Le(o, e) {
  return (n) => {
    const t = o();
    return Number(n) !== t || `Doit être différent de ${o}`;
  };
}
function Ue() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function ze() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Ge() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function He() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Pe(o) {
  return (e) => {
    const n = o();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Ae(o) {
  return (e) => {
    const n = o();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Qe(o) {
  return (e) => {
    const n = o();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function Ye(o) {
  return (e) => {
    const n = o();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Ke(o, e) {
  return (n) => {
    const t = o(), a = e();
    return String(n).length >= t && String(n).length <= a || `Entre ${t} et ${a}`;
  };
}
function Me(o, e) {
  return (n) => {
    const t = o();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Je(o) {
  return (e) => {
    const n = o();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Xe(o) {
  return (e) => {
    const n = o();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Ze(o, e) {
  return (n) => {
    const t = o(), a = h.extractDate(String(n), e), s = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= s || `Inf. ou égal à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = h.extractDate(String(n), e), s = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < s || `Inf. à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = h.extractDate(String(n), e), s = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= s || `Sup. ou égal à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = h.extractDate(String(n), e), s = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > s || `Sup. à ${t}`;
  };
}
function nt(o, e) {
  return (n) => {
    const t = o(), a = h.extractDate(String(n), e), s = h.extractDate(t, e);
    return a === s || `Égale à ${a}`;
  };
}
function ot(o, e) {
  return (n) => {
    const t = o();
    return h.extractDate(String(n), e) !== h.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function lt(o) {
  return (e) => !Number.isNaN(h.extractDate(String(e), o).getTime()) || "Date invalide";
}
const at = {
  computeServerRules: Ne
}, N = /* @__PURE__ */ v({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const n = o, t = fe(n.field.provideUniqKey), a = F(), s = F([]);
    function u() {
      return a.value;
    }
    function l() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = r(a.value));
    }
    function r(y) {
      switch (n.field.type) {
        case "date":
          return h.formatDate(
            h.extractDate(
              String(y),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return y;
    }
    function c() {
      switch (n.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = h.formatDate(
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
    function i() {
      return at.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function d(y) {
      a.value = y;
    }
    function D() {
      return f(a);
    }
    function j(y) {
      s.value = y;
    }
    return e({
      reset: l,
      clear: c,
      getValue: u,
      setupBackendErrors: j
    }), Z(() => {
      var $;
      l();
      const y = ($ = me()) == null ? void 0 : $.exposed;
      y && t && t.registerRef(
        n.field.metadata.field_name,
        y
      );
    }), (y, $) => (m(), x("div", null, [
      n.field.resetable ? E(y.$slots, "reset", {
        key: 0,
        actionProps: { reset: l }
      }, () => [
        (m(), b(p(f(t).getFormFactoryInstance().wrapperResetComponent), { reset: l }))
      ]) : R("", !0),
      E(y.$slots, "default", {
        propsWrapper: { modelValue: a.value, backendErrors: s.value, modelValueOnUpdate: d, field: y.field, injectForm: f(t), reset: l, clear: c, getComputedRules: i, getModelValueValue: D }
      })
    ]));
  }
}), it = /* @__PURE__ */ v({
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
    return (t, a) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        S(f(A), O(I(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = /* @__PURE__ */ v({
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
    return (t, a) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        S(f(A), q(n(s), { type: "textarea" }), {
          error: g((u) => [
            Y(P(u), 1)
          ]),
          _: 2
        }, 1040)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = { class: "row items-center justify-end" }, ut = /* @__PURE__ */ v({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = F();
    function t(l) {
      const r = l.injectForm.getFormFactoryInstance(), c = r.formSettings, i = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        readonly: l.field.readonly,
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
    return (l, r) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        S(f(A), O(I(t(c))), {
          append: g(() => [
            S(f(W), O(I(a())), {
              default: g(() => [
                S(f(be), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    S(f(he), O(I(s(c))), {
                      default: g(() => [
                        w("div", st, [
                          S(f(z), {
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
}), ct = /* @__PURE__ */ v({
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
    return (t, a) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        S(f(_e), O(I(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), dt = /* @__PURE__ */ v({
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
    return (t, a) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        S(f(A), q(n(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function ft(o) {
  return Symbol(o);
}
function G() {
  return 20;
}
const mt = /* @__PURE__ */ v({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = F([]), a = F({
      limit: G(),
      offset: 0
    });
    function s(r) {
      const c = r.injectForm.getFormFactoryInstance(), i = c.formSettings, d = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (D) => r.modelValueOnUpdate(D),
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
          limit: G(),
          offset: 0
        }), i(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: c,
            context: r.injectForm.getForm().context
          }).then((D) => {
            t.value = D.rows;
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
    return (r, c) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: i }) => [
        S(f(K), q(s(i), {
          onVnodeMounted: (d) => l(i),
          options: t.value
        }), {
          options: g((d) => [
            f(n) ? (m(), b(f(ee), O(q({ key: 0 }, d.itemProps)), {
              default: g(() => [
                S(f(te), null, {
                  default: g(() => [
                    S(f(ne), null, {
                      default: g(() => [
                        Y(P(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), b(p(f(n)), {
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
}), gt = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, bt = {};
function ht(o, e) {
  return " TODO json edit ? ";
}
const _t = /* @__PURE__ */ gt(bt, [["render", ht]]), St = /* @__PURE__ */ v({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = F([]), t = F([]);
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
    return (l, r) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        S(f(K), q(a(c), {
          onVnodeMounted: u,
          options: t.value
        }), null, 16, ["options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ v({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = F([]), a = F({
      limit: G(),
      offset: 0
    });
    function s(r) {
      const c = r.injectForm.getFormFactoryInstance(), i = c.formSettings, d = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (D) => r.modelValueOnUpdate(D),
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
          limit: G(),
          offset: 0
        }), i(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: c,
            context: r.injectForm.getForm().context
          }).then((D) => {
            t.value = D.rows;
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
    return (r, c) => (m(), b(N, {
      field: e.field
    }, {
      default: g(({ propsWrapper: i }) => [
        S(f(K), q(s(i), {
          onVnodeMounted: (d) => l(i),
          options: t.value
        }), {
          options: g((d) => [
            f(n) ? (m(), b(f(ee), O(q({ key: 0 }, d.itemProps)), {
              default: g(() => [
                S(f(te), null, {
                  default: g(() => [
                    S(f(ne), null, {
                      default: g(() => [
                        Y(P(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), b(p(f(n)), {
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
class M {
  constructor(e, n, t, a, s, u, l) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    C(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...T.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...T.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = a ?? T.getGlobalActionComponent(), this.sectionComponent = s ?? T.getGlobalSectionComponent(), this.wrapperResetComponent = u ?? T.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? T.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: it,
      text: rt,
      number: dt,
      date: ut,
      selectString: St,
      selectBelongsTo: yt,
      selectHasMany: mt,
      checkbox: ct,
      object: _t
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((u) => {
      const l = [];
      u.fields.forEach((c) => {
        const i = M.getFieldComponentByFormFieldType(
          c.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, D = {
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
        l.push(D);
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
const Ct = {
  key: 0,
  class: "flex column"
}, kt = /* @__PURE__ */ v({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    submitForm: {},
    resourceId: {},
    getAssociationData: {},
    formSettings: {},
    onSubmitFail: {},
    onSubmitSuccess: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const n = o;
    let t = null;
    const a = Object.freeze(
      new M(
        n.resourceName,
        n.formSettings
      )
    ), s = ft(Se()), u = F({}), l = F(), r = F(!1), c = F(!1), i = F("create");
    async function d() {
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
      ), n.resourceId && (r.value = !0);
    }
    async function D() {
      var B, L;
      c.value = !0;
      const _ = {};
      Object.entries(u.value).forEach((k) => {
        _[k[0]] = k[1].getValue();
      });
      const V = await n.submitForm({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        resourceData: _,
        context: n.context
      });
      V.success ? (i.value === "create" && (i.value = "edit"), t && V.resource_data && (t.resource_data = V.resource_data), j(), (L = n.onSubmitSuccess) == null || L.call(n)) : (Object.entries(u.value).forEach((k) => {
        const U = V.errors[k[0]];
        U && k[1].setupBackendErrors(U);
      }), (B = n.onSubmitFail) == null || B.call(n)), c.value = !1;
    }
    function j() {
      Object.values(u.value).forEach((_) => {
        _.reset();
      });
    }
    function y() {
      Object.values(u.value).forEach((_) => {
        _.clear();
      });
    }
    function $(_, V) {
      u.value[_] = V;
    }
    function le(_) {
      if (t)
        return t.resource_data[_];
    }
    function ae(_) {
      const V = Object.entries(u.value).find((B) => B[0] === _);
      return V ? V[1].getValue() : null;
    }
    function ie() {
      return a;
    }
    function re() {
      return l.value;
    }
    function se() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return ge(s, {
      registerRef: $,
      getDefaultDataByFieldName: le,
      getFieldDataByFieldName: ae,
      getFormFactoryInstance: ie,
      getForm: re,
      getAssociationDataCallback: se
    }), e({}), Z(async () => {
      await d();
    }), (_, V) => r.value && l.value ? (m(), x("div", Ct, [
      w("div", {
        class: X(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), x(Q, null, J(l.value.sections, (B, L) => (m(), b(p(f(a).sectionComponent), {
          key: L,
          section: B
        }, {
          default: g(() => [
            (m(!0), x(Q, null, J(B.fields, (k) => (m(), x(Q, {
              key: k.metadata.field_name
            }, [
              _.$slots[k.metadata.field_name] ? (m(), b(N, {
                key: 1,
                field: k
              }, {
                default: g(({ propsWrapper: U }) => [
                  E(_.$slots, "default", { propsWrapper: U })
                ]),
                _: 2
              }, 1032, ["field"])) : (m(), b(p(k.component), {
                key: 0,
                field: k
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (m(), b(p(f(a).actionComponent), {
        isLoadingSubmit: c.value,
        submit: D,
        clear: l.value.clearable ? y : void 0,
        reset: l.value.resetable ? j : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      _.$slots.more_actions ? E(_.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : R("", !0)
    ])) : R("", !0);
  }
});
export {
  T as Submit64,
  kt as Submit64Form
};
