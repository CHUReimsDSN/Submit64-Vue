var bt = Object.defineProperty;
var _t = (o, e, t) => e in o ? bt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var O = (o, e, t) => _t(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as P, createElementBlock as I, openBlock as h, createElementVNode as j, createVNode as C, createBlock as q, createCommentVNode as H, unref as a, mergeProps as Ee, normalizeClass as X, toDisplayString as L, resolveDynamicComponent as ae, resolveComponent as le, normalizeProps as Ct, guardReactiveProps as St, withCtx as y, createTextVNode as Z, Fragment as pe, renderList as ge, ref as T, onMounted as Y, nextTick as _e, watch as Q, computed as ie, markRaw as J, useSlots as je, getCurrentInstance as Qe, withDirectives as we, vShow as ze } from "vue";
import { QBtn as re, QIcon as xe, QItem as Fe, QItemSection as ce, QItemLabel as fe, QInput as De, QPopupProxy as qe, QDate as Ye, QTime as Ft, QCheckbox as kt, QSelect as $e, QColor as Vt, useQuasar as xt, QEditor as Dt, QUploader as We, QList as Le, QSeparator as At, QUploaderAddTrigger as Rt, date as U } from "quasar";
const qt = { class: "flex column" }, Bt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Nt = /* @__PURE__ */ P({
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
    return (r, n) => (h(), I("div", qt, [
      j("div", Bt, [
        C(a(re), Ee(t(), {
          label: "Enregistrer",
          loading: e.isLoadingSubmit,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "onClick"]),
        e.formApi.reset ? (h(), q(a(re), Ee({ key: 0 }, t(), {
          loading: e.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : H("", !0),
        e.formApi.clear ? (h(), q(a(re), Ee({ key: 1 }, t(), {
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
  setup(o) {
    const e = o;
    return (t, r) => (h(), I("div", {
      class: X(e.sectionApi.section.cssClass)
    }, [
      j("div", Et, [
        e.sectionApi.section.icon ? (h(), q(a(xe), {
          key: 0,
          name: e.sectionApi.section.icon,
          size: "sm",
          color: e.formApi.form.formStyle.fieldColor
        }, null, 8, ["name", "color"])) : H("", !0),
        j("div", Tt, L(e.sectionApi.section.label), 1)
      ]),
      j("div", Ot, [
        (h(), q(ae(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), zt = /* @__PURE__ */ P({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, r) => {
      const n = le("q-icon");
      return h(), q(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: r[0] || (r[0] = (i) => e.reset())
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
  setup(o) {
    const e = o;
    return (t, r) => (h(), q(a(Fe), Ct(St(e.itemProps)), {
      default: y(() => [
        C(a(ce), null, {
          default: y(() => [
            C(a(fe), null, {
              default: y(() => [
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
  setup(o) {
    const e = o;
    return (t, r) => (h(), I("div", It, [
      (h(!0), I(pe, null, ge(e.orphanErrors, (n, i) => (h(), I("div", {
        key: i,
        class: "q-field--error q-field__bottom text-negative"
      }, L(i) + " : " + L(n.join(",")), 1))), 128))
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
    }, this._actionComponent = Nt, this._orphanErrorsComponent = Ut, this._sectionComponent = wt, this._wrapperResetComponent = zt, this._associationDisplayComponent = $t;
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
let K = Ne;
class Be {
  constructor(e) {
    O(this, "formApi");
    O(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const r = e, n = t, i = new Lt(r, n, this.formApi);
    return this.events.push(i), new Pt(i);
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
class Lt {
  constructor(e, t, r) {
    O(this, "type");
    O(this, "data");
    O(this, "formApi");
    O(this, "action", () => {
    });
    O(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = T(), l = T();
    function s() {
      c.value && c.value.hide();
    }
    function d() {
      return l.value ? l.value.validate() : !1;
    }
    function m() {
      return l.value ? !l.value.hasError : !1;
    }
    function S() {
      l.value && l.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(d, m, S), i || _e(() => {
        var A;
        (A = l.value) == null || A.resetValidation();
      });
    }), (A, u) => (h(), q(a(De), {
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u[1] || (u[1] = (B) => e.modelValueOnUpdate(B)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        C(a(xe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            C(a(qe), {
              ref_key: "popupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                C(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": u[0] || (u[0] = (B) => e.modelValueOnUpdate(B)),
                  mask: a(t).formSettings.dateFormat
                }, {
                  default: y(() => [
                    j("div", Ht, [
                      C(a(re), {
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
}), Mt = { class: "row items-center justify-end" }, jt = { class: "row items-center justify-end" }, Qt = /* @__PURE__ */ P({
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
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = T(), l = T(), s = T();
    function d() {
      c.value && c.value.hide();
    }
    function m() {
      l.value && l.value.hide();
    }
    function S() {
      return s.value ? s.value.validate() : !1;
    }
    function A() {
      return s.value ? !s.value.hasError : !1;
    }
    function u() {
      s.value && s.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(S, A, u), i || _e(() => {
        var B;
        (B = s.value) == null || B.resetValidation();
      });
    }), (B, N) => (h(), q(a(De), {
      ref_key: "fieldRef",
      ref: s,
      "model-value": e.modelValue,
      "onUpdate:modelValue": N[2] || (N[2] = (V) => e.modelValueOnUpdate(V)),
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
      "lazy-rules": i,
      prefix: e.field.prefix,
      suffix: e.field.suffix,
      readonly: e.field.readonly,
      clearable: e.field.clearable,
      rules: e.rules,
      onClear: e.clear
    }, {
      append: y(() => [
        C(a(xe), {
          size: "sm",
          color: "primary",
          name: "event",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            C(a(qe), {
              ref_key: "datePopupProxyRef",
              ref: c,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                C(a(Ye), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[0] || (N[0] = (V) => e.modelValueOnUpdate(V)),
                  mask: a(t).formSettings.datetimeFormat
                }, {
                  default: y(() => [
                    j("div", Mt, [
                      C(a(re), {
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
        C(a(xe), {
          size: "sm",
          color: "primary",
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            C(a(qe), {
              ref_key: "timePopupProxyRef",
              ref: l,
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                C(a(Ft), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": N[1] || (N[1] = (V) => e.modelValueOnUpdate(V)),
                  mask: a(t).formSettings.datetimeFormat,
                  format24h: ""
                }, {
                  default: y(() => [
                    j("div", jt, [
                      C(a(re), {
                        onClick: m,
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
  setup(o) {
    const e = o, t = T(!0), n = e.formApi.form.formStyle;
    function i() {
      return t.value === !0;
    }
    function c() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return Q(
      () => e.modelValue,
      (s) => {
        for (const d of e.rules)
          if (t.value = d(s), t.value !== !0)
            break;
      }
    ), Y(() => {
      e.registerBehaviourCallbacks(i, c, l);
    }), (s, d) => (h(), I("div", Yt, [
      C(a(kt), {
        "model-value": e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => e.modelValueOnUpdate(m)),
        label: e.field.label,
        dense: a(n).fieldDense,
        color: a(n).fieldColor,
        "aria-readonly": e.field.readonly,
        class: X([e.field.cssClass, "q-pb-md"])
      }, null, 8, ["model-value", "label", "dense", "color", "aria-readonly", "class"]),
      e.field.hint ? (h(), I("div", Wt, L(e.field.hint), 1)) : H("", !0),
      t.value !== !0 ? (h(), I("div", Jt, L(t.value), 1)) : H("", !0)
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
  setup(o) {
    const e = o, t = T([]), r = T([]), n = T(), i = e.formApi.form, c = i.formSettings, l = i.formStyle, s = c.rulesBehaviour === "lazy";
    function d(N, V) {
      if (N === "") {
        V(() => {
          r.value = [...t.value];
        });
        return;
      }
      V(() => {
        const z = N.toLowerCase();
        r.value = t.value.filter(($) => $.label.toLowerCase().includes(z));
      });
    }
    function m() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), r.value = e.field.staticSelectOptions ?? [];
    }
    function S() {
      return n.value ? n.value.validate() : !1;
    }
    function A() {
      return n.value ? !n.value.hasError : !1;
    }
    function u() {
      n.value && n.value.resetValidation();
    }
    function B() {
      r.value = [];
    }
    return Y(() => {
      m(), e.registerBehaviourCallbacks(S, A, u, void 0, B);
    }), (N, V) => (h(), q(a($e), {
      ref_key: "fieldRef",
      ref: n,
      "model-value": e.modelValue,
      "onUpdate:modelValue": V[0] || (V[0] = (z) => e.modelValueOnUpdate(z)),
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
      class: X(e.field.cssClass),
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
        C(a(Fe), {
          dense: a(l).fieldDense
        }, {
          default: y(() => [
            C(a(ce), null, {
              default: y(() => [
                C(a(fe), null, {
                  default: y(() => [
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
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, c = n.rulesBehaviour === "lazy", l = T([]), s = T(
      S()
    ), d = T(), m = T(Pe);
    function S() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function A(F, g) {
      if (F === m.value) {
        g(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = S(), m.value = F;
      const D = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: D.resourceName,
        resourceId: D.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: F,
        context: D.context
      }).then((k) => {
        g(() => {
          l.value = k.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            k.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = S();
      });
    }
    function u() {
      var g, p;
      const F = e.getValueSerialized();
      !F || !e.field.associationData || (l.value = [
        {
          label: ((g = e.field.associationData[0]) == null ? void 0 : g.label) ?? "???",
          value: F,
          data: (p = e.field.associationData[0]) == null ? void 0 : p.data
        }
      ]);
    }
    function B() {
      return d.value ? d.value.validate() : !1;
    }
    function N() {
      return d.value ? !d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    function z() {
      s.value = S(), l.value = [], m.value = Pe;
    }
    function $(F) {
      const g = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && F.to === g && g !== -1) {
        const p = e.formApi.form, D = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, D({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: m.value,
          context: p.context
        }).then((k) => {
          l.value = l.value.concat(
            k.rows
          ), s.value.lastPage = Math.ceil(
            k.row_count / s.value.limit
          ), k.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, F.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        B,
        N,
        V,
        u,
        z
      ), _e(() => {
        u();
      });
    }), (F, g) => (h(), q(a($e), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[0] || (g[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: X(e.field.cssClass),
      "lazy-rules": c,
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
      onFilter: A,
      onVirtualScroll: $
    }, {
      "no-option": y(() => [
        C(a(Fe), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            C(a(ce), null, {
              default: y(() => [
                C(a(fe), null, {
                  default: y(() => [
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
      option: y((p) => [
        (h(), q(ae(a(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: p.opt,
          itemProps: p.itemProps
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
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, r = e.formApi.form, n = r.formSettings, i = r.formStyle, c = n.rulesBehaviour === "lazy", l = T([]), s = T(
      S()
    ), d = T(), m = T(Ge);
    function S() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function A(F, g) {
      if (F === m.value) {
        g(() => {
        });
        return;
      }
      const p = e.formApi.getAssociationDataCallback();
      s.value = S(), m.value = F;
      const D = e.formApi.form;
      s.value.isLoading = !0, p({
        resourceName: D.resourceName,
        resourceId: D.resourceId,
        associationName: e.field.metadata.field_association_name,
        limit: s.value.limit,
        offset: (s.value.nextPage - 1) * s.value.limit,
        labelFilter: F,
        context: D.context
      }).then((k) => {
        g(() => {
          l.value = k.rows, s.value.nextPage = 2, s.value.lastPage = Math.ceil(
            k.row_count / s.value.limit
          ), s.value.isLoading = !1;
        });
      }).catch(() => {
        l.value = [], s.value = S();
      });
    }
    function u() {
      const F = e.getValueSerialized();
      !F || !e.field.associationData || (l.value = F.map((g, p) => ({
        label: e.field.associationData[p].label ?? "???",
        value: g,
        data: e.field.associationData[p].data
      })));
    }
    function B() {
      return d.value ? d.value.validate() : !1;
    }
    function N() {
      return d.value ? !d.value.hasError : !1;
    }
    function V() {
      d.value && d.value.resetValidation();
    }
    function z() {
      s.value = S(), l.value = [], m.value = Ge;
    }
    function $(F) {
      const g = l.value.length - 1;
      if (s.value.isLoading !== !0 && s.value.nextPage < s.value.lastPage && F.to === g && g !== -1) {
        const p = e.formApi.form, D = e.formApi.getAssociationDataCallback();
        s.value.isLoading = !0, D({
          resourceName: p.resourceName,
          resourceId: p.resourceId,
          associationName: e.field.metadata.field_association_name,
          limit: s.value.limit,
          offset: (s.value.nextPage - 1) * s.value.limit,
          labelFilter: m.value,
          context: p.context
        }).then((k) => {
          l.value = l.value.concat(
            k.rows
          ), s.value.lastPage = Math.ceil(
            k.row_count / s.value.limit
          ), k.row_count >= s.value.limit && s.value.nextPage++, s.value.isLoading = !1, F.ref.refresh();
        });
      }
    }
    return Y(() => {
      e.registerBehaviourCallbacks(
        B,
        N,
        V,
        u,
        z
      ), _e(() => {
        u();
      });
    }), (F, g) => (h(), q(a($e), {
      ref_key: "fieldRef",
      ref: d,
      "model-value": e.modelValue,
      "onUpdate:modelValue": g[0] || (g[0] = (p) => e.modelValueOnUpdate(p)),
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
      class: X(e.field.cssClass),
      "lazy-rules": c,
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
      onFilter: A,
      onVirtualScroll: $
    }, {
      "no-option": y(() => [
        C(a(Fe), {
          dense: a(i).fieldDense
        }, {
          default: y(() => [
            C(a(ce), null, {
              default: y(() => [
                C(a(fe), null, {
                  default: y(() => [
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
      option: y((p) => [
        (h(), q(ae(a(t)), {
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
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = T();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (m, S) => (h(), q(a(De), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (A) => e.modelValueOnUpdate(A)),
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
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = T();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (m, S) => (h(), q(a(De), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[0] || (S[0] = (A) => e.modelValueOnUpdate(A)),
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
      "lazy-rules": i,
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
  setup(o) {
    const e = o, t = e.formApi.form, r = t.formSettings, n = t.formStyle, i = r.rulesBehaviour === "lazy", c = T();
    function l() {
      return c.value ? c.value.validate() : !1;
    }
    function s() {
      return c.value ? !c.value.hasError : !1;
    }
    function d() {
      c.value && c.value.resetValidation();
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d);
    }), (m, S) => (h(), q(a(De), {
      ref_key: "fieldRef",
      ref: c,
      "model-value": e.modelValue,
      "onUpdate:modelValue": S[1] || (S[1] = (A) => e.modelValueOnUpdate(A)),
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
        C(a(xe), {
          name: "colorize",
          class: "cursor-pointer"
        }, {
          default: y(() => [
            C(a(qe), {
              cover: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: y(() => [
                C(a(Vt), {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": S[0] || (S[0] = (A) => e.modelValueOnUpdate(A))
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
  setup(o) {
    const e = o, t = xt(), n = e.formApi.form.formStyle, i = [
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
    ], c = {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }, l = T();
    function s() {
      return !!l.value;
    }
    function d() {
      return !!l.value;
    }
    function m() {
    }
    return Y(() => {
      e.registerBehaviourCallbacks(s, d, m);
    }), (S, A) => e.modelValue ? (h(), q(a(Dt), {
      key: 0,
      ref_key: "fieldRef",
      ref: l,
      "model-value": e.modelValue,
      "onUpdate:modelValue": A[0] || (A[0] = (u) => e.modelValueOnUpdate(u)),
      toolbar: i,
      fonts: c,
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
  setup(o) {
    const t = o.formApi.form, r = t.formSettings;
    return t.formStyle, r.rulesBehaviour, (n, i) => " TODO json edit ? ";
  }
});
function w(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function he(o) {
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
  setup(o) {
    const e = o, r = e.formApi.form.formStyle, n = T(null);
    function i() {
      let g = e.modelValue;
      g.add = [], g.delete = [], e.modelValueOnUpdate(g), V();
    }
    function c() {
      var p;
      let g = e.modelValue;
      g.add = [], g.delete = ((p = e.field.attachmentData) == null ? void 0 : p.map((D) => D.id)) ?? [], e.modelValueOnUpdate(g), V();
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
    async function m(g) {
      return new Promise((p) => {
        const D = new Blob([g]), k = new FileReader();
        k.onload = (G) => {
          var oe;
          const ee = ((oe = G.target) == null ? void 0 : oe.result) ?? "", [te, ve] = ee.split(",");
          p(ve);
        }, k.readAsDataURL(D);
      });
    }
    async function S(g) {
      return {
        key: `${g.lastModified}${g.name}`,
        size: g.size,
        filename: g.name,
        contentType: g.type,
        base64: await m(await g.arrayBuffer())
      };
    }
    async function A(g) {
      if (!g[0])
        return;
      const p = await S(g[0]);
      let D = e.modelValue;
      D.add.push(p), e.modelValueOnUpdate(D), V();
    }
    async function u(g) {
      if (!g[0])
        return;
      const p = await S(g[0]);
      let D = e.modelValue;
      D.add = D.add.filter((k) => k.key !== p.key), e.modelValueOnUpdate(D), V();
    }
    function B(g) {
      let p = e.modelValue;
      p.delete.push(g.id), e.modelValueOnUpdate(p), V();
    }
    function N(g) {
      let p = e.modelValue;
      p.delete = p.delete.filter((D) => D !== g.id), e.modelValueOnUpdate(p), V();
    }
    function V() {
      n.value = null;
      for (const g of e.rules) {
        const p = g(e.modelValue);
        if (typeof p == "string") {
          n.value = p;
          break;
        }
      }
    }
    const z = ie(() => (e.field.attachmentData ?? []).length === 0), $ = ie(() => e.modelValue ? e.modelValue.delete : []), F = ie(() => {
      var g, p;
      return e.modelValue ? (((g = e.field.attachmentData) == null ? void 0 : g.length) ?? 0) === 0 || (((p = e.field.attachmentData) == null ? void 0 : p.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    });
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d, i, c);
    }), (g, p) => (h(), I("div", an, [
      C(a(We), {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: A,
        onRemoved: u,
        style: { width: "inherit" }
      }, {
        header: y((D) => [
          j("div", on, [
            j("div", rn, [
              j("div", ln, L(e.field.label), 1),
              e.field.hint ? (h(), I("div", sn, L(e.field.hint), 1)) : H("", !0)
            ]),
            D.canAddFiles && F.value ? (h(), q(a(re), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: D.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                C(a(Rt))
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: y((D) => [
          z.value ? H("", !0) : (h(), I("div", un, [
            p[0] || (p[0] = j("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            C(a(Le), { separator: "" }, {
              default: y(() => [
                (h(!0), I(pe, null, ge(e.field.attachmentData ?? [], (k) => (h(), q(a(Fe), {
                  key: k.id
                }, {
                  default: y(() => [
                    C(a(ce), null, {
                      default: y(() => [
                        C(a(fe), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            Z(L(k.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(fe), { caption: "" }, {
                          default: y(() => [
                            Z(L(a(he)(k.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (h(), q(a(ce), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        $.value.includes(k.id) ? H("", !0) : (h(), q(a(re), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => B(k)
                        }, null, 8, ["disable", "onClick"])),
                        $.value.includes(k.id) && e.modelValue.add.length === 0 ? (h(), q(a(re), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: (G) => N(k)
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
          !z.value && D.files.length > 0 ? (h(), q(a(At), { key: 1 })) : H("", !0),
          D.files.length > 0 ? (h(), I("div", dn, [
            p[1] || (p[1] = j("div", { class: "text-weight-medium text-body2" }, "Fichier à télécharger", -1)),
            C(a(Le), { separator: "" }, {
              default: y(() => [
                (h(!0), I(pe, null, ge(D.files, (k) => (h(), q(a(Fe), {
                  key: k.__key
                }, {
                  default: y(() => [
                    C(a(ce), null, {
                      default: y(() => [
                        C(a(fe), { class: "full-width ellipsis" }, {
                          default: y(() => [
                            Z(L(k.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        C(a(fe), { caption: "" }, {
                          default: y(() => [
                            Z(L(k.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    C(a(ce), {
                      top: "",
                      side: ""
                    }, {
                      default: y(() => [
                        C(a(re), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => D.removeFile(k)
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
      n.value !== null ? (h(), I("div", cn, L(n.value), 1)) : H("", !0)
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
  setup(o) {
    const e = o, r = e.formApi.form.formStyle, n = T();
    function i() {
      let u = e.modelValue;
      u.add = [], u.delete = [], e.modelValueOnUpdate(u);
    }
    function c() {
      var B;
      let u = e.modelValue;
      u.add = [], u.delete = ((B = e.field.attachmentData) == null ? void 0 : B.map((N) => N.id)) ?? [], e.modelValueOnUpdate(u);
    }
    function l() {
      return !!n.value;
    }
    function s() {
      return !!n.value;
    }
    function d() {
      n.value;
    }
    function m(u) {
      const B = u;
      if (!B)
        return;
      let N = e.modelValue;
      B.forEach((V) => {
        N.add.push(V);
      }), e.modelValueOnUpdate(N);
    }
    function S(u) {
      const B = u;
      let N = e.modelValue;
      N.add = N.add.filter((V) => !B.map((z) => z.key).includes(V.key)), e.modelValueOnUpdate(N);
    }
    function A(u) {
      let B = e.modelValue;
      B.delete.push(u.id), e.modelValueOnUpdate(B);
    }
    return Y(() => {
      e.registerBehaviourCallbacks(l, s, d, i, c);
    }), (u, B) => {
      const N = le("q-spinner"), V = le("q-uploader-add-trigger"), z = le("q-btn"), $ = le("q-item-label"), F = le("q-item-section"), g = le("q-item"), p = le("q-separator"), D = le("q-list");
      return h(), q(a(We), {
        ref_key: "fieldRef",
        ref: n,
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        bordered: a(r).fieldBorderless !== !0,
        square: a(r).fieldSquare,
        color: a(r).fieldColor,
        class: X(e.field.cssClass),
        readonly: e.field.readonly,
        onAdded: m,
        onRemoved: S
      }, {
        header: y((k) => [
          j("div", mn, [
            k.isUploading ? (h(), q(N, {
              key: 0,
              class: "q-uploader__spinner"
            })) : H("", !0),
            j("div", pn, [
              j("div", gn, L(e.field.label), 1),
              j("div", hn, "Total : " + L(k.uploadSizeLabel), 1)
            ]),
            k.canAddFiles ? (h(), q(z, {
              key: 1,
              type: "a",
              icon: "add_box",
              onClick: k.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: y(() => [
                C(V)
              ]),
              _: 1
            }, 8, ["onClick"])) : H("", !0)
          ])
        ]),
        list: y((k) => [
          C(D, { separator: "" }, {
            default: y(() => [
              (h(!0), I(pe, null, ge(e.field.attachmentData ?? [], (G) => (h(), q(g, {
                key: G.id
              }, {
                default: y(() => [
                  C(F, null, {
                    default: y(() => [
                      C($, { class: "full-width ellipsis" }, {
                        default: y(() => [
                          Z(L(G.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C($, { caption: "" }, {
                        default: y(() => [
                          Z(L(a(he)(G.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(F, {
                    top: "",
                    side: ""
                  }, {
                    default: y(() => [
                      C(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ee) => A(G)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128)),
              C(p),
              (h(!0), I(pe, null, ge(k.files, (G) => (h(), q(g, {
                key: G.__key
              }, {
                default: y(() => [
                  C(F, null, {
                    default: y(() => [
                      C($, { class: "full-width ellipsis" }, {
                        default: y(() => [
                          Z(L(G.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C($, { caption: "" }, {
                        default: y(() => [
                          Z(L(G.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(F, {
                    top: "",
                    side: ""
                  }, {
                    default: y(() => [
                      C(z, {
                        class: "gt-xs",
                        size: "12px",
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (ee) => k.removeFile(G)
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
  constructor(e, t, r, n, i, c, l, s, d) {
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
    this.dynamicComponentRecord = r.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = s, this.formSettings = {
      ...i,
      ...K.getGlobalFormSetting(),
      backendDateFormat: n.form.backend_date_format,
      backendDatetimeFormat: n.form.backend_datetime_format
    }, this.formStyle = {
      ...c,
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
  static getForm(e, t, r, n, i, c, l, s, d) {
    return new me(
      e,
      t,
      r,
      n,
      i,
      c,
      l,
      s,
      d
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Be.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), r = Be.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (c, l) => {
        const s = [];
        c.fields.forEach((u) => {
          const B = this.dynamicComponentRecord[`field-${u.field_name}-before`], N = me.getFieldComponentByFormFieldType(u), V = this.dynamicComponentRecord[`field-${u.field_name}-after`], z = {
            associationDisplayComponent: J(
              this.associationDisplayComponent
            ),
            regularFieldType: me.getRegularFieldTypeByFieldType(
              u.field_type
            )
          };
          let $ = u.label;
          this.formSettings.requiredFieldsHasAsterisk && u.rules.find((g) => g.type === "required") && ($ = $.concat("*"));
          const F = {
            type: u.field_type,
            extraType: u.field_extra_type,
            metadata: Object.freeze(u),
            label: $,
            hint: u.hint ?? void 0,
            prefix: u.prefix ?? void 0,
            suffix: u.suffix ?? void 0,
            readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? u.readonly ?? void 0,
            cssClass: u.css_class ?? void 0,
            staticSelectOptions: u.static_select_options,
            associationData: u.field_association_data,
            attachmentData: u.field_attachment_data,
            rules: u.rules,
            clearable: this.formMetadataAndData.form.clearable ?? void 0,
            hidden: !1,
            beforeComponent: B ? J(B) : void 0,
            mainComponent: J(N),
            afterComponent: V ? J(V) : void 0,
            events: r.fields[u.field_name] ?? {},
            componentOptions: z
          };
          s.push(F), t.add(u.field_name);
        });
        const d = this.dynamicComponentRecord[`section-${c.name ?? l}-before`], m = this.sectionComponent, S = this.dynamicComponentRecord[`section-${c.name ?? l}-after`], A = {
          label: c.label ?? void 0,
          icon: c.icon ?? void 0,
          cssClass: c.css_class ?? void 0,
          hidden: !1,
          name: c.name ?? l.toString(),
          readonly: this.formMetadataAndData.form.readonly ?? c.readonly ?? void 0,
          events: r.sections[c.name ?? l.toString()] ?? {},
          beforeComponent: d ? J(d) : void 0,
          mainComponent: J(m),
          fieldsComponent: void 0,
          afterComponent: S ? J(S) : void 0,
          fields: s
        };
        n.push(A);
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
    return t.size < this.formMetadataAndData.form.sections.reduce((c, l) => c + l.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), i;
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
  setup(o, { expose: e }) {
    const t = o;
    let r = null, n = null, i = null;
    const c = je(), l = {
      softReset: m,
      reset: S,
      clear: A,
      validate: N,
      isValid: V,
      isInvalid: z,
      hide: u,
      unhide: B,
      resetValidation: $,
      getFields: F,
      setReadonlyState: g,
      setCssClass: p,
      setIcon: D,
      setLabel: k,
      section: t.section
    }, s = T(/* @__PURE__ */ new Map());
    function d() {
      t.section.fields.forEach((v) => {
        const x = v.metadata.field_name, M = t.formApi.getFieldByName(x);
        M && s.value.set(x, M);
      });
    }
    function m() {
      s.value.forEach((v) => {
        v.softReset();
      });
    }
    function S() {
      s.value.forEach((v) => {
        v.reset();
      }), w(t.section.events.onReset);
    }
    function A() {
      s.value.forEach((v) => {
        v.clear();
      }), w(t.section.events.onClear);
    }
    function u() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (s.value.forEach((x) => {
        x.hide();
      }), v.hidden = !0, w(t.section.events.onHide));
    }
    function B() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (s.value.forEach((x) => {
        x.unhide();
      }), v.hidden = !1, w(t.section.events.onUnhide));
    }
    function N() {
      let v = !0;
      return s.value.forEach((x) => {
        if (!x.validate()) {
          v = !1;
          return;
        }
      }), w(t.section.events.onValidated), v;
    }
    function V() {
      let v = !0;
      return s.value.forEach((x) => {
        if (!x.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function z() {
      return !V();
    }
    function $() {
      s.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function F() {
      return s.value;
    }
    function g(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = v);
    }
    function p(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = v);
    }
    function D(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = v);
    }
    function k(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = v);
    }
    function G() {
      const v = {};
      for (const [x, M] of s.value)
        v[x] = M.getValueSerialized();
      return v;
    }
    function ee() {
      const v = c.default;
      if (!v) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = P({
        inheritAttrs: !1,
        setup(M, { attrs: Ce, slots: ke }) {
          return () => v(
            {
              ...M,
              ...Ce
            },
            ke
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, J(x));
    }
    e(l);
    const te = ie(() => V()), ve = ie(() => z()), oe = ie(() => G());
    return Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        r == null || r(), r = null, v && (r = Q(te, (x) => {
          x && w(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = Q(ve, (x) => {
          var M;
          x && w((M = t.section) == null ? void 0 : M.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        i == null || i(), i = null, v && (i = Q(
          oe,
          () => {
            var x;
            w((x = t.section) == null ? void 0 : x.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(() => {
      var x;
      ee();
      const v = (x = Qe()) == null ? void 0 : x.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), _e(() => {
        var M;
        d(), w((M = t.section) == null ? void 0 : M.events.onReady);
      });
    }), (v, x) => we((h(), I("div", yn, [
      t.section.beforeComponent ? (h(), q(ae(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0),
      (h(), q(ae(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (h(), q(ae(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : H("", !0)
    ], 512)), [
      [ze, t.section.hidden !== !0]
    ]);
  }
});
function _n(o, e) {
  const t = o.rules ?? [], r = o.type, n = e.form, i = (d, m, S) => d[m] ? S ? () => c(d[m]) : () => d[m] : d.compare_to ? () => {
    var A;
    return ((A = e.getFieldByName(d.compare_to)) == null ? void 0 : A.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", c = (d) => String(
    U.formatDate(
      U.extractDate(d, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], s = [];
  switch (r) {
    case "date":
      l.push(Oe(n.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Oe(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((d) => {
    const m = d;
    switch (m.type) {
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
        l.push(Je(m.including));
        break;
      case "exclusion":
        l.push(Sn(m.excluding));
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
        l.push(Dn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          An(
            i(m, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Rn(
            i(m, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          qn(
            i(m, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          Bn(
            i(m, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          Nn(i(m, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          En(
            i(m, "other_than")
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
            i(m, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          In(
            i(m, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          Un(
            i(m, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          Ln(
            i(m, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          Gn(
            i(m, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          Hn(i(m, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          Pn(
            () => m.min,
            () => m.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          Mn(
            i(m, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(Oe(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          jn(
            i(m, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          Qn(
            i(m, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          Yn(
            i(m, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          Wn(
            i(m, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Jn(
            i(m, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Kn(
            i(m, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredFile":
        l.push(
          Zn()
        );
        break;
      case "allowFileContentType":
        l.push(
          ea(
            i(m, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          ta(
            i(m, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          aa(
            i(m, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          na(
            i(m, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          oa(
            i(m, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          ra(
            i(m, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          la(
            i(m, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          ia(
            i(m, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          sa(
            i(m, "equal_to")
          )
        );
        break;
    }
  }), s.length > 0 ? s.map((d) => {
    switch (d) {
      case "allowBlank":
        return xn(l);
      case "allowNull":
        return Vn(l);
    }
  }) : l;
}
function Cn() {
  return (o) => !!o || "Ce champ est requis";
}
function Je(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Sn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${Je.toString()}`
  );
}
function Fn() {
  return (o) => !o || "Ce champ doit être vide";
}
function kn() {
  return (o) => !!o || "Doit être accepté";
}
function Vn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function xn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const r = t(e);
    if (r !== !0)
      return r;
  }), !0);
}
function Dn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function An(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Rn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function qn(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Bn(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Nn(o, e) {
  return (t) => {
    const r = o();
    return Number(t) === r || `Égale à ${r}`;
  };
}
function En(o, e) {
  return (t) => {
    const r = o();
    return Number(t) !== r || `Doit être différent de ${o}`;
  };
}
function Tn() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function On() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function wn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function zn() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function $n(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function In(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Un(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ln(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Pn(o, e) {
  return (t) => {
    const r = o(), n = e();
    return String(t).length >= r && String(t).length <= n || `Entre ${r} et ${n}`;
  };
}
function Hn(o, e) {
  return (t) => {
    const r = o();
    return String(t) === r || `Égale à ${r}`;
  };
}
function Gn(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Mn(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function jn(o, e) {
  return (t) => {
    const r = o(), n = U.extractDate(String(t), e), i = U.extractDate(r, e);
    return n <= i || `Inf. ou égal à ${r}`;
  };
}
function Qn(o, e) {
  return (t) => {
    const r = o(), n = U.extractDate(String(t), e), i = U.extractDate(r, e);
    return n < i || `Inf. à ${r}`;
  };
}
function Yn(o, e) {
  return (t) => {
    const r = o(), n = U.extractDate(String(t), e), i = U.extractDate(r, e);
    return n >= i || `Sup. ou égal à ${r}`;
  };
}
function Wn(o, e) {
  return (t) => {
    const r = o(), n = U.extractDate(String(t), e), i = U.extractDate(r, e);
    return n > i || `Sup. à ${r}`;
  };
}
function Jn(o, e) {
  return (t) => {
    const r = o(), n = U.extractDate(String(t), e), i = U.extractDate(r, e);
    return n === i || `Égale à ${n}`;
  };
}
function Kn(o, e) {
  return (t) => {
    const r = o();
    return U.extractDate(String(t), e) !== U.extractDate(r, e) || `Doit être différent de ${r}`;
  };
}
function Oe(o) {
  return (e) => e == null || e === "" ? !0 : Xn(e, o) || `Date invalide. Format : ${o}`;
}
function Xn(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = U.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : U.formatDate(t, e) === o;
}
function Zn() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function ea(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    t.add.forEach((c) => {
      n && (r.includes(c.contentType) || (n = !1));
    });
    const i = o.length > 1;
    return n || `Type${i ? "s" : ""} autorisé${i ? "s" : ""} : ${r.join(",")}`;
  };
}
function ta(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && r !== i.size && (n = !1);
    }), n || `Taille par fichier ${he(r)}`;
  };
}
function na(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size < r && (n = !1);
    }), n || `Taille par fichier min. ${he(r)}`;
  };
}
function aa(o) {
  return (e) => {
    const t = e, r = o();
    let n = !0;
    return t.add.forEach((i) => {
      n && i.size > r && (n = !1);
    }), n || `Taille par fichier max. ${he(r)}`;
  };
}
function oa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length <= r || `${r} fichier${r > 1 ? "s" : ""} max.`;
  };
}
function ra(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.length >= r || `${r} fichier${r > 1 ? "s" : ""} min.`;
  };
}
function la(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) <= r || `${he(r)} max.`;
  };
}
function ia(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) >= r || `${he(r)} min.`;
  };
}
function sa(o) {
  return (e) => {
    const t = e, r = o();
    return t.add.reduce((i, c) => (i += c.size, i), 0) === r || `Taille totale ${he(r)}`;
  };
}
const ua = {
  computeServerRules: _n
}, da = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, ca = ["index"], fa = /* @__PURE__ */ P({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let r = () => !0, n = () => !0, i = () => {
    }, c = () => {
    }, l = () => {
    };
    const s = V(), d = T(), m = T([]);
    function S() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = u(d.value);
    }
    function A() {
      d.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), d.value = u(d.value), w(t.field.events.onReset), c(), _e(() => {
        Ce();
      });
    }
    function u(b) {
      const E = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return b == null || b === "" ? !1 : b;
        case "date":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), E.formSettings.backendDateFormat),
            E.formSettings.dateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(
              String(b),
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
      return b;
    }
    function B(b) {
      const E = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), E.formSettings.dateFormat),
            E.formSettings.backendDateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : U.formatDate(
            U.extractDate(String(b), E.formSettings.datetimeFormat),
            E.formSettings.backendDatetimeFormat
          );
      }
      return b;
    }
    function N() {
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
      l(), w(t.field.events.onClear);
    }
    function V() {
      return ua.computeServerRules(
        t.field,
        t.formApi
      );
    }
    function z(b) {
      d.value = b;
    }
    function $() {
      return a(d);
    }
    function F() {
      return B(a(d));
    }
    function g(b) {
      m.value = b;
    }
    function p() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !0, w(t.field.events.onHide));
    }
    function D() {
      const b = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      b && (b.hidden = !1, w(t.field.events.onUnhide));
    }
    function k(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.readonly = b);
    }
    function G(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.hint = b);
    }
    function ee(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.cssClass = b);
    }
    function te(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.suffix = b);
    }
    function ve(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.prefix = b);
    }
    function oe(b) {
      const E = t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
      E && (E.label = b);
    }
    function v() {
      const b = r();
      return w(t.field.events.onValidated), b;
    }
    function x() {
      return n();
    }
    function M() {
      return !x();
    }
    function Ce() {
      return i();
    }
    function ke(b, E, se, Se, Ae) {
      r = b, n = E, i = se, Se && (c = Se), Ae && (l = Ae);
    }
    const Ve = {
      softReset: S,
      reset: A,
      clear: N,
      validate: v,
      isValid: x,
      isInvalid: M,
      hide: p,
      unhide: D,
      resetValidation: Ce,
      getValueDeserialized: F,
      getValueSerialized: $,
      setupBackendErrors: g,
      setReadonlyState: k,
      setHint: G,
      setCssClass: ee,
      setSuffix: te,
      setPrefix: ve,
      setLabel: oe,
      setValue: z,
      field: t.field
    };
    return e(Ve), Q(
      () => t.field.events.onUpdate ? d.value : null,
      () => {
        w(t.field.events.onUpdate);
      }
    ), Q(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? d.value : null,
      (b) => {
        w(b ? t.field.events.onIsValid : t.field.events.onIsInvalid);
      }
    ), Y(() => {
      var E, se;
      S();
      const b = (E = Qe()) == null ? void 0 : E.exposed;
      b && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        b
      ), w((se = t.field) == null ? void 0 : se.events.onReady);
    }), (b, E) => we((h(), I("div", null, [
      t.field.beforeComponent ? (h(), q(ae(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: Ve
      }, null, 8, ["formApi"])) : H("", !0),
      (h(), q(ae(t.field.mainComponent), {
        modelValue: d.value,
        field: t.field,
        formApi: t.formApi,
        rules: a(s),
        reset: A,
        clear: N,
        getValueDeserialized: F,
        getValueSerialized: $,
        validate: v,
        modelValueOnUpdate: z,
        registerBehaviourCallbacks: ke
      }, null, 8, ["modelValue", "field", "formApi", "rules"])),
      t.field.afterComponent ? (h(), q(ae(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: Ve
      }, null, 8, ["formApi"])) : H("", !0),
      m.value.length > 0 ? (h(), I("div", da, [
        (h(!0), I(pe, null, ge(m.value, (se, Se) => (h(), I("div", {
          index: Se,
          class: "flex column"
        }, L(se), 9, ca))), 256))
      ])) : H("", !0)
    ], 512)), [
      [ze, t.field.hidden !== !0]
    ]);
  }
}), ma = { class: "flex column" }, va = /* @__PURE__ */ P({
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
    let r = null, n = "", i = 0, c = 0, l = null, s = null, d = null, m = null, S = null;
    const A = je(), u = T(me.getEmptyFormBeforeInit()), B = T(!1), N = T(!1), V = T(!1), z = T(!1), $ = T("create"), F = T({}), g = T(/* @__PURE__ */ new Map()), p = T(/* @__PURE__ */ new Map());
    async function D() {
      r = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), u.value = me.getForm(
        t.resourceName,
        t.resourceId,
        ee(),
        r,
        t.formSettings,
        t.formStyle,
        t.context,
        ue,
        t.eventManager
      ), i = u.value.sections.length, c = u.value.sections.map((f) => f.fields).flat().length, t.resourceId && ($.value = "edit");
    }
    async function k() {
      var R, W, ye;
      if (!oe())
        return;
      w((R = u.value) == null ? void 0 : R.events.onSubmit), z.value = !0, b();
      const f = te(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: f,
        context: t.context
      });
      if (m = _.resource_data, _.success)
        F.value = {}, $.value === "create" && ($.value = "edit"), r && _.resource_data && (r.resource_data = _.resource_data), u.value = me.getForm(
          t.resourceName,
          t.resourceId,
          ee(),
          {
            form: _.form,
            resource_data: _.resource_data
          },
          t.formSettings,
          t.formStyle,
          t.context,
          ue,
          t.eventManager
        ), M(), n = JSON.stringify(te()), w((ye = u.value) == null ? void 0 : ye.events.onSubmitSuccess);
      else {
        F.value = {};
        const be = [];
        for (const [ne, de] of p.value) {
          const Re = _.errors[ne];
          Re && (de.setupBackendErrors(Re), be.push(ne));
        }
        Object.entries(_.errors).forEach((ne) => {
          be.includes(ne[0]) || (F.value[ne[0]] = ne[1]);
        }), w((W = u.value) == null ? void 0 : W.events.onSubmitUnsuccess);
      }
      z.value = !1;
    }
    async function G(f) {
      var W, ye, be;
      if (!u.value.allowBulk || $.value === "edit") {
        console.warn("Submit64 : you are not allowed to submitBulk");
        return;
      }
      if (!oe())
        return;
      w((W = u.value) == null ? void 0 : W.events.onSubmit), z.value = !0, b();
      const _ = te(), R = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: _,
        bulkCount: f,
        context: t.context
      });
      if (S = R.bulk_data, R.success)
        F.value = {}, $.value === "create" && ($.value = "edit"), r && R.resource_data && (r.resource_data = R.resource_data), u.value = me.getForm(
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
          ue,
          t.eventManager
        ), M(), n = JSON.stringify(te()), w((be = u.value) == null ? void 0 : be.events.onSubmitSuccess);
      else {
        F.value = {};
        const ne = [];
        for (const [de, Re] of p.value) {
          const Ue = R.errors[de];
          Ue && (Re.setupBackendErrors(Ue), ne.push(de));
        }
        Object.entries(R.errors).forEach((de) => {
          ne.includes(de[0]) || (F.value[de[0]] = de[1]);
        }), w((ye = u.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
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
      for (const _ in A) {
        const R = A[_];
        if (R) {
          const W = P({
            inheritAttrs: !1,
            setup(ye, { attrs: be, slots: ne }) {
              return () => R({
                ...ye,
                ...be,
                innerSlots: ne
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
    function te() {
      const f = {};
      for (const [_, R] of p.value)
        f[_] = R.getValueDeserialized();
      return f;
    }
    function ve() {
      const f = {};
      for (const [_, R] of p.value)
        f[_] = R.getValueSerialized();
      return f;
    }
    function oe() {
      var _;
      let f = !0;
      return p.value.forEach((R) => {
        if (!R.validate()) {
          f = !1;
          return;
        }
      }), w((_ = u.value) == null ? void 0 : _.events.onValidated), f;
    }
    function v() {
      let f = !0;
      return p.value.forEach((_) => {
        if (!_.isValid()) {
          f = !1;
          return;
        }
      }), f;
    }
    function x() {
      return !v();
    }
    function M() {
      g.value.forEach((f) => {
        f.softReset();
      });
    }
    function Ce() {
      var f;
      p.value.forEach((_) => {
        _.reset();
      }), w((f = u.value) == null ? void 0 : f.events.onReset);
    }
    function ke() {
      var f;
      p.value.forEach((_) => {
        _.clear();
      }), w((f = u.value) == null ? void 0 : f.events.onClear);
    }
    function Ve() {
      p.value.forEach((f) => {
        f.resetValidation();
      });
    }
    function b() {
      p.value.forEach((f) => {
        f.setupBackendErrors([]);
      });
    }
    function E(f) {
      if (r)
        return r.resource_data[f];
    }
    function se(f) {
      return g.value.get(f);
    }
    function Se(f) {
      return [...g.value.values()].at(f);
    }
    function Ae() {
      return g.value;
    }
    function Ke(f) {
      return p.value.get(f);
    }
    function Xe() {
      return p.value;
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
      ].forEach((_) => {
        (t[_] === null || t[_] === void 0) && console.warn(`Missing props for <Submit64> -> ${_}`);
      });
    }
    function tt() {
      return a($);
    }
    function nt() {
      return n !== JSON.stringify(te());
    }
    function at(f) {
      u.value && (u.value.context = f);
    }
    function ot(f) {
      u.value && (u.value.cssClass = f);
    }
    function rt(f) {
      u.value && (u.value.readonly = f);
    }
    function lt() {
      return V.value;
    }
    function it() {
      return m;
    }
    function st() {
      return S;
    }
    function ut() {
      return u;
    }
    function dt(f) {
      var _;
      return (_ = u.value) == null ? void 0 : _.sections.find((R) => R.name === f);
    }
    function ct(f) {
      var _;
      return (_ = u.value) == null ? void 0 : _.sections.map((R) => R.fields).flat().find((R) => R.metadata.field_name === f);
    }
    function ft(f, _) {
      g.value.set(f, _), i === g.value.size && (B.value = !0);
    }
    function mt(f, _) {
      p.value.set(f, _), c === p.value.size && (N.value = !0);
    }
    function pt(f, _) {
      f.fieldsComponent = _;
    }
    const Ie = {
      getFormRef: ut,
      getSectionRef: dt,
      getFieldRef: ct,
      registerSectionWrapperRef: ft,
      registerFieldWrapperRef: mt,
      setSectionFieldComponent: pt
    }, gt = new Proxy({}, {
      get(f, _) {
        var R;
        return (R = u.value) == null ? void 0 : R[_];
      }
    }), ue = {
      getMode: tt,
      getSectionByName: se,
      getSectionByIndex: Se,
      getSections: Ae,
      getFieldByName: Ke,
      getFields: Xe,
      validate: oe,
      isValid: v,
      isInvalid: x,
      softReset: M,
      reset: Ce,
      clear: ke,
      resetValidation: Ve,
      submit: k,
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
    const ht = ie(() => v()), vt = ie(() => x()), yt = ie(() => ve());
    return Q(
      () => B.value && N.value,
      (f) => {
        var _;
        f && !V.value && (w((_ = u.value) == null ? void 0 : _.events.onReady), V.value = !0);
      }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsValid;
      },
      (f) => {
        l == null || l(), l = null, f && (l = Q(ht, (_) => {
          var R;
          _ && w((R = u.value) == null ? void 0 : R.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onIsInvalid;
      },
      (f) => {
        s == null || s(), s = null, f && (s = Q(vt, (_) => {
          var R;
          _ && w((R = u.value) == null ? void 0 : R.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Q(
      () => {
        var f;
        return (f = u.value) == null ? void 0 : f.events.onUpdate;
      },
      (f) => {
        d == null || d(), d = null, f && (d = Q(
          yt,
          () => {
            var _;
            w((_ = u.value) == null ? void 0 : _.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), Y(async () => {
      et(), await D(), _e(() => {
        n = JSON.stringify(te());
      });
    }), (f, _) => we((h(), I("div", ma, [
      j("div", {
        class: X(u.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (h(!0), I(pe, null, ge(u.value.sections, (R) => (h(), q(bn, {
          key: R.name,
          section: R,
          formApi: ue,
          privateFormApi: Ie
        }, {
          default: y(() => [
            (h(!0), I(pe, null, ge(R.fields, (W) => (h(), q(fa, {
              key: W.metadata.field_name,
              field: W,
              formApi: ue,
              privateFormApi: Ie
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (h(), q(ae(u.value.orphanErrorsComponent), {
        orphanErrors: F.value,
        formApi: ue
      }, null, 8, ["orphanErrors"])),
      (h(), q(ae(u.value.actionComponent), {
        isLoadingSubmit: z.value,
        formApi: ue
      }, null, 8, ["isLoadingSubmit"]))
    ], 512)), [
      [ze, V.value]
    ]);
  }
});
export {
  Be as DynamicLogicBuilder,
  K as Submit64,
  va as Submit64Form
};
