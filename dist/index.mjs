var xt = Object.defineProperty;
var Et = (o, e, t) => e in o ? xt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var U = (o, e, t) => Et(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as p, createElementBlock as q, createElementVNode as Q, createVNode as k, unref as u, mergeProps as P, createBlock as E, createCommentVNode as L, normalizeClass as at, toDisplayString as M, resolveDynamicComponent as ie, resolveComponent as Ot, normalizeProps as ue, guardReactiveProps as ce, withCtx as b, createTextVNode as ne, Fragment as pe, renderList as ge, ref as R, computed as G, onMounted as K, nextTick as Fe, watch as J, markRaw as X, useSlots as ot, getCurrentInstance as rt, withDirectives as Ge, vShow as Qe, readonly as Ne } from "vue";
import { QBtn as Z, QIcon as Ae, QItem as ve, QItemSection as ae, QItemLabel as oe, QInput as xe, QPopupProxy as $e, QDate as it, QTime as Rt, QCheckbox as Bt, QSelect as Ye, QColor as Tt, QEditor as Nt, IconSet as we, Lang as Ue, QUploader as lt, QList as ze, QSeparator as st, QUploaderAddTrigger as ut, date as j } from "quasar";
const wt = { class: "flex column" }, Ut = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, $t = /* @__PURE__ */ H({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), q("div", wt, [
      Q("div", Ut, [
        k(u(Z), P(e.formApi.form.bindings.form.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (p(), E(u(Z), P({ key: 0 }, e.formApi.form.bindings.form.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : L("", !0),
        e.formApi.form.formSettings.showClearButton ? (p(), E(u(Z), P({ key: 1 }, e.formApi.form.bindings.form.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : L("", !0)
      ])
    ]));
  }
}), zt = { class: "flex row items-center" }, qt = { class: "text-body1 text-weight-medium" }, It = { class: "flex column q-gutter-md" }, Pt = /* @__PURE__ */ H({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), q("div", {
      class: at(e.sectionApi.section.cssClass)
    }, [
      Q("div", zt, [
        e.sectionApi.section.icon ? (p(), E(u(Ae), P({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : L("", !0),
        Q("div", qt, M(e.sectionApi.section.label), 1)
      ]),
      Q("div", It, [
        (p(), E(ie(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Lt = /* @__PURE__ */ H({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Ot("q-icon");
      return p(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (r) => e.reset())
      });
    };
  }
}), jt = /* @__PURE__ */ H({
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
                ne(M(e.entry.label), 1)
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
}), Mt = { class: "flex column" }, Ht = /* @__PURE__ */ H({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (p(), q("div", Mt, [
      (p(!0), q(pe, null, ge(e.formApi.refs.orphanErrors.value, (n, r) => (p(), q("div", {
        key: r,
        class: "q-field--error q-field__bottom text-negative"
      }, M(r) + " : " + M(n.join(",")), 1))), 128))
    ]));
  }
}), $ = {
  outlined: !0,
  dense: !0,
  filled: !1,
  standout: !1,
  borderless: !1,
  rounded: !1,
  square: !1,
  color: "primary",
  bgColor: "",
  hideBottomSpace: !0,
  noCaps: !0
}, he = {
  hideBottomSpace: $.hideBottomSpace,
  outlined: $.outlined,
  dense: $.dense,
  filled: $.filled,
  standout: $.standout,
  borderless: $.borderless,
  rounded: $.rounded,
  square: $.square,
  color: $.color,
  bgColor: $.bgColor,
  lazyRules: !1
}, He = {
  noCaps: $.noCaps
}, qe = {
  cover: !0,
  transitionShow: "scale",
  transitionHide: "scale"
};
function Gt() {
  return {
    ...he
  };
}
function Qt() {
  return {
    ...he
  };
}
function Yt() {
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
function Wt() {
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
    },
    square: $.square,
    dense: $.dense
  };
}
function Jt() {
  return {
    color: $.color,
    dense: $.dense
  };
}
function Kt() {
  return {
    input: {
      ...he
    },
    icon: {
      size: "sm",
      color: $.color,
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...qe
    },
    date: {
      color: $.color
    },
    btn: {
      label: "Fermer",
      color: $.color,
      noCaps: He.noCaps
    }
  };
}
function Xt() {
  return {
    input: {
      ...he
    },
    iconDate: {
      size: "sm",
      color: $.color,
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...qe
    },
    date: {
      color: $.color
    },
    btnDate: {
      label: "Fermer",
      color: $.color,
      noCaps: He.noCaps
    },
    iconDatetime: {
      size: "sm",
      color: $.color,
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
      color: $.color,
      noCaps: He.noCaps
    }
  };
}
function Zt() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: $.dense
    }
  };
}
function en() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: $.dense
    }
  };
}
function tn() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: $.dense
    }
  };
}
function nn() {
  return {
    uploader: {
      bordered: !0,
      square: $.square,
      color: $.color,
      flat: !1
    }
  };
}
function an() {
  return {
    uploader: {
      bordered: !0,
      square: $.square,
      color: $.color,
      flat: !1
    }
  };
}
function on() {
  return {
    icon: {
      color: $.color
    }
  };
}
function rn() {
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
function ln() {
  return {
    fields: {
      string: Gt(),
      number: Qt(),
      wysiwyg: Wt(),
      color: Yt(),
      checkbox: Jt(),
      date: Kt(),
      datetime: Xt(),
      select: tn(),
      hasMany: en(),
      belongsTo: Zt(),
      attachmentBelongsTo: nn(),
      attachmentHasMany: an()
    },
    sections: on(),
    form: {
      actions: rn()
    }
  };
}
function sn() {
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
const ct = {
  getDefaultFormBindings: ln,
  getEmptyDefaultBindings: sn
};
function un(o) {
  o == null || o.forEach((e) => {
    e();
  });
}
function cn(o) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(o.toString(), 10) >= 1024 && t < e.length - 1; )
    o /= 1024, ++t;
  return `${o.toFixed(1)}${e[t]}`;
}
function dt(o, e) {
  const t = { ...o };
  for (const a of Object.keys(e)) {
    const n = e[a], r = t[a];
    n && typeof n == "object" && !Array.isArray(n) && r && typeof r == "object" && !Array.isArray(r) ? t[a] = dt(
      r,
      n
    ) : n !== void 0 && (t[a] = n);
  }
  return t;
}
function dn(o) {
  return typeof structuredClone == "function" ? structuredClone(o) : JSON.parse(JSON.stringify(o));
}
const m = {
  callAllEvents: un,
  humanStorageSize: cn,
  deepMergeObject: dt,
  deepDupeObject: dn
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
    }, this._formBind = ct.getDefaultFormBindings(), this._actionComponent = $t, this._orphanErrorsComponent = Ht, this._sectionComponent = Pt, this._wrapperResetComponent = Lt, this._associationDisplayComponent = jt;
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
const pn = { class: "row items-center justify-end" }, gn = /* @__PURE__ */ H({
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
    const e = o, t = R(), a = R();
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
    const s = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(r, g, i, void 0, void 0, _, S), Fe(() => {
        var N;
        (N = a.value) == null || N.resetValidation();
      });
    }), (N, d) => (p(), E(u(xe), P({
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
            k(u($e), P({
              ref_key: "popupProxyRef",
              ref: t
            }, s.value.popupProxy), {
              default: b(() => [
                k(u(it), P(s.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", pn, [
                      k(u(Z), P(s.value.btn, { onClick: n }), null, 16)
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
}), vn = { class: "row items-center justify-end" }, hn = { class: "row items-center justify-end" }, bn = /* @__PURE__ */ H({
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
    const e = o, t = R(), a = R(), n = R();
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
    const d = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(i, _, S, void 0, void 0, s, N), Fe(() => {
        var F;
        (F = n.value) == null || F.resetValidation();
      });
    }), (F, w) => (p(), E(u(xe), P({
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
            k(u($e), P({ ref: "popupProxyRef" }, d.value.popupProxyDate), {
              default: b(() => [
                k(u(it), P(d.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", vn, [
                      k(u(Z), P(d.value.btnDate, { onClick: r }), null, 16)
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
            k(u($e), P({
              ref_key: "timePopupProxyRef",
              ref: a
            }, d.value.popupProxyDate), {
              default: b(() => [
                k(u(Rt), P(d.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", hn, [
                      k(u(Z), P(d.value.btnDatetime, { onClick: g }), null, 16)
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
}, Cn = /* @__PURE__ */ H({
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
    const e = o, t = R(!0);
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
    }), (g, i) => (p(), q("div", yn, [
      k(u(Bt), P({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (p(), q("div", _n, M(t.value), 1)) : L("", !0)
    ]));
  }
}), Fn = /* @__PURE__ */ H({
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
    const e = o, t = R([]), a = R([]), n = R();
    function r(w, D) {
      if (w === "") {
        D(() => {
          a.value = [...t.value];
        });
        return;
      }
      D(() => {
        const B = w.toLowerCase();
        a.value = t.value.filter((T) => T.label.toLowerCase().includes(B));
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
    const F = G(() => e.field.bindings);
    return K(() => {
      g(), e.registerBehaviourCallbacks(i, _, S, void 0, s, N, d);
    }), (w, D) => (p(), E(u(Ye), P({
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
                    ne(M(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Ze = "__init", et = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = R([]), n = R(
      i()
    ), r = R(), g = R(Ze);
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
      n.value = i(), a.value = [], g.value = Ze;
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
    function B() {
      r.value && r.value.blur();
    }
    const T = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        N,
        d,
        S,
        F,
        D,
        B
      ), Fe(() => {
        S();
      });
    }), (A, f) => (p(), E(u(Ye), P({
      ref_key: "fieldRef",
      ref: r
    }, T.value.select, {
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
        k(u(ve), ue(ce(T.value.itemNoOption)), {
          default: b(() => [
            k(u(ae), null, {
              default: b(() => [
                k(u(oe), null, {
                  default: b(() => [
                    ne(M(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), tt = "__init", nt = /* @__PURE__ */ H({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = R([]), n = R(
      i()
    ), r = R(), g = R(tt);
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
      n.value = i(), a.value = [], g.value = tt;
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
    function B() {
      r.value && r.value.blur();
    }
    const T = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        N,
        d,
        S,
        F,
        D,
        B
      ), Fe(() => {
        S();
      });
    }), (A, f) => (p(), E(u(Ye), P({
      ref_key: "fieldRef",
      ref: r
    }, T.value.select, {
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
        k(u(ve), ue(ce(T.value.itemNoOption)), {
          default: b(() => [
            k(u(ae), null, {
              default: b(() => [
                k(u(oe), null, {
                  default: b(() => [
                    ne(M(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), je = /* @__PURE__ */ H({
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
    const e = o, t = R();
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
    }), (_, S) => (p(), E(u(xe), P({
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
}), Vn = /* @__PURE__ */ H({
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
    const e = o, t = R();
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
    }), (_, S) => (p(), E(u(xe), P({
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
}), kn = /* @__PURE__ */ H({
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
    const e = o, t = R();
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
    const _ = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, g, i);
    }), (S, s) => (p(), E(u(xe), P({
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
                k(u(Tt), P(_.value.color, {
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
}), Sn = /* @__PURE__ */ H({
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
    const e = o, t = R();
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
          const B = F[D];
          if (B.type.startsWith("image/")) {
            const T = B.getAsFile();
            T && _(T);
          }
        }
    }
    function i(d) {
      var w;
      d.preventDefault(), d.stopPropagation();
      const F = (w = d.dataTransfer) == null ? void 0 : w.files;
      if (F)
        for (let D = 0; D < F.length; D++) {
          const B = F[D];
          B.type.startsWith("image/") && B && _(B);
        }
    }
    function _(d) {
      if (!t.value)
        return;
      const F = new FileReader();
      F.onload = (w) => {
        var B;
        const D = (B = w.target) == null ? void 0 : B.result;
        if (typeof D == "string") {
          const T = new Image();
          T.onload = () => {
            var l;
            const A = T.width, f = T.height;
            (l = t.value) == null || l.runCmd(
              "insertHTML",
              `<img src="${D}" width="${A}" height="${f}" style="max-width: 80%; height: auto;" />`
            );
          }, T.src = D;
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
    }), (d, F) => (p(), E(u(Nt), P({
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
}), Dn = /* @__PURE__ */ H({
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
}), An = { class: "flex column" }, xn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, En = { class: "col" }, On = { class: "q-uploader__title" }, Rn = {
  key: 0,
  class: "flex column"
}, Bn = {
  key: 2,
  class: "flex column"
}, Tn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Nn = /* @__PURE__ */ H({
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
    const e = o, t = R(null), a = R(!1);
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
        const V = new Blob([l]), O = new FileReader();
        O.onload = (Y) => {
          var le;
          const de = ((le = Y.target) == null ? void 0 : le.result) ?? "", [se, te] = de.split(",");
          h(te);
        }, O.readAsDataURL(V);
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
    const B = G(() => (e.field.attachmentData ?? []).length === 0), T = G(() => e.modelValue ? e.modelValue.delete : []), A = G(() => {
      var l, h;
      return e.modelValue ? (((l = e.field.attachmentData) == null ? void 0 : l.length) ?? 0) === 0 || (((h = e.field.attachmentData) == null ? void 0 : h.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), f = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (l, h) => (p(), q("div", An, [
      k(u(lt), P(f.value.uploader, {
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
          Q("div", xn, [
            Q("div", En, [
              Q("div", On, M(e.field.label), 1)
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
                k(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: b((V) => [
          B.value ? L("", !0) : (p(), q("div", Rn, [
            h[0] || (h[0] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            k(u(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), q(pe, null, ge(e.field.attachmentData ?? [], (O) => (p(), E(u(ve), {
                  key: O.attachment_id
                }, {
                  default: b(() => [
                    k(u(ae), null, {
                      default: b(() => [
                        k(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(M(O.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(M(u(m).humanStorageSize(O.size)), 1)
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
                        T.value.includes(O.attachment_id) ? L("", !0) : (p(), E(u(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => F(O)
                        }, null, 8, ["disable", "onClick"])),
                        T.value.includes(O.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(u(Z), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: w
                        }, null, 8, ["disable"])) : L("", !0)
                      ]),
                      _: 2
                    }, 1024)) : L("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ])),
          !B.value && V.files.length > 0 ? (p(), E(u(st), { key: 1 })) : L("", !0),
          V.files.length > 0 ? (p(), q("div", Bn, [
            h[1] || (h[1] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            k(u(ze), { separator: "" }, {
              default: b(() => [
                (p(!0), q(pe, null, ge(V.files, (O) => (p(), E(u(ve), {
                  key: O.__key
                }, {
                  default: b(() => [
                    k(u(ae), null, {
                      default: b(() => [
                        k(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(M(O.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        k(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(M(O.__sizeLabel), 1)
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
                          onClick: (Y) => V.removeFile(O)
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
          ])) : L("", !0)
        ]),
        _: 1
      }, 16, ["label", "class", "readonly"]),
      t.value !== null ? (p(), q("div", Tn, M(t.value), 1)) : L("", !0)
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
}, Mn = /* @__PURE__ */ H({
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
    const e = o, t = R(null), a = R(!1);
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
        V.onload = (O) => {
          var te;
          const Y = ((te = O.target) == null ? void 0 : te.result) ?? "", [de, se] = Y.split(",");
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
        V.add = V.add.filter((O) => O.key !== h.key), e.modelValueOnUpdate(V);
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
    const B = G(() => (e.field.attachmentData ?? []).length === 0), T = G(() => e.modelValue ? e.modelValue.delete : []), A = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(g, i, _, n, r);
    }), (f, l) => (p(), q("div", wn, [
      k(u(lt), P(A.value.uploader, {
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
          Q("div", Un, [
            Q("div", $n, [
              Q("div", zn, M(e.field.label), 1)
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
                k(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: b((h) => {
          var V;
          return [
            B.value ? L("", !0) : (p(), q("div", qn, [
              Q("div", In, "Fichier" + M((((V = e.field.attachmentData) == null ? void 0 : V.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              k(u(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), q(pe, null, ge(e.field.attachmentData ?? [], (O) => (p(), E(u(ve), {
                    key: O.attachment_id
                  }, {
                    default: b(() => [
                      k(u(ae), null, {
                        default: b(() => [
                          k(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(M(O.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(M(u(m).humanStorageSize(O.size)), 1)
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
                          T.value.includes(O.attachment_id) ? L("", !0) : (p(), E(u(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => F(O)
                          }, null, 8, ["disable", "onClick"])),
                          T.value.includes(O.attachment_id) && e.modelValue.add.length === 0 ? (p(), E(u(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Y) => w(O)
                          }, null, 8, ["disable", "onClick"])) : L("", !0)
                        ]),
                        _: 2
                      }, 1024)) : L("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 1
              })
            ])),
            !B.value && h.files.length > 0 ? (p(), E(u(st), { key: 1 })) : L("", !0),
            h.files.length > 0 ? (p(), q("div", Pn, [
              Q("div", Ln, "Fichier" + M(h.files.length > 0 ? "s" : "") + " à ajouter", 1),
              k(u(ze), { separator: "" }, {
                default: b(() => [
                  (p(!0), q(pe, null, ge(h.files, (O) => (p(), E(u(ve), {
                    key: O.__key
                  }, {
                    default: b(() => [
                      k(u(ae), null, {
                        default: b(() => [
                          k(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(M(O.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          k(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(M(O.__sizeLabel), 1)
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
                            onClick: (Y) => h.removeFile(O)
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
            ])) : L("", !0)
          ];
        }),
        _: 1
      }, 16, ["label", "class", "readonly"]),
      t.value !== null ? (p(), q("div", jn, M(t.value), 1)) : L("", !0)
    ]));
  }
});
function Hn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (S, s, N) => S[s] ? N ? () => g(S[s]) : () => S[s] : S.compare_to ? () => {
    var d;
    return ((d = e.getFieldByName(S.compare_to)) == null ? void 0 : d.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", g = (S) => String(
    j.formatDate(
      j.extractDate(S, n.formSettings.backendDateFormat),
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
        i.push(Gn());
        break;
      case "absence":
        i.push(Yn());
        break;
      case "acceptance":
        i.push(Wn());
        break;
      case "inclusion":
        i.push(ft(s.including));
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
          Sa(
            r(s, "including")
          )
        );
        break;
      case "equalToFileLength":
        i.push(
          Da(
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
          Oa(
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
          Ba(
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
        return Kn(i);
      case "allowNull":
        return Jn(i);
    }
  }) : i;
}
function Gn() {
  return (o) => !!o || "Ce champ est requis";
}
function ft(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function Qn(o) {
  return (e) => !o.includes(
    String(e) || `Ne doit pas être contenu dans ${ft.toString()}`
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
    const a = o(), n = j.extractDate(String(t), e), r = j.extractDate(a, e);
    return n <= r || `Inf. ou égal à ${a}`;
  };
}
function ba(o, e) {
  return (t) => {
    const a = o(), n = j.extractDate(String(t), e), r = j.extractDate(a, e);
    return n < r || `Inf. à ${a}`;
  };
}
function ya(o, e) {
  return (t) => {
    const a = o(), n = j.extractDate(String(t), e), r = j.extractDate(a, e);
    return n >= r || `Sup. ou égal à ${a}`;
  };
}
function _a(o, e) {
  return (t) => {
    const a = o(), n = j.extractDate(String(t), e), r = j.extractDate(a, e);
    return n > r || `Sup. à ${a}`;
  };
}
function Ca(o, e) {
  return (t) => {
    const a = o(), n = j.extractDate(String(t), e), r = j.extractDate(a, e);
    return n === r || `Égale à ${n}`;
  };
}
function Fa(o, e) {
  return (t) => {
    const a = o();
    return j.extractDate(String(t), e) !== j.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function Me(o) {
  return (e) => e == null || e === "" ? !0 : Va(e, o) || `Date invalide. Format : ${o}`;
}
function Va(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = j.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : j.formatDate(t, e) === o;
}
function ka() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function Sa(o) {
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
function Da(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && a !== r.size && (n = !1);
    }), n || `Taille par fichier ${m.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${m.humanStorageSize(a)}`;
  };
}
function xa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${m.humanStorageSize(a)}`;
  };
}
function Ea(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.length <= a || `${a} fichier${a > 1 ? "s" : ""} max.`;
  };
}
function Oa(o) {
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
function Ba(o) {
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
const Na = {
  computeServerRules: Hn
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
      bindings: ct.getEmptyDefaultBindings(),
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
          const w = this.dynamicComponentRecord[`field-${F.field_name}-before`], D = Ce.getFieldComponentByFormFieldType(F), B = this.dynamicComponentRecord[`field-${F.field_name}-after`], T = {
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
            afterComponent: B ? X(B) : void 0,
            events: a.fields[F.field_name] ?? {},
            componentOptions: T
          };
          l.computedRules = Na.computeServerRules(
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
            return kn;
          case "wysiwyg":
            return Sn;
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
        return et;
      case "selectHasMany":
        return nt;
      case "selectHasAndBelongsToMany":
        return nt;
      case "selectHasOne":
        return et;
      case "checkbox":
        return Cn;
      case "object":
        return Dn;
      case "attachmentHasOne":
        return Nn;
      case "attachmentHasMany":
        return Mn;
      default:
        return je;
    }
  }
}
const wa = { class: "flex column" }, Ua = /* @__PURE__ */ H({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = null, n = null, r = null;
    const g = ot(), i = {
      softReset: s,
      reset: N,
      clear: d,
      validate: D,
      isValid: B,
      isInvalid: T,
      hide: F,
      unhide: w,
      resetValidation: A,
      getFields: f,
      setReadonlyState: l,
      setCssClass: h,
      setIcon: V,
      setLabel: O,
      tryFocusFirst: se,
      tryUnfocus: te,
      section: t.section
    }, _ = R(/* @__PURE__ */ new Map());
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
    function B() {
      let v = !0;
      return _.value.forEach((x) => {
        if (!x.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function T() {
      return !B();
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
    function O(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = v);
    }
    function Y() {
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
      const x = H({
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
    const le = G(() => B()), be = G(() => T()), ke = G(() => Y());
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
      const v = (x = rt()) == null ? void 0 : x.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), Fe(() => {
        var W;
        S(), m.callAllEvents((W = t.section) == null ? void 0 : W.events.onReady);
      });
    }), (v, x) => Ge((p(), q("div", wa, [
      t.section.beforeComponent ? (p(), E(ie(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : L("", !0),
      (p(), E(ie(t.section.mainComponent), {
        sectionApi: i,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (p(), E(ie(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: i
      }, null, 8, ["formApi"])) : L("", !0)
    ], 512)), [
      [Qe, t.section.hidden !== !0]
    ]);
  }
}), $a = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, za = ["index"], qa = /* @__PURE__ */ H({
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
    const s = R(), N = R(!1), d = R([]);
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
      const I = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return C == null || C === "" ? !1 : C;
        case "date":
          return C == null || C === "" ? null : j.formatDate(
            j.extractDate(String(C), I.formSettings.backendDateFormat),
            I.formSettings.dateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : j.formatDate(
            j.extractDate(
              String(C),
              I.formSettings.backendDatetimeFormat
            ),
            I.formSettings.datetimeFormat
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
    function B(C) {
      const I = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return C == null || C === "" ? null : j.formatDate(
            j.extractDate(String(C), I.formSettings.dateFormat),
            I.formSettings.backendDateFormat
          );
        case "datetime":
          return C == null || C === "" ? null : j.formatDate(
            j.extractDate(String(C), I.formSettings.datetimeFormat),
            I.formSettings.backendDatetimeFormat
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
    function T() {
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
      return B(u(s));
    }
    function h(C) {
      d.value = C;
    }
    function V() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function O() {
      const C = V();
      C.hidden = !0, m.callAllEvents(t.field.events.onHide);
    }
    function Y() {
      const C = V();
      C.hidden = !1, m.callAllEvents(t.field.events.onUnhide);
    }
    function de(C) {
      const I = V();
      I.readonly = C;
    }
    function se(C) {
      const I = V();
      I.cssClass = C;
    }
    function te(C) {
      const I = V();
      I.label = C;
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
      const I = V();
      I.bindings = m.deepMergeObject(
        m.deepDupeObject(I.bindings),
        m.deepDupeObject(C)
      );
    }
    function Le(C, I, fe, Ve, Ee, Oe, Re) {
      a = C, n = I, r = fe, Ve && (g = Ve), Ee && (i = Ee), Oe && (_ = Oe), Re && (S = Re);
    }
    const ye = {
      softReset: F,
      reset: w,
      clear: T,
      validate: le,
      isValid: be,
      isInvalid: ke,
      hide: O,
      unhide: Y,
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
      var I, fe;
      F();
      const C = (I = rt()) == null ? void 0 : I.exposed;
      C && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        C
      ), m.callAllEvents((fe = t.field) == null ? void 0 : fe.events.onReady);
    }), (C, I) => Ge((p(), q("div", null, [
      t.field.beforeComponent ? (p(), E(ie(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : L("", !0),
      (p(), E(ie(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: w,
        clear: T,
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
      }, null, 8, ["formApi"])) : L("", !0),
      d.value.length > 0 ? (p(), q("div", $a, [
        (p(!0), q(pe, null, ge(d.value, (fe, Ve) => (p(), q("div", {
          index: Ve,
          class: "flex column"
        }, M(fe), 9, za))), 256))
      ])) : L("", !0)
    ], 512)), [
      [Qe, t.field.hidden !== !0]
    ]);
  }
}), Ia = { class: "flex column" }, Ma = /* @__PURE__ */ H({
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
    const N = ot(), d = R(Ce.getEmptyFormBeforeInit()), F = R(!1), w = R(!1), D = R(!1), B = R(!1), T = R("create"), A = R({}), f = R(/* @__PURE__ */ new Map()), l = R(/* @__PURE__ */ new Map());
    async function h() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = Ce.getForm(
        t.resourceName,
        t.resourceId,
        O(),
        a,
        t.formSettings,
        t.formBindings,
        t.context,
        _e,
        t.eventManager
      ), r = d.value.sections.length, g = d.value.sections.reduce((c, y) => (c += y.fields.length, c), 0), t.resourceId && (T.value = "edit");
    }
    async function V() {
      var z, re, Be;
      if (!se())
        return;
      m.callAllEvents((z = d.value) == null ? void 0 : z.events.onSubmit), B.value = !0, W();
      const c = Y(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: d.value.context
      });
      if (s = y.resource_data, y.success)
        A.value = {}, T.value === "create" && (T.value = "edit"), a && y.resource_data && (a.resource_data = y.resource_data), d.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          O(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formBindings,
          d.value.context,
          _e,
          t.eventManager
        ), be(), n = JSON.stringify(Y()), m.callAllEvents((Be = d.value) == null ? void 0 : Be.events.onSubmitSuccess);
      else {
        A.value = {};
        const Te = [];
        for (const [me, At] of l.value) {
          const Xe = y.errors[me];
          Xe && (At.setupBackendErrors(Xe), Te.push(me));
        }
        Object.entries(y.errors).forEach((me) => {
          Te.includes(me[0]) || (A.value[me[0]] = me[1]);
        }), m.callAllEvents((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      B.value = !1;
    }
    function O() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in N) {
        const z = N[y];
        if (z) {
          const re = H({
            inheritAttrs: !1,
            setup(Be, { attrs: Te, slots: me }) {
              return () => z({
                ...Be,
                ...Te,
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
    function Y() {
      const c = {};
      for (const [y, z] of l.value)
        c[y] = z.getValueDeserialized();
      return c;
    }
    function de() {
      const c = {};
      for (const [y, z] of l.value)
        c[y] = z.getValueSerialized();
      return c;
    }
    function se() {
      var y;
      let c = !0;
      return l.value.forEach((z) => {
        if (!z.validate()) {
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
    function I() {
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
      return u(T);
    }
    function Oe() {
      return n !== JSON.stringify(Y());
    }
    function Re(c) {
      d.value && (d.value.context = c);
    }
    function mt(c) {
      d.value && (d.value.cssClass = c);
    }
    function pt(c) {
      d.value && (d.value.readonly = c);
    }
    function gt() {
      return D.value;
    }
    function vt() {
      return s;
    }
    function We() {
      for (const c of ye().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function ht() {
      for (const c of ye().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function bt() {
      return d;
    }
    function yt(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.find((z) => z.name === c);
    }
    function _t(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.map((z) => z.fields).flat().find((z) => z.metadata.field_name === c);
    }
    function Ct(c, y) {
      f.value.set(c, y), r === f.value.size && (F.value = !0);
    }
    function Ft(c, y) {
      l.value.set(c, y), g === l.value.size && (w.value = !0);
    }
    function Vt(c, y) {
      c.fieldsComponent = y;
    }
    const Je = G(() => te()), kt = G(() => le()), St = G(() => de()), Ke = {
      getFormRef: bt,
      getSectionRef: yt,
      getFieldRef: _t,
      registerSectionWrapperRef: Ct,
      registerFieldWrapperRef: Ft,
      setSectionFieldComponent: Vt
    }, Dt = new Proxy({}, {
      get(c, y) {
        var z;
        return (z = d.value) == null ? void 0 : z[y];
      }
    }), _e = {
      getMode: Ee,
      getSectionByName: De,
      getSectionByIndex: Le,
      getSections: ye,
      getFieldByName: C,
      getFields: I,
      validate: se,
      isValid: te,
      isInvalid: le,
      softReset: be,
      reset: ke,
      clear: v,
      resetValidation: x,
      submit: V,
      valuesHasChanged: Oe,
      getInitialValueByFieldName: Se,
      getAssociationDataCallback: fe,
      setContext: Re,
      setCssClass: mt,
      setReadonlyState: pt,
      isReady: gt,
      getSubmitData: vt,
      tryFocusFirst: We,
      tryUnfocus: ht,
      form: Dt,
      refs: {
        orphanErrors: Ne(A),
        isLoadingSubmit: Ne(B),
        setupIsDone: Ne(D),
        isFormValid: Ne(Je)
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
        i == null || i(), i = null, c && (i = J(Je, (y) => {
          var z;
          y && m.callAllEvents((z = d.value) == null ? void 0 : z.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        _ == null || _(), _ = null, c && (_ = J(kt, (y) => {
          var z;
          y && m.callAllEvents((z = d.value) == null ? void 0 : z.events.onIsInvalid);
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
          St,
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
        n = JSON.stringify(Y()), d.value.formSettings.autofocus && We();
      });
    }), (c, y) => Ge((p(), q("div", Ia, [
      Q("div", {
        class: at(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (p(!0), q(pe, null, ge(d.value.sections, (z) => (p(), E(Ua, {
          key: z.name,
          section: z,
          formApi: _e,
          privateFormApi: Ke
        }, {
          default: b(() => [
            (p(!0), q(pe, null, ge(z.fields, (re) => (p(), E(qa, {
              key: re.metadata.field_name,
              field: re,
              formApi: _e,
              privateFormApi: Ke
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (p(), E(ie(d.value.orphanErrorsComponent), { formApi: _e })),
      (p(), E(ie(d.value.actionComponent), { formApi: _e }))
    ], 512)), [
      [Qe, D.value]
    ]);
  }
});
export {
  Ie as DynamicLogicBuilder,
  ee as Submit64,
  Ma as Submit64Form
};
