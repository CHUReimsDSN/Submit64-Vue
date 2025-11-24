var rt = Object.defineProperty;
var it = (o, e, t) => e in o ? rt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => it(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as w, createElementBlock as z, openBlock as v, createElementVNode as J, createVNode as A, createBlock as E, createCommentVNode as M, unref as r, mergeProps as Fe, toDisplayString as j, renderSlot as Ie, resolveComponent as lt, normalizeProps as st, guardReactiveProps as ut, withCtx as x, createTextVNode as pe, Fragment as ue, renderList as ce, ref as k, onMounted as H, normalizeClass as Q, watch as G, resolveDynamicComponent as Y, nextTick as ae, markRaw as U, getCurrentInstance as $e, withDirectives as Ve, vShow as De, useSlots as ct, computed as ke } from "vue";
import { QBtn as ee, QIcon as de, QItem as ge, QItemSection as he, QItemLabel as ve, QInput as ye, QPopupProxy as xe, QDate as ze, QTime as dt, QCheckbox as ft, QSelect as Ae, date as N } from "quasar";
const mt = { class: "flex column" }, pt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, gt = /* @__PURE__ */ w({
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
    return (a, n) => (v(), z("div", mt, [
      J("div", pt, [
        A(r(ee), Fe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (v(), E(r(ee), Fe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : M("", !0),
        e.formApi.clear ? (v(), E(r(ee), Fe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : M("", !0)
      ])
    ]));
  }
}), ht = { class: "flex row items-center" }, vt = { class: "text-body1 text-weight-medium" }, yt = { class: "flex column q-gutter-md" }, bt = /* @__PURE__ */ w({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", null, [
      J("div", ht, [
        e.sectionApi.section.icon ? (v(), E(r(de), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : M("", !0),
        J("div", vt, j(e.sectionApi.section.label), 1)
      ]),
      J("div", yt, [
        Ie(t.$slots, "default")
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ w({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = lt("q-icon");
      return v(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (u) => e.reset())
      });
    };
  }
}), _t = /* @__PURE__ */ w({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), E(r(ge), st(ut(e.itemProps)), {
      default: x(() => [
        A(r(he), null, {
          default: x(() => [
            A(r(ve), null, {
              default: x(() => [
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
}), St = { class: "flex column" }, Ft = /* @__PURE__ */ w({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (v(), z("div", St, [
      (v(!0), z(ue, null, ce(e.orphanErrors, (n, u) => (v(), z("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, j(u) + " : " + j(n.join(",")), 1))), 128))
    ]));
  }
}), me = class me {
  constructor() {
    _(this, "_formSettings");
    _(this, "_formStyle");
    _(this, "_actionComponent");
    _(this, "_orphanErrorsComponent");
    _(this, "_sectionComponent");
    _(this, "_wrapperResetComponent");
    _(this, "_associationDisplayComponent");
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
    }, this._actionComponent = gt, this._orphanErrorsComponent = Ft, this._sectionComponent = bt, this._wrapperResetComponent = Ct, this._associationDisplayComponent = _t;
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
_(me, "_instance", new me());
let P = me;
class fe {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, u = new kt(a, n, this.formApi);
    return this.events.push(u), new xt(u);
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
class kt {
  constructor(e, t, a) {
    _(this, "type");
    _(this, "data");
    _(this, "formApi");
    _(this, "action", () => {
    });
    _(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class xt {
  constructor(e) {
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Vt = { class: "row items-center justify-end" }, Dt = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k(), l = k();
    function i() {
      s.value && s.value.hide();
    }
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function S() {
      return l.value ? !l.value.hasError : !1;
    }
    function m() {
      l.value && l.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(c, S, m);
    }), (y, B) => (v(), E(r(ye), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[1] || (B[1] = (O) => e.modelValueOnUpdate(O)),
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
      class: Q(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: x(() => [
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            A(r(xe), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                A(r(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": B[0] || (B[0] = (O) => e.modelValueOnUpdate(O)),
                  mask: r(t).formSettings.dateFormat
                }, {
                  default: x(() => [
                    J("div", Vt, [
                      A(r(ee), {
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
}), At = { class: "row items-center justify-end" }, Rt = { class: "row items-center justify-end" }, Nt = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k(), l = k(), i = k();
    function c() {
      s.value && s.value.hide();
    }
    function S() {
      l.value && l.value.hide();
    }
    function m() {
      return i.value ? i.value.validate() : !1;
    }
    function y() {
      return i.value ? !i.value.hasError : !1;
    }
    function B() {
      i.value && i.value.resetValidation();
    }
    return H(() => {
      e.registerBehaviourCallbacks(m, y, B);
    }), (O, D) => (v(), E(r(ye), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[2] || (D[2] = (V) => e.modelValueOnUpdate(V)),
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
      class: Q(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: x(() => [
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            A(r(xe), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                A(r(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat
                }, {
                  default: x(() => [
                    J("div", At, [
                      A(r(ee), {
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
        A(r(de), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: x(() => [
            A(r(xe), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: x(() => [
                A(r(dt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[1] || (D[1] = (V) => e.modelValueOnUpdate(V)),
                  mask: r(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: x(() => [
                    J("div", Rt, [
                      A(r(ee), {
                        onClick: S,
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
}), Et = { class: "flex column" }, Bt = {
  key: 0,
  class: "q-field__bottom"
}, Ot = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Tt = /* @__PURE__ */ w({
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
    }), (i, c) => (v(), z("div", Et, [
      A(r(ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: r(n).fieldDense,
        color: r(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: Q([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), z("div", Bt, j(e.field.hint), 1)) : M("", !0),
      t.value !== !0 ? (v(), z("div", Ot, j(t.value), 1)) : M("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ w({
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
}), wt = /* @__PURE__ */ w({
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
    const e = o, t = k([]), a = k([]), n = k(), u = e.formApi.form, s = u.formSettings, l = u.formStyle, i = s.rulesBehaviour === "lazy";
    function c(D, V) {
      if (D === "") {
        V(() => {
          a.value = [...t.value];
        });
        return;
      }
      V(() => {
        const T = D.toLowerCase();
        a.value = t.value.filter((I) => I.label.toLowerCase().includes(T));
      });
    }
    function S() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function m() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? !n.value.hasError : !1;
    }
    function B() {
      n.value && n.value.resetValidation();
    }
    function O() {
      e.clear(), a.value = [];
    }
    return H(() => {
      S(), e.registerBehaviourCallbacks(m, y, B);
    }), (D, V) => (v(), E(r(Ae), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (T) => e.modelValueOnUpdate(T)),
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
      class: Q(e.field.cssClass),
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
      default: x(() => [
        A(r(ge), {
          dense: r(l).fieldDense
        }, {
          default: x(() => [
            A(r(he), null, {
              default: x(() => [
                A(r(ve), null, {
                  default: x(() => [
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = k([]), i = k(
      m()
    ), c = k(), S = k("__init");
    function m() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(d, h) {
      if (d === S.value) {
        h(() => {
        });
        return;
      }
      const C = e.formApi.getAssociationDataCallback();
      i.value = m(), S.value = d;
      const $ = e.formApi.form;
      i.value.isLoading = !0, C({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: d,
        context: $.context
      }).then((q) => {
        h(() => {
          l.value = q.rows, i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = m();
      });
    }
    function B() {
      ae(() => {
        const d = e.getValueSerialized();
        !d || !e.field.associationData || (l.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: d,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function O() {
      return c.value ? c.value.validate() : !1;
    }
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function T() {
      e.clear(), i.value = m(), l.value = [];
    }
    function I(d) {
      const h = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && d.to === h && h !== -1) {
        const C = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: C.resourceName,
          resourceId: C.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: S.value,
          context: C.context
        }).then((q) => {
          l.value = l.value.concat(
            q.rows
          ), i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), q.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, d.ref.refresh();
        });
      }
    }
    return H(() => {
      B(), e.registerBehaviourCallbacks(O, D, V);
    }), (d, h) => (v(), E(r(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (C) => e.modelValueOnUpdate(C)),
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
      class: Q(e.field.cssClass),
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
      onClear: T,
      onFilter: y,
      onVirtualScroll: I
    }, {
      "no-option": x(() => [
        A(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: x(() => [
            A(r(he), null, {
              default: x(() => [
                A(r(ve), null, {
                  default: x(() => [
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
      option: x((C) => [
        (v(), E(Y(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: C.opt,
          itemProps: C.itemProps
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = e.formApi.form, n = a.formSettings, u = a.formStyle, s = n.rulesBehaviour === "lazy", l = k([]), i = k(
      m()
    ), c = k(), S = k("__init");
    function m() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(d, h) {
      if (d === S.value) {
        h(() => {
        });
        return;
      }
      const C = e.formApi.getAssociationDataCallback();
      i.value = m(), S.value = d;
      const $ = e.formApi.form;
      i.value.isLoading = !0, C({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: d,
        context: $.context
      }).then((q) => {
        h(() => {
          l.value = q.rows, i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], i.value = m();
      });
    }
    function B() {
      ae(() => {
        const d = e.getValueSerialized();
        !d || !e.field.associationData || (l.value = d.map((h, C) => ({
          label: e.field.associationData.label[C] ?? "???",
          value: h,
          data: e.field.associationData.data[C]
        })));
      });
    }
    function O() {
      return c.value ? c.value.validate() : !1;
    }
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function T() {
      e.clear(), i.value = m(), l.value = [];
    }
    function I(d) {
      const h = l.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && d.to === h && h !== -1) {
        const C = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, $({
          resourceName: C.resourceName,
          resourceId: C.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: S.value,
          context: C.context
        }).then((q) => {
          l.value = l.value.concat(
            q.rows
          ), i.value.lastPage = Math.ceil(
            q.row_count / i.value.limit
          ), q.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, d.ref.refresh();
        });
      }
    }
    return H(() => {
      B(), e.registerBehaviourCallbacks(O, D, V);
    }), (d, h) => (v(), E(r(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (C) => e.modelValueOnUpdate(C)),
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
      class: Q(e.field.cssClass),
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
      onClear: T,
      onFilter: y,
      onVirtualScroll: I
    }, {
      "no-option": x(() => [
        A(r(ge), {
          dense: r(u).fieldDense
        }, {
          default: x(() => [
            A(r(he), null, {
              default: x(() => [
                A(r(ve), null, {
                  default: x(() => [
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
      option: x((C) => [
        (v(), E(Y(r(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: C.opt,
          itemProps: C.itemProps
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k();
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
    }), (S, m) => (v(), E(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": m[0] || (m[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: Q(e.field.cssClass),
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
}), It = /* @__PURE__ */ w({
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
    const e = o, t = e.formApi.form, a = t.formSettings, n = t.formStyle, u = a.rulesBehaviour === "lazy", s = k();
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
    }), (S, m) => (v(), E(r(ye), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": m[0] || (m[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: Q(e.field.cssClass),
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
    _(this, "resourceName");
    _(this, "resourceId");
    _(this, "formMetadataAndData");
    _(this, "context");
    _(this, "formSettings");
    _(this, "formStyle");
    _(this, "actionComponent");
    _(this, "orphanErrorsComponent");
    _(this, "sectionComponent");
    _(this, "wrapperResetComponent");
    _(this, "associationDisplayComponent");
    _(this, "dynamicComponentRecord");
    _(this, "formApi");
    _(this, "registerEventCallback");
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
          const B = this.dynamicComponentRecord[`field-${y.field_name}-before`], O = X.getFieldComponentByFormFieldType(
            y.field_type
          ), D = this.dynamicComponentRecord[`field-${y.field_name}-after`], V = {
            associationDisplayComponent: U(
              this.associationDisplayComponent
            ),
            regularFieldType: X.getRegularFieldTypeByFieldType(
              y.field_type
            )
          };
          let T = y.label;
          this.formSettings.requiredFieldsHasAsterisk && y.rules.find((d) => d.type === "required") && (T = T.concat("*"));
          const I = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: T,
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
            beforeComponent: B ? U(B) : void 0,
            mainComponent: U(O),
            afterComponent: D ? U(D) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: V
          };
          l.push(I);
        });
        const i = this.dynamicComponentRecord[`section-${u.name ?? s}-before`], c = this.sectionComponent, S = this.dynamicComponentRecord[`section-${u.name ?? s}-after`], m = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? s.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? s.toString()] ?? {},
          beforeComponent: i ? U(i) : void 0,
          mainComponent: U(c),
          afterComponent: S ? U(S) : void 0,
          fields: l
        };
        a.push(m);
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
      number: It,
      date: Dt,
      datetime: Nt,
      selectString: wt,
      selectBelongsTo: Oe,
      selectHasMany: Te,
      selectHasAndBelongsToMany: Te,
      selectHasOne: Oe,
      checkbox: Tt,
      object: qt
    }[e];
  }
}
function R(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function $t(o, e, t) {
  const a = t.form, n = (i, c, S) => i[c] ? S ? () => u(i[c]) : () => i[c] : i.compare_to ? () => {
    var m;
    return ((m = t.getFieldByName(i.compare_to)) == null ? void 0 : m.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (i) => String(
    N.formatDate(
      N.extractDate(i, a.formSettings.backendDateFormat),
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
        s.push(zt());
        break;
      case "absence":
        s.push(Ut());
        break;
      case "acceptance":
        s.push(Lt());
        break;
      case "inclusion":
        s.push(Pe(c.including));
        break;
      case "exclusion":
        s.push(Pt(c.excluding));
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
        s.push(Mt());
        break;
      case "lessThanOrEqualNumber":
        s.push(
          Yt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        s.push(
          jt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        s.push(
          Qt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        s.push(
          Wt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        s.push(
          Jt(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        s.push(
          Kt(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        s.push(Xt());
        break;
      case "numberNumericOnly":
        s.push(Zt());
        break;
      case "numberEvenOnly":
        s.push(en());
        break;
      case "numberOddOnly":
        s.push(tn());
        break;
      case "lessThanOrEqualStringLength":
        s.push(
          nn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        s.push(
          on(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        s.push(
          an(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        s.push(
          rn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        s.push(
          un(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        s.push(
          sn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        s.push(
          ln(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        s.push(
          cn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        s.push(
          dn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          fn(
            n(c, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          mn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          pn(
            n(c, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          gn(
            n(c, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          hn(
            n(c, "other_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
    }
  }), l.length > 0 ? l.map((i) => {
    switch (i) {
      case "allowBlank":
        return Ht(s);
      case "allowNull":
        return Gt(s);
    }
  }) : s;
}
function zt() {
  return (o) => !!o || "Ce champ est requis";
}
function Pe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Pt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Pe.toString()}`
  );
}
function Ut() {
  return (o) => !o || "Ce champ doit être vide";
}
function Lt() {
  return (o) => !!o || "Doit être accepté";
}
function Gt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Ht(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Mt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Yt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Qt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Wt(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Jt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function Xt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Zt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function en() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function tn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function nn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function on(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function an(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function rn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function ln(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function sn(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function un(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function cn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function dn(o, e) {
  return (t) => {
    const a = o(), n = N.extractDate(String(t), e), u = N.extractDate(a, e);
    return n <= u || `Inf. ou égal à ${a}`;
  };
}
function fn(o, e) {
  return (t) => {
    const a = o(), n = N.extractDate(String(t), e), u = N.extractDate(a, e);
    return n < u || `Inf. à ${a}`;
  };
}
function mn(o, e) {
  return (t) => {
    const a = o(), n = N.extractDate(String(t), e), u = N.extractDate(a, e);
    return n >= u || `Sup. ou égal à ${a}`;
  };
}
function pn(o, e) {
  return (t) => {
    const a = o(), n = N.extractDate(String(t), e), u = N.extractDate(a, e);
    return n > u || `Sup. à ${a}`;
  };
}
function gn(o, e) {
  return (t) => {
    const a = o(), n = N.extractDate(String(t), e), u = N.extractDate(a, e);
    return n === u || `Égale à ${n}`;
  };
}
function hn(o, e) {
  return (t) => {
    const a = o();
    return N.extractDate(String(t), e) !== N.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function we(o) {
  return (e) => e == null || e === "" ? !0 : vn(e, o) || `Date invalide. Format : ${o}`;
}
function vn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = N.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : N.formatDate(t, e) === o;
}
const yn = {
  computeServerRules: $t
}, bn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Cn = ["index"], _n = /* @__PURE__ */ w({
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
    const s = B(), l = k(), i = k([]);
    function c(p = !0) {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = S(l.value), p && R(t.field.events.onReset), ae(() => {
        ie();
      });
    }
    function S(p) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return p == null || p === "" ? !1 : p;
        case "date":
          return p == null || p === "" ? null : N.formatDate(
            N.extractDate(String(p), b.formSettings.backendDateFormat),
            b.formSettings.dateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : N.formatDate(
            N.extractDate(
              String(p),
              b.formSettings.backendDatetimeFormat
            ),
            b.formSettings.datetimeFormat
          );
      }
      return p;
    }
    function m(p) {
      const b = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? null : N.formatDate(
            N.extractDate(String(p), b.formSettings.dateFormat),
            b.formSettings.backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : N.formatDate(
            N.extractDate(String(p), b.formSettings.datetimeFormat),
            b.formSettings.backendDatetimeFormat
          );
      }
      return p;
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
      R(t.field.events.onClear);
    }
    function B() {
      return yn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function O(p) {
      l.value = p;
    }
    function D() {
      return r(l);
    }
    function V() {
      return m(r(l));
    }
    function T(p) {
      i.value = p;
    }
    function I() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !0, R(t.field.events.onHide));
    }
    function d() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !1, R(t.field.events.onUnhide));
    }
    function h(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.readonly = p);
    }
    function C(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hint = p);
    }
    function $(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.cssClass = p);
    }
    function q(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.suffix = p);
    }
    function be(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.prefix = p);
    }
    function re(p) {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.label = p);
    }
    function Z() {
      const p = a();
      return R(t.field.events.onValidated), p;
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
    function _e(p, b, oe) {
      a = p, n = b, u = oe;
    }
    const ne = {
      reset: c,
      clear: y,
      validate: Z,
      isValid: te,
      isInvalid: Ce,
      hide: I,
      unhide: d,
      resetValidation: ie,
      getValueDeserialized: V,
      getValueSerialized: D,
      setupBackendErrors: T,
      setReadonlyState: h,
      setHint: C,
      setCssClass: $,
      setSuffix: q,
      setPrefix: be,
      setLabel: re,
      setValue: O,
      field: t.field
    };
    return e(ne), G(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), G(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? l.value : null,
      (p) => {
        R(p ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), H(() => {
      var b;
      c(!1);
      const p = (b = $e()) == null ? void 0 : b.exposed;
      p && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        p
      );
    }), (p, b) => Ve((v(), z("div", null, [
      t.field.beforeComponent ? (v(), E(Y(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      (v(), E(Y(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: r(s),
        reset: c,
        clear: y,
        getValueDeserialized: V,
        getValueSerialized: D,
        validate: Z,
        modelValueOnUpdate: O,
        registerBehaviourCallbacks: _e
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), E(Y(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ne
      }, null, 8, ["formApi"])) : M("", !0),
      i.value.length > 0 ? (v(), z("div", bn, [
        (v(!0), z(ue, null, ce(i.value, (oe, Se) => (v(), z("div", {
          index: Se,
          class: "flex column"
        }, j(oe), 9, Cn))), 256))
      ])) : M("", !0)
    ], 512)), [
      [De, t.field.hidden !== !0]
    ]);
  }
}), Sn = { class: "flex column" }, Fn = /* @__PURE__ */ w({
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
      validate: S,
      isValid: m,
      isInvalid: y,
      hide: i,
      unhide: c,
      resetValidation: B,
      getFields: O,
      setReadonlyState: D,
      setCssClass: V,
      setIcon: T,
      setLabel: I,
      section: t.section
    };
    function u() {
      t.section.fields.forEach((d) => {
        const h = d.metadata.field_name, C = t.formApi.getFieldByName(h);
        C && a.set(h, C);
      });
    }
    function s() {
      a.forEach((d) => {
        d.reset();
      }), R(t.section.events.onReset);
    }
    function l() {
      a.forEach((d) => {
        d.clear();
      }), R(t.section.events.onClear);
    }
    function i() {
      const d = t.privateFormApi.getSectionRef(
        t.section.name
      );
      d && (a.forEach((h) => {
        h.hide();
      }), d.hidden = !0, R(t.section.events.onHide));
    }
    function c() {
      const d = t.privateFormApi.getSectionRef(
        t.section.name
      );
      d && (a.forEach((h) => {
        h.unhide();
      }), d.hidden = !1, R(t.section.events.onUnhide));
    }
    function S() {
      let d = !0;
      return a.forEach((h) => {
        if (!h.validate()) {
          d = !1;
          return;
        }
      }), R(t.section.events.onValidated), d;
    }
    function m() {
      let d = !0;
      return a.forEach((h) => {
        if (!h.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function y() {
      return !m();
    }
    function B() {
      a.forEach((d) => {
        d.resetValidation();
      });
    }
    function O() {
      return a;
    }
    function D(d) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.readonly = d);
    }
    function V(d) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.cssClass = d);
    }
    function T(d) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.icon = d);
    }
    function I(d) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.label = d);
    }
    return e(n), G(
      () => t.section.events.onIsValid ? m() : null,
      (d) => {
        d && R(t.section.events.onIsValid);
      }
    ), H(() => {
      var h;
      const d = (h = $e()) == null ? void 0 : h.exposed;
      d && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        d
      ), ae(() => {
        u();
      });
    }), (d, h) => Ve((v(), z("div", Sn, [
      t.section.beforeComponent ? (v(), E(Y(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0),
      (v(), E(Y(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: x(() => [
          Ie(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), E(Y(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : M("", !0)
    ], 512)), [
      [De, t.section.hidden !== !0]
    ]);
  }
}), kn = { class: "flex column" }, An = /* @__PURE__ */ w({
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
    const S = ct(), m = k(X.getEmptyFormBeforeInit()), y = k(!1), B = k(!1), O = k(!1), D = k(!1), V = k("create"), T = k({}), I = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Map());
    async function h() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), m.value = X.getForm(
        t.resourceName,
        t.resourceId,
        $(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        K,
        t.eventManager
      ), u = m.value.sections.length, s = m.value.sections.map((f) => f.fields).flat().length, t.resourceId && (V.value = "edit");
    }
    async function C() {
      var F, L, le;
      if (!re())
        return;
      R((F = m.value) == null ? void 0 : F.events.onSubmit), D.value = !0, ne();
      const f = q(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (g.success)
        T.value = {}, V.value === "create" && (V.value = "edit"), a && g.resource_data && (a.resource_data = g.resource_data), n = JSON.stringify(q()), m.value = X.getForm(
          t.resourceName,
          t.resourceId,
          $(),
          {
            form: g.form,
            resource_data: g.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          K,
          t.eventManager
        ), R((le = m.value) == null ? void 0 : le.events.onSubmitSuccess);
      else {
        T.value = {};
        const se = [];
        for (const [W, at] of d.value) {
          const Be = g.errors[W];
          Be && (at.setupBackendErrors(Be), se.push(W));
        }
        Object.entries(g.errors).forEach((W) => {
          se.includes(W[0]) || (T.value[W[0]] = W[1]);
        }), R((L = m.value) == null ? void 0 : L.events.onSubmitUnsuccess);
      }
      D.value = !1;
    }
    function $() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in S) {
        const F = S[g];
        if (F) {
          const L = w({
            inheritAttrs: !1,
            setup(le, { attrs: se, slots: W }) {
              return () => F({
                ...le,
                ...se,
                slots: W
              });
            }
          });
          switch (g) {
            case "sections":
              f.sectionComponent = L;
              break;
            case "actions":
              f.actionComponent = L;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = L;
              break;
            case "association-display":
              f.associationDisplayComponent = L;
              break;
            default:
              f.dynamicComponentRecord[g] = L;
              break;
          }
        }
      }
      return f;
    }
    function q() {
      const f = {};
      for (const [g, F] of d.value)
        f[g] = F.getValueDeserialized();
      return f;
    }
    function be() {
      const f = {};
      for (const [g, F] of d.value)
        f[g] = F.getValueSerialized();
      return f;
    }
    function re() {
      var g;
      let f = !0;
      return d.value.forEach((F) => {
        if (!F.validate()) {
          f = !1;
          return;
        }
      }), R((g = m.value) == null ? void 0 : g.events.onValidated), f;
    }
    function Z() {
      let f = !0;
      return d.value.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function te() {
      return !Z();
    }
    function Ce() {
      var f;
      d.value.forEach((g) => {
        g.reset();
      }), R((f = m.value) == null ? void 0 : f.events.onReset);
    }
    function ie() {
      var f;
      d.value.forEach((g) => {
        g.clear();
      }), R((f = m.value) == null ? void 0 : f.events.onClear);
    }
    function _e() {
      d.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function ne() {
      d.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function p(f) {
      if (a)
        return a.resource_data[f];
    }
    function b(f) {
      return I.value.get(f);
    }
    function oe(f) {
      return [...I.value.values()].at(f);
    }
    function Se() {
      return I.value;
    }
    function Ue(f) {
      return d.value.get(f);
    }
    function Le() {
      return d.value;
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
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Me() {
      return r(V);
    }
    function Ye() {
      return n !== JSON.stringify(q());
    }
    function je(f) {
      m.value && (m.value.context = f);
    }
    function Qe(f) {
      m.value && (m.value.cssClass = f);
    }
    function We(f) {
      m.value && (m.value.readonly = f);
    }
    function Je() {
      return O.value;
    }
    function Ke() {
      return m;
    }
    function Xe(f) {
      var g;
      return (g = m.value) == null ? void 0 : g.sections.find((F) => F.name === f);
    }
    function Ze(f) {
      var g;
      return (g = m.value) == null ? void 0 : g.sections.map((F) => F.fields).flat().find((F) => F.metadata.field_name === f);
    }
    function Re(f, g) {
      I.value.set(f, g), u === I.value.size && (y.value = !0);
    }
    function Ne(f, g) {
      d.value.set(f, g), s === d.value.size && (B.value = !0);
    }
    const Ee = {
      getFormRef: Ke,
      getSectionRef: Xe,
      getFieldRef: Ze,
      registerSectionWrapperRef: Re,
      registerFieldWrapperRef: Ne
    }, et = new Proxy({}, {
      get(f, g) {
        var F;
        return (F = m.value) == null ? void 0 : F[g];
      }
    }), K = {
      getMode: Me,
      getSectionByName: b,
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
      submit: C,
      valuesHasChanged: Ye,
      getInitialValueByFieldName: p,
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
      () => y.value && B.value,
      (f) => {
        var g;
        f && !O.value && (R((g = m.value) == null ? void 0 : g.events.onReady), O.value = !0);
      }
    ), G(
      () => {
        var f;
        return (f = m.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        l == null || l(), l = null, f && (l = G(tt, (g) => {
          var F;
          g && R((F = m.value) == null ? void 0 : F.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var f;
        return (f = m.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        i == null || i(), i = null, f && (i = G(nt, (g) => {
          var F;
          g || R((F = m.value) == null ? void 0 : F.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var f;
        return (f = m.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        c == null || c(), c = null, f && (c = G(
          ot,
          () => {
            var g;
            R((g = m.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), H(async () => {
      He(), await h(), ae(() => {
        n = JSON.stringify(q());
      });
    }), (f, g) => Ve((v(), z("div", kn, [
      J("div", {
        class: Q(m.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), z(ue, null, ce(m.value.sections, (F) => (v(), E(Fn, {
          key: F.name,
          section: F,
          context: t.context,
          formApi: K,
          privateFormApi: Ee,
          registerRef: Re
        }, {
          default: x(() => [
            (v(!0), z(ue, null, ce(F.fields, (L) => (v(), E(_n, {
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
      (v(), E(Y(m.value.orphanErrorsComponent), {
        orphanErrors: T.value,
        formApi: K
      }, null, 8, ["orphanErrors"])),
      (v(), E(Y(m.value.actionComponent), {
        isLoadingSubmit: D.value,
        formApi: K
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [De, O.value]
    ]);
  }
});
export {
  fe as DynamicLogicBuilder,
  P as Submit64,
  An as Submit64Form
};
