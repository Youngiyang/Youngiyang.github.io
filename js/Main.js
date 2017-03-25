/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!
function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
  function n(e) {
    var t = e.length,
    n = rt.type(e);
    return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }
  function i(e, t, n) {
    if (rt.isFunction(t)) return rt.grep(e,
    function(e, i) {
      return !! t.call(e, i, e) !== n
    });
    if (t.nodeType) return rt.grep(e,
    function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (ft.test(t)) return rt.filter(t, e, n);
      t = rt.filter(t, e)
    }
    return rt.grep(e,
    function(e) {
      return rt.inArray(e, t) >= 0 !== n
    })
  }
  function r(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e
  }
  function o(e) {
    var t = xt[e] = {};
    return rt.each(e.match(bt) || [],
    function(e, n) {
      t[n] = !0
    }),
    t
  }
  function a() {
    ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
  }
  function s() { (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), rt.ready())
  }
  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(Nt, "-$1").toLowerCase();
      if (n = e.getAttribute(i), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: Et.test(n) ? rt.parseJSON(n) : n
        } catch(r) {}
        rt.data(e, t, n)
      } else n = void 0
    }
    return n
  }
  function u(e) {
    var t;
    for (t in e) if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
    return ! 0
  }
  function c(e, t, n, i) {
    if (rt.acceptData(e)) {
      var r, o, a = rt.expando,
      s = e.nodeType,
      l = s ? rt.cache: e,
      u = s ? e[a] : e[a] && a;
      if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || rt.guid++:a),
      l[u] || (l[u] = s ? {}: {
        toJSON: rt.noop
      }),
      ("object" == typeof t || "function" == typeof t) && (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)),
      o = l[u],
      i || (o.data || (o.data = {}), o = o.data),
      void 0 !== n && (o[rt.camelCase(t)] = n),
      "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o,
      r
    }
  }
  function d(e, t, n) {
    if (rt.acceptData(e)) {
      var i, r, o = e.nodeType,
      a = o ? rt.cache: e,
      s = o ? e[rt.expando] : rt.expando;
      if (a[s]) {
        if (t && (i = n ? a[s] : a[s].data)) {
          rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")),
          r = t.length;
          for (; r--;) delete i[t[r]];
          if (n ? !u(i) : !rt.isEmptyObject(i)) return
        } (n || (delete a[s].data, u(a[s]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }
  function f() {
    return ! 0
  }
  function p() {
    return ! 1
  }
  function h() {
    try {
      return ht.activeElement
    } catch(e) {}
  }
  function m(e) {
    var t = $t.split("|"),
    n = e.createDocumentFragment();
    if (n.createElement) for (; t.length;) n.createElement(t.pop());
    return n
  }
  function g(e, t) {
    var n, i, r = 0,
    o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
    if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) ! t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, g(i, t));
    return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
  }
  function v(e) {
    jt.test(e.type) && (e.defaultChecked = e.checked)
  }
  function y(e, t) {
    return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function b(e) {
    return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type,
    e
  }
  function x(e) {
    var t = Vt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"),
    e
  }
  function w(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
  }
  function T(e, t) {
    if (1 === t.nodeType && rt.hasData(e)) {
      var n, i, r, o = rt._data(e),
      a = rt._data(t, o),
      s = o.events;
      if (s) {
        delete a.handle,
        a.events = {};
        for (n in s) for (i = 0, r = s[n].length; r > i; i++) rt.event.add(t, n, s[n][i])
      }
      a.data && (a.data = rt.extend({},
      a.data))
    }
  }
  function C(e, t) {
    var n, i, r;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
        r = rt._data(t);
        for (i in r.events) rt.removeEvent(t, i, r.handle);
        t.removeAttribute(rt.expando)
      }
      "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }
  function E(t, n) {
    var i, r = rt(n.createElement(t)).appendTo(n.body),
    o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display: rt.css(r[0], "display");
    return r.detach(),
    o
  }
  function N(e) {
    var t = ht,
    n = Zt[e];
    return n || (n = E(e, t), "none" !== n && n || (Kt = (Kt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Kt.detach()), Zt[e] = n),
    n
  }
  function k(e, t) {
    return {
      get: function() {
        var n = e();
        return null != n ? n ? void delete this.get: (this.get = t).apply(this, arguments) : void 0
      }
    }
  }
  function S(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = pn.length; r--;) if (t = pn[r] + n, t in e) return t;
    return i
  }
  function _(e, t) {
    for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a],
    i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && _t(i) && (o[a] = rt._data(i, "olddisplay", N(i.nodeName)))) : (r = _t(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n: rt.css(i, "display"))));
    for (a = 0; s > a; a++) i = e[a],
    i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "": "none"));
    return e
  }
  function A(e, t, n) {
    var i = un.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }
  function j(e, t, n, i, r) {
    for (var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += rt.css(e, n + St[o], !0, r)),
    i ? ("content" === n && (a -= rt.css(e, "padding" + St[o], !0, r)), "margin" !== n && (a -= rt.css(e, "border" + St[o] + "Width", !0, r))) : (a += rt.css(e, "padding" + St[o], !0, r), "padding" !== n && (a += rt.css(e, "border" + St[o] + "Width", !0, r)));
    return a
  }
  function L(e, t, n) {
    var i = !0,
    r = "width" === t ? e.offsetWidth: e.offsetHeight,
    o = en(e),
    a = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, o);
    if (0 >= r || null == r) {
      if (r = tn(e, t, o), (0 > r || null == r) && (r = e.style[t]), rn.test(r)) return r;
      i = a && (nt.boxSizingReliable() || r === e.style[t]),
      r = parseFloat(r) || 0
    }
    return r + j(e, t, n || (a ? "border": "content"), i, o) + "px"
  }
  function M(e, t, n, i, r) {
    return new M.prototype.init(e, t, n, i, r)
  }
  function D() {
    return setTimeout(function() {
      hn = void 0
    }),
    hn = rt.now()
  }
  function F(e, t) {
    var n, i = {
      height: e
    },
    r = 0;
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = St[r],
    i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e),
    i
  }
  function H(e, t, n) {
    for (var i, r = (xn[t] || []).concat(xn["*"]), o = 0, a = r.length; a > o; o++) if (i = r[o].call(n, t, e)) return i
  }
  function $(e, t, n) {
    var i, r, o, a, s, l, u, c, d = this,
    f = {},
    p = e.style,
    h = e.nodeType && _t(e),
    m = rt._data(e, "fxshow");
    n.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
      s.unqueued || l()
    }), s.unqueued++, d.always(function() {
      d.always(function() {
        s.unqueued--,
        rt.queue(e, "fx").length || s.empty.fire()
      })
    })),
    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || N(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
    n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
      p.overflow = n.overflow[0],
      p.overflowX = n.overflow[1],
      p.overflowY = n.overflow[2]
    }));
    for (i in t) if (r = t[i], gn.exec(r)) {
      if (delete t[i], o = o || "toggle" === r, r === (h ? "hide": "show")) {
        if ("show" !== r || !m || void 0 === m[i]) continue;
        h = !0
      }
      f[i] = m && m[i] || rt.style(e, i)
    } else u = void 0;
    if (rt.isEmptyObject(f))"inline" === ("none" === u ? N(e.nodeName) : u) && (p.display = u);
    else {
      m ? "hidden" in m && (h = m.hidden) : m = rt._data(e, "fxshow", {}),
      o && (m.hidden = !h),
      h ? rt(e).show() : d.done(function() {
        rt(e).hide()
      }),
      d.done(function() {
        var t;
        rt._removeData(e, "fxshow");
        for (t in f) rt.style(e, t, f[t])
      });
      for (i in f) a = H(h ? m[i] : 0, i, d),
      i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }
  }
  function q(e, t) {
    var n, i, r, o, a;
    for (n in e) if (i = rt.camelCase(n), r = t[i], o = e[n], rt.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = rt.cssHooks[i], a && "expand" in a) {
      o = a.expand(o),
      delete e[i];
      for (n in o) n in e || (e[n] = o[n], t[n] = r)
    } else t[i] = r
  }
  function O(e, t, n) {
    var i, r, o = 0,
    a = bn.length,
    s = rt.Deferred().always(function() {
      delete l.elem
    }),
    l = function() {
      if (r) return ! 1;
      for (var t = hn || D(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
      return s.notifyWith(e, [u, o, n]),
      1 > o && l ? n: (s.resolveWith(e, [u]), !1)
    },
    u = s.promise({
      elem: e,
      props: rt.extend({},
      t),
      opts: rt.extend(!0, {
        specialEasing: {}
      },
      n),
      originalProperties: t,
      originalOptions: n,
      startTime: hn || D(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var i = rt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(i),
        i
      },
      stop: function(t) {
        var n = 0,
        i = t ? u.tweens.length: 0;
        if (r) return this;
        for (r = !0; i > n; n++) u.tweens[n].run(1);
        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
        this
      }
    }),
    c = u.props;
    for (q(c, u.opts.specialEasing); a > o; o++) if (i = bn[o].call(u, e, c, u.opts)) return i;
    return rt.map(c, H, u),
    rt.isFunction(u.opts.start) && u.opts.start.call(e, u),
    rt.fx.timer(rt.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })),
    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }
  function W(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
      o = t.toLowerCase().match(bt) || [];
      if (rt.isFunction(n)) for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }
  function P(e, t, n, i) {
    function r(s) {
      var l;
      return o[s] = !0,
      rt.each(e[s] || [],
      function(e, s) {
        var u = s(t, n, i);
        return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
      }),
      l
    }
    var o = {},
    a = e === In;
    return r(t.dataTypes[0]) || !o["*"] && r("*")
  }
  function R(e, t) {
    var n, i, r = rt.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e: n || (n = {}))[i] = t[i]);
    return n && rt.extend(!0, e, n),
    e
  }
  function B(e, t, n) {
    for (var i, r, o, a, s = e.contents,
    l = e.dataTypes;
    "*" === l[0];) l.shift(),
    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r) for (a in s) if (s[a] && s[a].test(r)) {
      l.unshift(a);
      break
    }
    if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          o = a;
          break
        }
        i || (i = a)
      }
      o = o || i
    }
    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
  }
  function z(e, t, n, i) {
    var r, o, a, s, l, u = {},
    c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
    else if ("*" !== l && l !== o) {
      if (a = u[l + " " + o] || u["* " + o], !a) for (r in u) if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
        break
      }
      if (a !== !0) if (a && e["throws"]) t = a(t);
      else try {
        t = a(t)
      } catch(d) {
        return {
          state: "parsererror",
          error: a ? d: "No conversion from " + l + " to " + o
        }
      }
    }
    return {
      state: "success",
      data: t
    }
  }
  function I(e, t, n, i) {
    var r;
    if (rt.isArray(t)) rt.each(t,
    function(t, r) {
      n || Jn.test(e) ? i(e, r) : I(e + "[" + ("object" == typeof r ? t: "") + "]", r, n, i)
    });
    else if (n || "object" !== rt.type(t)) i(e, t);
    else for (r in t) I(e + "[" + r + "]", t[r], n, i)
  }
  function X() {
    try {
      return new e.XMLHttpRequest
    } catch(t) {}
  }
  function U() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch(t) {}
  }
  function V(e) {
    return rt.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
  }
  var J = [],
  G = J.slice,
  Y = J.concat,
  Q = J.push,
  K = J.indexOf,
  Z = {},
  et = Z.toString,
  tt = Z.hasOwnProperty,
  nt = {},
  it = "1.11.1",
  rt = function(e, t) {
    return new rt.fn.init(e, t)
  },
  ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  at = /^-ms-/,
  st = /-([\da-z])/gi,
  lt = function(e, t) {
    return t.toUpperCase()
  };
  rt.fn = rt.prototype = {
    jquery: it,
    constructor: rt,
    selector: "",
    length: 0,
    toArray: function() {
      return G.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
    },
    pushStack: function(e) {
      var t = rt.merge(this.constructor(), e);
      return t.prevObject = this,
      t.context = this.context,
      t
    },
    each: function(e, t) {
      return rt.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(rt.map(this,
      function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(G.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq( - 1)
    },
    eq: function(e) {
      var t = this.length,
      n = +e + (0 > e ? t: 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Q,
    sort: J.sort,
    splice: J.splice
  },
  rt.extend = rt.fn.extend = function() {
    var e, t, n, i, r, o, a = arguments[0] || {},
    s = 1,
    l = arguments.length,
    u = !1;
    for ("boolean" == typeof a && (u = a, a = arguments[s] || {},
    s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (r = arguments[s])) for (i in r) e = a[i],
    n = r[i],
    a !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e: []) : o = e && rt.isPlainObject(e) ? e: {},
    a[i] = rt.extend(u, o, n)) : void 0 !== n && (a[i] = n));
    return a
  },
  rt.extend({
    expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === rt.type(e)
    },
    isArray: Array.isArray ||
    function(e) {
      return "array" === rt.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return ! rt.isArray(e) && e - parseFloat(e) >= 0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return ! 1;
      return ! 0
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return ! 1;
      try {
        if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
      } catch(n) {
        return ! 1
      }
      if (nt.ownLast) for (t in e) return tt.call(e, t);
      for (t in e);
      return void 0 === t || tt.call(e, t)
    },
    type: function(e) {
      return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object": typeof e
    },
    globalEval: function(t) {
      t && rt.trim(t) && (e.execScript ||
      function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(at, "ms-").replace(st, lt)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, i) {
      var r, o = 0,
      a = e.length,
      s = n(e);
      if (i) {
        if (s) for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
        else for (o in e) if (r = t.apply(e[o], i), r === !1) break
      } else if (s) for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
      else for (o in e) if (r = t.call(e[o], o, e[o]), r === !1) break;
      return e
    },
    trim: function(e) {
      return null == e ? "": (e + "").replace(ot, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)),
      i
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (K) return K.call(t, e, n);
        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in t && t[n] === e) return n
      }
      return - 1
    },
    merge: function(e, t) {
      for (var n = +t.length,
      i = 0,
      r = e.length; n > i;) e[r++] = t[i++];
      if (n !== n) for (; void 0 !== t[i];) e[r++] = t[i++];
      return e.length = r,
      e
    },
    grep: function(e, t, n) {
      for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o),
      i !== s && r.push(e[o]);
      return r
    },
    map: function(e, t, i) {
      var r, o = 0,
      a = e.length,
      s = n(e),
      l = [];
      if (s) for (; a > o; o++) r = t(e[o], o, i),
      null != r && l.push(r);
      else for (o in e) r = t(e[o], o, i),
      null != r && l.push(r);
      return Y.apply([], l)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i, r;
      return "string" == typeof t && (r = e[t], t = e, e = r),
      rt.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
        return e.apply(t || this, n.concat(G.call(arguments)))
      },
      i.guid = e.guid = e.guid || rt.guid++, i) : void 0
    },
    now: function() {
      return + new Date
    },
    support: nt
  }),
  rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
  function(e, t) {
    Z["[object " + t + "]"] = t.toLowerCase()
  });
  var ut = function(e) {
    function t(e, t, n, i) {
      var r, o, a, s, l, u, d, p, h, m;
      if ((t ? t.ownerDocument || t: P) !== M && L(t), t = t || M, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (F && !i) {
        if (r = yt.exec(e)) if (a = r[1]) {
          if (9 === s) {
            if (o = t.getElementById(a), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o),
            n
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o),
          n
        } else {
          if (r[2]) return Z.apply(n, t.getElementsByTagName(e)),
          n;
          if ((a = r[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)),
          n
        }
        if (w.qsa && (!H || !H.test(e))) {
          if (p = d = W, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (u = N(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
            h = bt.test(e) && c(t.parentNode) || t,
            m = u.join(",")
          }
          if (m) try {
            return Z.apply(n, h.querySelectorAll(m)),
            n
          } catch(g) {} finally {
            d || t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(lt, "$1"), t, n, i)
    }
    function n() {
      function e(n, i) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
        e[n + " "] = i
      }
      var t = [];
      return e
    }
    function i(e) {
      return e[W] = !0,
      e
    }
    function r(e) {
      var t = M.createElement("div");
      try {
        return !! e(t)
      } catch(n) {
        return ! 1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
        t = null
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
    }
    function a(e, t) {
      var n = t && e,
      i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
      return e ? 1 : -1
    }
    function s(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }
    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }
    function u(e) {
      return i(function(t) {
        return t = +t,
        i(function(n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
        })
      })
    }
    function c(e) {
      return e && typeof e.getElementsByTagName !== V && e
    }
    function d() {}
    function f(e) {
      for (var t = 0,
      n = e.length,
      i = ""; n > t; t++) i += e[t].value;
      return i
    }
    function p(e, t, n) {
      var i = t.dir,
      r = n && "parentNode" === i,
      o = B++;
      return t.first ?
      function(t, n, o) {
        for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
      }: function(t, n, a) {
        var s, l, u = [R, o];
        if (a) {
          for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return ! 0
        } else for (; t = t[i];) if (1 === t.nodeType || r) {
          if (l = t[W] || (t[W] = {}), (s = l[i]) && s[0] === R && s[1] === o) return u[2] = s[2];
          if (l[i] = u, u[2] = e(t, n, a)) return ! 0
        }
      }
    }
    function h(e) {
      return e.length > 1 ?
      function(t, n, i) {
        for (var r = e.length; r--;) if (!e[r](t, n, i)) return ! 1;
        return ! 0
      }: e[0]
    }
    function m(e, n, i) {
      for (var r = 0,
      o = n.length; o > r; r++) t(e, n[r], i);
      return i
    }
    function g(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
      return a
    }
    function v(e, t, n, r, o, a) {
      return r && !r[W] && (r = v(r)),
      o && !o[W] && (o = v(o, a)),
      i(function(i, a, s, l) {
        var u, c, d, f = [],
        p = [],
        h = a.length,
        v = i || m(t || "*", s.nodeType ? [s] : s, []),
        y = !e || !i && t ? v: g(v, f, e, s, l),
        b = n ? o || (i ? e: h || r) ? [] : a: y;
        if (n && n(y, b, s, l), r) for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
        if (i) {
          if (o || e) {
            if (o) {
              for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
              o(null, b = [], u, l)
            }
            for (c = b.length; c--;)(d = b[c]) && (u = o ? tt.call(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
          }
        } else b = g(b === a ? b.splice(h, b.length) : b),
        o ? o(null, a, b, l) : Z.apply(a, b)
      })
    }
    function y(e) {
      for (var t, n, i, r = e.length,
      o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
        return e === t
      },
      a, !0), u = p(function(e) {
        return tt.call(t, e) > -1
      },
      a, !0), c = [function(e, n, i) {
        return ! o && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
      }]; r > s; s++) if (n = T.relative[e[s].type]) c = [p(h(c), n)];
      else {
        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[W]) {
          for (i = ++s; r > i && !T.relative[e[i].type]; i++);
          return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*": ""
          })).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
        }
        c.push(n)
      }
      return h(c)
    }
    function b(e, n) {
      var r = n.length > 0,
      o = e.length > 0,
      a = function(i, a, s, l, u) {
        var c, d, f, p = 0,
        h = "0",
        m = i && [],
        v = [],
        y = _,
        b = i || o && T.find.TAG("*", u),
        x = R += null == y ? 1 : Math.random() || .1,
        w = b.length;
        for (u && (_ = a !== M && a); h !== w && null != (c = b[h]); h++) {
          if (o && c) {
            for (d = 0; f = e[d++];) if (f(c, a, s)) {
              l.push(c);
              break
            }
            u && (R = x)
          }
          r && ((c = !f && c) && p--, i && m.push(c))
        }
        if (p += h, r && h !== p) {
          for (d = 0; f = n[d++];) f(m, v, a, s);
          if (i) {
            if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
            v = g(v)
          }
          Z.apply(l, v),
          u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
        }
        return u && (R = x, _ = y),
        m
      };
      return r ? i(a) : a
    }
    var x, w, T, C, E, N, k, S, _, A, j, L, M, D, F, H, $, q, O, W = "sizzle" + -new Date,
    P = e.document,
    R = 0,
    B = 0,
    z = n(),
    I = n(),
    X = n(),
    U = function(e, t) {
      return e === t && (j = !0),
      0
    },
    V = "undefined",
    J = 1 << 31,
    G = {}.hasOwnProperty,
    Y = [],
    Q = Y.pop,
    K = Y.push,
    Z = Y.push,
    et = Y.slice,
    tt = Y.indexOf ||
    function(e) {
      for (var t = 0,
      n = this.length; n > t; t++) if (this[t] === e) return t;
      return - 1
    },
    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    it = "[\\x20\\t\\r\\n\\f]",
    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    ot = rt.replace("w", "w#"),
    at = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
    st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
    lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
    ut = new RegExp("^" + it + "*," + it + "*"),
    ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
    dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
    ft = new RegExp(st),
    pt = new RegExp("^" + ot + "$"),
    ht = {
      ID: new RegExp("^#(" + rt + ")"),
      CLASS: new RegExp("^\\.(" + rt + ")"),
      TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + at),
      PSEUDO: new RegExp("^" + st),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + nt + ")$", "i"),
      needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
    },
    mt = /^(?:input|select|textarea|button)$/i,
    gt = /^h\d$/i,
    vt = /^[^{]+\{\s*\[native \w/,
    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    bt = /[+~]/,
    xt = /'|\\/g,
    wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
    Tt = function(e, t, n) {
      var i = "0x" + t - 65536;
      return i !== i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    };
    try {
      Z.apply(Y = et.call(P.childNodes), P.childNodes),
      Y[P.childNodes.length].nodeType
    } catch(Ct) {
      Z = {
        apply: Y.length ?
        function(e, t) {
          K.apply(e, et.call(t))
        }: function(e, t) {
          for (var n = e.length,
          i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {},
    E = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName: !1
    },
    L = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e: P,
      i = n.defaultView;
      return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, D = n.documentElement, F = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload",
      function() {
        L()
      },
      !1) : i.attachEvent && i.attachEvent("onunload",
      function() {
        L()
      })), w.attributes = r(function(e) {
        return e.className = "i",
        !e.getAttribute("className")
      }), w.getElementsByTagName = r(function(e) {
        return e.appendChild(n.createComment("")),
        !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
        e.firstChild.className = "i",
        2 === e.getElementsByClassName("i").length
      }), w.getById = r(function(e) {
        return D.appendChild(e).id = W,
        !n.getElementsByName || !n.getElementsByName(W).length
      }), w.getById ? (T.find.ID = function(e, t) {
        if (typeof t.getElementById !== V && F) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      },
      T.filter.ID = function(e) {
        var t = e.replace(wt, Tt);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete T.find.ID, T.filter.ID = function(e) {
        var t = e.replace(wt, Tt);
        return function(e) {
          var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), T.find.TAG = w.getElementsByTagName ?
      function(e, t) {
        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
      }: function(e, t) {
        var n, i = [],
        r = 0,
        o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return o
      },
      T.find.CLASS = w.getElementsByClassName &&
      function(e, t) {
        return typeof t.getElementsByClassName !== V && F ? t.getElementsByClassName(e) : void 0
      },
      $ = [], H = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
        e.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"),
        e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + nt + ")"),
        e.querySelectorAll(":checked").length || H.push(":checked")
      }), r(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"),
        e.appendChild(t).setAttribute("name", "D"),
        e.querySelectorAll("[name=d]").length && H.push("name" + it + "*[*^$|!~]?="),
        e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
        e.querySelectorAll("*,:x"),
        H.push(",.*:")
      })), (w.matchesSelector = vt.test(q = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
        w.disconnectedMatch = q.call(e, "div"),
        q.call(e, "[s!='']:x"),
        $.push("!=", st)
      }), H = H.length && new RegExp(H.join("|")), $ = $.length && new RegExp($.join("|")), t = vt.test(D.compareDocumentPosition), O = t || vt.test(D.contains) ?
      function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement: e,
        i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      }: function(e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
        return ! 1
      },
      U = t ?
      function(e, t) {
        if (e === t) return j = !0,
        0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i ? i: (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === P && O(P, e) ? -1 : t === n || t.ownerDocument === P && O(P, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & i ? -1 : 1)
      }: function(e, t) {
        if (e === t) return j = !0,
        0;
        var i, r = 0,
        o = e.parentNode,
        s = t.parentNode,
        l = [e],
        u = [t];
        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
        if (o === s) return a(e, t);
        for (i = e; i = i.parentNode;) l.unshift(i);
        for (i = t; i = i.parentNode;) u.unshift(i);
        for (; l[r] === u[r];) r++;
        return r ? a(l[r], u[r]) : l[r] === P ? -1 : u[r] === P ? 1 : 0
      },
      n) : M
    },
    t.matches = function(e, n) {
      return t(e, null, null, n)
    },
    t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== M && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !F || $ && $.test(n) || H && H.test(n))) try {
        var i = q.call(e, n);
        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch(r) {}
      return t(n, M, null, [e]).length > 0
    },
    t.contains = function(e, t) {
      return (e.ownerDocument || e) !== M && L(e),
      O(e, t)
    },
    t.attr = function(e, t) { (e.ownerDocument || e) !== M && L(e);
      var n = T.attrHandle[t.toLowerCase()],
      i = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
      return void 0 !== i ? i: w.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
    },
    t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    },
    t.uniqueSort = function(e) {
      var t, n = [],
      i = 0,
      r = 0;
      if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return A = null,
      e
    },
    C = t.getText = function(e) {
      var t, n = "",
      i = 0,
      r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else for (; t = e[i++];) n += C(t);
      return n
    },
    T = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: ht,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(wt, Tt),
          e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt),
          "~=" === e[2] && (e[3] = " " + e[3] + " "),
          e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(),
          "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
          e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return ht.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ft.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(wt, Tt).toLowerCase();
          return "*" === e ?
          function() {
            return ! 0
          }: function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = z[e + " "];
          return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e,
          function(e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, i) {
          return function(r) {
            var o = t.attr(r, e);
            return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === i: "!=" === n ? o !== i: "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice( - i.length) === i: "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-": !1) : !0
          }
        },
        CHILD: function(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
          a = "last" !== e.slice( - 4),
          s = "of-type" === t;
          return 1 === i && 0 === r ?
          function(e) {
            return !! e.parentNode
          }: function(t, n, l) {
            var u, c, d, f, p, h, m = o !== a ? "nextSibling": "previousSibling",
            g = t.parentNode,
            v = s && t.nodeName.toLowerCase(),
            y = !l && !s;
            if (g) {
              if (o) {
                for (; m;) {
                  for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                  h = m = "only" === e && !h && "nextSibling"
                }
                return ! 0
              }
              if (h = [a ? g.firstChild: g.lastChild], a && y) {
                for (c = g[W] || (g[W] = {}), u = c[e] || [], p = u[0] === R && u[1], f = u[0] === R && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                  c[e] = [R, p, f];
                  break
                }
              } else if (y && (u = (t[W] || (t[W] = {}))[e]) && u[0] === R) f = u[1];
              else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++f || (y && ((d[W] || (d[W] = {}))[e] = [R, f]), d !== t)););
              return f -= r,
              f === i || f % i === 0 && f / i >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[W] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
            for (var i, r = o(e, n), a = r.length; a--;) i = tt.call(e, r[a]),
            e[i] = !(t[i] = r[a])
          }) : function(e) {
            return o(e, 0, r)
          }) : o
        }
      },
      pseudos: {
        not: i(function(e) {
          var t = [],
          n = [],
          r = k(e.replace(lt, "$1"));
          return r[W] ? i(function(e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, i, o) {
            return t[0] = e,
            r(t, null, o, n),
            !n.pop()
          }
        }),
        has: i(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: i(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }),
        lang: i(function(e) {
          return pt.test(e || "") || t.error("unsupported lang: " + e),
          e = e.replace(wt, Tt).toLowerCase(),
          function(t) {
            var n;
            do
            if (n = F ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
            n === e || 0 === n.indexOf(e + "-");
            while ((t = t.parentNode) && 1 === t.nodeType);
            return ! 1
          }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === D
        },
        focus: function(e) {
          return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex,
          e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
          return ! 0
        },
        parent: function(e) {
          return ! T.pseudos.empty(e)
        },
        header: function(e) {
          return gt.test(e.nodeName)
        },
        input: function(e) {
          return mt.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: u(function() {
          return [0]
        }),
        last: u(function(e, t) {
          return [t - 1]
        }),
        eq: u(function(e, t, n) {
          return [0 > n ? n + t: n]
        }),
        even: u(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: u(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: u(function(e, t, n) {
          for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
          return e
        }),
        gt: u(function(e, t, n) {
          for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
          return e
        })
      }
    },
    T.pseudos.nth = T.pseudos.eq;
    for (x in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) T.pseudos[x] = s(x);
    for (x in {
      submit: !0,
      reset: !0
    }) T.pseudos[x] = l(x);
    return d.prototype = T.filters = T.pseudos,
    T.setFilters = new d,
    N = t.tokenize = function(e, n) {
      var i, r, o, a, s, l, u, c = I[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, l = [], u = T.preFilter; s;) { (!i || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])),
        i = !1,
        (r = ct.exec(s)) && (i = r.shift(), o.push({
          value: i,
          type: r[0].replace(lt, " ")
        }), s = s.slice(i.length));
        for (a in T.filter) ! (r = ht[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
          value: i,
          type: a,
          matches: r
        }), s = s.slice(i.length));
        if (!i) break
      }
      return n ? s.length: s ? t.error(e) : I(e, l).slice(0)
    },
    k = t.compile = function(e, t) {
      var n, i = [],
      r = [],
      o = X[e + " "];
      if (!o) {
        for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]),
        o[W] ? i.push(o) : r.push(o);
        o = X(e, b(r, i)),
        o.selector = e
      }
      return o
    },
    S = t.select = function(e, t, n, i) {
      var r, o, a, s, l, u = "function" == typeof e && e,
      d = !i && N(e = u.selector || e);
      if (n = n || [], 1 === d.length) {
        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
          if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
          u && (t = t.parentNode),
          e = e.slice(o.shift().value.length)
        }
        for (r = ht.needsContext.test(e) ? 0 : o.length; r--&&(a = o[r], !T.relative[s = a.type]);) if ((l = T.find[s]) && (i = l(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
          if (o.splice(r, 1), e = i.length && f(o), !e) return Z.apply(n, i),
          n;
          break
        }
      }
      return (u || k(e, d))(i, t, !F, n, bt.test(e) && c(t.parentNode) || t),
      n
    },
    w.sortStable = W.split("").sort(U).join("") === W,
    w.detectDuplicates = !!j,
    L(),
    w.sortDetached = r(function(e) {
      return 1 & e.compareDocumentPosition(M.createElement("div"))
    }),
    r(function(e) {
      return e.innerHTML = "<a href='#'></a>",
      "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width",
    function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }),
    w.attributes && r(function(e) {
      return e.innerHTML = "<input/>",
      e.firstChild.setAttribute("value", ""),
      "" === e.firstChild.getAttribute("value")
    }) || o("value",
    function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }),
    r(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(nt,
    function(e, t, n) {
      var i;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
    }),
    t
  } (e);
  rt.find = ut,
  rt.expr = ut.selectors,
  rt.expr[":"] = rt.expr.pseudos,
  rt.unique = ut.uniqueSort,
  rt.text = ut.getText,
  rt.isXMLDoc = ut.isXML,
  rt.contains = ut.contains;
  var ct = rt.expr.match.needsContext,
  dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  ft = /^.[^:#\[\.,]*$/;
  rt.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"),
    1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t,
    function(e) {
      return 1 === e.nodeType
    }))
  },
  rt.fn.extend({
    find: function(e) {
      var t, n = [],
      i = this,
      r = i.length;
      if ("string" != typeof e) return this.pushStack(rt(e).filter(function() {
        for (t = 0; r > t; t++) if (rt.contains(i[t], this)) return ! 0
      }));
      for (t = 0; r > t; t++) rt.find(e, i[t], n);
      return n = this.pushStack(r > 1 ? rt.unique(n) : n),
      n.selector = this.selector ? this.selector + " " + e: e,
      n
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !! i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
    }
  });
  var pt, ht = e.document,
  mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  gt = rt.fn.init = function(e, t) {
    var n, i;
    if (!e) return this;
    if ("string" == typeof e) {
      if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: ht, !0)), dt.test(n[1]) && rt.isPlainObject(t)) for (n in t) rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
      }
      if (i = ht.getElementById(n[2]), i && i.parentNode) {
        if (i.id !== n[2]) return pt.find(e);
        this.length = 1,
        this[0] = i
      }
      return this.context = ht,
      this.selector = e,
      this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
  };
  gt.prototype = rt.fn,
  pt = rt(ht);
  var vt = /^(?:parents|prev(?:Until|All))/,
  yt = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  rt.extend({
    dir: function(e, t, n) {
      for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r),
      r = r[t];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }),
  rt.fn.extend({
    has: function(e) {
      var t, n = rt(e, this),
      i = n.length;
      return this.filter(function() {
        for (t = 0; i > t; t++) if (rt.contains(this, n[t])) return ! 0
      })
    },
    closest: function(e, t) {
      for (var n, i = 0,
      r = this.length,
      o = [], a = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(o.length > 1 ? rt.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
    },
    add: function(e, t) {
      return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
    }
  }),
  rt.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t: null
    },
    parents: function(e) {
      return rt.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return rt.dir(e, "parentNode", n)
    },
    next: function(e) {
      return r(e, "nextSibling")
    },
    prev: function(e) {
      return r(e, "previousSibling")
    },
    nextAll: function(e) {
      return rt.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return rt.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return rt.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return rt.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return rt.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return rt.sibling(e.firstChild)
    },
    contents: function(e) {
      return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: rt.merge([], e.childNodes)
    }
  },
  function(e, t) {
    rt.fn[e] = function(n, i) {
      var r = rt.map(this, t, n);
      return "Until" !== e.slice( - 5) && (i = n),
      i && "string" == typeof i && (r = rt.filter(i, r)),
      this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())),
      this.pushStack(r)
    }
  });
  var bt = /\S+/g,
  xt = {};
  rt.Callbacks = function(e) {
    e = "string" == typeof e ? xt[e] || o(e) : rt.extend({},
    e);
    var t, n, i, r, a, s, l = [],
    u = !e.once && [],
    c = function(o) {
      for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++) if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
        n = !1;
        break
      }
      t = !1,
      l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
    },
    d = {
      add: function() {
        if (l) {
          var i = l.length; !
          function o(t) {
            rt.each(t,
            function(t, n) {
              var i = rt.type(n);
              "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
            })
          } (arguments),
          t ? r = l.length: n && (s = i, c(n))
        }
        return this
      },
      remove: function() {
        return l && rt.each(arguments,
        function(e, n) {
          for (var i; (i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1),
          t && (r >= i && r--, a >= i && a--)
        }),
        this
      },
      has: function(e) {
        return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
      },
      empty: function() {
        return l = [],
        r = 0,
        this
      },
      disable: function() {
        return l = u = n = void 0,
        this
      },
      disabled: function() {
        return ! l
      },
      lock: function() {
        return u = void 0,
        n || d.disable(),
        this
      },
      locked: function() {
        return ! u
      },
      fireWith: function(e, n) {
        return ! l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)),
        this
      },
      fire: function() {
        return d.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !! i
      }
    };
    return d
  },
  rt.extend({
    Deferred: function(e) {
      var t = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]],
      n = "pending",
      i = {
        state: function() {
          return n
        },
        always: function() {
          return r.done(arguments).fail(arguments),
          this
        },
        then: function() {
          var e = arguments;
          return rt.Deferred(function(n) {
            rt.each(t,
            function(t, o) {
              var a = rt.isFunction(e[t]) && e[t];
              r[o[1]](function() {
                var e = a && a.apply(this, arguments);
                e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
              })
            }),
            e = null
          }).promise()
        },
        promise: function(e) {
          return null != e ? rt.extend(e, i) : i
        }
      },
      r = {};
      return i.pipe = i.then,
      rt.each(t,
      function(e, o) {
        var a = o[2],
        s = o[3];
        i[o[1]] = a.add,
        s && a.add(function() {
          n = s
        },
        t[1 ^ e][2].disable, t[2][2].lock),
        r[o[0]] = function() {
          return r[o[0] + "With"](this === r ? i: this, arguments),
          this
        },
        r[o[0] + "With"] = a.fireWith
      }),
      i.promise(r),
      e && e.call(r, r),
      r
    },
    when: function(e) {
      var t, n, i, r = 0,
      o = G.call(arguments),
      a = o.length,
      s = 1 !== a || e && rt.isFunction(e.promise) ? a: 0,
      l = 1 === s ? e: rt.Deferred(),
      u = function(e, n, i) {
        return function(r) {
          n[e] = this,
          i[e] = arguments.length > 1 ? G.call(arguments) : r,
          i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
        }
      };
      if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
      return s || l.resolveWith(i, o),
      l.promise()
    }
  });
  var wt;
  rt.fn.ready = function(e) {
    return rt.ready.promise().done(e),
    this
  },
  rt.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? rt.readyWait++:rt.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--rt.readyWait: !rt.isReady) {
        if (!ht.body) return setTimeout(rt.ready);
        rt.isReady = !0,
        e !== !0 && --rt.readyWait > 0 || (wt.resolveWith(ht, [rt]), rt.fn.triggerHandler && (rt(ht).triggerHandler("ready"), rt(ht).off("ready")))
      }
    }
  }),
  rt.ready.promise = function(t) {
    if (!wt) if (wt = rt.Deferred(), "complete" === ht.readyState) setTimeout(rt.ready);
    else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1),
    e.addEventListener("load", s, !1);
    else {
      ht.attachEvent("onreadystatechange", s),
      e.attachEvent("onload", s);
      var n = !1;
      try {
        n = null == e.frameElement && ht.documentElement
      } catch(i) {}
      n && n.doScroll && !
      function r() {
        if (!rt.isReady) {
          try {
            n.doScroll("left")
          } catch(e) {
            return setTimeout(r, 50)
          }
          a(),
          rt.ready()
        }
      } ()
    }
    return wt.promise(t)
  };
  var Tt, Ct = "undefined";
  for (Tt in rt(nt)) break;
  nt.ownLast = "0" !== Tt,
  nt.inlineBlockNeedsLayout = !1,
  rt(function() {
    var e, t, n, i;
    n = ht.getElementsByTagName("body")[0],
    n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
  }),
  function() {
    var e = ht.createElement("div");
    if (null == nt.deleteExpando) {
      nt.deleteExpando = !0;
      try {
        delete e.test
      } catch(t) {
        nt.deleteExpando = !1
      }
    }
    e = null
  } (),
  rt.acceptData = function(e) {
    var t = rt.noData[(e.nodeName + " ").toLowerCase()],
    n = +e.nodeType || 1;
    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
  };
  var Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Nt = /([A-Z])/g;
  rt.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando],
      !!e && !u(e)
    },
    data: function(e, t, n) {
      return c(e, t, n)
    },
    removeData: function(e, t) {
      return d(e, t)
    },
    _data: function(e, t, n) {
      return c(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return d(e, t, !0)
    }
  }),
  rt.fn.extend({
    data: function(e, t) {
      var n, i, r, o = this[0],
      a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
          rt._data(o, "parsedAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        rt.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        rt.data(this, e, t)
      }) : o ? l(o, e, rt.data(o, e)) : void 0
    },
    removeData: function(e) {
      return this.each(function() {
        rt.removeData(this, e)
      })
    }
  }),
  rt.extend({
    queue: function(e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = rt.queue(e, t),
      i = n.length,
      r = n.shift(),
      o = rt._queueHooks(e, t),
      a = function() {
        rt.dequeue(e, t)
      };
      "inprogress" === r && (r = n.shift(), i--),
      r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)),
      !i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return rt._data(e, n) || rt._data(e, n, {
        empty: rt.Callbacks("once memory").add(function() {
          rt._removeData(e, t + "queue"),
          rt._removeData(e, n)
        })
      })
    }
  }),
  rt.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--),
      arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this: this.each(function() {
        var n = rt.queue(this, e, t);
        rt._queueHooks(this, e),
        "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        rt.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, i = 1,
      r = rt.Deferred(),
      o = this,
      a = this.length,
      s = function() {--i || r.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = rt._data(o[a], e + "queueHooks"),
      n && n.empty && (i++, n.empty.add(s));
      return s(),
      r.promise(t)
    }
  });
  var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  St = ["Top", "Right", "Bottom", "Left"],
  _t = function(e, t) {
    return e = t || e,
    "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
  },
  At = rt.access = function(e, t, n, i, r, o, a) {
    var s = 0,
    l = e.length,
    u = null == n;
    if ("object" === rt.type(n)) {
      r = !0;
      for (s in n) rt.access(e, t, s, n[s], !0, o, a)
    } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
      return u.call(rt(e), n)
    })), t)) for (; l > s; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
    return r ? e: u ? t.call(e) : l ? t(e[0], n) : o
  },
  jt = /^(?:checkbox|radio)$/i; !
  function() {
    var e = ht.createElement("input"),
    t = ht.createElement("div"),
    n = ht.createDocumentFragment();
    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
    function() {
      nt.noCloneEvent = !1
    }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
      nt.deleteExpando = !0;
      try {
        delete t.test
      } catch(i) {
        nt.deleteExpando = !1
      }
    }
  } (),
  function() {
    var t, n, i = ht.createElement("div");
    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    }) n = "on" + t,
    (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
    i = null
  } ();
  var Lt = /^(?:input|select|textarea)$/i,
  Mt = /^key/,
  Dt = /^(?:mouse|pointer|contextmenu)|click/,
  Ft = /^(?:focusinfocus|focusoutblur)$/,
  Ht = /^([^.]*)(?:\.(.+)|)$/;
  rt.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o, a, s, l, u, c, d, f, p, h, m, g = rt._data(e);
      if (g) {
        for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
          return typeof rt === Ct || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
        },
        c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Ht.exec(t[s]) || [],
        p = m = o[1],
        h = (o[2] || "").split(".").sort(),
        p && (u = rt.event.special[p] || {},
        p = (r ? u.delegateType: u.bindType) || p, u = rt.event.special[p] || {},
        d = rt.extend({
          type: p,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && rt.expr.match.needsContext.test(r),
          namespace: h.join(".")
        },
        l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), rt.event.global[p] = !0);
        e = null
      }
    },
    remove: function(e, t, n, i, r) {
      var o, a, s, l, u, c, d, f, p, h, m, g = rt.hasData(e) && rt._data(e);
      if (g && (c = g.events)) {
        for (t = (t || "").match(bt) || [""], u = t.length; u--;) if (s = Ht.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (d = rt.event.special[p] || {},
          p = (i ? d.delegateType: d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o],
          !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
          l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || rt.removeEvent(e, p, g.handle), delete c[p])
        } else for (p in c) rt.event.remove(e, p + t[u], n, i, !0);
        rt.isEmptyObject(c) && (delete g.handle, rt._removeData(e, "events"))
      }
    },
    trigger: function(t, n, i, r) {
      var o, a, s, l, u, c, d, f = [i || ht],
      p = tt.call(t, "type") ? t.type: t,
      h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = c = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !Ft.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[rt.expando] ? t: new rt.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : rt.makeArray(n, [t]), u = rt.event.special[p] || {},
      r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
        if (!r && !u.noBubble && !rt.isWindow(i)) {
          for (l = u.delegateType || p, Ft.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s),
          c = s;
          c === (i.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e)
        }
        for (d = 0; (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l: u.bindType || p,
        o = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"),
        o && o.apply(s, n),
        o = a && s[a],
        o && o.apply && rt.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && rt.acceptData(i) && a && i[p] && !rt.isWindow(i)) {
          c = i[a],
          c && (i[a] = null),
          rt.event.triggered = p;
          try {
            i[p]()
          } catch(m) {}
          rt.event.triggered = void 0,
          c && (i[a] = c)
        }
        return t.result
      }
    },
    dispatch: function(e) {
      e = rt.event.fix(e);
      var t, n, i, r, o, a = [],
      s = G.call(arguments),
      l = (rt._data(this, "events") || {})[e.type] || [],
      u = rt.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
        for (a = rt.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e),
        e.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, o, a = [],
      s = t.delegateCount,
      l = e.target;
      if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (r = [], o = 0; s > o; o++) i = t[o],
        n = i.selector + " ",
        void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length),
        r[n] && r.push(i);
        r.length && a.push({
          elem: l,
          handlers: r
        })
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }),
      a
    },
    fix: function(e) {
      if (e[rt.expando]) return e;
      var t, n, i, r = e.type,
      o = e,
      a = this.fixHooks[r];
      for (a || (this.fixHooks[r] = a = Dt.test(r) ? this.mouseHooks: Mt.test(r) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new rt.Event(o), t = i.length; t--;) n = i[t],
      e[n] = o[n];
      return e.target || (e.target = o.srcElement || ht),
      3 === e.target.nodeType && (e.target = e.target.parentNode),
      e.metaKey = !!e.metaKey,
      a.filter ? a.filter(e, o) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
        e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, r, o = t.button,
        a = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== h() && this.focus) try {
            return this.focus(),
            !1
          } catch(e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === h() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return rt.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, i) {
      var r = rt.extend(new rt.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r),
      r.isDefaultPrevented() && n.preventDefault()
    }
  },
  rt.removeEvent = ht.removeEventListener ?
  function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }: function(e, t, n) {
    var i = "on" + t;
    e.detachEvent && (typeof e[i] === Ct && (e[i] = null), e.detachEvent(i, n))
  },
  rt.Event = function(e, t) {
    return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f: p) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
  },
  rt.Event.prototype = {
    isDefaultPrevented: p,
    isPropagationStopped: p,
    isImmediatePropagationStopped: p,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = f,
      e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = f,
      e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = f,
      e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  rt.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  },
  function(e, t) {
    rt.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this,
        r = e.relatedTarget,
        o = e.handleObj;
        return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
        n
      }
    }
  }),
  nt.submitBubbles || (rt.event.special.submit = {
    setup: function() {
      return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit",
      function(e) {
        var t = e.target,
        n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form: void 0;
        n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit",
        function(e) {
          e._submit_bubble = !0
        }), rt._data(n, "submitBubbles", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
    }
  }),
  nt.changeBubbles || (rt.event.special.change = {
    setup: function() {
      return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change",
      function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), rt.event.add(this, "click._change",
      function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1),
        rt.event.simulate("change", this, e, !0)
      })), !1) : void rt.event.add(this, "beforeactivate._change",
      function(e) {
        var t = e.target;
        Lt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change",
        function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
        }), rt._data(t, "changeBubbles", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return rt.event.remove(this, "._change"),
      !Lt.test(this.nodeName)
    }
  }),
  nt.focusinBubbles || rt.each({
    focus: "focusin",
    blur: "focusout"
  },
  function(e, t) {
    var n = function(e) {
      rt.event.simulate(t, e.target, rt.event.fix(e), !0)
    };
    rt.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this,
        r = rt._data(i, t);
        r || i.addEventListener(e, n, !0),
        rt._data(i, t, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
        r = rt._data(i, t) - 1;
        r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
      }
    }
  }),
  rt.fn.extend({
    on: function(e, t, n, i, r) {
      var o, a;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (o in e) this.on(o, t, n, e[o], r);
        return this
      }
      if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
      else if (!i) return this;
      return 1 === r && (a = i, i = function(e) {
        return rt().off(e),
        a.apply(this, arguments)
      },
      i.guid = a.guid || (a.guid = rt.guid++)),
      this.each(function() {
        rt.event.add(this, e, i, n, t)
      })
    },
    one: function(e, t, n, i) {
      return this.on(e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
      rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
      this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
      n === !1 && (n = p),
      this.each(function() {
        rt.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        rt.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? rt.event.trigger(e, t, n, !0) : void 0
    }
  });
  var $t = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  qt = / jQuery\d+="(?:null|\d+)"/g,
  Ot = new RegExp("<(?:" + $t + ")[\\s/>]", "i"),
  Wt = /^\s+/,
  Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  Rt = /<([\w:]+)/,
  Bt = /<tbody/i,
  zt = /<|&#?\w+;/,
  It = /<(?:script|style|link)/i,
  Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Ut = /^$|\/(?:java|ecma)script/i,
  Vt = /^true\/(.*)/,
  Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  Gt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
  Yt = m(ht),
  Qt = Yt.appendChild(ht.createElement("div"));
  Gt.optgroup = Gt.option,
  Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead,
  Gt.th = Gt.td,
  rt.extend({
    clone: function(e, t, n) {
      var i, r, o, a, s, l = rt.contains(e.ownerDocument, e);
      if (nt.html5Clone || rt.isXMLDoc(e) || !Ot.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e))) for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && C(r, i[a]);
      if (t) if (n) for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
      else T(e, o);
      return i = g(o, "script"),
      i.length > 0 && w(i, !l && g(e, "script")),
      i = s = r = null,
      o
    },
    buildFragment: function(e, t, n, i) {
      for (var r, o, a, s, l, u, c, d = e.length,
      f = m(t), p = [], h = 0; d > h; h++) if (o = e[h], o || 0 === o) if ("object" === rt.type(o)) rt.merge(p, o.nodeType ? [o] : o);
      else if (zt.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), l = (Rt.exec(o) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, s.innerHTML = c[1] + o.replace(Pt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
        if (!nt.leadingWhitespace && Wt.test(o) && p.push(t.createTextNode(Wt.exec(o)[0])), !nt.tbody) for (o = "table" !== l || Bt.test(o) ? "<table>" !== c[1] || Bt.test(o) ? 0 : s: s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
        for (rt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
        s = f.lastChild
      } else p.push(t.createTextNode(o));
      for (s && f.removeChild(s), nt.appendChecked || rt.grep(g(p, "input"), v), h = 0; o = p[h++];) if ((!i || -1 === rt.inArray(o, i)) && (a = rt.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n)) for (r = 0; o = s[r++];) Ut.test(o.type || "") && n.push(o);
      return s = null,
      f
    },
    cleanData: function(e, t) {
      for (var n, i, r, o, a = 0,
      s = rt.expando,
      l = rt.cache,
      u = nt.deleteExpando,
      c = rt.event.special; null != (n = e[a]); a++) if ((t || rt.acceptData(n)) && (r = n[s], o = r && l[r])) {
        if (o.events) for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
        l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, J.push(r))
      }
    }
  }),
  rt.fn.extend({
    text: function(e) {
      return At(this,
      function(e) {
        return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
      },
      null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments,
      function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments,
      function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments,
      function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments,
      function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || rt.cleanData(g(n)),
      n.parentNode && (t && rt.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && rt.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && rt.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e,
      t = null == t ? e: t,
      this.map(function() {
        return rt.clone(this, e, t)
      })
    },
    html: function(e) {
      return At(this,
      function(e) {
        var t = this[0] || {},
        n = 0,
        i = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qt, "") : void 0;
        if (! ("string" != typeof e || It.test(e) || !nt.htmlSerialize && Ot.test(e) || !nt.leadingWhitespace && Wt.test(e) || Gt[(Rt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Pt, "<$1></$2>");
          try {
            for (; i > n; n++) t = this[n] || {},
            1 === t.nodeType && (rt.cleanData(g(t, !1)), t.innerHTML = e);
            t = 0
          } catch(r) {}
        }
        t && this.empty().append(e)
      },
      null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments,
      function(t) {
        e = this.parentNode,
        rt.cleanData(g(this)),
        e && e.replaceChild(t, this)
      }),
      e && (e.length || e.nodeType) ? this: this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = Y.apply([], e);
      var n, i, r, o, a, s, l = 0,
      u = this.length,
      c = this,
      d = u - 1,
      f = e[0],
      p = rt.isFunction(f);
      if (p || u > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function(n) {
        var i = c.eq(n);
        p && (e[0] = f.call(this, n, i.html())),
        i.domManip(e, t)
      });
      if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (o = rt.map(g(s, "script"), b), r = o.length; u > l; l++) i = s,
        l !== d && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))),
        t.call(this[l], i, l);
        if (r) for (a = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++) i = o[l],
        Ut.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(a, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Jt, "")));
        s = n = null
      }
      return this
    }
  }),
  rt.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  },
  function(e, t) {
    rt.fn[e] = function(e) {
      for (var n, i = 0,
      r = [], o = rt(e), a = o.length - 1; a >= i; i++) n = i === a ? this: this.clone(!0),
      rt(o[i])[t](n),
      Q.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Kt, Zt = {}; !
  function() {
    var e;
    nt.shrinkWrapBlocks = function() {
      if (null != e) return e;
      e = !1;
      var t, n, i;
      return n = ht.getElementsByTagName("body")[0],
      n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
    }
  } ();
  var en, tn, nn = /^margin/,
  rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
  on = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (en = function(e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null)
  },
  tn = function(e, t, n) {
    var i, r, o, a, s = e.style;
    return n = n || en(e),
    a = n ? n.getPropertyValue(t) || n[t] : void 0,
    n && ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), rn.test(a) && nn.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)),
    void 0 === a ? a: a + ""
  }) : ht.documentElement.currentStyle && (en = function(e) {
    return e.currentStyle
  },
  tn = function(e, t, n) {
    var i, r, o, a, s = e.style;
    return n = n || en(e),
    a = n ? n[t] : void 0,
    null == a && s && s[t] && (a = s[t]),
    rn.test(a) && !on.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)),
    void 0 === a ? a: a + "" || "auto"
  }),
  !
  function() {
    function t() {
      var t, n, i, r;
      n = ht.getElementsByTagName("body")[0],
      n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
        width: "4px"
      }).width, r = t.appendChild(ht.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
    }
    var n, i, r, o, a, s, l;
    n = ht.createElement("div"),
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    r = n.getElementsByTagName("a")[0],
    (i = r && r.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
      reliableHiddenOffsets: function() {
        return null == s && t(),
        s
      },
      boxSizingReliable: function() {
        return null == a && t(),
        a
      },
      pixelPosition: function() {
        return null == o && t(),
        o
      },
      reliableMarginRight: function() {
        return null == l && t(),
        l
      }
    }))
  } (),
  rt.swap = function(e, t, n, i) {
    var r, o, a = {};
    for (o in t) a[o] = e.style[o],
    e.style[o] = t[o];
    r = n.apply(e, i || []);
    for (o in t) e.style[o] = a[o];
    return r
  };
  var an = /alpha\([^)]*\)/i,
  sn = /opacity\s*=\s*([^)]*)/,
  ln = /^(none|table(?!-c[ea]).+)/,
  un = new RegExp("^(" + kt + ")(.*)$", "i"),
  cn = new RegExp("^([+-])=(" + kt + ")", "i"),
  dn = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
  fn = {
    letterSpacing: "0",
    fontWeight: "400"
  },
  pn = ["Webkit", "O", "Moz", "ms"];
  rt.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = tn(e, "opacity");
            return "" === n ? "1": n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": nt.cssFloat ? "cssFloat": "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, a, s = rt.camelCase(t),
        l = e.style;
        if (t = rt.cssProps[s] || (rt.cssProps[s] = S(l, s)), a = rt.cssHooks[t] || rt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r: l[t];
        if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
          l[t] = n
        } catch(u) {}
      }
    },
    css: function(e, t, n, i) {
      var r, o, a, s = rt.camelCase(t);
      return t = rt.cssProps[s] || (rt.cssProps[s] = S(e.style, s)),
      a = rt.cssHooks[t] || rt.cssHooks[s],
      a && "get" in a && (o = a.get(e, !0, n)),
      void 0 === o && (o = tn(e, t, i)),
      "normal" === o && t in fn && (o = fn[t]),
      "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
    }
  }),
  rt.each(["height", "width"],
  function(e, t) {
    rt.cssHooks[t] = {
      get: function(e, n, i) {
        return n ? ln.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, dn,
        function() {
          return L(e, t, i)
        }) : L(e, t, i) : void 0
      },
      set: function(e, n, i) {
        var r = i && en(e);
        return A(e, n, i ? j(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
      }
    }
  }),
  nt.opacity || (rt.cssHooks.opacity = {
    get: function(e, t) {
      return sn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
    },
    set: function(e, t) {
      var n = e.style,
      i = e.currentStyle,
      r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
      o = i && i.filter || n.filter || "";
      n.zoom = 1,
      (t >= 1 || "" === t) && "" === rt.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
    }
  }),
  rt.cssHooks.marginRight = k(nt.reliableMarginRight,
  function(e, t) {
    return t ? rt.swap(e, {
      display: "inline-block"
    },
    tn, [e, "marginRight"]) : void 0
  }),
  rt.each({
    margin: "",
    padding: "",
    border: "Width"
  },
  function(e, t) {
    rt.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0,
        r = {},
        o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + St[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    },
    nn.test(e) || (rt.cssHooks[e + t].set = A)
  }),
  rt.fn.extend({
    css: function(e, t) {
      return At(this,
      function(e, t, n) {
        var i, r, o = {},
        a = 0;
        if (rt.isArray(t)) {
          for (i = en(e), r = t.length; r > a; a++) o[t[a]] = rt.css(e, t[a], !1, i);
          return o
        }
        return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
      },
      e, t, arguments.length > 1)
    },
    show: function() {
      return _(this, !0)
    },
    hide: function() {
      return _(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        _t(this) ? rt(this).show() : rt(this).hide()
      })
    }
  }),
  rt.Tween = M,
  M.prototype = {
    constructor: M,
    init: function(e, t, n, i, r, o) {
      this.elem = e,
      this.prop = n,
      this.easing = r || "swing",
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = i,
      this.unit = o || (rt.cssNumber[n] ? "": "px")
    },
    cur: function() {
      var e = M.propHooks[this.prop];
      return e && e.get ? e.get(this) : M.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = M.propHooks[this.prop];
      return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      n && n.set ? n.set(this) : M.propHooks._default.set(this),
      this
    }
  },
  M.prototype.init.prototype = M.prototype,
  M.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
      },
      set: function(e) {
        rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  },
  M.propHooks.scrollTop = M.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  rt.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return.5 - Math.cos(e * Math.PI) / 2
    }
  },
  rt.fx = M.prototype.init,
  rt.fx.step = {};
  var hn, mn, gn = /^(?:toggle|show|hide)$/,
  vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
  yn = /queueHooks$/,
  bn = [$],
  xn = {
    "*": [function(e, t) {
      var n = this.createTween(e, t),
      i = n.cur(),
      r = vn.exec(t),
      o = r && r[3] || (rt.cssNumber[e] ? "": "px"),
      a = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e)),
      s = 1,
      l = 20;
      if (a && a[3] !== o) {
        o = o || a[3],
        r = r || [],
        a = +i || 1;
        do s = s || ".5",
        a /= s,
        rt.style(n.elem, e, a + o);
        while (s !== (s = n.cur() / i) && 1 !== s && --l)
      }
      return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]),
      n
    }]
  };
  rt.Animation = rt.extend(O, {
    tweener: function(e, t) {
      rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, i = 0,
      r = e.length; r > i; i++) n = e[i],
      xn[n] = xn[n] || [],
      xn[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? bn.unshift(e) : bn.push(e)
    }
  }),
  rt.speed = function(e, t, n) {
    var i = e && "object" == typeof e ? rt.extend({},
    e) : {
      complete: n || !n && t || rt.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !rt.isFunction(t) && t
    };
    return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default,
    (null == i.queue || i.queue === !0) && (i.queue = "fx"),
    i.old = i.complete,
    i.complete = function() {
      rt.isFunction(i.old) && i.old.call(this),
      i.queue && rt.dequeue(this, i.queue)
    },
    i
  },
  rt.fn.extend({
    fadeTo: function(e, t, n, i) {
      return this.filter(_t).css("opacity", 0).show().end().animate({
        opacity: t
      },
      e, n, i)
    },
    animate: function(e, t, n, i) {
      var r = rt.isEmptyObject(e),
      o = rt.speed(t, n, i),
      a = function() {
        var t = O(this, rt.extend({},
        e), o); (r || rt._data(this, "finish")) && t.stop(!0)
      };
      return a.finish = a,
      r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(e, t, n) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop,
        t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0),
      t && e !== !1 && this.queue(e || "fx", []),
      this.each(function() {
        var t = !0,
        r = null != e && e + "queueHooks",
        o = rt.timers,
        a = rt._data(this);
        if (r) a[r] && a[r].stop && i(a[r]);
        else for (r in a) a[r] && a[r].stop && yn.test(r) && i(a[r]);
        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1)); (t || !n) && rt.dequeue(this, e)
      })
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"),
      this.each(function() {
        var t, n = rt._data(this),
        i = n[e + "queue"],
        r = n[e + "queueHooks"],
        o = rt.timers,
        a = i ? i.length: 0;
        for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }),
  rt.each(["toggle", "show", "hide"],
  function(e, t) {
    var n = rt.fn[t];
    rt.fn[t] = function(e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
    }
  }),
  rt.each({
    slideDown: F("show"),
    slideUp: F("hide"),
    slideToggle: F("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  },
  function(e, t) {
    rt.fn[e] = function(e, n, i) {
      return this.animate(t, e, n, i)
    }
  }),
  rt.timers = [],
  rt.fx.tick = function() {
    var e, t = rt.timers,
    n = 0;
    for (hn = rt.now(); n < t.length; n++) e = t[n],
    e() || t[n] !== e || t.splice(n--, 1);
    t.length || rt.fx.stop(),
    hn = void 0
  },
  rt.fx.timer = function(e) {
    rt.timers.push(e),
    e() ? rt.fx.start() : rt.timers.pop()
  },
  rt.fx.interval = 13,
  rt.fx.start = function() {
    mn || (mn = setInterval(rt.fx.tick, rt.fx.interval))
  },
  rt.fx.stop = function() {
    clearInterval(mn),
    mn = null
  },
  rt.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  rt.fn.delay = function(e, t) {
    return e = rt.fx ? rt.fx.speeds[e] || e: e,
    t = t || "fx",
    this.queue(t,
    function(t, n) {
      var i = setTimeout(t, e);
      n.stop = function() {
        clearTimeout(i)
      }
    })
  },
  function() {
    var e, t, n, i, r;
    t = ht.createElement("div"),
    t.setAttribute("className", "t"),
    t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    i = t.getElementsByTagName("a")[0],
    n = ht.createElement("select"),
    r = n.appendChild(ht.createElement("option")),
    e = t.getElementsByTagName("input")[0],
    i.style.cssText = "top:1px",
    nt.getSetAttribute = "t" !== t.className,
    nt.style = /top/.test(i.getAttribute("style")),
    nt.hrefNormalized = "/a" === i.getAttribute("href"),
    nt.checkOn = !!e.value,
    nt.optSelected = r.selected,
    nt.enctype = !!ht.createElement("form").enctype,
    n.disabled = !0,
    nt.optDisabled = !r.disabled,
    e = ht.createElement("input"),
    e.setAttribute("value", ""),
    nt.input = "" === e.getAttribute("value"),
    e.value = "t",
    e.setAttribute("type", "radio"),
    nt.radioValue = "t" === e.value
  } ();
  var wn = /\r/g;
  rt.fn.extend({
    val: function(e) {
      var t, n, i, r = this[0];
      return arguments.length ? (i = rt.isFunction(e), this.each(function(n) {
        var r;
        1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "": "number" == typeof r ? r += "": rt.isArray(r) && (r = rt.map(r,
        function(e) {
          return null == e ? "": e + ""
        })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
      })) : r ? (t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n: (n = r.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "": n)) : void 0
    }
  }),
  rt.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = rt.find.attr(e, "value");
          return null != t ? t: rt.trim(rt.text(e))
        }
      },
      select: {
        get: function(e) {
          for (var t, n, i = e.options,
          r = e.selectedIndex,
          o = "select-one" === e.type || 0 > r,
          a = o ? null: [], s = o ? r + 1 : i.length, l = 0 > r ? s: o ? r: 0; s > l; l++) if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
            if (t = rt(n).val(), o) return t;
            a.push(t)
          }
          return a
        },
        set: function(e, t) {
          for (var n, i, r = e.options,
          o = rt.makeArray(t), a = r.length; a--;) if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
            i.selected = n = !0
          } catch(s) {
            i.scrollHeight
          } else i.selected = !1;
          return n || (e.selectedIndex = -1),
          r
        }
      }
    }
  }),
  rt.each(["radio", "checkbox"],
  function() {
    rt.valHooks[this] = {
      set: function(e, t) {
        return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
      }
    },
    nt.checkOn || (rt.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on": e.value
    })
  });
  var Tn, Cn, En = rt.expr.attrHandle,
  Nn = /^(?:checked|selected)$/i,
  kn = nt.getSetAttribute,
  Sn = nt.input;
  rt.fn.extend({
    attr: function(e, t) {
      return At(this, rt.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        rt.removeAttr(this, e)
      })
    }
  }),
  rt.extend({
    attr: function(e, t, n) {
      var i, r, o = e.nodeType;
      return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ct ? rt.prop(e, t, n) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? Cn: Tn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t)) : void 0
    },
    removeAttr: function(e, t) {
      var n, i, r = 0,
      o = t && t.match(bt);
      if (o && 1 === e.nodeType) for (; n = o[r++];) i = rt.propFix[n] || n,
      rt.expr.match.bool.test(n) ? Sn && kn || !Nn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""),
      e.removeAttribute(kn ? n: i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t),
            n && (e.value = n),
            t
          }
        }
      }
    }
  }),
  Cn = {
    set: function(e, t, n) {
      return t === !1 ? rt.removeAttr(e, n) : Sn && kn || !Nn.test(n) ? e.setAttribute(!kn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0,
      n
    }
  },
  rt.each(rt.expr.match.bool.source.match(/\w+/g),
  function(e, t) {
    var n = En[t] || rt.find.attr;
    En[t] = Sn && kn || !Nn.test(t) ?
    function(e, t, i) {
      var r, o;
      return i || (o = En[t], En[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, En[t] = o),
      r
    }: function(e, t, n) {
      return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
    }
  }),
  Sn && kn || (rt.attrHooks.value = {
    set: function(e, t, n) {
      return rt.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
    }
  }),
  kn || (Tn = {
    set: function(e, t, n) {
      var i = e.getAttributeNode(n);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
      i.value = t += "",
      "value" === n || t === e.getAttribute(n) ? t: void 0
    }
  },
  En.id = En.name = En.coords = function(e, t, n) {
    var i;
    return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value: null
  },
  rt.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      return n && n.specified ? n.value: void 0
    },
    set: Tn.set
  },
  rt.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Tn.set(e, "" === t ? !1 : t, n)
    }
  },
  rt.each(["width", "height"],
  function(e, t) {
    rt.attrHooks[t] = {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
      }
    }
  })),
  nt.style || (rt.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  });
  var _n = /^(?:input|select|textarea|button|object)$/i,
  An = /^(?:a|area)$/i;
  rt.fn.extend({
    prop: function(e, t) {
      return At(this, rt.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = rt.propFix[e] || e,
      this.each(function() {
        try {
          this[e] = void 0,
          delete this[e]
        } catch(t) {}
      })
    }
  }),
  rt.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, t, n) {
      var i, r, o, a = e.nodeType;
      return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: e[t] = n: r && "get" in r && null !== (i = r.get(e, t)) ? i: e[t]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = rt.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : _n.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }),
  nt.hrefNormalized || rt.each(["href", "src"],
  function(e, t) {
    rt.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }),
  nt.optSelected || (rt.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
      null
    }
  }),
  rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
  function() {
    rt.propFix[this.toLowerCase()] = this
  }),
  nt.enctype || (rt.propFix.enctype = "encoding");
  var jn = /[\t\r\n\f]/g;
  rt.fn.extend({
    addClass: function(e) {
      var t, n, i, r, o, a, s = 0,
      l = this.length,
      u = "string" == typeof e && e;
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).addClass(e.call(this, t, this.className))
      });
      if (u) for (t = (e || "").match(bt) || []; l > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
        a = rt.trim(i),
        n.className !== a && (n.className = a)
      }
      return this
    },
    removeClass: function(e) {
      var t, n, i, r, o, a, s = 0,
      l = this.length,
      u = 0 === arguments.length || "string" == typeof e && e;
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).removeClass(e.call(this, t, this.className))
      });
      if (u) for (t = (e || "").match(bt) || []; l > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
        for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
        a = e ? rt.trim(i) : "",
        n.className !== a && (n.className = a)
      }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ?
      function(n) {
        rt(this).toggleClass(e.call(this, n, this.className, t), t)
      }: function() {
        if ("string" === n) for (var t, i = 0,
        r = rt(this), o = e.match(bt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else(n === Ct || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": rt._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ",
      n = 0,
      i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0) return ! 0;
      return ! 1
    }
  }),
  rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
  function(e, t) {
    rt.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }),
  rt.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var Ln = rt.now(),
  Mn = /\?/,
  Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  rt.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, i = null,
    r = rt.trim(t + "");
    return r && !rt.trim(r.replace(Dn,
    function(e, t, r, o) {
      return n && t && (i = 0),
      0 === i ? e: (n = r || t, i += !o - !r, "")
    })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
  },
  rt.parseXML = function(t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
    } catch(r) {
      n = void 0
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t),
    n
  };
  var Fn, Hn, $n = /#.*$/,
  qn = /([?&])_=[^&]*/,
  On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Wn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Pn = /^(?:GET|HEAD)$/,
  Rn = /^\/\//,
  Bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
  zn = {},
  In = {},
  Xn = "*/".concat("*");
  try {
    Hn = location.href
  } catch(Un) {
    Hn = ht.createElement("a"),
    Hn.href = "",
    Hn = Hn.href
  }
  Fn = Bn.exec(Hn.toLowerCase()) || [],
  rt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Hn,
      type: "GET",
      isLocal: Wn.test(Fn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": rt.parseJSON,
        "text xml": rt.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? R(R(e, rt.ajaxSettings), t) : R(rt.ajaxSettings, e)
    },
    ajaxPrefilter: W(zn),
    ajaxTransport: W(In),
    ajax: function(e, t) {
      function n(e, t, n, i) {
        var r, c, v, y, x, T = t;
        2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = B(d, w, n)), y = z(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", r ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess": "ajaxError", [w, d, r ? c: v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --rt.active || rt.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (t = e, e = void 0),
      t = t || {};
      var i, r, o, a, s, l, u, c, d = rt.ajaxSetup({},
      t),
      f = d.context || d,
      p = d.context && (f.nodeType || f.jquery) ? rt(f) : rt.event,
      h = rt.Deferred(),
      m = rt.Callbacks("once memory"),
      g = d.statusCode || {},
      v = {},
      y = {},
      b = 0,
      x = "canceled",
      w = {
        readyState: 0,
        getResponseHeader: function(e) {
          var t;
          if (2 === b) {
            if (!c) for (c = {}; t = On.exec(a);) c[t[1].toLowerCase()] = t[2];
            t = c[e.toLowerCase()]
          }
          return null == t ? null: t
        },
        getAllResponseHeaders: function() {
          return 2 === b ? a: null
        },
        setRequestHeader: function(e, t) {
          var n = e.toLowerCase();
          return b || (e = y[n] = y[n] || e, v[e] = t),
          this
        },
        overrideMimeType: function(e) {
          return b || (d.mimeType = e),
          this
        },
        statusCode: function(e) {
          var t;
          if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
          else w.always(e[w.status]);
          return this
        },
        abort: function(e) {
          var t = e || x;
          return u && u.abort(t),
          n(0, t),
          this
        }
      };
      if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Hn) + "").replace($n, "").replace(Rn, Fn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Bn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Fn[1] && i[2] === Fn[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Fn[3] || ("http:" === Fn[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), P(zn, d, t, w), 2 === b) return w;
      l = d.global,
      l && 0 === rt.active++&&rt.event.trigger("ajaxStart"),
      d.type = d.type.toUpperCase(),
      d.hasContent = !Pn.test(d.type),
      o = d.url,
      d.hasContent || (d.data && (o = d.url += (Mn.test(o) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = qn.test(o) ? o.replace(qn, "$1_=" + Ln++) : o + (Mn.test(o) ? "&": "?") + "_=" + Ln++)),
      d.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])),
      (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
      w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : d.accepts["*"]);
      for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
      if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
      x = "abort";
      for (r in {
        success: 1,
        error: 1,
        complete: 1
      }) w[r](d[r]);
      if (u = P(In, d, t, w)) {
        w.readyState = 1,
        l && p.trigger("ajaxSend", [w, d]),
        d.async && d.timeout > 0 && (s = setTimeout(function() {
          w.abort("timeout")
        },
        d.timeout));
        try {
          b = 1,
          u.send(v, n)
        } catch(T) {
          if (! (2 > b)) throw T;
          n( - 1, T)
        }
      } else n( - 1, "No Transport");
      return w
    },
    getJSON: function(e, t, n) {
      return rt.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return rt.get(e, void 0, t, "script")
    }
  }),
  rt.each(["get", "post"],
  function(e, t) {
    rt[t] = function(e, n, i, r) {
      return rt.isFunction(n) && (r = r || i, i = n, n = void 0),
      rt.ajax({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      })
    }
  }),
  rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
  function(e, t) {
    rt.fn[t] = function(e) {
      return this.on(t, e)
    }
  }),
  rt._evalUrl = function(e) {
    return rt.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  },
  rt.fn.extend({
    wrapAll: function(e) {
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]),
        t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return this.each(rt.isFunction(e) ?
      function(t) {
        rt(this).wrapInner(e.call(this, t))
      }: function() {
        var t = rt(this),
        n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = rt.isFunction(e);
      return this.each(function(n) {
        rt(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  rt.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
  },
  rt.expr.filters.visible = function(e) {
    return ! rt.expr.filters.hidden(e)
  };
  var Vn = /%20/g,
  Jn = /\[\]$/,
  Gn = /\r?\n/g,
  Yn = /^(?:submit|button|image|reset|file)$/i,
  Qn = /^(?:input|select|textarea|keygen)/i;
  rt.param = function(e, t) {
    var n, i = [],
    r = function(e, t) {
      t = rt.isFunction(t) ? t() : null == t ? "": t,
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e,
    function() {
      r(this.name, this.value)
    });
    else for (n in e) I(n, e[n], t, r);
    return i.join("&").replace(Vn, "+")
  },
  rt.fn.extend({
    serialize: function() {
      return rt.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = rt.prop(this, "elements");
        return e ? rt.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !rt(this).is(":disabled") && Qn.test(this.nodeName) && !Yn.test(e) && (this.checked || !jt.test(e))
      }).map(function(e, t) {
        var n = rt(this).val();
        return null == n ? null: rt.isArray(n) ? rt.map(n,
        function(e) {
          return {
            name: t.name,
            value: e.replace(Gn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Gn, "\r\n")
        }
      }).get()
    }
  }),
  rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
  function() {
    return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
  }: X;
  var Kn = 0,
  Zn = {},
  ei = rt.ajaxSettings.xhr();
  e.ActiveXObject && rt(e).on("unload",
  function() {
    for (var e in Zn) Zn[e](void 0, !0)
  }),
  nt.cors = !!ei && "withCredentials" in ei,
  ei = nt.ajax = !!ei,
  ei && rt.ajaxTransport(function(e) {
    if (!e.crossDomain || nt.cors) {
      var t;
      return {
        send: function(n, i) {
          var r, o = e.xhr(),
          a = ++Kn;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) o[r] = e.xhrFields[r];
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
          e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
          o.send(e.hasContent && e.data || null),
          t = function(n, r) {
            var s, l, u;
            if (t && (r || 4 === o.readyState)) if (delete Zn[a], t = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
            else {
              u = {},
              s = o.status,
              "string" == typeof o.responseText && (u.text = o.responseText);
              try {
                l = o.statusText
              } catch(c) {
                l = ""
              }
              s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
            }
            u && i(s, l, u, o.getAllResponseHeaders())
          },
          e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t: t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }
  }),
  rt.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return rt.globalEval(e),
        e
      }
    }
  }),
  rt.ajaxPrefilter("script",
  function(e) {
    void 0 === e.cache && (e.cache = !1),
    e.crossDomain && (e.type = "GET", e.global = !1)
  }),
  rt.ajaxTransport("script",
  function(e) {
    if (e.crossDomain) {
      var t, n = ht.head || rt("head")[0] || ht.documentElement;
      return {
        send: function(i, r) {
          t = ht.createElement("script"),
          t.async = !0,
          e.scriptCharset && (t.charset = e.scriptCharset),
          t.src = e.url,
          t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
          },
          n.insertBefore(t, n.firstChild)
        },
        abort: function() {
          t && t.onload(void 0, !0)
        }
      }
    }
  });
  var ti = [],
  ni = /(=)\?(?=&|$)|\?\?/;
  rt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = ti.pop() || rt.expando + "_" + Ln++;
      return this[e] = !0,
      e
    }
  }),
  rt.ajaxPrefilter("json jsonp",
  function(t, n, i) {
    var r, o, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
    return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (Mn.test(t.url) ? "&": "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return a || rt.error(r + " was not called"),
      a[0]
    },
    t.dataTypes[0] = "json", o = e[r], e[r] = function() {
      a = arguments
    },
    i.always(function() {
      e[r] = o,
      t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)),
      a && rt.isFunction(o) && o(a[0]),
      a = o = void 0
    }), "script") : void 0
  }),
  rt.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1),
    t = t || ht;
    var i = dt.exec(e),
    r = !n && [];
    return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
  };
  var ii = rt.fn.load;
  rt.fn.load = function(e, t, n) {
    if ("string" != typeof e && ii) return ii.apply(this, arguments);
    var i, r, o, a = this,
    s = e.indexOf(" ");
    return s >= 0 && (i = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)),
    rt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
    a.length > 0 && rt.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: t
    }).done(function(e) {
      r = arguments,
      a.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
    }).complete(n &&
    function(e, t) {
      a.each(n, r || [e.responseText, t, e])
    }),
    this
  },
  rt.expr.filters.animated = function(e) {
    return rt.grep(rt.timers,
    function(t) {
      return e === t.elem
    }).length
  };
  var ri = e.document.documentElement;
  rt.offset = {
    setOffset: function(e, t, n) {
      var i, r, o, a, s, l, u, c = rt.css(e, "position"),
      d = rt(e),
      f = {};
      "static" === c && (e.style.position = "relative"),
      s = d.offset(),
      o = rt.css(e, "top"),
      l = rt.css(e, "left"),
      u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1,
      u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0),
      rt.isFunction(t) && (t = t.call(e, n, s)),
      null != t.top && (f.top = t.top - s.top + a),
      null != t.left && (f.left = t.left - s.left + r),
      "using" in t ? t.using.call(e, f) : d.css(f)
    }
  },
  rt.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this: this.each(function(t) {
        rt.offset.setOffset(this, e, t)
      });
      var t, n, i = {
        top: 0,
        left: 0
      },
      r = this[0],
      o = r && r.ownerDocument;
      return o ? (t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== Ct && (i = r.getBoundingClientRect()), n = V(o), {
        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : i) : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
          top: 0,
          left: 0
        },
        i = this[0];
        return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top += rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)),
        {
          top: t.top - n.top - rt.css(i, "marginTop", !0),
          left: t.left - n.left - rt.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
        return e || ri
      })
    }
  }),
  rt.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  },
  function(e, t) {
    var n = /Y/.test(t);
    rt.fn[e] = function(i) {
      return At(this,
      function(e, i, r) {
        var o = V(e);
        return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r: rt(o).scrollTop()) : e[i] = r)
      },
      e, i, arguments.length, null)
    }
  }),
  rt.each(["top", "left"],
  function(e, t) {
    rt.cssHooks[t] = k(nt.pixelPosition,
    function(e, n) {
      return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px": n) : void 0
    })
  }),
  rt.each({
    Height: "height",
    Width: "width"
  },
  function(e, t) {
    rt.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    },
    function(n, i) {
      rt.fn[i] = function(i, r) {
        var o = arguments.length && (n || "boolean" != typeof i),
        a = n || (i === !0 || r === !0 ? "margin": "border");
        return At(this,
        function(t, n, i) {
          var r;
          return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, a) : rt.style(t, n, i, a)
        },
        t, o ? i: void 0, o, null)
      }
    })
  }),
  rt.fn.size = function() {
    return this.length
  },
  rt.fn.andSelf = rt.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [],
  function() {
    return rt
  });
  var oi = e.jQuery,
  ai = e.$;
  return rt.noConflict = function(t) {
    return e.$ === rt && (e.$ = ai),
    t && e.jQuery === rt && (e.jQuery = oi),
    rt
  },
  typeof t === Ct && (e.jQuery = e.$ = rt),
  rt
}),
$(function() {
  Main.init()
});
var Main = {
  _touch: null,
  _isReadyElements: [".global-header", "#waves", ".cover-title-lv1", ".cover-title-lv2", ".cover-navigation", ".works-content-item", ".about-content-title"],
  scrollAnimations: [],
  init: function() {
    Main.imagePreload = new ImagePreload,
    Main.svgFallback = new SvgFallback,
    Main.smoothScroll = new SmoothScroll(".js-smooth"),
    Main._animationLength = Main._isReadyElements.length,
    EnterFrameManager.init(),
    EnterFrameManager.add(Main.onEnterFrame),
    $(window).resize(function() {
      Main._onResize($(".cover"))
    }),
    $(window).on("orientationchange",
    function() {
      Main._onResize($(".cover"))
    }),
    $(window).resize(),
    $(window).on("load scroll",
    function() {
      Main._isScroll()
    }),
    Main._touch = "undefined" != typeof window.ontouchstart,
    !Main._touch == !0 && Main._scrollAnimationControler()
  },
  _onResize: function(e) {
    this.height = $(window).height(),
    e.height(this.height)
  },
  _start: function() {
    if ($(".loading").addClass("is-end"), setTimeout(function() {
      $(".wrapper").show()
    },
    100), setTimeout(function() {
      $(".loading").hide(),
      Main._loadAnimationControler()
    },
    600), !Main._touch == !0) for (var e = Main._animationLength; e >= 0; e--) $(Main._isReadyElements[e]).addClass("is-ready")
  },
  onEnterFrame: function() {
    for (var e = Main.scrollAnimations.length,
    t = 0; e > t; t++) {
      var n = Main.scrollAnimations[t];
      n.setScrollTop(EnterFrameManager.scrollTop)
    }
  },
  _isScroll: function() {
    $(window).scrollTop() > 200 ? $(".global-header").addClass("is-scroll") : $(".global-header").removeClass("is-scroll")
  },
  _loadAnimationControler: function() {
    Main.loadAnimation1 = new LoadAnimationControler(".cover-title-lv1", 0),
    Main.loadAnimation2 = new LoadAnimationControler(".cover-title-lv2", 100),
    Main.loadAnimation3 = new LoadAnimationControler(".global-header", 400),
    Main.loadAnimation4 = new LoadAnimationControler(".cover-navigation", 400),
    Main.loadAnimation5 = new LoadAnimationControler("#waves", 1e3)
  },
  _scrollAnimationControler: function() {
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-08", 400)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-07", 1100)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-06", 1800)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-05", 2500)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-04", 3200)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-03", 3900)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-02", 4600)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-works-01", 5300)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-about-01", 6200)),
    Main.scrollAnimations.push(new ScrollAnimationControler(".js-scroll-about-02", 6500))
  }
},
LoadAnimationControler = function(e, t) {
  this._el = $(e),
  this._delay = t,
  this._startClass,
  this._endClass,
  this._init.apply(this)
};
LoadAnimationControler.prototype = {
  _init: function() {
    this._startClass = "is-start",
    this._ready()
  },
  _ready: function() {
    setTimeout($.proxy(function() {
      this._start()
    },
    this), this._delay)
  },
  _start: function() {
    this._el.addClass(this._startClass)
  }
};
var ScrollAnimationControler = function(e, t, n) {
  this.$_el = $(e),
  this._scrollTop = t,
  this._flg = n,
  this._startClass,
  this._endClass,
  this._isStart = !1,
  this._init.apply(this)
};
ScrollAnimationControler.prototype = {
  _init: function() {
    this._startClass = "is-start"
  },
  setScrollTop: function(e) {
    this._scrollTop < e && this._start()
  },
  _start: function() {
    this._isStart || (this._flg !== !0 && this.$_el.addClass(this._startClass), this._isStart = !0)
  }
};
var EnterFrameManager = {
  $window: null,
  _length: 0,
  _functions: [],
  _timer: null,
  _time: 0,
  _ftp: 60,
  scrollTop: 0,
  init: function() {
    EnterFrameManager.$window = $(window),
    EnterFrameManager._time = 1e3 / EnterFrameManager._ftp,
    this.update()
  },
  update: function() {
    EnterFrameManager.scrollTop = EnterFrameManager.$window.scrollTop();
    for (var e = 0; e < EnterFrameManager._length; e++) {
      var t = EnterFrameManager._functions[e];
      t()
    }
    EnterFrameManager._timer = setTimeout(EnterFrameManager.update, EnterFrameManager._time)
  },
  add: function(e) {
    EnterFrameManager._functions.push(e),
    EnterFrameManager._length = EnterFrameManager._functions.length
  }
},
ImagePreload = function() {
  this._img,
  this._timer,
  this._imgList = [],
  this._preloadImages = [],
  this._init.apply(this)
};
ImagePreload.prototype = {
  _init: function() {
    this._preloadImages.push("images/bg-folio.png", "images/folio-04.jpg", "images/folio-05.jpg",  "images/folio-07.jpg", "images/folio-08.jpg"),
    this._update()
  },
  _update: function() {
    for (var e = this._preloadImages.length,
    t = 0; e > t; t++) this._img = new Image,
    this._img.src = this._preloadImages[t],
    this._imgList.push(this._img);
    this._timer = setInterval($.proxy(this._check, this), 200)
  },
  _check: function() {
    for (var e = !1,
    t = this._preloadImages.length,
    n = 0; t > n; n++) {
      if (!this._imgList[n].complete) return;
      if (e = !0, !(this._imgList[n].width * this._imgList[n].height)) return;
      e = !0
    }
    e === !0 && (clearInterval(this._timer), Main._start())
  }
},
window.Modernizr = function(e, t, n) {
  function i(e) {
    p.cssText = e
  }
  function r(e, t) {
    return typeof e === t
  }
  var o, a, s, l = "2.8.3",
  u = {},
  c = t.documentElement,
  d = "modernizr",
  f = t.createElement(d),
  p = f.style,
  h = ({}.toString, {
    svg: "http://www.w3.org/2000/svg"
  }),
  m = {},
  g = [],
  v = g.slice,
  y = {}.hasOwnProperty;
  s = r(y, "undefined") || r(y.call, "undefined") ?
  function(e, t) {
    return t in e && r(e.constructor.prototype[t], "undefined")
  }: function(e, t) {
    return y.call(e, t)
  },
  Function.prototype.bind || (Function.prototype.bind = function(e) {
    var t = this;
    if ("function" != typeof t) throw new TypeError;
    var n = v.call(arguments, 1),
    i = function() {
      if (this instanceof i) {
        var r = function() {};
        r.prototype = t.prototype;
        var o = new r,
        a = t.apply(o, n.concat(v.call(arguments)));
        return Object(a) === a ? a: o
      }
      return t.apply(e, n.concat(v.call(arguments)))
    };
    return i
  }),
  m.svg = function() {
    return !! t.createElementNS && !!t.createElementNS(h.svg, "svg").createSVGRect
  };
  for (var b in m) s(m, b) && (a = b.toLowerCase(), u[a] = m[b](), g.push((u[a] ? "": "no-") + a));
  return u.addTest = function(e, t) {
    if ("object" == typeof e) for (var i in e) s(e, i) && u.addTest(i, e[i]);
    else {
      if (e = e.toLowerCase(), u[e] !== n) return u;
      t = "function" == typeof t ? t() : t,
      "undefined" != typeof enableClasses && enableClasses && (c.className += " " + (t ? "": "no-") + e),
      u[e] = t
    }
    return u
  },
  i(""),
  f = o = null,
  u._version = l,
  u
} (this, this.document),
!
function(e, t) {
  "use strict";
  "function" == typeof define && "object" == typeof define.amd ? define([],
  function() {
    return t(e)
  }) : e.SineWaves = t(e)
} (this,
function() {
  "use strict";
  function e(e) {
    if (this.options = l.defaults(this.options, e), this.el = this.options.el, delete this.options.el, !this.el) throw "No Canvas Selected";
    if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw "No waves specified";
    this.dpr = window.devicePixelRatio || 1,
    this.updateDimensions(),
    window.addEventListener("resize", this.updateDimensions.bind(this)),
    this.setupUserFunctions(),
    this.easeFn = l.getFn(p, this.options.ease, "linear"),
    this.rotation = l.degreesToRadians(this.options.rotate),
    l.isType(this.options.running, "boolean") && (this.running = this.options.running),
    this.setupWaveFns(),
    this.loop()
  }
  function t(e, t) {
    return l.isType(e, "number") ? e: (e = e.toString(), e.indexOf("%") > -1 ? (e = parseFloat(e), e > 1 && (e /= 100), t * e) : e.indexOf("px") > -1 ? parseInt(e, 10) : void 0)
  }
  Function.prototype.bind || (Function.prototype.bind = function(e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
    n = this,
    i = function() {},
    r = function() {
      return n.apply(this instanceof i && e ? this: e, t.concat(Array.prototype.slice.call(arguments)))
    };
    return i.prototype = this.prototype,
    r.prototype = new i,
    r
  });
  for (var n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[n[i] + "RequestAnimationFrame"],
  window.cancelAnimationFrame = window[n[i] + "CancelAnimationFrame"] || window[n[i] + "CancelRequestAnimationFrame"];
  if (!window.requestAnimationFrame) {
    var r = 0;
    window.requestAnimationFrame = function(e) {
      var t = (new Date).getTime(),
      n = Math.max(0, 16 - (t - r)),
      i = window.setTimeout(function() {
        e(t + n)
      },
      n);
      return r = t + n,
      i
    }
  }
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
    clearTimeout(e)
  });
  var o = Math.PI / 180,
  a = 2 * Math.PI,
  s = Math.PI / 2,
  l = {},
  u = l.isType = function(e, t) {
    var n = {}.toString.call(e).toLowerCase();
    return n === "[object " + t.toLowerCase() + "]"
  },
  c = l.isFunction = function(e) {
    return u(e, "function")
  },
  d = l.isString = function(e) {
    return u(e, "string")
  },
  f = (l.isNumber = function(e) {
    return u(e, "number")
  },
  l.shallowClone = function(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
  }),
  p = (l.defaults = function(e, t) {
    u(t, "object") || (t = {});
    var n = f(e);
    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    return n
  },
  l.degreesToRadians = function(e) {
    if (!u(e, "number")) throw new TypeError("Degrees is not a number");
    return e * o
  },
  l.getFn = function(e, t, n) {
    return c(t) ? t: d(t) && c(e[t.toLowerCase()]) ? e[t.toLowerCase()] : e[n]
  },
  {});
  p.linear = function(e, t) {
    return t
  },
  p.sinein = function(e, t) {
    return t * (Math.sin(e * Math.PI - s) + 1) * .5
  },
  p.sineout = function(e, t) {
    return t * (Math.sin(e * Math.PI + s) + 1) * .5
  },
  p.sineinout = function(e, t) {
    return t * (Math.sin(e * a - s) + 1) * .5
  };
  var h = {};
  h.sine = function(e) {
    return Math.sin(e)
  },
  h.sin = h.sine,
  h.sign = function(e) {
    return e = +e,
    0 === e || isNaN(e) ? e: e > 0 ? 1 : -1
  },
  h.square = function(e) {
    return h.sign(Math.sin(e * a))
  },
  h.sawtooth = function(e) {
    return 2 * (e - Math.floor(e + .5))
  },
  h.triangle = function(e) {
    return Math.abs(h.sawtooth(e))
  },
  e.prototype.options = {
    speed: 10,
    rotate: 0,
    ease: "Linear",
    wavesWidth: "95%"
  },
  e.prototype.setupWaveFns = function() {
    for (var e = -1,
    t = this.waves.length; ++e < t;) this.waves[e].waveFn = l.getFn(h, this.waves[e].type, "sine")
  },
  e.prototype.setupUserFunctions = function() {
    l.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))),
    l.isFunction(this.options.initialize) && this.options.initialize.call(this)
  };
  var m = {
    timeModifier: 1,
    amplitude: 50,
    wavelength: 50,
    segmentLength: 10,
    lineWidth: 1,
    strokeStyle: "rgba(255, 255, 255, 0.2)",
    type: "Sine"
  };
  return e.prototype.getDimension = function(e) {
    return l.isNumber(this.options[e]) ? this.options[e] : l.isFunction(this.options[e]) ? this.options[e].call(this, this.el) : "width" === e ? this.el.clientWidth: "height" === e ? this.el.clientHeight: void 0
  },
  e.prototype.updateDimensions = function() {
    var e = this.getDimension("width"),
    n = this.getDimension("height");
    this.width = this.el.width = e * this.dpr,
    this.height = this.el.height = n * this.dpr,
    this.el.style.width = e + "px",
    this.el.style.height = n + "px",
    this.waveWidth = t(this.options.wavesWidth, this.width),
    this.waveLeft = (this.width - this.waveWidth) / 2,
    this.yAxis = this.height / 2
  },
  e.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },
  e.prototype.time = 0,
  e.prototype.update = function(e) {
    this.time = this.time - .007,
    "undefined" == typeof e && (e = this.time);
    var t = -1,
    n = this.waves.length;
    for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate( - this.width / 2, -this.height / 2)); ++t < n;) {
      var i = this.waves[t].timeModifier || 1;
      this.drawWave(e * i, this.waves[t])
    }
    this.ctx.restore(),
    t = void 0,
    n = void 0
  },
  e.prototype.getPoint = function(e, t, n) {
    var i = e * this.options.speed + ( - this.yAxis + t) / n.wavelength,
    r = n.waveFn.call(this, i, h),
    o = this.easeFn.call(this, t / this.waveWidth, n.amplitude);
    return i = t + this.waveLeft,
    r = o * r + this.yAxis,
    {
      x: i,
      y: r
    }
  },
  e.prototype.drawWave = function(e, t) {
    t = l.defaults(m, t),
    this.ctx.lineWidth = t.lineWidth * this.dpr,
    this.ctx.strokeStyle = t.strokeStyle,
    this.ctx.lineCap = "butt",
    this.ctx.lineJoin = "round",
    this.ctx.beginPath(),
    this.ctx.moveTo(0, this.yAxis),
    this.ctx.lineTo(this.waveLeft, this.yAxis);
    var n, i;
    for (n = 0; n < this.waveWidth; n += t.segmentLength) i = this.getPoint(e, n, t),
    this.ctx.lineTo(i.x, i.y),
    i = void 0;
    n = void 0,
    t = void 0,
    this.ctx.lineTo(this.width, this.yAxis),
    this.ctx.stroke()
  },
  e.prototype.running = !0,
  e.prototype.loop = function() {
    this.running === !0 && this.update(),
    window.requestAnimationFrame(this.loop.bind(this))
  },
  e.prototype.Waves = h,
  e.prototype.Ease = p,
  e
});
var waves = new SineWaves({
  el: document.getElementById("waves"),
  speed: 4,
  width: function() {
    return $(window).width()
  },
  height: function() {
    return $(window).height()
  },
  ease: "SineInOut",
  wavesWidth: "75%",
  waves: [{
    timeModifier: 4,
    lineWidth: 1,
    amplitude: -25,
    wavelength: 50
  },
  {
    timeModifier: 1.4,
    lineWidth: 3,
    amplitude: -50,
    wavelength: 100
  },
  {
    timeModifier: 2,
    lineWidth: 1,
    amplitude: -100,
    wavelength: 100
  },
  {
    timeModifier: 1,
    lineWidth: 2,
    amplitude: -200,
    wavelength: 200
  },
  {
    timeModifier: .5,
    lineWidth: 1,
    amplitude: -400,
    wavelength: 400
  }],
  resizeEvent: function() {
    var e = this.ctx.createLinearGradient(0, 0, this.width, 0);
    e.addColorStop(0, "rgba(255, 255, 255, 0.5)"),
    e.addColorStop(.5, "rgba(34, 34, 34, 0.3)"),
    e.addColorStop(1, "rgba(255, 255, 255, 0.5)");
    for (var t = -1,
    n = this.waves.length; ++t < n;) this.waves[t].strokeStyle = e;
    t = void 0,
    n = void 0,
    e = void 0
  }
}),
SmoothScroll = function(e) {
  this.$_smooth = $(e),
  this.$_fixedElHeight = null,
  this._href = null,
  this._top = 0,
  this.$_relativeEl = null,
  this.$_linkedTarget = null,
  this._init.apply(this)
};
SmoothScroll.prototype = {
  _init: function() {
    this.$_fixedElHeight = $(".global-heiader").height(),
    this.$_relativeEl = $("body, html"),
    this.$_smooth.on("click", $.proxy(this._onClick, this))
  },
  _onClick: function(e) {
    return this._href = $(e.target).attr("href"),
    this.$_linkedTarget = $(this._href),
    this._top = this.$_linkedTarget.offset().top - this.$_fixedElHeight,
    this.$_relativeEl.animate({
      scrollTop: this._top
    },
    600, "swing"),
    !1
  }
};
var SvgFallback = function() {
  this._init.apply(this)
};
SvgFallback.prototype = {
  _init: function() {
    Modernizr.svg || this._update()
  },
  _update: function() {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace(/\.svg/, ".png"))
    })
  }
};
