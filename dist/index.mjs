var ae = Object.defineProperty;
var re = (l, e, t) => e in l ? ae(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var _ = (l, e, t) => re(l, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as S, inject as se, ref as x, onMounted as X, getCurrentInstance as ie, createElementBlock as v, openBlock as u, renderSlot as R, createCommentVNode as O, createBlock as m, resolveDynamicComponent as G, unref as f, withCtx as h, createVNode as C, normalizeProps as N, guardReactiveProps as q, mergeProps as Z, createElementVNode as z, normalizeClass as ue, toDisplayString as ce, resolveComponent as de, provide as fe, Fragment as Q, renderList as J } from "vue";
import { date as c, QInput as P, QIcon as M, QPopupProxy as me, QDate as ge, QBtn as I, QCheckbox as he, QSelect as U } from "quasar";
const H = class H {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyleConfig");
    _(this, "_actionComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
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
_(H, "_instance", new H());
let k = H;
const W = Symbol();
function be(l, e) {
  const t = [], n = [];
  return l.forEach((o) => {
    switch (o.type) {
      case "required":
        t.push(K());
        break;
      case "absence":
        t.push(Ce());
        break;
      case "acceptance":
        t.push(Se());
        break;
      case "inclusion":
        const r = o;
        t.push(ee(r.including));
        break;
      case "exclusion":
        const a = o;
        t.push(_e(a.excluding));
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
        const s = o;
        if (s.less_than) {
          t.push(
            De(
              () => s.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const g = o;
        if (g.less_than) {
          t.push(Te(() => g.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const b = o;
        if (b.greater_than) {
          t.push(
            Ne(
              () => b.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const i = o;
        if (i.greater_than) {
          t.push(
            qe(() => i.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const F = o;
        if (F.equal_to) {
          t.push(Be(() => F.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = o;
        if ($.other_than) {
          t.push(ke(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        t.push(ve());
        break;
      case "numberNumericOnly":
        t.push(Ve());
        break;
      case "numberEvenOnly":
        t.push(xe());
        break;
      case "numberOddOnly":
        t.push(Oe());
        break;
      case "lessThanOrEqualStringLength":
        const E = o;
        if (E.less_than) {
          t.push(
            Re(
              () => E.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const w = o;
        if (w.less_than) {
          t.push(
            $e(() => w.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = o;
        if (L.greater_than) {
          t.push(
            Ee(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = o;
        if (j.greater_than) {
          t.push(
            we(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const d = o;
        if (d.equal_to) {
          t.push(je(() => d.equal_to));
          break;
        }
      case "betweenStringLength":
        const y = o;
        t.push(
          Le(
            () => y.min,
            () => y.max
          )
        );
        break;
      case "equalToStringLength":
        const p = o;
        t.push(Ge(() => p.equal_to));
        break;
      case "otherThanString":
        const A = o;
        t.push(ze(() => A.other_than));
        break;
      case "lessThanOrEqualDate":
        const B = o;
        t.push(V(e.dateFormat)), t.push(
          Ie(
            () => B.less_than,
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const Y = o;
        t.push(V(e.dateFormat)), t.push(
          He(
            () => Y.less_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = o;
        t.push(V(e.dateFormat)), t.push(
          Pe(
            () => te.greater_than,
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = o;
        t.push(V(e.dateFormat)), t.push(
          Ae(
            () => ne.greater_than,
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = o;
        t.push(V(e.dateFormat)), t.push(
          Ye(
            () => le.equal_to,
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = o;
        t.push(V(e.dateFormat)), t.push(
          Qe(
            () => oe.other_than,
            e.dateFormat
          )
        );
        break;
    }
  }), n.length > 0 ? n.map((o) => {
    switch (o) {
      case "allowBlank":
        return Fe(t);
      case "allowNull":
        return ye(t);
    }
  }) : t;
}
function K() {
  return (l) => !!l || "Ce champ est requis";
}
function ee(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function _e(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function Ce() {
  return (l) => !l || "Ce champ doit être vide";
}
function Se() {
  return (l) => !!l || "Doit être accepté";
}
function ye(l) {
  return (e) => (e === null || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Fe(l) {
  return (e) => (e === "" || l.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function pe() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function De(l) {
  return (e) => {
    const t = l();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Te(l) {
  return (e) => {
    const t = l();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Ne(l) {
  return (e) => {
    const t = l();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function qe(l) {
  return (e) => {
    const t = l();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Be(l, e) {
  const t = l();
  return (n) => Number(n) === t || `Égale à ${t}`;
}
function ke(l, e) {
  const t = l();
  return (n) => Number(n) !== t || `Doit être différent de ${l}`;
}
function ve() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Ve() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function xe() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function Oe() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function Re(l) {
  const e = l();
  return (t) => String(t).length <= e || `Inf. ou égal à ${e}`;
}
function $e(l) {
  const e = l();
  return (t) => String(t).length < e || `Inf. à ${e}`;
}
function Ee(l) {
  const e = l();
  return (t) => String(t).length >= e || `Sup. ou égal à ${e}`;
}
function we(l) {
  const e = l();
  return (t) => String(t).length > e || `Sup. à ${e}`;
}
function Le(l, e) {
  const t = l(), n = e();
  return (o) => String(o).length >= t && String(o).length <= n || `Entre ${t} et ${n}`;
}
function je(l, e) {
  const t = l();
  return (n) => String(n) === t || `Égale à ${t}`;
}
function Ge(l) {
  const e = l();
  return (t) => String(t).length === e || `Doit contenir ${e} caractères`;
}
function ze(l, e) {
  const t = l();
  return (n) => String(n) !== t || `Doit être différent de ${t}`;
}
function Ie(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) <= c.extractDate(t, e) || `Inf. ou égal à ${c.formatDate(t, e)}`;
}
function He(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) < c.extractDate(t, e) || `Inf. à ${c.formatDate(t, e)}`;
}
function Pe(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) >= c.extractDate(t, e) || `Sup. ou égal à ${c.formatDate(t, e)}`;
}
function Ae(l, e) {
  const t = l();
  return (n) => !Number.isNaN(c.extractDate(String(n), e).getTime()) && c.extractDate(String(n), e) > c.extractDate(t, e) || `Sup. à ${c.formatDate(t, e)}`;
}
function Ye(l, e, t) {
  const n = l();
  return (o) => c.extractDate(String(o), e) === c.extractDate(n, e) || `Égale à ${c.extractDate(n, e)}`;
}
function Qe(l, e, t) {
  const n = l();
  return (o) => c.extractDate(String(o), e) !== c.extractDate(n, e) || `Doit être différent de ${n}`;
}
function V(l) {
  return (e) => !Number.isNaN(c.extractDate(String(e), l).getTime()) || "Date invalide";
}
const Ue = {
  computeServerRules: be
}, D = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const t = l, n = se(W), o = x();
    function r() {
      return o.value;
    }
    function a() {
      n && (o.value = n.getDefaultDataByFieldName(
        t.field.metadata.field_name
      ));
    }
    function s() {
      switch (typeof o.value) {
        case "boolean":
          o.value = !1;
        case "string":
          o.value = "";
        case "number":
          o.value = 0;
        case "object":
          o.value = {};
      }
    }
    function g() {
      return Ue.computeServerRules(
        t.field.rules ?? [],
        n.getFormFactory().formSettings
      );
    }
    function b(i) {
      o.value = i;
    }
    return e({
      reset: a,
      clear: s,
      getValue: r
    }), X(() => {
      var F;
      a();
      const i = (F = ie()) == null ? void 0 : F.proxy;
      i && n && n.registerRef(
        t.field.metadata.field_name,
        i
      );
    }), (i, F) => (u(), v("div", null, [
      t.field.resetable ? R(i.$slots, "reset", {
        key: 0,
        actionProps: { reset: a }
      }, () => [
        (u(), m(G(f(n).getFormFactory().wrapperResetComponent), { reset: a }))
      ]) : O("", !0),
      R(i.$slots, "default", {
        propsWrapper: { modelValue: o.value, modelValueOnUpdate: b, field: i.field, injectForm: f(n), reset: a, clear: s, getComputedRules: g }
      })
    ]));
  }
}), Je = /* @__PURE__ */ S({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(P), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Ke = /* @__PURE__ */ S({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(P), Z(t(r), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Xe = { class: "row items-center justify-end" }, Ze = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, t = x();
    function n(s) {
      const g = s.injectForm.getFormFactory(), b = g.formSettings, i = g.formStyleConfig;
      return {
        // behaviour
        modelValue: s.modelValue,
        lazyRules: b.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        // events
        onClear: s.clear,
        // display
        label: s.field.label,
        hint: s.field.hint,
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
        class: s.field.cssClass
      };
    }
    function o(s) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function r(s) {
      return {
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    function a() {
      t.value && t.value.hide();
    }
    return (s, g) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: b }) => [
        C(f(P), N(q(n(b))), {
          append: h(() => [
            C(f(M), N(q(o())), {
              default: h(() => [
                C(f(me), {
                  ref_key: "popupProxyRef",
                  ref: t,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: h(() => [
                    C(f(ge), N(q(r(b))), {
                      default: h(() => [
                        z("div", Xe, [
                          C(f(I), {
                            onClick: a,
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
}), Me = /* @__PURE__ */ S({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        modelValue: n.modelValue,
        // display
        label: n.field.label,
        dense: o.fieldDense,
        color: o.fieldColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(he), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), We = { class: "flex row items-center" }, et = { class: "text-body1 text-weight-medium" }, tt = { class: "flex column q-gutter-sm" }, nt = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (t, n) => (u(), v("div", {
      class: ue(["flex column", e.section.cssClass])
    }, [
      z("div", We, [
        e.section.icon ? (u(), m(f(M), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        z("div", et, ce(e.section.label), 1)
      ]),
      z("div", tt, [
        R(t.$slots, "default")
      ])
    ], 2));
  }
}), lt = { class: "flex row items-center no-wrap" }, ot = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => (u(), v("div", lt, [
      C(f(I), {
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
}), at = /* @__PURE__ */ S({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(P), Z(t(r), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(U), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [n, o] of e)
    t[n] = o;
  return t;
}, it = {};
function ut(l, e) {
  return " TODO json edit ? ";
}
const ct = /* @__PURE__ */ st(it, [["render", ut]]), dt = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(U), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ft = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function t(n) {
      const o = n.injectForm.getFormFactory(), r = o.formSettings, a = o.formStyleConfig;
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
        outlined: a.fieldOutlined,
        filled: a.fieldFilled,
        standout: a.fieldStandout,
        borderless: a.fieldBorderless,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        hideBottomSpace: a.fieldHideBottomSpace,
        color: a.fieldColor,
        bgColor: a.fieldBgColor,
        class: n.field.cssClass
      };
    }
    return (n, o) => (u(), m(D, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(U), N(q(t(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), mt = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (t, n) => {
      const o = de("q-icon");
      return u(), m(o, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (r) => e.reset())
      });
    };
  }
});
class T {
  constructor(e, t, n, o, r, a) {
    _(this, "resourceName");
    _(this, "formSettings");
    _(this, "formStyleConfig");
    _(this, "actionComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    this.resourceName = e, this.formSettings = {
      ...T.getDefaultFormSettings(),
      ...k.getGlobalFormSetting(),
      ...t
    }, this.formStyleConfig = {
      ...T.getDefaultFormStyleSettings(),
      ...k.getGlobalFormStyleConfig(),
      ...n
    }, this.actionComponent = o ?? k.getGlobalActionComponent() ?? T.getDefaultActionComponent(), this.sectionComponent = r ?? k.getGlobalSectionComponent() ?? T.getDefaultSectionComponent(), this.wrapperResetComponent = a ?? k.getGlobalWrapperResetComponent() ?? T.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: Je,
      text: Ke,
      number: at,
      date: Ze,
      selectString: dt,
      selectBelongsTo: ft,
      selectHasMany: rt,
      checkbox: Me,
      object: ct
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
    return ot;
  }
  static getDefaultSectionComponent() {
    return nt;
  }
  static getDefaultWrapperResetComponent() {
    return mt;
  }
  getAllField(e) {
    const t = [];
    return e.form.sections.forEach((o) => {
      const r = [];
      o.fields.forEach((s) => {
        const g = T.getFieldComponentByFormFieldType(
          s.field_type
        ), b = {
          type: s.field_type,
          metadata: s,
          label: s.label,
          hint: s.hint,
          cssClass: s.css_class,
          selectOptions: s.select_options,
          rules: s.rules,
          clearable: s.clearable,
          resetable: s.resetable,
          component: g
        };
        r.push(b);
      });
      const a = {
        label: o.label,
        icon: o.icon,
        cssClass: o.css_class,
        fields: r
      };
      t.push(a);
    }), {
      sections: t,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1
    };
  }
}
const gt = {
  key: 0,
  class: "flex column q-pa-sm q-gutter-sm"
}, Ct = /* @__PURE__ */ S({
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
    const o = Object.freeze(
      new T(
        t.resourceName,
        t.globalFormSettings
      )
    ), r = x({}), a = x(), s = x(!1), g = x(!1);
    async function b() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), a.value = Object.freeze(
        o.getAllField(n)
      ), s.value = !0;
    }
    async function i() {
      g.value = !0;
      const d = {};
      Object.entries(r.value).forEach((p) => {
        d[p[0]] = p[1].getValue();
      });
      const y = await t.submitForm({ formData: d });
      n && (n.resource_data = y), F(), g.value = !1;
    }
    function F() {
      Object.values(r.value).forEach((d) => {
        d.reset();
      });
    }
    function $() {
      Object.values(r.value).forEach((d) => {
        d.clear();
      });
    }
    function E(d, y) {
      r.value[d] = y;
    }
    function w(d) {
      if (n)
        return n.resource_data[d];
    }
    function L(d) {
      const y = Object.entries(r.value).find((p) => p[0] === d);
      return y ? y[1].getValue() : null;
    }
    function j() {
      return o;
    }
    return fe(W, {
      registerRef: E,
      getDefaultDataByFieldName: w,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), e({}), X(async () => {
      await b();
    }), (d, y) => s.value && a.value ? (u(), v("div", gt, [
      (u(!0), v(Q, null, J(a.value.sections, (p, A) => (u(), m(G(f(o).sectionComponent), {
        key: A,
        section: p
      }, {
        default: h(() => [
          (u(!0), v(Q, null, J(p.fields, (B) => (u(), v(Q, {
            key: B.metadata.field_name
          }, [
            d.$slots[B.metadata.field_name] ? (u(), m(D, {
              key: 1,
              field: B
            }, {
              default: h(({ propsWrapper: Y }) => [
                R(d.$slots, "default", { propsWrapper: Y })
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
      (u(), m(G(f(o).actionComponent), {
        isLoadingSubmit: g.value,
        submit: i,
        clear: a.value.clearable ? $ : void 0,
        reset: a.value.resetable ? F : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      d.$slots.more_actions ? R(d.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: a.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  k as Submit64,
  Ct as Submit64Form
};
