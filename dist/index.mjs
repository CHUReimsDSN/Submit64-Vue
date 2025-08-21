var oe = Object.defineProperty;
var ae = (n, t, l) => t in n ? oe(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var C = (n, t, l) => ae(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as y, createElementBlock as p, openBlock as c, createVNode as S, createBlock as h, createCommentVNode as x, unref as f, normalizeClass as X, createElementVNode as O, toDisplayString as re, renderSlot as R, resolveComponent as se, inject as ie, ref as V, onMounted as Z, getCurrentInstance as ue, resolveDynamicComponent as G, withCtx as _, normalizeProps as q, guardReactiveProps as N, mergeProps as M, provide as ce, Fragment as Q, renderList as J } from "vue";
import { QBtn as z, QIcon as W, date as u, QInput as H, QPopupProxy as de, QDate as fe, QCheckbox as me, QSelect as A, uid as ge } from "quasar";
const he = { class: "flex row items-center no-wrap q-pt-sm" }, be = /* @__PURE__ */ y({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), p("div", he, [
      S(f(z), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (c(), h(f(z), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : x("", !0),
      t.clear ? (c(), h(f(z), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : x("", !0)
    ]));
  }
}), _e = { class: "flex row items-center" }, Ce = { class: "text-body1 text-weight-medium" }, Se = { class: "flex column q-gutter-sm" }, ye = /* @__PURE__ */ y({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), p("div", {
      class: X(["flex column", t.section.cssClass])
    }, [
      O("div", _e, [
        t.section.icon ? (c(), h(f(W), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
        O("div", Ce, re(t.section.label), 1)
      ]),
      O("div", Se, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), Fe = /* @__PURE__ */ y({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const a = se("q-icon");
      return c(), h(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (r) => t.reset())
      });
    };
  }
}), U = class U {
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
    }, this._actionComponent = be, this._sectionComponent = ye, this._wrapperResetComponent = Fe;
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
C(U, "_instance", new U());
let B = U;
function Te(n, t, l) {
  const e = [], a = [];
  switch (l) {
    case "date":
      e.push(et(t.dateFormat));
  }
  return n.forEach((r) => {
    switch (r.type) {
      case "required":
        e.push(De());
        break;
      case "absence":
        e.push(qe());
        break;
      case "acceptance":
        e.push(Ne());
        break;
      case "inclusion":
        const o = r;
        e.push(ee(o.including));
        break;
      case "exclusion":
        const s = r;
        e.push(ke(s.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        a.push("allowNull");
        break;
      case "allowBlank":
        a.push("allowBlank");
        break;
      case "positiveNumber":
        e.push(pe());
        break;
      case "lessThanOrEqualNumber":
        const i = r;
        if (i.less_than) {
          e.push(
            Ve(
              () => i.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const b = r;
        if (b.less_than) {
          e.push(xe(() => b.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const m = r;
        if (m.greater_than) {
          e.push(
            Oe(
              () => m.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const g = r;
        if (g.greater_than) {
          e.push(
            Re(() => g.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const F = r;
        if (F.equal_to) {
          e.push($e(() => F.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = r;
        if ($.other_than) {
          e.push(we(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        e.push(Ee());
        break;
      case "numberNumericOnly":
        e.push(Ie());
        break;
      case "numberEvenOnly":
        e.push(Le());
        break;
      case "numberOddOnly":
        e.push(je());
        break;
      case "lessThanOrEqualStringLength":
        const w = r;
        if (w.less_than) {
          e.push(
            Ge(
              () => w.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const E = r;
        if (E.less_than) {
          e.push(
            ze(() => E.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const I = r;
        if (I.greater_than) {
          e.push(
            Ue(
              () => I.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const L = r;
        if (L.greater_than) {
          e.push(
            He(
              () => L.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const j = r;
        if (j.equal_to) {
          e.push(Ye(() => j.equal_to));
          break;
        }
      case "betweenStringLength":
        const d = r;
        e.push(
          Pe(
            () => d.min,
            () => d.max
          )
        );
        break;
      case "equalToStringLength":
        const T = r;
        e.push(Qe(() => T.equal_to));
        break;
      case "otherThanString":
        const D = r;
        e.push(Ae(() => D.other_than));
        break;
      case "lessThanOrEqualDate":
        const P = r;
        e.push(
          Ke(
            () => P.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const v = r;
        e.push(
          Je(
            () => v.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const Y = r;
        e.push(
          Xe(
            () => Y.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const te = r;
        e.push(
          Ze(
            () => te.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const ne = r;
        e.push(
          Me(
            () => ne.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const le = r;
        e.push(
          We(
            () => le.other_than,
            t.dateFormat
          )
        );
        break;
    }
  }), a.length > 0 ? a.map((r) => {
    switch (r) {
      case "allowBlank":
        return Be(e);
      case "allowNull":
        return ve(e);
    }
  }) : e;
}
function De() {
  return (n) => !!n || "Ce champ est requis";
}
function ee(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function ke(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function qe() {
  return (n) => !n || "Ce champ doit être vide";
}
function Ne() {
  return (n) => !!n || "Doit être accepté";
}
function ve(n) {
  return (t) => (t === null || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function Be(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function pe() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Ve(n) {
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
function Oe(n) {
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
function Ie() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function Le() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function je() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ge(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function ze(n) {
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
  return (a) => String(a).length >= l && String(a).length <= e || `Entre ${l} et ${e}`;
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
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) <= u.extractDate(l, t) || `Inf. ou égal à ${u.formatDate(l, t)}`;
}
function Je(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) < u.extractDate(l, t) || `Inf. à ${u.formatDate(l, t)}`;
}
function Xe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) >= u.extractDate(l, t) || `Sup. ou égal à ${u.formatDate(l, t)}`;
}
function Ze(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) > u.extractDate(l, t) || `Sup. à ${u.formatDate(l, t)}`;
}
function Me(n, t, l) {
  const e = n();
  return (a) => u.extractDate(String(a), t) === u.extractDate(e, t) || `Égale à ${u.extractDate(e, t)}`;
}
function We(n, t, l) {
  const e = n();
  return (a) => u.extractDate(String(a), t) !== u.extractDate(e, t) || `Doit être différent de ${e}`;
}
function et(n) {
  return (t) => !Number.isNaN(u.extractDate(String(t), n).getTime()) || "Date invalide";
}
const tt = {
  computeServerRules: Te
}, k = /* @__PURE__ */ y({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ie(l.field.provideUniqKey), a = V();
    function r() {
      return a.value;
    }
    function o() {
      e && (a.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ), a.value = s(a.value));
    }
    function s(g) {
      switch (l.field.type) {
        case "date":
          return u.formatDate(
            u.extractDate(
              String(g),
              e.getForm().backendDateFormat
            ),
            e.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return g;
    }
    function i() {
      switch (l.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = u.formatDate(
            /* @__PURE__ */ new Date(),
            e.getFormFactoryInstance().formSettings.dateFormat
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
    function b() {
      return tt.computeServerRules(
        l.field.rules ?? [],
        e.getFormFactoryInstance().formSettings,
        l.field.type
      );
    }
    function m(g) {
      a.value = g;
    }
    return t({
      reset: o,
      clear: i,
      getValue: r
    }), Z(() => {
      var F;
      o();
      const g = (F = ue()) == null ? void 0 : F.proxy;
      g && e && e.registerRef(
        l.field.metadata.field_name,
        g
      );
    }), (g, F) => (c(), p("div", null, [
      l.field.resetable ? R(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), h(G(f(e).getFormFactoryInstance().wrapperResetComponent), { reset: o }))
      ]) : x("", !0),
      R(g.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: m, field: g.field, injectForm: f(e), reset: o, clear: i, getComputedRules: b }
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(H), q(N(l(r))), null, 16)
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(H), M(l(r), { type: "textarea" }), null, 16)
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
    const t = n, l = V();
    function e(s) {
      const i = s.injectForm.getFormFactoryInstance(), b = i.formSettings, m = i.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => s.modelValueOnUpdate(g),
        modelValue: s.modelValue,
        lazyRules: b.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        // events
        onClear: s.clear,
        // display
        label: s.field.label,
        hint: s.field.hint,
        outlined: m.fieldOutlined,
        filled: m.fieldFilled,
        standout: m.fieldStandout,
        borderless: m.fieldBorderless,
        rounded: m.fieldRounded,
        square: m.fieldSquare,
        dense: m.fieldDense,
        hideBottomSpace: m.fieldHideBottomSpace,
        color: m.fieldColor,
        bgColor: m.fieldBgColor,
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
      return console.log(s.injectForm.getFormFactoryInstance().formSettings.dateFormat), {
        "onUpdate:modelValue": (i) => s.modelValueOnUpdate(i),
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, i) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: b }) => [
        S(f(H), q(N(e(b))), {
          append: _(() => [
            S(f(W), q(N(a())), {
              default: _(() => [
                S(f(de), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: _(() => [
                    S(f(fe), q(N(r(b))), {
                      default: _(() => [
                        O("div", ot, [
                          S(f(z), {
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
      const a = e.injectForm.getFormFactoryInstance().formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(me), q(N(l(r))), null, 16)
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(H), M(l(r), { type: "number" }), null, 16)
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(A), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, a] of t)
    l[e] = a;
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(A), q(N(l(r))), null, 16)
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
      const a = e.injectForm.getFormFactoryInstance(), r = a.formSettings, o = a.formStyleConfig;
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
    return (e, a) => (c(), h(k, {
      field: t.field
    }, {
      default: _(({ propsWrapper: r }) => [
        S(f(A), q(N(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class K {
  constructor(t, l, e, a, r, o) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...B.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...B.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = a ?? B.getGlobalActionComponent(), this.sectionComponent = r ?? B.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? B.getGlobalWrapperResetComponent();
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
    return t.form.sections.forEach((r) => {
      const o = [];
      r.fields.forEach((i) => {
        const b = K.getFieldComponentByFormFieldType(
          i.field_type
        ), m = {
          type: i.field_type,
          metadata: i,
          label: i.label,
          hint: i.hint,
          cssClass: i.css_class,
          selectOptions: i.select_options,
          rules: i.rules,
          clearable: i.clearable,
          resetable: i.resetable,
          provideUniqKey: l,
          component: b
        };
        o.push(m);
      });
      const s = {
        label: r.label,
        icon: r.icon,
        cssClass: r.css_class,
        fields: o
      };
      e.push(s);
    }), {
      sections: e,
      cssClass: t.form.css_class,
      resetable: t.form.resetable,
      clearable: t.form.clearable,
      backendDateFormat: t.form.backend_date_format,
      backendDatetimeFormat: t.form.backend_datetime_format,
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
    const a = Object.freeze(
      new K(
        l.resourceName,
        l.globalFormSettings
      )
    ), r = ht(ge()), o = V({}), s = V(), i = V(!1), b = V(!1);
    async function m() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        a.getAllField(e, r)
      ), i.value = !0;
    }
    async function g() {
      b.value = !0;
      const d = {};
      Object.entries(o.value).forEach((D) => {
        d[D[0]] = D[1].getValue();
      });
      const T = await l.submitForm({ formData: d });
      e && (e.resource_data = T), F(), b.value = !1;
    }
    function F() {
      Object.values(o.value).forEach((d) => {
        d.reset();
      });
    }
    function $() {
      Object.values(o.value).forEach((d) => {
        d.clear();
      });
    }
    function w(d, T) {
      o.value[d] = T;
    }
    function E(d) {
      if (e)
        return e.resource_data[d];
    }
    function I(d) {
      const T = Object.entries(o.value).find((D) => D[0] === d);
      return T ? T[1].getValue() : null;
    }
    function L() {
      return a;
    }
    function j() {
      return s.value;
    }
    return ce(r, {
      registerRef: w,
      getDefaultDataByFieldName: E,
      getFieldDataByFieldName: I,
      getFormFactoryInstance: L,
      getForm: j
    }), t({}), Z(async () => {
      await m();
    }), (d, T) => i.value && s.value ? (c(), p("div", bt, [
      O("div", {
        class: X(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (c(!0), p(Q, null, J(s.value.sections, (D, P) => (c(), h(G(f(a).sectionComponent), {
          key: P,
          section: D
        }, {
          default: _(() => [
            (c(!0), p(Q, null, J(D.fields, (v) => (c(), p(Q, {
              key: v.metadata.field_name
            }, [
              d.$slots[v.metadata.field_name] ? (c(), h(k, {
                key: 1,
                field: v
              }, {
                default: _(({ propsWrapper: Y }) => [
                  R(d.$slots, "default", { propsWrapper: Y })
                ]),
                _: 2
              }, 1032, ["field"])) : (c(), h(G(v.component), {
                key: 0,
                field: v
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (c(), h(G(f(a).actionComponent), {
        isLoadingSubmit: b.value,
        submit: g,
        clear: s.value.clearable ? $ : void 0,
        reset: s.value.resetable ? F : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      d.$slots.more_actions ? R(d.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : x("", !0)
    ])) : x("", !0);
  }
});
export {
  B as Submit64,
  yt as Submit64Form
};
