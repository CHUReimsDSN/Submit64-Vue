var sc = Object.defineProperty;
var cc = (e, t, n) => t in e ? sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Dt = (e, t, n) => cc(e, typeof t != "symbol" ? t + "" : t, n);
import { ref as E, shallowReactive as dc, reactive as ua, markRaw as Ui, defineComponent as Ot, getCurrentInstance as ve, computed as s, provide as fn, watch as ae, h as u, onBeforeUnmount as je, isRef as fc, Transition as Ct, withDirectives as Kt, onMounted as ut, nextTick as Ke, onDeactivated as vn, onActivated as Un, inject as Et, onUnmounted as Yi, toRaw as cn, onBeforeUpdate as Ha, onUpdated as vc, KeepAlive as Wi, onBeforeMount as Vr, vShow as Xi, Teleport as mc, createApp as gc, unref as Aa, createElementBlock as En, openBlock as dt, renderSlot as Ea, createCommentVNode as ba, createBlock as Mt, resolveDynamicComponent as sl, resolveComponent as Rt, withCtx as At, createVNode as Nt, normalizeProps as Cn, guardReactiveProps as xn, mergeProps as Gi, resolveDirective as hc, createElementVNode as cl, normalizeClass as bc, toDisplayString as yc, Fragment as Wl, renderList as xo } from "vue";
const Rl = class Rl {
  constructor() {
    Dt(this, "_formSettings");
    Dt(this, "_formStyleConfig");
    Dt(this, "_actionComponent");
    Dt(this, "_sectionComponent");
    Dt(this, "_wrapperResetComponent");
  }
  static registerGlobalFormSetting(t) {
    this._instance._formSettings = t;
  }
  static registerGlobalFormStyleSetting(t) {
    this._instance._formStyleConfig = t;
  }
  static registerGlobalActionComponent(t) {
    this._instance._actionComponent = t;
  }
  static registerGlobalSectionComponent(t) {
    this._instance._sectionComponent = t;
  }
  static registerGlobalWrapperResetComponent(t) {
    this._instance._wrapperResetComponent = t;
  }
  static getGlobalFormSetting() {
    return this._instance._formSettings;
  }
  static getGlobalFormStyleConfig() {
    return this._instance._formStyleConfig;
  }
  static getGlobalActionComponent() {
    return this._instance._actionComponent;
  }
  static getGlobalSectionComponent() {
    return this._instance._sectionComponent;
  }
  static getGlobalWrapperResetComponent() {
    return this._instance._wrapperResetComponent;
  }
};
Dt(Rl, "_instance", new Rl());
let Pn = Rl;
const Zi = Symbol();
/*!
 * Quasar Framework v2.18.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
var Xl = null;
function Dr() {
  return Xl !== null ? Xl : Xl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (Dr().__QUASAR_SSR__ = !1);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (Dr().__QUASAR_SSR_CLIENT__ = !1);
typeof __QUASAR_SSR_PWA__ != "boolean" && (Dr().__QUASAR_SSR_PWA__ = !1);
function xt(e, t, n, a) {
  return Object.defineProperty(e, t, {
    get: n,
    set: a,
    enumerable: !0
  }), e;
}
function Ji(e, t) {
  for (const n in t)
    xt(e, n, t[n]);
  return e;
}
var Ut = E(
  __QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : !0)
), wr;
function pc(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function Sc(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var eu = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function _c(e) {
  const t = e.toLowerCase(), n = Sc(t), a = pc(t, n), l = {
    mobile: !1,
    desktop: !1,
    cordova: !1,
    capacitor: !1,
    nativeMobile: !1,
    // nativeMobileWrapper: void 0,
    electron: !1,
    bex: !1,
    linux: !1,
    mac: !1,
    win: !1,
    cros: !1,
    chrome: !1,
    firefox: !1,
    opera: !1,
    safari: !1,
    vivaldi: !1,
    edge: !1,
    edgeChromium: !1,
    ie: !1,
    webkit: !1,
    android: !1,
    ios: !1,
    ipad: !1,
    iphone: !1,
    ipod: !1,
    kindle: !1,
    winphone: !1,
    blackberry: !1,
    playbook: !1,
    silk: !1
  };
  a.browser && (l[a.browser] = !0, l.version = a.version, l.versionNumber = parseInt(a.version, 10)), a.platform && (l[a.platform] = !0);
  const r = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
  if (r === !0 || t.indexOf("mobile") !== -1 ? l.mobile = !0 : l.desktop = !0, l["windows phone"] && (l.winphone = !0, delete l["windows phone"]), l.edga || l.edgios || l.edg ? (l.edge = !0, a.browser = "edge") : l.crios ? (l.chrome = !0, a.browser = "chrome") : l.fxios && (l.firefox = !0, a.browser = "firefox"), (l.ipod || l.ipad || l.iphone) && (l.ios = !0), l.vivaldi && (a.browser = "vivaldi", l.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (l.chrome || l.opr || l.safari || l.vivaldi || l.mobile === !0 && l.ios !== !0 && r !== !0) && (l.webkit = !0), l.opr && (a.browser = "opera", l.opera = !0), l.safari && (l.blackberry || l.bb ? (a.browser = "blackberry", l.blackberry = !0) : l.playbook ? (a.browser = "playbook", l.playbook = !0) : l.android ? (a.browser = "android", l.android = !0) : l.kindle ? (a.browser = "kindle", l.kindle = !0) : l.silk && (a.browser = "silk", l.silk = !0)), l.name = a.browser, l.platform = a.platform, t.indexOf("electron") !== -1)
    l.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    l.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (l.capacitor = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (l.cordova = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "cordova"), Ut.value === !0 && (wr = { is: { ...l } }), eu === !0 && l.mac === !0 && (l.desktop === !0 && l.safari === !0 || l.nativeMobile === !0 && l.android !== !0 && l.ios !== !0 && l.ipad !== !0)) {
      delete l.mac, delete l.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(l, {
        mobile: !0,
        ios: !0,
        platform: o,
        [o]: !0
      });
    }
    l.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete l.desktop, l.mobile = !0);
  }
  return l;
}
var ko = navigator.userAgent || navigator.vendor || window.opera, wc = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, De = {
  userAgent: ko,
  is: _c(ko),
  has: {
    touch: eu
  },
  within: {
    iframe: window.self !== window.top
  }
}, Cr = {
  install(e) {
    const { $q: t } = e;
    Ut.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, De), Ut.value = !1;
    }), t.platform = ua(this)) : t.platform = this;
  }
};
{
  let e;
  xt(De.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(Cr, De), Ut.value === !0 && (Object.assign(Cr, wr, wc), wr = null);
}
var Cc = Cr;
function te(e) {
  return Ui(Ot(e));
}
function tn(e) {
  return Ui(e);
}
var Mn = (e, t) => {
  const n = ua(e);
  for (const a in e)
    xt(
      t,
      a,
      () => n[a],
      (l) => {
        n[a] = l;
      }
    );
  return t;
}, lt = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(lt, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function _t() {
}
function Pl(e) {
  return e.button === 0;
}
function Pt(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function xc(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML")
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function ft(e) {
  e.stopPropagation();
}
function kt(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Ae(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function da(e, t) {
  if (e === void 0 || t === !0 && e.__dragPrevented === !0)
    return;
  const n = t === !0 ? (a) => {
    a.__dragPrevented = !0, a.addEventListener("dragstart", kt, lt.notPassiveCapture);
  } : (a) => {
    delete a.__dragPrevented, a.removeEventListener("dragstart", kt, lt.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function mt(e, t, n) {
  const a = `__q_${t}_evt`;
  e[a] = e[a] !== void 0 ? e[a].concat(n) : n, n.forEach((l) => {
    l[0].addEventListener(l[1], e[l[2]], lt[l[3]]);
  });
}
function Ft(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((a) => {
    a[0].removeEventListener(a[1], e[a[2]], lt[a[3]]);
  }), e[n] = void 0);
}
function Sa(e, t = 250, n) {
  let a = null;
  function l() {
    const r = arguments, o = () => {
      a = null, e.apply(this, r);
    };
    a !== null && clearTimeout(a), a = setTimeout(o, t);
  }
  return l.cancel = () => {
    a !== null && clearTimeout(a);
  }, l;
}
var Gl = ["sm", "md", "lg", "xl"], { passive: qo } = lt;
Mn({
  width: 0,
  height: 0,
  name: "xs",
  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  lt: {
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0
  },
  gt: {
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1
  },
  xs: !0,
  sm: !1,
  md: !1,
  lg: !1,
  xl: !1
}, {
  setSizes: _t,
  setDebounce: _t,
  install({ $q: e, onSSRHydrated: t }) {
    var b;
    if (e.screen = this, this.__installed === !0) {
      e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
      return;
    }
    const { visualViewport: n } = window, a = n || window, l = document.scrollingElement || document.documentElement, r = n === void 0 || De.is.mobile === !0 ? () => [
      Math.max(window.innerWidth, l.clientWidth),
      Math.max(window.innerHeight, l.clientHeight)
    ] : () => [
      n.width * n.scale + window.innerWidth - l.clientWidth,
      n.height * n.scale + window.innerHeight - l.clientHeight
    ], o = ((b = e.config.screen) == null ? void 0 : b.bodyClasses) === !0;
    this.__update = (g) => {
      const [v, m] = r();
      if (m !== this.height && (this.height = m), v !== this.width)
        this.width = v;
      else if (g !== !0)
        return;
      let S = this.sizes;
      this.gt.xs = v >= S.sm, this.gt.sm = v >= S.md, this.gt.md = v >= S.lg, this.gt.lg = v >= S.xl, this.lt.sm = v < S.sm, this.lt.md = v < S.md, this.lt.lg = v < S.lg, this.lt.xl = v < S.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === !0 && this.lt.md === !0, this.md = this.gt.sm === !0 && this.lt.lg === !0, this.lg = this.gt.md === !0 && this.lt.xl === !0, this.xl = this.gt.lg, S = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl", S !== this.name && (o === !0 && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${S}`)), this.name = S);
    };
    let i, c = {}, f = 16;
    this.setSizes = (g) => {
      Gl.forEach((v) => {
        g[v] !== void 0 && (c[v] = g[v]);
      });
    }, this.setDebounce = (g) => {
      f = g;
    };
    const d = () => {
      const g = getComputedStyle(document.body);
      g.getPropertyValue("--q-size-sm") && Gl.forEach((v) => {
        this.sizes[v] = parseInt(g.getPropertyValue(`--q-size-${v}`), 10);
      }), this.setSizes = (v) => {
        Gl.forEach((m) => {
          v[m] && (this.sizes[m] = v[m]);
        }), this.__update(!0);
      }, this.setDebounce = (v) => {
        i !== void 0 && a.removeEventListener("resize", i, qo), i = v > 0 ? Sa(this.__update, v) : this.__update, a.addEventListener("resize", i, qo);
      }, this.setDebounce(f), Object.keys(c).length !== 0 ? (this.setSizes(c), c = void 0) : this.__update(), o === !0 && this.name === "xs" && document.body.classList.add("screen--xs");
    };
    Ut.value === !0 ? t.push(d) : d();
  }
});
var zt = Mn({
  isActive: !1,
  mode: !1
}, {
  __media: void 0,
  set(e) {
    zt.mode = e, e === "auto" ? (zt.__media === void 0 && (zt.__media = window.matchMedia("(prefers-color-scheme: dark)"), zt.__updateMedia = () => {
      zt.set("auto");
    }, zt.__media.addListener(zt.__updateMedia)), e = zt.__media.matches) : zt.__media !== void 0 && (zt.__media.removeListener(zt.__updateMedia), zt.__media = void 0), zt.isActive = e === !0, document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`), document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
  },
  toggle() {
    zt.set(zt.isActive === !1);
  },
  install({ $q: e, ssrContext: t }) {
    const n = __QUASAR_SSR_CLIENT__ ? document.body.classList.contains("body--dark") : e.config.dark;
    e.dark = this, this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
  }
});
function Yn(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Yt(e, t) {
  return Yn(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
var xr = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh",
    expand: (e) => e ? `Expand "${e}"` : "Expand",
    collapse: (e) => e ? `Collapse "${e}"` : "Collapse"
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: !1,
    pluralDay: "days",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    prevYear: "Previous year",
    nextYear: "Next year",
    today: "Today",
    prevRangeYears: (e) => `Previous ${e} years`,
    nextRangeYears: (e) => `Next ${e} years`
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (e, t, n) => e + "-" + t + " of " + n,
    columns: "Columns"
  },
  pagination: {
    first: "First page",
    prev: "Previous page",
    next: "Next page",
    last: "Last page"
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source"
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found"
  }
};
function To() {
  const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string")
    return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Rn = Mn({
  __qLang: {}
}, {
  // props: object
  // __langConfig: object
  getLocale: To,
  set(e = xr, t) {
    const n = {
      ...e,
      rtl: e.rtl === !0,
      getLocale: To
    };
    {
      if (n.set = Rn.set, Rn.__langConfig === void 0 || Rn.__langConfig.noHtmlAttrs !== !0) {
        const a = document.documentElement;
        a.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"), a.setAttribute("lang", n.isoName);
      }
      Object.assign(Rn.__qLang, n);
    }
  },
  install({ $q: e, lang: t, ssrContext: n }) {
    e.lang = Rn.__qLang, Rn.__langConfig = e.config.lang, this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, {
      get() {
        return Reflect.get(...arguments);
      },
      ownKeys(a) {
        return Reflect.ownKeys(a).filter((l) => l !== "set" && l !== "getLocale");
      }
    }), this.set(t || xr));
  }
}), tu = Rn, kc = {
  name: "material-icons",
  type: {
    positive: "check_circle",
    negative: "warning",
    info: "info",
    warning: "priority_high"
  },
  arrow: {
    up: "arrow_upward",
    right: "arrow_forward",
    down: "arrow_downward",
    left: "arrow_back",
    dropdown: "arrow_drop_down"
  },
  chevron: {
    left: "chevron_left",
    right: "chevron_right"
  },
  colorPicker: {
    spectrum: "gradient",
    tune: "tune",
    palette: "style"
  },
  pullToRefresh: {
    icon: "refresh"
  },
  carousel: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
    navigationIcon: "lens"
  },
  chip: {
    remove: "cancel",
    selected: "check"
  },
  datetime: {
    arrowLeft: "chevron_left",
    arrowRight: "chevron_right",
    now: "access_time",
    today: "today"
  },
  editor: {
    bold: "format_bold",
    italic: "format_italic",
    strikethrough: "strikethrough_s",
    underline: "format_underlined",
    unorderedList: "format_list_bulleted",
    orderedList: "format_list_numbered",
    subscript: "vertical_align_bottom",
    superscript: "vertical_align_top",
    hyperlink: "link",
    toggleFullscreen: "fullscreen",
    quote: "format_quote",
    left: "format_align_left",
    center: "format_align_center",
    right: "format_align_right",
    justify: "format_align_justify",
    print: "print",
    outdent: "format_indent_decrease",
    indent: "format_indent_increase",
    removeFormat: "format_clear",
    formatting: "text_format",
    fontSize: "format_size",
    align: "format_align_left",
    hr: "remove",
    undo: "undo",
    redo: "redo",
    heading: "format_size",
    code: "code",
    size: "format_size",
    font: "font_download",
    viewSource: "code"
  },
  expansionItem: {
    icon: "keyboard_arrow_down",
    denseIcon: "arrow_drop_down"
  },
  fab: {
    icon: "add",
    activeIcon: "close"
  },
  field: {
    clear: "cancel",
    error: "error"
  },
  pagination: {
    first: "first_page",
    prev: "keyboard_arrow_left",
    next: "keyboard_arrow_right",
    last: "last_page"
  },
  rating: {
    icon: "grade"
  },
  stepper: {
    done: "check",
    active: "edit",
    error: "warning"
  },
  tabs: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down"
  },
  table: {
    arrowUp: "arrow_upward",
    warning: "warning",
    firstPage: "first_page",
    prevPage: "chevron_left",
    nextPage: "chevron_right",
    lastPage: "last_page"
  },
  tree: {
    icon: "play_arrow"
  },
  uploader: {
    done: "done",
    clear: "clear",
    add: "add_box",
    upload: "cloud_upload",
    removeQueue: "clear_all",
    removeUploaded: "done_all"
  }
}, Mo = Mn({
  iconMapFn: null,
  __qIconSet: {}
}, {
  // props: object
  set(e, t) {
    const n = { ...e };
    n.set = Mo.set, Object.assign(Mo.__qIconSet, n);
  },
  install({ $q: e, iconSet: t, ssrContext: n }) {
    e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, xt(e, "iconMapFn", () => this.iconMapFn, (a) => {
      this.iconMapFn = a;
    }), this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, {
      get() {
        return Reflect.get(...arguments);
      },
      ownKeys(a) {
        return Reflect.ownKeys(a).filter((l) => l !== "set");
      }
    }), this.set(t || kc));
  }
}), nu = "_q_t_", au = "_q_s_", Wn = "_q_l_", lu = "_q_pc_", ru = "_q_f_", ou = "_q_fo_", iu = "_q_tabs_", uu = "_q_u_";
function tt() {
}
var $o = {};
function Zt(e, t) {
  if (e === t)
    return !0;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, a;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (Zt(e[a], t[a]) !== !0)
          return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return !1;
      let r = e.entries();
      for (a = r.next(); a.done !== !0; ) {
        if (t.has(a.value[0]) !== !0)
          return !1;
        a = r.next();
      }
      for (r = e.entries(), a = r.next(); a.done !== !0; ) {
        if (Zt(a.value[1], t.get(a.value[0])) !== !0)
          return !1;
        a = r.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return !1;
      const r = e.entries();
      for (a = r.next(); a.done !== !0; ) {
        if (t.has(a.value[0]) !== !0)
          return !1;
        a = r.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (e[a] !== t[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const l = Object.keys(e).filter((r) => e[r] !== void 0);
    if (n = l.length, n !== Object.keys(t).filter((r) => t[r] !== void 0).length)
      return !1;
    for (a = n; a-- !== 0; ) {
      const r = l[a];
      if (Zt(e[r], t[r]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Lt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function Oa(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function qc(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Va(e) {
  return typeof e == "number" && isFinite(e);
}
function su(e, t) {
  const n = gc(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: a, ...l } = t._context;
  return Object.assign(n._context, l), n;
}
var Bo = ["B", "KB", "MB", "GB", "TB", "PB"];
function kr(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Bo.length - 1; )
    e /= 1024, ++n;
  return `${e.toFixed(t)}${Bo[n]}`;
}
function Tc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function at(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function bl(e, t, n) {
  if (n <= t)
    return t;
  const a = n - t + 1;
  let l = t + (e - t) % a;
  return l < t && (l = a + l), l === 0 ? 0 : l;
}
function Je(e, t = 2, n = "0") {
  if (e == null)
    return e;
  const a = "" + e;
  return a.length >= t ? a : new Array(t - a.length + 1).join(n) + a;
}
var Nr = XMLHttpRequest, cu = Nr.prototype.open, Mc = ["top", "right", "bottom", "left"], yl = [], Fa = 0;
function $c({ p: e, pos: t, active: n, horiz: a, reverse: l, dir: r }) {
  let o = 1, i = 1;
  return a === !0 ? (l === !0 && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (l === !0 && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function Bc(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), at(e + t, 0, 100);
}
function Lc(e) {
  Fa++, yl.push(e), !(Fa > 1) && (Nr.prototype.open = function(t, n) {
    const a = [], l = () => {
      yl.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === !0) && (o.start(), a.push(o.stop));
      });
    }, r = () => {
      a.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", l, { once: !0 }), this.addEventListener("loadend", r, { once: !0 }), cu.apply(this, arguments);
  });
}
function Fc(e) {
  yl = yl.filter((t) => t.start !== e), Fa = Math.max(0, Fa - 1), Fa === 0 && (Nr.prototype.open = cu);
}
var zc = te({
  name: "QAjaxBar",
  props: {
    position: {
      type: String,
      default: "top",
      validator: (e) => Mc.includes(e)
    },
    size: {
      type: String,
      default: "2px"
    },
    color: String,
    skipHijack: Boolean,
    reverse: Boolean,
    hijackFilter: Function
  },
  emits: ["start", "stop"],
  setup(e, { emit: t }) {
    const { proxy: n } = ve(), a = E(0), l = E(!1), r = E(!0);
    let o = 0, i = null, c;
    const f = s(
      () => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === !0 ? "" : " no-transition")
    ), d = s(() => e.position === "top" || e.position === "bottom"), b = s(() => d.value === !0 ? "height" : "width"), g = s(() => {
      const y = l.value, h = $c({
        p: a.value,
        pos: e.position,
        active: y,
        horiz: d.value,
        reverse: n.$q.lang.rtl === !0 && ["top", "bottom"].includes(e.position) ? e.reverse === !1 : e.reverse,
        dir: n.$q.lang.rtl === !0 ? -1 : 1
      });
      return h[b.value] = e.size, h.opacity = y ? 1 : 0, h;
    }), v = s(() => l.value === !0 ? {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": a.value
    } : { "aria-hidden": "true" });
    function m(y = 300) {
      const h = c;
      return c = Math.max(0, y) || 0, o++, o > 1 ? (h === 0 && y > 0 ? x() : i !== null && h > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), a.value = 0, i = setTimeout(() => {
        i = null, r.value = !0, y > 0 && x();
      }, l._value === !0 ? 500 : 1), l._value !== !0 && (l.value = !0, r.value = !1), o);
    }
    function S(y) {
      return o > 0 && (a.value = Bc(a.value, y)), o;
    }
    function p() {
      if (o = Math.max(0, o - 1), o > 0)
        return o;
      i !== null && (clearTimeout(i), i = null), t("stop");
      const y = () => {
        r.value = !0, a.value = 100, i = setTimeout(() => {
          i = null, l.value = !1;
        }, 1e3);
      };
      return a.value === 0 ? i = setTimeout(y, 1) : y(), o;
    }
    function x() {
      a.value < 100 && (i = setTimeout(() => {
        i = null, S(), x();
      }, c));
    }
    let C;
    return ut(() => {
      e.skipHijack !== !0 && (C = !0, Lc({
        start: m,
        stop: p,
        hijackFilter: s(() => e.hijackFilter || null)
      }));
    }), je(() => {
      i !== null && clearTimeout(i), C === !0 && Fc(m);
    }), Object.assign(n, { start: m, stop: p, increment: S }), () => u("div", {
      class: f.value,
      style: g.value,
      ...v.value
    });
  }
}), qr = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, mn = {
  size: String
};
function gn(e, t = qr) {
  return s(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function xe(e, t) {
  return e !== void 0 && e() || t;
}
function ja(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function gt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Ir(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Wt(e, t, n, a, l, r) {
  t.key = a + l;
  const o = u(e, t, n);
  return l === !0 ? Kt(o, r()) : o;
}
var Lo = "0 0 24 24", Zl = (e) => e, Jl = (e) => `ionicons ${e}`, du = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": Zl,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": Jl,
  "ion-ios": Jl,
  "ion-logo": Jl,
  "iconfont ": Zl,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`,
  "i-": Zl
  // UnoCSS pure icons
}, fu = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, vu = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Rc = new RegExp("^(" + Object.keys(du).join("|") + ")"), Pc = new RegExp("^(" + Object.keys(fu).join("|") + ")"), Fo = new RegExp("^(" + Object.keys(vu).join("|") + ")"), Ac = /^[Mm]\s?[-+]?\.?\d/, Ec = /^img:/, Oc = /^svguse:/, Vc = /^ion-/, Dc = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Xe = te({
  name: "QIcon",
  props: {
    ...mn,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = gn(e), l = s(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), r = s(() => {
      let o, i = e.name;
      if (i === "none" || !i)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const d = n.iconMapFn(i);
        if (d !== void 0)
          if (d.icon !== void 0) {
            if (i = d.icon, i === "none" || !i)
              return { none: !0 };
          } else
            return {
              cls: d.cls,
              content: d.content !== void 0 ? d.content : " "
            };
      }
      if (Ac.test(i) === !0) {
        const [d, b = Lo] = i.split("|");
        return {
          svg: !0,
          viewBox: b,
          nodes: d.split("&&").map((g) => {
            const [v, m, S] = g.split("@@");
            return u("path", { style: m, d: v, transform: S });
          })
        };
      }
      if (Ec.test(i) === !0)
        return {
          img: !0,
          src: i.substring(4)
        };
      if (Oc.test(i) === !0) {
        const [d, b = Lo] = i.split("|");
        return {
          svguse: !0,
          src: d.substring(7),
          viewBox: b
        };
      }
      let c = " ";
      const f = i.match(Rc);
      if (f !== null)
        o = du[f[1]](i);
      else if (Dc.test(i) === !0)
        o = i;
      else if (Vc.test(i) === !0)
        o = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${i.substring(3)}`;
      else if (Fo.test(i) === !0) {
        o = "notranslate material-symbols";
        const d = i.match(Fo);
        d !== null && (i = i.substring(6), o += vu[d[1]]), c = i;
      } else {
        o = "notranslate material-icons";
        const d = i.match(Pc);
        d !== null && (i = i.substring(2), o += fu[d[1]]), c = i;
      }
      return {
        cls: o,
        content: c
      };
    });
    return () => {
      const o = {
        class: l.value,
        style: a.value,
        "aria-hidden": "true"
      };
      return r.value.none === !0 ? u(e.tag, o, xe(t.default)) : r.value.img === !0 ? u(e.tag, o, gt(t.default, [
        u("img", { src: r.value.src })
      ])) : r.value.svg === !0 ? u(e.tag, o, gt(t.default, [
        u("svg", {
          viewBox: r.value.viewBox || "0 0 24 24"
        }, r.value.nodes)
      ])) : r.value.svguse === !0 ? u(e.tag, o, gt(t.default, [
        u("svg", {
          viewBox: r.value.viewBox
        }, [
          u("use", { "xlink:href": r.value.src })
        ])
      ])) : (r.value.cls !== void 0 && (o.class += " " + r.value.cls), u(e.tag, o, gt(t.default, [
        r.value.content
      ])));
    };
  }
});
te({
  name: "QAvatar",
  props: {
    ...mn,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean
  },
  setup(e, { slots: t }) {
    const n = gn(e), a = s(
      () => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : "")
    ), l = s(() => e.fontSize ? { fontSize: e.fontSize } : null);
    return () => {
      const r = e.icon !== void 0 ? [u(Xe, { name: e.icon })] : void 0;
      return u("div", {
        class: a.value,
        style: n.value
      }, [
        u("div", {
          class: "q-avatar__content row flex-center overflow-hidden",
          style: l.value
        }, Ir(t.default, r))
      ]);
    };
  }
});
var Nc = ["top", "middle", "bottom"];
te({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (e) => Nc.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = s(() => e.align !== void 0 ? { verticalAlign: e.align } : null), a = s(() => {
      const l = e.outline === !0 && e.color || e.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "");
    });
    return () => u("div", {
      class: a.value,
      style: n.value,
      role: "status",
      "aria-label": e.label
    }, gt(t.default, e.label !== void 0 ? [e.label] : []));
  }
});
var Ue = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Ye(e, t) {
  return s(() => e.dark === null ? t.dark.isActive : e.dark);
}
te({
  name: "QBanner",
  props: {
    ...Ue,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Ye(e, n), l = s(
      () => "q-banner row items-center" + (e.dense === !0 ? " q-banner--dense" : "") + (a.value === !0 ? " q-banner--dark q-dark" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), r = s(
      () => `q-banner__actions row items-center justify-end col-${e.inlineActions === !0 ? "auto" : "all"}`
    );
    return () => {
      const o = [
        u("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, xe(t.avatar)),
        u("div", {
          class: "q-banner__content col text-body2"
        }, xe(t.default))
      ], i = xe(t.action);
      return i !== void 0 && o.push(
        u("div", { class: r.value }, i)
      ), u("div", {
        class: l.value + (e.inlineActions === !1 && i !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, o);
    };
  }
});
te({
  name: "QBar",
  props: {
    ...Ue,
    dense: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Ye(e, n), l = s(
      () => `q-bar row no-wrap items-center q-bar--${e.dense === !0 ? "dense" : "standard"}  q-bar--${a.value === !0 ? "dark" : "light"}`
    );
    return () => u("div", {
      class: l.value,
      role: "toolbar"
    }, xe(t.default));
  }
});
var mu = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Ic = Object.keys(mu), Hr = {
  align: {
    type: String,
    validator: (e) => Ic.includes(e)
  }
};
function jr(e) {
  return s(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${mu[t]}`;
  });
}
function dl(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function gu(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === !0 && t.children.forEach((n) => {
    gu(e, n);
  }) : e.add(t);
}
function Qr(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    gu(t, n);
  }), Array.from(t);
}
function Kr(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function kn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
var Hc = ["", !0];
te({
  name: "QBreadcrumbs",
  props: {
    ...Hr,
    separator: {
      type: String,
      default: "/"
    },
    separatorColor: String,
    activeColor: {
      type: String,
      default: "primary"
    },
    gutter: {
      type: String,
      validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e),
      default: "sm"
    }
  },
  setup(e, { slots: t }) {
    const n = jr(e), a = s(
      () => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`
    ), l = s(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = s(() => ` text-${e.activeColor}`);
    return () => {
      if (t.default === void 0) return;
      const o = Qr(
        xe(t.default)
      );
      if (o.length === 0) return;
      let i = 1;
      const c = [], f = o.filter((b) => {
        var g;
        return ((g = b.type) == null ? void 0 : g.name) === "QBreadcrumbsEl";
      }).length, d = t.separator !== void 0 ? t.separator : () => e.separator;
      return o.forEach((b) => {
        var g;
        if (((g = b.type) == null ? void 0 : g.name) === "QBreadcrumbsEl") {
          const v = i < f, m = b.props !== null && Hc.includes(b.props.disable), S = (v === !0 ? "" : " q-breadcrumbs--last") + (m !== !0 && v === !0 ? r.value : "");
          i++, c.push(
            u("div", {
              class: `flex items-center${S}`
            }, [b])
          ), v === !0 && c.push(
            u("div", {
              class: "q-breadcrumbs__separator" + l.value
            }, d())
          );
        } else
          c.push(b);
      }), u("div", {
        class: "q-breadcrumbs"
      }, [
        u("div", { class: a.value }, c)
      ]);
    };
  }
});
function zo(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Ro(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function jc(e, t) {
  for (const n in t) {
    const a = t[n], l = e[n];
    if (typeof a == "string") {
      if (a !== l)
        return !1;
    } else if (Array.isArray(l) === !1 || l.length !== a.length || a.some((r, o) => r !== l[o]))
      return !1;
  }
  return !0;
}
function Po(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, a) => n === t[a]) : e.length === 1 && e[0] === t;
}
function Qc(e, t) {
  return Array.isArray(e) === !0 ? Po(e, t) : Array.isArray(t) === !0 ? Po(t, e) : e === t;
}
function Kc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (Qc(e[n], t[n]) === !1)
      return !1;
  return !0;
}
var hu = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
}, Qa = {
  ...hu,
  // router-link
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  }
};
function Al({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = ve(), { props: a, proxy: l, emit: r } = n, o = Kr(n), i = s(() => a.disable !== !0 && a.href !== void 0), c = t === !0 ? s(
    () => o === !0 && a.disable !== !0 && i.value !== !0 && a.to !== void 0 && a.to !== null && a.to !== ""
  ) : s(
    () => o === !0 && i.value !== !0 && a.to !== void 0 && a.to !== null && a.to !== ""
  ), f = s(() => c.value === !0 ? C(a.to) : null), d = s(() => f.value !== null), b = s(() => i.value === !0 || d.value === !0), g = s(() => a.type === "a" || b.value === !0 ? "a" : a.tag || e || "div"), v = s(() => i.value === !0 ? {
    href: a.href,
    target: a.target
  } : d.value === !0 ? {
    href: f.value.href,
    target: a.target
  } : {}), m = s(() => {
    if (d.value === !1)
      return -1;
    const { matched: _ } = f.value, { length: L } = _, F = _[L - 1];
    if (F === void 0)
      return -1;
    const R = l.$route.matched;
    if (R.length === 0)
      return -1;
    const z = R.findIndex(
      Ro.bind(null, F)
    );
    if (z !== -1)
      return z;
    const B = zo(_[L - 2]);
    return (
      // we are dealing with nested routes
      L > 1 && zo(F) === B && R[R.length - 1].path !== B ? R.findIndex(
        Ro.bind(null, _[L - 2])
      ) : z
    );
  }), S = s(
    () => d.value === !0 && m.value !== -1 && jc(l.$route.params, f.value.params)
  ), p = s(
    () => S.value === !0 && m.value === l.$route.matched.length - 1 && Kc(l.$route.params, f.value.params)
  ), x = s(() => d.value === !0 ? p.value === !0 ? ` ${a.exactActiveClass} ${a.activeClass}` : a.exact === !0 ? "" : S.value === !0 ? ` ${a.activeClass}` : "" : "");
  function C(_) {
    try {
      return l.$router.resolve(_);
    } catch {
    }
    return null;
  }
  function y(_, { returnRouterError: L, to: F = a.to, replace: R = a.replace } = {}) {
    if (a.disable === !0)
      return _.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      _.metaKey || _.altKey || _.ctrlKey || _.shiftKey || _.button !== void 0 && _.button !== 0 || a.target === "_blank"
    )
      return Promise.resolve(!1);
    _.preventDefault();
    const z = l.$router[R === !0 ? "replace" : "push"](F);
    return L === !0 ? z : z.then(() => {
    }).catch(() => {
    });
  }
  function h(_) {
    if (d.value === !0) {
      const L = (F) => y(_, F);
      r("click", _, L), _.defaultPrevented !== !0 && L();
    } else
      r("click", _);
  }
  return {
    hasRouterLink: d,
    hasHrefLink: i,
    hasLink: b,
    linkTag: g,
    resolvedLink: f,
    linkIsActive: S,
    linkIsExactActive: p,
    linkClass: x,
    linkAttrs: v,
    getLink: C,
    navigateToRouterLink: y,
    navigateOnClick: h
  };
}
te({
  name: "QBreadcrumbsEl",
  props: {
    ...Qa,
    label: String,
    icon: String,
    tag: {
      type: String,
      default: "span"
    }
  },
  emits: ["click"],
  setup(e, { slots: t }) {
    const { linkTag: n, linkAttrs: a, linkClass: l, navigateOnClick: r } = Al(), o = s(() => ({
      class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== !0 ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"),
      ...a.value,
      onClick: r
    })), i = s(
      () => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : "")
    );
    return () => {
      const c = [];
      return e.icon !== void 0 && c.push(
        u(Xe, {
          class: i.value,
          name: e.icon
        })
      ), e.label !== void 0 && c.push(e.label), u(
        n.value,
        { ...o.value },
        gt(t.default, c)
      );
    };
  }
});
var ht = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function bt(e) {
  return {
    cSize: s(() => e.size in qr ? `${qr[e.size]}px` : e.size),
    classes: s(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
var en = te({
  name: "QSpinner",
  props: {
    ...ht,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      u("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function pl(e) {
  if (e === window)
    return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function ya(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Tr(e, t) {
  const n = e.style;
  for (const a in t)
    n[a] = t[a];
}
function Uc(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = Aa(e);
  if (t)
    return t.$el || t;
}
function bu(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
function yu(e, t = 250) {
  let n = !1, a;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), a = e.apply(this, arguments)), a;
  };
}
function Ao(e, t, n, a) {
  n.modifiers.stop === !0 && ft(e);
  const l = n.modifiers.color;
  let r = n.modifiers.center;
  r = r === !0 || a === !0;
  const o = document.createElement("span"), i = document.createElement("span"), c = Pt(e), { left: f, top: d, width: b, height: g } = t.getBoundingClientRect(), v = Math.sqrt(b * b + g * g), m = v / 2, S = `${(b - v) / 2}px`, p = r ? S : `${c.left - f - m}px`, x = `${(g - v) / 2}px`, C = r ? x : `${c.top - d - m}px`;
  i.className = "q-ripple__inner", Tr(i, {
    height: `${v}px`,
    width: `${v}px`,
    transform: `translate3d(${p},${C},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), o.className = `q-ripple${l ? " text-" + l : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(h);
  };
  n.abort.push(y);
  let h = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${S},${x},0) scale3d(1,1,1)`, i.style.opacity = 0.2, h = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, h = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Eo(e, { modifiers: t, value: n, arg: a }) {
  const l = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: l.early === !0,
    stop: l.stop === !0,
    center: l.center === !0,
    color: l.color || a,
    keyCodes: [].concat(l.keyCodes || 13)
  };
}
var El = tn(
  {
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1) return;
      const a = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(l) {
          a.enabled === !0 && l.qSkipRipple !== !0 && l.type === (a.modifiers.early === !0 ? "pointerdown" : "click") && Ao(l, e, a, l.qKeyEvent === !0);
        },
        keystart: yu((l) => {
          a.enabled === !0 && l.qSkipRipple !== !0 && Yt(l, a.modifiers.keyCodes) === !0 && l.type === `key${a.modifiers.early === !0 ? "down" : "up"}` && Ao(l, e, a, !0);
        }, 300)
      };
      Eo(a, t), e.__qripple = a, mt(a, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && Eo(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), Ft(t, "main"), delete e._qripple);
    }
  }
), Sl = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, Yc = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Wc = ["button", "submit", "reset"], Xc = /[^\s]\/[^\s]/, pu = ["flat", "outline", "push", "unelevated"];
function Ur(e, t) {
  return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t;
}
function Su(e) {
  const t = Ur(e);
  return t !== void 0 ? { [t]: !0 } : {};
}
var Yr = {
  ...mn,
  ...hu,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...pu.reduce(
    (e, t) => (e[t] = Boolean) && e,
    {}
  ),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  align: {
    ...Hr.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
}, Gc = {
  ...Yr,
  round: Boolean
};
function Zc(e) {
  const t = gn(e, Yc), n = jr(e), { hasRouterLink: a, hasLink: l, linkTag: r, linkAttrs: o, navigateOnClick: i } = Al({
    fallbackTag: "button"
  }), c = s(() => {
    const p = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, p, {
      padding: e.padding.split(/\s+/).map((x) => x in Sl ? Sl[x] + "px" : x).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : p;
  }), f = s(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), d = s(
    () => e.disable !== !0 && e.loading !== !0
  ), b = s(() => d.value === !0 ? e.tabindex || 0 : -1), g = s(() => Ur(e, "standard")), v = s(() => {
    const p = { tabindex: b.value };
    return l.value === !0 ? Object.assign(p, o.value) : Wc.includes(e.type) === !0 && (p.type = e.type), r.value === "a" ? (e.disable === !0 ? p["aria-disabled"] = "true" : p.href === void 0 && (p.role = "button"), a.value !== !0 && Xc.test(e.type) === !0 && (p.type = e.type)) : e.disable === !0 && (p.disabled = "", p["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(p, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), p;
  }), m = s(() => {
    let p;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? p = `text-${e.textColor || e.color}` : p = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (p = `text-${e.textColor}`);
    const x = e.round === !0 ? "round" : `rectangle${f.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${g.value} q-btn--${x}` + (p !== void 0 ? " " + p : "") + (d.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), S = s(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: m,
    style: c,
    innerClasses: S,
    attributes: v,
    hasLink: l,
    linkTag: r,
    navigateOnClick: i,
    isActionable: d
  };
}
var { passiveCapture: jt } = lt, Zn = null, Jn = null, ea = null, et = te({
  name: "QBtn",
  props: {
    ...Gc,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), {
      classes: l,
      style: r,
      innerClasses: o,
      attributes: i,
      hasLink: c,
      linkTag: f,
      navigateOnClick: d,
      isActionable: b
    } = Zc(e), g = E(null), v = E(null);
    let m = null, S, p = null;
    const x = s(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), C = s(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: c.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), y = s(() => ({ center: e.round })), h = s(() => {
      const w = Math.max(0, Math.min(100, e.percentage));
      return w > 0 ? { transition: "transform 0.6s", transform: `translateX(${w - 100}%)` } : {};
    }), _ = s(() => {
      if (e.loading === !0)
        return {
          onMousedown: q,
          onTouchstart: q,
          onClick: q,
          onKeydown: q,
          onKeyup: q
        };
      if (b.value === !0) {
        const w = {
          onClick: F,
          onKeydown: R,
          onMousedown: B
        };
        if (a.$q.platform.has.touch === !0) {
          const A = e.onTouchstart !== void 0 ? "" : "Passive";
          w[`onTouchstart${A}`] = z;
        }
        return w;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: Ae
      };
    }), L = s(() => ({
      ref: g,
      class: "q-btn q-btn-item non-selectable no-outline " + l.value,
      style: r.value,
      ...i.value,
      ..._.value
    }));
    function F(w) {
      if (g.value !== null) {
        if (w !== void 0) {
          if (w.defaultPrevented === !0) return;
          const A = document.activeElement;
          if (e.type === "submit" && A !== document.body && g.value.contains(A) === !1 && A.contains(g.value) === !1) {
            w.qAvoidFocus !== !0 && g.value.focus();
            const N = () => {
              var H;
              document.removeEventListener("keydown", Ae, !0), document.removeEventListener("keyup", N, jt), (H = g.value) == null || H.removeEventListener("blur", N, jt);
            };
            document.addEventListener("keydown", Ae, !0), document.addEventListener("keyup", N, jt), g.value.addEventListener("blur", N, jt);
          }
        }
        d(w);
      }
    }
    function R(w) {
      g.value !== null && (n("keydown", w), Yt(w, [13, 32]) === !0 && Jn !== g.value && (Jn !== null && T(), w.defaultPrevented !== !0 && (w.qAvoidFocus !== !0 && g.value.focus(), Jn = g.value, g.value.classList.add("q-btn--active"), document.addEventListener("keyup", P, !0), g.value.addEventListener("blur", P, jt)), Ae(w)));
    }
    function z(w) {
      g.value !== null && (n("touchstart", w), w.defaultPrevented !== !0 && (Zn !== g.value && (Zn !== null && T(), Zn = g.value, m = w.target, m.addEventListener("touchcancel", P, jt), m.addEventListener("touchend", P, jt)), S = !0, p !== null && clearTimeout(p), p = setTimeout(() => {
        p = null, S = !1;
      }, 200)));
    }
    function B(w) {
      g.value !== null && (w.qSkipRipple = S === !0, n("mousedown", w), w.defaultPrevented !== !0 && ea !== g.value && (ea !== null && T(), ea = g.value, g.value.classList.add("q-btn--active"), document.addEventListener("mouseup", P, jt)));
    }
    function P(w) {
      if (g.value !== null && !((w == null ? void 0 : w.type) === "blur" && document.activeElement === g.value)) {
        if ((w == null ? void 0 : w.type) === "keyup") {
          if (Jn === g.value && Yt(w, [13, 32]) === !0) {
            const A = new MouseEvent("click", w);
            A.qKeyEvent = !0, w.defaultPrevented === !0 && kt(A), w.cancelBubble === !0 && ft(A), g.value.dispatchEvent(A), Ae(w), w.qKeyEvent = !0;
          }
          n("keyup", w);
        }
        T();
      }
    }
    function T(w) {
      var N, H;
      const A = v.value;
      w !== !0 && (Zn === g.value || ea === g.value) && A !== null && A !== document.activeElement && (A.setAttribute("tabindex", -1), A.focus()), Zn === g.value && (m !== null && (m.removeEventListener("touchcancel", P, jt), m.removeEventListener("touchend", P, jt)), Zn = m = null), ea === g.value && (document.removeEventListener("mouseup", P, jt), ea = null), Jn === g.value && (document.removeEventListener("keyup", P, !0), (N = g.value) == null || N.removeEventListener("blur", P, jt), Jn = null), (H = g.value) == null || H.classList.remove("q-btn--active");
    }
    function q(w) {
      Ae(w), w.qSkipRipple = !0;
    }
    return je(() => {
      T(!0);
    }), Object.assign(a, {
      click: (w) => {
        b.value === !0 && F(w);
      }
    }), () => {
      let w = [];
      e.icon !== void 0 && w.push(
        u(Xe, {
          name: e.icon,
          left: e.stack !== !0 && x.value === !0,
          role: "img"
        })
      ), x.value === !0 && w.push(
        u("span", { class: "block" }, [e.label])
      ), w = gt(t.default, w), e.iconRight !== void 0 && e.round === !1 && w.push(
        u(Xe, {
          name: e.iconRight,
          right: e.stack !== !0 && x.value === !0,
          role: "img"
        })
      );
      const A = [
        u("span", {
          class: "q-focus-helper",
          ref: v
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && A.push(
        u("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          u("span", {
            class: "q-btn__progress-indicator fit block",
            style: h.value
          })
        ])
      ), A.push(
        u("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + o.value
        }, w)
      ), e.loading !== null && A.push(
        u(Ct, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          u("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [u(en)])
        ] : null)
      ), Kt(
        u(
          f.value,
          L.value,
          A
        ),
        [[
          El,
          C.value,
          void 0,
          y.value
        ]]
      );
    };
  }
}), _u = te({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(() => {
      const a = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((l) => e[l] === !0).map((l) => `q-btn-group--${l}`).join(" ");
      return `q-btn-group row no-wrap${a.length !== 0 ? " " + a : ""}` + (e.spread === !0 ? " q-btn-group--spread" : " inline");
    });
    return () => u("div", { class: n.value }, xe(t.default));
  }
});
function Jt() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Cc.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var wu = {
  /* SSR does not know about Element */
  target: {
    type: [Boolean, String, Element],
    default: !0
  },
  noParentEvent: Boolean
}, Cu = {
  ...wu,
  contextMenu: Boolean
};
function Wr({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: n
  // optional
}) {
  const { props: a, proxy: l, emit: r } = ve(), o = E(null);
  let i = null;
  function c(v) {
    return o.value === null ? !1 : v === void 0 || v.touches === void 0 || v.touches.length <= 1;
  }
  const f = {};
  n === void 0 && (Object.assign(f, {
    hide(v) {
      l.hide(v);
    },
    toggle(v) {
      l.toggle(v), v.qAnchorHandled = !0;
    },
    toggleKey(v) {
      Yt(v, 13) === !0 && f.toggle(v);
    },
    contextClick(v) {
      l.hide(v), kt(v), Ke(() => {
        l.show(v), v.qAnchorHandled = !0;
      });
    },
    prevent: kt,
    mobileTouch(v) {
      if (f.mobileCleanup(v), c(v) !== !0) return;
      l.hide(v), o.value.classList.add("non-selectable");
      const m = v.target;
      mt(f, "anchor", [
        [m, "touchmove", "mobileCleanup", "passive"],
        [m, "touchend", "mobileCleanup", "passive"],
        [m, "touchcancel", "mobileCleanup", "passive"],
        [o.value, "contextmenu", "prevent", "notPassive"]
      ]), i = setTimeout(() => {
        i = null, l.show(v), v.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(v) {
      o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === !0 && v !== void 0 && Jt();
    }
  }), n = function(v = a.contextMenu) {
    if (a.noParentEvent === !0 || o.value === null) return;
    let m;
    v === !0 ? l.$q.platform.is.mobile === !0 ? m = [
      [o.value, "touchstart", "mobileTouch", "passive"]
    ] : m = [
      [o.value, "mousedown", "hide", "passive"],
      [o.value, "contextmenu", "contextClick", "notPassive"]
    ] : m = [
      [o.value, "click", "toggle", "passive"],
      [o.value, "keyup", "toggleKey", "passive"]
    ], mt(f, "anchor", m);
  });
  function d() {
    Ft(f, "anchor");
  }
  function b(v) {
    for (o.value = v; o.value.classList.contains("q-anchor--skip"); )
      o.value = o.value.parentNode;
    n();
  }
  function g() {
    if (a.target === !1 || a.target === "" || l.$el.parentNode === null)
      o.value = null;
    else if (a.target === !0)
      b(l.$el.parentNode);
    else {
      let v = a.target;
      if (typeof a.target == "string")
        try {
          v = document.querySelector(a.target);
        } catch {
          v = void 0;
        }
      v != null ? (o.value = v.$el || v, n()) : (o.value = null, console.error(`Anchor: target "${a.target}" not found`));
    }
  }
  return ae(() => a.contextMenu, (v) => {
    o.value !== null && (d(), n(v));
  }), ae(() => a.target, () => {
    o.value !== null && d(), g();
  }), ae(() => a.noParentEvent, (v) => {
    o.value !== null && (v === !0 ? d() : n());
  }), ut(() => {
    g(), t !== !0 && a.modelValue === !0 && o.value === null && r("update:modelValue", !1);
  }), je(() => {
    i !== null && clearTimeout(i), d();
  }), {
    anchorEl: o,
    canShow: c,
    anchorEvents: f
  };
}
function xu(e, t) {
  const n = E(null);
  let a;
  function l(i, c) {
    const f = `${c !== void 0 ? "add" : "remove"}EventListener`, d = c !== void 0 ? c : a;
    i !== window && i[f]("scroll", d, lt.passive), window[f]("scroll", d, lt.passive), a = c;
  }
  function r() {
    n.value !== null && (l(n.value), n.value = null);
  }
  const o = ae(() => e.noParentEvent, () => {
    n.value !== null && (r(), t());
  });
  return je(o), {
    localScrollTarget: n,
    unconfigureScrollTarget: r,
    changeScrollEvent: l
  };
}
var _a = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, wa = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function Ca({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: n,
  // optional
  handleShow: a,
  // optional
  handleHide: l,
  // optional
  processOnMount: r
  // optional
}) {
  const o = ve(), { props: i, emit: c, proxy: f } = o;
  let d;
  function b(C) {
    e.value === !0 ? m(C) : g(C);
  }
  function g(C) {
    if (i.disable === !0 || (C == null ? void 0 : C.qAnchorHandled) === !0 || t !== void 0 && t(C) !== !0) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === !0 && (c("update:modelValue", !0), d = C, Ke(() => {
      d === C && (d = void 0);
    })), (i.modelValue === null || y === !1) && v(C);
  }
  function v(C) {
    e.value !== !0 && (e.value = !0, c("beforeShow", C), a !== void 0 ? a(C) : c("show", C));
  }
  function m(C) {
    if (i.disable === !0) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === !0 && (c("update:modelValue", !1), d = C, Ke(() => {
      d === C && (d = void 0);
    })), (i.modelValue === null || y === !1) && S(C);
  }
  function S(C) {
    e.value !== !1 && (e.value = !1, c("beforeHide", C), l !== void 0 ? l(C) : c("hide", C));
  }
  function p(C) {
    i.disable === !0 && C === !0 ? i["onUpdate:modelValue"] !== void 0 && c("update:modelValue", !1) : C === !0 !== e.value && (C === !0 ? v : S)(d);
  }
  ae(() => i.modelValue, p), n !== void 0 && Kr(o) === !0 && ae(() => f.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && m();
  }), r === !0 && ut(() => {
    p(i.modelValue);
  });
  const x = { show: g, hide: m, toggle: b };
  return Object.assign(f, x), x;
}
var On = [], Da = [];
function ku(e) {
  Da = Da.filter((t) => t !== e);
}
function Jc(e) {
  ku(e), Da.push(e);
}
function Oo(e) {
  ku(e), Da.length === 0 && On.length !== 0 && (On[On.length - 1](), On = []);
}
function xa(e) {
  Da.length === 0 ? e() : On.push(e);
}
function ed(e) {
  On = On.filter((t) => t !== e);
}
var fa = [], za = [], td = 1, Sn = document.body;
function Xr(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${td++}` : e, $o.globalNodes !== void 0) {
    const a = $o.globalNodes.class;
    a !== void 0 && (n.className = a);
  }
  return Sn.appendChild(n), fa.push(n), za.push(t), n;
}
function qu(e) {
  const t = fa.indexOf(e);
  fa.splice(t, 1), za.splice(t, 1), e.remove();
}
function nd(e) {
  if (e === Sn) return;
  if (Sn = e, Sn === document.body || za.reduce((n, a) => a === "dialog" ? n + 1 : n, 0) < 2) {
    fa.forEach((n) => {
      n.contains(Sn) === !1 && Sn.appendChild(n);
    });
    return;
  }
  const t = za.lastIndexOf("dialog");
  for (let n = 0; n < fa.length; n++) {
    const a = fa[n];
    (n === t || za[n] !== "dialog") && a.contains(Sn) === !1 && Sn.appendChild(a);
  }
}
var va = [];
function ad(e) {
  return va.find(
    (t) => t.contentEl !== null && t.contentEl.contains(e)
  );
}
function Tu(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return dl(e);
    } else if (e.__qPortal === !0) {
      const n = dl(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = dl(e);
  } while (e != null);
}
function ld(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if (n--, e.$options.name === "QMenu") {
        e = Tu(e, t);
        continue;
      }
      e.hide(t);
    }
    e = dl(e);
  }
}
var rd = te({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  }
});
function od(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function Gr(e, t, n, a) {
  const l = E(!1), r = E(!1);
  let o = null;
  const i = {}, c = a === "dialog" && od(e);
  function f(b) {
    if (b === !0) {
      Oo(i), r.value = !0;
      return;
    }
    r.value = !1, l.value === !1 && (c === !1 && o === null && (o = Xr(!1, a)), l.value = !0, va.push(e.proxy), Jc(i));
  }
  function d(b) {
    if (r.value = !1, b !== !0) return;
    Oo(i), l.value = !1;
    const g = va.indexOf(e.proxy);
    g !== -1 && va.splice(g, 1), o !== null && (qu(o), o = null);
  }
  return Yi(() => {
    d(!0);
  }), e.proxy.__qPortal = !0, xt(e.proxy, "contentEl", () => t.value), {
    showPortal: f,
    hidePortal: d,
    portalIsActive: l,
    portalIsAccessible: r,
    renderPortal: () => c === !0 ? n() : l.value === !0 ? [u(mc, { to: o }, u(rd, n))] : void 0
  };
}
var Dn = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function Ol(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: s(() => {
      const a = `q-transition--${e.transitionShow || t()}`, l = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${a}-enter-from`,
        enterActiveClass: `${a}-enter-active`,
        enterToClass: `${a}-enter-to`,
        leaveFromClass: `${l}-leave-from`,
        leaveActiveClass: `${l}-leave-active`,
        leaveToClass: `${l}-leave-to`
      };
    }),
    transitionStyle: s(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
function ma() {
  let e;
  const t = ve();
  function n() {
    e = void 0;
  }
  return vn(n), je(n), {
    removeTick: n,
    registerTick(a) {
      e = a, Ke(() => {
        e === a && (kn(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function dn() {
  let e = null;
  const t = ve();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return vn(n), je(n), {
    removeTimeout: n,
    registerTimeout(a, l) {
      n(), kn(t) === !1 && (e = setTimeout(() => {
        e = null, a();
      }, l));
    }
  };
}
var Xn = [Element, String], id = [null, document, document.body, document.scrollingElement, document.documentElement];
function ln(e, t) {
  let n = Uc(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return id.includes(n) ? window : n;
}
function Ya(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function qn(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Vl(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Mu(e, t, n = 0) {
  const a = arguments[3] === void 0 ? performance.now() : arguments[3], l = qn(e);
  if (n <= 0) {
    l !== t && Mr(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - a, i = l + (t - l) / Math.max(o, n) * o;
    Mr(e, i), i !== t && Mu(e, t, n - o, r);
  });
}
function $u(e, t, n = 0) {
  const a = arguments[3] === void 0 ? performance.now() : arguments[3], l = Vl(e);
  if (n <= 0) {
    l !== t && $r(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - a, i = l + (t - l) / Math.max(o, n) * o;
    $r(e, i), i !== t && $u(e, t, n - o, r);
  });
}
function Mr(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function $r(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function ga(e, t, n) {
  if (n) {
    Mu(e, t, n);
    return;
  }
  Mr(e, t);
}
function er(e, t, n) {
  if (n) {
    $u(e, t, n);
    return;
  }
  $r(e, t);
}
var Wa;
function fl() {
  if (Wa !== void 0)
    return Wa;
  const e = document.createElement("p"), t = document.createElement("div");
  Tr(e, {
    width: "100%",
    height: "200px"
  }), Tr(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let a = e.offsetWidth;
  return n === a && (a = t.clientWidth), t.remove(), Wa = n - a, Wa;
}
function ud(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Nn = [], pa;
function sd(e) {
  pa = e.keyCode === 27;
}
function cd() {
  pa === !0 && (pa = !1);
}
function dd(e) {
  pa === !0 && (pa = !1, Yt(e, 27) === !0 && Nn[Nn.length - 1](e));
}
function Bu(e) {
  window[e]("keydown", sd), window[e]("blur", cd), window[e]("keyup", dd), pa = !1;
}
function Lu(e) {
  De.is.desktop === !0 && (Nn.push(e), Nn.length === 1 && Bu("addEventListener"));
}
function _l(e) {
  const t = Nn.indexOf(e);
  t !== -1 && (Nn.splice(t, 1), Nn.length === 0 && Bu("removeEventListener"));
}
var In = [];
function Fu(e) {
  In[In.length - 1](e);
}
function zu(e) {
  De.is.desktop === !0 && (In.push(e), In.length === 1 && document.body.addEventListener("focusin", Fu));
}
function Br(e) {
  const t = In.indexOf(e);
  t !== -1 && (In.splice(t, 1), In.length === 0 && document.body.removeEventListener("focusin", Fu));
}
var { notPassiveCapture: wl } = lt, Hn = [];
function Cl(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0) return;
  let n = va.length - 1;
  for (; n >= 0; ) {
    const a = va[n].$;
    if (a.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (a.type.name !== "QDialog")
      break;
    if (a.props.seamless !== !0) return;
    n--;
  }
  for (let a = Hn.length - 1; a >= 0; a--) {
    const l = Hn[a];
    if ((l.anchorEl.value === null || l.anchorEl.value.contains(t) === !1) && (t === document.body || l.innerRef.value !== null && l.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, l.onClickOutside(e);
    else
      return;
  }
}
function Ru(e) {
  Hn.push(e), Hn.length === 1 && (document.addEventListener("mousedown", Cl, wl), document.addEventListener("touchstart", Cl, wl));
}
function xl(e) {
  const t = Hn.findIndex((n) => n === e);
  t !== -1 && (Hn.splice(t, 1), Hn.length === 0 && (document.removeEventListener("mousedown", Cl, wl), document.removeEventListener("touchstart", Cl, wl)));
}
var Vo, Do;
function kl(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function Pu(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
var Lr = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  Lr[`${e}#ltr`] = e, Lr[`${e}#rtl`] = e;
});
function ql(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: Lr[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function fd(e, t) {
  let { top: n, left: a, right: l, bottom: r, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], a -= t[0], r += t[1], l += t[0], o += t[0], i += t[1]), {
    top: n,
    bottom: r,
    height: i,
    left: a,
    right: l,
    width: o,
    middle: a + (l - a) / 2,
    center: n + (r - n) / 2
  };
}
function vd(e, t, n) {
  let { top: a, left: l } = e.getBoundingClientRect();
  return a += t.top, l += t.left, n !== void 0 && (a += n[1], l += n[0]), {
    top: a,
    bottom: a + 1,
    height: 1,
    left: l,
    right: l + 1,
    width: 1,
    middle: l,
    center: a
  };
}
function md(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function No(e, t, n, a) {
  return {
    top: e[n.vertical] - t[a.vertical],
    left: e[n.horizontal] - t[a.horizontal]
  };
}
function Zr(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Zr(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: a,
    anchorEl: l,
    anchorOrigin: r,
    selfOrigin: o,
    absoluteOffset: i,
    fit: c,
    cover: f,
    maxHeight: d,
    maxWidth: b
  } = e;
  if (De.is.ios === !0 && window.visualViewport !== void 0) {
    const L = document.body.style, { offsetLeft: F, offsetTop: R } = window.visualViewport;
    F !== Vo && (L.setProperty("--q-pe-left", F + "px"), Vo = F), R !== Do && (L.setProperty("--q-pe-top", R + "px"), Do = R);
  }
  const { scrollLeft: g, scrollTop: v } = n, m = i === void 0 ? fd(l, f === !0 ? [0, 0] : a) : vd(l, i, a);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: b,
    maxHeight: d,
    visibility: "visible"
  });
  const { offsetWidth: S, offsetHeight: p } = n, { elWidth: x, elHeight: C } = c === !0 || f === !0 ? { elWidth: Math.max(m.width, S), elHeight: f === !0 ? Math.max(m.height, p) : p } : { elWidth: S, elHeight: p };
  let y = { maxWidth: b, maxHeight: d };
  (c === !0 || f === !0) && (y.minWidth = m.width + "px", f === !0 && (y.minHeight = m.height + "px")), Object.assign(n.style, y);
  const h = md(x, C);
  let _ = No(m, h, r, o);
  if (i === void 0 || a === void 0)
    tr(_, m, h, r, o);
  else {
    const { top: L, left: F } = _;
    tr(_, m, h, r, o);
    let R = !1;
    if (_.top !== L) {
      R = !0;
      const z = 2 * a[1];
      m.center = m.top -= z, m.bottom -= z + 2;
    }
    if (_.left !== F) {
      R = !0;
      const z = 2 * a[0];
      m.middle = m.left -= z, m.right -= z + 2;
    }
    R === !0 && (_ = No(m, h, r, o), tr(_, m, h, r, o));
  }
  y = {
    top: _.top + "px",
    left: _.left + "px"
  }, _.maxHeight !== void 0 && (y.maxHeight = _.maxHeight + "px", m.height > _.maxHeight && (y.minHeight = y.maxHeight)), _.maxWidth !== void 0 && (y.maxWidth = _.maxWidth + "px", m.width > _.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== v && (n.scrollTop = v), n.scrollLeft !== g && (n.scrollLeft = g);
}
function tr(e, t, n, a, l) {
  const r = n.bottom, o = n.right, i = fl(), c = window.innerHeight - i, f = document.body.clientWidth;
  if (e.top < 0 || e.top + r > c)
    if (l.vertical === "center")
      e.top = t[a.vertical] > c / 2 ? Math.max(0, c - r) : 0, e.maxHeight = Math.min(r, c);
    else if (t[a.vertical] > c / 2) {
      const d = Math.min(
        c,
        a.vertical === "center" ? t.center : a.vertical === l.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(r, d), e.top = Math.max(0, d - r);
    } else
      e.top = Math.max(
        0,
        a.vertical === "center" ? t.center : a.vertical === l.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(r, c - e.top);
  if (e.left < 0 || e.left + o > f)
    if (e.maxWidth = Math.min(o, f), l.horizontal === "middle")
      e.left = t[a.horizontal] > f / 2 ? Math.max(0, f - o) : 0;
    else if (t[a.horizontal] > f / 2) {
      const d = Math.min(
        f,
        a.horizontal === "middle" ? t.middle : a.horizontal === l.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(o, d), e.left = Math.max(0, d - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        a.horizontal === "middle" ? t.middle : a.horizontal === l.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(o, f - e.left);
}
var Dl = te({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Cu,
    ..._a,
    ...Ue,
    ...Dn,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noEscDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: kl
    },
    self: {
      type: String,
      validator: kl
    },
    offset: {
      type: Array,
      validator: Pu
    },
    scrollTarget: Xn,
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...wa,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: a }) {
    let l = null, r, o, i;
    const c = ve(), { proxy: f } = c, { $q: d } = f, b = E(null), g = E(!1), v = s(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), m = Ye(e, d), { registerTick: S, removeTick: p } = ma(), { registerTimeout: x } = dn(), { transitionProps: C, transitionStyle: y } = Ol(e), { localScrollTarget: h, changeScrollEvent: _, unconfigureScrollTarget: L } = xu(e, U), { anchorEl: F, canShow: R } = Wr({ showing: g }), { hide: z } = Ca({
      showing: g,
      canShow: R,
      handleShow: ue,
      handleHide: I,
      hideOnRouteChange: v,
      processOnMount: !0
    }), { showPortal: B, hidePortal: P, renderPortal: T } = Gr(c, b, oe, "menu"), q = {
      anchorEl: F,
      innerRef: b,
      onClickOutside(j) {
        if (e.persistent !== !0 && g.value === !0)
          return z(j), // always prevent touch event
          (j.type === "touchstart" || j.target.classList.contains("q-dialog__backdrop")) && Ae(j), !0;
      }
    }, w = s(
      () => ql(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        d.lang.rtl
      )
    ), A = s(() => e.cover === !0 ? w.value : ql(e.self || "top start", d.lang.rtl)), N = s(
      () => (e.square === !0 ? " q-menu--square" : "") + (m.value === !0 ? " q-menu--dark q-dark" : "")
    ), H = s(() => e.autoClose === !0 ? { onClick: O } : {}), K = s(
      () => g.value === !0 && e.persistent !== !0
    );
    ae(K, (j) => {
      j === !0 ? (Lu($), Ru(q)) : (_l($), xl(q));
    });
    function W() {
      xa(() => {
        let j = b.value;
        j && j.contains(document.activeElement) !== !0 && (j = j.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || j.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || j.querySelector("[autofocus], [data-autofocus]") || j, j.focus({ preventScroll: !0 }));
      });
    }
    function ue(j) {
      if (l = e.noRefocus === !1 ? document.activeElement : null, zu(ne), B(), U(), r = void 0, j !== void 0 && (e.touchPosition || e.contextMenu)) {
        const de = Pt(j);
        if (de.left !== void 0) {
          const { top: he, left: Y } = F.value.getBoundingClientRect();
          r = { left: de.left - Y, top: de.top - he };
        }
      }
      o === void 0 && (o = ae(
        () => d.screen.width + "|" + d.screen.height + "|" + e.self + "|" + e.anchor + "|" + d.lang.rtl,
        Q
      )), e.noFocus !== !0 && document.activeElement.blur(), S(() => {
        Q(), e.noFocus !== !0 && W();
      }), x(() => {
        d.platform.is.ios === !0 && (i = e.autoClose, b.value.click()), Q(), B(!0), n("show", j);
      }, e.transitionDuration);
    }
    function I(j) {
      p(), P(), k(!0), l !== null && // menu was hidden from code or ESC plugin
      (j === void 0 || j.qClickOutside !== !0) && ((((j == null ? void 0 : j.type.indexOf("key")) === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), x(() => {
        P(!0), n("hide", j);
      }, e.transitionDuration);
    }
    function k(j) {
      r = void 0, o !== void 0 && (o(), o = void 0), (j === !0 || g.value === !0) && (Br(ne), L(), xl(q), _l($)), j !== !0 && (l = null);
    }
    function U() {
      (F.value !== null || e.scrollTarget !== void 0) && (h.value = ln(F.value, e.scrollTarget), _(h.value, Q));
    }
    function O(j) {
      i !== !0 ? (Tu(f, j), n("click", j)) : i = !1;
    }
    function ne(j) {
      K.value === !0 && e.noFocus !== !0 && bu(b.value, j.target) !== !0 && W();
    }
    function $(j) {
      e.noEscDismiss !== !0 && (n("escapeKey"), z(j));
    }
    function Q() {
      Zr({
        targetEl: b.value,
        offset: e.offset,
        anchorEl: F.value,
        anchorOrigin: w.value,
        selfOrigin: A.value,
        absoluteOffset: r,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function oe() {
      return u(
        Ct,
        C.value,
        () => g.value === !0 ? u("div", {
          role: "menu",
          ...a,
          ref: b,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + N.value,
            a.class
          ],
          style: [
            a.style,
            y.value
          ],
          ...H.value
        }, xe(t.default)) : null
      );
    }
    return je(k), Object.assign(f, { focus: W, updatePosition: Q }), T;
  }
}), nr, Xa = 0, Tt = new Array(256);
for (let e = 0; e < 256; e++)
  Tt[e] = (e + 256).toString(16).substring(1);
var gd = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const n = new Uint8Array(t);
        return e.getRandomValues(n), n;
      };
  }
  return (t) => {
    const n = [];
    for (let a = t; a > 0; a--)
      n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), Io = 4096;
function Na() {
  (nr === void 0 || Xa + 16 > Io) && (Xa = 0, nr = gd(Io));
  const e = Array.prototype.slice.call(nr, Xa, Xa += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Tt[e[0]] + Tt[e[1]] + Tt[e[2]] + Tt[e[3]] + "-" + Tt[e[4]] + Tt[e[5]] + "-" + Tt[e[6]] + Tt[e[7]] + "-" + Tt[e[8]] + Tt[e[9]] + "-" + Tt[e[10]] + Tt[e[11]] + Tt[e[12]] + Tt[e[13]] + Tt[e[14]] + Tt[e[15]];
}
function hd(e) {
  return e ?? null;
}
function Ho(e, t) {
  return e ?? (t === !0 ? `f_${Na()}` : null);
}
function Nl({ getValue: e, required: t = !0 } = {}) {
  if (Ut.value === !0) {
    const n = e !== void 0 ? E(hd(e())) : E(null);
    return t === !0 && n.value === null && ut(() => {
      n.value = `f_${Na()}`;
    }), e !== void 0 && ae(e, (a) => {
      n.value = Ho(a, t);
    }), n;
  }
  return e !== void 0 ? s(() => Ho(e(), t)) : E(`f_${Na()}`);
}
var bd = Object.keys(Yr);
function yd(e) {
  return bd.reduce((t, n) => {
    const a = e[n];
    return a !== void 0 && (t[n] = a), t;
  }, {});
}
var pd = te({
  name: "QBtnDropdown",
  props: {
    ...Yr,
    ...Dn,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noEscDismiss: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), l = E(e.modelValue), r = E(null), o = Nl(), i = s(() => {
      const h = {
        "aria-expanded": l.value === !0 ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": o.value,
        "aria-label": e.toggleAriaLabel || a.$q.lang.label[l.value === !0 ? "collapse" : "expand"](e.label)
      };
      return (e.disable === !0 || e.split === !1 && e.disableMainBtn === !0 || e.disableDropdown === !0) && (h["aria-disabled"] = "true"), h;
    }), c = s(
      () => "q-btn-dropdown__arrow" + (l.value === !0 && e.noIconAnimation === !1 ? " rotate-180" : "") + (e.split === !1 ? " q-btn-dropdown__arrow-container" : "")
    ), f = s(() => Su(e)), d = s(() => yd(e));
    ae(() => e.modelValue, (h) => {
      var _;
      (_ = r.value) == null || _[h ? "show" : "hide"]();
    }), ae(() => e.split, y);
    function b(h) {
      l.value = !0, n("beforeShow", h);
    }
    function g(h) {
      n("show", h), n("update:modelValue", !0);
    }
    function v(h) {
      l.value = !1, n("beforeHide", h);
    }
    function m(h) {
      n("hide", h), n("update:modelValue", !1);
    }
    function S(h) {
      n("click", h);
    }
    function p(h) {
      ft(h), y(), n("click", h);
    }
    function x(h) {
      var _;
      (_ = r.value) == null || _.toggle(h);
    }
    function C(h) {
      var _;
      (_ = r.value) == null || _.show(h);
    }
    function y(h) {
      var _;
      (_ = r.value) == null || _.hide(h);
    }
    return Object.assign(a, {
      show: C,
      hide: y,
      toggle: x
    }), ut(() => {
      e.modelValue === !0 && C();
    }), () => {
      const h = [
        u(Xe, {
          class: c.value,
          name: e.dropdownIcon || a.$q.iconSet.arrow.dropdown
        })
      ];
      return e.disableDropdown !== !0 && h.push(
        u(Dl, {
          ref: r,
          id: o.value,
          class: e.contentClass,
          style: e.contentStyle,
          cover: e.cover,
          fit: !0,
          persistent: e.persistent,
          noEscDismiss: e.noEscDismiss,
          noRouteDismiss: e.noRouteDismiss,
          autoClose: e.autoClose,
          noFocus: e.noFocus,
          noRefocus: e.noRefocus,
          anchor: e.menuAnchor,
          self: e.menuSelf,
          offset: e.menuOffset,
          separateClosePopup: !0,
          transitionShow: e.transitionShow,
          transitionHide: e.transitionHide,
          transitionDuration: e.transitionDuration,
          onBeforeShow: b,
          onShow: g,
          onBeforeHide: v,
          onHide: m
        }, t.default)
      ), e.split === !1 ? u(et, {
        class: "q-btn-dropdown q-btn-dropdown--simple",
        ...d.value,
        ...i.value,
        disable: e.disable === !0 || e.disableMainBtn === !0,
        noWrap: !0,
        round: !1,
        onClick: S
      }, {
        default: () => xe(t.label, []).concat(h),
        loading: t.loading
      }) : u(_u, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: e.rounded,
        square: e.square,
        ...f.value,
        glossy: e.glossy,
        stretch: e.stretch
      }, () => [
        u(et, {
          class: "q-btn-dropdown--current",
          ...d.value,
          disable: e.disable === !0 || e.disableMainBtn === !0,
          noWrap: !0,
          round: !1,
          onClick: p
        }, {
          default: t.label,
          loading: t.loading
        }),
        u(et, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...i.value,
          ...f.value,
          disable: e.disable === !0 || e.disableDropdown === !0,
          rounded: e.rounded,
          color: e.color,
          textColor: e.textColor,
          dense: e.dense,
          size: e.size,
          padding: e.padding,
          ripple: e.ripple
        }, () => h)
      ]);
    };
  }
}), Xt = {
  name: String
};
function Ka(e) {
  return s(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue
  }));
}
function $n(e = {}) {
  return (t, n, a) => {
    t[n](
      u("input", {
        class: "hidden" + (a || ""),
        ...e.value
      })
    );
  };
}
function Jr(e) {
  return s(() => e.name || e.for);
}
te({
  name: "QBtnToggle",
  props: {
    ...Xt,
    modelValue: {
      required: !0
    },
    options: {
      type: Array,
      required: !0,
      validator: (e) => e.every(
        (t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: !0
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(e, { slots: t, emit: n }) {
    const a = s(
      () => e.options.find((g) => g.value === e.modelValue) !== void 0
    ), l = s(() => ({
      type: "hidden",
      name: e.name,
      value: e.modelValue
    })), r = $n(l), o = s(() => Su(e)), i = s(() => ({
      rounded: e.rounded,
      dense: e.dense,
      ...o.value
    })), c = s(() => e.options.map((g, v) => {
      const { attrs: m, value: S, slot: p, ...x } = g;
      return {
        slot: p,
        props: {
          key: v,
          "aria-pressed": S === e.modelValue ? "true" : "false",
          ...m,
          ...x,
          ...i.value,
          disable: e.disable === !0 || x.disable === !0,
          // Options that come from the button specific options first, then from general props
          color: S === e.modelValue ? d(x, "toggleColor") : d(x, "color"),
          textColor: S === e.modelValue ? d(x, "toggleTextColor") : d(x, "textColor"),
          noCaps: d(x, "noCaps") === !0,
          noWrap: d(x, "noWrap") === !0,
          size: d(x, "size"),
          padding: d(x, "padding"),
          ripple: d(x, "ripple"),
          stack: d(x, "stack") === !0,
          stretch: d(x, "stretch") === !0,
          onClick(C) {
            f(S, g, C);
          }
        }
      };
    }));
    function f(g, v, m) {
      e.readonly !== !0 && (e.modelValue === g ? e.clearable === !0 && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", g, v), n("click", m));
    }
    function d(g, v) {
      return g[v] === void 0 ? e[v] : g[v];
    }
    function b() {
      const g = c.value.map((v) => u(et, v.props, v.slot !== void 0 ? t[v.slot] : void 0));
      return e.name !== void 0 && e.disable !== !0 && a.value === !0 && r(g, "push"), gt(t.default, g);
    }
    return () => u(_u, {
      class: "q-btn-toggle",
      ...o.value,
      rounded: e.rounded,
      stretch: e.stretch,
      glossy: e.glossy,
      spread: e.spread
    }, b);
  }
});
var Au = te({
  name: "QCard",
  props: {
    ...Ue,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Ye(e, n), l = s(
      () => "q-card" + (a.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => u(e.tag, { class: l.value }, xe(t.default));
  }
}), An = te({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`
    );
    return () => u(e.tag, { class: n.value }, xe(t.default));
  }
}), Sd = te({
  name: "QCardActions",
  props: {
    ...Hr,
    vertical: Boolean
  },
  setup(e, { slots: t }) {
    const n = jr(e), a = s(
      () => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`
    );
    return () => u("div", { class: a.value }, xe(t.default));
  }
}), eo = {
  left: !0,
  right: !0,
  up: !0,
  down: !0,
  horizontal: !0,
  vertical: !0
}, _d = Object.keys(eo);
eo.all = !0;
function Tl(e) {
  const t = {};
  for (const n of _d)
    e[n] === !0 && (t[n] = !0);
  return Object.keys(t).length === 0 ? eo : (t.horizontal === !0 ? t.left = t.right = !0 : t.left === !0 && t.right === !0 && (t.horizontal = !0), t.vertical === !0 ? t.up = t.down = !0 : t.up === !0 && t.down === !0 && (t.vertical = !0), t.horizontal === !0 && t.vertical === !0 && (t.all = !0), t);
}
var wd = ["INPUT", "TEXTAREA"];
function Ml(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof t.handler == "function" && wd.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Cd(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, a) => {
    const l = parseFloat(n);
    l && (t[a] = l);
  }), t;
}
var xd = tn(
  {
    name: "touch-swipe",
    beforeMount(e, { value: t, arg: n, modifiers: a }) {
      if (a.mouse !== !0 && De.has.touch !== !0) return;
      const l = a.mouseCapture === !0 ? "Capture" : "", r = {
        handler: t,
        sensitivity: Cd(n),
        direction: Tl(a),
        noop: _t,
        mouseStart(o) {
          Ml(o, r) && Pl(o) && (mt(r, "temp", [
            [document, "mousemove", "move", `notPassive${l}`],
            [document, "mouseup", "end", "notPassiveCapture"]
          ]), r.start(o, !0));
        },
        touchStart(o) {
          if (Ml(o, r)) {
            const i = o.target;
            mt(r, "temp", [
              [i, "touchmove", "move", "notPassiveCapture"],
              [i, "touchcancel", "end", "notPassiveCapture"],
              [i, "touchend", "end", "notPassiveCapture"]
            ]), r.start(o);
          }
        },
        start(o, i) {
          De.is.firefox === !0 && da(e, !0);
          const c = Pt(o);
          r.event = {
            x: c.left,
            y: c.top,
            time: Date.now(),
            mouse: i === !0,
            dir: !1
          };
        },
        move(o) {
          if (r.event === void 0) return;
          if (r.event.dir !== !1) {
            Ae(o);
            return;
          }
          const i = Date.now() - r.event.time;
          if (i === 0) return;
          const c = Pt(o), f = c.left - r.event.x, d = Math.abs(f), b = c.top - r.event.y, g = Math.abs(b);
          if (r.event.mouse !== !0) {
            if (d < r.sensitivity[1] && g < r.sensitivity[1]) {
              r.end(o);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            r.end(o);
            return;
          } else if (d < r.sensitivity[2] && g < r.sensitivity[2])
            return;
          const v = d / i, m = g / i;
          r.direction.vertical === !0 && d < g && d < 100 && m > r.sensitivity[0] && (r.event.dir = b < 0 ? "up" : "down"), r.direction.horizontal === !0 && d > g && g < 100 && v > r.sensitivity[0] && (r.event.dir = f < 0 ? "left" : "right"), r.direction.up === !0 && d < g && b < 0 && d < 100 && m > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === !0 && d < g && b > 0 && d < 100 && m > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === !0 && d > g && f < 0 && g < 100 && v > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === !0 && d > g && f > 0 && g < 100 && v > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== !1 ? (Ae(o), r.event.mouse === !0 && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Jt(), r.styleCleanup = (S) => {
            r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
            const p = () => {
              document.body.classList.remove("no-pointer-events--children");
            };
            S === !0 ? setTimeout(p, 50) : p();
          }), r.handler({
            evt: o,
            touch: r.event.mouse !== !0,
            mouse: r.event.mouse,
            direction: r.event.dir,
            duration: i,
            distance: {
              x: d,
              y: g
            }
          })) : r.end(o);
        },
        end(o) {
          var i;
          r.event !== void 0 && (Ft(r, "temp"), De.is.firefox === !0 && da(e, !1), (i = r.styleCleanup) == null || i.call(r, !0), o !== void 0 && r.event.dir !== !1 && Ae(o), r.event = void 0);
        }
      };
      if (e.__qtouchswipe = r, a.mouse === !0) {
        const o = a.mouseCapture === !0 || a.mousecapture === !0 ? "Capture" : "";
        mt(r, "main", [
          [e, "mousedown", "mouseStart", `passive${o}`]
        ]);
      }
      De.has.touch === !0 && mt(r, "main", [
        [e, "touchstart", "touchStart", `passive${a.capture === !0 ? "Capture" : ""}`],
        [e, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(e, t) {
      const n = e.__qtouchswipe;
      n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Tl(t.modifiers));
    },
    beforeUnmount(e) {
      var n;
      const t = e.__qtouchswipe;
      t !== void 0 && (Ft(t, "main"), Ft(t, "temp"), De.is.firefox === !0 && da(e, !1), (n = t.styleCleanup) == null || n.call(t), delete e.__qtouchswipe);
    }
  }
);
function Ua() {
  let e = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t],
    setCache(t, n) {
      e[t] = n;
    },
    hasCache(t) {
      return Object.hasOwnProperty.call(e, t);
    },
    clearCache(t) {
      t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
    }
  };
}
var to = {
  name: { required: !0 },
  disable: Boolean
}, jo = {
  setup(e, { slots: t }) {
    return () => u("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, xe(t.default));
  }
}, no = {
  modelValue: {
    required: !0
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
}, ao = ["update:modelValue", "beforeTransition", "transition"];
function lo() {
  const { props: e, emit: t, proxy: n } = ve(), { getCache: a } = Ua(), { registerTimeout: l } = dn();
  let r, o;
  const i = E(null), c = { value: null };
  function f(w) {
    const A = e.vertical === !0 ? "up" : "left";
    R((n.$q.lang.rtl === !0 ? -1 : 1) * (w.direction === A ? 1 : -1));
  }
  const d = s(() => [[
    xd,
    f,
    void 0,
    {
      horizontal: e.vertical !== !0,
      vertical: e.vertical,
      mouse: !0
    }
  ]]), b = s(
    () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`
  ), g = s(
    () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`
  ), v = s(
    () => `--q-transition-duration: ${e.transitionDuration}ms`
  ), m = s(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), S = s(() => ({
    include: e.keepAliveInclude,
    exclude: e.keepAliveExclude,
    max: e.keepAliveMax
  })), p = s(
    () => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0
  );
  ae(() => e.modelValue, (w, A) => {
    const N = h(w) === !0 ? _(w) : -1;
    o !== !0 && F(
      N === -1 ? 0 : N < _(A) ? -1 : 1
    ), c.value !== N && (c.value = N, t("beforeTransition", w, A), l(() => {
      t("transition", w, A);
    }, e.transitionDuration));
  });
  function x() {
    R(1);
  }
  function C() {
    R(-1);
  }
  function y(w) {
    t("update:modelValue", w);
  }
  function h(w) {
    return w != null && w !== "";
  }
  function _(w) {
    return r.findIndex((A) => A.props.name === w && A.props.disable !== "" && A.props.disable !== !0);
  }
  function L() {
    return r.filter((w) => w.props.disable !== "" && w.props.disable !== !0);
  }
  function F(w) {
    const A = w !== 0 && e.animated === !0 && c.value !== -1 ? "q-transition--" + (w === -1 ? b.value : g.value) : null;
    i.value !== A && (i.value = A);
  }
  function R(w, A = c.value) {
    let N = A + w;
    for (; N !== -1 && N < r.length; ) {
      const H = r[N];
      if (H !== void 0 && H.props.disable !== "" && H.props.disable !== !0) {
        F(w), o = !0, t("update:modelValue", H.props.name), setTimeout(() => {
          o = !1;
        });
        return;
      }
      N += w;
    }
    e.infinite === !0 && r.length !== 0 && A !== -1 && A !== r.length && R(w, w === -1 ? r.length : -1);
  }
  function z() {
    const w = _(e.modelValue);
    return c.value !== w && (c.value = w), !0;
  }
  function B() {
    const w = h(e.modelValue) === !0 && z() && r[c.value];
    return e.keepAlive === !0 ? [
      u(Wi, S.value, [
        u(
          p.value === !0 ? a(m.value, () => ({ ...jo, name: m.value })) : jo,
          { key: m.value, style: v.value },
          () => w
        )
      ])
    ] : [
      u("div", {
        class: "q-panel scroll",
        style: v.value,
        key: m.value,
        role: "tabpanel"
      }, [w])
    ];
  }
  function P() {
    if (r.length !== 0)
      return e.animated === !0 ? [u(Ct, { name: i.value }, B)] : B();
  }
  function T(w) {
    return r = Qr(
      xe(w.default, [])
    ).filter(
      (A) => A.props !== null && A.props.slot === void 0 && h(A.props.name) === !0
    ), r.length;
  }
  function q() {
    return r;
  }
  return Object.assign(n, {
    next: x,
    previous: C,
    goTo: y
  }), {
    panelIndex: c,
    panelDirectives: d,
    updatePanelsList: T,
    updatePanelIndex: z,
    getPanelContent: P,
    getEnabledPanels: L,
    getPanels: q,
    isValidPanelName: h,
    keepAliveProps: S,
    needsUniqueKeepAliveWrapper: p,
    goToPanelByOffset: R,
    goToPanel: y,
    nextPanel: x,
    previousPanel: C
  };
}
var ka = 0, ro = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
}, oo = ["update:fullscreen", "fullscreen"];
function io() {
  const e = ve(), { props: t, emit: n, proxy: a } = e;
  let l, r;
  const o = E(!1);
  Kr(e) === !0 && ae(() => a.$route.fullPath, () => {
    t.noRouteFullscreenExit !== !0 && f();
  }), ae(() => t.fullscreen, (d) => {
    o.value !== d && i();
  }), ae(o, (d) => {
    n("update:fullscreen", d), n("fullscreen", d);
  });
  function i() {
    o.value === !0 ? f() : c();
  }
  function c() {
    o.value !== !0 && (o.value = !0, r = a.$el.parentNode, r.replaceChild(l, a.$el), document.body.appendChild(a.$el), ka++, ka === 1 && document.body.classList.add("q-body--fullscreen-mixin"));
  }
  function f() {
    o.value === !0 && (r.replaceChild(a.$el, l), o.value = !1, ka = Math.max(0, ka - 1), ka === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), a.$el.scrollIntoView !== void 0 && setTimeout(() => {
      a.$el.scrollIntoView();
    })));
  }
  return Vr(() => {
    l = document.createElement("span");
  }), ut(() => {
    t.fullscreen === !0 && c();
  }), je(f), Object.assign(a, {
    toggleFullscreen: i,
    setFullscreen: c,
    exitFullscreen: f
  }), {
    inFullscreen: o,
    toggleFullscreen: i
  };
}
var kd = ["top", "right", "bottom", "left"], qd = ["regular", "flat", "outline", "push", "unelevated"];
te({
  name: "QCarousel",
  props: {
    ...Ue,
    ...no,
    ...ro,
    transitionPrev: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    transitionNext: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (e) => qd.includes(e),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (e) => kd.includes(e)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...oo,
    ...ao
  ],
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Ye(e, n);
    let l = null, r;
    const {
      updatePanelsList: o,
      getPanelContent: i,
      panelDirectives: c,
      goToPanel: f,
      previousPanel: d,
      nextPanel: b,
      getEnabledPanels: g,
      panelIndex: v
    } = lo(), { inFullscreen: m } = io(), S = s(() => m.value !== !0 && e.height !== void 0 ? { height: e.height } : {}), p = s(() => e.vertical === !0 ? "vertical" : "horizontal"), x = s(
      () => e.navigationPosition || (e.vertical === !0 ? "right" : "bottom")
    ), C = s(
      () => `q-carousel q-panel-parent q-carousel--with${e.padding === !0 ? "" : "out"}-padding` + (m.value === !0 ? " fullscreen" : "") + (a.value === !0 ? " q-carousel--dark q-dark" : "") + (e.arrows === !0 ? ` q-carousel--arrows-${p.value}` : "") + (e.navigation === !0 ? ` q-carousel--navigation-${x.value}` : "")
    ), y = s(() => {
      const B = [
        e.prevIcon || n.iconSet.carousel[e.vertical === !0 ? "up" : "left"],
        e.nextIcon || n.iconSet.carousel[e.vertical === !0 ? "down" : "right"]
      ];
      return e.vertical === !1 && n.lang.rtl === !0 ? B.reverse() : B;
    }), h = s(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), _ = s(() => e.navigationActiveIcon || h.value), L = s(() => ({
      color: e.controlColor,
      textColor: e.controlTextColor,
      round: !0,
      [e.controlType]: !0,
      dense: !0
    }));
    ae(() => e.modelValue, () => {
      e.autoplay && F();
    }), ae(() => e.autoplay, (B) => {
      B ? F() : l !== null && (clearTimeout(l), l = null);
    });
    function F() {
      const B = Va(e.autoplay) === !0 ? Math.abs(e.autoplay) : 5e3;
      l !== null && clearTimeout(l), l = setTimeout(() => {
        l = null, B >= 0 ? b() : d();
      }, B);
    }
    ut(() => {
      e.autoplay && F();
    }), je(() => {
      l !== null && clearTimeout(l);
    });
    function R(B, P) {
      return u("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${B} q-carousel__navigation--${x.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "")
      }, [
        u("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, g().map(P))
      ]);
    }
    function z() {
      const B = [];
      if (e.navigation === !0) {
        const P = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (q) => u(et, {
          key: "nav" + q.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${q.active === !0 ? "" : "in"}active`,
          ...q.btnProps,
          onClick: q.onClick
        }), T = r - 1;
        B.push(
          R("buttons", (q, w) => {
            const A = q.props.name, N = v.value === w;
            return P({
              index: w,
              maxIndex: T,
              name: A,
              active: N,
              btnProps: {
                icon: N === !0 ? _.value : h.value,
                size: "sm",
                ...L.value
              },
              onClick: () => {
                f(A);
              }
            });
          })
        );
      } else if (e.thumbnails === !0) {
        const P = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
        B.push(R("thumbnails", (T) => {
          const q = T.props;
          return u("img", {
            key: "tmb#" + q.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${q.name === e.modelValue ? "" : "in"}active` + P,
            src: q.imgSrc || q["img-src"],
            onClick: () => {
              f(q.name);
            }
          });
        }));
      }
      return e.arrows === !0 && v.value >= 0 && ((e.infinite === !0 || v.value > 0) && B.push(
        u("div", {
          key: "prev",
          class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${p.value} absolute flex flex-center`
        }, [
          u(et, {
            icon: y.value[0],
            ...L.value,
            onClick: d
          })
        ])
      ), (e.infinite === !0 || v.value < r - 1) && B.push(
        u("div", {
          key: "next",
          class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${p.value} absolute flex flex-center`
        }, [
          u(et, {
            icon: y.value[1],
            ...L.value,
            onClick: b
          })
        ])
      )), gt(t.control, B);
    }
    return () => (r = o(t), u("div", {
      class: C.value,
      style: S.value
    }, [
      Wt(
        "div",
        { class: "q-carousel__slides-container" },
        i(),
        "sl-cont",
        e.swipeable,
        () => c.value
      )
    ].concat(z())));
  }
});
te({
  name: "QCarouselSlide",
  props: {
    ...to,
    imgSrc: String
  },
  setup(e, { slots: t }) {
    const n = s(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
    return () => u("div", {
      class: "q-carousel__slide",
      style: n.value
    }, xe(t.default));
  }
});
te({
  name: "QCarouselControl",
  props: {
    position: {
      type: String,
      default: "bottom-right",
      validator: (e) => [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top",
        "right",
        "bottom",
        "left"
      ].includes(e)
    },
    offset: {
      type: Array,
      default: () => [18, 18],
      validator: (e) => e.length === 2
    }
  },
  setup(e, { slots: t }) {
    const n = s(() => `q-carousel__control absolute absolute-${e.position}`), a = s(() => ({
      margin: `${e.offset[1]}px ${e.offset[0]}px`
    }));
    return () => u("div", {
      class: n.value,
      style: a.value
    }, xe(t.default));
  }
});
te({
  name: "QChatMessage",
  props: {
    sent: Boolean,
    label: String,
    bgColor: String,
    textColor: String,
    name: String,
    avatar: String,
    text: Array,
    stamp: String,
    size: String,
    labelHtml: Boolean,
    nameHtml: Boolean,
    textHtml: Boolean,
    stampHtml: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(() => e.sent === !0 ? "sent" : "received"), a = s(
      () => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")
    ), l = s(
      () => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")
    ), r = s(
      () => "q-message-container row items-end no-wrap" + (e.sent === !0 ? " reverse" : "")
    ), o = s(() => e.size !== void 0 ? `col-${e.size}` : ""), i = s(() => ({
      msg: e.textHtml === !0 ? "innerHTML" : "textContent",
      stamp: e.stampHtml === !0 ? "innerHTML" : "textContent",
      name: e.nameHtml === !0 ? "innerHTML" : "textContent",
      label: e.labelHtml === !0 ? "innerHTML" : "textContent"
    }));
    function c(d) {
      return t.stamp !== void 0 ? [d, u("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [
        d,
        u("div", {
          class: "q-message-stamp",
          [i.value.stamp]: e.stamp
        })
      ] : [d];
    }
    function f(d, b) {
      const g = b === !0 ? d.length > 1 ? (v) => v : (v) => u("div", [v]) : (v) => u("div", { [i.value.msg]: v });
      return d.map((v, m) => u("div", {
        key: m,
        class: l.value
      }, [
        u("div", { class: a.value }, c(g(v)))
      ]));
    }
    return () => {
      const d = [];
      t.avatar !== void 0 ? d.push(t.avatar()) : e.avatar !== void 0 && d.push(
        u("img", {
          class: `q-message-avatar q-message-avatar--${n.value}`,
          src: e.avatar,
          "aria-hidden": "true"
        })
      );
      const b = [];
      t.name !== void 0 ? b.push(
        u("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())
      ) : e.name !== void 0 && b.push(
        u("div", {
          class: `q-message-name q-message-name--${n.value}`,
          [i.value.name]: e.name
        })
      ), t.default !== void 0 ? b.push(
        f(
          Qr(t.default()),
          !0
        )
      ) : e.text !== void 0 && b.push(f(e.text)), d.push(
        u("div", { class: o.value }, b)
      );
      const g = [];
      return t.label !== void 0 ? g.push(
        u("div", { class: "q-message-label" }, t.label())
      ) : e.label !== void 0 && g.push(
        u("div", {
          class: "q-message-label",
          [i.value.label]: e.label
        })
      ), g.push(
        u("div", { class: r.value }, d)
      ), u("div", {
        class: `q-message q-message-${n.value}`
      }, g);
    };
  }
});
function Eu(e, t) {
  const n = E(null), a = s(() => e.disable === !0 ? null : u("span", {
    ref: n,
    class: "no-outline",
    tabindex: -1
  }));
  function l(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== !0 && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === !0 && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === !0) && n.value.focus());
  }
  return {
    refocusTargetEl: a,
    refocusTarget: l
  };
}
var Ou = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, Vu = {
  ...Ue,
  ...mn,
  ...Xt,
  modelValue: {
    required: !0,
    default: null
  },
  val: {},
  trueValue: { default: !0 },
  falseValue: { default: !1 },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (e) => e === "tf" || e === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
}, Du = ["update:modelValue"];
function Nu(e, t) {
  const { props: n, slots: a, emit: l, proxy: r } = ve(), { $q: o } = r, i = Ye(n, o), c = E(null), { refocusTargetEl: f, refocusTarget: d } = Eu(n, c), b = gn(n, Ou), g = s(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), v = s(() => {
    const T = cn(n.val);
    return g.value === !0 ? n.modelValue.findIndex((q) => cn(q) === T) : -1;
  }), m = s(() => g.value === !0 ? v.value !== -1 : cn(n.modelValue) === cn(n.trueValue)), S = s(() => g.value === !0 ? v.value === -1 : cn(n.modelValue) === cn(n.falseValue)), p = s(
    () => m.value === !1 && S.value === !1
  ), x = s(() => n.disable === !0 ? -1 : n.tabindex || 0), C = s(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (i.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), y = s(() => {
    const T = m.value === !0 ? "truthy" : S.value === !0 ? "falsy" : "indet", q = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? m.value === !0 : S.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${T}${q}`;
  }), h = s(() => {
    const T = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(T, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": m.value,
      "^checked": m.value === !0 ? "checked" : void 0,
      name: n.name,
      value: g.value === !0 ? n.val : n.trueValue
    }), T;
  }), _ = $n(h), L = s(() => {
    const T = {
      tabindex: x.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": p.value === !0 ? "mixed" : m.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (T["aria-disabled"] = "true"), T;
  });
  function F(T) {
    T !== void 0 && (Ae(T), d(T)), n.disable !== !0 && l("update:modelValue", R(), T);
  }
  function R() {
    if (g.value === !0) {
      if (m.value === !0) {
        const T = n.modelValue.slice();
        return T.splice(v.value, 1), T;
      }
      return n.modelValue.concat([n.val]);
    }
    if (m.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (S.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else
      return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function z(T) {
    (T.keyCode === 13 || T.keyCode === 32) && Ae(T);
  }
  function B(T) {
    (T.keyCode === 13 || T.keyCode === 32) && F(T);
  }
  const P = t(m, p);
  return Object.assign(r, { toggle: F }), () => {
    const T = P();
    n.disable !== !0 && _(
      T,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const q = [
      u("div", {
        class: y.value,
        style: b.value,
        "aria-hidden": "true"
      }, T)
    ];
    f.value !== null && q.push(f.value);
    const w = n.label !== void 0 ? gt(a.default, [n.label]) : xe(a.default);
    return w !== void 0 && q.push(
      u("div", {
        class: `q-${e}__label q-anchor--skip`
      }, w)
    ), u("div", {
      ref: c,
      class: C.value,
      ...L.value,
      onClick: F,
      onKeydown: z,
      onKeyup: B
    }, q);
  };
}
var Td = () => u("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  u("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    u("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    u("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), Ra = te({
  name: "QCheckbox",
  props: Vu,
  emits: Du,
  setup(e) {
    const t = Td();
    function n(a, l) {
      const r = s(
        () => (a.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => r.value !== null ? [
        u("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          u(Xe, {
            class: "q-checkbox__icon",
            name: r.value
          })
        ])
      ] : [t];
    }
    return Nu("checkbox", n);
  }
}), Md = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Iu = te({
  name: "QChip",
  props: {
    ...Ue,
    ...mn,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: !0
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: !0
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Ye(e, a), r = gn(e, Md), o = s(() => e.selected === !0 || e.icon !== void 0), i = s(() => e.selected === !0 ? e.iconSelected || a.iconSet.chip.selected : e.icon), c = s(() => e.iconRemove || a.iconSet.chip.remove), f = s(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), d = s(() => {
      const p = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (p ? ` text-${p} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (f.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (l.value === !0 ? " q-chip--dark q-dark" : "");
    }), b = s(() => {
      const p = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, x = {
        ...p,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || a.lang.label.remove
      };
      return { chip: p, remove: x };
    });
    function g(p) {
      p.keyCode === 13 && v(p);
    }
    function v(p) {
      e.disable || (n("update:selected", !e.selected), n("click", p));
    }
    function m(p) {
      (p.keyCode === void 0 || p.keyCode === 13) && (Ae(p), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function S() {
      const p = [];
      f.value === !0 && p.push(
        u("div", { class: "q-focus-helper" })
      ), o.value === !0 && p.push(
        u(Xe, {
          class: "q-chip__icon q-chip__icon--left",
          name: i.value
        })
      );
      const x = e.label !== void 0 ? [u("div", { class: "ellipsis" }, [e.label])] : void 0;
      return p.push(
        u("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Ir(t.default, x))
      ), e.iconRight && p.push(
        u(Xe, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && p.push(
        u(Xe, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: c.value,
          ...b.value.remove,
          onClick: m,
          onKeyup: m
        })
      ), p;
    }
    return () => {
      if (e.modelValue === !1) return;
      const p = {
        class: d.value,
        style: r.value
      };
      return f.value === !0 && Object.assign(
        p,
        b.value.chip,
        { onClick: v, onKeyup: g }
      ), Wt(
        "div",
        p,
        S(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[El, e.ripple]]
      );
    };
  }
}), uo = {
  ...mn,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  rounded: Boolean,
  // ratio
  thickness: {
    type: Number,
    default: 0.2,
    validator: (e) => e >= 0 && e <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
}, Fr = 50, Hu = 2 * Fr, ju = Hu * Math.PI, $d = Math.round(ju * 1e3) / 1e3, Qu = te({
  name: "QCircularProgress",
  props: {
    ...uo,
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = gn(e), l = s(() => {
      const v = (n.lang.rtl === !0 ? -1 : 1) * e.angle;
      return {
        transform: e.reverse !== (n.lang.rtl === !0) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - v}deg)` : `rotate3d(0, 0, 1, ${v - 90}deg)`
      };
    }), r = s(() => e.instantFeedback !== !0 && e.indeterminate !== !0 ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = s(() => Hu / (1 - e.thickness / 2)), i = s(
      () => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`
    ), c = s(() => at(e.value, e.min, e.max)), f = s(() => e.max - e.min), d = s(() => e.thickness / 2 * o.value), b = s(() => {
      const v = (e.max - c.value) / f.value, m = e.rounded === !0 && c.value < e.max && v < 0.25 ? d.value / 2 * (1 - v / 0.25) : 0;
      return ju * v + m;
    });
    function g({ thickness: v, offset: m, color: S, cls: p, rounded: x }) {
      return u("circle", {
        class: "q-circular-progress__" + p + (S !== void 0 ? ` text-${S}` : ""),
        style: r.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": v,
        "stroke-dasharray": $d,
        "stroke-dashoffset": m,
        "stroke-linecap": x,
        cx: o.value,
        cy: o.value,
        r: Fr
      });
    }
    return () => {
      const v = [];
      e.centerColor !== void 0 && e.centerColor !== "transparent" && v.push(
        u("circle", {
          class: `q-circular-progress__center text-${e.centerColor}`,
          fill: "currentColor",
          r: Fr - d.value / 2,
          cx: o.value,
          cy: o.value
        })
      ), e.trackColor !== void 0 && e.trackColor !== "transparent" && v.push(
        g({
          cls: "track",
          thickness: d.value,
          offset: 0,
          color: e.trackColor
        })
      ), v.push(
        g({
          cls: "circle",
          thickness: d.value,
          offset: b.value,
          color: e.color,
          rounded: e.rounded === !0 ? "round" : void 0
        })
      );
      const m = [
        u("svg", {
          class: "q-circular-progress__svg",
          style: l.value,
          viewBox: i.value,
          "aria-hidden": "true"
        }, v)
      ];
      return e.showValue === !0 && m.push(
        u("div", {
          class: "q-circular-progress__text absolute-full row flex-center content-center",
          style: { fontSize: e.fontSize }
        }, t.default !== void 0 ? t.default() : [u("div", c.value)])
      ), u("div", {
        class: `q-circular-progress q-circular-progress--${e.indeterminate === !0 ? "in" : ""}determinate`,
        style: a.value,
        role: "progressbar",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : c.value
      }, Ir(t.internal, m));
    };
  }
});
function ar(e, t, n) {
  const a = Pt(e);
  let l, r = a.left - t.event.x, o = a.top - t.event.y, i = Math.abs(r), c = Math.abs(o);
  const f = t.direction;
  f.horizontal === !0 && f.vertical !== !0 ? l = r < 0 ? "left" : "right" : f.horizontal !== !0 && f.vertical === !0 ? l = o < 0 ? "up" : "down" : f.up === !0 && o < 0 ? (l = "up", i > c && (f.left === !0 && r < 0 ? l = "left" : f.right === !0 && r > 0 && (l = "right"))) : f.down === !0 && o > 0 ? (l = "down", i > c && (f.left === !0 && r < 0 ? l = "left" : f.right === !0 && r > 0 && (l = "right"))) : f.left === !0 && r < 0 ? (l = "left", i < c && (f.up === !0 && o < 0 ? l = "up" : f.down === !0 && o > 0 && (l = "down"))) : f.right === !0 && r > 0 && (l = "right", i < c && (f.up === !0 && o < 0 ? l = "up" : f.down === !0 && o > 0 && (l = "down")));
  let d = !1;
  if (l === void 0 && n === !1) {
    if (t.event.isFirst === !0 || t.event.lastDir === void 0)
      return {};
    l = t.event.lastDir, d = !0, l === "left" || l === "right" ? (a.left -= r, i = 0, r = 0) : (a.top -= o, c = 0, o = 0);
  }
  return {
    synthetic: d,
    payload: {
      evt: e,
      touch: t.event.mouse !== !0,
      mouse: t.event.mouse === !0,
      position: a,
      direction: l,
      isFirst: t.event.isFirst,
      isFinal: n === !0,
      duration: Date.now() - t.event.time,
      distance: {
        x: i,
        y: c
      },
      offset: {
        x: r,
        y: o
      },
      delta: {
        x: a.left - t.event.lastX,
        y: a.top - t.event.lastY
      }
    }
  };
}
var Bd = 0, Qt = tn(
  {
    name: "touch-pan",
    beforeMount(e, { value: t, modifiers: n }) {
      if (n.mouse !== !0 && De.has.touch !== !0) return;
      function a(r, o) {
        n.mouse === !0 && o === !0 ? Ae(r) : (n.stop === !0 && ft(r), n.prevent === !0 && kt(r));
      }
      const l = {
        uid: "qvtp_" + Bd++,
        handler: t,
        modifiers: n,
        direction: Tl(n),
        noop: _t,
        mouseStart(r) {
          Ml(r, l) && Pl(r) && (mt(l, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"]
          ]), l.start(r, !0));
        },
        touchStart(r) {
          if (Ml(r, l)) {
            const o = r.target;
            mt(l, "temp", [
              [o, "touchmove", "move", "notPassiveCapture"],
              [o, "touchcancel", "end", "passiveCapture"],
              [o, "touchend", "end", "passiveCapture"]
            ]), l.start(r);
          }
        },
        start(r, o) {
          if (De.is.firefox === !0 && da(e, !0), l.lastEvt = r, o === !0 || n.stop === !0) {
            if (l.direction.all !== !0 && (o !== !0 || l.modifiers.mouseAllDir !== !0 && l.modifiers.mousealldir !== !0)) {
              const f = r.type.indexOf("mouse") !== -1 ? new MouseEvent(r.type, r) : new TouchEvent(r.type, r);
              r.defaultPrevented === !0 && kt(f), r.cancelBubble === !0 && ft(f), Object.assign(f, {
                qKeyEvent: r.qKeyEvent,
                qClickOutside: r.qClickOutside,
                qAnchorHandled: r.qAnchorHandled,
                qClonedBy: r.qClonedBy === void 0 ? [l.uid] : r.qClonedBy.concat(l.uid)
              }), l.initialEvent = {
                target: r.target,
                event: f
              };
            }
            ft(r);
          }
          const { left: i, top: c } = Pt(r);
          l.event = {
            x: i,
            y: c,
            time: Date.now(),
            mouse: o === !0,
            detected: !1,
            isFirst: !0,
            isFinal: !1,
            lastX: i,
            lastY: c
          };
        },
        move(r) {
          if (l.event === void 0) return;
          const o = Pt(r), i = o.left - l.event.x, c = o.top - l.event.y;
          if (i === 0 && c === 0) return;
          l.lastEvt = r;
          const f = l.event.mouse === !0, d = () => {
            a(r, f);
            let v;
            n.preserveCursor !== !0 && n.preservecursor !== !0 && (v = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), f === !0 && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Jt(), l.styleCleanup = (m) => {
              if (l.styleCleanup = void 0, v !== void 0 && (document.documentElement.style.cursor = v), document.body.classList.remove("non-selectable"), f === !0) {
                const S = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                m !== void 0 ? setTimeout(() => {
                  S(), m();
                }, 50) : S();
              } else m !== void 0 && m();
            };
          };
          if (l.event.detected === !0) {
            l.event.isFirst !== !0 && a(r, l.event.mouse);
            const { payload: v, synthetic: m } = ar(r, l, !1);
            v !== void 0 && (l.handler(v) === !1 ? l.end(r) : (l.styleCleanup === void 0 && l.event.isFirst === !0 && d(), l.event.lastX = v.position.left, l.event.lastY = v.position.top, l.event.lastDir = m === !0 ? void 0 : v.direction, l.event.isFirst = !1));
            return;
          }
          if (l.direction.all === !0 || f === !0 && (l.modifiers.mouseAllDir === !0 || l.modifiers.mousealldir === !0)) {
            d(), l.event.detected = !0, l.move(r);
            return;
          }
          const b = Math.abs(i), g = Math.abs(c);
          b !== g && (l.direction.horizontal === !0 && b > g || l.direction.vertical === !0 && b < g || l.direction.up === !0 && b < g && c < 0 || l.direction.down === !0 && b < g && c > 0 || l.direction.left === !0 && b > g && i < 0 || l.direction.right === !0 && b > g && i > 0 ? (l.event.detected = !0, l.move(r)) : l.end(r, !0));
        },
        end(r, o) {
          var i;
          if (l.event !== void 0) {
            if (Ft(l, "temp"), De.is.firefox === !0 && da(e, !1), o === !0)
              (i = l.styleCleanup) == null || i.call(l), l.event.detected !== !0 && l.initialEvent !== void 0 && l.initialEvent.target.dispatchEvent(l.initialEvent.event);
            else if (l.event.detected === !0) {
              l.event.isFirst === !0 && l.handler(ar(r === void 0 ? l.lastEvt : r, l).payload);
              const { payload: c } = ar(r === void 0 ? l.lastEvt : r, l, !0), f = () => {
                l.handler(c);
              };
              l.styleCleanup !== void 0 ? l.styleCleanup(f) : f();
            }
            l.event = void 0, l.initialEvent = void 0, l.lastEvt = void 0;
          }
        }
      };
      if (e.__qtouchpan = l, n.mouse === !0) {
        const r = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
        mt(l, "main", [
          [e, "mousedown", "mouseStart", `passive${r}`]
        ]);
      }
      De.has.touch === !0 && mt(l, "main", [
        [e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`],
        [e, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(e, t) {
      const n = e.__qtouchpan;
      n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Tl(t.modifiers));
    },
    beforeUnmount(e) {
      var n;
      const t = e.__qtouchpan;
      t !== void 0 && (t.event !== void 0 && t.end(), Ft(t, "main"), Ft(t, "temp"), De.is.firefox === !0 && da(e, !1), (n = t.styleCleanup) == null || n.call(t), delete e.__qtouchpan);
    }
  }
), Qo = "q-slider__marker-labels", Ld = (e) => ({ value: e }), Fd = ({ marker: e }) => u("div", {
  key: e.value,
  style: e.style,
  class: e.classes
}, e.label), so = [34, 37, 40, 33, 39, 38], Ku = {
  ...Ue,
  ...Xt,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (e) => e >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
}, Uu = ["pan", "update:modelValue", "change"];
function Yu({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: a }) {
  const { props: l, emit: r, slots: o, proxy: { $q: i } } = ve(), c = Ye(l, i), f = $n(a), d = E(!1), b = E(!1), g = E(!1), v = E(!1), m = s(() => l.vertical === !0 ? "--v" : "--h"), S = s(() => "-" + (l.switchLabelSide === !0 ? "switched" : "standard")), p = s(() => l.vertical === !0 ? l.reverse === !0 : l.reverse !== (i.lang.rtl === !0)), x = s(() => isNaN(l.innerMin) === !0 || l.innerMin < l.min ? l.min : l.innerMin), C = s(() => isNaN(l.innerMax) === !0 || l.innerMax > l.max ? l.max : l.innerMax), y = s(() => l.disable !== !0 && l.readonly !== !0 && x.value < C.value), h = s(() => {
    if (l.step === 0)
      return (re) => re;
    const X = (String(l.step).trim().split(".")[1] || "").length;
    return (re) => parseFloat(re.toFixed(X));
  }), _ = s(() => l.step === 0 ? 1 : l.step), L = s(() => y.value === !0 ? l.tabindex || 0 : -1), F = s(() => l.max - l.min), R = s(() => C.value - x.value), z = s(() => he(x.value)), B = s(() => he(C.value)), P = s(() => l.vertical === !0 ? p.value === !0 ? "bottom" : "top" : p.value === !0 ? "right" : "left"), T = s(() => l.vertical === !0 ? "height" : "width"), q = s(() => l.vertical === !0 ? "width" : "height"), w = s(() => l.vertical === !0 ? "vertical" : "horizontal"), A = s(() => {
    const X = {
      role: "slider",
      "aria-valuemin": x.value,
      "aria-valuemax": C.value,
      "aria-orientation": w.value,
      "data-step": l.step
    };
    return l.disable === !0 ? X["aria-disabled"] = "true" : l.readonly === !0 && (X["aria-readonly"] = "true"), X;
  }), N = s(
    () => `q-slider q-slider${m.value} q-slider--${d.value === !0 ? "" : "in"}active inline no-wrap ` + (l.vertical === !0 ? "row" : "column") + (l.disable === !0 ? " disabled" : " q-slider--enabled" + (y.value === !0 ? " q-slider--editable" : "")) + (g.value === "both" ? " q-slider--focus" : "") + (l.label || l.labelAlways === !0 ? " q-slider--label" : "") + (l.labelAlways === !0 ? " q-slider--label-always" : "") + (c.value === !0 ? " q-slider--dark" : "") + (l.dense === !0 ? " q-slider--dense q-slider--dense" + m.value : "")
  );
  function H(X) {
    const re = "q-slider__" + X;
    return `${re} ${re}${m.value} ${re}${m.value}${S.value}`;
  }
  function K(X) {
    const re = "q-slider__" + X;
    return `${re} ${re}${m.value}`;
  }
  const W = s(() => {
    const X = l.selectionColor || l.color;
    return "q-slider__selection absolute" + (X !== void 0 ? ` text-${X}` : "");
  }), ue = s(() => K("markers") + " absolute overflow-hidden"), I = s(() => K("track-container")), k = s(() => H("pin")), U = s(() => H("label")), O = s(() => H("text-container")), ne = s(
    () => H("marker-labels-container") + (l.markerLabelsClass !== void 0 ? ` ${l.markerLabelsClass}` : "")
  ), $ = s(
    () => "q-slider__track relative-position no-outline" + (l.trackColor !== void 0 ? ` bg-${l.trackColor}` : "")
  ), Q = s(() => {
    const X = { [q.value]: l.trackSize };
    return l.trackImg !== void 0 && (X.backgroundImage = `url(${l.trackImg}) !important`), X;
  }), oe = s(
    () => "q-slider__inner absolute" + (l.innerTrackColor !== void 0 ? ` bg-${l.innerTrackColor}` : "")
  ), j = s(() => {
    const X = B.value - z.value, re = {
      [P.value]: `${100 * z.value}%`,
      [T.value]: X === 0 ? "2px" : `${100 * X}%`
    };
    return l.innerTrackImg !== void 0 && (re.backgroundImage = `url(${l.innerTrackImg}) !important`), re;
  });
  function de(X) {
    const { min: re, max: Se, step: Re } = l;
    let qe = re + X * (Se - re);
    if (Re > 0) {
      const Ie = (qe - x.value) % Re;
      qe += (Math.abs(Ie) >= Re / 2 ? (Ie < 0 ? -1 : 1) * Re : 0) - Ie;
    }
    return qe = h.value(qe), at(qe, x.value, C.value);
  }
  function he(X) {
    return F.value === 0 ? 0 : (X - l.min) / F.value;
  }
  function Y(X, re) {
    const Se = Pt(X), Re = l.vertical === !0 ? at((Se.top - re.top) / re.height, 0, 1) : at((Se.left - re.left) / re.width, 0, 1);
    return at(
      p.value === !0 ? 1 - Re : Re,
      z.value,
      B.value
    );
  }
  const fe = s(
    () => Va(l.markers) === !0 ? l.markers : _.value
  ), be = s(() => {
    const X = [], re = fe.value, Se = l.max;
    let Re = l.min;
    do
      X.push(Re), Re += re;
    while (Re < Se);
    return X.push(Se), X;
  }), _e = s(() => {
    const X = ` ${Qo}${m.value}-`;
    return Qo + `${X}${l.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${X}${p.value === !0 ? "rtl" : "ltr"}`;
  }), Be = s(() => l.markerLabels === !1 ? null : Pe(l.markerLabels).map((X, re) => ({
    index: re,
    value: X.value,
    label: X.label || X.value,
    classes: _e.value + (X.classes !== void 0 ? " " + X.classes : ""),
    style: {
      ...Oe(X.value),
      ...X.style || {}
    }
  }))), se = s(() => ({
    markerList: Be.value,
    markerMap: le.value,
    classes: _e.value,
    // TODO ts definition
    getStyle: Oe
  })), Te = s(() => {
    const X = R.value === 0 ? "2px" : 100 * fe.value / R.value;
    return {
      ...j.value,
      backgroundSize: l.vertical === !0 ? `2px ${X}%` : `${X}% 2px`
    };
  });
  function Pe(X) {
    if (X === !1)
      return null;
    if (X === !0)
      return be.value.map(Ld);
    if (typeof X == "function")
      return be.value.map((Se) => {
        const Re = X(Se);
        return Lt(Re) === !0 ? { ...Re, value: Se } : { value: Se, label: Re };
      });
    const re = ({ value: Se }) => Se >= l.min && Se <= l.max;
    return Array.isArray(X) === !0 ? X.map((Se) => Lt(Se) === !0 ? Se : { value: Se }).filter(re) : Object.keys(X).map((Se) => {
      const Re = X[Se], qe = Number(Se);
      return Lt(Re) === !0 ? { ...Re, value: qe } : { value: qe, label: Re };
    }).filter(re);
  }
  function Oe(X) {
    return { [P.value]: `${100 * (X - l.min) / F.value}%` };
  }
  const le = s(() => {
    if (l.markerLabels === !1)
      return null;
    const X = {};
    return Be.value.forEach((re) => {
      X[re.value] = re;
    }), X;
  });
  function G() {
    if (o["marker-label-group"] !== void 0)
      return o["marker-label-group"](se.value);
    const X = o["marker-label"] || Fd;
    return Be.value.map((re) => X({
      marker: re,
      ...se.value
    }));
  }
  const ce = s(() => [[
    Qt,
    we,
    void 0,
    {
      [w.value]: !0,
      prevent: !0,
      stop: !0,
      mouse: !0,
      mouseAllDir: !0
    }
  ]]);
  function we(X) {
    X.isFinal === !0 ? (v.value !== void 0 && (t(X.evt), X.touch === !0 && e(!0), v.value = void 0, r("pan", "end")), d.value = !1, g.value = !1) : X.isFirst === !0 ? (v.value = n(X.evt), t(X.evt), e(), d.value = !0, r("pan", "start")) : (t(X.evt), e());
  }
  function Ve() {
    g.value = !1;
  }
  function Ne(X) {
    t(X, n(X)), e(), b.value = !0, d.value = !0, document.addEventListener("mouseup", Le, !0);
  }
  function Le() {
    b.value = !1, d.value = !1, e(!0), Ve(), document.removeEventListener("mouseup", Le, !0);
  }
  function Fe(X) {
    t(X, n(X)), e(!0);
  }
  function We(X) {
    so.includes(X.keyCode) && e(!0);
  }
  function Ge(X) {
    if (l.vertical === !0)
      return null;
    const re = i.lang.rtl !== l.reverse ? 1 - X : X;
    return {
      transform: `translateX(calc(${2 * re - 1} * ${l.thumbSize} / 2 + ${50 - 100 * re}%))`
    };
  }
  function J(X) {
    const re = s(() => b.value === !1 && (g.value === X.focusValue || g.value === "both") ? " q-slider--focus" : ""), Se = s(
      () => `q-slider__thumb q-slider__thumb${m.value} q-slider__thumb${m.value}-${p.value === !0 ? "rtl" : "ltr"} absolute non-selectable` + re.value + (X.thumbColor.value !== void 0 ? ` text-${X.thumbColor.value}` : "")
    ), Re = s(() => ({
      width: l.thumbSize,
      height: l.thumbSize,
      [P.value]: `${100 * X.ratio.value}%`,
      zIndex: g.value === X.focusValue ? 2 : void 0
    })), qe = s(() => X.labelColor.value !== void 0 ? ` text-${X.labelColor.value}` : ""), Ie = s(() => Ge(X.ratio.value)), nt = s(() => "q-slider__text" + (X.labelTextColor.value !== void 0 ? ` text-${X.labelTextColor.value}` : ""));
    return () => {
      const vt = [
        u("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          u("path", { d: l.thumbPath })
        ]),
        u("div", { class: "q-slider__focus-ring fit" })
      ];
      return (l.label === !0 || l.labelAlways === !0) && (vt.push(
        u("div", {
          class: k.value + " absolute fit no-pointer-events" + qe.value
        }, [
          u("div", {
            class: U.value,
            style: { minWidth: l.thumbSize }
          }, [
            u("div", {
              class: O.value,
              style: Ie.value
            }, [
              u("span", { class: nt.value }, X.label.value)
            ])
          ])
        ])
      ), l.name !== void 0 && l.disable !== !0 && f(vt, "push")), u("div", {
        class: Se.value,
        style: Re.value,
        ...X.getNodeData()
      }, vt);
    };
  }
  function ie(X, re, Se, Re) {
    const qe = [];
    l.innerTrackColor !== "transparent" && qe.push(
      u("div", {
        key: "inner",
        class: oe.value,
        style: j.value
      })
    ), l.selectionColor !== "transparent" && qe.push(
      u("div", {
        key: "selection",
        class: W.value,
        style: X.value
      })
    ), l.markers !== !1 && qe.push(
      u("div", {
        key: "marker",
        class: ue.value,
        style: Te.value
      })
    ), Re(qe);
    const Ie = [
      Wt(
        "div",
        {
          key: "trackC",
          class: I.value,
          tabindex: re.value,
          ...Se.value
        },
        [
          u("div", {
            class: $.value,
            style: Q.value
          }, qe)
        ],
        "slide",
        y.value,
        () => ce.value
      )
    ];
    if (l.markerLabels !== !1) {
      const nt = l.switchMarkerLabelsSide === !0 ? "unshift" : "push";
      Ie[nt](
        u("div", {
          key: "markerL",
          class: ne.value
        }, G())
      );
    }
    return Ie;
  }
  return je(() => {
    document.removeEventListener("mouseup", Le, !0);
  }), {
    state: {
      active: d,
      focus: g,
      preventFocus: b,
      dragging: v,
      editable: y,
      classes: N,
      tabindex: L,
      attributes: A,
      roundValueFn: h,
      keyStep: _,
      trackLen: F,
      innerMin: x,
      innerMinRatio: z,
      innerMax: C,
      innerMaxRatio: B,
      positionProp: P,
      sizeProp: T,
      isReversed: p
    },
    methods: {
      onActivate: Ne,
      onMobileClick: Fe,
      onBlur: Ve,
      onKeyup: We,
      getContent: ie,
      getThumbRenderFn: J,
      convertRatioToModel: de,
      convertModelToRatio: he,
      getDraggingRatio: Y
    }
  };
}
var zd = () => ({}), ta = te({
  name: "QSlider",
  props: {
    ...Ku,
    modelValue: {
      required: !0,
      default: null,
      validator: (e) => typeof e == "number" || e === null
    },
    labelValue: [String, Number]
  },
  emits: Uu,
  setup(e, { emit: t }) {
    const { proxy: { $q: n } } = ve(), { state: a, methods: l } = Yu({
      updateValue: m,
      updatePosition: p,
      getDragging: S,
      formAttrs: Ka(e)
    }), r = E(null), o = E(0), i = E(0);
    function c() {
      i.value = e.modelValue === null ? a.innerMin.value : at(e.modelValue, a.innerMin.value, a.innerMax.value);
    }
    ae(
      () => `${e.modelValue}|${a.innerMin.value}|${a.innerMax.value}`,
      c
    ), c();
    const f = s(() => l.convertModelToRatio(i.value)), d = s(() => a.active.value === !0 ? o.value : f.value), b = s(() => {
      const y = {
        [a.positionProp.value]: `${100 * a.innerMinRatio.value}%`,
        [a.sizeProp.value]: `${100 * (d.value - a.innerMinRatio.value)}%`
      };
      return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
    }), g = l.getThumbRenderFn({
      focusValue: !0,
      getNodeData: zd,
      ratio: d,
      label: s(() => e.labelValue !== void 0 ? e.labelValue : i.value),
      thumbColor: s(() => e.thumbColor || e.color),
      labelColor: s(() => e.labelColor),
      labelTextColor: s(() => e.labelTextColor)
    }), v = s(() => a.editable.value !== !0 ? {} : n.platform.is.mobile === !0 ? { onClick: l.onMobileClick } : {
      onMousedown: l.onActivate,
      onFocus: x,
      onBlur: l.onBlur,
      onKeydown: C,
      onKeyup: l.onKeyup
    });
    function m(y) {
      i.value !== e.modelValue && t("update:modelValue", i.value), y === !0 && t("change", i.value);
    }
    function S() {
      return r.value.getBoundingClientRect();
    }
    function p(y, h = a.dragging.value) {
      const _ = l.getDraggingRatio(y, h);
      i.value = l.convertRatioToModel(_), o.value = e.snap !== !0 || e.step === 0 ? _ : l.convertModelToRatio(i.value);
    }
    function x() {
      a.focus.value = !0;
    }
    function C(y) {
      if (so.includes(y.keyCode) === !1) return;
      Ae(y);
      const h = ([34, 33].includes(y.keyCode) ? 10 : 1) * a.keyStep.value, _ = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (a.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * h;
      i.value = at(
        a.roundValueFn.value(i.value + _),
        a.innerMin.value,
        a.innerMax.value
      ), m();
    }
    return () => {
      const y = l.getContent(
        b,
        a.tabindex,
        v,
        (h) => {
          h.push(g());
        }
      );
      return u("div", {
        ref: r,
        class: a.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""),
        ...a.attributes.value,
        "aria-valuenow": e.modelValue
      }, y);
    };
  }
});
function Wu() {
  const e = E(!Ut.value);
  return e.value === !1 && ut(() => {
    e.value = !0;
  }), { isHydrated: e };
}
var Xu = typeof ResizeObserver < "u", Ko = Xu === !0 ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
}, jn = te({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(e, { emit: t }) {
    let n = null, a, l = { width: -1, height: -1 };
    function r(c) {
      c === !0 || e.debounce === 0 || e.debounce === "0" ? o() : n === null && (n = setTimeout(o, e.debounce));
    }
    function o() {
      if (n !== null && (clearTimeout(n), n = null), a) {
        const { offsetWidth: c, offsetHeight: f } = a;
        (c !== l.width || f !== l.height) && (l = { width: c, height: f }, t("resize", l));
      }
    }
    const { proxy: i } = ve();
    if (i.trigger = r, Xu === !0) {
      let c;
      const f = (d) => {
        a = i.$el.parentNode, a ? (c = new ResizeObserver(r), c.observe(a), o()) : d !== !0 && Ke(() => {
          f(!0);
        });
      };
      return ut(() => {
        f();
      }), je(() => {
        n !== null && clearTimeout(n), c !== void 0 && (c.disconnect !== void 0 ? c.disconnect() : a && c.unobserve(a));
      }), _t;
    } else {
      let c = function() {
        n !== null && (clearTimeout(n), n = null), b !== void 0 && (b.removeEventListener !== void 0 && b.removeEventListener("resize", r, lt.passive), b = void 0);
      }, f = function() {
        c(), a != null && a.contentDocument && (b = a.contentDocument.defaultView, b.addEventListener("resize", r, lt.passive), o());
      };
      const { isHydrated: d } = Wu();
      let b;
      return ut(() => {
        Ke(() => {
          a = i.$el, a && f();
        });
      }), je(c), () => {
        if (d.value === !0)
          return u("object", {
            class: "q--avoid-card-border",
            style: Ko.style,
            tabindex: -1,
            // fix for Firefox
            type: "text/html",
            data: Ko.url,
            "aria-hidden": "true",
            onLoad: f
          });
      };
    }
  }
}), Ia = !1;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const t = document.createElement("div");
  Object.assign(t.style, {
    width: "1000px",
    height: "1px"
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Ia = e.scrollLeft >= 0, e.remove();
}
function Rd(e, t, n) {
  const a = n === !0 ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === !0 ? a[0] : a[1]}${e ? ` text-${e}` : ""}`;
}
var Pd = ["left", "center", "right", "justify"], Uo = te({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (e) => Pd.includes(e)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, { registerTick: r } = ma(), { registerTick: o } = ma(), { registerTick: i } = ma(), { registerTimeout: c, removeTimeout: f } = dn(), { registerTimeout: d, removeTimeout: b } = dn(), g = E(null), v = E(null), m = E(e.modelValue), S = E(!1), p = E(!0), x = E(!1), C = E(!1), y = [], h = E(0), _ = E(!1);
    let L = null, F = null, R;
    const z = s(() => ({
      activeClass: e.activeClass,
      activeColor: e.activeColor,
      activeBgColor: e.activeBgColor,
      indicatorClass: Rd(
        e.indicatorColor,
        e.switchIndicator,
        e.vertical
      ),
      narrowIndicator: e.narrowIndicator,
      inlineLabel: e.inlineLabel,
      noCaps: e.noCaps
    })), B = s(() => {
      const G = h.value, ce = m.value;
      for (let we = 0; we < G; we++)
        if (y[we].name.value === ce)
          return !0;
      return !1;
    }), P = s(() => `q-tabs__content--align-${S.value === !0 ? "left" : C.value === !0 ? "justify" : e.align}`), T = s(
      () => `q-tabs row no-wrap items-center q-tabs--${S.value === !0 ? "" : "not-"}scrollable q-tabs--${e.vertical === !0 ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === !0 ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === !0 ? "" : "out"}-arrows` + (e.dense === !0 ? " q-tabs--dense" : "") + (e.shrink === !0 ? " col-shrink" : "") + (e.stretch === !0 ? " self-stretch" : "")
    ), q = s(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + P.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")
    ), w = s(() => e.vertical === !0 ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), A = s(() => e.vertical !== !0 && l.lang.rtl === !0), N = s(() => Ia === !1 && A.value === !0);
    ae(A, k), ae(() => e.modelValue, (G) => {
      H({ name: G, setCurrent: !0, skipEmit: !0 });
    }), ae(() => e.outsideArrows, K);
    function H({ name: G, setCurrent: ce, skipEmit: we }) {
      m.value !== G && (we !== !0 && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", G), (ce === !0 || e["onUpdate:modelValue"] === void 0) && (ue(m.value, G), m.value = G));
    }
    function K() {
      r(() => {
        g.value && W({
          width: g.value.offsetWidth,
          height: g.value.offsetHeight
        });
      });
    }
    function W(G) {
      if (w.value === void 0 || v.value === null) return;
      const ce = G[w.value.container], we = Math.min(
        v.value[w.value.scroll],
        Array.prototype.reduce.call(
          v.value.children,
          (Ne, Le) => Ne + (Le[w.value.content] || 0),
          0
        )
      ), Ve = ce > 0 && we > ce;
      S.value = Ve, Ve === !0 && o(k), C.value = ce < parseInt(e.breakpoint, 10);
    }
    function ue(G, ce) {
      const we = G != null && G !== "" ? y.find((Ne) => Ne.name.value === G) : null, Ve = ce != null && ce !== "" ? y.find((Ne) => Ne.name.value === ce) : null;
      if (le === !0)
        le = !1;
      else if (we && Ve) {
        const Ne = we.tabIndicatorRef.value, Le = Ve.tabIndicatorRef.value;
        L !== null && (clearTimeout(L), L = null), Ne.style.transition = "none", Ne.style.transform = "none", Le.style.transition = "none", Le.style.transform = "none";
        const Fe = Ne.getBoundingClientRect(), We = Le.getBoundingClientRect();
        Le.style.transform = e.vertical === !0 ? `translate3d(0,${Fe.top - We.top}px,0) scale3d(1,${We.height ? Fe.height / We.height : 1},1)` : `translate3d(${Fe.left - We.left}px,0,0) scale3d(${We.width ? Fe.width / We.width : 1},1,1)`, i(() => {
          L = setTimeout(() => {
            L = null, Le.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Le.style.transform = "none";
          }, 70);
        });
      }
      Ve && S.value === !0 && I(Ve.rootRef.value);
    }
    function I(G) {
      const { left: ce, width: we, top: Ve, height: Ne } = v.value.getBoundingClientRect(), Le = G.getBoundingClientRect();
      let Fe = e.vertical === !0 ? Le.top - Ve : Le.left - ce;
      if (Fe < 0) {
        v.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.floor(Fe), k();
        return;
      }
      Fe += e.vertical === !0 ? Le.height - Ne : Le.width - we, Fe > 0 && (v.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.ceil(Fe), k());
    }
    function k() {
      const G = v.value;
      if (G === null) return;
      const ce = G.getBoundingClientRect(), we = e.vertical === !0 ? G.scrollTop : Math.abs(G.scrollLeft);
      A.value === !0 ? (p.value = Math.ceil(we + ce.width) < G.scrollWidth - 1, x.value = we > 0) : (p.value = we > 0, x.value = e.vertical === !0 ? Math.ceil(we + ce.height) < G.scrollHeight : Math.ceil(we + ce.width) < G.scrollWidth);
    }
    function U(G) {
      F !== null && clearInterval(F), F = setInterval(() => {
        j(G) === !0 && $();
      }, 5);
    }
    function O() {
      U(N.value === !0 ? Number.MAX_SAFE_INTEGER : 0);
    }
    function ne() {
      U(N.value === !0 ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function $() {
      F !== null && (clearInterval(F), F = null);
    }
    function Q(G, ce) {
      const we = Array.prototype.filter.call(
        v.value.children,
        (We) => We === ce || We.matches && We.matches(".q-tab.q-focusable") === !0
      ), Ve = we.length;
      if (Ve === 0) return;
      if (G === 36)
        return I(we[0]), we[0].focus(), !0;
      if (G === 35)
        return I(we[Ve - 1]), we[Ve - 1].focus(), !0;
      const Ne = G === (e.vertical === !0 ? 38 : 37), Le = G === (e.vertical === !0 ? 40 : 39), Fe = Ne === !0 ? -1 : Le === !0 ? 1 : void 0;
      if (Fe !== void 0) {
        const We = A.value === !0 ? -1 : 1, Ge = we.indexOf(ce) + Fe * We;
        return Ge >= 0 && Ge < Ve && (I(we[Ge]), we[Ge].focus({ preventScroll: !0 })), !0;
      }
    }
    const oe = s(() => N.value === !0 ? { get: (G) => Math.abs(G.scrollLeft), set: (G, ce) => {
      G.scrollLeft = -ce;
    } } : e.vertical === !0 ? { get: (G) => G.scrollTop, set: (G, ce) => {
      G.scrollTop = ce;
    } } : { get: (G) => G.scrollLeft, set: (G, ce) => {
      G.scrollLeft = ce;
    } });
    function j(G) {
      const ce = v.value, { get: we, set: Ve } = oe.value;
      let Ne = !1, Le = we(ce);
      const Fe = G < Le ? -1 : 1;
      return Le += Fe * 5, Le < 0 ? (Ne = !0, Le = 0) : (Fe === -1 && Le <= G || Fe === 1 && Le >= G) && (Ne = !0, Le = G), Ve(ce, Le), k(), Ne;
    }
    function de(G, ce) {
      for (const we in G)
        if (G[we] !== ce[we])
          return !1;
      return !0;
    }
    function he() {
      let G = null, ce = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const we = y.filter((Fe) => {
        var We;
        return ((We = Fe.routeData) == null ? void 0 : We.hasRouterLink.value) === !0;
      }), { hash: Ve, query: Ne } = a.$route, Le = Object.keys(Ne).length;
      for (const Fe of we) {
        const We = Fe.routeData.exact.value === !0;
        if (Fe.routeData[We === !0 ? "linkIsExactActive" : "linkIsActive"].value !== !0)
          continue;
        const { hash: Ge, query: J, matched: ie, href: X } = Fe.routeData.resolvedLink.value, re = Object.keys(J).length;
        if (We === !0) {
          if (Ge !== Ve || re !== Le || de(Ne, J) === !1)
            continue;
          G = Fe.name.value;
          break;
        }
        if (Ge !== "" && Ge !== Ve || re !== 0 && de(J, Ne) === !1)
          continue;
        const Se = {
          matchedLen: ie.length,
          queryDiff: Le - re,
          hrefLen: X.length - Ge.length
        };
        if (Se.matchedLen > ce.matchedLen) {
          G = Fe.name.value, ce = Se;
          continue;
        } else if (Se.matchedLen !== ce.matchedLen)
          continue;
        if (Se.queryDiff < ce.queryDiff)
          G = Fe.name.value, ce = Se;
        else if (Se.queryDiff !== ce.queryDiff)
          continue;
        Se.hrefLen > ce.hrefLen && (G = Fe.name.value, ce = Se);
      }
      if (G === null && y.some((Fe) => Fe.routeData === void 0 && Fe.name.value === m.value) === !0) {
        le = !1;
        return;
      }
      H({ name: G, setCurrent: !0 });
    }
    function Y(G) {
      if (f(), _.value !== !0 && g.value !== null && G.target && typeof G.target.closest == "function") {
        const ce = G.target.closest(".q-tab");
        ce && g.value.contains(ce) === !0 && (_.value = !0, S.value === !0 && I(ce));
      }
    }
    function fe() {
      c(() => {
        _.value = !1;
      }, 30);
    }
    function be() {
      Te.avoidRouteWatcher === !1 ? d(he) : b();
    }
    function _e() {
      if (R === void 0) {
        const G = ae(() => a.$route.fullPath, be);
        R = () => {
          G(), R = void 0;
        };
      }
    }
    function Be(G) {
      y.push(G), h.value++, K(), G.routeData === void 0 || a.$route === void 0 ? d(() => {
        if (S.value === !0) {
          const ce = m.value, we = ce != null && ce !== "" ? y.find((Ve) => Ve.name.value === ce) : null;
          we && I(we.rootRef.value);
        }
      }) : (_e(), G.routeData.hasRouterLink.value === !0 && be());
    }
    function se(G) {
      y.splice(y.indexOf(G), 1), h.value--, K(), R !== void 0 && G.routeData !== void 0 && (y.every((ce) => ce.routeData === void 0) === !0 && R(), be());
    }
    const Te = {
      currentModel: m,
      tabProps: z,
      hasFocus: _,
      hasActiveTab: B,
      registerTab: Be,
      unregisterTab: se,
      verifyRouteModel: be,
      updateModel: H,
      onKbdNavigate: Q,
      avoidRouteWatcher: !1
      // false | string (uid)
    };
    fn(iu, Te);
    function Pe() {
      L !== null && clearTimeout(L), $(), R == null || R();
    }
    let Oe, le;
    return je(Pe), vn(() => {
      Oe = R !== void 0, Pe();
    }), Un(() => {
      Oe === !0 && (_e(), le = !0, be()), K();
    }), () => u("div", {
      ref: g,
      class: T.value,
      role: "tablist",
      onFocusin: Y,
      onFocusout: fe
    }, [
      u(jn, { onResize: W }),
      u("div", {
        ref: v,
        class: q.value,
        onScroll: k
      }, xe(t.default)),
      u(Xe, {
        class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (p.value === !0 ? "" : " q-tabs__arrow--faded"),
        name: e.leftIcon || l.iconSet.tabs[e.vertical === !0 ? "up" : "left"],
        onMousedownPassive: O,
        onTouchstartPassive: O,
        onMouseupPassive: $,
        onMouseleavePassive: $,
        onTouchendPassive: $
      }),
      u(Xe, {
        class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (x.value === !0 ? "" : " q-tabs__arrow--faded"),
        name: e.rightIcon || l.iconSet.tabs[e.vertical === !0 ? "down" : "right"],
        onMousedownPassive: ne,
        onTouchstartPassive: ne,
        onMouseupPassive: $,
        onMouseleavePassive: $,
        onTouchendPassive: $
      })
    ]);
  }
}), Ad = 0, Gu = ["click", "keydown"], Zu = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${Ad++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  }
};
function Ju(e, t, n, a) {
  const l = Et(iu, tt);
  if (l === tt)
    return console.error("QTab/QRouteTab component needs to be child of QTabs"), tt;
  const { proxy: r } = ve(), o = E(null), i = E(null), c = E(null), f = s(() => e.disable === !0 || e.ripple === !1 ? !1 : Object.assign(
    { keyCodes: [13, 32], early: !0 },
    e.ripple === !0 ? {} : e.ripple
  )), d = s(() => l.currentModel.value === e.name), b = s(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (d.value === !0 ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && l.tabProps.value.inlineLabel === !1 ? " q-tab--full" : "") + (e.noCaps === !0 || l.tabProps.value.noCaps === !0 ? " q-tab--no-caps" : "") + (e.disable === !0 ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (a !== void 0 ? a.linkClass.value : "")
  ), g = s(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (l.tabProps.value.inlineLabel === !0 ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")
  ), v = s(() => e.disable === !0 || l.hasFocus.value === !0 || d.value === !1 && l.hasActiveTab.value === !0 ? -1 : e.tabindex || 0);
  function m(y, h) {
    var _;
    if (h !== !0 && (y == null ? void 0 : y.qAvoidFocus) !== !0 && ((_ = o.value) == null || _.focus()), e.disable === !0) {
      (a == null ? void 0 : a.hasRouterLink.value) === !0 && Ae(y);
      return;
    }
    if (a === void 0) {
      l.updateModel({ name: e.name }), n("click", y);
      return;
    }
    if (a.hasRouterLink.value === !0) {
      const L = (F = {}) => {
        let R;
        const z = F.to === void 0 || Zt(F.to, e.to) === !0 ? l.avoidRouteWatcher = Na() : null;
        return a.navigateToRouterLink(y, { ...F, returnRouterError: !0 }).catch((B) => {
          R = B;
        }).then((B) => {
          var P;
          if (z === l.avoidRouteWatcher && (l.avoidRouteWatcher = !1, R === void 0 && (B === void 0 || ((P = B.message) == null ? void 0 : P.startsWith("Avoided redundant navigation")) === !0) && l.updateModel({ name: e.name })), F.returnRouterError === !0)
            return R !== void 0 ? Promise.reject(R) : B;
        });
      };
      n("click", y, L), y.defaultPrevented !== !0 && L();
      return;
    }
    n("click", y);
  }
  function S(y) {
    Yt(y, [13, 32]) ? m(y, !0) : Yn(y) !== !0 && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== !0 && y.metaKey !== !0 && l.onKbdNavigate(y.keyCode, r.$el) === !0 && Ae(y), n("keydown", y);
  }
  function p() {
    const y = l.tabProps.value.narrowIndicator, h = [], _ = u("div", {
      ref: c,
      class: [
        "q-tab__indicator",
        l.tabProps.value.indicatorClass
      ]
    });
    e.icon !== void 0 && h.push(
      u(Xe, {
        class: "q-tab__icon",
        name: e.icon
      })
    ), e.label !== void 0 && h.push(
      u("div", { class: "q-tab__label" }, e.label)
    ), e.alert !== !1 && h.push(
      e.alertIcon !== void 0 ? u(Xe, {
        class: "q-tab__alert-icon",
        color: e.alert !== !0 ? e.alert : void 0,
        name: e.alertIcon
      }) : u("div", {
        class: "q-tab__alert" + (e.alert !== !0 ? ` text-${e.alert}` : "")
      })
    ), y === !0 && h.push(_);
    const L = [
      u("div", { class: "q-focus-helper", tabindex: -1, ref: o }),
      u("div", { class: g.value }, gt(t.default, h))
    ];
    return y === !1 && L.push(_), L;
  }
  const x = {
    name: s(() => e.name),
    rootRef: i,
    tabIndicatorRef: c,
    routeData: a
  };
  je(() => {
    l.unregisterTab(x);
  }), ut(() => {
    l.registerTab(x);
  });
  function C(y, h) {
    const _ = {
      ref: i,
      class: b.value,
      tabindex: v.value,
      role: "tab",
      "aria-selected": d.value === !0 ? "true" : "false",
      "aria-disabled": e.disable === !0 ? "true" : void 0,
      onClick: m,
      onKeydown: S,
      ...h
    };
    return Kt(
      u(y, _, p()),
      [[El, f.value]]
    );
  }
  return { renderTab: C, $tabs: l };
}
var qa = te({
  name: "QTab",
  props: Zu,
  emits: Gu,
  setup(e, { slots: t, emit: n }) {
    const { renderTab: a } = Ju(e, t, n);
    return () => a("div");
  }
}), Ed = te({
  name: "QTabPanels",
  props: {
    ...no,
    ...Ue
  },
  emits: ao,
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), { updatePanelsList: l, getPanelContent: r, panelDirectives: o } = lo(), i = s(
      () => "q-tab-panels q-panel-parent" + (a.value === !0 ? " q-tab-panels--dark q-dark" : "")
    );
    return () => (l(t), Wt(
      "div",
      { class: i.value },
      r(),
      "pan",
      e.swipeable,
      () => o.value
    ));
  }
}), lr = te({
  name: "QTabPanel",
  props: to,
  setup(e, { slots: t }) {
    return () => u("div", { class: "q-tab-panel", role: "tabpanel" }, xe(t.default));
  }
}), Yo = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Wo = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Xo = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ga = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Za = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, vl = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => Yo.test(e),
  hexaColor: (e) => Wo.test(e),
  hexOrHexaColor: (e) => Xo.test(e),
  rgbColor: (e) => Ga.test(e),
  rgbaColor: (e) => Za.test(e),
  rgbOrRgbaColor: (e) => Ga.test(e) || Za.test(e),
  hexOrRgbColor: (e) => Yo.test(e) || Ga.test(e),
  hexaOrRgbaColor: (e) => Wo.test(e) || Za.test(e),
  anyColor: (e) => Xo.test(e) || Ga.test(e) || Za.test(e)
}, Od = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function Go({ r: e, g: t, b: n, a }) {
  const l = a !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || l && a > 100)
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return a = l ? (Math.round(255 * a / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + a;
}
function Zo({ r: e, g: t, b: n, a }) {
  return `rgb${a !== void 0 ? "a" : ""}(${e},${t},${n}${a !== void 0 ? "," + a / 100 : ""})`;
}
function es(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function Jo({ h: e, s: t, v: n, a }) {
  let l, r, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), c = e * 6 - i, f = n * (1 - t), d = n * (1 - c * t), b = n * (1 - (1 - c) * t);
  switch (i % 6) {
    case 0:
      l = n, r = b, o = f;
      break;
    case 1:
      l = d, r = n, o = f;
      break;
    case 2:
      l = f, r = n, o = b;
      break;
    case 3:
      l = f, r = d, o = n;
      break;
    case 4:
      l = b, r = f, o = n;
      break;
    case 5:
      l = n, r = f, o = d;
      break;
  }
  return {
    r: Math.round(l * 255),
    g: Math.round(r * 255),
    b: Math.round(o * 255),
    a
  };
}
function rr({ r: e, g: t, b: n, a }) {
  const l = Math.max(e, t, n), r = Math.min(e, t, n), o = l - r, i = l === 0 ? 0 : o / l, c = l / 255;
  let f;
  switch (l) {
    case r:
      f = 0;
      break;
    case e:
      f = t - n + o * (t < n ? 6 : 0), f /= 6 * o;
      break;
    case t:
      f = n - e + o * 2, f /= 6 * o;
      break;
    case n:
      f = e - t + o * 4, f /= 6 * o;
      break;
  }
  return {
    h: Math.round(f * 360),
    s: Math.round(i * 100),
    v: Math.round(c * 100),
    a
  };
}
function ts(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Od.exec(t);
  if (n === null)
    return es(t);
  const a = {
    r: Math.min(255, parseInt(n[2], 10)),
    g: Math.min(255, parseInt(n[3], 10)),
    b: Math.min(255, parseInt(n[4], 10))
  };
  if (n[1]) {
    const l = parseFloat(n[5]);
    a.a = Math.min(1, isNaN(l) === !0 ? 1 : l) * 100;
  }
  return a;
}
function Vd(e) {
  if (typeof e != "string" && (!e || e.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? ts(e) : e, n = t.r / 255, a = t.g / 255, l = t.b / 255, r = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4), i = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4);
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
var Dd = [
  "rgb(255,204,204)",
  "rgb(255,230,204)",
  "rgb(255,255,204)",
  "rgb(204,255,204)",
  "rgb(204,255,230)",
  "rgb(204,255,255)",
  "rgb(204,230,255)",
  "rgb(204,204,255)",
  "rgb(230,204,255)",
  "rgb(255,204,255)",
  "rgb(255,153,153)",
  "rgb(255,204,153)",
  "rgb(255,255,153)",
  "rgb(153,255,153)",
  "rgb(153,255,204)",
  "rgb(153,255,255)",
  "rgb(153,204,255)",
  "rgb(153,153,255)",
  "rgb(204,153,255)",
  "rgb(255,153,255)",
  "rgb(255,102,102)",
  "rgb(255,179,102)",
  "rgb(255,255,102)",
  "rgb(102,255,102)",
  "rgb(102,255,179)",
  "rgb(102,255,255)",
  "rgb(102,179,255)",
  "rgb(102,102,255)",
  "rgb(179,102,255)",
  "rgb(255,102,255)",
  "rgb(255,51,51)",
  "rgb(255,153,51)",
  "rgb(255,255,51)",
  "rgb(51,255,51)",
  "rgb(51,255,153)",
  "rgb(51,255,255)",
  "rgb(51,153,255)",
  "rgb(51,51,255)",
  "rgb(153,51,255)",
  "rgb(255,51,255)",
  "rgb(255,0,0)",
  "rgb(255,128,0)",
  "rgb(255,255,0)",
  "rgb(0,255,0)",
  "rgb(0,255,128)",
  "rgb(0,255,255)",
  "rgb(0,128,255)",
  "rgb(0,0,255)",
  "rgb(128,0,255)",
  "rgb(255,0,255)",
  "rgb(245,0,0)",
  "rgb(245,123,0)",
  "rgb(245,245,0)",
  "rgb(0,245,0)",
  "rgb(0,245,123)",
  "rgb(0,245,245)",
  "rgb(0,123,245)",
  "rgb(0,0,245)",
  "rgb(123,0,245)",
  "rgb(245,0,245)",
  "rgb(214,0,0)",
  "rgb(214,108,0)",
  "rgb(214,214,0)",
  "rgb(0,214,0)",
  "rgb(0,214,108)",
  "rgb(0,214,214)",
  "rgb(0,108,214)",
  "rgb(0,0,214)",
  "rgb(108,0,214)",
  "rgb(214,0,214)",
  "rgb(163,0,0)",
  "rgb(163,82,0)",
  "rgb(163,163,0)",
  "rgb(0,163,0)",
  "rgb(0,163,82)",
  "rgb(0,163,163)",
  "rgb(0,82,163)",
  "rgb(0,0,163)",
  "rgb(82,0,163)",
  "rgb(163,0,163)",
  "rgb(92,0,0)",
  "rgb(92,46,0)",
  "rgb(92,92,0)",
  "rgb(0,92,0)",
  "rgb(0,92,46)",
  "rgb(0,92,92)",
  "rgb(0,46,92)",
  "rgb(0,0,92)",
  "rgb(46,0,92)",
  "rgb(92,0,92)",
  "rgb(255,255,255)",
  "rgb(205,205,205)",
  "rgb(178,178,178)",
  "rgb(153,153,153)",
  "rgb(127,127,127)",
  "rgb(102,102,102)",
  "rgb(76,76,76)",
  "rgb(51,51,51)",
  "rgb(25,25,25)",
  "rgb(0,0,0)"
], ei = "M5 5 h10 v10 h-10 v-10 z", Nd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
te({
  name: "QColor",
  props: {
    ...Ue,
    ...Xt,
    modelValue: String,
    defaultValue: String,
    defaultView: {
      type: String,
      default: "spectrum",
      validator: (e) => ["spectrum", "tune", "palette"].includes(e)
    },
    formatModel: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e)
    },
    palette: Array,
    noHeader: Boolean,
    noHeaderTabs: Boolean,
    noFooter: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const { proxy: n } = ve(), { $q: a } = n, l = Ye(e, a), { getCache: r } = Ua(), o = E(null), i = E(null), c = s(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), f = s(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), d = E(
      e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"
    ), b = E(e.defaultView), g = E(T(e.modelValue || e.defaultValue)), v = s(() => e.disable !== !0 && e.readonly !== !0), m = s(
      () => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")
    ), S = s(() => c.value !== null ? c.value : m.value), p = s(() => ({
      type: "hidden",
      name: e.name,
      value: g.value[S.value === !0 ? "hex" : "rgb"]
    })), x = $n(p), C = s(() => f.value !== null ? f.value : g.value.a !== void 0), y = s(() => ({
      backgroundColor: g.value.rgb || "#000"
    })), h = s(() => `q-color-picker__header-content q-color-picker__header-content--${(g.value.a !== void 0 && g.value.a < 65 ? !0 : Vd(g.value) > 0.4) ? "light" : "dark"}`), _ = s(() => ({
      background: `hsl(${g.value.h},100%,50%)`
    })), L = s(() => ({
      top: `${100 - g.value.v}%`,
      [a.lang.rtl === !0 ? "right" : "left"]: `${g.value.s}%`
    })), F = s(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Dd), R = s(
      () => "q-color-picker" + (e.bordered === !0 ? " q-color-picker--bordered" : "") + (e.square === !0 ? " q-color-picker--square no-border-radius" : "") + (e.flat === !0 ? " q-color-picker--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : "") + (l.value === !0 ? " q-color-picker--dark q-dark" : "")
    ), z = s(() => e.disable === !0 ? { "aria-disabled": "true" } : {}), B = s(() => [[
      Qt,
      W,
      void 0,
      { prevent: !0, stop: !0, mouse: !0 }
    ]]);
    ae(() => e.modelValue, (Y) => {
      const fe = T(Y || e.defaultValue);
      fe.hex !== g.value.hex && (g.value = fe);
    }), ae(() => e.defaultValue, (Y) => {
      if (!e.modelValue && Y) {
        const fe = T(Y);
        fe.hex !== g.value.hex && (g.value = fe);
      }
    });
    function P(Y, fe) {
      g.value.hex = Go(Y), g.value.rgb = Zo(Y), g.value.r = Y.r, g.value.g = Y.g, g.value.b = Y.b, g.value.a = Y.a;
      const be = g.value[S.value === !0 ? "hex" : "rgb"];
      t("update:modelValue", be), fe === !0 && t("change", be);
    }
    function T(Y) {
      const fe = f.value !== void 0 ? f.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
      if (typeof Y != "string" || Y.length === 0 || vl.anyColor(Y.replace(/ /g, "")) !== !0)
        return {
          h: 0,
          s: 0,
          v: 0,
          r: 0,
          g: 0,
          b: 0,
          a: fe === !0 ? 100 : void 0,
          hex: void 0,
          rgb: void 0
        };
      const be = ts(Y);
      return fe === !0 && be.a === void 0 && (be.a = 100), be.hex = Go(be), be.rgb = Zo(be), Object.assign(be, rr(be));
    }
    function q(Y, fe, be) {
      const _e = o.value;
      if (_e === null) return;
      const Be = _e.clientWidth, se = _e.clientHeight, Te = _e.getBoundingClientRect();
      let Pe = Math.min(Be, Math.max(0, Y - Te.left));
      a.lang.rtl === !0 && (Pe = Be - Pe);
      const Oe = Math.min(se, Math.max(0, fe - Te.top)), le = Math.round(100 * Pe / Be), G = Math.round(100 * Math.max(0, Math.min(1, -(Oe / se) + 1))), ce = Jo({
        h: g.value.h,
        s: le,
        v: G,
        a: C.value === !0 ? g.value.a : void 0
      });
      g.value.s = le, g.value.v = G, P(ce, be);
    }
    function w(Y, fe) {
      const be = Math.round(Y), _e = Jo({
        h: be,
        s: g.value.s,
        v: g.value.v,
        a: C.value === !0 ? g.value.a : void 0
      });
      g.value.h = be, P(_e, fe);
    }
    function A(Y) {
      w(Y, !0);
    }
    function N(Y, fe, be, _e, Be) {
      if (_e !== void 0 && ft(_e), !/^[0-9]+$/.test(Y)) {
        Be === !0 && n.$forceUpdate();
        return;
      }
      const se = Math.floor(Number(Y));
      if (se < 0 || se > be) {
        Be === !0 && n.$forceUpdate();
        return;
      }
      const Te = {
        r: fe === "r" ? se : g.value.r,
        g: fe === "g" ? se : g.value.g,
        b: fe === "b" ? se : g.value.b,
        a: C.value === !0 ? fe === "a" ? se : g.value.a : void 0
      };
      if (fe !== "a") {
        const Pe = rr(Te);
        g.value.h = Pe.h, g.value.s = Pe.s, g.value.v = Pe.v;
      }
      if (P(Te, Be), Be !== !0 && (_e == null ? void 0 : _e.target.selectionEnd) !== void 0) {
        const Pe = _e.target.selectionEnd;
        Ke(() => {
          _e.target.setSelectionRange(Pe, Pe);
        });
      }
    }
    function H(Y, fe) {
      let be;
      const _e = Y.target.value;
      if (ft(Y), d.value === "hex") {
        if (_e.length !== (C.value === !0 ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(_e))
          return !0;
        be = es(_e);
      } else {
        let se;
        if (_e.endsWith(")"))
          if (C.value !== !0 && _e.startsWith("rgb(")) {
            if (se = _e.substring(4, _e.length - 1).split(",").map((Te) => parseInt(Te, 10)), se.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(_e))
              return !0;
          } else if (C.value === !0 && _e.startsWith("rgba(")) {
            if (se = _e.substring(5, _e.length - 1).split(","), se.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(_e))
              return !0;
            for (let Pe = 0; Pe < 3; Pe++) {
              const Oe = parseInt(se[Pe], 10);
              if (Oe < 0 || Oe > 255)
                return !0;
              se[Pe] = Oe;
            }
            const Te = parseFloat(se[3]);
            if (Te < 0 || Te > 1)
              return !0;
            se[3] = Te;
          } else
            return !0;
        else return !0;
        if (se[0] < 0 || se[0] > 255 || se[1] < 0 || se[1] > 255 || se[2] < 0 || se[2] > 255 || C.value === !0 && (se[3] < 0 || se[3] > 1))
          return !0;
        be = {
          r: se[0],
          g: se[1],
          b: se[2],
          a: C.value === !0 ? se[3] * 100 : void 0
        };
      }
      const Be = rr(be);
      if (g.value.h = Be.h, g.value.s = Be.s, g.value.v = Be.v, P(be, fe), fe !== !0) {
        const se = Y.target.selectionEnd;
        Ke(() => {
          Y.target.setSelectionRange(se, se);
        });
      }
    }
    function K(Y) {
      const fe = T(Y), be = { r: fe.r, g: fe.g, b: fe.b, a: fe.a };
      be.a === void 0 && (be.a = g.value.a), g.value.h = fe.h, g.value.s = fe.s, g.value.v = fe.v, P(be, !0);
    }
    function W(Y) {
      Y.isFinal ? q(
        Y.position.left,
        Y.position.top,
        !0
      ) : ue(Y);
    }
    const ue = yu(
      (Y) => {
        q(Y.position.left, Y.position.top);
      },
      20
    );
    function I(Y) {
      q(
        Y.pageX - window.pageXOffset,
        Y.pageY - window.pageYOffset,
        !0
      );
    }
    function k(Y) {
      q(
        Y.pageX - window.pageXOffset,
        Y.pageY - window.pageYOffset
      );
    }
    function U(Y) {
      i.value !== null && (i.value.$el.style.opacity = Y ? 1 : 0);
    }
    function O(Y) {
      d.value = Y;
    }
    function ne() {
      const Y = [];
      return e.noHeaderTabs !== !0 && Y.push(
        u(Uo, {
          class: "q-color-picker__header-tabs",
          modelValue: d.value,
          dense: !0,
          align: "justify",
          "onUpdate:modelValue": O
        }, () => [
          u(qa, {
            label: "HEX" + (C.value === !0 ? "A" : ""),
            name: "hex",
            ripple: !1
          }),
          u(qa, {
            label: "RGB" + (C.value === !0 ? "A" : ""),
            name: "rgb",
            ripple: !1
          })
        ])
      ), Y.push(
        u("div", {
          class: "q-color-picker__header-banner row flex-center no-wrap"
        }, [
          u("input", {
            class: "fit",
            value: g.value[d.value],
            ...v.value !== !0 ? { readonly: !0 } : {},
            ...r("topIn", {
              onInput: (fe) => {
                U(H(fe) === !0);
              },
              onChange: ft,
              onBlur: (fe) => {
                H(fe, !0) === !0 && n.$forceUpdate(), U(!1);
              }
            })
          }),
          u(Xe, {
            ref: i,
            class: "q-color-picker__error-icon absolute no-pointer-events",
            name: a.iconSet.type.negative
          })
        ])
      ), u("div", {
        class: "q-color-picker__header relative-position overflow-hidden"
      }, [
        u("div", { class: "q-color-picker__header-bg absolute-full" }),
        u("div", {
          class: h.value,
          style: y.value
        }, Y)
      ]);
    }
    function $() {
      return u(Ed, {
        modelValue: b.value,
        animated: !0
      }, () => [
        u(lr, {
          class: "q-color-picker__spectrum-tab overflow-hidden",
          name: "spectrum"
        }, j),
        u(lr, {
          class: "q-pa-md q-color-picker__tune-tab",
          name: "tune"
        }, de),
        u(lr, {
          class: "q-color-picker__palette-tab",
          name: "palette"
        }, he)
      ]);
    }
    function Q(Y) {
      b.value = Y;
    }
    function oe() {
      return u("div", {
        class: "q-color-picker__footer relative-position overflow-hidden"
      }, [
        u(Uo, {
          class: "absolute-full",
          modelValue: b.value,
          dense: !0,
          align: "justify",
          "onUpdate:modelValue": Q
        }, () => [
          u(qa, {
            icon: a.iconSet.colorPicker.spectrum,
            name: "spectrum",
            ripple: !1
          }),
          u(qa, {
            icon: a.iconSet.colorPicker.tune,
            name: "tune",
            ripple: !1
          }),
          u(qa, {
            icon: a.iconSet.colorPicker.palette,
            name: "palette",
            ripple: !1
          })
        ])
      ]);
    }
    function j() {
      const Y = {
        ref: o,
        class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (v.value !== !0 ? " readonly" : ""),
        style: _.value,
        ...v.value === !0 ? {
          onClick: I,
          onMousedown: k
        } : {}
      }, fe = [
        u("div", { style: { paddingBottom: "100%" } }),
        u("div", { class: "q-color-picker__spectrum-white absolute-full" }),
        u("div", { class: "q-color-picker__spectrum-black absolute-full" }),
        u("div", {
          class: "absolute",
          style: L.value
        }, [
          g.value.hex !== void 0 ? u("div", { class: "q-color-picker__spectrum-circle" }) : null
        ])
      ], be = [
        u(ta, {
          class: "q-color-picker__hue non-selectable",
          modelValue: g.value.h,
          min: 0,
          max: 360,
          trackSize: "8px",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          readonly: v.value !== !0,
          thumbPath: ei,
          "onUpdate:modelValue": w,
          onChange: A
        })
      ];
      return C.value === !0 && be.push(
        u(ta, {
          class: "q-color-picker__alpha non-selectable",
          modelValue: g.value.a,
          min: 0,
          max: 100,
          trackSize: "8px",
          trackColor: "white",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          trackImg: Nd,
          readonly: v.value !== !0,
          hideSelection: !0,
          thumbPath: ei,
          ...r("alphaSlide", {
            "onUpdate:modelValue": (_e) => N(_e, "a", 100),
            onChange: (_e) => N(_e, "a", 100, void 0, !0)
          })
        })
      ), [
        Wt("div", Y, fe, "spec", v.value, () => B.value),
        u("div", { class: "q-color-picker__sliders" }, be)
      ];
    }
    function de() {
      return [
        u("div", { class: "row items-center no-wrap" }, [
          u("div", "R"),
          u(ta, {
            modelValue: g.value.r,
            min: 0,
            max: 255,
            color: "red",
            dark: l.value,
            readonly: v.value !== !0,
            ...r("rSlide", {
              "onUpdate:modelValue": (Y) => N(Y, "r", 255),
              onChange: (Y) => N(Y, "r", 255, void 0, !0)
            })
          }),
          u("input", {
            value: g.value.r,
            maxlength: 3,
            readonly: v.value !== !0,
            onChange: ft,
            ...r("rIn", {
              onInput: (Y) => N(Y.target.value, "r", 255, Y),
              onBlur: (Y) => N(Y.target.value, "r", 255, Y, !0)
            })
          })
        ]),
        u("div", { class: "row items-center no-wrap" }, [
          u("div", "G"),
          u(ta, {
            modelValue: g.value.g,
            min: 0,
            max: 255,
            color: "green",
            dark: l.value,
            readonly: v.value !== !0,
            ...r("gSlide", {
              "onUpdate:modelValue": (Y) => N(Y, "g", 255),
              onChange: (Y) => N(Y, "g", 255, void 0, !0)
            })
          }),
          u("input", {
            value: g.value.g,
            maxlength: 3,
            readonly: v.value !== !0,
            onChange: ft,
            ...r("gIn", {
              onInput: (Y) => N(Y.target.value, "g", 255, Y),
              onBlur: (Y) => N(Y.target.value, "g", 255, Y, !0)
            })
          })
        ]),
        u("div", { class: "row items-center no-wrap" }, [
          u("div", "B"),
          u(ta, {
            modelValue: g.value.b,
            min: 0,
            max: 255,
            color: "blue",
            readonly: v.value !== !0,
            dark: l.value,
            ...r("bSlide", {
              "onUpdate:modelValue": (Y) => N(Y, "b", 255),
              onChange: (Y) => N(Y, "b", 255, void 0, !0)
            })
          }),
          u("input", {
            value: g.value.b,
            maxlength: 3,
            readonly: v.value !== !0,
            onChange: ft,
            ...r("bIn", {
              onInput: (Y) => N(Y.target.value, "b", 255, Y),
              onBlur: (Y) => N(Y.target.value, "b", 255, Y, !0)
            })
          })
        ]),
        C.value === !0 ? u("div", { class: "row items-center no-wrap" }, [
          u("div", "A"),
          u(ta, {
            modelValue: g.value.a,
            color: "grey",
            readonly: v.value !== !0,
            dark: l.value,
            ...r("aSlide", {
              "onUpdate:modelValue": (Y) => N(Y, "a", 100),
              onChange: (Y) => N(Y, "a", 100, void 0, !0)
            })
          }),
          u("input", {
            value: g.value.a,
            maxlength: 3,
            readonly: v.value !== !0,
            onChange: ft,
            ...r("aIn", {
              onInput: (Y) => N(Y.target.value, "a", 100, Y),
              onBlur: (Y) => N(Y.target.value, "a", 100, Y, !0)
            })
          })
        ]) : null
      ];
    }
    function he() {
      const Y = (fe) => u("div", {
        class: "q-color-picker__cube col-auto",
        style: { backgroundColor: fe },
        ...v.value === !0 ? r("palette#" + fe, {
          onClick: () => {
            K(fe);
          }
        }) : {}
      });
      return [
        u("div", {
          class: "row items-center q-color-picker__palette-rows" + (v.value === !0 ? " q-color-picker__palette-rows--editable" : "")
        }, F.value.map(Y))
      ];
    }
    return () => {
      const Y = [$()];
      return e.name !== void 0 && e.disable !== !0 && x(Y, "push"), e.noHeader !== !0 && Y.unshift(
        ne()
      ), e.noFooter !== !0 && Y.push(
        oe()
      ), u("div", {
        class: R.value,
        ...z.value
      }, Y);
    };
  }
});
var wn = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function Id(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Kd(co(e, t, n));
}
function ti(e, t, n) {
  return as(Qd(e, t, n));
}
function Hd(e) {
  return jd(e) === 0;
}
function ml(e, t) {
  return t <= 6 ? 31 : t <= 11 || Hd(e) ? 30 : 29;
}
function jd(e) {
  const t = wn.length;
  let n = wn[0], a, l, r, o, i;
  if (e < n || e >= wn[t - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (a = wn[i], l = a - n, !(e < a)); i += 1)
    n = a;
  return o = e - n, l - o < 6 && (o = o - l + ct(l + 4, 33) * 33), r = It(It(o + 1, 33) - 1, 4), r === -1 && (r = 4), r;
}
function ns(e, t) {
  const n = wn.length, a = e + 621;
  let l = -14, r = wn[0], o, i, c, f, d;
  if (e < r || e >= wn[n - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (d = 1; d < n && (o = wn[d], i = o - r, !(e < o)); d += 1)
    l = l + ct(i, 33) * 8 + ct(It(i, 33), 4), r = o;
  f = e - r, l = l + ct(f, 33) * 8 + ct(It(f, 33) + 3, 4), It(i, 33) === 4 && i - f === 4 && (l += 1);
  const b = ct(a, 4) - ct((ct(a, 100) + 1) * 3, 4) - 150, g = 20 + l - b;
  return t || (i - f < 6 && (f = f - i + ct(i + 4, 33) * 33), c = It(It(f + 1, 33) - 1, 4), c === -1 && (c = 4)), {
    leap: c,
    gy: a,
    march: g
  };
}
function Qd(e, t, n) {
  const a = ns(e, !0);
  return co(a.gy, 3, a.march) + (t - 1) * 31 - ct(t, 7) * (t - 7) + n - 1;
}
function Kd(e) {
  const t = as(e).gy;
  let n = t - 621, a, l, r;
  const o = ns(n, !1), i = co(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185)
      return l = 1 + ct(r, 31), a = It(r, 31) + 1, {
        jy: n,
        jm: l,
        jd: a
      };
    r -= 186;
  } else
    n -= 1, r += 179, o.leap === 1 && (r += 1);
  return l = 7 + ct(r, 30), a = It(r, 30) + 1, {
    jy: n,
    jm: l,
    jd: a
  };
}
function co(e, t, n) {
  let a = ct((e + ct(t - 8, 6) + 100100) * 1461, 4) + ct(153 * It(t + 9, 12) + 2, 5) + n - 34840408;
  return a = a - ct(ct(e + 100100 + ct(t - 8, 6), 100) * 3, 4) + 752, a;
}
function as(e) {
  let t = 4 * e + 139361631;
  t = t + ct(ct(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = ct(It(t, 1461), 4) * 5 + 308, a = ct(It(n, 153), 5) + 1, l = It(ct(n, 153), 12) + 1;
  return {
    gy: ct(t, 1461) - 100100 + ct(8 - l, 6),
    gm: l,
    gd: a
  };
}
function ct(e, t) {
  return ~~(e / t);
}
function It(e, t) {
  return e - ~~(e / t) * t;
}
var Ud = ["gregorian", "persian"], $l = {
  // should define modelValue in the target component
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (e) => Ud.includes(e),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
}, ls = ["update:modelValue"];
function sn(e) {
  return e.year + "/" + Je(e.month) + "/" + Je(e.day);
}
function rs(e, t) {
  const n = s(() => e.disable !== !0 && e.readonly !== !0), a = s(() => n.value === !0 ? 0 : -1), l = s(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function r() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const c = /* @__PURE__ */ new Date(), f = i === !0 ? null : 0;
    if (e.calendar === "persian") {
      const d = Id(c);
      return {
        year: d.jy,
        month: d.jm,
        day: d.jd
      };
    }
    return {
      year: c.getFullYear(),
      month: c.getMonth() + 1,
      day: c.getDate(),
      hour: f,
      minute: f,
      second: f,
      millisecond: f
    };
  }
  return {
    editable: n,
    tabindex: a,
    headerClass: l,
    getLocale: r,
    getCurrentDate: o
  };
}
var os = 864e5, Yd = 36e5, zr = 6e4, is = "YYYY-MM-DDTHH:mm:ss.SSSZ", Wd = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Xd = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, or = {};
function Gd(e, t) {
  const n = "(" + t.days.join("|") + ")", a = e + n;
  if (or[a] !== void 0)
    return or[a];
  const l = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let c = 0;
  const f = e.replace(Xd, (b) => {
    switch (c++, b) {
      case "YY":
        return i.YY = c, "(-?\\d{1,2})";
      case "YYYY":
        return i.YYYY = c, "(-?\\d{1,4})";
      case "M":
        return i.M = c, "(\\d{1,2})";
      case "Mo":
        return i.M = c++, "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        return i.M = c, "(\\d{2})";
      case "MMM":
        return i.MMM = c, o;
      case "MMMM":
        return i.MMMM = c, r;
      case "D":
        return i.D = c, "(\\d{1,2})";
      case "Do":
        return i.D = c++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return i.D = c, "(\\d{2})";
      case "H":
        return i.H = c, "(\\d{1,2})";
      case "HH":
        return i.H = c, "(\\d{2})";
      case "h":
        return i.h = c, "(\\d{1,2})";
      case "hh":
        return i.h = c, "(\\d{2})";
      case "m":
        return i.m = c, "(\\d{1,2})";
      case "mm":
        return i.m = c, "(\\d{2})";
      case "s":
        return i.s = c, "(\\d{1,2})";
      case "ss":
        return i.s = c, "(\\d{2})";
      case "S":
        return i.S = c, "(\\d{1})";
      case "SS":
        return i.S = c, "(\\d{2})";
      case "SSS":
        return i.S = c, "(\\d{3})";
      case "A":
        return i.A = c, "(AM|PM)";
      case "a":
        return i.a = c, "(am|pm)";
      case "aa":
        return i.aa = c, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return l;
      case "dddd":
        return n;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        return c++, "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        return c++, "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        return c++, "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return i.Z = c, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return i.ZZ = c, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return i.X = c, "(-?\\d+)";
      case "x":
        return i.x = c, "(-?\\d{4,})";
      default:
        return c--, b[0] === "[" && (b = b.substring(1, b.length - 1)), b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), d = { map: i, regex: new RegExp("^" + f) };
  return or[a] = d, d;
}
function us(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : xr.date;
}
function ni(e, t = "") {
  const n = e > 0 ? "-" : "+", a = Math.abs(e), l = Math.floor(a / 60), r = a % 60;
  return n + Je(l) + t + Je(r);
}
function Zd(e, t, n) {
  let a = e.getFullYear(), l = e.getMonth();
  const r = e.getDate();
  return t.year !== void 0 && (a += n * t.year, delete t.year), t.month !== void 0 && (l += n * t.month, delete t.month), e.setDate(1), e.setMonth(2), e.setFullYear(a), e.setMonth(l), e.setDate(Math.min(r, mo(e))), t.date !== void 0 && (e.setDate(e.getDate() + n * t.date), delete t.date), e;
}
function Jd(e, t, n) {
  const a = t.year !== void 0 ? t.year : e[`get${n}FullYear`](), l = t.month !== void 0 ? t.month - 1 : e[`get${n}Month`](), r = new Date(a, l + 1, 0).getDate(), o = Math.min(r, t.date !== void 0 ? t.date : e[`get${n}Date`]());
  return e[`set${n}Date`](1), e[`set${n}Month`](2), e[`set${n}FullYear`](a), e[`set${n}Month`](l), e[`set${n}Date`](o), delete t.year, delete t.month, delete t.date, e;
}
function fo(e, t, n) {
  const a = ss(t), l = new Date(e), r = a.year !== void 0 || a.month !== void 0 || a.date !== void 0 ? Zd(l, a, n) : l;
  for (const o in a) {
    const i = Tc(o);
    r[`set${i}`](r[`get${i}`]() + n * a[o]);
  }
  return r;
}
function ss(e) {
  const t = { ...e };
  return e.years !== void 0 && (t.year = e.years, delete t.years), e.months !== void 0 && (t.month = e.months, delete t.months), e.days !== void 0 && (t.date = e.days, delete t.days), e.day !== void 0 && (t.date = e.day, delete t.day), e.hour !== void 0 && (t.hours = e.hour, delete t.hour), e.minute !== void 0 && (t.minutes = e.minute, delete t.minute), e.second !== void 0 && (t.seconds = e.second, delete t.second), e.millisecond !== void 0 && (t.milliseconds = e.millisecond, delete t.millisecond), t;
}
function cs(e, t, n) {
  const a = ss(t), l = n === !0 ? "UTC" : "", r = new Date(e), o = a.year !== void 0 || a.month !== void 0 || a.date !== void 0 ? Jd(r, a, l) : r;
  for (const i in a) {
    const c = i.charAt(0).toUpperCase() + i.slice(1);
    o[`set${l}${c}`](a[i]);
  }
  return o;
}
function ef(e, t, n) {
  const a = sa(e, t, n), l = new Date(
    a.year,
    a.month === null ? null : a.month - 1,
    a.day === null ? 1 : a.day,
    a.hour,
    a.minute,
    a.second,
    a.millisecond
  ), r = l.getTimezoneOffset();
  return a.timezoneOffset === null || a.timezoneOffset === r ? l : fo(l, { minutes: a.timezoneOffset - r }, 1);
}
function sa(e, t, n, a, l) {
  const r = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  if (l !== void 0 && Object.assign(r, l), e == null || e === "" || typeof e != "string")
    return r;
  t === void 0 && (t = is);
  const o = us(n, tu.props), i = o.months, c = o.monthsShort, { regex: f, map: d } = Gd(t, o), b = e.match(f);
  if (b === null)
    return r;
  let g = "";
  if (d.X !== void 0 || d.x !== void 0) {
    const v = parseInt(b[d.X !== void 0 ? d.X : d.x], 10);
    if (isNaN(v) === !0 || v < 0)
      return r;
    const m = new Date(v * (d.X !== void 0 ? 1e3 : 1));
    r.year = m.getFullYear(), r.month = m.getMonth() + 1, r.day = m.getDate(), r.hour = m.getHours(), r.minute = m.getMinutes(), r.second = m.getSeconds(), r.millisecond = m.getMilliseconds();
  } else {
    if (d.YYYY !== void 0)
      r.year = parseInt(b[d.YYYY], 10);
    else if (d.YY !== void 0) {
      const v = parseInt(b[d.YY], 10);
      r.year = v < 0 ? v : 2e3 + v;
    }
    if (d.M !== void 0) {
      if (r.month = parseInt(b[d.M], 10), r.month < 1 || r.month > 12)
        return r;
    } else d.MMM !== void 0 ? r.month = c.indexOf(b[d.MMM]) + 1 : d.MMMM !== void 0 && (r.month = i.indexOf(b[d.MMMM]) + 1);
    if (d.D !== void 0) {
      if (r.day = parseInt(b[d.D], 10), r.year === null || r.month === null || r.day < 1)
        return r;
      const v = a !== "persian" ? new Date(r.year, r.month, 0).getDate() : ml(r.year, r.month);
      if (r.day > v)
        return r;
    }
    d.H !== void 0 ? r.hour = parseInt(b[d.H], 10) % 24 : d.h !== void 0 && (r.hour = parseInt(b[d.h], 10) % 12, (d.A && b[d.A] === "PM" || d.a && b[d.a] === "pm" || d.aa && b[d.aa] === "p.m.") && (r.hour += 12), r.hour = r.hour % 24), d.m !== void 0 && (r.minute = parseInt(b[d.m], 10) % 60), d.s !== void 0 && (r.second = parseInt(b[d.s], 10) % 60), d.S !== void 0 && (r.millisecond = parseInt(b[d.S], 10) * 10 ** (3 - b[d.S].length)), (d.Z !== void 0 || d.ZZ !== void 0) && (g = d.Z !== void 0 ? b[d.Z].replace(":", "") : b[d.ZZ], r.timezoneOffset = (g[0] === "+" ? -1 : 1) * (60 * g.slice(1, 3) + 1 * g.slice(3, 5)));
  }
  return r.dateHash = Je(r.year, 4) + "/" + Je(r.month) + "/" + Je(r.day), r.timeHash = Je(r.hour) + ":" + Je(r.minute) + ":" + Je(r.second) + g, r;
}
function tf(e) {
  return typeof e == "number" ? !0 : isNaN(Date.parse(e)) === !1;
}
function nf(e, t) {
  return cs(/* @__PURE__ */ new Date(), e, t);
}
function af(e) {
  const t = new Date(e).getDay();
  return t === 0 ? 7 : t;
}
function gl(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const a = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - a);
  const l = (t - n) / (os * 7);
  return 1 + Math.floor(l);
}
function lf(e) {
  return e.getFullYear() * 1e4 + e.getMonth() * 100 + e.getDate();
}
function ir(e, t) {
  const n = new Date(e);
  return t === !0 ? lf(n) : n.getTime();
}
function rf(e, t, n, a = {}) {
  const l = ir(t, a.onlyDate), r = ir(n, a.onlyDate), o = ir(e, a.onlyDate);
  return (o > l || a.inclusiveFrom === !0 && o === l) && (o < r || a.inclusiveTo === !0 && o === r);
}
function of(e, t) {
  return fo(e, t, 1);
}
function uf(e, t) {
  return fo(e, t, -1);
}
function an(e, t, n) {
  const a = new Date(e), l = `set${n === !0 ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      a[`${l}Month`](0);
    case "month":
    case "months":
      a[`${l}Date`](1);
    case "day":
    case "days":
    case "date":
      a[`${l}Hours`](0);
    case "hour":
    case "hours":
      a[`${l}Minutes`](0);
    case "minute":
    case "minutes":
      a[`${l}Seconds`](0);
    case "second":
    case "seconds":
      a[`${l}Milliseconds`](0);
  }
  return a;
}
function sf(e, t, n) {
  const a = new Date(e), l = `set${n === !0 ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      a[`${l}Month`](11);
    case "month":
    case "months":
      a[`${l}Date`](mo(a));
    case "day":
    case "days":
    case "date":
      a[`${l}Hours`](23);
    case "hour":
    case "hours":
      a[`${l}Minutes`](59);
    case "minute":
    case "minutes":
      a[`${l}Seconds`](59);
    case "second":
    case "seconds":
      a[`${l}Milliseconds`](999);
  }
  return a;
}
function cf(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((n) => {
    t = Math.max(t, new Date(n));
  }), t;
}
function df(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((n) => {
    t = Math.min(t, new Date(n));
  }), t;
}
function Ja(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * zr - (t.getTime() - t.getTimezoneOffset() * zr)) / n;
}
function vo(e, t, n = "days") {
  const a = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return a.getFullYear() - l.getFullYear();
    case "months":
    case "month":
      return (a.getFullYear() - l.getFullYear()) * 12 + a.getMonth() - l.getMonth();
    case "days":
    case "day":
    case "date":
      return Ja(an(a, "day"), an(l, "day"), os);
    case "hours":
    case "hour":
      return Ja(an(a, "hour"), an(l, "hour"), Yd);
    case "minutes":
    case "minute":
      return Ja(an(a, "minute"), an(l, "minute"), zr);
    case "seconds":
    case "second":
      return Ja(an(a, "second"), an(l, "second"), 1e3);
  }
}
function hl(e) {
  return vo(e, an(e, "year"), "days") + 1;
}
function ff(e) {
  return Oa(e) === !0 ? "date" : typeof e == "number" ? "number" : "string";
}
function vf(e, t, n) {
  const a = new Date(e);
  if (t) {
    const l = new Date(t);
    if (a < l)
      return l;
  }
  if (n) {
    const l = new Date(n);
    if (a > l)
      return l;
  }
  return a;
}
function mf(e, t, n) {
  const a = new Date(e), l = new Date(t);
  if (n === void 0)
    return a.getTime() === l.getTime();
  switch (n) {
    case "second":
    case "seconds":
      if (a.getSeconds() !== l.getSeconds())
        return !1;
    case "minute":
    case "minutes":
      if (a.getMinutes() !== l.getMinutes())
        return !1;
    case "hour":
    case "hours":
      if (a.getHours() !== l.getHours())
        return !1;
    case "day":
    case "days":
    case "date":
      if (a.getDate() !== l.getDate())
        return !1;
    case "month":
    case "months":
      if (a.getMonth() !== l.getMonth())
        return !1;
    case "year":
    case "years":
      if (a.getFullYear() !== l.getFullYear())
        return !1;
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${n}`);
  }
  return !0;
}
function mo(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
}
function na(e) {
  if (e >= 11 && e <= 13)
    return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
var ai = {
  // Year: 00, 01, ..., 99
  YY(e, t, n) {
    const a = this.YYYY(e, t, n) % 100;
    return a >= 0 ? Je(a) : "-" + Je(Math.abs(a));
  },
  // Year: 1900, 1901, ..., 2099
  YYYY(e, t, n) {
    return n ?? e.getFullYear();
  },
  // Month: 1, 2, ..., 12
  M(e) {
    return e.getMonth() + 1;
  },
  // Month: 1st, 2nd, ..., 12th
  Mo(e) {
    return na(e.getMonth() + 1);
  },
  // Month: 01, 02, ..., 12
  MM(e) {
    return Je(e.getMonth() + 1);
  },
  // Month Short Name: Jan, Feb, ...
  MMM(e, t) {
    return t.monthsShort[e.getMonth()];
  },
  // Month Name: January, February, ...
  MMMM(e, t) {
    return t.months[e.getMonth()];
  },
  // Quarter: 1, 2, 3, 4
  Q(e) {
    return Math.ceil((e.getMonth() + 1) / 3);
  },
  // Quarter: 1st, 2nd, 3rd, 4th
  Qo(e) {
    return na(this.Q(e));
  },
  // Day of month: 1, 2, ..., 31
  D(e) {
    return e.getDate();
  },
  // Day of month: 1st, 2nd, ..., 31st
  Do(e) {
    return na(e.getDate());
  },
  // Day of month: 01, 02, ..., 31
  DD(e) {
    return Je(e.getDate());
  },
  // Day of year: 1, 2, ..., 366
  DDD(e) {
    return hl(e);
  },
  // Day of year: 1st, 2nd, ..., 366th
  DDDo(e) {
    return na(hl(e));
  },
  // Day of year: 001, 002, ..., 366
  DDDD(e) {
    return Je(hl(e), 3);
  },
  // Day of week: 0, 1, ..., 6
  d(e) {
    return e.getDay();
  },
  // Day of week: 0th, 1st, ..., 6th
  do(e) {
    return na(e.getDay());
  },
  // Day of week: Su, Mo, ...
  dd(e, t) {
    return t.days[e.getDay()].slice(0, 2);
  },
  // Day of week: Sun, Mon, ...
  ddd(e, t) {
    return t.daysShort[e.getDay()];
  },
  // Day of week: Sunday, Monday, ...
  dddd(e, t) {
    return t.days[e.getDay()];
  },
  // Day of ISO week: 1, 2, ..., 7
  E(e) {
    return e.getDay() || 7;
  },
  // Week of Year: 1 2 ... 52 53
  w(e) {
    return gl(e);
  },
  // Week of Year: 1st 2nd ... 52nd 53rd
  wo(e) {
    return na(gl(e));
  },
  // Week of Year: 01 02 ... 52 53
  ww(e) {
    return Je(gl(e));
  },
  // Hour: 0, 1, ... 23
  H(e) {
    return e.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH(e) {
    return Je(e.getHours());
  },
  // Hour: 1, 2, ..., 12
  h(e) {
    const t = e.getHours();
    return t === 0 ? 12 : t > 12 ? t % 12 : t;
  },
  // Hour: 01, 02, ..., 12
  hh(e) {
    return Je(this.h(e));
  },
  // Minute: 0, 1, ..., 59
  m(e) {
    return e.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm(e) {
    return Je(e.getMinutes());
  },
  // Second: 0, 1, ..., 59
  s(e) {
    return e.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss(e) {
    return Je(e.getSeconds());
  },
  // 1/10 of second: 0, 1, ..., 9
  S(e) {
    return Math.floor(e.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS(e) {
    return Je(Math.floor(e.getMilliseconds() / 10));
  },
  // Millisecond: 000, 001, ..., 999
  SSS(e) {
    return Je(e.getMilliseconds(), 3);
  },
  // Meridiem: AM, PM
  A(e) {
    return e.getHours() < 12 ? "AM" : "PM";
  },
  // Meridiem: am, pm
  a(e) {
    return e.getHours() < 12 ? "am" : "pm";
  },
  // Meridiem: a.m., p.m.
  aa(e) {
    return e.getHours() < 12 ? "a.m." : "p.m.";
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z(e, t, n, a) {
    const l = a ?? e.getTimezoneOffset();
    return ni(l, ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ(e, t, n, a) {
    const l = a ?? e.getTimezoneOffset();
    return ni(l);
  },
  // Seconds timestamp: 512969520
  X(e) {
    return Math.floor(e.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x(e) {
    return e.getTime();
  }
};
function go(e, t, n, a, l) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const r = new Date(e);
  if (isNaN(r)) return;
  t === void 0 && (t = is);
  const o = us(n, tu.props);
  return t.replace(
    Wd,
    (i, c) => i in ai ? ai[i](r, o, a, l) : c === void 0 ? i : c.split("\\]").join("]")
  );
}
function gf(e) {
  return Oa(e) === !0 ? new Date(e.getTime()) : e;
}
var yt = {
  isValid: tf,
  extractDate: ef,
  buildDate: nf,
  getDayOfWeek: af,
  getWeekOfYear: gl,
  isBetweenDates: rf,
  addToDate: of,
  subtractFromDate: uf,
  adjustDate: cs,
  startOfDate: an,
  endOfDate: sf,
  getMaxDate: cf,
  getMinDate: df,
  getDateDiff: vo,
  getDayOfYear: hl,
  inferDateFormat: ff,
  getDateBetween: vf,
  isSameDate: mf,
  daysInMonth: mo,
  formatDate: go,
  clone: gf
}, on = 20, hf = ["Calendar", "Years", "Months"], li = (e) => hf.includes(e), ur = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), aa = " — ";
function yn(e) {
  return e.year + "/" + Je(e.month);
}
te({
  name: "QDate",
  props: {
    ...$l,
    ...Xt,
    ...Ue,
    modelValue: {
      required: !0,
      validator: (e) => typeof e == "string" || Array.isArray(e) === !0 || Object(e) === e || e === null
    },
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      ...$l.mask,
      // this mask is forced
      // when using persian calendar
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: ur
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: ur
    },
    navigationMaxYearMonth: {
      type: String,
      validator: ur
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: li
    }
  },
  emits: [
    ...ls,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = Ye(e, l), { getCache: o } = Ua(), { tabindex: i, headerClass: c, getLocale: f, getCurrentDate: d } = rs(e, l);
    let b;
    const g = Ka(e), v = $n(g), m = E(null), S = E(We()), p = E(f()), x = s(() => We()), C = s(() => f()), y = s(() => d()), h = E(J(S.value, p.value)), _ = E(e.defaultView), L = s(() => l.lang.rtl === !0 ? "right" : "left"), F = E(L.value), R = E(L.value), z = h.value.year, B = E(z - z % on - (z < 0 ? on : 0)), P = E(null), T = s(() => {
      const M = e.landscape === !0 ? "landscape" : "portrait";
      return `q-date q-date--${M} q-date--${M}-${e.minimal === !0 ? "minimal" : "standard"}` + (r.value === !0 ? " q-date--dark q-dark" : "") + (e.bordered === !0 ? " q-date--bordered" : "") + (e.square === !0 ? " q-date--square no-border-radius" : "") + (e.flat === !0 ? " q-date--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-date--readonly" : "");
    }), q = s(() => e.color || "primary"), w = s(() => e.textColor || "white"), A = s(
      () => e.emitImmediately === !0 && e.multiple !== !0 && e.range !== !0
    ), N = s(() => Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), H = s(
      () => N.value.filter((M) => typeof M == "string").map((M) => Ge(M, S.value, p.value)).filter(
        (M) => M.dateHash !== null && M.day !== null && M.month !== null && M.year !== null
      )
    ), K = s(() => {
      const M = (V) => Ge(V, S.value, p.value);
      return N.value.filter((V) => Lt(V) === !0 && V.from !== void 0 && V.to !== void 0).map((V) => ({ from: M(V.from), to: M(V.to) })).filter((V) => V.from.dateHash !== null && V.to.dateHash !== null && V.from.dateHash < V.to.dateHash);
    }), W = s(() => e.calendar !== "persian" ? (M) => new Date(M.year, M.month - 1, M.day) : (M) => {
      const V = ti(M.year, M.month, M.day);
      return new Date(V.gy, V.gm - 1, V.gd);
    }), ue = s(() => e.calendar === "persian" ? sn : (M, V, ee) => go(
      new Date(
        M.year,
        M.month - 1,
        M.day,
        M.hour,
        M.minute,
        M.second,
        M.millisecond
      ),
      V === void 0 ? S.value : V,
      ee === void 0 ? p.value : ee,
      M.year,
      M.timezoneOffset
    )), I = s(
      () => H.value.length + K.value.reduce(
        (M, V) => M + 1 + vo(
          W.value(V.to),
          W.value(V.from)
        ),
        0
      )
    ), k = s(() => {
      if (e.title !== void 0 && e.title !== null && e.title.length !== 0)
        return e.title;
      if (P.value !== null) {
        const ee = P.value.init, ge = W.value(ee);
        return p.value.daysShort[ge.getDay()] + ", " + p.value.monthsShort[ee.month - 1] + " " + ee.day + aa + "?";
      }
      if (I.value === 0)
        return aa;
      if (I.value > 1)
        return `${I.value} ${p.value.pluralDay}`;
      const M = H.value[0], V = W.value(M);
      return isNaN(V.valueOf()) === !0 ? aa : p.value.headerTitle !== void 0 ? p.value.headerTitle(V, M) : p.value.daysShort[V.getDay()] + ", " + p.value.monthsShort[M.month - 1] + " " + M.day;
    }), U = s(() => H.value.concat(K.value.map((V) => V.from)).sort((V, ee) => V.year - ee.year || V.month - ee.month)[0]), O = s(() => H.value.concat(K.value.map((V) => V.to)).sort((V, ee) => ee.year - V.year || ee.month - V.month)[0]), ne = s(() => {
      if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0)
        return e.subtitle;
      if (I.value === 0)
        return aa;
      if (I.value > 1) {
        const M = U.value, V = O.value, ee = p.value.monthsShort;
        return ee[M.month - 1] + (M.year !== V.year ? " " + M.year + aa + ee[V.month - 1] + " " : M.month !== V.month ? aa + ee[V.month - 1] : "") + " " + V.year;
      }
      return H.value[0].year;
    }), $ = s(() => {
      const M = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
      return l.lang.rtl === !0 ? M.reverse() : M;
    }), Q = s(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : p.value.firstDayOfWeek), oe = s(() => {
      const M = p.value.daysShort, V = Q.value;
      return V > 0 ? M.slice(V, 7).concat(M.slice(0, V)) : M;
    }), j = s(() => {
      const M = h.value;
      return e.calendar !== "persian" ? new Date(M.year, M.month, 0).getDate() : ml(M.year, M.month);
    }), de = s(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), he = s(() => {
      if (e.navigationMinYearMonth === void 0)
        return null;
      const M = e.navigationMinYearMonth.split("/");
      return { year: parseInt(M[0], 10), month: parseInt(M[1], 10) };
    }), Y = s(() => {
      if (e.navigationMaxYearMonth === void 0)
        return null;
      const M = e.navigationMaxYearMonth.split("/");
      return { year: parseInt(M[0], 10), month: parseInt(M[1], 10) };
    }), fe = s(() => {
      const M = {
        month: { prev: !0, next: !0 },
        year: { prev: !0, next: !0 }
      };
      return he.value !== null && he.value.year >= h.value.year && (M.year.prev = !1, he.value.year === h.value.year && he.value.month >= h.value.month && (M.month.prev = !1)), Y.value !== null && Y.value.year <= h.value.year && (M.year.next = !1, Y.value.year === h.value.year && Y.value.month <= h.value.month && (M.month.next = !1)), M;
    }), be = s(() => {
      const M = {};
      return H.value.forEach((V) => {
        const ee = yn(V);
        M[ee] === void 0 && (M[ee] = []), M[ee].push(V.day);
      }), M;
    }), _e = s(() => {
      const M = {};
      return K.value.forEach((V) => {
        const ee = yn(V.from), ge = yn(V.to);
        if (M[ee] === void 0 && (M[ee] = []), M[ee].push({
          from: V.from.day,
          to: ee === ge ? V.to.day : void 0,
          range: V
        }), ee < ge) {
          let ye;
          const { year: He, month: ke } = V.from, ze = ke < 12 ? { year: He, month: ke + 1 } : { year: He + 1, month: 1 };
          for (; (ye = yn(ze)) <= ge; )
            M[ye] === void 0 && (M[ye] = []), M[ye].push({
              from: void 0,
              to: ye === ge ? V.to.day : void 0,
              range: V
            }), ze.month++, ze.month > 12 && (ze.year++, ze.month = 1);
        }
      }), M;
    }), Be = s(() => {
      if (P.value === null) return;
      const { init: M, initHash: V, final: ee, finalHash: ge } = P.value, [ye, He] = V <= ge ? [M, ee] : [ee, M], ke = yn(ye), ze = yn(He);
      if (ke !== se.value && ze !== se.value) return;
      const Ze = {};
      return ke === se.value ? (Ze.from = ye.day, Ze.includeFrom = !0) : Ze.from = 1, ze === se.value ? (Ze.to = He.day, Ze.includeTo = !0) : Ze.to = j.value, Ze;
    }), se = s(() => yn(h.value)), Te = s(() => {
      const M = {};
      if (e.options === void 0) {
        for (let ee = 1; ee <= j.value; ee++)
          M[ee] = !0;
        return M;
      }
      const V = typeof e.options == "function" ? e.options : (ee) => e.options.includes(ee);
      for (let ee = 1; ee <= j.value; ee++) {
        const ge = se.value + "/" + Je(ee);
        M[ee] = V(ge);
      }
      return M;
    }), Pe = s(() => {
      const M = {};
      if (e.events === void 0)
        for (let V = 1; V <= j.value; V++)
          M[V] = !1;
      else {
        const V = typeof e.events == "function" ? e.events : (ee) => e.events.includes(ee);
        for (let ee = 1; ee <= j.value; ee++) {
          const ge = se.value + "/" + Je(ee);
          M[ee] = V(ge) === !0 && de.value(ge);
        }
      }
      return M;
    }), Oe = s(() => {
      let M, V;
      const { year: ee, month: ge } = h.value;
      if (e.calendar !== "persian")
        M = new Date(ee, ge - 1, 1), V = new Date(ee, ge - 1, 0).getDate();
      else {
        const ye = ti(ee, ge, 1);
        M = new Date(ye.gy, ye.gm - 1, ye.gd);
        let He = ge - 1, ke = ee;
        He === 0 && (He = 12, ke--), V = ml(ke, He);
      }
      return {
        days: M.getDay() - Q.value - 1,
        endDay: V
      };
    }), le = s(() => {
      const M = [], { days: V, endDay: ee } = Oe.value, ge = V < 0 ? V + 7 : V;
      if (ge < 6)
        for (let ke = ee - ge; ke <= ee; ke++)
          M.push({ i: ke, fill: !0 });
      const ye = M.length;
      for (let ke = 1; ke <= j.value; ke++) {
        const ze = { i: ke, event: Pe.value[ke], classes: [] };
        Te.value[ke] === !0 && (ze.in = !0, ze.flat = !0), M.push(ze);
      }
      if (be.value[se.value] !== void 0 && be.value[se.value].forEach((ke) => {
        const ze = ye + ke - 1;
        Object.assign(M[ze], {
          selected: !0,
          unelevated: !0,
          flat: !1,
          color: q.value,
          textColor: w.value
        });
      }), _e.value[se.value] !== void 0 && _e.value[se.value].forEach((ke) => {
        if (ke.from !== void 0) {
          const ze = ye + ke.from - 1, Ze = ye + (ke.to || j.value) - 1;
          for (let Ht = ze; Ht <= Ze; Ht++)
            Object.assign(M[Ht], {
              range: ke.range,
              unelevated: !0,
              color: q.value,
              textColor: w.value
            });
          Object.assign(M[ze], {
            rangeFrom: !0,
            flat: !1
          }), ke.to !== void 0 && Object.assign(M[Ze], {
            rangeTo: !0,
            flat: !1
          });
        } else if (ke.to !== void 0) {
          const ze = ye + ke.to - 1;
          for (let Ze = ye; Ze <= ze; Ze++)
            Object.assign(M[Ze], {
              range: ke.range,
              unelevated: !0,
              color: q.value,
              textColor: w.value
            });
          Object.assign(M[ze], {
            flat: !1,
            rangeTo: !0
          });
        } else {
          const ze = ye + j.value - 1;
          for (let Ze = ye; Ze <= ze; Ze++)
            Object.assign(M[Ze], {
              range: ke.range,
              unelevated: !0,
              color: q.value,
              textColor: w.value
            });
        }
      }), Be.value !== void 0) {
        const ke = ye + Be.value.from - 1, ze = ye + Be.value.to - 1;
        for (let Ze = ke; Ze <= ze; Ze++)
          M[Ze].color = q.value, M[Ze].editRange = !0;
        Be.value.includeFrom === !0 && (M[ke].editRangeFrom = !0), Be.value.includeTo === !0 && (M[ze].editRangeTo = !0);
      }
      h.value.year === y.value.year && h.value.month === y.value.month && (M[ye + y.value.day - 1].today = !0);
      const He = M.length % 7;
      if (He > 0) {
        const ke = 7 - He;
        for (let ze = 1; ze <= ke; ze++)
          M.push({ i: ze, fill: !0 });
      }
      return M.forEach((ke) => {
        let ze = "q-date__calendar-item ";
        ke.fill === !0 ? ze += "q-date__calendar-item--fill" : (ze += `q-date__calendar-item--${ke.in === !0 ? "in" : "out"}`, ke.range !== void 0 && (ze += ` q-date__range${ke.rangeTo === !0 ? "-to" : ke.rangeFrom === !0 ? "-from" : ""}`), ke.editRange === !0 && (ze += ` q-date__edit-range${ke.editRangeFrom === !0 ? "-from" : ""}${ke.editRangeTo === !0 ? "-to" : ""}`), (ke.range !== void 0 || ke.editRange === !0) && (ze += ` text-${ke.color}`)), ke.classes = ze;
      }), M;
    }), G = s(() => e.disable === !0 ? { "aria-disabled": "true" } : {});
    ae(() => e.modelValue, (M) => {
      if (b === JSON.stringify(M))
        b = 0;
      else {
        const V = J(S.value, p.value);
        nt(V.year, V.month, V);
      }
    }), ae(_, () => {
      m.value !== null && a.$el.contains(document.activeElement) === !0 && m.value.focus();
    }), ae(() => h.value.year + "|" + h.value.month, () => {
      n("navigation", { year: h.value.year, month: h.value.month });
    }), ae(x, (M) => {
      me(M, p.value, "mask"), S.value = M;
    }), ae(C, (M) => {
      me(S.value, M, "locale"), p.value = M;
    });
    function ce(M) {
      b = JSON.stringify(M);
    }
    function we() {
      const { year: M, month: V, day: ee } = y.value, ge = {
        // contains more props than needed (hour, minute, second, millisecond)
        // but those aren't used in the processing of this "date" variable
        ...h.value,
        // overwriting with today's date
        year: M,
        month: V,
        day: ee
      }, ye = be.value[yn(ge)];
      (ye === void 0 || ye.includes(ge.day) === !1) && rn(ge), Le(ge.year, ge.month);
    }
    function Ve(M) {
      li(M) === !0 && (_.value = M);
    }
    function Ne(M, V) {
      ["month", "year"].includes(M) && (M === "month" ? X : re)(V === !0 ? -1 : 1);
    }
    function Le(M, V) {
      _.value = "Calendar", nt(M, V);
    }
    function Fe(M, V) {
      if (e.range === !1 || !M) {
        P.value = null;
        return;
      }
      const ee = Object.assign({ ...h.value }, M), ge = V !== void 0 ? Object.assign({ ...h.value }, V) : ee;
      P.value = {
        init: ee,
        initHash: sn(ee),
        final: ge,
        finalHash: sn(ge)
      }, Le(ee.year, ee.month);
    }
    function We() {
      return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
    }
    function Ge(M, V, ee) {
      return sa(
        M,
        V,
        ee,
        e.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function J(M, V) {
      const ee = Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue ? [e.modelValue] : [];
      if (ee.length === 0)
        return ie();
      const ge = ee[ee.length - 1], ye = Ge(
        ge.from !== void 0 ? ge.from : ge,
        M,
        V
      );
      return ye.dateHash === null ? ie() : ye;
    }
    function ie() {
      let M, V;
      if (e.defaultYearMonth !== void 0) {
        const ee = e.defaultYearMonth.split("/");
        M = parseInt(ee[0], 10), V = parseInt(ee[1], 10);
      } else {
        const ee = y.value !== void 0 ? y.value : d();
        M = ee.year, V = ee.month;
      }
      return {
        year: M,
        month: V,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: M + "/" + Je(V) + "/01"
      };
    }
    function X(M) {
      let V = h.value.year, ee = Number(h.value.month) + M;
      ee === 13 ? (ee = 1, V++) : ee === 0 && (ee = 12, V--), nt(V, ee), A.value === !0 && $t("month");
    }
    function re(M) {
      const V = Number(h.value.year) + M;
      nt(V, h.value.month), A.value === !0 && $t("year");
    }
    function Se(M) {
      nt(M, h.value.month), _.value = e.defaultView === "Years" ? "Months" : "Calendar", A.value === !0 && $t("year");
    }
    function Re(M) {
      nt(h.value.year, M), _.value = "Calendar", A.value === !0 && $t("month");
    }
    function qe(M, V) {
      const ee = be.value[V];
      ((ee == null ? void 0 : ee.includes(M.day)) === !0 ? Z : rn)(M);
    }
    function Ie(M) {
      return { year: M.year, month: M.month, day: M.day };
    }
    function nt(M, V, ee) {
      if (he.value !== null && M <= he.value.year && ((V < he.value.month || M < he.value.year) && (V = he.value.month), M = he.value.year), Y.value !== null && M >= Y.value.year && ((V > Y.value.month || M > Y.value.year) && (V = Y.value.month), M = Y.value.year), ee !== void 0) {
        const { hour: ye, minute: He, second: ke, millisecond: ze, timezoneOffset: Ze, timeHash: Ht } = ee;
        Object.assign(h.value, { hour: ye, minute: He, second: ke, millisecond: ze, timezoneOffset: Ze, timeHash: Ht });
      }
      const ge = M + "/" + Je(V) + "/01";
      ge !== h.value.dateHash && (F.value = h.value.dateHash < ge == (l.lang.rtl !== !0) ? "left" : "right", M !== h.value.year && (R.value = F.value), Ke(() => {
        B.value = M - M % on - (M < 0 ? on : 0), Object.assign(h.value, {
          year: M,
          month: V,
          day: 1,
          dateHash: ge
        });
      }));
    }
    function vt(M, V, ee) {
      const ge = M !== null && M.length === 1 && e.multiple === !1 ? M[0] : M, { reason: ye, details: He } = bn(V, ee);
      ce(ge), n("update:modelValue", ge, ye, He);
    }
    function $t(M) {
      const V = H.value[0] !== void 0 && H.value[0].dateHash !== null ? { ...H.value[0] } : { ...h.value };
      Ke(() => {
        V.year = h.value.year, V.month = h.value.month;
        const ee = e.calendar !== "persian" ? new Date(V.year, V.month, 0).getDate() : ml(V.year, V.month);
        V.day = Math.min(Math.max(1, V.day), ee);
        const ge = Vt(V), { details: ye } = bn("", V);
        ce(ge), n("update:modelValue", ge, M, ye);
      });
    }
    function bn(M, V) {
      return V.from !== void 0 ? {
        reason: `${M}-range`,
        details: {
          ...Ie(V.target),
          from: Ie(V.from),
          to: Ie(V.to)
        }
      } : {
        reason: `${M}-day`,
        details: Ie(V)
      };
    }
    function Vt(M, V, ee) {
      return M.from !== void 0 ? { from: ue.value(M.from, V, ee), to: ue.value(M.to, V, ee) } : ue.value(M, V, ee);
    }
    function rn(M) {
      let V;
      if (e.multiple === !0)
        if (M.from !== void 0) {
          const ee = sn(M.from), ge = sn(M.to), ye = H.value.filter((ke) => ke.dateHash < ee || ke.dateHash > ge), He = K.value.filter(({ from: ke, to: ze }) => ze.dateHash < ee || ke.dateHash > ge);
          V = ye.concat(He).concat(M).map((ke) => Vt(ke));
        } else {
          const ee = N.value.slice();
          ee.push(Vt(M)), V = ee;
        }
      else
        V = Vt(M);
      vt(V, "add", M);
    }
    function Z(M) {
      if (e.noUnset === !0) return;
      let V = null;
      if (e.multiple === !0 && Array.isArray(e.modelValue) === !0) {
        const ee = Vt(M);
        M.from !== void 0 ? V = e.modelValue.filter(
          (ge) => ge.from !== void 0 ? ge.from !== ee.from && ge.to !== ee.to : !0
        ) : V = e.modelValue.filter((ge) => ge !== ee), V.length === 0 && (V = null);
      }
      vt(V, "remove", M);
    }
    function me(M, V, ee) {
      const ge = H.value.concat(K.value).map((He) => Vt(He, M, V)).filter((He) => He.from !== void 0 ? He.from.dateHash !== null && He.to.dateHash !== null : He.dateHash !== null), ye = (e.multiple === !0 ? ge : ge[0]) || null;
      ce(ye), n("update:modelValue", ye, ee);
    }
    function $e() {
      if (e.minimal !== !0)
        return u("div", {
          class: "q-date__header " + c.value
        }, [
          u("div", {
            class: "relative-position"
          }, [
            u(Ct, {
              name: "q-transition--fade"
            }, () => u("div", {
              key: "h-yr-" + ne.value,
              class: "q-date__header-subtitle q-date__header-link " + (_.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: i.value,
              ...o("vY", {
                onClick() {
                  _.value = "Years";
                },
                onKeyup(M) {
                  M.keyCode === 13 && (_.value = "Years");
                }
              })
            }, [ne.value]))
          ]),
          u("div", {
            class: "q-date__header-title relative-position flex no-wrap"
          }, [
            u("div", {
              class: "relative-position col"
            }, [
              u(Ct, {
                name: "q-transition--fade"
              }, () => u("div", {
                key: "h-sub" + k.value,
                class: "q-date__header-title-label q-date__header-link " + (_.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
                tabindex: i.value,
                ...o("vC", {
                  onClick() {
                    _.value = "Calendar";
                  },
                  onKeyup(M) {
                    M.keyCode === 13 && (_.value = "Calendar");
                  }
                })
              }, [k.value]))
            ]),
            e.todayBtn === !0 ? u(et, {
              class: "q-date__header-today self-start",
              icon: l.iconSet.datetime.today,
              "aria-label": l.lang.date.today,
              flat: !0,
              size: "sm",
              round: !0,
              tabindex: i.value,
              onClick: we
            }) : null
          ])
        ]);
    }
    function Me({ label: M, type: V, key: ee, dir: ge, goTo: ye, boundaries: He, cls: ke }) {
      return [
        u("div", {
          class: "row items-center q-date__arrow"
        }, [
          u(et, {
            round: !0,
            dense: !0,
            size: "sm",
            flat: !0,
            icon: $.value[0],
            "aria-label": V === "Years" ? l.lang.date.prevYear : l.lang.date.prevMonth,
            tabindex: i.value,
            disable: He.prev === !1,
            ...o("go-#" + V, { onClick() {
              ye(-1);
            } })
          })
        ]),
        u("div", {
          class: "relative-position overflow-hidden flex flex-center" + ke
        }, [
          u(Ct, {
            name: "q-transition--jump-" + ge
          }, () => u("div", { key: ee }, [
            u(et, {
              flat: !0,
              dense: !0,
              noCaps: !0,
              label: M,
              tabindex: i.value,
              ...o("view#" + V, { onClick: () => {
                _.value = V;
              } })
            })
          ]))
        ]),
        u("div", {
          class: "row items-center q-date__arrow"
        }, [
          u(et, {
            round: !0,
            dense: !0,
            size: "sm",
            flat: !0,
            icon: $.value[1],
            "aria-label": V === "Years" ? l.lang.date.nextYear : l.lang.date.nextMonth,
            tabindex: i.value,
            disable: He.next === !1,
            ...o("go+#" + V, { onClick() {
              ye(1);
            } })
          })
        ])
      ];
    }
    const Ee = {
      Calendar: () => [
        u("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          u("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, Me({
            label: p.value.months[h.value.month - 1],
            type: "Months",
            key: h.value.month,
            dir: F.value,
            goTo: X,
            boundaries: fe.value.month,
            cls: " col"
          }).concat(Me({
            label: h.value.year,
            type: "Years",
            key: h.value.year,
            dir: R.value,
            goTo: re,
            boundaries: fe.value.year,
            cls: ""
          }))),
          u("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, oe.value.map((M) => u("div", { class: "q-date__calendar-item" }, [u("div", M)]))),
          u("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            u(Ct, {
              name: "q-transition--slide-" + F.value
            }, () => u("div", {
              key: se.value,
              class: "q-date__calendar-days fit"
            }, le.value.map((M) => u("div", { class: M.classes }, [
              M.in === !0 ? u(
                et,
                {
                  class: M.today === !0 ? "q-date__today" : "",
                  dense: !0,
                  flat: M.flat,
                  unelevated: M.unelevated,
                  color: M.color,
                  textColor: M.textColor,
                  label: M.i,
                  tabindex: i.value,
                  ...o("day#" + M.i, {
                    onClick: () => {
                      st(M.i);
                    },
                    onMouseover: () => {
                      rt(M.i);
                    }
                  })
                },
                M.event !== !1 ? () => u("div", { class: "q-date__event bg-" + M.event }) : null
              ) : u("div", "" + M.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const M = h.value.year === y.value.year, V = (ge) => he.value !== null && h.value.year === he.value.year && he.value.month > ge || Y.value !== null && h.value.year === Y.value.year && Y.value.month < ge, ee = p.value.monthsShort.map((ge, ye) => {
          const He = h.value.month === ye + 1;
          return u("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            u(et, {
              class: M === !0 && y.value.month === ye + 1 ? "q-date__today" : null,
              flat: He !== !0,
              label: ge,
              unelevated: He,
              color: He === !0 ? q.value : null,
              textColor: He === !0 ? w.value : null,
              tabindex: i.value,
              disable: V(ye + 1),
              ...o("month#" + ye, { onClick: () => {
                Re(ye + 1);
              } })
            })
          ]);
        });
        return e.yearsInMonthView === !0 && ee.unshift(
          u("div", { class: "row no-wrap full-width" }, [
            Me({
              label: h.value.year,
              type: "Years",
              key: h.value.year,
              dir: R.value,
              goTo: re,
              boundaries: fe.value.year,
              cls: " col"
            })
          ])
        ), u("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, ee);
      },
      Years() {
        const M = B.value, V = M + on, ee = [], ge = (ye) => he.value !== null && he.value.year > ye || Y.value !== null && Y.value.year < ye;
        for (let ye = M; ye <= V; ye++) {
          const He = h.value.year === ye;
          ee.push(
            u("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              u(et, {
                key: "yr" + ye,
                class: y.value.year === ye ? "q-date__today" : null,
                flat: !He,
                label: ye,
                dense: !0,
                unelevated: He,
                color: He === !0 ? q.value : null,
                textColor: He === !0 ? w.value : null,
                tabindex: i.value,
                disable: ge(ye),
                ...o("yr#" + ye, { onClick: () => {
                  Se(ye);
                } })
              })
            ])
          );
        }
        return u("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          u("div", {
            class: "col-auto"
          }, [
            u(et, {
              round: !0,
              dense: !0,
              flat: !0,
              icon: $.value[0],
              "aria-label": l.lang.date.prevRangeYears(on),
              tabindex: i.value,
              disable: ge(M),
              ...o("y-", { onClick: () => {
                B.value -= on;
              } })
            })
          ]),
          u("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, ee),
          u("div", {
            class: "col-auto"
          }, [
            u(et, {
              round: !0,
              dense: !0,
              flat: !0,
              icon: $.value[1],
              "aria-label": l.lang.date.nextRangeYears(on),
              tabindex: i.value,
              disable: ge(V),
              ...o("y+", { onClick: () => {
                B.value += on;
              } })
            })
          ])
        ]);
      }
    };
    function st(M) {
      const V = { ...h.value, day: M };
      if (e.range === !1) {
        qe(V, se.value);
        return;
      }
      if (P.value === null) {
        const ee = le.value.find((ye) => ye.fill !== !0 && ye.i === M);
        if (e.noUnset !== !0 && ee.range !== void 0) {
          Z({ target: V, from: ee.range.from, to: ee.range.to });
          return;
        }
        if (ee.selected === !0) {
          Z(V);
          return;
        }
        const ge = sn(V);
        P.value = {
          init: V,
          initHash: ge,
          final: V,
          finalHash: ge
        }, n("rangeStart", Ie(V));
      } else {
        const ee = P.value.initHash, ge = sn(V), ye = ee <= ge ? { from: P.value.init, to: V } : { from: V, to: P.value.init };
        P.value = null, rn(ee === ge ? V : { target: V, ...ye }), n("rangeEnd", {
          from: Ie(ye.from),
          to: Ie(ye.to)
        });
      }
    }
    function rt(M) {
      if (P.value !== null) {
        const V = { ...h.value, day: M };
        Object.assign(P.value, {
          final: V,
          finalHash: sn(V)
        });
      }
    }
    return Object.assign(a, {
      setToday: we,
      setView: Ve,
      offsetCalendar: Ne,
      setCalendarTo: Le,
      setEditingRange: Fe
    }), () => {
      const M = [
        u("div", {
          class: "q-date__content col relative-position"
        }, [
          u(Ct, {
            name: "q-transition--fade"
          }, Ee[_.value])
        ])
      ], V = xe(t.default);
      return V !== void 0 && M.push(
        u("div", { class: "q-date__actions" }, V)
      ), e.name !== void 0 && e.disable !== !0 && v(M, "push"), u("div", {
        class: T.value,
        ...G.value
      }, [
        $e(),
        u("div", {
          ref: m,
          class: "q-date__main col column",
          tabindex: -1
        }, M)
      ]);
    };
  }
});
function ds(e, t, n) {
  function a() {
  }
  return je(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: a,
    addToHistory() {
    }
  };
}
var Ta = 0, sr, cr, La, dr = !1, ri, oi, ii, Bn = null;
function bf(e) {
  yf(e) && Ae(e);
}
function yf(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = xc(e), n = e.shiftKey && !e.deltaX, a = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), l = n || a ? e.deltaY : e.deltaX;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (ud(o, a))
      return a ? l < 0 && o.scrollTop === 0 ? !0 : l > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : l < 0 && o.scrollLeft === 0 ? !0 : l > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return !0;
}
function ui(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function el(e) {
  dr !== !0 && (dr = !0, requestAnimationFrame(() => {
    dr = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: a } = document.scrollingElement;
    (La === void 0 || t !== window.innerHeight) && (La = n - t, document.scrollingElement.scrollTop = a), a > La && (document.scrollingElement.scrollTop -= Math.ceil((a - La) / 8));
  }));
}
function si(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: a, overflowX: l } = window.getComputedStyle(t);
    sr = Vl(window), cr = qn(window), ri = t.style.left, oi = t.style.top, ii = window.location.href, t.style.left = `-${sr}px`, t.style.top = `-${cr}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), a !== "hidden" && (a === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, De.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", el, lt.passiveCapture), window.visualViewport.addEventListener("scroll", el, lt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", ui, lt.passiveCapture));
  }
  De.is.desktop === !0 && De.is.mac === !0 && window[`${e}EventListener`]("wheel", bf, lt.notPassive), e === "remove" && (De.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", el, lt.passiveCapture), window.visualViewport.removeEventListener("scroll", el, lt.passiveCapture)) : window.removeEventListener("scroll", ui, lt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = ri, t.style.top = oi, window.location.href === ii && window.scrollTo(sr, cr), La = void 0);
}
function Rr(e) {
  let t = "add";
  if (e === !0) {
    if (Ta++, Bn !== null) {
      clearTimeout(Bn), Bn = null;
      return;
    }
    if (Ta > 1) return;
  } else {
    if (Ta === 0 || (Ta--, Ta > 0)) return;
    if (t = "remove", De.is.ios === !0 && De.is.nativeMobile === !0) {
      Bn !== null && clearTimeout(Bn), Bn = setTimeout(() => {
        si(t), Bn = null;
      }, 100);
      return;
    }
  }
  si(t);
}
function fs() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, Rr(t));
    }
  };
}
var tl = 0, pf = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, ci = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, Il = te({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ..._a,
    ...Dn,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e)
    }
  },
  emits: [
    ...wa,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: a }) {
    const l = ve(), r = E(null), o = E(!1), i = E(!1);
    let c = null, f = null, d, b;
    const g = s(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: v } = fs(), { registerTimeout: m } = dn(), { registerTick: S, removeTick: p } = ma(), { transitionProps: x, transitionStyle: C } = Ol(
      e,
      () => ci[e.position][0],
      () => ci[e.position][1]
    ), y = s(() => C.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: h, hidePortal: _, portalIsAccessible: L, renderPortal: F } = Gr(
      l,
      r,
      U,
      "dialog"
    ), { hide: R } = Ca({
      showing: o,
      hideOnRouteChange: g,
      handleShow: q,
      handleHide: w,
      processOnMount: !0
    });
    ds(o);
    const z = s(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${pf[e.position]}` + (i.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), B = s(() => o.value === !0 && e.seamless !== !0), P = s(() => e.autoClose === !0 ? { onClick: ue } : {}), T = s(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${B.value === !0 ? "modal" : "seamless"}`,
      a.class
    ]);
    ae(() => e.maximized, (O) => {
      o.value === !0 && W(O);
    }), ae(B, (O) => {
      v(O), O === !0 ? (zu(k), Lu(H)) : (Br(k), _l(H));
    });
    function q(O) {
      var ne;
      f = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, W(e.maximized), h(), i.value = !0, e.noFocus !== !0 ? ((ne = document.activeElement) == null || ne.blur(), S(A)) : p(), m(() => {
        if (l.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: $, bottom: Q } = document.activeElement.getBoundingClientRect(), { innerHeight: oe } = window, j = window.visualViewport !== void 0 ? window.visualViewport.height : oe;
            $ > 0 && Q > j / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - j,
              Q >= oe ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + Q - j / 2)
            )), document.activeElement.scrollIntoView();
          }
          b = !0, r.value.click(), b = !1;
        }
        h(!0), i.value = !1, n("show", O);
      }, e.transitionDuration);
    }
    function w(O) {
      p(), K(!0), i.value = !0, _(), f !== null && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? f.closest('[tabindex]:not([tabindex^="-"])') : void 0) || f).focus(), f = null), m(() => {
        _(!0), i.value = !1, n("hide", O);
      }, e.transitionDuration);
    }
    function A(O) {
      xa(() => {
        let ne = r.value;
        if (ne !== null) {
          if (O !== void 0) {
            const $ = ne.querySelector(O);
            if ($ !== null) {
              $.focus({ preventScroll: !0 });
              return;
            }
          }
          ne.contains(document.activeElement) !== !0 && (ne = ne.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || ne.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || ne.querySelector("[autofocus], [data-autofocus]") || ne, ne.focus({ preventScroll: !0 }));
        }
      });
    }
    function N(O) {
      O && typeof O.focus == "function" ? O.focus({ preventScroll: !0 }) : A(), n("shake");
      const ne = r.value;
      ne !== null && (ne.classList.remove("q-animate--scale"), ne.classList.add("q-animate--scale"), c !== null && clearTimeout(c), c = setTimeout(() => {
        c = null, r.value !== null && (ne.classList.remove("q-animate--scale"), A());
      }, 170));
    }
    function H() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && N() : (n("escapeKey"), R()));
    }
    function K(O) {
      c !== null && (clearTimeout(c), c = null), (O === !0 || o.value === !0) && (W(!1), e.seamless !== !0 && (v(!1), Br(k), _l(H))), O !== !0 && (f = null);
    }
    function W(O) {
      O === !0 ? d !== !0 && (tl < 1 && document.body.classList.add("q-body--dialog"), tl++, d = !0) : d === !0 && (tl < 2 && document.body.classList.remove("q-body--dialog"), tl--, d = !1);
    }
    function ue(O) {
      b !== !0 && (R(O), n("click", O));
    }
    function I(O) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? R(O) : e.noShake !== !0 && N();
    }
    function k(O) {
      e.allowFocusOutside !== !0 && L.value === !0 && bu(r.value, O.target) !== !0 && A('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(l.proxy, {
      // expose public methods
      focus: A,
      shake: N,
      // private but needed by QSelect
      __updateRefocusTarget(O) {
        f = O || null;
      }
    }), je(K);
    function U() {
      return u("div", {
        role: "dialog",
        "aria-modal": B.value === !0 ? "true" : "false",
        ...a,
        class: T.value
      }, [
        u(Ct, {
          name: "q-transition--fade",
          appear: !0
        }, () => B.value === !0 ? u("div", {
          class: "q-dialog__backdrop fixed-full",
          style: y.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: I
        }) : null),
        u(
          Ct,
          x.value,
          () => o.value === !0 ? u("div", {
            ref: r,
            class: z.value,
            style: C.value,
            tabindex: -1,
            ...P.value
          }, xe(t.default)) : null
        )
      ]);
    }
    return F;
  }
}), di = 150;
te({
  name: "QDrawer",
  inheritAttrs: !1,
  props: {
    ..._a,
    ...Ue,
    side: {
      type: String,
      default: "left",
      validator: (e) => ["left", "right"].includes(e)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (e) => ["default", "desktop", "mobile"].includes(e),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...wa,
    "onLayout",
    "miniState"
  ],
  setup(e, { slots: t, emit: n, attrs: a }) {
    const l = ve(), { proxy: { $q: r } } = l, o = Ye(e, r), { preventBodyScroll: i } = fs(), { registerTimeout: c, removeTimeout: f } = dn(), d = Et(Wn, tt);
    if (d === tt)
      return console.error("QDrawer needs to be child of QLayout"), tt;
    let b, g = null, v;
    const m = E(
      e.behavior === "mobile" || e.behavior !== "desktop" && d.totalWidth.value <= e.breakpoint
    ), S = s(
      () => e.mini === !0 && m.value !== !0
    ), p = s(() => S.value === !0 ? e.miniWidth : e.width), x = E(
      e.showIfAbove === !0 && m.value === !1 ? !0 : e.modelValue === !0
    ), C = s(
      () => e.persistent !== !0 && (m.value === !0 || K.value === !0)
    );
    function y(le, G) {
      if (le !== !1 && d.animate(), he(0), m.value === !0) {
        const ce = d.instances[w.value];
        (ce == null ? void 0 : ce.belowBreakpoint) === !0 && ce.hide(!1), Y(1), d.isContainer.value !== !0 && i(!0);
      } else
        Y(0), le !== !1 && fe(!1);
      c(() => {
        le !== !1 && fe(!0), G !== !0 && n("show", le);
      }, di);
    }
    function h(le, G) {
      le !== !1 && d.animate(), Y(0), he(z.value * p.value), se(), G !== !0 ? c(() => {
        n("hide", le);
      }, di) : f();
    }
    const { show: _, hide: L } = Ca({
      showing: x,
      hideOnRouteChange: C,
      handleShow: y,
      handleHide: h
    });
    ds(x);
    const F = {
      belowBreakpoint: m,
      hide: L
    }, R = s(() => e.side === "right"), z = s(
      () => (r.lang.rtl === !0 ? -1 : 1) * (R.value === !0 ? 1 : -1)
    ), B = E(0), P = E(!1), T = E(!1), q = E(
      // starting with "hidden" for SSR
      p.value * z.value
    ), w = s(() => R.value === !0 ? "left" : "right"), A = s(() => x.value === !0 && m.value === !1 && e.overlay === !1 ? e.miniToOverlay === !0 ? e.miniWidth : p.value : 0), N = s(
      () => e.overlay === !0 || e.miniToOverlay === !0 || d.view.value.indexOf(R.value ? "R" : "L") !== -1 || r.platform.is.ios === !0 && d.isContainer.value === !0
    ), H = s(
      () => e.overlay === !1 && x.value === !0 && m.value === !1
    ), K = s(
      () => e.overlay === !0 && x.value === !0 && m.value === !1
    ), W = s(
      () => "fullscreen q-drawer__backdrop" + (x.value === !1 && P.value === !1 ? " hidden" : "")
    ), ue = s(() => ({
      backgroundColor: `rgba(0,0,0,${B.value * 0.4})`
    })), I = s(() => R.value === !0 ? d.rows.value.top[2] === "r" : d.rows.value.top[0] === "l"), k = s(() => R.value === !0 ? d.rows.value.bottom[2] === "r" : d.rows.value.bottom[0] === "l"), U = s(() => {
      const le = {};
      return d.header.space === !0 && I.value === !1 && (N.value === !0 ? le.top = `${d.header.offset}px` : d.header.space === !0 && (le.top = `${d.header.size}px`)), d.footer.space === !0 && k.value === !1 && (N.value === !0 ? le.bottom = `${d.footer.offset}px` : d.footer.space === !0 && (le.bottom = `${d.footer.size}px`)), le;
    }), O = s(() => {
      const le = {
        width: `${p.value}px`,
        transform: `translateX(${q.value}px)`
      };
      return m.value === !0 ? le : Object.assign(le, U.value);
    }), ne = s(
      () => "q-drawer__content fit " + (d.isContainer.value !== !0 ? "scroll" : "overflow-auto")
    ), $ = s(
      () => `q-drawer q-drawer--${e.side}` + (T.value === !0 ? " q-drawer--mini-animate" : "") + (e.bordered === !0 ? " q-drawer--bordered" : "") + (o.value === !0 ? " q-drawer--dark q-dark" : "") + (P.value === !0 ? " no-transition" : x.value === !0 ? "" : " q-layout--prevent-focus") + (m.value === !0 ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${S.value === !0 ? "mini" : "standard"}` + (N.value === !0 || H.value !== !0 ? " fixed" : "") + (e.overlay === !0 || e.miniToOverlay === !0 ? " q-drawer--on-top" : "") + (I.value === !0 ? " q-drawer--top-padding" : ""))
    ), Q = s(() => {
      const le = r.lang.rtl === !0 ? e.side : w.value;
      return [[
        Qt,
        _e,
        void 0,
        {
          [le]: !0,
          mouse: !0
        }
      ]];
    }), oe = s(() => {
      const le = r.lang.rtl === !0 ? w.value : e.side;
      return [[
        Qt,
        Be,
        void 0,
        {
          [le]: !0,
          mouse: !0
        }
      ]];
    }), j = s(() => {
      const le = r.lang.rtl === !0 ? w.value : e.side;
      return [[
        Qt,
        Be,
        void 0,
        {
          [le]: !0,
          mouse: !0,
          mouseAllDir: !0
        }
      ]];
    });
    function de() {
      Pe(m, e.behavior === "mobile" || e.behavior !== "desktop" && d.totalWidth.value <= e.breakpoint);
    }
    ae(m, (le) => {
      le === !0 ? (b = x.value, x.value === !0 && L(!1)) : e.overlay === !1 && e.behavior !== "mobile" && b !== !1 && (x.value === !0 ? (he(0), Y(0), se()) : _(!1));
    }), ae(() => e.side, (le, G) => {
      d.instances[G] === F && (d.instances[G] = void 0, d[G].space = !1, d[G].offset = 0), d.instances[le] = F, d[le].size = p.value, d[le].space = H.value, d[le].offset = A.value;
    }), ae(d.totalWidth, () => {
      (d.isContainer.value === !0 || document.qScrollPrevented !== !0) && de();
    }), ae(
      () => e.behavior + e.breakpoint,
      de
    ), ae(d.isContainer, (le) => {
      x.value === !0 && i(le !== !0), le === !0 && de();
    }), ae(d.scrollbarWidth, () => {
      he(x.value === !0 ? 0 : void 0);
    }), ae(A, (le) => {
      Te("offset", le);
    }), ae(H, (le) => {
      n("onLayout", le), Te("space", le);
    }), ae(R, () => {
      he();
    }), ae(p, (le) => {
      he(), Oe(e.miniToOverlay, le);
    }), ae(() => e.miniToOverlay, (le) => {
      Oe(le, p.value);
    }), ae(() => r.lang.rtl, () => {
      he();
    }), ae(() => e.mini, () => {
      e.noMiniAnimation || e.modelValue === !0 && (be(), d.animate());
    }), ae(S, (le) => {
      n("miniState", le);
    });
    function he(le) {
      le === void 0 ? Ke(() => {
        le = x.value === !0 ? 0 : p.value, he(z.value * le);
      }) : (d.isContainer.value === !0 && R.value === !0 && (m.value === !0 || Math.abs(le) === p.value) && (le += z.value * d.scrollbarWidth.value), q.value = le);
    }
    function Y(le) {
      B.value = le;
    }
    function fe(le) {
      const G = le === !0 ? "remove" : d.isContainer.value !== !0 ? "add" : "";
      G !== "" && document.body.classList[G]("q-body--drawer-toggle");
    }
    function be() {
      g !== null && clearTimeout(g), l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"), T.value = !0, g = setTimeout(() => {
        var le, G;
        g = null, T.value = !1, (G = (le = l == null ? void 0 : l.proxy) == null ? void 0 : le.$el) == null || G.classList.remove("q-drawer--mini-animate");
      }, 150);
    }
    function _e(le) {
      if (x.value !== !1)
        return;
      const G = p.value, ce = at(le.distance.x, 0, G);
      if (le.isFinal === !0) {
        ce >= Math.min(75, G) === !0 ? _() : (d.animate(), Y(0), he(z.value * G)), P.value = !1;
        return;
      }
      he(
        (r.lang.rtl === !0 ? R.value !== !0 : R.value) ? Math.max(G - ce, 0) : Math.min(0, ce - G)
      ), Y(
        at(ce / G, 0, 1)
      ), le.isFirst === !0 && (P.value = !0);
    }
    function Be(le) {
      if (x.value !== !0)
        return;
      const G = p.value, ce = le.direction === e.side, we = (r.lang.rtl === !0 ? ce !== !0 : ce) ? at(le.distance.x, 0, G) : 0;
      if (le.isFinal === !0) {
        Math.abs(we) < Math.min(75, G) === !0 ? (d.animate(), Y(1), he(0)) : L(), P.value = !1;
        return;
      }
      he(z.value * we), Y(at(1 - we / G, 0, 1)), le.isFirst === !0 && (P.value = !0);
    }
    function se() {
      i(!1), fe(!0);
    }
    function Te(le, G) {
      d.update(e.side, le, G);
    }
    function Pe(le, G) {
      le.value !== G && (le.value = G);
    }
    function Oe(le, G) {
      Te("size", le === !0 ? e.miniWidth : G);
    }
    return d.instances[e.side] = F, Oe(e.miniToOverlay, p.value), Te("space", H.value), Te("offset", A.value), e.showIfAbove === !0 && e.modelValue !== !0 && x.value === !0 && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", !0), ut(() => {
      n("onLayout", H.value), n("miniState", S.value), b = e.showIfAbove === !0;
      const le = () => {
        (x.value === !0 ? y : h)(!1, !0);
      };
      if (d.totalWidth.value !== 0) {
        Ke(le);
        return;
      }
      v = ae(d.totalWidth, () => {
        v(), v = void 0, x.value === !1 && e.showIfAbove === !0 && m.value === !1 ? _(!1) : le();
      });
    }), je(() => {
      v == null || v(), g !== null && (clearTimeout(g), g = null), x.value === !0 && se(), d.instances[e.side] === F && (d.instances[e.side] = void 0, Te("size", 0), Te("offset", 0), Te("space", !1));
    }), () => {
      const le = [];
      m.value === !0 && (e.noSwipeOpen === !1 && le.push(
        Kt(
          u("div", {
            key: "open",
            class: `q-drawer__opener fixed-${e.side}`,
            "aria-hidden": "true"
          }),
          Q.value
        )
      ), le.push(
        Wt(
          "div",
          {
            ref: "backdrop",
            class: W.value,
            style: ue.value,
            "aria-hidden": "true",
            onClick: L
          },
          void 0,
          "backdrop",
          e.noSwipeBackdrop !== !0 && x.value === !0,
          () => j.value
        )
      ));
      const G = S.value === !0 && t.mini !== void 0, ce = [
        u(
          "div",
          {
            ...a,
            key: "" + G,
            // required otherwise Vue will not diff correctly
            class: [
              ne.value,
              a.class
            ]
          },
          G === !0 ? t.mini() : xe(t.default)
        )
      ];
      return e.elevated === !0 && x.value === !0 && ce.push(
        u("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      ), le.push(
        Wt(
          "aside",
          { ref: "content", class: $.value, style: O.value },
          ce,
          "contentclose",
          e.noSwipeClose !== !0 && m.value === !0,
          () => oe.value
        )
      ), u("div", { class: "q-drawer-container" }, le);
    };
  }
});
function vs(e, t) {
  if (t && e === t)
    return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === !0)
    return e;
  const a = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, l = a.display;
  return l === "block" || l === "table" ? e : vs(e.parentNode);
}
function fr(e, t, n) {
  return !e || e === document.body ? !1 : n === !0 && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function ms(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0)
    n.setEnd(e, t.count);
  else if (t.count > 0)
    if (e.nodeType === Node.TEXT_NODE)
      e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
    else
      for (let a = 0; t.count !== 0 && a < e.childNodes.length; a++)
        n = ms(e.childNodes[a], t, n);
  return n;
}
var Sf = /^https?:\/\//, _f = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (fr(e.anchorNode, this.el, !0) && fr(e.focusNode, this.el, !0))
        return e;
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : !1;
  }
  get range() {
    const e = this.selection;
    return e != null && e.rangeCount ? e.getRangeAt(0) : this._range;
  }
  get parent() {
    const e = this.range;
    if (e !== null) {
      const t = e.startContainer;
      return t.nodeType === document.ELEMENT_NODE ? t : t.parentNode;
    }
    return null;
  }
  get blockParent() {
    const e = this.parent;
    return e !== null ? vs(e, this.el) : null;
  }
  save(e = this.range) {
    e !== null && (this._range = e);
  }
  restore(e = this._range) {
    const t = document.createRange(), n = document.getSelection();
    e !== null ? (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), n.removeAllRanges(), n.addRange(t)) : (n.selectAllChildren(this.el), n.collapseToEnd());
  }
  savePosition() {
    let e = -1, t;
    const n = document.getSelection(), a = this.el.parentNode;
    if (n.focusNode && fr(n.focusNode, a))
      for (t = n.focusNode, e = n.focusOffset; t && t !== a; )
        t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = ms(this.el, { count: this.savedPos });
      n && (n.collapse(!1), t.removeAllRanges(), t.addRange(n));
    }
  }
  hasParent(e, t) {
    const n = t ? this.parent : this.blockParent;
    return n !== null ? n.nodeName.toLowerCase() === e.toLowerCase() : !1;
  }
  hasParents(e, t, n = this.parent) {
    return n === null ? !1 : e.includes(n.nodeName.toLowerCase()) === !0 ? !0 : t === !0 ? this.hasParents(e, t, n.parentNode) : !1;
  }
  is(e, t) {
    if (this.selection === null)
      return !1;
    switch (e) {
      case "formatBlock":
        return t === "DIV" && this.parent === this.el || this.hasParent(t, t === "PRE");
      case "link":
        return this.hasParent("A", !0);
      case "fontSize":
        return document.queryCommandValue(e) === t;
      case "fontName":
        const n = document.queryCommandValue(e);
        return n === `"${t}"` || n === t;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return !1;
      default:
        const a = document.queryCommandState(e);
        return t !== void 0 ? a === t : a;
    }
  }
  getParentAttribute(e) {
    return this.parent !== null ? this.parent.getAttribute(e) : null;
  }
  can(e) {
    if (e === "outdent")
      return this.hasParents(["blockquote", "li"], !0);
    if (e === "indent")
      return this.hasParents(["li"], !0);
    if (e === "link")
      return this.selection !== null || this.is("link");
  }
  apply(e, t, n = _t) {
    if (e === "formatBlock")
      ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(t) && this.is(e, t) && (e = "outdent", t = null), t === "PRE" && this.is(e, "PRE") && (t = "P");
    else if (e === "print") {
      n();
      const a = window.open();
      a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), a.print(), a.close();
      return;
    } else if (e === "link") {
      const a = this.getParentAttribute("href");
      if (a === null) {
        const l = this.selectWord(this.selection), r = l ? l.toString() : "";
        if (!r.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = Sf.test(r) ? r : "https://", document.execCommand("createLink", !1, this.eVm.editLinkUrl.value), this.save(l.getRangeAt(0));
      } else
        this.eVm.editLinkUrl.value = a, this.range.selectNodeContents(this.parent), this.save();
      return;
    } else if (e === "fullscreen") {
      this.eVm.toggleFullscreen(), n();
      return;
    } else if (e === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === !1, this.eVm.setContent(this.eVm.props.modelValue), n();
      return;
    }
    document.execCommand(e, !1, t), n();
  }
  selectWord(e) {
    if (e === null || e.isCollapsed !== !0 || /* IE 11 */
    e.modify === void 0)
      return e;
    const t = document.createRange();
    t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
    const n = t.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    t.detach();
    const a = e.focusNode, l = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(a, l), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, wf = te({
  name: "QTooltip",
  inheritAttrs: !1,
  props: {
    ...wu,
    ..._a,
    ...Dn,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      ...Dn.transitionShow,
      default: "jump-down"
    },
    transitionHide: {
      ...Dn.transitionHide,
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: kl
    },
    self: {
      type: String,
      default: "top middle",
      validator: kl
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: Pu
    },
    scrollTarget: Xn,
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...wa
  ],
  setup(e, { slots: t, emit: n, attrs: a }) {
    let l, r;
    const o = ve(), { proxy: { $q: i } } = o, c = E(null), f = E(!1), d = s(() => ql(e.anchor, i.lang.rtl)), b = s(() => ql(e.self, i.lang.rtl)), g = s(() => e.persistent !== !0), { registerTick: v, removeTick: m } = ma(), { registerTimeout: S } = dn(), { transitionProps: p, transitionStyle: x } = Ol(e), { localScrollTarget: C, changeScrollEvent: y, unconfigureScrollTarget: h } = xu(e, ue), { anchorEl: _, canShow: L, anchorEvents: F } = Wr({ showing: f, configureAnchorEl: W }), { show: R, hide: z } = Ca({
      showing: f,
      canShow: L,
      handleShow: q,
      handleHide: w,
      hideOnRouteChange: g,
      processOnMount: !0
    });
    Object.assign(F, { delayShow: H, delayHide: K });
    const { showPortal: B, hidePortal: P, renderPortal: T } = Gr(o, c, k, "tooltip");
    if (i.platform.is.mobile === !0) {
      const U = {
        anchorEl: _,
        innerRef: c,
        onClickOutside(ne) {
          return z(ne), ne.target.classList.contains("q-dialog__backdrop") && Ae(ne), !0;
        }
      }, O = s(
        () => (
          // it doesn't has external model
          // (null is the default value)
          e.modelValue === null && e.persistent !== !0 && f.value === !0
        )
      );
      ae(O, (ne) => {
        (ne === !0 ? Ru : xl)(U);
      }), je(() => {
        xl(U);
      });
    }
    function q(U) {
      B(), v(() => {
        r = new MutationObserver(() => N()), r.observe(c.value, { attributes: !1, childList: !0, characterData: !0, subtree: !0 }), N(), ue();
      }), l === void 0 && (l = ae(
        () => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl,
        N
      )), S(() => {
        B(!0), n("show", U);
      }, e.transitionDuration);
    }
    function w(U) {
      m(), P(), A(), S(() => {
        P(!0), n("hide", U);
      }, e.transitionDuration);
    }
    function A() {
      r !== void 0 && (r.disconnect(), r = void 0), l !== void 0 && (l(), l = void 0), h(), Ft(F, "tooltipTemp");
    }
    function N() {
      Zr({
        targetEl: c.value,
        offset: e.offset,
        anchorEl: _.value,
        anchorOrigin: d.value,
        selfOrigin: b.value,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function H(U) {
      if (i.platform.is.mobile === !0) {
        Jt(), document.body.classList.add("non-selectable");
        const O = _.value, ne = ["touchmove", "touchcancel", "touchend", "click"].map(($) => [O, $, "delayHide", "passiveCapture"]);
        mt(F, "tooltipTemp", ne);
      }
      S(() => {
        R(U);
      }, e.delay);
    }
    function K(U) {
      i.platform.is.mobile === !0 && (Ft(F, "tooltipTemp"), Jt(), setTimeout(() => {
        document.body.classList.remove("non-selectable");
      }, 10)), S(() => {
        z(U);
      }, e.hideDelay);
    }
    function W() {
      if (e.noParentEvent === !0 || _.value === null) return;
      const U = i.platform.is.mobile === !0 ? [
        [_.value, "touchstart", "delayShow", "passive"]
      ] : [
        [_.value, "mouseenter", "delayShow", "passive"],
        [_.value, "mouseleave", "delayHide", "passive"]
      ];
      mt(F, "anchor", U);
    }
    function ue() {
      if (_.value !== null || e.scrollTarget !== void 0) {
        C.value = ln(_.value, e.scrollTarget);
        const U = e.noParentEvent === !0 ? N : z;
        y(C.value, U);
      }
    }
    function I() {
      return f.value === !0 ? u("div", {
        ...a,
        ref: c,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          a.class
        ],
        style: [
          a.style,
          x.value
        ],
        role: "tooltip"
      }, xe(t.default)) : null;
    }
    function k() {
      return u(Ct, p.value, I);
    }
    return je(A), Object.assign(o.proxy, { updatePosition: N }), T;
  }
}), Hl = te({
  name: "QItem",
  props: {
    ...Ue,
    ...Qa,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Ye(e, a), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: c, navigateOnClick: f } = Al(), d = E(null), b = E(null), g = s(
      () => e.clickable === !0 || r.value === !0 || e.tag === "label"
    ), v = s(
      () => e.disable !== !0 && g.value === !0
    ), m = s(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (l.value === !0 ? " q-item--dark" : "") + (r.value === !0 && e.active === null ? i.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (v.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), S = s(() => e.insetLevel === void 0 ? null : {
      ["padding" + (a.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function p(y) {
      v.value === !0 && (b.value !== null && y.qAvoidFocus !== !0 && (y.qKeyEvent !== !0 && document.activeElement === d.value ? b.value.focus() : document.activeElement === b.value && d.value.focus()), f(y));
    }
    function x(y) {
      if (v.value === !0 && Yt(y, [13, 32]) === !0) {
        Ae(y), y.qKeyEvent = !0;
        const h = new MouseEvent("click", y);
        h.qKeyEvent = !0, d.value.dispatchEvent(h);
      }
      n("keyup", y);
    }
    function C() {
      const y = ja(t.default, []);
      return v.value === !0 && y.unshift(
        u("div", { class: "q-focus-helper", tabindex: -1, ref: b })
      ), y;
    }
    return () => {
      const y = {
        ref: d,
        class: m.value,
        style: S.value,
        role: "listitem",
        onClick: p,
        onKeyup: x
      };
      return v.value === !0 ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : g.value === !0 && (y["aria-disabled"] = "true"), u(
        c.value,
        y,
        C()
      );
    };
  }
}), Tn = te({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => u("div", { class: n.value }, xe(t.default));
  }
});
function gs(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function ho(e) {
  return u("div", { class: "q-editor__toolbar-group" }, e);
}
function hs(e, t, n, a = !1) {
  const l = a || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : !1), r = [];
  if (e.$q.platform.is.desktop && (t.tip || t.htmlTip)) {
    const o = t.key ? u("div", [
      u("small", `(CTRL + ${String.fromCharCode(t.key)})`)
    ]) : null;
    r.push(
      u(wf, { delay: 1e3 }, () => [
        u("div", t.htmlTip ? { innerHTML: t.htmlTip } : t.tip),
        o
      ])
    );
  }
  return u(et, {
    ...e.buttonProps.value,
    icon: t.icon !== null ? t.icon : void 0,
    color: l ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor,
    textColor: l && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor,
    label: t.label,
    "aria-label": t.label == null ? t.tip : void 0,
    disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : !0 : !1,
    size: "sm",
    onClick(o) {
      n == null || n(), gs(o, t, e);
    }
  }, () => r);
}
function Cf(e, t) {
  const n = t.list === "only-icons";
  let a = t.label, l = t.icon !== null ? t.icon : void 0, r, o;
  function i() {
    f.component.proxy.hide();
  }
  if (n)
    o = t.options.map((d) => {
      const b = d.type === void 0 ? e.caret.is(d.cmd, d.param) : !1;
      return b && (a = d.tip, l = d.icon !== null ? d.icon : void 0), hs(e, d, i, b);
    }), r = e.toolbarBackgroundClass.value, o = [
      ho(o)
    ];
  else {
    const d = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, b = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, g = t.list === "no-icons";
    o = t.options.map((v) => {
      const m = v.disable ? v.disable(e) : !1, S = v.type === void 0 ? e.caret.is(v.cmd, v.param) : !1;
      S && (a = v.tip, l = v.icon !== null ? v.icon : void 0);
      const p = v.htmlTip;
      return u(Hl, {
        active: S,
        activeClass: d,
        clickable: !0,
        disable: m,
        dense: !0,
        onClick(x) {
          var C;
          i(), (x == null ? void 0 : x.qAvoidFocus) !== !0 && ((C = e.contentRef.value) == null || C.focus()), e.caret.restore(), gs(x, v, e);
        }
      }, () => [
        g === !0 ? null : u(
          Tn,
          {
            class: S ? d : b,
            side: !0
          },
          () => u(Xe, { name: v.icon !== null ? v.icon : void 0 })
        ),
        u(
          Tn,
          p ? () => u("div", { class: "text-no-wrap", innerHTML: v.htmlTip }) : v.tip ? () => u("div", { class: "text-no-wrap" }, v.tip) : void 0
        )
      ]);
    }), r = [e.toolbarBackgroundClass.value, b];
  }
  const c = t.highlight && a !== t.label, f = u(pd, {
    ...e.buttonProps.value,
    noCaps: !0,
    noWrap: !0,
    color: c ? e.props.toolbarToggleColor : e.props.toolbarColor,
    textColor: c && !e.props.toolbarPush ? null : e.props.toolbarTextColor,
    label: t.fixedLabel ? t.label : a,
    icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : l,
    contentClass: r,
    onShow: (d) => e.emit("dropdownShow", d),
    onHide: (d) => e.emit("dropdownHide", d),
    onBeforeShow: (d) => e.emit("dropdownBeforeShow", d),
    onBeforeHide: (d) => e.emit("dropdownBeforeHide", d)
  }, () => o);
  return f;
}
function xf(e) {
  if (e.caret)
    return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => ho(
      t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? !1 : n.type === "slot" ? xe(e.slots[n.slot]) : n.type === "dropdown" ? Cf(e, n) : hs(e, n))
    ));
}
function kf(e, t, n, a = {}) {
  const l = Object.keys(a);
  if (l.length === 0)
    return {};
  const r = {
    default_font: {
      cmd: "fontName",
      param: e,
      icon: n,
      tip: t
    }
  };
  return l.forEach((o) => {
    const i = a[o];
    r[o] = {
      cmd: "fontName",
      param: i,
      icon: n,
      tip: i,
      htmlTip: `<font face="${i}">${i}</font>`
    };
  }), r;
}
function qf(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const a = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", !1, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [
      u("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `),
      u("input", {
        key: "qedt_btm_input",
        class: "col q-editor__link-input",
        value: n,
        onInput: (l) => {
          ft(l), n = l.target.value;
        },
        onKeydown: (l) => {
          if (Yn(l) !== !0)
            switch (l.keyCode) {
              case 13:
                return kt(l), a();
              case 27:
                kt(l), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
                break;
            }
        }
      }),
      ho([
        u(et, {
          key: "qedt_btm_rem",
          ...e.buttonProps.value,
          label: e.$q.lang.label.remove,
          noCaps: !0,
          onClick: () => {
            e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
          }
        }),
        u(et, {
          key: "qedt_btm_upd",
          ...e.buttonProps.value,
          label: e.$q.lang.label.update,
          noCaps: !0,
          onClick: a
        })
      ])
    ];
  }
}
var fi = /^on[A-Z]/;
function bs() {
  const { attrs: e, vnode: t } = ve(), n = {
    listeners: E({}),
    attributes: E({})
  };
  function a() {
    const l = {}, r = {};
    for (const o in e)
      o !== "class" && o !== "style" && fi.test(o) === !1 && (l[o] = e[o]);
    for (const o in t.props)
      fi.test(o) === !0 && (r[o] = t.props[o]);
    n.attributes.value = l, n.listeners.value = r;
  }
  return Ha(a), a(), n;
}
var Tf = Object.prototype.toString, vr = Object.prototype.hasOwnProperty, Mf = new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]")
);
function vi(e) {
  if (e !== Object(e) || Mf.has(Tf.call(e)) === !0 || e.constructor && vr.call(e, "constructor") === !1 && vr.call(e.constructor.prototype, "isPrototypeOf") === !1)
    return !1;
  let t;
  for (t in e)
    ;
  return t === void 0 || vr.call(e, t);
}
function ys() {
  let e, t, n, a, l, r, o = arguments[0] || {}, i = 1, c = !1;
  const f = arguments.length;
  for (typeof o == "boolean" && (c = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), f === i && (o = this, i--); i < f; i++)
    if ((e = arguments[i]) !== null)
      for (t in e)
        n = o[t], a = e[t], o !== a && (c === !0 && a && ((l = Array.isArray(a)) || vi(a) === !0) ? (l === !0 ? r = Array.isArray(n) === !0 ? n : [] : r = vi(n) === !0 ? n : {}, o[t] = ys(c, r, a)) : a !== void 0 && (o[t] = a));
  return o;
}
te({
  name: "QEditor",
  props: {
    ...Ue,
    ...ro,
    modelValue: {
      type: String,
      required: !0
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: "10rem"
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    placeholder: String,
    toolbar: {
      type: Array,
      validator: (e) => e.length === 0 || e.every((t) => t.length),
      // long line on purpose for API validation purposes:
      default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]]
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: "primary"
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    paragraphTag: {
      type: String,
      validator: (e) => ["div", "p"].includes(e),
      default: "div"
    },
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  emits: [
    ...oo,
    "update:modelValue",
    "keydown",
    "click",
    "focus",
    "blur",
    "dropdownShow",
    "dropdownHide",
    "dropdownBeforeShow",
    "dropdownBeforeHide",
    "linkShow",
    "linkHide"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = Ye(e, l), { inFullscreen: o, toggleFullscreen: i } = io(), c = bs(), f = E(null), d = E(null), b = E(null), g = E(!1), v = s(() => !e.readonly && !e.disable);
    let m, S, p = e.modelValue;
    document.execCommand("defaultParagraphSeparator", !1, e.paragraphTag), m = window.getComputedStyle(document.body).fontFamily;
    const x = s(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), C = s(() => ({
      type: "a",
      flat: e.toolbarOutline !== !0 && e.toolbarPush !== !0,
      noWrap: !0,
      outline: e.toolbarOutline,
      push: e.toolbarPush,
      rounded: e.toolbarRounded,
      dense: !0,
      color: e.toolbarColor,
      disable: !v.value,
      size: "sm"
    })), y = s(() => {
      const $ = l.lang.editor, Q = l.iconSet.editor;
      return {
        bold: { cmd: "bold", icon: Q.bold, tip: $.bold, key: 66 },
        italic: { cmd: "italic", icon: Q.italic, tip: $.italic, key: 73 },
        strike: { cmd: "strikeThrough", icon: Q.strikethrough, tip: $.strikethrough, key: 83 },
        underline: { cmd: "underline", icon: Q.underline, tip: $.underline, key: 85 },
        unordered: { cmd: "insertUnorderedList", icon: Q.unorderedList, tip: $.unorderedList },
        ordered: { cmd: "insertOrderedList", icon: Q.orderedList, tip: $.orderedList },
        subscript: { cmd: "subscript", icon: Q.subscript, tip: $.subscript, htmlTip: "x<subscript>2</subscript>" },
        superscript: { cmd: "superscript", icon: Q.superscript, tip: $.superscript, htmlTip: "x<superscript>2</superscript>" },
        link: { cmd: "link", disable: (oe) => oe.caret && !oe.caret.can("link"), icon: Q.hyperlink, tip: $.hyperlink, key: 76 },
        fullscreen: { cmd: "fullscreen", icon: Q.toggleFullscreen, tip: $.toggleFullscreen, key: 70 },
        viewsource: { cmd: "viewsource", icon: Q.viewSource, tip: $.viewSource },
        quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: Q.quote, tip: $.quote, key: 81 },
        left: { cmd: "justifyLeft", icon: Q.left, tip: $.left },
        center: { cmd: "justifyCenter", icon: Q.center, tip: $.center },
        right: { cmd: "justifyRight", icon: Q.right, tip: $.right },
        justify: { cmd: "justifyFull", icon: Q.justify, tip: $.justify },
        print: { type: "no-state", cmd: "print", icon: Q.print, tip: $.print, key: 80 },
        outdent: { type: "no-state", disable: (oe) => oe.caret && !oe.caret.can("outdent"), cmd: "outdent", icon: Q.outdent, tip: $.outdent },
        indent: { type: "no-state", disable: (oe) => oe.caret && !oe.caret.can("indent"), cmd: "indent", icon: Q.indent, tip: $.indent },
        removeFormat: { type: "no-state", cmd: "removeFormat", icon: Q.removeFormat, tip: $.removeFormat },
        hr: { type: "no-state", cmd: "insertHorizontalRule", icon: Q.hr, tip: $.hr },
        undo: { type: "no-state", cmd: "undo", icon: Q.undo, tip: $.undo, key: 90 },
        redo: { type: "no-state", cmd: "redo", icon: Q.redo, tip: $.redo, key: 89 },
        h1: { cmd: "formatBlock", param: "H1", icon: Q.heading1 || Q.heading, tip: $.heading1, htmlTip: `<h1 class="q-ma-none">${$.heading1}</h1>` },
        h2: { cmd: "formatBlock", param: "H2", icon: Q.heading2 || Q.heading, tip: $.heading2, htmlTip: `<h2 class="q-ma-none">${$.heading2}</h2>` },
        h3: { cmd: "formatBlock", param: "H3", icon: Q.heading3 || Q.heading, tip: $.heading3, htmlTip: `<h3 class="q-ma-none">${$.heading3}</h3>` },
        h4: { cmd: "formatBlock", param: "H4", icon: Q.heading4 || Q.heading, tip: $.heading4, htmlTip: `<h4 class="q-ma-none">${$.heading4}</h4>` },
        h5: { cmd: "formatBlock", param: "H5", icon: Q.heading5 || Q.heading, tip: $.heading5, htmlTip: `<h5 class="q-ma-none">${$.heading5}</h5>` },
        h6: { cmd: "formatBlock", param: "H6", icon: Q.heading6 || Q.heading, tip: $.heading6, htmlTip: `<h6 class="q-ma-none">${$.heading6}</h6>` },
        p: { cmd: "formatBlock", param: e.paragraphTag, icon: Q.heading, tip: $.paragraph },
        code: { cmd: "formatBlock", param: "PRE", icon: Q.code, htmlTip: `<code>${$.code}</code>` },
        "size-1": { cmd: "fontSize", param: "1", icon: Q.size1 || Q.size, tip: $.size1, htmlTip: `<font size="1">${$.size1}</font>` },
        "size-2": { cmd: "fontSize", param: "2", icon: Q.size2 || Q.size, tip: $.size2, htmlTip: `<font size="2">${$.size2}</font>` },
        "size-3": { cmd: "fontSize", param: "3", icon: Q.size3 || Q.size, tip: $.size3, htmlTip: `<font size="3">${$.size3}</font>` },
        "size-4": { cmd: "fontSize", param: "4", icon: Q.size4 || Q.size, tip: $.size4, htmlTip: `<font size="4">${$.size4}</font>` },
        "size-5": { cmd: "fontSize", param: "5", icon: Q.size5 || Q.size, tip: $.size5, htmlTip: `<font size="5">${$.size5}</font>` },
        "size-6": { cmd: "fontSize", param: "6", icon: Q.size6 || Q.size, tip: $.size6, htmlTip: `<font size="6">${$.size6}</font>` },
        "size-7": { cmd: "fontSize", param: "7", icon: Q.size7 || Q.size, tip: $.size7, htmlTip: `<font size="7">${$.size7}</font>` }
      };
    }), h = s(() => {
      const $ = e.definitions || {}, Q = e.definitions || e.fonts ? ys(
        !0,
        {},
        y.value,
        $,
        kf(
          m,
          l.lang.editor.defaultFont,
          l.iconSet.editor.font,
          e.fonts
        )
      ) : y.value;
      return e.toolbar.map(
        (oe) => oe.map((j) => {
          if (j.options)
            return {
              type: "dropdown",
              icon: j.icon,
              label: j.label,
              size: "sm",
              dense: !0,
              fixedLabel: j.fixedLabel,
              fixedIcon: j.fixedIcon,
              highlight: j.highlight,
              list: j.list,
              options: j.options.map((he) => Q[he])
            };
          const de = Q[j];
          return de ? de.type === "no-state" || $[j] && (de.cmd === void 0 || y.value[de.cmd] && y.value[de.cmd].type === "no-state") ? de : Object.assign({ type: "toggle" }, de) : {
            type: "slot",
            slot: j
          };
        })
      );
    }), _ = {
      $q: l,
      props: e,
      slots: t,
      emit: n,
      // caret (will get injected after mount)
      inFullscreen: o,
      toggleFullscreen: i,
      runCmd: k,
      isViewingSource: g,
      editLinkUrl: b,
      toolbarBackgroundClass: x,
      buttonProps: C,
      contentRef: d,
      buttons: h,
      setContent: I
    };
    ae(() => e.modelValue, ($) => {
      p !== $ && (p = $, I($, !0));
    }), ae(b, ($) => {
      n(`link${$ ? "Show" : "Hide"}`);
    });
    const L = s(() => e.toolbar && e.toolbar.length !== 0), F = s(() => {
      const $ = {}, Q = (oe) => {
        oe.key && ($[oe.key] = {
          cmd: oe.cmd,
          param: oe.param
        });
      };
      return h.value.forEach((oe) => {
        oe.forEach((j) => {
          j.options ? j.options.forEach(Q) : Q(j);
        });
      }), $;
    }), R = s(() => o.value ? e.contentStyle : [
      {
        minHeight: e.minHeight,
        height: e.height,
        maxHeight: e.maxHeight
      },
      e.contentStyle
    ]), z = s(
      () => `q-editor q-editor--${g.value === !0 ? "source" : "default"}` + (e.disable === !0 ? " disabled" : "") + (o.value === !0 ? " fullscreen column" : "") + (e.square === !0 ? " q-editor--square no-border-radius" : "") + (e.flat === !0 ? " q-editor--flat" : "") + (e.dense === !0 ? " q-editor--dense" : "") + (r.value === !0 ? " q-editor--dark q-dark" : "")
    ), B = s(() => [
      e.contentClass,
      "q-editor__content",
      { col: o.value, "overflow-auto": o.value || e.maxHeight }
    ]), P = s(() => e.disable === !0 ? { "aria-disabled": "true" } : {});
    function T() {
      if (d.value !== null) {
        const $ = `inner${g.value === !0 ? "Text" : "HTML"}`, Q = d.value[$];
        Q !== e.modelValue && (p = Q, n("update:modelValue", Q));
      }
    }
    function q($) {
      if (n("keydown", $), $.ctrlKey !== !0 || Yn($) === !0) {
        U();
        return;
      }
      const Q = $.keyCode, oe = F.value[Q];
      if (oe !== void 0) {
        const { cmd: j, param: de } = oe;
        Ae($), k(j, de, !1);
      }
    }
    function w($) {
      U(), n("click", $);
    }
    function A($) {
      if (d.value !== null) {
        const { scrollTop: Q, scrollHeight: oe } = d.value;
        S = oe - Q;
      }
      _.caret.save(), n("blur", $);
    }
    function N($) {
      Ke(() => {
        d.value !== null && S !== void 0 && (d.value.scrollTop = d.value.scrollHeight - S);
      }), n("focus", $);
    }
    function H($) {
      const Q = f.value;
      if (Q !== null && Q.contains($.target) === !0 && ($.relatedTarget === null || Q.contains($.relatedTarget) !== !0)) {
        const oe = `inner${g.value === !0 ? "Text" : "HTML"}`;
        _.caret.restorePosition(d.value[oe].length), U();
      }
    }
    function K($) {
      const Q = f.value;
      Q !== null && Q.contains($.target) === !0 && ($.relatedTarget === null || Q.contains($.relatedTarget) !== !0) && (_.caret.savePosition(), U());
    }
    function W() {
      S = void 0;
    }
    function ue($) {
      _.caret.save();
    }
    function I($, Q) {
      if (d.value !== null) {
        Q === !0 && _.caret.savePosition();
        const oe = `inner${g.value === !0 ? "Text" : "HTML"}`;
        d.value[oe] = $, Q === !0 && (_.caret.restorePosition(d.value[oe].length), U());
      }
    }
    function k($, Q, oe = !0) {
      O(), _.caret.restore(), _.caret.apply($, Q, () => {
        O(), _.caret.save(), oe && U();
      });
    }
    function U() {
      setTimeout(() => {
        b.value = null, a.$forceUpdate();
      }, 1);
    }
    function O() {
      xa(() => {
        var $;
        ($ = d.value) == null || $.focus({ preventScroll: !0 });
      });
    }
    function ne() {
      return d.value;
    }
    return ut(() => {
      _.caret = a.caret = new _f(d.value, _), I(e.modelValue), U(), document.addEventListener("selectionchange", ue);
    }), je(() => {
      document.removeEventListener("selectionchange", ue);
    }), Object.assign(a, {
      runCmd: k,
      refreshToolbar: U,
      focus: O,
      getContentEl: ne
    }), () => {
      let $;
      if (L.value) {
        const Q = [
          u("div", {
            key: "qedt_top",
            class: "q-editor__toolbar row no-wrap scroll-x" + x.value
          }, xf(_))
        ];
        b.value !== null && Q.push(
          u("div", {
            key: "qedt_btm",
            class: "q-editor__toolbar row no-wrap items-center scroll-x" + x.value
          }, qf(_))
        ), $ = u("div", {
          key: "toolbar_ctainer",
          class: "q-editor__toolbars-container"
        }, Q);
      }
      return u("div", {
        ref: f,
        class: z.value,
        style: { height: o.value === !0 ? "100%" : null },
        ...P.value,
        onFocusin: H,
        onFocusout: K
      }, [
        $,
        u("div", {
          ref: d,
          style: R.value,
          class: B.value,
          contenteditable: v.value,
          placeholder: e.placeholder,
          ...c.listeners.value,
          onInput: T,
          onKeydown: q,
          onClick: w,
          onBlur: A,
          onFocus: N,
          // clean saved scroll position
          onMousedown: W,
          onTouchstartPassive: W
        })
      ]);
    };
  }
});
var Pr = te({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = s(() => parseInt(e.lines, 10)), a = s(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), l = s(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => u("div", {
      style: l.value,
      class: a.value
    }, xe(t.default));
  }
}), bo = te({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(e, { slots: t, emit: n }) {
    let a = !1, l, r, o = null, i = null, c, f;
    function d() {
      l == null || l(), l = null, a = !1, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null || r.removeEventListener("transitionend", c), c = null;
    }
    function b(S, p, x) {
      p !== void 0 && (S.style.height = `${p}px`), S.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, a = !0, l = x;
    }
    function g(S, p) {
      S.style.overflowY = null, S.style.height = null, S.style.transition = null, d(), p !== f && n(p);
    }
    function v(S, p) {
      let x = 0;
      r = S, a === !0 ? (d(), x = S.offsetHeight === S.scrollHeight ? 0 : void 0) : (f = "hide", S.style.overflowY = "hidden"), b(S, x, p), o = setTimeout(() => {
        o = null, S.style.height = `${S.scrollHeight}px`, c = (C) => {
          i = null, (Object(C) !== C || C.target === S) && g(S, "show");
        }, S.addEventListener("transitionend", c), i = setTimeout(c, e.duration * 1.1);
      }, 100);
    }
    function m(S, p) {
      let x;
      r = S, a === !0 ? d() : (f = "show", S.style.overflowY = "hidden", x = S.scrollHeight), b(S, x, p), o = setTimeout(() => {
        o = null, S.style.height = 0, c = (C) => {
          i = null, (Object(C) !== C || C.target === S) && g(S, "hide");
        }, S.addEventListener("transitionend", c), i = setTimeout(c, e.duration * 1.1);
      }, 100);
    }
    return je(() => {
      a === !0 && d();
    }), () => u(Ct, {
      css: !1,
      appear: e.appear,
      onEnter: v,
      onLeave: m
    }, t.default);
  }
}), $f = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, mr = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, Qn = te({
  name: "QSeparator",
  props: {
    ...Ue,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = ve(), n = Ye(e, t.proxy.$q), a = s(() => e.vertical === !0 ? "vertical" : "horizontal"), l = s(() => ` q-separator--${a.value}`), r = s(() => e.inset !== !1 ? `${l.value}-${$f[e.inset]}` : ""), o = s(
      () => `q-separator${l.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), i = s(() => {
      const c = {};
      if (e.size !== void 0 && (c[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const f = e.spaced === !0 ? `${mr.md}px` : e.spaced in mr ? `${mr[e.spaced]}px` : e.spaced, d = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        c[`margin${d[0]}`] = c[`margin${d[1]}`] = f;
      }
      return c;
    });
    return () => u("hr", {
      class: o.value,
      style: i.value,
      "aria-orientation": a.value
    });
  }
}), Ln = dc({}), Bf = Object.keys(Qa);
te({
  name: "QExpansionItem",
  props: {
    ...Qa,
    ..._a,
    ...Ue,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: {},
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...wa,
    "click",
    "afterShow",
    "afterHide"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Ye(e, a), r = E(
      e.modelValue !== null ? e.modelValue : e.defaultOpened
    ), o = E(null), i = Nl(), { show: c, hide: f, toggle: d } = Ca({ showing: r });
    let b, g;
    const v = s(
      () => `q-expansion-item q-item-type q-expansion-item--${r.value === !0 ? "expanded" : "collapsed"} q-expansion-item--${e.popup === !0 ? "popup" : "standard"}`
    ), m = s(() => e.contentInsetLevel === void 0 ? null : {
      ["padding" + (a.lang.rtl === !0 ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px"
    }), S = s(
      () => e.disable !== !0 && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")
    ), p = s(() => {
      const H = {};
      return Bf.forEach((K) => {
        H[K] = e[K];
      }), H;
    }), x = s(
      () => S.value === !0 || e.expandIconToggle !== !0
    ), C = s(() => e.expandedIcon !== void 0 && r.value === !0 ? e.expandedIcon : e.expandIcon || a.iconSet.expansionItem[e.denseToggle === !0 ? "denseIcon" : "icon"]), y = s(
      () => e.disable !== !0 && (S.value === !0 || e.expandIconToggle === !0)
    ), h = s(() => ({
      expanded: r.value === !0,
      detailsId: i.value,
      toggle: d,
      show: c,
      hide: f
    })), _ = s(() => {
      const H = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : a.lang.label[r.value === !0 ? "collapse" : "expand"](e.label);
      return {
        role: "button",
        "aria-expanded": r.value === !0 ? "true" : "false",
        "aria-controls": i.value,
        "aria-label": H
      };
    });
    ae(() => e.group, (H) => {
      g == null || g(), H !== void 0 && P();
    });
    function L(H) {
      S.value !== !0 && d(H), n("click", H);
    }
    function F(H) {
      H.keyCode === 13 && R(H, !0);
    }
    function R(H, K) {
      var W;
      K !== !0 && H.qAvoidFocus !== !0 && ((W = o.value) == null || W.focus()), d(H), Ae(H);
    }
    function z() {
      n("afterShow");
    }
    function B() {
      n("afterHide");
    }
    function P() {
      b === void 0 && (b = Na()), r.value === !0 && (Ln[e.group] = b);
      const H = ae(r, (W) => {
        W === !0 ? Ln[e.group] = b : Ln[e.group] === b && delete Ln[e.group];
      }), K = ae(
        () => Ln[e.group],
        (W, ue) => {
          ue === b && W !== void 0 && W !== b && f();
        }
      );
      g = () => {
        H(), K(), Ln[e.group] === b && delete Ln[e.group], g = void 0;
      };
    }
    function T() {
      const H = {
        class: [
          `q-focusable relative-position cursor-pointer${e.denseToggle === !0 && e.switchToggleSide === !0 ? " items-end" : ""}`,
          e.expandIconClass
        ],
        side: e.switchToggleSide !== !0,
        avatar: e.switchToggleSide
      }, K = [
        u(Xe, {
          class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === !0 ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: C.value
        })
      ];
      return y.value === !0 && (Object.assign(H, {
        tabindex: 0,
        ..._.value,
        onClick: R,
        onKeyup: F
      }), K.unshift(
        u("div", {
          ref: o,
          class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
          tabindex: -1
        })
      )), u(Tn, H, () => K);
    }
    function q() {
      let H;
      return t.header !== void 0 ? H = [].concat(t.header(h.value)) : (H = [
        u(Tn, () => [
          u(Pr, { lines: e.labelLines }, () => e.label || ""),
          e.caption ? u(Pr, { lines: e.captionLines, caption: !0 }, () => e.caption) : null
        ])
      ], e.icon && H[e.switchToggleSide === !0 ? "push" : "unshift"](
        u(Tn, {
          side: e.switchToggleSide === !0,
          avatar: e.switchToggleSide !== !0
        }, () => u(Xe, { name: e.icon }))
      )), e.disable !== !0 && e.hideExpandIcon !== !0 && H[e.switchToggleSide === !0 ? "unshift" : "push"](
        T()
      ), H;
    }
    function w() {
      const H = {
        ref: "item",
        style: e.headerStyle,
        class: e.headerClass,
        dark: l.value,
        disable: e.disable,
        dense: e.dense,
        insetLevel: e.headerInsetLevel
      };
      return x.value === !0 && (H.clickable = !0, H.onClick = L, Object.assign(
        H,
        S.value === !0 ? p.value : _.value
      )), u(Hl, H, q);
    }
    function A() {
      return Kt(
        u("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: m.value,
          id: i.value
        }, xe(t.default)),
        [[
          Xi,
          r.value
        ]]
      );
    }
    function N() {
      const H = [
        w(),
        u(bo, {
          duration: e.duration,
          onShow: z,
          onHide: B
        }, A)
      ];
      return e.expandSeparator === !0 && H.push(
        u(Qn, {
          class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
          dark: l.value
        }),
        u(Qn, {
          class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
          dark: l.value
        })
      ), H;
    }
    return e.group !== void 0 && P(), je(() => {
      g == null || g();
    }), () => u("div", { class: v.value }, [
      u("div", { class: "q-expansion-item__container relative-position" }, N())
    ]);
  }
});
var Lf = ["top", "right", "bottom", "left"], Ar = {
  type: {
    type: String,
    default: "a"
  },
  outline: Boolean,
  push: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  color: String,
  textColor: String,
  glossy: Boolean,
  square: Boolean,
  padding: String,
  label: {
    type: [String, Number],
    default: ""
  },
  labelPosition: {
    type: String,
    default: "right",
    validator: (e) => Lf.includes(e)
  },
  externalLabel: Boolean,
  hideLabel: {
    type: Boolean
  },
  labelClass: [Array, String, Object],
  labelStyle: [Array, String, Object],
  disable: Boolean,
  tabindex: [Number, String]
};
function ps(e, t) {
  return {
    formClass: s(
      () => `q-fab--form-${e.square === !0 ? "square" : "rounded"}`
    ),
    stacked: s(
      () => e.externalLabel === !1 && ["top", "bottom"].includes(e.labelPosition)
    ),
    labelProps: s(() => {
      if (e.externalLabel === !0) {
        const n = e.hideLabel === null ? t.value === !1 : e.hideLabel;
        return {
          action: "push",
          data: {
            class: [
              e.labelClass,
              `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === !0 ? " q-fab__label--external-hidden" : "")
            ],
            style: e.labelStyle
          }
        };
      }
      return {
        action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push",
        data: {
          class: [
            e.labelClass,
            `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === !0 ? " q-fab__label--internal-hidden" : "")
          ],
          style: e.labelStyle
        }
      };
    })
  };
}
var Ff = ["up", "right", "down", "left"], zf = ["left", "center", "right"];
te({
  name: "QFab",
  props: {
    ...Ar,
    ..._a,
    icon: String,
    activeIcon: String,
    hideIcon: Boolean,
    hideLabel: {
      ...Ar.hideLabel,
      default: null
    },
    direction: {
      type: String,
      default: "right",
      validator: (e) => Ff.includes(e)
    },
    persistent: Boolean,
    verticalActionsAlign: {
      type: String,
      default: "center",
      validator: (e) => zf.includes(e)
    }
  },
  emits: wa,
  setup(e, { slots: t }) {
    const n = E(null), a = E(e.modelValue === !0), l = Nl(), { proxy: { $q: r } } = ve(), { formClass: o, labelProps: i } = ps(e, a), c = s(() => e.persistent !== !0), { hide: f, toggle: d } = Ca({
      showing: a,
      hideOnRouteChange: c
    }), b = s(() => ({ opened: a.value })), g = s(
      () => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (a.value === !0 ? " q-fab--opened" : " q-fab--closed")
    ), v = s(
      () => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${a.value === !0 ? "opened" : "closed"}`
    ), m = s(() => {
      const C = {
        id: l.value,
        role: "menu"
      };
      return a.value !== !0 && (C["aria-hidden"] = "true"), C;
    }), S = s(
      () => `q-fab__icon-holder  q-fab__icon-holder--${a.value === !0 ? "opened" : "closed"}`
    );
    function p(C, y) {
      const h = t[C], _ = `q-fab__${C} absolute-full`;
      return h === void 0 ? u(Xe, { class: _, name: e[y] || r.iconSet.fab[y] }) : u("div", { class: _ }, h(b.value));
    }
    function x() {
      const C = [];
      return e.hideIcon !== !0 && C.push(
        u("div", { class: S.value }, [
          p("icon", "icon"),
          p("active-icon", "activeIcon")
        ])
      ), (e.label !== "" || t.label !== void 0) && C[i.value.action](
        u("div", i.value.data, t.label !== void 0 ? t.label(b.value) : [e.label])
      ), gt(t.tooltip, C);
    }
    return fn(ru, {
      showing: a,
      onChildClick(C) {
        var y;
        f(C), (C == null ? void 0 : C.qAvoidFocus) !== !0 && ((y = n.value) == null || y.$el.focus());
      }
    }), () => u("div", {
      class: g.value
    }, [
      u(et, {
        ref: n,
        class: o.value,
        ...e,
        noWrap: !0,
        stack: e.stacked,
        align: void 0,
        icon: void 0,
        label: void 0,
        noCaps: !0,
        fab: !0,
        "aria-expanded": a.value === !0 ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": l.value,
        onClick: d
      }, x),
      u("div", { class: v.value, ...m.value }, xe(t.default))
    ]);
  }
});
var Ss = {
  start: "self-end",
  center: "self-center",
  end: "self-start"
}, Rf = Object.keys(Ss);
te({
  name: "QFabAction",
  props: {
    ...Ar,
    icon: {
      type: String,
      default: ""
    },
    anchor: {
      type: String,
      validator: (e) => Rf.includes(e)
    },
    to: [String, Object],
    replace: Boolean
  },
  emits: ["click"],
  setup(e, { slots: t, emit: n }) {
    const a = Et(ru, () => ({
      showing: { value: !0 },
      onChildClick: _t
    })), { formClass: l, labelProps: r } = ps(e, a.showing), o = s(() => {
      const b = Ss[e.anchor];
      return l.value + (b !== void 0 ? ` ${b}` : "");
    }), i = s(
      () => e.disable === !0 || a.showing.value !== !0
    );
    function c(b) {
      a.onChildClick(b), n("click", b);
    }
    function f() {
      const b = [];
      return t.icon !== void 0 ? b.push(t.icon()) : e.icon !== "" && b.push(
        u(Xe, { name: e.icon })
      ), (e.label !== "" || t.label !== void 0) && b[r.value.action](
        u("div", r.value.data, t.label !== void 0 ? t.label() : [e.label])
      ), gt(t.default, b);
    }
    const d = ve();
    return Object.assign(d.proxy, { click: c }), () => u(et, {
      class: o.value,
      ...e,
      noWrap: !0,
      stack: e.stacked,
      icon: void 0,
      label: void 0,
      noCaps: !0,
      fabMini: !0,
      disable: i.value,
      onClick: c
    }, f);
  }
});
function Pf({ validate: e, resetValidation: t, requiresQForm: n }) {
  const a = Et(ou, !1);
  if (a !== !1) {
    const { props: l, proxy: r } = ve();
    Object.assign(r, { validate: e, resetValidation: t }), ae(() => l.disable, (o) => {
      o === !0 ? (typeof t == "function" && t(), a.unbindComponent(r)) : a.bindComponent(r);
    }), ut(() => {
      l.disable !== !0 && a.bindComponent(r);
    }), je(() => {
      l.disable !== !0 && a.unbindComponent(r);
    });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
var Af = [!0, !1, "ondemand"], Ef = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: !1,
    // statement unneeded but avoids future vue implementation changes
    validator: (e) => Af.includes(e)
  }
};
function Of(e, t) {
  const { props: n, proxy: a } = ve(), l = E(!1), r = E(null), o = E(!1);
  Pf({ validate: S, resetValidation: m });
  let i = 0, c;
  const f = s(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), d = s(() => n.disable !== !0 && f.value === !0 && t.value === !1), b = s(
    () => n.error === !0 || l.value === !0
  ), g = s(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  ae(() => n.modelValue, () => {
    o.value = !0, d.value === !0 && n.lazyRules === !1 && p();
  });
  function v() {
    n.lazyRules !== "ondemand" && d.value === !0 && o.value === !0 && p();
  }
  ae(() => n.reactiveRules, (x) => {
    x === !0 ? c === void 0 && (c = ae(() => n.rules, v, { immediate: !0, deep: !0 })) : c !== void 0 && (c(), c = void 0);
  }, { immediate: !0 }), ae(() => n.lazyRules, v), ae(e, (x) => {
    x === !0 ? o.value = !0 : d.value === !0 && n.lazyRules !== "ondemand" && p();
  });
  function m() {
    i++, t.value = !1, o.value = !1, l.value = !1, r.value = null, p.cancel();
  }
  function S(x = n.modelValue) {
    if (n.disable === !0 || f.value === !1)
      return !0;
    const C = ++i, y = t.value !== !0 ? () => {
      o.value = !0;
    } : () => {
    }, h = (L, F) => {
      L === !0 && y(), l.value = L, r.value = F || null, t.value = !1;
    }, _ = [];
    for (let L = 0; L < n.rules.length; L++) {
      const F = n.rules[L];
      let R;
      if (typeof F == "function" ? R = F(x, vl) : typeof F == "string" && vl[F] !== void 0 && (R = vl[F](x)), R === !1 || typeof R == "string")
        return h(!0, R), !1;
      R !== !0 && R !== void 0 && _.push(R);
    }
    return _.length === 0 ? (h(!1), !0) : (t.value = !0, Promise.all(_).then(
      (L) => {
        if (L === void 0 || Array.isArray(L) === !1 || L.length === 0)
          return C === i && h(!1), !0;
        const F = L.find((R) => R === !1 || typeof R == "string");
        return C === i && h(F !== void 0, F), F === void 0;
      },
      (L) => (C === i && (console.error(L), h(!0)), !1)
    ));
  }
  const p = Sa(S, 0);
  return je(() => {
    c == null || c(), p.cancel();
  }), Object.assign(a, { resetValidation: m, validate: S }), xt(a, "hasError", () => b.value), {
    isDirtyModel: o,
    hasRules: f,
    hasError: b,
    errorMessage: g,
    validate: S,
    resetValidation: m
  };
}
function Kn(e) {
  return e != null && ("" + e).length !== 0;
}
var _s = {
  ...Ue,
  ...Ef,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
}, jl = {
  ..._s,
  maxlength: [Number, String]
}, Ql = ["update:modelValue", "clear", "focus", "blur"];
function Kl({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: a, proxy: l } = ve(), r = Ye(a, l.$q), o = Nl({
    required: e,
    getValue: () => a.for
  });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag: t === !0 ? s(() => a.tag) : { value: "label" },
    isDark: r,
    editable: s(
      () => a.disable !== !0 && a.readonly !== !0
    ),
    innerLoading: E(!1),
    focused: E(!1),
    hasPopupOpen: !1,
    splitAttrs: bs(),
    targetUid: o,
    rootRef: E(null),
    targetRef: E(null),
    controlRef: E(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function Ul(e) {
  const { props: t, emit: n, slots: a, attrs: l, proxy: r } = ve(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = s(() => Kn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (K) => {
    n("update:modelValue", K);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: z,
    onFocusout: B
  }), Object.assign(e, {
    clearValue: P,
    onControlFocusin: z,
    onControlFocusout: B,
    focus: F
  }), e.computedCounter === void 0 && (e.computedCounter = s(() => {
    if (t.counter !== !1) {
      const K = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, W = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return K + (W !== void 0 ? " / " + W : "");
    }
  }));
  const {
    isDirtyModel: c,
    hasRules: f,
    hasError: d,
    errorMessage: b,
    resetValidation: g
  } = Of(e.focused, e.innerLoading), v = e.floatingLabel !== void 0 ? s(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : s(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), m = s(
    () => t.bottomSlots === !0 || t.hint !== void 0 || f.value === !0 || t.counter === !0 || t.error !== null
  ), S = s(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), p = s(
    () => `q-field row no-wrap items-start q-field--${S.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (v.value === !0 ? " q-field--float" : "") + (C.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (d.value === !0 ? " q-field--error" : "") + (d.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && m.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), x = s(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (d.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), C = s(
    () => t.labelSlot === !0 || t.label !== void 0
  ), y = s(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && d.value !== !0 ? ` text-${t.labelColor}` : "")
  ), h = s(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: v.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), _ = s(() => {
    const K = {};
    return e.targetUid.value && (K.for = e.targetUid.value), t.disable === !0 && (K["aria-disabled"] = "true"), K;
  });
  function L() {
    var ue;
    const K = document.activeElement;
    let W = (ue = e.targetRef) == null ? void 0 : ue.value;
    W && (K === null || K.id !== e.targetUid.value) && (W.hasAttribute("tabindex") === !0 || (W = W.querySelector("[tabindex]")), W !== K && (W == null || W.focus({ preventScroll: !0 })));
  }
  function F() {
    xa(L);
  }
  function R() {
    ed(L);
    const K = document.activeElement;
    K !== null && e.rootRef.value.contains(K) && K.blur();
  }
  function z(K) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", K));
  }
  function B(K, W) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", K)), W == null || W());
    });
  }
  function P(K) {
    var W;
    Ae(K), o.platform.is.mobile !== !0 ? (((W = e.targetRef) == null ? void 0 : W.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === !0 && n("change", null), n("clear", t.modelValue), Ke(() => {
      const ue = c.value;
      g(), c.value = ue;
    });
  }
  function T(K) {
    [13, 32].includes(K.keyCode) && P(K);
  }
  function q() {
    const K = [];
    return a.prepend !== void 0 && K.push(
      u("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: kt
      }, a.prepend())
    ), K.push(
      u("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, w())
    ), d.value === !0 && t.noErrorIcon === !1 && K.push(
      N("error", [
        u(Xe, { name: o.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? K.push(
      N(
        "inner-loading-append",
        a.loading !== void 0 ? a.loading() : [u(en, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && K.push(
      N("inner-clearable-append", [
        u(Xe, {
          class: "q-field__focusable-action",
          name: t.clearIcon || o.iconSet.field.clear,
          tabindex: 0,
          role: "button",
          "aria-hidden": "false",
          "aria-label": o.lang.label.clear,
          onKeyup: T,
          onClick: P
        })
      ])
    ), a.append !== void 0 && K.push(
      u("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: kt
      }, a.append())
    ), e.getInnerAppend !== void 0 && K.push(
      N("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && K.push(
      e.getControlChild()
    ), K;
  }
  function w() {
    const K = [];
    return t.prefix !== void 0 && t.prefix !== null && K.push(
      u("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && K.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? K.push(e.getControl()) : a.rawControl !== void 0 ? K.push(a.rawControl()) : a.control !== void 0 && K.push(
      u("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, a.control(h.value))
    ), C.value === !0 && K.push(
      u("div", {
        class: y.value
      }, xe(a.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && K.push(
      u("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), K.concat(xe(a.default));
  }
  function A() {
    let K, W;
    d.value === !0 ? b.value !== null ? (K = [u("div", { role: "alert" }, b.value)], W = `q--slot-error-${b.value}`) : (K = xe(a.error), W = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (K = [u("div", t.hint)], W = `q--slot-hint-${t.hint}`) : (K = xe(a.hint), W = "q--slot-hint"));
    const ue = t.counter === !0 || a.counter !== void 0;
    if (t.hideBottomSpace === !0 && ue === !1 && K === void 0) return;
    const I = u("div", {
      key: W,
      class: "q-field__messages col"
    }, K);
    return u("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: kt
    }, [
      t.hideBottomSpace === !0 ? I : u(Ct, { name: "q-transition--field-message" }, () => I),
      ue === !0 ? u("div", {
        class: "q-field__counter"
      }, a.counter !== void 0 ? a.counter() : e.computedCounter.value) : null
    ]);
  }
  function N(K, W) {
    return W === null ? null : u("div", {
      key: K,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, W);
  }
  let H = !1;
  return vn(() => {
    H = !0;
  }), Un(() => {
    H === !0 && t.autofocus === !0 && r.focus();
  }), t.autofocus === !0 && ut(() => {
    r.focus();
  }), je(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: F, blur: R }), function() {
    const W = e.getControl === void 0 && a.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ..._.value
    } : _.value;
    return u(e.tag.value, {
      ref: e.rootRef,
      class: [
        p.value,
        l.class
      ],
      style: l.style,
      ...W
    }, [
      a.before !== void 0 ? u("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: kt
      }, a.before()) : null,
      u("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        u("div", {
          ref: e.controlRef,
          class: x.value,
          tabindex: -1,
          ...e.controlEvents
        }, q()),
        m.value === !0 ? A() : null
      ]),
      a.after !== void 0 ? u("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: kt
      }, a.after()) : null
    ]);
  };
}
var Vf = te({
  name: "QField",
  inheritAttrs: !1,
  props: {
    ...jl,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: Ql,
  setup() {
    return Ul(
      Kl({ tagProp: !0 })
    );
  }
});
function la(e, t, n, a) {
  const l = [];
  return e.forEach((r) => {
    a(r) === !0 ? l.push(r) : t.push({ failedPropValidation: n, file: r });
  }), l;
}
function nl(e) {
  e != null && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), Ae(e);
}
var ws = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
}, Cs = ["rejected"];
function xs({
  editable: e,
  dnd: t,
  getFileInput: n,
  addFilesToQueue: a
}) {
  const { props: l, emit: r, proxy: o } = ve(), i = E(null), c = s(() => l.accept !== void 0 ? l.accept.split(",").map((C) => (C = C.trim(), C === "*" ? "*/" : (C.endsWith("/*") && (C = C.slice(0, C.length - 1)), C.toUpperCase()))) : null), f = s(() => parseInt(l.maxFiles, 10)), d = s(() => parseInt(l.maxTotalSize, 10));
  function b(C) {
    var y;
    if (e.value)
      if (C !== Object(C) && (C = { target: null }), ((y = C.target) == null ? void 0 : y.matches('input[type="file"]')) === !0)
        C.clientX === 0 && C.clientY === 0 && ft(C);
      else {
        const h = n();
        h !== C.target && (h == null || h.click(C));
      }
  }
  function g(C) {
    e.value && C && a(null, C);
  }
  function v(C, y, h, _) {
    let L = Array.from(y || C.target.files);
    const F = [], R = () => {
      F.length !== 0 && r("rejected", F);
    };
    if (l.accept !== void 0 && c.value.indexOf("*/") === -1 && (L = la(L, F, "accept", (z) => c.value.some((B) => z.type.toUpperCase().startsWith(B) || z.name.toUpperCase().endsWith(B))), L.length === 0))
      return R();
    if (l.maxFileSize !== void 0) {
      const z = parseInt(l.maxFileSize, 10);
      if (L = la(L, F, "max-file-size", (B) => B.size <= z), L.length === 0)
        return R();
    }
    if (l.multiple !== !0 && L.length !== 0 && (L = [L[0]]), L.forEach((z) => {
      z.__key = z.webkitRelativePath + z.lastModified + z.name + z.size;
    }), _ === !0) {
      const z = h.map((B) => B.__key);
      L = la(L, F, "duplicate", (B) => z.includes(B.__key) === !1);
    }
    if (L.length === 0)
      return R();
    if (l.maxTotalSize !== void 0) {
      let z = _ === !0 ? h.reduce((B, P) => B + P.size, 0) : 0;
      if (L = la(L, F, "max-total-size", (B) => (z += B.size, z <= d.value)), L.length === 0)
        return R();
    }
    if (typeof l.filter == "function") {
      const z = l.filter(L);
      L = la(L, F, "filter", (B) => z.includes(B));
    }
    if (l.maxFiles !== void 0) {
      let z = _ === !0 ? h.length : 0;
      if (L = la(L, F, "max-files", () => (z++, z <= f.value)), L.length === 0)
        return R();
    }
    if (R(), L.length !== 0)
      return L;
  }
  function m(C) {
    nl(C), t.value !== !0 && (t.value = !0);
  }
  function S(C) {
    Ae(C), (C.relatedTarget !== null || De.is.safari !== !0 ? C.relatedTarget !== i.value : document.elementsFromPoint(C.clientX, C.clientY).includes(i.value) === !1) === !0 && (t.value = !1);
  }
  function p(C) {
    nl(C);
    const y = C.dataTransfer.files;
    y.length !== 0 && a(null, y), t.value = !1;
  }
  function x(C) {
    if (t.value === !0)
      return u("div", {
        ref: i,
        class: `q-${C}__dnd absolute-full`,
        onDragenter: nl,
        onDragover: nl,
        onDragleave: S,
        onDrop: p
      });
  }
  return Object.assign(o, { pickFiles: b, addFiles: g }), {
    pickFiles: b,
    addFiles: g,
    onDragover: m,
    onDragleave: S,
    processFiles: v,
    getDndNode: x,
    maxFilesNumber: f,
    maxTotalSizeNumber: d
  };
}
function ks(e, t) {
  function n() {
    const a = e.modelValue;
    try {
      const l = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(a) === a && ("length" in a ? Array.from(a) : [a]).forEach((r) => {
        l.items.add(r);
      }), {
        files: l.files
      };
    } catch {
      return {
        files: void 0
      };
    }
  }
  return t === !0 ? s(() => {
    if (e.type === "file")
      return n();
  }) : s(n);
}
te({
  name: "QFile",
  inheritAttrs: !1,
  props: {
    ..._s,
    ...Xt,
    ...ws,
    /* SSR does not know about File & FileList */
    modelValue: [File, FileList, Array],
    append: Boolean,
    useChips: Boolean,
    displayValue: [String, Number],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    counterLabel: Function,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...Ql,
    ...Cs
  ],
  setup(e, { slots: t, emit: n, attrs: a }) {
    const { proxy: l } = ve(), r = Kl(), o = E(null), i = E(!1), c = Jr(e), {
      pickFiles: f,
      onDragover: d,
      onDragleave: b,
      processFiles: g,
      getDndNode: v
    } = xs({ editable: r.editable, dnd: i, getFileInput: T, addFilesToQueue: q }), m = ks(e), S = s(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), p = s(() => Kn(S.value)), x = s(
      () => S.value.map((H) => H.name).join(", ")
    ), C = s(
      () => kr(
        S.value.reduce((H, K) => H + K.size, 0)
      )
    ), y = s(() => ({
      totalSize: C.value,
      filesNumber: S.value.length,
      maxFiles: e.maxFiles
    })), h = s(() => ({
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip,
      accept: e.accept,
      capture: e.capture,
      name: c.value,
      ...a,
      id: r.targetUid.value,
      disabled: r.editable.value !== !0
    })), _ = s(
      () => "q-file q-field--auto-height" + (i.value === !0 ? " q-file--dnd" : "")
    ), L = s(
      () => e.multiple === !0 && e.append === !0
    );
    function F(H) {
      const K = S.value.slice();
      K.splice(H, 1), z(K);
    }
    function R(H) {
      const K = S.value.indexOf(H);
      K !== -1 && F(K);
    }
    function z(H) {
      n("update:modelValue", e.multiple === !0 ? H : H[0]);
    }
    function B(H) {
      H.keyCode === 13 && kt(H);
    }
    function P(H) {
      (H.keyCode === 13 || H.keyCode === 32) && f(H);
    }
    function T() {
      return o.value;
    }
    function q(H, K) {
      const W = g(H, K, S.value, L.value), ue = T();
      ue != null && (ue.value = ""), W !== void 0 && ((e.multiple === !0 ? e.modelValue && W.every((I) => S.value.includes(I)) : e.modelValue === W[0]) || z(
        L.value === !0 ? S.value.concat(W) : W
      ));
    }
    function w() {
      return [
        u("input", {
          class: [e.inputClass, "q-file__filler"],
          style: e.inputStyle
        })
      ];
    }
    function A() {
      if (t.file !== void 0)
        return S.value.length === 0 ? w() : S.value.map(
          (K, W) => t.file({ index: W, file: K, ref: this })
        );
      if (t.selected !== void 0)
        return S.value.length === 0 ? w() : t.selected({ files: S.value, ref: this });
      if (e.useChips === !0)
        return S.value.length === 0 ? w() : S.value.map((K, W) => u(Iu, {
          key: "file-" + W,
          removable: r.editable.value,
          dense: !0,
          textColor: e.color,
          tabindex: e.tabindex,
          onRemove: () => {
            F(W);
          }
        }, () => u("span", {
          class: "ellipsis",
          textContent: K.name
        })));
      const H = e.displayValue !== void 0 ? e.displayValue : x.value;
      return H.length !== 0 ? [
        u("div", {
          class: e.inputClass,
          style: e.inputStyle,
          textContent: H
        })
      ] : w();
    }
    function N() {
      const H = {
        ref: o,
        ...h.value,
        ...m.value,
        class: "q-field__input fit absolute-full cursor-pointer",
        onChange: q
      };
      return e.multiple === !0 && (H.multiple = !0), u("input", H);
    }
    return Object.assign(r, {
      fieldClass: _,
      emitValue: z,
      hasValue: p,
      inputRef: o,
      innerValue: S,
      floatingLabel: s(
        () => p.value === !0 || Kn(e.displayValue)
      ),
      computedCounter: s(() => {
        if (e.counterLabel !== void 0)
          return e.counterLabel(y.value);
        const H = e.maxFiles;
        return `${S.value.length}${H !== void 0 ? " / " + H : ""} (${C.value})`;
      }),
      getControlChild: () => v("file"),
      getControl: () => {
        const H = {
          ref: r.targetRef,
          class: "q-field__native row items-center cursor-pointer",
          tabindex: e.tabindex
        };
        return r.editable.value === !0 && Object.assign(H, { onDragover: d, onDragleave: b, onKeydown: B, onKeyup: P }), u("div", H, [N()].concat(A()));
      }
    }), Object.assign(l, {
      removeAtIndex: F,
      removeFile: R,
      getNativeElement: () => o.value
      // deprecated
    }), xt(l, "nativeEl", () => o.value), Ul(r);
  }
});
te({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Et(Wn, tt);
    if (l === tt)
      return console.error("QFooter needs to be child of QLayout"), tt;
    const r = E(parseInt(e.heightHint, 10)), o = E(!0), i = E(
      Ut.value === !0 || l.isContainer.value === !0 ? 0 : window.innerHeight
    ), c = s(
      () => e.reveal === !0 || l.view.value.indexOf("F") !== -1 || a.platform.is.ios && l.isContainer.value === !0
    ), f = s(() => l.isContainer.value === !0 ? l.containerHeight.value : i.value), d = s(() => {
      if (e.modelValue !== !0)
        return 0;
      if (c.value === !0)
        return o.value === !0 ? r.value : 0;
      const _ = l.scroll.value.position + f.value + r.value - l.height.value;
      return _ > 0 ? _ : 0;
    }), b = s(
      () => e.modelValue !== !0 || c.value === !0 && o.value !== !0
    ), g = s(
      () => e.modelValue === !0 && b.value === !0 && e.reveal === !0
    ), v = s(
      () => "q-footer q-layout__section--marginal " + (c.value === !0 ? "fixed" : "absolute") + "-bottom" + (e.bordered === !0 ? " q-footer--bordered" : "") + (b.value === !0 ? " q-footer--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" + (c.value !== !0 ? " hidden" : "") : "")
    ), m = s(() => {
      const _ = l.rows.value.bottom, L = {};
      return _[0] === "l" && l.left.space === !0 && (L[a.lang.rtl === !0 ? "right" : "left"] = `${l.left.size}px`), _[2] === "r" && l.right.space === !0 && (L[a.lang.rtl === !0 ? "left" : "right"] = `${l.right.size}px`), L;
    });
    function S(_, L) {
      l.update("footer", _, L);
    }
    function p(_, L) {
      _.value !== L && (_.value = L);
    }
    function x({ height: _ }) {
      p(r, _), S("size", _);
    }
    function C() {
      if (e.reveal !== !0) return;
      const { direction: _, position: L, inflectionPoint: F } = l.scroll.value;
      p(o, _ === "up" || L - F < 100 || l.height.value - f.value - L - r.value < 300);
    }
    function y(_) {
      g.value === !0 && p(o, !0), n("focusin", _);
    }
    ae(() => e.modelValue, (_) => {
      S("space", _), p(o, !0), l.animate();
    }), ae(d, (_) => {
      S("offset", _);
    }), ae(() => e.reveal, (_) => {
      _ === !1 && p(o, e.modelValue);
    }), ae(o, (_) => {
      l.animate(), n("reveal", _);
    }), ae([r, l.scroll, l.height], C), ae(() => a.screen.height, (_) => {
      l.isContainer.value !== !0 && p(i, _);
    });
    const h = {};
    return l.instances.footer = h, e.modelValue === !0 && S("size", r.value), S("space", e.modelValue), S("offset", d.value), je(() => {
      l.instances.footer === h && (l.instances.footer = void 0, S("size", 0), S("offset", 0), S("space", !1));
    }), () => {
      const _ = gt(t.default, [
        u(jn, {
          debounce: 0,
          onResize: x
        })
      ]);
      return e.elevated === !0 && _.push(
        u("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      ), u("footer", {
        class: v.value,
        style: m.value,
        onFocusin: y
      }, _);
    };
  }
});
te({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: n }) {
    const a = ve(), l = E(null);
    let r = 0;
    const o = [];
    function i(v) {
      const m = typeof v == "boolean" ? v : e.noErrorFocus !== !0, S = ++r, p = (y, h) => {
        n(`validation${y === !0 ? "Success" : "Error"}`, h);
      }, x = (y) => {
        const h = y.validate();
        return typeof h.then == "function" ? h.then(
          (_) => ({ valid: _, comp: y }),
          (_) => ({ valid: !1, comp: y, err: _ })
        ) : Promise.resolve({ valid: h, comp: y });
      };
      return (e.greedy === !0 ? Promise.all(o.map(x)).then((y) => y.filter((h) => h.valid !== !0)) : o.reduce(
        (y, h) => y.then(() => x(h).then((_) => {
          if (_.valid === !1)
            return Promise.reject(_);
        })),
        Promise.resolve()
      ).catch((y) => [y])).then((y) => {
        if (y === void 0 || y.length === 0)
          return S === r && p(!0), !0;
        if (S === r) {
          const { comp: h, err: _ } = y[0];
          if (_ !== void 0 && console.error(_), p(!1, h), m === !0) {
            const L = y.find(({ comp: F }) => typeof F.focus == "function" && kn(F.$) === !1);
            L !== void 0 && L.comp.focus();
          }
        }
        return !1;
      });
    }
    function c() {
      r++, o.forEach((v) => {
        typeof v.resetValidation == "function" && v.resetValidation();
      });
    }
    function f(v) {
      v !== void 0 && Ae(v);
      const m = r + 1;
      i().then((S) => {
        m === r && S === !0 && (e.onSubmit !== void 0 ? n("submit", v) : (v == null ? void 0 : v.target) !== void 0 && typeof v.target.submit == "function" && v.target.submit());
      });
    }
    function d(v) {
      v !== void 0 && Ae(v), n("reset"), Ke(() => {
        c(), e.autofocus === !0 && e.noResetFocus !== !0 && b();
      });
    }
    function b() {
      xa(() => {
        if (l.value === null) return;
        const v = l.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || l.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || l.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"), (m) => m.tabIndex !== -1);
        v == null || v.focus({ preventScroll: !0 });
      });
    }
    fn(ou, {
      bindComponent(v) {
        o.push(v);
      },
      unbindComponent(v) {
        const m = o.indexOf(v);
        m !== -1 && o.splice(m, 1);
      }
    });
    let g = !1;
    return vn(() => {
      g = !0;
    }), Un(() => {
      g === !0 && e.autofocus === !0 && b();
    }), ut(() => {
      e.autofocus === !0 && b();
    }), Object.assign(a.proxy, {
      validate: i,
      resetValidation: c,
      submit: f,
      reset: d,
      focus: b,
      getValidationComponents: () => o
    }), () => u("form", {
      class: "q-form",
      ref: l,
      onSubmit: f,
      onReset: d
    }, xe(t.default));
  }
});
te({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Et(Wn, tt);
    if (l === tt)
      return console.error("QHeader needs to be child of QLayout"), tt;
    const r = E(parseInt(e.heightHint, 10)), o = E(!0), i = s(
      () => e.reveal === !0 || l.view.value.indexOf("H") !== -1 || a.platform.is.ios && l.isContainer.value === !0
    ), c = s(() => {
      if (e.modelValue !== !0)
        return 0;
      if (i.value === !0)
        return o.value === !0 ? r.value : 0;
      const C = r.value - l.scroll.value.position;
      return C > 0 ? C : 0;
    }), f = s(
      () => e.modelValue !== !0 || i.value === !0 && o.value !== !0
    ), d = s(
      () => e.modelValue === !0 && f.value === !0 && e.reveal === !0
    ), b = s(
      () => "q-header q-layout__section--marginal " + (i.value === !0 ? "fixed" : "absolute") + "-top" + (e.bordered === !0 ? " q-header--bordered" : "") + (f.value === !0 ? " q-header--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" : "")
    ), g = s(() => {
      const C = l.rows.value.top, y = {};
      return C[0] === "l" && l.left.space === !0 && (y[a.lang.rtl === !0 ? "right" : "left"] = `${l.left.size}px`), C[2] === "r" && l.right.space === !0 && (y[a.lang.rtl === !0 ? "left" : "right"] = `${l.right.size}px`), y;
    });
    function v(C, y) {
      l.update("header", C, y);
    }
    function m(C, y) {
      C.value !== y && (C.value = y);
    }
    function S({ height: C }) {
      m(r, C), v("size", C);
    }
    function p(C) {
      d.value === !0 && m(o, !0), n("focusin", C);
    }
    ae(() => e.modelValue, (C) => {
      v("space", C), m(o, !0), l.animate();
    }), ae(c, (C) => {
      v("offset", C);
    }), ae(() => e.reveal, (C) => {
      C === !1 && m(o, e.modelValue);
    }), ae(o, (C) => {
      l.animate(), n("reveal", C);
    }), ae(l.scroll, (C) => {
      e.reveal === !0 && m(
        o,
        C.direction === "up" || C.position <= e.revealOffset || C.position - C.inflectionPoint < 100
      );
    });
    const x = {};
    return l.instances.header = x, e.modelValue === !0 && v("size", r.value), v("space", e.modelValue), v("offset", c.value), je(() => {
      l.instances.header === x && (l.instances.header = void 0, v("size", 0), v("offset", 0), v("space", !1));
    }), () => {
      const C = ja(t.default, []);
      return e.elevated === !0 && C.push(
        u("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      ), C.push(
        u(jn, {
          debounce: 0,
          onResize: S
        })
      ), u("header", {
        class: b.value,
        style: g.value,
        onFocusin: p
      }, C);
    };
  }
});
var yo = {
  ratio: [String, Number]
};
function po(e, t) {
  return s(() => {
    const n = Number(
      e.ratio || (t !== void 0 ? t.value : void 0)
    );
    return isNaN(n) !== !0 && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var Df = 1.7778;
te({
  name: "QImg",
  props: {
    ...yo,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: Df
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(e, { slots: t, emit: n }) {
    const a = E(e.initialRatio), l = po(e, a), r = ve(), { registerTimeout: o, removeTimeout: i } = dn(), { registerTimeout: c, removeTimeout: f } = dn(), d = s(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), b = s(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: !0 } : null), g = [
      E(null),
      E(d.value)
    ], v = E(0), m = E(!1), S = E(!1), p = s(
      () => `q-img q-img--${e.noNativeMenu === !0 ? "no-" : ""}menu`
    ), x = s(() => ({
      width: e.width,
      height: e.height
    })), C = s(
      () => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === !0 ? "out" : ""}-transition q-img__image--`
    ), y = s(() => ({
      ...e.imgStyle,
      objectFit: e.fit,
      objectPosition: e.position
    }));
    function h() {
      if (f(), e.loadingShowDelay === 0) {
        m.value = !0;
        return;
      }
      c(() => {
        m.value = !0;
      }, e.loadingShowDelay);
    }
    function _() {
      f(), m.value = !1;
    }
    function L({ target: T }) {
      kn(r) === !1 && (i(), a.value = T.naturalHeight === 0 ? 0.5 : T.naturalWidth / T.naturalHeight, F(T, 1));
    }
    function F(T, q) {
      q === 1e3 || kn(r) === !0 || (T.complete === !0 ? R(T) : o(() => {
        F(T, q + 1);
      }, 50));
    }
    function R(T) {
      kn(r) !== !0 && (v.value = v.value ^ 1, g[v.value].value = null, _(), T.getAttribute("__qerror") !== "true" && (S.value = !1), n("load", T.currentSrc || T.src));
    }
    function z(T) {
      i(), _(), S.value = !0, g[v.value].value = b.value, g[v.value ^ 1].value = d.value, n("error", T);
    }
    function B(T) {
      const q = g[T].value, w = {
        key: "img_" + T,
        class: C.value,
        style: y.value,
        alt: e.alt,
        crossorigin: e.crossorigin,
        decoding: e.decoding,
        referrerpolicy: e.referrerpolicy,
        height: e.height,
        width: e.width,
        loading: e.loading,
        fetchpriority: e.fetchpriority,
        "aria-hidden": "true",
        draggable: e.draggable,
        ...q
      };
      return v.value === T ? Object.assign(w, {
        class: w.class + "current",
        onLoad: L,
        onError: z
      }) : w.class += "loaded", u(
        "div",
        { class: "q-img__container absolute-full", key: "img" + T },
        u("img", w)
      );
    }
    function P() {
      return m.value === !1 ? u("div", {
        key: "content",
        class: "q-img__content absolute-full q-anchor--skip"
      }, xe(t[S.value === !0 ? "error" : "default"])) : u("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, t.loading !== void 0 ? t.loading() : e.noSpinner === !0 ? void 0 : [
        u(en, {
          color: e.spinnerColor,
          size: e.spinnerSize
        })
      ]);
    }
    {
      let T = function() {
        ae(
          () => e.src || e.srcset || e.sizes ? {
            src: e.src,
            srcset: e.srcset,
            sizes: e.sizes
          } : null,
          (q) => {
            i(), S.value = !1, q === null ? (_(), g[v.value ^ 1].value = d.value) : h(), g[v.value].value = q;
          },
          { immediate: !0 }
        );
      };
      Ut.value === !0 ? ut(T) : T();
    }
    return () => {
      const T = [];
      return l.value !== null && T.push(
        u("div", { key: "filler", style: l.value })
      ), g[0].value !== null && T.push(
        B(0)
      ), g[1].value !== null && T.push(
        B(1)
      ), T.push(
        u(Ct, { name: "q-transition--fade" }, P)
      ), u("div", {
        key: "main",
        class: p.value,
        style: x.value,
        role: "img",
        "aria-label": e.alt
      }, T);
    };
  }
});
var { passive: Fn } = lt;
te({
  name: "QInfiniteScroll",
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: Xn,
    initialIndex: {
      type: Number,
      default: 0
    },
    disable: Boolean,
    reverse: Boolean
  },
  emits: ["load"],
  setup(e, { slots: t, emit: n }) {
    const a = E(!1), l = E(!0), r = E(null), o = E(null);
    let i = e.initialIndex, c, f;
    const d = s(
      () => "q-infinite-scroll__loading" + (a.value === !0 ? "" : " invisible")
    );
    function b() {
      if (e.disable === !0 || a.value === !0 || l.value === !1) return;
      const F = Ya(c), R = qn(c), z = ya(c);
      e.reverse === !1 ? Math.round(R + z + e.offset) >= Math.round(F) && g() : Math.round(R) <= e.offset && g();
    }
    function g() {
      if (e.disable === !0 || a.value === !0 || l.value === !1) return;
      i++, a.value = !0;
      const F = Ya(c);
      n("load", i, (R) => {
        l.value === !0 && (a.value = !1, Ke(() => {
          if (e.reverse === !0) {
            const z = Ya(c), B = qn(c), P = z - F;
            ga(c, B + P);
          }
          R === !0 ? S() : r.value && r.value.closest("body") && f();
        }));
      });
    }
    function v() {
      i = 0;
    }
    function m() {
      l.value === !1 && (l.value = !0, c.addEventListener("scroll", f, Fn)), b();
    }
    function S() {
      var F;
      l.value === !0 && (l.value = !1, a.value = !1, c.removeEventListener("scroll", f, Fn), (F = f == null ? void 0 : f.cancel) == null || F.call(f));
    }
    function p() {
      if (c && l.value === !0 && c.removeEventListener("scroll", f, Fn), c = ln(r.value, e.scrollTarget), l.value === !0) {
        if (c.addEventListener("scroll", f, Fn), e.reverse === !0) {
          const F = Ya(c), R = ya(c);
          ga(c, F - R);
        }
        b();
      }
    }
    function x(F) {
      i = F;
    }
    function C(F) {
      F = parseInt(F, 10);
      const R = f;
      f = F <= 0 ? b : Sa(b, isNaN(F) === !0 ? 100 : F), c && l.value === !0 && (R !== void 0 && c.removeEventListener("scroll", R, Fn), c.addEventListener("scroll", f, Fn));
    }
    function y(F) {
      if (h.value === !0) {
        if (o.value === null) {
          F !== !0 && Ke(() => {
            y(!0);
          });
          return;
        }
        const R = `${a.value === !0 ? "un" : ""}pauseAnimations`;
        Array.from(o.value.getElementsByTagName("svg")).forEach((z) => {
          z[R]();
        });
      }
    }
    const h = s(() => e.disable !== !0 && l.value === !0);
    ae([a, h], () => {
      y();
    }), ae(() => e.disable, (F) => {
      F === !0 ? S() : m();
    }), ae(() => e.reverse, () => {
      a.value === !1 && l.value === !0 && b();
    }), ae(() => e.scrollTarget, p), ae(() => e.debounce, C);
    let _ = !1;
    Un(() => {
      _ !== !1 && c && ga(c, _);
    }), vn(() => {
      _ = c ? qn(c) : !1;
    }), je(() => {
      l.value === !0 && c.removeEventListener("scroll", f, Fn);
    }), ut(() => {
      C(e.debounce), p(), a.value === !1 && y();
    });
    const L = ve();
    return Object.assign(L.proxy, {
      poll: () => {
        f == null || f();
      },
      trigger: g,
      stop: S,
      reset: v,
      resume: m,
      setIndex: x,
      updateScrollTarget: p
    }), () => {
      const F = ja(t.default, []);
      return h.value === !0 && F[e.reverse === !1 ? "push" : "unshift"](
        u("div", { ref: o, class: d.value }, xe(t.loading))
      ), u("div", {
        class: "q-infinite-scroll",
        ref: r
      }, F);
    };
  }
});
te({
  name: "QInnerLoading",
  props: {
    ...Ue,
    ...Dn,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: "42px"
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), { transitionProps: l, transitionStyle: r } = Ol(e), o = s(
      () => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (a.value === !0 ? " q-inner-loading--dark" : "")
    ), i = s(
      () => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : "")
    );
    function c() {
      const d = [
        u(en, {
          size: e.size,
          color: e.color
        })
      ];
      return e.label !== void 0 && d.push(
        u("div", {
          class: i.value,
          style: e.labelStyle
        }, [e.label])
      ), d;
    }
    function f() {
      return e.showing === !0 ? u(
        "div",
        { class: o.value, style: r.value },
        t.default !== void 0 ? t.default() : c()
      ) : null;
    }
    return () => u(Ct, l.value, f);
  }
});
var mi = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, Bl = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, qs = Object.keys(Bl);
qs.forEach((e) => {
  Bl[e].regex = new RegExp(Bl[e].pattern);
});
var Nf = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + qs.join("") + "])|(.)", "g"), gi = /[.*+?^${}()|[\]\\]/g, wt = "", If = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function Hf(e, t, n, a) {
  let l, r, o, i, c, f;
  const d = E(null), b = E(v());
  function g() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  ae(() => e.type + e.autogrow, S), ae(() => e.mask, (z) => {
    if (z !== void 0)
      p(b.value, !0);
    else {
      const B = F(b.value);
      S(), e.modelValue !== B && t("update:modelValue", B);
    }
  }), ae(() => e.fillMask + e.reverseFillMask, () => {
    d.value === !0 && p(b.value, !0);
  }), ae(() => e.unmaskedValue, () => {
    d.value === !0 && p(b.value);
  });
  function v() {
    if (S(), d.value === !0) {
      const z = _(F(e.modelValue));
      return e.fillMask !== !1 ? R(z) : z;
    }
    return e.modelValue;
  }
  function m(z) {
    if (z < l.length)
      return l.slice(-z);
    let B = "", P = l;
    const T = P.indexOf(wt);
    if (T !== -1) {
      for (let q = z - P.length; q > 0; q--)
        B += wt;
      P = P.slice(0, T) + B + P.slice(T);
    }
    return P;
  }
  function S() {
    if (d.value = e.mask !== void 0 && e.mask.length !== 0 && g(), d.value === !1) {
      i = void 0, l = "", r = "";
      return;
    }
    const z = mi[e.mask] === void 0 ? e.mask : mi[e.mask], B = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", P = B.replace(gi, "\\$&"), T = [], q = [], w = [];
    let A = e.reverseFillMask === !0, N = "", H = "";
    z.replace(Nf, (I, k, U, O, ne) => {
      if (O !== void 0) {
        const $ = Bl[O];
        w.push($), H = $.negate, A === !0 && (q.push("(?:" + H + "+)?(" + $.pattern + "+)?(?:" + H + "+)?(" + $.pattern + "+)?"), A = !1), q.push("(?:" + H + "+)?(" + $.pattern + ")?");
      } else if (U !== void 0)
        N = "\\" + (U === "\\" ? "" : U), w.push(U), T.push("([^" + N + "]+)?" + N + "?");
      else {
        const $ = k !== void 0 ? k : ne;
        N = $ === "\\" ? "\\\\\\\\" : $.replace(gi, "\\\\$&"), w.push($), T.push("([^" + N + "]+)?" + N + "?");
      }
    });
    const K = new RegExp(
      "^" + T.join("") + "(" + (N === "" ? "." : "[^" + N + "]") + "+)?" + (N === "" ? "" : "[" + N + "]*") + "$"
    ), W = q.length - 1, ue = q.map((I, k) => k === 0 && e.reverseFillMask === !0 ? new RegExp("^" + P + "*" + I) : k === W ? new RegExp(
      "^" + I + "(" + (H === "" ? "." : H) + "+)?" + (e.reverseFillMask === !0 ? "$" : P + "*")
    ) : new RegExp("^" + I));
    o = w, i = (I) => {
      const k = K.exec(e.reverseFillMask === !0 ? I : I.slice(0, w.length + 1));
      k !== null && (I = k.slice(1).join(""));
      const U = [], O = ue.length;
      for (let ne = 0, $ = I; ne < O; ne++) {
        const Q = ue[ne].exec($);
        if (Q === null)
          break;
        $ = $.slice(Q.shift().length), U.push(...Q);
      }
      return U.length !== 0 ? U.join("") : I;
    }, l = w.map((I) => typeof I == "string" ? I : wt).join(""), r = l.split(wt).join(B);
  }
  function p(z, B, P) {
    const T = a.value, q = T.selectionEnd, w = T.value.length - q, A = F(z);
    B === !0 && S();
    const N = _(A), H = e.fillMask !== !1 ? R(N) : N, K = b.value !== H;
    T.value !== H && (T.value = H), K === !0 && (b.value = H), document.activeElement === T && Ke(() => {
      if (H === r) {
        const ue = e.reverseFillMask === !0 ? r.length : 0;
        T.setSelectionRange(ue, ue, "forward");
        return;
      }
      if (P === "insertFromPaste" && e.reverseFillMask !== !0) {
        const ue = T.selectionEnd;
        let I = q - 1;
        for (let k = c; k <= I && k < ue; k++)
          l[k] !== wt && I++;
        C.right(T, I);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(P) !== -1) {
        const ue = e.reverseFillMask === !0 ? q === 0 ? H.length > N.length ? 1 : 0 : Math.max(0, H.length - (H === r ? 0 : Math.min(N.length, w) + 1)) + 1 : q;
        T.setSelectionRange(ue, ue, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (K === !0) {
          const ue = Math.max(0, H.length - (H === r ? 0 : Math.min(N.length, w + 1)));
          ue === 1 && q === 1 ? T.setSelectionRange(ue, ue, "forward") : C.rightReverse(T, ue);
        } else {
          const ue = H.length - w;
          T.setSelectionRange(ue, ue, "backward");
        }
      else if (K === !0) {
        const ue = Math.max(0, l.indexOf(wt), Math.min(N.length, q) - 1);
        C.right(T, ue);
      } else {
        const ue = q - 1;
        C.right(T, ue);
      }
    });
    const W = e.unmaskedValue === !0 ? F(H) : H;
    String(e.modelValue) !== W && (e.modelValue !== null || W !== "") && n(W, !0);
  }
  function x(z, B, P) {
    const T = _(F(z.value));
    B = Math.max(0, l.indexOf(wt), Math.min(T.length, B)), c = B, z.setSelectionRange(B, P, "forward");
  }
  const C = {
    left(z, B) {
      const P = l.slice(B - 1).indexOf(wt) === -1;
      let T = Math.max(0, B - 1);
      for (; T >= 0; T--)
        if (l[T] === wt) {
          B = T, P === !0 && B++;
          break;
        }
      if (T < 0 && l[B] !== void 0 && l[B] !== wt)
        return C.right(z, 0);
      B >= 0 && z.setSelectionRange(B, B, "backward");
    },
    right(z, B) {
      const P = z.value.length;
      let T = Math.min(P, B + 1);
      for (; T <= P; T++)
        if (l[T] === wt) {
          B = T;
          break;
        } else l[T - 1] === wt && (B = T);
      if (T > P && l[B - 1] !== void 0 && l[B - 1] !== wt)
        return C.left(z, P);
      z.setSelectionRange(B, B, "forward");
    },
    leftReverse(z, B) {
      const P = m(z.value.length);
      let T = Math.max(0, B - 1);
      for (; T >= 0; T--)
        if (P[T - 1] === wt) {
          B = T;
          break;
        } else if (P[T] === wt && (B = T, T === 0))
          break;
      if (T < 0 && P[B] !== void 0 && P[B] !== wt)
        return C.rightReverse(z, 0);
      B >= 0 && z.setSelectionRange(B, B, "backward");
    },
    rightReverse(z, B) {
      const P = z.value.length, T = m(P), q = T.slice(0, B + 1).indexOf(wt) === -1;
      let w = Math.min(P, B + 1);
      for (; w <= P; w++)
        if (T[w - 1] === wt) {
          B = w, B > 0 && q === !0 && B--;
          break;
        }
      if (w > P && T[B - 1] !== void 0 && T[B - 1] !== wt)
        return C.leftReverse(z, P);
      z.setSelectionRange(B, B, "forward");
    }
  };
  function y(z) {
    t("click", z), f = void 0;
  }
  function h(z) {
    if (t("keydown", z), Yn(z) === !0 || z.altKey === !0) return;
    const B = a.value, P = B.selectionStart, T = B.selectionEnd;
    if (z.shiftKey || (f = void 0), z.keyCode === 37 || z.keyCode === 39) {
      z.shiftKey && f === void 0 && (f = B.selectionDirection === "forward" ? P : T);
      const q = C[(z.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (z.preventDefault(), q(B, f === P ? T : P), z.shiftKey) {
        const w = B.selectionStart;
        B.setSelectionRange(Math.min(f, w), Math.max(f, w), "forward");
      }
    } else z.keyCode === 8 && e.reverseFillMask !== !0 && P === T ? (C.left(B, P), B.setSelectionRange(B.selectionStart, T, "backward")) : z.keyCode === 46 && e.reverseFillMask === !0 && P === T && (C.rightReverse(B, T), B.setSelectionRange(P, B.selectionEnd, "forward"));
  }
  function _(z) {
    if (z == null || z === "")
      return "";
    if (e.reverseFillMask === !0)
      return L(z);
    const B = o;
    let P = 0, T = "";
    for (let q = 0; q < B.length; q++) {
      const w = z[P], A = B[q];
      if (typeof A == "string")
        T += A;
      else if (w !== void 0 && A.regex.test(w))
        T += A.transform !== void 0 ? A.transform(w) : w, P++;
      else
        return T;
    }
    return T;
  }
  function L(z) {
    const B = o, P = l.indexOf(wt);
    let T = z.length - 1, q = "";
    for (let w = B.length - 1; w >= 0 && T !== -1; w--) {
      const A = B[w];
      let N = z[T];
      if (typeof A == "string")
        q = A + q;
      else if (N !== void 0 && A.regex.test(N))
        do
          q = (A.transform !== void 0 ? A.transform(N) : N) + q, T--, N = z[T];
        while (P === w && N !== void 0 && A.regex.test(N));
      else
        return q;
    }
    return q;
  }
  function F(z) {
    return typeof z != "string" || i === void 0 ? typeof z == "number" ? i("" + z) : z : i(z);
  }
  function R(z) {
    return r.length - z.length <= 0 ? z : e.reverseFillMask === !0 && z.length !== 0 ? r.slice(0, -z.length) + z : z + r.slice(z.length);
  }
  return {
    innerValue: b,
    hasMask: d,
    moveCursorForPaste: x,
    updateMaskValue: p,
    onMaskedKeydown: h,
    onMaskedClick: y
  };
}
var jf = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Qf = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Kf = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, Uf = /[a-z0-9_ -]$/i;
function Ts(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      n.target.qComposing = !1, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (De.is.firefox === !0 ? Uf.test(n.data) === !1 : jf.test(n.data) === !0 || Qf.test(n.data) === !0 || Kf.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
var Ms = te({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...jl,
    ...If,
    ...Xt,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...Ql,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = {};
    let o = NaN, i, c, f = null, d;
    const b = E(null), g = Jr(e), {
      innerValue: v,
      hasMask: m,
      moveCursorForPaste: S,
      updateMaskValue: p,
      onMaskedKeydown: x,
      onMaskedClick: C
    } = Hf(e, t, N, b), y = ks(
      e,
      /* type guard */
      !0
    ), h = s(() => Kn(v.value)), _ = Ts(w), L = Kl({ changeEvent: !0 }), F = s(
      () => e.type === "textarea" || e.autogrow === !0
    ), R = s(
      () => F.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), z = s(() => {
      const k = {
        ...L.splitAttrs.listeners.value,
        onInput: w,
        onPaste: q,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: K,
        onBlur: W,
        onFocus: ft
      };
      return k.onCompositionstart = k.onCompositionupdate = k.onCompositionend = _, m.value === !0 && (k.onKeydown = x, k.onClick = C), e.autogrow === !0 && (k.onAnimationend = A), k;
    }), B = s(() => {
      const k = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: g.value,
        ...L.splitAttrs.attributes.value,
        id: L.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return F.value === !1 && (k.type = e.type), e.autogrow === !0 && (k.rows = 1), k;
    });
    ae(() => e.type, () => {
      b.value && (b.value.value = e.modelValue);
    }), ae(() => e.modelValue, (k) => {
      if (m.value === !0) {
        if (c === !0 && (c = !1, String(k) === o))
          return;
        p(k);
      } else v.value !== k && (v.value = k, e.type === "number" && r.hasOwnProperty("value") === !0 && (i === !0 ? i = !1 : delete r.value));
      e.autogrow === !0 && Ke(H);
    }), ae(() => e.autogrow, (k) => {
      k === !0 ? Ke(H) : b.value !== null && n.rows > 0 && (b.value.style.height = "auto");
    }), ae(() => e.dense, () => {
      e.autogrow === !0 && Ke(H);
    });
    function P() {
      xa(() => {
        const k = document.activeElement;
        b.value !== null && b.value !== k && (k === null || k.id !== L.targetUid.value) && b.value.focus({ preventScroll: !0 });
      });
    }
    function T() {
      var k;
      (k = b.value) == null || k.select();
    }
    function q(k) {
      if (m.value === !0 && e.reverseFillMask !== !0) {
        const U = k.target;
        S(U, U.selectionStart, U.selectionEnd);
      }
      t("paste", k);
    }
    function w(k) {
      if (!k || !k.target) return;
      if (e.type === "file") {
        t("update:modelValue", k.target.files);
        return;
      }
      const U = k.target.value;
      if (k.target.qComposing === !0) {
        r.value = U;
        return;
      }
      if (m.value === !0)
        p(U, !1, k.inputType);
      else if (N(U), R.value === !0 && k.target === document.activeElement) {
        const { selectionStart: O, selectionEnd: ne } = k.target;
        O !== void 0 && ne !== void 0 && Ke(() => {
          k.target === document.activeElement && U.indexOf(k.target.value) === 0 && k.target.setSelectionRange(O, ne);
        });
      }
      e.autogrow === !0 && H();
    }
    function A(k) {
      t("animationend", k), H();
    }
    function N(k, U) {
      d = () => {
        f = null, e.type !== "number" && r.hasOwnProperty("value") === !0 && delete r.value, e.modelValue !== k && o !== k && (o = k, U === !0 && (c = !0), t("update:modelValue", k), Ke(() => {
          o === k && (o = NaN);
        })), d = void 0;
      }, e.type === "number" && (i = !0, r.value = k), e.debounce !== void 0 ? (f !== null && clearTimeout(f), r.value = k, f = setTimeout(d, e.debounce)) : d();
    }
    function H() {
      requestAnimationFrame(() => {
        const k = b.value;
        if (k !== null) {
          const U = k.parentNode.style, { scrollTop: O } = k, { overflowY: ne, maxHeight: $ } = l.platform.is.firefox === !0 ? {} : window.getComputedStyle(k), Q = ne !== void 0 && ne !== "scroll";
          Q === !0 && (k.style.overflowY = "hidden"), U.marginBottom = k.scrollHeight - 1 + "px", k.style.height = "1px", k.style.height = k.scrollHeight + "px", Q === !0 && (k.style.overflowY = parseInt($, 10) < k.scrollHeight ? "auto" : "hidden"), U.marginBottom = "", k.scrollTop = O;
        }
      });
    }
    function K(k) {
      _(k), f !== null && (clearTimeout(f), f = null), d == null || d(), t("change", k.target.value);
    }
    function W(k) {
      k !== void 0 && ft(k), f !== null && (clearTimeout(f), f = null), d == null || d(), i = !1, c = !1, delete r.value, e.type !== "file" && setTimeout(() => {
        b.value !== null && (b.value.value = v.value !== void 0 ? v.value : "");
      });
    }
    function ue() {
      return r.hasOwnProperty("value") === !0 ? r.value : v.value !== void 0 ? v.value : "";
    }
    je(() => {
      W();
    }), ut(() => {
      e.autogrow === !0 && H();
    }), Object.assign(L, {
      innerValue: v,
      fieldClass: s(
        () => `q-${F.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: s(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: b,
      emitValue: N,
      hasValue: h,
      floatingLabel: s(
        () => h.value === !0 && (e.type !== "number" || isNaN(v.value) === !1) || Kn(e.displayValue)
      ),
      getControl: () => u(F.value === !0 ? "textarea" : "input", {
        ref: b,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...B.value,
        ...z.value,
        ...e.type !== "file" ? { value: ue() } : y.value
      }),
      getShadowControl: () => u("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (F.value === !0 ? "" : " text-no-wrap")
      }, [
        u("span", { class: "invisible" }, ue()),
        u("span", e.shadowText)
      ])
    });
    const I = Ul(L);
    return Object.assign(a, {
      focus: P,
      select: T,
      getNativeElement: () => b.value
      // deprecated
    }), xt(a, "nativeEl", () => b.value), I;
  }
}), hi = {
  threshold: 0,
  root: null,
  rootMargin: "0px"
};
function bi(e, t, n) {
  var o;
  let a, l, r;
  typeof n == "function" ? (a = n, l = hi, r = t.cfg === void 0) : (a = n.handler, l = Object.assign({}, hi, n.cfg), r = t.cfg === void 0 || Zt(t.cfg, l) === !1), t.handler !== a && (t.handler = a), r === !0 && (t.cfg = l, (o = t.observer) == null || o.unobserve(e), t.observer = new IntersectionObserver(([i]) => {
    if (typeof t.handler == "function") {
      if (i.rootBounds === null && document.body.contains(e) === !0) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(i, t.observer) === !1 || t.once === !0 && i.isIntersecting === !0) && $s(e);
    }
  }, l), t.observer.observe(e));
}
function $s(e) {
  var n;
  const t = e.__qvisible;
  t !== void 0 && ((n = t.observer) == null || n.unobserve(e), delete e.__qvisible);
}
var Yf = tn(
  {
    name: "intersection",
    mounted(e, { modifiers: t, value: n }) {
      const a = {
        once: t.once === !0
      };
      bi(e, a, n), e.__qvisible = a;
    },
    updated(e, t) {
      const n = e.__qvisible;
      n !== void 0 && bi(e, n, t.value);
    },
    beforeUnmount: $s
  }
);
te({
  name: "QIntersection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    once: Boolean,
    transition: String,
    transitionDuration: {
      type: [String, Number],
      default: 300
    },
    ssrPrerender: Boolean,
    margin: String,
    threshold: [Number, Array],
    root: {
      default: null
    },
    disable: Boolean,
    onVisibility: Function
  },
  setup(e, { slots: t, emit: n }) {
    const a = E(Ut.value === !0 ? e.ssrPrerender : !1), l = s(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? {
      handler: c,
      cfg: {
        root: e.root,
        rootMargin: e.margin,
        threshold: e.threshold
      }
    } : c), r = s(
      () => e.disable !== !0 && (Ut.value !== !0 || e.once !== !0 || e.ssrPrerender !== !0)
    ), o = s(() => [[
      Yf,
      l.value,
      void 0,
      { once: e.once }
    ]]), i = s(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    );
    function c(d) {
      a.value !== d.isIntersecting && (a.value = d.isIntersecting, e.onVisibility !== void 0 && n("visibility", a.value));
    }
    function f() {
      if (a.value === !0)
        return [u("div", { key: "content", style: i.value }, xe(t.default))];
      if (t.hidden !== void 0)
        return [u("div", { key: "hidden", style: i.value }, t.hidden())];
    }
    return () => {
      const d = e.transition ? [
        u(Ct, {
          name: "q-transition--" + e.transition
        }, f)
      ] : f();
      return Wt(
        e.tag,
        { class: "q-intersection" },
        d,
        "main",
        r.value,
        () => o.value
      );
    };
  }
});
var Wf = ["ul", "ol"], Xf = te({
  name: "QList",
  props: {
    ...Ue,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), l = s(
      () => Wf.includes(e.tag) ? null : "list"
    ), r = s(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (a.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => u(e.tag, { class: r.value, role: l.value }, xe(t.default));
  }
}), yi = [34, 37, 40, 33, 39, 38], Gf = Object.keys(uo);
te({
  name: "QKnob",
  props: {
    ...Xt,
    ...uo,
    modelValue: {
      type: Number,
      required: !0
    },
    innerMin: Number,
    innerMax: Number,
    step: {
      type: Number,
      default: 1,
      validator: (e) => e >= 0
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change", "dragValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = E(e.modelValue), o = E(!1), i = s(() => isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin), c = s(() => isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax);
    let f;
    function d() {
      r.value = e.modelValue === null ? i.value : at(e.modelValue, i.value, c.value), P(!0);
    }
    ae(
      () => `${e.modelValue}|${i.value}|${c.value}`,
      d
    ), d();
    const b = s(() => e.disable === !1 && e.readonly === !1), g = s(
      () => "q-knob non-selectable" + (b.value === !0 ? " q-knob--editable" : e.disable === !0 ? " disabled" : "")
    ), v = s(() => (String(e.step).trim().split(".")[1] || "").length), m = s(() => e.step === 0 ? 1 : e.step), S = s(() => e.instantFeedback === !0 || o.value === !0), p = l.platform.is.mobile === !0 ? s(() => b.value === !0 ? { onClick: F } : {}) : s(() => b.value === !0 ? {
      onMousedown: L,
      onClick: F,
      onKeydown: R,
      onKeyup: B
    } : {}), x = s(() => b.value === !0 ? { tabindex: e.tabindex } : { [`aria-${e.disable === !0 ? "disabled" : "readonly"}`]: "true" }), C = s(() => {
      const w = {};
      return Gf.forEach((A) => {
        w[A] = e[A];
      }), w;
    });
    function y(w) {
      w.isFinal ? (z(w.evt, !0), o.value = !1) : (w.isFirst && (_(), o.value = !0), z(w.evt));
    }
    const h = s(() => [[
      Qt,
      y,
      void 0,
      { prevent: !0, stop: !0, mouse: !0 }
    ]]);
    function _() {
      const { top: w, left: A, width: N, height: H } = a.$el.getBoundingClientRect();
      f = {
        top: w + H / 2,
        left: A + N / 2
      };
    }
    function L(w) {
      _(), z(w);
    }
    function F(w) {
      _(), z(w, !0);
    }
    function R(w) {
      if (yi.includes(w.keyCode) === !1) return;
      Ae(w);
      const A = ([34, 33].includes(w.keyCode) ? 10 : 1) * m.value, N = [34, 37, 40].includes(w.keyCode) ? -A : A;
      r.value = at(
        parseFloat((r.value + N).toFixed(v.value)),
        i.value,
        c.value
      ), P();
    }
    function z(w, A) {
      const N = Pt(w), H = Math.abs(N.top - f.top), K = Math.sqrt(
        H ** 2 + Math.abs(N.left - f.left) ** 2
      );
      let W = Math.asin(H / K) * (180 / Math.PI);
      N.top < f.top ? W = f.left < N.left ? 90 - W : 270 + W : W = f.left < N.left ? W + 90 : 270 - W, l.lang.rtl === !0 ? W = bl(-W - e.angle, 0, 360) : e.angle && (W = bl(W - e.angle, 0, 360)), e.reverse === !0 && (W = 360 - W);
      let ue = e.min + W / 360 * (e.max - e.min);
      if (m.value !== 0) {
        const I = ue % m.value;
        ue = ue - I + (Math.abs(I) >= m.value / 2 ? (I < 0 ? -1 : 1) * m.value : 0), ue = parseFloat(ue.toFixed(v.value));
      }
      ue = at(ue, i.value, c.value), n("dragValue", ue), r.value !== ue && (r.value = ue), P(A);
    }
    function B(w) {
      yi.includes(w.keyCode) && P(!0);
    }
    function P(w) {
      e.modelValue !== r.value && n("update:modelValue", r.value), w === !0 && n("change", r.value);
    }
    const T = Ka(e);
    function q() {
      return u("input", T.value);
    }
    return () => {
      const w = {
        class: g.value,
        role: "slider",
        "aria-valuemin": i.value,
        "aria-valuemax": c.value,
        "aria-valuenow": e.modelValue,
        ...x.value,
        ...C.value,
        value: r.value,
        instantFeedback: S.value,
        ...p.value
      }, A = {
        default: t.default
      };
      return b.value === !0 && e.name !== void 0 && (A.internal = q), Wt(
        Qu,
        w,
        A,
        "knob",
        b.value,
        () => h.value
      );
    };
  }
});
var { passive: pi } = lt, Zf = ["both", "horizontal", "vertical"], Bs = te({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (e) => Zf.includes(e),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: Xn
  },
  emits: ["scroll"],
  setup(e, { emit: t }) {
    const n = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: !1,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let a = null, l, r;
    ae(() => e.scrollTarget, () => {
      c(), i();
    });
    function o() {
      a == null || a();
      const b = Math.max(0, qn(l)), g = Vl(l), v = {
        top: b - n.position.top,
        left: g - n.position.left
      };
      if (e.axis === "vertical" && v.top === 0 || e.axis === "horizontal" && v.left === 0) return;
      const m = Math.abs(v.top) >= Math.abs(v.left) ? v.top < 0 ? "up" : "down" : v.left < 0 ? "left" : "right";
      n.position = { top: b, left: g }, n.directionChanged = n.direction !== m, n.delta = v, n.directionChanged === !0 && (n.direction = m, n.inflectionPoint = n.position), t("scroll", { ...n });
    }
    function i() {
      l = ln(r, e.scrollTarget), l.addEventListener("scroll", f, pi), f(!0);
    }
    function c() {
      l !== void 0 && (l.removeEventListener("scroll", f, pi), l = void 0);
    }
    function f(b) {
      if (b === !0 || e.debounce === 0 || e.debounce === "0")
        o();
      else if (a === null) {
        const [g, v] = e.debounce ? [setTimeout(o, e.debounce), clearTimeout] : [requestAnimationFrame(o), cancelAnimationFrame];
        a = () => {
          v(g), a = null;
        };
      }
    }
    const { proxy: d } = ve();
    return ae(() => d.$q.lang.rtl, o), ut(() => {
      r = d.$el.parentNode, i();
    }), je(() => {
      a == null || a(), c();
    }), Object.assign(d, {
      trigger: f,
      getPosition: () => n
    }), _t;
  }
});
te({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = E(null), r = E(a.screen.height), o = E(e.container === !0 ? 0 : a.screen.width), i = E({ position: 0, direction: "down", inflectionPoint: 0 }), c = E(0), f = E(Ut.value === !0 ? 0 : fl()), d = s(
      () => "q-layout q-layout--" + (e.container === !0 ? "containerized" : "standard")
    ), b = s(() => e.container === !1 ? { minHeight: a.screen.height + "px" } : null), g = s(() => f.value !== 0 ? { [a.lang.rtl === !0 ? "left" : "right"]: `${f.value}px` } : null), v = s(() => f.value !== 0 ? {
      [a.lang.rtl === !0 ? "right" : "left"]: 0,
      [a.lang.rtl === !0 ? "left" : "right"]: `-${f.value}px`,
      width: `calc(100% + ${f.value}px)`
    } : null);
    function m(h) {
      if (e.container === !0 || document.qScrollPrevented !== !0) {
        const _ = {
          position: h.position.top,
          direction: h.direction,
          directionChanged: h.directionChanged,
          inflectionPoint: h.inflectionPoint.top,
          delta: h.delta.top
        };
        i.value = _, e.onScroll !== void 0 && n("scroll", _);
      }
    }
    function S(h) {
      const { height: _, width: L } = h;
      let F = !1;
      r.value !== _ && (F = !0, r.value = _, e.onScrollHeight !== void 0 && n("scrollHeight", _), x()), o.value !== L && (F = !0, o.value = L), F === !0 && e.onResize !== void 0 && n("resize", h);
    }
    function p({ height: h }) {
      c.value !== h && (c.value = h, x());
    }
    function x() {
      if (e.container === !0) {
        const h = r.value > c.value ? fl() : 0;
        f.value !== h && (f.value = h);
      }
    }
    let C = null;
    const y = {
      instances: {},
      view: s(() => e.view),
      isContainer: s(() => e.container),
      rootRef: l,
      height: r,
      containerHeight: c,
      scrollbarWidth: f,
      totalWidth: s(() => o.value + f.value),
      rows: s(() => {
        const h = e.view.toLowerCase().split(" ");
        return {
          top: h[0].split(""),
          middle: h[1].split(""),
          bottom: h[2].split("")
        };
      }),
      header: ua({ size: 0, offset: 0, space: !1 }),
      right: ua({ size: 300, offset: 0, space: !1 }),
      footer: ua({ size: 0, offset: 0, space: !1 }),
      left: ua({ size: 300, offset: 0, space: !1 }),
      scroll: i,
      animate() {
        C !== null ? clearTimeout(C) : document.body.classList.add("q-body--layout-animate"), C = setTimeout(() => {
          C = null, document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(h, _, L) {
        y[h][_] = L;
      }
    };
    if (fn(Wn, y), fl() > 0) {
      let h = function() {
        F = null, R.classList.remove("hide-scrollbar");
      }, _ = function() {
        if (F === null) {
          if (R.scrollHeight > a.screen.height) return;
          R.classList.add("hide-scrollbar");
        } else
          clearTimeout(F);
        F = setTimeout(h, 300);
      }, L = function(z) {
        F !== null && z === "remove" && (clearTimeout(F), h()), window[`${z}EventListener`]("resize", _);
      }, F = null;
      const R = document.body;
      ae(
        () => e.container !== !0 ? "add" : "remove",
        L
      ), e.container !== !0 && L("add"), Yi(() => {
        L("remove");
      });
    }
    return () => {
      const h = gt(t.default, [
        u(Bs, { onScroll: m }),
        u(jn, { onResize: S })
      ]), _ = u("div", {
        class: d.value,
        style: b.value,
        ref: e.container === !0 ? void 0 : l,
        tabindex: -1
      }, h);
      return e.container === !0 ? u("div", {
        class: "q-layout-container overflow-hidden",
        ref: l
      }, [
        u(jn, { onResize: p }),
        u("div", {
          class: "absolute-full",
          style: g.value
        }, [
          u("div", {
            class: "scroll",
            style: v.value
          }, [_])
        ])
      ]) : _;
    };
  }
});
var Jf = ["horizontal", "vertical", "cell", "none"], ev = te({
  name: "QMarkupTable",
  props: {
    ...Ue,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => Jf.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), l = s(
      () => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (a.value === !0 ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "") + (e.square === !0 ? " q-table--square" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : "")
    );
    return () => u("div", {
      class: l.value
    }, [
      u("table", { class: "q-table" }, xe(t.default))
    ]);
  }
});
te({
  name: "QNoSsr",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    placeholder: String
  },
  setup(e, { slots: t }) {
    const { isHydrated: n } = Wu();
    return () => {
      if (n.value === !0) {
        const r = xe(t.default);
        return r === void 0 ? r : r.length > 1 ? u(e.tag, {}, r) : r[0];
      }
      const a = {
        class: "q-no-ssr-placeholder"
      }, l = xe(t.placeholder);
      if (l !== void 0)
        return l.length > 1 ? u(e.tag, a, l) : l[0];
      if (e.placeholder !== void 0)
        return u(e.tag, a, e.placeholder);
    };
  }
});
var tv = () => u("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  u("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  u("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]), nv = te({
  name: "QRadio",
  props: {
    ...Ue,
    ...mn,
    ...Xt,
    modelValue: { required: !0 },
    val: { required: !0 },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), l = Ye(e, a.$q), r = gn(e, Ou), o = E(null), { refocusTargetEl: i, refocusTarget: c } = Eu(e, o), f = s(() => cn(e.modelValue) === cn(e.val)), d = s(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (l.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : "")
    ), b = s(() => {
      const h = e.color !== void 0 && (e.keepColor === !0 || f.value === !0) ? ` text-${e.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${f.value === !0 ? "truthy" : "falsy"}${h}`;
    }), g = s(
      () => (f.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null
    ), v = s(() => e.disable === !0 ? -1 : e.tabindex || 0), m = s(() => {
      const h = { type: "radio" };
      return e.name !== void 0 && Object.assign(h, {
        // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
        ".checked": f.value === !0,
        "^checked": f.value === !0 ? "checked" : void 0,
        name: e.name,
        value: e.val
      }), h;
    }), S = $n(m);
    function p(h) {
      h !== void 0 && (Ae(h), c(h)), e.disable !== !0 && f.value !== !0 && n("update:modelValue", e.val, h);
    }
    function x(h) {
      (h.keyCode === 13 || h.keyCode === 32) && Ae(h);
    }
    function C(h) {
      (h.keyCode === 13 || h.keyCode === 32) && p(h);
    }
    Object.assign(a, { set: p });
    const y = tv();
    return () => {
      const h = g.value !== null ? [
        u("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          u(Xe, {
            class: "q-radio__icon",
            name: g.value
          })
        ])
      ] : [y];
      e.disable !== !0 && S(
        h,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const _ = [
        u("div", {
          class: b.value,
          style: r.value,
          "aria-hidden": "true"
        }, h)
      ];
      i.value !== null && _.push(i.value);
      const L = e.label !== void 0 ? gt(t.default, [e.label]) : xe(t.default);
      return L !== void 0 && _.push(
        u("div", {
          class: "q-radio__label q-anchor--skip"
        }, L)
      ), u("div", {
        ref: o,
        class: d.value,
        tabindex: v.value,
        role: "radio",
        "aria-label": e.label,
        "aria-checked": f.value === !0 ? "true" : "false",
        "aria-disabled": e.disable === !0 ? "true" : void 0,
        onClick: p,
        onKeydown: x,
        onKeyup: C
      }, _);
    };
  }
}), av = te({
  name: "QToggle",
  props: {
    ...Vu,
    icon: String,
    iconColor: String
  },
  emits: Du,
  setup(e) {
    function t(n, a) {
      const l = s(
        () => (n.value === !0 ? e.checkedIcon : a.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || e.icon
      ), r = s(() => n.value === !0 ? e.iconColor : null);
      return () => [
        u("div", { class: "q-toggle__track" }),
        u(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          l.value !== void 0 ? [
            u(Xe, {
              name: l.value,
              color: r.value
            })
          ] : void 0
        )
      ];
    }
    return Nu("toggle", t);
  }
}), Ls = {
  radio: nv,
  checkbox: Ra,
  toggle: av
}, lv = Object.keys(Ls);
function gr(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (a) => a[n];
}
var rv = te({
  name: "QOptionGroup",
  props: {
    ...Ue,
    modelValue: {
      required: !0
    },
    options: {
      type: Array,
      validator: (e) => e.every(Lt),
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    name: String,
    type: {
      type: String,
      default: "radio",
      validator: (e) => lv.includes(e)
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { proxy: { $q: a } } = ve(), l = Array.isArray(e.modelValue);
    e.type === "radio" ? l === !0 && console.error("q-option-group: model should not be array") : l === !1 && console.error("q-option-group: model should be array in your case");
    const r = Ye(e, a), o = s(() => Ls[e.type]), i = s(() => gr(e.optionValue, "value")), c = s(() => gr(e.optionLabel, "label")), f = s(() => gr(e.optionDisable, "disable")), d = s(() => e.options.map((m) => ({
      val: i.value(m),
      name: m.name === void 0 ? e.name : m.name,
      disable: e.disable || f.value(m),
      leftLabel: m.leftLabel === void 0 ? e.leftLabel : m.leftLabel,
      color: m.color === void 0 ? e.color : m.color,
      checkedIcon: m.checkedIcon,
      uncheckedIcon: m.uncheckedIcon,
      dark: m.dark === void 0 ? r.value : m.dark,
      size: m.size === void 0 ? e.size : m.size,
      dense: e.dense,
      keepColor: m.keepColor === void 0 ? e.keepColor : m.keepColor
    }))), b = s(
      () => "q-option-group q-gutter-x-sm" + (e.inline === !0 ? " q-option-group--inline" : "")
    ), g = s(() => {
      const m = { role: "group" };
      return e.type === "radio" && (m.role = "radiogroup", e.disable === !0 && (m["aria-disabled"] = "true")), m;
    });
    function v(m) {
      t("update:modelValue", m);
    }
    return () => u("div", {
      class: b.value,
      ...g.value
    }, e.options.map((m, S) => {
      const p = n["label-" + S] !== void 0 ? () => n["label-" + S](m) : n.label !== void 0 ? () => n.label(m) : void 0;
      return u("div", [
        u(o.value, {
          label: p === void 0 ? c.value(m) : null,
          modelValue: e.modelValue,
          "onUpdate:modelValue": v,
          ...d.value[S]
        }, p)
      ]);
    }));
  }
});
te({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Et(Wn, tt);
    if (a === tt)
      return console.error("QPage needs to be a deep child of QLayout"), tt;
    if (Et(lu, tt) === tt)
      return console.error("QPage needs to be child of QPageContainer"), tt;
    const r = s(() => {
      const i = (a.header.space === !0 ? a.header.size : 0) + (a.footer.space === !0 ? a.footer.size : 0);
      if (typeof e.styleFn == "function") {
        const c = a.isContainer.value === !0 ? a.containerHeight.value : n.screen.height;
        return e.styleFn(i, c);
      }
      return {
        minHeight: a.isContainer.value === !0 ? a.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px"
      };
    }), o = s(
      () => `q-page${e.padding === !0 ? " q-layout-padding" : ""}`
    );
    return () => u("main", {
      class: o.value,
      style: r.value
    }, xe(t.default));
  }
});
te({
  name: "QPageContainer",
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ve(), a = Et(Wn, tt);
    if (a === tt)
      return console.error("QPageContainer needs to be child of QLayout"), tt;
    fn(lu, !0);
    const l = s(() => {
      const r = {};
      return a.header.space === !0 && (r.paddingTop = `${a.header.size}px`), a.right.space === !0 && (r[`padding${n.lang.rtl === !0 ? "Left" : "Right"}`] = `${a.right.size}px`), a.footer.space === !0 && (r.paddingBottom = `${a.footer.size}px`), a.left.space === !0 && (r[`padding${n.lang.rtl === !0 ? "Right" : "Left"}`] = `${a.left.size}px`), r;
    });
    return () => u("div", {
      class: "q-page-container",
      style: l.value
    }, xe(t.default));
  }
});
var Er = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (e) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(e)
  },
  offset: {
    type: Array,
    validator: (e) => e.length === 2
  },
  expand: Boolean
};
function Fs() {
  const { props: e, proxy: { $q: t } } = ve(), n = Et(Wn, tt);
  if (n === tt)
    return console.error("QPageSticky needs to be child of QLayout"), tt;
  const a = s(() => {
    const b = e.position;
    return {
      top: b.indexOf("top") !== -1,
      right: b.indexOf("right") !== -1,
      bottom: b.indexOf("bottom") !== -1,
      left: b.indexOf("left") !== -1,
      vertical: b === "top" || b === "bottom",
      horizontal: b === "left" || b === "right"
    };
  }), l = s(() => n.header.offset), r = s(() => n.right.offset), o = s(() => n.footer.offset), i = s(() => n.left.offset), c = s(() => {
    let b = 0, g = 0;
    const v = a.value, m = t.lang.rtl === !0 ? -1 : 1;
    v.top === !0 && l.value !== 0 ? g = `${l.value}px` : v.bottom === !0 && o.value !== 0 && (g = `${-o.value}px`), v.left === !0 && i.value !== 0 ? b = `${m * i.value}px` : v.right === !0 && r.value !== 0 && (b = `${-m * r.value}px`);
    const S = { transform: `translate(${b}, ${g})` };
    return e.offset && (S.margin = `${e.offset[1]}px ${e.offset[0]}px`), v.vertical === !0 ? (i.value !== 0 && (S[t.lang.rtl === !0 ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (S[t.lang.rtl === !0 ? "left" : "right"] = `${r.value}px`)) : v.horizontal === !0 && (l.value !== 0 && (S.top = `${l.value}px`), o.value !== 0 && (S.bottom = `${o.value}px`)), S;
  }), f = s(
    () => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === !0 ? "expand" : "shrink"}`
  );
  function d(b) {
    const g = xe(b.default);
    return u(
      "div",
      {
        class: f.value,
        style: c.value
      },
      e.expand === !0 ? g : [u("div", g)]
    );
  }
  return {
    $layout: n,
    getStickyContent: d
  };
}
te({
  name: "QPageScroller",
  props: {
    ...Er,
    scrollOffset: {
      type: Number,
      default: 1e3
    },
    reverse: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    offset: {
      ...Er.offset,
      default: () => [18, 18]
    }
  },
  emits: ["click"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), { $layout: l, getStickyContent: r } = Fs(), o = E(null);
    let i;
    const c = s(() => l.height.value - (l.isContainer.value === !0 ? l.containerHeight.value : a.screen.height));
    function f() {
      return e.reverse === !0 ? c.value - l.scroll.value.position > e.scrollOffset : l.scroll.value.position > e.scrollOffset;
    }
    const d = E(f());
    function b() {
      const p = f();
      d.value !== p && (d.value = p);
    }
    function g() {
      e.reverse === !0 ? i === void 0 && (i = ae(c, b)) : v();
    }
    ae(l.scroll, b), ae(() => e.reverse, g);
    function v() {
      i !== void 0 && (i(), i = void 0);
    }
    function m(p) {
      const x = ln(
        l.isContainer.value === !0 ? o.value : l.rootRef.value
      );
      ga(
        x,
        e.reverse === !0 ? l.height.value : 0,
        e.duration
      ), n("click", p);
    }
    function S() {
      return d.value === !0 ? u("div", {
        ref: o,
        class: "q-page-scroller",
        onClick: m
      }, r(t)) : null;
    }
    return g(), je(v), () => u(
      Ct,
      { name: "q-transition--fade" },
      S
    );
  }
});
te({
  name: "QPageSticky",
  props: Er,
  setup(e, { slots: t }) {
    const { getStickyContent: n } = Fs();
    return () => n(t);
  }
});
function al(e, t) {
  return [!0, !1].includes(e) ? e : t;
}
te({
  name: "QPagination",
  props: {
    ...Ue,
    modelValue: {
      type: Number,
      required: !0
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: !0
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (e) => e === "" || pu.includes(e)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { proxy: n } = ve(), { $q: a } = n, l = Ye(e, a), r = s(() => parseInt(e.min, 10)), o = s(() => parseInt(e.max, 10)), i = s(() => parseInt(e.maxPages, 10)), c = s(() => m.value + " / " + o.value), f = s(() => al(e.boundaryLinks, e.input)), d = s(() => al(e.boundaryNumbers, !e.input)), b = s(() => al(e.directionLinks, e.input)), g = s(() => al(e.ellipses, !e.input)), v = E(null), m = s({
      get: () => e.modelValue,
      set: (q) => {
        if (q = parseInt(q, 10), e.disable || isNaN(q)) return;
        const w = at(q, r.value, o.value);
        e.modelValue !== w && t("update:modelValue", w);
      }
    });
    ae(() => `${r.value}|${o.value}`, () => {
      m.value = e.modelValue;
    });
    const S = s(
      () => "q-pagination row no-wrap items-center" + (e.disable === !0 ? " disabled" : "")
    ), p = s(() => e.gutter in Sl ? `${Sl[e.gutter]}px` : e.gutter || null), x = s(() => p.value !== null ? `--q-pagination-gutter-parent:-${p.value};--q-pagination-gutter-child:${p.value}` : null), C = s(() => {
      const q = [
        e.iconFirst || a.iconSet.pagination.first,
        e.iconPrev || a.iconSet.pagination.prev,
        e.iconNext || a.iconSet.pagination.next,
        e.iconLast || a.iconSet.pagination.last
      ];
      return a.lang.rtl === !0 ? q.reverse() : q;
    }), y = s(() => ({
      "aria-disabled": e.disable === !0 ? "true" : "false",
      role: "navigation"
    })), h = s(() => Ur(e, "flat")), _ = s(() => ({
      [h.value]: !0,
      round: e.round,
      rounded: e.rounded,
      padding: e.padding,
      color: e.color,
      textColor: e.textColor,
      size: e.size,
      ripple: e.ripple !== null ? e.ripple : !0
    })), L = s(() => {
      const q = { [h.value]: !1 };
      return e.activeDesign !== "" && (q[e.activeDesign] = !0), q;
    }), F = s(() => ({
      ...L.value,
      color: e.activeColor || e.color,
      textColor: e.activeTextColor || e.textColor
    })), R = s(() => {
      let q = Math.max(
        i.value,
        1 + (g.value ? 2 : 0) + (d.value ? 2 : 0)
      );
      const w = {
        pgFrom: r.value,
        pgTo: o.value,
        ellipsesStart: !1,
        ellipsesEnd: !1,
        boundaryStart: !1,
        boundaryEnd: !1,
        marginalStyle: {
          minWidth: `${Math.max(2, String(o.value).length)}em`
        }
      };
      return i.value && q < o.value - r.value + 1 && (q = 1 + Math.floor(q / 2) * 2, w.pgFrom = Math.max(r.value, Math.min(o.value - q + 1, e.modelValue - Math.floor(q / 2))), w.pgTo = Math.min(o.value, w.pgFrom + q - 1), d.value && (w.boundaryStart = !0, w.pgFrom++), g.value && w.pgFrom > r.value + (d.value ? 1 : 0) && (w.ellipsesStart = !0, w.pgFrom++), d.value && (w.boundaryEnd = !0, w.pgTo--), g.value && w.pgTo < o.value - (d.value ? 1 : 0) && (w.ellipsesEnd = !0, w.pgTo--)), w;
    });
    function z(q) {
      m.value = q;
    }
    function B(q) {
      m.value = m.value + q;
    }
    const P = s(() => {
      function q() {
        m.value = v.value, v.value = null;
      }
      return {
        "onUpdate:modelValue": (w) => {
          v.value = w;
        },
        onKeyup: (w) => {
          Yt(w, 13) === !0 && q();
        },
        onBlur: q
      };
    });
    function T(q, w, A) {
      const N = {
        "aria-label": w,
        "aria-current": "false",
        ..._.value,
        ...q
      };
      return A === !0 && Object.assign(N, {
        "aria-current": "true",
        ...F.value
      }), w !== void 0 && (e.toFn !== void 0 ? N.to = e.toFn(w) : N.onClick = () => {
        z(w);
      }), u(et, N);
    }
    return Object.assign(n, { set: z, setByOffset: B }), () => {
      const q = [], w = [];
      let A;
      if (f.value === !0 && (q.push(
        T({
          key: "bls",
          disable: e.disable || e.modelValue <= r.value,
          icon: C.value[0],
          "aria-label": a.lang.pagination.first
        }, r.value)
      ), w.unshift(
        T({
          key: "ble",
          disable: e.disable || e.modelValue >= o.value,
          icon: C.value[3],
          "aria-label": a.lang.pagination.last
        }, o.value)
      )), b.value === !0 && (q.push(
        T({
          key: "bdp",
          disable: e.disable || e.modelValue <= r.value,
          icon: C.value[1],
          "aria-label": a.lang.pagination.prev
        }, e.modelValue - 1)
      ), w.unshift(
        T({
          key: "bdn",
          disable: e.disable || e.modelValue >= o.value,
          icon: C.value[2],
          "aria-label": a.lang.pagination.next
        }, e.modelValue + 1)
      )), e.input !== !0) {
        A = [];
        const { pgFrom: N, pgTo: H, marginalStyle: K } = R.value;
        if (R.value.boundaryStart === !0) {
          const W = r.value === e.modelValue;
          q.push(
            T({
              key: "bns",
              style: K,
              disable: e.disable,
              label: r.value
            }, r.value, W)
          );
        }
        if (R.value.boundaryEnd === !0) {
          const W = o.value === e.modelValue;
          w.unshift(
            T({
              key: "bne",
              style: K,
              disable: e.disable,
              label: o.value
            }, o.value, W)
          );
        }
        R.value.ellipsesStart === !0 && q.push(
          T({
            key: "bes",
            style: K,
            disable: e.disable,
            label: "…",
            ripple: !1
          }, N - 1)
        ), R.value.ellipsesEnd === !0 && w.unshift(
          T({
            key: "bee",
            style: K,
            disable: e.disable,
            label: "…",
            ripple: !1
          }, H + 1)
        );
        for (let W = N; W <= H; W++)
          A.push(
            T({
              key: `bpg${W}`,
              style: K,
              disable: e.disable,
              label: W
            }, W, W === e.modelValue)
          );
      }
      return u("div", {
        class: S.value,
        ...y.value
      }, [
        u("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: x.value
        }, [
          ...q,
          e.input === !0 ? u(Ms, {
            class: "inline",
            style: { width: `${c.value.length / 1.5}em` },
            type: "number",
            dense: !0,
            value: v.value,
            disable: e.disable,
            dark: l.value,
            borderless: !0,
            inputClass: e.inputClass,
            inputStyle: e.inputStyle,
            placeholder: c.value,
            min: r.value,
            max: o.value,
            ...P.value
          }) : u("div", {
            class: "q-pagination__middle row justify-center"
          }, A),
          ...w
        ])
      ]);
    };
  }
});
function hr(e) {
  let t = !1, n, a;
  function l() {
    a = arguments, t !== !0 && (t = !0, n = window.requestAnimationFrame(() => {
      e.apply(this, a), a = void 0, t = !1;
    }));
  }
  return l.cancel = () => {
    window.cancelAnimationFrame(n), t = !1;
  }, l;
}
var { passive: ll } = lt;
te({
  name: "QParallax",
  props: {
    src: String,
    height: {
      type: Number,
      default: 500
    },
    speed: {
      type: Number,
      default: 1,
      validator: (e) => e >= 0 && e <= 1
    },
    scrollTarget: Xn,
    onScroll: Function
  },
  setup(e, { slots: t, emit: n }) {
    const a = E(0), l = E(null), r = E(null), o = E(null);
    let i, c, f, d, b, g;
    ae(() => e.height, () => {
      i === !0 && m();
    }), ae(() => e.scrollTarget, () => {
      i === !0 && (C(), x());
    });
    let v = (y) => {
      a.value = y, e.onScroll !== void 0 && n("scroll", y);
    };
    function m() {
      let y, h, _;
      g === window ? (y = 0, _ = h = window.innerHeight) : (y = pl(g).top, h = ya(g), _ = y + h);
      const L = pl(l.value).top, F = L + e.height;
      if (b !== void 0 || F > y && L < _) {
        const R = (_ - L) / (e.height + h);
        S((f - e.height) * R * e.speed), v(R);
      }
    }
    let S = (y) => {
      c.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
    };
    function p() {
      f = c.naturalHeight || c.videoHeight || ya(c), i === !0 && m();
    }
    function x() {
      i = !0, g = ln(l.value, e.scrollTarget), g.addEventListener("scroll", m, ll), window.addEventListener("resize", d, ll), m();
    }
    function C() {
      i === !0 && (i = !1, g.removeEventListener("scroll", m, ll), window.removeEventListener("resize", d, ll), g = void 0, S.cancel(), v.cancel(), d.cancel());
    }
    return ut(() => {
      S = hr(S), v = hr(v), d = hr(p), c = t.media !== void 0 ? r.value.children[0] : o.value, c.onload = c.onloadstart = c.loadedmetadata = p, p(), c.style.display = "initial", window.IntersectionObserver !== void 0 ? (b = new IntersectionObserver((y) => {
        (y[0].isIntersecting === !0 ? x : C)();
      }), b.observe(l.value)) : x();
    }), je(() => {
      C(), b == null || b.disconnect(), c.onload = c.onloadstart = c.loadedmetadata = null;
    }), () => u("div", {
      ref: l,
      class: "q-parallax",
      style: { height: `${e.height}px` }
    }, [
      u("div", {
        ref: r,
        class: "q-parallax__media absolute-full"
      }, t.media !== void 0 ? t.media() : [
        u("img", {
          ref: o,
          src: e.src
        })
      ]),
      u(
        "div",
        { class: "q-parallax__content absolute-full column flex-center" },
        t.content !== void 0 ? t.content({ percentScrolled: a.value }) : xe(t.default)
      )
    ]);
  }
});
function Pa(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const a = e.valueOf();
    if (Object(a) !== a) {
      const l = new e.constructor(a);
      return t.set(e, l), l;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((a) => {
    n.add(Pa(a, t));
  }) : e instanceof Map && e.forEach((a, l) => {
    n.set(l, Pa(a, t));
  }), Object.assign(
    n,
    ...Object.keys(e).map((a) => ({ [a]: Pa(e[a], t) }))
  );
}
te({
  name: "QPopupEdit",
  props: {
    modelValue: {
      required: !0
    },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: {
      type: String,
      default: "primary"
    },
    validate: {
      type: Function,
      default: () => !0
    },
    autoSave: Boolean,
    /* menu props overrides */
    cover: {
      type: Boolean,
      default: !0
    },
    /* end of menu props */
    disable: Boolean
  },
  emits: [
    "update:modelValue",
    "save",
    "cancel",
    "beforeShow",
    "show",
    "beforeHide",
    "hide"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = E(null), o = E(""), i = E("");
    let c = !1;
    const f = s(() => xt({
      initialValue: o.value,
      validate: e.validate,
      set: d,
      cancel: b,
      updatePosition: g
    }, "value", () => i.value, (h) => {
      i.value = h;
    }));
    function d() {
      e.validate(i.value) !== !1 && (v() === !0 && (n("save", i.value, o.value), n("update:modelValue", i.value)), m());
    }
    function b() {
      v() === !0 && n("cancel", i.value, o.value), m();
    }
    function g() {
      Ke(() => {
        r.value.updatePosition();
      });
    }
    function v() {
      return Zt(i.value, o.value) === !1;
    }
    function m() {
      c = !0, r.value.hide();
    }
    function S() {
      c = !1, o.value = Pa(e.modelValue), i.value = Pa(e.modelValue), n("beforeShow");
    }
    function p() {
      n("show");
    }
    function x() {
      c === !1 && v() === !0 && (e.autoSave === !0 && e.validate(i.value) === !0 ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
    }
    function C() {
      n("hide");
    }
    function y() {
      const h = t.default !== void 0 ? [].concat(t.default(f.value)) : [];
      return e.title && h.unshift(
        u("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)
      ), e.buttons === !0 && h.push(
        u("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [
          u(et, {
            flat: !0,
            color: e.color,
            label: e.labelCancel || l.lang.label.cancel,
            onClick: b
          }),
          u(et, {
            flat: !0,
            color: e.color,
            label: e.labelSet || l.lang.label.set,
            onClick: d
          })
        ])
      ), h;
    }
    return Object.assign(a, {
      set: d,
      cancel: b,
      show(h) {
        var _;
        (_ = r.value) == null || _.show(h);
      },
      hide(h) {
        var _;
        (_ = r.value) == null || _.hide(h);
      },
      updatePosition: g
    }), () => {
      if (e.disable !== !0)
        return u(Dl, {
          ref: r,
          class: "q-popup-edit",
          cover: e.cover,
          onBeforeShow: S,
          onShow: p,
          onBeforeHide: x,
          onHide: C,
          onEscapeKey: b
        }, y);
    };
  }
});
te({
  name: "QPopupProxy",
  props: {
    ...Cu,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(e, { slots: t, emit: n, attrs: a }) {
    const { proxy: l } = ve(), { $q: r } = l, o = E(!1), i = E(null), c = s(() => parseInt(e.breakpoint, 10)), { canShow: f } = Wr({ showing: o });
    function d() {
      return r.screen.width < c.value || r.screen.height < c.value ? "dialog" : "menu";
    }
    const b = E(d()), g = s(
      () => b.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    ae(() => d(), (S) => {
      o.value !== !0 && (b.value = S);
    });
    function v(S) {
      o.value = !0, n("show", S);
    }
    function m(S) {
      o.value = !1, b.value = d(), n("hide", S);
    }
    return Object.assign(l, {
      show(S) {
        f(S) === !0 && i.value.show(S);
      },
      hide(S) {
        i.value.hide(S);
      },
      toggle(S) {
        i.value.toggle(S);
      }
    }), xt(l, "currentComponent", () => ({
      type: b.value,
      ref: i.value
    })), () => {
      const S = {
        ref: i,
        ...g.value,
        ...a,
        onShow: v,
        onHide: m
      };
      let p;
      return b.value === "dialog" ? p = Il : (p = Dl, Object.assign(S, {
        target: e.target,
        contextMenu: e.contextMenu,
        noParentEvent: !0,
        separateClosePopup: !0
      })), u(p, S, t.default);
    };
  }
});
var ov = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function Si(e, t, n) {
  return {
    transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
  };
}
var iv = te({
  name: "QLinearProgress",
  props: {
    ...Ue,
    ...mn,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: n } = ve(), a = Ye(e, n.$q), l = gn(e, ov), r = s(() => e.indeterminate === !0 || e.query === !0), o = s(() => e.reverse !== e.query), i = s(() => ({
      ...l.value !== null ? l.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), c = s(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), f = s(() => Si(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), d = s(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), b = s(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${d.value} q-linear-progress__track--${a.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), g = s(() => Si(r.value === !0 ? 1 : e.value, o.value, n.$q)), v = s(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${d.value} q-linear-progress__model--${r.value === !0 ? "in" : ""}determinate`
    ), m = s(() => ({ width: `${e.value * 100}%` })), S = s(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${d.value}`
    );
    return () => {
      const p = [
        u("div", {
          class: b.value,
          style: f.value
        }),
        u("div", {
          class: v.value,
          style: g.value
        })
      ];
      return e.stripe === !0 && r.value === !1 && p.push(
        u("div", {
          class: S.value,
          style: m.value
        })
      ), u("div", {
        class: c.value,
        style: i.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, gt(t.default, p));
    };
  }
}), ra = 40, br = 20;
te({
  name: "QPullToRefresh",
  props: {
    color: String,
    bgColor: String,
    icon: String,
    noMouse: Boolean,
    disable: Boolean,
    scrollTarget: Xn
  },
  emits: ["refresh"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = E("pull"), o = E(0), i = E(!1), c = E(-ra), f = E(!1), d = E({}), b = s(() => ({
      opacity: o.value,
      transform: `translateY(${c.value}px) rotate(${o.value * 360}deg)`
    })), g = s(
      () => "q-pull-to-refresh__puller row flex-center" + (f.value === !0 ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : "")
    );
    function v(_) {
      if (_.isFinal === !0) {
        i.value === !0 && (i.value = !1, r.value === "pulled" ? (r.value = "refreshing", y({ pos: br }), p()) : r.value === "pull" && y({ pos: -ra, ratio: 0 }));
        return;
      }
      if (f.value === !0 || r.value === "refreshing")
        return !1;
      if (_.isFirst === !0) {
        if (qn(x) !== 0 || _.direction !== "down")
          return i.value === !0 && (i.value = !1, r.value = "pull", y({ pos: -ra, ratio: 0 })), !1;
        i.value = !0;
        const { top: R, left: z } = a.$el.getBoundingClientRect();
        d.value = {
          top: R + "px",
          left: z + "px",
          width: window.getComputedStyle(a.$el).getPropertyValue("width")
        };
      }
      kt(_.evt);
      const L = Math.min(140, Math.max(0, _.distance.y));
      c.value = L - ra, o.value = at(L / (br + ra), 0, 1);
      const F = c.value > br ? "pulled" : "pull";
      r.value !== F && (r.value = F);
    }
    const m = s(() => {
      const _ = { down: !0 };
      return e.noMouse !== !0 && (_.mouse = !0), [[
        Qt,
        v,
        void 0,
        _
      ]];
    }), S = s(
      () => `q-pull-to-refresh__content${i.value === !0 ? " no-pointer-events" : ""}`
    );
    function p() {
      n("refresh", () => {
        y({ pos: -ra, ratio: 0 }, () => {
          r.value = "pull";
        });
      });
    }
    let x, C = null;
    function y({ pos: _, ratio: L }, F) {
      f.value = !0, c.value = _, L !== void 0 && (o.value = L), C !== null && clearTimeout(C), C = setTimeout(() => {
        C = null, f.value = !1, F == null || F();
      }, 300);
    }
    function h() {
      x = ln(a.$el, e.scrollTarget);
    }
    return ae(() => e.scrollTarget, h), ut(h), je(() => {
      C !== null && clearTimeout(C);
    }), Object.assign(a, { trigger: p, updateScrollTarget: h }), () => {
      const _ = [
        u("div", { class: S.value }, xe(t.default)),
        u("div", {
          class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",
          style: d.value
        }, [
          u("div", {
            class: g.value,
            style: b.value
          }, [
            r.value !== "refreshing" ? u(Xe, {
              name: e.icon || l.iconSet.pullToRefresh.icon,
              color: e.color,
              size: "32px"
            }) : u(en, {
              size: "24px",
              color: e.color
            })
          ])
        ])
      ];
      return Wt(
        "div",
        { class: "q-pull-to-refresh" },
        _,
        "main",
        e.disable === !1,
        () => m.value
      );
    };
  }
});
var pn = {
  MIN: 0,
  RANGE: 1,
  MAX: 2
};
te({
  name: "QRange",
  props: {
    ...Ku,
    modelValue: {
      type: Object,
      default: () => ({ min: null, max: null }),
      validator: (e) => "min" in e && "max" in e
    },
    dragRange: Boolean,
    dragOnlyRange: Boolean,
    leftLabelColor: String,
    leftLabelTextColor: String,
    rightLabelColor: String,
    rightLabelTextColor: String,
    leftLabelValue: [String, Number],
    rightLabelValue: [String, Number],
    leftThumbColor: String,
    rightThumbColor: String
  },
  emits: Uu,
  setup(e, { emit: t }) {
    const { proxy: { $q: n } } = ve(), { state: a, methods: l } = Yu({
      updateValue: R,
      updatePosition: B,
      getDragging: z,
      formAttrs: s(() => ({
        type: "hidden",
        name: e.name,
        value: `${e.modelValue.min}|${e.modelValue.max}`
      }))
    }), r = E(null), o = E(0), i = E(0), c = E({ min: 0, max: 0 });
    function f() {
      c.value.min = e.modelValue.min === null ? a.innerMin.value : at(e.modelValue.min, a.innerMin.value, a.innerMax.value), c.value.max = e.modelValue.max === null ? a.innerMax.value : at(e.modelValue.max, a.innerMin.value, a.innerMax.value);
    }
    ae(
      () => `${e.modelValue.min}|${e.modelValue.max}|${a.innerMin.value}|${a.innerMax.value}`,
      f
    ), f();
    const d = s(() => l.convertModelToRatio(c.value.min)), b = s(() => l.convertModelToRatio(c.value.max)), g = s(() => a.active.value === !0 ? o.value : d.value), v = s(() => a.active.value === !0 ? i.value : b.value), m = s(() => {
      const T = {
        [a.positionProp.value]: `${100 * g.value}%`,
        [a.sizeProp.value]: `${100 * (v.value - g.value)}%`
      };
      return e.selectionImg !== void 0 && (T.backgroundImage = `url(${e.selectionImg}) !important`), T;
    }), S = s(() => {
      if (a.editable.value !== !0)
        return {};
      if (n.platform.is.mobile === !0)
        return { onClick: l.onMobileClick };
      const T = { onMousedown: l.onActivate };
      return (e.dragRange === !0 || e.dragOnlyRange === !0) && Object.assign(T, {
        onFocus: () => {
          a.focus.value = "both";
        },
        onBlur: l.onBlur,
        onKeydown: P,
        onKeyup: l.onKeyup
      }), T;
    });
    function p(T) {
      return n.platform.is.mobile !== !0 && a.editable.value === !0 && e.dragOnlyRange !== !0 ? {
        onFocus: () => {
          a.focus.value = T;
        },
        onBlur: l.onBlur,
        onKeydown: P,
        onKeyup: l.onKeyup
      } : {};
    }
    const x = s(() => e.dragOnlyRange !== !0 ? a.tabindex.value : null), C = s(() => n.platform.is.mobile !== !0 && (e.dragRange || e.dragOnlyRange === !0) ? a.tabindex.value : null), y = E(null), h = s(() => p("min")), _ = l.getThumbRenderFn({
      focusValue: "min",
      getNodeData: () => ({
        ref: y,
        key: "tmin",
        ...h.value,
        tabindex: x.value
      }),
      ratio: g,
      label: s(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : c.value.min),
      thumbColor: s(() => e.leftThumbColor || e.thumbColor || e.color),
      labelColor: s(() => e.leftLabelColor || e.labelColor),
      labelTextColor: s(() => e.leftLabelTextColor || e.labelTextColor)
    }), L = s(() => p("max")), F = l.getThumbRenderFn({
      focusValue: "max",
      getNodeData: () => ({
        ...L.value,
        key: "tmax",
        tabindex: x.value
      }),
      ratio: v,
      label: s(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : c.value.max),
      thumbColor: s(() => e.rightThumbColor || e.thumbColor || e.color),
      labelColor: s(() => e.rightLabelColor || e.labelColor),
      labelTextColor: s(() => e.rightLabelTextColor || e.labelTextColor)
    });
    function R(T) {
      (c.value.min !== e.modelValue.min || c.value.max !== e.modelValue.max) && t("update:modelValue", { ...c.value }), T === !0 && t("change", { ...c.value });
    }
    function z(T) {
      const { left: q, top: w, width: A, height: N } = r.value.getBoundingClientRect(), H = e.dragOnlyRange === !0 ? 0 : e.vertical === !0 ? y.value.offsetHeight / (2 * N) : y.value.offsetWidth / (2 * A), K = {
        left: q,
        top: w,
        width: A,
        height: N,
        valueMin: c.value.min,
        valueMax: c.value.max,
        ratioMin: d.value,
        ratioMax: b.value
      }, W = l.getDraggingRatio(T, K);
      return e.dragOnlyRange !== !0 && W < K.ratioMin + H ? K.type = pn.MIN : e.dragOnlyRange === !0 || W < K.ratioMax - H ? e.dragRange === !0 || e.dragOnlyRange === !0 ? (K.type = pn.RANGE, Object.assign(K, {
        offsetRatio: W,
        offsetModel: l.convertRatioToModel(W),
        rangeValue: K.valueMax - K.valueMin,
        rangeRatio: K.ratioMax - K.ratioMin
      })) : K.type = K.ratioMax - W < W - K.ratioMin ? pn.MAX : pn.MIN : K.type = pn.MAX, K;
    }
    function B(T, q = a.dragging.value) {
      let w;
      const A = l.getDraggingRatio(T, q), N = l.convertRatioToModel(A);
      switch (q.type) {
        case pn.MIN:
          A <= q.ratioMax ? (w = {
            minR: A,
            maxR: q.ratioMax,
            min: N,
            max: q.valueMax
          }, a.focus.value = "min") : (w = {
            minR: q.ratioMax,
            maxR: A,
            min: q.valueMax,
            max: N
          }, a.focus.value = "max");
          break;
        case pn.MAX:
          A >= q.ratioMin ? (w = {
            minR: q.ratioMin,
            maxR: A,
            min: q.valueMin,
            max: N
          }, a.focus.value = "max") : (w = {
            minR: A,
            maxR: q.ratioMin,
            min: N,
            max: q.valueMin
          }, a.focus.value = "min");
          break;
        case pn.RANGE:
          const H = A - q.offsetRatio, K = at(q.ratioMin + H, a.innerMinRatio.value, a.innerMaxRatio.value - q.rangeRatio), W = N - q.offsetModel, ue = at(q.valueMin + W, a.innerMin.value, a.innerMax.value - q.rangeValue);
          w = {
            minR: K,
            maxR: K + q.rangeRatio,
            min: a.roundValueFn.value(ue),
            max: a.roundValueFn.value(ue + q.rangeValue)
          }, a.focus.value = "both";
          break;
      }
      c.value = c.value.min === null || c.value.max === null ? { min: w.min || e.min, max: w.max || e.max } : { min: w.min, max: w.max }, e.snap !== !0 || e.step === 0 ? (o.value = w.minR, i.value = w.maxR) : (o.value = l.convertModelToRatio(c.value.min), i.value = l.convertModelToRatio(c.value.max));
    }
    function P(T) {
      if (so.includes(T.keyCode) === !1) return;
      Ae(T);
      const q = ([34, 33].includes(T.keyCode) ? 10 : 1) * a.keyStep.value, w = ([34, 37, 40].includes(T.keyCode) ? -1 : 1) * (a.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * q;
      if (a.focus.value === "both") {
        const A = c.value.max - c.value.min, N = at(
          a.roundValueFn.value(c.value.min + w),
          a.innerMin.value,
          a.innerMax.value - A
        );
        c.value = {
          min: N,
          max: a.roundValueFn.value(N + A)
        };
      } else {
        if (a.focus.value === !1)
          return;
        {
          const A = a.focus.value;
          c.value = {
            ...c.value,
            [A]: at(
              a.roundValueFn.value(c.value[A] + w),
              A === "min" ? a.innerMin.value : c.value.min,
              A === "max" ? a.innerMax.value : c.value.max
            )
          };
        }
      }
      R();
    }
    return () => {
      const T = l.getContent(
        m,
        C,
        S,
        (q) => {
          q.push(
            _(),
            F()
          );
        }
      );
      return u("div", {
        ref: r,
        class: "q-range " + a.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""),
        ...a.attributes.value,
        "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max
      }, T);
    };
  }
});
te({
  name: "QRating",
  props: {
    ...mn,
    ...Xt,
    modelValue: {
      type: Number,
      required: !0
    },
    max: {
      type: [String, Number],
      default: 5
    },
    icon: [String, Array],
    iconHalf: [String, Array],
    iconSelected: [String, Array],
    iconAriaLabel: [String, Array],
    color: [String, Array],
    colorHalf: [String, Array],
    colorSelected: [String, Array],
    noReset: Boolean,
    noDimming: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = gn(e), r = Ka(e), o = $n(r), i = E(0);
    let c = {};
    const f = s(
      () => e.readonly !== !0 && e.disable !== !0
    ), d = s(
      () => `q-rating row inline items-center q-rating--${f.value === !0 ? "" : "non-"}editable` + (e.noDimming === !0 ? " q-rating--no-dimming" : "") + (e.disable === !0 ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === !1 ? ` text-${e.color}` : "")
    ), b = s(() => {
      const y = Array.isArray(e.icon) === !0 ? e.icon.length : 0, h = Array.isArray(e.iconSelected) === !0 ? e.iconSelected.length : 0, _ = Array.isArray(e.iconHalf) === !0 ? e.iconHalf.length : 0, L = Array.isArray(e.color) === !0 ? e.color.length : 0, F = Array.isArray(e.colorSelected) === !0 ? e.colorSelected.length : 0, R = Array.isArray(e.colorHalf) === !0 ? e.colorHalf.length : 0;
      return {
        iconLen: y,
        icon: y > 0 ? e.icon[y - 1] : e.icon,
        selIconLen: h,
        selIcon: h > 0 ? e.iconSelected[h - 1] : e.iconSelected,
        halfIconLen: _,
        halfIcon: _ > 0 ? e.iconHalf[h - 1] : e.iconHalf,
        colorLen: L,
        color: L > 0 ? e.color[L - 1] : e.color,
        selColorLen: F,
        selColor: F > 0 ? e.colorSelected[F - 1] : e.colorSelected,
        halfColorLen: R,
        halfColor: R > 0 ? e.colorHalf[R - 1] : e.colorHalf
      };
    }), g = s(() => {
      if (typeof e.iconAriaLabel == "string") {
        const y = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
        return (h) => `${y}${h}`;
      }
      if (Array.isArray(e.iconAriaLabel) === !0) {
        const y = e.iconAriaLabel.length;
        if (y > 0)
          return (h) => e.iconAriaLabel[Math.min(h, y) - 1];
      }
      return (y, h) => `${h} ${y}`;
    }), v = s(() => {
      const y = [], h = b.value, _ = Math.ceil(e.modelValue), L = f.value === !0 ? 0 : null, F = e.iconHalf === void 0 || _ === e.modelValue ? -1 : _;
      for (let R = 1; R <= e.max; R++) {
        const z = i.value === 0 && e.modelValue >= R || i.value > 0 && i.value >= R, B = F === R && i.value < R, P = i.value > 0 && (B === !0 ? _ : e.modelValue) >= R && i.value < R, T = B === !0 ? R <= h.halfColorLen ? e.colorHalf[R - 1] : h.halfColor : h.selColor !== void 0 && z === !0 ? R <= h.selColorLen ? e.colorSelected[R - 1] : h.selColor : R <= h.colorLen ? e.color[R - 1] : h.color, q = (B === !0 ? R <= h.halfIconLen ? e.iconHalf[R - 1] : h.halfIcon : h.selIcon !== void 0 && (z === !0 || P === !0) ? R <= h.selIconLen ? e.iconSelected[R - 1] : h.selIcon : R <= h.iconLen ? e.icon[R - 1] : h.icon) || a.iconSet.rating.icon;
        y.push({
          name: (B === !0 ? R <= h.halfIconLen ? e.iconHalf[R - 1] : h.halfIcon : h.selIcon !== void 0 && (z === !0 || P === !0) ? R <= h.selIconLen ? e.iconSelected[R - 1] : h.selIcon : R <= h.iconLen ? e.icon[R - 1] : h.icon) || a.iconSet.rating.icon,
          attrs: {
            tabindex: L,
            role: "radio",
            "aria-checked": e.modelValue === R ? "true" : "false",
            "aria-label": g.value(R, q)
          },
          iconClass: "q-rating__icon" + (z === !0 || B === !0 ? " q-rating__icon--active" : "") + (P === !0 ? " q-rating__icon--exselected" : "") + (i.value === R ? " q-rating__icon--hovered" : "") + (T !== void 0 ? ` text-${T}` : "")
        });
      }
      return y;
    }), m = s(() => {
      const y = { role: "radiogroup" };
      return e.disable === !0 && (y["aria-disabled"] = "true"), e.readonly === !0 && (y["aria-readonly"] = "true"), y;
    });
    function S(y) {
      if (f.value === !0) {
        const h = at(parseInt(y, 10), 1, parseInt(e.max, 10)), _ = e.noReset !== !0 && e.modelValue === h ? 0 : h;
        _ !== e.modelValue && n("update:modelValue", _), i.value = 0;
      }
    }
    function p(y) {
      f.value === !0 && (i.value = y);
    }
    function x(y, h) {
      switch (y.keyCode) {
        case 13:
        case 32:
          return S(h), Ae(y);
        case 37:
        case 40:
          return c[`rt${h - 1}`] && c[`rt${h - 1}`].focus(), Ae(y);
        case 39:
        case 38:
          return c[`rt${h + 1}`] && c[`rt${h + 1}`].focus(), Ae(y);
      }
    }
    function C() {
      i.value = 0;
    }
    return Ha(() => {
      c = {};
    }), () => {
      const y = [];
      return v.value.forEach(({ iconClass: h, name: _, attrs: L }, F) => {
        const R = F + 1;
        y.push(
          u("div", {
            key: R,
            ref: (z) => {
              c[`rt${R}`] = z;
            },
            class: "q-rating__icon-container flex flex-center",
            ...L,
            onClick() {
              S(R);
            },
            onMouseover() {
              p(R);
            },
            onMouseout: C,
            onFocus() {
              p(R);
            },
            onBlur: C,
            onKeyup(z) {
              x(z, R);
            }
          }, gt(
            t[`tip-${R}`],
            [u(Xe, { class: h, name: _ })]
          ))
        );
      }), e.name !== void 0 && e.disable !== !0 && o(y, "push"), u("div", {
        class: d.value,
        style: l.value,
        ...m.value
      }, y);
    };
  }
});
te({
  name: "QResponsive",
  props: yo,
  setup(e, { slots: t }) {
    const n = po(e);
    return () => u("div", {
      class: "q-responsive"
    }, [
      u("div", {
        class: "q-responsive__filler overflow-hidden"
      }, [
        u("div", { style: n.value })
      ]),
      u("div", {
        class: "q-responsive__content absolute-full fit"
      }, xe(t.default))
    ]);
  }
});
var uv = te({
  props: [
    "store",
    "barStyle",
    "verticalBarStyle",
    "horizontalBarStyle"
  ],
  setup(e) {
    return () => [
      u("div", {
        class: e.store.scroll.vertical.barClass.value,
        style: [e.barStyle, e.verticalBarStyle],
        "aria-hidden": "true",
        onMousedown: e.store.onVerticalMousedown
      }),
      u("div", {
        class: e.store.scroll.horizontal.barClass.value,
        style: [e.barStyle, e.horizontalBarStyle],
        "aria-hidden": "true",
        onMousedown: e.store.onHorizontalMousedown
      }),
      Kt(
        u("div", {
          ref: e.store.scroll.vertical.ref,
          class: e.store.scroll.vertical.thumbClass.value,
          style: e.store.scroll.vertical.style.value,
          "aria-hidden": "true"
        }),
        e.store.thumbVertDir
      ),
      Kt(
        u("div", {
          ref: e.store.scroll.horizontal.ref,
          class: e.store.scroll.horizontal.thumbClass.value,
          style: e.store.scroll.horizontal.style.value,
          "aria-hidden": "true"
        }),
        e.store.thumbHorizDir
      )
    ];
  }
}), _i = ["vertical", "horizontal"], yr = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
}, wi = {
  prevent: !0,
  mouse: !0,
  mouseAllDir: !0
}, Ci = (e) => e >= 250 ? 50 : Math.ceil(e / 5);
te({
  name: "QScrollArea",
  props: {
    ...Ue,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    verticalOffset: {
      type: Array,
      default: [0, 0]
    },
    horizontalOffset: {
      type: Array,
      default: [0, 0]
    },
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(e, { slots: t, emit: n }) {
    const a = E(!1), l = E(!1), r = E(!1), o = {
      vertical: E(0),
      horizontal: E(0)
    }, i = {
      vertical: {
        ref: E(null),
        position: E(0),
        size: E(0)
      },
      horizontal: {
        ref: E(null),
        position: E(0),
        size: E(0)
      }
    }, { proxy: c } = ve(), f = Ye(e, c.$q);
    let d = null, b;
    const g = E(null), v = s(
      () => "q-scrollarea" + (f.value === !0 ? " q-scrollarea--dark" : "")
    );
    Object.assign(o, {
      verticalInner: s(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]),
      horizontalInner: s(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1])
    }), i.vertical.percentage = s(() => {
      const w = i.vertical.size.value - o.vertical.value;
      if (w <= 0)
        return 0;
      const A = at(i.vertical.position.value / w, 0, 1);
      return Math.round(A * 1e4) / 1e4;
    }), i.vertical.thumbHidden = s(() => (e.visible === null ? r.value : e.visible) !== !0 && a.value === !1 && l.value === !1 || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = s(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = s(
      () => Math.round(
        at(
          o.verticalInner.value * o.verticalInner.value / i.vertical.size.value,
          Ci(o.verticalInner.value),
          o.verticalInner.value
        )
      )
    ), i.vertical.style = s(() => ({
      ...e.thumbStyle,
      ...e.verticalThumbStyle,
      top: `${i.vertical.thumbStart.value}px`,
      height: `${i.vertical.thumbSize.value}px`,
      right: `${e.horizontalOffset[1]}px`
    })), i.vertical.thumbClass = s(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = s(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = s(() => {
      const w = i.horizontal.size.value - o.horizontal.value;
      if (w <= 0)
        return 0;
      const A = at(Math.abs(i.horizontal.position.value) / w, 0, 1);
      return Math.round(A * 1e4) / 1e4;
    }), i.horizontal.thumbHidden = s(() => (e.visible === null ? r.value : e.visible) !== !0 && a.value === !1 && l.value === !1 || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = s(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = s(
      () => Math.round(
        at(
          o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value,
          Ci(o.horizontalInner.value),
          o.horizontalInner.value
        )
      )
    ), i.horizontal.style = s(() => ({
      ...e.thumbStyle,
      ...e.horizontalThumbStyle,
      [c.$q.lang.rtl === !0 ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`,
      width: `${i.horizontal.thumbSize.value}px`,
      bottom: `${e.verticalOffset[1]}px`
    })), i.horizontal.thumbClass = s(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = s(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : ""));
    const m = s(() => i.vertical.thumbHidden.value === !0 && i.horizontal.thumbHidden.value === !0 ? e.contentStyle : e.contentActiveStyle);
    function S() {
      const w = {};
      return _i.forEach((A) => {
        const N = i[A];
        Object.assign(w, {
          [A + "Position"]: N.position.value,
          [A + "Percentage"]: N.percentage.value,
          [A + "Size"]: N.size.value,
          [A + "ContainerSize"]: o[A].value,
          [A + "ContainerInnerSize"]: o[A + "Inner"].value
        });
      }), w;
    }
    const p = Sa(() => {
      const w = S();
      w.ref = c, n("scroll", w);
    }, 0);
    function x(w, A, N) {
      if (_i.includes(w) === !1) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      (w === "vertical" ? ga : er)(g.value, A, N);
    }
    function C({ height: w, width: A }) {
      let N = !1;
      o.vertical.value !== w && (o.vertical.value = w, N = !0), o.horizontal.value !== A && (o.horizontal.value = A, N = !0), N === !0 && F();
    }
    function y({ position: w }) {
      let A = !1;
      i.vertical.position.value !== w.top && (i.vertical.position.value = w.top, A = !0), i.horizontal.position.value !== w.left && (i.horizontal.position.value = w.left, A = !0), A === !0 && F();
    }
    function h({ height: w, width: A }) {
      i.horizontal.size.value !== A && (i.horizontal.size.value = A, F()), i.vertical.size.value !== w && (i.vertical.size.value = w, F());
    }
    function _(w, A) {
      const N = i[A];
      if (w.isFirst === !0) {
        if (N.thumbHidden.value === !0) return;
        b = N.position.value, l.value = !0;
      } else if (l.value !== !0)
        return;
      w.isFinal === !0 && (l.value = !1);
      const H = yr[A], K = (N.size.value - o[A].value) / (o[A + "Inner"].value - N.thumbSize.value), W = w.distance[H.dist], ue = b + (w.direction === H.dir ? 1 : -1) * W * K;
      R(ue, A);
    }
    function L(w, A) {
      const N = i[A];
      if (N.thumbHidden.value !== !0) {
        const H = A === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], K = w[yr[A].offset] - H, W = N.thumbStart.value - H;
        if (K < W || K > W + N.thumbSize.value) {
          const ue = K - N.thumbSize.value / 2, I = at(ue / (o[A + "Inner"].value - N.thumbSize.value), 0, 1);
          R(I * Math.max(0, N.size.value - o[A].value), A);
        }
        N.ref.value !== null && N.ref.value.dispatchEvent(new MouseEvent(w.type, w));
      }
    }
    function F() {
      a.value = !0, d !== null && clearTimeout(d), d = setTimeout(() => {
        d = null, a.value = !1;
      }, e.delay), e.onScroll !== void 0 && p();
    }
    function R(w, A) {
      g.value[yr[A].scroll] = w;
    }
    let z = null;
    function B() {
      z !== null && clearTimeout(z), z = setTimeout(() => {
        z = null, r.value = !0;
      }, c.$q.platform.is.ios ? 50 : 0);
    }
    function P() {
      z !== null && (clearTimeout(z), z = null), r.value = !1;
    }
    let T = null;
    ae(() => c.$q.lang.rtl, (w) => {
      g.value !== null && er(
        g.value,
        Math.abs(i.horizontal.position.value) * (w === !0 ? -1 : 1)
      );
    }), vn(() => {
      T = {
        top: i.vertical.position.value,
        left: i.horizontal.position.value
      };
    }), Un(() => {
      if (T === null) return;
      const w = g.value;
      w !== null && (er(w, T.left), ga(w, T.top));
    }), je(p.cancel), Object.assign(c, {
      getScrollTarget: () => g.value,
      getScroll: S,
      getScrollPosition: () => ({
        top: i.vertical.position.value,
        left: i.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: i.vertical.percentage.value,
        left: i.horizontal.percentage.value
      }),
      setScrollPosition: x,
      setScrollPercentage(w, A, N) {
        x(
          w,
          A * (i[w].size.value - o[w].value) * (w === "horizontal" && c.$q.lang.rtl === !0 ? -1 : 1),
          N
        );
      }
    });
    const q = {
      scroll: i,
      thumbVertDir: [[
        Qt,
        (w) => {
          _(w, "vertical");
        },
        void 0,
        { vertical: !0, ...wi }
      ]],
      thumbHorizDir: [[
        Qt,
        (w) => {
          _(w, "horizontal");
        },
        void 0,
        { horizontal: !0, ...wi }
      ]],
      onVerticalMousedown(w) {
        L(w, "vertical");
      },
      onHorizontalMousedown(w) {
        L(w, "horizontal");
      }
    };
    return () => u("div", {
      class: v.value,
      onMouseenter: B,
      onMouseleave: P
    }, [
      u("div", {
        ref: g,
        class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
        tabindex: e.tabindex !== void 0 ? e.tabindex : void 0
      }, [
        u("div", {
          class: "q-scrollarea__content absolute",
          style: m.value
        }, gt(t.default, [
          u(jn, {
            debounce: 0,
            onResize: h
          })
        ])),
        u(Bs, {
          axis: "both",
          onScroll: y
        })
      ]),
      u(jn, {
        debounce: 0,
        onResize: C
      }),
      u(uv, {
        store: q,
        barStyle: e.barStyle,
        verticalBarStyle: e.verticalBarStyle,
        horizontalBarStyle: e.horizontalBarStyle
      })
    ]);
  }
});
var Gt = 1e3, sv = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], zs = Array.prototype.filter, cv = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? _t : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    zs.call(n, (l) => l.dataset && l.dataset.qVsAnchor !== void 0).forEach((l) => {
      delete l.dataset.qVsAnchor;
    });
    const a = n[t];
    a != null && a.dataset && (a.dataset.qVsAnchor = "");
  }));
};
function ha(e, t) {
  return e + t;
}
function pr(e, t, n, a, l, r, o, i) {
  const c = e === window ? document.scrollingElement || document.documentElement : e, f = l === !0 ? "offsetWidth" : "offsetHeight", d = {
    scrollStart: 0,
    scrollViewSize: -o - i,
    scrollMaxSize: 0,
    offsetStart: -o,
    offsetEnd: -i
  };
  if (l === !0 ? (e === window ? (d.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, d.scrollViewSize += document.documentElement.clientWidth) : (d.scrollStart = c.scrollLeft, d.scrollViewSize += c.clientWidth), d.scrollMaxSize = c.scrollWidth, r === !0 && (d.scrollStart = (Ia === !0 ? d.scrollMaxSize - d.scrollViewSize : 0) - d.scrollStart)) : (e === window ? (d.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, d.scrollViewSize += document.documentElement.clientHeight) : (d.scrollStart = c.scrollTop, d.scrollViewSize += c.clientHeight), d.scrollMaxSize = c.scrollHeight), n !== null)
    for (let b = n.previousElementSibling; b !== null; b = b.previousElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (d.offsetStart += b[f]);
  if (a !== null)
    for (let b = a.nextElementSibling; b !== null; b = b.nextElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (d.offsetEnd += b[f]);
  if (t !== e) {
    const b = c.getBoundingClientRect(), g = t.getBoundingClientRect();
    l === !0 ? (d.offsetStart += g.left - b.left, d.offsetEnd -= g.width) : (d.offsetStart += g.top - b.top, d.offsetEnd -= g.height), e !== window && (d.offsetStart += d.scrollStart), d.offsetEnd += d.scrollMaxSize - d.offsetStart;
  }
  return d;
}
function xi(e, t, n, a) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (a === !0 && (t = (Ia === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (a === !0 && (t = (Ia === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Ma(e, t, n, a) {
  if (n >= a)
    return 0;
  const l = t.length, r = Math.floor(n / Gt), o = Math.floor((a - 1) / Gt) + 1;
  let i = e.slice(r, o).reduce(ha, 0);
  return n % Gt !== 0 && (i -= t.slice(r * Gt, n).reduce(ha, 0)), a % Gt !== 0 && a !== l && (i -= t.slice(a, o * Gt).reduce(ha, 0)), i;
}
var Rs = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: 10
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
}, Ps = Object.keys(Rs), Or = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...Rs
};
function As({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: a
  // optional
}) {
  const l = ve(), { props: r, emit: o, proxy: i } = l, { $q: c } = i;
  let f, d, b, g = [], v;
  const m = E(0), S = E(0), p = E({}), x = E(null), C = E(null), y = E(null), h = E({ from: 0, to: 0 }), _ = s(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  a === void 0 && (a = s(() => r.virtualScrollItemSize));
  const L = s(() => a.value + ";" + r.virtualScrollHorizontal), F = s(
    () => L.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter
  );
  ae(F, () => {
    N();
  }), ae(L, R);
  function R() {
    A(d, !0);
  }
  function z(I) {
    A(I === void 0 ? d : I);
  }
  function B(I, k) {
    const U = t();
    if (U == null || U.nodeType === 8) return;
    const O = pr(
      U,
      n(),
      x.value,
      C.value,
      r.virtualScrollHorizontal,
      c.lang.rtl,
      r.virtualScrollStickySizeStart,
      r.virtualScrollStickySizeEnd
    );
    b !== O.scrollViewSize && N(O.scrollViewSize), T(
      U,
      O,
      Math.min(e.value - 1, Math.max(0, parseInt(I, 10) || 0)),
      0,
      sv.indexOf(k) !== -1 ? k : d !== -1 && I > d ? "end" : "start"
    );
  }
  function P() {
    const I = t();
    if (I == null || I.nodeType === 8) return;
    const k = pr(
      I,
      n(),
      x.value,
      C.value,
      r.virtualScrollHorizontal,
      c.lang.rtl,
      r.virtualScrollStickySizeStart,
      r.virtualScrollStickySizeEnd
    ), U = e.value - 1, O = k.scrollMaxSize - k.offsetStart - k.offsetEnd - S.value;
    if (f === k.scrollStart) return;
    if (k.scrollMaxSize <= 0) {
      T(I, k, 0, 0);
      return;
    }
    b !== k.scrollViewSize && N(k.scrollViewSize), q(h.value.from);
    const ne = Math.floor(k.scrollMaxSize - Math.max(k.scrollViewSize, k.offsetEnd) - Math.min(v[U], k.scrollViewSize / 2));
    if (ne > 0 && Math.ceil(k.scrollStart) >= ne) {
      T(
        I,
        k,
        U,
        k.scrollMaxSize - k.offsetEnd - g.reduce(ha, 0)
      );
      return;
    }
    let $ = 0, Q = k.scrollStart - k.offsetStart, oe = Q;
    if (Q <= O && Q + k.scrollViewSize >= m.value)
      Q -= m.value, $ = h.value.from, oe = Q;
    else
      for (let j = 0; Q >= g[j] && $ < U; j++)
        Q -= g[j], $ += Gt;
    for (; Q > 0 && $ < U; )
      Q -= v[$], Q > -k.scrollViewSize ? ($++, oe = Q) : oe = v[$] + Q;
    T(
      I,
      k,
      $,
      oe
    );
  }
  function T(I, k, U, O, ne) {
    const $ = typeof ne == "string" && ne.indexOf("-force") !== -1, Q = $ === !0 ? ne.replace("-force", "") : ne, oe = Q !== void 0 ? Q : "start";
    let j = Math.max(0, U - p.value[oe]), de = j + p.value.total;
    de > e.value && (de = e.value, j = Math.max(0, de - p.value.total)), f = k.scrollStart;
    const he = j !== h.value.from || de !== h.value.to;
    if (he === !1 && Q === void 0) {
      K(U);
      return;
    }
    const { activeElement: Y } = document, fe = y.value;
    he === !0 && fe !== null && fe !== Y && fe.contains(Y) === !0 && (fe.addEventListener("focusout", w), setTimeout(() => {
      fe == null || fe.removeEventListener("focusout", w);
    })), cv(fe, U - j);
    const be = Q !== void 0 ? v.slice(j, U).reduce(ha, 0) : 0;
    if (he === !0) {
      const _e = de >= h.value.from && j <= h.value.to ? h.value.to : de;
      h.value = { from: j, to: _e }, m.value = Ma(g, v, 0, j), S.value = Ma(g, v, de, e.value), requestAnimationFrame(() => {
        h.value.to !== de && f === k.scrollStart && (h.value = { from: h.value.from, to: de }, S.value = Ma(g, v, de, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (f !== k.scrollStart) return;
      he === !0 && q(j);
      const _e = v.slice(j, U).reduce(ha, 0), Be = _e + k.offsetStart + m.value, se = Be + v[U];
      let Te = Be + O;
      if (Q !== void 0) {
        const Pe = _e - be, Oe = k.scrollStart + Pe;
        Te = $ !== !0 && Oe < Be && se < Oe + k.scrollViewSize ? Oe : Q === "end" ? se - k.scrollViewSize : Be - (Q === "start" ? 0 : Math.round((k.scrollViewSize - v[U]) / 2));
      }
      f = Te, xi(
        I,
        Te,
        r.virtualScrollHorizontal,
        c.lang.rtl
      ), K(U);
    });
  }
  function q(I) {
    const k = y.value;
    if (k) {
      const U = zs.call(
        k.children,
        (j) => j.classList && j.classList.contains("q-virtual-scroll--skip") === !1
      ), O = U.length, ne = r.virtualScrollHorizontal === !0 ? (j) => j.getBoundingClientRect().width : (j) => j.offsetHeight;
      let $ = I, Q, oe;
      for (let j = 0; j < O; ) {
        for (Q = ne(U[j]), j++; j < O && U[j].classList.contains("q-virtual-scroll--with-prev") === !0; )
          Q += ne(U[j]), j++;
        oe = Q - v[$], oe !== 0 && (v[$] += oe, g[Math.floor($ / Gt)] += oe), $++;
      }
    }
  }
  function w() {
    var I;
    (I = y.value) == null || I.focus();
  }
  function A(I, k) {
    const U = 1 * a.value;
    (k === !0 || Array.isArray(v) === !1) && (v = []);
    const O = v.length;
    v.length = e.value;
    for (let $ = e.value - 1; $ >= O; $--)
      v[$] = U;
    const ne = Math.floor((e.value - 1) / Gt);
    g = [];
    for (let $ = 0; $ <= ne; $++) {
      let Q = 0;
      const oe = Math.min(($ + 1) * Gt, e.value);
      for (let j = $ * Gt; j < oe; j++)
        Q += v[j];
      g.push(Q);
    }
    d = -1, f = void 0, m.value = Ma(g, v, 0, h.value.from), S.value = Ma(g, v, h.value.to, e.value), I >= 0 ? (q(h.value.from), Ke(() => {
      B(I);
    })) : W();
  }
  function N(I) {
    if (I === void 0 && typeof window < "u") {
      const Q = t();
      Q != null && Q.nodeType !== 8 && (I = pr(
        Q,
        n(),
        x.value,
        C.value,
        r.virtualScrollHorizontal,
        c.lang.rtl,
        r.virtualScrollStickySizeStart,
        r.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    b = I;
    const k = parseFloat(r.virtualScrollSliceRatioBefore) || 0, U = parseFloat(r.virtualScrollSliceRatioAfter) || 0, O = 1 + k + U, ne = I === void 0 || I <= 0 ? 1 : Math.ceil(I / a.value), $ = Math.max(
      1,
      ne,
      Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / O)
    );
    p.value = {
      total: Math.ceil($ * O),
      start: Math.ceil($ * k),
      center: Math.ceil($ * (0.5 + k)),
      end: Math.ceil($ * (1 + k)),
      view: ne
    };
  }
  function H(I, k) {
    const U = r.virtualScrollHorizontal === !0 ? "width" : "height", O = {
      ["--q-virtual-scroll-item-" + U]: a.value + "px"
    };
    return [
      I === "tbody" ? u(I, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: x
      }, [
        u("tr", [
          u("td", {
            style: { [U]: `${m.value}px`, ...O },
            colspan: _.value
          })
        ])
      ]) : u(I, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: x,
        style: { [U]: `${m.value}px`, ...O }
      }),
      u(I, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: y,
        tabindex: -1
      }, k.flat()),
      I === "tbody" ? u(I, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: C
      }, [
        u("tr", [
          u("td", {
            style: { [U]: `${S.value}px`, ...O },
            colspan: _.value
          })
        ])
      ]) : u(I, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: C,
        style: { [U]: `${S.value}px`, ...O }
      })
    ];
  }
  function K(I) {
    d !== I && (r.onVirtualScroll !== void 0 && o("virtualScroll", {
      index: I,
      from: h.value.from,
      to: h.value.to - 1,
      direction: I < d ? "decrease" : "increase",
      ref: i
    }), d = I);
  }
  N();
  const W = Sa(
    P,
    c.platform.is.ios === !0 ? 120 : 35
  );
  Vr(() => {
    N();
  });
  let ue = !1;
  return vn(() => {
    ue = !0;
  }), Un(() => {
    if (ue !== !0) return;
    const I = t();
    f !== void 0 && I !== void 0 && I !== null && I.nodeType !== 8 ? xi(
      I,
      f,
      r.virtualScrollHorizontal,
      c.lang.rtl
    ) : B(d);
  }), __QUASAR_SSR__ || je(() => {
    W.cancel();
  }), Object.assign(i, { scrollTo: B, reset: R, refresh: z }), {
    virtualScrollSliceRange: h,
    virtualScrollSliceSizeComputed: p,
    setVirtualScrollSize: N,
    onVirtualScrollEvt: W,
    localResetVirtualScroll: A,
    padVirtualScroll: H,
    scrollTo: B,
    reset: R,
    refresh: z
  };
}
var ki = (e) => ["add", "add-unique", "toggle"].includes(e), dv = ".*+?^${}()|[]\\", fv = Object.keys(jl);
function Sr(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (a) => a !== null && typeof a == "object" && n in a ? a[n] : a;
}
var vv = te({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...Or,
    ...Xt,
    ...jl,
    // override of useFieldProps > modelValue
    modelValue: {
      required: !0
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: ki
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    disableTabSelection: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default"
    },
    // override of useVirtualScrollProps > virtualScrollItemSize (no default)
    virtualScrollItemSize: Or.virtualScrollItemSize.type,
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...Ql,
    "add",
    "remove",
    "inputValue",
    "keyup",
    "keypress",
    "keydown",
    "popupShow",
    "popupHide",
    "filterAbort"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = E(!1), o = E(!1), i = E(-1), c = E(""), f = E(!1), d = E(!1);
    let b = null, g = null, v, m, S, p = null, x, C, y, h;
    const _ = E(null), L = E(null), F = E(null), R = E(null), z = E(null), B = Jr(e), P = Ts(Z), T = s(() => Array.isArray(e.options) ? e.options.length : 0), q = s(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: w,
      virtualScrollSliceSizeComputed: A,
      localResetVirtualScroll: N,
      padVirtualScroll: H,
      onVirtualScrollEvt: K,
      scrollTo: W,
      setVirtualScrollSize: ue
    } = As({
      virtualScrollLength: T,
      getVirtualScrollTarget: $t,
      getVirtualScrollEl: vt,
      virtualScrollItemSizeComputed: q
    }), I = Kl(), k = s(() => {
      const D = e.mapOptions === !0 && e.multiple !== !0, pe = e.modelValue !== void 0 && (e.modelValue !== null || D === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const Ce = e.mapOptions === !0 && v !== void 0 ? v : [], Qe = pe.map((ot) => X(ot, Ce));
        return e.modelValue === null && D === !0 ? Qe.filter((ot) => ot !== null) : Qe;
      }
      return pe;
    }), U = s(() => {
      const D = {};
      return fv.forEach((pe) => {
        const Ce = e[pe];
        Ce !== void 0 && (D[pe] = Ce);
      }), D;
    }), O = s(() => e.optionsDark === null ? I.isDark.value : e.optionsDark), ne = s(() => Kn(k.value)), $ = s(() => {
      let D = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || k.value.length === 0 ? [D, e.inputClass] : (D += " q-field__input--padding", e.inputClass === void 0 ? D : [D, e.inputClass]);
    }), Q = s(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), oe = s(() => T.value === 0), j = s(
      () => k.value.map((D) => G.value(D)).join(", ")
    ), de = s(() => e.displayValue !== void 0 ? e.displayValue : j.value), he = s(() => e.optionsHtml === !0 ? () => !0 : (D) => (D == null ? void 0 : D.html) === !0), Y = s(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || k.value.some(he.value))), fe = s(() => I.focused.value === !0 ? e.tabindex : -1), be = s(() => {
      const D = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": r.value === !0 ? "true" : "false",
        "aria-controls": `${I.targetUid.value}_lb`
      };
      return i.value >= 0 && (D["aria-activedescendant"] = `${I.targetUid.value}_${i.value}`), D;
    }), _e = s(() => ({
      id: `${I.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Be = s(() => k.value.map((D, pe) => ({
      index: pe,
      opt: D,
      html: he.value(D),
      selected: !0,
      removeAtIndex: Fe,
      toggleOption: Ge,
      tabindex: fe.value
    }))), se = s(() => {
      if (T.value === 0)
        return [];
      const { from: D, to: pe } = w.value;
      return e.options.slice(D, pe).map((Ce, Qe) => {
        const ot = ce.value(Ce) === !0, pt = re(Ce) === !0, it = D + Qe, St = {
          clickable: !0,
          active: pt,
          activeClass: Oe.value,
          manualFocus: !0,
          focused: !1,
          disable: ot,
          tabindex: -1,
          dense: e.optionsDense,
          dark: O.value,
          role: "option",
          "aria-selected": pt === !0 ? "true" : "false",
          id: `${I.targetUid.value}_${it}`,
          onClick: () => {
            Ge(Ce);
          }
        };
        return ot !== !0 && (i.value === it && (St.focused = !0), l.platform.is.desktop === !0 && (St.onMousemove = () => {
          r.value === !0 && J(it);
        })), {
          index: it,
          opt: Ce,
          html: he.value(Ce),
          label: G.value(Ce),
          selected: St.active,
          focused: St.focused,
          toggleOption: Ge,
          setOptionIndex: J,
          itemProps: St
        };
      });
    }), Te = s(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : l.iconSet.arrow.dropdown), Pe = s(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Oe = s(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), le = s(() => Sr(e.optionValue, "value")), G = s(() => Sr(e.optionLabel, "label")), ce = s(() => Sr(e.optionDisable, "disable")), we = s(() => k.value.map(le.value)), Ve = s(() => {
      const D = {
        onInput: Z,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: P,
        onKeydown: nt,
        onKeyup: qe,
        onKeypress: Ie,
        onFocus: Se,
        onClick(pe) {
          m === !0 && ft(pe);
        }
      };
      return D.onCompositionstart = D.onCompositionupdate = D.onCompositionend = P, D;
    });
    ae(k, (D) => {
      v = D, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && I.innerLoading.value !== !0 && (o.value !== !0 && r.value !== !0 || ne.value !== !0) && (S !== !0 && Ht(), (o.value === !0 || r.value === !0) && Me(""));
    }, { immediate: !0 }), ae(() => e.fillInput, Ht), ae(r, Yl), ae(T, uc);
    function Ne(D) {
      return e.emitValue === !0 ? le.value(D) : D;
    }
    function Le(D) {
      if (D !== -1 && D < k.value.length)
        if (e.multiple === !0) {
          const pe = e.modelValue.slice();
          n("remove", { index: D, value: pe.splice(D, 1)[0] }), n("update:modelValue", pe);
        } else
          n("update:modelValue", null);
    }
    function Fe(D) {
      Le(D), I.focus();
    }
    function We(D, pe) {
      const Ce = Ne(D);
      if (e.multiple !== !0) {
        e.fillInput === !0 && $e(
          G.value(D),
          !0,
          !0
        ), n("update:modelValue", Ce);
        return;
      }
      if (k.value.length === 0) {
        n("add", { index: 0, value: Ce }), n("update:modelValue", e.multiple === !0 ? [Ce] : Ce);
        return;
      }
      if (pe === !0 && re(D) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
      const Qe = e.modelValue.slice();
      n("add", { index: Qe.length, value: Ce }), Qe.push(Ce), n("update:modelValue", Qe);
    }
    function Ge(D, pe) {
      var pt;
      if (I.editable.value !== !0 || D === void 0 || ce.value(D) === !0) return;
      const Ce = le.value(D);
      if (e.multiple !== !0) {
        pe !== !0 && ($e(
          e.fillInput === !0 ? G.value(D) : "",
          !0,
          !0
        ), Ze()), (pt = L.value) == null || pt.focus(), (k.value.length === 0 || Zt(le.value(k.value[0]), Ce) !== !0) && n("update:modelValue", e.emitValue === !0 ? Ce : D);
        return;
      }
      if ((m !== !0 || f.value === !0) && I.focus(), Se(), k.value.length === 0) {
        const it = e.emitValue === !0 ? Ce : D;
        n("add", { index: 0, value: it }), n("update:modelValue", e.multiple === !0 ? [it] : it);
        return;
      }
      const Qe = e.modelValue.slice(), ot = we.value.findIndex((it) => Zt(it, Ce));
      if (ot !== -1)
        n("remove", { index: ot, value: Qe.splice(ot, 1)[0] });
      else {
        if (e.maxValues !== void 0 && Qe.length >= e.maxValues) return;
        const it = e.emitValue === !0 ? Ce : D;
        n("add", { index: Qe.length, value: it }), Qe.push(it);
      }
      n("update:modelValue", Qe);
    }
    function J(D) {
      if (l.platform.is.desktop !== !0) return;
      const pe = D !== -1 && D < T.value ? D : -1;
      i.value !== pe && (i.value = pe);
    }
    function ie(D = 1, pe) {
      if (r.value === !0) {
        let Ce = i.value;
        do
          Ce = bl(
            Ce + D,
            -1,
            T.value - 1
          );
        while (Ce !== -1 && Ce !== i.value && ce.value(e.options[Ce]) === !0);
        i.value !== Ce && (J(Ce), W(Ce), pe !== !0 && e.useInput === !0 && e.fillInput === !0 && me(
          Ce >= 0 ? G.value(e.options[Ce]) : x,
          !0
        ));
      }
    }
    function X(D, pe) {
      const Ce = (Qe) => Zt(le.value(Qe), D);
      return e.options.find(Ce) || pe.find(Ce) || D;
    }
    function re(D) {
      const pe = le.value(D);
      return we.value.find((Ce) => Zt(Ce, pe)) !== void 0;
    }
    function Se(D) {
      e.useInput === !0 && L.value !== null && (D === void 0 || L.value === D.target && D.target.value === j.value) && L.value.select();
    }
    function Re(D) {
      Yt(D, 27) === !0 && r.value === !0 && (ft(D), Ze(), Ht()), n("keyup", D);
    }
    function qe(D) {
      const { value: pe } = D.target;
      if (D.keyCode !== void 0) {
        Re(D);
        return;
      }
      if (D.target.value = "", b !== null && (clearTimeout(b), b = null), g !== null && (clearTimeout(g), g = null), Ht(), typeof pe == "string" && pe.length !== 0) {
        const Ce = pe.toLocaleLowerCase(), Qe = (pt) => {
          const it = e.options.find((St) => String(pt.value(St)).toLocaleLowerCase() === Ce);
          return it === void 0 ? !1 : (k.value.indexOf(it) === -1 ? Ge(it) : Ze(), !0);
        }, ot = (pt) => {
          Qe(le) !== !0 && pt !== !0 && Qe(G) !== !0 && Me(pe, !0, () => ot(!0));
        };
        ot();
      } else
        I.clearValue(D);
    }
    function Ie(D) {
      n("keypress", D);
    }
    function nt(D) {
      if (n("keydown", D), Yn(D) === !0) return;
      const pe = c.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Ce = D.shiftKey !== !0 && e.disableTabSelection !== !0 && e.multiple !== !0 && (i.value !== -1 || pe === !0);
      if (D.keyCode === 27) {
        kt(D);
        return;
      }
      if (D.keyCode === 9 && Ce === !1) {
        ke();
        return;
      }
      if (D.target === void 0 || D.target.id !== I.targetUid.value || I.editable.value !== !0) return;
      if (D.keyCode === 40 && I.innerLoading.value !== !0 && r.value === !1) {
        Ae(D), ze();
        return;
      }
      if (D.keyCode === 8 && (e.useChips === !0 || e.clearable === !0) && e.hideSelected !== !0 && c.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Le(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (D.keyCode === 35 || D.keyCode === 36) && (typeof c.value != "string" || c.value.length === 0) && (Ae(D), i.value = -1, ie(D.keyCode === 36 ? 1 : -1, e.multiple)), (D.keyCode === 33 || D.keyCode === 34) && A.value !== void 0 && (Ae(D), i.value = Math.max(
        -1,
        Math.min(
          T.value,
          i.value + (D.keyCode === 33 ? -1 : 1) * A.value.view
        )
      ), ie(D.keyCode === 33 ? 1 : -1, e.multiple)), (D.keyCode === 38 || D.keyCode === 40) && (Ae(D), ie(D.keyCode === 38 ? -1 : 1, e.multiple));
      const Qe = T.value;
      if ((y === void 0 || h < Date.now()) && (y = ""), Qe > 0 && e.useInput !== !0 && D.key !== void 0 && D.key.length === 1 && D.altKey === !1 && D.ctrlKey === !1 && D.metaKey === !1 && (D.keyCode !== 32 || y.length !== 0)) {
        r.value !== !0 && ze(D);
        const ot = D.key.toLocaleLowerCase(), pt = y.length === 1 && y[0] === ot;
        h = Date.now() + 1500, pt === !1 && (Ae(D), y += ot);
        const it = new RegExp("^" + y.split("").map((Gn) => dv.indexOf(Gn) !== -1 ? "\\" + Gn : Gn).join(".*"), "i");
        let St = i.value;
        if (pt === !0 || St < 0 || it.test(G.value(e.options[St])) !== !0)
          do
            St = bl(St + 1, -1, Qe - 1);
          while (St !== i.value && (ce.value(e.options[St]) === !0 || it.test(G.value(e.options[St])) !== !0));
        i.value !== St && Ke(() => {
          J(St), W(St), St >= 0 && e.useInput === !0 && e.fillInput === !0 && me(G.value(e.options[St]), !0);
        });
        return;
      }
      if (!(D.keyCode !== 13 && (D.keyCode !== 32 || e.useInput === !0 || y !== "") && (D.keyCode !== 9 || Ce === !1))) {
        if (D.keyCode !== 9 && Ae(D), i.value !== -1 && i.value < Qe) {
          Ge(e.options[i.value]);
          return;
        }
        if (pe === !0) {
          const ot = (pt, it) => {
            var Gn;
            if (it) {
              if (ki(it) !== !0) return;
            } else
              it = e.newValueMode;
            if ($e("", e.multiple !== !0, !0), pt == null) return;
            (it === "toggle" ? Ge : We)(pt, it === "add-unique"), e.multiple !== !0 && ((Gn = L.value) == null || Gn.focus(), Ze());
          };
          if (e.onNewValue !== void 0 ? n("newValue", c.value, ot) : ot(c.value), e.multiple !== !0) return;
        }
        r.value === !0 ? ke() : I.innerLoading.value !== !0 && ze();
      }
    }
    function vt() {
      return m === !0 ? z.value : F.value !== null && F.value.contentEl !== null ? F.value.contentEl : void 0;
    }
    function $t() {
      return vt();
    }
    function bn() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Be.value.map((D) => t["selected-item"](D)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Be.value.map((D, pe) => u(Iu, {
        key: "option-" + pe,
        removable: I.editable.value === !0 && ce.value(D.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: fe.value,
        onRemove() {
          D.removeAtIndex(pe);
        }
      }, () => u("span", {
        class: "ellipsis",
        [D.html === !0 ? "innerHTML" : "textContent"]: G.value(D.opt)
      }))) : [
        u("span", {
          class: "ellipsis",
          [Y.value === !0 ? "innerHTML" : "textContent"]: de.value
        })
      ];
    }
    function Vt() {
      if (oe.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: c.value }) : void 0;
      const D = t.option !== void 0 ? t.option : (Ce) => u(Hl, {
        key: Ce.index,
        ...Ce.itemProps
      }, () => u(
        Tn,
        () => u(
          Pr,
          () => u("span", {
            [Ce.html === !0 ? "innerHTML" : "textContent"]: Ce.label
          })
        )
      ));
      let pe = H("div", se.value.map(D));
      return t["before-options"] !== void 0 && (pe = t["before-options"]().concat(pe)), gt(t["after-options"], pe);
    }
    function rn(D, pe) {
      const Ce = pe === !0 ? { ...be.value, ...I.splitAttrs.attributes.value } : void 0, Qe = {
        ref: pe === !0 ? L : void 0,
        key: "i_t",
        class: $.value,
        style: e.inputStyle,
        value: c.value !== void 0 ? c.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...Ce,
        id: pe === !0 ? I.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": D === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...Ve.value
      };
      return D !== !0 && m === !0 && (Array.isArray(Qe.class) === !0 ? Qe.class = [...Qe.class, "no-pointer-events"] : Qe.class += " no-pointer-events"), u("input", Qe);
    }
    function Z(D) {
      b !== null && (clearTimeout(b), b = null), g !== null && (clearTimeout(g), g = null), !(D && D.target && D.target.qComposing === !0) && (me(D.target.value || ""), S = !0, x = c.value, I.focused.value !== !0 && (m !== !0 || f.value === !0) && I.focus(), e.onFilter !== void 0 && (b = setTimeout(() => {
        b = null, Me(c.value);
      }, e.inputDebounce)));
    }
    function me(D, pe) {
      c.value !== D && (c.value = D, pe === !0 || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", D) : g = setTimeout(() => {
        g = null, n("inputValue", D);
      }, e.inputDebounce));
    }
    function $e(D, pe, Ce) {
      S = Ce !== !0, e.useInput === !0 && (me(D, !0), (pe === !0 || Ce !== !0) && (x = D), pe !== !0 && Me(D));
    }
    function Me(D, pe, Ce) {
      if (e.onFilter === void 0 || pe !== !0 && I.focused.value !== !0) return;
      I.innerLoading.value === !0 ? n("filterAbort") : (I.innerLoading.value = !0, d.value = !0), D !== "" && e.multiple !== !0 && k.value.length !== 0 && S !== !0 && D === G.value(k.value[0]) && (D = "");
      const Qe = setTimeout(() => {
        r.value === !0 && (r.value = !1);
      }, 10);
      p !== null && clearTimeout(p), p = Qe, n(
        "filter",
        D,
        (ot, pt) => {
          (pe === !0 || I.focused.value === !0) && p === Qe && (clearTimeout(p), typeof ot == "function" && ot(), d.value = !1, Ke(() => {
            I.innerLoading.value = !1, I.editable.value === !0 && (pe === !0 ? r.value === !0 && Ze() : r.value === !0 ? Yl(!0) : r.value = !0), typeof pt == "function" && Ke(() => {
              pt(a);
            }), typeof Ce == "function" && Ke(() => {
              Ce(a);
            });
          }));
        },
        () => {
          I.focused.value === !0 && p === Qe && (clearTimeout(p), I.innerLoading.value = !1, d.value = !1), r.value === !0 && (r.value = !1);
        }
      );
    }
    function Ee() {
      return u(Dl, {
        ref: F,
        class: Q.value,
        style: e.popupContentStyle,
        modelValue: r.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && oe.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: O.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        noRouteDismiss: e.popupNoRouteDismiss,
        square: Pe.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ..._e.value,
        onScrollPassive: K,
        onBeforeShow: _o,
        onBeforeHide: st,
        onShow: rt
      }, Vt);
    }
    function st(D) {
      wo(D), ke();
    }
    function rt() {
      ue();
    }
    function M(D) {
      var pe;
      ft(D), (pe = L.value) == null || pe.focus(), f.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function V(D) {
      ft(D), Ke(() => {
        f.value = !1;
      });
    }
    function ee() {
      const D = [
        u(Vf, {
          class: `col-auto ${I.fieldClass.value}`,
          ...U.value,
          for: I.targetUid.value,
          dark: O.value,
          square: !0,
          loading: d.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: c.value.length !== 0,
          ...I.splitAttrs.listeners.value,
          onFocus: M,
          onBlur: V
        }, {
          ...t,
          rawControl: () => I.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return r.value === !0 && D.push(
        u("div", {
          ref: z,
          class: Q.value + " scroll",
          style: e.popupContentStyle,
          ..._e.value,
          onClick: kt,
          onScrollPassive: K
        }, Vt())
      ), u(Il, {
        ref: R,
        modelValue: o.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: C,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        noRouteDismiss: e.popupNoRouteDismiss,
        onBeforeShow: _o,
        onBeforeHide: ge,
        onHide: ye,
        onShow: He
      }, () => u("div", {
        class: "q-select__dialog" + (O.value === !0 ? " q-select__dialog--dark q-dark" : "") + (f.value === !0 ? " q-select__dialog--focused" : "")
      }, D));
    }
    function ge(D) {
      wo(D), R.value !== null && R.value.__updateRefocusTarget(
        I.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), I.focused.value = !1;
    }
    function ye(D) {
      Ze(), I.focused.value === !1 && n("blur", D), Ht();
    }
    function He() {
      const D = document.activeElement;
      (D === null || D.id !== I.targetUid.value) && L.value !== null && L.value !== D && L.value.focus(), ue();
    }
    function ke() {
      o.value !== !0 && (i.value = -1, r.value === !0 && (r.value = !1), I.focused.value === !1 && (p !== null && (clearTimeout(p), p = null), I.innerLoading.value === !0 && (n("filterAbort"), I.innerLoading.value = !1, d.value = !1)));
    }
    function ze(D) {
      I.editable.value === !0 && (m === !0 ? (I.onControlFocusin(D), o.value = !0, Ke(() => {
        I.focus();
      })) : I.focus(), e.onFilter !== void 0 ? Me(c.value) : (oe.value !== !0 || t["no-option"] !== void 0) && (r.value = !0));
    }
    function Ze() {
      o.value = !1, ke();
    }
    function Ht() {
      e.useInput === !0 && $e(
        e.multiple !== !0 && e.fillInput === !0 && k.value.length !== 0 && G.value(k.value[0]) || "",
        !0,
        !0
      );
    }
    function Yl(D) {
      let pe = -1;
      if (D === !0) {
        if (k.value.length !== 0) {
          const Ce = le.value(k.value[0]);
          pe = e.options.findIndex((Qe) => Zt(le.value(Qe), Ce));
        }
        N(pe);
      }
      J(pe);
    }
    function uc(D, pe) {
      r.value === !0 && I.innerLoading.value === !1 && (N(-1, !0), Ke(() => {
        r.value === !0 && I.innerLoading.value === !1 && (D > pe ? N() : Yl(!0));
      }));
    }
    function So() {
      o.value === !1 && F.value !== null && F.value.updatePosition();
    }
    function _o(D) {
      D !== void 0 && ft(D), n("popupShow", D), I.hasPopupOpen = !0, I.onControlFocusin(D);
    }
    function wo(D) {
      D !== void 0 && ft(D), n("popupHide", D), I.hasPopupOpen = !1, I.onControlFocusout(D);
    }
    function Co() {
      m = l.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || oe.value === !1 : !0), C = l.platform.is.ios === !0 && m === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return Ha(Co), vc(So), Co(), je(() => {
      b !== null && clearTimeout(b), g !== null && clearTimeout(g);
    }), Object.assign(a, {
      showPopup: ze,
      hidePopup: Ze,
      removeAtIndex: Le,
      add: We,
      toggleOption: Ge,
      getOptionIndex: () => i.value,
      setOptionIndex: J,
      moveOptionSelection: ie,
      filter: Me,
      updateMenuPosition: So,
      updateInputValue: $e,
      isOptionSelected: re,
      getEmittingOptionValue: Ne,
      isOptionDisabled: (...D) => ce.value.apply(null, D) === !0,
      getOptionValue: (...D) => le.value.apply(null, D),
      getOptionLabel: (...D) => G.value.apply(null, D)
    }), Object.assign(I, {
      innerValue: k,
      fieldClass: s(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: _,
      targetRef: L,
      hasValue: ne,
      showPopup: ze,
      floatingLabel: s(
        () => e.hideSelected !== !0 && ne.value === !0 || typeof c.value == "number" || c.value.length !== 0 || Kn(e.displayValue)
      ),
      getControlChild: () => {
        if (I.editable.value !== !1 && (o.value === !0 || oe.value !== !0 || t["no-option"] !== void 0))
          return m === !0 ? ee() : Ee();
        I.hasPopupOpen === !0 && (I.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(D) {
          I.onControlFocusin(D);
        },
        onFocusout(D) {
          I.onControlFocusout(D, () => {
            Ht(), ke();
          });
        },
        onClick(D) {
          var pe;
          if (kt(D), m !== !0 && r.value === !0) {
            ke(), (pe = L.value) == null || pe.focus();
            return;
          }
          ze(D);
        }
      },
      getControl: (D) => {
        const pe = bn(), Ce = D === !0 || o.value !== !0 || m !== !0;
        if (e.useInput === !0)
          pe.push(rn(D, Ce));
        else if (I.editable.value === !0) {
          const ot = Ce === !0 ? be.value : void 0;
          pe.push(
            u("input", {
              ref: Ce === !0 ? L : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: Ce === !0 ? I.targetUid.value : void 0,
              value: de.value,
              readonly: !0,
              "data-autofocus": D === !0 || e.autofocus === !0 || void 0,
              ...ot,
              onKeydown: nt,
              onKeyup: Re,
              onKeypress: Ie
            })
          ), Ce === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && pe.push(
            u("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: qe
            })
          );
        }
        if (B.value !== void 0 && e.disable !== !0 && we.value.length !== 0) {
          const ot = we.value.map((pt) => u("option", { value: pt, selected: !0 }));
          pe.push(
            u("select", {
              class: "hidden",
              name: B.value,
              multiple: e.multiple
            }, ot)
          );
        }
        const Qe = e.useInput === !0 || Ce !== !0 ? void 0 : I.splitAttrs.attributes.value;
        return u("div", {
          class: "q-field__native row items-center",
          ...Qe,
          ...I.splitAttrs.listeners.value
        }, pe);
      },
      getInnerAppend: () => e.loading !== !0 && d.value !== !0 && e.hideDropdownIcon !== !0 ? [
        u(Xe, {
          class: "q-select__dropdown-icon" + (r.value === !0 ? " rotate-180" : ""),
          name: Te.value
        })
      ] : null
    }), Ul(I);
  }
}), mv = [
  "text",
  "rect",
  "circle",
  "QBtn",
  "QBadge",
  "QChip",
  "QToolbar",
  "QCheckbox",
  "QRadio",
  "QToggle",
  "QSlider",
  "QRange",
  "QInput",
  "QAvatar"
], gv = [
  "wave",
  "pulse",
  "pulse-x",
  "pulse-y",
  "fade",
  "blink",
  "none"
];
te({
  name: "QSkeleton",
  props: {
    ...Ue,
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      validator: (e) => mv.includes(e),
      default: "rect"
    },
    animation: {
      type: String,
      validator: (e) => gv.includes(e),
      default: "wave"
    },
    animationSpeed: {
      type: [String, Number],
      default: 1500
    },
    square: Boolean,
    bordered: Boolean,
    size: String,
    width: String,
    height: String
  },
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), l = s(() => {
      const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
      return {
        "--q-skeleton-speed": `${e.animationSpeed}ms`,
        width: o[0],
        height: o[1]
      };
    }), r = s(
      () => `q-skeleton q-skeleton--${a.value === !0 ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === !0 ? " q-skeleton--square" : "") + (e.bordered === !0 ? " q-skeleton--bordered" : "")
    );
    return () => u(e.tag, {
      class: r.value,
      style: l.value
    }, xe(t.default));
  }
});
var qi = [
  ["left", "center", "start", "width"],
  ["right", "center", "end", "width"],
  ["top", "start", "center", "height"],
  ["bottom", "end", "center", "height"]
];
te({
  name: "QSlideItem",
  props: {
    ...Ue,
    leftColor: String,
    rightColor: String,
    topColor: String,
    bottomColor: String,
    onSlide: Function
  },
  emits: ["action", "top", "right", "bottom", "left"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = Ye(e, l), { getCache: o } = Ua(), i = E(null);
    let c = null, f = {}, d = {}, b = {};
    const g = s(() => l.lang.rtl === !0 ? { left: "right", right: "left" } : { left: "left", right: "right" }), v = s(
      () => "q-slide-item q-item-type overflow-hidden" + (r.value === !0 ? " q-slide-item--dark q-dark" : "")
    );
    function m() {
      i.value.style.transform = "translate(0,0)";
    }
    function S(x, C, y) {
      e.onSlide !== void 0 && n("slide", { side: x, ratio: C, isReset: y });
    }
    function p(x) {
      const C = i.value;
      if (x.isFirst)
        f = {
          dir: null,
          size: { left: 0, right: 0, top: 0, bottom: 0 },
          scale: 0
        }, C.classList.add("no-transition"), qi.forEach((L) => {
          if (t[L[0]] !== void 0) {
            const F = b[L[0]];
            F.style.transform = "scale(1)", f.size[L[0]] = F.getBoundingClientRect()[L[3]];
          }
        }), f.axis = x.direction === "up" || x.direction === "down" ? "Y" : "X";
      else if (x.isFinal) {
        C.classList.remove("no-transition"), f.scale === 1 ? (C.style.transform = `translate${f.axis}(${f.dir * 100}%)`, c !== null && clearTimeout(c), c = setTimeout(() => {
          c = null, n(f.showing, { reset: m }), n("action", { side: f.showing, reset: m });
        }, 230)) : (C.style.transform = "translate(0,0)", S(f.showing, 0, !0));
        return;
      } else
        x.direction = f.axis === "X" ? x.offset.x < 0 ? "left" : "right" : x.offset.y < 0 ? "up" : "down";
      if (t.left === void 0 && x.direction === g.value.right || t.right === void 0 && x.direction === g.value.left || t.top === void 0 && x.direction === "down" || t.bottom === void 0 && x.direction === "up") {
        C.style.transform = "translate(0,0)";
        return;
      }
      let y, h, _;
      f.axis === "X" ? (h = x.direction === "left" ? -1 : 1, y = h === 1 ? g.value.left : g.value.right, _ = x.distance.x) : (h = x.direction === "up" ? -2 : 2, y = h === 2 ? "top" : "bottom", _ = x.distance.y), !(f.dir !== null && Math.abs(h) !== Math.abs(f.dir)) && (f.dir !== h && (["left", "right", "top", "bottom"].forEach((L) => {
        d[L] && (d[L].style.visibility = y === L ? "visible" : "hidden");
      }), f.showing = y, f.dir = h), f.scale = Math.max(0, Math.min(1, (_ - 40) / f.size[y])), C.style.transform = `translate${f.axis}(${_ * h / Math.abs(h)}px)`, b[y].style.transform = `scale(${f.scale})`, S(y, f.scale, !1));
    }
    return Ha(() => {
      d = {}, b = {};
    }), je(() => {
      c !== null && clearTimeout(c);
    }), Object.assign(a, { reset: m }), () => {
      const x = [], C = {
        left: t[g.value.right] !== void 0,
        right: t[g.value.left] !== void 0,
        up: t.bottom !== void 0,
        down: t.top !== void 0
      }, y = Object.keys(C).filter((_) => C[_] === !0);
      qi.forEach((_) => {
        const L = _[0];
        t[L] !== void 0 && x.push(
          u("div", {
            key: L,
            ref: (F) => {
              d[L] = F;
            },
            class: `q-slide-item__${L} absolute-full row no-wrap items-${_[1]} justify-${_[2]}` + (e[L + "Color"] !== void 0 ? ` bg-${e[L + "Color"]}` : "")
          }, [
            u("div", { ref: (F) => {
              b[L] = F;
            } }, t[L]())
          ])
        );
      });
      const h = u("div", {
        key: `${y.length === 0 ? "only-" : ""} content`,
        ref: i,
        class: "q-slide-item__content"
      }, xe(t.default));
      return y.length === 0 ? x.push(h) : x.push(
        Kt(h, o("dir#" + y.join(""), () => {
          const _ = {
            prevent: !0,
            stop: !0,
            mouse: !0
          };
          return y.forEach((L) => {
            _[L] = !0;
          }), [[
            Qt,
            p,
            void 0,
            _
          ]];
        }))
      ), u("div", { class: v.value }, x);
    };
  }
});
te({
  name: "QSpace",
  setup() {
    const e = u("div", { class: "q-space" });
    return () => e;
  }
});
var hv = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
te({
  name: "QSpinnerAudio",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      fill: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 55 80",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: hv
    });
  }
});
var bv = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
te({
  name: "QSpinnerBall",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      stroke: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 57 57",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: bv
    });
  }
});
var yv = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
te({
  name: "QSpinnerBars",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      fill: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 135 140",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: yv
    });
  }
});
var pv = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
te({
  name: "QSpinnerBox",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: pv
    });
  }
});
var Sv = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
te({
  name: "QSpinnerClock",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Sv
    });
  }
});
var _v = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
te({
  name: "QSpinnerComment",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: _v
    });
  }
});
var wv = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
te({
  name: "QSpinnerCube",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: wv
    });
  }
});
var Cv = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
te({
  name: "QSpinnerDots",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      fill: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Cv
    });
  }
});
var xv = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
te({
  name: "QSpinnerFacebook",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      innerHTML: xv
    });
  }
});
var kv = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
te({
  name: "QSpinnerGears",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: kv
    });
  }
});
var qv = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
te({
  name: "QSpinnerGrid",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      fill: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 105 105",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: qv
    });
  }
});
var Tv = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
te({
  name: "QSpinnerHearts",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      fill: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 140 64",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Tv
    });
  }
});
var Mv = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
te({
  name: "QSpinnerHourglass",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Mv
    });
  }
});
var $v = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
te({
  name: "QSpinnerInfinity",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      innerHTML: $v
    });
  }
});
var Bv = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
te({
  name: "QSpinnerIos",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      stroke: "currentColor",
      fill: "currentColor",
      viewBox: "0 0 64 64",
      innerHTML: Bv
    });
  }
});
var Lv = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
te({
  name: "QSpinnerOrbit",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Lv
    });
  }
});
var Fv = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
te({
  name: "QSpinnerOval",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      stroke: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Fv
    });
  }
});
var zv = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
te({
  name: "QSpinnerPie",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: zv
    });
  }
});
var Rv = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
te({
  name: "QSpinnerPuff",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      stroke: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 44 44",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Rv
    });
  }
});
var Pv = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
te({
  name: "QSpinnerRadio",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Pv
    });
  }
});
var Av = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
te({
  name: "QSpinnerRings",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      stroke: "currentColor",
      width: t.value,
      height: t.value,
      viewBox: "0 0 45 45",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Av
    });
  }
});
var Ev = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
te({
  name: "QSpinnerTail",
  props: ht,
  setup(e) {
    const { cSize: t, classes: n } = bt(e);
    return () => u("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: Ev
    });
  }
});
te({
  name: "QSplitter",
  props: {
    ...Ue,
    modelValue: {
      type: Number,
      required: !0
    },
    reverse: Boolean,
    unit: {
      type: String,
      default: "%",
      validator: (e) => ["%", "px"].includes(e)
    },
    limits: {
      type: Array,
      validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? !1 : e[0] >= 0 && e[0] <= e[1]
    },
    emitImmediately: Boolean,
    horizontal: Boolean,
    disable: Boolean,
    beforeClass: [Array, String, Object],
    afterClass: [Array, String, Object],
    separatorClass: [Array, String, Object],
    separatorStyle: [Array, String, Object]
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Ye(e, a), r = E(null), o = {
      before: E(null),
      after: E(null)
    }, i = s(
      () => `q-splitter no-wrap ${e.horizontal === !0 ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === !0 ? "disabled" : "workable"}` + (l.value === !0 ? " q-splitter--dark" : "")
    ), c = s(() => e.horizontal === !0 ? "height" : "width"), f = s(() => e.reverse !== !0 ? "before" : "after"), d = s(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
    function b(_) {
      return (e.unit === "%" ? _ : Math.round(_)) + e.unit;
    }
    const g = s(() => ({
      [f.value]: {
        [c.value]: b(e.modelValue)
      }
    }));
    let v, m, S, p, x;
    function C(_) {
      if (_.isFirst === !0) {
        const F = r.value.getBoundingClientRect()[c.value];
        v = e.horizontal === !0 ? "up" : "left", m = e.unit === "%" ? 100 : F, S = Math.min(m, d.value[1], Math.max(d.value[0], e.modelValue)), p = (e.reverse !== !0 ? 1 : -1) * (e.horizontal === !0 ? 1 : a.lang.rtl === !0 ? -1 : 1) * (e.unit === "%" ? F === 0 ? 0 : 100 / F : 1), r.value.classList.add("q-splitter--active");
        return;
      }
      if (_.isFinal === !0) {
        x !== e.modelValue && n("update:modelValue", x), r.value.classList.remove("q-splitter--active");
        return;
      }
      const L = S + p * (_.direction === v ? -1 : 1) * _.distance[e.horizontal === !0 ? "y" : "x"];
      x = Math.min(m, d.value[1], Math.max(d.value[0], L)), o[f.value].value.style[c.value] = b(x), e.emitImmediately === !0 && e.modelValue !== x && n("update:modelValue", x);
    }
    const y = s(() => [[
      Qt,
      C,
      void 0,
      {
        [e.horizontal === !0 ? "vertical" : "horizontal"]: !0,
        prevent: !0,
        stop: !0,
        mouse: !0,
        mouseAllDir: !0
      }
    ]]);
    function h(_, L) {
      _ < L[0] ? n("update:modelValue", L[0]) : _ > L[1] && n("update:modelValue", L[1]);
    }
    return ae(() => e.modelValue, (_) => {
      h(_, d.value);
    }), ae(() => e.limits, () => {
      Ke(() => {
        h(e.modelValue, d.value);
      });
    }), () => {
      const _ = [
        u("div", {
          ref: o.before,
          class: [
            "q-splitter__panel q-splitter__before" + (e.reverse === !0 ? " col" : ""),
            e.beforeClass
          ],
          style: g.value.before
        }, xe(t.before)),
        u("div", {
          class: [
            "q-splitter__separator",
            e.separatorClass
          ],
          style: e.separatorStyle,
          "aria-disabled": e.disable === !0 ? "true" : void 0
        }, [
          Wt(
            "div",
            { class: "q-splitter__separator-area absolute-full" },
            xe(t.separator),
            "sep",
            e.disable !== !0,
            () => y.value
          )
        ]),
        u("div", {
          ref: o.after,
          class: [
            "q-splitter__panel q-splitter__after" + (e.reverse === !0 ? "" : " col"),
            e.afterClass
          ],
          style: g.value.after
        }, xe(t.after))
      ];
      return u("div", {
        class: i.value,
        ref: r
      }, gt(t.default, _));
    };
  }
});
var Es = te({
  name: "StepHeader",
  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },
  setup(e, { attrs: t }) {
    const { proxy: { $q: n } } = ve(), a = E(null), l = s(() => e.stepper.modelValue === e.step.name), r = s(() => {
      const p = e.step.disable;
      return p === !0 || p === "";
    }), o = s(() => {
      const p = e.step.error;
      return p === !0 || p === "";
    }), i = s(() => {
      const p = e.step.done;
      return r.value === !1 && (p === !0 || p === "");
    }), c = s(() => {
      const p = e.step.headerNav, x = p === !0 || p === "" || p === void 0;
      return r.value === !1 && e.stepper.headerNav && x;
    }), f = s(() => e.step.prefix && (l.value === !1 || e.stepper.activeIcon === "none") && (o.value === !1 || e.stepper.errorIcon === "none") && (i.value === !1 || e.stepper.doneIcon === "none")), d = s(() => {
      const p = e.step.icon || e.stepper.inactiveIcon;
      if (l.value === !0) {
        const x = e.step.activeIcon || e.stepper.activeIcon;
        return x === "none" ? p : x || n.iconSet.stepper.active;
      }
      if (o.value === !0) {
        const x = e.step.errorIcon || e.stepper.errorIcon;
        return x === "none" ? p : x || n.iconSet.stepper.error;
      }
      if (r.value === !1 && i.value === !0) {
        const x = e.step.doneIcon || e.stepper.doneIcon;
        return x === "none" ? p : x || n.iconSet.stepper.done;
      }
      return p;
    }), b = s(() => {
      const p = o.value === !0 ? e.step.errorColor || e.stepper.errorColor : void 0;
      if (l.value === !0) {
        const x = e.step.activeColor || e.stepper.activeColor || e.step.color;
        return x !== void 0 ? x : p;
      }
      return p !== void 0 ? p : r.value === !1 && i.value === !0 ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
    }), g = s(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (b.value !== void 0 ? ` text-${b.value}` : "") + (o.value === !0 ? " q-stepper__tab--error q-stepper__tab--error-with-" + (f.value === !0 ? "prefix" : "icon") : "") + (l.value === !0 ? " q-stepper__tab--active" : "") + (i.value === !0 ? " q-stepper__tab--done" : "") + (c.value === !0 ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === !0 ? " q-stepper__tab--disabled" : "")), v = s(() => e.stepper.headerNav !== !0 ? !1 : c.value);
    function m() {
      var p;
      (p = a.value) == null || p.focus(), l.value === !1 && e.goToPanel(e.step.name);
    }
    function S(p) {
      p.keyCode === 13 && l.value === !1 && e.goToPanel(e.step.name);
    }
    return () => {
      const p = { class: g.value };
      c.value === !0 && (p.onClick = m, p.onKeyup = S, Object.assign(
        p,
        r.value === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }
      ));
      const x = [
        u("div", { class: "q-focus-helper", tabindex: -1, ref: a }),
        u("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [
          u("span", { class: "row flex-center" }, [
            f.value === !0 ? e.step.prefix : u(Xe, { name: d.value })
          ])
        ])
      ];
      if (e.step.title !== void 0 && e.step.title !== null) {
        const C = [
          u("div", { class: "q-stepper__title" }, e.step.title)
        ];
        e.step.caption !== void 0 && e.step.caption !== null && C.push(
          u("div", { class: "q-stepper__caption" }, e.step.caption)
        ), x.push(
          u("div", {
            class: "q-stepper__label q-stepper__line relative-position"
          }, C)
        );
      }
      return Kt(
        u("div", p, x),
        [[El, v.value]]
      );
    };
  }
});
function Os(e) {
  return u("div", {
    class: "q-stepper__step-content"
  }, [
    u("div", {
      class: "q-stepper__step-inner"
    }, xe(e.default))
  ]);
}
var Ti = {
  setup(e, { slots: t }) {
    return () => Os(t);
  }
};
te({
  name: "QStep",
  props: {
    ...to,
    icon: String,
    color: String,
    title: {
      type: String,
      required: !0
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: !0
    },
    done: Boolean,
    error: Boolean,
    onScroll: [Function, Array]
  },
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: a } } = ve(), l = Et(au, tt);
    if (l === tt)
      return console.error("QStep needs to be a child of QStepper"), tt;
    const { getCache: r } = Ua(), o = E(null), i = s(() => l.value.modelValue === e.name), c = s(() => a.platform.is.ios !== !0 && a.platform.is.chrome === !0 || i.value !== !0 || l.value.vertical !== !0 ? {} : {
      onScroll(b) {
        const { target: g } = b;
        g.scrollTop > 0 && (g.scrollTop = 0), e.onScroll !== void 0 && n("scroll", b);
      }
    }), f = s(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
    function d() {
      const b = l.value.vertical;
      return b === !0 && l.value.keepAlive === !0 ? u(
        Wi,
        l.value.keepAliveProps.value,
        i.value === !0 ? [
          u(
            l.value.needsUniqueKeepAliveWrapper.value === !0 ? r(f.value, () => ({ ...Ti, name: f.value })) : Ti,
            { key: f.value },
            t.default
          )
        ] : void 0
      ) : b !== !0 || i.value === !0 ? Os(t) : void 0;
    }
    return () => u(
      "div",
      { ref: o, class: "q-stepper__step", role: "tabpanel", ...c.value },
      l.value.vertical === !0 ? [
        u(Es, {
          stepper: l.value,
          step: e,
          goToPanel: l.value.goToPanel
        }),
        l.value.animated === !0 ? u(bo, d) : d()
      ] : [d()]
    );
  }
});
var Ov = /(-\w)/g;
function Vv(e) {
  const t = {};
  for (const n in e) {
    const a = n.replace(Ov, (l) => l[1].toUpperCase());
    t[a] = e[n];
  }
  return t;
}
te({
  name: "QStepper",
  props: {
    ...Ue,
    ...no,
    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  emits: ao,
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q), {
      updatePanelsList: l,
      isValidPanelName: r,
      updatePanelIndex: o,
      getPanelContent: i,
      getPanels: c,
      panelDirectives: f,
      goToPanel: d,
      keepAliveProps: b,
      needsUniqueKeepAliveWrapper: g
    } = lo();
    fn(au, s(() => ({
      goToPanel: d,
      keepAliveProps: b,
      needsUniqueKeepAliveWrapper: g,
      ...e
    })));
    const v = s(
      () => `q-stepper q-stepper--${e.vertical === !0 ? "vertical" : "horizontal"}` + (e.flat === !0 ? " q-stepper--flat" : "") + (e.bordered === !0 ? " q-stepper--bordered" : "") + (a.value === !0 ? " q-stepper--dark q-dark" : "")
    ), m = s(
      () => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === !0 ? "alternative" : "standard"}-labels` + (e.flat === !1 || e.bordered === !0 ? " q-stepper__header--border" : "") + (e.contracted === !0 ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : "")
    );
    function S() {
      const p = xe(t.message, []);
      if (e.vertical === !0) {
        r(e.modelValue) && o();
        const x = u("div", {
          class: "q-stepper__content"
        }, xe(t.default));
        return p === void 0 ? [x] : p.concat(x);
      }
      return [
        u(
          "div",
          { class: m.value },
          c().map((x) => {
            const C = Vv(x.props);
            return u(Es, {
              key: C.name,
              stepper: e,
              step: C,
              goToPanel: d
            });
          })
        ),
        p,
        Wt(
          "div",
          { class: "q-stepper__content q-panel-parent" },
          i(),
          "cont",
          e.swipeable,
          () => f.value
        )
      ];
    }
    return () => (l(t), u("div", {
      class: v.value
    }, gt(t.navigation, S())));
  }
});
te({
  name: "QStepperNavigation",
  setup(e, { slots: t }) {
    return () => u("div", { class: "q-stepper__nav" }, xe(t.default));
  }
});
var Dv = te({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(e, { slots: t, emit: n }) {
    const a = ve(), { proxy: { $q: l } } = a, r = (o) => {
      n("click", o);
    };
    return () => {
      if (e.props === void 0)
        return u("th", {
          class: e.autoWidth === !0 ? "q-table--col-auto-width" : "",
          onClick: r
        }, xe(t.default));
      let o, i;
      const c = a.vnode.key;
      if (c) {
        if (o = e.props.colsMap[c], o === void 0) return;
      } else
        o = e.props.col;
      if (o.sortable === !0) {
        const d = o.align === "right" ? "unshift" : "push";
        i = ja(t.default, []), i[d](
          u(Xe, {
            class: o.__iconClass,
            name: l.iconSet.table.arrowUp
          })
        );
      } else
        i = xe(t.default);
      const f = {
        class: o.__thClass + (e.autoWidth === !0 ? " q-table--col-auto-width" : ""),
        style: o.headerStyle,
        onClick: (d) => {
          o.sortable === !0 && e.props.sort(o), r(d);
        }
      };
      return u("th", f, i);
    };
  }
});
function Vs(e, t) {
  return u("div", e, [
    u("table", { class: "q-table" }, t)
  ]);
}
var Nv = {
  list: Xf,
  table: ev
}, Iv = ["list", "table", "__qtable"], Hv = te({
  name: "QVirtualScroll",
  props: {
    ...Or,
    type: {
      type: String,
      default: "list",
      validator: (e) => Iv.includes(e)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: Xn
  },
  setup(e, { slots: t, attrs: n }) {
    let a;
    const l = E(null), r = s(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), {
      virtualScrollSliceRange: o,
      localResetVirtualScroll: i,
      padVirtualScroll: c,
      onVirtualScrollEvt: f
    } = As({
      virtualScrollLength: r,
      getVirtualScrollTarget: m,
      getVirtualScrollEl: v
    }), d = s(() => {
      if (r.value === 0)
        return [];
      const C = (y, h) => ({
        index: o.value.from + h,
        item: y
      });
      return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(C) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(C);
    }), b = s(
      () => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === !0 ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")
    ), g = s(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    ae(r, () => {
      i();
    }), ae(() => e.scrollTarget, () => {
      p(), S();
    });
    function v() {
      return l.value.$el || l.value;
    }
    function m() {
      return a;
    }
    function S() {
      a = ln(v(), e.scrollTarget), a.addEventListener("scroll", f, lt.passive);
    }
    function p() {
      a !== void 0 && (a.removeEventListener("scroll", f, lt.passive), a = void 0);
    }
    function x() {
      let C = c(
        e.type === "list" ? "div" : "tbody",
        d.value.map(t.default)
      );
      return t.before !== void 0 && (C = t.before().concat(C)), gt(t.after, C);
    }
    return Vr(() => {
      i();
    }), ut(() => {
      S();
    }), Un(() => {
      S();
    }), vn(() => {
      p();
    }), je(() => {
      p();
    }), () => {
      if (t.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return e.type === "__qtable" ? Vs(
        { ref: l, class: "q-table__middle " + b.value },
        x()
      ) : u(Nv[e.type], {
        ...n,
        ref: l,
        class: [n.class, b.value],
        ...g.value
      }, x);
    };
  }
});
function jv(e, t) {
  return new Date(e) - new Date(t);
}
var Qv = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (e) => e === "ad" || e === "da",
    default: "ad"
  }
};
function Kv(e, t, n, a) {
  const l = s(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((c) => c.name === i) || null;
  }), r = s(() => e.sortMethod !== void 0 ? e.sortMethod : (i, c, f) => {
    const d = n.value.find((v) => v.name === c);
    if (d === void 0 || d.field === void 0)
      return i;
    const b = f === !0 ? -1 : 1, g = typeof d.field == "function" ? (v) => d.field(v) : (v) => v[d.field];
    return i.sort((v, m) => {
      let S = g(v), p = g(m);
      return d.rawSort !== void 0 ? d.rawSort(S, p, v, m) * b : S == null ? -1 * b : p == null ? 1 * b : d.sort !== void 0 ? d.sort(S, p, v, m) * b : Va(S) === !0 && Va(p) === !0 ? (S - p) * b : Oa(S) === !0 && Oa(p) === !0 ? jv(S, p) * b : typeof S == "boolean" && typeof p == "boolean" ? (S - p) * b : ([S, p] = [S, p].map((x) => (x + "").toLocaleString().toLowerCase()), S < p ? -1 * b : S === p ? 0 : b);
    });
  });
  function o(i) {
    let c = e.columnSortOrder;
    if (Lt(i) === !0)
      i.sortOrder && (c = i.sortOrder), i = i.name;
    else {
      const b = n.value.find((g) => g.name === i);
      b != null && b.sortOrder && (c = b.sortOrder);
    }
    let { sortBy: f, descending: d } = t.value;
    f !== i ? (f = i, d = c === "da") : e.binaryStateSort === !0 ? d = !d : d === !0 ? c === "ad" ? f = null : d = !1 : c === "ad" ? d = !0 : f = null, a({ sortBy: f, descending: d, page: 1 });
  }
  return {
    columnToSort: l,
    computedSortMethod: r,
    sort: o
  };
}
var Uv = {
  filter: [String, Object],
  filterMethod: Function
};
function Yv(e, t) {
  const n = s(() => e.filterMethod !== void 0 ? e.filterMethod : (a, l, r, o) => {
    const i = l ? l.toLowerCase() : "";
    return a.filter(
      (c) => r.some((f) => {
        const d = o(f, c) + "";
        return (d === "undefined" || d === "null" ? "" : d.toLowerCase()).indexOf(i) !== -1;
      })
    );
  });
  return ae(
    () => e.filter,
    () => {
      Ke(() => {
        t({ page: 1 }, !0);
      });
    },
    { deep: !0 }
  ), { computedFilterMethod: n };
}
function Wv(e, t) {
  for (const n in t)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Mi(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var Xv = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function Gv(e, t) {
  const { props: n, emit: a } = e, l = E(
    Object.assign({
      sortBy: null,
      descending: !1,
      page: 1,
      rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5
    }, n.pagination)
  ), r = s(() => {
    const d = n["onUpdate:pagination"] !== void 0 ? { ...l.value, ...n.pagination } : l.value;
    return Mi(d);
  }), o = s(() => r.value.rowsNumber !== void 0);
  function i(d) {
    c({
      pagination: d,
      filter: n.filter
    });
  }
  function c(d = {}) {
    Ke(() => {
      a("request", {
        pagination: d.pagination || r.value,
        filter: d.filter || n.filter,
        getCellValue: t
      });
    });
  }
  function f(d, b) {
    const g = Mi({
      ...r.value,
      ...d
    });
    if (Wv(r.value, g) === !0) {
      o.value === !0 && b === !0 && i(g);
      return;
    }
    if (o.value === !0) {
      i(g);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? a("update:pagination", g) : l.value = g;
  }
  return {
    innerPagination: l,
    computedPagination: r,
    isServerSide: o,
    requestServerInteraction: c,
    setPagination: f
  };
}
function Zv(e, t, n, a, l, r) {
  const { props: o, emit: i, proxy: { $q: c } } = e, f = s(() => a.value === !0 ? n.value.rowsNumber || 0 : r.value), d = s(() => {
    const { page: h, rowsPerPage: _ } = n.value;
    return (h - 1) * _;
  }), b = s(() => {
    const { page: h, rowsPerPage: _ } = n.value;
    return h * _;
  }), g = s(() => n.value.page === 1), v = s(() => n.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(f.value / n.value.rowsPerPage)
  )), m = s(() => b.value === 0 ? !0 : n.value.page >= v.value), S = s(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((_) => ({
    label: _ === 0 ? c.lang.table.allRows : "" + _,
    value: _
  })));
  ae(v, (h, _) => {
    if (h === _) return;
    const L = n.value.page;
    h && !L ? l({ page: 1 }) : h < L && l({ page: h });
  });
  function p() {
    l({ page: 1 });
  }
  function x() {
    const { page: h } = n.value;
    h > 1 && l({ page: h - 1 });
  }
  function C() {
    const { page: h, rowsPerPage: _ } = n.value;
    b.value > 0 && h * _ < f.value && l({ page: h + 1 });
  }
  function y() {
    l({ page: v.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), {
    firstRowIndex: d,
    lastRowIndex: b,
    isFirstPage: g,
    isLastPage: m,
    pagesNumber: v,
    computedRowsPerPageOptions: S,
    computedRowsNumber: f,
    firstPage: p,
    prevPage: x,
    nextPage: C,
    lastPage: y
  };
}
var Jv = {
  selection: {
    type: String,
    default: "none",
    validator: (e) => ["single", "multiple", "none"].includes(e)
  },
  selected: {
    type: Array,
    default: () => []
  }
}, em = ["update:selected", "selection"];
function tm(e, t, n, a) {
  const l = s(() => {
    const m = {};
    return e.selected.map(a.value).forEach((S) => {
      m[S] = !0;
    }), m;
  }), r = s(() => e.selection !== "none"), o = s(() => e.selection === "single"), i = s(() => e.selection === "multiple"), c = s(
    () => n.value.length !== 0 && n.value.every(
      (m) => l.value[a.value(m)] === !0
    )
  ), f = s(
    () => c.value !== !0 && n.value.some((m) => l.value[a.value(m)] === !0)
  ), d = s(() => e.selected.length);
  function b(m) {
    return l.value[m] === !0;
  }
  function g() {
    t("update:selected", []);
  }
  function v(m, S, p, x) {
    t("selection", { rows: S, added: p, keys: m, evt: x });
    const C = o.value === !0 ? p === !0 ? S : [] : p === !0 ? e.selected.concat(S) : e.selected.filter(
      (y) => m.includes(a.value(y)) === !1
    );
    t("update:selected", C);
  }
  return {
    hasSelectionMode: r,
    singleSelection: o,
    multipleSelection: i,
    allRowsSelected: c,
    someRowsSelected: f,
    rowsSelectedNumber: d,
    isRowSelected: b,
    clearSelection: g,
    updateSelection: v
  };
}
function $i(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var nm = {
  expanded: Array
  // v-model:expanded
}, am = ["update:expanded"];
function lm(e, t) {
  const n = E($i(e.expanded));
  ae(() => e.expanded, (o) => {
    n.value = $i(o);
  });
  function a(o) {
    return n.value.includes(o);
  }
  function l(o) {
    e.expanded !== void 0 ? t("update:expanded", o) : n.value = o;
  }
  function r(o, i) {
    const c = n.value.slice(), f = c.indexOf(o);
    i === !0 ? f === -1 && (c.push(o), l(c)) : f !== -1 && (c.splice(f, 1), l(c));
  }
  return {
    isRowExpanded: a,
    setExpanded: l,
    updateExpanded: r
  };
}
var rm = {
  visibleColumns: Array
};
function om(e, t, n) {
  const a = s(() => {
    if (e.columns !== void 0)
      return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((c) => ({
      name: c,
      label: c.toUpperCase(),
      field: c,
      align: Va(i[c]) ? "right" : "left",
      sortable: !0
    })) : [];
  }), l = s(() => {
    const { sortBy: i, descending: c } = t.value;
    return (e.visibleColumns !== void 0 ? a.value.filter((d) => d.required === !0 || e.visibleColumns.includes(d.name) === !0) : a.value).map((d) => {
      const b = d.align || "right", g = `text-${b}`;
      return {
        ...d,
        align: b,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${b}`,
        __thClass: g + (d.headerClasses !== void 0 ? " " + d.headerClasses : "") + (d.sortable === !0 ? " sortable" : "") + (d.name === i ? ` sorted ${c === !0 ? "sort-desc" : ""}` : ""),
        __tdStyle: d.style !== void 0 ? typeof d.style != "function" ? () => d.style : d.style : () => null,
        __tdClass: d.classes !== void 0 ? typeof d.classes != "function" ? () => g + " " + d.classes : (v) => g + " " + d.classes(v) : () => g
      };
    });
  }), r = s(() => {
    const i = {};
    return l.value.forEach((c) => {
      i[c.name] = c;
    }), i;
  }), o = s(() => e.tableColspan !== void 0 ? e.tableColspan : l.value.length + (n.value === !0 ? 1 : 0));
  return {
    colList: a,
    computedCols: l,
    computedColsMap: r,
    computedColspan: o
  };
}
var rl = "q-table__bottom row items-center", Ds = {};
Ps.forEach((e) => {
  Ds[e] = {};
});
te({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      required: !0
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {},
    ...Ds,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    tableRowStyleFn: Function,
    tableRowClassFn: Function,
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    cardStyleFn: Function,
    cardClassFn: Function,
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...Ue,
    ...ro,
    ...rm,
    ...Uv,
    ...Xv,
    ...nm,
    ...Jv,
    ...Qv
  },
  emits: [
    "request",
    "virtualScroll",
    ...oo,
    ...am,
    ...em
  ],
  setup(e, { slots: t, emit: n }) {
    const a = ve(), { proxy: { $q: l } } = a, r = Ye(e, l), { inFullscreen: o, toggleFullscreen: i } = io(), c = s(() => typeof e.rowKey == "function" ? e.rowKey : (Z) => Z[e.rowKey]), f = E(null), d = E(null), b = s(() => e.grid !== !0 && e.virtualScroll === !0), g = s(
      () => " q-table__card" + (r.value === !0 ? " q-table__card--dark q-dark" : "") + (e.square === !0 ? " q-table--square" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "")
    ), v = s(
      () => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === !0 ? " q-table--grid" : g.value) + (r.value === !0 ? " q-table--dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : "") + (o.value === !0 ? " fullscreen scroll" : "")
    ), m = s(
      () => v.value + (e.loading === !0 ? " q-table--loading" : "")
    );
    ae(
      () => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + v.value,
      () => {
        var Z;
        b.value === !0 && ((Z = d.value) == null || Z.reset());
      }
    );
    const {
      innerPagination: S,
      computedPagination: p,
      isServerSide: x,
      requestServerInteraction: C,
      setPagination: y
    } = Gv(a, J), { computedFilterMethod: h } = Yv(e, y), { isRowExpanded: _, setExpanded: L, updateExpanded: F } = lm(e, n), R = s(() => {
      let Z = e.rows;
      if (x.value === !0 || Z.length === 0)
        return Z;
      const { sortBy: me, descending: $e } = p.value;
      return e.filter && (Z = h.value(Z, e.filter, I.value, J)), O.value !== null && (Z = ne.value(
        e.rows === Z ? Z.slice() : Z,
        me,
        $e
      )), Z;
    }), z = s(() => R.value.length), B = s(() => {
      let Z = R.value;
      if (x.value === !0)
        return Z;
      const { rowsPerPage: me } = p.value;
      return me !== 0 && (Q.value === 0 && e.rows !== Z ? Z.length > oe.value && (Z = Z.slice(0, oe.value)) : Z = Z.slice(Q.value, oe.value)), Z;
    }), {
      hasSelectionMode: P,
      singleSelection: T,
      multipleSelection: q,
      allRowsSelected: w,
      someRowsSelected: A,
      rowsSelectedNumber: N,
      isRowSelected: H,
      clearSelection: K,
      updateSelection: W
    } = tm(e, n, B, c), { colList: ue, computedCols: I, computedColsMap: k, computedColspan: U } = om(e, p, P), { columnToSort: O, computedSortMethod: ne, sort: $ } = Kv(e, p, ue, y), {
      firstRowIndex: Q,
      lastRowIndex: oe,
      isFirstPage: j,
      isLastPage: de,
      pagesNumber: he,
      computedRowsPerPageOptions: Y,
      computedRowsNumber: fe,
      firstPage: be,
      prevPage: _e,
      nextPage: Be,
      lastPage: se
    } = Zv(a, S, p, x, y, z), Te = s(() => B.value.length === 0), Pe = s(() => {
      const Z = {};
      return Ps.forEach((me) => {
        Z[me] = e[me];
      }), Z.virtualScrollItemSize === void 0 && (Z.virtualScrollItemSize = e.dense === !0 ? 28 : 48), Z;
    });
    function Oe() {
      b.value === !0 && d.value.reset();
    }
    function le() {
      if (e.grid === !0)
        return rn();
      const Z = e.hideHeader !== !0 ? Se : null;
      if (b.value === !0) {
        const $e = t["top-row"], Me = t["bottom-row"], Ee = {
          default: (st) => Ve(st.item, t.body, st.index)
        };
        if ($e !== void 0) {
          const st = u("tbody", $e({ cols: I.value }));
          Ee.before = Z === null ? () => st : () => [Z()].concat(st);
        } else Z !== null && (Ee.before = Z);
        return Me !== void 0 && (Ee.after = () => u("tbody", Me({ cols: I.value }))), u(Hv, {
          ref: d,
          class: e.tableClass,
          style: e.tableStyle,
          ...Pe.value,
          scrollTarget: e.virtualScrollTarget,
          items: B.value,
          type: "__qtable",
          tableColspan: U.value,
          onVirtualScroll: ce
        }, Ee);
      }
      const me = [
        Ne()
      ];
      return Z !== null && me.unshift(Z()), Vs({
        class: ["q-table__middle scroll", e.tableClass],
        style: e.tableStyle
      }, me);
    }
    function G(Z, me) {
      if (d.value !== null) {
        d.value.scrollTo(Z, me);
        return;
      }
      Z = parseInt(Z, 10);
      const $e = f.value.querySelector(`tbody tr:nth-of-type(${Z + 1})`);
      if ($e !== null) {
        const Me = f.value.querySelector(".q-table__middle.scroll"), Ee = $e.offsetTop - e.virtualScrollStickySizeStart, st = Ee < Me.scrollTop ? "decrease" : "increase";
        Me.scrollTop = Ee, n("virtualScroll", {
          index: Z,
          from: 0,
          to: S.value.rowsPerPage - 1,
          direction: st
        });
      }
    }
    function ce(Z) {
      n("virtualScroll", Z);
    }
    function we() {
      return [
        u(iv, {
          class: "q-table__linear-progress",
          color: e.color,
          dark: r.value,
          indeterminate: !0,
          trackColor: "transparent"
        })
      ];
    }
    function Ve(Z, me, $e) {
      const Me = c.value(Z), Ee = H(Me);
      if (me !== void 0) {
        const V = {
          key: Me,
          row: Z,
          pageIndex: $e,
          __trClass: Ee ? "selected" : ""
        };
        if (e.tableRowStyleFn !== void 0 && (V.__trStyle = e.tableRowStyleFn(Z)), e.tableRowClassFn !== void 0) {
          const ee = e.tableRowClassFn(Z);
          ee && (V.__trClass = `${ee} ${V.__trClass}`);
        }
        return me(
          Le(V)
        );
      }
      const st = t["body-cell"], rt = I.value.map((V) => {
        const ee = t[`body-cell-${V.name}`], ge = ee !== void 0 ? ee : st;
        return ge !== void 0 ? ge(Fe({ key: Me, row: Z, pageIndex: $e, col: V })) : u("td", {
          class: V.__tdClass(Z),
          style: V.__tdStyle(Z)
        }, J(V, Z));
      });
      if (P.value === !0) {
        const V = t["body-selection"], ee = V !== void 0 ? V(We({ key: Me, row: Z, pageIndex: $e })) : [
          u(Ra, {
            modelValue: Ee,
            color: e.color,
            dark: r.value,
            dense: e.dense,
            "onUpdate:modelValue": (ge, ye) => {
              W([Me], [Z], ge, ye);
            }
          })
        ];
        rt.unshift(
          u("td", { class: "q-table--col-auto-width" }, ee)
        );
      }
      const M = { key: Me, class: { selected: Ee } };
      if (e.onRowClick !== void 0 && (M.class["cursor-pointer"] = !0, M.onClick = (V) => {
        n("rowClick", V, Z, $e);
      }), e.onRowDblclick !== void 0 && (M.class["cursor-pointer"] = !0, M.onDblclick = (V) => {
        n("rowDblclick", V, Z, $e);
      }), e.onRowContextmenu !== void 0 && (M.class["cursor-pointer"] = !0, M.onContextmenu = (V) => {
        n("rowContextmenu", V, Z, $e);
      }), e.tableRowStyleFn !== void 0 && (M.style = e.tableRowStyleFn(Z)), e.tableRowClassFn !== void 0) {
        const V = e.tableRowClassFn(Z);
        V && (M.class[V] = !0);
      }
      return u("tr", M, rt);
    }
    function Ne() {
      const Z = t.body, me = t["top-row"], $e = t["bottom-row"];
      let Me = B.value.map(
        (Ee, st) => Ve(Ee, Z, st)
      );
      return me !== void 0 && (Me = me({ cols: I.value }).concat(Me)), $e !== void 0 && (Me = Me.concat($e({ cols: I.value }))), u("tbody", Me);
    }
    function Le(Z) {
      return Ge(Z), Z.cols = Z.cols.map(
        (me) => xt({ ...me }, "value", () => J(me, Z.row))
      ), Z;
    }
    function Fe(Z) {
      return Ge(Z), xt(Z, "value", () => J(Z.col, Z.row)), Z;
    }
    function We(Z) {
      return Ge(Z), Z;
    }
    function Ge(Z) {
      Object.assign(Z, {
        cols: I.value,
        colsMap: k.value,
        sort: $,
        rowIndex: Q.value + Z.pageIndex,
        color: e.color,
        dark: r.value,
        dense: e.dense
      }), P.value === !0 && xt(
        Z,
        "selected",
        () => H(Z.key),
        (me, $e) => {
          W([Z.key], [Z.row], me, $e);
        }
      ), xt(
        Z,
        "expand",
        () => _(Z.key),
        (me) => {
          F(Z.key, me);
        }
      );
    }
    function J(Z, me) {
      const $e = typeof Z.field == "function" ? Z.field(me) : me[Z.field];
      return Z.format !== void 0 ? Z.format($e, me) : $e;
    }
    const ie = s(() => ({
      pagination: p.value,
      pagesNumber: he.value,
      isFirstPage: j.value,
      isLastPage: de.value,
      firstPage: be,
      prevPage: _e,
      nextPage: Be,
      lastPage: se,
      inFullscreen: o.value,
      toggleFullscreen: i
    }));
    function X() {
      const Z = t.top, me = t["top-left"], $e = t["top-right"], Me = t["top-selection"], Ee = P.value === !0 && Me !== void 0 && N.value > 0, st = "q-table__top relative-position row items-center";
      if (Z !== void 0)
        return u("div", { class: st }, [Z(ie.value)]);
      let rt;
      if (Ee === !0 ? rt = Me(ie.value).slice() : (rt = [], me !== void 0 ? rt.push(
        u("div", { class: "q-table__control" }, [
          me(ie.value)
        ])
      ) : e.title && rt.push(
        u("div", { class: "q-table__control" }, [
          u("div", {
            class: ["q-table__title", e.titleClass]
          }, e.title)
        ])
      )), $e !== void 0 && (rt.push(
        u("div", { class: "q-table__separator col" })
      ), rt.push(
        u("div", { class: "q-table__control" }, [
          $e(ie.value)
        ])
      )), rt.length !== 0)
        return u("div", { class: st }, rt);
    }
    const re = s(() => A.value === !0 ? null : w.value);
    function Se() {
      const Z = Re();
      return e.loading === !0 && t.loading === void 0 && Z.push(
        u("tr", { class: "q-table__progress" }, [
          u("th", {
            class: "relative-position",
            colspan: U.value
          }, we())
        ])
      ), u("thead", Z);
    }
    function Re() {
      const Z = t.header, me = t["header-cell"];
      if (Z !== void 0)
        return Z(
          qe({ header: !0 })
        ).slice();
      const $e = I.value.map((Me) => {
        const Ee = t[`header-cell-${Me.name}`], st = Ee !== void 0 ? Ee : me, rt = qe({ col: Me });
        return st !== void 0 ? st(rt) : u(Dv, {
          key: Me.name,
          props: rt
        }, () => Me.label);
      });
      if (T.value === !0 && e.grid !== !0)
        $e.unshift(
          u("th", { class: "q-table--col-auto-width" }, " ")
        );
      else if (q.value === !0) {
        const Me = t["header-selection"], Ee = Me !== void 0 ? Me(qe({})) : [
          u(Ra, {
            color: e.color,
            modelValue: re.value,
            dark: r.value,
            dense: e.dense,
            "onUpdate:modelValue": Ie
          })
        ];
        $e.unshift(
          u("th", { class: "q-table--col-auto-width" }, Ee)
        );
      }
      return [
        u("tr", {
          class: e.tableHeaderClass,
          style: e.tableHeaderStyle
        }, $e)
      ];
    }
    function qe(Z) {
      return Object.assign(Z, {
        cols: I.value,
        sort: $,
        colsMap: k.value,
        color: e.color,
        dark: r.value,
        dense: e.dense
      }), q.value === !0 && xt(
        Z,
        "selected",
        () => re.value,
        Ie
      ), Z;
    }
    function Ie(Z) {
      A.value === !0 && (Z = !1), W(
        B.value.map(c.value),
        B.value,
        Z
      );
    }
    const nt = s(() => {
      const Z = [
        e.iconFirstPage || l.iconSet.table.firstPage,
        e.iconPrevPage || l.iconSet.table.prevPage,
        e.iconNextPage || l.iconSet.table.nextPage,
        e.iconLastPage || l.iconSet.table.lastPage
      ];
      return l.lang.rtl === !0 ? Z.reverse() : Z;
    });
    function vt() {
      if (e.hideBottom === !0) return;
      if (Te.value === !0) {
        if (e.hideNoData === !0) return;
        const $e = e.loading === !0 ? e.loadingLabel || l.lang.table.loading : e.filter ? e.noResultsLabel || l.lang.table.noResults : e.noDataLabel || l.lang.table.noData, Me = t["no-data"], Ee = Me !== void 0 ? [Me({ message: $e, icon: l.iconSet.table.warning, filter: e.filter })] : [
          u(Xe, {
            class: "q-table__bottom-nodata-icon",
            name: l.iconSet.table.warning
          }),
          $e
        ];
        return u("div", { class: rl + " q-table__bottom--nodata" }, Ee);
      }
      const Z = t.bottom;
      if (Z !== void 0)
        return u("div", { class: rl }, [Z(ie.value)]);
      const me = e.hideSelectedBanner !== !0 && P.value === !0 && N.value > 0 ? [
        u("div", { class: "q-table__control" }, [
          u("div", [
            (e.selectedRowsLabel || l.lang.table.selectedRecords)(N.value)
          ])
        ])
      ] : [];
      if (e.hidePagination !== !0)
        return u("div", {
          class: rl + " justify-end"
        }, bn(me));
      if (me.length !== 0)
        return u("div", { class: rl }, me);
    }
    function $t(Z) {
      y({
        page: 1,
        rowsPerPage: Z.value
      });
    }
    function bn(Z) {
      let me;
      const { rowsPerPage: $e } = p.value, Me = e.paginationLabel || l.lang.table.pagination, Ee = t.pagination, st = e.rowsPerPageOptions.length > 1;
      if (Z.push(
        u("div", { class: "q-table__separator col" })
      ), st === !0 && Z.push(
        u("div", { class: "q-table__control" }, [
          u("span", { class: "q-table__bottom-item" }, [
            e.rowsPerPageLabel || l.lang.table.recordsPerPage
          ]),
          u(vv, {
            class: "q-table__select inline q-table__bottom-item",
            color: e.color,
            modelValue: $e,
            options: Y.value,
            displayValue: $e === 0 ? l.lang.table.allRows : $e,
            dark: r.value,
            borderless: !0,
            dense: !0,
            optionsDense: !0,
            optionsCover: !0,
            "onUpdate:modelValue": $t
          })
        ])
      ), Ee !== void 0)
        me = Ee(ie.value);
      else if (me = [
        u("span", $e !== 0 ? { class: "q-table__bottom-item" } : {}, [
          $e ? Me(Q.value + 1, Math.min(oe.value, fe.value), fe.value) : Me(1, z.value, fe.value)
        ])
      ], $e !== 0 && he.value > 1) {
        const rt = {
          color: e.color,
          round: !0,
          dense: !0,
          flat: !0
        };
        e.dense === !0 && (rt.size = "sm"), he.value > 2 && me.push(
          u(et, {
            key: "pgFirst",
            ...rt,
            icon: nt.value[0],
            disable: j.value,
            "aria-label": l.lang.pagination.first,
            onClick: be
          })
        ), me.push(
          u(et, {
            key: "pgPrev",
            ...rt,
            icon: nt.value[1],
            disable: j.value,
            "aria-label": l.lang.pagination.prev,
            onClick: _e
          }),
          u(et, {
            key: "pgNext",
            ...rt,
            icon: nt.value[2],
            disable: de.value,
            "aria-label": l.lang.pagination.next,
            onClick: Be
          })
        ), he.value > 2 && me.push(
          u(et, {
            key: "pgLast",
            ...rt,
            icon: nt.value[3],
            disable: de.value,
            "aria-label": l.lang.pagination.last,
            onClick: se
          })
        );
      }
      return Z.push(
        u("div", { class: "q-table__control" }, me)
      ), Z;
    }
    function Vt() {
      const Z = e.gridHeader === !0 ? [
        u("table", { class: "q-table" }, [
          Se()
        ])
      ] : e.loading === !0 && t.loading === void 0 ? we() : void 0;
      return u("div", { class: "q-table__middle" }, Z);
    }
    function rn() {
      const Z = t.item !== void 0 ? t.item : (me) => {
        const $e = me.cols.map(
          (Ee) => u("div", { class: "q-table__grid-item-row" }, [
            u("div", { class: "q-table__grid-item-title" }, [Ee.label]),
            u("div", { class: "q-table__grid-item-value" }, [Ee.value])
          ])
        );
        if (P.value === !0) {
          const Ee = t["body-selection"], st = Ee !== void 0 ? Ee(me) : [
            u(Ra, {
              modelValue: me.selected,
              color: e.color,
              dark: r.value,
              dense: e.dense,
              "onUpdate:modelValue": (rt, M) => {
                W([me.key], [me.row], rt, M);
              }
            })
          ];
          $e.unshift(
            u("div", { class: "q-table__grid-item-row" }, st),
            u(Qn, { dark: r.value })
          );
        }
        const Me = {
          class: [
            "q-table__grid-item-card" + g.value,
            e.cardClass
          ],
          style: e.cardStyle
        };
        if (e.cardStyleFn !== void 0 && (Me.style = [Me.style, e.cardStyleFn(me.row)]), e.cardClassFn !== void 0) {
          const Ee = e.cardClassFn(me.row);
          Ee && (Me.class[0] += ` ${Ee}`);
        }
        return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Me.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Me.onClick = (Ee) => {
          n("RowClick", Ee, me.row, me.pageIndex);
        }), e.onRowDblclick !== void 0 && (Me.onDblclick = (Ee) => {
          n("RowDblclick", Ee, me.row, me.pageIndex);
        }), e.onRowContextmenu !== void 0 && (Me.onContextmenu = (Ee) => {
          n("rowContextmenu", Ee, me.row, me.pageIndex);
        })), u("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (me.selected === !0 ? " q-table__grid-item--selected" : "")
        }, [
          u("div", Me, $e)
        ]);
      };
      return u("div", {
        class: [
          "q-table__grid-content row",
          e.cardContainerClass
        ],
        style: e.cardContainerStyle
      }, B.value.map((me, $e) => Z(Le({
        key: c.value(me),
        row: me,
        pageIndex: $e
      }))));
    }
    return Object.assign(a.proxy, {
      requestServerInteraction: C,
      setPagination: y,
      firstPage: be,
      prevPage: _e,
      nextPage: Be,
      lastPage: se,
      isRowSelected: H,
      clearSelection: K,
      isRowExpanded: _,
      setExpanded: L,
      sort: $,
      resetVirtualScroll: Oe,
      scrollTo: G,
      getCellValue: J
    }), Ji(a.proxy, {
      filteredSortedRows: () => R.value,
      computedRows: () => B.value,
      computedRowsNumber: () => fe.value
    }), () => {
      const Z = [X()], me = { ref: f, class: m.value };
      return e.grid === !0 ? Z.push(Vt()) : Object.assign(me, {
        class: [me.class, e.cardClass],
        style: e.cardStyle
      }), Z.push(
        le(),
        vt()
      ), e.loading === !0 && t.loading !== void 0 && Z.push(
        t.loading()
      ), u("div", me, Z);
    };
  }
});
te({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => "q-tr" + (e.props === void 0 || e.props.header === !0 ? "" : " " + e.props.__trClass) + (e.noHover === !0 ? " q-tr--no-hover" : "")
    );
    return () => {
      var a;
      return u("tr", {
        style: (a = e.props) == null ? void 0 : a.__trStyle,
        class: n.value
      }, xe(t.default));
    };
  }
});
te({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(e, { slots: t }) {
    const n = ve(), a = s(
      () => "q-td" + (e.autoWidth === !0 ? " q-table--col-auto-width" : "") + (e.noHover === !0 ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (e.props === void 0)
        return u("td", { class: a.value }, xe(t.default));
      const l = n.vnode.key, r = (e.props.colsMap !== void 0 ? e.props.colsMap[l] : null) || e.props.col;
      if (r === void 0) return;
      const { row: o } = e.props;
      return u("td", {
        class: a.value + r.__tdClass(o),
        style: r.__tdStyle(o)
      }, xe(t.default));
    };
  }
});
te({
  name: "QRouteTab",
  props: {
    ...Qa,
    ...Zu
  },
  emits: Gu,
  setup(e, { slots: t, emit: n }) {
    const a = Al({
      useDisableForRouterLinkProps: !1
    }), { renderTab: l, $tabs: r } = Ju(
      e,
      t,
      n,
      {
        exact: s(() => e.exact),
        ...a
      }
    );
    return ae(
      () => `${e.name} | ${e.exact} | ${(a.resolvedLink.value || {}).href}`,
      r.verifyRouteModel
    ), () => l(a.linkTag.value, a.linkAttrs.value);
  }
});
function im(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function um() {
  const e = /* @__PURE__ */ new Date();
  return {
    hour: e.getHours(),
    minute: e.getMinutes(),
    second: e.getSeconds(),
    millisecond: e.getMilliseconds()
  };
}
te({
  name: "QTime",
  props: {
    ...Ue,
    ...Xt,
    ...$l,
    modelValue: {
      required: !0,
      validator: (e) => typeof e == "string" || e === null
    },
    mask: {
      ...$l.mask,
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    defaultDate: {
      type: String,
      validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  emits: ls,
  setup(e, { slots: t, emit: n }) {
    const a = ve(), { $q: l } = a.proxy, r = Ye(e, l), { tabindex: o, headerClass: i, getLocale: c, getCurrentDate: f } = rs(e, l), d = Ka(e), b = $n(d);
    let g, v;
    const m = E(null), S = s(() => ne()), p = s(() => c()), x = s(() => $()), C = sa(
      e.modelValue,
      S.value,
      // initial mask
      p.value,
      // initial locale
      e.calendar,
      x.value
    ), y = E(im(C)), h = E(C), _ = E(C.hour === null || C.hour < 12), L = s(
      () => `q-time q-time--${e.landscape === !0 ? "landscape" : "portrait"}` + (r.value === !0 ? " q-time--dark q-dark" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-time--readonly" : "") + (e.bordered === !0 ? " q-time--bordered" : "") + (e.square === !0 ? " q-time--square no-border-radius" : "") + (e.flat === !0 ? " q-time--flat no-shadow" : "")
    ), F = s(() => {
      const J = h.value;
      return {
        hour: J.hour === null ? "--" : R.value === !0 ? Je(J.hour) : String(
          _.value === !0 ? J.hour === 0 ? 12 : J.hour : J.hour > 12 ? J.hour - 12 : J.hour
        ),
        minute: J.minute === null ? "--" : Je(J.minute),
        second: J.second === null ? "--" : Je(J.second)
      };
    }), R = s(() => e.format24h !== null ? e.format24h : l.lang.date.format24h), z = s(() => {
      const J = y.value === "hour", ie = J === !0 ? 12 : 60, X = h.value[y.value];
      let Se = `rotate(${Math.round(X * (360 / ie)) - 180}deg) translateX(-50%)`;
      return J === !0 && R.value === !0 && h.value.hour >= 12 && (Se += " scale(.7)"), { transform: Se };
    }), B = s(() => h.value.hour !== null), P = s(() => B.value === !0 && h.value.minute !== null), T = s(() => e.hourOptions !== void 0 ? (J) => e.hourOptions.includes(J) : e.options !== void 0 ? (J) => e.options(J, null, null) : null), q = s(() => e.minuteOptions !== void 0 ? (J) => e.minuteOptions.includes(J) : e.options !== void 0 ? (J) => e.options(h.value.hour, J, null) : null), w = s(() => e.secondOptions !== void 0 ? (J) => e.secondOptions.includes(J) : e.options !== void 0 ? (J) => e.options(h.value.hour, h.value.minute, J) : null), A = s(() => {
      if (T.value === null)
        return null;
      const J = k(0, 11, T.value), ie = k(12, 11, T.value);
      return { am: J, pm: ie, values: J.values.concat(ie.values) };
    }), N = s(() => q.value !== null ? k(0, 59, q.value) : null), H = s(() => w.value !== null ? k(0, 59, w.value) : null), K = s(() => {
      switch (y.value) {
        case "hour":
          return A.value;
        case "minute":
          return N.value;
        case "second":
          return H.value;
      }
    }), W = s(() => {
      let J, ie, X = 0, re = 1;
      const Se = K.value !== null ? K.value.values : void 0;
      y.value === "hour" ? R.value === !0 ? (J = 0, ie = 23) : (J = 0, ie = 11, _.value === !1 && (X = 12)) : (J = 0, ie = 55, re = 5);
      const Re = [];
      for (let qe = J, Ie = J; qe <= ie; qe += re, Ie++) {
        const nt = qe + X, vt = (Se == null ? void 0 : Se.includes(nt)) === !1, $t = y.value === "hour" && qe === 0 ? R.value === !0 ? "00" : "12" : qe;
        Re.push({ val: nt, index: Ie, disable: vt, label: $t });
      }
      return Re;
    }), ue = s(() => [[
      Qt,
      j,
      void 0,
      {
        stop: !0,
        prevent: !0,
        mouse: !0
      }
    ]]);
    ae(() => e.modelValue, (J) => {
      const ie = sa(
        J,
        S.value,
        p.value,
        e.calendar,
        x.value
      );
      (ie.dateHash !== h.value.dateHash || ie.timeHash !== h.value.timeHash) && (h.value = ie, ie.hour === null ? y.value = "hour" : _.value = ie.hour < 12);
    }), ae([S, p], () => {
      Ke(() => {
        Fe();
      });
    });
    function I() {
      const J = {
        ...f(),
        ...um()
      };
      Fe(J), Object.assign(h.value, J), y.value = "hour";
    }
    function k(J, ie, X) {
      const re = Array.apply(null, { length: ie + 1 }).map((Se, Re) => {
        const qe = Re + J;
        return {
          index: qe,
          val: X(qe) === !0
          // force boolean
        };
      }).filter((Se) => Se.val === !0).map((Se) => Se.index);
      return {
        min: re[0],
        max: re[re.length - 1],
        values: re,
        threshold: ie + 1
      };
    }
    function U(J, ie, X) {
      const re = Math.abs(J - ie);
      return Math.min(re, X - re);
    }
    function O(J, { min: ie, max: X, values: re, threshold: Se }) {
      if (J === ie)
        return ie;
      if (J < ie || J > X)
        return U(J, ie, Se) <= U(J, X, Se) ? ie : X;
      const Re = re.findIndex((nt) => J <= nt), qe = re[Re - 1], Ie = re[Re];
      return J - qe <= Ie - J ? qe : Ie;
    }
    function ne() {
      return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === !0 ? ":ss" : ""}`;
    }
    function $() {
      if (typeof e.defaultDate != "string") {
        const J = f(!0);
        return J.dateHash = sn(J), J;
      }
      return sa(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
    }
    function Q() {
      return kn(a) === !0 || K.value !== null && (K.value.values.length === 0 || y.value === "hour" && R.value !== !0 && A.value[_.value === !0 ? "am" : "pm"].values.length === 0);
    }
    function oe() {
      const J = m.value, { top: ie, left: X, width: re } = J.getBoundingClientRect(), Se = re / 2;
      return {
        top: ie + Se,
        left: X + Se,
        dist: Se * 0.7
      };
    }
    function j(J) {
      if (Q() !== !0) {
        if (J.isFirst === !0) {
          g = oe(), v = he(J.evt, g);
          return;
        }
        v = he(J.evt, g, v), J.isFinal === !0 && (g = !1, v = null, de());
      }
    }
    function de() {
      y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
    }
    function he(J, ie, X) {
      const re = Pt(J), Se = Math.abs(re.top - ie.top), Re = Math.sqrt(
        Math.pow(Math.abs(re.top - ie.top), 2) + Math.pow(Math.abs(re.left - ie.left), 2)
      );
      let qe, Ie = Math.asin(Se / Re) * (180 / Math.PI);
      if (re.top < ie.top ? Ie = ie.left < re.left ? 90 - Ie : 270 + Ie : Ie = ie.left < re.left ? Ie + 90 : 270 - Ie, y.value === "hour") {
        if (qe = Ie / 30, A.value !== null) {
          const nt = R.value !== !0 ? _.value === !0 : A.value.am.values.length !== 0 && A.value.pm.values.length !== 0 ? Re >= ie.dist : A.value.am.values.length !== 0;
          qe = O(
            qe + (nt === !0 ? 0 : 12),
            A.value[nt === !0 ? "am" : "pm"]
          );
        } else
          qe = Math.round(qe), R.value === !0 ? Re < ie.dist ? qe < 12 && (qe += 12) : qe === 12 && (qe = 0) : _.value === !0 && qe === 12 ? qe = 0 : _.value === !1 && qe !== 12 && (qe += 12);
        R.value === !0 && (_.value = qe < 12);
      } else
        qe = Math.round(Ie / 6) % 60, y.value === "minute" && N.value !== null ? qe = O(qe, N.value) : y.value === "second" && H.value !== null && (qe = O(qe, H.value));
      return X !== qe && ce[y.value](qe), qe;
    }
    const Y = {
      hour() {
        y.value = "hour";
      },
      minute() {
        y.value = "minute";
      },
      second() {
        y.value = "second";
      }
    };
    function fe(J) {
      J.keyCode === 13 && we();
    }
    function be(J) {
      J.keyCode === 13 && Ve();
    }
    function _e(J) {
      Q() !== !0 && (l.platform.is.desktop !== !0 && he(J, oe()), de());
    }
    function Be(J) {
      Q() !== !0 && he(J, oe());
    }
    function se(J) {
      if (J.keyCode === 13)
        y.value = "hour";
      else if ([37, 39].includes(J.keyCode)) {
        const ie = J.keyCode === 37 ? -1 : 1;
        if (A.value !== null) {
          const X = R.value === !0 ? A.value.values : A.value[_.value === !0 ? "am" : "pm"].values;
          if (X.length === 0) return;
          if (h.value.hour === null)
            Oe(X[0]);
          else {
            const re = (X.length + X.indexOf(h.value.hour) + ie) % X.length;
            Oe(X[re]);
          }
        } else {
          const X = R.value === !0 ? 24 : 12, re = R.value !== !0 && _.value === !1 ? 12 : 0, Se = h.value.hour === null ? -ie : h.value.hour;
          Oe(re + (24 + Se + ie) % X);
        }
      }
    }
    function Te(J) {
      if (J.keyCode === 13)
        y.value = "minute";
      else if ([37, 39].includes(J.keyCode)) {
        const ie = J.keyCode === 37 ? -1 : 1;
        if (N.value !== null) {
          const X = N.value.values;
          if (X.length === 0) return;
          if (h.value.minute === null)
            le(X[0]);
          else {
            const re = (X.length + X.indexOf(h.value.minute) + ie) % X.length;
            le(X[re]);
          }
        } else {
          const X = h.value.minute === null ? -ie : h.value.minute;
          le((60 + X + ie) % 60);
        }
      }
    }
    function Pe(J) {
      if (J.keyCode === 13)
        y.value = "second";
      else if ([37, 39].includes(J.keyCode)) {
        const ie = J.keyCode === 37 ? -1 : 1;
        if (H.value !== null) {
          const X = H.value.values;
          if (X.length === 0) return;
          if (h.value.seconds === null)
            G(X[0]);
          else {
            const re = (X.length + X.indexOf(h.value.second) + ie) % X.length;
            G(X[re]);
          }
        } else {
          const X = h.value.second === null ? -ie : h.value.second;
          G((60 + X + ie) % 60);
        }
      }
    }
    function Oe(J) {
      h.value.hour !== J && (h.value.hour = J, Le());
    }
    function le(J) {
      h.value.minute !== J && (h.value.minute = J, Le());
    }
    function G(J) {
      h.value.second !== J && (h.value.second = J, Le());
    }
    const ce = {
      hour: Oe,
      minute: le,
      second: G
    };
    function we() {
      _.value === !1 && (_.value = !0, h.value.hour !== null && (h.value.hour -= 12, Le()));
    }
    function Ve() {
      _.value === !0 && (_.value = !1, h.value.hour !== null && (h.value.hour += 12, Le()));
    }
    function Ne(J) {
      const ie = e.modelValue;
      y.value !== J && ie !== void 0 && ie !== null && ie !== "" && typeof ie != "string" && (y.value = J);
    }
    function Le() {
      if (T.value !== null && T.value(h.value.hour) !== !0) {
        h.value = sa(), Ne("hour");
        return;
      }
      if (q.value !== null && q.value(h.value.minute) !== !0) {
        h.value.minute = null, h.value.second = null, Ne("minute");
        return;
      }
      if (e.withSeconds === !0 && w.value !== null && w.value(h.value.second) !== !0) {
        h.value.second = null, Ne("second");
        return;
      }
      h.value.hour === null || h.value.minute === null || e.withSeconds === !0 && h.value.second === null || Fe();
    }
    function Fe(J) {
      const ie = Object.assign({ ...h.value }, J), X = e.calendar === "persian" ? Je(ie.hour) + ":" + Je(ie.minute) + (e.withSeconds === !0 ? ":" + Je(ie.second) : "") : go(
        new Date(
          ie.year,
          ie.month === null ? null : ie.month - 1,
          ie.day,
          ie.hour,
          ie.minute,
          ie.second,
          ie.millisecond
        ),
        S.value,
        p.value,
        ie.year,
        ie.timezoneOffset
      );
      ie.changed = X !== e.modelValue, n("update:modelValue", X, ie);
    }
    function We() {
      const J = [
        u("div", {
          class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
          tabindex: o.value,
          onClick: Y.hour,
          onKeyup: se
        }, F.value.hour),
        u("div", ":"),
        u(
          "div",
          B.value === !0 ? {
            class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: o.value,
            onKeyup: Te,
            onClick: Y.minute
          } : { class: "q-time__link" },
          F.value.minute
        )
      ];
      e.withSeconds === !0 && J.push(
        u("div", ":"),
        u(
          "div",
          P.value === !0 ? {
            class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: o.value,
            onKeyup: Pe,
            onClick: Y.second
          } : { class: "q-time__link" },
          F.value.second
        )
      );
      const ie = [
        u("div", {
          class: "q-time__header-label row items-center no-wrap",
          dir: "ltr"
        }, J)
      ];
      return R.value === !1 && ie.push(
        u("div", {
          class: "q-time__header-ampm column items-between no-wrap"
        }, [
          u("div", {
            class: "q-time__link " + (_.value === !0 ? "q-time__link--active" : "cursor-pointer"),
            tabindex: o.value,
            onClick: we,
            onKeyup: fe
          }, "AM"),
          u("div", {
            class: "q-time__link " + (_.value !== !0 ? "q-time__link--active" : "cursor-pointer"),
            tabindex: o.value,
            onClick: Ve,
            onKeyup: be
          }, "PM")
        ])
      ), u("div", {
        class: "q-time__header flex flex-center no-wrap " + i.value
      }, ie);
    }
    function Ge() {
      const J = h.value[y.value];
      return u("div", {
        class: "q-time__content col relative-position"
      }, [
        u(Ct, {
          name: "q-transition--scale"
        }, () => u("div", {
          key: "clock" + y.value,
          class: "q-time__container-parent absolute-full"
        }, [
          u("div", {
            ref: m,
            class: "q-time__container-child fit overflow-hidden"
          }, [
            Kt(
              u("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick: _e,
                onMousedown: Be
              }, [
                u("div", { class: "q-time__clock-circle fit" }, [
                  u("div", {
                    class: "q-time__clock-pointer" + (h.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""),
                    style: z.value
                  }),
                  W.value.map((ie) => u("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${ie.index}` + (ie.val === J ? " q-time__clock-position--active " + i.value : ie.disable === !0 ? " q-time__clock-position--disable" : "")
                  }, [u("span", ie.label)]))
                ])
              ]),
              ue.value
            )
          ])
        ])),
        e.nowBtn === !0 ? u(et, {
          class: "q-time__now-button absolute",
          icon: l.iconSet.datetime.now,
          unelevated: !0,
          size: "sm",
          round: !0,
          color: e.color,
          textColor: e.textColor,
          tabindex: o.value,
          onClick: I
        }) : null
      ]);
    }
    return a.proxy.setNow = I, () => {
      const J = [Ge()], ie = xe(t.default);
      return ie !== void 0 && J.push(
        u("div", { class: "q-time__actions" }, ie)
      ), e.name !== void 0 && e.disable !== !0 && b(J, "push"), u("div", {
        class: L.value,
        tabindex: -1
      }, [
        We(),
        u("div", { class: "q-time__main col overflow-auto" }, J)
      ]);
    };
  }
});
te({
  name: "QTimeline",
  props: {
    ...Ue,
    color: {
      type: String,
      default: "primary"
    },
    side: {
      type: String,
      default: "right",
      validator: (e) => ["left", "right"].includes(e)
    },
    layout: {
      type: String,
      default: "dense",
      validator: (e) => ["dense", "comfortable", "loose"].includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = ve(), a = Ye(e, n.proxy.$q);
    fn(nu, e);
    const l = s(
      () => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (a.value === !0 ? " q-timeline--dark" : "")
    );
    return () => u("ul", { class: l.value }, xe(t.default));
  }
});
te({
  name: "QTimelineEntry",
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: "h3"
    },
    side: {
      type: String,
      default: "right",
      validator: (e) => ["left", "right"].includes(e)
    },
    icon: String,
    avatar: String,
    color: String,
    title: String,
    subtitle: String,
    body: String
  },
  setup(e, { slots: t }) {
    const n = Et(nu, tt);
    if (n === tt)
      return console.error("QTimelineEntry needs to be child of QTimeline"), tt;
    const a = s(
      () => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")
    ), l = s(
      () => `q-timeline__dot text-${e.color || n.color}`
    ), r = s(
      () => n.layout === "comfortable" && n.side === "left"
    );
    return () => {
      const o = ja(t.default, []);
      if (e.body !== void 0 && o.unshift(e.body), e.heading === !0) {
        const f = [
          u("div"),
          u("div"),
          u(
            e.tag,
            { class: "q-timeline__heading-title" },
            o
          )
        ];
        return u("div", {
          class: "q-timeline__heading"
        }, r.value === !0 ? f.reverse() : f);
      }
      let i;
      e.icon !== void 0 ? i = [
        u(Xe, {
          class: "row items-center justify-center",
          name: e.icon
        })
      ] : e.avatar !== void 0 && (i = [
        u("img", {
          class: "q-timeline__dot-img",
          src: e.avatar
        })
      ]);
      const c = [
        u("div", { class: "q-timeline__subtitle" }, [
          u("span", {}, xe(t.subtitle, [e.subtitle]))
        ]),
        u("div", { class: l.value }, i),
        u("div", { class: "q-timeline__content" }, [
          u("h6", { class: "q-timeline__title" }, xe(t.title, [e.title]))
        ].concat(o))
      ];
      return u("li", {
        class: a.value
      }, r.value === !0 ? c.reverse() : c);
    };
  }
});
te({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => "q-toolbar row no-wrap items-center" + (e.inset === !0 ? " q-toolbar--inset" : "")
    );
    return () => u("div", { class: n.value, role: "toolbar" }, xe(t.default));
  }
});
te({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => "q-toolbar__title ellipsis" + (e.shrink === !0 ? " col-shrink" : "")
    );
    return () => u("div", { class: n.value }, xe(t.default));
  }
});
var sm = ["none", "strict", "leaf", "leaf-filtered"];
te({
  name: "QTree",
  props: {
    ...Ue,
    nodes: {
      type: Array,
      required: !0
    },
    nodeKey: {
      type: String,
      required: !0
    },
    labelKey: {
      type: String,
      default: "label"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    dense: Boolean,
    color: String,
    controlColor: String,
    textColor: String,
    selectedColor: String,
    icon: String,
    tickStrategy: {
      type: String,
      default: "none",
      validator: (e) => sm.includes(e)
    },
    ticked: Array,
    // v-model:ticked
    expanded: Array,
    // v-model:expanded
    selected: {},
    // v-model:selected
    noSelectionUnset: Boolean,
    defaultExpandAll: Boolean,
    accordion: Boolean,
    filter: String,
    filterMethod: Function,
    duration: {},
    noConnectors: Boolean,
    noTransition: Boolean,
    noNodesLabel: String,
    noResultsLabel: String
  },
  emits: [
    "update:expanded",
    "update:ticked",
    "update:selected",
    "lazyLoad",
    "afterShow",
    "afterHide"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: a } = ve(), { $q: l } = a, r = Ye(e, l), o = E({}), i = E(e.ticked || []), c = E(e.expanded || []);
    let f = {};
    Ha(() => {
      f = {};
    });
    const d = s(
      () => `q-tree q-tree--${e.dense === !0 ? "dense" : "standard"}` + (e.noConnectors === !0 ? " q-tree--no-connectors" : "") + (r.value === !0 ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), b = s(() => e.selected !== void 0), g = s(() => e.icon || l.iconSet.tree.icon), v = s(() => e.controlColor || e.color), m = s(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), S = s(() => {
      const k = e.selectedColor || e.color;
      return k ? ` text-${k}` : "";
    }), p = s(() => e.filterMethod !== void 0 ? e.filterMethod : (k, U) => {
      const O = U.toLowerCase();
      return k[e.labelKey] && k[e.labelKey].toLowerCase().indexOf(O) !== -1;
    }), x = s(() => {
      const k = {}, U = (O, ne) => {
        const $ = O.tickStrategy || (ne ? ne.tickStrategy : e.tickStrategy), Q = O[e.nodeKey], oe = O[e.childrenKey] && Array.isArray(O[e.childrenKey]) && O[e.childrenKey].length !== 0, j = O.disabled !== !0 && b.value === !0 && O.selectable !== !1, de = O.disabled !== !0 && O.expandable !== !1, he = $ !== "none", Y = $ === "strict", fe = $ === "leaf-filtered", be = $ === "leaf" || $ === "leaf-filtered";
        let _e = O.disabled !== !0 && O.tickable !== !1;
        be === !0 && _e === !0 && ne && ne.tickable !== !0 && (_e = !1);
        let Be = O.lazy;
        Be === !0 && o.value[Q] !== void 0 && Array.isArray(O[e.childrenKey]) === !0 && (Be = o.value[Q]);
        const se = {
          key: Q,
          parent: ne,
          isParent: oe,
          lazy: Be,
          disabled: O.disabled,
          link: O.disabled !== !0 && (j === !0 || de === !0 && (oe === !0 || Be === !0)),
          children: [],
          matchesFilter: e.filter ? p.value(O, e.filter) : !0,
          selected: Q === e.selected && j === !0,
          selectable: j,
          expanded: oe === !0 ? c.value.includes(Q) : !1,
          expandable: de,
          noTick: O.noTick === !0 || Y !== !0 && Be && Be !== "loaded",
          tickable: _e,
          tickStrategy: $,
          hasTicking: he,
          strictTicking: Y,
          leafFilteredTicking: fe,
          leafTicking: be,
          ticked: Y === !0 ? i.value.includes(Q) : oe === !0 ? !1 : i.value.includes(Q)
        };
        if (k[Q] = se, oe === !0 && (se.children = O[e.childrenKey].map((Te) => U(Te, se)), e.filter && (se.matchesFilter !== !0 ? se.matchesFilter = se.children.some((Te) => Te.matchesFilter) : se.noTick !== !0 && se.disabled !== !0 && se.tickable === !0 && fe === !0 && se.children.every((Te) => Te.matchesFilter !== !0 || Te.noTick === !0 || Te.tickable !== !0) === !0 && (se.tickable = !1)), se.matchesFilter === !0 && (se.noTick !== !0 && Y !== !0 && se.children.every((Te) => Te.noTick) === !0 && (se.noTick = !0), be))) {
          if (se.ticked = !1, se.indeterminate = se.children.some((Te) => Te.indeterminate === !0), se.tickable = se.tickable === !0 && se.children.some((Te) => Te.tickable), se.indeterminate !== !0) {
            const Te = se.children.reduce((Pe, Oe) => Oe.ticked === !0 ? Pe + 1 : Pe, 0);
            Te === se.children.length ? se.ticked = !0 : Te > 0 && (se.indeterminate = !0);
          }
          se.indeterminate === !0 && (se.indeterminateNextState = se.children.every((Te) => Te.tickable !== !0 || Te.ticked !== !0));
        }
        return se;
      };
      return e.nodes.forEach((O) => U(O, null)), k;
    });
    ae(() => e.ticked, (k) => {
      i.value = k;
    }), ae(() => e.expanded, (k) => {
      c.value = k;
    });
    function C(k) {
      const U = [].reduce, O = (ne, $) => {
        if (ne || !$)
          return ne;
        if (Array.isArray($) === !0)
          return U.call(Object($), O, ne);
        if ($[e.nodeKey] === k)
          return $;
        if ($[e.childrenKey])
          return O(null, $[e.childrenKey]);
      };
      return O(null, e.nodes);
    }
    function y() {
      return i.value.map((k) => C(k));
    }
    function h() {
      return c.value.map((k) => C(k));
    }
    function _(k) {
      return k && x.value[k] ? x.value[k].expanded : !1;
    }
    function L() {
      e.expanded !== void 0 ? n("update:expanded", []) : c.value = [];
    }
    function F() {
      const k = [], U = (O) => {
        O[e.childrenKey] && O[e.childrenKey].length !== 0 && O.expandable !== !1 && O.disabled !== !0 && (k.push(O[e.nodeKey]), O[e.childrenKey].forEach(U));
      };
      e.nodes.forEach(U), e.expanded !== void 0 ? n("update:expanded", k) : c.value = k;
    }
    function R(k, U, O = C(k), ne = x.value[k]) {
      if (ne.lazy && ne.lazy !== "loaded") {
        if (ne.lazy === "loading") return;
        o.value[k] = "loading", Array.isArray(O[e.childrenKey]) !== !0 && (O[e.childrenKey] = []), n("lazyLoad", {
          node: O,
          key: k,
          done: ($) => {
            o.value[k] = "loaded", O[e.childrenKey] = Array.isArray($) === !0 ? $ : [], Ke(() => {
              const Q = x.value[k];
              (Q == null ? void 0 : Q.isParent) === !0 && z(k, !0);
            });
          },
          fail: () => {
            delete o.value[k], O[e.childrenKey].length === 0 && delete O[e.childrenKey];
          }
        });
      } else ne.isParent === !0 && ne.expandable === !0 && z(k, U);
    }
    function z(k, U) {
      let O = c.value;
      const ne = e.expanded !== void 0;
      if (ne === !0 && (O = O.slice()), U) {
        if (e.accordion && x.value[k]) {
          const $ = [];
          x.value[k].parent ? x.value[k].parent.children.forEach((Q) => {
            Q.key !== k && Q.expandable === !0 && $.push(Q.key);
          }) : e.nodes.forEach((Q) => {
            const oe = Q[e.nodeKey];
            oe !== k && $.push(oe);
          }), $.length !== 0 && (O = O.filter((Q) => $.includes(Q) === !1));
        }
        O = O.concat([k]).filter(($, Q, oe) => oe.indexOf($) === Q);
      } else
        O = O.filter(($) => $ !== k);
      ne === !0 ? n("update:expanded", O) : c.value = O;
    }
    function B(k) {
      return k && x.value[k] ? x.value[k].ticked : !1;
    }
    function P(k, U) {
      let O = i.value;
      const ne = e.ticked !== void 0;
      ne === !0 && (O = O.slice()), U ? O = O.concat(k).filter(($, Q, oe) => oe.indexOf($) === Q) : O = O.filter(($) => k.includes($) === !1), ne === !0 && n("update:ticked", O);
    }
    function T(k, U, O) {
      const ne = { tree: a, node: k, key: O, color: e.color, dark: r.value };
      return xt(
        ne,
        "expanded",
        () => U.expanded,
        ($) => {
          $ !== U.expanded && R(O, $);
        }
      ), xt(
        ne,
        "ticked",
        () => U.ticked,
        ($) => {
          $ !== U.ticked && P([O], $);
        }
      ), ne;
    }
    function q(k) {
      return (e.filter ? k.filter((U) => x.value[U[e.nodeKey]].matchesFilter) : k).map((U) => H(U));
    }
    function w(k) {
      if (k.icon !== void 0)
        return u(Xe, {
          class: "q-tree__icon q-mr-sm",
          name: k.icon,
          color: k.iconColor
        });
      const U = k.img || k.avatar;
      if (U)
        return u("img", {
          class: `q-tree__${k.img ? "img" : "avatar"} q-mr-sm`,
          src: U
        });
    }
    function A() {
      n("afterShow");
    }
    function N() {
      n("afterHide");
    }
    function H(k) {
      const U = k[e.nodeKey], O = x.value[U], ne = k.header && t[`header-${k.header}`] || t["default-header"], $ = O.isParent === !0 ? q(k[e.childrenKey]) : [], Q = $.length !== 0 || O.lazy && O.lazy !== "loaded";
      let oe = k.body && t[`body-${k.body}`] || t["default-body"];
      const j = ne !== void 0 || oe !== void 0 ? T(k, O, U) : null;
      return oe !== void 0 && (oe = u("div", { class: "q-tree__node-body relative-position" }, [
        u("div", { class: m.value }, [
          oe(j)
        ])
      ])), u("div", {
        key: U,
        class: `q-tree__node relative-position q-tree__node--${Q === !0 ? "parent" : "child"}`
      }, [
        u("div", {
          class: "q-tree__node-header relative-position row no-wrap items-center" + (O.link === !0 ? " q-tree__node--link q-hoverable q-focusable" : "") + (O.selected === !0 ? " q-tree__node--selected" : "") + (O.disabled === !0 ? " q-tree__node--disabled" : ""),
          tabindex: O.link === !0 ? 0 : -1,
          ariaExpanded: $.length > 0 ? O.expanded : null,
          role: "treeitem",
          onClick: (de) => {
            W(k, O, de);
          },
          onKeypress(de) {
            Yn(de) !== !0 && (de.keyCode === 13 ? W(k, O, de, !0) : de.keyCode === 32 && ue(k, O, de, !0));
          }
        }, [
          u("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: (de) => {
              f[O.key] = de;
            }
          }),
          O.lazy === "loading" ? u(en, {
            class: "q-tree__spinner",
            color: v.value
          }) : Q === !0 ? u(Xe, {
            class: "q-tree__arrow" + (O.expanded === !0 ? " q-tree__arrow--rotate" : ""),
            name: g.value,
            onClick(de) {
              ue(k, O, de);
            }
          }) : null,
          O.hasTicking === !0 && O.noTick !== !0 ? u(Ra, {
            class: "q-tree__tickbox",
            modelValue: O.indeterminate === !0 ? null : O.ticked,
            color: v.value,
            dark: r.value,
            dense: !0,
            keepColor: !0,
            disable: O.tickable !== !0,
            onKeydown: Ae,
            "onUpdate:modelValue": (de) => {
              I(O, de);
            }
          }) : null,
          u("div", {
            class: "q-tree__node-header-content col row no-wrap items-center" + (O.selected === !0 ? S.value : m.value)
          }, [
            ne ? ne(j) : [
              w(k),
              u("div", k[e.labelKey])
            ]
          ])
        ]),
        Q === !0 ? e.noTransition === !0 ? O.expanded === !0 ? u("div", {
          class: "q-tree__node-collapsible" + m.value,
          key: `${U}__q`
        }, [
          oe,
          u("div", {
            class: "q-tree__children" + (O.disabled === !0 ? " q-tree__node--disabled" : ""),
            role: "group"
          }, $)
        ]) : null : u(bo, {
          duration: e.duration,
          onShow: A,
          onHide: N
        }, () => Kt(
          u("div", {
            class: "q-tree__node-collapsible" + m.value,
            key: `${U}__q`
          }, [
            oe,
            u("div", {
              class: "q-tree__children" + (O.disabled === !0 ? " q-tree__node--disabled" : ""),
              role: "group"
            }, $)
          ]),
          [[Xi, O.expanded]]
        )) : oe
      ]);
    }
    function K(k) {
      var U;
      (U = f[k]) == null || U.focus();
    }
    function W(k, U, O, ne) {
      ne !== !0 && U.selectable !== !1 && K(U.key), b.value && U.selectable ? e.noSelectionUnset === !1 ? n("update:selected", U.key !== e.selected ? U.key : null) : U.key !== e.selected && n("update:selected", U.key === void 0 ? null : U.key) : ue(k, U, O, ne), typeof k.handler == "function" && k.handler(k);
    }
    function ue(k, U, O, ne) {
      O !== void 0 && Ae(O), ne !== !0 && U.selectable !== !1 && K(U.key), R(U.key, !U.expanded, k, U);
    }
    function I(k, U) {
      if (k.indeterminate === !0 && (U = k.indeterminateNextState), k.strictTicking)
        P([k.key], U);
      else if (k.leafTicking) {
        const O = [], ne = ($) => {
          $.isParent ? (U !== !0 && $.noTick !== !0 && $.tickable === !0 && O.push($.key), $.leafTicking === !0 && $.children.forEach(ne)) : $.noTick !== !0 && $.tickable === !0 && ($.leafFilteredTicking !== !0 || $.matchesFilter === !0) && O.push($.key);
        };
        ne(k), P(O, U);
      }
    }
    return e.defaultExpandAll === !0 && F(), Object.assign(a, {
      getNodeByKey: C,
      getTickedNodes: y,
      getExpandedNodes: h,
      isExpanded: _,
      collapseAll: L,
      expandAll: F,
      setExpanded: R,
      isTicked: B,
      setTicked: P
    }), () => {
      const k = q(e.nodes);
      return u(
        "div",
        {
          class: d.value,
          role: "tree"
        },
        k.length === 0 ? e.filter ? e.noResultsLabel || l.lang.tree.noResults : e.noNodesLabel || l.lang.tree.noNodes : k
      );
    };
  }
});
function Bi(e) {
  return (e * 100).toFixed(2) + "%";
}
var cm = {
  ...Ue,
  ...ws,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  thumbnailFit: {
    type: String,
    default: "cover"
  },
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
}, Ns = [
  ...Cs,
  "start",
  "finish",
  "added",
  "removed"
];
function dm(e, t) {
  const n = ve(), { props: a, slots: l, emit: r, proxy: o } = n, { $q: i } = o, c = Ye(a, i);
  function f(j, de, he) {
    if (j.__status = de, de === "idle") {
      j.__uploaded = 0, j.__progress = 0, j.__sizeLabel = kr(j.size), j.__progressLabel = "0.00%";
      return;
    }
    if (de === "failed") {
      o.$forceUpdate();
      return;
    }
    j.__uploaded = de === "uploaded" ? j.size : he, j.__progress = de === "uploaded" ? 1 : Math.min(0.9999, j.__uploaded / j.size), j.__progressLabel = Bi(j.__progress), o.$forceUpdate();
  }
  const d = s(() => a.disable !== !0 && a.readonly !== !0), b = E(!1), g = E(null), v = E(null), m = {
    files: E([]),
    queuedFiles: E([]),
    uploadedFiles: E([]),
    uploadedSize: E(0),
    updateFileStatus: f,
    isAlive: () => kn(n) === !1
  }, {
    pickFiles: S,
    addFiles: p,
    onDragover: x,
    onDragleave: C,
    processFiles: y,
    getDndNode: h,
    maxFilesNumber: _,
    maxTotalSizeNumber: L
  } = xs({ editable: d, dnd: b, getFileInput: I, addFilesToQueue: k });
  Object.assign(m, e({
    props: a,
    slots: l,
    emit: r,
    helpers: m,
    exposeApi: (j) => {
      Object.assign(m, j);
    }
  })), m.isBusy === void 0 && (m.isBusy = E(!1));
  const F = E(0), R = s(() => F.value === 0 ? 0 : m.uploadedSize.value / F.value), z = s(() => Bi(R.value)), B = s(() => kr(F.value)), P = s(
    () => d.value === !0 && m.isUploading.value !== !0 && (a.multiple === !0 || m.queuedFiles.value.length === 0) && (a.maxFiles === void 0 || m.files.value.length < _.value) && (a.maxTotalSize === void 0 || F.value < L.value)
  ), T = s(
    () => d.value === !0 && m.isBusy.value !== !0 && m.isUploading.value !== !0 && m.queuedFiles.value.length !== 0
  );
  fn(uu, ne);
  const q = s(
    () => "q-uploader column no-wrap" + (c.value === !0 ? " q-uploader--dark q-dark" : "") + (a.bordered === !0 ? " q-uploader--bordered" : "") + (a.square === !0 ? " q-uploader--square no-border-radius" : "") + (a.flat === !0 ? " q-uploader--flat no-shadow" : "") + (a.disable === !0 ? " disabled q-uploader--disable" : "") + (b.value === !0 ? " q-uploader--dnd" : "")
  ), w = s(
    () => "q-uploader__header" + (a.color !== void 0 ? ` bg-${a.color}` : "") + (a.textColor !== void 0 ? ` text-${a.textColor}` : "")
  );
  ae(m.isUploading, (j, de) => {
    de === !1 && j === !0 ? r("start") : de === !0 && j === !1 && r("finish");
  });
  function A() {
    a.disable === !1 && (m.abort(), m.uploadedSize.value = 0, F.value = 0, ue(), m.files.value = [], m.queuedFiles.value = [], m.uploadedFiles.value = []);
  }
  function N() {
    a.disable === !1 && K(["uploaded"], () => {
      m.uploadedFiles.value = [];
    });
  }
  function H() {
    K(["idle", "failed"], ({ size: j }) => {
      F.value -= j, m.queuedFiles.value = [];
    });
  }
  function K(j, de) {
    if (a.disable === !0) return;
    const he = {
      files: [],
      size: 0
    }, Y = m.files.value.filter((fe) => j.indexOf(fe.__status) === -1 ? !0 : (he.size += fe.size, he.files.push(fe), fe.__img !== void 0 && window.URL.revokeObjectURL(fe.__img.src), !1));
    he.files.length !== 0 && (m.files.value = Y, de(he), r("removed", he.files));
  }
  function W(j) {
    a.disable || (j.__status === "uploaded" ? m.uploadedFiles.value = m.uploadedFiles.value.filter((de) => de.__key !== j.__key) : j.__status === "uploading" ? j.__abort() : F.value -= j.size, m.files.value = m.files.value.filter((de) => de.__key !== j.__key ? !0 : (de.__img !== void 0 && window.URL.revokeObjectURL(de.__img.src), !1)), m.queuedFiles.value = m.queuedFiles.value.filter((de) => de.__key !== j.__key), r("removed", [j]));
  }
  function ue() {
    m.files.value.forEach((j) => {
      j.__img !== void 0 && window.URL.revokeObjectURL(j.__img.src);
    });
  }
  function I() {
    return v.value || g.value.getElementsByClassName("q-uploader__input")[0];
  }
  function k(j, de) {
    const he = y(j, de, m.files.value, !0), Y = I();
    Y != null && (Y.value = ""), he !== void 0 && (he.forEach((fe) => {
      if (m.updateFileStatus(fe, "idle"), F.value += fe.size, a.noThumbnails !== !0 && fe.type.toUpperCase().startsWith("IMAGE")) {
        const be = new Image();
        be.src = window.URL.createObjectURL(fe), fe.__img = be;
      }
    }), m.files.value = m.files.value.concat(he), m.queuedFiles.value = m.queuedFiles.value.concat(he), r("added", he), a.autoUpload === !0 && m.upload());
  }
  function U() {
    T.value === !0 && m.upload();
  }
  function O(j, de, he) {
    if (j === !0) {
      const Y = {
        type: "a",
        key: de,
        icon: i.iconSet.uploader[de],
        flat: !0,
        dense: !0
      };
      let fe;
      return de === "add" ? (Y.onClick = S, fe = ne) : Y.onClick = he, u(et, Y, fe);
    }
  }
  function ne() {
    return u("input", {
      ref: v,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip
      accept: a.accept,
      multiple: a.multiple === !0 ? "multiple" : void 0,
      capture: a.capture,
      onMousedown: ft,
      // need to stop refocus from QBtn
      onClick: S,
      onChange: k
    });
  }
  function $() {
    return l.header !== void 0 ? l.header(oe) : [
      u("div", {
        class: "q-uploader__header-content column"
      }, [
        u("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          O(m.queuedFiles.value.length !== 0, "removeQueue", H),
          O(m.uploadedFiles.value.length !== 0, "removeUploaded", N),
          m.isUploading.value === !0 ? u(en, { class: "q-uploader__spinner" }) : null,
          u("div", { class: "col column justify-center" }, [
            a.label !== void 0 ? u("div", { class: "q-uploader__title" }, [a.label]) : null,
            u("div", { class: "q-uploader__subtitle" }, [
              B.value + " / " + z.value
            ])
          ]),
          O(P.value, "add"),
          O(a.hideUploadBtn === !1 && T.value === !0, "upload", m.upload),
          O(m.isUploading.value, "clear", m.abort)
        ])
      ])
    ];
  }
  function Q() {
    return l.list !== void 0 ? l.list(oe) : m.files.value.map((j) => u("div", {
      key: j.__key,
      class: "q-uploader__file relative-position" + (a.noThumbnails !== !0 && j.__img !== void 0 ? " q-uploader__file--img" : "") + (j.__status === "failed" ? " q-uploader__file--failed" : j.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: a.noThumbnails !== !0 && j.__img !== void 0 ? { backgroundImage: 'url("' + j.__img.src + '")', backgroundSize: a.thumbnailFit } : null
    }, [
      u("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        j.__status === "failed" ? u(Xe, {
          class: "q-uploader__file-status",
          name: i.iconSet.type.negative,
          color: "negative"
        }) : null,
        u("div", { class: "q-uploader__file-header-content col" }, [
          u("div", { class: "q-uploader__title" }, [j.name]),
          u("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            j.__sizeLabel + " / " + j.__progressLabel
          ])
        ]),
        j.__status === "uploading" ? u(Qu, {
          value: j.__progress,
          min: 0,
          max: 1,
          indeterminate: j.__progress === 0
        }) : u(et, {
          round: !0,
          dense: !0,
          flat: !0,
          icon: i.iconSet.uploader[j.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            W(j);
          }
        })
      ])
    ]));
  }
  je(() => {
    m.isUploading.value === !0 && m.abort(), m.files.value.length !== 0 && ue();
  });
  const oe = {};
  for (const j in m)
    fc(m[j]) === !0 ? xt(oe, j, () => m[j].value) : oe[j] = m[j];
  return Object.assign(oe, {
    upload: U,
    reset: A,
    removeUploadedFiles: N,
    removeQueuedFiles: H,
    removeFile: W,
    pickFiles: S,
    addFiles: p
  }), Ji(oe, {
    canAddFiles: () => P.value,
    canUpload: () => T.value,
    uploadSizeLabel: () => B.value,
    uploadProgressLabel: () => z.value
  }), t({
    ...m,
    upload: U,
    reset: A,
    removeUploadedFiles: N,
    removeQueuedFiles: H,
    removeFile: W,
    pickFiles: S,
    addFiles: p,
    canAddFiles: P,
    canUpload: T,
    uploadSizeLabel: B,
    uploadProgressLabel: z
  }), () => {
    const j = [
      u("div", { class: w.value }, $()),
      u("div", { class: "q-uploader__list scroll" }, Q()),
      h("uploader")
    ];
    m.isBusy.value === !0 && j.push(
      u("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [u(en)])
    );
    const de = { ref: g, class: q.value };
    return P.value === !0 && Object.assign(de, { onDragover: x, onDragleave: C }), u("div", de, j);
  };
}
var fm = () => !0;
function Is(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = fm;
  }), t;
}
var vm = Is(Ns), mm = ({ name: e, props: t, emits: n, injectPlugin: a }) => te({
  name: e,
  props: {
    ...cm,
    ...t
  },
  emits: Lt(n) === !0 ? { ...vm, ...n } : [...Ns, ...n],
  setup(l, { expose: r }) {
    return dm(a, r);
  }
});
function un(e) {
  return typeof e == "function" ? e : () => e;
}
var gm = "QUploader", hm = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => (e) => e.name
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
}, bm = ["factoryFailed", "uploaded", "failed", "uploading"];
function ym({ props: e, emit: t, helpers: n }) {
  const a = E([]), l = E([]), r = E(0), o = s(() => ({
    url: un(e.url),
    method: un(e.method),
    headers: un(e.headers),
    formFields: un(e.formFields),
    fieldName: un(e.fieldName),
    withCredentials: un(e.withCredentials),
    sendRaw: un(e.sendRaw),
    batch: un(e.batch)
  })), i = s(() => r.value > 0), c = s(() => l.value.length !== 0);
  let f;
  function d() {
    a.value.forEach((m) => {
      m.abort();
    }), l.value.length !== 0 && (f = !0);
  }
  function b() {
    const m = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], o.value.batch(m) ? g(m) : m.forEach((S) => {
      g([S]);
    });
  }
  function g(m) {
    if (r.value++, typeof e.factory != "function") {
      v(m, {});
      return;
    }
    const S = e.factory(m);
    if (!S)
      t(
        "factoryFailed",
        new Error("QUploader: factory() does not return properly"),
        m
      ), r.value--;
    else if (typeof S.catch == "function" && typeof S.then == "function") {
      l.value.push(S);
      const p = (x) => {
        n.isAlive() === !0 && (l.value = l.value.filter((C) => C !== S), l.value.length === 0 && (f = !1), n.queuedFiles.value = n.queuedFiles.value.concat(m), m.forEach((C) => {
          n.updateFileStatus(C, "failed");
        }), t("factoryFailed", x, m), r.value--);
      };
      S.then((x) => {
        f === !0 ? p(new Error("Aborted")) : n.isAlive() === !0 && (l.value = l.value.filter((C) => C !== S), v(m, x));
      }).catch(p);
    } else
      v(m, S || {});
  }
  function v(m, S) {
    const p = new FormData(), x = new XMLHttpRequest(), C = (T, q) => S[T] !== void 0 ? un(S[T])(q) : o.value[T](q), y = C("url", m);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const h = C("formFields", m);
    h !== void 0 && h.forEach((T) => {
      p.append(T.name, T.value);
    });
    let _ = 0, L = 0, F = 0, R = 0, z;
    x.upload.addEventListener("progress", (T) => {
      if (z === !0) return;
      const q = Math.min(R, T.loaded);
      n.uploadedSize.value += q - F, F = q;
      let w = F - L;
      for (let A = _; w > 0 && A < m.length; A++) {
        const N = m[A];
        if (w > N.size)
          w -= N.size, _++, L += N.size, n.updateFileStatus(N, "uploading", N.size);
        else {
          n.updateFileStatus(N, "uploading", w);
          return;
        }
      }
    }, !1), x.onreadystatechange = () => {
      x.readyState < 4 || (x.status && x.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(m), m.forEach((T) => {
        n.updateFileStatus(T, "uploaded");
      }), t("uploaded", { files: m, xhr: x })) : (z = !0, n.uploadedSize.value -= F, n.queuedFiles.value = n.queuedFiles.value.concat(m), m.forEach((T) => {
        n.updateFileStatus(T, "failed");
      }), t("failed", { files: m, xhr: x })), r.value--, a.value = a.value.filter((T) => T !== x));
    }, x.open(
      C("method", m),
      y
    ), C("withCredentials", m) === !0 && (x.withCredentials = !0);
    const B = C("headers", m);
    B !== void 0 && B.forEach((T) => {
      x.setRequestHeader(T.name, T.value);
    });
    const P = C("sendRaw", m);
    m.forEach((T) => {
      n.updateFileStatus(T, "uploading", 0), P !== !0 && p.append(C("fieldName", T), T, T.name), T.xhr = x, T.__abort = () => {
        x.abort();
      }, R += T.size;
    }), t("uploading", { files: m, xhr: x }), a.value.push(x), P === !0 ? x.send(new Blob(m)) : x.send(p);
  }
  return {
    isUploading: i,
    isBusy: c,
    abort: d,
    upload: b
  };
}
var pm = {
  name: gm,
  props: hm,
  emits: bm,
  injectPlugin: ym
};
mm(pm);
te({
  name: "QUploaderAddTrigger",
  setup() {
    const e = Et(uu, tt);
    return e === tt && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
  }
});
te({
  name: "QVideo",
  props: {
    ...yo,
    src: {
      type: String,
      required: !0
    },
    title: String,
    fetchpriority: {
      type: String,
      default: "auto"
    },
    loading: {
      type: String,
      default: "eager"
    },
    referrerpolicy: {
      type: String,
      default: "strict-origin-when-cross-origin"
    }
  },
  setup(e) {
    const t = po(e), n = s(
      () => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : "")
    );
    return () => u("div", {
      class: n.value,
      style: t.value
    }, [
      u("iframe", {
        src: e.src,
        title: e.title,
        fetchpriority: e.fetchpriority,
        loading: e.loading,
        referrerpolicy: e.referrerpolicy,
        frameborder: "0",
        allowfullscreen: !0
      })
    ]);
  }
});
function Li(e) {
  if (e === !1)
    return 0;
  if (e === !0 || e === void 0)
    return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
tn(
  {
    name: "close-popup",
    beforeMount(e, { value: t }) {
      const n = {
        depth: Li(t),
        handler(a) {
          n.depth !== 0 && setTimeout(() => {
            const l = ad(e);
            l !== void 0 && ld(l, a, n.depth);
          });
        },
        handlerKey(a) {
          Yt(a, 13) === !0 && n.handler(a);
        }
      };
      e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
    },
    updated(e, { value: t, oldValue: n }) {
      t !== n && (e.__qclosepopup.depth = Li(t));
    },
    beforeUnmount(e) {
      const t = e.__qclosepopup;
      e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
    }
  }
);
var Sm = 0, $a = void 0;
function Fi(e, t) {
  $a === void 0 && ($a = document.createElement("div"), $a.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild($a));
  const n = e.getBoundingClientRect(), a = $a.getBoundingClientRect(), { marginLeft: l, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), c = parseInt(l, 10) + parseInt(r, 10), f = parseInt(o, 10) + parseInt(i, 10);
  return {
    left: n.left - a.left,
    top: n.top - a.top,
    width: n.right - n.left,
    height: n.bottom - n.top,
    widthM: n.right - n.left + (t === !0 ? 0 : c),
    heightM: n.bottom - n.top + (t === !0 ? 0 : f),
    marginH: t === !0 ? c : 0,
    marginV: t === !0 ? f : 0
  };
}
function ol(e) {
  return {
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
var zi = ["Top", "Right", "Bottom", "Left"], Ri = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], _m = /-block|-inline|block-|inline-/, wm = /(-block|-inline|block-|inline-).*:/;
function Pi(e, t) {
  const n = window.getComputedStyle(e), a = {};
  for (let l = 0; l < t.length; l++) {
    const r = t[l];
    if (n[r] === "")
      if (r === "cssText") {
        const o = n.length;
        let i = "";
        for (let c = 0; c < o; c++)
          _m.test(n[c]) !== !0 && (i += n[c] + ": " + n[n[c]] + "; ");
        a[r] = i;
      } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(r) !== -1) {
        const o = r.replace("border", "");
        let i = "";
        for (let c = 0; c < zi.length; c++) {
          const f = "border" + zi[c] + o;
          i += n[f] + " ";
        }
        a[r] = i;
      } else if (r === "borderRadius") {
        let o = "", i = "";
        for (let c = 0; c < Ri.length; c++) {
          const f = n[Ri[c]].split(" ");
          o += f[0] + " ", i += (f[1] === void 0 ? f[0] : f[1]) + " ";
        }
        a[r] = o + "/ " + i;
      } else
        a[r] = n[r];
    else
      r === "cssText" ? a[r] = n[r].split(";").filter((o) => wm.test(o) !== !0).join(";") : a[r] = n[r];
  }
  return a;
}
var Cm = ["absolute", "fixed", "relative", "sticky"];
function Ai(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: a, zIndex: l } = window.getComputedStyle(t), r = Number(l);
    r > n && (t === e || Cm.includes(a) === !0) && (n = r), t = t.parentNode;
  }
  return n;
}
function xm(e) {
  return {
    from: e.from,
    to: e.to !== void 0 ? e.to : e.from
  };
}
function km(e) {
  return typeof e == "number" ? e = {
    duration: e
  } : typeof e == "function" && (e = {
    onEnd: e
  }), {
    ...e,
    waitFor: e.waitFor === void 0 ? 0 : e.waitFor,
    duration: isNaN(e.duration) === !0 ? 300 : parseInt(e.duration, 10),
    easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out",
    delay: isNaN(e.delay) === !0 ? 0 : parseInt(e.delay, 10),
    fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none",
    resize: e.resize === !0,
    // account for UMD too where modifiers will be lowercased to work
    useCSS: e.useCSS === !0 || e.usecss === !0,
    // account for UMD too where modifiers will be lowercased to work
    hideFromClone: e.hideFromClone === !0 || e.hidefromclone === !0,
    // account for UMD too where modifiers will be lowercased to work
    keepToClone: e.keepToClone === !0 || e.keeptoclone === !0,
    tween: e.tween === !0,
    tweenFromOpacity: isNaN(e.tweenFromOpacity) === !0 ? 0.6 : parseFloat(e.tweenFromOpacity),
    tweenToOpacity: isNaN(e.tweenToOpacity) === !0 ? 0.5 : parseFloat(e.tweenToOpacity)
  };
}
function Ei(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Oi(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function qm(e) {
  let t = () => !1, n = !1, a = !0;
  const l = xm(e), r = km(e), o = Ei(l.from);
  if (Oi(o) !== !0)
    return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, c, f, d;
  const b = o.parentNode, g = o.nextElementSibling, v = Fi(o, r.resize), {
    width: m,
    height: S
  } = ol(b), {
    borderWidth: p,
    borderStyle: x,
    borderColor: C,
    borderRadius: y,
    backgroundColor: h,
    transform: _,
    position: L,
    cssText: F
  } = Pi(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), R = o.classList.toString(), z = o.style.cssText, B = o.cloneNode(!0), P = r.tween === !0 ? o.cloneNode(!0) : void 0;
  P !== void 0 && (P.className = P.classList.toString().split(" ").filter((q) => /^bg-/.test(q) === !1).join(" ")), r.hideFromClone === !0 && B.classList.add("q-morph--internal"), B.setAttribute("aria-hidden", "true"), B.style.transition = "none", B.style.animation = "none", B.style.pointerEvents = "none", b.insertBefore(B, g), o.qMorphCancel = () => {
    n = !0, B.remove(), P == null || P.remove(), r.hideFromClone === !0 && B.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const T = () => {
    const q = Ei(l.to);
    if (n === !0 || Oi(q) !== !0) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== q && typeof q.qMorphCancel == "function" && q.qMorphCancel(), r.keepToClone !== !0 && q.classList.add("q-morph--internal"), B.classList.add("q-morph--internal");
    const {
      width: w,
      height: A
    } = ol(b), {
      width: N,
      height: H
    } = ol(q.parentNode);
    r.hideFromClone !== !0 && B.classList.remove("q-morph--internal"), q.qMorphCancel = () => {
      n = !0, B.remove(), P == null || P.remove(), r.hideFromClone === !0 && B.classList.remove("q-morph--internal"), r.keepToClone !== !0 && q.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, q.qMorphCancel = void 0;
    };
    const K = () => {
      if (n === !0) {
        typeof q.qMorphCancel == "function" && q.qMorphCancel();
        return;
      }
      r.hideFromClone !== !0 && (B.classList.add("q-morph--internal"), B.innerHTML = "", B.style.left = 0, B.style.right = "unset", B.style.top = 0, B.style.bottom = "unset", B.style.transform = "none"), r.keepToClone !== !0 && q.classList.remove("q-morph--internal");
      const W = q.parentNode, {
        width: ue,
        height: I
      } = ol(W), k = q.cloneNode(r.keepToClone);
      k.setAttribute("aria-hidden", "true"), r.keepToClone !== !0 && (k.style.left = 0, k.style.right = "unset", k.style.top = 0, k.style.bottom = "unset", k.style.transform = "none", k.style.pointerEvents = "none"), k.classList.add("q-morph--internal");
      const U = q === o && b === W ? B : q.nextElementSibling;
      W.insertBefore(k, U);
      const {
        borderWidth: O,
        borderStyle: ne,
        borderColor: $,
        borderRadius: Q,
        backgroundColor: oe,
        transform: j,
        position: de,
        cssText: he
      } = Pi(q, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), Y = q.classList.toString(), fe = q.style.cssText;
      q.style.cssText = he, q.style.transform = "none", q.style.animation = "none", q.style.transition = "none", q.className = Y.split(" ").filter((re) => /^bg-/.test(re) === !1).join(" ");
      const be = Fi(q, r.resize), _e = v.left - be.left, Be = v.top - be.top, se = v.width / (be.width > 0 ? be.width : 10), Te = v.height / (be.height > 0 ? be.height : 100), Pe = m - w, Oe = S - A, le = ue - N, G = I - H, ce = Math.max(v.widthM, Pe), we = Math.max(v.heightM, Oe), Ve = Math.max(be.widthM, le), Ne = Math.max(be.heightM, G), Le = o === q && ["absolute", "fixed"].includes(de) === !1 && ["absolute", "fixed"].includes(L) === !1;
      let Fe = de === "fixed", We = W;
      for (; Fe !== !0 && We !== document; )
        Fe = window.getComputedStyle(We).position === "fixed", We = We.parentNode;
      if (r.hideFromClone !== !0 && (B.style.display = "block", B.style.flex = "0 0 auto", B.style.opacity = 0, B.style.minWidth = "unset", B.style.maxWidth = "unset", B.style.minHeight = "unset", B.style.maxHeight = "unset", B.classList.remove("q-morph--internal")), r.keepToClone !== !0 && (k.style.display = "block", k.style.flex = "0 0 auto", k.style.opacity = 0, k.style.minWidth = "unset", k.style.maxWidth = "unset", k.style.minHeight = "unset", k.style.maxHeight = "unset"), k.classList.remove("q-morph--internal"), typeof r.classes == "string" && (q.className += " " + r.classes), typeof r.style == "string")
        q.style.cssText += " " + r.style;
      else if (Lt(r.style) === !0)
        for (const re in r.style)
          q.style[re] = r.style[re];
      const Ge = Ai(B), J = Ai(q), ie = Fe === !0 ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      q.style.position = Fe === !0 ? "fixed" : "absolute", q.style.left = `${be.left - ie.scrollLeft}px`, q.style.right = "unset", q.style.top = `${be.top - ie.scrollTop}px`, q.style.margin = 0, r.resize === !0 && (q.style.minWidth = "unset", q.style.maxWidth = "unset", q.style.minHeight = "unset", q.style.maxHeight = "unset", q.style.overflow = "hidden", q.style.overflowX = "hidden", q.style.overflowY = "hidden"), document.body.appendChild(q), P !== void 0 && (P.style.cssText = F, P.style.transform = "none", P.style.animation = "none", P.style.transition = "none", P.style.position = q.style.position, P.style.left = `${v.left - ie.scrollLeft}px`, P.style.right = "unset", P.style.top = `${v.top - ie.scrollTop}px`, P.style.margin = 0, P.style.pointerEvents = "none", r.resize === !0 && (P.style.minWidth = "unset", P.style.maxWidth = "unset", P.style.minHeight = "unset", P.style.maxHeight = "unset", P.style.overflow = "hidden", P.style.overflowX = "hidden", P.style.overflowY = "hidden"), document.body.appendChild(P));
      const X = (re) => {
        o === q && a !== !0 ? (q.style.cssText = z, q.className = R) : (q.style.cssText = fe, q.className = Y), k.parentNode === W && W.insertBefore(q, k), B.remove(), k.remove(), P == null || P.remove(), t = () => !1, o.qMorphCancel = void 0, q.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(a === !0 ? "to" : "from", re === !0);
      };
      if (r.useCSS !== !0 && typeof q.animate == "function") {
        const re = r.resize === !0 ? {
          transform: `translate(${_e}px, ${Be}px)`,
          width: `${ce}px`,
          height: `${we}px`
        } : {
          transform: `translate(${_e}px, ${Be}px) scale(${se}, ${Te})`
        }, Se = r.resize === !0 ? {
          width: `${Ve}px`,
          height: `${Ne}px`
        } : {}, Re = r.resize === !0 ? {
          width: `${ce}px`,
          height: `${we}px`
        } : {}, qe = r.resize === !0 ? {
          transform: `translate(${-1 * _e}px, ${-1 * Be}px)`,
          width: `${Ve}px`,
          height: `${Ne}px`
        } : {
          transform: `translate(${-1 * _e}px, ${-1 * Be}px) scale(${1 / se}, ${1 / Te})`
        }, Ie = P !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: h }, nt = P !== void 0 ? { opacity: 1 } : { backgroundColor: oe };
        d = q.animate([
          {
            margin: 0,
            borderWidth: p,
            borderStyle: x,
            borderColor: C,
            borderRadius: y,
            zIndex: Ge,
            transformOrigin: "0 0",
            ...re,
            ...Ie
          },
          {
            margin: 0,
            borderWidth: O,
            borderStyle: ne,
            borderColor: $,
            borderRadius: Q,
            zIndex: J,
            transformOrigin: "0 0",
            transform: j,
            ...Se,
            ...nt
          }
        ], {
          duration: r.duration,
          easing: r.easing,
          fill: r.fill,
          delay: r.delay
        }), c = P === void 0 ? void 0 : P.animate([
          {
            opacity: r.tweenFromOpacity,
            margin: 0,
            borderWidth: p,
            borderStyle: x,
            borderColor: C,
            borderRadius: y,
            zIndex: Ge,
            transformOrigin: "0 0",
            transform: _,
            ...Re
          },
          {
            opacity: 0,
            margin: 0,
            borderWidth: O,
            borderStyle: ne,
            borderColor: $,
            borderRadius: Q,
            zIndex: J,
            transformOrigin: "0 0",
            ...qe
          }
        ], {
          duration: r.duration,
          easing: r.easing,
          fill: r.fill,
          delay: r.delay
        }), i = r.hideFromClone === !0 || Le === !0 ? void 0 : B.animate([
          {
            margin: `${Oe < 0 ? Oe / 2 : 0}px ${Pe < 0 ? Pe / 2 : 0}px`,
            width: `${ce + v.marginH}px`,
            height: `${we + v.marginV}px`
          },
          {
            margin: 0,
            width: 0,
            height: 0
          }
        ], {
          duration: r.duration,
          easing: r.easing,
          fill: r.fill,
          delay: r.delay
        }), f = r.keepToClone === !0 ? void 0 : k.animate([
          Le === !0 ? {
            margin: `${Oe < 0 ? Oe / 2 : 0}px ${Pe < 0 ? Pe / 2 : 0}px`,
            width: `${ce + v.marginH}px`,
            height: `${we + v.marginV}px`
          } : {
            margin: 0,
            width: 0,
            height: 0
          },
          {
            margin: `${G < 0 ? G / 2 : 0}px ${le < 0 ? le / 2 : 0}px`,
            width: `${Ve + be.marginH}px`,
            height: `${Ne + be.marginV}px`
          }
        ], {
          duration: r.duration,
          easing: r.easing,
          fill: r.fill,
          delay: r.delay
        });
        const vt = ($t) => {
          i == null || i.cancel(), c == null || c.cancel(), f == null || f.cancel(), d.cancel(), d.removeEventListener("finish", vt), d.removeEventListener("cancel", vt), X($t), i = void 0, c = void 0, f = void 0, d = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = !0, vt();
        }, q.qMorphCancel = () => {
          q.qMorphCancel = void 0, n = !0, vt();
        }, d.addEventListener("finish", vt), d.addEventListener("cancel", vt), t = ($t) => n === !0 || d === void 0 ? !1 : $t === !0 ? (vt(!0), !0) : (a = a !== !0, i == null || i.reverse(), c == null || c.reverse(), f == null || f.reverse(), d.reverse(), !0);
      } else {
        const re = `q-morph-anim-${++Sm}`, Se = document.createElement("style"), Re = r.resize === !0 ? `
            transform: translate(${_e}px, ${Be}px);
            width: ${ce}px;
            height: ${we}px;
          ` : `transform: translate(${_e}px, ${Be}px) scale(${se}, ${Te});`, qe = r.resize === !0 ? `
            width: ${Ve}px;
            height: ${Ne}px;
          ` : "", Ie = r.resize === !0 ? `
            width: ${ce}px;
            height: ${we}px;
          ` : "", nt = r.resize === !0 ? `
            transform: translate(${-1 * _e}px, ${-1 * Be}px);
            width: ${Ve}px;
            height: ${Ne}px;
          ` : `transform: translate(${-1 * _e}px, ${-1 * Be}px) scale(${1 / se}, ${1 / Te});`, vt = P !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${h};`, $t = P !== void 0 ? "opacity: 1;" : `background-color: ${oe};`, bn = P === void 0 ? "" : `
            @keyframes ${re}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${p};
                border-style: ${x};
                border-color: ${C};
                border-radius: ${y};
                z-index: ${Ge};
                transform-origin: 0 0;
                transform: ${_};
                ${Ie}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${O};
                border-style: ${ne};
                border-color: ${$};
                border-radius: ${Q};
                z-index: ${J};
                transform-origin: 0 0;
                ${nt}
              }
            }
          `, Vt = r.hideFromClone === !0 || Le === !0 ? "" : `
            @keyframes ${re}-from {
              0% {
                margin: ${Oe < 0 ? Oe / 2 : 0}px ${Pe < 0 ? Pe / 2 : 0}px;
                width: ${ce + v.marginH}px;
                height: ${we + v.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, rn = Le === !0 ? `
            margin: ${Oe < 0 ? Oe / 2 : 0}px ${Pe < 0 ? Pe / 2 : 0}px;
            width: ${ce + v.marginH}px;
            height: ${we + v.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, Z = r.keepToClone === !0 ? "" : `
            @keyframes ${re}-to {
              0% {
                ${rn}
              }

              100% {
                margin: ${G < 0 ? G / 2 : 0}px ${le < 0 ? le / 2 : 0}px;
                width: ${Ve + be.marginH}px;
                height: ${Ne + be.marginV}px;
              }
            }
          `;
        Se.innerHTML = `
          @keyframes ${re} {
            0% {
              margin: 0;
              border-width: ${p};
              border-style: ${x};
              border-color: ${C};
              border-radius: ${y};
              background-color: ${h};
              z-index: ${Ge};
              transform-origin: 0 0;
              ${Re}
              ${vt}
            }

            100% {
              margin: 0;
              border-width: ${O};
              border-style: ${ne};
              border-color: ${$};
              border-radius: ${Q};
              background-color: ${oe};
              z-index: ${J};
              transform-origin: 0 0;
              transform: ${j};
              ${qe}
              ${$t}
            }
          }

          ${Vt}

          ${bn}

          ${Z}
        `, document.head.appendChild(Se);
        let me = "normal";
        B.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${me} ${r.fill} ${re}-from`, P !== void 0 && (P.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${me} ${r.fill} ${re}-from-tween`), k.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${me} ${r.fill} ${re}-to`, q.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${me} ${r.fill} ${re}`;
        const $e = (Me) => {
          Me === Object(Me) && Me.animationName !== re || (q.removeEventListener("animationend", $e), q.removeEventListener("animationcancel", $e), X(), Se.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = !0, $e();
        }, q.qMorphCancel = () => {
          q.qMorphCancel = void 0, n = !0, $e();
        }, q.addEventListener("animationend", $e), q.addEventListener("animationcancel", $e), t = (Me) => n === !0 || !q || !B || !k ? !1 : Me === !0 ? ($e(), !0) : (a = a !== !0, me = me === "normal" ? "reverse" : "normal", B.style.animationDirection = me, P.style.animationDirection = me, k.style.animationDirection = me, q.style.animationDirection = me, !0);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((ue) => setTimeout(ue, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((ue) => {
      const I = () => {
        k !== null && (clearTimeout(k), k = null), q && (q.removeEventListener("transitionend", I), q.removeEventListener("transitioncancel", I)), ue();
      };
      let k = setTimeout(I, 400);
      q.addEventListener("transitionend", I), q.addEventListener("transitioncancel", I);
    }) : r.waitFor).then(K).catch(() => {
      typeof q.qMorphCancel == "function" && q.qMorphCancel();
    }) : K();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(T), (q) => t(q);
}
var Ll = {}, Tm = [
  "duration",
  "delay",
  "easing",
  "fill",
  "classes",
  "style",
  "duration",
  "resize",
  "useCSS",
  "hideFromClone",
  "keepToClone",
  "tween",
  "tweenFromOpacity",
  "tweenToOpacity",
  "waitFor",
  "onEnd"
], Mm = [
  "resize",
  "useCSS",
  "hideFromClone",
  "keepToClone",
  "tween"
];
function ca(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Hs(e) {
  if (e.animating === !0 || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = !0, t.animating = !0, n.animating = !0, ca(t, "remove"), ca(n, "remove");
  const a = qm({
    from: t.el,
    to: n.el,
    onToggle() {
      ca(t, "add"), ca(n, "remove");
    },
    ...n.opts,
    onEnd(l, r) {
      var o, i;
      (i = (o = n.opts).onEnd) == null || i.call(o, l, r), r !== !0 && (t.animating = !1, n.animating = !1, e.animating = !1, e.cancel = void 0, e.queue.shift(), Hs(e));
    }
  });
  e.cancel = () => {
    a(!0), e.cancel = void 0;
  };
}
function js(e, t) {
  const n = t.opts;
  Mm.forEach((a) => {
    n[a] = e[a] === !0;
  });
}
function $m(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, {
    duration: isNaN(n[2]) === !0 ? 300 : parseFloat(n[2]),
    waitFor: n[3]
  });
}
function Bm(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  Tm.forEach((a) => {
    e[a] !== void 0 && (n[a] = e[a]);
  });
}
function Lm(e, t) {
  if (t.name === e) {
    const n = Ll[t.group];
    n === void 0 ? (Ll[t.group] = {
      name: t.group,
      model: e,
      queue: [t],
      animating: !1
    }, ca(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === !1 && n.queue.length === 2 && Hs(n));
    return;
  }
  t.animating === !1 && ca(t, "add");
}
function Vi(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, Bm(t, e), js(t, e)) : n = "" + t, n !== e.model ? (e.model = n, Lm(n, e)) : e.animating === !1 && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
tn(
  {
    name: "morph",
    mounted(e, t) {
      const n = {
        el: e,
        animating: !1,
        opts: {}
      };
      js(t.modifiers, n), $m(t.arg, n), Vi(n, t.value), e.__qmorph = n;
    },
    updated(e, t) {
      Vi(e.__qmorph, t.value);
    },
    beforeUnmount(e) {
      var a;
      const t = e.__qmorph, n = Ll[t.group];
      n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((r) => r !== t), n.queue.length === 0 && ((a = n.cancel) == null || a.call(n), delete Ll[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
    }
  }
);
var Fm = {
  childList: !0,
  subtree: !0,
  attributes: !0,
  characterData: !0,
  attributeOldValue: !0,
  characterDataOldValue: !0
};
function Di(e, t, n) {
  var a;
  t.handler = n, (a = t.observer) == null || a.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === !1 || t.once === !0) && Qs(e);
  }), t.observer.observe(e, t.opts);
}
function Qs(e) {
  var n;
  const t = e.__qmutation;
  t !== void 0 && ((n = t.observer) == null || n.disconnect(), delete e.__qmutation);
}
tn(
  {
    name: "mutation",
    mounted(e, { modifiers: { once: t, ...n }, value: a }) {
      const l = {
        once: t,
        opts: Object.keys(n).length === 0 ? Fm : n
      };
      Di(e, l, a), e.__qmutation = l;
    },
    updated(e, { oldValue: t, value: n }) {
      const a = e.__qmutation;
      a !== void 0 && t !== n && Di(e, a, n);
    },
    beforeUnmount: Qs
  }
);
var { passive: Fl } = lt;
function Ni(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Fl);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Fl), e.scroll());
}
tn(
  {
    name: "scroll-fire",
    mounted(e, t) {
      const n = {
        scrollTarget: ln(e),
        scroll: Sa(() => {
          let a, l;
          n.scrollTarget === window ? (l = e.getBoundingClientRect().bottom, a = window.innerHeight) : (l = pl(e).top + ya(e), a = pl(n.scrollTarget).top + ya(n.scrollTarget)), l > 0 && l < a && (n.scrollTarget.removeEventListener("scroll", n.scroll, Fl), n.handler(e));
        }, 25)
      };
      Ni(n, t), e.__qscrollfire = n;
    },
    updated(e, t) {
      t.value !== t.oldValue && Ni(e.__qscrollfire, t);
    },
    beforeUnmount(e) {
      const t = e.__qscrollfire;
      t.scrollTarget.removeEventListener("scroll", t.scroll, Fl), t.scroll.cancel(), delete e.__qscrollfire;
    }
  }
);
function Ii(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, lt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, lt.passive);
}
tn(
  {
    name: "scroll",
    mounted(e, t) {
      const n = {
        scrollTarget: ln(e),
        scroll() {
          n.handler(
            qn(n.scrollTarget),
            Vl(n.scrollTarget)
          );
        }
      };
      Ii(n, t), e.__qscroll = n;
    },
    updated(e, t) {
      e.__qscroll !== void 0 && t.oldValue !== t.value && Ii(e.__qscroll, t);
    },
    beforeUnmount(e) {
      const t = e.__qscroll;
      t.scrollTarget.removeEventListener("scroll", t.scroll, lt.passive), delete e.__qscroll;
    }
  }
);
tn(
  {
    name: "touch-hold",
    beforeMount(e, t) {
      const { modifiers: n } = t;
      if (n.mouse !== !0 && De.has.touch !== !0) return;
      const a = {
        handler: t.value,
        noop: _t,
        mouseStart(r) {
          typeof a.handler == "function" && Pl(r) === !0 && (mt(a, "temp", [
            [document, "mousemove", "move", "passiveCapture"],
            [document, "click", "end", "notPassiveCapture"]
          ]), a.start(r, !0));
        },
        touchStart(r) {
          if (r.target !== void 0 && typeof a.handler == "function") {
            const o = r.target;
            mt(a, "temp", [
              [o, "touchmove", "move", "passiveCapture"],
              [o, "touchcancel", "end", "notPassiveCapture"],
              [o, "touchend", "end", "notPassiveCapture"]
            ]), a.start(r);
          }
        },
        start(r, o) {
          a.origin = Pt(r);
          const i = Date.now();
          De.is.mobile === !0 && (document.body.classList.add("non-selectable"), Jt(), a.styleCleanup = (c) => {
            a.styleCleanup = void 0;
            const f = () => {
              document.body.classList.remove("non-selectable");
            };
            c === !0 ? (Jt(), setTimeout(f, 10)) : f();
          }), a.triggered = !1, a.sensitivity = o === !0 ? a.mouseSensitivity : a.touchSensitivity, a.timer = setTimeout(() => {
            a.timer = void 0, Jt(), a.triggered = !0, a.handler({
              evt: r,
              touch: o !== !0,
              mouse: o === !0,
              position: a.origin,
              duration: Date.now() - i
            });
          }, a.duration);
        },
        move(r) {
          const { top: o, left: i } = Pt(r);
          a.timer !== void 0 && (Math.abs(i - a.origin.left) >= a.sensitivity || Math.abs(o - a.origin.top) >= a.sensitivity) && (clearTimeout(a.timer), a.timer = void 0);
        },
        end(r) {
          var o;
          Ft(a, "temp"), (o = a.styleCleanup) == null || o.call(a, a.triggered), a.triggered === !0 ? r !== void 0 && Ae(r) : a.timer !== void 0 && (clearTimeout(a.timer), a.timer = void 0);
        }
      }, l = [600, 5, 7];
      if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((r, o) => {
        const i = parseInt(r, 10);
        i && (l[o] = i);
      }), [a.duration, a.touchSensitivity, a.mouseSensitivity] = l, e.__qtouchhold = a, n.mouse === !0) {
        const r = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
        mt(a, "main", [
          [e, "mousedown", "mouseStart", `passive${r}`]
        ]);
      }
      De.has.touch === !0 && mt(a, "main", [
        [e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`],
        [e, "touchend", "noop", "notPassiveCapture"]
      ]);
    },
    updated(e, t) {
      const n = e.__qtouchhold;
      n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
    },
    beforeUnmount(e) {
      var n;
      const t = e.__qtouchhold;
      t !== void 0 && (Ft(t, "main"), Ft(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (n = t.styleCleanup) == null || n.call(t), delete e.__qtouchhold);
    }
  }
);
var Ks = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
}, zm = new RegExp(`^([\\d+]+|${Object.keys(Ks).join("|")})$`, "i");
function Rm(e, t) {
  const { top: n, left: a } = Pt(e);
  return Math.abs(a - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
tn(
  {
    name: "touch-repeat",
    beforeMount(e, { modifiers: t, value: n, arg: a }) {
      const l = Object.keys(t).reduce((c, f) => {
        if (zm.test(f) === !0) {
          const d = isNaN(parseInt(f, 10)) ? Ks[f.toLowerCase()] : parseInt(f, 10);
          d >= 0 && c.push(d);
        }
        return c;
      }, []);
      if (t.mouse !== !0 && De.has.touch !== !0 && l.length === 0) return;
      const r = typeof a == "string" && a.length !== 0 ? a.split(":").map((c) => parseInt(c, 10)) : [0, 600, 300], o = r.length - 1, i = {
        keyboard: l,
        handler: n,
        noop: _t,
        mouseStart(c) {
          i.event === void 0 && typeof i.handler == "function" && Pl(c) === !0 && (mt(i, "temp", [
            [document, "mousemove", "move", "passiveCapture"],
            [document, "click", "end", "notPassiveCapture"]
          ]), i.start(c, !0));
        },
        keyboardStart(c) {
          if (typeof i.handler == "function" && Yt(c, l) === !0) {
            if ((r[0] === 0 || i.event !== void 0) && (Ae(c), e.focus(), i.event !== void 0))
              return;
            mt(i, "temp", [
              [document, "keyup", "end", "notPassiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]), i.start(c, !1, !0);
          }
        },
        touchStart(c) {
          if (c.target !== void 0 && typeof i.handler == "function") {
            const f = c.target;
            mt(i, "temp", [
              [f, "touchmove", "move", "passiveCapture"],
              [f, "touchcancel", "end", "notPassiveCapture"],
              [f, "touchend", "end", "notPassiveCapture"]
            ]), i.start(c);
          }
        },
        start(c, f, d) {
          d !== !0 && (i.origin = Pt(c));
          function b(v) {
            i.styleCleanup = void 0, document.documentElement.style.cursor = "";
            const m = () => {
              document.body.classList.remove("non-selectable");
            };
            v === !0 ? (Jt(), setTimeout(m, 10)) : m();
          }
          De.is.mobile === !0 && (document.body.classList.add("non-selectable"), Jt(), i.styleCleanup = b), i.event = {
            touch: f !== !0 && d !== !0,
            mouse: f === !0,
            keyboard: d === !0,
            startTime: Date.now(),
            repeatCount: 0
          };
          const g = () => {
            if (i.timer = void 0, i.event === void 0) return;
            i.event.repeatCount === 0 && (i.event.evt = c, d === !0 ? i.event.keyCode = c.keyCode : i.event.position = Pt(c), De.is.mobile !== !0 && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Jt(), i.styleCleanup = b)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
            const v = o < i.event.repeatCount ? o : i.event.repeatCount;
            i.timer = setTimeout(g, r[v]);
          };
          r[0] === 0 ? g() : i.timer = setTimeout(g, r[0]);
        },
        move(c) {
          i.event !== void 0 && i.timer !== void 0 && Rm(c, i.origin) === !0 && (clearTimeout(i.timer), i.timer = void 0);
        },
        end(c) {
          var f;
          i.event !== void 0 && ((f = i.styleCleanup) == null || f.call(i, !0), c !== void 0 && i.event.repeatCount > 0 && Ae(c), Ft(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
        }
      };
      if (e.__qtouchrepeat = i, t.mouse === !0) {
        const c = t.mouseCapture === !0 || t.mousecapture === !0 ? "Capture" : "";
        mt(i, "main", [
          [e, "mousedown", "mouseStart", `passive${c}`]
        ]);
      }
      if (De.has.touch === !0 && mt(i, "main", [
        [e, "touchstart", "touchStart", `passive${t.capture === !0 ? "Capture" : ""}`],
        [e, "touchend", "noop", "passiveCapture"]
      ]), l.length !== 0) {
        const c = t.keyCapture === !0 || t.keycapture === !0 ? "Capture" : "";
        mt(i, "main", [
          [e, "keydown", "keyboardStart", `notPassive${c}`]
        ]);
      }
    },
    updated(e, { oldValue: t, value: n }) {
      const a = e.__qtouchrepeat;
      a !== void 0 && t !== n && (typeof n != "function" && a.end(), a.handler = n);
    },
    beforeUnmount(e) {
      var n;
      const t = e.__qtouchrepeat;
      t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Ft(t, "main"), Ft(t, "temp"), (n = t.styleCleanup) == null || n.call(t), delete e.__qtouchrepeat);
    }
  }
);
function Pm(e, t = document.body) {
  if (!(t instanceof Element))
    throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var il;
function Am() {
  return De.is.winphone ? "msapplication-navbutton-color" : "theme-color";
}
function Em(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t)
    if (t[n].name === e)
      return t[n];
}
function Om(e) {
  il === void 0 && (il = Am());
  let t = Em(il);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", il)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
De.is.mobile === !0 && (De.is.nativeMobile === !0 || De.is.winphone === !0 || De.is.safari === !0 || De.is.webkit === !0 || De.is.vivaldi);
var Ba = {};
function Vm(e) {
  Object.assign(Bt, {
    request: e,
    exit: e,
    toggle: e
  });
}
function Us() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function Ys() {
  const e = Bt.activeEl = Bt.isActive === !1 ? null : Us();
  nd(
    e === null || e === document.documentElement ? document.body : e
  );
}
function Dm() {
  Bt.isActive = Bt.isActive === !1, Ys();
}
function Hi(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Bt = Mn({
  isActive: !1,
  activeEl: null
}, {
  isCapable: !1,
  install({ $q: e }) {
    e.fullscreen = this;
  }
});
Ba.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen"
].find((e) => document.documentElement[e] !== void 0), Bt.isCapable = Ba.request !== void 0, Bt.isCapable === !1 ? Vm(() => Promise.reject("Not capable")) : (Object.assign(Bt, {
  request(e) {
    const t = e || document.documentElement, { activeEl: n } = Bt;
    return t === n ? Promise.resolve() : (n !== null && t.contains(n) === !0 ? Bt.exit() : Promise.resolve()).finally(() => Hi(t, Ba.request));
  },
  exit() {
    return Bt.isActive === !0 ? Hi(document, Ba.exit) : Promise.resolve();
  },
  toggle(e) {
    return Bt.isActive === !0 ? Bt.exit() : Bt.request(e);
  }
}), Ba.exit = [
  "exitFullscreen",
  "msExitFullscreen",
  "mozCancelFullScreen",
  "webkitExitFullscreen"
].find((e) => document[e]), Bt.isActive = !!Us(), Bt.isActive === !0 && Ys(), [
  "onfullscreenchange",
  "onmsfullscreenchange",
  "onwebkitfullscreenchange"
].forEach((e) => {
  document[e] = Dm;
}));
var Nm = Mn({
  appVisible: !0
}, {
  install({ $q: e }) {
    xt(e, "appVisible", () => this.appVisible);
  }
});
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Nm.appVisible = !document[e];
    };
    document.addEventListener(t, n, !1);
  }
}
te({
  name: "BottomSheetComponent",
  props: {
    ...Ue,
    title: String,
    message: String,
    actions: Array,
    grid: Boolean,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  },
  emits: ["ok", "hide"],
  setup(e, { emit: t }) {
    const { proxy: n } = ve(), a = Ye(e, n.$q), l = E(null);
    function r() {
      l.value.show();
    }
    function o() {
      l.value.hide();
    }
    function i(v) {
      t("ok", v), o();
    }
    function c() {
      t("hide");
    }
    function f() {
      return e.actions.map((v) => {
        const m = v.avatar || v.img;
        return v.label === void 0 ? u(Qn, {
          class: "col-all",
          dark: a.value
        }) : u("div", {
          class: [
            "q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position",
            v.class
          ],
          style: v.style,
          tabindex: 0,
          role: "listitem",
          onClick() {
            i(v);
          },
          onKeyup(S) {
            S.keyCode === 13 && i(v);
          }
        }, [
          u("div", { class: "q-focus-helper" }),
          v.icon ? u(Xe, { name: v.icon, color: v.color }) : m ? u("img", {
            class: v.avatar ? "q-bottom-sheet__avatar" : "",
            src: m
          }) : u("div", { class: "q-bottom-sheet__empty-icon" }),
          u("div", v.label)
        ]);
      });
    }
    function d() {
      return e.actions.map((v) => {
        const m = v.avatar || v.img;
        return v.label === void 0 ? u(Qn, { spaced: !0, dark: a.value }) : u(Hl, {
          class: ["q-bottom-sheet__item", v.classes],
          style: v.style,
          tabindex: 0,
          clickable: !0,
          dark: a.value,
          onClick() {
            i(v);
          }
        }, () => [
          u(
            Tn,
            { avatar: !0 },
            () => v.icon ? u(Xe, { name: v.icon, color: v.color }) : m ? u("img", {
              class: v.avatar ? "q-bottom-sheet__avatar" : "",
              src: m
            }) : null
          ),
          u(Tn, () => v.label)
        ]);
      });
    }
    function b() {
      const v = [];
      return e.title && v.push(
        u(An, {
          class: "q-dialog__title"
        }, () => e.title)
      ), e.message && v.push(
        u(An, {
          class: "q-dialog__message"
        }, () => e.message)
      ), v.push(
        e.grid === !0 ? u("div", {
          class: "row items-stretch justify-start",
          role: "list"
        }, f()) : u("div", {
          role: "list"
        }, d())
      ), v;
    }
    function g() {
      return [
        u(Au, {
          class: [
            `q-bottom-sheet q-bottom-sheet--${e.grid === !0 ? "grid" : "list"}` + (a.value === !0 ? " q-bottom-sheet--dark q-dark" : ""),
            e.cardClass
          ],
          style: e.cardStyle
        }, b)
      ];
    }
    return Object.assign(n, { show: r, hide: o }), () => u(Il, {
      ref: l,
      position: "bottom",
      onHide: c
    }, g);
  }
});
function Ws(e) {
  return encodeURIComponent(e);
}
function Xs(e) {
  return decodeURIComponent(e);
}
function Im(e) {
  return Ws(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Hm(e) {
  if (e === "")
    return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = Xs(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === !0) && (e = t);
  } catch {
  }
  return e;
}
function Gs(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function jm(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), a = e.match(/(\d+)h/), l = e.match(/(\d+)m/), r = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), a && (t += a[1] * 36e5), l && (t += l[1] * 6e4), r && (t += r[1] * 1e3), t === 0 ? e : Gs(t);
}
function Zs(e, t, n = {}, a) {
  let l, r;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? l = n.expires.toUTCString() : typeof n.expires == "string" ? l = jm(n.expires) : (r = parseFloat(n.expires), l = isNaN(r) === !1 ? Gs(r * 864e5) : n.expires));
  const o = `${Ws(e)}=${Im(t)}`, i = [
    o,
    l !== void 0 ? "; Expires=" + l : "",
    // use expires attribute, max-age is not supported by IE
    n.path ? "; Path=" + n.path : "",
    n.domain ? "; Domain=" + n.domain : "",
    n.sameSite ? "; SameSite=" + n.sameSite : "",
    n.httpOnly ? "; HttpOnly" : "",
    n.secure ? "; Secure" : "",
    n.other ? "; " + n.other : ""
  ].join("");
  if (a) {
    a.req.qCookies ? a.req.qCookies.push(i) : a.req.qCookies = [i], a.res.setHeader("Set-Cookie", a.req.qCookies);
    let c = a.req.headers.cookie || "";
    if (l !== void 0 && r < 0) {
      const f = zl(e, a);
      f !== void 0 && (c = c.replace(`${e}=${f}; `, "").replace(`; ${e}=${f}`, "").replace(`${e}=${f}`, ""));
    } else
      c = c ? `${o}; ${c}` : i;
    a.req.headers.cookie = c;
  } else
    document.cookie = i;
}
function zl(e, t) {
  const n = t ? t.req.headers : document, a = n.cookie ? n.cookie.split("; ") : [], l = a.length;
  let r = e ? null : {}, o = 0, i, c, f;
  for (; o < l; o++)
    if (i = a[o].split("="), c = Xs(i.shift()), f = i.join("="), !e)
      r[c] = f;
    else if (e === c) {
      r = Hm(f);
      break;
    }
  return r;
}
function Qm(e, t, n) {
  Zs(
    e,
    "",
    { expires: -1, ...t },
    n
  );
}
function Km(e, t) {
  return zl(e, t) !== null;
}
function Js(e) {
  return {
    get: (t) => zl(t, e),
    set: (t, n, a) => Zs(t, n, a, e),
    has: (t) => Km(t, e),
    remove: (t, n) => Qm(t, n, e),
    getAll: () => zl(null, e)
  };
}
var ec = {
  install({ $q: e, ssrContext: t }) {
    e.cookies = this;
  }
};
__QUASAR_SSR__ && (ec.parseSSR = (e) => {
  if (e !== void 0)
    return Js(e);
});
Object.assign(ec, Js());
te({
  name: "DialogPluginComponent",
  props: {
    ...Ue,
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    progress: [Boolean, Object],
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: !0
    },
    cancel: [String, Object, Boolean],
    focus: {
      type: String,
      default: "ok",
      validator: (e) => ["ok", "cancel", "none"].includes(e)
    },
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  },
  emits: ["ok", "hide"],
  setup(e, { emit: t }) {
    const { proxy: n } = ve(), { $q: a } = n, l = Ye(e, a), r = E(null), o = E(
      e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0
    ), i = s(
      () => "q-dialog-plugin" + (l.value === !0 ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
    ), c = s(
      () => e.color || (l.value === !0 ? "amber" : "primary")
    ), f = s(() => e.progress === !1 ? null : Lt(e.progress) === !0 ? {
      component: e.progress.spinner || en,
      props: { color: e.progress.color || c.value }
    } : {
      component: en,
      props: { color: c.value }
    }), d = s(
      () => e.prompt !== void 0 || e.options !== void 0
    ), b = s(() => {
      if (d.value !== !0)
        return {};
      const { model: w, isValid: A, items: N, ...H } = e.prompt !== void 0 ? e.prompt : e.options;
      return H;
    }), g = s(() => Lt(e.ok) === !0 || e.ok === !0 ? a.lang.label.ok : e.ok), v = s(() => Lt(e.cancel) === !0 || e.cancel === !0 ? a.lang.label.cancel : e.cancel), m = s(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== !0 : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== !0 : !1), S = s(() => ({
      color: c.value,
      label: g.value,
      ripple: !1,
      disable: m.value,
      ...Lt(e.ok) === !0 ? e.ok : { flat: !0 },
      "data-autofocus": e.focus === "ok" && d.value !== !0 || void 0,
      onClick: y
    })), p = s(() => ({
      color: c.value,
      label: v.value,
      ripple: !1,
      ...Lt(e.cancel) === !0 ? e.cancel : { flat: !0 },
      "data-autofocus": e.focus === "cancel" && d.value !== !0 || void 0,
      onClick: h
    }));
    ae(() => e.prompt && e.prompt.model, L), ae(() => e.options && e.options.model, L);
    function x() {
      r.value.show();
    }
    function C() {
      r.value.hide();
    }
    function y() {
      t("ok", cn(o.value)), C();
    }
    function h() {
      C();
    }
    function _() {
      t("hide");
    }
    function L(w) {
      o.value = w;
    }
    function F(w) {
      m.value !== !0 && e.prompt.type !== "textarea" && Yt(w, 13) === !0 && y();
    }
    function R(w, A) {
      return e.html === !0 ? u(An, {
        class: w,
        innerHTML: A
      }) : u(An, { class: w }, () => A);
    }
    function z() {
      return [
        u(Ms, {
          color: c.value,
          dense: !0,
          autofocus: !0,
          dark: l.value,
          ...b.value,
          modelValue: o.value,
          "onUpdate:modelValue": L,
          onKeyup: F
        })
      ];
    }
    function B() {
      return [
        u(rv, {
          color: c.value,
          options: e.options.items,
          dark: l.value,
          ...b.value,
          modelValue: o.value,
          "onUpdate:modelValue": L
        })
      ];
    }
    function P() {
      const w = [];
      return e.cancel && w.push(
        u(et, p.value)
      ), e.ok && w.push(
        u(et, S.value)
      ), u(Sd, {
        class: e.stackButtons === !0 ? "items-end" : "",
        vertical: e.stackButtons,
        align: "right"
      }, () => w);
    }
    function T() {
      const w = [];
      return e.title && w.push(
        R("q-dialog__title", e.title)
      ), e.progress !== !1 && w.push(
        u(
          An,
          { class: "q-dialog__progress" },
          () => u(f.value.component, f.value.props)
        )
      ), e.message && w.push(
        R("q-dialog__message", e.message)
      ), e.prompt !== void 0 ? w.push(
        u(
          An,
          { class: "scroll q-dialog-plugin__form" },
          z
        )
      ) : e.options !== void 0 && w.push(
        u(Qn, { dark: l.value }),
        u(
          An,
          { class: "scroll q-dialog-plugin__form" },
          B
        ),
        u(Qn, { dark: l.value })
      ), (e.ok || e.cancel) && w.push(P()), w;
    }
    function q() {
      return [
        u(Au, {
          class: [
            i.value,
            e.cardClass
          ],
          style: e.cardStyle,
          dark: l.value
        }, T)
      ];
    }
    return Object.assign(n, { show: x, hide: C }), () => u(Il, {
      ref: r,
      onHide: _
    }, q);
  }
});
var oa, _r, ji = 0, zn = null, qt = {}, Vn = {}, tc = {
  group: "__default_quasar_group__",
  delay: 0,
  message: !1,
  html: !1,
  spinnerSize: 80,
  spinnerColor: "",
  messageColor: "",
  backgroundColor: "",
  boxClass: "",
  spinner: en,
  customClass: ""
}, nc = { ...tc };
function Um(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Vn[e.group] !== void 0)
    return Object.assign(Vn[e.group], e);
  const t = Lt(e) === !0 && e.ignoreDefaults === !0 ? { ...tc, ...e } : { ...nc, ...e };
  return Vn[t.group] = t, t;
}
var nn = Mn({
  isActive: !1
}, {
  show(e) {
    qt = Um(e);
    const { group: t } = qt;
    return nn.isActive = !0, oa !== void 0 ? (qt.uid = ji, _r.$forceUpdate()) : (qt.uid = ++ji, zn !== null && clearTimeout(zn), zn = setTimeout(() => {
      zn = null;
      const n = Xr("q-loading");
      oa = su({
        name: "QLoading",
        setup() {
          ut(() => {
            Rr(!0);
          });
          function a() {
            nn.isActive !== !0 && oa !== void 0 && (Rr(!1), oa.unmount(n), qu(n), oa = void 0, _r = void 0);
          }
          function l() {
            if (nn.isActive !== !0)
              return null;
            const r = [
              u(qt.spinner, {
                class: "q-loading__spinner",
                color: qt.spinnerColor,
                size: qt.spinnerSize
              })
            ];
            return qt.message && r.push(
              u("div", {
                class: "q-loading__message" + (qt.messageColor ? ` text-${qt.messageColor}` : ""),
                [qt.html === !0 ? "innerHTML" : "textContent"]: qt.message
              })
            ), u("div", {
              class: "q-loading fullscreen flex flex-center z-max " + qt.customClass.trim(),
              key: qt.uid
            }, [
              u("div", {
                class: "q-loading__backdrop" + (qt.backgroundColor ? ` bg-${qt.backgroundColor}` : "")
              }),
              u("div", {
                class: "q-loading__box column items-center " + qt.boxClass
              }, r)
            ]);
          }
          return () => u(Ct, {
            name: "q-transition--fade",
            appear: !0,
            onAfterLeave: a
          }, l);
        }
      }, nn.__parentApp), _r = oa.mount(n);
    }, qt.delay)), (n) => {
      if (n === void 0 || Object(n) !== n) {
        nn.hide(t);
        return;
      }
      nn.show({ ...n, group: t });
    };
  },
  hide(e) {
    if (nn.isActive === !0) {
      if (e === void 0)
        Vn = {};
      else {
        if (Vn[e] === void 0)
          return;
        {
          delete Vn[e];
          const t = Object.keys(Vn);
          if (t.length !== 0) {
            const n = t[t.length - 1];
            nn.show({ group: n });
            return;
          }
        }
      }
      zn !== null && (clearTimeout(zn), zn = null), nn.isActive = !1;
    }
  },
  setDefaults(e) {
    Lt(e) === !0 && Object.assign(nc, e);
  },
  install({ $q: e, parentApp: t }) {
    e.loading = this, nn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
  }
}), ul = E(null), Qi = Mn({
  isActive: !1
}, {
  start: _t,
  stop: _t,
  increment: _t,
  setDefaults: _t,
  install({ $q: e, parentApp: t }) {
    if (e.loadingBar = this, this.__installed === !0) {
      e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
      return;
    }
    const n = E(
      e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {}
    );
    function a() {
      Qi.isActive = !0;
    }
    function l() {
      Qi.isActive = !1;
    }
    const r = Xr("q-loading-bar");
    su({
      name: "LoadingBar",
      // hide App from Vue devtools
      devtools: { hide: !0 },
      setup: () => () => u(zc, { ...n.value, onStart: a, onStop: l, ref: ul })
    }, t).mount(r), Object.assign(this, {
      start(o) {
        ul.value.start(o);
      },
      stop() {
        ul.value.stop();
      },
      increment() {
        ul.value.increment.apply(null, arguments);
      },
      setDefaults(o) {
        Lt(o) === !0 && Object.assign(n.value, o);
      }
    });
  }
});
function Ym(e) {
  return Oa(e) === !0 ? "__q_date|" + e.getTime() : qc(e) === !0 ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Wm(e) {
  if (e.length < 9)
    return e;
  const n = e.substring(0, 8), a = e.substring(9);
  switch (n) {
    case "__q_date":
      const l = Number(a);
      return new Date(Number.isNaN(l) === !0 ? a : l);
    case "__q_expr":
      return new RegExp(a);
    case "__q_numb":
      return Number(a);
    case "__q_bool":
      return a === "1";
    case "__q_strn":
      return "" + a;
    case "__q_objt":
      return JSON.parse(a);
    default:
      return e;
  }
}
function ac() {
  const e = () => null;
  return {
    has: () => !1,
    // alias for hasItem; TODO: remove in Qv3
    hasItem: () => !1,
    getLength: () => 0,
    getItem: e,
    getIndex: e,
    getKey: e,
    getAll: () => {
    },
    getAllKeys: () => [],
    set: _t,
    // alias for setItem; TODO: remove in Qv3
    setItem: _t,
    remove: _t,
    // alias for removeItem; TODO: remove in Qv3
    removeItem: _t,
    clear: _t,
    isEmpty: () => !0
  };
}
function lc(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Wm(i) : null;
  }, a = (o) => t.getItem(o) !== null, l = (o, i) => {
    t.setItem(o, Ym(i));
  }, r = (o) => {
    t.removeItem(o);
  };
  return {
    has: a,
    // TODO: remove in Qv3
    hasItem: a,
    getLength: () => t.length,
    getItem: n,
    getIndex: (o) => o < t.length ? n(t.key(o)) : null,
    getKey: (o) => o < t.length ? t.key(o) : null,
    getAll: () => {
      let o;
      const i = {}, c = t.length;
      for (let f = 0; f < c; f++)
        o = t.key(f), i[o] = n(o);
      return i;
    },
    getAllKeys: () => {
      const o = [], i = t.length;
      for (let c = 0; c < i; c++)
        o.push(t.key(c));
      return o;
    },
    set: l,
    // TODO: remove in Qv3
    setItem: l,
    remove: r,
    // TODO: remove in Qv3
    removeItem: r,
    clear: () => {
      t.clear();
    },
    isEmpty: () => t.length === 0
  };
}
var rc = De.has.webStorage === !1 ? ac() : lc("local"), Xm = {
  install({ $q: e }) {
    e.localStorage = rc;
  }
};
Object.assign(Xm, rc);
var oc = De.has.webStorage === !1 ? ac() : lc("session"), Gm = {
  install({ $q: e }) {
    e.sessionStorage = oc;
  }
};
Object.assign(Gm, oc);
var Zm = ["ok", "hide"];
Is(Zm);
function Jm(e, t) {
  const n = [], a = [];
  return e.forEach((l) => {
    switch (l.type) {
      case "required":
        n.push(Ki());
        break;
      case "absence":
        n.push(tg());
        break;
      case "acceptance":
        n.push(ng());
        break;
      case "inclusion":
        const r = l;
        n.push(ic(r.including));
        break;
      case "exclusion":
        const o = l;
        n.push(eg(o.excluding));
        break;
      case "backend":
        n.push(Ki());
        break;
      case "allowNull":
        a.push("allowNull");
        break;
      case "allowBlank":
        a.push("allowBlank");
        break;
      case "positiveNumber":
        n.push(rg());
        break;
      case "lessThanOrEqualNumber":
        const i = l;
        if (i.less_than) {
          n.push(
            og(
              () => i.less_than
            )
          );
          break;
        }
      case "lessThanNumber":
        const c = l;
        if (c.less_than) {
          n.push(ig(() => c.less_than));
          break;
        }
      case "greaterThanOrEqualNumber":
        const f = l;
        if (f.greater_than) {
          n.push(
            ug(
              () => f.greater_than
            )
          );
          break;
        }
      case "greaterThanNumber":
        const d = l;
        if (d.greater_than) {
          n.push(
            sg(() => d.greater_than)
          );
          break;
        }
      case "equalToNumber":
        const b = l;
        if (b.equal_to) {
          n.push(cg(() => b.equal_to));
          break;
        }
      case "otherThanNumber":
        const g = l;
        if (g.other_than) {
          n.push(dg(() => g.other_than));
          break;
        }
      case "numberIntegerOnly":
        n.push(fg());
        break;
      case "numberNumericOnly":
        n.push(vg());
        break;
      case "numberEvenOnly":
        n.push(mg());
        break;
      case "numberOddOnly":
        n.push(gg());
        break;
      case "lessThanOrEqualStringLength":
        const v = l;
        if (v.less_than) {
          n.push(
            hg(
              () => v.less_than
            )
          );
          break;
        }
      case "lessThanStringLength":
        const m = l;
        if (m.less_than) {
          n.push(
            bg(() => m.less_than)
          );
          break;
        }
      case "greaterThanOrEqualStringLength":
        const S = l;
        if (S.greater_than) {
          n.push(
            yg(
              () => S.greater_than
            )
          );
          break;
        }
      case "greaterThanStringLength":
        const p = l;
        if (p.greater_than) {
          n.push(
            pg(
              () => p.greater_than
            )
          );
          break;
        }
      case "equalToString":
        const x = l;
        if (x.equal_to) {
          n.push(_g(() => x.equal_to));
          break;
        }
      case "betweenStringLength":
        const C = l;
        n.push(
          Sg(
            () => C.min,
            () => C.max
          )
        );
        break;
      case "equalToStringLength":
        const y = l;
        n.push(wg(() => y.equal_to));
        break;
      case "otherThanString":
        const h = l;
        n.push(Cg(() => h.other_than));
        break;
      case "lessThanOrEqualDate":
        const _ = l;
        n.push(ia(t.dateFormat)), n.push(
          xg(
            () => _.less_than,
            t.dateFormat
          )
        );
        break;
      case "lessThanDate":
        const L = l;
        n.push(ia(t.dateFormat)), n.push(
          kg(
            () => L.less_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanOrEqualDate":
        const F = l;
        n.push(ia(t.dateFormat)), n.push(
          qg(
            () => F.greater_than,
            t.dateFormat
          )
        );
        break;
      case "greaterThanDate":
        const R = l;
        n.push(ia(t.dateFormat)), n.push(
          Tg(
            () => R.greater_than,
            t.dateFormat
          )
        );
        break;
      case "equalToDate":
        const z = l;
        n.push(ia(t.dateFormat)), n.push(
          Mg(
            () => z.equal_to,
            t.dateFormat
          )
        );
        break;
      case "otherThanDate":
        const B = l;
        n.push(ia(t.dateFormat)), n.push(
          $g(
            () => B.other_than,
            t.dateFormat
          )
        );
        break;
    }
  }), a.length > 0 ? a.map((l) => {
    switch (l) {
      case "allowBlank":
        return lg(n);
      case "allowNull":
        return ag(n);
    }
  }) : n;
}
function Ki() {
  return (e) => !!e || "Ce champ est requis";
}
function ic(e) {
  return (t) => e.includes(String(t)) || `Doit être contenu dans ${e.toString()}`;
}
function eg(e) {
  return (t) => !e.includes(
    String(t) || `Ne doit pas être contenu dans ${ic.toString()}`
  );
}
function tg() {
  return (e) => !e || "Ce champ doit être vide";
}
function ng() {
  return (e) => !!e || "Doit être accepté";
}
function ag(e) {
  return (t) => (t === null || e.forEach((n) => {
    const a = n(t);
    if (a !== !0)
      return a;
  }), !0);
}
function lg(e) {
  return (t) => (t === "" || e.forEach((n) => {
    const a = n(t);
    if (a !== !0)
      return a;
  }), !0);
}
function rg() {
  return (e) => Number(e) > 0 || "Val. positive uniquement";
}
function og(e) {
  return (t) => {
    const n = e();
    return Number(t) <= n || `Inf. ou égal à ${n}`;
  };
}
function ig(e) {
  return (t) => {
    const n = e();
    return Number(t) < n || `Inf. ${n}`;
  };
}
function ug(e) {
  return (t) => {
    const n = e();
    return Number(t) >= n || `Sup. ou égal à ${n}`;
  };
}
function sg(e) {
  return (t) => {
    const n = e();
    return Number(t) > n || `Sup. à ${n}`;
  };
}
function cg(e, t) {
  const n = e();
  return (a) => Number(a) === n || `Égale à ${n}`;
}
function dg(e, t) {
  const n = e();
  return (a) => Number(a) !== n || `Doit être différent de ${e}`;
}
function fg() {
  return (e) => /^-?\d+$/.test(String(e).trim()) || "Nombre entier uniquement";
}
function vg() {
  return (e) => /^-?\d+(\.\d+)?$/.test(String(e).trim()) || "Caractère numérique uniquement";
}
function mg() {
  return (e) => Number.isInteger(Number(e)) && Number(e) % 2 === 0 || "Nombre pair uniquement";
}
function gg() {
  return (e) => Number.isInteger(Number(e)) && Number(e) % 2 === 1 || "Nombre impair uniquement";
}
function hg(e) {
  const t = e();
  return (n) => String(n).length <= t || `Inf. ou égal à ${t}`;
}
function bg(e) {
  const t = e();
  return (n) => String(n).length < t || `Inf. à ${t}`;
}
function yg(e) {
  const t = e();
  return (n) => String(n).length >= t || `Sup. ou égal à ${t}`;
}
function pg(e) {
  const t = e();
  return (n) => String(n).length > t || `Sup. à ${t}`;
}
function Sg(e, t) {
  const n = e(), a = t();
  return (l) => String(l).length >= n && String(l).length <= a || `Entre ${n} et ${a}`;
}
function _g(e, t) {
  const n = e();
  return (a) => String(a) === n || `Égale à ${n}`;
}
function wg(e) {
  const t = e();
  return (n) => String(n).length === t || `Doit contenir ${t} caractères`;
}
function Cg(e, t) {
  const n = e();
  return (a) => String(a) !== n || `Doit être différent de ${n}`;
}
function xg(e, t) {
  const n = e();
  return (a) => !Number.isNaN(yt.extractDate(String(a), t).getTime()) && yt.extractDate(String(a), t) <= yt.extractDate(n, t) || `Inf. ou égal à ${yt.formatDate(n, t)}`;
}
function kg(e, t) {
  const n = e();
  return (a) => !Number.isNaN(yt.extractDate(String(a), t).getTime()) && yt.extractDate(String(a), t) < yt.extractDate(n, t) || `Inf. à ${yt.formatDate(n, t)}`;
}
function qg(e, t) {
  const n = e();
  return (a) => !Number.isNaN(yt.extractDate(String(a), t).getTime()) && yt.extractDate(String(a), t) >= yt.extractDate(n, t) || `Sup. ou égal à ${yt.formatDate(n, t)}`;
}
function Tg(e, t) {
  const n = e();
  return (a) => !Number.isNaN(yt.extractDate(String(a), t).getTime()) && yt.extractDate(String(a), t) > yt.extractDate(n, t) || `Sup. à ${yt.formatDate(n, t)}`;
}
function Mg(e, t, n) {
  const a = e();
  return (l) => yt.extractDate(String(l), t) === yt.extractDate(a, t) || `Égale à ${yt.extractDate(a, t)}`;
}
function $g(e, t, n) {
  const a = e();
  return (l) => yt.extractDate(String(l), t) !== yt.extractDate(a, t) || `Doit être différent de ${a}`;
}
function ia(e) {
  return (t) => !Number.isNaN(yt.extractDate(String(t), e).getTime()) || "Date invalide";
}
const Bg = {
  computeServerRules: Jm
}, hn = /* @__PURE__ */ Ot({
  __name: "FieldWrapper",
  props: {
    field: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = Et(Zi), l = E();
    function r() {
      return l.value;
    }
    function o() {
      a && (l.value = a.getDefaultDataByFieldName(
        n.field.metadata.field_name
      ));
    }
    function i() {
      switch (typeof l.value) {
        case "boolean":
          l.value = !1;
        case "string":
          l.value = "";
        case "number":
          l.value = 0;
        case "object":
          l.value = {};
      }
    }
    function c() {
      return Bg.computeServerRules(
        n.field.rules ?? [],
        a.getFormFactory().formSettings
      );
    }
    return t({
      reset: o,
      clear: i,
      getValue: r
    }), ut(() => {
      var d;
      o();
      const f = (d = ve()) == null ? void 0 : d.proxy;
      f && a && a.registerRef(
        n.field.metadata.field_name,
        f
      );
    }), (f, d) => (dt(), En("div", null, [
      n.field.resetable ? Ea(f.$slots, "reset", {
        key: 0,
        actionProps: { reset: o }
      }, () => [
        (dt(), Mt(sl(Aa(a).getFormFactory().wrapperResetComponent), { reset: o }))
      ]) : ba("", !0),
      Ea(f.$slots, "default", {
        propsWrapper: { modelValue: l.value, field: f.field, injectForm: Aa(a), reset: o, clear: i, getComputedRules: c }
      })
    ]));
  }
}), Lg = /* @__PURE__ */ Ot({
  __name: "StringField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-input");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Cn(xn(n(o))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Fg = /* @__PURE__ */ Ot({
  __name: "TextField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-input");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Gi(n(o), { type: "textarea" }), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), zg = { class: "row items-center justify-end" }, Rg = /* @__PURE__ */ Ot({
  __name: "DateField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(r) {
      const o = r.injectForm.getFormFactory(), i = o.formSettings, c = o.formStyleConfig;
      return {
        // behaviour
        modelValue: r.modelValue,
        lazyRules: i.rulesBehaviour === "lazy",
        clearable: r.field.clearable,
        rules: r.getComputedRules(),
        // events
        onClear: r.clear,
        // display
        label: r.field.label,
        hint: r.field.hint,
        outlined: c.fieldOutlined,
        filled: c.fieldFilled,
        standout: c.fieldStandout,
        borderless: c.fieldBorderless,
        rounded: c.fieldRounded,
        square: c.fieldSquare,
        dense: c.fieldDense,
        hideBottomSpace: c.fieldHideBottomSpace,
        color: c.fieldColor,
        bgColor: c.fieldBgColor,
        class: r.field.cssClass
      };
    }
    function a(r) {
      return {
        size: "sm",
        color: "primary",
        name: "event",
        class: "cursor-pointer"
      };
    }
    function l(r) {
      return {
        modelValue: r.modelValue,
        mask: r.injectForm.getFormSettings().dateFormat
      };
    }
    return (r, o) => {
      const i = Rt("q-btn"), c = Rt("q-date"), f = Rt("q-popup-proxy"), d = Rt("q-icon"), b = Rt("q-input"), g = hc("close-popup");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: v }) => [
          Nt(b, Cn(xn(n(v))), {
            append: At(() => [
              Nt(d, Cn(xn(a())), {
                default: At(() => [
                  Nt(f, {
                    cover: "",
                    "transition-show": "scale",
                    "transition-hide": "scale"
                  }, {
                    default: At(() => [
                      Nt(c, Cn(xn(l(v))), {
                        default: At(() => [
                          cl("div", zg, [
                            Kt(Nt(i, {
                              label: "Fermer",
                              color: "secondary",
                              flat: "",
                              "no-caps": ""
                            }, null, 512), [
                              [g]
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)
            ]),
            _: 2
          }, 1040)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Pg = /* @__PURE__ */ Ot({
  __name: "CheckboxField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory().formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        // display
        label: a.field.label,
        dense: l.fieldDense,
        color: l.fieldColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-checkbox");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Cn(xn(n(o))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Ag = { class: "flex row items-center" }, Eg = { class: "text-body1 text-weight-medium" }, Og = { class: "flex column q-gutter-sm" }, Vg = /* @__PURE__ */ Ot({
  __name: "DefaultSectionComponent",
  props: {
    section: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      const l = Rt("q-icon");
      return dt(), En("div", {
        class: bc(["flex column", t.section.cssClass])
      }, [
        cl("div", Ag, [
          t.section.icon ? (dt(), Mt(l, {
            key: 0,
            name: t.section.icon,
            size: "sm"
          }, null, 8, ["name"])) : ba("", !0),
          cl("div", Eg, yc(t.section.label), 1)
        ]),
        cl("div", Og, [
          Ea(n.$slots, "default")
        ])
      ], 2);
    };
  }
}), Dg = { class: "flex row items-center no-wrap" }, Ng = /* @__PURE__ */ Ot({
  __name: "DefaultActionComponent",
  props: {
    isLoadingSubmit: { type: Boolean },
    reset: { type: Function },
    clear: { type: Function },
    submit: { type: Function }
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      const l = Rt("q-btn");
      return dt(), En("div", Dg, [
        Nt(l, {
          label: "Enregistrer",
          loading: t.isLoadingSubmit,
          onClick: t.submit
        }, null, 8, ["loading", "onClick"]),
        t.reset ? (dt(), Mt(l, {
          key: 0,
          loading: t.isLoadingSubmit,
          label: "Réinitialiser",
          onClick: t.reset
        }, null, 8, ["loading", "onClick"])) : ba("", !0),
        t.clear ? (dt(), Mt(l, {
          key: 1,
          loading: t.isLoadingSubmit,
          label: "Vider",
          onClick: t.clear
        }, null, 8, ["loading", "onClick"])) : ba("", !0)
      ]);
    };
  }
}), Ig = /* @__PURE__ */ Ot({
  __name: "NumberField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-input");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Gi(n(o), { type: "number" }), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Hg = /* @__PURE__ */ Ot({
  __name: "SelectHasManyField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        multiple: !0,
        useChips: !0,
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-select");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Cn(xn(n(o))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), jg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Qg = {};
function Kg(e, t) {
  return " TODO json edit ? ";
}
const Ug = /* @__PURE__ */ jg(Qg, [["render", Kg]]), Yg = /* @__PURE__ */ Ot({
  __name: "SelectField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: a.field.selectOptions || [],
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-select");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Cn(xn(n(o))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Wg = /* @__PURE__ */ Ot({
  __name: "SelectBelongsToField",
  props: {
    field: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const l = a.injectForm.getFormFactory(), r = l.formSettings, o = l.formStyleConfig;
      return {
        // behaviour
        modelValue: a.modelValue,
        lazyRules: r.rulesBehaviour === "lazy",
        clearable: a.field.clearable,
        rules: a.getComputedRules(),
        mapOptions: !0,
        emitValue: !0,
        options: [],
        // TODO request to backend for paginated association ?
        // events
        onClear: a.clear,
        // display
        label: a.field.label,
        hint: a.field.hint,
        outlined: o.fieldOutlined,
        filled: o.fieldFilled,
        standout: o.fieldStandout,
        borderless: o.fieldBorderless,
        rounded: o.fieldRounded,
        square: o.fieldSquare,
        dense: o.fieldDense,
        hideBottomSpace: o.fieldHideBottomSpace,
        color: o.fieldColor,
        bgColor: o.fieldBgColor,
        class: a.field.cssClass
      };
    }
    return (a, l) => {
      const r = Rt("q-select");
      return dt(), Mt(hn, {
        field: t.field
      }, {
        default: At(({ propsWrapper: o }) => [
          Nt(r, Cn(xn(n(o))), null, 16)
        ]),
        _: 1
      }, 8, ["field"]);
    };
  }
}), Xg = /* @__PURE__ */ Ot({
  __name: "DefaultWrapperResetComponent",
  props: {
    reset: { type: Function }
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      const l = Rt("q-icon");
      return dt(), Mt(l, {
        name: "reset",
        class: "cursor-pointer",
        onClick: a[0] || (a[0] = (r) => t.reset())
      });
    };
  }
});
class _n {
  constructor(t, n, a, l, r, o) {
    Dt(this, "resourceName");
    Dt(this, "formSettings");
    Dt(this, "formStyleConfig");
    Dt(this, "actionComponent");
    Dt(this, "sectionComponent");
    Dt(this, "wrapperResetComponent");
    this.resourceName = t, this.formSettings = {
      ..._n.getDefaultFormSettings(),
      ...Pn.getGlobalFormSetting(),
      ...n
    }, this.formStyleConfig = {
      ..._n.getDefaultFormStyleSettings(),
      ...Pn.getGlobalFormStyleConfig(),
      ...a
    }, this.actionComponent = l ?? Pn.getGlobalActionComponent() ?? _n.getDefaultActionComponent(), this.sectionComponent = r ?? Pn.getGlobalSectionComponent() ?? _n.getDefaultSectionComponent(), this.wrapperResetComponent = o ?? Pn.getGlobalWrapperResetComponent() ?? _n.getDefaultWrapperResetComponent();
  }
  static getFieldComponentByFormFieldType(t) {
    return {
      string: Lg,
      text: Fg,
      number: Ig,
      date: Rg,
      selectString: Yg,
      selectBelongsTo: Wg,
      selectHasMany: Hg,
      checkbox: Pg,
      object: Ug
    }[t];
  }
  static getDefaultFormSettings() {
    return {
      rulesBehaviour: "lazy",
      dateFormat: "DD/MM/YYYY",
      datetimeFormat: "DD/MM/YYYY:HHmm",
      renderBackendHint: !0
    };
  }
  static getDefaultFormStyleSettings() {
    return {
      fieldOutlined: !0,
      fieldDense: !0,
      fieldHideBottomSpace: !0,
      fieldFilled: !1,
      fieldStandout: !1,
      fieldBorderless: !1,
      fieldRounded: !1,
      fieldSquare: !1,
      fieldClass: "",
      fieldColor: "primary",
      fieldBgColor: "white"
    };
  }
  static getDefaultActionComponent() {
    return Ng;
  }
  static getDefaultSectionComponent() {
    return Vg;
  }
  static getDefaultWrapperResetComponent() {
    return Xg;
  }
  getAllField(t) {
    const n = [];
    return t.form.sections.forEach((l) => {
      const r = [];
      l.fields.forEach((i) => {
        const c = _n.getFieldComponentByFormFieldType(
          i.form_field_type
        ), f = {
          type: i.form_field_type,
          metadata: i,
          label: i.form_label,
          hint: i.form_hint,
          cssClass: i.form_css_class,
          selectOptions: i.form_select_options,
          rules: i.form_rules,
          clearable: i.clearable,
          resetable: i.resetable,
          component: c
        };
        r.push(f);
      });
      const o = {
        label: l.label,
        fields: r
      };
      n.push(o);
    }), {
      sections: n,
      resetable: t.form.resetable,
      clearable: t.form.clearable,
      hasGlobalCustomValidation: t.form.has_global_custom_validation ?? !1
    };
  }
}
const Gg = {
  key: 0,
  class: "flex q-pa-sm q-gutter-sm"
}, eh = /* @__PURE__ */ Ot({
  __name: "Submit64Form",
  props: {
    resourceName: {},
    resourceId: {},
    getMetadataAndData: {},
    submitForm: {},
    globalFormSettings: {},
    context: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    let a = null;
    const l = Object.freeze(
      new _n(
        n.resourceName,
        n.globalFormSettings
      )
    ), r = E({}), o = E(), i = E(!1), c = E(!1);
    async function f() {
      a = await n.getMetadataAndData({
        resourceName: n.resourceName,
        resourceId: n.resourceId,
        context: n.context
      }), o.value = Object.freeze(
        l.getAllField(a)
      );
    }
    async function d() {
      c.value = !0;
      const x = {};
      Object.entries(r.value).forEach((y) => {
        x[y[0]] = y[1].getValue();
      });
      const C = await n.submitForm({ formData: x });
      a && (a.resource_data = C), b(), c.value = !1;
    }
    function b() {
      Object.values(r.value).forEach((x) => {
        x.reset();
      });
    }
    function g() {
      Object.values(r.value).forEach((x) => {
        x.clear();
      });
    }
    function v(x, C) {
      r.value[x] = C;
    }
    function m(x) {
      if (a)
        return a.resource_data[x];
    }
    function S(x) {
      const C = Object.entries(r.value).find((y) => y[0] === x);
      return C ? C[1].getValue() : null;
    }
    function p() {
      return l;
    }
    return fn(Zi, {
      registerRef: v,
      getDefaultDataByFieldName: m,
      getFieldDataByFieldName: S,
      getFormFactory: p
    }), t({}), ut(async () => {
      await f();
    }), (x, C) => i.value && o.value ? (dt(), En("div", Gg, [
      (dt(!0), En(Wl, null, xo(o.value.sections, (y, h) => (dt(), Mt(sl(Aa(l).sectionComponent), {
        key: h,
        section: y
      }, {
        default: At(() => [
          (dt(!0), En(Wl, null, xo(y.fields, (_) => (dt(), En(Wl, {
            key: _.metadata.field_name
          }, [
            x.$slots[_.metadata.field_name] ? (dt(), Mt(hn, {
              key: 1,
              field: _
            }, {
              default: At(({ propsWrapper: L }) => [
                Ea(x.$slots, "default", { propsWrapper: L })
              ]),
              _: 2
            }, 1032, ["field"])) : (dt(), Mt(sl(_.component), {
              key: 0,
              field: _
            }, null, 8, ["field"]))
          ], 64))), 128))
        ]),
        _: 2
      }, 1032, ["section"]))), 128)),
      (dt(), Mt(sl(Aa(l).actionComponent), {
        isLoadingSubmit: c.value,
        submit: d,
        clear: o.value.clearable ? g : void 0,
        reset: o.value.resetable ? b : void 0
      }, null, 8, ["isLoadingSubmit", "clear", "reset"])),
      x.$slots.more_actions ? Ea(x.$slots, "more_actions", {
        key: 0,
        propsForm: { generatedForm: o.value }
      }) : ba("", !0)
    ])) : ba("", !0);
  }
});
export {
  Pn as Submit64,
  eh as Submit64Form
};
