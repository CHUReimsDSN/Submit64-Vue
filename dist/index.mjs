var at = Object.defineProperty;
var rt = (o, e, t) => e in o ? at(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => rt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as w, createElementBlock as z, openBlock as b, createElementVNode as J, createVNode as R, createBlock as B, createCommentVNode as M, unref as r, mergeProps as Fe, toDisplayString as j, renderSlot as Ie, resolveComponent as it, normalizeProps as lt, guardReactiveProps as st, withCtx as k, createTextVNode as pe, Fragment as ue, renderList as ce, ref as x, onMounted as H, normalizeClass as W, watch as G, resolveDynamicComponent as Y, nextTick as ae, markRaw as U, getCurrentInstance as $e, withDirectives as Ve, vShow as De, useSlots as ut, computed as ke } from "vue";
import { QBtn as ee, QIcon as de, QItem as ge, QItemSection as he, QItemLabel as ve, QInput as ye, QPopupProxy as xe, QDate as ze, QTime as ct, QCheckbox as dt, QSelect as Ae, date as E } from "quasar";
const ft = { class: "flex column" }, mt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, pt = /* @__PURE__ */ w({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(o) {
    const e = o;
    function t() {
      const a = e.formApi.form.formStyle;
      return {
        outline: a.fieldOutlined,
        rounded: a.fieldRounded,
        square: a.fieldSquare,
        dense: a.fieldDense,
        color: a.fieldColor,
        noCaps: !0
      };
    }
    return (a, n) => (b(), z("div", ft, [
      J("div", mt, [
        R(r(ee), Fe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (b(), B(r(ee), Fe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : M("", !0),
        e.formApi.clear ? (b(), B(r(ee), Fe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : M("", !0)
      ])
    ]));
  }
}), gt = { class: "flex row items-center" }, ht = { class: "text-body1 text-weight-medium" }, vt = { class: "flex column q-gutter-md" }, yt = /* @__PURE__ */ w({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (b(), z("div", null, [
      J("div", gt, [
        e.sectionApi.section.icon ? (b(), B(r(de), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : M("", !0),
        J("div", ht, j(e.sectionApi.section.label), 1)
      ]),
      J("div", vt, [
        Ie(t.$slots, "default")
      ])
    ]));
  }
}), bt = /* @__PURE__ */ w({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = it("q-icon");
      return b(), B(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (u) => e.reset())
      });
    };
  }
}), Ct = /* @__PURE__ */ w({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (b(), B(r(ge), lt(st(e.itemProps)), {
      default: k(() => [
        R(r(he), null, {
          default: k(() => [
            R(r(ve), null, {
              default: k(() => [
                pe(j(e.entry.label), 1)
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
}), _t = { class: "flex column" }, St = /* @__PURE__ */ w({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (b(), z("div", _t, [
      (b(!0), z(ue, null, ce(e.orphanErrors, (n, u) => (b(), z("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, j(u) + " : " + j(n.join(",")), 1))), 128))
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
    }, this._actionComponent = pt, this._orphanErrorsComponent = St, this._sectionComponent = yt, this._wrapperResetComponent = bt, this._associationDisplayComponent = Ct;
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
let P = me;
class fe {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, u = new Ft(a, n, this.formApi);
    return this.events.push(u), new kt(u);
  }
  static create(e) {
    return new fe(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((a) => {
      const n = a.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(a.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(a.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            a.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class Ft {
  constructor(e, t, a) {
    S(this, "type");
    S(this, "data");
    S(this, "formApi");
    S(this, "action", () => {
    });
    S(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = a;
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
class kt {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const xt = { class: "row items-center justify-end" }, Vt = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x(), l = x();
    function i() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function F() {
      return l.value ? !l.value.hasError : !1;
    }
    function v() {
      l.value && l.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(c, F, v);
    }), (y, g) => (b(), B(r(ye), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[1] || (g[1] = (O) => e.modelValueOnUpdate(O)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: k(() => [
        R(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            R(r(xe), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                R(r(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": g[0] || (g[0] = (O) => e.modelValueOnUpdate(O)),
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: k(() => [
                    J("div", xt, [
                      R(r(ee), {
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
}), Dt = { class: "row items-center justify-end" }, At = { class: "row items-center justify-end" }, Rt = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x(), l = x(), i = x();
    function c() {
      s.value && s.value.hide();
    }
    function F() {
      l.value && l.value.hide();
    }
    function v() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? !i.value.hasError : !1;
    }
    function g() {
      i.value && i.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(v, y, g);
    }), (O, A) => (b(), B(r(ye), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[2] || (A[2] = (V) => e.modelValueOnUpdate(V)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: k(() => [
        R(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            R(r(xe), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                R(r(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: k(() => [
                    J("div", Dt, [
                      R(r(ee), {
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
        R(r(de), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: k(() => [
            R(r(xe), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: k(() => [
                R(r(ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[1] || (A[1] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: k(() => [
                    J("div", At, [
                      R(r(ee), {
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
}), Nt = { class: "flex column" }, Et = {
  key: 0,
  class: "q-field__bottom"
}, Bt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ot = /* @__PURE__ */ w({
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
    const e = o, t = x(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function s() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return G(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), H(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (i, c) => (b(), z("div", Nt, [
      R(r(dt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (F) => e.modelValueOnUpdate(F)),
        label: e.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: W([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (b(), z("div", Et, j(e.field.hint), 1)) : M("", !0),
      t.value !== !0 ? (b(), z("div", Bt, j(t.value), 1)) : M("", !0)
    ]));
  }
}), Tt = /* @__PURE__ */ w({
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
    const t = o.formApi.form, a = t.formSettings;
    return t.formStyle, a.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
}), qt = /* @__PURE__ */ w({
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
    const e = o, t = x([]), a = x([]), n = x(), u = e.formApi.form, s = u.formSettings, l = u.formStyle, i = s.rulesBehaviour === "lazy";
    function c(A, V) {
      if (A === "") {
        V(() => {
          a.value = [...t.value];
        });
        return;
      }
      V(() => {
        const q = A.toLowerCase();
        a.value = t.value.filter((I) => I.label.toLowerCase().includes(q));
      });
    }
    function F() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function v() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? !n.value.hasError : !1;
    }
    function g() {
      n.value && n.value.resetValidation();
    }
    function O() {
      e.clear(), a.value = [];
    }
    return H(() => {
      F(), e.registerBehaviourCallbacks(v, y, g);
    }), (A, V) => (b(), B(r(Ae), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (q) => e.modelValueOnUpdate(q)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(l).fieldOutlined,
      filled: r(l).fieldFilled,
      standout: r(l).fieldStandout,
      borderless: r(l).fieldBorderless,
      rounded: r(l).fieldRounded,
      square: r(l).fieldSquare,
      dense: r(l).fieldDense,
      hideBottomSpace: r(l).fieldHideBottomSpace,
      color: r(l).fieldColor,
      bgColor: r(l).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: O,
      onFilter: c
    }, {
      default: k(() => [
        R(r(ge), {
          dense: r(l).fieldDense
        }, {
          default: k(() => [
            R(r(he), null, {
              default: k(() => [
                R(r(ve), null, {
                  default: k(() => [
                    pe(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Oe = /* @__PURE__ */ w({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = x([]), i = x(
      v()
    ), c = x(), F = x("__init");
    function v() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(f, h) {
      if (f === F.value) {
        h(() => {
        });
        return;
      }
      const _ = e.formApi.getAssociationDataCallback();
      i.value = v(), F.value = f;
      const $ = e.formApi.form;
      i.value.isLoading = !0, _({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: f,
        context: $.context
      }).then((T) => {
        h(() => {
          l.value = T.rows, i.value.lastPage = Math.ceil(
            T.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = v();
      });
    }
    function g() {
      ae(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (l.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: f,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function O() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function q() {
      e.clear(), i.value = v(), l.value = [];
    }
    function I(f) {
      const h = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && f.to === h && h !== -1) {
        const _ = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: _.resourceName,
          resourceId: _.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: F.value,
          context: _.context
        }).then((T) => {
          l.value = l.value.concat(
            T.rows
          ), i.value.lastPage = Math.ceil(
            T.row_count / i.value.limit
          ), T.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, f.ref.refresh();
        });
      }
    }
    return H(() => {
      g(), e.registerBehaviourCallbacks(O, A, V);
    }), (f, h) => (b(), B(r(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (_) => e.modelValueOnUpdate(_)),
      label: e.field.label,
      outlined: r(u).fieldOutlined,
      filled: r(u).fieldFilled,
      standout: r(u).fieldStandout,
      borderless: r(u).fieldBorderless,
      rounded: r(u).fieldRounded,
      square: r(u).fieldSquare,
      dense: r(u).fieldDense,
      hideBottomSpace: r(u).fieldHideBottomSpace,
      color: r(u).fieldColor,
      bgColor: r(u).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: q,
      onFilter: y,
      onVirtualScroll: I
    }, {
      "no-option": k(() => [
        R(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: k(() => [
            R(r(he), null, {
              default: k(() => [
                R(r(ve), null, {
                  default: k(() => [
                    pe(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: k((_) => [
        (b(), B(Y(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: _.opt,
          itemProps: _.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Te = /* @__PURE__ */ w({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = x([]), i = x(
      v()
    ), c = x(), F = x("__init");
    function v() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(f, h) {
      if (f === F.value) {
        h(() => {
        });
        return;
      }
      const _ = e.formApi.getAssociationDataCallback();
      i.value = v(), F.value = f;
      const $ = e.formApi.form;
      i.value.isLoading = !0, _({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: f,
        context: $.context
      }).then((T) => {
        h(() => {
          l.value = T.rows, i.value.lastPage = Math.ceil(
            T.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = v();
      });
    }
    function g() {
      ae(() => {
        const f = e.getValueSerialized();
        !f || !e.field.associationData || (l.value = f.map((h, _) => ({
          label: e.field.associationData.label[_] ?? "???",
          value: h,
          data: e.field.associationData.data[_]
        })));
      });
    }
    function O() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function q() {
      e.clear(), i.value = v(), l.value = [];
    }
    function I(f) {
      const h = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && f.to === h && h !== -1) {
        const _ = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: _.resourceName,
          resourceId: _.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: F.value,
          context: _.context
        }).then((T) => {
          l.value = l.value.concat(
            T.rows
          ), i.value.lastPage = Math.ceil(
            T.row_count / i.value.limit
          ), T.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, f.ref.refresh();
        });
      }
    }
    return H(() => {
      g(), e.registerBehaviourCallbacks(O, A, V);
    }), (f, h) => (b(), B(r(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (_) => e.modelValueOnUpdate(_)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(u).fieldOutlined,
      filled: r(u).fieldFilled,
      standout: r(u).fieldStandout,
      borderless: r(u).fieldBorderless,
      rounded: r(u).fieldRounded,
      square: r(u).fieldSquare,
      dense: r(u).fieldDense,
      hideBottomSpace: r(u).fieldHideBottomSpace,
      color: r(u).fieldColor,
      bgColor: r(u).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: q,
      onFilter: y,
      onVirtualScroll: I
    }, {
      "no-option": k(() => [
        R(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: k(() => [
            R(r(he), null, {
              default: k(() => [
                R(r(ve), null, {
                  default: k(() => [
                    pe(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: k((_) => [
        (b(), B(Y(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: _.opt,
          itemProps: _.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), qe = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? !s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (F, v) => (b(), B(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (y) => e.modelValueOnUpdate(y)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), wt = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = x();
    function l() {
      return s.value ? s.value.validate() : !1;
    }
    function i() {
      return s.value ? !s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(l, i, c);
    }), (F, v) => (b(), B(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (y) => e.modelValueOnUpdate(y)),
      type: "number",
      label: e.field.label,
      hint: e.field.hint,
      outlined: r(n).fieldOutlined,
      filled: r(n).fieldFilled,
      standout: r(n).fieldStandout,
      borderless: r(n).fieldBorderless,
      rounded: r(n).fieldRounded,
      square: r(n).fieldSquare,
      dense: r(n).fieldDense,
      hideBottomSpace: r(n).fieldHideBottomSpace,
      color: r(n).fieldColor,
      bgColor: r(n).fieldBgColor,
      class: W(e.field.cssClass),
      "lazy-rules": u,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class X {
  constructor(e, t, a, n, u, s, l, i, c) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...u,
      ...P.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...s,
      ...P.getGlobalFormStyle()
    }, this.actionComponent = a.actionComponent ?? P.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? P.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? P.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? P.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? P.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...P.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: P.getGlobalFormStyle(),
      events: {},
      actionComponent: U(P.getGlobalActionComponent()),
      orphanErrorsComponent: U(P.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: U(P.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, u, s, l, i, c) {
    return new X(
      e,
      t,
      a,
      n,
      u,
      s,
      l,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = fe.create(this.formApi);
    this.registerEventCallback(e);
    const t = fe.getEventsObjectFromInstance(e), a = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, s) => {
        const l = [];
        u.fields.forEach((y) => {
          const g = this.dynamicComponentRecord[`field-${y.field_name}-before`], O = X.getFieldComponentByFormFieldType(
            y.field_type
          ), A = this.dynamicComponentRecord[`field-${y.field_name}-after`], V = {
            associationDisplayComponent: U(
              this.associationDisplayComponent
            ),
            regularFieldType: X.getRegularFieldTypeByFieldType(
              y.field_type
            )
          };
          let q = y.label;
          this.formSettings.requiredFieldsHasAsterisk && y.rules.find((f) => f.type === "required") && (q = q.concat("*"));
          const I = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: q,
            hint: y.hint ?? void 0,
            prefix: y.prefix ?? void 0,
            suffix: y.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? y.readonly ?? void 0,
            cssClass: y.css_class ?? void 0,
            staticSelectOptions: y.static_select_options,
            associationData: y.field_association_data,
            rules: y.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: g ? U(g) : void 0,
            mainComponent: U(O),
            afterComponent: A ? U(A) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: V
          };
          l.push(I);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? s}-before`], c = this.sectionComponent, F = this.dynamicComponentRecord[`section-${u.name ?? s}-after`], v = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? s.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? s.toString()] ?? {},
          beforeComponent: i ? U(i) : void 0,
          mainComponent: U(c),
          afterComponent: F ? U(F) : void 0,
          fields: l
        };
        a.push(v);
      }
    ), {
      sections: a,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: t.form,
      actionComponent: U(this.actionComponent),
      orphanErrorsComponent: U(this.orphanErrorsComponent),
      wrapperResetComponent: U(this.wrapperResetComponent),
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
      string: qe,
      text: qe,
      number: wt,
      date: Vt,
      datetime: Rt,
      selectString: qt,
      selectBelongsTo: Oe,
      selectHasMany: Te,
      selectHasAndBelongsToMany: Te,
      selectHasOne: Oe,
      checkbox: Ot,
      object: Tt
    }[e];
  }
}
function N(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function It(o, e, t) {
  const a = t.form, n = (i, c, F) => i[c] ? F ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var v;
    return ((v = t.getFieldByName(i.compare_to)) == null ? void 0 : v.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    E.formatDate(
      E.extractDate(i, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), s = [], l = [];
  switch (e) {
    case "date":
      s.push(we(a.formSettings.dateFormat));
      break;
    case "datetime":
      s.push(we(a.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        s.push($t());
        break;
      case "absence":
        s.push(Pt());
        break;
      case "acceptance":
        s.push(Ut());
        break;
      case "inclusion":
        s.push(Pe(c.including));
        break;
      case "exclusion":
        s.push(zt(c.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        l.push("allowNull");
        break;
      case "allowBlank":
        l.push("allowBlank");
        break;
      case "positiveNumber":
        s.push(Ht());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          Mt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          Yt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          jt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          Qt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          Wt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          Jt(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(Kt());
        break;
      case "numberNumericOnly":
        s.push(Xt());
        break;
      case "numberEvenOnly":
        s.push(Zt());
        break;
      case "numberOddOnly":
        s.push(en());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          tn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          nn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          on(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          an(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          sn(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          ln(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          rn(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          un(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          cn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          dn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          fn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          mn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          pn(
            n(c, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          gn(
            n(c, "other_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
    }
  }), l.length > 0 ? l.map((i) => {
    switch (i) {
      case "allowBlank":
        return Gt(s);
      case "allowNull":
        return Lt(s);
    }
  }) : s;
}
function $t() {
  return (o) => !!o || "Ce champ est requis";
}
function Pe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function zt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Pe.toString()}`
  );
}
function Pt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Ut() {
  return (o) => !!o || "Doit être accepté";
}
function Lt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Gt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Ht() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Mt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Yt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Qt(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Wt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function Jt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function Kt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Xt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Zt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function en() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function tn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function nn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function on(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function an(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function rn(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function ln(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function sn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function un(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function cn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n <= u || `Inf. ou égal à ${a}`;
  };
}
function dn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n < u || `Inf. à ${a}`;
  };
}
function fn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n >= u || `Sup. ou égal à ${a}`;
  };
}
function mn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n > u || `Sup. à ${a}`;
  };
}
function pn(o, e) {
  return (t) => {
    const a = o(), n = E.extractDate(String(t), e), u = E.extractDate(a, e);
    return n === u || `Égale à ${n}`;
  };
}
function gn(o, e) {
  return (t) => {
    const a = o();
    return E.extractDate(String(t), e) !== E.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function we(o) {
  return (e) => e == null || e === "" ? !0 : hn(e, o) || `Date invalide. Format : ${o}`;
}
function hn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = E.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : E.formatDate(t, e) === o;
}
const vn = {
  computeServerRules: It
}, yn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, bn = ["index"], Cn = /* @__PURE__ */ w({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = () => !0, n = () => !0, u = () => {
    };
    const s = g(), l = x(), i = x([]);
    function c(m = !0) {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = F(l.value), m && N(t.field.events.onReset), ae(() => {
        ie();
      });
    }
    function F(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : E.formatDate(
            E.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : E.formatDate(
            E.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function v(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : E.formatDate(
            E.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : E.formatDate(
            E.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          l.value = "";
          break;
        case "checkbox":
          l.value = !1;
          break;
        case "date":
          l.value = null;
          break;
        case "datetime":
          l.value = null;
          break;
        case "number":
          l.value = null;
          break;
        case "selectString":
          l.value = void 0;
          break;
        case "text":
          l.value = "";
          break;
        case "object":
          l.value = {};
          break;
        case "selectBelongsTo":
          l.value = void 0;
          break;
        case "selectHasMany":
          l.value = void 0;
          break;
      }
      N(t.field.events.onClear);
    }
    function g() {
      return vn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function O(m) {
      l.value = m;
    }
    function A() {
      return r(l);
    }
    function V() {
      return v(r(l));
    }
    function q(m) {
      i.value = m;
    }
    function I() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, N(t.field.events.onHide));
    }
    function f() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, N(t.field.events.onUnhide));
    }
    function h(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function _(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.hint = m);
    }
    function $(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.cssClass = m);
    }
    function T(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = m);
    }
    function be(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = m);
    }
    function re(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = m);
    }
    function Z() {
      const m = a();
      return N(t.field.events.onValidated), m;
    }
    function te() {
      return n();
    }
    function Ce() {
      return !te();
    }
    function ie() {
      return u();
    }
    function _e(m, C, oe) {
      a = m, n = C, u = oe;
    }
    const ne = {
      reset: c,
      clear: y,
      validate: Z,
      isValid: te,
      isInvalid: Ce,
      hide: I,
      unhide: f,
      resetValidation: ie,
      getValueDeserialized: V,
      getValueSerialized: A,
      setupBackendErrors: q,
      setReadonlyState: h,
      setHint: _,
      setCssClass: $,
      setSuffix: T,
      setPrefix: be,
      setLabel: re,
      setValue: O,
      field: t.field
    };
    return e(ne), G(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), G(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? l.value : null,
      (m) => {
        N(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), H(() => {
      var C;
      c(!1);
      const m = (C = $e()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => Ve((b(), z("div", null, [
      t.field.beforeComponent ? (b(), B(Y(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      (b(), B(Y(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: r(s),
        reset: c,
        clear: y,
        getValueDeserialized: V,
        getValueSerialized: A,
        validate: Z,
        modelValueOnUpdate: O,
        registerBehaviourCallbacks: _e
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (b(), B(Y(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      i.value.length > 0 ? (b(), z("div", yn, [
        (b(!0), z(ue, null, ce(i.value, (oe, Se) => (b(), z("div", {
          index: Se,
          class: "flex column"
        }, j(oe), 9, bn))), 256))
      ])) : M("", !0)
    ], 512)), [
      [De, t.field.hidden !== !0]
    ]);
  }
}), _n = { class: "flex column" }, Sn = /* @__PURE__ */ w({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, a = /* @__PURE__ */ new Map(), n = {
      reset: s,
      clear: l,
      validate: F,
      isValid: v,
      isInvalid: y,
      hide: i,
      unhide: c,
      resetValidation: g,
      getFields: O,
      setReadonlyState: A,
      setCssClass: V,
      setIcon: q,
      setLabel: I,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((f) => {
        const h = f.metadata.field_name, _ = t.formApi.getFieldByName(h);
        _ && a.set(h, _);
      });
    }
    function s() {
      a.forEach((f) => {
        f.reset();
      }), N(t.section.events.onReset);
    }
    function l() {
      a.forEach((f) => {
        f.clear();
      }), N(t.section.events.onClear);
    }
    function i() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (a.forEach((h) => {
        h.hide();
      }), f.hidden = !0, N(t.section.events.onHide));
    }
    function c() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (a.forEach((h) => {
        h.unhide();
      }), f.hidden = !1, N(t.section.events.onUnhide));
    }
    function F() {
      let f = !0;
      return a.forEach((h) => {
        if (!h.validate()) {
          f = !1;
          return;
        }
      }), N(t.section.events.onValidated), f;
    }
    function v() {
      let f = !0;
      return a.forEach((h) => {
        if (!h.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function y() {
      return !v();
    }
    function g() {
      a.forEach((f) => {
        f.resetValidation();
      });
    }
    function O() {
      return a;
    }
    function A(f) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.readonly = f);
    }
    function V(f) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.cssClass = f);
    }
    function q(f) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.icon = f);
    }
    function I(f) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.label = f);
    }
    return e(n), G(
      () => t.section.events.onIsValid ? v() : null,
      (f) => {
        f && N(t.section.events.onIsValid);
      }
    ), H(() => {
      var h;
      const f = (h = $e()) == null ? void 0 : h.exposed;
      f && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        f
      ), ae(() => {
        u();
      });
    }), (f, h) => Ve((b(), z("div", _n, [
      t.section.beforeComponent ? (b(), B(Y(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0),
      (b(), B(Y(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: k(() => [
          Ie(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (b(), B(Y(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0)
    ], 512)), [
      [De, t.section.hidden !== !0]
    ]);
  }
}), Fn = { class: "flex column" }, Dn = /* @__PURE__ */ w({
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
    let a = null, n = "", u = 0, s = 0, l = null, i = null, c = null;
    const F = ut(), v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = x(X.getEmptyFormBeforeInit()), O = x(!1), A = x(!1), V = x(!1), q = x(!1), I = x("create"), f = x({});
    async function h() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), g.value = X.getForm(
        t.resourceName,
        t.resourceId,
        $(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        K,
        t.eventManager
      ), u = g.value.sections.length, s = g.value.sections.map((d) => d.fields).flat().length, t.resourceId && (I.value = "edit");
    }
    async function _() {
      var D, L, le;
      if (!re())
        return;
      N((D = g.value) == null ? void 0 : D.events.onSubmit), q.value = !0, ne();
      const d = T(), p = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (p.success)
        f.value = {}, I.value === "create" && (I.value = "edit"), a && p.resource_data && (a.resource_data = p.resource_data), n = JSON.stringify(T()), g.value = X.getForm(
          t.resourceName,
          t.resourceId,
          $(),
          {
            form: p.form,
            resource_data: p.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          K,
          t.eventManager
        ), N((le = g.value) == null ? void 0 : le.events.onSubmitSuccess);
      else {
        f.value = {};
        const se = [];
        [...v].forEach((Q) => {
          const Be = p.errors[Q[0]];
          Be && (Q[1].setupBackendErrors(Be), se.push(Q[0]));
        }), Object.entries(p.errors).forEach((Q) => {
          se.includes(Q[0]) || (f.value[Q[0]] = Q[1]);
        }), N((L = g.value) == null ? void 0 : L.events.onSubmitUnsuccess);
      }
      q.value = !1;
    }
    function $() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const p in F) {
        const D = F[p];
        if (D) {
          const L = w({
            inheritAttrs: !1,
            setup(le, { attrs: se, slots: Q }) {
              return () => D({
                ...le,
                ...se,
                slots: Q
              });
            }
          });
          switch (p) {
            case "sections":
              d.sectionComponent = L;
              break;
            case "actions":
              d.actionComponent = L;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = L;
              break;
            case "association-display":
              d.associationDisplayComponent = L;
              break;
            default:
              d.dynamicComponentRecord[p] = L;
              break;
          }
        }
      }
      return d;
    }
    function T() {
      const d = {};
      return [...v].forEach((p) => {
        d[p[0]] = p[1].getValueDeserialized();
      }), d;
    }
    function be() {
      const d = {};
      return [...v].forEach((p) => {
        d[p[0]] = p[1].getValueSerialized();
      }), d;
    }
    function re() {
      var p;
      let d = !0;
      return v.forEach((D) => {
        if (!D.validate()) {
          d = !1;
          return;
        }
      }), N((p = g.value) == null ? void 0 : p.events.onValidated), d;
    }
    function Z() {
      let d = !0;
      return v.forEach((p) => {
        if (!p.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function te() {
      return !Z();
    }
    function Ce() {
      var d;
      v.forEach((p) => {
        p.reset();
      }), N((d = g.value) == null ? void 0 : d.events.onReset);
    }
    function ie() {
      var d;
      v.forEach((p) => {
        p.clear();
      }), N((d = g.value) == null ? void 0 : d.events.onClear);
    }
    function _e() {
      v.forEach((d) => {
        d.resetValidation();
      });
    }
    function ne() {
      v.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function m(d) {
      if (a)
        return a.resource_data[d];
    }
    function C(d) {
      return y.get(d);
    }
    function oe(d) {
      return [...y.values()].at(d);
    }
    function Se() {
      return y;
    }
    function Ue(d) {
      return v.get(d);
    }
    function Le() {
      return v;
    }
    function Ge() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function He() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((p) => {
        (t[p] === null || t[p] === void 0) && console.warn(`Missing props for <Submit64> -> ${p}`);
      });
    }
    function Me() {
      return r(I);
    }
    function Ye() {
      return n !== JSON.stringify(T());
    }
    function je(d) {
      g.value && (g.value.context = d);
    }
    function Qe(d) {
      g.value && (g.value.cssClass = d);
    }
    function We(d) {
      g.value && (g.value.readonly = d);
    }
    function Je() {
      return V.value;
    }
    function Ke() {
      return g;
    }
    function Xe(d) {
      var p;
      return (p = g.value) == null ? void 0 : p.sections.find((D) => D.name === d);
    }
    function Ze(d) {
      var p;
      return (p = g.value) == null ? void 0 : p.sections.map((D) => D.fields).flat().find((D) => D.metadata.field_name === d);
    }
    function Re(d, p) {
      y.set(d, p), u === y.size && (O.value = !0);
    }
    function Ne(d, p) {
      v.set(d, p), s === v.size && (A.value = !0);
    }
    const Ee = {
      getFormRef: Ke,
      getSectionRef: Xe,
      getFieldRef: Ze,
      registerSectionWrapperRef: Re,
      registerFieldWrapperRef: Ne
    }, et = new Proxy({}, {
      get(d, p) {
        var D;
        return (D = g.value) == null ? void 0 : D[p];
      }
    }), K = {
      getMode: Me,
      getSectionByName: C,
      getSectionByIndex: oe,
      getSections: Se,
      getFieldByName: Ue,
      getFields: Le,
      validate: re,
      isValid: Z,
      isInvalid: te,
      reset: Ce,
      clear: ie,
      resetValidation: _e,
      submit: _,
      valuesHasChanged: Ye,
      getInitialValueByFieldName: m,
      getAssociationDataCallback: Ge,
      setContext: je,
      setCssClass: Qe,
      setReadonlyState: We,
      isReady: Je,
      form: et
    };
    e(K);
    const tt = ke(() => Z()), nt = ke(() => te()), ot = ke(() => be());
    return G(
      () => O.value && A.value,
      (d) => {
        var p;
        d && !V.value && (N((p = g.value) == null ? void 0 : p.events.onReady), V.value = !0);
      }
    ), G(
      () => {
        var d;
        return (d = g.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        d ? l = G(tt, (p) => {
          var D;
          p && N((D = g.value) == null ? void 0 : D.events.onIsValid);
        }) : (l == null || l(), l = null);
      },
      { immediate: !0 }
    ), G(
      () => {
        var d;
        return (d = g.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        d ? i = G(nt, (p) => {
          var D;
          p || N((D = g.value) == null ? void 0 : D.events.onIsInvalid);
        }) : (i == null || i(), i = null);
      },
      { immediate: !0 }
    ), G(
      () => {
        var d;
        return (d = g.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        d ? c = G(ot, () => {
          var p;
          N((p = g.value) == null ? void 0 : p.events.onUpdate);
        }) : (c == null || c(), c = null);
      },
      { immediate: !0 }
    ), H(async () => {
      He(), await h(), ae(() => {
        n = JSON.stringify(T());
      });
    }), (d, p) => Ve((b(), z("div", Fn, [
      J("div", {
        class: W(g.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (b(!0), z(ue, null, ce(g.value.sections, (D) => (b(), B(Sn, {
          key: D.name,
          section: D,
          context: t.context,
          formApi: K,
          privateFormApi: Ee,
          registerRef: Re
        }, {
          default: k(() => [
            (b(!0), z(ue, null, ce(D.fields, (L) => (b(), B(Cn, {
              key: L.metadata.field_name,
              field: L,
              context: t.context,
              formApi: K,
              privateFormApi: Ee,
              registerRef: Ne
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (b(), B(Y(g.value.orphanErrorsComponent), {
        orphanErrors: f.value,
        formApi: K
      }, null, 8, ["orphanErrors"])),
      (b(), B(Y(g.value.actionComponent), {
        isLoadingSubmit: q.value,
        formApi: K
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [De, V.value]
    ]);
  }
});
export {
  fe as DynamicLogicBuilder,
  P as Submit64,
  Dn as Submit64Form
};
