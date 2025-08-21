var ae = Object.defineProperty;
var re = (n, t, l) => t in n ? ae(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var C = (n, t, l) => re(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as y, createElementBlock as B, openBlock as u, createVNode as S, createBlock as h, createCommentVNode as O, unref as m, normalizeClass as Z, createElementVNode as x, toDisplayString as se, renderSlot as R, resolveComponent as ie, inject as ue, ref as p, onMounted as M, getCurrentInstance as ce, resolveDynamicComponent as G, withCtx as _, normalizeProps as k, guardReactiveProps as v, mergeProps as Q, provide as de, Fragment as Y, renderList as J } from "vue";
import { QBtn as z, QIcon as W, date as c, QInput as U, QPopupProxy as fe, QDate as me, QCheckbox as ge, QSelect as A, uid as he } from "quasar";
const be = { class: "flex row items-center no-wrap q-pt-sm" }, _e = /* @__PURE__ */ y({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (u(), B("div", be, [
      S(m(z), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (u(), h(m(z), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      t.clear ? (u(), h(m(z), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : O("", !0)
    ]));
  }
}), Ce = { class: "flex row items-center" }, Se = { class: "text-body1 text-weight-medium" }, ye = { class: "flex column q-gutter-sm" }, Fe = /* @__PURE__ */ y({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (u(), B("div", {
      class: Z(["flex column", t.section.cssClass])
    }, [
      x("div", Ce, [
        t.section.icon ? (u(), h(m(W), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        x("div", Se, se(t.section.label), 1)
      ]),
      x("div", ye, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), Te = /* @__PURE__ */ y({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const r = ie("q-icon");
      return u(), h(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (a) => t.reset())
      });
    };
  }
}), I = class I {
  constructor() {
    C(this, "_formSettings");
    C(this, "_formStyleConfig");
    C(this, "_actionComponent");
    C(this, "_sectionComponent");
    C(this, "_wrapperResetComponent");
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
    }, this._actionComponent = _e, this._sectionComponent = Fe, this._wrapperResetComponent = Te;
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
C(I, "_instance", new I());
let q = I;
function De(n, t, l) {
  const e = [], r = [];
  switch (l) {
    case "date":
      e.push(et(t.dateFormat));
  }
  return n.forEach((a) => {
    switch (a.type) {
      case "required":
        e.push(X());
        break;
      case "absence":
        e.push(Ve());
        break;
      case "acceptance":
        e.push(Ne());
        break;
      case "inclusion":
        const o = a;
        e.push(ee(o.including));
        break;
      case "exclusion":
        const i = a;
        e.push(qe(i.excluding));
        break;
      case "backend":
        e.push(X());
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
        const s = a;
        if (s.less_than) {
          e.push(
            pe(
              () => s.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const b = a;
        if (b.less_than) {
          e.push(Oe(() => b.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const d = a;
        if (d.greater_than) {
          e.push(
            xe(
              () => d.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const g = a;
        if (g.greater_than) {
          e.push(
            Re(() => g.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const V = a;
        if (V.equal_to) {
          e.push($e(() => V.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = a;
        if ($.other_than) {
          e.push(we(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        e.push(Ee());
        break;
      case "numberNumericOnly":
        e.push(Le());
        break;
      case "numberEvenOnly":
        e.push(je());
        break;
      case "numberOddOnly":
        e.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        const w = a;
        if (w.less_than) {
          e.push(
            ze(
              () => w.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const E = a;
        if (E.less_than) {
          e.push(
            Ie(() => E.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = a;
        if (L.greater_than) {
          e.push(
            Ue(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = a;
        if (j.greater_than) {
          e.push(
            He(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const f = a;
        if (f.equal_to) {
          e.push(Ye(() => f.equal_to));
          break;
        }
      case "betweenStringLength":
        const F = a;
        e.push(
          Pe(
            () => F.min,
            () => F.max
          )
        );
        break;
      case "equalToStringLength":
        const T = a;
        e.push(Qe(() => T.equal_to));
        break;
      case "otherThanString":
        const H = a;
        e.push(Ae(() => H.other_than));
        break;
      case "lessThanOrEqualDate":
        const N = a;
        e.push(
          Ke(
            () => N.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = a;
        e.push(
          Je(
            () => P.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = a;
        e.push(
          Xe(
            () => te.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = a;
        e.push(
          Ze(
            () => ne.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = a;
        e.push(
          Me(
            () => le.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = a;
        e.push(
          We(
            () => oe.other_than,
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
function X() {
  return (n) => !!n || "Ce champ est requis";
}
function ee(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function qe(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function Ve() {
  return (n) => !n || "Ce champ doit être vide";
}
function Ne() {
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
function pe(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function Oe(n) {
  return (t) => {
    const l = n();
    return Number(t) < l || `Inf. ${l}`;
  };
}
function xe(n) {
  return (t) => {
    const l = n();
    return Number(t) >= l || `Sup. ou égal à ${l}`;
  };
}
function Re(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function $e(n, t) {
  const l = n();
  return (e) => Number(e) === l || `Égale à ${l}`;
}
function we(n, t) {
  const l = n();
  return (e) => Number(e) !== l || `Doit être différent de ${n}`;
}
function Ee() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function Le() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function je() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function ze(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function Ie(n) {
  const t = n();
  return (l) => String(l).length < t || `Inf. à ${t}`;
}
function Ue(n) {
  const t = n();
  return (l) => String(l).length >= t || `Sup. ou égal à ${t}`;
}
function He(n) {
  const t = n();
  return (l) => String(l).length > t || `Sup. à ${t}`;
}
function Pe(n, t) {
  const l = n(), e = t();
  return (r) => String(r).length >= l && String(r).length <= e || `Entre ${l} et ${e}`;
}
function Ye(n, t) {
  const l = n();
  return (e) => String(e) === l || `Égale à ${l}`;
}
function Qe(n) {
  const t = n();
  return (l) => String(l).length === t || `Doit contenir ${t} caractères`;
}
function Ae(n, t) {
  const l = n();
  return (e) => String(e) !== l || `Doit être différent de ${l}`;
}
function Ke(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) <= c.extractDate(l, t) || `Inf. ou égal à ${c.formatDate(l, t)}`;
}
function Je(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) < c.extractDate(l, t) || `Inf. à ${c.formatDate(l, t)}`;
}
function Xe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) >= c.extractDate(l, t) || `Sup. ou égal à ${c.formatDate(l, t)}`;
}
function Ze(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) > c.extractDate(l, t) || `Sup. à ${c.formatDate(l, t)}`;
}
function Me(n, t, l) {
  const e = n();
  return (r) => c.extractDate(String(r), t) === c.extractDate(e, t) || `Égale à ${c.extractDate(e, t)}`;
}
function We(n, t, l) {
  const e = n();
  return (r) => c.extractDate(String(r), t) !== c.extractDate(e, t) || `Doit être différent de ${e}`;
}
function et(n) {
  return (t) => !Number.isNaN(c.extractDate(String(t), n).getTime()) || "Date invalide";
}
const tt = {
  computeServerRules: De
}, D = /* @__PURE__ */ y({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ue(l.field.provideUniqKey), r = p();
    function a() {
      return r.value;
    }
    function o() {
      e && (r.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
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
    function s() {
      return tt.computeServerRules(
        l.field.rules ?? [],
        e.getFormFactory().formSettings,
        l.field.type
      );
    }
    function b(d) {
      r.value = d;
    }
    return t({
      reset: o,
      clear: i,
      getValue: a
    }), M(() => {
      var g;
      o();
      const d = (g = ce()) == null ? void 0 : g.proxy;
      d && e && e.registerRef(
        l.field.metadata.field_name,
        d
      );
    }), (d, g) => (u(), B("div", null, [
      l.field.resetable ? R(d.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (u(), h(G(m(e).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : O("", !0),
      R(d.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: b, field: d.field, injectForm: m(e), reset: o, clear: i, getComputedRules: s }
      })
    ]));
  }
}), nt = /* @__PURE__ */ y({
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
        "onUpdate:modelValue": (i) => e.modelValueOnUpdate(i),
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(U), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), lt = /* @__PURE__ */ y({
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
        "onUpdate:modelValue": (i) => e.modelValueOnUpdate(i),
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(U), Q(l(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = { class: "row items-center justify-end" }, at = /* @__PURE__ */ y({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = p();
    function e(s) {
      const b = s.injectForm.getFormFactory(), d = b.formSettings, g = b.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (V) => s.modelValueOnUpdate(V),
        modelValue: s.modelValue,
        lazyRules: d.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        // events
        onClear: s.clear,
        // display
        label: s.field.label,
        hint: s.field.hint,
        outlined: g.fieldOutlined,
        filled: g.fieldFilled,
        standout: g.fieldStandout,
        borderless: g.fieldBorderless,
        rounded: g.fieldRounded,
        square: g.fieldSquare,
        dense: g.fieldDense,
        hideBottomSpace: g.fieldHideBottomSpace,
        color: g.fieldColor,
        bgColor: g.fieldBgColor,
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
        "onUpdate:modelValue": (b) => s.modelValueOnUpdate(b),
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    function i(s) {
      console.log(s.modelValue), s.modelValueOnUpdate(
        c.formatDate(
          new Date(String(s.modelValue)),
          q.getGlobalFormSetting().dateFormat
        )
      ), console.log(s.modelValue);
    }
    return (s, b) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: d }) => [
        S(m(U), Q(e(d), { onVnodeMounted: i }), {
          append: _(() => [
            S(m(W), k(v(r())), {
              default: _(() => [
                S(m(fe), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: _(() => [
                    S(m(me), k(v(a(d))), {
                      default: _(() => [
                        x("div", ot, [
                          S(m(z), {
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
}), rt = /* @__PURE__ */ y({
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(ge), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = /* @__PURE__ */ y({
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
        "onUpdate:modelValue": (i) => e.modelValueOnUpdate(i),
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(U), Q(l(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ y({
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(A), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, ct = {};
function dt(n, t) {
  return " TODO json edit ? ";
}
const ft = /* @__PURE__ */ ut(ct, [["render", dt]]), mt = /* @__PURE__ */ y({
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
        "onUpdate:modelValue": (i) => e.modelValueOnUpdate(i),
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(A), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), gt = /* @__PURE__ */ y({
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
    return (e, r) => (u(), h(D, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(m(A), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class K {
  constructor(t, l, e, r, a, o) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...q.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...q.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = r ?? q.getGlobalActionComponent(), this.sectionComponent = a ?? q.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? q.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: nt,
      text: lt,
      number: st,
      date: at,
      selectString: mt,
      selectBelongsTo: gt,
      selectHasMany: it,
      checkbox: rt,
      object: ft
    }[t];
  }
  getAllField(t, l) {
    const e = [];
    return t.form.sections.forEach((a) => {
      const o = [];
      a.fields.forEach((s) => {
        const b = K.getFieldComponentByFormFieldType(
          s.field_type
        ), d = {
          type: s.field_type,
          metadata: s,
          label: s.label,
          hint: s.hint,
          cssClass: s.css_class,
          selectOptions: s.select_options,
          rules: s.rules,
          clearable: s.clearable,
          resetable: s.resetable,
          provideUniqKey: l,
          component: b
        };
        o.push(d);
      });
      const i = {
        label: a.label,
        icon: a.icon,
        cssClass: a.css_class,
        fields: o
      };
      e.push(i);
    }), {
      sections: e,
      cssClass: t.form.css_class,
      resetable: t.form.resetable,
      clearable: t.form.clearable,
      hasGlobalCustomValidation: t.form.has_global_custom_validation ?? !1
    };
  }
}
function ht(n) {
  return Symbol(n);
}
const bt = {
  key: 0,
  class: "flex column"
}, yt = /* @__PURE__ */ y({
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
      new K(
        l.resourceName,
        l.globalFormSettings
      )
    ), a = ht(he()), o = p({}), i = p(), s = p(!1), b = p(!1);
    async function d() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), i.value = Object.freeze(
        r.getAllField(e, a)
      ), s.value = !0;
    }
    async function g() {
      b.value = !0;
      const f = {};
      Object.entries(o.value).forEach((T) => {
        f[T[0]] = T[1].getValue();
      });
      const F = await l.submitForm({ formData: f });
      e && (e.resource_data = F), V(), b.value = !1;
    }
    function V() {
      Object.values(o.value).forEach((f) => {
        f.reset();
      });
    }
    function $() {
      Object.values(o.value).forEach((f) => {
        f.clear();
      });
    }
    function w(f, F) {
      o.value[f] = F;
    }
    function E(f) {
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
    return de(a, {
      registerRef: w,
      getDefaultDataByFieldName: E,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), t({}), M(async () => {
      await d();
    }), (f, F) => s.value && i.value ? (u(), B("div", bt, [
      x("div", {
        class: Z(i.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (u(!0), B(Y, null, J(i.value.sections, (T, H) => (u(), h(G(m(r).sectionComponent), {
          key: H,
          section: T
        }, {
          default: _(() => [
            (u(!0), B(Y, null, J(T.fields, (N) => (u(), B(Y, {
              key: N.metadata.field_name
            }, [
              f.$slots[N.metadata.field_name] ? (u(), h(D, {
                key: 1,
                field: N
              }, {
                default: _(({ propsWrapper: P }) => [
                  R(f.$slots, "default", { propsWrapper: P })
                ]),
                _: 2
              }, 1032, ["field"])) : (u(), h(G(N.component), {
                key: 0,
                field: N
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (u(), h(G(m(r).actionComponent), {
        isLoadingSubmit: b.value,
        submit: g,
        clear: i.value.clearable ? $ : void 0,
        reset: i.value.resetable ? V : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      f.$slots.more_actions ? R(f.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: i.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  q as Submit64,
  yt as Submit64Form
};
