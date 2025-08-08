var ae = Object.defineProperty;
var re = (l, e, t) => e in l ? ae(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var b = (l, e, t) => re(l, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as C, inject as se, ref as x, onMounted as X, getCurrentInstance as ie, createElementBlock as v, openBlock as u, renderSlot as R, createCommentVNode as O, createBlock as m, resolveDynamicComponent as G, unref as f, withCtx as g, createVNode as _, normalizeProps as N, guardReactiveProps as q, mergeProps as Z, resolveDirective as ue, createElementVNode as z, withDirectives as ce, normalizeClass as de, toDisplayString as fe, resolveComponent as me, provide as ge, Fragment as Q, renderList as J } from "vue";
import { date as c, QInput as A, QIcon as M, QPopupProxy as he, QDate as be, QBtn as I, QCheckbox as _e, QSelect as U } from "quasar";
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
let k = H;
const W = Symbol();
function Ce(l, e) {
  const t = [], n = [];
  return l.forEach((a) => {
    switch (a.type) {
      case "required":
        t.push(K());
        break;
      case "absence":
        t.push(ye());
        break;
      case "acceptance":
        t.push(Fe());
        break;
      case "inclusion":
        const r = a;
        t.push(ee(r.including));
        break;
      case "exclusion":
        const o = a;
        t.push(Se(o.excluding));
        break;
      case "backend":
        t.push(K());
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
        const s = a;
        if (s.less_than) {
          t.push(
            Ne(
              () => s.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const i = a;
        if (i.less_than) {
          t.push(qe(() => i.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const p = a;
        if (p.greater_than) {
          t.push(
            Be(
              () => p.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const h = a;
        if (h.greater_than) {
          t.push(
            ke(() => h.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const y = a;
        if (y.equal_to) {
          t.push(ve(() => y.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = a;
        if ($.other_than) {
          t.push(Ve(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        t.push(Oe());
        break;
      case "numberNumericOnly":
        t.push(xe());
        break;
      case "numberEvenOnly":
        t.push(Re());
        break;
      case "numberOddOnly":
        t.push($e());
        break;
      case "lessThanOrEqualStringLength":
        const E = a;
        if (E.less_than) {
          t.push(
            Ee(
              () => E.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const w = a;
        if (w.less_than) {
          t.push(
            we(() => w.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = a;
        if (L.greater_than) {
          t.push(
            Le(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = a;
        if (j.greater_than) {
          t.push(
            je(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const d = a;
        if (d.equal_to) {
          t.push(ze(() => d.equal_to));
          break;
        }
      case "betweenStringLength":
        const S = a;
        t.push(
          Ge(
            () => S.min,
            () => S.max
          )
        );
        break;
      case "equalToStringLength":
        const F = a;
        t.push(Ie(() => F.equal_to));
        break;
      case "otherThanString":
        const Y = a;
        t.push(He(() => Y.other_than));
        break;
      case "lessThanOrEqualDate":
        const B = a;
        t.push(V(e.dateFormat)), t.push(
          Ae(
            () => B.less_than,
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = a;
        t.push(V(e.dateFormat)), t.push(
          Ye(
            () => P.less_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = a;
        t.push(V(e.dateFormat)), t.push(
          Pe(
            () => te.greater_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = a;
        t.push(V(e.dateFormat)), t.push(
          Qe(
            () => ne.greater_than,
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = a;
        t.push(V(e.dateFormat)), t.push(
          Ue(
            () => le.equal_to,
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = a;
        t.push(V(e.dateFormat)), t.push(
          Je(
            () => oe.other_than,
            e.dateFormat
          )
        );
        break;
    }
  }), n.length > 0 ? n.map((a) => {
    switch (a) {
      case "allowBlank":
        return pe(t);
      case "allowNull":
        return De(t);
    }
  }) : t;
}
function K() {
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
function Ve(l, e) {
  const t = l();
  return (n) => Number(n) !== t || `Doit être différent de ${l}`;
}
function Oe() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function xe() {
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
  return (a) => String(a).length >= t && String(a).length <= n || `Entre ${t} et ${n}`;
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
function Ue(l, e, t) {
  const n = l();
  return (a) => c.extractDate(String(a), e) === c.extractDate(n, e) || `Égale à ${c.extractDate(n, e)}`;
}
function Je(l, e, t) {
  const n = l();
  return (a) => c.extractDate(String(a), e) !== c.extractDate(n, e) || `Doit être différent de ${n}`;
}
function V(l) {
  return (e) => !Number.isNaN(c.extractDate(String(e), l).getTime()) || "Date invalide";
}
const Ke = {
  computeServerRules: Ce
}, D = /* @__PURE__ */ C({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const t = l, n = se(W), a = x();
    function r() {
      return a.value;
    }
    function o() {
      n && (a.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ));
    }
    function s() {
      switch (typeof a.value) {
        case "boolean":
          a.value = !1;
        case "string":
          a.value = "";
        case "number":
          a.value = 0;
        case "object":
          a.value = {};
      }
    }
    function i() {
      return Ke.computeServerRules(
        t.field.rules ?? [],
        n.getFormFactory().formSettings
      );
    }
    function p(h) {
      a.value = h;
    }
    return e({
      reset: o,
      clear: s,
      getValue: r
    }), X(() => {
      var y;
      o();
      const h = (y = ie()) == null ? void 0 : y.proxy;
      h && n && n.registerRef(
        t.field.metadata.field_name,
        h
      );
    }), (h, y) => (u(), v("div", null, [
      t.field.resetable ? R(h.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (u(), m(G(f(n).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : O("", !0),
      R(h.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: p, field: h.field, injectForm: f(n), reset: o, clear: s, getComputedRules: i }
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => n.modelValueOnUpdate(s),
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(A), N(q(t(r))), null, 16)
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => n.modelValueOnUpdate(s),
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(A), Z(t(r), { type: "textarea" }), null, 16)
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
    function t(r) {
      const o = r.injectForm.getFormFactory(), s = o.formSettings, i = o.formStyleConfig;
      return {
        // behaviour
        modelValue: r.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        // events
        onClear: r.clear,
        // display
        label: r.field.label,
        hint: r.field.hint,
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
        class: r.field.cssClass
      };
    }
    function n(r) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function a(r) {
      return {
        modelValue: r.modelValue,
        mask: r.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    return (r, o) => {
      const s = ue("close-popup");
      return u(), m(D, {
        field: e.field
      }, {
        default: g(({ propsWrapper: i }) => [
          _(f(A), N(q(t(i))), {
            append: g(() => [
              _(f(M), N(q(n())), {
                default: g(() => [
                  _(f(he), {
                    cover: "",
                    "transition-show": "scale",
                    "transition-hide": "scale"
                  }, {
                    default: g(() => [
                      _(f(be), N(q(a(i))), {
                        default: g(() => [
                          z("div", Me, [
                            ce(_(f(I), {
                              label: "Fermer",
                              color: "secondary",
                              flat: "",
                              "no-caps": ""
                            }, null, 512), [
                              [s]
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
      const a = n.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        // display
        label: n.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: n.field.cssClass
      };
    }
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(_e), N(q(t(r))), null, 16)
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
    return (t, n) => (u(), v("div", {
      class: de(["flex column", e.section.cssClass])
    }, [
      z("div", tt, [
        e.section.icon ? (u(), m(f(M), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        z("div", nt, fe(e.section.label), 1)
      ]),
      z("div", lt, [
        R(t.$slots, "default")
      ])
    ], 2));
  }
}), at = { class: "flex row items-center no-wrap" }, rt = /* @__PURE__ */ C({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => (u(), v("div", at, [
      _(f(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (u(), m(f(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      e.clear ? (u(), m(f(I), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : O("", !0)
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(A), Z(t(r), { type: "number" }), null, 16)
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(U), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [n, a] of e)
    t[n] = a;
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(U), N(q(t(r))), null, 16)
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
      const a = n.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (n, a) => (u(), m(D, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        _(f(U), N(q(t(r))), null, 16)
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
      const a = me("q-icon");
      return u(), m(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (r) => e.reset())
      });
    };
  }
});
class T {
  constructor(e, t, n, a, r, o) {
    b(this, "resourceName");
    b(this, "formSettings");
    b(this, "formStyleConfig");
    b(this, "actionComponent");
    b(this, "sectionComponent");
    b(this, "wrapperResetComponent");
    this.resourceName = e, this.formSettings = {
      ...T.getDefaultFormSettings(),
      ...k.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...T.getDefaultFormStyleSettings(),
      ...k.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = a ?? k.getGlobalActionComponent() ?? T.getDefaultActionComponent(), this.sectionComponent = r ?? k.getGlobalSectionComponent() ?? T.getDefaultSectionComponent(), this.wrapperResetComponent = o ?? k.getGlobalWrapperResetComponent() ?? T.getDefaultWrapperResetComponent();
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
    return rt;
  }
  static getDefaultSectionComponent() {
    return ot;
  }
  static getDefaultWrapperResetComponent() {
    return ht;
  }
  getAllField(e) {
    const t = [];
    return e.form.sections.forEach((a) => {
      const r = [];
      a.fields.forEach((s) => {
        const i = T.getFieldComponentByFormFieldType(
          s.form_field_type
        ), p = {
          type: s.form_field_type,
          metadata: s,
          label: s.form_label,
          hint: s.form_hint,
          cssClass: s.form_css_class,
          selectOptions: s.form_select_options,
          rules: s.form_rules,
          clearable: s.clearable,
          resetable: s.resetable,
          component: i
        };
        r.push(p);
      });
      const o = {
        label: a.label,
        fields: r
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
    const a = Object.freeze(
      new T(
        t.resourceName,
        t.globalFormSettings
      )
    ), r = x({}), o = x(), s = x(!1), i = x(!1);
    async function p() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), o.value = Object.freeze(
        a.getAllField(n)
      ), s.value = !0;
    }
    async function h() {
      i.value = !0;
      const d = {};
      Object.entries(r.value).forEach((F) => {
        d[F[0]] = F[1].getValue();
      });
      const S = await t.submitForm({ formData: d });
      n && (n.resource_data = S), y(), i.value = !1;
    }
    function y() {
      Object.values(r.value).forEach((d) => {
        d.reset();
      });
    }
    function $() {
      Object.values(r.value).forEach((d) => {
        d.clear();
      });
    }
    function E(d, S) {
      r.value[d] = S;
    }
    function w(d) {
      if (n)
        return n.resource_data[d];
    }
    function L(d) {
      const S = Object.entries(r.value).find((F) => F[0] === d);
      return S ? S[1].getValue() : null;
    }
    function j() {
      return a;
    }
    return ge(W, {
      registerRef: E,
      getDefaultDataByFieldName: w,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), e({}), X(async () => {
      await p();
    }), (d, S) => s.value && o.value ? (u(), v("div", bt, [
      (u(!0), v(Q, null, J(o.value.sections, (F, Y) => (u(), m(G(f(a).sectionComponent), {
        key: Y,
        section: F
      }, {
        default: g(() => [
          (u(!0), v(Q, null, J(F.fields, (B) => (u(), v(Q, {
            key: B.metadata.field_name
          }, [
            d.$slots[B.metadata.field_name] ? (u(), m(D, {
              key: 1,
              field: B
            }, {
              default: g(({ propsWrapper: P }) => [
                R(d.$slots, "default", { propsWrapper: P })
              ]),
              _: 2
            }, 1032, ["field"])) : (u(), m(G(B.component), {
              key: 0,
              field: B
            }, null, 8, ["field"]))
          ], 64))), 128))
        ]),
        _: 2
      }, 1032, ["section"]))), 128)),
      (u(), m(G(f(a).actionComponent), {
        isLoadingSubmit: i.value,
        submit: h,
        clear: o.value.clearable ? $ : void 0,
        reset: o.value.resetable ? y : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      d.$slots.more_actions ? R(d.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  k as Submit64,
  yt as Submit64Form
};
