var _t = Object.defineProperty;
var Ct = (o, e, t) => e in o ? _t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var E = (o, e, t) => Ct(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, createElementBlock as q, openBlock as h, createElementVNode as M, createVNode as S, createBlock as D, createCommentVNode as O, unref as a, mergeProps as Ee, normalizeClass as Z, toDisplayString as P, resolveDynamicComponent as re, resolveComponent as St, normalizeProps as Ft, guardReactiveProps as kt, withCtx as y, createTextVNode as te, Fragment as pe, renderList as ge, ref as w, onMounted as Q, nextTick as _e, watch as j, computed as le, markRaw as J, useSlots as Me, getCurrentInstance as je, withDirectives as Oe, vShow as ze } from "vue";
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
    return (r, n) => (h(), q("div", Bt, [
      M("div", Nt, [
        S(a(X), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), D(a(X), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : O("", !0),
        e.formApi.clear ? (h(), D(a(X), Ee({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : O("", !0)
      ])
    ]));
  }
}), Et = { class: "flex row items-center" }, Tt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, Ot = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", {
      class: Z(e.sectionApi.section.cssClass)
    }, [
      M("div", Et, [
        e.sectionApi.section.icon ? (h(), D(a(Ve), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : O("", !0),
        M("div", Tt, P(e.sectionApi.section.label), 1)
      ]),
      M("div", qt, [
        (h(), D(re(e.sectionApi.section.fieldsComponent)))
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
    return (t, r) => {
      const n = St("q-icon");
      return h(), D(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
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
    return (t, r) => (h(), D(a(he), Ft(kt(e.itemProps)), {
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
    return (t, r) => (h(), q("div", It, [
      (h(!0), q(pe, null, ge(e.orphanErrors, (n, i) => (h(), q("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, P(i) + " : " + P(n.join(",")), 1))), 128))
    ]));
  }
}), we = class we {
  constructor() {
    E(this, "_formSettings");
    E(this, "_formStyle");
    E(this, "_actionComponent");
    E(this, "_orphanErrorsComponent");
    E(this, "_sectionComponent");
    E(this, "_wrapperResetComponent");
    E(this, "_associationDisplayComponent");
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
E(we, "_instance", new we());
let K = we;
class Ne {
  constructor(e) {
    E(this, "formApi");
    E(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, i = new Pt(r, n, this.formApi);
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
    E(this, "type");
    E(this, "data");
    E(this, "formApi");
    E(this, "action", () => {
    });
    E(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    E(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", m = w(), l = w();
    function s() {
      m.value && m.value.hide();
    }
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function g() {
      return l.value ? !l.value.hasError : !1;
    }
    function k() {
      l.value && l.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(d, g, k), i || _e(() => {
        var R;
        (R = l.value) == null || R.resetValidation();
      });
    }), (R, f) => (h(), D(a(xe), {
      ref_key: "fieldRef",
      ref: l,
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
                    M("div", Ht, [
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
}), Mt = { class: "row items-center justify-end" }, jt = { class: "row items-center justify-end" }, Qt = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", m = w(), l = w(), s = w();
    function d() {
      m.value && m.value.hide();
    }
    function g() {
      l.value && l.value.hide();
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
    }), (I, z) => (h(), D(a(xe), {
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
                    M("div", Mt, [
                      S(a(X), {
                        onClick: d,
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
              ref: l,
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
                    M("div", jt, [
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
    function l() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (s) => {
        for (const d of e.rules)
          if (t.value = d(s), t.value !== !0)
            break;
      }
    ), Q(() => {
      e.registerBehaviourCallbacks(i, m, l);
    }), (s, d) => (h(), q("div", Yt, [
      S(a(xt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (g) => e.modelValueOnUpdate(g)),
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
    const e = o, t = w([]), r = w([]), n = w(), i = e.formApi.form, m = i.formSettings, l = i.formStyle, s = m.rulesBehaviour === "lazy";
    function d(z, V) {
      if (z === "") {
        V(() => {
          r.value = [...t.value];
        });
        return;
      }
      V(() => {
        const U = z.toLowerCase();
        r.value = t.value.filter(($) => $.label.toLowerCase().includes(U));
      });
    }
    function g() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
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
      r.value = [];
    }
    return Q(() => {
      g(), e.registerBehaviourCallbacks(k, R, f, void 0, I);
    }), (z, V) => (h(), D(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (U) => e.modelValueOnUpdate(U)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
      hint: e.field.hint,
      outlined: a(l).fieldOutlined,
      filled: a(l).fieldFilled,
      standout: a(l).fieldStandout,
      borderless: a(l).fieldBorderless,
      rounded: a(l).fieldRounded,
      square: a(l).fieldSquare,
      dense: a(l).fieldDense,
      hideBottomSpace: a(l).fieldHideBottomSpace,
      color: a(l).fieldColor,
      bgColor: a(l).fieldBgColor,
      class: Z(e.field.cssClass),
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
      onFilter: d
    }, {
      "no-option": y(() => [
        S(a(he), {
          dense: a(l).fieldDense
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, m = n.rulesBehaviour === "lazy", l = w([]), s = w(
      k()
    ), d = w(), g = w(Pe);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function R(v, c) {
      if (v === g.value) {
        c(() => {
        });
        return;
      }
      const u = e.formApi.getAssociationDataCallback();
      s.value = k(), g.value = v;
      const A = e.formApi.form;
      s.value.isLoading = !0, u({
        resourceName: A.resourceName,
        resourceId: A.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: A.context
      }).then((F) => {
        c(() => {
          l.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = k();
      });
    }
    function f() {
      var c, u;
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (l.value = [
        {
          label: ((c = e.field.associationData[0]) == null ? void 0 : c.label) ?? "???",
          value: v,
          data: (u = e.field.associationData[0]) == null ? void 0 : u.data
        }
      ]);
    }
    function I() {
      return d.value ? d.value.validate() : !1;
    }
    function z() {
      return d.value ? !d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    function U() {
      s.value = k(), l.value = [], g.value = Pe;
    }
    function $(v) {
      const c = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && v.to === c && c !== -1) {
        const u = e.formApi.form, A = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, A({
          resourceName: u.resourceName,
          resourceId: u.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: u.context
        }).then((F) => {
          l.value = l.value.concat(
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
    }), (v, c) => (h(), D(a($e), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (u) => e.modelValueOnUpdate(u)),
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
      options: l.value,
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
        (h(), D(re(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: u.opt,
          itemProps: u.itemProps
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, m = n.rulesBehaviour === "lazy", l = w([]), s = w(
      k()
    ), d = w(), g = w(He);
    function k() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function R(v, c) {
      if (v === g.value) {
        c(() => {
        });
        return;
      }
      const u = e.formApi.getAssociationDataCallback();
      s.value = k(), g.value = v;
      const A = e.formApi.form;
      s.value.isLoading = !0, u({
        resourceName: A.resourceName,
        resourceId: A.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: v,
        context: A.context
      }).then((F) => {
        c(() => {
          l.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = k();
      });
    }
    function f() {
      const v = e.getValueSerialized();
      !v || !e.field.associationData || (l.value = v.map((c, u) => ({
        label: e.field.associationData[u].label ?? "???",
        value: c,
        data: e.field.associationData[u].data
      })));
    }
    function I() {
      return d.value ? d.value.validate() : !1;
    }
    function z() {
      return d.value ? !d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    function U() {
      s.value = k(), l.value = [], g.value = He;
    }
    function $(v) {
      const c = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && v.to === c && c !== -1) {
        const u = e.formApi.form, A = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, A({
          resourceName: u.resourceName,
          resourceId: u.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: u.context
        }).then((F) => {
          l.value = l.value.concat(
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
    }), (v, c) => (h(), D(a($e), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (u) => e.modelValueOnUpdate(u)),
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
      options: l.value,
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
        (h(), D(re(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: u.opt,
          itemProps: u.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Te = /* @__PURE__ */ H({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", m = w();
    function l() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function d() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (g, k) => (h(), D(a(xe), {
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", m = w();
    function l() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function d() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (g, k) => (h(), D(a(xe), {
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", m = w();
    function l() {
      return m.value ? m.value.validate() : !1;
    }
    function s() {
      return m.value ? !m.value.hasError : !1;
    }
    function d() {
      m.value && m.value.resetValidation();
    }
    return Q(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (g, k) => (h(), D(a(xe), {
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
    }, l = w();
    function s() {
      return !!l.value;
    }
    function d() {
      return !!l.value;
    }
    function g() {
    }
    return Q(() => {
      e.registerBehaviourCallbacks(s, d, g);
    }), (k, R) => e.modelValue ? (h(), D(a(Rt), {
      key: 0,
      ref_key: "fieldRef",
      ref: l,
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
    const t = o.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, i) => " TODO json edit ? ";
  }
});
function T(o) {
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
    const e = o, r = e.formApi.form.formStyle, n = w(null);
    function i() {
      let c = e.modelValue;
      c.add = [], c.delete = [], e.modelValueOnUpdate(c), V();
    }
    function m() {
      var u;
      let c = e.modelValue;
      c.add = [], c.delete = ((u = e.field.attachmentData) == null ? void 0 : u.map((A) => A.attachment_id)) ?? [], e.modelValueOnUpdate(c), V();
    }
    function l() {
      return V(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function g(c) {
      return new Promise((u) => {
        const A = new Blob([c]), F = new FileReader();
        F.onload = (Y) => {
          var ue;
          const ie = ((ue = Y.target) == null ? void 0 : ue.result) ?? "", [ee, se] = ie.split(",");
          u(se);
        }, F.readAsDataURL(A);
      });
    }
    async function k(c) {
      return {
        key: `${c.lastModified}${c.name}`,
        size: c.size,
        filename: c.name,
        contentType: c.type,
        base64: await g(await c.arrayBuffer())
      };
    }
    async function R(c) {
      if (!c[0])
        return;
      const u = await k(c[0]);
      let A = e.modelValue;
      A.add = [u], e.modelValueOnUpdate(A), V();
    }
    function f(c) {
      if (!c[0])
        return;
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), V();
    }
    function I(c) {
      let u = e.modelValue;
      u.delete = [c.attachment_id], e.modelValueOnUpdate(u), V();
    }
    function z() {
      let c = e.modelValue;
      c.delete = [], e.modelValueOnUpdate(c), V();
    }
    function V() {
      n.value = null;
      for (const c of e.rules) {
        const u = c(e.modelValue);
        if (typeof u == "string") {
          n.value = u;
          break;
        }
      }
    }
    const U = le(() => (e.field.attachmentData ?? []).length === 0), $ = le(() => e.modelValue ? e.modelValue.delete : []), v = le(() => {
      var c, u;
      return e.modelValue ? (((c = e.field.attachmentData) == null ? void 0 : c.length) ?? 0) === 0 || (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Q(() => {
      e.registerBehaviourCallbacks(l, s, d, i, m);
    }), (c, u) => (h(), q("div", an, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: y((A) => [
          M("div", on, [
            M("div", rn, [
              M("div", ln, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", sn, P(e.field.hint), 1)) : O("", !0)
            ]),
            A.canAddFiles && v.value ? (h(), D(a(X), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: A.pickFiles,
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
        list: y((A) => [
          U.value ? O("", !0) : (h(), q("div", un, [
            u[0] || (u[0] = M("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            S(a(Be), { separator: "" }, {
              default: y(() => [
                (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (F) => (h(), D(a(he), {
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
                    e.modelValue ? (h(), D(a(ne), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        $.value.includes(F.attachment_id) ? O("", !0) : (h(), D(a(X), {
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
                        $.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), D(a(X), {
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
          !U.value && A.files.length > 0 ? (h(), D(a(We), { key: 1 })) : O("", !0),
          A.files.length > 0 ? (h(), q("div", dn, [
            u[1] || (u[1] = M("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            S(a(Be), { separator: "" }, {
              default: y(() => [
                (h(!0), q(pe, null, ge(A.files, (F) => (h(), D(a(he), {
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
                          onClick: (Y) => A.removeFile(F)
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
    const e = o, r = e.formApi.form.formStyle, n = w(null);
    function i() {
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), V();
    }
    function m() {
      var c;
      let v = e.modelValue;
      v.add = [], v.delete = ((c = e.field.attachmentData) == null ? void 0 : c.map((u) => u.attachment_id)) ?? [], e.modelValueOnUpdate(v), V();
    }
    function l() {
      return V(), s();
    }
    function s() {
      return n.value === null;
    }
    function d() {
      n.value = null;
    }
    async function g(v) {
      return new Promise((c) => {
        const u = new Blob([v]), A = new FileReader();
        A.onload = (F) => {
          var se;
          const Y = ((se = F.target) == null ? void 0 : se.result) ?? "", [ie, ee] = Y.split(",");
          c(ee);
        }, A.readAsDataURL(u);
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
      if (!v[0])
        return;
      const c = await k(v[0]);
      let u = e.modelValue;
      u.add.push(c), e.modelValueOnUpdate(u), V();
    }
    async function f(v) {
      if (!v[0])
        return;
      const c = await k(v[0]);
      let u = e.modelValue;
      u.add = u.add.filter((A) => A.key !== c.key), e.modelValueOnUpdate(u), V();
    }
    function I(v) {
      let c = e.modelValue;
      c.delete.push(v.attachment_id), e.modelValueOnUpdate(c), V();
    }
    function z(v) {
      let c = e.modelValue;
      c.delete = c.delete.filter((u) => u !== v.attachment_id), e.modelValueOnUpdate(c), V();
    }
    function V() {
      n.value = null;
      for (const v of e.rules) {
        const c = v(e.modelValue);
        if (typeof c == "string") {
          n.value = c;
          break;
        }
      }
    }
    const U = le(() => (e.field.attachmentData ?? []).length === 0), $ = le(() => e.modelValue ? e.modelValue.delete : []);
    return Q(() => {
      e.registerBehaviourCallbacks(l, s, d, i, m);
    }), (v, c) => (h(), q("div", mn, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: Z(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: y((u) => [
          M("div", pn, [
            M("div", gn, [
              M("div", hn, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", vn, P(e.field.hint), 1)) : O("", !0)
            ]),
            u.canAddFiles ? (h(), D(a(X), {
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
          var A;
          return [
            U.value ? O("", !0) : (h(), q("div", yn, [
              M("div", bn, "Fichier" + P((((A = e.field.attachmentData) == null ? void 0 : A.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              S(a(Be), { separator: "" }, {
                default: y(() => [
                  (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (F) => (h(), D(a(he), {
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
                      e.modelValue ? (h(), D(a(ne), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: y(() => [
                          $.value.includes(F.attachment_id) ? O("", !0) : (h(), D(a(X), {
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
                          $.value.includes(F.attachment_id) && e.modelValue.add.length === 0 ? (h(), D(a(X), {
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
            !U.value && u.files.length > 0 ? (h(), D(a(We), { key: 1 })) : O("", !0),
            u.files.length > 0 ? (h(), q("div", _n, [
              M("div", Cn, "Fichier" + P(u.files.length > 0 ? "s" : "") + " à ajouter", 1),
              S(a(Be), { separator: "" }, {
                default: y(() => [
                  (h(!0), q(pe, null, ge(u.files, (F) => (h(), D(a(he), {
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
  constructor(e, t, r, n, i, m, l, s, d) {
    E(this, "resourceName");
    E(this, "resourceId");
    E(this, "formMetadataAndData");
    E(this, "context");
    E(this, "formSettings");
    E(this, "formStyle");
    E(this, "actionComponent");
    E(this, "orphanErrorsComponent");
    E(this, "sectionComponent");
    E(this, "wrapperResetComponent");
    E(this, "associationDisplayComponent");
    E(this, "dynamicComponentRecord");
    E(this, "formApi");
    E(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...K.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...m,
      ...K.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? K.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? K.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? K.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? K.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? K.getGlobalAssociationDisplayComponent(), this.registerEventCallback = d ?? (() => {
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
  static getForm(e, t, r, n, i, m, l, s, d) {
    return new me(
      e,
      t,
      r,
      n,
      i,
      m,
      l,
      s,
      d
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Ne.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = Ne.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (m, l) => {
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
          this.formSettings.requiredFieldsHasAsterisk && f.rules.find((c) => c.type === "required") && ($ = $.concat("*"));
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
            events: r.fields[f.field_name] ?? {},
            componentOptions: U
          };
          s.push(v), t.add(f.field_name);
        });
        const d = this.dynamicComponentRecord[`section-${m.name ?? l}-before`], g = this.sectionComponent, k = this.dynamicComponentRecord[`section-${m.name ?? l}-after`], R = {
          label: m.label ?? void 0,
          icon: m.icon ?? void 0,
          cssClass: m.css_class ?? void 0,
          hidden: !1,
          name: m.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? m.readonly ?? void 0,
          events: r.sections[m.name ?? l.toString()] ?? {},
          beforeComponent: d ? J(d) : void 0,
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
      events: r.form,
      actionComponent: J(this.actionComponent),
      orphanErrorsComponent: J(this.orphanErrorsComponent),
      wrapperResetComponent: J(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((m, l) => m + l.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), i;
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
        return Qt;
      case "select":
        return Xt;
      case "selectBelongsTo":
        return Le;
      case "selectHasMany":
        return Ge;
      case "selectHasAndBelongsToMany":
        return Ge;
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
        return Te;
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
    let r = null, n = null, i = null;
    const m = Me(), l = {
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
      setReadonlyState: c,
      setCssClass: u,
      setIcon: A,
      setLabel: F,
      section: t.section
    }, s = w(/* @__PURE__ */ new Map());
    function d() {
      t.section.fields.forEach((b) => {
        const x = b.metadata.field_name, G = t.formApi.getFieldByName(x);
        G && s.value.set(x, G);
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
      }), T(t.section.events.onReset);
    }
    function R() {
      s.value.forEach((b) => {
        b.clear();
      }), T(t.section.events.onClear);
    }
    function f() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((x) => {
        x.hide();
      }), b.hidden = !0, T(t.section.events.onHide));
    }
    function I() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (s.value.forEach((x) => {
        x.unhide();
      }), b.hidden = !1, T(t.section.events.onUnhide));
    }
    function z() {
      let b = !0;
      return s.value.forEach((x) => {
        if (!x.validate()) {
          b = !1;
          return;
        }
      }), T(t.section.events.onValidated), b;
    }
    function V() {
      let b = !0;
      return s.value.forEach((x) => {
        if (!x.isValid()) {
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
    function c(b) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = b);
    }
    function u(b) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = b);
    }
    function A(b) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = b);
    }
    function F(b) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = b);
    }
    function Y() {
      const b = {};
      for (const [x, G] of s.value)
        b[x] = G.getValueSerialized();
      return b;
    }
    function ie() {
      const b = m.default;
      if (!b) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = H({
        inheritAttrs: !1,
        setup(G, { attrs: Ce, slots: Fe }) {
          return () => b(
            {
              ...G,
              ...Ce
            },
            Fe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, J(x));
    }
    e(l);
    const ee = le(() => V()), se = le(() => U()), ue = le(() => Y());
    return j(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        r == null || r(), r = null, b && (r = j(ee, (x) => {
          x && T(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = j(se, (x) => {
          var G;
          x && T((G = t.section) == null ? void 0 : G.events.onIsInvalid);
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
            var x;
            T((x = t.section) == null ? void 0 : x.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Q(() => {
      var x;
      ie();
      const b = (x = je()) == null ? void 0 : x.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), _e(() => {
        var G;
        d(), T((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (b, x) => Oe((h(), q("div", kn, [
      t.section.beforeComponent ? (h(), D(re(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), D(re(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), D(re(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : O("", !0)
    ], 512)), [
      [ze, t.section.hidden !== !0]
    ]);
  }
});
function xn(o, e) {
  const t = o.rules ?? [], r = o.type, n = e.form, i = (d, g, k) => d[g] ? k ? () => m(d[g]) : () => d[g] : d.compare_to ? () => {
    var R;
    return ((R = e.getFieldByName(d.compare_to)) == null ? void 0 : R.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", m = (d) => String(
    L.formatDate(
      L.extractDate(d, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], s = [];
  switch (r) {
    case "date":
      l.push(qe(n.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(qe(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((d) => {
    const g = d;
    switch (g.type) {
      case "required":
        l.push(Dn());
        break;
      case "absence":
        l.push(Rn());
        break;
      case "acceptance":
        l.push(Bn());
        break;
      case "inclusion":
        l.push(Ke(g.including));
        break;
      case "exclusion":
        l.push(An(g.excluding));
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
        l.push(En());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Tn(
            i(g, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          qn(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          On(
            i(g, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          zn(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          $n(i(g, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          In(
            i(g, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Un());
        break;
      case "numberNumericOnly":
        l.push(Pn());
        break;
      case "numberEvenOnly":
        l.push(Ln());
        break;
      case "numberOddOnly":
        l.push(Hn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          Gn(
            i(g, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          Mn(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          jn(
            i(g, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Qn(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Jn(
            i(g, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Wn(i(g, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Yn(
            () => g.min,
            () => g.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Kn(
            i(g, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(qe(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          Xn(
            i(g, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Zn(
            i(g, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          ea(
            i(g, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          ta(
            i(g, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          na(
            i(g, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          aa(
            i(g, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        l.push(
          ra()
        );
        break;
      case "allowFileContentType":
        l.push(
          la(
            i(g, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          ia(
            i(g, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          ua(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          sa(
            i(g, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          da(
            i(g, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          ca(
            i(g, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          fa(
            i(g, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          ma(
            i(g, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          pa(
            i(g, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return wn(l);
      case "allowNull":
        return Nn(l);
    }
  }) : l;
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
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function wn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function En() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Tn(o) {
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
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function In(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
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
function Gn(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Mn(o) {
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
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Wn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
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
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n <= i || `Inf. ou égal à ${r}`;
  };
}
function Zn(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n < i || `Inf. à ${r}`;
  };
}
function ea(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n >= i || `Sup. ou égal à ${r}`;
  };
}
function ta(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n > i || `Sup. à ${r}`;
  };
}
function na(o, e) {
  return (t) => {
    const r = o(), n = L.extractDate(String(t), e), i = L.extractDate(r, e);
    return n === i || `Égale à ${n}`;
  };
}
function aa(o, e) {
  return (t) => {
    const r = o();
    return L.extractDate(String(t), e) !== L.extractDate(r, e) || `Doit être différent de ${r}`;
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
function ra() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function la(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    t.add.forEach((m) => {
      n && (r.includes(m.contentType) || (n = !1));
    });
    const i = o.length > 1;
    return n || `Type${i ? "s" : ""} autorisé${i ? "s" : ""} : ${r.join(",")}`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && r !== i.size && (n = !1);
    }), n || `Taille par fichier ${ve(r)}`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < r && (n = !1);
    }), n || `Taille par fichier min. ${ve(r)}`;
  };
}
function ua(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > r && (n = !1);
    }), n || `Taille par fichier max. ${ve(r)}`;
  };
}
function da(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length <= r || `${r} fichier${r > 1 ? "s" : ""} max.`;
  };
}
function ca(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length >= r || `${r} fichier${r > 1 ? "s" : ""} min.`;
  };
}
function fa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) <= r || `${ve(r)} max.`;
  };
}
function ma(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) >= r || `${ve(r)} min.`;
  };
}
function pa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, m) => (i += m.size, i), 0) === r || `Taille totale ${ve(r)}`;
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
    let r = () => !0, n = () => !0, i = () => {
    }, m = () => {
    }, l = () => {
    };
    const s = V(), d = w(), g = w([]);
    function k() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = f(d.value);
    }
    function R() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = f(d.value), T(t.field.events.onReset), m(), _e(() => {
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
      }
      return _;
    }
    function z() {
      switch (t.field.type) {
        case "string":
          d.value = "";
          break;
        case "checkbox":
          d.value = !1;
          break;
        case "date":
          d.value = null;
          break;
        case "datetime":
          d.value = null;
          break;
        case "number":
          d.value = null;
          break;
        case "select":
          d.value = void 0;
          break;
        case "text":
          d.value = "";
          break;
        case "object":
          d.value = {};
          break;
        case "selectBelongsTo":
          d.value = void 0;
          break;
        case "selectHasMany":
          d.value = void 0;
          break;
        case "selectHasAndBelongsToMany":
          d.value = void 0;
          break;
        case "selectHasOne":
          d.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          d.value = {
            add: [],
            delete: []
          };
          break;
      }
      l(), T(t.field.events.onClear);
    }
    function V() {
      return ga.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function U(_) {
      d.value = _;
    }
    function $() {
      return a(d);
    }
    function v() {
      return I(a(d));
    }
    function c(_) {
      g.value = _;
    }
    function u() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !0, T(t.field.events.onHide));
    }
    function A() {
      const _ = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      _ && (_.hidden = !1, T(t.field.events.onUnhide));
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
      const _ = r();
      return T(t.field.events.onValidated), _;
    }
    function x() {
      return n();
    }
    function G() {
      return !x();
    }
    function Ce() {
      return i();
    }
    function Fe(_, N, de, Se, De) {
      r = _, n = N, i = de, Se && (m = Se), De && (l = De);
    }
    const ke = {
      softReset: k,
      reset: R,
      clear: z,
      validate: b,
      isValid: x,
      isInvalid: G,
      hide: u,
      unhide: A,
      resetValidation: Ce,
      getValueDeserialized: v,
      getValueSerialized: $,
      setupBackendErrors: c,
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
      () => t.field.events.onUpdate ? d.value : null,
      () => {
        T(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? d.value : null,
      (_) => {
        T(_ ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Q(() => {
      var N, de;
      k();
      const _ = (N = je()) == null ? void 0 : N.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), T((de = t.field) == null ? void 0 : de.events.onReady);
    }), (_, N) => Oe((h(), q("div", null, [
      t.field.beforeComponent ? (h(), D(re(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ke
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), D(re(t.field.mainComponent), {
        modelValue: d.value,
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
      t.field.afterComponent ? (h(), D(re(t.field.afterComponent), {
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
    let r = null, n = "", i = 0, m = 0, l = null, s = null, d = null, g = null, k = null;
    const R = Me(), f = w(me.getEmptyFormBeforeInit()), I = w(!1), z = w(!1), V = w(!1), U = w(!1), $ = w("create"), v = w({}), c = w(/* @__PURE__ */ new Map()), u = w(/* @__PURE__ */ new Map());
    async function A() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = me.getForm(
        t.resourceName,
        t.resourceId,
        ie(),
        r,
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
      T((B = f.value) == null ? void 0 : B.events.onSubmit), U.value = !0, _();
      const p = ee(), C = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: p,
        context: t.context
      });
      if (g = C.resource_data, C.success)
        v.value = {}, $.value === "create" && ($.value = "edit"), r && C.resource_data && (r.resource_data = C.resource_data), f.value = me.getForm(
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
        ), G(), n = JSON.stringify(ee()), T((ye = f.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        v.value = {};
        const be = [];
        for (const [oe, fe] of u.value) {
          const Ae = C.errors[oe];
          Ae && (fe.setupBackendErrors(Ae), be.push(oe));
        }
        Object.entries(C.errors).forEach((oe) => {
          be.includes(oe[0]) || (v.value[oe[0]] = oe[1]);
        }), T((W = f.value) == null ? void 0 : W.events.onSubmitUnsuccess);
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
      T((W = f.value) == null ? void 0 : W.events.onSubmit), U.value = !0, _();
      const C = ee(), B = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: C,
        bulkCount: p,
        context: t.context
      });
      if (k = B.bulk_data, B.success)
        v.value = {}, $.value === "create" && ($.value = "edit"), r && B.resource_data && (r.resource_data = B.resource_data), f.value = me.getForm(
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
        ), G(), n = JSON.stringify(ee()), T((be = f.value) == null ? void 0 : be.events.onSubmitSuccess);
      else {
        v.value = {};
        const oe = [];
        for (const [fe, Ae] of u.value) {
          const Ue = B.errors[fe];
          Ue && (Ae.setupBackendErrors(Ue), oe.push(fe));
        }
        Object.entries(B.errors).forEach((fe) => {
          oe.includes(fe[0]) || (v.value[fe[0]] = fe[1]);
        }), T((ye = f.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
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
      }), T((C = f.value) == null ? void 0 : C.events.onValidated), p;
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
    function x() {
      return !b();
    }
    function G() {
      c.value.forEach((p) => {
        p.softReset();
      });
    }
    function Ce() {
      var p;
      u.value.forEach((C) => {
        C.reset();
      }), T((p = f.value) == null ? void 0 : p.events.onReset);
    }
    function Fe() {
      var p;
      u.value.forEach((C) => {
        C.clear();
      }), T((p = f.value) == null ? void 0 : p.events.onClear);
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
      if (r)
        return r.resource_data[p];
    }
    function de(p) {
      return c.value.get(p);
    }
    function Se(p) {
      return [...c.value.values()].at(p);
    }
    function De() {
      return c.value;
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
    function rt(p) {
      f.value && (f.value.cssClass = p);
    }
    function lt(p) {
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
      c.value.set(p, C), i === c.value.size && (I.value = !0);
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
      isInvalid: x,
      softReset: G,
      reset: Ce,
      clear: Fe,
      resetValidation: ke,
      submit: F,
      submitBulk: Y,
      valuesHasChanged: at,
      getInitialValueByFieldName: N,
      getAssociationDataCallback: et,
      setContext: ot,
      setCssClass: rt,
      setReadonlyState: lt,
      isReady: it,
      getSubmitData: st,
      getBulkSubmitData: ut,
      form: ht
    };
    e(ce);
    const vt = le(() => b()), yt = le(() => x()), bt = le(() => se());
    return j(
      () => I.value && z.value,
      (p) => {
        var C;
        p && !V.value && (T((C = f.value) == null ? void 0 : C.events.onReady), V.value = !0);
      }
    ), j(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        l == null || l(), l = null, p && (l = j(vt, (C) => {
          var B;
          C && T((B = f.value) == null ? void 0 : B.events.onIsValid);
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
          C && T((B = f.value) == null ? void 0 : B.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        d == null || d(), d = null, p && (d = j(
          bt,
          () => {
            var C;
            T((C = f.value) == null ? void 0 : C.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Q(async () => {
      tt(), await A(), _e(() => {
        n = JSON.stringify(ee());
      });
    }), (p, C) => Oe((h(), q("div", ba, [
      M("div", {
        class: Z(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(pe, null, ge(f.value.sections, (B) => (h(), D(Vn, {
          key: B.name,
          section: B,
          formApi: ce,
          privateFormApi: Ie
        }, {
          default: y(() => [
            (h(!0), q(pe, null, ge(B.fields, (W) => (h(), D(ya, {
              key: W.metadata.field_name,
              field: W,
              formApi: ce,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (h(), D(re(f.value.orphanErrorsComponent), {
        orphanErrors: v.value,
        formApi: ce
      }, null, 8, ["orphanErrors"])),
      (h(), D(re(f.value.actionComponent), {
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
