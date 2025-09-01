var se = Object.defineProperty;
var ue = (o, e, n) => e in o ? se(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var S = (o, e, n) => ue(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as F, createElementBlock as B, openBlock as f, createVNode as C, createBlock as h, createCommentVNode as q, unref as m, normalizeClass as Q, createElementVNode as $, toDisplayString as G, renderSlot as w, resolveComponent as ce, inject as de, ref as D, onMounted as Y, getCurrentInstance as me, resolveDynamicComponent as x, withCtx as g, normalizeProps as V, guardReactiveProps as O, mergeProps as p, createTextVNode as K, provide as fe, Fragment as z, renderList as A } from "vue";
import { QBtn as I, QIcon as J, date as b, QInput as L, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as H, QItem as X, QItemSection as Z, QItemLabel as M, uid as _e } from "quasar";
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
      C(m(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), h(m(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : q("", !0),
      e.clear ? (f(), h(m(I), {
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
      class: Q(["flex column", e.section.cssClass])
    }, [
      $("div", Se, [
        e.section.icon ? (f(), h(m(J), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : q("", !0),
        $("div", Fe, G(e.section.label), 1)
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
        onClick: t[0] || (t[0] = (u) => e.reset())
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
function Ve(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), u = (s, c, d) => s[c] ? d ? () => i(s[c]) : () => s[c] : s.compare_to ? () => n.getFieldDataByFieldName(s.compare_to) : () => "", i = (s) => String(
    b.formatDate(
      b.extractDate(s, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], r = [];
  switch (e) {
    case "date":
      l.push(ot(t.dateFormat));
  }
  return o.forEach((s) => {
    const c = s;
    switch (c.type) {
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
        l.push(W(c.including));
        break;
      case "exclusion":
        l.push(Te(c.excluding));
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
            u(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $e(
            u(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          we(
            u(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ie(
            u(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ee(u(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          je(
            u(c, "other_than")
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
            u(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Pe(
            u(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ae(
            u(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qe(
            u(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Je(
            u(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ke(u(c, "equal_to"))
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
          Xe(
            u(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ze(
            u(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Me(
            u(c, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          We(
            u(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          et(
            u(c, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          tt(
            u(c, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          nt(
            u(c, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((s) => {
    switch (s) {
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
function W(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Te(o) {
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
    const t = o(), a = b.extractDate(String(n), e), u = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= u || `Inf. ou égal à ${t}`;
  };
}
function Me(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), u = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < u || `Inf. à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), u = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= u || `Sup. ou égal à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), u = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > u || `Sup. à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), u = b.extractDate(t, e);
    return a === u || `Égale à ${a}`;
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
    function u() {
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
    function r() {
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
    function s() {
      return lt.computeServerRules(
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
      clear: r,
      getValue: u
    }), Y(() => {
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
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: c, field: d.field, injectForm: m(t), reset: i, clear: r, getComputedRules: s }
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
      const a = t.injectForm.getFormFactoryInstance(), u = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
      default: g(({ propsWrapper: u }) => [
        C(m(L), V(O(n(u))), null, 16)
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
      const a = t.injectForm.getFormFactoryInstance(), u = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
      default: g(({ propsWrapper: u }) => [
        C(m(L), p(n(u), { type: "textarea" }), null, 16)
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
      const r = l.injectForm.getFormFactoryInstance(), s = r.formSettings, c = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: s.rulesBehaviour === "lazy",
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
    function u(l) {
      return {
        "onUpdate:modelValue": (r) => l.modelValueOnUpdate(r),
        modelValue: l.modelValue,
        mask: l.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (l, r) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        C(m(L), V(O(t(s))), {
          append: g(() => [
            C(m(J), V(O(a())), {
              default: g(() => [
                C(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    C(m(he), V(O(u(s))), {
                      default: g(() => [
                        $("div", rt, [
                          C(m(I), {
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
        "onUpdate:modelValue": (u) => t.modelValueOnUpdate(u),
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
      default: g(({ propsWrapper: u }) => [
        C(m(be), V(O(n(u))), null, 16)
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
      const a = t.injectForm.getFormFactoryInstance(), u = a.formSettings, i = a.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (l) => t.modelValueOnUpdate(l),
        modelValue: t.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
      default: g(({ propsWrapper: u }) => [
        C(m(L), p(n(u), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function dt(o) {
  return Symbol(o);
}
function E() {
  return 20;
}
const mt = /* @__PURE__ */ F({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: E(),
      offset: 0
    });
    function u(r) {
      const s = r.injectForm.getFormFactoryInstance(), c = s.formSettings, d = s.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (_) => r.modelValueOnUpdate(_),
        modelValue: r.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
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
      return (s, c) => {
        const d = r.injectForm.getAssociationDataCallback();
        s === "" && (a.value = {
          limit: E(),
          offset: 0
        }), c(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: s,
            context: r.injectForm.getForm().context
          }).then((_) => {
            t.value = _.rows;
          });
        });
      };
    }
    function l(r) {
      t.value = [
        {
          label: r.field.defaultDisplayValue ?? "",
          value: r.modelValue
        }
      ];
    }
    return (r, s) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(H), p(u(c), {
          onVnodeMounted: (d) => l(c)
        }), {
          options: g((d) => [
            m(n) ? (f(), h(m(X), V(p({ key: 0 }, d.itemProps)), {
              default: g(() => [
                C(m(Z), null, {
                  default: g(() => [
                    C(m(M), null, {
                      default: g(() => [
                        K(G(d.opt.label), 1)
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
      const l = i.injectForm.getFormFactoryInstance(), r = l.formSettings, s = l.formStyleConfig;
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
        onFilter: u,
        // display
        label: i.field.label,
        hint: i.field.hint,
        outlined: s.fieldOutlined,
        filled: s.fieldFilled,
        standout: s.fieldStandout,
        borderless: s.fieldBorderless,
        rounded: s.fieldRounded,
        square: s.fieldSquare,
        dense: s.fieldDense,
        hideBottomSpace: s.fieldHideBottomSpace,
        color: s.fieldColor,
        bgColor: s.fieldBgColor,
        class: i.field.cssClass
      };
    }
    function u(i, l) {
      if (i === "") {
        l(() => {
          t.value = [...n.value];
        });
        return;
      }
      l(() => {
        const r = i.toLowerCase();
        t.value = n.value.filter((s) => s.label.toLowerCase().includes(r));
      });
    }
    return (i, l) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        C(m(H), V(O(a(r))), null, 16)
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
      limit: E(),
      offset: 0
    });
    function u(r) {
      var _;
      const s = r.injectForm.getFormFactoryInstance(), c = s.formSettings, d = s.formStyleConfig;
      return console.log(((_ = t.value.at(0)) == null ? void 0 : _.value) === r.modelValue), {
        // behaviour
        "onUpdate:modelValue": (U) => r.modelValueOnUpdate(U),
        modelValue: r.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
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
      return (s, c) => {
        const d = r.injectForm.getAssociationDataCallback();
        s === "" && (a.value = {
          limit: E(),
          offset: 0
        }), c(() => {
          d({
            resourceName: r.injectForm.getForm().resourceName,
            associationName: r.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: s,
            context: r.injectForm.getForm().context
          }).then((_) => {
            t.value = _.rows;
          });
        });
      };
    }
    function l(r) {
      var s;
      t.value = [
        {
          label: r.field.defaultDisplayValue ?? "",
          value: r.modelValue
        }
      ], console.log(((s = t.value.at(0)) == null ? void 0 : s.value) === r.modelValue);
    }
    return (r, s) => (f(), h(v, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        C(m(H), p(u(c), {
          onVnodeMounted: (d) => l(c)
        }), {
          options: g((d) => [
            m(n) ? (f(), h(m(X), V(p({ key: 0 }, d.itemProps)), {
              default: g(() => [
                C(m(Z), null, {
                  default: g(() => [
                    C(m(M), null, {
                      default: g(() => [
                        K(G(d.opt.label), 1)
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
});
class P {
  constructor(e, n, t, a, u, i, l) {
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
    }, this.actionComponent = a ?? k.getGlobalActionComponent(), this.sectionComponent = u ?? k.getGlobalSectionComponent(), this.wrapperResetComponent = i ?? k.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = l ?? k.getGlobalAssociationDisplayDictonary();
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
    const a = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((s) => {
        const c = P.getFieldComponentByFormFieldType(
          s.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, _ = {
          type: s.field_type,
          metadata: s,
          label: s.label,
          hint: s.hint,
          cssClass: s.css_class,
          selectOptions: s.select_options,
          rules: s.rules,
          clearable: s.clearable,
          resetable: s.resetable,
          provideUniqKey: n,
          defaultDisplayValue: s.default_display_value,
          component: c,
          componentOptions: d
        };
        l.push(_);
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
    ), u = dt(_e()), i = D({}), l = D(), r = D(!1), s = D(!1);
    async function c() {
      t = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), l.value = Object.freeze(
        a.getForm(
          t,
          u,
          n.context
        )
      ), r.value = !0;
    }
    async function d() {
      s.value = !0;
      const y = {};
      Object.entries(i.value).forEach((T) => {
        y[T[0]] = T[1].getValue();
      });
      const N = await n.submitForm({ formData: y });
      t && (t.resource_data = N), _(), s.value = !1;
    }
    function _() {
      Object.values(i.value).forEach((y) => {
        y.reset();
      });
    }
    function U() {
      Object.values(i.value).forEach((y) => {
        y.clear();
      });
    }
    function ee(y, N) {
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
    return fe(u, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), Y(async () => {
      await c();
    }), (y, N) => r.value && l.value ? (f(), B("div", Ct, [
      $("div", {
        class: Q(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), B(z, null, A(l.value.sections, (T, ie) => (f(), h(x(m(a).sectionComponent), {
          key: ie,
          section: T
        }, {
          default: g(() => [
            (f(!0), B(z, null, A(T.fields, (R) => (f(), B(z, {
              key: R.metadata.field_name
            }, [
              y.$slots[R.metadata.field_name] ? (f(), h(v, {
                key: 1,
                field: R
              }, {
                default: g(({ propsWrapper: re }) => [
                  w(y.$slots, "default", { propsWrapper: re })
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
        isLoadingSubmit: s.value,
        submit: d,
        clear: l.value.clearable ? U : void 0,
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
