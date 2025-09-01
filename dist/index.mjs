var se = Object.defineProperty;
var ue = (o, e, n) => e in o ? se(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var S = (o, e, n) => ue(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as B, openBlock as m, createVNode as C, createBlock as b, createCommentVNode as q, unref as f, normalizeClass as Q, createElementVNode as w, toDisplayString as G, renderSlot as I, resolveComponent as ce, inject as de, ref as D, onMounted as Y, getCurrentInstance as fe, resolveDynamicComponent as x, withCtx as h, normalizeProps as k, guardReactiveProps as O, mergeProps as p, createTextVNode as K, provide as me, Fragment as z, renderList as A } from "vue";
import { QBtn as E, QIcon as M, date as _, QInput as U, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as H, QItem as J, QItemSection as X, QItemLabel as Z, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ F({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => (m(), B("div", ye, [
      C(f(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (m(), b(f(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      e.clear ? (m(), b(f(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : q("", !0)
    ]));
  }
}), Se = { class: "flex row items-center" }, Fe = { class: "text-body1 text-weight-medium" }, De = { class: "flex column q-gutter-sm" }, ve = /* @__PURE__ */ F({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(o) {
    const e = o;
    return (n, t) => (m(), B("div", {
      class: Q(["flex column", e.section.cssClass])
    }, [
      w("div", Se, [
        e.section.icon ? (m(), b(f(M), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        w("div", Fe, G(e.section.label), 1)
      ]),
      w("div", De, [
        I(n.$slots, "default")
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => {
      const a = ce("q-icon");
      return m(), b(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), L = class L {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyleConfig");
    S(this, "_actionComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
    S(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Ce, this._sectionComponent = ve, this._wrapperResetComponent = Ve, this._associationDisplayDictonary = {};
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...e
    };
  }
  static registerGlobalFormStyleSetting(e) {
    this._instance._formStyleConfig = {
      ...this._instance._formStyleConfig,
      ...e
    };
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
  static registerGlobalAssociationDisplayDictonary(e) {
    this._instance._associationDisplayDictonary = e;
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
  static getGlobalAssociationDisplayDictonary() {
    return this._instance._associationDisplayDictonary;
  }
};
S(L, "_instance", new L());
let V = L;
function ke(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), s = (u, c, d) => u[c] ? d ? () => i(u[c]) : () => u[c] : u.compare_to ? () => n.getFieldDataByFieldName(u.compare_to) : () => "", i = (u) => String(
    _.formatDate(
      _.extractDate(u, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], r = [];
  switch (e) {
    case "date":
      l.push(ot(t.dateFormat));
  }
  return o.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        l.push(Te());
        break;
      case "absence":
        l.push(Be());
        break;
      case "acceptance":
        l.push(xe());
        break;
      case "inclusion":
        l.push(W(c.including));
        break;
      case "exclusion":
        l.push(Ne(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        r.push("allowNull");
        break;
      case "allowBlank":
        r.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(pe());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Re(
            s(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $e(
            s(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          we(
            s(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ie(
            s(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ee(s(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          je(
            s(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Le());
        break;
      case "numberNumericOnly":
        l.push(Ue());
        break;
      case "numberEvenOnly":
        l.push(ze());
        break;
      case "numberOddOnly":
        l.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          He(
            s(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Pe(
            s(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ae(
            s(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qe(
            s(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Me(
            s(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ke(s(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ye(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Je(
            s(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Xe(
            s(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Ze(
            s(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          We(
            s(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          et(
            s(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          tt(
            s(c, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          nt(
            s(c, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((u) => {
    switch (u) {
      case "allowBlank":
        return qe(l);
      case "allowNull":
        return Oe(l);
    }
  }) : l;
}
function Te() {
  return (o) => !!o || "Ce champ est requis";
}
function W(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Ne(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${W.toString()}`
  );
}
function Be() {
  return (o) => !o || "Ce champ doit être vide";
}
function xe() {
  return (o) => !!o || "Doit être accepté";
}
function Oe(o) {
  return (e) => (e === null || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe(o) {
  return (e) => (e === "" || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function pe() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Re(o) {
  return (e) => {
    const n = o();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function $e(o) {
  return (e) => {
    const n = o();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function we(o) {
  return (e) => {
    const n = o();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Ie(o) {
  return (e) => {
    const n = o();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function Ee(o, e) {
  return (n) => {
    const t = o();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function je(o, e) {
  return (n) => {
    const t = o();
    return Number(n) !== t || `Doit être différent de ${o}`;
  };
}
function Le() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Ue() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ze() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function He(o) {
  return (e) => {
    const n = o();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Pe(o) {
  return (e) => {
    const n = o();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Ae(o) {
  return (e) => {
    const n = o();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function Qe(o) {
  return (e) => {
    const n = o();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Ye(o, e) {
  return (n) => {
    const t = o(), a = e();
    return String(n).length >= t && String(n).length <= a || `Entre ${t} et ${a}`;
  };
}
function Ke(o, e) {
  return (n) => {
    const t = o();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Me(o) {
  return (e) => {
    const n = o();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Je(o) {
  return (e) => {
    const n = o();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Xe(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= s || `Inf. ou égal à ${t}`;
  };
}
function Ze(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < s || `Inf. à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= s || `Sup. ou égal à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > s || `Sup. à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = _.extractDate(String(n), e), s = _.extractDate(t, e);
    return a === s || `Égale à ${a}`;
  };
}
function nt(o, e) {
  return (n) => {
    const t = o();
    return _.extractDate(String(n), e) !== _.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function ot(o) {
  return (e) => !Number.isNaN(_.extractDate(String(e), o).getTime()) || "Date invalide";
}
const lt = {
  computeServerRules: ke
}, v = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const n = o, t = de(n.field.provideUniqKey), a = D();
    function s() {
      return a.value;
    }
    function i() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = l(a.value));
    }
    function l(g) {
      switch (n.field.type) {
        case "date":
          return _.formatDate(
            _.extractDate(
              String(g),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return g;
    }
    function r() {
      switch (n.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = _.formatDate(
            /* @__PURE__ */ new Date(),
            t.getFormFactoryInstance().formSettings.dateFormat
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
    function u() {
      return lt.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function c(g) {
      a.value = g;
    }
    function d() {
      return f(a);
    }
    return e({
      reset: i,
      clear: r,
      getValue: s
    }), Y(() => {
      var R;
      i();
      const g = (R = fe()) == null ? void 0 : R.exposed;
      g && t && t.registerRef(
        n.field.metadata.field_name,
        g
      );
    }), (g, R) => (m(), B("div", null, [
      n.field.resetable ? I(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: i }
      }, () => [
        (m(), b(x(f(t).getFormFactoryInstance().wrapperResetComponent), { reset: i }))
      ]) : q("", !0),
      I(g.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: c, field: g.field, injectForm: f(t), reset: i, clear: r, getComputedRules: u, getModelValueValue: d }
      })
    ]));
  }
}), at = /* @__PURE__ */ F({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        C(f(U), k(O(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        C(f(U), p(n(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = { class: "row items-center justify-end" }, st = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D();
    function t(l) {
      const r = l.injectForm.getFormFactoryInstance(), u = r.formSettings, c = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        // events
        onClear: l.clear,
        // display
        label: l.field.label,
        hint: l.field.hint,
        outlined: c.fieldOutlined,
        filled: c.fieldFilled,
        standout: c.fieldStandout,
        borderless: c.fieldBorderless,
        rounded: c.fieldRounded,
        square: c.fieldSquare,
        dense: c.fieldDense,
        hideBottomSpace: c.fieldHideBottomSpace,
        color: c.fieldColor,
        bgColor: c.fieldBgColor,
        class: l.field.cssClass
      };
    }
    function a(l) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function s(l) {
      return {
        "onUpdate:modelValue": (r) => l.modelValueOnUpdate(r),
        modelValue: l.modelValue,
        mask: l.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (l, r) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: u }) => [
        C(f(U), k(O(t(u))), {
          append: h(() => [
            C(f(M), k(O(a())), {
              default: h(() => [
                C(f(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: h(() => [
                    C(f(he), k(O(s(u))), {
                      default: h(() => [
                        w("div", rt, [
                          C(f(E), {
                            onClick: i,
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
}), ut = /* @__PURE__ */ F({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        C(f(be), k(O(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ F({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), s = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, a) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: s }) => [
        C(f(U), p(n(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(o) {
  return Symbol(o);
}
function j() {
  return 20;
}
const ft = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: j(),
      offset: 0
    });
    function s(r) {
      const u = r.injectForm.getFormFactoryInstance(), c = u.formSettings, d = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => r.modelValueOnUpdate(g),
        modelValue: r.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        // events
        onClear: r.clear,
        onFilter: i(r),
        // display
        label: r.field.label,
        hint: r.field.hint,
        outlined: d.fieldOutlined,
        filled: d.fieldFilled,
        standout: d.fieldStandout,
        borderless: d.fieldBorderless,
        rounded: d.fieldRounded,
        square: d.fieldSquare,
        dense: d.fieldDense,
        hideBottomSpace: d.fieldHideBottomSpace,
        color: d.fieldColor,
        bgColor: d.fieldBgColor,
        class: r.field.cssClass
      };
    }
    function i(r) {
      return (u, c) => {
        const d = r.injectForm.getAssociationDataCallback();
        u === "" && (a.value = {
          limit: j(),
          offset: 0
        }), c(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: u,
            context: r.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function l(r) {
      setTimeout(() => {
        t.value = [
          {
            label: r.field.defaultDisplayValue ?? String(r.getModelValueValue()),
            value: r.getModelValueValue()
          }
        ];
      }, 0);
    }
    return (r, u) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(f(H), p(s(c), {
          onVnodeMounted: (d) => l(c),
          options: t.value
        }), {
          options: h((d) => [
            f(n) ? (m(), b(f(J), k(p({ key: 0 }, d.itemProps)), {
              default: h(() => [
                C(f(X), null, {
                  default: h(() => [
                    C(f(Z), null, {
                      default: h(() => [
                        K(G(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), b(x(f(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted", "options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), mt = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, gt = {};
function ht(o, e) {
  return " TODO json edit ? ";
}
const bt = /* @__PURE__ */ mt(gt, [["render", ht]]), _t = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D([]), t = D([]);
    function a(i) {
      const l = i.injectForm.getFormFactoryInstance(), r = l.formSettings, u = l.formStyleConfig;
      return n.value = Object.freeze(i.field.selectOptions ?? []), t.value = i.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (c) => i.modelValueOnUpdate(c),
        modelValue: i.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: i.field.clearable,
        rules: i.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: i.field.selectOptions || [],
        // events
        onClear: i.clear,
        onFilter: s,
        // display
        label: i.field.label,
        hint: i.field.hint,
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
        class: i.field.cssClass
      };
    }
    function s(i, l) {
      if (i === "") {
        l(() => {
          t.value = [...n.value];
        });
        return;
      }
      l(() => {
        const r = i.toLowerCase();
        t.value = n.value.filter((u) => u.label.toLowerCase().includes(r));
      });
    }
    return (i, l) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: r }) => [
        C(f(H), k(O(a(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ F({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: j(),
      offset: 0
    });
    function s(r) {
      const u = r.injectForm.getFormFactoryInstance(), c = u.formSettings, d = u.formStyleConfig;
      return console.log("bind"), {
        // behaviour
        "onUpdate:modelValue": (g) => r.modelValueOnUpdate(g),
        modelValue: r.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        // events
        onClear: r.clear,
        onFilter: i(r),
        // display
        label: r.field.label,
        hint: r.field.hint,
        outlined: d.fieldOutlined,
        filled: d.fieldFilled,
        standout: d.fieldStandout,
        borderless: d.fieldBorderless,
        rounded: d.fieldRounded,
        square: d.fieldSquare,
        dense: d.fieldDense,
        hideBottomSpace: d.fieldHideBottomSpace,
        color: d.fieldColor,
        bgColor: d.fieldBgColor,
        class: r.field.cssClass
      };
    }
    function i(r) {
      return (u, c) => {
        const d = r.injectForm.getAssociationDataCallback();
        u === "" && (a.value = {
          limit: j(),
          offset: 0
        }), c(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: u,
            context: r.injectForm.getForm().context
          }).then((g) => {
            t.value = g.rows;
          });
        });
      };
    }
    function l(r) {
      setTimeout(() => {
        t.value = [
          {
            label: r.field.defaultDisplayValue ?? String(r.getModelValueValue()),
            value: r.getModelValueValue()
          }
        ], console.log("ldfgldf");
      }, 0);
    }
    return (r, u) => (m(), b(v, {
      field: e.field
    }, {
      default: h(({ propsWrapper: c }) => [
        C(f(H), p(s(c), {
          onVnodeMounted: (d) => l(c),
          options: t.value
        }), {
          options: h((d) => [
            f(n) ? (m(), b(f(J), k(p({ key: 0 }, d.itemProps)), {
              default: h(() => [
                C(f(X), null, {
                  default: h(() => [
                    C(f(Z), null, {
                      default: h(() => [
                        K(G(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), b(x(f(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted", "options"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class P {
  constructor(e, n, t, a, s, i, l) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...V.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...V.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = a ?? V.getGlobalActionComponent(), this.sectionComponent = s ?? V.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? V.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? V.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: at,
      text: it,
      number: ct,
      date: st,
      selectString: _t,
      selectBelongsTo: yt,
      selectHasMany: ft,
      checkbox: ut,
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((u) => {
        const c = P.getFieldComponentByFormFieldType(
          u.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, g = {
          type: u.field_type,
          metadata: u,
          label: u.label,
          hint: u.hint,
          cssClass: u.css_class,
          selectOptions: u.select_options,
          rules: u.rules,
          clearable: u.clearable,
          resetable: u.resetable,
          provideUniqKey: n,
          defaultDisplayValue: u.default_display_value,
          component: c,
          componentOptions: d
        };
        l.push(g);
      });
      const r = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: l
      };
      a.push(r);
    }), {
      sections: a,
      resourceName: e.form.resource_name,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1,
      context: t
    };
  }
  getAssociationDisplayComponentByResourceName(e) {
    return this.associationDisplayDictionary[e];
  }
}
const Ct = {
  key: 0,
  class: "flex column"
}, vt = /* @__PURE__ */ F({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    getAssociationData: {},
    globalFormSettings: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const n = o;
    let t = null;
    const a = Object.freeze(
      new P(
        n.resourceName,
        n.globalFormSettings
      )
    ), s = dt(_e()), i = D({}), l = D(), r = D(!1), u = D(!1);
    async function c() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), l.value = Object.freeze(
        a.getForm(
          t,
          s,
          n.context
        )
      ), r.value = !0;
    }
    async function d() {
      u.value = !0;
      const y = {};
      Object.entries(i.value).forEach((N) => {
        y[N[0]] = N[1].getValue();
      });
      const T = await n.submitForm({ formData: y });
      t && (t.resource_data = T), g(), u.value = !1;
    }
    function g() {
      Object.values(i.value).forEach((y) => {
        y.reset();
      });
    }
    function R() {
      Object.values(i.value).forEach((y) => {
        y.clear();
      });
    }
    function ee(y, T) {
      i.value[y] = T;
    }
    function te(y) {
      if (t)
        return t.resource_data[y];
    }
    function ne(y) {
      const T = Object.entries(i.value).find((N) => N[0] === y);
      return T ? T[1].getValue() : null;
    }
    function oe() {
      return a;
    }
    function le() {
      return l.value;
    }
    function ae() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return me(s, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), Y(async () => {
      await c();
    }), (y, T) => r.value && l.value ? (m(), B("div", Ct, [
      w("div", {
        class: Q(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), B(z, null, A(l.value.sections, (N, ie) => (m(), b(x(f(a).sectionComponent), {
          key: ie,
          section: N
        }, {
          default: h(() => [
            (m(!0), B(z, null, A(N.fields, ($) => (m(), B(z, {
              key: $.metadata.field_name
            }, [
              y.$slots[$.metadata.field_name] ? (m(), b(v, {
                key: 1,
                field: $
              }, {
                default: h(({ propsWrapper: re }) => [
                  I(y.$slots, "default", { propsWrapper: re })
                ]),
                _: 2
              }, 1032, ["field"])) : (m(), b(x($.component), {
                key: 0,
                field: $
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (m(), b(x(f(a).actionComponent), {
        isLoadingSubmit: u.value,
        submit: d,
        clear: l.value.clearable ? R : void 0,
        reset: l.value.resetable ? g : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? I(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  V as Submit64,
  vt as Submit64Form
};
