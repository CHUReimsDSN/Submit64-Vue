var Pe = Object.defineProperty;
var Ge = (o, e, t) => e in o ? Pe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => Ge(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as N, createElementBlock as q, openBlock as h, createElementVNode as Y, createVNode as T, createBlock as D, createCommentVNode as P, unref as a, mergeProps as ve, toDisplayString as W, renderSlot as Ae, resolveComponent as Le, normalizeProps as He, guardReactiveProps as Ye, withCtx as B, createTextVNode as je, Fragment as le, renderList as se, ref as k, onMounted as U, normalizeClass as H, watch as j, resolveDynamicComponent as G, nextTick as me, markRaw as I, getCurrentInstance as Ee, withDirectives as Se, vShow as _e, useSlots as We } from "vue";
import { QBtn as M, QIcon as ue, QItem as Qe, QItemSection as Me, QItemLabel as Je, QInput as pe, QPopupProxy as Ce, QDate as Be, QTime as Ke, QCheckbox as Xe, QSelect as Fe, date as x } from "quasar";
const Ze = { class: "flex column" }, et = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, tt = /* @__PURE__ */ N({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    formApi: {},
    submit: { type: Function },
    reset: { type: Function },
    clear: { type: Function }
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
    return (r, n) => (h(), q("div", Ze, [
      Y("div", et, [
        T(a(M), ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), D(a(M), ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.clear ? (h(), D(a(M), ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), nt = { class: "flex row items-center" }, ot = { class: "text-body1 text-weight-medium" }, rt = { class: "flex column q-gutter-md" }, at = /* @__PURE__ */ N({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      Y("div", nt, [
        e.sectionApi.section.icon ? (h(), D(a(ue), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : P("", !0),
        Y("div", ot, W(e.sectionApi.section.label), 1)
      ]),
      Y("div", rt, [
        Ae(t.$slots, "default")
      ])
    ]));
  }
}), it = /* @__PURE__ */ N({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Le("q-icon");
      return h(), D(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (l) => e.reset())
      });
    };
  }
}), lt = /* @__PURE__ */ N({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), D(a(Qe), He(Ye(e.itemProps)), {
      default: B(() => [
        T(a(Me), null, {
          default: B(() => [
            T(a(Je), null, {
              default: B(() => [
                je(W(e.entry.label), 1)
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
}), st = { class: "flex column" }, ut = /* @__PURE__ */ N({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", st, [
      (h(!0), q(le, null, se(e.orphanErrors, (n, l) => (h(), q("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, W(l) + " : " + W(n.join(",")), 1))), 128))
    ]));
  }
}), fe = class fe {
  constructor() {
    S(this, "_formSettings");
    S(this, "_formStyle");
    S(this, "_actionComponent");
    S(this, "_orphanErrorsComponent");
    S(this, "_sectionComponent");
    S(this, "_wrapperResetComponent");
    S(this, "_associationDisplayComponent");
    this._formSettings = {
      rulesBehaviour: "ondemand",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      renderBackendHint: !0
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
      fieldBgColor: "white"
    }, this._actionComponent = tt, this._orphanErrorsComponent = ut, this._sectionComponent = at, this._wrapperResetComponent = it, this._associationDisplayComponent = lt;
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
S(fe, "_instance", new fe());
let $ = fe;
class ce {
  constructor(e) {
    S(this, "formApi");
    S(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, l = new dt(r, n, this.formApi);
    return this.events.push(l), new ct(l);
  }
  static create(e) {
    return new ce(e);
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
          t.fields[n.target] || (t.fields[n.target] = {}), t.fields[n.target][n.key] || (t.fields[n.target][n.key] = []), t.fields[n.target][n.key].push(r.getActionCallback());
          break;
        case "section":
          t.sections[n.target] || (t.sections[n.target] = {}), t.sections[n.target][n.key] || (t.sections[n.target][n.key] = []), t.sections[n.target][n.key].push(r.getActionCallback());
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
class ct {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.actions.push(e), this;
  }
}
class dt {
  constructor(e, t, r) {
    S(this, "type");
    S(this, "data");
    S(this, "actions", []);
    S(this, "formApi");
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
      case "Field confirm value statement":
        return {
          target: "field",
          targetName: this.data.fieldName,
          key: "onConfirmStatement"
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
          key: "onReset"
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
      this.actions.forEach((e) => {
        e(this.formApi);
      });
    };
  }
}
const ft = { class: "row items-center justify-end" }, mt = /* @__PURE__ */ N({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), s = k();
    function d() {
      i.value && i.value.hide();
    }
    function u() {
      return s.value ? s.value.validate() : !1;
    }
    function p() {
      return s.value ? s.value.hasError : !1;
    }
    function _() {
      s.value && s.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, p, _);
    }), (b, R) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[1] || (R[1] = (E) => e.modelValueOnUpdate(E)),
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
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Be), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": R[0] || (R[0] = (E) => e.modelValueOnUpdate(E)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: B(() => [
                    Y("div", ft, [
                      T(a(M), {
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
        })
      ]),
      _: 1
    }, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), pt = { class: "row items-center justify-end" }, gt = { class: "row items-center justify-end" }, ht = /* @__PURE__ */ N({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), s = k(), d = k();
    function u() {
      i.value && i.value.hide();
    }
    function p() {
      s.value && s.value.hide();
    }
    function _() {
      return d.value ? d.value.validate() : !1;
    }
    function b() {
      return d.value ? d.value.hasError : !1;
    }
    function R() {
      d.value && d.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(_, b, R);
    }), (E, F) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": F[2] || (F[2] = (v) => e.modelValueOnUpdate(v)),
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
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: B(() => [
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Be), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (v) => e.modelValueOnUpdate(v)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: B(() => [
                    Y("div", pt, [
                      T(a(M), {
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
        }),
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: B(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: s,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: B(() => [
                T(a(Ke), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (v) => e.modelValueOnUpdate(v)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: B(() => [
                    Y("div", gt, [
                      T(a(M), {
                        onClick: p,
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
}), yt = { class: "flex column" }, bt = {
  key: 0,
  class: "q-field__bottom"
}, vt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Ct = /* @__PURE__ */ N({
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
    function l() {
      return t.value === !0;
    }
    function i() {
      return t.value === !0;
    }
    function s() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (d) => {
        for (const u of e.rules)
          if (t.value = u(d), t.value !== !0)
            break;
      }
    ), U(() => {
      e.registerBehaviourCallbacks(l, i, s);
    }), (d, u) => (h(), q("div", yt, [
      T(a(Xe), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": u[0] || (u[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: H([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", bt, W(e.field.hint), 1)) : P("", !0),
      t.value !== !0 ? (h(), q("div", vt, W(t.value), 1)) : P("", !0)
    ]));
  }
}), St = /* @__PURE__ */ N({
  __name: "ObjectField",
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
    return t.formStyle, r.rulesBehaviour, (n, l) => " TODO json edit ? ";
  }
}), _t = /* @__PURE__ */ N({
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
    const e = o, t = k([]), r = k([]), n = k(), l = e.formApi.form, i = l.formSettings, s = l.formStyle, d = i.rulesBehaviour === "lazy";
    function u(F, v) {
      if (F === "") {
        v(() => {
          r.value = [...t.value];
        });
        return;
      }
      v(() => {
        const A = F.toLowerCase();
        r.value = t.value.filter((f) => f.label.toLowerCase().includes(A));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function _() {
      return n.value ? n.value.validate() : !1;
    }
    function b() {
      return n.value ? n.value.hasError : !1;
    }
    function R() {
      n.value && n.value.resetValidation();
    }
    function E() {
      e.clear(), r.value = [];
    }
    return U(() => {
      p(), e.registerBehaviourCallbacks(_, b, R);
    }), (F, v) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (A) => e.modelValueOnUpdate(A)),
      type: e.field.componentOptions.regularFieldType,
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
      class: H(e.field.cssClass),
      "lazy-rules": d,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: r.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: E,
      onFilter: u
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function de() {
  return 20;
}
function O(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const Ft = /* @__PURE__ */ N({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", s = k([]), d = k({
      limit: de(),
      offset: 0
    }), u = k();
    function p(v, A) {
      const f = e.formApi.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: de(),
        offset: 0
      }), A(() => {
        const y = e.formApi.form;
        f({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: y.context
        }).then((w) => {
          s.value = w.rows;
        }).catch(() => {
          s.value = [];
        });
      });
    }
    function _() {
      me(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (s.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: v,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function b() {
      return u.value ? u.value.validate() : !1;
    }
    function R() {
      return u.value ? u.value.hasError : !1;
    }
    function E() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), s.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(b, R, E);
    }), (v, A) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (f) => e.modelValueOnUpdate(f)),
      type: e.field.componentOptions.regularFieldType,
      label: e.field.label,
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
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: F,
      onFilter: p
    }, {
      option: B((f) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), kt = /* @__PURE__ */ N({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", s = k([]), d = k({
      limit: de(),
      offset: 0
    }), u = k();
    function p(v, A) {
      const f = e.formApi.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: de(),
        offset: 0
      }), A(() => {
        const y = e.formApi.form;
        f({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: y.context
        }).then((w) => {
          s.value = w.rows;
        }).catch(() => {
          s.value = [];
        });
      });
    }
    function _() {
      me(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (s.value = v.map(
          (A, f) => ({
            label: e.field.associationData.label[f] ?? "???",
            value: A,
            data: e.field.associationData.data[f]
          })
        ));
      });
    }
    function b() {
      return u.value ? u.value.validate() : !1;
    }
    function R() {
      return u.value ? u.value.hasError : !1;
    }
    function E() {
      u.value && u.value.resetValidation();
    }
    function F() {
      e.clear(), s.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(b, R, E);
    }), (v, A) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (f) => e.modelValueOnUpdate(f)),
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
      class: H(e.field.cssClass),
      "lazy-rules": i,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      options: s.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: F,
      onFilter: p
    }, {
      option: B((f) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: f.opt,
          itemProps: f.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), De = /* @__PURE__ */ N({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k();
    function s() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function u() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(s, d, u);
    }), (p, _) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: H(e.field.cssClass),
      "lazy-rules": l,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "prefix", "suffix", "readonly", "clearable", "rules", "onClear"]));
  }
}), Vt = /* @__PURE__ */ N({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k();
    function s() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function u() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(s, d, u);
    }), (p, _) => (h(), D(a(pe), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => e.modelValueOnUpdate(b)),
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
      class: H(e.field.cssClass),
      "lazy-rules": l,
      clearable: e.field.clearable,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      rules: e.rules,
      onClear: e.clear
    }, null, 8, ["model-value", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "onClear"]));
  }
});
class J {
  constructor(e, t, r, n, l, i, s, d, u) {
    S(this, "resourceName");
    S(this, "resourceId");
    S(this, "formMetadataAndData");
    S(this, "context");
    S(this, "formSettings");
    S(this, "formStyle");
    S(this, "actionComponent");
    S(this, "orphanErrorsComponent");
    S(this, "sectionComponent");
    S(this, "wrapperResetComponent");
    S(this, "associationDisplayComponent");
    S(this, "dynamicComponentRecord");
    S(this, "formApi");
    S(this, "registerEventCallback");
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = s, this.resourceName = e, this.formApi = d, this.formSettings = {
      ...l,
      ...$.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...$.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? $.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? $.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? $.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? $.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? $.getGlobalAssociationDisplayComponent(), this.registerEventCallback = u ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: {
        ...$.getGlobalFormSetting(),
        backendDateFormat: "YYYY/MM/DD",
        backendDatetimeFormat: "YYYY/MM/DD HH:mm"
      },
      formStyle: $.getGlobalFormStyle(),
      events: {},
      actionComponent: I($.getGlobalActionComponent()),
      orphanErrorsComponent: I($.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: I($.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, l, i, s, d, u) {
    return new J(
      e,
      t,
      r,
      n,
      l,
      i,
      s,
      d,
      u
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ce.create(this.formApi);
    this.registerEventCallback(e);
    const t = ce.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (l, i) => {
        const s = [];
        l.fields.forEach((b) => {
          const R = this.dynamicComponentRecord[`field-${b.field_name}-before`], E = J.getFieldComponentByFormFieldType(
            b.field_type
          ), F = this.dynamicComponentRecord[`field-${b.field_name}-after`], v = {
            associationDisplayComponent: I(
              this.associationDisplayComponent
            ),
            regularFieldType: J.getRegularFieldTypeByFieldType(
              b.field_type
            )
          }, A = {
            type: b.field_type,
            metadata: Object.freeze(b),
            label: b.label,
            hint: b.hint ?? void 0,
            prefix: b.prefix ?? void 0,
            suffix: b.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? b.readonly ?? void 0,
            cssClass: b.css_class ?? void 0,
            staticSelectOptions: b.static_select_options,
            associationData: b.field_association_data,
            rules: b.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: R ? I(R) : void 0,
            mainComponent: I(E),
            afterComponent: F ? I(F) : void 0,
            events: t.fields[b.field_name] ?? {},
            componentOptions: v
          };
          s.push(A);
        });
        const d = this.dynamicComponentRecord[`section-${l.name ?? i}-before`], u = this.sectionComponent, p = this.dynamicComponentRecord[`section-${l.name ?? i}-after`], _ = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? i.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: t.sections[l.name ?? i.toString()] ?? {},
          beforeComponent: d ? I(d) : void 0,
          mainComponent: I(u),
          afterComponent: p ? I(p) : void 0,
          fields: s
        };
        r.push(_);
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
      events: t.form,
      actionComponent: I(this.actionComponent),
      orphanErrorsComponent: I(this.orphanErrorsComponent),
      wrapperResetComponent: I(this.wrapperResetComponent),
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
    return {
      string: De,
      text: De,
      number: Vt,
      date: mt,
      datetime: ht,
      selectString: _t,
      selectBelongsTo: Ft,
      selectHasMany: kt,
      checkbox: Ct,
      object: St
    }[e];
  }
}
function xt(o, e, t) {
  const r = t.form, n = (d, u, p) => d[u] ? p ? () => l(d[u]) : () => d[u] : d.compare_to ? () => {
    var _;
    return ((_ = t.getFieldByName(d.compare_to)) == null ? void 0 : _.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", l = (d) => String(
    x.formatDate(
      x.extractDate(d, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], s = [];
  switch (e) {
    case "date":
      i.push(Re(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(Re(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((d) => {
    const u = d;
    switch (u.type) {
      case "required":
        i.push(Dt());
        break;
      case "absence":
        i.push(At());
        break;
      case "acceptance":
        i.push(Et());
        break;
      case "inclusion":
        i.push(Ne(u.including));
        break;
      case "exclusion":
        i.push(Rt(u.excluding));
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
        i.push(Ot());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Tt(
            n(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          qt(
            n(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          wt(
            n(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          $t(
            n(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          zt(n(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          It(
            n(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Ut());
        break;
      case "numberNumericOnly":
        i.push(Pt());
        break;
      case "numberEvenOnly":
        i.push(Gt());
        break;
      case "numberOddOnly":
        i.push(Lt());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          Ht(
            n(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          Yt(
            n(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          jt(
            n(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Wt(
            n(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Jt(
            n(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Mt(n(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          Qt(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          Kt(
            n(u, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          Xt(
            n(u, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          Zt(
            n(u, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          en(
            n(u, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          tn(
            n(u, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          nn(
            n(u, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          on(
            n(u, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return Nt(i);
      case "allowNull":
        return Bt(i);
    }
  }) : i;
}
function Dt() {
  return (o) => !!o || "Ce champ est requis";
}
function Ne(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Rt(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Ne.toString()}`
  );
}
function At() {
  return (o) => !o || "Ce champ doit être vide";
}
function Et() {
  return (o) => !!o || "Doit être accepté";
}
function Bt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Nt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Ot() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Tt(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function qt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function wt(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function $t(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function zt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function It(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Ut() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Pt() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Gt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function Lt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Ht(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Yt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function jt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Wt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Qt(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Mt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Jt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Kt(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Xt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n <= l || `Inf. ou égal à ${r}`;
  };
}
function Zt(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n < l || `Inf. à ${r}`;
  };
}
function en(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n >= l || `Sup. ou égal à ${r}`;
  };
}
function tn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n > l || `Sup. à ${r}`;
  };
}
function nn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n === l || `Égale à ${n}`;
  };
}
function on(o, e) {
  return (t) => {
    const r = o();
    return x.extractDate(String(t), e) !== x.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Re(o) {
  return (e) => e == null || e === "" ? !0 : rn(e, o) || `Date invalide. Format : ${o}`;
}
function rn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = x.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : x.formatDate(t, e) === o;
}
const an = {
  computeServerRules: xt
}, ln = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, sn = ["index"], un = /* @__PURE__ */ N({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, l = () => {
    };
    const i = R(), s = k(), d = k([]);
    function u() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = p(s.value), O(t.field.events.onReset), me(() => {
        re();
      });
    }
    function p(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return m == null || m === "" ? !1 : m;
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(
              String(m),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return m;
    }
    function _(m) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return m == null || m === "" ? null : x.formatDate(
            x.extractDate(String(m), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return m;
    }
    function b() {
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
        case "selectString":
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
      }
      O(t.field.events.onClear);
    }
    function R() {
      return an.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function E(m) {
      s.value = m;
    }
    function F() {
      return a(s);
    }
    function v() {
      return _(a(s));
    }
    function A(m) {
      d.value = m;
    }
    function f() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !0);
    }
    function y() {
      const m = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      m && (m.hidden = !1);
    }
    function w(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = m);
    }
    function Z(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.hint = m);
    }
    function ee(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.cssClass = m);
    }
    function K(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = m);
    }
    function te(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = m);
    }
    function ge(m) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = m);
    }
    function ne() {
      const m = r();
      return O(t.field.events.onValidated), m;
    }
    function oe() {
      return n();
    }
    function re() {
      return l();
    }
    function he(m, C, X) {
      r = m, n = C, l = X;
    }
    const ye = {
      reset: u,
      clear: b,
      validate: ne,
      isValid: oe,
      hide: f,
      unhide: y,
      resetValidation: re,
      getValueDeserialized: v,
      getValueSerialized: F,
      setupBackendErrors: A,
      setReadonlyState: w,
      setHint: Z,
      setCssClass: ee,
      setSuffix: K,
      setPrefix: te,
      setLabel: ge,
      setValue: E,
      field: t.field
    };
    return e(ye), j(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        O(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid ? oe() : null,
      (m) => {
        m && O(t.field.events.onIsValid);
      }
    ), U(() => {
      var C;
      u();
      const m = (C = Ee()) == null ? void 0 : C.exposed;
      m && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        m
      );
    }), (m, C) => Se((h(), q("div", null, [
      t.field.beforeComponent ? (h(), D(G(t.field.beforeComponent), {
        key: 0,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      (h(), D(G(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: u,
        clear: b,
        getValueDeserialized: v,
        getValueSerialized: F,
        validate: ne,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: he
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), D(G(t.field.afterComponent), {
        key: 1,
        field: t.field,
        formApi: t.formApi
      }, null, 8, ["field", "formApi"])) : P("", !0),
      d.value.length > 0 ? (h(), q("div", ln, [
        (h(!0), q(le, null, se(d.value, (X, be) => (h(), q("div", {
          index: be,
          class: "flex column"
        }, W(X), 9, sn))), 256))
      ])) : P("", !0)
    ], 512)), [
      [_e, t.field.hidden !== !0]
    ]);
  }
}), cn = { class: "flex column" }, dn = /* @__PURE__ */ N({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: i,
      clear: s,
      validate: p,
      isValid: _,
      hide: d,
      unhide: u,
      resetValidation: b,
      getFields: R,
      setReadonlyState: E,
      setCssClass: F,
      setIcon: v,
      setLabel: A,
      section: t.section
    };
    function l() {
      t.section.fields.forEach((f) => {
        const y = f.metadata.field_name, w = t.formApi.getFieldByName(y);
        w && r.set(y, w);
      });
    }
    function i() {
      r.forEach((f) => {
        f.reset();
      }), O(t.section.events.onReset);
    }
    function s() {
      r.forEach((f) => {
        f.clear();
      }), O(t.section.events.onClear);
    }
    function d() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((y) => {
        y.hide();
      }), f.hidden = !0, O(t.section.events.onHide));
    }
    function u() {
      const f = t.privateFormApi.getSectionRef(
        t.section.name
      );
      f && (r.forEach((y) => {
        y.unhide();
      }), f.hidden = !1, O(t.section.events.onUnhide));
    }
    function p() {
      let f = !0;
      return r.forEach((y) => {
        if (!y.validate()) {
          f = !1;
          return;
        }
      }), O(t.section.events.onValidated), f;
    }
    function _() {
      let f = !0;
      return r.forEach((y) => {
        if (!y.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function b() {
      r.forEach((f) => {
        f.resetValidation();
      });
    }
    function R() {
      return r;
    }
    function E(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.readonly = f);
    }
    function F(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.cssClass = f);
    }
    function v(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.icon = f);
    }
    function A(f) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.label = f);
    }
    return e(n), j(
      () => t.section.events.onIsValid ? _() : null,
      (f) => {
        f && O(t.section.events.onIsValid);
      }
    ), U(() => {
      var y;
      const f = (y = Ee()) == null ? void 0 : y.exposed;
      f && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        f
      ), l();
    }), (f, y) => Se((h(), q("div", cn, [
      t.section.beforeComponent ? (h(), D(G(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0),
      (h(), D(G(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: B(() => [
          Ae(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["formApi"])),
      t.section.afterComponent ? (h(), D(G(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0)
    ], 512)), [
      [_e, t.section.hidden !== !0]
    ]);
  }
}), fn = { class: "flex column" }, hn = /* @__PURE__ */ N({
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
    let r = null, n = "", l = 0, i = 0;
    const s = We(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = k(J.getEmptyFormBeforeInit()), _ = k(!1), b = k(!1), R = k(!1), E = k(!1), F = k("create"), v = k({});
    async function A() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), p.value = J.getForm(
        t.resourceName,
        t.resourceId,
        y(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        Q,
        t.eventManager
      ), l = p.value.sections.length, i = p.value.sections.map((c) => c.fields).flat().length, t.resourceId && (F.value = "edit");
    }
    async function f() {
      var V, z;
      if (!Z())
        return;
      E.value = !0, ne();
      const c = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: t.context
      });
      if (g.success)
        v.value = {}, F.value === "create" && (F.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), K();
      else {
        v.value = {};
        const ae = [];
        [...d].forEach((L) => {
          const ie = g.errors[L[0]];
          ie && (L[1].setupBackendErrors(ie), ae.push(L[0]));
        }), Object.entries(g.errors).forEach((L) => {
          ae.includes(L[0]) || (v.value[L[0]] = L[1]);
        });
      }
      O((z = (V = p.value) == null ? void 0 : V.events) == null ? void 0 : z.onSubmit), E.value = !1;
    }
    function y() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in s) {
        const V = s[g];
        if (V) {
          const z = N({
            inheritAttrs: !1,
            setup(ae, { attrs: L, slots: ie }) {
              return () => V({
                ...ae,
                ...L,
                slots: ie
              });
            }
          });
          switch (g) {
            case "sections":
              c.sectionComponent = z;
              break;
            case "actions":
              c.actionComponent = z;
              break;
            case "orphan-errors":
              c.orphanErrorsComponent = z;
              break;
            case "association-display":
              c.associationDisplayComponent = z;
              break;
            default:
              c.dynamicComponentRecord[g] = z;
              break;
          }
        }
      }
      return c;
    }
    function w() {
      const c = {};
      return [...d].forEach((g) => {
        c[g[0]] = g[1].getValueDeserialized();
      }), c;
    }
    function Z() {
      var g, V;
      let c = !0;
      return d.forEach((z) => {
        if (!z.validate()) {
          c = !1;
          return;
        }
      }), O((V = (g = p.value) == null ? void 0 : g.events) == null ? void 0 : V.onValidated), c;
    }
    function ee() {
      let c = !0;
      return d.forEach((g) => {
        if (!g.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function K() {
      var c, g;
      d.forEach((V) => {
        V.reset();
      }), O((g = (c = p.value) == null ? void 0 : c.events) == null ? void 0 : g.onReset);
    }
    function te() {
      var c, g;
      d.forEach((V) => {
        V.clear();
      }), O((g = (c = p.value) == null ? void 0 : c.events) == null ? void 0 : g.onClear);
    }
    function ge() {
      d.forEach((c) => {
        c.resetValidation();
      });
    }
    function ne() {
      d.forEach((c) => {
        c.setupBackendErrors([]);
      });
    }
    function oe(c) {
      if (r)
        return r.resource_data[c];
    }
    function re(c) {
      return u.get(c);
    }
    function he() {
      return u;
    }
    function ye(c) {
      return d.get(c);
    }
    function m() {
      return d;
    }
    function C() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function X() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function be() {
      return a(F);
    }
    function Oe() {
      return n !== JSON.stringify(w());
    }
    function Te(c) {
      p.value && (p.value.context = c);
    }
    function qe(c) {
      p.value && (p.value.cssClass = c);
    }
    function we(c) {
      p.value && (p.value.readonly = c);
    }
    function $e() {
      return p;
    }
    function ze(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.find((V) => V.name === c);
    }
    function Ie(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.map((V) => V.fields).flat().find((V) => V.metadata.field_name === c);
    }
    function ke(c, g) {
      u.set(c, g), l === u.size && (_.value = !0);
    }
    function Ve(c, g) {
      d.set(c, g), i === d.size && (b.value = !0);
    }
    const xe = {
      getFormRef: $e,
      getSectionRef: ze,
      getFieldRef: Ie,
      registerSectionWrapperRef: ke,
      registerFieldWrapperRef: Ve
    }, Ue = new Proxy({}, {
      get(c, g) {
        var V;
        return (V = p.value) == null ? void 0 : V[g];
      }
    }), Q = {
      getMode: be,
      getSectionByName: re,
      getSections: he,
      getFieldByName: ye,
      getFields: m,
      validateForm: Z,
      isFormValid: ee,
      resetForm: K,
      clearForm: te,
      resetValidation: ge,
      submitForm: f,
      valuesHasChanged: Oe,
      getInitialValueByFieldName: oe,
      getAssociationDataCallback: C,
      setContext: Te,
      setCssClass: qe,
      setReadonlyState: we,
      form: Ue
    };
    return e(Q), j(
      () => _.value && b.value,
      (c) => {
        c && !R.value && (R.value = !0);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onIsValid ? ee() : null;
      },
      () => {
        var c, g;
        O((g = (c = p.value) == null ? void 0 : c.events) == null ? void 0 : g.onIsValid);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onUpdate ? w() : null;
      },
      () => {
        var c, g;
        O((g = (c = p.value) == null ? void 0 : c.events) == null ? void 0 : g.onUpdate);
      }
    ), U(async () => {
      X(), await A(), me(() => {
        n = JSON.stringify(w());
      });
    }), (c, g) => Se((h(), q("div", fn, [
      Y("div", {
        class: H(p.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(le, null, se(p.value.sections, (V) => (h(), D(dn, {
          key: V.name,
          section: V,
          context: t.context,
          formApi: Q,
          privateFormApi: xe,
          registerRef: ke
        }, {
          default: B(() => [
            (h(!0), q(le, null, se(V.fields, (z) => (h(), D(un, {
              key: z.metadata.field_name,
              field: z,
              context: t.context,
              formApi: Q,
              privateFormApi: xe,
              registerRef: Ve
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), D(G(p.value.orphanErrorsComponent), {
        orphanErrors: v.value,
        formApi: Q
      }, null, 8, ["orphanErrors"])),
      (h(), D(G(p.value.actionComponent), {
        isLoadingSubmit: E.value,
        submit: f,
        clear: p.value.clearable ? te : void 0,
        reset: p.value.resetable ? K : void 0,
        formApi: Q
      }, null, 8, ["isLoadingSubmit", "clear", "reset"]))
    ], 512)), [
      [_e, R.value]
    ]);
  }
});
export {
  ce as DynamicLogicBuilder,
  $ as Submit64,
  hn as Submit64Form
};
