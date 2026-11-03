var $t = Object.defineProperty;
var Rt = (a, e, t) => e in a ? $t(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var z = (a, e, t) => Rt(a, typeof e != "symbol" ? e + "" : e, t);
import { date as ye, QField as Pt, QBtn as H, QUploader as Ye, QSelect as Ee, QTime as ut, QMenu as Le, QIcon as X, QDate as Ge, QInput as ue, QCheckbox as dt, QColor as ct, QEditor as ft, QUploaderAddTrigger as pt, QList as Me, QItem as De, QItemSection as oe, QItemLabel as se, QSeparator as mt, QPopupProxy as He, IconSet as ze, Lang as qe } from "quasar";
import { defineComponent as P, openBlock as o, createElementBlock as N, createElementVNode as J, toDisplayString as L, createBlock as x, unref as f, withCtx as S, createVNode as C, createCommentVNode as I, computed as ae, Fragment as ee, renderList as j, createTextVNode as ne, normalizeProps as q, mergeProps as R, guardReactiveProps as Q, ref as B, resolveDynamicComponent as M, getCurrentInstance as Ze, renderSlot as Ut, onMounted as K, nextTick as Fe, createSlots as te, watch as W, markRaw as Te, useSlots as gt, withDirectives as Xe, vShow as et, readonly as _e, normalizeClass as lt } from "vue";
function zt(a) {
  for (const e of a ?? [])
    e();
}
function qt(a) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(a.toString(), 10) >= 1024 && t < e.length - 1; )
    a /= 1024, ++t;
  return `${a.toFixed(1)}${e[t]}`;
}
function vt(a, e, t = {
  deepClone: !0
}) {
  let n = a ?? {}, i = e ?? {};
  t.deepClone && (n = Be(n), i = Be(i));
  for (const l of Object.keys(i)) {
    const m = i[l], r = n[l];
    m && typeof m == "object" && !Array.isArray(m) && r && typeof r == "object" && !Array.isArray(r) ? n[l] = vt(
      r,
      m,
      t
    ) : m !== void 0 && (n[l] = m);
  }
  return n;
}
function Be(a) {
  if (typeof a == "function" || a === null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map((t) => Be(t));
  const e = {};
  for (const t of Object.keys(a))
    e[t] = Be(a[t]);
  return e;
}
function Lt(a, e) {
  const t = ye.extractDate(a, e);
  if (!Number.isNaN(t.getTime()))
    return t;
  const n = new Date(a);
  return Number.isNaN(n.getTime()) ? t : n;
}
const v = {
  callAllEvents: zt,
  humanStorageSize: qt,
  deepMergeObject: vt,
  deepCloneObject: Be,
  superExtractDate: Lt
};
function O(a) {
  return Object.fromEntries(
    Object.entries(a).reduce(
      (e, t) => (!t[1] || !t[1].default || e.push([t[0], t[1].default]), e),
      []
    )
  );
}
const Ae = {
  color: "primary"
};
({
  ...O(Pt.props)
});
function Mt() {
  return {
    ...O(ue.props)
  };
}
function Ht() {
  return {
    ...O(ue.props)
  };
}
function jt() {
  return {
    input: {
      ...O(ue.props)
    },
    icon: {
      ...O(X.props),
      name: "colorize",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...O(Le.props)
    },
    color: {
      ...O(ct.props)
    }
  };
}
function Qt() {
  const a = {
    arial: "Arial",
    arial_black: "Arial Black",
    comic_sans: "Comic Sans MS",
    courier_new: "Courier New",
    impact: "Impact",
    lucida_grande: "Lucida Grande",
    times_new_roman: "Times New Roman",
    verdana: "Verdana"
  };
  return {
    ...O(ft.props),
    fonts: a
  };
}
function Yt() {
  return {
    ...O(dt.props)
  };
}
function Gt() {
  return {
    input: {
      ...O(ue.props)
    },
    icon: {
      ...O(X.props),
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...O(Le.props)
    },
    date: {
      ...O(Ge.props),
      color: Ae.color
    },
    btn: {
      ...O(H.props),
      label: "Fermer",
      color: Ae.color
    }
  };
}
function Wt() {
  return {
    input: {
      ...O(ue.props)
    },
    iconDate: {
      ...O(X.props),
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...O(Le.props)
    },
    date: {
      ...O(Ge.props),
      color: Ae.color
    },
    btnDate: {
      ...O(H.props),
      label: "Fermer",
      color: Ae.color
    },
    iconDatetime: {
      ...O(X.props),
      name: "access_time",
      class: "cursor-pointer"
    },
    popupProxyDatetime: {
      ...O(Le.props)
    },
    datetime: {
      ...O(ut.props),
      format24h: !0
    },
    btnDatetime: {
      ...O(H.props),
      label: "Fermer",
      color: Ae.color
    }
  };
}
function Jt() {
  return {
    select: {
      ...O(Ee.props)
    }
  };
}
function Kt() {
  return {
    select: {
      ...O(Ee.props)
    }
  };
}
function Zt() {
  return {
    select: {
      ...O(Ee.props)
    }
  };
}
function Xt() {
  return {
    uploader: {
      ...O(Ye.props),
      color: Ae.color
    }
  };
}
function en() {
  return {
    uploader: {
      ...O(Ye.props),
      color: Ae.color
    }
  };
}
function tn() {
  return {};
}
function nn() {
  return {
    submitBtn: {
      ...O(H.props),
      label: "Enregistrer"
    },
    resetBtn: {
      ...O(H.props),
      label: "Réinitialiser"
    },
    clearBtn: {
      ...O(H.props),
      label: "Effacer"
    }
  };
}
function an() {
  return {
    fields: {
      string: Mt(),
      number: Ht(),
      wysiwyg: Qt(),
      color: jt(),
      checkbox: Yt(),
      date: Gt(),
      datetime: Wt(),
      select: Zt(),
      hasMany: Kt(),
      belongsTo: Jt(),
      attachmentHasOne: Xt(),
      attachmentHasMany: en(),
      byName: {}
    },
    sections: {
      default: tn(),
      byName: {}
    },
    form: {
      default: {},
      actions: nn()
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
const ht = {
  getDefaultFormBindings: an,
  getEmptyDefaultBindings: ln
}, rn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, on = { class: "col" }, sn = { class: "q-uploader__title" }, un = /* @__PURE__ */ P({
  __name: "HeaderUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", rn, [
      J("div", on, [
        J("div", sn, L(e.fieldApi.field.label), 1)
      ]),
      a.defaultProps.canAddFiles ? (o(), x(f(H), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.defaultProps.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          C(f(pt))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), dn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, cn = { class: "col" }, fn = { class: "q-uploader__title" }, pn = /* @__PURE__ */ P({
  __name: "HeaderUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a, t = ae(() => {
      var n, i;
      return e.fieldApi.refs.modelValue.value ? (((n = e.fieldApi.field.attachmentData) == null ? void 0 : n.length) ?? 0) === 0 || (((i = e.fieldApi.field.attachmentData) == null ? void 0 : i.length) ?? !0) && e.fieldApi.refs.modelValue.value.delete.length === 1 : !0;
    });
    return (n, i) => (o(), N("div", dn, [
      J("div", cn, [
        J("div", fn, L(e.fieldApi.field.label), 1)
      ]),
      a.defaultProps.canAddFiles && t.value ? (o(), x(f(H), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.defaultProps.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          C(f(pt))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), mn = {
  key: 0,
  class: "flex column"
}, gn = { class: "text-weight-medium text-body2" }, vn = {
  key: 2,
  class: "flex column"
}, hn = { class: "text-weight-medium text-body2" }, bn = /* @__PURE__ */ P({
  __name: "ListUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    function t(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete.push(m.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = r.delete.filter((p) => p !== m.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    const i = ae(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ae(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (m, r) => {
      var p;
      return o(), N(ee, null, [
        i.value ? I("", !0) : (o(), N("div", mn, [
          J("div", gn, " Fichier" + L((((p = e.fieldApi.field.attachmentData) == null ? void 0 : p.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne ", 1),
          C(f(Me), { separator: "" }, {
            default: S(() => [
              (o(!0), N(ee, null, j(e.fieldApi.field.attachmentData ?? [], (y) => (o(), x(f(De), {
                key: y.attachment_id
              }, {
                default: S(() => [
                  C(f(oe), null, {
                    default: S(() => [
                      C(f(se), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          ne(L(y.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(f(se), { caption: "" }, {
                        default: S(() => [
                          ne(L(f(v).humanStorageSize(y.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  e.fieldApi.refs.modelValue.value ? (o(), x(f(oe), {
                    key: 0,
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      l.value.includes(y.attachment_id) ? I("", !0) : (o(), x(f(H), {
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
                      l.value.includes(y.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), x(f(H), {
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
        !i.value && a.defaultProps.files.length > 0 ? (o(), x(f(mt), { key: 1 })) : I("", !0),
        a.defaultProps.files.length > 0 ? (o(), N("div", vn, [
          J("div", hn, " Fichier" + L(a.defaultProps.files.length > 0 ? "s" : "") + " à ajouter ", 1),
          C(f(Me), { separator: "" }, {
            default: S(() => [
              (o(!0), N(ee, null, j(a.defaultProps.files, (y) => (o(), x(f(De), {
                key: y.__key
              }, {
                default: S(() => [
                  C(f(oe), null, {
                    default: S(() => [
                      C(f(se), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          ne(L(y.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(f(se), { caption: "" }, {
                        default: S(() => [
                          ne(L(y.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(f(oe), {
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      C(f(H), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (u) => a.defaultProps.removeFile(y)
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
}), yn = {
  key: 0,
  class: "flex column"
}, _n = {
  key: 2,
  class: "flex column"
}, An = /* @__PURE__ */ P({
  __name: "ListUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    function t(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = [m.attachment_id], e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n() {
      let m = e.fieldApi.refs.modelValue.value;
      m.delete = [], e.fieldApi.setValue(m), e.fieldApi.validate();
    }
    const i = ae(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ae(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (m, r) => (o(), N(ee, null, [
      i.value ? I("", !0) : (o(), N("div", yn, [
        r[0] || (r[0] = J("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
        C(f(Me), { separator: "" }, {
          default: S(() => [
            (o(!0), N(ee, null, j(e.fieldApi.field.attachmentData ?? [], (p) => (o(), x(f(De), {
              key: p.attachment_id
            }, {
              default: S(() => [
                C(f(oe), null, {
                  default: S(() => [
                    C(f(se), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        ne(L(p.filename), 1)
                      ]),
                      _: 2
                    }, 1024),
                    C(f(se), { caption: "" }, {
                      default: S(() => [
                        ne(L(f(v).humanStorageSize(p.size)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                e.fieldApi.refs.modelValue.value ? (o(), x(f(oe), {
                  key: 0,
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    l.value.includes(p.attachment_id) ? I("", !0) : (o(), x(f(H), {
                      key: 0,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => t(p)
                    }, null, 8, ["disable", "onClick"])),
                    l.value.includes(p.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), x(f(H), {
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
      !i.value && a.defaultProps.files.length > 0 ? (o(), x(f(mt), { key: 1 })) : I("", !0),
      a.defaultProps.files.length > 0 ? (o(), N("div", _n, [
        r[1] || (r[1] = J("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
        C(f(Me), { separator: "" }, {
          default: S(() => [
            (o(!0), N(ee, null, j(a.defaultProps.files, (p) => (o(), x(f(De), {
              key: p.__key
            }, {
              default: S(() => [
                C(f(oe), null, {
                  default: S(() => [
                    C(f(se), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        ne(L(p.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    C(f(se), { caption: "" }, {
                      default: S(() => [
                        ne(L(p.__sizeLabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                C(f(oe), {
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    C(f(H), {
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => a.defaultProps.removeFile(p)
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
}), kn = /* @__PURE__ */ P({
  __name: "ColorPicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => e.fieldApi.field.readonly ? (o(), x(f(X), q(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), x(f(X), q(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        C(f(He), q(Q(e.fieldApi.field.bindings.popupProxy)), {
          default: S(() => [
            C(f(ct), R(e.fieldApi.field.bindings.color, {
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
}), Fn = { class: "row items-center justify-end" }, Vn = /* @__PURE__ */ P({
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
    return (i, l) => e.fieldApi.field.readonly ? (o(), x(f(X), q(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), x(f(X), q(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        C(f(He), R({
          ref_key: "popupProxyRef",
          ref: t
        }, e.fieldApi.field.bindings.popupProxy), {
          default: S(() => [
            C(f(Ge), R(e.fieldApi.field.bindings.date, {
              "model-value": e.fieldApi.refs.modelValue.value,
              mask: e.formApi.form.formSettings.dateFormat,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), {
              default: S(() => [
                J("div", Fn, [
                  C(f(H), R(e.fieldApi.field.bindings.btn, { onClick: n }), null, 16)
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
class Ie {
  static log(e) {
    console.warn(`Submit64 -> ${e}`);
  }
}
const Sn = { class: "row items-center justify-end" }, xn = { class: "row items-center justify-end" }, Cn = /* @__PURE__ */ P({
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
    function m() {
      if (e.formApi.form.formSettings.enableQuasarBigBangComponents) {
        const r = Ze(), p = r == null ? void 0 : r.appContext.components["qbb-time"];
        if (p)
          return p;
        Ie.log("Component QBBTime from Quasar BigBang not found");
      }
      return ut;
    }
    return (r, p) => e.fieldApi.field.readonly ? (o(), N(ee, { key: 1 }, [
      C(f(X), q(Q(e.fieldApi.field.bindings.iconDate)), null, 16),
      C(f(X), q(Q(e.fieldApi.field.bindings.iconDatetime)), null, 16)
    ], 64)) : (o(), N(ee, { key: 0 }, [
      C(f(X), q(Q(e.fieldApi.field.bindings.iconDate)), {
        default: S(() => [
          C(f(He), R({
            ref_key: "datePopupProxyRef",
            ref: t
          }, e.fieldApi.field.bindings.popupProxyDate), {
            default: S(() => [
              C(f(Ge), R(e.fieldApi.field.bindings.date, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  J("div", Sn, [
                    C(f(H), R(e.fieldApi.field.bindings.btnDate, { onClick: i }), null, 16)
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
      C(f(X), q(Q(e.fieldApi.field.bindings.iconDatetime)), {
        default: S(() => [
          C(f(He), R({
            ref_key: "timePopupProxyRef",
            ref: n
          }, e.fieldApi.field.bindings.popupProxyDatetime), {
            default: S(() => [
              (o(), x(M(m()), R(e.fieldApi.field.bindings.datetime, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  J("div", xn, [
                    C(f(H), R(e.fieldApi.field.bindings.btnDatetime, { onClick: l }), null, 16)
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
}), rt = /* @__PURE__ */ P({
  __name: "AssociationDisplayComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), x(f(De), q(Q(e.defaultProps.itemProps)), {
      default: S(() => [
        C(f(oe), null, {
          default: S(() => [
            C(f(se), null, {
              default: S(() => [
                ne(L(e.defaultProps.opt.label), 1)
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
}), Je = /* @__PURE__ */ P({
  __name: "NoOptionComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), x(f(De), q(Q(e.fieldApi.field.bindings.itemNoOption)), {
      default: S(() => [
        C(f(oe), null, {
          default: S(() => [
            C(f(se), null, {
              default: S(() => [
                ne(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Dn = { class: "flex column" }, En = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Nn = /* @__PURE__ */ P({
  __name: "ActionComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", Dn, [
      J("div", En, [
        C(f(H), R(e.formApi.form.bindings.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (o(), x(f(H), R({ key: 0 }, e.formApi.form.bindings.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.form.formSettings.showClearButton ? (o(), x(f(H), R({ key: 1 }, e.formApi.form.bindings.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), wn = { class: "flex column" }, Tn = /* @__PURE__ */ P({
  __name: "OrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", wn, [
      (o(!0), N(ee, null, j(e.formApi.refs.orphanErrors.value, (i, l) => (o(), N("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, L(l) + " : " + L(i.join(",")), 1))), 128))
    ]));
  }
}), Bn = { class: "propsComponent.sectionApi.section.bindings.class" }, In = { class: "flex row items-center" }, On = { class: "text-body1 text-weight-medium" }, $n = { class: "flex column q-gutter-md" }, Rn = /* @__PURE__ */ P({
  __name: "SectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", Bn, [
      J("div", In, [
        e.sectionApi.section.icon ? (o(), x(f(X), R({ key: 0 }, e.sectionApi.section.bindings.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : I("", !0),
        J("div", On, L(e.sectionApi.section.label), 1)
      ]),
      J("div", $n, [
        (o(), x(M(e.sectionApi.section.fieldsComponent)))
      ])
    ]));
  }
});
function Pn() {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {
        append: kn
      },
      checkbox: {},
      date: {
        append: Vn
      },
      datetime: {
        append: Cn
      },
      select: {
        "no-option": Je
      },
      hasMany: {
        "no-option": Je,
        option: rt
      },
      belongsTo: {
        "no-option": Je,
        option: rt
      },
      attachmentHasOne: {
        header: pn,
        list: An
      },
      attachmentHasMany: {
        header: un,
        list: bn
      },
      byName: {}
    },
    sections: {
      default: Rn,
      byName: {}
    },
    form: {
      actions: Nn,
      orphanErrors: Tn
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
const bt = {
  getDefaultFormSlots: Pn,
  getEmptyDefaultSlots: Un
}, Qe = class Qe {
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
    }, this._formBindings = ht.getDefaultFormBindings(), this._formSlots = bt.getDefaultFormSlots();
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
z(Qe, "_instance", new Qe());
let Ce = Qe;
class je {
  constructor(e) {
    z(this, "formApi");
    z(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const n = e, i = t, l = new zn(n, i, this.formApi);
    return this.events.push(l), new qn(l);
  }
  static create(e) {
    return new je(e);
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
        return Ie.log(`Submit64 -> unhandled event target : ${this.type}`), {
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
class qn {
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
const Ln = { style: { "font-weight": "500", padding: "4px 0" } }, ce = /* @__PURE__ */ P({
  __name: "FieldLabel",
  props: {
    name: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (o(), N("div", Ln, [
      Ut(t.$slots, "default", {}, () => [
        ne(L(e.name), 1)
      ])
    ]));
  }
}), Mn = { class: "flex column" }, Hn = /* @__PURE__ */ P({
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
    function m() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        m,
        r
      ), Fe(() => {
        var p;
        (p = t.value) == null || p.resetValidation();
      });
    }), (p, y) => (o(), N("div", Mn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ue), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((s) => [
            (o(), x(M(u), q(Q({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), jn = { class: "flex column" }, Qn = /* @__PURE__ */ P({
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
    function m() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        m,
        r
      ), Fe(() => {
        var p;
        (p = t.value) == null || p.resetValidation();
      });
    }), (p, y) => (o(), N("div", jn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ue), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((s) => [
            (o(), x(M(u), q(Q({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Yn = { class: "flex column" }, Gn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Wn = /* @__PURE__ */ P({
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
      for (const m of e.fieldApi.field.computedRules)
        if (t.value = m(e.modelValue), t.value !== !0)
          break;
      return i();
    }
    function i() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return W(
      () => e.modelValue,
      () => {
        e.fieldApi.validate();
      }
    ), K(() => {
      e.registerBehaviourCallbacks(n, i, l);
    }), (m, r) => (o(), N("div", Yn, [
      C(f(dt), R({ ref: "checkboxRef" }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        label: e.fieldApi.field.label,
        "aria-readonly": e.fieldApi.field.readonly,
        class: "q-pb-md",
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (p, y) => ({
          name: y,
          fn: S((u) => [
            (o(), x(M(p), q(Q({
              defaultProps: u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "aria-readonly", "onUpdate:modelValue"]),
      t.value !== !0 ? (o(), N("div", Gn, L(t.value), 1)) : I("", !0)
    ]));
  }
}), Jn = { class: "flex column" }, Kn = /* @__PURE__ */ P({
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
    function m() {
      t.value = Object.freeze(
        e.fieldApi.field.staticSelectOptions ?? []
      ), n.value = e.fieldApi.field.staticSelectOptions ?? [];
    }
    function r() {
      return i.value ? i.value.validate() : !1;
    }
    function p() {
      return i.value ? !i.value.hasError : !1;
    }
    function y() {
      i.value && i.value.resetValidation();
    }
    function u() {
      n.value = [];
    }
    function k() {
      i.value && i.value.focus();
    }
    function s() {
      i.value && i.value.blur();
    }
    return K(() => {
      m(), e.registerBehaviourCallbacks(
        r,
        p,
        y,
        void 0,
        u,
        k,
        s
      );
    }), (D, d) => (o(), N("div", Jn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(Ee), R({
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
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (h, g) => ({
          name: g,
          fn: S((F) => [
            (o(), x(M(h), q(Q({
              defaultProps: F ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Zn = { class: "flex column" }, ot = "__init", Xn = /* @__PURE__ */ P({
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
      m()
    ), i = B(), l = B(ot);
    function m() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function r(g, F) {
      if (g === l.value) {
        F(() => {
        });
        return;
      }
      const E = e.formApi.getAssociationDataCallback();
      n.value = m(), l.value = g;
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
      }).then((A) => {
        F(() => {
          e.formApi.setContext(A.context), t.value = A.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            A.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = m();
      });
    }
    function p() {
      var F, E;
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = [
        {
          label: ((F = e.fieldApi.field.associationData[0]) == null ? void 0 : F.label) ?? "???",
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
    function k() {
      i.value && i.value.resetValidation();
    }
    function s() {
      n.value = m(), t.value = [], l.value = ot;
    }
    function D(g) {
      const F = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === F && F !== -1) {
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
        }).then((A) => {
          e.formApi.setContext(A.context), t.value = t.value.concat(
            A.rows
          ), n.value.lastPage = Math.ceil(
            A.row_count / n.value.limit
          ), A.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      i.value && i.value.focus();
    }
    function h() {
      i.value && i.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        k,
        p,
        s,
        d,
        h
      ), Fe(() => {
        p();
      });
    }), (g, F) => (o(), N("div", Zn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(Ee), R({
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
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((A) => [
            (o(), x(M(E), q(Q({
              defaultProps: A ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ea = { class: "flex column" }, st = "__init", ta = /* @__PURE__ */ P({
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
      m()
    ), i = B(), l = B(st);
    function m() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function r(g, F) {
      if (g === l.value) {
        F(() => {
        });
        return;
      }
      const E = e.formApi.getAssociationDataCallback();
      n.value = m(), l.value = g;
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
      }).then((A) => {
        F(() => {
          e.formApi.setContext(A.context), t.value = A.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            A.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = m();
      });
    }
    function p() {
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = g.map((F, E) => ({
        label: e.fieldApi.field.associationData[E].label ?? "???",
        value: F,
        data: e.fieldApi.field.associationData[E].data
      })));
    }
    function y() {
      return i.value ? i.value.validate() : !1;
    }
    function u() {
      return i.value ? !i.value.hasError : !1;
    }
    function k() {
      i.value && i.value.resetValidation();
    }
    function s() {
      n.value = m(), t.value = [], l.value = st;
    }
    function D(g) {
      const F = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === F && F !== -1) {
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
        }).then((A) => {
          e.formApi.setContext(A.context), t.value = t.value.concat(
            A.rows
          ), n.value.lastPage = Math.ceil(
            A.row_count / n.value.limit
          ), A.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      i.value && i.value.focus();
    }
    function h() {
      i.value && i.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        k,
        p,
        s,
        d,
        h
      ), Fe(() => {
        p();
      });
    }), (g, F) => (o(), N("div", ea, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(Ee), R({
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
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((A) => [
            (o(), x(M(E), q(Q({
              defaultProps: A ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"])
    ]));
  }
}), na = { class: "flex column" }, aa = /* @__PURE__ */ P({
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
    function m() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (p, y) => (o(), N("div", na, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ue), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        "model-value": e.modelValue,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((s) => [
            (o(), x(M(u), q(Q({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["rules", "label", "readonly", "model-value", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ia = { class: "flex column" }, la = /* @__PURE__ */ P({
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
    function m() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (p, y) => (o(), N("div", ia, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ue), R({
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
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((s) => [
            (o(), x(M(u), q(Q({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "rules", "label", "readonly", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ra = { class: "flex column" }, oa = /* @__PURE__ */ P({
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
    function m(s) {
      var d;
      s.preventDefault(), s.stopPropagation();
      const D = (d = s.clipboardData) == null ? void 0 : d.items;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          if (g.type.startsWith("image/")) {
            const F = g.getAsFile();
            F && p(F);
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
          g.type.startsWith("image/") && g && p(g);
        }
    }
    function p(s) {
      if (!t.value)
        return;
      const D = new FileReader();
      D.onload = (d) => {
        var g;
        const h = (g = d.target) == null ? void 0 : g.result;
        if (typeof h == "string") {
          const F = new Image();
          F.onload = () => {
            var A;
            const E = F.width, T = F.height;
            (A = t.value) == null || A.runCmd(
              "insertHTML",
              `<img src="${h}" width="${E}" height="${T}" style="max-width: 80%; height: auto;" />`
            );
          }, F.src = h;
        }
      }, D.readAsDataURL(s);
    }
    function y() {
      t.value && t.value.focus();
    }
    function u() {
      t.value && t.value.getContentEl().blur();
    }
    function k() {
      return [
        [
          {
            label: qe.props.editor.align,
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
            label: qe.props.editor.formatting,
            icon: ze.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: qe.props.editor.fontSize,
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
            label: qe.props.editor.defaultFont,
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
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        y,
        u
      );
    }), (s, D) => (o(), N("div", ra, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ft), R({
        ref_key: "fieldRef",
        ref: t,
        toolbar: k()
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        onDrop: r,
        onPaste: m,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (d, h) => ({
          name: h,
          fn: S((g) => [
            (o(), x(M(d), q(Q({
              defaultProps: g ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["toolbar", "model-value", "onUpdate:modelValue"])
    ]));
  }
}), sa = { class: "flex column" }, ua = /* @__PURE__ */ P({
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
    function m() {
      t.value && t.value.focus();
    }
    function r() {
      t.value && t.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        n,
        i,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (p, y) => (o(), N("div", sa, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), x(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(f(ue), R({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((s) => [
            (o(), x(M(u), q(Q({
              defaultProps: s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), da = { class: "flex column" }, ca = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, fa = /* @__PURE__ */ P({
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
    function m() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function p() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), F = new FileReader();
        F.onload = (E) => {
          var G;
          const T = ((G = E.target) == null ? void 0 : G.result) ?? "", [A, Z] = T.split(",");
          h(Z);
        }, F.readAsDataURL(g);
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
    async function k(d) {
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
    return K(() => {
      e.registerBehaviourCallbacks(
        m,
        r,
        p,
        i,
        l
      );
    }), (d, h) => (o(), N("div", da, [
      C(f(Ye), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: k,
        onRemoved: s,
        style: { width: "inherit" }
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (g, F) => ({
          name: F,
          fn: S((E) => [
            (o(), x(M(g), q(Q({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", ca, L(t.value), 1)) : I("", !0)
    ]));
  }
}), pa = { class: "flex column" }, ma = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, ga = /* @__PURE__ */ P({
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
    function m() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function p() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), F = new FileReader();
        F.onload = (E) => {
          var G;
          const T = ((G = E.target) == null ? void 0 : G.result) ?? "", [A, Z] = T.split(",");
          h(Z);
        }, F.readAsDataURL(g);
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
    async function k(d) {
      n.value = !0;
      for (const h of d) {
        const g = await u(h);
        let F = e.modelValue;
        F.add.push(g), e.modelValueOnUpdate(F);
      }
      n.value = !1, D();
    }
    async function s(d) {
      n.value = !0;
      for (const h of d) {
        const g = await u(h);
        let F = e.modelValue;
        F.add = F.add.filter((E) => E.key !== g.key), e.modelValueOnUpdate(F);
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
    return K(() => {
      e.registerBehaviourCallbacks(
        m,
        r,
        p,
        i,
        l
      );
    }), (d, h) => (o(), N("div", pa, [
      C(f(Ye), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: k,
        onRemoved: s,
        style: { width: "inherit" }
      }), te({ _: 2 }, [
        j(e.fieldApi.field.slots, (g, F) => ({
          name: F,
          fn: S((E) => [
            (o(), x(M(g), q(Q({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", ma, L(t.value), 1)) : I("", !0)
    ]));
  }
});
function va(a, e) {
  const t = a.rules ?? [], n = a.type, i = e.form, l = (y, u, k) => y[u] ? k ? () => m(y[u]) : () => y[u] : y.compare_to ? () => {
    var s;
    return ((s = e.getFieldByName(y.compare_to)) == null ? void 0 : s.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", m = (y) => String(
    ye.formatDate(
      v.superExtractDate(y, i.formSettings.backendDateFormat),
      i.formSettings.dateFormat
    )
  ), r = [], p = [];
  switch (n) {
    case "date":
      r.push(Ke(i.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(Ke(i.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((y) => {
    const u = y;
    switch (u.type) {
      case "required":
        r.push(ha());
        break;
      case "absence":
        r.push(ya());
        break;
      case "acceptance":
        r.push(_a());
        break;
      case "inclusion":
        r.push(yt(u.including));
        break;
      case "exclusion":
        r.push(ba(u.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        p.push("allowNull");
        break;
      case "allowBlank":
        p.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(Fa());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Va(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Sa(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          xa(
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
          Da(l(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Ea(
            l(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Na());
        break;
      case "numberNumericOnly":
        r.push(wa());
        break;
      case "numberEvenOnly":
        r.push(Ta());
        break;
      case "numberOddOnly":
        r.push(Ba());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ia(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Oa(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          $a(
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
          Pa(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          qa(
            l(u, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(Ke(i.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          La(
            l(u, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Ma(
            l(u, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Ha(
            l(u, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          ja(
            l(u, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Qa(
            l(u, "equal_to", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Ya(
            l(u, "other_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          Wa()
        );
        break;
      case "allowFileContentType":
        r.push(
          Ja(
            l(u, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          Ka(
            l(u, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          Xa(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          Za(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          ei(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ti(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          ni(
            l(u, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          ai(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ii(
            l(u, "equal_to")
          )
        );
        break;
    }
  }), p.length > 0 ? p.map((y) => {
    switch (y) {
      case "allowBlank":
        return ka(r);
      case "allowNull":
        return Aa(r);
    }
  }) : r;
}
function ha() {
  return (a) => !!a || "Ce champ est requis";
}
function yt(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function ba(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${yt.toString()}`
  );
}
function ya() {
  return (a) => !a || "Ce champ doit être vide";
}
function _a() {
  return (a) => !!a || "Doit être accepté";
}
function Aa(a) {
  return (e) => (e === null || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function ka(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Fa() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function Va(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Sa(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function xa(a) {
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
function Da(a, e) {
  return (t) => {
    const n = a();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Ea(a, e) {
  return (t) => {
    const n = a();
    return Number(t) !== n || `Doit être différent de ${a}`;
  };
}
function Na() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function wa() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function Ta() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function Ba() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function Ia(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Oa(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function $a(a) {
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
function Pa(a, e) {
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
function qa(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function La(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i <= l || `Inf. ou égal à ${n}`;
  };
}
function Ma(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i < l || `Inf. à ${n}`;
  };
}
function Ha(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i >= l || `Sup. ou égal à ${n}`;
  };
}
function ja(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i > l || `Sup. à ${n}`;
  };
}
function Qa(a, e) {
  return (t) => {
    const n = a(), i = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return i === l || `Égale à ${i}`;
  };
}
function Ya(a, e) {
  return (t) => {
    const n = a();
    return v.superExtractDate(String(t), e) !== v.superExtractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function Ke(a) {
  return (e) => e == null || e === "" ? !0 : Ga(e, a) || `Date invalide. Format : ${a}`;
}
function Ga(a, e) {
  if (typeof a != "string" || !a.trim())
    return !1;
  const t = v.superExtractDate(a, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : ye.formatDate(t, e) === a;
}
function Wa() {
  return (a) => a.add.length > 0 || "Ce champ est requis";
}
function Ja(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    t.add.forEach((m) => {
      i && (n.includes(m.contentType) || (i = !1));
    });
    const l = a.length > 1;
    return i || `Type${l ? "s" : ""} autorisé${l ? "s" : ""} : ${n.join(",")}`;
  };
}
function Ka(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && n !== l.size && (i = !1);
    }), i || `Taille par fichier ${v.humanStorageSize(n)}`;
  };
}
function Za(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size < n && (i = !1);
    }), i || `Taille par fichier min. ${v.humanStorageSize(n)}`;
  };
}
function Xa(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size > n && (i = !1);
    }), i || `Taille par fichier max. ${v.humanStorageSize(n)}`;
  };
}
function ei(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length <= n || `${n} fichier${n > 1 ? "s" : ""} max.`;
  };
}
function ti(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length >= n || `${n} fichier${n > 1 ? "s" : ""} min.`;
  };
}
function ni(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, m) => (l += m.size, l), 0) <= n || `${v.humanStorageSize(n)} max.`;
  };
}
function ai(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, m) => (l += m.size, l), 0) >= n || `${v.humanStorageSize(n)} min.`;
  };
}
function ii(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, m) => (l += m.size, l), 0) === n || `Taille totale ${v.humanStorageSize(n)}`;
  };
}
const li = {
  computeServerRules: va
};
class ke {
  constructor(e, t, n, i, l, m, r, p, y, u, k, s) {
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
    this.formMetadataAndData = n, this.resourceId = t, this.context = p, this.resourceName = e, this.formApi = y, this.formSettings = v.deepMergeObject(
      Ce.getGlobalFormSetting(),
      i ?? {}
    ), this.formBind = v.deepMergeObject(
      v.deepMergeObject(Ce.getGlobalFormBind(), l ?? {}),
      {
        form: {
          default: {
            class: k,
            sectionContainerClass: s
          }
        }
      }
    ), this.formSlots = v.deepMergeObject(
      Ce.getBlobalFormSlot(),
      m ?? {}
    ), this.templateSlots = r, this.registerEventCallback = u ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: Ce.getGlobalFormSetting(),
      events: {},
      bindings: ht.getEmptyDefaultBindings().form,
      slots: bt.getEmptyDefaultSlots()
    };
  }
  static getForm(e, t, n, i, l, m, r, p, y, u, k, s) {
    return new ke(
      e,
      t,
      n,
      i,
      l,
      m,
      r,
      p,
      y,
      u,
      k,
      s
    ).generateFormDef();
  }
  generateFormDef() {
    const e = /* @__PURE__ */ new Map();
    for (const k of Object.keys(this.templateSlots))
      e.set(k, !1);
    const t = (k, s) => {
      const D = `${k}-${s ? s + "-" : ""}`;
      return Object.fromEntries(
        Object.entries(this.templateSlots).reduce(
          (d, h) => {
            if (h[0].includes(D) && h[1] !== void 0) {
              e.set(h[0], !0);
              const g = h[0].replace(D, "");
              d.push([g, Te(h[1])]);
            }
            return d;
          },
          []
        )
      );
    }, n = (k) => {
      for (let s of Object.values(k))
        s && (s = Te(s));
      return k;
    }, i = je.create(this.formApi);
    this.registerEventCallback(i);
    const l = /* @__PURE__ */ new Set(), m = je.getEventsObjectFromInstance(i), r = [];
    this.formMetadataAndData.form.sections.forEach(
      (k, s) => {
        var T;
        const D = [];
        k.fields.forEach((A) => {
          const Z = ke.getFieldTypeByFieldMetadata(A), G = ke.getFieldComponentByFieldType(Z), fe = v.deepMergeObject(
            v.deepMergeObject(
              this.formSlots.fields[Z],
              this.formSlots.fields.byName[A.field_name]
            ),
            t("field", A.field_name)
          ), ie = v.deepMergeObject(
            this.getBindingsByFormFieldType(Z),
            this.formBind.fields.byName[A.field_name]
          );
          let de = A.label;
          this.formSettings.requiredFieldsHasAsterisk && A.rules.find((re) => re.type === "required") && (de = de.concat("*"));
          const le = {
            type: Z,
            metadata: Object.freeze(A),
            label: de,
            readonly: this.formMetadataAndData.form.readonly ?? k.readonly ?? A.readonly ?? void 0,
            staticSelectOptions: A.static_select_options,
            associationData: A.field_association_data,
            attachmentData: A.field_attachment_data,
            rules: A.rules,
            computedRules: [],
            // late init
            bindings: ie,
            hidden: !1,
            mainComponent: Te(G),
            events: m.fields[A.field_name] ?? {},
            slots: n(fe)
          };
          le.computedRules = li.computeServerRules(
            le,
            this.formApi
          ), D.push(le), l.add(A.field_name);
        });
        const d = k.name ?? s.toString(), h = {
          ...this.formSlots.sections,
          ...t("section", d)
        }, g = ((T = this.formSlots.fields.byName[d]) == null ? void 0 : T.default) ?? this.formSlots.sections.default, F = v.deepMergeObject(
          this.formBind.sections.default,
          this.formBind.sections.byName[d]
        ), E = {
          label: k.label ?? void 0,
          icon: k.icon ?? void 0,
          hidden: !1,
          name: d,
          index: s,
          bindings: F,
          readonly: this.formMetadataAndData.form.readonly ?? k.readonly ?? void 0,
          events: m.sections[k.name ?? s.toString()] ?? {},
          mainComponent: Te(g),
          fieldsComponent: void 0,
          fields: D,
          slots: n(h)
        };
        r.push(E);
      }
    );
    const p = {
      ...this.formSlots.form,
      ...t("form", "")
    }, y = v.deepCloneObject(this.formBind.form), u = {
      sections: r,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      bindings: y,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: m.form,
      slots: n(p),
      context: this.context
    };
    l.size < this.formMetadataAndData.form.sections.reduce((k, s) => k + s.fields.length, 0) && Ie.log("Found fields with the same name");
    for (const k of e)
      k[1] !== !0 && Ie.log(`Found unused slot : ${k[0]}`);
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
      string: aa,
      color: ua,
      wysiwyg: oa,
      number: la,
      date: Hn,
      datetime: Qn,
      checkbox: Wn,
      select: Kn,
      belongsTo: Xn,
      hasMany: ta,
      attachmentHasOne: fa,
      attachmentHasMany: ga
    }[e];
  }
}
const ri = { class: "flex column" }, oi = /* @__PURE__ */ P({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = null, i = null, l = null;
    const m = gt(), r = {
      softReset: u,
      reset: k,
      clear: s,
      validate: h,
      isValid: g,
      isInvalid: F,
      hide: D,
      unhide: d,
      resetValidation: E,
      getFields: T,
      setReadonlyState: A,
      setIcon: Z,
      setLabel: G,
      tryFocusFirst: de,
      tryUnfocus: le,
      setBindings: he,
      section: t.section
    }, p = B(/* @__PURE__ */ new Map());
    function y() {
      t.section.fields.forEach((b) => {
        const w = b.metadata.field_name, Y = t.formApi.getFieldByName(w);
        Y && p.value.set(w, Y);
      });
    }
    function u() {
      p.value.forEach((b) => {
        b.softReset();
      });
    }
    function k() {
      p.value.forEach((b) => {
        b.reset();
      }), v.callAllEvents(t.section.events.onReset);
    }
    function s() {
      p.value.forEach((b) => {
        b.clear();
      }), v.callAllEvents(t.section.events.onClear);
    }
    function D() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (p.value.forEach((w) => {
        w.hide();
      }), b.hidden = !0, v.callAllEvents(t.section.events.onHide));
    }
    function d() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (p.value.forEach((w) => {
        w.unhide();
      }), b.hidden = !1, v.callAllEvents(t.section.events.onUnhide));
    }
    function h() {
      let b = !0;
      return p.value.forEach((w) => {
        if (!w.validate()) {
          b = !1;
          return;
        }
      }), v.callAllEvents(t.section.events.onValidated), b;
    }
    function g() {
      let b = !0;
      return p.value.forEach((w) => {
        if (!w.isValid()) {
          b = !1;
          return;
        }
      }), b;
    }
    function F() {
      return !g();
    }
    function E() {
      p.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function T() {
      return p.value;
    }
    function A(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      if (w) {
        w.readonly = b;
        for (const Y of T().values())
          Y.setReadonlyState(b);
      }
    }
    function Z(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.icon = b);
    }
    function G(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.label = b);
    }
    function fe() {
      const b = {};
      for (const [w, Y] of p.value)
        b[w] = Y.getValueSerialized();
      return b;
    }
    function ie() {
      const b = m.default;
      if (!b) {
        console.error(
          "Submit64 : did not found fields slot for section " + t.section.name
        );
        return;
      }
      const w = P({
        inheritAttrs: !1,
        setup(Y, { attrs: we, slots: pe }) {
          return () => b(
            {
              ...Y,
              ...we
            },
            pe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(
        t.section,
        Te(w)
      );
    }
    function de() {
      for (const b of T().values())
        if (b.tryFocus(), b.isFocus())
          return !0;
      return !1;
    }
    function le() {
      for (const b of T().values())
        if (b.tryUnfocus(), !b.isFocus())
          return !0;
      return !1;
    }
    function re() {
      return t.privateFormApi.getSectionRef(
        t.section.name ?? t.section.index
      );
    }
    function he(b) {
      const w = re();
      w.bindings = v.deepMergeObject(w.bindings, b);
    }
    e(r);
    const Ve = ae(() => g()), Se = ae(() => F()), Ne = ae(() => fe());
    return W(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        n == null || n(), n = null, b && (n = W(Ve, (w) => {
          w && v.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        i == null || i(), i = null, b && (i = W(Se, (w) => {
          var Y;
          w && v.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onUpdate;
      },
      (b) => {
        l == null || l(), l = null, b && (l = W(
          Ne,
          () => {
            var w;
            v.callAllEvents((w = t.section) == null ? void 0 : w.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(() => {
      var w;
      ie();
      const b = (w = Ze()) == null ? void 0 : w.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), Fe(() => {
        var Y;
        y(), v.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onReady);
      });
    }), (b, w) => Xe((o(), N("div", ri, [
      t.section.slots["wrapper-before"] ? (o(), x(M(t.section.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), x(M(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.slots["wrapper-after"] ? (o(), x(M(t.section.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [et, t.section.hidden !== !0]
    ]);
  }
}), si = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, ui = ["index"], di = /* @__PURE__ */ P({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = () => !0, i = () => !0, l = () => {
    }, m = () => {
    }, r = () => {
    }, p = () => {
    }, y = () => {
    };
    const u = B(""), k = B(!1), s = B([]);
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
      u.value = h(_), v.callAllEvents(t.field.events.onReset), m(), Fe(() => {
        Se();
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
    function F() {
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
    function A() {
      return g(f(u));
    }
    function Z(_) {
      s.value = _;
    }
    function G() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function fe() {
      const _ = G();
      _.hidden = !0, v.callAllEvents(t.field.events.onHide);
    }
    function ie() {
      const _ = G();
      _.hidden = !1, v.callAllEvents(t.field.events.onUnhide);
    }
    function de(_) {
      const U = G();
      U.readonly = _;
    }
    function le(_) {
      const U = G();
      U.label = _;
    }
    function re() {
      const _ = n();
      return v.callAllEvents(t.field.events.onValidated), _;
    }
    function he() {
      return i();
    }
    function Ve() {
      return !he();
    }
    function Se() {
      return l();
    }
    function Ne() {
      k.value || (p(), k.value = !0);
    }
    function b() {
      k.value && (y(), k.value = !1);
    }
    function w() {
      return k.value;
    }
    function Y(_) {
      const U = G();
      U.bindings = v.deepMergeObject(U.bindings, _);
    }
    function we(_, U, me, xe, Oe, $e, Re) {
      n = _, i = U, l = me, xe && (m = xe), Oe && (r = Oe), $e && (p = $e), Re && (y = Re);
    }
    const pe = {
      softReset: D,
      reset: d,
      clear: F,
      validate: re,
      isValid: he,
      isInvalid: Ve,
      hide: fe,
      unhide: ie,
      resetValidation: Se,
      getValueDeserialized: A,
      getValueSerialized: T,
      setupBackendErrors: Z,
      setReadonlyState: de,
      setLabel: le,
      tryFocus: Ne,
      tryUnfocus: b,
      isFocus: w,
      setBindings: Y,
      setValue: E,
      field: t.field,
      refs: {
        modelValue: _e(u),
        isFocused: _e(k),
        backendErrors: _e(s)
      }
    };
    return e(pe), W(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        v.callAllEvents(t.field.events.onUpdate);
      }
    ), W(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? u.value : null,
      (_) => {
        _ ? v.callAllEvents(t.field.events.onIsValid) : v.callAllEvents(t.field.events.onIsInvalid);
      }
    ), K(() => {
      var U, me;
      D();
      const _ = (U = Ze()) == null ? void 0 : U.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), v.callAllEvents((me = t.field) == null ? void 0 : me.events.onReady);
    }), (_, U) => Xe((o(), N("div", null, [
      t.field.slots["wrapper-before"] ? (o(), x(M(t.field.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        fieldApi: pe
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), x(M(t.field.mainComponent), {
        modelValue: u.value,
        fieldApi: pe,
        formApi: t.formApi,
        reset: d,
        clear: F,
        getValueDeserialized: A,
        getValueSerialized: T,
        validate: re,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: we
      }, null, 8, ["modelValue", "formApi"])),
      t.field.slots["wrapper-after"] ? (o(), x(M(t.field.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        fieldApi: pe
      }, null, 8, ["formApi"])) : I("", !0),
      s.value.length > 0 ? (o(), N("div", si, [
        (o(!0), N(ee, null, j(s.value, (me, xe) => (o(), N("div", {
          index: xe,
          class: "flex column"
        }, L(me), 9, ui))), 256))
      ])) : I("", !0)
    ], 512)), [
      [et, t.field.hidden !== !0]
    ]);
  }
}), mi = /* @__PURE__ */ P({
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
    let n = null, i = "", l = 0, m = 0, r = null, p = null, y = null, u = null;
    const k = gt(), s = B(ke.getEmptyFormBeforeInit()), D = B(!1), d = B(!1), h = B(!1), g = B(!1), F = B("create"), E = B({}), T = B(/* @__PURE__ */ new Map()), A = B(/* @__PURE__ */ new Map());
    async function Z() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), s.value = ke.getForm(
        t.resourceName,
        t.resourceId,
        n,
        t.formSettings,
        t.formBindings,
        t.formSlots,
        fe(),
        t.context,
        ge,
        t.eventManager,
        t.class,
        t.sectionContainerClass
      ), l = s.value.sections.length, m = s.value.sections.reduce((c, V) => (c += V.fields.length, c), 0), t.resourceId && (F.value = "edit"), We(n.context);
    }
    async function G() {
      var $, be, Pe;
      if (!le())
        return;
      v.callAllEvents(($ = s.value) == null ? void 0 : $.events.onSubmit), g.value = !0, w();
      const c = ie(), V = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: s.value.context
      });
      if (u = V.resource_data, We(V.context), V.success)
        E.value = {}, F.value === "create" && (F.value = "edit"), n && V.resource_data && (n.resource_data = V.resource_data), s.value = ke.getForm(
          t.resourceName,
          t.resourceId,
          {
            form: V.form,
            resource_data: V.resource_data,
            context: ge.form.context ?? {}
          },
          t.formSettings,
          t.formBindings,
          t.formSlots,
          fe(),
          s.value.context,
          ge,
          t.eventManager,
          t.class,
          t.sectionContainerClass
        ), Ve(), i = JSON.stringify(ie()), v.callAllEvents((Pe = s.value) == null ? void 0 : Pe.events.onSubmitSuccess);
      else {
        E.value = {};
        const Ue = [];
        for (const [ve, Ot] of A.value) {
          const it = V.errors[ve];
          it && (Ot.setupBackendErrors(it), Ue.push(ve));
        }
        Object.entries(V.errors).forEach((ve) => {
          Ue.includes(ve[0]) || (E.value[ve[0]] = ve[1]);
        }), v.callAllEvents((be = s.value) == null ? void 0 : be.events.onSubmitUnsuccess);
      }
      g.value = !1;
    }
    function fe() {
      const c = {};
      for (const V in k) {
        const $ = k[V];
        if ($) {
          const be = P({
            inheritAttrs: !1,
            setup(Pe, { attrs: Ue, slots: ve }) {
              return () => $({
                ...Pe,
                ...Ue,
                innerSlots: ve
              });
            }
          });
          c[V] = be;
        }
      }
      return c;
    }
    function ie() {
      const c = {};
      for (const [V, $] of A.value)
        c[V] = $.getValueDeserialized();
      return c;
    }
    function de() {
      const c = {};
      for (const [V, $] of A.value)
        c[V] = $.getValueSerialized();
      return c;
    }
    function le() {
      var V;
      let c = !0;
      return A.value.forEach(($) => {
        if (!$.validate()) {
          c = !1;
          return;
        }
      }), v.callAllEvents((V = s.value) == null ? void 0 : V.events.onValidated), c;
    }
    function re() {
      let c = !0;
      return A.value.forEach((V) => {
        if (!V.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function he() {
      return !re();
    }
    function Ve() {
      T.value.forEach((c) => {
        c.softReset();
      });
    }
    function Se() {
      var c;
      A.value.forEach((V) => {
        V.reset();
      }), v.callAllEvents((c = s.value) == null ? void 0 : c.events.onReset);
    }
    function Ne() {
      var c;
      A.value.forEach((V) => {
        V.clear();
      }), v.callAllEvents((c = s.value) == null ? void 0 : c.events.onClear);
    }
    function b() {
      A.value.forEach((c) => {
        c.resetValidation();
      });
    }
    function w() {
      A.value.forEach((c) => {
        c.setupBackendErrors([]);
      });
    }
    function Y(c) {
      if (n)
        return n.resource_data[c];
    }
    function we(c) {
      return T.value.get(c);
    }
    function pe(c) {
      return [...T.value.values()].at(c);
    }
    function _() {
      return T.value;
    }
    function U(c) {
      return A.value.get(c);
    }
    function me() {
      return A.value;
    }
    function xe() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0,
        context: {}
      }));
    }
    function Oe() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((V) => {
        (t[V] === null || t[V] === void 0) && Ie.log(`Missing props for <Submit64> -> ${V}`);
      });
    }
    function $e() {
      return f(F);
    }
    function Re() {
      return i !== JSON.stringify(ie());
    }
    function We(c) {
      s.value && (s.value.context = c);
    }
    function _t(c) {
      s.value && (s.value.readonly = c);
    }
    function At(c) {
      s.value && v.deepMergeObject(s.value.formSettings, c);
    }
    function kt(c) {
      s.value && v.deepMergeObject(s.value.bindings, c);
    }
    function Ft() {
      return h.value;
    }
    function Vt() {
      return u;
    }
    function tt() {
      for (const c of _().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function St() {
      for (const c of _().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function xt() {
      return s;
    }
    function Ct(c) {
      var V;
      return (V = s.value) == null ? void 0 : V.sections.find(($) => $.name === c);
    }
    function Dt(c) {
      var V;
      return (V = s.value) == null ? void 0 : V.sections.map(($) => $.fields).flat().find(($) => $.metadata.field_name === c);
    }
    function Et(c, V) {
      T.value.set(c, V), l === T.value.size && (D.value = !0);
    }
    function Nt(c, V) {
      A.value.set(c, V), m === A.value.size && (d.value = !0);
    }
    function wt(c, V) {
      c.fieldsComponent = V;
    }
    const nt = ae(() => re()), Tt = ae(() => he()), Bt = ae(() => de()), at = {
      getFormRef: xt,
      getSectionRef: Ct,
      getFieldRef: Dt,
      registerSectionWrapperRef: Et,
      registerFieldWrapperRef: Nt,
      setSectionFieldComponent: wt
    }, It = new Proxy({}, {
      get(c, V) {
        var $;
        return ($ = s.value) == null ? void 0 : $[V];
      }
    }), ge = {
      getMode: $e,
      getSectionByName: we,
      getSectionByIndex: pe,
      getSections: _,
      getFieldByName: U,
      getFields: me,
      validate: le,
      isValid: re,
      isInvalid: he,
      softReset: Ve,
      reset: Se,
      clear: Ne,
      resetValidation: b,
      submit: G,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Y,
      getAssociationDataCallback: xe,
      setContext: We,
      setReadonlyState: _t,
      setSettings: At,
      setBindings: kt,
      isReady: Ft,
      getSubmitData: Vt,
      tryFocusFirst: tt,
      tryUnfocus: St,
      form: It,
      refs: {
        orphanErrors: _e(E),
        isLoadingSubmit: _e(g),
        setupIsDone: _e(h),
        isFormValid: _e(nt)
      }
    };
    return e(ge), W(
      () => D.value && d.value,
      (c) => {
        var V;
        c && !h.value && (v.callAllEvents((V = s.value) == null ? void 0 : V.events.onReady), h.value = !0);
      }
    ), W(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        r == null || r(), r = null, c && (r = W(nt, (V) => {
          var $;
          V && v.callAllEvents(($ = s.value) == null ? void 0 : $.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        p == null || p(), p = null, c && (p = W(Tt, (V) => {
          var $;
          V && v.callAllEvents(($ = s.value) == null ? void 0 : $.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var c;
        return (c = s.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        y == null || y(), y = null, c && (y = W(
          Bt,
          () => {
            var V;
            v.callAllEvents((V = s.value) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      Oe(), await Z(), Fe(() => {
        i = JSON.stringify(ie()), s.value.formSettings.autofocus && tt();
      });
    }), (c, V) => Xe((o(), N("div", {
      class: lt(s.value.bindings.default.class ?? "flex column")
    }, [
      J("div", {
        class: lt(
          s.value.bindings.default.sectionContainerClass ?? "flex column q-pa-sm q-gutter-sm"
        )
      }, [
        (o(!0), N(ee, null, j(s.value.sections, ($) => (o(), x(oi, {
          key: $.name,
          section: $,
          formApi: ge,
          privateFormApi: at
        }, {
          default: S(() => [
            (o(!0), N(ee, null, j($.fields, (be) => (o(), x(di, {
              key: be.metadata.field_name,
              field: be,
              formApi: ge,
              privateFormApi: at
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      s.value.slots["orphan-errors"] ? (o(), x(M(s.value.slots.orphanErrors), {
        key: 0,
        formApi: ge
      })) : I("", !0),
      s.value.slots.actions ? (o(), x(M(s.value.slots.actions), {
        key: 1,
        formApi: ge
      })) : I("", !0)
    ], 2)), [
      [et, h.value]
    ]);
  }
});
export {
  je as DynamicLogicBuilder,
  Ce as Submit64,
  mi as Submit64Form
};
