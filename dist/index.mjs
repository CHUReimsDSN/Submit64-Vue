var yt = Object.defineProperty;
var _t = (o, e, t) => e in o ? yt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var w = (o, e, t) => _t(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as P, createElementBlock as $, openBlock as g, createElementVNode as M, createVNode as _, createBlock as B, createCommentVNode as H, unref as a, mergeProps as qe, toDisplayString as U, renderSlot as je, resolveComponent as oe, normalizeProps as bt, guardReactiveProps as Ct, withCtx as m, createTextVNode as Z, Fragment as fe, renderList as me, ref as E, onMounted as Y, nextTick as he, normalizeClass as X, watch as Q, resolveDynamicComponent as ne, computed as ve, markRaw as K, getCurrentInstance as Ye, withDirectives as we, vShow as Oe, useSlots as St } from "vue";
import { QBtn as re, QIcon as Fe, QItem as _e, QItemSection as ue, QItemLabel as de, QInput as ke, QPopupProxy as Ae, QDate as We, QTime as Ft, QCheckbox as kt, QSelect as ze, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as Je, QList as Pe, QSeparator as At, QUploaderAddTrigger as Rt, date as I } from "quasar";
const Nt = { class: "flex column" }, Bt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, qt = /* @__PURE__ */ P({
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
    return (r, n) => (g(), $("div", Nt, [
      M("div", Bt, [
        _(a(re), qe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (g(), B(a(re), qe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (g(), B(a(re), qe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : H("", !0)
      ])
    ]));
  }
}), Et = { class: "flex row items-center" }, wt = { class: "text-body1 text-weight-medium" }, Ot = { class: "flex column q-gutter-md" }, zt = /* @__PURE__ */ P({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), $("div", null, [
      M("div", Et, [
        e.sectionApi.section.icon ? (g(), B(a(Fe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        M("div", wt, U(e.sectionApi.section.label), 1)
      ]),
      M("div", Ot, [
        je(t.$slots, "default")
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ P({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = oe("q-icon");
      return g(), B(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (c) => e.reset())
      });
    };
  }
}), It = /* @__PURE__ */ P({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), B(a(_e), bt(Ct(e.itemProps)), {
      default: m(() => [
        _(a(ue), null, {
          default: m(() => [
            _(a(de), null, {
              default: m(() => [
                Z(U(e.entry.label), 1)
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
}), $t = { class: "flex column" }, Ut = /* @__PURE__ */ P({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (g(), $("div", $t, [
      (g(!0), $(fe, null, me(e.orphanErrors, (n, c) => (g(), $("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, U(c) + " : " + U(n.join(",")), 1))), 128))
    ]));
  }
}), Ne = class Ne {
  constructor() {
    w(this, "_formSettings");
    w(this, "_formStyle");
    w(this, "_actionComponent");
    w(this, "_orphanErrorsComponent");
    w(this, "_sectionComponent");
    w(this, "_wrapperResetComponent");
    w(this, "_associationDisplayComponent");
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
w(Ne, "_instance", new Ne());
let J = Ne;
class Re {
  constructor(e) {
    w(this, "formApi");
    w(this, "events", []);
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
    w(this, "type");
    w(this, "data");
    w(this, "formApi");
    w(this, "action", () => {
    });
    w(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    w(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = E(), d = E();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return d.value ? d.value.validate() : !1;
    }
    function x() {
      return d.value ? !d.value.hasError : !1;
    }
    function F() {
      d.value && d.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(i, x, F), c || he(() => {
        var N;
        (N = d.value) == null || N.resetValidation();
      });
    }), (N, u) => (g(), B(a(ke), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[1] || (u[1] = (C) => e.modelValueOnUpdate(C)),
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: m(() => [
        _(a(Fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ae), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(We), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": u[0] || (u[0] = (C) => e.modelValueOnUpdate(C)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: m(() => [
                    M("div", Ht, [
                      _(a(re), {
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
}), Mt = { class: "row items-center justify-end" }, Qt = { class: "row items-center justify-end" }, jt = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = E(), d = E(), s = E();
    function i() {
      l.value && l.value.hide();
    }
    function x() {
      d.value && d.value.hide();
    }
    function F() {
      return s.value ? s.value.validate() : !1;
    }
    function N() {
      return s.value ? !s.value.hasError : !1;
    }
    function u() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(F, N, u), c || he(() => {
        var C;
        (C = s.value) == null || C.resetValidation();
      });
    }), (C, h) => (g(), B(a(ke), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[2] || (h[2] = (b) => e.modelValueOnUpdate(b)),
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: m(() => [
        _(a(Fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ae), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(We), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": h[0] || (h[0] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: m(() => [
                    M("div", Mt, [
                      _(a(re), {
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
        _(a(Fe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ae), {
              ref_key: "timePopupProxyRef",
              ref: d,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": h[1] || (h[1] = (b) => e.modelValueOnUpdate(b)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: m(() => [
                    M("div", Qt, [
                      _(a(re), {
                        onClick: x,
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
}, Kt = /* @__PURE__ */ P({
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
    const e = o, t = E(!0), n = e.formApi.form.formStyle;
    function c() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function d() {
      t.value = !0;
    }
    return Q(
      () => e.modelValue,
      (s) => {
        for (const i of e.rules)
          if (t.value = i(s), t.value !== !0)
            break;
      }
    ), Y(() => {
      e.registerBehaviourCallbacks(c, l, d);
    }), (s, i) => (g(), $("div", Yt, [
      _(a(kt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (x) => e.modelValueOnUpdate(x)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (g(), $("div", Wt, U(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (g(), $("div", Jt, U(t.value), 1)) : H("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ P({
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
    const e = o, t = E([]), r = E([]), n = E(), c = e.formApi.form, l = c.formSettings, d = c.formStyle, s = l.rulesBehaviour === "lazy";
    function i(h, b) {
      if (h === "") {
        b(() => {
          r.value = [...t.value];
        });
        return;
      }
      b(() => {
        const A = h.toLowerCase();
        r.value = t.value.filter((z) => z.label.toLowerCase().includes(A));
      });
    }
    function x() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function F() {
      return n.value ? n.value.validate() : !1;
    }
    function N() {
      return n.value ? !n.value.hasError : !1;
    }
    function u() {
      n.value && n.value.resetValidation();
    }
    function C() {
      r.value = [];
    }
    return Y(() => {
      x(), e.registerBehaviourCallbacks(F, N, u, void 0, C);
    }), (h, b) => (g(), B(a(ze), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": b[0] || (b[0] = (A) => e.modelValueOnUpdate(A)),
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
      onFilter: i
    }, {
      "no-option": m(() => [
        _(a(_e), {
          dense: a(d).fieldDense
        }, {
          default: m(() => [
            _(a(ue), null, {
              default: m(() => [
                _(a(de), null, {
                  default: m(() => [
                    Z(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Le = "__init", He = /* @__PURE__ */ P({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = E([]), s = E(
      F()
    ), i = E(), x = E(Le);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function N(k, R) {
      if (k === x.value) {
        R(() => {
        });
        return;
      }
      const S = e.formApi.getAssociationDataCallback();
      s.value = F(), x.value = k;
      const L = e.formApi.form;
      s.value.isLoading = !0, S({
        resourceName: L.resourceName,
        resourceId: L.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: k,
        context: L.context
      }).then((T) => {
        R(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = F();
      });
    }
    function u() {
      var R, S;
      const k = e.getValueSerialized();
      !k || !e.field.associationData || (d.value = [
        {
          label: ((R = e.field.associationData[0]) == null ? void 0 : R.label) ?? "???",
          value: k,
          data: (S = e.field.associationData[0]) == null ? void 0 : S.data
        }
      ]);
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function h() {
      return i.value ? !i.value.hasError : !1;
    }
    function b() {
      i.value && i.value.resetValidation();
    }
    function A() {
      s.value = F(), d.value = [], x.value = Le;
    }
    function z(k) {
      const R = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && k.to === R && R !== -1) {
        const S = e.formApi.form, L = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, L({
          resourceName: S.resourceName,
          resourceId: S.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: S.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, k.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        C,
        h,
        b,
        u,
        A
      ), he(() => {
        u();
      });
    }), (k, R) => (g(), B(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (S) => e.modelValueOnUpdate(S)),
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
      class: X(e.field.cssClass),
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
      onFilter: N,
      onVirtualScroll: z
    }, {
      "no-option": m(() => [
        _(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            _(a(ue), null, {
              default: m(() => [
                _(a(de), null, {
                  default: m(() => [
                    Z(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: m((S) => [
        (g(), B(ne(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: S.opt,
          itemProps: S.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ge = "__init", Me = /* @__PURE__ */ P({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = E([]), s = E(
      F()
    ), i = E(), x = E(Ge);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function N(k, R) {
      if (k === x.value) {
        R(() => {
        });
        return;
      }
      const S = e.formApi.getAssociationDataCallback();
      s.value = F(), x.value = k;
      const L = e.formApi.form;
      s.value.isLoading = !0, S({
        resourceName: L.resourceName,
        resourceId: L.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: k,
        context: L.context
      }).then((T) => {
        R(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = F();
      });
    }
    function u() {
      const k = e.getValueSerialized();
      !k || !e.field.associationData || (d.value = k.map((R, S) => ({
        label: e.field.associationData[S].label ?? "???",
        value: R,
        data: e.field.associationData[S].data
      })));
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function h() {
      return i.value ? !i.value.hasError : !1;
    }
    function b() {
      i.value && i.value.resetValidation();
    }
    function A() {
      s.value = F(), d.value = [], x.value = Ge;
    }
    function z(k) {
      const R = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && k.to === R && R !== -1) {
        const S = e.formApi.form, L = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, L({
          resourceName: S.resourceName,
          resourceId: S.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: S.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, k.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        C,
        h,
        b,
        u,
        A
      ), he(() => {
        u();
      });
    }), (k, R) => (g(), B(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (S) => e.modelValueOnUpdate(S)),
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
      class: X(e.field.cssClass),
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
      onFilter: N,
      onVirtualScroll: z
    }, {
      "no-option": m(() => [
        _(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            _(a(ue), null, {
              default: m(() => [
                _(a(de), null, {
                  default: m(() => [
                    Z(U(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: m((S) => [
        (g(), B(ne(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: S.opt,
          itemProps: S.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ee = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = E();
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
    }), (x, F) => (g(), B(a(ke), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (N) => e.modelValueOnUpdate(N)),
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
}), Zt = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = E();
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
    }), (x, F) => (g(), B(a(ke), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (N) => e.modelValueOnUpdate(N)),
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
      "lazy-rules": c,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), en = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = E();
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
    }), (x, F) => (g(), B(a(ke), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[1] || (F[1] = (N) => e.modelValueOnUpdate(N)),
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
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: m(() => [
        _(a(Fe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ae), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (N) => e.modelValueOnUpdate(N))
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
}), tn = /* @__PURE__ */ P({
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
    }, d = E();
    function s() {
      return !!d.value;
    }
    function i() {
      return !!d.value;
    }
    function x() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, i, x);
    }), (F, N) => e.modelValue ? (g(), B(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (u) => e.modelValueOnUpdate(u)),
      toolbar: c,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: X(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : H("", !0);
  }
}), nn = /* @__PURE__ */ P({
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
}, dn = /* @__PURE__ */ P({
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
    const e = o, r = e.formApi.form.formStyle, n = E();
    function c() {
      let C = e.modelValue;
      C.add = [], C.delete = [], e.modelValueOnUpdate(C);
    }
    function l() {
      var h;
      let C = e.modelValue;
      C.add = [], C.delete = ((h = e.field.attachmentData) == null ? void 0 : h.map((b) => b.id)) ?? [], e.modelValueOnUpdate(C);
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
    function x(C) {
      const h = C[0];
      if (!h)
        return;
      let b = e.modelValue;
      b.add.push(h), e.modelValueOnUpdate(b);
    }
    function F(C) {
      const h = C[0];
      if (!h)
        return;
      let b = e.modelValue;
      b.add = b.add.filter((A) => A.key !== h.key), e.modelValueOnUpdate(b);
    }
    function N(C) {
      let h = e.modelValue;
      h.delete.push(C.id), e.modelValueOnUpdate(h);
    }
    const u = ve(() => (e.field.attachmentData ?? []).length === 0);
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (C, h) => (g(), B(a(Je), {
      ref_key: "fieldRef",
      ref: n,
      "hide-upload-btn": "",
      multiple: !1,
      label: e.field.label,
      bordered: a(r).fieldBorderless !== !0,
      square: a(r).fieldSquare,
      color: a(r).fieldColor,
      class: X(e.field.cssClass),
      readonly: e.field.readonly,
      onAdded: x,
      onRemoved: F,
      style: { width: "inherit" }
    }, {
      header: m((b) => [
        M("div", an, [
          M("div", on, [
            M("div", rn, U(e.field.label), 1),
            e.field.hint ? (g(), $("div", ln, U(e.field.hint), 1)) : H("", !0)
          ]),
          b.canAddFiles ? (g(), B(a(re), {
            key: 0,
            type: "a",
            icon: "add_box",
            onClick: b.pickFiles,
            round: "",
            dense: "",
            flat: ""
          }, {
            default: m(() => [
              _(a(Rt))
            ]),
            _: 1
          }, 8, ["onClick"])) : H("", !0)
        ])
      ]),
      list: m((b) => [
        u.value ? H("", !0) : (g(), $("div", sn, [
          h[0] || (h[0] = M("div", null, "Fichiers actuels", -1)),
          _(a(Pe), { separator: "" }, {
            default: m(() => [
              (g(!0), $(fe, null, me(e.field.attachmentData ?? [], (A) => (g(), B(a(_e), {
                key: A.id
              }, {
                default: m(() => [
                  _(a(ue), null, {
                    default: m(() => [
                      _(a(de), { class: "full-width ellipsis" }, {
                        default: m(() => [
                          Z(U(A.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(a(de), { caption: "" }, {
                        default: m(() => [
                          Z(U(a(Ke)(A.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(a(ue), {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(a(re), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (z) => N(A)
                      }, null, 8, ["disable", "onClick"])
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
        !u.value && b.files.length > 0 ? (g(), B(a(At), { key: 1 })) : H("", !0),
        b.files.length > 0 ? (g(), $("div", un, [
          h[1] || (h[1] = M("div", null, "Fichiers à télécharger", -1)),
          _(a(Pe), { separator: "" }, {
            default: m(() => [
              (g(!0), $(fe, null, me(b.files, (A) => (g(), B(a(_e), {
                key: A.__key
              }, {
                default: m(() => [
                  _(a(ue), null, {
                    default: m(() => [
                      _(a(de), { class: "full-width ellipsis" }, {
                        default: m(() => [
                          Z(U(A.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(a(de), { caption: "" }, {
                        default: m(() => [
                          Z(U(A.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(a(ue), {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(a(re), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (z) => b.removeFile(A)
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
}), cn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, fn = { class: "col" }, mn = { class: "q-uploader__title" }, pn = { class: "q-uploader__subtitle" }, gn = /* @__PURE__ */ P({
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
    const e = o, r = e.formApi.form.formStyle, n = E();
    function c() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u);
    }
    function l() {
      var C;
      let u = e.modelValue;
      u.add = [], u.delete = ((C = e.field.attachmentData) == null ? void 0 : C.map((h) => h.id)) ?? [], e.modelValueOnUpdate(u);
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
    function x(u) {
      const C = u;
      if (!C)
        return;
      let h = e.modelValue;
      C.forEach((b) => {
        h.add.push(b);
      }), e.modelValueOnUpdate(h);
    }
    function F(u) {
      const C = u;
      let h = e.modelValue;
      h.add = h.add.filter((b) => !C.map((A) => A.key).includes(b.key)), e.modelValueOnUpdate(h);
    }
    function N(u) {
      let C = e.modelValue;
      C.delete.push(u.id), e.modelValueOnUpdate(C);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (u, C) => {
      const h = oe("q-spinner"), b = oe("q-uploader-add-trigger"), A = oe("q-btn"), z = oe("q-item-label"), k = oe("q-item-section"), R = oe("q-item"), S = oe("q-separator"), L = oe("q-list");
      return g(), B(a(Je), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: x,
        onRemoved: F
      }, {
        header: m((T) => [
          M("div", cn, [
            T.isUploading ? (g(), B(h, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            M("div", fn, [
              M("div", mn, U(e.field.label), 1),
              M("div", pn, "Total : " + U(T.uploadSizeLabel), 1)
            ]),
            T.canAddFiles ? (g(), B(A, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: T.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: m(() => [
                _(b)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: m((T) => [
          _(L, { separator: "" }, {
            default: m(() => [
              (g(!0), $(fe, null, me(e.field.attachmentData ?? [], (j) => (g(), B(R, {
                key: j.id
              }, {
                default: m(() => [
                  _(k, null, {
                    default: m(() => [
                      _(z, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          Z(U(j.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(z, { caption: "" }, {
                        default: m(() => [
                          Z(U(a(Ke)(j.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(k, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(A, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ae) => N(j)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              _(S),
              (g(!0), $(fe, null, me(T.files, (j) => (g(), B(R, {
                key: j.__key
              }, {
                default: m(() => [
                  _(k, null, {
                    default: m(() => [
                      _(z, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          Z(U(j.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(z, { caption: "" }, {
                        default: m(() => [
                          Z(U(j.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(k, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(A, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ae) => T.removeFile(j)
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
    w(this, "resourceName");
    w(this, "resourceId");
    w(this, "formMetadataAndData");
    w(this, "context");
    w(this, "formSettings");
    w(this, "formStyle");
    w(this, "actionComponent");
    w(this, "orphanErrorsComponent");
    w(this, "sectionComponent");
    w(this, "wrapperResetComponent");
    w(this, "associationDisplayComponent");
    w(this, "dynamicComponentRecord");
    w(this, "formApi");
    w(this, "registerEventCallback");
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
      actionComponent: K(J.getGlobalActionComponent()),
      orphanErrorsComponent: K(J.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: K(J.getGlobalWrapperResetComponent()),
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
          const C = this.dynamicComponentRecord[`field-${u.field_name}-before`], h = ce.getFieldComponentByFormFieldType(u), b = this.dynamicComponentRecord[`field-${u.field_name}-after`], A = {
            associationDisplayComponent: K(
              this.associationDisplayComponent
            ),
            regularFieldType: ce.getRegularFieldTypeByFieldType(
              u.field_type
            )
          };
          let z = u.label;
          this.formSettings.requiredFieldsHasAsterisk && u.rules.find((R) => R.type === "required") && (z = z.concat("*"));
          const k = {
            type: u.field_type,
            extraType: u.field_extra_type,
            metadata: Object.freeze(u),
            label: z,
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
            beforeComponent: C ? K(C) : void 0,
            mainComponent: K(h),
            afterComponent: b ? K(b) : void 0,
            events: r.fields[u.field_name] ?? {},
            componentOptions: A
          };
          s.push(k), t.add(u.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? d}-before`], x = this.sectionComponent, F = this.dynamicComponentRecord[`section-${l.name ?? d}-after`], N = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? d.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: r.sections[l.name ?? d.toString()] ?? {},
          beforeComponent: i ? K(i) : void 0,
          mainComponent: K(x),
          afterComponent: F ? K(F) : void 0,
          fields: s
        };
        n.push(N);
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
      actionComponent: K(this.actionComponent),
      orphanErrorsComponent: K(this.orphanErrorsComponent),
      wrapperResetComponent: K(this.wrapperResetComponent),
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
            return Ee;
        }
      case "text":
        return Ee;
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
        return Ee;
    }
  }
}
function vn(o, e, t) {
  const r = t.form, n = (s, i, x) => s[i] ? x ? () => c(s[i]) : () => s[i] : s.compare_to ? () => {
    var F;
    return ((F = t.getFieldByName(s.compare_to)) == null ? void 0 : F.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (s) => String(
    I.formatDate(
      I.extractDate(s, r.formSettings.backendDateFormat),
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
        l.push(Fn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          kn(
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
        l.push(Nn());
        break;
      case "numberNumericOnly":
        l.push(Bn());
        break;
      case "numberEvenOnly":
        l.push(qn());
        break;
      case "numberOddOnly":
        l.push(En());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          wn(
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
function Fn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function kn(o) {
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
function Nn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Bn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function qn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function En() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function wn(o) {
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
    const r = o(), n = I.extractDate(String(t), e), c = I.extractDate(r, e);
    return n <= c || `Inf. ou égal à ${r}`;
  };
}
function Hn(o, e) {
  return (t) => {
    const r = o(), n = I.extractDate(String(t), e), c = I.extractDate(r, e);
    return n < c || `Inf. à ${r}`;
  };
}
function Gn(o, e) {
  return (t) => {
    const r = o(), n = I.extractDate(String(t), e), c = I.extractDate(r, e);
    return n >= c || `Sup. ou égal à ${r}`;
  };
}
function Mn(o, e) {
  return (t) => {
    const r = o(), n = I.extractDate(String(t), e), c = I.extractDate(r, e);
    return n > c || `Sup. à ${r}`;
  };
}
function Qn(o, e) {
  return (t) => {
    const r = o(), n = I.extractDate(String(t), e), c = I.extractDate(r, e);
    return n === c || `Égale à ${n}`;
  };
}
function jn(o, e) {
  return (t) => {
    const r = o();
    return I.extractDate(String(t), e) !== I.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Qe(o) {
  return (e) => e == null || e === "" ? !0 : Yn(e, o) || `Date invalide. Format : ${o}`;
}
function Yn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = I.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : I.formatDate(t, e) === o;
}
const Wn = {
  computeServerRules: vn
}, Jn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Kn = ["index"], Xn = /* @__PURE__ */ P({
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
    const s = b(), i = E(), x = E([]);
    function F() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value);
    }
    function N() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value), O(t.field.events.onReset), l(), he(() => {
        Ve();
      });
    }
    function u(p) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return p == null || p === "" ? !1 : p;
        case "date":
          return p == null || p === "" ? null : I.formatDate(
            I.extractDate(String(p), q.formSettings.backendDateFormat),
            q.formSettings.dateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : I.formatDate(
            I.extractDate(
              String(p),
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
      return p;
    }
    function C(p) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? null : I.formatDate(
            I.extractDate(String(p), q.formSettings.dateFormat),
            q.formSettings.backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : I.formatDate(
            I.extractDate(String(p), q.formSettings.datetimeFormat),
            q.formSettings.backendDatetimeFormat
          );
      }
      return p;
    }
    function h() {
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
    function b() {
      return Wn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(p) {
      i.value = p;
    }
    function z() {
      return a(i);
    }
    function k() {
      return C(a(i));
    }
    function R(p) {
      x.value = p;
    }
    function S() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !0, O(t.field.events.onHide));
    }
    function L() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !1, O(t.field.events.onUnhide));
    }
    function T(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.readonly = p);
    }
    function j(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.hint = p);
    }
    function ae(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.cssClass = p);
    }
    function te(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.suffix = p);
    }
    function v(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.prefix = p);
    }
    function V(p) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.label = p);
    }
    function G() {
      const p = r();
      return O(t.field.events.onValidated), p;
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
    function Be(p, q, le, ye, xe) {
      r = p, n = q, c = le, ye && (l = ye), xe && (d = xe);
    }
    const Se = {
      softReset: F,
      reset: N,
      clear: h,
      validate: G,
      isValid: be,
      isInvalid: Ce,
      hide: S,
      unhide: L,
      resetValidation: Ve,
      getValueDeserialized: k,
      getValueSerialized: z,
      setupBackendErrors: R,
      setReadonlyState: T,
      setHint: j,
      setCssClass: ae,
      setSuffix: te,
      setPrefix: v,
      setLabel: V,
      setValue: A,
      field: t.field
    };
    return e(Se), Q(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        O(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (p) => {
        O(p ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var q, le;
      F();
      const p = (q = Ye()) == null ? void 0 : q.exposed;
      p && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        p
      ), O((le = t.field) == null ? void 0 : le.events.onReady);
    }), (p, q) => we((g(), $("div", null, [
      t.field.beforeComponent ? (g(), B(ne(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Se
      }, null, 8, ["formApi"])) : H("", !0),
      (g(), B(ne(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: N,
        clear: h,
        getValueDeserialized: k,
        getValueSerialized: z,
        validate: G,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: Be
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (g(), B(ne(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Se
      }, null, 8, ["formApi"])) : H("", !0),
      x.value.length > 0 ? (g(), $("div", Jn, [
        (g(!0), $(fe, null, me(x.value, (le, ye) => (g(), $("div", {
          index: ye,
          class: "flex column"
        }, U(le), 9, Kn))), 256))
      ])) : H("", !0)
    ], 512)), [
      [Oe, t.field.hidden !== !0]
    ]);
  }
}), Zn = { class: "flex column" }, ea = /* @__PURE__ */ P({
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
      reset: x,
      clear: F,
      validate: C,
      isValid: h,
      isInvalid: b,
      hide: N,
      unhide: u,
      resetValidation: A,
      getFields: z,
      setReadonlyState: k,
      setCssClass: R,
      setIcon: S,
      setLabel: L,
      section: t.section
    }, d = E(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((v) => {
        const V = v.metadata.field_name, G = t.formApi.getFieldByName(V);
        G && d.value.set(V, G);
      });
    }
    function i() {
      d.value.forEach((v) => {
        v.softReset();
      });
    }
    function x() {
      d.value.forEach((v) => {
        v.reset();
      }), O(t.section.events.onReset);
    }
    function F() {
      d.value.forEach((v) => {
        v.clear();
      }), O(t.section.events.onClear);
    }
    function N() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (d.value.forEach((V) => {
        V.hide();
      }), v.hidden = !0, O(t.section.events.onHide));
    }
    function u() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (d.value.forEach((V) => {
        V.unhide();
      }), v.hidden = !1, O(t.section.events.onUnhide));
    }
    function C() {
      let v = !0;
      return d.value.forEach((V) => {
        if (!V.validate()) {
          v = !1;
          return;
        }
      }), O(t.section.events.onValidated), v;
    }
    function h() {
      let v = !0;
      return d.value.forEach((V) => {
        if (!V.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function b() {
      return !h();
    }
    function A() {
      d.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function z() {
      return d.value;
    }
    function k(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = v);
    }
    function R(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = v);
    }
    function S(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = v);
    }
    function L(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = v);
    }
    function T() {
      const v = {};
      for (const [V, G] of d.value)
        v[V] = G.getValueSerialized();
      return v;
    }
    e(l);
    const j = ve(() => h()), ae = ve(() => b()), te = ve(() => T());
    return Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        r == null || r(), r = null, v && (r = Q(j, (V) => {
          V && O(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = Q(ae, (V) => {
          var G;
          V && O((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        c == null || c(), c = null, v && (c = Q(
          te,
          () => {
            var V;
            O((V = t.section) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var V;
      const v = (V = Ye()) == null ? void 0 : V.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), he(() => {
        var G;
        s(), O((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (v, V) => we((g(), $("div", Zn, [
      t.section.beforeComponent ? (g(), B(ne(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0),
      (g(), B(ne(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: m(() => [
          je(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (g(), B(ne(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [Oe, t.section.hidden !== !0]
    ]);
  }
}), ta = { class: "flex column" }, ra = /* @__PURE__ */ P({
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
    let r = null, n = "", c = 0, l = 0, d = null, s = null, i = null, x = null, F = null;
    const N = St(), u = E(ce.getEmptyFormBeforeInit()), C = E(!1), h = E(!1), b = E(!1), A = E(!1), z = E("create"), k = E({}), R = E(/* @__PURE__ */ new Map()), S = E(/* @__PURE__ */ new Map());
    async function L() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), u.value = ce.getForm(
        t.resourceName,
        t.resourceId,
        ae(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ie,
        t.eventManager
      ), c = u.value.sections.length, l = u.value.sections.map((f) => f.fields).flat().length, t.resourceId && (z.value = "edit");
    }
    async function T() {
      var D, W, pe;
      if (!V())
        return;
      O((D = u.value) == null ? void 0 : D.events.onSubmit), A.value = !0, p();
      const f = te(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (x = y.resource_data, y.success)
        k.value = {}, z.value === "create" && (z.value = "edit"), r && y.resource_data && (r.resource_data = y.resource_data), u.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          ae(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Ce(), n = JSON.stringify(te()), O((pe = u.value) == null ? void 0 : pe.events.onSubmitSuccess);
      else {
        k.value = {};
        const ge = [];
        for (const [ee, se] of S.value) {
          const De = y.errors[ee];
          De && (se.setupBackendErrors(De), ge.push(ee));
        }
        Object.entries(y.errors).forEach((ee) => {
          ge.includes(ee[0]) || (k.value[ee[0]] = ee[1]);
        }), O((W = u.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      A.value = !1;
    }
    async function j(f) {
      var W, pe, ge;
      if (!u.value.allowBulk || z.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!V())
        return;
      O((W = u.value) == null ? void 0 : W.events.onSubmit), A.value = !0, p();
      const y = te(), D = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        bulkCount: f,
        context: t.context
      });
      if (F = D.bulk_data, D.success)
        k.value = {}, z.value === "create" && (z.value = "edit"), r && D.resource_data && (r.resource_data = D.resource_data), u.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          ae(),
          {
            form: D.form,
            resource_data: D.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Ce(), n = JSON.stringify(te()), O((ge = u.value) == null ? void 0 : ge.events.onSubmitSuccess);
      else {
        k.value = {};
        const ee = [];
        for (const [se, De] of S.value) {
          const Ue = D.errors[se];
          Ue && (De.setupBackendErrors(Ue), ee.push(se));
        }
        Object.entries(D.errors).forEach((se) => {
          ee.includes(se[0]) || (k.value[se[0]] = se[1]);
        }), O((pe = u.value) == null ? void 0 : pe.events.onSubmitUnsuccess);
      }
      A.value = !1;
    }
    function ae() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in N) {
        const D = N[y];
        if (D) {
          const W = P({
            inheritAttrs: !1,
            setup(pe, { attrs: ge, slots: ee }) {
              return () => D({
                ...pe,
                ...ge,
                slots: ee
              });
            }
          });
          switch (y) {
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
              f.dynamicComponentRecord[y] = W;
              break;
          }
        }
      }
      return f;
    }
    function te() {
      const f = {};
      for (const [y, D] of S.value)
        f[y] = D.getValueDeserialized();
      return f;
    }
    function v() {
      const f = {};
      for (const [y, D] of S.value)
        f[y] = D.getValueSerialized();
      return f;
    }
    function V() {
      var y;
      let f = !0;
      return S.value.forEach((D) => {
        if (!D.validate()) {
          f = !1;
          return;
        }
      }), O((y = u.value) == null ? void 0 : y.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return S.value.forEach((y) => {
        if (!y.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function be() {
      return !G();
    }
    function Ce() {
      R.value.forEach((f) => {
        f.softReset();
      });
    }
    function Ve() {
      var f;
      S.value.forEach((y) => {
        y.reset();
      }), O((f = u.value) == null ? void 0 : f.events.onReset);
    }
    function Be() {
      var f;
      S.value.forEach((y) => {
        y.clear();
      }), O((f = u.value) == null ? void 0 : f.events.onClear);
    }
    function Se() {
      S.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function p() {
      S.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function q(f) {
      if (r)
        return r.resource_data[f];
    }
    function le(f) {
      return R.value.get(f);
    }
    function ye(f) {
      return [...R.value.values()].at(f);
    }
    function xe() {
      return R.value;
    }
    function Ze(f) {
      return S.value.get(f);
    }
    function et() {
      return S.value;
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
      ].forEach((y) => {
        (t[y] === null || t[y] === void 0) && console.warn(`Missing props for <Submit64> -> ${y}`);
      });
    }
    function at() {
      return a(z);
    }
    function ot() {
      return n !== JSON.stringify(te());
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
      return b.value;
    }
    function ut() {
      return x;
    }
    function dt() {
      return F;
    }
    function ct() {
      return u;
    }
    function ft(f) {
      var y;
      return (y = u.value) == null ? void 0 : y.sections.find((D) => D.name === f);
    }
    function mt(f) {
      var y;
      return (y = u.value) == null ? void 0 : y.sections.map((D) => D.fields).flat().find((D) => D.metadata.field_name === f);
    }
    function Te(f, y) {
      R.value.set(f, y), c === R.value.size && (C.value = !0);
    }
    function Ie(f, y) {
      S.value.set(f, y), l === S.value.size && (h.value = !0);
    }
    const $e = {
      getFormRef: ct,
      getSectionRef: ft,
      getFieldRef: mt,
      registerSectionWrapperRef: Te,
      registerFieldWrapperRef: Ie
    }, pt = new Proxy({}, {
      get(f, y) {
        var D;
        return (D = u.value) == null ? void 0 : D[y];
      }
    }), ie = {
      getMode: at,
      getSectionByName: le,
      getSectionByIndex: ye,
      getSections: xe,
      getFieldByName: Ze,
      getFields: et,
      validate: V,
      isValid: G,
      isInvalid: be,
      softReset: Ce,
      reset: Ve,
      clear: Be,
      resetValidation: Se,
      submit: T,
      submitBulk: j,
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
    const gt = ve(() => G()), vt = ve(() => be()), ht = ve(() => v());
    return Q(
      () => C.value && h.value,
      (f) => {
        var y;
        f && !b.value && (O((y = u.value) == null ? void 0 : y.events.onReady), b.value = !0);
      }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        d == null || d(), d = null, f && (d = Q(gt, (y) => {
          var D;
          y && O((D = u.value) == null ? void 0 : D.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = Q(vt, (y) => {
          var D;
          y && O((D = u.value) == null ? void 0 : D.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        i == null || i(), i = null, f && (i = Q(
          ht,
          () => {
            var y;
            O((y = u.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      nt(), await L(), he(() => {
        n = JSON.stringify(te());
      });
    }), (f, y) => we((g(), $("div", ta, [
      M("div", {
        class: X(u.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), $(fe, null, me(u.value.sections, (D) => (g(), B(ea, {
          key: D.name,
          section: D,
          context: t.context,
          formApi: ie,
          privateFormApi: $e,
          registerRef: Te
        }, {
          default: m(() => [
            (g(!0), $(fe, null, me(D.fields, (W) => (g(), B(Xn, {
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
      (g(), B(ne(u.value.orphanErrorsComponent), {
        orphanErrors: k.value,
        formApi: ie
      }, null, 8, ["orphanErrors"])),
      (g(), B(ne(u.value.actionComponent), {
        isLoadingSubmit: A.value,
        formApi: ie
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Oe, b.value]
    ]);
  }
});
export {
  Re as DynamicLogicBuilder,
  J as Submit64,
  ra as Submit64Form
};
