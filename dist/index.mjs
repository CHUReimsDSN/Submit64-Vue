var se = Object.defineProperty;
var ue = (o, e, n) => e in o ? se(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var C = (o, e, n) => ue(o, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as S, createElementBlock as p, openBlock as f, createVNode as y, createBlock as h, createCommentVNode as O, unref as m, normalizeClass as A, createElementVNode as R, toDisplayString as z, renderSlot as $, resolveComponent as ce, inject as de, ref as D, onMounted as Q, getCurrentInstance as me, resolveDynamicComponent as x, withCtx as g, normalizeProps as v, guardReactiveProps as B, mergeProps as w, createTextVNode as Y, provide as fe, Fragment as U, renderList as P } from "vue";
import { QBtn as I, QIcon as K, date as b, QInput as L, QPopupProxy as ge, QDate as he, QCheckbox as be, QSelect as G, QItem as J, QItemSection as X, QItemLabel as Z, uid as _e } from "quasar";
const ye = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(o) {
    const e = o;
    return (n, t) => (f(), p("div", ye, [
      y(m(I), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (f(), h(m(I), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : O("", !0),
      e.clear ? (f(), h(m(I), {
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
  setup(o) {
    const e = o;
    return (n, t) => (f(), p("div", {
      class: A(["flex column", e.section.cssClass])
    }, [
      R("div", Se, [
        e.section.icon ? (f(), h(m(K), {
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
  setup(o) {
    const e = o;
    return (n, t) => {
      const a = ce("q-icon");
      return f(), h(a, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (s) => e.reset())
      });
    };
  }
}), j = class j {
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
C(j, "_instance", new j());
let V = j;
function Ve(o, e, n) {
  const t = n.getFormFactoryInstance().formSettings, a = n.getForm(), s = (u, r, d) => u[r] ? d ? () => i(u[r]) : () => u[r] : u.compare_to ? () => n.getFieldDataByFieldName(u.compare_to) : () => "", i = (u) => String(
    b.formatDate(
      b.extractDate(u, a.backendDateFormat),
      t.dateFormat
    )
  ), l = [], c = [];
  switch (e) {
    case "date":
      l.push(ot(t.dateFormat));
  }
  return o.forEach((u) => {
    const r = u;
    switch (r.type) {
      case "required":
        l.push(Ne());
        break;
      case "absence":
        l.push(pe());
        break;
      case "acceptance":
        l.push(Be());
        break;
      case "inclusion":
        l.push(M(r.including));
        break;
      case "exclusion":
        l.push(Te(r.excluding));
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
        l.push(qe());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Re(
            s(r, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          $e(
            s(r, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          we(
            s(r, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Ie(
            s(r, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Ee(s(r, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          je(
            s(r, "other_than")
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
            s(r, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Pe(
            s(r, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Ae(
            s(r, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qe(
            s(r, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Je(
            s(r, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ke(s(r, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Ye(
            () => r.min,
            () => r.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Xe(
            s(r, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ze(
            s(r, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Me(
            s(r, "less_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          We(
            s(r, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          et(
            s(r, "greater_than", !0),
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          tt(
            s(r, "equal_to", !0),
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          nt(
            s(r, "other_than", !0),
            t.dateFormat
          )
        );
        break;
    }
  }), c.length > 0 ? c.map((u) => {
    switch (u) {
      case "allowBlank":
        return Oe(l);
      case "allowNull":
        return xe(l);
    }
  }) : l;
}
function Ne() {
  return (o) => !!o || "Ce champ est requis";
}
function M(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Te(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${M.toString()}`
  );
}
function pe() {
  return (o) => !o || "Ce champ doit être vide";
}
function Be() {
  return (o) => !!o || "Doit être accepté";
}
function xe(o) {
  return (e) => (e === null || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Oe(o) {
  return (e) => (e === "" || o.forEach((n) => {
    const t = n(e);
    if (t !== !0)
      return t;
  }), !0);
}
function qe() {
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
    const t = o(), a = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a <= s || `Inf. ou égal à ${t}`;
  };
}
function Me(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a < s || `Inf. à ${t}`;
  };
}
function We(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a >= s || `Sup. ou égal à ${t}`;
  };
}
function et(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return !Number.isNaN(a.getTime()) && a > s || `Sup. à ${t}`;
  };
}
function tt(o, e) {
  return (n) => {
    const t = o(), a = b.extractDate(String(n), e), s = b.extractDate(t, e);
    return a === s || `Égale à ${a}`;
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
}, k = /* @__PURE__ */ S({
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
    function c() {
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
    function u() {
      return lt.computeServerRules(
        n.field.rules ?? [],
        n.field.type,
        t
      );
    }
    function r(d) {
      a.value = d;
    }
    return e({
      reset: i,
      clear: c,
      getValue: s
    }), Q(() => {
      var F;
      i();
      const d = (F = me()) == null ? void 0 : F.exposed;
      d && t && t.registerRef(
        n.field.metadata.field_name,
        d
      );
    }), (d, F) => (f(), p("div", null, [
      n.field.resetable ? $(d.$slots, "reset", {
        key: 0,
        actionProps: { reset: i }
      }, () => [
        (f(), h(x(m(t).getFormFactoryInstance().wrapperResetComponent), { reset: i }))
      ]) : O("", !0),
      $(d.$slots, "default", {
        propsWrapper: { modelValue: a.value, modelValueOnUpdate: r, field: d.field, injectForm: m(t), reset: i, clear: c, getComputedRules: u }
      })
    ]));
  }
}), at = /* @__PURE__ */ S({
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
    return (t, a) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(m(L), v(B(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ S({
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
    return (t, a) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(m(L), w(n(s), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = { class: "row items-center justify-end" }, st = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D();
    function t(l) {
      const c = l.injectForm.getFormFactoryInstance(), u = c.formSettings, r = c.formStyleConfig;
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
        "onUpdate:modelValue": (c) => l.modelValueOnUpdate(c),
        modelValue: l.modelValue,
        mask: l.injectForm.getFormFactoryInstance().formSettings.dateFormat
      };
    }
    function i() {
      n.value && n.value.hide();
    }
    return (l, c) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(m(L), v(B(t(u))), {
          append: g(() => [
            y(m(K), v(B(a())), {
              default: g(() => [
                y(m(ge), {
                  ref_key: "popupProxyRef",
                  ref: n,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: g(() => [
                    y(m(he), v(B(s(u))), {
                      default: g(() => [
                        R("div", rt, [
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
}), ut = /* @__PURE__ */ S({
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
    return (t, a) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(m(be), v(B(n(s))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ S({
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
    return (t, a) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: s }) => [
        y(m(L), w(n(s), { type: "number" }), null, 16)
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
const mt = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: E(),
      offset: 0
    });
    function s(l) {
      const c = l.injectForm.getFormFactoryInstance(), u = c.formSettings, r = c.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (d) => l.modelValueOnUpdate(d),
        modelValue: l.modelValue,
        lazyRules: u.rulesBehaviour === "lazy",
        clearable: l.field.clearable,
        rules: l.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: l.clear,
        onFilter: i(l),
        // display
        label: l.field.label,
        hint: l.field.hint,
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
        class: l.field.cssClass
      };
    }
    function i(l) {
      return (c, u) => {
        const r = l.injectForm.getAssociationDataCallback();
        c === "" && (a.value = {
          limit: E(),
          offset: 0
        }), u(() => {
          r({
            resourceName: l.injectForm.getForm().resourceName,
            associationName: l.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: c,
            context: l.injectForm.getForm().context
          }).then((d) => {
            t.value = d.rows;
          });
        });
      };
    }
    return (l, c) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: u }) => [
        y(m(G), v(B(s(u))), {
          options: g((r) => [
            m(n) ? (f(), h(m(J), v(w({ key: 0 }, r.itemProps)), {
              default: g(() => [
                y(m(X), null, {
                  default: g(() => [
                    y(m(Z), null, {
                      default: g(() => [
                        Y(z(r.opt.label), 1)
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
              scope: r
            }, null, 8, ["scope"]))
          ]),
          _: 2
        }, 1040)
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
const bt = /* @__PURE__ */ ft(gt, [["render", ht]]), _t = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = D([]), t = D([]);
    function a(i) {
      const l = i.injectForm.getFormFactoryInstance(), c = l.formSettings, u = l.formStyleConfig;
      return n.value = Object.freeze(i.field.selectOptions ?? []), t.value = i.field.selectOptions ?? [], {
        // behaviour
        "onUpdate:modelValue": (r) => i.modelValueOnUpdate(r),
        modelValue: i.modelValue,
        lazyRules: c.rulesBehaviour === "lazy",
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
        const c = i.toLowerCase();
        t.value = n.value.filter((u) => u.label.toLowerCase().includes(c));
      });
    }
    return (i, l) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: c }) => [
        y(m(G), v(B(a(c))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), yt = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(o) {
    const e = o, n = e.field.componentOptions.associationDisplayComponent, t = D([]), a = D({
      limit: E(),
      offset: 0
    });
    function s(c) {
      const u = c.injectForm.getFormFactoryInstance(), r = u.formSettings, d = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (F) => c.modelValueOnUpdate(F),
        modelValue: c.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: c.field.clearable,
        rules: c.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        options: t.value,
        // events
        onClear: c.clear,
        onFilter: i(c),
        // display
        label: c.field.label,
        hint: c.field.hint,
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
        class: c.field.cssClass
      };
    }
    function i(c) {
      return (u, r) => {
        const d = c.injectForm.getAssociationDataCallback();
        u === "" && (a.value = {
          limit: E(),
          offset: 0
        }), r(() => {
          d({
            resourceName: c.injectForm.getForm().resourceName,
            associationName: c.field.metadata.field_association_name,
            limit: a.value.limit,
            offset: a.value.offset,
            labelFilter: u,
            context: c.injectForm.getForm().context
          }).then((F) => {
            t.value = F.rows;
          });
        });
      };
    }
    function l(c) {
      console.log("hellow world"), t.value = [
        {
          label: c.field.defaultDisplayValue ?? "",
          value: c.modelValue
        }
      ];
    }
    return (c, u) => (f(), h(k, {
      field: e.field
    }, {
      default: g(({ propsWrapper: r }) => [
        y(m(G), w(s(r), {
          onVnodeMounted: (d) => l(r)
        }), {
          options: g((d) => [
            m(n) ? (f(), h(m(J), v(w({ key: 0 }, d.itemProps)), {
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
class H {
  constructor(e, n, t, a, s, i, l) {
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
      selectHasMany: mt,
      checkbox: ut,
      object: bt
    }[e];
  }
  getForm(e, n, t) {
    const a = [];
    return e.form.sections.forEach((i) => {
      const l = [];
      i.fields.forEach((u) => {
        const r = H.getFieldComponentByFormFieldType(
          u.field_type
        ), d = {
          associationDisplayComponent: this.getAssociationDisplayComponentByResourceName(e.form.resource_name)
        }, F = {
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
          component: r,
          componentOptions: d
        };
        l.push(F);
      });
      const c = {
        label: i.label,
        icon: i.icon,
        cssClass: i.css_class,
        fields: l
      };
      a.push(c);
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
  setup(o, { expose: e }) {
    const n = o;
    let t = null;
    const a = Object.freeze(
      new H(
        n.resourceName,
        n.globalFormSettings
      )
    ), s = dt(_e()), i = D({}), l = D(), c = D(!1), u = D(!1);
    async function r() {
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
      ), c.value = !0;
    }
    async function d() {
      u.value = !0;
      const _ = {};
      Object.entries(i.value).forEach((T) => {
        _[T[0]] = T[1].getValue();
      });
      const N = await n.submitForm({ formData: _ });
      t && (t.resource_data = N), F(), u.value = !1;
    }
    function F() {
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
    return fe(s, {
      registerRef: ee,
      getDefaultDataByFieldName: te,
      getFieldDataByFieldName: ne,
      getFormFactoryInstance: oe,
      getForm: le,
      getAssociationDataCallback: ae
    }), e({}), Q(async () => {
      await r();
    }), (_, N) => c.value && l.value ? (f(), p("div", Ct, [
      R("div", {
        class: A(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (f(!0), p(U, null, P(l.value.sections, (T, ie) => (f(), h(x(m(a).sectionComponent), {
          key: ie,
          section: T
        }, {
          default: g(() => [
            (f(!0), p(U, null, P(T.fields, (q) => (f(), p(U, {
              key: q.metadata.field_name
            }, [
              _.$slots[q.metadata.field_name] ? (f(), h(k, {
                key: 1,
                field: q
              }, {
                default: g(({ propsWrapper: re }) => [
                  $(_.$slots, "default", { propsWrapper: re })
                ]),
                _: 2
              }, 1032, ["field"])) : (f(), h(x(q.component), {
                key: 0,
                field: q
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (f(), h(x(m(a).actionComponent), {
        isLoadingSubmit: u.value,
        submit: d,
        clear: l.value.clearable ? W : void 0,
        reset: l.value.resetable ? F : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      _.$slots.more_actions ? $(_.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: l.value }
      }) : O("", !0)
    ])) : O("", !0);
  }
});
export {
  V as Submit64,
  vt as Submit64Form
};
