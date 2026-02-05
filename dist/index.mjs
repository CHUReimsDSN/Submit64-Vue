var vt = Object.defineProperty;
var yt = (o, e, t) => e in o ? vt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var E = (o, e, t) => yt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as g, createElementBlock as w, createElementVNode as G, createVNode as F, unref as a, mergeProps as Ne, createBlock as R, createCommentVNode as O, normalizeClass as X, toDisplayString as U, resolveDynamicComponent as oe, resolveComponent as bt, normalizeProps as _t, guardReactiveProps as Ct, withCtx as y, createTextVNode as ee, Fragment as ce, renderList as fe, ref as N, onMounted as Y, nextTick as ve, watch as Q, computed as le, markRaw as W, useSlots as He, getCurrentInstance as Ge, withDirectives as qe, vShow as we } from "vue";
import { QBtn as K, QIcon as Se, QItem as me, QItemSection as te, QItemLabel as ne, QInput as Fe, QPopupProxy as De, QDate as Me, QTime as St, QCheckbox as Ft, QSelect as Oe, QColor as Vt, useQuasar as kt, QEditor as xt, QUploader as je, QList as Ae, QSeparator as Qe, QUploaderAddTrigger as Ye, date as L } from "quasar";
const Dt = { class: "flex column" }, At = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Rt = /* @__PURE__ */ H({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(o) {
    const e = o;
    function t() {
      const l = e.formApi.form.formStyle;
      return {
        outline: l.fieldOutlined,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        color: l.fieldColor,
        noCaps: !0
      };
    }
    return (l, n) => (g(), w("div", Dt, [
      G("div", At, [
        F(a(K), Ne(t(), {
          label: "Enregistrer",
          loading: e.formApi.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.form.resetable ? (g(), R(a(K), Ne({ key: 0 }, t(), {
          loading: e.formApi.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : O("", !0),
        e.formApi.form.clearable ? (g(), R(a(K), Ne({ key: 1 }, t(), {
          loading: e.formApi.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : O("", !0)
      ])
    ]));
  }
}), Bt = { class: "flex row items-center" }, Nt = { class: "text-body1 text-weight-medium" }, Tt = { class: "flex column q-gutter-md" }, Et = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (g(), w("div", {
      class: X(e.sectionApi.section.cssClass)
    }, [
      G("div", Bt, [
        e.sectionApi.section.icon ? (g(), R(a(Se), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : O("", !0),
        G("div", Nt, U(e.sectionApi.section.label), 1)
      ]),
      G("div", Tt, [
        (g(), R(oe(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), qt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, l) => {
      const n = bt("q-icon");
      return g(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: l[0] || (l[0] = (i) => e.reset())
      });
    };
  }
}), wt = /* @__PURE__ */ H({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (g(), R(a(me), _t(Ct(e.itemProps)), {
      default: y(() => [
        F(a(te), null, {
          default: y(() => [
            F(a(ne), null, {
              default: y(() => [
                ee(U(e.entry.label), 1)
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
}), Ot = { class: "flex column" }, zt = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (g(), w("div", Ot, [
      (g(!0), w(ce, null, fe(e.formApi.orphanErrors, (n, i) => (g(), w("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, U(i) + " : " + U(n.join(",")), 1))), 128))
    ]));
  }
}), Be = class Be {
  constructor() {
    E(this, "_formSettings");
    E(this, "_formStyle");
    E(this, "_actionComponent");
    E(this, "_orphanErrorsComponent");
    E(this, "_sectionComponent");
    E(this, "_wrapperResetComponent");
    E(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Rt, this._orphanErrorsComponent = zt, this._sectionComponent = Et, this._wrapperResetComponent = qt, this._associationDisplayComponent = wt;
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
E(Be, "_instance", new Be());
let J = Be;
class Re {
  constructor(e) {
    E(this, "formApi");
    E(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const l = e, n = t, i = new $t(l, n, this.formApi);
    return this.events.push(i), new It(i);
  }
  static create(e) {
    return new Re(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((l) => {
      const n = l.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(l.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(l.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            l.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class $t {
  constructor(e, t, l) {
    E(this, "type");
    E(this, "data");
    E(this, "formApi");
    E(this, "action", () => {
    });
    E(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = l;
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
      case "Field is ready":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onReady"
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
      case "Section is ready":
        return {
          target: "section",
          targetName: this.data.sectionName,
          key: "onReady"
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
    E(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ut = { class: "row items-center justify-end" }, Pt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = N(), r = N();
    function s() {
      c.value && c.value.hide();
    }
    function d() {
      return r.value ? r.value.validate() : !1;
    }
    function p() {
      return r.value ? !r.value.hasError : !1;
    }
    function k() {
      r.value && r.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, p, k), i || ve(() => {
        var h;
        (h = r.value) == null || h.resetValidation();
      });
    }), (h, V) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[1] || (V[1] = ($) => e.modelValueOnUpdate($)),
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
      class: X(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        F(a(Se), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            F(a(De), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = ($) => e.modelValueOnUpdate($)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: y(() => [
                    G("div", Ut, [
                      F(a(K), {
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
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Lt = { class: "row items-center justify-end" }, Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = N(), r = N(), s = N();
    function d() {
      c.value && c.value.hide();
    }
    function p() {
      r.value && r.value.hide();
    }
    function k() {
      return s.value ? s.value.validate() : !1;
    }
    function h() {
      return s.value ? !s.value.hasError : !1;
    }
    function V() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(k, h, V), i || ve(() => {
        var $;
        ($ = s.value) == null || $.resetValidation();
      });
    }), ($, q) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": q[2] || (q[2] = (D) => e.modelValueOnUpdate(D)),
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
      class: X(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        F(a(Se), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            F(a(De), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": q[0] || (q[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: y(() => [
                    G("div", Lt, [
                      F(a(K), {
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
        }),
        F(a(Se), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            F(a(De), {
              ref_key: "timePopupProxyRef",
              ref: r,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(a(St), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": q[1] || (q[1] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: y(() => [
                    G("div", Ht, [
                      F(a(K), {
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
}), Mt = { class: "flex column" }, jt = {
  key: 0,
  class: "q-field__bottom"
}, Qt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Yt = /* @__PURE__ */ H({
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
    const e = o, t = N(!0), n = e.formApi.form.formStyle;
    function i() {
      return t.value === !0;
    }
    function c() {
      return t.value === !0;
    }
    function r() {
      t.value = !0;
    }
    return Q(
      () => e.modelValue,
      (s) => {
        for (const d of e.rules)
          if (t.value = d(s), t.value !== !0)
            break;
      }
    ), Y(() => {
      e.registerBehaviourCallbacks(i, c, r);
    }), (s, d) => (g(), w("div", Mt, [
      F(a(Ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (g(), w("div", jt, U(e.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (g(), w("div", Qt, U(t.value), 1)) : O("", !0)
    ]));
  }
}), Wt = /* @__PURE__ */ H({
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
    const e = o, t = N([]), l = N([]), n = N(), i = e.formApi.form, c = i.formSettings, r = i.formStyle, s = c.rulesBehaviour === "lazy";
    function d(q, D) {
      if (q === "") {
        D(() => {
          l.value = [...t.value];
        });
        return;
      }
      D(() => {
        const I = q.toLowerCase();
        l.value = t.value.filter((P) => P.label.toLowerCase().includes(I));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), l.value = e.field.staticSelectOptions ?? [];
    }
    function k() {
      return n.value ? n.value.validate() : !1;
    }
    function h() {
      return n.value ? !n.value.hasError : !1;
    }
    function V() {
      n.value && n.value.resetValidation();
    }
    function $() {
      l.value = [];
    }
    return Y(() => {
      p(), e.registerBehaviourCallbacks(k, h, V, void 0, $);
    }), (q, D) => (g(), R(a(Oe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (I) => e.modelValueOnUpdate(I)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(r).fieldOutlined,
      filled: a(r).fieldFilled,
      standout: a(r).fieldStandout,
      borderless: a(r).fieldBorderless,
      rounded: a(r).fieldRounded,
      square: a(r).fieldSquare,
      dense: a(r).fieldDense,
      hideBottomSpace: a(r).fieldHideBottomSpace,
      color: a(r).fieldColor,
      bgColor: a(r).fieldBgColor,
      class: X(e.field.cssClass),
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
      onClear: e.clear,
      onFilter: d
    }, {
      "no-option": y(() => [
        F(a(me), {
          dense: a(r).fieldDense
        }, {
          default: y(() => [
            F(a(te), null, {
              default: y(() => [
                F(a(ne), null, {
                  default: y(() => [
                    ee(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ie = "__init", Ue = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, c = n.rulesBehaviour === "lazy", r = N([]), s = N(
      k()
    ), d = N(), p = N(Ie);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function h(v, u) {
      if (v === p.value) {
        u(() => {
        });
        return;
      }
      const m = e.formApi.getAssociationDataCallback();
      s.value = k(), p.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, m({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((S) => {
        u(() => {
          r.value = S.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = k();
      });
    }
    function V() {
      var u, m;
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (r.value = [
        {
          label: ((u = e.field.associationData[0]) == null ? void 0 : u.label) ?? "???",
          value: v,
          data: (m = e.field.associationData[0]) == null ? void 0 : m.data
        }
      ]);
    }
    function $() {
      return d.value ? d.value.validate() : !1;
    }
    function q() {
      return d.value ? !d.value.hasError : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    function I() {
      s.value = k(), r.value = [], p.value = Ie;
    }
    function P(v) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === u && u !== -1) {
        const m = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: m.resourceName,
          resourceId: m.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: m.context
        }).then((S) => {
          r.value = r.value.concat(
            S.rows
          ), s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), S.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        $,
        q,
        D,
        V,
        I
      ), ve(() => {
        V();
      });
    }), (v, u) => (g(), R(a(Oe), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => e.modelValueOnUpdate(m)),
      label: e.field.label,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: X(e.field.cssClass),
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: h,
      onVirtualScroll: P
    }, {
      "no-option": y(() => [
        F(a(me), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            F(a(te), null, {
              default: y(() => [
                F(a(ne), null, {
                  default: y(() => [
                    ee(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: y((m) => [
        (g(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Pe = "__init", Le = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, c = n.rulesBehaviour === "lazy", r = N([]), s = N(
      k()
    ), d = N(), p = N(Pe);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function h(v, u) {
      if (v === p.value) {
        u(() => {
        });
        return;
      }
      const m = e.formApi.getAssociationDataCallback();
      s.value = k(), p.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, m({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((S) => {
        u(() => {
          r.value = S.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = k();
      });
    }
    function V() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (r.value = v.map((u, m) => ({
        label: e.field.associationData[m].label ?? "???",
        value: u,
        data: e.field.associationData[m].data
      })));
    }
    function $() {
      return d.value ? d.value.validate() : !1;
    }
    function q() {
      return d.value ? !d.value.hasError : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    function I() {
      s.value = k(), r.value = [], p.value = Pe;
    }
    function P(v) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === u && u !== -1) {
        const m = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: m.resourceName,
          resourceId: m.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: m.context
        }).then((S) => {
          r.value = r.value.concat(
            S.rows
          ), s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), S.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        $,
        q,
        D,
        V,
        I
      ), ve(() => {
        V();
      });
    }), (v, u) => (g(), R(a(Oe), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => e.modelValueOnUpdate(m)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: X(e.field.cssClass),
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: e.clear,
      onFilter: h,
      onVirtualScroll: P
    }, {
      "no-option": y(() => [
        F(a(me), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            F(a(te), null, {
              default: y(() => [
                F(a(ne), null, {
                  default: y(() => [
                    ee(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: y((m) => [
        (g(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Te = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = N();
    function r() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d);
    }), (p, k) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (h) => e.modelValueOnUpdate(h)),
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
      class: X(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Jt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = N();
    function r() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d);
    }), (p, k) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (h) => e.modelValueOnUpdate(h)),
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
      class: X(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), Kt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = N();
    function r() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d);
    }), (p, k) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[1] || (k[1] = (h) => e.modelValueOnUpdate(h)),
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
      class: X(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        F(a(Se), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            F(a(De), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (h) => e.modelValueOnUpdate(h))
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
}), Xt = /* @__PURE__ */ H({
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
    const e = o, t = kt(), n = e.formApi.form.formStyle, i = [
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
    ], c = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, r = N();
    function s() {
      return !!r.value;
    }
    function d() {
      return !!r.value;
    }
    function p() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, d, p);
    }), (k, h) => e.modelValue ? (g(), R(a(xt), {
      key: 0,
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (V) => e.modelValueOnUpdate(V)),
      toolbar: i,
      fonts: c,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: X(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : O("", !0);
  }
}), Zt = /* @__PURE__ */ H({
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
    const t = o.formApi.form, l = t.formSettings;
    return t.formStyle, l.rulesBehaviour, (n, i) => " TODO json edit ? ";
  }
});
function z(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function pe(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
const en = { class: "flex column" }, tn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, nn = { class: "col" }, an = { class: "q-uploader__title" }, on = {
  key: 0,
  class: "caption"
}, ln = {
  key: 0,
  class: "flex column"
}, rn = {
  key: 2,
  class: "flex column"
}, sn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, un = /* @__PURE__ */ H({
  __name: "AttachmentHasOneField",
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
    const e = o, l = e.formApi.form.formStyle, n = N(null);
    function i() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), D();
    }
    function c() {
      var m;
      let u = e.modelValue;
      u.add = [], u.delete = ((m = e.field.attachmentData) == null ? void 0 : m.map((x) => x.attachment_id)) ?? [], e.modelValueOnUpdate(u), D();
    }
    function r() {
      return D(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function p(u) {
      return new Promise((m) => {
        const x = new Blob([u]), S = new FileReader();
        S.onload = (M) => {
          var ie;
          const se = ((ie = M.target) == null ? void 0 : ie.result) ?? "", [re, Z] = se.split(",");
          m(Z);
        }, S.readAsDataURL(x);
      });
    }
    async function k(u) {
      return {
        key: `${u.lastModified}${u.name}`,
        size: u.size,
        filename: u.name,
        contentType: u.type,
        base64: await p(await u.arrayBuffer())
      };
    }
    async function h(u) {
      if (!u[0])
        return;
      const m = await k(u[0]);
      let x = e.modelValue;
      x.add = [m], e.modelValueOnUpdate(x), D();
    }
    function V(u) {
      if (!u[0])
        return;
      let m = e.modelValue;
      m.add = [], m.delete = [], e.modelValueOnUpdate(m), D();
    }
    function $(u) {
      let m = e.modelValue;
      m.delete = [u.attachment_id], e.modelValueOnUpdate(m), D();
    }
    function q() {
      let u = e.modelValue;
      u.delete = [], e.modelValueOnUpdate(u), D();
    }
    function D() {
      n.value = null;
      for (const u of e.rules) {
        const m = u(e.modelValue);
        if (typeof m == "string") {
          n.value = m;
          break;
        }
      }
    }
    const I = le(() => (e.field.attachmentData ?? []).length === 0), P = le(() => e.modelValue ? e.modelValue.delete : []), v = le(() => {
      var u, m;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((m = e.field.attachmentData) == null ? void 0 : m.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (u, m) => (g(), w("div", en, [
      F(a(je), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: h,
        onRemoved: V,
        style: { width: "inherit" }
      }, {
        header: y((x) => [
          G("div", tn, [
            G("div", nn, [
              G("div", an, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", on, U(e.field.hint), 1)) : O("", !0)
            ]),
            x.canAddFiles && v.value ? (g(), R(a(K), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: x.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                F(a(Ye))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: y((x) => [
          I.value ? O("", !0) : (g(), w("div", ln, [
            m[0] || (m[0] = G("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            F(a(Ae), { separator: "" }, {
              default: y(() => [
                (g(!0), w(ce, null, fe(e.field.attachmentData ?? [], (S) => (g(), R(a(me), {
                  key: S.attachment_id
                }, {
                  default: y(() => [
                    F(a(te), null, {
                      default: y(() => [
                        F(a(ne), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            ee(U(S.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(a(ne), { caption: "" }, {
                          default: y(() => [
                            ee(U(a(pe)(S.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (g(), R(a(te), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        P.value.includes(S.attachment_id) ? O("", !0) : (g(), R(a(K), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (M) => $(S)
                        }, null, 8, ["disable", "onClick"])),
                        P.value.includes(S.attachment_id) && e.modelValue.add.length === 0 ? (g(), R(a(K), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: q
                        }, null, 8, ["disable"])) : O("", !0)
                      ]),
                      _: 2
                    }, 1024)) : O("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !I.value && x.files.length > 0 ? (g(), R(a(Qe), { key: 1 })) : O("", !0),
          x.files.length > 0 ? (g(), w("div", rn, [
            m[1] || (m[1] = G("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            F(a(Ae), { separator: "" }, {
              default: y(() => [
                (g(!0), w(ce, null, fe(x.files, (S) => (g(), R(a(me), {
                  key: S.__key
                }, {
                  default: y(() => [
                    F(a(te), null, {
                      default: y(() => [
                        F(a(ne), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            ee(U(S.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(a(ne), { caption: "" }, {
                          default: y(() => [
                            ee(U(S.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    F(a(te), {
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        F(a(K), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (M) => x.removeFile(S)
                        }, null, 8, ["disable", "onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1024)
          ])) : O("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (g(), w("div", sn, U(n.value), 1)) : O("", !0)
    ]));
  }
}), dn = { class: "flex column" }, cn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, fn = { class: "col" }, mn = { class: "q-uploader__title" }, pn = {
  key: 0,
  class: "caption"
}, gn = {
  key: 0,
  class: "flex column"
}, hn = { class: "text-weight-medium text-body2" }, vn = {
  key: 2,
  class: "flex column"
}, yn = { class: "text-weight-medium text-body2" }, bn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, _n = /* @__PURE__ */ H({
  __name: "AttachmentHasManyField",
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
    const e = o, l = e.formApi.form.formStyle, n = N(null);
    function i() {
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), D();
    }
    function c() {
      var u;
      let v = e.modelValue;
      v.add = [], v.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((m) => m.attachment_id)) ?? [], e.modelValueOnUpdate(v), D();
    }
    function r() {
      return D(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function p(v) {
      return new Promise((u) => {
        const m = new Blob([v]), x = new FileReader();
        x.onload = (S) => {
          var Z;
          const M = ((Z = S.target) == null ? void 0 : Z.result) ?? "", [se, re] = M.split(",");
          u(re);
        }, x.readAsDataURL(m);
      });
    }
    async function k(v) {
      return {
        key: `${v.lastModified}${v.name}`,
        size: v.size,
        filename: v.name,
        contentType: v.type,
        base64: await p(await v.arrayBuffer())
      };
    }
    async function h(v) {
      for (const u of v) {
        const m = await k(u);
        let x = e.modelValue;
        x.add.push(m), e.modelValueOnUpdate(x);
      }
      D();
    }
    async function V(v) {
      for (const u of v) {
        const m = await k(u);
        let x = e.modelValue;
        x.add = x.add.filter((S) => S.key !== m.key), e.modelValueOnUpdate(x);
      }
      D();
    }
    function $(v) {
      let u = e.modelValue;
      u.delete.push(v.attachment_id), e.modelValueOnUpdate(u), D();
    }
    function q(v) {
      let u = e.modelValue;
      u.delete = u.delete.filter((m) => m !== v.attachment_id), e.modelValueOnUpdate(u), D();
    }
    function D() {
      n.value = null;
      for (const v of e.rules) {
        const u = v(e.modelValue);
        if (typeof u == "string") {
          n.value = u;
          break;
        }
      }
    }
    const I = le(() => (e.field.attachmentData ?? []).length === 0), P = le(() => e.modelValue ? e.modelValue.delete : []);
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (v, u) => (g(), w("div", dn, [
      F(a(je), {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: h,
        onRemoved: V,
        style: { width: "inherit" }
      }, {
        header: y((m) => [
          G("div", cn, [
            G("div", fn, [
              G("div", mn, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", pn, U(e.field.hint), 1)) : O("", !0)
            ]),
            m.canAddFiles ? (g(), R(a(K), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: m.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                F(a(Ye))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: y((m) => {
          var x;
          return [
            I.value ? O("", !0) : (g(), w("div", gn, [
              G("div", hn, "Fichier" + U((((x = e.field.attachmentData) == null ? void 0 : x.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              F(a(Ae), { separator: "" }, {
                default: y(() => [
                  (g(!0), w(ce, null, fe(e.field.attachmentData ?? [], (S) => (g(), R(a(me), {
                    key: S.attachment_id
                  }, {
                    default: y(() => [
                      F(a(te), null, {
                        default: y(() => [
                          F(a(ne), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              ee(U(S.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(a(ne), { caption: "" }, {
                            default: y(() => [
                              ee(U(a(pe)(S.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (g(), R(a(te), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          P.value.includes(S.attachment_id) ? O("", !0) : (g(), R(a(K), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (M) => $(S)
                          }, null, 8, ["disable", "onClick"])),
                          P.value.includes(S.attachment_id) && e.modelValue.add.length === 0 ? (g(), R(a(K), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (M) => q(S)
                          }, null, 8, ["disable", "onClick"])) : O("", !0)
                        ]),
                        _: 2
                      }, 1024)) : O("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              })
            ])),
            !I.value && m.files.length > 0 ? (g(), R(a(Qe), { key: 1 })) : O("", !0),
            m.files.length > 0 ? (g(), w("div", vn, [
              G("div", yn, "Fichier" + U(m.files.length > 0 ? "s" : "") + " à ajouter", 1),
              F(a(Ae), { separator: "" }, {
                default: y(() => [
                  (g(!0), w(ce, null, fe(m.files, (S) => (g(), R(a(me), {
                    key: S.__key
                  }, {
                    default: y(() => [
                      F(a(te), null, {
                        default: y(() => [
                          F(a(ne), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              ee(U(S.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(a(ne), { caption: "" }, {
                            default: y(() => [
                              ee(U(S.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      F(a(te), {
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          F(a(K), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (M) => m.removeFile(S)
                          }, null, 8, ["disable", "onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ])) : O("", !0)
          ];
        }),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (g(), w("div", bn, U(n.value), 1)) : O("", !0)
    ]));
  }
});
class he {
  constructor(e, t, l, n, i, c, r, s, d) {
    E(this, "resourceName");
    E(this, "resourceId");
    E(this, "formMetadataAndData");
    E(this, "context");
    E(this, "formSettings");
    E(this, "formStyle");
    E(this, "actionComponent");
    E(this, "orphanErrorsComponent");
    E(this, "sectionComponent");
    E(this, "wrapperResetComponent");
    E(this, "associationDisplayComponent");
    E(this, "dynamicComponentRecord");
    E(this, "formApi");
    E(this, "registerEventCallback");
    this.dynamicComponentRecord = l.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = r, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...J.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...c,
      ...J.getGlobalFormStyle()
    }, this.actionComponent = l.actionComponent ?? J.getGlobalActionComponent(), this.orphanErrorsComponent = l.orphanErrorsComponent ?? J.getGlobalOrphanErrorComponent(), this.sectionComponent = l.sectionComponent ?? J.getGlobalSectionComponent(), this.wrapperResetComponent = l.wrapperResetComponent ?? J.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l.associationDisplayComponent ?? J.getGlobalAssociationDisplayComponent(), this.registerEventCallback = d ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...J.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: J.getGlobalFormStyle(),
      events: {},
      actionComponent: W(J.getGlobalActionComponent()),
      orphanErrorsComponent: W(J.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: W(J.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, l, n, i, c, r, s, d) {
    return new he(
      e,
      t,
      l,
      n,
      i,
      c,
      r,
      s,
      d
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Re.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), l = Re.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (c, r) => {
        const s = [];
        c.fields.forEach((V) => {
          const $ = this.dynamicComponentRecord[`field-${V.field_name}-before`], q = he.getFieldComponentByFormFieldType(V), D = this.dynamicComponentRecord[`field-${V.field_name}-after`], I = {
            associationDisplayComponent: W(
              this.associationDisplayComponent
            ),
            regularFieldType: he.getRegularFieldTypeByFieldType(
              V.field_type
            )
          };
          let P = V.label;
          this.formSettings.requiredFieldsHasAsterisk && V.rules.find((u) => u.type === "required") && (P = P.concat("*"));
          const v = {
            type: V.field_type,
            extraType: V.field_extra_type,
            metadata: Object.freeze(V),
            label: P,
            hint: V.hint ?? void 0,
            prefix: V.prefix ?? void 0,
            suffix: V.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? V.readonly ?? void 0,
            cssClass: V.css_class ?? void 0,
            staticSelectOptions: V.static_select_options,
            associationData: V.field_association_data,
            attachmentData: V.field_attachment_data,
            rules: V.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: $ ? W($) : void 0,
            mainComponent: W(q),
            afterComponent: D ? W(D) : void 0,
            events: l.fields[V.field_name] ?? {},
            componentOptions: I
          };
          s.push(v), t.add(V.field_name);
        });
        const d = this.dynamicComponentRecord[`section-${c.name ?? r}-before`], p = this.sectionComponent, k = this.dynamicComponentRecord[`section-${c.name ?? r}-after`], h = {
          label: c.label ?? void 0,
          icon: c.icon ?? void 0,
          cssClass: c.css_class ?? void 0,
          hidden: !1,
          name: c.name ?? r.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? void 0,
          events: l.sections[c.name ?? r.toString()] ?? {},
          beforeComponent: d ? W(d) : void 0,
          mainComponent: W(p),
          fieldsComponent: void 0,
          afterComponent: k ? W(k) : void 0,
          fields: s
        };
        n.push(h);
      }
    );
    const i = {
      sections: n,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: l.form,
      actionComponent: W(this.actionComponent),
      orphanErrorsComponent: W(this.orphanErrorsComponent),
      wrapperResetComponent: W(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((c, r) => c + r.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), i;
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
            return Kt;
          case "wysiwyg":
            return Xt;
          default:
            return Te;
        }
      case "text":
        return Te;
      case "number":
        return Jt;
      case "date":
        return Pt;
      case "datetime":
        return Gt;
      case "select":
        return Wt;
      case "selectBelongsTo":
        return Ue;
      case "selectHasMany":
        return Le;
      case "selectHasAndBelongsToMany":
        return Le;
      case "selectHasOne":
        return Ue;
      case "checkbox":
        return Yt;
      case "object":
        return Zt;
      case "attachmentHasOne":
        return un;
      case "attachmentHasMany":
        return _n;
      default:
        return Te;
    }
  }
}
const Cn = { class: "flex column" }, Sn = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = null, n = null, i = null;
    const c = He(), r = {
      softReset: p,
      reset: k,
      clear: h,
      validate: q,
      isValid: D,
      isInvalid: I,
      hide: V,
      unhide: $,
      resetValidation: P,
      getFields: v,
      setReadonlyState: u,
      setCssClass: m,
      setIcon: x,
      setLabel: S,
      section: t.section
    }, s = N(/* @__PURE__ */ new Map());
    function d() {
      t.section.fields.forEach((b) => {
        const A = b.metadata.field_name, j = t.formApi.getFieldByName(A);
        j && s.value.set(A, j);
      });
    }
    function p() {
      s.value.forEach((b) => {
        b.softReset();
      });
    }
    function k() {
      s.value.forEach((b) => {
        b.reset();
      }), z(t.section.events.onReset);
    }
    function h() {
      s.value.forEach((b) => {
        b.clear();
      }), z(t.section.events.onClear);
    }
    function V() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((A) => {
        A.hide();
      }), b.hidden = !0, z(t.section.events.onHide));
    }
    function $() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((A) => {
        A.unhide();
      }), b.hidden = !1, z(t.section.events.onUnhide));
    }
    function q() {
      let b = !0;
      return s.value.forEach((A) => {
        if (!A.validate()) {
          b = !1;
          return;
        }
      }), z(t.section.events.onValidated), b;
    }
    function D() {
      let b = !0;
      return s.value.forEach((A) => {
        if (!A.isValid()) {
          b = !1;
          return;
        }
      }), b;
    }
    function I() {
      return !D();
    }
    function P() {
      s.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function v() {
      return s.value;
    }
    function u(b) {
      const A = t.privateFormApi.getSectionRef(
        t.section.name
      );
      A && (A.readonly = b);
    }
    function m(b) {
      const A = t.privateFormApi.getSectionRef(
        t.section.name
      );
      A && (A.cssClass = b);
    }
    function x(b) {
      const A = t.privateFormApi.getSectionRef(
        t.section.name
      );
      A && (A.icon = b);
    }
    function S(b) {
      const A = t.privateFormApi.getSectionRef(
        t.section.name
      );
      A && (A.label = b);
    }
    function M() {
      const b = {};
      for (const [A, j] of s.value)
        b[A] = j.getValueSerialized();
      return b;
    }
    function se() {
      const b = c.default;
      if (!b) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const A = H({
        inheritAttrs: !1,
        setup(j, { attrs: ye, slots: _e }) {
          return () => b(
            {
              ...j,
              ...ye
            },
            _e
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, W(A));
    }
    e(r);
    const re = le(() => D()), Z = le(() => I()), ie = le(() => M());
    return Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        l == null || l(), l = null, b && (l = Q(re, (A) => {
          A && z(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = Q(Z, (A) => {
          var j;
          A && z((j = t.section) == null ? void 0 : j.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onUpdate;
      },
      (b) => {
        i == null || i(), i = null, b && (i = Q(
          ie,
          () => {
            var A;
            z((A = t.section) == null ? void 0 : A.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var A;
      se();
      const b = (A = Ge()) == null ? void 0 : A.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), ve(() => {
        var j;
        d(), z((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (b, A) => qe((g(), w("div", Cn, [
      t.section.beforeComponent ? (g(), R(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : O("", !0),
      (g(), R(oe(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (g(), R(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : O("", !0)
    ], 512)), [
      [we, t.section.hidden !== !0]
    ]);
  }
});
function Fn(o, e) {
  const t = o.rules ?? [], l = o.type, n = e.form, i = (d, p, k) => d[p] ? k ? () => c(d[p]) : () => d[p] : d.compare_to ? () => {
    var h;
    return ((h = e.getFieldByName(d.compare_to)) == null ? void 0 : h.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (d) => String(
    L.formatDate(
      L.extractDate(d, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), r = [], s = [];
  switch (l) {
    case "date":
      r.push(Ee(n.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(Ee(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((d) => {
    const p = d;
    switch (p.type) {
      case "required":
        r.push(Vn());
        break;
      case "absence":
        r.push(xn());
        break;
      case "acceptance":
        r.push(Dn());
        break;
      case "inclusion":
        r.push(We(p.including));
        break;
      case "exclusion":
        r.push(kn(p.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        s.push("allowNull");
        break;
      case "allowBlank":
        s.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(Bn());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Nn(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Tn(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          En(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          qn(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          wn(i(p, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          On(
            i(p, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(zn());
        break;
      case "numberNumericOnly":
        r.push($n());
        break;
      case "numberEvenOnly":
        r.push(In());
        break;
      case "numberOddOnly":
        r.push(Un());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Pn(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Ln(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Hn(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Gn(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          Qn(
            i(p, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          jn(i(p, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Mn(
            () => p.min,
            () => p.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Yn(
            i(p, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(Ee(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          Wn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Jn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Kn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Xn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Zn(
            i(p, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          ea(
            i(p, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          na()
        );
        break;
      case "allowFileContentType":
        r.push(
          aa(
            i(p, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          oa(
            i(p, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          ra(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          la(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          ia(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          sa(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          ua(
            i(p, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          da(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ca(
            i(p, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return Rn(r);
      case "allowNull":
        return An(r);
    }
  }) : r;
}
function Vn() {
  return (o) => !!o || "Ce champ est requis";
}
function We(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function kn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${We.toString()}`
  );
}
function xn() {
  return (o) => !o || "Ce champ doit être vide";
}
function Dn() {
  return (o) => !!o || "Doit être accepté";
}
function An(o) {
  return (e) => (e === null || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function Rn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function Bn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Nn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Tn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function En(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function qn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function wn(o, e) {
  return (t) => {
    const l = o();
    return Number(t) === l || `Égale à ${l}`;
  };
}
function On(o, e) {
  return (t) => {
    const l = o();
    return Number(t) !== l || `Doit être différent de ${o}`;
  };
}
function zn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function $n() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function In() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Un() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Pn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Ln(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Hn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Gn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Mn(o, e) {
  return (t) => {
    const l = o(), n = e();
    return String(t).length >= l && String(t).length <= n || `Entre ${l} et ${n}`;
  };
}
function jn(o, e) {
  return (t) => {
    const l = o();
    return String(t) === l || `Égale à ${l}`;
  };
}
function Qn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Yn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Wn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n <= i || `Inf. ou égal à ${l}`;
  };
}
function Jn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n < i || `Inf. à ${l}`;
  };
}
function Kn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n >= i || `Sup. ou égal à ${l}`;
  };
}
function Xn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n > i || `Sup. à ${l}`;
  };
}
function Zn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n === i || `Égale à ${n}`;
  };
}
function ea(o, e) {
  return (t) => {
    const l = o();
    return L.extractDate(String(t), e) !== L.extractDate(l, e) || `Doit être différent de ${l}`;
  };
}
function Ee(o) {
  return (e) => e == null || e === "" ? !0 : ta(e, o) || `Date invalide. Format : ${o}`;
}
function ta(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = L.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : L.formatDate(t, e) === o;
}
function na() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function aa(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    t.add.forEach((c) => {
      n && (l.includes(c.contentType) || (n = !1));
    });
    const i = o.length > 1;
    return n || `Type${i ? "s" : ""} autorisé${i ? "s" : ""} : ${l.join(",")}`;
  };
}
function oa(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && l !== i.size && (n = !1);
    }), n || `Taille par fichier ${pe(l)}`;
  };
}
function la(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < l && (n = !1);
    }), n || `Taille par fichier min. ${pe(l)}`;
  };
}
function ra(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > l && (n = !1);
    }), n || `Taille par fichier max. ${pe(l)}`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length <= l || `${l} fichier${l > 1 ? "s" : ""} max.`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length >= l || `${l} fichier${l > 1 ? "s" : ""} min.`;
  };
}
function ua(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) <= l || `${pe(l)} max.`;
  };
}
function da(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) >= l || `${pe(l)} min.`;
  };
}
function ca(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) === l || `Taille totale ${pe(l)}`;
  };
}
const fa = {
  computeServerRules: Fn
}, ma = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, pa = ["index"], ga = /* @__PURE__ */ H({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = () => !0, n = () => !0, i = () => {
    }, c = () => {
    }, r = () => {
    };
    const s = D(), d = N(), p = N([]);
    function k() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = V(d.value);
    }
    function h() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = V(d.value), z(t.field.events.onReset), c(), ve(() => {
        ye();
      });
    }
    function V(_) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return _ == null || _ === "" ? !1 : _;
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), B.formSettings.backendDateFormat),
            B.formSettings.dateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(
              String(_),
              B.formSettings.backendDatetimeFormat
            ),
            B.formSettings.datetimeFormat
          );
        case "attachmentHasOne":
        case "attachmentHasMany":
          return {
            add: [],
            delete: []
          };
      }
      return _;
    }
    function $(_) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), B.formSettings.dateFormat),
            B.formSettings.backendDateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), B.formSettings.datetimeFormat),
            B.formSettings.backendDatetimeFormat
          );
        case "selectBelongsTo":
        case "selectHasOne":
          if (_ === void 0)
            return null;
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
          if (_ === void 0)
            return [];
      }
      return _;
    }
    function q() {
      switch (t.field.type) {
        case "string":
          d.value = "";
          break;
        case "checkbox":
          d.value = !1;
          break;
        case "date":
          d.value = null;
          break;
        case "datetime":
          d.value = null;
          break;
        case "number":
          d.value = null;
          break;
        case "select":
          d.value = void 0;
          break;
        case "text":
          d.value = "";
          break;
        case "object":
          d.value = {};
          break;
        case "selectBelongsTo":
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
        case "selectHasOne":
          d.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          d.value = {
            add: [],
            delete: []
          };
          break;
      }
      r(), z(t.field.events.onClear);
    }
    function D() {
      return fa.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function I(_) {
      d.value = _;
    }
    function P() {
      return a(d);
    }
    function v() {
      return $(a(d));
    }
    function u(_) {
      p.value = _;
    }
    function m() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !0, z(t.field.events.onHide));
    }
    function x() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !1, z(t.field.events.onUnhide));
    }
    function S(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.readonly = _);
    }
    function M(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.hint = _);
    }
    function se(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.cssClass = _);
    }
    function re(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.suffix = _);
    }
    function Z(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.prefix = _);
    }
    function ie(_) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.label = _);
    }
    function b() {
      const _ = l();
      return z(t.field.events.onValidated), _;
    }
    function A() {
      return n();
    }
    function j() {
      return !A();
    }
    function ye() {
      return i();
    }
    function _e(_, B, ue, be, Ve) {
      l = _, n = B, i = ue, be && (c = be), Ve && (r = Ve);
    }
    const Ce = {
      softReset: k,
      reset: h,
      clear: q,
      validate: b,
      isValid: A,
      isInvalid: j,
      hide: m,
      unhide: x,
      resetValidation: ye,
      getValueDeserialized: v,
      getValueSerialized: P,
      setupBackendErrors: u,
      setReadonlyState: S,
      setHint: M,
      setCssClass: se,
      setSuffix: re,
      setPrefix: Z,
      setLabel: ie,
      setValue: I,
      field: t.field
    };
    return e(Ce), Q(
      () => t.field.events.onUpdate ? d.value : null,
      () => {
        z(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? d.value : null,
      (_) => {
        z(_ ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var B, ue;
      k();
      const _ = (B = Ge()) == null ? void 0 : B.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), z((ue = t.field) == null ? void 0 : ue.events.onReady);
    }), (_, B) => qe((g(), w("div", null, [
      t.field.beforeComponent ? (g(), R(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Ce
      }, null, 8, ["formApi"])) : O("", !0),
      (g(), R(oe(t.field.mainComponent), {
        modelValue: d.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: h,
        clear: q,
        getValueDeserialized: v,
        getValueSerialized: P,
        validate: b,
        modelValueOnUpdate: I,
        registerBehaviourCallbacks: _e
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (g(), R(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Ce
      }, null, 8, ["formApi"])) : O("", !0),
      p.value.length > 0 ? (g(), w("div", ma, [
        (g(!0), w(ce, null, fe(p.value, (ue, be) => (g(), w("div", {
          index: be,
          class: "flex column"
        }, U(ue), 9, pa))), 256))
      ])) : O("", !0)
    ], 512)), [
      [we, t.field.hidden !== !0]
    ]);
  }
}), ha = { class: "flex column" }, _a = /* @__PURE__ */ H({
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
    let l = null, n = "", i = 0, c = 0, r = null, s = null, d = null, p = null;
    const k = He(), h = N(he.getEmptyFormBeforeInit()), V = N(!1), $ = N(!1), q = N(!1), D = N(!1), I = N("create"), P = N({}), v = N(/* @__PURE__ */ new Map()), u = N(/* @__PURE__ */ new Map());
    async function m() {
      l = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), h.value = he.getForm(
        t.resourceName,
        t.resourceId,
        S(),
        l,
        t.formSettings,
        t.formStyle,
        t.context,
        ge,
        t.eventManager
      ), i = h.value.sections.length, c = h.value.sections.map((f) => f.fields).flat().length, t.resourceId && (I.value = "edit");
    }
    async function x() {
      var T, ae, ke;
      if (!re())
        return;
      z((T = h.value) == null ? void 0 : T.events.onSubmit), D.value = !0, _e();
      const f = M(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (p = C.resource_data, C.success)
        P.value = {}, I.value === "create" && (I.value = "edit"), l && C.resource_data && (l.resource_data = C.resource_data), h.value = he.getForm(
          t.resourceName,
          t.resourceId,
          S(),
          {
            form: C.form,
            resource_data: C.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ge,
          t.eventManager
        ), b(), n = JSON.stringify(M()), z((ke = h.value) == null ? void 0 : ke.events.onSubmitSuccess);
      else {
        P.value = {};
        const xe = [];
        for (const [de, ht] of u.value) {
          const $e = C.errors[de];
          $e && (ht.setupBackendErrors($e), xe.push(de));
        }
        Object.entries(C.errors).forEach((de) => {
          xe.includes(de[0]) || (P.value[de[0]] = de[1]);
        }), z((ae = h.value) == null ? void 0 : ae.events.onSubmitUnsuccess);
      }
      D.value = !1;
    }
    function S() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const C in k) {
        const T = k[C];
        if (T) {
          const ae = H({
            inheritAttrs: !1,
            setup(ke, { attrs: xe, slots: de }) {
              return () => T({
                ...ke,
                ...xe,
                innerSlots: de
              });
            }
          });
          switch (C) {
            case "sections":
              f.sectionComponent = ae;
              break;
            case "actions":
              f.actionComponent = ae;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = ae;
              break;
            case "association-display":
              f.associationDisplayComponent = ae;
              break;
            default:
              f.dynamicComponentRecord[C] = ae;
              break;
          }
        }
      }
      return f;
    }
    function M() {
      const f = {};
      for (const [C, T] of u.value)
        f[C] = T.getValueDeserialized();
      return f;
    }
    function se() {
      const f = {};
      for (const [C, T] of u.value)
        f[C] = T.getValueSerialized();
      return f;
    }
    function re() {
      var C;
      let f = !0;
      return u.value.forEach((T) => {
        if (!T.validate()) {
          f = !1;
          return;
        }
      }), z((C = h.value) == null ? void 0 : C.events.onValidated), f;
    }
    function Z() {
      let f = !0;
      return u.value.forEach((C) => {
        if (!C.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function ie() {
      return !Z();
    }
    function b() {
      v.value.forEach((f) => {
        f.softReset();
      });
    }
    function A() {
      var f;
      u.value.forEach((C) => {
        C.reset();
      }), z((f = h.value) == null ? void 0 : f.events.onReset);
    }
    function j() {
      var f;
      u.value.forEach((C) => {
        C.clear();
      }), z((f = h.value) == null ? void 0 : f.events.onClear);
    }
    function ye() {
      u.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function _e() {
      u.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function Ce(f) {
      if (l)
        return l.resource_data[f];
    }
    function _(f) {
      return v.value.get(f);
    }
    function B(f) {
      return [...v.value.values()].at(f);
    }
    function ue() {
      return v.value;
    }
    function be(f) {
      return u.value.get(f);
    }
    function Ve() {
      return u.value;
    }
    function Je() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ke() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function Xe() {
      return a(I);
    }
    function Ze() {
      return n !== JSON.stringify(M());
    }
    function et(f) {
      h.value && (h.value.context = f);
    }
    function tt(f) {
      h.value && (h.value.cssClass = f);
    }
    function nt(f) {
      h.value && (h.value.readonly = f);
    }
    function at() {
      return q.value;
    }
    function ot() {
      return p;
    }
    function lt() {
      return h;
    }
    function rt(f) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.find((T) => T.name === f);
    }
    function it(f) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.map((T) => T.fields).flat().find((T) => T.metadata.field_name === f);
    }
    function st(f, C) {
      v.value.set(f, C), i === v.value.size && (V.value = !0);
    }
    function ut(f, C) {
      u.value.set(f, C), c === u.value.size && ($.value = !0);
    }
    function dt(f, C) {
      f.fieldsComponent = C;
    }
    const ze = {
      getFormRef: lt,
      getSectionRef: rt,
      getFieldRef: it,
      registerSectionWrapperRef: st,
      registerFieldWrapperRef: ut,
      setSectionFieldComponent: dt
    }, ct = new Proxy({}, {
      get(f, C) {
        var T;
        return (T = h.value) == null ? void 0 : T[C];
      }
    }), ft = new Proxy({}, {
      get(f, C) {
        var T;
        return (T = P.value) == null ? void 0 : T[C];
      }
    }), ge = {
      getMode: Xe,
      getSectionByName: _,
      getSectionByIndex: B,
      getSections: ue,
      getFieldByName: be,
      getFields: Ve,
      validate: re,
      isValid: Z,
      isInvalid: ie,
      softReset: b,
      reset: A,
      clear: j,
      resetValidation: ye,
      submit: x,
      valuesHasChanged: Ze,
      getInitialValueByFieldName: Ce,
      getAssociationDataCallback: Je,
      setContext: et,
      setCssClass: tt,
      setReadonlyState: nt,
      isReady: at,
      getSubmitData: ot,
      form: ct,
      isLoadingSubmit: D,
      orphanErrors: ft
    };
    e(ge);
    const mt = le(() => Z()), pt = le(() => ie()), gt = le(() => se());
    return Q(
      () => V.value && $.value,
      (f) => {
        var C;
        f && !q.value && (z((C = h.value) == null ? void 0 : C.events.onReady), q.value = !0);
      }
    ), Q(
      () => {
        var f;
        return (f = h.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        r == null || r(), r = null, f && (r = Q(mt, (C) => {
          var T;
          C && z((T = h.value) == null ? void 0 : T.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = h.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = Q(pt, (C) => {
          var T;
          C && z((T = h.value) == null ? void 0 : T.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = h.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        d == null || d(), d = null, f && (d = Q(
          gt,
          () => {
            var C;
            z((C = h.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      Ke(), await m(), ve(() => {
        n = JSON.stringify(M());
      });
    }), (f, C) => qe((g(), w("div", ha, [
      G("div", {
        class: X(h.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), w(ce, null, fe(h.value.sections, (T) => (g(), R(Sn, {
          key: T.name,
          section: T,
          formApi: ge,
          privateFormApi: ze
        }, {
          default: y(() => [
            (g(!0), w(ce, null, fe(T.fields, (ae) => (g(), R(ga, {
              key: ae.metadata.field_name,
              field: ae,
              formApi: ge,
              privateFormApi: ze
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), R(oe(h.value.orphanErrorsComponent), { formApi: ge })),
      (g(), R(oe(h.value.actionComponent), { formApi: ge }))
    ], 512)), [
      [we, q.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  _a as Submit64Form
};
