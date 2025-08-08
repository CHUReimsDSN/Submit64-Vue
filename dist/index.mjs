var ae = Object.defineProperty;
var se = (l, e, t) => e in l ? ae(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var b = (l, e, t) => se(l, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as C, inject as ie, ref as O, onMounted as Z, getCurrentInstance as ue, createElementBlock as T, openBlock as s, renderSlot as $, createCommentVNode as x, createBlock as m, resolveDynamicComponent as I, unref as f, withCtx as g, createVNode as _, normalizeProps as N, guardReactiveProps as q, mergeProps as M, resolveDirective as ce, createElementVNode as R, withDirectives as de, normalizeClass as fe, toDisplayString as J, resolveComponent as me, provide as ge, Fragment as z, createTextVNode as he, renderList as U } from "vue";
import { date as c, QInput as Y, QIcon as W, QPopupProxy as be, QDate as _e, QBtn as H, QCheckbox as Ce, QSelect as K } from "quasar";
const A = class A {
  constructor() {
    b(this, "_formSettings");
    b(this, "_formStyleConfig");
    b(this, "_actionComponent");
    b(this, "_sectionComponent");
    b(this, "_wrapperResetComponent");
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = e;
  }
  static registerGlobalFormStyleSetting(e) {
    this._instance._formStyleConfig = e;
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
};
b(A, "_instance", new A());
let k = A;
const ee = Symbol();
function Se(l, e) {
  const t = [], n = [];
  return l.forEach((r) => {
    switch (r.type) {
      case "required":
        t.push(X());
        break;
      case "absence":
        t.push(Fe());
        break;
      case "acceptance":
        t.push(De());
        break;
      case "inclusion":
        const a = r;
        t.push(te(a.including));
        break;
      case "exclusion":
        const o = r;
        t.push(ye(o.excluding));
        break;
      case "backend":
        t.push(X());
        break;
      case "allowNull":
        n.push("allowNull");
        break;
      case "allowBlank":
        n.push("allowBlank");
        break;
      case "positiveNumber":
        t.push(Ne());
        break;
      case "lessThanOrEqualNumber":
        const i = r;
        if (i.less_than) {
          t.push(
            qe(
              () => i.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const u = r;
        if (u.less_than) {
          t.push(Be(() => u.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const h = r;
        if (h.greater_than) {
          t.push(
            ke(
              () => h.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const D = r;
        if (D.greater_than) {
          t.push(
            ve(() => D.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const V = r;
        if (V.equal_to) {
          t.push(xe(() => V.equal_to));
          break;
        }
      case "otherThanNumber":
        const E = r;
        if (E.other_than) {
          t.push(Ve(() => E.other_than));
          break;
        }
      case "numberIntegerOnly":
        t.push(Oe());
        break;
      case "numberNumericOnly":
        t.push(Re());
        break;
      case "numberEvenOnly":
        t.push($e());
        break;
      case "numberOddOnly":
        t.push(Ee());
        break;
      case "lessThanOrEqualStringLength":
        const w = r;
        if (w.less_than) {
          t.push(
            we(
              () => w.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const L = r;
        if (L.less_than) {
          t.push(
            Le(() => L.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const j = r;
        if (j.greater_than) {
          t.push(
            je(
              () => j.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const G = r;
        if (G.greater_than) {
          t.push(
            Ge(
              () => G.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const d = r;
        if (d.equal_to) {
          t.push(Ie(() => d.equal_to));
          break;
        }
      case "betweenStringLength":
        const S = r;
        t.push(
          ze(
            () => S.min,
            () => S.max
          )
        );
        break;
      case "equalToStringLength":
        const y = r;
        t.push(He(() => y.equal_to));
        break;
      case "otherThanString":
        const P = r;
        t.push(Ae(() => P.other_than));
        break;
      case "lessThanOrEqualDate":
        const B = r;
        t.push(v(e.dateFormat)), t.push(
          Ye(
            () => B.less_than,
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const Q = r;
        t.push(v(e.dateFormat)), t.push(
          Pe(
            () => Q.less_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const ne = r;
        t.push(v(e.dateFormat)), t.push(
          Qe(
            () => ne.greater_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const le = r;
        t.push(v(e.dateFormat)), t.push(
          Je(
            () => le.greater_than,
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const oe = r;
        t.push(v(e.dateFormat)), t.push(
          Ke(
            () => oe.equal_to,
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const re = r;
        t.push(v(e.dateFormat)), t.push(
          Ue(
            () => re.other_than,
            e.dateFormat
          )
        );
        break;
    }
  }), n.length > 0 ? n.map((r) => {
    switch (r) {
      case "allowBlank":
        return Te(t);
      case "allowNull":
        return pe(t);
    }
  }) : t;
}
function X() {
  return (l) => !!l || "Ce champ est requis";
}
function te(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function ye(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${te.toString()}`
  );
}
function Fe() {
  return (l) => !l || "Ce champ doit être vide";
}
function De() {
  return (l) => !!l || "Doit être accepté";
}
function pe(l) {
  return (e) => (e === null || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Te(l) {
  return (e) => (e === "" || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Ne() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function qe(l) {
  return (e) => {
    const t = l();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Be(l) {
  return (e) => {
    const t = l();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ke(l) {
  return (e) => {
    const t = l();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ve(l) {
  return (e) => {
    const t = l();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function xe(l, e) {
  const t = l();
  return (n) => Number(n) === t || `Égale à ${t}`;
}
function Ve(l, e) {
  const t = l();
  return (n) => Number(n) !== t || `Doit être différent de ${l}`;
}
function Oe() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Re() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function $e() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function Ee() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function we(l) {
  const e = l();
  return (t) => String(t).length <= e || `Inf. ou égal à ${e}`;
}
function Le(l) {
  const e = l();
  return (t) => String(t).length < e || `Inf. à ${e}`;
}
function je(l) {
  const e = l();
  return (t) => String(t).length >= e || `Sup. ou égal à ${e}`;
}
function Ge(l) {
  const e = l();
  return (t) => String(t).length > e || `Sup. à ${e}`;
}
function ze(l, e) {
  const t = l(), n = e();
  return (r) => String(r).length >= t && String(r).length <= n || `Entre ${t} et ${n}`;
}
function Ie(l, e) {
  const t = l();
  return (n) => String(n) === t || `Égale à ${t}`;
}
function He(l) {
  const e = l();
  return (t) => String(t).length === e || `Doit contenir ${e} caractères`;
}
function Ae(l, e) {
  const t = l();
  return (n) => String(n) !== t || `Doit être différent de ${t}`;
}
function Ye(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) <= c.extractDate(t, e) || `Inf. ou égal à ${c.formatDate(t, e)}`;
}
function Pe(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) < c.extractDate(t, e) || `Inf. à ${c.formatDate(t, e)}`;
}
function Qe(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) >= c.extractDate(t, e) || `Sup. ou égal à ${c.formatDate(t, e)}`;
}
function Je(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) > c.extractDate(t, e) || `Sup. à ${c.formatDate(t, e)}`;
}
function Ke(l, e, t) {
  const n = l();
  return (r) => c.extractDate(String(r), e) === c.extractDate(n, e) || `Égale à ${c.extractDate(n, e)}`;
}
function Ue(l, e, t) {
  const n = l();
  return (r) => c.extractDate(String(r), e) !== c.extractDate(n, e) || `Doit être différent de ${n}`;
}
function v(l) {
  return (e) => !Number.isNaN(c.extractDate(String(e), l).getTime()) || "Date invalide";
}
const Xe = {
  computeServerRules: Se
}, F = /* @__PURE__ */ C({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const t = l, n = ie(ee), r = O();
    function a() {
      return r.value;
    }
    function o() {
      n && (r.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ));
    }
    function i() {
      switch (typeof r.value) {
        case "boolean":
          r.value = !1;
        case "string":
          r.value = "";
        case "number":
          r.value = 0;
        case "object":
          r.value = {};
      }
    }
    function u() {
      return Xe.computeServerRules(
        t.field.rules ?? [],
        n.getFormFactory().formSettings
      );
    }
    return e({
      reset: o,
      clear: i,
      getValue: a
    }), Z(() => {
      var D;
      o();
      const h = (D = ue()) == null ? void 0 : D.proxy;
      h && n && n.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, D) => (s(), T("div", null, [
      t.field.resetable ? $(h.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (s(), m(I(f(n).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : x("", !0),
      $(h.$slots, "default", {
        propsWrapper: { modelValue: r.value, field: h.field, injectForm: f(n), reset: o, clear: i, getComputedRules: u }
      })
    ]));
  }
}), Ze = /* @__PURE__ */ C({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(Y), N(q(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Me = /* @__PURE__ */ C({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(Y), M(t(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), We = { class: "row items-center justify-end" }, et = /* @__PURE__ */ C({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(a) {
      const o = a.injectForm.getFormFactory(), i = o.formSettings, u = o.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: i.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
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
        class: a.field.cssClass
      };
    }
    function n(a) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function r(a) {
      return {
        modelValue: a.modelValue,
        mask: a.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    return (a, o) => {
      const i = ce("close-popup");
      return s(), m(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: u }) => [
          _(f(Y), N(q(t(u))), {
            append: g(() => [
              _(f(W), N(q(n())), {
                default: g(() => [
                  _(f(be), {
                    cover: "",
                    "transition-show": "scale",
                    "transition-hide": "scale"
                  }, {
                    default: g(() => [
                      _(f(_e), N(q(r(u))), {
                        default: g(() => [
                          R("div", We, [
                            de(_(f(H), {
                              label: "Fermer",
                              color: "secondary",
                              flat: "",
                              "no-caps": ""
                            }, null, 512), [
                              [i]
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)
            ]),
            _: 2
          }, 1040)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), tt = /* @__PURE__ */ C({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        // display
        label: n.field.label,
        dense: r.fieldDense,
        color: r.fieldColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(Ce), N(q(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), nt = { class: "flex row items-center" }, lt = { class: "text-body1 text-weight-medium" }, ot = { class: "flex column q-gutter-sm" }, rt = /* @__PURE__ */ C({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (t, n) => (s(), T("div", {
      class: fe(["flex column", e.section.cssClass])
    }, [
      R("div", nt, [
        e.section.icon ? (s(), m(f(W), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
        R("div", lt, J(e.section.label), 1)
      ]),
      R("div", ot, [
        $(t.$slots, "default")
      ])
    ], 2));
  }
}), at = { class: "flex row items-center no-wrap" }, st = /* @__PURE__ */ C({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => (s(), T("div", at, [
      _(f(H), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (s(), m(f(H), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : x("", !0),
      e.clear ? (s(), m(f(H), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : x("", !0)
    ]));
  }
}), it = /* @__PURE__ */ C({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(Y), M(t(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = /* @__PURE__ */ C({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(K), N(q(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, dt = {};
function ft(l, e) {
  return " TODO json edit ? ";
}
const mt = /* @__PURE__ */ ct(dt, [["render", ft]]), gt = /* @__PURE__ */ C({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: n.field.selectOptions || [],
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(K), N(q(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ht = /* @__PURE__ */ C({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: n.field.clearable,
        rules: n.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: n.clear,
        // display
        label: n.field.label,
        hint: n.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => (s(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(K), N(q(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), bt = /* @__PURE__ */ C({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => {
      const r = me("q-icon");
      return s(), m(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (a) => e.reset())
      });
    };
  }
});
class p {
  constructor(e, t, n, r, a, o) {
    b(this, "resourceName");
    b(this, "formSettings");
    b(this, "formStyleConfig");
    b(this, "actionComponent");
    b(this, "sectionComponent");
    b(this, "wrapperResetComponent");
    this.resourceName = e, this.formSettings = {
      ...p.getDefaultFormSettings(),
      ...k.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...p.getDefaultFormStyleSettings(),
      ...k.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = r ?? k.getGlobalActionComponent() ?? p.getDefaultActionComponent(), this.sectionComponent = a ?? k.getGlobalSectionComponent() ?? p.getDefaultSectionComponent(), this.wrapperResetComponent = o ?? k.getGlobalWrapperResetComponent() ?? p.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Ze,
      text: Me,
      number: it,
      date: et,
      selectString: gt,
      selectBelongsTo: ht,
      selectHasMany: ut,
      checkbox: tt,
      object: mt
    }[e];
  }
  static getDefaultFormSettings() {
    return {
      rulesBehaviour: "lazy",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY:HHmm",
      renderBackendHint: !0
    };
  }
  static getDefaultFormStyleSettings() {
    return {
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
    };
  }
  static getDefaultActionComponent() {
    return st;
  }
  static getDefaultSectionComponent() {
    return rt;
  }
  static getDefaultWrapperResetComponent() {
    return bt;
  }
  getAllField(e) {
    const t = [];
    return e.form.sections.forEach((r) => {
      const a = [];
      r.fields.forEach((i) => {
        const u = p.getFieldComponentByFormFieldType(
          i.form_field_type
        ), h = {
          type: i.form_field_type,
          metadata: i,
          label: i.form_label,
          hint: i.form_hint,
          cssClass: i.form_css_class,
          selectOptions: i.form_select_options,
          rules: i.form_rules,
          clearable: i.clearable,
          resetable: i.resetable,
          component: u
        };
        a.push(h);
      });
      const o = {
        label: r.label,
        fields: a
      };
      t.push(o);
    }), {
      sections: t,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1
    };
  }
}
const _t = {
  key: 0,
  class: "flex q-pa-sm q-gutter-sm"
}, Ft = /* @__PURE__ */ C({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    globalFormSettings: {},
    context: {}
  },
  setup(l, { expose: e }) {
    const t = l;
    let n = null;
    const r = Object.freeze(
      new p(
        t.resourceName,
        t.globalFormSettings
      )
    ), a = O({}), o = O(), i = O(!1), u = O(!1);
    async function h() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), o.value = Object.freeze(
        r.getAllField(n)
      ), i.value = !0;
    }
    async function D() {
      u.value = !0;
      const d = {};
      Object.entries(a.value).forEach((y) => {
        d[y[0]] = y[1].getValue();
      });
      const S = await t.submitForm({ formData: d });
      n && (n.resource_data = S), V(), u.value = !1;
    }
    function V() {
      Object.values(a.value).forEach((d) => {
        d.reset();
      });
    }
    function E() {
      Object.values(a.value).forEach((d) => {
        d.clear();
      });
    }
    function w(d, S) {
      a.value[d] = S;
    }
    function L(d) {
      if (n)
        return n.resource_data[d];
    }
    function j(d) {
      const S = Object.entries(a.value).find((y) => y[0] === d);
      return S ? S[1].getValue() : null;
    }
    function G() {
      return r;
    }
    return ge(ee, {
      registerRef: w,
      getDefaultDataByFieldName: L,
      getFieldDataByFieldName: j,
      getFormFactory: G
    }), e({}), Z(async () => {
      await h();
    }), (d, S) => (s(), T(z, null, [
      he(J(i.value) + " ", 1),
      R("pre", null, J(o.value), 1),
      i.value && o.value ? (s(), T("div", _t, [
        (s(!0), T(z, null, U(o.value.sections, (y, P) => (s(), m(I(f(r).sectionComponent), {
          key: P,
          section: y
        }, {
          default: g(() => [
            (s(!0), T(z, null, U(y.fields, (B) => (s(), T(z, {
              key: B.metadata.field_name
            }, [
              d.$slots[B.metadata.field_name] ? (s(), m(F, {
                key: 1,
                field: B
              }, {
                default: g(({ propsWrapper: Q }) => [
                  $(d.$slots, "default", { propsWrapper: Q })
                ]),
                _: 2
              }, 1032, ["field"])) : (s(), m(I(B.component), {
                key: 0,
                field: B
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128)),
        (s(), m(I(f(r).actionComponent), {
          isLoadingSubmit: u.value,
          submit: D,
          clear: o.value.clearable ? E : void 0,
          reset: o.value.resetable ? V : void 0
        }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
        d.$slots.more_actions ? $(d.$slots, "more_actions", {
          key: 0,
          propsForm: { generatedForm: o.value }
        }) : x("", !0)
      ])) : x("", !0)
    ], 64));
  }
});
export {
  k as Submit64,
  Ft as Submit64Form
};
