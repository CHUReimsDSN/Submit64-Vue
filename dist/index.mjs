var Tt = Object.defineProperty;
var Bt = (a, e, t) => e in a ? Tt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var z = (a, e, t) => Bt(a, typeof e != "symbol" ? e + "" : e, t);
import { date as ye, QBtn as Z, QUploaderAddTrigger as rt, QList as qe, QItem as xe, QItemSection as re, QItemLabel as oe, QSeparator as ot, QIcon as ue, QPopupProxy as Le, QColor as It, QDate as st, QTime as Ot, QInput as Be, QCheckbox as Rt, QSelect as We, QEditor as $t, IconSet as ze, Lang as Pe, QUploader as ut } from "quasar";
import { defineComponent as $, openBlock as o, createElementBlock as N, createElementVNode as W, toDisplayString as q, createBlock as C, unref as f, withCtx as S, createVNode as x, createCommentVNode as I, computed as ne, Fragment as X, renderList as M, createTextVNode as te, normalizeProps as P, mergeProps as R, guardReactiveProps as H, ref as B, resolveDynamicComponent as L, getCurrentInstance as Je, renderSlot as Ut, onMounted as J, nextTick as ke, createSlots as ee, watch as G, markRaw as Ne, useSlots as dt, withDirectives as Ke, vShow as Ze, readonly as _e, normalizeClass as at } from "vue";
function zt(a) {
  for (const e of a ?? [])
    e();
}
function Pt(a) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(a.toString(), 10) >= 1024 && t < e.length - 1; )
    a /= 1024, ++t;
  return `${a.toFixed(1)}${e[t]}`;
}
function ct(a, e, t = {
  deepClone: !0
}) {
  let n = a ?? {}, i = e ?? {};
  t.deepClone && (n = we(n), i = we(i));
  for (const l of Object.keys(i)) {
    const p = i[l], r = n[l];
    p && typeof p == "object" && !Array.isArray(p) && r && typeof r == "object" && !Array.isArray(r) ? n[l] = ct(
      r,
      p,
      t
    ) : p !== void 0 && (n[l] = p);
  }
  return n;
}
function we(a) {
  if (typeof a == "function" || a === null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map((t) => we(t));
  const e = {};
  for (const t of Object.keys(a))
    e[t] = we(a[t]);
  return e;
}
function qt(a, e) {
  const t = ye.extractDate(a, e);
  if (!Number.isNaN(t.getTime()))
    return t;
  const n = new Date(a);
  return Number.isNaN(n.getTime()) ? t : n;
}
const v = {
  callAllEvents: zt,
  humanStorageSize: Pt,
  deepMergeObject: ct,
  deepCloneObject: we,
  superExtractDate: qt
}, Y = {
  outlined: void 0,
  dense: void 0,
  filled: void 0,
  standout: void 0,
  borderless: void 0,
  rounded: void 0,
  square: void 0,
  color: "primary",
  hideBottomSpace: void 0
}, ge = {
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
}, Me = {
  cover: !0
};
function Lt() {
  return {
    ...ge
  };
}
function Mt() {
  return {
    ...ge
  };
}
function Ht() {
  return {
    input: {
      ...ge
    },
    icon: {
      name: "colorize",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...Me
    },
    color: {}
  };
}
function jt() {
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
function Qt() {
  return {
    color: Y.color
  };
}
function Yt() {
  return {
    input: {
      ...ge
    },
    icon: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...Me
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
function Gt() {
  return {
    input: {
      ...ge
    },
    iconDate: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...Me
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
      ...Me
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
function Wt() {
  return {
    select: {
      ...ge
    }
  };
}
function Jt() {
  return {
    select: {
      ...ge
    }
  };
}
function Kt() {
  return {
    select: {
      ...ge
    }
  };
}
function Zt() {
  return {
    uploader: {
      color: Y.color
    }
  };
}
function Xt() {
  return {
    uploader: {
      color: Y.color
    }
  };
}
function en() {
  return {};
}
function tn() {
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
function nn() {
  return {
    fields: {
      string: Lt(),
      number: Mt(),
      wysiwyg: jt(),
      color: Ht(),
      checkbox: Qt(),
      date: Yt(),
      datetime: Gt(),
      select: Kt(),
      hasMany: Jt(),
      belongsTo: Wt(),
      attachmentHasOne: Zt(),
      attachmentHasMany: Xt(),
      byName: {}
    },
    sections: {
      default: en(),
      byName: {}
    },
    form: {
      default: {},
      actions: tn()
    }
  };
}
function an() {
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
      attachmentHasOne: {},
      attachmentHasMany: {},
      select: {},
      checkbox: {},
      byName: {}
    },
    sections: {
      default: {},
      byName: {}
    },
    form: {
      default: {},
      actions: {}
    }
  };
}
const ft = {
  getDefaultFormBindings: nn,
  getEmptyDefaultBindings: an
}, ln = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, rn = { class: "col" }, on = { class: "q-uploader__title" }, sn = /* @__PURE__ */ $({
  __name: "HeaderUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", ln, [
      W("div", rn, [
        W("div", on, q(e.fieldApi.field.label), 1)
      ]),
      a.scope.canAddFiles ? (o(), C(f(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          x(f(rt))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), un = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, dn = { class: "col" }, cn = { class: "q-uploader__title" }, fn = /* @__PURE__ */ $({
  __name: "HeaderUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a, t = ne(() => {
      var n, i;
      return e.fieldApi.refs.modelValue.value ? (((n = e.fieldApi.field.attachmentData) == null ? void 0 : n.length) ?? 0) === 0 || (((i = e.fieldApi.field.attachmentData) == null ? void 0 : i.length) ?? !0) && e.fieldApi.refs.modelValue.value.delete.length === 1 : !0;
    });
    return (n, i) => (o(), N("div", un, [
      W("div", dn, [
        W("div", cn, q(e.fieldApi.field.label), 1)
      ]),
      a.scope.canAddFiles && t.value ? (o(), C(f(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          x(f(rt))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), mn = {
  key: 0,
  class: "flex column"
}, pn = { class: "text-weight-medium text-body2" }, gn = {
  key: 2,
  class: "flex column"
}, vn = { class: "text-weight-medium text-body2" }, hn = /* @__PURE__ */ $({
  __name: "ListUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    function t(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete.push(p.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = r.delete.filter((m) => m !== p.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    const i = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (p, r) => {
      var m;
      return o(), N(X, null, [
        i.value ? I("", !0) : (o(), N("div", mn, [
          W("div", pn, " Fichier" + q((((m = e.fieldApi.field.attachmentData) == null ? void 0 : m.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne ", 1),
          x(f(qe), { separator: "" }, {
            default: S(() => [
              (o(!0), N(X, null, M(e.fieldApi.field.attachmentData ?? [], (y) => (o(), C(f(xe), {
                key: y.attachment_id
              }, {
                default: S(() => [
                  x(f(re), null, {
                    default: S(() => [
                      x(f(oe), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          te(q(y.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(f(oe), { caption: "" }, {
                        default: S(() => [
                          te(q(f(v).humanStorageSize(y.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  e.fieldApi.refs.modelValue.value ? (o(), C(f(re), {
                    key: 0,
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      l.value.includes(y.attachment_id) ? I("", !0) : (o(), C(f(Z), {
                        key: 0,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (u) => t(y)
                      }, null, 8, ["disable", "onClick"])),
                      l.value.includes(y.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), C(f(Z), {
                        key: 1,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "refresh",
                        onClick: (u) => n(y)
                      }, null, 8, ["disable", "onClick"])) : I("", !0)
                    ]),
                    _: 2
                  }, 1024)) : I("", !0)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])),
        !i.value && a.scope.files.length > 0 ? (o(), C(f(ot), { key: 1 })) : I("", !0),
        a.scope.files.length > 0 ? (o(), N("div", gn, [
          W("div", vn, " Fichier" + q(a.scope.files.length > 0 ? "s" : "") + " à ajouter ", 1),
          x(f(qe), { separator: "" }, {
            default: S(() => [
              (o(!0), N(X, null, M(a.scope.files, (y) => (o(), C(f(xe), {
                key: y.__key
              }, {
                default: S(() => [
                  x(f(re), null, {
                    default: S(() => [
                      x(f(oe), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          te(q(y.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(f(oe), { caption: "" }, {
                        default: S(() => [
                          te(q(y.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  x(f(re), {
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      x(f(Z), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (u) => a.scope.removeFile(y)
                      }, null, 8, ["disable", "onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])) : I("", !0)
      ], 64);
    };
  }
}), bn = {
  key: 0,
  class: "flex column"
}, yn = {
  key: 2,
  class: "flex column"
}, _n = /* @__PURE__ */ $({
  __name: "ListUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    function t(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = [p.attachment_id], e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n() {
      let p = e.fieldApi.refs.modelValue.value;
      p.delete = [], e.fieldApi.setValue(p), e.fieldApi.validate();
    }
    const i = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (p, r) => (o(), N(X, null, [
      i.value ? I("", !0) : (o(), N("div", bn, [
        r[0] || (r[0] = W("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
        x(f(qe), { separator: "" }, {
          default: S(() => [
            (o(!0), N(X, null, M(e.fieldApi.field.attachmentData ?? [], (m) => (o(), C(f(xe), {
              key: m.attachment_id
            }, {
              default: S(() => [
                x(f(re), null, {
                  default: S(() => [
                    x(f(oe), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        te(q(m.filename), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(f(oe), { caption: "" }, {
                      default: S(() => [
                        te(q(f(v).humanStorageSize(m.size)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                e.fieldApi.refs.modelValue.value ? (o(), C(f(re), {
                  key: 0,
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    l.value.includes(m.attachment_id) ? I("", !0) : (o(), C(f(Z), {
                      key: 0,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => t(m)
                    }, null, 8, ["disable", "onClick"])),
                    l.value.includes(m.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), C(f(Z), {
                      key: 1,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "refresh",
                      onClick: n
                    }, null, 8, ["disable"])) : I("", !0)
                  ]),
                  _: 2
                }, 1024)) : I("", !0)
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        })
      ])),
      !i.value && a.scope.files.length > 0 ? (o(), C(f(ot), { key: 1 })) : I("", !0),
      a.scope.files.length > 0 ? (o(), N("div", yn, [
        r[1] || (r[1] = W("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
        x(f(qe), { separator: "" }, {
          default: S(() => [
            (o(!0), N(X, null, M(a.scope.files, (m) => (o(), C(f(xe), {
              key: m.__key
            }, {
              default: S(() => [
                x(f(re), null, {
                  default: S(() => [
                    x(f(oe), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        te(q(m.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(f(oe), { caption: "" }, {
                      default: S(() => [
                        te(q(m.__sizeLabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                x(f(re), {
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    x(f(Z), {
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => a.scope.removeFile(m)
                    }, null, 8, ["disable", "onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        })
      ])) : I("", !0)
    ], 64));
  }
}), An = /* @__PURE__ */ $({
  __name: "ColorPicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => e.fieldApi.field.readonly ? (o(), C(f(ue), P(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), C(f(ue), P(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(f(Le), P(H(e.fieldApi.field.bindings.popupProxy)), {
          default: S(() => [
            x(f(It), R(e.fieldApi.field.bindings.color, {
              "model-value": e.fieldApi.refs.modelValue.value,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), null, 16, ["model-value", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16));
  }
}), kn = { class: "row items-center justify-end" }, Fn = /* @__PURE__ */ $({
  __name: "IconDatePicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      t.value && t.value.hide();
    }
    return (i, l) => e.fieldApi.field.readonly ? (o(), C(f(ue), P(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), C(f(ue), P(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(f(Le), R({ ref: "popupProxyRef" }, e.fieldApi.field.bindings.popupProxy), {
          default: S(() => [
            x(f(st), R(e.fieldApi.field.bindings.date, {
              "model-value": e.fieldApi.refs.modelValue.value,
              mask: e.formApi.form.formSettings.dateFormat,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), {
              default: S(() => [
                W("div", kn, [
                  x(f(Z), R(e.fieldApi.field.bindings.btn, { onClick: n }), null, 16)
                ])
              ]),
              _: 1
            }, 16, ["model-value", "mask", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16));
  }
});
class Te {
  static log(e) {
    console.warn(`Submit64 -> ${e}`);
  }
}
const Vn = { class: "row items-center justify-end" }, Sn = { class: "row items-center justify-end" }, Cn = /* @__PURE__ */ $({
  __name: "IconDatetimePicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a, t = B(), n = B();
    function i() {
      t.value && t.value.hide();
    }
    function l() {
      n.value && n.value.hide();
    }
    function p() {
      if (e.formApi.form.formSettings.enableQuasarBigBangComponents) {
        const r = Je(), m = r == null ? void 0 : r.appContext.components["qbb-time"];
        if (m)
          return m;
        Te.log("Component QBBTime from Quasar BigBang not found");
      }
      return Ot;
    }
    return (r, m) => e.fieldApi.field.readonly ? (o(), N(X, { key: 1 }, [
      x(f(ue), P(H(e.fieldApi.field.bindings.iconDate)), null, 16),
      x(f(ue), P(H(e.fieldApi.field.bindings.iconDatetime)), null, 16)
    ], 64)) : (o(), N(X, { key: 0 }, [
      x(f(ue), P(H(e.fieldApi.field.bindings.iconDate)), {
        default: S(() => [
          x(f(Le), R({
            ref_key: "datePopupProxyRef",
            ref: t
          }, e.fieldApi.field.bindings.popupProxyDate), {
            default: S(() => [
              x(f(st), R(e.fieldApi.field.bindings.date, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  W("div", Vn, [
                    x(f(Z), R(e.fieldApi.field.bindings.btnDate, { onClick: i }), null, 16)
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
      x(f(ue), P(H(e.fieldApi.field.bindings.iconDatetime)), {
        default: S(() => [
          x(f(Le), R({
            ref_key: "timePopupProxyRef",
            ref: n
          }, e.fieldApi.field.bindings.popupProxyDatetime), {
            default: S(() => [
              (o(), C(L(p()), R(e.fieldApi.field.bindings.datetime, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  W("div", Sn, [
                    x(f(Z), R(e.fieldApi.field.bindings.btnDatetime, { onClick: l }), null, 16)
                  ])
                ]),
                _: 1
              }, 16, ["model-value", "mask", "onUpdate:modelValue"]))
            ]),
            _: 1
          }, 16)
        ]),
        _: 1
      }, 16)
    ], 64));
  }
}), Qe = /* @__PURE__ */ $({
  __name: "AssociationDisplayComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), C(f(xe), P(H(e.defaultProps.itemProps)), {
      default: S(() => [
        x(f(re), null, {
          default: S(() => [
            x(f(oe), null, {
              default: S(() => [
                te(q(e.defaultProps.opt.label), 1)
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
}), Ye = /* @__PURE__ */ $({
  __name: "NoOptionComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), C(f(xe), P(H(e.fieldApi.field.bindings.itemNoOption)), {
      default: S(() => [
        x(f(re), null, {
          default: S(() => [
            x(f(oe), null, {
              default: S(() => [
                te(q(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), xn = { class: "flex column" }, Dn = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, En = /* @__PURE__ */ $({
  __name: "ActionComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", xn, [
      W("div", Dn, [
        x(f(Z), R(e.formApi.form.bindings.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (o(), C(f(Z), R({ key: 0 }, e.formApi.form.bindings.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.form.formSettings.showClearButton ? (o(), C(f(Z), R({ key: 1 }, e.formApi.form.bindings.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), Nn = { class: "flex column" }, wn = /* @__PURE__ */ $({
  __name: "OrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", Nn, [
      (o(!0), N(X, null, M(e.formApi.refs.orphanErrors.value, (i, l) => (o(), N("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, q(l) + " : " + q(i.join(",")), 1))), 128))
    ]));
  }
}), Tn = { class: "propsComponent.sectionApi.section.bindings.class" }, Bn = { class: "flex row items-center" }, In = { class: "text-body1 text-weight-medium" }, On = { class: "flex column q-gutter-md" }, Rn = /* @__PURE__ */ $({
  __name: "SectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", Tn, [
      W("div", Bn, [
        e.sectionApi.section.icon ? (o(), C(f(ue), R({ key: 0 }, e.sectionApi.section.bindings.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : I("", !0),
        W("div", In, q(e.sectionApi.section.label), 1)
      ]),
      W("div", On, [
        (o(), C(L(e.sectionApi.section.fieldsComponent)))
      ])
    ]));
  }
});
function $n() {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {
        append: An
      },
      checkbox: {},
      date: {
        append: Fn
      },
      datetime: {
        append: Cn
      },
      select: {
        "no-option": Ye,
        option: Qe
      },
      hasMany: {
        "no-option": Ye,
        option: Qe
      },
      belongsTo: {
        "no-option": Ye,
        option: Qe
      },
      attachmentHasOne: {
        header: fn,
        list: _n
      },
      attachmentHasMany: {
        header: sn,
        list: hn
      },
      byName: {}
    },
    sections: {
      default: Rn,
      byName: {}
    },
    form: {
      actions: En,
      orphanErrors: wn
    }
  };
}
function Un() {
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
      attachmentHasOne: {},
      attachmentHasMany: {},
      select: {},
      checkbox: {},
      byName: {}
    },
    sections: {
      default: {},
      byName: {}
    },
    form: {
      actions: {}
    }
  };
}
const mt = {
  getDefaultFormSlots: $n,
  getEmptyDefaultSlots: Un
}, je = class je {
  constructor() {
    z(this, "_formSettings");
    z(this, "_formBindings");
    z(this, "_formSlots");
    this._formSettings = {
      backendDateFormat: "YYYY-MM-DD",
      backendDatetimeFormat: "YYYY-MM-DDTHH:mm:ss.SSSZ",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      associationEmptyMessage: "Vide",
      // TODO i18n like system with big object for all translation
      renderBackendHint: !0,
      requiredFieldsHasAsterisk: !0,
      showResetButton: !0,
      showClearButton: !0,
      autofocus: !0,
      displayLabelInsideInput: !0,
      enableQuasarBigBangComponents: !1
    }, this._formBindings = ft.getDefaultFormBindings(), this._formSlots = mt.getDefaultFormSlots();
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = v.deepMergeObject(
      this._instance._formSettings,
      e
    );
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBindings = v.deepMergeObject(
      this._instance._formBindings,
      e
    );
  }
  static registerGlobalFormSlots(e) {
    this._instance._formSlots = v.deepMergeObject(
      this._instance._formSlots,
      e
    );
  }
  static getGlobalFormSetting() {
    return this._instance._formSettings;
  }
  static getGlobalFormBind() {
    return this._instance._formBindings;
  }
  static getBlobalFormSlot() {
    return this._instance._formSlots;
  }
};
z(je, "_instance", new je());
let Ce = je;
class He {
  constructor(e) {
    z(this, "formApi");
    z(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const n = e, i = t, l = new zn(n, i, this.formApi);
    return this.events.push(l), new Pn(l);
  }
  static create(e) {
    return new He(e);
  }
  static getEventsObjectFromInstance(e) {
    const t = {
      fields: {},
      sections: {},
      form: {}
    };
    return e.events.forEach((n) => {
      const i = n.getTarget();
      switch (i.target) {
        case "field":
          t.fields[i.targetName] || (t.fields[i.targetName] = {}), t.fields[i.targetName][i.key] || (t.fields[i.targetName][i.key] = []), t.fields[i.targetName][i.key].push(n.getActionCallback());
          break;
        case "section":
          t.sections[i.targetName] || (t.sections[i.targetName] = {}), t.sections[i.targetName][i.key] || (t.sections[i.targetName][i.key] = []), t.sections[i.targetName][i.key].push(n.getActionCallback());
          break;
        case "form":
          t.form[i.key] || (t.form[i.key] = []), t.form[i.key].push(
            n.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class zn {
  constructor(e, t, n) {
    z(this, "type");
    z(this, "data");
    z(this, "formApi");
    z(this, "action", () => {
    });
    z(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = n;
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
        return Te.log(`Submit64 -> unhandled event target : ${this.type}`), {
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
class Pn {
  constructor(e) {
    z(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
  do(e) {
    return this.formEvent.action = e, this;
  }
}
const qn = { style: { "font-weight": "500", padding: "4px 0" } }, de = /* @__PURE__ */ $({
  __name: "FieldLabel",
  props: {
    name: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", qn, [
      Ut(t.$slots, "default", {}, () => [
        te(q(e.name), 1)
      ])
    ]));
  }
}), Ln = { class: "flex column" }, Mn = /* @__PURE__ */ $({
  __name: "DateField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function i() {
      return t.value ? !t.value.hasError : !1;
    }
    function l() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        p,
        r
      ), ke(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, y) => (o(), N("div", Ln, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Be), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(L(u), P(H({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Hn = { class: "flex column" }, jn = /* @__PURE__ */ $({
  __name: "DateTimeField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function i() {
      return t.value ? !t.value.hasError : !1;
    }
    function l() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        p,
        r
      ), ke(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, y) => (o(), N("div", Hn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Be), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(L(u), P(H({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Qn = { class: "flex column" }, Yn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Gn = /* @__PURE__ */ $({
  __name: "CheckboxField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B(!0);
    function n() {
      for (const p of e.fieldApi.field.computedRules)
        if (t.value = p(e.modelValue), t.value !== !0)
          break;
      return i();
    }
    function i() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return G(
      () => e.modelValue,
      () => {
        e.fieldApi.validate();
      }
    ), J(() => {
      e.registerBehaviourCallbacks(n, i, l);
    }), (p, r) => (o(), N("div", Qn, [
      x(f(Rt), R({ ref: "checkboxRef" }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        label: e.fieldApi.field.label,
        "aria-readonly": e.fieldApi.field.readonly,
        class: "q-pb-md",
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (m, y) => ({
          name: y,
          fn: S((u) => [
            (o(), C(L(m), P(H({
              defaultProps: u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "aria-readonly", "onUpdate:modelValue"]),
      t.value !== !0 ? (o(), N("div", Yn, q(t.value), 1)) : I("", !0)
    ]));
  }
}), Wn = { class: "flex column" }, Jn = /* @__PURE__ */ $({
  __name: "SelectField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B([]), n = B([]), i = B();
    function l(D, d) {
      if (D === "") {
        d(() => {
          n.value = [...t.value];
        });
        return;
      }
      d(() => {
        const h = D.toLowerCase();
        n.value = t.value.filter((g) => g.label.toLowerCase().includes(h));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.fieldApi.field.staticSelectOptions ?? []
      ), n.value = e.fieldApi.field.staticSelectOptions ?? [];
    }
    function r() {
      return i.value ? i.value.validate() : !1;
    }
    function m() {
      return i.value ? !i.value.hasError : !1;
    }
    function y() {
      i.value && i.value.resetValidation();
    }
    function u() {
      n.value = [];
    }
    function A() {
      i.value && i.value.focus();
    }
    function s() {
      i.value && i.value.blur();
    }
    return J(() => {
      p(), e.registerBehaviourCallbacks(
        r,
        m,
        y,
        void 0,
        u,
        A,
        s
      );
    }), (D, d) => (o(), N("div", Wn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(We), R({
        ref_key: "fieldRef",
        ref: i
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        options: n.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        onClear: e.clear,
        onFilter: l,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (h, g) => ({
          name: g,
          fn: S((k) => [
            (o(), C(L(h), P(H({
              defaultProps: k ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Kn = { class: "flex column" }, it = "__init", Zn = /* @__PURE__ */ $({
  __name: "SelectBelongsToField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B([]), n = B(
      p()
    ), i = B(), l = B(it);
    function p() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function r(g, k) {
      if (g === l.value) {
        k(() => {
        });
        return;
      }
      const E = e.formApi.getAssociationDataCallback();
      n.value = p(), l.value = g;
      const T = e.formApi.form;
      n.value.isLoading = !0, E({
        resourceName: T.resourceName,
        resourceId: T.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: g,
        context: T.context
      }).then((V) => {
        k(() => {
          t.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = p();
      });
    }
    function m() {
      var k, E;
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = [
        {
          label: ((k = e.fieldApi.field.associationData[0]) == null ? void 0 : k.label) ?? "???",
          value: g,
          data: (E = e.fieldApi.field.associationData[0]) == null ? void 0 : E.data
        }
      ]);
    }
    function y() {
      return i.value ? i.value.validate() : !1;
    }
    function u() {
      return i.value ? !i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    function s() {
      n.value = p(), t.value = [], l.value = it;
    }
    function D(g) {
      const k = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === k && k !== -1) {
        const E = e.formApi.form, T = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, T({
          resourceName: E.resourceName,
          resourceId: E.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: l.value,
          context: E.context
        }).then((V) => {
          t.value = t.value.concat(
            V.rows
          ), n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), V.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      i.value && i.value.focus();
    }
    function h() {
      i.value && i.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        A,
        m,
        s,
        d,
        h
      ), ke(() => {
        m();
      });
    }), (g, k) => (o(), N("div", Kn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(We), R({
        ref_key: "fieldRef",
        ref: i
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        options: t.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        onClear: e.clear,
        onFilter: r,
        onVirtualScroll: D,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((V) => [
            (o(), C(L(E), P(H({
              defaultProps: V ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Xn = { class: "flex column" }, lt = "__init", ea = /* @__PURE__ */ $({
  __name: "SelectHasManyField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B([]), n = B(
      p()
    ), i = B(), l = B(lt);
    function p() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function r(g, k) {
      if (g === l.value) {
        k(() => {
        });
        return;
      }
      const E = e.formApi.getAssociationDataCallback();
      n.value = p(), l.value = g;
      const T = e.formApi.form;
      n.value.isLoading = !0, E({
        resourceName: T.resourceName,
        resourceId: T.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: g,
        context: T.context
      }).then((V) => {
        k(() => {
          t.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = p();
      });
    }
    function m() {
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = g.map((k, E) => ({
        label: e.fieldApi.field.associationData[E].label ?? "???",
        value: k,
        data: e.fieldApi.field.associationData[E].data
      })));
    }
    function y() {
      return i.value ? i.value.validate() : !1;
    }
    function u() {
      return i.value ? !i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    function s() {
      n.value = p(), t.value = [], l.value = lt;
    }
    function D(g) {
      const k = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === k && k !== -1) {
        const E = e.formApi.form, T = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, T({
          resourceName: E.resourceName,
          resourceId: E.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: l.value,
          context: E.context
        }).then((V) => {
          t.value = t.value.concat(
            V.rows
          ), n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), V.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      i.value && i.value.focus();
    }
    function h() {
      i.value && i.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        A,
        m,
        s,
        d,
        h
      ), ke(() => {
        m();
      });
    }), (g, k) => (o(), N("div", Xn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(We), R({
        ref_key: "fieldRef",
        ref: i
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        options: t.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        multiple: !0,
        "use-chips": !0,
        "onUpdate:modelValue": e.modelValueOnUpdate,
        onClear: e.clear,
        onFilter: r,
        onVirtualScroll: D
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((V) => [
            (o(), C(L(E), P(H({
              defaultProps: V ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"])
    ]));
  }
}), ta = { class: "flex column" }, na = /* @__PURE__ */ $({
  __name: "StringField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function i() {
      return t.value ? !t.value.hasError : !1;
    }
    function l() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (o(), N("div", ta, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Be), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        "model-value": e.modelValue,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(L(u), P(H({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["rules", "label", "readonly", "model-value", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), aa = { class: "flex column" }, ia = /* @__PURE__ */ $({
  __name: "NumberField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function i() {
      return t.value ? !t.value.hasError : !1;
    }
    function l() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (o(), N("div", aa, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Be), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        type: "number",
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(L(u), P(H({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "rules", "label", "readonly", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), la = { class: "flex column" }, ra = /* @__PURE__ */ $({
  __name: "WysiwygField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return !!t.value;
    }
    function i() {
      return !!t.value;
    }
    function l() {
    }
    function p(s) {
      var d;
      s.preventDefault(), s.stopPropagation();
      const D = (d = s.clipboardData) == null ? void 0 : d.items;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          if (g.type.startsWith("image/")) {
            const k = g.getAsFile();
            k && m(k);
          }
        }
    }
    function r(s) {
      var d;
      s.preventDefault(), s.stopPropagation();
      const D = (d = s.dataTransfer) == null ? void 0 : d.files;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          g.type.startsWith("image/") && g && m(g);
        }
    }
    function m(s) {
      if (!t.value)
        return;
      const D = new FileReader();
      D.onload = (d) => {
        var g;
        const h = (g = d.target) == null ? void 0 : g.result;
        if (typeof h == "string") {
          const k = new Image();
          k.onload = () => {
            var V;
            const E = k.width, T = k.height;
            (V = t.value) == null || V.runCmd(
              "insertHTML",
              `<img src="${h}" width="${E}" height="${T}" style="max-width: 80%; height: auto;" />`
            );
          }, k.src = h;
        }
      }, D.readAsDataURL(s);
    }
    function y() {
      t.value && t.value.focus();
    }
    function u() {
      t.value && t.value.getContentEl().blur();
    }
    function A() {
      return [
        [
          {
            label: Pe.props.editor.align,
            icon: ze.props.editor.align,
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
            label: Pe.props.editor.formatting,
            icon: ze.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: Pe.props.editor.fontSize,
            icon: ze.props.editor.fontSize,
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
            label: Pe.props.editor.defaultFont,
            icon: ze.props.editor.font,
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
        n,
        i,
        l,
        void 0,
        void 0,
        y,
        u
      );
    }), (s, D) => (o(), N("div", la, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f($t), R({
        ref_key: "fieldRef",
        ref: t,
        toolbar: A()
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        onDrop: r,
        onPaste: p,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (d, h) => ({
          name: h,
          fn: S((g) => [
            (o(), C(L(d), P(H({
              defaultProps: g ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["toolbar", "model-value", "onUpdate:modelValue"])
    ]));
  }
}), oa = { class: "flex column" }, sa = /* @__PURE__ */ $({
  __name: "ColorField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function i() {
      return t.value ? !t.value.hasError : !1;
    }
    function l() {
      t.value && t.value.resetValidation();
    }
    function p() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (o(), N("div", oa, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(de, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Be), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(L(u), P(H({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ua = { class: "flex column" }, da = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, ca = /* @__PURE__ */ $({
  __name: "AttachmentHasOneField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B(null), n = B(!1);
    function i() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d), D();
    }
    function l() {
      var h;
      let d = e.modelValue;
      d.add = [], d.delete = ((h = e.fieldApi.field.attachmentData) == null ? void 0 : h.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(d), D();
    }
    function p() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), k = new FileReader();
        k.onload = (E) => {
          var Q;
          const T = ((Q = E.target) == null ? void 0 : Q.result) ?? "", [V, K] = T.split(",");
          h(K);
        }, k.readAsDataURL(g);
      });
    }
    async function u(d) {
      return {
        key: `${d.lastModified}${d.name}`,
        size: d.size,
        filename: d.name,
        contentType: d.type,
        base64: await y(await d.arrayBuffer())
      };
    }
    async function A(d) {
      if (!d[0])
        return;
      n.value = !0;
      const h = await u(d[0]);
      let g = e.modelValue;
      g.add = [h], n.value = !1, e.modelValueOnUpdate(g), D();
    }
    function s(d) {
      if (!d[0])
        return;
      let h = e.modelValue;
      h.add = [], h.delete = [], e.modelValueOnUpdate(h), D();
    }
    function D() {
      t.value = null;
      for (const d of e.fieldApi.field.computedRules) {
        const h = d(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        p,
        r,
        m,
        i,
        l
      );
    }), (d, h) => (o(), N("div", ua, [
      x(f(ut), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: s,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (g, k) => ({
          name: k,
          fn: S((E) => [
            (o(), C(L(g), P(H({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", da, q(t.value), 1)) : I("", !0)
    ]));
  }
}), fa = { class: "flex column" }, ma = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, pa = /* @__PURE__ */ $({
  __name: "AttachmentHasManyField",
  props: {
    modelValue: {},
    fieldApi: {},
    formApi: {},
    modelValueOnUpdate: { type: Function },
    reset: { type: Function },
    clear: { type: Function },
    getValueSerialized: { type: Function },
    getValueDeserialized: { type: Function },
    registerBehaviourCallbacks: { type: Function }
  },
  setup(a) {
    const e = a, t = B(null), n = B(!1);
    function i() {
      let d = e.modelValue;
      d.add = [], d.delete = [], e.modelValueOnUpdate(d), D();
    }
    function l() {
      var h;
      let d = e.modelValue;
      d.add = [], d.delete = ((h = e.fieldApi.field.attachmentData) == null ? void 0 : h.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(d), D();
    }
    function p() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), k = new FileReader();
        k.onload = (E) => {
          var Q;
          const T = ((Q = E.target) == null ? void 0 : Q.result) ?? "", [V, K] = T.split(",");
          h(K);
        }, k.readAsDataURL(g);
      });
    }
    async function u(d) {
      return {
        key: `${d.lastModified}${d.name}`,
        size: d.size,
        filename: d.name,
        contentType: d.type,
        base64: await y(await d.arrayBuffer())
      };
    }
    async function A(d) {
      n.value = !0;
      for (const h of d) {
        const g = await u(h);
        let k = e.modelValue;
        k.add.push(g), e.modelValueOnUpdate(k);
      }
      n.value = !1, D();
    }
    async function s(d) {
      n.value = !0;
      for (const h of d) {
        const g = await u(h);
        let k = e.modelValue;
        k.add = k.add.filter((E) => E.key !== g.key), e.modelValueOnUpdate(k);
      }
      n.value = !1, D();
    }
    function D() {
      t.value = null;
      for (const d of e.fieldApi.field.computedRules) {
        const h = d(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        p,
        r,
        m,
        i,
        l
      );
    }), (d, h) => (o(), N("div", fa, [
      x(f(ut), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: s,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        M(e.fieldApi.field.slots, (g, k) => ({
          name: k,
          fn: S((E) => [
            (o(), C(L(g), P(H({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", ma, q(t.value), 1)) : I("", !0)
    ]));
  }
});
function ga(a, e) {
  const t = a.rules ?? [], n = a.type, i = e.form, l = (y, u, A) => y[u] ? A ? () => p(y[u]) : () => y[u] : y.compare_to ? () => {
    var s;
    return ((s = e.getFieldByName(y.compare_to)) == null ? void 0 : s.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", p = (y) => String(
    ye.formatDate(
      v.superExtractDate(y, i.formSettings.backendDateFormat),
      i.formSettings.dateFormat
    )
  ), r = [], m = [];
  switch (n) {
    case "date":
      r.push(Ge(i.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(Ge(i.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((y) => {
    const u = y;
    switch (u.type) {
      case "required":
        r.push(va());
        break;
      case "absence":
        r.push(ba());
        break;
      case "acceptance":
        r.push(ya());
        break;
      case "inclusion":
        r.push(pt(u.including));
        break;
      case "exclusion":
        r.push(ha(u.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        m.push("allowNull");
        break;
      case "allowBlank":
        m.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(ka());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Fa(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Va(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          Sa(
            l(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          Ca(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          xa(l(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Da(
            l(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Ea());
        break;
      case "numberNumericOnly":
        r.push(Na());
        break;
      case "numberEvenOnly":
        r.push(wa());
        break;
      case "numberOddOnly":
        r.push(Ta());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ba(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Ia(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Oa(
            l(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Ra(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          za(
            l(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Ua(l(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          $a(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Pa(
            l(u, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(Ge(i.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          qa(
            l(u, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          La(
            l(u, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Ma(
            l(u, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Ha(
            l(u, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          ja(
            l(u, "equal_to", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Qa(
            l(u, "other_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          Ga()
        );
        break;
      case "allowFileContentType":
        r.push(
          Wa(
            l(u, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          Ja(
            l(u, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          Za(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          Ka(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          Xa(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ei(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          ti(
            l(u, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          ni(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ai(
            l(u, "equal_to")
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((y) => {
    switch (y) {
      case "allowBlank":
        return Aa(r);
      case "allowNull":
        return _a(r);
    }
  }) : r;
}
function va() {
  return (a) => !!a || "Ce champ est requis";
}
function pt(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function ha(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${pt.toString()}`
  );
}
function ba() {
  return (a) => !a || "Ce champ doit être vide";
}
function ya() {
  return (a) => !!a || "Doit être accepté";
}
function _a(a) {
  return (e) => (e === null || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Aa(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function ka() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function Fa(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Va(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Sa(a) {
  return (e) => {
    const t = a();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ca(a) {
  return (e) => {
    const t = a();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function xa(a, e) {
  return (t) => {
    const n = a();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Da(a, e) {
  return (t) => {
    const n = a();
    return Number(t) !== n || `Doit être différent de ${a}`;
  };
}
function Ea() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function Na() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function wa() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function Ta() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function Ba(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Ia(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Oa(a) {
  return (e) => {
    const t = a();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ra(a) {
  return (e) => {
    const t = a();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function $a(a, e) {
  return (t) => {
    const n = a(), i = e();
    return String(t).length >= n && String(t).length <= i || `Entre ${n} et ${i}`;
  };
}
function Ua(a, e) {
  return (t) => {
    const n = a();
    return String(t) === n || `Égale à ${n}`;
  };
}
function za(a) {
  return (e) => {
    const t = a();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Pa(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function qa(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i <= l || `Inf. ou égal à ${n}`;
  };
}
function La(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i < l || `Inf. à ${n}`;
  };
}
function Ma(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i >= l || `Sup. ou égal à ${n}`;
  };
}
function Ha(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i > l || `Sup. à ${n}`;
  };
}
function ja(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i === l || `Égale à ${i}`;
  };
}
function Qa(a, e) {
  return (t) => {
    const n = a();
    return v.superExtractDate(String(t), e) !== v.superExtractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function Ge(a) {
  return (e) => e == null || e === "" ? !0 : Ya(e, a) || `Date invalide. Format : ${a}`;
}
function Ya(a, e) {
  if (typeof a != "string" || !a.trim())
    return !1;
  const t = v.superExtractDate(a, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : ye.formatDate(t, e) === a;
}
function Ga() {
  return (a) => a.add.length > 0 || "Ce champ est requis";
}
function Wa(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    t.add.forEach((p) => {
      i && (n.includes(p.contentType) || (i = !1));
    });
    const l = a.length > 1;
    return i || `Type${l ? "s" : ""} autorisé${l ? "s" : ""} : ${n.join(",")}`;
  };
}
function Ja(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && n !== l.size && (i = !1);
    }), i || `Taille par fichier ${v.humanStorageSize(n)}`;
  };
}
function Ka(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size < n && (i = !1);
    }), i || `Taille par fichier min. ${v.humanStorageSize(n)}`;
  };
}
function Za(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size > n && (i = !1);
    }), i || `Taille par fichier max. ${v.humanStorageSize(n)}`;
  };
}
function Xa(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length <= n || `${n} fichier${n > 1 ? "s" : ""} max.`;
  };
}
function ei(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length >= n || `${n} fichier${n > 1 ? "s" : ""} min.`;
  };
}
function ti(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, p) => (l += p.size, l), 0) <= n || `${v.humanStorageSize(n)} max.`;
  };
}
function ni(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, p) => (l += p.size, l), 0) >= n || `${v.humanStorageSize(n)} min.`;
  };
}
function ai(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, p) => (l += p.size, l), 0) === n || `Taille totale ${v.humanStorageSize(n)}`;
  };
}
const ii = {
  computeServerRules: ga
};
class Ae {
  constructor(e, t, n, i, l, p, r, m, y, u, A, s) {
    z(this, "resourceName");
    z(this, "resourceId");
    z(this, "formMetadataAndData");
    z(this, "context");
    z(this, "formSettings");
    z(this, "formBind");
    z(this, "formSlots");
    z(this, "templateSlots");
    z(this, "formApi");
    z(this, "registerEventCallback");
    this.formMetadataAndData = n, this.resourceId = t, this.context = m, this.resourceName = e, this.formApi = y, this.formSettings = v.deepMergeObject(
      Ce.getGlobalFormSetting(),
      i ?? {}
    ), this.formBind = v.deepMergeObject(
      v.deepMergeObject(Ce.getGlobalFormBind(), l ?? {}),
      {
        form: {
          default: {
            class: A,
            sectionContainerClass: s
          }
        }
      }
    ), this.formSlots = v.deepMergeObject(
      Ce.getBlobalFormSlot(),
      p ?? {}
    ), this.templateSlots = r, this.registerEventCallback = u ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: Ce.getGlobalFormSetting(),
      events: {},
      bindings: ft.getEmptyDefaultBindings().form,
      slots: mt.getEmptyDefaultSlots()
    };
  }
  static getForm(e, t, n, i, l, p, r, m, y, u, A, s) {
    return new Ae(
      e,
      t,
      n,
      i,
      l,
      p,
      r,
      m,
      y,
      u,
      A,
      s
    ).generateFormDef();
  }
  generateFormDef() {
    const e = /* @__PURE__ */ new Map();
    for (const A of Object.keys(this.templateSlots))
      e.set(A, !1);
    const t = (A, s) => {
      const D = `${A}-${s ? s + "-" : ""}`;
      return Object.fromEntries(
        Object.entries(this.templateSlots).reduce(
          (d, h) => {
            if (h[0].includes(D) && h[1] !== void 0) {
              e.set(h[0], !0);
              const g = h[0].replace(D, "");
              d.push([g, Ne(h[1])]);
            }
            return d;
          },
          []
        )
      );
    }, n = (A) => {
      for (let s of Object.values(A))
        s && (s = Ne(s));
      return A;
    }, i = He.create(this.formApi);
    this.registerEventCallback(i);
    const l = /* @__PURE__ */ new Set(), p = He.getEventsObjectFromInstance(i), r = [];
    this.formMetadataAndData.form.sections.forEach(
      (A, s) => {
        var T;
        const D = [];
        A.fields.forEach((V) => {
          const K = Ae.getFieldTypeByFieldMetadata(V), Q = Ae.getFieldComponentByFieldType(K), ce = v.deepMergeObject(
            v.deepMergeObject(
              this.formSlots.fields[K],
              this.formSlots.fields.byName[V.field_name]
            ),
            t("field", V.field_name)
          ), ae = v.deepMergeObject(
            this.getBindingsByFormFieldType(K),
            this.formBind.fields.byName[V.field_name]
          );
          let se = V.label;
          this.formSettings.requiredFieldsHasAsterisk && V.rules.find((le) => le.type === "required") && (se = se.concat("*"));
          const ie = {
            type: K,
            metadata: Object.freeze(V),
            label: se,
            readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? V.readonly ?? void 0,
            staticSelectOptions: V.static_select_options,
            associationData: V.field_association_data,
            attachmentData: V.field_attachment_data,
            rules: V.rules,
            computedRules: [],
            // late init
            bindings: ae,
            hidden: !1,
            mainComponent: Ne(Q),
            events: p.fields[V.field_name] ?? {},
            slots: n(ce)
          };
          ie.computedRules = ii.computeServerRules(
            ie,
            this.formApi
          ), D.push(ie), l.add(V.field_name);
        });
        const d = A.name ?? s.toString(), h = {
          ...this.formSlots.sections,
          ...t("section", d)
        }, g = ((T = this.formSlots.fields.byName[d]) == null ? void 0 : T.default) ?? this.formSlots.sections.default, k = v.deepMergeObject(
          this.formBind.sections.default,
          this.formBind.sections.byName[d]
        ), E = {
          label: A.label ?? void 0,
          icon: A.icon ?? void 0,
          hidden: !1,
          name: d,
          index: s,
          bindings: k,
          readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? void 0,
          events: p.sections[A.name ?? s.toString()] ?? {},
          mainComponent: Ne(g),
          fieldsComponent: void 0,
          fields: D,
          slots: n(h)
        };
        r.push(E);
      }
    );
    const m = {
      ...this.formSlots.form,
      ...t("form", "")
    }, y = v.deepCloneObject(this.formBind.form), u = {
      sections: r,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      bindings: y,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: p.form,
      slots: n(m),
      context: this.context
    };
    l.size < this.formMetadataAndData.form.sections.reduce((A, s) => A + s.fields.length, 0) && Te.log("Found fields with the same name");
    for (const A of e)
      A[1] !== !0 && Te.log(`Found unused slot : ${A[0]}`);
    return u;
  }
  getBindingsByFormFieldType(e) {
    const t = {
      string: this.formBind.fields.string,
      color: this.formBind.fields.color,
      wysiwyg: this.formBind.fields.wysiwyg,
      number: this.formBind.fields.number,
      date: this.formBind.fields.date,
      datetime: this.formBind.fields.datetime,
      checkbox: this.formBind.fields.checkbox,
      select: this.formBind.fields.select,
      belongsTo: this.formBind.fields.belongsTo,
      hasMany: this.formBind.fields.hasMany,
      attachmentHasOne: this.formBind.fields.attachmentHasOne,
      attachmentHasMany: this.formBind.fields.attachmentHasMany
    };
    return v.deepCloneObject(t[e]);
  }
  static getFieldTypeByFieldMetadata(e) {
    switch (e.field_type) {
      case "string":
        switch (e.field_extra_type) {
          case "color":
            return "color";
          case "wysiwyg":
            return "wysiwyg";
          default:
            return "string";
        }
      case "text":
        return "string";
      case "number":
        return "number";
      case "date":
        return "date";
      case "datetime":
        return "datetime";
      case "select":
        return "select";
      case "selectBelongsTo":
        return "belongsTo";
      case "selectHasMany":
        return "hasMany";
      case "selectHasAndBelongsToMany":
        return "hasMany";
      case "selectHasOne":
        return "belongsTo";
      case "checkbox":
        return "checkbox";
      case "object":
        return "string";
      case "attachmentHasOne":
        return "attachmentHasOne";
      case "attachmentHasMany":
        return "attachmentHasMany";
      default:
        return "string";
    }
  }
  static getFieldComponentByFieldType(e) {
    return {
      string: na,
      color: sa,
      wysiwyg: ra,
      number: ia,
      date: Mn,
      datetime: jn,
      checkbox: Gn,
      select: Jn,
      belongsTo: Zn,
      hasMany: ea,
      attachmentHasOne: ca,
      attachmentHasMany: pa
    }[e];
  }
}
const li = { class: "flex column" }, ri = /* @__PURE__ */ $({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = null, i = null, l = null;
    const p = dt(), r = {
      softReset: u,
      reset: A,
      clear: s,
      validate: h,
      isValid: g,
      isInvalid: k,
      hide: D,
      unhide: d,
      resetValidation: E,
      getFields: T,
      setReadonlyState: V,
      setIcon: K,
      setLabel: Q,
      tryFocusFirst: se,
      tryUnfocus: ie,
      setBindings: ve,
      section: t.section
    }, m = B(/* @__PURE__ */ new Map());
    function y() {
      t.section.fields.forEach((b) => {
        const w = b.metadata.field_name, j = t.formApi.getFieldByName(w);
        j && m.value.set(w, j);
      });
    }
    function u() {
      m.value.forEach((b) => {
        b.softReset();
      });
    }
    function A() {
      m.value.forEach((b) => {
        b.reset();
      }), v.callAllEvents(t.section.events.onReset);
    }
    function s() {
      m.value.forEach((b) => {
        b.clear();
      }), v.callAllEvents(t.section.events.onClear);
    }
    function D() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (m.value.forEach((w) => {
        w.hide();
      }), b.hidden = !0, v.callAllEvents(t.section.events.onHide));
    }
    function d() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (m.value.forEach((w) => {
        w.unhide();
      }), b.hidden = !1, v.callAllEvents(t.section.events.onUnhide));
    }
    function h() {
      let b = !0;
      return m.value.forEach((w) => {
        if (!w.validate()) {
          b = !1;
          return;
        }
      }), v.callAllEvents(t.section.events.onValidated), b;
    }
    function g() {
      let b = !0;
      return m.value.forEach((w) => {
        if (!w.isValid()) {
          b = !1;
          return;
        }
      }), b;
    }
    function k() {
      return !g();
    }
    function E() {
      m.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function T() {
      return m.value;
    }
    function V(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      if (w) {
        w.readonly = b;
        for (const j of T().values())
          j.setReadonlyState(b);
      }
    }
    function K(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.icon = b);
    }
    function Q(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.label = b);
    }
    function ce() {
      const b = {};
      for (const [w, j] of m.value)
        b[w] = j.getValueSerialized();
      return b;
    }
    function ae() {
      const b = p.default;
      if (!b) {
        console.error(
          "Submit64 : did not found fields slot for section " + t.section.name
        );
        return;
      }
      const w = $({
        inheritAttrs: !1,
        setup(j, { attrs: Ee, slots: fe }) {
          return () => b(
            {
              ...j,
              ...Ee
            },
            fe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(
        t.section,
        Ne(w)
      );
    }
    function se() {
      for (const b of T().values())
        if (b.tryFocus(), b.isFocus())
          return !0;
      return !1;
    }
    function ie() {
      for (const b of T().values())
        if (b.tryUnfocus(), !b.isFocus())
          return !0;
      return !1;
    }
    function le() {
      return t.privateFormApi.getSectionRef(
        t.section.name ?? t.section.index
      );
    }
    function ve(b) {
      const w = le();
      w.bindings = v.deepMergeObject(w.bindings, b);
    }
    e(r);
    const Fe = ne(() => g()), Ve = ne(() => k()), De = ne(() => ce());
    return G(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = G(Fe, (w) => {
          w && v.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        i == null || i(), i = null, b && (i = G(Ve, (w) => {
          var j;
          w && v.callAllEvents((j = t.section) == null ? void 0 : j.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onUpdate;
      },
      (b) => {
        l == null || l(), l = null, b && (l = G(
          De,
          () => {
            var w;
            v.callAllEvents((w = t.section) == null ? void 0 : w.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(() => {
      var w;
      ae();
      const b = (w = Je()) == null ? void 0 : w.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), ke(() => {
        var j;
        y(), v.callAllEvents((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (b, w) => Ke((o(), N("div", li, [
      t.section.slots["wrapper-before"] ? (o(), C(L(t.section.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), C(L(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.slots["wrapper-after"] ? (o(), C(L(t.section.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [Ze, t.section.hidden !== !0]
    ]);
  }
}), oi = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, si = ["index"], ui = /* @__PURE__ */ $({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = () => !0, i = () => !0, l = () => {
    }, p = () => {
    }, r = () => {
    }, m = () => {
    }, y = () => {
    };
    const u = B(""), A = B(!1), s = B([]);
    function D() {
      const _ = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      );
      u.value = h(_);
    }
    function d() {
      const _ = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      );
      u.value = h(_), v.callAllEvents(t.field.events.onReset), p(), ke(() => {
        Ve();
      });
    }
    function h(_) {
      const U = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (_ == null)
            return "";
          break;
        case "checkbox":
          return _ == null || _ === "" ? !1 : _;
        case "date":
          return _ == null || _ === "" ? null : ye.formatDate(
            v.superExtractDate(String(_), U.formSettings.backendDateFormat),
            U.formSettings.dateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : ye.formatDate(
            v.superExtractDate(
              String(_),
              U.formSettings.backendDatetimeFormat
            ),
            U.formSettings.datetimeFormat
          );
        case "attachmentHasOne":
        case "attachmentHasMany":
          return {
            add: [],
            delete: []
          };
      }
      return _;
    }
    function g(_) {
      const U = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (_ === "")
            return null;
          break;
        case "date":
          return _ == null || _ === "" ? null : ye.formatDate(
            v.superExtractDate(String(_), U.formSettings.dateFormat),
            U.formSettings.backendDateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : ye.formatDate(
            v.superExtractDate(String(_), U.formSettings.datetimeFormat),
            U.formSettings.backendDatetimeFormat
          );
        case "belongsTo":
          if (_ === void 0)
            return null;
          break;
        case "hasMany":
          if (_ === void 0)
            return [];
          break;
      }
      return _;
    }
    function k() {
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
        case "select":
          u.value = void 0;
          break;
        case "wysiwyg":
          u.value = "";
          break;
        case "belongsTo":
        case "hasMany":
          u.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          u.value = {
            add: [],
            delete: []
          };
          break;
      }
      r(), v.callAllEvents(t.field.events.onClear);
    }
    function E(_) {
      u.value = _;
    }
    function T() {
      return f(u);
    }
    function V() {
      return g(f(u));
    }
    function K(_) {
      s.value = _;
    }
    function Q() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function ce() {
      const _ = Q();
      _.hidden = !0, v.callAllEvents(t.field.events.onHide);
    }
    function ae() {
      const _ = Q();
      _.hidden = !1, v.callAllEvents(t.field.events.onUnhide);
    }
    function se(_) {
      const U = Q();
      U.readonly = _;
    }
    function ie(_) {
      const U = Q();
      U.label = _;
    }
    function le() {
      const _ = n();
      return v.callAllEvents(t.field.events.onValidated), _;
    }
    function ve() {
      return i();
    }
    function Fe() {
      return !ve();
    }
    function Ve() {
      return l();
    }
    function De() {
      A.value || (m(), A.value = !0);
    }
    function b() {
      A.value && (y(), A.value = !1);
    }
    function w() {
      return A.value;
    }
    function j(_) {
      const U = Q();
      U.bindings = v.deepMergeObject(U.bindings, _);
    }
    function Ee(_, U, me, Se, Ie, Oe, Re) {
      n = _, i = U, l = me, Se && (p = Se), Ie && (r = Ie), Oe && (m = Oe), Re && (y = Re);
    }
    const fe = {
      softReset: D,
      reset: d,
      clear: k,
      validate: le,
      isValid: ve,
      isInvalid: Fe,
      hide: ce,
      unhide: ae,
      resetValidation: Ve,
      getValueDeserialized: V,
      getValueSerialized: T,
      setupBackendErrors: K,
      setReadonlyState: se,
      setLabel: ie,
      tryFocus: De,
      tryUnfocus: b,
      isFocus: w,
      setBindings: j,
      setValue: E,
      field: t.field,
      refs: {
        modelValue: _e(u),
        isFocused: _e(A),
        backendErrors: _e(s)
      }
    };
    return e(fe), G(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        v.callAllEvents(t.field.events.onUpdate);
      }
    ), G(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? u.value : null,
      (_) => {
        _ ? v.callAllEvents(t.field.events.onIsValid) : v.callAllEvents(t.field.events.onIsInvalid);
      }
    ), J(() => {
      var U, me;
      D();
      const _ = (U = Je()) == null ? void 0 : U.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), v.callAllEvents((me = t.field) == null ? void 0 : me.events.onReady);
    }), (_, U) => Ke((o(), N("div", null, [
      t.field.slots["wrapper-before"] ? (o(), C(L(t.field.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), C(L(t.field.mainComponent), {
        modelValue: u.value,
        fieldApi: fe,
        formApi: t.formApi,
        reset: d,
        clear: k,
        getValueDeserialized: V,
        getValueSerialized: T,
        validate: le,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: Ee
      }, null, 8, ["modelValue", "formApi"])),
      t.field.slots["wrapper-after"] ? (o(), C(L(t.field.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      s.value.length > 0 ? (o(), N("div", oi, [
        (o(!0), N(X, null, M(s.value, (me, Se) => (o(), N("div", {
          index: Se,
          class: "flex column"
        }, q(me), 9, si))), 256))
      ])) : I("", !0)
    ], 512)), [
      [Ze, t.field.hidden !== !0]
    ]);
  }
}), mi = /* @__PURE__ */ $({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    getMetadataAndData: {},
    getSubmitFormData: {},
    getAssociationData: {},
    resourceId: {},
    formSettings: {},
    formBindings: {},
    formSlots: {},
    eventManager: {},
    context: {},
    class: {},
    sectionContainerClass: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = null, i = "", l = 0, p = 0, r = null, m = null, y = null, u = null;
    const A = dt(), s = B(Ae.getEmptyFormBeforeInit()), D = B(!1), d = B(!1), h = B(!1), g = B(!1), k = B("create"), E = B({}), T = B(/* @__PURE__ */ new Map()), V = B(/* @__PURE__ */ new Map());
    async function K() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = Ae.getForm(
        t.resourceName,
        t.resourceId,
        n,
        t.formSettings,
        t.formBindings,
        t.formSlots,
        ce(),
        t.context,
        he,
        t.eventManager,
        t.class,
        t.sectionContainerClass
      ), l = s.value.sections.length, p = s.value.sections.reduce((c, F) => (c += F.fields.length, c), 0), t.resourceId && (k.value = "edit");
    }
    async function Q() {
      var O, be, $e;
      if (!ie())
        return;
      v.callAllEvents((O = s.value) == null ? void 0 : O.events.onSubmit), g.value = !0, w();
      const c = ae(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: s.value.context
      });
      if (u = F.resource_data, F.success)
        E.value = {}, k.value === "create" && (k.value = "edit"), n && F.resource_data && (n.resource_data = F.resource_data), s.value = Ae.getForm(
          t.resourceName,
          t.resourceId,
          {
            form: F.form,
            resource_data: F.resource_data
          },
          t.formSettings,
          t.formBindings,
          t.formSlots,
          ce(),
          s.value.context,
          he,
          t.eventManager,
          t.class,
          t.sectionContainerClass
        ), Fe(), i = JSON.stringify(ae()), v.callAllEvents(($e = s.value) == null ? void 0 : $e.events.onSubmitSuccess);
      else {
        E.value = {};
        const Ue = [];
        for (const [pe, wt] of V.value) {
          const nt = F.errors[pe];
          nt && (wt.setupBackendErrors(nt), Ue.push(pe));
        }
        Object.entries(F.errors).forEach((pe) => {
          Ue.includes(pe[0]) || (E.value[pe[0]] = pe[1]);
        }), v.callAllEvents((be = s.value) == null ? void 0 : be.events.onSubmitUnsuccess);
      }
      g.value = !1;
    }
    function ce() {
      const c = {};
      for (const F in A) {
        const O = A[F];
        if (O) {
          const be = $({
            inheritAttrs: !1,
            setup($e, { attrs: Ue, slots: pe }) {
              return () => O({
                ...$e,
                ...Ue,
                innerSlots: pe
              });
            }
          });
          c[F] = be;
        }
      }
      return c;
    }
    function ae() {
      const c = {};
      for (const [F, O] of V.value)
        c[F] = O.getValueDeserialized();
      return c;
    }
    function se() {
      const c = {};
      for (const [F, O] of V.value)
        c[F] = O.getValueSerialized();
      return c;
    }
    function ie() {
      var F;
      let c = !0;
      return V.value.forEach((O) => {
        if (!O.validate()) {
          c = !1;
          return;
        }
      }), v.callAllEvents((F = s.value) == null ? void 0 : F.events.onValidated), c;
    }
    function le() {
      let c = !0;
      return V.value.forEach((F) => {
        if (!F.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function ve() {
      return !le();
    }
    function Fe() {
      T.value.forEach((c) => {
        c.softReset();
      });
    }
    function Ve() {
      var c;
      V.value.forEach((F) => {
        F.reset();
      }), v.callAllEvents((c = s.value) == null ? void 0 : c.events.onReset);
    }
    function De() {
      var c;
      V.value.forEach((F) => {
        F.clear();
      }), v.callAllEvents((c = s.value) == null ? void 0 : c.events.onClear);
    }
    function b() {
      V.value.forEach((c) => {
        c.resetValidation();
      });
    }
    function w() {
      V.value.forEach((c) => {
        c.setupBackendErrors([]);
      });
    }
    function j(c) {
      if (n)
        return n.resource_data[c];
    }
    function Ee(c) {
      return T.value.get(c);
    }
    function fe(c) {
      return [...T.value.values()].at(c);
    }
    function _() {
      return T.value;
    }
    function U(c) {
      return V.value.get(c);
    }
    function me() {
      return V.value;
    }
    function Se() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function Ie() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((F) => {
        (t[F] === null || t[F] === void 0) && Te.log(`Missing props for <Submit64> -> ${F}`);
      });
    }
    function Oe() {
      return f(k);
    }
    function Re() {
      return i !== JSON.stringify(ae());
    }
    function gt(c) {
      s.value && (s.value.context = c);
    }
    function vt(c) {
      s.value && (s.value.readonly = c);
    }
    function ht(c) {
      s.value && v.deepMergeObject(s.value.formSettings, c);
    }
    function bt(c) {
      s.value && v.deepMergeObject(s.value.bindings, c);
    }
    function yt() {
      return h.value;
    }
    function _t() {
      return u;
    }
    function Xe() {
      for (const c of _().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function At() {
      for (const c of _().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function kt() {
      return s;
    }
    function Ft(c) {
      var F;
      return (F = s.value) == null ? void 0 : F.sections.find((O) => O.name === c);
    }
    function Vt(c) {
      var F;
      return (F = s.value) == null ? void 0 : F.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === c);
    }
    function St(c, F) {
      T.value.set(c, F), l === T.value.size && (D.value = !0);
    }
    function Ct(c, F) {
      V.value.set(c, F), p === V.value.size && (d.value = !0);
    }
    function xt(c, F) {
      c.fieldsComponent = F;
    }
    const et = ne(() => le()), Dt = ne(() => ve()), Et = ne(() => se()), tt = {
      getFormRef: kt,
      getSectionRef: Ft,
      getFieldRef: Vt,
      registerSectionWrapperRef: St,
      registerFieldWrapperRef: Ct,
      setSectionFieldComponent: xt
    }, Nt = new Proxy({}, {
      get(c, F) {
        var O;
        return (O = s.value) == null ? void 0 : O[F];
      }
    }), he = {
      getMode: Oe,
      getSectionByName: Ee,
      getSectionByIndex: fe,
      getSections: _,
      getFieldByName: U,
      getFields: me,
      validate: ie,
      isValid: le,
      isInvalid: ve,
      softReset: Fe,
      reset: Ve,
      clear: De,
      resetValidation: b,
      submit: Q,
      valuesHasChanged: Re,
      getInitialValueByFieldName: j,
      getAssociationDataCallback: Se,
      setContext: gt,
      setReadonlyState: vt,
      setSettings: ht,
      setBindings: bt,
      isReady: yt,
      getSubmitData: _t,
      tryFocusFirst: Xe,
      tryUnfocus: At,
      form: Nt,
      refs: {
        orphanErrors: _e(E),
        isLoadingSubmit: _e(g),
        setupIsDone: _e(h),
        isFormValid: _e(et)
      }
    };
    return e(he), G(
      () => D.value && d.value,
      (c) => {
        var F;
        c && !h.value && (v.callAllEvents((F = s.value) == null ? void 0 : F.events.onReady), h.value = !0);
      }
    ), G(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        r == null || r(), r = null, c && (r = G(et, (F) => {
          var O;
          F && v.callAllEvents((O = s.value) == null ? void 0 : O.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        m == null || m(), m = null, c && (m = G(Dt, (F) => {
          var O;
          F && v.callAllEvents((O = s.value) == null ? void 0 : O.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        y == null || y(), y = null, c && (y = G(
          Et,
          () => {
            var F;
            v.callAllEvents((F = s.value) == null ? void 0 : F.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), J(async () => {
      Ie(), await K(), ke(() => {
        i = JSON.stringify(ae()), s.value.formSettings.autofocus && Xe();
      });
    }), (c, F) => Ke((o(), N("div", {
      class: at(s.value.bindings.default.class ?? "flex column")
    }, [
      W("div", {
        class: at(
          s.value.bindings.default.sectionContainerClass ?? "flex column q-pa-sm q-gutter-sm"
        )
      }, [
        (o(!0), N(X, null, M(s.value.sections, (O) => (o(), C(ri, {
          key: O.name,
          section: O,
          formApi: he,
          privateFormApi: tt
        }, {
          default: S(() => [
            (o(!0), N(X, null, M(O.fields, (be) => (o(), C(ui, {
              key: be.metadata.field_name,
              field: be,
              formApi: he,
              privateFormApi: tt
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      s.value.slots["orphan-errors"] ? (o(), C(L(s.value.slots.orphanErrors), {
        key: 0,
        formApi: he
      })) : I("", !0),
      s.value.slots.actions ? (o(), C(L(s.value.slots.actions), {
        key: 1,
        formApi: he
      })) : I("", !0)
    ], 2)), [
      [Ze, h.value]
    ]);
  }
});
export {
  He as DynamicLogicBuilder,
  Ce as Submit64,
  mi as Submit64Form
};
