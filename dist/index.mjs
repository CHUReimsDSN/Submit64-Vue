var je = Object.defineProperty;
var We = (o, e, t) => e in o ? je(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => We(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as O, createElementBlock as q, openBlock as h, createElementVNode as Y, createVNode as T, createBlock as D, createCommentVNode as P, unref as a, mergeProps as be, toDisplayString as W, renderSlot as Ne, resolveComponent as Me, normalizeProps as Qe, guardReactiveProps as Je, withCtx as N, createTextVNode as Ke, Fragment as se, renderList as ue, ref as k, onMounted as U, normalizeClass as H, watch as j, resolveDynamicComponent as G, nextTick as X, markRaw as z, getCurrentInstance as Oe, withDirectives as Se, vShow as _e, useSlots as Xe } from "vue";
import { QBtn as Q, QIcon as ce, QItem as Ze, QItemSection as et, QItemLabel as tt, QInput as pe, QPopupProxy as Ce, QDate as Te, QTime as nt, QCheckbox as ot, QSelect as Fe, date as x } from "quasar";
const rt = { class: "flex column" }, at = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, it = /* @__PURE__ */ O({
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
      const r = e.formApi.form.formStyle;
      return {
        outline: r.fieldOutlined,
        rounded: r.fieldRounded,
        square: r.fieldSquare,
        dense: r.fieldDense,
        color: r.fieldColor,
        noCaps: !0
      };
    }
    return (r, n) => (h(), q("div", rt, [
      Y("div", at, [
        T(a(Q), be(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), D(a(Q), be({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.clear ? (h(), D(a(Q), be({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), lt = { class: "flex row items-center" }, st = { class: "text-body1 text-weight-medium" }, ut = { class: "flex column q-gutter-md" }, ct = /* @__PURE__ */ O({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      Y("div", lt, [
        e.sectionApi.section.icon ? (h(), D(a(ce), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : P("", !0),
        Y("div", st, W(e.sectionApi.section.label), 1)
      ]),
      Y("div", ut, [
        Ne(t.$slots, "default")
      ])
    ]));
  }
}), dt = /* @__PURE__ */ O({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Me("q-icon");
      return h(), D(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (l) => e.reset())
      });
    };
  }
}), ft = /* @__PURE__ */ O({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), D(a(Ze), Qe(Je(e.itemProps)), {
      default: N(() => [
        T(a(et), null, {
          default: N(() => [
            T(a(tt), null, {
              default: N(() => [
                Ke(W(e.entry.label), 1)
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
}), mt = { class: "flex column" }, pt = /* @__PURE__ */ O({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", mt, [
      (h(!0), q(se, null, ue(e.orphanErrors, (n, l) => (h(), q("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, W(l) + " : " + W(n.join(",")), 1))), 128))
    ]));
  }
}), me = class me {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyle");
    S(this, "_actionComponent");
    S(this, "_orphanErrorsComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
    S(this, "_associationDisplayComponent");
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
    }, this._actionComponent = it, this._orphanErrorsComponent = pt, this._sectionComponent = ct, this._wrapperResetComponent = dt, this._associationDisplayComponent = ft;
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
S(me, "_instance", new me());
let $ = me;
class de {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, l = new gt(r, n, this.formApi);
    return this.events.push(l), new ht(l);
  }
  static create(e) {
    return new de(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((r) => {
      const n = r.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(r.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            r.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class gt {
  constructor(e, t, r) {
    S(this, "type");
    S(this, "data");
    S(this, "formApi");
    S(this, "action", () => {
    });
    S(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = r;
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
      case "Form submit is successful":
        return {
          target: "form",
          key: "onSubmitSuccess"
        };
      case "Form submit is unsuccessful":
        return {
          target: "form",
          key: "onSubmitUnsuccess"
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
      this.cyclicActionCallSet.has(this.type) || (this.cyclicActionCallSet.add(this.type), this.action(this.formApi), this.cyclicActionCallSet.clear());
    };
  }
}
class ht {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const yt = { class: "row items-center justify-end" }, vt = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), u = k();
    function d() {
      i.value && i.value.hide();
    }
    function s() {
      return u.value ? u.value.validate() : !1;
    }
    function p() {
      return u.value ? u.value.hasError : !1;
    }
    function _() {
      u.value && u.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(s, p, _);
    }), (v, V) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[1] || (V[1] = (A) => e.modelValueOnUpdate(A)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: N(() => [
        T(a(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: N(() => [
                    Y("div", yt, [
                      T(a(Q), {
                        onClick: d,
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
}), bt = { class: "row items-center justify-end" }, Ct = { class: "row items-center justify-end" }, St = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), u = k(), d = k();
    function s() {
      i.value && i.value.hide();
    }
    function p() {
      u.value && u.value.hide();
    }
    function _() {
      return d.value ? d.value.validate() : !1;
    }
    function v() {
      return d.value ? d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(_, v, V);
    }), (A, F) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (b) => e.modelValueOnUpdate(b)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: N(() => [
        T(a(ce), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: N(() => [
                    Y("div", bt, [
                      T(a(Q), {
                        onClick: s,
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
        T(a(ce), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(nt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: N(() => [
                    Y("div", Ct, [
                      T(a(Q), {
                        onClick: p,
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
}), _t = { class: "flex column" }, Ft = {
  key: 0,
  class: "q-field__bottom"
}, kt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Vt = /* @__PURE__ */ O({
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
    const e = o, t = k(!0), n = e.formApi.form.formStyle;
    function l() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (d) => {
        for (const s of e.rules)
          if (t.value = s(d), t.value !== !0)
            break;
      }
    ), U(() => {
      e.registerBehaviourCallbacks(l, i, u);
    }), (d, s) => (h(), q("div", _t, [
      T(a(ot), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": s[0] || (s[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: H([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", Ft, W(e.field.hint), 1)) : P("", !0),
      t.value !== !0 ? (h(), q("div", kt, W(t.value), 1)) : P("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ O({
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
    const t = o.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, l) => " TODO json edit ? ";
  }
}), Dt = /* @__PURE__ */ O({
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
    const e = o, t = k([]), r = k([]), n = k(), l = e.formApi.form, i = l.formSettings, u = l.formStyle, d = i.rulesBehaviour === "lazy";
    function s(F, b) {
      if (F === "") {
        b(() => {
          r.value = [...t.value];
        });
        return;
      }
      b(() => {
        const R = F.toLowerCase();
        r.value = t.value.filter((f) => f.label.toLowerCase().includes(R));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function _() {
      return n.value ? n.value.validate() : !1;
    }
    function v() {
      return n.value ? n.value.hasError : !1;
    }
    function V() {
      n.value && n.value.resetValidation();
    }
    function A() {
      e.clear(), r.value = [];
    }
    return U(() => {
      p(), e.registerBehaviourCallbacks(_, v, V);
    }), (F, b) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (R) => e.modelValueOnUpdate(R)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(u).fieldOutlined,
      filled: a(u).fieldFilled,
      standout: a(u).fieldStandout,
      borderless: a(u).fieldBorderless,
      rounded: a(u).fieldRounded,
      square: a(u).fieldSquare,
      dense: a(u).fieldDense,
      hideBottomSpace: a(u).fieldHideBottomSpace,
      color: a(u).fieldColor,
      bgColor: a(u).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": d,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: A,
      onFilter: s
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function fe() {
  return 20;
}
function E(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const Re = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), d = k({
      limit: fe(),
      offset: 0
    }), s = k();
    function p(b, R) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (d.value = {
        limit: fe(),
        offset: 0
      }), R(() => {
        const y = e.formApi.form;
        f({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: b,
          context: y.context
        }).then((w) => {
          u.value = w.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function _() {
      X(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: b,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function v() {
      return s.value ? s.value.validate() : !1;
    }
    function V() {
      return s.value ? s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(v, V, A);
    }), (b, R) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      outlined: a(l).fieldOutlined,
      filled: a(l).fieldFilled,
      standout: a(l).fieldStandout,
      borderless: a(l).fieldBorderless,
      rounded: a(l).fieldRounded,
      square: a(l).fieldSquare,
      dense: a(l).fieldDense,
      hideBottomSpace: a(l).fieldHideBottomSpace,
      color: a(l).fieldColor,
      bgColor: a(l).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: F,
      onFilter: p
    }, {
      option: N((f) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ae = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), d = k({
      limit: fe(),
      offset: 0
    }), s = k();
    function p(b, R) {
      const f = e.formApi.getAssociationDataCallback();
      b === "" && (d.value = {
        limit: fe(),
        offset: 0
      }), R(() => {
        const y = e.formApi.form;
        f({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: b,
          context: y.context
        }).then((w) => {
          u.value = w.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function _() {
      X(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = b.map(
          (R, f) => ({
            label: e.field.associationData.label[f] ?? "???",
            value: R,
            data: e.field.associationData.data[f]
          })
        ));
      });
    }
    function v() {
      return s.value ? s.value.validate() : !1;
    }
    function V() {
      return s.value ? s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(v, V, A);
    }), (b, R) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(l).fieldOutlined,
      filled: a(l).fieldFilled,
      standout: a(l).fieldStandout,
      borderless: a(l).fieldBorderless,
      rounded: a(l).fieldRounded,
      square: a(l).fieldSquare,
      dense: a(l).fieldDense,
      hideBottomSpace: a(l).fieldHideBottomSpace,
      color: a(l).fieldColor,
      bgColor: a(l).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: F,
      onFilter: p
    }, {
      option: N((f) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Be = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function s() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, d, s);
    }), (p, _) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (v) => e.modelValueOnUpdate(v)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Rt = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function s() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, d, s);
    }), (p, _) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (v) => e.modelValueOnUpdate(v)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(n).fieldOutlined,
      filled: a(n).fieldFilled,
      standout: a(n).fieldStandout,
      borderless: a(n).fieldBorderless,
      rounded: a(n).fieldRounded,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      hideBottomSpace: a(n).fieldHideBottomSpace,
      color: a(n).fieldColor,
      bgColor: a(n).fieldBgColor,
      class: H(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class J {
  constructor(e, t, r, n, l, i, u, d, s) {
    S(this, "resourceName");
    S(this, "resourceId");
    S(this, "formMetadataAndData");
    S(this, "context");
    S(this, "formSettings");
    S(this, "formStyle");
    S(this, "actionComponent");
    S(this, "orphanErrorsComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayComponent");
    S(this, "dynamicComponentRecord");
    S(this, "formApi");
    S(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = d, this.formSettings = {
      ...l,
      ...$.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...$.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? $.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? $.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? $.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? $.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? $.getGlobalAssociationDisplayComponent(), this.registerEventCallback = s ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...$.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: $.getGlobalFormStyle(),
      events: {},
      actionComponent: z($.getGlobalActionComponent()),
      orphanErrorsComponent: z($.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: z($.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, l, i, u, d, s) {
    return new J(
      e,
      t,
      r,
      n,
      l,
      i,
      u,
      d,
      s
    ).generateFormDef();
  }
  generateFormDef() {
    const e = de.create(this.formApi);
    this.registerEventCallback(e);
    const t = de.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (l, i) => {
        const u = [];
        l.fields.forEach((v) => {
          const V = this.dynamicComponentRecord[`field-${v.field_name}-before`], A = J.getFieldComponentByFormFieldType(
            v.field_type
          ), F = this.dynamicComponentRecord[`field-${v.field_name}-after`], b = {
            associationDisplayComponent: z(
              this.associationDisplayComponent
            ),
            regularFieldType: J.getRegularFieldTypeByFieldType(
              v.field_type
            )
          }, R = {
            type: v.field_type,
            metadata: Object.freeze(v),
            label: v.label,
            hint: v.hint ?? void 0,
            prefix: v.prefix ?? void 0,
            suffix: v.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? v.readonly ?? void 0,
            cssClass: v.css_class ?? void 0,
            staticSelectOptions: v.static_select_options,
            associationData: v.field_association_data,
            rules: v.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: V ? z(V) : void 0,
            mainComponent: z(A),
            afterComponent: F ? z(F) : void 0,
            events: t.fields[v.field_name] ?? {},
            componentOptions: b
          };
          u.push(R);
        });
        const d = this.dynamicComponentRecord[`section-${l.name ?? i}-before`], s = this.sectionComponent, p = this.dynamicComponentRecord[`section-${l.name ?? i}-after`], _ = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? i.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: t.sections[l.name ?? i.toString()] ?? {},
          beforeComponent: d ? z(d) : void 0,
          mainComponent: z(s),
          afterComponent: p ? z(p) : void 0,
          fields: u
        };
        r.push(_);
      }
    ), {
      sections: r,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: t.form,
      actionComponent: z(this.actionComponent),
      orphanErrorsComponent: z(this.orphanErrorsComponent),
      wrapperResetComponent: z(this.wrapperResetComponent),
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
      string: Be,
      text: Be,
      number: Rt,
      date: vt,
      datetime: St,
      selectString: Dt,
      selectBelongsTo: Re,
      selectHasMany: Ae,
      selectHasAndBelongsToMany: Ae,
      selectHasOne: Re,
      checkbox: Vt,
      object: xt
    }[e];
  }
}
function At(o, e, t) {
  const r = t.form, n = (d, s, p) => d[s] ? p ? () => l(d[s]) : () => d[s] : d.compare_to ? () => {
    var _;
    return ((_ = t.getFieldByName(d.compare_to)) == null ? void 0 : _.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", l = (d) => String(
    x.formatDate(
      x.extractDate(d, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], u = [];
  switch (e) {
    case "date":
      i.push(Ee(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(Ee(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((d) => {
    const s = d;
    switch (s.type) {
      case "required":
        i.push(Bt());
        break;
      case "absence":
        i.push(Nt());
        break;
      case "acceptance":
        i.push(Ot());
        break;
      case "inclusion":
        i.push(qe(s.including));
        break;
      case "exclusion":
        i.push(Et(s.excluding));
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
        i.push(wt());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          $t(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          zt(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          It(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          Ut(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          Pt(n(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          Gt(
            n(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Lt());
        break;
      case "numberNumericOnly":
        i.push(Ht());
        break;
      case "numberEvenOnly":
        i.push(Yt());
        break;
      case "numberOddOnly":
        i.push(jt());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          Wt(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          Mt(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          Qt(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Jt(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Zt(
            n(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Xt(n(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          Kt(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          en(
            n(s, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          tn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          nn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          on(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          rn(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          an(
            n(s, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          ln(
            n(s, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((d) => {
    switch (d) {
      case "allowBlank":
        return qt(i);
      case "allowNull":
        return Tt(i);
    }
  }) : i;
}
function Bt() {
  return (o) => !!o || "Ce champ est requis";
}
function qe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Et(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${qe.toString()}`
  );
}
function Nt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Ot() {
  return (o) => !!o || "Doit être accepté";
}
function Tt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function qt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function wt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function $t(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function zt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ut(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Pt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Gt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Lt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Ht() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Yt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function jt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Wt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Mt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Qt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Jt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Xt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Zt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function en(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function tn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n <= l || `Inf. ou égal à ${r}`;
  };
}
function nn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n < l || `Inf. à ${r}`;
  };
}
function on(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n >= l || `Sup. ou égal à ${r}`;
  };
}
function rn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n > l || `Sup. à ${r}`;
  };
}
function an(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n === l || `Égale à ${n}`;
  };
}
function ln(o, e) {
  return (t) => {
    const r = o();
    return x.extractDate(String(t), e) !== x.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Ee(o) {
  return (e) => e == null || e === "" ? !0 : sn(e, o) || `Date invalide. Format : ${o}`;
}
function sn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = x.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : x.formatDate(t, e) === o;
}
const un = {
  computeServerRules: At
}, cn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, dn = ["index"], fn = /* @__PURE__ */ O({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, l = () => {
    };
    const i = V(), u = k(), d = k([]);
    function s() {
      u.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), u.value = p(u.value), E(t.field.events.onReset), X(() => {
        ae();
      });
    }
    function p(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function _(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function v() {
      switch (t.field.type) {
        case "string":
          u.value = "";
          break;
        case "checkbox":
          u.value = !1;
          break;
        case "date":
          u.value = null;
          break;
        case "datetime":
          u.value = null;
          break;
        case "number":
          u.value = null;
          break;
        case "selectString":
          u.value = void 0;
          break;
        case "text":
          u.value = "";
          break;
        case "object":
          u.value = {};
          break;
        case "selectBelongsTo":
          u.value = void 0;
          break;
        case "selectHasMany":
          u.value = void 0;
          break;
      }
      E(t.field.events.onClear);
    }
    function V() {
      return un.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(m) {
      u.value = m;
    }
    function F() {
      return a(u);
    }
    function b() {
      return _(a(u));
    }
    function R(m) {
      d.value = m;
    }
    function f() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0);
    }
    function y() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1);
    }
    function w(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function Z(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.hint = m);
    }
    function ee(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.cssClass = m);
    }
    function te(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = m);
    }
    function ne(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = m);
    }
    function ge(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = m);
    }
    function oe() {
      const m = r();
      return E(t.field.events.onValidated), m;
    }
    function re() {
      return n();
    }
    function ae() {
      return l();
    }
    function he(m, C, K) {
      r = m, n = C, l = K;
    }
    const ye = {
      reset: s,
      clear: v,
      validate: oe,
      isValid: re,
      hide: f,
      unhide: y,
      resetValidation: ae,
      getValueDeserialized: b,
      getValueSerialized: F,
      setupBackendErrors: R,
      setReadonlyState: w,
      setHint: Z,
      setCssClass: ee,
      setSuffix: te,
      setPrefix: ne,
      setLabel: ge,
      setValue: A,
      field: t.field
    };
    return e(ye), j(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        E(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid ? re() : null,
      (m) => {
        m && E(t.field.events.onIsValid);
      }
    ), U(() => {
      var C;
      s();
      const m = (C = Oe()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => Se((h(), q("div", null, [
      t.field.beforeComponent ? (h(), D(G(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      (h(), D(G(t.field.mainComponent), {
        modelValue: u.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: s,
        clear: v,
        getValueDeserialized: b,
        getValueSerialized: F,
        validate: oe,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), D(G(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      d.value.length > 0 ? (h(), q("div", cn, [
        (h(!0), q(se, null, ue(d.value, (K, ve) => (h(), q("div", {
          index: ve,
          class: "flex column"
        }, W(K), 9, dn))), 256))
      ])) : P("", !0)
    ], 512)), [
      [_e, t.field.hidden !== !0]
    ]);
  }
}), mn = { class: "flex column" }, pn = /* @__PURE__ */ O({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: i,
      clear: u,
      validate: p,
      isValid: _,
      hide: d,
      unhide: s,
      resetValidation: v,
      getFields: V,
      setReadonlyState: A,
      setCssClass: F,
      setIcon: b,
      setLabel: R,
      section: t.section
    };
    function l() {
      t.section.fields.forEach((f) => {
        const y = f.metadata.field_name, w = t.formApi.getFieldByName(y);
        w && r.set(y, w);
      });
    }
    function i() {
      r.forEach((f) => {
        f.reset();
      }), E(t.section.events.onReset);
    }
    function u() {
      r.forEach((f) => {
        f.clear();
      }), E(t.section.events.onClear);
    }
    function d() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((y) => {
        y.hide();
      }), f.hidden = !0, E(t.section.events.onHide));
    }
    function s() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((y) => {
        y.unhide();
      }), f.hidden = !1, E(t.section.events.onUnhide));
    }
    function p() {
      let f = !0;
      return r.forEach((y) => {
        if (!y.validate()) {
          f = !1;
          return;
        }
      }), E(t.section.events.onValidated), f;
    }
    function _() {
      let f = !0;
      return r.forEach((y) => {
        if (!y.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function v() {
      r.forEach((f) => {
        f.resetValidation();
      });
    }
    function V() {
      return r;
    }
    function A(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.readonly = f);
    }
    function F(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.cssClass = f);
    }
    function b(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.icon = f);
    }
    function R(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.label = f);
    }
    return e(n), j(
      () => t.section.events.onIsValid ? _() : null,
      (f) => {
        f && E(t.section.events.onIsValid);
      }
    ), U(() => {
      var y;
      const f = (y = Oe()) == null ? void 0 : y.exposed;
      f && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        f
      ), X(() => {
        l();
      });
    }), (f, y) => Se((h(), q("div", mn, [
      t.section.beforeComponent ? (h(), D(G(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0),
      (h(), D(G(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: N(() => [
          Ne(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), D(G(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0)
    ], 512)), [
      [_e, t.section.hidden !== !0]
    ]);
  }
}), gn = { class: "flex column" }, bn = /* @__PURE__ */ O({
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
    let r = null, n = "", l = 0, i = 0;
    const u = Xe(), d = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), p = k(J.getEmptyFormBeforeInit()), _ = k(!1), v = k(!1), V = k(!1), A = k(!1), F = k("create"), b = k({});
    async function R() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), p.value = J.getForm(
        t.resourceName,
        t.resourceId,
        y(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        M,
        t.eventManager
      ), l = p.value.sections.length, i = p.value.sections.map((c) => c.fields).flat().length, t.resourceId && (F.value = "edit");
    }
    async function f() {
      var B, I, ie;
      if (!Z())
        return;
      A.value = !0, oe();
      const c = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: t.context
      });
      if (g.success)
        b.value = {}, F.value === "create" && (F.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), E((I = p.value) == null ? void 0 : I.events.onSubmitUnsuccess);
      else {
        b.value = {};
        const le = [];
        [...d].forEach((L) => {
          const De = g.errors[L[0]];
          De && (L[1].setupBackendErrors(De), le.push(L[0]));
        }), Object.entries(g.errors).forEach((L) => {
          le.includes(L[0]) || (b.value[L[0]] = L[1]);
        }), E((B = p.value) == null ? void 0 : B.events.onSubmitSuccess);
      }
      E((ie = p.value) == null ? void 0 : ie.events.onSubmit), A.value = !1;
    }
    function y() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in u) {
        const B = u[g];
        if (B) {
          const I = O({
            inheritAttrs: !1,
            setup(ie, { attrs: le, slots: L }) {
              return () => B({
                ...ie,
                ...le,
                slots: L
              });
            }
          });
          switch (g) {
            case "sections":
              c.sectionComponent = I;
              break;
            case "actions":
              c.actionComponent = I;
              break;
            case "orphan-errors":
              c.orphanErrorsComponent = I;
              break;
            case "association-display":
              c.associationDisplayComponent = I;
              break;
            default:
              c.dynamicComponentRecord[g] = I;
              break;
          }
        }
      }
      return c;
    }
    function w() {
      const c = {};
      return [...d].forEach((g) => {
        c[g[0]] = g[1].getValueDeserialized();
      }), c;
    }
    function Z() {
      var g;
      let c = !0;
      return d.forEach((B) => {
        if (!B.validate()) {
          c = !1;
          return;
        }
      }), E((g = p.value) == null ? void 0 : g.events.onValidated), c;
    }
    function ee() {
      let c = !0;
      return d.forEach((g) => {
        if (!g.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function te() {
      var c;
      d.forEach((g) => {
        g.reset();
      }), E((c = p.value) == null ? void 0 : c.events.onReset);
    }
    function ne() {
      var c;
      d.forEach((g) => {
        g.clear();
      }), E((c = p.value) == null ? void 0 : c.events.onClear);
    }
    function ge() {
      d.forEach((c) => {
        c.resetValidation();
      });
    }
    function oe() {
      d.forEach((c) => {
        c.setupBackendErrors([]);
      });
    }
    function re(c) {
      if (r)
        return r.resource_data[c];
    }
    function ae(c) {
      return s.get(c);
    }
    function he(c) {
      return [...s.values()].at(c);
    }
    function ye() {
      return s;
    }
    function m(c) {
      return d.get(c);
    }
    function C() {
      return d;
    }
    function K() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ve() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function we() {
      return a(F);
    }
    function $e() {
      return n !== JSON.stringify(w());
    }
    function ze(c) {
      p.value && (p.value.context = c);
    }
    function Ie(c) {
      p.value && (p.value.cssClass = c);
    }
    function Ue(c) {
      p.value && (p.value.readonly = c);
    }
    function Pe() {
      return V.value;
    }
    function Ge() {
      return p;
    }
    function Le(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.find((B) => B.name === c);
    }
    function He(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.map((B) => B.fields).flat().find((B) => B.metadata.field_name === c);
    }
    function ke(c, g) {
      s.set(c, g), l === s.size && (_.value = !0);
    }
    function Ve(c, g) {
      d.set(c, g), i === d.size && (v.value = !0);
    }
    const xe = {
      getFormRef: Ge,
      getSectionRef: Le,
      getFieldRef: He,
      registerSectionWrapperRef: ke,
      registerFieldWrapperRef: Ve
    }, Ye = new Proxy({}, {
      get(c, g) {
        var B;
        return (B = p.value) == null ? void 0 : B[g];
      }
    }), M = {
      getMode: we,
      getSectionByName: ae,
      getSectionByIndex: he,
      getSections: ye,
      getFieldByName: m,
      getFields: C,
      validate: Z,
      isFormValid: ee,
      reset: te,
      clear: ne,
      resetValidation: ge,
      submit: f,
      valuesHasChanged: $e,
      getInitialValueByFieldName: re,
      getAssociationDataCallback: K,
      setContext: ze,
      setCssClass: Ie,
      setReadonlyState: Ue,
      isReady: Pe,
      form: Ye
    };
    return e(M), j(
      () => _.value && v.value,
      (c) => {
        var g;
        c && !V.value && (E((g = p.value) == null ? void 0 : g.events.onReady), V.value = !0);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onIsValid ? ee() : null;
      },
      () => {
        var c;
        E((c = p.value) == null ? void 0 : c.events.onIsValid);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onUpdate ? w() : null;
      },
      () => {
        var c;
        E((c = p.value) == null ? void 0 : c.events.onUpdate);
      }
    ), U(async () => {
      ve(), await R(), X(() => {
        n = JSON.stringify(w());
      });
    }), (c, g) => Se((h(), q("div", gn, [
      Y("div", {
        class: H(p.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(se, null, ue(p.value.sections, (B) => (h(), D(pn, {
          key: B.name,
          section: B,
          context: t.context,
          formApi: M,
          privateFormApi: xe,
          registerRef: ke
        }, {
          default: N(() => [
            (h(!0), q(se, null, ue(B.fields, (I) => (h(), D(fn, {
              key: I.metadata.field_name,
              field: I,
              context: t.context,
              formApi: M,
              privateFormApi: xe,
              registerRef: Ve
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), D(G(p.value.orphanErrorsComponent), {
        orphanErrors: b.value,
        formApi: M
      }, null, 8, ["orphanErrors"])),
      (h(), D(G(p.value.actionComponent), {
        isLoadingSubmit: A.value,
        submit: f,
        clear: p.value.clearable ? ne : void 0,
        reset: p.value.resetable ? te : void 0,
        formApi: M
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ], 512)), [
      [_e, V.value]
    ]);
  }
});
export {
  de as DynamicLogicBuilder,
  $ as Submit64,
  bn as Submit64Form
};
