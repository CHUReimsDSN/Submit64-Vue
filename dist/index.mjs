var ae = Object.defineProperty;
var re = (n, t, l) => t in n ? ae(n, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[t] = l;
var _ = (n, t, l) => re(n, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as S, createElementBlock as k, openBlock as c, createVNode as C, createBlock as g, createCommentVNode as v, unref as m, normalizeClass as X, createElementVNode as x, toDisplayString as se, renderSlot as R, resolveComponent as ie, inject as ue, ref as p, onMounted as Z, getCurrentInstance as ce, resolveDynamicComponent as G, withCtx as b, normalizeProps as N, guardReactiveProps as V, mergeProps as M, provide as de, Fragment as Y, renderList as K } from "vue";
import { QBtn as z, QIcon as W, date as d, QInput as U, QPopupProxy as fe, QDate as me, QCheckbox as ge, QSelect as Q, uid as he } from "quasar";
const be = { class: "flex row items-center no-wrap q-pt-sm" }, _e = /* @__PURE__ */ S({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), k("div", be, [
      C(m(z), {
        label: "Enregistrer",
        loading: t.isLoadingSubmit,
        onClick: t.submit
      }, null, 8, ["loading", "onClick"]),
      t.reset ? (c(), g(m(z), {
        key: 0,
        loading: t.isLoadingSubmit,
        label: "Réinitialiser",
        onClick: t.reset
      }, null, 8, ["loading", "onClick"])) : v("", !0),
      t.clear ? (c(), g(m(z), {
        key: 1,
        loading: t.isLoadingSubmit,
        label: "Vider",
        onClick: t.clear
      }, null, 8, ["loading", "onClick"])) : v("", !0)
    ]));
  }
}), Ce = { class: "flex row items-center" }, Se = { class: "text-body1 text-weight-medium" }, ye = { class: "flex column q-gutter-sm" }, Fe = /* @__PURE__ */ S({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(n) {
    const t = n;
    return (l, e) => (c(), k("div", {
      class: X(["flex column", t.section.cssClass])
    }, [
      x("div", Ce, [
        t.section.icon ? (c(), g(m(W), {
          key: 0,
          name: t.section.icon,
          size: "sm"
        }, null, 8, ["name"])) : v("", !0),
        x("div", Se, se(t.section.label), 1)
      ]),
      x("div", ye, [
        R(l.$slots, "default")
      ])
    ], 2));
  }
}), Te = /* @__PURE__ */ S({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(n) {
    const t = n;
    return (l, e) => {
      const r = ie("q-icon");
      return c(), g(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: e[0] || (e[0] = (a) => t.reset())
      });
    };
  }
}), I = class I {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyleConfig");
    _(this, "_actionComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
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
    }, this._actionComponent = _e, this._sectionComponent = Fe, this._wrapperResetComponent = Te;
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
_(I, "_instance", new I());
let q = I;
function De(n, t, l) {
  const e = [], r = [];
  switch (l) {
    case "date":
      e.push(et(t.dateFormat));
  }
  return n.forEach((a) => {
    switch (a.type) {
      case "required":
        e.push(J());
        break;
      case "absence":
        e.push(Ne());
        break;
      case "acceptance":
        e.push(Ve());
        break;
      case "inclusion":
        const o = a;
        e.push(ee(o.including));
        break;
      case "exclusion":
        const s = a;
        e.push(qe(s.excluding));
        break;
      case "backend":
        e.push(J());
        break;
      case "allowNull":
        r.push("allowNull");
        break;
      case "allowBlank":
        r.push("allowBlank");
        break;
      case "positiveNumber":
        e.push(pe());
        break;
      case "lessThanOrEqualNumber":
        const u = a;
        if (u.less_than) {
          e.push(
            ve(
              () => u.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const h = a;
        if (h.less_than) {
          e.push(Oe(() => h.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const i = a;
        if (i.greater_than) {
          e.push(
            xe(
              () => i.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const y = a;
        if (y.greater_than) {
          e.push(
            Re(() => y.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const O = a;
        if (O.equal_to) {
          e.push($e(() => O.equal_to));
          break;
        }
      case "otherThanNumber":
        const $ = a;
        if ($.other_than) {
          e.push(we(() => $.other_than));
          break;
        }
      case "numberIntegerOnly":
        e.push(Ee());
        break;
      case "numberNumericOnly":
        e.push(Le());
        break;
      case "numberEvenOnly":
        e.push(je());
        break;
      case "numberOddOnly":
        e.push(Ge());
        break;
      case "lessThanOrEqualStringLength":
        const w = a;
        if (w.less_than) {
          e.push(
            ze(
              () => w.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const E = a;
        if (E.less_than) {
          e.push(
            Ie(() => E.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const L = a;
        if (L.greater_than) {
          e.push(
            Ue(
              () => L.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const j = a;
        if (j.greater_than) {
          e.push(
            He(
              () => j.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const f = a;
        if (f.equal_to) {
          e.push(Ye(() => f.equal_to));
          break;
        }
      case "betweenStringLength":
        const F = a;
        e.push(
          Pe(
            () => F.min,
            () => F.max
          )
        );
        break;
      case "equalToStringLength":
        const T = a;
        e.push(Qe(() => T.equal_to));
        break;
      case "otherThanString":
        const H = a;
        e.push(Ae(() => H.other_than));
        break;
      case "lessThanOrEqualDate":
        const B = a;
        e.push(
          Ke(
            () => B.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const P = a;
        e.push(
          Je(
            () => P.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const te = a;
        e.push(
          Xe(
            () => te.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const ne = a;
        e.push(
          Ze(
            () => ne.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const le = a;
        e.push(
          Me(
            () => le.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const oe = a;
        e.push(
          We(
            () => oe.other_than,
            t.dateFormat
          )
        );
        break;
    }
  }), r.length > 0 ? r.map((a) => {
    switch (a) {
      case "allowBlank":
        return ke(e);
      case "allowNull":
        return Be(e);
    }
  }) : e;
}
function J() {
  return (n) => !!n || "Ce champ est requis";
}
function ee(n) {
  return (t) => n.includes(String(t)) || `Doit être contenu dans ${n.toString()}`;
}
function qe(n) {
  return (t) => !n.includes(
    String(t) || `Ne doit pas être contenu dans ${ee.toString()}`
  );
}
function Ne() {
  return (n) => !n || "Ce champ doit être vide";
}
function Ve() {
  return (n) => !!n || "Doit être accepté";
}
function Be(n) {
  return (t) => (t === null || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function ke(n) {
  return (t) => (t === "" || n.forEach((l) => {
    const e = l(t);
    if (e !== !0)
      return e;
  }), !0);
}
function pe() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function ve(n) {
  return (t) => {
    const l = n();
    return Number(t) <= l || `Inf. ou égal à ${l}`;
  };
}
function Oe(n) {
  return (t) => {
    const l = n();
    return Number(t) < l || `Inf. ${l}`;
  };
}
function xe(n) {
  return (t) => {
    const l = n();
    return Number(t) >= l || `Sup. ou égal à ${l}`;
  };
}
function Re(n) {
  return (t) => {
    const l = n();
    return Number(t) > l || `Sup. à ${l}`;
  };
}
function $e(n, t) {
  const l = n();
  return (e) => Number(e) === l || `Égale à ${l}`;
}
function we(n, t) {
  const l = n();
  return (e) => Number(e) !== l || `Doit être différent de ${n}`;
}
function Ee() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function Le() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function je() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function Ge() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function ze(n) {
  const t = n();
  return (l) => String(l).length <= t || `Inf. ou égal à ${t}`;
}
function Ie(n) {
  const t = n();
  return (l) => String(l).length < t || `Inf. à ${t}`;
}
function Ue(n) {
  const t = n();
  return (l) => String(l).length >= t || `Sup. ou égal à ${t}`;
}
function He(n) {
  const t = n();
  return (l) => String(l).length > t || `Sup. à ${t}`;
}
function Pe(n, t) {
  const l = n(), e = t();
  return (r) => String(r).length >= l && String(r).length <= e || `Entre ${l} et ${e}`;
}
function Ye(n, t) {
  const l = n();
  return (e) => String(e) === l || `Égale à ${l}`;
}
function Qe(n) {
  const t = n();
  return (l) => String(l).length === t || `Doit contenir ${t} caractères`;
}
function Ae(n, t) {
  const l = n();
  return (e) => String(e) !== l || `Doit être différent de ${l}`;
}
function Ke(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) <= d.extractDate(l, t) || `Inf. ou égal à ${d.formatDate(l, t)}`;
}
function Je(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) < d.extractDate(l, t) || `Inf. à ${d.formatDate(l, t)}`;
}
function Xe(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) >= d.extractDate(l, t) || `Sup. ou égal à ${d.formatDate(l, t)}`;
}
function Ze(n, t) {
  const l = n();
  return (e) => !Number.isNaN(d.extractDate(String(e), t).getTime()) && d.extractDate(String(e), t) > d.extractDate(l, t) || `Sup. à ${d.formatDate(l, t)}`;
}
function Me(n, t, l) {
  const e = n();
  return (r) => d.extractDate(String(r), t) === d.extractDate(e, t) || `Égale à ${d.extractDate(e, t)}`;
}
function We(n, t, l) {
  const e = n();
  return (r) => d.extractDate(String(r), t) !== d.extractDate(e, t) || `Doit être différent de ${e}`;
}
function et(n) {
  return (t) => !Number.isNaN(d.extractDate(String(t), n).getTime()) || "Date invalide";
}
const tt = {
  computeServerRules: De
}, D = /* @__PURE__ */ S({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(n, { expose: t }) {
    const l = n, e = ue(l.field.provideUniqKey), r = p();
    function a() {
      return r.value;
    }
    function o() {
      e && (r.value = e.getDefaultDataByFieldName(
        l.field.metadata.field_name
      ));
    }
    function s() {
      switch (typeof r.value) {
        case "boolean":
          r.value = !1;
        case "string":
          r.value = "";
        case "number":
          r.value = 0;
        case "object":
          r.value = {};
      }
    }
    function u() {
      return tt.computeServerRules(
        l.field.rules ?? [],
        e.getFormFactory().formSettings,
        l.field.type
      );
    }
    function h(i) {
      r.value = i;
    }
    return t({
      reset: o,
      clear: s,
      getValue: a
    }), Z(() => {
      var y;
      o();
      const i = (y = ce()) == null ? void 0 : y.proxy;
      i && e && e.registerRef(
        l.field.metadata.field_name,
        i
      );
    }), (i, y) => (c(), k("div", null, [
      l.field.resetable ? R(i.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (c(), g(G(m(e).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : v("", !0),
      R(i.$slots, "default", {
        propsWrapper: { modelValue: r.value, modelValueOnUpdate: h, field: i.field, injectForm: m(e), reset: o, clear: s, getComputedRules: u }
      })
    ]));
  }
}), nt = /* @__PURE__ */ S({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), N(V(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), lt = /* @__PURE__ */ S({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), M(l(a), { type: "textarea" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ot = { class: "row items-center justify-end" }, at = /* @__PURE__ */ S({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n, l = p();
    function e(s) {
      const u = s.injectForm.getFormFactory(), h = u.formSettings, i = u.formStyleConfig;
      return {
        // behaviour
        "onUpdate:modelValue": (y) => s.modelValueOnUpdate(y),
        modelValue: s.modelValue,
        lazyRules: h.rulesBehaviour === "lazy",
        clearable: s.field.clearable,
        rules: s.getComputedRules(),
        // events
        onClear: s.clear,
        mounted: () => s.modelValueOnUpdate(
          d.formatDate(
            new Date(String(s.modelValue)),
            q.getGlobalFormSetting().dateFormat
          )
        ),
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
        mask: s.injectForm.getFormFactory().formSettings.dateFormat
      };
    }
    function o() {
      l.value && l.value.hide();
    }
    return (s, u) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: h }) => [
        C(m(U), N(V(e(h))), {
          append: b(() => [
            C(m(W), N(V(r())), {
              default: b(() => [
                C(m(fe), {
                  ref_key: "popupProxyRef",
                  ref: l,
                  cover: "",
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }, {
                  default: b(() => [
                    C(m(me), N(V(a(h))), {
                      default: b(() => [
                        x("div", ot, [
                          C(m(z), {
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
}), rt = /* @__PURE__ */ S({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory().formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(ge), N(V(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), st = /* @__PURE__ */ S({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(U), M(l(a), { type: "number" }), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), it = /* @__PURE__ */ S({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), N(V(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), ut = (n, t) => {
  const l = n.__vccOpts || n;
  for (const [e, r] of t)
    l[e] = r;
  return l;
}, ct = {};
function dt(n, t) {
  return " TODO json edit ? ";
}
const ft = /* @__PURE__ */ ut(ct, [["render", dt]]), mt = /* @__PURE__ */ S({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), N(V(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
}), gt = /* @__PURE__ */ S({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(n) {
    const t = n;
    function l(e) {
      const r = e.injectForm.getFormFactory(), a = r.formSettings, o = r.formStyleConfig;
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
    return (e, r) => (c(), g(D, {
      field: t.field
    }, {
      default: b(({ propsWrapper: a }) => [
        C(m(Q), N(V(l(a))), null, 16)
      ]),
      _: 1
    }, 8, ["field"]));
  }
});
class A {
  constructor(t, l, e, r, a, o) {
    _(this, "resourceName");
    _(this, "formSettings");
    _(this, "formStyleConfig");
    _(this, "actionComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ...q.getGlobalFormSetting(),
      ...l
    }, this.formStyleConfig = {
      ...q.getGlobalFormStyleConfig(),
      ...e
    }, this.actionComponent = r ?? q.getGlobalActionComponent(), this.sectionComponent = a ?? q.getGlobalSectionComponent(), this.wrapperResetComponent = o ?? q.getGlobalWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: nt,
      text: lt,
      number: st,
      date: at,
      selectString: mt,
      selectBelongsTo: gt,
      selectHasMany: it,
      checkbox: rt,
      object: ft
    }[t];
  }
  getAllField(t, l) {
    const e = [];
    return t.form.sections.forEach((a) => {
      const o = [];
      a.fields.forEach((u) => {
        const h = A.getFieldComponentByFormFieldType(
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
          component: h
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
      hasGlobalCustomValidation: t.form.has_global_custom_validation ?? !1
    };
  }
}
function ht(n) {
  return Symbol(n);
}
const bt = {
  key: 0,
  class: "flex column"
}, yt = /* @__PURE__ */ S({
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
      new A(
        l.resourceName,
        l.globalFormSettings
      )
    ), a = ht(he()), o = p({}), s = p(), u = p(!1), h = p(!1);
    async function i() {
      e = await l.getMetadataAndData({
        resourceName: l.resourceName,
        resourceId: l.resourceId,
        context: l.context
      }), s.value = Object.freeze(
        r.getAllField(e, a)
      ), u.value = !0;
    }
    async function y() {
      h.value = !0;
      const f = {};
      Object.entries(o.value).forEach((T) => {
        f[T[0]] = T[1].getValue();
      });
      const F = await l.submitForm({ formData: f });
      e && (e.resource_data = F), O(), h.value = !1;
    }
    function O() {
      Object.values(o.value).forEach((f) => {
        f.reset();
      });
    }
    function $() {
      Object.values(o.value).forEach((f) => {
        f.clear();
      });
    }
    function w(f, F) {
      o.value[f] = F;
    }
    function E(f) {
      if (e)
        return e.resource_data[f];
    }
    function L(f) {
      const F = Object.entries(o.value).find((T) => T[0] === f);
      return F ? F[1].getValue() : null;
    }
    function j() {
      return r;
    }
    return de(a, {
      registerRef: w,
      getDefaultDataByFieldName: E,
      getFieldDataByFieldName: L,
      getFormFactory: j
    }), t({}), Z(async () => {
      await i();
    }), (f, F) => u.value && s.value ? (c(), k("div", bt, [
      x("div", {
        class: X(s.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (c(!0), k(Y, null, K(s.value.sections, (T, H) => (c(), g(G(m(r).sectionComponent), {
          key: H,
          section: T
        }, {
          default: b(() => [
            (c(!0), k(Y, null, K(T.fields, (B) => (c(), k(Y, {
              key: B.metadata.field_name
            }, [
              f.$slots[B.metadata.field_name] ? (c(), g(D, {
                key: 1,
                field: B
              }, {
                default: b(({ propsWrapper: P }) => [
                  R(f.$slots, "default", { propsWrapper: P })
                ]),
                _: 2
              }, 1032, ["field"])) : (c(), g(G(B.component), {
                key: 0,
                field: B
              }, null, 8, ["field"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (c(), g(G(m(r).actionComponent), {
        isLoadingSubmit: h.value,
        submit: y,
        clear: s.value.clearable ? $ : void 0,
        reset: s.value.resetable ? O : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      f.$slots.more_actions ? R(f.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: s.value }
      }) : v("", !0)
    ])) : v("", !0);
  }
});
export {
  q as Submit64,
  yt as Submit64Form
};
