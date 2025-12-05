var pt = Object.defineProperty;
var gt = (o, e, t) => e in o ? pt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var D = (o, e, t) => gt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as b, createElementVNode as ae, createVNode as B, createBlock as w, createCommentVNode as W, unref as a, mergeProps as Re, toDisplayString as Z, renderSlot as Ge, resolveComponent as vt, normalizeProps as ht, guardReactiveProps as yt, withCtx as x, createTextVNode as ke, Fragment as be, renderList as Ce, ref as V, onMounted as j, normalizeClass as J, watch as P, nextTick as ge, resolveDynamicComponent as X, markRaw as Y, getCurrentInstance as He, withDirectives as Be, vShow as Ee, computed as ue, useSlots as bt } from "vue";
import { QBtn as ce, QIcon as pe, QItem as Ve, QItemSection as xe, QItemLabel as De, QInput as ve, QPopupProxy as _e, QDate as Me, QTime as Ct, QCheckbox as _t, QSelect as we, QColor as St, useQuasar as Ft, QEditor as kt, date as O } from "quasar";
const Vt = { class: "flex column" }, xt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Dt = /* @__PURE__ */ z({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
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
    return (r, n) => (b(), L("div", Vt, [
      ae("div", xt, [
        B(a(ce), Re(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (b(), w(a(ce), Re({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : W("", !0),
        e.formApi.clear ? (b(), w(a(ce), Re({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : W("", !0)
      ])
    ]));
  }
}), At = { class: "flex row items-center" }, Rt = { class: "text-body1 text-weight-medium" }, Nt = { class: "flex column q-gutter-md" }, Bt = /* @__PURE__ */ z({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (b(), L("div", null, [
      ae("div", At, [
        e.sectionApi.section.icon ? (b(), w(a(pe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : W("", !0),
        ae("div", Rt, Z(e.sectionApi.section.label), 1)
      ]),
      ae("div", Nt, [
        Ge(t.$slots, "default")
      ])
    ]));
  }
}), Et = /* @__PURE__ */ z({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = vt("q-icon");
      return b(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), wt = /* @__PURE__ */ z({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (b(), w(a(Ve), ht(yt(e.itemProps)), {
      default: x(() => [
        B(a(xe), null, {
          default: x(() => [
            B(a(De), null, {
              default: x(() => [
                ke(Z(e.entry.label), 1)
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
}), Ot = { class: "flex column" }, Tt = /* @__PURE__ */ z({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (b(), L("div", Ot, [
      (b(!0), L(be, null, Ce(e.orphanErrors, (n, s) => (b(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, Z(s) + " : " + Z(n.join(",")), 1))), 128))
    ]));
  }
}), Fe = class Fe {
  constructor() {
    D(this, "_formSettings");
    D(this, "_formStyle");
    D(this, "_actionComponent");
    D(this, "_orphanErrorsComponent");
    D(this, "_sectionComponent");
    D(this, "_wrapperResetComponent");
    D(this, "_associationDisplayComponent");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0,
      associationEmptyMessage: "Empty",
      requiredFieldsHasAsterisk: !0
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
      fieldBgColor: ""
    }, this._actionComponent = Dt, this._orphanErrorsComponent = Tt, this._sectionComponent = Bt, this._wrapperResetComponent = Et, this._associationDisplayComponent = wt;
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
D(Fe, "_instance", new Fe());
let M = Fe;
class Se {
  constructor(e) {
    D(this, "formApi");
    D(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new qt(r, n, this.formApi);
    return this.events.push(s), new It(s);
  }
  static create(e) {
    return new Se(e);
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
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(r.getActionCallback());
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
class qt {
  constructor(e, t, r) {
    D(this, "type");
    D(this, "data");
    D(this, "formApi");
    D(this, "action", () => {
    });
    D(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
      case "Field is invalid":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onIsInvalid"
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
          key: "onIsValid"
        };
      case "Section is invalid":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onIsInvalid"
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
      case "Section is updated":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onUpdate"
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
      case "Form is invalid":
        return {
          target: "form",
          key: "onIsInvalid"
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
class It {
  constructor(e) {
    D(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const zt = { class: "row items-center justify-end" }, $t = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = V(), u = V();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function F() {
      return u.value ? !u.value.hasError : !1;
    }
    function C() {
      u.value && u.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(c, F, C);
    }), (v, f) => (b(), w(a(ve), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[1] || (f[1] = (q) => e.modelValueOnUpdate(q)),
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
      class: J(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: x(() => [
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            B(a(_e), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                B(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[0] || (f[0] = (q) => e.modelValueOnUpdate(q)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: x(() => [
                    ae("div", zt, [
                      B(a(ce), {
                        onClick: i,
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
}), Ut = { class: "row items-center justify-end" }, Pt = { class: "row items-center justify-end" }, Lt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = V(), u = V(), i = V();
    function c() {
      l.value && l.value.hide();
    }
    function F() {
      u.value && u.value.hide();
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function v() {
      return i.value ? !i.value.hasError : !1;
    }
    function f() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(C, v, f);
    }), (q, E) => (b(), w(a(ve), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[2] || (E[2] = (N) => e.modelValueOnUpdate(N)),
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
      class: J(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: x(() => [
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            B(a(_e), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                B(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[0] || (E[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: x(() => [
                    ae("div", Ut, [
                      B(a(ce), {
                        onClick: c,
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
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            B(a(_e), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                B(a(Ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[1] || (E[1] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: x(() => [
                    ae("div", Pt, [
                      B(a(ce), {
                        onClick: F,
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
}), Gt = { class: "flex column" }, Ht = {
  key: 0,
  class: "q-field__bottom"
}, Mt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Yt = /* @__PURE__ */ z({
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
    const e = o, t = V(!0), n = e.formApi.form.formStyle;
    function s() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return P(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), j(() => {
      e.registerBehaviourCallbacks(s, l, u);
    }), (i, c) => (b(), L("div", Gt, [
      B(a(_t), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (F) => e.modelValueOnUpdate(F)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: J([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (b(), L("div", Ht, Z(e.field.hint), 1)) : W("", !0),
      t.value !== !0 ? (b(), L("div", Mt, Z(t.value), 1)) : W("", !0)
    ]));
  }
}), jt = /* @__PURE__ */ z({
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
    const e = o, t = V([]), r = V([]), n = V(), s = e.formApi.form, l = s.formSettings, u = s.formStyle, i = l.rulesBehaviour === "lazy";
    function c(E, N) {
      if (E === "") {
        N(() => {
          r.value = [...t.value];
        });
        return;
      }
      N(() => {
        const T = E.toLowerCase();
        r.value = t.value.filter((I) => I.label.toLowerCase().includes(T));
      });
    }
    function F() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return n.value ? n.value.validate() : !1;
    }
    function v() {
      return n.value ? !n.value.hasError : !1;
    }
    function f() {
      n.value && n.value.resetValidation();
    }
    function q() {
      e.clear(), r.value = [];
    }
    return j(() => {
      F(), e.registerBehaviourCallbacks(C, v, f);
    }), (E, N) => (b(), w(a(we), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (T) => e.modelValueOnUpdate(T)),
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
      class: J(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: q,
      onFilter: c
    }, {
      "no-option": x(() => [
        B(a(Ve), {
          dense: a(u).fieldDense
        }, {
          default: x(() => [
            B(a(xe), null, {
              default: x(() => [
                B(a(De), null, {
                  default: x(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), ze = "__init", $e = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = V([]), i = V(
      C()
    ), c = V(), F = V(ze);
    function C() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function v(S, A) {
      if (S === F.value) {
        A(() => {
        });
        return;
      }
      const h = e.formApi.getAssociationDataCallback();
      i.value = C(), F.value = S;
      const U = e.formApi.form;
      i.value.isLoading = !0, h({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: S,
        context: U.context
      }).then(($) => {
        A(() => {
          u.value = $.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = C();
      });
    }
    function f() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (u.value = [
        {
          label: e.field.associationData.label[0] ?? "???",
          value: S,
          data: e.field.associationData.data[0]
        }
      ]);
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function E() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function T() {
      e.clear(), i.value = C(), u.value = [], F.value = ze;
    }
    function I(S) {
      const A = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && S.to === A && A !== -1) {
        const h = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, U({
          resourceName: h.resourceName,
          resourceId: h.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: F.value,
          context: h.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return j(() => {
      ge(() => {
        f();
      }), e.registerBehaviourCallbacks(
        q,
        E,
        N,
        f
      );
    }), (S, A) => (b(), w(a(we), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (h) => e.modelValueOnUpdate(h)),
      label: e.field.label,
      outlined: a(s).fieldOutlined,
      filled: a(s).fieldFilled,
      standout: a(s).fieldStandout,
      borderless: a(s).fieldBorderless,
      rounded: a(s).fieldRounded,
      square: a(s).fieldSquare,
      dense: a(s).fieldDense,
      hideBottomSpace: a(s).fieldHideBottomSpace,
      color: a(s).fieldColor,
      bgColor: a(s).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: T,
      onFilter: v,
      onVirtualScroll: I
    }, {
      "no-option": x(() => [
        B(a(Ve), {
          dense: a(s).fieldDense
        }, {
          default: x(() => [
            B(a(xe), null, {
              default: x(() => [
                B(a(De), null, {
                  default: x(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      option: x((h) => [
        (b(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ue = "__init", Pe = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = V([]), i = V(
      C()
    ), c = V(), F = V(Ue);
    function C() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function v(S, A) {
      if (S === F.value) {
        A(() => {
        });
        return;
      }
      const h = e.formApi.getAssociationDataCallback();
      i.value = C(), F.value = S;
      const U = e.formApi.form;
      i.value.isLoading = !0, h({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: S,
        context: U.context
      }).then(($) => {
        A(() => {
          u.value = $.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = C();
      });
    }
    function f() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (u.value = S.map((A, h) => ({
        label: e.field.associationData.label[h] ?? "???",
        value: A,
        data: e.field.associationData.data[h]
      })));
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function E() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function T() {
      e.clear(), i.value = C(), u.value = [], F.value = Ue;
    }
    function I(S) {
      const A = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && S.to === A && A !== -1) {
        const h = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, U({
          resourceName: h.resourceName,
          resourceId: h.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: F.value,
          context: h.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return j(() => {
      ge(() => {
        f();
      }), e.registerBehaviourCallbacks(
        q,
        E,
        N,
        f
      );
    }), (S, A) => (b(), w(a(we), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (h) => e.modelValueOnUpdate(h)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(s).fieldOutlined,
      filled: a(s).fieldFilled,
      standout: a(s).fieldStandout,
      borderless: a(s).fieldBorderless,
      rounded: a(s).fieldRounded,
      square: a(s).fieldSquare,
      dense: a(s).fieldDense,
      hideBottomSpace: a(s).fieldHideBottomSpace,
      color: a(s).fieldColor,
      bgColor: a(s).fieldBgColor,
      class: J(e.field.cssClass),
      "lazy-rules": l,
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
      onClear: T,
      onFilter: v,
      onVirtualScroll: I
    }, {
      "no-option": x(() => [
        B(a(Ve), {
          dense: a(s).fieldDense
        }, {
          default: x(() => [
            B(a(xe), null, {
              default: x(() => [
                B(a(De), null, {
                  default: x(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dense"])
      ]),
      option: x((h) => [
        (b(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: h.opt,
          itemProps: h.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ne = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = V();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (F, C) => (b(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: J(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Qt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = V();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (F, C) => (b(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: J(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), Wt = /* @__PURE__ */ z({
  __name: "ColorField",
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = V();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (F, C) => (b(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[1] || (C[1] = (v) => e.modelValueOnUpdate(v)),
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
      class: J(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: x(() => [
        B(a(pe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            B(a(_e), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                B(a(St), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": C[0] || (C[0] = (v) => e.modelValueOnUpdate(v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Jt = /* @__PURE__ */ z({
  __name: "WysiwygField",
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
    const e = o, t = Ft(), n = e.formApi.form.formStyle, s = [
      [
        {
          label: t.lang.editor.align,
          icon: t.iconSet.editor.align,
          fixedLabel: !0,
          list: "only-icons",
          options: ["left", "center", "right", "justify"]
        }
      ],
      ["bold", "italic", "strike", "underline", "subscript", "superscript"],
      ["token", "hr", "link", "custom_btn"],
      ["print", "fullscreen"],
      [
        {
          label: t.lang.editor.formatting,
          icon: t.iconSet.editor.formatting,
          list: "no-icons",
          options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
        },
        {
          label: t.lang.editor.fontSize,
          icon: t.iconSet.editor.fontSize,
          fixedLabel: !0,
          fixedIcon: !0,
          list: "no-icons",
          options: [
            "size-1",
            "size-2",
            "size-3",
            "size-4",
            "size-5",
            "size-6",
            "size-7"
          ]
        },
        {
          label: t.lang.editor.defaultFont,
          icon: t.iconSet.editor.font,
          fixedIcon: !0,
          list: "no-icons",
          options: [
            "default_font",
            "arial",
            "arial_black",
            "comic_sans",
            "courier_new",
            "impact",
            "lucida_grande",
            "times_new_roman",
            "verdana"
          ]
        },
        "removeFormat"
      ],
      ["quote", "unordered", "ordered", "outdent", "indent"],
      ["undo", "redo"],
      ["viewsource"]
    ], l = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, u = V();
    function i() {
      return !!u.value;
    }
    function c() {
      return !!u.value;
    }
    function F() {
    }
    return j(() => {
      e.registerBehaviourCallbacks(i, c, F);
    }), (C, v) => e.modelValue ? (b(), w(a(kt), {
      key: 0,
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (f) => e.modelValueOnUpdate(f)),
      toolbar: s,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: J(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : W("", !0);
  }
}), Kt = /* @__PURE__ */ z({
  __name: "JsonField",
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
    return t.formStyle, r.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
});
class ne {
  constructor(e, t, r, n, s, l, u, i, c) {
    D(this, "resourceName");
    D(this, "resourceId");
    D(this, "formMetadataAndData");
    D(this, "context");
    D(this, "formSettings");
    D(this, "formStyle");
    D(this, "actionComponent");
    D(this, "orphanErrorsComponent");
    D(this, "sectionComponent");
    D(this, "wrapperResetComponent");
    D(this, "associationDisplayComponent");
    D(this, "dynamicComponentRecord");
    D(this, "formApi");
    D(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...s,
      ...M.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...M.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? M.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? M.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? M.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? M.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? M.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...M.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: M.getGlobalFormStyle(),
      events: {},
      actionComponent: Y(M.getGlobalActionComponent()),
      orphanErrorsComponent: Y(M.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: Y(M.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, s, l, u, i, c) {
    return new ne(
      e,
      t,
      r,
      n,
      s,
      l,
      u,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Se.create(this.formApi);
    this.registerEventCallback(e);
    const t = Se.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((v) => {
          const f = this.dynamicComponentRecord[`field-${v.field_name}-before`], q = ne.getFieldComponentByFormFieldType(v), E = this.dynamicComponentRecord[`field-${v.field_name}-after`], N = {
            associationDisplayComponent: Y(
              this.associationDisplayComponent
            ),
            regularFieldType: ne.getRegularFieldTypeByFieldType(
              v.field_type
            )
          };
          let T = v.label;
          this.formSettings.requiredFieldsHasAsterisk && v.rules.find((S) => S.type === "required") && (T = T.concat("*"));
          const I = {
            type: v.field_type,
            extraType: v.field_extra_type,
            metadata: Object.freeze(v),
            label: T,
            hint: v.hint ?? void 0,
            prefix: v.prefix ?? void 0,
            suffix: v.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? v.readonly ?? void 0,
            cssClass: v.css_class ?? void 0,
            staticSelectOptions: v.static_select_options,
            associationData: v.field_association_data,
            rules: v.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: f ? Y(f) : void 0,
            mainComponent: Y(q),
            afterComponent: E ? Y(E) : void 0,
            events: t.fields[v.field_name] ?? {},
            componentOptions: N
          };
          u.push(I);
        });
        const i = this.dynamicComponentRecord[`section-${s.name ?? l}-before`], c = this.sectionComponent, F = this.dynamicComponentRecord[`section-${s.name ?? l}-after`], C = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? l.toString()] ?? {},
          beforeComponent: i ? Y(i) : void 0,
          mainComponent: Y(c),
          afterComponent: F ? Y(F) : void 0,
          fields: u
        };
        r.push(C);
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
      allowBulk: this.formMetadataAndData.form.allow_bulk ?? !1,
      events: t.form,
      actionComponent: Y(this.actionComponent),
      orphanErrorsComponent: Y(this.orphanErrorsComponent),
      wrapperResetComponent: Y(this.wrapperResetComponent),
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
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return Wt;
          case "wysiwyg":
            return Jt;
          default:
            return Ne;
        }
      case "text":
        return Ne;
      case "number":
        return Qt;
      case "date":
        return $t;
      case "datetime":
        return Lt;
      case "select":
        return jt;
      case "selectBelongsTo":
        return $e;
      case "selectHasMany":
        return Pe;
      case "selectHasAndBelongsToMany":
        return Pe;
      case "selectHasOne":
        return $e;
      case "checkbox":
        return Yt;
      case "object":
        return Kt;
      default:
        return Ne;
    }
  }
}
function R(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Xt(o, e, t) {
  const r = t.form, n = (i, c, F) => i[c] ? F ? () => s(i[c]) : () => i[c] : i.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(i.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (i) => String(
    O.formatDate(
      O.extractDate(i, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], u = [];
  switch (e) {
    case "date":
      l.push(Le(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Le(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(Zt());
        break;
      case "absence":
        l.push(tn());
        break;
      case "acceptance":
        l.push(nn());
        break;
      case "inclusion":
        l.push(Ye(c.including));
        break;
      case "exclusion":
        l.push(en(c.excluding));
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
        l.push(rn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          ln(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          sn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          un(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          cn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          dn(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          fn(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(mn());
        break;
      case "numberNumericOnly":
        l.push(pn());
        break;
      case "numberEvenOnly":
        l.push(gn());
        break;
      case "numberOddOnly":
        l.push(vn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          hn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          yn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          bn(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Cn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Fn(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Sn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          _n(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          kn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Vn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          xn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Dn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          An(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Rn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Nn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return on(l);
      case "allowNull":
        return an(l);
    }
  }) : l;
}
function Zt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ye(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function en(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ye.toString()}`
  );
}
function tn() {
  return (o) => !o || "Ce champ doit être vide";
}
function nn() {
  return (o) => !!o || "Doit être accepté";
}
function an(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function on(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function rn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function ln(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function sn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function un(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function cn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function dn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function fn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function mn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function pn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function gn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function vn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function hn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function yn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function bn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Cn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function _n(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Sn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Fn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function kn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Vn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function xn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function Dn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function An(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function Rn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), s = O.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Nn(o, e) {
  return (t) => {
    const r = o();
    return O.extractDate(String(t), e) !== O.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Le(o) {
  return (e) => e == null || e === "" ? !0 : Bn(e, o) || `Date invalide. Format : ${o}`;
}
function Bn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = O.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : O.formatDate(t, e) === o;
}
const En = {
  computeServerRules: Xt
}, wn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, On = ["index"], Tn = /* @__PURE__ */ z({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, s = () => {
    }, l = () => {
    };
    const u = E(), i = V(), c = V([]);
    function F() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = v(i.value);
    }
    function C() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = v(i.value), R(t.field.events.onReset), l(), ge(() => {
        le();
      });
    }
    function v(m) {
      const k = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), k.formSettings.backendDateFormat),
            k.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(
              String(m),
              k.formSettings.backendDatetimeFormat
            ),
            k.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function f(m) {
      const k = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), k.formSettings.dateFormat),
            k.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), k.formSettings.datetimeFormat),
            k.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function q() {
      switch (t.field.type) {
        case "string":
          i.value = "";
          break;
        case "checkbox":
          i.value = !1;
          break;
        case "date":
          i.value = null;
          break;
        case "datetime":
          i.value = null;
          break;
        case "number":
          i.value = null;
          break;
        case "select":
          i.value = void 0;
          break;
        case "text":
          i.value = "";
          break;
        case "object":
          i.value = {};
          break;
        case "selectBelongsTo":
          i.value = void 0;
          break;
        case "selectHasMany":
          i.value = void 0;
          break;
      }
      R(t.field.events.onClear);
    }
    function E() {
      return En.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function N(m) {
      i.value = m;
    }
    function T() {
      return a(i);
    }
    function I() {
      return f(a(i));
    }
    function S(m) {
      c.value = m;
    }
    function A() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, R(t.field.events.onHide));
    }
    function h() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, R(t.field.events.onUnhide));
    }
    function U(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.readonly = m);
    }
    function $(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.hint = m);
    }
    function de(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.cssClass = m);
    }
    function oe(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.suffix = m);
    }
    function K(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.prefix = m);
    }
    function p(m) {
      const k = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      k && (k.label = m);
    }
    function y() {
      const m = r();
      return R(t.field.events.onValidated), m;
    }
    function G() {
      return n();
    }
    function he() {
      return !G();
    }
    function le() {
      return s();
    }
    function Ae(m, k, me, se) {
      r = m, n = k, s = me, se && (l = se);
    }
    const fe = {
      softReset: F,
      reset: C,
      clear: q,
      validate: y,
      isValid: G,
      isInvalid: he,
      hide: A,
      unhide: h,
      resetValidation: le,
      getValueDeserialized: I,
      getValueSerialized: T,
      setupBackendErrors: S,
      setReadonlyState: U,
      setHint: $,
      setCssClass: de,
      setSuffix: oe,
      setPrefix: K,
      setLabel: p,
      setValue: N,
      field: t.field
    };
    return e(fe), P(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), P(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        R(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var k;
      F();
      const m = (k = He()) == null ? void 0 : k.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, k) => Be((b(), L("div", null, [
      t.field.beforeComponent ? (b(), w(X(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : W("", !0),
      (b(), w(X(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(u),
        reset: C,
        clear: q,
        getValueDeserialized: I,
        getValueSerialized: T,
        validate: y,
        modelValueOnUpdate: N,
        registerBehaviourCallbacks: Ae
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (b(), w(X(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : W("", !0),
      c.value.length > 0 ? (b(), L("div", wn, [
        (b(!0), L(be, null, Ce(c.value, (me, se) => (b(), L("div", {
          index: se,
          class: "flex column"
        }, Z(me), 9, On))), 256))
      ])) : W("", !0)
    ], 512)), [
      [Ee, t.field.hidden !== !0]
    ]);
  }
}), qn = { class: "flex column" }, In = /* @__PURE__ */ z({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, s = null;
    const l = {
      softReset: c,
      reset: F,
      clear: C,
      validate: q,
      isValid: E,
      isInvalid: N,
      hide: v,
      unhide: f,
      resetValidation: T,
      getFields: I,
      setReadonlyState: S,
      setCssClass: A,
      setIcon: h,
      setLabel: U,
      section: t.section
    }, u = V(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const y = p.metadata.field_name, G = t.formApi.getFieldByName(y);
        G && u.value.set(y, G);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.softReset();
      });
    }
    function F() {
      u.value.forEach((p) => {
        p.reset();
      }), R(t.section.events.onReset);
    }
    function C() {
      u.value.forEach((p) => {
        p.clear();
      }), R(t.section.events.onClear);
    }
    function v() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((y) => {
        y.hide();
      }), p.hidden = !0, R(t.section.events.onHide));
    }
    function f() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((y) => {
        y.unhide();
      }), p.hidden = !1, R(t.section.events.onUnhide));
    }
    function q() {
      let p = !0;
      return u.value.forEach((y) => {
        if (!y.validate()) {
          p = !1;
          return;
        }
      }), R(t.section.events.onValidated), p;
    }
    function E() {
      let p = !0;
      return u.value.forEach((y) => {
        if (!y.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function N() {
      return !E();
    }
    function T() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function I() {
      return u.value;
    }
    function S(p) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.readonly = p);
    }
    function A(p) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.cssClass = p);
    }
    function h(p) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.icon = p);
    }
    function U(p) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.label = p);
    }
    function $() {
      const p = {};
      for (const [y, G] of u.value)
        p[y] = G.getValueSerialized();
      return p;
    }
    e(l);
    const de = ue(() => E()), oe = ue(() => N()), K = ue(() => $());
    return P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = P(de, (y) => {
          y && R(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = P(oe, (y) => {
          var G;
          y && R((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        s == null || s(), s = null, p && (s = P(
          K,
          () => {
            var y;
            R((y = t.section) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var y;
      const p = (y = He()) == null ? void 0 : y.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ge(() => {
        i();
      });
    }), (p, y) => Be((b(), L("div", qn, [
      t.section.beforeComponent ? (b(), w(X(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : W("", !0),
      (b(), w(X(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: x(() => [
          Ge(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (b(), w(X(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : W("", !0)
    ], 512)), [
      [Ee, t.section.hidden !== !0]
    ]);
  }
}), zn = { class: "flex column" }, Ln = /* @__PURE__ */ z({
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
    let r = null, n = "", s = 0, l = 0, u = null, i = null, c = null, F = null, C = null;
    const v = bt(), f = V(ne.getEmptyFormBeforeInit()), q = V(!1), E = V(!1), N = V(!1), T = V(!1), I = V("create"), S = V({}), A = V(/* @__PURE__ */ new Map()), h = V(/* @__PURE__ */ new Map());
    async function U() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = ne.getForm(
        t.resourceName,
        t.resourceId,
        oe(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ee,
        t.eventManager
      ), s = f.value.sections.length, l = f.value.sections.map((d) => d.fields).flat().length, t.resourceId && (I.value = "edit");
    }
    async function $() {
      var _, H, re;
      if (!y())
        return;
      R((_ = f.value) == null ? void 0 : _.events.onSubmit), T.value = !0, k();
      const d = K(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (F = g.resource_data, g.success)
        S.value = {}, I.value === "create" && (I.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(K()), f.value = ne.getForm(
          t.resourceName,
          t.resourceId,
          oe(),
          {
            form: g.form,
            resource_data: g.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), le(), R((re = f.value) == null ? void 0 : re.events.onSubmitSuccess);
      else {
        S.value = {};
        const ie = [];
        for (const [Q, te] of h.value) {
          const ye = g.errors[Q];
          ye && (te.setupBackendErrors(ye), ie.push(Q));
        }
        Object.entries(g.errors).forEach((Q) => {
          ie.includes(Q[0]) || (S.value[Q[0]] = Q[1]);
        }), R((H = f.value) == null ? void 0 : H.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    async function de(d) {
      var H, re, ie;
      if (!f.value.allowBulk || I.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!y())
        return;
      R((H = f.value) == null ? void 0 : H.events.onSubmit), T.value = !0, k();
      const g = K(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        bulkCount: d,
        context: t.context
      });
      if (C = _.bulk_data, _.success)
        S.value = {}, I.value === "create" && (I.value = "edit"), r && _.resource_data && (r.resource_data = _.resource_data), n = JSON.stringify(K()), f.value = ne.getForm(
          t.resourceName,
          t.resourceId,
          oe(),
          {
            form: _.form,
            resource_data: _.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), le(), R((ie = f.value) == null ? void 0 : ie.events.onSubmitSuccess);
      else {
        S.value = {};
        const Q = [];
        for (const [te, ye] of h.value) {
          const Ie = _.errors[te];
          Ie && (ye.setupBackendErrors(Ie), Q.push(te));
        }
        Object.entries(_.errors).forEach((te) => {
          Q.includes(te[0]) || (S.value[te[0]] = te[1]);
        }), R((re = f.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function oe() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in v) {
        const _ = v[g];
        if (_) {
          const H = z({
            inheritAttrs: !1,
            setup(re, { attrs: ie, slots: Q }) {
              return () => _({
                ...re,
                ...ie,
                slots: Q
              });
            }
          });
          switch (g) {
            case "sections":
              d.sectionComponent = H;
              break;
            case "actions":
              d.actionComponent = H;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = H;
              break;
            case "association-display":
              d.associationDisplayComponent = H;
              break;
            default:
              d.dynamicComponentRecord[g] = H;
              break;
          }
        }
      }
      return d;
    }
    function K() {
      const d = {};
      for (const [g, _] of h.value)
        d[g] = _.getValueDeserialized();
      return d;
    }
    function p() {
      const d = {};
      for (const [g, _] of h.value)
        d[g] = _.getValueSerialized();
      return d;
    }
    function y() {
      var g;
      let d = !0;
      return h.value.forEach((_) => {
        if (!_.validate()) {
          d = !1;
          return;
        }
      }), R((g = f.value) == null ? void 0 : g.events.onValidated), d;
    }
    function G() {
      let d = !0;
      return h.value.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function he() {
      return !G();
    }
    function le() {
      A.value.forEach((d) => {
        d.softReset();
      });
    }
    function Ae() {
      var d;
      h.value.forEach((g) => {
        g.reset();
      }), R((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function fe() {
      var d;
      h.value.forEach((g) => {
        g.clear();
      }), R((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function m() {
      h.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function k() {
      h.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function me(d) {
      if (r)
        return r.resource_data[d];
    }
    function se(d) {
      return A.value.get(d);
    }
    function je(d) {
      return [...A.value.values()].at(d);
    }
    function Qe() {
      return A.value;
    }
    function We(d) {
      return h.value.get(d);
    }
    function Je() {
      return h.value;
    }
    function Ke() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Xe() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Ze() {
      return a(I);
    }
    function et() {
      return n !== JSON.stringify(K());
    }
    function tt(d) {
      f.value && (f.value.context = d);
    }
    function nt(d) {
      f.value && (f.value.cssClass = d);
    }
    function at(d) {
      f.value && (f.value.readonly = d);
    }
    function ot() {
      return N.value;
    }
    function rt() {
      return F;
    }
    function it() {
      return C;
    }
    function lt() {
      return f;
    }
    function st(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.find((_) => _.name === d);
    }
    function ut(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.map((_) => _.fields).flat().find((_) => _.metadata.field_name === d);
    }
    function Oe(d, g) {
      A.value.set(d, g), s === A.value.size && (q.value = !0);
    }
    function Te(d, g) {
      h.value.set(d, g), l === h.value.size && (E.value = !0);
    }
    const qe = {
      getFormRef: lt,
      getSectionRef: st,
      getFieldRef: ut,
      registerSectionWrapperRef: Oe,
      registerFieldWrapperRef: Te
    }, ct = new Proxy({}, {
      get(d, g) {
        var _;
        return (_ = f.value) == null ? void 0 : _[g];
      }
    }), ee = {
      getMode: Ze,
      getSectionByName: se,
      getSectionByIndex: je,
      getSections: Qe,
      getFieldByName: We,
      getFields: Je,
      validate: y,
      isValid: G,
      isInvalid: he,
      softReset: le,
      reset: Ae,
      clear: fe,
      resetValidation: m,
      submit: $,
      submitBulk: de,
      valuesHasChanged: et,
      getInitialValueByFieldName: me,
      getAssociationDataCallback: Ke,
      setContext: tt,
      setCssClass: nt,
      setReadonlyState: at,
      isReady: ot,
      getSubmitData: rt,
      getBulkSubmitData: it,
      form: ct
    };
    e(ee);
    const dt = ue(() => G()), ft = ue(() => he()), mt = ue(() => p());
    return P(
      () => q.value && E.value,
      (d) => {
        var g;
        d && !N.value && (R((g = f.value) == null ? void 0 : g.events.onReady), N.value = !0);
      }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        u == null || u(), u = null, d && (u = P(dt, (g) => {
          var _;
          g && R((_ = f.value) == null ? void 0 : _.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        i == null || i(), i = null, d && (i = P(ft, (g) => {
          var _;
          g && R((_ = f.value) == null ? void 0 : _.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        c == null || c(), c = null, d && (c = P(
          mt,
          () => {
            var g;
            R((g = f.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      Xe(), await U(), ge(() => {
        n = JSON.stringify(K());
      });
    }), (d, g) => Be((b(), L("div", zn, [
      ae("div", {
        class: J(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (b(!0), L(be, null, Ce(f.value.sections, (_) => (b(), w(In, {
          key: _.name,
          section: _,
          context: t.context,
          formApi: ee,
          privateFormApi: qe,
          registerRef: Oe
        }, {
          default: x(() => [
            (b(!0), L(be, null, Ce(_.fields, (H) => (b(), w(Tn, {
              key: H.metadata.field_name,
              field: H,
              context: t.context,
              formApi: ee,
              privateFormApi: qe,
              registerRef: Te
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (b(), w(X(f.value.orphanErrorsComponent), {
        orphanErrors: S.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (b(), w(X(f.value.actionComponent), {
        isLoadingSubmit: T.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Ee, N.value]
    ]);
  }
});
export {
  Se as DynamicLogicBuilder,
  M as Submit64,
  Ln as Submit64Form
};
