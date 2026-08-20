var At = Object.defineProperty;
var xt = (o, e, t) => e in o ? At(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var U = (o, e, t) => xt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as M, openBlock as p, createElementBlock as z, createElementVNode as G, createVNode as k, unref as u, mergeProps as I, createBlock as E, createCommentVNode as P, normalizeClass as nt, toDisplayString as j, resolveDynamicComponent as ie, resolveComponent as Et, normalizeProps as ue, guardReactiveProps as ce, withCtx as b, createTextVNode as ne, Fragment as pe, renderList as ge, ref as O, computed as H, onMounted as K, nextTick as Fe, watch as J, markRaw as X, useSlots as at, getCurrentInstance as ot, withDirectives as He, vShow as Ge, readonly as Ne } from "vue";
import { QBtn as Z, QIcon as Ae, QItem as ve, QItemSection as ae, QItemLabel as oe, QInput as xe, QPopupProxy as $e, QDate as rt, QTime as Rt, QCheckbox as Ot, QSelect as Qe, QColor as Tt, QEditor as Bt, IconSet as we, Lang as Ue, QUploader as it, QList as ze, QSeparator as lt, QUploaderAddTrigger as st, date as L } from "quasar";
const Nt = { class: "flex column" }, wt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ut = /* @__PURE__ */ M({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), z("div", Nt, [
      G("div", wt, [
        k(u(Z), I(e.formApi.form.bindings.form.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (p(), E(u(Z), I({ key: 0 }, e.formApi.form.bindings.form.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.formApi.form.formSettings.showClearButton ? (p(), E(u(Z), I({ key: 1 }, e.formApi.form.bindings.form.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), $t = { class: "flex row items-center" }, zt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, It = /* @__PURE__ */ M({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), z("div", {
      class: nt(e.sectionApi.section.cssClass)
    }, [
      G("div", $t, [
        e.sectionApi.section.icon ? (p(), E(u(Ae), I({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : P("", !0),
        G("div", zt, j(e.sectionApi.section.label), 1)
      ]),
      G("div", qt, [
        (p(), E(ie(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Pt = /* @__PURE__ */ M({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Et("q-icon");
      return p(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (r) => e.reset())
      });
    };
  }
}), Lt = /* @__PURE__ */ M({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), E(u(ve), ue(ce(e.itemProps)), {
      default: b(() => [
        k(u(ae), null, {
          default: b(() => [
            k(u(oe), null, {
              default: b(() => [
                ne(j(e.entry.label), 1)
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
}), jt = { class: "flex column" }, Mt = /* @__PURE__ */ M({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), z("div", jt, [
      (p(!0), z(pe, null, ge(e.formApi.refs.orphanErrors.value, (n, r) => (p(), z("div", {
        key: r,
        class: "q-field--error q-field__bottom text-negative"
      }, j(r) + " : " + j(n.join(",")), 1))), 128))
    ]));
  }
}), Y = {
  outlined: void 0,
  dense: void 0,
  filled: void 0,
  standout: void 0,
  borderless: void 0,
  rounded: void 0,
  square: void 0,
  color: "primary",
  hideBottomSpace: void 0
}, he = {
  hideBottomSpace: Y.hideBottomSpace,
  outlined: Y.outlined,
  dense: Y.dense,
  filled: Y.filled,
  standout: Y.standout,
  borderless: Y.borderless,
  rounded: Y.rounded,
  square: Y.square,
  color: Y.color,
  lazyRules: !1
}, qe = {
  cover: !0
};
function Ht() {
  return {
    ...he
  };
}
function Gt() {
  return {
    ...he
  };
}
function Qt() {
  return {
    input: {
      ...he
    },
    icon: {
      name: "colorize",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...qe
    },
    color: {}
  };
}
function Yt() {
  return {
    fonts: {
      arial: "Arial",
      arial_black: "Arial Black",
      comic_sans: "Comic Sans MS",
      courier_new: "Courier New",
      impact: "Impact",
      lucida_grande: "Lucida Grande",
      times_new_roman: "Times New Roman",
      verdana: "Verdana"
    }
  };
}
function Wt() {
  return {
    color: Y.color
  };
}
function Jt() {
  return {
    input: {
      ...he
    },
    icon: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...qe
    },
    date: {
      color: Y.color
    },
    btn: {
      label: "Fermer",
      color: Y.color
    }
  };
}
function Kt() {
  return {
    input: {
      ...he
    },
    iconDate: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...qe
    },
    date: {
      color: Y.color
    },
    btnDate: {
      label: "Fermer",
      color: Y.color
    },
    iconDatetime: {
      name: "access_time",
      class: "cursor-pointer"
    },
    popupProxyDatetime: {
      ...qe
    },
    datetime: {
      format24h: !0
    },
    btnDatetime: {
      label: "Fermer",
      color: Y.color
    }
  };
}
function Xt() {
  return {
    select: {
      ...he
    }
  };
}
function Zt() {
  return {
    select: {
      ...he
    }
  };
}
function en() {
  return {
    select: {
      ...he
    }
  };
}
function tn() {
  return {
    uploader: {
      color: Y.color
    }
  };
}
function nn() {
  return {
    uploader: {
      color: Y.color
    }
  };
}
function an() {
  return {};
}
function on() {
  return {
    submitBtn: {
      label: "Enregistrer"
    },
    resetBtn: {
      label: "Réinitialiser"
    },
    clearBtn: {
      label: "Effacer"
    }
  };
}
function rn() {
  return {
    fields: {
      string: Ht(),
      number: Gt(),
      wysiwyg: Yt(),
      color: Qt(),
      checkbox: Wt(),
      date: Jt(),
      datetime: Kt(),
      select: en(),
      hasMany: Zt(),
      belongsTo: Xt(),
      attachmentBelongsTo: tn(),
      attachmentHasMany: nn()
    },
    sections: an(),
    form: {
      actions: on()
    }
  };
}
function ln() {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {},
      date: {},
      datetime: {},
      belongsTo: {},
      hasMany: {},
      attachmentBelongsTo: {},
      attachmentHasMany: {},
      select: {},
      checkbox: {}
    },
    sections: {},
    form: {
      actions: {}
    }
  };
}
const ut = {
  getDefaultFormBindings: rn,
  getEmptyDefaultBindings: ln
};
function sn(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function un(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
function ct(o, e) {
  const t = { ...o };
  for (const a of Object.keys(e)) {
    const n = e[a], r = t[a];
    n && typeof n == "object" && !Array.isArray(n) && r && typeof r == "object" && !Array.isArray(r) ? t[a] = ct(
      r,
      n
    ) : n !== void 0 && (t[a] = n);
  }
  return t;
}
function cn(o) {
  return JSON.parse(JSON.stringify(o));
}
const m = {
  callAllEvents: sn,
  humanStorageSize: un,
  deepMergeObject: ct,
  deepDupeObject: cn
}, Pe = class Pe {
  constructor() {
    U(this, "_formSettings");
    U(this, "_formBind");
    U(this, "_actionComponent");
    U(this, "_orphanErrorsComponent");
    U(this, "_sectionComponent");
    U(this, "_wrapperResetComponent");
    U(this, "_associationDisplayComponent");
    this._formSettings = {
      backendDateFormat: "YYYY/MM/DD",
      backendDatetimeFormat: "YYYY/MM/DD HH:mm",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      associationEmptyMessage: "Vide",
      renderBackendHint: !0,
      requiredFieldsHasAsterisk: !0,
      showResetButton: !0,
      showClearButton: !0,
      autofocus: !0
    }, this._formBind = ut.getDefaultFormBindings(), this._actionComponent = Ut, this._orphanErrorsComponent = Mt, this._sectionComponent = It, this._wrapperResetComponent = Pt, this._associationDisplayComponent = Lt;
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = m.deepMergeObject(
      m.deepDupeObject(this._instance._formSettings),
      m.deepDupeObject(e)
    );
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBind = m.deepMergeObject(
      m.deepDupeObject(this._instance._formBind),
      m.deepDupeObject(e)
    );
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
  static getGlobalFormBind() {
    return this._instance._formBind;
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
U(Pe, "_instance", new Pe());
let ee = Pe;
class Ie {
  constructor(e) {
    U(this, "formApi");
    U(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, r = new dn(a, n, this.formApi);
    return this.events.push(r), new fn(r);
  }
  static create(e) {
    return new Ie(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((a) => {
      const n = a.getTarget();
      switch (n.target) {
        case "field":
          t.fields[n.targetName] || (t.fields[n.targetName] = {}), t.fields[n.targetName][n.key] || (t.fields[n.targetName][n.key] = []), t.fields[n.targetName][n.key].push(a.getActionCallback());
          break;
        case "section":
          t.sections[n.targetName] || (t.sections[n.targetName] = {}), t.sections[n.targetName][n.key] || (t.sections[n.targetName][n.key] = []), t.sections[n.targetName][n.key].push(a.getActionCallback());
          break;
        case "form":
          t.form[n.key] || (t.form[n.key] = []), t.form[n.key].push(
            a.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class dn {
  constructor(e, t, a) {
    U(this, "type");
    U(this, "data");
    U(this, "formApi");
    U(this, "action", () => {
    });
    U(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = a;
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
class fn {
  constructor(e) {
    U(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const mn = { class: "row items-center justify-end" }, pn = /* @__PURE__ */ M({
  __name: "DateField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O(), a = O();
    function n() {
      t.value && t.value.hide();
    }
    function r() {
      return a.value ? a.value.validate() : !1;
    }
    function g() {
      return a.value ? !a.value.hasError : !1;
    }
    function i() {
      a.value && a.value.resetValidation();
    }
    function _() {
      a.value && a.value.focus();
    }
    function S() {
      a.value && a.value.blur();
    }
    const s = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(r, g, i, void 0, void 0, _, S), Fe(() => {
        var N;
        (N = a.value) == null || N.resetValidation();
      });
    }), (N, d) => (p(), E(u(xe), I({
      ref_key: "fieldRef",
      ref: a
    }, s.value.input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: b(() => [
        k(u(Ae), ue(ce(s.value.icon)), {
          default: b(() => [
            k(u($e), I({
              ref_key: "popupProxyRef",
              ref: t
            }, s.value.popupProxy), {
              default: b(() => [
                k(u(rt), I(s.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    G("div", mn, [
                      k(u(Z), I(s.value.btn, { onClick: n }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16, ["model-value", "mask", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"]));
  }
}), gn = { class: "row items-center justify-end" }, vn = { class: "row items-center justify-end" }, hn = /* @__PURE__ */ M({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O(), a = O(), n = O();
    function r() {
      t.value && t.value.hide();
    }
    function g() {
      a.value && a.value.hide();
    }
    function i() {
      return n.value ? n.value.validate() : !1;
    }
    function _() {
      return n.value ? !n.value.hasError : !1;
    }
    function S() {
      n.value && n.value.resetValidation();
    }
    function s() {
      n.value && n.value.focus();
    }
    function N() {
      n.value && n.value.blur();
    }
    const d = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(i, _, S, void 0, void 0, s, N), Fe(() => {
        var F;
        (F = n.value) == null || F.resetValidation();
      });
    }), (F, w) => (p(), E(u(xe), I({
      ref_key: "fieldRef",
      ref: n
    }, d.value.input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: b(() => [
        k(u(Ae), ue(ce(d.value.iconDate)), {
          default: b(() => [
            k(u($e), I({ ref: "popupProxyRef" }, d.value.popupProxyDate), {
              default: b(() => [
                k(u(rt), I(d.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    G("div", gn, [
                      k(u(Z), I(d.value.btnDate, { onClick: r }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16, ["model-value", "mask", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 16),
        k(u(Ae), ue(ce(d.value.iconDatetime)), {
          default: b(() => [
            k(u($e), I({
              ref_key: "timePopupProxyRef",
              ref: a
            }, d.value.popupProxyDate), {
              default: b(() => [
                k(u(Rt), I(d.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    G("div", vn, [
                      k(u(Z), I(d.value.btnDatetime, { onClick: g }), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16, ["model-value", "mask", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"]));
  }
}), bn = { class: "flex column" }, yn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, _n = /* @__PURE__ */ M({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O(!0);
    function a() {
      return t.value === !0;
    }
    function n() {
      return t.value === !0;
    }
    function r() {
      t.value = !0;
    }
    return J(
      () => e.modelValue,
      (g) => {
        for (const i of e.field.computedRules)
          if (t.value = i(g), t.value !== !0)
            break;
      }
    ), K(() => {
      e.registerBehaviourCallbacks(a, n, r);
    }), (g, i) => (p(), z("div", bn, [
      k(u(Ot), I({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (p(), z("div", yn, j(t.value), 1)) : P("", !0)
    ]));
  }
}), Cn = /* @__PURE__ */ M({
  __name: "SelectField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O([]), a = O([]), n = O();
    function r(w, D) {
      if (w === "") {
        D(() => {
          a.value = [...t.value];
        });
        return;
      }
      D(() => {
        const T = w.toLowerCase();
        a.value = t.value.filter((B) => B.label.toLowerCase().includes(T));
      });
    }
    function g() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function i() {
      return n.value ? n.value.validate() : !1;
    }
    function _() {
      return n.value ? !n.value.hasError : !1;
    }
    function S() {
      n.value && n.value.resetValidation();
    }
    function s() {
      a.value = [];
    }
    function N() {
      n.value && n.value.focus();
    }
    function d() {
      n.value && n.value.blur();
    }
    const F = H(() => e.field.bindings);
    return K(() => {
      g(), e.registerBehaviourCallbacks(i, _, S, void 0, s, N, d);
    }), (w, D) => (p(), E(u(Qe), I({
      ref_key: "fieldRef",
      ref: n
    }, F.value.select, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: r,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      "no-option": b(() => [
        k(u(ve), ue(ce(F.value.itemNoOption)), {
          default: b(() => [
            k(u(ae), null, {
              default: b(() => [
                k(u(oe), null, {
                  default: b(() => [
                    ne(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"]));
  }
}), Xe = "__init", Ze = /* @__PURE__ */ M({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = O([]), n = O(
      i()
    ), r = O(), g = O(Xe);
    function i() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function _(A, f) {
      if (A === g.value) {
        f(() => {
        });
        return;
      }
      const l = e.formApi.getAssociationDataCallback();
      n.value = i(), g.value = A;
      const h = e.formApi.form;
      n.value.isLoading = !0, l({
        resourceName: h.resourceName,
        resourceId: h.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: h.context
      }).then((V) => {
        f(() => {
          a.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = i();
      });
    }
    function S() {
      var f, l;
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = [
        {
          label: ((f = e.field.associationData[0]) == null ? void 0 : f.label) ?? "???",
          value: A,
          data: (l = e.field.associationData[0]) == null ? void 0 : l.data
        }
      ]);
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function N() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function F() {
      n.value = i(), a.value = [], g.value = Xe;
    }
    function w(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const l = e.formApi.form, h = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, h({
          resourceName: l.resourceName,
          resourceId: l.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: g.value,
          context: l.context
        }).then((V) => {
          a.value = a.value.concat(
            V.rows
          ), n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), V.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, A.ref.refresh();
        });
      }
    }
    function D() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const B = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        N,
        d,
        S,
        F,
        D,
        T
      ), Fe(() => {
        S();
      });
    }), (A, f) => (p(), E(u(Qe), I({
      ref_key: "fieldRef",
      ref: r
    }, B.value.select, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      onClear: e.clear,
      onFilter: _,
      onVirtualScroll: w,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      "no-option": b(() => [
        k(u(ve), ue(ce(B.value.itemNoOption)), {
          default: b(() => [
            k(u(ae), null, {
              default: b(() => [
                k(u(oe), null, {
                  default: b(() => [
                    ne(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16)
      ]),
      option: b((l) => [
        (p(), E(ie(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: l.opt,
          itemProps: l.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"]));
  }
}), et = "__init", tt = /* @__PURE__ */ M({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = O([]), n = O(
      i()
    ), r = O(), g = O(et);
    function i() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function _(A, f) {
      if (A === g.value) {
        f(() => {
        });
        return;
      }
      const l = e.formApi.getAssociationDataCallback();
      n.value = i(), g.value = A;
      const h = e.formApi.form;
      n.value.isLoading = !0, l({
        resourceName: h.resourceName,
        resourceId: h.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: h.context
      }).then((V) => {
        f(() => {
          a.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = i();
      });
    }
    function S() {
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = A.map((f, l) => ({
        label: e.field.associationData[l].label ?? "???",
        value: f,
        data: e.field.associationData[l].data
      })));
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function N() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function F() {
      n.value = i(), a.value = [], g.value = et;
    }
    function w(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const l = e.formApi.form, h = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, h({
          resourceName: l.resourceName,
          resourceId: l.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: g.value,
          context: l.context
        }).then((V) => {
          a.value = a.value.concat(
            V.rows
          ), n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), V.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, A.ref.refresh();
        });
      }
    }
    function D() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const B = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        N,
        d,
        S,
        F,
        D,
        T
      ), Fe(() => {
        S();
      });
    }), (A, f) => (p(), E(u(Qe), I({
      ref_key: "fieldRef",
      ref: r
    }, B.value.select, {
      "model-value": e.modelValue,
      label: e.field.label,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      options: a.value,
      mapOptions: !0,
      emitValue: !0,
      useInput: !0,
      multiple: !0,
      "use-chips": !0,
      "onUpdate:modelValue": e.modelValueOnUpdate,
      onClear: e.clear,
      onFilter: _,
      onVirtualScroll: w
    }), {
      "no-option": b(() => [
        k(u(ve), ue(ce(B.value.itemNoOption)), {
          default: b(() => [
            k(u(ae), null, {
              default: b(() => [
                k(u(oe), null, {
                  default: b(() => [
                    ne(j(e.formApi.form.formSettings.associationEmptyMessage), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16)
      ]),
      option: b((l) => [
        (p(), E(ie(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: l.opt,
          itemProps: l.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"]));
  }
}), je = /* @__PURE__ */ M({
  __name: "StringField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function g() {
      t.value && t.value.focus();
    }
    function i() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (_, S) => (p(), E(u(xe), I({
      ref_key: "fieldRef",
      ref: t
    }, e.field.bindings, {
      rules: e.field.computedRules,
      label: e.field.label,
      readonly: e.field.readonly,
      class: e.field.cssClass,
      "model-value": e.modelValue,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["rules", "label", "readonly", "class", "model-value", "onClear", "onUpdate:modelValue"]));
  }
}), Fn = /* @__PURE__ */ M({
  __name: "NumberField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function g() {
      t.value && t.value.focus();
    }
    function i() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (_, S) => (p(), E(u(xe), I({
      ref_key: "fieldRef",
      ref: t
    }, e.field.bindings, {
      "model-value": e.modelValue,
      type: "number",
      rules: e.field.computedRules,
      label: e.field.label,
      readonly: e.field.readonly,
      class: e.field.cssClass,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["model-value", "rules", "label", "readonly", "class", "onClear", "onUpdate:modelValue"]));
  }
}), Vn = /* @__PURE__ */ M({
  __name: "ColorField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function g() {
      t.value && t.value.focus();
    }
    function i() {
      t.value && t.value.blur();
    }
    const _ = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (S, s) => (p(), E(u(xe), I({
      ref_key: "fieldRef",
      ref: t
    }, _.value.input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: b(() => [
        k(u(Ae), ue(ce(_.value.icon)), {
          default: b(() => [
            k(u($e), ue(ce(_.value.popupProxy)), {
              default: b(() => [
                k(u(Tt), I(_.value.color, {
                  "model-value": e.modelValue,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), null, 16, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"]));
  }
}), kn = /* @__PURE__ */ M({
  __name: "WysiwygField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O();
    function a() {
      return !!t.value;
    }
    function n() {
      return !!t.value;
    }
    function r() {
    }
    function g(d) {
      var w;
      d.preventDefault(), d.stopPropagation();
      const F = (w = d.clipboardData) == null ? void 0 : w.items;
      if (F)
        for (let D = 0; D < F.length; D++) {
          const T = F[D];
          if (T.type.startsWith("image/")) {
            const B = T.getAsFile();
            B && _(B);
          }
        }
    }
    function i(d) {
      var w;
      d.preventDefault(), d.stopPropagation();
      const F = (w = d.dataTransfer) == null ? void 0 : w.files;
      if (F)
        for (let D = 0; D < F.length; D++) {
          const T = F[D];
          T.type.startsWith("image/") && T && _(T);
        }
    }
    function _(d) {
      if (!t.value)
        return;
      const F = new FileReader();
      F.onload = (w) => {
        var T;
        const D = (T = w.target) == null ? void 0 : T.result;
        if (typeof D == "string") {
          const B = new Image();
          B.onload = () => {
            var l;
            const A = B.width, f = B.height;
            (l = t.value) == null || l.runCmd(
              "insertHTML",
              `<img src="${D}" width="${A}" height="${f}" style="max-width: 80%; height: auto;" />`
            );
          }, B.src = D;
        }
      }, F.readAsDataURL(d);
    }
    function S() {
      t.value && t.value.focus();
    }
    function s() {
      t.value && t.value.getContentEl().blur();
    }
    function N() {
      return [
        [
          {
            label: Ue.props.editor.align,
            icon: we.props.editor.align,
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
            label: Ue.props.editor.formatting,
            icon: we.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: Ue.props.editor.fontSize,
            icon: we.props.editor.fontSize,
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
            label: Ue.props.editor.defaultFont,
            icon: we.props.editor.font,
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
      ];
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        a,
        n,
        r,
        void 0,
        void 0,
        S,
        s
      );
    }), (d, F) => (p(), E(u(Bt), I({
      ref_key: "fieldRef",
      ref: t,
      toolbar: N()
    }, e.field.bindings, {
      "model-value": e.modelValue,
      onDrop: i,
      onPaste: g,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["toolbar", "model-value", "onUpdate:modelValue"]));
  }
}), Sn = /* @__PURE__ */ M({
  __name: "JsonField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    return (e, t) => " TODO ";
  }
}), Dn = { class: "flex column" }, An = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, xn = { class: "col" }, En = { class: "q-uploader__title" }, Rn = {
  key: 0,
  class: "flex column"
}, On = {
  key: 2,
  class: "flex column"
}, Tn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Bn = /* @__PURE__ */ M({
  __name: "AttachmentHasOneField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O(null), a = O(!1);
    function n() {
      let l = e.modelValue;
      l.add = [], l.delete = [], e.modelValueOnUpdate(l), D();
    }
    function r() {
      var h;
      let l = e.modelValue;
      l.add = [], l.delete = ((h = e.field.attachmentData) == null ? void 0 : h.map((V) => V.attachment_id)) ?? [], e.modelValueOnUpdate(l), D();
    }
    function g() {
      return D(), i();
    }
    function i() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function S(l) {
      return new Promise((h) => {
        const V = new Blob([l]), R = new FileReader();
        R.onload = (Q) => {
          var le;
          const de = ((le = Q.target) == null ? void 0 : le.result) ?? "", [se, te] = de.split(",");
          h(te);
        }, R.readAsDataURL(V);
      });
    }
    async function s(l) {
      return {
        key: `${l.lastModified}${l.name}`,
        size: l.size,
        filename: l.name,
        contentType: l.type,
        base64: await S(await l.arrayBuffer())
      };
    }
    async function N(l) {
      if (!l[0])
        return;
      a.value = !0;
      const h = await s(l[0]);
      let V = e.modelValue;
      V.add = [h], a.value = !1, e.modelValueOnUpdate(V), D();
    }
    function d(l) {
      if (!l[0])
        return;
      let h = e.modelValue;
      h.add = [], h.delete = [], e.modelValueOnUpdate(h), D();
    }
    function F(l) {
      let h = e.modelValue;
      h.delete = [l.attachment_id], e.modelValueOnUpdate(h), D();
    }
    function w() {
      let l = e.modelValue;
      l.delete = [], e.modelValueOnUpdate(l), D();
    }
    function D() {
      t.value = null;
      for (const l of e.field.computedRules) {
        const h = l(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    const T = H(() => (e.field.attachmentData ?? []).length === 0), B = H(() => e.modelValue ? e.modelValue.delete : []), A = H(() => {
      var l, h;
      return e.modelValue ? (((l = e.field.attachmentData) == null ? void 0 : l.length) ?? 0) === 0 || (((h = e.field.attachmentData) == null ? void 0 : h.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), f = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (l, h) => (p(), z("div", Dn, [
      k(u(it), I(f.value.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: N,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: b((V) => [
          G("div", An, [
            G("div", xn, [
              G("div", En, j(e.field.label), 1)
            ]),
            V.canAddFiles && A.value ? (p(), E(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: V.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                k(u(st))
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: b((V) => [
          T.value ? P("", !0) : (p(), z("div", Rn, [
            h[0] || (h[0] = G("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            k(u(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), z(pe, null, ge(e.field.attachmentData ?? [], (R) => (p(), E(u(ve), {
                  key: R.attachment_id
                }, {
                  default: b(() => [
                    k(u(ae), null, {
                      default: b(() => [
                        k(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(j(R.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(j(u(m).humanStorageSize(R.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (p(), E(u(ae), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        B.value.includes(R.attachment_id) ? P("", !0) : (p(), E(u(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Q) => F(R)
                        }, null, 8, ["disable", "onClick"])),
                        B.value.includes(R.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(u(Z), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: w
                        }, null, 8, ["disable"])) : P("", !0)
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
          !T.value && V.files.length > 0 ? (p(), E(u(lt), { key: 1 })) : P("", !0),
          V.files.length > 0 ? (p(), z("div", On, [
            h[1] || (h[1] = G("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            k(u(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), z(pe, null, ge(V.files, (R) => (p(), E(u(ve), {
                  key: R.__key
                }, {
                  default: b(() => [
                    k(u(ae), null, {
                      default: b(() => [
                        k(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(j(R.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(j(R.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    k(u(ae), {
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        k(u(Z), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Q) => V.removeFile(R)
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
      }, 16, ["label", "class", "readonly"]),
      t.value !== null ? (p(), z("div", Tn, j(t.value), 1)) : P("", !0)
    ]));
  }
}), Nn = { class: "flex column" }, wn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, Un = { class: "col" }, $n = { class: "q-uploader__title" }, zn = {
  key: 0,
  class: "flex column"
}, qn = { class: "text-weight-medium text-body2" }, In = {
  key: 2,
  class: "flex column"
}, Pn = { class: "text-weight-medium text-body2" }, Ln = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, jn = /* @__PURE__ */ M({
  __name: "AttachmentHasManyField",
  props: {
    modelValue: {},
    field: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(o) {
    const e = o, t = O(null), a = O(!1);
    function n() {
      let f = e.modelValue;
      f.add = [], f.delete = [], e.modelValueOnUpdate(f), D();
    }
    function r() {
      var l;
      let f = e.modelValue;
      f.add = [], f.delete = ((l = e.field.attachmentData) == null ? void 0 : l.map((h) => h.attachment_id)) ?? [], e.modelValueOnUpdate(f), D();
    }
    function g() {
      return D(), i();
    }
    function i() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function S(f) {
      return new Promise((l) => {
        const h = new Blob([f]), V = new FileReader();
        V.onload = (R) => {
          var te;
          const Q = ((te = R.target) == null ? void 0 : te.result) ?? "", [de, se] = Q.split(",");
          l(se);
        }, V.readAsDataURL(h);
      });
    }
    async function s(f) {
      return {
        key: `${f.lastModified}${f.name}`,
        size: f.size,
        filename: f.name,
        contentType: f.type,
        base64: await S(await f.arrayBuffer())
      };
    }
    async function N(f) {
      a.value = !0;
      for (const l of f) {
        const h = await s(l);
        let V = e.modelValue;
        V.add.push(h), e.modelValueOnUpdate(V);
      }
      a.value = !1, D();
    }
    async function d(f) {
      a.value = !0;
      for (const l of f) {
        const h = await s(l);
        let V = e.modelValue;
        V.add = V.add.filter((R) => R.key !== h.key), e.modelValueOnUpdate(V);
      }
      a.value = !1, D();
    }
    function F(f) {
      let l = e.modelValue;
      l.delete.push(f.attachment_id), e.modelValueOnUpdate(l), D();
    }
    function w(f) {
      let l = e.modelValue;
      l.delete = l.delete.filter((h) => h !== f.attachment_id), e.modelValueOnUpdate(l), D();
    }
    function D() {
      t.value = null;
      for (const f of e.field.computedRules) {
        const l = f(e.modelValue);
        if (typeof l == "string") {
          t.value = l;
          break;
        }
      }
    }
    const T = H(() => (e.field.attachmentData ?? []).length === 0), B = H(() => e.modelValue ? e.modelValue.delete : []), A = H(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (f, l) => (p(), z("div", Nn, [
      k(u(it), I(A.value.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: N,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: b((h) => [
          G("div", wn, [
            G("div", Un, [
              G("div", $n, j(e.field.label), 1)
            ]),
            h.canAddFiles ? (p(), E(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: h.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                k(u(st))
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: b((h) => {
          var V;
          return [
            T.value ? P("", !0) : (p(), z("div", zn, [
              G("div", qn, "Fichier" + j((((V = e.field.attachmentData) == null ? void 0 : V.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              k(u(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), z(pe, null, ge(e.field.attachmentData ?? [], (R) => (p(), E(u(ve), {
                    key: R.attachment_id
                  }, {
                    default: b(() => [
                      k(u(ae), null, {
                        default: b(() => [
                          k(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(j(R.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(j(u(m).humanStorageSize(R.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (p(), E(u(ae), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          B.value.includes(R.attachment_id) ? P("", !0) : (p(), E(u(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Q) => F(R)
                          }, null, 8, ["disable", "onClick"])),
                          B.value.includes(R.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(u(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Q) => w(R)
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
            !T.value && h.files.length > 0 ? (p(), E(u(lt), { key: 1 })) : P("", !0),
            h.files.length > 0 ? (p(), z("div", In, [
              G("div", Pn, "Fichier" + j(h.files.length > 0 ? "s" : "") + " à ajouter", 1),
              k(u(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), z(pe, null, ge(h.files, (R) => (p(), E(u(ve), {
                    key: R.__key
                  }, {
                    default: b(() => [
                      k(u(ae), null, {
                        default: b(() => [
                          k(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(j(R.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(j(R.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      k(u(ae), {
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          k(u(Z), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Q) => h.removeFile(R)
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
          ];
        }),
        _: 1
      }, 16, ["label", "class", "readonly"]),
      t.value !== null ? (p(), z("div", Ln, j(t.value), 1)) : P("", !0)
    ]));
  }
});
function Mn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (S, s, N) => S[s] ? N ? () => g(S[s]) : () => S[s] : S.compare_to ? () => {
    var d;
    return ((d = e.getFieldByName(S.compare_to)) == null ? void 0 : d.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", g = (S) => String(
    L.formatDate(
      L.extractDate(S, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), i = [], _ = [];
  switch (a) {
    case "date":
      i.push(Me(n.formSettings.dateFormat));
      break;
    case "datetime":
      i.push(Me(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((S) => {
    const s = S;
    switch (s.type) {
      case "required":
        i.push(Hn());
        break;
      case "absence":
        i.push(Qn());
        break;
      case "acceptance":
        i.push(Yn());
        break;
      case "inclusion":
        i.push(dt(s.including));
        break;
      case "exclusion":
        i.push(Gn(s.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        _.push("allowNull");
        break;
      case "allowBlank":
        _.push("allowBlank");
        break;
      case "positiveNumber":
        i.push(Kn());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Xn(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          Zn(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          ea(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          ta(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          na(r(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          aa(
            r(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(oa());
        break;
      case "numberNumericOnly":
        i.push(ra());
        break;
      case "numberEvenOnly":
        i.push(ia());
        break;
      case "numberOddOnly":
        i.push(la());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          sa(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          ua(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          ca(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          da(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          pa(
            r(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          ma(r(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          fa(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          ga(
            r(s, "other_than")
          )
        );
        break;
      case "validDate":
        i.push(Me(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        i.push(
          va(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          ha(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          ba(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          ya(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          _a(
            r(s, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Ca(
            r(s, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        i.push(
          Va()
        );
        break;
      case "allowFileContentType":
        i.push(
          ka(
            r(s, "including")
          )
        );
        break;
      case "equalToFileLength":
        i.push(
          Sa(
            r(s, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        i.push(
          Aa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        i.push(
          Da(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        i.push(
          xa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        i.push(
          Ea(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        i.push(
          Ra(
            r(s, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        i.push(
          Oa(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        i.push(
          Ta(
            r(s, "equal_to")
          )
        );
        break;
    }
  }), _.length > 0 ? _.map((S) => {
    switch (S) {
      case "allowBlank":
        return Jn(i);
      case "allowNull":
        return Wn(i);
    }
  }) : i;
}
function Hn() {
  return (o) => !!o || "Ce champ est requis";
}
function dt(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Gn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${dt.toString()}`
  );
}
function Qn() {
  return (o) => !o || "Ce champ doit être vide";
}
function Yn() {
  return (o) => !!o || "Doit être accepté";
}
function Wn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Jn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Kn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Xn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Zn(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ea(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function ta(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function na(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function aa(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function oa() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function ra() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ia() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function la() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function sa(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ua(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function ca(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function da(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function fa(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function ma(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function pa(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function ga(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function va(o, e) {
  return (t) => {
    const a = o(), n = L.extractDate(String(t), e), r = L.extractDate(a, e);
    return n <= r || `Inf. ou égal à ${a}`;
  };
}
function ha(o, e) {
  return (t) => {
    const a = o(), n = L.extractDate(String(t), e), r = L.extractDate(a, e);
    return n < r || `Inf. à ${a}`;
  };
}
function ba(o, e) {
  return (t) => {
    const a = o(), n = L.extractDate(String(t), e), r = L.extractDate(a, e);
    return n >= r || `Sup. ou égal à ${a}`;
  };
}
function ya(o, e) {
  return (t) => {
    const a = o(), n = L.extractDate(String(t), e), r = L.extractDate(a, e);
    return n > r || `Sup. à ${a}`;
  };
}
function _a(o, e) {
  return (t) => {
    const a = o(), n = L.extractDate(String(t), e), r = L.extractDate(a, e);
    return n === r || `Égale à ${n}`;
  };
}
function Ca(o, e) {
  return (t) => {
    const a = o();
    return L.extractDate(String(t), e) !== L.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Me(o) {
  return (e) => e == null || e === "" ? !0 : Fa(e, o) || `Date invalide. Format : ${o}`;
}
function Fa(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = L.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : L.formatDate(t, e) === o;
}
function Va() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function ka(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    t.add.forEach((g) => {
      n && (a.includes(g.contentType) || (n = !1));
    });
    const r = o.length > 1;
    return n || `Type${r ? "s" : ""} autorisé${r ? "s" : ""} : ${a.join(",")}`;
  };
}
function Sa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && a !== r.size && (n = !1);
    }), n || `Taille par fichier ${m.humanStorageSize(a)}`;
  };
}
function Da(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${m.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${m.humanStorageSize(a)}`;
  };
}
function xa(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.length <= a || `${a} fichier${a > 1 ? "s" : ""} max.`;
  };
}
function Ea(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.length >= a || `${a} fichier${a > 1 ? "s" : ""} min.`;
  };
}
function Ra(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) <= a || `${m.humanStorageSize(a)} max.`;
  };
}
function Oa(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) >= a || `${m.humanStorageSize(a)} min.`;
  };
}
function Ta(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) === a || `Taille totale ${m.humanStorageSize(a)}`;
  };
}
const Ba = {
  computeServerRules: Mn
};
class Ce {
  constructor(e, t, a, n, r, g, i, _, S) {
    U(this, "resourceName");
    U(this, "resourceId");
    U(this, "formMetadataAndData");
    U(this, "context");
    U(this, "formSettings");
    U(this, "formBind");
    U(this, "actionComponent");
    U(this, "orphanErrorsComponent");
    U(this, "sectionComponent");
    U(this, "wrapperResetComponent");
    U(this, "associationDisplayComponent");
    U(this, "dynamicComponentRecord");
    U(this, "formApi");
    U(this, "registerEventCallback");
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = i, this.resourceName = e, this.formApi = _, this.formSettings = m.deepMergeObject(
      m.deepDupeObject(ee.getGlobalFormSetting()),
      m.deepDupeObject(r ?? {})
    ), this.formBind = m.deepMergeObject(
      m.deepDupeObject(ee.getGlobalFormBind()),
      m.deepDupeObject(g ?? {})
    ), this.actionComponent = a.actionComponent ?? ee.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? ee.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? ee.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? ee.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? ee.getGlobalAssociationDisplayComponent(), this.registerEventCallback = S ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: ee.getGlobalFormSetting(),
      events: {},
      bindings: ut.getEmptyDefaultBindings(),
      actionComponent: X(ee.getGlobalActionComponent()),
      orphanErrorsComponent: X(ee.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: X(ee.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, r, g, i, _, S) {
    return new Ce(
      e,
      t,
      a,
      n,
      r,
      g,
      i,
      _,
      S
    ).generateFormDef();
  }
  generateFormDef() {
    const e = Ie.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), a = Ie.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (g, i) => {
        const _ = [];
        g.fields.forEach((F) => {
          const w = this.dynamicComponentRecord[`field-${F.field_name}-before`], D = Ce.getFieldComponentByFormFieldType(F), T = this.dynamicComponentRecord[`field-${F.field_name}-after`], B = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: Ce.getRegularFieldTypeByFieldType(
              F.field_type
            )
          }, A = this.getBindingsByFormFieldType(F);
          let f = F.label;
          this.formSettings.requiredFieldsHasAsterisk && F.rules.find((h) => h.type === "required") && (f = f.concat("*"));
          const l = {
            type: F.field_type,
            extraType: F.field_extra_type,
            metadata: Object.freeze(F),
            label: f,
            readonly: this.formMetadataAndData.form.readonly ?? g.readonly ?? F.readonly ?? void 0,
            cssClass: F.css_class ?? void 0,
            staticSelectOptions: F.static_select_options,
            associationData: F.field_association_data,
            attachmentData: F.field_attachment_data,
            rules: F.rules,
            computedRules: [],
            // late init
            bindings: A,
            hidden: !1,
            beforeComponent: w ? X(w) : void 0,
            mainComponent: X(D),
            afterComponent: T ? X(T) : void 0,
            events: a.fields[F.field_name] ?? {},
            componentOptions: B
          };
          l.computedRules = Ba.computeServerRules(
            l,
            this.formApi
          ), _.push(l), t.add(F.field_name);
        });
        const S = this.dynamicComponentRecord[`section-${g.name ?? i}-before`], s = this.sectionComponent, N = this.dynamicComponentRecord[`section-${g.name ?? i}-after`], d = {
          label: g.label ?? void 0,
          icon: g.icon ?? void 0,
          cssClass: g.css_class ?? void 0,
          hidden: !1,
          name: g.name ?? i.toString(),
          index: i,
          bindings: m.deepDupeObject(this.formBind.sections),
          readonly: this.formMetadataAndData.form.readonly ?? g.readonly ?? void 0,
          events: a.sections[g.name ?? i.toString()] ?? {},
          beforeComponent: S ? X(S) : void 0,
          mainComponent: X(s),
          fieldsComponent: void 0,
          afterComponent: N ? X(N) : void 0,
          fields: _
        };
        n.push(d);
      }
    );
    const r = {
      sections: n,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      bindings: this.formBind,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: a.form,
      actionComponent: X(this.actionComponent),
      orphanErrorsComponent: X(this.orphanErrorsComponent),
      wrapperResetComponent: X(this.wrapperResetComponent),
      dynamicComponentRecord: this.dynamicComponentRecord,
      context: this.context
    };
    return t.size < this.formMetadataAndData.form.sections.reduce((g, i) => g + i.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), r;
  }
  getBindingsByFormFieldType(e) {
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return m.deepDupeObject(this.formBind.fields.color);
          case "wysiwyg":
            return m.deepDupeObject(this.formBind.fields.wysiwyg);
          default:
            return m.deepDupeObject(this.formBind.fields.string);
        }
      case "text":
        return m.deepDupeObject(this.formBind.fields.string);
      case "number":
        return m.deepDupeObject(this.formBind.fields.number);
      case "date":
        return m.deepDupeObject(this.formBind.fields.date);
      case "datetime":
        return m.deepDupeObject(this.formBind.fields.datetime);
      case "select":
        return m.deepDupeObject(this.formBind.fields.select);
      case "selectBelongsTo":
        return m.deepDupeObject(this.formBind.fields.belongsTo);
      case "selectHasMany":
        return m.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasAndBelongsToMany":
        return m.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasOne":
        return m.deepDupeObject(this.formBind.fields.belongsTo);
      case "checkbox":
        return m.deepDupeObject(this.formBind.fields.checkbox);
      case "object":
        return {};
      case "attachmentHasOne":
        return m.deepDupeObject(this.formBind.fields.attachmentBelongsTo);
      case "attachmentHasMany":
        return m.deepDupeObject(this.formBind.fields.attachmentHasMany);
      default:
        return m.deepDupeObject(this.formBind.fields.string);
    }
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
            return Vn;
          case "wysiwyg":
            return kn;
          default:
            return je;
        }
      case "text":
        return je;
      case "number":
        return Fn;
      case "date":
        return pn;
      case "datetime":
        return hn;
      case "select":
        return Cn;
      case "selectBelongsTo":
        return Ze;
      case "selectHasMany":
        return tt;
      case "selectHasAndBelongsToMany":
        return tt;
      case "selectHasOne":
        return Ze;
      case "checkbox":
        return _n;
      case "object":
        return Sn;
      case "attachmentHasOne":
        return Bn;
      case "attachmentHasMany":
        return jn;
      default:
        return je;
    }
  }
}
const Na = { class: "flex column" }, wa = /* @__PURE__ */ M({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = null, n = null, r = null;
    const g = at(), i = {
      softReset: s,
      reset: N,
      clear: d,
      validate: D,
      isValid: T,
      isInvalid: B,
      hide: F,
      unhide: w,
      resetValidation: A,
      getFields: f,
      setReadonlyState: l,
      setCssClass: h,
      setIcon: V,
      setLabel: R,
      tryFocusFirst: se,
      tryUnfocus: te,
      section: t.section
    }, _ = O(/* @__PURE__ */ new Map());
    function S() {
      t.section.fields.forEach((v) => {
        const x = v.metadata.field_name, W = t.formApi.getFieldByName(x);
        W && _.value.set(x, W);
      });
    }
    function s() {
      _.value.forEach((v) => {
        v.softReset();
      });
    }
    function N() {
      _.value.forEach((v) => {
        v.reset();
      }), m.callAllEvents(t.section.events.onReset);
    }
    function d() {
      _.value.forEach((v) => {
        v.clear();
      }), m.callAllEvents(t.section.events.onClear);
    }
    function F() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((x) => {
        x.hide();
      }), v.hidden = !0, m.callAllEvents(t.section.events.onHide));
    }
    function w() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((x) => {
        x.unhide();
      }), v.hidden = !1, m.callAllEvents(t.section.events.onUnhide));
    }
    function D() {
      let v = !0;
      return _.value.forEach((x) => {
        if (!x.validate()) {
          v = !1;
          return;
        }
      }), m.callAllEvents(t.section.events.onValidated), v;
    }
    function T() {
      let v = !0;
      return _.value.forEach((x) => {
        if (!x.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function B() {
      return !T();
    }
    function A() {
      _.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function f() {
      return _.value;
    }
    function l(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = v);
    }
    function h(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = v);
    }
    function V(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = v);
    }
    function R(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = v);
    }
    function Q() {
      const v = {};
      for (const [x, W] of _.value)
        v[x] = W.getValueSerialized();
      return v;
    }
    function de() {
      const v = g.default;
      if (!v) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = M({
        inheritAttrs: !1,
        setup(W, { attrs: Se, slots: De }) {
          return () => v(
            {
              ...W,
              ...Se
            },
            De
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, X(x));
    }
    function se() {
      for (const v of f().values())
        if (v.tryFocus(), v.isFocus())
          return !0;
      return !1;
    }
    function te() {
      for (const v of f().values())
        if (v.tryUnfocus(), !v.isFocus())
          return !0;
      return !1;
    }
    e(i);
    const le = H(() => T()), be = H(() => B()), ke = H(() => Q());
    return J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        a == null || a(), a = null, v && (a = J(le, (x) => {
          x && m.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = J(be, (x) => {
          var W;
          x && m.callAllEvents((W = t.section) == null ? void 0 : W.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        r == null || r(), r = null, v && (r = J(
          ke,
          () => {
            var x;
            m.callAllEvents((x = t.section) == null ? void 0 : x.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(() => {
      var x;
      de();
      const v = (x = ot()) == null ? void 0 : x.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), Fe(() => {
        var W;
        S(), m.callAllEvents((W = t.section) == null ? void 0 : W.events.onReady);
      });
    }), (v, x) => He((p(), z("div", Na, [
      t.section.beforeComponent ? (p(), E(ie(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : P("", !0),
      (p(), E(ie(t.section.mainComponent), {
        sectionApi: i,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (p(), E(ie(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : P("", !0)
    ], 512)), [
      [Ge, t.section.hidden !== !0]
    ]);
  }
}), Ua = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, $a = ["index"], za = /* @__PURE__ */ M({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = () => !0, n = () => !0, r = () => {
    }, g = () => {
    }, i = () => {
    }, _ = () => {
    }, S = () => {
    };
    const s = O(), N = O(!1), d = O([]);
    function F() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = D(s.value);
    }
    function w() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = D(s.value), m.callAllEvents(t.field.events.onReset), g(), Fe(() => {
        v();
      });
    }
    function D(C) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return C == null || C === "" ? !1 : C;
        case "date":
          return C == null || C === "" ? null : L.formatDate(
            L.extractDate(String(C), q.formSettings.backendDateFormat),
            q.formSettings.dateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : L.formatDate(
            L.extractDate(
              String(C),
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
      return C;
    }
    function T(C) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return C == null || C === "" ? null : L.formatDate(
            L.extractDate(String(C), q.formSettings.dateFormat),
            q.formSettings.backendDateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : L.formatDate(
            L.extractDate(String(C), q.formSettings.datetimeFormat),
            q.formSettings.backendDatetimeFormat
          );
        case "selectBelongsTo":
        case "selectHasOne":
          if (C === void 0)
            return null;
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
          if (C === void 0)
            return [];
      }
      return C;
    }
    function B() {
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
        case "select":
          s.value = void 0;
          break;
        case "text":
          s.value = "";
          break;
        case "object":
          s.value = {};
          break;
        case "selectBelongsTo":
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
        case "selectHasOne":
          s.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          s.value = {
            add: [],
            delete: []
          };
          break;
      }
      i(), m.callAllEvents(t.field.events.onClear);
    }
    function A(C) {
      s.value = C;
    }
    function f() {
      return u(s);
    }
    function l() {
      return T(u(s));
    }
    function h(C) {
      d.value = C;
    }
    function V() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function R() {
      const C = V();
      C.hidden = !0, m.callAllEvents(t.field.events.onHide);
    }
    function Q() {
      const C = V();
      C.hidden = !1, m.callAllEvents(t.field.events.onUnhide);
    }
    function de(C) {
      const q = V();
      q.readonly = C;
    }
    function se(C) {
      const q = V();
      q.cssClass = C;
    }
    function te(C) {
      const q = V();
      q.label = C;
    }
    function le() {
      const C = a();
      return m.callAllEvents(t.field.events.onValidated), C;
    }
    function be() {
      return n();
    }
    function ke() {
      return !be();
    }
    function v() {
      return r();
    }
    function x() {
      N.value || (_(), N.value = !0);
    }
    function W() {
      N.value && (S(), N.value = !1);
    }
    function Se() {
      return N.value;
    }
    function De(C) {
      const q = V();
      q.bindings = m.deepMergeObject(
        m.deepDupeObject(q.bindings),
        m.deepDupeObject(C)
      );
    }
    function Le(C, q, fe, Ve, Ee, Re, Oe) {
      a = C, n = q, r = fe, Ve && (g = Ve), Ee && (i = Ee), Re && (_ = Re), Oe && (S = Oe);
    }
    const ye = {
      softReset: F,
      reset: w,
      clear: B,
      validate: le,
      isValid: be,
      isInvalid: ke,
      hide: R,
      unhide: Q,
      resetValidation: v,
      getValueDeserialized: l,
      getValueSerialized: f,
      setupBackendErrors: h,
      setReadonlyState: de,
      setCssClass: se,
      setLabel: te,
      tryFocus: x,
      tryUnfocus: W,
      isFocus: Se,
      addBindings: De,
      setValue: A,
      field: t.field
    };
    return e(ye), J(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        m.callAllEvents(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? s.value : null,
      (C) => {
        C ? m.callAllEvents(t.field.events.onIsValid) : m.callAllEvents(t.field.events.onIsInvalid);
      }
    ), K(() => {
      var q, fe;
      F();
      const C = (q = ot()) == null ? void 0 : q.exposed;
      C && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        C
      ), m.callAllEvents((fe = t.field) == null ? void 0 : fe.events.onReady);
    }), (C, q) => He((p(), z("div", null, [
      t.field.beforeComponent ? (p(), E(ie(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : P("", !0),
      (p(), E(ie(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: w,
        clear: B,
        getValueDeserialized: l,
        getValueSerialized: f,
        validate: le,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: Le
      }, null, 8, ["modelValue", "field", "formApi"])),
      t.field.afterComponent ? (p(), E(ie(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : P("", !0),
      d.value.length > 0 ? (p(), z("div", Ua, [
        (p(!0), z(pe, null, ge(d.value, (fe, Ve) => (p(), z("div", {
          index: Ve,
          class: "flex column"
        }, j(fe), 9, $a))), 256))
      ])) : P("", !0)
    ], 512)), [
      [Ge, t.field.hidden !== !0]
    ]);
  }
}), qa = { class: "flex column" }, ja = /* @__PURE__ */ M({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    formBindings: {},
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
    let a = null, n = "", r = 0, g = 0, i = null, _ = null, S = null, s = null;
    const N = at(), d = O(Ce.getEmptyFormBeforeInit()), F = O(!1), w = O(!1), D = O(!1), T = O(!1), B = O("create"), A = O({}), f = O(/* @__PURE__ */ new Map()), l = O(/* @__PURE__ */ new Map());
    async function h() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = Ce.getForm(
        t.resourceName,
        t.resourceId,
        R(),
        a,
        t.formSettings,
        t.formBindings,
        t.context,
        _e,
        t.eventManager
      ), r = d.value.sections.length, g = d.value.sections.reduce((c, y) => (c += y.fields.length, c), 0), t.resourceId && (B.value = "edit");
    }
    async function V() {
      var $, re, Te;
      if (!se())
        return;
      m.callAllEvents(($ = d.value) == null ? void 0 : $.events.onSubmit), T.value = !0, W();
      const c = Q(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: d.value.context
      });
      if (s = y.resource_data, y.success)
        A.value = {}, B.value === "create" && (B.value = "edit"), a && y.resource_data && (a.resource_data = y.resource_data), d.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          R(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formBindings,
          d.value.context,
          _e,
          t.eventManager
        ), be(), n = JSON.stringify(Q()), m.callAllEvents((Te = d.value) == null ? void 0 : Te.events.onSubmitSuccess);
      else {
        A.value = {};
        const Be = [];
        for (const [me, Dt] of l.value) {
          const Ke = y.errors[me];
          Ke && (Dt.setupBackendErrors(Ke), Be.push(me));
        }
        Object.entries(y.errors).forEach((me) => {
          Be.includes(me[0]) || (A.value[me[0]] = me[1]);
        }), m.callAllEvents((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function R() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in N) {
        const $ = N[y];
        if ($) {
          const re = M({
            inheritAttrs: !1,
            setup(Te, { attrs: Be, slots: me }) {
              return () => $({
                ...Te,
                ...Be,
                innerSlots: me
              });
            }
          });
          switch (y) {
            case "sections":
              c.sectionComponent = re;
              break;
            case "actions":
              c.actionComponent = re;
              break;
            case "orphan-errors":
              c.orphanErrorsComponent = re;
              break;
            case "association-display":
              c.associationDisplayComponent = re;
              break;
            default:
              c.dynamicComponentRecord[y] = re;
              break;
          }
        }
      }
      return c;
    }
    function Q() {
      const c = {};
      for (const [y, $] of l.value)
        c[y] = $.getValueDeserialized();
      return c;
    }
    function de() {
      const c = {};
      for (const [y, $] of l.value)
        c[y] = $.getValueSerialized();
      return c;
    }
    function se() {
      var y;
      let c = !0;
      return l.value.forEach(($) => {
        if (!$.validate()) {
          c = !1;
          return;
        }
      }), m.callAllEvents((y = d.value) == null ? void 0 : y.events.onValidated), c;
    }
    function te() {
      let c = !0;
      return l.value.forEach((y) => {
        if (!y.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function le() {
      return !te();
    }
    function be() {
      f.value.forEach((c) => {
        c.softReset();
      });
    }
    function ke() {
      var c;
      l.value.forEach((y) => {
        y.reset();
      }), m.callAllEvents((c = d.value) == null ? void 0 : c.events.onReset);
    }
    function v() {
      var c;
      l.value.forEach((y) => {
        y.clear();
      }), m.callAllEvents((c = d.value) == null ? void 0 : c.events.onClear);
    }
    function x() {
      l.value.forEach((c) => {
        c.resetValidation();
      });
    }
    function W() {
      l.value.forEach((c) => {
        c.setupBackendErrors([]);
      });
    }
    function Se(c) {
      if (a)
        return a.resource_data[c];
    }
    function De(c) {
      return f.value.get(c);
    }
    function Le(c) {
      return [...f.value.values()].at(c);
    }
    function ye() {
      return f.value;
    }
    function C(c) {
      return l.value.get(c);
    }
    function q() {
      return l.value;
    }
    function fe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ve() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((y) => {
        (t[y] === null || t[y] === void 0) && console.warn(`Missing props for <Submit64> -> ${y}`);
      });
    }
    function Ee() {
      return u(B);
    }
    function Re() {
      return n !== JSON.stringify(Q());
    }
    function Oe(c) {
      d.value && (d.value.context = c);
    }
    function ft(c) {
      d.value && (d.value.cssClass = c);
    }
    function mt(c) {
      d.value && (d.value.readonly = c);
    }
    function pt() {
      return D.value;
    }
    function gt() {
      return s;
    }
    function Ye() {
      for (const c of ye().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function vt() {
      for (const c of ye().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function ht() {
      return d;
    }
    function bt(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.find(($) => $.name === c);
    }
    function yt(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === c);
    }
    function _t(c, y) {
      f.value.set(c, y), r === f.value.size && (F.value = !0);
    }
    function Ct(c, y) {
      l.value.set(c, y), g === l.value.size && (w.value = !0);
    }
    function Ft(c, y) {
      c.fieldsComponent = y;
    }
    const We = H(() => te()), Vt = H(() => le()), kt = H(() => de()), Je = {
      getFormRef: ht,
      getSectionRef: bt,
      getFieldRef: yt,
      registerSectionWrapperRef: _t,
      registerFieldWrapperRef: Ct,
      setSectionFieldComponent: Ft
    }, St = new Proxy({}, {
      get(c, y) {
        var $;
        return ($ = d.value) == null ? void 0 : $[y];
      }
    }), _e = {
      getMode: Ee,
      getSectionByName: De,
      getSectionByIndex: Le,
      getSections: ye,
      getFieldByName: C,
      getFields: q,
      validate: se,
      isValid: te,
      isInvalid: le,
      softReset: be,
      reset: ke,
      clear: v,
      resetValidation: x,
      submit: V,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Se,
      getAssociationDataCallback: fe,
      setContext: Oe,
      setCssClass: ft,
      setReadonlyState: mt,
      isReady: pt,
      getSubmitData: gt,
      tryFocusFirst: Ye,
      tryUnfocus: vt,
      form: St,
      refs: {
        orphanErrors: Ne(A),
        isLoadingSubmit: Ne(T),
        setupIsDone: Ne(D),
        isFormValid: Ne(We)
      }
    };
    return e(_e), J(
      () => F.value && w.value,
      (c) => {
        var y;
        c && !D.value && (m.callAllEvents((y = d.value) == null ? void 0 : y.events.onReady), D.value = !0);
      }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        i == null || i(), i = null, c && (i = J(We, (y) => {
          var $;
          y && m.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        _ == null || _(), _ = null, c && (_ = J(Vt, (y) => {
          var $;
          y && m.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        S == null || S(), S = null, c && (S = J(
          kt,
          () => {
            var y;
            m.callAllEvents((y = d.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      Ve(), await h(), Fe(() => {
        n = JSON.stringify(Q()), d.value.formSettings.autofocus && Ye();
      });
    }), (c, y) => He((p(), z("div", qa, [
      G("div", {
        class: nt(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), z(pe, null, ge(d.value.sections, ($) => (p(), E(wa, {
          key: $.name,
          section: $,
          formApi: _e,
          privateFormApi: Je
        }, {
          default: b(() => [
            (p(!0), z(pe, null, ge($.fields, (re) => (p(), E(za, {
              key: re.metadata.field_name,
              field: re,
              formApi: _e,
              privateFormApi: Je
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), E(ie(d.value.orphanErrorsComponent), { formApi: _e })),
      (p(), E(ie(d.value.actionComponent), { formApi: _e }))
    ], 512)), [
      [Ge, D.value]
    ]);
  }
});
export {
  Ie as DynamicLogicBuilder,
  ee as Submit64,
  ja as Submit64Form
};
