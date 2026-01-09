var ht = Object.defineProperty;
var yt = (o, e, t) => e in o ? ht(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var w = (o, e, t) => yt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as U, createElementBlock as H, openBlock as v, createElementVNode as j, createVNode as h, createBlock as N, createCommentVNode as Q, unref as a, mergeProps as qe, toDisplayString as L, renderSlot as je, resolveComponent as M, normalizeProps as _t, guardReactiveProps as bt, withCtx as m, createTextVNode as ee, Fragment as ue, renderList as de, ref as q, onMounted as W, nextTick as me, normalizeClass as Z, watch as Y, resolveDynamicComponent as oe, markRaw as X, getCurrentInstance as Ye, withDirectives as Oe, vShow as we, computed as ge, useSlots as Ct } from "vue";
import { QBtn as ve, QIcon as be, QItem as Ae, QItemSection as Re, QItemLabel as Ne, QInput as Ce, QPopupProxy as Ve, QDate as Qe, QTime as St, QCheckbox as Ft, QSelect as ze, QColor as kt, useQuasar as Vt, QEditor as xt, QUploader as We, date as $ } from "quasar";
const Dt = { class: "flex column" }, At = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Rt = /* @__PURE__ */ U({
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
    return (r, n) => (v(), H("div", Dt, [
      j("div", At, [
        h(a(ve), qe(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (v(), N(a(ve), qe({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : Q("", !0),
        e.formApi.clear ? (v(), N(a(ve), qe({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : Q("", !0)
      ])
    ]));
  }
}), Nt = { class: "flex row items-center" }, Bt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, Et = /* @__PURE__ */ U({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), H("div", null, [
      j("div", Nt, [
        e.sectionApi.section.icon ? (v(), N(a(be), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : Q("", !0),
        j("div", Bt, L(e.sectionApi.section.label), 1)
      ]),
      j("div", qt, [
        je(t.$slots, "default")
      ])
    ]));
  }
}), Ot = /* @__PURE__ */ U({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = M("q-icon");
      return v(), N(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (c) => e.reset())
      });
    };
  }
}), wt = /* @__PURE__ */ U({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), N(a(Ae), _t(bt(e.itemProps)), {
      default: m(() => [
        h(a(Re), null, {
          default: m(() => [
            h(a(Ne), null, {
              default: m(() => [
                ee(L(e.entry.label), 1)
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
}), zt = { class: "flex column" }, Tt = /* @__PURE__ */ U({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (v(), H("div", zt, [
      (v(!0), H(ue, null, de(e.orphanErrors, (n, c) => (v(), H("div", {
        key: c,
        class: "q-field--error q-field__bottom text-negative"
      }, L(c) + " : " + L(n.join(",")), 1))), 128))
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
    }, this._actionComponent = Rt, this._orphanErrorsComponent = Tt, this._sectionComponent = Et, this._wrapperResetComponent = Ot, this._associationDisplayComponent = wt;
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
let K = De;
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
const Ut = { class: "row items-center justify-end" }, Pt = /* @__PURE__ */ U({
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
    function u() {
      l.value && l.value.hide();
    }
    function s() {
      return d.value ? d.value.validate() : !1;
    }
    function x() {
      return d.value ? !d.value.hasError : !1;
    }
    function F() {
      d.value && d.value.resetValidation();
    }
    return W(() => {
      e.registerBehaviourCallbacks(s, x, F), c || me(() => {
        var R;
        (R = d.value) == null || R.resetValidation();
      });
    }), (R, i) => (v(), N(a(Ce), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": i[1] || (i[1] = (_) => e.modelValueOnUpdate(_)),
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
      append: m(() => [
        h(a(be), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            h(a(Ve), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                h(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": i[0] || (i[0] = (_) => e.modelValueOnUpdate(_)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: m(() => [
                    j("div", Ut, [
                      h(a(ve), {
                        onClick: u,
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
}), Lt = { class: "row items-center justify-end" }, Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ U({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, c = r.rulesBehaviour === "lazy", l = q(), d = q(), u = q();
    function s() {
      l.value && l.value.hide();
    }
    function x() {
      d.value && d.value.hide();
    }
    function F() {
      return u.value ? u.value.validate() : !1;
    }
    function R() {
      return u.value ? !u.value.hasError : !1;
    }
    function i() {
      u.value && u.value.resetValidation();
    }
    return W(() => {
      e.registerBehaviourCallbacks(F, R, i), c || me(() => {
        var _;
        (_ = u.value) == null || _.resetValidation();
      });
    }), (_, C) => (v(), N(a(Ce), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[2] || (C[2] = (A) => e.modelValueOnUpdate(A)),
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
      append: m(() => [
        h(a(be), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            h(a(Ve), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                h(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": C[0] || (C[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: m(() => [
                    j("div", Lt, [
                      h(a(ve), {
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
        }),
        h(a(be), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            h(a(Ve), {
              ref_key: "timePopupProxyRef",
              ref: d,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                h(a(St), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": C[1] || (C[1] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: m(() => [
                    j("div", Ht, [
                      h(a(ve), {
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
}), Mt = { class: "flex column" }, jt = {
  key: 0,
  class: "q-field__bottom"
}, Yt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Qt = /* @__PURE__ */ U({
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
    return Y(
      () => e.modelValue,
      (u) => {
        for (const s of e.rules)
          if (t.value = s(u), t.value !== !0)
            break;
      }
    ), W(() => {
      e.registerBehaviourCallbacks(c, l, d);
    }), (u, s) => (v(), H("div", Mt, [
      h(a(Ft), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": s[0] || (s[0] = (x) => e.modelValueOnUpdate(x)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: Z([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), H("div", jt, L(e.field.hint), 1)) : Q("", !0),
      t.value !== !0 ? (v(), H("div", Yt, L(t.value), 1)) : Q("", !0)
    ]));
  }
}), Wt = /* @__PURE__ */ U({
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
    const e = o, t = q([]), r = q([]), n = q(), c = e.formApi.form, l = c.formSettings, d = c.formStyle, u = l.rulesBehaviour === "lazy";
    function s(C, A) {
      if (C === "") {
        A(() => {
          r.value = [...t.value];
        });
        return;
      }
      A(() => {
        const T = C.toLowerCase();
        r.value = t.value.filter((O) => O.label.toLowerCase().includes(T));
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
    function R() {
      return n.value ? !n.value.hasError : !1;
    }
    function i() {
      n.value && n.value.resetValidation();
    }
    function _() {
      r.value = [];
    }
    return W(() => {
      x(), e.registerBehaviourCallbacks(F, R, i, void 0, _);
    }), (C, A) => (v(), N(a(ze), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (T) => e.modelValueOnUpdate(T)),
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
      "lazy-rules": u,
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
      onFilter: s
    }, {
      "no-option": m(() => [
        h(a(Ae), {
          dense: a(d).fieldDense
        }, {
          default: m(() => [
            h(a(Re), null, {
              default: m(() => [
                h(a(Ne), null, {
                  default: m(() => [
                    ee(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Pe = "__init", Le = /* @__PURE__ */ U({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = q([]), u = q(
      F()
    ), s = q(), x = q(Pe);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function R(S, k) {
      if (S === x.value) {
        k(() => {
        });
        return;
      }
      const b = e.formApi.getAssociationDataCallback();
      u.value = F(), x.value = S;
      const P = e.formApi.form;
      u.value.isLoading = !0, b({
        resourceName: P.resourceName,
        resourceId: P.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: u.value.limit,
        offset: (u.value.nextPage - 1) * u.value.limit,
        labelFilter: S,
        context: P.context
      }).then((E) => {
        k(() => {
          d.value = E.rows, u.value.nextPage = 2, u.value.lastPage = Math.ceil(
            E.row_count / u.value.limit
          ), u.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], u.value = F();
      });
    }
    function i() {
      var k, b;
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (d.value = [
        {
          label: ((k = e.field.associationData[0]) == null ? void 0 : k.label) ?? "???",
          value: S,
          data: (b = e.field.associationData[0]) == null ? void 0 : b.data
        }
      ]);
    }
    function _() {
      return s.value ? s.value.validate() : !1;
    }
    function C() {
      return s.value ? !s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function T() {
      u.value = F(), d.value = [], x.value = Pe;
    }
    function O(S) {
      const k = d.value.length - 1;
      if (u.value.isLoading !== !0 && u.value.nextPage < u.value.lastPage && S.to === k && k !== -1) {
        const b = e.formApi.form, P = e.formApi.getAssociationDataCallback();
        u.value.isLoading = !0, P({
          resourceName: b.resourceName,
          resourceId: b.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: (u.value.nextPage - 1) * u.value.limit,
          labelFilter: x.value,
          context: b.context
        }).then((E) => {
          d.value = d.value.concat(
            E.rows
          ), u.value.lastPage = Math.ceil(
            E.row_count / u.value.limit
          ), E.row_count >= u.value.limit && u.value.nextPage++, u.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return W(() => {
      e.registerBehaviourCallbacks(
        _,
        C,
        A,
        i,
        T
      ), me(() => {
        i();
      });
    }), (S, k) => (v(), N(a(ze), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (b) => e.modelValueOnUpdate(b)),
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
      onFilter: R,
      onVirtualScroll: O
    }, {
      "no-option": m(() => [
        h(a(Ae), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            h(a(Re), null, {
              default: m(() => [
                h(a(Ne), null, {
                  default: m(() => [
                    ee(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (v(), N(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), He = "__init", Ge = /* @__PURE__ */ U({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, c = r.formStyle, l = n.rulesBehaviour === "lazy", d = q([]), u = q(
      F()
    ), s = q(), x = q(He);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function R(S, k) {
      if (S === x.value) {
        k(() => {
        });
        return;
      }
      const b = e.formApi.getAssociationDataCallback();
      u.value = F(), x.value = S;
      const P = e.formApi.form;
      u.value.isLoading = !0, b({
        resourceName: P.resourceName,
        resourceId: P.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: u.value.limit,
        offset: (u.value.nextPage - 1) * u.value.limit,
        labelFilter: S,
        context: P.context
      }).then((E) => {
        k(() => {
          d.value = E.rows, u.value.nextPage = 2, u.value.lastPage = Math.ceil(
            E.row_count / u.value.limit
          ), u.value.isLoading = !1;
        });
      }).catch(() => {
        d.value = [], u.value = F();
      });
    }
    function i() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (d.value = S.map((k, b) => ({
        label: e.field.associationData[b].label ?? "???",
        value: k,
        data: e.field.associationData[b].data
      })));
    }
    function _() {
      return s.value ? s.value.validate() : !1;
    }
    function C() {
      return s.value ? !s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function T() {
      u.value = F(), d.value = [], x.value = He;
    }
    function O(S) {
      const k = d.value.length - 1;
      if (u.value.isLoading !== !0 && u.value.nextPage < u.value.lastPage && S.to === k && k !== -1) {
        const b = e.formApi.form, P = e.formApi.getAssociationDataCallback();
        u.value.isLoading = !0, P({
          resourceName: b.resourceName,
          resourceId: b.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: u.value.limit,
          offset: (u.value.nextPage - 1) * u.value.limit,
          labelFilter: x.value,
          context: b.context
        }).then((E) => {
          d.value = d.value.concat(
            E.rows
          ), u.value.lastPage = Math.ceil(
            E.row_count / u.value.limit
          ), E.row_count >= u.value.limit && u.value.nextPage++, u.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return W(() => {
      e.registerBehaviourCallbacks(
        _,
        C,
        A,
        i,
        T
      ), me(() => {
        i();
      });
    }), (S, k) => (v(), N(a(ze), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (b) => e.modelValueOnUpdate(b)),
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
      onFilter: R,
      onVirtualScroll: O
    }, {
      "no-option": m(() => [
        h(a(Ae), {
          dense: a(c).fieldDense
        }, {
          default: m(() => [
            h(a(Re), null, {
              default: m(() => [
                h(a(Ne), null, {
                  default: m(() => [
                    ee(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (v(), N(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: b.opt,
          itemProps: b.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ee = /* @__PURE__ */ U({
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
    function u() {
      return l.value ? !l.value.hasError : !1;
    }
    function s() {
      l.value && l.value.resetValidation();
    }
    return W(() => {
      e.registerBehaviourCallbacks(d, u, s);
    }), (x, F) => (v(), N(a(Ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (R) => e.modelValueOnUpdate(R)),
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
}), Jt = /* @__PURE__ */ U({
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
    function u() {
      return l.value ? !l.value.hasError : !1;
    }
    function s() {
      l.value && l.value.resetValidation();
    }
    return W(() => {
      e.registerBehaviourCallbacks(d, u, s);
    }), (x, F) => (v(), N(a(Ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (R) => e.modelValueOnUpdate(R)),
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
}), Kt = /* @__PURE__ */ U({
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
    function u() {
      return l.value ? !l.value.hasError : !1;
    }
    function s() {
      l.value && l.value.resetValidation();
    }
    return W(() => {
      e.registerBehaviourCallbacks(d, u, s);
    }), (x, F) => (v(), N(a(Ce), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[1] || (F[1] = (R) => e.modelValueOnUpdate(R)),
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
      append: m(() => [
        h(a(be), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: m(() => [
            h(a(Ve), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: m(() => [
                h(a(kt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (R) => e.modelValueOnUpdate(R))
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
}), Xt = /* @__PURE__ */ U({
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
    function u() {
      return !!d.value;
    }
    function s() {
      return !!d.value;
    }
    function x() {
    }
    return W(() => {
      e.registerBehaviourCallbacks(u, s, x);
    }), (F, R) => e.modelValue ? (v(), N(a(xt), {
      key: 0,
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (i) => e.modelValueOnUpdate(i)),
      toolbar: c,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: Z(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : Q("", !0);
  }
}), Zt = /* @__PURE__ */ U({
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
function z(o) {
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
const en = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, tn = { class: "col" }, nn = { class: "q-uploader__title" }, an = /* @__PURE__ */ U({
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
      let i = e.modelValue;
      i.add = [], i.delete = [], e.modelValueOnUpdate(i);
    }
    function l() {
      var _;
      let i = e.modelValue;
      i.add = [], i.delete = ((_ = e.field.attachmentData) == null ? void 0 : _.map((C) => C.id)) ?? [], e.modelValueOnUpdate(i);
    }
    function d() {
      return !!n.value;
    }
    function u() {
      return !!n.value;
    }
    function s() {
      n.value;
    }
    function x(i) {
      const _ = i[0];
      if (!_)
        return;
      let C = e.modelValue;
      C.add.push(_), e.modelValueOnUpdate(C);
    }
    function F(i) {
      const _ = i[0];
      if (!_)
        return;
      let C = e.modelValue;
      C.add = C.add.filter((A) => A.key !== _.key), e.modelValueOnUpdate(C);
    }
    function R(i) {
      let _ = e.modelValue;
      _.delete.push(i.id), e.modelValueOnUpdate(_);
    }
    return W(() => {
      e.registerBehaviourCallbacks(d, u, s, c, l);
    }), (i, _) => {
      const C = M("q-spinner"), A = M("q-uploader-add-trigger"), T = M("q-btn"), O = M("q-item-label"), S = M("q-item-section"), k = M("q-item"), b = M("q-list"), P = M("q-separator");
      return v(), N(a(We), {
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
        onAdded: x,
        onRemoved: F
      }, {
        header: m((E) => [
          j("div", en, [
            E.isUploading ? (v(), N(C, {
              key: 0,
              class: "q-uploader__spinner"
            })) : Q("", !0),
            j("div", tn, [
              j("div", nn, L(e.field.label), 1)
            ]),
            E.canAddFiles ? (v(), N(T, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: E.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: m(() => [
                h(A)
              ]),
              _: 1
            }, 8, ["onClick"])) : Q("", !0)
          ])
        ]),
        list: m((E) => [
          _[0] || (_[0] = j("div", null, "Déjà upload", -1)),
          h(b, { separator: "" }, {
            default: m(() => [
              (v(!0), H(ue, null, de(e.field.attachmentData ?? [], (I) => (v(), N(k, {
                key: I.id
              }, {
                default: m(() => [
                  h(S, null, {
                    default: m(() => [
                      h(O, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(L(I.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      h(O, { caption: "" }, {
                        default: m(() => [
                          ee(L(a(Je)(I.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  h(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      h(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => R(I)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }),
          h(P),
          _[1] || (_[1] = j("div", null, "Pending", -1)),
          h(b, { separator: "" }, {
            default: m(() => [
              (v(!0), H(ue, null, de(E.files, (I) => (v(), N(k, {
                key: I.__key
              }, {
                default: m(() => [
                  h(S, null, {
                    default: m(() => [
                      h(O, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(L(I.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      h(O, { caption: "" }, {
                        default: m(() => [
                          ee(L(I.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  h(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      h(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => E.removeFile(I)
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
}), on = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, rn = { class: "col" }, ln = { class: "q-uploader__title" }, sn = { class: "q-uploader__subtitle" }, un = /* @__PURE__ */ U({
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
      let i = e.modelValue;
      i.add = [], i.delete = [], e.modelValueOnUpdate(i);
    }
    function l() {
      var _;
      let i = e.modelValue;
      i.add = [], i.delete = ((_ = e.field.attachmentData) == null ? void 0 : _.map((C) => C.id)) ?? [], e.modelValueOnUpdate(i);
    }
    function d() {
      return !!n.value;
    }
    function u() {
      return !!n.value;
    }
    function s() {
      n.value;
    }
    function x(i) {
      const _ = i;
      if (!_)
        return;
      let C = e.modelValue;
      _.forEach((A) => {
        C.add.push(A);
      }), e.modelValueOnUpdate(C);
    }
    function F(i) {
      const _ = i;
      let C = e.modelValue;
      C.add = C.add.filter((A) => !_.map((T) => T.key).includes(A.key)), e.modelValueOnUpdate(C);
    }
    function R(i) {
      let _ = e.modelValue;
      _.delete.push(i.id), e.modelValueOnUpdate(_);
    }
    return W(() => {
      e.registerBehaviourCallbacks(d, u, s, c, l);
    }), (i, _) => {
      const C = M("q-spinner"), A = M("q-uploader-add-trigger"), T = M("q-btn"), O = M("q-item-label"), S = M("q-item-section"), k = M("q-item"), b = M("q-separator"), P = M("q-list");
      return v(), N(a(We), {
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
        onAdded: x,
        onRemoved: F
      }, {
        header: m((E) => [
          j("div", on, [
            E.isUploading ? (v(), N(C, {
              key: 0,
              class: "q-uploader__spinner"
            })) : Q("", !0),
            j("div", rn, [
              j("div", ln, L(e.field.label), 1),
              j("div", sn, "Total : " + L(E.uploadSizeLabel), 1)
            ]),
            E.canAddFiles ? (v(), N(T, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: E.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: m(() => [
                h(A)
              ]),
              _: 1
            }, 8, ["onClick"])) : Q("", !0)
          ])
        ]),
        list: m((E) => [
          h(P, { separator: "" }, {
            default: m(() => [
              (v(!0), H(ue, null, de(e.field.attachmentData ?? [], (I) => (v(), N(k, {
                key: I.id
              }, {
                default: m(() => [
                  h(S, null, {
                    default: m(() => [
                      h(O, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(L(I.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      h(O, { caption: "" }, {
                        default: m(() => [
                          ee(L(a(Je)(I.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  h(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      h(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => R(I)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              h(b),
              (v(!0), H(ue, null, de(E.files, (I) => (v(), N(k, {
                key: I.__key
              }, {
                default: m(() => [
                  h(S, null, {
                    default: m(() => [
                      h(O, { class: "full-width ellipsis" }, {
                        default: m(() => [
                          ee(L(I.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      h(O, { caption: "" }, {
                        default: m(() => [
                          ee(L(I.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  h(S, {
                    top: "",
                    side: ""
                  }, {
                    default: m(() => [
                      h(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => E.removeFile(I)
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
  constructor(e, t, r, n, c, l, d, u, s) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = d, this.resourceName = e, this.formApi = u, this.formSettings = {
      ...c,
      ...K.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...K.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? K.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? K.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? K.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? K.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? K.getGlobalAssociationDisplayComponent(), this.registerEventCallback = s ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...K.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: K.getGlobalFormStyle(),
      events: {},
      actionComponent: X(K.getGlobalActionComponent()),
      orphanErrorsComponent: X(K.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: X(K.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, r, n, c, l, d, u, s) {
    return new se(
      e,
      t,
      r,
      n,
      c,
      l,
      d,
      u,
      s
    ).generateFormDef();
  }
  generateFormDef() {
    const e = xe.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = xe.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (l, d) => {
        const u = [];
        l.fields.forEach((i) => {
          const _ = this.dynamicComponentRecord[`field-${i.field_name}-before`], C = se.getFieldComponentByFormFieldType(i), A = this.dynamicComponentRecord[`field-${i.field_name}-after`], T = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: se.getRegularFieldTypeByFieldType(
              i.field_type
            )
          };
          let O = i.label;
          this.formSettings.requiredFieldsHasAsterisk && i.rules.find((k) => k.type === "required") && (O = O.concat("*"));
          const S = {
            type: i.field_type,
            extraType: i.field_extra_type,
            metadata: Object.freeze(i),
            label: O,
            hint: i.hint ?? void 0,
            prefix: i.prefix ?? void 0,
            suffix: i.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? i.readonly ?? void 0,
            cssClass: i.css_class ?? void 0,
            staticSelectOptions: i.static_select_options,
            associationData: i.field_association_data,
            attachmentData: i.field_attachment_data,
            rules: i.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: _ ? X(_) : void 0,
            mainComponent: X(C),
            afterComponent: A ? X(A) : void 0,
            events: r.fields[i.field_name] ?? {},
            componentOptions: T
          };
          u.push(S), t.add(i.field_name);
        });
        const s = this.dynamicComponentRecord[`section-${l.name ?? d}-before`], x = this.sectionComponent, F = this.dynamicComponentRecord[`section-${l.name ?? d}-after`], R = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? d.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: r.sections[l.name ?? d.toString()] ?? {},
          beforeComponent: s ? X(s) : void 0,
          mainComponent: X(x),
          afterComponent: F ? X(F) : void 0,
          fields: u
        };
        n.push(R);
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
        return an;
      case "attachmentHasMany":
        return un;
      default:
        return Ee;
    }
  }
}
function dn(o, e, t) {
  const r = t.form, n = (u, s, x) => u[s] ? x ? () => c(u[s]) : () => u[s] : u.compare_to ? () => {
    var F;
    return ((F = t.getFieldByName(u.compare_to)) == null ? void 0 : F.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (u) => String(
    $.formatDate(
      $.extractDate(u, r.formSettings.backendDateFormat),
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
  return o.forEach((u) => {
    const s = u;
    switch (s.type) {
      case "required":
        l.push(cn());
        break;
      case "absence":
        l.push(mn());
        break;
      case "acceptance":
        l.push(pn());
        break;
      case "inclusion":
        l.push(Ke(s.including));
        break;
      case "exclusion":
        l.push(fn(s.excluding));
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
        l.push(hn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          yn(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          _n(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          bn(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Cn(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Sn(n(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Fn(
            n(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(kn());
        break;
      case "numberNumericOnly":
        l.push(Vn());
        break;
      case "numberEvenOnly":
        l.push(xn());
        break;
      case "numberOddOnly":
        l.push(Dn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          An(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Rn(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Nn(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Bn(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          On(
            n(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          En(n(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          qn(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          wn(
            n(s, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          zn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Tn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          In(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          $n(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Un(
            n(s, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Pn(
            n(s, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), d.length > 0 ? d.map((u) => {
    switch (u) {
      case "allowBlank":
        return vn(l);
      case "allowNull":
        return gn(l);
    }
  }) : l;
}
function cn() {
  return (o) => !!o || "Ce champ est requis";
}
function Ke(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function fn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ke.toString()}`
  );
}
function mn() {
  return (o) => !o || "Ce champ doit être vide";
}
function pn() {
  return (o) => !!o || "Doit être accepté";
}
function gn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function vn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function hn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function yn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function _n(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function bn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Cn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Sn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Fn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function kn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Vn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function xn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Dn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function An(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Rn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Nn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Bn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function qn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function En(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function On(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function wn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function zn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n <= c || `Inf. ou égal à ${r}`;
  };
}
function Tn(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n < c || `Inf. à ${r}`;
  };
}
function In(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n >= c || `Sup. ou égal à ${r}`;
  };
}
function $n(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n > c || `Sup. à ${r}`;
  };
}
function Un(o, e) {
  return (t) => {
    const r = o(), n = $.extractDate(String(t), e), c = $.extractDate(r, e);
    return n === c || `Égale à ${n}`;
  };
}
function Pn(o, e) {
  return (t) => {
    const r = o();
    return $.extractDate(String(t), e) !== $.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Me(o) {
  return (e) => e == null || e === "" ? !0 : Ln(e, o) || `Date invalide. Format : ${o}`;
}
function Ln(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = $.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : $.formatDate(t, e) === o;
}
const Hn = {
  computeServerRules: dn
}, Gn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Mn = ["index"], jn = /* @__PURE__ */ U({
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
    const u = A(), s = q(), x = q([]);
    function F() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = i(s.value);
    }
    function R() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = i(s.value), z(t.field.events.onReset), l(), me(() => {
        Se();
      });
    }
    function i(p) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return p == null || p === "" ? !1 : p;
        case "date":
          return p == null || p === "" ? null : $.formatDate(
            $.extractDate(String(p), B.formSettings.backendDateFormat),
            B.formSettings.dateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : $.formatDate(
            $.extractDate(
              String(p),
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
      return p;
    }
    function _(p) {
      const B = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return p == null || p === "" ? null : $.formatDate(
            $.extractDate(String(p), B.formSettings.dateFormat),
            B.formSettings.backendDateFormat
          );
        case "datetime":
          return p == null || p === "" ? null : $.formatDate(
            $.extractDate(String(p), B.formSettings.datetimeFormat),
            B.formSettings.backendDatetimeFormat
          );
      }
      return p;
    }
    function C() {
      switch (t.field.type) {
        case "string":
          s.value = "";
          break;
        case "checkbox":
          s.value = !1;
          break;
        case "date":
          s.value = null;
          break;
        case "datetime":
          s.value = null;
          break;
        case "number":
          s.value = null;
          break;
        case "select":
          s.value = void 0;
          break;
        case "text":
          s.value = "";
          break;
        case "object":
          s.value = {};
          break;
        case "selectBelongsTo":
          s.value = void 0;
          break;
        case "selectHasMany":
          s.value = void 0;
          break;
        case "selectHasAndBelongsToMany":
          s.value = void 0;
          break;
        case "selectHasOne":
          s.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          s.value = {
            add: [],
            delete: []
          };
          break;
      }
      d(), z(t.field.events.onClear);
    }
    function A() {
      return Hn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function T(p) {
      s.value = p;
    }
    function O() {
      return a(s);
    }
    function S() {
      return _(a(s));
    }
    function k(p) {
      x.value = p;
    }
    function b() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !0, z(t.field.events.onHide));
    }
    function P() {
      const p = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      p && (p.hidden = !1, z(t.field.events.onUnhide));
    }
    function E(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.readonly = p);
    }
    function I(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.hint = p);
    }
    function te(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.cssClass = p);
    }
    function ae(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.suffix = p);
    }
    function g(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.prefix = p);
    }
    function V(p) {
      const B = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      B && (B.label = p);
    }
    function G() {
      const p = r();
      return z(t.field.events.onValidated), p;
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
    function Be(p, B, re, pe, Fe) {
      r = p, n = B, c = re, pe && (l = pe), Fe && (d = Fe);
    }
    const _e = {
      softReset: F,
      reset: R,
      clear: C,
      validate: G,
      isValid: he,
      isInvalid: ye,
      hide: b,
      unhide: P,
      resetValidation: Se,
      getValueDeserialized: S,
      getValueSerialized: O,
      setupBackendErrors: k,
      setReadonlyState: E,
      setHint: I,
      setCssClass: te,
      setSuffix: ae,
      setPrefix: g,
      setLabel: V,
      setValue: T,
      field: t.field
    };
    return e(_e), Y(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        z(t.field.events.onUpdate);
      }
    ), Y(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? s.value : null,
      (p) => {
        z(p ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), W(() => {
      var B, re;
      F();
      const p = (B = Ye()) == null ? void 0 : B.exposed;
      p && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        p
      ), z((re = t.field) == null ? void 0 : re.events.onReady);
    }), (p, B) => Oe((v(), H("div", null, [
      t.field.beforeComponent ? (v(), N(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: _e
      }, null, 8, ["formApi"])) : Q("", !0),
      (v(), N(oe(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(u),
        reset: R,
        clear: C,
        getValueDeserialized: S,
        getValueSerialized: O,
        validate: G,
        modelValueOnUpdate: T,
        registerBehaviourCallbacks: Be
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), N(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: _e
      }, null, 8, ["formApi"])) : Q("", !0),
      x.value.length > 0 ? (v(), H("div", Gn, [
        (v(!0), H(ue, null, de(x.value, (re, pe) => (v(), H("div", {
          index: pe,
          class: "flex column"
        }, L(re), 9, Mn))), 256))
      ])) : Q("", !0)
    ], 512)), [
      [we, t.field.hidden !== !0]
    ]);
  }
}), Yn = { class: "flex column" }, Qn = /* @__PURE__ */ U({
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
      softReset: s,
      reset: x,
      clear: F,
      validate: _,
      isValid: C,
      isInvalid: A,
      hide: R,
      unhide: i,
      resetValidation: T,
      getFields: O,
      setReadonlyState: S,
      setCssClass: k,
      setIcon: b,
      setLabel: P,
      section: t.section
    }, d = q(/* @__PURE__ */ new Map());
    function u() {
      t.section.fields.forEach((g) => {
        const V = g.metadata.field_name, G = t.formApi.getFieldByName(V);
        G && d.value.set(V, G);
      });
    }
    function s() {
      d.value.forEach((g) => {
        g.softReset();
      });
    }
    function x() {
      d.value.forEach((g) => {
        g.reset();
      }), z(t.section.events.onReset);
    }
    function F() {
      d.value.forEach((g) => {
        g.clear();
      }), z(t.section.events.onClear);
    }
    function R() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (d.value.forEach((V) => {
        V.hide();
      }), g.hidden = !0, z(t.section.events.onHide));
    }
    function i() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (d.value.forEach((V) => {
        V.unhide();
      }), g.hidden = !1, z(t.section.events.onUnhide));
    }
    function _() {
      let g = !0;
      return d.value.forEach((V) => {
        if (!V.validate()) {
          g = !1;
          return;
        }
      }), z(t.section.events.onValidated), g;
    }
    function C() {
      let g = !0;
      return d.value.forEach((V) => {
        if (!V.isValid()) {
          g = !1;
          return;
        }
      }), g;
    }
    function A() {
      return !C();
    }
    function T() {
      d.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function O() {
      return d.value;
    }
    function S(g) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = g);
    }
    function k(g) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = g);
    }
    function b(g) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = g);
    }
    function P(g) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = g);
    }
    function E() {
      const g = {};
      for (const [V, G] of d.value)
        g[V] = G.getValueSerialized();
      return g;
    }
    e(l);
    const I = ge(() => C()), te = ge(() => A()), ae = ge(() => E());
    return Y(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onIsValid;
      },
      (g) => {
        r == null || r(), r = null, g && (r = Y(I, (V) => {
          V && z(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onIsInvalid;
      },
      (g) => {
        n == null || n(), n = null, g && (n = Y(te, (V) => {
          var G;
          V && z((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onUpdate;
      },
      (g) => {
        c == null || c(), c = null, g && (c = Y(
          ae,
          () => {
            var V;
            z((V = t.section) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), W(() => {
      var V;
      const g = (V = Ye()) == null ? void 0 : V.exposed;
      g && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        g
      ), me(() => {
        var G;
        u(), z((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (g, V) => Oe((v(), H("div", Yn, [
      t.section.beforeComponent ? (v(), N(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0),
      (v(), N(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: m(() => [
          je(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), N(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : Q("", !0)
    ], 512)), [
      [we, t.section.hidden !== !0]
    ]);
  }
}), Wn = { class: "flex column" }, Zn = /* @__PURE__ */ U({
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
    let r = null, n = "", c = 0, l = 0, d = null, u = null, s = null, x = null, F = null;
    const R = Ct(), i = q(se.getEmptyFormBeforeInit()), _ = q(!1), C = q(!1), A = q(!1), T = q(!1), O = q("create"), S = q({}), k = q(/* @__PURE__ */ new Map()), b = q(/* @__PURE__ */ new Map());
    async function P() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), i.value = se.getForm(
        t.resourceName,
        t.resourceId,
        te(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        le,
        t.eventManager
      ), c = i.value.sections.length, l = i.value.sections.map((f) => f.fields).flat().length, t.resourceId && (O.value = "edit");
    }
    async function E() {
      var D, J, ce;
      if (!V())
        return;
      z((D = i.value) == null ? void 0 : D.events.onSubmit), T.value = !0, p();
      const f = ae(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (x = y.resource_data, y.success)
        S.value = {}, O.value === "create" && (O.value = "edit"), r && y.resource_data && (r.resource_data = y.resource_data), i.value = se.getForm(
          t.resourceName,
          t.resourceId,
          te(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          le,
          t.eventManager
        ), ye(), n = JSON.stringify(ae()), z((ce = i.value) == null ? void 0 : ce.events.onSubmitSuccess);
      else {
        S.value = {};
        const fe = [];
        for (const [ne, ie] of b.value) {
          const ke = y.errors[ne];
          ke && (ie.setupBackendErrors(ke), fe.push(ne));
        }
        Object.entries(y.errors).forEach((ne) => {
          fe.includes(ne[0]) || (S.value[ne[0]] = ne[1]);
        }), z((J = i.value) == null ? void 0 : J.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    async function I(f) {
      var J, ce, fe;
      if (!i.value.allowBulk || O.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!V())
        return;
      z((J = i.value) == null ? void 0 : J.events.onSubmit), T.value = !0, p();
      const y = ae(), D = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: y,
        bulkCount: f,
        context: t.context
      });
      if (F = D.bulk_data, D.success)
        S.value = {}, O.value === "create" && (O.value = "edit"), r && D.resource_data && (r.resource_data = D.resource_data), i.value = se.getForm(
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
          le,
          t.eventManager
        ), ye(), n = JSON.stringify(ae()), z((fe = i.value) == null ? void 0 : fe.events.onSubmitSuccess);
      else {
        S.value = {};
        const ne = [];
        for (const [ie, ke] of b.value) {
          const Ue = D.errors[ie];
          Ue && (ke.setupBackendErrors(Ue), ne.push(ie));
        }
        Object.entries(D.errors).forEach((ie) => {
          ne.includes(ie[0]) || (S.value[ie[0]] = ie[1]);
        }), z((ce = i.value) == null ? void 0 : ce.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function te() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in R) {
        const D = R[y];
        if (D) {
          const J = U({
            inheritAttrs: !1,
            setup(ce, { attrs: fe, slots: ne }) {
              return () => D({
                ...ce,
                ...fe,
                slots: ne
              });
            }
          });
          switch (y) {
            case "sections":
              f.sectionComponent = J;
              break;
            case "actions":
              f.actionComponent = J;
              break;
            case "orphan-errors":
              f.orphanErrorsComponent = J;
              break;
            case "association-display":
              f.associationDisplayComponent = J;
              break;
            default:
              f.dynamicComponentRecord[y] = J;
              break;
          }
        }
      }
      return f;
    }
    function ae() {
      const f = {};
      for (const [y, D] of b.value)
        f[y] = D.getValueDeserialized();
      return f;
    }
    function g() {
      const f = {};
      for (const [y, D] of b.value)
        f[y] = D.getValueSerialized();
      return f;
    }
    function V() {
      var y;
      let f = !0;
      return b.value.forEach((D) => {
        if (!D.validate()) {
          f = !1;
          return;
        }
      }), z((y = i.value) == null ? void 0 : y.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return b.value.forEach((y) => {
        if (!y.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function he() {
      return !G();
    }
    function ye() {
      k.value.forEach((f) => {
        f.softReset();
      });
    }
    function Se() {
      var f;
      b.value.forEach((y) => {
        y.reset();
      }), z((f = i.value) == null ? void 0 : f.events.onReset);
    }
    function Be() {
      var f;
      b.value.forEach((y) => {
        y.clear();
      }), z((f = i.value) == null ? void 0 : f.events.onClear);
    }
    function _e() {
      b.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function p() {
      b.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function B(f) {
      if (r)
        return r.resource_data[f];
    }
    function re(f) {
      return k.value.get(f);
    }
    function pe(f) {
      return [...k.value.values()].at(f);
    }
    function Fe() {
      return k.value;
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
      return a(O);
    }
    function at() {
      return n !== JSON.stringify(ae());
    }
    function ot(f) {
      i.value && (i.value.context = f);
    }
    function rt(f) {
      i.value && (i.value.cssClass = f);
    }
    function lt(f) {
      i.value && (i.value.readonly = f);
    }
    function it() {
      return A.value;
    }
    function st() {
      return x;
    }
    function ut() {
      return F;
    }
    function dt() {
      return i;
    }
    function ct(f) {
      var y;
      return (y = i.value) == null ? void 0 : y.sections.find((D) => D.name === f);
    }
    function ft(f) {
      var y;
      return (y = i.value) == null ? void 0 : y.sections.map((D) => D.fields).flat().find((D) => D.metadata.field_name === f);
    }
    function Te(f, y) {
      k.value.set(f, y), c === k.value.size && (_.value = !0);
    }
    function Ie(f, y) {
      b.value.set(f, y), l === b.value.size && (C.value = !0);
    }
    const $e = {
      getFormRef: dt,
      getSectionRef: ct,
      getFieldRef: ft,
      registerSectionWrapperRef: Te,
      registerFieldWrapperRef: Ie
    }, mt = new Proxy({}, {
      get(f, y) {
        var D;
        return (D = i.value) == null ? void 0 : D[y];
      }
    }), le = {
      getMode: nt,
      getSectionByName: re,
      getSectionByIndex: pe,
      getSections: Fe,
      getFieldByName: Xe,
      getFields: Ze,
      validate: V,
      isValid: G,
      isInvalid: he,
      softReset: ye,
      reset: Se,
      clear: Be,
      resetValidation: _e,
      submit: E,
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
    const pt = ge(() => G()), gt = ge(() => he()), vt = ge(() => g());
    return Y(
      () => _.value && C.value,
      (f) => {
        var y;
        f && !A.value && (z((y = i.value) == null ? void 0 : y.events.onReady), A.value = !0);
      }
    ), Y(
      () => {
        var f;
        return (f = i.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        d == null || d(), d = null, f && (d = Y(pt, (y) => {
          var D;
          y && z((D = i.value) == null ? void 0 : D.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var f;
        return (f = i.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        u == null || u(), u = null, f && (u = Y(gt, (y) => {
          var D;
          y && z((D = i.value) == null ? void 0 : D.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var f;
        return (f = i.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        s == null || s(), s = null, f && (s = Y(
          vt,
          () => {
            var y;
            z((y = i.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), W(async () => {
      tt(), await P(), me(() => {
        n = JSON.stringify(ae());
      });
    }), (f, y) => Oe((v(), H("div", Wn, [
      j("div", {
        class: Z(i.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), H(ue, null, de(i.value.sections, (D) => (v(), N(Qn, {
          key: D.name,
          section: D,
          context: t.context,
          formApi: le,
          privateFormApi: $e,
          registerRef: Te
        }, {
          default: m(() => [
            (v(!0), H(ue, null, de(D.fields, (J) => (v(), N(jn, {
              key: J.metadata.field_name,
              field: J,
              context: t.context,
              formApi: le,
              privateFormApi: $e,
              registerRef: Ie
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (v(), N(oe(i.value.orphanErrorsComponent), {
        orphanErrors: S.value,
        formApi: le
      }, null, 8, ["orphanErrors"])),
      (v(), N(oe(i.value.actionComponent), {
        isLoadingSubmit: T.value,
        formApi: le
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [we, A.value]
    ]);
  }
});
export {
  xe as DynamicLogicBuilder,
  K as Submit64,
  Zn as Submit64Form
};
