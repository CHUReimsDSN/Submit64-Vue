var bt = Object.defineProperty;
var _t = (r, e, t) => e in r ? bt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var O = (r, e, t) => _t(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as P, createElementBlock as I, openBlock as g, createElementVNode as Q, createVNode as _, createBlock as R, createCommentVNode as H, unref as a, mergeProps as Ee, normalizeClass as K, toDisplayString as L, resolveDynamicComponent as ae, resolveComponent as le, normalizeProps as Ct, guardReactiveProps as St, withCtx as v, createTextVNode as Z, Fragment as pe, renderList as ge, ref as T, onMounted as Y, nextTick as _e, watch as j, computed as ie, markRaw as X, useSlots as Qe, getCurrentInstance as je, withDirectives as we, vShow as ze } from "vue";
import { QBtn as re, QIcon as xe, QItem as Fe, QItemSection as ce, QItemLabel as fe, QInput as De, QPopupProxy as Be, QDate as Ye, QTime as Ft, QCheckbox as kt, QSelect as $e, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as We, QList as Le, QSeparator as At, QUploaderAddTrigger as Rt, date as U } from "quasar";
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
    return (o, n) => (g(), I("div", Bt, [
      Q("div", Nt, [
        _(a(re), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (g(), R(a(re), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (g(), R(a(re), Ee({ key: 1 }, t(), {
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
    return (t, o) => (g(), I("div", {
      class: K(e.sectionApi.section.cssClass)
    }, [
      Q("div", Et, [
        e.sectionApi.section.icon ? (g(), R(a(xe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        Q("div", Tt, L(e.sectionApi.section.label), 1)
      ]),
      Q("div", Ot, [
        (g(), R(ae(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), zt = /* @__PURE__ */ P({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = le("q-icon");
      return g(), R(n, {
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
    return (t, o) => (g(), R(a(Fe), Ct(St(e.itemProps)), {
      default: v(() => [
        _(a(ce), null, {
          default: v(() => [
            _(a(fe), null, {
              default: v(() => [
                Z(L(e.entry.label), 1)
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
    return (t, o) => (g(), I("div", It, [
      (g(!0), I(pe, null, ge(e.orphanErrors, (n, u) => (g(), I("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, L(u) + " : " + L(n.join(",")), 1))), 128))
    ]));
  }
}), qe = class qe {
  constructor() {
    O(this, "_formSettings");
    O(this, "_formStyle");
    O(this, "_actionComponent");
    O(this, "_orphanErrorsComponent");
    O(this, "_sectionComponent");
    O(this, "_wrapperResetComponent");
    O(this, "_associationDisplayComponent");
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
O(qe, "_instance", new qe());
let J = qe;
class Ne {
  constructor(e) {
    O(this, "formApi");
    O(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const o = e, n = t, u = new Lt(o, n, this.formApi);
    return this.events.push(u), new Pt(u);
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
    O(this, "type");
    O(this, "data");
    O(this, "formApi");
    O(this, "action", () => {
    });
    O(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    O(this, "formEvent");
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = T(), c = T();
    function s() {
      l.value && l.value.hide();
    }
    function i() {
      return c.value ? c.value.validate() : !1;
    }
    function x() {
      return c.value ? !c.value.hasError : !1;
    }
    function C() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(i, x, C), u || _e(() => {
        var q;
        (q = c.value) == null || q.resetValidation();
      });
    }), (q, d) => (g(), R(a(De), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[1] || (d[1] = (B) => e.modelValueOnUpdate(B)),
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
      class: K(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        _(a(xe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            _(a(Be), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                _(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": d[0] || (d[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: v(() => [
                    Q("div", Ht, [
                      _(a(re), {
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = T(), c = T(), s = T();
    function i() {
      l.value && l.value.hide();
    }
    function x() {
      c.value && c.value.hide();
    }
    function C() {
      return s.value ? s.value.validate() : !1;
    }
    function q() {
      return s.value ? !s.value.hasError : !1;
    }
    function d() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(C, q, d), u || _e(() => {
        var B;
        (B = s.value) == null || B.resetValidation();
      });
    }), (B, N) => (g(), R(a(De), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[2] || (N[2] = (k) => e.modelValueOnUpdate(k)),
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
      class: K(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        _(a(xe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            _(a(Be), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                _(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[0] || (N[0] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: v(() => [
                    Q("div", Mt, [
                      _(a(re), {
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
        _(a(xe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            _(a(Be), {
              ref_key: "timePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                _(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[1] || (N[1] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: v(() => [
                    Q("div", Qt, [
                      _(a(re), {
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
    const e = r, t = T(!0), n = e.formApi.form.formStyle;
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
    }), (s, i) => (g(), I("div", Yt, [
      _(a(kt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": i[0] || (i[0] = (x) => e.modelValueOnUpdate(x)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: K([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (g(), I("div", Wt, L(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (g(), I("div", Jt, L(t.value), 1)) : H("", !0)
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
    const e = r, t = T([]), o = T([]), n = T(), u = e.formApi.form, l = u.formSettings, c = u.formStyle, s = l.rulesBehaviour === "lazy";
    function i(N, k) {
      if (N === "") {
        k(() => {
          o.value = [...t.value];
        });
        return;
      }
      k(() => {
        const z = N.toLowerCase();
        o.value = t.value.filter(($) => $.label.toLowerCase().includes(z));
      });
    }
    function x() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), o.value = e.field.staticSelectOptions ?? [];
    }
    function C() {
      return n.value ? n.value.validate() : !1;
    }
    function q() {
      return n.value ? !n.value.hasError : !1;
    }
    function d() {
      n.value && n.value.resetValidation();
    }
    function B() {
      o.value = [];
    }
    return Y(() => {
      x(), e.registerBehaviourCallbacks(C, q, d, void 0, B);
    }), (N, k) => (g(), R(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = (z) => e.modelValueOnUpdate(z)),
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
      class: K(e.field.cssClass),
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
      "no-option": v(() => [
        _(a(Fe), {
          dense: a(c).fieldDense
        }, {
          default: v(() => [
            _(a(ce), null, {
              default: v(() => [
                _(a(fe), null, {
                  default: v(() => [
                    Z(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Pe = "__init", He = /* @__PURE__ */ P({
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = T([]), s = T(
      C()
    ), i = T(), x = T(Pe);
    function C() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function q(S, p) {
      if (S === x.value) {
        p(() => {
        });
        return;
      }
      const m = e.formApi.getAssociationDataCallback();
      s.value = C(), x.value = S;
      const D = e.formApi.form;
      s.value.isLoading = !0, m({
        resourceName: D.resourceName,
        resourceId: D.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: S,
        context: D.context
      }).then((F) => {
        p(() => {
          c.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = C();
      });
    }
    function d() {
      var p, m;
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (c.value = [
        {
          label: ((p = e.field.associationData[0]) == null ? void 0 : p.label) ?? "???",
          value: S,
          data: (m = e.field.associationData[0]) == null ? void 0 : m.data
        }
      ]);
    }
    function B() {
      return i.value ? i.value.validate() : !1;
    }
    function N() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = C(), c.value = [], x.value = Pe;
    }
    function $(S) {
      const p = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && S.to === p && p !== -1) {
        const m = e.formApi.form, D = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, D({
          resourceName: m.resourceName,
          resourceId: m.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: m.context
        }).then((F) => {
          c.value = c.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        B,
        N,
        k,
        d,
        z
      ), _e(() => {
        d();
      });
    }), (S, p) => (g(), R(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (m) => e.modelValueOnUpdate(m)),
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
      class: K(e.field.cssClass),
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
      onFilter: q,
      onVirtualScroll: $
    }, {
      "no-option": v(() => [
        _(a(Fe), {
          dense: a(u).fieldDense
        }, {
          default: v(() => [
            _(a(ce), null, {
              default: v(() => [
                _(a(fe), null, {
                  default: v(() => [
                    Z(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: v((m) => [
        (g(), R(ae(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ge = "__init", Me = /* @__PURE__ */ P({
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
    const e = r, t = e.field.componentOptions.associationDisplayComponent, o = e.formApi.form, n = o.formSettings, u = o.formStyle, l = n.rulesBehaviour === "lazy", c = T([]), s = T(
      C()
    ), i = T(), x = T(Ge);
    function C() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function q(S, p) {
      if (S === x.value) {
        p(() => {
        });
        return;
      }
      const m = e.formApi.getAssociationDataCallback();
      s.value = C(), x.value = S;
      const D = e.formApi.form;
      s.value.isLoading = !0, m({
        resourceName: D.resourceName,
        resourceId: D.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: S,
        context: D.context
      }).then((F) => {
        p(() => {
          c.value = F.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        c.value = [], s.value = C();
      });
    }
    function d() {
      const S = e.getValueSerialized();
      !S || !e.field.associationData || (c.value = S.map((p, m) => ({
        label: e.field.associationData[m].label ?? "???",
        value: p,
        data: e.field.associationData[m].data
      })));
    }
    function B() {
      return i.value ? i.value.validate() : !1;
    }
    function N() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function z() {
      s.value = C(), c.value = [], x.value = Ge;
    }
    function $(S) {
      const p = c.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && S.to === p && p !== -1) {
        const m = e.formApi.form, D = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, D({
          resourceName: m.resourceName,
          resourceId: m.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: x.value,
          context: m.context
        }).then((F) => {
          c.value = c.value.concat(
            F.rows
          ), s.value.lastPage = Math.ceil(
            F.row_count / s.value.limit
          ), F.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, S.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        B,
        N,
        k,
        d,
        z
      ), _e(() => {
        d();
      });
    }), (S, p) => (g(), R(a($e), {
      ref_key: "fieldRef",
      ref: i,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p[0] || (p[0] = (m) => e.modelValueOnUpdate(m)),
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
      class: K(e.field.cssClass),
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
      onFilter: q,
      onVirtualScroll: $
    }, {
      "no-option": v(() => [
        _(a(Fe), {
          dense: a(u).fieldDense
        }, {
          default: v(() => [
            _(a(ce), null, {
              default: v(() => [
                _(a(fe), null, {
                  default: v(() => [
                    Z(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: v((m) => [
        (g(), R(ae(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = T();
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
    }), (x, C) => (g(), R(a(De), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (q) => e.modelValueOnUpdate(q)),
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
      class: K(e.field.cssClass),
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = T();
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
    }), (x, C) => (g(), R(a(De), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[0] || (C[0] = (q) => e.modelValueOnUpdate(q)),
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
      class: K(e.field.cssClass),
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
    const e = r, t = e.formApi.form, o = t.formSettings, n = t.formStyle, u = o.rulesBehaviour === "lazy", l = T();
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
    }), (x, C) => (g(), R(a(De), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": C[1] || (C[1] = (q) => e.modelValueOnUpdate(q)),
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
      class: K(e.field.cssClass),
      "lazy-rules": u,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      autogrow: !0,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: v(() => [
        _(a(xe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: v(() => [
            _(a(Be), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: v(() => [
                _(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": C[0] || (C[0] = (q) => e.modelValueOnUpdate(q))
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
    }, c = T();
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
    }), (C, q) => e.modelValue ? (g(), R(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": q[0] || (q[0] = (d) => e.modelValueOnUpdate(d)),
      toolbar: u,
      fonts: l,
      placeholder: e.field.label,
      square: a(n).fieldSquare,
      dense: a(n).fieldDense,
      class: K(e.field.cssClass),
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
function w(r) {
  r == null || r.forEach((e) => {
    e();
  });
}
function he(r) {
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
    const e = r, o = e.formApi.form.formStyle, n = T(null);
    function u() {
      let p = e.modelValue;
      p.add = [], p.delete = [], e.modelValueOnUpdate(p), k();
    }
    function l() {
      var m;
      let p = e.modelValue;
      p.add = [], p.delete = ((m = e.field.attachmentData) == null ? void 0 : m.map((D) => D.id)) ?? [], e.modelValueOnUpdate(p), k();
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
    async function x(p) {
      return new Promise((m) => {
        const D = new Blob([p]), F = new FileReader();
        F.onload = (G) => {
          var oe;
          const ee = ((oe = G.target) == null ? void 0 : oe.result) ?? "", [te, ve] = ee.split(",");
          m(ve);
        }, F.readAsDataURL(D);
      });
    }
    async function C(p) {
      return {
        key: `${p.lastModified}${p.name}`,
        size: p.size,
        filename: p.name,
        contentType: p.type,
        base64: await x(await p.arrayBuffer())
      };
    }
    async function q(p) {
      if (!p[0])
        return;
      const m = await C(p[0]);
      let D = e.modelValue;
      D.add.push(m), e.modelValueOnUpdate(D), k();
    }
    async function d(p) {
      if (!p[0])
        return;
      const m = await C(p[0]);
      let D = e.modelValue;
      D.add = D.add.filter((F) => F.key !== m.key), e.modelValueOnUpdate(D), k();
    }
    function B(p) {
      let m = e.modelValue;
      m.delete.push(p.id), e.modelValueOnUpdate(m), k();
    }
    function N(p) {
      let m = e.modelValue;
      m.delete = m.delete.filter((D) => D !== p.id), e.modelValueOnUpdate(m), k();
    }
    function k() {
      n.value = null;
      for (const p of e.rules) {
        const m = p(e.modelValue);
        if (typeof m == "string") {
          n.value = m;
          break;
        }
      }
    }
    const z = ie(() => (e.field.attachmentData ?? []).length === 0), $ = ie(() => e.modelValue ? e.modelValue.delete : []), S = ie(() => {
      var p, m;
      return e.modelValue ? (((p = e.field.attachmentData) == null ? void 0 : p.length) ?? 0) === 0 || (((m = e.field.attachmentData) == null ? void 0 : m.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (p, m) => (g(), I("div", an, [
      _(a(We), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: K(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: q,
        onRemoved: d,
        style: { width: "inherit" }
      }, {
        header: v((D) => [
          Q("div", on, [
            Q("div", rn, [
              Q("div", ln, L(e.field.label), 1),
              e.field.hint ? (g(), I("div", sn, L(e.field.hint), 1)) : H("", !0)
            ]),
            D.canAddFiles && S.value ? (g(), R(a(re), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: D.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: v(() => [
                _(a(Rt))
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: v((D) => [
          z.value ? H("", !0) : (g(), I("div", un, [
            m[0] || (m[0] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier en ligne", -1)),
            _(a(Le), { separator: "" }, {
              default: v(() => [
                (g(!0), I(pe, null, ge(e.field.attachmentData ?? [], (F) => (g(), R(a(Fe), {
                  key: F.id
                }, {
                  default: v(() => [
                    _(a(ce), null, {
                      default: v(() => [
                        _(a(fe), { class: "full-width ellipsis" }, {
                          default: v(() => [
                            Z(L(F.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(a(fe), { caption: "" }, {
                          default: v(() => [
                            Z(L(a(he)(F.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (g(), R(a(ce), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: v(() => [
                        $.value.includes(F.id) ? H("", !0) : (g(), R(a(re), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => B(F)
                        }, null, 8, ["disable", "onClick"])),
                        $.value.includes(F.id) && e.modelValue.add.length === 0 ? (g(), R(a(re), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: (G) => N(F)
                        }, null, 8, ["disable", "onClick"])) : H("", !0)
                      ]),
                      _: 2
                    }, 1024)) : H("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !z.value && D.files.length > 0 ? (g(), R(a(At), { key: 1 })) : H("", !0),
          D.files.length > 0 ? (g(), I("div", dn, [
            m[1] || (m[1] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier à télécharger", -1)),
            _(a(Le), { separator: "" }, {
              default: v(() => [
                (g(!0), I(pe, null, ge(D.files, (F) => (g(), R(a(Fe), {
                  key: F.__key
                }, {
                  default: v(() => [
                    _(a(ce), null, {
                      default: v(() => [
                        _(a(fe), { class: "full-width ellipsis" }, {
                          default: v(() => [
                            Z(L(F.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(a(fe), { caption: "" }, {
                          default: v(() => [
                            Z(L(F.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    _(a(ce), {
                      top: "",
                      side: ""
                    }, {
                      default: v(() => [
                        _(a(re), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => D.removeFile(F)
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
      n.value !== null ? (g(), I("div", cn, L(n.value), 1)) : H("", !0)
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
    const e = r, o = e.formApi.form.formStyle, n = T();
    function u() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d);
    }
    function l() {
      var B;
      let d = e.modelValue;
      d.add = [], d.delete = ((B = e.field.attachmentData) == null ? void 0 : B.map((N) => N.id)) ?? [], e.modelValueOnUpdate(d);
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
      const B = d;
      if (!B)
        return;
      let N = e.modelValue;
      B.forEach((k) => {
        N.add.push(k);
      }), e.modelValueOnUpdate(N);
    }
    function C(d) {
      const B = d;
      let N = e.modelValue;
      N.add = N.add.filter((k) => !B.map((z) => z.key).includes(k.key)), e.modelValueOnUpdate(N);
    }
    function q(d) {
      let B = e.modelValue;
      B.delete.push(d.id), e.modelValueOnUpdate(B);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (d, B) => {
      const N = le("q-spinner"), k = le("q-uploader-add-trigger"), z = le("q-btn"), $ = le("q-item-label"), S = le("q-item-section"), p = le("q-item"), m = le("q-separator"), D = le("q-list");
      return g(), R(a(We), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(o).fieldBorderless !== !0,
        square: a(o).fieldSquare,
        color: a(o).fieldColor,
        class: K(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: x,
        onRemoved: C
      }, {
        header: v((F) => [
          Q("div", mn, [
            F.isUploading ? (g(), R(N, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            Q("div", pn, [
              Q("div", gn, L(e.field.label), 1),
              Q("div", hn, "Total : " + L(F.uploadSizeLabel), 1)
            ]),
            F.canAddFiles ? (g(), R(z, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: F.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: v(() => [
                _(k)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: v((F) => [
          _(D, { separator: "" }, {
            default: v(() => [
              (g(!0), I(pe, null, ge(e.field.attachmentData ?? [], (G) => (g(), R(p, {
                key: G.id
              }, {
                default: v(() => [
                  _(S, null, {
                    default: v(() => [
                      _($, { class: "full-width ellipsis" }, {
                        default: v(() => [
                          Z(L(G.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _($, { caption: "" }, {
                        default: v(() => [
                          Z(L(a(he)(G.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(S, {
                    top: "",
                    side: ""
                  }, {
                    default: v(() => [
                      _(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ee) => q(G)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              _(m),
              (g(!0), I(pe, null, ge(F.files, (G) => (g(), R(p, {
                key: G.__key
              }, {
                default: v(() => [
                  _(S, null, {
                    default: v(() => [
                      _($, { class: "full-width ellipsis" }, {
                        default: v(() => [
                          Z(L(G.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _($, { caption: "" }, {
                        default: v(() => [
                          Z(L(G.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _(S, {
                    top: "",
                    side: ""
                  }, {
                    default: v(() => [
                      _(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ee) => F.removeFile(G)
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
class me {
  constructor(e, t, o, n, u, l, c, s, i) {
    O(this, "resourceName");
    O(this, "resourceId");
    O(this, "formMetadataAndData");
    O(this, "context");
    O(this, "formSettings");
    O(this, "formStyle");
    O(this, "actionComponent");
    O(this, "orphanErrorsComponent");
    O(this, "sectionComponent");
    O(this, "wrapperResetComponent");
    O(this, "associationDisplayComponent");
    O(this, "dynamicComponentRecord");
    O(this, "formApi");
    O(this, "registerEventCallback");
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
    return new me(
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
    const e = Ne.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), o = Ne.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (l, c) => {
        const s = [];
        l.fields.forEach((d) => {
          const B = this.dynamicComponentRecord[`field-${d.field_name}-before`], N = me.getFieldComponentByFormFieldType(d), k = this.dynamicComponentRecord[`field-${d.field_name}-after`], z = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: me.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let $ = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((p) => p.type === "required") && ($ = $.concat("*"));
          const S = {
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
            beforeComponent: B ? X(B) : void 0,
            mainComponent: X(N),
            afterComponent: k ? X(k) : void 0,
            events: o.fields[d.field_name] ?? {},
            componentOptions: z
          };
          s.push(S), t.add(d.field_name);
        });
        const i = this.dynamicComponentRecord[`section-${l.name ?? c}-before`], x = this.sectionComponent, C = this.dynamicComponentRecord[`section-${l.name ?? c}-after`], q = {
          label: l.label ?? void 0,
          icon: l.icon ?? void 0,
          cssClass: l.css_class ?? void 0,
          hidden: !1,
          name: l.name ?? c.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? l.readonly ?? void 0,
          events: o.sections[l.name ?? c.toString()] ?? {},
          beforeComponent: i ? X(i) : void 0,
          mainComponent: X(x),
          fieldsComponent: void 0,
          afterComponent: C ? X(C) : void 0,
          fields: s
        };
        n.push(q);
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
        return He;
      case "selectHasMany":
        return Me;
      case "selectHasAndBelongsToMany":
        return Me;
      case "selectHasOne":
        return He;
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
const yn = { class: "flex column" }, bn = /* @__PURE__ */ P({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = null, n = null, u = null;
    const l = Qe(), c = {
      softReset: x,
      reset: C,
      clear: q,
      validate: N,
      isValid: k,
      isInvalid: z,
      hide: d,
      unhide: B,
      resetValidation: $,
      getFields: S,
      setReadonlyState: p,
      setCssClass: m,
      setIcon: D,
      setLabel: F,
      section: t.section
    }, s = T(/* @__PURE__ */ new Map());
    function i() {
      t.section.fields.forEach((h) => {
        const V = h.metadata.field_name, M = t.formApi.getFieldByName(V);
        M && s.value.set(V, M);
      });
    }
    function x() {
      s.value.forEach((h) => {
        h.softReset();
      });
    }
    function C() {
      s.value.forEach((h) => {
        h.reset();
      }), w(t.section.events.onReset);
    }
    function q() {
      s.value.forEach((h) => {
        h.clear();
      }), w(t.section.events.onClear);
    }
    function d() {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (s.value.forEach((V) => {
        V.hide();
      }), h.hidden = !0, w(t.section.events.onHide));
    }
    function B() {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (s.value.forEach((V) => {
        V.unhide();
      }), h.hidden = !1, w(t.section.events.onUnhide));
    }
    function N() {
      let h = !0;
      return s.value.forEach((V) => {
        if (!V.validate()) {
          h = !1;
          return;
        }
      }), w(t.section.events.onValidated), h;
    }
    function k() {
      let h = !0;
      return s.value.forEach((V) => {
        if (!V.isValid()) {
          h = !1;
          return;
        }
      }), h;
    }
    function z() {
      return !k();
    }
    function $() {
      s.value.forEach((h) => {
        h.resetValidation();
      });
    }
    function S() {
      return s.value;
    }
    function p(h) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = h);
    }
    function m(h) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = h);
    }
    function D(h) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = h);
    }
    function F(h) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = h);
    }
    function G() {
      const h = {};
      for (const [V, M] of s.value)
        h[V] = M.getValueSerialized();
      return h;
    }
    function ee() {
      const h = l.default;
      if (!h) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const V = P({
        inheritAttrs: !1,
        setup(M, { attrs: Ce, slots: ke }) {
          return () => h(
            {
              ...M,
              ...Ce
            },
            ke
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, V);
    }
    e(c);
    const te = ie(() => k()), ve = ie(() => z()), oe = ie(() => G());
    return j(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onIsValid;
      },
      (h) => {
        o == null || o(), o = null, h && (o = j(te, (V) => {
          V && w(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onIsInvalid;
      },
      (h) => {
        n == null || n(), n = null, h && (n = j(ve, (V) => {
          var M;
          V && w((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onUpdate;
      },
      (h) => {
        u == null || u(), u = null, h && (u = j(
          oe,
          () => {
            var V;
            w((V = t.section) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var V;
      ee();
      const h = (V = je()) == null ? void 0 : V.exposed;
      h && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        h
      ), _e(() => {
        var M;
        i(), w((M = t.section) == null ? void 0 : M.events.onReady);
      });
    }), (h, V) => we((g(), I("div", yn, [
      t.section.beforeComponent ? (g(), R(ae(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: c
      }, null, 8, ["formApi"])) : H("", !0),
      (g(), R(ae(t.section.mainComponent), {
        sectionApi: c,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (g(), R(ae(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: c
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [ze, t.section.hidden !== !0]
    ]);
  }
});
function _n(r, e, t) {
  const o = t.form, n = (s, i, x) => s[i] ? x ? () => u(s[i]) : () => s[i] : s.compare_to ? () => {
    var C;
    return ((C = t.getFieldByName(s.compare_to)) == null ? void 0 : C.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
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
        l.push(Cn());
        break;
      case "absence":
        l.push(Fn());
        break;
      case "acceptance":
        l.push(kn());
        break;
      case "inclusion":
        l.push(Je(i.including));
        break;
      case "exclusion":
        l.push(Sn(i.excluding));
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
        l.push(Dn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          An(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Rn(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          Bn(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Nn(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          qn(n(i, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          En(
            n(i, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(Tn());
        break;
      case "numberNumericOnly":
        l.push(On());
        break;
      case "numberEvenOnly":
        l.push(wn());
        break;
      case "numberOddOnly":
        l.push(zn());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          $n(
            n(i, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          In(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Un(
            n(i, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Ln(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Gn(
            n(i, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Hn(n(i, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Pn(
            () => i.min,
            () => i.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Mn(
            n(i, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(Oe(o.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          Qn(
            n(i, "less_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          jn(
            n(i, "less_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Yn(
            n(i, "greater_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Wn(
            n(i, "greater_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Jn(
            n(i, "equal_to", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Kn(
            n(i, "other_than", !0),
            o.formSettings.dateFormat
          )
        );
        break;
      case "allowFileContentType":
        l.push(
          Zn(
            n(i, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          ea(
            n(i, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          na(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          ta(
            n(i, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          aa(
            n(i, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          oa(
            n(i, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          ra(
            n(i, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          la(
            n(i, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          ia(
            n(i, "equal_to")
          )
        );
        break;
    }
  }), c.length > 0 ? c.map((s) => {
    switch (s) {
      case "allowBlank":
        return xn(l);
      case "allowNull":
        return Vn(l);
    }
  }) : l;
}
function Cn() {
  return (r) => !!r || "Ce champ est requis";
}
function Je(r) {
  return (e) => r.includes(String(e)) || `Doit être contenu dans ${r.toString()}`;
}
function Sn(r) {
  return (e) => !r.includes(
    String(e) || `Ne doit pas être contenu dans ${Je.toString()}`
  );
}
function Fn() {
  return (r) => !r || "Ce champ doit être vide";
}
function kn() {
  return (r) => !!r || "Doit être accepté";
}
function Vn(r) {
  return (e) => (e === null || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function xn(r) {
  return (e) => (e === "" || r.forEach((t) => {
    const o = t(e);
    if (o !== !0)
      return o;
  }), !0);
}
function Dn() {
  return (r) => Number(r) > 0 || "Val. positive uniquement";
}
function An(r) {
  return (e) => {
    const t = r();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Rn(r) {
  return (e) => {
    const t = r();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Bn(r) {
  return (e) => {
    const t = r();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Nn(r) {
  return (e) => {
    const t = r();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function qn(r, e) {
  return (t) => {
    const o = r();
    return Number(t) === o || `Égale à ${o}`;
  };
}
function En(r, e) {
  return (t) => {
    const o = r();
    return Number(t) !== o || `Doit être différent de ${r}`;
  };
}
function Tn() {
  return (r) => /^-?\d+$/.test(String(r).trim()) || "Nombre entier uniquement";
}
function On() {
  return (r) => /^-?\d+(\.\d+)?$/.test(String(r).trim()) || "Caractère numérique uniquement";
}
function wn() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 0 || "Nombre pair uniquement";
}
function zn() {
  return (r) => Number.isInteger(Number(r)) && Number(r) % 2 === 1 || "Nombre impair uniquement";
}
function $n(r) {
  return (e) => {
    const t = r();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function In(r) {
  return (e) => {
    const t = r();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Un(r) {
  return (e) => {
    const t = r();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ln(r) {
  return (e) => {
    const t = r();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Pn(r, e) {
  return (t) => {
    const o = r(), n = e();
    return String(t).length >= o && String(t).length <= n || `Entre ${o} et ${n}`;
  };
}
function Hn(r, e) {
  return (t) => {
    const o = r();
    return String(t) === o || `Égale à ${o}`;
  };
}
function Gn(r) {
  return (e) => {
    const t = r();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Mn(r) {
  return (e) => {
    const t = r();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Qn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n <= u || `Inf. ou égal à ${o}`;
  };
}
function jn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n < u || `Inf. à ${o}`;
  };
}
function Yn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n >= u || `Sup. ou égal à ${o}`;
  };
}
function Wn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n > u || `Sup. à ${o}`;
  };
}
function Jn(r, e) {
  return (t) => {
    const o = r(), n = U.extractDate(String(t), e), u = U.extractDate(o, e);
    return n === u || `Égale à ${n}`;
  };
}
function Kn(r, e) {
  return (t) => {
    const o = r();
    return U.extractDate(String(t), e) !== U.extractDate(o, e) || `Doit être différent de ${o}`;
  };
}
function Oe(r) {
  return (e) => e == null || e === "" ? !0 : Xn(e, r) || `Date invalide. Format : ${r}`;
}
function Xn(r, e) {
  if (typeof r != "string" || !r.trim())
    return !1;
  const t = U.extractDate(r, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : U.formatDate(t, e) === r;
}
function Zn(r) {
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
function ea(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && o !== u.size && (n = !1);
    }), n || `Taille par fichier ${he(o)}`;
  };
}
function ta(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && u.size < o && (n = !1);
    }), n || `Taille par fichier min. ${he(o)}`;
  };
}
function na(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && u.size > o && (n = !1);
    }), n || `Taille par fichier max. ${he(o)}`;
  };
}
function aa(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.length <= o || `${o} fichier${o > 1 ? "s" : ""} max.`;
  };
}
function oa(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.length >= o || `${o} fichier${o > 1 ? "s" : ""} min.`;
  };
}
function ra(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) <= o || `${he(o)} max.`;
  };
}
function la(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) >= o || `${he(o)} min.`;
  };
}
function ia(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) === o || `Taille totale ${he(o)}`;
  };
}
const sa = {
  computeServerRules: _n
}, ua = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, da = ["index"], ca = /* @__PURE__ */ P({
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
    const s = k(), i = T(), x = T([]);
    function C() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value);
    }
    function q() {
      i.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), i.value = d(i.value), w(t.field.events.onReset), l(), _e(() => {
        Ce();
      });
    }
    function d(y) {
      const E = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return y == null || y === "" ? !1 : y;
        case "date":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), E.formSettings.backendDateFormat),
            E.formSettings.dateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(
              String(y),
              E.formSettings.backendDatetimeFormat
            ),
            E.formSettings.datetimeFormat
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
    function B(y) {
      const E = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), E.formSettings.dateFormat),
            E.formSettings.backendDateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : U.formatDate(
            U.extractDate(String(y), E.formSettings.datetimeFormat),
            E.formSettings.backendDatetimeFormat
          );
      }
      return y;
    }
    function N() {
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
      c(), w(t.field.events.onClear);
    }
    function k() {
      return sa.computeServerRules(
        t.field.rules ?? [],
        t.field.type,
        t.formApi
      );
    }
    function z(y) {
      i.value = y;
    }
    function $() {
      return a(i);
    }
    function S() {
      return B(a(i));
    }
    function p(y) {
      x.value = y;
    }
    function m() {
      const y = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      y && (y.hidden = !0, w(t.field.events.onHide));
    }
    function D() {
      const y = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      y && (y.hidden = !1, w(t.field.events.onUnhide));
    }
    function F(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.readonly = y);
    }
    function G(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.hint = y);
    }
    function ee(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.cssClass = y);
    }
    function te(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.suffix = y);
    }
    function ve(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.prefix = y);
    }
    function oe(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.label = y);
    }
    function h() {
      const y = o();
      return w(t.field.events.onValidated), y;
    }
    function V() {
      return n();
    }
    function M() {
      return !V();
    }
    function Ce() {
      return u();
    }
    function ke(y, E, se, Se, Ae) {
      o = y, n = E, u = se, Se && (l = Se), Ae && (c = Ae);
    }
    const Ve = {
      softReset: C,
      reset: q,
      clear: N,
      validate: h,
      isValid: V,
      isInvalid: M,
      hide: m,
      unhide: D,
      resetValidation: Ce,
      getValueDeserialized: S,
      getValueSerialized: $,
      setupBackendErrors: p,
      setReadonlyState: F,
      setHint: G,
      setCssClass: ee,
      setSuffix: te,
      setPrefix: ve,
      setLabel: oe,
      setValue: z,
      field: t.field
    };
    return e(Ve), j(
      () => t.field.events.onUpdate ? i.value : null,
      () => {
        w(t.field.events.onUpdate);
      }
    ), j(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? i.value : null,
      (y) => {
        w(y ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var E, se;
      C();
      const y = (E = je()) == null ? void 0 : E.exposed;
      y && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        y
      ), w((se = t.field) == null ? void 0 : se.events.onReady);
    }), (y, E) => we((g(), I("div", null, [
      t.field.beforeComponent ? (g(), R(ae(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Ve
      }, null, 8, ["formApi"])) : H("", !0),
      (g(), R(ae(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: q,
        clear: N,
        getValueDeserialized: S,
        getValueSerialized: $,
        validate: h,
        modelValueOnUpdate: z,
        registerBehaviourCallbacks: ke
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (g(), R(ae(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Ve
      }, null, 8, ["formApi"])) : H("", !0),
      x.value.length > 0 ? (g(), I("div", ua, [
        (g(!0), I(pe, null, ge(x.value, (se, Se) => (g(), I("div", {
          index: Se,
          class: "flex column"
        }, L(se), 9, da))), 256))
      ])) : H("", !0)
    ], 512)), [
      [ze, t.field.hidden !== !0]
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
    let o = null, n = "", u = 0, l = 0, c = null, s = null, i = null, x = null, C = null;
    const q = Qe(), d = T(me.getEmptyFormBeforeInit()), B = T(!1), N = T(!1), k = T(!1), z = T(!1), $ = T("create"), S = T({}), p = T(/* @__PURE__ */ new Map()), m = T(/* @__PURE__ */ new Map());
    async function D() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = me.getForm(
        t.resourceName,
        t.resourceId,
        ee(),
        o,
        t.formSettings,
        t.formStyle,
        t.context,
        ue,
        t.eventManager
      ), u = d.value.sections.length, l = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && ($.value = "edit");
    }
    async function F() {
      var A, W, ye;
      if (!oe())
        return;
      w((A = d.value) == null ? void 0 : A.events.onSubmit), z.value = !0, y();
      const f = te(), b = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (x = b.resource_data, b.success)
        S.value = {}, $.value === "create" && ($.value = "edit"), o && b.resource_data && (o.resource_data = b.resource_data), d.value = me.getForm(
          t.resourceName,
          t.resourceId,
          ee(),
          {
            form: b.form,
            resource_data: b.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ue,
          t.eventManager
        ), M(), n = JSON.stringify(te()), w((ye = d.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        S.value = {};
        const be = [];
        for (const [ne, de] of m.value) {
          const Re = b.errors[ne];
          Re && (de.setupBackendErrors(Re), be.push(ne));
        }
        Object.entries(b.errors).forEach((ne) => {
          be.includes(ne[0]) || (S.value[ne[0]] = ne[1]);
        }), w((W = d.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    async function G(f) {
      var W, ye, be;
      if (!d.value.allowBulk || $.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!oe())
        return;
      w((W = d.value) == null ? void 0 : W.events.onSubmit), z.value = !0, y();
      const b = te(), A = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        bulkCount: f,
        context: t.context
      });
      if (C = A.bulk_data, A.success)
        S.value = {}, $.value === "create" && ($.value = "edit"), o && A.resource_data && (o.resource_data = A.resource_data), d.value = me.getForm(
          t.resourceName,
          t.resourceId,
          ee(),
          {
            form: A.form,
            resource_data: A.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ue,
          t.eventManager
        ), M(), n = JSON.stringify(te()), w((be = d.value) == null ? void 0 : be.events.onSubmitSuccess);
      else {
        S.value = {};
        const ne = [];
        for (const [de, Re] of m.value) {
          const Ue = A.errors[de];
          Ue && (Re.setupBackendErrors(Ue), ne.push(de));
        }
        Object.entries(A.errors).forEach((de) => {
          ne.includes(de[0]) || (S.value[de[0]] = de[1]);
        }), w((ye = d.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    function ee() {
      const f = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const b in q) {
        const A = q[b];
        if (A) {
          const W = P({
            inheritAttrs: !1,
            setup(ye, { attrs: be, slots: ne }) {
              return () => A(
                {
                  ...ye,
                  ...be
                },
                ne
              );
            }
          });
          switch (b) {
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
              f.dynamicComponentRecord[b] = W;
              break;
          }
        }
      }
      return f;
    }
    function te() {
      const f = {};
      for (const [b, A] of m.value)
        f[b] = A.getValueDeserialized();
      return f;
    }
    function ve() {
      const f = {};
      for (const [b, A] of m.value)
        f[b] = A.getValueSerialized();
      return f;
    }
    function oe() {
      var b;
      let f = !0;
      return m.value.forEach((A) => {
        if (!A.validate()) {
          f = !1;
          return;
        }
      }), w((b = d.value) == null ? void 0 : b.events.onValidated), f;
    }
    function h() {
      let f = !0;
      return m.value.forEach((b) => {
        if (!b.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function V() {
      return !h();
    }
    function M() {
      p.value.forEach((f) => {
        f.softReset();
      });
    }
    function Ce() {
      var f;
      m.value.forEach((b) => {
        b.reset();
      }), w((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function ke() {
      var f;
      m.value.forEach((b) => {
        b.clear();
      }), w((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function Ve() {
      m.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function y() {
      m.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function E(f) {
      if (o)
        return o.resource_data[f];
    }
    function se(f) {
      return p.value.get(f);
    }
    function Se(f) {
      return [...p.value.values()].at(f);
    }
    function Ae() {
      return p.value;
    }
    function Ke(f) {
      return m.value.get(f);
    }
    function Xe() {
      return m.value;
    }
    function Ze() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function et() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((b) => {
        (t[b] === null || t[b] === void 0) && console.warn(`Missing props for <Submit64> -> ${b}`);
      });
    }
    function tt() {
      return a($);
    }
    function nt() {
      return n !== JSON.stringify(te());
    }
    function at(f) {
      d.value && (d.value.context = f);
    }
    function ot(f) {
      d.value && (d.value.cssClass = f);
    }
    function rt(f) {
      d.value && (d.value.readonly = f);
    }
    function lt() {
      return k.value;
    }
    function it() {
      return x;
    }
    function st() {
      return C;
    }
    function ut() {
      return d;
    }
    function dt(f) {
      var b;
      return (b = d.value) == null ? void 0 : b.sections.find((A) => A.name === f);
    }
    function ct(f) {
      var b;
      return (b = d.value) == null ? void 0 : b.sections.map((A) => A.fields).flat().find((A) => A.metadata.field_name === f);
    }
    function ft(f, b) {
      p.value.set(f, b), u === p.value.size && (B.value = !0);
    }
    function mt(f, b) {
      m.value.set(f, b), l === m.value.size && (N.value = !0);
    }
    function pt(f, b) {
      f.fieldsComponent = b;
    }
    const Ie = {
      getFormRef: ut,
      getSectionRef: dt,
      getFieldRef: ct,
      registerSectionWrapperRef: ft,
      registerFieldWrapperRef: mt,
      setSectionFieldComponent: pt
    }, gt = new Proxy({}, {
      get(f, b) {
        var A;
        return (A = d.value) == null ? void 0 : A[b];
      }
    }), ue = {
      getMode: tt,
      getSectionByName: se,
      getSectionByIndex: Se,
      getSections: Ae,
      getFieldByName: Ke,
      getFields: Xe,
      validate: oe,
      isValid: h,
      isInvalid: V,
      softReset: M,
      reset: Ce,
      clear: ke,
      resetValidation: Ve,
      submit: F,
      submitBulk: G,
      valuesHasChanged: nt,
      getInitialValueByFieldName: E,
      getAssociationDataCallback: Ze,
      setContext: at,
      setCssClass: ot,
      setReadonlyState: rt,
      isReady: lt,
      getSubmitData: it,
      getBulkSubmitData: st,
      form: gt
    };
    e(ue);
    const ht = ie(() => h()), vt = ie(() => V()), yt = ie(() => ve());
    return j(
      () => B.value && N.value,
      (f) => {
        var b;
        f && !k.value && (w((b = d.value) == null ? void 0 : b.events.onReady), k.value = !0);
      }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        c == null || c(), c = null, f && (c = j(ht, (b) => {
          var A;
          b && w((A = d.value) == null ? void 0 : A.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var f;
        return (f = d.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = j(vt, (b) => {
          var A;
          b && w((A = d.value) == null ? void 0 : A.events.onIsInvalid);
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
          yt,
          () => {
            var b;
            w((b = d.value) == null ? void 0 : b.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      et(), await D(), _e(() => {
        n = JSON.stringify(te());
      });
    }), (f, b) => we((g(), I("div", fa, [
      Q("div", {
        class: K(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), I(pe, null, ge(d.value.sections, (A) => (g(), R(bn, {
          key: A.name,
          section: A,
          formApi: ue,
          privateFormApi: Ie
        }, {
          default: v(() => [
            (g(!0), I(pe, null, ge(A.fields, (W) => (g(), R(ca, {
              key: W.metadata.field_name,
              field: W,
              formApi: ue,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), R(ae(d.value.orphanErrorsComponent), {
        orphanErrors: S.value,
        formApi: ue
      }, null, 8, ["orphanErrors"])),
      (g(), R(ae(d.value.actionComponent), {
        isLoadingSubmit: z.value,
        formApi: ue
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, k.value]
    ]);
  }
});
export {
  Ne as DynamicLogicBuilder,
  J as Submit64,
  ha as Submit64Form
};
