var re = Object.defineProperty;
var ue = (o, e, n) => e in o ? re(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var S = (o, e, n) => ue(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as B, openBlock as f, createVNode as C, createBlock as h, createCommentVNode as q, unref as m, normalizeClass as Y, createElementVNode as $, toDisplayString as H, renderSlot as w, resolveComponent as ce, inject as de, ref as D, onMounted as K, getCurrentInstance as me, resolveDynamicComponent as x, withCtx as g, normalizeProps as V, guardReactiveProps as O, mergeProps as p, createTextVNode as J, provide as fe, Fragment as G, renderList as Q } from "vue";
import { QBtn as E, QIcon as X, date as b, QInput as U, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as P, QItem as Z, QItemSection as M, QItemLabel as W, uid as _e } from "quasar";
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
    return (n, t) => (f(), B("div", ye, [
      C(m(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), h(m(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      e.clear ? (f(), h(m(E), {
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
    return (n, t) => (f(), B("div", {
      class: Y(["flex column", e.section.cssClass])
    }, [
      $("div", Se, [
        e.section.icon ? (f(), h(m(X), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        $("div", Fe, H(e.section.label), 1)
      ]),
      $("div", De, [
        w(n.$slots, "default")
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ F({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => {
      const a = ce("q-icon");
      return f(), h(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (c) => e.reset())
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
S(L, "_instance", new L());
let k = L;
function Ve(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), c = (r, u, d) => r[u] ? d ? () => i(r[u]) : () => r[u] : r.compare_to ? () => n.getFieldDataByFieldName(r.compare_to) : () => "", i = (r) => String(
    b.formatDate(
      b.extractDate(r, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], s = [];
  switch (e) {
    case "date":
      l.push(ot(t.dateFormat));
  }
  return o.forEach((r) => {
    const u = r;
    switch (u.type) {
      case "required":
        l.push(Ne());
        break;
      case "absence":
        l.push(Be());
        break;
      case "acceptance":
        l.push(xe());
        break;
      case "inclusion":
        l.push(ee(u.including));
        break;
      case "exclusion":
        l.push(Te(u.excluding));
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
        l.push(pe());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Re(
            c(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $e(
            c(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          we(
            c(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ie(
            c(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ee(c(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          je(
            c(u, "other_than")
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
            c(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Pe(
            c(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ae(
            c(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qe(
            c(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Je(
            c(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ke(c(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ye(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Xe(
            c(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ze(
            c(u, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Me(
            c(u, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          We(
            c(u, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          et(
            c(u, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          tt(
            c(u, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          nt(
            c(u, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((r) => {
    switch (r) {
      case "allowBlank":
        return qe(l);
      case "allowNull":
        return Oe(l);
    }
  }) : l;
}
function Ne() {
  return (o) => !!o || "Ce champ est requis";
}
function ee(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Te(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${ee.toString()}`
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
function Je(o) {
  return (e) => {
    const n = o();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Xe(o) {
  return (e) => {
    const n = o();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Ze(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), c = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= c || `Inf. ou égal à ${t}`;
  };
}
function Me(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), c = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < c || `Inf. à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), c = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= c || `Sup. ou égal à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), c = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > c || `Sup. à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), c = b.extractDate(t, e);
    return a === c || `Égale à ${a}`;
  };
}
function nt(o, e) {
  return (n) => {
    const t = o();
    return b.extractDate(String(n), e) !== b.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function ot(o) {
  return (e) => !Number.isNaN(b.extractDate(String(e), o).getTime()) || "Date invalide";
}
const lt = {
  computeServerRules: Ve
}, v = /* @__PURE__ */ F({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(o, { expose: e }) {
    const n = o, t = de(n.field.provideUniqKey), a = D();
    function c() {
      return a.value;
    }
    function i() {
      t && (a.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), a.value = l(a.value));
    }
    function l(d) {
      switch (n.field.type) {
        case "date":
          return b.formatDate(
            b.extractDate(
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
          a.value = b.formatDate(
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
    function r() {
      return lt.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function u(d) {
      a.value = d;
    }
    return e({
      reset: i,
      clear: s,
      getValue: c
    }), K(() => {
      var _;
      i();
      const d = (_ = me()) == null ? void 0 : _.exposed;
      d && t && t.registerRef(
        n.field.metadata.field_name,
        d
      );
    }), (d, _) => (f(), B("div", null, [
      n.field.resetable ? w(d.$slots, "reset", {
        key: 0,
        actionProps: { reset: i }
      }, () => [
        (f(), h(x(m(t).getFormFactoryInstance().wrapperResetComponent), { reset: i }))
      ]) : q("", !0),
      w(d.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: u, field: d.field, injectForm: m(t), reset: i, clear: s, getComputedRules: r }
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
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(U), V(O(n(c))), null, 16)
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
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(U), p(n(c), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ F({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D();
    function t(l) {
      const s = l.injectForm.getFormFactoryInstance(), r = s.formSettings, u = s.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        // events
        onClear: l.clear,
        // display
        label: l.field.label,
        hint: l.field.hint,
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
    function c(l) {
      return {
        "onUpdate:modelValue": (s) => l.modelValueOnUpdate(s),
        modelValue: l.modelValue,
        mask: l.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (l, s) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        C(m(U), V(O(t(r))), {
          append: g(() => [
            C(m(X), V(O(a())), {
              default: g(() => [
                C(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    C(m(he), V(O(c(r))), {
                      default: g(() => [
                        $("div", st, [
                          C(m(E), {
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
        "onUpdate:modelValue": (c) => t.modelValueOnUpdate(c),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: a.fieldDense,
        color: a.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, a) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(be), V(O(n(c))), null, 16)
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
      const a = t.injectForm.getFormFactoryInstance(), c = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
    return (t, a) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(U), p(n(c), { type: "number" }), null, 16)
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
const mt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: j(),
      offset: 0
    });
    function c(s) {
      const r = s.injectForm.getFormFactoryInstance(), u = r.formSettings, d = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (_) => s.modelValueOnUpdate(_),
        modelValue: s.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
      return (r, u) => {
        const d = s.injectForm.getAssociationDataCallback();
        r === "" && (a.value = {
          limit: j(),
          offset: 0
        }), u(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: r,
            context: s.injectForm.getForm().context
          }).then((_) => {
            t.value = _.rows;
          });
        });
      };
    }
    function l(s) {
      t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: s.modelValue
        }
      ];
    }
    return (s, r) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        C(m(P), p(c(u), {
          onVnodeMounted: (d) => l(u)
        }), {
          options: g((d) => [
            m(n) ? (f(), h(m(Z), V(p({ key: 0 }, d.itemProps)), {
              default: g(() => [
                C(m(M), null, {
                  default: g(() => [
                    C(m(W), null, {
                      default: g(() => [
                        J(H(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), h(x(m(n)), {
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
}), ft = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, gt = {};
function ht(o, e) {
  return " TODO json edit ? ";
}
const bt = /* @__PURE__ */ ft(gt, [["render", ht]]), _t = /* @__PURE__ */ F({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D([]), t = D([]);
    function a(i) {
      const l = i.injectForm.getFormFactoryInstance(), s = l.formSettings, r = l.formStyleConfig;
      return n.value = Object.freeze(i.field.selectOptions ?? []), t.value = i.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (u) => i.modelValueOnUpdate(u),
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
        onFilter: c,
        // display
        label: i.field.label,
        hint: i.field.hint,
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
        class: i.field.cssClass
      };
    }
    function c(i, l) {
      if (i === "") {
        l(() => {
          t.value = [...n.value];
        });
        return;
      }
      l(() => {
        const s = i.toLowerCase();
        t.value = n.value.filter((r) => r.label.toLowerCase().includes(s));
      });
    }
    return (i, l) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        C(m(P), V(O(a(s))), null, 16)
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
    function c(s) {
      var _, I;
      const r = s.injectForm.getFormFactoryInstance(), u = r.formSettings, d = r.formStyleConfig;
      return console.log("bind : "), console.log(((_ = t.value.at(0)) == null ? void 0 : _.value) === s.modelValue), console.log((I = t.value.at(0)) == null ? void 0 : I.value, s.modelValue), {
        // behaviour
        "onUpdate:modelValue": (z) => s.modelValueOnUpdate(z),
        modelValue: s.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        //options: selectOptionsFiltered.value,
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
      return (r, u) => {
        const d = s.injectForm.getAssociationDataCallback();
        r === "" && (a.value = {
          limit: j(),
          offset: 0
        }), u(() => {
          d({
            resourceName: s.injectForm.getForm().resourceName,
            associationName: s.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: r,
            context: s.injectForm.getForm().context
          }).then((_) => {
            t.value = _.rows;
          });
        });
      };
    }
    function l(s) {
      var r, u;
      t.value = [
        {
          label: s.field.defaultDisplayValue ?? "",
          value: 1
        }
      ], console.log("mounted : "), console.log(((r = t.value.at(0)) == null ? void 0 : r.value) === s.modelValue), console.log(t.value), console.log((u = t.value.at(0)) == null ? void 0 : u.value, s.modelValue);
    }
    return (s, r) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        C(m(P), p(c(u), {
          onVnodeMounted: (d) => l(u),
          options: t.value
        }), {
          options: g((d) => [
            m(n) ? (f(), h(m(Z), V(p({ key: 0 }, d.itemProps)), {
              default: g(() => [
                C(m(M), null, {
                  default: g(() => [
                    C(m(W), null, {
                      default: g(() => [
                        J(H(d.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)) : (f(), h(x(m(n)), {
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
class A {
  constructor(e, n, t, a, c, i, l) {
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
    }, this.actionComponent = a ?? k.getGlobalActionComponent(), this.sectionComponent = c ?? k.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? k.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? k.getGlobalAssociationDisplayDictonary();
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
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((r) => {
        const u = A.getFieldComponentByFormFieldType(
          r.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, _ = {
          type: r.field_type,
          metadata: r,
          label: r.label,
          hint: r.hint,
          cssClass: r.css_class,
          selectOptions: r.select_options,
          rules: r.rules,
          clearable: r.clearable,
          resetable: r.resetable,
          provideUniqKey: n,
          defaultDisplayValue: r.default_display_value,
          component: u,
          componentOptions: d
        };
        l.push(_);
      });
      const s = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: l
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
  setup(o, { expose: e }) {
    const n = o;
    let t = null;
    const a = Object.freeze(
      new A(
        n.resourceName,
        n.globalFormSettings
      )
    ), c = dt(_e()), i = D({}), l = D(), s = D(!1), r = D(!1);
    async function u() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), l.value = Object.freeze(
        a.getForm(
          t,
          c,
          n.context
        )
      ), s.value = !0;
    }
    async function d() {
      r.value = !0;
      const y = {};
      Object.entries(i.value).forEach((T) => {
        y[T[0]] = T[1].getValue();
      });
      const N = await n.submitForm({ formData: y });
      t && (t.resource_data = N), _(), r.value = !1;
    }
    function _() {
      Object.values(i.value).forEach((y) => {
        y.reset();
      });
    }
    function I() {
      Object.values(i.value).forEach((y) => {
        y.clear();
      });
    }
    function z(y, N) {
      i.value[y] = N;
    }
    function te(y) {
      if (t)
        return t.resource_data[y];
    }
    function ne(y) {
      const N = Object.entries(i.value).find((T) => T[0] === y);
      return N ? N[1].getValue() : null;
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
    return fe(c, {
      registerRef: z,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), K(async () => {
      await u();
    }), (y, N) => s.value && l.value ? (f(), B("div", Ct, [
      $("div", {
        class: Y(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), B(G, null, Q(l.value.sections, (T, ie) => (f(), h(x(m(a).sectionComponent), {
          key: ie,
          section: T
        }, {
          default: g(() => [
            (f(!0), B(G, null, Q(T.fields, (R) => (f(), B(G, {
              key: R.metadata.field_name
            }, [
              y.$slots[R.metadata.field_name] ? (f(), h(v, {
                key: 1,
                field: R
              }, {
                default: g(({ propsWrapper: se }) => [
                  w(y.$slots, "default", { propsWrapper: se })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), h(x(R.component), {
                key: 0,
                field: R
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), h(x(m(a).actionComponent), {
        isLoadingSubmit: r.value,
        submit: d,
        clear: l.value.clearable ? I : void 0,
        reset: l.value.resetable ? _ : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      y.$slots.more_actions ? w(y.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : q("", !0)
    ])) : q("", !0);
  }
});
export {
  k as Submit64,
  vt as Submit64Form
};
