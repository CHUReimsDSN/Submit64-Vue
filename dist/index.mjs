var vt = Object.defineProperty;
var yt = (o, e, t) => e in o ? vt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var T = (o, e, t) => yt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as g, createElementBlock as w, createElementVNode as G, createVNode as F, unref as a, mergeProps as Ne, createBlock as R, createCommentVNode as z, normalizeClass as X, toDisplayString as U, resolveDynamicComponent as oe, resolveComponent as He, normalizeProps as bt, guardReactiveProps as _t, withCtx as y, createTextVNode as ee, Fragment as ce, renderList as fe, ref as N, onMounted as Y, nextTick as ve, watch as Q, computed as le, markRaw as W, useSlots as Ge, getCurrentInstance as Me, withDirectives as Ee, vShow as we } from "vue";
import { QBtn as K, QIcon as Se, QItem as me, QItemSection as te, QItemLabel as ne, QInput as Fe, QPopupProxy as De, QDate as je, QTime as Ct, QCheckbox as St, QSelect as Oe, QColor as Ft, useQuasar as Vt, QUploader as Qe, QList as Ae, QSeparator as Ye, QUploaderAddTrigger as We, date as L } from "quasar";
const kt = { class: "flex column" }, xt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Dt = /* @__PURE__ */ H({
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
    return (l, n) => (g(), w("div", kt, [
      G("div", xt, [
        F(a(K), Ne(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (g(), R(a(K), Ne({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : z("", !0),
        e.formApi.clear ? (g(), R(a(K), Ne({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : z("", !0)
      ])
    ]));
  }
}), At = { class: "flex row items-center" }, Rt = { class: "text-body1 text-weight-medium" }, Bt = { class: "flex column q-gutter-md" }, Nt = /* @__PURE__ */ H({
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
      G("div", At, [
        e.sectionApi.section.icon ? (g(), R(a(Se), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : z("", !0),
        G("div", Rt, U(e.sectionApi.section.label), 1)
      ]),
      G("div", Bt, [
        (g(), R(oe(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Tt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, l) => {
      const n = He("q-icon");
      return g(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: l[0] || (l[0] = (i) => e.reset())
      });
    };
  }
}), qt = /* @__PURE__ */ H({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (g(), R(a(me), bt(_t(e.itemProps)), {
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
}), Et = { class: "flex column" }, wt = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (g(), w("div", Et, [
      (g(!0), w(ce, null, fe(e.orphanErrors, (n, i) => (g(), w("div", {
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
    }, this._actionComponent = Dt, this._orphanErrorsComponent = wt, this._sectionComponent = Nt, this._wrapperResetComponent = Tt, this._associationDisplayComponent = qt;
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
    const l = e, n = t, i = new Ot(l, n, this.formApi);
    return this.events.push(i), new zt(i);
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
class Ot {
  constructor(e, t, l) {
    T(this, "type");
    T(this, "data");
    T(this, "formApi");
    T(this, "action", () => {
    });
    T(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class zt {
  constructor(e) {
    T(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const $t = { class: "row items-center justify-end" }, It = /* @__PURE__ */ H({
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
      "onUpdate:modelValue": V[1] || (V[1] = (O) => e.modelValueOnUpdate(O)),
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
                F(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (O) => e.modelValueOnUpdate(O)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: y(() => [
                    G("div", $t, [
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
}), Ut = { class: "row items-center justify-end" }, Pt = { class: "row items-center justify-end" }, Lt = /* @__PURE__ */ H({
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
        var O;
        (O = s.value) == null || O.resetValidation();
      });
    }), (O, q) => (g(), R(a(Fe), {
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
                F(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": q[0] || (q[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: y(() => [
                    G("div", Ut, [
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
                F(a(Ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": q[1] || (q[1] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: y(() => [
                    G("div", Pt, [
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
}), Ht = { class: "flex column" }, Gt = {
  key: 0,
  class: "q-field__bottom"
}, Mt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, jt = /* @__PURE__ */ H({
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
    }), (s, d) => (g(), w("div", Ht, [
      F(a(St), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (g(), w("div", Gt, U(e.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (g(), w("div", Mt, U(t.value), 1)) : z("", !0)
    ]));
  }
}), Qt = /* @__PURE__ */ H({
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
    function O() {
      l.value = [];
    }
    return Y(() => {
      p(), e.registerBehaviourCallbacks(k, h, V, void 0, O);
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
          r.value = S.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            S.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = k();
      });
    }
    function V() {
      var u, f;
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (r.value = [
        {
          label: ((u = e.field.associationData[0]) == null ? void 0 : u.label) ?? "???",
          value: v,
          data: (f = e.field.associationData[0]) == null ? void 0 : f.data
        }
      ]);
    }
    function O() {
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
        O,
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
      !v || !e.field.associationData || (r.value = v.map((u, f) => ({
        label: e.field.associationData[f].label ?? "???",
        value: u,
        data: e.field.associationData[f].data
      })));
    }
    function O() {
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
        O,
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
}), Yt = /* @__PURE__ */ H({
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
}), Wt = /* @__PURE__ */ H({
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
                F(a(Ft), {
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
}), Jt = /* @__PURE__ */ H({
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
    const e = o, t = Vt(), n = e.formApi.form.formStyle, i = [
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
    }), (k, h) => {
      const V = He("q-editor");
      return e.modelValue ? (g(), R(V, {
        key: 0,
        ref_key: "fieldRef",
        ref: r,
        "model-value": e.modelValue,
        "onUpdate:modelValue": h[0] || (h[0] = (O) => e.modelValueOnUpdate(O)),
        toolbar: i,
        fonts: c,
        placeholder: e.field.label,
        square: a(n).fieldSquare,
        dense: a(n).fieldDense,
        class: X(e.field.cssClass),
        readonly: e.field.readonly
      }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : z("", !0);
    };
  }
}), Kt = /* @__PURE__ */ H({
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
function $(o) {
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
const Xt = { class: "flex column" }, Zt = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, en = { class: "col" }, tn = { class: "q-uploader__title" }, nn = {
  key: 0,
  class: "caption"
}, an = {
  key: 0,
  class: "flex column"
}, on = {
  key: 2,
  class: "flex column"
}, ln = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, rn = /* @__PURE__ */ H({
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
      var f;
      let u = e.modelValue;
      u.add = [], u.delete = ((f = e.field.attachmentData) == null ? void 0 : f.map((x) => x.attachment_id)) ?? [], e.modelValueOnUpdate(u), D();
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
      return new Promise((f) => {
        const x = new Blob([u]), S = new FileReader();
        S.onload = (M) => {
          var ie;
          const se = ((ie = M.target) == null ? void 0 : ie.result) ?? "", [re, Z] = se.split(",");
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
    function O(u) {
      let f = e.modelValue;
      f.delete = [u.attachment_id], e.modelValueOnUpdate(f), D();
    }
    function q() {
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
    const I = le(() => (e.field.attachmentData ?? []).length === 0), P = le(() => e.modelValue ? e.modelValue.delete : []), v = le(() => {
      var u, f;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((f = e.field.attachmentData) == null ? void 0 : f.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (u, f) => (g(), w("div", Xt, [
      F(a(Qe), {
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
          G("div", Zt, [
            G("div", en, [
              G("div", tn, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", nn, U(e.field.hint), 1)) : z("", !0)
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
                F(a(We))
              ]),
              _: 1
            }, 8, ["onClick"])) : z("", !0)
          ])
        ]),
        list: y((x) => [
          I.value ? z("", !0) : (g(), w("div", an, [
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
                        P.value.includes(S.attachment_id) ? z("", !0) : (g(), R(a(K), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (M) => O(S)
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
                        }, null, 8, ["disable"])) : z("", !0)
                      ]),
                      _: 2
                    }, 1024)) : z("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !I.value && x.files.length > 0 ? (g(), R(a(Ye), { key: 1 })) : z("", !0),
          x.files.length > 0 ? (g(), w("div", on, [
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
          ])) : z("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (g(), w("div", ln, U(n.value), 1)) : z("", !0)
    ]));
  }
}), sn = { class: "flex column" }, un = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, dn = { class: "col" }, cn = { class: "q-uploader__title" }, fn = {
  key: 0,
  class: "caption"
}, mn = {
  key: 0,
  class: "flex column"
}, pn = { class: "text-weight-medium text-body2" }, gn = {
  key: 2,
  class: "flex column"
}, hn = { class: "text-weight-medium text-body2" }, vn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, yn = /* @__PURE__ */ H({
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
      v.add = [], v.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((f) => f.attachment_id)) ?? [], e.modelValueOnUpdate(v), D();
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
        const f = new Blob([v]), x = new FileReader();
        x.onload = (S) => {
          var Z;
          const M = ((Z = S.target) == null ? void 0 : Z.result) ?? "", [se, re] = M.split(",");
          u(re);
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
    function O(v) {
      let u = e.modelValue;
      u.delete.push(v.attachment_id), e.modelValueOnUpdate(u), D();
    }
    function q(v) {
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
    const I = le(() => (e.field.attachmentData ?? []).length === 0), P = le(() => e.modelValue ? e.modelValue.delete : []);
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (v, u) => (g(), w("div", sn, [
      F(a(Qe), {
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
        header: y((f) => [
          G("div", un, [
            G("div", dn, [
              G("div", cn, U(e.field.label), 1),
              e.field.hint ? (g(), w("div", fn, U(e.field.hint), 1)) : z("", !0)
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
                F(a(We))
              ]),
              _: 1
            }, 8, ["onClick"])) : z("", !0)
          ])
        ]),
        list: y((f) => {
          var x;
          return [
            I.value ? z("", !0) : (g(), w("div", mn, [
              G("div", pn, "Fichier" + U((((x = e.field.attachmentData) == null ? void 0 : x.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
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
                          P.value.includes(S.attachment_id) ? z("", !0) : (g(), R(a(K), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (M) => O(S)
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
                          }, null, 8, ["disable", "onClick"])) : z("", !0)
                        ]),
                        _: 2
                      }, 1024)) : z("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              })
            ])),
            !I.value && f.files.length > 0 ? (g(), R(a(Ye), { key: 1 })) : z("", !0),
            f.files.length > 0 ? (g(), w("div", gn, [
              G("div", hn, "Fichier" + U(f.files.length > 0 ? "s" : "") + " à ajouter", 1),
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
            ])) : z("", !0)
          ];
        }),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (g(), w("div", vn, U(n.value), 1)) : z("", !0)
    ]));
  }
});
class he {
  constructor(e, t, l, n, i, c, r, s, d) {
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
    this.dynamicComponentRecord = l.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = r, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...J.getGlobalFormSetting(),
      ...i,
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...J.getGlobalFormStyle(),
      ...c
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
          const O = this.dynamicComponentRecord[`field-${V.field_name}-before`], q = he.getFieldComponentByFormFieldType(V), D = this.dynamicComponentRecord[`field-${V.field_name}-after`], I = {
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
            beforeComponent: O ? W(O) : void 0,
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
            return Wt;
          case "wysiwyg":
            return Jt;
          default:
            return Te;
        }
      case "text":
        return Te;
      case "number":
        return Yt;
      case "date":
        return It;
      case "datetime":
        return Lt;
      case "select":
        return Qt;
      case "selectBelongsTo":
        return Ue;
      case "selectHasMany":
        return Le;
      case "selectHasAndBelongsToMany":
        return Le;
      case "selectHasOne":
        return Ue;
      case "checkbox":
        return jt;
      case "object":
        return Kt;
      case "attachmentHasOne":
        return rn;
      case "attachmentHasMany":
        return yn;
      default:
        return Te;
    }
  }
}
const bn = { class: "flex column" }, _n = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = null, n = null, i = null;
    const c = Ge(), r = {
      softReset: p,
      reset: k,
      clear: h,
      validate: q,
      isValid: D,
      isInvalid: I,
      hide: V,
      unhide: O,
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
      }), $(t.section.events.onReset);
    }
    function h() {
      s.value.forEach((b) => {
        b.clear();
      }), $(t.section.events.onClear);
    }
    function V() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((A) => {
        A.hide();
      }), b.hidden = !0, $(t.section.events.onHide));
    }
    function O() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((A) => {
        A.unhide();
      }), b.hidden = !1, $(t.section.events.onUnhide));
    }
    function q() {
      let b = !0;
      return s.value.forEach((A) => {
        if (!A.validate()) {
          b = !1;
          return;
        }
      }), $(t.section.events.onValidated), b;
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
    e(r);
    const re = le(() => D()), Z = le(() => I()), ie = le(() => M());
    return Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        l == null || l(), l = null, b && (l = Q(re, (A) => {
          A && $(t.section.events.onIsValid);
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
          A && $((j = t.section) == null ? void 0 : j.events.onIsInvalid);
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
            $((A = t.section) == null ? void 0 : A.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var A;
      se();
      const b = (A = Me()) == null ? void 0 : A.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), ve(() => {
        var j;
        d(), $((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (b, A) => Ee((g(), w("div", bn, [
      t.section.beforeComponent ? (g(), R(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : z("", !0),
      (g(), R(oe(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (g(), R(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : z("", !0)
    ], 512)), [
      [we, t.section.hidden !== !0]
    ]);
  }
});
function Cn(o, e) {
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
      r.push(qe(n.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(qe(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((d) => {
    const p = d;
    switch (p.type) {
      case "required":
        r.push(Sn());
        break;
      case "absence":
        r.push(Vn());
        break;
      case "acceptance":
        r.push(kn());
        break;
      case "inclusion":
        r.push(Je(p.including));
        break;
      case "exclusion":
        r.push(Fn(p.excluding));
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
        r.push(An());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Rn(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Bn(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          Nn(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          Tn(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          qn(i(p, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          En(
            i(p, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(wn());
        break;
      case "numberNumericOnly":
        r.push(On());
        break;
      case "numberEvenOnly":
        r.push(zn());
        break;
      case "numberOddOnly":
        r.push($n());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          In(
            i(p, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Un(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Pn(
            i(p, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Ln(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          Mn(
            i(p, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Gn(i(p, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Hn(
            () => p.min,
            () => p.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          jn(
            i(p, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(qe(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          Qn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Yn(
            i(p, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Wn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Jn(
            i(p, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Kn(
            i(p, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Xn(
            i(p, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          ea()
        );
        break;
      case "allowFileContentType":
        r.push(
          ta(
            i(p, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          na(
            i(p, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          oa(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          aa(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          la(
            i(p, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ra(
            i(p, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          ia(
            i(p, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          sa(
            i(p, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ua(
            i(p, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return Dn(r);
      case "allowNull":
        return xn(r);
    }
  }) : r;
}
function Sn() {
  return (o) => !!o || "Ce champ est requis";
}
function Je(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Fn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Je.toString()}`
  );
}
function Vn() {
  return (o) => !o || "Ce champ doit être vide";
}
function kn() {
  return (o) => !!o || "Doit être accepté";
}
function xn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function Dn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function An() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Rn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Bn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Nn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Tn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function qn(o, e) {
  return (t) => {
    const l = o();
    return Number(t) === l || `Égale à ${l}`;
  };
}
function En(o, e) {
  return (t) => {
    const l = o();
    return Number(t) !== l || `Doit être différent de ${o}`;
  };
}
function wn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function On() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function zn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function $n() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function In(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Un(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Pn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ln(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Hn(o, e) {
  return (t) => {
    const l = o(), n = e();
    return String(t).length >= l && String(t).length <= n || `Entre ${l} et ${n}`;
  };
}
function Gn(o, e) {
  return (t) => {
    const l = o();
    return String(t) === l || `Égale à ${l}`;
  };
}
function Mn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function jn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Qn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n <= i || `Inf. ou égal à ${l}`;
  };
}
function Yn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n < i || `Inf. à ${l}`;
  };
}
function Wn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n >= i || `Sup. ou égal à ${l}`;
  };
}
function Jn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n > i || `Sup. à ${l}`;
  };
}
function Kn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n === i || `Égale à ${n}`;
  };
}
function Xn(o, e) {
  return (t) => {
    const l = o();
    return L.extractDate(String(t), e) !== L.extractDate(l, e) || `Doit être différent de ${l}`;
  };
}
function qe(o) {
  return (e) => e == null || e === "" ? !0 : Zn(e, o) || `Date invalide. Format : ${o}`;
}
function Zn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = L.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : L.formatDate(t, e) === o;
}
function ea() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function ta(o) {
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
function na(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && l !== i.size && (n = !1);
    }), n || `Taille par fichier ${pe(l)}`;
  };
}
function aa(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < l && (n = !1);
    }), n || `Taille par fichier min. ${pe(l)}`;
  };
}
function oa(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > l && (n = !1);
    }), n || `Taille par fichier max. ${pe(l)}`;
  };
}
function la(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length <= l || `${l} fichier${l > 1 ? "s" : ""} max.`;
  };
}
function ra(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length >= l || `${l} fichier${l > 1 ? "s" : ""} min.`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) <= l || `${pe(l)} max.`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) >= l || `${pe(l)} min.`;
  };
}
function ua(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) === l || `Taille totale ${pe(l)}`;
  };
}
const da = {
  computeServerRules: Cn
}, ca = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, fa = ["index"], ma = /* @__PURE__ */ H({
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
      ), d.value = V(d.value), $(t.field.events.onReset), c(), ve(() => {
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
    function O(_) {
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
      r(), $(t.field.events.onClear);
    }
    function D() {
      return da.computeServerRules(
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
      return O(a(d));
    }
    function u(_) {
      p.value = _;
    }
    function f() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !0, $(t.field.events.onHide));
    }
    function x() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !1, $(t.field.events.onUnhide));
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
      return $(t.field.events.onValidated), _;
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
      hide: f,
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
        $(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? d.value : null,
      (_) => {
        $(_ ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var B, ue;
      k();
      const _ = (B = Me()) == null ? void 0 : B.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), $((ue = t.field) == null ? void 0 : ue.events.onReady);
    }), (_, B) => Ee((g(), w("div", null, [
      t.field.beforeComponent ? (g(), R(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Ce
      }, null, 8, ["formApi"])) : z("", !0),
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
      }, null, 8, ["formApi"])) : z("", !0),
      p.value.length > 0 ? (g(), w("div", ca, [
        (g(!0), w(ce, null, fe(p.value, (ue, be) => (g(), w("div", {
          index: be,
          class: "flex column"
        }, U(ue), 9, fa))), 256))
      ])) : z("", !0)
    ], 512)), [
      [we, t.field.hidden !== !0]
    ]);
  }
}), pa = { class: "flex column" }, ya = /* @__PURE__ */ H({
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
    const k = Ge(), h = N(he.getEmptyFormBeforeInit()), V = N(!1), O = N(!1), q = N(!1), D = N(!1), I = N("create"), P = N({}), v = N(/* @__PURE__ */ new Map()), u = N(/* @__PURE__ */ new Map());
    async function f() {
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
      ), i = h.value.sections.length, c = h.value.sections.map((m) => m.fields).flat().length, t.resourceId && (I.value = "edit");
    }
    async function x() {
      var E, ae, ke;
      if (!re())
        return;
      $((E = h.value) == null ? void 0 : E.events.onSubmit), D.value = !0, _e();
      const m = M(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: m,
        context: h.value.context
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
          h.value.context,
          ge,
          t.eventManager
        ), b(), n = JSON.stringify(M()), $((ke = h.value) == null ? void 0 : ke.events.onSubmitSuccess);
      else {
        P.value = {};
        const xe = [];
        for (const [de, ht] of u.value) {
          const $e = C.errors[de];
          $e && (ht.setupBackendErrors($e), xe.push(de));
        }
        Object.entries(C.errors).forEach((de) => {
          xe.includes(de[0]) || (P.value[de[0]] = de[1]);
        }), $((ae = h.value) == null ? void 0 : ae.events.onSubmitUnsuccess);
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
        const E = k[C];
        if (E) {
          const ae = H({
            inheritAttrs: !1,
            setup(ke, { attrs: xe, slots: de }) {
              return () => E({
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
      for (const [C, E] of u.value)
        m[C] = E.getValueDeserialized();
      return m;
    }
    function se() {
      const m = {};
      for (const [C, E] of u.value)
        m[C] = E.getValueSerialized();
      return m;
    }
    function re() {
      var C;
      let m = !0;
      return u.value.forEach((E) => {
        if (!E.validate()) {
          m = !1;
          return;
        }
      }), $((C = h.value) == null ? void 0 : C.events.onValidated), m;
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
      }), $((m = h.value) == null ? void 0 : m.events.onReset);
    }
    function j() {
      var m;
      u.value.forEach((C) => {
        C.clear();
      }), $((m = h.value) == null ? void 0 : m.events.onClear);
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
      if (l)
        return l.resource_data[m];
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
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function Ze() {
      return a(I);
    }
    function et() {
      return n !== JSON.stringify(M());
    }
    function tt(m) {
      h.value && (h.value.context = m);
    }
    function nt(m) {
      h.value && (h.value.cssClass = m);
    }
    function at(m) {
      h.value && (h.value.readonly = m);
    }
    function ot() {
      return q.value;
    }
    function lt() {
      return p;
    }
    function rt() {
      return h;
    }
    function it(m) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.find((E) => E.name === m);
    }
    function st(m) {
      var C;
      return (C = h.value) == null ? void 0 : C.sections.map((E) => E.fields).flat().find((E) => E.metadata.field_name === m);
    }
    function ut(m, C) {
      v.value.set(m, C), i === v.value.size && (V.value = !0);
    }
    function dt(m, C) {
      u.value.set(m, C), c === u.value.size && (O.value = !0);
    }
    function ct(m, C) {
      m.fieldsComponent = C;
    }
    const ze = {
      getFormRef: rt,
      getSectionRef: it,
      getFieldRef: st,
      registerSectionWrapperRef: ut,
      registerFieldWrapperRef: dt,
      setSectionFieldComponent: ct
    }, ft = new Proxy({}, {
      get(m, C) {
        var E;
        return (E = h.value) == null ? void 0 : E[C];
      }
    }), ge = {
      getMode: Ze,
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
      valuesHasChanged: et,
      getInitialValueByFieldName: Ce,
      getAssociationDataCallback: Ke,
      setContext: tt,
      setCssClass: nt,
      setReadonlyState: at,
      isReady: ot,
      getSubmitData: lt,
      form: ft
    };
    e(ge);
    const mt = le(() => Z()), pt = le(() => ie()), gt = le(() => se());
    return Q(
      () => V.value && O.value,
      (m) => {
        var C;
        m && !q.value && ($((C = h.value) == null ? void 0 : C.events.onReady), q.value = !0);
      }
    ), Q(
      () => {
        var m;
        return (m = h.value) == null ? void 0 : m.events.onIsValid;
      },
      (m) => {
        r == null || r(), r = null, m && (r = Q(mt, (C) => {
          var E;
          C && $((E = h.value) == null ? void 0 : E.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var m;
        return (m = h.value) == null ? void 0 : m.events.onIsInvalid;
      },
      (m) => {
        s == null || s(), s = null, m && (s = Q(pt, (C) => {
          var E;
          C && $((E = h.value) == null ? void 0 : E.events.onIsInvalid);
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
          gt,
          () => {
            var C;
            $((C = h.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      Xe(), await f(), ve(() => {
        n = JSON.stringify(M());
      });
    }), (m, C) => Ee((g(), w("div", pa, [
      G("div", {
        class: X(h.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), w(ce, null, fe(h.value.sections, (E) => (g(), R(_n, {
          key: E.name,
          section: E,
          formApi: ge,
          privateFormApi: ze
        }, {
          default: y(() => [
            (g(!0), w(ce, null, fe(E.fields, (ae) => (g(), R(ma, {
              key: ae.metadata.field_name,
              field: ae,
              formApi: ge,
              privateFormApi: ze
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), R(oe(h.value.orphanErrorsComponent), {
        orphanErrors: P.value,
        formApi: ge
      }, null, 8, ["orphanErrors"])),
      (g(), R(oe(h.value.actionComponent), {
        isLoadingSubmit: D.value,
        formApi: ge
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [we, q.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  ya as Submit64Form
};
