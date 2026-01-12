var yt = Object.defineProperty;
var bt = (r, e, t) => e in r ? yt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var T = (r, e, t) => bt(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as P, createElementBlock as $, openBlock as h, createElementVNode as M, createVNode as C, createBlock as E, createCommentVNode as H, unref as a, mergeProps as Ee, toDisplayString as L, renderSlot as Ye, resolveComponent as re, normalizeProps as _t, guardReactiveProps as Ct, withCtx as g, createTextVNode as ee, Fragment as fe, renderList as me, ref as q, onMounted as Y, nextTick as ye, normalizeClass as Z, watch as j, resolveDynamicComponent as oe, computed as ve, markRaw as X, getCurrentInstance as We, withDirectives as we, vShow as ze, useSlots as St } from "vue";
import { QBtn as ae, QIcon as ke, QItem as _e, QItemSection as ue, QItemLabel as de, QInput as Ve, QPopupProxy as Re, QDate as Je, QTime as Ft, QCheckbox as kt, QSelect as $e, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as Ke, QList as He, QSeparator as At, QUploaderAddTrigger as Rt, date as U } from "quasar";
const Bt = { class: "flex column" }, Nt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, qt = /* @__PURE__ */ P({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(r) {
    const e = r;
    function t() {
      const o = e.formApi.form.formStyle;
      return {
        outline: o.fieldOutlined,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        color: o.fieldColor,
        noCaps: !0
      };
    }
    return (o, n) => (h(), $("div", Bt, [
      M("div", Nt, [
        C(a(ae), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), E(a(ae), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (h(), E(a(ae), Ee({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : H("", !0)
      ])
    ]));
  }
}), Et = { class: "flex row items-center" }, Tt = { class: "text-body1 text-weight-medium" }, Ot = { class: "flex column q-gutter-md" }, wt = /* @__PURE__ */ P({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (h(), $("div", null, [
      M("div", Et, [
        e.sectionApi.section.icon ? (h(), E(a(ke), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        M("div", Tt, L(e.sectionApi.section.label), 1)
      ]),
      M("div", Ot, [
        Ye(t.$slots, "default")
      ])
    ]));
  }
}), zt = /* @__PURE__ */ P({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = re("q-icon");
      return h(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (u) => e.reset())
      });
    };
  }
}), $t = /* @__PURE__ */ P({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (h(), E(a(_e), _t(Ct(e.itemProps)), {
      default: g(() => [
        C(a(ue), null, {
          default: g(() => [
            C(a(de), null, {
              default: g(() => [
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
}), It = { class: "flex column" }, Ut = /* @__PURE__ */ P({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (h(), $("div", It, [
      (h(!0), $(fe, null, me(e.orphanErrors, (n, u) => (h(), $("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, L(u) + " : " + L(n.join(",")), 1))), 128))
    ]));
  }
}), Ne = class Ne {
  constructor() {
    T(this, "_formSettings");
    T(this, "_formStyle");
    T(this, "_actionComponent");
    T(this, "_orphanErrorsComponent");
    T(this, "_sectionComponent");
    T(this, "_wrapperResetComponent");
    T(this, "_associationDisplayComponent");
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
    }, this._actionComponent = qt, this._orphanErrorsComponent = Ut, this._sectionComponent = wt, this._wrapperResetComponent = zt, this._associationDisplayComponent = $t;
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
T(Ne, "_instance", new Ne());
let J = Ne;
class Be {
  constructor(e) {
    T(this, "formApi");
    T(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const o = e, n = t, u = new Lt(o, n, this.formApi);
    return this.events.push(u), new Pt(u);
  }
  static create(e) {
    return new Be(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((o) => {
      const n = o.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(o.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(o.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            o.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class Lt {
  constructor(e, t, o) {
    T(this, "type");
    T(this, "data");
    T(this, "formApi");
    T(this, "action", () => {
    });
    T(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = o;
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
class Pt {
  constructor(e) {
    T(this, "formEvent");
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = q(), c = q();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? !c.value.hasError : !1;
    }
    function F() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(i, x, F), u || ye(() => {
        var B;
        (B = c.value) == null || B.resetValidation();
      });
    }), (B, d) => (h(), E(a(Ve), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[1] || (d[1] = (R) => e.modelValueOnUpdate(R)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        C(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            C(a(Re), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                C(a(Je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": d[0] || (d[0] = (R) => e.modelValueOnUpdate(R)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: g(() => [
                    M("div", Ht, [
                      C(a(ae), {
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = q(), c = q(), s = q();
    function i() {
      l.value && l.value.hide();
    }
    function x() {
      c.value && c.value.hide();
    }
    function F() {
      return s.value ? s.value.validate() : !1;
    }
    function B() {
      return s.value ? !s.value.hasError : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(F, B, d), u || ye(() => {
        var R;
        (R = s.value) == null || R.resetValidation();
      });
    }), (R, D) => (h(), E(a(Ve), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": D[2] || (D[2] = (k) => e.modelValueOnUpdate(k)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        C(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            C(a(Re), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                C(a(Je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[0] || (D[0] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: g(() => [
                    M("div", Mt, [
                      C(a(ae), {
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
        C(a(ke), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            C(a(Re), {
              ref_key: "timePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                C(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": D[1] || (D[1] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: g(() => [
                    M("div", Qt, [
                      C(a(ae), {
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
  setup(r) {
    const e = r, t = q(!0), n = e.formApi.form.formStyle;
    function u() {
      return t.value === !0;
    }
    function l() {
      return t.value === !0;
    }
    function c() {
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
      e.registerBehaviourCallbacks(u, l, c);
    }), (s, i) => (h(), $("div", Yt, [
      C(a(kt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (x) => e.modelValueOnUpdate(x)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: Z([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), $("div", Wt, L(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (h(), $("div", Jt, L(t.value), 1)) : H("", !0)
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
  setup(r) {
    const e = r, t = q([]), o = q([]), n = q(), u = e.formApi.form, l = u.formSettings, c = u.formStyle, s = l.rulesBehaviour === "lazy";
    function i(D, k) {
      if (D === "") {
        k(() => {
          o.value = [...t.value];
        });
        return;
      }
      k(() => {
        const w = D.toLowerCase();
        o.value = t.value.filter((b) => b.label.toLowerCase().includes(w));
      });
    }
    function x() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), o.value = e.field.staticSelectOptions ?? [];
    }
    function F() {
      return n.value ? n.value.validate() : !1;
    }
    function B() {
      return n.value ? !n.value.hasError : !1;
    }
    function d() {
      n.value && n.value.resetValidation();
    }
    function R() {
      o.value = [];
    }
    return Y(() => {
      x(), e.registerBehaviourCallbacks(F, B, d, void 0, R);
    }), (D, k) => (h(), E(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (w) => e.modelValueOnUpdate(w)),
      type: e.field.componentOptions.regularFieldType,
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
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: o.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: i
    }, {
      "no-option": g(() => [
        C(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: g(() => [
            C(a(ue), null, {
              default: g(() => [
                C(a(de), null, {
                  default: g(() => [
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
}), Ge = "__init", Me = /* @__PURE__ */ P({
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
  setup(r) {
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = q([]), s = q(
      F()
    ), i = q(), x = q(Ge);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function B(m, v) {
      if (m === x.value) {
        v(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = F(), x.value = m;
      const I = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: I.context
      }).then((z) => {
        v(() => {
          c.value = z.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            z.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = F();
      });
    }
    function d() {
      var v, p;
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (c.value = [
        {
          label: ((v = e.field.associationData[0]) == null ? void 0 : v.label) ?? "???",
          value: m,
          data: (p = e.field.associationData[0]) == null ? void 0 : p.data
        }
      ]);
    }
    function R() {
      return i.value ? i.value.validate() : !1;
    }
    function D() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function w() {
      s.value = F(), c.value = [], x.value = Ge;
    }
    function b(m) {
      const v = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === v && v !== -1) {
        const p = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, I({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: p.context
        }).then((z) => {
          c.value = c.value.concat(
            z.rows
          ), s.value.lastPage = Math.ceil(
            z.row_count / s.value.limit
          ), z.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        R,
        D,
        k,
        d,
        w
      ), ye(() => {
        d();
      });
    }), (m, v) => (h(), E(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: c.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: B,
      onVirtualScroll: b
    }, {
      "no-option": g(() => [
        C(a(_e), {
          dense: a(u).fieldDense
        }, {
          default: g(() => [
            C(a(ue), null, {
              default: g(() => [
                C(a(de), null, {
                  default: g(() => [
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
      option: g((p) => [
        (h(), E(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: p.opt,
          itemProps: p.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Qe = "__init", je = /* @__PURE__ */ P({
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
  setup(r) {
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = q([]), s = q(
      F()
    ), i = q(), x = q(Qe);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function B(m, v) {
      if (m === x.value) {
        v(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = F(), x.value = m;
      const I = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: I.resourceName,
        resourceId: I.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: I.context
      }).then((z) => {
        v(() => {
          c.value = z.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            z.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = F();
      });
    }
    function d() {
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (c.value = m.map((v, p) => ({
        label: e.field.associationData[p].label ?? "???",
        value: v,
        data: e.field.associationData[p].data
      })));
    }
    function R() {
      return i.value ? i.value.validate() : !1;
    }
    function D() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function w() {
      s.value = F(), c.value = [], x.value = Qe;
    }
    function b(m) {
      const v = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === v && v !== -1) {
        const p = e.formApi.form, I = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, I({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: p.context
        }).then((z) => {
          c.value = c.value.concat(
            z.rows
          ), s.value.lastPage = Math.ceil(
            z.row_count / s.value.limit
          ), z.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        R,
        D,
        k,
        d,
        w
      ), ye(() => {
        d();
      });
    }), (m, v) => (h(), E(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: Z(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: c.value,
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
        C(a(_e), {
          dense: a(u).fieldDense
        }, {
          default: g(() => [
            C(a(ue), null, {
              default: g(() => [
                C(a(de), null, {
                  default: g(() => [
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
      option: g((p) => [
        (h(), E(oe(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: p.opt,
          itemProps: p.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Te = /* @__PURE__ */ P({
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = q();
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i);
    }), (x, F) => (h(), E(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (B) => e.modelValueOnUpdate(B)),
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = q();
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i);
    }), (x, F) => (h(), E(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[0] || (F[0] = (B) => e.modelValueOnUpdate(B)),
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
      "lazy-rules": u,
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = q();
    function c() {
      return l.value ? l.value.validate() : !1;
    }
    function s() {
      return l.value ? !l.value.hasError : !1;
    }
    function i() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i);
    }), (x, F) => (h(), E(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[1] || (F[1] = (B) => e.modelValueOnUpdate(B)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: g(() => [
        C(a(ke), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: g(() => [
            C(a(Re), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: g(() => [
                C(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (B) => e.modelValueOnUpdate(B))
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
  setup(r) {
    const e = r, t = xt(), n = e.formApi.form.formStyle, u = [
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
    }, c = q();
    function s() {
      return !!c.value;
    }
    function i() {
      return !!c.value;
    }
    function x() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, i, x);
    }), (F, B) => e.modelValue ? (h(), E(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[0] || (B[0] = (d) => e.modelValueOnUpdate(d)),
      toolbar: u,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: Z(e.field.cssClass),
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
  setup(r) {
    const t = r.formApi.form, o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
});
function O(r) {
  r == null || r.forEach((e) => {
    e();
  });
}
function pe(r) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(r.toString(), 10) >= 1024 && t < e.length - 1; )
    r /= 1024, ++t;
  return `${r.toFixed(1)}${e[t]}`;
}
const an = { class: "flex column" }, on = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, rn = { class: "col" }, ln = { class: "q-uploader__title" }, sn = {
  key: 0,
  class: "caption"
}, un = {
  key: 0,
  class: "flex column"
}, dn = {
  key: 2,
  class: "flex column"
}, cn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, fn = /* @__PURE__ */ P({
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
  setup(r) {
    const e = r, o = e.formApi.form.formStyle, n = q(null);
    function u() {
      let b = e.modelValue;
      b.add = [], b.delete = [], e.modelValueOnUpdate(b), k();
    }
    function l() {
      var m;
      let b = e.modelValue;
      b.add = [], b.delete = ((m = e.field.attachmentData) == null ? void 0 : m.map((v) => v.id)) ?? [], e.modelValueOnUpdate(b), k();
    }
    function c() {
      return k(), s();
    }
    function s() {
      return n.value === null;
    }
    function i() {
      n.value = null;
    }
    async function x(b) {
      return new Promise((m) => {
        const v = new Blob([b]), p = new FileReader();
        p.onload = (I) => {
          var K;
          const z = ((K = I.target) == null ? void 0 : K.result) ?? "", [Q, te] = z.split(",");
          m(te);
        }, p.readAsDataURL(v);
      });
    }
    async function F(b) {
      return {
        key: `${b.lastModified}${b.name}`,
        size: b.size,
        filename: b.name,
        contentType: b.type,
        base64: await x(await b.arrayBuffer())
      };
    }
    async function B(b) {
      if (!b[0])
        return;
      const m = await F(b[0]);
      let v = e.modelValue;
      v.add.push(m), e.modelValueOnUpdate(v), k();
    }
    async function d(b) {
      if (!b[0])
        return;
      const m = await F(b[0]);
      let v = e.modelValue;
      v.add = v.add.filter((p) => p.key !== m.key), e.modelValueOnUpdate(v), k();
    }
    function R(b) {
      let m = e.modelValue;
      m.delete.push(b.id), e.modelValueOnUpdate(m), k();
    }
    function D(b) {
      let m = e.modelValue;
      m.delete = m.delete.filter((v) => v !== b.id), e.modelValueOnUpdate(m), k();
    }
    function k() {
      n.value = null;
      for (const b of e.rules) {
        const m = b(e.modelValue);
        if (typeof m == "string") {
          n.value = m;
          break;
        }
      }
    }
    const w = ve(() => (e.field.attachmentData ?? []).length === 0);
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (b, m) => (h(), $("div", an, [
      C(a(Ke), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: B,
        onRemoved: d,
        style: { width: "inherit" }
      }, {
        header: g((v) => [
          M("div", on, [
            M("div", rn, [
              M("div", ln, L(e.field.label), 1),
              e.field.hint ? (h(), $("div", sn, L(e.field.hint), 1)) : H("", !0)
            ]),
            v.canAddFiles ? (h(), E(a(ae), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: v.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: g(() => [
                C(a(Rt))
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: g((v) => [
          w.value ? H("", !0) : (h(), $("div", un, [
            m[0] || (m[0] = M("div", null, "Fichier en ligne", -1)),
            C(a(He), { separator: "" }, {
              default: g(() => [
                (h(!0), $(fe, null, me(e.field.attachmentData ?? [], (p) => (h(), E(a(_e), {
                  key: p.id
                }, {
                  default: g(() => [
                    C(a(ue), null, {
                      default: g(() => [
                        C(a(de), { class: "full-width ellipsis" }, {
                          default: g(() => [
                            ee(L(p.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(de), { caption: "" }, {
                          default: g(() => [
                            ee(L(a(pe)(p.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    C(a(ue), {
                      top: "",
                      side: ""
                    }, {
                      default: g(() => [
                        C(a(ae), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (I) => R(p)
                        }, null, 8, ["disable", "onClick"]),
                        C(a(ae), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: (I) => D(p)
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
          !w.value && v.files.length > 0 ? (h(), E(a(At), { key: 1 })) : H("", !0),
          v.files.length > 0 ? (h(), $("div", dn, [
            m[1] || (m[1] = M("div", null, "Fichier à télécharger", -1)),
            C(a(He), { separator: "" }, {
              default: g(() => [
                (h(!0), $(fe, null, me(v.files, (p) => (h(), E(a(_e), {
                  key: p.__key
                }, {
                  default: g(() => [
                    C(a(ue), null, {
                      default: g(() => [
                        C(a(de), { class: "full-width ellipsis" }, {
                          default: g(() => [
                            ee(L(p.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(de), { caption: "" }, {
                          default: g(() => [
                            ee(L(p.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    C(a(ue), {
                      top: "",
                      side: ""
                    }, {
                      default: g(() => [
                        C(a(ae), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (I) => v.removeFile(p)
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
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (h(), $("div", cn, L(n.value), 1)) : H("", !0)
    ]));
  }
}), mn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, pn = { class: "col" }, gn = { class: "q-uploader__title" }, hn = { class: "q-uploader__subtitle" }, vn = /* @__PURE__ */ P({
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
  setup(r) {
    const e = r, o = e.formApi.form.formStyle, n = q();
    function u() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d);
    }
    function l() {
      var R;
      let d = e.modelValue;
      d.add = [], d.delete = ((R = e.field.attachmentData) == null ? void 0 : R.map((D) => D.id)) ?? [], e.modelValueOnUpdate(d);
    }
    function c() {
      return !!n.value;
    }
    function s() {
      return !!n.value;
    }
    function i() {
      n.value;
    }
    function x(d) {
      const R = d;
      if (!R)
        return;
      let D = e.modelValue;
      R.forEach((k) => {
        D.add.push(k);
      }), e.modelValueOnUpdate(D);
    }
    function F(d) {
      const R = d;
      let D = e.modelValue;
      D.add = D.add.filter((k) => !R.map((w) => w.key).includes(k.key)), e.modelValueOnUpdate(D);
    }
    function B(d) {
      let R = e.modelValue;
      R.delete.push(d.id), e.modelValueOnUpdate(R);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (d, R) => {
      const D = re("q-spinner"), k = re("q-uploader-add-trigger"), w = re("q-btn"), b = re("q-item-label"), m = re("q-item-section"), v = re("q-item"), p = re("q-separator"), I = re("q-list");
      return h(), E(a(Ke), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: x,
        onRemoved: F
      }, {
        header: g((z) => [
          M("div", mn, [
            z.isUploading ? (h(), E(D, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            M("div", pn, [
              M("div", gn, L(e.field.label), 1),
              M("div", hn, "Total : " + L(z.uploadSizeLabel), 1)
            ]),
            z.canAddFiles ? (h(), E(w, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: z.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: g(() => [
                C(k)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: g((z) => [
          C(I, { separator: "" }, {
            default: g(() => [
              (h(!0), $(fe, null, me(e.field.attachmentData ?? [], (Q) => (h(), E(v, {
                key: Q.id
              }, {
                default: g(() => [
                  C(m, null, {
                    default: g(() => [
                      C(b, { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(L(Q.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(b, { caption: "" }, {
                        default: g(() => [
                          ee(L(a(pe)(Q.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(m, {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      C(w, {
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
              C(p),
              (h(!0), $(fe, null, me(z.files, (Q) => (h(), E(v, {
                key: Q.__key
              }, {
                default: g(() => [
                  C(m, null, {
                    default: g(() => [
                      C(b, { class: "full-width ellipsis" }, {
                        default: g(() => [
                          ee(L(Q.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(b, { caption: "" }, {
                        default: g(() => [
                          ee(L(Q.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(m, {
                    top: "",
                    side: ""
                  }, {
                    default: g(() => [
                      C(w, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (te) => z.removeFile(Q)
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
  constructor(e, t, o, n, u, l, c, s, i) {
    T(this, "resourceName");
    T(this, "resourceId");
    T(this, "formMetadataAndData");
    T(this, "context");
    T(this, "formSettings");
    T(this, "formStyle");
    T(this, "actionComponent");
    T(this, "orphanErrorsComponent");
    T(this, "sectionComponent");
    T(this, "wrapperResetComponent");
    T(this, "associationDisplayComponent");
    T(this, "dynamicComponentRecord");
    T(this, "formApi");
    T(this, "registerEventCallback");
    this.dynamicComponentRecord = o.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = c, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...u,
      ...J.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...l,
      ...J.getGlobalFormStyle()
    }, this.actionComponent = o.actionComponent ?? J.getGlobalActionComponent(), this.orphanErrorsComponent = o.orphanErrorsComponent ?? J.getGlobalOrphanErrorComponent(), this.sectionComponent = o.sectionComponent ?? J.getGlobalSectionComponent(), this.wrapperResetComponent = o.wrapperResetComponent ?? J.getGlobalWrapperResetComponent(), this.associationDisplayComponent = o.associationDisplayComponent ?? J.getGlobalAssociationDisplayComponent(), this.registerEventCallback = i ?? (() => {
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
  static getForm(e, t, o, n, u, l, c, s, i) {
    return new ce(
      e,
      t,
      o,
      n,
      u,
      l,
      c,
      s,
      i
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Be.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), o = Be.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (l, c) => {
        const s = [];
        l.fields.forEach((d) => {
          const R = this.dynamicComponentRecord[`field-${d.field_name}-before`], D = ce.getFieldComponentByFormFieldType(d), k = this.dynamicComponentRecord[`field-${d.field_name}-after`], w = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: ce.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let b = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((v) => v.type === "required") && (b = b.concat("*"));
          const m = {
            type: d.field_type,
            extraType: d.field_extra_type,
            metadata: Object.freeze(d),
            label: b,
            hint: d.hint ?? void 0,
            prefix: d.prefix ?? void 0,
            suffix: d.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? d.readonly ?? void 0,
            cssClass: d.css_class ?? void 0,
            staticSelectOptions: d.static_select_options,
            associationData: d.field_association_data,
            attachmentData: d.field_attachment_data,
            rules: d.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: R ? X(R) : void 0,
            mainComponent: X(D),
            afterComponent: k ? X(k) : void 0,
            events: o.fields[d.field_name] ?? {},
            componentOptions: w
          };
          s.push(m), t.add(d.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? c}-before`], x = this.sectionComponent, F = this.dynamicComponentRecord[`section-${l.name ?? c}-after`], B = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? c.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: o.sections[l.name ?? c.toString()] ?? {},
          beforeComponent: i ? X(i) : void 0,
          mainComponent: X(x),
          afterComponent: F ? X(F) : void 0,
          fields: s
        };
        n.push(B);
      }
    );
    const u = {
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
      events: o.form,
      actionComponent: X(this.actionComponent),
      orphanErrorsComponent: X(this.orphanErrorsComponent),
      wrapperResetComponent: X(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((l, c) => l + c.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), u;
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
            return Te;
        }
      case "text":
        return Te;
      case "number":
        return Zt;
      case "date":
        return Gt;
      case "datetime":
        return jt;
      case "select":
        return Xt;
      case "selectBelongsTo":
        return Me;
      case "selectHasMany":
        return je;
      case "selectHasAndBelongsToMany":
        return je;
      case "selectHasOne":
        return Me;
      case "checkbox":
        return Kt;
      case "object":
        return nn;
      case "attachmentHasOne":
        return fn;
      case "attachmentHasMany":
        return vn;
      default:
        return Te;
    }
  }
}
function yn(r, e, t) {
  const o = t.form, n = (s, i, x) => s[i] ? x ? () => u(s[i]) : () => s[i] : s.compare_to ? () => {
    var F;
    return ((F = t.getFieldByName(s.compare_to)) == null ? void 0 : F.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", u = (s) => String(
    U.formatDate(
      U.extractDate(s, o.formSettings.backendDateFormat),
      o.formSettings.dateFormat
    )
  ), l = [], c = [];
  switch (e) {
    case "date":
      l.push(Oe(o.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Oe(o.formSettings.datetimeFormat));
      break;
  }
  return r.forEach((s) => {
    const i = s;
    switch (i.type) {
      case "required":
        l.push(bn());
        break;
      case "absence":
        l.push(Cn());
        break;
      case "acceptance":
        l.push(Sn());
        break;
      case "inclusion":
        l.push(Xe(i.including));
        break;
      case "exclusion":
        l.push(_n(i.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        c.push("allowNull");
        break;
      case "allowBlank":
        c.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(Vn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          xn(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Dn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          An(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Rn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Bn(n(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          Nn(
            n(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(qn());
        break;
      case "numberNumericOnly":
        l.push(En());
        break;
      case "numberEvenOnly":
        l.push(Tn());
        break;
      case "numberOddOnly":
        l.push(On());
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
          zn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          $n(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          In(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Pn(
            n(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Ln(n(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Un(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Hn(
            n(i, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(Oe(o.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          Gn(
            n(i, "less_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Mn(
            n(i, "less_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Qn(
            n(i, "greater_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          jn(
            n(i, "greater_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Yn(
            n(i, "equal_to", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Wn(
            n(i, "other_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "allowFileContentType":
        l.push(
          Kn(
            n(i, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          Xn(
            n(i, "equal_to")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          Zn(
            n(i, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          ea(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          ta(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          na(
            n(i, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          aa(
            n(i, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          oa(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          ra(
            n(i, "equal_to")
          )
        );
        break;
    }
  }), c.length > 0 ? c.map((s) => {
    switch (s) {
      case "allowBlank":
        return kn(l);
      case "allowNull":
        return Fn(l);
    }
  }) : l;
}
function bn() {
  return (r) => !!r || "Ce champ est requis";
}
function Xe(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function _n(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${Xe.toString()}`
  );
}
function Cn() {
  return (r) => !r || "Ce champ doit être vide";
}
function Sn() {
  return (r) => !!r || "Doit être accepté";
}
function Fn(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function kn(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function Vn() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function xn(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Dn(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function An(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Rn(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Bn(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function Nn(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function qn() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function En() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function Tn() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function On() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function wn(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function zn(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function $n(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function In(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Un(r, e) {
  return (t) => {
    const o = r(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
  };
}
function Ln(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function Pn(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Hn(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Gn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n <= u || `Inf. ou égal à ${o}`;
  };
}
function Mn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n < u || `Inf. à ${o}`;
  };
}
function Qn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n >= u || `Sup. ou égal à ${o}`;
  };
}
function jn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n > u || `Sup. à ${o}`;
  };
}
function Yn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n === u || `Égale à ${n}`;
  };
}
function Wn(r, e) {
  return (t) => {
    const o = r();
    return U.extractDate(String(t), e) !== U.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function Oe(r) {
  return (e) => e == null || e === "" ? !0 : Jn(e, r) || `Date invalide. Format : ${r}`;
}
function Jn(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = U.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : U.formatDate(t, e) === r;
}
function Kn(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    t.add.forEach((l) => {
      n && (o.includes(l.contentType) || (n = !1));
    });
    const u = r.length > 1;
    return n || `Type${u ? "s" : ""} autorisé${u ? "s" : ""} : ${o.join(",")}`;
  };
}
function Xn(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && o !== u.size && (n = !1);
    }), n || `Taille par fichier ${pe(o)}`;
  };
}
function Zn(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && o > u.size && (n = !1);
    }), n || `Taille par fichier min. ${pe(o)}`;
  };
}
function ea(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && o > u.size && (n = !1);
    }), n || `Taille par fichier max. ${pe(o)}`;
  };
}
function ta(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.length <= o || `${o} fichier${o > 1 ? "s" : ""} max.`;
  };
}
function na(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.length >= o || `${o} fichier${o > 1 ? "s" : ""} min.`;
  };
}
function aa(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) <= o || `${pe(o)} max.`;
  };
}
function oa(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) >= o || `${pe(o)} min.`;
  };
}
function ra(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) === o || `Taille totale ${pe(o)}`;
  };
}
const la = {
  computeServerRules: yn
}, ia = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, sa = ["index"], ua = /* @__PURE__ */ P({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = () => !0, n = () => !0, u = () => {
    }, l = () => {
    }, c = () => {
    };
    const s = k(), i = q(), x = q([]);
    function F() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value);
    }
    function B() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value), O(t.field.events.onReset), l(), ye(() => {
        xe();
      });
    }
    function d(y) {
      const N = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return y == null || y === "" ? !1 : y;
        case "date":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), N.formSettings.backendDateFormat),
            N.formSettings.dateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(
              String(y),
              N.formSettings.backendDatetimeFormat
            ),
            N.formSettings.datetimeFormat
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
      const N = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), N.formSettings.dateFormat),
            N.formSettings.backendDateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), N.formSettings.datetimeFormat),
            N.formSettings.backendDatetimeFormat
          );
      }
      return y;
    }
    function D() {
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
      c(), O(t.field.events.onClear);
    }
    function k() {
      return la.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function w(y) {
      i.value = y;
    }
    function b() {
      return a(i);
    }
    function m() {
      return R(a(i));
    }
    function v(y) {
      x.value = y;
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
    function z(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.readonly = y);
    }
    function Q(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.hint = y);
    }
    function te(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.cssClass = y);
    }
    function K(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.suffix = y);
    }
    function _(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.prefix = y);
    }
    function V(y) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.label = y);
    }
    function G() {
      const y = o();
      return O(t.field.events.onValidated), y;
    }
    function Ce() {
      return n();
    }
    function Se() {
      return !Ce();
    }
    function xe() {
      return u();
    }
    function qe(y, N, le, be, De) {
      o = y, n = N, u = le, be && (l = be), De && (c = De);
    }
    const Fe = {
      softReset: F,
      reset: B,
      clear: D,
      validate: G,
      isValid: Ce,
      isInvalid: Se,
      hide: p,
      unhide: I,
      resetValidation: xe,
      getValueDeserialized: m,
      getValueSerialized: b,
      setupBackendErrors: v,
      setReadonlyState: z,
      setHint: Q,
      setCssClass: te,
      setSuffix: K,
      setPrefix: _,
      setLabel: V,
      setValue: w,
      field: t.field
    };
    return e(Fe), j(
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
      var N, le;
      F();
      const y = (N = We()) == null ? void 0 : N.exposed;
      y && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        y
      ), O((le = t.field) == null ? void 0 : le.events.onReady);
    }), (y, N) => we((h(), $("div", null, [
      t.field.beforeComponent ? (h(), E(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : H("", !0),
      (h(), E(oe(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: B,
        clear: D,
        getValueDeserialized: m,
        getValueSerialized: b,
        validate: G,
        modelValueOnUpdate: w,
        registerBehaviourCallbacks: qe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), E(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : H("", !0),
      x.value.length > 0 ? (h(), $("div", ia, [
        (h(!0), $(fe, null, me(x.value, (le, be) => (h(), $("div", {
          index: be,
          class: "flex column"
        }, L(le), 9, sa))), 256))
      ])) : H("", !0)
    ], 512)), [
      [ze, t.field.hidden !== !0]
    ]);
  }
}), da = { class: "flex column" }, ca = /* @__PURE__ */ P({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = null, n = null, u = null;
    const l = {
      softReset: i,
      reset: x,
      clear: F,
      validate: R,
      isValid: D,
      isInvalid: k,
      hide: B,
      unhide: d,
      resetValidation: w,
      getFields: b,
      setReadonlyState: m,
      setCssClass: v,
      setIcon: p,
      setLabel: I,
      section: t.section
    }, c = q(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((_) => {
        const V = _.metadata.field_name, G = t.formApi.getFieldByName(V);
        G && c.value.set(V, G);
      });
    }
    function i() {
      c.value.forEach((_) => {
        _.softReset();
      });
    }
    function x() {
      c.value.forEach((_) => {
        _.reset();
      }), O(t.section.events.onReset);
    }
    function F() {
      c.value.forEach((_) => {
        _.clear();
      }), O(t.section.events.onClear);
    }
    function B() {
      const _ = t.privateFormApi.getSectionRef(
        t.section.name
      );
      _ && (c.value.forEach((V) => {
        V.hide();
      }), _.hidden = !0, O(t.section.events.onHide));
    }
    function d() {
      const _ = t.privateFormApi.getSectionRef(
        t.section.name
      );
      _ && (c.value.forEach((V) => {
        V.unhide();
      }), _.hidden = !1, O(t.section.events.onUnhide));
    }
    function R() {
      let _ = !0;
      return c.value.forEach((V) => {
        if (!V.validate()) {
          _ = !1;
          return;
        }
      }), O(t.section.events.onValidated), _;
    }
    function D() {
      let _ = !0;
      return c.value.forEach((V) => {
        if (!V.isValid()) {
          _ = !1;
          return;
        }
      }), _;
    }
    function k() {
      return !D();
    }
    function w() {
      c.value.forEach((_) => {
        _.resetValidation();
      });
    }
    function b() {
      return c.value;
    }
    function m(_) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = _);
    }
    function v(_) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = _);
    }
    function p(_) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = _);
    }
    function I(_) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = _);
    }
    function z() {
      const _ = {};
      for (const [V, G] of c.value)
        _[V] = G.getValueSerialized();
      return _;
    }
    e(l);
    const Q = ve(() => D()), te = ve(() => k()), K = ve(() => z());
    return j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onIsValid;
      },
      (_) => {
        o == null || o(), o = null, _ && (o = j(Q, (V) => {
          V && O(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onIsInvalid;
      },
      (_) => {
        n == null || n(), n = null, _ && (n = j(te, (V) => {
          var G;
          V && O((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var _;
        return (_ = t.section) == null ? void 0 : _.events.onUpdate;
      },
      (_) => {
        u == null || u(), u = null, _ && (u = j(
          K,
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
      const _ = (V = We()) == null ? void 0 : V.exposed;
      _ && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        _
      ), ye(() => {
        var G;
        s(), O((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (_, V) => we((h(), $("div", da, [
      t.section.beforeComponent ? (h(), E(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0),
      (h(), E(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: g(() => [
          Ye(_.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), E(oe(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [ze, t.section.hidden !== !0]
    ]);
  }
}), fa = { class: "flex column" }, ha = /* @__PURE__ */ P({
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
  setup(r, { expose: e }) {
    const t = r;
    let o = null, n = "", u = 0, l = 0, c = null, s = null, i = null, x = null, F = null;
    const B = St(), d = q(ce.getEmptyFormBeforeInit()), R = q(!1), D = q(!1), k = q(!1), w = q(!1), b = q("create"), m = q({}), v = q(/* @__PURE__ */ new Map()), p = q(/* @__PURE__ */ new Map());
    async function I() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = ce.getForm(
        t.resourceName,
        t.resourceId,
        te(),
        o,
        t.formSettings,
        t.formStyle,
        t.context,
        ie,
        t.eventManager
      ), u = d.value.sections.length, l = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && (b.value = "edit");
    }
    async function z() {
      var A, W, ge;
      if (!V())
        return;
      O((A = d.value) == null ? void 0 : A.events.onSubmit), w.value = !0, y();
      const f = K(), S = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (x = S.resource_data, S.success)
        m.value = {}, b.value === "create" && (b.value = "edit"), o && S.resource_data && (o.resource_data = S.resource_data), d.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          te(),
          {
            form: S.form,
            resource_data: S.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Se(), n = JSON.stringify(K()), O((ge = d.value) == null ? void 0 : ge.events.onSubmitSuccess);
      else {
        m.value = {};
        const he = [];
        for (const [ne, se] of p.value) {
          const Ae = S.errors[ne];
          Ae && (se.setupBackendErrors(Ae), he.push(ne));
        }
        Object.entries(S.errors).forEach((ne) => {
          he.includes(ne[0]) || (m.value[ne[0]] = ne[1]);
        }), O((W = d.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      w.value = !1;
    }
    async function Q(f) {
      var W, ge, he;
      if (!d.value.allowBulk || b.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!V())
        return;
      O((W = d.value) == null ? void 0 : W.events.onSubmit), w.value = !0, y();
      const S = K(), A = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: S,
        bulkCount: f,
        context: t.context
      });
      if (F = A.bulk_data, A.success)
        m.value = {}, b.value === "create" && (b.value = "edit"), o && A.resource_data && (o.resource_data = A.resource_data), d.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          te(),
          {
            form: A.form,
            resource_data: A.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Se(), n = JSON.stringify(K()), O((he = d.value) == null ? void 0 : he.events.onSubmitSuccess);
      else {
        m.value = {};
        const ne = [];
        for (const [se, Ae] of p.value) {
          const Pe = A.errors[se];
          Pe && (Ae.setupBackendErrors(Pe), ne.push(se));
        }
        Object.entries(A.errors).forEach((se) => {
          ne.includes(se[0]) || (m.value[se[0]] = se[1]);
        }), O((ge = d.value) == null ? void 0 : ge.events.onSubmitUnsuccess);
      }
      w.value = !1;
    }
    function te() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const S in B) {
        const A = B[S];
        if (A) {
          const W = P({
            inheritAttrs: !1,
            setup(ge, { attrs: he, slots: ne }) {
              return () => A({
                ...ge,
                ...he,
                slots: ne
              });
            }
          });
          switch (S) {
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
              f.dynamicComponentRecord[S] = W;
              break;
          }
        }
      }
      return f;
    }
    function K() {
      const f = {};
      for (const [S, A] of p.value)
        f[S] = A.getValueDeserialized();
      return f;
    }
    function _() {
      const f = {};
      for (const [S, A] of p.value)
        f[S] = A.getValueSerialized();
      return f;
    }
    function V() {
      var S;
      let f = !0;
      return p.value.forEach((A) => {
        if (!A.validate()) {
          f = !1;
          return;
        }
      }), O((S = d.value) == null ? void 0 : S.events.onValidated), f;
    }
    function G() {
      let f = !0;
      return p.value.forEach((S) => {
        if (!S.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function Ce() {
      return !G();
    }
    function Se() {
      v.value.forEach((f) => {
        f.softReset();
      });
    }
    function xe() {
      var f;
      p.value.forEach((S) => {
        S.reset();
      }), O((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function qe() {
      var f;
      p.value.forEach((S) => {
        S.clear();
      }), O((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function Fe() {
      p.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function y() {
      p.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function N(f) {
      if (o)
        return o.resource_data[f];
    }
    function le(f) {
      return v.value.get(f);
    }
    function be(f) {
      return [...v.value.values()].at(f);
    }
    function De() {
      return v.value;
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
      ].forEach((S) => {
        (t[S] === null || t[S] === void 0) && console.warn(`Missing props for <Submit64> -> ${S}`);
      });
    }
    function at() {
      return a(b);
    }
    function ot() {
      return n !== JSON.stringify(K());
    }
    function rt(f) {
      d.value && (d.value.context = f);
    }
    function lt(f) {
      d.value && (d.value.cssClass = f);
    }
    function it(f) {
      d.value && (d.value.readonly = f);
    }
    function st() {
      return k.value;
    }
    function ut() {
      return x;
    }
    function dt() {
      return F;
    }
    function ct() {
      return d;
    }
    function ft(f) {
      var S;
      return (S = d.value) == null ? void 0 : S.sections.find((A) => A.name === f);
    }
    function mt(f) {
      var S;
      return (S = d.value) == null ? void 0 : S.sections.map((A) => A.fields).flat().find((A) => A.metadata.field_name === f);
    }
    function Ie(f, S) {
      v.value.set(f, S), u === v.value.size && (R.value = !0);
    }
    function Ue(f, S) {
      p.value.set(f, S), l === p.value.size && (D.value = !0);
    }
    const Le = {
      getFormRef: ct,
      getSectionRef: ft,
      getFieldRef: mt,
      registerSectionWrapperRef: Ie,
      registerFieldWrapperRef: Ue
    }, pt = new Proxy({}, {
      get(f, S) {
        var A;
        return (A = d.value) == null ? void 0 : A[S];
      }
    }), ie = {
      getMode: at,
      getSectionByName: le,
      getSectionByIndex: be,
      getSections: De,
      getFieldByName: Ze,
      getFields: et,
      validate: V,
      isValid: G,
      isInvalid: Ce,
      softReset: Se,
      reset: xe,
      clear: qe,
      resetValidation: Fe,
      submit: z,
      submitBulk: Q,
      valuesHasChanged: ot,
      getInitialValueByFieldName: N,
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
    const gt = ve(() => G()), ht = ve(() => Ce()), vt = ve(() => _());
    return j(
      () => R.value && D.value,
      (f) => {
        var S;
        f && !k.value && (O((S = d.value) == null ? void 0 : S.events.onReady), k.value = !0);
      }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        c == null || c(), c = null, f && (c = j(gt, (S) => {
          var A;
          S && O((A = d.value) == null ? void 0 : A.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = j(ht, (S) => {
          var A;
          S && O((A = d.value) == null ? void 0 : A.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        i == null || i(), i = null, f && (i = j(
          vt,
          () => {
            var S;
            O((S = d.value) == null ? void 0 : S.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      nt(), await I(), ye(() => {
        n = JSON.stringify(K());
      });
    }), (f, S) => we((h(), $("div", fa, [
      M("div", {
        class: Z(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), $(fe, null, me(d.value.sections, (A) => (h(), E(ca, {
          key: A.name,
          section: A,
          context: t.context,
          formApi: ie,
          privateFormApi: Le,
          registerRef: Ie
        }, {
          default: g(() => [
            (h(!0), $(fe, null, me(A.fields, (W) => (h(), E(ua, {
              key: W.metadata.field_name,
              field: W,
              context: t.context,
              formApi: ie,
              privateFormApi: Le,
              registerRef: Ue
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), E(oe(d.value.orphanErrorsComponent), {
        orphanErrors: m.value,
        formApi: ie
      }, null, 8, ["orphanErrors"])),
      (h(), E(oe(d.value.actionComponent), {
        isLoadingSubmit: w.value,
        formApi: ie
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, k.value]
    ]);
  }
});
export {
  Be as DynamicLogicBuilder,
  J as Submit64,
  ha as Submit64Form
};
