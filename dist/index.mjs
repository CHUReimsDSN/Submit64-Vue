var te = Object.defineProperty;
var ne = (n, t, l) => t in n ? te(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var S = (n, t, l) => ne(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as y, createElementBlock as T, openBlock as c, createVNode as C, createBlock as m, createCommentVNode as q, unref as d, normalizeClass as G, createElementVNode as R, toDisplayString as le, renderSlot as O, resolveComponent as oe, inject as ae, ref as N, onMounted as H, getCurrentInstance as re, resolveDynamicComponent as $, withCtx as b, normalizeProps as k, guardReactiveProps as D, mergeProps as P, provide as ie, Fragment as j, renderList as U } from "vue";
import { QBtn as w, QIcon as Y, date as u, QInput as E, QPopupProxy as se, QDate as ue, QCheckbox as ce, QSelect as z, uid as de } from "quasar";
const fe = { class: "flex row items-center no-wrap q-pt-sm" }, me = /* @__PURE__ */ y({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), T("div", fe, [
      C(d(w), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (c(), m(d(w), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      t.clear ? (c(), m(d(w), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : q("", !0)
    ]));
  }
}), ge = { class: "flex row items-center" }, he = { class: "text-body1 text-weight-medium" }, be = { class: "flex column q-gutter-sm" }, _e = /* @__PURE__ */ y({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), T("div", {
      class: G(["flex column", t.section.cssClass])
    }, [
      R("div", ge, [
        t.section.icon ? (c(), m(d(Y), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        R("div", he, le(t.section.label), 1)
      ]),
      R("div", be, [
        O(l.$slots, "default")
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ y({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const a = oe("q-icon");
      return c(), m(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (r) => t.reset())
      });
    };
  }
}), I = class I {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyleConfig");
    S(this, "_actionComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
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
    }, this._actionComponent = me, this._sectionComponent = _e, this._wrapperResetComponent = Se;
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
S(I, "_instance", new I());
let V = I;
function Ce(n, t, l) {
  const e = l.getFormFactoryInstance().formSettings;
  l.getForm();
  const a = (s, i, _) => s[i] ? () => s[i] : s.compare_to ? () => l.getFieldDataByFieldName(s.compare_to) : () => "", r = [], o = [];
  switch (t) {
    case "date":
      r.push(Ze(e.dateFormat));
  }
  return n.forEach((s) => {
    const i = s;
    switch (i.type) {
      case "required":
        r.push(ye());
        break;
      case "absence":
        r.push(ke());
        break;
      case "acceptance":
        r.push(De());
        break;
      case "inclusion":
        r.push(Q(i.including));
        break;
      case "exclusion":
        r.push(Fe(i.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        o.push("allowNull");
        break;
      case "allowBlank":
        o.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(Ve());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Te(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          ve(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          Ne(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          qe(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          xe(a(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Re(
            a(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Oe());
        break;
      case "numberNumericOnly":
        r.push($e());
        break;
      case "numberEvenOnly":
        r.push(we());
        break;
      case "numberOddOnly":
        r.push(Ie());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ee(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          je(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          ze(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Le(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          He(
            a(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Ge(a(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Ue(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Pe(
            a(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        r.push(
          Ye(
            a(i, "less_than"),
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Qe(
            a(i, "less_than"),
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Ae(
            a(i, "greater_than"),
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Ke(
            a(i, "greater_than"),
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Je(
            a(i, "equal_to"),
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Xe(
            a(i, "other_than"),
            e.dateFormat
          )
        );
        break;
    }
  }), o.length > 0 ? o.map((s) => {
    switch (s) {
      case "allowBlank":
        return Be(r);
      case "allowNull":
        return pe(r);
    }
  }) : r;
}
function ye() {
  return (n) => !!n || "Ce champ est requis";
}
function Q(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function Fe(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${Q.toString()}`
  );
}
function ke() {
  return (n) => !n || "Ce champ doit être vide";
}
function De() {
  return (n) => !!n || "Doit être accepté";
}
function pe(n) {
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
function Ve() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Te(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function ve(n) {
  return (t) => {
    const l = n();
    return Number(t) < l || `Inf. ${l}`;
  };
}
function Ne(n) {
  return (t) => {
    const l = n();
    return Number(t) >= l || `Sup. ou égal à ${l}`;
  };
}
function qe(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function xe(n, t) {
  const l = n();
  return (e) => Number(e) === l || `Égale à ${l}`;
}
function Re(n, t) {
  const l = n();
  return (e) => Number(e) !== l || `Doit être différent de ${n}`;
}
function Oe() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function $e() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function we() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function Ie() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ee(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function je(n) {
  const t = n();
  return (l) => String(l).length < t || `Inf. à ${t}`;
}
function ze(n) {
  const t = n();
  return (l) => String(l).length >= t || `Sup. ou égal à ${t}`;
}
function Le(n) {
  const t = n();
  return (l) => String(l).length > t || `Sup. à ${t}`;
}
function Ue(n, t) {
  const l = n(), e = t();
  return (a) => String(a).length >= l && String(a).length <= e || `Entre ${l} et ${e}`;
}
function Ge(n, t) {
  const l = n();
  return (e) => String(e) === l || `Égale à ${l}`;
}
function He(n) {
  const t = n();
  return (l) => String(l).length === t || `Doit contenir ${t} caractères`;
}
function Pe(n, t) {
  const l = n();
  return (e) => String(e) !== l || `Doit être différent de ${l}`;
}
function Ye(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) <= u.extractDate(l, t) || `Inf. ou égal à ${u.formatDate(l, t)}`;
}
function Qe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) < u.extractDate(l, t) || `Inf. à ${u.formatDate(l, t)}`;
}
function Ae(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) >= u.extractDate(l, t) || `Sup. ou égal à ${u.formatDate(l, t)}`;
}
function Ke(n, t) {
  const l = n();
  return (e) => !Number.isNaN(u.extractDate(String(e), t).getTime()) && u.extractDate(String(e), t) > u.extractDate(l, t) || `Sup. à ${u.formatDate(l, t)}`;
}
function Je(n, t, l) {
  const e = n();
  return (a) => u.extractDate(String(a), t) === u.extractDate(e, t) || `Égale à ${u.extractDate(e, t)}`;
}
function Xe(n, t, l) {
  const e = n();
  return (a) => u.extractDate(String(a), t) !== u.extractDate(e, t) || `Doit être différent de ${e}`;
}
function Ze(n) {
  return (t) => !Number.isNaN(u.extractDate(String(t), n).getTime()) || "Date invalide";
}
const Me = {
  computeServerRules: Ce
}, F = /* @__PURE__ */ y({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ae(l.field.provideUniqKey), a = N();
    function r() {
      return a.value;
    }
    function o() {
      e && (a.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ), a.value = s(a.value));
    }
    function s(h) {
      switch (l.field.type) {
        case "date":
          return u.formatDate(
            u.extractDate(
              String(h),
              e.getForm().backendDateFormat
            ),
            e.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return h;
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
    function _() {
      return Me.computeServerRules(
        l.field.rules ?? [],
        l.field.type,
        e
      );
    }
    function g(h) {
      a.value = h;
    }
    return t({
      reset: o,
      clear: i,
      getValue: r
    }), H(() => {
      var v;
      o();
      const h = (v = re()) == null ? void 0 : v.proxy;
      h && e && e.registerRef(
        l.field.metadata.field_name,
        h
      );
    }), (h, v) => (c(), T("div", null, [
      l.field.resetable ? O(h.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), m($(d(e).getFormFactoryInstance().wrapperResetComponent), { reset: o }))
      ]) : q("", !0),
      O(h.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: g, field: h.field, injectForm: d(e), reset: o, clear: i, getComputedRules: _ }
      })
    ]));
  }
}), We = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(E), k(D(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), et = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(E), P(l(r), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), tt = { class: "row items-center justify-end" }, nt = /* @__PURE__ */ y({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = N();
    function e(s) {
      const i = s.injectForm.getFormFactoryInstance(), _ = i.formSettings, g = i.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (h) => s.modelValueOnUpdate(h),
        modelValue: s.modelValue,
        lazyRules: _.rulesBehaviour === "lazy",
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
        "onUpdate:modelValue": (i) => s.modelValueOnUpdate(i),
        modelValue: s.modelValue,
        mask: s.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, i) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: _ }) => [
        C(d(E), k(D(e(_))), {
          append: b(() => [
            C(d(Y), k(D(a())), {
              default: b(() => [
                C(d(se), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: b(() => [
                    C(d(ue), k(D(r(_))), {
                      default: b(() => [
                        R("div", tt, [
                          C(d(w), {
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
}), lt = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(ce), k(D(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(E), P(l(r), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), at = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(z), k(D(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, a] of t)
    l[e] = a;
  return l;
}, it = {};
function st(n, t) {
  return " TODO json edit ? ";
}
const ut = /* @__PURE__ */ rt(it, [["render", st]]), ct = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(z), k(D(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), dt = /* @__PURE__ */ y({
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
    return (e, a) => (c(), m(F, {
      field: t.field
    }, {
      default: b(({ propsWrapper: r }) => [
        C(d(z), k(D(l(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class L {
  constructor(t, l, e, a, r, o) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...V.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...V.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = a ?? V.getGlobalActionComponent(), this.sectionComponent = r ?? V.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? V.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: We,
      text: et,
      number: ot,
      date: nt,
      selectString: ct,
      selectBelongsTo: dt,
      selectHasMany: at,
      checkbox: lt,
      object: ut
    }[t];
  }
  getAllField(t, l) {
    const e = [];
    return t.form.sections.forEach((r) => {
      const o = [];
      r.fields.forEach((i) => {
        const _ = L.getFieldComponentByFormFieldType(
          i.field_type
        ), g = {
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
          component: _
        };
        o.push(g);
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
function ft(n) {
  return Symbol(n);
}
const mt = {
  key: 0,
  class: "flex column"
}, _t = /* @__PURE__ */ y({
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
      new L(
        l.resourceName,
        l.globalFormSettings
      )
    ), r = ft(de()), o = N({}), s = N(), i = N(!1), _ = N(!1);
    async function g() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        a.getAllField(e, r)
      ), i.value = !0;
    }
    async function h() {
      _.value = !0;
      const f = {};
      Object.entries(o.value).forEach((B) => {
        f[B[0]] = B[1].getValue();
      });
      const p = await l.submitForm({ formData: f });
      e && (e.resource_data = p), v(), _.value = !1;
    }
    function v() {
      Object.values(o.value).forEach((f) => {
        f.reset();
      });
    }
    function A() {
      Object.values(o.value).forEach((f) => {
        f.clear();
      });
    }
    function K(f, p) {
      o.value[f] = p;
    }
    function J(f) {
      if (e)
        return e.resource_data[f];
    }
    function X(f) {
      const p = Object.entries(o.value).find((B) => B[0] === f);
      return p ? p[1].getValue() : null;
    }
    function Z() {
      return a;
    }
    function M() {
      return s.value;
    }
    return ie(r, {
      registerRef: K,
      getDefaultDataByFieldName: J,
      getFieldDataByFieldName: X,
      getFormFactoryInstance: Z,
      getForm: M
    }), t({}), H(async () => {
      await g();
    }), (f, p) => i.value && s.value ? (c(), T("div", mt, [
      R("div", {
        class: G(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (c(!0), T(j, null, U(s.value.sections, (B, W) => (c(), m($(d(a).sectionComponent), {
          key: W,
          section: B
        }, {
          default: b(() => [
            (c(!0), T(j, null, U(B.fields, (x) => (c(), T(j, {
              key: x.metadata.field_name
            }, [
              f.$slots[x.metadata.field_name] ? (c(), m(F, {
                key: 1,
                field: x
              }, {
                default: b(({ propsWrapper: ee }) => [
                  O(f.$slots, "default", { propsWrapper: ee })
                ]),
                _: 2
              }, 1032, ["field"])) : (c(), m($(x.component), {
                key: 0,
                field: x
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (c(), m($(d(a).actionComponent), {
        isLoadingSubmit: _.value,
        submit: h,
        clear: s.value.clearable ? A : void 0,
        reset: s.value.resetable ? v : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      f.$slots.more_actions ? O(f.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  V as Submit64,
  _t as Submit64Form
};
