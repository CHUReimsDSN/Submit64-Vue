var _t = Object.defineProperty;
var Ct = (o, e, t) => e in o ? _t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var E = (o, e, t) => Ct(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as G, createElementBlock as q, openBlock as h, createElementVNode as j, createVNode as S, createBlock as A, createCommentVNode as O, unref as a, mergeProps as Ee, normalizeClass as ee, toDisplayString as P, resolveDynamicComponent as se, resolveComponent as St, normalizeProps as Ft, guardReactiveProps as kt, withCtx as v, createTextVNode as ae, Fragment as pe, renderList as ge, ref as w, onMounted as Y, nextTick as _e, watch as Q, computed as re, markRaw as K, useSlots as Me, getCurrentInstance as je, withDirectives as Oe, vShow as ze } from "vue";
import { QBtn as Z, QIcon as Ve, QItem as he, QItemSection as oe, QItemLabel as le, QInput as xe, QPopupProxy as Re, QDate as Qe, QTime as Vt, QCheckbox as xt, QSelect as $e, QColor as Dt, useQuasar as At, QEditor as Rt, QUploader as Ye, QList as Be, QSeparator as We, QUploaderAddTrigger as Je, date as H } from "quasar";
const Bt = { class: "flex column" }, Nt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, wt = /* @__PURE__ */ G({
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
      j("div", Nt, [
        S(a(Z), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), A(a(Z), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : O("", !0),
        e.formApi.clear ? (h(), A(a(Z), Ee({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : O("", !0)
      ])
    ]));
  }
}), Et = { class: "flex row items-center" }, Tt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, Ot = /* @__PURE__ */ G({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), q("div", {
      class: ee(e.sectionApi.section.cssClass)
    }, [
      j("div", Et, [
        e.sectionApi.section.icon ? (h(), A(a(Ve), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : O("", !0),
        j("div", Tt, P(e.sectionApi.section.label), 1)
      ]),
      j("div", qt, [
        (h(), A(se(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), zt = /* @__PURE__ */ G({
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
}), $t = /* @__PURE__ */ G({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, l) => (h(), A(a(he), Ft(kt(e.itemProps)), {
      default: v(() => [
        S(a(oe), null, {
          default: v(() => [
            S(a(le), null, {
              default: v(() => [
                ae(P(e.entry.label), 1)
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
}), It = { class: "flex column" }, Ut = /* @__PURE__ */ G({
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
let X = we;
class Ne {
  constructor(e) {
    E(this, "formApi");
    E(this, "events", []);
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
    E(this, "type");
    E(this, "data");
    E(this, "formApi");
    E(this, "action", () => {
    });
    E(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    E(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const Ht = { class: "row items-center justify-end" }, Gt = /* @__PURE__ */ G({
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
    function F() {
      r.value && r.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, g, F), i || _e(() => {
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
      class: ee(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        S(a(Ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            S(a(Re), {
              ref_key: "popupProxyRef",
              ref: m,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                S(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": f[0] || (f[0] = (I) => e.modelValueOnUpdate(I)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: v(() => [
                    j("div", Ht, [
                      S(a(Z), {
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
}), Mt = { class: "row items-center justify-end" }, jt = { class: "row items-center justify-end" }, Qt = /* @__PURE__ */ G({
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
    function F() {
      return s.value ? s.value.validate() : !1;
    }
    function R() {
      return s.value ? !s.value.hasError : !1;
    }
    function f() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(F, R, f), i || _e(() => {
        var I;
        (I = s.value) == null || I.resetValidation();
      });
    }), (I, z) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": z[2] || (z[2] = (k) => e.modelValueOnUpdate(k)),
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
      class: ee(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        S(a(Ve), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            S(a(Re), {
              ref_key: "datePopupProxyRef",
              ref: m,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                S(a(Qe), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": z[0] || (z[0] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: v(() => [
                    j("div", Mt, [
                      S(a(Z), {
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
          default: v(() => [
            S(a(Re), {
              ref_key: "timePopupProxyRef",
              ref: r,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                S(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": z[1] || (z[1] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: v(() => [
                    j("div", jt, [
                      S(a(Z), {
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
}, Kt = /* @__PURE__ */ G({
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
    return Q(
      () => e.modelValue,
      (s) => {
        for (const c of e.rules)
          if (t.value = c(s), t.value !== !0)
            break;
      }
    ), Y(() => {
      e.registerBehaviourCallbacks(i, m, r);
    }), (s, c) => (h(), q("div", Yt, [
      S(a(xt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => e.modelValueOnUpdate(g)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: ee([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", Wt, P(e.field.hint), 1)) : O("", !0),
      t.value !== !0 ? (h(), q("div", Jt, P(t.value), 1)) : O("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ G({
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
    function c(z, k) {
      if (z === "") {
        k(() => {
          l.value = [...t.value];
        });
        return;
      }
      k(() => {
        const U = z.toLowerCase();
        l.value = t.value.filter(($) => $.label.toLowerCase().includes(U));
      });
    }
    function g() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), l.value = e.field.staticSelectOptions ?? [];
    }
    function F() {
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
    return Y(() => {
      g(), e.registerBehaviourCallbacks(F, R, f, void 0, I);
    }), (z, k) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (U) => e.modelValueOnUpdate(U)),
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
      class: ee(e.field.cssClass),
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
      "no-option": v(() => [
        S(a(he), {
          dense: a(r).fieldDense
        }, {
          default: v(() => [
            S(a(oe), null, {
              default: v(() => [
                S(a(le), null, {
                  default: v(() => [
                    ae(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Pe = "__init", Le = /* @__PURE__ */ G({
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
      F()
    ), c = w(), g = w(Pe);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function R(x, u) {
      if (x === g.value) {
        u(() => {
        });
        return;
      }
      const d = e.formApi.getAssociationDataCallback();
      s.value = F(), g.value = x;
      const C = e.formApi.form;
      s.value.isLoading = !0, d({
        resourceName: C.resourceName,
        resourceId: C.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: x,
        context: C.context
      }).then((D) => {
        u(() => {
          r.value = D.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            D.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = F();
      });
    }
    function f() {
      var u, d;
      const x = e.getValueSerialized();
      !x || !e.field.associationData || (r.value = [
        {
          label: ((u = e.field.associationData[0]) == null ? void 0 : u.label) ?? "???",
          value: x,
          data: (d = e.field.associationData[0]) == null ? void 0 : d.data
        }
      ]);
    }
    function I() {
      return c.value ? c.value.validate() : !1;
    }
    function z() {
      return c.value ? !c.value.hasError : !1;
    }
    function k() {
      c.value && c.value.resetValidation();
    }
    function U() {
      s.value = F(), r.value = [], g.value = Pe;
    }
    function $(x) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && x.to === u && u !== -1) {
        const d = e.formApi.form, C = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, C({
          resourceName: d.resourceName,
          resourceId: d.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: d.context
        }).then((D) => {
          r.value = r.value.concat(
            D.rows
          ), s.value.lastPage = Math.ceil(
            D.row_count / s.value.limit
          ), D.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, x.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        I,
        z,
        k,
        f,
        U
      ), _e(() => {
        f();
      });
    }), (x, u) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => e.modelValueOnUpdate(d)),
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
      class: ee(e.field.cssClass),
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
      "no-option": v(() => [
        S(a(he), {
          dense: a(i).fieldDense
        }, {
          default: v(() => [
            S(a(oe), null, {
              default: v(() => [
                S(a(le), null, {
                  default: v(() => [
                    ae(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: v((d) => [
        (h(), A(se(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: d.opt,
          itemProps: d.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), He = "__init", Ge = /* @__PURE__ */ G({
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
      F()
    ), c = w(), g = w(He);
    function F() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function R(x, u) {
      if (x === g.value) {
        u(() => {
        });
        return;
      }
      const d = e.formApi.getAssociationDataCallback();
      s.value = F(), g.value = x;
      const C = e.formApi.form;
      s.value.isLoading = !0, d({
        resourceName: C.resourceName,
        resourceId: C.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: x,
        context: C.context
      }).then((D) => {
        u(() => {
          r.value = D.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            D.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        r.value = [], s.value = F();
      });
    }
    function f() {
      const x = e.getValueSerialized();
      !x || !e.field.associationData || (r.value = x.map((u, d) => ({
        label: e.field.associationData[d].label ?? "???",
        value: u,
        data: e.field.associationData[d].data
      })));
    }
    function I() {
      return c.value ? c.value.validate() : !1;
    }
    function z() {
      return c.value ? !c.value.hasError : !1;
    }
    function k() {
      c.value && c.value.resetValidation();
    }
    function U() {
      s.value = F(), r.value = [], g.value = He;
    }
    function $(x) {
      const u = r.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && x.to === u && u !== -1) {
        const d = e.formApi.form, C = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, C({
          resourceName: d.resourceName,
          resourceId: d.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: g.value,
          context: d.context
        }).then((D) => {
          r.value = r.value.concat(
            D.rows
          ), s.value.lastPage = Math.ceil(
            D.row_count / s.value.limit
          ), D.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, x.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        I,
        z,
        k,
        f,
        U
      ), _e(() => {
        f();
      });
    }), (x, u) => (h(), A(a($e), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => e.modelValueOnUpdate(d)),
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
      class: ee(e.field.cssClass),
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
      "no-option": v(() => [
        S(a(he), {
          dense: a(i).fieldDense
        }, {
          default: v(() => [
            S(a(oe), null, {
              default: v(() => [
                S(a(le), null, {
                  default: v(() => [
                    ae(P(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: v((d) => [
        (h(), A(se(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: d.opt,
          itemProps: d.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Te = /* @__PURE__ */ G({
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
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, F) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
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
      class: ee(e.field.cssClass),
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
}), Zt = /* @__PURE__ */ G({
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
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, F) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
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
      class: ee(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
}), en = /* @__PURE__ */ G({
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
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, c);
    }), (g, F) => (h(), A(a(xe), {
      ref_key: "fieldRef",
      ref: m,
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
      class: ee(e.field.cssClass),
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        S(a(Ve), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            S(a(Re), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                S(a(Dt), {
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
}), tn = /* @__PURE__ */ G({
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
    return Y(() => {
      e.registerBehaviourCallbacks(s, c, g);
    }), (F, R) => e.modelValue ? (h(), A(a(Rt), {
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
      class: ee(e.field.cssClass),
      readonly: e.field.readonly
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : O("", !0);
  }
}), nn = /* @__PURE__ */ G({
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
}, fn = /* @__PURE__ */ G({
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
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), k();
    }
    function m() {
      var d;
      let u = e.modelValue;
      u.add = [], u.delete = ((d = e.field.attachmentData) == null ? void 0 : d.map((C) => C.attachment_id)) ?? [], e.modelValueOnUpdate(u), k();
    }
    function r() {
      return k(), s();
    }
    function s() {
      return n.value === null;
    }
    function c() {
      n.value = null;
    }
    async function g(u) {
      return new Promise((d) => {
        const C = new Blob([u]), D = new FileReader();
        D.onload = (L) => {
          var te;
          const W = ((te = L.target) == null ? void 0 : te.result) ?? "", [ne, ue] = W.split(",");
          d(ue);
        }, D.readAsDataURL(C);
      });
    }
    async function F(u) {
      return {
        key: `${u.lastModified}${u.name}`,
        size: u.size,
        filename: u.name,
        contentType: u.type,
        base64: await g(await u.arrayBuffer())
      };
    }
    async function R(u) {
      if (!u[0])
        return;
      const d = await F(u[0]);
      let C = e.modelValue;
      C.add = [d], e.modelValueOnUpdate(C), k();
    }
    function f(u) {
      if (!u[0])
        return;
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d), k();
    }
    function I(u) {
      let d = e.modelValue;
      d.delete = [u.attachment_id], e.modelValueOnUpdate(d), k();
    }
    function z() {
      let u = e.modelValue;
      u.delete = [], e.modelValueOnUpdate(u), k();
    }
    function k() {
      n.value = null;
      for (const u of e.rules) {
        const d = u(e.modelValue);
        if (typeof d == "string") {
          n.value = d;
          break;
        }
      }
    }
    const U = re(() => (e.field.attachmentData ?? []).length === 0), $ = re(() => e.modelValue ? e.modelValue.delete : []), x = re(() => {
      var u, d;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((d = e.field.attachmentData) == null ? void 0 : d.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, c, i, m);
    }), (u, d) => (h(), q("div", an, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: ee(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: v((C) => [
          j("div", on, [
            j("div", ln, [
              j("div", rn, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", sn, P(e.field.hint), 1)) : O("", !0)
            ]),
            C.canAddFiles && x.value ? (h(), A(a(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: C.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: v(() => [
                S(a(Je))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: v((C) => [
          U.value ? O("", !0) : (h(), q("div", un, [
            d[0] || (d[0] = j("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            S(a(Be), { separator: "" }, {
              default: v(() => [
                (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (D) => (h(), A(a(he), {
                  key: D.attachment_id
                }, {
                  default: v(() => [
                    S(a(oe), null, {
                      default: v(() => [
                        S(a(le), { class: "full-width ellipsis" }, {
                          default: v(() => [
                            ae(P(D.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        S(a(le), { caption: "" }, {
                          default: v(() => [
                            ae(P(a(ve)(D.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (h(), A(a(oe), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: v(() => [
                        $.value.includes(D.attachment_id) ? O("", !0) : (h(), A(a(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (L) => I(D)
                        }, null, 8, ["disable", "onClick"])),
                        $.value.includes(D.attachment_id) && e.modelValue.add.length === 0 ? (h(), A(a(Z), {
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
          !U.value && C.files.length > 0 ? (h(), A(a(We), { key: 1 })) : O("", !0),
          C.files.length > 0 ? (h(), q("div", dn, [
            d[1] || (d[1] = j("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            S(a(Be), { separator: "" }, {
              default: v(() => [
                (h(!0), q(pe, null, ge(C.files, (D) => (h(), A(a(he), {
                  key: D.__key
                }, {
                  default: v(() => [
                    S(a(oe), null, {
                      default: v(() => [
                        S(a(le), { class: "full-width ellipsis" }, {
                          default: v(() => [
                            ae(P(D.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        S(a(le), { caption: "" }, {
                          default: v(() => [
                            ae(P(D.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    S(a(oe), {
                      top: "",
                      side: ""
                    }, {
                      default: v(() => [
                        S(a(Z), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (L) => C.removeFile(D)
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
}, Fn = /* @__PURE__ */ G({
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
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u), k();
    }
    function m() {
      var d;
      let u = e.modelValue;
      u.add = [], u.delete = ((d = e.field.attachmentData) == null ? void 0 : d.map((C) => C.attachment_id)) ?? [], e.modelValueOnUpdate(u), k();
    }
    function r() {
      return k(), s();
    }
    function s() {
      return n.value === null;
    }
    function c() {
      n.value = null;
    }
    async function g(u) {
      return new Promise((d) => {
        const C = new Blob([u]), D = new FileReader();
        D.onload = (L) => {
          var te;
          const W = ((te = L.target) == null ? void 0 : te.result) ?? "", [ne, ue] = W.split(",");
          d(ue);
        }, D.readAsDataURL(C);
      });
    }
    async function F(u) {
      return {
        key: `${u.lastModified}${u.name}`,
        size: u.size,
        filename: u.name,
        contentType: u.type,
        base64: await g(await u.arrayBuffer())
      };
    }
    async function R(u) {
      if (!u[0])
        return;
      const d = await F(u[0]);
      let C = e.modelValue;
      C.add.push(d), e.modelValueOnUpdate(C), k();
    }
    async function f(u) {
      if (!u[0])
        return;
      const d = await F(u[0]);
      let C = e.modelValue;
      C.add = C.add.filter((D) => D.key !== d.key), e.modelValueOnUpdate(C), k();
    }
    function I(u) {
      let d = e.modelValue;
      d.delete.push(u.attachment_id), e.modelValueOnUpdate(d), k();
    }
    function z(u) {
      let d = e.modelValue;
      d.delete = d.delete.filter((C) => C !== u.attachment_id), e.modelValueOnUpdate(d), k();
    }
    function k() {
      n.value = null;
      for (const u of e.rules) {
        const d = u(e.modelValue);
        if (typeof d == "string") {
          n.value = d;
          break;
        }
      }
    }
    const U = re(() => (e.field.attachmentData ?? []).length === 0), $ = re(() => e.modelValue ? e.modelValue.delete : []), x = re(() => {
      var u, d;
      return e.modelValue ? (((u = e.field.attachmentData) == null ? void 0 : u.length) ?? 0) === 0 || (((d = e.field.attachmentData) == null ? void 0 : d.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(r, s, c, i, m);
    }), (u, d) => (h(), q("div", mn, [
      S(a(Ye), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(l).fieldBorderless !== !0,
        square: a(l).fieldSquare,
        color: a(l).fieldColor,
        class: ee(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: R,
        onRemoved: f,
        style: { width: "inherit" }
      }, {
        header: v((C) => [
          j("div", pn, [
            j("div", gn, [
              j("div", hn, P(e.field.label), 1),
              e.field.hint ? (h(), q("div", vn, P(e.field.hint), 1)) : O("", !0)
            ]),
            C.canAddFiles && x.value ? (h(), A(a(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: C.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: v(() => [
                S(a(Je))
              ]),
              _: 1
            }, 8, ["onClick"])) : O("", !0)
          ])
        ]),
        list: v((C) => {
          var D;
          return [
            U.value ? O("", !0) : (h(), q("div", yn, [
              j("div", bn, "Fichier" + P((((D = e.field.attachmentData) == null ? void 0 : D.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              S(a(Be), { separator: "" }, {
                default: v(() => [
                  (h(!0), q(pe, null, ge(e.field.attachmentData ?? [], (L) => (h(), A(a(he), {
                    key: L.attachment_id
                  }, {
                    default: v(() => [
                      S(a(oe), null, {
                        default: v(() => [
                          S(a(le), { class: "full-width ellipsis" }, {
                            default: v(() => [
                              ae(P(L.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          S(a(le), { caption: "" }, {
                            default: v(() => [
                              ae(P(a(ve)(L.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (h(), A(a(oe), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: v(() => [
                          $.value.includes(L.attachment_id) ? O("", !0) : (h(), A(a(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (W) => I(L)
                          }, null, 8, ["disable", "onClick"])),
                          $.value.includes(L.attachment_id) && e.modelValue.add.length === 0 ? (h(), A(a(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (W) => z(L)
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
            !U.value && C.files.length > 0 ? (h(), A(a(We), { key: 1 })) : O("", !0),
            C.files.length > 0 ? (h(), q("div", _n, [
              j("div", Cn, "Fichier" + P(C.files.length > 0 ? "s" : "") + " à ajouter", 1),
              S(a(Be), { separator: "" }, {
                default: v(() => [
                  (h(!0), q(pe, null, ge(C.files, (L) => (h(), A(a(he), {
                    key: L.__key
                  }, {
                    default: v(() => [
                      S(a(oe), null, {
                        default: v(() => [
                          S(a(le), { class: "full-width ellipsis" }, {
                            default: v(() => [
                              ae(P(L.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          S(a(le), { caption: "" }, {
                            default: v(() => [
                              ae(P(L.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      S(a(oe), {
                        top: "",
                        side: ""
                      }, {
                        default: v(() => [
                          S(a(Z), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (W) => C.removeFile(L)
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
    this.dynamicComponentRecord = l.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = r, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...X.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...m,
      ...X.getGlobalFormStyle()
    }, this.actionComponent = l.actionComponent ?? X.getGlobalActionComponent(), this.orphanErrorsComponent = l.orphanErrorsComponent ?? X.getGlobalOrphanErrorComponent(), this.sectionComponent = l.sectionComponent ?? X.getGlobalSectionComponent(), this.wrapperResetComponent = l.wrapperResetComponent ?? X.getGlobalWrapperResetComponent(), this.associationDisplayComponent = l.associationDisplayComponent ?? X.getGlobalAssociationDisplayComponent(), this.registerEventCallback = c ?? (() => {
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
      actionComponent: K(X.getGlobalActionComponent()),
      orphanErrorsComponent: K(X.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: K(X.getGlobalWrapperResetComponent()),
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
          const I = this.dynamicComponentRecord[`field-${f.field_name}-before`], z = me.getFieldComponentByFormFieldType(f), k = this.dynamicComponentRecord[`field-${f.field_name}-after`], U = {
            associationDisplayComponent: K(
              this.associationDisplayComponent
            ),
            regularFieldType: me.getRegularFieldTypeByFieldType(
              f.field_type
            )
          };
          let $ = f.label;
          this.formSettings.requiredFieldsHasAsterisk && f.rules.find((u) => u.type === "required") && ($ = $.concat("*"));
          const x = {
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
            beforeComponent: I ? K(I) : void 0,
            mainComponent: K(z),
            afterComponent: k ? K(k) : void 0,
            events: l.fields[f.field_name] ?? {},
            componentOptions: U
          };
          s.push(x), t.add(f.field_name);
        });
        const c = this.dynamicComponentRecord[`section-${m.name ?? r}-before`], g = this.sectionComponent, F = this.dynamicComponentRecord[`section-${m.name ?? r}-after`], R = {
          label: m.label ?? void 0,
          icon: m.icon ?? void 0,
          cssClass: m.css_class ?? void 0,
          hidden: !1,
          name: m.name ?? r.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? m.readonly ?? void 0,
          events: l.sections[m.name ?? r.toString()] ?? {},
          beforeComponent: c ? K(c) : void 0,
          mainComponent: K(g),
          fieldsComponent: void 0,
          afterComponent: F ? K(F) : void 0,
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
      actionComponent: K(this.actionComponent),
      orphanErrorsComponent: K(this.orphanErrorsComponent),
      wrapperResetComponent: K(this.wrapperResetComponent),
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
const kn = { class: "flex column" }, Vn = /* @__PURE__ */ G({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let l = null, n = null, i = null;
    const m = Me(), r = {
      softReset: g,
      reset: F,
      clear: R,
      validate: z,
      isValid: k,
      isInvalid: U,
      hide: f,
      unhide: I,
      resetValidation: $,
      getFields: x,
      setReadonlyState: u,
      setCssClass: d,
      setIcon: C,
      setLabel: D,
      section: t.section
    }, s = w(/* @__PURE__ */ new Map());
    function c() {
      t.section.fields.forEach((y) => {
        const V = y.metadata.field_name, M = t.formApi.getFieldByName(V);
        M && s.value.set(V, M);
      });
    }
    function g() {
      s.value.forEach((y) => {
        y.softReset();
      });
    }
    function F() {
      s.value.forEach((y) => {
        y.reset();
      }), T(t.section.events.onReset);
    }
    function R() {
      s.value.forEach((y) => {
        y.clear();
      }), T(t.section.events.onClear);
    }
    function f() {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (s.value.forEach((V) => {
        V.hide();
      }), y.hidden = !0, T(t.section.events.onHide));
    }
    function I() {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (s.value.forEach((V) => {
        V.unhide();
      }), y.hidden = !1, T(t.section.events.onUnhide));
    }
    function z() {
      let y = !0;
      return s.value.forEach((V) => {
        if (!V.validate()) {
          y = !1;
          return;
        }
      }), T(t.section.events.onValidated), y;
    }
    function k() {
      let y = !0;
      return s.value.forEach((V) => {
        if (!V.isValid()) {
          y = !1;
          return;
        }
      }), y;
    }
    function U() {
      return !k();
    }
    function $() {
      s.value.forEach((y) => {
        y.resetValidation();
      });
    }
    function x() {
      return s.value;
    }
    function u(y) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = y);
    }
    function d(y) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = y);
    }
    function C(y) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = y);
    }
    function D(y) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = y);
    }
    function L() {
      const y = {};
      for (const [V, M] of s.value)
        y[V] = M.getValueSerialized();
      return y;
    }
    function W() {
      const y = m.default;
      if (!y) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const V = G({
        inheritAttrs: !1,
        setup(M, { attrs: Ce, slots: Fe }) {
          return () => y(
            {
              ...M,
              ...Ce
            },
            Fe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, K(V));
    }
    e(r);
    const ne = re(() => k()), ue = re(() => U()), te = re(() => L());
    return Q(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onIsValid;
      },
      (y) => {
        l == null || l(), l = null, y && (l = Q(ne, (V) => {
          V && T(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onIsInvalid;
      },
      (y) => {
        n == null || n(), n = null, y && (n = Q(ue, (V) => {
          var M;
          V && T((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var y;
        return (y = t.section) == null ? void 0 : y.events.onUpdate;
      },
      (y) => {
        i == null || i(), i = null, y && (i = Q(
          te,
          () => {
            var V;
            T((V = t.section) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var V;
      W();
      const y = (V = je()) == null ? void 0 : V.exposed;
      y && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        y
      ), _e(() => {
        var M;
        c(), T((M = t.section) == null ? void 0 : M.events.onReady);
      });
    }), (y, V) => Oe((h(), q("div", kn, [
      t.section.beforeComponent ? (h(), A(se(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), A(se(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), A(se(t.section.afterComponent), {
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
  const t = o.rules ?? [], l = o.type, n = e.form, i = (c, g, F) => c[g] ? F ? () => m(c[g]) : () => c[g] : c.compare_to ? () => {
    var R;
    return ((R = e.getFieldByName(c.compare_to)) == null ? void 0 : R.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", m = (c) => String(
    H.formatDate(
      H.extractDate(c, n.formSettings.backendDateFormat),
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
        r.push(En());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Tn(
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
          Gn(
            i(g, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Mn(
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
    const l = o(), n = H.extractDate(String(t), e), i = H.extractDate(l, e);
    return n <= i || `Inf. ou égal à ${l}`;
  };
}
function Zn(o, e) {
  return (t) => {
    const l = o(), n = H.extractDate(String(t), e), i = H.extractDate(l, e);
    return n < i || `Inf. à ${l}`;
  };
}
function ea(o, e) {
  return (t) => {
    const l = o(), n = H.extractDate(String(t), e), i = H.extractDate(l, e);
    return n >= i || `Sup. ou égal à ${l}`;
  };
}
function ta(o, e) {
  return (t) => {
    const l = o(), n = H.extractDate(String(t), e), i = H.extractDate(l, e);
    return n > i || `Sup. à ${l}`;
  };
}
function na(o, e) {
  return (t) => {
    const l = o(), n = H.extractDate(String(t), e), i = H.extractDate(l, e);
    return n === i || `Égale à ${n}`;
  };
}
function aa(o, e) {
  return (t) => {
    const l = o();
    return H.extractDate(String(t), e) !== H.extractDate(l, e) || `Doit être différent de ${l}`;
  };
}
function qe(o) {
  return (e) => e == null || e === "" ? !0 : oa(e, o) || `Date invalide. Format : ${o}`;
}
function oa(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = H.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : H.formatDate(t, e) === o;
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
}, va = ["index"], ya = /* @__PURE__ */ G({
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
    const s = k(), c = w(), g = w([]);
    function F() {
      c.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), c.value = f(c.value);
    }
    function R() {
      c.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), c.value = f(c.value), T(t.field.events.onReset), m(), _e(() => {
        Ce();
      });
    }
    function f(b) {
      const N = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return b == null || b === "" ? !1 : b;
        case "date":
          return b == null || b === "" ? null : H.formatDate(
            H.extractDate(String(b), N.formSettings.backendDateFormat),
            N.formSettings.dateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : H.formatDate(
            H.extractDate(
              String(b),
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
      return b;
    }
    function I(b) {
      const N = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return b == null || b === "" ? null : H.formatDate(
            H.extractDate(String(b), N.formSettings.dateFormat),
            N.formSettings.backendDateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : H.formatDate(
            H.extractDate(String(b), N.formSettings.datetimeFormat),
            N.formSettings.backendDatetimeFormat
          );
      }
      return b;
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
          c.value = void 0;
          break;
        case "selectHasMany":
          c.value = void 0;
          break;
        case "selectHasAndBelongsToMany":
          c.value = void 0;
          break;
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
      r(), T(t.field.events.onClear);
    }
    function k() {
      return ga.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function U(b) {
      c.value = b;
    }
    function $() {
      return a(c);
    }
    function x() {
      return I(a(c));
    }
    function u(b) {
      g.value = b;
    }
    function d() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !0, T(t.field.events.onHide));
    }
    function C() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !1, T(t.field.events.onUnhide));
    }
    function D(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.readonly = b);
    }
    function L(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.hint = b);
    }
    function W(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.cssClass = b);
    }
    function ne(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.suffix = b);
    }
    function ue(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.prefix = b);
    }
    function te(b) {
      const N = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      N && (N.label = b);
    }
    function y() {
      const b = l();
      return T(t.field.events.onValidated), b;
    }
    function V() {
      return n();
    }
    function M() {
      return !V();
    }
    function Ce() {
      return i();
    }
    function Fe(b, N, de, Se, De) {
      l = b, n = N, i = de, Se && (m = Se), De && (r = De);
    }
    const ke = {
      softReset: F,
      reset: R,
      clear: z,
      validate: y,
      isValid: V,
      isInvalid: M,
      hide: d,
      unhide: C,
      resetValidation: Ce,
      getValueDeserialized: x,
      getValueSerialized: $,
      setupBackendErrors: u,
      setReadonlyState: D,
      setHint: L,
      setCssClass: W,
      setSuffix: ne,
      setPrefix: ue,
      setLabel: te,
      setValue: U,
      field: t.field
    };
    return e(ke), Q(
      () => t.field.events.onUpdate ? c.value : null,
      () => {
        T(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? c.value : null,
      (b) => {
        T(b ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var N, de;
      F();
      const b = (N = je()) == null ? void 0 : N.exposed;
      b && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        b
      ), T((de = t.field) == null ? void 0 : de.events.onReady);
    }), (b, N) => Oe((h(), q("div", null, [
      t.field.beforeComponent ? (h(), A(se(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ke
      }, null, 8, ["formApi"])) : O("", !0),
      (h(), A(se(t.field.mainComponent), {
        modelValue: c.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: R,
        clear: z,
        getValueDeserialized: x,
        getValueSerialized: $,
        validate: y,
        modelValueOnUpdate: U,
        registerBehaviourCallbacks: Fe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), A(se(t.field.afterComponent), {
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
}), ba = { class: "flex column" }, Fa = /* @__PURE__ */ G({
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
    let l = null, n = "", i = 0, m = 0, r = null, s = null, c = null, g = null, F = null;
    const R = Me(), f = w(me.getEmptyFormBeforeInit()), I = w(!1), z = w(!1), k = w(!1), U = w(!1), $ = w("create"), x = w({}), u = w(/* @__PURE__ */ new Map()), d = w(/* @__PURE__ */ new Map());
    async function C() {
      l = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = me.getForm(
        t.resourceName,
        t.resourceId,
        W(),
        l,
        t.formSettings,
        t.formStyle,
        t.context,
        ce,
        t.eventManager
      ), i = f.value.sections.length, m = f.value.sections.map((p) => p.fields).flat().length, t.resourceId && ($.value = "edit");
    }
    async function D() {
      var B, J, ye;
      if (!te())
        return;
      T((B = f.value) == null ? void 0 : B.events.onSubmit), U.value = !0, b();
      const p = ne(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: p,
        context: t.context
      });
      if (g = _.resource_data, _.success)
        x.value = {}, $.value === "create" && ($.value = "edit"), l && _.resource_data && (l.resource_data = _.resource_data), f.value = me.getForm(
          t.resourceName,
          t.resourceId,
          W(),
          {
            form: _.form,
            resource_data: _.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ce,
          t.eventManager
        ), M(), n = JSON.stringify(ne()), T((ye = f.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        x.value = {};
        const be = [];
        for (const [ie, fe] of d.value) {
          const Ae = _.errors[ie];
          Ae && (fe.setupBackendErrors(Ae), be.push(ie));
        }
        Object.entries(_.errors).forEach((ie) => {
          be.includes(ie[0]) || (x.value[ie[0]] = ie[1]);
        }), T((J = f.value) == null ? void 0 : J.events.onSubmitUnsuccess);
      }
      U.value = !1;
    }
    async function L(p) {
      var J, ye, be;
      if (!f.value.allowBulk || $.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!te())
        return;
      T((J = f.value) == null ? void 0 : J.events.onSubmit), U.value = !0, b();
      const _ = ne(), B = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: _,
        bulkCount: p,
        context: t.context
      });
      if (F = B.bulk_data, B.success)
        x.value = {}, $.value === "create" && ($.value = "edit"), l && B.resource_data && (l.resource_data = B.resource_data), f.value = me.getForm(
          t.resourceName,
          t.resourceId,
          W(),
          {
            form: B.form,
            resource_data: B.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ce,
          t.eventManager
        ), M(), n = JSON.stringify(ne()), T((be = f.value) == null ? void 0 : be.events.onSubmitSuccess);
      else {
        x.value = {};
        const ie = [];
        for (const [fe, Ae] of d.value) {
          const Ue = B.errors[fe];
          Ue && (Ae.setupBackendErrors(Ue), ie.push(fe));
        }
        Object.entries(B.errors).forEach((fe) => {
          ie.includes(fe[0]) || (x.value[fe[0]] = fe[1]);
        }), T((ye = f.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
      }
      U.value = !1;
    }
    function W() {
      const p = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const _ in R) {
        const B = R[_];
        if (B) {
          const J = G({
            inheritAttrs: !1,
            setup(ye, { attrs: be, slots: ie }) {
              return () => B({
                ...ye,
                ...be,
                innerSlots: ie
              });
            }
          });
          switch (_) {
            case "sections":
              p.sectionComponent = J;
              break;
            case "actions":
              p.actionComponent = J;
              break;
            case "orphan-errors":
              p.orphanErrorsComponent = J;
              break;
            case "association-display":
              p.associationDisplayComponent = J;
              break;
            default:
              p.dynamicComponentRecord[_] = J;
              break;
          }
        }
      }
      return p;
    }
    function ne() {
      const p = {};
      for (const [_, B] of d.value)
        p[_] = B.getValueDeserialized();
      return p;
    }
    function ue() {
      const p = {};
      for (const [_, B] of d.value)
        p[_] = B.getValueSerialized();
      return p;
    }
    function te() {
      var _;
      let p = !0;
      return d.value.forEach((B) => {
        if (!B.validate()) {
          p = !1;
          return;
        }
      }), T((_ = f.value) == null ? void 0 : _.events.onValidated), p;
    }
    function y() {
      let p = !0;
      return d.value.forEach((_) => {
        if (!_.isValid()) {
          p = !1;
          return;
        }
      }), p;
    }
    function V() {
      return !y();
    }
    function M() {
      u.value.forEach((p) => {
        p.softReset();
      });
    }
    function Ce() {
      var p;
      d.value.forEach((_) => {
        _.reset();
      }), T((p = f.value) == null ? void 0 : p.events.onReset);
    }
    function Fe() {
      var p;
      d.value.forEach((_) => {
        _.clear();
      }), T((p = f.value) == null ? void 0 : p.events.onClear);
    }
    function ke() {
      d.value.forEach((p) => {
        p.resetValidation();
      });
    }
    function b() {
      d.value.forEach((p) => {
        p.setupBackendErrors([]);
      });
    }
    function N(p) {
      if (l)
        return l.resource_data[p];
    }
    function de(p) {
      return u.value.get(p);
    }
    function Se(p) {
      return [...u.value.values()].at(p);
    }
    function De() {
      return u.value;
    }
    function Xe(p) {
      return d.value.get(p);
    }
    function Ze() {
      return d.value;
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
      ].forEach((_) => {
        (t[_] === null || t[_] === void 0) && console.warn(`Missing props for <Submit64> -> ${_}`);
      });
    }
    function nt() {
      return a($);
    }
    function at() {
      return n !== JSON.stringify(ne());
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
      return k.value;
    }
    function st() {
      return g;
    }
    function ut() {
      return F;
    }
    function dt() {
      return f;
    }
    function ct(p) {
      var _;
      return (_ = f.value) == null ? void 0 : _.sections.find((B) => B.name === p);
    }
    function ft(p) {
      var _;
      return (_ = f.value) == null ? void 0 : _.sections.map((B) => B.fields).flat().find((B) => B.metadata.field_name === p);
    }
    function mt(p, _) {
      u.value.set(p, _), i === u.value.size && (I.value = !0);
    }
    function pt(p, _) {
      d.value.set(p, _), m === d.value.size && (z.value = !0);
    }
    function gt(p, _) {
      p.fieldsComponent = _;
    }
    const Ie = {
      getFormRef: dt,
      getSectionRef: ct,
      getFieldRef: ft,
      registerSectionWrapperRef: mt,
      registerFieldWrapperRef: pt,
      setSectionFieldComponent: gt
    }, ht = new Proxy({}, {
      get(p, _) {
        var B;
        return (B = f.value) == null ? void 0 : B[_];
      }
    }), ce = {
      getMode: nt,
      getSectionByName: de,
      getSectionByIndex: Se,
      getSections: De,
      getFieldByName: Xe,
      getFields: Ze,
      validate: te,
      isValid: y,
      isInvalid: V,
      softReset: M,
      reset: Ce,
      clear: Fe,
      resetValidation: ke,
      submit: D,
      submitBulk: L,
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
    const vt = re(() => y()), yt = re(() => V()), bt = re(() => ue());
    return Q(
      () => I.value && z.value,
      (p) => {
        var _;
        p && !k.value && (T((_ = f.value) == null ? void 0 : _.events.onReady), k.value = !0);
      }
    ), Q(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onIsValid;
      },
      (p) => {
        r == null || r(), r = null, p && (r = Q(vt, (_) => {
          var B;
          _ && T((B = f.value) == null ? void 0 : B.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onIsInvalid;
      },
      (p) => {
        s == null || s(), s = null, p && (s = Q(yt, (_) => {
          var B;
          _ && T((B = f.value) == null ? void 0 : B.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var p;
        return (p = f.value) == null ? void 0 : p.events.onUpdate;
      },
      (p) => {
        c == null || c(), c = null, p && (c = Q(
          bt,
          () => {
            var _;
            T((_ = f.value) == null ? void 0 : _.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      tt(), await C(), _e(() => {
        n = JSON.stringify(ne());
      });
    }), (p, _) => Oe((h(), q("div", ba, [
      j("div", {
        class: ee(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(pe, null, ge(f.value.sections, (B) => (h(), A(Vn, {
          key: B.name,
          section: B,
          formApi: ce,
          privateFormApi: Ie
        }, {
          default: v(() => [
            (h(!0), q(pe, null, ge(B.fields, (J) => (h(), A(ya, {
              key: J.metadata.field_name,
              field: J,
              formApi: ce,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (h(), A(se(f.value.orphanErrorsComponent), {
        orphanErrors: x.value,
        formApi: ce
      }, null, 8, ["orphanErrors"])),
      (h(), A(se(f.value.actionComponent), {
        isLoadingSubmit: U.value,
        formApi: ce
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, k.value]
    ]);
  }
});
export {
  Ne as DynamicLogicBuilder,
  X as Submit64,
  Fa as Submit64Form
};
