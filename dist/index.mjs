var xt = Object.defineProperty;
var Et = (o, e, t) => e in o ? xt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var w = (o, e, t) => Et(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as H, openBlock as m, createElementBlock as q, createElementVNode as Q, createVNode as V, unref as u, mergeProps as P, createBlock as R, createCommentVNode as L, normalizeClass as at, toDisplayString as M, resolveDynamicComponent as le, resolveComponent as Rt, normalizeProps as ue, guardReactiveProps as ce, withCtx as b, createTextVNode as ne, Fragment as pe, renderList as ge, ref as B, computed as G, onMounted as K, nextTick as Fe, watch as J, markRaw as X, useSlots as ot, getCurrentInstance as rt, withDirectives as Ge, vShow as Qe, readonly as Le } from "vue";
import { QBtn as Z, QIcon as Ae, QItem as ve, QItemSection as ae, QItemLabel as oe, IconSet as Te, Lang as we, QInput as xe, QPopupProxy as Ue, QDate as lt, QTime as Ot, QCheckbox as Bt, QSelect as Ye, QColor as Nt, QEditor as Tt, QUploader as it, QList as $e, QSeparator as st, QUploaderAddTrigger as ut, date as j } from "quasar";
const wt = { class: "flex column" }, Ut = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, $t = /* @__PURE__ */ H({
  __name: "DefaultActionComponent",
  props: {
    formApi: {}
  },
  setup(o) {
    const e = o;
    return (t, a) => (m(), q("div", wt, [
      Q("div", Ut, [
        V(u(Z), P(e.formApi.form.bindings.form.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (m(), R(u(Z), P({ key: 0 }, e.formApi.form.bindings.form.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : L("", !0),
        e.formApi.form.formSettings.showClearButton ? (m(), R(u(Z), P({ key: 1 }, e.formApi.form.bindings.form.actions.clearBtn, {
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
    return (t, a) => (m(), q("div", {
      class: at(e.sectionApi.section.cssClass)
    }, [
      Q("div", zt, [
        e.sectionApi.section.icon ? (m(), R(u(Ae), P({ key: 0 }, e.formApi.form.bindings.sections.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : L("", !0),
        Q("div", qt, M(e.sectionApi.section.label), 1)
      ]),
      Q("div", It, [
        (m(), R(le(e.sectionApi.section.fieldsComponent)))
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
      const n = Rt("q-icon");
      return m(), R(n, {
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
    return (t, a) => (m(), R(u(ve), ue(ce(e.itemProps)), {
      default: b(() => [
        V(u(ae), null, {
          default: b(() => [
            V(u(oe), null, {
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
    return (t, a) => (m(), q("div", Mt, [
      (m(!0), q(pe, null, ge(e.formApi.refs.orphanErrors.value, (n, r) => (m(), q("div", {
        key: r,
        class: "q-field--error q-field__bottom text-negative"
      }, M(r) + " : " + M(n.join(",")), 1))), 128))
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
}, He = {
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
      ...ze
    },
    color: {}
  };
}
function Wt() {
  return {
    toolbar: [
      [
        {
          label: we.props.editor.align,
          icon: Te.props.editor.align,
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
          label: we.props.editor.formatting,
          icon: Te.props.editor.formatting,
          list: "no-icons",
          options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
        },
        {
          label: we.props.editor.fontSize,
          icon: Te.props.editor.fontSize,
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
          label: we.props.editor.defaultFont,
          icon: Te.props.editor.font,
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
      noCaps: He.noCaps
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
const g = {
  callAllEvents: un,
  humanStorageSize: cn,
  deepMergeObject: dt,
  deepDupeObject: dn
}, Ie = class Ie {
  constructor() {
    w(this, "_formSettings");
    w(this, "_formBind");
    w(this, "_actionComponent");
    w(this, "_orphanErrorsComponent");
    w(this, "_sectionComponent");
    w(this, "_wrapperResetComponent");
    w(this, "_associationDisplayComponent");
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
    this._instance._formSettings = g.deepMergeObject(
      g.deepDupeObject(this._instance._formSettings),
      g.deepDupeObject(e)
    );
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBind = g.deepMergeObject(
      g.deepDupeObject(this._instance._formBind),
      g.deepDupeObject(e)
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
w(Ie, "_instance", new Ie());
let ee = Ie;
class qe {
  constructor(e) {
    w(this, "formApi");
    w(this, "events", []);
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
    w(this, "type");
    w(this, "data");
    w(this, "formApi");
    w(this, "action", () => {
    });
    w(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
    w(this, "formEvent");
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
    function k() {
      a.value && a.value.blur();
    }
    const s = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(r, p, l, void 0, void 0, _, k), Fe(() => {
        var A;
        (A = a.value) == null || A.resetValidation();
      });
    }), (A, d) => (m(), R(u(xe), P({
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
        V(u(Ae), ue(ce(s.value.icon)), {
          default: b(() => [
            V(u(Ue), P({
              ref_key: "popupProxyRef",
              ref: t
            }, s.value.popupProxy), {
              default: b(() => [
                V(u(lt), P(s.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", pn, [
                      V(u(Z), P(s.value.btn, { onClick: n }), null, 16)
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
    function k() {
      n.value && n.value.resetValidation();
    }
    function s() {
      n.value && n.value.focus();
    }
    function A() {
      n.value && n.value.blur();
    }
    const d = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(l, _, k, void 0, void 0, s, A), Fe(() => {
        var S;
        (S = n.value) == null || S.resetValidation();
      });
    }), (S, N) => (m(), R(u(xe), P({
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
        V(u(Ae), ue(ce(d.value.iconDate)), {
          default: b(() => [
            V(u(Ue), P({ ref: "popupProxyRef" }, d.value.popupProxyDate), {
              default: b(() => [
                V(u(lt), P(d.value.date, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.dateFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", vn, [
                      V(u(Z), P(d.value.btnDate, { onClick: r }), null, 16)
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
        V(u(Ae), ue(ce(d.value.iconDate)), {
          default: b(() => [
            V(u(Ue), P({
              ref_key: "timePopupProxyRef",
              ref: a
            }, d.value.popupProxyDate), {
              default: b(() => [
                V(u(Ot), P(d.value.datetime, {
                  "model-value": e.modelValue,
                  mask: e.formApi.form.formSettings.datetimeFormat,
                  "onUpdate:modelValue": e.modelValueOnUpdate
                }), {
                  default: b(() => [
                    Q("div", hn, [
                      V(u(Z), P(d.value.btnDatetime, { onClick: p }), null, 16)
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
    }), (p, l) => (m(), q("div", yn, [
      V(u(Bt), P({ ref: "checkboxRef" }, e.field.bindings, {
        "model-value": e.modelValue,
        label: e.field.label,
        "aria-readonly": e.field.readonly,
        class: [e.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), null, 16, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (m(), q("div", _n, M(t.value), 1)) : L("", !0)
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
    const e = o, t = B([]), a = B([]), n = B();
    function r(N, D) {
      if (N === "") {
        D(() => {
          a.value = [...t.value];
        });
        return;
      }
      D(() => {
        const T = N.toLowerCase();
        a.value = t.value.filter((z) => z.label.toLowerCase().includes(T));
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
    function k() {
      n.value && n.value.resetValidation();
    }
    function s() {
      a.value = [];
    }
    function A() {
      n.value && n.value.focus();
    }
    function d() {
      n.value && n.value.blur();
    }
    const S = G(() => e.field.bindings);
    return K(() => {
      p(), e.registerBehaviourCallbacks(l, _, k, void 0, s, A, d);
    }), (N, D) => (m(), R(u(Ye), P({
      ref_key: "fieldRef",
      ref: n
    }, S.value.select, {
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
        V(u(ve), ue(ce(S.value.itemNoOption)), {
          default: b(() => [
            V(u(ae), null, {
              default: b(() => [
                V(u(oe), null, {
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
    function _(x, f) {
      if (x === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = x;
      const h = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: h.resourceName,
        resourceId: h.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: x,
        context: h.context
      }).then((F) => {
        f(() => {
          a.value = F.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = l();
      });
    }
    function k() {
      var f, i;
      const x = e.getValueSerialized();
      !x || !e.field.associationData || (a.value = [
        {
          label: ((f = e.field.associationData[0]) == null ? void 0 : f.label) ?? "???",
          value: x,
          data: (i = e.field.associationData[0]) == null ? void 0 : i.data
        }
      ]);
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function A() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function S() {
      n.value = l(), a.value = [], p.value = Ze;
    }
    function N(x) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && x.to === f && f !== -1) {
        const i = e.formApi.form, h = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, h({
          resourceName: i.resourceName,
          resourceId: i.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: p.value,
          context: i.context
        }).then((F) => {
          a.value = a.value.concat(
            F.rows
          ), n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), F.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, x.ref.refresh();
        });
      }
    }
    function D() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const z = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        A,
        d,
        k,
        S,
        D,
        T
      ), Fe(() => {
        k();
      });
    }), (x, f) => (m(), R(u(Ye), P({
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
      "no-option": b(() => [
        V(u(ve), ue(ce(z.value.itemNoOption)), {
          default: b(() => [
            V(u(ae), null, {
              default: b(() => [
                V(u(oe), null, {
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
      option: b((i) => [
        (m(), R(le(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: i.opt,
          itemProps: i.itemProps
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
    function _(x, f) {
      if (x === p.value) {
        f(() => {
        });
        return;
      }
      const i = e.formApi.getAssociationDataCallback();
      n.value = l(), p.value = x;
      const h = e.formApi.form;
      n.value.isLoading = !0, i({
        resourceName: h.resourceName,
        resourceId: h.resourceId,
        associationName: e.field.metadata.field_association_name,
        associationClassname: e.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: x,
        context: h.context
      }).then((F) => {
        f(() => {
          a.value = F.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        a.value = [], n.value = l();
      });
    }
    function k() {
      const x = e.getValueSerialized();
      !x || !e.field.associationData || (a.value = x.map((f, i) => ({
        label: e.field.associationData[i].label ?? "???",
        value: f,
        data: e.field.associationData[i].data
      })));
    }
    function s() {
      return r.value ? r.value.validate() : !1;
    }
    function A() {
      return r.value ? !r.value.hasError : !1;
    }
    function d() {
      r.value && r.value.resetValidation();
    }
    function S() {
      n.value = l(), a.value = [], p.value = tt;
    }
    function N(x) {
      const f = a.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && x.to === f && f !== -1) {
        const i = e.formApi.form, h = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, h({
          resourceName: i.resourceName,
          resourceId: i.resourceId,
          associationName: e.field.metadata.field_association_name,
          associationClassname: e.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: p.value,
          context: i.context
        }).then((F) => {
          a.value = a.value.concat(
            F.rows
          ), n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), F.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, x.ref.refresh();
        });
      }
    }
    function D() {
      r.value && r.value.focus();
    }
    function T() {
      r.value && r.value.blur();
    }
    const z = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(
        s,
        A,
        d,
        k,
        S,
        D,
        T
      ), Fe(() => {
        k();
      });
    }), (x, f) => (m(), R(u(Ye), P({
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
      "no-option": b(() => [
        V(u(ve), ue(ce(z.value.itemNoOption)), {
          default: b(() => [
            V(u(ae), null, {
              default: b(() => [
                V(u(oe), null, {
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
      option: b((i) => [
        (m(), R(le(u(t)), {
          associationName: e.field.metadata.field_association_name,
          entry: i.opt,
          itemProps: i.itemProps
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
    }), (_, k) => (m(), R(u(xe), P({
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
    }), (_, k) => (m(), R(u(xe), P({
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
    const _ = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, p, l);
    }), (k, s) => (m(), R(u(xe), P({
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
        V(u(Ae), ue(ce(_.value.icon)), {
          default: b(() => [
            V(u(Ue), ue(ce(_.value.popupProxy)), {
              default: b(() => [
                V(u(Nt), P(_.value.color, {
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
    const e = o, t = B();
    function a() {
      return !!t.value;
    }
    function n() {
      return !!t.value;
    }
    function r() {
    }
    function p(A) {
      var S;
      A.preventDefault(), A.stopPropagation();
      const d = (S = A.clipboardData) == null ? void 0 : S.items;
      if (d)
        for (let N = 0; N < d.length; N++) {
          const D = d[N];
          if (D.type.startsWith("image/")) {
            const T = D.getAsFile();
            T && _(T);
          }
        }
    }
    function l(A) {
      var S;
      A.preventDefault(), A.stopPropagation();
      const d = (S = A.dataTransfer) == null ? void 0 : S.files;
      if (d)
        for (let N = 0; N < d.length; N++) {
          const D = d[N];
          D.type.startsWith("image/") && D && _(D);
        }
    }
    function _(A) {
      if (!t.value)
        return;
      const d = new FileReader();
      d.onload = (S) => {
        var D;
        const N = (D = S.target) == null ? void 0 : D.result;
        if (typeof N == "string") {
          const T = new Image();
          T.onload = () => {
            var f;
            const z = T.width, x = T.height;
            (f = t.value) == null || f.runCmd(
              "insertHTML",
              `<img src="${N}" width="${z}" height="${x}" style="max-width: 80%; height: auto;" />`
            );
          }, T.src = N;
        }
      }, d.readAsDataURL(A);
    }
    function k() {
      t.value && t.value.focus();
    }
    function s() {
      t.value && t.value.getContentEl().blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(a, n, r, void 0, void 0, k, s);
    }), (A, d) => (m(), R(u(Tt), P({
      ref_key: "fieldRef",
      ref: t
    }, e.field.bindings, {
      "model-value": e.modelValue,
      onDrop: l,
      onPaste: p,
      "onUpdate:modelValue": e.modelValueOnUpdate
    }), null, 16, ["model-value", "onUpdate:modelValue"]));
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
}), An = { class: "flex column" }, xn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, En = { class: "col" }, Rn = { class: "q-uploader__title" }, On = {
  key: 0,
  class: "flex column"
}, Bn = {
  key: 2,
  class: "flex column"
}, Nn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Tn = /* @__PURE__ */ H({
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
      i.add = [], i.delete = [], e.modelValueOnUpdate(i), D();
    }
    function r() {
      var h;
      let i = e.modelValue;
      i.add = [], i.delete = ((h = e.field.attachmentData) == null ? void 0 : h.map((F) => F.attachment_id)) ?? [], e.modelValueOnUpdate(i), D();
    }
    function p() {
      return D(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function k(i) {
      return new Promise((h) => {
        const F = new Blob([i]), O = new FileReader();
        O.onload = (Y) => {
          var ie;
          const de = ((ie = Y.target) == null ? void 0 : ie.result) ?? "", [se, te] = de.split(",");
          h(te);
        }, O.readAsDataURL(F);
      });
    }
    async function s(i) {
      return {
        key: `${i.lastModified}${i.name}`,
        size: i.size,
        filename: i.name,
        contentType: i.type,
        base64: await k(await i.arrayBuffer())
      };
    }
    async function A(i) {
      if (!i[0])
        return;
      a.value = !0;
      const h = await s(i[0]);
      let F = e.modelValue;
      F.add = [h], a.value = !1, e.modelValueOnUpdate(F), D();
    }
    function d(i) {
      if (!i[0])
        return;
      let h = e.modelValue;
      h.add = [], h.delete = [], e.modelValueOnUpdate(h), D();
    }
    function S(i) {
      let h = e.modelValue;
      h.delete = [i.attachment_id], e.modelValueOnUpdate(h), D();
    }
    function N() {
      let i = e.modelValue;
      i.delete = [], e.modelValueOnUpdate(i), D();
    }
    function D() {
      t.value = null;
      for (const i of e.field.computedRules) {
        const h = i(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    const T = G(() => (e.field.attachmentData ?? []).length === 0), z = G(() => e.modelValue ? e.modelValue.delete : []), x = G(() => {
      var i, h;
      return e.modelValue ? (((i = e.field.attachmentData) == null ? void 0 : i.length) ?? 0) === 0 || (((h = e.field.attachmentData) == null ? void 0 : h.length) ?? !0) && e.modelValue.delete.length === 1 : !0;
    }), f = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(p, l, _, n, r);
    }), (i, h) => (m(), q("div", An, [
      V(u(it), P(f.value.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: A,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: b((F) => [
          Q("div", xn, [
            Q("div", En, [
              Q("div", Rn, M(e.field.label), 1)
            ]),
            F.canAddFiles && x.value ? (m(), R(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: F.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                V(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: b((F) => [
          T.value ? L("", !0) : (m(), q("div", On, [
            h[0] || (h[0] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
            V(u($e), { separator: "" }, {
              default: b(() => [
                (m(!0), q(pe, null, ge(e.field.attachmentData ?? [], (O) => (m(), R(u(ve), {
                  key: O.attachment_id
                }, {
                  default: b(() => [
                    V(u(ae), null, {
                      default: b(() => [
                        V(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(M(O.filename), 1)
                          ]),
                          _: 2
                        }, 1024),
                        V(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(M(u(g).humanStorageSize(O.size)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    e.modelValue ? (m(), R(u(ae), {
                      key: 0,
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        z.value.includes(O.attachment_id) ? L("", !0) : (m(), R(u(Z), {
                          key: 0,
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => S(O)
                        }, null, 8, ["disable", "onClick"])),
                        z.value.includes(O.attachment_id) && e.modelValue.add.length === 0 ? (m(), R(u(Z), {
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
          !T.value && F.files.length > 0 ? (m(), R(u(st), { key: 1 })) : L("", !0),
          F.files.length > 0 ? (m(), q("div", Bn, [
            h[1] || (h[1] = Q("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
            V(u($e), { separator: "" }, {
              default: b(() => [
                (m(!0), q(pe, null, ge(F.files, (O) => (m(), R(u(ve), {
                  key: O.__key
                }, {
                  default: b(() => [
                    V(u(ae), null, {
                      default: b(() => [
                        V(u(oe), { class: "full-width ellipsis" }, {
                          default: b(() => [
                            ne(M(O.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        V(u(oe), { caption: "" }, {
                          default: b(() => [
                            ne(M(O.__sizeLabel), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    V(u(ae), {
                      top: "",
                      side: ""
                    }, {
                      default: b(() => [
                        V(u(Z), {
                          class: "gt-xs",
                          size: "12px",
                          disable: e.field.readonly,
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "delete",
                          onClick: (Y) => F.removeFile(O)
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
      t.value !== null ? (m(), q("div", Nn, M(t.value), 1)) : L("", !0)
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
    const e = o, t = B(null), a = B(!1);
    function n() {
      let f = e.modelValue;
      f.add = [], f.delete = [], e.modelValueOnUpdate(f), D();
    }
    function r() {
      var i;
      let f = e.modelValue;
      f.add = [], f.delete = ((i = e.field.attachmentData) == null ? void 0 : i.map((h) => h.attachment_id)) ?? [], e.modelValueOnUpdate(f), D();
    }
    function p() {
      return D(), l();
    }
    function l() {
      return t.value === null && a.value !== !0;
    }
    function _() {
      t.value = null;
    }
    async function k(f) {
      return new Promise((i) => {
        const h = new Blob([f]), F = new FileReader();
        F.onload = (O) => {
          var te;
          const Y = ((te = O.target) == null ? void 0 : te.result) ?? "", [de, se] = Y.split(",");
          i(se);
        }, F.readAsDataURL(h);
      });
    }
    async function s(f) {
      return {
        key: `${f.lastModified}${f.name}`,
        size: f.size,
        filename: f.name,
        contentType: f.type,
        base64: await k(await f.arrayBuffer())
      };
    }
    async function A(f) {
      a.value = !0;
      for (const i of f) {
        const h = await s(i);
        let F = e.modelValue;
        F.add.push(h), e.modelValueOnUpdate(F);
      }
      a.value = !1, D();
    }
    async function d(f) {
      a.value = !0;
      for (const i of f) {
        const h = await s(i);
        let F = e.modelValue;
        F.add = F.add.filter((O) => O.key !== h.key), e.modelValueOnUpdate(F);
      }
      a.value = !1, D();
    }
    function S(f) {
      let i = e.modelValue;
      i.delete.push(f.attachment_id), e.modelValueOnUpdate(i), D();
    }
    function N(f) {
      let i = e.modelValue;
      i.delete = i.delete.filter((h) => h !== f.attachment_id), e.modelValueOnUpdate(i), D();
    }
    function D() {
      t.value = null;
      for (const f of e.field.computedRules) {
        const i = f(e.modelValue);
        if (typeof i == "string") {
          t.value = i;
          break;
        }
      }
    }
    const T = G(() => (e.field.attachmentData ?? []).length === 0), z = G(() => e.modelValue ? e.modelValue.delete : []), x = G(() => e.field.bindings);
    return K(() => {
      e.registerBehaviourCallbacks(p, l, _, n, r);
    }), (f, i) => (m(), q("div", wn, [
      V(u(it), P(x.value.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.field.label,
        class: e.field.cssClass,
        readonly: e.field.readonly,
        onAdded: A,
        onRemoved: d,
        style: { width: "inherit" }
      }), {
        header: b((h) => [
          Q("div", Un, [
            Q("div", $n, [
              Q("div", zn, M(e.field.label), 1)
            ]),
            h.canAddFiles ? (m(), R(u(Z), {
              key: 0,
              type: "a",
              icon: "add_box",
              onClick: h.pickFiles,
              round: "",
              dense: "",
              flat: ""
            }, {
              default: b(() => [
                V(u(ut))
              ]),
              _: 1
            }, 8, ["onClick"])) : L("", !0)
          ])
        ]),
        list: b((h) => {
          var F;
          return [
            T.value ? L("", !0) : (m(), q("div", qn, [
              Q("div", In, "Fichier" + M((((F = e.field.attachmentData) == null ? void 0 : F.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne", 1),
              V(u($e), { separator: "" }, {
                default: b(() => [
                  (m(!0), q(pe, null, ge(e.field.attachmentData ?? [], (O) => (m(), R(u(ve), {
                    key: O.attachment_id
                  }, {
                    default: b(() => [
                      V(u(ae), null, {
                        default: b(() => [
                          V(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(M(O.filename), 1)
                            ]),
                            _: 2
                          }, 1024),
                          V(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(M(u(g).humanStorageSize(O.size)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      e.modelValue ? (m(), R(u(ae), {
                        key: 0,
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          z.value.includes(O.attachment_id) ? L("", !0) : (m(), R(u(Z), {
                            key: 0,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "delete",
                            onClick: (Y) => S(O)
                          }, null, 8, ["disable", "onClick"])),
                          z.value.includes(O.attachment_id) && e.modelValue.add.length === 0 ? (m(), R(u(Z), {
                            key: 1,
                            class: "gt-xs",
                            size: "12px",
                            disable: e.field.readonly,
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "refresh",
                            onClick: (Y) => N(O)
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
            !T.value && h.files.length > 0 ? (m(), R(u(st), { key: 1 })) : L("", !0),
            h.files.length > 0 ? (m(), q("div", Pn, [
              Q("div", Ln, "Fichier" + M(h.files.length > 0 ? "s" : "") + " à ajouter", 1),
              V(u($e), { separator: "" }, {
                default: b(() => [
                  (m(!0), q(pe, null, ge(h.files, (O) => (m(), R(u(ve), {
                    key: O.__key
                  }, {
                    default: b(() => [
                      V(u(ae), null, {
                        default: b(() => [
                          V(u(oe), { class: "full-width ellipsis" }, {
                            default: b(() => [
                              ne(M(O.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          V(u(oe), { caption: "" }, {
                            default: b(() => [
                              ne(M(O.__sizeLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      V(u(ae), {
                        top: "",
                        side: ""
                      }, {
                        default: b(() => [
                          V(u(Z), {
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
      t.value !== null ? (m(), q("div", jn, M(t.value), 1)) : L("", !0)
    ]));
  }
});
function Hn(o, e) {
  const t = o.rules ?? [], a = o.type, n = e.form, r = (k, s, A) => k[s] ? A ? () => p(k[s]) : () => k[s] : k.compare_to ? () => {
    var d;
    return ((d = e.getFieldByName(k.compare_to)) == null ? void 0 : d.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", p = (k) => String(
    j.formatDate(
      j.extractDate(k, n.formSettings.backendDateFormat),
      n.formSettings.dateFormat
    )
  ), l = [], _ = [];
  switch (a) {
    case "date":
      l.push(Me(n.formSettings.dateFormat));
      break;
    case "datetime":
      l.push(Me(n.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((k) => {
    const s = k;
    switch (s.type) {
      case "required":
        l.push(Gn());
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
        l.push(Me(n.formSettings.dateFormat));
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
          ba(
            r(s, "less_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        l.push(
          ya(
            r(s, "greater_than", !0),
            n.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        l.push(
          _a(
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
          Oa(
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
  }), _.length > 0 ? _.map((k) => {
    switch (k) {
      case "allowBlank":
        return Kn(l);
      case "allowNull":
        return Jn(l);
    }
  }) : l;
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
    }), n || `Taille par fichier ${g.humanStorageSize(a)}`;
  };
}
function Aa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size < a && (n = !1);
    }), n || `Taille par fichier min. ${g.humanStorageSize(a)}`;
  };
}
function xa(o) {
  return (e) => {
    const t = e, a = o();
    let n = !0;
    return t.add.forEach((r) => {
      n && r.size > a && (n = !1);
    }), n || `Taille par fichier max. ${g.humanStorageSize(a)}`;
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
    return t.add.reduce((r, p) => (r += p.size, r), 0) <= a || `${g.humanStorageSize(a)} max.`;
  };
}
function Ba(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) >= a || `${g.humanStorageSize(a)} min.`;
  };
}
function Na(o) {
  return (e) => {
    const t = e, a = o();
    return t.add.reduce((r, p) => (r += p.size, r), 0) === a || `Taille totale ${g.humanStorageSize(a)}`;
  };
}
const Ta = {
  computeServerRules: Hn
};
class Ce {
  constructor(e, t, a, n, r, p, l, _, k) {
    w(this, "resourceName");
    w(this, "resourceId");
    w(this, "formMetadataAndData");
    w(this, "context");
    w(this, "formSettings");
    w(this, "formBind");
    w(this, "actionComponent");
    w(this, "orphanErrorsComponent");
    w(this, "sectionComponent");
    w(this, "wrapperResetComponent");
    w(this, "associationDisplayComponent");
    w(this, "dynamicComponentRecord");
    w(this, "formApi");
    w(this, "registerEventCallback");
    this.dynamicComponentRecord = a.dynamicComponentRecord ?? {}, this.formMetadataAndData = n, this.resourceId = t, this.context = l, this.resourceName = e, this.formApi = _, this.formSettings = g.deepMergeObject(
      g.deepDupeObject(ee.getGlobalFormSetting()),
      g.deepDupeObject(r ?? {})
    ), this.formBind = g.deepMergeObject(
      g.deepDupeObject(ee.getGlobalFormBind()),
      g.deepDupeObject(p ?? {})
    ), this.actionComponent = a.actionComponent ?? ee.getGlobalActionComponent(), this.orphanErrorsComponent = a.orphanErrorsComponent ?? ee.getGlobalOrphanErrorComponent(), this.sectionComponent = a.sectionComponent ?? ee.getGlobalSectionComponent(), this.wrapperResetComponent = a.wrapperResetComponent ?? ee.getGlobalWrapperResetComponent(), this.associationDisplayComponent = a.associationDisplayComponent ?? ee.getGlobalAssociationDisplayComponent(), this.registerEventCallback = k ?? (() => {
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
  static getForm(e, t, a, n, r, p, l, _, k) {
    return new Ce(
      e,
      t,
      a,
      n,
      r,
      p,
      l,
      _,
      k
    ).generateFormDef();
  }
  generateFormDef() {
    const e = qe.create(this.formApi);
    this.registerEventCallback(e);
    const t = /* @__PURE__ */ new Set(), a = qe.getEventsObjectFromInstance(e), n = [];
    this.formMetadataAndData.form.sections.forEach(
      (p, l) => {
        const _ = [];
        p.fields.forEach((S) => {
          const N = this.dynamicComponentRecord[`field-${S.field_name}-before`], D = Ce.getFieldComponentByFormFieldType(S), T = this.dynamicComponentRecord[`field-${S.field_name}-after`], z = {
            associationDisplayComponent: X(
              this.associationDisplayComponent
            ),
            regularFieldType: Ce.getRegularFieldTypeByFieldType(
              S.field_type
            )
          }, x = this.getBindingsByFormFieldType(S);
          let f = S.label;
          this.formSettings.requiredFieldsHasAsterisk && S.rules.find((h) => h.type === "required") && (f = f.concat("*"));
          const i = {
            type: S.field_type,
            extraType: S.field_extra_type,
            metadata: Object.freeze(S),
            label: f,
            readonly: this.formMetadataAndData.form.readonly ?? p.readonly ?? S.readonly ?? void 0,
            cssClass: S.css_class ?? void 0,
            staticSelectOptions: S.static_select_options,
            associationData: S.field_association_data,
            attachmentData: S.field_attachment_data,
            rules: S.rules,
            computedRules: [],
            // late init
            bindings: x,
            hidden: !1,
            beforeComponent: N ? X(N) : void 0,
            mainComponent: X(D),
            afterComponent: T ? X(T) : void 0,
            events: a.fields[S.field_name] ?? {},
            componentOptions: z
          };
          i.computedRules = Ta.computeServerRules(
            i,
            this.formApi
          ), _.push(i), t.add(S.field_name);
        });
        const k = this.dynamicComponentRecord[`section-${p.name ?? l}-before`], s = this.sectionComponent, A = this.dynamicComponentRecord[`section-${p.name ?? l}-after`], d = {
          label: p.label ?? void 0,
          icon: p.icon ?? void 0,
          cssClass: p.css_class ?? void 0,
          hidden: !1,
          name: p.name ?? l.toString(),
          bindings: g.deepDupeObject(this.formBind.sections),
          readonly: this.formMetadataAndData.form.readonly ?? p.readonly ?? void 0,
          events: a.sections[p.name ?? l.toString()] ?? {},
          beforeComponent: k ? X(k) : void 0,
          mainComponent: X(s),
          fieldsComponent: void 0,
          afterComponent: A ? X(A) : void 0,
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
            return g.deepDupeObject(this.formBind.fields.color);
          case "wysiwyg":
            return g.deepDupeObject(this.formBind.fields.wysiwyg);
          default:
            return g.deepDupeObject(this.formBind.fields.string);
        }
      case "text":
        return g.deepDupeObject(this.formBind.fields.string);
      case "number":
        return g.deepDupeObject(this.formBind.fields.number);
      case "date":
        return g.deepDupeObject(this.formBind.fields.date);
      case "datetime":
        return g.deepDupeObject(this.formBind.fields.datetime);
      case "select":
        return g.deepDupeObject(this.formBind.fields.select);
      case "selectBelongsTo":
        return g.deepDupeObject(this.formBind.fields.belongsTo);
      case "selectHasMany":
        return g.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasAndBelongsToMany":
        return g.deepDupeObject(this.formBind.fields.hasMany);
      case "selectHasOne":
        return g.deepDupeObject(this.formBind.fields.belongsTo);
      case "checkbox":
        return g.deepDupeObject(this.formBind.fields.checkbox);
      case "object":
        return {};
      case "attachmentHasOne":
        return g.deepDupeObject(this.formBind.fields.attachmentBelongsTo);
      case "attachmentHasMany":
        return g.deepDupeObject(this.formBind.fields.attachmentHasMany);
      default:
        return g.deepDupeObject(this.formBind.fields.string);
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
        return Tn;
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
    const p = ot(), l = {
      softReset: s,
      reset: A,
      clear: d,
      validate: D,
      isValid: T,
      isInvalid: z,
      hide: S,
      unhide: N,
      resetValidation: x,
      getFields: f,
      setReadonlyState: i,
      setCssClass: h,
      setIcon: F,
      setLabel: O,
      tryFocusFirst: se,
      tryUnfocus: te,
      section: t.section
    }, _ = B(/* @__PURE__ */ new Map());
    function k() {
      t.section.fields.forEach((v) => {
        const E = v.metadata.field_name, W = t.formApi.getFieldByName(E);
        W && _.value.set(E, W);
      });
    }
    function s() {
      _.value.forEach((v) => {
        v.softReset();
      });
    }
    function A() {
      _.value.forEach((v) => {
        v.reset();
      }), g.callAllEvents(t.section.events.onReset);
    }
    function d() {
      _.value.forEach((v) => {
        v.clear();
      }), g.callAllEvents(t.section.events.onClear);
    }
    function S() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((E) => {
        E.hide();
      }), v.hidden = !0, g.callAllEvents(t.section.events.onHide));
    }
    function N() {
      const v = t.privateFormApi.getSectionRef(
        t.section.name
      );
      v && (_.value.forEach((E) => {
        E.unhide();
      }), v.hidden = !1, g.callAllEvents(t.section.events.onUnhide));
    }
    function D() {
      let v = !0;
      return _.value.forEach((E) => {
        if (!E.validate()) {
          v = !1;
          return;
        }
      }), g.callAllEvents(t.section.events.onValidated), v;
    }
    function T() {
      let v = !0;
      return _.value.forEach((E) => {
        if (!E.isValid()) {
          v = !1;
          return;
        }
      }), v;
    }
    function z() {
      return !T();
    }
    function x() {
      _.value.forEach((v) => {
        v.resetValidation();
      });
    }
    function f() {
      return _.value;
    }
    function i(v) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.readonly = v);
    }
    function h(v) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.cssClass = v);
    }
    function F(v) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.icon = v);
    }
    function O(v) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.label = v);
    }
    function Y() {
      const v = {};
      for (const [E, W] of _.value)
        v[E] = W.getValueSerialized();
      return v;
    }
    function de() {
      const v = p.default;
      if (!v) {
        console.error("Submit64 : did not found fields slot for section " + t.section.name);
        return;
      }
      const E = H({
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
      t.privateFormApi.setSectionFieldComponent(t.section, X(E));
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
    const ie = G(() => T()), be = G(() => z()), ke = G(() => Y());
    return J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsValid;
      },
      (v) => {
        a == null || a(), a = null, v && (a = J(ie, (E) => {
          E && g.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var v;
        return (v = t.section) == null ? void 0 : v.events.onIsInvalid;
      },
      (v) => {
        n == null || n(), n = null, v && (n = J(be, (E) => {
          var W;
          E && g.callAllEvents((W = t.section) == null ? void 0 : W.events.onIsInvalid);
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
            var E;
            g.callAllEvents((E = t.section) == null ? void 0 : E.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(() => {
      var E;
      de();
      const v = (E = rt()) == null ? void 0 : E.exposed;
      v && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        v
      ), Fe(() => {
        var W;
        k(), g.callAllEvents((W = t.section) == null ? void 0 : W.events.onReady);
      });
    }), (v, E) => Ge((m(), q("div", wa, [
      t.section.beforeComponent ? (m(), R(le(t.section.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        sectionApi: l
      }, null, 8, ["formApi"])) : L("", !0),
      (m(), R(le(t.section.mainComponent), {
        sectionApi: l,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.afterComponent ? (m(), R(le(t.section.afterComponent), {
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
    }, p = () => {
    }, l = () => {
    }, _ = () => {
    }, k = () => {
    };
    const s = B(), A = B(!1), d = B([]);
    function S() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = D(s.value);
    }
    function N() {
      s.value = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), s.value = D(s.value), g.callAllEvents(t.field.events.onReset), p(), Fe(() => {
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
    function T(C) {
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
      l(), g.callAllEvents(t.field.events.onClear);
    }
    function x(C) {
      s.value = C;
    }
    function f() {
      return u(s);
    }
    function i() {
      return T(u(s));
    }
    function h(C) {
      d.value = C;
    }
    function F() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function O() {
      const C = F();
      C.hidden = !0, g.callAllEvents(t.field.events.onHide);
    }
    function Y() {
      const C = F();
      C.hidden = !1, g.callAllEvents(t.field.events.onUnhide);
    }
    function de(C) {
      const I = F();
      I.readonly = C;
    }
    function se(C) {
      const I = F();
      I.cssClass = C;
    }
    function te(C) {
      const I = F();
      I.label = C;
    }
    function ie() {
      const C = a();
      return g.callAllEvents(t.field.events.onValidated), C;
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
    function E() {
      A.value || (_(), A.value = !0);
    }
    function W() {
      A.value && (k(), A.value = !1);
    }
    function Se() {
      return A.value;
    }
    function De(C) {
      const I = F();
      I.bindings = g.deepMergeObject(
        I.bindings,
        C
      );
    }
    function Pe(C, I, fe, Ve, Ee, Re, Oe) {
      a = C, n = I, r = fe, Ve && (p = Ve), Ee && (l = Ee), Re && (_ = Re), Oe && (k = Oe);
    }
    const ye = {
      softReset: S,
      reset: N,
      clear: z,
      validate: ie,
      isValid: be,
      isInvalid: ke,
      hide: O,
      unhide: Y,
      resetValidation: v,
      getValueDeserialized: i,
      getValueSerialized: f,
      setupBackendErrors: h,
      setReadonlyState: de,
      setCssClass: se,
      setLabel: te,
      tryFocus: E,
      tryUnfocus: W,
      isFocus: Se,
      addBindings: De,
      setValue: x,
      field: t.field
    };
    return e(ye), J(
      () => t.field.events.onUpdate ? s.value : null,
      () => {
        g.callAllEvents(t.field.events.onUpdate);
      }
    ), J(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? s.value : null,
      (C) => {
        C ? g.callAllEvents(t.field.events.onIsValid) : g.callAllEvents(t.field.events.onIsInvalid);
      }
    ), K(() => {
      var I, fe;
      S();
      const C = (I = rt()) == null ? void 0 : I.exposed;
      C && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        C
      ), g.callAllEvents((fe = t.field) == null ? void 0 : fe.events.onReady);
    }), (C, I) => Ge((m(), q("div", null, [
      t.field.beforeComponent ? (m(), R(le(t.field.beforeComponent), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : L("", !0),
      (m(), R(le(t.field.mainComponent), {
        modelValue: s.value,
        field: t.field,
        formApi: t.formApi,
        reset: N,
        clear: z,
        getValueDeserialized: i,
        getValueSerialized: f,
        validate: ie,
        modelValueOnUpdate: x,
        registerBehaviourCallbacks: Pe
      }, null, 8, ["modelValue", "field", "formApi"])),
      t.field.afterComponent ? (m(), R(le(t.field.afterComponent), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ye
      }, null, 8, ["formApi"])) : L("", !0),
      d.value.length > 0 ? (m(), q("div", $a, [
        (m(!0), q(pe, null, ge(d.value, (fe, Ve) => (m(), q("div", {
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
    let a = null, n = "", r = 0, p = 0, l = null, _ = null, k = null, s = null;
    const A = ot(), d = B(Ce.getEmptyFormBeforeInit()), S = B(!1), N = B(!1), D = B(!1), T = B(!1), z = B("create"), x = B({}), f = B(/* @__PURE__ */ new Map()), i = B(/* @__PURE__ */ new Map());
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
        t.formStyle,
        t.context,
        _e,
        t.eventManager
      ), r = d.value.sections.length, p = d.value.sections.reduce((c, y) => (c += y.fields.length, c), 0), t.resourceId && (z.value = "edit");
    }
    async function F() {
      var $, re, Be;
      if (!se())
        return;
      g.callAllEvents(($ = d.value) == null ? void 0 : $.events.onSubmit), T.value = !0, W();
      const c = Y(), y = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: d.value.context
      });
      if (s = y.resource_data, y.success)
        x.value = {}, z.value === "create" && (z.value = "edit"), a && y.resource_data && (a.resource_data = y.resource_data), d.value = Ce.getForm(
          t.resourceName,
          t.resourceId,
          O(),
          {
            form: y.form,
            resource_data: y.resource_data
          },
          t.formSettings,
          t.formStyle,
          d.value.context,
          _e,
          t.eventManager
        ), be(), n = JSON.stringify(Y()), g.callAllEvents((Be = d.value) == null ? void 0 : Be.events.onSubmitSuccess);
      else {
        x.value = {};
        const Ne = [];
        for (const [me, At] of i.value) {
          const Xe = y.errors[me];
          Xe && (At.setupBackendErrors(Xe), Ne.push(me));
        }
        Object.entries(y.errors).forEach((me) => {
          Ne.includes(me[0]) || (x.value[me[0]] = me[1]);
        }), g.callAllEvents((re = d.value) == null ? void 0 : re.events.onSubmitUnsuccess);
      }
      T.value = !1;
    }
    function O() {
      const c = {
        sectionComponent: t.sectionComponent,
        actionComponent: t.actionComponent,
        orphanErrorsComponent: t.orphanErrorsComponent,
        associationDisplayComponent: t.associationDisplayComponent,
        dynamicComponentRecord: {}
      };
      for (const y in A) {
        const $ = A[y];
        if ($) {
          const re = H({
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
      }), g.callAllEvents((y = d.value) == null ? void 0 : y.events.onValidated), c;
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
    function be() {
      f.value.forEach((c) => {
        c.softReset();
      });
    }
    function ke() {
      var c;
      i.value.forEach((y) => {
        y.reset();
      }), g.callAllEvents((c = d.value) == null ? void 0 : c.events.onReset);
    }
    function v() {
      var c;
      i.value.forEach((y) => {
        y.clear();
      }), g.callAllEvents((c = d.value) == null ? void 0 : c.events.onClear);
    }
    function E() {
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
    function C(c) {
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
    function Oe(c) {
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
      return (y = d.value) == null ? void 0 : y.sections.find(($) => $.name === c);
    }
    function _t(c) {
      var y;
      return (y = d.value) == null ? void 0 : y.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === c);
    }
    function Ct(c, y) {
      f.value.set(c, y), r === f.value.size && (S.value = !0);
    }
    function Ft(c, y) {
      i.value.set(c, y), p === i.value.size && (N.value = !0);
    }
    function Vt(c, y) {
      c.fieldsComponent = y;
    }
    const Je = G(() => te()), kt = G(() => ie()), St = G(() => de()), Ke = {
      getFormRef: bt,
      getSectionRef: yt,
      getFieldRef: _t,
      registerSectionWrapperRef: Ct,
      registerFieldWrapperRef: Ft,
      setSectionFieldComponent: Vt
    }, Dt = new Proxy({}, {
      get(c, y) {
        var $;
        return ($ = d.value) == null ? void 0 : $[y];
      }
    }), _e = {
      getMode: Ee,
      getSectionByName: De,
      getSectionByIndex: Pe,
      getSections: ye,
      getFieldByName: C,
      getFields: I,
      validate: se,
      isValid: te,
      isInvalid: ie,
      softReset: be,
      reset: ke,
      clear: v,
      resetValidation: E,
      submit: F,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Se,
      getAssociationDataCallback: fe,
      setContext: Oe,
      setCssClass: mt,
      setReadonlyState: pt,
      isReady: gt,
      getSubmitData: vt,
      tryFocusFirst: We,
      tryUnfocus: ht,
      form: Dt,
      refs: {
        orphanErrors: Le(x),
        isLoadingSubmit: Le(T),
        isFormValid: Le(Je)
      }
    };
    return e(_e), J(
      () => S.value && N.value,
      (c) => {
        var y;
        c && !D.value && (g.callAllEvents((y = d.value) == null ? void 0 : y.events.onReady), D.value = !0);
      }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        l == null || l(), l = null, c && (l = J(Je, (y) => {
          var $;
          y && g.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsValid);
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
          y && g.callAllEvents(($ = d.value) == null ? void 0 : $.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), J(
      () => {
        var c;
        return (c = d.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        k == null || k(), k = null, c && (k = J(
          St,
          () => {
            var y;
            g.callAllEvents((y = d.value) == null ? void 0 : y.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      Ve(), await h(), Fe(() => {
        n = JSON.stringify(Y()), d.value.formSettings.autofocus && We();
      });
    }), (c, y) => Ge((m(), q("div", Ia, [
      Q("div", {
        class: at(d.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (m(!0), q(pe, null, ge(d.value.sections, ($) => (m(), R(Ua, {
          key: $.name,
          section: $,
          formApi: _e,
          privateFormApi: Ke
        }, {
          default: b(() => [
            (m(!0), q(pe, null, ge($.fields, (re) => (m(), R(qa, {
              key: re.metadata.field_name,
              field: re,
              formApi: _e,
              privateFormApi: Ke
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      (m(), R(le(d.value.orphanErrorsComponent), { formApi: _e })),
      (m(), R(le(d.value.actionComponent), { formApi: _e }))
    ], 512)), [
      [Qe, D.value]
    ]);
  }
});
export {
  qe as DynamicLogicBuilder,
  ee as Submit64,
  Ma as Submit64Form
};
