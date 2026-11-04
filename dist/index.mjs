var Nt = Object.defineProperty;
var wt = (n, e, t) => e in n ? Nt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var U = (n, e, t) => wt(n, typeof e != "symbol" ? e + "" : e, t);
import { date as he, QBtn as K, QUploaderAddTrigger as rt, QList as Le, QItem as Ce, QItemSection as le, QItemLabel as re, QSeparator as ot, QIcon as se, QPopupProxy as Me, QColor as Bt, QDate as st, QTime as Tt, QInput as Oe, QCheckbox as It, QSelect as Ge, QEditor as Ot, Lang as Ee, IconSet as Ne, QUploader as ut } from "quasar";
import { defineComponent as R, openBlock as s, createElementBlock as N, createElementVNode as G, toDisplayString as q, createBlock as C, unref as f, withCtx as S, createVNode as x, createCommentVNode as I, computed as te, Fragment as Z, renderList as M, createTextVNode as ee, normalizeProps as z, mergeProps as $, guardReactiveProps as H, ref as T, resolveDynamicComponent as L, getCurrentInstance as We, renderSlot as $t, onMounted as W, nextTick as Ae, createSlots as X, watch as Y, markRaw as we, useSlots as dt, withDirectives as Je, vShow as Ke, readonly as be, normalizeClass as nt } from "vue";
function Rt(n) {
  for (const e of n ?? [])
    e();
}
function Pt(n) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(n.toString(), 10) >= 1024 && t < e.length - 1; )
    n /= 1024, ++t;
  return `${n.toFixed(1)}${e[t]}`;
}
function ct(n, e, t = {
  deepClone: !0
}) {
  let i = n ?? {}, a = e ?? {};
  t.deepClone && (i = Te(i), a = Te(a));
  for (const l of Object.keys(a)) {
    const p = a[l], r = i[l];
    p && typeof p == "object" && !Array.isArray(p) && r && typeof r == "object" && !Array.isArray(r) ? i[l] = ct(
      r,
      p,
      t
    ) : p !== void 0 && (i[l] = p);
  }
  return i;
}
function Te(n) {
  if (typeof n == "function" || n === null || typeof n != "object")
    return n;
  if (Array.isArray(n))
    return n.map((t) => Te(t));
  const e = {};
  for (const t of Object.keys(n))
    e[t] = Te(n[t]);
  return e;
}
function Ut(n, e) {
  const t = he.extractDate(n, e);
  if (!Number.isNaN(t.getTime()))
    return t;
  const i = new Date(n);
  return Number.isNaN(i.getTime()) ? t : i;
}
const v = {
  callAllEvents: Rt,
  humanStorageSize: Pt,
  deepMergeObject: ct,
  deepCloneObject: Te,
  superExtractDate: Ut
}, ye = {
  color: "primary"
};
function zt(n) {
  return n("input");
}
function qt(n) {
  return n("input");
}
function Lt(n) {
  return {
    input: {
      ...n("input")
    },
    icon: {
      ...n("icon"),
      name: "colorize",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...n("menu")
    },
    color: {
      ...n("color")
    }
  };
}
function Mt(n) {
  const e = {
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
    contentStyle: n("editor").contentStyle,
    fonts: e
  };
}
function Ht(n) {
  return {
    ...n("checkbox")
  };
}
function jt(n) {
  return {
    input: {
      ...n("input")
    },
    icon: {
      ...n("icon"),
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...n("menu")
    },
    date: {
      ...n("date"),
      color: ye.color
    },
    btn: {
      ...n("btn"),
      label: "Fermer",
      color: ye.color
    }
  };
}
function Qt(n) {
  return {
    input: {
      ...n("input")
    },
    iconDate: {
      ...n("icon"),
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...n("menu")
    },
    date: {
      ...n("date"),
      color: ye.color
    },
    btnDate: {
      ...n("btn"),
      label: "Fermer",
      color: ye.color
    },
    iconDatetime: {
      ...n("icon"),
      name: "access_time",
      class: "cursor-pointer"
    },
    popupProxyDatetime: {
      ...n("menu")
    },
    datetime: {
      ...n("time"),
      format24h: !0
    },
    btnDatetime: {
      ...n("btn"),
      label: "Fermer",
      color: ye.color
    }
  };
}
function Yt(n) {
  return {
    select: {
      ...n("select")
    }
  };
}
function Gt(n) {
  return {
    select: {
      ...n("select")
    }
  };
}
function Wt(n) {
  return {
    select: {
      ...n("select")
    }
  };
}
function Jt(n) {
  return {
    uploader: {
      ...n("uploader"),
      color: ye.color
    }
  };
}
function Kt(n) {
  return {
    uploader: {
      ...n("uploader"),
      color: ye.color
    }
  };
}
function Zt() {
  return {};
}
function Xt(n) {
  return {
    submitBtn: {
      ...n("btn"),
      label: "Enregistrer"
    },
    resetBtn: {
      ...n("btn"),
      label: "Réinitialiser"
    },
    clearBtn: {
      ...n("btn"),
      label: "Effacer"
    }
  };
}
function en(n) {
  const e = an(n);
  return {
    fields: {
      string: zt(e),
      number: qt(e),
      wysiwyg: Mt(e),
      color: Lt(e),
      checkbox: Ht(e),
      date: jt(e),
      datetime: Qt(e),
      select: Wt(e),
      hasMany: Gt(e),
      belongsTo: Yt(e),
      attachmentHasOne: Jt(e),
      attachmentHasMany: Kt(e),
      byName: {}
    },
    sections: {
      default: Zt(),
      byName: {}
    },
    form: {
      default: {},
      actions: Xt(e)
    }
  };
}
function tn() {
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
function nn() {
  return () => ({});
}
function an(n) {
  return (e) => Object.fromEntries(
    Object.entries(n(e)).reduce(
      (t, i) => {
        if (!i[1])
          return t;
        let a = i[1].default;
        return typeof a == "function" && (a = a()), t.push([i[0], a]), t;
      },
      []
    )
  );
}
const qe = {
  getDefaultFormBindings: en,
  getEmptyDefaultBindings: tn,
  getDefaultBindingCallback: nn
}, ln = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, rn = { class: "col" }, on = { class: "q-uploader__title" }, sn = /* @__PURE__ */ R({
  __name: "HeaderUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), N("div", ln, [
      G("div", rn, [
        G("div", on, q(e.fieldApi.field.label), 1)
      ]),
      n.defaultProps.canAddFiles ? (s(), C(f(K), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: n.defaultProps.pickFiles,
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
}), un = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, dn = { class: "col" }, cn = { class: "q-uploader__title" }, fn = /* @__PURE__ */ R({
  __name: "HeaderUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n, t = te(() => {
      var i, a;
      return e.fieldApi.refs.modelValue.value ? (((i = e.fieldApi.field.attachmentData) == null ? void 0 : i.length) ?? 0) === 0 || (((a = e.fieldApi.field.attachmentData) == null ? void 0 : a.length) ?? !0) && e.fieldApi.refs.modelValue.value.delete.length === 1 : !0;
    });
    return (i, a) => (s(), N("div", un, [
      G("div", dn, [
        G("div", cn, q(e.fieldApi.field.label), 1)
      ]),
      n.defaultProps.canAddFiles && t.value ? (s(), C(f(K), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: n.defaultProps.pickFiles,
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
}, vn = { class: "text-weight-medium text-body2" }, hn = /* @__PURE__ */ R({
  __name: "ListUploaderHasMany",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    function t(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete.push(p.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function i(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = r.delete.filter((m) => m !== p.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    const a = te(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = te(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (p, r) => {
      var m;
      return s(), N(Z, null, [
        a.value ? I("", !0) : (s(), N("div", mn, [
          G("div", pn, " Fichier" + q((((m = e.fieldApi.field.attachmentData) == null ? void 0 : m.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne ", 1),
          x(f(Le), { separator: "" }, {
            default: S(() => [
              (s(!0), N(Z, null, M(e.fieldApi.field.attachmentData ?? [], (y) => (s(), C(f(Ce), {
                key: y.attachment_id
              }, {
                default: S(() => [
                  x(f(le), null, {
                    default: S(() => [
                      x(f(re), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          ee(q(y.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(f(re), { caption: "" }, {
                        default: S(() => [
                          ee(q(f(v).humanStorageSize(y.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  e.fieldApi.refs.modelValue.value ? (s(), C(f(le), {
                    key: 0,
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      l.value.includes(y.attachment_id) ? I("", !0) : (s(), C(f(K), {
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
                      l.value.includes(y.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (s(), C(f(K), {
                        key: 1,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "refresh",
                        onClick: (u) => i(y)
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
        !a.value && n.defaultProps.files.length > 0 ? (s(), C(f(ot), { key: 1 })) : I("", !0),
        n.defaultProps.files.length > 0 ? (s(), N("div", gn, [
          G("div", vn, " Fichier" + q(n.defaultProps.files.length > 0 ? "s" : "") + " à ajouter ", 1),
          x(f(Le), { separator: "" }, {
            default: S(() => [
              (s(!0), N(Z, null, M(n.defaultProps.files, (y) => (s(), C(f(Ce), {
                key: y.__key
              }, {
                default: S(() => [
                  x(f(le), null, {
                    default: S(() => [
                      x(f(re), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          ee(q(y.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(f(re), { caption: "" }, {
                        default: S(() => [
                          ee(q(y.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  x(f(le), {
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      x(f(K), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (u) => n.defaultProps.removeFile(y)
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
}, _n = /* @__PURE__ */ R({
  __name: "ListUploaderHasOne",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    function t(p) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = [p.attachment_id], e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function i() {
      let p = e.fieldApi.refs.modelValue.value;
      p.delete = [], e.fieldApi.setValue(p), e.fieldApi.validate();
    }
    const a = te(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = te(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (p, r) => (s(), N(Z, null, [
      a.value ? I("", !0) : (s(), N("div", bn, [
        r[0] || (r[0] = G("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
        x(f(Le), { separator: "" }, {
          default: S(() => [
            (s(!0), N(Z, null, M(e.fieldApi.field.attachmentData ?? [], (m) => (s(), C(f(Ce), {
              key: m.attachment_id
            }, {
              default: S(() => [
                x(f(le), null, {
                  default: S(() => [
                    x(f(re), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        ee(q(m.filename), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(f(re), { caption: "" }, {
                      default: S(() => [
                        ee(q(f(v).humanStorageSize(m.size)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                e.fieldApi.refs.modelValue.value ? (s(), C(f(le), {
                  key: 0,
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    l.value.includes(m.attachment_id) ? I("", !0) : (s(), C(f(K), {
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
                    l.value.includes(m.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (s(), C(f(K), {
                      key: 1,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "refresh",
                      onClick: i
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
      !a.value && n.defaultProps.files.length > 0 ? (s(), C(f(ot), { key: 1 })) : I("", !0),
      n.defaultProps.files.length > 0 ? (s(), N("div", yn, [
        r[1] || (r[1] = G("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
        x(f(Le), { separator: "" }, {
          default: S(() => [
            (s(!0), N(Z, null, M(n.defaultProps.files, (m) => (s(), C(f(Ce), {
              key: m.__key
            }, {
              default: S(() => [
                x(f(le), null, {
                  default: S(() => [
                    x(f(re), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        ee(q(m.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(f(re), { caption: "" }, {
                      default: S(() => [
                        ee(q(m.__sizeLabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                x(f(le), {
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    x(f(K), {
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => n.defaultProps.removeFile(m)
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
}), An = /* @__PURE__ */ R({
  __name: "ColorPicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => e.fieldApi.field.readonly ? (s(), C(f(se), z($({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (s(), C(f(se), z($({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(f(Me), z(H(e.fieldApi.field.bindings.popupProxy)), {
          default: S(() => [
            x(f(Bt), $(e.fieldApi.field.bindings.color, {
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
}), kn = { class: "row items-center justify-end" }, Fn = /* @__PURE__ */ R({
  __name: "IconDatePicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n, t = T();
    function i() {
      t.value && t.value.hide();
    }
    return (a, l) => e.fieldApi.field.readonly ? (s(), C(f(se), z($({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (s(), C(f(se), z($({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(f(Me), $({
          ref_key: "popupProxyRef",
          ref: t
        }, e.fieldApi.field.bindings.popupProxy), {
          default: S(() => [
            x(f(st), $(e.fieldApi.field.bindings.date, {
              "model-value": e.fieldApi.refs.modelValue.value,
              mask: e.formApi.form.formSettings.dateFormat,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), {
              default: S(() => [
                G("div", kn, [
                  x(f(K), $(e.fieldApi.field.bindings.btn, { onClick: i }), null, 16)
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
const Vn = { class: "row items-center justify-end" }, Sn = { class: "row items-center justify-end" }, Cn = /* @__PURE__ */ R({
  __name: "IconDatetimePicker",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n, t = T(), i = T();
    function a() {
      t.value && t.value.hide();
    }
    function l() {
      i.value && i.value.hide();
    }
    function p() {
      if (e.formApi.form.formSettings.enableQuasarBigBangComponents) {
        const r = We(), m = r == null ? void 0 : r.appContext.components["qbb-time"];
        if (m)
          return m;
        Ie.log("Component QBBTime from Quasar BigBang not found");
      }
      return Tt;
    }
    return (r, m) => e.fieldApi.field.readonly ? (s(), N(Z, { key: 1 }, [
      x(f(se), z(H(e.fieldApi.field.bindings.iconDate)), null, 16),
      x(f(se), z(H(e.fieldApi.field.bindings.iconDatetime)), null, 16)
    ], 64)) : (s(), N(Z, { key: 0 }, [
      x(f(se), z(H(e.fieldApi.field.bindings.iconDate)), {
        default: S(() => [
          x(f(Me), $({
            ref_key: "datePopupProxyRef",
            ref: t
          }, e.fieldApi.field.bindings.popupProxyDate), {
            default: S(() => [
              x(f(st), $(e.fieldApi.field.bindings.date, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  G("div", Vn, [
                    x(f(K), $(e.fieldApi.field.bindings.btnDate, { onClick: a }), null, 16)
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
      x(f(se), z(H(e.fieldApi.field.bindings.iconDatetime)), {
        default: S(() => [
          x(f(Me), $({
            ref_key: "timePopupProxyRef",
            ref: i
          }, e.fieldApi.field.bindings.popupProxyDatetime), {
            default: S(() => [
              (s(), C(L(p()), $(e.fieldApi.field.bindings.datetime, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  G("div", Sn, [
                    x(f(K), $(e.fieldApi.field.bindings.btnDatetime, { onClick: l }), null, 16)
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
}), it = /* @__PURE__ */ R({
  __name: "AssociationDisplayComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), C(f(Ce), z(H(e.defaultProps.itemProps)), {
      default: S(() => [
        x(f(le), null, {
          default: S(() => [
            x(f(re), null, {
              default: S(() => [
                ee(q(e.defaultProps.opt.label), 1)
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
}), Qe = /* @__PURE__ */ R({
  __name: "NoOptionComponent",
  props: {
    defaultProps: {},
    formApi: {},
    fieldApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), C(f(Ce), z(H(e.fieldApi.field.bindings.itemNoOption)), {
      default: S(() => [
        x(f(le), null, {
          default: S(() => [
            x(f(re), null, {
              default: S(() => [
                ee(q(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), xn = { class: "flex column" }, Dn = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, En = /* @__PURE__ */ R({
  __name: "ActionComponent",
  props: {
    formApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), N("div", xn, [
      G("div", Dn, [
        x(f(K), $(e.formApi.form.bindings.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (s(), C(f(K), $({ key: 0 }, e.formApi.form.bindings.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.form.formSettings.showClearButton ? (s(), C(f(K), $({ key: 1 }, e.formApi.form.bindings.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), Nn = { class: "flex column" }, wn = /* @__PURE__ */ R({
  __name: "OrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), N("div", Nn, [
      (s(!0), N(Z, null, M(e.formApi.refs.orphanErrors.value, (a, l) => (s(), N("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, q(l) + " : " + q(a.join(",")), 1))), 128))
    ]));
  }
}), Bn = { class: "propsComponent.sectionApi.section.bindings.class" }, Tn = { class: "flex row items-center" }, In = { class: "text-body1 text-weight-medium" }, On = { class: "flex column q-gutter-md" }, $n = /* @__PURE__ */ R({
  __name: "SectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), N("div", Bn, [
      G("div", Tn, [
        e.sectionApi.section.icon ? (s(), C(f(se), $({ key: 0 }, e.sectionApi.section.bindings.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : I("", !0),
        G("div", In, q(e.sectionApi.section.label), 1)
      ]),
      G("div", On, [
        (s(), C(L(e.sectionApi.section.fieldsComponent)))
      ])
    ]));
  }
});
function Rn() {
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
        "no-option": Qe
      },
      hasMany: {
        "no-option": Qe,
        option: it
      },
      belongsTo: {
        "no-option": Qe,
        option: it
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
      default: $n,
      byName: {}
    },
    form: {
      actions: En,
      orphanErrors: wn
    }
  };
}
function Pn() {
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
const ft = {
  getDefaultFormSlots: Rn,
  getEmptyDefaultSlots: Pn
}, Be = class Be {
  constructor() {
    U(this, "_formSettings");
    U(this, "_formBindings");
    U(this, "_formSlots");
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
      enableQuasarBigBangComponents: !1,
      getBindingsCb: qe.getDefaultBindingCallback()
    }, this._formBindings = qe.getDefaultFormBindings(this._formSettings.getBindingsCb), this._formSlots = ft.getDefaultFormSlots();
  }
  static registerGlobalFormSetting(e) {
    const t = this._instance._formSettings.getBindingsCb;
    this._instance._formSettings = v.deepMergeObject(
      this._instance._formSettings,
      e
    );
    const i = this._instance._formSettings.getBindingsCb;
    i && t !== i && Be.registerGlobalFormBindings(qe.getDefaultFormBindings(i));
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
U(Be, "_instance", new Be());
let Se = Be;
class He {
  constructor(e) {
    U(this, "formApi");
    U(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const i = e, a = t, l = new Un(i, a, this.formApi);
    return this.events.push(l), new zn(l);
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
    return e.events.forEach((i) => {
      const a = i.getTarget();
      switch (a.target) {
        case "field":
          t.fields[a.targetName] || (t.fields[a.targetName] = {}), t.fields[a.targetName][a.key] || (t.fields[a.targetName][a.key] = []), t.fields[a.targetName][a.key].push(i.getActionCallback());
          break;
        case "section":
          t.sections[a.targetName] || (t.sections[a.targetName] = {}), t.sections[a.targetName][a.key] || (t.sections[a.targetName][a.key] = []), t.sections[a.targetName][a.key].push(i.getActionCallback());
          break;
        case "form":
          t.form[a.key] || (t.form[a.key] = []), t.form[a.key].push(
            i.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class Un {
  constructor(e, t, i) {
    U(this, "type");
    U(this, "data");
    U(this, "formApi");
    U(this, "action", () => {
    });
    U(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
    this.type = e, this.data = t, this.formApi = i;
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
class zn {
  constructor(e) {
    U(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
  do(e) {
    return this.formEvent.action = e, this;
  }
}
const qn = { style: { "font-weight": "500", padding: "4px 0" } }, ue = /* @__PURE__ */ R({
  __name: "FieldLabel",
  props: {
    name: {}
  },
  setup(n) {
    const e = n;
    return (t, i) => (s(), N("div", qn, [
      $t(t.$slots, "default", {}, () => [
        ee(q(e.name), 1)
      ])
    ]));
  }
}), Ln = { class: "flex column" }, Mn = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        p,
        r
      ), Ae(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, y) => (s(), N("div", Ln, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Oe), $({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((o) => [
            (s(), C(L(u), z(H({
              defaultProps: o ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Hn = { class: "flex column" }, jn = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        p,
        r
      ), Ae(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, y) => (s(), N("div", Hn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Oe), $({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((o) => [
            (s(), C(L(u), z(H({
              defaultProps: o ?? {},
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
}, Gn = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T(!0);
    function i() {
      for (const p of e.fieldApi.field.computedRules)
        if (t.value = p(e.modelValue), t.value !== !0)
          break;
      return a();
    }
    function a() {
      return t.value === !0;
    }
    function l() {
      t.value = !0;
    }
    return Y(
      () => e.modelValue,
      () => {
        e.fieldApi.validate();
      }
    ), W(() => {
      e.registerBehaviourCallbacks(i, a, l);
    }), (p, r) => (s(), N("div", Qn, [
      x(f(It), $({ ref: "checkboxRef" }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        label: e.fieldApi.field.label,
        "aria-readonly": e.fieldApi.field.readonly,
        class: "q-pb-md",
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (m, y) => ({
          name: y,
          fn: S((u) => [
            (s(), C(L(m), z(H({
              defaultProps: u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "aria-readonly", "onUpdate:modelValue"]),
      t.value !== !0 ? (s(), N("div", Yn, q(t.value), 1)) : I("", !0)
    ]));
  }
}), Wn = { class: "flex column" }, Jn = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T([]), i = T([]), a = T();
    function l(D, d) {
      if (D === "") {
        d(() => {
          i.value = [...t.value];
        });
        return;
      }
      d(() => {
        const h = D.toLowerCase();
        i.value = t.value.filter((g) => g.label.toLowerCase().includes(h));
      });
    }
    function p() {
      t.value = Object.freeze(
        e.fieldApi.field.staticSelectOptions ?? []
      ), i.value = e.fieldApi.field.staticSelectOptions ?? [];
    }
    function r() {
      return a.value ? a.value.validate() : !1;
    }
    function m() {
      return a.value ? !a.value.hasError : !1;
    }
    function y() {
      a.value && a.value.resetValidation();
    }
    function u() {
      i.value = [];
    }
    function k() {
      a.value && a.value.focus();
    }
    function o() {
      a.value && a.value.blur();
    }
    return W(() => {
      p(), e.registerBehaviourCallbacks(
        r,
        m,
        y,
        void 0,
        u,
        k,
        o
      );
    }), (D, d) => (s(), N("div", Wn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Ge), $({
        ref_key: "fieldRef",
        ref: a
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        options: i.value,
        mapOptions: !0,
        emitValue: !0,
        useInput: !0,
        onClear: e.clear,
        onFilter: l,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (h, g) => ({
          name: g,
          fn: S((F) => [
            (s(), C(L(h), z(H({
              defaultProps: F ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Kn = { class: "flex column" }, at = "__init", Zn = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T([]), i = T(
      p()
    ), a = T(), l = T(at);
    function p() {
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
      i.value = p(), l.value = g;
      const B = e.formApi.form;
      i.value.isLoading = !0, E({
        resourceName: B.resourceName,
        resourceId: B.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: g,
        context: B.context
      }).then((A) => {
        F(() => {
          e.formApi.setContext(A.context), t.value = A.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            A.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], i.value = p();
      });
    }
    function m() {
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
      return a.value ? a.value.validate() : !1;
    }
    function u() {
      return a.value ? !a.value.hasError : !1;
    }
    function k() {
      a.value && a.value.resetValidation();
    }
    function o() {
      i.value = p(), t.value = [], l.value = at;
    }
    function D(g) {
      const F = t.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage <= i.value.lastPage && g.to === F && F !== -1) {
        const E = e.formApi.form, B = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, B({
          resourceName: E.resourceName,
          resourceId: E.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: l.value,
          context: E.context
        }).then((A) => {
          e.formApi.setContext(A.context), t.value = t.value.concat(
            A.rows
          ), i.value.lastPage = Math.ceil(
            A.row_count / i.value.limit
          ), A.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      a.value && a.value.focus();
    }
    function h() {
      a.value && a.value.blur();
    }
    return W(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        k,
        m,
        o,
        d,
        h
      ), Ae(() => {
        m();
      });
    }), (g, F) => (s(), N("div", Kn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Ge), $({
        ref_key: "fieldRef",
        ref: a
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
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (E, B) => ({
          name: B,
          fn: S((A) => [
            (s(), C(L(E), z(H({
              defaultProps: A ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Xn = { class: "flex column" }, lt = "__init", ei = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T([]), i = T(
      p()
    ), a = T(), l = T(lt);
    function p() {
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
      i.value = p(), l.value = g;
      const B = e.formApi.form;
      i.value.isLoading = !0, E({
        resourceName: B.resourceName,
        resourceId: B.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: i.value.limit,
        offset: (i.value.nextPage - 1) * i.value.limit,
        labelFilter: g,
        context: B.context
      }).then((A) => {
        F(() => {
          e.formApi.setContext(A.context), t.value = A.rows, i.value.nextPage = 2, i.value.lastPage = Math.ceil(
            A.row_count / i.value.limit
          ), i.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], i.value = p();
      });
    }
    function m() {
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = g.map((F, E) => ({
        label: e.fieldApi.field.associationData[E].label ?? "???",
        value: F,
        data: e.fieldApi.field.associationData[E].data
      })));
    }
    function y() {
      return a.value ? a.value.validate() : !1;
    }
    function u() {
      return a.value ? !a.value.hasError : !1;
    }
    function k() {
      a.value && a.value.resetValidation();
    }
    function o() {
      i.value = p(), t.value = [], l.value = lt;
    }
    function D(g) {
      const F = t.value.length - 1;
      if (i.value.isLoading !== !0 && i.value.nextPage <= i.value.lastPage && g.to === F && F !== -1) {
        const E = e.formApi.form, B = e.formApi.getAssociationDataCallback();
        i.value.isLoading = !0, B({
          resourceName: E.resourceName,
          resourceId: E.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: i.value.limit,
          offset: (i.value.nextPage - 1) * i.value.limit,
          labelFilter: l.value,
          context: E.context
        }).then((A) => {
          e.formApi.setContext(A.context), t.value = t.value.concat(
            A.rows
          ), i.value.lastPage = Math.ceil(
            A.row_count / i.value.limit
          ), A.row_count >= i.value.limit && i.value.nextPage++, i.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function d() {
      a.value && a.value.focus();
    }
    function h() {
      a.value && a.value.blur();
    }
    return W(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        k,
        m,
        o,
        d,
        h
      ), Ae(() => {
        m();
      });
    }), (g, F) => (s(), N("div", Xn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Ge), $({
        ref_key: "fieldRef",
        ref: a
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
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (E, B) => ({
          name: B,
          fn: S((A) => [
            (s(), C(L(E), z(H({
              defaultProps: A ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"])
    ]));
  }
}), ti = { class: "flex column" }, ni = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (s(), N("div", ti, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Oe), $({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        "model-value": e.modelValue,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((o) => [
            (s(), C(L(u), z(H({
              defaultProps: o ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["rules", "label", "readonly", "model-value", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ii = { class: "flex column" }, ai = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (s(), N("div", ii, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Oe), $({
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
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((o) => [
            (s(), C(L(u), z(H({
              defaultProps: o ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "rules", "label", "readonly", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), li = { class: "flex column" }, ri = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return !!t.value;
    }
    function a() {
      return !!t.value;
    }
    function l() {
    }
    function p(o) {
      var d;
      o.preventDefault(), o.stopPropagation();
      const D = (d = o.clipboardData) == null ? void 0 : d.items;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          if (g.type.startsWith("image/")) {
            const F = g.getAsFile();
            F && m(F);
          }
        }
    }
    function r(o) {
      var d;
      o.preventDefault(), o.stopPropagation();
      const D = (d = o.dataTransfer) == null ? void 0 : d.files;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          g.type.startsWith("image/") && g && m(g);
        }
    }
    function m(o) {
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
            const E = F.width, B = F.height;
            (A = t.value) == null || A.runCmd(
              "insertHTML",
              `<img src="${h}" width="${E}" height="${B}" style="max-width: 80%; height: auto;" />`
            );
          }, F.src = h;
        }
      }, D.readAsDataURL(o);
    }
    function y() {
      t.value && t.value.focus();
    }
    function u() {
      t.value && t.value.getContentEl().blur();
    }
    function k() {
      const o = !Ee.props || !Ne.props;
      return [
        o ? [] : [
          {
            label: Ee.props.editor.align,
            icon: Ne.props.editor.align,
            fixedLabel: !0,
            list: "only-icons",
            options: ["left", "center", "right", "justify"]
          }
        ],
        ["bold", "italic", "strike", "underline", "subscript", "superscript"],
        ["token", "hr", "link", "custom_btn"],
        ["print", "fullscreen"],
        o ? [] : [
          {
            label: Ee.props.editor.formatting,
            icon: Ne.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: Ee.props.editor.fontSize,
            icon: Ne.props.editor.fontSize,
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
            label: Ee.props.editor.defaultFont,
            icon: Ne.props.editor.font,
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        y,
        u
      );
    }), (o, D) => (s(), N("div", li, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Ot), $({
        ref_key: "fieldRef",
        ref: t,
        toolbar: k()
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        onDrop: r,
        onPaste: p,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (d, h) => ({
          name: h,
          fn: S((g) => [
            (s(), C(L(d), z(H({
              defaultProps: g ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["toolbar", "model-value", "onUpdate:modelValue"])
    ]));
  }
}), oi = { class: "flex column" }, si = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T();
    function i() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        i,
        a,
        l,
        void 0,
        void 0,
        p,
        r
      );
    }), (m, y) => (s(), N("div", oi, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), C(ue, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(f(Oe), $({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (u, k) => ({
          name: k,
          fn: S((o) => [
            (s(), C(L(u), z(H({
              defaultProps: o ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ui = { class: "flex column" }, di = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, ci = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T(null), i = T(!1);
    function a() {
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
      return t.value === null && i.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), F = new FileReader();
        F.onload = (E) => {
          var Q;
          const B = ((Q = E.target) == null ? void 0 : Q.result) ?? "", [A, J] = B.split(",");
          h(J);
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
      i.value = !0;
      const h = await u(d[0]);
      let g = e.modelValue;
      g.add = [h], i.value = !1, e.modelValueOnUpdate(g), D();
    }
    function o(d) {
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
    return W(() => {
      e.registerBehaviourCallbacks(
        p,
        r,
        m,
        a,
        l
      );
    }), (d, h) => (s(), N("div", ui, [
      x(f(ut), $(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: k,
        onRemoved: o,
        style: { width: "inherit" }
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (g, F) => ({
          name: F,
          fn: S((E) => [
            (s(), C(L(g), z(H({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (s(), N("div", di, q(t.value), 1)) : I("", !0)
    ]));
  }
}), fi = { class: "flex column" }, mi = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, pi = /* @__PURE__ */ R({
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
  setup(n) {
    const e = n, t = T(null), i = T(!1);
    function a() {
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
      return t.value === null && i.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function y(d) {
      return new Promise((h) => {
        const g = new Blob([d]), F = new FileReader();
        F.onload = (E) => {
          var Q;
          const B = ((Q = E.target) == null ? void 0 : Q.result) ?? "", [A, J] = B.split(",");
          h(J);
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
      i.value = !0;
      for (const h of d) {
        const g = await u(h);
        let F = e.modelValue;
        F.add.push(g), e.modelValueOnUpdate(F);
      }
      i.value = !1, D();
    }
    async function o(d) {
      i.value = !0;
      for (const h of d) {
        const g = await u(h);
        let F = e.modelValue;
        F.add = F.add.filter((E) => E.key !== g.key), e.modelValueOnUpdate(F);
      }
      i.value = !1, D();
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
    return W(() => {
      e.registerBehaviourCallbacks(
        p,
        r,
        m,
        a,
        l
      );
    }), (d, h) => (s(), N("div", fi, [
      x(f(ut), $(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: k,
        onRemoved: o,
        style: { width: "inherit" }
      }), X({ _: 2 }, [
        M(e.fieldApi.field.slots, (g, F) => ({
          name: F,
          fn: S((E) => [
            (s(), C(L(g), z(H({
              defaultProps: E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (s(), N("div", mi, q(t.value), 1)) : I("", !0)
    ]));
  }
});
function gi(n, e) {
  const t = n.rules ?? [], i = n.type, a = e.form, l = (y, u, k) => y[u] ? k ? () => p(y[u]) : () => y[u] : y.compare_to ? () => {
    var o;
    return ((o = e.getFieldByName(y.compare_to)) == null ? void 0 : o.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", p = (y) => String(
    he.formatDate(
      v.superExtractDate(y, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), r = [], m = [];
  switch (i) {
    case "date":
      r.push(Ye(a.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(Ye(a.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((y) => {
    const u = y;
    switch (u.type) {
      case "required":
        r.push(vi());
        break;
      case "absence":
        r.push(bi());
        break;
      case "acceptance":
        r.push(yi());
        break;
      case "inclusion":
        r.push(mt(u.including));
        break;
      case "exclusion":
        r.push(hi(u.excluding));
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
        r.push(ki());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Fi(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Vi(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          Si(
            l(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          Ci(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          xi(l(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Di(
            l(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Ei());
        break;
      case "numberNumericOnly":
        r.push(Ni());
        break;
      case "numberEvenOnly":
        r.push(wi());
        break;
      case "numberOddOnly":
        r.push(Bi());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ti(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Ii(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Oi(
            l(u, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          $i(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          Ui(
            l(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Pi(l(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Ri(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          zi(
            l(u, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(Ye(a.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          qi(
            l(u, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Li(
            l(u, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Mi(
            l(u, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Hi(
            l(u, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          ji(
            l(u, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Qi(
            l(u, "other_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          Gi()
        );
        break;
      case "allowFileContentType":
        r.push(
          Wi(
            l(u, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          Ji(
            l(u, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          Zi(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          Ki(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          Xi(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ea(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          ta(
            l(u, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          na(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ia(
            l(u, "equal_to")
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((y) => {
    switch (y) {
      case "allowBlank":
        return Ai(r);
      case "allowNull":
        return _i(r);
    }
  }) : r;
}
function vi() {
  return (n) => !!n || "Ce champ est requis";
}
function mt(n) {
  return (e) => n.includes(String(e)) || `Doit être contenu dans ${n.toString()}`;
}
function hi(n) {
  return (e) => !n.includes(
    String(e) || `Ne doit pas être contenu dans ${mt.toString()}`
  );
}
function bi() {
  return (n) => !n || "Ce champ doit être vide";
}
function yi() {
  return (n) => !!n || "Doit être accepté";
}
function _i(n) {
  return (e) => (e === null || n.forEach((t) => {
    const i = t(e);
    if (i !== !0)
      return i;
  }), !0);
}
function Ai(n) {
  return (e) => (e === "" || n.forEach((t) => {
    const i = t(e);
    if (i !== !0)
      return i;
  }), !0);
}
function ki() {
  return (n) => Number(n) > 0 || "Val. positive uniquement";
}
function Fi(n) {
  return (e) => {
    const t = n();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Vi(n) {
  return (e) => {
    const t = n();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Si(n) {
  return (e) => {
    const t = n();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Ci(n) {
  return (e) => {
    const t = n();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function xi(n, e) {
  return (t) => {
    const i = n();
    return Number(t) === i || `Égale à ${i}`;
  };
}
function Di(n, e) {
  return (t) => {
    const i = n();
    return Number(t) !== i || `Doit être différent de ${n}`;
  };
}
function Ei() {
  return (n) => /^-?\d+$/.test(String(n).trim()) || "Nombre entier uniquement";
}
function Ni() {
  return (n) => /^-?\d+(\.\d+)?$/.test(String(n).trim()) || "Caractère numérique uniquement";
}
function wi() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 0 || "Nombre pair uniquement";
}
function Bi() {
  return (n) => Number.isInteger(Number(n)) && Number(n) % 2 === 1 || "Nombre impair uniquement";
}
function Ti(n) {
  return (e) => {
    const t = n();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Ii(n) {
  return (e) => {
    const t = n();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Oi(n) {
  return (e) => {
    const t = n();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function $i(n) {
  return (e) => {
    const t = n();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Ri(n, e) {
  return (t) => {
    const i = n(), a = e();
    return String(t).length >= i && String(t).length <= a || `Entre ${i} et ${a}`;
  };
}
function Pi(n, e) {
  return (t) => {
    const i = n();
    return String(t) === i || `Égale à ${i}`;
  };
}
function Ui(n) {
  return (e) => {
    const t = n();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function zi(n) {
  return (e) => {
    const t = n();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function qi(n, e) {
  return (t) => {
    const i = n(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(i, e);
    return a <= l || `Inf. ou égal à ${i}`;
  };
}
function Li(n, e) {
  return (t) => {
    const i = n(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(i, e);
    return a < l || `Inf. à ${i}`;
  };
}
function Mi(n, e) {
  return (t) => {
    const i = n(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(i, e);
    return a >= l || `Sup. ou égal à ${i}`;
  };
}
function Hi(n, e) {
  return (t) => {
    const i = n(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(i, e);
    return a > l || `Sup. à ${i}`;
  };
}
function ji(n, e) {
  return (t) => {
    const i = n(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(i, e);
    return a === l || `Égale à ${a}`;
  };
}
function Qi(n, e) {
  return (t) => {
    const i = n();
    return v.superExtractDate(String(t), e) !== v.superExtractDate(i, e) || `Doit être différent de ${i}`;
  };
}
function Ye(n) {
  return (e) => e == null || e === "" ? !0 : Yi(e, n) || `Date invalide. Format : ${n}`;
}
function Yi(n, e) {
  if (typeof n != "string" || !n.trim())
    return !1;
  const t = v.superExtractDate(n, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : he.formatDate(t, e) === n;
}
function Gi() {
  return (n) => n.add.length > 0 || "Ce champ est requis";
}
function Wi(n) {
  return (e) => {
    const t = e, i = n();
    let a = !0;
    t.add.forEach((p) => {
      a && (i.includes(p.contentType) || (a = !1));
    });
    const l = n.length > 1;
    return a || `Type${l ? "s" : ""} autorisé${l ? "s" : ""} : ${i.join(",")}`;
  };
}
function Ji(n) {
  return (e) => {
    const t = e, i = n();
    let a = !0;
    return t.add.forEach((l) => {
      a && i !== l.size && (a = !1);
    }), a || `Taille par fichier ${v.humanStorageSize(i)}`;
  };
}
function Ki(n) {
  return (e) => {
    const t = e, i = n();
    let a = !0;
    return t.add.forEach((l) => {
      a && l.size < i && (a = !1);
    }), a || `Taille par fichier min. ${v.humanStorageSize(i)}`;
  };
}
function Zi(n) {
  return (e) => {
    const t = e, i = n();
    let a = !0;
    return t.add.forEach((l) => {
      a && l.size > i && (a = !1);
    }), a || `Taille par fichier max. ${v.humanStorageSize(i)}`;
  };
}
function Xi(n) {
  return (e) => {
    const t = e, i = n();
    return t.add.length <= i || `${i} fichier${i > 1 ? "s" : ""} max.`;
  };
}
function ea(n) {
  return (e) => {
    const t = e, i = n();
    return t.add.length >= i || `${i} fichier${i > 1 ? "s" : ""} min.`;
  };
}
function ta(n) {
  return (e) => {
    const t = e, i = n();
    return t.add.reduce((l, p) => (l += p.size, l), 0) <= i || `${v.humanStorageSize(i)} max.`;
  };
}
function na(n) {
  return (e) => {
    const t = e, i = n();
    return t.add.reduce((l, p) => (l += p.size, l), 0) >= i || `${v.humanStorageSize(i)} min.`;
  };
}
function ia(n) {
  return (e) => {
    const t = e, i = n();
    return t.add.reduce((l, p) => (l += p.size, l), 0) === i || `Taille totale ${v.humanStorageSize(i)}`;
  };
}
const aa = {
  computeServerRules: gi
};
class _e {
  constructor(e, t, i, a, l, p, r, m, y, u, k, o) {
    U(this, "resourceName");
    U(this, "resourceId");
    U(this, "formMetadataAndData");
    U(this, "context");
    U(this, "formSettings");
    U(this, "formBind");
    U(this, "formSlots");
    U(this, "templateSlots");
    U(this, "formApi");
    U(this, "registerEventCallback");
    this.formMetadataAndData = i, this.resourceId = t, this.context = m, this.resourceName = e, this.formApi = y, this.formSettings = v.deepMergeObject(
      Se.getGlobalFormSetting(),
      a ?? {}
    ), this.formBind = v.deepMergeObject(
      v.deepMergeObject(Se.getGlobalFormBind(), l ?? {}),
      {
        form: {
          default: {
            class: k,
            sectionContainerClass: o
          }
        }
      }
    ), this.formSlots = v.deepMergeObject(
      Se.getBlobalFormSlot(),
      p ?? {}
    ), this.templateSlots = r, this.registerEventCallback = u ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: Se.getGlobalFormSetting(),
      events: {},
      bindings: qe.getEmptyDefaultBindings().form,
      slots: ft.getEmptyDefaultSlots()
    };
  }
  static getForm(e, t, i, a, l, p, r, m, y, u, k, o) {
    return new _e(
      e,
      t,
      i,
      a,
      l,
      p,
      r,
      m,
      y,
      u,
      k,
      o
    ).generateFormDef();
  }
  generateFormDef() {
    const e = /* @__PURE__ */ new Map();
    for (const k of Object.keys(this.templateSlots))
      e.set(k, !1);
    const t = (k, o) => {
      const D = `${k}-${o ? o + "-" : ""}`;
      return Object.fromEntries(
        Object.entries(this.templateSlots).reduce(
          (d, h) => {
            if (h[0].includes(D) && h[1] !== void 0) {
              e.set(h[0], !0);
              const g = h[0].replace(D, "");
              d.push([g, we(h[1])]);
            }
            return d;
          },
          []
        )
      );
    }, i = (k) => {
      for (let o of Object.values(k))
        o && (o = we(o));
      return k;
    }, a = He.create(this.formApi);
    this.registerEventCallback(a);
    const l = /* @__PURE__ */ new Set(), p = He.getEventsObjectFromInstance(a), r = [];
    this.formMetadataAndData.form.sections.forEach(
      (k, o) => {
        var B;
        const D = [];
        k.fields.forEach((A) => {
          const J = _e.getFieldTypeByFieldMetadata(A), Q = _e.getFieldComponentByFieldType(J), de = v.deepMergeObject(
            v.deepMergeObject(
              this.formSlots.fields[J],
              this.formSlots.fields.byName[A.field_name]
            ),
            t("field", A.field_name)
          ), ne = v.deepMergeObject(
            this.getBindingsByFormFieldType(J),
            this.formBind.fields.byName[A.field_name]
          );
          let oe = A.label;
          this.formSettings.requiredFieldsHasAsterisk && A.rules.find((ae) => ae.type === "required") && (oe = oe.concat("*"));
          const ie = {
            type: J,
            metadata: Object.freeze(A),
            label: oe,
            readonly: this.formMetadataAndData.form.readonly ?? k.readonly ?? A.readonly ?? void 0,
            staticSelectOptions: A.static_select_options,
            associationData: A.field_association_data,
            attachmentData: A.field_attachment_data,
            rules: A.rules,
            computedRules: [],
            // late init
            bindings: ne,
            hidden: !1,
            mainComponent: we(Q),
            events: p.fields[A.field_name] ?? {},
            slots: i(de)
          };
          ie.computedRules = aa.computeServerRules(
            ie,
            this.formApi
          ), D.push(ie), l.add(A.field_name);
        });
        const d = k.name ?? o.toString(), h = {
          ...this.formSlots.sections,
          ...t("section", d)
        }, g = ((B = this.formSlots.fields.byName[d]) == null ? void 0 : B.default) ?? this.formSlots.sections.default, F = v.deepMergeObject(
          this.formBind.sections.default,
          this.formBind.sections.byName[d]
        ), E = {
          label: k.label ?? void 0,
          icon: k.icon ?? void 0,
          hidden: !1,
          name: d,
          index: o,
          bindings: F,
          readonly: this.formMetadataAndData.form.readonly ?? k.readonly ?? void 0,
          events: p.sections[k.name ?? o.toString()] ?? {},
          mainComponent: we(g),
          fieldsComponent: void 0,
          fields: D,
          slots: i(h)
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
      slots: i(m),
      context: this.context
    };
    l.size < this.formMetadataAndData.form.sections.reduce((k, o) => k + o.fields.length, 0) && Ie.log("Found fields with the same name");
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
      string: ni,
      color: si,
      wysiwyg: ri,
      number: ai,
      date: Mn,
      datetime: jn,
      checkbox: Gn,
      select: Jn,
      belongsTo: Zn,
      hasMany: ei,
      attachmentHasOne: ci,
      attachmentHasMany: pi
    }[e];
  }
}
const la = { class: "flex column" }, ra = /* @__PURE__ */ R({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let i = null, a = null, l = null;
    const p = dt(), r = {
      softReset: u,
      reset: k,
      clear: o,
      validate: h,
      isValid: g,
      isInvalid: F,
      hide: D,
      unhide: d,
      resetValidation: E,
      getFields: B,
      setReadonlyState: A,
      setIcon: J,
      setLabel: Q,
      tryFocusFirst: oe,
      tryUnfocus: ie,
      setBindings: ge,
      section: t.section
    }, m = T(/* @__PURE__ */ new Map());
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
    function k() {
      m.value.forEach((b) => {
        b.reset();
      }), v.callAllEvents(t.section.events.onReset);
    }
    function o() {
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
    function F() {
      return !g();
    }
    function E() {
      m.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function B() {
      return m.value;
    }
    function A(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      if (w) {
        w.readonly = b;
        for (const j of B().values())
          j.setReadonlyState(b);
      }
    }
    function J(b) {
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
    function de() {
      const b = {};
      for (const [w, j] of m.value)
        b[w] = j.getValueSerialized();
      return b;
    }
    function ne() {
      const b = p.default;
      if (!b) {
        console.error(
          "Submit64 : did not found fields slot for section " + t.section.name
        );
        return;
      }
      const w = R({
        inheritAttrs: !1,
        setup(j, { attrs: De, slots: ce }) {
          return () => b(
            {
              ...j,
              ...De
            },
            ce
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(
        t.section,
        we(w)
      );
    }
    function oe() {
      for (const b of B().values())
        if (b.tryFocus(), b.isFocus())
          return !0;
      return !1;
    }
    function ie() {
      for (const b of B().values())
        if (b.tryUnfocus(), !b.isFocus())
          return !0;
      return !1;
    }
    function ae() {
      return t.privateFormApi.getSectionRef(
        t.section.name ?? t.section.index
      );
    }
    function ge(b) {
      const w = ae();
      w.bindings = v.deepMergeObject(w.bindings, b);
    }
    e(r);
    const ke = te(() => g()), Fe = te(() => F()), xe = te(() => de());
    return Y(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsValid;
      },
      (b) => {
        i == null || i(), i = null, b && (i = Y(ke, (w) => {
          w && v.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onIsInvalid;
      },
      (b) => {
        a == null || a(), a = null, b && (a = Y(Fe, (w) => {
          var j;
          w && v.callAllEvents((j = t.section) == null ? void 0 : j.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var b;
        return (b = t.section) == null ? void 0 : b.events.onUpdate;
      },
      (b) => {
        l == null || l(), l = null, b && (l = Y(
          xe,
          () => {
            var w;
            v.callAllEvents((w = t.section) == null ? void 0 : w.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), W(() => {
      var w;
      ne();
      const b = (w = We()) == null ? void 0 : w.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), Ae(() => {
        var j;
        y(), v.callAllEvents((j = t.section) == null ? void 0 : j.events.onReady);
      });
    }), (b, w) => Je((s(), N("div", la, [
      t.section.slots["wrapper-before"] ? (s(), C(L(t.section.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (s(), C(L(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.slots["wrapper-after"] ? (s(), C(L(t.section.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [Ke, t.section.hidden !== !0]
    ]);
  }
}), oa = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, sa = ["index"], ua = /* @__PURE__ */ R({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(n, { expose: e }) {
    const t = n;
    let i = () => !0, a = () => !0, l = () => {
    }, p = () => {
    }, r = () => {
    }, m = () => {
    }, y = () => {
    };
    const u = T(""), k = T(!1), o = T([]);
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
      u.value = h(_), v.callAllEvents(t.field.events.onReset), p(), Ae(() => {
        Fe();
      });
    }
    function h(_) {
      const P = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (_ == null)
            return "";
          break;
        case "checkbox":
          return _ == null || _ === "" ? !1 : _;
        case "date":
          return _ == null || _ === "" ? null : he.formatDate(
            v.superExtractDate(String(_), P.formSettings.backendDateFormat),
            P.formSettings.dateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : he.formatDate(
            v.superExtractDate(
              String(_),
              P.formSettings.backendDatetimeFormat
            ),
            P.formSettings.datetimeFormat
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
      const P = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (_ === "")
            return null;
          break;
        case "date":
          return _ == null || _ === "" ? null : he.formatDate(
            v.superExtractDate(String(_), P.formSettings.dateFormat),
            P.formSettings.backendDateFormat
          );
        case "datetime":
          return _ == null || _ === "" ? null : he.formatDate(
            v.superExtractDate(String(_), P.formSettings.datetimeFormat),
            P.formSettings.backendDatetimeFormat
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
    function B() {
      return f(u);
    }
    function A() {
      return g(f(u));
    }
    function J(_) {
      o.value = _;
    }
    function Q() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function de() {
      const _ = Q();
      _.hidden = !0, v.callAllEvents(t.field.events.onHide);
    }
    function ne() {
      const _ = Q();
      _.hidden = !1, v.callAllEvents(t.field.events.onUnhide);
    }
    function oe(_) {
      const P = Q();
      P.readonly = _;
    }
    function ie(_) {
      const P = Q();
      P.label = _;
    }
    function ae() {
      const _ = i();
      return v.callAllEvents(t.field.events.onValidated), _;
    }
    function ge() {
      return a();
    }
    function ke() {
      return !ge();
    }
    function Fe() {
      return l();
    }
    function xe() {
      k.value || (m(), k.value = !0);
    }
    function b() {
      k.value && (y(), k.value = !1);
    }
    function w() {
      return k.value;
    }
    function j(_) {
      const P = Q();
      P.bindings = v.deepMergeObject(P.bindings, _);
    }
    function De(_, P, fe, Ve, $e, Re, Pe) {
      i = _, a = P, l = fe, Ve && (p = Ve), $e && (r = $e), Re && (m = Re), Pe && (y = Pe);
    }
    const ce = {
      softReset: D,
      reset: d,
      clear: F,
      validate: ae,
      isValid: ge,
      isInvalid: ke,
      hide: de,
      unhide: ne,
      resetValidation: Fe,
      getValueDeserialized: A,
      getValueSerialized: B,
      setupBackendErrors: J,
      setReadonlyState: oe,
      setLabel: ie,
      tryFocus: xe,
      tryUnfocus: b,
      isFocus: w,
      setBindings: j,
      setValue: E,
      field: t.field,
      refs: {
        modelValue: be(u),
        isFocused: be(k),
        backendErrors: be(o)
      }
    };
    return e(ce), Y(
      () => t.field.events.onUpdate ? u.value : null,
      () => {
        v.callAllEvents(t.field.events.onUpdate);
      }
    ), Y(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? u.value : null,
      (_) => {
        _ ? v.callAllEvents(t.field.events.onIsValid) : v.callAllEvents(t.field.events.onIsInvalid);
      }
    ), W(() => {
      var P, fe;
      D();
      const _ = (P = We()) == null ? void 0 : P.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), v.callAllEvents((fe = t.field) == null ? void 0 : fe.events.onReady);
    }), (_, P) => Je((s(), N("div", null, [
      t.field.slots["wrapper-before"] ? (s(), C(L(t.field.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        fieldApi: ce
      }, null, 8, ["formApi"])) : I("", !0),
      (s(), C(L(t.field.mainComponent), {
        modelValue: u.value,
        fieldApi: ce,
        formApi: t.formApi,
        reset: d,
        clear: F,
        getValueDeserialized: A,
        getValueSerialized: B,
        validate: ae,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: De
      }, null, 8, ["modelValue", "formApi"])),
      t.field.slots["wrapper-after"] ? (s(), C(L(t.field.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        fieldApi: ce
      }, null, 8, ["formApi"])) : I("", !0),
      o.value.length > 0 ? (s(), N("div", oa, [
        (s(!0), N(Z, null, M(o.value, (fe, Ve) => (s(), N("div", {
          index: Ve,
          class: "flex column"
        }, q(fe), 9, sa))), 256))
      ])) : I("", !0)
    ], 512)), [
      [Ke, t.field.hidden !== !0]
    ]);
  }
}), ma = /* @__PURE__ */ R({
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
  setup(n, { expose: e }) {
    const t = n;
    let i = null, a = "", l = 0, p = 0, r = null, m = null, y = null, u = null;
    const k = dt(), o = T(_e.getEmptyFormBeforeInit()), D = T(!1), d = T(!1), h = T(!1), g = T(!1), F = T("create"), E = T({}), B = T(/* @__PURE__ */ new Map()), A = T(/* @__PURE__ */ new Map());
    async function J() {
      i = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), o.value = _e.getForm(
        t.resourceName,
        t.resourceId,
        i,
        t.formSettings,
        t.formBindings,
        t.formSlots,
        de(),
        t.context,
        me,
        t.eventManager,
        t.class,
        t.sectionContainerClass
      ), l = o.value.sections.length, p = o.value.sections.reduce((c, V) => (c += V.fields.length, c), 0), t.resourceId && (F.value = "edit"), je(i.context);
    }
    async function Q() {
      var O, ve, Ue;
      if (!ie())
        return;
      v.callAllEvents((O = o.value) == null ? void 0 : O.events.onSubmit), g.value = !0, w();
      const c = ne(), V = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: c,
        context: o.value.context
      });
      if (u = V.resource_data, je(V.context), V.success)
        E.value = {}, F.value === "create" && (F.value = "edit"), i && V.resource_data && (i.resource_data = V.resource_data), o.value = _e.getForm(
          t.resourceName,
          t.resourceId,
          {
            form: V.form,
            resource_data: V.resource_data,
            context: me.form.context ?? {}
          },
          t.formSettings,
          t.formBindings,
          t.formSlots,
          de(),
          o.value.context,
          me,
          t.eventManager,
          t.class,
          t.sectionContainerClass
        ), ke(), a = JSON.stringify(ne()), v.callAllEvents((Ue = o.value) == null ? void 0 : Ue.events.onSubmitSuccess);
      else {
        E.value = {};
        const ze = [];
        for (const [pe, Et] of A.value) {
          const tt = V.errors[pe];
          tt && (Et.setupBackendErrors(tt), ze.push(pe));
        }
        Object.entries(V.errors).forEach((pe) => {
          ze.includes(pe[0]) || (E.value[pe[0]] = pe[1]);
        }), v.callAllEvents((ve = o.value) == null ? void 0 : ve.events.onSubmitUnsuccess);
      }
      g.value = !1;
    }
    function de() {
      const c = {};
      for (const V in k) {
        const O = k[V];
        if (O) {
          const ve = R({
            inheritAttrs: !1,
            setup(Ue, { attrs: ze, slots: pe }) {
              return () => O({
                ...Ue,
                ...ze,
                innerSlots: pe
              });
            }
          });
          c[V] = ve;
        }
      }
      return c;
    }
    function ne() {
      const c = {};
      for (const [V, O] of A.value)
        c[V] = O.getValueDeserialized();
      return c;
    }
    function oe() {
      const c = {};
      for (const [V, O] of A.value)
        c[V] = O.getValueSerialized();
      return c;
    }
    function ie() {
      var V;
      let c = !0;
      return A.value.forEach((O) => {
        if (!O.validate()) {
          c = !1;
          return;
        }
      }), v.callAllEvents((V = o.value) == null ? void 0 : V.events.onValidated), c;
    }
    function ae() {
      let c = !0;
      return A.value.forEach((V) => {
        if (!V.isValid()) {
          c = !1;
          return;
        }
      }), c;
    }
    function ge() {
      return !ae();
    }
    function ke() {
      B.value.forEach((c) => {
        c.softReset();
      });
    }
    function Fe() {
      var c;
      A.value.forEach((V) => {
        V.reset();
      }), v.callAllEvents((c = o.value) == null ? void 0 : c.events.onReset);
    }
    function xe() {
      var c;
      A.value.forEach((V) => {
        V.clear();
      }), v.callAllEvents((c = o.value) == null ? void 0 : c.events.onClear);
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
    function j(c) {
      if (i)
        return i.resource_data[c];
    }
    function De(c) {
      return B.value.get(c);
    }
    function ce(c) {
      return [...B.value.values()].at(c);
    }
    function _() {
      return B.value;
    }
    function P(c) {
      return A.value.get(c);
    }
    function fe() {
      return A.value;
    }
    function Ve() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0,
        context: {}
      }));
    }
    function $e() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((V) => {
        (t[V] === null || t[V] === void 0) && Ie.log(`Missing props for <Submit64> -> ${V}`);
      });
    }
    function Re() {
      return f(F);
    }
    function Pe() {
      return a !== JSON.stringify(ne());
    }
    function je(c) {
      o.value && (o.value.context = c);
    }
    function pt(c) {
      o.value && (o.value.readonly = c);
    }
    function gt(c) {
      o.value && v.deepMergeObject(o.value.formSettings, c);
    }
    function vt(c) {
      o.value && v.deepMergeObject(o.value.bindings, c);
    }
    function ht() {
      return h.value;
    }
    function bt() {
      return u;
    }
    function Ze() {
      for (const c of _().values())
        if (c.tryFocusFirst())
          return !0;
      return !1;
    }
    function yt() {
      for (const c of _().values())
        if (c.tryUnfocus())
          return !0;
      return !1;
    }
    function _t() {
      return o;
    }
    function At(c) {
      var V;
      return (V = o.value) == null ? void 0 : V.sections.find((O) => O.name === c);
    }
    function kt(c) {
      var V;
      return (V = o.value) == null ? void 0 : V.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === c);
    }
    function Ft(c, V) {
      B.value.set(c, V), l === B.value.size && (D.value = !0);
    }
    function Vt(c, V) {
      A.value.set(c, V), p === A.value.size && (d.value = !0);
    }
    function St(c, V) {
      c.fieldsComponent = V;
    }
    const Xe = te(() => ae()), Ct = te(() => ge()), xt = te(() => oe()), et = {
      getFormRef: _t,
      getSectionRef: At,
      getFieldRef: kt,
      registerSectionWrapperRef: Ft,
      registerFieldWrapperRef: Vt,
      setSectionFieldComponent: St
    }, Dt = new Proxy({}, {
      get(c, V) {
        var O;
        return (O = o.value) == null ? void 0 : O[V];
      }
    }), me = {
      getMode: Re,
      getSectionByName: De,
      getSectionByIndex: ce,
      getSections: _,
      getFieldByName: P,
      getFields: fe,
      validate: ie,
      isValid: ae,
      isInvalid: ge,
      softReset: ke,
      reset: Fe,
      clear: xe,
      resetValidation: b,
      submit: Q,
      valuesHasChanged: Pe,
      getInitialValueByFieldName: j,
      getAssociationDataCallback: Ve,
      setContext: je,
      setReadonlyState: pt,
      setSettings: gt,
      setBindings: vt,
      isReady: ht,
      getSubmitData: bt,
      tryFocusFirst: Ze,
      tryUnfocus: yt,
      form: Dt,
      refs: {
        orphanErrors: be(E),
        isLoadingSubmit: be(g),
        setupIsDone: be(h),
        isFormValid: be(Xe)
      }
    };
    return e(me), Y(
      () => D.value && d.value,
      (c) => {
        var V;
        c && !h.value && (v.callAllEvents((V = o.value) == null ? void 0 : V.events.onReady), h.value = !0);
      }
    ), Y(
      () => {
        var c;
        return (c = o.value) == null ? void 0 : c.events.onIsValid;
      },
      (c) => {
        r == null || r(), r = null, c && (r = Y(Xe, (V) => {
          var O;
          V && v.callAllEvents((O = o.value) == null ? void 0 : O.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var c;
        return (c = o.value) == null ? void 0 : c.events.onIsInvalid;
      },
      (c) => {
        m == null || m(), m = null, c && (m = Y(Ct, (V) => {
          var O;
          V && v.callAllEvents((O = o.value) == null ? void 0 : O.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), Y(
      () => {
        var c;
        return (c = o.value) == null ? void 0 : c.events.onUpdate;
      },
      (c) => {
        y == null || y(), y = null, c && (y = Y(
          xt,
          () => {
            var V;
            v.callAllEvents((V = o.value) == null ? void 0 : V.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), W(async () => {
      $e(), await J(), Ae(() => {
        a = JSON.stringify(ne()), o.value.formSettings.autofocus && Ze();
      });
    }), (c, V) => Je((s(), N("div", {
      class: nt(o.value.bindings.default.class ?? "flex column")
    }, [
      G("div", {
        class: nt(
          o.value.bindings.default.sectionContainerClass ?? "flex column q-pa-sm q-gutter-sm"
        )
      }, [
        (s(!0), N(Z, null, M(o.value.sections, (O) => (s(), C(ra, {
          key: O.name,
          section: O,
          formApi: me,
          privateFormApi: et
        }, {
          default: S(() => [
            (s(!0), N(Z, null, M(O.fields, (ve) => (s(), C(ua, {
              key: ve.metadata.field_name,
              field: ve,
              formApi: me,
              privateFormApi: et
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      o.value.slots["orphan-errors"] ? (s(), C(L(o.value.slots.orphanErrors), {
        key: 0,
        formApi: me
      })) : I("", !0),
      o.value.slots.actions ? (s(), C(L(o.value.slots.actions), {
        key: 1,
        formApi: me
      })) : I("", !0)
    ], 2)), [
      [Ke, h.value]
    ]);
  }
});
export {
  He as DynamicLogicBuilder,
  Se as Submit64,
  ma as Submit64Form
};
