var oe = Object.defineProperty;
var le = (o, e, t) => e in o ? oe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var h = (o, e, t) => le(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as C, inject as re, ref as E, onMounted as U, getCurrentInstance as ae, createElementBlock as D, openBlock as s, renderSlot as L, createCommentVNode as R, createBlock as f, resolveDynamicComponent as H, unref as $, resolveComponent as _, withCtx as g, createVNode as b, normalizeProps as T, guardReactiveProps as N, mergeProps as X, resolveDirective as se, createElementVNode as w, withDirectives as ie, normalizeClass as ue, toDisplayString as Q, provide as ce, Fragment as I, createTextVNode as de, renderList as J } from "vue";
import { date as c, QCheckbox as fe, QIcon as me } from "quasar";
const A = class A {
  constructor() {
    h(this, "_formSettings");
    h(this, "_formStyleConfig");
    h(this, "_actionComponent");
    h(this, "_sectionComponent");
    h(this, "_wrapperResetComponent");
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
h(A, "_instance", new A());
let x = A;
const Z = Symbol();
function ge(o, e) {
  const t = [], n = [];
  return o.forEach((r) => {
    switch (r.type) {
      case "required":
        t.push(K());
        break;
      case "absence":
        t.push(_e());
        break;
      case "acceptance":
        t.push(be());
        break;
      case "inclusion":
        const a = r;
        t.push(M(a.including));
        break;
      case "exclusion":
        const l = r;
        t.push(he(l.excluding));
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
        t.push(pe());
        break;
      case "lessThanOrEqualNumber":
        const i = r;
        if (i.less_than) {
          t.push(
            ye(
              () => i.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const u = r;
        if (u.less_than) {
          t.push(Fe(() => u.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const m = r;
        if (m.greater_than) {
          t.push(
            qe(
              () => m.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const S = r;
        if (S.greater_than) {
          t.push(
            De(() => S.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const B = r;
        if (B.equal_to) {
          t.push(Te(() => B.equal_to));
          break;
        }
      case "otherThanNumber":
        const V = r;
        if (V.other_than) {
          t.push(Ne(() => V.other_than));
          break;
        }
      case "numberIntegerOnly":
        t.push(Be());
        break;
      case "numberNumericOnly":
        t.push(ke());
        break;
      case "numberEvenOnly":
        t.push(ve());
        break;
      case "numberOddOnly":
        t.push(xe());
        break;
      case "lessThanOrEqualStringLength":
        const k = r;
        if (k.less_than) {
          t.push(
            Ve(
              () => k.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const j = r;
        if (j.less_than) {
          t.push(
            Oe(() => j.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const G = r;
        if (G.greater_than) {
          t.push(
            Re(
              () => G.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const z = r;
        if (z.greater_than) {
          t.push(
            $e(
              () => z.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const d = r;
        if (d.equal_to) {
          t.push(we(() => d.equal_to));
          break;
        }
      case "betweenStringLength":
        const p = r;
        t.push(
          Ee(
            () => p.min,
            () => p.max
          )
        );
        break;
      case "equalToStringLength":
        const y = r;
        t.push(Le(() => y.equal_to));
        break;
      case "otherThanString":
        const Y = r;
        t.push(je(() => Y.other_than));
        break;
      case "lessThanOrEqualDate":
        const v = r;
        t.push(O(e.dateFormat)), t.push(
          Ge(
            () => v.less_than,
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = r;
        t.push(O(e.dateFormat)), t.push(
          ze(
            () => P.less_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const W = r;
        t.push(O(e.dateFormat)), t.push(
          Ie(
            () => W.greater_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ee = r;
        t.push(O(e.dateFormat)), t.push(
          He(
            () => ee.greater_than,
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const te = r;
        t.push(O(e.dateFormat)), t.push(
          Ae(
            () => te.equal_to,
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const ne = r;
        t.push(O(e.dateFormat)), t.push(
          Ye(
            () => ne.other_than,
            e.dateFormat
          )
        );
        break;
    }
  }), n.length > 0 ? n.map((r) => {
    switch (r) {
      case "allowBlank":
        return Se(t);
      case "allowNull":
        return Ce(t);
    }
  }) : t;
}
function K() {
  return (o) => !!o || "Ce champ est requis";
}
function M(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function he(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${M.toString()}`
  );
}
function _e() {
  return (o) => !o || "Ce champ doit être vide";
}
function be() {
  return (o) => !!o || "Doit être accepté";
}
function Ce(o) {
  return (e) => (e === null || o.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Se(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function pe() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function ye(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Fe(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function qe(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function De(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Te(o, e) {
  const t = o();
  return (n) => Number(n) === t || `Égale à ${t}`;
}
function Ne(o, e) {
  const t = o();
  return (n) => Number(n) !== t || `Doit être différent de ${o}`;
}
function Be() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function ke() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ve() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function xe() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Ve(o) {
  const e = o();
  return (t) => String(t).length <= e || `Inf. ou égal à ${e}`;
}
function Oe(o) {
  const e = o();
  return (t) => String(t).length < e || `Inf. à ${e}`;
}
function Re(o) {
  const e = o();
  return (t) => String(t).length >= e || `Sup. ou égal à ${e}`;
}
function $e(o) {
  const e = o();
  return (t) => String(t).length > e || `Sup. à ${e}`;
}
function Ee(o, e) {
  const t = o(), n = e();
  return (r) => String(r).length >= t && String(r).length <= n || `Entre ${t} et ${n}`;
}
function we(o, e) {
  const t = o();
  return (n) => String(n) === t || `Égale à ${t}`;
}
function Le(o) {
  const e = o();
  return (t) => String(t).length === e || `Doit contenir ${e} caractères`;
}
function je(o, e) {
  const t = o();
  return (n) => String(n) !== t || `Doit être différent de ${t}`;
}
function Ge(o, e) {
  const t = o();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) <= c.extractDate(t, e) || `Inf. ou égal à ${c.formatDate(t, e)}`;
}
function ze(o, e) {
  const t = o();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) < c.extractDate(t, e) || `Inf. à ${c.formatDate(t, e)}`;
}
function Ie(o, e) {
  const t = o();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) >= c.extractDate(t, e) || `Sup. ou égal à ${c.formatDate(t, e)}`;
}
function He(o, e) {
  const t = o();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) > c.extractDate(t, e) || `Sup. à ${c.formatDate(t, e)}`;
}
function Ae(o, e, t) {
  const n = o();
  return (r) => c.extractDate(String(r), e) === c.extractDate(n, e) || `Égale à ${c.extractDate(n, e)}`;
}
function Ye(o, e, t) {
  const n = o();
  return (r) => c.extractDate(String(r), e) !== c.extractDate(n, e) || `Doit être différent de ${n}`;
}
function O(o) {
  return (e) => !Number.isNaN(c.extractDate(String(e), o).getTime()) || "Date invalide";
}
const Pe = {
  computeServerRules: ge
}, F = /* @__PURE__ */ C({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const t = o, n = re(Z), r = E();
    function a() {
      return r.value;
    }
    function l() {
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
      return Pe.computeServerRules(
        t.field.rules ?? [],
        n.getFormFactory().formSettings
      );
    }
    return e({
      reset: l,
      clear: i,
      getValue: a
    }), U(() => {
      var S;
      l();
      const m = (S = ae()) == null ? void 0 : S.proxy;
      m && n && n.registerRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, S) => (s(), D("div", null, [
      t.field.resetable ? L(m.$slots, "reset", {
        key: 0,
        actionProps: { reset: l }
      }, () => [
        (s(), f(H($(n).getFormFactory().wrapperResetComponent), { reset: l }))
      ]) : R("", !0),
      L(m.$slots, "default", {
        propsWrapper: { modelValue: r.value, field: m.field, injectForm: $(n), reset: l, clear: i, getComputedRules: u }
      })
    ]));
  }
}), Qe = /* @__PURE__ */ C({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-input");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, T(N(t(l))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Je = /* @__PURE__ */ C({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-input");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, X(t(l), { type: "textarea" }), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Ke = { class: "row items-center justify-end" }, Ue = /* @__PURE__ */ C({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(a) {
      const l = a.injectForm.getFormFactory(), i = l.formSettings, u = l.formStyleConfig;
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
        mask: a.injectForm.getFormSettings().dateFormat
      };
    }
    return (a, l) => {
      const i = _("q-btn"), u = _("q-date"), m = _("q-popup-proxy"), S = _("q-icon"), B = _("q-input"), V = se("close-popup");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: k }) => [
          b(B, T(N(t(k))), {
            append: g(() => [
              b(S, T(N(n())), {
                default: g(() => [
                  b(m, {
                    cover: "",
                    "transition-show": "scale",
                    "transition-hide": "scale"
                  }, {
                    default: g(() => [
                      b(u, T(N(r(k))), {
                        default: g(() => [
                          w("div", Ke, [
                            ie(b(i, {
                              label: "Fermer",
                              color: "secondary",
                              flat: "",
                              "no-caps": ""
                            }, null, 512), [
                              [V]
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
}), Xe = /* @__PURE__ */ C({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
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
    return (n, r) => (s(), f(F, {
      field: e.field
    }, {
      default: g(({ propsWrapper: a }) => [
        b($(fe), T(N(t(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Ze = { class: "flex row items-center" }, Me = { class: "text-body1 text-weight-medium" }, We = { class: "flex column q-gutter-sm" }, et = /* @__PURE__ */ C({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(o) {
    const e = o;
    return (t, n) => (s(), D("div", {
      class: ue(["flex column", e.section.cssClass])
    }, [
      w("div", Ze, [
        e.section.icon ? (s(), f($(me), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        w("div", Me, Q(e.section.label), 1)
      ]),
      w("div", We, [
        L(t.$slots, "default")
      ])
    ], 2));
  }
}), tt = { class: "flex row items-center no-wrap" }, nt = /* @__PURE__ */ C({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, n) => {
      const r = _("q-btn");
      return s(), D("div", tt, [
        b(r, {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }, null, 8, ["loading", "onClick"]),
        e.reset ? (s(), f(r, {
          key: 0,
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }, null, 8, ["loading", "onClick"])) : R("", !0),
        e.clear ? (s(), f(r, {
          key: 1,
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }, null, 8, ["loading", "onClick"])) : R("", !0)
      ]);
    };
  }
}), ot = /* @__PURE__ */ C({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-input");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, X(t(l), { type: "number" }), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), lt = /* @__PURE__ */ C({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-select");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, T(N(t(l))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), rt = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, at = {};
function st(o, e) {
  return " TODO json edit ? ";
}
const it = /* @__PURE__ */ rt(at, [["render", st]]), ut = /* @__PURE__ */ C({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-select");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, T(N(t(l))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), ct = /* @__PURE__ */ C({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function t(n) {
      const r = n.injectForm.getFormFactory(), a = r.formSettings, l = r.formStyleConfig;
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
        outlined: l.fieldOutlined,
        filled: l.fieldFilled,
        standout: l.fieldStandout,
        borderless: l.fieldBorderless,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        hideBottomSpace: l.fieldHideBottomSpace,
        color: l.fieldColor,
        bgColor: l.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, r) => {
      const a = _("q-select");
      return s(), f(F, {
        field: e.field
      }, {
        default: g(({ propsWrapper: l }) => [
          b(a, T(N(t(l))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), dt = /* @__PURE__ */ C({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, n) => {
      const r = _("q-icon");
      return s(), f(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (a) => e.reset())
      });
    };
  }
});
class q {
  constructor(e, t, n, r, a, l) {
    h(this, "resourceName");
    h(this, "formSettings");
    h(this, "formStyleConfig");
    h(this, "actionComponent");
    h(this, "sectionComponent");
    h(this, "wrapperResetComponent");
    this.resourceName = e, this.formSettings = {
      ...q.getDefaultFormSettings(),
      ...x.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...q.getDefaultFormStyleSettings(),
      ...x.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = r ?? x.getGlobalActionComponent() ?? q.getDefaultActionComponent(), this.sectionComponent = a ?? x.getGlobalSectionComponent() ?? q.getDefaultSectionComponent(), this.wrapperResetComponent = l ?? x.getGlobalWrapperResetComponent() ?? q.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Qe,
      text: Je,
      number: ot,
      date: Ue,
      selectString: ut,
      selectBelongsTo: ct,
      selectHasMany: lt,
      checkbox: Xe,
      object: it
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
    return nt;
  }
  static getDefaultSectionComponent() {
    return et;
  }
  static getDefaultWrapperResetComponent() {
    return dt;
  }
  getAllField(e) {
    const t = [];
    return e.form.sections.forEach((r) => {
      const a = [];
      r.fields.forEach((i) => {
        const u = q.getFieldComponentByFormFieldType(
          i.form_field_type
        ), m = {
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
        a.push(m);
      });
      const l = {
        label: r.label,
        fields: a
      };
      t.push(l);
    }), {
      sections: t,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1
    };
  }
}
const ft = {
  key: 0,
  class: "flex q-pa-sm q-gutter-sm"
}, _t = /* @__PURE__ */ C({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    globalFormSettings: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let n = null;
    const r = Object.freeze(
      new q(
        t.resourceName,
        t.globalFormSettings
      )
    ), a = E({}), l = E(), i = E(!1), u = E(!1);
    async function m() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = Object.freeze(
        r.getAllField(n)
      ), i.value = !0;
    }
    async function S() {
      u.value = !0;
      const d = {};
      Object.entries(a.value).forEach((y) => {
        d[y[0]] = y[1].getValue();
      });
      const p = await t.submitForm({ formData: d });
      n && (n.resource_data = p), B(), u.value = !1;
    }
    function B() {
      Object.values(a.value).forEach((d) => {
        d.reset();
      });
    }
    function V() {
      Object.values(a.value).forEach((d) => {
        d.clear();
      });
    }
    function k(d, p) {
      a.value[d] = p;
    }
    function j(d) {
      if (n)
        return n.resource_data[d];
    }
    function G(d) {
      const p = Object.entries(a.value).find((y) => y[0] === d);
      return p ? p[1].getValue() : null;
    }
    function z() {
      return r;
    }
    return ce(Z, {
      registerRef: k,
      getDefaultDataByFieldName: j,
      getFieldDataByFieldName: G,
      getFormFactory: z
    }), e({}), U(async () => {
      await m();
    }), (d, p) => (s(), D(I, null, [
      de(Q(i.value) + " ", 1),
      w("pre", null, Q(l.value), 1),
      i.value && l.value ? (s(), D("div", ft, [
        (s(!0), D(I, null, J(l.value.sections, (y, Y) => (s(), f(H($(r).sectionComponent), {
          key: Y,
          section: y
        }, {
          default: g(() => [
            (s(!0), D(I, null, J(y.fields, (v) => (s(), D(I, {
              key: v.metadata.field_name
            }, [
              d.$slots[v.metadata.field_name] ? (s(), f(F, {
                key: 1,
                field: v
              }, {
                default: g(({ propsWrapper: P }) => [
                  L(d.$slots, "default", { propsWrapper: P })
                ]),
                _: 2
              }, 1032, ["field"])) : (s(), f(H(v.component), {
                key: 0,
                field: v
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128)),
        (s(), f(H($(r).actionComponent), {
          isLoadingSubmit: u.value,
          submit: S,
          clear: l.value.clearable ? V : void 0,
          reset: l.value.resetable ? B : void 0
        }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
        d.$slots.more_actions ? L(d.$slots, "more_actions", {
          key: 0,
          propsForm: { generatedForm: l.value }
        }) : R("", !0)
      ])) : R("", !0)
    ], 64));
  }
});
export {
  x as Submit64,
  _t as Submit64Form
};
