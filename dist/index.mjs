var ht = Object.defineProperty;
var yt = (o, e, t) => e in o ? ht(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var w = (o, e, t) => yt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, createElementBlock as P, openBlock as p, createElementVNode as Q, createVNode as _, createBlock as R, createCommentVNode as M, unref as a, mergeProps as qe, toDisplayString as U, renderSlot as je, resolveComponent as Y, normalizeProps as _t, guardReactiveProps as bt, withCtx as m, createTextVNode as ee, Fragment as ue, renderList as de, ref as q, onMounted as J, nextTick as pe, normalizeClass as te, watch as W, resolveDynamicComponent as oe, computed as me, markRaw as Z, getCurrentInstance as Ye, withDirectives as we, vShow as Oe, useSlots as Ct } from "vue";
import { QBtn as ve, QIcon as be, QItem as Ae, QItemSection as Re, QItemLabel as Ne, QInput as Ce, QPopupProxy as Ve, QDate as Qe, QTime as St, QCheckbox as Ft, QSelect as ze, QColor as kt, useQuasar as Vt, QEditor as xt, QUploader as We, date as $ } from "quasar";
const Dt = { class: "flex column" }, At = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Rt = /* @__PURE__ */ H({
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
    return (r, n) => (p(), P("div", Dt, [
      Q("div", At, [
        _(a(ve), qe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (p(), R(a(ve), qe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : M("", !0),
        e.formApi.clear ? (p(), R(a(ve), qe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : M("", !0)
      ])
    ]));
  }
}), Nt = { class: "flex row items-center" }, Bt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, Et = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (p(), P("div", null, [
      Q("div", Nt, [
        e.sectionApi.section.icon ? (p(), R(a(be), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : M("", !0),
        Q("div", Bt, U(e.sectionApi.section.label), 1)
      ]),
      Q("div", qt, [
        je(t.$slots, "default")
      ])
    ]));
  }
}), wt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Y("q-icon");
      return p(), R(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (c) => e.reset())
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
    return (t, r) => (p(), R(a(Ae), _t(bt(e.itemProps)), {
      default: m(() => [
        _(a(Re), null, {
          default: m(() => [
            _(a(Ne), null, {
              default: m(() => [
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
}), zt = { class: "flex column" }, Tt = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (p(), P("div", zt, [
      (p(!0), P(ue, null, de(e.orphanErrors, (n, c) => (p(), P("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, U(c) + " : " + U(n.join(",")), 1))), 128))
    ]));
  }
}), De = class De {
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
    }, this._actionComponent = Rt, this._orphanErrorsComponent = Tt, this._sectionComponent = Et, this._wrapperResetComponent = wt, this._associationDisplayComponent = Ot;
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
w(De, "_instance", new De());
let X = De;
class xe {
  constructor(e) {
    w(this, "formApi");
    w(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, c = new It(r, n, this.formApi);
    return this.events.push(c), new $t(c);
  }
  static create(e) {
    return new xe(e);
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
class $t {
  constructor(e) {
    w(this, "formEvent");
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q(), d = q();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return d.value ? d.value.validate() : !1;
    }
    function D() {
      return d.value ? !d.value.hasError : !1;
    }
    function F() {
      d.value && d.value.resetValidation();
    }
    return J(() => {
      e.registerBehaviourCallbacks(i, D, F), c || pe(() => {
        var N;
        (N = d.value) == null || N.resetValidation();
      });
    }), (N, u) => (p(), R(a(Ce), {
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
      class: te(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: m(() => [
        _(a(be), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ve), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": u[0] || (u[0] = (C) => e.modelValueOnUpdate(C)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: m(() => [
                    Q("div", Ut, [
                      _(a(ve), {
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q(), d = q(), s = q();
    function i() {
      l.value && l.value.hide();
    }
    function D() {
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
    return J(() => {
      e.registerBehaviourCallbacks(F, N, u), c || pe(() => {
        var C;
        (C = s.value) == null || C.resetValidation();
      });
    }), (C, h) => (p(), R(a(Ce), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": h[2] || (h[2] = (k) => e.modelValueOnUpdate(k)),
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
      class: te(e.field.cssClass),
      "lazy-rules": c,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: m(() => [
        _(a(be), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ve), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": h[0] || (h[0] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: m(() => [
                    Q("div", Lt, [
                      _(a(ve), {
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
        _(a(be), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ve), {
              ref_key: "timePopupProxyRef",
              ref: d,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(St), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": h[1] || (h[1] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: m(() => [
                    Q("div", Ht, [
                      _(a(ve), {
                        onClick: D,
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
}, Yt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Qt = /* @__PURE__ */ H({
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
    function c() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function d() {
      t.value = !0;
    }
    return W(
      () => e.modelValue,
      (s) => {
        for (const i of e.rules)
          if (t.value = i(s), t.value !== !0)
            break;
      }
    ), J(() => {
      e.registerBehaviourCallbacks(c, l, d);
    }), (s, i) => (p(), P("div", Mt, [
      _(a(Ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (D) => e.modelValueOnUpdate(D)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: te([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (p(), P("div", jt, U(e.field.hint), 1)) : M("", !0),
      t.value !== !0 ? (p(), P("div", Yt, U(t.value), 1)) : M("", !0)
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
    const e = o, t = q([]), r = q([]), n = q(), c = e.formApi.form, l = c.formSettings, d = c.formStyle, s = l.rulesBehaviour === "lazy";
    function i(h, k) {
      if (h === "") {
        k(() => {
          r.value = [...t.value];
        });
        return;
      }
      k(() => {
        const z = h.toLowerCase();
        r.value = t.value.filter((E) => E.label.toLowerCase().includes(z));
      });
    }
    function D() {
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
    return J(() => {
      D(), e.registerBehaviourCallbacks(F, N, u, void 0, C);
    }), (h, k) => (p(), R(a(ze), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (z) => e.modelValueOnUpdate(z)),
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
      class: te(e.field.cssClass),
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
        _(a(Ae), {
          dense: a(d).fieldDense
        }, {
          default: m(() => [
            _(a(Re), null, {
              default: m(() => [
                _(a(Ne), null, {
                  default: m(() => [
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
}), Pe = "__init", Le = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = q([]), s = q(
      F()
    ), i = q(), D = q(Pe);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function N(S, V) {
      if (S === D.value) {
        V(() => {
        });
        return;
      }
      const b = e.formApi.getAssociationDataCallback();
      s.value = F(), D.value = S;
      const L = e.formApi.form;
      s.value.isLoading = !0, b({
        resourceName: L.resourceName,
        resourceId: L.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: S,
        context: L.context
      }).then((T) => {
        V(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = F();
      });
    }
    function u() {
      var V, b;
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (d.value = [
        {
          label: ((V = e.field.associationData[0]) == null ? void 0 : V.label) ?? "???",
          value: S,
          data: (b = e.field.associationData[0]) == null ? void 0 : b.data
        }
      ]);
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function h() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = F(), d.value = [], D.value = Pe;
    }
    function E(S) {
      const V = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && S.to === V && V !== -1) {
        const b = e.formApi.form, L = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, L({
          resourceName: b.resourceName,
          resourceId: b.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: D.value,
          context: b.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        C,
        h,
        k,
        u,
        z
      ), pe(() => {
        u();
      });
    }), (S, V) => (p(), R(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: te(e.field.cssClass),
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
      onVirtualScroll: E
    }, {
      "no-option": m(() => [
        _(a(Ae), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            _(a(Re), null, {
              default: m(() => [
                _(a(Ne), null, {
                  default: m(() => [
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
      option: m((b) => [
        (p(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), He = "__init", Ge = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = q([]), s = q(
      F()
    ), i = q(), D = q(He);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function N(S, V) {
      if (S === D.value) {
        V(() => {
        });
        return;
      }
      const b = e.formApi.getAssociationDataCallback();
      s.value = F(), D.value = S;
      const L = e.formApi.form;
      s.value.isLoading = !0, b({
        resourceName: L.resourceName,
        resourceId: L.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: S,
        context: L.context
      }).then((T) => {
        V(() => {
          d.value = T.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], s.value = F();
      });
    }
    function u() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (d.value = S.map((V, b) => ({
        label: e.field.associationData[b].label ?? "???",
        value: V,
        data: e.field.associationData[b].data
      })));
    }
    function C() {
      return i.value ? i.value.validate() : !1;
    }
    function h() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = F(), d.value = [], D.value = He;
    }
    function E(S) {
      const V = d.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && S.to === V && V !== -1) {
        const b = e.formApi.form, L = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, L({
          resourceName: b.resourceName,
          resourceId: b.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: D.value,
          context: b.context
        }).then((T) => {
          d.value = d.value.concat(
            T.rows
          ), s.value.lastPage = Math.ceil(
            T.row_count / s.value.limit
          ), T.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        C,
        h,
        k,
        u,
        z
      ), pe(() => {
        u();
      });
    }), (S, V) => (p(), R(a(ze), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: te(e.field.cssClass),
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
      onVirtualScroll: E
    }, {
      "no-option": m(() => [
        _(a(Ae), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            _(a(Re), null, {
              default: m(() => [
                _(a(Ne), null, {
                  default: m(() => [
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
      option: m((b) => [
        (p(), R(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ee = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return J(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (D, F) => (p(), R(a(Ce), {
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
      class: te(e.field.cssClass),
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return J(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (D, F) => (p(), R(a(Ce), {
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
      class: te(e.field.cssClass),
      "lazy-rules": c,
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q();
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return J(() => {
      e.registerBehaviourCallbacks(d, s, i);
    }), (D, F) => (p(), R(a(Ce), {
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
      class: te(e.field.cssClass),
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
        _(a(be), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            _(a(Ve), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                _(a(kt), {
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
    const e = o, t = Vt(), n = e.formApi.form.formStyle, c = [
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
    }, d = q();
    function s() {
      return !!d.value;
    }
    function i() {
      return !!d.value;
    }
    function D() {
    }
    return J(() => {
      e.registerBehaviourCallbacks(s, i, D);
    }), (F, N) => e.modelValue ? (p(), R(a(xt), {
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
      class: te(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : M("", !0);
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
    const t = o.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, c) => " TODO json edit ? ";
  }
});
function O(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Je(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
const en = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, tn = { class: "col" }, nn = { class: "q-uploader__title" }, an = {
  key: 0,
  class: "caption"
}, on = {
  key: 0,
  class: "flex column"
}, rn = {
  key: 2,
  class: "flex column"
}, ln = /* @__PURE__ */ H({
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
    const e = o, r = e.formApi.form.formStyle, n = q();
    function c() {
      let C = e.modelValue;
      C.add = [], C.delete = [], e.modelValueOnUpdate(C);
    }
    function l() {
      var h;
      let C = e.modelValue;
      C.add = [], C.delete = ((h = e.field.attachmentData) == null ? void 0 : h.map((k) => k.id)) ?? [], e.modelValueOnUpdate(C);
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
    function D(C) {
      const h = C[0];
      if (!h)
        return;
      let k = e.modelValue;
      k.add.push(h), e.modelValueOnUpdate(k);
    }
    function F(C) {
      const h = C[0];
      if (!h)
        return;
      let k = e.modelValue;
      k.add = k.add.filter((z) => z.key !== h.key), e.modelValueOnUpdate(k);
    }
    function N(C) {
      let h = e.modelValue;
      h.delete.push(C.id), e.modelValueOnUpdate(h);
    }
    const u = me(() => (e.field.attachmentData ?? []).length === 0);
    return J(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (C, h) => {
      const k = Y("q-spinner"), z = Y("q-uploader-add-trigger"), E = Y("q-btn"), S = Y("q-item-label"), V = Y("q-item-section"), b = Y("q-item"), L = Y("q-list"), T = Y("q-separator");
      return p(), R(a(We), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: te(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: D,
        onRemoved: F,
        style: { width: "inherit" }
      }, {
        header: m((I) => [
          Q("div", en, [
            I.isUploading ? (p(), R(k, {
              key: 0,
              class: "q-uploader__spinner"
            })) : M("", !0),
            Q("div", tn, [
              Q("div", nn, U(e.field.label), 1),
              e.field.hint ? (p(), P("div", an, U(e.field.hint), 1)) : M("", !0)
            ]),
            ee(U(I.canAddFiles) + " ", 1),
            I.canAddFiles ? (p(), R(E, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: I.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: m(() => [
                _(z)
              ]),
              _: 1
            }, 8, ["onClick"])) : M("", !0)
          ])
        ]),
        list: m((I) => [
          u.value ? M("", !0) : (p(), P("div", on, [
            h[0] || (h[0] = Q("div", null, "Fichiers actuels", -1)),
            _(L, { separator: "" }, {
              default: m(() => [
                (p(!0), P(ue, null, de(e.field.attachmentData ?? [], (G) => (p(), R(b, {
                  key: G.id
                }, {
                  default: m(() => [
                    _(V, null, {
                      default: m(() => [
                        _(S, { class: "full-width ellipsis" }, {
                          default: m(() => [
                            ee(U(G.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(S, { caption: "" }, {
                          default: m(() => [
                            ee(U(a(Je)(G.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    _(V, {
                      top: "",
                      side: ""
                    }, {
                      default: m(() => [
                        _(E, {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (ne) => N(G)
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
          !u.value && I.files.length > 0 ? (p(), R(T, { key: 1 })) : M("", !0),
          I.files.length > 0 ? (p(), P("div", rn, [
            h[1] || (h[1] = Q("div", null, "Fichiers à télécharger", -1)),
            _(L, { separator: "" }, {
              default: m(() => [
                (p(!0), P(ue, null, de(I.files, (G) => (p(), R(b, {
                  key: G.__key
                }, {
                  default: m(() => [
                    _(V, null, {
                      default: m(() => [
                        _(S, { class: "full-width ellipsis" }, {
                          default: m(() => [
                            ee(U(G.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(S, { caption: "" }, {
                          default: m(() => [
                            ee(U(G.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    _(V, {
                      top: "",
                      side: ""
                    }, {
                      default: m(() => [
                        _(E, {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (ne) => I.removeFile(G)
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
          ])) : M("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]);
    };
  }
}), sn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, un = { class: "col" }, dn = { class: "q-uploader__title" }, cn = { class: "q-uploader__subtitle" }, fn = /* @__PURE__ */ H({
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
    const e = o, r = e.formApi.form.formStyle, n = q();
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
    function D(u) {
      const C = u;
      if (!C)
        return;
      let h = e.modelValue;
      C.forEach((k) => {
        h.add.push(k);
      }), e.modelValueOnUpdate(h);
    }
    function F(u) {
      const C = u;
      let h = e.modelValue;
      h.add = h.add.filter((k) => !C.map((z) => z.key).includes(k.key)), e.modelValueOnUpdate(h);
    }
    function N(u) {
      let C = e.modelValue;
      C.delete.push(u.id), e.modelValueOnUpdate(C);
    }
    return J(() => {
      e.registerBehaviourCallbacks(d, s, i, c, l);
    }), (u, C) => {
      const h = Y("q-spinner"), k = Y("q-uploader-add-trigger"), z = Y("q-btn"), E = Y("q-item-label"), S = Y("q-item-section"), V = Y("q-item"), b = Y("q-separator"), L = Y("q-list");
      return p(), R(a(We), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: te(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: D,
        onRemoved: F
      }, {
        header: m((T) => [
          Q("div", sn, [
            T.isUploading ? (p(), R(h, {
              key: 0,
              class: "q-uploader__spinner"
            })) : M("", !0),
            Q("div", un, [
              Q("div", dn, U(e.field.label), 1),
              Q("div", cn, "Total : " + U(T.uploadSizeLabel), 1)
            ]),
            T.canAddFiles ? (p(), R(z, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: T.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: m(() => [
                _(k)
              ]),
              _: 1
            }, 8, ["onClick"])) : M("", !0)
          ])
        ]),
        list: m((T) => [
          _(L, { separator: "" }, {
            default: m(() => [
              (p(!0), P(ue, null, de(e.field.attachmentData ?? [], (I) => (p(), R(V, {
                key: I.id
              }, {
                default: m(() => [
                  _(S, null, {
                    default: m(() => [
                      _(E, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(U(I.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(E, { caption: "" }, {
                        default: m(() => [
                          ee(U(a(Je)(I.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (G) => N(I)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              _(b),
              (p(!0), P(ue, null, de(T.files, (I) => (p(), R(V, {
                key: I.__key
              }, {
                default: m(() => [
                  _(S, null, {
                    default: m(() => [
                      _(E, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(U(I.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(E, { caption: "" }, {
                        default: m(() => [
                          ee(U(I.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      _(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (G) => T.removeFile(I)
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
class se {
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
      ...X.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...X.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? X.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? X.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? X.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? X.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? X.getGlobalAssociationDisplayComponent(), this.registerEventCallback = i ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...X.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: X.getGlobalFormStyle(),
      events: {},
      actionComponent: Z(X.getGlobalActionComponent()),
      orphanErrorsComponent: Z(X.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: Z(X.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, c, l, d, s, i) {
    return new se(
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
    const e = xe.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = xe.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (l, d) => {
        const s = [];
        l.fields.forEach((u) => {
          const C = this.dynamicComponentRecord[`field-${u.field_name}-before`], h = se.getFieldComponentByFormFieldType(u), k = this.dynamicComponentRecord[`field-${u.field_name}-after`], z = {
            associationDisplayComponent: Z(
              this.associationDisplayComponent
            ),
            regularFieldType: se.getRegularFieldTypeByFieldType(
              u.field_type
            )
          };
          let E = u.label;
          this.formSettings.requiredFieldsHasAsterisk && u.rules.find((V) => V.type === "required") && (E = E.concat("*"));
          const S = {
            type: u.field_type,
            extraType: u.field_extra_type,
            metadata: Object.freeze(u),
            label: E,
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
            beforeComponent: C ? Z(C) : void 0,
            mainComponent: Z(h),
            afterComponent: k ? Z(k) : void 0,
            events: r.fields[u.field_name] ?? {},
            componentOptions: z
          };
          s.push(S), t.add(u.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? d}-before`], D = this.sectionComponent, F = this.dynamicComponentRecord[`section-${l.name ?? d}-after`], N = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? d.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: r.sections[l.name ?? d.toString()] ?? {},
          beforeComponent: i ? Z(i) : void 0,
          mainComponent: Z(D),
          afterComponent: F ? Z(F) : void 0,
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
      actionComponent: Z(this.actionComponent),
      orphanErrorsComponent: Z(this.orphanErrorsComponent),
      wrapperResetComponent: Z(this.wrapperResetComponent),
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
            return Kt;
          case "wysiwyg":
            return Xt;
          default:
            return Ee;
        }
      case "text":
        return Ee;
      case "number":
        return Jt;
      case "date":
        return Pt;
      case "datetime":
        return Gt;
      case "select":
        return Wt;
      case "selectBelongsTo":
        return Le;
      case "selectHasMany":
        return Ge;
      case "selectHasAndBelongsToMany":
        return Ge;
      case "selectHasOne":
        return Le;
      case "checkbox":
        return Qt;
      case "object":
        return Zt;
      case "attachmentHasOne":
        return ln;
      case "attachmentHasMany":
        return fn;
      default:
        return Ee;
    }
  }
}
function mn(o, e, t) {
  const r = t.form, n = (s, i, D) => s[i] ? D ? () => c(s[i]) : () => s[i] : s.compare_to ? () => {
    var F;
    return ((F = t.getFieldByName(s.compare_to)) == null ? void 0 : F.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (s) => String(
    $.formatDate(
      $.extractDate(s, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], d = [];
  switch (e) {
    case "date":
      l.push(Me(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Me(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((s) => {
    const i = s;
    switch (i.type) {
      case "required":
        l.push(pn());
        break;
      case "absence":
        l.push(vn());
        break;
      case "acceptance":
        l.push(hn());
        break;
      case "inclusion":
        l.push(Ke(i.including));
        break;
      case "exclusion":
        l.push(gn(i.excluding));
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
        l.push(bn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Cn(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Sn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Fn(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          kn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Vn(n(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          xn(
            n(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Dn());
        break;
      case "numberNumericOnly":
        l.push(An());
        break;
      case "numberEvenOnly":
        l.push(Rn());
        break;
      case "numberOddOnly":
        l.push(Nn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Bn(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          qn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          En(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          wn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Tn(
            n(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          zn(n(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          On(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          In(
            n(i, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          $n(
            n(i, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Un(
            n(i, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Pn(
            n(i, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Ln(
            n(i, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Hn(
            n(i, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Gn(
            n(i, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((s) => {
    switch (s) {
      case "allowBlank":
        return _n(l);
      case "allowNull":
        return yn(l);
    }
  }) : l;
}
function pn() {
  return (o) => !!o || "Ce champ est requis";
}
function Ke(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function gn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ke.toString()}`
  );
}
function vn() {
  return (o) => !o || "Ce champ doit être vide";
}
function hn() {
  return (o) => !!o || "Doit être accepté";
}
function yn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function _n(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function bn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Cn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Sn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Fn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function kn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Vn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function xn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Dn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function An() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Rn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Nn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Bn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function qn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function En(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function wn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function On(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function zn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Tn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function In(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function $n(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n <= c || `Inf. ou égal à ${r}`;
  };
}
function Un(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n < c || `Inf. à ${r}`;
  };
}
function Pn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n >= c || `Sup. ou égal à ${r}`;
  };
}
function Ln(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n > c || `Sup. à ${r}`;
  };
}
function Hn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n === c || `Égale à ${n}`;
  };
}
function Gn(o, e) {
  return (t) => {
    const r = o();
    return $.extractDate(String(t), e) !== $.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Me(o) {
  return (e) => e == null || e === "" ? !0 : Mn(e, o) || `Date invalide. Format : ${o}`;
}
function Mn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = $.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : $.formatDate(t, e) === o;
}
const jn = {
  computeServerRules: mn
}, Yn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Qn = ["index"], Wn = /* @__PURE__ */ H({
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
    const s = k(), i = q(), D = q([]);
    function F() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value);
    }
    function N() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = u(i.value), O(t.field.events.onReset), l(), pe(() => {
        Se();
      });
    }
    function u(g) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return g == null || g === "" ? !1 : g;
        case "date":
          return g == null || g === "" ? null : $.formatDate(
            $.extractDate(String(g), B.formSettings.backendDateFormat),
            B.formSettings.dateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : $.formatDate(
            $.extractDate(
              String(g),
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
      return g;
    }
    function C(g) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return g == null || g === "" ? null : $.formatDate(
            $.extractDate(String(g), B.formSettings.dateFormat),
            B.formSettings.backendDateFormat
          );
        case "datetime":
          return g == null || g === "" ? null : $.formatDate(
            $.extractDate(String(g), B.formSettings.datetimeFormat),
            B.formSettings.backendDatetimeFormat
          );
      }
      return g;
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
    function k() {
      return jn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function z(g) {
      i.value = g;
    }
    function E() {
      return a(i);
    }
    function S() {
      return C(a(i));
    }
    function V(g) {
      D.value = g;
    }
    function b() {
      const g = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      g && (g.hidden = !0, O(t.field.events.onHide));
    }
    function L() {
      const g = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      g && (g.hidden = !1, O(t.field.events.onUnhide));
    }
    function T(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.readonly = g);
    }
    function I(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.hint = g);
    }
    function G(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.cssClass = g);
    }
    function ne(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.suffix = g);
    }
    function v(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.prefix = g);
    }
    function x(g) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.label = g);
    }
    function j() {
      const g = r();
      return O(t.field.events.onValidated), g;
    }
    function he() {
      return n();
    }
    function ye() {
      return !he();
    }
    function Se() {
      return c();
    }
    function Be(g, B, re, ge, Fe) {
      r = g, n = B, c = re, ge && (l = ge), Fe && (d = Fe);
    }
    const _e = {
      softReset: F,
      reset: N,
      clear: h,
      validate: j,
      isValid: he,
      isInvalid: ye,
      hide: b,
      unhide: L,
      resetValidation: Se,
      getValueDeserialized: S,
      getValueSerialized: E,
      setupBackendErrors: V,
      setReadonlyState: T,
      setHint: I,
      setCssClass: G,
      setSuffix: ne,
      setPrefix: v,
      setLabel: x,
      setValue: z,
      field: t.field
    };
    return e(_e), W(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        O(t.field.events.onUpdate);
      }
    ), W(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (g) => {
        O(g ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), J(() => {
      var B, re;
      F();
      const g = (B = Ye()) == null ? void 0 : B.exposed;
      g && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        g
      ), O((re = t.field) == null ? void 0 : re.events.onReady);
    }), (g, B) => we((p(), P("div", null, [
      t.field.beforeComponent ? (p(), R(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: _e
      }, null, 8, ["formApi"])) : M("", !0),
      (p(), R(oe(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: N,
        clear: h,
        getValueDeserialized: S,
        getValueSerialized: E,
        validate: j,
        modelValueOnUpdate: z,
        registerBehaviourCallbacks: Be
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (p(), R(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: _e
      }, null, 8, ["formApi"])) : M("", !0),
      D.value.length > 0 ? (p(), P("div", Yn, [
        (p(!0), P(ue, null, de(D.value, (re, ge) => (p(), P("div", {
          index: ge,
          class: "flex column"
        }, U(re), 9, Qn))), 256))
      ])) : M("", !0)
    ], 512)), [
      [Oe, t.field.hidden !== !0]
    ]);
  }
}), Jn = { class: "flex column" }, Kn = /* @__PURE__ */ H({
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
      reset: D,
      clear: F,
      validate: C,
      isValid: h,
      isInvalid: k,
      hide: N,
      unhide: u,
      resetValidation: z,
      getFields: E,
      setReadonlyState: S,
      setCssClass: V,
      setIcon: b,
      setLabel: L,
      section: t.section
    }, d = q(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((v) => {
        const x = v.metadata.field_name, j = t.formApi.getFieldByName(x);
        j && d.value.set(x, j);
      });
    }
    function i() {
      d.value.forEach((v) => {
        v.softReset();
      });
    }
    function D() {
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
      v && (d.value.forEach((x) => {
        x.hide();
      }), v.hidden = !0, O(t.section.events.onHide));
    }
    function u() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (d.value.forEach((x) => {
        x.unhide();
      }), v.hidden = !1, O(t.section.events.onUnhide));
    }
    function C() {
      let v = !0;
      return d.value.forEach((x) => {
        if (!x.validate()) {
          v = !1;
          return;
        }
      }), O(t.section.events.onValidated), v;
    }
    function h() {
      let v = !0;
      return d.value.forEach((x) => {
        if (!x.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function k() {
      return !h();
    }
    function z() {
      d.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function E() {
      return d.value;
    }
    function S(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = v);
    }
    function V(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = v);
    }
    function b(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = v);
    }
    function L(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = v);
    }
    function T() {
      const v = {};
      for (const [x, j] of d.value)
        v[x] = j.getValueSerialized();
      return v;
    }
    e(l);
    const I = me(() => h()), G = me(() => k()), ne = me(() => T());
    return W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        r == null || r(), r = null, v && (r = W(I, (x) => {
          x && O(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = W(G, (x) => {
          var j;
          x && O((j = t.section) == null ? void 0 : j.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        c == null || c(), c = null, v && (c = W(
          ne,
          () => {
            var x;
            O((x = t.section) == null ? void 0 : x.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(() => {
      var x;
      const v = (x = Ye()) == null ? void 0 : x.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), pe(() => {
        var j;
        s(), O((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (v, x) => we((p(), P("div", Jn, [
      t.section.beforeComponent ? (p(), R(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : M("", !0),
      (p(), R(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: m(() => [
          je(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (p(), R(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : M("", !0)
    ], 512)), [
      [Oe, t.section.hidden !== !0]
    ]);
  }
}), Xn = { class: "flex column" }, na = /* @__PURE__ */ H({
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
    let r = null, n = "", c = 0, l = 0, d = null, s = null, i = null, D = null, F = null;
    const N = Ct(), u = q(se.getEmptyFormBeforeInit()), C = q(!1), h = q(!1), k = q(!1), z = q(!1), E = q("create"), S = q({}), V = q(/* @__PURE__ */ new Map()), b = q(/* @__PURE__ */ new Map());
    async function L() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), u.value = se.getForm(
        t.resourceName,
        t.resourceId,
        G(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        le,
        t.eventManager
      ), c = u.value.sections.length, l = u.value.sections.map((f) => f.fields).flat().length, t.resourceId && (E.value = "edit");
    }
    async function T() {
      var A, K, ce;
      if (!x())
        return;
      O((A = u.value) == null ? void 0 : A.events.onSubmit), z.value = !0, g();
      const f = ne(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (D = y.resource_data, y.success)
        S.value = {}, E.value === "create" && (E.value = "edit"), r && y.resource_data && (r.resource_data = y.resource_data), u.value = se.getForm(
          t.resourceName,
          t.resourceId,
          G(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          le,
          t.eventManager
        ), ye(), n = JSON.stringify(ne()), O((ce = u.value) == null ? void 0 : ce.events.onSubmitSuccess);
      else {
        S.value = {};
        const fe = [];
        for (const [ae, ie] of b.value) {
          const ke = y.errors[ae];
          ke && (ie.setupBackendErrors(ke), fe.push(ae));
        }
        Object.entries(y.errors).forEach((ae) => {
          fe.includes(ae[0]) || (S.value[ae[0]] = ae[1]);
        }), O((K = u.value) == null ? void 0 : K.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    async function I(f) {
      var K, ce, fe;
      if (!u.value.allowBulk || E.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!x())
        return;
      O((K = u.value) == null ? void 0 : K.events.onSubmit), z.value = !0, g();
      const y = ne(), A = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        bulkCount: f,
        context: t.context
      });
      if (F = A.bulk_data, A.success)
        S.value = {}, E.value === "create" && (E.value = "edit"), r && A.resource_data && (r.resource_data = A.resource_data), u.value = se.getForm(
          t.resourceName,
          t.resourceId,
          G(),
          {
            form: A.form,
            resource_data: A.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          le,
          t.eventManager
        ), ye(), n = JSON.stringify(ne()), O((fe = u.value) == null ? void 0 : fe.events.onSubmitSuccess);
      else {
        S.value = {};
        const ae = [];
        for (const [ie, ke] of b.value) {
          const Ue = A.errors[ie];
          Ue && (ke.setupBackendErrors(Ue), ae.push(ie));
        }
        Object.entries(A.errors).forEach((ie) => {
          ae.includes(ie[0]) || (S.value[ie[0]] = ie[1]);
        }), O((ce = u.value) == null ? void 0 : ce.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    function G() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in N) {
        const A = N[y];
        if (A) {
          const K = H({
            inheritAttrs: !1,
            setup(ce, { attrs: fe, slots: ae }) {
              return () => A({
                ...ce,
                ...fe,
                slots: ae
              });
            }
          });
          switch (y) {
            case "sections":
              f.sectionComponent = K;
              break;
            case "actions":
              f.actionComponent = K;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = K;
              break;
            case "association-display":
              f.associationDisplayComponent = K;
              break;
            default:
              f.dynamicComponentRecord[y] = K;
              break;
          }
        }
      }
      return f;
    }
    function ne() {
      const f = {};
      for (const [y, A] of b.value)
        f[y] = A.getValueDeserialized();
      return f;
    }
    function v() {
      const f = {};
      for (const [y, A] of b.value)
        f[y] = A.getValueSerialized();
      return f;
    }
    function x() {
      var y;
      let f = !0;
      return b.value.forEach((A) => {
        if (!A.validate()) {
          f = !1;
          return;
        }
      }), O((y = u.value) == null ? void 0 : y.events.onValidated), f;
    }
    function j() {
      let f = !0;
      return b.value.forEach((y) => {
        if (!y.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function he() {
      return !j();
    }
    function ye() {
      V.value.forEach((f) => {
        f.softReset();
      });
    }
    function Se() {
      var f;
      b.value.forEach((y) => {
        y.reset();
      }), O((f = u.value) == null ? void 0 : f.events.onReset);
    }
    function Be() {
      var f;
      b.value.forEach((y) => {
        y.clear();
      }), O((f = u.value) == null ? void 0 : f.events.onClear);
    }
    function _e() {
      b.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function g() {
      b.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function B(f) {
      if (r)
        return r.resource_data[f];
    }
    function re(f) {
      return V.value.get(f);
    }
    function ge(f) {
      return [...V.value.values()].at(f);
    }
    function Fe() {
      return V.value;
    }
    function Xe(f) {
      return b.value.get(f);
    }
    function Ze() {
      return b.value;
    }
    function et() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function tt() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((y) => {
        (t[y] === null || t[y] === void 0) && console.warn(`Missing props for <Submit64> -> ${y}`);
      });
    }
    function nt() {
      return a(E);
    }
    function at() {
      return n !== JSON.stringify(ne());
    }
    function ot(f) {
      u.value && (u.value.context = f);
    }
    function rt(f) {
      u.value && (u.value.cssClass = f);
    }
    function lt(f) {
      u.value && (u.value.readonly = f);
    }
    function it() {
      return k.value;
    }
    function st() {
      return D;
    }
    function ut() {
      return F;
    }
    function dt() {
      return u;
    }
    function ct(f) {
      var y;
      return (y = u.value) == null ? void 0 : y.sections.find((A) => A.name === f);
    }
    function ft(f) {
      var y;
      return (y = u.value) == null ? void 0 : y.sections.map((A) => A.fields).flat().find((A) => A.metadata.field_name === f);
    }
    function Te(f, y) {
      V.value.set(f, y), c === V.value.size && (C.value = !0);
    }
    function Ie(f, y) {
      b.value.set(f, y), l === b.value.size && (h.value = !0);
    }
    const $e = {
      getFormRef: dt,
      getSectionRef: ct,
      getFieldRef: ft,
      registerSectionWrapperRef: Te,
      registerFieldWrapperRef: Ie
    }, mt = new Proxy({}, {
      get(f, y) {
        var A;
        return (A = u.value) == null ? void 0 : A[y];
      }
    }), le = {
      getMode: nt,
      getSectionByName: re,
      getSectionByIndex: ge,
      getSections: Fe,
      getFieldByName: Xe,
      getFields: Ze,
      validate: x,
      isValid: j,
      isInvalid: he,
      softReset: ye,
      reset: Se,
      clear: Be,
      resetValidation: _e,
      submit: T,
      submitBulk: I,
      valuesHasChanged: at,
      getInitialValueByFieldName: B,
      getAssociationDataCallback: et,
      setContext: ot,
      setCssClass: rt,
      setReadonlyState: lt,
      isReady: it,
      getSubmitData: st,
      getBulkSubmitData: ut,
      form: mt
    };
    e(le);
    const pt = me(() => j()), gt = me(() => he()), vt = me(() => v());
    return W(
      () => C.value && h.value,
      (f) => {
        var y;
        f && !k.value && (O((y = u.value) == null ? void 0 : y.events.onReady), k.value = !0);
      }
    ), W(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        d == null || d(), d = null, f && (d = W(pt, (y) => {
          var A;
          y && O((A = u.value) == null ? void 0 : A.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = W(gt, (y) => {
          var A;
          y && O((A = u.value) == null ? void 0 : A.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        i == null || i(), i = null, f && (i = W(
          vt,
          () => {
            var y;
            O((y = u.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(async () => {
      tt(), await L(), pe(() => {
        n = JSON.stringify(ne());
      });
    }), (f, y) => we((p(), P("div", Xn, [
      Q("div", {
        class: te(u.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), P(ue, null, de(u.value.sections, (A) => (p(), R(Kn, {
          key: A.name,
          section: A,
          context: t.context,
          formApi: le,
          privateFormApi: $e,
          registerRef: Te
        }, {
          default: m(() => [
            (p(!0), P(ue, null, de(A.fields, (K) => (p(), R(Wn, {
              key: K.metadata.field_name,
              field: K,
              context: t.context,
              formApi: le,
              privateFormApi: $e,
              registerRef: Ie
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (p(), R(oe(u.value.orphanErrorsComponent), {
        orphanErrors: S.value,
        formApi: le
      }, null, 8, ["orphanErrors"])),
      (p(), R(oe(u.value.actionComponent), {
        isLoadingSubmit: z.value,
        formApi: le
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Oe, k.value]
    ]);
  }
});
export {
  xe as DynamicLogicBuilder,
  X as Submit64,
  na as Submit64Form
};
