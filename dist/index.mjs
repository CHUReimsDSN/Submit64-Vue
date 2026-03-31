var vt = Object.defineProperty;
var yt = (o, e, t) => e in o ? vt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var O = (o, e, t) => yt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as h, createElementBlock as $, createElementVNode as M, createVNode as V, unref as a, mergeProps as Ne, createBlock as B, createCommentVNode as I, normalizeClass as X, toDisplayString as P, resolveDynamicComponent as oe, resolveComponent as He, normalizeProps as bt, guardReactiveProps as _t, withCtx as y, createTextVNode as ee, Fragment as ce, renderList as fe, ref as q, onMounted as Y, nextTick as ve, watch as Q, computed as le, markRaw as W, useSlots as Me, getCurrentInstance as Ge, withDirectives as we, vShow as qe } from "vue";
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
    return (l, n) => (h(), $("div", kt, [
      M("div", xt, [
        V(a(K), Ne(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), B(a(K), Ne({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.clear ? (h(), B(a(K), Ne({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
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
    return (t, l) => (h(), $("div", {
      class: X(e.sectionApi.section.cssClass)
    }, [
      M("div", At, [
        e.sectionApi.section.icon ? (h(), B(a(Se), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : I("", !0),
        M("div", Rt, P(e.sectionApi.section.label), 1)
      ]),
      M("div", Bt, [
        (h(), B(oe(e.sectionApi.section.fieldsComponent)))
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
      return h(), B(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: l[0] || (l[0] = (i) => e.reset())
      });
    };
  }
}), Et = /* @__PURE__ */ H({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), B(a(me), bt(_t(e.itemProps)), {
      default: y(() => [
        V(a(te), null, {
          default: y(() => [
            V(a(ne), null, {
              default: y(() => [
                ee(P(e.entry.label), 1)
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
}), wt = { class: "flex column" }, qt = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), $("div", wt, [
      (h(!0), $(ce, null, fe(e.orphanErrors, (n, i) => (h(), $("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, P(i) + " : " + P(n.join(",")), 1))), 128))
    ]));
  }
}), Be = class Be {
  constructor() {
    O(this, "_formSettings");
    O(this, "_formStyle");
    O(this, "_actionComponent");
    O(this, "_orphanErrorsComponent");
    O(this, "_sectionComponent");
    O(this, "_wrapperResetComponent");
    O(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Dt, this._orphanErrorsComponent = qt, this._sectionComponent = Nt, this._wrapperResetComponent = Tt, this._associationDisplayComponent = Et;
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
O(Be, "_instance", new Be());
let J = Be;
class Re {
  constructor(e) {
    O(this, "formApi");
    O(this, "events", []);
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
    O(this, "type");
    O(this, "data");
    O(this, "formApi");
    O(this, "action", () => {
    });
    O(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    O(this, "formEvent");
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = q(), r = q();
    function s() {
      c.value && c.value.hide();
    }
    function d() {
      return r.value ? r.value.validate() : !1;
    }
    function p() {
      return r.value ? !r.value.hasError : !1;
    }
    function D() {
      r.value && r.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, p, D), i || ve(() => {
        var v;
        (v = r.value) == null || v.resetValidation();
      });
    }), (v, k) => (h(), B(a(Fe), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[1] || (k[1] = (T) => e.modelValueOnUpdate(T)),
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
        V(a(Se), {
          size: "sm",
          color: a(n).fieldColor,
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            V(a(De), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                V(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (T) => e.modelValueOnUpdate(T)),
                  mask: a(t).formSettings.dateFormat,
                  color: a(n).fieldColor
                }, {
                  default: y(() => [
                    M("div", $t, [
                      V(a(K), {
                        onClick: s,
                        label: "Fermer",
                        color: a(n).fieldColor,
                        flat: "",
                        "no-caps": ""
                      }, null, 8, ["color"])
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask", "color"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }, 8, ["color"])
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = q(), r = q(), s = q();
    function d() {
      c.value && c.value.hide();
    }
    function p() {
      r.value && r.value.hide();
    }
    function D() {
      return s.value ? s.value.validate() : !1;
    }
    function v() {
      return s.value ? !s.value.hasError : !1;
    }
    function k() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(D, v, k), i || ve(() => {
        var T;
        (T = s.value) == null || T.resetValidation();
      });
    }), (T, A) => (h(), B(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[2] || (A[2] = (C) => e.modelValueOnUpdate(C)),
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
        V(a(Se), {
          size: "sm",
          color: a(n).fieldColor,
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            V(a(De), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                V(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (C) => e.modelValueOnUpdate(C)),
                  mask: a(t).formSettings.datetimeFormat,
                  color: a(n).fieldColor
                }, {
                  default: y(() => [
                    M("div", Ut, [
                      V(a(K), {
                        onClick: d,
                        label: "Fermer",
                        color: a(n).fieldColor,
                        flat: "",
                        "no-caps": ""
                      }, null, 8, ["color"])
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask", "color"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }, 8, ["color"]),
        V(a(Se), {
          size: "sm",
          color: a(n).fieldColor,
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            V(a(De), {
              ref_key: "timePopupProxyRef",
              ref: r,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                V(a(Ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[1] || (A[1] = (C) => e.modelValueOnUpdate(C)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: "",
                  color: a(n).fieldColor
                }, {
                  default: y(() => [
                    M("div", Pt, [
                      V(a(K), {
                        onClick: p,
                        label: "Fermer",
                        color: a(n).fieldColor,
                        flat: "",
                        "no-caps": ""
                      }, null, 8, ["color"])
                    ])
                  ]),
                  _: 1
                }, 8, ["model-value", "mask", "color"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Ht = { class: "flex column" }, Mt = {
  key: 0,
  class: "q-field__bottom"
}, Gt = {
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
    const e = o, t = q(!0), n = e.formApi.form.formStyle;
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
    }), (s, d) => (h(), $("div", Ht, [
      V(a(St), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), $("div", Mt, P(e.field.hint), 1)) : I("", !0),
      t.value !== !0 ? (h(), $("div", Gt, P(t.value), 1)) : I("", !0)
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
    const e = o, t = q([]), l = q([]), n = q(), i = e.formApi.form, c = i.formSettings, r = i.formStyle, s = c.rulesBehaviour === "lazy";
    function d(A, C) {
      if (A === "") {
        C(() => {
          l.value = [...t.value];
        });
        return;
      }
      C(() => {
        const N = A.toLowerCase();
        l.value = t.value.filter((E) => E.label.toLowerCase().includes(N));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), l.value = e.field.staticSelectOptions ?? [];
    }
    function D() {
      return n.value ? n.value.validate() : !1;
    }
    function v() {
      return n.value ? !n.value.hasError : !1;
    }
    function k() {
      n.value && n.value.resetValidation();
    }
    function T() {
      l.value = [];
    }
    return Y(() => {
      p(), e.registerBehaviourCallbacks(D, v, k, void 0, T);
    }), (A, C) => (h(), B(a(Oe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (N) => e.modelValueOnUpdate(N)),
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
        V(a(me), {
          dense: a(r).fieldDense
        }, {
          default: y(() => [
            V(a(te), null, {
              default: y(() => [
                V(a(ne), null, {
                  default: y(() => [
                    ee(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, c = n.rulesBehaviour === "lazy", r = q([]), s = q(
      D()
    ), d = q(), p = q(Ie);
    function D() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function v(g, u) {
      if (g === p.value) {
        u(() => {
        });
        return;
      }
      const f = e.formApi.getAssociationDataCallback();
      s.value = D(), p.value = g;
      const x = e.formApi.form;
      s.value.isLoading = !0, f({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: g,
        context: x.context
      }).then((F) => {
        u(() => {
          r.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = D();
      });
    }
    function k() {
      var u, f;
      const g = e.getValueSerialized();
      !g || !e.field.associationData || (r.value = [
        {
          label: ((u = e.field.associationData[0]) == null ? void 0 : u.label) ?? "???",
          value: g,
          data: (f = e.field.associationData[0]) == null ? void 0 : f.data
        }
      ]);
    }
    function T() {
      return d.value ? d.value.validate() : !1;
    }
    function A() {
      return d.value ? !d.value.hasError : !1;
    }
    function C() {
      d.value && d.value.resetValidation();
    }
    function N() {
      s.value = D(), r.value = [], p.value = Ie;
    }
    function E(g) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && g.to === u && u !== -1) {
        const f = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: f.resourceName,
          resourceId: f.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: f.context
        }).then((F) => {
          r.value = r.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        T,
        A,
        C,
        k,
        N
      ), ve(() => {
        k();
      });
    }), (g, u) => (h(), B(a(Oe), {
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
      onFilter: v,
      onVirtualScroll: E
    }, {
      "no-option": y(() => [
        V(a(me), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            V(a(te), null, {
              default: y(() => [
                V(a(ne), null, {
                  default: y(() => [
                    ee(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (h(), B(oe(a(t)), {
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, c = n.rulesBehaviour === "lazy", r = q([]), s = q(
      D()
    ), d = q(), p = q(Pe);
    function D() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function v(g, u) {
      if (g === p.value) {
        u(() => {
        });
        return;
      }
      const f = e.formApi.getAssociationDataCallback();
      s.value = D(), p.value = g;
      const x = e.formApi.form;
      s.value.isLoading = !0, f({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: g,
        context: x.context
      }).then((F) => {
        u(() => {
          r.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = D();
      });
    }
    function k() {
      const g = e.getValueSerialized();
      !g || !e.field.associationData || (r.value = g.map((u, f) => ({
        label: e.field.associationData[f].label ?? "???",
        value: u,
        data: e.field.associationData[f].data
      })));
    }
    function T() {
      return d.value ? d.value.validate() : !1;
    }
    function A() {
      return d.value ? !d.value.hasError : !1;
    }
    function C() {
      d.value && d.value.resetValidation();
    }
    function N() {
      s.value = D(), r.value = [], p.value = Pe;
    }
    function E(g) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && g.to === u && u !== -1) {
        const f = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: f.resourceName,
          resourceId: f.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: p.value,
          context: f.context
        }).then((F) => {
          r.value = r.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        T,
        A,
        C,
        k,
        N
      ), ve(() => {
        k();
      });
    }), (g, u) => (h(), B(a(Oe), {
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
      onFilter: v,
      onVirtualScroll: E
    }, {
      "no-option": y(() => [
        V(a(me), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            V(a(te), null, {
              default: y(() => [
                V(a(ne), null, {
                  default: y(() => [
                    ee(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (h(), B(oe(a(t)), {
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = q();
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
    }), (p, D) => (h(), B(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (v) => e.modelValueOnUpdate(v)),
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = q();
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
    }), (p, D) => (h(), B(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (v) => e.modelValueOnUpdate(v)),
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", c = q();
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
    }), (p, D) => (h(), B(a(Fe), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[1] || (D[1] = (v) => e.modelValueOnUpdate(v)),
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
        V(a(Se), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            V(a(De), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                V(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (v) => e.modelValueOnUpdate(v))
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
    }, r = q();
    function s() {
      return !!r.value;
    }
    function d() {
      return !!r.value;
    }
    function p() {
    }
    function D(T) {
      var C;
      T.preventDefault(), T.stopPropagation();
      const A = (C = T.clipboardData) == null ? void 0 : C.items;
      if (A)
        for (let N = 0; N < A.length; N++) {
          const E = A[N];
          if (E.type.startsWith("image/")) {
            const g = E.getAsFile();
            g && k(g);
          }
        }
    }
    function v(T) {
      var C;
      T.preventDefault(), T.stopPropagation();
      const A = (C = T.dataTransfer) == null ? void 0 : C.files;
      if (A)
        for (let N = 0; N < A.length; N++) {
          const E = A[N];
          E.type.startsWith("image/") && E && k(E);
        }
    }
    function k(T) {
      if (!r.value)
        return;
      const A = new FileReader();
      A.onload = (C) => {
        var E;
        const N = (E = C.target) == null ? void 0 : E.result;
        if (typeof N == "string") {
          const g = new Image();
          g.onload = () => {
            var x;
            const u = g.width, f = g.height;
            (x = r.value) == null || x.runCmd(
              "insertHTML",
              `<img src="${N}" width="${u}" height="${f}" style="max-width: 80%; height: auto;" />`
            );
          }, g.src = N;
        }
      }, A.readAsDataURL(T);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, d, p);
    }), (T, A) => {
      const C = He("q-editor");
      return e.modelValue ? (h(), B(C, {
        key: 0,
        ref_key: "fieldRef",
        ref: r,
        "model-value": e.modelValue,
        "onUpdate:modelValue": A[0] || (A[0] = (N) => e.modelValueOnUpdate(N)),
        toolbar: i,
        fonts: c,
        placeholder: e.field.label,
        square: a(n).fieldSquare,
        dense: a(n).fieldDense,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onPaste: D,
        onDrop: v
      }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : I("", !0);
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
function U(o) {
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
    const e = o, l = e.formApi.form.formStyle, n = q(null);
    function i() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), C();
    }
    function c() {
      var f;
      let u = e.modelValue;
      u.add = [], u.delete = ((f = e.field.attachmentData) == null ? void 0 : f.map((x) => x.attachment_id)) ?? [], e.modelValueOnUpdate(u), C();
    }
    function r() {
      return C(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function p(u) {
      return new Promise((f) => {
        const x = new Blob([u]), F = new FileReader();
        F.onload = (G) => {
          var ie;
          const se = ((ie = G.target) == null ? void 0 : ie.result) ?? "", [re, Z] = se.split(",");
          f(Z);
        }, F.readAsDataURL(x);
      });
    }
    async function D(u) {
      return {
        key: `${u.lastModified}${u.name}`,
        size: u.size,
        filename: u.name,
        contentType: u.type,
        base64: await p(await u.arrayBuffer())
      };
    }
    async function v(u) {
      if (!u[0])
        return;
      const f = await D(u[0]);
      let x = e.modelValue;
      x.add = [f], e.modelValueOnUpdate(x), C();
    }
    function k(u) {
      if (!u[0])
        return;
      let f = e.modelValue;
      f.add = [], f.delete = [], e.modelValueOnUpdate(f), C();
    }
    function T(u) {
      let f = e.modelValue;
      f.delete = [u.attachment_id], e.modelValueOnUpdate(f), C();
    }
    function A() {
      let u = e.modelValue;
      u.delete = [], e.modelValueOnUpdate(u), C();
    }
    function C() {
      n.value = null;
      for (const u of e.rules) {
        const f = u(e.modelValue);
        if (typeof f == "string") {
          n.value = f;
          break;
        }
      }
    }
    const N = le(() => (e.field.attachmentData ?? []).length === 0), E = le(() => e.modelValue ? e.modelValue.delete : []), g = le(() => {
      var u, f;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((f = e.field.attachmentData) == null ? void 0 : f.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (u, f) => (h(), $("div", Xt, [
      V(a(Qe), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: v,
        onRemoved: k,
        style: { width: "inherit" }
      }, {
        header: y((x) => [
          M("div", Zt, [
            M("div", en, [
              M("div", tn, P(e.field.label), 1),
              e.field.hint ? (h(), $("div", nn, P(e.field.hint), 1)) : I("", !0)
            ]),
            x.canAddFiles && g.value ? (h(), B(a(K), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: x.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                V(a(We))
              ]),
              _: 1
            }, 8, ["onClick"])) : I("", !0)
          ])
        ]),
        list: y((x) => [
          N.value ? I("", !0) : (h(), $("div", an, [
            f[0] || (f[0] = M("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            V(a(Ae), { separator: "" }, {
              default: y(() => [
                (h(!0), $(ce, null, fe(e.field.attachmentData ?? [], (F) => (h(), B(a(me), {
                  key: F.attachment_id
                }, {
                  default: y(() => [
                    V(a(te), null, {
                      default: y(() => [
                        V(a(ne), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            ee(P(F.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        V(a(ne), { caption: "" }, {
                          default: y(() => [
                            ee(P(a(pe)(F.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (h(), B(a(te), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        E.value.includes(F.attachment_id) ? I("", !0) : (h(), B(a(K), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => T(F)
                        }, null, 8, ["disable", "onClick"])),
                        E.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), B(a(K), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: A
                        }, null, 8, ["disable"])) : I("", !0)
                      ]),
                      _: 2
                    }, 1024)) : I("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !N.value && x.files.length > 0 ? (h(), B(a(Ye), { key: 1 })) : I("", !0),
          x.files.length > 0 ? (h(), $("div", on, [
            f[1] || (f[1] = M("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            V(a(Ae), { separator: "" }, {
              default: y(() => [
                (h(!0), $(ce, null, fe(x.files, (F) => (h(), B(a(me), {
                  key: F.__key
                }, {
                  default: y(() => [
                    V(a(te), null, {
                      default: y(() => [
                        V(a(ne), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            ee(P(F.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        V(a(ne), { caption: "" }, {
                          default: y(() => [
                            ee(P(F.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    V(a(te), {
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        V(a(K), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => x.removeFile(F)
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
          ])) : I("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (h(), $("div", ln, P(n.value), 1)) : I("", !0)
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
    const e = o, l = e.formApi.form.formStyle, n = q(null);
    function i() {
      let g = e.modelValue;
      g.add = [], g.delete = [], e.modelValueOnUpdate(g), C();
    }
    function c() {
      var u;
      let g = e.modelValue;
      g.add = [], g.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((f) => f.attachment_id)) ?? [], e.modelValueOnUpdate(g), C();
    }
    function r() {
      return C(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function p(g) {
      return new Promise((u) => {
        const f = new Blob([g]), x = new FileReader();
        x.onload = (F) => {
          var Z;
          const G = ((Z = F.target) == null ? void 0 : Z.result) ?? "", [se, re] = G.split(",");
          u(re);
        }, x.readAsDataURL(f);
      });
    }
    async function D(g) {
      return {
        key: `${g.lastModified}${g.name}`,
        size: g.size,
        filename: g.name,
        contentType: g.type,
        base64: await p(await g.arrayBuffer())
      };
    }
    async function v(g) {
      for (const u of g) {
        const f = await D(u);
        let x = e.modelValue;
        x.add.push(f), e.modelValueOnUpdate(x);
      }
      C();
    }
    async function k(g) {
      for (const u of g) {
        const f = await D(u);
        let x = e.modelValue;
        x.add = x.add.filter((F) => F.key !== f.key), e.modelValueOnUpdate(x);
      }
      C();
    }
    function T(g) {
      let u = e.modelValue;
      u.delete.push(g.attachment_id), e.modelValueOnUpdate(u), C();
    }
    function A(g) {
      let u = e.modelValue;
      u.delete = u.delete.filter((f) => f !== g.attachment_id), e.modelValueOnUpdate(u), C();
    }
    function C() {
      n.value = null;
      for (const g of e.rules) {
        const u = g(e.modelValue);
        if (typeof u == "string") {
          n.value = u;
          break;
        }
      }
    }
    const N = le(() => (e.field.attachmentData ?? []).length === 0), E = le(() => e.modelValue ? e.modelValue.delete : []);
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, d, i, c);
    }), (g, u) => (h(), $("div", sn, [
      V(a(Qe), {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: v,
        onRemoved: k,
        style: { width: "inherit" }
      }, {
        header: y((f) => [
          M("div", un, [
            M("div", dn, [
              M("div", cn, P(e.field.label), 1),
              e.field.hint ? (h(), $("div", fn, P(e.field.hint), 1)) : I("", !0)
            ]),
            f.canAddFiles ? (h(), B(a(K), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: f.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                V(a(We))
              ]),
              _: 1
            }, 8, ["onClick"])) : I("", !0)
          ])
        ]),
        list: y((f) => {
          var x;
          return [
            N.value ? I("", !0) : (h(), $("div", mn, [
              M("div", pn, "Fichier" + P((((x = e.field.attachmentData) == null ? void 0 : x.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              V(a(Ae), { separator: "" }, {
                default: y(() => [
                  (h(!0), $(ce, null, fe(e.field.attachmentData ?? [], (F) => (h(), B(a(me), {
                    key: F.attachment_id
                  }, {
                    default: y(() => [
                      V(a(te), null, {
                        default: y(() => [
                          V(a(ne), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              ee(P(F.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          V(a(ne), { caption: "" }, {
                            default: y(() => [
                              ee(P(a(pe)(F.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (h(), B(a(te), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          E.value.includes(F.attachment_id) ? I("", !0) : (h(), B(a(K), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (G) => T(F)
                          }, null, 8, ["disable", "onClick"])),
                          E.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), B(a(K), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (G) => A(F)
                          }, null, 8, ["disable", "onClick"])) : I("", !0)
                        ]),
                        _: 2
                      }, 1024)) : I("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              })
            ])),
            !N.value && f.files.length > 0 ? (h(), B(a(Ye), { key: 1 })) : I("", !0),
            f.files.length > 0 ? (h(), $("div", gn, [
              M("div", hn, "Fichier" + P(f.files.length > 0 ? "s" : "") + " à ajouter", 1),
              V(a(Ae), { separator: "" }, {
                default: y(() => [
                  (h(!0), $(ce, null, fe(f.files, (F) => (h(), B(a(me), {
                    key: F.__key
                  }, {
                    default: y(() => [
                      V(a(te), null, {
                        default: y(() => [
                          V(a(ne), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              ee(P(F.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          V(a(ne), { caption: "" }, {
                            default: y(() => [
                              ee(P(F.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      V(a(te), {
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          V(a(K), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (G) => f.removeFile(F)
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
            ])) : I("", !0)
          ];
        }),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (h(), $("div", vn, P(n.value), 1)) : I("", !0)
    ]));
  }
});
class he {
  constructor(e, t, l, n, i, c, r, s, d) {
    O(this, "resourceName");
    O(this, "resourceId");
    O(this, "formMetadataAndData");
    O(this, "context");
    O(this, "formSettings");
    O(this, "formStyle");
    O(this, "actionComponent");
    O(this, "orphanErrorsComponent");
    O(this, "sectionComponent");
    O(this, "wrapperResetComponent");
    O(this, "associationDisplayComponent");
    O(this, "dynamicComponentRecord");
    O(this, "formApi");
    O(this, "registerEventCallback");
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
        c.fields.forEach((k) => {
          const T = this.dynamicComponentRecord[`field-${k.field_name}-before`], A = he.getFieldComponentByFormFieldType(k), C = this.dynamicComponentRecord[`field-${k.field_name}-after`], N = {
            associationDisplayComponent: W(
              this.associationDisplayComponent
            ),
            regularFieldType: he.getRegularFieldTypeByFieldType(
              k.field_type
            )
          };
          let E = k.label;
          this.formSettings.requiredFieldsHasAsterisk && k.rules.find((u) => u.type === "required") && (E = E.concat("*"));
          const g = {
            type: k.field_type,
            extraType: k.field_extra_type,
            metadata: Object.freeze(k),
            label: E,
            hint: k.hint ?? void 0,
            prefix: k.prefix ?? void 0,
            suffix: k.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? k.readonly ?? void 0,
            cssClass: k.css_class ?? void 0,
            staticSelectOptions: k.static_select_options,
            associationData: k.field_association_data,
            attachmentData: k.field_attachment_data,
            rules: k.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: T ? W(T) : void 0,
            mainComponent: W(A),
            afterComponent: C ? W(C) : void 0,
            events: l.fields[k.field_name] ?? {},
            componentOptions: N
          };
          s.push(g), t.add(k.field_name);
        });
        const d = this.dynamicComponentRecord[`section-${c.name ?? r}-before`], p = this.sectionComponent, D = this.dynamicComponentRecord[`section-${c.name ?? r}-after`], v = {
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
          afterComponent: D ? W(D) : void 0,
          fields: s
        };
        n.push(v);
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
    const c = Me(), r = {
      softReset: p,
      reset: D,
      clear: v,
      validate: A,
      isValid: C,
      isInvalid: N,
      hide: k,
      unhide: T,
      resetValidation: E,
      getFields: g,
      setReadonlyState: u,
      setCssClass: f,
      setIcon: x,
      setLabel: F,
      section: t.section
    }, s = q(/* @__PURE__ */ new Map());
    function d() {
      t.section.fields.forEach((b) => {
        const R = b.metadata.field_name, j = t.formApi.getFieldByName(R);
        j && s.value.set(R, j);
      });
    }
    function p() {
      s.value.forEach((b) => {
        b.softReset();
      });
    }
    function D() {
      s.value.forEach((b) => {
        b.reset();
      }), U(t.section.events.onReset);
    }
    function v() {
      s.value.forEach((b) => {
        b.clear();
      }), U(t.section.events.onClear);
    }
    function k() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((R) => {
        R.hide();
      }), b.hidden = !0, U(t.section.events.onHide));
    }
    function T() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((R) => {
        R.unhide();
      }), b.hidden = !1, U(t.section.events.onUnhide));
    }
    function A() {
      let b = !0;
      return s.value.forEach((R) => {
        if (!R.validate()) {
          b = !1;
          return;
        }
      }), U(t.section.events.onValidated), b;
    }
    function C() {
      let b = !0;
      return s.value.forEach((R) => {
        if (!R.isValid()) {
          b = !1;
          return;
        }
      }), b;
    }
    function N() {
      return !C();
    }
    function E() {
      s.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function g() {
      return s.value;
    }
    function u(b) {
      const R = t.privateFormApi.getSectionRef(
        t.section.name
      );
      R && (R.readonly = b);
    }
    function f(b) {
      const R = t.privateFormApi.getSectionRef(
        t.section.name
      );
      R && (R.cssClass = b);
    }
    function x(b) {
      const R = t.privateFormApi.getSectionRef(
        t.section.name
      );
      R && (R.icon = b);
    }
    function F(b) {
      const R = t.privateFormApi.getSectionRef(
        t.section.name
      );
      R && (R.label = b);
    }
    function G() {
      const b = {};
      for (const [R, j] of s.value)
        b[R] = j.getValueSerialized();
      return b;
    }
    function se() {
      const b = c.default;
      if (!b) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const R = H({
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
      t.privateFormApi.setSectionFieldComponent(t.section, W(R));
    }
    e(r);
    const re = le(() => C()), Z = le(() => N()), ie = le(() => G());
    return Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        l == null || l(), l = null, b && (l = Q(re, (R) => {
          R && U(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = Q(Z, (R) => {
          var j;
          R && U((j = t.section) == null ? void 0 : j.events.onIsInvalid);
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
            var R;
            U((R = t.section) == null ? void 0 : R.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var R;
      se();
      const b = (R = Ge()) == null ? void 0 : R.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), ve(() => {
        var j;
        d(), U((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (b, R) => we((h(), $("div", bn, [
      t.section.beforeComponent ? (h(), B(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (h(), B(oe(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), B(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [qe, t.section.hidden !== !0]
    ]);
  }
});
function Cn(o, e) {
  const t = o.rules ?? [], l = o.type, n = e.form, i = (d, p, D) => d[p] ? D ? () => c(d[p]) : () => d[p] : d.compare_to ? () => {
    var v;
    return ((v = e.getFieldByName(d.compare_to)) == null ? void 0 : v.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
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
          En(i(p, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          wn(
            i(p, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(qn());
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
          Gn(
            i(p, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Mn(i(p, "equal_to"))
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
        r.push(Ee(n.formSettings.dateFormat));
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
function En(o, e) {
  return (t) => {
    const l = o();
    return Number(t) === l || `Égale à ${l}`;
  };
}
function wn(o, e) {
  return (t) => {
    const l = o();
    return Number(t) !== l || `Doit être différent de ${o}`;
  };
}
function qn() {
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
function Mn(o, e) {
  return (t) => {
    const l = o();
    return String(t) === l || `Égale à ${l}`;
  };
}
function Gn(o) {
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
function Ee(o) {
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
    const s = C(), d = q(), p = q([]);
    function D() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = k(d.value);
    }
    function v() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = k(d.value), U(t.field.events.onReset), c(), ve(() => {
        ye();
      });
    }
    function k(_) {
      const w = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return _ == null || _ === "" ? !1 : _;
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), w.formSettings.backendDateFormat),
            w.formSettings.dateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(
              String(_),
              w.formSettings.backendDatetimeFormat
            ),
            w.formSettings.datetimeFormat
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
    function T(_) {
      const w = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), w.formSettings.dateFormat),
            w.formSettings.backendDateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), w.formSettings.datetimeFormat),
            w.formSettings.backendDatetimeFormat
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
    function A() {
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
      r(), U(t.field.events.onClear);
    }
    function C() {
      return da.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function N(_) {
      d.value = _;
    }
    function E() {
      return a(d);
    }
    function g() {
      return T(a(d));
    }
    function u(_) {
      p.value = _;
    }
    function f() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !0, U(t.field.events.onHide));
    }
    function x() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !1, U(t.field.events.onUnhide));
    }
    function F(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.readonly = _);
    }
    function G(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.hint = _);
    }
    function se(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.cssClass = _);
    }
    function re(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.suffix = _);
    }
    function Z(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.prefix = _);
    }
    function ie(_) {
      const w = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      w && (w.label = _);
    }
    function b() {
      const _ = l();
      return U(t.field.events.onValidated), _;
    }
    function R() {
      return n();
    }
    function j() {
      return !R();
    }
    function ye() {
      return i();
    }
    function _e(_, w, ue, be, Ve) {
      l = _, n = w, i = ue, be && (c = be), Ve && (r = Ve);
    }
    const Ce = {
      softReset: D,
      reset: v,
      clear: A,
      validate: b,
      isValid: R,
      isInvalid: j,
      hide: f,
      unhide: x,
      resetValidation: ye,
      getValueDeserialized: g,
      getValueSerialized: E,
      setupBackendErrors: u,
      setReadonlyState: F,
      setHint: G,
      setCssClass: se,
      setSuffix: re,
      setPrefix: Z,
      setLabel: ie,
      setValue: N,
      field: t.field
    };
    return e(Ce), Q(
      () => t.field.events.onUpdate ? d.value : null,
      () => {
        U(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? d.value : null,
      (_) => {
        U(_ ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var w, ue;
      D();
      const _ = (w = Ge()) == null ? void 0 : w.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), U((ue = t.field) == null ? void 0 : ue.events.onReady);
    }), (_, w) => we((h(), $("div", null, [
      t.field.beforeComponent ? (h(), B(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Ce
      }, null, 8, ["formApi"])) : I("", !0),
      (h(), B(oe(t.field.mainComponent), {
        modelValue: d.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: v,
        clear: A,
        getValueDeserialized: g,
        getValueSerialized: E,
        validate: b,
        modelValueOnUpdate: N,
        registerBehaviourCallbacks: _e
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), B(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Ce
      }, null, 8, ["formApi"])) : I("", !0),
      p.value.length > 0 ? (h(), $("div", ca, [
        (h(!0), $(ce, null, fe(p.value, (ue, be) => (h(), $("div", {
          index: be,
          class: "flex column"
        }, P(ue), 9, fa))), 256))
      ])) : I("", !0)
    ], 512)), [
      [qe, t.field.hidden !== !0]
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
    const D = Me(), v = q(he.getEmptyFormBeforeInit()), k = q(!1), T = q(!1), A = q(!1), C = q(!1), N = q("create"), E = q({}), g = q(/* @__PURE__ */ new Map()), u = q(/* @__PURE__ */ new Map());
    async function f() {
      l = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), v.value = he.getForm(
        t.resourceName,
        t.resourceId,
        F(),
        l,
        t.formSettings,
        t.formStyle,
        t.context,
        ge,
        t.eventManager
      ), i = v.value.sections.length, c = v.value.sections.map((m) => m.fields).flat().length, t.resourceId && (N.value = "edit");
    }
    async function x() {
      var z, ae, ke;
      if (!re())
        return;
      U((z = v.value) == null ? void 0 : z.events.onSubmit), C.value = !0, _e();
      const m = G(), S = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: m,
        context: v.value.context
      });
      if (p = S.resource_data, S.success)
        E.value = {}, N.value === "create" && (N.value = "edit"), l && S.resource_data && (l.resource_data = S.resource_data), v.value = he.getForm(
          t.resourceName,
          t.resourceId,
          F(),
          {
            form: S.form,
            resource_data: S.resource_data
          },
          t.formSettings,
          t.formStyle,
          v.value.context,
          ge,
          t.eventManager
        ), b(), n = JSON.stringify(G()), U((ke = v.value) == null ? void 0 : ke.events.onSubmitSuccess);
      else {
        E.value = {};
        const xe = [];
        for (const [de, ht] of u.value) {
          const $e = S.errors[de];
          $e && (ht.setupBackendErrors($e), xe.push(de));
        }
        Object.entries(S.errors).forEach((de) => {
          xe.includes(de[0]) || (E.value[de[0]] = de[1]);
        }), U((ae = v.value) == null ? void 0 : ae.events.onSubmitUnsuccess);
      }
      C.value = !1;
    }
    function F() {
      const m = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const S in D) {
        const z = D[S];
        if (z) {
          const ae = H({
            inheritAttrs: !1,
            setup(ke, { attrs: xe, slots: de }) {
              return () => z({
                ...ke,
                ...xe,
                innerSlots: de
              });
            }
          });
          switch (S) {
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
              m.dynamicComponentRecord[S] = ae;
              break;
          }
        }
      }
      return m;
    }
    function G() {
      const m = {};
      for (const [S, z] of u.value)
        m[S] = z.getValueDeserialized();
      return m;
    }
    function se() {
      const m = {};
      for (const [S, z] of u.value)
        m[S] = z.getValueSerialized();
      return m;
    }
    function re() {
      var S;
      let m = !0;
      return u.value.forEach((z) => {
        if (!z.validate()) {
          m = !1;
          return;
        }
      }), U((S = v.value) == null ? void 0 : S.events.onValidated), m;
    }
    function Z() {
      let m = !0;
      return u.value.forEach((S) => {
        if (!S.isValid()) {
          m = !1;
          return;
        }
      }), m;
    }
    function ie() {
      return !Z();
    }
    function b() {
      g.value.forEach((m) => {
        m.softReset();
      });
    }
    function R() {
      var m;
      u.value.forEach((S) => {
        S.reset();
      }), U((m = v.value) == null ? void 0 : m.events.onReset);
    }
    function j() {
      var m;
      u.value.forEach((S) => {
        S.clear();
      }), U((m = v.value) == null ? void 0 : m.events.onClear);
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
      return g.value.get(m);
    }
    function w(m) {
      return [...g.value.values()].at(m);
    }
    function ue() {
      return g.value;
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
      ].forEach((S) => {
        (t[S] === null || t[S] === void 0) && console.warn(`Missing props for <Submit64> -> ${S}`);
      });
    }
    function Ze() {
      return a(N);
    }
    function et() {
      return n !== JSON.stringify(G());
    }
    function tt(m) {
      v.value && (v.value.context = m);
    }
    function nt(m) {
      v.value && (v.value.cssClass = m);
    }
    function at(m) {
      v.value && (v.value.readonly = m);
    }
    function ot() {
      return A.value;
    }
    function lt() {
      return p;
    }
    function rt() {
      return v;
    }
    function it(m) {
      var S;
      return (S = v.value) == null ? void 0 : S.sections.find((z) => z.name === m);
    }
    function st(m) {
      var S;
      return (S = v.value) == null ? void 0 : S.sections.map((z) => z.fields).flat().find((z) => z.metadata.field_name === m);
    }
    function ut(m, S) {
      g.value.set(m, S), i === g.value.size && (k.value = !0);
    }
    function dt(m, S) {
      u.value.set(m, S), c === u.value.size && (T.value = !0);
    }
    function ct(m, S) {
      m.fieldsComponent = S;
    }
    const ze = {
      getFormRef: rt,
      getSectionRef: it,
      getFieldRef: st,
      registerSectionWrapperRef: ut,
      registerFieldWrapperRef: dt,
      setSectionFieldComponent: ct
    }, ft = new Proxy({}, {
      get(m, S) {
        var z;
        return (z = v.value) == null ? void 0 : z[S];
      }
    }), ge = {
      getMode: Ze,
      getSectionByName: _,
      getSectionByIndex: w,
      getSections: ue,
      getFieldByName: be,
      getFields: Ve,
      validate: re,
      isValid: Z,
      isInvalid: ie,
      softReset: b,
      reset: R,
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
      () => k.value && T.value,
      (m) => {
        var S;
        m && !A.value && (U((S = v.value) == null ? void 0 : S.events.onReady), A.value = !0);
      }
    ), Q(
      () => {
        var m;
        return (m = v.value) == null ? void 0 : m.events.onIsValid;
      },
      (m) => {
        r == null || r(), r = null, m && (r = Q(mt, (S) => {
          var z;
          S && U((z = v.value) == null ? void 0 : z.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var m;
        return (m = v.value) == null ? void 0 : m.events.onIsInvalid;
      },
      (m) => {
        s == null || s(), s = null, m && (s = Q(pt, (S) => {
          var z;
          S && U((z = v.value) == null ? void 0 : z.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var m;
        return (m = v.value) == null ? void 0 : m.events.onUpdate;
      },
      (m) => {
        d == null || d(), d = null, m && (d = Q(
          gt,
          () => {
            var S;
            U((S = v.value) == null ? void 0 : S.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      Xe(), await f(), ve(() => {
        n = JSON.stringify(G());
      });
    }), (m, S) => we((h(), $("div", pa, [
      M("div", {
        class: X(v.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), $(ce, null, fe(v.value.sections, (z) => (h(), B(_n, {
          key: z.name,
          section: z,
          formApi: ge,
          privateFormApi: ze
        }, {
          default: y(() => [
            (h(!0), $(ce, null, fe(z.fields, (ae) => (h(), B(ma, {
              key: ae.metadata.field_name,
              field: ae,
              formApi: ge,
              privateFormApi: ze
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (h(), B(oe(v.value.orphanErrorsComponent), {
        orphanErrors: E.value,
        formApi: ge
      }, null, 8, ["orphanErrors"])),
      (h(), B(oe(v.value.actionComponent), {
        isLoadingSubmit: C.value,
        formApi: ge
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [qe, A.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  ya as Submit64Form
};
