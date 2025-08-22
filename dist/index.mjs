var te = Object.defineProperty;
var ne = (n, t, l) => t in n ? te(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var S = (n, t, l) => ne(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as F, createElementBlock as B, openBlock as d, createVNode as C, createBlock as b, createCommentVNode as x, unref as f, normalizeClass as G, createElementVNode as R, toDisplayString as le, renderSlot as O, resolveComponent as oe, inject as re, ref as N, onMounted as H, getCurrentInstance as ae, resolveDynamicComponent as $, withCtx as _, normalizeProps as k, guardReactiveProps as v, mergeProps as P, provide as se, Fragment as j, renderList as U } from "vue";
import { QBtn as w, QIcon as Y, date as m, QInput as I, QPopupProxy as ie, QDate as ue, QCheckbox as ce, QSelect as z, uid as de } from "quasar";
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
    return (l, e) => (d(), B("div", fe, [
      C(f(w), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (d(), b(f(w), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : x("", !0),
      t.clear ? (d(), b(f(w), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : x("", !0)
    ]));
  }
}), ge = { class: "flex row items-center" }, he = { class: "text-body1 text-weight-medium" }, be = { class: "flex column q-gutter-sm" }, _e = /* @__PURE__ */ F({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (d(), B("div", {
      class: G(["flex column", t.section.cssClass])
    }, [
      R("div", ge, [
        t.section.icon ? (d(), b(f(Y), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
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
      return d(), b(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (a) => t.reset())
      });
    };
  }
}), E = class E {
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
S(E, "_instance", new E());
let D = E;
function Ce(n, t, l) {
  const e = l.getFormFactoryInstance().formSettings, r = l.getForm(), a = (c, i, g) => c[i] ? g ? () => o(c[i]) : () => c[i] : c.compare_to ? () => l.getFieldDataByFieldName(c.compare_to) : () => "", o = (c) => String(
    m.formatDate(
      m.extractDate(c, r.backendDateFormat),
      e.dateFormat
    )
  ), s = [], u = [];
  switch (t) {
    case "date":
      s.push(Ze(e.dateFormat));
  }
  return n.forEach((c) => {
    const i = c;
    switch (i.type) {
      case "required":
        s.push(Fe());
        break;
      case "absence":
        s.push(ke());
        break;
      case "acceptance":
        s.push(ve());
        break;
      case "inclusion":
        s.push(Q(i.including));
        break;
      case "exclusion":
        s.push(ye(i.excluding));
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
        s.push(De());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          Be(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          Ve(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          Ne(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          xe(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          qe(a(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          Re(
            a(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(Oe());
        break;
      case "numberNumericOnly":
        s.push($e());
        break;
      case "numberEvenOnly":
        s.push(we());
        break;
      case "numberOddOnly":
        s.push(Ee());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          Ie(
            a(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          je(
            a(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          ze(
            a(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          Le(
            a(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          He(
            a(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          Ge(a(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          Ue(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          Pe(
            a(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          Ye(
            a(i, "less_than", !0),
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          Qe(
            a(i, "less_than", !0),
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          Ae(
            a(i, "greater_than", !0),
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          Ke(
            a(i, "greater_than", !0),
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          Je(
            a(i, "equal_to", !0),
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          Xe(
            a(i, "other_than", !0),
            e.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((c) => {
    switch (c) {
      case "allowBlank":
        return Te(s);
      case "allowNull":
        return pe(s);
    }
  }) : s;
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
function ve() {
  return (n) => !!n || "Doit être accepté";
}
function pe(n) {
  return (t) => (t === null || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function Te(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function De() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Be(n) {
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
function xe(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function qe(n, t) {
  return (l) => {
    const e = n();
    return Number(l) === e || `Égale à ${e}`;
  };
}
function Re(n, t) {
  return (l) => {
    const e = n();
    return Number(l) !== e || `Doit être différent de ${n}`;
  };
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
function Ee() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ie(n) {
  return (t) => {
    const l = n();
    return String(t).length <= l || `Inf. ou égal à ${l}`;
  };
}
function je(n) {
  return (t) => {
    const l = n();
    return String(t).length < l || `Inf. à ${l}`;
  };
}
function ze(n) {
  return (t) => {
    const l = n();
    return String(t).length >= l || `Sup. ou égal à ${l}`;
  };
}
function Le(n) {
  return (t) => {
    const l = n();
    return String(t).length > l || `Sup. à ${l}`;
  };
}
function Ue(n, t) {
  return (l) => {
    const e = n(), r = t();
    return String(l).length >= e && String(l).length <= r || `Entre ${e} et ${r}`;
  };
}
function Ge(n, t) {
  return (l) => {
    const e = n();
    return String(l) === e || `Égale à ${e}`;
  };
}
function He(n) {
  return (t) => {
    const l = n();
    return String(t).length === l || `Doit contenir ${l} caractères`;
  };
}
function Pe(n) {
  return (t) => {
    const l = n();
    return String(t) !== l || `Doit être différent de ${l}`;
  };
}
function Ye(n, t) {
  return (l) => {
    const e = n(), r = m.extractDate(String(l), t), a = m.extractDate(e, t);
    return !Number.isNaN(r.getTime()) && r <= a || `Inf. ou égal à ${e}`;
  };
}
function Qe(n, t) {
  return (l) => {
    const e = n(), r = m.extractDate(String(l), t), a = m.extractDate(e, t);
    return !Number.isNaN(r.getTime()) && r < a || `Inf. à ${e}`;
  };
}
function Ae(n, t) {
  return (l) => {
    const e = n(), r = m.extractDate(String(l), t), a = m.extractDate(e, t);
    return !Number.isNaN(r.getTime()) && r >= a || `Sup. ou égal à ${e}`;
  };
}
function Ke(n, t) {
  return (l) => {
    const e = n(), r = m.extractDate(String(l), t), a = m.extractDate(e, t);
    return !Number.isNaN(r.getTime()) && r > a || `Sup. à ${e}`;
  };
}
function Je(n, t) {
  return (l) => {
    const e = n(), r = m.extractDate(String(l), t), a = m.extractDate(e, t);
    return r === a || `Égale à ${r}`;
  };
}
function Xe(n, t) {
  return (l) => {
    const e = n();
    return m.extractDate(String(l), t) !== m.extractDate(e, t) || `Doit être différent de ${e}`;
  };
}
function Ze(n) {
  return (t) => !Number.isNaN(m.extractDate(String(t), n).getTime()) || "Date invalide";
}
const Me = {
  computeServerRules: Ce
}, y = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = re(l.field.provideUniqKey), r = N();
    function a() {
      return r.value;
    }
    function o() {
      e && (r.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ), r.value = s(r.value));
    }
    function s(g) {
      switch (l.field.type) {
        case "date":
          return m.formatDate(
            m.extractDate(
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
          r.value = m.formatDate(
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
    function c() {
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
      getValue: a
    }), H(() => {
      var V;
      o();
      const g = (V = ae()) == null ? void 0 : V.exposed;
      g && e && e.registerRef(
        l.field.metadata.field_name,
        g
      );
    }), (g, V) => (d(), B("div", null, [
      l.field.resetable ? O(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (d(), b($(f(e).getFormFactoryInstance().wrapperResetComponent), { reset: o }))
      ]) : x("", !0),
      O(g.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: i, field: g.field, injectForm: f(e), reset: o, clear: u, getComputedRules: c }
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
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(I), k(v(l(a))), null, 16)
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
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(I), P(l(a), { type: "textarea" }), null, 16)
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
    function e(s) {
      const u = s.injectForm.getFormFactoryInstance(), c = u.formSettings, i = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => s.modelValueOnUpdate(g),
        modelValue: s.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
        mask: s.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, u) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: c }) => [
        C(f(I), k(v(e(c))), {
          append: _(() => [
            C(f(Y), k(v(r())), {
              default: _(() => [
                C(f(ie), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: _(() => [
                    C(f(ue), k(v(a(c))), {
                      default: _(() => [
                        R("div", tt, [
                          C(f(w), {
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
        "onUpdate:modelValue": (a) => e.modelValueOnUpdate(a),
        modelValue: e.modelValue,
        // display
        label: e.field.label,
        dense: r.fieldDense,
        color: r.fieldColor,
        class: e.field.cssClass
      };
    }
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(ce), k(v(l(a))), null, 16)
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
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(I), P(l(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(z), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), at = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, st = {};
function it(n, t) {
  return " TODO json edit ? ";
}
const ut = /* @__PURE__ */ at(st, [["render", it]]), ct = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(z), k(v(l(a))), null, 16)
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
      const r = e.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (d(), b(y, {
      field: t.field
    }, {
      default: _(({ propsWrapper: a }) => [
        C(f(z), k(v(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class L {
  constructor(t, l, e, r, a, o) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...D.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...D.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = r ?? D.getGlobalActionComponent(), this.sectionComponent = a ?? D.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? D.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: We,
      text: et,
      number: ot,
      date: nt,
      selectString: ct,
      selectBelongsTo: dt,
      selectHasMany: rt,
      checkbox: lt,
      object: ut
    }[t];
  }
  getAllField(t, l) {
    const e = [];
    return t.form.sections.forEach((a) => {
      const o = [];
      a.fields.forEach((u) => {
        const c = L.getFieldComponentByFormFieldType(
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
          component: c
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
    ), a = ft(de()), o = N({}), s = N(), u = N(!1), c = N(!1);
    async function i() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        r.getAllField(e, a)
      ), u.value = !0;
    }
    async function g() {
      c.value = !0;
      const h = {};
      Object.entries(o.value).forEach((T) => {
        h[T[0]] = T[1].getValue();
      });
      const p = await l.submitForm({ formData: h });
      e && (e.resource_data = p), V(), c.value = !1;
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
      const p = Object.entries(o.value).find((T) => T[0] === h);
      return p ? p[1].getValue() : null;
    }
    function Z() {
      return r;
    }
    function M() {
      return s.value;
    }
    return se(a, {
      registerRef: K,
      getDefaultDataByFieldName: J,
      getFieldDataByFieldName: X,
      getFormFactoryInstance: Z,
      getForm: M
    }), t({}), H(async () => {
      await i();
    }), (h, p) => u.value && s.value ? (d(), B("div", mt, [
      R("div", {
        class: G(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (d(!0), B(j, null, U(s.value.sections, (T, W) => (d(), b($(f(r).sectionComponent), {
          key: W,
          section: T
        }, {
          default: _(() => [
            (d(!0), B(j, null, U(T.fields, (q) => (d(), B(j, {
              key: q.metadata.field_name
            }, [
              h.$slots[q.metadata.field_name] ? (d(), b(y, {
                key: 1,
                field: q
              }, {
                default: _(({ propsWrapper: ee }) => [
                  O(h.$slots, "default", { propsWrapper: ee })
                ]),
                _: 2
              }, 1032, ["field"])) : (d(), b($(q.component), {
                key: 0,
                field: q
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (d(), b($(f(r).actionComponent), {
        isLoadingSubmit: c.value,
        submit: g,
        clear: s.value.clearable ? A : void 0,
        reset: s.value.resetable ? V : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      h.$slots.more_actions ? O(h.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : x("", !0)
    ])) : x("", !0);
  }
});
export {
  D as Submit64,
  _t as Submit64Form
};
