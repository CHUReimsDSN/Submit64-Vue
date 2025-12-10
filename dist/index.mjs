var pt = Object.defineProperty;
var gt = (o, e, t) => e in o ? pt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var A = (o, e, t) => gt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as h, createElementVNode as ae, createVNode as B, createBlock as w, createCommentVNode as W, unref as a, mergeProps as Be, toDisplayString as Z, renderSlot as Me, resolveComponent as vt, normalizeProps as ht, guardReactiveProps as yt, withCtx as V, createTextVNode as xe, Fragment as _e, renderList as Se, ref as k, onMounted as j, nextTick as le, normalizeClass as J, watch as P, resolveDynamicComponent as X, markRaw as Y, getCurrentInstance as Ye, withDirectives as we, vShow as Oe, computed as ue, useSlots as bt } from "vue";
import { QBtn as ce, QIcon as ve, QItem as De, QItemSection as Ae, QItemLabel as Re, QInput as he, QPopupProxy as Fe, QDate as je, QTime as Ct, QCheckbox as _t, QSelect as Te, QColor as St, useQuasar as Ft, QEditor as kt, date as O } from "quasar";
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
    return (r, n) => (h(), L("div", Vt, [
      ae("div", xt, [
        B(a(ce), Be(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), w(a(ce), Be({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : W("", !0),
        e.formApi.clear ? (h(), w(a(ce), Be({ key: 1 }, t(), {
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
    return (t, r) => (h(), L("div", null, [
      ae("div", At, [
        e.sectionApi.section.icon ? (h(), w(a(ve), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : W("", !0),
        ae("div", Rt, Z(e.sectionApi.section.label), 1)
      ]),
      ae("div", Nt, [
        Me(t.$slots, "default")
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
      return h(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (c) => e.reset())
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
    return (t, r) => (h(), w(a(De), ht(yt(e.itemProps)), {
      default: V(() => [
        B(a(Ae), null, {
          default: V(() => [
            B(a(Re), null, {
              default: V(() => [
                xe(Z(e.entry.label), 1)
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
    return (t, r) => (h(), L("div", Ot, [
      (h(!0), L(_e, null, Se(e.orphanErrors, (n, c) => (h(), L("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, Z(c) + " : " + Z(n.join(",")), 1))), 128))
    ]));
  }
}), Ve = class Ve {
  constructor() {
    A(this, "_formSettings");
    A(this, "_formStyle");
    A(this, "_actionComponent");
    A(this, "_orphanErrorsComponent");
    A(this, "_sectionComponent");
    A(this, "_wrapperResetComponent");
    A(this, "_associationDisplayComponent");
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
A(Ve, "_instance", new Ve());
let M = Ve;
class ke {
  constructor(e) {
    A(this, "formApi");
    A(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, c = new qt(r, n, this.formApi);
    return this.events.push(c), new It(c);
  }
  static create(e) {
    return new ke(e);
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
    A(this, "type");
    A(this, "data");
    A(this, "formApi");
    A(this, "action", () => {
    });
    A(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    A(this, "formEvent");
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", i = k(), u = k();
    function s() {
      i.value && i.value.hide();
    }
    function l() {
      return u.value ? u.value.validate() : !1;
    }
    function S() {
      return u.value ? !u.value.hasError : !1;
    }
    function y() {
      u.value && u.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(l, S, y), c && le(() => {
        var x;
        (x = u.value) == null || x.resetValidation();
      });
    }), (x, d) => (h(), w(a(he), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[1] || (d[1] = (T) => e.modelValueOnUpdate(T)),
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Fe), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": d[0] || (d[0] = (T) => e.modelValueOnUpdate(T)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    ae("div", zt, [
                      B(a(ce), {
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", i = k(), u = k(), s = k();
    function l() {
      i.value && i.value.hide();
    }
    function S() {
      u.value && u.value.hide();
    }
    function y() {
      return s.value ? s.value.validate() : !1;
    }
    function x() {
      return s.value ? !s.value.hasError : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(y, x, d), c && le(() => {
        var T;
        (T = s.value) == null || T.resetValidation();
      });
    }), (T, E) => (h(), w(a(he), {
      ref_key: "fieldRef",
      ref: s,
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Fe), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[0] || (E[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    ae("div", Ut, [
                      B(a(ce), {
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
        }),
        B(a(ve), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Fe), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(Ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[1] || (E[1] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    ae("div", Pt, [
                      B(a(ce), {
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
    const e = o, t = k(!0), n = e.formApi.form.formStyle;
    function c() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return P(
      () => e.modelValue,
      (s) => {
        for (const l of e.rules)
          if (t.value = l(s), t.value !== !0)
            break;
      }
    ), j(() => {
      e.registerBehaviourCallbacks(c, i, u);
    }), (s, l) => (h(), L("div", Gt, [
      B(a(_t), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": l[0] || (l[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: J([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), L("div", Ht, Z(e.field.hint), 1)) : W("", !0),
      t.value !== !0 ? (h(), L("div", Mt, Z(t.value), 1)) : W("", !0)
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
    const e = o, t = k([]), r = k([]), n = k(), c = e.formApi.form, i = c.formSettings, u = c.formStyle, s = i.rulesBehaviour === "lazy";
    function l(E, N) {
      if (E === "") {
        N(() => {
          r.value = [...t.value];
        });
        return;
      }
      N(() => {
        const I = E.toLowerCase();
        r.value = t.value.filter((q) => q.label.toLowerCase().includes(I));
      });
    }
    function S() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function y() {
      return n.value ? n.value.validate() : !1;
    }
    function x() {
      return n.value ? !n.value.hasError : !1;
    }
    function d() {
      n.value && n.value.resetValidation();
    }
    function T() {
      r.value = [];
    }
    return j(() => {
      S(), e.registerBehaviourCallbacks(y, x, d, void 0, T);
    }), (E, N) => (h(), w(a(Te), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (I) => e.modelValueOnUpdate(I)),
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
      onFilter: l
    }, {
      "no-option": V(() => [
        B(a(De), {
          dense: a(u).fieldDense
        }, {
          default: V(() => [
            B(a(Ae), null, {
              default: V(() => [
                B(a(Re), null, {
                  default: V(() => [
                    xe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Ue = "__init", Pe = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), s = k(
      y()
    ), l = k(), S = k(Ue);
    function y() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function x(_, D) {
      if (_ === S.value) {
        D(() => {
        });
        return;
      }
      const v = e.formApi.getAssociationDataCallback();
      s.value = y(), S.value = _;
      const U = e.formApi.form;
      s.value.isLoading = !0, v({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: _,
        context: U.context
      }).then(($) => {
        D(() => {
          u.value = $.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            $.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], s.value = y();
      });
    }
    function d() {
      const _ = e.getValueSerialized();
      !_ || !e.field.associationData || (u.value = [
        {
          label: e.field.associationData.label[0] ?? "???",
          value: _,
          data: e.field.associationData.data[0]
        }
      ]);
    }
    function T() {
      return l.value ? l.value.validate() : !1;
    }
    function E() {
      return l.value ? !l.value.hasError : !1;
    }
    function N() {
      l.value && l.value.resetValidation();
    }
    function I() {
      s.value = y(), u.value = [], S.value = Ue;
    }
    function q(_) {
      const D = u.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && _.to === D && D !== -1) {
        const v = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, U({
          resourceName: v.resourceName,
          resourceId: v.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: S.value,
          context: v.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), s.value.lastPage = Math.ceil(
            $.row_count / s.value.limit
          ), $.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, _.ref.refresh();
        });
      }
    }
    return j(() => {
      le(() => {
        d();
      }), e.registerBehaviourCallbacks(
        T,
        E,
        N,
        d,
        I
      );
    }), (_, D) => (h(), w(a(Te), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: J(e.field.cssClass),
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
      onClear: e.clear,
      onFilter: x,
      onVirtualScroll: q
    }, {
      "no-option": V(() => [
        B(a(De), {
          dense: a(c).fieldDense
        }, {
          default: V(() => [
            B(a(Ae), null, {
              default: V(() => [
                B(a(Re), null, {
                  default: V(() => [
                    xe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((v) => [
        (h(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: v.opt,
          itemProps: v.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Le = "__init", Ge = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), s = k(
      y()
    ), l = k(), S = k(Le);
    function y() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function x(_, D) {
      if (_ === S.value) {
        D(() => {
        });
        return;
      }
      const v = e.formApi.getAssociationDataCallback();
      s.value = y(), S.value = _;
      const U = e.formApi.form;
      s.value.isLoading = !0, v({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: _,
        context: U.context
      }).then(($) => {
        D(() => {
          u.value = $.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            $.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], s.value = y();
      });
    }
    function d() {
      const _ = e.getValueSerialized();
      !_ || !e.field.associationData || (u.value = _.map((D, v) => ({
        label: e.field.associationData.label[v] ?? "???",
        value: D,
        data: e.field.associationData.data[v]
      })));
    }
    function T() {
      return l.value ? l.value.validate() : !1;
    }
    function E() {
      return l.value ? !l.value.hasError : !1;
    }
    function N() {
      l.value && l.value.resetValidation();
    }
    function I() {
      s.value = y(), u.value = [], S.value = Le;
    }
    function q(_) {
      const D = u.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && _.to === D && D !== -1) {
        const v = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, U({
          resourceName: v.resourceName,
          resourceId: v.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: S.value,
          context: v.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), s.value.lastPage = Math.ceil(
            $.row_count / s.value.limit
          ), $.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, _.ref.refresh();
        });
      }
    }
    return j(() => {
      le(() => {
        d();
      }), e.registerBehaviourCallbacks(
        T,
        E,
        N,
        d,
        I
      );
    }), (_, D) => (h(), w(a(Te), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[0] || (D[0] = (v) => e.modelValueOnUpdate(v)),
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
      class: J(e.field.cssClass),
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
      onClear: e.clear,
      onFilter: x,
      onVirtualScroll: q
    }, {
      "no-option": V(() => [
        B(a(De), {
          dense: a(c).fieldDense
        }, {
          default: V(() => [
            B(a(Ae), null, {
              default: V(() => [
                B(a(Re), null, {
                  default: V(() => [
                    xe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((v) => [
        (h(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: v.opt,
          itemProps: v.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ee = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", i = k();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function s() {
      return i.value ? !i.value.hasError : !1;
    }
    function l() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (S, y) => (h(), w(a(he), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[0] || (y[0] = (x) => e.modelValueOnUpdate(x)),
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", i = k();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function s() {
      return i.value ? !i.value.hasError : !1;
    }
    function l() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (S, y) => (h(), w(a(he), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[0] || (y[0] = (x) => e.modelValueOnUpdate(x)),
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
      "lazy-rules": c,
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", i = k();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function s() {
      return i.value ? !i.value.hasError : !1;
    }
    function l() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, s, l);
    }), (S, y) => (h(), w(a(he), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[1] || (y[1] = (x) => e.modelValueOnUpdate(x)),
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(ve), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Fe), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(St), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": y[0] || (y[0] = (x) => e.modelValueOnUpdate(x))
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
    const e = o, t = Ft(), n = e.formApi.form.formStyle, c = [
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
    ], i = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, u = k();
    function s() {
      return !!u.value;
    }
    function l() {
      return !!u.value;
    }
    function S() {
    }
    return j(() => {
      e.registerBehaviourCallbacks(s, l, S);
    }), (y, x) => e.modelValue ? (h(), w(a(kt), {
      key: 0,
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": x[0] || (x[0] = (d) => e.modelValueOnUpdate(d)),
      toolbar: c,
      fonts: i,
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
    return t.formStyle, r.rulesBehaviour, (n, c) => " TODO json edit ? ";
  }
});
class ne {
  constructor(e, t, r, n, c, i, u, s, l) {
    A(this, "resourceName");
    A(this, "resourceId");
    A(this, "formMetadataAndData");
    A(this, "context");
    A(this, "formSettings");
    A(this, "formStyle");
    A(this, "actionComponent");
    A(this, "orphanErrorsComponent");
    A(this, "sectionComponent");
    A(this, "wrapperResetComponent");
    A(this, "associationDisplayComponent");
    A(this, "dynamicComponentRecord");
    A(this, "formApi");
    A(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...c,
      ...M.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...M.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? M.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? M.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? M.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? M.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? M.getGlobalAssociationDisplayComponent(), this.registerEventCallback = l ?? (() => {
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
  static getForm(e, t, r, n, c, i, u, s, l) {
    return new ne(
      e,
      t,
      r,
      n,
      c,
      i,
      u,
      s,
      l
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ke.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = ke.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (i, u) => {
        const s = [];
        i.fields.forEach((d) => {
          const T = this.dynamicComponentRecord[`field-${d.field_name}-before`], E = ne.getFieldComponentByFormFieldType(d), N = this.dynamicComponentRecord[`field-${d.field_name}-after`], I = {
            associationDisplayComponent: Y(
              this.associationDisplayComponent
            ),
            regularFieldType: ne.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let q = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((D) => D.type === "required") && (q = q.concat("*"));
          const _ = {
            type: d.field_type,
            extraType: d.field_extra_type,
            metadata: Object.freeze(d),
            label: q,
            hint: d.hint ?? void 0,
            prefix: d.prefix ?? void 0,
            suffix: d.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? i.readonly ?? d.readonly ?? void 0,
            cssClass: d.css_class ?? void 0,
            staticSelectOptions: d.static_select_options,
            associationData: d.field_association_data,
            rules: d.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: T ? Y(T) : void 0,
            mainComponent: Y(E),
            afterComponent: N ? Y(N) : void 0,
            events: r.fields[d.field_name] ?? {},
            componentOptions: I
          };
          s.push(_), t.add(d.field_name);
        });
        const l = this.dynamicComponentRecord[`section-${i.name ?? u}-before`], S = this.sectionComponent, y = this.dynamicComponentRecord[`section-${i.name ?? u}-after`], x = {
          label: i.label ?? void 0,
          icon: i.icon ?? void 0,
          cssClass: i.css_class ?? void 0,
          hidden: !1,
          name: i.name ?? u.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? i.readonly ?? void 0,
          events: r.sections[i.name ?? u.toString()] ?? {},
          beforeComponent: l ? Y(l) : void 0,
          mainComponent: Y(S),
          afterComponent: y ? Y(y) : void 0,
          fields: s
        };
        n.push(x);
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
      actionComponent: Y(this.actionComponent),
      orphanErrorsComponent: Y(this.orphanErrorsComponent),
      wrapperResetComponent: Y(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((i, u) => i + u.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), c;
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
            return Ee;
        }
      case "text":
        return Ee;
      case "number":
        return Qt;
      case "date":
        return $t;
      case "datetime":
        return Lt;
      case "select":
        return jt;
      case "selectBelongsTo":
        return Pe;
      case "selectHasMany":
        return Ge;
      case "selectHasAndBelongsToMany":
        return Ge;
      case "selectHasOne":
        return Pe;
      case "checkbox":
        return Yt;
      case "object":
        return Kt;
      default:
        return Ee;
    }
  }
}
function R(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Xt(o, e, t) {
  const r = t.form, n = (s, l, S) => s[l] ? S ? () => c(s[l]) : () => s[l] : s.compare_to ? () => {
    var y;
    return ((y = t.getFieldByName(s.compare_to)) == null ? void 0 : y.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (s) => String(
    O.formatDate(
      O.extractDate(s, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], u = [];
  switch (e) {
    case "date":
      i.push(He(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(He(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((s) => {
    const l = s;
    switch (l.type) {
      case "required":
        i.push(Zt());
        break;
      case "absence":
        i.push(tn());
        break;
      case "acceptance":
        i.push(nn());
        break;
      case "inclusion":
        i.push(Qe(l.including));
        break;
      case "exclusion":
        i.push(en(l.excluding));
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
        i.push(rn());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          ln(
            n(l, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          sn(
            n(l, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          un(
            n(l, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          cn(
            n(l, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          dn(n(l, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          fn(
            n(l, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(mn());
        break;
      case "numberNumericOnly":
        i.push(pn());
        break;
      case "numberEvenOnly":
        i.push(gn());
        break;
      case "numberOddOnly":
        i.push(vn());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          hn(
            n(l, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          yn(
            n(l, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          bn(
            n(l, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Cn(
            n(l, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Fn(
            n(l, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Sn(n(l, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          _n(
            () => l.min,
            () => l.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          kn(
            n(l, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Vn(
            n(l, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          xn(
            n(l, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          Dn(
            n(l, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          An(
            n(l, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Rn(
            n(l, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Nn(
            n(l, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((s) => {
    switch (s) {
      case "allowBlank":
        return on(i);
      case "allowNull":
        return an(i);
    }
  }) : i;
}
function Zt() {
  return (o) => !!o || "Ce champ est requis";
}
function Qe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function en(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Qe.toString()}`
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
    const r = o(), n = O.extractDate(String(t), e), c = O.extractDate(r, e);
    return n <= c || `Inf. ou égal à ${r}`;
  };
}
function xn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), c = O.extractDate(r, e);
    return n < c || `Inf. à ${r}`;
  };
}
function Dn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), c = O.extractDate(r, e);
    return n >= c || `Sup. ou égal à ${r}`;
  };
}
function An(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), c = O.extractDate(r, e);
    return n > c || `Sup. à ${r}`;
  };
}
function Rn(o, e) {
  return (t) => {
    const r = o(), n = O.extractDate(String(t), e), c = O.extractDate(r, e);
    return n === c || `Égale à ${n}`;
  };
}
function Nn(o, e) {
  return (t) => {
    const r = o();
    return O.extractDate(String(t), e) !== O.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function He(o) {
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
    let r = () => !0, n = () => !0, c = () => {
    }, i = () => {
    }, u = () => {
    };
    const s = N(), l = k(), S = k([]);
    function y() {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = d(l.value);
    }
    function x() {
      l.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), l.value = d(l.value), R(t.field.events.onReset), i(), le(() => {
        ye();
      });
    }
    function d(m) {
      const F = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), F.formSettings.backendDateFormat),
            F.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(
              String(m),
              F.formSettings.backendDatetimeFormat
            ),
            F.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function T(m) {
      const F = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), F.formSettings.dateFormat),
            F.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : O.formatDate(
            O.extractDate(String(m), F.formSettings.datetimeFormat),
            F.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function E() {
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
        case "select":
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
      u(), R(t.field.events.onClear);
    }
    function N() {
      return En.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function I(m) {
      l.value = m;
    }
    function q() {
      return a(l);
    }
    function _() {
      return T(a(l));
    }
    function D(m) {
      S.value = m;
    }
    function v() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, R(t.field.events.onHide));
    }
    function U() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, R(t.field.events.onUnhide));
    }
    function $(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.readonly = m);
    }
    function de(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.hint = m);
    }
    function oe(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.cssClass = m);
    }
    function K(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.suffix = m);
    }
    function p(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.prefix = m);
    }
    function b(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.label = m);
    }
    function G() {
      const m = r();
      return R(t.field.events.onValidated), m;
    }
    function fe() {
      return n();
    }
    function me() {
      return !fe();
    }
    function ye() {
      return c();
    }
    function Ne(m, F, ge, se, be) {
      r = m, n = F, c = ge, se && (i = se), be && (u = be);
    }
    const pe = {
      softReset: y,
      reset: x,
      clear: E,
      validate: G,
      isValid: fe,
      isInvalid: me,
      hide: v,
      unhide: U,
      resetValidation: ye,
      getValueDeserialized: _,
      getValueSerialized: q,
      setupBackendErrors: D,
      setReadonlyState: $,
      setHint: de,
      setCssClass: oe,
      setSuffix: K,
      setPrefix: p,
      setLabel: b,
      setValue: I,
      field: t.field
    };
    return e(pe), P(
      () => t.field.events.onUpdate ? l.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), P(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? l.value : null,
      (m) => {
        R(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var F;
      y();
      const m = (F = Ye()) == null ? void 0 : F.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, F) => we((h(), L("div", null, [
      t.field.beforeComponent ? (h(), w(X(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: pe
      }, null, 8, ["formApi"])) : W("", !0),
      (h(), w(X(t.field.mainComponent), {
        modelValue: l.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: x,
        clear: E,
        getValueDeserialized: _,
        getValueSerialized: q,
        validate: G,
        modelValueOnUpdate: I,
        registerBehaviourCallbacks: Ne
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), w(X(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: pe
      }, null, 8, ["formApi"])) : W("", !0),
      S.value.length > 0 ? (h(), L("div", wn, [
        (h(!0), L(_e, null, Se(S.value, (ge, se) => (h(), L("div", {
          index: se,
          class: "flex column"
        }, Z(ge), 9, On))), 256))
      ])) : W("", !0)
    ], 512)), [
      [Oe, t.field.hidden !== !0]
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
    let r = null, n = null, c = null;
    const i = {
      softReset: l,
      reset: S,
      clear: y,
      validate: T,
      isValid: E,
      isInvalid: N,
      hide: x,
      unhide: d,
      resetValidation: I,
      getFields: q,
      setReadonlyState: _,
      setCssClass: D,
      setIcon: v,
      setLabel: U,
      section: t.section
    }, u = k(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((p) => {
        const b = p.metadata.field_name, G = t.formApi.getFieldByName(b);
        G && u.value.set(b, G);
      });
    }
    function l() {
      u.value.forEach((p) => {
        p.softReset();
      });
    }
    function S() {
      u.value.forEach((p) => {
        p.reset();
      }), R(t.section.events.onReset);
    }
    function y() {
      u.value.forEach((p) => {
        p.clear();
      }), R(t.section.events.onClear);
    }
    function x() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((b) => {
        b.hide();
      }), p.hidden = !0, R(t.section.events.onHide));
    }
    function d() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((b) => {
        b.unhide();
      }), p.hidden = !1, R(t.section.events.onUnhide));
    }
    function T() {
      let p = !0;
      return u.value.forEach((b) => {
        if (!b.validate()) {
          p = !1;
          return;
        }
      }), R(t.section.events.onValidated), p;
    }
    function E() {
      let p = !0;
      return u.value.forEach((b) => {
        if (!b.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function N() {
      return !E();
    }
    function I() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function q() {
      return u.value;
    }
    function _(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.readonly = p);
    }
    function D(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.cssClass = p);
    }
    function v(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.icon = p);
    }
    function U(p) {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (b.label = p);
    }
    function $() {
      const p = {};
      for (const [b, G] of u.value)
        p[b] = G.getValueSerialized();
      return p;
    }
    e(i);
    const de = ue(() => E()), oe = ue(() => N()), K = ue(() => $());
    return P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = P(de, (b) => {
          b && R(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = P(oe, (b) => {
          var G;
          b && R((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        c == null || c(), c = null, p && (c = P(
          K,
          () => {
            var b;
            R((b = t.section) == null ? void 0 : b.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var b;
      const p = (b = Ye()) == null ? void 0 : b.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), le(() => {
        s();
      });
    }), (p, b) => we((h(), L("div", qn, [
      t.section.beforeComponent ? (h(), w(X(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : W("", !0),
      (h(), w(X(t.section.mainComponent), {
        sectionApi: i,
        formApi: t.formApi
      }, {
        default: V(() => [
          Me(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), w(X(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : W("", !0)
    ], 512)), [
      [Oe, t.section.hidden !== !0]
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
    let r = null, n = "", c = 0, i = 0, u = null, s = null, l = null, S = null, y = null;
    const x = bt(), d = k(ne.getEmptyFormBeforeInit()), T = k(!1), E = k(!1), N = k(!1), I = k(!1), q = k("create"), _ = k({}), D = k(/* @__PURE__ */ new Map()), v = k(/* @__PURE__ */ new Map());
    async function U() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = ne.getForm(
        t.resourceName,
        t.resourceId,
        oe(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ee,
        t.eventManager
      ), c = d.value.sections.length, i = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && (q.value = "edit");
    }
    async function $() {
      var C, H, re;
      if (!b())
        return;
      R((C = d.value) == null ? void 0 : C.events.onSubmit), I.value = !0, m();
      const f = K(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (S = g.resource_data, g.success)
        _.value = {}, q.value === "create" && (q.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), d.value = ne.getForm(
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
        ), me(), n = JSON.stringify(K()), R((re = d.value) == null ? void 0 : re.events.onSubmitSuccess);
      else {
        _.value = {};
        const ie = [];
        for (const [Q, te] of v.value) {
          const Ce = g.errors[Q];
          Ce && (te.setupBackendErrors(Ce), ie.push(Q));
        }
        Object.entries(g.errors).forEach((Q) => {
          ie.includes(Q[0]) || (_.value[Q[0]] = Q[1]);
        }), R((H = d.value) == null ? void 0 : H.events.onSubmitUnsuccess);
      }
      I.value = !1;
    }
    async function de(f) {
      var H, re, ie;
      if (!d.value.allowBulk || q.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!b())
        return;
      R((H = d.value) == null ? void 0 : H.events.onSubmit), I.value = !0, m();
      const g = K(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        bulkCount: f,
        context: t.context
      });
      if (y = C.bulk_data, C.success)
        _.value = {}, q.value === "create" && (q.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), d.value = ne.getForm(
          t.resourceName,
          t.resourceId,
          oe(),
          {
            form: C.form,
            resource_data: C.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), me(), n = JSON.stringify(K()), R((ie = d.value) == null ? void 0 : ie.events.onSubmitSuccess);
      else {
        _.value = {};
        const Q = [];
        for (const [te, Ce] of v.value) {
          const $e = C.errors[te];
          $e && (Ce.setupBackendErrors($e), Q.push(te));
        }
        Object.entries(C.errors).forEach((te) => {
          Q.includes(te[0]) || (_.value[te[0]] = te[1]);
        }), R((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      I.value = !1;
    }
    function oe() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in x) {
        const C = x[g];
        if (C) {
          const H = z({
            inheritAttrs: !1,
            setup(re, { attrs: ie, slots: Q }) {
              return () => C({
                ...re,
                ...ie,
                slots: Q
              });
            }
          });
          switch (g) {
            case "sections":
              f.sectionComponent = H;
              break;
            case "actions":
              f.actionComponent = H;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = H;
              break;
            case "association-display":
              f.associationDisplayComponent = H;
              break;
            default:
              f.dynamicComponentRecord[g] = H;
              break;
          }
        }
      }
      return f;
    }
    function K() {
      const f = {};
      for (const [g, C] of v.value)
        f[g] = C.getValueDeserialized();
      return f;
    }
    function p() {
      const f = {};
      for (const [g, C] of v.value)
        f[g] = C.getValueSerialized();
      return f;
    }
    function b() {
      var g;
      let f = !0;
      return v.value.forEach((C) => {
        if (!C.validate()) {
          f = !1;
          return;
        }
      }), R((g = d.value) == null ? void 0 : g.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return v.value.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function fe() {
      return !G();
    }
    function me() {
      D.value.forEach((f) => {
        f.softReset();
      });
    }
    function ye() {
      var f;
      v.value.forEach((g) => {
        g.reset();
      }), R((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function Ne() {
      var f;
      v.value.forEach((g) => {
        g.clear();
      }), R((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function pe() {
      v.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function m() {
      v.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function F(f) {
      if (r)
        return r.resource_data[f];
    }
    function ge(f) {
      return D.value.get(f);
    }
    function se(f) {
      return [...D.value.values()].at(f);
    }
    function be() {
      return D.value;
    }
    function We(f) {
      return v.value.get(f);
    }
    function Je() {
      return v.value;
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
      return a(q);
    }
    function et() {
      return n !== JSON.stringify(K());
    }
    function tt(f) {
      d.value && (d.value.context = f);
    }
    function nt(f) {
      d.value && (d.value.cssClass = f);
    }
    function at(f) {
      d.value && (d.value.readonly = f);
    }
    function ot() {
      return N.value;
    }
    function rt() {
      return S;
    }
    function it() {
      return y;
    }
    function lt() {
      return d;
    }
    function st(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.find((C) => C.name === f);
    }
    function ut(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.map((C) => C.fields).flat().find((C) => C.metadata.field_name === f);
    }
    function qe(f, g) {
      D.value.set(f, g), c === D.value.size && (T.value = !0);
    }
    function Ie(f, g) {
      v.value.set(f, g), i === v.value.size && (E.value = !0);
    }
    const ze = {
      getFormRef: lt,
      getSectionRef: st,
      getFieldRef: ut,
      registerSectionWrapperRef: qe,
      registerFieldWrapperRef: Ie
    }, ct = new Proxy({}, {
      get(f, g) {
        var C;
        return (C = d.value) == null ? void 0 : C[g];
      }
    }), ee = {
      getMode: Ze,
      getSectionByName: ge,
      getSectionByIndex: se,
      getSections: be,
      getFieldByName: We,
      getFields: Je,
      validate: b,
      isValid: G,
      isInvalid: fe,
      softReset: me,
      reset: ye,
      clear: Ne,
      resetValidation: pe,
      submit: $,
      submitBulk: de,
      valuesHasChanged: et,
      getInitialValueByFieldName: F,
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
    const dt = ue(() => G()), ft = ue(() => fe()), mt = ue(() => p());
    return P(
      () => T.value && E.value,
      (f) => {
        var g;
        f && !N.value && (R((g = d.value) == null ? void 0 : g.events.onReady), N.value = !0);
      }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        u == null || u(), u = null, f && (u = P(dt, (g) => {
          var C;
          g && R((C = d.value) == null ? void 0 : C.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = P(ft, (g) => {
          var C;
          g && R((C = d.value) == null ? void 0 : C.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        l == null || l(), l = null, f && (l = P(
          mt,
          () => {
            var g;
            R((g = d.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      Xe(), await U(), le(() => {
        n = JSON.stringify(K());
      });
    }), (f, g) => we((h(), L("div", zn, [
      ae("div", {
        class: J(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), L(_e, null, Se(d.value.sections, (C) => (h(), w(In, {
          key: C.name,
          section: C,
          context: t.context,
          formApi: ee,
          privateFormApi: ze,
          registerRef: qe
        }, {
          default: V(() => [
            (h(!0), L(_e, null, Se(C.fields, (H) => (h(), w(Tn, {
              key: H.metadata.field_name,
              field: H,
              context: t.context,
              formApi: ee,
              privateFormApi: ze,
              registerRef: Ie
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), w(X(d.value.orphanErrorsComponent), {
        orphanErrors: _.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (h(), w(X(d.value.actionComponent), {
        isLoadingSubmit: I.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Oe, N.value]
    ]);
  }
});
export {
  ke as DynamicLogicBuilder,
  M as Submit64,
  Ln as Submit64Form
};
