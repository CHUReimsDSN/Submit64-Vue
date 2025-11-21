var qe = Object.defineProperty;
var we = (o, e, t) => e in o ? qe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var _ = (o, e, t) => we(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as O, createElementBlock as q, openBlock as h, createElementVNode as j, createVNode as T, createBlock as R, createCommentVNode as z, unref as a, mergeProps as ve, toDisplayString as W, renderSlot as De, resolveComponent as $e, normalizeProps as ze, guardReactiveProps as Ie, withCtx as B, createTextVNode as Ue, Fragment as re, renderList as ae, ref as D, onMounted as I, normalizeClass as U, watch as M, resolveDynamicComponent as L, nextTick as X, markRaw as P, getCurrentInstance as Re, useSlots as Pe } from "vue";
import { QBtn as Y, QIcon as ie, QItem as Le, QItemSection as Ge, QItemLabel as He, QInput as ce, QPopupProxy as Ce, QDate as Ae, QTime as je, QCheckbox as We, QSelect as _e, date as x } from "quasar";
const Qe = { class: "flex column" }, Ye = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Me = /* @__PURE__ */ O({
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
    return (r, n) => (h(), q("div", Qe, [
      j("div", Ye, [
        T(a(Y), ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), R(a(Y), ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : z("", !0),
        e.clear ? (h(), R(a(Y), ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : z("", !0)
      ])
    ]));
  }
}), Je = { class: "flex row items-center" }, Ke = { class: "text-body1 text-weight-medium" }, Xe = { class: "flex column q-gutter-md" }, Ze = /* @__PURE__ */ O({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      j("div", Je, [
        e.sectionApi.section.icon ? (h(), R(a(ie), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : z("", !0),
        j("div", Ke, W(e.sectionApi.section.label), 1)
      ]),
      j("div", Xe, [
        De(t.$slots, "default")
      ])
    ]));
  }
}), et = /* @__PURE__ */ O({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = $e("q-icon");
      return h(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), tt = /* @__PURE__ */ O({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), R(a(Le), ze(Ie(e.itemProps)), {
      default: B(() => [
        T(a(Ge), null, {
          default: B(() => [
            T(a(He), null, {
              default: B(() => [
                Ue(W(e.entry.label), 1)
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
}), nt = { class: "flex column" }, ot = /* @__PURE__ */ O({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", nt, [
      (h(!0), q(re, null, ae(e.orphanErrors, (n, s) => (h(), q("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, W(s) + " : " + W(n.join(",")), 1))), 128))
    ]));
  }
}), ue = class ue {
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
    }, this._actionComponent = Me, this._orphanErrorsComponent = ot, this._sectionComponent = Ze, this._wrapperResetComponent = et, this._associationDisplayComponent = tt;
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
_(ue, "_instance", new ue());
let H = ue;
class le {
  constructor(e) {
    _(this, "formApi");
    _(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new at(r, n, this.formApi);
    return this.events.push(s), new rt(s);
  }
  static create(e) {
    return new le(e);
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
class rt {
  constructor(e) {
    _(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class at {
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
const it = { class: "row items-center justify-end" }, lt = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D(), u = D();
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
    }), (y, A) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[1] || (A[1] = (N) => e.modelValueOnUpdate(N)),
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
      append: B(() => [
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Ae), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: B(() => [
                    j("div", it, [
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
}), st = { class: "row items-center justify-end" }, ut = { class: "row items-center justify-end" }, ct = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D(), u = D(), l = D();
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
    }), (N, k) => (h(), R(a(ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[2] || (k[2] = (b) => e.modelValueOnUpdate(b)),
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
      append: B(() => [
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Ae), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: B(() => [
                    j("div", st, [
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
        T(a(ie), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[1] || (k[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: B(() => [
                    j("div", ut, [
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
}), dt = { class: "flex column" }, ft = {
  key: 0,
  class: "q-field__bottom"
}, mt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, pt = /* @__PURE__ */ O({
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
    const e = o, t = D(!0), n = e.formApi.form.formStyle;
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
    }), (l, c) => (h(), q("div", dt, [
      T(a(We), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (S) => e.modelValueOnUpdate(S)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: U([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", ft, W(e.field.hint), 1)) : z("", !0),
      t.value !== !0 ? (h(), q("div", mt, W(t.value), 1)) : z("", !0)
    ]));
  }
}), gt = /* @__PURE__ */ O({
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
}), ht = /* @__PURE__ */ O({
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
    const e = o, t = D([]), r = D([]), n = D(), s = e.formApi.form, i = s.formSettings, u = s.formStyle, l = i.rulesBehaviour === "lazy";
    function c(k, b) {
      if (k === "") {
        b(() => {
          r.value = [...t.value];
        });
        return;
      }
      b(() => {
        const V = k.toLowerCase();
        r.value = t.value.filter((m) => m.label.toLowerCase().includes(V));
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
    function N() {
      e.clear(), r.value = [];
    }
    return I(() => {
      S(), e.registerBehaviourCallbacks(C, y, A);
    }), (k, b) => (h(), R(a(_e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (V) => e.modelValueOnUpdate(V)),
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
      onClear: N,
      onFilter: c
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function se() {
  return 20;
}
function E(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const yt = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = D([]), l = D({
      limit: se(),
      offset: 0
    }), c = D();
    function S(b, V) {
      const m = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: se(),
        offset: 0
      }), V(() => {
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
      X(() => {
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
    function N() {
      c.value && c.value.resetValidation();
    }
    function k() {
      e.clear(), u.value = [];
    }
    return I(() => {
      C(), e.registerBehaviourCallbacks(y, A, N);
    }), (b, V) => (h(), R(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (m) => e.modelValueOnUpdate(m)),
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
      onClear: k,
      onFilter: S
    }, {
      option: B((m) => [
        (h(), R(L(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), bt = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, i = n.rulesBehaviour === "lazy", u = D([]), l = D({
      limit: se(),
      offset: 0
    }), c = D();
    function S(b, V) {
      const m = e.formApi.getAssociationDataCallback();
      b === "" && (l.value = {
        limit: se(),
        offset: 0
      }), V(() => {
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
      X(() => {
        const b = e.getValueSerialized();
        !b || !e.field.associationData || (u.value = b.map(
          (V, m) => ({
            label: e.field.associationData.label[m] ?? "???",
            value: V,
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
    function N() {
      c.value && c.value.resetValidation();
    }
    function k() {
      e.clear(), u.value = [];
    }
    return I(() => {
      C(), e.registerBehaviourCallbacks(y, A, N);
    }), (b, V) => (h(), R(a(_e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (m) => e.modelValueOnUpdate(m)),
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
      onClear: k,
      onFilter: S
    }, {
      option: B((m) => [
        (h(), R(L(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ve = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D();
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
    }), (S, C) => (h(), R(a(ce), {
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
}), vt = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", i = D();
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
    }), (S, C) => (h(), R(a(ce), {
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
    const e = le.create(this.formApi);
    this.registerEventCallback(e);
    const t = le.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, i) => {
        const u = [];
        s.fields.forEach((y) => {
          const A = this.dynamicComponentRecord[`field-${y.field_name}-before`], N = K.getFieldComponentByFormFieldType(
            y.field_type
          ), k = this.dynamicComponentRecord[`field-${y.field_name}-after`], b = {
            associationDisplayComponent: P(this.associationDisplayComponent),
            regularFieldType: K.getRegularFieldTypeByFieldType(
              y.field_type
            )
          }, V = {
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
            mainComponent: P(N),
            afterComponent: k ? P(k) : void 0,
            events: t.fields[y.field_name] ?? {},
            componentOptions: b
          };
          u.push(V);
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
      number: vt,
      date: lt,
      datetime: ct,
      selectString: ht,
      selectBelongsTo: yt,
      selectHasMany: bt,
      checkbox: pt,
      object: gt
    }[e];
  }
}
function Ct(o, e, t) {
  const r = t.form, n = (l, c, S) => l[c] ? S ? () => s(l[c]) : () => l[c] : l.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(l.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (l) => String(
    x.formatDate(
      x.extractDate(l, r.formSettings.backendDateFormat),
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
        i.push(_t());
        break;
      case "absence":
        i.push(Ft());
        break;
      case "acceptance":
        i.push(kt());
        break;
      case "inclusion":
        i.push(Ne(c.including));
        break;
      case "exclusion":
        i.push(St(c.excluding));
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
        i.push(Dt());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Rt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          At(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          Nt(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          Bt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          Et(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          Ot(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Tt());
        break;
      case "numberNumericOnly":
        i.push(qt());
        break;
      case "numberEvenOnly":
        i.push(wt());
        break;
      case "numberOddOnly":
        i.push($t());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          zt(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          It(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          Ut(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Pt(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Ht(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Gt(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          Lt(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          jt(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Wt(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          Qt(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          Yt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          Mt(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Jt(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Kt(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((l) => {
    switch (l) {
      case "allowBlank":
        return xt(i);
      case "allowNull":
        return Vt(i);
    }
  }) : i;
}
function _t() {
  return (o) => !!o || "Ce champ est requis";
}
function Ne(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function St(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ne.toString()}`
  );
}
function Ft() {
  return (o) => !o || "Ce champ doit être vide";
}
function kt() {
  return (o) => !!o || "Doit être accepté";
}
function Vt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function xt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Dt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Rt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function At(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Nt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Bt(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Et(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Ot(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Tt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function qt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function wt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function $t() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function zt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Ut(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Pt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Lt(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Gt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Ht(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Wt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function Qt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function Yt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function Mt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function Jt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), s = x.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o();
    return x.extractDate(String(t), e) !== x.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function xe(o) {
  return (e) => e == null || e === "" ? !0 : Xt(e, o) || `Date invalide. Format : ${o}`;
}
function Xt(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = x.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : x.formatDate(t, e) === o;
}
const Zt = {
  computeServerRules: Ct
}, en = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, tn = ["index"], nn = /* @__PURE__ */ O({
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
    const i = A(), u = D(), l = D([]);
    function c() {
      u.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), u.value = S(u.value), E(t.field.events.onReset), X(() => {
        te();
      });
    }
    function S(f) {
      const v = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), v.formSettings.backendDateFormat),
            v.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(
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
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), v.formSettings.dateFormat),
            v.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), v.formSettings.datetimeFormat),
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
      E(t.field.events.onClear);
    }
    function A() {
      return Zt.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function N(f) {
      u.value = f;
    }
    function k() {
      return a(u);
    }
    function b() {
      return C(a(u));
    }
    function V(f) {
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
    function Z() {
      const f = r();
      return E(t.field.events.onValidated), f;
    }
    function ee() {
      return n();
    }
    function te() {
      return s();
    }
    function he(f, v, J) {
      r = f, n = v, s = J;
    }
    const ye = {
      reset: c,
      clear: y,
      validate: Z,
      isValid: ee,
      hide: m,
      unhide: g,
      resetValidation: te,
      getValueDeserialized: b,
      getValueSerialized: k,
      setupBackendErrors: V,
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
        E(t.field.events.onUpdate);
      }
    ), M(
      () => t.field.events.onIsValid ? ee() : null,
      (f) => {
        f && E(t.field.events.onIsValid);
      }
    ), I(() => {
      var v;
      c();
      const f = (v = Re()) == null ? void 0 : v.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, v) => (h(), q("div", {
      class: U(t.field.hidden ? "submit64-field-hidden" : "")
    }, [
      t.field.beforeComponent ? (h(), R(L(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      (h(), R(L(t.field.mainComponent), {
        modelValue: u.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: c,
        clear: y,
        getValueDeserialized: b,
        getValueSerialized: k,
        validate: Z,
        modelValueOnUpdate: N,
        registerBehaviourCallbacks: he
      }, {
        default: B(() => [
          De(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), R(L(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : z("", !0),
      l.value.length > 0 ? (h(), q("div", en, [
        (h(!0), q(re, null, ae(l.value, (J, be) => (h(), q("div", {
          index: be,
          class: "flex column"
        }, W(J), 9, tn))), 256))
      ])) : z("", !0)
    ], 2));
  }
}), on = /* @__PURE__ */ O({
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
      setReadonlyState: N,
      setCssClass: k,
      setIcon: b,
      setLabel: V,
      section: t.section
    };
    function s() {
      t.section.fields.forEach((m) => {
        const g = m.metadata.field_name, $ = t.formApi.getFieldByName(g);
        $ && r.set(g, $);
      });
    }
    function i() {
      r.forEach((m) => {
        m.reset();
      }), E(t.section.events.onReset);
    }
    function u() {
      r.forEach((m) => {
        m.clear();
      }), E(t.section.events.onClear);
    }
    function l() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((g) => {
        g.hide();
      }), m.hidden = !0, E(t.section.events.onHide));
    }
    function c() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((g) => {
        g.unhide();
      }), m.hidden = !1, E(t.section.events.onUnhide));
    }
    function S() {
      let m = !0;
      return r.forEach((g) => {
        if (!g.validate()) {
          m = !1;
          return;
        }
      }), E(t.section.events.onValidated), m;
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
    function N(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.readonly = m);
    }
    function k(m) {
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
    function V(m) {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (g.label = m);
    }
    return e(n), M(
      () => t.section.events.onIsValid ? C() : null,
      (m) => {
        m && E(t.section.events.onIsValid);
      }
    ), I(() => {
      var g;
      const m = (g = Re()) == null ? void 0 : g.exposed;
      m && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        m
      ), s();
    }), (m, g) => (h(), q("div", {
      class: U(["flex column", t.section.hidden ? "submit64-section-hidden" : ""])
    }, [
      t.section.beforeComponent ? (h(), R(L(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : z("", !0),
      (h(), R(L(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), R(L(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : z("", !0)
    ], 2));
  }
}), rn = {
  key: 0,
  class: "flex column"
}, un = /* @__PURE__ */ O({
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
    const s = Pe(), i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), l = D(), c = D(!1), S = D(!1), C = D("create"), y = D({});
    async function A() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), l.value = K.getForm(
        t.resourceName,
        t.resourceId,
        k(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), t.resourceId && (C.value = "edit"), c.value = !0, X(() => {
        var d, p;
        E((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReady);
      });
    }
    async function N() {
      var F, w;
      if (!V())
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
        const ne = [];
        [...i].forEach((G) => {
          const oe = p.errors[G[0]];
          oe && (G[1].setupBackendErrors(oe), ne.push(G[0]));
        }), Object.entries(p.errors).forEach((G) => {
          ne.includes(G[0]) || (y.value[G[0]] = G[1]);
        });
      }
      E((w = (F = l.value) == null ? void 0 : F.events) == null ? void 0 : w.onSubmit), S.value = !1;
    }
    function k() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const p in s) {
        const F = s[p];
        if (F) {
          const w = O({
            inheritAttrs: !1,
            setup(ne, { attrs: G, slots: oe }) {
              return () => F({
                ...ne,
                ...G,
                slots: oe
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
    function V() {
      var p, F;
      let d = !0;
      return i.forEach((w) => {
        if (!w.validate()) {
          d = !1;
          return;
        }
      }), E((F = (p = l.value) == null ? void 0 : p.events) == null ? void 0 : F.onValidated), d;
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
      i.forEach((F) => {
        F.reset();
      }), E((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onReset);
    }
    function $() {
      var d, p;
      i.forEach((F) => {
        F.clear();
      }), E((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onClear);
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
    function ge() {
      return u;
    }
    function Z(d) {
      return i.get(d);
    }
    function ee() {
      return i;
    }
    function te() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function he() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((p) => {
        (t[p] === null || t[p] === void 0) && console.warn(`Missing props for <Submit64> -> ${p}`);
      });
    }
    function ye() {
      return a(C);
    }
    function f() {
      return n !== JSON.stringify(b());
    }
    function v(d) {
      l.value && (l.value.context = d);
    }
    function J(d) {
      l.value && (l.value.cssClass = d);
    }
    function be(d) {
      l.value && (l.value.readonly = d);
    }
    function Be() {
      return l;
    }
    function Ee(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.find((F) => F.name === d);
    }
    function Oe(d) {
      var p;
      return (p = l.value) == null ? void 0 : p.sections.map((F) => F.fields).flat().find((F) => F.metadata.field_name === d);
    }
    function Se(d, p) {
      u.set(d, p);
    }
    function Fe(d, p) {
      i.set(d, p);
    }
    const ke = {
      getFormRef: Be,
      getSectionRef: Ee,
      getFieldRef: Oe,
      registerSectionWrapperRef: Se,
      registerFieldWrapperRef: Fe
    }, Te = new Proxy({}, {
      get(d, p) {
        var F;
        return (F = l.value) == null ? void 0 : F[p];
      }
    }), Q = {
      getMode: ye,
      getSectionByName: pe,
      getSections: ge,
      getFieldByName: Z,
      getFields: ee,
      validateForm: V,
      isFormValid: m,
      resetForm: g,
      clearForm: $,
      resetValidation: de,
      submitForm: N,
      valuesHasChanged: f,
      getInitialValueByFieldName: me,
      getAssociationDataCallback: te,
      setContext: v,
      setCssClass: J,
      setReadonlyState: be,
      form: Te
    };
    return e(Q), M(
      () => {
        var d;
        return (d = l.value) != null && d.events.onIsValid ? m() : null;
      },
      () => {
        var d, p;
        E((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onIsValid);
      }
    ), M(
      () => {
        var d;
        return (d = l.value) != null && d.events.onUpdate ? b() : null;
      },
      () => {
        var d, p;
        E((p = (d = l.value) == null ? void 0 : d.events) == null ? void 0 : p.onUpdate);
      }
    ), I(async () => {
      he(), await A(), X(() => {
        n = JSON.stringify(b());
      });
    }), (d, p) => c.value && l.value ? (h(), q("div", rn, [
      j("div", {
        class: U(l.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(re, null, ae(l.value.sections, (F) => (h(), R(on, {
          key: F.name,
          section: F,
          context: t.context,
          formApi: Q,
          privateFormApi: ke,
          registerRef: Se
        }, {
          default: B(() => [
            (h(!0), q(re, null, ae(F.fields, (w) => (h(), R(nn, {
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
      (h(), R(L(l.value.orphanErrorsComponent), {
        orphanErrors: y.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (h(), R(L(l.value.actionComponent), {
        isLoadingSubmit: S.value,
        submit: N,
        clear: l.value.clearable ? $ : void 0,
        reset: l.value.resetable ? g : void 0,
        formApi: Q
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ])) : z("", !0);
  }
});
export {
  le as DynamicLogicBuilder,
  H as Submit64,
  un as Submit64Form
};
