var re = Object.defineProperty;
var se = (n, e, l) => e in n ? re(n, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[e] = l;
var C = (n, e, l) => se(n, typeof e != "symbol" ? e + "" : e, l);
import { defineComponent as y, createElementBlock as v, openBlock as c, createVNode as S, createBlock as h, createCommentVNode as x, unref as f, normalizeClass as Z, createElementVNode as O, toDisplayString as ie, renderSlot as R, resolveComponent as ue, inject as ce, ref as V, onMounted as M, getCurrentInstance as de, resolveDynamicComponent as G, withCtx as _, normalizeProps as p, guardReactiveProps as q, mergeProps as W, provide as fe, Fragment as A, renderList as X } from "vue";
import { QBtn as z, QIcon as ee, date as i, QInput as H, QPopupProxy as me, QDate as ge, QCheckbox as he, QSelect as K, uid as be } from "quasar";
const _e = { class: "flex row items-center no-wrap q-pt-sm" }, Ce = /* @__PURE__ */ y({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const e = n;
    return (l, t) => (c(), v("div", _e, [
      S(f(z), {
        label: "Enregistrer",
        loading: e.isLoadingSubmit,
        onClick: e.submit
      }, null, 8, ["loading", "onClick"]),
      e.reset ? (c(), h(f(z), {
        key: 0,
        loading: e.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: e.reset
      }, null, 8, ["loading", "onClick"])) : x("", !0),
      e.clear ? (c(), h(f(z), {
        key: 1,
        loading: e.isLoadingSubmit,
        label: "Vider",
        onClick: e.clear
      }, null, 8, ["loading", "onClick"])) : x("", !0)
    ]));
  }
}), Se = { class: "flex row items-center" }, ye = { class: "text-body1 text-weight-medium" }, Fe = { class: "flex column q-gutter-sm" }, De = /* @__PURE__ */ y({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const e = n;
    return (l, t) => (c(), v("div", {
      class: Z(["flex column", e.section.cssClass])
    }, [
      O("div", Se, [
        e.section.icon ? (c(), h(f(ee), {
          key: 0,
          name: e.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : x("", !0),
        O("div", ye, ie(e.section.label), 1)
      ]),
      O("div", Fe, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), Te = /* @__PURE__ */ y({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const e = n;
    return (l, t) => {
      const r = ue("q-icon");
      return c(), h(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: t[0] || (t[0] = (a) => e.reset())
      });
    };
  }
}), U = class U {
  constructor() {
    C(this, "_formSettings");
    C(this, "_formStyleConfig");
    C(this, "_actionComponent");
    C(this, "_sectionComponent");
    C(this, "_wrapperResetComponent");
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
    }, this._actionComponent = Ce, this._sectionComponent = De, this._wrapperResetComponent = Te;
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
C(U, "_instance", new U());
let B = U;
function ke(n, e, l, t) {
  const r = (s) => String(
    i.formatDate(
      i.extractDate(s, l.backendDateFormat),
      e.dateFormat
    )
  ), a = [], o = [];
  switch (t) {
    case "date":
      a.push(nt(e.dateFormat));
  }
  return n.forEach((s) => {
    switch (s.type) {
      case "required":
        a.push(pe());
        break;
      case "absence":
        a.push(Ne());
        break;
      case "acceptance":
        a.push(Be());
        break;
      case "inclusion":
        const u = s;
        a.push(te(u.including));
        break;
      case "exclusion":
        const b = s;
        a.push(qe(b.excluding));
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
        a.push(xe());
        break;
      case "lessThanOrEqualNumber":
        const m = s;
        if (m.less_than) {
          a.push(
            Oe(
              () => m.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const g = s;
        if (g.less_than) {
          a.push(Re(() => g.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const T = s;
        if (T.greater_than) {
          a.push(
            $e(
              () => T.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const $ = s;
        if ($.greater_than) {
          a.push(
            we(() => $.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const w = s;
        if (w.equal_to) {
          a.push(Ee(() => w.equal_to));
          break;
        }
      case "otherThanNumber":
        const E = s;
        if (E.other_than) {
          a.push(Ie(() => E.other_than));
          break;
        }
      case "numberIntegerOnly":
        a.push(Le());
        break;
      case "numberNumericOnly":
        a.push(je());
        break;
      case "numberEvenOnly":
        a.push(Ge());
        break;
      case "numberOddOnly":
        a.push(ze());
        break;
      case "lessThanOrEqualStringLength":
        const I = s;
        if (I.less_than) {
          a.push(
            Ue(
              () => I.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const L = s;
        if (L.less_than) {
          a.push(
            He(() => L.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const j = s;
        if (j.greater_than) {
          a.push(
            Pe(
              () => j.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const d = s;
        if (d.greater_than) {
          a.push(
            Ye(
              () => d.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const F = s;
        if (F.equal_to) {
          a.push(Ae(() => F.equal_to));
          break;
        }
      case "betweenStringLength":
        const D = s;
        a.push(
          Qe(
            () => D.min,
            () => D.max
          )
        );
        break;
      case "equalToStringLength":
        const P = s;
        a.push(Ke(() => P.equal_to));
        break;
      case "otherThanString":
        const N = s;
        a.push(Je(() => N.other_than));
        break;
      case "lessThanOrEqualDate":
        const Y = s;
        a.push(
          Xe(
            () => r(
              Y.less_than
            ),
            e.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const ne = s;
        a.push(
          Ze(
            () => r(
              ne.less_than
            ),
            e.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const le = s;
        a.push(
          Me(
            () => r(
              le.greater_than
            ),
            e.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const Q = s;
        console.log(Q.greater_than), console.log(r(
          Q.greater_than
        )), a.push(
          We(
            () => r(
              Q.greater_than
            ),
            e.dateFormat
          )
        );
        break;
      case "equalToDate":
        const oe = s;
        a.push(
          et(
            () => r(
              oe.equal_to
            ),
            e.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const ae = s;
        a.push(
          tt(
            () => r(
              ae.other_than
            ),
            e.dateFormat
          )
        );
        break;
    }
  }), o.length > 0 ? o.map((s) => {
    switch (s) {
      case "allowBlank":
        return Ve(a);
      case "allowNull":
        return ve(a);
    }
  }) : a;
}
function pe() {
  return (n) => !!n || "Ce champ est requis";
}
function te(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function qe(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${te.toString()}`
  );
}
function Ne() {
  return (n) => !n || "Ce champ doit être vide";
}
function Be() {
  return (n) => !!n || "Doit être accepté";
}
function ve(n) {
  return (e) => (e === null || n.forEach((l) => {
    const t = l(e);
    if (t !== !0)
      return t;
  }), !0);
}
function Ve(n) {
  return (e) => (e === "" || n.forEach((l) => {
    const t = l(e);
    if (t !== !0)
      return t;
  }), !0);
}
function xe() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Oe(n) {
  return (e) => {
    const l = n();
    return Number(e) <= l || `Inf. ou égal à ${l}`;
  };
}
function Re(n) {
  return (e) => {
    const l = n();
    return Number(e) < l || `Inf. ${l}`;
  };
}
function $e(n) {
  return (e) => {
    const l = n();
    return Number(e) >= l || `Sup. ou égal à ${l}`;
  };
}
function we(n) {
  return (e) => {
    const l = n();
    return Number(e) > l || `Sup. à ${l}`;
  };
}
function Ee(n, e) {
  const l = n();
  return (t) => Number(t) === l || `Égale à ${l}`;
}
function Ie(n, e) {
  const l = n();
  return (t) => Number(t) !== l || `Doit être différent de ${n}`;
}
function Le() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function je() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function Ge() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function ze() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ue(n) {
  const e = n();
  return (l) => String(l).length <= e || `Inf. ou égal à ${e}`;
}
function He(n) {
  const e = n();
  return (l) => String(l).length < e || `Inf. à ${e}`;
}
function Pe(n) {
  const e = n();
  return (l) => String(l).length >= e || `Sup. ou égal à ${e}`;
}
function Ye(n) {
  const e = n();
  return (l) => String(l).length > e || `Sup. à ${e}`;
}
function Qe(n, e) {
  const l = n(), t = e();
  return (r) => String(r).length >= l && String(r).length <= t || `Entre ${l} et ${t}`;
}
function Ae(n, e) {
  const l = n();
  return (t) => String(t) === l || `Égale à ${l}`;
}
function Ke(n) {
  const e = n();
  return (l) => String(l).length === e || `Doit contenir ${e} caractères`;
}
function Je(n, e) {
  const l = n();
  return (t) => String(t) !== l || `Doit être différent de ${l}`;
}
function Xe(n, e) {
  const l = n();
  return (t) => !Number.isNaN(i.extractDate(String(t), e).getTime()) && i.extractDate(String(t), e) <= i.extractDate(l, e) || `Inf. ou égal à ${i.formatDate(l, e)}`;
}
function Ze(n, e) {
  const l = n();
  return (t) => !Number.isNaN(i.extractDate(String(t), e).getTime()) && i.extractDate(String(t), e) < i.extractDate(l, e) || `Inf. à ${i.formatDate(l, e)}`;
}
function Me(n, e) {
  const l = n();
  return (t) => !Number.isNaN(i.extractDate(String(t), e).getTime()) && i.extractDate(String(t), e) >= i.extractDate(l, e) || `Sup. ou égal à ${i.formatDate(l, e)}`;
}
function We(n, e) {
  const l = n();
  return console.log(n()), console.log(e), (t) => !Number.isNaN(i.extractDate(String(t), e).getTime()) && i.extractDate(String(t), e) > i.extractDate(l, e) || `Sup. à ${i.formatDate(l, e)}, current is ${i.formatDate(String(t), e)}`;
}
function et(n, e, l) {
  const t = n();
  return (r) => i.extractDate(String(r), e) === i.extractDate(t, e) || `Égale à ${i.extractDate(t, e)}`;
}
function tt(n, e, l) {
  const t = n();
  return (r) => i.extractDate(String(r), e) !== i.extractDate(t, e) || `Doit être différent de ${t}`;
}
function nt(n) {
  return (e) => !Number.isNaN(i.extractDate(String(e), n).getTime()) || "Date invalide";
}
const lt = {
  computeServerRules: ke
}, k = /* @__PURE__ */ y({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: e }) {
    const l = n, t = ce(l.field.provideUniqKey), r = V();
    function a() {
      return r.value;
    }
    function o() {
      t && (r.value = t.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ), r.value = s(r.value));
    }
    function s(g) {
      switch (l.field.type) {
        case "date":
          return i.formatDate(
            i.extractDate(
              String(g),
              t.getForm().backendDateFormat
            ),
            t.getFormFactoryInstance().formSettings.dateFormat
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
          r.value = i.formatDate(
            /* @__PURE__ */ new Date(),
            t.getFormFactoryInstance().formSettings.dateFormat
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
    function b() {
      return lt.computeServerRules(
        l.field.rules ?? [],
        t.getFormFactoryInstance().formSettings,
        l.field.type
      );
    }
    function m(g) {
      r.value = g;
    }
    return e({
      reset: o,
      clear: u,
      getValue: a
    }), M(() => {
      var T;
      o();
      const g = (T = de()) == null ? void 0 : T.proxy;
      g && t && t.registerRef(
        l.field.metadata.field_name,
        g
      );
    }), (g, T) => (c(), v("div", null, [
      l.field.resetable ? R(g.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), h(G(f(t).getFormFactoryInstance().wrapperResetComponent), { reset: o }))
      ]) : x("", !0),
      R(g.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: m, field: g.field, injectForm: f(t), reset: o, clear: u, getComputedRules: b }
      })
    ]));
  }
}), ot = /* @__PURE__ */ y({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(H), p(q(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), at = /* @__PURE__ */ y({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(H), W(l(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), rt = { class: "row items-center justify-end" }, st = /* @__PURE__ */ y({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n, l = V();
    function t(s) {
      const u = s.injectForm.getFormFactoryInstance(), b = u.formSettings, m = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (g) => s.modelValueOnUpdate(g),
        modelValue: s.modelValue,
        lazyRules: b.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        // events
        onClear: s.clear,
        // display
        label: s.field.label,
        hint: s.field.hint,
        outlined: m.fieldOutlined,
        filled: m.fieldFilled,
        standout: m.fieldStandout,
        borderless: m.fieldBorderless,
        rounded: m.fieldRounded,
        square: m.fieldSquare,
        dense: m.fieldDense,
        hideBottomSpace: m.fieldHideBottomSpace,
        color: m.fieldColor,
        bgColor: m.fieldBgColor,
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
    return (s, u) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: b }) => [
        S(f(H), p(q(t(b))), {
          append: _(() => [
            S(f(ee), p(q(r())), {
              default: _(() => [
                S(f(me), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: _(() => [
                    S(f(ge), p(q(a(b))), {
                      default: _(() => [
                        O("div", rt, [
                          S(f(z), {
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
}), it = /* @__PURE__ */ y({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance().formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (a) => t.modelValueOnUpdate(a),
        modelValue: t.modelValue,
        // display
        label: t.field.label,
        dense: r.fieldDense,
        color: r.fieldColor,
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(he), p(q(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = /* @__PURE__ */ y({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(H), W(l(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ct = /* @__PURE__ */ y({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(K), p(q(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), dt = (n, e) => {
  const l = n.__vccOpts || n;
  for (const [t, r] of e)
    l[t] = r;
  return l;
}, ft = {};
function mt(n, e) {
  return " TODO json edit ? ";
}
const gt = /* @__PURE__ */ dt(ft, [["render", mt]]), ht = /* @__PURE__ */ y({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (s) => t.modelValueOnUpdate(s),
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: t.field.selectOptions || [],
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(K), p(q(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), bt = /* @__PURE__ */ y({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(n) {
    const e = n;
    function l(t) {
      const r = t.injectForm.getFormFactoryInstance(), a = r.formSettings, o = r.formStyleConfig;
      return {
        // behaviour
        modelValue: t.modelValue,
        lazyRules: a.rulesBehaviour === "lazy",
        clearable: t.field.clearable,
        rules: t.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: t.clear,
        // display
        label: t.field.label,
        hint: t.field.hint,
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
        class: t.field.cssClass
      };
    }
    return (t, r) => (c(), h(k, {
      field: e.field
    }, {
      default: _(({ propsWrapper: a }) => [
        S(f(K), p(q(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class J {
  constructor(e, l, t, r, a, o) {
    C(this, "resourceName");
    C(this, "formSettings");
    C(this, "formStyleConfig");
    C(this, "actionComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    this.resourceName = e, this.formSettings = {
      ...B.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...B.getGlobalFormStyleConfig(),
      ...t
    }, this.actionComponent = r ?? B.getGlobalActionComponent(), this.sectionComponent = a ?? B.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? B.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: ot,
      text: at,
      number: ut,
      date: st,
      selectString: ht,
      selectBelongsTo: bt,
      selectHasMany: ct,
      checkbox: it,
      object: gt
    }[e];
  }
  getAllField(e, l) {
    const t = [];
    return e.form.sections.forEach((a) => {
      const o = [];
      a.fields.forEach((u) => {
        const b = J.getFieldComponentByFormFieldType(
          u.field_type
        ), m = {
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
          component: b
        };
        o.push(m);
      });
      const s = {
        label: a.label,
        icon: a.icon,
        cssClass: a.css_class,
        fields: o
      };
      t.push(s);
    }), {
      sections: t,
      cssClass: e.form.css_class,
      resetable: e.form.resetable,
      clearable: e.form.clearable,
      backendDateFormat: e.form.backend_date_format,
      backendDatetimeFormat: e.form.backend_datetime_format,
      hasGlobalCustomValidation: e.form.has_global_custom_validation ?? !1
    };
  }
}
function _t(n) {
  return Symbol(n);
}
const Ct = {
  key: 0,
  class: "flex column"
}, Dt = /* @__PURE__ */ y({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    globalFormSettings: {},
    context: {}
  },
  setup(n, { expose: e }) {
    const l = n;
    let t = null;
    const r = Object.freeze(
      new J(
        l.resourceName,
        l.globalFormSettings
      )
    ), a = _t(be()), o = V({}), s = V(), u = V(!1), b = V(!1);
    async function m() {
      t = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        r.getAllField(t, a)
      ), u.value = !0;
    }
    async function g() {
      b.value = !0;
      const d = {};
      Object.entries(o.value).forEach((D) => {
        d[D[0]] = D[1].getValue();
      });
      const F = await l.submitForm({ formData: d });
      t && (t.resource_data = F), T(), b.value = !1;
    }
    function T() {
      Object.values(o.value).forEach((d) => {
        d.reset();
      });
    }
    function $() {
      Object.values(o.value).forEach((d) => {
        d.clear();
      });
    }
    function w(d, F) {
      o.value[d] = F;
    }
    function E(d) {
      if (t)
        return t.resource_data[d];
    }
    function I(d) {
      const F = Object.entries(o.value).find((D) => D[0] === d);
      return F ? F[1].getValue() : null;
    }
    function L() {
      return r;
    }
    function j() {
      return s.value;
    }
    return fe(a, {
      registerRef: w,
      getDefaultDataByFieldName: E,
      getFieldDataByFieldName: I,
      getFormFactoryInstance: L,
      getForm: j
    }), e({}), M(async () => {
      await m();
    }), (d, F) => u.value && s.value ? (c(), v("div", Ct, [
      O("div", {
        class: Z(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (c(!0), v(A, null, X(s.value.sections, (D, P) => (c(), h(G(f(r).sectionComponent), {
          key: P,
          section: D
        }, {
          default: _(() => [
            (c(!0), v(A, null, X(D.fields, (N) => (c(), v(A, {
              key: N.metadata.field_name
            }, [
              d.$slots[N.metadata.field_name] ? (c(), h(k, {
                key: 1,
                field: N
              }, {
                default: _(({ propsWrapper: Y }) => [
                  R(d.$slots, "default", { propsWrapper: Y })
                ]),
                _: 2
              }, 1032, ["field"])) : (c(), h(G(N.component), {
                key: 0,
                field: N
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (c(), h(G(f(r).actionComponent), {
        isLoadingSubmit: b.value,
        submit: g,
        clear: s.value.clearable ? $ : void 0,
        reset: s.value.resetable ? T : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      d.$slots.more_actions ? R(d.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : x("", !0)
    ])) : x("", !0);
  }
});
export {
  B as Submit64,
  Dt as Submit64Form
};
