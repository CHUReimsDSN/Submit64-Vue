var ie = Object.defineProperty;
var re = (l, e, n) => e in l ? ie(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[e] = n;
var C = (l, e, n) => re(l, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as S, createElementBlock as x, openBlock as d, createVNode as y, createBlock as h, createCommentVNode as R, unref as f, normalizeClass as Q, createElementVNode as w, toDisplayString as H, renderSlot as I, resolveComponent as V, inject as se, ref as D, onMounted as K, getCurrentInstance as ce, resolveDynamicComponent as O, withCtx as g, normalizeProps as k, guardReactiveProps as T, mergeProps as z, createTextVNode as J, provide as ue, Fragment as U, renderList as Y } from "vue";
import { QBtn as E, QIcon as X, date as b, QInput as G, QPopupProxy as de, QDate as me, QCheckbox as fe, QSelect as P, uid as ge } from "quasar";
const he = { class: "flex row items-center no-wrap q-pt-sm" }, be = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => (d(), x("div", he, [
      y(f(E), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (d(), h(f(E), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : R("", !0),
      e.clear ? (d(), h(f(E), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : R("", !0)
    ]));
  }
}), _e = { class: "flex row items-center" }, ye = { class: "text-body1 text-weight-medium" }, Ce = { class: "flex column q-gutter-sm" }, Se = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(l) {
    const e = l;
    return (n, t) => (d(), x("div", {
      class: Q(["flex column", e.section.cssClass])
    }, [
      w("div", _e, [
        e.section.icon ? (d(), h(f(X), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : R("", !0),
        w("div", ye, H(e.section.label), 1)
      ]),
      w("div", Ce, [
        I(n.$slots, "default")
      ])
    ], 2));
  }
}), Fe = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(l) {
    const e = l;
    return (n, t) => {
      const i = V("q-icon");
      return d(), h(i, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), L = class L {
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
    }, this._actionComponent = be, this._sectionComponent = Se, this._wrapperResetComponent = Fe, this._associationDisplayDictonary = {};
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
C(L, "_instance", new L());
let N = L;
function De(l, e, n) {
  const t = n.getFormFactoryInstance().formSettings, i = n.getForm(), s = (c, a, m) => c[a] ? m ? () => r(c[a]) : () => c[a] : c.compare_to ? () => n.getFieldDataByFieldName(c.compare_to) : () => "", r = (c) => String(
    b.formatDate(
      b.extractDate(c, i.backendDateFormat),
      t.dateFormat
    )
  ), o = [], u = [];
  switch (e) {
    case "date":
      o.push(et(t.dateFormat));
  }
  return l.forEach((c) => {
    const a = c;
    switch (a.type) {
      case "required":
        o.push(ke());
        break;
      case "absence":
        o.push(pe());
        break;
      case "acceptance":
        o.push(Ne());
        break;
      case "inclusion":
        o.push(Z(a.including));
        break;
      case "exclusion":
        o.push(ve(a.excluding));
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
        o.push(Be());
        break;
      case "lessThanOrEqualNumber":
        o.push(
          xe(
            s(a, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        o.push(
          Ve(
            s(a, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        o.push(
          Oe(
            s(a, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        o.push(
          Re(
            s(a, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        o.push(
          $e(s(a, "equal_to"))
        );
        break;
      case "otherThanNumber":
        o.push(
          we(
            s(a, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        o.push(Ie());
        break;
      case "numberNumericOnly":
        o.push(Ee());
        break;
      case "numberEvenOnly":
        o.push(je());
        break;
      case "numberOddOnly":
        o.push(Le());
        break;
      case "lessThanOrEqualStringLength":
        o.push(
          ze(
            s(a, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        o.push(
          Ge(
            s(a, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        o.push(
          Ue(
            s(a, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        o.push(
          He(
            s(a, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        o.push(
          Ye(
            s(a, "equal_to")
          )
        );
        break;
      case "equalToString":
        o.push(
          Ae(s(a, "equal_to"))
        );
        break;
      case "betweenStringLength":
        o.push(
          Pe(
            () => a.min,
            () => a.max
          )
        );
        break;
      case "otherThanString":
        o.push(
          Qe(
            s(a, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        o.push(
          Ke(
            s(a, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        o.push(
          Je(
            s(a, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        o.push(
          Xe(
            s(a, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        o.push(
          Ze(
            s(a, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        o.push(
          Me(
            s(a, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        o.push(
          We(
            s(a, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((c) => {
    switch (c) {
      case "allowBlank":
        return qe(o);
      case "allowNull":
        return Te(o);
    }
  }) : o;
}
function ke() {
  return (l) => !!l || "Ce champ est requis";
}
function Z(l) {
  return (e) => l.includes(String(e)) || `Doit être contenu dans ${l.toString()}`;
}
function ve(l) {
  return (e) => !l.includes(
    String(e) || `Ne doit pas être contenu dans ${Z.toString()}`
  );
}
function pe() {
  return (l) => !l || "Ce champ doit être vide";
}
function Ne() {
  return (l) => !!l || "Doit être accepté";
}
function Te(l) {
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
function Be() {
  return (l) => Number(l) > 0 || "Val. positive uniquement";
}
function xe(l) {
  return (e) => {
    const n = l();
    return Number(e) <= n || `Inf. ou égal à ${n}`;
  };
}
function Ve(l) {
  return (e) => {
    const n = l();
    return Number(e) < n || `Inf. ${n}`;
  };
}
function Oe(l) {
  return (e) => {
    const n = l();
    return Number(e) >= n || `Sup. ou égal à ${n}`;
  };
}
function Re(l) {
  return (e) => {
    const n = l();
    return Number(e) > n || `Sup. à ${n}`;
  };
}
function $e(l, e) {
  return (n) => {
    const t = l();
    return Number(n) === t || `Égale à ${t}`;
  };
}
function we(l, e) {
  return (n) => {
    const t = l();
    return Number(n) !== t || `Doit être différent de ${l}`;
  };
}
function Ie() {
  return (l) => /^-?\d+$/.test(String(l).trim()) || "Nombre entier uniquement";
}
function Ee() {
  return (l) => /^-?\d+(\.\d+)?$/.test(String(l).trim()) || "Caractère numérique uniquement";
}
function je() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 0 || "Nombre pair uniquement";
}
function Le() {
  return (l) => Number.isInteger(Number(l)) && Number(l) % 2 === 1 || "Nombre impair uniquement";
}
function ze(l) {
  return (e) => {
    const n = l();
    return String(e).length <= n || `Inf. ou égal à ${n}`;
  };
}
function Ge(l) {
  return (e) => {
    const n = l();
    return String(e).length < n || `Inf. à ${n}`;
  };
}
function Ue(l) {
  return (e) => {
    const n = l();
    return String(e).length >= n || `Sup. ou égal à ${n}`;
  };
}
function He(l) {
  return (e) => {
    const n = l();
    return String(e).length > n || `Sup. à ${n}`;
  };
}
function Pe(l, e) {
  return (n) => {
    const t = l(), i = e();
    return String(n).length >= t && String(n).length <= i || `Entre ${t} et ${i}`;
  };
}
function Ae(l, e) {
  return (n) => {
    const t = l();
    return String(n) === t || `Égale à ${t}`;
  };
}
function Ye(l) {
  return (e) => {
    const n = l();
    return String(e).length === n || `Doit contenir ${n} caractères`;
  };
}
function Qe(l) {
  return (e) => {
    const n = l();
    return String(e) !== n || `Doit être différent de ${n}`;
  };
}
function Ke(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i <= s || `Inf. ou égal à ${t}`;
  };
}
function Je(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i < s || `Inf. à ${t}`;
  };
}
function Xe(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i >= s || `Sup. ou égal à ${t}`;
  };
}
function Ze(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(i.getTime()) && i > s || `Sup. à ${t}`;
  };
}
function Me(l, e) {
  return (n) => {
    const t = l(), i = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return i === s || `Égale à ${i}`;
  };
}
function We(l, e) {
  return (n) => {
    const t = l();
    return b.extractDate(String(n), e) !== b.extractDate(t, e) || `Doit être différent de ${t}`;
  };
}
function et(l) {
  return (e) => !Number.isNaN(b.extractDate(String(e), l).getTime()) || "Date invalide";
}
const tt = {
  computeServerRules: De
}, p = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(l, { expose: e }) {
    const n = l, t = se(n.field.provideUniqKey), i = D();
    function s() {
      return i.value;
    }
    function r() {
      t && (i.value = t.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ), i.value = o(i.value));
    }
    function o(m) {
      switch (n.field.type) {
        case "date":
          return b.formatDate(
            b.extractDate(
              String(m),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
          );
      }
      return m;
    }
    function u() {
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
    function c() {
      return tt.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function a(m) {
      i.value = m;
    }
    return e({
      reset: r,
      clear: u,
      getValue: s
    }), K(() => {
      var F;
      r();
      const m = (F = ce()) == null ? void 0 : F.exposed;
      m && t && t.registerRef(
        n.field.metadata.field_name,
        m
      );
    }), (m, F) => (d(), x("div", null, [
      n.field.resetable ? I(m.$slots, "reset", {
        key: 0,
        actionProps: { reset: r }
      }, () => [
        (d(), h(O(f(t).getFormFactoryInstance().wrapperResetComponent), { reset: r }))
      ]) : R("", !0),
      I(m.$slots, "default", {
        propsWrapper: { modelValue: i.value, modelValueOnUpdate: a, field: m.field, injectForm: f(t), reset: r, clear: u, getComputedRules: c }
      })
    ]));
  }
}), nt = /* @__PURE__ */ S({
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
    return (t, i) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(f(G), k(T(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = /* @__PURE__ */ S({
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
    return (t, i) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(f(G), z(n(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), lt = { class: "row items-center justify-end" }, at = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = D();
    function t(o) {
      const u = o.injectForm.getFormFactoryInstance(), c = u.formSettings, a = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (m) => o.modelValueOnUpdate(m),
        modelValue: o.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
        "onUpdate:modelValue": (u) => o.modelValueOnUpdate(u),
        modelValue: o.modelValue,
        mask: o.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function r() {
      n.value && n.value.hide();
    }
    return (o, u) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        y(f(G), k(T(t(c))), {
          append: g(() => [
            y(f(X), k(T(i())), {
              default: g(() => [
                y(f(de), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    y(f(me), k(T(s(c))), {
                      default: g(() => [
                        w("div", lt, [
                          y(f(E), {
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
}), it = /* @__PURE__ */ S({
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
    return (t, i) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(f(fe), k(T(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = /* @__PURE__ */ S({
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
    return (t, i) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(f(G), z(n(s), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
function st(l) {
  return Symbol(l);
}
function j() {
  return 50;
}
const ct = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = D([]), i = D({
      limit: j(),
      offset: 0
    });
    function s(o) {
      const u = o.injectForm.getFormFactoryInstance(), c = u.formSettings, a = u.formStyleConfig;
      return {
        // behaviour
        modelValue: o.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
      return (u, c) => {
        const a = o.injectForm.getAssociationDataCallback();
        u === "" && (i.value = {
          limit: j(),
          offset: 0
        }), c(() => {
          a({
            resourceName: o.injectForm.getForm().resourceName,
            associationName: o.field.metadata.field_association_name,
            limit: i.value.limit,
            offset: i.value.offset,
            labelFilter: u,
            context: o.injectForm.getForm().context
          }).then((m) => {
            t.value = m.rows;
          });
        });
      };
    }
    return (o, u) => {
      const c = V("q-item-label"), a = V("q-item-section"), m = V("q-item");
      return d(), h(p, {
        field: e.field
      }, {
        default: g(({ propsWrapper: F }) => [
          y(f(P), k(T(s(F))), {
            options: g((v) => [
              f(n) ? (d(), h(m, k(z({ key: 0 }, v.itemProps)), {
                default: g(() => [
                  y(a, null, {
                    default: g(() => [
                      y(c, null, {
                        default: g(() => [
                          J(H(v.opt.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)) : (d(), h(O(f(n)), {
                key: 1,
                scope: v
              }, null, 8, ["scope"]))
            ]),
            _: 2
          }, 1040)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), ut = (l, e) => {
  const n = l.__vccOpts || l;
  for (const [t, i] of e)
    n[t] = i;
  return n;
}, dt = {};
function mt(l, e) {
  return " TODO json edit ? ";
}
const ft = /* @__PURE__ */ ut(dt, [["render", mt]]), gt = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = D([]), t = D([]);
    function i(r) {
      const o = r.injectForm.getFormFactoryInstance(), u = o.formSettings, c = o.formStyleConfig;
      return n.value = Object.freeze(r.field.selectOptions ?? []), t.value = r.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (a) => r.modelValueOnUpdate(a),
        modelValue: r.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
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
        const u = r.toLowerCase();
        t.value = n.value.filter((c) => c.label.toLowerCase().includes(u));
      });
    }
    return (r, o) => (d(), h(p, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(f(P), k(T(i(u))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ht = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(l) {
    const e = l, n = e.field.componentOptions.associationDisplayComponent, t = D([]), i = D({
      limit: j(),
      offset: 0
    });
    function s(o) {
      const u = o.injectForm.getFormFactoryInstance(), c = u.formSettings, a = u.formStyleConfig;
      return {
        // behaviour
        modelValue: o.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
      return (u, c) => {
        const a = o.injectForm.getAssociationDataCallback();
        a && (u === "" && (i.value = {
          limit: j(),
          offset: 0
        }), c(() => {
          a({
            resourceName: o.injectForm.getForm().resourceName,
            associationName: o.field.metadata.field_association_name,
            limit: i.value.limit,
            offset: i.value.offset,
            labelFilter: u,
            context: o.injectForm.getForm().context
          }).then((m) => {
            t.value = m.rows;
          });
        }));
      };
    }
    return (o, u) => {
      const c = V("q-item-label"), a = V("q-item-section"), m = V("q-item");
      return d(), h(p, {
        field: e.field
      }, {
        default: g(({ propsWrapper: F }) => [
          y(f(P), k(T(s(F))), {
            options: g((v) => [
              f(n) ? (d(), h(m, k(z({ key: 0 }, v.itemProps)), {
                default: g(() => [
                  y(a, null, {
                    default: g(() => [
                      y(c, null, {
                        default: g(() => [
                          J(H(v.opt.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)) : (d(), h(O(f(n)), {
                key: 1,
                scope: v
              }, null, 8, ["scope"]))
            ]),
            _: 2
          }, 1040)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
});
class A {
  constructor(e, n, t, i, s, r, o) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    C(this, "associationDisplayDictionary");
    this.resourceName = e, this.formSettings = {
      ...N.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ...N.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = i ?? N.getGlobalActionComponent(), this.sectionComponent = s ?? N.getGlobalSectionComponent(), this.wrapperResetComponent = r ?? N.getGlobalWrapperResetComponent(), this.associationDisplayDictionary = o ?? N.getGlobalAssociationDisplayDictonary();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: nt,
      text: ot,
      number: rt,
      date: at,
      selectString: gt,
      selectBelongsTo: ht,
      selectHasMany: ct,
      checkbox: it,
      object: ft
    }[e];
  }
  getForm(e, n, t) {
    const i = [];
    return e.form.sections.forEach((r) => {
      const o = [];
      r.fields.forEach((c) => {
        const a = A.getFieldComponentByFormFieldType(
          c.field_type
        ), m = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, F = {
          type: c.field_type,
          metadata: c,
          label: c.label,
          hint: c.hint,
          cssClass: c.css_class,
          selectOptions: c.select_options,
          rules: c.rules,
          clearable: c.clearable,
          resetable: c.resetable,
          provideUniqKey: n,
          component: a,
          componentOptions: m
        };
        o.push(F);
      });
      const u = {
        label: r.label,
        icon: r.icon,
        cssClass: r.css_class,
        fields: o
      };
      i.push(u);
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
const bt = {
  key: 0,
  class: "flex column"
}, St = /* @__PURE__ */ S({
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
      new A(
        n.resourceName,
        n.globalFormSettings
      )
    ), s = st(ge()), r = D({}), o = D(), u = D(!1), c = D(!1);
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
      ), u.value = !0;
    }
    async function m() {
      c.value = !0;
      const _ = {};
      Object.entries(r.value).forEach((B) => {
        _[B[0]] = B[1].getValue();
      });
      const q = await n.submitForm({ formData: _ });
      t && (t.resource_data = q), F(), c.value = !1;
    }
    function F() {
      Object.values(r.value).forEach((_) => {
        _.reset();
      });
    }
    function v() {
      Object.values(r.value).forEach((_) => {
        _.clear();
      });
    }
    function M(_, q) {
      r.value[_] = q;
    }
    function W(_) {
      if (t)
        return t.resource_data[_];
    }
    function ee(_) {
      const q = Object.entries(r.value).find((B) => B[0] === _);
      return q ? q[1].getValue() : null;
    }
    function te() {
      return i;
    }
    function ne() {
      return o.value;
    }
    function oe() {
      return n.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    return ue(s, {
      registerRef: M,
      getDefaultDataByFieldName: W,
      getFieldDataByFieldName: ee,
      getFormFactoryInstance: te,
      getForm: ne,
      getAssociationDataCallback: oe
    }), e({}), K(async () => {
      await a();
    }), (_, q) => u.value && o.value ? (d(), x("div", bt, [
      w("div", {
        class: Q(o.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (d(!0), x(U, null, Y(o.value.sections, (B, le) => (d(), h(O(f(i).sectionComponent), {
          key: le,
          section: B
        }, {
          default: g(() => [
            (d(!0), x(U, null, Y(B.fields, ($) => (d(), x(U, {
              key: $.metadata.field_name
            }, [
              _.$slots[$.metadata.field_name] ? (d(), h(p, {
                key: 1,
                field: $
              }, {
                default: g(({ propsWrapper: ae }) => [
                  I(_.$slots, "default", { propsWrapper: ae })
                ]),
                _: 2
              }, 1032, ["field"])) : (d(), h(O($.component), {
                key: 0,
                field: $
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (d(), h(O(f(i).actionComponent), {
        isLoadingSubmit: c.value,
        submit: m,
        clear: o.value.clearable ? v : void 0,
        reset: o.value.resetable ? F : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      _.$slots.more_actions ? I(_.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : R("", !0)
    ])) : R("", !0);
  }
});
export {
  N as Submit64,
  St as Submit64Form
};
