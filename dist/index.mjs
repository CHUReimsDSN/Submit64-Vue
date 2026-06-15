var xt = Object.defineProperty;
var Et = (o, e, t) => e in o ? xt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var O = (o, e, t) => Et(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as G, openBlock as m, createElementBlock as q, createElementVNode as Q, createVNode as F, unref as u, mergeProps as P, createBlock as E, createCommentVNode as L, normalizeClass as at, toDisplayString as H, resolveDynamicComponent as le, resolveComponent as Rt, normalizeProps as ue, guardReactiveProps as ce, withCtx as h, createTextVNode as ne, Fragment as pe, renderList as ge, ref as B, computed as j, onMounted as K, nextTick as Fe, watch as J, markRaw as X, useSlots as ot, getCurrentInstance as rt, withDirectives as je, vShow as Qe, readonly as Le } from "vue";
import { QBtn as Z, QIcon as Ae, QItem as ve, QItemSection as ae, QItemLabel as oe, IconSet as we, Lang as Oe, QInput as xe, QPopupProxy as Ue, QDate as lt, QTime as Tt, QCheckbox as Bt, QSelect as Ye, QColor as Nt, QEditor as wt, QUploader as it, QList as $e, QSeparator as st, QUploaderAddTrigger as ut, date as M } from "quasar";
const Ot = { class: "flex column" }, Ut = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, $t = /* @__PURE__ */ G({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", Ot, [
      Q("div", Ut, [
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
}), zt = { class: "flex row items-center" }, qt = { class: "text-body1 text-weight-medium" }, It = { class: "flex column q-gutter-md" }, Pt = /* @__PURE__ */ G({
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
      Q("div", zt, [
        e.sectionApi.section.icon ? (m(), E(u(Ae), P({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : L("", !0),
        Q("div", qt, H(e.sectionApi.section.label), 1)
      ]),
      Q("div", It, [
        (m(), E(le(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
}), Lt = /* @__PURE__ */ G({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(o) {
    const e = o;
    return (t, a) => {
      const n = Rt("q-icon");
      return m(), E(n, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (r) => e.reset())
      });
    };
  }
}), Mt = /* @__PURE__ */ G({
  __name: "DefaultAssociationDisplayComponent",
  props: {
    associationName: {},
    entry: {},
    itemProps: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), E(u(ve), ue(ce(e.itemProps)), {
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
}), Ht = { class: "flex column" }, Gt = /* @__PURE__ */ G({
  __name: "DefaultOrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", Ht, [
      (m(!0), q(pe, null, ge(e.formApi.refs.orphanErrors.value, (n, r) => (m(), q("div", {
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
function jt() {
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
function Wt() {
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
function Jt() {
  return {
    color: U.color,
    dense: U.dense
  };
}
function Kt() {
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
function Xt() {
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
    select: {
      ...he
    },
    itemNoOption: {
      dense: U.dense
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
    uploader: {
      bordered: !0,
      square: U.square,
      color: U.color,
      flat: !1
    }
  };
}
function on() {
  return {
    icon: {
      color: U.color
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
      string: jt(),
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
  return Object.keys(e).reduce(
    (t, a) => (t[a] = e[a] instanceof Object && !Array.isArray(e[a]) ? dt(
      e[a],
      t[a] ?? {}
    ) : e[a], t),
    { ...o }
  );
}
function dn(o) {
  return JSON.parse(JSON.stringify(o));
}
const R = {
  callAllEvents: un,
  humanStorageSize: cn,
  deepMergeObject: dt,
  deepDupeObject: dn
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
    }, this._formBind = ct.getDefaultFormBindings(), this._actionComponent = $t, this._orphanErrorsComponent = Gt, this._sectionComponent = Pt, this._wrapperResetComponent = Lt, this._associationDisplayComponent = Mt;
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
    const a = e, n = t, r = new fn(a, n, this.formApi);
    return this.events.push(r), new mn(r);
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
class fn {
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
class mn {
  constructor(e) {
    O(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const pn = { class: "row items-center justify-end" }, gn = /* @__PURE__ */ G({
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
    function _() {
      a.value && a.value.focus();
    }
    function V() {
      a.value && a.value.blur();
    }
    const s = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(r, p, l, void 0, void 0, _, V), Fe(() => {
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
                    Q("div", pn, [
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
}), vn = { class: "row items-center justify-end" }, hn = { class: "row items-center justify-end" }, yn = /* @__PURE__ */ G({
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
    function _() {
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
      e.registerBehaviourCallbacks(l, _, V, void 0, void 0, s, D), Fe(() => {
        var k;
        (k = n.value) == null || k.resetValidation();
      });
    }), (k, N) => (m(), E(u(xe), P({
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
                F(u(Tt), P(d.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: h(() => [
                    Q("div", hn, [
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
}), _n = { class: "flex column" }, bn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Cn = /* @__PURE__ */ G({
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
      F(u(Bt), P({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (m(), q("div", bn, H(t.value), 1)) : L("", !0)
    ]));
  }
}), Fn = /* @__PURE__ */ G({
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
    function r(N, S) {
      if (N === "") {
        S(() => {
          a.value = [...t.value];
        });
        return;
      }
      S(() => {
        const w = N.toLowerCase();
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
    function _() {
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
      p(), e.registerBehaviourCallbacks(l, _, V, void 0, s, D, d);
    }), (N, S) => (m(), E(u(Ye), P({
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
        F(u(ve), ue(ce(k.value.itemNoOption)), {
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
    function _(A, f) {
      if (A === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = A;
      const v = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: v.resourceName,
        resourceId: v.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: v.context
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
    function N(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const i = e.formApi.form, v = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, v({
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
      onFilter: _,
      onVirtualScroll: N,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      "no-option": h(() => [
        F(u(ve), ue(ce(z.value.itemNoOption)), {
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
    function _(A, f) {
      if (A === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = A;
      const v = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: v.resourceName,
        resourceId: v.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: A,
        context: v.context
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
    function N(A) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && A.to === f && f !== -1) {
        const i = e.formApi.form, v = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, v({
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
      onFilter: _,
      onVirtualScroll: N
    }), {
      "no-option": h(() => [
        F(u(ve), ue(ce(z.value.itemNoOption)), {
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
    }), (_, V) => (m(), E(u(xe), P({
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
}), Vn = /* @__PURE__ */ G({
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
    }), (_, V) => (m(), E(u(xe), P({
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
}), kn = /* @__PURE__ */ G({
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
    const _ = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, p, l);
    }), (V, s) => (m(), E(u(xe), P({
      ref_key: "fieldRef",
      ref: t
    }, _.value._input, {
      "model-value": e.modelValue,
      label: e.field.label,
      class: e.field.cssClass,
      readonly: e.field.readonly,
      rules: e.field.computedRules,
      onClear: e.clear,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), {
      append: h(() => [
        F(u(Ae), ue(ce(_.value._icon)), {
          default: h(() => [
            F(u(Ue), ue(ce(_.value._popupProxy)), {
              default: h(() => [
                F(u(Nt), P(_.value._color, {
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
}), Sn = /* @__PURE__ */ G({
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
        for (let N = 0; N < d.length; N++) {
          const S = d[N];
          if (S.type.startsWith("image/")) {
            const w = S.getAsFile();
            w && _(w);
          }
        }
    }
    function l(D) {
      var k;
      D.preventDefault(), D.stopPropagation();
      const d = (k = D.dataTransfer) == null ? void 0 : k.files;
      if (d)
        for (let N = 0; N < d.length; N++) {
          const S = d[N];
          S.type.startsWith("image/") && S && _(S);
        }
    }
    function _(D) {
      if (!t.value)
        return;
      const d = new FileReader();
      d.onload = (k) => {
        var S;
        const N = (S = k.target) == null ? void 0 : S.result;
        if (typeof N == "string") {
          const w = new Image();
          w.onload = () => {
            var f;
            const z = w.width, A = w.height;
            (f = t.value) == null || f.runCmd(
              "insertHTML",
              `<img src="${N}" width="${z}" height="${A}" style="max-width: 80%; height: auto;" />`
            );
          }, w.src = N;
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
    }), (D, d) => (m(), E(u(wt), P({
      ref_key: "fieldRef",
      ref: t
    }, e.field.bindings, {
      "model-value": e.modelValue,
      onDrop: l,
      onPaste: p,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["model-value", "onUpdate:modelValue"]));
  }
}), Dn = /* @__PURE__ */ G({
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
}), An = { class: "flex column" }, xn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, En = { class: "col" }, Rn = { class: "q-uploader__title" }, Tn = {
  key: 0,
  class: "flex column"
}, Bn = {
  key: 2,
  class: "flex column"
}, Nn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, wn = /* @__PURE__ */ G({
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
      var v;
      let i = e.modelValue;
      i.add = [], i.delete = ((v = e.field.attachmentData) == null ? void 0 : v.map((C) => C.attachment_id)) ?? [], e.modelValueOnUpdate(i), S();
    }
    function p() {
      return S(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function V(i) {
      return new Promise((v) => {
        const C = new Blob([i]), T = new FileReader();
        T.onload = (Y) => {
          var ie;
          const de = ((ie = Y.target) == null ? void 0 : ie.result) ?? "", [se, te] = de.split(",");
          v(te);
        }, T.readAsDataURL(C);
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
      const v = await s(i[0]);
      let C = e.modelValue;
      C.add = [v], a.value = !1, e.modelValueOnUpdate(C), S();
    }
    function d(i) {
      if (!i[0])
        return;
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), S();
    }
    function k(i) {
      let v = e.modelValue;
      v.delete = [i.attachment_id], e.modelValueOnUpdate(v), S();
    }
    function N() {
      let i = e.modelValue;
      i.delete = [], e.modelValueOnUpdate(i), S();
    }
    function S() {
      t.value = null;
      for (const i of e.field.computedRules) {
        const v = i(e.modelValue);
        if (typeof v == "string") {
          t.value = v;
          break;
        }
      }
    }
    const w = j(() => (e.field.attachmentData ?? []).length === 0), z = j(() => e.modelValue ? e.modelValue.delete : []), A = j(() => {
      var i, v;
      return e.modelValue ? (((i = e.field.attachmentData) == null ? void 0 : i.length) ?? 0) === 0 || (((v = e.field.attachmentData) == null ? void 0 : v.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), f = j(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(p, l, _, n, r);
    }), (i, v) => (m(), q("div", An, [
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
          Q("div", xn, [
            Q("div", En, [
              Q("div", Rn, H(e.field.label), 1)
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
          w.value ? L("", !0) : (m(), q("div", Tn, [
            v[0] || (v[0] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            F(u($e), { separator: "" }, {
              default: h(() => [
                (m(!0), q(pe, null, ge(e.field.attachmentData ?? [], (T) => (m(), E(u(ve), {
                  key: T.attachment_id
                }, {
                  default: h(() => [
                    F(u(ae), null, {
                      default: h(() => [
                        F(u(oe), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ne(H(T.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(u(oe), { caption: "" }, {
                          default: h(() => [
                            ne(H(u(R).humanStorageSize(T.size)), 1)
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
                        z.value.includes(T.attachment_id) ? L("", !0) : (m(), E(u(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => k(T)
                        }, null, 8, ["disable", "onClick"])),
                        z.value.includes(T.attachment_id) && e.modelValue.add.length === 0 ? (m(), E(u(Z), {
                          key: 1,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "refresh",
                          onClick: N
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
          C.files.length > 0 ? (m(), q("div", Bn, [
            v[1] || (v[1] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            F(u($e), { separator: "" }, {
              default: h(() => [
                (m(!0), q(pe, null, ge(C.files, (T) => (m(), E(u(ve), {
                  key: T.__key
                }, {
                  default: h(() => [
                    F(u(ae), null, {
                      default: h(() => [
                        F(u(oe), { class: "full-width ellipsis" }, {
                          default: h(() => [
                            ne(H(T.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        F(u(oe), { caption: "" }, {
                          default: h(() => [
                            ne(H(T.__sizeLabel), 1)
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
                          onClick: (Y) => C.removeFile(T)
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
      t.value !== null ? (m(), q("div", Nn, H(t.value), 1)) : L("", !0)
    ]));
  }
}), On = { class: "flex column" }, Un = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, $n = { class: "col" }, zn = { class: "q-uploader__title" }, qn = {
  key: 0,
  class: "flex column"
}, In = { class: "text-weight-medium text-body2" }, Pn = {
  key: 2,
  class: "flex column"
}, Ln = { class: "text-weight-medium text-body2" }, Mn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Hn = /* @__PURE__ */ G({
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
      f.add = [], f.delete = ((i = e.field.attachmentData) == null ? void 0 : i.map((v) => v.attachment_id)) ?? [], e.modelValueOnUpdate(f), S();
    }
    function p() {
      return S(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function V(f) {
      return new Promise((i) => {
        const v = new Blob([f]), C = new FileReader();
        C.onload = (T) => {
          var te;
          const Y = ((te = T.target) == null ? void 0 : te.result) ?? "", [de, se] = Y.split(",");
          i(se);
        }, C.readAsDataURL(v);
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
        const v = await s(i);
        let C = e.modelValue;
        C.add.push(v), e.modelValueOnUpdate(C);
      }
      a.value = !1, S();
    }
    async function d(f) {
      a.value = !0;
      for (const i of f) {
        const v = await s(i);
        let C = e.modelValue;
        C.add = C.add.filter((T) => T.key !== v.key), e.modelValueOnUpdate(C);
      }
      a.value = !1, S();
    }
    function k(f) {
      let i = e.modelValue;
      i.delete.push(f.attachment_id), e.modelValueOnUpdate(i), S();
    }
    function N(f) {
      let i = e.modelValue;
      i.delete = i.delete.filter((v) => v !== f.attachment_id), e.modelValueOnUpdate(i), S();
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
      e.registerBehaviourCallbacks(p, l, _, n, r);
    }), (f, i) => (m(), q("div", On, [
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
        header: h((v) => [
          Q("div", Un, [
            Q("div", $n, [
              Q("div", zn, H(e.field.label), 1)
            ]),
            v.canAddFiles ? (m(), E(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: v.pickFiles,
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
        list: h((v) => {
          var C;
          return [
            w.value ? L("", !0) : (m(), q("div", qn, [
              Q("div", In, "Fichier" + H((((C = e.field.attachmentData) == null ? void 0 : C.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              F(u($e), { separator: "" }, {
                default: h(() => [
                  (m(!0), q(pe, null, ge(e.field.attachmentData ?? [], (T) => (m(), E(u(ve), {
                    key: T.attachment_id
                  }, {
                    default: h(() => [
                      F(u(ae), null, {
                        default: h(() => [
                          F(u(oe), { class: "full-width ellipsis" }, {
                            default: h(() => [
                              ne(H(T.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(u(oe), { caption: "" }, {
                            default: h(() => [
                              ne(H(u(R).humanStorageSize(T.size)), 1)
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
                          z.value.includes(T.attachment_id) ? L("", !0) : (m(), E(u(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => k(T)
                          }, null, 8, ["disable", "onClick"])),
                          z.value.includes(T.attachment_id) && e.modelValue.add.length === 0 ? (m(), E(u(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Y) => N(T)
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
            !w.value && v.files.length > 0 ? (m(), E(u(st), { key: 1 })) : L("", !0),
            v.files.length > 0 ? (m(), q("div", Pn, [
              Q("div", Ln, "Fichier" + H(v.files.length > 0 ? "s" : "") + " à ajouter", 1),
              F(u($e), { separator: "" }, {
                default: h(() => [
                  (m(!0), q(pe, null, ge(v.files, (T) => (m(), E(u(ve), {
                    key: T.__key
                  }, {
                    default: h(() => [
                      F(u(ae), null, {
                        default: h(() => [
                          F(u(oe), { class: "full-width ellipsis" }, {
                            default: h(() => [
                              ne(H(T.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          F(u(oe), { caption: "" }, {
                            default: h(() => [
                              ne(H(T.__sizeLabel), 1)
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
                            onClick: (Y) => v.removeFile(T)
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
      t.value !== null ? (m(), q("div", Mn, H(t.value), 1)) : L("", !0)
    ]));
  }
});
function Gn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (V, s, D) => V[s] ? D ? () => p(V[s]) : () => V[s] : V.compare_to ? () => {
    var d;
    return ((d = e.getFieldByName(V.compare_to)) == null ? void 0 : d.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", p = (V) => String(
    M.formatDate(
      M.extractDate(V, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], _ = [];
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
        l.push(jn());
        break;
      case "absence":
        l.push(Yn());
        break;
      case "acceptance":
        l.push(Wn());
        break;
      case "inclusion":
        l.push(ft(s.including));
        break;
      case "exclusion":
        l.push(Qn(s.excluding));
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
        l.push(Xn());
        break;
      case "lessThanOrEqualNumber":
        l.push(
          Zn(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        l.push(
          ea(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        l.push(
          ta(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        l.push(
          na(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        l.push(
          aa(r(s, "equal_to"))
        );
        break;
      case "otherThanNumber":
        l.push(
          oa(
            r(s, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        l.push(ra());
        break;
      case "numberNumericOnly":
        l.push(la());
        break;
      case "numberEvenOnly":
        l.push(ia());
        break;
      case "numberOddOnly":
        l.push(sa());
        break;
      case "lessThanOrEqualStringLength":
        l.push(
          ua(
            r(s, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        l.push(
          ca(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        l.push(
          da(
            r(s, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        l.push(
          fa(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        l.push(
          ga(
            r(s, "equal_to")
          )
        );
        break;
      case "equalToString":
        l.push(
          pa(r(s, "equal_to"))
        );
        break;
      case "betweenStringLength":
        l.push(
          ma(
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
          ha(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        l.push(
          ya(
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
          ba(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        l.push(
          Ca(
            r(s, "equal_to", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        l.push(
          Fa(
            r(s, "other_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        l.push(
          ka()
        );
        break;
      case "allowFileContentType":
        l.push(
          Sa(
            r(s, "including")
          )
        );
        break;
      case "equalToFileLength":
        l.push(
          Da(
            r(s, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        l.push(
          xa(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        l.push(
          Aa(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        l.push(
          Ea(
            r(s, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        l.push(
          Ra(
            r(s, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        l.push(
          Ta(
            r(s, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        l.push(
          Ba(
            r(s, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        l.push(
          Na(
            r(s, "equal_to")
          )
        );
        break;
    }
  }), _.length > 0 ? _.map((V) => {
    switch (V) {
      case "allowBlank":
        return Kn(l);
      case "allowNull":
        return Jn(l);
    }
  }) : l;
}
function jn() {
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
function la() {
  return (o) => /^-?\d+(\.\d+)?$/.test(String(o).trim()) || "Caractère numérique uniquement";
}
function ia() {
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
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n <= r || `Inf. ou égal à ${a}`;
  };
}
function ya(o, e) {
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
function ba(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n > r || `Sup. à ${a}`;
  };
}
function Ca(o, e) {
  return (t) => {
    const a = o(), n = M.extractDate(String(t), e), r = M.extractDate(a, e);
    return n === r || `Égale à ${n}`;
  };
}
function Fa(o, e) {
  return (t) => {
    const a = o();
    return M.extractDate(String(t), e) !== M.extractDate(a, e) || `Doit être différent de ${a}`;
  };
}
function He(o) {
  return (e) => e == null || e === "" ? !0 : Va(e, o) || `Date invalide. Format : ${o}`;
}
function Va(o, e) {
  if (typeof o != "string" || !o.trim())
    return !1;
  const t = M.extractDate(o, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : M.formatDate(t, e) === o;
}
function ka() {
  return (o) => o.add.length > 0 || "Ce champ est requis";
}
function Sa(o) {
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
function Da(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && a !== r.size && (n = !1);
    }), n || `Taille par fichier ${R.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${R.humanStorageSize(a)}`;
  };
}
function xa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${R.humanStorageSize(a)}`;
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
function Ta(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) <= a || `${R.humanStorageSize(a)} max.`;
  };
}
function Ba(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) >= a || `${R.humanStorageSize(a)} min.`;
  };
}
function Na(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) === a || `Taille totale ${R.humanStorageSize(a)}`;
  };
}
const wa = {
  computeServerRules: Gn
};
class Ce {
  constructor(e, t, a, n, r, p, l, _, V) {
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
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = _, this.formSettings = {
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
      bindings: ct.getEmptyDefaultBindings(),
      actionComponent: X(ee.getGlobalActionComponent()),
      orphanErrorsComponent: X(ee.getGlobalOrphanErrorComponent()),
      wrapperResetComponent: X(ee.getGlobalWrapperResetComponent()),
      dynamicComponentRecord: {}
    };
  }
  static getForm(e, t, a, n, r, p, l, _, V) {
    return new Ce(
      e,
      t,
      a,
      n,
      r,
      p,
      l,
      _,
      V
    ).generateFormDef();
  }
  generateFormDef() {
    const e = qe.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), a = qe.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (p, l) => {
        const _ = [];
        p.fields.forEach((k) => {
          const N = this.dynamicComponentRecord[`field-${k.field_name}-before`], S = Ce.getFieldComponentByFormFieldType(k), w = this.dynamicComponentRecord[`field-${k.field_name}-after`], z = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: Ce.getRegularFieldTypeByFieldType(
              k.field_type
            )
          }, A = this.getBindingsByFormFieldType(k);
          let f = k.label;
          this.formSettings.requiredFieldsHasAsterisk && k.rules.find((v) => v.type === "required") && (f = f.concat("*"));
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
            beforeComponent: N ? X(N) : void 0,
            mainComponent: X(S),
            afterComponent: w ? X(w) : void 0,
            events: a.fields[k.field_name] ?? {},
            componentOptions: z
          };
          i.computedRules = wa.computeServerRules(
            i,
            this.formApi
          ), _.push(i), t.add(k.field_name);
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
            return kn;
          case "wysiwyg":
            return Sn;
          default:
            return Me;
        }
      case "text":
        return Me;
      case "number":
        return Vn;
      case "date":
        return gn;
      case "datetime":
        return yn;
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
        return wn;
      case "attachmentHasMany":
        return Hn;
      default:
        return Me;
    }
  }
}
const Oa = { class: "flex column" }, Ua = /* @__PURE__ */ G({
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
      unhide: N,
      resetValidation: A,
      getFields: f,
      setReadonlyState: i,
      setCssClass: v,
      setIcon: C,
      setLabel: T,
      tryFocusFirst: se,
      tryUnfocus: te,
      section: t.section
    }, _ = B(/* @__PURE__ */ new Map());
    function V() {
      t.section.fields.forEach((g) => {
        const x = g.metadata.field_name, W = t.formApi.getFieldByName(x);
        W && _.value.set(x, W);
      });
    }
    function s() {
      _.value.forEach((g) => {
        g.softReset();
      });
    }
    function D() {
      _.value.forEach((g) => {
        g.reset();
      }), R.callAllEvents(t.section.events.onReset);
    }
    function d() {
      _.value.forEach((g) => {
        g.clear();
      }), R.callAllEvents(t.section.events.onClear);
    }
    function k() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (_.value.forEach((x) => {
        x.hide();
      }), g.hidden = !0, R.callAllEvents(t.section.events.onHide));
    }
    function N() {
      const g = t.privateFormApi.getSectionRef(
        t.section.name
      );
      g && (_.value.forEach((x) => {
        x.unhide();
      }), g.hidden = !1, R.callAllEvents(t.section.events.onUnhide));
    }
    function S() {
      let g = !0;
      return _.value.forEach((x) => {
        if (!x.validate()) {
          g = !1;
          return;
        }
      }), R.callAllEvents(t.section.events.onValidated), g;
    }
    function w() {
      let g = !0;
      return _.value.forEach((x) => {
        if (!x.isValid()) {
          g = !1;
          return;
        }
      }), g;
    }
    function z() {
      return !w();
    }
    function A() {
      _.value.forEach((g) => {
        g.resetValidation();
      });
    }
    function f() {
      return _.value;
    }
    function i(g) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.readonly = g);
    }
    function v(g) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.cssClass = g);
    }
    function C(g) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.icon = g);
    }
    function T(g) {
      const x = t.privateFormApi.getSectionRef(
        t.section.name
      );
      x && (x.label = g);
    }
    function Y() {
      const g = {};
      for (const [x, W] of _.value)
        g[x] = W.getValueSerialized();
      return g;
    }
    function de() {
      const g = p.default;
      if (!g) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const x = G({
        inheritAttrs: !1,
        setup(W, { attrs: Se, slots: De }) {
          return () => g(
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
      for (const g of f().values())
        if (g.tryFocus(), g.isFocus())
          return !0;
      return !1;
    }
    function te() {
      for (const g of f().values())
        if (g.tryUnfocus(), !g.isFocus())
          return !0;
      return !1;
    }
    e(l);
    const ie = j(() => w()), ye = j(() => z()), ke = j(() => Y());
    return J(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onIsValid;
      },
      (g) => {
        a == null || a(), a = null, g && (a = J(ie, (x) => {
          x && R.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onIsInvalid;
      },
      (g) => {
        n == null || n(), n = null, g && (n = J(ye, (x) => {
          var W;
          x && R.callAllEvents((W = t.section) == null ? void 0 : W.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var g;
        return (g = t.section) == null ? void 0 : g.events.onUpdate;
      },
      (g) => {
        r == null || r(), r = null, g && (r = J(
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
      const g = (x = rt()) == null ? void 0 : x.exposed;
      g && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        g
      ), Fe(() => {
        var W;
        V(), R.callAllEvents((W = t.section) == null ? void 0 : W.events.onReady);
      });
    }), (g, x) => je((m(), q("div", Oa, [
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
}), $a = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, za = ["index"], qa = /* @__PURE__ */ G({
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
    }, _ = () => {
    }, V = () => {
    };
    const s = B(), D = B(!1), d = B([]);
    function k() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value);
    }
    function N() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = S(s.value), R.callAllEvents(t.field.events.onReset), p(), Fe(() => {
        g();
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
    function v(b) {
      d.value = b;
    }
    function C() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function T() {
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
    function ye() {
      return n();
    }
    function ke() {
      return !ye();
    }
    function g() {
      return r();
    }
    function x() {
      D.value || (_(), D.value = !0);
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
    function Pe(b, I, fe, Ve, Ee, Re, Te) {
      a = b, n = I, r = fe, Ve && (p = Ve), Ee && (l = Ee), Re && (_ = Re), Te && (V = Te);
    }
    const _e = {
      softReset: k,
      reset: N,
      clear: z,
      validate: ie,
      isValid: ye,
      isInvalid: ke,
      hide: T,
      unhide: Y,
      resetValidation: g,
      getValueDeserialized: i,
      getValueSerialized: f,
      setupBackendErrors: v,
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
    return e(_e), J(
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
        fieldApi: _e
      }, null, 8, ["formApi"])) : L("", !0),
      (m(), E(le(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: N,
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
        fieldApi: _e
      }, null, 8, ["formApi"])) : L("", !0),
      d.value.length > 0 ? (m(), q("div", $a, [
        (m(!0), q(pe, null, ge(d.value, (fe, Ve) => (m(), q("div", {
          index: Ve,
          class: "flex column"
        }, H(fe), 9, za))), 256))
      ])) : L("", !0)
    ], 512)), [
      [Qe, t.field.hidden !== !0]
    ]);
  }
}), Ia = { class: "flex column" }, Ha = /* @__PURE__ */ G({
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
    let a = null, n = "", r = 0, p = 0, l = null, _ = null, V = null, s = null;
    const D = ot(), d = B(Ce.getEmptyFormBeforeInit()), k = B(!1), N = B(!1), S = B(!1), w = B(!1), z = B("create"), A = B({}), f = B(/* @__PURE__ */ new Map()), i = B(/* @__PURE__ */ new Map());
    async function v() {
      a = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), d.value = Ce.getForm(
        t.resourceName,
        t.resourceId,
        T(),
        a,
        t.formSettings,
        t.formStyle,
        t.context,
        be,
        t.eventManager
      ), r = d.value.sections.length, p = d.value.sections.reduce((c, y) => (c += y.fields.length, c), 0), t.resourceId && (z.value = "edit");
    }
    async function C() {
      var $, re, Be;
      if (!se())
        return;
      R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onSubmit), w.value = !0, W();
      const c = Y(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: d.value.context
      });
      if (s = y.resource_data, y.success)
        A.value = {}, z.value === "create" && (z.value = "edit"), a && y.resource_data && (a.resource_data = y.resource_data), d.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          T(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formStyle,
          d.value.context,
          be,
          t.eventManager
        ), ye(), n = JSON.stringify(Y()), R.callAllEvents((Be = d.value) == null ? void 0 : Be.events.onSubmitSuccess);
      else {
        A.value = {};
        const Ne = [];
        for (const [me, At] of i.value) {
          const Xe = y.errors[me];
          Xe && (At.setupBackendErrors(Xe), Ne.push(me));
        }
        Object.entries(y.errors).forEach((me) => {
          Ne.includes(me[0]) || (A.value[me[0]] = me[1]);
        }), R.callAllEvents((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      w.value = !1;
    }
    function T() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in D) {
        const $ = D[y];
        if ($) {
          const re = G({
            inheritAttrs: !1,
            setup(Be, { attrs: Ne, slots: me }) {
              return () => $({
                ...Be,
                ...Ne,
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
      for (const [y, $] of i.value)
        c[y] = $.getValueDeserialized();
      return c;
    }
    function de() {
      const c = {};
      for (const [y, $] of i.value)
        c[y] = $.getValueSerialized();
      return c;
    }
    function se() {
      var y;
      let c = !0;
      return i.value.forEach(($) => {
        if (!$.validate()) {
          c = !1;
          return;
        }
      }), R.callAllEvents((y = d.value) == null ? void 0 : y.events.onValidated), c;
    }
    function te() {
      let c = !0;
      return i.value.forEach((y) => {
        if (!y.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function ie() {
      return !te();
    }
    function ye() {
      f.value.forEach((c) => {
        c.softReset();
      });
    }
    function ke() {
      var c;
      i.value.forEach((y) => {
        y.reset();
      }), R.callAllEvents((c = d.value) == null ? void 0 : c.events.onReset);
    }
    function g() {
      var c;
      i.value.forEach((y) => {
        y.clear();
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
    function _e() {
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
      ].forEach((y) => {
        (t[y] === null || t[y] === void 0) && console.warn(`Missing props for <Submit64> -> ${y}`);
      });
    }
    function Ee() {
      return u(z);
    }
    function Re() {
      return n !== JSON.stringify(Y());
    }
    function Te(c) {
      d.value && (d.value.context = c);
    }
    function mt(c) {
      d.value && (d.value.cssClass = c);
    }
    function pt(c) {
      d.value && (d.value.readonly = c);
    }
    function gt() {
      return S.value;
    }
    function vt() {
      return s;
    }
    function We() {
      for (const c of _e().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function ht() {
      for (const c of _e().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function yt() {
      return d;
    }
    function _t(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.find(($) => $.name === c);
    }
    function bt(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === c);
    }
    function Ct(c, y) {
      f.value.set(c, y), r === f.value.size && (k.value = !0);
    }
    function Ft(c, y) {
      i.value.set(c, y), p === i.value.size && (N.value = !0);
    }
    function Vt(c, y) {
      c.fieldsComponent = y;
    }
    const Je = j(() => te()), kt = j(() => ie()), St = j(() => de()), Ke = {
      getFormRef: yt,
      getSectionRef: _t,
      getFieldRef: bt,
      registerSectionWrapperRef: Ct,
      registerFieldWrapperRef: Ft,
      setSectionFieldComponent: Vt
    }, Dt = new Proxy({}, {
      get(c, y) {
        var $;
        return ($ = d.value) == null ? void 0 : $[y];
      }
    }), be = {
      getMode: Ee,
      getSectionByName: De,
      getSectionByIndex: Pe,
      getSections: _e,
      getFieldByName: b,
      getFields: I,
      validate: se,
      isValid: te,
      isInvalid: ie,
      softReset: ye,
      reset: ke,
      clear: g,
      resetValidation: x,
      submit: C,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Se,
      getAssociationDataCallback: fe,
      setContext: Te,
      setCssClass: mt,
      setReadonlyState: pt,
      isReady: gt,
      getSubmitData: vt,
      tryFocusFirst: We,
      tryUnfocus: ht,
      form: Dt,
      refs: {
        orphanErrors: Le(A),
        isLoadingSubmit: Le(w),
        isFormValid: Le(Je)
      }
    };
    return e(be), J(
      () => k.value && N.value,
      (c) => {
        var y;
        c && !S.value && (R.callAllEvents((y = d.value) == null ? void 0 : y.events.onReady), S.value = !0);
      }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        l == null || l(), l = null, c && (l = J(Je, (y) => {
          var $;
          y && R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsValid);
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
          var $;
          y && R.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsInvalid);
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
          St,
          () => {
            var y;
            R.callAllEvents((y = d.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      Ve(), await v(), Fe(() => {
        n = JSON.stringify(Y()), d.value.formSettings.autofocus && We();
      });
    }), (c, y) => je((m(), q("div", Ia, [
      Q("div", {
        class: at(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), q(pe, null, ge(d.value.sections, ($) => (m(), E(Ua, {
          key: $.name,
          section: $,
          formApi: be,
          privateFormApi: Ke
        }, {
          default: h(() => [
            (m(!0), q(pe, null, ge($.fields, (re) => (m(), E(qa, {
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
  Ha as Submit64Form
};
