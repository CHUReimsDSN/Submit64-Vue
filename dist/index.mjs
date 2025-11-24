var rt = Object.defineProperty;
var it = (o, e, t) => e in o ? rt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => it(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as y, createElementVNode as Z, createVNode as E, createBlock as T, createCommentVNode as Q, unref as a, mergeProps as ke, toDisplayString as J, renderSlot as Ie, resolveComponent as lt, normalizeProps as st, guardReactiveProps as ut, withCtx as V, createTextVNode as he, Fragment as fe, renderList as me, ref as S, onMounted as j, normalizeClass as K, watch as U, resolveDynamicComponent as W, nextTick as se, markRaw as H, getCurrentInstance as $e, withDirectives as Ve, vShow as De, computed as oe, useSlots as ct } from "vue";
import { QBtn as ae, QIcon as pe, QItem as ye, QItemSection as be, QItemLabel as Ce, QInput as _e, QPopupProxy as xe, QDate as ze, QTime as dt, QCheckbox as ft, QSelect as Ae, date as O } from "quasar";
const mt = { class: "flex column" }, pt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, gt = /* @__PURE__ */ z({
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
    return (r, n) => (y(), L("div", mt, [
      Z("div", pt, [
        E(a(ae), ke(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (y(), T(a(ae), ke({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : Q("", !0),
        e.formApi.clear ? (y(), T(a(ae), ke({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : Q("", !0)
      ])
    ]));
  }
}), vt = { class: "flex row items-center" }, ht = { class: "text-body1 text-weight-medium" }, yt = { class: "flex column q-gutter-md" }, bt = /* @__PURE__ */ z({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), L("div", null, [
      Z("div", vt, [
        e.sectionApi.section.icon ? (y(), T(a(pe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : Q("", !0),
        Z("div", ht, J(e.sectionApi.section.label), 1)
      ]),
      Z("div", yt, [
        Ie(t.$slots, "default")
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ z({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = lt("q-icon");
      return y(), T(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (u) => e.reset())
      });
    };
  }
}), _t = /* @__PURE__ */ z({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), T(a(ye), st(ut(e.itemProps)), {
      default: V(() => [
        E(a(be), null, {
          default: V(() => [
            E(a(Ce), null, {
              default: V(() => [
                he(J(e.entry.label), 1)
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
}), St = { class: "flex column" }, Ft = /* @__PURE__ */ z({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (y(), L("div", St, [
      (y(!0), L(fe, null, me(e.orphanErrors, (n, u) => (y(), L("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, J(u) + " : " + J(n.join(",")), 1))), 128))
    ]));
  }
}), ve = class ve {
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
_(ve, "_instance", new ve());
let G = ve;
class ge {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, u = new kt(r, n, this.formApi);
    return this.events.push(u), new xt(u);
  }
  static create(e) {
    return new ge(e);
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
class kt {
  constructor(e, t, r) {
    _(this, "type");
    _(this, "data");
    _(this, "formApi");
    _(this, "action", () => {
    });
    _(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class xt {
  constructor(e) {
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Vt = { class: "row items-center justify-end" }, Dt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", s = S(), i = S();
    function l() {
      s.value && s.value.hide();
    }
    function c() {
      return i.value ? i.value.validate() : !1;
    }
    function F() {
      return i.value ? !i.value.hasError : !1;
    }
    function f() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(c, F, f);
    }), (b, q) => (y(), T(a(_e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": q[1] || (q[1] = (B) => e.modelValueOnUpdate(B)),
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
      class: K(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        E(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            E(a(xe), {
              ref_key: "popupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                E(a(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": q[0] || (q[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    Z("div", Vt, [
                      E(a(ae), {
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
}), At = { class: "row items-center justify-end" }, Rt = { class: "row items-center justify-end" }, Nt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", s = S(), i = S(), l = S();
    function c() {
      s.value && s.value.hide();
    }
    function F() {
      i.value && i.value.hide();
    }
    function f() {
      return l.value ? l.value.validate() : !1;
    }
    function b() {
      return l.value ? !l.value.hasError : !1;
    }
    function q() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(f, b, q);
    }), (B, D) => (y(), T(a(_e), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[2] || (D[2] = (A) => e.modelValueOnUpdate(A)),
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
      class: K(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        E(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            E(a(xe), {
              ref_key: "datePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                E(a(ze), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    Z("div", At, [
                      E(a(ae), {
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
        E(a(pe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            E(a(xe), {
              ref_key: "timePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                E(a(dt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[1] || (D[1] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    Z("div", Rt, [
                      E(a(ae), {
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
}), Et = { class: "flex column" }, Bt = {
  key: 0,
  class: "q-field__bottom"
}, Ot = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Tt = /* @__PURE__ */ z({
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
    const e = o, t = S(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function s() {
      return t.value === !0;
    }
    function i() {
      t.value = !0;
    }
    return U(
      () => e.modelValue,
      (l) => {
        for (const c of e.rules)
          if (t.value = c(l), t.value !== !0)
            break;
      }
    ), j(() => {
      e.registerBehaviourCallbacks(u, s, i);
    }), (l, c) => (y(), L("div", Et, [
      E(a(ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (F) => e.modelValueOnUpdate(F)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: K([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (y(), L("div", Bt, J(e.field.hint), 1)) : Q("", !0),
      t.value !== !0 ? (y(), L("div", Ot, J(t.value), 1)) : Q("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ z({
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
    return t.formStyle, r.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
}), wt = /* @__PURE__ */ z({
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
    const e = o, t = S([]), r = S([]), n = S(), u = e.formApi.form, s = u.formSettings, i = u.formStyle, l = s.rulesBehaviour === "lazy";
    function c(D, A) {
      if (D === "") {
        A(() => {
          r.value = [...t.value];
        });
        return;
      }
      A(() => {
        const I = D.toLowerCase();
        r.value = t.value.filter((P) => P.label.toLowerCase().includes(I));
      });
    }
    function F() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function f() {
      return n.value ? n.value.validate() : !1;
    }
    function b() {
      return n.value ? !n.value.hasError : !1;
    }
    function q() {
      n.value && n.value.resetValidation();
    }
    function B() {
      e.clear(), r.value = [];
    }
    return j(() => {
      F(), e.registerBehaviourCallbacks(f, b, q);
    }), (D, A) => (y(), T(a(Ae), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (I) => e.modelValueOnUpdate(I)),
      type: e.field.componentOptions.regularFieldType,
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
      class: K(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: B,
      onFilter: c
    }, {
      default: V(() => [
        E(a(ye), {
          dense: a(i).fieldDense
        }, {
          default: V(() => [
            E(a(be), null, {
              default: V(() => [
                E(a(Ce), null, {
                  default: V(() => [
                    he(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Oe = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, u = r.formStyle, s = n.rulesBehaviour === "lazy", i = S([]), l = S(
      f()
    ), c = S(), F = S("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function b(v, N) {
      if (v === F.value) {
        N(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      l.value = f(), F.value = v;
      const $ = e.formApi.form;
      l.value.isLoading = !0, k({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: l.value.limit,
        offset: (l.value.nextPage - 1) * l.value.limit,
        labelFilter: v,
        context: $.context
      }).then((w) => {
        N(() => {
          i.value = w.rows, l.value.lastPage = Math.ceil(
            w.row_count / l.value.limit
          ), l.value.isLoading = !1;
        });
      }).catch(() => {
        i.value = [], l.value = f();
      });
    }
    function q() {
      se(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (i.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: v,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), l.value = f(), i.value = [];
    }
    function P(v) {
      const N = i.value.length - 1;
      if (l.value.isLoading !== !0 && l.value.nextPage < l.value.lastPage && v.to === N && N !== -1) {
        const k = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        l.value.isLoading = !0, $({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: (l.value.nextPage - 1) * l.value.limit,
          labelFilter: F.value,
          context: k.context
        }).then((w) => {
          i.value = i.value.concat(
            w.rows
          ), l.value.lastPage = Math.ceil(
            w.row_count / l.value.limit
          ), w.row_count >= l.value.limit && l.value.nextPage++, l.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return j(() => {
      q(), e.registerBehaviourCallbacks(B, D, A);
    }), (v, N) => (y(), T(a(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (k) => e.modelValueOnUpdate(k)),
      label: e.field.label,
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
      class: K(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: i.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: I,
      onFilter: b,
      onVirtualScroll: P
    }, {
      "no-option": V(() => [
        E(a(ye), {
          dense: a(u).fieldDense
        }, {
          default: V(() => [
            E(a(be), null, {
              default: V(() => [
                E(a(Ce), null, {
                  default: V(() => [
                    he(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((k) => [
        (y(), T(W(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Te = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, u = r.formStyle, s = n.rulesBehaviour === "lazy", i = S([]), l = S(
      f()
    ), c = S(), F = S("__init");
    function f() {
      return {
        limit: 30,
        nextPage: 2,
        lastPage: 2,
        isLoading: !1
      };
    }
    function b(v, N) {
      if (v === F.value) {
        N(() => {
        });
        return;
      }
      const k = e.formApi.getAssociationDataCallback();
      l.value = f(), F.value = v;
      const $ = e.formApi.form;
      l.value.isLoading = !0, k({
        resourceName: $.resourceName,
        resourceId: $.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: l.value.limit,
        offset: (l.value.nextPage - 1) * l.value.limit,
        labelFilter: v,
        context: $.context
      }).then((w) => {
        N(() => {
          i.value = w.rows, l.value.lastPage = Math.ceil(
            w.row_count / l.value.limit
          ), l.value.isLoading = !1;
        });
      }).catch(() => {
        i.value = [], l.value = f();
      });
    }
    function q() {
      se(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (i.value = v.map((N, k) => ({
          label: e.field.associationData.label[k] ?? "???",
          value: N,
          data: e.field.associationData.data[k]
        })));
      });
    }
    function B() {
      return c.value ? c.value.validate() : !1;
    }
    function D() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function I() {
      e.clear(), l.value = f(), i.value = [];
    }
    function P(v) {
      const N = i.value.length - 1;
      if (l.value.isLoading !== !0 && l.value.nextPage < l.value.lastPage && v.to === N && N !== -1) {
        const k = e.formApi.form, $ = e.formApi.getAssociationDataCallback();
        l.value.isLoading = !0, $({
          resourceName: k.resourceName,
          resourceId: k.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: (l.value.nextPage - 1) * l.value.limit,
          labelFilter: F.value,
          context: k.context
        }).then((w) => {
          i.value = i.value.concat(
            w.rows
          ), l.value.lastPage = Math.ceil(
            w.row_count / l.value.limit
          ), w.row_count >= l.value.limit && l.value.nextPage++, l.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return j(() => {
      q(), e.registerBehaviourCallbacks(B, D, A);
    }), (v, N) => (y(), T(a(Ae), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (k) => e.modelValueOnUpdate(k)),
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
      class: K(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: i.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: I,
      onFilter: b,
      onVirtualScroll: P
    }, {
      "no-option": V(() => [
        E(a(ye), {
          dense: a(u).fieldDense
        }, {
          default: V(() => [
            E(a(be), null, {
              default: V(() => [
                E(a(Ce), null, {
                  default: V(() => [
                    he(J(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((k) => [
        (y(), T(W(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: k.opt,
          itemProps: k.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), qe = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", s = S();
    function i() {
      return s.value ? s.value.validate() : !1;
    }
    function l() {
      return s.value ? !s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(i, l, c);
    }), (F, f) => (y(), T(a(_e), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: K(e.field.cssClass),
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
}), It = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, u = r.rulesBehaviour === "lazy", s = S();
    function i() {
      return s.value ? s.value.validate() : !1;
    }
    function l() {
      return s.value ? !s.value.hasError : !1;
    }
    function c() {
      s.value && s.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(i, l, c);
    }), (F, f) => (y(), T(a(_e), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[0] || (f[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: K(e.field.cssClass),
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
class te {
  constructor(e, t, r, n, u, s, i, l, c) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = i, this.resourceName = e, this.formApi = l, this.formSettings = {
      ...u,
      ...G.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...s,
      ...G.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? G.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? G.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? G.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? G.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? G.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...G.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: G.getGlobalFormStyle(),
      events: {},
      actionComponent: H(G.getGlobalActionComponent()),
      orphanErrorsComponent: H(G.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: H(G.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, u, s, i, l, c) {
    return new te(
      e,
      t,
      r,
      n,
      u,
      s,
      i,
      l,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ge.create(this.formApi);
    this.registerEventCallback(e);
    const t = ge.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (u, s) => {
        const i = [];
        u.fields.forEach((b) => {
          const q = this.dynamicComponentRecord[`field-${b.field_name}-before`], B = te.getFieldComponentByFormFieldType(
            b.field_type
          ), D = this.dynamicComponentRecord[`field-${b.field_name}-after`], A = {
            associationDisplayComponent: H(
              this.associationDisplayComponent
            ),
            regularFieldType: te.getRegularFieldTypeByFieldType(
              b.field_type
            )
          };
          let I = b.label;
          this.formSettings.requiredFieldsHasAsterisk && b.rules.find((v) => v.type === "required") && (I = I.concat("*"));
          const P = {
            type: b.field_type,
            metadata: Object.freeze(b),
            label: I,
            hint: b.hint ?? void 0,
            prefix: b.prefix ?? void 0,
            suffix: b.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? b.readonly ?? void 0,
            cssClass: b.css_class ?? void 0,
            staticSelectOptions: b.static_select_options,
            associationData: b.field_association_data,
            rules: b.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: q ? H(q) : void 0,
            mainComponent: H(B),
            afterComponent: D ? H(D) : void 0,
            events: t.fields[b.field_name] ?? {},
            componentOptions: A
          };
          i.push(P);
        });
        const l = this.dynamicComponentRecord[`section-${u.name ?? s}-before`], c = this.sectionComponent, F = this.dynamicComponentRecord[`section-${u.name ?? s}-after`], f = {
          label: u.label ?? void 0,
          icon: u.icon ?? void 0,
          cssClass: u.css_class ?? void 0,
          hidden: !1,
          name: u.name ?? s.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? u.readonly ?? void 0,
          events: t.sections[u.name ?? s.toString()] ?? {},
          beforeComponent: l ? H(l) : void 0,
          mainComponent: H(c),
          afterComponent: F ? H(F) : void 0,
          fields: i
        };
        r.push(f);
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
      actionComponent: H(this.actionComponent),
      orphanErrorsComponent: H(this.orphanErrorsComponent),
      wrapperResetComponent: H(this.wrapperResetComponent),
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
  const r = t.form, n = (l, c, F) => l[c] ? F ? () => u(l[c]) : () => l[c] : l.compare_to ? () => {
    var f;
    return ((f = t.getFieldByName(l.compare_to)) == null ? void 0 : f.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (l) => String(
    O.formatDate(
      O.extractDate(l, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), s = [], i = [];
  switch (e) {
    case "date":
      s.push(we(r.formSettings.dateFormat));
      break;
    case "datetime":
      s.push(we(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((l) => {
    const c = l;
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
        i.push("allowNull");
        break;
      case "allowBlank":
        i.push("allowBlank");
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
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        s.push(
          fn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        s.push(
          mn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        s.push(
          pn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        s.push(
          gn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        s.push(
          vn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), i.length > 0 ? i.map((l) => {
    switch (l) {
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
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Ht(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
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
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
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
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function sn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
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
    const r = o(), n = O.extractDate(String(t), e), u = O.extractDate(r, e);
    return n <= u || `Inf. ou égal à ${r}`;
  };
}
function fn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), u = O.extractDate(r, e);
    return n < u || `Inf. à ${r}`;
  };
}
function mn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), u = O.extractDate(r, e);
    return n >= u || `Sup. ou égal à ${r}`;
  };
}
function pn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), u = O.extractDate(r, e);
    return n > u || `Sup. à ${r}`;
  };
}
function gn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), u = O.extractDate(r, e);
    return n === u || `Égale à ${n}`;
  };
}
function vn(o, e) {
  return (t) => {
    const r = o();
    return O.extractDate(String(t), e) !== O.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function we(o) {
  return (e) => e == null || e === "" ? !0 : hn(e, o) || `Date invalide. Format : ${o}`;
}
function hn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = O.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : O.formatDate(t, e) === o;
}
const yn = {
  computeServerRules: $t
}, bn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Cn = ["index"], _n = /* @__PURE__ */ z({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, u = () => {
    };
    const s = q(), i = S(), l = S([]);
    function c(m = !0) {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = F(i.value), m && R(t.field.events.onReset), se(() => {
        ue();
      });
    }
    function F(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function f(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function b() {
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
        case "selectString":
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
    function q() {
      return yn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function B(m) {
      i.value = m;
    }
    function D() {
      return a(i);
    }
    function A() {
      return f(a(i));
    }
    function I(m) {
      l.value = m;
    }
    function P() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, R(t.field.events.onHide));
    }
    function v() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, R(t.field.events.onUnhide));
    }
    function N(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function k(m) {
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
    function w(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = m);
    }
    function re(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = m);
    }
    function ne(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = m);
    }
    function p() {
      const m = r();
      return R(t.field.events.onValidated), m;
    }
    function h() {
      return n();
    }
    function M() {
      return !h();
    }
    function ue() {
      return u();
    }
    function Se(m, C, le) {
      r = m, n = C, u = le;
    }
    const ie = {
      reset: c,
      clear: b,
      validate: p,
      isValid: h,
      isInvalid: M,
      hide: P,
      unhide: v,
      resetValidation: ue,
      getValueDeserialized: A,
      getValueSerialized: D,
      setupBackendErrors: I,
      setReadonlyState: N,
      setHint: k,
      setCssClass: $,
      setSuffix: w,
      setPrefix: re,
      setLabel: ne,
      setValue: B,
      field: t.field
    };
    return e(ie), U(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), U(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        R(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var C;
      c(!1);
      const m = (C = $e()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => Ve((y(), L("div", null, [
      t.field.beforeComponent ? (y(), T(W(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ie
      }, null, 8, ["formApi"])) : Q("", !0),
      (y(), T(W(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: c,
        clear: b,
        getValueDeserialized: A,
        getValueSerialized: D,
        validate: p,
        modelValueOnUpdate: B,
        registerBehaviourCallbacks: Se
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (y(), T(W(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ie
      }, null, 8, ["formApi"])) : Q("", !0),
      l.value.length > 0 ? (y(), L("div", bn, [
        (y(!0), L(fe, null, me(l.value, (le, Fe) => (y(), L("div", {
          index: Fe,
          class: "flex column"
        }, J(le), 9, Cn))), 256))
      ])) : Q("", !0)
    ], 512)), [
      [De, t.field.hidden !== !0]
    ]);
  }
}), Sn = { class: "flex column" }, Fn = /* @__PURE__ */ z({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, u = null;
    const s = {
      reset: c,
      clear: F,
      validate: q,
      isValid: B,
      isInvalid: D,
      hide: f,
      unhide: b,
      resetValidation: A,
      getFields: I,
      setReadonlyState: P,
      setCssClass: v,
      setIcon: N,
      setLabel: k,
      section: t.section
    }, i = S(/* @__PURE__ */ new Map());
    function l() {
      t.section.fields.forEach((p) => {
        const h = p.metadata.field_name, M = t.formApi.getFieldByName(h);
        M && i.value.set(h, M);
      });
    }
    function c() {
      i.value.forEach((p) => {
        p.reset();
      }), R(t.section.events.onReset);
    }
    function F() {
      i.value.forEach((p) => {
        p.clear();
      }), R(t.section.events.onClear);
    }
    function f() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (i.value.forEach((h) => {
        h.hide();
      }), p.hidden = !0, R(t.section.events.onHide));
    }
    function b() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (i.value.forEach((h) => {
        h.unhide();
      }), p.hidden = !1, R(t.section.events.onUnhide));
    }
    function q() {
      let p = !0;
      return i.value.forEach((h) => {
        if (!h.validate()) {
          p = !1;
          return;
        }
      }), R(t.section.events.onValidated), p;
    }
    function B() {
      let p = !0;
      return i.value.forEach((h) => {
        if (!h.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function D() {
      return !B();
    }
    function A() {
      i.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function I() {
      return i.value;
    }
    function P(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.readonly = p);
    }
    function v(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.cssClass = p);
    }
    function N(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.icon = p);
    }
    function k(p) {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (h.label = p);
    }
    function $() {
      const p = {};
      for (const [h, M] of i.value)
        p[h] = M.getValueSerialized();
      return p;
    }
    e(s);
    const w = oe(() => B()), re = oe(() => D()), ne = oe(() => $());
    return U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = U(w, (h) => {
          h && R(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = U(re, (h) => {
          var M;
          h && R((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        u == null || u(), u = null, p && (u = U(
          ne,
          () => {
            var h;
            R((h = t.section) == null ? void 0 : h.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var h;
      const p = (h = $e()) == null ? void 0 : h.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), se(() => {
        l();
      });
    }), (p, h) => Ve((y(), L("div", Sn, [
      t.section.beforeComponent ? (y(), T(W(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: s
      }, null, 8, ["formApi"])) : Q("", !0),
      (y(), T(W(t.section.mainComponent), {
        sectionApi: s,
        formApi: t.formApi
      }, {
        default: V(() => [
          Ie(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (y(), T(W(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: s
      }, null, 8, ["formApi"])) : Q("", !0)
    ], 512)), [
      [De, t.section.hidden !== !0]
    ]);
  }
}), kn = { class: "flex column" }, An = /* @__PURE__ */ z({
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
    let r = null, n = "", u = 0, s = 0, i = null, l = null, c = null;
    const F = ct(), f = S(te.getEmptyFormBeforeInit()), b = S(!1), q = S(!1), B = S(!1), D = S(!1), A = S("create"), I = S({}), P = S(/* @__PURE__ */ new Map()), v = S(/* @__PURE__ */ new Map());
    async function N() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = te.getForm(
        t.resourceName,
        t.resourceId,
        $(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ee,
        t.eventManager
      ), u = f.value.sections.length, s = f.value.sections.map((d) => d.fields).flat().length, t.resourceId && (A.value = "edit");
    }
    async function k() {
      var x, Y, ce;
      if (!ne())
        return;
      R((x = f.value) == null ? void 0 : x.events.onSubmit), D.value = !0, ie();
      const d = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (g.success)
        I.value = {}, A.value === "create" && (A.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), f.value = te.getForm(
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
          ee,
          t.eventManager
        ), R((ce = f.value) == null ? void 0 : ce.events.onSubmitSuccess);
      else {
        I.value = {};
        const de = [];
        for (const [X, at] of v.value) {
          const Be = g.errors[X];
          Be && (at.setupBackendErrors(Be), de.push(X));
        }
        Object.entries(g.errors).forEach((X) => {
          de.includes(X[0]) || (I.value[X[0]] = X[1]);
        }), R((Y = f.value) == null ? void 0 : Y.events.onSubmitUnsuccess);
      }
      D.value = !1;
    }
    function $() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in F) {
        const x = F[g];
        if (x) {
          const Y = z({
            inheritAttrs: !1,
            setup(ce, { attrs: de, slots: X }) {
              return () => x({
                ...ce,
                ...de,
                slots: X
              });
            }
          });
          switch (g) {
            case "sections":
              d.sectionComponent = Y;
              break;
            case "actions":
              d.actionComponent = Y;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = Y;
              break;
            case "association-display":
              d.associationDisplayComponent = Y;
              break;
            default:
              d.dynamicComponentRecord[g] = Y;
              break;
          }
        }
      }
      return d;
    }
    function w() {
      const d = {};
      for (const [g, x] of v.value)
        d[g] = x.getValueDeserialized();
      return d;
    }
    function re() {
      const d = {};
      for (const [g, x] of v.value)
        d[g] = x.getValueSerialized();
      return d;
    }
    function ne() {
      var g;
      let d = !0;
      return v.value.forEach((x) => {
        if (!x.validate()) {
          d = !1;
          return;
        }
      }), R((g = f.value) == null ? void 0 : g.events.onValidated), d;
    }
    function p() {
      let d = !0;
      return v.value.forEach((g) => {
        if (!g.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function h() {
      return !p();
    }
    function M() {
      var d;
      v.value.forEach((g) => {
        g.reset();
      }), R((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function ue() {
      var d;
      v.value.forEach((g) => {
        g.clear();
      }), R((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function Se() {
      v.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function ie() {
      v.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function m(d) {
      if (r)
        return r.resource_data[d];
    }
    function C(d) {
      return P.value.get(d);
    }
    function le(d) {
      return [...P.value.values()].at(d);
    }
    function Fe() {
      return P.value;
    }
    function Ue(d) {
      return v.value.get(d);
    }
    function Le() {
      return v.value;
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
      return a(A);
    }
    function Ye() {
      return n !== JSON.stringify(w());
    }
    function je(d) {
      f.value && (f.value.context = d);
    }
    function Qe(d) {
      f.value && (f.value.cssClass = d);
    }
    function We(d) {
      f.value && (f.value.readonly = d);
    }
    function Je() {
      return B.value;
    }
    function Ke() {
      return f;
    }
    function Xe(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.find((x) => x.name === d);
    }
    function Ze(d) {
      var g;
      return (g = f.value) == null ? void 0 : g.sections.map((x) => x.fields).flat().find((x) => x.metadata.field_name === d);
    }
    function Re(d, g) {
      P.value.set(d, g), u === P.value.size && (b.value = !0);
    }
    function Ne(d, g) {
      v.value.set(d, g), s === v.value.size && (q.value = !0);
    }
    const Ee = {
      getFormRef: Ke,
      getSectionRef: Xe,
      getFieldRef: Ze,
      registerSectionWrapperRef: Re,
      registerFieldWrapperRef: Ne
    }, et = new Proxy({}, {
      get(d, g) {
        var x;
        return (x = f.value) == null ? void 0 : x[g];
      }
    }), ee = {
      getMode: Me,
      getSectionByName: C,
      getSectionByIndex: le,
      getSections: Fe,
      getFieldByName: Ue,
      getFields: Le,
      validate: ne,
      isValid: p,
      isInvalid: h,
      reset: M,
      clear: ue,
      resetValidation: Se,
      submit: k,
      valuesHasChanged: Ye,
      getInitialValueByFieldName: m,
      getAssociationDataCallback: Ge,
      setContext: je,
      setCssClass: Qe,
      setReadonlyState: We,
      isReady: Je,
      form: et
    };
    e(ee);
    const tt = oe(() => p()), nt = oe(() => h()), ot = oe(() => re());
    return U(
      () => b.value && q.value,
      (d) => {
        var g;
        d && !B.value && (R((g = f.value) == null ? void 0 : g.events.onReady), B.value = !0);
      }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        i == null || i(), i = null, d && (i = U(tt, (g) => {
          var x;
          g && R((x = f.value) == null ? void 0 : x.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        l == null || l(), l = null, d && (l = U(nt, (g) => {
          var x;
          g && R((x = f.value) == null ? void 0 : x.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), U(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        c == null || c(), c = null, d && (c = U(
          ot,
          () => {
            var g;
            R((g = f.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      He(), await N(), se(() => {
        n = JSON.stringify(w());
      });
    }), (d, g) => Ve((y(), L("div", kn, [
      Z("div", {
        class: K(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (y(!0), L(fe, null, me(f.value.sections, (x) => (y(), T(Fn, {
          key: x.name,
          section: x,
          context: t.context,
          formApi: ee,
          privateFormApi: Ee,
          registerRef: Re
        }, {
          default: V(() => [
            (y(!0), L(fe, null, me(x.fields, (Y) => (y(), T(_n, {
              key: Y.metadata.field_name,
              field: Y,
              context: t.context,
              formApi: ee,
              privateFormApi: Ee,
              registerRef: Ne
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (y(), T(W(f.value.orphanErrorsComponent), {
        orphanErrors: I.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (y(), T(W(f.value.actionComponent), {
        isLoadingSubmit: D.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [De, B.value]
    ]);
  }
});
export {
  ge as DynamicLogicBuilder,
  G as Submit64,
  An as Submit64Form
};
