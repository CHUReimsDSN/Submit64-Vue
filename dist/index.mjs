var yt = Object.defineProperty;
var bt = (r, e, t) => e in r ? yt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var w = (r, e, t) => bt(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as P, createElementBlock as I, openBlock as v, createElementVNode as Q, createVNode as C, createBlock as A, createCommentVNode as H, unref as a, mergeProps as Ee, toDisplayString as L, renderSlot as Ye, resolveComponent as re, normalizeProps as _t, guardReactiveProps as Ct, withCtx as h, createTextVNode as ee, Fragment as fe, renderList as me, ref as E, onMounted as Y, nextTick as ye, normalizeClass as X, watch as j, resolveDynamicComponent as oe, computed as ve, markRaw as K, getCurrentInstance as We, withDirectives as we, vShow as ze, useSlots as St } from "vue";
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
    return (o, n) => (v(), I("div", Bt, [
      Q("div", Nt, [
        C(a(ae), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (v(), A(a(ae), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (v(), A(a(ae), Ee({ key: 1 }, t(), {
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
    return (t, o) => (v(), I("div", null, [
      Q("div", Et, [
        e.sectionApi.section.icon ? (v(), A(a(ke), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        Q("div", Tt, L(e.sectionApi.section.label), 1)
      ]),
      Q("div", Ot, [
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
      return v(), A(n, {
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
    return (t, o) => (v(), A(a(_e), _t(Ct(e.itemProps)), {
      default: h(() => [
        C(a(ue), null, {
          default: h(() => [
            C(a(de), null, {
              default: h(() => [
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
    return (t, o) => (v(), I("div", It, [
      (v(!0), I(fe, null, me(e.orphanErrors, (n, u) => (v(), I("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, L(u) + " : " + L(n.join(",")), 1))), 128))
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
w(Ne, "_instance", new Ne());
let J = Ne;
class Be {
  constructor(e) {
    w(this, "formApi");
    w(this, "events", []);
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
    w(this, "type");
    w(this, "data");
    w(this, "formApi");
    w(this, "action", () => {
    });
    w(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
  setup(r) {
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = E(), c = E();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return c.value ? c.value.validate() : !1;
    }
    function k() {
      return c.value ? !c.value.hasError : !1;
    }
    function S() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(i, k, S), u || ye(() => {
        var R;
        (R = c.value) == null || R.resetValidation();
      });
    }), (R, d) => (v(), A(a(Ve), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[1] || (d[1] = (D) => e.modelValueOnUpdate(D)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: h(() => [
        C(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            C(a(Re), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                C(a(Je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": d[0] || (d[0] = (D) => e.modelValueOnUpdate(D)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: h(() => [
                    Q("div", Ht, [
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = E(), c = E(), s = E();
    function i() {
      l.value && l.value.hide();
    }
    function k() {
      c.value && c.value.hide();
    }
    function S() {
      return s.value ? s.value.validate() : !1;
    }
    function R() {
      return s.value ? !s.value.hasError : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(S, R, d), u || ye(() => {
        var D;
        (D = s.value) == null || D.resetValidation();
      });
    }), (D, V) => (v(), A(a(Ve), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[2] || (V[2] = (B) => e.modelValueOnUpdate(B)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: h(() => [
        C(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            C(a(Re), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                C(a(Je), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: h(() => [
                    Q("div", Mt, [
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
          default: h(() => [
            C(a(Re), {
              ref_key: "timePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                C(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[1] || (V[1] = (B) => e.modelValueOnUpdate(B)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: h(() => [
                    Q("div", Qt, [
                      C(a(ae), {
                        onClick: k,
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
    const e = r, t = E(!0), n = e.formApi.form.formStyle;
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
    }), (s, i) => (v(), I("div", Yt, [
      C(a(kt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (k) => e.modelValueOnUpdate(k)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (v(), I("div", Wt, L(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (v(), I("div", Jt, L(t.value), 1)) : H("", !0)
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
    const e = r, t = E([]), o = E([]), n = E(), u = e.formApi.form, l = u.formSettings, c = u.formStyle, s = l.rulesBehaviour === "lazy";
    function i(V, B) {
      if (V === "") {
        B(() => {
          o.value = [...t.value];
        });
        return;
      }
      B(() => {
        const T = V.toLowerCase();
        o.value = t.value.filter(($) => $.label.toLowerCase().includes(T));
      });
    }
    function k() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), o.value = e.field.staticSelectOptions ?? [];
    }
    function S() {
      return n.value ? n.value.validate() : !1;
    }
    function R() {
      return n.value ? !n.value.hasError : !1;
    }
    function d() {
      n.value && n.value.resetValidation();
    }
    function D() {
      o.value = [];
    }
    return Y(() => {
      k(), e.registerBehaviourCallbacks(S, R, d, void 0, D);
    }), (V, B) => (v(), A(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": B[0] || (B[0] = (T) => e.modelValueOnUpdate(T)),
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
      class: X(e.field.cssClass),
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
      "no-option": h(() => [
        C(a(_e), {
          dense: a(c).fieldDense
        }, {
          default: h(() => [
            C(a(ue), null, {
              default: h(() => [
                C(a(de), null, {
                  default: h(() => [
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = E([]), s = E(
      S()
    ), i = E(), k = E(Ge);
    function S() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function R(m, g) {
      if (m === k.value) {
        g(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = S(), k.value = m;
      const N = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: N.resourceName,
        resourceId: N.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: N.context
      }).then((O) => {
        g(() => {
          c.value = O.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            O.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = S();
      });
    }
    function d() {
      var g, p;
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (c.value = [
        {
          label: ((g = e.field.associationData[0]) == null ? void 0 : g.label) ?? "???",
          value: m,
          data: (p = e.field.associationData[0]) == null ? void 0 : p.data
        }
      ]);
    }
    function D() {
      return i.value ? i.value.validate() : !1;
    }
    function V() {
      return i.value ? !i.value.hasError : !1;
    }
    function B() {
      i.value && i.value.resetValidation();
    }
    function T() {
      s.value = S(), c.value = [], k.value = Ge;
    }
    function $(m) {
      const g = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === g && g !== -1) {
        const p = e.formApi.form, N = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, N({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: k.value,
          context: p.context
        }).then((O) => {
          c.value = c.value.concat(
            O.rows
          ), s.value.lastPage = Math.ceil(
            O.row_count / s.value.limit
          ), O.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        D,
        V,
        B,
        d,
        T
      ), ye(() => {
        d();
      });
    }), (m, g) => (v(), A(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[0] || (g[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: X(e.field.cssClass),
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
      onFilter: R,
      onVirtualScroll: $
    }, {
      "no-option": h(() => [
        C(a(_e), {
          dense: a(u).fieldDense
        }, {
          default: h(() => [
            C(a(ue), null, {
              default: h(() => [
                C(a(de), null, {
                  default: h(() => [
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
      option: h((p) => [
        (v(), A(oe(a(t)), {
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = E([]), s = E(
      S()
    ), i = E(), k = E(Qe);
    function S() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function R(m, g) {
      if (m === k.value) {
        g(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = S(), k.value = m;
      const N = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: N.resourceName,
        resourceId: N.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: m,
        context: N.context
      }).then((O) => {
        g(() => {
          c.value = O.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            O.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = S();
      });
    }
    function d() {
      const m = e.getValueSerialized();
      !m || !e.field.associationData || (c.value = m.map((g, p) => ({
        label: e.field.associationData[p].label ?? "???",
        value: g,
        data: e.field.associationData[p].data
      })));
    }
    function D() {
      return i.value ? i.value.validate() : !1;
    }
    function V() {
      return i.value ? !i.value.hasError : !1;
    }
    function B() {
      i.value && i.value.resetValidation();
    }
    function T() {
      s.value = S(), c.value = [], k.value = Qe;
    }
    function $(m) {
      const g = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && m.to === g && g !== -1) {
        const p = e.formApi.form, N = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, N({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: k.value,
          context: p.context
        }).then((O) => {
          c.value = c.value.concat(
            O.rows
          ), s.value.lastPage = Math.ceil(
            O.row_count / s.value.limit
          ), O.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, m.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        D,
        V,
        B,
        d,
        T
      ), ye(() => {
        d();
      });
    }), (m, g) => (v(), A(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[0] || (g[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: X(e.field.cssClass),
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
      onFilter: R,
      onVirtualScroll: $
    }, {
      "no-option": h(() => [
        C(a(_e), {
          dense: a(u).fieldDense
        }, {
          default: h(() => [
            C(a(ue), null, {
              default: h(() => [
                C(a(de), null, {
                  default: h(() => [
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
      option: h((p) => [
        (v(), A(oe(a(t)), {
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = E();
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
    }), (k, S) => (v(), A(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (R) => e.modelValueOnUpdate(R)),
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = E();
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
    }), (k, S) => (v(), A(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (R) => e.modelValueOnUpdate(R)),
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = E();
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
    }), (k, S) => (v(), A(a(Ve), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[1] || (S[1] = (R) => e.modelValueOnUpdate(R)),
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
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: h(() => [
        C(a(ke), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            C(a(Re), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                C(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": S[0] || (S[0] = (R) => e.modelValueOnUpdate(R))
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
    }, c = E();
    function s() {
      return !!c.value;
    }
    function i() {
      return !!c.value;
    }
    function k() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, i, k);
    }), (S, R) => e.modelValue ? (v(), A(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (d) => e.modelValueOnUpdate(d)),
      toolbar: u,
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
  setup(r) {
    const t = r.formApi.form, o = t.formSettings;
    return t.formStyle, o.rulesBehaviour, (n, u) => " TODO json edit ? ";
  }
});
function z(r) {
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
    const e = r, o = e.formApi.form.formStyle, n = E(null);
    function u() {
      let m = e.modelValue;
      m.add = [], m.delete = [], e.modelValueOnUpdate(m), T();
    }
    function l() {
      var g;
      let m = e.modelValue;
      m.add = [], m.delete = ((g = e.field.attachmentData) == null ? void 0 : g.map((p) => p.id)) ?? [], e.modelValueOnUpdate(m), T();
    }
    function c() {
      return T(), s();
    }
    function s() {
      return n.value === null;
    }
    function i() {
      n.value = null;
    }
    async function k(m) {
      return new Promise((g) => {
        const p = new Blob([m]), N = new FileReader();
        N.onload = (O) => {
          var y;
          const G = ((y = O.target) == null ? void 0 : y.result) ?? "", [ne, Z] = G.split(",");
          g(Z);
        }, N.readAsDataURL(p);
      });
    }
    async function S(m) {
      return {
        key: `${m.lastModified}${m.name}`,
        size: m.size,
        filename: m.name,
        contentType: m.type,
        base64: await k(await m.arrayBuffer())
      };
    }
    async function R(m) {
      if (!m[0])
        return;
      const g = await S(m[0]);
      let p = e.modelValue;
      p.add.push(g), e.modelValueOnUpdate(p), T();
    }
    async function d(m) {
      if (!m[0])
        return;
      const g = await S(m[0]);
      let p = e.modelValue;
      p.add = p.add.filter((N) => N.key !== g.key), e.modelValueOnUpdate(p), T();
    }
    function D(m) {
      let g = e.modelValue;
      g.delete.push(m.id), e.modelValueOnUpdate(g), T();
    }
    function V(m) {
      let g = e.modelValue;
      g.delete = g.delete.filter((p) => p !== m.id), e.modelValueOnUpdate(g), T();
    }
    function B(m) {
      return e.modelValue.delete.findIndex((g) => g === m.id) !== -1;
    }
    function T() {
      n.value = null;
      for (const m of e.rules) {
        const g = m(e.modelValue);
        if (typeof g == "string") {
          n.value = g;
          break;
        }
      }
    }
    const $ = ve(() => (e.field.attachmentData ?? []).length === 0);
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (m, g) => (v(), I("div", an, [
      C(a(Ke), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: d,
        style: { width: "inherit" }
      }, {
        header: h((p) => [
          Q("div", on, [
            Q("div", rn, [
              Q("div", ln, L(e.field.label), 1),
              e.field.hint ? (v(), I("div", sn, L(e.field.hint), 1)) : H("", !0)
            ]),
            p.canAddFiles ? (v(), A(a(ae), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: p.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                C(a(Rt))
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: h((p) => [
          $.value ? H("", !0) : (v(), I("div", un, [
            g[0] || (g[0] = Q("div", null, "Fichier en ligne", -1)),
            C(a(He), { separator: "" }, {
              default: h(() => [
                (v(!0), I(fe, null, me(e.field.attachmentData ?? [], (N) => (v(), A(a(_e), {
                  key: N.id
                }, {
                  default: h(() => [
                    C(a(ue), null, {
                      default: h(() => [
                        C(a(de), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ee(L(N.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(de), { caption: "" }, {
                          default: h(() => [
                            ee(L(a(pe)(N.size)), 1)
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
                      default: h(() => [
                        B(N) ? (v(), A(a(ae), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: (O) => V(N)
                        }, null, 8, ["disable", "onClick"])) : (v(), A(a(ae), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (O) => D(N)
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
          !$.value && p.files.length > 0 ? (v(), A(a(At), { key: 1 })) : H("", !0),
          p.files.length > 0 ? (v(), I("div", dn, [
            g[1] || (g[1] = Q("div", null, "Fichier à télécharger", -1)),
            C(a(He), { separator: "" }, {
              default: h(() => [
                (v(!0), I(fe, null, me(p.files, (N) => (v(), A(a(_e), {
                  key: N.__key
                }, {
                  default: h(() => [
                    C(a(ue), null, {
                      default: h(() => [
                        C(a(de), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ee(L(N.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(de), { caption: "" }, {
                          default: h(() => [
                            ee(L(N.__sizeLabel), 1)
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
                      default: h(() => [
                        C(a(ae), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (O) => p.removeFile(N)
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
      n.value !== null ? (v(), I("div", cn, L(n.value), 1)) : H("", !0)
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
    const e = r, o = e.formApi.form.formStyle, n = E();
    function u() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d);
    }
    function l() {
      var D;
      let d = e.modelValue;
      d.add = [], d.delete = ((D = e.field.attachmentData) == null ? void 0 : D.map((V) => V.id)) ?? [], e.modelValueOnUpdate(d);
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
    function k(d) {
      const D = d;
      if (!D)
        return;
      let V = e.modelValue;
      D.forEach((B) => {
        V.add.push(B);
      }), e.modelValueOnUpdate(V);
    }
    function S(d) {
      const D = d;
      let V = e.modelValue;
      V.add = V.add.filter((B) => !D.map((T) => T.key).includes(B.key)), e.modelValueOnUpdate(V);
    }
    function R(d) {
      let D = e.modelValue;
      D.delete.push(d.id), e.modelValueOnUpdate(D);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (d, D) => {
      const V = re("q-spinner"), B = re("q-uploader-add-trigger"), T = re("q-btn"), $ = re("q-item-label"), m = re("q-item-section"), g = re("q-item"), p = re("q-separator"), N = re("q-list");
      return v(), A(a(Ke), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: k,
        onRemoved: S
      }, {
        header: h((O) => [
          Q("div", mn, [
            O.isUploading ? (v(), A(V, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            Q("div", pn, [
              Q("div", gn, L(e.field.label), 1),
              Q("div", hn, "Total : " + L(O.uploadSizeLabel), 1)
            ]),
            O.canAddFiles ? (v(), A(T, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: O.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                C(B)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: h((O) => [
          C(N, { separator: "" }, {
            default: h(() => [
              (v(!0), I(fe, null, me(e.field.attachmentData ?? [], (G) => (v(), A(g, {
                key: G.id
              }, {
                default: h(() => [
                  C(m, null, {
                    default: h(() => [
                      C($, { class: "full-width ellipsis" }, {
                        default: h(() => [
                          ee(L(G.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C($, { caption: "" }, {
                        default: h(() => [
                          ee(L(a(pe)(G.size)), 1)
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
                    default: h(() => [
                      C(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ne) => R(G)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              C(p),
              (v(!0), I(fe, null, me(O.files, (G) => (v(), A(g, {
                key: G.__key
              }, {
                default: h(() => [
                  C(m, null, {
                    default: h(() => [
                      C($, { class: "full-width ellipsis" }, {
                        default: h(() => [
                          ee(L(G.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C($, { caption: "" }, {
                        default: h(() => [
                          ee(L(G.__sizeLabel), 1)
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
                    default: h(() => [
                      C(T, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ne) => O.removeFile(G)
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
      actionComponent: K(J.getGlobalActionComponent()),
      orphanErrorsComponent: K(J.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: K(J.getGlobalWrapperResetComponent()),
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
          const D = this.dynamicComponentRecord[`field-${d.field_name}-before`], V = ce.getFieldComponentByFormFieldType(d), B = this.dynamicComponentRecord[`field-${d.field_name}-after`], T = {
            associationDisplayComponent: K(
              this.associationDisplayComponent
            ),
            regularFieldType: ce.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let $ = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((g) => g.type === "required") && ($ = $.concat("*"));
          const m = {
            type: d.field_type,
            extraType: d.field_extra_type,
            metadata: Object.freeze(d),
            label: $,
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
            beforeComponent: D ? K(D) : void 0,
            mainComponent: K(V),
            afterComponent: B ? K(B) : void 0,
            events: o.fields[d.field_name] ?? {},
            componentOptions: T
          };
          s.push(m), t.add(d.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? c}-before`], k = this.sectionComponent, S = this.dynamicComponentRecord[`section-${l.name ?? c}-after`], R = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? c.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: o.sections[l.name ?? c.toString()] ?? {},
          beforeComponent: i ? K(i) : void 0,
          mainComponent: K(k),
          afterComponent: S ? K(S) : void 0,
          fields: s
        };
        n.push(R);
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
      actionComponent: K(this.actionComponent),
      orphanErrorsComponent: K(this.orphanErrorsComponent),
      wrapperResetComponent: K(this.wrapperResetComponent),
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
  const o = t.form, n = (s, i, k) => s[i] ? k ? () => u(s[i]) : () => s[i] : s.compare_to ? () => {
    var S;
    return ((S = t.getFieldByName(s.compare_to)) == null ? void 0 : S.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
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
    const s = B(), i = E(), k = E([]);
    function S() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value);
    }
    function R() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value), z(t.field.events.onReset), l(), ye(() => {
        xe();
      });
    }
    function d(b) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return b == null || b === "" ? !1 : b;
        case "date":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), q.formSettings.backendDateFormat),
            q.formSettings.dateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(
              String(b),
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
      return b;
    }
    function D(b) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), q.formSettings.dateFormat),
            q.formSettings.backendDateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), q.formSettings.datetimeFormat),
            q.formSettings.backendDatetimeFormat
          );
      }
      return b;
    }
    function V() {
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
      c(), z(t.field.events.onClear);
    }
    function B() {
      return la.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function T(b) {
      i.value = b;
    }
    function $() {
      return a(i);
    }
    function m() {
      return D(a(i));
    }
    function g(b) {
      k.value = b;
    }
    function p() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !0, z(t.field.events.onHide));
    }
    function N() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !1, z(t.field.events.onUnhide));
    }
    function O(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.readonly = b);
    }
    function G(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.hint = b);
    }
    function ne(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.cssClass = b);
    }
    function Z(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.suffix = b);
    }
    function y(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.prefix = b);
    }
    function F(b) {
      const q = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      q && (q.label = b);
    }
    function M() {
      const b = o();
      return z(t.field.events.onValidated), b;
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
    function qe(b, q, le, be, De) {
      o = b, n = q, u = le, be && (l = be), De && (c = De);
    }
    const Fe = {
      softReset: S,
      reset: R,
      clear: V,
      validate: M,
      isValid: Ce,
      isInvalid: Se,
      hide: p,
      unhide: N,
      resetValidation: xe,
      getValueDeserialized: m,
      getValueSerialized: $,
      setupBackendErrors: g,
      setReadonlyState: O,
      setHint: G,
      setCssClass: ne,
      setSuffix: Z,
      setPrefix: y,
      setLabel: F,
      setValue: T,
      field: t.field
    };
    return e(Fe), j(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        z(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (b) => {
        z(b ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var q, le;
      S();
      const b = (q = We()) == null ? void 0 : q.exposed;
      b && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        b
      ), z((le = t.field) == null ? void 0 : le.events.onReady);
    }), (b, q) => we((v(), I("div", null, [
      t.field.beforeComponent ? (v(), A(oe(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(oe(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: R,
        clear: V,
        getValueDeserialized: m,
        getValueSerialized: $,
        validate: M,
        modelValueOnUpdate: T,
        registerBehaviourCallbacks: qe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (v(), A(oe(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : H("", !0),
      k.value.length > 0 ? (v(), I("div", ia, [
        (v(!0), I(fe, null, me(k.value, (le, be) => (v(), I("div", {
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
      reset: k,
      clear: S,
      validate: D,
      isValid: V,
      isInvalid: B,
      hide: R,
      unhide: d,
      resetValidation: T,
      getFields: $,
      setReadonlyState: m,
      setCssClass: g,
      setIcon: p,
      setLabel: N,
      section: t.section
    }, c = E(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((y) => {
        const F = y.metadata.field_name, M = t.formApi.getFieldByName(F);
        M && c.value.set(F, M);
      });
    }
    function i() {
      c.value.forEach((y) => {
        y.softReset();
      });
    }
    function k() {
      c.value.forEach((y) => {
        y.reset();
      }), z(t.section.events.onReset);
    }
    function S() {
      c.value.forEach((y) => {
        y.clear();
      }), z(t.section.events.onClear);
    }
    function R() {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (c.value.forEach((F) => {
        F.hide();
      }), y.hidden = !0, z(t.section.events.onHide));
    }
    function d() {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (c.value.forEach((F) => {
        F.unhide();
      }), y.hidden = !1, z(t.section.events.onUnhide));
    }
    function D() {
      let y = !0;
      return c.value.forEach((F) => {
        if (!F.validate()) {
          y = !1;
          return;
        }
      }), z(t.section.events.onValidated), y;
    }
    function V() {
      let y = !0;
      return c.value.forEach((F) => {
        if (!F.isValid()) {
          y = !1;
          return;
        }
      }), y;
    }
    function B() {
      return !V();
    }
    function T() {
      c.value.forEach((y) => {
        y.resetValidation();
      });
    }
    function $() {
      return c.value;
    }
    function m(y) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.readonly = y);
    }
    function g(y) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.cssClass = y);
    }
    function p(y) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.icon = y);
    }
    function N(y) {
      const F = t.privateFormApi.getSectionRef(
        t.section.name
      );
      F && (F.label = y);
    }
    function O() {
      const y = {};
      for (const [F, M] of c.value)
        y[F] = M.getValueSerialized();
      return y;
    }
    e(l);
    const G = ve(() => V()), ne = ve(() => B()), Z = ve(() => O());
    return j(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onIsValid;
      },
      (y) => {
        o == null || o(), o = null, y && (o = j(G, (F) => {
          F && z(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onIsInvalid;
      },
      (y) => {
        n == null || n(), n = null, y && (n = j(ne, (F) => {
          var M;
          F && z((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onUpdate;
      },
      (y) => {
        u == null || u(), u = null, y && (u = j(
          Z,
          () => {
            var F;
            z((F = t.section) == null ? void 0 : F.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var F;
      const y = (F = We()) == null ? void 0 : F.exposed;
      y && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        y
      ), ye(() => {
        var M;
        s(), z((M = t.section) == null ? void 0 : M.events.onReady);
      });
    }), (y, F) => we((v(), I("div", da, [
      t.section.beforeComponent ? (v(), A(oe(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0),
      (v(), A(oe(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, {
        default: h(() => [
          Ye(y.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (v(), A(oe(t.section.afterComponent), {
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
    let o = null, n = "", u = 0, l = 0, c = null, s = null, i = null, k = null, S = null;
    const R = St(), d = E(ce.getEmptyFormBeforeInit()), D = E(!1), V = E(!1), B = E(!1), T = E(!1), $ = E("create"), m = E({}), g = E(/* @__PURE__ */ new Map()), p = E(/* @__PURE__ */ new Map());
    async function N() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = ce.getForm(
        t.resourceName,
        t.resourceId,
        ne(),
        o,
        t.formSettings,
        t.formStyle,
        t.context,
        ie,
        t.eventManager
      ), u = d.value.sections.length, l = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && ($.value = "edit");
    }
    async function O() {
      var x, W, ge;
      if (!F())
        return;
      z((x = d.value) == null ? void 0 : x.events.onSubmit), T.value = !0, b();
      const f = Z(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (k = _.resource_data, _.success)
        m.value = {}, $.value === "create" && ($.value = "edit"), o && _.resource_data && (o.resource_data = _.resource_data), d.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          ne(),
          {
            form: _.form,
            resource_data: _.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Se(), n = JSON.stringify(Z()), z((ge = d.value) == null ? void 0 : ge.events.onSubmitSuccess);
      else {
        m.value = {};
        const he = [];
        for (const [te, se] of p.value) {
          const Ae = _.errors[te];
          Ae && (se.setupBackendErrors(Ae), he.push(te));
        }
        Object.entries(_.errors).forEach((te) => {
          he.includes(te[0]) || (m.value[te[0]] = te[1]);
        }), z((W = d.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    async function G(f) {
      var W, ge, he;
      if (!d.value.allowBulk || $.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!F())
        return;
      z((W = d.value) == null ? void 0 : W.events.onSubmit), T.value = !0, b();
      const _ = Z(), x = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: _,
        bulkCount: f,
        context: t.context
      });
      if (S = x.bulk_data, x.success)
        m.value = {}, $.value === "create" && ($.value = "edit"), o && x.resource_data && (o.resource_data = x.resource_data), d.value = ce.getForm(
          t.resourceName,
          t.resourceId,
          ne(),
          {
            form: x.form,
            resource_data: x.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ie,
          t.eventManager
        ), Se(), n = JSON.stringify(Z()), z((he = d.value) == null ? void 0 : he.events.onSubmitSuccess);
      else {
        m.value = {};
        const te = [];
        for (const [se, Ae] of p.value) {
          const Pe = x.errors[se];
          Pe && (Ae.setupBackendErrors(Pe), te.push(se));
        }
        Object.entries(x.errors).forEach((se) => {
          te.includes(se[0]) || (m.value[se[0]] = se[1]);
        }), z((ge = d.value) == null ? void 0 : ge.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function ne() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const _ in R) {
        const x = R[_];
        if (x) {
          const W = P({
            inheritAttrs: !1,
            setup(ge, { attrs: he, slots: te }) {
              return () => x({
                ...ge,
                ...he,
                slots: te
              });
            }
          });
          switch (_) {
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
              f.dynamicComponentRecord[_] = W;
              break;
          }
        }
      }
      return f;
    }
    function Z() {
      const f = {};
      for (const [_, x] of p.value)
        f[_] = x.getValueDeserialized();
      return f;
    }
    function y() {
      const f = {};
      for (const [_, x] of p.value)
        f[_] = x.getValueSerialized();
      return f;
    }
    function F() {
      var _;
      let f = !0;
      return p.value.forEach((x) => {
        if (!x.validate()) {
          f = !1;
          return;
        }
      }), z((_ = d.value) == null ? void 0 : _.events.onValidated), f;
    }
    function M() {
      let f = !0;
      return p.value.forEach((_) => {
        if (!_.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function Ce() {
      return !M();
    }
    function Se() {
      g.value.forEach((f) => {
        f.softReset();
      });
    }
    function xe() {
      var f;
      p.value.forEach((_) => {
        _.reset();
      }), z((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function qe() {
      var f;
      p.value.forEach((_) => {
        _.clear();
      }), z((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function Fe() {
      p.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function b() {
      p.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function q(f) {
      if (o)
        return o.resource_data[f];
    }
    function le(f) {
      return g.value.get(f);
    }
    function be(f) {
      return [...g.value.values()].at(f);
    }
    function De() {
      return g.value;
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
      ].forEach((_) => {
        (t[_] === null || t[_] === void 0) && console.warn(`Missing props for <Submit64> -> ${_}`);
      });
    }
    function at() {
      return a($);
    }
    function ot() {
      return n !== JSON.stringify(Z());
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
      return B.value;
    }
    function ut() {
      return k;
    }
    function dt() {
      return S;
    }
    function ct() {
      return d;
    }
    function ft(f) {
      var _;
      return (_ = d.value) == null ? void 0 : _.sections.find((x) => x.name === f);
    }
    function mt(f) {
      var _;
      return (_ = d.value) == null ? void 0 : _.sections.map((x) => x.fields).flat().find((x) => x.metadata.field_name === f);
    }
    function Ie(f, _) {
      g.value.set(f, _), u === g.value.size && (D.value = !0);
    }
    function Ue(f, _) {
      p.value.set(f, _), l === p.value.size && (V.value = !0);
    }
    const Le = {
      getFormRef: ct,
      getSectionRef: ft,
      getFieldRef: mt,
      registerSectionWrapperRef: Ie,
      registerFieldWrapperRef: Ue
    }, pt = new Proxy({}, {
      get(f, _) {
        var x;
        return (x = d.value) == null ? void 0 : x[_];
      }
    }), ie = {
      getMode: at,
      getSectionByName: le,
      getSectionByIndex: be,
      getSections: De,
      getFieldByName: Ze,
      getFields: et,
      validate: F,
      isValid: M,
      isInvalid: Ce,
      softReset: Se,
      reset: xe,
      clear: qe,
      resetValidation: Fe,
      submit: O,
      submitBulk: G,
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
    const gt = ve(() => M()), ht = ve(() => Ce()), vt = ve(() => y());
    return j(
      () => D.value && V.value,
      (f) => {
        var _;
        f && !B.value && (z((_ = d.value) == null ? void 0 : _.events.onReady), B.value = !0);
      }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        c == null || c(), c = null, f && (c = j(gt, (_) => {
          var x;
          _ && z((x = d.value) == null ? void 0 : x.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = j(ht, (_) => {
          var x;
          _ && z((x = d.value) == null ? void 0 : x.events.onIsInvalid);
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
            var _;
            z((_ = d.value) == null ? void 0 : _.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      nt(), await N(), ye(() => {
        n = JSON.stringify(Z());
      });
    }), (f, _) => we((v(), I("div", fa, [
      Q("div", {
        class: X(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (v(!0), I(fe, null, me(d.value.sections, (x) => (v(), A(ca, {
          key: x.name,
          section: x,
          context: t.context,
          formApi: ie,
          privateFormApi: Le,
          registerRef: Ie
        }, {
          default: h(() => [
            (v(!0), I(fe, null, me(x.fields, (W) => (v(), A(ua, {
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
      (v(), A(oe(d.value.orphanErrorsComponent), {
        orphanErrors: m.value,
        formApi: ie
      }, null, 8, ["orphanErrors"])),
      (v(), A(oe(d.value.actionComponent), {
        isLoadingSubmit: T.value,
        formApi: ie
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, B.value]
    ]);
  }
});
export {
  Be as DynamicLogicBuilder,
  J as Submit64,
  ha as Submit64Form
};
