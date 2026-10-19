var Bt = Object.defineProperty;
var It = (i, e, t) => e in i ? Bt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var q = (i, e, t) => It(i, typeof e != "symbol" ? e + "" : e, t);
import { date as ye, QBtn as Z, QUploaderAddTrigger as ot, QList as Le, QItem as Ne, QItemSection as oe, QItemLabel as se, QSeparator as st, QIcon as ue, QPopupProxy as Me, QColor as Ot, QDate as ut, QTime as Rt, QInput as Be, QCheckbox as $t, QSelect as Je, QEditor as Ut, IconSet as qe, Lang as ze, QUploader as ct } from "quasar";
import { defineComponent as $, openBlock as o, createElementBlock as N, createElementVNode as W, toDisplayString as L, createBlock as C, unref as p, withCtx as S, createVNode as x, createCommentVNode as I, computed as ne, Fragment as X, renderList as P, createTextVNode as te, normalizeProps as z, mergeProps as R, guardReactiveProps as H, ref as B, resolveDynamicComponent as M, getCurrentInstance as Ke, resolveComponent as Qe, renderSlot as qt, onMounted as J, nextTick as ke, createSlots as ee, watch as G, markRaw as Ee, useSlots as dt, withDirectives as Ze, vShow as Xe, readonly as _e, normalizeClass as at } from "vue";
function zt(i) {
  for (const e of i ?? [])
    e();
}
function Lt(i) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(i.toString(), 10) >= 1024 && t < e.length - 1; )
    i /= 1024, ++t;
  return `${i.toFixed(1)}${e[t]}`;
}
function ft(i, e, t = {
  deepClone: !0
}) {
  let n = i ?? {}, a = e ?? {};
  t.deepClone && (n = we(n), a = we(a));
  for (const l of Object.keys(a)) {
    const m = a[l], r = n[l];
    m && typeof m == "object" && !Array.isArray(m) && r && typeof r == "object" && !Array.isArray(r) ? n[l] = ft(
      r,
      m,
      t
    ) : m !== void 0 && (n[l] = m);
  }
  return n;
}
function we(i) {
  if (typeof i == "function" || i === null || typeof i != "object")
    return i;
  if (Array.isArray(i))
    return i.map((t) => we(t));
  const e = {};
  for (const t of Object.keys(i))
    e[t] = we(i[t]);
  return e;
}
function Mt(i, e) {
  const t = ye.extractDate(i, e);
  if (!Number.isNaN(t.getTime()))
    return t;
  const n = new Date(i);
  return Number.isNaN(n.getTime()) ? t : n;
}
const v = {
  callAllEvents: zt,
  humanStorageSize: Lt,
  deepMergeObject: ft,
  deepCloneObject: we,
  superExtractDate: Mt
}, Q = {
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
}, Pe = {
  cover: !0
};
function Pt() {
  return {
    ...ge
  };
}
function Ht() {
  return {
    ...ge
  };
}
function jt() {
  return {
    input: {
      ...ge
    },
    icon: {
      name: "colorize",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...Pe
    },
    color: {}
  };
}
function Qt() {
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
function Yt() {
  return {
    color: Q.color
  };
}
function Gt() {
  return {
    input: {
      ...ge
    },
    icon: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxy: {
      ...Pe
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
function Wt() {
  return {
    input: {
      ...ge
    },
    iconDate: {
      name: "event",
      class: "cursor-pointer"
    },
    popupProxyDate: {
      ...Pe
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
      ...Pe
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
    select: {
      ...ge
    }
  };
}
function Xt() {
  return {
    uploader: {
      color: Q.color
    }
  };
}
function en() {
  return {
    uploader: {
      color: Q.color
    }
  };
}
function tn() {
  return {};
}
function nn() {
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
function an() {
  return {
    fields: {
      string: Pt(),
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
const mt = {
  getDefaultFormBindings: an,
  getEmptyDefaultBindings: ln
}, rn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, on = { class: "col" }, sn = { class: "q-uploader__title" }, un = /* @__PURE__ */ $({
  __name: "HeaderUploaderHasMany",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), N("div", rn, [
      W("div", on, [
        W("div", sn, L(e.fieldApi.field.label), 1)
      ]),
      i.scope.canAddFiles ? (o(), C(p(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: i.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          x(p(ot))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), cn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, dn = { class: "col" }, fn = { class: "q-uploader__title" }, mn = /* @__PURE__ */ $({
  __name: "HeaderUploaderHasOne",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(i) {
    const e = i, t = ne(() => {
      var n, a;
      return e.fieldApi.refs.modelValue.value ? (((n = e.fieldApi.field.attachmentData) == null ? void 0 : n.length) ?? 0) === 0 || (((a = e.fieldApi.field.attachmentData) == null ? void 0 : a.length) ?? !0) && e.fieldApi.refs.modelValue.value.delete.length === 1 : !0;
    });
    return (n, a) => (o(), N("div", cn, [
      W("div", dn, [
        W("div", fn, L(e.fieldApi.field.label), 1)
      ]),
      i.scope.canAddFiles && t.value ? (o(), C(p(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: i.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: S(() => [
          x(p(ot))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), pn = {
  key: 0,
  class: "flex column"
}, gn = { class: "text-weight-medium text-body2" }, vn = {
  key: 2,
  class: "flex column"
}, hn = { class: "text-weight-medium text-body2" }, bn = /* @__PURE__ */ $({
  __name: "ListUploaderHasMany",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(i) {
    const e = i;
    function t(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete.push(m.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = r.delete.filter((f) => f !== m.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    const a = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (m, r) => {
      var f;
      return o(), N(X, null, [
        a.value ? I("", !0) : (o(), N("div", pn, [
          W("div", gn, " Fichier" + L((((f = e.fieldApi.field.attachmentData) == null ? void 0 : f.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne ", 1),
          x(p(Le), { separator: "" }, {
            default: S(() => [
              (o(!0), N(X, null, P(e.fieldApi.field.attachmentData ?? [], (y) => (o(), C(p(Ne), {
                key: y.attachment_id
              }, {
                default: S(() => [
                  x(p(oe), null, {
                    default: S(() => [
                      x(p(se), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          te(L(y.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(p(se), { caption: "" }, {
                        default: S(() => [
                          te(L(p(v).humanStorageSize(y.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  e.fieldApi.refs.modelValue.value ? (o(), C(p(oe), {
                    key: 0,
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      l.value.includes(y.attachment_id) ? I("", !0) : (o(), C(p(Z), {
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
                      l.value.includes(y.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), C(p(Z), {
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
        !a.value && i.scope.files.length > 0 ? (o(), C(p(st), { key: 1 })) : I("", !0),
        i.scope.files.length > 0 ? (o(), N("div", vn, [
          W("div", hn, " Fichier" + L(i.scope.files.length > 0 ? "s" : "") + " à ajouter ", 1),
          x(p(Le), { separator: "" }, {
            default: S(() => [
              (o(!0), N(X, null, P(i.scope.files, (y) => (o(), C(p(Ne), {
                key: y.__key
              }, {
                default: S(() => [
                  x(p(oe), null, {
                    default: S(() => [
                      x(p(se), { class: "full-width ellipsis" }, {
                        default: S(() => [
                          te(L(y.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      x(p(se), { caption: "" }, {
                        default: S(() => [
                          te(L(y.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  x(p(oe), {
                    top: "",
                    side: ""
                  }, {
                    default: S(() => [
                      x(p(Z), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (u) => i.scope.removeFile(y)
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
}, An = /* @__PURE__ */ $({
  __name: "ListUploaderHasOne",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(i) {
    const e = i;
    function t(m) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = [m.attachment_id], e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n() {
      let m = e.fieldApi.refs.modelValue.value;
      m.delete = [], e.fieldApi.setValue(m), e.fieldApi.validate();
    }
    const a = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (m, r) => (o(), N(X, null, [
      a.value ? I("", !0) : (o(), N("div", yn, [
        r[0] || (r[0] = W("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
        x(p(Le), { separator: "" }, {
          default: S(() => [
            (o(!0), N(X, null, P(e.fieldApi.field.attachmentData ?? [], (f) => (o(), C(p(Ne), {
              key: f.attachment_id
            }, {
              default: S(() => [
                x(p(oe), null, {
                  default: S(() => [
                    x(p(se), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        te(L(f.filename), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(p(se), { caption: "" }, {
                      default: S(() => [
                        te(L(p(v).humanStorageSize(f.size)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                e.fieldApi.refs.modelValue.value ? (o(), C(p(oe), {
                  key: 0,
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    l.value.includes(f.attachment_id) ? I("", !0) : (o(), C(p(Z), {
                      key: 0,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => t(f)
                    }, null, 8, ["disable", "onClick"])),
                    l.value.includes(f.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (o(), C(p(Z), {
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
      !a.value && i.scope.files.length > 0 ? (o(), C(p(st), { key: 1 })) : I("", !0),
      i.scope.files.length > 0 ? (o(), N("div", _n, [
        r[1] || (r[1] = W("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
        x(p(Le), { separator: "" }, {
          default: S(() => [
            (o(!0), N(X, null, P(i.scope.files, (f) => (o(), C(p(Ne), {
              key: f.__key
            }, {
              default: S(() => [
                x(p(oe), null, {
                  default: S(() => [
                    x(p(se), { class: "full-width ellipsis" }, {
                      default: S(() => [
                        te(L(f.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    x(p(se), { caption: "" }, {
                      default: S(() => [
                        te(L(f.__sizeLabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                x(p(oe), {
                  top: "",
                  side: ""
                }, {
                  default: S(() => [
                    x(p(Z), {
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (y) => i.scope.removeFile(f)
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
}), kn = /* @__PURE__ */ $({
  __name: "ColorPicker",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => e.fieldApi.field.readonly ? (o(), C(p(ue), z(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), C(p(ue), z(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(p(Me), z(H(e.fieldApi.field.bindings.popupProxy)), {
          default: S(() => [
            x(p(Ot), R(e.fieldApi.field.bindings.color, {
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
}), Fn = { class: "row items-center justify-end" }, Vn = /* @__PURE__ */ $({
  __name: "IconDatePicker",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(i) {
    const e = i, t = B();
    function n() {
      t.value && t.value.hide();
    }
    return (a, l) => e.fieldApi.field.readonly ? (o(), C(p(ue), z(R({ key: 1 }, e.fieldApi.field.bindings.icon)), null, 16)) : (o(), C(p(ue), z(R({ key: 0 }, e.fieldApi.field.bindings.icon)), {
      default: S(() => [
        x(p(Me), R({ ref: "popupProxyRef" }, e.fieldApi.field.bindings.popupProxy), {
          default: S(() => [
            x(p(ut), R(e.fieldApi.field.bindings.date, {
              "model-value": e.fieldApi.refs.modelValue.value,
              mask: e.formApi.form.formSettings.dateFormat,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), {
              default: S(() => [
                W("div", Fn, [
                  x(p(Z), R(e.fieldApi.field.bindings.btn, { onClick: n }), null, 16)
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
const Sn = { class: "row items-center justify-end" }, Cn = { class: "row items-center justify-end" }, xn = /* @__PURE__ */ $({
  __name: "IconDatetimePicker",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(i) {
    const e = i, t = B(), n = B();
    function a() {
      t.value && t.value.hide();
    }
    function l() {
      n.value && n.value.hide();
    }
    function m() {
      if (e.formApi.form.formSettings.enableQuasarBigBangComponents) {
        const r = Ke(), f = r == null ? void 0 : r.appContext.components["qbb-time"];
        if (f)
          return f;
        Te.log("Component QBBTime from Quasar BigBang not found");
      }
      return Rt;
    }
    return (r, f) => e.fieldApi.field.readonly ? (o(), N(X, { key: 1 }, [
      x(p(ue), z(H(e.fieldApi.field.bindings.iconDate)), null, 16),
      x(p(ue), z(H(e.fieldApi.field.bindings.iconDatetime)), null, 16)
    ], 64)) : (o(), N(X, { key: 0 }, [
      x(p(ue), z(H(e.fieldApi.field.bindings.iconDate)), {
        default: S(() => [
          x(p(Me), R({
            ref_key: "datePopupProxyRef",
            ref: t
          }, e.fieldApi.field.bindings.popupProxyDate), {
            default: S(() => [
              x(p(ut), R(e.fieldApi.field.bindings.date, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  W("div", Sn, [
                    x(p(Z), R(e.fieldApi.field.bindings.btnDate, { onClick: a }), null, 16)
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
      x(p(ue), z(H(e.fieldApi.field.bindings.iconDatetime)), {
        default: S(() => [
          x(p(Me), R({
            ref_key: "timePopupProxyRef",
            ref: n
          }, e.fieldApi.field.bindings.popupProxyDatetime), {
            default: S(() => [
              (o(), C(M(m()), R(e.fieldApi.field.bindings.datetime, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: S(() => [
                  W("div", Cn, [
                    x(p(Z), R(e.fieldApi.field.bindings.btnDatetime, { onClick: l }), null, 16)
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
}), Ye = /* @__PURE__ */ $({
  __name: "AssociationDisplayComponent",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(i) {
    const e = i;
    return console.log(e.formApi.form.resourceName ?? "NOOO"), console.log(e.scope.selected), (t, n) => {
      const a = Qe("q-item-label"), l = Qe("q-item-section"), m = Qe("q-item");
      return o(), C(m, z(H(e.scope.itemProps)), {
        default: S(() => [
          x(l, null, {
            default: S(() => [
              x(a, null, {
                default: S(() => [
                  te(L(e.scope.opt.label), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
}), Ge = /* @__PURE__ */ $({
  __name: "NoOptionComponent",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), C(p(Ne), z(H(e.fieldApi.field.bindings.itemNoOption)), {
      default: S(() => [
        x(p(oe), null, {
          default: S(() => [
            x(p(se), null, {
              default: S(() => [
                te(L(e.formApi.form.formSettings.associationEmptyMessage), 1)
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
}), Dn = { class: "flex column" }, En = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Nn = /* @__PURE__ */ $({
  __name: "ActionComponent",
  props: {
    formApi: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), N("div", Dn, [
      W("div", En, [
        x(p(Z), R(e.formApi.form.bindings.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (o(), C(p(Z), R({ key: 0 }, e.formApi.form.bindings.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.form.formSettings.showClearButton ? (o(), C(p(Z), R({ key: 1 }, e.formApi.form.bindings.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), wn = { class: "flex column" }, Tn = /* @__PURE__ */ $({
  __name: "OrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), N("div", wn, [
      (o(!0), N(X, null, P(e.formApi.refs.orphanErrors.value, (a, l) => (o(), N("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, L(l) + " : " + L(a.join(",")), 1))), 128))
    ]));
  }
}), Bn = { class: "propsComponent.sectionApi.section.bindings.class" }, In = { class: "flex row items-center" }, On = { class: "text-body1 text-weight-medium" }, Rn = { class: "flex column q-gutter-md" }, $n = /* @__PURE__ */ $({
  __name: "SectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), N("div", Bn, [
      W("div", In, [
        e.sectionApi.section.icon ? (o(), C(p(ue), R({ key: 0 }, e.sectionApi.section.bindings.icon, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : I("", !0),
        W("div", On, L(e.sectionApi.section.label), 1)
      ]),
      W("div", Rn, [
        (o(), C(M(e.sectionApi.section.fieldsComponent)))
      ])
    ]));
  }
});
function Un() {
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
        append: xn
      },
      select: {
        "no-option": Ge,
        option: Ye
      },
      hasMany: {
        "no-option": Ge,
        option: Ye
      },
      belongsTo: {
        "no-option": Ge,
        option: Ye
      },
      attachmentHasOne: {
        header: mn,
        list: An
      },
      attachmentHasMany: {
        header: un,
        list: bn
      },
      byName: {}
    },
    sections: {
      default: $n,
      byName: {}
    },
    form: {
      actions: Nn,
      orphanErrors: Tn
    }
  };
}
function qn() {
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
const pt = {
  getDefaultFormSlots: Un,
  getEmptyDefaultSlots: qn
}, je = class je {
  constructor() {
    q(this, "_formSettings");
    q(this, "_formBindings");
    q(this, "_formSlots");
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
    }, this._formBindings = mt.getDefaultFormBindings(), this._formSlots = pt.getDefaultFormSlots();
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
q(je, "_instance", new je());
let Ce = je;
class He {
  constructor(e) {
    q(this, "formApi");
    q(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const n = e, a = t, l = new zn(n, a, this.formApi);
    return this.events.push(l), new Ln(l);
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
      const a = n.getTarget();
      switch (a.target) {
        case "field":
          t.fields[a.targetName] || (t.fields[a.targetName] = {}), t.fields[a.targetName][a.key] || (t.fields[a.targetName][a.key] = []), t.fields[a.targetName][a.key].push(n.getActionCallback());
          break;
        case "section":
          t.sections[a.targetName] || (t.sections[a.targetName] = {}), t.sections[a.targetName][a.key] || (t.sections[a.targetName][a.key] = []), t.sections[a.targetName][a.key].push(n.getActionCallback());
          break;
        case "form":
          t.form[a.key] || (t.form[a.key] = []), t.form[a.key].push(
            n.getActionCallback()
          );
          break;
      }
    }), t;
  }
}
class zn {
  constructor(e, t, n) {
    q(this, "type");
    q(this, "data");
    q(this, "formApi");
    q(this, "action", () => {
    });
    q(this, "cyclicActionCallSet", /* @__PURE__ */ new Set());
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
class Ln {
  constructor(e) {
    q(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
  do(e) {
    return this.formEvent.action = e, this;
  }
}
const Mn = { style: { "font-weight": "500", padding: "4px 0" } }, ce = /* @__PURE__ */ $({
  __name: "FieldLabel",
  props: {
    name: {}
  },
  setup(i) {
    const e = i;
    return (t, n) => (o(), N("div", Mn, [
      qt(t.$slots, "default", {}, () => [
        te(L(e.name), 1)
      ])
    ]));
  }
}), Pn = { class: "flex column" }, Hn = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        a,
        l,
        void 0,
        void 0,
        m,
        r
      ), ke(() => {
        var f;
        (f = t.value) == null || f.resetValidation();
      });
    }), (f, y) => (o(), N("div", Pn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Be), R({
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
        P(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(M(u), z(H({
              ...s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), jn = { class: "flex column" }, Qn = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        a,
        l,
        void 0,
        void 0,
        m,
        r
      ), ke(() => {
        var f;
        (f = t.value) == null || f.resetValidation();
      });
    }), (f, y) => (o(), N("div", jn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Be), R({
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
        P(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(M(u), z(H({
              ...s ?? {},
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
}, Wn = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B(!0);
    function n() {
      for (const m of e.fieldApi.field.computedRules)
        if (t.value = m(e.modelValue), t.value !== !0)
          break;
      return a();
    }
    function a() {
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
      e.registerBehaviourCallbacks(n, a, l);
    }), (m, r) => (o(), N("div", Yn, [
      x(p($t), R({ ref: "checkboxRef" }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        label: e.fieldApi.field.label,
        "aria-readonly": e.fieldApi.field.readonly,
        class: "q-pb-md",
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (f, y) => ({
          name: y,
          fn: S((u) => [
            (o(), C(M(f), z(H({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "aria-readonly", "onUpdate:modelValue"]),
      t.value !== !0 ? (o(), N("div", Gn, L(t.value), 1)) : I("", !0)
    ]));
  }
}), Jn = { class: "flex column" }, Kn = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B([]), n = B([]), a = B();
    function l(D, c) {
      if (D === "") {
        c(() => {
          n.value = [...t.value];
        });
        return;
      }
      c(() => {
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
      return a.value ? a.value.validate() : !1;
    }
    function f() {
      return a.value ? !a.value.hasError : !1;
    }
    function y() {
      a.value && a.value.resetValidation();
    }
    function u() {
      n.value = [];
    }
    function A() {
      a.value && a.value.focus();
    }
    function s() {
      a.value && a.value.blur();
    }
    return J(() => {
      m(), e.registerBehaviourCallbacks(
        r,
        f,
        y,
        void 0,
        u,
        A,
        s
      );
    }), (D, c) => (o(), N("div", Jn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Je), R({
        ref_key: "fieldRef",
        ref: a
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
        P(e.fieldApi.field.slots, (h, g) => ({
          name: g,
          fn: S((k) => [
            (o(), C(M(h), z(H({
              ...k ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Zn = { class: "flex column" }, lt = "__init", Xn = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B([]), n = B(
      m()
    ), a = B(), l = B(lt);
    function m() {
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
      }).then((V) => {
        k(() => {
          t.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = m();
      });
    }
    function f() {
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
      return a.value ? a.value.validate() : !1;
    }
    function u() {
      return a.value ? !a.value.hasError : !1;
    }
    function A() {
      a.value && a.value.resetValidation();
    }
    function s() {
      n.value = m(), t.value = [], l.value = lt;
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
    function c() {
      a.value && a.value.focus();
    }
    function h() {
      a.value && a.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        A,
        f,
        s,
        c,
        h
      ), ke(() => {
        f();
      });
    }), (g, k) => (o(), N("div", Zn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Je), R({
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
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((V) => [
            (o(), C(M(E), z(H({
              ...V ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ei = { class: "flex column" }, rt = "__init", ti = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B([]), n = B(
      m()
    ), a = B(), l = B(rt);
    function m() {
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
      }).then((V) => {
        k(() => {
          t.value = V.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            V.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = m();
      });
    }
    function f() {
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = g.map((k, E) => ({
        label: e.fieldApi.field.associationData[E].label ?? "???",
        value: k,
        data: e.fieldApi.field.associationData[E].data
      })));
    }
    function y() {
      return a.value ? a.value.validate() : !1;
    }
    function u() {
      return a.value ? !a.value.hasError : !1;
    }
    function A() {
      a.value && a.value.resetValidation();
    }
    function s() {
      n.value = m(), t.value = [], l.value = rt;
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
    function c() {
      a.value && a.value.focus();
    }
    function h() {
      a.value && a.value.blur();
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        y,
        u,
        A,
        f,
        s,
        c,
        h
      ), ke(() => {
        f();
      });
    }), (g, k) => (o(), N("div", ei, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Je), R({
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
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (E, T) => ({
          name: T,
          fn: S((V) => [
            (o(), C(M(E), z(H({
              ...V ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"])
    ]));
  }
}), ni = { class: "flex column" }, ii = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        a,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (f, y) => (o(), N("div", ni, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Be), R({
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
        P(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(M(u), z(H({
              ...s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["rules", "label", "readonly", "model-value", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ai = { class: "flex column" }, li = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        a,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (f, y) => (o(), N("div", ai, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Be), R({
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
        P(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(M(u), z(H({
              ...s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "rules", "label", "readonly", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ri = { class: "flex column" }, oi = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return !!t.value;
    }
    function a() {
      return !!t.value;
    }
    function l() {
    }
    function m(s) {
      var c;
      s.preventDefault(), s.stopPropagation();
      const D = (c = s.clipboardData) == null ? void 0 : c.items;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          if (g.type.startsWith("image/")) {
            const k = g.getAsFile();
            k && f(k);
          }
        }
    }
    function r(s) {
      var c;
      s.preventDefault(), s.stopPropagation();
      const D = (c = s.dataTransfer) == null ? void 0 : c.files;
      if (D)
        for (let h = 0; h < D.length; h++) {
          const g = D[h];
          g.type.startsWith("image/") && g && f(g);
        }
    }
    function f(s) {
      if (!t.value)
        return;
      const D = new FileReader();
      D.onload = (c) => {
        var g;
        const h = (g = c.target) == null ? void 0 : g.result;
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
            label: ze.props.editor.align,
            icon: qe.props.editor.align,
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
            label: ze.props.editor.formatting,
            icon: qe.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: ze.props.editor.fontSize,
            icon: qe.props.editor.fontSize,
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
            label: ze.props.editor.defaultFont,
            icon: qe.props.editor.font,
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
        a,
        l,
        void 0,
        void 0,
        y,
        u
      );
    }), (s, D) => (o(), N("div", ri, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Ut), R({
        ref_key: "fieldRef",
        ref: t,
        toolbar: A()
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        onDrop: r,
        onPaste: m,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (c, h) => ({
          name: h,
          fn: S((g) => [
            (o(), C(M(c), z(H({
              ...g ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["toolbar", "model-value", "onUpdate:modelValue"])
    ]));
  }
}), si = { class: "flex column" }, ui = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B();
    function n() {
      return t.value ? t.value.validate() : !1;
    }
    function a() {
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
    return J(() => {
      e.registerBehaviourCallbacks(
        n,
        a,
        l,
        void 0,
        void 0,
        m,
        r
      );
    }), (f, y) => (o(), N("div", si, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (o(), C(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      x(p(Be), R({
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
        P(e.fieldApi.field.slots, (u, A) => ({
          name: A,
          fn: S((s) => [
            (o(), C(M(u), z(H({
              ...s ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ci = { class: "flex column" }, di = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, fi = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B(null), n = B(!1);
    function a() {
      let c = e.modelValue;
      c.add = [], c.delete = [], e.modelValueOnUpdate(c), D();
    }
    function l() {
      var h;
      let c = e.modelValue;
      c.add = [], c.delete = ((h = e.fieldApi.field.attachmentData) == null ? void 0 : h.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(c), D();
    }
    function m() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function f() {
      t.value = null;
    }
    async function y(c) {
      return new Promise((h) => {
        const g = new Blob([c]), k = new FileReader();
        k.onload = (E) => {
          var j;
          const T = ((j = E.target) == null ? void 0 : j.result) ?? "", [V, K] = T.split(",");
          h(K);
        }, k.readAsDataURL(g);
      });
    }
    async function u(c) {
      return {
        key: `${c.lastModified}${c.name}`,
        size: c.size,
        filename: c.name,
        contentType: c.type,
        base64: await y(await c.arrayBuffer())
      };
    }
    async function A(c) {
      if (!c[0])
        return;
      n.value = !0;
      const h = await u(c[0]);
      let g = e.modelValue;
      g.add = [h], n.value = !1, e.modelValueOnUpdate(g), D();
    }
    function s(c) {
      if (!c[0])
        return;
      let h = e.modelValue;
      h.add = [], h.delete = [], e.modelValueOnUpdate(h), D();
    }
    function D() {
      t.value = null;
      for (const c of e.fieldApi.field.computedRules) {
        const h = c(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        m,
        r,
        f,
        a,
        l
      );
    }), (c, h) => (o(), N("div", ci, [
      x(p(ct), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: s,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (g, k) => ({
          name: k,
          fn: S((E) => [
            (o(), C(M(g), z(H({
              ...E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", di, L(t.value), 1)) : I("", !0)
    ]));
  }
}), mi = { class: "flex column" }, pi = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, gi = /* @__PURE__ */ $({
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
  setup(i) {
    const e = i, t = B(null), n = B(!1);
    function a() {
      let c = e.modelValue;
      c.add = [], c.delete = [], e.modelValueOnUpdate(c), D();
    }
    function l() {
      var h;
      let c = e.modelValue;
      c.add = [], c.delete = ((h = e.fieldApi.field.attachmentData) == null ? void 0 : h.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(c), D();
    }
    function m() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function f() {
      t.value = null;
    }
    async function y(c) {
      return new Promise((h) => {
        const g = new Blob([c]), k = new FileReader();
        k.onload = (E) => {
          var j;
          const T = ((j = E.target) == null ? void 0 : j.result) ?? "", [V, K] = T.split(",");
          h(K);
        }, k.readAsDataURL(g);
      });
    }
    async function u(c) {
      return {
        key: `${c.lastModified}${c.name}`,
        size: c.size,
        filename: c.name,
        contentType: c.type,
        base64: await y(await c.arrayBuffer())
      };
    }
    async function A(c) {
      n.value = !0;
      for (const h of c) {
        const g = await u(h);
        let k = e.modelValue;
        k.add.push(g), e.modelValueOnUpdate(k);
      }
      n.value = !1, D();
    }
    async function s(c) {
      n.value = !0;
      for (const h of c) {
        const g = await u(h);
        let k = e.modelValue;
        k.add = k.add.filter((E) => E.key !== g.key), e.modelValueOnUpdate(k);
      }
      n.value = !1, D();
    }
    function D() {
      t.value = null;
      for (const c of e.fieldApi.field.computedRules) {
        const h = c(e.modelValue);
        if (typeof h == "string") {
          t.value = h;
          break;
        }
      }
    }
    return J(() => {
      e.registerBehaviourCallbacks(
        m,
        r,
        f,
        a,
        l
      );
    }), (c, h) => (o(), N("div", mi, [
      x(p(ct), R(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.fieldApi.field.label,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: s,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (g, k) => ({
          name: k,
          fn: S((E) => [
            (o(), C(M(g), z(H({
              ...E ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "readonly"]),
      t.value !== null ? (o(), N("div", pi, L(t.value), 1)) : I("", !0)
    ]));
  }
});
function vi(i, e) {
  const t = i.rules ?? [], n = i.type, a = e.form, l = (y, u, A) => y[u] ? A ? () => m(y[u]) : () => y[u] : y.compare_to ? () => {
    var s;
    return ((s = e.getFieldByName(y.compare_to)) == null ? void 0 : s.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", m = (y) => String(
    ye.formatDate(
      v.superExtractDate(y, a.formSettings.backendDateFormat),
      a.formSettings.dateFormat
    )
  ), r = [], f = [];
  switch (n) {
    case "date":
      r.push(We(a.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(We(a.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((y) => {
    const u = y;
    switch (u.type) {
      case "required":
        r.push(hi());
        break;
      case "absence":
        r.push(yi());
        break;
      case "acceptance":
        r.push(_i());
        break;
      case "inclusion":
        r.push(gt(u.including));
        break;
      case "exclusion":
        r.push(bi(u.excluding));
        break;
      case "backend":
        break;
      case "allowNull":
        f.push("allowNull");
        break;
      case "allowBlank":
        f.push("allowBlank");
        break;
      case "positiveNumber":
        r.push(Fi());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Vi(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Si(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          Ci(
            l(u, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          xi(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          Di(l(u, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Ei(
            l(u, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(Ni());
        break;
      case "numberNumericOnly":
        r.push(wi());
        break;
      case "numberEvenOnly":
        r.push(Ti());
        break;
      case "numberOddOnly":
        r.push(Bi());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ii(
            l(u, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Oi(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Ri(
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
          zi(
            l(u, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          qi(l(u, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Ui(
            () => u.min,
            () => u.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Li(
            l(u, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(We(a.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          Mi(
            l(u, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          Pi(
            l(u, "less_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          Hi(
            l(u, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          ji(
            l(u, "greater_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Qi(
            l(u, "equal_to", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Yi(
            l(u, "other_than", !0),
            a.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          Wi()
        );
        break;
      case "allowFileContentType":
        r.push(
          Ji(
            l(u, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          Ki(
            l(u, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          Xi(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          Zi(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          ea(
            l(u, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          ta(
            l(u, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          na(
            l(u, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          ia(
            l(u, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          aa(
            l(u, "equal_to")
          )
        );
        break;
    }
  }), f.length > 0 ? f.map((y) => {
    switch (y) {
      case "allowBlank":
        return ki(r);
      case "allowNull":
        return Ai(r);
    }
  }) : r;
}
function hi() {
  return (i) => !!i || "Ce champ est requis";
}
function gt(i) {
  return (e) => i.includes(String(e)) || `Doit être contenu dans ${i.toString()}`;
}
function bi(i) {
  return (e) => !i.includes(
    String(e) || `Ne doit pas être contenu dans ${gt.toString()}`
  );
}
function yi() {
  return (i) => !i || "Ce champ doit être vide";
}
function _i() {
  return (i) => !!i || "Doit être accepté";
}
function Ai(i) {
  return (e) => (e === null || i.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function ki(i) {
  return (e) => (e === "" || i.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function Fi() {
  return (i) => Number(i) > 0 || "Val. positive uniquement";
}
function Vi(i) {
  return (e) => {
    const t = i();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Si(i) {
  return (e) => {
    const t = i();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function Ci(i) {
  return (e) => {
    const t = i();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function xi(i) {
  return (e) => {
    const t = i();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Di(i, e) {
  return (t) => {
    const n = i();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Ei(i, e) {
  return (t) => {
    const n = i();
    return Number(t) !== n || `Doit être différent de ${i}`;
  };
}
function Ni() {
  return (i) => /^-?\d+$/.test(String(i).trim()) || "Nombre entier uniquement";
}
function wi() {
  return (i) => /^-?\d+(\.\d+)?$/.test(String(i).trim()) || "Caractère numérique uniquement";
}
function Ti() {
  return (i) => Number.isInteger(Number(i)) && Number(i) % 2 === 0 || "Nombre pair uniquement";
}
function Bi() {
  return (i) => Number.isInteger(Number(i)) && Number(i) % 2 === 1 || "Nombre impair uniquement";
}
function Ii(i) {
  return (e) => {
    const t = i();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Oi(i) {
  return (e) => {
    const t = i();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Ri(i) {
  return (e) => {
    const t = i();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function $i(i) {
  return (e) => {
    const t = i();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Ui(i, e) {
  return (t) => {
    const n = i(), a = e();
    return String(t).length >= n && String(t).length <= a || `Entre ${n} et ${a}`;
  };
}
function qi(i, e) {
  return (t) => {
    const n = i();
    return String(t) === n || `Égale à ${n}`;
  };
}
function zi(i) {
  return (e) => {
    const t = i();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Li(i) {
  return (e) => {
    const t = i();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function Mi(i, e) {
  return (t) => {
    const n = i(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return a <= l || `Inf. ou égal à ${n}`;
  };
}
function Pi(i, e) {
  return (t) => {
    const n = i(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return a < l || `Inf. à ${n}`;
  };
}
function Hi(i, e) {
  return (t) => {
    const n = i(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return a >= l || `Sup. ou égal à ${n}`;
  };
}
function ji(i, e) {
  return (t) => {
    const n = i(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return a > l || `Sup. à ${n}`;
  };
}
function Qi(i, e) {
  return (t) => {
    const n = i(), a = v.superExtractDate(String(t), e), l = v.superExtractDate(n, e);
    return a === l || `Égale à ${a}`;
  };
}
function Yi(i, e) {
  return (t) => {
    const n = i();
    return v.superExtractDate(String(t), e) !== v.superExtractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function We(i) {
  return (e) => e == null || e === "" ? !0 : Gi(e, i) || `Date invalide. Format : ${i}`;
}
function Gi(i, e) {
  if (typeof i != "string" || !i.trim())
    return !1;
  const t = v.superExtractDate(i, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : ye.formatDate(t, e) === i;
}
function Wi() {
  return (i) => i.add.length > 0 || "Ce champ est requis";
}
function Ji(i) {
  return (e) => {
    const t = e, n = i();
    let a = !0;
    t.add.forEach((m) => {
      a && (n.includes(m.contentType) || (a = !1));
    });
    const l = i.length > 1;
    return a || `Type${l ? "s" : ""} autorisé${l ? "s" : ""} : ${n.join(",")}`;
  };
}
function Ki(i) {
  return (e) => {
    const t = e, n = i();
    let a = !0;
    return t.add.forEach((l) => {
      a && n !== l.size && (a = !1);
    }), a || `Taille par fichier ${v.humanStorageSize(n)}`;
  };
}
function Zi(i) {
  return (e) => {
    const t = e, n = i();
    let a = !0;
    return t.add.forEach((l) => {
      a && l.size < n && (a = !1);
    }), a || `Taille par fichier min. ${v.humanStorageSize(n)}`;
  };
}
function Xi(i) {
  return (e) => {
    const t = e, n = i();
    let a = !0;
    return t.add.forEach((l) => {
      a && l.size > n && (a = !1);
    }), a || `Taille par fichier max. ${v.humanStorageSize(n)}`;
  };
}
function ea(i) {
  return (e) => {
    const t = e, n = i();
    return t.add.length <= n || `${n} fichier${n > 1 ? "s" : ""} max.`;
  };
}
function ta(i) {
  return (e) => {
    const t = e, n = i();
    return t.add.length >= n || `${n} fichier${n > 1 ? "s" : ""} min.`;
  };
}
function na(i) {
  return (e) => {
    const t = e, n = i();
    return t.add.reduce((l, m) => (l += m.size, l), 0) <= n || `${v.humanStorageSize(n)} max.`;
  };
}
function ia(i) {
  return (e) => {
    const t = e, n = i();
    return t.add.reduce((l, m) => (l += m.size, l), 0) >= n || `${v.humanStorageSize(n)} min.`;
  };
}
function aa(i) {
  return (e) => {
    const t = e, n = i();
    return t.add.reduce((l, m) => (l += m.size, l), 0) === n || `Taille totale ${v.humanStorageSize(n)}`;
  };
}
const la = {
  computeServerRules: vi
};
class Ae {
  constructor(e, t, n, a, l, m, r, f, y, u, A, s) {
    q(this, "resourceName");
    q(this, "resourceId");
    q(this, "formMetadataAndData");
    q(this, "context");
    q(this, "formSettings");
    q(this, "formBind");
    q(this, "formSlots");
    q(this, "templateSlots");
    q(this, "formApi");
    q(this, "registerEventCallback");
    this.formMetadataAndData = n, this.resourceId = t, this.context = f, this.resourceName = e, this.formApi = y, this.formSettings = v.deepMergeObject(
      Ce.getGlobalFormSetting(),
      a ?? {}
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
      bindings: mt.getEmptyDefaultBindings().form,
      slots: pt.getEmptyDefaultSlots()
    };
  }
  static getForm(e, t, n, a, l, m, r, f, y, u, A, s) {
    return new Ae(
      e,
      t,
      n,
      a,
      l,
      m,
      r,
      f,
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
          (c, h) => {
            if (h[0].includes(D) && h[1] !== void 0) {
              e.set(h[0], !0);
              const g = h[0].replace(D, "");
              c.push([g, Ee(h[1])]);
            }
            return c;
          },
          []
        )
      );
    }, n = (A) => {
      for (let s of Object.values(A))
        s && (s = Ee(s));
      return A;
    }, a = He.create(this.formApi);
    this.registerEventCallback(a);
    const l = /* @__PURE__ */ new Set(), m = He.getEventsObjectFromInstance(a), r = [];
    this.formMetadataAndData.form.sections.forEach(
      (A, s) => {
        var T;
        const D = [];
        A.fields.forEach((V) => {
          const K = Ae.getFieldTypeByFieldMetadata(V), j = Ae.getFieldComponentByFieldType(K), de = v.deepMergeObject(
            v.deepMergeObject(
              this.formSlots.fields[K],
              this.formSlots.fields.byName[V.field_name]
            ),
            t("field", V.field_name)
          ), ie = v.deepMergeObject(
            this.getBindingsByFormFieldType(K),
            this.formBind.fields.byName[V.field_name]
          );
          let re = V.label;
          this.formSettings.requiredFieldsHasAsterisk && V.rules.find((le) => le.type === "required") && (re = re.concat("*"));
          const ae = {
            type: K,
            metadata: Object.freeze(V),
            label: re,
            readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? V.readonly ?? void 0,
            staticSelectOptions: V.static_select_options,
            associationData: V.field_association_data,
            attachmentData: V.field_attachment_data,
            rules: V.rules,
            computedRules: [],
            // late init
            bindings: ie,
            hidden: !1,
            mainComponent: Ee(j),
            events: m.fields[V.field_name] ?? {},
            slots: n(de)
          };
          ae.computedRules = la.computeServerRules(
            ae,
            this.formApi
          ), D.push(ae), l.add(V.field_name);
        });
        const c = A.name ?? s.toString(), h = {
          ...this.formSlots.sections,
          ...t("section", c)
        }, g = ((T = this.formSlots.fields.byName[c]) == null ? void 0 : T.default) ?? this.formSlots.sections.default, k = v.deepMergeObject(
          this.formBind.sections.default,
          this.formBind.sections.byName[c]
        ), E = {
          label: A.label ?? void 0,
          icon: A.icon ?? void 0,
          hidden: !1,
          name: c,
          index: s,
          bindings: k,
          readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? void 0,
          events: m.sections[A.name ?? s.toString()] ?? {},
          mainComponent: Ee(g),
          fieldsComponent: void 0,
          fields: D,
          slots: n(h)
        };
        r.push(E);
      }
    );
    const f = {
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
      slots: n(f),
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
      string: ii,
      color: ui,
      wysiwyg: oi,
      number: li,
      date: Hn,
      datetime: Qn,
      checkbox: Wn,
      select: Kn,
      belongsTo: Xn,
      hasMany: ti,
      attachmentHasOne: fi,
      attachmentHasMany: gi
    }[e];
  }
}
const ra = { class: "flex column" }, oa = /* @__PURE__ */ $({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(i, { expose: e }) {
    const t = i;
    let n = null, a = null, l = null;
    const m = dt(), r = {
      softReset: u,
      reset: A,
      clear: s,
      validate: h,
      isValid: g,
      isInvalid: k,
      hide: D,
      unhide: c,
      resetValidation: E,
      getFields: T,
      setReadonlyState: V,
      setIcon: K,
      setLabel: j,
      tryFocusFirst: re,
      tryUnfocus: ae,
      setBindings: ve,
      section: t.section
    }, f = B(/* @__PURE__ */ new Map());
    function y() {
      t.section.fields.forEach((b) => {
        const w = b.metadata.field_name, Y = t.formApi.getFieldByName(w);
        Y && f.value.set(w, Y);
      });
    }
    function u() {
      f.value.forEach((b) => {
        b.softReset();
      });
    }
    function A() {
      f.value.forEach((b) => {
        b.reset();
      }), v.callAllEvents(t.section.events.onReset);
    }
    function s() {
      f.value.forEach((b) => {
        b.clear();
      }), v.callAllEvents(t.section.events.onClear);
    }
    function D() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (f.value.forEach((w) => {
        w.hide();
      }), b.hidden = !0, v.callAllEvents(t.section.events.onHide));
    }
    function c() {
      const b = t.privateFormApi.getSectionRef(
        t.section.name
      );
      b && (f.value.forEach((w) => {
        w.unhide();
      }), b.hidden = !1, v.callAllEvents(t.section.events.onUnhide));
    }
    function h() {
      let b = !0;
      return f.value.forEach((w) => {
        if (!w.validate()) {
          b = !1;
          return;
        }
      }), v.callAllEvents(t.section.events.onValidated), b;
    }
    function g() {
      let b = !0;
      return f.value.forEach((w) => {
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
      f.value.forEach((b) => {
        b.resetValidation();
      });
    }
    function T() {
      return f.value;
    }
    function V(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.readonly = b);
    }
    function K(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.icon = b);
    }
    function j(b) {
      const w = t.privateFormApi.getSectionRef(
        t.section.name
      );
      w && (w.label = b);
    }
    function de() {
      const b = {};
      for (const [w, Y] of f.value)
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
      const w = $({
        inheritAttrs: !1,
        setup(Y, { attrs: De, slots: fe }) {
          return () => b(
            {
              ...Y,
              ...De
            },
            fe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(
        t.section,
        Ee(w)
      );
    }
    function re() {
      for (const b of T().values())
        if (b.tryFocus(), b.isFocus())
          return !0;
      return !1;
    }
    function ae() {
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
    const Fe = ne(() => g()), Ve = ne(() => k()), xe = ne(() => de());
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
        a == null || a(), a = null, b && (a = G(Ve, (w) => {
          var Y;
          w && v.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onIsInvalid);
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
          xe,
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
      ie();
      const b = (w = Ke()) == null ? void 0 : w.exposed;
      b && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        b
      ), ke(() => {
        var Y;
        y(), v.callAllEvents((Y = t.section) == null ? void 0 : Y.events.onReady);
      });
    }), (b, w) => Ze((o(), N("div", ra, [
      t.section.slots["wrapper-before"] ? (o(), C(M(t.section.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), C(M(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.slots["wrapper-after"] ? (o(), C(M(t.section.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [Xe, t.section.hidden !== !0]
    ]);
  }
}), sa = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, ua = ["index"], ca = /* @__PURE__ */ $({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(i, { expose: e }) {
    const t = i;
    let n = () => !0, a = () => !0, l = () => {
    }, m = () => {
    }, r = () => {
    }, f = () => {
    }, y = () => {
    };
    const u = B(""), A = B(!1), s = B([]);
    function D() {
      const _ = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      );
      u.value = h(_);
    }
    function c() {
      const _ = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      );
      u.value = h(_), v.callAllEvents(t.field.events.onReset), m(), ke(() => {
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
      return p(u);
    }
    function V() {
      return g(p(u));
    }
    function K(_) {
      s.value = _;
    }
    function j() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function de() {
      const _ = j();
      _.hidden = !0, v.callAllEvents(t.field.events.onHide);
    }
    function ie() {
      const _ = j();
      _.hidden = !1, v.callAllEvents(t.field.events.onUnhide);
    }
    function re(_) {
      const U = j();
      U.readonly = _;
    }
    function ae(_) {
      const U = j();
      U.label = _;
    }
    function le() {
      const _ = n();
      return v.callAllEvents(t.field.events.onValidated), _;
    }
    function ve() {
      return a();
    }
    function Fe() {
      return !ve();
    }
    function Ve() {
      return l();
    }
    function xe() {
      A.value || (f(), A.value = !0);
    }
    function b() {
      A.value && (y(), A.value = !1);
    }
    function w() {
      return A.value;
    }
    function Y(_) {
      const U = j();
      U.bindings = v.deepMergeObject(U.bindings, _);
    }
    function De(_, U, me, Se, Ie, Oe, Re) {
      n = _, a = U, l = me, Se && (m = Se), Ie && (r = Ie), Oe && (f = Oe), Re && (y = Re);
    }
    const fe = {
      softReset: D,
      reset: c,
      clear: k,
      validate: le,
      isValid: ve,
      isInvalid: Fe,
      hide: de,
      unhide: ie,
      resetValidation: Ve,
      getValueDeserialized: V,
      getValueSerialized: T,
      setupBackendErrors: K,
      setReadonlyState: re,
      setLabel: ae,
      tryFocus: xe,
      tryUnfocus: b,
      isFocus: w,
      setBindings: Y,
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
      const _ = (U = Ke()) == null ? void 0 : U.exposed;
      _ && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        _
      ), v.callAllEvents((me = t.field) == null ? void 0 : me.events.onReady);
    }), (_, U) => Ze((o(), N("div", null, [
      t.field.slots["wrapper-before"] ? (o(), C(M(t.field.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      (o(), C(M(t.field.mainComponent), {
        modelValue: u.value,
        fieldApi: fe,
        formApi: t.formApi,
        reset: c,
        clear: k,
        getValueDeserialized: V,
        getValueSerialized: T,
        validate: le,
        modelValueOnUpdate: E,
        registerBehaviourCallbacks: De
      }, null, 8, ["modelValue", "formApi"])),
      t.field.slots["wrapper-after"] ? (o(), C(M(t.field.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      s.value.length > 0 ? (o(), N("div", sa, [
        (o(!0), N(X, null, P(s.value, (me, Se) => (o(), N("div", {
          index: Se,
          class: "flex column"
        }, L(me), 9, ua))), 256))
      ])) : I("", !0)
    ], 512)), [
      [Xe, t.field.hidden !== !0]
    ]);
  }
}), pa = /* @__PURE__ */ $({
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
    associationDisplayRecord: {},
    eventManager: {},
    context: {},
    class: {},
    sectionContainerClass: {}
  },
  setup(i, { expose: e }) {
    const t = i;
    let n = null, a = "", l = 0, m = 0, r = null, f = null, y = null, u = null;
    const A = dt(), s = B(Ae.getEmptyFormBeforeInit()), D = B(!1), c = B(!1), h = B(!1), g = B(!1), k = B("create"), E = B({}), T = B(/* @__PURE__ */ new Map()), V = B(/* @__PURE__ */ new Map());
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
        de(),
        t.context,
        he,
        t.eventManager,
        t.class,
        t.sectionContainerClass
      ), l = s.value.sections.length, m = s.value.sections.reduce((d, F) => (d += F.fields.length, d), 0), t.resourceId && (k.value = "edit");
    }
    async function j() {
      var O, be, $e;
      if (!ae())
        return;
      v.callAllEvents((O = s.value) == null ? void 0 : O.events.onSubmit), g.value = !0, w();
      const d = ie(), F = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
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
          de(),
          s.value.context,
          he,
          t.eventManager,
          t.class,
          t.sectionContainerClass
        ), Fe(), a = JSON.stringify(ie()), v.callAllEvents(($e = s.value) == null ? void 0 : $e.events.onSubmitSuccess);
      else {
        E.value = {};
        const Ue = [];
        for (const [pe, Tt] of V.value) {
          const it = F.errors[pe];
          it && (Tt.setupBackendErrors(it), Ue.push(pe));
        }
        Object.entries(F.errors).forEach((pe) => {
          Ue.includes(pe[0]) || (E.value[pe[0]] = pe[1]);
        }), v.callAllEvents((be = s.value) == null ? void 0 : be.events.onSubmitUnsuccess);
      }
      g.value = !1;
    }
    function de() {
      const d = {};
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
          d[F] = be;
        }
      }
      return d;
    }
    function ie() {
      const d = {};
      for (const [F, O] of V.value)
        d[F] = O.getValueDeserialized();
      return d;
    }
    function re() {
      const d = {};
      for (const [F, O] of V.value)
        d[F] = O.getValueSerialized();
      return d;
    }
    function ae() {
      var F;
      let d = !0;
      return V.value.forEach((O) => {
        if (!O.validate()) {
          d = !1;
          return;
        }
      }), v.callAllEvents((F = s.value) == null ? void 0 : F.events.onValidated), d;
    }
    function le() {
      let d = !0;
      return V.value.forEach((F) => {
        if (!F.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function ve() {
      return !le();
    }
    function Fe() {
      T.value.forEach((d) => {
        d.softReset();
      });
    }
    function Ve() {
      var d;
      V.value.forEach((F) => {
        F.reset();
      }), v.callAllEvents((d = s.value) == null ? void 0 : d.events.onReset);
    }
    function xe() {
      var d;
      V.value.forEach((F) => {
        F.clear();
      }), v.callAllEvents((d = s.value) == null ? void 0 : d.events.onClear);
    }
    function b() {
      V.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function w() {
      V.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function Y(d) {
      if (n)
        return n.resource_data[d];
    }
    function De(d) {
      return T.value.get(d);
    }
    function fe(d) {
      return [...T.value.values()].at(d);
    }
    function _() {
      return T.value;
    }
    function U(d) {
      return V.value.get(d);
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
      return p(k);
    }
    function Re() {
      return a !== JSON.stringify(ie());
    }
    function vt(d) {
      s.value && (s.value.context = d);
    }
    function ht(d) {
      s.value && (s.value.readonly = d);
    }
    function bt(d) {
      s.value && v.deepMergeObject(s.value.formSettings, d);
    }
    function yt(d) {
      s.value && v.deepMergeObject(s.value.bindings, d);
    }
    function _t() {
      return h.value;
    }
    function At() {
      return u;
    }
    function et() {
      for (const d of _().values())
        if (d.tryFocusFirst())
          return !0;
      return !1;
    }
    function kt() {
      for (const d of _().values())
        if (d.tryUnfocus())
          return !0;
      return !1;
    }
    function Ft() {
      return s;
    }
    function Vt(d) {
      var F;
      return (F = s.value) == null ? void 0 : F.sections.find((O) => O.name === d);
    }
    function St(d) {
      var F;
      return (F = s.value) == null ? void 0 : F.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === d);
    }
    function Ct(d, F) {
      T.value.set(d, F), l === T.value.size && (D.value = !0);
    }
    function xt(d, F) {
      V.value.set(d, F), m === V.value.size && (c.value = !0);
    }
    function Dt(d, F) {
      d.fieldsComponent = F;
    }
    const tt = ne(() => le()), Et = ne(() => ve()), Nt = ne(() => re()), nt = {
      getFormRef: Ft,
      getSectionRef: Vt,
      getFieldRef: St,
      registerSectionWrapperRef: Ct,
      registerFieldWrapperRef: xt,
      setSectionFieldComponent: Dt
    }, wt = new Proxy({}, {
      get(d, F) {
        var O;
        return (O = s.value) == null ? void 0 : O[F];
      }
    }), he = {
      getMode: Oe,
      getSectionByName: De,
      getSectionByIndex: fe,
      getSections: _,
      getFieldByName: U,
      getFields: me,
      validate: ae,
      isValid: le,
      isInvalid: ve,
      softReset: Fe,
      reset: Ve,
      clear: xe,
      resetValidation: b,
      submit: j,
      valuesHasChanged: Re,
      getInitialValueByFieldName: Y,
      getAssociationDataCallback: Se,
      setContext: vt,
      setReadonlyState: ht,
      setSettings: bt,
      setBindings: yt,
      isReady: _t,
      getSubmitData: At,
      tryFocusFirst: et,
      tryUnfocus: kt,
      form: wt,
      refs: {
        orphanErrors: _e(E),
        isLoadingSubmit: _e(g),
        setupIsDone: _e(h),
        isFormValid: _e(tt)
      }
    };
    return e(he), G(
      () => D.value && c.value,
      (d) => {
        var F;
        d && !h.value && (v.callAllEvents((F = s.value) == null ? void 0 : F.events.onReady), h.value = !0);
      }
    ), G(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        r == null || r(), r = null, d && (r = G(tt, (F) => {
          var O;
          F && v.callAllEvents((O = s.value) == null ? void 0 : O.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        f == null || f(), f = null, d && (f = G(Et, (F) => {
          var O;
          F && v.callAllEvents((O = s.value) == null ? void 0 : O.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), G(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        y == null || y(), y = null, d && (y = G(
          Nt,
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
        a = JSON.stringify(ie()), s.value.formSettings.autofocus && et();
      });
    }), (d, F) => Ze((o(), N("div", {
      class: at(s.value.bindings.default.class ?? "flex column")
    }, [
      W("div", {
        class: at(
          s.value.bindings.default.sectionContainerClass ?? "flex column q-pa-sm q-gutter-sm"
        )
      }, [
        (o(!0), N(X, null, P(s.value.sections, (O) => (o(), C(oa, {
          key: O.name,
          section: O,
          formApi: he,
          privateFormApi: nt
        }, {
          default: S(() => [
            (o(!0), N(X, null, P(O.fields, (be) => (o(), C(ca, {
              key: be.metadata.field_name,
              field: be,
              formApi: he,
              privateFormApi: nt
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      s.value.slots["orphan-errors"] ? (o(), C(M(s.value.slots.orphanErrors), {
        key: 0,
        formApi: he
      })) : I("", !0),
      s.value.slots.actions ? (o(), C(M(s.value.slots.actions), {
        key: 1,
        formApi: he
      })) : I("", !0)
    ], 2)), [
      [Xe, h.value]
    ]);
  }
});
export {
  He as DynamicLogicBuilder,
  Ce as Submit64,
  pa as Submit64Form
};
