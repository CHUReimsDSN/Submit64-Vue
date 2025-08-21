var ae = Object.defineProperty;
var re = (n, t, l) => t in n ? ae(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var _ = (n, t, l) => re(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as S, inject as se, ref as v, onMounted as X, getCurrentInstance as ie, createElementBlock as k, openBlock as c, renderSlot as R, createCommentVNode as O, createBlock as g, resolveDynamicComponent as G, unref as m, withCtx as b, createVNode as C, normalizeProps as q, guardReactiveProps as N, mergeProps as Z, createElementVNode as z, normalizeClass as M, toDisplayString as ue, resolveComponent as ce, provide as de, Fragment as Y, renderList as K } from "vue";
import { date as d, QInput as H, QIcon as W, QPopupProxy as fe, QDate as me, QBtn as I, QCheckbox as ge, QSelect as Q, uid as he } from "quasar";
const U = class U {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyleConfig");
    _(this, "_actionComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
  }
  static registerGlobalFormSetting(t) {
    this._instance._formSettings = t;
  }
  static registerGlobalFormStyleSetting(t) {
    this._instance._formStyleConfig = t;
  }
  static registerGlobalActionComponent(t) {
    this._instance._actionComponent = t;
  }
  static registerGlobalSectionComponent(t) {
    this._instance._sectionComponent = t;
  }
  static registerGlobalWrapperResetComponent(t) {
    this._instance._wrapperResetComponent = t;
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
_(U, "_instance", new U());
let V = U;
function be(n, t, l) {
  const e = [], a = [];
  switch (l) {
    case "date":
      e.push(Qe(t.dateFormat));
  }
  return n.forEach((r) => {
    switch (r.type) {
      case "required":
        e.push(J());
        break;
      case "absence":
        e.push(Ce());
        break;
      case "acceptance":
        e.push(Se());
        break;
      case "inclusion":
        const o = r;
        e.push(ee(o.including));
        break;
      case "exclusion":
        const s = r;
        e.push(_e(s.excluding));
        break;
      case "backend":
        e.push(J());
        break;
      case "allowNull":
        a.push("allowNull");
        break;
      case "allowBlank":
        a.push("allowBlank");
        break;
      case "positiveNumber":
        e.push(De());
        break;
      case "lessThanOrEqualNumber":
        const h = r;
        if (h.less_than) {
          e.push(
            Te(
              () => h.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const u = r;
        if (u.less_than) {
          e.push(pe(() => u.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const i = r;
        if (i.greater_than) {
          e.push(
            qe(
              () => i.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const y = r;
        if (y.greater_than) {
          e.push(
            Ne(() => y.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const x = r;
        if (x.equal_to) {
          e.push(Be(() => x.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = r;
        if ($.other_than) {
          e.push(Ve(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        e.push(ke());
        break;
      case "numberNumericOnly":
        e.push(ve());
        break;
      case "numberEvenOnly":
        e.push(Oe());
        break;
      case "numberOddOnly":
        e.push(xe());
        break;
      case "lessThanOrEqualStringLength":
        const E = r;
        if (E.less_than) {
          e.push(
            Re(
              () => E.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const w = r;
        if (w.less_than) {
          e.push(
            $e(() => w.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = r;
        if (L.greater_than) {
          e.push(
            Ee(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = r;
        if (j.greater_than) {
          e.push(
            we(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const f = r;
        if (f.equal_to) {
          e.push(je(() => f.equal_to));
          break;
        }
      case "betweenStringLength":
        const F = r;
        e.push(
          Le(
            () => F.min,
            () => F.max
          )
        );
        break;
      case "equalToStringLength":
        const D = r;
        e.push(Ge(() => D.equal_to));
        break;
      case "otherThanString":
        const P = r;
        e.push(ze(() => P.other_than));
        break;
      case "lessThanOrEqualDate":
        const B = r;
        e.push(
          Ie(
            () => B.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const A = r;
        e.push(
          Ue(
            () => A.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = r;
        e.push(
          He(
            () => te.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = r;
        e.push(
          Pe(
            () => ne.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = r;
        e.push(
          Ae(
            () => le.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = r;
        e.push(
          Ye(
            () => oe.other_than,
            t.dateFormat
          )
        );
        break;
    }
  }), a.length > 0 ? a.map((r) => {
    switch (r) {
      case "allowBlank":
        return Fe(e);
      case "allowNull":
        return ye(e);
    }
  }) : e;
}
function J() {
  return (n) => !!n || "Ce champ est requis";
}
function ee(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function _e(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function Ce() {
  return (n) => !n || "Ce champ doit être vide";
}
function Se() {
  return (n) => !!n || "Doit être accepté";
}
function ye(n) {
  return (t) => (t === null || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function Fe(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function De() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Te(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function pe(n) {
  return (t) => {
    const l = n();
    return Number(t) < l || `Inf. ${l}`;
  };
}
function qe(n) {
  return (t) => {
    const l = n();
    return Number(t) >= l || `Sup. ou égal à ${l}`;
  };
}
function Ne(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function Be(n, t) {
  const l = n();
  return (e) => Number(e) === l || `Égale à ${l}`;
}
function Ve(n, t) {
  const l = n();
  return (e) => Number(e) !== l || `Doit être différent de ${n}`;
}
function ke() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function ve() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function Oe() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function xe() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Re(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function $e(n) {
  const t = n();
  return (l) => String(l).length < t || `Inf. à ${t}`;
}
function Ee(n) {
  const t = n();
  return (l) => String(l).length >= t || `Sup. ou égal à ${t}`;
}
function we(n) {
  const t = n();
  return (l) => String(l).length > t || `Sup. à ${t}`;
}
function Le(n, t) {
  const l = n(), e = t();
  return (a) => String(a).length >= l && String(a).length <= e || `Entre ${l} et ${e}`;
}
function je(n, t) {
  const l = n();
  return (e) => String(e) === l || `Égale à ${l}`;
}
function Ge(n) {
  const t = n();
  return (l) => String(l).length === t || `Doit contenir ${t} caractères`;
}
function ze(n, t) {
  const l = n();
  return (e) => String(e) !== l || `Doit être différent de ${l}`;
}
function Ie(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) <= d.extractDate(l, t) || `Inf. ou égal à ${d.formatDate(l, t)}`;
}
function Ue(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) < d.extractDate(l, t) || `Inf. à ${d.formatDate(l, t)}`;
}
function He(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) >= d.extractDate(l, t) || `Sup. ou égal à ${d.formatDate(l, t)}`;
}
function Pe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) > d.extractDate(l, t) || `Sup. à ${d.formatDate(l, t)}`;
}
function Ae(n, t, l) {
  const e = n();
  return (a) => d.extractDate(String(a), t) === d.extractDate(e, t) || `Égale à ${d.extractDate(e, t)}`;
}
function Ye(n, t, l) {
  const e = n();
  return (a) => d.extractDate(String(a), t) !== d.extractDate(e, t) || `Doit être différent de ${e}`;
}
function Qe(n) {
  return (t) => !Number.isNaN(d.extractDate(String(t), n).getTime()) || "Date invalide";
}
const Ke = {
  computeServerRules: be
}, T = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = se(l.field.provideUniqKey), a = v();
    function r() {
      return a.value;
    }
    function o() {
      e && (a.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
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
    function h() {
      return Ke.computeServerRules(
        l.field.rules ?? [],
        e.getFormFactory().formSettings,
        l.field.type
      );
    }
    function u(i) {
      a.value = i;
    }
    return t({
      reset: o,
      clear: s,
      getValue: r
    }), X(() => {
      var y;
      o();
      const i = (y = ie()) == null ? void 0 : y.proxy;
      i && e && e.registerRef(
        l.field.metadata.field_name,
        i
      );
    }), (i, y) => (c(), k("div", null, [
      l.field.resetable ? R(i.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), g(G(m(e).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : O("", !0),
      R(i.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: u, field: i.field, injectForm: m(e), reset: o, clear: s, getComputedRules: h }
      })
    ]));
  }
}), Je = /* @__PURE__ */ S({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(H), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Xe = /* @__PURE__ */ S({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(H), Z(l(r), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), Ze = { class: "row items-center justify-end" }, Me = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = v();
    function e(s) {
      const h = s.injectForm.getFormFactory(), u = h.formSettings, i = h.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (y) => s.modelValueOnUpdate(y),
        modelValue: s.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
    function a(s) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function r(s) {
      return {
        "onUpdate:modelValue": (h) => s.modelValueOnUpdate(h),
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, h) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: u }) => [
        C(m(H), q(N(e(u))), {
          append: b(() => [
            C(m(W), q(N(a())), {
              default: b(() => [
                C(m(fe), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: b(() => [
                    C(m(me), q(N(r(u))), {
                      default: b(() => [
                        z("div", Ze, [
                          C(m(I), {
                            onClick: o,
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
}), We = /* @__PURE__ */ S({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (r) => e.modelValueOnUpdate(r),
        modelValue: e.modelValue,
        // display
        label: e.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(ge), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), et = { class: "flex row items-center" }, tt = { class: "text-body1 text-weight-medium" }, nt = { class: "flex column q-gutter-sm" }, lt = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), k("div", {
      class: M(["flex column", t.section.cssClass])
    }, [
      z("div", et, [
        t.section.icon ? (c(), g(m(W), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        z("div", tt, ue(t.section.label), 1)
      ]),
      z("div", nt, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), ot = { class: "flex row items-center no-wrap" }, at = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), k("div", ot, [
      C(m(I), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (c(), g(m(I), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      t.clear ? (c(), g(m(I), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : O("", !0)
    ]));
  }
}), rt = /* @__PURE__ */ S({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(H), Z(l(r), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(Q), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, a] of t)
    l[e] = a;
  return l;
}, ut = {};
function ct(n, t) {
  return " TODO json edit ? ";
}
const dt = /* @__PURE__ */ it(ut, [["render", ct]]), ft = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: e.field.selectOptions || [],
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(Q), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), mt = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const a = e.injectForm.getFormFactory(), r = a.formSettings, o = a.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: e.field.clearable,
        rules: e.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: e.clear,
        // display
        label: e.field.label,
        hint: e.field.hint,
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
        class: e.field.cssClass
      };
    }
    return (e, a) => (c(), g(T, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(m(Q), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), gt = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const a = ce("q-icon");
      return c(), g(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (r) => t.reset())
      });
    };
  }
});
function ht(n) {
  return Symbol(n);
}
class p {
  constructor(t, l, e, a, r, o) {
    _(this, "resourceName");
    _(this, "formSettings");
    _(this, "formStyleConfig");
    _(this, "actionComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...p.getDefaultFormSettings(),
      ...V.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...p.getDefaultFormStyleSettings(),
      ...V.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = a ?? V.getGlobalActionComponent() ?? p.getDefaultActionComponent(), this.sectionComponent = r ?? V.getGlobalSectionComponent() ?? p.getDefaultSectionComponent(), this.wrapperResetComponent = o ?? V.getGlobalWrapperResetComponent() ?? p.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: Je,
      text: Xe,
      number: rt,
      date: Me,
      selectString: ft,
      selectBelongsTo: mt,
      selectHasMany: st,
      checkbox: We,
      object: dt
    }[t];
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
    return lt;
  }
  static getDefaultWrapperResetComponent() {
    return gt;
  }
  getAllField(t, l) {
    const e = ht(l), a = [];
    return t.form.sections.forEach((o) => {
      const s = [];
      o.fields.forEach((u) => {
        const i = p.getFieldComponentByFormFieldType(
          u.field_type
        ), y = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint,
          cssClass: u.css_class,
          selectOptions: u.select_options,
          rules: u.rules,
          clearable: u.clearable,
          resetable: u.resetable,
          provideUniqKey: e,
          component: i
        };
        s.push(y);
      });
      const h = {
        label: o.label,
        icon: o.icon,
        cssClass: o.css_class,
        fields: s
      };
      a.push(h);
    }), {
      sections: a,
      cssClass: t.form.css_class,
      resetable: t.form.resetable,
      clearable: t.form.clearable,
      hasGlobalCustomValidation: t.form.has_global_custom_validation ?? !1
    };
  }
}
const St = /* @__PURE__ */ S({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    globalFormSettings: {},
    context: {}
  },
  setup(n, { expose: t }) {
    const l = n;
    let e = null;
    const a = Object.freeze(
      new p(
        l.resourceName,
        l.globalFormSettings
      )
    ), r = he(), o = v({}), s = v(), h = v(!1), u = v(!1);
    async function i() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        a.getAllField(e, r)
      ), h.value = !0;
    }
    async function y() {
      u.value = !0;
      const f = {};
      Object.entries(o.value).forEach((D) => {
        f[D[0]] = D[1].getValue();
      });
      const F = await l.submitForm({ formData: f });
      e && (e.resource_data = F), x(), u.value = !1;
    }
    function x() {
      Object.values(o.value).forEach((f) => {
        f.reset();
      });
    }
    function $() {
      Object.values(o.value).forEach((f) => {
        f.clear();
      });
    }
    function E(f, F) {
      o.value[f] = F;
    }
    function w(f) {
      if (e)
        return e.resource_data[f];
    }
    function L(f) {
      const F = Object.entries(o.value).find((D) => D[0] === f);
      return F ? F[1].getValue() : null;
    }
    function j() {
      return a;
    }
    return de(r, {
      registerRef: E,
      getDefaultDataByFieldName: w,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), t({}), X(async () => {
      await i();
    }), (f, F) => h.value && s.value ? (c(), k("div", {
      key: 0,
      class: M(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
    }, [
      (c(!0), k(Y, null, K(s.value.sections, (D, P) => (c(), g(G(m(a).sectionComponent), {
        key: P,
        section: D
      }, {
        default: b(() => [
          (c(!0), k(Y, null, K(D.fields, (B) => (c(), k(Y, {
            key: B.metadata.field_name
          }, [
            f.$slots[B.metadata.field_name] ? (c(), g(T, {
              key: 1,
              field: B
            }, {
              default: b(({ propsWrapper: A }) => [
                R(f.$slots, "default", { propsWrapper: A })
              ]),
              _: 2
            }, 1032, ["field"])) : (c(), g(G(B.component), {
              key: 0,
              field: B
            }, null, 8, ["field"]))
          ], 64))), 128))
        ]),
        _: 2
      }, 1032, ["section"]))), 128)),
      (c(), g(G(m(a).actionComponent), {
        isLoadingSubmit: u.value,
        submit: y,
        clear: s.value.clearable ? $ : void 0,
        reset: s.value.resetable ? x : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      f.$slots.more_actions ? R(f.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : O("", !0)
    ], 2)) : O("", !0);
  }
});
export {
  V as Submit64,
  St as Submit64Form
};
