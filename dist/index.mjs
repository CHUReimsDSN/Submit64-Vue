var dt = Object.defineProperty;
var ft = (o, e, t) => e in o ? dt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var x = (o, e, t) => ft(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as I, createElementBlock as L, openBlock as h, createElementVNode as ae, createVNode as B, createBlock as w, createCommentVNode as W, unref as a, mergeProps as Ae, toDisplayString as Z, renderSlot as Le, resolveComponent as mt, normalizeProps as pt, guardReactiveProps as gt, withCtx as V, createTextVNode as Fe, Fragment as ye, renderList as be, ref as k, onMounted as j, normalizeClass as J, watch as P, nextTick as me, resolveDynamicComponent as X, markRaw as Y, getCurrentInstance as Ge, withDirectives as Ne, vShow as Be, computed as se, useSlots as vt } from "vue";
import { QBtn as ue, QIcon as fe, QItem as ke, QItemSection as Ve, QItemLabel as xe, QInput as pe, QPopupProxy as Ce, QDate as He, QTime as ht, QCheckbox as yt, QSelect as Ee, QColor as bt, useQuasar as Ct, QEditor as _t, date as T } from "quasar";
const St = { class: "flex column" }, Ft = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, kt = /* @__PURE__ */ I({
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
    return (r, n) => (h(), L("div", St, [
      ae("div", Ft, [
        B(a(ue), Ae(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), w(a(ue), Ae({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : W("", !0),
        e.formApi.clear ? (h(), w(a(ue), Ae({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : W("", !0)
      ])
    ]));
  }
}), Vt = { class: "flex row items-center" }, xt = { class: "text-body1 text-weight-medium" }, Dt = { class: "flex column q-gutter-md" }, At = /* @__PURE__ */ I({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), L("div", null, [
      ae("div", Vt, [
        e.sectionApi.section.icon ? (h(), w(a(fe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : W("", !0),
        ae("div", xt, Z(e.sectionApi.section.label), 1)
      ]),
      ae("div", Dt, [
        Le(t.$slots, "default")
      ])
    ]));
  }
}), Rt = /* @__PURE__ */ I({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = mt("q-icon");
      return h(), w(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (s) => e.reset())
      });
    };
  }
}), Nt = /* @__PURE__ */ I({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), w(a(ke), pt(gt(e.itemProps)), {
      default: V(() => [
        B(a(Ve), null, {
          default: V(() => [
            B(a(xe), null, {
              default: V(() => [
                Fe(Z(e.entry.label), 1)
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
}), Bt = { class: "flex column" }, Et = /* @__PURE__ */ I({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), L("div", Bt, [
      (h(!0), L(ye, null, be(e.orphanErrors, (n, s) => (h(), L("div", {
        key: s,
        class: "q-field--error q-field__bottom text-negative"
      }, Z(s) + " : " + Z(n.join(",")), 1))), 128))
    ]));
  }
}), Se = class Se {
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
    }, this._actionComponent = kt, this._orphanErrorsComponent = Et, this._sectionComponent = At, this._wrapperResetComponent = Rt, this._associationDisplayComponent = Nt;
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
x(Se, "_instance", new Se());
let M = Se;
class _e {
  constructor(e) {
    x(this, "formApi");
    x(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, s = new wt(r, n, this.formApi);
    return this.events.push(s), new Ot(s);
  }
  static create(e) {
    return new _e(e);
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
class wt {
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
class Ot {
  constructor(e) {
    x(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Tt = { class: "row items-center justify-end" }, qt = /* @__PURE__ */ I({
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
    }), (d, E) => (h(), w(a(pe), {
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
        B(a(fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Ce), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(He), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": E[0] || (E[0] = (q) => e.modelValueOnUpdate(q)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: V(() => [
                    ae("div", Tt, [
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
}), It = { class: "row items-center justify-end" }, zt = { class: "row items-center justify-end" }, $t = /* @__PURE__ */ I({
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
    }), (q, R) => (h(), w(a(pe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[2] || (R[2] = (N) => e.modelValueOnUpdate(N)),
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
        B(a(fe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(He), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[0] || (R[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: V(() => [
                    ae("div", It, [
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
        B(a(fe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(ht), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[1] || (R[1] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: V(() => [
                    ae("div", zt, [
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
}), Ut = { class: "flex column" }, Pt = {
  key: 0,
  class: "q-field__bottom"
}, Lt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Gt = /* @__PURE__ */ I({
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
    }), (i, c) => (h(), L("div", Ut, [
      B(a(yt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (_) => e.modelValueOnUpdate(_)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: J([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), L("div", Pt, Z(e.field.hint), 1)) : W("", !0),
      t.value !== !0 ? (h(), L("div", Lt, Z(t.value), 1)) : W("", !0)
    ]));
  }
}), Ht = /* @__PURE__ */ I({
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
    function c(R, N) {
      if (R === "") {
        N(() => {
          r.value = [...t.value];
        });
        return;
      }
      N(() => {
        const O = R.toLowerCase();
        r.value = t.value.filter((z) => z.label.toLowerCase().includes(O));
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
    }), (R, N) => (h(), w(a(Ee), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[0] || (N[0] = (O) => e.modelValueOnUpdate(O)),
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
        B(a(ke), {
          dense: a(u).fieldDense
        }, {
          default: V(() => [
            B(a(Ve), null, {
              default: V(() => [
                B(a(xe), null, {
                  default: V(() => [
                    Fe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Ie = "__init", ze = /* @__PURE__ */ I({
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
    ), c = k(), _ = k(Ie);
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
    function R() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function O() {
      e.clear(), i.value = y(), u.value = [], _.value = Ie;
    }
    function z(S) {
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
      me(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        R,
        N,
        E
      );
    }), (S, C) => (h(), w(a(Ee), {
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
      onVirtualScroll: z
    }, {
      "no-option": V(() => [
        B(a(ke), {
          dense: a(s).fieldDense
        }, {
          default: V(() => [
            B(a(Ve), null, {
              default: V(() => [
                B(a(xe), null, {
                  default: V(() => [
                    Fe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), $e = "__init", Ue = /* @__PURE__ */ I({
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
    ), c = k(), _ = k($e);
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
    function R() {
      return c.value ? !c.value.hasError : !1;
    }
    function N() {
      c.value && c.value.resetValidation();
    }
    function O() {
      e.clear(), i.value = y(), u.value = [], _.value = $e;
    }
    function z(S) {
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
      me(() => {
        E();
      }), e.registerBehaviourCallbacks(
        q,
        R,
        N,
        E
      );
    }), (S, C) => (h(), w(a(Ee), {
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
      onVirtualScroll: z
    }, {
      "no-option": V(() => [
        B(a(ke), {
          dense: a(s).fieldDense
        }, {
          default: V(() => [
            B(a(Ve), null, {
              default: V(() => [
                B(a(xe), null, {
                  default: V(() => [
                    Fe(Z(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Re = /* @__PURE__ */ I({
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
    }), (_, y) => (h(), w(a(pe), {
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
}), Mt = /* @__PURE__ */ I({
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
    }), (_, y) => (h(), w(a(pe), {
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
}), Yt = /* @__PURE__ */ I({
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
    }), (_, y) => (h(), w(a(pe), {
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
        B(a(fe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: V(() => [
            B(a(Ce), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: V(() => [
                B(a(bt), {
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
}), jt = /* @__PURE__ */ I({
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
    const e = o, t = Ct(), n = e.formApi.form.formStyle, s = [
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
    }), (y, d) => e.modelValue ? (h(), w(a(_t), {
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
}), Qt = /* @__PURE__ */ I({
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
      ...M.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...M.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? M.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? M.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? M.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? M.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? M.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
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
    const e = _e.create(this.formApi);
    this.registerEventCallback(e);
    const t = _e.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (s, l) => {
        const u = [];
        s.fields.forEach((d) => {
          const E = this.dynamicComponentRecord[`field-${d.field_name}-before`], q = ne.getFieldComponentByFormFieldType(d), R = this.dynamicComponentRecord[`field-${d.field_name}-after`], N = {
            associationDisplayComponent: Y(
              this.associationDisplayComponent
            ),
            regularFieldType: ne.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let O = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((S) => S.type === "required") && (O = O.concat("*"));
          const z = {
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
            afterComponent: R ? Y(R) : void 0,
            events: t.fields[d.field_name] ?? {},
            componentOptions: N
          };
          u.push(z);
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
            return Yt;
          case "wysiwyg":
            return jt;
          default:
            return Re;
        }
      case "text":
        return Re;
      case "number":
        return Mt;
      case "date":
        return qt;
      case "datetime":
        return $t;
      case "select":
        return Ht;
      case "selectBelongsTo":
        return ze;
      case "selectHasMany":
        return Ue;
      case "selectHasAndBelongsToMany":
        return Ue;
      case "selectHasOne":
        return ze;
      case "checkbox":
        return Gt;
      case "object":
        return Qt;
      default:
        return Re;
    }
  }
}
function A(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function Wt(o, e, t) {
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
      l.push(Pe(r.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Pe(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((i) => {
    const c = i;
    switch (c.type) {
      case "required":
        l.push(Jt());
        break;
      case "absence":
        l.push(Xt());
        break;
      case "acceptance":
        l.push(Zt());
        break;
      case "inclusion":
        l.push(Me(c.including));
        break;
      case "exclusion":
        l.push(Kt(c.excluding));
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
        l.push(nn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          an(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          on(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          rn(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          ln(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          sn(n(c, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          un(
            n(c, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(cn());
        break;
      case "numberNumericOnly":
        l.push(dn());
        break;
      case "numberEvenOnly":
        l.push(fn());
        break;
      case "numberOddOnly":
        l.push(mn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          pn(
            n(c, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          gn(
            n(c, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          vn(
            n(c, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          hn(
            n(c, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Cn(
            n(c, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          bn(n(c, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          yn(
            () => c.min,
            () => c.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          _n(
            n(c, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        l.push(
          Sn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Fn(
            n(c, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          kn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Vn(
            n(c, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          xn(
            n(c, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Dn(
            n(c, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((i) => {
    switch (i) {
      case "allowBlank":
        return tn(l);
      case "allowNull":
        return en(l);
    }
  }) : l;
}
function Jt() {
  return (o) => !!o || "Ce champ est requis";
}
function Me(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Kt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Me.toString()}`
  );
}
function Xt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Zt() {
  return (o) => !!o || "Doit être accepté";
}
function en(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function tn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function nn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function an(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function on(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function rn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ln(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function sn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function un(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function cn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function dn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function fn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function mn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function pn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function gn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function vn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function hn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function yn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function bn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Cn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function _n(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Sn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n <= s || `Inf. ou égal à ${r}`;
  };
}
function Fn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n < s || `Inf. à ${r}`;
  };
}
function kn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n >= s || `Sup. ou égal à ${r}`;
  };
}
function Vn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n > s || `Sup. à ${r}`;
  };
}
function xn(o, e) {
  return (t) => {
    const r = o(), n = T.extractDate(String(t), e), s = T.extractDate(r, e);
    return n === s || `Égale à ${n}`;
  };
}
function Dn(o, e) {
  return (t) => {
    const r = o();
    return T.extractDate(String(t), e) !== T.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Pe(o) {
  return (e) => e == null || e === "" ? !0 : An(e, o) || `Date invalide. Format : ${o}`;
}
function An(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = T.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : T.formatDate(t, e) === o;
}
const Rn = {
  computeServerRules: Wt
}, Nn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, Bn = ["index"], En = /* @__PURE__ */ I({
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
    const u = q(), i = k(), c = k([]);
    function _(m = !0) {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = y(i.value), m && A(t.field.events.onReset), l(), me(() => {
        ve();
      });
    }
    function y(m) {
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
    function d(m) {
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
    function E() {
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
      A(t.field.events.onClear);
    }
    function q() {
      return Rn.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function R(m) {
      i.value = m;
    }
    function N() {
      return a(i);
    }
    function O() {
      return d(a(i));
    }
    function z(m) {
      c.value = m;
    }
    function S() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0, A(t.field.events.onHide));
    }
    function C() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1, A(t.field.events.onUnhide));
    }
    function D(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.readonly = m);
    }
    function U(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.hint = m);
    }
    function $(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.cssClass = m);
    }
    function oe(m) {
      const F = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      F && (F.suffix = m);
    }
    function K(m) {
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
      return A(t.field.events.onValidated), m;
    }
    function G() {
      return n();
    }
    function ge() {
      return !G();
    }
    function ve() {
      return s();
    }
    function De(m, F, de, le) {
      r = m, n = F, s = de, le && (l = le);
    }
    const ce = {
      reset: _,
      clear: E,
      validate: v,
      isValid: G,
      isInvalid: ge,
      hide: S,
      unhide: C,
      resetValidation: ve,
      getValueDeserialized: O,
      getValueSerialized: N,
      setupBackendErrors: z,
      setReadonlyState: D,
      setHint: U,
      setCssClass: $,
      setSuffix: oe,
      setPrefix: K,
      setLabel: p,
      setValue: R,
      field: t.field
    };
    return e(ce), P(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        A(t.field.events.onUpdate);
      }
    ), P(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (m) => {
        A(m ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), j(() => {
      var F;
      _(!1);
      const m = (F = Ge()) == null ? void 0 : F.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, F) => Ne((h(), L("div", null, [
      t.field.beforeComponent ? (h(), w(X(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ce
      }, null, 8, ["formApi"])) : W("", !0),
      (h(), w(X(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(u),
        reset: _,
        clear: E,
        getValueDeserialized: O,
        getValueSerialized: N,
        validate: v,
        modelValueOnUpdate: R,
        registerBehaviourCallbacks: De
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), w(X(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ce
      }, null, 8, ["formApi"])) : W("", !0),
      c.value.length > 0 ? (h(), L("div", Nn, [
        (h(!0), L(ye, null, be(c.value, (de, le) => (h(), L("div", {
          index: le,
          class: "flex column"
        }, Z(de), 9, Bn))), 256))
      ])) : W("", !0)
    ], 512)), [
      [Be, t.field.hidden !== !0]
    ]);
  }
}), wn = { class: "flex column" }, On = /* @__PURE__ */ I({
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
      reset: c,
      clear: _,
      validate: E,
      isValid: q,
      isInvalid: R,
      hide: y,
      unhide: d,
      resetValidation: N,
      getFields: O,
      setReadonlyState: z,
      setCssClass: S,
      setIcon: C,
      setLabel: D,
      section: t.section
    }, u = k(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((p) => {
        const v = p.metadata.field_name, G = t.formApi.getFieldByName(v);
        G && u.value.set(v, G);
      });
    }
    function c() {
      u.value.forEach((p) => {
        p.reset();
      }), A(t.section.events.onReset);
    }
    function _() {
      u.value.forEach((p) => {
        p.clear();
      }), A(t.section.events.onClear);
    }
    function y() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((v) => {
        v.hide();
      }), p.hidden = !0, A(t.section.events.onHide));
    }
    function d() {
      const p = t.privateFormApi.getSectionRef(
        t.section.name
      );
      p && (u.value.forEach((v) => {
        v.unhide();
      }), p.hidden = !1, A(t.section.events.onUnhide));
    }
    function E() {
      let p = !0;
      return u.value.forEach((v) => {
        if (!v.validate()) {
          p = !1;
          return;
        }
      }), A(t.section.events.onValidated), p;
    }
    function q() {
      let p = !0;
      return u.value.forEach((v) => {
        if (!v.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function R() {
      return !q();
    }
    function N() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function O() {
      return u.value;
    }
    function z(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.readonly = p);
    }
    function S(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.cssClass = p);
    }
    function C(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.icon = p);
    }
    function D(p) {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (v.label = p);
    }
    function U() {
      const p = {};
      for (const [v, G] of u.value)
        p[v] = G.getValueSerialized();
      return p;
    }
    e(l);
    const $ = se(() => q()), oe = se(() => R()), K = se(() => U());
    return P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = P($, (v) => {
          v && A(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var p;
        return (p = t.section) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        n == null || n(), n = null, p && (n = P(oe, (v) => {
          var G;
          v && A((G = t.section) == null ? void 0 : G.events.onIsInvalid);
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
          K,
          () => {
            var v;
            A((v = t.section) == null ? void 0 : v.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(() => {
      var v;
      const p = (v = Ge()) == null ? void 0 : v.exposed;
      p && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        p
      ), me(() => {
        i();
      });
    }), (p, v) => Ne((h(), L("div", wn, [
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
          Le(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), w(X(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : W("", !0)
    ], 512)), [
      [Be, t.section.hidden !== !0]
    ]);
  }
}), Tn = { class: "flex column" }, $n = /* @__PURE__ */ I({
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
    const y = vt(), d = k(ne.getEmptyFormBeforeInit()), E = k(!1), q = k(!1), R = k(!1), N = k(!1), O = k("create"), z = k({}), S = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map());
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
      var b, H, re;
      if (!v())
        return;
      A((b = d.value) == null ? void 0 : b.events.onSubmit), N.value = !0, m();
      const f = K(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (g.success)
        z.value = {}, O.value === "create" && (O.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(K()), d.value = ne.getForm(
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
        ), A((re = d.value) == null ? void 0 : re.events.onSubmitSuccess);
      else {
        z.value = {};
        const ie = [];
        for (const [Q, te] of C.value) {
          const he = g.errors[Q];
          he && (te.setupBackendErrors(he), ie.push(Q));
        }
        Object.entries(g.errors).forEach((Q) => {
          ie.includes(Q[0]) || (z.value[Q[0]] = Q[1]);
        }), A((H = d.value) == null ? void 0 : H.events.onSubmitUnsuccess);
      }
      N.value = !1;
    }
    async function $(f) {
      var H, re, ie;
      if (!d.value.allowBulk || O.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!v())
        return;
      A((H = d.value) == null ? void 0 : H.events.onSubmit), N.value = !0, m();
      const g = K(), b = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: g,
        bulkCount: f,
        context: t.context
      });
      if (_ = b.bulk_data, b.success)
        z.value = {}, O.value === "create" && (O.value = "edit"), r && b.resource_data && (r.resource_data = b.resource_data), n = JSON.stringify(K()), d.value = ne.getForm(
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
        ), A((ie = d.value) == null ? void 0 : ie.events.onSubmitSuccess);
      else {
        z.value = {};
        const Q = [];
        for (const [te, he] of C.value) {
          const qe = b.errors[te];
          qe && (he.setupBackendErrors(qe), Q.push(te));
        }
        Object.entries(b.errors).forEach((te) => {
          Q.includes(te[0]) || (z.value[te[0]] = te[1]);
        }), A((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      N.value = !1;
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
          const H = I({
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
      for (const [g, b] of C.value)
        f[g] = b.getValueDeserialized();
      return f;
    }
    function p() {
      const f = {};
      for (const [g, b] of C.value)
        f[g] = b.getValueSerialized();
      return f;
    }
    function v() {
      var g;
      let f = !0;
      return C.value.forEach((b) => {
        if (!b.validate()) {
          f = !1;
          return;
        }
      }), A((g = d.value) == null ? void 0 : g.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return C.value.forEach((g) => {
        if (!g.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function ge() {
      return !G();
    }
    function ve() {
      var f;
      C.value.forEach((g) => {
        g.reset();
      }), A((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function De() {
      var f;
      C.value.forEach((g) => {
        g.clear();
      }), A((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function ce() {
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
    function de(f) {
      return S.value.get(f);
    }
    function le(f) {
      return [...S.value.values()].at(f);
    }
    function Ye() {
      return S.value;
    }
    function je(f) {
      return C.value.get(f);
    }
    function Qe() {
      return C.value;
    }
    function We() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Je() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function Ke() {
      return a(O);
    }
    function Xe() {
      return n !== JSON.stringify(K());
    }
    function Ze(f) {
      d.value && (d.value.context = f);
    }
    function et(f) {
      d.value && (d.value.cssClass = f);
    }
    function tt(f) {
      d.value && (d.value.readonly = f);
    }
    function nt() {
      return R.value;
    }
    function at() {
      return _;
    }
    function ot() {
      return d;
    }
    function rt(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.find((b) => b.name === f);
    }
    function it(f) {
      var g;
      return (g = d.value) == null ? void 0 : g.sections.map((b) => b.fields).flat().find((b) => b.metadata.field_name === f);
    }
    function we(f, g) {
      S.value.set(f, g), s === S.value.size && (E.value = !0);
    }
    function Oe(f, g) {
      C.value.set(f, g), l === C.value.size && (q.value = !0);
    }
    const Te = {
      getFormRef: ot,
      getSectionRef: rt,
      getFieldRef: it,
      registerSectionWrapperRef: we,
      registerFieldWrapperRef: Oe
    }, lt = new Proxy({}, {
      get(f, g) {
        var b;
        return (b = d.value) == null ? void 0 : b[g];
      }
    }), ee = {
      getMode: Ke,
      getSectionByName: de,
      getSectionByIndex: le,
      getSections: Ye,
      getFieldByName: je,
      getFields: Qe,
      validate: v,
      isValid: G,
      isInvalid: ge,
      reset: ve,
      clear: De,
      resetValidation: ce,
      submit: U,
      submitBulk: $,
      valuesHasChanged: Xe,
      getInitialValueByFieldName: F,
      getAssociationDataCallback: We,
      setContext: Ze,
      setCssClass: et,
      setReadonlyState: tt,
      isReady: nt,
      getBulkSubmitData: at,
      form: lt
    };
    e(ee);
    const st = se(() => G()), ut = se(() => ge()), ct = se(() => p());
    return P(
      () => E.value && q.value,
      (f) => {
        var g;
        f && !R.value && (A((g = d.value) == null ? void 0 : g.events.onReady), R.value = !0);
      }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        u == null || u(), u = null, f && (u = P(st, (g) => {
          var b;
          g && A((b = d.value) == null ? void 0 : b.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), P(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        i == null || i(), i = null, f && (i = P(ut, (g) => {
          var b;
          g && A((b = d.value) == null ? void 0 : b.events.onIsInvalid);
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
          ct,
          () => {
            var g;
            A((g = d.value) == null ? void 0 : g.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), j(async () => {
      Je(), await D(), me(() => {
        n = JSON.stringify(K());
      });
    }), (f, g) => Ne((h(), L("div", Tn, [
      ae("div", {
        class: J(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), L(ye, null, be(d.value.sections, (b) => (h(), w(On, {
          key: b.name,
          section: b,
          context: t.context,
          formApi: ee,
          privateFormApi: Te,
          registerRef: we
        }, {
          default: V(() => [
            (h(!0), L(ye, null, be(b.fields, (H) => (h(), w(En, {
              key: H.metadata.field_name,
              field: H,
              context: t.context,
              formApi: ee,
              privateFormApi: Te,
              registerRef: Oe
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), w(X(d.value.orphanErrorsComponent), {
        orphanErrors: z.value,
        formApi: ee
      }, null, 8, ["orphanErrors"])),
      (h(), w(X(d.value.actionComponent), {
        isLoadingSubmit: N.value,
        formApi: ee
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [Be, R.value]
    ]);
  }
});
export {
  _e as DynamicLogicBuilder,
  M as Submit64,
  $n as Submit64Form
};
