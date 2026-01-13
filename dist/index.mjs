var bt = Object.defineProperty;
var _t = (r, e, t) => e in r ? bt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var O = (r, e, t) => _t(r, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, createElementBlock as I, openBlock as g, createElementVNode as M, createVNode as _, createBlock as B, createCommentVNode as P, unref as a, mergeProps as Ee, normalizeClass as K, toDisplayString as L, resolveDynamicComponent as ae, resolveComponent as re, normalizeProps as Ct, guardReactiveProps as St, withCtx as h, createTextVNode as Z, Fragment as me, renderList as pe, ref as T, onMounted as Y, nextTick as be, watch as j, computed as le, markRaw as X, useSlots as Qe, getCurrentInstance as je, withDirectives as we, vShow as ze } from "vue";
import { QBtn as oe, QIcon as ke, QItem as Ce, QItemSection as de, QItemLabel as ce, QInput as Ve, QPopupProxy as Re, QDate as Ye, QTime as Ft, QCheckbox as kt, QSelect as $e, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as We, QList as Le, QSeparator as At, QUploaderAddTrigger as Rt, date as U } from "quasar";
const Bt = { class: "flex column" }, Nt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, qt = /* @__PURE__ */ H({
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
      M("div", Nt, [
        _(a(oe), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (g(), B(a(oe), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.formApi.clear ? (g(), B(a(oe), Ee({ key: 1 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Effacer",
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), Et = { class: "flex row items-center" }, Tt = { class: "text-body1 text-weight-medium" }, Ot = { class: "flex column q-gutter-md" }, wt = /* @__PURE__ */ H({
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
      M("div", Et, [
        e.sectionApi.section.icon ? (g(), B(a(ke), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : P("", !0),
        M("div", Tt, L(e.sectionApi.section.label), 1)
      ]),
      M("div", Ot, [
        (g(), B(ae(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), zt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(r) {
    const e = r;
    return (t, o) => {
      const n = re("q-icon");
      return g(), B(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: o[0] || (o[0] = (u) => e.reset())
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
  setup(r) {
    const e = r;
    return (t, o) => (g(), B(a(Ce), Ct(St(e.itemProps)), {
      default: h(() => [
        _(a(de), null, {
          default: h(() => [
            _(a(ce), null, {
              default: h(() => [
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
}), It = { class: "flex column" }, Ut = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    orphanErrors: {},
    formApi: {}
  },
  setup(r) {
    const e = r;
    return (t, o) => (g(), I("div", It, [
      (g(!0), I(me, null, pe(e.orphanErrors, (n, u) => (g(), I("div", {
        key: u,
        class: "q-field--error q-field__bottom text-negative"
      }, L(u) + " : " + L(n.join(",")), 1))), 128))
    ]));
  }
}), Ne = class Ne {
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
O(Ne, "_instance", new Ne());
let J = Ne;
class Be {
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
      e.registerBehaviourCallbacks(i, x, C), u || be(() => {
        var q;
        (q = c.value) == null || q.resetValidation();
      });
    }), (q, d) => (g(), B(a(Ve), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": d[1] || (d[1] = (N) => e.modelValueOnUpdate(N)),
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
      append: h(() => [
        _(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            _(a(Re), {
              ref_key: "popupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                _(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": d[0] || (d[0] = (N) => e.modelValueOnUpdate(N)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: h(() => [
                    M("div", Ht, [
                      _(a(oe), {
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
}), Mt = { class: "row items-center justify-end" }, Qt = { class: "row items-center justify-end" }, jt = /* @__PURE__ */ H({
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
      e.registerBehaviourCallbacks(C, q, d), u || be(() => {
        var N;
        (N = s.value) == null || N.resetValidation();
      });
    }), (N, A) => (g(), B(a(Ve), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[2] || (A[2] = (k) => e.modelValueOnUpdate(k)),
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
      append: h(() => [
        _(a(ke), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            _(a(Re), {
              ref_key: "datePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                _(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[0] || (A[0] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: h(() => [
                    M("div", Mt, [
                      _(a(oe), {
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
        _(a(ke), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            _(a(Re), {
              ref_key: "timePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
                _(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": A[1] || (A[1] = (k) => e.modelValueOnUpdate(k)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: h(() => [
                    M("div", Qt, [
                      _(a(oe), {
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
      e.field.hint ? (g(), I("div", Wt, L(e.field.hint), 1)) : P("", !0),
      t.value !== !0 ? (g(), I("div", Jt, L(t.value), 1)) : P("", !0)
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
  setup(r) {
    const e = r, t = T([]), o = T([]), n = T(), u = e.formApi.form, l = u.formSettings, c = u.formStyle, s = l.rulesBehaviour === "lazy";
    function i(A, k) {
      if (A === "") {
        k(() => {
          o.value = [...t.value];
        });
        return;
      }
      k(() => {
        const $ = A.toLowerCase();
        o.value = t.value.filter((z) => z.label.toLowerCase().includes($));
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
    function N() {
      o.value = [];
    }
    return Y(() => {
      x(), e.registerBehaviourCallbacks(C, q, d, void 0, N);
    }), (A, k) => (g(), B(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": k[0] || (k[0] = ($) => e.modelValueOnUpdate($)),
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
      "no-option": h(() => [
        _(a(Ce), {
          dense: a(c).fieldDense
        }, {
          default: h(() => [
            _(a(de), null, {
              default: h(() => [
                _(a(ce), null, {
                  default: h(() => [
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
}), Pe = "__init", He = /* @__PURE__ */ H({
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
    function N() {
      return i.value ? i.value.validate() : !1;
    }
    function A() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function $() {
      s.value = C(), c.value = [], x.value = Pe;
    }
    function z(S) {
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
        N,
        A,
        k,
        d,
        $
      ), be(() => {
        d();
      });
    }), (S, p) => (g(), B(a($e), {
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
      onVirtualScroll: z
    }, {
      "no-option": h(() => [
        _(a(Ce), {
          dense: a(u).fieldDense
        }, {
          default: h(() => [
            _(a(de), null, {
              default: h(() => [
                _(a(ce), null, {
                  default: h(() => [
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
      option: h((m) => [
        (g(), B(ae(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 8, ["model-value", "label", "outlined", "filled", "standout", "borderless", "rounded", "square", "dense", "hideBottomSpace", "color", "bgColor", "class", "clearable", "prefix", "suffix", "readonly", "rules", "options", "onClear"]));
  }
}), Ge = "__init", Me = /* @__PURE__ */ H({
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
    function N() {
      return i.value ? i.value.validate() : !1;
    }
    function A() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function $() {
      s.value = C(), c.value = [], x.value = Ge;
    }
    function z(S) {
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
        N,
        A,
        k,
        d,
        $
      ), be(() => {
        d();
      });
    }), (S, p) => (g(), B(a($e), {
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
      onVirtualScroll: z
    }, {
      "no-option": h(() => [
        _(a(Ce), {
          dense: a(u).fieldDense
        }, {
          default: h(() => [
            _(a(de), null, {
              default: h(() => [
                _(a(ce), null, {
                  default: h(() => [
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
      option: h((m) => [
        (g(), B(ae(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: m.opt,
          itemProps: m.itemProps
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
    }), (x, C) => (g(), B(a(Ve), {
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
    }), (x, C) => (g(), B(a(Ve), {
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
    }), (x, C) => (g(), B(a(Ve), {
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
      append: h(() => [
        _(a(ke), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: h(() => [
            _(a(Re), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: h(() => [
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
    }), (C, q) => e.modelValue ? (g(), B(a(Dt), {
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
    }, null, 8, ["model-value", "placeholder", "square", "dense", "class", "readonly"])) : P("", !0);
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
function ge(r) {
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
          var v;
          const ee = ((v = G.target) == null ? void 0 : v.result) ?? "", [te, he] = ee.split(",");
          m(he);
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
    function N(p) {
      let m = e.modelValue;
      m.delete.push(p.id), e.modelValueOnUpdate(m), k();
    }
    function A(p) {
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
    const $ = le(() => (e.field.attachmentData ?? []).length === 0), z = le(() => e.modelValue ? e.modelValue.delete : []), S = le(() => {
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
        header: h((D) => [
          M("div", on, [
            M("div", rn, [
              M("div", ln, L(e.field.label), 1),
              e.field.hint ? (g(), I("div", sn, L(e.field.hint), 1)) : P("", !0)
            ]),
            D.canAddFiles && S.value ? (g(), B(a(oe), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: D.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                _(a(Rt))
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: h((D) => [
          $.value ? P("", !0) : (g(), I("div", un, [
            m[0] || (m[0] = M("div", { class: "text-weight-medium text-body2" }, "Fichier en ligne", -1)),
            _(a(Le), { separator: "" }, {
              default: h(() => [
                (g(!0), I(me, null, pe(e.field.attachmentData ?? [], (F) => (g(), B(a(Ce), {
                  key: F.id
                }, {
                  default: h(() => [
                    _(a(de), null, {
                      default: h(() => [
                        _(a(ce), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            Z(L(F.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(a(ce), { caption: "" }, {
                          default: h(() => [
                            Z(L(a(ge)(F.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (g(), B(a(de), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: h(() => [
                        z.value.includes(F.id) ? P("", !0) : (g(), B(a(oe), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => N(F)
                        }, null, 8, ["disable", "onClick"])),
                        z.value.includes(F.id) && e.modelValue.add.length === 0 ? (g(), B(a(oe), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: (G) => A(F)
                        }, null, 8, ["disable", "onClick"])) : P("", !0)
                      ]),
                      _: 2
                    }, 1024)) : P("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !$.value && D.files.length > 0 ? (g(), B(a(At), { key: 1 })) : P("", !0),
          D.files.length > 0 ? (g(), I("div", dn, [
            m[1] || (m[1] = M("div", { class: "text-weight-medium text-body2" }, "Fichier à télécharger", -1)),
            _(a(Le), { separator: "" }, {
              default: h(() => [
                (g(!0), I(me, null, pe(D.files, (F) => (g(), B(a(Ce), {
                  key: F.__key
                }, {
                  default: h(() => [
                    _(a(de), null, {
                      default: h(() => [
                        _(a(ce), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            Z(L(F.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        _(a(ce), { caption: "" }, {
                          default: h(() => [
                            Z(L(F.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    _(a(de), {
                      top: "",
                      side: ""
                    }, {
                      default: h(() => [
                        _(a(oe), {
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
          ])) : P("", !0)
        ]),
        _: 1
      }, 8, ["label", "bordered", "square", "color", "class", "readonly"]),
      n.value !== null ? (g(), I("div", cn, L(n.value), 1)) : P("", !0)
    ]));
  }
}), mn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, pn = { class: "col" }, gn = { class: "q-uploader__title" }, hn = { class: "q-uploader__subtitle" }, vn = /* @__PURE__ */ H({
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
      var N;
      let d = e.modelValue;
      d.add = [], d.delete = ((N = e.field.attachmentData) == null ? void 0 : N.map((A) => A.id)) ?? [], e.modelValueOnUpdate(d);
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
      const N = d;
      if (!N)
        return;
      let A = e.modelValue;
      N.forEach((k) => {
        A.add.push(k);
      }), e.modelValueOnUpdate(A);
    }
    function C(d) {
      const N = d;
      let A = e.modelValue;
      A.add = A.add.filter((k) => !N.map(($) => $.key).includes(k.key)), e.modelValueOnUpdate(A);
    }
    function q(d) {
      let N = e.modelValue;
      N.delete.push(d.id), e.modelValueOnUpdate(N);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(c, s, i, u, l);
    }), (d, N) => {
      const A = re("q-spinner"), k = re("q-uploader-add-trigger"), $ = re("q-btn"), z = re("q-item-label"), S = re("q-item-section"), p = re("q-item"), m = re("q-separator"), D = re("q-list");
      return g(), B(a(We), {
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
        header: h((F) => [
          M("div", mn, [
            F.isUploading ? (g(), B(A, {
              key: 0,
              class: "q-uploader__spinner"
            })) : P("", !0),
            M("div", pn, [
              M("div", gn, L(e.field.label), 1),
              M("div", hn, "Total : " + L(F.uploadSizeLabel), 1)
            ]),
            F.canAddFiles ? (g(), B($, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: F.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                _(k)
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: h((F) => [
          _(D, { separator: "" }, {
            default: h(() => [
              (g(!0), I(me, null, pe(e.field.attachmentData ?? [], (G) => (g(), B(p, {
                key: G.id
              }, {
                default: h(() => [
                  _(S, null, {
                    default: h(() => [
                      _(z, { class: "full-width ellipsis" }, {
                        default: h(() => [
                          Z(L(G.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(z, { caption: "" }, {
                        default: h(() => [
                          Z(L(a(ge)(G.size)), 1)
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
                    default: h(() => [
                      _($, {
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
              (g(!0), I(me, null, pe(F.files, (G) => (g(), B(p, {
                key: G.__key
              }, {
                default: h(() => [
                  _(S, null, {
                    default: h(() => [
                      _(z, { class: "full-width ellipsis" }, {
                        default: h(() => [
                          Z(L(G.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      _(z, { caption: "" }, {
                        default: h(() => [
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
                    default: h(() => [
                      _($, {
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
class fe {
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
    return new fe(
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
          const N = this.dynamicComponentRecord[`field-${d.field_name}-before`], A = fe.getFieldComponentByFormFieldType(d), k = this.dynamicComponentRecord[`field-${d.field_name}-after`], $ = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: fe.getRegularFieldTypeByFieldType(
              d.field_type
            )
          };
          let z = d.label;
          this.formSettings.requiredFieldsHasAsterisk && d.rules.find((p) => p.type === "required") && (z = z.concat("*"));
          const S = {
            type: d.field_type,
            extraType: d.field_extra_type,
            metadata: Object.freeze(d),
            label: z,
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
            beforeComponent: N ? X(N) : void 0,
            mainComponent: X(A),
            afterComponent: k ? X(k) : void 0,
            events: o.fields[d.field_name] ?? {},
            componentOptions: $
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
const yn = { class: "flex column" }, bn = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(r, { expose: e }) {
    const t = r;
    let o = null, n = null, u = null;
    Qe();
    const l = {
      softReset: i,
      reset: x,
      clear: C,
      validate: N,
      isValid: A,
      isInvalid: k,
      hide: q,
      unhide: d,
      resetValidation: $,
      getFields: z,
      setReadonlyState: S,
      setCssClass: p,
      setIcon: m,
      setLabel: D,
      section: t.section
    }, c = T(/* @__PURE__ */ new Map());
    function s() {
      t.section.fields.forEach((v) => {
        const V = v.metadata.field_name, Q = t.formApi.getFieldByName(V);
        Q && c.value.set(V, Q);
      });
    }
    function i() {
      c.value.forEach((v) => {
        v.softReset();
      });
    }
    function x() {
      c.value.forEach((v) => {
        v.reset();
      }), w(t.section.events.onReset);
    }
    function C() {
      c.value.forEach((v) => {
        v.clear();
      }), w(t.section.events.onClear);
    }
    function q() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (c.value.forEach((V) => {
        V.hide();
      }), v.hidden = !0, w(t.section.events.onHide));
    }
    function d() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (c.value.forEach((V) => {
        V.unhide();
      }), v.hidden = !1, w(t.section.events.onUnhide));
    }
    function N() {
      let v = !0;
      return c.value.forEach((V) => {
        if (!V.validate()) {
          v = !1;
          return;
        }
      }), w(t.section.events.onValidated), v;
    }
    function A() {
      let v = !0;
      return c.value.forEach((V) => {
        if (!V.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function k() {
      return !A();
    }
    function $() {
      c.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function z() {
      return c.value;
    }
    function S(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.readonly = v);
    }
    function p(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.cssClass = v);
    }
    function m(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.icon = v);
    }
    function D(v) {
      const V = t.privateFormApi.getSectionRef(
        t.section.name
      );
      V && (V.label = v);
    }
    function F() {
      const v = {};
      for (const [V, Q] of c.value)
        v[V] = Q.getValueSerialized();
      return v;
    }
    function G() {
      t.privateFormApi;
    }
    e(l);
    const ee = le(() => A()), te = le(() => k()), he = le(() => F());
    return j(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        o == null || o(), o = null, v && (o = j(ee, (V) => {
          V && w(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = j(te, (V) => {
          var Q;
          V && w((Q = t.section) == null ? void 0 : Q.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), j(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        u == null || u(), u = null, v && (u = j(
          he,
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
      G();
      const v = (V = je()) == null ? void 0 : V.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), be(() => {
        var Q;
        s(), w((Q = t.section) == null ? void 0 : Q.events.onReady);
      });
    }), (v, V) => we((g(), I("div", yn, [
      t.section.beforeComponent ? (g(), B(ae(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : P("", !0),
      (g(), B(ae(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (g(), B(ae(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : P("", !0)
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
    }), n || `Taille par fichier ${ge(o)}`;
  };
}
function ta(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && u.size < o && (n = !1);
    }), n || `Taille par fichier min. ${ge(o)}`;
  };
}
function na(r) {
  return (e) => {
    const t = e, o = r();
    let n = !0;
    return t.add.forEach((u) => {
      n && u.size > o && (n = !1);
    }), n || `Taille par fichier max. ${ge(o)}`;
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
    return t.add.reduce((u, l) => (u += l.size, u), 0) <= o || `${ge(o)} max.`;
  };
}
function la(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) >= o || `${ge(o)} min.`;
  };
}
function ia(r) {
  return (e) => {
    const t = e, o = r();
    return t.add.reduce((u, l) => (u += l.size, u), 0) === o || `Taille totale ${ge(o)}`;
  };
}
const sa = {
  computeServerRules: _n
}, ua = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, da = ["index"], ca = /* @__PURE__ */ H({
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
      ), i.value = d(i.value), w(t.field.events.onReset), l(), be(() => {
        xe();
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
    function N(y) {
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
    function A() {
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
    function $(y) {
      i.value = y;
    }
    function z() {
      return a(i);
    }
    function S() {
      return N(a(i));
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
    function he(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.prefix = y);
    }
    function v(y) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.label = y);
    }
    function V() {
      const y = o();
      return w(t.field.events.onValidated), y;
    }
    function Q() {
      return n();
    }
    function Se() {
      return !Q();
    }
    function xe() {
      return u();
    }
    function qe(y, E, ie, _e, De) {
      o = y, n = E, u = ie, _e && (l = _e), De && (c = De);
    }
    const Fe = {
      softReset: C,
      reset: q,
      clear: A,
      validate: V,
      isValid: Q,
      isInvalid: Se,
      hide: m,
      unhide: D,
      resetValidation: xe,
      getValueDeserialized: S,
      getValueSerialized: z,
      setupBackendErrors: p,
      setReadonlyState: F,
      setHint: G,
      setCssClass: ee,
      setSuffix: te,
      setPrefix: he,
      setLabel: v,
      setValue: $,
      field: t.field
    };
    return e(Fe), j(
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
      var E, ie;
      C();
      const y = (E = je()) == null ? void 0 : E.exposed;
      y && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        y
      ), w((ie = t.field) == null ? void 0 : ie.events.onReady);
    }), (y, E) => we((g(), I("div", null, [
      t.field.beforeComponent ? (g(), B(ae(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : P("", !0),
      (g(), B(ae(t.field.mainComponent), {
        modelValue: i.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: q,
        clear: A,
        getValueDeserialized: S,
        getValueSerialized: z,
        validate: V,
        modelValueOnUpdate: $,
        registerBehaviourCallbacks: qe
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (g(), B(ae(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Fe
      }, null, 8, ["formApi"])) : P("", !0),
      x.value.length > 0 ? (g(), I("div", ua, [
        (g(!0), I(me, null, pe(x.value, (ie, _e) => (g(), I("div", {
          index: _e,
          class: "flex column"
        }, L(ie), 9, da))), 256))
      ])) : P("", !0)
    ], 512)), [
      [ze, t.field.hidden !== !0]
    ]);
  }
}), fa = { class: "flex column" }, ha = /* @__PURE__ */ H({
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
    const q = Qe(), d = T(fe.getEmptyFormBeforeInit()), N = T(!1), A = T(!1), k = T(!1), $ = T(!1), z = T("create"), S = T({}), p = T(/* @__PURE__ */ new Map()), m = T(/* @__PURE__ */ new Map());
    async function D() {
      o = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = fe.getForm(
        t.resourceName,
        t.resourceId,
        ee(),
        o,
        t.formSettings,
        t.formStyle,
        t.context,
        se,
        t.eventManager
      ), u = d.value.sections.length, l = d.value.sections.map((f) => f.fields).flat().length, t.resourceId && (z.value = "edit");
    }
    async function F() {
      var R, W, ve;
      if (!v())
        return;
      w((R = d.value) == null ? void 0 : R.events.onSubmit), $.value = !0, y();
      const f = te(), b = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (x = b.resource_data, b.success)
        S.value = {}, z.value === "create" && (z.value = "edit"), o && b.resource_data && (o.resource_data = b.resource_data), d.value = fe.getForm(
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
          se,
          t.eventManager
        ), Se(), n = JSON.stringify(te()), w((ve = d.value) == null ? void 0 : ve.events.onSubmitSuccess);
      else {
        S.value = {};
        const ye = [];
        for (const [ne, ue] of m.value) {
          const Ae = b.errors[ne];
          Ae && (ue.setupBackendErrors(Ae), ye.push(ne));
        }
        Object.entries(b.errors).forEach((ne) => {
          ye.includes(ne[0]) || (S.value[ne[0]] = ne[1]);
        }), w((W = d.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      $.value = !1;
    }
    async function G(f) {
      var W, ve, ye;
      if (!d.value.allowBulk || z.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!v())
        return;
      w((W = d.value) == null ? void 0 : W.events.onSubmit), $.value = !0, y();
      const b = te(), R = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: b,
        bulkCount: f,
        context: t.context
      });
      if (C = R.bulk_data, R.success)
        S.value = {}, z.value === "create" && (z.value = "edit"), o && R.resource_data && (o.resource_data = R.resource_data), d.value = fe.getForm(
          t.resourceName,
          t.resourceId,
          ee(),
          {
            form: R.form,
            resource_data: R.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          se,
          t.eventManager
        ), Se(), n = JSON.stringify(te()), w((ye = d.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        S.value = {};
        const ne = [];
        for (const [ue, Ae] of m.value) {
          const Ue = R.errors[ue];
          Ue && (Ae.setupBackendErrors(Ue), ne.push(ue));
        }
        Object.entries(R.errors).forEach((ue) => {
          ne.includes(ue[0]) || (S.value[ue[0]] = ue[1]);
        }), w((ve = d.value) == null ? void 0 : ve.events.onSubmitUnsuccess);
      }
      $.value = !1;
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
        const R = q[b];
        if (R) {
          const W = H({
            inheritAttrs: !1,
            setup(ve, { attrs: ye, slots: ne }) {
              return () => R(
                {
                  ...ve,
                  ...ye
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
      for (const [b, R] of m.value)
        f[b] = R.getValueDeserialized();
      return f;
    }
    function he() {
      const f = {};
      for (const [b, R] of m.value)
        f[b] = R.getValueSerialized();
      return f;
    }
    function v() {
      var b;
      let f = !0;
      return m.value.forEach((R) => {
        if (!R.validate()) {
          f = !1;
          return;
        }
      }), w((b = d.value) == null ? void 0 : b.events.onValidated), f;
    }
    function V() {
      let f = !0;
      return m.value.forEach((b) => {
        if (!b.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function Q() {
      return !V();
    }
    function Se() {
      p.value.forEach((f) => {
        f.softReset();
      });
    }
    function xe() {
      var f;
      m.value.forEach((b) => {
        b.reset();
      }), w((f = d.value) == null ? void 0 : f.events.onReset);
    }
    function qe() {
      var f;
      m.value.forEach((b) => {
        b.clear();
      }), w((f = d.value) == null ? void 0 : f.events.onClear);
    }
    function Fe() {
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
    function ie(f) {
      return p.value.get(f);
    }
    function _e(f) {
      return [...p.value.values()].at(f);
    }
    function De() {
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
      return a(z);
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
      return (b = d.value) == null ? void 0 : b.sections.find((R) => R.name === f);
    }
    function ct(f) {
      var b;
      return (b = d.value) == null ? void 0 : b.sections.map((R) => R.fields).flat().find((R) => R.metadata.field_name === f);
    }
    function ft(f, b) {
      p.value.set(f, b), u === p.value.size && (N.value = !0);
    }
    function mt(f, b) {
      m.value.set(f, b), l === m.value.size && (A.value = !0);
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
        var R;
        return (R = d.value) == null ? void 0 : R[b];
      }
    }), se = {
      getMode: tt,
      getSectionByName: ie,
      getSectionByIndex: _e,
      getSections: De,
      getFieldByName: Ke,
      getFields: Xe,
      validate: v,
      isValid: V,
      isInvalid: Q,
      softReset: Se,
      reset: xe,
      clear: qe,
      resetValidation: Fe,
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
    e(se);
    const ht = le(() => V()), vt = le(() => Q()), yt = le(() => he());
    return j(
      () => N.value && A.value,
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
          var R;
          b && w((R = d.value) == null ? void 0 : R.events.onIsValid);
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
          var R;
          b && w((R = d.value) == null ? void 0 : R.events.onIsInvalid);
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
      et(), await D(), be(() => {
        n = JSON.stringify(te());
      });
    }), (f, b) => we((g(), I("div", fa, [
      M("div", {
        class: K(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (g(!0), I(me, null, pe(d.value.sections, (R) => (g(), B(bn, {
          key: R.name,
          section: R,
          formApi: se,
          privateFormApi: Ie
        }, {
          default: h(() => [
            (g(!0), I(me, null, pe(R.fields, (W) => (g(), B(ca, {
              key: W.metadata.field_name,
              field: W,
              formApi: se,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (g(), B(ae(d.value.orphanErrorsComponent), {
        orphanErrors: S.value,
        formApi: se
      }, null, 8, ["orphanErrors"])),
      (g(), B(ae(d.value.actionComponent), {
        isLoadingSubmit: $.value,
        formApi: se
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
