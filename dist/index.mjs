var Ne = Object.defineProperty;
var Be = (o, e, t) => e in o ? Ne(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => Be(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as B, createElementBlock as q, openBlock as h, createElementVNode as j, createVNode as T, createBlock as D, createCommentVNode as z, unref as a, mergeProps as ve, toDisplayString as W, renderSlot as Oe, resolveComponent as Te, normalizeProps as qe, guardReactiveProps as we, withCtx as O, createTextVNode as $e, Fragment as oe, renderList as re, ref as x, onMounted as I, normalizeClass as U, watch as M, resolveDynamicComponent as L, nextTick as ue, markRaw as P, getCurrentInstance as De, useSlots as ze } from "vue";
import { QBtn as Y, QIcon as ae, QItem as Ie, QItemSection as Ue, QItemLabel as Pe, QInput as ce, QPopupProxy as Ce, QDate as Re, QTime as Le, QCheckbox as Ge, QSelect as _e, date as V } from "quasar";
const He = { class: "flex column" }, je = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, We = /* @__PURE__ */ B({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
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
    return (r, n) => (h(), q("div", He, [
      j("div", je, [
        T(a(Y), ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), D(a(Y), ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : z("", !0),
        e.clear ? (h(), D(a(Y), ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : z("", !0)
      ])
    ]));
  }
}), Qe = { class: "flex row items-center" }, Ye = { class: "text-body1 text-weight-medium" }, Me = { class: "flex column q-gutter-md" }, Je = /* @__PURE__ */ B({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      j("div", Qe, [
        e.sectionApi.section.icon ? (h(), D(a(ae), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : z("", !0),
        j("div", Ye, W(e.sectionApi.section.label), 1)
      ]),
      j("div", Me, [
        Oe(t.$slots, "default")
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ B({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Te("q-icon");
      return h(), D(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), Xe = /* @__PURE__ */ B({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), D(a(Ie), qe(we(e.itemProps)), {
      default: O(() => [
        T(a(Ue), null, {
          default: O(() => [
            T(a(Pe), null, {
              default: O(() => [
                $e(W(e.entry.label), 1)
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
}), Ze = { class: "flex column" }, et = /* @__PURE__ */ B({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", Ze, [
      (h(!0), q(oe, null, re(e.orphanErrors, (n, s) => (h(), q("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, W(s) + " : " + W(n.join(",")), 1))), 128))
    ]));
  }
}), se = class se {
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
      renderBackendHint: !0
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
      fieldBgColor: "white"
    }, this._actionComponent = We, this._orphanErrorsComponent = et, this._sectionComponent = Je, this._wrapperResetComponent = Ke, this._associationDisplayComponent = Xe;
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
_(se, "_instance", new se());
let H = se;
class ie {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new nt(r, n, this.formApi);
    return this.events.push(s), new tt(s);
  }
  static create(e) {
    return new ie(e);
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
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(r.getActionCallback());
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
class tt {
  constructor(e) {
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class nt {
  constructor(e, t, r) {
    _(this, "type");
    _(this, "data");
    _(this, "actions", []);
    _(this, "formApi");
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
      case "Field confirm value statement":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onConfirmStatement"
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
          key: "onReset"
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
      this.actions.forEach((e) => {
        e(this.formApi);
      });
    };
  }
}
const ot = { class: "row items-center justify-end" }, rt = /* @__PURE__ */ B({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = x(), u = x();
    function l() {
      i.value && i.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function S() {
      return u.value ? u.value.hasError : !1;
    }
    function C() {
      u.value && u.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(c, S, C);
    }), (y, A) => (h(), D(a(ce), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (E) => e.modelValueOnUpdate(E)),
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
      class: U(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        T(a(ae), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(a(Re), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (E) => e.modelValueOnUpdate(E)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: O(() => [
                    j("div", ot, [
                      T(a(Y), {
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
}), at = { class: "row items-center justify-end" }, it = { class: "row items-center justify-end" }, lt = /* @__PURE__ */ B({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = x(), u = x(), l = x();
    function c() {
      i.value && i.value.hide();
    }
    function S() {
      u.value && u.value.hide();
    }
    function C() {
      return l.value ? l.value.validate() : !1;
    }
    function y() {
      return l.value ? l.value.hasError : !1;
    }
    function A() {
      l.value && l.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(C, y, A);
    }), (E, F) => (h(), D(a(ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (b) => e.modelValueOnUpdate(b)),
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
      class: U(e.field.cssClass),
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: O(() => [
        T(a(ae), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(a(Re), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: O(() => [
                    j("div", at, [
                      T(a(Y), {
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
        T(a(ae), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: O(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: O(() => [
                T(a(Le), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: O(() => [
                    j("div", it, [
                      T(a(Y), {
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
}), st = { class: "flex column" }, ut = {
  key: 0,
  class: "q-field__bottom"
}, ct = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, dt = /* @__PURE__ */ B({
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
    function s() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return M(
      () => e.modelValue,
      (l) => {
        for (const c of e.rules)
          if (t.value = c(l), t.value !== !0)
            break;
      }
    ), I(() => {
      e.registerBehaviourCallbacks(s, i, u);
    }), (l, c) => (h(), q("div", st, [
      T(a(Ge), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: U([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", ut, W(e.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (h(), q("div", ct, W(t.value), 1)) : z("", !0)
    ]));
  }
}), ft = /* @__PURE__ */ B({
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
    return t.formStyle, r.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
}), mt = /* @__PURE__ */ B({
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
    const e = o, t = x([]), r = x([]), n = x(), s = e.formApi.form, i = s.formSettings, u = s.formStyle, l = i.rulesBehaviour === "lazy";
    function c(F, b) {
      if (F === "") {
        b(() => {
          r.value = [...t.value];
        });
        return;
      }
      b(() => {
        const k = F.toLowerCase();
        r.value = t.value.filter((m) => m.label.toLowerCase().includes(k));
      });
    }
    function S() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? n.value.hasError : !1;
    }
    function A() {
      n.value && n.value.resetValidation();
    }
    function E() {
      e.clear(), r.value = [];
    }
    return I(() => {
      S(), e.registerBehaviourCallbacks(C, y, A);
    }), (F, b) => (h(), D(a(_e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (k) => e.modelValueOnUpdate(k)),
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
      class: U(e.field.cssClass),
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
      onClear: E,
      onFilter: c
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function le() {
  return 20;
}
function N(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const pt = /* @__PURE__ */ B({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = x([]), l = x({
      limit: le(),
      offset: 0
    }), c = x();
    function S(b, k) {
      const m = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: le(),
        offset: 0
      }), k(() => {
        const g = e.formApi.form;
        m({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then(($) => {
          u.value = $.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function C() {
      ue(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: b,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function y() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? c.value.hasError : !1;
    }
    function E() {
      c.value && c.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return I(() => {
      C(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, k) => (h(), D(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (m) => e.modelValueOnUpdate(m)),
      type: e.field.componentOptions.regularFieldType,
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
      class: U(e.field.cssClass),
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
      onClear: F,
      onFilter: S
    }, {
      option: O((m) => [
        (h(), D(L(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), gt = /* @__PURE__ */ B({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = x([]), l = x({
      limit: le(),
      offset: 0
    }), c = x();
    function S(b, k) {
      const m = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: le(),
        offset: 0
      }), k(() => {
        const g = e.formApi.form;
        m({
          resourceName: g.resourceName,
          resourceId: g.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: l.value.limit,
          offset: l.value.offset,
          labelFilter: b,
          context: g.context
        }).then(($) => {
          u.value = $.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function C() {
      ue(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = b.map(
          (k, m) => ({
            label: e.field.associationData.label[m] ?? "???",
            value: k,
            data: e.field.associationData.data[m]
          })
        ));
      });
    }
    function y() {
      return c.value ? c.value.validate() : !1;
    }
    function A() {
      return c.value ? c.value.hasError : !1;
    }
    function E() {
      c.value && c.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return I(() => {
      C(), e.registerBehaviourCallbacks(y, A, E);
    }), (b, k) => (h(), D(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (m) => e.modelValueOnUpdate(m)),
      type: e.field.componentOptions.regularFieldType,
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
      class: U(e.field.cssClass),
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
      onClear: F,
      onFilter: S
    }, {
      option: O((m) => [
        (h(), D(L(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ve = /* @__PURE__ */ B({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = x();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function l() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(u, l, c);
    }), (S, C) => (h(), D(a(ce), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: U(e.field.cssClass),
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
}), ht = /* @__PURE__ */ B({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = x();
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function l() {
      return i.value ? i.value.hasError : !1;
    }
    function c() {
      i.value && i.value.resetValidation();
    }
    return I(() => {
      e.registerBehaviourCallbacks(u, l, c);
    }), (S, C) => (h(), D(a(ce), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (y) => e.modelValueOnUpdate(y)),
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
      class: U(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class K {
  constructor(e, t, r, n, s, i, u, l, c) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = l, this.formSettings = {
      ...s,
      ...H.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...H.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? H.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? H.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? H.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? H.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? H.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getForm(e, t, r, n, s, i, u, l, c) {
    return new K(
      e,
      t,
      r,
      n,
      s,
      i,
      u,
      l,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ie.create(this.formApi);
    this.registerEventCallback(e);
    const t = ie.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, i) => {
        const u = [];
        s.fields.forEach((y) => {
          const A = this.dynamicComponentRecord[`field-${y.field_name}-before`], E = K.getFieldComponentByFormFieldType(
            y.field_type
          ), F = this.dynamicComponentRecord[`field-${y.field_name}-after`], b = {
            associationDisplayComponent: P(this.associationDisplayComponent),
            regularFieldType: K.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, k = {
            type: y.field_type,
            metadata: Object.freeze(y),
            label: y.label,
            hint: y.hint ?? void 0,
            prefix: y.prefix ?? void 0,
            suffix: y.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? y.readonly ?? void 0,
            cssClass: y.css_class ?? void 0,
            staticSelectOptions: y.static_select_options,
            associationData: y.field_association_data,
            rules: y.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: A ? P(A) : void 0,
            mainComponent: P(E),
            afterComponent: F ? P(F) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: b
          };
          u.push(k);
        });
        const l = this.dynamicComponentRecord[`section-${s.name ?? i}-before`], c = this.sectionComponent, S = this.dynamicComponentRecord[`section-${s.name ?? i}-after`], C = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? i.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? i.toString()] ?? {},
          beforeComponent: l ? P(l) : void 0,
          mainComponent: P(c),
          afterComponent: S ? P(S) : void 0,
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
      events: t.form,
      actionComponent: P(this.actionComponent),
      orphanErrorsComponent: P(this.orphanErrorsComponent),
      wrapperResetComponent: P(this.wrapperResetComponent),
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
      string: Ve,
      text: Ve,
      number: ht,
      date: rt,
      datetime: lt,
      selectString: mt,
      selectBelongsTo: pt,
      selectHasMany: gt,
      checkbox: dt,
      object: ft
    }[e];
  }
}
function yt(o, e, t) {
  const r = t.form, n = (l, c, S) => l[c] ? S ? () => s(l[c]) : () => l[c] : l.compare_to ? () => {
    var C;
    return ((C = t.getField(l.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (l) => String(
    V.formatDate(
      V.extractDate(l, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], u = [];
  switch (e) {
    case "date":
      i.push(xe(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(xe(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((l) => {
    const c = l;
    switch (c.type) {
      case "required":
        i.push(bt());
        break;
      case "absence":
        i.push(Ct());
        break;
      case "acceptance":
        i.push(_t());
        break;
      case "inclusion":
        i.push(Ae(c.including));
        break;
      case "exclusion":
        i.push(vt(c.excluding));
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
        i.push(kt());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Vt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          xt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          Dt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          Rt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          At(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          Et(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Nt());
        break;
      case "numberNumericOnly":
        i.push(Bt());
        break;
      case "numberEvenOnly":
        i.push(Ot());
        break;
      case "numberOddOnly":
        i.push(Tt());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          qt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          wt(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          $t(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          zt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Pt(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Ut(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          It(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          Lt(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Gt(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          Ht(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          jt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          Wt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Qt(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Yt(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((l) => {
    switch (l) {
      case "allowBlank":
        return Ft(i);
      case "allowNull":
        return St(i);
    }
  }) : i;
}
function bt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ae(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function vt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ae.toString()}`
  );
}
function Ct() {
  return (o) => !o || "Ce champ doit être vide";
}
function _t() {
  return (o) => !!o || "Doit être accepté";
}
function St(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Ft(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function kt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Vt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function xt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Dt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Rt(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function At(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Et(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Nt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Bt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Ot() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Tt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function qt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function wt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function $t(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function zt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function It(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Ut(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Pt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Lt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Gt(o, e) {
  return (t) => {
    const r = o(), n = V.extractDate(String(t), e), s = V.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function Ht(o, e) {
  return (t) => {
    const r = o(), n = V.extractDate(String(t), e), s = V.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function jt(o, e) {
  return (t) => {
    const r = o(), n = V.extractDate(String(t), e), s = V.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function Wt(o, e) {
  return (t) => {
    const r = o(), n = V.extractDate(String(t), e), s = V.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function Qt(o, e) {
  return (t) => {
    const r = o(), n = V.extractDate(String(t), e), s = V.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Yt(o, e) {
  return (t) => {
    const r = o();
    return V.extractDate(String(t), e) !== V.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function xe(o) {
  return (e) => e == null || e === "" ? !0 : Mt(e, o) || `Date invalide. Format : ${o}`;
}
function Mt(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = V.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : V.formatDate(t, e) === o;
}
const Jt = {
  computeServerRules: yt
}, Kt = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Xt = ["index"], Zt = /* @__PURE__ */ B({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, s = () => {
    };
    const i = A(), u = x(), l = x([]);
    function c() {
      u.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), u.value = S(u.value), N(t.field.events.onReset), ue(() => {
        ee();
      });
    }
    function S(f) {
      const v = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : V.formatDate(
            V.extractDate(String(f), v.formSettings.backendDateFormat),
            v.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : V.formatDate(
            V.extractDate(
              String(f),
              v.formSettings.backendDatetimeFormat
            ),
            v.formSettings.datetimeFormat
          );
      }
      return f;
    }
    function C(f) {
      const v = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return f == null || f === "" ? null : V.formatDate(
            V.extractDate(String(f), v.formSettings.dateFormat),
            v.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : V.formatDate(
            V.extractDate(String(f), v.formSettings.datetimeFormat),
            v.formSettings.backendDatetimeFormat
          );
      }
      return f;
    }
    function y() {
      switch (t.field.type) {
        case "string":
          u.value = "";
          break;
        case "checkbox":
          u.value = !1;
          break;
        case "date":
          u.value = null;
          break;
        case "datetime":
          u.value = null;
          break;
        case "number":
          u.value = null;
          break;
        case "selectString":
          u.value = void 0;
          break;
        case "text":
          u.value = "";
          break;
        case "object":
          u.value = {};
          break;
        case "selectBelongsTo":
          u.value = void 0;
          break;
        case "selectHasMany":
          u.value = void 0;
          break;
      }
      N(t.field.events.onClear);
    }
    function A() {
      return Jt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function E(f) {
      u.value = f;
    }
    function F() {
      return a(u);
    }
    function b() {
      return C(a(u));
    }
    function k(f) {
      l.value = f;
    }
    function m() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !0);
    }
    function g() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !1);
    }
    function $(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.readonly = f);
    }
    function de(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.hint = f);
    }
    function fe(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.cssClass = f);
    }
    function me(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.suffix = f);
    }
    function pe(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.prefix = f);
    }
    function ge(f) {
      const v = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      v && (v.label = f);
    }
    function X() {
      const f = r();
      return N(t.field.events.onValidated), f;
    }
    function Z() {
      return n();
    }
    function ee() {
      return s();
    }
    function he(f, v, J) {
      r = f, n = v, s = J;
    }
    const ye = {
      reset: c,
      clear: y,
      validate: X,
      isValid: Z,
      hide: m,
      unhide: g,
      resetValidation: ee,
      getValueDeserialized: b,
      getValueSerialized: F,
      setupBackendErrors: k,
      setReadonlyState: $,
      setHint: de,
      setCssClass: fe,
      setSuffix: me,
      setPrefix: pe,
      setLabel: ge,
      field: t.field
    };
    return e(ye), M(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        N(t.field.events.onUpdate);
      }
    ), M(
      () => t.field.events.onIsValid ? Z() : null,
      (f) => {
        f && N(t.field.events.onIsValid);
      }
    ), I(() => {
      var v;
      c();
      const f = (v = De()) == null ? void 0 : v.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, v) => (h(), q("div", {
      class: U(t.field.hidden ? "submit64-field-hidden" : "")
    }, [
      t.field.beforeComponent ? (h(), D(L(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      (h(), D(L(t.field.mainComponent), {
        modelValue: u.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: c,
        clear: y,
        getValueDeserialized: b,
        getValueSerialized: F,
        validate: X,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), D(L(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      l.value.length > 0 ? (h(), q("div", Kt, [
        (h(!0), q(oe, null, re(l.value, (J, be) => (h(), q("div", {
          index: be,
          class: "flex column"
        }, W(J), 9, Xt))), 256))
      ])) : z("", !0)
    ], 2));
  }
}), en = /* @__PURE__ */ B({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: i,
      clear: u,
      validate: S,
      isValid: C,
      hide: l,
      unhide: c,
      resetValidation: y,
      getFields: A,
      setReadonlyState: E,
      setCssClass: F,
      setIcon: b,
      setLabel: k,
      section: t.section
    };
    function s() {
      t.section.fields.forEach((m) => {
        const g = m.metadata.field_name, $ = t.formApi.getField(g);
        $ && r.set(g, $);
      });
    }
    function i() {
      r.forEach((m) => {
        m.reset();
      }), N(t.section.events.onReset);
    }
    function u() {
      r.forEach((m) => {
        m.clear();
      }), N(t.section.events.onClear);
    }
    function l() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((g) => {
        g.hide();
      }), m.hidden = !0, N(t.section.events.onHide));
    }
    function c() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((g) => {
        g.unhide();
      }), m.hidden = !1, N(t.section.events.onUnhide));
    }
    function S() {
      let m = !0;
      return r.forEach((g) => {
        if (!g.validate()) {
          m = !1;
          return;
        }
      }), N(t.section.events.onValidated), m;
    }
    function C() {
      let m = !0;
      return r.forEach((g) => {
        if (!g.isValid()) {
          m = !1;
          return;
        }
      }), m;
    }
    function y() {
      r.forEach((m) => {
        m.resetValidation();
      });
    }
    function A() {
      return r;
    }
    function E(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.readonly = m);
    }
    function F(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.cssClass = m);
    }
    function b(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.icon = m);
    }
    function k(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.label = m);
    }
    return e(n), M(
      () => t.section.events.onIsValid ? C() : null,
      (m) => {
        m && N(t.section.events.onIsValid);
      }
    ), I(() => {
      var g;
      const m = (g = De()) == null ? void 0 : g.exposed;
      m && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        m
      ), s();
    }), (m, g) => (h(), q("div", {
      class: U(["flex column", t.section.hidden ? "submit64-section-hidden" : ""])
    }, [
      t.section.beforeComponent ? (h(), D(L(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : z("", !0),
      (h(), D(L(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), D(L(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : z("", !0)
    ], 2));
  }
}), tn = {
  key: 0,
  class: "flex column"
}, an = /* @__PURE__ */ B({
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
    let r = null, n = "";
    const s = ze(), i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), l = x(), c = x(!1), S = x(!1), C = x("create"), y = x({});
    async function A() {
      var d, p;
      console.timeEnd("mount and ready"), r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), console.time("mount and ready 2"), l.value = K.getForm(
        t.resourceName,
        t.resourceId,
        F(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), t.resourceId && (C.value = "edit"), c.value = !0, N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReady);
    }
    async function E() {
      var R, w;
      if (!k())
        return;
      S.value = !0, fe();
      const d = b(), p = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: t.context
      });
      if (p.success)
        y.value = {}, C.value === "create" && (C.value = "edit"), r && p.resource_data && (r.resource_data = p.resource_data), n = JSON.stringify(b()), g();
      else {
        y.value = {};
        const te = [];
        [...i].forEach((G) => {
          const ne = p.errors[G[0]];
          ne && (G[1].setupBackendErrors(ne), te.push(G[0]));
        }), Object.entries(p.errors).forEach((G) => {
          te.includes(G[0]) || (y.value[G[0]] = G[1]);
        });
      }
      N((w = (R = l.value) == null ? void 0 : R.events) == null ? void 0 : w.onSubmit), S.value = !1;
    }
    function F() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const p in s) {
        const R = s[p];
        if (R) {
          const w = B({
            inheritAttrs: !1,
            setup(te, { attrs: G, slots: ne }) {
              return () => R({
                ...te,
                ...G,
                slots: ne
              });
            }
          });
          switch (p) {
            case "sections":
              d.sectionComponent = w;
              break;
            case "actions":
              d.actionComponent = w;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = w;
              break;
            case "association-display":
              d.associationDisplayComponent = w;
              break;
            default:
              d.dynamicComponentRecord[p] = w;
              break;
          }
        }
      }
      return d;
    }
    function b() {
      const d = {};
      return [...i].forEach((p) => {
        d[p[0]] = p[1].getValueDeserialized();
      }), d;
    }
    function k() {
      var p, R;
      let d = !0;
      return i.forEach((w) => {
        if (!w.validate()) {
          d = !1;
          return;
        }
      }), N((R = (p = l.value) == null ? void 0 : p.events) == null ? void 0 : R.onValidated), d;
    }
    function m() {
      let d = !0;
      return i.forEach((p) => {
        if (!p.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function g() {
      var d, p;
      i.forEach((R) => {
        R.reset();
      }), N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReset);
    }
    function $() {
      var d, p;
      i.forEach((R) => {
        R.clear();
      }), N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onClear);
    }
    function de() {
      i.forEach((d) => {
        d.resetValidation();
      });
    }
    function fe() {
      i.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function me(d) {
      if (r)
        return r.resource_data[d];
    }
    function pe(d) {
      return u.get(d);
    }
    function ge(d) {
      return i.get(d);
    }
    function X() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Z() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((p) => {
        (t[p] === null || t[p] === void 0) && console.warn(`Missing props for <Submit64> -> ${p}`);
      });
    }
    function ee() {
      return a(C);
    }
    function he() {
      return n !== JSON.stringify(b());
    }
    function ye(d) {
      l.value && (l.value.context = d);
    }
    function f(d) {
      l.value && (l.value.cssClass = d);
    }
    function v(d) {
      l.value && (l.value.readonly = d);
    }
    function J() {
      return l;
    }
    function be(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.find((R) => R.name === d);
    }
    function Ee(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.map((R) => R.fields).flat().find((R) => R.metadata.field_name === d);
    }
    function Se(d, p) {
      u.set(d, p);
    }
    function Fe(d, p) {
      i.set(d, p);
    }
    const ke = {
      getFormRef: J,
      getSectionRef: be,
      getFieldRef: Ee,
      registerSectionWrapperRef: Se,
      registerFieldWrapperRef: Fe
    }, Q = {
      getMode: ee,
      getSection: pe,
      getField: ge,
      validateForm: k,
      isFormValid: m,
      resetForm: g,
      clearForm: $,
      resetValidation: de,
      submitForm: E,
      valuesHasChanged: he,
      getInitialValueByFieldName: me,
      getAssociationDataCallback: X,
      setContext: ye,
      setCssClass: f,
      setReadonlyState: v,
      form: l.value
    };
    return e(Q), M(
      () => {
        var d;
        return (d = l.value) != null && d.events.onIsValid ? m() : null;
      },
      () => {
        var d, p;
        N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onIsValid);
      }
    ), M(
      () => {
        var d;
        return (d = l.value) != null && d.events.onUpdate ? b() : null;
      },
      () => {
        var d, p;
        N((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onUpdate);
      }
    ), I(async () => {
      console.time("mount and ready"), Z(), await A(), console.time("mount and ready 2"), ue(() => {
        n = JSON.stringify(b());
      });
    }), (d, p) => c.value && l.value ? (h(), q("div", tn, [
      j("div", {
        class: U(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(oe, null, re(l.value.sections, (R) => (h(), D(en, {
          key: R.name,
          section: R,
          context: t.context,
          formApi: Q,
          privateFormApi: ke,
          registerRef: Se
        }, {
          default: O(() => [
            (h(!0), q(oe, null, re(R.fields, (w) => (h(), D(Zt, {
              key: w.metadata.field_name,
              field: w,
              context: t.context,
              formApi: Q,
              privateFormApi: ke,
              registerRef: Fe
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), D(L(l.value.orphanErrorsComponent), {
        orphanErrors: y.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (h(), D(L(l.value.actionComponent), {
        isLoadingSubmit: S.value,
        submit: E,
        clear: l.value.clearable ? $ : void 0,
        reset: l.value.resetable ? g : void 0,
        formApi: Q
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : z("", !0);
  }
});
export {
  ie as DynamicLogicBuilder,
  H as Submit64,
  an as Submit64Form
};
