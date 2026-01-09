var yt = Object.defineProperty;
var _t = (o, e, t) => e in o ? yt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var E = (o, e, t) => _t(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as L, createElementBlock as U, openBlock as v, createElementVNode as M, createVNode as S, createBlock as A, createCommentVNode as H, unref as a, mergeProps as qe, toDisplayString as P, renderSlot as je, resolveComponent as re, normalizeProps as bt, guardReactiveProps as Ct, withCtx as g, createTextVNode as ee, Fragment as fe, renderList as me, ref as w, onMounted as Y, nextTick as he, normalizeClass as Z, watch as j, resolveDynamicComponent as oe, computed as ve, markRaw as X, getCurrentInstance as Ye, withDirectives as Ee, vShow as Oe, useSlots as St } from "vue";
import { QBtn as ae, QIcon as ke, QItem as _e, QItemSection as ue, QItemLabel as de, QInput as Fe, QPopupProxy as Ae, QDate as We, QTime as kt, QCheckbox as Ft, QSelect as ze, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as Je, QList as Pe, QSeparator as At, QUploaderAddTrigger as Rt, date as $ } from "quasar";
const Bt = { class: "flex column" }, Nt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, qt = /* @__PURE__ */ L({
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
    return (r, n) => (v(), U("div", Bt, [
      M("div", Nt, [
        S(a(ae), qe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (v(), A(a(ae), qe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (v(), A(a(ae), qe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : H("", !0)
      ])
    ]));
  }
}), wt = { class: "flex row items-center" }, Et = { class: "text-body1 text-weight-medium" }, Ot = { class: "flex column q-gutter-md" }, zt = /* @__PURE__ */ L({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), U("div", null, [
      M("div", wt, [
        e.sectionApi.section.icon ? (v(), A(a(ke), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        M("div", Et, P(e.sectionApi.section.label), 1)
      ]),
      M("div", Ot, [
        je(t.$slots, "default")
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ L({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = re("q-icon");
      return v(), A(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (c) => e.reset())
      });
    };
  }
}), It = /* @__PURE__ */ L({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), A(a(_e), bt(Ct(e.itemProps)), {
      default: g(() => [
        S(a(ue), null, {
          default: g(() => [
            S(a(de), null, {
              default: g(() => [
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
}), $t = { class: "flex column" }, Ut = /* @__PURE__ */ L({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), U("div", $t, [
      (v(!0), U(fe, null, me(e.orphanErrors, (n, c) => (v(), U("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, P(c) + " : " + P(n.join(",")), 1))), 128))
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
    }, this._actionComponent = qt, this._orphanErrorsComponent = Ut, this._sectionComponent = zt, this._wrapperResetComponent = Tt, this._associationDisplayComponent = It;
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
    const r = e, n = t, c = new Pt(r, n, this.formApi);
    return this.events.push(c), new Lt(c);
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
class Pt {
  constructor(e, t, r) {
    E(this, "type");
    E(this, "data");
    E(this, "formApi");
    E(this, "action", () => {
    });
    E(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class Lt {
  constructor(e) {
    E(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ L({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = w(), d = w();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return d.value ? d.value.validate() : !1;
    }
    function V() {
      return d.value ? !d.value.hasError : !1;
    }
    function k() {
      d.value && d.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(i, V, k), c || he(() => {
        var B;
        (B = d.value) == null || B.resetValidation();
      });
    }), (B, u) => (v(), A(a(Fe), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[1] || (u[1] = (R) => e.modelValueOnUpdate(R)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        S(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            S(a(Ae), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                S(a(We), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": u[0] || (u[0] = (R) => e.modelValueOnUpdate(R)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: g(() => [
                    M("div", Ht, [
                      S(a(ae), {
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
}), Mt = { class: "row items-center justify-end" }, Qt = { class: "row items-center justify-end" }, jt = /* @__PURE__ */ L({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = w(), d = w(), s = w();
    function i() {
      l.value && l.value.hide();
    }
    function V() {
      d.value && d.value.hide();
    }
    function k() {
      return s.value ? s.value.validate() : !1;
    }
    function B() {
      return s.value ? !s.value.hasError : !1;
    }
    function u() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(k, B, u), c || he(() => {
        var R;
        (R = s.value) == null || R.resetValidation();
      });
    }), (R, x) => (v(), A(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[2] || (x[2] = (N) => e.modelValueOnUpdate(N)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        S(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            S(a(Ae), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                S(a(We), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[0] || (x[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: g(() => [
                    M("div", Mt, [
                      S(a(ae), {
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
        }),
        S(a(ke), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            S(a(Ae), {
              ref_key: "timePopupProxyRef",
              ref: d,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                S(a(kt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": x[1] || (x[1] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: g(() => [
                    M("div", Qt, [
                      S(a(ae), {
                        onClick: V,
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
}), Yt = { class: "flex column" }, Wt = {
  key: 0,
  class: "q-field__bottom"
}, Jt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Kt = /* @__PURE__ */ L({
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
    const e = o, t = w(!0), n = e.formApi.form.formStyle;
    function c() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function d() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (s) => {
        for (const i of e.rules)
          if (t.value = i(s), t.value !== !0)
            break;
      }
    ), Y(() => {
      e.registerBehaviourCallbacks(c, l, d);
    }), (s, i) => (v(), U("div", Yt, [
      S(a(Ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (V) => e.modelValueOnUpdate(V)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: Z([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), U("div", Wt, P(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (v(), U("div", Jt, P(t.value), 1)) : H("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ L({
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
    const e = o, t = w([]), r = w([]), n = w(), c = e.formApi.form, l = c.formSettings, d = c.formStyle, s = l.rulesBehaviour === "lazy";
    function i(x, N) {
      if (x === "") {
        N(() => {
          r.value = [...t.value];
        });
        return;
      }
      N(() => {
        const z = x.toLowerCase();
        r.value = t.value.filter((b) => b.label.toLowerCase().includes(z));
      });
    }
    function V() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function k() {
      return n.value ? n.value.validate() : !1;
    }
    function B() {
      return n.value ? !n.value.hasError : !1;
    }
    function u() {
      n.value && n.value.resetValidation();
    }
    function R() {
      r.value = [];
    }
    return Y(() => {
      V(), e.registerBehaviourCallbacks(k, B, u, void 0, R);
    }), (x, N) => (v(), A(a(ze), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (z) => e.modelValueOnUpdate(z)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(d).fieldOutlined,
      filled: a(d).fieldFilled,
      standout: a(d).fieldStandout,
      borderless: a(d).fieldBorderless,
      rounded: a(d).fieldRounded,
      square: a(d).fieldSquare,
      dense: a(d).fieldDense,
      hideBottomSpace: a(d).fieldHideBottomSpace,
      color: a(d).fieldColor,
      bgColor: a(d).fieldBgColor,
      class: Z(e.field.cssClass),
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
      onFilter: i
    }, {
      "no-option": g(() => [
        S(a(_e), {
          dense: a(d).fieldDense
        }, {
          default: g(() => [
            S(a(ue), null, {
              default: g(() => [
                S(a(de), null, {
                  default: g(() => [
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
}), Le = "__init", He = /* @__PURE__ */ L({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = w([]), s = w(
      k()
    ), i = w(), V = w(Le);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function B(m, h) {
      if (m === V.value) {
        h(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = k(), V.value = m;
      const I = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: I.context
      }).then((T) => {
        h(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = k();
      });
    }
    function u() {
      var h, p;
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (d.value = [
        {
          label: ((h = e.field.associationData[0]) == null ? void 0 : h.label) ?? "???",
          value: m,
          data: (p = e.field.associationData[0]) == null ? void 0 : p.data
        }
      ]);
    }
    function R() {
      return i.value ? i.value.validate() : !1;
    }
    function x() {
      return i.value ? !i.value.hasError : !1;
    }
    function N() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = k(), d.value = [], V.value = Le;
    }
    function b(m) {
      const h = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === h && h !== -1) {
        const p = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, I({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: V.value,
          context: p.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        R,
        x,
        N,
        u,
        z
      ), he(() => {
        u();
      });
    }), (m, h) => (v(), A(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (p) => e.modelValueOnUpdate(p)),
      label: e.field.label,
      outlined: a(c).fieldOutlined,
      filled: a(c).fieldFilled,
      standout: a(c).fieldStandout,
      borderless: a(c).fieldBorderless,
      rounded: a(c).fieldRounded,
      square: a(c).fieldSquare,
      dense: a(c).fieldDense,
      hideBottomSpace: a(c).fieldHideBottomSpace,
      color: a(c).fieldColor,
      bgColor: a(c).fieldBgColor,
      class: Z(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: d.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: B,
      onVirtualScroll: b
    }, {
      "no-option": g(() => [
        S(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: g(() => [
            S(a(ue), null, {
              default: g(() => [
                S(a(de), null, {
                  default: g(() => [
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
      option: g((p) => [
        (v(), A(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: p.opt,
          itemProps: p.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ge = "__init", Me = /* @__PURE__ */ L({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = w([]), s = w(
      k()
    ), i = w(), V = w(Ge);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function B(m, h) {
      if (m === V.value) {
        h(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = k(), V.value = m;
      const I = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: I.context
      }).then((T) => {
        h(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = k();
      });
    }
    function u() {
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (d.value = m.map((h, p) => ({
        label: e.field.associationData[p].label ?? "???",
        value: h,
        data: e.field.associationData[p].data
      })));
    }
    function R() {
      return i.value ? i.value.validate() : !1;
    }
    function x() {
      return i.value ? !i.value.hasError : !1;
    }
    function N() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = k(), d.value = [], V.value = Ge;
    }
    function b(m) {
      const h = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === h && h !== -1) {
        const p = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, I({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: V.value,
          context: p.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        R,
        x,
        N,
        u,
        z
      ), he(() => {
        u();
      });
    }), (m, h) => (v(), A(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[0] || (h[0] = (p) => e.modelValueOnUpdate(p)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(c).fieldOutlined,
      filled: a(c).fieldFilled,
      standout: a(c).fieldStandout,
      borderless: a(c).fieldBorderless,
      rounded: a(c).fieldRounded,
      square: a(c).fieldSquare,
      dense: a(c).fieldDense,
      hideBottomSpace: a(c).fieldHideBottomSpace,
      color: a(c).fieldColor,
      bgColor: a(c).fieldBgColor,
      class: Z(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: d.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: e.clear,
      onFilter: B,
      onVirtualScroll: b
    }, {
      "no-option": g(() => [
        S(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: g(() => [
            S(a(ue), null, {
              default: g(() => [
                S(a(de), null, {
                  default: g(() => [
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
      option: g((p) => [
        (v(), A(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: p.opt,
          itemProps: p.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), we = /* @__PURE__ */ L({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = w();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (V, k) => (v(), A(a(Fe), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (B) => e.modelValueOnUpdate(B)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Zt = /* @__PURE__ */ L({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = w();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (V, k) => (v(), A(a(Fe), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (B) => e.modelValueOnUpdate(B)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), en = /* @__PURE__ */ L({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = w();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (V, k) => (v(), A(a(Fe), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[1] || (k[1] = (B) => e.modelValueOnUpdate(B)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        S(a(ke), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            S(a(Ae), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                S(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (B) => e.modelValueOnUpdate(B))
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
}), tn = /* @__PURE__ */ L({
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
    const e = o, t = xt(), n = e.formApi.form.formStyle, c = [
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
    }, d = w();
    function s() {
      return !!d.value;
    }
    function i() {
      return !!d.value;
    }
    function V() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, i, V);
    }), (k, B) => e.modelValue ? (v(), A(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[0] || (B[0] = (u) => e.modelValueOnUpdate(u)),
      toolbar: c,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: Z(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : H("", !0);
  }
}), nn = /* @__PURE__ */ L({
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
    return t.formStyle, r.rulesBehaviour, (n, c) => " TODO json edit ? ";
  }
});
function O(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Ke(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
const an = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, on = { class: "col" }, rn = { class: "q-uploader__title" }, ln = {
  key: 0,
  class: "caption"
}, sn = {
  key: 0,
  class: "flex column"
}, un = {
  key: 2,
  class: "flex column"
}, dn = /* @__PURE__ */ L({
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
    const e = o, r = e.formApi.form.formStyle, n = w();
    function c() {
      let b = e.modelValue;
      b.add = [], b.delete = [], e.modelValueOnUpdate(b);
    }
    function l() {
      var m;
      let b = e.modelValue;
      b.add = [], b.delete = ((m = e.field.attachmentData) == null ? void 0 : m.map((h) => h.id)) ?? [], e.modelValueOnUpdate(b);
    }
    function d() {
      return !!n.value;
    }
    function s() {
      return !!n.value;
    }
    function i() {
      n.value;
    }
    async function V(b) {
      return new Promise((m) => {
        const h = new Blob([b]), p = new FileReader();
        p.onload = (I) => {
          var K;
          const T = ((K = I.target) == null ? void 0 : K.result) ?? "", [Q, te] = T.split(",");
          m(te);
        }, p.readAsDataURL(h);
      });
    }
    async function k(b) {
      return {
        key: b.__key,
        size: b.__size,
        type: b.__type,
        base64: await V(await b.arrayBuffer())
      };
    }
    async function B(b) {
      if (!b[0])
        return;
      const m = await k(b[0]);
      let h = e.modelValue;
      h.add.push(m), e.modelValueOnUpdate(h);
    }
    async function u(b) {
      if (!b[0])
        return;
      const m = await k(b[0]);
      let h = e.modelValue;
      h.add = h.add.filter((p) => p.key !== m.key), e.modelValueOnUpdate(h);
    }
    function R(b) {
      let m = e.modelValue;
      m.delete.push(b.id), e.modelValueOnUpdate(m);
    }
    function x(b) {
      let m = e.modelValue;
      m.delete = m.delete.filter((h) => h !== b.id), e.modelValueOnUpdate(m);
    }
    function N(b) {
      return e.modelValue.delete.findIndex((m) => m === b.id) !== -1;
    }
    const z = ve(() => (e.field.attachmentData ?? []).length === 0);
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (b, m) => (v(), A(a(Je), {
      ref_key: "fieldRef",
      ref: n,
      "hide-upload-btn": "",
      multiple: !1,
      label: e.field.label,
      bordered: a(r).fieldBorderless !== !0,
      square: a(r).fieldSquare,
      color: a(r).fieldColor,
      class: Z(e.field.cssClass),
      readonly: e.field.readonly,
      onAdded: B,
      onRemoved: u,
      style: { width: "inherit" }
    }, {
      header: g((h) => [
        M("div", an, [
          M("div", on, [
            M("div", rn, P(e.field.label), 1),
            e.field.hint ? (v(), U("div", ln, P(e.field.hint), 1)) : H("", !0)
          ]),
          h.canAddFiles ? (v(), A(a(ae), {
            key: 0,
            type: "a",
            icon: "add_box",
            onClick: h.pickFiles,
            round: "",
            dense: "",
            flat: ""
          }, {
            default: g(() => [
              S(a(Rt))
            ]),
            _: 1
          }, 8, ["onClick"])) : H("", !0)
        ])
      ]),
      list: g((h) => [
        z.value ? H("", !0) : (v(), U("div", sn, [
          m[0] || (m[0] = M("div", null, "Fichier en ligne", -1)),
          S(a(Pe), { separator: "" }, {
            default: g(() => [
              (v(!0), U(fe, null, me(e.field.attachmentData ?? [], (p) => (v(), A(a(_e), {
                key: p.id
              }, {
                default: g(() => [
                  S(a(ue), null, {
                    default: g(() => [
                      S(a(de), { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(P(p.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      S(a(de), { caption: "" }, {
                        default: g(() => [
                          ee(P(a(Ke)(p.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  S(a(ue), {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      N(p) ? (v(), A(a(ae), {
                        key: 1,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "refresh",
                        onClick: (I) => x(p)
                      }, null, 8, ["disable", "onClick"])) : (v(), A(a(ae), {
                        key: 0,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (I) => R(p)
                      }, null, 8, ["disable", "onClick"]))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])),
        !z.value && h.files.length > 0 ? (v(), A(a(At), { key: 1 })) : H("", !0),
        h.files.length > 0 ? (v(), U("div", un, [
          m[1] || (m[1] = M("div", null, "Fichier à télécharger", -1)),
          S(a(Pe), { separator: "" }, {
            default: g(() => [
              (v(!0), U(fe, null, me(h.files, (p) => (v(), A(a(_e), {
                key: p.__key
              }, {
                default: g(() => [
                  S(a(ue), null, {
                    default: g(() => [
                      S(a(de), { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(P(p.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      S(a(de), { caption: "" }, {
                        default: g(() => [
                          ee(P(p.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  S(a(ue), {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      S(a(ae), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (I) => h.removeFile(p)
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
        ])) : H("", !0)
      ]),
      _: 1
    }, 8, ["label", "bordered", "square", "color", "class", "readonly"]));
  }
}), cn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, fn = { class: "col" }, mn = { class: "q-uploader__title" }, pn = { class: "q-uploader__subtitle" }, gn = /* @__PURE__ */ L({
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
    const e = o, r = e.formApi.form.formStyle, n = w();
    function c() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u);
    }
    function l() {
      var R;
      let u = e.modelValue;
      u.add = [], u.delete = ((R = e.field.attachmentData) == null ? void 0 : R.map((x) => x.id)) ?? [], e.modelValueOnUpdate(u);
    }
    function d() {
      return !!n.value;
    }
    function s() {
      return !!n.value;
    }
    function i() {
      n.value;
    }
    function V(u) {
      const R = u;
      if (!R)
        return;
      let x = e.modelValue;
      R.forEach((N) => {
        x.add.push(N);
      }), e.modelValueOnUpdate(x);
    }
    function k(u) {
      const R = u;
      let x = e.modelValue;
      x.add = x.add.filter((N) => !R.map((z) => z.key).includes(N.key)), e.modelValueOnUpdate(x);
    }
    function B(u) {
      let R = e.modelValue;
      R.delete.push(u.id), e.modelValueOnUpdate(R);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (u, R) => {
      const x = re("q-spinner"), N = re("q-uploader-add-trigger"), z = re("q-btn"), b = re("q-item-label"), m = re("q-item-section"), h = re("q-item"), p = re("q-separator"), I = re("q-list");
      return v(), A(a(Je), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: V,
        onRemoved: k
      }, {
        header: g((T) => [
          M("div", cn, [
            T.isUploading ? (v(), A(x, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            M("div", fn, [
              M("div", mn, P(e.field.label), 1),
              M("div", pn, "Total : " + P(T.uploadSizeLabel), 1)
            ]),
            T.canAddFiles ? (v(), A(z, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: T.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: g(() => [
                S(N)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: g((T) => [
          S(I, { separator: "" }, {
            default: g(() => [
              (v(!0), U(fe, null, me(e.field.attachmentData ?? [], (Q) => (v(), A(h, {
                key: Q.id
              }, {
                default: g(() => [
                  S(m, null, {
                    default: g(() => [
                      S(b, { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(P(Q.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      S(b, { caption: "" }, {
                        default: g(() => [
                          ee(P(a(Ke)(Q.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  S(m, {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      S(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => B(Q)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              S(p),
              (v(!0), U(fe, null, me(T.files, (Q) => (v(), A(h, {
                key: Q.__key
              }, {
                default: g(() => [
                  S(m, null, {
                    default: g(() => [
                      S(b, { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(P(Q.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      S(b, { caption: "" }, {
                        default: g(() => [
                          ee(P(Q.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  S(m, {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      S(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => T.removeFile(Q)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]);
    };
  }
});
class ce {
  constructor(e, t, r, n, c, l, d, s, i) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = d, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...c,
      ...J.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...J.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? J.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? J.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? J.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? J.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? J.getGlobalAssociationDisplayComponent(), this.registerEventCallback = i ?? (() => {
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
      actionComponent: X(J.getGlobalActionComponent()),
      orphanErrorsComponent: X(J.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: X(J.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, c, l, d, s, i) {
    return new ce(
      e,
      t,
      r,
      n,
      c,
      l,
      d,
      s,
      i
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Re.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = Re.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (l, d) => {
        const s = [];
        l.fields.forEach((u) => {
          const R = this.dynamicComponentRecord[`field-${u.field_name}-before`], x = ce.getFieldComponentByFormFieldType(u), N = this.dynamicComponentRecord[`field-${u.field_name}-after`], z = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: ce.getRegularFieldTypeByFieldType(
              u.field_type
            )
          };
          let b = u.label;
          this.formSettings.requiredFieldsHasAsterisk && u.rules.find((h) => h.type === "required") && (b = b.concat("*"));
          const m = {
            type: u.field_type,
            extraType: u.field_extra_type,
            metadata: Object.freeze(u),
            label: b,
            hint: u.hint ?? void 0,
            prefix: u.prefix ?? void 0,
            suffix: u.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? u.readonly ?? void 0,
            cssClass: u.css_class ?? void 0,
            staticSelectOptions: u.static_select_options,
            associationData: u.field_association_data,
            attachmentData: u.field_attachment_data,
            rules: u.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: R ? X(R) : void 0,
            mainComponent: X(x),
            afterComponent: N ? X(N) : void 0,
            events: r.fields[u.field_name] ?? {},
            componentOptions: z
          };
          s.push(m), t.add(u.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? d}-before`], V = this.sectionComponent, k = this.dynamicComponentRecord[`section-${l.name ?? d}-after`], B = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? d.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: r.sections[l.name ?? d.toString()] ?? {},
          beforeComponent: i ? X(i) : void 0,
          mainComponent: X(V),
          afterComponent: k ? X(k) : void 0,
          fields: s
        };
        n.push(B);
      }
    );
    const c = {
      sections: n,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      formStyle: this.formStyle,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      resetable: this.formMetadataAndData.form.resetable ?? void 0,
      clearable: this.formMetadataAndData.form.clearable ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      allowBulk: this.formMetadataAndData.form.allow_bulk ?? !1,
      events: r.form,
      actionComponent: X(this.actionComponent),
      orphanErrorsComponent: X(this.orphanErrorsComponent),
      wrapperResetComponent: X(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((l, d) => l + d.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), c;
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
            return en;
          case "wysiwyg":
            return tn;
          default:
            return we;
        }
      case "text":
        return we;
      case "number":
        return Zt;
      case "date":
        return Gt;
      case "datetime":
        return jt;
      case "select":
        return Xt;
      case "selectBelongsTo":
        return He;
      case "selectHasMany":
        return Me;
      case "selectHasAndBelongsToMany":
        return Me;
      case "selectHasOne":
        return He;
      case "checkbox":
        return Kt;
      case "object":
        return nn;
      case "attachmentHasOne":
        return dn;
      case "attachmentHasMany":
        return gn;
      default:
        return we;
    }
  }
}
function vn(o, e, t) {
  const r = t.form, n = (s, i, V) => s[i] ? V ? () => c(s[i]) : () => s[i] : s.compare_to ? () => {
    var k;
    return ((k = t.getFieldByName(s.compare_to)) == null ? void 0 : k.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (s) => String(
    $.formatDate(
      $.extractDate(s, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(Qe(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Qe(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((s) => {
    const i = s;
    switch (i.type) {
      case "required":
        l.push(hn());
        break;
      case "absence":
        l.push(_n());
        break;
      case "acceptance":
        l.push(bn());
        break;
      case "inclusion":
        l.push(Xe(i.including));
        break;
      case "exclusion":
        l.push(yn(i.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        d.push("allowNull");
        break;
      case "allowBlank":
        d.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(kn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Fn(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Vn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          xn(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Dn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          An(n(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Rn(
            n(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Bn());
        break;
      case "numberNumericOnly":
        l.push(Nn());
        break;
      case "numberEvenOnly":
        l.push(qn());
        break;
      case "numberOddOnly":
        l.push(wn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          En(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          On(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          zn(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Tn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Un(
            n(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          $n(n(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          In(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Pn(
            n(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Ln(
            n(i, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Hn(
            n(i, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Gn(
            n(i, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Mn(
            n(i, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Qn(
            n(i, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          jn(
            n(i, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((s) => {
    switch (s) {
      case "allowBlank":
        return Sn(l);
      case "allowNull":
        return Cn(l);
    }
  }) : l;
}
function hn() {
  return (o) => !!o || "Ce champ est requis";
}
function Xe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function yn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Xe.toString()}`
  );
}
function _n() {
  return (o) => !o || "Ce champ doit être vide";
}
function bn() {
  return (o) => !!o || "Doit être accepté";
}
function Cn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Sn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function kn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Fn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Vn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function xn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Dn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function An(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Rn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Bn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Nn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function qn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function wn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function En(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function On(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function zn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Tn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function In(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function $n(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Un(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Pn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Ln(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n <= c || `Inf. ou égal à ${r}`;
  };
}
function Hn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n < c || `Inf. à ${r}`;
  };
}
function Gn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n >= c || `Sup. ou égal à ${r}`;
  };
}
function Mn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n > c || `Sup. à ${r}`;
  };
}
function Qn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n === c || `Égale à ${n}`;
  };
}
function jn(o, e) {
  return (t) => {
    const r = o();
    return $.extractDate(String(t), e) !== $.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Qe(o) {
  return (e) => e == null || e === "" ? !0 : Yn(e, o) || `Date invalide. Format : ${o}`;
}
function Yn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = $.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : $.formatDate(t, e) === o;
}
const Wn = {
  computeServerRules: vn
}, Jn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Kn = ["index"], Xn = /* @__PURE__ */ L({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, c = () => {
    }, l = () => {
    }, d = () => {
    };
    const s = N(), i = w(), V = w([]);
    function k() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value);
    }
    function B() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value), O(t.field.events.onReset), l(), he(() => {
        Ve();
      });
    }
    function u(y) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return y == null || y === "" ? !1 : y;
        case "date":
          return y == null || y === "" ? null : $.formatDate(
            $.extractDate(String(y), q.formSettings.backendDateFormat),
            q.formSettings.dateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : $.formatDate(
            $.extractDate(
              String(y),
              q.formSettings.backendDatetimeFormat
            ),
            q.formSettings.datetimeFormat
          );
        case "attachmentHasOne":
        case "attachmentHasMany":
          return {
            add: [],
            delete: []
          };
      }
      return y;
    }
    function R(y) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return y == null || y === "" ? null : $.formatDate(
            $.extractDate(String(y), q.formSettings.dateFormat),
            q.formSettings.backendDateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : $.formatDate(
            $.extractDate(String(y), q.formSettings.datetimeFormat),
            q.formSettings.backendDatetimeFormat
          );
      }
      return y;
    }
    function x() {
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
        case "selectHasAndBelongsToMany":
          i.value = void 0;
          break;
        case "selectHasOne":
          i.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          i.value = {
            add: [],
            delete: []
          };
          break;
      }
      d(), O(t.field.events.onClear);
    }
    function N() {
      return Wn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function z(y) {
      i.value = y;
    }
    function b() {
      return a(i);
    }
    function m() {
      return R(a(i));
    }
    function h(y) {
      V.value = y;
    }
    function p() {
      const y = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      y && (y.hidden = !0, O(t.field.events.onHide));
    }
    function I() {
      const y = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      y && (y.hidden = !1, O(t.field.events.onUnhide));
    }
    function T(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.readonly = y);
    }
    function Q(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.hint = y);
    }
    function te(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.cssClass = y);
    }
    function K(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.suffix = y);
    }
    function _(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.prefix = y);
    }
    function F(y) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.label = y);
    }
    function G() {
      const y = r();
      return O(t.field.events.onValidated), y;
    }
    function be() {
      return n();
    }
    function Ce() {
      return !be();
    }
    function Ve() {
      return c();
    }
    function Ne(y, q, le, ye, xe) {
      r = y, n = q, c = le, ye && (l = ye), xe && (d = xe);
    }
    const Se = {
      softReset: k,
      reset: B,
      clear: x,
      validate: G,
      isValid: be,
      isInvalid: Ce,
      hide: p,
      unhide: I,
      resetValidation: Ve,
      getValueDeserialized: m,
      getValueSerialized: b,
      setupBackendErrors: h,
      setReadonlyState: T,
      setHint: Q,
      setCssClass: te,
      setSuffix: K,
      setPrefix: _,
      setLabel: F,
      setValue: z,
      field: t.field
    };
    return e(Se), j(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        O(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (y) => {
        O(y ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var q, le;
      k();
      const y = (q = Ye()) == null ? void 0 : q.exposed;
      y && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        y
      ), O((le = t.field) == null ? void 0 : le.events.onReady);
    }), (y, q) => Ee((v(), U("div", null, [
      t.field.beforeComponent ? (v(), A(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Se
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(oe(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: B,
        clear: x,
        getValueDeserialized: m,
        getValueSerialized: b,
        validate: G,
        modelValueOnUpdate: z,
        registerBehaviourCallbacks: Ne
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), A(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Se
      }, null, 8, ["formApi"])) : H("", !0),
      V.value.length > 0 ? (v(), U("div", Jn, [
        (v(!0), U(fe, null, me(V.value, (le, ye) => (v(), U("div", {
          index: ye,
          class: "flex column"
        }, P(le), 9, Kn))), 256))
      ])) : H("", !0)
    ], 512)), [
      [Oe, t.field.hidden !== !0]
    ]);
  }
}), Zn = { class: "flex column" }, ea = /* @__PURE__ */ L({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, c = null;
    const l = {
      softReset: i,
      reset: V,
      clear: k,
      validate: R,
      isValid: x,
      isInvalid: N,
      hide: B,
      unhide: u,
      resetValidation: z,
      getFields: b,
      setReadonlyState: m,
      setCssClass: h,
      setIcon: p,
      setLabel: I,
      section: t.section
    }, d = w(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((_) => {
        const F = _.metadata.field_name, G = t.formApi.getFieldByName(F);
        G && d.value.set(F, G);
      });
    }
    function i() {
      d.value.forEach((_) => {
        _.softReset();
      });
    }
    function V() {
      d.value.forEach((_) => {
        _.reset();
      }), O(t.section.events.onReset);
    }
    function k() {
      d.value.forEach((_) => {
        _.clear();
      }), O(t.section.events.onClear);
    }
    function B() {
      const _ = t.privateFormApi.getSectionRef(
        t.section.name
      );
      _ && (d.value.forEach((F) => {
        F.hide();
      }), _.hidden = !0, O(t.section.events.onHide));
    }
    function u() {
      const _ = t.privateFormApi.getSectionRef(
        t.section.name
      );
      _ && (d.value.forEach((F) => {
        F.unhide();
      }), _.hidden = !1, O(t.section.events.onUnhide));
    }
    function R() {
      let _ = !0;
      return d.value.forEach((F) => {
        if (!F.validate()) {
          _ = !1;
          return;
        }
      }), O(t.section.events.onValidated), _;
    }
    function x() {
      let _ = !0;
      return d.value.forEach((F) => {
        if (!F.isValid()) {
          _ = !1;
          return;
        }
      }), _;
    }
    function N() {
      return !x();
    }
    function z() {
      d.value.forEach((_) => {
        _.resetValidation();
      });
    }
    function b() {
      return d.value;
    }
    function m(_) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.readonly = _);
    }
    function h(_) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.cssClass = _);
    }
    function p(_) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.icon = _);
    }
    function I(_) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.label = _);
    }
    function T() {
      const _ = {};
      for (const [F, G] of d.value)
        _[F] = G.getValueSerialized();
      return _;
    }
    e(l);
    const Q = ve(() => x()), te = ve(() => N()), K = ve(() => T());
    return j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onIsValid;
      },
      (_) => {
        r == null || r(), r = null, _ && (r = j(Q, (F) => {
          F && O(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onIsInvalid;
      },
      (_) => {
        n == null || n(), n = null, _ && (n = j(te, (F) => {
          var G;
          F && O((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onUpdate;
      },
      (_) => {
        c == null || c(), c = null, _ && (c = j(
          K,
          () => {
            var F;
            O((F = t.section) == null ? void 0 : F.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var F;
      const _ = (F = Ye()) == null ? void 0 : F.exposed;
      _ && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        _
      ), he(() => {
        var G;
        s(), O((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (_, F) => Ee((v(), U("div", Zn, [
      t.section.beforeComponent ? (v(), A(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: g(() => [
          je(_.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), A(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [Oe, t.section.hidden !== !0]
    ]);
  }
}), ta = { class: "flex column" }, ra = /* @__PURE__ */ L({
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
    let r = null, n = "", c = 0, l = 0, d = null, s = null, i = null, V = null, k = null;
    const B = St(), u = w(ce.getEmptyFormBeforeInit()), R = w(!1), x = w(!1), N = w(!1), z = w(!1), b = w("create"), m = w({}), h = w(/* @__PURE__ */ new Map()), p = w(/* @__PURE__ */ new Map());
    async function I() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), u.value = ce.getForm(
        t.resourceName,
        t.resourceId,
        te(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ie,
        t.eventManager
      ), c = u.value.sections.length, l = u.value.sections.map((f) => f.fields).flat().length, t.resourceId && (b.value = "edit");
    }
    async function T() {
      var D, W, pe;
      if (!F())
        return;
      O((D = u.value) == null ? void 0 : D.events.onSubmit), z.value = !0, y();
      const f = K(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (V = C.resource_data, C.success)
        m.value = {}, b.value === "create" && (b.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), u.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          te(),
          {
            form: C.form,
            resource_data: C.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Ce(), n = JSON.stringify(K()), O((pe = u.value) == null ? void 0 : pe.events.onSubmitSuccess);
      else {
        m.value = {};
        const ge = [];
        for (const [ne, se] of p.value) {
          const De = C.errors[ne];
          De && (se.setupBackendErrors(De), ge.push(ne));
        }
        Object.entries(C.errors).forEach((ne) => {
          ge.includes(ne[0]) || (m.value[ne[0]] = ne[1]);
        }), O((W = u.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    async function Q(f) {
      var W, pe, ge;
      if (!u.value.allowBulk || b.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!F())
        return;
      O((W = u.value) == null ? void 0 : W.events.onSubmit), z.value = !0, y();
      const C = K(), D = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: C,
        bulkCount: f,
        context: t.context
      });
      if (k = D.bulk_data, D.success)
        m.value = {}, b.value === "create" && (b.value = "edit"), r && D.resource_data && (r.resource_data = D.resource_data), u.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          te(),
          {
            form: D.form,
            resource_data: D.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Ce(), n = JSON.stringify(K()), O((ge = u.value) == null ? void 0 : ge.events.onSubmitSuccess);
      else {
        m.value = {};
        const ne = [];
        for (const [se, De] of p.value) {
          const Ue = D.errors[se];
          Ue && (De.setupBackendErrors(Ue), ne.push(se));
        }
        Object.entries(D.errors).forEach((se) => {
          ne.includes(se[0]) || (m.value[se[0]] = se[1]);
        }), O((pe = u.value) == null ? void 0 : pe.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    function te() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const C in B) {
        const D = B[C];
        if (D) {
          const W = L({
            inheritAttrs: !1,
            setup(pe, { attrs: ge, slots: ne }) {
              return () => D({
                ...pe,
                ...ge,
                slots: ne
              });
            }
          });
          switch (C) {
            case "sections":
              f.sectionComponent = W;
              break;
            case "actions":
              f.actionComponent = W;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = W;
              break;
            case "association-display":
              f.associationDisplayComponent = W;
              break;
            default:
              f.dynamicComponentRecord[C] = W;
              break;
          }
        }
      }
      return f;
    }
    function K() {
      const f = {};
      for (const [C, D] of p.value)
        f[C] = D.getValueDeserialized();
      return f;
    }
    function _() {
      const f = {};
      for (const [C, D] of p.value)
        f[C] = D.getValueSerialized();
      return f;
    }
    function F() {
      var C;
      let f = !0;
      return p.value.forEach((D) => {
        if (!D.validate()) {
          f = !1;
          return;
        }
      }), O((C = u.value) == null ? void 0 : C.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return p.value.forEach((C) => {
        if (!C.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function be() {
      return !G();
    }
    function Ce() {
      h.value.forEach((f) => {
        f.softReset();
      });
    }
    function Ve() {
      var f;
      p.value.forEach((C) => {
        C.reset();
      }), O((f = u.value) == null ? void 0 : f.events.onReset);
    }
    function Ne() {
      var f;
      p.value.forEach((C) => {
        C.clear();
      }), O((f = u.value) == null ? void 0 : f.events.onClear);
    }
    function Se() {
      p.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function y() {
      p.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function q(f) {
      if (r)
        return r.resource_data[f];
    }
    function le(f) {
      return h.value.get(f);
    }
    function ye(f) {
      return [...h.value.values()].at(f);
    }
    function xe() {
      return h.value;
    }
    function Ze(f) {
      return p.value.get(f);
    }
    function et() {
      return p.value;
    }
    function tt() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function nt() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function at() {
      return a(b);
    }
    function ot() {
      return n !== JSON.stringify(K());
    }
    function rt(f) {
      u.value && (u.value.context = f);
    }
    function lt(f) {
      u.value && (u.value.cssClass = f);
    }
    function it(f) {
      u.value && (u.value.readonly = f);
    }
    function st() {
      return N.value;
    }
    function ut() {
      return V;
    }
    function dt() {
      return k;
    }
    function ct() {
      return u;
    }
    function ft(f) {
      var C;
      return (C = u.value) == null ? void 0 : C.sections.find((D) => D.name === f);
    }
    function mt(f) {
      var C;
      return (C = u.value) == null ? void 0 : C.sections.map((D) => D.fields).flat().find((D) => D.metadata.field_name === f);
    }
    function Te(f, C) {
      h.value.set(f, C), c === h.value.size && (R.value = !0);
    }
    function Ie(f, C) {
      p.value.set(f, C), l === p.value.size && (x.value = !0);
    }
    const $e = {
      getFormRef: ct,
      getSectionRef: ft,
      getFieldRef: mt,
      registerSectionWrapperRef: Te,
      registerFieldWrapperRef: Ie
    }, pt = new Proxy({}, {
      get(f, C) {
        var D;
        return (D = u.value) == null ? void 0 : D[C];
      }
    }), ie = {
      getMode: at,
      getSectionByName: le,
      getSectionByIndex: ye,
      getSections: xe,
      getFieldByName: Ze,
      getFields: et,
      validate: F,
      isValid: G,
      isInvalid: be,
      softReset: Ce,
      reset: Ve,
      clear: Ne,
      resetValidation: Se,
      submit: T,
      submitBulk: Q,
      valuesHasChanged: ot,
      getInitialValueByFieldName: q,
      getAssociationDataCallback: tt,
      setContext: rt,
      setCssClass: lt,
      setReadonlyState: it,
      isReady: st,
      getSubmitData: ut,
      getBulkSubmitData: dt,
      form: pt
    };
    e(ie);
    const gt = ve(() => G()), vt = ve(() => be()), ht = ve(() => _());
    return j(
      () => R.value && x.value,
      (f) => {
        var C;
        f && !N.value && (O((C = u.value) == null ? void 0 : C.events.onReady), N.value = !0);
      }
    ), j(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        d == null || d(), d = null, f && (d = j(gt, (C) => {
          var D;
          C && O((D = u.value) == null ? void 0 : D.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = j(vt, (C) => {
          var D;
          C && O((D = u.value) == null ? void 0 : D.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        i == null || i(), i = null, f && (i = j(
          ht,
          () => {
            var C;
            O((C = u.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      nt(), await I(), he(() => {
        n = JSON.stringify(K());
      });
    }), (f, C) => Ee((v(), U("div", ta, [
      M("div", {
        class: Z(u.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), U(fe, null, me(u.value.sections, (D) => (v(), A(ea, {
          key: D.name,
          section: D,
          context: t.context,
          formApi: ie,
          privateFormApi: $e,
          registerRef: Te
        }, {
          default: g(() => [
            (v(!0), U(fe, null, me(D.fields, (W) => (v(), A(Xn, {
              key: W.metadata.field_name,
              field: W,
              context: t.context,
              formApi: ie,
              privateFormApi: $e,
              registerRef: Ie
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), A(oe(u.value.orphanErrorsComponent), {
        orphanErrors: m.value,
        formApi: ie
      }, null, 8, ["orphanErrors"])),
      (v(), A(oe(u.value.actionComponent), {
        isLoadingSubmit: z.value,
        formApi: ie
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Oe, N.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  ra as Submit64Form
};
