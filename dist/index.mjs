var re = Object.defineProperty;
var ae = (l, e, t) => e in l ? re(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var b = (l, e, t) => ae(l, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as C, inject as se, ref as O, onMounted as X, getCurrentInstance as ie, createElementBlock as k, openBlock as i, renderSlot as R, createCommentVNode as x, createBlock as m, resolveDynamicComponent as G, unref as f, withCtx as g, createVNode as _, normalizeProps as T, guardReactiveProps as N, mergeProps as Z, resolveDirective as ue, createElementVNode as z, withDirectives as ce, normalizeClass as de, toDisplayString as fe, resolveComponent as me, provide as ge, Fragment as Q, renderList as K } from "vue";
import { date as c, QInput as A, QIcon as M, QPopupProxy as he, QDate as be, QBtn as I, QCheckbox as _e, QSelect as J } from "quasar";
const H = class H {
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
b(H, "_instance", new H());
let B = H;
const W = Symbol();
function Ce(l, e) {
  const t = [], n = [];
  return l.forEach((r) => {
    switch (r.type) {
      case "required":
        t.push(U());
        break;
      case "absence":
        t.push(ye());
        break;
      case "acceptance":
        t.push(Fe());
        break;
      case "inclusion":
        const a = r;
        t.push(ee(a.including));
        break;
      case "exclusion":
        const o = r;
        t.push(Se(o.excluding));
        break;
      case "backend":
        t.push(U());
        break;
      case "allowNull":
        n.push("allowNull");
        break;
      case "allowBlank":
        n.push("allowBlank");
        break;
      case "positiveNumber":
        t.push(Te());
        break;
      case "lessThanOrEqualNumber":
        const u = r;
        if (u.less_than) {
          t.push(
            Ne(
              () => u.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const s = r;
        if (s.less_than) {
          t.push(qe(() => s.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const h = r;
        if (h.greater_than) {
          t.push(
            Be(
              () => h.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const D = r;
        if (D.greater_than) {
          t.push(
            ke(() => D.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const V = r;
        if (V.equal_to) {
          t.push(ve(() => V.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = r;
        if ($.other_than) {
          t.push(xe(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        t.push(Ve());
        break;
      case "numberNumericOnly":
        t.push(Oe());
        break;
      case "numberEvenOnly":
        t.push(Re());
        break;
      case "numberOddOnly":
        t.push($e());
        break;
      case "lessThanOrEqualStringLength":
        const E = r;
        if (E.less_than) {
          t.push(
            Ee(
              () => E.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const w = r;
        if (w.less_than) {
          t.push(
            we(() => w.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = r;
        if (L.greater_than) {
          t.push(
            Le(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = r;
        if (j.greater_than) {
          t.push(
            je(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const d = r;
        if (d.equal_to) {
          t.push(ze(() => d.equal_to));
          break;
        }
      case "betweenStringLength":
        const S = r;
        t.push(
          Ge(
            () => S.min,
            () => S.max
          )
        );
        break;
      case "equalToStringLength":
        const y = r;
        t.push(Ie(() => y.equal_to));
        break;
      case "otherThanString":
        const Y = r;
        t.push(He(() => Y.other_than));
        break;
      case "lessThanOrEqualDate":
        const q = r;
        t.push(v(e.dateFormat)), t.push(
          Ae(
            () => q.less_than,
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = r;
        t.push(v(e.dateFormat)), t.push(
          Ye(
            () => P.less_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = r;
        t.push(v(e.dateFormat)), t.push(
          Pe(
            () => te.greater_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = r;
        t.push(v(e.dateFormat)), t.push(
          Qe(
            () => ne.greater_than,
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = r;
        t.push(v(e.dateFormat)), t.push(
          Je(
            () => le.equal_to,
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = r;
        t.push(v(e.dateFormat)), t.push(
          Ke(
            () => oe.other_than,
            e.dateFormat
          )
        );
        break;
    }
  }), n.length > 0 ? n.map((r) => {
    switch (r) {
      case "allowBlank":
        return pe(t);
      case "allowNull":
        return De(t);
    }
  }) : (console.log(t), t);
}
function U() {
  return (l) => !!l || "Ce champ est requis";
}
function ee(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function Se(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function ye() {
  return (l) => !l || "Ce champ doit être vide";
}
function Fe() {
  return (l) => !!l || "Doit être accepté";
}
function De(l) {
  return (e) => (e === null || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function pe(l) {
  return (e) => (e === "" || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Te() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function Ne(l) {
  return (e) => {
    const t = l();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function qe(l) {
  return (e) => {
    const t = l();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Be(l) {
  return (e) => {
    const t = l();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ke(l) {
  return (e) => {
    const t = l();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function ve(l, e) {
  const t = l();
  return (n) => Number(n) === t || `Égale à ${t}`;
}
function xe(l, e) {
  const t = l();
  return (n) => Number(n) !== t || `Doit être différent de ${l}`;
}
function Ve() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Oe() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function Re() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function $e() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function Ee(l) {
  const e = l();
  return (t) => String(t).length <= e || `Inf. ou égal à ${e}`;
}
function we(l) {
  const e = l();
  return (t) => String(t).length < e || `Inf. à ${e}`;
}
function Le(l) {
  const e = l();
  return (t) => String(t).length >= e || `Sup. ou égal à ${e}`;
}
function je(l) {
  const e = l();
  return (t) => String(t).length > e || `Sup. à ${e}`;
}
function Ge(l, e) {
  const t = l(), n = e();
  return (r) => String(r).length >= t && String(r).length <= n || `Entre ${t} et ${n}`;
}
function ze(l, e) {
  const t = l();
  return (n) => String(n) === t || `Égale à ${t}`;
}
function Ie(l) {
  const e = l();
  return (t) => String(t).length === e || `Doit contenir ${e} caractères`;
}
function He(l, e) {
  const t = l();
  return (n) => String(n) !== t || `Doit être différent de ${t}`;
}
function Ae(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) <= c.extractDate(t, e) || `Inf. ou égal à ${c.formatDate(t, e)}`;
}
function Ye(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) < c.extractDate(t, e) || `Inf. à ${c.formatDate(t, e)}`;
}
function Pe(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) >= c.extractDate(t, e) || `Sup. ou égal à ${c.formatDate(t, e)}`;
}
function Qe(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) > c.extractDate(t, e) || `Sup. à ${c.formatDate(t, e)}`;
}
function Je(l, e, t) {
  const n = l();
  return (r) => c.extractDate(String(r), e) === c.extractDate(n, e) || `Égale à ${c.extractDate(n, e)}`;
}
function Ke(l, e, t) {
  const n = l();
  return (r) => c.extractDate(String(r), e) !== c.extractDate(n, e) || `Doit être différent de ${n}`;
}
function v(l) {
  return (e) => !Number.isNaN(c.extractDate(String(e), l).getTime()) || "Date invalide";
}
const Ue = {
  computeServerRules: Ce
}, F = /* @__PURE__ */ C({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const t = l, n = se(W), r = O();
    function a() {
      return r.value;
    }
    function o() {
      n && (r.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ));
    }
    function u() {
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
    function s() {
      return Ue.computeServerRules(
        t.field.rules ?? [],
        n.getFormFactory().formSettings
      );
    }
    return e({
      reset: o,
      clear: u,
      getValue: a
    }), X(() => {
      var D;
      o();
      const h = (D = ie()) == null ? void 0 : D.proxy;
      h && n && n.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, D) => (i(), k("div", null, [
      t.field.resetable ? R(h.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (i(), m(G(f(n).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : x("", !0),
      R(h.$slots, "default", {
        propsWrapper: { modelValue: r.value, field: h.field, injectForm: f(n), reset: o, clear: u, getComputedRules: s }
      })
    ]));
  }
}), Xe = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(A), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Ze = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(A), Z(t(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Me = { class: "row items-center justify-end" }, We = /* @__PURE__ */ C({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(a) {
      const o = a.injectForm.getFormFactory(), u = o.formSettings, s = o.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: s.fieldOutlined,
        filled: s.fieldFilled,
        standout: s.fieldStandout,
        borderless: s.fieldBorderless,
        rounded: s.fieldRounded,
        square: s.fieldSquare,
        dense: s.fieldDense,
        hideBottomSpace: s.fieldHideBottomSpace,
        color: s.fieldColor,
        bgColor: s.fieldBgColor,
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
      const u = ue("close-popup");
      return i(), m(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: s }) => [
          _(f(A), T(N(t(s))), {
            append: g(() => [
              _(f(M), T(N(n())), {
                default: g(() => [
                  _(f(he), {
                    cover: "",
                    "transition-show": "scale",
                    "transition-hide": "scale"
                  }, {
                    default: g(() => [
                      _(f(be), T(N(r(s))), {
                        default: g(() => [
                          z("div", Me, [
                            ce(_(f(I), {
                              label: "Fermer",
                              color: "secondary",
                              flat: "",
                              "no-caps": ""
                            }, null, 512), [
                              [u]
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
}), et = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(_e), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), tt = { class: "flex row items-center" }, nt = { class: "text-body1 text-weight-medium" }, lt = { class: "flex column q-gutter-sm" }, ot = /* @__PURE__ */ C({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (t, n) => (i(), k("div", {
      class: de(["flex column", e.section.cssClass])
    }, [
      z("div", tt, [
        e.section.icon ? (i(), m(f(M), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
        z("div", nt, fe(e.section.label), 1)
      ]),
      z("div", lt, [
        R(t.$slots, "default")
      ])
    ], 2));
  }
}), rt = { class: "flex row items-center no-wrap" }, at = /* @__PURE__ */ C({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => (i(), k("div", rt, [
      _(f(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (i(), m(f(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : x("", !0),
      e.clear ? (i(), m(f(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : x("", !0)
    ]));
  }
}), st = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(A), Z(t(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(J), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, ct = {};
function dt(l, e) {
  return " TODO json edit ? ";
}
const ft = /* @__PURE__ */ ut(ct, [["render", dt]]), mt = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(J), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), gt = /* @__PURE__ */ C({
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
    return (n, r) => (i(), m(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        _(f(J), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ht = /* @__PURE__ */ C({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => {
      const r = me("q-icon");
      return i(), m(r, {
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
      ...B.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...p.getDefaultFormStyleSettings(),
      ...B.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = r ?? B.getGlobalActionComponent() ?? p.getDefaultActionComponent(), this.sectionComponent = a ?? B.getGlobalSectionComponent() ?? p.getDefaultSectionComponent(), this.wrapperResetComponent = o ?? B.getGlobalWrapperResetComponent() ?? p.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Xe,
      text: Ze,
      number: st,
      date: We,
      selectString: mt,
      selectBelongsTo: gt,
      selectHasMany: it,
      checkbox: et,
      object: ft
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
    return at;
  }
  static getDefaultSectionComponent() {
    return ot;
  }
  static getDefaultWrapperResetComponent() {
    return ht;
  }
  getAllField(e) {
    const t = [];
    return e.form.sections.forEach((r) => {
      const a = [];
      r.fields.forEach((u) => {
        const s = p.getFieldComponentByFormFieldType(
          u.form_field_type
        ), h = {
          type: u.form_field_type,
          metadata: u,
          label: u.form_label,
          hint: u.form_hint,
          cssClass: u.form_css_class,
          selectOptions: u.form_select_options,
          rules: u.form_rules,
          clearable: u.clearable,
          resetable: u.resetable,
          component: s
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
const bt = {
  key: 0,
  class: "flex column q-pa-sm q-gutter-sm"
}, yt = /* @__PURE__ */ C({
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
    ), a = O({}), o = O(), u = O(!1), s = O(!1);
    async function h() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), o.value = Object.freeze(
        r.getAllField(n)
      ), u.value = !0;
    }
    async function D() {
      s.value = !0;
      const d = {};
      Object.entries(a.value).forEach((y) => {
        d[y[0]] = y[1].getValue();
      });
      const S = await t.submitForm({ formData: d });
      n && (n.resource_data = S), V(), s.value = !1;
    }
    function V() {
      Object.values(a.value).forEach((d) => {
        d.reset();
      });
    }
    function $() {
      Object.values(a.value).forEach((d) => {
        d.clear();
      });
    }
    function E(d, S) {
      a.value[d] = S;
    }
    function w(d) {
      if (n)
        return n.resource_data[d];
    }
    function L(d) {
      const S = Object.entries(a.value).find((y) => y[0] === d);
      return S ? S[1].getValue() : null;
    }
    function j() {
      return r;
    }
    return ge(W, {
      registerRef: E,
      getDefaultDataByFieldName: w,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), e({}), X(async () => {
      await h();
    }), (d, S) => u.value && o.value ? (i(), k("div", bt, [
      (i(!0), k(Q, null, K(o.value.sections, (y, Y) => (i(), m(G(f(r).sectionComponent), {
        key: Y,
        section: y
      }, {
        default: g(() => [
          (i(!0), k(Q, null, K(y.fields, (q) => (i(), k(Q, {
            key: q.metadata.field_name
          }, [
            d.$slots[q.metadata.field_name] ? (i(), m(F, {
              key: 1,
              field: q
            }, {
              default: g(({ propsWrapper: P }) => [
                R(d.$slots, "default", { propsWrapper: P })
              ]),
              _: 2
            }, 1032, ["field"])) : (i(), m(G(q.component), {
              key: 0,
              field: q
            }, null, 8, ["field"]))
          ], 64))), 128))
        ]),
        _: 2
      }, 1032, ["section"]))), 128)),
      (i(), m(G(f(r).actionComponent), {
        isLoadingSubmit: s.value,
        submit: D,
        clear: o.value.clearable ? $ : void 0,
        reset: o.value.resetable ? V : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      d.$slots.more_actions ? R(d.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : x("", !0)
    ])) : x("", !0);
  }
});
export {
  B as Submit64,
  yt as Submit64Form
};
