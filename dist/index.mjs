var se = Object.defineProperty;
var ue = (l, e, n) => e in l ? se(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[e] = n;
var C = (l, e, n) => ue(l, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as S, createElementBlock as p, openBlock as m, createVNode as y, createBlock as h, createCommentVNode as O, unref as d, normalizeClass as A, createElementVNode as R, toDisplayString as z, renderSlot as $, resolveComponent as ce, inject as de, ref as F, onMounted as Q, getCurrentInstance as me, resolveDynamicComponent as x, withCtx as g, normalizeProps as D, guardReactiveProps as N, mergeProps as j, createTextVNode as Y, provide as fe, Fragment as U, renderList as P } from "vue";
import { QBtn as w, QIcon as K, date as b, QInput as L, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as G, QItem as J, QItemSection as X, QItemLabel as Z, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => (m(), p("div", ye, [
      y(d(w), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (m(), h(d(w), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      e.clear ? (m(), h(d(w), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : O("", !0)
    ]));
  }
}), Se = { class: "flex row items-center" }, Fe = { class: "text-body1 text-weight-medium" }, De = { class: "flex column q-gutter-sm" }, ve = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (n, t) => (m(), p("div", {
      class: A(["flex column", e.section.cssClass])
    }, [
      R("div", Se, [
        e.section.icon ? (m(), h(d(K), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : O("", !0),
        R("div", Fe, z(e.section.label), 1)
      ]),
      R("div", De, [
        $(n.$slots, "default")
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => {
      const i = ce("q-icon");
      return m(), h(i, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), E = class E {
  constructor() {
    C(this, "_formSettings");
    C(this, "_formStyleConfig");
    C(this, "_actionComponent");
    C(this, "_sectionComponent");
    C(this, "_wrapperResetComponent");
    C(this, "_associationDisplayDictonary");
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
    }, this._actionComponent = Ce, this._sectionComponent = ve, this._wrapperResetComponent = ke, this._associationDisplayDictonary = {};
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
C(E, "_instance", new E());
let V = E;
function Ve(l, e, n) {
  const t = n.getFormFactoryInstance().formSettings, i = n.getForm(), s = (u, a, f) => u[a] ? f ? () => r(u[a]) : () => u[a] : u.compare_to ? () => n.getFieldDataByFieldName(u.compare_to) : () => "", r = (u) => String(
    b.formatDate(
      b.extractDate(u, i.backendDateFormat),
      t.dateFormat
    )
  ), o = [], c = [];
  switch (e) {
    case "date":
      o.push(ot(t.dateFormat));
  }
  return l.forEach((u) => {
    const a = u;
    switch (a.type) {
      case "required":
        o.push(Ne());
        break;
      case "absence":
        o.push(Be());
        break;
      case "acceptance":
        o.push(pe());
        break;
      case "inclusion":
        o.push(M(a.including));
        break;
      case "exclusion":
        o.push(Te(a.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        c.push("allowNull");
        break;
      case "allowBlank":
        c.push("allowBlank");
        break;
      case "positiveNumber":
        o.push(qe());
        break;
      case "lessThanOrEqualNumber":
        o.push(
          Re(
            s(a, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        o.push(
          $e(
            s(a, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        o.push(
          we(
            s(a, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        o.push(
          Ie(
            s(a, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        o.push(
          Ee(s(a, "equal_to"))
        );
        break;
      case "otherThanNumber":
        o.push(
          je(
            s(a, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        o.push(Le());
        break;
      case "numberNumericOnly":
        o.push(Ue());
        break;
      case "numberEvenOnly":
        o.push(ze());
        break;
      case "numberOddOnly":
        o.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        o.push(
          He(
            s(a, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        o.push(
          Pe(
            s(a, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        o.push(
          Ae(
            s(a, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        o.push(
          Qe(
            s(a, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        o.push(
          Je(
            s(a, "equal_to")
          )
        );
        break;
      case "equalToString":
        o.push(
          Ke(s(a, "equal_to"))
        );
        break;
      case "betweenStringLength":
        o.push(
          Ye(
            () => a.min,
            () => a.max
          )
        );
        break;
      case "otherThanString":
        o.push(
          Xe(
            s(a, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        o.push(
          Ze(
            s(a, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        o.push(
          Me(
            s(a, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        o.push(
          We(
            s(a, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        o.push(
          et(
            s(a, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        o.push(
          tt(
            s(a, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        o.push(
          nt(
            s(a, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), c.length > 0 ? c.map((u) => {
    switch (u) {
      case "allowBlank":
        return Oe(o);
      case "allowNull":
        return xe(o);
    }
  }) : o;
}
function Ne() {
  return (l) => !!l || "Ce champ est requis";
}
function M(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function Te(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${M.toString()}`
  );
}
function Be() {
  return (l) => !l || "Ce champ doit être vide";
}
function pe() {
  return (l) => !!l || "Doit être accepté";
}
function xe(l) {
  return (e) => (e === null || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Oe(l) {
  return (e) => (e === "" || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function Re(l) {
  return (e) => {
    const n = l();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function $e(l) {
  return (e) => {
    const n = l();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function we(l) {
  return (e) => {
    const n = l();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Ie(l) {
  return (e) => {
    const n = l();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function Ee(l, e) {
  return (n) => {
    const t = l();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function je(l, e) {
  return (n) => {
    const t = l();
    return Number(n) !== t || `Doit être différent de ${l}`;
  };
}
function Le() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Ue() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function ze() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function He(l) {
  return (e) => {
    const n = l();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Pe(l) {
  return (e) => {
    const n = l();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Ae(l) {
  return (e) => {
    const n = l();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function Qe(l) {
  return (e) => {
    const n = l();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Ye(l, e) {
  return (n) => {
    const t = l(), i = e();
    return String(n).length >= t && String(n).length <= i || `Entre ${t} et ${i}`;
  };
}
function Ke(l, e) {
  return (n) => {
    const t = l();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Je(l) {
  return (e) => {
    const n = l();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Xe(l) {
  return (e) => {
    const n = l();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Ze(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i <= s || `Inf. ou égal à ${t}`;
  };
}
function Me(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i < s || `Inf. à ${t}`;
  };
}
function We(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i >= s || `Sup. ou égal à ${t}`;
  };
}
function et(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i > s || `Sup. à ${t}`;
  };
}
function tt(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return i === s || `Égale à ${i}`;
  };
}
function nt(l, e) {
  return (n) => {
    const t = l();
    return b.extractDate(String(n), e) !== b.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function ot(l) {
  return (e) => !Number.isNaN(b.extractDate(String(e), l).getTime()) || "Date invalide";
}
const lt = {
  computeServerRules: Ve
}, v = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const n = l, t = de(n.field.provideUniqKey), i = F();
    function s() {
      return i.value;
    }
    function r() {
      t && (i.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), i.value = o(i.value));
    }
    function o(f) {
      switch (n.field.type) {
        case "date":
          return b.formatDate(
            b.extractDate(
              String(f),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return f;
    }
    function c() {
      switch (n.field.type) {
        case "string":
          i.value = "";
          break;
        case "checkbox":
          i.value = !1;
          break;
        case "date":
          i.value = b.formatDate(
            /* @__PURE__ */ new Date(),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
          break;
        case "number":
          i.value = 0;
          break;
        case "selectString":
          i.value = null;
          break;
        case "text":
          i.value = "";
          break;
        case "object":
          i.value = {};
          break;
        case "selectBelongsTo":
          i.value = null;
          break;
        case "selectHasMany":
          i.value = null;
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
    function a(f) {
      i.value = f;
    }
    return e({
      reset: r,
      clear: c,
      getValue: s
    }), Q(() => {
      var k;
      r();
      const f = (k = me()) == null ? void 0 : k.exposed;
      f && t && t.registerRef(
        n.field.metadata.field_name,
        f
      );
    }), (f, k) => (m(), p("div", null, [
      n.field.resetable ? $(f.$slots, "reset", {
        key: 0,
        actionProps: { reset: r }
      }, () => [
        (m(), h(x(d(t).getFormFactoryInstance().wrapperResetComponent), { reset: r }))
      ]) : O("", !0),
      $(f.$slots, "default", {
        propsWrapper: { modelValue: i.value, modelValueOnUpdate: a, field: f.field, injectForm: d(t), reset: r, clear: c, getComputedRules: u }
      })
    ]));
  }
}), at = /* @__PURE__ */ S({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const i = t.injectForm.getFormFactoryInstance(), s = i.formSettings, r = i.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: r.fieldOutlined,
        filled: r.fieldFilled,
        standout: r.fieldStandout,
        borderless: r.fieldBorderless,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        hideBottomSpace: r.fieldHideBottomSpace,
        color: r.fieldColor,
        bgColor: r.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, i) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(d(L), D(N(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ S({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const i = t.injectForm.getFormFactoryInstance(), s = i.formSettings, r = i.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: r.fieldOutlined,
        filled: r.fieldFilled,
        standout: r.fieldStandout,
        borderless: r.fieldBorderless,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        hideBottomSpace: r.fieldHideBottomSpace,
        color: r.fieldColor,
        bgColor: r.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, i) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(d(L), j(n(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = { class: "row items-center justify-end" }, st = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = F();
    function t(o) {
      const c = o.injectForm.getFormFactoryInstance(), u = c.formSettings, a = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (f) => o.modelValueOnUpdate(f),
        modelValue: o.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: o.field.clearable,
        rules: o.getComputedRules(),
        // events
        onClear: o.clear,
        // display
        label: o.field.label,
        hint: o.field.hint,
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
        class: o.field.cssClass
      };
    }
    function i(o) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function s(o) {
      return {
        "onUpdate:modelValue": (c) => o.modelValueOnUpdate(c),
        modelValue: o.modelValue,
        mask: o.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function r() {
      n.value && n.value.hide();
    }
    return (o, c) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(d(L), D(N(t(u))), {
          append: g(() => [
            y(d(K), D(N(i())), {
              default: g(() => [
                y(d(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    y(d(he), D(N(s(u))), {
                      default: g(() => [
                        R("div", rt, [
                          y(d(w), {
                            onClick: r,
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
}), ut = /* @__PURE__ */ S({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const i = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: i.fieldDense,
        color: i.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, i) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(d(be), D(N(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ S({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const i = t.injectForm.getFormFactoryInstance(), s = i.formSettings, r = i.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
        outlined: r.fieldOutlined,
        filled: r.fieldFilled,
        standout: r.fieldStandout,
        borderless: r.fieldBorderless,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        hideBottomSpace: r.fieldHideBottomSpace,
        color: r.fieldColor,
        bgColor: r.fieldBgColor,
        class: t.field.cssClass
      };
    }
    return (t, i) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(d(L), j(n(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(l) {
  return Symbol(l);
}
function I() {
  return 20;
}
const mt = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = F([]), i = F({
      limit: I(),
      offset: 0
    });
    function s(o) {
      const c = o.injectForm.getFormFactoryInstance(), u = c.formSettings, a = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (f) => o.modelValueOnUpdate(f),
        modelValue: o.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: o.field.clearable,
        rules: o.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: o.clear,
        onFilter: r(o),
        // display
        label: o.field.label,
        hint: o.field.hint,
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
        class: o.field.cssClass
      };
    }
    function r(o) {
      return (c, u) => {
        const a = o.injectForm.getAssociationDataCallback();
        c === "" && (i.value = {
          limit: I(),
          offset: 0
        }), u(() => {
          a({
            resourceName: o.injectForm.getForm().resourceName,
            associationName: o.field.metadata.field_association_name,
            limit: i.value.limit,
            offset: i.value.offset,
            labelFilter: c,
            context: o.injectForm.getForm().context
          }).then((f) => {
            t.value = f.rows;
          });
        });
      };
    }
    return (o, c) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(d(G), D(N(s(u))), {
          options: g((a) => [
            d(n) ? (m(), h(d(J), D(j({ key: 0 }, a.itemProps)), {
              default: g(() => [
                y(d(X), null, {
                  default: g(() => [
                    y(d(Z), null, {
                      default: g(() => [
                        Y(z(a.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), h(x(d(n)), {
              key: 1,
              scope: a
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ft = (l, e) => {
  const n = l.__vccOpts || l;
  for (const [t, i] of e)
    n[t] = i;
  return n;
}, gt = {};
function ht(l, e) {
  return " TODO json edit ? ";
}
const bt = /* @__PURE__ */ ft(gt, [["render", ht]]), _t = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = F([]), t = F([]);
    function i(r) {
      const o = r.injectForm.getFormFactoryInstance(), c = o.formSettings, u = o.formStyleConfig;
      return n.value = Object.freeze(r.field.selectOptions ?? []), t.value = r.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (a) => r.modelValueOnUpdate(a),
        modelValue: r.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: r.field.selectOptions || [],
        // events
        onClear: r.clear,
        onFilter: s,
        // display
        label: r.field.label,
        hint: r.field.hint,
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
        class: r.field.cssClass
      };
    }
    function s(r, o) {
      if (r === "") {
        o(() => {
          t.value = [...n.value];
        });
        return;
      }
      o(() => {
        const c = r.toLowerCase();
        t.value = n.value.filter((u) => u.label.toLowerCase().includes(c));
      });
    }
    return (r, o) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        y(d(G), D(N(i(c))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = F([]), i = F({
      limit: I(),
      offset: 0
    });
    function s(o) {
      const c = o.injectForm.getFormFactoryInstance(), u = c.formSettings, a = c.formStyleConfig;
      return t.value = [
        {
          label: o.field.defaultDisplayValue ?? "",
          value: o.modelValue
        }
      ], {
        // behaviour
        "onUpdate:modelValue": (f) => o.modelValueOnUpdate(f),
        modelValue: o.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: o.field.clearable,
        rules: o.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: o.clear,
        onFilter: r(o),
        // display
        label: o.field.label,
        hint: o.field.hint,
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
        class: o.field.cssClass
      };
    }
    function r(o) {
      return (c, u) => {
        const a = o.injectForm.getAssociationDataCallback();
        c === "" && (i.value = {
          limit: I(),
          offset: 0
        }), u(() => {
          a({
            resourceName: o.injectForm.getForm().resourceName,
            associationName: o.field.metadata.field_association_name,
            limit: i.value.limit,
            offset: i.value.offset,
            labelFilter: c,
            context: o.injectForm.getForm().context
          }).then((f) => {
            t.value = f.rows;
          });
        });
      };
    }
    return (o, c) => (m(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(d(G), D(N(s(u))), {
          options: g((a) => [
            d(n) ? (m(), h(d(J), D(j({ key: 0 }, a.itemProps)), {
              default: g(() => [
                y(d(X), null, {
                  default: g(() => [
                    y(d(Z), null, {
                      default: g(() => [
                        Y(z(a.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (m(), h(x(d(n)), {
              key: 1,
              scope: a
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class H {
  constructor(e, n, t, i, s, r, o) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    C(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...V.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...V.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = i ?? V.getGlobalActionComponent(), this.sectionComponent = s ?? V.getGlobalSectionComponent(), this.wrapperResetComponent = r ?? V.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = o ?? V.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: at,
      text: it,
      number: ct,
      date: st,
      selectString: _t,
      selectBelongsTo: yt,
      selectHasMany: mt,
      checkbox: ut,
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const i = [];
    return e.form.sections.forEach((r) => {
      const o = [];
      r.fields.forEach((u) => {
        const a = H.getFieldComponentByFormFieldType(
          u.field_type
        ), f = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, k = {
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
          component: a,
          componentOptions: f
        };
        o.push(k);
      });
      const c = {
        label: r.label,
        icon: r.icon,
        cssClass: r.css_class,
        fields: o
      };
      i.push(c);
    }), {
      sections: i,
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
}, vt = /* @__PURE__ */ S({
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
  setup(l, { expose: e }) {
    const n = l;
    let t = null;
    const i = Object.freeze(
      new H(
        n.resourceName,
        n.globalFormSettings
      )
    ), s = dt(_e()), r = F({}), o = F(), c = F(!1), u = F(!1);
    async function a() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), o.value = Object.freeze(
        i.getForm(
          t,
          s,
          n.context
        )
      ), c.value = !0;
    }
    async function f() {
      u.value = !0;
      const _ = {};
      Object.entries(r.value).forEach((B) => {
        _[B[0]] = B[1].getValue();
      });
      const T = await n.submitForm({ formData: _ });
      t && (t.resource_data = T), k(), u.value = !1;
    }
    function k() {
      Object.values(r.value).forEach((_) => {
        _.reset();
      });
    }
    function W() {
      Object.values(r.value).forEach((_) => {
        _.clear();
      });
    }
    function ee(_, T) {
      r.value[_] = T;
    }
    function te(_) {
      if (t)
        return t.resource_data[_];
    }
    function ne(_) {
      const T = Object.entries(r.value).find((B) => B[0] === _);
      return T ? T[1].getValue() : null;
    }
    function oe() {
      return i;
    }
    function le() {
      return o.value;
    }
    function ae() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return fe(s, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), Q(async () => {
      await a();
    }), (_, T) => c.value && o.value ? (m(), p("div", Ct, [
      R("div", {
        class: A(o.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), p(U, null, P(o.value.sections, (B, ie) => (m(), h(x(d(i).sectionComponent), {
          key: ie,
          section: B
        }, {
          default: g(() => [
            (m(!0), p(U, null, P(B.fields, (q) => (m(), p(U, {
              key: q.metadata.field_name
            }, [
              _.$slots[q.metadata.field_name] ? (m(), h(v, {
                key: 1,
                field: q
              }, {
                default: g(({ propsWrapper: re }) => [
                  $(_.$slots, "default", { propsWrapper: re })
                ]),
                _: 2
              }, 1032, ["field"])) : (m(), h(x(q.component), {
                key: 0,
                field: q
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (m(), h(x(d(i).actionComponent), {
        isLoadingSubmit: u.value,
        submit: f,
        clear: o.value.clearable ? W : void 0,
        reset: o.value.resetable ? k : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      _.$slots.more_actions ? $(_.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  V as Submit64,
  vt as Submit64Form
};
