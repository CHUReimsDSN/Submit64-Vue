var _t = Object.defineProperty;
var Ct = (o, e, t) => e in o ? _t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var T = (o, e, t) => Ct(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as h, createElementBlock as q, createElementVNode as G, createVNode as S, unref as a, mergeProps as Te, createBlock as A, createCommentVNode as O, normalizeClass as Z, toDisplayString as P, resolveDynamicComponent as le, resolveComponent as St, normalizeProps as Ft, guardReactiveProps as kt, withCtx as y, createTextVNode as te, Fragment as pe, renderList as ge, ref as w, onMounted as Q, nextTick as _e, watch as j, computed as re, markRaw as J, useSlots as Ge, getCurrentInstance as je, withDirectives as Oe, vShow as ze } from "vue";
import { QBtn as X, QIcon as Ve, QItem as he, QItemSection as ne, QItemLabel as ae, QInput as xe, QPopupProxy as Re, QDate as Qe, QTime as Vt, QCheckbox as xt, QSelect as $e, QColor as Dt, useQuasar as At, QEditor as Rt, QUploader as Ye, QList as Be, QSeparator as We, QUploaderAddTrigger as Je, date as L } from "quasar";
const Bt = { class: "flex column" }, Nt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, wt = /* @__PURE__ */ H({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {}
  },
  setup(o) {
    const e = o;
    function t() {
      const l = e.formApi.form.formStyle;
      return {
        outline: l.fieldOutlined,
        rounded: l.fieldRounded,
        square: l.fieldSquare,
        dense: l.fieldDense,
        color: l.fieldColor,
        noCaps: !0
      };
    }
    return (l, n) => (h(), q("div", Bt, [
      G("div", Nt, [
        S(a(X), Te(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), A(a(X), Te({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : O("", !0),
        e.formApi.clear ? (h(), A(a(X), Te({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : O("", !0)
      ])
    ]));
  }
}), Tt = { class: "flex row items-center" }, Et = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, Ot = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), q("div", {
      class: Z(e.sectionApi.section.cssClass)
    }, [
      G("div", Tt, [
        e.sectionApi.section.icon ? (h(), A(a(Ve), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : O("", !0),
        G("div", Et, P(e.sectionApi.section.label), 1)
      ]),
      G("div", qt, [
        (h(), A(le(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), zt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, l) => {
      const n = St("q-icon");
      return h(), A(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: l[0] || (l[0] = (i) => e.reset())
      });
    };
  }
}), $t = /* @__PURE__ */ H({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), A(a(he), Ft(kt(e.itemProps)), {
      default: y(() => [
        S(a(ne), null, {
          default: y(() => [
            S(a(ae), null, {
              default: y(() => [
                te(P(e.entry.label), 1)
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
}), It = { class: "flex column" }, Ut = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), q("div", It, [
      (h(!0), q(pe, null, ge(e.orphanErrors, (n, i) => (h(), q("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, P(i) + " : " + P(n.join(",")), 1))), 128))
    ]));
  }
}), we = class we {
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
    }, this._actionComponent = wt, this._orphanErrorsComponent = Ut, this._sectionComponent = Ot, this._wrapperResetComponent = zt, this._associationDisplayComponent = $t;
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
T(we, "_instance", new we());
let K = we;
class Ne {
  constructor(e) {
    T(this, "formApi");
    T(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const l = e, n = t, i = new Pt(l, n, this.formApi);
    return this.events.push(i), new Lt(i);
  }
  static create(e) {
    return new Ne(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((l) => {
      const n = l.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(l.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(l.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            l.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class Pt {
  constructor(e, t, l) {
    T(this, "type");
    T(this, "data");
    T(this, "formApi");
    T(this, "action", () => {
    });
    T(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = l;
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
    T(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ht = { class: "row items-center justify-end" }, Mt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", m = w(), r = w();
    function s() {
      m.value && m.value.hide();
    }
    function c() {
      return r.value ? r.value.validate() : !1;
    }
    function g() {
      return r.value ? !r.value.hasError : !1;
    }
    function k() {
      r.value && r.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(c, g, k), i || _e(() => {
        var R;
        (R = r.value) == null || R.resetValidation();
      });
    }), (R, f) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": f[1] || (f[1] = (I) => e.modelValueOnUpdate(I)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        S(a(Ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            S(a(Re), {
              ref_key: "popupProxyRef",
              ref: m,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                S(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[0] || (f[0] = (I) => e.modelValueOnUpdate(I)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: y(() => [
                    G("div", Ht, [
                      S(a(X), {
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
}), Gt = { class: "row items-center justify-end" }, jt = { class: "row items-center justify-end" }, Qt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", m = w(), r = w(), s = w();
    function c() {
      m.value && m.value.hide();
    }
    function g() {
      r.value && r.value.hide();
    }
    function k() {
      return s.value ? s.value.validate() : !1;
    }
    function R() {
      return s.value ? !s.value.hasError : !1;
    }
    function f() {
      s.value && s.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(k, R, f), i || _e(() => {
        var I;
        (I = s.value) == null || I.resetValidation();
      });
    }), (I, z) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": z[2] || (z[2] = (V) => e.modelValueOnUpdate(V)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        S(a(Ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            S(a(Re), {
              ref_key: "datePopupProxyRef",
              ref: m,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                S(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": z[0] || (z[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: y(() => [
                    G("div", Gt, [
                      S(a(X), {
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
        S(a(Ve), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            S(a(Re), {
              ref_key: "timePopupProxyRef",
              ref: r,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                S(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": z[1] || (z[1] = (V) => e.modelValueOnUpdate(V)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: y(() => [
                    G("div", jt, [
                      S(a(X), {
                        onClick: g,
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
}, Kt = /* @__PURE__ */ H({
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
    const e = o, t = w(!0), n = e.formApi.form.formStyle;
    function i() {
      return t.value === !0;
    }
    function m() {
      return t.value === !0;
    }
    function r() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (s) => {
        for (const c of e.rules)
          if (t.value = c(s), t.value !== !0)
            break;
      }
    ), Q(() => {
      e.registerBehaviourCallbacks(i, m, r);
    }), (s, c) => (h(), q("div", Yt, [
      S(a(xt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => e.modelValueOnUpdate(g)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: Z([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", Wt, P(e.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (h(), q("div", Jt, P(t.value), 1)) : O("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ H({
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
    const e = o, t = w([]), l = w([]), n = w(), i = e.formApi.form, m = i.formSettings, r = i.formStyle, s = m.rulesBehaviour === "lazy";
    function c(z, V) {
      if (z === "") {
        V(() => {
          l.value = [...t.value];
        });
        return;
      }
      V(() => {
        const U = z.toLowerCase();
        l.value = t.value.filter(($) => $.label.toLowerCase().includes(U));
      });
    }
    function g() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), l.value = e.field.staticSelectOptions ?? [];
    }
    function k() {
      return n.value ? n.value.validate() : !1;
    }
    function R() {
      return n.value ? !n.value.hasError : !1;
    }
    function f() {
      n.value && n.value.resetValidation();
    }
    function I() {
      l.value = [];
    }
    return Q(() => {
      g(), e.registerBehaviourCallbacks(k, R, f, void 0, I);
    }), (z, V) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (U) => e.modelValueOnUpdate(U)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(r).fieldOutlined,
      filled: a(r).fieldFilled,
      standout: a(r).fieldStandout,
      borderless: a(r).fieldBorderless,
      rounded: a(r).fieldRounded,
      square: a(r).fieldSquare,
      dense: a(r).fieldDense,
      hideBottomSpace: a(r).fieldHideBottomSpace,
      color: a(r).fieldColor,
      bgColor: a(r).fieldBgColor,
      class: Z(e.field.cssClass),
      "lazy-rules": s,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: l.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: c
    }, {
      "no-option": y(() => [
        S(a(he), {
          dense: a(r).fieldDense
        }, {
          default: y(() => [
            S(a(ne), null, {
              default: y(() => [
                S(a(ae), null, {
                  default: y(() => [
                    te(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, m = n.rulesBehaviour === "lazy", r = w([]), s = w(
      k()
    ), c = w(), g = w(Pe);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function R(v, d) {
      if (v === g.value) {
        d(() => {
        });
        return;
      }
      const u = e.formApi.getAssociationDataCallback();
      s.value = k(), g.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, u({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((F) => {
        d(() => {
          r.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = k();
      });
    }
    function f() {
      var d, u;
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (r.value = [
        {
          label: ((d = e.field.associationData[0]) == null ? void 0 : d.label) ?? "???",
          value: v,
          data: (u = e.field.associationData[0]) == null ? void 0 : u.data
        }
      ]);
    }
    function I() {
      return c.value ? c.value.validate() : !1;
    }
    function z() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function U() {
      s.value = k(), r.value = [], g.value = Pe;
    }
    function $(v) {
      const d = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === d && d !== -1) {
        const u = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: u.resourceName,
          resourceId: u.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: u.context
        }).then((F) => {
          r.value = r.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return Q(() => {
      e.registerBehaviourCallbacks(
        I,
        z,
        V,
        f,
        U
      ), _e(() => {
        f();
      });
    }), (v, d) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
      label: e.field.label,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: Z(e.field.cssClass),
      "lazy-rules": m,
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
      onFilter: R,
      onVirtualScroll: $
    }, {
      "no-option": y(() => [
        S(a(he), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            S(a(ne), null, {
              default: y(() => [
                S(a(ae), null, {
                  default: y(() => [
                    te(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: y((u) => [
        (h(), A(le(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: u.opt,
          itemProps: u.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), He = "__init", Me = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, l = e.formApi.form, n = l.formSettings, i = l.formStyle, m = n.rulesBehaviour === "lazy", r = w([]), s = w(
      k()
    ), c = w(), g = w(He);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function R(v, d) {
      if (v === g.value) {
        d(() => {
        });
        return;
      }
      const u = e.formApi.getAssociationDataCallback();
      s.value = k(), g.value = v;
      const x = e.formApi.form;
      s.value.isLoading = !0, u({
        resourceName: x.resourceName,
        resourceId: x.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: x.context
      }).then((F) => {
        d(() => {
          r.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = k();
      });
    }
    function f() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (r.value = v.map((d, u) => ({
        label: e.field.associationData[u].label ?? "???",
        value: d,
        data: e.field.associationData[u].data
      })));
    }
    function I() {
      return c.value ? c.value.validate() : !1;
    }
    function z() {
      return c.value ? !c.value.hasError : !1;
    }
    function V() {
      c.value && c.value.resetValidation();
    }
    function U() {
      s.value = k(), r.value = [], g.value = He;
    }
    function $(v) {
      const d = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage <= s.value.lastPage && v.to === d && d !== -1) {
        const u = e.formApi.form, x = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, x({
          resourceName: u.resourceName,
          resourceId: u.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: u.context
        }).then((F) => {
          r.value = r.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, v.ref.refresh();
        });
      }
    }
    return Q(() => {
      e.registerBehaviourCallbacks(
        I,
        z,
        V,
        f,
        U
      ), _e(() => {
        f();
      });
    }), (v, d) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[0] || (d[0] = (u) => e.modelValueOnUpdate(u)),
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(i).fieldOutlined,
      filled: a(i).fieldFilled,
      standout: a(i).fieldStandout,
      borderless: a(i).fieldBorderless,
      rounded: a(i).fieldRounded,
      square: a(i).fieldSquare,
      dense: a(i).fieldDense,
      hideBottomSpace: a(i).fieldHideBottomSpace,
      color: a(i).fieldColor,
      bgColor: a(i).fieldBgColor,
      class: Z(e.field.cssClass),
      "lazy-rules": m,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: e.clear,
      onFilter: R,
      onVirtualScroll: $
    }, {
      "no-option": y(() => [
        S(a(he), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            S(a(ne), null, {
              default: y(() => [
                S(a(ae), null, {
                  default: y(() => [
                    te(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: y((u) => [
        (h(), A(le(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: u.opt,
          itemProps: u.itemProps
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", m = w();
    function r() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function c() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, k) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (R) => e.modelValueOnUpdate(R)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Zt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", m = w();
    function r() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function c() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, k) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (R) => e.modelValueOnUpdate(R)),
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
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), en = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, l = t.formSettings, n = t.formStyle, i = l.rulesBehaviour === "lazy", m = w();
    function r() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function c() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, k) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[1] || (k[1] = (R) => e.modelValueOnUpdate(R)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        S(a(Ve), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            S(a(Re), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                S(a(Dt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": k[0] || (k[0] = (R) => e.modelValueOnUpdate(R))
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
}), tn = /* @__PURE__ */ H({
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
    const e = o, t = At(), n = e.formApi.form.formStyle, i = [
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
    ], m = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, r = w();
    function s() {
      return !!r.value;
    }
    function c() {
      return !!r.value;
    }
    function g() {
    }
    return Q(() => {
      e.registerBehaviourCallbacks(s, c, g);
    }), (k, R) => e.modelValue ? (h(), A(a(Rt), {
      key: 0,
      ref_key: "fieldRef",
      ref: r,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (f) => e.modelValueOnUpdate(f)),
      toolbar: i,
      fonts: m,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: Z(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : O("", !0);
  }
}), nn = /* @__PURE__ */ H({
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
    const t = o.formApi.form, l = t.formSettings;
    return t.formStyle, l.rulesBehaviour, (n, i) => " TODO json edit ? ";
  }
});
function E(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function ve(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
const an = { class: "flex column" }, on = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, ln = { class: "col" }, rn = { class: "q-uploader__title" }, sn = {
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
}, fn = /* @__PURE__ */ H({
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
    const e = o, l = e.formApi.form.formStyle, n = w(null);
    function i() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d), V();
    }
    function m() {
      var u;
      let d = e.modelValue;
      d.add = [], d.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((x) => x.attachment_id)) ?? [], e.modelValueOnUpdate(d), V();
    }
    function r() {
      return V(), s();
    }
    function s() {
      return n.value === null;
    }
    function c() {
      n.value = null;
    }
    async function g(d) {
      return new Promise((u) => {
        const x = new Blob([d]), F = new FileReader();
        F.onload = (Y) => {
          var ue;
          const ie = ((ue = Y.target) == null ? void 0 : ue.result) ?? "", [ee, se] = ie.split(",");
          u(se);
        }, F.readAsDataURL(x);
      });
    }
    async function k(d) {
      return {
        key: `${d.lastModified}${d.name}`,
        size: d.size,
        filename: d.name,
        contentType: d.type,
        base64: await g(await d.arrayBuffer())
      };
    }
    async function R(d) {
      if (!d[0])
        return;
      const u = await k(d[0]);
      let x = e.modelValue;
      x.add = [u], e.modelValueOnUpdate(x), V();
    }
    function f(d) {
      if (!d[0])
        return;
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), V();
    }
    function I(d) {
      let u = e.modelValue;
      u.delete = [d.attachment_id], e.modelValueOnUpdate(u), V();
    }
    function z() {
      let d = e.modelValue;
      d.delete = [], e.modelValueOnUpdate(d), V();
    }
    function V() {
      n.value = null;
      for (const d of e.rules) {
        const u = d(e.modelValue);
        if (typeof u == "string") {
          n.value = u;
          break;
        }
      }
    }
    const U = re(() => (e.field.attachmentData ?? []).length === 0), $ = re(() => e.modelValue ? e.modelValue.delete : []), v = re(() => {
      var d, u;
      return e.modelValue ? (((d = e.field.attachmentData) == null ? void 0 : d.length) ?? 0) === 0 || (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Q(() => {
      e.registerBehaviourCallbacks(r, s, c, i, m);
    }), (d, u) => (h(), q("div", an, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: y((x) => [
          G("div", on, [
            G("div", ln, [
              G("div", rn, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", sn, P(e.field.hint), 1)) : O("", !0)
            ]),
            x.canAddFiles && v.value ? (h(), A(a(X), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: x.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                S(a(Je))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: y((x) => [
          U.value ? O("", !0) : (h(), q("div", un, [
            u[0] || (u[0] = G("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            S(a(Be), { separator: "" }, {
              default: y(() => [
                (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (F) => (h(), A(a(he), {
                  key: F.attachment_id
                }, {
                  default: y(() => [
                    S(a(ne), null, {
                      default: y(() => [
                        S(a(ae), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            te(P(F.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        S(a(ae), { caption: "" }, {
                          default: y(() => [
                            te(P(a(ve)(F.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (h(), A(a(ne), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        $.value.includes(F.attachment_id) ? O("", !0) : (h(), A(a(X), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => I(F)
                        }, null, 8, ["disable", "onClick"])),
                        $.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), A(a(X), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: z
                        }, null, 8, ["disable"])) : O("", !0)
                      ]),
                      _: 2
                    }, 1024)) : O("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !U.value && x.files.length > 0 ? (h(), A(a(We), { key: 1 })) : O("", !0),
          x.files.length > 0 ? (h(), q("div", dn, [
            u[1] || (u[1] = G("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            S(a(Be), { separator: "" }, {
              default: y(() => [
                (h(!0), q(pe, null, ge(x.files, (F) => (h(), A(a(he), {
                  key: F.__key
                }, {
                  default: y(() => [
                    S(a(ne), null, {
                      default: y(() => [
                        S(a(ae), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            te(P(F.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        S(a(ae), { caption: "" }, {
                          default: y(() => [
                            te(P(F.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    S(a(ne), {
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        S(a(X), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => x.removeFile(F)
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
          ])) : O("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (h(), q("div", cn, P(n.value), 1)) : O("", !0)
    ]));
  }
}), mn = { class: "flex column" }, pn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, gn = { class: "col" }, hn = { class: "q-uploader__title" }, vn = {
  key: 0,
  class: "caption"
}, yn = {
  key: 0,
  class: "flex column"
}, bn = { class: "text-weight-medium text-body2" }, _n = {
  key: 2,
  class: "flex column"
}, Cn = { class: "text-weight-medium text-body2" }, Sn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Fn = /* @__PURE__ */ H({
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
    const e = o, l = e.formApi.form.formStyle, n = w(null);
    function i() {
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), V();
    }
    function m() {
      var d;
      let v = e.modelValue;
      v.add = [], v.delete = ((d = e.field.attachmentData) == null ? void 0 : d.map((u) => u.attachment_id)) ?? [], e.modelValueOnUpdate(v), V();
    }
    function r() {
      return V(), s();
    }
    function s() {
      return n.value === null;
    }
    function c() {
      n.value = null;
    }
    async function g(v) {
      return new Promise((d) => {
        const u = new Blob([v]), x = new FileReader();
        x.onload = (F) => {
          var se;
          const Y = ((se = F.target) == null ? void 0 : se.result) ?? "", [ie, ee] = Y.split(",");
          d(ee);
        }, x.readAsDataURL(u);
      });
    }
    async function k(v) {
      return {
        key: `${v.lastModified}${v.name}`,
        size: v.size,
        filename: v.name,
        contentType: v.type,
        base64: await g(await v.arrayBuffer())
      };
    }
    async function R(v) {
      for (const d of v) {
        const u = await k(d);
        let x = e.modelValue;
        x.add.push(u), e.modelValueOnUpdate(x);
      }
      V();
    }
    async function f(v) {
      for (const d of v) {
        const u = await k(d);
        let x = e.modelValue;
        x.add = x.add.filter((F) => F.key !== u.key), e.modelValueOnUpdate(x);
      }
      V();
    }
    function I(v) {
      let d = e.modelValue;
      d.delete.push(v.attachment_id), e.modelValueOnUpdate(d), V();
    }
    function z(v) {
      let d = e.modelValue;
      d.delete = d.delete.filter((u) => u !== v.attachment_id), e.modelValueOnUpdate(d), V();
    }
    function V() {
      n.value = null;
      for (const v of e.rules) {
        const d = v(e.modelValue);
        if (typeof d == "string") {
          n.value = d;
          break;
        }
      }
    }
    const U = re(() => (e.field.attachmentData ?? []).length === 0), $ = re(() => e.modelValue ? e.modelValue.delete : []);
    return Q(() => {
      e.registerBehaviourCallbacks(r, s, c, i, m);
    }), (v, d) => (h(), q("div", mn, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: y((u) => [
          G("div", pn, [
            G("div", gn, [
              G("div", hn, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", vn, P(e.field.hint), 1)) : O("", !0)
            ]),
            u.canAddFiles ? (h(), A(a(X), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: u.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                S(a(Je))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: y((u) => {
          var x;
          return [
            U.value ? O("", !0) : (h(), q("div", yn, [
              G("div", bn, "Fichier" + P((((x = e.field.attachmentData) == null ? void 0 : x.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              S(a(Be), { separator: "" }, {
                default: y(() => [
                  (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (F) => (h(), A(a(he), {
                    key: F.attachment_id
                  }, {
                    default: y(() => [
                      S(a(ne), null, {
                        default: y(() => [
                          S(a(ae), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              te(P(F.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          S(a(ae), { caption: "" }, {
                            default: y(() => [
                              te(P(a(ve)(F.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (h(), A(a(ne), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          $.value.includes(F.attachment_id) ? O("", !0) : (h(), A(a(X), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => I(F)
                          }, null, 8, ["disable", "onClick"])),
                          $.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), A(a(X), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Y) => z(F)
                          }, null, 8, ["disable", "onClick"])) : O("", !0)
                        ]),
                        _: 2
                      }, 1024)) : O("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              })
            ])),
            !U.value && u.files.length > 0 ? (h(), A(a(We), { key: 1 })) : O("", !0),
            u.files.length > 0 ? (h(), q("div", _n, [
              G("div", Cn, "Fichier" + P(u.files.length > 0 ? "s" : "") + " à ajouter", 1),
              S(a(Be), { separator: "" }, {
                default: y(() => [
                  (h(!0), q(pe, null, ge(u.files, (F) => (h(), A(a(he), {
                    key: F.__key
                  }, {
                    default: y(() => [
                      S(a(ne), null, {
                        default: y(() => [
                          S(a(ae), { class: "full-width ellipsis" }, {
                            default: y(() => [
                              te(P(F.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          S(a(ae), { caption: "" }, {
                            default: y(() => [
                              te(P(F.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      S(a(ne), {
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          S(a(X), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => u.removeFile(F)
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
            ])) : O("", !0)
          ];
        }),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (h(), q("div", Sn, P(n.value), 1)) : O("", !0)
    ]));
  }
});
class me {
  constructor(e, t, l, n, i, m, r, s, c) {
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
    this.dynamicComponentRecord = l.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = r, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...K.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...m,
      ...K.getGlobalFormStyle()
    }, this.actionComponent = l.actionComponent ?? K.getGlobalActionComponent(), this.orphanErrorsComponent = l.orphanErrorsComponent ?? K.getGlobalOrphanErrorComponent(), this.sectionComponent = l.sectionComponent ?? K.getGlobalSectionComponent(), this.wrapperResetComponent = l.wrapperResetComponent ?? K.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l.associationDisplayComponent ?? K.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
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
      actionComponent: J(K.getGlobalActionComponent()),
      orphanErrorsComponent: J(K.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: J(K.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {},
      allowBulk: !1
    };
  }
  static getForm(e, t, l, n, i, m, r, s, c) {
    return new me(
      e,
      t,
      l,
      n,
      i,
      m,
      r,
      s,
      c
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Ne.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), l = Ne.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (m, r) => {
        const s = [];
        m.fields.forEach((f) => {
          const I = this.dynamicComponentRecord[`field-${f.field_name}-before`], z = me.getFieldComponentByFormFieldType(f), V = this.dynamicComponentRecord[`field-${f.field_name}-after`], U = {
            associationDisplayComponent: J(
              this.associationDisplayComponent
            ),
            regularFieldType: me.getRegularFieldTypeByFieldType(
              f.field_type
            )
          };
          let $ = f.label;
          this.formSettings.requiredFieldsHasAsterisk && f.rules.find((d) => d.type === "required") && ($ = $.concat("*"));
          const v = {
            type: f.field_type,
            extraType: f.field_extra_type,
            metadata: Object.freeze(f),
            label: $,
            hint: f.hint ?? void 0,
            prefix: f.prefix ?? void 0,
            suffix: f.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? m.readonly ?? f.readonly ?? void 0,
            cssClass: f.css_class ?? void 0,
            staticSelectOptions: f.static_select_options,
            associationData: f.field_association_data,
            attachmentData: f.field_attachment_data,
            rules: f.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: I ? J(I) : void 0,
            mainComponent: J(z),
            afterComponent: V ? J(V) : void 0,
            events: l.fields[f.field_name] ?? {},
            componentOptions: U
          };
          s.push(v), t.add(f.field_name);
        });
        const c = this.dynamicComponentRecord[`section-${m.name ?? r}-before`], g = this.sectionComponent, k = this.dynamicComponentRecord[`section-${m.name ?? r}-after`], R = {
          label: m.label ?? void 0,
          icon: m.icon ?? void 0,
          cssClass: m.css_class ?? void 0,
          hidden: !1,
          name: m.name ?? r.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? m.readonly ?? void 0,
          events: l.sections[m.name ?? r.toString()] ?? {},
          beforeComponent: c ? J(c) : void 0,
          mainComponent: J(g),
          fieldsComponent: void 0,
          afterComponent: k ? J(k) : void 0,
          fields: s
        };
        n.push(R);
      }
    );
    const i = {
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
      events: l.form,
      actionComponent: J(this.actionComponent),
      orphanErrorsComponent: J(this.orphanErrorsComponent),
      wrapperResetComponent: J(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((m, r) => m + r.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), i;
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
        return Mt;
      case "datetime":
        return Qt;
      case "select":
        return Xt;
      case "selectBelongsTo":
        return Le;
      case "selectHasMany":
        return Me;
      case "selectHasAndBelongsToMany":
        return Me;
      case "selectHasOne":
        return Le;
      case "checkbox":
        return Kt;
      case "object":
        return nn;
      case "attachmentHasOne":
        return fn;
      case "attachmentHasMany":
        return Fn;
      default:
        return Ee;
    }
  }
}
const kn = { class: "flex column" }, Vn = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = null, n = null, i = null;
    const m = Ge(), r = {
      softReset: g,
      reset: k,
      clear: R,
      validate: z,
      isValid: V,
      isInvalid: U,
      hide: f,
      unhide: I,
      resetValidation: $,
      getFields: v,
      setReadonlyState: d,
      setCssClass: u,
      setIcon: x,
      setLabel: F,
      section: t.section
    }, s = w(/* @__PURE__ */ new Map());
    function c() {
      t.section.fields.forEach((b) => {
        const D = b.metadata.field_name, M = t.formApi.getFieldByName(D);
        M && s.value.set(D, M);
      });
    }
    function g() {
      s.value.forEach((b) => {
        b.softReset();
      });
    }
    function k() {
      s.value.forEach((b) => {
        b.reset();
      }), E(t.section.events.onReset);
    }
    function R() {
      s.value.forEach((b) => {
        b.clear();
      }), E(t.section.events.onClear);
    }
    function f() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((D) => {
        D.hide();
      }), b.hidden = !0, E(t.section.events.onHide));
    }
    function I() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((D) => {
        D.unhide();
      }), b.hidden = !1, E(t.section.events.onUnhide));
    }
    function z() {
      let b = !0;
      return s.value.forEach((D) => {
        if (!D.validate()) {
          b = !1;
          return;
        }
      }), E(t.section.events.onValidated), b;
    }
    function V() {
      let b = !0;
      return s.value.forEach((D) => {
        if (!D.isValid()) {
          b = !1;
          return;
        }
      }), b;
    }
    function U() {
      return !V();
    }
    function $() {
      s.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function v() {
      return s.value;
    }
    function d(b) {
      const D = t.privateFormApi.getSectionRef(
        t.section.name
      );
      D && (D.readonly = b);
    }
    function u(b) {
      const D = t.privateFormApi.getSectionRef(
        t.section.name
      );
      D && (D.cssClass = b);
    }
    function x(b) {
      const D = t.privateFormApi.getSectionRef(
        t.section.name
      );
      D && (D.icon = b);
    }
    function F(b) {
      const D = t.privateFormApi.getSectionRef(
        t.section.name
      );
      D && (D.label = b);
    }
    function Y() {
      const b = {};
      for (const [D, M] of s.value)
        b[D] = M.getValueSerialized();
      return b;
    }
    function ie() {
      const b = m.default;
      if (!b) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const D = H({
        inheritAttrs: !1,
        setup(M, { attrs: Ce, slots: Fe }) {
          return () => b(
            {
              ...M,
              ...Ce
            },
            Fe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, J(D));
    }
    e(r);
    const ee = re(() => V()), se = re(() => U()), ue = re(() => Y());
    return j(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        l == null || l(), l = null, b && (l = j(ee, (D) => {
          D && E(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = j(se, (D) => {
          var M;
          D && E((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onUpdate;
      },
      (b) => {
        i == null || i(), i = null, b && (i = j(
          ue,
          () => {
            var D;
            E((D = t.section) == null ? void 0 : D.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Q(() => {
      var D;
      ie();
      const b = (D = je()) == null ? void 0 : D.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), _e(() => {
        var M;
        c(), E((M = t.section) == null ? void 0 : M.events.onReady);
      });
    }), (b, D) => Oe((h(), q("div", kn, [
      t.section.beforeComponent ? (h(), A(le(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), A(le(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), A(le(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : O("", !0)
    ], 512)), [
      [ze, t.section.hidden !== !0]
    ]);
  }
});
function xn(o, e) {
  const t = o.rules ?? [], l = o.type, n = e.form, i = (c, g, k) => c[g] ? k ? () => m(c[g]) : () => c[g] : c.compare_to ? () => {
    var R;
    return ((R = e.getFieldByName(c.compare_to)) == null ? void 0 : R.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", m = (c) => String(
    L.formatDate(
      L.extractDate(c, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), r = [], s = [];
  switch (l) {
    case "date":
      r.push(qe(n.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(qe(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((c) => {
    const g = c;
    switch (g.type) {
      case "required":
        r.push(Dn());
        break;
      case "absence":
        r.push(Rn());
        break;
      case "acceptance":
        r.push(Bn());
        break;
      case "inclusion":
        r.push(Ke(g.including));
        break;
      case "exclusion":
        r.push(An(g.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        s.push("allowNull");
        break;
      case "allowBlank":
        s.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(Tn());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          En(
            i(g, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          qn(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          On(
            i(g, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          zn(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          $n(i(g, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          In(
            i(g, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Un());
        break;
      case "numberNumericOnly":
        r.push(Pn());
        break;
      case "numberEvenOnly":
        r.push(Ln());
        break;
      case "numberOddOnly":
        r.push(Hn());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Mn(
            i(g, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Gn(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          jn(
            i(g, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Qn(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          Jn(
            i(g, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Wn(i(g, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Yn(
            () => g.min,
            () => g.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Kn(
            i(g, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(qe(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          Xn(
            i(g, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Zn(
            i(g, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          ea(
            i(g, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          ta(
            i(g, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          na(
            i(g, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          aa(
            i(g, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          la()
        );
        break;
      case "allowFileContentType":
        r.push(
          ra(
            i(g, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          ia(
            i(g, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          ua(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          sa(
            i(g, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          da(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ca(
            i(g, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          fa(
            i(g, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          ma(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          pa(
            i(g, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((c) => {
    switch (c) {
      case "allowBlank":
        return wn(r);
      case "allowNull":
        return Nn(r);
    }
  }) : r;
}
function Dn() {
  return (o) => !!o || "Ce champ est requis";
}
function Ke(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function An(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ke.toString()}`
  );
}
function Rn() {
  return (o) => !o || "Ce champ doit être vide";
}
function Bn() {
  return (o) => !!o || "Doit être accepté";
}
function Nn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function wn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const l = t(e);
    if (l !== !0)
      return l;
  }), !0);
}
function Tn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function En(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function qn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function On(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function zn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function $n(o, e) {
  return (t) => {
    const l = o();
    return Number(t) === l || `Égale à ${l}`;
  };
}
function In(o, e) {
  return (t) => {
    const l = o();
    return Number(t) !== l || `Doit être différent de ${o}`;
  };
}
function Un() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Pn() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Ln() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Hn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Mn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Gn(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function jn(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Qn(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Yn(o, e) {
  return (t) => {
    const l = o(), n = e();
    return String(t).length >= l && String(t).length <= n || `Entre ${l} et ${n}`;
  };
}
function Wn(o, e) {
  return (t) => {
    const l = o();
    return String(t) === l || `Égale à ${l}`;
  };
}
function Jn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Kn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Xn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n <= i || `Inf. ou égal à ${l}`;
  };
}
function Zn(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n < i || `Inf. à ${l}`;
  };
}
function ea(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n >= i || `Sup. ou égal à ${l}`;
  };
}
function ta(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n > i || `Sup. à ${l}`;
  };
}
function na(o, e) {
  return (t) => {
    const l = o(), n = L.extractDate(String(t), e), i = L.extractDate(l, e);
    return n === i || `Égale à ${n}`;
  };
}
function aa(o, e) {
  return (t) => {
    const l = o();
    return L.extractDate(String(t), e) !== L.extractDate(l, e) || `Doit être différent de ${l}`;
  };
}
function qe(o) {
  return (e) => e == null || e === "" ? !0 : oa(e, o) || `Date invalide. Format : ${o}`;
}
function oa(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = L.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : L.formatDate(t, e) === o;
}
function la() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function ra(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    t.add.forEach((m) => {
      n && (l.includes(m.contentType) || (n = !1));
    });
    const i = o.length > 1;
    return n || `Type${i ? "s" : ""} autorisé${i ? "s" : ""} : ${l.join(",")}`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && l !== i.size && (n = !1);
    }), n || `Taille par fichier ${ve(l)}`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < l && (n = !1);
    }), n || `Taille par fichier min. ${ve(l)}`;
  };
}
function ua(o) {
  return (e) => {
    const t = e, l = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > l && (n = !1);
    }), n || `Taille par fichier max. ${ve(l)}`;
  };
}
function da(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length <= l || `${l} fichier${l > 1 ? "s" : ""} max.`;
  };
}
function ca(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.length >= l || `${l} fichier${l > 1 ? "s" : ""} min.`;
  };
}
function fa(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) <= l || `${ve(l)} max.`;
  };
}
function ma(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) >= l || `${ve(l)} min.`;
  };
}
function pa(o) {
  return (e) => {
    const t = e, l = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) === l || `Taille totale ${ve(l)}`;
  };
}
const ga = {
  computeServerRules: xn
}, ha = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, va = ["index"], ya = /* @__PURE__ */ H({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = () => !0, n = () => !0, i = () => {
    }, m = () => {
    }, r = () => {
    };
    const s = V(), c = w(), g = w([]);
    function k() {
      c.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), c.value = f(c.value);
    }
    function R() {
      c.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), c.value = f(c.value), E(t.field.events.onReset), m(), _e(() => {
        Ce();
      });
    }
    function f(_) {
      const N = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return _ == null || _ === "" ? !1 : _;
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), N.formSettings.backendDateFormat),
            N.formSettings.dateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(
              String(_),
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
      return _;
    }
    function I(_) {
      const N = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), N.formSettings.dateFormat),
            N.formSettings.backendDateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : L.formatDate(
            L.extractDate(String(_), N.formSettings.datetimeFormat),
            N.formSettings.backendDatetimeFormat
          );
        case "selectBelongsTo":
        case "selectHasOne":
          if (_ === void 0)
            return null;
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
          if (_ === void 0)
            return [];
      }
      return _;
    }
    function z() {
      switch (t.field.type) {
        case "string":
          c.value = "";
          break;
        case "checkbox":
          c.value = !1;
          break;
        case "date":
          c.value = null;
          break;
        case "datetime":
          c.value = null;
          break;
        case "number":
          c.value = null;
          break;
        case "select":
          c.value = void 0;
          break;
        case "text":
          c.value = "";
          break;
        case "object":
          c.value = {};
          break;
        case "selectBelongsTo":
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
        case "selectHasOne":
          c.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          c.value = {
            add: [],
            delete: []
          };
          break;
      }
      r(), E(t.field.events.onClear);
    }
    function V() {
      return ga.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function U(_) {
      c.value = _;
    }
    function $() {
      return a(c);
    }
    function v() {
      return I(a(c));
    }
    function d(_) {
      g.value = _;
    }
    function u() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !0, E(t.field.events.onHide));
    }
    function x() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !1, E(t.field.events.onUnhide));
    }
    function F(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.readonly = _);
    }
    function Y(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.hint = _);
    }
    function ie(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.cssClass = _);
    }
    function ee(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.suffix = _);
    }
    function se(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.prefix = _);
    }
    function ue(_) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.label = _);
    }
    function b() {
      const _ = l();
      return E(t.field.events.onValidated), _;
    }
    function D() {
      return n();
    }
    function M() {
      return !D();
    }
    function Ce() {
      return i();
    }
    function Fe(_, N, de, Se, De) {
      l = _, n = N, i = de, Se && (m = Se), De && (r = De);
    }
    const ke = {
      softReset: k,
      reset: R,
      clear: z,
      validate: b,
      isValid: D,
      isInvalid: M,
      hide: u,
      unhide: x,
      resetValidation: Ce,
      getValueDeserialized: v,
      getValueSerialized: $,
      setupBackendErrors: d,
      setReadonlyState: F,
      setHint: Y,
      setCssClass: ie,
      setSuffix: ee,
      setPrefix: se,
      setLabel: ue,
      setValue: U,
      field: t.field
    };
    return e(ke), j(
      () => t.field.events.onUpdate ? c.value : null,
      () => {
        E(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? c.value : null,
      (_) => {
        E(_ ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Q(() => {
      var N, de;
      k();
      const _ = (N = je()) == null ? void 0 : N.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), E((de = t.field) == null ? void 0 : de.events.onReady);
    }), (_, N) => Oe((h(), q("div", null, [
      t.field.beforeComponent ? (h(), A(le(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ke
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), A(le(t.field.mainComponent), {
        modelValue: c.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: R,
        clear: z,
        getValueDeserialized: v,
        getValueSerialized: $,
        validate: b,
        modelValueOnUpdate: U,
        registerBehaviourCallbacks: Fe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), A(le(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ke
      }, null, 8, ["formApi"])) : O("", !0),
      g.value.length > 0 ? (h(), q("div", ha, [
        (h(!0), q(pe, null, ge(g.value, (de, Se) => (h(), q("div", {
          index: Se,
          class: "flex column"
        }, P(de), 9, va))), 256))
      ])) : O("", !0)
    ], 512)), [
      [ze, t.field.hidden !== !0]
    ]);
  }
}), ba = { class: "flex column" }, Fa = /* @__PURE__ */ H({
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
    let l = null, n = "", i = 0, m = 0, r = null, s = null, c = null, g = null, k = null;
    const R = Ge(), f = w(me.getEmptyFormBeforeInit()), I = w(!1), z = w(!1), V = w(!1), U = w(!1), $ = w("create"), v = w({}), d = w(/* @__PURE__ */ new Map()), u = w(/* @__PURE__ */ new Map());
    async function x() {
      l = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = me.getForm(
        t.resourceName,
        t.resourceId,
        ie(),
        l,
        t.formSettings,
        t.formStyle,
        t.context,
        ce,
        t.eventManager
      ), i = f.value.sections.length, m = f.value.sections.map((p) => p.fields).flat().length, t.resourceId && ($.value = "edit");
    }
    async function F() {
      var B, W, ye;
      if (!ue())
        return;
      E((B = f.value) == null ? void 0 : B.events.onSubmit), U.value = !0, _();
      const p = ee(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: p,
        context: t.context
      });
      if (g = C.resource_data, C.success)
        v.value = {}, $.value === "create" && ($.value = "edit"), l && C.resource_data && (l.resource_data = C.resource_data), f.value = me.getForm(
          t.resourceName,
          t.resourceId,
          ie(),
          {
            form: C.form,
            resource_data: C.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ce,
          t.eventManager
        ), M(), n = JSON.stringify(ee()), E((ye = f.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        v.value = {};
        const be = [];
        for (const [oe, fe] of u.value) {
          const Ae = C.errors[oe];
          Ae && (fe.setupBackendErrors(Ae), be.push(oe));
        }
        Object.entries(C.errors).forEach((oe) => {
          be.includes(oe[0]) || (v.value[oe[0]] = oe[1]);
        }), E((W = f.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      U.value = !1;
    }
    async function Y(p) {
      var W, ye, be;
      if (!f.value.allowBulk || $.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!ue())
        return;
      E((W = f.value) == null ? void 0 : W.events.onSubmit), U.value = !0, _();
      const C = ee(), B = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: C,
        bulkCount: p,
        context: t.context
      });
      if (k = B.bulk_data, B.success)
        v.value = {}, $.value === "create" && ($.value = "edit"), l && B.resource_data && (l.resource_data = B.resource_data), f.value = me.getForm(
          t.resourceName,
          t.resourceId,
          ie(),
          {
            form: B.form,
            resource_data: B.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ce,
          t.eventManager
        ), M(), n = JSON.stringify(ee()), E((be = f.value) == null ? void 0 : be.events.onSubmitSuccess);
      else {
        v.value = {};
        const oe = [];
        for (const [fe, Ae] of u.value) {
          const Ue = B.errors[fe];
          Ue && (Ae.setupBackendErrors(Ue), oe.push(fe));
        }
        Object.entries(B.errors).forEach((fe) => {
          oe.includes(fe[0]) || (v.value[fe[0]] = fe[1]);
        }), E((ye = f.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
      }
      U.value = !1;
    }
    function ie() {
      const p = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const C in R) {
        const B = R[C];
        if (B) {
          const W = H({
            inheritAttrs: !1,
            setup(ye, { attrs: be, slots: oe }) {
              return () => B({
                ...ye,
                ...be,
                innerSlots: oe
              });
            }
          });
          switch (C) {
            case "sections":
              p.sectionComponent = W;
              break;
            case "actions":
              p.actionComponent = W;
              break;
            case "orphan-errors":
              p.orphanErrorsComponent = W;
              break;
            case "association-display":
              p.associationDisplayComponent = W;
              break;
            default:
              p.dynamicComponentRecord[C] = W;
              break;
          }
        }
      }
      return p;
    }
    function ee() {
      const p = {};
      for (const [C, B] of u.value)
        p[C] = B.getValueDeserialized();
      return p;
    }
    function se() {
      const p = {};
      for (const [C, B] of u.value)
        p[C] = B.getValueSerialized();
      return p;
    }
    function ue() {
      var C;
      let p = !0;
      return u.value.forEach((B) => {
        if (!B.validate()) {
          p = !1;
          return;
        }
      }), E((C = f.value) == null ? void 0 : C.events.onValidated), p;
    }
    function b() {
      let p = !0;
      return u.value.forEach((C) => {
        if (!C.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function D() {
      return !b();
    }
    function M() {
      d.value.forEach((p) => {
        p.softReset();
      });
    }
    function Ce() {
      var p;
      u.value.forEach((C) => {
        C.reset();
      }), E((p = f.value) == null ? void 0 : p.events.onReset);
    }
    function Fe() {
      var p;
      u.value.forEach((C) => {
        C.clear();
      }), E((p = f.value) == null ? void 0 : p.events.onClear);
    }
    function ke() {
      u.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function _() {
      u.value.forEach((p) => {
        p.setupBackendErrors([]);
      });
    }
    function N(p) {
      if (l)
        return l.resource_data[p];
    }
    function de(p) {
      return d.value.get(p);
    }
    function Se(p) {
      return [...d.value.values()].at(p);
    }
    function De() {
      return d.value;
    }
    function Xe(p) {
      return u.value.get(p);
    }
    function Ze() {
      return u.value;
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
      ].forEach((C) => {
        (t[C] === null || t[C] === void 0) && console.warn(`Missing props for <Submit64> -> ${C}`);
      });
    }
    function nt() {
      return a($);
    }
    function at() {
      return n !== JSON.stringify(ee());
    }
    function ot(p) {
      f.value && (f.value.context = p);
    }
    function lt(p) {
      f.value && (f.value.cssClass = p);
    }
    function rt(p) {
      f.value && (f.value.readonly = p);
    }
    function it() {
      return V.value;
    }
    function st() {
      return g;
    }
    function ut() {
      return k;
    }
    function dt() {
      return f;
    }
    function ct(p) {
      var C;
      return (C = f.value) == null ? void 0 : C.sections.find((B) => B.name === p);
    }
    function ft(p) {
      var C;
      return (C = f.value) == null ? void 0 : C.sections.map((B) => B.fields).flat().find((B) => B.metadata.field_name === p);
    }
    function mt(p, C) {
      d.value.set(p, C), i === d.value.size && (I.value = !0);
    }
    function pt(p, C) {
      u.value.set(p, C), m === u.value.size && (z.value = !0);
    }
    function gt(p, C) {
      p.fieldsComponent = C;
    }
    const Ie = {
      getFormRef: dt,
      getSectionRef: ct,
      getFieldRef: ft,
      registerSectionWrapperRef: mt,
      registerFieldWrapperRef: pt,
      setSectionFieldComponent: gt
    }, ht = new Proxy({}, {
      get(p, C) {
        var B;
        return (B = f.value) == null ? void 0 : B[C];
      }
    }), ce = {
      getMode: nt,
      getSectionByName: de,
      getSectionByIndex: Se,
      getSections: De,
      getFieldByName: Xe,
      getFields: Ze,
      validate: ue,
      isValid: b,
      isInvalid: D,
      softReset: M,
      reset: Ce,
      clear: Fe,
      resetValidation: ke,
      submit: F,
      submitBulk: Y,
      valuesHasChanged: at,
      getInitialValueByFieldName: N,
      getAssociationDataCallback: et,
      setContext: ot,
      setCssClass: lt,
      setReadonlyState: rt,
      isReady: it,
      getSubmitData: st,
      getBulkSubmitData: ut,
      form: ht
    };
    e(ce);
    const vt = re(() => b()), yt = re(() => D()), bt = re(() => se());
    return j(
      () => I.value && z.value,
      (p) => {
        var C;
        p && !V.value && (E((C = f.value) == null ? void 0 : C.events.onReady), V.value = !0);
      }
    ), j(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = j(vt, (C) => {
          var B;
          C && E((B = f.value) == null ? void 0 : B.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        s == null || s(), s = null, p && (s = j(yt, (C) => {
          var B;
          C && E((B = f.value) == null ? void 0 : B.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        c == null || c(), c = null, p && (c = j(
          bt,
          () => {
            var C;
            E((C = f.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Q(async () => {
      tt(), await x(), _e(() => {
        n = JSON.stringify(ee());
      });
    }), (p, C) => Oe((h(), q("div", ba, [
      G("div", {
        class: Z(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(pe, null, ge(f.value.sections, (B) => (h(), A(Vn, {
          key: B.name,
          section: B,
          formApi: ce,
          privateFormApi: Ie
        }, {
          default: y(() => [
            (h(!0), q(pe, null, ge(B.fields, (W) => (h(), A(ya, {
              key: W.metadata.field_name,
              field: W,
              formApi: ce,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (h(), A(le(f.value.orphanErrorsComponent), {
        orphanErrors: v.value,
        formApi: ce
      }, null, 8, ["orphanErrors"])),
      (h(), A(le(f.value.actionComponent), {
        isLoadingSubmit: U.value,
        formApi: ce
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, V.value]
    ]);
  }
});
export {
  Ne as DynamicLogicBuilder,
  K as Submit64,
  Fa as Submit64Form
};
