var je = Object.defineProperty;
var We = (o, e, t) => e in o ? je(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => We(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as O, createElementBlock as q, openBlock as h, createElementVNode as Y, createVNode as T, createBlock as D, createCommentVNode as P, unref as a, mergeProps as ve, toDisplayString as W, renderSlot as Ne, resolveComponent as Me, normalizeProps as Qe, guardReactiveProps as Je, withCtx as N, createTextVNode as Ke, Fragment as le, renderList as se, ref as k, onMounted as U, normalizeClass as H, watch as j, resolveDynamicComponent as G, nextTick as Z, markRaw as z, getCurrentInstance as Oe, withDirectives as Se, vShow as _e, useSlots as Xe } from "vue";
import { QBtn as Q, QIcon as ue, QItem as Ze, QItemSection as et, QItemLabel as tt, QInput as me, QPopupProxy as Ce, QDate as Te, QTime as nt, QCheckbox as ot, QSelect as Fe, date as x } from "quasar";
const rt = { class: "flex column" }, at = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, it = /* @__PURE__ */ O({
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
    return (r, n) => (h(), q("div", rt, [
      Y("div", at, [
        T(a(Q), ve(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.submit
        }), null, 16, ["loading", "onClick"]),
        e.reset ? (h(), D(a(Q), ve({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.clear ? (h(), D(a(Q), ve({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Vider",
          onClick: e.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), lt = { class: "flex row items-center" }, st = { class: "text-body1 text-weight-medium" }, ut = { class: "flex column q-gutter-md" }, ct = /* @__PURE__ */ O({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", null, [
      Y("div", lt, [
        e.sectionApi.section.icon ? (h(), D(a(ue), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : P("", !0),
        Y("div", st, W(e.sectionApi.section.label), 1)
      ]),
      Y("div", ut, [
        Ne(t.$slots, "default")
      ])
    ]));
  }
}), dt = /* @__PURE__ */ O({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = Me("q-icon");
      return h(), D(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (l) => e.reset())
      });
    };
  }
}), ft = /* @__PURE__ */ O({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), D(a(Ze), Qe(Je(e.itemProps)), {
      default: N(() => [
        T(a(et), null, {
          default: N(() => [
            T(a(tt), null, {
              default: N(() => [
                Ke(W(e.entry.label), 1)
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
}), mt = { class: "flex column" }, pt = /* @__PURE__ */ O({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, r) => (h(), q("div", mt, [
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
    }, this._actionComponent = it, this._orphanErrorsComponent = pt, this._sectionComponent = ct, this._wrapperResetComponent = dt, this._associationDisplayComponent = ft;
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
    const r = e, n = t, l = new gt(r, n, this.formApi);
    return this.events.push(l), new ht(l);
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
class gt {
  constructor(e, t, r) {
    S(this, "type");
    S(this, "data");
    S(this, "formApi");
    S(this, "action", () => {
    });
    S(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class ht {
  constructor(e) {
    S(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const yt = { class: "row items-center justify-end" }, bt = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), u = k();
    function d() {
      i.value && i.value.hide();
    }
    function s() {
      return u.value ? u.value.validate() : !1;
    }
    function p() {
      return u.value ? u.value.hasError : !1;
    }
    function _() {
      u.value && u.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(s, p, _);
    }), (b, V) => (h(), D(a(me), {
      ref_key: "fieldRef",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[1] || (V[1] = (A) => e.modelValueOnUpdate(A)),
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
      append: N(() => [
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "popupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": V[0] || (V[0] = (A) => e.modelValueOnUpdate(A)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: N(() => [
                    Y("div", yt, [
                      T(a(Q), {
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
}), vt = { class: "row items-center justify-end" }, Ct = { class: "row items-center justify-end" }, St = /* @__PURE__ */ O({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, l = r.rulesBehaviour === "lazy", i = k(), u = k(), d = k();
    function s() {
      i.value && i.value.hide();
    }
    function p() {
      u.value && u.value.hide();
    }
    function _() {
      return d.value ? d.value.validate() : !1;
    }
    function b() {
      return d.value ? d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(_, b, V);
    }), (A, F) => (h(), D(a(me), {
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
      append: N(() => [
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "datePopupProxyRef",
              ref: i,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(Te), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[0] || (F[0] = (v) => e.modelValueOnUpdate(v)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: N(() => [
                    Y("div", vt, [
                      T(a(Q), {
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
        T(a(ue), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: N(() => [
            T(a(Ce), {
              ref_key: "timePopupProxyRef",
              ref: u,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: N(() => [
                T(a(nt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": F[1] || (F[1] = (v) => e.modelValueOnUpdate(v)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: N(() => [
                    Y("div", Ct, [
                      T(a(Q), {
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
}), _t = { class: "flex column" }, Ft = {
  key: 0,
  class: "q-field__bottom"
}, kt = {
  key: 1,
  class: "q-field--error q-field__bottom text-negative"
}, Vt = /* @__PURE__ */ O({
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
    function u() {
      t.value = !0;
    }
    return j(
      () => e.modelValue,
      (d) => {
        for (const s of e.rules)
          if (t.value = s(d), t.value !== !0)
            break;
      }
    ), U(() => {
      e.registerBehaviourCallbacks(l, i, u);
    }), (d, s) => (h(), q("div", _t, [
      T(a(ot), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": s[0] || (s[0] = (p) => e.modelValueOnUpdate(p)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: H([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), q("div", Ft, W(e.field.hint), 1)) : P("", !0),
      t.value !== !0 ? (h(), q("div", kt, W(t.value), 1)) : P("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ O({
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
}), Dt = /* @__PURE__ */ O({
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
    const e = o, t = k([]), r = k([]), n = k(), l = e.formApi.form, i = l.formSettings, u = l.formStyle, d = i.rulesBehaviour === "lazy";
    function s(F, v) {
      if (F === "") {
        v(() => {
          r.value = [...t.value];
        });
        return;
      }
      v(() => {
        const R = F.toLowerCase();
        r.value = t.value.filter((m) => m.label.toLowerCase().includes(R));
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
    function V() {
      n.value && n.value.resetValidation();
    }
    function A() {
      e.clear(), r.value = [];
    }
    return U(() => {
      p(), e.registerBehaviourCallbacks(_, b, V);
    }), (F, v) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": v[0] || (v[0] = (R) => e.modelValueOnUpdate(R)),
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
      onClear: A,
      onFilter: s
    }, null, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
});
function de() {
  return 20;
}
function E(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
const Re = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), d = k({
      limit: de(),
      offset: 0
    }), s = k();
    function p(v, R) {
      const m = e.formApi.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: de(),
        offset: 0
      }), R(() => {
        const y = e.formApi.form;
        m({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: y.context
        }).then((w) => {
          u.value = w.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function _() {
      Z(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (u.value = [
          {
            label: e.field.associationData.label[0] ?? "???",
            value: v,
            data: e.field.associationData.data[0]
          }
        ]);
      });
    }
    function b() {
      return s.value ? s.value.validate() : !1;
    }
    function V() {
      return s.value ? s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(b, V, A);
    }), (v, R) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (m) => e.modelValueOnUpdate(m)),
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
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: F,
      onFilter: p
    }, {
      option: N((m) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Ae = /* @__PURE__ */ O({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, l = r.formStyle, i = n.rulesBehaviour === "lazy", u = k([]), d = k({
      limit: de(),
      offset: 0
    }), s = k();
    function p(v, R) {
      const m = e.formApi.getAssociationDataCallback();
      v === "" && (d.value = {
        limit: de(),
        offset: 0
      }), R(() => {
        const y = e.formApi.form;
        m({
          resourceName: y.resourceName,
          resourceId: y.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: d.value.limit,
          offset: d.value.offset,
          labelFilter: v,
          context: y.context
        }).then((w) => {
          u.value = w.rows;
        }).catch(() => {
          u.value = [];
        });
      });
    }
    function _() {
      Z(() => {
        const v = e.getValueSerialized();
        !v || !e.field.associationData || (u.value = v.map(
          (R, m) => ({
            label: e.field.associationData.label[m] ?? "???",
            value: R,
            data: e.field.associationData.data[m]
          })
        ));
      });
    }
    function b() {
      return s.value ? s.value.validate() : !1;
    }
    function V() {
      return s.value ? s.value.hasError : !1;
    }
    function A() {
      s.value && s.value.resetValidation();
    }
    function F() {
      e.clear(), u.value = [];
    }
    return U(() => {
      _(), e.registerBehaviourCallbacks(b, V, A);
    }), (v, R) => (h(), D(a(Fe), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": R[0] || (R[0] = (m) => e.modelValueOnUpdate(m)),
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
      options: u.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      onClear: F,
      onFilter: p
    }, {
      option: N((m) => [
        (h(), D(G(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "type", "label", "hint", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options"]));
  }
}), Be = /* @__PURE__ */ O({
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
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function s() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, d, s);
    }), (p, _) => (h(), D(a(me), {
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
}), Rt = /* @__PURE__ */ O({
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
    function u() {
      return i.value ? i.value.validate() : !1;
    }
    function d() {
      return i.value ? i.value.hasError : !1;
    }
    function s() {
      i.value && i.value.resetValidation();
    }
    return U(() => {
      e.registerBehaviourCallbacks(u, d, s);
    }), (p, _) => (h(), D(a(me), {
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
  constructor(e, t, r, n, l, i, u, d, s) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = u, this.resourceName = e, this.formApi = d, this.formSettings = {
      ...l,
      ...$.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...i,
      ...$.getGlobalFormStyle()
    }, this.actionComponent = r.actionComponent ?? $.getGlobalActionComponent(), this.orphanErrorsComponent = r.orphanErrorsComponent ?? $.getGlobalOrphanErrorComponent(), this.sectionComponent = r.sectionComponent ?? $.getGlobalSectionComponent(), this.wrapperResetComponent = r.wrapperResetComponent ?? $.getGlobalWrapperResetComponent(), this.associationDisplayComponent = r.associationDisplayComponent ?? $.getGlobalAssociationDisplayComponent(), this.registerEventCallback = s ?? (() => {
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
      actionComponent: z($.getGlobalActionComponent()),
      orphanErrorsComponent: z($.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: z($.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, r, n, l, i, u, d, s) {
    return new J(
      e,
      t,
      r,
      n,
      l,
      i,
      u,
      d,
      s
    ).generateFormDef();
  }
  generateFormDef() {
    const e = ce.create(this.formApi);
    this.registerEventCallback(e);
    const t = ce.getEventsObjectFromInstance(e), r = [];
    return this.formMetadataAndData.form.sections.forEach(
      (l, i) => {
        const u = [];
        l.fields.forEach((b) => {
          const V = this.dynamicComponentRecord[`field-${b.field_name}-before`], A = J.getFieldComponentByFormFieldType(
            b.field_type
          ), F = this.dynamicComponentRecord[`field-${b.field_name}-after`], v = {
            associationDisplayComponent: z(
              this.associationDisplayComponent
            ),
            regularFieldType: J.getRegularFieldTypeByFieldType(
              b.field_type
            )
          }, R = {
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
            beforeComponent: V ? z(V) : void 0,
            mainComponent: z(A),
            afterComponent: F ? z(F) : void 0,
            events: t.fields[b.field_name] ?? {},
            componentOptions: v
          };
          u.push(R);
        });
        const d = this.dynamicComponentRecord[`section-${l.name ?? i}-before`], s = this.sectionComponent, p = this.dynamicComponentRecord[`section-${l.name ?? i}-after`], _ = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? i.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: t.sections[l.name ?? i.toString()] ?? {},
          beforeComponent: d ? z(d) : void 0,
          mainComponent: z(s),
          afterComponent: p ? z(p) : void 0,
          fields: u
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
      actionComponent: z(this.actionComponent),
      orphanErrorsComponent: z(this.orphanErrorsComponent),
      wrapperResetComponent: z(this.wrapperResetComponent),
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
      string: Be,
      text: Be,
      number: Rt,
      date: bt,
      datetime: St,
      selectString: Dt,
      selectBelongsTo: Re,
      selectHasMany: Ae,
      selectHasAndBelongsToMany: Ae,
      selectHasOne: Re,
      checkbox: Vt,
      object: xt
    }[e];
  }
}
function At(o, e, t) {
  const r = t.form, n = (d, s, p) => d[s] ? p ? () => l(d[s]) : () => d[s] : d.compare_to ? () => {
    var _;
    return ((_ = t.getFieldByName(d.compare_to)) == null ? void 0 : _.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", l = (d) => String(
    x.formatDate(
      x.extractDate(d, r.formSettings.backendDateFormat),
      r.formSettings.dateFormat
    )
  ), i = [], u = [];
  switch (e) {
    case "date":
      i.push(Ee(r.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(Ee(r.formSettings.datetimeFormat));
      break;
  }
  return o.forEach((d) => {
    const s = d;
    switch (s.type) {
      case "required":
        i.push(Bt());
        break;
      case "absence":
        i.push(Nt());
        break;
      case "acceptance":
        i.push(Ot());
        break;
      case "inclusion":
        i.push(qe(s.including));
        break;
      case "exclusion":
        i.push(Et(s.excluding));
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
        i.push(wt());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          $t(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          zt(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          It(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          Ut(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          Pt(n(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          Gt(
            n(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(Lt());
        break;
      case "numberNumericOnly":
        i.push(Ht());
        break;
      case "numberEvenOnly":
        i.push(Yt());
        break;
      case "numberOddOnly":
        i.push(jt());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          Wt(
            n(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          Mt(
            n(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          Qt(
            n(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          Jt(
            n(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          Zt(
            n(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          Xt(n(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          Kt(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          en(
            n(s, "other_than")
          )
        );
        break;
      case "lessThanOrEqualDate":
        i.push(
          tn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          nn(
            n(s, "less_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          on(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          rn(
            n(s, "greater_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          an(
            n(s, "equal_to", !0),
            r.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          ln(
            n(s, "other_than", !0),
            r.formSettings.dateFormat
          )
        );
        break;
    }
  }), u.length > 0 ? u.map((d) => {
    switch (d) {
      case "allowBlank":
        return qt(i);
      case "allowNull":
        return Tt(i);
    }
  }) : i;
}
function Bt() {
  return (o) => !!o || "Ce champ est requis";
}
function qe(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Et(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${qe.toString()}`
  );
}
function Nt() {
  return (o) => !o || "Ce champ doit être vide";
}
function Ot() {
  return (o) => !!o || "Doit être accepté";
}
function Tt(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function qt(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function wt() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function $t(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function zt(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function It(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ut(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Pt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function Gt(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Lt() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function Ht() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function Yt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function jt() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function Wt(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Mt(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Qt(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Jt(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Kt(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Xt(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Zt(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function en(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function tn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n <= l || `Inf. ou égal à ${r}`;
  };
}
function nn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n < l || `Inf. à ${r}`;
  };
}
function on(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n >= l || `Sup. ou égal à ${r}`;
  };
}
function rn(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n > l || `Sup. à ${r}`;
  };
}
function an(o, e) {
  return (t) => {
    const r = o(), n = x.extractDate(String(t), e), l = x.extractDate(r, e);
    return n === l || `Égale à ${n}`;
  };
}
function ln(o, e) {
  return (t) => {
    const r = o();
    return x.extractDate(String(t), e) !== x.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Ee(o) {
  return (e) => e == null || e === "" ? !0 : sn(e, o) || `Date invalide. Format : ${o}`;
}
function sn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = x.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : x.formatDate(t, e) === o;
}
const un = {
  computeServerRules: At
}, cn = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, dn = ["index"], fn = /* @__PURE__ */ O({
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
    const i = V(), u = k(), d = k([]);
    function s() {
      u.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), u.value = p(u.value), E(t.field.events.onReset), Z(() => {
        re();
      });
    }
    function p(f) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return f == null || f === "" ? !1 : f;
        case "date":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), C.formSettings.backendDateFormat),
            C.formSettings.dateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(
              String(f),
              C.formSettings.backendDatetimeFormat
            ),
            C.formSettings.datetimeFormat
          );
      }
      return f;
    }
    function _(f) {
      const C = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), C.formSettings.dateFormat),
            C.formSettings.backendDateFormat
          );
        case "datetime":
          return f == null || f === "" ? null : x.formatDate(
            x.extractDate(String(f), C.formSettings.datetimeFormat),
            C.formSettings.backendDatetimeFormat
          );
      }
      return f;
    }
    function b() {
      switch (t.field.type) {
        case "string":
          u.value = "";
          break;
        case "checkbox":
          u.value = !1;
          break;
        case "date":
          u.value = null;
          break;
        case "datetime":
          u.value = null;
          break;
        case "number":
          u.value = null;
          break;
        case "selectString":
          u.value = void 0;
          break;
        case "text":
          u.value = "";
          break;
        case "object":
          u.value = {};
          break;
        case "selectBelongsTo":
          u.value = void 0;
          break;
        case "selectHasMany":
          u.value = void 0;
          break;
      }
      E(t.field.events.onClear);
    }
    function V() {
      return un.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function A(f) {
      u.value = f;
    }
    function F() {
      return a(u);
    }
    function v() {
      return _(a(u));
    }
    function R(f) {
      d.value = f;
    }
    function m() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !0);
    }
    function y() {
      const f = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      f && (f.hidden = !1);
    }
    function w(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.readonly = f);
    }
    function ee(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.hint = f);
    }
    function te(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.cssClass = f);
    }
    function pe(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.suffix = f);
    }
    function ge(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.prefix = f);
    }
    function he(f) {
      const C = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      C && (C.label = f);
    }
    function ne() {
      const f = r();
      return E(t.field.events.onValidated), f;
    }
    function oe() {
      return n();
    }
    function re() {
      return l();
    }
    function ye(f, C, X) {
      r = f, n = C, l = X;
    }
    const K = {
      reset: s,
      clear: b,
      validate: ne,
      isValid: oe,
      hide: m,
      unhide: y,
      resetValidation: re,
      getValueDeserialized: v,
      getValueSerialized: F,
      setupBackendErrors: R,
      setReadonlyState: w,
      setHint: ee,
      setCssClass: te,
      setSuffix: pe,
      setPrefix: ge,
      setLabel: he,
      setValue: A,
      field: t.field
    };
    return e(K), j(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        E(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid ? oe() : null,
      (f) => {
        f && E(t.field.events.onIsValid);
      }
    ), U(() => {
      var C;
      s();
      const f = (C = Oe()) == null ? void 0 : C.exposed;
      f && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        f
      );
    }), (f, C) => Se((h(), q("div", null, [
      t.field.beforeComponent ? (h(), D(G(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: K
      }, null, 8, ["formApi"])) : P("", !0),
      (h(), D(G(t.field.mainComponent), {
        modelValue: u.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(i),
        reset: s,
        clear: b,
        getValueDeserialized: v,
        getValueSerialized: F,
        validate: ne,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: ye
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), D(G(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: K
      }, null, 8, ["formApi"])) : P("", !0),
      d.value.length > 0 ? (h(), q("div", cn, [
        (h(!0), q(le, null, se(d.value, (X, be) => (h(), q("div", {
          index: be,
          class: "flex column"
        }, W(X), 9, dn))), 256))
      ])) : P("", !0)
    ], 512)), [
      [_e, t.field.hidden !== !0]
    ]);
  }
}), mn = { class: "flex column" }, pn = /* @__PURE__ */ O({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o, r = /* @__PURE__ */ new Map(), n = {
      reset: i,
      clear: u,
      validate: p,
      isValid: _,
      hide: d,
      unhide: s,
      resetValidation: b,
      getFields: V,
      setReadonlyState: A,
      setCssClass: F,
      setIcon: v,
      setLabel: R,
      section: t.section
    };
    function l() {
      t.section.fields.forEach((m) => {
        const y = m.metadata.field_name, w = t.formApi.getFieldByName(y);
        w && r.set(y, w);
      });
    }
    function i() {
      r.forEach((m) => {
        m.reset();
      }), E(t.section.events.onReset);
    }
    function u() {
      r.forEach((m) => {
        m.clear();
      }), E(t.section.events.onClear);
    }
    function d() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((y) => {
        y.hide();
      }), m.hidden = !0, E(t.section.events.onHide));
    }
    function s() {
      const m = t.privateFormApi.getSectionRef(
        t.section.name
      );
      m && (r.forEach((y) => {
        y.unhide();
      }), m.hidden = !1, E(t.section.events.onUnhide));
    }
    function p() {
      let m = !0;
      return r.forEach((y) => {
        if (!y.validate()) {
          m = !1;
          return;
        }
      }), E(t.section.events.onValidated), m;
    }
    function _() {
      let m = !0;
      return r.forEach((y) => {
        if (!y.isValid()) {
          m = !1;
          return;
        }
      }), m;
    }
    function b() {
      r.forEach((m) => {
        m.resetValidation();
      });
    }
    function V() {
      return r;
    }
    function A(m) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.readonly = m);
    }
    function F(m) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.cssClass = m);
    }
    function v(m) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.icon = m);
    }
    function R(m) {
      const y = t.privateFormApi.getSectionRef(
        t.section.name
      );
      y && (y.label = m);
    }
    return e(n), j(
      () => t.section.events.onIsValid ? _() : null,
      (m) => {
        m && E(t.section.events.onIsValid);
      }
    ), U(() => {
      var y;
      const m = (y = Oe()) == null ? void 0 : y.exposed;
      m && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        m
      ), Z(() => {
        l();
      });
    }), (m, y) => Se((h(), q("div", mn, [
      t.section.beforeComponent ? (h(), D(G(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: n
      }, null, 8, ["formApi"])) : P("", !0),
      (h(), D(G(t.section.mainComponent), {
        sectionApi: n,
        formApi: t.formApi
      }, {
        default: N(() => [
          Ne(m.$slots, "default")
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
}), gn = { class: "flex column" }, vn = /* @__PURE__ */ O({
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
    const u = Xe(), d = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), p = k(J.getEmptyFormBeforeInit()), _ = k(!1), b = k(!1), V = k(!1), A = k(!1), F = k("create"), v = k({});
    async function R() {
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
        M,
        t.eventManager
      ), l = p.value.sections.length, i = p.value.sections.map((c) => c.fields).flat().length, t.resourceId && (F.value = "edit");
    }
    async function m() {
      var B, I, ae;
      if (!ee())
        return;
      A.value = !0, ne();
      const c = w(), g = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: t.context
      });
      if (g.success)
        v.value = {}, F.value === "create" && (F.value = "edit"), r && g.resource_data && (r.resource_data = g.resource_data), n = JSON.stringify(w()), E((I = p.value) == null ? void 0 : I.events.onSubmitUnsuccess);
      else {
        v.value = {};
        const ie = [];
        [...d].forEach((L) => {
          const De = g.errors[L[0]];
          De && (L[1].setupBackendErrors(De), ie.push(L[0]));
        }), Object.entries(g.errors).forEach((L) => {
          ie.includes(L[0]) || (v.value[L[0]] = L[1]);
        }), E((B = p.value) == null ? void 0 : B.events.onSubmitSuccess);
      }
      E((ae = p.value) == null ? void 0 : ae.events.onSubmit), A.value = !1;
    }
    function y() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const g in u) {
        const B = u[g];
        if (B) {
          const I = O({
            inheritAttrs: !1,
            setup(ae, { attrs: ie, slots: L }) {
              return () => B({
                ...ae,
                ...ie,
                slots: L
              });
            }
          });
          switch (g) {
            case "sections":
              c.sectionComponent = I;
              break;
            case "actions":
              c.actionComponent = I;
              break;
            case "orphan-errors":
              c.orphanErrorsComponent = I;
              break;
            case "association-display":
              c.associationDisplayComponent = I;
              break;
            default:
              c.dynamicComponentRecord[g] = I;
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
    function ee() {
      var g;
      let c = !0;
      return d.forEach((B) => {
        if (!B.validate()) {
          c = !1;
          return;
        }
      }), E((g = p.value) == null ? void 0 : g.events.onValidated), c;
    }
    function te() {
      let c = !0;
      return d.forEach((g) => {
        if (!g.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function pe() {
      var c;
      d.forEach((g) => {
        g.reset();
      }), E((c = p.value) == null ? void 0 : c.events.onReset);
    }
    function ge() {
      var c;
      d.forEach((g) => {
        g.clear();
      }), E((c = p.value) == null ? void 0 : c.events.onClear);
    }
    function he() {
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
      return s.get(c);
    }
    function ye(c) {
      return [...s.values()].at(c);
    }
    function K() {
      return s;
    }
    function f(c) {
      return d.get(c);
    }
    function C() {
      return d;
    }
    function X() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function be() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((g) => {
        (t[g] === null || t[g] === void 0) && console.warn(`Missing props for <Submit64> -> ${g}`);
      });
    }
    function we() {
      return a(F);
    }
    function $e() {
      return n !== JSON.stringify(w());
    }
    function ze(c) {
      p.value && (p.value.context = c);
    }
    function Ie(c) {
      p.value && (p.value.cssClass = c);
    }
    function Ue(c) {
      p.value && (p.value.readonly = c);
    }
    function Pe() {
      return V.value;
    }
    function Ge() {
      return p;
    }
    function Le(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.find((B) => B.name === c);
    }
    function He(c) {
      var g;
      return (g = p.value) == null ? void 0 : g.sections.map((B) => B.fields).flat().find((B) => B.metadata.field_name === c);
    }
    function ke(c, g) {
      s.set(c, g), l === s.size && (_.value = !0);
    }
    function Ve(c, g) {
      d.set(c, g), i === d.size && (b.value = !0);
    }
    const xe = {
      getFormRef: Ge,
      getSectionRef: Le,
      getFieldRef: He,
      registerSectionWrapperRef: ke,
      registerFieldWrapperRef: Ve
    }, Ye = new Proxy({}, {
      get(c, g) {
        var B;
        return (B = p.value) == null ? void 0 : B[g];
      }
    }), M = {
      getMode: we,
      getSectionByName: re,
      getSectionByIndex: ye,
      getSections: K,
      getFieldByName: f,
      getFields: C,
      validate: ee,
      isFormValid: te,
      reset: pe,
      clear: ge,
      resetValidation: he,
      submit: m,
      valuesHasChanged: $e,
      getInitialValueByFieldName: oe,
      getAssociationDataCallback: X,
      setContext: ze,
      setCssClass: Ie,
      setReadonlyState: Ue,
      isReady: Pe,
      form: Ye
    };
    return e(M), j(
      () => _.value && b.value,
      (c) => {
        var g;
        c && !V.value && (E((g = p.value) == null ? void 0 : g.events.onReady), V.value = !0);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onIsValid ? te() : null;
      },
      () => {
        var c;
        E((c = p.value) == null ? void 0 : c.events.onIsValid);
      }
    ), j(
      () => {
        var c;
        return (c = p.value) != null && c.events.onUpdate ? w() : null;
      },
      () => {
        var c;
        E((c = p.value) == null ? void 0 : c.events.onUpdate);
      }
    ), U(async () => {
      be(), await R(), Z(() => {
        n = JSON.stringify(w());
      });
    }), (c, g) => Se((h(), q("div", gn, [
      Y("div", {
        class: H(p.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), q(le, null, se(p.value.sections, (B) => (h(), D(pn, {
          key: B.name,
          section: B,
          context: t.context,
          formApi: M,
          privateFormApi: xe,
          registerRef: ke
        }, {
          default: N(() => [
            (h(!0), q(le, null, se(B.fields, (I) => (h(), D(fn, {
              key: I.metadata.field_name,
              field: I,
              context: t.context,
              formApi: M,
              privateFormApi: xe,
              registerRef: Ve
            }, null, 8, ["field", "context"]))), 128))
          ]),
          _: 2
        }, 1032, ["section", "context"]))), 128))
      ], 2),
      (h(), D(G(p.value.orphanErrorsComponent), {
        orphanErrors: v.value,
        formApi: M
      }, null, 8, ["orphanErrors"])),
      (h(), D(G(p.value.actionComponent), {
        isLoadingSubmit: A.value,
        formApi: M
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [_e, V.value]
    ]);
  }
});
export {
  ce as DynamicLogicBuilder,
  $ as Submit64,
  vn as Submit64Form
};
