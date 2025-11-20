var Be = Object.defineProperty;
var Oe = (o, e, t) => e in o ? Be(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var C = (o, e, t) => Oe(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as q, openBlock as h, createElementVNode as j, createVNode as T, createBlock as D, createCommentVNode as z, unref as i, mergeProps as be, toDisplayString as W, renderSlot as Te, resolveComponent as qe, normalizeProps as we, guardReactiveProps as $e, withCtx as O, createTextVNode as ze, Fragment as oe, renderList as re, ref as x, onMounted as I, normalizeClass as U, watch as M, resolveDynamicComponent as L, nextTick as ue, markRaw as P, getCurrentInstance as Re, useSlots as Ie } from "vue";
import { QBtn as Y, QIcon as ae, QItem as Ue, QItemSection as Pe, QItemLabel as Le, QInput as ce, QPopupProxy as ve, QDate as Ae, QTime as Ge, QCheckbox as He, QSelect as Ce, date as V } from "quasar";
const je = { class: "flex column" }, We = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Qe = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
  },
  setup(o) {
    const e = o;
    function t() {
      const n = e.formApi.formStyle;
      return {
        outline: n.fieldOutlined,
        rounded: n.fieldRounded,
        square: n.fieldSquare,
        dense: n.fieldDense,
        color: n.fieldColor,
        noCaps: !0
      };
    }
    return (n, r) => (h(), q("div", je, [
      j("div", We, [
        T(i(Y), be(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), D(i(Y), be({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : z("", !0),
        e.clear ? (h(), D(i(Y), be({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : z("", !0)
      ])
    ]));
  }
}), Ye = { class: "flex row items-center" }, Me = { class: "text-body1 text-weight-medium" }, Je = { class: "flex column q-gutter-md" }, Ke = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {},
    context: {}
  },
  setup(o) {
    const e = o;
    return (t, n) => (h(), q("div", null, [
      j("div", Ye, [
        e.sectionApi.icon ? (h(), D(i(ae), {
          key: 0,
          name: e.sectionApi.icon,
          size: "sm",
          color: e.formApi.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : z("", !0),
        j("div", Me, W(e.sectionApi.label), 1)
      ]),
      j("div", Je, [
        Te(t.$slots, "default")
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, n) => {
      const r = qe("q-icon");
      return h(), D(r, {
        name: "reset",
        class: "cursor-pointer",
        onClick: n[0] || (n[0] = (a) => e.reset())
      });
    };
  }
}), Ze = /* @__PURE__ */ B({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, n) => (h(), D(i(Ue), we($e(e.itemProps)), {
      default: O(() => [
        T(i(Pe), null, {
          default: O(() => [
            T(i(Le), null, {
              default: O(() => [
                ze(W(e.entry.label), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16));
  }
}), et = { class: "flex column" }, tt = /* @__PURE__ */ B({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, n) => (h(), q("div", et, [
      (h(!0), q(oe, null, re(e.orphanErrors, (r, a) => (h(), q("div", {
        key: a,
        class: "q-field--error q-field__bottom text-negative"
      }, W(a) + " : " + W(r.join(",")), 1))), 128))
    ]));
  }
}), se = class se {
  constructor() {
    C(this, "_formSettings");
    C(this, "_formStyle");
    C(this, "_actionComponent");
    C(this, "_orphanErrorsComponent");
    C(this, "_sectionComponent");
    C(this, "_wrapperResetComponent");
    C(this, "_associationDisplayComponent");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0
    }, this._formStyle = {
      fieldOutlined: !1,
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
    }, this._actionComponent = Qe, this._orphanErrorsComponent = tt, this._sectionComponent = Ke, this._wrapperResetComponent = Xe, this._associationDisplayComponent = Ze;
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...e
    };
  }
  static registerGlobalFormStyle(e) {
    this._instance._formStyle = {
      ...this._instance._formStyle,
      ...e
    };
  }
  static registerGlobalActionComponent(e) {
    this._instance._actionComponent = e;
  }
  static registerGlobalOrphanErrorsComponent(e) {
    this._instance._orphanErrorsComponent = e;
  }
  static registerGlobalSectionComponent(e) {
    this._instance._sectionComponent = e;
  }
  static registerGlobalWrapperResetComponent(e) {
    this._instance._wrapperResetComponent = e;
  }
  static registerGlobalAssociationDisplayComponent(e) {
    this._instance._associationDisplayComponent = e;
  }
  static getGlobalFormSetting() {
    return this._instance._formSettings;
  }
  static getGlobalFormStyle() {
    return this._instance._formStyle;
  }
  static getGlobalActionComponent() {
    return this._instance._actionComponent;
  }
  static getGlobalOrphanErrorComponent() {
    return this._instance._orphanErrorsComponent;
  }
  static getGlobalSectionComponent() {
    return this._instance._sectionComponent;
  }
  static getGlobalWrapperResetComponent() {
    return this._instance._wrapperResetComponent;
  }
  static getGlobalAssociationDisplayComponent() {
    return this._instance._associationDisplayComponent;
  }
};
C(se, "_instance", new se());
let H = se;
const nt = { class: "row items-center justify-end" }, ot = /* @__PURE__ */ B({
  __name: "DateField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi, n = t.formSettings, r = t.formStyle, a = n.rulesBehaviour === "lazy", c = x(), s = x();
    function l() {
      c.value && c.value.hide();
    }
    function m() {
      return s.value ? s.value.validate() : !1;
    }
    function _() {
      return s.value ? s.value.hasError : !1;
    }
    function S() {
      s.value && s.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(m, _, S);
    }), (y, A) => (h(), D(i(ce), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (E) => e.modelValueOnUpdate(E)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(r).fieldOutlined,
      filled: i(r).fieldFilled,
      standout: i(r).fieldStandout,
      borderless: i(r).fieldBorderless,
      rounded: i(r).fieldRounded,
      square: i(r).fieldSquare,
      dense: i(r).fieldDense,
      hideBottomSpace: i(r).fieldHideBottomSpace,
      color: i(r).fieldColor,
      bgColor: i(r).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": a,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        T(i(ae), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(i(ve), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(i(Ae), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (E) => e.modelValueOnUpdate(E)),
                  mask: i(t).formSettings.dateFormat
                }, {
                  default: O(() => [
                    j("div", nt, [
                      T(i(Y), {
                        onClick: l,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), rt = { class: "row items-center justify-end" }, at = { class: "row items-center justify-end" }, it = /* @__PURE__ */ B({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi, n = t.formSettings, r = t.formStyle, a = n.rulesBehaviour === "lazy", c = x(), s = x(), l = x();
    function m() {
      c.value && c.value.hide();
    }
    function _() {
      s.value && s.value.hide();
    }
    function S() {
      return l.value ? l.value.validate() : !1;
    }
    function y() {
      return l.value ? l.value.hasError : !1;
    }
    function A() {
      l.value && l.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(S, y, A);
    }), (E, F) => (h(), D(i(ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (b) => e.modelValueOnUpdate(b)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(r).fieldOutlined,
      filled: i(r).fieldFilled,
      standout: i(r).fieldStandout,
      borderless: i(r).fieldBorderless,
      rounded: i(r).fieldRounded,
      square: i(r).fieldSquare,
      dense: i(r).fieldDense,
      hideBottomSpace: i(r).fieldHideBottomSpace,
      color: i(r).fieldColor,
      bgColor: i(r).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": a,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        T(i(ae), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(i(ve), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(i(Ae), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: i(t).formSettings.datetimeFormat
                }, {
                  default: O(() => [
                    j("div", rt, [
                      T(i(Y), {
                        onClick: m,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        T(i(ae), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(i(ve), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(i(Ge), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: i(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: O(() => [
                    j("div", at, [
                      T(i(Y), {
                        onClick: _,
                        label: "Fermer",
                        color: "secondary",
                        flat: "",
                        "no-caps": ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), lt = { class: "flex column" }, st = {
  key: 0,
  class: "q-field__bottom"
}, ut = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, ct = /* @__PURE__ */ B({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = x(!0), r = e.formApi.formStyle;
    function a() {
      return t.value === !0;
    }
    function c() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return M(
      () => e.modelValue,
      (l) => {
        for (const m of e.rules)
          if (t.value = m(l), t.value !== !0)
            break;
      }
    ), I(() => {
      e.registerBehaviourCallbacks(a, c, s);
    }), (l, m) => (h(), q("div", lt, [
      T(i(He), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": m[0] || (m[0] = (_) => e.modelValueOnUpdate(_)),
        label: e.field.label,
        dense: i(r).fieldDense,
        color: i(r).fieldColor,
        "aria-readonly": e.field.readonly,
        class: U([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", st, W(e.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (h(), q("div", ut, W(t.value), 1)) : z("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ B({
  __name: "ObjectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const t = o.formApi.getFormFactoryInstance(), n = t.formSettings;
    return t.formStyle, n.rulesBehaviour, (r, a) => " TODO json edit ? ";
  }
}), ft = /* @__PURE__ */ B({
  __name: "SelectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = x([]), n = x([]), r = x(), a = e.formApi, c = a.formSettings, s = a.formStyle, l = c.rulesBehaviour === "lazy";
    function m(F, b) {
      if (F === "") {
        b(() => {
          n.value = [...t.value];
        });
        return;
      }
      b(() => {
        const k = F.toLowerCase();
        n.value = t.value.filter((f) => f.label.toLowerCase().includes(k));
      });
    }
    function _() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), n.value = e.field.staticSelectOptions ?? [];
    }
    function S() {
      return r.value ? r.value.validate() : !1;
    }
    function y() {
      return r.value ? r.value.hasError : !1;
    }
    function A() {
      r.value && r.value.resetValidation();
    }
    function E() {
      e.clear(), n.value = [];
    }
    return I(() => {
      _(), e.registerBehaviourCallbacks(S, y, A);
    }), (F, b) => (h(), D(i(Ce), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (k) => e.modelValueOnUpdate(k)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(s).fieldOutlined,
      filled: i(s).fieldFilled,
      standout: i(s).fieldStandout,
      borderless: i(s).fieldBorderless,
      rounded: i(s).fieldRounded,
      square: i(s).fieldSquare,
      dense: i(s).fieldDense,
      hideBottomSpace: i(s).fieldHideBottomSpace,
      color: i(s).fieldColor,
      bgColor: i(s).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: n.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: E,
      onFilter: m
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function ie() {
  return 20;
}
function _e(o) {
  return Object.keys(o).forEach((e) => {
    const t = o[e];
    t && typeof t == "object" && _e(t);
  }), Object.freeze(o);
}
function N(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const mt = /* @__PURE__ */ B({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi, r = n.formSettings, a = n.formStyle, c = r.rulesBehaviour === "lazy", s = x([]), l = x({
      limit: ie(),
      offset: 0
    }), m = x();
    function _(b, k) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: ie(),
        offset: 0
      }), k(() => {
        const g = e.formApi;
        f({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then(($) => {
          s.value = $.rows;
        }).catch(() => {
          s.value = [];
        });
      });
    }
    function S() {
      ue(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (s.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: b,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function y() {
      return m.value ? m.value.validate() : !1;
    }
    function A() {
      return m.value ? m.value.hasError : !1;
    }
    function E() {
      m.value && m.value.resetValidation();
    }
    function F() {
      e.clear(), s.value = [];
    }
    return I(() => {
      S(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, k) => (h(), D(i(Ce), {
      ref_key: "fieldRef",
      ref: m,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      outlined: i(a).fieldOutlined,
      filled: i(a).fieldFilled,
      standout: i(a).fieldStandout,
      borderless: i(a).fieldBorderless,
      rounded: i(a).fieldRounded,
      square: i(a).fieldSquare,
      dense: i(a).fieldDense,
      hideBottomSpace: i(a).fieldHideBottomSpace,
      color: i(a).fieldColor,
      bgColor: i(a).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: F,
      onFilter: _
    }, {
      option: O((f) => [
        (h(), D(L(i(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), pt = /* @__PURE__ */ B({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, n = e.formApi, r = n.formSettings, a = n.formStyle, c = r.rulesBehaviour === "lazy", s = x([]), l = x({
      limit: ie(),
      offset: 0
    }), m = x();
    function _(b, k) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: ie(),
        offset: 0
      }), k(() => {
        const g = e.formApi;
        f({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then(($) => {
          s.value = $.rows;
        }).catch(() => {
          s.value = [];
        });
      });
    }
    function S() {
      ue(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (s.value = b.map(
          (k, f) => ({
            label: e.field.associationData.label[f] ?? "???",
            value: k,
            data: e.field.associationData.data[f]
          })
        ));
      });
    }
    function y() {
      return m.value ? m.value.validate() : !1;
    }
    function A() {
      return m.value ? m.value.hasError : !1;
    }
    function E() {
      m.value && m.value.resetValidation();
    }
    function F() {
      e.clear(), s.value = [];
    }
    return I(() => {
      S(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, k) => (h(), D(i(Ce), {
      ref_key: "fieldRef",
      ref: m,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(a).fieldOutlined,
      filled: i(a).fieldFilled,
      standout: i(a).fieldStandout,
      borderless: i(a).fieldBorderless,
      rounded: i(a).fieldRounded,
      square: i(a).fieldSquare,
      dense: i(a).fieldDense,
      hideBottomSpace: i(a).fieldHideBottomSpace,
      color: i(a).fieldColor,
      bgColor: i(a).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: F,
      onFilter: _
    }, {
      option: O((f) => [
        (h(), D(L(i(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), xe = /* @__PURE__ */ B({
  __name: "StringField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi, n = t.formSettings, r = t.formStyle, a = n.rulesBehaviour === "lazy", c = x();
    function s() {
      return c.value ? c.value.validate() : !1;
    }
    function l() {
      return c.value ? c.value.hasError : !1;
    }
    function m() {
      c.value && c.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(s, l, m);
    }), (_, S) => (h(), D(i(ce), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(r).fieldOutlined,
      filled: i(r).fieldFilled,
      standout: i(r).fieldStandout,
      borderless: i(r).fieldBorderless,
      rounded: i(r).fieldRounded,
      square: i(r).fieldSquare,
      dense: i(r).fieldDense,
      hideBottomSpace: i(r).fieldHideBottomSpace,
      color: i(r).fieldColor,
      bgColor: i(r).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": a,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), gt = /* @__PURE__ */ B({
  __name: "NumberField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    rules: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.formApi, n = t.formSettings, r = t.formStyle, a = n.rulesBehaviour === "lazy", c = x();
    function s() {
      return c.value ? c.value.validate() : !1;
    }
    function l() {
      return c.value ? c.value.hasError : !1;
    }
    function m() {
      c.value && c.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(s, l, m);
    }), (_, S) => (h(), D(i(ce), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: i(r).fieldOutlined,
      filled: i(r).fieldFilled,
      standout: i(r).fieldStandout,
      borderless: i(r).fieldBorderless,
      rounded: i(r).fieldRounded,
      square: i(r).fieldSquare,
      dense: i(r).fieldDense,
      hideBottomSpace: i(r).fieldHideBottomSpace,
      color: i(r).fieldColor,
      bgColor: i(r).fieldBgColor,
      class: U(e.field.cssClass),
      "lazy-rules": a,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class le {
  constructor(e) {
    C(this, "formApi");
    C(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const n = e, r = t, a = new yt(n, r, this.formApi);
    return this.events.push(a), new ht(a);
  }
  static create(e) {
    return new le(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((n) => {
      const r = n.getTarget();
      switch (r.target) {
        case "field":
          t.fields[r.target] || (t.fields[r.target] = {}), t.fields[r.target][r.key] || (t.fields[r.target][r.key] = []), t.fields[r.target][r.key].push(n.getActionCallback());
          break;
        case "section":
          t.sections[r.target] || (t.sections[r.target] = {}), t.sections[r.target][r.key] || (t.sections[r.target][r.key] = []), t.sections[r.target][r.key].push(n.getActionCallback());
          break;
        case "form":
          t.form[r.key] || (t.form[r.key] = []), t.form[r.key].push(
            n.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class ht {
  constructor(e) {
    C(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class yt {
  constructor(e, t, n) {
    C(this, "type");
    C(this, "data");
    C(this, "actions", []);
    C(this, "formApi");
    this.type = e, this.data = t, this.formApi = n;
  }
  getTarget() {
    switch (this.type) {
      case "Field is updated":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onUpdate"
        };
      case "Field is valid":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onIsValid"
        };
      case "Field is validated":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onValidated"
        };
      case "Field is cleared":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onClear"
        };
      case "Field is reseted":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onReset"
        };
      case "Field confirm value statement":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onConfirmStatement"
        };
      case "Field is hidden":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onHide"
        };
      case "Field is unhidden":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onUnhide"
        };
      case "Section is valid":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onReset"
        };
      case "Section is hidden":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onHide"
        };
      case "Section is unhidden":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onUnhide"
        };
      case "Section is cleared":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onClear"
        };
      case "Section is reseted":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onReset"
        };
      case "Section is validated":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onValidated"
        };
      case "Form is ready":
        return {
          target: "form",
          key: "onReady"
        };
      case "Form is submited":
        return {
          target: "form",
          key: "onSubmit"
        };
      case "Form is updated":
        return {
          target: "form",
          key: "onUpdate"
        };
      case "Form is cleared":
        return {
          target: "form",
          key: "onClear"
        };
      case "Form is reseted":
        return {
          target: "form",
          key: "onReset"
        };
      case "Form is valid":
        return {
          target: "form",
          key: "onIsValid"
        };
      case "Form is validated":
        return {
          target: "form",
          key: "onValidated"
        };
      default:
        return console.warn(`Submit64 -> unhandled event target : ${this.type}`), {
          target: null
        };
    }
  }
  getActionCallback() {
    return () => {
      this.actions.forEach((e) => {
        e(this.formApi);
      });
    };
  }
}
class K {
  constructor(e, t, n, r, a, c, s, l, m) {
    C(this, "resourceName");
    C(this, "resourceId");
    C(this, "formMetadataAndData");
    C(this, "context");
    C(this, "formSettings");
    C(this, "formStyle");
    C(this, "actionComponent");
    C(this, "orphanErrorsComponent");
    C(this, "sectionComponent");
    C(this, "wrapperResetComponent");
    C(this, "associationDisplayComponent");
    C(this, "dynamicComponentRecord");
    C(this, "formApi");
    C(this, "registerEventCallback");
    this.dynamicComponentRecord = n.dynamicComponentRecord ?? {}, this.formMetadataAndData = r, this.resourceId = t, this.context = s, this.resourceName = e, this.formApi = l, this.formSettings = {
      ...a,
      ...H.getGlobalFormSetting(),
      backendDateFormat: r.form.backend_date_format,
      backendDatetimeFormat: r.form.backend_datetime_format
    }, this.formStyle = {
      ...c,
      ...H.getGlobalFormStyle()
    }, this.actionComponent = n.actionComponent ?? H.getGlobalActionComponent(), this.orphanErrorsComponent = n.orphanErrorsComponent ?? H.getGlobalOrphanErrorComponent(), this.sectionComponent = n.sectionComponent ?? H.getGlobalSectionComponent(), this.wrapperResetComponent = n.wrapperResetComponent ?? H.getGlobalWrapperResetComponent(), this.associationDisplayComponent = n.associationDisplayComponent ?? H.getGlobalAssociationDisplayComponent(), this.registerEventCallback = m ?? (() => {
    });
  }
  static getForm(e, t, n, r, a, c, s, l, m) {
    return new K(
      e,
      t,
      n,
      r,
      a,
      c,
      s,
      l,
      m
    ).generateFormDef();
  }
  generateFormDef() {
    const e = le.create(this.formApi);
    this.registerEventCallback(e);
    const t = le.getEventsObjectFromInstance(e), n = [];
    return this.formMetadataAndData.form.sections.forEach(
      (a, c) => {
        const s = [];
        a.fields.forEach((y) => {
          const A = this.dynamicComponentRecord[`field-${y.field_name}-before`], E = K.getFieldComponentByFormFieldType(
            y.field_type
          ), F = this.dynamicComponentRecord[`field-${y.field_name}-after`], b = {
            associationDisplayComponent: P(this.associationDisplayComponent),
            regularFieldType: K.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, k = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: y.label,
            hint: y.hint ?? void 0,
            prefix: y.prefix ?? void 0,
            suffix: y.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? a.readonly ?? y.readonly ?? void 0,
            cssClass: y.css_class ?? void 0,
            staticSelectOptions: y.static_select_options,
            associationData: y.field_association_data,
            rules: y.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: A ? P(A) : void 0,
            mainComponent: P(E),
            afterComponent: F ? P(F) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: b
          };
          s.push(k);
        });
        const l = this.dynamicComponentRecord[`section-${a.name ?? c}-before`], m = this.sectionComponent, _ = this.dynamicComponentRecord[`section-${a.name ?? c}-after`], S = {
          label: a.label ?? void 0,
          icon: a.icon ?? void 0,
          cssClass: a.css_class ?? void 0,
          hidden: !1,
          name: a.name ?? c.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? a.readonly ?? void 0,
          events: t.sections[a.name ?? c.toString()] ?? {},
          beforeComponent: l ? P(l) : void 0,
          mainComponent: P(m),
          afterComponent: _ ? P(_) : void 0,
          fields: s
        };
        n.push(S);
      }
    ), {
      sections: n,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: t.form,
      actionComponent: P(this.actionComponent),
      orphanErrorsComponent: P(this.orphanErrorsComponent),
      wrapperResetComponent: P(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
  }
  static getRegularFieldTypeByFieldType(e) {
    return {
      text: "textarea"
    }[e] || void 0;
  }
  static getFieldComponentByFormFieldType(e) {
    return {
      string: xe,
      text: xe,
      number: gt,
      date: ot,
      datetime: it,
      selectString: ft,
      selectBelongsTo: mt,
      selectHasMany: pt,
      checkbox: ct,
      object: dt
    }[e];
  }
}
function bt(o, e, t) {
  const n = (s, l, m) => s[l] ? m ? () => r(s[l]) : () => s[l] : s.compare_to ? () => {
    var _;
    return ((_ = t.getField(s.compare_to)) == null ? void 0 : _.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", r = (s) => String(
    V.formatDate(
      V.extractDate(s, t.formSettings.backendDateFormat),
      t.formSettings.dateFormat
    )
  ), a = [], c = [];
  switch (e) {
    case "date":
      a.push(De(t.formSettings.dateFormat));
      break;
    case "datetime":
      a.push(De(t.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((s) => {
    const l = s;
    switch (l.type) {
      case "required":
        a.push(vt());
        break;
      case "absence":
        a.push(_t());
        break;
      case "acceptance":
        a.push(St());
        break;
      case "inclusion":
        a.push(Ee(l.including));
        break;
      case "exclusion":
        a.push(Ct(l.excluding));
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
        a.push(Vt());
        break;
      case "lessThanOrEqualNumber":
        a.push(
          xt(
            n(l, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        a.push(
          Dt(
            n(l, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        a.push(
          Rt(
            n(l, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        a.push(
          At(
            n(l, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        a.push(
          Et(n(l, "equal_to"))
        );
        break;
      case "otherThanNumber":
        a.push(
          Nt(
            n(l, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        a.push(Bt());
        break;
      case "numberNumericOnly":
        a.push(Ot());
        break;
      case "numberEvenOnly":
        a.push(Tt());
        break;
      case "numberOddOnly":
        a.push(qt());
        break;
      case "lessThanOrEqualStringLength":
        a.push(
          wt(
            n(l, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        a.push(
          $t(
            n(l, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        a.push(
          zt(
            n(l, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        a.push(
          It(
            n(l, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        a.push(
          Lt(
            n(l, "equal_to")
          )
        );
        break;
      case "equalToString":
        a.push(
          Pt(n(l, "equal_to"))
        );
        break;
      case "betweenStringLength":
        a.push(
          Ut(
            () => l.min,
            () => l.max
          )
        );
        break;
      case "otherThanString":
        a.push(
          Gt(
            n(l, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        a.push(
          Ht(
            n(l, "less_than", !0),
            t.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        a.push(
          jt(
            n(l, "less_than", !0),
            t.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        a.push(
          Wt(
            n(l, "greater_than", !0),
            t.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        a.push(
          Qt(
            n(l, "greater_than", !0),
            t.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        a.push(
          Yt(
            n(l, "equal_to", !0),
            t.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        a.push(
          Mt(
            n(l, "other_than", !0),
            t.formSettings.dateFormat
          )
        );
        break;
    }
  }), c.length > 0 ? c.map((s) => {
    switch (s) {
      case "allowBlank":
        return kt(a);
      case "allowNull":
        return Ft(a);
    }
  }) : a;
}
function vt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ee(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Ct(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ee.toString()}`
  );
}
function _t() {
  return (o) => !o || "Ce champ doit être vide";
}
function St() {
  return (o) => !!o || "Doit être accepté";
}
function Ft(o) {
  return (e) => (e === null || o.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function kt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Vt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function xt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Dt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Rt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function At(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Et(o, e) {
  return (t) => {
    const n = o();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Nt(o, e) {
  return (t) => {
    const n = o();
    return Number(t) !== n || `Doit être différent de ${o}`;
  };
}
function Bt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Ot() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Tt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function qt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function wt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function $t(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function zt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Ut(o, e) {
  return (t) => {
    const n = o(), r = e();
    return String(t).length >= n && String(t).length <= r || `Entre ${n} et ${r}`;
  };
}
function Pt(o, e) {
  return (t) => {
    const n = o();
    return String(t) === n || `Égale à ${n}`;
  };
}
function Lt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Gt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ht(o, e) {
  return (t) => {
    const n = o(), r = V.extractDate(String(t), e), a = V.extractDate(n, e);
    return r <= a || `Inf. ou égal à ${n}`;
  };
}
function jt(o, e) {
  return (t) => {
    const n = o(), r = V.extractDate(String(t), e), a = V.extractDate(n, e);
    return r < a || `Inf. à ${n}`;
  };
}
function Wt(o, e) {
  return (t) => {
    const n = o(), r = V.extractDate(String(t), e), a = V.extractDate(n, e);
    return r >= a || `Sup. ou égal à ${n}`;
  };
}
function Qt(o, e) {
  return (t) => {
    const n = o(), r = V.extractDate(String(t), e), a = V.extractDate(n, e);
    return r > a || `Sup. à ${n}`;
  };
}
function Yt(o, e) {
  return (t) => {
    const n = o(), r = V.extractDate(String(t), e), a = V.extractDate(n, e);
    return r === a || `Égale à ${r}`;
  };
}
function Mt(o, e) {
  return (t) => {
    const n = o();
    return V.extractDate(String(t), e) !== V.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function De(o) {
  return (e) => e == null || e === "" ? !0 : Jt(e, o) || `Date invalide. Format : ${o}`;
}
function Jt(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = V.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : V.formatDate(t, e) === o;
}
const Kt = {
  computeServerRules: bt
}, Xt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Zt = ["index"], en = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let n = () => !0, r = () => !0, a = () => {
    };
    const c = A(), s = x(), l = x([]);
    function m() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = _(s.value), N(t.field.events.onReset), ue(() => {
        ee();
      });
    }
    function _(d) {
      const v = t.formApi;
      switch (t.field.type) {
        case "checkbox":
          return d == null || d === "" ? !1 : d;
        case "date":
          return d == null || d === "" ? null : V.formatDate(
            V.extractDate(String(d), v.formSettings.backendDateFormat),
            v.formSettings.dateFormat
          );
        case "datetime":
          return d == null || d === "" ? null : V.formatDate(
            V.extractDate(
              String(d),
              v.formSettings.backendDatetimeFormat
            ),
            v.formSettings.datetimeFormat
          );
      }
      return d;
    }
    function S(d) {
      const v = t.formApi;
      switch (t.field.type) {
        case "date":
          return d == null || d === "" ? null : V.formatDate(
            V.extractDate(String(d), v.formSettings.dateFormat),
            v.formSettings.backendDateFormat
          );
        case "datetime":
          return d == null || d === "" ? null : V.formatDate(
            V.extractDate(String(d), v.formSettings.datetimeFormat),
            v.formSettings.backendDatetimeFormat
          );
      }
      return d;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          s.value = "";
          break;
        case "checkbox":
          s.value = !1;
          break;
        case "date":
          s.value = null;
          break;
        case "datetime":
          s.value = null;
          break;
        case "number":
          s.value = null;
          break;
        case "selectString":
          s.value = void 0;
          break;
        case "text":
          s.value = "";
          break;
        case "object":
          s.value = {};
          break;
        case "selectBelongsTo":
          s.value = void 0;
          break;
        case "selectHasMany":
          s.value = void 0;
          break;
      }
      N(t.field.events.onClear);
    }
    function A() {
      return Kt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function E(d) {
      s.value = d;
    }
    function F() {
      return i(s);
    }
    function b() {
      return S(i(s));
    }
    function k(d) {
      l.value = d;
    }
    function f() {
      const d = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      d && (d.hidden = !0);
    }
    function g() {
      const d = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      d && (d.hidden = !1);
    }
    function $(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.readonly = d);
    }
    function de(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.hint = d);
    }
    function fe(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.cssClass = d);
    }
    function me(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.suffix = d);
    }
    function pe(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.prefix = d);
    }
    function ge(d) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.label = d);
    }
    function X() {
      const d = n();
      return N(t.field.events.onValidated), d;
    }
    function Z() {
      return r();
    }
    function ee() {
      return a();
    }
    function he(d, v, J) {
      n = d, r = v, a = J;
    }
    return e({
      reset: m,
      clear: y,
      validate: X,
      isValid: Z,
      hide: f,
      unhide: g,
      resetValidation: ee,
      getValueDeserialized: b,
      getValueSerialized: F,
      setupBackendErrors: k,
      setReadonlyState: $,
      setHint: de,
      setCssClass: fe,
      setSuffix: me,
      setPrefix: pe,
      setLabel: ge
    }), M(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), M(
      () => t.field.events.onIsValid ? Z() : null,
      (d) => {
        d && N(t.field.events.onIsValid);
      }
    ), I(() => {
      var v;
      m();
      const d = (v = Re()) == null ? void 0 : v.exposed;
      d && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        d
      );
    }), (d, v) => (h(), q("div", {
      class: U(t.field.hidden ? "submit64-field-hidden" : "")
    }, [
      t.field.beforeComponent ? (h(), D(L(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      (h(), D(L(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        rules: i(c),
        reset: m,
        clear: y,
        getValueDeserialized: b,
        getValueSerialized: F,
        validate: X,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), D(L(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      l.value.length > 0 ? (h(), q("div", Xt, [
        (h(!0), q(oe, null, re(l.value, (J, ye) => (h(), q("div", {
          index: ye,
          class: "flex column"
        }, W(J), 9, Zt))), 256))
      ])) : z("", !0)
    ], 2));
  }
}), tn = /* @__PURE__ */ B({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const t = o, n = /* @__PURE__ */ new Map(), r = {
      reset: c,
      clear: s,
      validate: _,
      isValid: S,
      hide: l,
      unhide: m,
      resetValidation: y,
      getFields: A,
      setReadonlyState: E,
      setCssClass: F,
      setIcon: b,
      setLabel: k,
      ..._e({ ...t.section })
    };
    function a() {
      t.section.fields.forEach((f) => {
        const g = f.metadata.field_name, $ = t.formApi.getField(g);
        $ && n.set(g, $);
      });
    }
    function c() {
      n.forEach((f) => {
        f.reset();
      }), N(t.section.events.onReset);
    }
    function s() {
      n.forEach((f) => {
        f.clear();
      }), N(t.section.events.onClear);
    }
    function l() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (n.forEach((g) => {
        g.hide();
      }), f.hidden = !0, N(t.section.events.onHide));
    }
    function m() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (n.forEach((g) => {
        g.unhide();
      }), f.hidden = !1, N(t.section.events.onUnhide));
    }
    function _() {
      let f = !0;
      return n.forEach((g) => {
        if (!g.validate()) {
          f = !1;
          return;
        }
      }), N(t.section.events.onValidated), f;
    }
    function S() {
      let f = !0;
      return n.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function y() {
      n.forEach((f) => {
        f.resetValidation();
      });
    }
    function A() {
      return n;
    }
    function E(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.readonly = f);
    }
    function F(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.cssClass = f);
    }
    function b(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.icon = f);
    }
    function k(f) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.label = f);
    }
    return e(r), M(
      () => t.section.events.onIsValid ? S() : null,
      (f) => {
        f && N(t.section.events.onIsValid);
      }
    ), I(() => {
      var g;
      const f = (g = Re()) == null ? void 0 : g.exposed;
      f && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        f
      ), a();
    }), (f, g) => (h(), q("div", {
      class: U(["flex column", t.section.hidden ? "submit64-section-hidden" : ""])
    }, [
      t.section.beforeComponent ? (h(), D(L(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : z("", !0),
      (h(), D(L(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi,
        context: t.context
      }, null, 8, ["formApi", "context"])),
      t.section.afterComponent ? (h(), D(L(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : z("", !0)
    ], 2));
  }
}), nn = {
  key: 0,
  class: "flex column"
}, ln = /* @__PURE__ */ B({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    formStyle: {},
    actionComponent: {},
    orphanErrorsComponent: {},
    sectionComponent: {},
    wrapperResetComponent: {},
    associationDisplayComponent: {},
    associationDisplayRecord: {},
    eventManager: {},
    context: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let n = null, r = "";
    const a = Ie(), c = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = x(), m = x(!1), _ = x(!1), S = x("create"), y = x({});
    async function A() {
      var u, p;
      console.timeEnd("mount and ready"), n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), console.time("mount and ready 2"), l.value = K.getForm(
        t.resourceName,
        t.resourceId,
        F(),
        n,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), t.resourceId && (S.value = "edit"), m.value = !0, N((p = (u = l.value) == null ? void 0 : u.events) == null ? void 0 : p.onReady);
    }
    async function E() {
      var R, w;
      if (!k())
        return;
      _.value = !0, fe();
      const u = b(), p = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: u,
        context: t.context
      });
      if (p.success)
        y.value = {}, S.value === "create" && (S.value = "edit"), n && p.resource_data && (n.resource_data = p.resource_data), r = JSON.stringify(b()), g();
      else {
        y.value = {};
        const te = [];
        [...c].forEach((G) => {
          const ne = p.errors[G[0]];
          ne && (G[1].setupBackendErrors(ne), te.push(G[0]));
        }), Object.entries(p.errors).forEach((G) => {
          te.includes(G[0]) || (y.value[G[0]] = G[1]);
        });
      }
      N((w = (R = l.value) == null ? void 0 : R.events) == null ? void 0 : w.onSubmit), _.value = !1;
    }
    function F() {
      const u = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const p in a) {
        const R = a[p];
        if (R) {
          const w = B({
            inheritAttrs: !1,
            setup(te, { attrs: G, slots: ne }) {
              return () => R({
                ...te,
                ...G,
                slots: ne
              });
            }
          });
          switch (p) {
            case "sections":
              u.sectionComponent = w;
              break;
            case "actions":
              u.actionComponent = w;
              break;
            case "orphan-errors":
              u.orphanErrorsComponent = w;
              break;
            case "association-display":
              u.associationDisplayComponent = w;
              break;
            default:
              u.dynamicComponentRecord[p] = w;
              break;
          }
        }
      }
      return u;
    }
    function b() {
      const u = {};
      return [...c].forEach((p) => {
        u[p[0]] = p[1].getValueDeserialized();
      }), u;
    }
    function k() {
      var p, R;
      let u = !0;
      return c.forEach((w) => {
        if (!w.validate()) {
          u = !1;
          return;
        }
      }), N((R = (p = l.value) == null ? void 0 : p.events) == null ? void 0 : R.onValidated), u;
    }
    function f() {
      let u = !0;
      return c.forEach((p) => {
        if (!p.isValid()) {
          u = !1;
          return;
        }
      }), u;
    }
    function g() {
      var u, p;
      c.forEach((R) => {
        R.reset();
      }), N((p = (u = l.value) == null ? void 0 : u.events) == null ? void 0 : p.onReset);
    }
    function $() {
      var u, p;
      c.forEach((R) => {
        R.clear();
      }), N((p = (u = l.value) == null ? void 0 : u.events) == null ? void 0 : p.onClear);
    }
    function de() {
      c.forEach((u) => {
        u.resetValidation();
      });
    }
    function fe() {
      c.forEach((u) => {
        u.setupBackendErrors([]);
      });
    }
    function me(u) {
      if (n)
        return n.resource_data[u];
    }
    function pe(u) {
      return s.get(u);
    }
    function ge(u) {
      return c.get(u);
    }
    function X() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Z() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((p) => {
        (t[p] === null || t[p] === void 0) && console.warn(`Missing props for <Submit64> -> ${p}`);
      });
    }
    function ee() {
      return i(S);
    }
    function he() {
      return r !== JSON.stringify(b());
    }
    function Se(u) {
      l.value && (l.value.context = u);
    }
    function d(u) {
      l.value && (l.value.cssClass = u);
    }
    function v(u) {
      l.value && (l.value.readonly = u);
    }
    function J() {
      return l;
    }
    function ye(u) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.find((R) => R.name === u);
    }
    function Ne(u) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.map((R) => R.fields).flat().find((R) => R.metadata.field_name === u);
    }
    function Fe(u, p) {
      s.set(u, p);
    }
    function ke(u, p) {
      c.set(u, p);
    }
    const Ve = {
      getFormRef: J,
      getSectionRef: ye,
      getFieldRef: Ne,
      registerSectionWrapperRef: Fe,
      registerFieldWrapperRef: ke
    }, Q = {
      getMode: ee,
      getSection: pe,
      getField: ge,
      validateForm: k,
      isFormValid: f,
      resetForm: g,
      clearForm: $,
      resetValidation: de,
      submitForm: E,
      valuesHasChanged: he,
      getInitialValueByFieldName: me,
      getAssociationDataCallback: X,
      setContext: Se,
      setCssClass: d,
      setReadonlyState: v,
      ..._e({ ...l.value })
    };
    return e(Q), M(
      () => {
        var u;
        return (u = l.value) != null && u.events.onIsValid ? f() : null;
      },
      () => {
        var u, p;
        N((p = (u = l.value) == null ? void 0 : u.events) == null ? void 0 : p.onIsValid);
      }
    ), M(
      () => {
        var u;
        return (u = l.value) != null && u.events.onUpdate ? b() : null;
      },
      () => {
        var u, p;
        N((p = (u = l.value) == null ? void 0 : u.events) == null ? void 0 : p.onUpdate);
      }
    ), I(async () => {
      console.time("mount and ready"), Z(), await A(), console.time("mount and ready 2"), ue(() => {
        r = JSON.stringify(b());
      });
    }), (u, p) => m.value && l.value ? (h(), q("div", nn, [
      j("div", {
        class: U(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(oe, null, re(l.value.sections, (R) => (h(), D(tn, {
          key: R.name,
          section: R,
          context: t.context,
          formApi: Q,
          privateFormApi: Ve,
          registerRef: Fe
        }, {
          default: O(() => [
            (h(!0), q(oe, null, re(R.fields, (w) => (h(), D(en, {
              key: w.metadata.field_name,
              field: w,
              context: t.context,
              formApi: Q,
              privateFormApi: Ve,
              registerRef: ke
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), D(L(l.value.orphanErrorsComponent), {
        orphanErrors: y.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (h(), D(L(l.value.actionComponent), {
        isLoadingSubmit: _.value,
        submit: E,
        clear: l.value.clearable ? $ : void 0,
        reset: l.value.resetable ? g : void 0,
        formApi: Q
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : z("", !0);
  }
});
export {
  H as Submit64,
  ln as Submit64Form
};
