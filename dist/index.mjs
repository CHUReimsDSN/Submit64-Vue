var yt = Object.defineProperty;
var bt = (o, e, t) => e in o ? yt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var T = (o, e, t) => bt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as g, createElementBlock as w, createElementVNode as G, createVNode as F, unref as a, mergeProps as Ne, createBlock as R, createCommentVNode as O, normalizeClass as X, toDisplayString as U, resolveDynamicComponent as oe, resolveComponent as _t, normalizeProps as Ct, guardReactiveProps as St, withCtx as y, createTextVNode as ee, Fragment as ce, renderList as fe, ref as N, onMounted as Y, nextTick as ve, watch as Q, computed as re, markRaw as W, useSlots as He, getCurrentInstance as Ge, withDirectives as qe, vShow as we } from "vue";
import { QBtn as K, QIcon as Se, QItem as me, QItemSection as te, QItemLabel as ne, QInput as Fe, QPopupProxy as De, QDate as Me, QTime as Ft, QCheckbox as Vt, QSelect as Oe, QColor as kt, useQuasar as xt, QEditor as Dt, QUploader as je, QList as Ae, QSeparator as Qe, QUploaderAddTrigger as Ye, date as L } from "quasar";
const At = { class: "flex column" }, Rt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Bt = /* @__PURE__ */ H({
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
    return (r, n) => (g(), w("div", At, [
      G("div", Rt, [
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
}), Nt = { class: "flex row items-center" }, Tt = { class: "text-body1 text-weight-medium" }, Et = { class: "flex column q-gutter-md" }, qt = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), w("div", {
      class: X(e.sectionApi.section.cssClass)
    }, [
      G("div", Nt, [
        e.sectionApi.section.icon ? (g(), R(a(Se), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : O("", !0),
        G("div", Tt, U(e.sectionApi.section.label), 1)
      ]),
      G("div", Et, [
        (g(), R(oe(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), wt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = _t("q-icon");
      return g(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
      });
    };
  }
}), Ot = /* @__PURE__ */ H({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), R(a(me), Ct(St(e.itemProps)), {
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
}), zt = { class: "flex column" }, $t = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), w("div", zt, [
      (g(!0), w(ce, null, fe(e.formApi.orphanErrors, (n, i) => (g(), w("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, U(i) + " : " + U(n.join(",")), 1))), 128))
    ]));
  }
}), Be = class Be {
  constructor() {
    T(this, "_formSettings");
    T(this, "_formStyle");
    T(this, "_actionComponent");
    T(this, "_orphanErrorsComponent");
    T(this, "_sectionComponent");
    T(this, "_wrapperResetComponent");
    T(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Bt, this._orphanErrorsComponent = $t, this._sectionComponent = qt, this._wrapperResetComponent = wt, this._associationDisplayComponent = Ot;
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
T(Be, "_instance", new Be());
let J = Be;
class Re {
  constructor(e) {
    T(this, "formApi");
    T(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, i = new It(r, n, this.formApi);
    return this.events.push(i), new Ut(i);
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
class It {
  constructor(e, t, r) {
    T(this, "type");
    T(this, "data");
    T(this, "formApi");
    T(this, "action", () => {
    });
    T(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class Ut {
  constructor(e) {
    T(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Pt = { class: "row items-center justify-end" }, Lt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = N(), l = N();
    function s() {
      c.value && c.value.hide();
    }
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function p() {
      return l.value ? !l.value.hasError : !1;
    }
    function k() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, p, k), i || ve(() => {
        var h;
        (h = l.value) == null || h.resetValidation();
      });
    }), (h, V) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: l,
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
                    G("div", Pt, [
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
}), Ht = { class: "row items-center justify-end" }, Gt = { class: "row items-center justify-end" }, Mt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = N(), l = N(), s = N();
    function d() {
      c.value && c.value.hide();
    }
    function p() {
      l.value && l.value.hide();
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
    }), ($, E) => (g(), R(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[2] || (E[2] = (D) => e.modelValueOnUpdate(D)),
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
                  "onUpdate:modelValue": E[0] || (E[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: y(() => [
                    G("div", Ht, [
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
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                F(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[1] || (E[1] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: y(() => [
                    G("div", Gt, [
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
}), jt = { class: "flex column" }, Qt = {
  key: 0,
  class: "q-field__bottom"
}, Yt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Wt = /* @__PURE__ */ H({
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
    function l() {
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
      e.registerBehaviourCallbacks(i, c, l);
    }), (s, d) => (g(), w("div", jt, [
      F(a(Vt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (g(), w("div", Qt, U(e.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (g(), w("div", Yt, U(t.value), 1)) : O("", !0)
    ]));
  }
}), Jt = /* @__PURE__ */ H({
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
    const e = o, t = N([]), r = N([]), n = N(), i = e.formApi.form, c = i.formSettings, l = i.formStyle, s = c.rulesBehaviour === "lazy";
    function d(E, D) {
      if (E === "") {
        D(() => {
          r.value = [...t.value];
        });
        return;
      }
      D(() => {
        const I = E.toLowerCase();
        r.value = t.value.filter((P) => P.label.toLowerCase().includes(I));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
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
      r.value = [];
    }
    return Y(() => {
      p(), e.registerBehaviourCallbacks(k, h, V, void 0, $);
    }), (E, D) => (g(), R(a(Oe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (I) => e.modelValueOnUpdate(I)),
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
      class: X(e.field.cssClass),
      "lazy-rules": s,
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
      onFilter: d
    }, {
      "no-option": y(() => [
        F(a(me), {
          dense: a(l).fieldDense
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, c = n.rulesBehaviour === "lazy", l = N([]), s = N(
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
      const f = e.formApi.getAssociationDataCallback();
      s.value = k(), p.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, f({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((S) => {
        u(() => {
          l.value = S.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = k();
      });
    }
    function V() {
      var u, f;
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (l.value = [
        {
          label: ((u = e.field.associationData[0]) == null ? void 0 : u.label) ?? "???",
          value: v,
          data: (f = e.field.associationData[0]) == null ? void 0 : f.data
        }
      ]);
    }
    function $() {
      return d.value ? d.value.validate() : !1;
    }
    function E() {
      return d.value ? !d.value.hasError : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    function I() {
      s.value = k(), l.value = [], p.value = Ie;
    }
    function P(v) {
      const u = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === u && u !== -1) {
        const f = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: f.resourceName,
          resourceId: f.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: f.context
        }).then((S) => {
          l.value = l.value.concat(
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
        E,
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
      "onUpdate:modelValue": u[0] || (u[0] = (f) => e.modelValueOnUpdate(f)),
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
      options: l.value,
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
      option: y((f) => [
        (g(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, c = n.rulesBehaviour === "lazy", l = N([]), s = N(
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
      const f = e.formApi.getAssociationDataCallback();
      s.value = k(), p.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, f({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((S) => {
        u(() => {
          l.value = S.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = k();
      });
    }
    function V() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (l.value = v.map((u, f) => ({
        label: e.field.associationData[f].label ?? "???",
        value: u,
        data: e.field.associationData[f].data
      })));
    }
    function $() {
      return d.value ? d.value.validate() : !1;
    }
    function E() {
      return d.value ? !d.value.hasError : !1;
    }
    function D() {
      d.value && d.value.resetValidation();
    }
    function I() {
      s.value = k(), l.value = [], p.value = Pe;
    }
    function P(v) {
      const u = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === u && u !== -1) {
        const f = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: f.resourceName,
          resourceId: f.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: f.context
        }).then((S) => {
          l.value = l.value.concat(
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
        E,
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
      "onUpdate:modelValue": u[0] || (u[0] = (f) => e.modelValueOnUpdate(f)),
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
      options: l.value,
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
      option: y((f) => [
        (g(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = N();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
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
}), Kt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = N();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
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
}), Xt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = N();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
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
                F(a(kt), {
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
}), Zt = /* @__PURE__ */ H({
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
    const e = o, t = xt(), n = e.formApi.form.formStyle, i = [
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
    }, l = N();
    function s() {
      return !!l.value;
    }
    function d() {
      return !!l.value;
    }
    function p() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, d, p);
    }), (k, h) => e.modelValue ? (g(), R(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: l,
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
}), en = /* @__PURE__ */ H({
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
    return t.formStyle, r.rulesBehaviour, (n, i) => " TODO json edit ? ";
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
const tn = { class: "flex column" }, nn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, an = { class: "col" }, on = { class: "q-uploader__title" }, rn = {
  key: 0,
  class: "caption"
}, ln = {
  key: 0,
  class: "flex column"
}, sn = {
  key: 2,
  class: "flex column"
}, un = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, dn = /* @__PURE__ */ H({
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
    const e = o, r = e.formApi.form.formStyle, n = N(null);
    function i() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), D();
    }
    function c() {
      var f;
      let u = e.modelValue;
      u.add = [], u.delete = ((f = e.field.attachmentData) == null ? void 0 : f.map((x) => x.attachment_id)) ?? [], e.modelValueOnUpdate(u), D();
    }
    function l() {
      return D(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function p(u) {
      return new Promise((f) => {
        const x = new Blob([u]), S = new FileReader();
        S.onload = (M) => {
          var ie;
          const se = ((ie = M.target) == null ? void 0 : ie.result) ?? "", [le, Z] = se.split(",");
          f(Z);
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
      const f = await k(u[0]);
      let x = e.modelValue;
      x.add = [f], e.modelValueOnUpdate(x), D();
    }
    function V(u) {
      if (!u[0])
        return;
      let f = e.modelValue;
      f.add = [], f.delete = [], e.modelValueOnUpdate(f), D();
    }
    function $(u) {
      let f = e.modelValue;
      f.delete = [u.attachment_id], e.modelValueOnUpdate(f), D();
    }
    function E() {
      let u = e.modelValue;
      u.delete = [], e.modelValueOnUpdate(u), D();
    }
    function D() {
      n.value = null;
      for (const u of e.rules) {
        const f = u(e.modelValue);
        if (typeof f == "string") {
          n.value = f;
          break;
        }
      }
    }
    const I = re(() => (e.field.attachmentData ?? []).length === 0), P = re(() => e.modelValue ? e.modelValue.delete : []), v = re(() => {
      var u, f;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((f = e.field.attachmentData) == null ? void 0 : f.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d, i, c);
    }), (u, f) => (g(), w("div", tn, [
      F(a(je), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: h,
        onRemoved: V,
        style: { width: "inherit" }
      }, {
        header: y((x) => [
          G("div", nn, [
            G("div", an, [
              G("div", on, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", rn, U(e.field.hint), 1)) : O("", !0)
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
            f[0] || (f[0] = G("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
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
                          onClick: E
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
          x.files.length > 0 ? (g(), w("div", sn, [
            f[1] || (f[1] = G("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
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
      n.value !== null ? (g(), w("div", un, U(n.value), 1)) : O("", !0)
    ]));
  }
}), cn = { class: "flex column" }, fn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, mn = { class: "col" }, pn = { class: "q-uploader__title" }, gn = {
  key: 0,
  class: "caption"
}, hn = {
  key: 0,
  class: "flex column"
}, vn = { class: "text-weight-medium text-body2" }, yn = {
  key: 2,
  class: "flex column"
}, bn = { class: "text-weight-medium text-body2" }, _n = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Cn = /* @__PURE__ */ H({
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
    const e = o, r = e.formApi.form.formStyle, n = N(null);
    function i() {
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), D();
    }
    function c() {
      var u;
      let v = e.modelValue;
      v.add = [], v.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((f) => f.attachment_id)) ?? [], e.modelValueOnUpdate(v), D();
    }
    function l() {
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
        const f = new Blob([v]), x = new FileReader();
        x.onload = (S) => {
          var Z;
          const M = ((Z = S.target) == null ? void 0 : Z.result) ?? "", [se, le] = M.split(",");
          u(le);
        }, x.readAsDataURL(f);
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
        const f = await k(u);
        let x = e.modelValue;
        x.add.push(f), e.modelValueOnUpdate(x);
      }
      D();
    }
    async function V(v) {
      for (const u of v) {
        const f = await k(u);
        let x = e.modelValue;
        x.add = x.add.filter((S) => S.key !== f.key), e.modelValueOnUpdate(x);
      }
      D();
    }
    function $(v) {
      let u = e.modelValue;
      u.delete.push(v.attachment_id), e.modelValueOnUpdate(u), D();
    }
    function E(v) {
      let u = e.modelValue;
      u.delete = u.delete.filter((f) => f !== v.attachment_id), e.modelValueOnUpdate(u), D();
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
    const I = re(() => (e.field.attachmentData ?? []).length === 0), P = re(() => e.modelValue ? e.modelValue.delete : []);
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d, i, c);
    }), (v, u) => (g(), w("div", cn, [
      F(a(je), {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: h,
        onRemoved: V,
        style: { width: "inherit" }
      }, {
        header: y((f) => [
          G("div", fn, [
            G("div", mn, [
              G("div", pn, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", gn, U(e.field.hint), 1)) : O("", !0)
            ]),
            f.canAddFiles ? (g(), R(a(K), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: f.pickFiles,
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
        list: y((f) => {
          var x;
          return [
            I.value ? O("", !0) : (g(), w("div", hn, [
              G("div", vn, "Fichier" + U((((x = e.field.attachmentData) == null ? void 0 : x.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
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
                            onClick: (M) => E(S)
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
            !I.value && f.files.length > 0 ? (g(), R(a(Qe), { key: 1 })) : O("", !0),
            f.files.length > 0 ? (g(), w("div", yn, [
              G("div", bn, "Fichier" + U(f.files.length > 0 ? "s" : "") + " à ajouter", 1),
              F(a(Ae), { separator: "" }, {
                default: y(() => [
                  (g(!0), w(ce, null, fe(f.files, (S) => (g(), R(a(me), {
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
                            onClick: (M) => f.removeFile(S)
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
      n.value !== null ? (g(), w("div", _n, U(n.value), 1)) : O("", !0)
    ]));
  }
});
class he {
  constructor(e, t, r, n, i, c, l, s, d) {
    T(this, "resourceName");
    T(this, "resourceId");
    T(this, "formMetadataAndData");
    T(this, "context");
    T(this, "formSettings");
    T(this, "formStyle");
    T(this, "actionComponent");
    T(this, "orphanErrorsComponent");
    T(this, "sectionComponent");
    T(this, "wrapperResetComponent");
    T(this, "associationDisplayComponent");
    T(this, "dynamicComponentRecord");
    T(this, "formApi");
    T(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...J.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...c,
      ...J.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? J.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? J.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? J.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? J.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? J.getGlobalAssociationDisplayComponent(), this.registerEventCallback = d ?? (() => {
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
  static getForm(e, t, r, n, i, c, l, s, d) {
    return new he(
      e,
      t,
      r,
      n,
      i,
      c,
      l,
      s,
      d
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Re.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = Re.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (c, l) => {
        const s = [];
        c.fields.forEach((V) => {
          const $ = this.dynamicComponentRecord[`field-${V.field_name}-before`], E = he.getFieldComponentByFormFieldType(V), D = this.dynamicComponentRecord[`field-${V.field_name}-after`], I = {
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
            mainComponent: W(E),
            afterComponent: D ? W(D) : void 0,
            events: r.fields[V.field_name] ?? {},
            componentOptions: I
          };
          s.push(v), t.add(V.field_name);
        });
        const d = this.dynamicComponentRecord[`section-${c.name ?? l}-before`], p = this.sectionComponent, k = this.dynamicComponentRecord[`section-${c.name ?? l}-after`], h = {
          label: c.label ?? void 0,
          icon: c.icon ?? void 0,
          cssClass: c.css_class ?? void 0,
          hidden: !1,
          name: c.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? void 0,
          events: r.sections[c.name ?? l.toString()] ?? {},
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
      events: r.form,
      actionComponent: W(this.actionComponent),
      orphanErrorsComponent: W(this.orphanErrorsComponent),
      wrapperResetComponent: W(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((c, l) => c + l.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), i;
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
            return Xt;
          case "wysiwyg":
            return Zt;
          default:
            return Te;
        }
      case "text":
        return Te;
      case "number":
        return Kt;
      case "date":
        return Lt;
      case "datetime":
        return Mt;
      case "select":
        return Jt;
      case "selectBelongsTo":
        return Ue;
      case "selectHasMany":
        return Le;
      case "selectHasAndBelongsToMany":
        return Le;
      case "selectHasOne":
        return Ue;
      case "checkbox":
        return Wt;
      case "object":
        return en;
      case "attachmentHasOne":
        return dn;
      case "attachmentHasMany":
        return Cn;
      default:
        return Te;
    }
  }
}
const Sn = { class: "flex column" }, Fn = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, i = null;
    const c = He(), l = {
      softReset: p,
      reset: k,
      clear: h,
      validate: E,
      isValid: D,
      isInvalid: I,
      hide: V,
      unhide: $,
      resetValidation: P,
      getFields: v,
      setReadonlyState: u,
      setCssClass: f,
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
    function E() {
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
    function f(b) {
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
    e(l);
    const le = re(() => D()), Z = re(() => I()), ie = re(() => M());
    return Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        r == null || r(), r = null, b && (r = Q(le, (A) => {
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
    }), (b, A) => qe((g(), w("div", Sn, [
      t.section.beforeComponent ? (g(), R(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : O("", !0),
      (g(), R(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (g(), R(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : O("", !0)
    ], 512)), [
      [we, t.section.hidden !== !0]
    ]);
  }
});
function Vn(o, e) {
  const t = o.rules ?? [], r = o.type, n = e.form, i = (d, p, k) => d[p] ? k ? () => c(d[p]) : () => d[p] : d.compare_to ? () => {
    var h;
    return ((h = e.getFieldByName(d.compare_to)) == null ? void 0 : h.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (d) => String(
    L.formatDate(
      L.extractDate(d, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], s = [];
  switch (r) {
    case "date":
      l.push(Ee(n.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Ee(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((d) => {
    const p = d;
    switch (p.type) {
      case "required":
        l.push(kn());
        break;
      case "absence":
        l.push(Dn());
        break;
      case "acceptance":
        l.push(An());
        break;
      case "inclusion":
        l.push(We(p.including));
        break;
      case "exclusion":
        l.push(xn(p.excluding));
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
        l.push(Nn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Tn(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          En(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          qn(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          wn(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          On(i(p, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          zn(
            i(p, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push($n());
        break;
      case "numberNumericOnly":
        l.push(In());
        break;
      case "numberEvenOnly":
        l.push(Un());
        break;
      case "numberOddOnly":
        l.push(Pn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Ln(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Hn(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Gn(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Mn(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Yn(
            i(p, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Qn(i(p, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          jn(
            () => p.min,
            () => p.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Wn(
            i(p, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(Ee(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          Jn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Kn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Xn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Zn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          ea(
            i(p, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          ta(
            i(p, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        l.push(
          aa()
        );
        break;
      case "allowFileContentType":
        l.push(
          oa(
            i(p, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          ra(
            i(p, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          ia(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          la(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          sa(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          ua(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          da(
            i(p, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          ca(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          fa(
            i(p, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return Bn(l);
      case "allowNull":
        return Rn(l);
    }
  }) : l;
}
function kn() {
  return (o) => !!o || "Ce champ est requis";
}
function We(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function xn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${We.toString()}`
  );
}
function Dn() {
  return (o) => !o || "Ce champ doit être vide";
}
function An() {
  return (o) => !!o || "Doit être accepté";
}
function Rn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Bn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Nn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Tn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function En(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function qn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function wn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function On(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function zn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function $n() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function In() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Un() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Pn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Ln(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Hn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Gn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Mn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function jn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Qn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Yn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Wn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Jn(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n <= i || `Inf. ou égal à ${r}`;
  };
}
function Kn(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n < i || `Inf. à ${r}`;
  };
}
function Xn(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n >= i || `Sup. ou égal à ${r}`;
  };
}
function Zn(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n > i || `Sup. à ${r}`;
  };
}
function ea(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n === i || `Égale à ${n}`;
  };
}
function ta(o, e) {
  return (t) => {
    const r = o();
    return L.extractDate(String(t), e) !== L.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Ee(o) {
  return (e) => e == null || e === "" ? !0 : na(e, o) || `Date invalide. Format : ${o}`;
}
function na(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = L.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : L.formatDate(t, e) === o;
}
function aa() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function oa(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    t.add.forEach((c) => {
      n && (r.includes(c.contentType) || (n = !1));
    });
    const i = o.length > 1;
    return n || `Type${i ? "s" : ""} autorisé${i ? "s" : ""} : ${r.join(",")}`;
  };
}
function ra(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && r !== i.size && (n = !1);
    }), n || `Taille par fichier ${pe(r)}`;
  };
}
function la(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < r && (n = !1);
    }), n || `Taille par fichier min. ${pe(r)}`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > r && (n = !1);
    }), n || `Taille par fichier max. ${pe(r)}`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length <= r || `${r} fichier${r > 1 ? "s" : ""} max.`;
  };
}
function ua(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length >= r || `${r} fichier${r > 1 ? "s" : ""} min.`;
  };
}
function da(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) <= r || `${pe(r)} max.`;
  };
}
function ca(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) >= r || `${pe(r)} min.`;
  };
}
function fa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) === r || `Taille totale ${pe(r)}`;
  };
}
const ma = {
  computeServerRules: Vn
}, pa = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, ga = ["index"], ha = /* @__PURE__ */ H({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, i = () => {
    }, c = () => {
    }, l = () => {
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
    function E() {
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
      l(), z(t.field.events.onClear);
    }
    function D() {
      return ma.computeServerRules(
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
    function f() {
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
    function le(_) {
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
      const _ = r();
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
      r = _, n = B, i = ue, be && (c = be), Ve && (l = Ve);
    }
    const Ce = {
      softReset: k,
      reset: h,
      clear: E,
      validate: b,
      isValid: A,
      isInvalid: j,
      hide: f,
      unhide: x,
      resetValidation: ye,
      getValueDeserialized: v,
      getValueSerialized: P,
      setupBackendErrors: u,
      setReadonlyState: S,
      setHint: M,
      setCssClass: se,
      setSuffix: le,
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
        clear: E,
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
      p.value.length > 0 ? (g(), w("div", pa, [
        (g(!0), w(ce, null, fe(p.value, (ue, be) => (g(), w("div", {
          index: be,
          class: "flex column"
        }, U(ue), 9, ga))), 256))
      ])) : O("", !0)
    ], 512)), [
      [we, t.field.hidden !== !0]
    ]);
  }
}), va = { class: "flex column" }, Ca = /* @__PURE__ */ H({
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
    let r = null, n = "", i = 0, c = 0, l = null, s = null, d = null, p = null;
    const k = He(), h = N(he.getEmptyFormBeforeInit()), V = N(!1), $ = N(!1), E = N(!1), D = N(!1), I = N("create"), P = N({}), v = N(/* @__PURE__ */ new Map()), u = N(/* @__PURE__ */ new Map());
    async function f() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), h.value = he.getForm(
        t.resourceName,
        t.resourceId,
        S(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ge,
        t.eventManager
      ), i = h.value.sections.length, c = h.value.sections.map((m) => m.fields).flat().length, t.resourceId && (I.value = "edit");
    }
    async function x() {
      var q, ae, ke;
      if (!le())
        return;
      z((q = h.value) == null ? void 0 : q.events.onSubmit), D.value = !0, _e();
      const m = M(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: m,
        context: t.context
      });
      if (p = C.resource_data, C.success)
        P.value = {}, I.value === "create" && (I.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), h.value = he.getForm(
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
        for (const [de, vt] of u.value) {
          const $e = C.errors[de];
          $e && (vt.setupBackendErrors($e), xe.push(de));
        }
        Object.entries(C.errors).forEach((de) => {
          xe.includes(de[0]) || (P.value[de[0]] = de[1]);
        }), z((ae = h.value) == null ? void 0 : ae.events.onSubmitUnsuccess);
      }
      D.value = !1;
    }
    function S() {
      const m = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const C in k) {
        const q = k[C];
        if (q) {
          const ae = H({
            inheritAttrs: !1,
            setup(ke, { attrs: xe, slots: de }) {
              return () => q({
                ...ke,
                ...xe,
                innerSlots: de
              });
            }
          });
          switch (C) {
            case "sections":
              m.sectionComponent = ae;
              break;
            case "actions":
              m.actionComponent = ae;
              break;
            case "orphan-errors":
              m.orphanErrorsComponent = ae;
              break;
            case "association-display":
              m.associationDisplayComponent = ae;
              break;
            default:
              m.dynamicComponentRecord[C] = ae;
              break;
          }
        }
      }
      return m;
    }
    function M() {
      const m = {};
      for (const [C, q] of u.value)
        m[C] = q.getValueDeserialized();
      return m;
    }
    function se() {
      const m = {};
      for (const [C, q] of u.value)
        m[C] = q.getValueSerialized();
      return m;
    }
    function le() {
      var C;
      let m = !0;
      return u.value.forEach((q) => {
        if (!q.validate()) {
          m = !1;
          return;
        }
      }), z((C = h.value) == null ? void 0 : C.events.onValidated), m;
    }
    function Z() {
      let m = !0;
      return u.value.forEach((C) => {
        if (!C.isValid()) {
          m = !1;
          return;
        }
      }), m;
    }
    function ie() {
      return !Z();
    }
    function b() {
      v.value.forEach((m) => {
        m.softReset();
      });
    }
    function A() {
      var m;
      u.value.forEach((C) => {
        C.reset();
      }), z((m = h.value) == null ? void 0 : m.events.onReset);
    }
    function j() {
      var m;
      u.value.forEach((C) => {
        C.clear();
      }), z((m = h.value) == null ? void 0 : m.events.onClear);
    }
    function ye() {
      u.value.forEach((m) => {
        m.resetValidation();
      });
    }
    function _e() {
      u.value.forEach((m) => {
        m.setupBackendErrors([]);
      });
    }
    function Ce(m) {
      if (r)
        return r.resource_data[m];
    }
    function _(m) {
      return v.value.get(m);
    }
    function B(m) {
      return [...v.value.values()].at(m);
    }
    function ue() {
      return v.value;
    }
    function be(m) {
      return u.value.get(m);
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
    function et(m) {
      h.value && (h.value.context = m);
    }
    function tt(m) {
      h.value && (h.value.cssClass = m);
    }
    function nt(m) {
      h.value && (h.value.readonly = m);
    }
    function at() {
      return E.value;
    }
    function ot() {
      return p;
    }
    function rt() {
      return h;
    }
    function lt(m) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.find((q) => q.name === m);
    }
    function it(m) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.map((q) => q.fields).flat().find((q) => q.metadata.field_name === m);
    }
    function st(m, C) {
      v.value.set(m, C), i === v.value.size && (V.value = !0);
    }
    function ut(m, C) {
      u.value.set(m, C), c === u.value.size && ($.value = !0);
    }
    function dt(m, C) {
      m.fieldsComponent = C;
    }
    const ze = {
      getFormRef: rt,
      getSectionRef: lt,
      getFieldRef: it,
      registerSectionWrapperRef: st,
      registerFieldWrapperRef: ut,
      setSectionFieldComponent: dt
    }, ct = new Proxy({}, {
      get(m, C) {
        var q;
        return (q = h.value) == null ? void 0 : q[C];
      }
    }), ft = new Proxy({}, {
      get() {
        return D.value;
      }
    }), mt = new Proxy({}, {
      get() {
        return P.value;
      }
    }), ge = {
      getMode: Xe,
      getSectionByName: _,
      getSectionByIndex: B,
      getSections: ue,
      getFieldByName: be,
      getFields: Ve,
      validate: le,
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
      isLoadingSubmit: ft,
      orphanErrors: mt
    };
    e(ge);
    const pt = re(() => Z()), gt = re(() => ie()), ht = re(() => se());
    return Q(
      () => V.value && $.value,
      (m) => {
        var C;
        m && !E.value && (z((C = h.value) == null ? void 0 : C.events.onReady), E.value = !0);
      }
    ), Q(
      () => {
        var m;
        return (m = h.value) == null ? void 0 : m.events.onIsValid;
      },
      (m) => {
        l == null || l(), l = null, m && (l = Q(pt, (C) => {
          var q;
          C && z((q = h.value) == null ? void 0 : q.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var m;
        return (m = h.value) == null ? void 0 : m.events.onIsInvalid;
      },
      (m) => {
        s == null || s(), s = null, m && (s = Q(gt, (C) => {
          var q;
          C && z((q = h.value) == null ? void 0 : q.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var m;
        return (m = h.value) == null ? void 0 : m.events.onUpdate;
      },
      (m) => {
        d == null || d(), d = null, m && (d = Q(
          ht,
          () => {
            var C;
            z((C = h.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      Ke(), await f(), ve(() => {
        n = JSON.stringify(M());
      });
    }), (m, C) => qe((g(), w("div", va, [
      G("div", {
        class: X(h.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), w(ce, null, fe(h.value.sections, (q) => (g(), R(Fn, {
          key: q.name,
          section: q,
          formApi: ge,
          privateFormApi: ze
        }, {
          default: y(() => [
            (g(!0), w(ce, null, fe(q.fields, (ae) => (g(), R(ha, {
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
      [we, E.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  Ca as Submit64Form
};
