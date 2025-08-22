var te = Object.defineProperty;
var ne = (n, t, l) => t in n ? te(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var S = (n, t, l) => ne(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as F, createElementBlock as T, openBlock as f, createVNode as C, createBlock as b, createCommentVNode as q, unref as m, normalizeClass as G, createElementVNode as R, toDisplayString as le, renderSlot as O, resolveComponent as oe, inject as ae, ref as N, onMounted as H, getCurrentInstance as re, resolveDynamicComponent as $, withCtx as _, normalizeProps as k, guardReactiveProps as D, mergeProps as P, provide as se, Fragment as j, renderList as U } from "vue";
import { QBtn as w, QIcon as Y, date as c, QInput as E, QPopupProxy as ie, QDate as ue, QCheckbox as ce, QSelect as z, uid as de } from "quasar";
const fe = { class: "flex row items-center no-wrap q-pt-sm" }, me = /* @__PURE__ */ F({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (f(), T("div", fe, [
      C(m(w), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (f(), b(m(w), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      t.clear ? (f(), b(m(w), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : q("", !0)
    ]));
  }
}), ge = { class: "flex row items-center" }, he = { class: "text-body1 text-weight-medium" }, be = { class: "flex column q-gutter-sm" }, _e = /* @__PURE__ */ F({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (f(), T("div", {
      class: G(["flex column", t.section.cssClass])
    }, [
      R("div", ge, [
        t.section.icon ? (f(), b(m(Y), {
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
}), Se = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const r = oe("q-icon");
      return f(), b(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (s) => t.reset())
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
let B = I;
function Ce(n, t, l) {
  const e = l.getFormFactoryInstance().formSettings, r = l.getForm(), s = (d, i, g) => d[i] ? g ? () => o(d[i]) : () => d[i] : d.compare_to ? () => l.getFieldDataByFieldName(d.compare_to) : () => "", o = (d) => String(
    c.formatDate(
      c.extractDate(d, r.backendDateFormat),
      e.dateFormat
    )
  ), a = [], u = [];
  switch (t) {
    case "date":
      a.push(Ze(e.dateFormat));
  }
  return n.forEach((d) => {
    const i = d;
    switch (i.type) {
      case "required":
        a.push(Fe());
        break;
      case "absence":
        a.push(ke());
        break;
      case "acceptance":
        a.push(De());
        break;
      case "inclusion":
        a.push(Q(i.including));
        break;
      case "exclusion":
        a.push(ye(i.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        u.push("allowNull");
        break;
      case "allowBlank":
        u.push("allowBlank");
        break;
      case "positiveNumber":
        a.push(Be());
        break;
      case "lessThanOrEqualNumber":
        a.push(
          Te(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          Ve(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          Ne(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          qe(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          xe(s(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          Re(
            s(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        a.push(Oe());
        break;
      case "numberNumericOnly":
        a.push($e());
        break;
      case "numberEvenOnly":
        a.push(we());
        break;
      case "numberOddOnly":
        a.push(Ie());
        break;
      case "lessThanOrEqualStringLength":
        a.push(
          Ee(
            s(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          je(
            s(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          ze(
            s(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          Le(
            s(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          He(
            s(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          Ge(s(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          Ue(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          Pe(
            s(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          Ye(
            s(i, "less_than", !0),
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          Qe(
            s(i, "less_than", !0),
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          Ae(
            s(i, "greater_than", !0),
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          Ke(
            s(i, "greater_than", !0),
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          Je(
            s(i, "equal_to", !0),
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          Xe(
            s(i, "other_than", !0),
            e.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((d) => {
    switch (d) {
      case "allowBlank":
        return ve(a);
      case "allowNull":
        return pe(a);
    }
  }) : a;
}
function Fe() {
  return (n) => !!n || "Ce champ est requis";
}
function Q(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function ye(n) {
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
function ve(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function Be() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Te(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function Ve(n) {
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
  return (r) => String(r).length >= l && String(r).length <= e || `Entre ${l} et ${e}`;
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
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) <= c.extractDate(l, t) || `Inf. ou égal à ${c.formatDate(l, t)}`;
}
function Qe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) < c.extractDate(l, t) || `Inf. à ${c.formatDate(l, t)}`;
}
function Ae(n, t) {
  const l = n();
  return (e) => !Number.isNaN(c.extractDate(String(e), t).getTime()) && c.extractDate(String(e), t) >= c.extractDate(l, t) || `Sup. ou égal à ${c.formatDate(l, t)}`;
}
function Ke(n, t) {
  return (l) => {
    const e = n(), r = c.extractDate(String(l), t), s = c.extractDate(e, t);
    return console.log(e), !Number.isNaN(r.getTime()) && r > s || `Sup. à ${e}`;
  };
}
function Je(n, t) {
  const l = n();
  return (e) => c.extractDate(String(e), t) === c.extractDate(l, t) || `Égale à ${c.extractDate(l, t)}`;
}
function Xe(n, t, l) {
  const e = n();
  return (r) => c.extractDate(String(r), t) !== c.extractDate(e, t) || `Doit être différent de ${e}`;
}
function Ze(n) {
  return (t) => !Number.isNaN(c.extractDate(String(t), n).getTime()) || "Date invalide";
}
const Me = {
  computeServerRules: Ce
}, y = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ae(l.field.provideUniqKey), r = N();
    function s() {
      return r.value;
    }
    function o() {
      e && (r.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ), r.value = a(r.value));
    }
    function a(g) {
      switch (l.field.type) {
        case "date":
          return c.formatDate(
            c.extractDate(
              String(g),
              e.getForm().backendDateFormat
            ),
            e.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return g;
    }
    function u() {
      switch (l.field.type) {
        case "string":
          r.value = "";
          break;
        case "checkbox":
          r.value = !1;
          break;
        case "date":
          r.value = c.formatDate(
            /* @__PURE__ */ new Date(),
            e.getFormFactoryInstance().formSettings.dateFormat
          );
          break;
        case "number":
          r.value = 0;
          break;
        case "selectString":
          r.value = null;
          break;
        case "text":
          r.value = "";
          break;
        case "object":
          r.value = {};
          break;
        case "selectBelongsTo":
          r.value = null;
          break;
        case "selectHasMany":
          r.value = null;
          break;
      }
    }
    function d() {
      return Me.computeServerRules(
        l.field.rules ?? [],
        l.field.type,
        e
      );
    }
    function i(g) {
      r.value = g;
    }
    return t({
      reset: o,
      clear: u,
      getValue: s
    }), H(() => {
      var V;
      o();
      const g = (V = re()) == null ? void 0 : V.exposed;
      g && e && e.registerRef(
        l.field.metadata.field_name,
        g
      );
    }), (g, V) => (f(), T("div", null, [
      l.field.resetable ? O(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (f(), b($(m(e).getFormFactoryInstance().wrapperResetComponent), { reset: o }))
      ]) : q("", !0),
      O(g.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: i, field: g.field, injectForm: m(e), reset: o, clear: u, getComputedRules: d }
      })
    ]));
  }
}), We = /* @__PURE__ */ F({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(E), k(D(l(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), et = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(E), P(l(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), tt = { class: "row items-center justify-end" }, nt = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = N();
    function e(a) {
      const u = a.injectForm.getFormFactoryInstance(), d = u.formSettings, i = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => a.modelValueOnUpdate(g),
        modelValue: a.modelValue,
        lazyRules: d.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
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
        class: a.field.cssClass
      };
    }
    function r(a) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function s(a) {
      return {
        "onUpdate:modelValue": (u) => a.modelValueOnUpdate(u),
        modelValue: a.modelValue,
        mask: a.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (a, u) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: d }) => [
        C(m(E), k(D(e(d))), {
          append: _(() => [
            C(m(Y), k(D(r())), {
              default: _(() => [
                C(m(ie), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: _(() => [
                    C(m(ue), k(D(s(d))), {
                      default: _(() => [
                        R("div", tt, [
                          C(m(w), {
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
}), lt = /* @__PURE__ */ F({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => e.modelValueOnUpdate(s),
        modelValue: e.modelValue,
        // display
        label: e.field.label,
        dense: r.fieldDense,
        color: r.fieldColor,
        class: e.field.cssClass
      };
    }
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(ce), k(D(l(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = /* @__PURE__ */ F({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(E), P(l(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), at = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(z), k(D(l(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, st = {};
function it(n, t) {
  return " TODO json edit ? ";
}
const ut = /* @__PURE__ */ rt(st, [["render", it]]), ct = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(z), k(D(l(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), dt = /* @__PURE__ */ F({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), s = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: e.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    return (e, r) => (f(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: s }) => [
        C(m(z), k(D(l(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class L {
  constructor(t, l, e, r, s, o) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...B.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...B.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = r ?? B.getGlobalActionComponent(), this.sectionComponent = s ?? B.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? B.getGlobalWrapperResetComponent();
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
    return t.form.sections.forEach((s) => {
      const o = [];
      s.fields.forEach((u) => {
        const d = L.getFieldComponentByFormFieldType(
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
          component: d
        };
        o.push(i);
      });
      const a = {
        label: s.label,
        icon: s.icon,
        cssClass: s.css_class,
        fields: o
      };
      e.push(a);
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
}, _t = /* @__PURE__ */ F({
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
      new L(
        l.resourceName,
        l.globalFormSettings
      )
    ), s = ft(de()), o = N({}), a = N(), u = N(!1), d = N(!1);
    async function i() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), a.value = Object.freeze(
        r.getAllField(e, s)
      ), u.value = !0;
    }
    async function g() {
      d.value = !0;
      const h = {};
      Object.entries(o.value).forEach((v) => {
        h[v[0]] = v[1].getValue();
      });
      const p = await l.submitForm({ formData: h });
      e && (e.resource_data = p), V(), d.value = !1;
    }
    function V() {
      Object.values(o.value).forEach((h) => {
        h.reset();
      });
    }
    function A() {
      Object.values(o.value).forEach((h) => {
        h.clear();
      });
    }
    function K(h, p) {
      o.value[h] = p;
    }
    function J(h) {
      if (e)
        return e.resource_data[h];
    }
    function X(h) {
      const p = Object.entries(o.value).find((v) => v[0] === h);
      return p ? p[1].getValue() : null;
    }
    function Z() {
      return r;
    }
    function M() {
      return a.value;
    }
    return se(s, {
      registerRef: K,
      getDefaultDataByFieldName: J,
      getFieldDataByFieldName: X,
      getFormFactoryInstance: Z,
      getForm: M
    }), t({}), H(async () => {
      await i();
    }), (h, p) => u.value && a.value ? (f(), T("div", mt, [
      R("div", {
        class: G(a.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), T(j, null, U(a.value.sections, (v, W) => (f(), b($(m(r).sectionComponent), {
          key: W,
          section: v
        }, {
          default: _(() => [
            (f(!0), T(j, null, U(v.fields, (x) => (f(), T(j, {
              key: x.metadata.field_name
            }, [
              h.$slots[x.metadata.field_name] ? (f(), b(y, {
                key: 1,
                field: x
              }, {
                default: _(({ propsWrapper: ee }) => [
                  O(h.$slots, "default", { propsWrapper: ee })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), b($(x.component), {
                key: 0,
                field: x
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), b($(m(r).actionComponent), {
        isLoadingSubmit: d.value,
        submit: g,
        clear: a.value.clearable ? A : void 0,
        reset: a.value.resetable ? V : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? O(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: a.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  B as Submit64,
  _t as Submit64Form
};
