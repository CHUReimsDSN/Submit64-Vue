var re = Object.defineProperty;
var se = (n, t, l) => t in n ? re(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var _ = (n, t, l) => se(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as S, createElementBlock as B, openBlock as c, createVNode as C, createBlock as g, createCommentVNode as v, unref as m, normalizeClass as X, createElementVNode as x, toDisplayString as Z, renderSlot as R, resolveComponent as ie, inject as ue, ref as k, onMounted as M, getCurrentInstance as ce, resolveDynamicComponent as G, withCtx as b, normalizeProps as q, guardReactiveProps as p, mergeProps as W, createTextVNode as de, provide as fe, Fragment as Y, renderList as K } from "vue";
import { QBtn as z, QIcon as ee, date as d, QInput as U, QPopupProxy as me, QDate as ge, QCheckbox as he, QSelect as Q, uid as be } from "quasar";
const _e = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), B("div", _e, [
      C(m(z), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (c(), g(m(z), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : v("", !0),
      t.clear ? (c(), g(m(z), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : v("", !0)
    ]));
  }
}), Se = { class: "flex row items-center" }, ye = { class: "text-body1 text-weight-medium" }, Fe = { class: "flex column q-gutter-sm" }, Te = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), B("div", {
      class: X(["flex column", t.section.cssClass])
    }, [
      x("div", Se, [
        t.section.icon ? (c(), g(m(ee), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : v("", !0),
        x("div", ye, Z(t.section.label), 1)
      ]),
      x("div", Fe, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const r = ie("q-icon");
      return c(), g(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (a) => t.reset())
      });
    };
  }
}), I = class I {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyleConfig");
    _(this, "_actionComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
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
    }, this._actionComponent = Ce, this._sectionComponent = Te, this._wrapperResetComponent = De;
  }
  static registerGlobalFormSetting(t) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...t
    };
  }
  static registerGlobalFormStyleSetting(t) {
    this._instance._formStyleConfig = {
      ...this._instance._formStyleConfig,
      ...t
    };
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
_(I, "_instance", new I());
let V = I;
function qe(n, t, l) {
  const e = [], r = [];
  switch (l) {
    case "date":
      e.push(tt(t.dateFormat));
  }
  return n.forEach((a) => {
    switch (a.type) {
      case "required":
        e.push(J());
        break;
      case "absence":
        e.push(Ne());
        break;
      case "acceptance":
        e.push(Ve());
        break;
      case "inclusion":
        const o = a;
        e.push(te(o.including));
        break;
      case "exclusion":
        const s = a;
        e.push(pe(s.excluding));
        break;
      case "backend":
        e.push(J());
        break;
      case "allowNull":
        r.push("allowNull");
        break;
      case "allowBlank":
        r.push("allowBlank");
        break;
      case "positiveNumber":
        e.push(ve());
        break;
      case "lessThanOrEqualNumber":
        const u = a;
        if (u.less_than) {
          e.push(
            Oe(
              () => u.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const h = a;
        if (h.less_than) {
          e.push(xe(() => h.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const i = a;
        if (i.greater_than) {
          e.push(
            Re(
              () => i.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const y = a;
        if (y.greater_than) {
          e.push(
            $e(() => y.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const O = a;
        if (O.equal_to) {
          e.push(Ee(() => O.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = a;
        if ($.other_than) {
          e.push(we(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        e.push(Le());
        break;
      case "numberNumericOnly":
        e.push(je());
        break;
      case "numberEvenOnly":
        e.push(Ge());
        break;
      case "numberOddOnly":
        e.push(ze());
        break;
      case "lessThanOrEqualStringLength":
        const E = a;
        if (E.less_than) {
          e.push(
            Ie(
              () => E.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const w = a;
        if (w.less_than) {
          e.push(
            Ue(() => w.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = a;
        if (L.greater_than) {
          e.push(
            He(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = a;
        if (j.greater_than) {
          e.push(
            Pe(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const f = a;
        if (f.equal_to) {
          e.push(Qe(() => f.equal_to));
          break;
        }
      case "betweenStringLength":
        const F = a;
        e.push(
          Ye(
            () => F.min,
            () => F.max
          )
        );
        break;
      case "equalToStringLength":
        const T = a;
        e.push(Ae(() => T.equal_to));
        break;
      case "otherThanString":
        const H = a;
        e.push(Ke(() => H.other_than));
        break;
      case "lessThanOrEqualDate":
        const N = a;
        e.push(
          Je(
            () => N.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = a;
        e.push(
          Xe(
            () => P.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const ne = a;
        e.push(
          Ze(
            () => ne.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const le = a;
        e.push(
          Me(
            () => le.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const oe = a;
        e.push(
          We(
            () => oe.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const ae = a;
        e.push(
          et(
            () => ae.other_than,
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((a) => {
    switch (a) {
      case "allowBlank":
        return ke(e);
      case "allowNull":
        return Be(e);
    }
  }) : e;
}
function J() {
  return (n) => !!n || "Ce champ est requis";
}
function te(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function pe(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${te.toString()}`
  );
}
function Ne() {
  return (n) => !n || "Ce champ doit être vide";
}
function Ve() {
  return (n) => !!n || "Doit être accepté";
}
function Be(n) {
  return (t) => (t === null || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function ke(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function ve() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Oe(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function xe(n) {
  return (t) => {
    const l = n();
    return Number(t) < l || `Inf. ${l}`;
  };
}
function Re(n) {
  return (t) => {
    const l = n();
    return Number(t) >= l || `Sup. ou égal à ${l}`;
  };
}
function $e(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function Ee(n, t) {
  const l = n();
  return (e) => Number(e) === l || `Égale à ${l}`;
}
function we(n, t) {
  const l = n();
  return (e) => Number(e) !== l || `Doit être différent de ${n}`;
}
function Le() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function je() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function Ge() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function ze() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ie(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function Ue(n) {
  const t = n();
  return (l) => String(l).length < t || `Inf. à ${t}`;
}
function He(n) {
  const t = n();
  return (l) => String(l).length >= t || `Sup. ou égal à ${t}`;
}
function Pe(n) {
  const t = n();
  return (l) => String(l).length > t || `Sup. à ${t}`;
}
function Ye(n, t) {
  const l = n(), e = t();
  return (r) => String(r).length >= l && String(r).length <= e || `Entre ${l} et ${e}`;
}
function Qe(n, t) {
  const l = n();
  return (e) => String(e) === l || `Égale à ${l}`;
}
function Ae(n) {
  const t = n();
  return (l) => String(l).length === t || `Doit contenir ${t} caractères`;
}
function Ke(n, t) {
  const l = n();
  return (e) => String(e) !== l || `Doit être différent de ${l}`;
}
function Je(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) <= d.extractDate(l, t) || `Inf. ou égal à ${d.formatDate(l, t)}`;
}
function Xe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) < d.extractDate(l, t) || `Inf. à ${d.formatDate(l, t)}`;
}
function Ze(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) >= d.extractDate(l, t) || `Sup. ou égal à ${d.formatDate(l, t)}`;
}
function Me(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) > d.extractDate(l, t) || `Sup. à ${d.formatDate(l, t)}`;
}
function We(n, t, l) {
  const e = n();
  return (r) => d.extractDate(String(r), t) === d.extractDate(e, t) || `Égale à ${d.extractDate(e, t)}`;
}
function et(n, t, l) {
  const e = n();
  return (r) => d.extractDate(String(r), t) !== d.extractDate(e, t) || `Doit être différent de ${e}`;
}
function tt(n) {
  return (t) => !Number.isNaN(d.extractDate(String(t), n).getTime()) || "Date invalide";
}
const nt = {
  computeServerRules: qe
}, D = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ue(l.field.provideUniqKey), r = k();
    function a() {
      return r.value;
    }
    function o() {
      e && (r.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ));
    }
    function s() {
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
      return nt.computeServerRules(
        l.field.rules ?? [],
        e.getFormFactory().formSettings,
        l.field.type
      );
    }
    function h(i) {
      r.value = i;
    }
    return t({
      reset: o,
      clear: s,
      getValue: a
    }), M(() => {
      var y;
      o();
      const i = (y = ce()) == null ? void 0 : y.proxy;
      i && e && e.registerRef(
        l.field.metadata.field_name,
        i
      );
    }), (i, y) => (c(), B("div", null, [
      l.field.resetable ? R(i.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), g(G(m(e).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : v("", !0),
      R(i.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: h, field: i.field, injectForm: m(e), reset: o, clear: s, getComputedRules: u }
      })
    ]));
  }
}), lt = /* @__PURE__ */ S({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), q(p(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = /* @__PURE__ */ S({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), W(l(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), at = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = k();
    function e(s) {
      const u = s.injectForm.getFormFactory(), h = u.formSettings, i = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (y) => s.modelValueOnUpdate(y),
        modelValue: s.modelValue,
        lazyRules: h.rulesBehaviour === "lazy",
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
    function r(s) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function a(s) {
      return {
        "onUpdate:modelValue": (u) => s.modelValueOnUpdate(u),
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, u) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: h }) => [
        de(Z(console.log("osdfosdof")) + " ", 1),
        C(m(U), q(p(e(h))), {
          append: b(() => [
            C(m(ee), q(p(r())), {
              default: b(() => [
                C(m(me), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: b(() => [
                    C(m(ge), q(p(a(h))), {
                      default: b(() => [
                        x("div", at, [
                          C(m(z), {
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
}), st = /* @__PURE__ */ S({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        // display
        label: e.field.label,
        dense: r.fieldDense,
        color: r.fieldColor,
        class: e.field.cssClass
      };
    }
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(he), q(p(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ S({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), W(l(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), q(p(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, dt = {};
function ft(n, t) {
  return " TODO json edit ? ";
}
const mt = /* @__PURE__ */ ct(dt, [["render", ft]]), gt = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), q(p(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ht = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), q(p(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class A {
  constructor(t, l, e, r, a, o) {
    _(this, "resourceName");
    _(this, "formSettings");
    _(this, "formStyleConfig");
    _(this, "actionComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...V.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...V.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = r ?? V.getGlobalActionComponent(), this.sectionComponent = a ?? V.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? V.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: lt,
      text: ot,
      number: it,
      date: rt,
      selectString: gt,
      selectBelongsTo: ht,
      selectHasMany: ut,
      checkbox: st,
      object: mt
    }[t];
  }
  getAllField(t, l) {
    const e = [];
    return t.form.sections.forEach((a) => {
      const o = [];
      a.fields.forEach((u) => {
        const h = A.getFieldComponentByFormFieldType(
          u.field_type
        ), i = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint,
          cssClass: u.css_class,
          selectOptions: u.select_options,
          rules: u.rules,
          clearable: u.clearable,
          resetable: u.resetable,
          provideUniqKey: l,
          component: h
        };
        o.push(i);
      });
      const s = {
        label: a.label,
        icon: a.icon,
        cssClass: a.css_class,
        fields: o
      };
      e.push(s);
    }), {
      sections: e,
      cssClass: t.form.css_class,
      resetable: t.form.resetable,
      clearable: t.form.clearable,
      hasGlobalCustomValidation: t.form.has_global_custom_validation ?? !1
    };
  }
}
function bt(n) {
  return Symbol(n);
}
const _t = {
  key: 0,
  class: "flex column"
}, Ft = /* @__PURE__ */ S({
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
    const r = Object.freeze(
      new A(
        l.resourceName,
        l.globalFormSettings
      )
    ), a = bt(be()), o = k({}), s = k(), u = k(!1), h = k(!1);
    async function i() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        r.getAllField(e, a)
      ), u.value = !0;
    }
    async function y() {
      h.value = !0;
      const f = {};
      Object.entries(o.value).forEach((T) => {
        f[T[0]] = T[1].getValue();
      });
      const F = await l.submitForm({ formData: f });
      e && (e.resource_data = F), O(), h.value = !1;
    }
    function O() {
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
      const F = Object.entries(o.value).find((T) => T[0] === f);
      return F ? F[1].getValue() : null;
    }
    function j() {
      return r;
    }
    return fe(a, {
      registerRef: E,
      getDefaultDataByFieldName: w,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), t({}), M(async () => {
      await i();
    }), (f, F) => u.value && s.value ? (c(), B("div", _t, [
      x("div", {
        class: X(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (c(!0), B(Y, null, K(s.value.sections, (T, H) => (c(), g(G(m(r).sectionComponent), {
          key: H,
          section: T
        }, {
          default: b(() => [
            (c(!0), B(Y, null, K(T.fields, (N) => (c(), B(Y, {
              key: N.metadata.field_name
            }, [
              f.$slots[N.metadata.field_name] ? (c(), g(D, {
                key: 1,
                field: N
              }, {
                default: b(({ propsWrapper: P }) => [
                  R(f.$slots, "default", { propsWrapper: P })
                ]),
                _: 2
              }, 1032, ["field"])) : (c(), g(G(N.component), {
                key: 0,
                field: N
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (c(), g(G(m(r).actionComponent), {
        isLoadingSubmit: h.value,
        submit: y,
        clear: s.value.clearable ? $ : void 0,
        reset: s.value.resetable ? O : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      f.$slots.more_actions ? R(f.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : v("", !0)
    ])) : v("", !0);
  }
});
export {
  V as Submit64,
  Ft as Submit64Form
};
