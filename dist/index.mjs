var re = Object.defineProperty;
var ue = (l, e, n) => e in l ? re(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[e] = n;
var S = (l, e, n) => ue(l, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as B, openBlock as f, createVNode as y, createBlock as b, createCommentVNode as q, unref as m, normalizeClass as A, createElementVNode as p, toDisplayString as z, renderSlot as w, resolveComponent as ce, inject as de, ref as D, onMounted as Q, getCurrentInstance as me, resolveDynamicComponent as x, withCtx as g, normalizeProps as V, guardReactiveProps as O, mergeProps as R, createTextVNode as Y, provide as fe, Fragment as U, renderList as P } from "vue";
import { QBtn as I, QIcon as K, date as h, QInput as L, QPopupProxy as ge, QDate as be, QCheckbox as he, QSelect as G, QItem as J, QItemSection as X, QItemLabel as Z, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ F({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => (f(), B("div", ye, [
      y(m(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), b(m(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      e.clear ? (f(), b(m(I), {
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
  setup(l) {
    const e = l;
    return (n, t) => (f(), B("div", {
      class: A(["flex column", e.section.cssClass])
    }, [
      p("div", Se, [
        e.section.icon ? (f(), b(m(K), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        p("div", Fe, z(e.section.label), 1)
      ]),
      p("div", De, [
        w(n.$slots, "default")
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => {
      const a = ce("q-icon");
      return f(), b(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (r) => e.reset())
      });
    };
  }
}), j = class j {
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
S(j, "_instance", new j());
let k = j;
function Ve(l, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), r = (u, c, d) => u[c] ? d ? () => i(u[c]) : () => u[c] : u.compare_to ? () => n.getFieldDataByFieldName(u.compare_to) : () => "", i = (u) => String(
    h.formatDate(
      h.extractDate(u, a.backendDateFormat),
      t.dateFormat
    )
  ), o = [], s = [];
  switch (e) {
    case "date":
      o.push(lt(t.dateFormat));
  }
  return l.forEach((u) => {
    const c = u;
    switch (c.type) {
      case "required":
        o.push(Ne());
        break;
      case "absence":
        o.push(Be());
        break;
      case "acceptance":
        o.push(xe());
        break;
      case "inclusion":
        o.push(M(c.including));
        break;
      case "exclusion":
        o.push(Te(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        s.push("allowNull");
        break;
      case "allowBlank":
        s.push("allowBlank");
        break;
      case "positiveNumber":
        o.push(Re());
        break;
      case "lessThanOrEqualNumber":
        o.push(
          $e(
            r(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        o.push(
          pe(
            r(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        o.push(
          we(
            r(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        o.push(
          Ie(
            r(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        o.push(
          Ee(r(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        o.push(
          je(
            r(c, "other_than")
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
            r(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        o.push(
          Pe(
            r(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        o.push(
          Ae(
            r(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        o.push(
          Qe(
            r(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        o.push(
          Je(
            r(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        o.push(
          Ke(r(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        o.push(
          Ye(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        o.push(
          Xe(
            r(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        o.push(
          Ze(
            r(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        o.push(
          Me(
            r(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        o.push(
          We(
            r(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        o.push(
          et(
            r(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        o.push(
          tt(
            r(c, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        o.push(
          nt(
            r(c, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((u) => {
    switch (u) {
      case "allowBlank":
        return qe(o);
      case "allowNull":
        return Oe(o);
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
function xe() {
  return (l) => !!l || "Doit être accepté";
}
function Oe(l) {
  return (e) => (e === null || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe(l) {
  return (e) => (e === "" || l.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Re() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function $e(l) {
  return (e) => {
    const n = l();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function pe(l) {
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
    const t = l(), a = e();
    return String(n).length >= t && String(n).length <= a || `Entre ${t} et ${a}`;
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
    const t = l(), a = h.extractDate(String(n), e), r = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= r || `Inf. ou égal à ${t}`;
  };
}
function Me(l, e) {
  return (n) => {
    const t = l(), a = h.extractDate(String(n), e), r = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < r || `Inf. à ${t}`;
  };
}
function We(l, e) {
  return (n) => {
    const t = l(), a = h.extractDate(String(n), e), r = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= r || `Sup. ou égal à ${t}`;
  };
}
function et(l, e) {
  return (n) => {
    const t = l(), a = h.extractDate(String(n), e), r = h.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > r || `Sup. à ${t}`;
  };
}
function tt(l, e) {
  return (n) => {
    const t = l(), a = h.extractDate(String(n), e), r = h.extractDate(t, e);
    return a === r || `Égale à ${a}`;
  };
}
function nt(l, e) {
  return (n) => {
    const t = l();
    return h.extractDate(String(n), e) !== h.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function lt(l) {
  return (e) => !Number.isNaN(h.extractDate(String(e), l).getTime()) || "Date invalide";
}
const ot = {
  computeServerRules: Ve
}, v = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const n = l, t = de(n.field.provideUniqKey), a = D();
    function r() {
      return a.value;
    }
    function i() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = o(a.value));
    }
    function o(d) {
      switch (n.field.type) {
        case "date":
          return h.formatDate(
            h.extractDate(
              String(d),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return d;
    }
    function s() {
      switch (n.field.type) {
        case "string":
          a.value = "";
          break;
        case "checkbox":
          a.value = !1;
          break;
        case "date":
          a.value = h.formatDate(
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
      return ot.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function c(d) {
      a.value = d;
    }
    return e({
      reset: i,
      clear: s,
      getValue: r
    }), Q(() => {
      var C;
      i();
      const d = (C = me()) == null ? void 0 : C.exposed;
      d && t && t.registerRef(
        n.field.metadata.field_name,
        d
      );
    }), (d, C) => (f(), B("div", null, [
      n.field.resetable ? w(d.$slots, "reset", {
        key: 0,
        actionProps: { reset: i }
      }, () => [
        (f(), b(x(m(t).getFormFactoryInstance().wrapperResetComponent), { reset: i }))
      ]) : q("", !0),
      w(d.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: c, field: d.field, injectForm: m(t), reset: i, clear: s, getComputedRules: u }
      })
    ]));
  }
}), at = /* @__PURE__ */ F({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), r = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        y(m(L), V(O(n(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), r = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        y(m(L), R(n(r), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = D();
    function t(o) {
      const s = o.injectForm.getFormFactoryInstance(), u = s.formSettings, c = s.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => o.modelValueOnUpdate(d),
        modelValue: o.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: o.field.clearable,
        rules: o.getComputedRules(),
        // events
        onClear: o.clear,
        // display
        label: o.field.label,
        hint: o.field.hint,
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
        class: o.field.cssClass
      };
    }
    function a(o) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function r(o) {
      return {
        "onUpdate:modelValue": (s) => o.modelValueOnUpdate(s),
        modelValue: o.modelValue,
        mask: o.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (o, s) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(m(L), V(O(t(u))), {
          append: g(() => [
            y(m(K), V(O(a())), {
              default: g(() => [
                y(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    y(m(be), V(O(r(u))), {
                      default: g(() => [
                        p("div", st, [
                          y(m(I), {
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
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (r) => t.modelValueOnUpdate(r),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        y(m(he), V(O(n(r))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ F({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l;
    function n(t) {
      const a = t.injectForm.getFormFactoryInstance(), r = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (o) => t.modelValueOnUpdate(o),
        modelValue: t.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        y(m(L), R(n(r), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(l) {
  return Symbol(l);
}
function E() {
  return 20;
}
const mt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: E(),
      offset: 0
    });
    function r(s) {
      const u = s.injectForm.getFormFactoryInstance(), c = u.formSettings, d = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (C) => s.modelValueOnUpdate(C),
        modelValue: s.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: s.clear,
        onFilter: i(s),
        // display
        label: s.field.label,
        hint: s.field.hint,
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
        class: s.field.cssClass
      };
    }
    function i(s) {
      return (u, c) => {
        const d = s.injectForm.getAssociationDataCallback();
        u === "" && (a.value = {
          limit: E(),
          offset: 0
        }), c(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: u,
            context: s.injectForm.getForm().context
          }).then((C) => {
            t.value = C.rows;
          });
        });
      };
    }
    function o(s) {
      t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: s.modelValue
        }
      ];
    }
    return (s, u) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        y(m(G), R(r(c), {
          onVnodeMounted: (d) => o(c)
        }), {
          options: g((d) => [
            m(n) ? (f(), b(m(J), V(R({ key: 0 }, d.itemProps)), {
              default: g(() => [
                y(m(X), null, {
                  default: g(() => [
                    y(m(Z), null, {
                      default: g(() => [
                        Y(z(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(x(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ft = (l, e) => {
  const n = l.__vccOpts || l;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, gt = {};
function bt(l, e) {
  return " TODO json edit ? ";
}
const ht = /* @__PURE__ */ ft(gt, [["render", bt]]), _t = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = D([]), t = D([]);
    function a(i) {
      const o = i.injectForm.getFormFactoryInstance(), s = o.formSettings, u = o.formStyleConfig;
      return n.value = Object.freeze(i.field.selectOptions ?? []), t.value = i.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (c) => i.modelValueOnUpdate(c),
        modelValue: i.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
        clearable: i.field.clearable,
        rules: i.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: i.field.selectOptions || [],
        // events
        onClear: i.clear,
        onFilter: r,
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
    function r(i, o) {
      if (i === "") {
        o(() => {
          t.value = [...n.value];
        });
        return;
      }
      o(() => {
        const s = i.toLowerCase();
        t.value = n.value.filter((u) => u.label.toLowerCase().includes(s));
      });
    }
    return (i, o) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(m(G), V(O(a(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ F({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: E(),
      offset: 0
    });
    function r(s) {
      const u = s.injectForm.getFormFactoryInstance(), c = u.formSettings, d = u.formStyleConfig;
      return console.log("dak"), {
        // behaviour
        "onUpdate:modelValue": (C) => s.modelValueOnUpdate(C),
        modelValue: s.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: s.clear,
        onFilter: i(s),
        // display
        label: s.field.label,
        hint: s.field.hint,
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
        class: s.field.cssClass
      };
    }
    function i(s) {
      return (u, c) => {
        const d = s.injectForm.getAssociationDataCallback();
        u === "" && (a.value = {
          limit: E(),
          offset: 0
        }), c(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: u,
            context: s.injectForm.getForm().context
          }).then((C) => {
            t.value = C.rows;
          });
        });
      };
    }
    function o(s) {
      console.log("okok"), t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: s.modelValue
        }
      ], s.modelValue = {
        label: s.field.defaultDisplayValue ?? "",
        value: s.modelValue
      }, s.modelValueOnUpdate({
        label: s.field.defaultDisplayValue ?? "",
        value: s.modelValue
      });
    }
    return (s, u) => (f(), b(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        y(m(G), R(r(c), {
          onVnodeMounted: (d) => o(c)
        }), {
          options: g((d) => [
            m(n) ? (f(), b(m(J), V(R({ key: 0 }, d.itemProps)), {
              default: g(() => [
                y(m(X), null, {
                  default: g(() => [
                    y(m(Z), null, {
                      default: g(() => [
                        Y(z(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), b(x(m(n)), {
              key: 1,
              scope: d
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040, ["onVnodeMounted"])
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class H {
  constructor(e, n, t, a, r, i, o) {
    S(this, "resourceName");
    S(this, "formSettings");
    S(this, "formStyleConfig");
    S(this, "actionComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...k.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...k.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = a ?? k.getGlobalActionComponent(), this.sectionComponent = r ?? k.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? k.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = o ?? k.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: at,
      text: it,
      number: ct,
      date: rt,
      selectString: _t,
      selectBelongsTo: yt,
      selectHasMany: mt,
      checkbox: ut,
      object: ht
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((i) => {
      const o = [];
      i.fields.forEach((u) => {
        const c = H.getFieldComponentByFormFieldType(
          u.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, C = {
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
        o.push(C);
      });
      const s = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: o
      };
      a.push(s);
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
  setup(l, { expose: e }) {
    const n = l;
    let t = null;
    const a = Object.freeze(
      new H(
        n.resourceName,
        n.globalFormSettings
      )
    ), r = dt(_e()), i = D({}), o = D(), s = D(!1), u = D(!1);
    async function c() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), o.value = Object.freeze(
        a.getForm(
          t,
          r,
          n.context
        )
      ), s.value = !0;
    }
    async function d() {
      u.value = !0;
      const _ = {};
      Object.entries(i.value).forEach((T) => {
        _[T[0]] = T[1].getValue();
      });
      const N = await n.submitForm({ formData: _ });
      t && (t.resource_data = N), C(), u.value = !1;
    }
    function C() {
      Object.values(i.value).forEach((_) => {
        _.reset();
      });
    }
    function W() {
      Object.values(i.value).forEach((_) => {
        _.clear();
      });
    }
    function ee(_, N) {
      i.value[_] = N;
    }
    function te(_) {
      if (t)
        return t.resource_data[_];
    }
    function ne(_) {
      const N = Object.entries(i.value).find((T) => T[0] === _);
      return N ? N[1].getValue() : null;
    }
    function le() {
      return a;
    }
    function oe() {
      return o.value;
    }
    function ae() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return fe(r, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: le,
      getForm: oe,
      getAssociationDataCallback: ae
    }), e({}), Q(async () => {
      await c();
    }), (_, N) => s.value && o.value ? (f(), B("div", Ct, [
      p("div", {
        class: A(o.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), B(U, null, P(o.value.sections, (T, ie) => (f(), b(x(m(a).sectionComponent), {
          key: ie,
          section: T
        }, {
          default: g(() => [
            (f(!0), B(U, null, P(T.fields, ($) => (f(), B(U, {
              key: $.metadata.field_name
            }, [
              _.$slots[$.metadata.field_name] ? (f(), b(v, {
                key: 1,
                field: $
              }, {
                default: g(({ propsWrapper: se }) => [
                  w(_.$slots, "default", { propsWrapper: se })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), b(x($.component), {
                key: 0,
                field: $
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), b(x(m(a).actionComponent), {
        isLoadingSubmit: u.value,
        submit: d,
        clear: o.value.clearable ? W : void 0,
        reset: o.value.resetable ? C : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      _.$slots.more_actions ? w(_.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  k as Submit64,
  vt as Submit64Form
};
