var At = Object.defineProperty;
var xt = (o, e, t) => e in o ? At(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var O = (o, e, t) => xt(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as G, openBlock as m, createElementBlock as q, createElementVNode as Q, createVNode as F, unref as u, mergeProps as P, createBlock as E, createCommentVNode as L, normalizeClass as at, toDisplayString as H, resolveDynamicComponent as le, resolveComponent as Et, normalizeProps as ue, guardReactiveProps as ce, withCtx as h, createTextVNode as ne, Fragment as pe, renderList as ve, ref as B, computed as j, onMounted as K, nextTick as Fe, watch as J, markRaw as X, useSlots as ot, getCurrentInstance as rt, withDirectives as je, vShow as Qe, readonly as Le } from "vue";
import { QBtn as Z, QIcon as Ae, QItem as ge, QItemSection as ae, QItemLabel as oe, IconSet as we, Lang as Oe, QInput as xe, QPopupProxy as Ue, QDate as lt, QTime as Rt, QCheckbox as Nt, QSelect as Ye, QColor as Bt, QEditor as Tt, QUploader as it, QList as $e, QSeparator as st, QUploaderAddTrigger as ut, date as M } from "quasar";
const wt = { class: "flex column" }, Ot = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Ut = /* @__PURE__ */ G({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", wt, [
      Q("div", Ot, [
        F(u(Z), P(e.formApi.form.bindings.form.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (m(), E(u(Z), P({ key: 0 }, e.formApi.form.bindings.form.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : L("", !0),
        e.formApi.form.formSettings.showClearButton ? (m(), E(u(Z), P({ key: 1 }, e.formApi.form.bindings.form.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : L("", !0)
      ])
    ]));
  }
}), $t = { class: "flex row items-center" }, zt = { class: "text-body1 text-weight-medium" }, qt = { class: "flex column q-gutter-md" }, It = /* @__PURE__ */ G({
  __name: "DefaultSectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", {
      class: at(e.sectionApi.section.cssClass)
    }, [
      Q("div", $t, [
        e.sectionApi.section.icon ? (m(), E(u(Ae), P({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : L("", !0),
        Q("div", zt, H(e.sectionApi.section.label), 1)
      ]),
      Q("div", qt, [
        (m(), E(le(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Pt = /* @__PURE__ */ G({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Et("q-icon");
      return m(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (r) => e.reset())
      });
    };
  }
}), Lt = /* @__PURE__ */ G({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), E(u(ge), ue(ce(e.itemProps)), {
      default: h(() => [
        F(u(ae), null, {
          default: h(() => [
            F(u(oe), null, {
              default: h(() => [
                ne(H(e.entry.label), 1)
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
}), Mt = { class: "flex column" }, Ht = /* @__PURE__ */ G({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", Mt, [
      (m(!0), q(pe, null, ve(e.formApi.refs.orphanErrors.value, (n, r) => (m(), q("div", {
        key: r,
        class: "q-field--error q-field__bottom text-negative"
      }, H(r) + " : " + H(n.join(",")), 1))), 128))
    ]));
  }
}), U = {
  outlined: !1,
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
  hideBottomSpace: U.hideBottomSpace,
  outlined: U.outlined,
  dense: U.dense,
  filled: U.filled,
  standout: U.standout,
  borderless: U.borderless,
  rounded: U.rounded,
  square: U.square,
  color: U.color,
  bgColor: U.bgColor,
  lazyRules: !1
}, Ge = {
  noCaps: U.noCaps
}, ze = {
  cover: !0,
  transitionShow: "scale",
  transitionHide: "scale"
};
function Gt() {
  return {
    ...he
  };
}
function jt() {
  return {
    ...he
  };
}
function Qt() {
  return {
    _input: {
      ...he
    },
    _icon: {
      name: "colorize",
      class: "cursor-pointer"
    },
    _popupProxy: {
      ...ze
    },
    _color: {}
  };
}
function Yt() {
  return {
    toolbar: [
      [
        {
          label: Oe.props.editor.align,
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
          label: Oe.props.editor.formatting,
          icon: we.props.editor.formatting,
          list: "no-icons",
          options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
        },
        {
          label: Oe.props.editor.fontSize,
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
          label: Oe.props.editor.defaultFont,
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
    ],
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
    square: U.square,
    dense: U.dense
  };
}
function Wt() {
  return {
    color: U.color,
    dense: U.dense
  };
}
function Jt() {
  return {
    input: {
      ...he
    },
    icon: {
      size: "sm",
      color: U.color,
      name: "event",
      class: "cusor-pointer"
    },
    popupProxy: {
      ...ze
    },
    date: {
      color: U.color
    },
    btn: {
      label: "Fermer",
      color: U.color,
      noCaps: Ge.noCaps
    }
  };
}
function Kt() {
  return {
    input: {
      ...he
    },
    iconDate: {
      size: "sm",
      color: U.color,
      name: "event",
      class: "cusor-pointer"
    },
    popupProxyDate: {
      ...ze
    },
    date: {
      color: U.color
    },
    btnDate: {
      label: "Fermer",
      color: U.color,
      noCaps: Ge.noCaps
    },
    iconDatetime: {
      size: "sm",
      color: U.color,
      name: "access_time",
      class: "cusor-pointer"
    },
    popupProxyDatetime: {
      ...ze
    },
    datetime: {
      format24h: !0
    },
    btnDatetime: {
      label: "Fermer",
      color: U.color,
      noCaps: Ge.noCaps
    }
  };
}
function Xt() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: U.dense
    }
  };
}
function Zt() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: U.dense
    }
  };
}
function en() {
  return {
    select: {
      ...he
    },
    itemNoOption: {
      dense: U.dense
    }
  };
}
function tn() {
  return {
    uploader: {
      bordered: !0,
      square: U.square,
      color: U.color,
      flat: !1
    }
  };
}
function nn() {
  return {
    uploader: {
      bordered: !0,
      square: U.square,
      color: U.color,
      flat: !1
    }
  };
}
function an() {
  return {
    icon: {
      color: U.color
    }
  };
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
      string: Gt(),
      number: jt(),
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
const ln = {
  getDefaultFormBindings: rn
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
  return Object.keys(e).reduce(
    (t, a) => (t[a] = e[a] instanceof Object && !Array.isArray(e[a]) ? ct(
      e[a],
      t[a] ?? {}
    ) : e[a], t),
    { ...o }
  );
}
function cn(o) {
  return JSON.parse(JSON.stringify(o));
}
const R = {
  callAllEvents: sn,
  humanStorageSize: un,
  deepMergeObject: ct,
  deepDupeObject: cn
}, Ie = class Ie {
  constructor() {
    O(this, "_formSettings");
    O(this, "_formBind");
    O(this, "_actionComponent");
    O(this, "_orphanErrorsComponent");
    O(this, "_sectionComponent");
    O(this, "_wrapperResetComponent");
    O(this, "_associationDisplayComponent");
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
    }, this._formBind = ln.getDefaultFormBindings(), this._actionComponent = Ut, this._orphanErrorsComponent = Ht, this._sectionComponent = It, this._wrapperResetComponent = Pt, this._associationDisplayComponent = Lt;
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = {
      ...this._instance._formSettings,
      ...e
    };
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBind = R.deepMergeObject(
      { ...this._instance._formBind },
      { ...e }
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
O(Ie, "_instance", new Ie());
let ee = Ie;
class qe {
  constructor(e) {
    O(this, "formApi");
    O(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const a = e, n = t, r = new dn(a, n, this.formApi);
    return this.events.push(r), new fn(r);
  }
  static create(e) {
    return new qe(e);
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
    O(this, "type");
    O(this, "data");
    O(this, "formApi");
    O(this, "action", () => {
    });
    O(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    O(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const mn = { class: "row items-center justify-end" }, pn = /* @__PURE__ */ G({
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
    const e = o, t = B(), a = B();
    function n() {
      t.value && t.value.hide();
    }
    function r() {
      return a.value ? a.value.validate() : !1;
    }
    function p() {
      return a.value ? !a.value.hasError : !1;
    }
    function l() {
      a.value && a.value.resetValidation();
    }
    function y() {
      a.value && a.value.focus();
    }
    function V() {
      a.value && a.value.blur();
    }
    const s = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(r, p, l, void 0, void 0, y, V), Fe(() => {
        var D;
        (D = a.value) == null || D.resetValidation();
      });
    }), (D, d) => (m(), E(u(xe), P({
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
      append: h(() => [
        F(u(Ae), ue(ce(s.value.icon)), {
          default: h(() => [
            F(u(Ue), P({
              ref_key: "popupProxyRef",
              ref: t
            }, s.value.popupProxy), {
              default: h(() => [
                F(u(lt), P(s.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: h(() => [
                    Q("div", mn, [
                      F(u(Z), P(s.value.btn, { onClick: n }), null, 16)
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
}), vn = { class: "row items-center justify-end" }, gn = { class: "row items-center justify-end" }, hn = /* @__PURE__ */ G({
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
    const e = o, t = B(), a = B(), n = B();
    function r() {
      t.value && t.value.hide();
    }
    function p() {
      a.value && a.value.hide();
    }
    function l() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? !n.value.hasError : !1;
    }
    function V() {
      n.value && n.value.resetValidation();
    }
    function s() {
      n.value && n.value.focus();
    }
    function D() {
      n.value && n.value.blur();
    }
    const d = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(l, y, V, void 0, void 0, s, D), Fe(() => {
        var k;
        (k = n.value) == null || k.resetValidation();
      });
    }), (k, T) => (m(), E(u(xe), P({
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
      append: h(() => [
        F(u(Ae), ue(ce(d.value.iconDate)), {
          default: h(() => [
            F(u(Ue), P({ ref: "popupProxyRef" }, d.value.popupProxyDate), {
              default: h(() => [
                F(u(lt), P(d.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: h(() => [
                    Q("div", vn, [
                      F(u(Z), P(d.value.btnDate, { onClick: r }), null, 16)
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
        F(u(Ae), ue(ce(d.value.iconDate)), {
          default: h(() => [
            F(u(Ue), P({
              ref_key: "timePopupProxyRef",
              ref: a
            }, d.value.popupProxyDate), {
              default: h(() => [
                F(u(Rt), P(d.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: h(() => [
                    Q("div", gn, [
                      F(u(Z), P(d.value.btnDatetime, { onClick: p }), null, 16)
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
}), _n = { class: "flex column" }, yn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, bn = /* @__PURE__ */ G({
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
    const e = o, t = B(!0);
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
      (p) => {
        for (const l of e.field.computedRules)
          if (t.value = l(p), t.value !== !0)
            break;
      }
    ), K(() => {
      e.registerBehaviourCallbacks(a, n, r);
    }), (p, l) => (m(), q("div", _n, [
      F(u(Nt), P({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (m(), q("div", yn, H(t.value), 1)) : L("", !0)
    ]));
  }
}), Cn = /* @__PURE__ */ G({
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
    const e = o, t = B([]), a = B([]), n = B();
    function r(T, S) {
      if (T === "") {
        S(() => {
          a.value = [...t.value];
        });
        return;
      }
      S(() => {
        const w = T.toLowerCase();
        a.value = t.value.filter((z) => z.label.toLowerCase().includes(w));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.field.staticSelectOptions ?? []
      ), a.value = e.field.staticSelectOptions ?? [];
    }
    function l() {
      return n.value ? n.value.validate() : !1;
    }
    function y() {
      return n.value ? !n.value.hasError : !1;
    }
    function V() {
      n.value && n.value.resetValidation();
    }
    function s() {
      a.value = [];
    }
    function D() {
      n.value && n.value.focus();
    }
    function d() {
      n.value && n.value.blur();
    }
    const k = j(() => e.field.bindings);
    return K(() => {
      p(), e.registerBehaviourCallbacks(l, y, V, void 0, s, D, d);
    }), (T, S) => (m(), E(u(Ye), P({
      ref_key: "fieldRef",
      ref: n
    }, k.value.select, {
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
      "no-option": h(() => [
        F(u(ge), ue(ce(k.value.itemNoOption)), {
          default: h(() => [
            F(u(ae), null, {
              default: h(() => [
                F(u(oe), null, {
                  default: h(() => [
                    ne(H(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Ze = "__init", et = /* @__PURE__ */ G({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = B([]), n = B(
      l()
    ), r = B(), p = B(Ze);
    function l() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function y(A, f) {
      if (A === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = A;
      const g = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: g.resourceName,
        resourceId: g.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: g.context
      }).then((C) => {
        f(() => {
          a.value = C.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            C.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = l();
      });
    }
    function V() {
      var f, i;
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = [
        {
          label: ((f = e.field.associationData[0]) == null ? void 0 : f.label) ?? "???",
          value: A,
          data: (i = e.field.associationData[0]) == null ? void 0 : i.data
        }
      ]);
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function D() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function k() {
      n.value = l(), a.value = [], p.value = Ze;
    }
    function T(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const i = e.formApi.form, g = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, g({
          resourceName: i.resourceName,
          resourceId: i.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: p.value,
          context: i.context
        }).then((C) => {
          a.value = a.value.concat(
            C.rows
          ), n.value.lastPage = Math.ceil(
            C.row_count / n.value.limit
          ), C.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, A.ref.refresh();
        });
      }
    }
    function S() {
      r.value && r.value.focus();
    }
    function w() {
      r.value && r.value.blur();
    }
    const z = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        D,
        d,
        V,
        k,
        S,
        w
      ), Fe(() => {
        V();
      });
    }), (A, f) => (m(), E(u(Ye), P({
      ref_key: "fieldRef",
      ref: r
    }, z.value.select, {
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
      onFilter: y,
      onVirtualScroll: T,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      "no-option": h(() => [
        F(u(ge), ue(ce(z.value.itemNoOption)), {
          default: h(() => [
            F(u(ae), null, {
              default: h(() => [
                F(u(oe), null, {
                  default: h(() => [
                    ne(H(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: h((i) => [
        (m(), E(le(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: i.opt,
          itemProps: i.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"]));
  }
}), tt = "__init", nt = /* @__PURE__ */ G({
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
    const e = o, t = e.field.componentOptions.associationDisplayComponent, a = B([]), n = B(
      l()
    ), r = B(), p = B(tt);
    function l() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function y(A, f) {
      if (A === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = A;
      const g = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: g.resourceName,
        resourceId: g.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: g.context
      }).then((C) => {
        f(() => {
          a.value = C.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            C.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = l();
      });
    }
    function V() {
      const A = e.getValueSerialized();
      !A || !e.field.associationData || (a.value = A.map((f, i) => ({
        label: e.field.associationData[i].label ?? "???",
        value: f,
        data: e.field.associationData[i].data
      })));
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function D() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function k() {
      n.value = l(), a.value = [], p.value = tt;
    }
    function T(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const i = e.formApi.form, g = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, g({
          resourceName: i.resourceName,
          resourceId: i.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: p.value,
          context: i.context
        }).then((C) => {
          a.value = a.value.concat(
            C.rows
          ), n.value.lastPage = Math.ceil(
            C.row_count / n.value.limit
          ), C.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, A.ref.refresh();
        });
      }
    }
    function S() {
      r.value && r.value.focus();
    }
    function w() {
      r.value && r.value.blur();
    }
    const z = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        D,
        d,
        V,
        k,
        S,
        w
      ), Fe(() => {
        V();
      });
    }), (A, f) => (m(), E(u(Ye), P({
      ref_key: "fieldRef",
      ref: r
    }, z.value.select, {
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
      onFilter: y,
      onVirtualScroll: T
    }), {
      "no-option": h(() => [
        F(u(ge), ue(ce(z.value.itemNoOption)), {
          default: h(() => [
            F(u(ae), null, {
              default: h(() => [
                F(u(oe), null, {
                  default: h(() => [
                    ne(H(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
      option: h((i) => [
        (m(), E(le(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: i.opt,
          itemProps: i.itemProps
        }, null, 8, ["associationName", "entry", "itemProps"]))
      ]),
      _: 1
    }, 16, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"]));
  }
}), Me = /* @__PURE__ */ G({
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
    const e = o, t = B();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function l() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, p, l);
    }), (y, V) => (m(), E(u(xe), P({
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
}), Fn = /* @__PURE__ */ G({
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
    const e = o, t = B();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function l() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, p, l);
    }), (y, V) => (m(), E(u(xe), P({
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
}), Vn = /* @__PURE__ */ G({
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
    const e = o, t = B();
    function a() {
      return t.value ? t.value.validate() : !1;
    }
    function n() {
      return t.value ? !t.value.hasError : !1;
    }
    function r() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function l() {
      t.value && t.value.blur();
    }
    const y = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, p, l);
    }), (V, s) => (m(), E(u(xe), P({
      ref_key: "fieldRef",
      ref: t
    }, y.value._input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: h(() => [
        F(u(Ae), ue(ce(y.value._icon)), {
          default: h(() => [
            F(u(Ue), ue(ce(y.value._popupProxy)), {
              default: h(() => [
                F(u(Bt), P(y.value._color, {
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
}), kn = /* @__PURE__ */ G({
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
    const e = o, t = B();
    function a() {
      return !!t.value;
    }
    function n() {
      return !!t.value;
    }
    function r() {
    }
    function p(D) {
      var k;
      D.preventDefault(), D.stopPropagation();
      const d = (k = D.clipboardData) == null ? void 0 : k.items;
      if (d)
        for (let T = 0; T < d.length; T++) {
          const S = d[T];
          if (S.type.startsWith("image/")) {
            const w = S.getAsFile();
            w && y(w);
          }
        }
    }
    function l(D) {
      var k;
      D.preventDefault(), D.stopPropagation();
      const d = (k = D.dataTransfer) == null ? void 0 : k.files;
      if (d)
        for (let T = 0; T < d.length; T++) {
          const S = d[T];
          S.type.startsWith("image/") && S && y(S);
        }
    }
    function y(D) {
      if (!t.value)
        return;
      const d = new FileReader();
      d.onload = (k) => {
        var S;
        const T = (S = k.target) == null ? void 0 : S.result;
        if (typeof T == "string") {
          const w = new Image();
          w.onload = () => {
            var f;
            const z = w.width, A = w.height;
            (f = t.value) == null || f.runCmd(
              "insertHTML",
              `<img src="${T}" width="${z}" height="${A}" style="max-width: 80%; height: auto;" />`
            );
          }, w.src = T;
        }
      }, d.readAsDataURL(D);
    }
    function V() {
      t.value && t.value.focus();
    }
    function s() {
      t.value && t.value.getContentEl().blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, V, s);
    }), (D, d) => (m(), E(u(Tt), P({
      ref_key: "fieldRef",
      ref: t
    }, e.field.bindings, {
      "model-value": e.modelValue,
      onDrop: l,
      onPaste: p,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["model-value", "onUpdate:modelValue"]));
  }
}), Sn = /* @__PURE__ */ G({
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
}, Nn = {
  key: 2,
  class: "flex column"
}, Bn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Tn = /* @__PURE__ */ G({
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
    const e = o, t = B(null), a = B(!1);
    function n() {
      let i = e.modelValue;
      i.add = [], i.delete = [], e.modelValueOnUpdate(i), S();
    }
    function r() {
      var g;
      let i = e.modelValue;
      i.add = [], i.delete = ((g = e.field.attachmentData) == null ? void 0 : g.map((C) => C.attachment_id)) ?? [], e.modelValueOnUpdate(i), S();
    }
    function p() {
      return S(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function y() {
      t.value = null;
    }
    async function V(i) {
      return new Promise((g) => {
        const C = new Blob([i]), N = new FileReader();
        N.onload = (Y) => {
          var ie;
          const de = ((ie = Y.target) == null ? void 0 : ie.result) ?? "", [se, te] = de.split(",");
          g(te);
        }, N.readAsDataURL(C);
      });
    }
    async function s(i) {
      return {
        key: `${i.lastModified}${i.name}`,
        size: i.size,
        filename: i.name,
        contentType: i.type,
        base64: await V(await i.arrayBuffer())
      };
    }
    async function D(i) {
      if (!i[0])
        return;
      a.value = !0;
      const g = await s(i[0]);
      let C = e.modelValue;
      C.add = [g], a.value = !1, e.modelValueOnUpdate(C), S();
    }
    function d(i) {
      if (!i[0])
        return;
      let g = e.modelValue;
      g.add = [], g.delete = [], e.modelValueOnUpdate(g), S();
    }
    function k(i) {
      let g = e.modelValue;
      g.delete = [i.attachment_id], e.modelValueOnUpdate(g), S();
    }
    function T() {
      let i = e.modelValue;
      i.delete = [], e.modelValueOnUpdate(i), S();
    }
    function S() {
      t.value = null;
      for (const i of e.field.computedRules) {
        const g = i(e.modelValue);
        if (typeof g == "string") {
          t.value = g;
          break;
        }
      }
    }
    const w = j(() => (e.field.attachmentData ?? []).length === 0), z = j(() => e.modelValue ? e.modelValue.delete : []), A = j(() => {
      var i, g;
      return e.modelValue ? (((i = e.field.attachmentData) == null ? void 0 : i.length) ?? 0) === 0 || (((g = e.field.attachmentData) == null ? void 0 : g.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), f = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(p, l, y, n, r);
    }), (i, g) => (m(), q("div", Dn, [
      F(u(it), P(f.value.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: D,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: h((C) => [
          Q("div", An, [
            Q("div", xn, [
              Q("div", En, H(e.field.label), 1)
            ]),
            C.canAddFiles && A.value ? (m(), E(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: C.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                F(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: h((C) => [
          w.value ? L("", !0) : (m(), q("div", Rn, [
            g[0] || (g[0] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            F(u($e), { separator: "" }, {
              default: h(() => [
                (m(!0), q(pe, null, ve(e.field.attachmentData ?? [], (N) => (m(), E(u(ge), {
                  key: N.attachment_id
                }, {
                  default: h(() => [
                    F(u(ae), null, {
                      default: h(() => [
                        F(u(oe), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ne(H(N.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(u(oe), { caption: "" }, {
                          default: h(() => [
                            ne(H(u(R).humanStorageSize(N.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (m(), E(u(ae), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: h(() => [
                        z.value.includes(N.attachment_id) ? L("", !0) : (m(), E(u(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => k(N)
                        }, null, 8, ["disable", "onClick"])),
                        z.value.includes(N.attachment_id) && e.modelValue.add.length === 0 ? (m(), E(u(Z), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: T
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
          !w.value && C.files.length > 0 ? (m(), E(u(st), { key: 1 })) : L("", !0),
          C.files.length > 0 ? (m(), q("div", Nn, [
            g[1] || (g[1] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            F(u($e), { separator: "" }, {
              default: h(() => [
                (m(!0), q(pe, null, ve(C.files, (N) => (m(), E(u(ge), {
                  key: N.__key
                }, {
                  default: h(() => [
                    F(u(ae), null, {
                      default: h(() => [
                        F(u(oe), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ne(H(N.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(u(oe), { caption: "" }, {
                          default: h(() => [
                            ne(H(N.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    F(u(ae), {
                      top: "",
                      side: ""
                    }, {
                      default: h(() => [
                        F(u(Z), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => C.removeFile(N)
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
      t.value !== null ? (m(), q("div", Bn, H(t.value), 1)) : L("", !0)
    ]));
  }
}), wn = { class: "flex column" }, On = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, Un = { class: "col" }, $n = { class: "q-uploader__title" }, zn = {
  key: 0,
  class: "flex column"
}, qn = { class: "text-weight-medium text-body2" }, In = {
  key: 2,
  class: "flex column"
}, Pn = { class: "text-weight-medium text-body2" }, Ln = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Mn = /* @__PURE__ */ G({
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
    const e = o, t = B(null), a = B(!1);
    function n() {
      let f = e.modelValue;
      f.add = [], f.delete = [], e.modelValueOnUpdate(f), S();
    }
    function r() {
      var i;
      let f = e.modelValue;
      f.add = [], f.delete = ((i = e.field.attachmentData) == null ? void 0 : i.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(f), S();
    }
    function p() {
      return S(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function y() {
      t.value = null;
    }
    async function V(f) {
      return new Promise((i) => {
        const g = new Blob([f]), C = new FileReader();
        C.onload = (N) => {
          var te;
          const Y = ((te = N.target) == null ? void 0 : te.result) ?? "", [de, se] = Y.split(",");
          i(se);
        }, C.readAsDataURL(g);
      });
    }
    async function s(f) {
      return {
        key: `${f.lastModified}${f.name}`,
        size: f.size,
        filename: f.name,
        contentType: f.type,
        base64: await V(await f.arrayBuffer())
      };
    }
    async function D(f) {
      a.value = !0;
      for (const i of f) {
        const g = await s(i);
        let C = e.modelValue;
        C.add.push(g), e.modelValueOnUpdate(C);
      }
      a.value = !1, S();
    }
    async function d(f) {
      a.value = !0;
      for (const i of f) {
        const g = await s(i);
        let C = e.modelValue;
        C.add = C.add.filter((N) => N.key !== g.key), e.modelValueOnUpdate(C);
      }
      a.value = !1, S();
    }
    function k(f) {
      let i = e.modelValue;
      i.delete.push(f.attachment_id), e.modelValueOnUpdate(i), S();
    }
    function T(f) {
      let i = e.modelValue;
      i.delete = i.delete.filter((g) => g !== f.attachment_id), e.modelValueOnUpdate(i), S();
    }
    function S() {
      t.value = null;
      for (const f of e.field.computedRules) {
        const i = f(e.modelValue);
        if (typeof i == "string") {
          t.value = i;
          break;
        }
      }
    }
    const w = j(() => (e.field.attachmentData ?? []).length === 0), z = j(() => e.modelValue ? e.modelValue.delete : []), A = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(p, l, y, n, r);
    }), (f, i) => (m(), q("div", wn, [
      F(u(it), P(A.value.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: D,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: h((g) => [
          Q("div", On, [
            Q("div", Un, [
              Q("div", $n, H(e.field.label), 1)
            ]),
            g.canAddFiles ? (m(), E(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: g.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: h(() => [
                F(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: h((g) => {
          var C;
          return [
            w.value ? L("", !0) : (m(), q("div", zn, [
              Q("div", qn, "Fichier" + H((((C = e.field.attachmentData) == null ? void 0 : C.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              F(u($e), { separator: "" }, {
                default: h(() => [
                  (m(!0), q(pe, null, ve(e.field.attachmentData ?? [], (N) => (m(), E(u(ge), {
                    key: N.attachment_id
                  }, {
                    default: h(() => [
                      F(u(ae), null, {
                        default: h(() => [
                          F(u(oe), { class: "full-width ellipsis" }, {
                            default: h(() => [
                              ne(H(N.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(u(oe), { caption: "" }, {
                            default: h(() => [
                              ne(H(u(R).humanStorageSize(N.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (m(), E(u(ae), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: h(() => [
                          z.value.includes(N.attachment_id) ? L("", !0) : (m(), E(u(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => k(N)
                          }, null, 8, ["disable", "onClick"])),
                          z.value.includes(N.attachment_id) && e.modelValue.add.length === 0 ? (m(), E(u(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Y) => T(N)
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
            !w.value && g.files.length > 0 ? (m(), E(u(st), { key: 1 })) : L("", !0),
            g.files.length > 0 ? (m(), q("div", In, [
              Q("div", Pn, "Fichier" + H(g.files.length > 0 ? "s" : "") + " à ajouter", 1),
              F(u($e), { separator: "" }, {
                default: h(() => [
                  (m(!0), q(pe, null, ve(g.files, (N) => (m(), E(u(ge), {
                    key: N.__key
                  }, {
                    default: h(() => [
                      F(u(ae), null, {
                        default: h(() => [
                          F(u(oe), { class: "full-width ellipsis" }, {
                            default: h(() => [
                              ne(H(N.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(u(oe), { caption: "" }, {
                            default: h(() => [
                              ne(H(N.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      F(u(ae), {
                        top: "",
                        side: ""
                      }, {
                        default: h(() => [
                          F(u(Z), {
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => g.removeFile(N)
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
      t.value !== null ? (m(), q("div", Ln, H(t.value), 1)) : L("", !0)
    ]));
  }
});
function Hn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (V, s, D) => V[s] ? D ? () => p(V[s]) : () => V[s] : V.compare_to ? () => {
    var d;
    return ((d = e.getFieldByName(V.compare_to)) == null ? void 0 : d.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", p = (V) => String(
    M.formatDate(
      M.extractDate(V, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], y = [];
  switch (a) {
    case "date":
      l.push(He(n.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(He(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((V) => {
    const s = V;
    switch (s.type) {
      case "required":
        l.push(Gn());
        break;
      case "absence":
        l.push(Qn());
        break;
      case "acceptance":
        l.push(Yn());
        break;
      case "inclusion":
        l.push(dt(s.including));
        break;
      case "exclusion":
        l.push(jn(s.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        y.push("allowNull");
        break;
      case "allowBlank":
        y.push("allowBlank");
        break;
      case "positiveNumber":
        l.push(Kn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Xn(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          Zn(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          ea(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          ta(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          na(r(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          aa(
            r(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(oa());
        break;
      case "numberNumericOnly":
        l.push(ra());
        break;
      case "numberEvenOnly":
        l.push(la());
        break;
      case "numberOddOnly":
        l.push(ia());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          sa(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          ua(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          ca(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          da(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          pa(
            r(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          ma(r(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          fa(
            () => s.min,
            () => s.max
          )
        );
        break;
      case "otherThanString":
        l.push(
          va(
            r(s, "other_than")
          )
        );
        break;
      case "validDate":
        l.push(He(n.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        l.push(
          ga(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          ha(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          _a(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          ya(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          ba(
            r(s, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Ca(
            r(s, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        l.push(
          Va()
        );
        break;
      case "allowFileContentType":
        l.push(
          ka(
            r(s, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          Sa(
            r(s, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          Aa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          Da(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          xa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          Ea(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          Ra(
            r(s, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          Na(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          Ba(
            r(s, "equal_to")
          )
        );
        break;
    }
  }), y.length > 0 ? y.map((V) => {
    switch (V) {
      case "allowBlank":
        return Jn(l);
      case "allowNull":
        return Wn(l);
    }
  }) : l;
}
function Gn() {
  return (o) => !!o || "Ce champ est requis";
}
function dt(o) {
  return (e) => o.includes(String(e)) || `Doit être contenu dans ${o.toString()}`;
}
function jn(o) {
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
function la() {
  return (o) => Number.isInteger(Number(o)) && Number(o) % 2 === 0 || "Nombre pair uniquement";
}
function ia() {
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
function va(o) {
  return (e) => {
    const t = o();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function ga(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n <= r || `Inf. ou égal à ${a}`;
  };
}
function ha(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n < r || `Inf. à ${a}`;
  };
}
function _a(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n >= r || `Sup. ou égal à ${a}`;
  };
}
function ya(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n > r || `Sup. à ${a}`;
  };
}
function ba(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n === r || `Égale à ${n}`;
  };
}
function Ca(o, e) {
  return (t) => {
    const a = o();
    return M.extractDate(String(t), e) !== M.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function He(o) {
  return (e) => e == null || e === "" ? !0 : Fa(e, o) || `Date invalide. Format : ${o}`;
}
function Fa(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = M.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : M.formatDate(t, e) === o;
}
function Va() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function ka(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    t.add.forEach((p) => {
      n && (a.includes(p.contentType) || (n = !1));
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
    }), n || `Taille par fichier ${R.humanStorageSize(a)}`;
  };
}
function Da(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${R.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${R.humanStorageSize(a)}`;
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
    return t.add.reduce((r, p) => (r += p.size, r), 0) <= a || `${R.humanStorageSize(a)} max.`;
  };
}
function Na(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) >= a || `${R.humanStorageSize(a)} min.`;
  };
}
function Ba(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) === a || `Taille totale ${R.humanStorageSize(a)}`;
  };
}
const Ta = {
  computeServerRules: Hn
};
class Ce {
  constructor(e, t, a, n, r, p, l, y, V) {
    O(this, "resourceName");
    O(this, "resourceId");
    O(this, "formMetadataAndData");
    O(this, "context");
    O(this, "formSettings");
    O(this, "formBind");
    O(this, "actionComponent");
    O(this, "orphanErrorsComponent");
    O(this, "sectionComponent");
    O(this, "wrapperResetComponent");
    O(this, "associationDisplayComponent");
    O(this, "dynamicComponentRecord");
    O(this, "formApi");
    O(this, "registerEventCallback");
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = y, this.formSettings = {
      ...ee.getGlobalFormSetting(),
      ...r
    }, this.formBind = R.deepMergeObject(
      { ...ee.getGlobalFormBind() },
      { ...p }
    ), this.actionComponent = a.actionComponent ?? ee.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? ee.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? ee.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? ee.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? ee.getGlobalAssociationDisplayComponent(), this.registerEventCallback = V ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: ee.getGlobalFormSetting(),
      events: {},
      bindings: {},
      actionComponent: X(ee.getGlobalActionComponent()),
      orphanErrorsComponent: X(ee.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: X(ee.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, r, p, l, y, V) {
    return new Ce(
      e,
      t,
      a,
      n,
      r,
      p,
      l,
      y,
      V
    ).generateFormDef();
  }
  generateFormDef() {
    const e = qe.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), a = qe.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (p, l) => {
        const y = [];
        p.fields.forEach((k) => {
          const T = this.dynamicComponentRecord[`field-${k.field_name}-before`], S = Ce.getFieldComponentByFormFieldType(k), w = this.dynamicComponentRecord[`field-${k.field_name}-after`], z = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: Ce.getRegularFieldTypeByFieldType(
              k.field_type
            )
          }, A = this.getBindingsByFormFieldType(k);
          let f = k.label;
          this.formSettings.requiredFieldsHasAsterisk && k.rules.find((g) => g.type === "required") && (f = f.concat("*"));
          const i = {
            type: k.field_type,
            extraType: k.field_extra_type,
            metadata: Object.freeze(k),
            label: f,
            readonly: this.formMetadataAndData.form.readonly ?? p.readonly ?? k.readonly ?? void 0,
            cssClass: k.css_class ?? void 0,
            staticSelectOptions: k.static_select_options,
            associationData: k.field_association_data,
            attachmentData: k.field_attachment_data,
            rules: k.rules,
            computedRules: [],
            // late init
            bindings: A,
            hidden: !1,
            beforeComponent: T ? X(T) : void 0,
            mainComponent: X(S),
            afterComponent: w ? X(w) : void 0,
            events: a.fields[k.field_name] ?? {},
            componentOptions: z
          };
          i.computedRules = Ta.computeServerRules(
            i,
            this.formApi
          ), y.push(i), t.add(k.field_name);
        });
        const V = this.dynamicComponentRecord[`section-${p.name ?? l}-before`], s = this.sectionComponent, D = this.dynamicComponentRecord[`section-${p.name ?? l}-after`], d = {
          label: p.label ?? void 0,
          icon: p.icon ?? void 0,
          cssClass: p.css_class ?? void 0,
          hidden: !1,
          name: p.name ?? l.toString(),
          bindings: { ...this.formBind.sections },
          readonly: this.formMetadataAndData.form.readonly ?? p.readonly ?? void 0,
          events: a.sections[p.name ?? l.toString()] ?? {},
          beforeComponent: V ? X(V) : void 0,
          mainComponent: X(s),
          fieldsComponent: void 0,
          afterComponent: D ? X(D) : void 0,
          fields: y
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
    return t.size < this.formMetadataAndData.form.sections.reduce((p, l) => p + l.fields.length, 0) && console.warn("Submit64 -> Found fields with the same name"), r;
  }
  getBindingsByFormFieldType(e) {
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return { ...this.formBind.fields.color };
          case "wysiwyg":
            return { ...this.formBind.fields.wysiwyg };
          default:
            return { ...this.formBind.fields.string };
        }
      case "text":
        return { ...this.formBind.fields.string };
      case "number":
        return { ...this.formBind.fields.number };
      case "date":
        return { ...this.formBind.fields.date };
      case "datetime":
        return { ...this.formBind.fields.datetime };
      case "select":
        return { ...this.formBind.fields.select };
      case "selectBelongsTo":
        return { ...this.formBind.fields.belongsTo };
      case "selectHasMany":
        return { ...this.formBind.fields.hasMany };
      case "selectHasAndBelongsToMany":
        return { ...this.formBind.fields.hasMany };
      case "selectHasOne":
        return { ...this.formBind.fields.belongsTo };
      case "checkbox":
        return { ...this.formBind.fields.checkbox };
      case "object":
        return {};
      case "attachmentHasOne":
        return { ...this.formBind.fields.attachmentBelongsTo };
      case "attachmentHasMany":
        return { ...this.formBind.fields.attachmentHasMany };
      default:
        return { ...this.formBind.fields.string };
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
            return Me;
        }
      case "text":
        return Me;
      case "number":
        return Fn;
      case "date":
        return pn;
      case "datetime":
        return hn;
      case "select":
        return Cn;
      case "selectBelongsTo":
        return et;
      case "selectHasMany":
        return nt;
      case "selectHasAndBelongsToMany":
        return nt;
      case "selectHasOne":
        return et;
      case "checkbox":
        return bn;
      case "object":
        return Sn;
      case "attachmentHasOne":
        return Tn;
      case "attachmentHasMany":
        return Mn;
      default:
        return Me;
    }
  }
}
const wa = { class: "flex column" }, Oa = /* @__PURE__ */ G({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = null, n = null, r = null;
    const p = ot(), l = {
      softReset: s,
      reset: D,
      clear: d,
      validate: S,
      isValid: w,
      isInvalid: z,
      hide: k,
      unhide: T,
      resetValidation: A,
      getFields: f,
      setReadonlyState: i,
      setCssClass: g,
      setIcon: C,
      setLabel: N,
      tryFocusFirst: se,
      tryUnfocus: te,
      section: t.section
    }, y = B(/* @__PURE__ */ new Map());
    function V() {
      t.section.fields.forEach((v) => {
        const x = v.metadata.field_name, W = t.formApi.getFieldByName(x);
        W && y.value.set(x, W);
      });
    }
    function s() {
      y.value.forEach((v) => {
        v.softReset();
      });
    }
    function D() {
      y.value.forEach((v) => {
        v.reset();
      }), R.callAllEvents(t.section.events.onReset);
    }
    function d() {
      y.value.forEach((v) => {
        v.clear();
      }), R.callAllEvents(t.section.events.onClear);
    }
    function k() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (y.value.forEach((x) => {
        x.hide();
      }), v.hidden = !0, R.callAllEvents(t.section.events.onHide));
    }
    function T() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (y.value.forEach((x) => {
        x.unhide();
      }), v.hidden = !1, R.callAllEvents(t.section.events.onUnhide));
    }
    function S() {
      let v = !0;
      return y.value.forEach((x) => {
        if (!x.validate()) {
          v = !1;
          return;
        }
      }), R.callAllEvents(t.section.events.onValidated), v;
    }
    function w() {
      let v = !0;
      return y.value.forEach((x) => {
        if (!x.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function z() {
      return !w();
    }
    function A() {
      y.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function f() {
      return y.value;
    }
    function i(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = v);
    }
    function g(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = v);
    }
    function C(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = v);
    }
    function N(v) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = v);
    }
    function Y() {
      const v = {};
      for (const [x, W] of y.value)
        v[x] = W.getValueSerialized();
      return v;
    }
    function de() {
      const v = p.default;
      if (!v) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = G({
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
    e(l);
    const ie = j(() => w()), _e = j(() => z()), ke = j(() => Y());
    return J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        a == null || a(), a = null, v && (a = J(ie, (x) => {
          x && R.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = J(_e, (x) => {
          var W;
          x && R.callAllEvents((W = t.section) == null ? void 0 : W.events.onIsInvalid);
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
            R.callAllEvents((x = t.section) == null ? void 0 : x.events.onUpdate);
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
        V(), R.callAllEvents((W = t.section) == null ? void 0 : W.events.onReady);
      });
    }), (v, x) => je((m(), q("div", wa, [
      t.section.beforeComponent ? (m(), E(le(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : L("", !0),
      (m(), E(le(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (m(), E(le(t.section.afterComponent), {
        key: 1,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : L("", !0)
    ], 512)), [
      [Qe, t.section.hidden !== !0]
    ]);
  }
}), Ua = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, $a = ["index"], za = /* @__PURE__ */ G({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(o, { expose: e }) {
    const t = o;
    let a = () => !0, n = () => !0, r = () => {
    }, p = () => {
    }, l = () => {
    }, y = () => {
    }, V = () => {
    };
    const s = B(), D = B(!1), d = B([]);
    function k() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value);
    }
    function T() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value), R.callAllEvents(t.field.events.onReset), p(), Fe(() => {
        v();
      });
    }
    function S(b) {
      const I = t.formApi.form;
      switch (t.field.type) {
        case "checkbox":
          return b == null || b === "" ? !1 : b;
        case "date":
          return b == null || b === "" ? null : M.formatDate(
            M.extractDate(String(b), I.formSettings.backendDateFormat),
            I.formSettings.dateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : M.formatDate(
            M.extractDate(
              String(b),
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
      return b;
    }
    function w(b) {
      const I = t.formApi.form;
      switch (t.field.type) {
        case "date":
          return b == null || b === "" ? null : M.formatDate(
            M.extractDate(String(b), I.formSettings.dateFormat),
            I.formSettings.backendDateFormat
          );
        case "datetime":
          return b == null || b === "" ? null : M.formatDate(
            M.extractDate(String(b), I.formSettings.datetimeFormat),
            I.formSettings.backendDatetimeFormat
          );
        case "selectBelongsTo":
        case "selectHasOne":
          if (b === void 0)
            return null;
        case "selectHasMany":
        case "selectHasAndBelongsToMany":
          if (b === void 0)
            return [];
      }
      return b;
    }
    function z() {
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
      l(), R.callAllEvents(t.field.events.onClear);
    }
    function A(b) {
      s.value = b;
    }
    function f() {
      return u(s);
    }
    function i() {
      return w(u(s));
    }
    function g(b) {
      d.value = b;
    }
    function C() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function N() {
      const b = C();
      b.hidden = !0, R.callAllEvents(t.field.events.onHide);
    }
    function Y() {
      const b = C();
      b.hidden = !1, R.callAllEvents(t.field.events.onUnhide);
    }
    function de(b) {
      const I = C();
      I.readonly = b;
    }
    function se(b) {
      const I = C();
      I.cssClass = b;
    }
    function te(b) {
      const I = C();
      I.label = b;
    }
    function ie() {
      const b = a();
      return R.callAllEvents(t.field.events.onValidated), b;
    }
    function _e() {
      return n();
    }
    function ke() {
      return !_e();
    }
    function v() {
      return r();
    }
    function x() {
      D.value || (y(), D.value = !0);
    }
    function W() {
      D.value && (V(), D.value = !1);
    }
    function Se() {
      return D.value;
    }
    function De(b) {
      const I = C();
      I.bindings = R.deepMergeObject(
        I.bindings,
        b
      );
    }
    function Pe(b, I, fe, Ve, Ee, Re, Ne) {
      a = b, n = I, r = fe, Ve && (p = Ve), Ee && (l = Ee), Re && (y = Re), Ne && (V = Ne);
    }
    const ye = {
      softReset: k,
      reset: T,
      clear: z,
      validate: ie,
      isValid: _e,
      isInvalid: ke,
      hide: N,
      unhide: Y,
      resetValidation: v,
      getValueDeserialized: i,
      getValueSerialized: f,
      setupBackendErrors: g,
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
        R.callAllEvents(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? s.value : null,
      (b) => {
        b ? R.callAllEvents(t.field.events.onIsValid) : R.callAllEvents(t.field.events.onIsInvalid);
      }
    ), K(() => {
      var I, fe;
      k();
      const b = (I = rt()) == null ? void 0 : I.exposed;
      b && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        b
      ), R.callAllEvents((fe = t.field) == null ? void 0 : fe.events.onReady);
    }), (b, I) => je((m(), q("div", null, [
      t.field.beforeComponent ? (m(), E(le(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : L("", !0),
      (m(), E(le(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: T,
        clear: z,
        getValueDeserialized: i,
        getValueSerialized: f,
        validate: ie,
        modelValueOnUpdate: A,
        registerBehaviourCallbacks: Pe
      }, null, 8, ["modelValue", "field", "formApi"])),
      t.field.afterComponent ? (m(), E(le(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : L("", !0),
      d.value.length > 0 ? (m(), q("div", Ua, [
        (m(!0), q(pe, null, ve(d.value, (fe, Ve) => (m(), q("div", {
          index: Ve,
          class: "flex column"
        }, H(fe), 9, $a))), 256))
      ])) : L("", !0)
    ], 512)), [
      [Qe, t.field.hidden !== !0]
    ]);
  }
}), qa = { class: "flex column" }, Ma = /* @__PURE__ */ G({
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
    let a = null, n = "", r = 0, p = 0, l = null, y = null, V = null, s = null;
    const D = ot(), d = B(Ce.getEmptyFormBeforeInit()), k = B(!1), T = B(!1), S = B(!1), w = B(!1), z = B("create"), A = B({}), f = B(/* @__PURE__ */ new Map()), i = B(/* @__PURE__ */ new Map());
    async function g() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = Ce.getForm(
        t.resourceName,
        t.resourceId,
        N(),
        a,
        t.formSettings,
        t.formBindings,
        t.context,
        be,
        t.eventManager
      ), r = d.value.sections.length, p = d.value.sections.reduce((c, _) => (c += _.fields.length, c), 0), t.resourceId && (z.value = "edit");
    }
    async function C() {
      var $, re, Be;
      if (!se())
        return;
      R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onSubmit), w.value = !0, W();
      const c = Y(), _ = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: d.value.context
      });
      if (s = _.resource_data, _.success)
        A.value = {}, z.value === "create" && (z.value = "edit"), a && _.resource_data && (a.resource_data = _.resource_data), d.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          N(),
          {
            form: _.form,
            resource_data: _.resource_data
          },
          t.formSettings,
          t.formBindings,
          d.value.context,
          be,
          t.eventManager
        ), _e(), n = JSON.stringify(Y()), R.callAllEvents((Be = d.value) == null ? void 0 : Be.events.onSubmitSuccess);
      else {
        A.value = {};
        const Te = [];
        for (const [me, Dt] of i.value) {
          const Xe = _.errors[me];
          Xe && (Dt.setupBackendErrors(Xe), Te.push(me));
        }
        Object.entries(_.errors).forEach((me) => {
          Te.includes(me[0]) || (A.value[me[0]] = me[1]);
        }), R.callAllEvents((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      w.value = !1;
    }
    function N() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const _ in D) {
        const $ = D[_];
        if ($) {
          const re = G({
            inheritAttrs: !1,
            setup(Be, { attrs: Te, slots: me }) {
              return () => $({
                ...Be,
                ...Te,
                innerSlots: me
              });
            }
          });
          switch (_) {
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
              c.dynamicComponentRecord[_] = re;
              break;
          }
        }
      }
      return c;
    }
    function Y() {
      const c = {};
      for (const [_, $] of i.value)
        c[_] = $.getValueDeserialized();
      return c;
    }
    function de() {
      const c = {};
      for (const [_, $] of i.value)
        c[_] = $.getValueSerialized();
      return c;
    }
    function se() {
      var _;
      let c = !0;
      return i.value.forEach(($) => {
        if (!$.validate()) {
          c = !1;
          return;
        }
      }), R.callAllEvents((_ = d.value) == null ? void 0 : _.events.onValidated), c;
    }
    function te() {
      let c = !0;
      return i.value.forEach((_) => {
        if (!_.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function ie() {
      return !te();
    }
    function _e() {
      f.value.forEach((c) => {
        c.softReset();
      });
    }
    function ke() {
      var c;
      i.value.forEach((_) => {
        _.reset();
      }), R.callAllEvents((c = d.value) == null ? void 0 : c.events.onReset);
    }
    function v() {
      var c;
      i.value.forEach((_) => {
        _.clear();
      }), R.callAllEvents((c = d.value) == null ? void 0 : c.events.onClear);
    }
    function x() {
      i.value.forEach((c) => {
        c.resetValidation();
      });
    }
    function W() {
      i.value.forEach((c) => {
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
    function Pe(c) {
      return [...f.value.values()].at(c);
    }
    function ye() {
      return f.value;
    }
    function b(c) {
      return i.value.get(c);
    }
    function I() {
      return i.value;
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
      ].forEach((_) => {
        (t[_] === null || t[_] === void 0) && console.warn(`Missing props for <Submit64> -> ${_}`);
      });
    }
    function Ee() {
      return u(z);
    }
    function Re() {
      return n !== JSON.stringify(Y());
    }
    function Ne(c) {
      d.value && (d.value.context = c);
    }
    function ft(c) {
      d.value && (d.value.cssClass = c);
    }
    function mt(c) {
      d.value && (d.value.readonly = c);
    }
    function pt() {
      return S.value;
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
    function gt() {
      for (const c of ye().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function ht() {
      return d;
    }
    function _t(c) {
      var _;
      return (_ = d.value) == null ? void 0 : _.sections.find(($) => $.name === c);
    }
    function yt(c) {
      var _;
      return (_ = d.value) == null ? void 0 : _.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === c);
    }
    function bt(c, _) {
      f.value.set(c, _), r === f.value.size && (k.value = !0);
    }
    function Ct(c, _) {
      i.value.set(c, _), p === i.value.size && (T.value = !0);
    }
    function Ft(c, _) {
      c.fieldsComponent = _;
    }
    const Je = j(() => te()), Vt = j(() => ie()), kt = j(() => de()), Ke = {
      getFormRef: ht,
      getSectionRef: _t,
      getFieldRef: yt,
      registerSectionWrapperRef: bt,
      registerFieldWrapperRef: Ct,
      setSectionFieldComponent: Ft
    }, St = new Proxy({}, {
      get(c, _) {
        var $;
        return ($ = d.value) == null ? void 0 : $[_];
      }
    }), be = {
      getMode: Ee,
      getSectionByName: De,
      getSectionByIndex: Pe,
      getSections: ye,
      getFieldByName: b,
      getFields: I,
      validate: se,
      isValid: te,
      isInvalid: ie,
      softReset: _e,
      reset: ke,
      clear: v,
      resetValidation: x,
      submit: C,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Se,
      getAssociationDataCallback: fe,
      setContext: Ne,
      setCssClass: ft,
      setReadonlyState: mt,
      isReady: pt,
      getSubmitData: vt,
      tryFocusFirst: We,
      tryUnfocus: gt,
      form: St,
      refs: {
        orphanErrors: Le(A),
        isLoadingSubmit: Le(w),
        isFormValid: Le(Je)
      }
    };
    return e(be), J(
      () => k.value && T.value,
      (c) => {
        var _;
        c && !S.value && (R.callAllEvents((_ = d.value) == null ? void 0 : _.events.onReady), S.value = !0);
      }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        l == null || l(), l = null, c && (l = J(Je, (_) => {
          var $;
          _ && R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        y == null || y(), y = null, c && (y = J(Vt, (_) => {
          var $;
          _ && R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        V == null || V(), V = null, c && (V = J(
          kt,
          () => {
            var _;
            R.callAllEvents((_ = d.value) == null ? void 0 : _.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      Ve(), await g(), Fe(() => {
        n = JSON.stringify(Y()), d.value.formSettings.autofocus && We();
      });
    }), (c, _) => je((m(), q("div", qa, [
      Q("div", {
        class: at(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), q(pe, null, ve(d.value.sections, ($) => (m(), E(Oa, {
          key: $.name,
          section: $,
          formApi: be,
          privateFormApi: Ke
        }, {
          default: h(() => [
            (m(!0), q(pe, null, ve($.fields, (re) => (m(), E(za, {
              key: re.metadata.field_name,
              field: re,
              formApi: be,
              privateFormApi: Ke
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (m(), E(le(d.value.orphanErrorsComponent), { formApi: be })),
      (m(), E(le(d.value.actionComponent), { formApi: be }))
    ], 512)), [
      [Qe, S.value]
    ]);
  }
});
export {
  qe as DynamicLogicBuilder,
  ee as Submit64,
  Ma as Submit64Form
};
