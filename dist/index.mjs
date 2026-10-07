var Tt = Object.defineProperty;
var Bt = (a, e, t) => e in a ? Tt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var z = (a, e, t) => Bt(a, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as R, openBlock as s, createElementBlock as N, createElementVNode as J, toDisplayString as L, createBlock as S, unref as p, withCtx as V, createVNode as C, createCommentVNode as I, computed as ne, Fragment as ae, renderList as P, createTextVNode as te, normalizeProps as H, guardReactiveProps as j, mergeProps as U, ref as B, resolveComponent as Ye, normalizeClass as rt, resolveDynamicComponent as M, renderSlot as It, onMounted as K, nextTick as Fe, createSlots as ee, watch as W, markRaw as De, useSlots as ot, getCurrentInstance as st, withDirectives as Ke, vShow as Xe, readonly as _e } from "vue";
import { QBtn as Z, QUploaderAddTrigger as ut, QList as ze, QItem as we, QItemSection as se, QItemLabel as ue, QSeparator as ct, QIcon as Ne, QPopupProxy as Le, QColor as Ot, QDate as dt, QTime as Rt, QInput as Te, QCheckbox as $t, QSelect as Ze, QEditor as Ut, IconSet as Ue, Lang as qe, QUploader as ft, date as q } from "quasar";
function qt(a) {
  for (const e of a ?? [])
    e();
}
function zt(a) {
  const e = ["B", "KB", "MB", "GB", "TB", "PB"];
  let t = 0;
  for (; parseInt(a.toString(), 10) >= 1024 && t < e.length - 1; )
    a /= 1024, ++t;
  return `${a.toFixed(1)}${e[t]}`;
}
function mt(a, e, t = {
  deepClone: !0
}) {
  let n = a ?? {}, i = e ?? {};
  t.deepClone && (n = Ee(n), i = Ee(i));
  for (const l of Object.keys(i)) {
    const f = i[l], r = n[l];
    f && typeof f == "object" && !Array.isArray(f) && r && typeof r == "object" && !Array.isArray(r) ? n[l] = mt(
      r,
      f,
      t
    ) : f !== void 0 && (n[l] = f);
  }
  return n;
}
function Ee(a) {
  if (typeof a == "function" || a === null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map((t) => Ee(t));
  const e = {};
  for (const t of Object.keys(a))
    e[t] = Ee(a[t]);
  return e;
}
const x = {
  callAllEvents: qt,
  humanStorageSize: zt,
  deepMergeObject: mt,
  deepCloneObject: Ee
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
function Pt() {
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
function Ht() {
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
function jt() {
  return {
    color: Y.color
  };
}
function Qt() {
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
function Yt() {
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
function Gt() {
  return {
    select: {
      ...ge
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
function Zt() {
  return {};
}
function en() {
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
function tn() {
  return {
    fields: {
      string: Lt(),
      number: Mt(),
      wysiwyg: Ht(),
      color: Pt(),
      checkbox: jt(),
      date: Qt(),
      datetime: Yt(),
      select: Jt(),
      hasMany: Wt(),
      belongsTo: Gt(),
      attachmentHasOne: Kt(),
      attachmentHasMany: Xt(),
      byName: {}
    },
    sections: {
      default: Zt(),
      byName: {}
    },
    form: {
      actions: en()
    }
  };
}
function nn() {
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
  getDefaultFormBindings: tn,
  getEmptyDefaultBindings: nn
}, an = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, ln = { class: "col" }, rn = { class: "q-uploader__title" }, on = /* @__PURE__ */ R({
  __name: "HeaderUploaderHasMany",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), N("div", an, [
      J("div", ln, [
        J("div", rn, L(e.fieldApi.field.label), 1)
      ]),
      a.scope.canAddFiles ? (s(), S(p(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: V(() => [
          C(p(ut))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), sn = { class: "row no-wrap items-center q-pa-sm q-gutter-xs" }, un = { class: "col" }, cn = { class: "q-uploader__title" }, dn = /* @__PURE__ */ R({
  __name: "HeaderUploaderHasOne",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a, t = ne(() => {
      var n, i;
      return e.fieldApi.refs.modelValue.value ? (((n = e.fieldApi.field.attachmentData) == null ? void 0 : n.length) ?? 0) === 0 || (((i = e.fieldApi.field.attachmentData) == null ? void 0 : i.length) ?? !0) && e.fieldApi.refs.modelValue.value.delete.length === 1 : !0;
    });
    return (n, i) => (s(), N("div", sn, [
      J("div", un, [
        J("div", cn, L(e.fieldApi.field.label), 1)
      ]),
      a.scope.canAddFiles && t.value ? (s(), S(p(Z), {
        key: 0,
        type: "a",
        icon: "add_box",
        onClick: a.scope.pickFiles,
        round: "",
        dense: "",
        flat: ""
      }, {
        default: V(() => [
          C(p(ut))
        ]),
        _: 1
      }, 8, ["onClick"])) : I("", !0)
    ]));
  }
}), fn = {
  key: 0,
  class: "flex column"
}, mn = { class: "text-weight-medium text-body2" }, pn = {
  key: 2,
  class: "flex column"
}, gn = { class: "text-weight-medium text-body2" }, vn = /* @__PURE__ */ R({
  __name: "ListUploaderHasMany",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    function t(f) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete.push(f.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n(f) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = r.delete.filter((m) => m !== f.attachment_id), e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    const i = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (f, r) => {
      var m;
      return s(), N(ae, null, [
        i.value ? I("", !0) : (s(), N("div", fn, [
          J("div", mn, " Fichier" + L((((m = e.fieldApi.field.attachmentData) == null ? void 0 : m.length) ?? 0) > 0 ? "s" : "") + " déjà en ligne ", 1),
          C(p(ze), { separator: "" }, {
            default: V(() => [
              (s(!0), N(ae, null, P(e.fieldApi.field.attachmentData ?? [], (b) => (s(), S(p(we), {
                key: b.attachment_id
              }, {
                default: V(() => [
                  C(p(se), null, {
                    default: V(() => [
                      C(p(ue), { class: "full-width ellipsis" }, {
                        default: V(() => [
                          te(L(b.filename), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(p(ue), { caption: "" }, {
                        default: V(() => [
                          te(L(p(x).humanStorageSize(b.size)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  e.fieldApi.refs.modelValue.value ? (s(), S(p(se), {
                    key: 0,
                    top: "",
                    side: ""
                  }, {
                    default: V(() => [
                      l.value.includes(b.attachment_id) ? I("", !0) : (s(), S(p(Z), {
                        key: 0,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (o) => t(b)
                      }, null, 8, ["disable", "onClick"])),
                      l.value.includes(b.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (s(), S(p(Z), {
                        key: 1,
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "refresh",
                        onClick: (o) => n(b)
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
        !i.value && a.scope.files.length > 0 ? (s(), S(p(ct), { key: 1 })) : I("", !0),
        a.scope.files.length > 0 ? (s(), N("div", pn, [
          J("div", gn, " Fichier" + L(a.scope.files.length > 0 ? "s" : "") + " à ajouter ", 1),
          C(p(ze), { separator: "" }, {
            default: V(() => [
              (s(!0), N(ae, null, P(a.scope.files, (b) => (s(), S(p(we), {
                key: b.__key
              }, {
                default: V(() => [
                  C(p(se), null, {
                    default: V(() => [
                      C(p(ue), { class: "full-width ellipsis" }, {
                        default: V(() => [
                          te(L(b.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      C(p(ue), { caption: "" }, {
                        default: V(() => [
                          te(L(b.__sizeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  C(p(se), {
                    top: "",
                    side: ""
                  }, {
                    default: V(() => [
                      C(p(Z), {
                        class: "gt-xs",
                        size: "12px",
                        disable: e.fieldApi.field.readonly,
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "delete",
                        onClick: (o) => a.scope.removeFile(b)
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
}), hn = {
  key: 0,
  class: "flex column"
}, bn = {
  key: 2,
  class: "flex column"
}, yn = /* @__PURE__ */ R({
  __name: "ListUploaderHasOne",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    function t(f) {
      let r = e.fieldApi.refs.modelValue.value;
      r.delete = [f.attachment_id], e.fieldApi.setValue(r), e.fieldApi.validate();
    }
    function n() {
      let f = e.fieldApi.refs.modelValue.value;
      f.delete = [], e.fieldApi.setValue(f), e.fieldApi.validate();
    }
    const i = ne(() => (e.fieldApi.field.attachmentData ?? []).length === 0), l = ne(() => e.fieldApi.refs.modelValue.value ? e.fieldApi.refs.modelValue.value.delete : []);
    return (f, r) => (s(), N(ae, null, [
      i.value ? I("", !0) : (s(), N("div", hn, [
        r[0] || (r[0] = J("div", { class: "text-weight-medium text-body2" }, "Fichier déjà en ligne", -1)),
        C(p(ze), { separator: "" }, {
          default: V(() => [
            (s(!0), N(ae, null, P(e.fieldApi.field.attachmentData ?? [], (m) => (s(), S(p(we), {
              key: m.attachment_id
            }, {
              default: V(() => [
                C(p(se), null, {
                  default: V(() => [
                    C(p(ue), { class: "full-width ellipsis" }, {
                      default: V(() => [
                        te(L(m.filename), 1)
                      ]),
                      _: 2
                    }, 1024),
                    C(p(ue), { caption: "" }, {
                      default: V(() => [
                        te(L(p(x).humanStorageSize(m.size)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                e.fieldApi.refs.modelValue.value ? (s(), S(p(se), {
                  key: 0,
                  top: "",
                  side: ""
                }, {
                  default: V(() => [
                    l.value.includes(m.attachment_id) ? I("", !0) : (s(), S(p(Z), {
                      key: 0,
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (b) => t(m)
                    }, null, 8, ["disable", "onClick"])),
                    l.value.includes(m.attachment_id) && e.fieldApi.refs.modelValue.value.add.length === 0 ? (s(), S(p(Z), {
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
      !i.value && a.scope.files.length > 0 ? (s(), S(p(ct), { key: 1 })) : I("", !0),
      a.scope.files.length > 0 ? (s(), N("div", bn, [
        r[1] || (r[1] = J("div", { class: "text-weight-medium text-body2" }, "Fichier de remplacement", -1)),
        C(p(ze), { separator: "" }, {
          default: V(() => [
            (s(!0), N(ae, null, P(a.scope.files, (m) => (s(), S(p(we), {
              key: m.__key
            }, {
              default: V(() => [
                C(p(se), null, {
                  default: V(() => [
                    C(p(ue), { class: "full-width ellipsis" }, {
                      default: V(() => [
                        te(L(m.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    C(p(ue), { caption: "" }, {
                      default: V(() => [
                        te(L(m.__sizeLabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                C(p(se), {
                  top: "",
                  side: ""
                }, {
                  default: V(() => [
                    C(p(Z), {
                      class: "gt-xs",
                      size: "12px",
                      disable: e.fieldApi.field.readonly,
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "delete",
                      onClick: (b) => a.scope.removeFile(m)
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
}), _n = /* @__PURE__ */ R({
  __name: "ColorPicker",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), S(p(Ne), H(j(e.fieldApi.field.bindings.icon)), {
      default: V(() => [
        C(p(Le), H(j(e.fieldApi.field.bindings.popupProxy)), {
          default: V(() => [
            C(p(Ot), U(e.fieldApi.field.bindings.color, {
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
}), An = { class: "row items-center justify-end" }, Fn = /* @__PURE__ */ R({
  __name: "IconDatePicker",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a, t = B();
    function n() {
      t.value && t.value.hide();
    }
    return (i, l) => (s(), S(p(Ne), H(j(e.fieldApi.field.bindings.icon)), {
      default: V(() => [
        C(p(Le), U({ ref: "popupProxyRef" }, e.fieldApi.field.bindings.popupProxy), {
          default: V(() => [
            C(p(dt), U(e.fieldApi.field.bindings.date, {
              "model-value": e.fieldApi.refs.modelValue.value,
              mask: e.formApi.form.formSettings.dateFormat,
              "onUpdate:modelValue": e.fieldApi.setValue
            }), {
              default: V(() => [
                J("div", An, [
                  C(p(Z), U(e.fieldApi.field.bindings.btn, { onClick: n }), null, 16)
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
}), kn = { class: "row items-center justify-end" }, Vn = { class: "row items-center justify-end" }, Sn = /* @__PURE__ */ R({
  __name: "IconDatetimePicker",
  props: {
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
    return (f, r) => (s(), N(ae, null, [
      C(p(Ne), H(j(e.fieldApi.field.bindings.iconDate)), {
        default: V(() => [
          C(p(Le), U({ ref: "popupProxyRef" }, e.fieldApi.field.bindings.popupProxyDate), {
            default: V(() => [
              C(p(dt), U(e.fieldApi.field.bindings.date, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.dateFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: V(() => [
                  J("div", kn, [
                    C(p(Z), U(e.fieldApi.field.bindings.btnDate, { onClick: i }), null, 16)
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
      C(p(Ne), H(j(e.fieldApi.field.bindings.iconDatetime)), {
        default: V(() => [
          C(p(Le), U({
            ref_key: "timePopupProxyRef",
            ref: n
          }, e.fieldApi.field.bindings.popupProxyDate), {
            default: V(() => [
              C(p(Rt), U(e.fieldApi.field.bindings.datetime, {
                "model-value": e.fieldApi.refs.modelValue.value,
                mask: e.formApi.form.formSettings.datetimeFormat,
                "onUpdate:modelValue": e.fieldApi.setValue
              }), {
                default: V(() => [
                  J("div", Vn, [
                    C(p(Z), U(e.fieldApi.field.bindings.btnDatetime, { onClick: l }), null, 16)
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
    ], 64));
  }
}), Ge = /* @__PURE__ */ R({
  __name: "AssociationDisplayComponent",
  props: {
    formApi: {},
    fieldApi: {},
    scope: {}
  },
  setup(a) {
    const e = a;
    return console.log(e.formApi.form.resourceName ?? "NOOO"), console.log(e.scope.selected), (t, n) => {
      const i = Ye("q-item-label"), l = Ye("q-item-section"), f = Ye("q-item");
      return s(), S(f, H(j(e.scope.itemProps)), {
        default: V(() => [
          C(l, null, {
            default: V(() => [
              C(i, null, {
                default: V(() => [
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
}), We = /* @__PURE__ */ R({
  __name: "NoOptionComponent",
  props: {
    formApi: {},
    fieldApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), S(p(we), H(j(e.fieldApi.field.bindings.itemNoOption)), {
      default: V(() => [
        C(p(se), null, {
          default: V(() => [
            C(p(ue), null, {
              default: V(() => [
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
}), Cn = { class: "flex column" }, xn = { class: "flex row items-center no-wrap q-pt-sm q-gutter-x-sm" }, Dn = /* @__PURE__ */ R({
  __name: "ActionComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), N("div", Cn, [
      J("div", xn, [
        C(p(Z), U(e.formApi.form.bindings.actions.submitBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          disable: !e.formApi.refs.isFormValid.value,
          onClick: e.formApi.submit
        }), null, 16, ["loading", "disable", "onClick"]),
        e.formApi.form.formSettings.showResetButton ? (s(), S(p(Z), U({ key: 0 }, e.formApi.form.bindings.actions.resetBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.reset
        }), null, 16, ["loading", "onClick"])) : I("", !0),
        e.formApi.form.formSettings.showClearButton ? (s(), S(p(Z), U({ key: 1 }, e.formApi.form.bindings.actions.clearBtn, {
          loading: e.formApi.refs.isLoadingSubmit.value,
          onClick: e.formApi.clear
        }), null, 16, ["loading", "onClick"])) : I("", !0)
      ])
    ]));
  }
}), wn = { class: "flex column" }, Nn = /* @__PURE__ */ R({
  __name: "OrphanErrorsComponent",
  props: {
    formApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), N("div", wn, [
      (s(!0), N(ae, null, P(e.formApi.refs.orphanErrors.value, (i, l) => (s(), N("div", {
        key: l,
        class: "q-field--error q-field__bottom text-negative"
      }, L(l) + " : " + L(i.join(",")), 1))), 128))
    ]));
  }
}), En = { class: "flex row items-center" }, Tn = { class: "text-body1 text-weight-medium" }, Bn = { class: "flex column q-gutter-md" }, In = /* @__PURE__ */ R({
  __name: "SectionComponent",
  props: {
    formApi: {},
    sectionApi: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), N("div", {
      class: rt(e.sectionApi.section.cssClass)
    }, [
      J("div", En, [
        e.sectionApi.section.icon ? (s(), S(p(Ne), U({ key: 0 }, e.sectionApi.section.bindings, {
          name: e.sectionApi.section.icon,
          size: "sm"
        }), null, 16, ["name"])) : I("", !0),
        J("div", Tn, L(e.sectionApi.section.label), 1)
      ]),
      J("div", Bn, [
        (s(), S(M(e.sectionApi.section.fieldsComponent)))
      ])
    ], 2));
  }
});
function On() {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {
        append: _n
      },
      checkbox: {},
      date: {
        append: Fn
      },
      datetime: {
        append: Sn
      },
      select: {
        "no-option": We,
        option: Ge
      },
      hasMany: {
        "no-option": We,
        option: Ge
      },
      belongsTo: {
        "no-option": We,
        option: Ge
      },
      attachmentHasOne: {
        header: dn,
        list: yn
      },
      attachmentHasMany: {
        header: on,
        list: vn
      },
      byName: {}
    },
    sections: {
      default: In,
      byName: {}
    },
    form: {
      actions: Dn,
      orphanErrors: Nn
    }
  };
}
function Rn() {
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
const gt = {
  getDefaultFormSlots: On,
  getEmptyDefaultSlots: Rn
}, je = class je {
  constructor() {
    z(this, "_formSettings");
    z(this, "_formBindings");
    z(this, "_formSlots");
    this._formSettings = {
      backendDateFormat: "YYYY/MM/DD",
      backendDatetimeFormat: "YYYY/MM/DD HH:mm",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY HH:mm",
      associationEmptyMessage: "Vide",
      // TODO i18n like system with big object for all translation
      renderBackendHint: !0,
      requiredFieldsHasAsterisk: !0,
      showResetButton: !0,
      showClearButton: !0,
      autofocus: !0,
      displayLabelInsideInput: !0
    }, this._formBindings = pt.getDefaultFormBindings(), this._formSlots = gt.getDefaultFormSlots();
  }
  static registerGlobalFormSetting(e) {
    this._instance._formSettings = x.deepMergeObject(
      this._instance._formSettings,
      e
    );
  }
  static registerGlobalFormBindings(e) {
    this._instance._formBindings = x.deepMergeObject(
      this._instance._formBindings,
      e
    );
  }
  static registerGlobalFormSlots(e) {
    this._instance._formSlots = x.deepMergeObject(
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
let Ve = je;
class Pe {
  static log(e) {
    console.warn(`Submit64 -> ${e}`);
  }
}
class He {
  constructor(e) {
    z(this, "formApi");
    z(this, "events", []);
    this.formApi = e;
  }
  when(e, t) {
    const n = e, i = t, l = new $n(n, i, this.formApi);
    return this.events.push(l), new Un(l);
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
class $n {
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
        return Pe.log(`Submit64 -> unhandled event target : ${this.type}`), {
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
class Un {
  constructor(e) {
    z(this, "formEvent");
    this.formEvent = e;
  }
  then(e) {
    return this.formEvent.action = e, this;
  }
}
const qn = { style: { "font-weight": "500", padding: "4px 0" } }, ce = /* @__PURE__ */ R({
  __name: "FieldLabel",
  props: {
    name: {}
  },
  setup(a) {
    const e = a;
    return (t, n) => (s(), N("div", qn, [
      It(t.$slots, "default", {}, () => [
        te(L(e.name), 1)
      ])
    ]));
  }
}), zn = { class: "flex column" }, Ln = /* @__PURE__ */ R({
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
    function f() {
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
        f,
        r
      ), Fe(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, b) => (s(), N("div", zn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Te), U({
        ref_key: "fieldRef",
        ref: t
      }, m.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        class: e.fieldApi.field.cssClass,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (o, A) => ({
          name: A,
          fn: V((u) => [
            (s(), S(M(o), H(j({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Mn = { class: "flex column" }, Pn = /* @__PURE__ */ R({
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
    function f() {
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
        f,
        r
      ), Fe(() => {
        var m;
        (m = t.value) == null || m.resetValidation();
      });
    }), (m, b) => (s(), N("div", Mn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Te), U({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        class: e.fieldApi.field.cssClass,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (o, A) => ({
          name: A,
          fn: V((u) => [
            (s(), S(M(o), H(j({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Hn = { class: "flex column" }, jn = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, Qn = /* @__PURE__ */ R({
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
      for (const f of e.fieldApi.field.computedRules)
        if (t.value = f(e.modelValue), t.value !== !0)
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
    }), (f, r) => (s(), N("div", Hn, [
      C(p($t), U({ ref: "checkboxRef" }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        label: e.fieldApi.field.label,
        "aria-readonly": e.fieldApi.field.readonly,
        class: [e.fieldApi.field.cssClass, "q-pb-md"],
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (m, b) => ({
          name: b,
          fn: V((o) => [
            (s(), S(M(m), H(j({
              ...o ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "aria-readonly", "class", "onUpdate:modelValue"]),
      t.value !== !0 ? (s(), N("div", jn, L(t.value), 1)) : I("", !0)
    ]));
  }
}), Yn = { class: "flex column" }, Gn = /* @__PURE__ */ R({
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
    function l(D, c) {
      if (D === "") {
        c(() => {
          n.value = [...t.value];
        });
        return;
      }
      c(() => {
        const v = D.toLowerCase();
        n.value = t.value.filter((g) => g.label.toLowerCase().includes(v));
      });
    }
    function f() {
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
    function b() {
      i.value && i.value.resetValidation();
    }
    function o() {
      n.value = [];
    }
    function A() {
      i.value && i.value.focus();
    }
    function u() {
      i.value && i.value.blur();
    }
    return K(() => {
      f(), e.registerBehaviourCallbacks(
        r,
        m,
        b,
        void 0,
        o,
        A,
        u
      );
    }), (D, c) => (s(), N("div", Yn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Ze), U({
        ref_key: "fieldRef",
        ref: i
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        class: e.fieldApi.field.cssClass,
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
        P(e.fieldApi.field.slots, (v, g) => ({
          name: g,
          fn: V((_) => [
            (s(), S(M(v), H(j({
              ..._ ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Wn = { class: "flex column" }, it = "__init", Jn = /* @__PURE__ */ R({
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
      f()
    ), i = B(), l = B(it);
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 2,
        isLoading: !1
      };
    }
    function r(g, _) {
      if (g === l.value) {
        _(() => {
        });
        return;
      }
      const w = e.formApi.getAssociationDataCallback();
      n.value = f(), l.value = g;
      const T = e.formApi.form;
      n.value.isLoading = !0, w({
        resourceName: T.resourceName,
        resourceId: T.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: g,
        context: T.context
      }).then((F) => {
        _(() => {
          t.value = F.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = f();
      });
    }
    function m() {
      var _, w;
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = [
        {
          label: ((_ = e.fieldApi.field.associationData[0]) == null ? void 0 : _.label) ?? "???",
          value: g,
          data: (w = e.fieldApi.field.associationData[0]) == null ? void 0 : w.data
        }
      ]);
    }
    function b() {
      return i.value ? i.value.validate() : !1;
    }
    function o() {
      return i.value ? !i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    function u() {
      n.value = f(), t.value = [], l.value = it;
    }
    function D(g) {
      const _ = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === _ && _ !== -1) {
        const w = e.formApi.form, T = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, T({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: l.value,
          context: w.context
        }).then((F) => {
          t.value = t.value.concat(
            F.rows
          ), n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), F.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function c() {
      i.value && i.value.focus();
    }
    function v() {
      i.value && i.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        b,
        o,
        A,
        m,
        u,
        c,
        v
      ), Fe(() => {
        m();
      });
    }), (g, _) => (s(), N("div", Wn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Ze), U({
        ref_key: "fieldRef",
        ref: i
      }, e.fieldApi.field.bindings.select, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        class: e.fieldApi.field.cssClass,
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
        P(e.fieldApi.field.slots, (w, T) => ({
          name: T,
          fn: V((F) => [
            (s(), S(M(w), H(j({
              ...F ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "class", "readonly", "rules", "options", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), Kn = { class: "flex column" }, lt = "__init", Xn = /* @__PURE__ */ R({
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
      f()
    ), i = B(), l = B(lt);
    function f() {
      return {
        limit: 30,
        nextPage: 1,
        lastPage: 100,
        isLoading: !1
      };
    }
    function r(g, _) {
      if (g === l.value) {
        _(() => {
        });
        return;
      }
      const w = e.formApi.getAssociationDataCallback();
      n.value = f(), l.value = g;
      const T = e.formApi.form;
      n.value.isLoading = !0, w({
        resourceName: T.resourceName,
        resourceId: T.resourceId,
        associationName: e.fieldApi.field.metadata.field_association_name,
        associationClassname: e.fieldApi.field.metadata.field_association_class,
        limit: n.value.limit,
        offset: (n.value.nextPage - 1) * n.value.limit,
        labelFilter: g,
        context: T.context
      }).then((F) => {
        _(() => {
          t.value = F.rows, n.value.nextPage = 2, n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), n.value.isLoading = !1;
        });
      }).catch(() => {
        t.value = [], n.value = f();
      });
    }
    function m() {
      const g = e.getValueSerialized();
      !g || !e.fieldApi.field.associationData || (t.value = g.map((_, w) => ({
        label: e.fieldApi.field.associationData[w].label ?? "???",
        value: _,
        data: e.fieldApi.field.associationData[w].data
      })));
    }
    function b() {
      return i.value ? i.value.validate() : !1;
    }
    function o() {
      return i.value ? !i.value.hasError : !1;
    }
    function A() {
      i.value && i.value.resetValidation();
    }
    function u() {
      n.value = f(), t.value = [], l.value = lt;
    }
    function D(g) {
      const _ = t.value.length - 1;
      if (n.value.isLoading !== !0 && n.value.nextPage <= n.value.lastPage && g.to === _ && _ !== -1) {
        const w = e.formApi.form, T = e.formApi.getAssociationDataCallback();
        n.value.isLoading = !0, T({
          resourceName: w.resourceName,
          resourceId: w.resourceId,
          associationName: e.fieldApi.field.metadata.field_association_name,
          associationClassname: e.fieldApi.field.metadata.field_association_class,
          limit: n.value.limit,
          offset: (n.value.nextPage - 1) * n.value.limit,
          labelFilter: l.value,
          context: w.context
        }).then((F) => {
          t.value = t.value.concat(
            F.rows
          ), n.value.lastPage = Math.ceil(
            F.row_count / n.value.limit
          ), F.row_count >= n.value.limit && n.value.nextPage++, n.value.isLoading = !1, g.ref.refresh();
        });
      }
    }
    function c() {
      i.value && i.value.focus();
    }
    function v() {
      i.value && i.value.blur();
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        b,
        o,
        A,
        m,
        u,
        c,
        v
      ), Fe(() => {
        m();
      });
    }), (g, _) => (s(), N("div", Kn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Ze), U({
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
        P(e.fieldApi.field.slots, (w, T) => ({
          name: T,
          fn: V((F) => [
            (s(), S(M(w), H(j({
              ...F ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "readonly", "rules", "options", "onUpdate:modelValue", "onClear"])
    ]));
  }
}), Zn = { class: "flex column" }, ea = /* @__PURE__ */ R({
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
    function f() {
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
        f,
        r
      );
    }), (m, b) => (s(), N("div", Zn, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Te), U({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        class: e.fieldApi.field.cssClass,
        "model-value": e.modelValue,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (o, A) => ({
          name: A,
          fn: V((u) => [
            (s(), S(M(o), H(j({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["rules", "label", "readonly", "class", "model-value", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), ta = { class: "flex column" }, na = /* @__PURE__ */ R({
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
    function f() {
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
        f,
        r
      );
    }), (m, b) => (s(), N("div", ta, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Te), U({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        type: "number",
        rules: e.fieldApi.field.computedRules,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        readonly: e.fieldApi.field.readonly,
        class: e.fieldApi.field.cssClass,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (o, A) => ({
          name: A,
          fn: V((u) => [
            (s(), S(M(o), H(j({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "rules", "label", "readonly", "class", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), aa = { class: "flex column" }, ia = /* @__PURE__ */ R({
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
    function f(u) {
      var c;
      u.preventDefault(), u.stopPropagation();
      const D = (c = u.clipboardData) == null ? void 0 : c.items;
      if (D)
        for (let v = 0; v < D.length; v++) {
          const g = D[v];
          if (g.type.startsWith("image/")) {
            const _ = g.getAsFile();
            _ && m(_);
          }
        }
    }
    function r(u) {
      var c;
      u.preventDefault(), u.stopPropagation();
      const D = (c = u.dataTransfer) == null ? void 0 : c.files;
      if (D)
        for (let v = 0; v < D.length; v++) {
          const g = D[v];
          g.type.startsWith("image/") && g && m(g);
        }
    }
    function m(u) {
      if (!t.value)
        return;
      const D = new FileReader();
      D.onload = (c) => {
        var g;
        const v = (g = c.target) == null ? void 0 : g.result;
        if (typeof v == "string") {
          const _ = new Image();
          _.onload = () => {
            var F;
            const w = _.width, T = _.height;
            (F = t.value) == null || F.runCmd(
              "insertHTML",
              `<img src="${v}" width="${w}" height="${T}" style="max-width: 80%; height: auto;" />`
            );
          }, _.src = v;
        }
      }, D.readAsDataURL(u);
    }
    function b() {
      t.value && t.value.focus();
    }
    function o() {
      t.value && t.value.getContentEl().blur();
    }
    function A() {
      return [
        [
          {
            label: qe.props.editor.align,
            icon: Ue.props.editor.align,
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
            icon: Ue.props.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"]
          },
          {
            label: qe.props.editor.fontSize,
            icon: Ue.props.editor.fontSize,
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
            icon: Ue.props.editor.font,
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
        b,
        o
      );
    }), (u, D) => (s(), N("div", aa, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Ut), U({
        ref_key: "fieldRef",
        ref: t,
        toolbar: A()
      }, e.fieldApi.field.bindings, {
        "model-value": e.modelValue,
        onDrop: r,
        onPaste: f,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (c, v) => ({
          name: v,
          fn: V((g) => [
            (s(), S(M(c), H(j({
              ...g ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["toolbar", "model-value", "onUpdate:modelValue"])
    ]));
  }
}), la = { class: "flex column" }, ra = /* @__PURE__ */ R({
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
    function f() {
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
        f,
        r
      );
    }), (m, b) => (s(), N("div", la, [
      e.formApi.form.formSettings.displayLabelInsideInput ? I("", !0) : (s(), S(ce, {
        key: 0,
        name: e.fieldApi.field.label
      }, null, 8, ["name"])),
      C(p(Te), U({
        ref_key: "fieldRef",
        ref: t
      }, e.fieldApi.field.bindings.input, {
        "model-value": e.modelValue,
        label: e.formApi.form.formSettings.displayLabelInsideInput ? e.fieldApi.field.label : void 0,
        class: e.fieldApi.field.cssClass,
        readonly: e.fieldApi.field.readonly,
        rules: e.fieldApi.field.computedRules,
        onClear: e.clear,
        "onUpdate:modelValue": e.modelValueOnUpdate
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (o, A) => ({
          name: A,
          fn: V((u) => [
            (s(), S(M(o), H(j({
              ...u ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["model-value", "label", "class", "readonly", "rules", "onClear", "onUpdate:modelValue"])
    ]));
  }
}), oa = { class: "flex column" }, sa = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, ua = /* @__PURE__ */ R({
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
      let c = e.modelValue;
      c.add = [], c.delete = [], e.modelValueOnUpdate(c), D();
    }
    function l() {
      var v;
      let c = e.modelValue;
      c.add = [], c.delete = ((v = e.fieldApi.field.attachmentData) == null ? void 0 : v.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(c), D();
    }
    function f() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function b(c) {
      return new Promise((v) => {
        const g = new Blob([c]), _ = new FileReader();
        _.onload = (w) => {
          var Q;
          const T = ((Q = w.target) == null ? void 0 : Q.result) ?? "", [F, X] = T.split(",");
          v(X);
        }, _.readAsDataURL(g);
      });
    }
    async function o(c) {
      return {
        key: `${c.lastModified}${c.name}`,
        size: c.size,
        filename: c.name,
        contentType: c.type,
        base64: await b(await c.arrayBuffer())
      };
    }
    async function A(c) {
      if (!c[0])
        return;
      n.value = !0;
      const v = await o(c[0]);
      let g = e.modelValue;
      g.add = [v], n.value = !1, e.modelValueOnUpdate(g), D();
    }
    function u(c) {
      if (!c[0])
        return;
      let v = e.modelValue;
      v.add = [], v.delete = [], e.modelValueOnUpdate(v), D();
    }
    function D() {
      t.value = null;
      for (const c of e.fieldApi.field.computedRules) {
        const v = c(e.modelValue);
        if (typeof v == "string") {
          t.value = v;
          break;
        }
      }
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        f,
        r,
        m,
        i,
        l
      );
    }), (c, v) => (s(), N("div", oa, [
      C(p(ft), U(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !1,
        label: e.fieldApi.field.label,
        class: e.fieldApi.field.cssClass,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: u,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (g, _) => ({
          name: _,
          fn: V((w) => [
            (s(), S(M(g), H(j({
              ...w ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "class", "readonly"]),
      t.value !== null ? (s(), N("div", sa, L(t.value), 1)) : I("", !0)
    ]));
  }
}), ca = { class: "flex column" }, da = {
  key: 0,
  class: "q-field--error q-field__bottom text-negative"
}, fa = /* @__PURE__ */ R({
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
      let c = e.modelValue;
      c.add = [], c.delete = [], e.modelValueOnUpdate(c), D();
    }
    function l() {
      var v;
      let c = e.modelValue;
      c.add = [], c.delete = ((v = e.fieldApi.field.attachmentData) == null ? void 0 : v.map((g) => g.attachment_id)) ?? [], e.modelValueOnUpdate(c), D();
    }
    function f() {
      return D(), r();
    }
    function r() {
      return t.value === null && n.value !== !0;
    }
    function m() {
      t.value = null;
    }
    async function b(c) {
      return new Promise((v) => {
        const g = new Blob([c]), _ = new FileReader();
        _.onload = (w) => {
          var Q;
          const T = ((Q = w.target) == null ? void 0 : Q.result) ?? "", [F, X] = T.split(",");
          v(X);
        }, _.readAsDataURL(g);
      });
    }
    async function o(c) {
      return {
        key: `${c.lastModified}${c.name}`,
        size: c.size,
        filename: c.name,
        contentType: c.type,
        base64: await b(await c.arrayBuffer())
      };
    }
    async function A(c) {
      n.value = !0;
      for (const v of c) {
        const g = await o(v);
        let _ = e.modelValue;
        _.add.push(g), e.modelValueOnUpdate(_);
      }
      n.value = !1, D();
    }
    async function u(c) {
      n.value = !0;
      for (const v of c) {
        const g = await o(v);
        let _ = e.modelValue;
        _.add = _.add.filter((w) => w.key !== g.key), e.modelValueOnUpdate(_);
      }
      n.value = !1, D();
    }
    function D() {
      t.value = null;
      for (const c of e.fieldApi.field.computedRules) {
        const v = c(e.modelValue);
        if (typeof v == "string") {
          t.value = v;
          break;
        }
      }
    }
    return K(() => {
      e.registerBehaviourCallbacks(
        f,
        r,
        m,
        i,
        l
      );
    }), (c, v) => (s(), N("div", ca, [
      C(p(ft), U(e.fieldApi.field.bindings.uploader, {
        "hide-upload-btn": "",
        multiple: !0,
        label: e.fieldApi.field.label,
        class: e.fieldApi.field.cssClass,
        readonly: e.fieldApi.field.readonly,
        onAdded: A,
        onRemoved: u,
        style: { width: "inherit" }
      }), ee({ _: 2 }, [
        P(e.fieldApi.field.slots, (g, _) => ({
          name: _,
          fn: V((w) => [
            (s(), S(M(g), H(j({
              ...w ?? {},
              formApi: e.formApi,
              fieldApi: e.fieldApi
            })), null, 16))
          ])
        }))
      ]), 1040, ["label", "class", "readonly"]),
      t.value !== null ? (s(), N("div", da, L(t.value), 1)) : I("", !0)
    ]));
  }
});
function ma(a, e) {
  const t = a.rules ?? [], n = a.type, i = e.form, l = (b, o, A) => b[o] ? A ? () => f(b[o]) : () => b[o] : b.compare_to ? () => {
    var u;
    return ((u = e.getFieldByName(b.compare_to)) == null ? void 0 : u.getValueSerialized()) ?? "Submit64 error : missing comparator definition";
  } : () => "", f = (b) => String(
    q.formatDate(
      q.extractDate(b, i.formSettings.backendDateFormat),
      i.formSettings.dateFormat
    )
  ), r = [], m = [];
  switch (n) {
    case "date":
      r.push(Je(i.formSettings.dateFormat));
      break;
    case "datetime":
      r.push(Je(i.formSettings.datetimeFormat));
      break;
  }
  return t.forEach((b) => {
    const o = b;
    switch (o.type) {
      case "required":
        r.push(pa());
        break;
      case "absence":
        r.push(va());
        break;
      case "acceptance":
        r.push(ha());
        break;
      case "inclusion":
        r.push(vt(o.including));
        break;
      case "exclusion":
        r.push(ga(o.excluding));
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
        r.push(_a());
        break;
      case "lessThanOrEqualNumber":
        r.push(
          Aa(
            l(o, "less_than")
          )
        );
        break;
      case "lessThanNumber":
        r.push(
          Fa(
            l(o, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualNumber":
        r.push(
          ka(
            l(o, "greater_than")
          )
        );
        break;
      case "greaterThanNumber":
        r.push(
          Va(
            l(o, "greater_than")
          )
        );
        break;
      case "equalToNumber":
        r.push(
          Sa(l(o, "equal_to"))
        );
        break;
      case "otherThanNumber":
        r.push(
          Ca(
            l(o, "other_than")
          )
        );
        break;
      case "numberIntegerOnly":
        r.push(xa());
        break;
      case "numberNumericOnly":
        r.push(Da());
        break;
      case "numberEvenOnly":
        r.push(wa());
        break;
      case "numberOddOnly":
        r.push(Na());
        break;
      case "lessThanOrEqualStringLength":
        r.push(
          Ea(
            l(o, "less_than")
          )
        );
        break;
      case "lessThanStringLength":
        r.push(
          Ta(
            l(o, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualStringLength":
        r.push(
          Ba(
            l(o, "greater_than")
          )
        );
        break;
      case "greaterThanStringLength":
        r.push(
          Ia(
            l(o, "greater_than")
          )
        );
        break;
      case "equalToStringLength":
        r.push(
          $a(
            l(o, "equal_to")
          )
        );
        break;
      case "equalToString":
        r.push(
          Ra(l(o, "equal_to"))
        );
        break;
      case "betweenStringLength":
        r.push(
          Oa(
            () => o.min,
            () => o.max
          )
        );
        break;
      case "otherThanString":
        r.push(
          Ua(
            l(o, "other_than")
          )
        );
        break;
      case "validDate":
        r.push(Je(i.formSettings.dateFormat));
        break;
      case "lessThanOrEqualDate":
        r.push(
          qa(
            l(o, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "lessThanDate":
        r.push(
          za(
            l(o, "less_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        r.push(
          La(
            l(o, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        r.push(
          Ma(
            l(o, "greater_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "equalToDate":
        r.push(
          Pa(
            l(o, "equal_to", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "otherThanDate":
        r.push(
          Ha(
            l(o, "other_than", !0),
            i.formSettings.dateFormat
          )
        );
        break;
      case "requiredUploadFile":
        r.push(
          Qa()
        );
        break;
      case "allowFileContentType":
        r.push(
          Ya(
            l(o, "including")
          )
        );
        break;
      case "equalToFileLength":
        r.push(
          Ga(
            l(o, "equal_to")
          )
        );
        break;
      case "lessThanOrEqualFileLength":
        r.push(
          Ja(
            l(o, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileLength":
        r.push(
          Wa(
            l(o, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualFileCount":
        r.push(
          Ka(
            l(o, "less_than")
          )
        );
        break;
      case "greaterThanOrEqualFileCount":
        r.push(
          Xa(
            l(o, "greater_than")
          )
        );
        break;
      case "lessThanOrEqualTotalFileSize":
        r.push(
          Za(
            l(o, "less_than")
          )
        );
      case "greaterThanOrEqualTotalFileSize":
        r.push(
          ei(
            l(o, "greater_than")
          )
        );
        break;
      case "equalToTotalFileSize":
        r.push(
          ti(
            l(o, "equal_to")
          )
        );
        break;
    }
  }), m.length > 0 ? m.map((b) => {
    switch (b) {
      case "allowBlank":
        return ya(r);
      case "allowNull":
        return ba(r);
    }
  }) : r;
}
function pa() {
  return (a) => !!a || "Ce champ est requis";
}
function vt(a) {
  return (e) => a.includes(String(e)) || `Doit être contenu dans ${a.toString()}`;
}
function ga(a) {
  return (e) => !a.includes(
    String(e) || `Ne doit pas être contenu dans ${vt.toString()}`
  );
}
function va() {
  return (a) => !a || "Ce champ doit être vide";
}
function ha() {
  return (a) => !!a || "Doit être accepté";
}
function ba(a) {
  return (e) => (e === null || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function ya(a) {
  return (e) => (e === "" || a.forEach((t) => {
    const n = t(e);
    if (n !== !0)
      return n;
  }), !0);
}
function _a() {
  return (a) => Number(a) > 0 || "Val. positive uniquement";
}
function Aa(a) {
  return (e) => {
    const t = a();
    return Number(e) <= t || `Inf. ou égal à ${t}`;
  };
}
function Fa(a) {
  return (e) => {
    const t = a();
    return Number(e) < t || `Inf. ${t}`;
  };
}
function ka(a) {
  return (e) => {
    const t = a();
    return Number(e) >= t || `Sup. ou égal à ${t}`;
  };
}
function Va(a) {
  return (e) => {
    const t = a();
    return Number(e) > t || `Sup. à ${t}`;
  };
}
function Sa(a, e) {
  return (t) => {
    const n = a();
    return Number(t) === n || `Égale à ${n}`;
  };
}
function Ca(a, e) {
  return (t) => {
    const n = a();
    return Number(t) !== n || `Doit être différent de ${a}`;
  };
}
function xa() {
  return (a) => /^-?\d+$/.test(String(a).trim()) || "Nombre entier uniquement";
}
function Da() {
  return (a) => /^-?\d+(\.\d+)?$/.test(String(a).trim()) || "Caractère numérique uniquement";
}
function wa() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 0 || "Nombre pair uniquement";
}
function Na() {
  return (a) => Number.isInteger(Number(a)) && Number(a) % 2 === 1 || "Nombre impair uniquement";
}
function Ea(a) {
  return (e) => {
    const t = a();
    return String(e).length <= t || `Inf. ou égal à ${t}`;
  };
}
function Ta(a) {
  return (e) => {
    const t = a();
    return String(e).length < t || `Inf. à ${t}`;
  };
}
function Ba(a) {
  return (e) => {
    const t = a();
    return String(e).length >= t || `Sup. ou égal à ${t}`;
  };
}
function Ia(a) {
  return (e) => {
    const t = a();
    return String(e).length > t || `Sup. à ${t}`;
  };
}
function Oa(a, e) {
  return (t) => {
    const n = a(), i = e();
    return String(t).length >= n && String(t).length <= i || `Entre ${n} et ${i}`;
  };
}
function Ra(a, e) {
  return (t) => {
    const n = a();
    return String(t) === n || `Égale à ${n}`;
  };
}
function $a(a) {
  return (e) => {
    const t = a();
    return String(e).length === t || `Doit contenir ${t} caractères`;
  };
}
function Ua(a) {
  return (e) => {
    const t = a();
    return String(e) !== t || `Doit être différent de ${t}`;
  };
}
function qa(a, e) {
  return (t) => {
    const n = a(), i = q.extractDate(String(t), e), l = q.extractDate(n, e);
    return i <= l || `Inf. ou égal à ${n}`;
  };
}
function za(a, e) {
  return (t) => {
    const n = a(), i = q.extractDate(String(t), e), l = q.extractDate(n, e);
    return i < l || `Inf. à ${n}`;
  };
}
function La(a, e) {
  return (t) => {
    const n = a(), i = q.extractDate(String(t), e), l = q.extractDate(n, e);
    return i >= l || `Sup. ou égal à ${n}`;
  };
}
function Ma(a, e) {
  return (t) => {
    const n = a(), i = q.extractDate(String(t), e), l = q.extractDate(n, e);
    return i > l || `Sup. à ${n}`;
  };
}
function Pa(a, e) {
  return (t) => {
    const n = a(), i = q.extractDate(String(t), e), l = q.extractDate(n, e);
    return i === l || `Égale à ${i}`;
  };
}
function Ha(a, e) {
  return (t) => {
    const n = a();
    return q.extractDate(String(t), e) !== q.extractDate(n, e) || `Doit être différent de ${n}`;
  };
}
function Je(a) {
  return (e) => e == null || e === "" ? !0 : ja(e, a) || `Date invalide. Format : ${a}`;
}
function ja(a, e) {
  if (typeof a != "string" || !a.trim())
    return !1;
  const t = q.extractDate(a, e);
  return !(t instanceof Date) || isNaN(t.getTime()) ? !1 : q.formatDate(t, e) === a;
}
function Qa() {
  return (a) => a.add.length > 0 || "Ce champ est requis";
}
function Ya(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    t.add.forEach((f) => {
      i && (n.includes(f.contentType) || (i = !1));
    });
    const l = a.length > 1;
    return i || `Type${l ? "s" : ""} autorisé${l ? "s" : ""} : ${n.join(",")}`;
  };
}
function Ga(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && n !== l.size && (i = !1);
    }), i || `Taille par fichier ${x.humanStorageSize(n)}`;
  };
}
function Wa(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size < n && (i = !1);
    }), i || `Taille par fichier min. ${x.humanStorageSize(n)}`;
  };
}
function Ja(a) {
  return (e) => {
    const t = e, n = a();
    let i = !0;
    return t.add.forEach((l) => {
      i && l.size > n && (i = !1);
    }), i || `Taille par fichier max. ${x.humanStorageSize(n)}`;
  };
}
function Ka(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length <= n || `${n} fichier${n > 1 ? "s" : ""} max.`;
  };
}
function Xa(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.length >= n || `${n} fichier${n > 1 ? "s" : ""} min.`;
  };
}
function Za(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, f) => (l += f.size, l), 0) <= n || `${x.humanStorageSize(n)} max.`;
  };
}
function ei(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, f) => (l += f.size, l), 0) >= n || `${x.humanStorageSize(n)} min.`;
  };
}
function ti(a) {
  return (e) => {
    const t = e, n = a();
    return t.add.reduce((l, f) => (l += f.size, l), 0) === n || `Taille totale ${x.humanStorageSize(n)}`;
  };
}
const ni = {
  computeServerRules: ma
};
class Ae {
  constructor(e, t, n, i, l, f, r, m, b, o) {
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
    this.formMetadataAndData = n, this.resourceId = t, this.context = m, this.resourceName = e, this.formApi = b, this.formSettings = x.deepMergeObject(
      Ve.getGlobalFormSetting(),
      i ?? {}
    ), this.formBind = x.deepMergeObject(
      Ve.getGlobalFormBind(),
      l ?? {}
    ), this.formSlots = x.deepMergeObject(
      Ve.getBlobalFormSlot(),
      f ?? {}
    ), this.templateSlots = r, this.registerEventCallback = o ?? (() => {
    });
  }
  static getEmptyFormBeforeInit() {
    return {
      resourceName: "",
      sections: [],
      formSettings: Ve.getGlobalFormSetting(),
      events: {},
      bindings: pt.getEmptyDefaultBindings().form,
      slots: gt.getEmptyDefaultSlots()
    };
  }
  static getForm(e, t, n, i, l, f, r, m, b, o) {
    return new Ae(
      e,
      t,
      n,
      i,
      l,
      f,
      r,
      m,
      b,
      o
    ).generateFormDef();
  }
  generateFormDef() {
    const e = /* @__PURE__ */ new Map();
    for (const A of Object.keys(this.templateSlots))
      e.set(A, !1);
    const t = (A, u) => {
      const D = `${A}-${u ? u + "-" : ""}`;
      return Object.fromEntries(
        Object.entries(this.templateSlots).reduce(
          (c, v) => {
            if (v[0].includes(D) && v[1] !== void 0) {
              e.set(v[0], !0);
              const g = v[0].replace(D, "");
              c.push([g, De(v[1])]);
            }
            return c;
          },
          []
        )
      );
    }, n = (A) => {
      for (let u of Object.values(A))
        u && (u = De(u));
      return A;
    }, i = He.create(this.formApi);
    this.registerEventCallback(i);
    const l = /* @__PURE__ */ new Set(), f = He.getEventsObjectFromInstance(i), r = [];
    this.formMetadataAndData.form.sections.forEach(
      (A, u) => {
        var T;
        const D = [];
        A.fields.forEach((F) => {
          const X = Ae.getFieldTypeByFieldMetadata(F), Q = Ae.getFieldComponentByFieldType(X), de = x.deepMergeObject(
            x.deepMergeObject(
              this.formSlots.fields[X],
              this.formSlots.fields.byName[F.field_name]
            ),
            t("field", F.field_name)
          ), ie = x.deepMergeObject(
            this.getBindingsByFormFieldType(X),
            this.formBind.fields.byName[F.field_name]
          );
          let re = F.label;
          this.formSettings.requiredFieldsHasAsterisk && F.rules.find((oe) => oe.type === "required") && (re = re.concat("*"));
          const le = {
            type: X,
            metadata: Object.freeze(F),
            label: re,
            readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? F.readonly ?? void 0,
            cssClass: F.css_class ?? void 0,
            staticSelectOptions: F.static_select_options,
            associationData: F.field_association_data,
            attachmentData: F.field_attachment_data,
            rules: F.rules,
            computedRules: [],
            // late init
            bindings: ie,
            hidden: !1,
            mainComponent: De(Q),
            events: f.fields[F.field_name] ?? {},
            slots: n(de)
          };
          le.computedRules = ni.computeServerRules(
            le,
            this.formApi
          ), D.push(le), l.add(F.field_name);
        });
        const c = A.name ?? u.toString(), v = {
          ...this.formSlots.sections,
          ...t("section", c)
        }, g = ((T = this.formSlots.fields.byName[c]) == null ? void 0 : T.default) ?? this.formSlots.sections.default, _ = x.deepMergeObject(
          this.formBind.sections.default,
          this.formBind.sections.byName[c]
        ), w = {
          label: A.label ?? void 0,
          icon: A.icon ?? void 0,
          cssClass: A.css_class ?? void 0,
          hidden: !1,
          name: c,
          index: u,
          bindings: _,
          readonly: this.formMetadataAndData.form.readonly ?? A.readonly ?? void 0,
          events: f.sections[A.name ?? u.toString()] ?? {},
          mainComponent: De(g),
          fieldsComponent: void 0,
          fields: D,
          slots: n(v)
        };
        r.push(w);
      }
    );
    const m = {
      ...this.formSlots.form,
      ...t("form", "")
    }, b = x.deepCloneObject(this.formBind.form), o = {
      sections: r,
      resourceName: this.formMetadataAndData.form.resource_name,
      resourceId: this.resourceId,
      formSettings: this.formSettings,
      bindings: b,
      cssClass: this.formMetadataAndData.form.css_class ?? void 0,
      readonly: this.formMetadataAndData.form.readonly ?? void 0,
      events: f.form,
      slots: n(m),
      context: this.context
    };
    l.size < this.formMetadataAndData.form.sections.reduce((A, u) => A + u.fields.length, 0) && Pe.log("Found fields with the same name");
    for (const A of e)
      A[1] !== !0 && Pe.log(`Found unused slot : ${A[0]}`);
    return o;
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
    return x.deepCloneObject(t[e]);
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
      string: ea,
      color: ra,
      wysiwyg: ia,
      number: na,
      date: Ln,
      datetime: Pn,
      checkbox: Qn,
      select: Gn,
      belongsTo: Jn,
      hasMany: Xn,
      attachmentHasOne: ua,
      attachmentHasMany: fa
    }[e];
  }
}
const ai = { class: "flex column" }, ii = /* @__PURE__ */ R({
  __name: "SectionWrapper",
  props: {
    section: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = null, i = null, l = null;
    const f = ot(), r = {
      softReset: o,
      reset: A,
      clear: u,
      validate: v,
      isValid: g,
      isInvalid: _,
      hide: D,
      unhide: c,
      resetValidation: w,
      getFields: T,
      setReadonlyState: F,
      setCssClass: X,
      setIcon: Q,
      setLabel: de,
      tryFocusFirst: le,
      tryUnfocus: oe,
      section: t.section
    }, m = B(/* @__PURE__ */ new Map());
    function b() {
      t.section.fields.forEach((h) => {
        const E = h.metadata.field_name, G = t.formApi.getFieldByName(E);
        G && m.value.set(E, G);
      });
    }
    function o() {
      m.value.forEach((h) => {
        h.softReset();
      });
    }
    function A() {
      m.value.forEach((h) => {
        h.reset();
      }), x.callAllEvents(t.section.events.onReset);
    }
    function u() {
      m.value.forEach((h) => {
        h.clear();
      }), x.callAllEvents(t.section.events.onClear);
    }
    function D() {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (m.value.forEach((E) => {
        E.hide();
      }), h.hidden = !0, x.callAllEvents(t.section.events.onHide));
    }
    function c() {
      const h = t.privateFormApi.getSectionRef(
        t.section.name
      );
      h && (m.value.forEach((E) => {
        E.unhide();
      }), h.hidden = !1, x.callAllEvents(t.section.events.onUnhide));
    }
    function v() {
      let h = !0;
      return m.value.forEach((E) => {
        if (!E.validate()) {
          h = !1;
          return;
        }
      }), x.callAllEvents(t.section.events.onValidated), h;
    }
    function g() {
      let h = !0;
      return m.value.forEach((E) => {
        if (!E.isValid()) {
          h = !1;
          return;
        }
      }), h;
    }
    function _() {
      return !g();
    }
    function w() {
      m.value.forEach((h) => {
        h.resetValidation();
      });
    }
    function T() {
      return m.value;
    }
    function F(h) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.readonly = h);
    }
    function X(h) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.cssClass = h);
    }
    function Q(h) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.icon = h);
    }
    function de(h) {
      const E = t.privateFormApi.getSectionRef(
        t.section.name
      );
      E && (E.label = h);
    }
    function ie() {
      const h = {};
      for (const [E, G] of m.value)
        h[E] = G.getValueSerialized();
      return h;
    }
    function re() {
      const h = f.default;
      if (!h) {
        console.error(
          "Submit64 : did not found fields slot for section " + t.section.name
        );
        return;
      }
      const E = R({
        inheritAttrs: !1,
        setup(G, { attrs: Ce, slots: xe }) {
          return () => h(
            {
              ...G,
              ...Ce
            },
            xe
          );
        }
      });
      t.privateFormApi.setSectionFieldComponent(
        t.section,
        De(E)
      );
    }
    function le() {
      for (const h of T().values())
        if (h.tryFocus(), h.isFocus())
          return !0;
      return !1;
    }
    function oe() {
      for (const h of T().values())
        if (h.tryUnfocus(), !h.isFocus())
          return !0;
      return !1;
    }
    e(r);
    const ve = ne(() => g()), he = ne(() => _()), Se = ne(() => ie());
    return W(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onIsValid;
      },
      (h) => {
        n == null || n(), n = null, h && (n = W(ve, (E) => {
          E && x.callAllEvents(t.section.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onIsInvalid;
      },
      (h) => {
        i == null || i(), i = null, h && (i = W(he, (E) => {
          var G;
          E && x.callAllEvents((G = t.section) == null ? void 0 : G.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var h;
        return (h = t.section) == null ? void 0 : h.events.onUpdate;
      },
      (h) => {
        l == null || l(), l = null, h && (l = W(
          Se,
          () => {
            var E;
            x.callAllEvents((E = t.section) == null ? void 0 : E.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(() => {
      var E;
      re();
      const h = (E = st()) == null ? void 0 : E.exposed;
      h && t.privateFormApi.registerSectionWrapperRef(
        t.section.name,
        h
      ), Fe(() => {
        var G;
        b(), x.callAllEvents((G = t.section) == null ? void 0 : G.events.onReady);
      });
    }), (h, E) => Ke((s(), N("div", ai, [
      t.section.slots["wrapper-before"] ? (s(), S(M(t.section.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0),
      (s(), S(M(t.section.mainComponent), {
        sectionApi: r,
        formApi: t.formApi
      }, null, 8, ["formApi"])),
      t.section.slots["wrapper-after"] ? (s(), S(M(t.section.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        sectionApi: r
      }, null, 8, ["formApi"])) : I("", !0)
    ], 512)), [
      [Xe, t.section.hidden !== !0]
    ]);
  }
}), li = {
  key: 2,
  class: "q-field__bottom text-negative q-pt-none"
}, ri = ["index"], oi = /* @__PURE__ */ R({
  __name: "FieldWrapper",
  props: {
    field: {},
    formApi: {},
    privateFormApi: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = () => !0, i = () => !0, l = () => {
    }, f = () => {
    }, r = () => {
    }, m = () => {
    }, b = () => {
    };
    const o = B(""), A = B(!1), u = B([]);
    function D() {
      const y = t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      );
      o.value = v(y);
    }
    function c() {
      t.formApi.getInitialValueByFieldName(
        t.field.metadata.field_name
      ), o.value = v(o.value), x.callAllEvents(t.field.events.onReset), f(), Fe(() => {
        h();
      });
    }
    function v(y) {
      const $ = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (y == null)
            return "";
          break;
        case "checkbox":
          return y == null || y === "" ? !1 : y;
        case "date":
          return y == null || y === "" ? null : q.formatDate(
            q.extractDate(String(y), $.formSettings.backendDateFormat),
            $.formSettings.dateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : q.formatDate(
            q.extractDate(
              String(y),
              $.formSettings.backendDatetimeFormat
            ),
            $.formSettings.datetimeFormat
          );
        case "attachmentHasOne":
        case "attachmentHasMany":
          return {
            add: [],
            delete: []
          };
      }
      return y;
    }
    function g(y) {
      const $ = t.formApi.form;
      switch (t.field.type) {
        case "string":
        case "wysiwyg":
          if (y === "")
            return null;
          break;
        case "date":
          return y == null || y === "" ? null : q.formatDate(
            q.extractDate(String(y), $.formSettings.dateFormat),
            $.formSettings.backendDateFormat
          );
        case "datetime":
          return y == null || y === "" ? null : q.formatDate(
            q.extractDate(String(y), $.formSettings.datetimeFormat),
            $.formSettings.backendDatetimeFormat
          );
        case "belongsTo":
          if (y === void 0)
            return null;
          break;
        case "hasMany":
          if (y === void 0)
            return [];
          break;
      }
      return y;
    }
    function _() {
      switch (t.field.type) {
        case "string":
          o.value = "";
          break;
        case "checkbox":
          o.value = !1;
          break;
        case "date":
          o.value = null;
          break;
        case "datetime":
          o.value = null;
          break;
        case "number":
          o.value = null;
          break;
        case "select":
          o.value = void 0;
          break;
        case "wysiwyg":
          o.value = "";
          break;
        case "belongsTo":
        case "hasMany":
          o.value = void 0;
          break;
        case "attachmentHasOne":
        case "attachmentHasMany":
          o.value = {
            add: [],
            delete: []
          };
          break;
      }
      r(), x.callAllEvents(t.field.events.onClear);
    }
    function w(y) {
      o.value = y;
    }
    function T() {
      return p(o);
    }
    function F() {
      return g(p(o));
    }
    function X(y) {
      u.value = y;
    }
    function Q() {
      return t.privateFormApi.getFieldRef(
        t.field.metadata.field_name
      );
    }
    function de() {
      const y = Q();
      y.hidden = !0, x.callAllEvents(t.field.events.onHide);
    }
    function ie() {
      const y = Q();
      y.hidden = !1, x.callAllEvents(t.field.events.onUnhide);
    }
    function re(y) {
      const $ = Q();
      $.readonly = y;
    }
    function le(y) {
      const $ = Q();
      $.cssClass = y;
    }
    function oe(y) {
      const $ = Q();
      $.label = y;
    }
    function ve() {
      const y = n();
      return x.callAllEvents(t.field.events.onValidated), y;
    }
    function he() {
      return i();
    }
    function Se() {
      return !he();
    }
    function h() {
      return l();
    }
    function E() {
      A.value || (m(), A.value = !0);
    }
    function G() {
      A.value && (b(), A.value = !1);
    }
    function Ce() {
      return A.value;
    }
    function xe(y) {
      const $ = Q();
      $.bindings = x.deepMergeObject($.bindings, y);
    }
    function Qe(y, $, me, ke, Be, Ie, Oe) {
      n = y, i = $, l = me, ke && (f = ke), Be && (r = Be), Ie && (m = Ie), Oe && (b = Oe);
    }
    const fe = {
      softReset: D,
      reset: c,
      clear: _,
      validate: ve,
      isValid: he,
      isInvalid: Se,
      hide: de,
      unhide: ie,
      resetValidation: h,
      getValueDeserialized: F,
      getValueSerialized: T,
      setupBackendErrors: X,
      setReadonlyState: re,
      setCssClass: le,
      setLabel: oe,
      tryFocus: E,
      tryUnfocus: G,
      isFocus: Ce,
      setBindings: xe,
      setValue: w,
      field: t.field,
      refs: {
        modelValue: _e(o),
        isFocused: _e(A),
        backendErrors: _e(u)
      }
    };
    return e(fe), W(
      () => t.field.events.onUpdate ? o.value : null,
      () => {
        x.callAllEvents(t.field.events.onUpdate);
      }
    ), W(
      () => t.field.events.onIsValid || t.field.events.onIsInvalid ? o.value : null,
      (y) => {
        y ? x.callAllEvents(t.field.events.onIsValid) : x.callAllEvents(t.field.events.onIsInvalid);
      }
    ), K(() => {
      var $, me;
      D();
      const y = ($ = st()) == null ? void 0 : $.exposed;
      y && t.formApi && t.privateFormApi.registerFieldWrapperRef(
        t.field.metadata.field_name,
        y
      ), x.callAllEvents((me = t.field) == null ? void 0 : me.events.onReady);
    }), (y, $) => Ke((s(), N("div", null, [
      t.field.slots["wrapper-before"] ? (s(), S(M(t.field.slots["wrapper-before"]), {
        key: 0,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      (s(), S(M(t.field.mainComponent), {
        modelValue: o.value,
        fieldApi: fe,
        formApi: t.formApi,
        reset: c,
        clear: _,
        getValueDeserialized: F,
        getValueSerialized: T,
        validate: ve,
        modelValueOnUpdate: w,
        registerBehaviourCallbacks: Qe
      }, null, 8, ["modelValue", "formApi"])),
      t.field.slots["wrapper-after"] ? (s(), S(M(t.field.slots["wrapper-after"]), {
        key: 1,
        formApi: t.formApi,
        fieldApi: fe
      }, null, 8, ["formApi"])) : I("", !0),
      u.value.length > 0 ? (s(), N("div", li, [
        (s(!0), N(ae, null, P(u.value, (me, ke) => (s(), N("div", {
          index: ke,
          class: "flex column"
        }, L(me), 9, ri))), 256))
      ])) : I("", !0)
    ], 512)), [
      [Xe, t.field.hidden !== !0]
    ]);
  }
}), si = { class: "flex column" }, fi = /* @__PURE__ */ R({
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
    context: {}
  },
  setup(a, { expose: e }) {
    const t = a;
    let n = null, i = "", l = 0, f = 0, r = null, m = null, b = null, o = null;
    const A = ot(), u = B(Ae.getEmptyFormBeforeInit()), D = B(!1), c = B(!1), v = B(!1), g = B(!1), _ = B("create"), w = B({}), T = B(/* @__PURE__ */ new Map()), F = B(/* @__PURE__ */ new Map());
    async function X() {
      n = await t.getMetadataAndData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        context: t.context
      }), u.value = Ae.getForm(
        t.resourceName,
        t.resourceId,
        n,
        t.formSettings,
        t.formBindings,
        t.formSlots,
        de(),
        t.context,
        be,
        t.eventManager
      ), l = u.value.sections.length, f = u.value.sections.reduce((d, k) => (d += k.fields.length, d), 0), t.resourceId && (_.value = "edit");
    }
    async function Q() {
      var O, ye, Re;
      if (!le())
        return;
      x.callAllEvents((O = u.value) == null ? void 0 : O.events.onSubmit), g.value = !0, G();
      const d = ie(), k = await t.getSubmitFormData({
        resourceName: t.resourceName,
        resourceId: t.resourceId,
        resourceData: d,
        context: u.value.context
      });
      if (o = k.resource_data, k.success)
        w.value = {}, _.value === "create" && (_.value = "edit"), n && k.resource_data && (n.resource_data = k.resource_data), u.value = Ae.getForm(
          t.resourceName,
          t.resourceId,
          {
            form: k.form,
            resource_data: k.resource_data
          },
          t.formSettings,
          t.formBindings,
          t.formSlots,
          de(),
          u.value.context,
          be,
          t.eventManager
        ), he(), i = JSON.stringify(ie()), x.callAllEvents((Re = u.value) == null ? void 0 : Re.events.onSubmitSuccess);
      else {
        w.value = {};
        const $e = [];
        for (const [pe, Et] of F.value) {
          const at = k.errors[pe];
          at && (Et.setupBackendErrors(at), $e.push(pe));
        }
        Object.entries(k.errors).forEach((pe) => {
          $e.includes(pe[0]) || (w.value[pe[0]] = pe[1]);
        }), x.callAllEvents((ye = u.value) == null ? void 0 : ye.events.onSubmitUnsuccess);
      }
      g.value = !1;
    }
    function de() {
      const d = {};
      for (const k in A) {
        const O = A[k];
        if (O) {
          const ye = R({
            inheritAttrs: !1,
            setup(Re, { attrs: $e, slots: pe }) {
              return () => O({
                ...Re,
                ...$e,
                innerSlots: pe
              });
            }
          });
          d[k] = ye;
        }
      }
      return d;
    }
    function ie() {
      const d = {};
      for (const [k, O] of F.value)
        d[k] = O.getValueDeserialized();
      return d;
    }
    function re() {
      const d = {};
      for (const [k, O] of F.value)
        d[k] = O.getValueSerialized();
      return d;
    }
    function le() {
      var k;
      let d = !0;
      return F.value.forEach((O) => {
        if (!O.validate()) {
          d = !1;
          return;
        }
      }), x.callAllEvents((k = u.value) == null ? void 0 : k.events.onValidated), d;
    }
    function oe() {
      let d = !0;
      return F.value.forEach((k) => {
        if (!k.isValid()) {
          d = !1;
          return;
        }
      }), d;
    }
    function ve() {
      return !oe();
    }
    function he() {
      T.value.forEach((d) => {
        d.softReset();
      });
    }
    function Se() {
      var d;
      F.value.forEach((k) => {
        k.reset();
      }), x.callAllEvents((d = u.value) == null ? void 0 : d.events.onReset);
    }
    function h() {
      var d;
      F.value.forEach((k) => {
        k.clear();
      }), x.callAllEvents((d = u.value) == null ? void 0 : d.events.onClear);
    }
    function E() {
      F.value.forEach((d) => {
        d.resetValidation();
      });
    }
    function G() {
      F.value.forEach((d) => {
        d.setupBackendErrors([]);
      });
    }
    function Ce(d) {
      if (n)
        return n.resource_data[d];
    }
    function xe(d) {
      return T.value.get(d);
    }
    function Qe(d) {
      return [...T.value.values()].at(d);
    }
    function fe() {
      return T.value;
    }
    function y(d) {
      return F.value.get(d);
    }
    function $() {
      return F.value;
    }
    function me() {
      return t.getAssociationData ?? (async () => ({
        rows: [],
        row_count: 0
      }));
    }
    function ke() {
      [
        "getMetadataAndData",
        "resourceName"
      ].forEach((k) => {
        (t[k] === null || t[k] === void 0) && Pe.log(`Missing props for <Submit64> -> ${k}`);
      });
    }
    function Be() {
      return p(_);
    }
    function Ie() {
      return i !== JSON.stringify(ie());
    }
    function Oe(d) {
      u.value && (u.value.context = d);
    }
    function ht(d) {
      u.value && (u.value.cssClass = d);
    }
    function bt(d) {
      u.value && (u.value.readonly = d);
    }
    function yt() {
      return v.value;
    }
    function _t() {
      return o;
    }
    function et() {
      for (const d of fe().values())
        if (d.tryFocusFirst())
          return !0;
      return !1;
    }
    function At() {
      for (const d of fe().values())
        if (d.tryUnfocus())
          return !0;
      return !1;
    }
    function Ft() {
      return u;
    }
    function kt(d) {
      var k;
      return (k = u.value) == null ? void 0 : k.sections.find((O) => O.name === d);
    }
    function Vt(d) {
      var k;
      return (k = u.value) == null ? void 0 : k.sections.map((O) => O.fields).flat().find((O) => O.metadata.field_name === d);
    }
    function St(d, k) {
      T.value.set(d, k), l === T.value.size && (D.value = !0);
    }
    function Ct(d, k) {
      F.value.set(d, k), f === F.value.size && (c.value = !0);
    }
    function xt(d, k) {
      d.fieldsComponent = k;
    }
    const tt = ne(() => oe()), Dt = ne(() => ve()), wt = ne(() => re()), nt = {
      getFormRef: Ft,
      getSectionRef: kt,
      getFieldRef: Vt,
      registerSectionWrapperRef: St,
      registerFieldWrapperRef: Ct,
      setSectionFieldComponent: xt
    }, Nt = new Proxy({}, {
      get(d, k) {
        var O;
        return (O = u.value) == null ? void 0 : O[k];
      }
    }), be = {
      getMode: Be,
      getSectionByName: xe,
      getSectionByIndex: Qe,
      getSections: fe,
      getFieldByName: y,
      getFields: $,
      validate: le,
      isValid: oe,
      isInvalid: ve,
      softReset: he,
      reset: Se,
      clear: h,
      resetValidation: E,
      submit: Q,
      valuesHasChanged: Ie,
      getInitialValueByFieldName: Ce,
      getAssociationDataCallback: me,
      setContext: Oe,
      setCssClass: ht,
      setReadonlyState: bt,
      isReady: yt,
      getSubmitData: _t,
      tryFocusFirst: et,
      tryUnfocus: At,
      form: Nt,
      refs: {
        orphanErrors: _e(w),
        isLoadingSubmit: _e(g),
        setupIsDone: _e(v),
        isFormValid: _e(tt)
      }
    };
    return e(be), W(
      () => D.value && c.value,
      (d) => {
        var k;
        d && !v.value && (x.callAllEvents((k = u.value) == null ? void 0 : k.events.onReady), v.value = !0);
      }
    ), W(
      () => {
        var d;
        return (d = u.value) == null ? void 0 : d.events.onIsValid;
      },
      (d) => {
        r == null || r(), r = null, d && (r = W(tt, (k) => {
          var O;
          k && x.callAllEvents((O = u.value) == null ? void 0 : O.events.onIsValid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var d;
        return (d = u.value) == null ? void 0 : d.events.onIsInvalid;
      },
      (d) => {
        m == null || m(), m = null, d && (m = W(Dt, (k) => {
          var O;
          k && x.callAllEvents((O = u.value) == null ? void 0 : O.events.onIsInvalid);
        }));
      },
      { immediate: !0 }
    ), W(
      () => {
        var d;
        return (d = u.value) == null ? void 0 : d.events.onUpdate;
      },
      (d) => {
        b == null || b(), b = null, d && (b = W(
          wt,
          () => {
            var k;
            x.callAllEvents((k = u.value) == null ? void 0 : k.events.onUpdate);
          },
          { immediate: !0 }
        ));
      },
      { immediate: !0 }
    ), K(async () => {
      ke(), await X(), Fe(() => {
        i = JSON.stringify(ie()), u.value.formSettings.autofocus && et();
      });
    }), (d, k) => Ke((s(), N("div", si, [
      J("div", {
        class: rt(u.value.cssClass ?? "flex column q-pa-sm q-gutter-sm")
      }, [
        (s(!0), N(ae, null, P(u.value.sections, (O) => (s(), S(ii, {
          key: O.name,
          section: O,
          formApi: be,
          privateFormApi: nt
        }, {
          default: V(() => [
            (s(!0), N(ae, null, P(O.fields, (ye) => (s(), S(oi, {
              key: ye.metadata.field_name,
              field: ye,
              formApi: be,
              privateFormApi: nt
            }, null, 8, ["field"]))), 128))
          ]),
          _: 2
        }, 1032, ["section"]))), 128))
      ], 2),
      u.value.slots["orphan-errors"] ? (s(), S(M(u.value.slots.orphanErrors), {
        key: 0,
        formApi: be
      })) : I("", !0),
      u.value.slots.actions ? (s(), S(M(u.value.slots.actions), {
        key: 1,
        formApi: be
      })) : I("", !0)
    ], 512)), [
      [Xe, v.value]
    ]);
  }
});
export {
  He as DynamicLogicBuilder,
  Ve as Submit64,
  fi as Submit64Form
};
