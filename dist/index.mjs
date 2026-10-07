var At = Object.defineProperty;
var xt = (o, e, t) => e in o ? At(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var U = (o, e, t) => xt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as j, openBlock as p, createElementBlock as z, createElementVNode as H, createVNode as k, unref as c, mergeProps as I, createBlock as E, createCommentVNode as P, normalizeClass as nt, toDisplayString as L, resolveDynamicComponent as re, resolveComponent as Et, normalizeProps as se, guardReactiveProps as ue, withCtx as b, createTextVNode as te, Fragment as me, renderList as pe, ref as O, computed as M, onMounted as J, nextTick as Fe, watch as W, markRaw as K, useSlots as at, getCurrentInstance as ot, withDirectives as He, vShow as Ge, readonly as Be } from "vue";
import { QBtn as X, QIcon as Ae, QItem as ge, QItemSection as ne, QItemLabel as ae, date as _e, QInput as xe, QPopupProxy as $e, QDate as rt, QTime as Rt, QCheckbox as Ot, QSelect as Qe, QColor as Tt, QEditor as Nt, IconSet as we, Lang as Ue, QUploader as it, QList as ze, QSeparator as lt, QUploaderAddTrigger as st } from "quasar";
const Bt = { class: "flex column" }, wt = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ut = /* @__PURE__ */ j({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), z("div", Bt, [
      H("div", wt, [
        k(c(X), I(e.formApi.form.bindings.form.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (p(), E(c(X), I({ key: 0 }, e.formApi.form.bindings.form.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : P("", !0),
        e.formApi.form.formSettings.showClearButton ? (p(), E(c(X), I({ key: 1 }, e.formApi.form.bindings.form.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : P("", !0)
      ])
    ]));
  }
}), $t = { class: "flex row items-center" }, zt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, It = /* @__PURE__ */ j({
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
      H("div", $t, [
        e.sectionApi.section.icon ? (p(), E(c(Ae), I({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : P("", !0),
        H("div", zt, L(e.sectionApi.section.label), 1)
      ]),
      H("div", qt, [
        (p(), E(re(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Pt = /* @__PURE__ */ j({
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
}), Lt = /* @__PURE__ */ j({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), E(c(ge), se(ue(e.itemProps)), {
      default: b(() => [
        k(c(ne), null, {
          default: b(() => [
            k(c(ae), null, {
              default: b(() => [
                te(L(e.entry.label), 1)
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
}), jt = { class: "flex column" }, Mt = /* @__PURE__ */ j({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), z("div", jt, [
      (p(!0), z(me, null, pe(e.formApi.refs.orphanErrors.value, (n, r) => (p(), z("div", {
        key: r,
        class: "q-field--error q-field__bottom text-negative"
      }, L(r) + " : " + L(n.join(",")), 1))), 128))
    ]));
  }
}), Q = {
  outlined: void 0,
  dense: void 0,
  filled: void 0,
  standout: void 0,
  borderless: void 0,
  rounded: void 0,
  square: void 0,
  color: "primary",
  hideBottomSpace: void 0
}, ve = {
  hideBottomSpace: Q.hideBottomSpace,
  outlined: Q.outlined,
  dense: Q.dense,
  filled: Q.filled,
  standout: Q.standout,
  borderless: Q.borderless,
  rounded: Q.rounded,
  square: Q.square,
  color: Q.color,
  lazyRules: !1
}, qe = {
  cover: !0
};
function Ht() {
  return {
    ...ve
  };
}
function Gt() {
  return {
    ...ve
  };
}
function Qt() {
  return {
    input: {
      ...ve
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
    color: Q.color
  };
}
function Jt() {
  return {
    input: {
      ...ve
    },
    icon: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...qe
    },
    date: {
      color: Q.color
    },
    btn: {
      label: "Fermer",
      color: Q.color
    }
  };
}
function Kt() {
  return {
    input: {
      ...ve
    },
    iconDate: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...qe
    },
    date: {
      color: Q.color
    },
    btnDate: {
      label: "Fermer",
      color: Q.color
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
      color: Q.color
    }
  };
}
function Xt() {
  return {
    select: {
      ...ve
    }
  };
}
function Zt() {
  return {
    select: {
      ...ve
    }
  };
}
function en() {
  return {
    select: {
      ...ve
    }
  };
}
function tn() {
  return {
    uploader: {
      color: Q.color
    }
  };
}
function nn() {
  return {
    uploader: {
      color: Q.color
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
function dn(o, e) {
  const t = _e.extractDate(o, e);
  if (!Number.isNaN(t.getTime()))
    return t;
  const a = new Date(o);
  return Number.isNaN(a.getTime()) ? t : a;
}
const u = {
  callAllEvents: sn,
  humanStorageSize: un,
  deepMergeObject: ct,
  deepDupeObject: cn,
  superExtractDate: dn
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
    this._instance._formSettings = u.deepMergeObject(
      u.deepDupeObject(this._instance._formSettings),
      u.deepDupeObject(e)
    );
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBind = u.deepMergeObject(
      u.deepDupeObject(this._instance._formBind),
      u.deepDupeObject(e)
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
let Z = Pe;
class Ie {
  constructor(e) {
    U(this, "formApi");
    U(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, r = new fn(a, n, this.formApi);
    return this.events.push(r), new mn(r);
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
class fn {
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
class mn {
  constructor(e) {
    U(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const pn = { class: "row items-center justify-end" }, gn = /* @__PURE__ */ j({
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
    function D() {
      a.value && a.value.blur();
    }
    const s = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(r, g, i, void 0, void 0, _, D), Fe(() => {
        var B;
        (B = a.value) == null || B.resetValidation();
      });
    }), (B, f) => (p(), E(c(xe), I({
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
        k(c(Ae), se(ue(s.value.icon)), {
          default: b(() => [
            k(c($e), I({
              ref_key: "popupProxyRef",
              ref: t
            }, s.value.popupProxy), {
              default: b(() => [
                k(c(rt), I(s.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    H("div", pn, [
                      k(c(X), I(s.value.btn, { onClick: n }), null, 16)
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
}), vn = { class: "row items-center justify-end" }, hn = { class: "row items-center justify-end" }, bn = /* @__PURE__ */ j({
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
    function D() {
      n.value && n.value.resetValidation();
    }
    function s() {
      n.value && n.value.focus();
    }
    function B() {
      n.value && n.value.blur();
    }
    const f = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(i, _, D, void 0, void 0, s, B), Fe(() => {
        var F;
        (F = n.value) == null || F.resetValidation();
      });
    }), (F, w) => (p(), E(c(xe), I({
      ref_key: "fieldRef",
      ref: n
    }, f.value.input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: b(() => [
        k(c(Ae), se(ue(f.value.iconDate)), {
          default: b(() => [
            k(c($e), I({
              ref_key: "datePopupProxyRef",
              ref: t
            }, f.value.popupProxyDate), {
              default: b(() => [
                k(c(rt), I(f.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    H("div", vn, [
                      k(c(X), I(f.value.btnDate, { onClick: r }), null, 16)
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
        k(c(Ae), se(ue(f.value.iconDatetime)), {
          default: b(() => [
            k(c($e), I({
              ref_key: "timePopupProxyRef",
              ref: a
            }, f.value.popupProxyDatetime), {
              default: b(() => [
                k(c(Rt), I(f.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    H("div", hn, [
                      k(c(X), I(f.value.btnDatetime, { onClick: g }), null, 16)
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
}), yn = { class: "flex column" }, _n = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Cn = /* @__PURE__ */ j({
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
    return W(
      () => e.modelValue,
      (g) => {
        for (const i of e.field.computedRules)
          if (t.value = i(g), t.value !== !0)
            break;
      }
    ), J(() => {
      e.registerBehaviourCallbacks(a, n, r);
    }), (g, i) => (p(), z("div", yn, [
      k(c(Ot), I({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (p(), z("div", _n, L(t.value), 1)) : P("", !0)
    ]));
  }
}), Fn = /* @__PURE__ */ j({
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
    function r(w, S) {
      if (w === "") {
        S(() => {
          a.value = [...t.value];
        });
        return;
      }
      S(() => {
        const T = w.toLowerCase();
        a.value = t.value.filter((N) => N.label.toLowerCase().includes(T));
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
    function D() {
      n.value && n.value.resetValidation();
    }
    function s() {
      a.value = [];
    }
    function B() {
      n.value && n.value.focus();
    }
    function f() {
      n.value && n.value.blur();
    }
    const F = M(() => e.field.bindings);
    return J(() => {
      g(), e.registerBehaviourCallbacks(i, _, D, void 0, s, B, f);
    }), (w, S) => (p(), E(c(Qe), I({
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
        k(c(ge), se(ue(F.value.itemNoOption)), {
          default: b(() => [
            k(c(ne), null, {
              default: b(() => [
                k(c(ae), null, {
                  default: b(() => [
                    te(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Xe = "__init", Ze = /* @__PURE__ */ j({
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
    function _(A, m) {
      if (A === g.value) {
        m(() => {
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
        m(() => {
          a.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = i();
      });
    }
    function D() {
      var m, l;
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = [
        {
          label: ((m = e.field.associationData[0]) == null ? void 0 : m.label) ?? "???",
          value: A,
          data: (l = e.field.associationData[0]) == null ? void 0 : l.data
        }
      ]);
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function B() {
      return r.value ? !r.value.hasError : !1;
    }
    function f() {
      r.value && r.value.resetValidation();
    }
    function F() {
      n.value = i(), a.value = [], g.value = Xe;
    }
    function w(A) {
      const m = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === m && m !== -1) {
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
    function S() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const N = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(
        s,
        B,
        f,
        D,
        F,
        S,
        T
      ), Fe(() => {
        D();
      });
    }), (A, m) => (p(), E(c(Qe), I({
      ref_key: "fieldRef",
      ref: r
    }, N.value.select, {
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
        k(c(ge), se(ue(N.value.itemNoOption)), {
          default: b(() => [
            k(c(ne), null, {
              default: b(() => [
                k(c(ae), null, {
                  default: b(() => [
                    te(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (p(), E(re(c(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: l.opt,
          itemProps: l.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"]));
  }
}), et = "__init", tt = /* @__PURE__ */ j({
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
    function _(A, m) {
      if (A === g.value) {
        m(() => {
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
        m(() => {
          a.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = i();
      });
    }
    function D() {
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = A.map((m, l) => ({
        label: e.field.associationData[l].label ?? "???",
        value: m,
        data: e.field.associationData[l].data
      })));
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function B() {
      return r.value ? !r.value.hasError : !1;
    }
    function f() {
      r.value && r.value.resetValidation();
    }
    function F() {
      n.value = i(), a.value = [], g.value = et;
    }
    function w(A) {
      const m = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === m && m !== -1) {
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
    function S() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const N = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(
        s,
        B,
        f,
        D,
        F,
        S,
        T
      ), Fe(() => {
        D();
      });
    }), (A, m) => (p(), E(c(Qe), I({
      ref_key: "fieldRef",
      ref: r
    }, N.value.select, {
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
        k(c(ge), se(ue(N.value.itemNoOption)), {
          default: b(() => [
            k(c(ne), null, {
              default: b(() => [
                k(c(ae), null, {
                  default: b(() => [
                    te(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
        (p(), E(re(c(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: l.opt,
          itemProps: l.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"]));
  }
}), je = /* @__PURE__ */ j({
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
    return J(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (_, D) => (p(), E(c(xe), I({
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
}), Vn = /* @__PURE__ */ j({
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
    return J(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (_, D) => (p(), E(c(xe), I({
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
}), kn = /* @__PURE__ */ j({
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
    const _ = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (D, s) => (p(), E(c(xe), I({
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
        k(c(Ae), se(ue(_.value.icon)), {
          default: b(() => [
            k(c($e), se(ue(_.value.popupProxy)), {
              default: b(() => [
                k(c(Tt), I(_.value.color, {
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
}), Dn = /* @__PURE__ */ j({
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
    function g(f) {
      var w;
      f.preventDefault(), f.stopPropagation();
      const F = (w = f.clipboardData) == null ? void 0 : w.items;
      if (F)
        for (let S = 0; S < F.length; S++) {
          const T = F[S];
          if (T.type.startsWith("image/")) {
            const N = T.getAsFile();
            N && _(N);
          }
        }
    }
    function i(f) {
      var w;
      f.preventDefault(), f.stopPropagation();
      const F = (w = f.dataTransfer) == null ? void 0 : w.files;
      if (F)
        for (let S = 0; S < F.length; S++) {
          const T = F[S];
          T.type.startsWith("image/") && T && _(T);
        }
    }
    function _(f) {
      if (!t.value)
        return;
      const F = new FileReader();
      F.onload = (w) => {
        var T;
        const S = (T = w.target) == null ? void 0 : T.result;
        if (typeof S == "string") {
          const N = new Image();
          N.onload = () => {
            var l;
            const A = N.width, m = N.height;
            (l = t.value) == null || l.runCmd(
              "insertHTML",
              `<img src="${S}" width="${A}" height="${m}" style="max-width: 80%; height: auto;" />`
            );
          }, N.src = S;
        }
      }, F.readAsDataURL(f);
    }
    function D() {
      t.value && t.value.focus();
    }
    function s() {
      t.value && t.value.getContentEl().blur();
    }
    function B() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        a,
        n,
        r,
        void 0,
        void 0,
        D,
        s
      );
    }), (f, F) => (p(), E(c(Nt), I({
      ref_key: "fieldRef",
      ref: t,
      toolbar: B()
    }, e.field.bindings, {
      "model-value": e.modelValue,
      onDrop: i,
      onPaste: g,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["toolbar", "model-value", "onUpdate:modelValue"]));
  }
}), Sn = /* @__PURE__ */ j({
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
}), An = { class: "flex column" }, xn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, En = { class: "col" }, Rn = { class: "q-uploader__title" }, On = {
  key: 0,
  class: "flex column"
}, Tn = {
  key: 2,
  class: "flex column"
}, Nn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Bn = /* @__PURE__ */ j({
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
      l.add = [], l.delete = [], e.modelValueOnUpdate(l), S();
    }
    function r() {
      var h;
      let l = e.modelValue;
      l.add = [], l.delete = ((h = e.field.attachmentData) == null ? void 0 : h.map((V) => V.attachment_id)) ?? [], e.modelValueOnUpdate(l), S();
    }
    function g() {
      return S(), i();
    }
    function i() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function D(l) {
      return new Promise((h) => {
        const V = new Blob([l]), R = new FileReader();
        R.onload = (G) => {
          var ie;
          const ce = ((ie = G.target) == null ? void 0 : ie.result) ?? "", [le, ee] = ce.split(",");
          h(ee);
        }, R.readAsDataURL(V);
      });
    }
    async function s(l) {
      return {
        key: `${l.lastModified}${l.name}`,
        size: l.size,
        filename: l.name,
        contentType: l.type,
        base64: await D(await l.arrayBuffer())
      };
    }
    async function B(l) {
      if (!l[0])
        return;
      a.value = !0;
      const h = await s(l[0]);
      let V = e.modelValue;
      V.add = [h], a.value = !1, e.modelValueOnUpdate(V), S();
    }
    function f(l) {
      if (!l[0])
        return;
      let h = e.modelValue;
      h.add = [], h.delete = [], e.modelValueOnUpdate(h), S();
    }
    function F(l) {
      let h = e.modelValue;
      h.delete = [l.attachment_id], e.modelValueOnUpdate(h), S();
    }
    function w() {
      let l = e.modelValue;
      l.delete = [], e.modelValueOnUpdate(l), S();
    }
    function S() {
      t.value = null;
      for (const l of e.field.computedRules) {
        const h = l(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    const T = M(() => (e.field.attachmentData ?? []).length === 0), N = M(() => e.modelValue ? e.modelValue.delete : []), A = M(() => {
      var l, h;
      return e.modelValue ? (((l = e.field.attachmentData) == null ? void 0 : l.length) ?? 0) === 0 || (((h = e.field.attachmentData) == null ? void 0 : h.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), m = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (l, h) => (p(), z("div", An, [
      k(c(it), I(m.value.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: B,
        onRemoved: f,
        style: { width: "inherit" }
      }), {
        header: b((V) => [
          H("div", xn, [
            H("div", En, [
              H("div", Rn, L(e.field.label), 1)
            ]),
            V.canAddFiles && A.value ? (p(), E(c(X), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: V.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                k(c(st))
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: b((V) => [
          T.value ? P("", !0) : (p(), z("div", On, [
            h[0] || (h[0] = H("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            k(c(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), z(me, null, pe(e.field.attachmentData ?? [], (R) => (p(), E(c(ge), {
                  key: R.attachment_id
                }, {
                  default: b(() => [
                    k(c(ne), null, {
                      default: b(() => [
                        k(c(ae), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            te(L(R.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(c(ae), { caption: "" }, {
                          default: b(() => [
                            te(L(c(u).humanStorageSize(R.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (p(), E(c(ne), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        N.value.includes(R.attachment_id) ? P("", !0) : (p(), E(c(X), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => F(R)
                        }, null, 8, ["disable", "onClick"])),
                        N.value.includes(R.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(c(X), {
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
          !T.value && V.files.length > 0 ? (p(), E(c(lt), { key: 1 })) : P("", !0),
          V.files.length > 0 ? (p(), z("div", Tn, [
            h[1] || (h[1] = H("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            k(c(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), z(me, null, pe(V.files, (R) => (p(), E(c(ge), {
                  key: R.__key
                }, {
                  default: b(() => [
                    k(c(ne), null, {
                      default: b(() => [
                        k(c(ae), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            te(L(R.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(c(ae), { caption: "" }, {
                          default: b(() => [
                            te(L(R.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    k(c(ne), {
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        k(c(X), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (G) => V.removeFile(R)
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
      t.value !== null ? (p(), z("div", Nn, L(t.value), 1)) : P("", !0)
    ]));
  }
}), wn = { class: "flex column" }, Un = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, $n = { class: "col" }, zn = { class: "q-uploader__title" }, qn = {
  key: 0,
  class: "flex column"
}, In = { class: "text-weight-medium text-body2" }, Pn = {
  key: 2,
  class: "flex column"
}, Ln = { class: "text-weight-medium text-body2" }, jn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Mn = /* @__PURE__ */ j({
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
      let m = e.modelValue;
      m.add = [], m.delete = [], e.modelValueOnUpdate(m), S();
    }
    function r() {
      var l;
      let m = e.modelValue;
      m.add = [], m.delete = ((l = e.field.attachmentData) == null ? void 0 : l.map((h) => h.attachment_id)) ?? [], e.modelValueOnUpdate(m), S();
    }
    function g() {
      return S(), i();
    }
    function i() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function D(m) {
      return new Promise((l) => {
        const h = new Blob([m]), V = new FileReader();
        V.onload = (R) => {
          var ee;
          const G = ((ee = R.target) == null ? void 0 : ee.result) ?? "", [ce, le] = G.split(",");
          l(le);
        }, V.readAsDataURL(h);
      });
    }
    async function s(m) {
      return {
        key: `${m.lastModified}${m.name}`,
        size: m.size,
        filename: m.name,
        contentType: m.type,
        base64: await D(await m.arrayBuffer())
      };
    }
    async function B(m) {
      a.value = !0;
      for (const l of m) {
        const h = await s(l);
        let V = e.modelValue;
        V.add.push(h), e.modelValueOnUpdate(V);
      }
      a.value = !1, S();
    }
    async function f(m) {
      a.value = !0;
      for (const l of m) {
        const h = await s(l);
        let V = e.modelValue;
        V.add = V.add.filter((R) => R.key !== h.key), e.modelValueOnUpdate(V);
      }
      a.value = !1, S();
    }
    function F(m) {
      let l = e.modelValue;
      l.delete.push(m.attachment_id), e.modelValueOnUpdate(l), S();
    }
    function w(m) {
      let l = e.modelValue;
      l.delete = l.delete.filter((h) => h !== m.attachment_id), e.modelValueOnUpdate(l), S();
    }
    function S() {
      t.value = null;
      for (const m of e.field.computedRules) {
        const l = m(e.modelValue);
        if (typeof l == "string") {
          t.value = l;
          break;
        }
      }
    }
    const T = M(() => (e.field.attachmentData ?? []).length === 0), N = M(() => e.modelValue ? e.modelValue.delete : []), A = M(() => e.field.bindings);
    return J(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (m, l) => (p(), z("div", wn, [
      k(c(it), I(A.value.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: B,
        onRemoved: f,
        style: { width: "inherit" }
      }), {
        header: b((h) => [
          H("div", Un, [
            H("div", $n, [
              H("div", zn, L(e.field.label), 1)
            ]),
            h.canAddFiles ? (p(), E(c(X), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: h.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                k(c(st))
              ]),
              _: 1
            }, 8, ["onClick"])) : P("", !0)
          ])
        ]),
        list: b((h) => {
          var V;
          return [
            T.value ? P("", !0) : (p(), z("div", qn, [
              H("div", In, "Fichier" + L((((V = e.field.attachmentData) == null ? void 0 : V.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              k(c(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), z(me, null, pe(e.field.attachmentData ?? [], (R) => (p(), E(c(ge), {
                    key: R.attachment_id
                  }, {
                    default: b(() => [
                      k(c(ne), null, {
                        default: b(() => [
                          k(c(ae), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              te(L(R.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(c(ae), { caption: "" }, {
                            default: b(() => [
                              te(L(c(u).humanStorageSize(R.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (p(), E(c(ne), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          N.value.includes(R.attachment_id) ? P("", !0) : (p(), E(c(X), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (G) => F(R)
                          }, null, 8, ["disable", "onClick"])),
                          N.value.includes(R.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(c(X), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (G) => w(R)
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
            !T.value && h.files.length > 0 ? (p(), E(c(lt), { key: 1 })) : P("", !0),
            h.files.length > 0 ? (p(), z("div", Pn, [
              H("div", Ln, "Fichier" + L(h.files.length > 0 ? "s" : "") + " à ajouter", 1),
              k(c(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), z(me, null, pe(h.files, (R) => (p(), E(c(ge), {
                    key: R.__key
                  }, {
                    default: b(() => [
                      k(c(ne), null, {
                        default: b(() => [
                          k(c(ae), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              te(L(R.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(c(ae), { caption: "" }, {
                            default: b(() => [
                              te(L(R.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      k(c(ne), {
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          k(c(X), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (G) => h.removeFile(R)
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
      t.value !== null ? (p(), z("div", jn, L(t.value), 1)) : P("", !0)
    ]));
  }
});
function Hn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (D, s, B) => D[s] ? B ? () => g(D[s]) : () => D[s] : D.compare_to ? () => {
    var f;
    return ((f = e.getFieldByName(D.compare_to)) == null ? void 0 : f.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", g = (D) => String(
    _e.formatDate(
      u.superExtractDate(D, n.formSettings.backendDateFormat),
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
  return t.forEach((D) => {
    const s = D;
    switch (s.type) {
      case "required":
        i.push(Gn());
        break;
      case "absence":
        i.push(Yn());
        break;
      case "acceptance":
        i.push(Wn());
        break;
      case "inclusion":
        i.push(dt(s.including));
        break;
      case "exclusion":
        i.push(Qn(s.excluding));
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
        i.push(Xn());
        break;
      case "lessThanOrEqualNumber":
        i.push(
          Zn(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        i.push(
          ea(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        i.push(
          ta(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        i.push(
          na(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        i.push(
          aa(r(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        i.push(
          oa(
            r(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        i.push(ra());
        break;
      case "numberNumericOnly":
        i.push(ia());
        break;
      case "numberEvenOnly":
        i.push(la());
        break;
      case "numberOddOnly":
        i.push(sa());
        break;
      case "lessThanOrEqualStringLength":
        i.push(
          ua(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        i.push(
          ca(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        i.push(
          da(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        i.push(
          fa(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        i.push(
          ga(
            r(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        i.push(
          pa(r(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        i.push(
          ma(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        i.push(
          va(
            r(s, "other_than")
          )
        );
        break;
      case "validDate":
        i.push(Me(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        i.push(
          ha(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        i.push(
          ba(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        i.push(
          ya(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        i.push(
          _a(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        i.push(
          Ca(
            r(s, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        i.push(
          Fa(
            r(s, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        i.push(
          ka()
        );
        break;
      case "allowFileContentType":
        i.push(
          Da(
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
          xa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        i.push(
          Aa(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        i.push(
          Ea(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        i.push(
          Ra(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        i.push(
          Oa(
            r(s, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        i.push(
          Ta(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        i.push(
          Na(
            r(s, "equal_to")
          )
        );
        break;
    }
  }), _.length > 0 ? _.map((D) => {
    switch (D) {
      case "allowBlank":
        return Kn(i);
      case "allowNull":
        return Jn(i);
    }
  }) : i;
}
function Gn() {
  return (o) => !!o || "Ce champ est requis";
}
function dt(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Qn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${dt.toString()}`
  );
}
function Yn() {
  return (o) => !o || "Ce champ doit être vide";
}
function Wn() {
  return (o) => !!o || "Doit être accepté";
}
function Jn(o) {
  return (e) => (e === null || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Kn(o) {
  return (e) => (e === "" || o.forEach((t) => {
    const a = t(e);
    if (a !== !0)
      return a;
  }), !0);
}
function Xn() {
  return (o) => Number(o) > 0 || "Val. positive uniquement";
}
function Zn(o) {
  return (e) => {
    const t = o();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function ea(o) {
  return (e) => {
    const t = o();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ta(o) {
  return (e) => {
    const t = o();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function na(o) {
  return (e) => {
    const t = o();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function aa(o, e) {
  return (t) => {
    const a = o();
    return Number(t) === a || `Égale à ${a}`;
  };
}
function oa(o, e) {
  return (t) => {
    const a = o();
    return Number(t) !== a || `Doit être différent de ${o}`;
  };
}
function ra() {
  return (o) => /^-?\d+$/.test(String(o).trim()) || "Nombre entier uniquement";
}
function ia() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function la() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function sa() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 1 || "Nombre impair uniquement";
}
function ua(o) {
  return (e) => {
    const t = o();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function ca(o) {
  return (e) => {
    const t = o();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function da(o) {
  return (e) => {
    const t = o();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function fa(o) {
  return (e) => {
    const t = o();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function ma(o, e) {
  return (t) => {
    const a = o(), n = e();
    return String(t).length >= a && String(t).length <= n || `Entre ${a} et ${n}`;
  };
}
function pa(o, e) {
  return (t) => {
    const a = o();
    return String(t) === a || `Égale à ${a}`;
  };
}
function ga(o) {
  return (e) => {
    const t = o();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function va(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function ha(o, e) {
  return (t) => {
    const a = o(), n = u.superExtractDate(String(t), e), r = u.superExtractDate(a, e);
    return n <= r || `Inf. ou égal à ${a}`;
  };
}
function ba(o, e) {
  return (t) => {
    const a = o(), n = u.superExtractDate(String(t), e), r = u.superExtractDate(a, e);
    return n < r || `Inf. à ${a}`;
  };
}
function ya(o, e) {
  return (t) => {
    const a = o(), n = u.superExtractDate(String(t), e), r = u.superExtractDate(a, e);
    return n >= r || `Sup. ou égal à ${a}`;
  };
}
function _a(o, e) {
  return (t) => {
    const a = o(), n = u.superExtractDate(String(t), e), r = u.superExtractDate(a, e);
    return n > r || `Sup. à ${a}`;
  };
}
function Ca(o, e) {
  return (t) => {
    const a = o(), n = u.superExtractDate(String(t), e), r = u.superExtractDate(a, e);
    return n === r || `Égale à ${n}`;
  };
}
function Fa(o, e) {
  return (t) => {
    const a = o();
    return u.superExtractDate(String(t), e) !== u.superExtractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Me(o) {
  return (e) => e == null || e === "" ? !0 : Va(e, o) || `Date invalide. Format : ${o}`;
}
function Va(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = u.superExtractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : _e.formatDate(t, e) === o;
}
function ka() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function Da(o) {
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
    }), n || `Taille par fichier ${u.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${u.humanStorageSize(a)}`;
  };
}
function xa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${u.humanStorageSize(a)}`;
  };
}
function Ea(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.length <= a || `${a} fichier${a > 1 ? "s" : ""} max.`;
  };
}
function Ra(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.length >= a || `${a} fichier${a > 1 ? "s" : ""} min.`;
  };
}
function Oa(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) <= a || `${u.humanStorageSize(a)} max.`;
  };
}
function Ta(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) >= a || `${u.humanStorageSize(a)} min.`;
  };
}
function Na(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, g) => (r += g.size, r), 0) === a || `Taille totale ${u.humanStorageSize(a)}`;
  };
}
const Ba = {
  computeServerRules: Hn
};
class Ce {
  constructor(e, t, a, n, r, g, i, _, D) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = i, this.resourceName = e, this.formApi = _, this.formSettings = u.deepMergeObject(
      u.deepDupeObject(Z.getGlobalFormSetting()),
      u.deepDupeObject(r ?? {})
    ), this.formBind = u.deepMergeObject(
      u.deepDupeObject(Z.getGlobalFormBind()),
      u.deepDupeObject(g ?? {})
    ), this.actionComponent = a.actionComponent ?? Z.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? Z.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? Z.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? Z.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? Z.getGlobalAssociationDisplayComponent(), this.registerEventCallback = D ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: Z.getGlobalFormSetting(),
      events: {},
      bindings: ut.getEmptyDefaultBindings(),
      actionComponent: K(Z.getGlobalActionComponent()),
      orphanErrorsComponent: K(Z.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: K(Z.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, r, g, i, _, D) {
    return new Ce(
      e,
      t,
      a,
      n,
      r,
      g,
      i,
      _,
      D
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
          const w = this.dynamicComponentRecord[`field-${F.field_name}-before`], S = Ce.getFieldComponentByFormFieldType(F), T = this.dynamicComponentRecord[`field-${F.field_name}-after`], N = {
            associationDisplayComponent: K(
              this.associationDisplayComponent
            ),
            regularFieldType: Ce.getRegularFieldTypeByFieldType(
              F.field_type
            )
          }, A = this.getBindingsByFormFieldType(F);
          let m = F.label;
          this.formSettings.requiredFieldsHasAsterisk && F.rules.find((h) => h.type === "required") && (m = m.concat("*"));
          const l = {
            type: F.field_type,
            extraType: F.field_extra_type,
            metadata: Object.freeze(F),
            label: m,
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
            beforeComponent: w ? K(w) : void 0,
            mainComponent: K(S),
            afterComponent: T ? K(T) : void 0,
            events: a.fields[F.field_name] ?? {},
            componentOptions: N
          };
          l.computedRules = Ba.computeServerRules(
            l,
            this.formApi
          ), _.push(l), t.add(F.field_name);
        });
        const D = this.dynamicComponentRecord[`section-${g.name ?? i}-before`], s = this.sectionComponent, B = this.dynamicComponentRecord[`section-${g.name ?? i}-after`], f = {
          label: g.label ?? void 0,
          icon: g.icon ?? void 0,
          cssClass: g.css_class ?? void 0,
          hidden: !1,
          name: g.name ?? i.toString(),
          index: i,
          bindings: u.deepDupeObject(this.formBind.sections),
          readonly: this.formMetadataAndData.form.readonly ?? g.readonly ?? void 0,
          events: a.sections[g.name ?? i.toString()] ?? {},
          beforeComponent: D ? K(D) : void 0,
          mainComponent: K(s),
          fieldsComponent: void 0,
          afterComponent: B ? K(B) : void 0,
          fields: _
        };
        n.push(f);
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
      actionComponent: K(this.actionComponent),
      orphanErrorsComponent: K(this.orphanErrorsComponent),
      wrapperResetComponent: K(this.wrapperResetComponent),
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
            return u.deepDupeObject(this.formBind.fields.color);
          case "wysiwyg":
            return u.deepDupeObject(this.formBind.fields.wysiwyg);
          default:
            return u.deepDupeObject(this.formBind.fields.string);
        }
      case "text":
        return u.deepDupeObject(this.formBind.fields.string);
      case "number":
        return u.deepDupeObject(this.formBind.fields.number);
      case "date":
        return u.deepDupeObject(this.formBind.fields.date);
      case "datetime":
        return u.deepDupeObject(this.formBind.fields.datetime);
      case "select":
        return u.deepDupeObject(this.formBind.fields.select);
      case "selectBelongsTo":
        return u.deepDupeObject(this.formBind.fields.belongsTo);
      case "selectHasMany":
        return u.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasAndBelongsToMany":
        return u.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasOne":
        return u.deepDupeObject(this.formBind.fields.belongsTo);
      case "checkbox":
        return u.deepDupeObject(this.formBind.fields.checkbox);
      case "object":
        return {};
      case "attachmentHasOne":
        return u.deepDupeObject(this.formBind.fields.attachmentBelongsTo);
      case "attachmentHasMany":
        return u.deepDupeObject(this.formBind.fields.attachmentHasMany);
      default:
        return u.deepDupeObject(this.formBind.fields.string);
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
            return kn;
          case "wysiwyg":
            return Dn;
          default:
            return je;
        }
      case "text":
        return je;
      case "number":
        return Vn;
      case "date":
        return gn;
      case "datetime":
        return bn;
      case "select":
        return Fn;
      case "selectBelongsTo":
        return Ze;
      case "selectHasMany":
        return tt;
      case "selectHasAndBelongsToMany":
        return tt;
      case "selectHasOne":
        return Ze;
      case "checkbox":
        return Cn;
      case "object":
        return Sn;
      case "attachmentHasOne":
        return Bn;
      case "attachmentHasMany":
        return Mn;
      default:
        return je;
    }
  }
}
const wa = { class: "flex column" }, Ua = /* @__PURE__ */ j({
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
      reset: B,
      clear: f,
      validate: S,
      isValid: T,
      isInvalid: N,
      hide: F,
      unhide: w,
      resetValidation: A,
      getFields: m,
      setReadonlyState: l,
      setCssClass: h,
      setIcon: V,
      setLabel: R,
      tryFocusFirst: le,
      tryUnfocus: ee,
      section: t.section
    }, _ = O(/* @__PURE__ */ new Map());
    function D() {
      t.section.fields.forEach((v) => {
        const x = v.metadata.field_name, Y = t.formApi.getFieldByName(x);
        Y && _.value.set(x, Y);
      });
    }
    function s() {
      _.value.forEach((v) => {
        v.softReset();
      });
    }
    function B() {
      _.value.forEach((v) => {
        v.reset();
      }), u.callAllEvents(t.section.events.onReset);
    }
    function f() {
      _.value.forEach((v) => {
        v.clear();
      }), u.callAllEvents(t.section.events.onClear);
    }
    function F() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((x) => {
        x.hide();
      }), v.hidden = !0, u.callAllEvents(t.section.events.onHide));
    }
    function w() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((x) => {
        x.unhide();
      }), v.hidden = !1, u.callAllEvents(t.section.events.onUnhide));
    }
    function S() {
      let v = !0;
      return _.value.forEach((x) => {
        if (!x.validate()) {
          v = !1;
          return;
        }
      }), u.callAllEvents(t.section.events.onValidated), v;
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
    function N() {
      return !T();
    }
    function A() {
      _.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function m() {
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
    function G() {
      const v = {};
      for (const [x, Y] of _.value)
        v[x] = Y.getValueSerialized();
      return v;
    }
    function ce() {
      const v = g.default;
      if (!v) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = j({
        inheritAttrs: !1,
        setup(Y, { attrs: De, slots: Se }) {
          return () => v(
            {
              ...Y,
              ...De
            },
            Se
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(t.section, K(x));
    }
    function le() {
      for (const v of m().values())
        if (v.tryFocus(), v.isFocus())
          return !0;
      return !1;
    }
    function ee() {
      for (const v of m().values())
        if (v.tryUnfocus(), !v.isFocus())
          return !0;
      return !1;
    }
    e(i);
    const ie = M(() => T()), he = M(() => N()), ke = M(() => G());
    return W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        a == null || a(), a = null, v && (a = W(ie, (x) => {
          x && u.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = W(he, (x) => {
          var Y;
          x && u.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onUpdate;
      },
      (v) => {
        r == null || r(), r = null, v && (r = W(
          ke,
          () => {
            var x;
            u.callAllEvents((x = t.section) == null ? void 0 : x.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(() => {
      var x;
      ce();
      const v = (x = ot()) == null ? void 0 : x.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), Fe(() => {
        var Y;
        D(), u.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onReady);
      });
    }), (v, x) => He((p(), z("div", wa, [
      t.section.beforeComponent ? (p(), E(re(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : P("", !0),
      (p(), E(re(t.section.mainComponent), {
        sectionApi: i,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (p(), E(re(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : P("", !0)
    ], 512)), [
      [Ge, t.section.hidden !== !0]
    ]);
  }
}), $a = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, za = ["index"], qa = /* @__PURE__ */ j({
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
    }, D = () => {
    };
    const s = O(), B = O(!1), f = O([]);
    function F() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value);
    }
    function w() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value), u.callAllEvents(t.field.events.onReset), g(), Fe(() => {
        v();
      });
    }
    function S(C) {
      const q = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return C == null || C === "" ? !1 : C;
        case "date":
          return C == null || C === "" ? null : _e.formatDate(
            u.superExtractDate(String(C), q.formSettings.backendDateFormat),
            q.formSettings.dateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : _e.formatDate(
            u.superExtractDate(
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
          return C == null || C === "" ? null : _e.formatDate(
            u.superExtractDate(String(C), q.formSettings.dateFormat),
            q.formSettings.backendDateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : _e.formatDate(
            u.superExtractDate(String(C), q.formSettings.datetimeFormat),
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
    function N() {
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
      i(), u.callAllEvents(t.field.events.onClear);
    }
    function A(C) {
      s.value = C;
    }
    function m() {
      return c(s);
    }
    function l() {
      return T(c(s));
    }
    function h(C) {
      f.value = C;
    }
    function V() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function R() {
      const C = V();
      C.hidden = !0, u.callAllEvents(t.field.events.onHide);
    }
    function G() {
      const C = V();
      C.hidden = !1, u.callAllEvents(t.field.events.onUnhide);
    }
    function ce(C) {
      const q = V();
      q.readonly = C;
    }
    function le(C) {
      const q = V();
      q.cssClass = C;
    }
    function ee(C) {
      const q = V();
      q.label = C;
    }
    function ie() {
      const C = a();
      return u.callAllEvents(t.field.events.onValidated), C;
    }
    function he() {
      return n();
    }
    function ke() {
      return !he();
    }
    function v() {
      return r();
    }
    function x() {
      B.value || (_(), B.value = !0);
    }
    function Y() {
      B.value && (D(), B.value = !1);
    }
    function De() {
      return B.value;
    }
    function Se(C) {
      const q = V();
      q.bindings = u.deepMergeObject(
        u.deepDupeObject(q.bindings),
        u.deepDupeObject(C)
      );
    }
    function Le(C, q, de, Ve, Ee, Re, Oe) {
      a = C, n = q, r = de, Ve && (g = Ve), Ee && (i = Ee), Re && (_ = Re), Oe && (D = Oe);
    }
    const be = {
      softReset: F,
      reset: w,
      clear: N,
      validate: ie,
      isValid: he,
      isInvalid: ke,
      hide: R,
      unhide: G,
      resetValidation: v,
      getValueDeserialized: l,
      getValueSerialized: m,
      setupBackendErrors: h,
      setReadonlyState: ce,
      setCssClass: le,
      setLabel: ee,
      tryFocus: x,
      tryUnfocus: Y,
      isFocus: De,
      addBindings: Se,
      setValue: A,
      field: t.field
    };
    return e(be), W(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        u.callAllEvents(t.field.events.onUpdate);
      }
    ), W(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? s.value : null,
      (C) => {
        C ? u.callAllEvents(t.field.events.onIsValid) : u.callAllEvents(t.field.events.onIsInvalid);
      }
    ), J(() => {
      var q, de;
      F();
      const C = (q = ot()) == null ? void 0 : q.exposed;
      C && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        C
      ), u.callAllEvents((de = t.field) == null ? void 0 : de.events.onReady);
    }), (C, q) => He((p(), z("div", null, [
      t.field.beforeComponent ? (p(), E(re(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: be
      }, null, 8, ["formApi"])) : P("", !0),
      (p(), E(re(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: w,
        clear: N,
        getValueDeserialized: l,
        getValueSerialized: m,
        validate: ie,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: Le
      }, null, 8, ["modelValue", "field", "formApi"])),
      t.field.afterComponent ? (p(), E(re(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: be
      }, null, 8, ["formApi"])) : P("", !0),
      f.value.length > 0 ? (p(), z("div", $a, [
        (p(!0), z(me, null, pe(f.value, (de, Ve) => (p(), z("div", {
          index: Ve,
          class: "flex column"
        }, L(de), 9, za))), 256))
      ])) : P("", !0)
    ], 512)), [
      [Ge, t.field.hidden !== !0]
    ]);
  }
}), Ia = { class: "flex column" }, Ma = /* @__PURE__ */ j({
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
    let a = null, n = "", r = 0, g = 0, i = null, _ = null, D = null, s = null;
    const B = at(), f = O(Ce.getEmptyFormBeforeInit()), F = O(!1), w = O(!1), S = O(!1), T = O(!1), N = O("create"), A = O({}), m = O(/* @__PURE__ */ new Map()), l = O(/* @__PURE__ */ new Map());
    async function h() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), f.value = Ce.getForm(
        t.resourceName,
        t.resourceId,
        R(),
        a,
        t.formSettings,
        t.formBindings,
        t.context,
        ye,
        t.eventManager
      ), r = f.value.sections.length, g = f.value.sections.reduce((d, y) => (d += y.fields.length, d), 0), t.resourceId && (N.value = "edit");
    }
    async function V() {
      var $, oe, Te;
      if (!le())
        return;
      u.callAllEvents(($ = f.value) == null ? void 0 : $.events.onSubmit), T.value = !0, Y();
      const d = G(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: f.value.context
      });
      if (s = y.resource_data, y.success)
        A.value = {}, N.value === "create" && (N.value = "edit"), a && y.resource_data && (a.resource_data = y.resource_data), f.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          R(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formBindings,
          f.value.context,
          ye,
          t.eventManager
        ), he(), n = JSON.stringify(G()), u.callAllEvents((Te = f.value) == null ? void 0 : Te.events.onSubmitSuccess);
      else {
        A.value = {};
        const Ne = [];
        for (const [fe, St] of l.value) {
          const Ke = y.errors[fe];
          Ke && (St.setupBackendErrors(Ke), Ne.push(fe));
        }
        Object.entries(y.errors).forEach((fe) => {
          Ne.includes(fe[0]) || (A.value[fe[0]] = fe[1]);
        }), u.callAllEvents((oe = f.value) == null ? void 0 : oe.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function R() {
      const d = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in B) {
        const $ = B[y];
        if ($) {
          const oe = j({
            inheritAttrs: !1,
            setup(Te, { attrs: Ne, slots: fe }) {
              return () => $({
                ...Te,
                ...Ne,
                innerSlots: fe
              });
            }
          });
          switch (y) {
            case "sections":
              d.sectionComponent = oe;
              break;
            case "actions":
              d.actionComponent = oe;
              break;
            case "orphan-errors":
              d.orphanErrorsComponent = oe;
              break;
            case "association-display":
              d.associationDisplayComponent = oe;
              break;
            default:
              d.dynamicComponentRecord[y] = oe;
              break;
          }
        }
      }
      return d;
    }
    function G() {
      const d = {};
      for (const [y, $] of l.value)
        d[y] = $.getValueDeserialized();
      return d;
    }
    function ce() {
      const d = {};
      for (const [y, $] of l.value)
        d[y] = $.getValueSerialized();
      return d;
    }
    function le() {
      var y;
      let d = !0;
      return l.value.forEach(($) => {
        if (!$.validate()) {
          d = !1;
          return;
        }
      }), u.callAllEvents((y = f.value) == null ? void 0 : y.events.onValidated), d;
    }
    function ee() {
      let d = !0;
      return l.value.forEach((y) => {
        if (!y.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function ie() {
      return !ee();
    }
    function he() {
      m.value.forEach((d) => {
        d.softReset();
      });
    }
    function ke() {
      var d;
      l.value.forEach((y) => {
        y.reset();
      }), u.callAllEvents((d = f.value) == null ? void 0 : d.events.onReset);
    }
    function v() {
      var d;
      l.value.forEach((y) => {
        y.clear();
      }), u.callAllEvents((d = f.value) == null ? void 0 : d.events.onClear);
    }
    function x() {
      l.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function Y() {
      l.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function De(d) {
      if (a)
        return a.resource_data[d];
    }
    function Se(d) {
      return m.value.get(d);
    }
    function Le(d) {
      return [...m.value.values()].at(d);
    }
    function be() {
      return m.value;
    }
    function C(d) {
      return l.value.get(d);
    }
    function q() {
      return l.value;
    }
    function de() {
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
      return c(N);
    }
    function Re() {
      return n !== JSON.stringify(G());
    }
    function Oe(d) {
      f.value && (f.value.context = d);
    }
    function ft(d) {
      f.value && (f.value.cssClass = d);
    }
    function mt(d) {
      f.value && (f.value.readonly = d);
    }
    function pt() {
      return S.value;
    }
    function gt() {
      return s;
    }
    function Ye() {
      for (const d of be().values())
        if (d.tryFocusFirst())
          return !0;
      return !1;
    }
    function vt() {
      for (const d of be().values())
        if (d.tryUnfocus())
          return !0;
      return !1;
    }
    function ht() {
      return f;
    }
    function bt(d) {
      var y;
      return (y = f.value) == null ? void 0 : y.sections.find(($) => $.name === d);
    }
    function yt(d) {
      var y;
      return (y = f.value) == null ? void 0 : y.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === d);
    }
    function _t(d, y) {
      m.value.set(d, y), r === m.value.size && (F.value = !0);
    }
    function Ct(d, y) {
      l.value.set(d, y), g === l.value.size && (w.value = !0);
    }
    function Ft(d, y) {
      d.fieldsComponent = y;
    }
    const We = M(() => ee()), Vt = M(() => ie()), kt = M(() => ce()), Je = {
      getFormRef: ht,
      getSectionRef: bt,
      getFieldRef: yt,
      registerSectionWrapperRef: _t,
      registerFieldWrapperRef: Ct,
      setSectionFieldComponent: Ft
    }, Dt = new Proxy({}, {
      get(d, y) {
        var $;
        return ($ = f.value) == null ? void 0 : $[y];
      }
    }), ye = {
      getMode: Ee,
      getSectionByName: Se,
      getSectionByIndex: Le,
      getSections: be,
      getFieldByName: C,
      getFields: q,
      validate: le,
      isValid: ee,
      isInvalid: ie,
      softReset: he,
      reset: ke,
      clear: v,
      resetValidation: x,
      submit: V,
      valuesHasChanged: Re,
      getInitialValueByFieldName: De,
      getAssociationDataCallback: de,
      setContext: Oe,
      setCssClass: ft,
      setReadonlyState: mt,
      isReady: pt,
      getSubmitData: gt,
      tryFocusFirst: Ye,
      tryUnfocus: vt,
      form: Dt,
      refs: {
        orphanErrors: Be(A),
        isLoadingSubmit: Be(T),
        setupIsDone: Be(S),
        isFormValid: Be(We)
      }
    };
    return e(ye), W(
      () => F.value && w.value,
      (d) => {
        var y;
        d && !S.value && (u.callAllEvents((y = f.value) == null ? void 0 : y.events.onReady), S.value = !0);
      }
    ), W(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        i == null || i(), i = null, d && (i = W(We, (y) => {
          var $;
          y && u.callAllEvents(($ = f.value) == null ? void 0 : $.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        _ == null || _(), _ = null, d && (_ = W(Vt, (y) => {
          var $;
          y && u.callAllEvents(($ = f.value) == null ? void 0 : $.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var d;
        return (d = f.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        D == null || D(), D = null, d && (D = W(
          kt,
          () => {
            var y;
            u.callAllEvents((y = f.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(async () => {
      Ve(), await h(), Fe(() => {
        n = JSON.stringify(G()), f.value.formSettings.autofocus && Ye();
      });
    }), (d, y) => He((p(), z("div", Ia, [
      H("div", {
        class: nt(f.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), z(me, null, pe(f.value.sections, ($) => (p(), E(Ua, {
          key: $.name,
          section: $,
          formApi: ye,
          privateFormApi: Je
        }, {
          default: b(() => [
            (p(!0), z(me, null, pe($.fields, (oe) => (p(), E(qa, {
              key: oe.metadata.field_name,
              field: oe,
              formApi: ye,
              privateFormApi: Je
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), E(re(f.value.orphanErrorsComponent), { formApi: ye })),
      (p(), E(re(f.value.actionComponent), { formApi: ye }))
    ], 512)), [
      [Ge, S.value]
    ]);
  }
});
export {
  Ie as DynamicLogicBuilder,
  Z as Submit64,
  Ma as Submit64Form
};
