/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!(function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = {
            i: r,
            l: !1,
            exports: {}
        });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function(t, e, r) {
            n.o(t, e) ||
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                });
        }),
        (n.r = function(t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
        }),
        (n.t = function(t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
            )
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function(e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 137));
})([
    function(t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function(t, e, n) {
        var r = n(48)("wks"),
            i = n(30),
            o = n(5).Symbol,
            a = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = (a && o[t]) || (a ? o : i)("Symbol." + t));
        }).store = r;
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineConstants = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0);
        var r = p(n(58)),
            i = p(n(122)),
            o = p(n(123)),
            a = p(n(124)),
            u = p(n(125)),
            c = p(n(75)),
            s = p(n(76)),
            f = p(n(249)),
            l = p(n(126)),
            d = p(n(254));

        function p(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
        }
        (e.IX2BrowserSupport = r),
            (e.IX2Easings = i),
            (e.IX2EasingUtils = o),
            (e.IX2EngineActionTypes = a),
            (e.IX2EngineConstants = s),
            (e.IX2EngineEventTypes = u),
            (e.IX2EngineItemTypes = c),
            (e.IX2ElementsReducer = f),
            (e.IX2VanillaPlugins = l),
            (e.IX2VanillaUtils = d);
    },
    function(t, e, n) {
        var r = n(104),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function(t, e) {
        var n = (t.exports =
            "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function(t, e) {
        var n = (t.exports = {
            version: "2.6.5"
        });
        "number" == typeof __e && (__e = n);
    },
    function(t, e, n) {
        var r = n(19),
            i = n(85),
            o = n(45),
            a = Object.defineProperty;
        e.f = n(8)
            ? Object.defineProperty
            : function(t, e, n) {
                  if ((r(t), (e = o(e, !0)), r(n), i))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function(t, e, n) {
        t.exports = !n(21)(function() {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a
            );
        });
    },
    function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e);
        };
    },
    function(t, e, n) {
        var r = n(183),
            i = n(237),
            o = n(72),
            a = n(0),
            u = n(244);
        t.exports = function(t) {
            return "function" == typeof t
                ? t
                : null == t
                ? o
                : "object" == typeof t
                ? a(t)
                    ? i(t[0], t[1])
                    : r(t)
                : u(t);
        };
    },
    function(t, e, n) {
        var r = n(195),
            i = n(200);
        t.exports = function(t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t;
        };
    },
    function(t, e, n) {
        "use strict";
        var r = {},
            i = {},
            o = [],
            a = window.Webflow || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            f = u.isFunction,
            l = (r._ = n(139)),
            d = (r.tram = n(81) && u.tram),
            p = !1,
            v = !1;

        function h(t) {
            r.env() &&
                (f(t.design) && c.on("__wf_design", t.design),
                f(t.preview) && c.on("__wf_preview", t.preview)),
                f(t.destroy) && c.on("__wf_destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function(t) {
                        if (p) return void t.ready();
                        if (l.contains(o, t.ready)) return;
                        o.push(t.ready);
                    })(t);
        }

        function E(t) {
            f(t.design) && c.off("__wf_design", t.design),
                f(t.preview) && c.off("__wf_preview", t.preview),
                f(t.destroy) && c.off("__wf_destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function(t) {
                        o = l.filter(o, function(e) {
                            return e !== t.ready;
                        });
                    })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function(t, e, n) {
                i[t] && E(i[t]);
                var r = (i[t] = e(u, l, n) || {});
                return h(r), r;
            }),
            (r.require = function(t) {
                return i[t];
            }),
            (r.push = function(t) {
                p ? f(t) && t() : a.push(t);
            }),
            (r.env = function(t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                        ? n && !e
                        : "slug" === t
                        ? n && window.__wf_slug
                        : "editor" === t
                        ? window.WebflowEditor
                        : "test" === t
                        ? window.__wf_test
                        : "frame" === t
                        ? window !== window.top
                        : void 0
                    : n;
            });
        var _,
            y = navigator.userAgent.toLowerCase(),
            g = (r.env.touch =
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)),
            m = (r.env.chrome =
                /chrome/.test(y) &&
                /Google/.test(navigator.vendor) &&
                parseInt(y.match(/chrome\/(\d+)\./)[1], 10)),
            I = (r.env.ios = /(ipod|iphone|ipad)/.test(y));
        (r.env.safari = /safari/.test(y) && !m && !I),
            g &&
                s.on("touchstart mousedown", function(t) {
                    _ = t.target;
                }),
            (r.validClick = g
                ? function(t) {
                      return t === _ || u.contains(t, _);
                  }
                : function() {
                      return !0;
                  });
        var O,
            T = "resize.webflow orientationchange.webflow load.webflow";

        function b(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = l.throttle(function(t) {
                    l.each(n, function(e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function(t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t));
                }),
                (r.off = function(t) {
                    n = arguments.length
                        ? l.filter(n, function(e) {
                              return e !== t;
                          })
                        : [];
                }),
                r
            );
        }

        function S(t) {
            f(t) && t();
        }

        function w() {
            O && (O.reject(), c.off("load", O.resolve)), (O = new u.Deferred()), c.on("load", O.resolve);
        }
        (r.resize = b(c, T)),
            (r.scroll = b(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow")),
            (r.redraw = b()),
            (r.location = function(t) {
                window.location = t;
            }),
            r.env() && (r.location = function() {}),
            (r.ready = function() {
                (p = !0), v ? ((v = !1), l.each(i, h)) : l.each(o, S), l.each(a, S), r.resize.up();
            }),
            (r.load = function(t) {
                O.then(t);
            }),
            (r.destroy = function(t) {
                (t = t || {}),
                    (v = !0),
                    c.triggerHandler("__wf_destroy"),
                    null != t.domready && (p = t.domready),
                    l.each(i, E),
                    r.resize.off(),
                    r.scroll.off(),
                    r.redraw.off(),
                    (o = []),
                    (a = []),
                    "pending" === O.state() && w();
            }),
            u(r.ready),
            w(),
            (t.exports = window.Webflow = r);
    },
    function(t, e, n) {
        var r = n(7),
            i = n(22);
        t.exports = n(8)
            ? function(t, e, n) {
                  return r.f(t, e, i(1, n));
              }
            : function(t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function(t, e, n) {
        var r = n(90),
            i = n(44);
        t.exports = function(t) {
            return r(i(t));
        };
    },
    function(t, e, n) {
        var r = n(24),
            i = n(196),
            o = n(197),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? i(t) : o(t);
        };
    },
    function(t, e, n) {
        var r = n(103),
            i = n(66);
        t.exports = function(t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function(t, e, n) {
        var r = n(5),
            i = n(6),
            o = n(84),
            a = n(14),
            u = n(9),
            c = function(t, e, n) {
                var s,
                    f,
                    l,
                    d = t & c.F,
                    p = t & c.G,
                    v = t & c.S,
                    h = t & c.P,
                    E = t & c.B,
                    _ = t & c.W,
                    y = p ? i : i[e] || (i[e] = {}),
                    g = y.prototype,
                    m = p ? r : v ? r[e] : (r[e] || {}).prototype;
                for (s in (p && (n = e), n))
                    ((f = !d && m && void 0 !== m[s]) && u(y, s)) ||
                        ((l = f ? m[s] : n[s]),
                        (y[s] =
                            p && "function" != typeof m[s]
                                ? n[s]
                                : E && f
                                ? o(l, r)
                                : _ && m[s] == l
                                ? (function(t) {
                                      var e = function(e, n, r) {
                                          if (this instanceof t) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new t();
                                                  case 1:
                                                      return new t(e);
                                                  case 2:
                                                      return new t(e, n);
                                              }
                                              return new t(e, n, r);
                                          }
                                          return t.apply(this, arguments);
                                      };
                                      return (e.prototype = t.prototype), e;
                                  })(l)
                                : h && "function" == typeof l
                                ? o(Function.call, l)
                                : l),
                        h && (((y.virtual || (y.virtual = {}))[s] = l), t & c.R && g && !g[s] && a(g, s, l)));
            };
        (c.F = 1),
            (c.G = 2),
            (c.S = 4),
            (c.P = 8),
            (c.B = 16),
            (c.W = 32),
            (c.U = 64),
            (c.R = 128),
            (t.exports = c);
    },
    function(t, e, n) {
        var r = n(20);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            };
        };
    },
    function(t, e) {
        t.exports = {};
    },
    function(t, e, n) {
        var r = n(3).Symbol;
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(40),
            i = 1 / 0;
        t.exports = function(t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                      return typeof t;
                  }
                : function(t) {
                      return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  };
        (e.clone = c),
            (e.addLast = l),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = h),
            (e.removeAt = E),
            (e.replaceAt = _),
            (e.getIn = y),
            (e.set = g),
            (e.setIn = m),
            (e.update = I),
            (e.updateIn = O),
            (e.merge = T),
            (e.mergeDeep = b),
            (e.mergeIn = S),
            (e.omit = w),
            (e.addDefaults = A);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";

        function o(t) {
            throw new Error(t);
        }

        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }
        var u = {}.hasOwnProperty;

        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }

        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++)
                d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var E = a(h);
                    if (E.length)
                        for (var _ = 0; _ <= E.length; _++) {
                            var y = E[_];
                            if (!t || void 0 === r[y]) {
                                var g = h[y];
                                e && f(r[y]) && f(g) && (g = s(t, e, r[y], g)),
                                    void 0 !== g && g !== r[y] && (u || ((u = !0), (r = c(r))), (r[y] = g));
                            }
                        }
                }
            }
            return r;
        }

        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }

        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }

        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }

        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }

        function v(t) {
            return t.length ? t.slice(1) : t;
        }

        function h(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }

        function E(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }

        function _(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }

        function y(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }

        function g(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }

        function m(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                      var o = void 0,
                          a = n[i];
                      o =
                          i === n.length - 1
                              ? r
                              : t(
                                    f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {},
                                    n,
                                    r,
                                    i + 1
                                );
                      return g(e, a, o);
                  })(t, e, n, 0)
                : n;
        }

        function I(t, e, n) {
            return g(t, e, n(null == t ? void 0 : t[e]));
        }

        function O(t, e, n) {
            return m(t, e, n(y(t, e)));
        }

        function T(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
                : s(!1, !1, t, e, n, r, i, o);
        }

        function b(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
                : s(!1, !0, t, e, n, r, i, o);
        }

        function S(t, e, n, r, i, o, a) {
            var u = y(t, e);
            null == u && (u = {});
            for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++)
                f[l - 7] = arguments[l];
            return m(
                t,
                e,
                f.length
                    ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f))
                    : s(!1, !1, u, n, r, i, o, a)
            );
        }

        function w(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f]);
            }
            return o;
        }

        function A(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
                : s(!0, !1, t, e, n, r, i, o);
        }
        var R = {
            clone: c,
            addLast: l,
            addFirst: d,
            removeLast: p,
            removeFirst: v,
            insert: h,
            removeAt: E,
            replaceAt: _,
            getIn: y,
            set: g,
            setIn: m,
            update: I,
            updateIn: O,
            merge: T,
            mergeDeep: b,
            mergeIn: S,
            omit: w,
            addDefaults: A
        };
        e.default = R;
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = a(n(140)),
            i = a(n(154)),
            o =
                "function" == typeof i.default && "symbol" == typeof r.default
                    ? function(t) {
                          return typeof t;
                      }
                    : function(t) {
                          return t &&
                              "function" == typeof i.default &&
                              t.constructor === i.default &&
                              t !== i.default.prototype
                              ? "symbol"
                              : typeof t;
                      };

        function a(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        e.default =
            "function" == typeof i.default && "symbol" === o(r.default)
                ? function(t) {
                      return void 0 === t ? "undefined" : o(t);
                  }
                : function(t) {
                      return t &&
                          "function" == typeof i.default &&
                          t.constructor === i.default &&
                          t !== i.default.prototype
                          ? "symbol"
                          : void 0 === t
                          ? "undefined"
                          : o(t);
                  };
    },
    function(t, e) {
        t.exports = !0;
    },
    function(t, e, n) {
        var r = n(89),
            i = n(49);
        t.exports =
            Object.keys ||
            function(t) {
                return r(t, i);
            };
    },
    function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    },
    function(t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    function(t, e, n) {
        var r = n(185),
            i = n(186),
            o = n(187),
            a = n(188),
            u = n(189);

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function(t, e, n) {
        var r = n(59);
        t.exports = function(t, e) {
            for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function(t, e, n) {
        var r = n(11)(Object, "create");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(209);
        t.exports = function(t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function(t, e, n) {
        var r = n(111),
            i = n(67),
            o = n(17);
        t.exports = function(t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function(t, e, n) {
        var r = n(227),
            i = n(12),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function() {
                    return arguments;
                })()
            )
                ? r
                : function(t) {
                      return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                  };
        t.exports = c;
    },
    function(t, e, n) {
        var r = n(70);
        t.exports = function(t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function(t, e, n) {
        var r = n(0),
            i = n(71),
            o = n(238),
            a = n(117);
        t.exports = function(t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function(t, e, n) {
        var r = n(16),
            i = n(12),
            o = "[object Symbol]";
        t.exports = function(t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(250),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        e.default = function(t, e, n) {
            return (
                e in t
                    ? (0, o.default)(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            );
        };
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(266),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        e.default =
            o.default ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
            };
    },
    function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function(t, e, n) {
        var r = n(20);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1);
        };
    },
    function(t, e, n) {
        var r = n(48)("keys"),
            i = n(30);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t));
        };
    },
    function(t, e, n) {
        var r = n(6),
            i = n(5),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: r.version,
            mode: n(28) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    },
    function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
        );
    },
    function(t, e, n) {
        var r = n(7).f,
            i = n(9),
            o = n(1)("toStringTag");
        t.exports = function(t, e, n) {
            t &&
                !i((t = n ? t : t.prototype), o) &&
                r(t, o, {
                    configurable: !0,
                    value: e
                });
        };
    },
    function(t, e, n) {
        var r = n(44);
        t.exports = function(t) {
            return Object(r(t));
        };
    },
    function(t, e, n) {
        e.f = n(1);
    },
    function(t, e, n) {
        var r = n(5),
            i = n(6),
            o = n(28),
            a = n(52),
            u = n(7).f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) ||
                t in e ||
                u(e, t, {
                    value: a.f(t)
                });
        };
    },
    function(t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function() {
                return o;
            }),
            n.d(e, "default", function() {
                return a;
            });
        var r = n(94),
            i = n(178),
            o = {
                INIT: "@@redux/INIT"
            };

        function a(t, e, n) {
            var u;
            if (("function" == typeof e && void 0 === n && ((n = e), (e = void 0)), void 0 !== n)) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e);
            }
            if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
            var c = t,
                s = e,
                f = [],
                l = f,
                d = !1;

            function p() {
                l === f && (l = f.slice());
            }

            function v() {
                return s;
            }

            function h(t) {
                if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                var e = !0;
                return (
                    p(),
                    l.push(t),
                    function() {
                        if (e) {
                            (e = !1), p();
                            var n = l.indexOf(t);
                            l.splice(n, 1);
                        }
                    }
                );
            }

            function E(t) {
                if (!Object(r.default)(t))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (void 0 === t.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (s = c(s, t));
                } finally {
                    d = !1;
                }
                for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
                return t;
            }
            return (
                E({
                    type: o.INIT
                }),
                ((u = {
                    dispatch: E,
                    subscribe: h,
                    getState: v,
                    replaceReducer: function(t) {
                        if ("function" != typeof t)
                            throw new Error("Expected the nextReducer to be a function.");
                        (c = t),
                            E({
                                type: o.INIT
                            });
                    }
                })[i.default] = function() {
                    var t,
                        e = h;
                    return (
                        ((t = {
                            subscribe: function(t) {
                                if ("object" != typeof t)
                                    throw new TypeError("Expected the observer to be an object.");

                                function n() {
                                    t.next && t.next(v());
                                }
                                return (
                                    n(),
                                    {
                                        unsubscribe: e(n)
                                    }
                                );
                            }
                        })[i.default] = function() {
                            return this;
                        }),
                        t
                    );
                }),
                u
            );
        }
    },
    function(t, e) {
        var n;
        n = (function() {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (0 === e.length)
                return function(t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function() {
                return i.reduceRight(function(t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        }
        n.r(e),
            n.d(e, "default", function() {
                return r;
            });
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0);
        var r,
            i = n(100),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        var a = (e.IS_BROWSER_ENV = "undefined" != typeof window),
            u = (e.withBrowser = function(t, e) {
                return a ? t() : e;
            }),
            c =
                ((e.ELEMENT_MATCHES = u(function() {
                    return (0,
                    o.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
                        return t in Element.prototype;
                    });
                })),
                (e.FLEX_PREFIXED = u(function() {
                    var t = document.createElement("i"),
                        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        for (var n = e.length, r = 0; r < n; r++) {
                            var i = e[r];
                            if (((t.style.display = i), t.style.display === i)) return i;
                        }
                        return "";
                    } catch (t) {
                        return "";
                    }
                }, "flex")),
                (e.TRANSFORM_PREFIXED = u(function() {
                    var t = document.createElement("i");
                    if (null == t.style.transform)
                        for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                            var i = e[r] + "Transform";
                            if (void 0 !== t.style[i]) return i;
                        }
                    return "transform";
                }, "transform")).split("transform")[0]);
        e.TRANSFORM_STYLE_PREFIXED = c ? c + "TransformStyle" : "transformStyle";
    },
    function(t, e) {
        t.exports = function(t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function(t, e, n) {
        var r = n(11)(n(3), "Map");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(201),
            i = n(208),
            o = n(210),
            a = n(211),
            u = n(212);

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
            return t;
        };
    },
    function(t, e, n) {
        (function(t) {
            var r = n(3),
                i = n(228),
                o = e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }.call(this, n(112)(t)));
    },
    function(t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            var i = typeof t;
            return (
                !!(e = null == e ? n : e) &&
                ("number" == i || ("symbol" != i && r.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
            );
        };
    },
    function(t, e, n) {
        var r = n(229),
            i = n(230),
            o = n(231),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function(t, e) {
        var n = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function(t, e, n) {
        var r = n(68),
            i = n(232),
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function(t, e) {
        var n = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function(t, e, n) {
        var r = n(233),
            i = n(60),
            o = n(234),
            a = n(235),
            u = n(114),
            c = n(16),
            s = n(105),
            f = s(r),
            l = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            h = c;
        ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) ||
            (i && "[object Map]" != h(new i())) ||
            (o && "[object Promise]" != h(o.resolve())) ||
            (a && "[object Set]" != h(new a())) ||
            (u && "[object WeakMap]" != h(new u()))) &&
            (h = function(t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = h);
    },
    function(t, e, n) {
        var r = n(39),
            i = n(25);
        t.exports = function(t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; ) t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function(t, e, n) {
        var r = n(0),
            i = n(40),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function(t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return (
                !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) ||
                a.test(t) ||
                !o.test(t) ||
                (null != e && t in Object(e))
            );
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return t;
        };
    },
    function(t, e, n) {
        var r = n(247);
        t.exports = function(t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function(t, e, n) {
        var r = n(4),
            i = n(40),
            o = NaN,
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            f = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        (e.TRANSFORM_MOVE = "TRANSFORM_MOVE"),
            (e.TRANSFORM_SCALE = "TRANSFORM_SCALE"),
            (e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE"),
            (e.TRANSFORM_SKEW = "TRANSFORM_SKEW"),
            (e.STYLE_OPACITY = "STYLE_OPACITY"),
            (e.STYLE_SIZE = "STYLE_SIZE"),
            (e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW"),
            (e.STYLE_FILTER = "STYLE_FILTER"),
            (e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR"),
            (e.STYLE_BORDER = "STYLE_BORDER"),
            (e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR"),
            (e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS"),
            (e.GENERAL_DISPLAY = "GENERAL_DISPLAY"),
            (e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION"),
            (e.GENERAL_START_ACTION = "GENERAL_START_ACTION"),
            (e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION"),
            (e.GENERAL_LOOP = "GENERAL_LOOP"),
            (e.OBJECT_VALUE = "OBJECT_VALUE"),
            (e.FADE_EFFECT = "FADE_EFFECT"),
            (e.SLIDE_EFFECT = "SLIDE_EFFECT"),
            (e.BLUR_EFFECT = "BLUR_EFFECT"),
            (e.GROW_EFFECT = "GROW_EFFECT"),
            (e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT"),
            (e.SHRINK_EFFECT = "SHRINK_EFFECT"),
            (e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT"),
            (e.SPIN_EFFECT = "SPIN_EFFECT"),
            (e.FLY_EFFECT = "FLY_EFFECT"),
            (e.POP_EFFECT = "POP_EFFECT"),
            (e.FLIP_EFFECT = "FLIP_EFFECT"),
            (e.JIGGLE_EFFECT = "JIGGLE_EFFECT"),
            (e.PULSE_EFFECT = "PULSE_EFFECT"),
            (e.DROP_EFFECT = "DROP_EFFECT"),
            (e.BLINK_EFFECT = "BLINK_EFFECT"),
            (e.BOUNCE_EFFECT = "BOUNCE_EFFECT"),
            (e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT"),
            (e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT"),
            (e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT"),
            (e.JELLO_EFFECT = "JELLO_EFFECT"),
            (e.PLUGIN_BODYMOVIN = "PLUGIN_BODYMOVIN");
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        (e.IX2_ID_DELIMITER = "|"),
            (e.WF_PAGE = "data-wf-page"),
            (e.W_MOD_JS = "w-mod-js"),
            (e.W_MOD_IX = "w-mod-ix"),
            (e.BOUNDARY_SELECTOR = ".w-dyn-item"),
            (e.CONFIG_X_VALUE = "xValue"),
            (e.CONFIG_Y_VALUE = "yValue"),
            (e.CONFIG_Z_VALUE = "zValue"),
            (e.CONFIG_VALUE = "value"),
            (e.CONFIG_X_UNIT = "xUnit"),
            (e.CONFIG_Y_UNIT = "yUnit"),
            (e.CONFIG_Z_UNIT = "zUnit"),
            (e.CONFIG_UNIT = "unit"),
            (e.TRANSFORM = "transform"),
            (e.TRANSLATE_X = "translateX"),
            (e.TRANSLATE_Y = "translateY"),
            (e.TRANSLATE_Z = "translateZ"),
            (e.TRANSLATE_3D = "translate3d"),
            (e.SCALE_X = "scaleX"),
            (e.SCALE_Y = "scaleY"),
            (e.SCALE_Z = "scaleZ"),
            (e.SCALE_3D = "scale3d"),
            (e.ROTATE_X = "rotateX"),
            (e.ROTATE_Y = "rotateY"),
            (e.ROTATE_Z = "rotateZ"),
            (e.SKEW = "skew"),
            (e.SKEW_X = "skewX"),
            (e.SKEW_Y = "skewY"),
            (e.OPACITY = "opacity"),
            (e.FILTER = "filter"),
            (e.WIDTH = "width"),
            (e.HEIGHT = "height"),
            (e.BACKGROUND_COLOR = "backgroundColor"),
            (e.BACKGROUND = "background"),
            (e.BORDER_COLOR = "borderColor"),
            (e.COLOR = "color"),
            (e.DISPLAY = "display"),
            (e.FLEX = "flex"),
            (e.WILL_CHANGE = "willChange"),
            (e.AUTO = "AUTO"),
            (e.COMMA_DELIMITER = ","),
            (e.COLON_DELIMITER = ":"),
            (e.BAR_DELIMITER = "|"),
            (e.CHILDREN = "CHILDREN"),
            (e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN"),
            (e.SIBLINGS = "SIBLINGS"),
            (e.PARENT = "PARENT"),
            (e.PRESERVE_3D = "preserve-3d"),
            (e.HTML_ELEMENT = "HTML_ELEMENT"),
            (e.PLAIN_OBJECT = "PLAIN_OBJECT"),
            (e.ABSTRACT_NODE = "ABSTRACT_NODE"),
            (e.RENDER_TRANSFORM = "RENDER_TRANSFORM"),
            (e.RENDER_GENERAL = "RENDER_GENERAL"),
            (e.RENDER_STYLE = "RENDER_STYLE"),
            (e.RENDER_PLUGIN = "RENDER_PLUGIN");
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0);
        var r,
            i = n(42),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      },
            a = n(2);
        var u = a.IX2EngineActionTypes,
            c = u.IX2_RAW_DATA_IMPORTED,
            s = u.IX2_SESSION_INITIALIZED,
            f = u.IX2_SESSION_STARTED,
            l = u.IX2_SESSION_STOPPED,
            d = u.IX2_PREVIEW_REQUESTED,
            p = u.IX2_PLAYBACK_REQUESTED,
            v = u.IX2_STOP_REQUESTED,
            h = u.IX2_CLEAR_REQUESTED,
            E = u.IX2_EVENT_LISTENER_ADDED,
            _ = u.IX2_EVENT_STATE_CHANGED,
            y = u.IX2_ANIMATION_FRAME_CHANGED,
            g = u.IX2_PARAMETER_CHANGED,
            m = u.IX2_INSTANCE_ADDED,
            I = u.IX2_INSTANCE_STARTED,
            O = u.IX2_INSTANCE_REMOVED,
            T = u.IX2_ELEMENT_STATE_CHANGED,
            b = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            S = u.IX2_VIEWPORT_WIDTH_CHANGED,
            w = u.IX2_MEDIA_QUERIES_DEFINED,
            A = a.IX2EngineItemTypes.GENERAL_START_ACTION,
            R = a.IX2VanillaUtils.reifyState;
        (e.rawDataImported = function(t) {
            return {
                type: c,
                payload: (0, o.default)({}, R(t))
            };
        }),
            (e.sessionInitialized = function(t) {
                var e = t.hasBoundaryNodes;
                return {
                    type: s,
                    payload: {
                        hasBoundaryNodes: e
                    }
                };
            }),
            (e.sessionStarted = function() {
                return {
                    type: f,
                    payload: {}
                };
            }),
            (e.sessionStopped = function() {
                return {
                    type: l,
                    payload: {}
                };
            }),
            (e.previewRequested = function(t) {
                var e = t.rawData;
                return {
                    type: d,
                    payload: {
                        rawData: e
                    }
                };
            }),
            (e.playbackRequested = function(t) {
                var e = t.actionTypeId,
                    n = void 0 === e ? A : e,
                    r = t.actionListId,
                    i = t.actionItemId,
                    o = t.eventId,
                    a = t.allowEvents,
                    u = t.immediate,
                    c = t.verbose,
                    s = t.rawData;
                return {
                    type: p,
                    payload: {
                        actionTypeId: n,
                        actionListId: r,
                        actionItemId: i,
                        eventId: o,
                        allowEvents: a,
                        immediate: u,
                        verbose: c,
                        rawData: s
                    }
                };
            }),
            (e.stopRequested = function(t) {
                return {
                    type: v,
                    payload: {
                        actionListId: t
                    }
                };
            }),
            (e.clearRequested = function() {
                return {
                    type: h,
                    payload: {}
                };
            }),
            (e.eventListenerAdded = function(t, e) {
                return {
                    type: E,
                    payload: {
                        target: t,
                        listenerParams: e
                    }
                };
            }),
            (e.eventStateChanged = function(t, e) {
                return {
                    type: _,
                    payload: {
                        stateKey: t,
                        newState: e
                    }
                };
            }),
            (e.animationFrameChanged = function(t, e) {
                return {
                    type: y,
                    payload: {
                        now: t,
                        parameters: e
                    }
                };
            }),
            (e.parameterChanged = function(t, e) {
                return {
                    type: g,
                    payload: {
                        key: t,
                        value: e
                    }
                };
            }),
            (e.instanceAdded = function(t) {
                return {
                    type: m,
                    payload: (0, o.default)({}, t)
                };
            }),
            (e.instanceStarted = function(t) {
                return {
                    type: I,
                    payload: {
                        instanceId: t
                    }
                };
            }),
            (e.instanceRemoved = function(t) {
                return {
                    type: O,
                    payload: {
                        instanceId: t
                    }
                };
            }),
            (e.elementStateChanged = function(t, e, n, r) {
                return {
                    type: T,
                    payload: {
                        elementId: t,
                        actionTypeId: e,
                        current: n,
                        actionItem: r
                    }
                };
            }),
            (e.actionListPlaybackChanged = function(t) {
                var e = t.actionListId,
                    n = t.isPlaying;
                return {
                    type: b,
                    payload: {
                        actionListId: e,
                        isPlaying: n
                    }
                };
            }),
            (e.viewportWidthChanged = function(t) {
                var e = t.width,
                    n = t.mediaQueries;
                return {
                    type: S,
                    payload: {
                        width: e,
                        mediaQueries: n
                    }
                };
            }),
            (e.mediaQueriesDefined = function() {
                return {
                    type: w,
                    payload: {}
                };
            });
    },
    function(t, e, n) {
        var r = n(134),
            i = n(79);

        function o(t, e) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__chain__ = !!e),
                (this.__index__ = 0),
                (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)), (o.prototype.constructor = o), (t.exports = o);
    },
    function(t, e) {
        t.exports = function() {};
    },
    function(t, e, n) {
        var r = n(134),
            i = n(79),
            o = 4294967295;

        function a(t) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = o),
                (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)), (a.prototype.constructor = a), (t.exports = a);
    },
    function(t, e, n) {
        "use strict";
        var r,
            i = n(27),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        window.tram = (function(t) {
            function e(t, e) {
                return new F.Bare().init(t, e);
            }

            function n(t) {
                return t.replace(/[A-Z]/g, function(t) {
                    return "-" + t.toLowerCase();
                });
            }

            function r(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }

            function i(t, e, n) {
                return "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
            }

            function a() {}

            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }

            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return (
                    $.test(t) || !Z.test(t) ? (r = parseInt(t, 10)) : Z.test(t) && (r = 1e3 * parseFloat(t)),
                    0 > r && (r = 0),
                    r == r ? r : n
                );
            }

            function s(t) {
                W.debug && window && window.console.warn(t);
            }
            var f = (function(t, e, n) {
                    function r(t) {
                        return "object" == (void 0 === t ? "undefined" : (0, o.default)(t));
                    }

                    function i(t) {
                        return "function" == typeof t;
                    }

                    function a() {}
                    return function o(u, c) {
                        function s() {
                            var t = new f();
                            return i(t.init) && t.init.apply(t, arguments), t;
                        }

                        function f() {}
                        c === n && ((c = u), (u = Object)), (s.Bare = f);
                        var l,
                            d = (a[t] = u[t]),
                            p = (f[t] = s[t] = new a());
                        return (
                            (p.constructor = s),
                            (s.mixin = function(e) {
                                return (f[t] = s[t] = o(s, e)[t]), s;
                            }),
                            (s.open = function(t) {
                                if (((l = {}), i(t) ? (l = t.call(s, p, d, s, u)) : r(t) && (l = t), r(l)))
                                    for (var n in l) e.call(l, n) && (p[n] = l[n]);
                                return i(p.init) || (p.init = u), s;
                            }),
                            s.open(c)
                        );
                    };
                })("prototype", {}.hasOwnProperty),
                l = {
                    ease: [
                        "ease",
                        function(t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t);
                        }
                    ],
                    "ease-in": [
                        "ease-in",
                        function(t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        }
                    ],
                    "ease-out": [
                        "ease-out",
                        function(t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
                        }
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function(t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        }
                    ],
                    linear: [
                        "linear",
                        function(t, e, n, r) {
                            return (n * t) / r + e;
                        }
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function(t, e, n, r) {
                            return n * (t /= r) * t + e;
                        }
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function(t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        }
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function(t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t + e
                                : (-n / 2) * (--t * (t - 2) - 1) + e;
                        }
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function(t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        }
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function(t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        }
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function(t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        }
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function(t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        }
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function(t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        }
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function(t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t + e
                                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        }
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function(t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        }
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function(t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        }
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function(t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        }
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function(t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        }
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function(t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        }
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function(t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        }
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function(t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        }
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function(t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        }
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function(t, e, n, r) {
                            return 0 === t
                                ? e
                                : t === r
                                ? e + n
                                : (t /= r / 2) < 1
                                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        }
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function(t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        }
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function(t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        }
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function(t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        }
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function(t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
                        }
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function(t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                            );
                        }
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function(t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                (t /= r / 2) < 1
                                    ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                                    : (n / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                            );
                        }
                    ]
                },
                d = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                p = document,
                v = window,
                h = "bkwld-tram",
                E = /[\-\.0-9]/g,
                _ = /[A-Z]/,
                y = "number",
                g = /^(rgb|#)/,
                m = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                O = /(deg|rad|turn)$/,
                T = "unitless",
                b = /(all|none) 0s ease 0s/,
                S = /^(width|height)$/,
                w = " ",
                A = p.createElement("a"),
                R = ["Webkit", "Moz", "O", "ms"],
                x = ["-webkit-", "-moz-", "-o-", "-ms-"],
                L = function(t) {
                    if (t in A.style)
                        return {
                            dom: t,
                            css: t
                        };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < R.length; e++)
                        if ((n = R[e] + r) in A.style)
                            return {
                                dom: n,
                                css: x[e] + t
                            };
                },
                N = (e.support = {
                    bind: Function.prototype.bind,
                    transform: L("transform"),
                    transition: L("transition"),
                    backface: L("backface-visibility"),
                    timing: L("transition-timing-function")
                });
            if (N.transition) {
                var C = N.timing.dom;
                if (((A.style[C] = l["ease-in-back"][0]), !A.style[C])) for (var M in d) l[M][0] = d[M];
            }
            var P = (e.frame = (function() {
                    var t =
                        v.requestAnimationFrame ||
                        v.webkitRequestAnimationFrame ||
                        v.mozRequestAnimationFrame ||
                        v.oRequestAnimationFrame ||
                        v.msRequestAnimationFrame;
                    return t && N.bind
                        ? t.bind(v)
                        : function(t) {
                              v.setTimeout(t, 16);
                          };
                })()),
                D = (e.now = (function() {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && N.bind
                        ? e.bind(t)
                        : Date.now ||
                              function() {
                                  return +new Date();
                              };
                })()),
                j = f(function(e) {
                    function r(t, e) {
                        var n = (function(t) {
                                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                                    var i = t[e];
                                    i && r.push(i);
                                }
                                return r;
                            })(("" + t).split(w)),
                            r = n[0];
                        e = e || {};
                        var i = Q[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
                        }
                    }

                    function i(t, e, n) {
                        if (t) {
                            var i = void 0 === t ? "undefined" : (0, o.default)(t);
                            if (
                                (e ||
                                    (this.timer && this.timer.destroy(),
                                    (this.queue = []),
                                    (this.active = !1)),
                                "number" == i && e)
                            )
                                return (
                                    (this.timer = new B({
                                        duration: t,
                                        context: this,
                                        complete: a
                                    })),
                                    void (this.active = !0)
                                );
                            if ("string" == i && e) {
                                switch (t) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        l.call(this);
                                        break;
                                    default:
                                        r.call(this, t, n && n[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == i) return void t.call(this, this);
                            if ("object" == i) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function(t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function(t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 &&
                                        ((this.timer = new B({
                                            duration: s,
                                            context: this
                                        })),
                                        (this.active = !0),
                                        e && (this.timer.complete = a));
                                var v = this,
                                    h = !1,
                                    E = {};
                                P(function() {
                                    p.call(v, t, function(t) {
                                        t.active && ((h = !0), (E[t.name] = t.nextStyle));
                                    }),
                                        h && v.$el.css(E);
                                });
                            }
                        }
                    }

                    function a() {
                        if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                            var t = this.queue.shift();
                            i.call(this, t.options, !0, t.args);
                        }
                    }

                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t
                                ? ((e = {})[t] = 1)
                                : (e =
                                      "object" == (void 0 === t ? "undefined" : (0, o.default)(t)) &&
                                      null != t
                                          ? t
                                          : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }

                    function f() {
                        u.call(this), (this.el.style.display = "none");
                    }

                    function l() {
                        this.el.offsetHeight;
                    }

                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props))
                            (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")),
                            this.style !== n && ((this.style = n), (this.el.style[N.transition.dom] = n));
                    }

                    function p(t, e, i) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            f = {};
                        for (o in t)
                            (u = t[o]),
                                o in q
                                    ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                                    : (_.test(o) && (o = n(o)),
                                      o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in f) {
                            if (((u = f[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = r.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        i && c && i.call(this, c);
                    }

                    function v(t) {
                        t.stop();
                    }

                    function E(t, e) {
                        t.set(e);
                    }

                    function y(t) {
                        this.$el.css(t);
                    }

                    function g(t, n) {
                        e[t] = function() {
                            return this.children
                                ? function(t, e) {
                                      var n,
                                          r = this.children.length;
                                      for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                      return this;
                                  }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function(e) {
                        if (
                            ((this.$el = t(e)),
                            (this.el = this.$el[0]),
                            (this.props = {}),
                            (this.queue = []),
                            (this.style = ""),
                            (this.active = !1),
                            W.keepInherited && !W.fallback)
                        ) {
                            var n = z(this.el, "transition");
                            n && !b.test(n) && (this.upstream = n);
                        }
                        N.backface && W.hideBackface && Y(this.el, N.backface.css, "hidden");
                    }),
                        g("add", r),
                        g("start", i),
                        g("wait", function(t) {
                            (t = c(t, 0)),
                                this.active
                                    ? this.queue.push({
                                          options: t
                                      })
                                    : ((this.timer = new B({
                                          duration: t,
                                          context: this,
                                          complete: a
                                      })),
                                      (this.active = !0));
                        }),
                        g("then", function(t) {
                            return this.active
                                ? (this.queue.push({
                                      options: t,
                                      args: arguments
                                  }),
                                  void (this.timer.complete = a))
                                : s("No active transition timer. Use start() or wait() before then().");
                        }),
                        g("next", a),
                        g("stop", u),
                        g("set", function(t) {
                            u.call(this, t), p.call(this, t, E, y);
                        }),
                        g("show", function(t) {
                            "string" != typeof t && (t = "block"), (this.el.style.display = t);
                        }),
                        g("hide", f),
                        g("redraw", l),
                        g("destroy", function() {
                            u.call(this), t.removeData(this.el, h), (this.$el = this.el = null);
                        });
                }),
                F = f(j, function(e) {
                    function n(e, n) {
                        var r = t.data(e, h) || t.data(e, h, new j.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function(e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function(t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                G = f(function(t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }

                    function n(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? i(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    var r = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function(t, e, n, i) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            K[o] && (o = K[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, r)),
                            (this.ease = (function(t, e, n) {
                                return void 0 !== e && (n = e), t in l ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = S.test(this.name)),
                            (this.unit = i.unit || this.unit || W.defaultUnit),
                            (this.angle = i.angle || this.angle || W.defaultAngle),
                            W.fallback || i.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition),
                                  (this.string =
                                      this.name +
                                      w +
                                      this.duration +
                                      "ms" +
                                      ("ease" != this.ease ? w + l[this.ease][0] : "") +
                                      (this.delay ? w + this.delay + "ms" : "")));
                    }),
                        (t.set = function(t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function(t) {
                            (this.active = !0),
                                (t = this.convert(t, this.type)),
                                this.auto &&
                                    ("auto" == this.el.style[this.name] &&
                                        (this.update(this.get()), this.redraw()),
                                    "auto" == t && (t = e.call(this))),
                                (this.nextStyle = t);
                        }),
                        (t.fallback = function(t) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto &&
                                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                                    "auto" == t && (t = e.call(this))),
                                (this.tween = new U({
                                    from: n,
                                    to: t,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this
                                }));
                        }),
                        (t.get = function() {
                            return z(this.el, this.name);
                        }),
                        (t.update = function(t) {
                            Y(this.el, this.name, t);
                        }),
                        (t.stop = function() {
                            (this.active || this.nextStyle) &&
                                ((this.active = !1),
                                (this.nextStyle = null),
                                Y(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function(t, e) {
                            if ("auto" == t && this.auto) return t;
                            var r,
                                i = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case y:
                                    if (i) return t;
                                    if (a && "" === t.replace(E, "")) return +t;
                                    r = "number(unitless)";
                                    break;
                                case g:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                                    }
                                    r = "hex or rgb string";
                                    break;
                                case m:
                                    if (i) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    r = "number(px) or string(unit)";
                                    break;
                                case I:
                                    if (i) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    r = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (i) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    r = "number(deg) or string(angle)";
                                    break;
                                case T:
                                    if (i) return t;
                                    if (a && I.test(t)) return t;
                                    r = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function(t, e) {
                                    s(
                                        "Type warning: Expected: [" +
                                            t +
                                            "] Got: [" +
                                            (void 0 === e ? "undefined" : (0, o.default)(e)) +
                                            "] " +
                                            e
                                    );
                                })(r, t),
                                t
                            );
                        }),
                        (t.redraw = function() {
                            this.el.offsetHeight;
                        });
                }),
                X = f(G, function(t, e) {
                    t.init = function() {
                        e.init.apply(this, arguments),
                            this.original || (this.original = this.convert(this.get(), g));
                    };
                }),
                V = f(G, function(t, e) {
                    (t.init = function() {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function() {
                            return this.$el[this.name]();
                        }),
                        (t.update = function(t) {
                            this.$el[this.name](t);
                        });
                }),
                k = f(G, function(t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t)
                            (i = (o = q[n])[0]),
                                (r = o[1] || n),
                                (a = this.convert(t[n], i)),
                                e.call(this, r, a, i);
                    }
                    (t.init = function() {
                        e.init.apply(this, arguments),
                            this.current ||
                                ((this.current = {}),
                                q.perspective &&
                                    W.perspective &&
                                    ((this.current.perspective = W.perspective),
                                    Y(this.el, this.name, this.style(this.current)),
                                    this.redraw()));
                    }),
                        (t.set = function(t) {
                            n.call(this, t, function(t, e) {
                                this.current[t] = e;
                            }),
                                Y(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function(t) {
                            var e = this.values(t);
                            this.tween = new H({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function(t) {
                            var e = this.values(t);
                            this.tween = new H({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            });
                        }),
                        (t.update = function() {
                            Y(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function(t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function(t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function(t, n, i) {
                                    (r[t] = n),
                                        void 0 === this.current[t] &&
                                            ((e = 0),
                                            ~t.indexOf("scale") && (e = 1),
                                            (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                U = f(function(e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = D(), t = i; t--; ) (r = c[t]) && r.render(e);
                    }
                    var o = {
                        ease: l.ease[1],
                        from: 0,
                        to: 1
                    };
                    (e.init = function(t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || o.ease;
                        l[e] && (e = l[e][1]),
                            "function" != typeof e && (e = o.ease),
                            (this.ease = e),
                            (this.update = t.update || a),
                            (this.complete = t.complete || a),
                            (this.context = t.context || this),
                            (this.name = t.name);
                        var n = t.from,
                            r = t.to;
                        void 0 === n && (n = o.from),
                            void 0 === r && (r = o.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof r
                                ? ((this.begin = n), (this.change = r - n))
                                : this.format(r, n),
                            (this.value = this.begin + this.unit),
                            (this.start = D()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function() {
                            var t;
                            this.active ||
                                (this.start || (this.start = D()),
                                (this.active = !0),
                                (t = this),
                                1 === c.push(t) && P(n));
                        }),
                        (e.stop = function() {
                            var e, n, r;
                            this.active &&
                                ((this.active = !1),
                                (e = this),
                                (r = t.inArray(e, c)) >= 0 &&
                                    ((n = c.slice(r + 1)), (c.length = r), n.length && (c = c.concat(n))));
                        }),
                        (e.render = function(t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function(t, e, n) {
                                              return i(
                                                  t[0] + n * (e[0] - t[0]),
                                                  t[1] + n * (e[1] - t[1]),
                                                  t[2] + n * (e[2] - t[2])
                                              );
                                          })(this.startRGB, this.endRGB, r)
                                        : (function(t) {
                                              return Math.round(t * s) / s;
                                          })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change),
                                (this.value = e + this.unit),
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy();
                        }),
                        (e.format = function(t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0)))
                                return (
                                    (this.startRGB = r(e)),
                                    (this.endRGB = r(t)),
                                    (this.endHex = t),
                                    (this.begin = 0),
                                    void (this.change = 1)
                                );
                            if (!this.unit) {
                                var n = e.replace(E, "");
                                n !== t.replace(E, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)),
                                (t = parseFloat(t)),
                                (this.begin = this.value = e),
                                (this.change = t - e);
                        }),
                        (e.destroy = function() {
                            this.stop(), (this.context = null), (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                B = f(U, function(t) {
                    (t.init = function(t) {
                        (this.duration = t.duration || 0),
                            (this.complete = t.complete || a),
                            (this.context = t.context),
                            this.play();
                    }),
                        (t.render = function(t) {
                            t - this.start < this.duration ||
                                (this.complete.call(this.context), this.destroy());
                        });
                }),
                H = f(U, function(t, e) {
                    (t.init = function(t) {
                        var e, n;
                        for (e in ((this.context = t.context),
                        (this.update = t.update),
                        (this.tweens = []),
                        (this.current = t.current),
                        t.values))
                            (n = t.values[e]),
                                this.current[e] !== n &&
                                    this.tweens.push(
                                        new U({
                                            name: e,
                                            from: this.current[e],
                                            to: n,
                                            duration: t.duration,
                                            delay: t.delay,
                                            ease: t.ease,
                                            autoplay: !1
                                        })
                                    );
                        this.play();
                    }),
                        (t.render = function(t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--; )
                                (n = this.tweens[e]).context &&
                                    (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r ? void (this.update && this.update.call(this.context)) : this.destroy();
                        }),
                        (t.destroy = function() {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                W = (e.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !N.transition,
                    agentTests: []
                });
            (e.fallback = function(t) {
                if (!N.transition) return (W.fallback = !0);
                W.agentTests.push("(" + t + ")");
                var e = new RegExp(W.agentTests.join("|"), "i");
                W.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function(t) {
                    return new U(t);
                }),
                (e.delay = function(t, e, n) {
                    return new B({
                        complete: e,
                        duration: t,
                        context: n
                    });
                }),
                (t.fn.tram = function(t) {
                    return e.call(null, this, t);
                });
            var Y = t.style,
                z = t.css,
                K = {
                    transform: N.transform && N.transform.css
                },
                Q = {
                    color: [X, g],
                    background: [X, g, "background-color"],
                    "outline-color": [X, g],
                    "border-color": [X, g],
                    "border-top-color": [X, g],
                    "border-right-color": [X, g],
                    "border-bottom-color": [X, g],
                    "border-left-color": [X, g],
                    "border-width": [G, m],
                    "border-top-width": [G, m],
                    "border-right-width": [G, m],
                    "border-bottom-width": [G, m],
                    "border-left-width": [G, m],
                    "border-spacing": [G, m],
                    "letter-spacing": [G, m],
                    margin: [G, m],
                    "margin-top": [G, m],
                    "margin-right": [G, m],
                    "margin-bottom": [G, m],
                    "margin-left": [G, m],
                    padding: [G, m],
                    "padding-top": [G, m],
                    "padding-right": [G, m],
                    "padding-bottom": [G, m],
                    "padding-left": [G, m],
                    "outline-width": [G, m],
                    opacity: [G, y],
                    top: [G, I],
                    right: [G, I],
                    bottom: [G, I],
                    left: [G, I],
                    "font-size": [G, I],
                    "text-indent": [G, I],
                    "word-spacing": [G, I],
                    width: [G, I],
                    "min-width": [G, I],
                    "max-width": [G, I],
                    height: [G, I],
                    "min-height": [G, I],
                    "max-height": [G, I],
                    "line-height": [G, T],
                    "scroll-top": [V, y, "scrollTop"],
                    "scroll-left": [V, y, "scrollLeft"]
                },
                q = {};
            N.transform &&
                ((Q.transform = [k]),
                (q = {
                    x: [I, "translateX"],
                    y: [I, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [y],
                    scaleX: [y],
                    scaleY: [y],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                })),
                N.transform &&
                    N.backface &&
                    ((q.z = [I, "translateZ"]), (q.rotateZ = [O]), (q.scaleZ = [y]), (q.perspective = [m]));
            var $ = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function(t, e, n) {
        "use strict";
        var r = n(142)(!0);
        n(83)(
            String,
            "String",
            function(t) {
                (this._t = String(t)), (this._i = 0);
            },
            function() {
                var t,
                    e = this._t,
                    n = this._i;
                return n >= e.length
                    ? {
                          value: void 0,
                          done: !0
                      }
                    : ((t = r(e, n)),
                      (this._i += t.length),
                      {
                          value: t,
                          done: !1
                      });
            }
        );
    },
    function(t, e, n) {
        "use strict";
        var r = n(28),
            i = n(18),
            o = n(87),
            a = n(14),
            u = n(23),
            c = n(144),
            s = n(50),
            f = n(149),
            l = n(1)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function() {
                return this;
            };
        t.exports = function(t, e, n, v, h, E, _) {
            c(n, e, v);
            var y,
                g,
                m,
                I = function(t) {
                    if (!d && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t);
                            };
                    }
                    return function() {
                        return new n(this, t);
                    };
                },
                O = e + " Iterator",
                T = "values" == h,
                b = !1,
                S = t.prototype,
                w = S[l] || S["@@iterator"] || (h && S[h]),
                A = w || I(h),
                R = h ? (T ? I("entries") : A) : void 0,
                x = ("Array" == e && S.entries) || w;
            if (
                (x &&
                    (m = f(x.call(new t()))) !== Object.prototype &&
                    m.next &&
                    (s(m, O, !0), r || "function" == typeof m[l] || a(m, l, p)),
                T &&
                    w &&
                    "values" !== w.name &&
                    ((b = !0),
                    (A = function() {
                        return w.call(this);
                    })),
                (r && !_) || (!d && !b && S[l]) || a(S, l, A),
                (u[e] = A),
                (u[O] = p),
                h)
            )
                if (
                    ((y = {
                        values: T ? A : I("values"),
                        keys: E ? A : I("keys"),
                        entries: R
                    }),
                    _)
                )
                    for (g in y) g in S || o(S, g, y[g]);
                else i(i.P + i.F * (d || b), e, y);
            return y;
        };
    },
    function(t, e, n) {
        var r = n(143);
        t.exports = function(t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function() {
                return t.apply(e, arguments);
            };
        };
    },
    function(t, e, n) {
        t.exports =
            !n(8) &&
            !n(21)(function() {
                return (
                    7 !=
                    Object.defineProperty(n(86)("div"), "a", {
                        get: function() {
                            return 7;
                        }
                    }).a
                );
            });
    },
    function(t, e, n) {
        var r = n(20),
            i = n(5).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {};
        };
    },
    function(t, e, n) {
        t.exports = n(14);
    },
    function(t, e, n) {
        var r = n(19),
            i = n(145),
            o = n(49),
            a = n(47)("IE_PROTO"),
            u = function() {},
            c = function() {
                var t,
                    e = n(86)("iframe"),
                    r = o.length;
                for (
                    e.style.display = "none",
                        n(148).appendChild(e),
                        e.src = "javascript:",
                        (t = e.contentWindow.document).open(),
                        t.write("<script>document.F=Object</script>"),
                        t.close(),
                        c = t.F;
                    r--;

                )
                    delete c.prototype[o[r]];
                return c();
            };
        t.exports =
            Object.create ||
            function(t, e) {
                var n;
                return (
                    null !== t
                        ? ((u.prototype = r(t)), (n = new u()), (u.prototype = null), (n[a] = t))
                        : (n = c()),
                    void 0 === e ? n : i(n, e)
                );
            };
    },
    function(t, e, n) {
        var r = n(9),
            i = n(15),
            o = n(146)(!1),
            a = n(47)("IE_PROTO");
        t.exports = function(t, e) {
            var n,
                u = i(t),
                c = 0,
                s = [];
            for (n in u) n != a && r(u, n) && s.push(n);
            for (; e.length > c; ) r(u, (n = e[c++])) && (~o(s, n) || s.push(n));
            return s;
        };
    },
    function(t, e, n) {
        var r = n(46);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function(t) {
                  return "String" == r(t) ? t.split("") : Object(t);
              };
    },
    function(t, e, n) {
        var r = n(43),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function(t, e, n) {
        var r = n(89),
            i = n(49).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function(t) {
                return r(t, i);
            };
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(55);
        n.d(e, "createStore", function() {
            return r.default;
        });
        var i = n(96);
        n.d(e, "combineReducers", function() {
            return i.default;
        });
        var o = n(98);
        n.d(e, "bindActionCreators", function() {
            return o.default;
        });
        var a = n(99);
        n.d(e, "applyMiddleware", function() {
            return a.default;
        });
        var u = n(57);
        n.d(e, "compose", function() {
            return u.default;
        });
        n(97);
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(170),
            i = n(175),
            o = n(177),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            f = c.hasOwnProperty,
            l = s.call(Object);
        e.default = function(t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
            var e = Object(i.default)(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l;
        };
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(171).default.Symbol;
        e.default = r;
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function() {
                return o;
            });
        var r = n(55);
        n(94), n(97);

        function i(t, e) {
            var n = e && e.type;
            return (
                "Given action " +
                ((n && '"' + n.toString() + '"') || "an action") +
                ', reducer "' +
                t +
                '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            );
        }

        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function(t) {
                    Object.keys(t).forEach(function(e) {
                        var n = t[e];
                        if (
                            void 0 ===
                            n(void 0, {
                                type: r.ActionTypes.INIT
                            })
                        )
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        if (
                            void 0 ===
                            n(void 0, {
                                type:
                                    "@@redux/PROBE_UNKNOWN_ACTION_" +
                                    Math.random()
                                        .toString(36)
                                        .substring(7)
                                        .split("")
                                        .join(".")
                            })
                        )
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    "\" returned undefined when probed with a random type. Don't try to handle " +
                                    r.ActionTypes.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== l);
                }
                return r ? o : t;
            };
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t);
            } catch (t) {}
        }
        n.r(e),
            n.d(e, "default", function() {
                return r;
            });
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function() {
                return e(t.apply(void 0, arguments));
            };
        }

        function i(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                        (null === t ? "null" : typeof t) +
                        '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    u = t[a];
                "function" == typeof u && (i[a] = r(u, e));
            }
            return i;
        }
        n.r(e),
            n.d(e, "default", function() {
                return i;
            });
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function() {
                return o;
            });
        var r = n(57),
            i =
                Object.assign ||
                function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };

        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function(t) {
                return function(n, o, a) {
                    var u,
                        c = t(n, o, a),
                        s = c.dispatch,
                        f = {
                            getState: c.getState,
                            dispatch: function(t) {
                                return s(t);
                            }
                        };
                    return (
                        (u = e.map(function(t) {
                            return t(f);
                        })),
                        (s = r.default.apply(void 0, u)(c.dispatch)),
                        i({}, c, {
                            dispatch: s
                        })
                    );
                };
            };
        }
    },
    function(t, e, n) {
        var r = n(101)(n(246));
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(10),
            i = n(17),
            o = n(36);
        t.exports = function(t) {
            return function(e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function(t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function(t, e, n) {
        var r = n(32),
            i = n(190),
            o = n(191),
            a = n(192),
            u = n(193),
            c = n(194);

        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i),
            (s.prototype.delete = o),
            (s.prototype.get = a),
            (s.prototype.has = u),
            (s.prototype.set = c),
            (t.exports = s);
    },
    function(t, e, n) {
        var r = n(16),
            i = n(4),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function(t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(this, n(56)));
    },
    function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        };
    },
    function(t, e, n) {
        var r = n(213),
            i = n(12);
        t.exports = function t(e, n, o, a, u) {
            return (
                e === n ||
                (null == e || null == n || (!i(e) && !i(n)) ? e != e && n != n : r(e, n, o, a, t, u))
            );
        };
    },
    function(t, e, n) {
        var r = n(214),
            i = n(217),
            o = n(218),
            a = 1,
            u = 2;
        t.exports = function(t, e, n, c, s, f) {
            var l = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d)) return !1;
            var v = f.get(t);
            if (v && f.get(e)) return v == e;
            var h = -1,
                E = !0,
                _ = n & u ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++h < d; ) {
                var y = t[h],
                    g = e[h];
                if (c) var m = l ? c(g, y, h, e, t, f) : c(y, g, h, t, e, f);
                if (void 0 !== m) {
                    if (m) continue;
                    E = !1;
                    break;
                }
                if (_) {
                    if (
                        !i(e, function(t, e) {
                            if (!o(_, e) && (y === t || s(y, t, n, c, f))) return _.push(e);
                        })
                    ) {
                        E = !1;
                        break;
                    }
                } else if (y !== g && !s(y, g, n, c, f)) {
                    E = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), E;
        };
    },
    function(t, e, n) {
        var r = n(62),
            i = n(0);
        t.exports = function(t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function(t, e, n) {
        var r = n(225),
            i = n(110),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function(t) {
                      return null == t
                          ? []
                          : ((t = Object(t)),
                            r(a(t), function(e) {
                                return o.call(t, e);
                            }));
                  }
                : i;
        t.exports = u;
    },
    function(t, e) {
        t.exports = function() {
            return [];
        };
    },
    function(t, e, n) {
        var r = n(226),
            i = n(37),
            o = n(0),
            a = n(63),
            u = n(64),
            c = n(65),
            s = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var n = o(t),
                f = !n && i(t),
                l = !n && !f && a(t),
                d = !n && !f && !l && c(t),
                p = n || f || l || d,
                v = p ? r(t.length, String) : [],
                h = v.length;
            for (var E in t)
                (!e && !s.call(t, E)) ||
                    (p &&
                        ("length" == E ||
                            (l && ("offset" == E || "parent" == E)) ||
                            (d && ("buffer" == E || "byteLength" == E || "byteOffset" == E)) ||
                            u(E, h))) ||
                    v.push(E);
            return v;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function() {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return t.l;
                        }
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function() {
                            return t.i;
                        }
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return t(e(n));
            };
        };
    },
    function(t, e, n) {
        var r = n(11)(n(3), "WeakMap");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(4);
        t.exports = function(t) {
            return t == t && !r(t);
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function(t, e, n) {
        var r = n(118);
        t.exports = function(t) {
            return null == t ? "" : r(t);
        };
    },
    function(t, e, n) {
        var r = n(24),
            i = n(119),
            o = n(0),
            a = n(40),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
            return i;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function(t, e) {
        t.exports = function(t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0),
            (e.inQuad = function(t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function(t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function(t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function(t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function(t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function(t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function(t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function(t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function(t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function(t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function(t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function(t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function(t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function(t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function(t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function(t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function(t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function(t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function(t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function(t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function(t) {
                return t * t * ((a + 1) * t - a);
            }),
            (e.outBack = function(t) {
                return (t -= 1) * t * ((a + 1) * t + a) + 1;
            }),
            (e.inOutBack = function(t) {
                var e = a;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function(t) {
                var e = a,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n);
            }),
            (e.outElastic = function(t) {
                var e = a,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1;
            }),
            (e.inOutElastic = function(t) {
                var e = a,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1)
                    return r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5;
                return r * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * 0.5 + 1;
            }),
            (e.swingFromTo = function(t) {
                var e = a;
                return (t /= 0.5) < 1
                    ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function(t) {
                return t * t * ((a + 1) * t - a);
            }),
            (e.swingTo = function(t) {
                return (t -= 1) * t * ((a + 1) * t + a) + 1;
            }),
            (e.bounce = function(t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function(t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                    : t < 2.5 / 2.75
                    ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                    : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            });
        var r,
            i = n(248),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        var a = 1.70158;
        (e.ease = (0, o.default)(0.25, 0.1, 0.25, 1)),
            (e.easeIn = (0, o.default)(0.42, 0, 1, 1)),
            (e.easeOut = (0, o.default)(0, 0, 0.58, 1)),
            (e.easeInOut = (0, o.default)(0.42, 0, 0.58, 1));
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.optimizeFloat = i),
            (e.applyEasing = function(t, e) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                return i(e > 0 && t && r[t] ? r[t](e) : e);
            });
        var r = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
        })(n(122));

        function i(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        (e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED"),
            (e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED"),
            (e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED"),
            (e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED"),
            (e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED"),
            (e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED"),
            (e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED"),
            (e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED"),
            (e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED"),
            (e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED"),
            (e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED"),
            (e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED"),
            (e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED"),
            (e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED"),
            (e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED"),
            (e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED"),
            (e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
            (e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED"),
            (e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED");
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        (e.MOUSE_CLICK = "MOUSE_CLICK"),
            (e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK"),
            (e.MOUSE_DOWN = "MOUSE_DOWN"),
            (e.MOUSE_UP = "MOUSE_UP"),
            (e.MOUSE_OVER = "MOUSE_OVER"),
            (e.MOUSE_OUT = "MOUSE_OUT"),
            (e.MOUSE_MOVE = "MOUSE_MOVE"),
            (e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW"),
            (e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW"),
            (e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW"),
            (e.TAB_ACTIVE = "TAB_ACTIVE"),
            (e.TAB_INACTIVE = "TAB_INACTIVE"),
            (e.NAVBAR_OPEN = "NAVBAR_OPEN"),
            (e.NAVBAR_CLOSE = "NAVBAR_CLOSE"),
            (e.SLIDER_ACTIVE = "SLIDER_ACTIVE"),
            (e.SLIDER_INACTIVE = "SLIDER_INACTIVE"),
            (e.DROPDOWN_OPEN = "DROPDOWN_OPEN"),
            (e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE"),
            (e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE"),
            (e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE"),
            (e.PAGE_START = "PAGE_START"),
            (e.PAGE_FINISH = "PAGE_FINISH"),
            (e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP"),
            (e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN"),
            (e.PAGE_SCROLL = "PAGE_SCROLL"),
            (e.ELEMENT = "ELEMENT"),
            (e.VIEWPORT = "VIEWPORT"),
            (e.PAGE = "PAGE"),
            (e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN"),
            (e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE");
    },
    function(t, e, n) {
        "use strict";
        var r,
            i = n(41),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.cleanupPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginConfig = void 0),
            (e.isPluginType = function(t) {
                return t === u.PLUGIN_BODYMOVIN;
            });
        var a = n(253),
            u = n(75),
            c = n(58),
            s = (0, o.default)({}, u.PLUGIN_BODYMOVIN, {
                getConfig: a.getPluginConfig,
                getOrigin: a.getPluginOrigin,
                getDestination: a.getPluginDestination,
                createInstance: a.createPluginInstance,
                render: a.renderPlugin,
                cleanup: a.cleanupPlugin
            });
        var f = function(t) {
            return function(e) {
                if (!c.IS_BROWSER_ENV)
                    return function() {
                        return null;
                    };
                var n = s[e];
                if (!n) throw new Error("IX2 no plugin configured for: " + e);
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: " + t);
                return r;
            };
        };
        (e.getPluginConfig = f("getConfig")),
            (e.getPluginOrigin = f("getOrigin")),
            (e.getPluginDestination = f("getDestination")),
            (e.createPluginInstance = f("createInstance")),
            (e.renderPlugin = f("render")),
            (e.cleanupPlugin = f("cleanup"));
    },
    function(t, e, n) {
        var r = n(128),
            i = n(260)(r);
        t.exports = i;
    },
    function(t, e, n) {
        var r = n(258),
            i = n(36);
        t.exports = function(t, e) {
            return t && r(t, e, i);
        };
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(264),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        e.default = o.default;
    },
    function(t, e, n) {
        "use strict";
        var r,
            i = n(273),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = O(n(42)),
            u = O(n(283));
        (e.observeRequests = function(t) {
            X({
                store: t,
                select: function(t) {
                    var e = t.ixRequest;
                    return e.preview;
                },
                onChange: ot
            }),
                X({
                    store: t,
                    select: function(t) {
                        var e = t.ixRequest;
                        return e.playback;
                    },
                    onChange: ct
                }),
                X({
                    store: t,
                    select: function(t) {
                        var e = t.ixRequest;
                        return e.stop;
                    },
                    onChange: st
                }),
                X({
                    store: t,
                    select: function(t) {
                        var e = t.ixRequest;
                        return e.clear;
                    },
                    onChange: ft
                });
        }),
            (e.startEngine = lt),
            (e.stopEngine = dt),
            (e.stopAllActionGroups = mt),
            (e.stopActionGroup = It),
            (e.startActionGroup = Ot);
        var c = O(n(100)),
            s = O(n(38)),
            f = O(n(284)),
            l = O(n(290)),
            d = O(n(302)),
            p = O(n(303)),
            v = O(n(304)),
            h = O(n(307)),
            E = O(n(308)),
            _ = O(n(129)),
            y = n(2),
            g = n(77),
            m = (function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return (e.default = t), e;
            })(n(311)),
            I = O(n(312));

        function O(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        var T = y.IX2EngineEventTypes,
            b = T.MOUSE_CLICK,
            S = T.MOUSE_SECOND_CLICK,
            w = y.IX2EngineConstants,
            A = w.COLON_DELIMITER,
            R = w.BOUNDARY_SELECTOR,
            x = w.HTML_ELEMENT,
            L = w.RENDER_GENERAL,
            N = w.W_MOD_IX,
            C = y.IX2EngineItemTypes,
            M = C.GENERAL_START_ACTION,
            P = C.GENERAL_CONTINUOUS_ACTION,
            D = y.IX2VanillaUtils,
            j = D.getAffectedElements,
            F = D.getElementId,
            G = D.getDestinationValues,
            X = D.observeStore,
            V = D.getInstanceId,
            k = D.renderHTMLElement,
            U = D.clearAllStyles,
            B = D.getMaxDurationItemIndex,
            H = D.getComputedStyle,
            W = D.getInstanceOrigin,
            Y = D.reduceListToGroup,
            z = D.shouldNamespaceEventParameter,
            K = D.getNamespacedParameterId,
            Q = D.shouldAllowMediaQuery,
            q = D.cleanupHTMLElement,
            $ = D.stringifyTarget,
            Z = D.mediaQueriesEqual,
            J = y.IX2VanillaPlugins,
            tt = J.isPluginType,
            et = J.createPluginInstance,
            nt = navigator.userAgent,
            rt = nt.match(/iPad/i) || nt.match(/iPhone/),
            it = 12;

        function ot(t, e) {
            lt({
                store: e,
                rawData: t.rawData,
                allowEvents: !0
            }),
                at();
        }

        function at() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }

        function ut(t) {
            return t && (0, h.default)(t, "_EFFECT");
        }

        function ct(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.verbose,
                s = void 0 === c || c,
                f = t.rawData;
            if (
                (r &&
                    i &&
                    f &&
                    u &&
                    (f = Y({
                        actionListId: r,
                        actionItemId: i,
                        rawData: f
                    })),
                lt({
                    store: e,
                    rawData: f,
                    allowEvents: a
                }),
                (r && n === M) || ut(n))
            ) {
                It({
                    store: e,
                    actionListId: r
                }),
                    gt({
                        store: e,
                        actionListId: r,
                        eventId: o
                    });
                var l = Ot({
                    store: e,
                    eventId: o,
                    actionListId: r,
                    immediate: u,
                    verbose: s
                });
                s &&
                    l &&
                    e.dispatch(
                        (0, g.actionListPlaybackChanged)({
                            actionListId: r,
                            isPlaying: !u
                        })
                    );
            }
        }

        function st(t, e) {
            var n = t.actionListId;
            n
                ? It({
                      store: e,
                      actionListId: n
                  })
                : mt({
                      store: e
                  }),
                dt(e);
        }

        function ft(t, e) {
            dt(e),
                U({
                    store: e,
                    elementApi: m
                });
        }

        function lt(t) {
            var e,
                n = t.store,
                r = t.rawData,
                i = t.allowEvents,
                a = n.getState().ixSession;
            r && n.dispatch((0, g.rawDataImported)(r)),
                a.active ||
                    (n.dispatch(
                        (0, g.sessionInitialized)({
                            hasBoundaryNodes: Boolean(document.querySelector(R))
                        })
                    ),
                    i &&
                        ((function(t) {
                            var e = t.getState().ixData.eventTypeMap;
                            ht(t),
                                (0, v.default)(e, function(e, n) {
                                    var r = I.default[n];
                                    r
                                        ? (function(t) {
                                              var e = t.logic,
                                                  n = t.store,
                                                  r = t.events;
                                              !(function(t) {
                                                  if (rt) {
                                                      var e = {},
                                                          n = "";
                                                      for (var r in t) {
                                                          var i = t[r],
                                                              o = i.eventTypeId,
                                                              a = i.target,
                                                              u = m.getQuerySelector(a);
                                                          e[u] ||
                                                              (o !== b && o !== S) ||
                                                              ((e[u] = !0),
                                                              (n +=
                                                                  u +
                                                                  "{cursor: pointer;touch-action: manipulation;}"));
                                                      }
                                                      if (n) {
                                                          var c = document.createElement("style");
                                                          (c.textContent = n), document.body.appendChild(c);
                                                      }
                                                  }
                                              })(r);
                                              var i = e.types,
                                                  a = e.handler,
                                                  u = n.getState().ixData,
                                                  l = u.actionLists,
                                                  d = Et(r, yt);
                                              if ((0, f.default)(d)) {
                                                  (0, v.default)(d, function(t, e) {
                                                      var i = r[e],
                                                          a = i.action,
                                                          f = i.id,
                                                          d = i.mediaQueries,
                                                          p = void 0 === d ? u.mediaQueryKeys : d,
                                                          v = a.config.actionListId;
                                                      if (
                                                          (Z(p, u.mediaQueryKeys) ||
                                                              n.dispatch((0, g.mediaQueriesDefined)()),
                                                          a.actionTypeId === P)
                                                      ) {
                                                          var h = Array.isArray(i.config)
                                                              ? i.config
                                                              : [i.config];
                                                          h.forEach(function(e) {
                                                              var r = e.continuousParameterGroupId,
                                                                  i = (0, s.default)(
                                                                      l,
                                                                      v + ".continuousParameterGroups",
                                                                      []
                                                                  ),
                                                                  a = (0, c.default)(i, function(t) {
                                                                      var e = t.id;
                                                                      return e === r;
                                                                  }),
                                                                  u = (e.smoothing || 0) / 100,
                                                                  d = (e.restingState || 0) / 100;
                                                              a &&
                                                                  t.forEach(function(t, r) {
                                                                      var i = f + A + r;
                                                                      !(function(t) {
                                                                          var e = t.store,
                                                                              n = t.eventStateKey,
                                                                              r = t.eventTarget,
                                                                              i = t.eventId,
                                                                              a = t.eventConfig,
                                                                              u = t.actionListId,
                                                                              c = t.parameterGroup,
                                                                              f = t.smoothing,
                                                                              l = t.restingValue,
                                                                              d = e.getState(),
                                                                              p = d.ixData,
                                                                              v = d.ixSession,
                                                                              h = p.events[i],
                                                                              E = h.eventTypeId,
                                                                              _ = {},
                                                                              y = {},
                                                                              g = [],
                                                                              I = c.continuousActionGroups,
                                                                              O = c.id;
                                                                          z(E, a) && (O = K(n, O));
                                                                          var T =
                                                                              v.hasBoundaryNodes && r
                                                                                  ? m.getClosestElement(r, R)
                                                                                  : null;
                                                                          I.forEach(function(t) {
                                                                              var e = t.keyframe,
                                                                                  n = t.actionItems;
                                                                              n.forEach(function(t) {
                                                                                  var n = t.actionTypeId,
                                                                                      i = t.config.target;
                                                                                  if (i) {
                                                                                      var a = i.boundaryMode
                                                                                              ? T
                                                                                              : null,
                                                                                          u = $(i) + A + n;
                                                                                      if (
                                                                                          ((y[
                                                                                              u
                                                                                          ] = (function() {
                                                                                              var t =
                                                                                                      arguments.length >
                                                                                                          0 &&
                                                                                                      void 0 !==
                                                                                                          arguments[0]
                                                                                                          ? arguments[0]
                                                                                                          : [],
                                                                                                  e =
                                                                                                      arguments[1],
                                                                                                  n =
                                                                                                      arguments[2],
                                                                                                  r = [].concat(
                                                                                                      (0,
                                                                                                      o.default)(
                                                                                                          t
                                                                                                      )
                                                                                                  ),
                                                                                                  i = void 0;
                                                                                              return (
                                                                                                  r.some(
                                                                                                      function(
                                                                                                          t,
                                                                                                          n
                                                                                                      ) {
                                                                                                          return (
                                                                                                              t.keyframe ===
                                                                                                                  e &&
                                                                                                              ((i = n),
                                                                                                              !0)
                                                                                                          );
                                                                                                      }
                                                                                                  ),
                                                                                                  null == i &&
                                                                                                      ((i =
                                                                                                          r.length),
                                                                                                      r.push({
                                                                                                          keyframe: e,
                                                                                                          actionItems: []
                                                                                                      })),
                                                                                                  r[
                                                                                                      i
                                                                                                  ].actionItems.push(
                                                                                                      n
                                                                                                  ),
                                                                                                  r
                                                                                              );
                                                                                          })(y[u], e, t)),
                                                                                          !_[u])
                                                                                      ) {
                                                                                          _[u] = !0;
                                                                                          var c = t.config;
                                                                                          j({
                                                                                              config: c,
                                                                                              event: h,
                                                                                              eventTarget: r,
                                                                                              elementRoot: a,
                                                                                              elementApi: m
                                                                                          }).forEach(function(
                                                                                              t
                                                                                          ) {
                                                                                              g.push({
                                                                                                  element: t,
                                                                                                  key: u
                                                                                              });
                                                                                          });
                                                                                      }
                                                                                  }
                                                                              });
                                                                          }),
                                                                              g.forEach(function(t) {
                                                                                  var n = t.element,
                                                                                      r = t.key,
                                                                                      o = y[r],
                                                                                      a = (0, s.default)(
                                                                                          o,
                                                                                          "[0].actionItems[0]",
                                                                                          {}
                                                                                      ),
                                                                                      c = a.actionTypeId,
                                                                                      d = tt(c)
                                                                                          ? et(c)(n, a)
                                                                                          : null,
                                                                                      p = G(
                                                                                          {
                                                                                              element: n,
                                                                                              actionItem: a,
                                                                                              elementApi: m
                                                                                          },
                                                                                          d
                                                                                      );
                                                                                  Tt({
                                                                                      store: e,
                                                                                      element: n,
                                                                                      eventId: i,
                                                                                      actionListId: u,
                                                                                      actionItem: a,
                                                                                      destination: p,
                                                                                      continuous: !0,
                                                                                      parameterId: O,
                                                                                      actionGroups: o,
                                                                                      smoothing: f,
                                                                                      restingValue: l,
                                                                                      pluginInstance: d
                                                                                  });
                                                                              });
                                                                      })({
                                                                          store: n,
                                                                          eventStateKey: i,
                                                                          eventTarget: t,
                                                                          eventId: f,
                                                                          eventConfig: e,
                                                                          actionListId: v,
                                                                          parameterGroup: a,
                                                                          smoothing: u,
                                                                          restingValue: d
                                                                      });
                                                                  });
                                                          });
                                                      }
                                                      (a.actionTypeId === M || ut(a.actionTypeId)) &&
                                                          gt({
                                                              store: n,
                                                              actionListId: v,
                                                              eventId: f
                                                          });
                                                  });
                                                  var p = function(t) {
                                                          var e = n.getState(),
                                                              i = e.ixSession;
                                                          _t(d, function(e, o, c) {
                                                              var s = r[o],
                                                                  f = i.eventState[c],
                                                                  l = s.action,
                                                                  d = s.mediaQueries,
                                                                  p = void 0 === d ? u.mediaQueryKeys : d;
                                                              if (Q(p, i.mediaQueryKey)) {
                                                                  var v = function() {
                                                                      var r =
                                                                              arguments.length > 0 &&
                                                                              void 0 !== arguments[0]
                                                                                  ? arguments[0]
                                                                                  : {},
                                                                          i = a(
                                                                              {
                                                                                  store: n,
                                                                                  element: e,
                                                                                  event: s,
                                                                                  eventConfig: r,
                                                                                  nativeEvent: t,
                                                                                  eventStateKey: c
                                                                              },
                                                                              f
                                                                          );
                                                                      (0, _.default)(i, f) ||
                                                                          n.dispatch(
                                                                              (0, g.eventStateChanged)(c, i)
                                                                          );
                                                                  };
                                                                  if (l.actionTypeId === P) {
                                                                      var h = Array.isArray(s.config)
                                                                          ? s.config
                                                                          : [s.config];
                                                                      h.forEach(v);
                                                                  } else v();
                                                              }
                                                          });
                                                      },
                                                      h = (0, E.default)(p, it),
                                                      y = function(t) {
                                                          var e = t.target,
                                                              r = void 0 === e ? document : e,
                                                              i = t.types,
                                                              o = t.throttle;
                                                          i.split(" ")
                                                              .filter(Boolean)
                                                              .forEach(function(t) {
                                                                  var e = o ? h : p;
                                                                  r.addEventListener(t, e),
                                                                      n.dispatch(
                                                                          (0, g.eventListenerAdded)(r, [t, e])
                                                                      );
                                                              });
                                                      };
                                                  Array.isArray(i)
                                                      ? i.forEach(y)
                                                      : "string" == typeof i && y(e);
                                              }
                                          })({
                                              logic: r,
                                              store: t,
                                              events: e
                                          })
                                        : console.warn("IX2 event type not configured: " + n);
                                }),
                                t.getState().ixSession.eventListeners.length &&
                                    (function(t) {
                                        var e = function() {
                                            ht(t);
                                        };
                                        vt.forEach(function(n) {
                                            window.addEventListener(n, e),
                                                t.dispatch((0, g.eventListenerAdded)(window, [n, e]));
                                        }),
                                            e();
                                    })(t);
                        })(n),
                        -1 === (e = document.documentElement).className.indexOf(N) &&
                            (e.className += " " + N),
                        n.getState().ixSession.hasDefinedMediaQueries &&
                            (function(t) {
                                X({
                                    store: t,
                                    select: function(t) {
                                        return t.ixSession.mediaQueryKey;
                                    },
                                    onChange: function() {
                                        dt(t),
                                            U({
                                                store: t,
                                                elementApi: m
                                            }),
                                            lt({
                                                store: t,
                                                allowEvents: !0
                                            }),
                                            at();
                                    }
                                });
                            })(n)),
                    n.dispatch((0, g.sessionStarted)()),
                    (function(t) {
                        !(function e(n) {
                            var r = t.getState(),
                                i = r.ixSession,
                                o = r.ixParameters;
                            i.active &&
                                (t.dispatch((0, g.animationFrameChanged)(n, o)), requestAnimationFrame(e));
                        })(window.performance.now());
                    })(n));
        }

        function dt(t) {
            var e = t.getState().ixSession;
            e.active && (e.eventListeners.forEach(pt), t.dispatch((0, g.sessionStopped)()));
        }

        function pt(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var vt = ["resize", "orientationchange"];

        function ht(t) {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch(
                    (0, g.viewportWidthChanged)({
                        width: i,
                        mediaQueries: o
                    })
                );
            }
        }
        var Et = function(t, e) {
                return (0, l.default)((0, p.default)(t, e), d.default);
            },
            _t = function(t, e) {
                (0, v.default)(t, function(t, n) {
                    t.forEach(function(t, r) {
                        e(t, n, n + A + r);
                    });
                });
            },
            yt = function(t) {
                var e = {
                    target: t.target
                };
                return j({
                    config: e,
                    elementApi: m
                });
            };

        function gt(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState(),
                o = i.ixData,
                a = i.ixSession,
                u = o.actionLists,
                c = o.events[r],
                f = u[n];
            if (f && f.useFirstGroupAsInitialState) {
                var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                    d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
                if (!Q(d, a.mediaQueryKey)) return;
                l.forEach(function(t) {
                    var i = t.config,
                        o = t.actionTypeId,
                        a = j({
                            config: i,
                            event: c,
                            elementApi: m
                        }),
                        u = tt(o);
                    a.forEach(function(i) {
                        var a = u ? et(o)(i, t) : null;
                        Tt({
                            destination: G(
                                {
                                    element: i,
                                    actionItem: t,
                                    elementApi: m
                                },
                                a
                            ),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: r,
                            actionItem: t,
                            actionListId: n,
                            pluginInstance: a
                        });
                    });
                });
            }
        }

        function mt(t) {
            var e = t.store,
                n = e.getState().ixInstances;
            (0, v.default)(n, function(t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    bt(t, e),
                        r &&
                            e.dispatch(
                                (0, g.actionListPlaybackChanged)({
                                    actionListId: n,
                                    isPlaying: !1
                                })
                            );
                }
            });
        }

        function It(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = e.getState(),
                u = a.ixInstances,
                c = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, R) : null;
            (0, v.default)(u, function(t) {
                var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                    a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (c && r && !m.elementContains(c, t.element)) return;
                    bt(t, e),
                        t.verbose &&
                            e.dispatch(
                                (0, g.actionListPlaybackChanged)({
                                    actionListId: o,
                                    isPlaying: !1
                                })
                            );
                }
            });
        }

        function Ot(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = t.groupIndex,
                u = void 0 === a ? 0 : a,
                c = t.immediate,
                f = t.verbose,
                l = e.getState(),
                d = l.ixData,
                p = l.ixSession,
                v = d.events[n] || {},
                h = v.mediaQueries,
                E = void 0 === h ? d.mediaQueryKeys : h,
                _ = (0, s.default)(d, "actionLists." + o, {}),
                y = _.actionItemGroups;
            u >= y.length && (0, s.default)(v, "config.loop") && (u = 0),
                0 === u && _.useFirstGroupAsInitialState && u++;
            var g = (0, s.default)(y, [u, "actionItems"], []);
            if (!g.length) return !1;
            if (!Q(E, p.mediaQueryKey)) return !1;
            var I = p.hasBoundaryNodes && r ? m.getClosestElement(r, R) : null,
                O = B(g),
                T = !1;
            return (
                g.forEach(function(t, a) {
                    var s = t.config,
                        l = t.actionTypeId,
                        d = tt(l),
                        p = s.target;
                    if (p) {
                        var h = p.boundaryMode ? I : null;
                        j({
                            config: s,
                            event: v,
                            eventTarget: r,
                            elementRoot: h,
                            elementApi: m
                        }).forEach(function(s, p) {
                            var v = d ? et(l)(s, t) : null;
                            T = !0;
                            var h = O === a && 0 === p,
                                E = H({
                                    element: s,
                                    actionItem: t
                                }),
                                _ = G(
                                    {
                                        element: s,
                                        actionItem: t,
                                        elementApi: m
                                    },
                                    v
                                );
                            Tt({
                                store: e,
                                element: s,
                                actionItem: t,
                                eventId: n,
                                eventTarget: r,
                                eventStateKey: i,
                                actionListId: o,
                                groupIndex: u,
                                isCarrier: h,
                                computedStyle: E,
                                destination: _,
                                immediate: c,
                                verbose: f,
                                pluginInstance: v
                            });
                        });
                    }
                }),
                T
            );
        }

        function Tt(t) {
            var e = t.store,
                n = t.computedStyle,
                r = (0, u.default)(t, ["store", "computedStyle"]),
                i = !r.continuous,
                o = r.element,
                c = r.actionItem,
                s = r.immediate,
                f = r.pluginInstance,
                l = V(),
                d = e.getState().ixElements,
                p = F(d, o),
                v = (d[p] || {}).refState,
                h = m.getRefType(o),
                E = W(o, v, n, c, m, f);
            e.dispatch(
                (0, g.instanceAdded)(
                    (0, a.default)(
                        {
                            instanceId: l,
                            elementId: p,
                            origin: E,
                            refType: h
                        },
                        r
                    )
                )
            ),
                St(document.body, "ix2-animation-started", l),
                s
                    ? (function(t, e) {
                          t.dispatch((0, g.instanceStarted)(e));
                          var n = t.getState().ixParameters;
                          t.dispatch((0, g.animationFrameChanged)(Number.POSITIVE_INFINITY, n)),
                              wt(t.getState().ixInstances[e], t);
                      })(e, l)
                    : (X({
                          store: e,
                          select: function(t) {
                              return t.ixInstances[l];
                          },
                          onChange: wt
                      }),
                      i && e.dispatch((0, g.instanceStarted)(l)));
        }

        function bt(t, e) {
            St(document.body, "ix2-animation-stopping", {
                instanceId: t.id,
                state: e.getState()
            });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === x && q(o, r, m), e.dispatch((0, g.instanceRemoved)(t.id));
        }

        function St(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }

        function wt(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                f = t.groupIndex,
                l = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                h = t.isCarrier,
                E = t.styleProp,
                _ = t.verbose,
                y = t.pluginInstance,
                I = e.getState(),
                O = I.ixData,
                T = I.ixSession,
                b = (O.events[l] || {}).mediaQueries,
                S = void 0 === b ? O.mediaQueryKeys : b;
            if (Q(S, T.mediaQueryKey) && (r || n || i)) {
                if (s || (c === L && i)) {
                    e.dispatch((0, g.elementStateChanged)(o, u, s, a));
                    var w = e.getState().ixElements[o] || {},
                        A = w.ref,
                        R = w.refType,
                        N = w.refState,
                        C = N && N[u];
                    switch (R) {
                        case x:
                            k(A, N, C, l, a, E, m, c, y);
                    }
                }
                if (i) {
                    if (h) {
                        var M = Ot({
                            store: e,
                            eventId: l,
                            eventTarget: d,
                            eventStateKey: p,
                            actionListId: v,
                            groupIndex: f + 1,
                            verbose: _
                        });
                        _ &&
                            !M &&
                            e.dispatch(
                                (0, g.actionListPlaybackChanged)({
                                    actionListId: v,
                                    isPlaying: !1
                                })
                            );
                    }
                    bt(t, e);
                }
            }
        }
    },
    function(t, e, n) {
        var r = n(132);
        t.exports = function(t, e, n) {
            "__proto__" == e && r
                ? r(t, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0
                  })
                : (t[e] = n);
        };
    },
    function(t, e, n) {
        var r = n(11),
            i = (function() {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            })();
        t.exports = i;
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
        };
    },
    function(t, e, n) {
        var r = n(4),
            i = Object.create,
            o = (function() {
                function t() {}
                return function(e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function(t, e, n) {
        var r = n(325),
            i = n(326),
            o = r
                ? function(t) {
                      return r.get(t);
                  }
                : i;
        t.exports = o;
    },
    function(t, e, n) {
        var r = n(327),
            i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--; ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function(t, e, n) {
        n(138), n(165), n(166), n(168), n(333), n(334), (t.exports = n(335));
    },
    function(t, e, n) {
        "use strict";
        var r = n(13);
        r.define(
            "brand",
            (t.exports = function(t) {
                var e,
                    n = {},
                    i = document,
                    o = t("html"),
                    a = t("body"),
                    u = ".w-webflow-badge",
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function l() {
                    var n =
                        i.fullScreen ||
                        i.mozFullScreen ||
                        i.webkitIsFullScreen ||
                        i.msFullscreenElement ||
                        Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }

                function d() {
                    var t = a.children(u),
                        n = t.length && t.get(0) === e,
                        i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
                }
                return (
                    (n.ready = function() {
                        var n,
                            r,
                            a,
                            u = o.attr("data-wf-status"),
                            p = o.attr("data-wf-domain") || "";
                        /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
                            u &&
                                !s &&
                                ((e =
                                    e ||
                                    ((n = t('<a class="w-webflow-badge"></a>').attr(
                                        "href",
                                        "https://webflow.com?utm_campaign=brandjs"
                                    )),
                                    (r = t("<img>")
                                        .attr(
                                            "src",
                                            "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
                                        )
                                        .css({
                                            marginRight: "8px",
                                            width: "16px"
                                        })),
                                    (a = t("<img>").attr(
                                        "src",
                                        "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
                                    )),
                                    n.append(r, a),
                                    n[0])),
                                d(),
                                setTimeout(d, 500),
                                t(i)
                                    .off(f, l)
                                    .on(f, l));
                    }),
                    n
                );
            })
        );
    },
    function(t, e, n) {
        "use strict";
        var r = window.$,
            i = n(81) && r.tram;
        /*!
         * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (webflow)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function() {
            var t = {
                    VERSION: "1.6.0-Webflow"
                },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                f = (n.reduce, n.reduceRight, n.filter),
                l = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                    (t.each = t.forEach = function(n, r, i) {
                        if (null == n) return n;
                        if (c && n.forEach === c) n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return;
                        } else {
                            var u = t.keys(n);
                            for (o = 0, a = u.length; o < a; o++)
                                if (r.call(i, n[u[o]], u[o], n) === e) return;
                        }
                        return n;
                    }));
            (t.map = t.collect = function(t, e, n) {
                var r = [];
                return null == t
                    ? r
                    : s && t.map === s
                    ? t.map(e, n)
                    : (v(t, function(t, i, o) {
                          r.push(e.call(n, t, i, o));
                      }),
                      r);
            }),
                (t.find = t.detect = function(t, e, n) {
                    var r;
                    return (
                        h(t, function(t, i, o) {
                            if (e.call(n, t, i, o)) return (r = t), !0;
                        }),
                        r
                    );
                }),
                (t.filter = t.select = function(t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : f && t.filter === f
                        ? t.filter(e, n)
                        : (v(t, function(t, i, o) {
                              e.call(n, t, i, o) && r.push(t);
                          }),
                          r);
                });
            var h = (t.some = t.any = function(n, r, i) {
                r || (r = t.identity);
                var o = !1;
                return null == n
                    ? o
                    : l && n.some === l
                    ? n.some(r, i)
                    : (v(n, function(t, n, a) {
                          if (o || (o = r.call(i, t, n, a))) return e;
                      }),
                      !!o);
            });
            (t.contains = t.include = function(t, e) {
                return (
                    null != t &&
                    (d && t.indexOf === d
                        ? -1 != t.indexOf(e)
                        : h(t, function(t) {
                              return t === e;
                          }))
                );
            }),
                (t.delay = function(t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function() {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function(e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function(t) {
                    var e, n, r;
                    return function() {
                        e ||
                            ((e = !0),
                            (n = arguments),
                            (r = this),
                            i.frame(function() {
                                (e = !1), t.apply(r, n);
                            }));
                    };
                }),
                (t.debounce = function(e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var f = t.now() - u;
                            f < n
                                ? (i = setTimeout(s, n - f))
                                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function() {
                        (a = this), (o = arguments), (u = t.now());
                        var f = r && !i;
                        return i || (i = setTimeout(s, n)), f && ((c = e.apply(a, o)), (a = o = null)), c;
                    };
                }),
                (t.defaults = function(e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function(e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function(t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function(t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function() {
                        return new Date().getTime();
                    }),
                (t.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                });
            var E = /(.)^/,
                _ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                y = /\\|'|\r|\n|\u2028|\u2029/g,
                g = function(t) {
                    return "\\" + _[t];
                };
            return (
                (t.template = function(e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp(
                            [
                                (n.escape || E).source,
                                (n.interpolate || E).source,
                                (n.evaluate || E).source
                            ].join("|") + "|$",
                            "g"
                        ),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function(t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(y, g)),
                            (o = u + t.length),
                            n
                                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                                : r
                                ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                                : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a =
                            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                            a +
                            "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function(e) {
                            return u.call(this, e, t);
                        },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function(t, e, n) {
        t.exports = {
            default: n(141),
            __esModule: !0
        };
    },
    function(t, e, n) {
        n(82), n(150), (t.exports = n(52).f("iterator"));
    },
    function(t, e, n) {
        var r = n(43),
            i = n(44);
        t.exports = function(t) {
            return function(e, n) {
                var o,
                    a,
                    u = String(i(e)),
                    c = r(n),
                    s = u.length;
                return c < 0 || c >= s
                    ? t
                        ? ""
                        : void 0
                    : (o = u.charCodeAt(c)) < 55296 ||
                      o > 56319 ||
                      c + 1 === s ||
                      (a = u.charCodeAt(c + 1)) < 56320 ||
                      a > 57343
                    ? t
                        ? u.charAt(c)
                        : o
                    : t
                    ? u.slice(c, c + 2)
                    : a - 56320 + ((o - 55296) << 10) + 65536;
            };
        };
    },
    function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    function(t, e, n) {
        "use strict";
        var r = n(88),
            i = n(22),
            o = n(50),
            a = {};
        n(14)(a, n(1)("iterator"), function() {
            return this;
        }),
            (t.exports = function(t, e, n) {
                (t.prototype = r(a, {
                    next: i(1, n)
                })),
                    o(t, e + " Iterator");
            });
    },
    function(t, e, n) {
        var r = n(7),
            i = n(19),
            o = n(29);
        t.exports = n(8)
            ? Object.defineProperties
            : function(t, e) {
                  i(t);
                  for (var n, a = o(e), u = a.length, c = 0; u > c; ) r.f(t, (n = a[c++]), e[n]);
                  return t;
              };
    },
    function(t, e, n) {
        var r = n(15),
            i = n(91),
            o = n(147);
        t.exports = function(t) {
            return function(e, n, a) {
                var u,
                    c = r(e),
                    s = i(c.length),
                    f = o(a, s);
                if (t && n != n) {
                    for (; s > f; ) if ((u = c[f++]) != u) return !0;
                } else for (; s > f; f++) if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1;
            };
        };
    },
    function(t, e, n) {
        var r = n(43),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
        };
    },
    function(t, e, n) {
        var r = n(5).document;
        t.exports = r && r.documentElement;
    },
    function(t, e, n) {
        var r = n(9),
            i = n(51),
            o = n(47)("IE_PROTO"),
            a = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function(t) {
                return (
                    (t = i(t)),
                    r(t, o)
                        ? t[o]
                        : "function" == typeof t.constructor && t instanceof t.constructor
                        ? t.constructor.prototype
                        : t instanceof Object
                        ? a
                        : null
                );
            };
    },
    function(t, e, n) {
        n(151);
        for (
            var r = n(5),
                i = n(14),
                o = n(23),
                a = n(1)("toStringTag"),
                u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                    ","
                ),
                c = 0;
            c < u.length;
            c++
        ) {
            var s = u[c],
                f = r[s],
                l = f && f.prototype;
            l && !l[a] && i(l, a, s), (o[s] = o.Array);
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(152),
            i = n(153),
            o = n(23),
            a = n(15);
        (t.exports = n(83)(
            Array,
            "Array",
            function(t, e) {
                (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function() {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length
                    ? ((this._t = void 0), i(1))
                    : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
            },
            "values"
        )),
            (o.Arguments = o.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function(t, e) {
        t.exports = function() {};
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            };
        };
    },
    function(t, e, n) {
        t.exports = {
            default: n(155),
            __esModule: !0
        };
    },
    function(t, e, n) {
        n(156), n(162), n(163), n(164), (t.exports = n(6).Symbol);
    },
    function(t, e, n) {
        "use strict";
        var r = n(5),
            i = n(9),
            o = n(8),
            a = n(18),
            u = n(87),
            c = n(157).KEY,
            s = n(21),
            f = n(48),
            l = n(50),
            d = n(30),
            p = n(1),
            v = n(52),
            h = n(53),
            E = n(158),
            _ = n(159),
            y = n(19),
            g = n(20),
            m = n(15),
            I = n(45),
            O = n(22),
            T = n(88),
            b = n(160),
            S = n(161),
            w = n(7),
            A = n(29),
            R = S.f,
            x = w.f,
            L = b.f,
            N = r.Symbol,
            C = r.JSON,
            M = C && C.stringify,
            P = p("_hidden"),
            D = p("toPrimitive"),
            j = {}.propertyIsEnumerable,
            F = f("symbol-registry"),
            G = f("symbols"),
            X = f("op-symbols"),
            V = Object.prototype,
            k = "function" == typeof N,
            U = r.QObject,
            B = !U || !U.prototype || !U.prototype.findChild,
            H =
                o &&
                s(function() {
                    return (
                        7 !=
                        T(
                            x({}, "a", {
                                get: function() {
                                    return x(this, "a", {
                                        value: 7
                                    }).a;
                                }
                            })
                        ).a
                    );
                })
                    ? function(t, e, n) {
                          var r = R(V, e);
                          r && delete V[e], x(t, e, n), r && t !== V && x(V, e, r);
                      }
                    : x,
            W = function(t) {
                var e = (G[t] = T(N.prototype));
                return (e._k = t), e;
            },
            Y =
                k && "symbol" == typeof N.iterator
                    ? function(t) {
                          return "symbol" == typeof t;
                      }
                    : function(t) {
                          return t instanceof N;
                      },
            z = function(t, e, n) {
                return (
                    t === V && z(X, e, n),
                    y(t),
                    (e = I(e, !0)),
                    y(n),
                    i(G, e)
                        ? (n.enumerable
                              ? (i(t, P) && t[P][e] && (t[P][e] = !1),
                                (n = T(n, {
                                    enumerable: O(0, !1)
                                })))
                              : (i(t, P) || x(t, P, O(1, {})), (t[P][e] = !0)),
                          H(t, e, n))
                        : x(t, e, n)
                );
            },
            K = function(t, e) {
                y(t);
                for (var n, r = E((e = m(e))), i = 0, o = r.length; o > i; ) z(t, (n = r[i++]), e[n]);
                return t;
            },
            Q = function(t) {
                var e = j.call(this, (t = I(t, !0)));
                return (
                    !(this === V && i(G, t) && !i(X, t)) &&
                    (!(e || !i(this, t) || !i(G, t) || (i(this, P) && this[P][t])) || e)
                );
            },
            q = function(t, e) {
                if (((t = m(t)), (e = I(e, !0)), t !== V || !i(G, e) || i(X, e))) {
                    var n = R(t, e);
                    return !n || !i(G, e) || (i(t, P) && t[P][e]) || (n.enumerable = !0), n;
                }
            },
            $ = function(t) {
                for (var e, n = L(m(t)), r = [], o = 0; n.length > o; )
                    i(G, (e = n[o++])) || e == P || e == c || r.push(e);
                return r;
            },
            Z = function(t) {
                for (var e, n = t === V, r = L(n ? X : m(t)), o = [], a = 0; r.length > a; )
                    !i(G, (e = r[a++])) || (n && !i(V, e)) || o.push(G[e]);
                return o;
            };
        k ||
            (u(
                (N = function() {
                    if (this instanceof N) throw TypeError("Symbol is not a constructor!");
                    var t = d(arguments.length > 0 ? arguments[0] : void 0),
                        e = function(n) {
                            this === V && e.call(X, n),
                                i(this, P) && i(this[P], t) && (this[P][t] = !1),
                                H(this, t, O(1, n));
                        };
                    return (
                        o &&
                            B &&
                            H(V, t, {
                                configurable: !0,
                                set: e
                            }),
                        W(t)
                    );
                }).prototype,
                "toString",
                function() {
                    return this._k;
                }
            ),
            (S.f = q),
            (w.f = z),
            (n(92).f = b.f = $),
            (n(31).f = Q),
            (n(54).f = Z),
            o && !n(28) && u(V, "propertyIsEnumerable", Q, !0),
            (v.f = function(t) {
                return W(p(t));
            })),
            a(a.G + a.W + a.F * !k, {
                Symbol: N
            });
        for (
            var J = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                    ","
                ),
                tt = 0;
            J.length > tt;

        )
            p(J[tt++]);
        for (var et = A(p.store), nt = 0; et.length > nt; ) h(et[nt++]);
        a(a.S + a.F * !k, "Symbol", {
            for: function(t) {
                return i(F, (t += "")) ? F[t] : (F[t] = N(t));
            },
            keyFor: function(t) {
                if (!Y(t)) throw TypeError(t + " is not a symbol!");
                for (var e in F) if (F[e] === t) return e;
            },
            useSetter: function() {
                B = !0;
            },
            useSimple: function() {
                B = !1;
            }
        }),
            a(a.S + a.F * !k, "Object", {
                create: function(t, e) {
                    return void 0 === e ? T(t) : K(T(t), e);
                },
                defineProperty: z,
                defineProperties: K,
                getOwnPropertyDescriptor: q,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: Z
            }),
            C &&
                a(
                    a.S +
                        a.F *
                            (!k ||
                                s(function() {
                                    var t = N();
                                    return (
                                        "[null]" != M([t]) ||
                                        "{}" !=
                                            M({
                                                a: t
                                            }) ||
                                        "{}" != M(Object(t))
                                    );
                                })),
                    "JSON",
                    {
                        stringify: function(t) {
                            for (var e, n, r = [t], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                            if (((n = e = r[1]), (g(e) || void 0 !== t) && !Y(t)))
                                return (
                                    _(e) ||
                                        (e = function(t, e) {
                                            if (("function" == typeof n && (e = n.call(this, t, e)), !Y(e)))
                                                return e;
                                        }),
                                    (r[1] = e),
                                    M.apply(C, r)
                                );
                        }
                    }
                ),
            N.prototype[D] || n(14)(N.prototype, D, N.prototype.valueOf),
            l(N, "Symbol"),
            l(Math, "Math", !0),
            l(r.JSON, "JSON", !0);
    },
    function(t, e, n) {
        var r = n(30)("meta"),
            i = n(20),
            o = n(9),
            a = n(7).f,
            u = 0,
            c =
                Object.isExtensible ||
                function() {
                    return !0;
                },
            s = !n(21)(function() {
                return c(Object.preventExtensions({}));
            }),
            f = function(t) {
                a(t, r, {
                    value: {
                        i: "O" + ++u,
                        w: {}
                    }
                });
            },
            l = (t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, r)) {
                        if (!c(t)) return "F";
                        if (!e) return "E";
                        f(t);
                    }
                    return t[r].i;
                },
                getWeak: function(t, e) {
                    if (!o(t, r)) {
                        if (!c(t)) return !0;
                        if (!e) return !1;
                        f(t);
                    }
                    return t[r].w;
                },
                onFreeze: function(t) {
                    return s && l.NEED && c(t) && !o(t, r) && f(t), t;
                }
            });
    },
    function(t, e, n) {
        var r = n(29),
            i = n(54),
            o = n(31);
        t.exports = function(t) {
            var e = r(t),
                n = i.f;
            if (n) for (var a, u = n(t), c = o.f, s = 0; u.length > s; ) c.call(t, (a = u[s++])) && e.push(a);
            return e;
        };
    },
    function(t, e, n) {
        var r = n(46);
        t.exports =
            Array.isArray ||
            function(t) {
                return "Array" == r(t);
            };
    },
    function(t, e, n) {
        var r = n(15),
            i = n(92).f,
            o = {}.toString,
            a =
                "object" == typeof window && window && Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window)
                    : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t)
                ? (function(t) {
                      try {
                          return i(t);
                      } catch (t) {
                          return a.slice();
                      }
                  })(t)
                : i(r(t));
        };
    },
    function(t, e, n) {
        var r = n(31),
            i = n(22),
            o = n(15),
            a = n(45),
            u = n(9),
            c = n(85),
            s = Object.getOwnPropertyDescriptor;
        e.f = n(8)
            ? s
            : function(t, e) {
                  if (((t = o(t)), (e = a(e, !0)), c))
                      try {
                          return s(t, e);
                      } catch (t) {}
                  if (u(t, e)) return i(!r.f.call(t, e), t[e]);
              };
    },
    function(t, e) {},
    function(t, e, n) {
        n(53)("asyncIterator");
    },
    function(t, e, n) {
        n(53)("observable");
    },
    function(t, e, n) {
        "use strict";
        var r = n(13);
        r.define(
            "edit",
            (t.exports = function(t, e, n) {
                if (((n = n || {}), (r.env("test") || r.env("frame")) && !n.fixture))
                    return {
                        exit: 1
                    };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function() {
                            (i = !0),
                                (window.WebflowEditor = !0),
                                o.off(c, l),
                                (function(t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src = "https://webflow.com/site/third-party-cookie-check.html"),
                                        (e.style.display = "none"),
                                        (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data
                                            ? (_(e, n), t(!1))
                                            : "WF_third_party_cookies_supported" === r.data &&
                                              (_(e, n), t(!0));
                                    };
                                    (e.onerror = function() {
                                        _(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function(e) {
                                    t.ajax({
                                        url: E("https://editor-api.webflow.com/api/editor/view"),
                                        data: {
                                            siteId: a.attr("data-wf-site")
                                        },
                                        xhrFields: {
                                            withCredentials: !0
                                        },
                                        dataType: "json",
                                        crossDomain: !0,
                                        success: d(e)
                                    });
                                });
                        },
                    f = !1;
                try {
                    f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
                } catch (t) {}

                function l() {
                    i || (/\?edit/.test(u.hash) && s());
                }

                function d(t) {
                    return function(e) {
                        e
                            ? ((e.thirdPartyCookiesSupported = t),
                              p(h(e.bugReporterScriptPath), function() {
                                  p(h(e.scriptPath), function() {
                                      window.WebflowEditor(e);
                                  });
                              }))
                            : console.error("Could not load editor data");
                    };
                }

                function p(e, n) {
                    t.ajax({
                        type: "GET",
                        url: e,
                        dataType: "script",
                        cache: !0
                    }).then(n, v);
                }

                function v(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }

                function h(t) {
                    return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t);
                }

                function E(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }

                function _(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return (
                    f
                        ? s()
                        : u.search
                        ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s()
                        : o.on(c, l).triggerHandler(c),
                    {}
                );
            })
        );
    },
    function(t, e, n) {
        "use strict";
        var r = n(167);

        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function(t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function(t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function(t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                }
            };
        (a.triggers = {}),
            (a.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            }),
            o.extend(a.triggers, u),
            (t.exports = a);
    },
    function(t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function(t, e) {
                    e.__wf_intro = null;
                },
                intro: function(t, e) {
                    e.__wf_intro || ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function(t, e) {
                    e.__wf_intro && ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                }
            };
        (i.triggers = {}),
            (i.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            }),
            (i.init = function() {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function() {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function(t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function(t, e, n) {
        "use strict";
        var r = n(13),
            i = n(169);
        i.setEnv(r.env),
            r.define(
                "ix2",
                (t.exports = function() {
                    return i;
                })
            );
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.actions = e.store = e.destroy = e.init = e.setEnv = void 0);
        var r,
            i = n(93),
            o = n(181),
            a =
                (r = o) && r.__esModule
                    ? r
                    : {
                          default: r
                      },
            u = n(130),
            c = (function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return (e.default = t), e;
            })(n(77));
        var s = (0, i.createStore)(a.default);

        function f() {
            (0, u.stopEngine)(s);
        }
        (e.setEnv = function(t) {
            t() && (0, u.observeRequests)(s);
        }),
            (e.init = function(t) {
                f(),
                    (0, u.startEngine)({
                        store: s,
                        rawData: t,
                        allowEvents: !0
                    });
            }),
            (e.destroy = f),
            (e.store = s),
            (e.actions = c);
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(95),
            i = n(173),
            o = n(174),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.default ? r.default.toStringTag : void 0;
        e.default = function(t) {
            return null == t
                ? void 0 === t
                    ? u
                    : a
                : c && c in Object(t)
                ? Object(i.default)(t)
                : Object(o.default)(t);
        };
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(172),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.default || i || Function("return this")();
        e.default = o;
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n;
            }.call(this, n(56));
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(95),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.default ? r.default.toStringTag : void 0;
        e.default = function(t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function(t) {
            return r.call(t);
        };
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(176),
            i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i;
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function(t, e) {
                return function(n) {
                    return t(e(n));
                };
            });
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function(t) {
                return null != t && "object" == typeof t;
            });
    },
    function(t, e, n) {
        "use strict";
        n.r(e),
            function(t, r) {
                var i,
                    o = n(180);
                i =
                    "undefined" != typeof self
                        ? self
                        : "undefined" != typeof window
                        ? window
                        : void 0 !== t
                        ? t
                        : r;
                var a = Object(o.default)(i);
                e.default = a;
            }.call(this, n(56), n(179)(t));
    },
    function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l;
                        }
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i;
                        }
                    }),
                    Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e,
                n = t.Symbol;
            return (
                "function" == typeof n
                    ? n.observable
                        ? (e = n.observable)
                        : ((e = n("observable")), (n.observable = e))
                    : (e = "@@observable"),
                e
            );
        }
        n.r(e),
            n.d(e, "default", function() {
                return r;
            });
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(93),
            i = n(182),
            o = n(265),
            a = n(270),
            u = n(2),
            c = n(271),
            s = n(272),
            f = u.IX2ElementsReducer.ixElements;
        e.default = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixData = void 0);
        var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments[1];
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t;
            }
        };
    },
    function(t, e, n) {
        var r = n(184),
            i = n(236),
            o = n(116);
        t.exports = function(t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function(n) {
                      return n === t || r(n, t, e);
                  };
        };
    },
    function(t, e, n) {
        var r = n(102),
            i = n(106),
            o = 1,
            a = 2;
        t.exports = function(t, e, n, u) {
            var c = n.length,
                s = c,
                f = !u;
            if (null == t) return !s;
            for (t = Object(t); c--; ) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++c < s; ) {
                var d = (l = n[c])[0],
                    p = t[d],
                    v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var h = new r();
                    if (u) var E = u(p, v, d, t, e, h);
                    if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1;
                }
            }
            return !0;
        };
    },
    function(t, e) {
        t.exports = function() {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function(t, e, n) {
        var r = n(33),
            i = Array.prototype.splice;
        t.exports = function(t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
        };
    },
    function(t, e, n) {
        var r = n(33);
        t.exports = function(t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function(t, e, n) {
        var r = n(33);
        t.exports = function(t) {
            return r(this.__data__, t) > -1;
        };
    },
    function(t, e, n) {
        var r = n(33);
        t.exports = function(t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function(t, e, n) {
        var r = n(32);
        t.exports = function() {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function(t, e) {
        t.exports = function(t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return this.__data__.get(t);
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t);
        };
    },
    function(t, e, n) {
        var r = n(32),
            i = n(60),
            o = n(61),
            a = 200;
        t.exports = function(t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1) return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function(t, e, n) {
        var r = n(103),
            i = n(198),
            o = n(4),
            a = n(105),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            f = c.toString,
            l = s.hasOwnProperty,
            d = RegExp(
                "^" +
                    f
                        .call(l)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        t.exports = function(t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function(t, e, n) {
        var r = n(24),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t) {
            return n.call(t);
        };
    },
    function(t, e, n) {
        var r,
            i = n(199),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function(t) {
            return !!o && o in t;
        };
    },
    function(t, e, n) {
        var r = n(3)["__core-js_shared__"];
        t.exports = r;
    },
    function(t, e) {
        t.exports = function(t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function(t, e, n) {
        var r = n(202),
            i = n(32),
            o = n(60);
        t.exports = function() {
            (this.size = 0),
                (this.__data__ = {
                    hash: new r(),
                    map: new (o || i)(),
                    string: new r()
                });
        };
    },
    function(t, e, n) {
        var r = n(203),
            i = n(204),
            o = n(205),
            a = n(206),
            u = n(207);

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function(t, e, n) {
        var r = n(34);
        t.exports = function() {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function(t, e) {
        t.exports = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function(t, e, n) {
        var r = n(34),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function(t, e, n) {
        var r = n(34),
            i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function(t, e, n) {
        var r = n(34),
            i = "__lodash_hash_undefined__";
        t.exports = function(t, e) {
            var n = this.__data__;
            return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this;
        };
    },
    function(t, e, n) {
        var r = n(35);
        t.exports = function(t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e
                ? "__proto__" !== t
                : null === t;
        };
    },
    function(t, e, n) {
        var r = n(35);
        t.exports = function(t) {
            return r(this, t).get(t);
        };
    },
    function(t, e, n) {
        var r = n(35);
        t.exports = function(t) {
            return r(this, t).has(t);
        };
    },
    function(t, e, n) {
        var r = n(35);
        t.exports = function(t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function(t, e, n) {
        var r = n(102),
            i = n(107),
            o = n(219),
            a = n(223),
            u = n(69),
            c = n(0),
            s = n(63),
            f = n(65),
            l = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, E, _, y) {
            var g = c(t),
                m = c(e),
                I = g ? p : u(t),
                O = m ? p : u(e),
                T = (I = I == d ? v : I) == v,
                b = (O = O == d ? v : O) == v,
                S = I == O;
            if (S && s(t)) {
                if (!s(e)) return !1;
                (g = !0), (T = !1);
            }
            if (S && !T) return y || (y = new r()), g || f(t) ? i(t, e, n, E, _, y) : o(t, e, I, n, E, _, y);
            if (!(n & l)) {
                var w = T && h.call(t, "__wrapped__"),
                    A = b && h.call(e, "__wrapped__");
                if (w || A) {
                    var R = w ? t.value() : t,
                        x = A ? e.value() : e;
                    return y || (y = new r()), _(R, x, n, E, y);
                }
            }
            return !!S && (y || (y = new r()), a(t, e, n, E, _, y));
        };
    },
    function(t, e, n) {
        var r = n(61),
            i = n(215),
            o = n(216);

        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (t.exports = a);
    },
    function(t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function(t) {
            return this.__data__.set(t, n), this;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t);
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            return t.has(e);
        };
    },
    function(t, e, n) {
        var r = n(24),
            i = n(220),
            o = n(59),
            a = n(107),
            u = n(221),
            c = n(222),
            s = 1,
            f = 2,
            l = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            h = "[object Number]",
            E = "[object RegExp]",
            _ = "[object Set]",
            y = "[object String]",
            g = "[object Symbol]",
            m = "[object ArrayBuffer]",
            I = "[object DataView]",
            O = r ? r.prototype : void 0,
            T = O ? O.valueOf : void 0;
        t.exports = function(t, e, n, r, O, b, S) {
            switch (n) {
                case I:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    (t = t.buffer), (e = e.buffer);
                case m:
                    return !(t.byteLength != e.byteLength || !b(new i(t), new i(e)));
                case l:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case E:
                case y:
                    return t == e + "";
                case v:
                    var w = u;
                case _:
                    var A = r & s;
                    if ((w || (w = c), t.size != e.size && !A)) return !1;
                    var R = S.get(t);
                    if (R) return R == e;
                    (r |= f), S.set(t, e);
                    var x = a(w(t), w(e), r, O, b, S);
                    return S.delete(t), x;
                case g:
                    if (T) return T.call(t) == T.call(e);
            }
            return !1;
        };
    },
    function(t, e, n) {
        var r = n(3).Uint8Array;
        t.exports = r;
    },
    function(t, e) {
        t.exports = function(t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function(t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function(t, e) {
        t.exports = function(t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function(t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function(t, e, n) {
        var r = n(224),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, a, u, c) {
            var s = n & i,
                f = r(t),
                l = f.length;
            if (l != r(e).length && !s) return !1;
            for (var d = l; d--; ) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t);
            if (v && c.get(e)) return v == e;
            var h = !0;
            c.set(t, e), c.set(e, t);
            for (var E = s; ++d < l; ) {
                var _ = t[(p = f[d])],
                    y = e[p];
                if (a) var g = s ? a(y, _, p, e, t, c) : a(_, y, p, t, e, c);
                if (!(void 0 === g ? _ === y || u(_, y, n, a, c) : g)) {
                    h = !1;
                    break;
                }
                E || (E = "constructor" == p);
            }
            if (h && !E) {
                var m = t.constructor,
                    I = e.constructor;
                m != I &&
                    "constructor" in t &&
                    "constructor" in e &&
                    !("function" == typeof m && m instanceof m && "function" == typeof I && I instanceof I) &&
                    (h = !1);
            }
            return c.delete(t), c.delete(e), h;
        };
    },
    function(t, e, n) {
        var r = n(108),
            i = n(109),
            o = n(36);
        t.exports = function(t) {
            return r(t, o, i);
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
        };
    },
    function(t, e, n) {
        var r = n(16),
            i = n(12),
            o = "[object Arguments]";
        t.exports = function(t) {
            return i(t) && r(t) == o;
        };
    },
    function(t, e) {
        t.exports = function() {
            return !1;
        };
    },
    function(t, e, n) {
        var r = n(16),
            i = n(66),
            o = n(12),
            a = {};
        (a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a[
            "[object Int16Array]"
        ] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a[
            "[object Uint16Array]"
        ] = a["[object Uint32Array]"] = !0),
            (a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a[
                "[object Boolean]"
            ] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a[
                "[object Function]"
            ] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a[
                "[object Set]"
            ] = a["[object String]"] = a["[object WeakMap]"] = !1),
            (t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e);
            };
        };
    },
    function(t, e, n) {
        (function(t) {
            var r = n(104),
                i = e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) {}
                })();
            t.exports = u;
        }.call(this, n(112)(t)));
    },
    function(t, e, n) {
        var r = n(113)(Object.keys, Object);
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(11)(n(3), "DataView");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(11)(n(3), "Promise");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(11)(n(3), "Set");
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(115),
            i = n(36);
        t.exports = function(t) {
            for (var e = i(t), n = e.length; n--; ) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function(t, e, n) {
        var r = n(106),
            i = n(38),
            o = n(241),
            a = n(71),
            u = n(115),
            c = n(116),
            s = n(25),
            f = 1,
            l = 2;
        t.exports = function(t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function(n) {
                      var a = i(n, t);
                      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
                  };
        };
    },
    function(t, e, n) {
        var r = n(239),
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = r(function(t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(i, function(t, n, r, i) {
                        e.push(r ? i.replace(o, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = a;
    },
    function(t, e, n) {
        var r = n(240),
            i = 500;
        t.exports = function(t) {
            var e = r(t, function(t) {
                    return n.size === i && n.clear(), t;
                }),
                n = e.cache;
            return e;
        };
    },
    function(t, e, n) {
        var r = n(61),
            i = "Expected a function";

        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError(i);
            var n = function() {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function(t, e, n) {
        var r = n(242),
            i = n(243);
        t.exports = function(t, e) {
            return null != t && i(t, e, r);
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            return null != t && e in Object(t);
        };
    },
    function(t, e, n) {
        var r = n(39),
            i = n(37),
            o = n(0),
            a = n(64),
            u = n(66),
            c = n(25);
        t.exports = function(t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d))) break;
                t = t[d];
            }
            return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
        };
    },
    function(t, e, n) {
        var r = n(120),
            i = n(245),
            o = n(71),
            a = n(25);
        t.exports = function(t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function(t, e, n) {
        var r = n(70);
        t.exports = function(t) {
            return function(e) {
                return r(e, t);
            };
        };
    },
    function(t, e, n) {
        var r = n(121),
            i = n(10),
            o = n(73),
            a = Math.max;
        t.exports = function(t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function(t, e, n) {
        var r = n(74),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function(t) {
            return t
                ? (t = r(t)) === i || t === -i
                    ? (t < 0 ? -1 : 1) * o
                    : t == t
                    ? t
                    : 0
                : 0 === t
                ? t
                : 0;
        };
    },
    function(t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;

        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }

        function f(t, e) {
            return 3 * e - 6 * t;
        }

        function l(t) {
            return 3 * t;
        }

        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
        }

        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
        }
        t.exports = function(t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

            function h(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
                var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
                    E = p(h, t, s);
                return E >= r
                    ? (function(t, e, r, i) {
                          for (var o = 0; o < n; ++o) {
                              var a = p(e, r, i);
                              if (0 === a) return e;
                              e -= (d(e, r, i) - t) / a;
                          }
                          return e;
                      })(e, h, t, s)
                    : 0 === E
                    ? h
                    : (function(t, e, n, r, a) {
                          var u,
                              c,
                              s = 0;
                          do {
                              (u = d((c = e + (n - e) / 2), r, a) - t) > 0 ? (n = c) : (e = c);
                          } while (Math.abs(u) > i && ++s < o);
                          return c;
                      })(e, c, c + u, t, s);
            }
            return function(n) {
                return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f);
            };
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixElements = void 0),
            (e.createElementState = c),
            (e.mergeActionState = s);
        var r = n(26),
            i = n(76),
            o = n(124),
            a = {},
            u = "refState";
        e.ixElements = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case o.IX2_SESSION_STOPPED:
                    return a;
                case o.IX2_INSTANCE_ADDED:
                    var n = e.payload,
                        i = n.elementId,
                        u = n.element,
                        f = n.origin,
                        l = n.actionItem,
                        d = n.refType,
                        p = l.actionTypeId,
                        v = t;
                    return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, l)), s(v, i, p, f, l);
                case o.IX2_ELEMENT_STATE_CHANGED:
                    var h = e.payload;
                    return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
                default:
                    return t;
            }
        };

        function c(t, e, n, o, a) {
            var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
            return (0, r.mergeIn)(t, [o], {
                id: o,
                ref: e,
                refId: u,
                refType: n
            });
        }

        function s(t, e, n, i, o) {
            var a = (function(t) {
                    var e = t.config;
                    return f.reduce(function(t, n) {
                        var r = n[0],
                            i = n[1],
                            o = e[r],
                            a = e[i];
                        return null != o && null != a && (t[i] = a), t;
                    }, {});
                })(o),
                c = [e, u, n];
            return (0, r.mergeIn)(t, c, i, a);
        }
        var f = [
            [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
            [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
            [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
            [i.CONFIG_VALUE, i.CONFIG_UNIT]
        ];
    },
    function(t, e, n) {
        t.exports = {
            default: n(251),
            __esModule: !0
        };
    },
    function(t, e, n) {
        n(252);
        var r = n(6).Object;
        t.exports = function(t, e, n) {
            return r.defineProperty(t, e, n);
        };
    },
    function(t, e, n) {
        var r = n(18);
        r(r.S + r.F * !n(8), "Object", {
            defineProperty: n(7).f
        });
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        (e.getPluginConfig = function(t, e, n, r) {
            return t ? t.totalFrames * e : n[r];
        }),
            (e.getPluginOrigin = function(t, e) {
                var n = e.config.startAtPercent,
                    r = t.totalFrames;
                return {
                    value: Math.floor((n / 100) * r)
                };
            }),
            (e.getPluginDestination = function(t, e) {
                var n = e.config.endAtPercent,
                    r = t.totalFrames;
                return {
                    value: Math.floor((n / 100) * r)
                };
            }),
            (e.createPluginInstance = function(t, e) {
                var n = e.config;
                if (!n.animationData) return null;
                var i = window.Webflow.require("lottie").lottie,
                    o = t.getAttribute("data-w-id");
                i.destroy(o);
                var a = i.loadAnimation({
                    name: o,
                    container: t,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    animationData: JSON.parse(n.animationData)
                });
                return a.setSubframe(!0), n.useAnimationDuration || a.setSpeed(r(n.duration, a)), a;
            }),
            (e.renderPlugin = function(t, e, n) {
                var r =
                    -1 === n.config.direction
                        ? e[n.actionTypeId].value
                        : t.totalFrames - e[n.actionTypeId].value;
                t.setCurrentRawFrameValue(r);
            }),
            (e.cleanupPlugin = function(t) {
                (0, window.Webflow.require("lottie").cleanupElement)(t);
            });
        var r = function(t, e) {
            return (
                t /
                (function(t, e) {
                    return (e / t) * 1e3;
                })(e.totalFrames, e.frameRate)
            );
        };
    },
    function(t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a = c(n(27)),
            u = c(n(41));

        function c(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.getItemConfigByKey = void 0),
            (e.getInstanceId = function() {
                return "i" + w++;
            }),
            (e.getElementId = function(t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + A++;
            }),
            (e.reifyState = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = (0, f.default)(
                        e,
                        function(t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function(t) {
                          return t.key;
                      }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return {
                    ixData: {
                        events: e,
                        actionLists: n,
                        eventTypeMap: i,
                        mediaQueries: o,
                        mediaQueryKeys: a
                    }
                };
            }),
            (e.observeStore = function(t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? R : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function() {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.getAffectedElements = L),
            (e.getComputedStyle = function(t) {
                var e = t.element,
                    n = t.actionItem;
                if (!m.IS_BROWSER_ENV) return {};
                switch (n.actionTypeId) {
                    case g.STYLE_SIZE:
                    case g.STYLE_BACKGROUND_COLOR:
                    case g.STYLE_BORDER:
                    case g.STYLE_TEXT_COLOR:
                    case g.GENERAL_DISPLAY:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.getInstanceOrigin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments[3],
                    i = arguments[4],
                    o = arguments[5],
                    a = i.getStyle,
                    u = r.actionTypeId,
                    c = r.config;
                if ((0, E.isPluginType)(u)) return (0, E.getPluginOrigin)(u)(o, r);
                switch (u) {
                    case g.TRANSFORM_MOVE:
                    case g.TRANSFORM_SCALE:
                    case g.TRANSFORM_ROTATE:
                    case g.TRANSFORM_SKEW:
                        return e[u] || D[u];
                    case g.STYLE_FILTER:
                        return C(e[u], r.config.filters);
                    case g.STYLE_OPACITY:
                        return {
                            value: (0, s.default)(parseFloat(a(t, _.OPACITY)), 1)
                        };
                    case g.STYLE_SIZE:
                        var f = a(t, _.WIDTH),
                            l = a(t, _.HEIGHT),
                            d = void 0,
                            p = void 0;
                        return (
                            (d =
                                c.widthUnit === _.AUTO
                                    ? N.test(f)
                                        ? parseFloat(f)
                                        : parseFloat(n.width)
                                    : (0, s.default)(parseFloat(f), parseFloat(n.width))),
                            (p =
                                c.heightUnit === _.AUTO
                                    ? N.test(l)
                                        ? parseFloat(l)
                                        : parseFloat(n.height)
                                    : (0, s.default)(parseFloat(l), parseFloat(n.height))),
                            {
                                widthValue: d,
                                heightValue: p
                            }
                        );
                    case g.STYLE_BACKGROUND_COLOR:
                    case g.STYLE_BORDER:
                    case g.STYLE_TEXT_COLOR:
                        return (function(t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = T[n],
                                a = i(e, o),
                                u = X.test(a) ? a : r[o],
                                c = (function(t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(V, u).split(_.COMMA_DELIMITER);
                            return {
                                rValue: (0, s.default)(parseInt(c[0], 10), 255),
                                gValue: (0, s.default)(parseInt(c[1], 10), 255),
                                bValue: (0, s.default)(parseInt(c[2], 10), 255),
                                aValue: (0, s.default)(parseFloat(c[3]), 1)
                            };
                        })({
                            element: t,
                            actionTypeId: u,
                            computedStyle: n,
                            getStyle: a
                        });
                    case g.GENERAL_DISPLAY:
                        return {
                            value: (0, s.default)(a(t, _.DISPLAY), n.display)
                        };
                    case g.OBJECT_VALUE:
                        return (
                            e[u] || {
                                value: 0
                            }
                        );
                    default:
                        return;
                }
            }),
            (e.getDestinationValues = function(t, e) {
                var n = t.element,
                    r = t.actionItem,
                    i = t.elementApi,
                    o = r.actionTypeId;
                if ((0, E.isPluginType)(o)) return (0, E.getPluginDestination)(o)(e, r);
                switch (o) {
                    case g.TRANSFORM_MOVE:
                    case g.TRANSFORM_SCALE:
                    case g.TRANSFORM_ROTATE:
                    case g.TRANSFORM_SKEW:
                        var a = r.config,
                            u = a.xValue,
                            c = a.yValue,
                            s = a.zValue;
                        return {
                            xValue: u,
                            yValue: c,
                            zValue: s
                        };
                    case g.STYLE_SIZE:
                        var f = i.getStyle,
                            l = i.setStyle,
                            d = i.getProperty,
                            p = r.config,
                            v = p.widthUnit,
                            h = p.heightUnit,
                            y = r.config,
                            I = y.widthValue,
                            O = y.heightValue;
                        if (!m.IS_BROWSER_ENV)
                            return {
                                widthValue: I,
                                heightValue: O
                            };
                        if (v === _.AUTO) {
                            var T = f(n, _.WIDTH);
                            l(n, _.WIDTH, ""), (I = d(n, "offsetWidth")), l(n, _.WIDTH, T);
                        }
                        if (h === _.AUTO) {
                            var b = f(n, _.HEIGHT);
                            l(n, _.HEIGHT, ""), (O = d(n, "offsetHeight")), l(n, _.HEIGHT, b);
                        }
                        return {
                            widthValue: I,
                            heightValue: O
                        };
                    case g.STYLE_BACKGROUND_COLOR:
                    case g.STYLE_BORDER:
                    case g.STYLE_TEXT_COLOR:
                        var S = r.config,
                            w = S.rValue,
                            A = S.gValue,
                            R = S.bValue,
                            x = S.aValue;
                        return {
                            rValue: w,
                            gValue: A,
                            bValue: R,
                            aValue: x
                        };
                    case g.STYLE_FILTER:
                        return r.config.filters.reduce(M, {});
                    default:
                        var L = r.config.value;
                        return {
                            value: L
                        };
                }
            }),
            (e.getRenderType = P),
            (e.getStyleProp = function(t, e) {
                return t === _.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case _.RENDER_TRANSFORM:
                        return (function(t, e, n, r, i) {
                            var o = G.map(function(t) {
                                    var n = D[t],
                                        r = e[t] || {},
                                        i = r.xValue,
                                        o = void 0 === i ? n.xValue : i,
                                        a = r.yValue,
                                        u = void 0 === a ? n.yValue : a,
                                        c = r.zValue,
                                        s = void 0 === c ? n.zValue : c,
                                        f = r.xUnit,
                                        l = void 0 === f ? "" : f,
                                        d = r.yUnit,
                                        p = void 0 === d ? "" : d,
                                        v = r.zUnit,
                                        h = void 0 === v ? "" : v;
                                    switch (t) {
                                        case g.TRANSFORM_MOVE:
                                            return (
                                                _.TRANSLATE_3D +
                                                "(" +
                                                o +
                                                l +
                                                ", " +
                                                u +
                                                p +
                                                ", " +
                                                s +
                                                h +
                                                ")"
                                            );
                                        case g.TRANSFORM_SCALE:
                                            return (
                                                _.SCALE_3D + "(" + o + l + ", " + u + p + ", " + s + h + ")"
                                            );
                                        case g.TRANSFORM_ROTATE:
                                            return (
                                                _.ROTATE_X +
                                                "(" +
                                                o +
                                                l +
                                                ") " +
                                                _.ROTATE_Y +
                                                "(" +
                                                u +
                                                p +
                                                ") " +
                                                _.ROTATE_Z +
                                                "(" +
                                                s +
                                                h +
                                                ")"
                                            );
                                        case g.TRANSFORM_SKEW:
                                            return _.SKEW + "(" + o + l + ", " + u + p + ")";
                                        default:
                                            return "";
                                    }
                                }).join(" "),
                                a = i.setStyle;
                            k(t, m.TRANSFORM_PREFIXED, i),
                                a(t, m.TRANSFORM_PREFIXED, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (f = c.xValue),
                                (l = c.yValue),
                                (d = c.zValue),
                                ((s === g.TRANSFORM_MOVE && void 0 !== d) ||
                                    (s === g.TRANSFORM_SCALE && void 0 !== d) ||
                                    (s === g.TRANSFORM_ROTATE && (void 0 !== f || void 0 !== l))) &&
                                    a(t, m.TRANSFORM_STYLE_PREFIXED, _.PRESERVE_3D);
                            var u, c, s, f, l, d;
                        })(t, e, n, i, a);
                    case _.RENDER_STYLE:
                        return (function(t, e, n, r, i, o) {
                            var a = o.setStyle,
                                u = r.actionTypeId,
                                c = r.config;
                            switch (u) {
                                case g.STYLE_SIZE:
                                    var s = r.config,
                                        l = s.widthUnit,
                                        d = void 0 === l ? "" : l,
                                        p = s.heightUnit,
                                        v = void 0 === p ? "" : p,
                                        h = n.widthValue,
                                        E = n.heightValue;
                                    void 0 !== h &&
                                        (d === _.AUTO && (d = "px"), k(t, _.WIDTH, o), a(t, _.WIDTH, h + d)),
                                        void 0 !== E &&
                                            (v === _.AUTO && (v = "px"),
                                            k(t, _.HEIGHT, o),
                                            a(t, _.HEIGHT, E + v));
                                    break;
                                case g.STYLE_FILTER:
                                    !(function(t, e, n, r) {
                                        var i = (0, f.default)(
                                                e,
                                                function(t, e, r) {
                                                    return t + " " + r + "(" + e + F(r, n) + ")";
                                                },
                                                ""
                                            ),
                                            o = r.setStyle;
                                        k(t, _.FILTER, r), o(t, _.FILTER, i);
                                    })(t, n, c, o);
                                    break;
                                case g.STYLE_BACKGROUND_COLOR:
                                case g.STYLE_BORDER:
                                case g.STYLE_TEXT_COLOR:
                                    var y = T[u],
                                        m = Math.round(n.rValue),
                                        I = Math.round(n.gValue),
                                        O = Math.round(n.bValue),
                                        b = n.aValue;
                                    k(t, y, o),
                                        a(
                                            t,
                                            y,
                                            b >= 1
                                                ? "rgb(" + m + "," + I + "," + O + ")"
                                                : "rgba(" + m + "," + I + "," + O + "," + b + ")"
                                        );
                                    break;
                                default:
                                    var S = c.unit,
                                        w = void 0 === S ? "" : S;
                                    k(t, i, o), a(t, i, n.value + w);
                            }
                        })(t, 0, n, i, o, a);
                    case _.RENDER_GENERAL:
                        return (function(t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case g.GENERAL_DISPLAY:
                                    var i = e.config.value;
                                    return void (i === _.FLEX && m.IS_BROWSER_ENV
                                        ? r(t, _.DISPLAY, m.FLEX_PREFIXED)
                                        : r(t, _.DISPLAY, i));
                            }
                        })(t, i, a);
                    case _.RENDER_PLUGIN:
                        var s = i.actionTypeId;
                        if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i);
                }
            }),
            (e.clearAllStyles = function(t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function(t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a &&
                        B({
                            actionList: a,
                            event: e,
                            elementApi: n
                        });
                }),
                    Object.keys(u).forEach(function(t) {
                        B({
                            actionList: u[t],
                            elementApi: n
                        });
                    });
            }),
            (e.cleanupHTMLElement = function(t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if ((0, E.isPluginType)(o)) return (0, E.cleanupPlugin)(o)(t, e);
                if (o === g.STYLE_SIZE) {
                    var a = e.config;
                    a.widthUnit === _.AUTO && r(t, _.WIDTH, ""),
                        a.heightUnit === _.AUTO && r(t, _.HEIGHT, "");
                }
                i(t, _.WILL_CHANGE) &&
                    W({
                        effect: U,
                        actionTypeId: o,
                        elementApi: n
                    })(t);
            }),
            (e.getMaxDurationItemIndex = z),
            (e.getActionListProgress = function(t, e) {
                var n = t.actionItemGroups,
                    r = t.useFirstGroupAsInitialState,
                    i = e.actionItem,
                    o = e.verboseTimeElapsed,
                    a = void 0 === o ? 0 : o,
                    u = 0,
                    c = 0;
                return (
                    n.forEach(function(t, e) {
                        if (!r || 0 !== e) {
                            var n = t.actionItems,
                                o = n[z(n)],
                                s = o.config,
                                f = o.actionTypeId;
                            i.id === o.id && (c = u + a);
                            var l = P(f) === _.RENDER_GENERAL ? 0 : s.duration;
                            u += s.delay + l;
                        }
                    }),
                    u > 0 ? (0, h.optimizeFloat)(c / u) : 0
                );
            }),
            (e.reduceListToGroup = function(t) {
                var e = t.actionListId,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = r.actionLists[e],
                    o = i.actionItemGroups,
                    a = i.continuousParameterGroups,
                    c = [],
                    s = function(t) {
                        return (
                            c.push(
                                (0, p.mergeIn)(t, ["config"], {
                                    delay: 0,
                                    duration: 0
                                })
                            ),
                            t.id === n
                        );
                    };
                return (
                    o &&
                        o.some(function(t) {
                            return t.actionItems.some(s);
                        }),
                    a &&
                        a.some(function(t) {
                            return t.continuousActionGroups.some(function(t) {
                                return t.actionItems.some(s);
                            });
                        }),
                    (0, p.setIn)(
                        r,
                        ["actionLists"],
                        (0, u.default)({}, e, {
                            id: e,
                            actionItemGroups: [
                                {
                                    actionItems: c
                                }
                            ]
                        })
                    )
                );
            }),
            (e.shouldNamespaceEventParameter = function(t, e) {
                var n = e.basedOn;
                return (
                    (t === y.SCROLLING_IN_VIEW && (n === y.ELEMENT || null == n)) ||
                    (t === y.MOUSE_MOVE && n === y.ELEMENT)
                );
            }),
            (e.getNamespacedParameterId = function(t, e) {
                return t + _.COLON_DELIMITER + e;
            }),
            (e.shouldAllowMediaQuery = function(t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.mediaQueriesEqual = function(t, e) {
                return (0, v.default)(t && t.sort(), e && e.sort());
            }),
            (e.stringifyTarget = function(t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget,
                    a = void 0 === o ? "" : o;
                return n + _.BAR_DELIMITER + i + _.BAR_DELIMITER + a;
            });
        var s = I(n(255)),
            f = I(n(256)),
            l = I(n(262)),
            d = I(n(38)),
            p = n(26),
            v = I(n(129)),
            h = n(123),
            E = n(126),
            _ = n(76),
            y = n(125),
            g = n(75),
            m = n(58);

        function I(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        var O = function(t) {
                return t.trim();
            },
            T = Object.freeze(
                ((r = {}),
                (0, u.default)(r, g.STYLE_BACKGROUND_COLOR, _.BACKGROUND_COLOR),
                (0, u.default)(r, g.STYLE_BORDER, _.BORDER_COLOR),
                (0, u.default)(r, g.STYLE_TEXT_COLOR, _.COLOR),
                r)
            ),
            b = Object.freeze(
                ((i = {}),
                (0, u.default)(i, m.TRANSFORM_PREFIXED, _.TRANSFORM),
                (0, u.default)(i, _.BACKGROUND_COLOR, _.BACKGROUND),
                (0, u.default)(i, _.OPACITY, _.OPACITY),
                (0, u.default)(i, _.FILTER, _.FILTER),
                (0, u.default)(i, _.WIDTH, _.WIDTH),
                (0, u.default)(i, _.HEIGHT, _.HEIGHT),
                i)
            ),
            S = {},
            w = 1;
        var A = 1;
        var R = function(t, e) {
            return t === e;
        };

        function x(t) {
            var e = void 0 === t ? "undefined" : (0, a.default)(t);
            return "string" === e
                ? {
                      id: t
                  }
                : null != t && "object" === e
                ? {
                      id: t.id,
                      objectId: t.objectId,
                      selector: t.selector,
                      selectorGuids: t.selectorGuids,
                      appliesTo: t.appliesTo,
                      useEventTarget: t.useEventTarget
                  }
                : {};
        }

        function L(t) {
            var e = t.config,
                n = t.event,
                r = t.eventTarget,
                i = t.elementRoot,
                o = t.elementApi;
            if (!o) throw new Error("IX2 missing elementApi");
            var a = o.getValidDocument,
                u = o.getQuerySelector,
                c = o.queryDocument,
                s = o.getChildElements,
                f = o.getSiblingElements,
                l = o.matchSelector,
                p = o.elementContains,
                v = o.isSiblingNode,
                h = e.target;
            if (!h) return [];
            var E = x(h),
                g = E.id,
                I = E.objectId,
                O = E.selector,
                T = E.selectorGuids,
                b = E.appliesTo,
                w = E.useEventTarget;
            if (I) return [S[I] || (S[I] = {})];
            if (b === y.PAGE) {
                var A = a(g);
                return A ? [A] : [];
            }
            var R = (0, d.default)(n, "action.config.affectedElements", {})[g || O] || {},
                L = Boolean(R.id || R.selector),
                N = void 0,
                C = void 0,
                M = void 0,
                P = n && u(x(n.target));
            if (
                (L
                    ? ((N = R.limitAffectedElements), (C = P), (M = u(R)))
                    : (C = M = u({
                          id: g,
                          selector: O,
                          selectorGuids: T
                      })),
                n && w)
            ) {
                var D = r && (M || !0 === w) ? [r] : c(P);
                if (M) {
                    if (w === _.PARENT)
                        return c(M).filter(function(t) {
                            return D.some(function(e) {
                                return p(t, e);
                            });
                        });
                    if (w === _.CHILDREN)
                        return c(M).filter(function(t) {
                            return D.some(function(e) {
                                return p(e, t);
                            });
                        });
                    if (w === _.SIBLINGS)
                        return c(M).filter(function(t) {
                            return D.some(function(e) {
                                return v(e, t);
                            });
                        });
                }
                return D;
            }
            return null == C || null == M
                ? []
                : m.IS_BROWSER_ENV && i
                ? c(M).filter(function(t) {
                      return i.contains(t);
                  })
                : N === _.CHILDREN
                ? c(C, M)
                : N === _.IMMEDIATE_CHILDREN
                ? s(c(C)).filter(l(M))
                : N === _.SIBLINGS
                ? f(c(C)).filter(l(M))
                : c(M);
        }
        var N = /px/,
            C = function(t, e) {
                return e.reduce(function(t, e) {
                    return null == t[e.type] && (t[e.type] = j[e.type]), t;
                }, t || {});
            };
        var M = function(t, e) {
            return e && (t[e.type] = e.value || 0), t;
        };
        e.getItemConfigByKey = function(t, e, n, r, i) {
            if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(r, i, n, e);
            switch (t) {
                case g.STYLE_FILTER:
                    var o = (0, l.default)(n.filters, function(t) {
                        return t.type === e;
                    });
                    return o ? o.value : 0;
                default:
                    return n[e];
            }
        };

        function P(t) {
            return /^TRANSFORM_/.test(t)
                ? _.RENDER_TRANSFORM
                : /^STYLE_/.test(t)
                ? _.RENDER_STYLE
                : /^GENERAL_/.test(t)
                ? _.RENDER_GENERAL
                : /^PLUGIN_/.test(t)
                ? _.RENDER_PLUGIN
                : void 0;
        }
        var D =
                ((o = {}),
                (0, u.default)(
                    o,
                    g.TRANSFORM_MOVE,
                    Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    })
                ),
                (0, u.default)(
                    o,
                    g.TRANSFORM_SCALE,
                    Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    })
                ),
                (0, u.default)(
                    o,
                    g.TRANSFORM_ROTATE,
                    Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    })
                ),
                (0, u.default)(
                    o,
                    g.TRANSFORM_SKEW,
                    Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                ),
                o),
            j = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }),
            F = function(t, e) {
                var n = (0, l.default)(e.filters, function(e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            G = Object.keys(D);
        var X = /^rgb/,
            V = RegExp("rgba?\\(([^)]+)\\)");

        function k(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = b[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, _.WILL_CHANGE);
                    if (a) {
                        var u = a.split(_.COMMA_DELIMITER).map(O);
                        -1 === u.indexOf(r) && o(t, _.WILL_CHANGE, u.concat(r).join(_.COMMA_DELIMITER));
                    } else o(t, _.WILL_CHANGE, r);
                }
            }
        }

        function U(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = b[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, _.WILL_CHANGE);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            _.WILL_CHANGE,
                            a
                                .split(_.COMMA_DELIMITER)
                                .map(O)
                                .filter(function(t) {
                                    return t !== r;
                                })
                                .join(_.COMMA_DELIMITER)
                        );
                }
            }
        }

        function B(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function(t) {
                    H({
                        actionGroup: t,
                        event: r,
                        elementApi: i
                    });
                }),
                a &&
                    a.forEach(function(t) {
                        t.continuousActionGroups.forEach(function(t) {
                            H({
                                actionGroup: t,
                                event: r,
                                elementApi: i
                            });
                        });
                    });
        }

        function H(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function(t) {
                var e = t.actionTypeId,
                    i = t.config,
                    o = W({
                        effect: Y,
                        actionTypeId: e,
                        elementApi: r
                    });
                L({
                    config: i,
                    event: n,
                    elementApi: r
                }).forEach(o);
            });
        }
        var W = function(t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function(t) {
                switch (n) {
                    case g.TRANSFORM_MOVE:
                    case g.TRANSFORM_SCALE:
                    case g.TRANSFORM_ROTATE:
                    case g.TRANSFORM_SKEW:
                        e(t, m.TRANSFORM_PREFIXED, r);
                        break;
                    case g.STYLE_FILTER:
                        e(t, _.FILTER, r);
                        break;
                    case g.STYLE_OPACITY:
                        e(t, _.OPACITY, r);
                        break;
                    case g.STYLE_SIZE:
                        e(t, _.WIDTH, r), e(t, _.HEIGHT, r);
                        break;
                    case g.STYLE_BACKGROUND_COLOR:
                    case g.STYLE_BORDER:
                    case g.STYLE_TEXT_COLOR:
                        e(t, T[n], r);
                        break;
                    case g.GENERAL_DISPLAY:
                        e(t, _.DISPLAY, r);
                }
            };
        };

        function Y(t, e, n) {
            var r = n.setStyle;
            U(t, e, n), r(t, e, ""), e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "");
        }

        function z(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function(t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function(t, e) {
        t.exports = function(t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function(t, e, n) {
        var r = n(257),
            i = n(127),
            o = n(10),
            a = n(261),
            u = n(0);
        t.exports = function(t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function(t, e) {
        t.exports = function(t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
            return n;
        };
    },
    function(t, e, n) {
        var r = n(259)();
        t.exports = r;
    },
    function(t, e) {
        t.exports = function(t) {
            return function(e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function(t, e, n) {
        var r = n(17);
        t.exports = function(t, e) {
            return function(n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (
                    var o = n.length, a = e ? o : -1, u = Object(n);
                    (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

                );
                return n;
            };
        };
    },
    function(t, e) {
        t.exports = function(t, e, n, r, i) {
            return (
                i(t, function(t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function(t, e, n) {
        var r = n(101)(n(263));
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(121),
            i = n(10),
            o = n(73),
            a = Math.max,
            u = Math.min;
        t.exports = function(t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return (
                void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))), r(t, i(e, 3), s, !0)
            );
        };
    },
    function(t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;

        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        t.exports = function(t, e) {
            if (i(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++) if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
            return !0;
        };
    },
    function(t, e, n) {
        "use strict";
        var r,
            i,
            o = n(41),
            a =
                (r = o) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixRequest = void 0);
        var u = (function(t) {
                return t && t.__esModule
                    ? t
                    : {
                          default: t
                      };
            })(n(42)),
            c = n(2),
            s = n(26);
        var f = c.IX2EngineActionTypes,
            l = f.IX2_PREVIEW_REQUESTED,
            d = f.IX2_PLAYBACK_REQUESTED,
            p = f.IX2_STOP_REQUESTED,
            v = f.IX2_CLEAR_REQUESTED,
            h = {
                preview: {},
                playback: {},
                stop: {},
                clear: {}
            },
            E = Object.create(
                null,
                ((i = {}),
                (0, a.default)(i, l, {
                    value: "preview"
                }),
                (0, a.default)(i, d, {
                    value: "playback"
                }),
                (0, a.default)(i, p, {
                    value: "stop"
                }),
                (0, a.default)(i, v, {
                    value: "clear"
                }),
                i)
            );
        e.ixRequest = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                e = arguments[1];
            if (e.type in E) {
                var n = [E[e.type]];
                return (0, s.setIn)(t, [n], (0, u.default)({}, e.payload));
            }
            return t;
        };
    },
    function(t, e, n) {
        t.exports = {
            default: n(267),
            __esModule: !0
        };
    },
    function(t, e, n) {
        n(268), (t.exports = n(6).Object.assign);
    },
    function(t, e, n) {
        var r = n(18);
        r(r.S + r.F, "Object", {
            assign: n(269)
        });
    },
    function(t, e, n) {
        "use strict";
        var r = n(29),
            i = n(54),
            o = n(31),
            a = n(51),
            u = n(90),
            c = Object.assign;
        t.exports =
            !c ||
            n(21)(function() {
                var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return (
                    (t[n] = 7),
                    r.split("").forEach(function(t) {
                        e[t] = t;
                    }),
                    7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
                );
            })
                ? function(t, e) {
                      for (var n = a(t), c = arguments.length, s = 1, f = i.f, l = o.f; c > s; )
                          for (
                              var d,
                                  p = u(arguments[s++]),
                                  v = f ? r(p).concat(f(p)) : r(p),
                                  h = v.length,
                                  E = 0;
                              h > E;

                          )
                              l.call(p, (d = v[E++])) && (n[d] = p[d]);
                      return n;
                  }
                : c;
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixSession = void 0);
        var r = n(2),
            i = n(26),
            o = r.IX2EngineActionTypes,
            a = o.IX2_SESSION_INITIALIZED,
            u = o.IX2_SESSION_STARTED,
            c = o.IX2_SESSION_STOPPED,
            s = o.IX2_EVENT_LISTENER_ADDED,
            f = o.IX2_EVENT_STATE_CHANGED,
            l = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            d = o.IX2_VIEWPORT_WIDTH_CHANGED,
            p = o.IX2_MEDIA_QUERIES_DEFINED,
            v = {
                active: !1,
                eventListeners: [],
                eventState: {},
                playbackState: {},
                viewportWidth: 0,
                mediaQueryKey: null,
                hasBoundaryNodes: !1,
                hasDefinedMediaQueries: !1
            };
        e.ixSession = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                e = arguments[1];
            switch (e.type) {
                case a:
                    var n = e.payload.hasBoundaryNodes;
                    return (0, i.set)(t, "hasBoundaryNodes", n);
                case u:
                    return (0, i.set)(t, "active", !0);
                case c:
                    return v;
                case s:
                    var r = (0, i.addLast)(t.eventListeners, e.payload);
                    return (0, i.set)(t, "eventListeners", r);
                case f:
                    var o = e.payload,
                        h = o.stateKey,
                        E = o.newState;
                    return (0, i.setIn)(t, ["eventState", h], E);
                case l:
                    var _ = e.payload,
                        y = _.actionListId,
                        g = _.isPlaying;
                    return (0, i.setIn)(t, ["playbackState", y], g);
                case d:
                    for (
                        var m = e.payload, I = m.width, O = m.mediaQueries, T = O.length, b = null, S = 0;
                        S < T;
                        S++
                    ) {
                        var w = O[S],
                            A = w.key,
                            R = w.min,
                            x = w.max;
                        if (I >= R && I <= x) {
                            b = A;
                            break;
                        }
                    }
                    return (0, i.merge)(t, {
                        viewportWidth: I,
                        mediaQueryKey: b
                    });
                case p:
                    return (0, i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t;
            }
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixInstances = void 0);
        var r = n(2),
            i = n(26),
            o = r.IX2EngineActionTypes,
            a = o.IX2_RAW_DATA_IMPORTED,
            u = o.IX2_SESSION_STOPPED,
            c = o.IX2_INSTANCE_ADDED,
            s = o.IX2_INSTANCE_STARTED,
            f = o.IX2_INSTANCE_REMOVED,
            l = o.IX2_ANIMATION_FRAME_CHANGED,
            d = r.IX2EasingUtils,
            p = d.optimizeFloat,
            v = d.applyEasing,
            h = r.IX2EngineConstants.RENDER_GENERAL,
            E = r.IX2VanillaUtils,
            _ = E.getItemConfigByKey,
            y = E.getRenderType,
            g = E.getStyleProp,
            m = function(t, e) {
                var n = t.position,
                    r = t.parameterId,
                    o = t.actionGroups,
                    a = t.destinationKeys,
                    u = t.smoothing,
                    c = t.restingValue,
                    s = t.actionTypeId,
                    f = t.pluginInstance,
                    l = e.payload.parameters,
                    d = Math.max(1 - u, 0.01),
                    h = l[r];
                null == h && ((d = 1), (h = c));
                var E = Math.max(h, 0) || 0,
                    y = p(E - n),
                    g = p(n + y * d),
                    m = 100 * g;
                if (g === n && t.current) return t;
                for (var I = void 0, O = void 0, T = void 0, b = void 0, S = 0, w = o.length; S < w; S++) {
                    var A = o[S],
                        R = A.keyframe,
                        x = A.actionItems;
                    if ((0 === S && (I = x[0]), m >= R)) {
                        I = x[0];
                        var L = o[S + 1],
                            N = L && m !== R;
                        (O = N ? L.actionItems[0] : null), N && ((T = R / 100), (b = (L.keyframe - R) / 100));
                    }
                }
                var C = {};
                if (I && !O)
                    for (var M = 0, P = a.length; M < P; M++) {
                        var D = a[M];
                        C[D] = _(s, D, I.config, f, g);
                    }
                else if (I && O)
                    for (
                        var j = (g - T) / b, F = I.config.easing, G = v(F, j), X = 0, V = a.length;
                        X < V;
                        X++
                    ) {
                        var k = a[X],
                            U = _(s, k, I.config, f, g),
                            B = (_(s, k, O.config, f, g) - U) * G + U;
                        C[k] = B;
                    }
                return (0, i.merge)(t, {
                    position: g,
                    current: C
                });
            },
            I = function(t, e) {
                var n = t,
                    r = n.active,
                    o = n.origin,
                    a = n.start,
                    u = n.immediate,
                    c = n.renderType,
                    s = n.verbose,
                    f = n.actionItem,
                    l = n.destination,
                    d = n.destinationKeys,
                    E = f.config.easing,
                    _ = f.config,
                    y = _.duration,
                    g = _.delay;
                c === h ? (y = 0) : u && (y = g = 0);
                var m = e.payload.now;
                if (r && o) {
                    var I = m - (a + g);
                    if (s) {
                        var O = m - a,
                            T = y + g,
                            b = p(Math.min(Math.max(0, O / T), 1));
                        t = (0, i.set)(t, "verboseTimeElapsed", T * b);
                    }
                    if (I < 0) return t;
                    var S = p(Math.min(Math.max(0, I / y), 1)),
                        w = v(E, S),
                        A = {},
                        R = null;
                    return (
                        d.length &&
                            (R = d.reduce(function(t, e) {
                                var n = l[e],
                                    r = parseFloat(o[e]) || 0,
                                    i = (parseFloat(n) - r) * w + r;
                                return (t[e] = i), t;
                            }, {})),
                        (A.current = R),
                        (A.position = S),
                        1 === S && ((A.active = !1), (A.complete = !0)),
                        (0, i.merge)(t, A)
                    );
                }
                return t;
            };
        e.ixInstances = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments[1];
            switch (e.type) {
                case a:
                    return e.payload.ixInstances || Object.freeze({});
                case u:
                    return Object.freeze({});
                case c:
                    var n = e.payload,
                        r = n.instanceId,
                        o = n.elementId,
                        d = n.actionItem,
                        p = n.eventId,
                        v = n.eventTarget,
                        h = n.eventStateKey,
                        E = n.actionListId,
                        _ = n.groupIndex,
                        O = n.isCarrier,
                        T = n.origin,
                        b = n.destination,
                        S = n.immediate,
                        w = n.verbose,
                        A = n.continuous,
                        R = n.parameterId,
                        x = n.actionGroups,
                        L = n.smoothing,
                        N = n.restingValue,
                        C = n.pluginInstance,
                        M = d.actionTypeId,
                        P = y(M),
                        D = g(P, M),
                        j = Object.keys(b).filter(function(t) {
                            return null != b[t];
                        });
                    return (0, i.set)(t, r, {
                        id: r,
                        elementId: o,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: T,
                        destination: b,
                        destinationKeys: j,
                        immediate: S,
                        verbose: w,
                        current: null,
                        actionItem: d,
                        actionTypeId: M,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: E,
                        groupIndex: _,
                        renderType: P,
                        isCarrier: O,
                        styleProp: D,
                        continuous: A,
                        parameterId: R,
                        actionGroups: x,
                        smoothing: L,
                        restingValue: N,
                        pluginInstance: C
                    });
                case s:
                    var F = e.payload.instanceId;
                    return (0, i.mergeIn)(t, [F], {
                        active: !0,
                        complete: !1,
                        start: window.performance.now()
                    });
                case f:
                    var G = e.payload.instanceId;
                    if (!t[G]) return t;
                    for (var X = {}, V = Object.keys(t), k = V.length, U = 0; U < k; U++) {
                        var B = V[U];
                        B !== G && (X[B] = t[B]);
                    }
                    return X;
                case l:
                    for (var H = t, W = Object.keys(t), Y = W.length, z = 0; z < Y; z++) {
                        var K = W[z],
                            Q = t[K],
                            q = Q.continuous ? m : I;
                        H = (0, i.set)(H, K, q(Q, e));
                    }
                    return H;
                default:
                    return t;
            }
        };
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.ixParameters = void 0);
        var r = n(2).IX2EngineActionTypes,
            i = r.IX2_RAW_DATA_IMPORTED,
            o = r.IX2_SESSION_STOPPED,
            a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload,
                        r = n.key,
                        u = n.value;
                    return (t[r] = u), t;
                default:
                    return t;
            }
        };
    },
    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(274),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return (0, o.default)(t);
        };
    },
    function(t, e, n) {
        t.exports = {
            default: n(275),
            __esModule: !0
        };
    },
    function(t, e, n) {
        n(82), n(276), (t.exports = n(6).Array.from);
    },
    function(t, e, n) {
        "use strict";
        var r = n(84),
            i = n(18),
            o = n(51),
            a = n(277),
            u = n(278),
            c = n(91),
            s = n(279),
            f = n(280);
        i(
            i.S +
                i.F *
                    !n(282)(function(t) {
                        Array.from(t);
                    }),
            "Array",
            {
                from: function(t) {
                    var e,
                        n,
                        i,
                        l,
                        d = o(t),
                        p = "function" == typeof this ? this : Array,
                        v = arguments.length,
                        h = v > 1 ? arguments[1] : void 0,
                        E = void 0 !== h,
                        _ = 0,
                        y = f(d);
                    if (
                        (E && (h = r(h, v > 2 ? arguments[2] : void 0, 2)), null == y || (p == Array && u(y)))
                    )
                        for (n = new p((e = c(d.length))); e > _; _++) s(n, _, E ? h(d[_], _) : d[_]);
                    else
                        for (l = y.call(d), n = new p(); !(i = l.next()).done; _++)
                            s(n, _, E ? a(l, h, [i.value, _], !0) : i.value);
                    return (n.length = _), n;
                }
            }
        );
    },
    function(t, e, n) {
        var r = n(19);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var o = t.return;
                throw (void 0 !== o && r(o.call(t)), e);
            }
        };
    },
    function(t, e, n) {
        var r = n(23),
            i = n(1)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t);
        };
    },
    function(t, e, n) {
        "use strict";
        var r = n(7),
            i = n(22);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : (t[e] = n);
        };
    },
    function(t, e, n) {
        var r = n(281),
            i = n(1)("iterator"),
            o = n(23);
        t.exports = n(6).getIteratorMethod = function(t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
    },
    function(t, e, n) {
        var r = n(46),
            i = n(1)("toStringTag"),
            o =
                "Arguments" ==
                r(
                    (function() {
                        return arguments;
                    })()
                );
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (n = (function(t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), i))
                ? n
                : o
                ? r(e)
                : "Object" == (a = r(e)) && "function" == typeof e.callee
                ? "Arguments"
                : a;
        };
    },
    function(t, e, n) {
        var r = n(1)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            (o.return = function() {
                i = !0;
            }),
                Array.from(o, function() {
                    throw 2;
                });
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                (a.next = function() {
                    return {
                        done: (n = !0)
                    };
                }),
                    (o[r] = function() {
                        return a;
                    }),
                    t(o);
            } catch (t) {}
            return n;
        };
    },
    function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
            (e.default = function(t, e) {
                var n = {};
                for (var r in t)
                    e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                return n;
            });
    },
    function(t, e, n) {
        var r = n(67),
            i = n(69),
            o = n(17),
            a = n(285),
            u = n(286),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function(t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function(t, e, n) {
        var r = n(16),
            i = n(0),
            o = n(12),
            a = "[object String]";
        t.exports = function(t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function(t, e, n) {
        var r = n(287),
            i = n(288),
            o = n(289);
        t.exports = function(t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function(t, e, n) {
        var r = n(120)("length");
        t.exports = r;
    },
    function(t, e) {
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function(t) {
            return n.test(t);
        };
    },
    function(t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s =
                "[\\ufe0e\\ufe0f]?" +
                c +
                ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
            f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function(t) {
            for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
            return e;
        };
    },
    function(t, e, n) {
        var r = n(10),
            i = n(291),
            o = n(292);
        t.exports = function(t, e) {
            return o(t, i(r(e)));
        };
    },
    function(t, e) {
        var n = "Expected a function";
        t.exports = function(t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function(t, e, n) {
        var r = n(119),
            i = n(10),
            o = n(293),
            a = n(296);
        t.exports = function(t, e) {
            if (null == t) return {};
            var n = r(a(t), function(t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function(t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function(t, e, n) {
        var r = n(70),
            i = n(294),
            o = n(39);
        t.exports = function(t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u; ) {
                var s = e[a],
                    f = r(t, s);
                n(f, s) && i(c, o(s, t), f);
            }
            return c;
        };
    },
    function(t, e, n) {
        var r = n(295),
            i = n(39),
            o = n(64),
            a = n(4),
            u = n(25);
        t.exports = function(t, e, n, c) {
            if (!a(t)) return t;
            for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f; ) {
                var p = u(e[s]),
                    v = n;
                if (s != l) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function(t, e, n) {
        var r = n(131),
            i = n(59),
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function(t, e, n) {
        var r = n(108),
            i = n(297),
            o = n(299);
        t.exports = function(t) {
            return r(t, o, i);
        };
    },
    function(t, e, n) {
        var r = n(62),
            i = n(298),
            o = n(109),
            a = n(110),
            u = Object.getOwnPropertySymbols
                ? function(t) {
                      for (var e = []; t; ) r(e, o(t)), (t = i(t));
                      return e;
                  }
                : a;
        t.exports = u;
    },
    function(t, e, n) {
        var r = n(113)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(111),
            i = n(300),
            o = n(17);
        t.exports = function(t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function(t, e, n) {
        var r = n(4),
            i = n(68),
            o = n(301),
            a = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t) ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function(t, e) {
        t.exports = function(t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function(t, e, n) {
        var r = n(67),
            i = n(69),
            o = n(37),
            a = n(0),
            u = n(17),
            c = n(63),
            s = n(68),
            f = n(65),
            l = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (null == t) return !0;
            if (
                u(t) &&
                (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))
            )
                return !t.length;
            var e = i(t);
            if (e == l || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function(t, e, n) {
        var r = n(131),
            i = n(128),
            o = n(10);
        t.exports = function(t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function(t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function(t, e, n) {
        var r = n(305),
            i = n(127),
            o = n(306),
            a = n(0);
        t.exports = function(t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
            return t;
        };
    },
    function(t, e, n) {
        var r = n(72);
        t.exports = function(t) {
            return "function" == typeof t ? t : r;
        };
    },
    function(t, e, n) {
        var r = n(133),
            i = n(118),
            o = n(73),
            a = n(117);
        t.exports = function(t, e, n) {
            (t = a(t)), (e = i(e));
            var u = t.length,
                c = (n = void 0 === n ? u : r(o(n), 0, u));
            return (n -= e.length) >= 0 && t.slice(n, c) == e;
        };
    },
    function(t, e, n) {
        var r = n(309),
            i = n(4),
            o = "Expected a function";
        t.exports = function(t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return (
                i(n) && ((a = "leading" in n ? !!n.leading : a), (u = "trailing" in n ? !!n.trailing : u)),
                r(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: u
                })
            );
        };
    },
    function(t, e, n) {
        var r = n(4),
            i = n(310),
            o = n(74),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function(t, e, n) {
            var s,
                f,
                l,
                d,
                p,
                v,
                h = 0,
                E = !1,
                _ = !1,
                y = !0;
            if ("function" != typeof t) throw new TypeError(a);

            function g(e) {
                var n = s,
                    r = f;
                return (s = f = void 0), (h = e), (d = t.apply(r, n));
            }

            function m(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (_ && t - h >= l);
            }

            function I() {
                var t = i();
                if (m(t)) return O(t);
                p = setTimeout(
                    I,
                    (function(t) {
                        var n = e - (t - v);
                        return _ ? c(n, l - (t - h)) : n;
                    })(t)
                );
            }

            function O(t) {
                return (p = void 0), y && s ? g(t) : ((s = f = void 0), d);
            }

            function T() {
                var t = i(),
                    n = m(t);
                if (((s = arguments), (f = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function(t) {
                            return (h = t), (p = setTimeout(I, e)), E ? g(t) : d;
                        })(v);
                    if (_) return (p = setTimeout(I, e)), g(v);
                }
                return void 0 === p && (p = setTimeout(I, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) &&
                    ((E = !!n.leading),
                    (l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l),
                    (y = "trailing" in n ? !!n.trailing : y)),
                (T.cancel = function() {
                    void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
                }),
                (T.flush = function() {
                    return void 0 === p ? d : O(i());
                }),
                T
            );
        };
    },
    function(t, e, n) {
        var r = n(3);
        t.exports = function() {
            return r.Date.now();
        };
    },
    function(t, e, n) {
        "use strict";
        var r,
            i = n(27),
            o =
                (r = i) && r.__esModule
                    ? r
                    : {
                          default: r
                      };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            (e.getClosestElement = void 0),
            (e.setStyle = function(t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function(t, e) {
                return t.style[e];
            }),
            (e.getProperty = function(t, e) {
                return t[e];
            }),
            (e.matchSelector = function(t) {
                return function(e) {
                    return e[u](t);
                };
            }),
            (e.getQuerySelector = function(t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(s)) {
                        var i = e.split(s),
                            o = i[0];
                        if (((r = i[1]), o !== document.documentElement.getAttribute(d))) return null;
                    }
                    return '[data-w-id^="' + r + '"]';
                }
                return n;
            }),
            (e.getValidDocument = function(t) {
                if (null == t || t === document.documentElement.getAttribute(d)) return document;
                return null;
            }),
            (e.queryDocument = function(t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
            }),
            (e.elementContains = function(t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function(t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function() {
                for (
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = [],
                        n = 0,
                        r = t.length;
                    n < r;
                    n++
                ) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function() {
                for (
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = [],
                        n = [],
                        r = 0,
                        i = t.length;
                    r < i;
                    r++
                ) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a; )
                            -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            (e.getRefType = function(t) {
                if (null != t && "object" == (void 0 === t ? "undefined" : (0, o.default)(t)))
                    return t instanceof Element ? f : l;
                return null;
            });
        var a = n(2),
            u = a.IX2BrowserSupport.ELEMENT_MATCHES,
            c = a.IX2EngineConstants,
            s = c.IX2_ID_DELIMITER,
            f = c.HTML_ELEMENT,
            l = c.PLAIN_OBJECT,
            d = c.WF_PAGE;
        e.getClosestElement = Element.prototype.closest
            ? function(t, e) {
                  return document.documentElement.contains(t) ? t.closest(e) : null;
              }
            : function(t, e) {
                  if (!document.documentElement.contains(t)) return null;
                  var n = t;
                  do {
                      if (n[u] && n[u](e)) return n;
                      n = n.parentNode;
                  } while (null != n);
                  return null;
              };
    },
    function(t, e, n) {
        "use strict";
        var r,
            i = a(n(41)),
            o = a(n(27));

        function a(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = v(n(42)),
            c = v(n(313)),
            s = v(n(38)),
            f = v(n(332)),
            l = n(130),
            d = n(77),
            p = n(2);

        function v(t) {
            return t && t.__esModule
                ? t
                : {
                      default: t
                  };
        }
        var h,
            E,
            _,
            y = p.IX2EngineEventTypes,
            g = y.MOUSE_CLICK,
            m = y.MOUSE_SECOND_CLICK,
            I = y.MOUSE_DOWN,
            O = y.MOUSE_UP,
            T = y.MOUSE_OVER,
            b = y.MOUSE_OUT,
            S = y.DROPDOWN_CLOSE,
            w = y.DROPDOWN_OPEN,
            A = y.SLIDER_ACTIVE,
            R = y.SLIDER_INACTIVE,
            x = y.TAB_ACTIVE,
            L = y.TAB_INACTIVE,
            N = y.NAVBAR_CLOSE,
            C = y.NAVBAR_OPEN,
            M = y.MOUSE_MOVE,
            P = y.PAGE_SCROLL_DOWN,
            D = y.SCROLL_INTO_VIEW,
            j = y.COMPONENT_ACTIVE,
            F = y.COMPONENT_INACTIVE,
            G = y.SCROLL_OUT_OF_VIEW,
            X = y.PAGE_SCROLL_UP,
            V = y.SCROLLING_IN_VIEW,
            k = y.PAGE_FINISH,
            U = y.ECOMMERCE_CART_CLOSE,
            B = y.ECOMMERCE_CART_OPEN,
            H = y.PAGE_START,
            W = y.PAGE_SCROLL,
            Y = y.ELEMENT,
            z = y.VIEWPORT,
            K = y.PAGE,
            Q = p.IX2EngineConstants.COLON_DELIMITER,
            q = p.IX2VanillaUtils.getNamespacedParameterId,
            $ = function(t) {
                return function(e) {
                    return !("object" !== (void 0 === e ? "undefined" : (0, o.default)(e)) || !t(e)) || e;
                };
            },
            Z = $(function(t) {
                return t.element === t.nativeEvent.target;
            }),
            J = $(function(t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            tt = (0, c.default)([Z, J]),
            et = function(t, e) {
                if (e) {
                    var n = t.getState().ixData.events[e];
                    if (n && !ct[n.eventTypeId]) return n;
                }
                return null;
            },
            nt = function(t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    u = r.id,
                    c = a.config,
                    f = c.actionListId,
                    d = c.autoStopEventId,
                    p = et(n, d);
                return (
                    p &&
                        (0, l.stopActionGroup)({
                            store: n,
                            eventId: d,
                            eventTarget: i,
                            eventStateKey: d + Q + o.split(Q)[1],
                            actionListId: (0, s.default)(p, "action.config.actionListId")
                        }),
                    (0, l.stopActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: f
                    }),
                    (0, l.startActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: f
                    }),
                    e
                );
            },
            rt = function(t, e) {
                return function(n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            it = {
                handler: rt(tt, nt)
            },
            ot = (0, u.default)({}, it, {
                types: [j, F].join(" ")
            }),
            at = [
                {
                    target: window,
                    types: "resize orientationchange",
                    throttle: !0
                },
                {
                    target: document,
                    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                    throttle: !0
                }
            ],
            ut = {
                types: [
                    {
                        target: document,
                        types: "scroll wheel",
                        throttle: !0
                    }
                ]
            },
            ct = {
                PAGE_START: H,
                PAGE_FINISH: k
            },
            st =
                ((h = void 0 !== window.pageXOffset),
                (E = "CSS1Compat" === document.compatMode ? document.documentElement : document.body),
                function() {
                    return {
                        scrollLeft: h ? window.pageXOffset : E.scrollLeft,
                        scrollTop: h ? window.pageYOffset : E.scrollTop,
                        stiffScrollTop: (0, f.default)(
                            h ? window.pageYOffset : E.scrollTop,
                            0,
                            E.scrollHeight - window.innerHeight
                        ),
                        scrollWidth: E.scrollWidth,
                        scrollHeight: E.scrollHeight,
                        clientWidth: E.clientWidth,
                        clientHeight: E.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight
                    };
                }),
            ft = function(t) {
                var e = t.element,
                    n = t.nativeEvent,
                    r = n.type,
                    i = n.target,
                    o = n.relatedTarget,
                    a = e.contains(i);
                if ("mouseover" === r && a) return !0;
                var u = e.contains(o);
                return !("mouseout" !== r || !a || !u);
            },
            lt = function(t) {
                var e,
                    n,
                    r = t.element,
                    i = t.event.config,
                    o = st(),
                    a = o.clientWidth,
                    u = o.clientHeight,
                    c = i.scrollOffsetValue,
                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                return (
                    (e = r.getBoundingClientRect()),
                    (n = {
                        left: 0,
                        top: s,
                        right: a,
                        bottom: u - s
                    }),
                    !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
                );
            },
            dt = function(t) {
                return function(e, n) {
                    var r = e.nativeEvent.type,
                        i = -1 !== [j, F].indexOf(r) ? r === j : n.isActive,
                        o = (0, u.default)({}, n, {
                            isActive: i
                        });
                    return n && o.isActive === n.isActive ? o : t(e, o) || o;
                };
            },
            pt = function(t) {
                return function(e, n) {
                    var r = {
                        elementHovered: ft(e)
                    };
                    return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r)) || r;
                };
            },
            vt = function(t) {
                return function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = st(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        c = e.event,
                        s = c.config,
                        f = c.eventTypeId,
                        l = s.scrollOffsetValue,
                        d = "PX" === s.scrollOffsetUnit,
                        p = o - a,
                        v = Number((i / p).toFixed(2));
                    if (n && n.percentTop === v) return n;
                    var h = (d ? l : (a * (l || 0)) / 100) / p,
                        E = void 0,
                        _ = void 0,
                        y = 0;
                    n && ((E = v > n.percentTop), (y = (_ = n.scrollingDown !== E) ? v : n.anchorTop));
                    var g = f === P ? v >= y + h : v <= y - h,
                        m = (0, u.default)({}, n, {
                            percentTop: v,
                            inBounds: g,
                            anchorTop: y,
                            scrollingDown: E
                        });
                    return (n && g && (_ || m.inBounds !== n.inBounds) && t(e, m)) || m;
                };
            },
            ht = function(t) {
                return function(e) {
                    var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {
                                      clickCount: 0
                                  },
                        r = {
                            clickCount: (n.clickCount % 2) + 1
                        };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            Et = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, u.default)({}, ot, {
                    handler: rt(
                        t ? tt : Z,
                        dt(function(t, e) {
                            return e.isActive ? it.handler(t, e) : e;
                        })
                    )
                });
            },
            _t = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, u.default)({}, ot, {
                    handler: rt(
                        t ? tt : Z,
                        dt(function(t, e) {
                            return e.isActive ? e : it.handler(t, e);
                        })
                    )
                });
            },
            yt = (0, u.default)({}, ut, {
                handler:
                    ((_ = function(t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] &&
                            e.triggered
                            ? e
                            : (r.eventTypeId === D) === n
                            ? (nt(t),
                              (0, u.default)({}, e, {
                                  triggered: !0
                              }))
                            : e;
                    }),
                    function(t, e) {
                        var n = (0, u.default)({}, e, {
                            elementVisible: lt(t)
                        });
                        return (
                            ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) && _(t, n)) || n
                        );
                    })
            });
        e.default =
            ((r = {}),
            (0, i.default)(r, A, Et()),
            (0, i.default)(r, R, _t()),
            (0, i.default)(r, w, Et()),
            (0, i.default)(r, S, _t()),
            (0, i.default)(r, C, Et(!1)),
            (0, i.default)(r, N, _t(!1)),
            (0, i.default)(r, x, Et()),
            (0, i.default)(r, L, _t()),
            (0, i.default)(r, B, {
                types: "ecommerce-cart-open",
                handler: rt(tt, nt)
            }),
            (0, i.default)(r, U, {
                types: "ecommerce-cart-close",
                handler: rt(tt, nt)
            }),
            (0, i.default)(r, g, {
                types: "click",
                handler: rt(
                    tt,
                    ht(function(t, e) {
                        var n,
                            r,
                            i,
                            o = e.clickCount;
                        (r = (n = t).store),
                            (i = n.event.action.config.autoStopEventId),
                            Boolean(et(r, i)) ? 1 === o && nt(t) : nt(t);
                    })
                )
            }),
            (0, i.default)(r, m, {
                types: "click",
                handler: rt(
                    tt,
                    ht(function(t, e) {
                        2 === e.clickCount && nt(t);
                    })
                )
            }),
            (0, i.default)(
                r,
                I,
                (0, u.default)({}, it, {
                    types: "mousedown"
                })
            ),
            (0, i.default)(
                r,
                O,
                (0, u.default)({}, it, {
                    types: "mouseup"
                })
            ),
            (0, i.default)(r, T, {
                types: "mouseover mouseout",
                handler: rt(
                    tt,
                    pt(function(t, e) {
                        e.elementHovered && nt(t);
                    })
                )
            }),
            (0, i.default)(r, b, {
                types: "mouseover mouseout",
                handler: rt(
                    tt,
                    pt(function(t, e) {
                        e.elementHovered || nt(t);
                    })
                )
            }),
            (0, i.default)(r, M, {
                types: "mousemove mouseout scroll",
                handler: function(t) {
                    var e = t.store,
                        n = t.element,
                        r = t.eventConfig,
                        i = t.nativeEvent,
                        o = t.eventStateKey,
                        a =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {
                                      clientX: 0,
                                      clientY: 0,
                                      pageX: 0,
                                      pageY: 0
                                  },
                        u = r.basedOn,
                        c = r.selectedAxis,
                        s = r.continuousParameterGroupId,
                        f = r.reverse,
                        l = r.restingState,
                        p = void 0 === l ? 0 : l,
                        v = i.clientX,
                        h = void 0 === v ? a.clientX : v,
                        E = i.clientY,
                        _ = void 0 === E ? a.clientY : E,
                        y = i.pageX,
                        g = void 0 === y ? a.pageX : y,
                        m = i.pageY,
                        I = void 0 === m ? a.pageY : m,
                        O = "X_AXIS" === c,
                        T = "mouseout" === i.type,
                        b = p / 100,
                        S = s,
                        w = !1;
                    switch (u) {
                        case z:
                            b = O
                                ? Math.min(h, window.innerWidth) / window.innerWidth
                                : Math.min(_, window.innerHeight) / window.innerHeight;
                            break;
                        case K:
                            var A = st(),
                                R = A.scrollLeft,
                                x = A.scrollTop,
                                L = A.scrollWidth,
                                N = A.scrollHeight;
                            b = O ? Math.min(R + g, L) / L : Math.min(x + I, N) / N;
                            break;
                        case Y:
                        default:
                            S = q(o, s);
                            var C = 0 === i.type.indexOf("mouse");
                            if (
                                C &&
                                !0 !==
                                    tt({
                                        element: n,
                                        nativeEvent: i
                                    })
                            )
                                break;
                            var M = n.getBoundingClientRect(),
                                P = M.left,
                                D = M.top,
                                j = M.width,
                                F = M.height;
                            if (
                                !C &&
                                !(function(t, e) {
                                    return (
                                        t.left > e.left &&
                                        t.left < e.right &&
                                        t.top > e.top &&
                                        t.top < e.bottom
                                    );
                                })(
                                    {
                                        left: h,
                                        top: _
                                    },
                                    M
                                )
                            )
                                break;
                            (w = !0), (b = O ? (h - P) / j : (_ - D) / F);
                    }
                    return (
                        T && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                        (u !== Y || w || w !== a.elementHovered) &&
                            ((b = f ? 1 - b : b), e.dispatch((0, d.parameterChanged)(S, b))),
                        {
                            elementHovered: w,
                            clientX: h,
                            clientY: _,
                            pageX: g,
                            pageY: I
                        }
                    );
                }
            }),
            (0, i.default)(r, W, {
                types: at,
                handler: function(t) {
                    var e = t.store,
                        n = t.eventConfig,
                        r = n.continuousParameterGroupId,
                        i = n.reverse,
                        o = st(),
                        a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                    (a = i ? 1 - a : a), e.dispatch((0, d.parameterChanged)(r, a));
                }
            }),
            (0, i.default)(r, V, {
                types: at,
                handler: function(t) {
                    var e = t.element,
                        n = t.store,
                        r = t.eventConfig,
                        i = t.eventStateKey,
                        o =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {
                                      scrollPercent: 0
                                  },
                        a = st(),
                        u = a.scrollLeft,
                        c = a.scrollTop,
                        s = a.scrollWidth,
                        f = a.scrollHeight,
                        l = a.clientHeight,
                        p = r.basedOn,
                        v = r.selectedAxis,
                        h = r.continuousParameterGroupId,
                        E = r.startsEntering,
                        _ = r.startsExiting,
                        y = r.addEndOffset,
                        g = r.addStartOffset,
                        m = r.addOffsetValue,
                        I = void 0 === m ? 0 : m,
                        O = r.endOffsetValue,
                        T = void 0 === O ? 0 : O;
                    if (p === z) {
                        var b = "X_AXIS" === v ? u / s : c / f;
                        return (
                            b !== o.scrollPercent && n.dispatch((0, d.parameterChanged)(h, b)),
                            {
                                scrollPercent: b
                            }
                        );
                    }
                    var S = q(i, h),
                        w = e.getBoundingClientRect(),
                        A = (g ? I : 0) / 100,
                        R = (y ? T : 0) / 100;
                    (A = E ? A : 1 - A), (R = _ ? R : 1 - R);
                    var x = w.top + Math.min(w.height * A, l),
                        L = w.top + w.height * R - x,
                        N = Math.min(l + L, f),
                        C = Math.min(Math.max(0, l - x), N) / N;
                    return (
                        C !== o.scrollPercent && n.dispatch((0, d.parameterChanged)(S, C)),
                        {
                            scrollPercent: C
                        }
                    );
                }
            }),
            (0, i.default)(r, D, yt),
            (0, i.default)(r, G, yt),
            (0, i.default)(
                r,
                P,
                (0, u.default)({}, ut, {
                    handler: vt(function(t, e) {
                        e.scrollingDown && nt(t);
                    })
                })
            ),
            (0, i.default)(
                r,
                X,
                (0, u.default)({}, ut, {
                    handler: vt(function(t, e) {
                        e.scrollingDown || nt(t);
                    })
                })
            ),
            (0, i.default)(r, k, {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: rt(
                    Z,
                    (function(t) {
                        return function(e, n) {
                            var r = {
                                finished: "complete" === document.readyState
                            };
                            return !r.finished || (n && n.finshed) || t(e), r;
                        };
                    })(nt)
                )
            }),
            (0, i.default)(r, H, {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: rt(
                    Z,
                    (function(t) {
                        return function(e, n) {
                            return (
                                n || t(e),
                                {
                                    started: !0
                                }
                            );
                        };
                    })(nt)
                )
            }),
            r);
    },
    function(t, e, n) {
        var r = n(314)();
        t.exports = r;
    },
    function(t, e, n) {
        var r = n(78),
            i = n(315),
            o = n(135),
            a = n(136),
            u = n(0),
            c = n(328),
            s = "Expected a function",
            f = 8,
            l = 32,
            d = 128,
            p = 256;
        t.exports = function(t) {
            return i(function(e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--; ) {
                    var h = e[i];
                    if ("function" != typeof h) throw new TypeError(s);
                    if (v && !E && "wrapper" == a(h)) var E = new r([], !0);
                }
                for (i = E ? i : n; ++i < n; ) {
                    h = e[i];
                    var _ = a(h),
                        y = "wrapper" == _ ? o(h) : void 0;
                    E =
                        y && c(y[0]) && y[1] == (d | f | l | p) && !y[4].length && 1 == y[9]
                            ? E[a(y[0])].apply(E, y[3])
                            : 1 == h.length && c(h)
                            ? E[_]()
                            : E.thru(h);
                }
                return function() {
                    var t = arguments,
                        r = t[0];
                    if (E && 1 == t.length && u(r)) return E.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; ) o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function(t, e, n) {
        var r = n(316),
            i = n(319),
            o = n(321);
        t.exports = function(t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function(t, e, n) {
        var r = n(317);
        t.exports = function(t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function(t, e, n) {
        var r = n(62),
            i = n(318);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s; ) {
                var f = e[c];
                n > 0 && o(f) ? (n > 1 ? t(f, n - 1, o, a, u) : r(u, f)) : a || (u[u.length] = f);
            }
            return u;
        };
    },
    function(t, e, n) {
        var r = n(24),
            i = n(37),
            o = n(0),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function(t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function(t, e, n) {
        var r = n(320),
            i = Math.max;
        t.exports = function(t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function() {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u; )
                        c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function(t, e, n) {
        var r = n(322),
            i = n(324)(r);
        t.exports = i;
    },
    function(t, e, n) {
        var r = n(323),
            i = n(132),
            o = n(72),
            a = i
                ? function(t, e) {
                      return i(t, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: r(e),
                          writable: !0
                      });
                  }
                : o;
        t.exports = a;
    },
    function(t, e) {
        t.exports = function(t) {
            return function() {
                return t;
            };
        };
    },
    function(t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function(t) {
            var e = 0,
                o = 0;
            return function() {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function(t, e, n) {
        var r = n(114),
            i = r && new r();
        t.exports = i;
    },
    function(t, e) {
        t.exports = function() {};
    },
    function(t, e) {
        t.exports = {};
    },
    function(t, e, n) {
        var r = n(80),
            i = n(135),
            o = n(136),
            a = n(329);
        t.exports = function(t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function(t, e, n) {
        var r = n(80),
            i = n(78),
            o = n(79),
            a = n(0),
            u = n(12),
            c = n(330),
            s = Object.prototype.hasOwnProperty;

        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
    },
    function(t, e, n) {
        var r = n(80),
            i = n(78),
            o = n(331);
        t.exports = function(t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (
                (e.__actions__ = o(t.__actions__)),
                (e.__index__ = t.__index__),
                (e.__values__ = t.__values__),
                e
            );
        };
    },
    function(t, e) {
        t.exports = function(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
        };
    },
    function(t, e, n) {
        var r = n(133),
            i = n(74);
        t.exports = function(t, e, n) {
            return (
                void 0 === n && ((n = e), (e = void 0)),
                void 0 !== n && (n = (n = i(n)) == n ? n : 0),
                void 0 !== e && (e = (e = i(e)) == e ? e : 0),
                r(i(t), e, n)
            );
        };
    },
    function(t, e, n) {
        "use strict";
        var r = n(13);
        r.define(
            "links",
            (t.exports = function(t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    f = document.createElement("a"),
                    l = "w--current",
                    d = /^#[\w:.-]+$/,
                    p = /index\.(html|php)$/,
                    v = /\/$/;

                function h(e) {
                    var r = (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((f.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (0 === r.indexOf("#") && d.test(r)) {
                            var u = t(r);
                            u.length &&
                                i.push({
                                    link: a,
                                    sec: u,
                                    active: !1
                                });
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || (p.test(r) && v.test(o));
                            _(a, l, c);
                        }
                    }
                }

                function E() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function(e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), _(r, l, c));
                    });
                }

                function _(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready = a.design = a.preview = function() {
                        (n = c && r.env("design")),
                            (o = r.env("slug") || s.pathname || ""),
                            r.scroll.off(E),
                            (i = []);
                        for (var t = document.links, e = 0; e < t.length; ++e) h(t[e]);
                        i.length && (r.scroll.on(E), E());
                    }),
                    a
                );
            })
        );
    },
    function(t, e, n) {
        "use strict";
        var r = n(13);
        r.define(
            "scroll",
            (t.exports = function(t) {
                var e = t(document),
                    n = window,
                    i = n.location,
                    o = (function() {
                        try {
                            return Boolean(n.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : n.history,
                    a = /^[a-zA-Z0-9][\w:.-]*$/;
                return {
                    ready: function() {
                        var u = i.href.split("#")[0];
                        e.on("click", "a", function(e) {
                            if (
                                !(
                                    r.env("design") ||
                                    (window.$.mobile && t(e.currentTarget).hasClass("ui-link"))
                                )
                            )
                                if ("#" !== this.getAttribute("href")) {
                                    var c = this.href.split("#"),
                                        s = c[0] === u ? c[1] : null;
                                    s &&
                                        (function(e, u) {
                                            if (a.test(e)) {
                                                var c = t("#" + e);
                                                if (c.length) {
                                                    if (
                                                        (u && (u.preventDefault(), u.stopPropagation()),
                                                        i.hash !== e &&
                                                            o &&
                                                            o.pushState &&
                                                            (!r.env.chrome || "file:" !== i.protocol))
                                                    ) {
                                                        var s = o.state && o.state.hash;
                                                        s !== e &&
                                                            o.pushState(
                                                                {
                                                                    hash: e
                                                                },
                                                                "",
                                                                "#" + e
                                                            );
                                                    }
                                                    var f = r.env("editor") ? ".w-editor-body" : "body",
                                                        l = t(
                                                            "header, " +
                                                                f +
                                                                " > .header, " +
                                                                f +
                                                                " > .w-nav:not([data-no-scroll])"
                                                        ),
                                                        d =
                                                            "fixed" === l.css("position")
                                                                ? l.outerHeight()
                                                                : 0;
                                                    n.setTimeout(
                                                        function() {
                                                            !(function(e, r) {
                                                                var i = t(n).scrollTop(),
                                                                    o = e.offset().top - r;
                                                                if ("mid" === e.data("scroll")) {
                                                                    var a = t(n).height() - r,
                                                                        u = e.outerHeight();
                                                                    u < a && (o -= Math.round((a - u) / 2));
                                                                }
                                                                var c = 1;
                                                                t("body")
                                                                    .add(e)
                                                                    .each(function() {
                                                                        var e = parseFloat(
                                                                            t(this).attr("data-scroll-time"),
                                                                            10
                                                                        );
                                                                        !isNaN(e) &&
                                                                            (0 === e || e > 0) &&
                                                                            (c = e);
                                                                    }),
                                                                    Date.now ||
                                                                        (Date.now = function() {
                                                                            return new Date().getTime();
                                                                        });
                                                                var s = Date.now(),
                                                                    f =
                                                                        n.requestAnimationFrame ||
                                                                        n.mozRequestAnimationFrame ||
                                                                        n.webkitRequestAnimationFrame ||
                                                                        function(t) {
                                                                            n.setTimeout(t, 15);
                                                                        },
                                                                    l =
                                                                        (472.143 *
                                                                            Math.log(Math.abs(i - o) + 125) -
                                                                            2e3) *
                                                                        c;
                                                                !(function t() {
                                                                    var e = Date.now() - s;
                                                                    n.scroll(
                                                                        0,
                                                                        (function(t, e, n, r) {
                                                                            return n > r
                                                                                ? e
                                                                                : t +
                                                                                      (e - t) *
                                                                                          ((i = n / r) < 0.5
                                                                                              ? 4 * i * i * i
                                                                                              : (i - 1) *
                                                                                                    (2 * i -
                                                                                                        2) *
                                                                                                    (2 * i -
                                                                                                        2) +
                                                                                                1);
                                                                            var i;
                                                                        })(i, o, e, l)
                                                                    ),
                                                                        e <= l && f(t);
                                                                })();
                                                            })(c, d);
                                                        },
                                                        u ? 0 : 300
                                                    );
                                                }
                                            }
                                        })(s, e);
                                } else e.preventDefault();
                        });
                    }
                };
            })
        );
    },
    function(t, e, n) {
        "use strict";
        n(13).define(
            "touch",
            (t.exports = function(t) {
                var e = {},
                    n = !document.addEventListener,
                    r = window.getSelection;

                function i(t) {
                    var e,
                        n,
                        i,
                        a = !1,
                        u = !1,
                        c = !1,
                        s = Math.min(Math.round(0.04 * window.innerWidth), 40);

                    function f(t) {
                        var r = t.touches;
                        (r && r.length > 1) ||
                            ((a = !0),
                            (u = !1),
                            r
                                ? ((c = !0), (e = r[0].clientX), (n = r[0].clientY))
                                : ((e = t.clientX), (n = t.clientY)),
                            (i = e));
                    }

                    function l(t) {
                        if (a) {
                            if (c && "mousemove" === t.type)
                                return t.preventDefault(), void t.stopPropagation();
                            var f = t.touches,
                                l = f ? f[0].clientX : t.clientX,
                                d = f ? f[0].clientY : t.clientY,
                                v = l - i;
                            (i = l),
                                Math.abs(v) > s &&
                                    r &&
                                    "" === String(r()) &&
                                    (o("swipe", t, {
                                        direction: v > 0 ? "right" : "left"
                                    }),
                                    p()),
                                (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0);
                        }
                    }

                    function d(t) {
                        if (a) {
                            if (((a = !1), c && "mouseup" === t.type))
                                return t.preventDefault(), t.stopPropagation(), void (c = !1);
                            u || o("tap", t);
                        }
                    }

                    function p() {
                        a = !1;
                    }
                    t.addEventListener("touchstart", f, !1),
                        t.addEventListener("touchmove", l, !1),
                        t.addEventListener("touchend", d, !1),
                        t.addEventListener("touchcancel", p, !1),
                        t.addEventListener("mousedown", f, !1),
                        t.addEventListener("mousemove", l, !1),
                        t.addEventListener("mouseup", d, !1),
                        t.addEventListener("mouseout", p, !1),
                        (this.destroy = function() {
                            t.removeEventListener("touchstart", f, !1),
                                t.removeEventListener("touchmove", l, !1),
                                t.removeEventListener("touchend", d, !1),
                                t.removeEventListener("touchcancel", p, !1),
                                t.removeEventListener("mousedown", f, !1),
                                t.removeEventListener("mousemove", l, !1),
                                t.removeEventListener("mouseup", d, !1),
                                t.removeEventListener("mouseout", p, !1),
                                (t = null);
                        });
                }

                function o(e, n, r) {
                    var i = t.Event(e, {
                        originalEvent: n
                    });
                    t(n.target).trigger(i, r);
                }
                return (
                    n &&
                        (t.event.special.tap = {
                            bindType: "click",
                            delegateType: "click"
                        }),
                    (e.init = function(e) {
                        return n ? null : (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-2"
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|902e27b6-8923-145b-b531-c101d1fa2578"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554779055339
        },
        "e-2": {
            id: "e-2",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e"
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|902e27b6-8923-145b-b531-c101d1fa2578"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554779055339
        },
        "e-3": {
            id: "e-3",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-3",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".sidebar_trigger",
                originalId: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f",
                appliesTo: "CLASS"
            },
            config: [
                {
                    continuousParameterGroupId: "a-3-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-3-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50
                }
            ],
            createdOn: 1554817432637
        },
        "e-4": {
            id: "e-4",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-5"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".sidebar_trigger.close",
                originalId: "5cb39efb2edee02f9d843a79|902e27b6-8923-145b-b531-c101d1fa2578",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554821834093
        },
        "e-5": {
            id: "e-5",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-4"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".sidebar_trigger.close",
                originalId: "5cb39efb2edee02f9d843a79|902e27b6-8923-145b-b531-c101d1fa2578",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554821834094
        },
        "e-6": {
            id: "e-6",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-7"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".sidebar_trigger.home",
                originalId: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554821861014
        },
        "e-7": {
            id: "e-7",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-2",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-6"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".sidebar_trigger.home",
                originalId: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554821861015
        },
        "e-8": {
            id: "e-8",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 70,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 70,
                    restingState: 50
                }
            ],
            createdOn: 1554865411771
        },
        "e-9": {
            id: "e-9",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-7",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|480820c0-33a4-a231-8469-33ed2d0f9c09"
            },
            config: [
                {
                    continuousParameterGroupId: "a-7-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 96,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-7-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 96,
                    restingState: 50
                }
            ],
            createdOn: 1554902092548
        },
        "e-10": {
            id: "e-10",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-8",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-11"
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|480820c0-33a4-a231-8469-33ed2d0f9c09"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554902384700
        },
        "e-11": {
            id: "e-11",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-9",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-10"
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|480820c0-33a4-a231-8469-33ed2d0f9c09"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554902384700
        },
        "e-12": {
            id: "e-12",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-13"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554903052238
        },
        "e-13": {
            id: "e-13",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-11",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-12"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554903052238
        },
        "e-14": {
            id: "e-14",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-12",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-15"
                }
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554903297195
        },
        "e-17": {
            id: "e-17",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-16"
                }
            },
            mediaQueries: ["main"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|480820c0-33a4-a231-8469-33ed2d0f9c09"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554903556078
        },
        "e-18": {
            id: "e-18",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-19"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".footer_link.link_ix",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554906274997
        },
        "e-19": {
            id: "e-19",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-18"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".footer_link.link_ix",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554906274997
        },
        "e-20": {
            id: "e-20",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-21"
                }
            },
            mediaQueries: ["main", "small", "tiny", "medium"],
            target: {
                selector: ".link_ix",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554910915979
        },
        "e-21": {
            id: "e-21",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-20"
                }
            },
            mediaQueries: ["main", "small", "tiny", "medium"],
            target: {
                selector: ".link_ix",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554910915980
        },
        "e-22": {
            id: "e-22",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915037652
        },
        "e-23": {
            id: "e-23",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee046b2843a76"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915076667
        },
        "e-24": {
            id: "e-24",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee04ff8843a77"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915089975
        },
        "e-25": {
            id: "e-25",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee02f9d843a79"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50
                }
            ],
            createdOn: 1554915101316
        },
        "e-26": {
            id: "e-26",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee01e90843a7a"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915113771
        },
        "e-27": {
            id: "e-27",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee07d66843a7b"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915131907
        },
        "e-28": {
            id: "e-28",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee047fe843a7c"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1554915156925
        },
        "e-29": {
            id: "e-29",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-30"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".sidebar_trigger",
                originalId: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554915269449
        },
        "e-30": {
            id: "e-30",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-29"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".sidebar_trigger",
                originalId: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554915269450
        },
        "e-31": {
            id: "e-31",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-32"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".link--red",
                originalId: "5cb39efb2edee047fe843a7c|c6ce3e1c-50d2-286b-164a-38ce3da7fffe",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916187190
        },
        "e-32": {
            id: "e-32",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-31"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".link--red",
                originalId: "5cb39efb2edee047fe843a7c|c6ce3e1c-50d2-286b-164a-38ce3da7fffe",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916187190
        },
        "e-33": {
            id: "e-33",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-34"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".project_link",
                originalId: "5cb39efb2edee047fe843a7c|a887b1a7-8b1c-1811-dfa3-e2dbb6b4f8dd",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916204779
        },
        "e-34": {
            id: "e-34",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-33"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".project_link",
                originalId: "5cb39efb2edee047fe843a7c|a887b1a7-8b1c-1811-dfa3-e2dbb6b4f8dd",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916204780
        },
        "e-35": {
            id: "e-35",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-36"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916224952
        },
        "e-36": {
            id: "e-36",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-35"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916224953
        },
        "e-37": {
            id: "e-37",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-38"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".footer_link",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916235919
        },
        "e-38": {
            id: "e-38",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-37"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".footer_link",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916235919
        },
        "e-39": {
            id: "e-39",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-40"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".shot_container",
                originalId: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554916662854
        },
        "e-41": {
            id: "e-41",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-42"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|1f71bb32-2dd2-0f15-ad69-c2fe007372b1"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554917119642
        },
        "e-43": {
            id: "e-43",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-44"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".experience_row",
                originalId: "5cb39efb2edee062d9843a75|ae4390cf-f26e-5c32-9664-ad2d5e87a01e",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554917141793
        },
        "e-45": {
            id: "e-45",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-46"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".awards_row",
                originalId: "5cb39efb2edee062d9843a75|01429800-f960-2556-dc76-87b90d8feebb",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554917152571
        },
        "e-47": {
            id: "e-47",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-48"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".link--red",
                originalId: "5cb39efb2edee02f9d843a79|bd092e85-b67d-df54-c841-b811baba9071",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554917564354
        },
        "e-49": {
            id: "e-49",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-50"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".link--white",
                originalId: "5cb39efb2edee04ff8843a77|9076a52b-3a02-8550-3d83-34cec91e2069",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554919093694
        },
        "e-50": {
            id: "e-50",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-16",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-49"
                }
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".link--white",
                originalId: "5cb39efb2edee04ff8843a77|9076a52b-3a02-8550-3d83-34cec91e2069",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554919093695
        },
        "e-52": {
            id: "e-52",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-18",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-51"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554919129774
        },
        "e-53": {
            id: "e-53",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-19",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-54"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|4374d70b-eae1-526f-196d-b12030743421"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554920152079
        },
        "e-55": {
            id: "e-55",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-20",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-56"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554920552375
        },
        "e-57": {
            id: "e-57",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-21",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-58"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|9a2298bc-5ba6-7fc4-d89a-35aa735ae999"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554920601008
        },
        "e-59": {
            id: "e-59",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-22",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-60"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee05586843a5d|2e509861-212d-9e4a-ad0e-64cb3b73d1e2"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554921118062
        },
        "e-61": {
            id: "e-61",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-22",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-62"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".footer_link",
                originalId: "5cb39efb2edee05586843a5d|109f0895-0115-c5ca-168f-ccf3f02de602",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554921927716
        },
        "e-64": {
            id: "e-64",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-23",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-63"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554924368787
        },
        "e-66": {
            id: "e-66",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-24",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-65"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee046b2843a76"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554924726352
        },
        "e-67": {
            id: "e-67",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-25",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-68"
                }
            },
            mediaQueries: ["main", "medium", "tiny", "small"],
            target: {
                selector: ".project_link",
                originalId: "5cb39efb2edee046b2843a76|6b78bbe6-3257-539a-9309-0cf97adb3ab6",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554924913465
        },
        "e-68": {
            id: "e-68",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-26",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-67"
                }
            },
            mediaQueries: ["main", "medium", "tiny", "small"],
            target: {
                selector: ".project_link",
                originalId: "5cb39efb2edee046b2843a76|6b78bbe6-3257-539a-9309-0cf97adb3ab6",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554924913466
        },
        "e-70": {
            id: "e-70",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-26",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-69"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee046b2843a76|20eac150-8e3e-4872-3027-a462664b807f"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554924968412
        },
        "e-72": {
            id: "e-72",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-27",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-71"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee04ff8843a77"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554925647442
        },
        "e-73": {
            id: "e-73",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-28",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-74"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".link--white",
                originalId: "5cb39efb2edee04ff8843a77|f6f9a8e6-43f2-abdf-1e09-168a04ed3b5a",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554926016653
        },
        "e-74": {
            id: "e-74",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-29",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-73"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".link--white",
                originalId: "5cb39efb2edee04ff8843a77|f6f9a8e6-43f2-abdf-1e09-168a04ed3b5a",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554926016653
        },
        "e-75": {
            id: "e-75",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-76"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|2a048807-22af-acfb-1732-f2b578d45377"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554927205426
        },
        "e-77": {
            id: "e-77",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-78"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee046b2843a76|8e5fc014-1f23-4c99-210b-94061df05dc6"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554927230840
        },
        "e-81": {
            id: "e-81",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-28",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-82"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".link--red",
                originalId: "5cb39efb2edee046b2843a76|7130265d-0f3f-645b-c552-c2179576ebba",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554927255705
        },
        "e-82": {
            id: "e-82",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-29",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-81"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".link--red",
                originalId: "5cb39efb2edee046b2843a76|7130265d-0f3f-645b-c552-c2179576ebba",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554927255706
        },
        "e-83": {
            id: "e-83",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-39",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-84"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee02f9d843a79"
            },
            config: {
                loop: true,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554928623051
        },
        "e-84": {
            id: "e-84",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-30",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-83"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee02f9d843a79"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554928623052
        },
        "e-85": {
            id: "e-85",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-86"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee02f9d843a79|32293474-f7a0-25e3-cc47-9506e5b6a0ba"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554928825847
        },
        "e-87": {
            id: "e-87",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-31",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee02f9d843a79"
            },
            config: [
                {
                    continuousParameterGroupId: "a-31-p",
                    smoothing: 80,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50
                }
            ],
            createdOn: 1554932913286
        },
        "e-88": {
            id: "e-88",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-39",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-89"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee01e90843a7a"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554954996192
        },
        "e-89": {
            id: "e-89",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-30",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-88"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee01e90843a7a"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554954996193
        },
        "e-90": {
            id: "e-90",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-31",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee01e90843a7a"
            },
            config: [
                {
                    continuousParameterGroupId: "a-31-p",
                    smoothing: 80,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50
                }
            ],
            createdOn: 1554955005113
        },
        "e-91": {
            id: "e-91",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-39",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-92"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee07d66843a7b"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554955022422
        },
        "e-92": {
            id: "e-92",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-30",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-91"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee07d66843a7b"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554955022424
        },
        "e-93": {
            id: "e-93",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-31",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee07d66843a7b"
            },
            config: [
                {
                    continuousParameterGroupId: "a-31-p",
                    smoothing: 80,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50
                }
            ],
            createdOn: 1554955035552
        },
        "e-94": {
            id: "e-94",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-39",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-95"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee047fe843a7c"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554955073149
        },
        "e-95": {
            id: "e-95",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-30",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-94"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee047fe843a7c"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554955073150
        },
        "e-96": {
            id: "e-96",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-31",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb39efb2edee047fe843a7c"
            },
            config: [
                {
                    continuousParameterGroupId: "a-31-p",
                    smoothing: 80,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50
                }
            ],
            createdOn: 1554955079292
        },
        "e-97": {
            id: "e-97",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-32",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-98"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".nav_link",
                originalId: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554989949048
        },
        "e-99": {
            id: "e-99",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-33",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-100"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|890cc81a-7899-c6bd-bb26-11c7aaad4b7f"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554990296703
        },
        "e-101": {
            id: "e-101",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-38",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-102"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".project_link.next",
                originalId: "5cb39efb2edee046b2843a76|6b78bbe6-3257-539a-9309-0cf97adb3ab6",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554990528384
        },
        "e-103": {
            id: "e-103",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-34",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-104"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee046b2843a76|a2b2ae88-c9d9-e187-4342-4239e7bb4003"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554990830481
        },
        "e-105": {
            id: "e-105",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-35",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-106"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee04ff8843a77|1efd8e98-d352-7f32-2e20-2aad47da4c38"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554990844316
        },
        "e-107": {
            id: "e-107",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-36",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-108"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".sidebar_trigger.close",
                originalId: "5cb39efb2edee02f9d843a79|902e27b6-8923-145b-b531-c101d1fa2578",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554990881609
        },
        "e-109": {
            id: "e-109",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-110"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee01e90843a7a|32293474-f7a0-25e3-cc47-9506e5b6a0ba"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554998411396
        },
        "e-111": {
            id: "e-111",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-112"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee07d66843a7b|32293474-f7a0-25e3-cc47-9506e5b6a0ba"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554998422791
        },
        "e-113": {
            id: "e-113",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-114"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee047fe843a7c|32293474-f7a0-25e3-cc47-9506e5b6a0ba"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1554998432635
        },
        "e-115": {
            id: "e-115",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-116"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".meta_credits",
                originalId: "5cb39efb2edee02f9d843a79|607d936a-397b-1a5f-ad2c-0755520fe091",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555001468474
        },
        "e-117": {
            id: "e-117",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-37",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-118"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".project_link.work",
                originalId: "5cb39efb2edee046b2843a76|d2fc78f4-fcbd-80f6-42f7-23b0c1754d8a",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555001591167
        },
        "e-119": {
            id: "e-119",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb48d04a32a786c1af14b79"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50
                }
            ],
            createdOn: 1555336452697
        },
        "e-120": {
            id: "e-120",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-39",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-121"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb48d04a32a786c1af14b79"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555336452697
        },
        "e-121": {
            id: "e-121",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-30",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-120"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb48d04a32a786c1af14b79"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555336452697
        },
        "e-122": {
            id: "e-122",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-123"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb48d04a32a786c1af14b79|32293474-f7a0-25e3-cc47-9506e5b6a0ba"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555336452697
        },
        "e-124": {
            id: "e-124",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-31",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb48d04a32a786c1af14b79"
            },
            config: [
                {
                    continuousParameterGroupId: "a-31-p",
                    smoothing: 80,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50
                }
            ],
            createdOn: 1555336452697
        },
        "e-129": {
            id: "e-129",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-130"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".section_title--project",
                originalId: "5cb39efb2edee01e90843a7a|38a04f31-264a-1402-30cc-c0d2bdcd2ffc",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555608562375
        },
        "e-131": {
            id: "e-131",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-132"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".project_next",
                originalId: "5cb39efb2edee01e90843a7a|58de3b39-16a9-a31e-1860-aab4455ecea1",
                appliesTo: "CLASS"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555608669792
        },
        "e-133": {
            id: "e-133",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-134"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|31058418-45e8-7897-71a8-bf6b0a6e4190"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555608683719
        },
        "e-135": {
            id: "e-135",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-136"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "5cb39efb2edee062d9843a75|01429800-f960-2556-dc76-87b90d8feea4"
            },
            config: {
                loop: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555608689446
        },
        "e-138": {
            id: "e-138",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-40",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-137"
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb8eaa0adbd7ddc71a57be8"
            },
            config: {
                loop: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null
            },
            createdOn: 1555623021291
        },
        "e-139": {
            id: "e-139",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0
                }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                appliesTo: "PAGE",
                styleBlockIds: [],
                id: "5cb8eaa0adbd7ddc71a57be8"
            },
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                },
                {
                    continuousParameterGroupId: "a-6-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 60,
                    restingState: 50
                }
            ],
            createdOn: 1555623180996
        }
    },
    actionLists: {
        a: {
            id: "a",
            title: "Sidebar — Trigger — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--1",
                                    selectorGuids: ["fdbe9d99-157e-5f68-31fe-95218141cd23"]
                                },
                                yValue: -4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 50,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--2",
                                    selectorGuids: ["5cd02437-279c-fe62-5153-f0d684b90312"]
                                },
                                yValue: -4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 100,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--3",
                                    selectorGuids: ["0649db8b-46ae-07c4-5d0a-28aa4b658574"]
                                },
                                yValue: -4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--1",
                                    selectorGuids: ["fdbe9d99-157e-5f68-31fe-95218141cd23"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--3",
                                    selectorGuids: ["0649db8b-46ae-07c4-5d0a-28aa4b658574"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--2",
                                    selectorGuids: ["5cd02437-279c-fe62-5153-f0d684b90312"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--1",
                                    selectorGuids: ["fdbe9d99-157e-5f68-31fe-95218141cd23"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 50,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--2",
                                    selectorGuids: ["5cd02437-279c-fe62-5153-f0d684b90312"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 100,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--3",
                                    selectorGuids: ["0649db8b-46ae-07c4-5d0a-28aa4b658574"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554779058433,
            useFirstGroupAsInitialState: true
        },
        "a-4": {
            id: "a-4",
            title: "Sidebar — Close — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-4-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        },
                        {
                            id: "a-4-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".close_vert",
                                    selectorGuids: ["c497d4d7-7d6d-bc8c-fcd2-bf4dfaff0cac"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-4-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".close_horz",
                                    selectorGuids: ["cf8b91ad-a206-dabe-1452-f8e811754063"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-4-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-4-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".close_horz",
                                    selectorGuids: ["cf8b91ad-a206-dabe-1452-f8e811754063"]
                                },
                                zValue: -45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-4-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".close_vert",
                                    selectorGuids: ["c497d4d7-7d6d-bc8c-fcd2-bf4dfaff0cac"]
                                },
                                zValue: 135,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554779058433,
            useFirstGroupAsInitialState: true
        },
        "a-2": {
            id: "a-2",
            title: "Sidebar — Trigger — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--1",
                                    selectorGuids: ["fdbe9d99-157e-5f68-31fe-95218141cd23"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-2-n-13",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".close_horz",
                                    selectorGuids: ["cf8b91ad-a206-dabe-1452-f8e811754063"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-2-n-12",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".close_vert",
                                    selectorGuids: ["c497d4d7-7d6d-bc8c-fcd2-bf4dfaff0cac"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-2-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--2",
                                    selectorGuids: ["5cd02437-279c-fe62-5153-f0d684b90312"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-2-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_dot--3",
                                    selectorGuids: ["0649db8b-46ae-07c4-5d0a-28aa4b658574"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-2-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554779058433,
            useFirstGroupAsInitialState: false
        },
        "a-5": {
            id: "a-5",
            title: "Sidebar — Close — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".close_horz",
                                    selectorGuids: ["cf8b91ad-a206-dabe-1452-f8e811754063"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-5-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".close_vert",
                                    selectorGuids: ["c497d4d7-7d6d-bc8c-fcd2-bf4dfaff0cac"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-5-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".trigger_circle",
                                    selectorGuids: ["e27afa7d-b276-4c03-6ad3-2690220c9931"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554779058433,
            useFirstGroupAsInitialState: false
        },
        "a-3": {
            id: "a-3",
            title: "Sidebar — Trigger — Move",
            continuousParameterGroups: [
                {
                    id: "a-3-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-3-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".sidebar_trigger",
                                            selectorGuids: ["3def8ad3-8823-7f7f-0a5d-5a277e4635d5"]
                                        },
                                        xValue: -24,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                },
                                {
                                    id: "a-3-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".trigger_icon",
                                            selectorGuids: ["e981ba8f-3297-e661-06e9-0b3d12b97cec"]
                                        },
                                        xValue: 8,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-3-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".sidebar_trigger",
                                            selectorGuids: ["3def8ad3-8823-7f7f-0a5d-5a277e4635d5"]
                                        },
                                        xValue: 24,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                },
                                {
                                    id: "a-3-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".trigger_icon",
                                            selectorGuids: ["e981ba8f-3297-e661-06e9-0b3d12b97cec"]
                                        },
                                        xValue: -8,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "a-3-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-3-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".sidebar_trigger",
                                            selectorGuids: ["3def8ad3-8823-7f7f-0a5d-5a277e4635d5"]
                                        },
                                        yValue: -24,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                },
                                {
                                    id: "a-3-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".trigger_icon",
                                            selectorGuids: ["e981ba8f-3297-e661-06e9-0b3d12b97cec"]
                                        },
                                        yValue: 8,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-3-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".sidebar_trigger",
                                            selectorGuids: ["3def8ad3-8823-7f7f-0a5d-5a277e4635d5"]
                                        },
                                        yValue: 24,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                },
                                {
                                    id: "a-3-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".trigger_icon",
                                            selectorGuids: ["e981ba8f-3297-e661-06e9-0b3d12b97cec"]
                                        },
                                        yValue: -8,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            createdOn: 1554817435224
        },
        "a-6": {
            id: "a-6",
            title: "Cursor — Move",
            continuousParameterGroups: [
                {
                    id: "a-6-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-6-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_container",
                                            selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                        },
                                        xValue: -50,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-6-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_container",
                                            selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                        },
                                        xValue: 50,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "a-6-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-6-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_container",
                                            selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                        },
                                        yValue: -50,
                                        xUnit: "VH",
                                        yUnit: "VH",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-6-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_container",
                                            selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                        },
                                        yValue: 50,
                                        xUnit: "VH",
                                        yUnit: "VH",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            createdOn: 1554865414457
        },
        "a-7": {
            id: "a-7",
            title: "Nav — Move",
            continuousParameterGroups: [
                {
                    id: "a-7-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-7-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav_container",
                                            selectorGuids: ["0191ddbc-1cdf-23d1-c333-c0256b8a52ba"]
                                        },
                                        xValue: 32,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 50,
                            actionItems: [
                                {
                                    id: "a-7-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav_container",
                                            selectorGuids: ["0191ddbc-1cdf-23d1-c333-c0256b8a52ba"]
                                        },
                                        xValue: 4,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-7-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav_container",
                                            selectorGuids: ["0191ddbc-1cdf-23d1-c333-c0256b8a52ba"]
                                        },
                                        xValue: -28,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "a-7-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: []
                }
            ],
            createdOn: 1554902095507
        },
        "a-8": {
            id: "a-8",
            title: "Nav — Container — Scale On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-8-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav_container",
                                    selectorGuids: ["0191ddbc-1cdf-23d1-c333-c0256b8a52ba"]
                                },
                                xValue: 1.03,
                                yValue: 1.03,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554902387986,
            useFirstGroupAsInitialState: false
        },
        "a-9": {
            id: "a-9",
            title: "Nav — Container — Scale Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-9-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 400,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav_container",
                                    selectorGuids: ["0191ddbc-1cdf-23d1-c333-c0256b8a52ba"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554902387986,
            useFirstGroupAsInitialState: false
        },
        "a-10": {
            id: "a-10",
            title: "Nav — Link — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0"
                                },
                                xValue: 1.05,
                                yValue: 1.05,
                                locked: true
                            }
                        },
                        {
                            id: "a-10-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0"
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903057058,
            useFirstGroupAsInitialState: false
        },
        "a-11": {
            id: "a-11",
            title: "Nav — Link — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee05586843a5d|a9861381-c5cd-f0c1-f13a-49a2af47ade0"
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903057058,
            useFirstGroupAsInitialState: false
        },
        "a-12": {
            id: "a-12",
            title: "Nav — Link — Opacity On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                value: 0.5,
                                unit: ""
                            }
                        },
                        {
                            id: "a-12-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                value: 0.5,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-13": {
            id: "a-13",
            title: "Nav — Link — Opacity Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-13-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1000,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-13-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1000,
                                target: {
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-19": {
            id: "a-19",
            title: "Nav — Link — About",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "e3752fb1",
                                target: {
                                    selector: ".body--home",
                                    selectorGuids: ["cad592dc-cf43-6b9e-73fc-b86c6cb26682"]
                                },
                                rValue: 146,
                                gValue: 151,
                                bValue: 134,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-19-n-6",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-19-n-5",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-19-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".footer_link",
                                    selectorGuids: ["e8463282-bdd1-21fc-ee66-6b91fa44243e"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-19-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-19-n-2",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-20": {
            id: "a-20",
            title: "Nav — Link — Work",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-20-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".body--home",
                                    selectorGuids: ["cad592dc-cf43-6b9e-73fc-b86c6cb26682"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-20-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "272a5499",
                                target: {
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                rValue: 249,
                                gValue: 68,
                                bValue: 68,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-20-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "272a5499",
                                target: {
                                    selector: ".footer_link",
                                    selectorGuids: ["e8463282-bdd1-21fc-ee66-6b91fa44243e"]
                                },
                                rValue: 249,
                                gValue: 68,
                                bValue: 68,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-20-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "272a5499",
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                rValue: 249,
                                gValue: 68,
                                bValue: 68,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-20-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "272a5499",
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                rValue: 249,
                                gValue: 68,
                                bValue: 68,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-20-n-6",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-21": {
            id: "a-21",
            title: "Nav — Link — Contact",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "272a5499",
                                target: {
                                    selector: ".body--home",
                                    selectorGuids: ["cad592dc-cf43-6b9e-73fc-b86c6cb26682"]
                                },
                                rValue: 249,
                                gValue: 68,
                                bValue: 68,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-21-n-6",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-21-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-21-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".footer_link",
                                    selectorGuids: ["e8463282-bdd1-21fc-ee66-6b91fa44243e"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-21-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-21-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-22": {
            id: "a-22",
            title: "Nav — Default",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-22-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".body--home",
                                    selectorGuids: ["cad592dc-cf43-6b9e-73fc-b86c6cb26682"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-22-n-6",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-22-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "56a6cf77",
                                target: {
                                    selector: ".nav_dash",
                                    selectorGuids: ["f4b5c8be-6d20-b16d-a0de-db37d7baef0e"]
                                },
                                rValue: 172,
                                gValue: 177,
                                bValue: 161,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-22-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "e3752fb1",
                                target: {
                                    selector: ".footer_link",
                                    selectorGuids: ["e8463282-bdd1-21fc-ee66-6b91fa44243e"]
                                },
                                rValue: 146,
                                gValue: 151,
                                bValue: 134,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-22-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "e3752fb1",
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                rValue: 146,
                                gValue: 151,
                                bValue: 134,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-22-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "56a6cf77",
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                rValue: 172,
                                gValue: 177,
                                bValue: 161,
                                aValue: 1
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554903299828,
            useFirstGroupAsInitialState: false
        },
        "a-14": {
            id: "a-14",
            title: "Cursor — Link — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-14-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        },
                        {
                            id: "a-14-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_container",
                                    selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-14-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                locked: false,
                                target: {
                                    selector: ".cursor_container",
                                    selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                },
                                widthValue: 0,
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX"
                            }
                        },
                        {
                            id: "a-14-n-9",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".cursor_container",
                                    selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-14-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 300,
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554906287307,
            useFirstGroupAsInitialState: true
        },
        "a-16": {
            id: "a-16",
            title: "Cursor — Link — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-16-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                locked: false,
                                target: {
                                    selector: ".cursor_container",
                                    selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                },
                                widthValue: 120,
                                heightValue: 120,
                                widthUnit: "PX",
                                heightUnit: "PX"
                            }
                        },
                        {
                            id: "a-16-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".cursor_container",
                                    selectorGuids: ["b1484669-9cb3-69de-9656-26911500e9a2"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-16-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".cursor_circle",
                                    selectorGuids: ["09d81363-d0ef-b948-b2bf-e0a0949eb49b"]
                                },
                                value: 0.4,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554906287307,
            useFirstGroupAsInitialState: false
        },
        "a-17": {
            id: "a-17",
            title: "Element — Skew In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-17-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-17-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-17-n-2",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-17-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-17-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    useEventTarget: true,
                                    id: "5cb39efb2edee02f9d843a79|41625ca6-61db-156a-dc02-af5324ba826a"
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554916685668,
            useFirstGroupAsInitialState: true
        },
        "a-18": {
            id: "a-18",
            title: "Page Load — Home",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-18-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-29",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-26",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-25",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true
                            }
                        },
                        {
                            id: "a-18-n-13",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-7",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-18-n-4",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-18-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                xValue: -50,
                                yValue: -35,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-12",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                xValue: 0.9,
                                yValue: 0.9,
                                locked: true
                            }
                        },
                        {
                            id: "a-18-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-11",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-18-n-14",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                xValue: -50,
                                yValue: -50,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-30",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-24",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-23",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-18-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-21",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-20",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-18-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-18-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-17",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-18-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-16",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-18-n-28",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-18-n-27",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554919194303,
            useFirstGroupAsInitialState: true
        },
        "a-32": {
            id: "a-32",
            title: "Page — Transtition Out — Home",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-32-n-15",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                xValue: -50,
                                yValue: -35,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-32-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 6,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-32-n-17",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-32-n-18",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-32-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".footer",
                                    selectorGuids: ["a5944a33-2570-b8c5-24c7-3134e031ca53"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-32-n-20",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-32-n-21",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-32-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".header",
                                    selectorGuids: ["08dde4e7-4a08-8fd7-ea7a-5c50732c122a"]
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-32-n-23",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-32-n-24",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav_link",
                                    selectorGuids: ["d7bfeef8-ee4f-79f0-32c6-ce888a21e2ec"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-32-n-25",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".nav",
                                    selectorGuids: ["2250c6eb-3298-8e27-88b0-a5900bce16f1"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-32-n-27",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-32-n-28",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0.1,
                                yValue: 0.1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554919194303,
            useFirstGroupAsInitialState: false
        },
        "a-23": {
            id: "a-23",
            title: "Page Load — About",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-23-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-23-n-16",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-23-n-15",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true
                            }
                        },
                        {
                            id: "a-23-n-13",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 0.9500000000000001,
                                yValue: 0.9500000000000001,
                                locked: true
                            }
                        },
                        {
                            id: "a-23-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-23-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-23-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-23-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-23-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-23-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-23-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-23-n-9",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-23-n-8",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-23-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 1000,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-23-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 1000,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-23-n-17",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 1000,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: true
        },
        "a-33": {
            id: "a-33",
            title: "Page — Transition Out — About",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-33-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".grid.about",
                                    selectorGuids: [
                                        "215b4342-5f8f-b2b2-84b0-cbd1e4a0ca88",
                                        "c49c0c10-aed8-223f-968b-aa0e91c2df06"
                                    ]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-33-n-17",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    id: "5cb39efb2edee062d9843a75|5cac03a9154dfc389253d736"
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-33-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-33-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-33-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".grid.about",
                                    selectorGuids: [
                                        "215b4342-5f8f-b2b2-84b0-cbd1e4a0ca88",
                                        "c49c0c10-aed8-223f-968b-aa0e91c2df06"
                                    ]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-33-n-13",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".grid.about",
                                    selectorGuids: [
                                        "215b4342-5f8f-b2b2-84b0-cbd1e4a0ca88",
                                        "c49c0c10-aed8-223f-968b-aa0e91c2df06"
                                    ]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-33-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-33-n-16",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-34": {
            id: "a-34",
            title: "Page — Transition Out — Work",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-34-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    id: "5cb39efb2edee046b2843a76|8e5fc014-1f23-4c99-210b-94061df05dc1"
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-34-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    id: "5cb39efb2edee046b2843a76|5cac03ae0ca8b5668be81aaf"
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-34-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-34-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-34-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    id: "5cb39efb2edee046b2843a76|8e5fc014-1f23-4c99-210b-94061df05dc1"
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-34-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    id: "5cb39efb2edee046b2843a76|8e5fc014-1f23-4c99-210b-94061df05dc1"
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-34-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-34-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-37": {
            id: "a-37",
            title: "Page — Transition Out — Work > Project",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-37-n-12",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".body--work",
                                    selectorGuids: ["fc43f1cb-36d9-5b34-6aa1-bed2799edf1f"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-37-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-37-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-37-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-37-n-11",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-37-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-37-n-15",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-37-n-14",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-37-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-37-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-37-n-17",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-37-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-37-n-21",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-37-n-20",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-35": {
            id: "a-35",
            title: "Page — Transition Out — Contact",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-35-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page",
                                    selectorGuids: ["257cbacb-be1e-8a58-f4c9-d81788939728"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-35-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    id: "5cb39efb2edee04ff8843a77|5cac03b2e575cf44dcbfb7a7"
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-35-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-35-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-35-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page",
                                    selectorGuids: ["257cbacb-be1e-8a58-f4c9-d81788939728"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-35-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page",
                                    selectorGuids: ["257cbacb-be1e-8a58-f4c9-d81788939728"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-35-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-35-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-36": {
            id: "a-36",
            title: "Page — Transition Out — Project > Work",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-36-n-10",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".circle_outer_mask",
                                    selectorGuids: ["63bd6524-b943-8f4a-36d4-f5e9c747916b"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-36-n-32",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar_trigger.close",
                                    selectorGuids: [
                                        "3def8ad3-8823-7f7f-0a5d-5a277e4635d5",
                                        "9816ace9-4a45-8a89-e1d5-14a809dc732e"
                                    ]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-13",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_title",
                                    selectorGuids: ["6be7b306-2e9c-401c-f67f-8c719a8c2caa"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_title",
                                    selectorGuids: ["6be7b306-2e9c-401c-f67f-8c719a8c2caa"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_title",
                                    selectorGuids: ["6be7b306-2e9c-401c-f67f-8c719a8c2caa"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".body--project",
                                    selectorGuids: ["27ff6f35-5708-e32b-9fef-66fe908ddbc2"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-36-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-36-n-9",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "59f72b3b",
                                target: {
                                    selector: ".circle_inner",
                                    selectorGuids: ["34dd607b-71c5-025b-6412-bfd7de5a46f8"]
                                },
                                rValue: 44,
                                gValue: 42,
                                bValue: 42,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-36-n-14",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-17",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-19",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-18",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-20",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-21",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-23",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-25",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-24",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-26",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-28",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-27",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-36-n-29",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-36-n-30",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-36-n-31",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-38": {
            id: "a-38",
            title: "Page — Transition Out — Project > Project",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-38-n",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".circle_outer_mask",
                                    selectorGuids: ["63bd6524-b943-8f4a-36d4-f5e9c747916b"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-38-n-2",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-5",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".body--project",
                                    selectorGuids: ["27ff6f35-5708-e32b-9fef-66fe908ddbc2"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-38-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-38-n-10",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                globalSwatchId: "bc2a8e16",
                                target: {
                                    selector: ".circle_inner",
                                    selectorGuids: ["34dd607b-71c5-025b-6412-bfd7de5a46f8"]
                                },
                                rValue: 242,
                                gValue: 239,
                                bValue: 232,
                                aValue: 1
                            }
                        },
                        {
                            id: "a-38-n-11",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-13",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-14",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-17",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-18",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-19",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-20",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-21",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".shot_container",
                                    selectorGuids: ["b682cf06-14f3-8081-1500-a7ee1a7ad204"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-23",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-24",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-25",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".project_next",
                                    selectorGuids: ["46662e1a-4fb3-e7be-acb5-1c3552ea70e5"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-26",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-27",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-28",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".link--red",
                                    selectorGuids: ["d6535d70-481e-39db-cc24-f388278076c7"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-38-n-29",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_credits",
                                    selectorGuids: ["3b5c2400-d79b-4934-8b03-b36409c48b78"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-38-n-31",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_credits",
                                    selectorGuids: ["3b5c2400-d79b-4934-8b03-b36409c48b78"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-38-n-30",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    selector: ".meta_credits",
                                    selectorGuids: ["3b5c2400-d79b-4934-8b03-b36409c48b78"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: false
        },
        "a-24": {
            id: "a-24",
            title: "Page Load — Work",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-24-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-24-n-17",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page",
                                    selectorGuids: ["257cbacb-be1e-8a58-f4c9-d81788939728"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".work_projects",
                                    selectorGuids: ["a44dbb2d-6d45-9eae-5db6-b1c4851bdf11"]
                                },
                                xValue: 0.95,
                                yValue: 0.95,
                                locked: true
                            }
                        },
                        {
                            id: "a-24-n-5",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-24-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-24-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-24-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-24-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page",
                                    selectorGuids: ["257cbacb-be1e-8a58-f4c9-d81788939728"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-24-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-13",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".project_link",
                                    selectorGuids: ["2d0e0f31-133f-09dd-27c0-8cd3d2306b05"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-24-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".work_projects",
                                    selectorGuids: ["a44dbb2d-6d45-9eae-5db6-b1c4851bdf11"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-24-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-24-n-16",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: true
        },
        "a-27": {
            id: "a-27",
            title: "Page Load — Contact",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-27-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-27-n-19",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-27-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-17",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-27-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true
                            }
                        },
                        {
                            id: "a-27-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 0.9500000000000001,
                                yValue: 0.9500000000000001,
                                locked: true
                            }
                        },
                        {
                            id: "a-27-n-5",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-27-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-27-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-27-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-27-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-27-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-13",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-27-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-27-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-16",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-27-n-22",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-27-n-21",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-27-n-20",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".columns_item",
                                    selectorGuids: ["39660466-7af1-5828-2fd7-aa383440329b"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: true
        },
        "a-30": {
            id: "a-30",
            title: "Page Load — Project",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-30-n-25",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-31",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar_trigger.close",
                                    selectorGuids: [
                                        "3def8ad3-8823-7f7f-0a5d-5a277e4635d5",
                                        "9816ace9-4a45-8a89-e1d5-14a809dc732e"
                                    ]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-24",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-23",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-2",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true
                            }
                        },
                        {
                            id: "a-30-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 0.9,
                                yValue: 0.9,
                                locked: true
                            }
                        },
                        {
                            id: "a-30-n-8",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 8,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-30-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-32",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar_trigger.close",
                                    selectorGuids: [
                                        "3def8ad3-8823-7f7f-0a5d-5a277e4635d5",
                                        "9816ace9-4a45-8a89-e1d5-14a809dc732e"
                                    ]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-29",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 500,
                                target: {
                                    selector: ".loader",
                                    selectorGuids: ["35350230-cb26-1065-cbda-53401bbfcea8"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-16",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-14",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".sidebar",
                                    selectorGuids: ["87013f88-06e9-9b21-fc11-1e62d5db6fdc"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-17",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".page_headline",
                                    selectorGuids: ["5d20e950-a2cc-4849-b48e-3826fd313f80"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-30-n-30",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 800,
                                easing: "",
                                duration: 0,
                                value: "none",
                                target: {
                                    selector: ".loader",
                                    selectorGuids: ["35350230-cb26-1065-cbda-53401bbfcea8"]
                                }
                            }
                        },
                        {
                            id: "a-30-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-19",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".cursor",
                                    selectorGuids: ["331c3f04-9633-39c3-7e6c-351f16f6c5bf"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-30-n-20",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-21",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 1600,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_industry",
                                    selectorGuids: ["2e6a568f-7dc8-d3b8-0db3-c67a7b10ab1b"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-30-n-26",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 1700,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-30-n-27",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 1700,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-30-n-28",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 1700,
                                easing: "inOutQuart",
                                duration: 1600,
                                target: {
                                    selector: ".meta_role",
                                    selectorGuids: ["c9aacefe-f077-0f8c-4bef-089e500bcac5"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924378720,
            useFirstGroupAsInitialState: true
        },
        "a-25": {
            id: "a-25",
            title: "Work — Projects — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-25-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-25-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                xValue: -0.5,
                                yValue: 0.5,
                                xUnit: "VW",
                                yUnit: "VW",
                                zUnit: "PX"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-25-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "VW",
                                yUnit: "VW",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-25-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924918553,
            useFirstGroupAsInitialState: true
        },
        "a-26": {
            id: "a-26",
            title: "Work — Projects — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-26-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                xValue: -0.5,
                                yValue: 0.5,
                                xUnit: "VW",
                                yUnit: "VW",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-26-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 400,
                                target: {
                                    selector: ".project_link_icon",
                                    selectorGuids: ["13dcf1d6-1783-890e-595f-cd667fc55d52"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554924918553,
            useFirstGroupAsInitialState: false
        },
        "a-28": {
            id: "a-28",
            title: "Link — Arrow — Hover On",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-28-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".link_icon",
                                    selectorGuids: ["a3c2d6bf-5bc8-af14-adf6-0197ecc2f14d"]
                                },
                                xValue: 4,
                                yValue: -4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554926026285,
            useFirstGroupAsInitialState: false
        },
        "a-29": {
            id: "a-29",
            title: "Link — Arrow — Hover Off",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-29-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".link_icon",
                                    selectorGuids: ["a3c2d6bf-5bc8-af14-adf6-0197ecc2f14d"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1554926026285,
            useFirstGroupAsInitialState: false
        },
        "a-31": {
            id: "a-31",
            title: "Sidebar — Progress — Project",
            continuousParameterGroups: [
                {
                    id: "a-31-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-31-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_tr",
                                            selectorGuids: ["c77b0a32-3d8c-dd3f-a8a4-483d08f54013"]
                                        },
                                        zValue: -90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 25,
                            actionItems: [
                                {
                                    id: "a-31-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_tr",
                                            selectorGuids: ["c77b0a32-3d8c-dd3f-a8a4-483d08f54013"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                },
                                {
                                    id: "a-31-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_br",
                                            selectorGuids: ["b86d0f0f-6bc2-4a88-6295-9ac8e1c76402"]
                                        },
                                        zValue: -90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 50,
                            actionItems: [
                                {
                                    id: "a-31-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_br",
                                            selectorGuids: ["b86d0f0f-6bc2-4a88-6295-9ac8e1c76402"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                },
                                {
                                    id: "a-31-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_bl",
                                            selectorGuids: ["b6766ba4-3025-a67a-facc-638024a00067"]
                                        },
                                        zValue: -90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 75,
                            actionItems: [
                                {
                                    id: "a-31-n-7",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_bl",
                                            selectorGuids: ["b6766ba4-3025-a67a-facc-638024a00067"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                },
                                {
                                    id: "a-31-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_tl",
                                            selectorGuids: ["0917af48-87e2-ac73-dfe7-572396505f59"]
                                        },
                                        zValue: -90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }
                            ]
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-31-n-9",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".quadrant_tl",
                                            selectorGuids: ["0917af48-87e2-ac73-dfe7-572396505f59"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            createdOn: 1554932948031
        },
        "a-39": {
            id: "a-39",
            title: "Page Load — Loader — Projects",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-39-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                value: "flex",
                                target: {
                                    selector: ".loader",
                                    selectorGuids: ["35350230-cb26-1065-cbda-53401bbfcea8"]
                                }
                            }
                        },
                        {
                            id: "a-39-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-39-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 1000,
                                easing: "outQuart",
                                duration: 2000,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true
                            }
                        },
                        {
                            id: "a-39-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 1000,
                                easing: "outQuart",
                                duration: 4000,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                zValue: 720,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-39-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 1000,
                                easing: "outQuart",
                                duration: 2000,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-39-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "inQuart",
                                duration: 1000,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                value: 0,
                                unit: ""
                            }
                        },
                        {
                            id: "a-39-n-9",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inQuart",
                                duration: 500,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                zValue: 1440,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-39-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inQuart",
                                duration: 1000,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                xValue: 0.1,
                                yValue: 0.1,
                                locked: true
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-39-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".loader_spinner",
                                    selectorGuids: ["de547ac4-6fe8-b528-a080-84f3ee0d498e"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                }
            ],
            createdOn: 1555373938131,
            useFirstGroupAsInitialState: true
        },
        "a-40": {
            id: "a-40",
            title: "Page — Load — 404",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-40-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-40-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                value: 1,
                                unit: ""
                            }
                        },
                        {
                            id: "a-40-n-2",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }
                    ]
                },
                {
                    actionItems: [
                        {
                            id: "a-40-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "VH",
                                zUnit: "PX"
                            }
                        },
                        {
                            id: "a-40-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        },
                        {
                            id: "a-40-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id: "5cb8eaa0adbd7ddc71a57be8|46b44261-8df2-a3f9-1cdc-492a0f31052b"
                                },
                                value: 1,
                                unit: ""
                            }
                        }
                    ]
                }
            ],
            createdOn: 1555623030007,
            useFirstGroupAsInitialState: false
        }
    },
    site: {
        mediaQueries: [
            {
                key: "main",
                min: 992,
                max: 10000
            },
            {
                key: "medium",
                min: 768,
                max: 991
            },
            {
                key: "small",
                min: 480,
                max: 767
            },
            {
                key: "tiny",
                min: 0,
                max: 479
            }
        ]
    }
});
