var ft = Object.defineProperty;
var mt = (o, e, t) => e in o ? ft(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var x = (o, e, t) => mt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, createElementBlock as L, openBlock as h, createElementVNode as ae, createVNode as B, createBlock as w, createCommentVNode as W, unref as a, mergeProps as Re, toDisplayString as Z, renderSlot as Ge, resolveComponent as pt, normalizeProps as gt, guardReactiveProps as vt, withCtx as V, createTextVNode as ke, Fragment as be, renderList as Ce, ref as k, onMounted as j, normalizeClass as J, watch as P, nextTick as ge, resolveDynamicComponent as X, markRaw as Y, getCurrentInstance as He, withDirectives as Be, vShow as Ee, computed as se, useSlots as ht } from "vue";
import { QBtn as ue, QIcon as pe, QItem as Ve, QItemSection as xe, QItemLabel as De, QInput as ve, QPopupProxy as _e, QDate as Me, QTime as yt, QCheckbox as bt, QSelect as we, QColor as Ct, useQuasar as _t, QEditor as St, date as T } from "quasar";
const Ft = { class: "flex column" }, kt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Vt = /* @__PURE__ */ z({
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
    return (r, n) => (h(), L("div", Ft, [
      ae("div", kt, [
        B(a(ue), Re(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), w(a(ue), Re({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : W("", !0),
        e.formApi.clear ? (h(), w(a(ue), Re({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : W("", !0)
      ])
    ]));
  }
}), xt = { class: "flex row items-center" }, Dt = { class: "text-body1 text-weight-medium" }, At = { class: "flex column q-gutter-md" }, Rt = /* @__PURE__ */ z({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), L("div", null, [
      ae("div", xt, [
        e.sectionApi.section.icon ? (h(), w(a(pe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : W("", !0),
        ae("div", Dt, Z(e.sectionApi.section.label), 1)
      ]),
      ae("div", At, [
        Ge(t.$slots, "default")
      ])
    ]));
  }
}), Nt = /* @__PURE__ */ z({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = pt("q-icon");
      return h(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), Bt = /* @__PURE__ */ z({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), w(a(Ve), gt(vt(e.itemProps)), {
      default: V(() => [
        B(a(xe), null, {
          default: V(() => [
            B(a(De), null, {
              default: V(() => [
                ke(Z(e.entry.label), 1)
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
}), Et = { class: "flex column" }, wt = /* @__PURE__ */ z({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), L("div", Et, [
      (h(!0), L(be, null, Ce(e.orphanErrors, (n, s) => (h(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, Z(s) + " : " + Z(n.join(",")), 1))), 128))
    ]));
  }
}), Fe = class Fe {
  constructor() {
    x(this, "_formSettings");
    x(this, "_formStyle");
    x(this, "_actionComponent");
    x(this, "_orphanErrorsComponent");
    x(this, "_sectionComponent");
    x(this, "_wrapperResetComponent");
    x(this, "_associationDisplayComponent");
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
    }, this._actionComponent = Vt, this._orphanErrorsComponent = wt, this._sectionComponent = Rt, this._wrapperResetComponent = Nt, this._associationDisplayComponent = Bt;
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
x(Fe, "_instance", new Fe());
let H = Fe;
class Se {
  constructor(e) {
    x(this, "formApi");
    x(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new Ot(r, n, this.formApi);
    return this.events.push(s), new Tt(s);
  }
  static create(e) {
    return new Se(e);
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
class Ot {
  constructor(e, t, r) {
    x(this, "type");
    x(this, "data");
    x(this, "formApi");
    x(this, "action", () => {
    });
    x(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class Tt {
  constructor(e) {
    x(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const qt = { class: "row items-center justify-end" }, It = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k(), u = k();
    function i() {
      l.value && l.value.hide();
    }
    function c() {
      return u.value ? u.value.validate() : !1;
    }
    function _() {
      return u.value ? !u.value.hasError : !1;
    }
    function y() {
      u.value && u.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(c, _, y);
    }), (d, E) => (h(), w(a(ve), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": E[1] || (E[1] = (q) => e.modelValueOnUpdate(q)),
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
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(_e), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[0] || (E[0] = (q) => e.modelValueOnUpdate(q)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    ae("div", qt, [
                      B(a(ue), {
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
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), zt = { class: "row items-center justify-end" }, $t = { class: "row items-center justify-end" }, Ut = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k(), u = k(), i = k();
    function c() {
      l.value && l.value.hide();
    }
    function _() {
      u.value && u.value.hide();
    }
    function y() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? !i.value.hasError : !1;
    }
    function E() {
      i.value && i.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(y, d, E);
    }), (q, N) => (h(), w(a(ve), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[2] || (N[2] = (A) => e.modelValueOnUpdate(A)),
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
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(_e), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(Me), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[0] || (N[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    ae("div", zt, [
                      B(a(ue), {
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
        B(a(pe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(_e), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(yt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[1] || (N[1] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    ae("div", $t, [
                      B(a(ue), {
                        onClick: _,
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
}), Pt = { class: "flex column" }, Lt = {
  key: 0,
  class: "q-field__bottom"
}, Gt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ht = /* @__PURE__ */ z({
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
    function s() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function u() {
      t.value = !0;
    }
    return P(
      () => e.modelValue,
      (i) => {
        for (const c of e.rules)
          if (t.value = c(i), t.value !== !0)
            break;
      }
    ), j(() => {
      e.registerBehaviourCallbacks(s, l, u);
    }), (i, c) => (h(), L("div", Pt, [
      B(a(bt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (_) => e.modelValueOnUpdate(_)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: J([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), L("div", Lt, Z(e.field.hint), 1)) : W("", !0),
      t.value !== !0 ? (h(), L("div", Gt, Z(t.value), 1)) : W("", !0)
    ]));
  }
}), Mt = /* @__PURE__ */ z({
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
    const e = o, t = k([]), r = k([]), n = k(), s = e.formApi.form, l = s.formSettings, u = s.formStyle, i = l.rulesBehaviour === "lazy";
    function c(N, A) {
      if (N === "") {
        A(() => {
          r.value = [...t.value];
        });
        return;
      }
      A(() => {
        const O = N.toLowerCase();
        r.value = t.value.filter((I) => I.label.toLowerCase().includes(O));
      });
    }
    function _() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function y() {
      return n.value ? n.value.validate() : !1;
    }
    function d() {
      return n.value ? !n.value.hasError : !1;
    }
    function E() {
      n.value && n.value.resetValidation();
    }
    function q() {
      e.clear(), r.value = [];
    }
    return j(() => {
      _(), e.registerBehaviourCallbacks(y, d, E);
    }), (N, A) => (h(), w(a(we), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (O) => e.modelValueOnUpdate(O)),
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
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: q,
      onFilter: c
    }, {
      "no-option": V(() => [
        B(a(Ve), {
          dense: a(u).fieldDense
        }, {
          default: V(() => [
            B(a(xe), null, {
              default: V(() => [
                B(a(De), null, {
                  default: V(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), ze = "__init", $e = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = k([]), i = k(
      y()
    ), c = k(), _ = k(ze);
    function y() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function d(S, C) {
      if (S === _.value) {
        C(() => {
        });
        return;
      }
      const D = e.formApi.getAssociationDataCallback();
      i.value = y(), _.value = S;
      const U = e.formApi.form;
      i.value.isLoading = !0, D({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: S,
        context: U.context
      }).then(($) => {
        C(() => {
          u.value = $.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = y();
      });
    }
    function E() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (u.value = [
        {
          label: e.field.associationData.label[0] ?? "???",
          value: S,
          data: e.field.associationData.data[0]
        }
      ]);
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function N() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function O() {
      e.clear(), i.value = y(), u.value = [], _.value = ze;
    }
    function I(S) {
      const C = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && S.to === C && C !== -1) {
        const D = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, U({
          resourceName: D.resourceName,
          resourceId: D.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: _.value,
          context: D.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return j(() => {
      ge(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        N,
        A,
        E
      );
    }), (S, C) => (h(), w(a(we), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (D) => e.modelValueOnUpdate(D)),
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
      class: J(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: O,
      onFilter: d,
      onVirtualScroll: I
    }, {
      "no-option": V(() => [
        B(a(Ve), {
          dense: a(s).fieldDense
        }, {
          default: V(() => [
            B(a(xe), null, {
              default: V(() => [
                B(a(De), null, {
                  default: V(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((D) => [
        (h(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: D.opt,
          itemProps: D.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ue = "__init", Pe = /* @__PURE__ */ z({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, s = r.formStyle, l = n.rulesBehaviour === "lazy", u = k([]), i = k(
      y()
    ), c = k(), _ = k(Ue);
    function y() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function d(S, C) {
      if (S === _.value) {
        C(() => {
        });
        return;
      }
      const D = e.formApi.getAssociationDataCallback();
      i.value = y(), _.value = S;
      const U = e.formApi.form;
      i.value.isLoading = !0, D({
        resourceName: U.resourceName,
        resourceId: U.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: S,
        context: U.context
      }).then(($) => {
        C(() => {
          u.value = $.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        u.value = [], i.value = y();
      });
    }
    function E() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (u.value = S.map((C, D) => ({
        label: e.field.associationData.label[D] ?? "???",
        value: C,
        data: e.field.associationData.data[D]
      })));
    }
    function q() {
      return c.value ? c.value.validate() : !1;
    }
    function N() {
      return c.value ? !c.value.hasError : !1;
    }
    function A() {
      c.value && c.value.resetValidation();
    }
    function O() {
      e.clear(), i.value = y(), u.value = [], _.value = Ue;
    }
    function I(S) {
      const C = u.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage < i.value.lastPage && S.to === C && C !== -1) {
        const D = e.formApi.form, U = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, U({
          resourceName: D.resourceName,
          resourceId: D.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: _.value,
          context: D.context
        }).then(($) => {
          u.value = u.value.concat(
            $.rows
          ), i.value.lastPage = Math.ceil(
            $.row_count / i.value.limit
          ), $.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return j(() => {
      ge(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        N,
        A,
        E
      );
    }), (S, C) => (h(), w(a(we), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (D) => e.modelValueOnUpdate(D)),
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
      class: J(e.field.cssClass),
      "lazy-rules": l,
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
      onClear: O,
      onFilter: d,
      onVirtualScroll: I
    }, {
      "no-option": V(() => [
        B(a(Ve), {
          dense: a(s).fieldDense
        }, {
          default: V(() => [
            B(a(xe), null, {
              default: V(() => [
                B(a(De), null, {
                  default: V(() => [
                    ke(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: V((D) => [
        (h(), w(X(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: D.opt,
          itemProps: D.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ne = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (_, y) => (h(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[0] || (y[0] = (d) => e.modelValueOnUpdate(d)),
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
}), Yt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (_, y) => (h(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[0] || (y[0] = (d) => e.modelValueOnUpdate(d)),
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
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), jt = /* @__PURE__ */ z({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, s = r.rulesBehaviour === "lazy", l = k();
    function u() {
      return l.value ? l.value.validate() : !1;
    }
    function i() {
      return l.value ? !l.value.hasError : !1;
    }
    function c() {
      l.value && l.value.resetValidation();
    }
    return j(() => {
      e.registerBehaviourCallbacks(u, i, c);
    }), (_, y) => (h(), w(a(ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": y[1] || (y[1] = (d) => e.modelValueOnUpdate(d)),
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
      "lazy-rules": s,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: V(() => [
        B(a(pe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(_e), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(Ct), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": y[0] || (y[0] = (d) => e.modelValueOnUpdate(d))
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
}), Qt = /* @__PURE__ */ z({
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
    const e = o, t = _t(), n = e.formApi.form.formStyle, s = [
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
    }, u = k();
    function i() {
      return !!u.value;
    }
    function c() {
      return !!u.value;
    }
    function _() {
    }
    return j(() => {
      e.registerBehaviourCallbacks(i, c, _);
    }), (y, d) => e.modelValue ? (h(), w(a(St), {
      key: 0,
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[0] || (d[0] = (E) => e.modelValueOnUpdate(E)),
      toolbar: s,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: J(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : W("", !0);
  }
}), Wt = /* @__PURE__ */ z({
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
    return t.formStyle, r.rulesBehaviour, (n, s) => " TODO json edit ? ";
  }
});
class ne {
  constructor(e, t, r, n, s, l, u, i, c) {
    x(this, "resourceName");
    x(this, "resourceId");
    x(this, "formMetadataAndData");
    x(this, "context");
    x(this, "formSettings");
    x(this, "formStyle");
    x(this, "actionComponent");
    x(this, "orphanErrorsComponent");
    x(this, "sectionComponent");
    x(this, "wrapperResetComponent");
    x(this, "associationDisplayComponent");
    x(this, "dynamicComponentRecord");
    x(this, "formApi");
    x(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = i, this.formSettings = {
      ...s,
      ...H.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...H.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? H.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? H.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? H.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? H.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? H.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...H.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: H.getGlobalFormStyle(),
      events: {},
      actionComponent: Y(H.getGlobalActionComponent()),
      orphanErrorsComponent: Y(H.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: Y(H.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, s, l, u, i, c) {
    return new ne(
      e,
      t,
      r,
      n,
      s,
      l,
      u,
      i,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Se.create(this.formApi);
    this.registerEventCallback(e);
    const t = Se.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((d) => {
          const E = this.dynamicComponentRecord[`field-${d.field_name}-before`], q = ne.getFieldComponentByFormFieldType(d), N = this.dynamicComponentRecord[`field-${d.field_name}-after`], A = {
            associationDisplayComponent: Y(
              this.associationDisplayComponent
            ),
            regularFieldType: ne.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let O = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((S) => S.type === "required") && (O = O.concat("*"));
          const I = {
            type: d.field_type,
            extraType: d.field_extra_type,
            metadata: Object.freeze(d),
            label: O,
            hint: d.hint ?? void 0,
            prefix: d.prefix ?? void 0,
            suffix: d.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? d.readonly ?? void 0,
            cssClass: d.css_class ?? void 0,
            staticSelectOptions: d.static_select_options,
            associationData: d.field_association_data,
            rules: d.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: E ? Y(E) : void 0,
            mainComponent: Y(q),
            afterComponent: N ? Y(N) : void 0,
            events: t.fields[d.field_name] ?? {},
            componentOptions: A
          };
          u.push(I);
        });
        const i = this.dynamicComponentRecord[`section-${s.name ?? l}-before`], c = this.sectionComponent, _ = this.dynamicComponentRecord[`section-${s.name ?? l}-after`], y = {
          label: s.label ?? void 0,
          icon: s.icon ?? void 0,
          cssClass: s.css_class ?? void 0,
          hidden: !1,
          name: s.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? s.readonly ?? void 0,
          events: t.sections[s.name ?? l.toString()] ?? {},
          beforeComponent: i ? Y(i) : void 0,
          mainComponent: Y(c),
          afterComponent: _ ? Y(_) : void 0,
          fields: u
        };
        r.push(y);
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
      allowBulk: this.formMetadataAndData.form.allow_bulk ?? !1,
      events: t.form,
      actionComponent: Y(this.actionComponent),
      orphanErrorsComponent: Y(this.orphanErrorsComponent),
      wrapperResetComponent: Y(this.wrapperResetComponent),
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
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return jt;
          case "wysiwyg":
            return Qt;
          default:
            return Ne;
        }
      case "text":
        return Ne;
      case "number":
        return Yt;
      case "date":
        return It;
      case "datetime":
        return Ut;
      case "select":
        return Mt;
      case "selectBelongsTo":
        return $e;
      case "selectHasMany":
        return Pe;
      case "selectHasAndBelongsToMany":
        return Pe;
      case "selectHasOne":
        return $e;
      case "checkbox":
        return Ht;
      case "object":
        return Wt;
      default:
        return Ne;
    }
  }
}
function R(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Jt(o, e, t) {
  const r = t.form, n = (i, c, _) => i[c] ? _ ? () => s(i[c]) : () => i[c] : i.compare_to ? () => {
    var y;
    return ((y = t.getFieldByName(i.compare_to)) == null ? void 0 : y.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", s = (i) => String(
    T.formatDate(
      T.extractDate(i, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), l = [], u = [];
  switch (e) {
    case "date":
      l.push(Le(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Le(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(Kt());
        break;
      case "absence":
        l.push(Zt());
        break;
      case "acceptance":
        l.push(en());
        break;
      case "inclusion":
        l.push(Ye(c.including));
        break;
      case "exclusion":
        l.push(Xt(c.excluding));
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
        l.push(an());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          on(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          rn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          ln(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          sn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          un(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          cn(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(dn());
        break;
      case "numberNumericOnly":
        l.push(fn());
        break;
      case "numberEvenOnly":
        l.push(mn());
        break;
      case "numberOddOnly":
        l.push(pn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          gn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          vn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          hn(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          yn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          _n(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Cn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          bn(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Sn(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Fn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          kn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Vn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          xn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Dn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          An(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return nn(l);
      case "allowNull":
        return tn(l);
    }
  }) : l;
}
function Kt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ye(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Xt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ye.toString()}`
  );
}
function Zt() {
  return (o) => !o || "Ce champ doit être vide";
}
function en() {
  return (o) => !!o || "Doit être accepté";
}
function tn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function nn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function an() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function on(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function rn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ln(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function sn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function un(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function cn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function dn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function fn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function mn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function pn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function gn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function vn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function hn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function yn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function bn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Cn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function _n(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Sn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Fn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function kn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function Vn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function xn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function Dn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function An(o, e) {
  return (t) => {
    const r = o();
    return T.extractDate(String(t), e) !== T.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Le(o) {
  return (e) => e == null || e === "" ? !0 : Rn(e, o) || `Date invalide. Format : ${o}`;
}
function Rn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = T.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : T.formatDate(t, e) === o;
}
const Nn = {
  computeServerRules: Jt
}, Bn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, En = ["index"], wn = /* @__PURE__ */ z({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, s = () => {
    }, l = () => {
    };
    const u = N(), i = k(), c = k([]);
    function _() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value);
    }
    function y() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value), R(t.field.events.onReset), l(), ge(() => {
        he();
      });
    }
    function d(m) {
      const F = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), F.formSettings.backendDateFormat),
            F.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(
              String(m),
              F.formSettings.backendDatetimeFormat
            ),
            F.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function E(m) {
      const F = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), F.formSettings.dateFormat),
            F.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : T.formatDate(
            T.extractDate(String(m), F.formSettings.datetimeFormat),
            F.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function q() {
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
      }
      R(t.field.events.onClear);
    }
    function N() {
      return Nn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(m) {
      i.value = m;
    }
    function O() {
      return a(i);
    }
    function I() {
      return E(a(i));
    }
    function S(m) {
      c.value = m;
    }
    function C() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, R(t.field.events.onHide));
    }
    function D() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, R(t.field.events.onUnhide));
    }
    function U(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.readonly = m);
    }
    function $(m) {
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
    function ce(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.prefix = m);
    }
    function p(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.label = m);
    }
    function v() {
      const m = r();
      return R(t.field.events.onValidated), m;
    }
    function M() {
      return n();
    }
    function de() {
      return !M();
    }
    function he() {
      return s();
    }
    function Ae(m, F, me, le) {
      r = m, n = F, s = me, le && (l = le);
    }
    const fe = {
      softReset: _,
      reset: y,
      clear: q,
      validate: v,
      isValid: M,
      isInvalid: de,
      hide: C,
      unhide: D,
      resetValidation: he,
      getValueDeserialized: I,
      getValueSerialized: O,
      setupBackendErrors: S,
      setReadonlyState: U,
      setHint: $,
      setCssClass: oe,
      setSuffix: K,
      setPrefix: ce,
      setLabel: p,
      setValue: A,
      field: t.field
    };
    return e(fe), P(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        R(t.field.events.onUpdate);
      }
    ), P(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        R(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var F;
      _();
      const m = (F = He()) == null ? void 0 : F.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, F) => Be((h(), L("div", null, [
      t.field.beforeComponent ? (h(), w(X(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : W("", !0),
      (h(), w(X(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(u),
        reset: y,
        clear: q,
        getValueDeserialized: I,
        getValueSerialized: O,
        validate: v,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: Ae
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), w(X(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : W("", !0),
      c.value.length > 0 ? (h(), L("div", Bn, [
        (h(!0), L(be, null, Ce(c.value, (me, le) => (h(), L("div", {
          index: le,
          class: "flex column"
        }, Z(me), 9, En))), 256))
      ])) : W("", !0)
    ], 512)), [
      [Ee, t.field.hidden !== !0]
    ]);
  }
}), On = { class: "flex column" }, Tn = /* @__PURE__ */ z({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, s = null;
    const l = {
      softReset: c,
      reset: _,
      clear: y,
      validate: q,
      isValid: N,
      isInvalid: A,
      hide: d,
      unhide: E,
      resetValidation: O,
      getFields: I,
      setReadonlyState: S,
      setCssClass: C,
      setIcon: D,
      setLabel: U,
      section: t.section
    }, u = k(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const v = p.metadata.field_name, M = t.formApi.getFieldByName(v);
        M && u.value.set(v, M);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.softReset();
      });
    }
    function _() {
      u.value.forEach((p) => {
        p.reset();
      }), R(t.section.events.onReset);
    }
    function y() {
      u.value.forEach((p) => {
        p.clear();
      }), R(t.section.events.onClear);
    }
    function d() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((v) => {
        v.hide();
      }), p.hidden = !0, R(t.section.events.onHide));
    }
    function E() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((v) => {
        v.unhide();
      }), p.hidden = !1, R(t.section.events.onUnhide));
    }
    function q() {
      let p = !0;
      return u.value.forEach((v) => {
        if (!v.validate()) {
          p = !1;
          return;
        }
      }), R(t.section.events.onValidated), p;
    }
    function N() {
      let p = !0;
      return u.value.forEach((v) => {
        if (!v.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function A() {
      return !N();
    }
    function O() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function I() {
      return u.value;
    }
    function S(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.readonly = p);
    }
    function C(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.cssClass = p);
    }
    function D(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.icon = p);
    }
    function U(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.label = p);
    }
    function $() {
      const p = {};
      for (const [v, M] of u.value)
        p[v] = M.getValueSerialized();
      return p;
    }
    e(l);
    const oe = se(() => N()), K = se(() => A()), ce = se(() => $());
    return P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = P(oe, (v) => {
          v && R(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = P(K, (v) => {
          var M;
          v && R((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        s == null || s(), s = null, p && (s = P(
          ce,
          () => {
            var v;
            R((v = t.section) == null ? void 0 : v.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var v;
      const p = (v = He()) == null ? void 0 : v.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), ge(() => {
        i();
      });
    }), (p, v) => Be((h(), L("div", On, [
      t.section.beforeComponent ? (h(), w(X(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : W("", !0),
      (h(), w(X(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: V(() => [
          Ge(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), w(X(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : W("", !0)
    ], 512)), [
      [Ee, t.section.hidden !== !0]
    ]);
  }
}), qn = { class: "flex column" }, Un = /* @__PURE__ */ z({
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
    let r = null, n = "", s = 0, l = 0, u = null, i = null, c = null, _ = null;
    const y = ht(), d = k(ne.getEmptyFormBeforeInit()), E = k(!1), q = k(!1), N = k(!1), A = k(!1), O = k("create"), I = k({}), S = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map());
    async function D() {
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
      ), s = d.value.sections.length, l = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && (O.value = "edit");
    }
    async function U() {
      var b, G, re;
      if (!p())
        return;
      R((b = d.value) == null ? void 0 : b.events.onSubmit), A.value = !0, m();
      const f = K(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (g.success)
        I.value = {}, O.value === "create" && (O.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(K()), d.value = ne.getForm(
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
        ), de(), R((re = d.value) == null ? void 0 : re.events.onSubmitSuccess);
      else {
        I.value = {};
        const ie = [];
        for (const [Q, te] of C.value) {
          const ye = g.errors[Q];
          ye && (te.setupBackendErrors(ye), ie.push(Q));
        }
        Object.entries(g.errors).forEach((Q) => {
          ie.includes(Q[0]) || (I.value[Q[0]] = Q[1]);
        }), R((G = d.value) == null ? void 0 : G.events.onSubmitUnsuccess);
      }
      A.value = !1;
    }
    async function $(f) {
      var G, re, ie;
      if (!d.value.allowBulk || O.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!p())
        return;
      R((G = d.value) == null ? void 0 : G.events.onSubmit), A.value = !0, m();
      const g = K(), b = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        bulkCount: f,
        context: t.context
      });
      if (_ = b.bulk_data, b.success)
        I.value = {}, O.value === "create" && (O.value = "edit"), r && b.resource_data && (r.resource_data = b.resource_data), n = JSON.stringify(K()), d.value = ne.getForm(
          t.resourceName,
          t.resourceId,
          oe(),
          {
            form: b.form,
            resource_data: b.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ee,
          t.eventManager
        ), de(), R((ie = d.value) == null ? void 0 : ie.events.onSubmitSuccess);
      else {
        I.value = {};
        const Q = [];
        for (const [te, ye] of C.value) {
          const Ie = b.errors[te];
          Ie && (ye.setupBackendErrors(Ie), Q.push(te));
        }
        Object.entries(b.errors).forEach((te) => {
          Q.includes(te[0]) || (I.value[te[0]] = te[1]);
        }), R((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      A.value = !1;
    }
    function oe() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in y) {
        const b = y[g];
        if (b) {
          const G = z({
            inheritAttrs: !1,
            setup(re, { attrs: ie, slots: Q }) {
              return () => b({
                ...re,
                ...ie,
                slots: Q
              });
            }
          });
          switch (g) {
            case "sections":
              f.sectionComponent = G;
              break;
            case "actions":
              f.actionComponent = G;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = G;
              break;
            case "association-display":
              f.associationDisplayComponent = G;
              break;
            default:
              f.dynamicComponentRecord[g] = G;
              break;
          }
        }
      }
      return f;
    }
    function K() {
      const f = {};
      for (const [g, b] of C.value)
        f[g] = b.getValueDeserialized();
      return f;
    }
    function ce() {
      const f = {};
      for (const [g, b] of C.value)
        f[g] = b.getValueSerialized();
      return f;
    }
    function p() {
      var g;
      let f = !0;
      return C.value.forEach((b) => {
        if (!b.validate()) {
          f = !1;
          return;
        }
      }), R((g = d.value) == null ? void 0 : g.events.onValidated), f;
    }
    function v() {
      let f = !0;
      return C.value.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function M() {
      return !v();
    }
    function de() {
      S.value.forEach((f) => {
        f.softReset();
      });
    }
    function he() {
      var f;
      C.value.forEach((g) => {
        g.reset();
      }), R((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function Ae() {
      var f;
      C.value.forEach((g) => {
        g.clear();
      }), R((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function fe() {
      C.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function m() {
      C.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function F(f) {
      if (r)
        return r.resource_data[f];
    }
    function me(f) {
      return S.value.get(f);
    }
    function le(f) {
      return [...S.value.values()].at(f);
    }
    function je() {
      return S.value;
    }
    function Qe(f) {
      return C.value.get(f);
    }
    function We() {
      return C.value;
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
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Xe() {
      return a(O);
    }
    function Ze() {
      return n !== JSON.stringify(K());
    }
    function et(f) {
      d.value && (d.value.context = f);
    }
    function tt(f) {
      d.value && (d.value.cssClass = f);
    }
    function nt(f) {
      d.value && (d.value.readonly = f);
    }
    function at() {
      return N.value;
    }
    function ot() {
      return _;
    }
    function rt() {
      return d;
    }
    function it(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.find((b) => b.name === f);
    }
    function lt(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.map((b) => b.fields).flat().find((b) => b.metadata.field_name === f);
    }
    function Oe(f, g) {
      S.value.set(f, g), s === S.value.size && (E.value = !0);
    }
    function Te(f, g) {
      C.value.set(f, g), l === C.value.size && (q.value = !0);
    }
    const qe = {
      getFormRef: rt,
      getSectionRef: it,
      getFieldRef: lt,
      registerSectionWrapperRef: Oe,
      registerFieldWrapperRef: Te
    }, st = new Proxy({}, {
      get(f, g) {
        var b;
        return (b = d.value) == null ? void 0 : b[g];
      }
    }), ee = {
      getMode: Xe,
      getSectionByName: me,
      getSectionByIndex: le,
      getSections: je,
      getFieldByName: Qe,
      getFields: We,
      validate: p,
      isValid: v,
      isInvalid: M,
      softReset: de,
      reset: he,
      clear: Ae,
      resetValidation: fe,
      submit: U,
      submitBulk: $,
      valuesHasChanged: Ze,
      getInitialValueByFieldName: F,
      getAssociationDataCallback: Je,
      setContext: et,
      setCssClass: tt,
      setReadonlyState: nt,
      isReady: at,
      getBulkSubmitData: ot,
      form: st
    };
    e(ee);
    const ut = se(() => v()), ct = se(() => M()), dt = se(() => ce());
    return P(
      () => E.value && q.value,
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
        u == null || u(), u = null, f && (u = P(ut, (g) => {
          var b;
          g && R((b = d.value) == null ? void 0 : b.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        i == null || i(), i = null, f && (i = P(ct, (g) => {
          var b;
          g && R((b = d.value) == null ? void 0 : b.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        c == null || c(), c = null, f && (c = P(
          dt,
          () => {
            var g;
            R((g = d.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      Ke(), await D(), ge(() => {
        n = JSON.stringify(K());
      });
    }), (f, g) => Be((h(), L("div", qn, [
      ae("div", {
        class: J(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), L(be, null, Ce(d.value.sections, (b) => (h(), w(Tn, {
          key: b.name,
          section: b,
          context: t.context,
          formApi: ee,
          privateFormApi: qe,
          registerRef: Oe
        }, {
          default: V(() => [
            (h(!0), L(be, null, Ce(b.fields, (G) => (h(), w(wn, {
              key: G.metadata.field_name,
              field: G,
              context: t.context,
              formApi: ee,
              privateFormApi: qe,
              registerRef: Te
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), w(X(d.value.orphanErrorsComponent), {
        orphanErrors: I.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (h(), w(X(d.value.actionComponent), {
        isLoadingSubmit: A.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Ee, N.value]
    ]);
  }
});
export {
  Se as DynamicLogicBuilder,
  H as Submit64,
  Un as Submit64Form
};
