!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , E = C.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = k,
                !C.getElementsByName || !C.getElementsByName(k).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e),
            d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument === C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = k.split("").sort(D).join("") === k,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    k.find = h,
    k.expr = h.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = h.uniqueSort,
    k.text = h.getText,
    k.isXMLDoc = h.isXML,
    k.contains = h.contains,
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
    q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (O[r] || k.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== I && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : M)),
                        o[2][3].add(l(0, e, m(n) ? n : I))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = k.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }),
    k.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(k(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y
      , J = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                        ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = E.documentElement
      , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            k.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ce[s] = u)))) : "none" !== n && (l[c] = "none",
            Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Q.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Q.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = k.event.special[d] || {},
                    c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = k.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeSAnjp = e && e.timeSAnjp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            delegateType: t
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Se),
            this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
            u = k.extend({}, s),
            J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                k.map(a, Re),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === u.style.backgroundClip,
        k.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
      , Xe = E.createElement("div").style
      , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function tt(e, t, n) {
        var r = Fe(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                        return tt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = k.css(e, u)),
                Ze(0, t, s)
            }
        }
    }),
    k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }),
    k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
        }
    }).init.prototype = nt.prototype,
    (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = nt.prototype.init,
    k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
        k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
        rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                dt.tweeners[n] = dt.tweeners[n] || [],
                dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                st.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = k.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                        for (r in g || fe([e]),
                        Q.remove(e, "fxshow"),
                        d)
                            k.style(e, r, d[r])
                    })),
                    u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t)
              , o = k.speed(e, n, r)
              , a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = k.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        rt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        it || (it = !0,
        lt())
    }
    ,
    k.fx.stop = function() {
        it = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ot = E.createElement("input"),
    at = E.createElement("select").appendChild(E.createElement("option")),
    ot.type = "checkbox",
    y.checkOn = "" !== ot.value,
    y.optSelected = at.selected,
    (ot = E.createElement("input")).value = "t",
    ot.type = "radio",
    y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o],
            gt[o] = r,
            r = null != a(e, t, n) ? o : null,
            gt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                i = k.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, xt(this)))
                });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, xt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = k(this),
                    r = bt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
      , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                k.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var Et = C.location
      , kt = Date.now()
      , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , At = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
          , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
        e
    }
    Ft.href = Et.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
                return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
            v.url = f + o),
            v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = _t(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
    y.ajax = Xt = !!Xt,
    k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || k.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? k(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Vt.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
        o && o.length && k(o).remove(),
        k.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = k.css(e, "top"),
            u = k.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = _e(e, n),
                $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = A,
    k.isFunction = m,
    k.isWindow = x,
    k.camelCase = V,
    k.type = w,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
      , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
        k
    }
    ,
    e || (C.jQuery = C.$ = k),
    k
});

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = e.ownerDocument.defaultView
          , n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        return 11 === e ? pe : 10 === e ? se : pe || se
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function c(e) {
        var t = e.body
          , o = e.documentElement
          , n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }
    function g(e) {
        return fe({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}
          , d = s.width || e.clientWidth || p.right - p.left
          , a = s.height || e.clientHeight || p.bottom - p.top
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth, 10)
          , c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0),
        a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var w = parseFloat(m.marginTop, 10)
              , y = parseFloat(m.marginLeft, 10);
            b.top -= h - w,
            b.bottom -= h - w,
            b.left -= c - y,
            b.right -= c - y,
            b.marginTop = w,
            b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = ee(o.clientWidth, window.innerWidth || 0)
          , r = ee(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)
            return !1;
        if ('fixed' === t(e, 'position'))
            return !0;
        var i = o(e);
        return !!i && y(i)
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , s = {
            top: 0,
            left: 0
        }
          , d = p ? E(e) : a(e, t);
        if ('viewport' === r)
            s = w(d, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)),
            'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !y(d)) {
                var m = c(e.ownerDocument)
                  , h = m.height
                  , g = m.width;
                s.top += f.top - f.marginTop,
                s.bottom = h + f.top,
                s.left += f.left - f.marginLeft,
                s.right = g + f.left
            } else
                s = f
        }
        i = i || 0;
        var u = 'number' == typeof i;
        return s.left += u ? i : i.left || 0,
        s.top += u ? i : i.top || 0,
        s.right -= u ? i : i.right || 0,
        s.bottom -= u ? i : i.bottom || 0,
        s
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return fe({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }
    function S(e) {
        var t = e.ownerDocument.defaultView
          , o = t.getComputedStyle(e)
          , n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0)
          , i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0)
          , r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function D(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = C(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = D(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function H(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function B() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[H('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function F(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t) {
        var o = e.offsets
          , n = o.popper
          , i = o.reference
          , r = $
          , p = function(e) {
            return e
        }
          , s = r(i.width)
          , d = r(n.width)
          , a = -1 !== ['left', 'right'].indexOf(e.placement)
          , l = -1 !== e.placement.indexOf('-')
          , f = t ? a || l || s % 2 == d % 2 ? r : Z : p
          , m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }
    function K(e, t, o) {
        var n = C(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = ce.indexOf(e)
          , n = ce.slice(o + 1).concat(ce.slice(0, o));
        return t ? n.reverse() : n
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function X(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(C(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)
        if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
            ne = 1;
            break
        }
    var i = te && window.Promise
      , re = i ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, ne))
        }
    }
      , pe = te && !!(window.MSInputMethodContext && document.documentMode)
      , se = te && /MSIE 10/.test(navigator.userAgent)
      , de = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , ae = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , le = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , fe = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , me = te && /Firefox/i.test(navigator.userAgent)
      , he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , ce = he.slice(3)
      , ge = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ue = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            de(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = re(this.update.bind(this)),
            this.options = fe({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return fe({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return ae(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return B.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ue.placements = he,
    ue.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: le({}, d, r[d]),
                            end: le({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = fe({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = H('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])),
                            le({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            le({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = fe({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , w = t(e.instance.popper)
                      , y = parseFloat(w['margin' + f], 10)
                      , E = parseFloat(w['border' + f + 'Width'], 10)
                      , v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    le(n, m, $(v)),
                    le(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case ge.FLIP:
                        p = [n, i];
                        break;
                    case ge.CLOCKWISE:
                        p = G(n);
                        break;
                    case ge.COUNTERCLOCKWISE:
                        p = G(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , w = -1 !== ['top', 'bottom'].indexOf(n)
                          , y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
                        (m || b || y) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        y && (r = z(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = C(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = C(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !me), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = H('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                    s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1
                          , y = 'right' == g ? -1 : 1;
                        m[c] = d * w,
                        m[g] = s * y,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = fe({}, E, e.attributes),
                    e.styles = fe({}, m, e.styles),
                    e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles),
                    V(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    j(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ue
});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))),
            e.forEach(function(t) {
                var e, n, i;
                e = o,
                i = r[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
    u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";
    function n(t) {
        var e = this
          , n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t),
        this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration")
              , n = g(t).css("transition-delay")
              , i = parseFloat(e)
              , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && _.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n,
    g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert"
      , r = "bs.alert"
      , a = "." + r
      , c = g.fn[o]
      , h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }
      , f = "alert"
      , d = "fade"
      , m = "show"
      , p = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, r),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = g(t).closest("." + f)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = g.Event(h.CLOSE);
            return g(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (g(e).removeClass(m),
            g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            g(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(r);
                e || (e = new i(this),
                t.data(r, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    g.fn[o] = p._jQueryInterface,
    g.fn[o].Constructor = p,
    g.fn[o].noConflict = function() {
        return g.fn[o] = c,
        p._jQueryInterface
    }
    ;
    var v = "button"
      , y = "bs.button"
      , E = "." + y
      , C = ".data-api"
      , T = g.fn[v]
      , S = "active"
      , b = "btn"
      , I = "focus"
      , D = '[data-toggle^="button"]'
      , w = '[data-toggle="buttons"]'
      , A = 'input:not([type="hidden"])'
      , N = ".active"
      , O = ".btn"
      , k = {
        CLICK_DATA_API: "click" + E + C,
        FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
    }
      , P = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = g(this._element).closest(w)[0];
            if (n) {
                var i = this._element.querySelector(A);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(S))
                            t = !1;
                        else {
                            var o = n.querySelector(N);
                            o && g(o).removeClass(S)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(S),
                        g(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
            t && g(this._element).toggleClass(S)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, y),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(y);
                t || (t = new n(this),
                g(this).data(y, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)),
        P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
    g.fn[v] = P._jQueryInterface,
    g.fn[v].Constructor = P,
    g.fn[v].noConflict = function() {
        return g.fn[v] = T,
        P._jQueryInterface
    }
    ;
    var L = "carousel"
      , j = "bs.carousel"
      , H = "." + j
      , R = ".data-api"
      , x = g.fn[L]
      , F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , W = "next"
      , q = "prev"
      , M = "left"
      , K = "right"
      , Q = {
        SLIDE: "slide" + H,
        SLID: "slid" + H,
        KEYDOWN: "keydown" + H,
        MOUSEENTER: "mouseenter" + H,
        MOUSELEAVE: "mouseleave" + H,
        TOUCHSTART: "touchstart" + H,
        TOUCHMOVE: "touchmove" + H,
        TOUCHEND: "touchend" + H,
        POINTERDOWN: "pointerdown" + H,
        POINTERUP: "pointerup" + H,
        DRAG_START: "dragstart" + H,
        LOAD_DATA_API: "load" + H + R,
        CLICK_DATA_API: "click" + H + R
    }
      , B = "carousel"
      , V = "active"
      , Y = "slide"
      , z = "carousel-item-right"
      , X = "carousel-item-left"
      , $ = "carousel-item-next"
      , G = "carousel-item-prev"
      , J = "pointer-event"
      , Z = ".active"
      , tt = ".active.carousel-item"
      , et = ".carousel-item"
      , nt = ".carousel-item img"
      , it = ".carousel-item-next, .carousel-item-prev"
      , ot = ".carousel-indicators"
      , rt = "[data-slide], [data-slide-to]"
      , st = '[data-ride="carousel"]'
      , at = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , lt = function() {
        function r(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(ot),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(W)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(q)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(tt);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    g(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? W : q;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            g(this._element).off(H),
            g.removeData(this._element, j),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, F, t),
            _.typeCheckConfig(L, t, U),
            t
        }
        ,
        t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var e = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    "hover" === n._config.pause && (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                };
                g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                    return t.preventDefault()
                }),
                this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t)
                }),
                this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }),
                g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t)
                }))
            }
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === W
              , i = t === q
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === q ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(tt))
              , o = g.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o),
            o
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                g(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(V)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === W ? (n = X,
            i = $,
            M) : (n = z,
            i = G,
            K),
            l && g(l).hasClass(V))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = g.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i),
                    _.reflow(l),
                    g(s).addClass(n),
                    g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    f) : this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function() {
                        g(l).removeClass(n + " " + i).addClass(V),
                        g(s).removeClass(V + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return g(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    g(s).removeClass(V),
                    g(l).addClass(V),
                    this._isSliding = !1,
                    g(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this).data(j)
                  , e = l({}, F, g(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this,e),
                g(this).data(j, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && e.ride && (t.pause(),
                    t.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(g(n), i),
                    o && g(n).data(j).to(o),
                    t.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return F
            }
        }]),
        r
    }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }),
    g.fn[L] = lt._jQueryInterface,
    g.fn[L].Constructor = lt,
    g.fn[L].noConflict = function() {
        return g.fn[L] = x,
        lt._jQueryInterface
    }
    ;
    var ct = "collapse"
      , ht = "bs.collapse"
      , ut = "." + ht
      , ft = g.fn[ct]
      , dt = {
        toggle: !0,
        parent: ""
    }
      , gt = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , _t = {
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
    }
      , mt = "show"
      , pt = "collapse"
      , vt = "collapsing"
      , yt = "collapsed"
      , Et = "width"
      , Ct = "height"
      , Tt = ".show, .collapsing"
      , St = '[data-toggle="collapse"]'
      , bt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = _.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            g(this._element).hasClass(mt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
            })).length && (t = null),
            !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);
                if (g(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                    e || g(t).data(ht, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(pt).addClass(vt),
                    this._element.style[o] = 0,
                    this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        g(n._element).trigger(_t.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);
                if (g(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    _.reflow(this._element),
                    g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = _.getSelectorFromElement(r);
                            if (null !== s)
                                g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ht),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle),
            _.typeCheckConfig(ct, t, gt),
            t
        }
        ,
        t._getDimension = function() {
            return g(this._element).hasClass(Et) ? Et : Ct
        }
        ,
        t._getParent = function() {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            var n = g(t).hasClass(mt);
            e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(ht)
                  , n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(ht, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return dt
            }
        }]),
        a
    }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this)
          , e = _.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this)
              , e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }),
    g.fn[ct] = bt._jQueryInterface,
    g.fn[ct].Constructor = bt,
    g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft,
        bt._jQueryInterface
    }
    ;
    var It = "dropdown"
      , Dt = "bs.dropdown"
      , wt = "." + Dt
      , At = ".data-api"
      , Nt = g.fn[It]
      , Ot = new RegExp("38|40|27")
      , kt = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK: "click" + wt,
        CLICK_DATA_API: "click" + wt + At,
        KEYDOWN_DATA_API: "keydown" + wt + At,
        KEYUP_DATA_API: "keyup" + wt + At
    }
      , Pt = "disabled"
      , Lt = "show"
      , jt = "dropup"
      , Ht = "dropright"
      , Rt = "dropleft"
      , xt = "dropdown-menu-right"
      , Ft = "position-static"
      , Ut = '[data-toggle="dropdown"]'
      , Wt = ".dropdown form"
      , qt = ".dropdown-menu"
      , Mt = ".navbar-nav"
      , Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Qt = "top-start"
      , Bt = "top-end"
      , Vt = "bottom-start"
      , Yt = "bottom-end"
      , zt = "right-start"
      , Xt = "left-start"
      , $t = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Gt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , Jt = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element)
                  , e = g(this._menu).hasClass(Lt);
                if (c._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = g.Event(kt.SHOW, n);
                    if (g(t).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                            this._popper = new u(o,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        g(this._menu).toggleClass(Lt),
                        g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.show = function() {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.SHOW, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.HIDE, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, Dt),
            g(this._element).off(wt),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            g(this._element).on(kt.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = g(this._element.parentNode)
              , e = Vt;
            return t.hasClass(jt) ? (e = Qt,
            g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < g(this._element).closest(".navbar").length
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            t
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(Dt);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                g(this).data(Dt, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n])
                      , r = g(e[n]).data(Dt)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    r) {
                        var a = r._menu;
                        if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                            var l = g.Event(kt.HIDE, s);
                            g(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            g(a).removeClass(Lt),
                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this)
                  , n = g(e).hasClass(Lt);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--,
                        40 === t.which && o < i.length - 1 && o++,
                        o < 0 && (o = 0),
                        i[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(Ut);
                        g(r).trigger("focus")
                    }
                    g(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return $t
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Gt
            }
        }]),
        c
    }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function(t) {
        t.stopPropagation()
    }),
    g.fn[It] = Jt._jQueryInterface,
    g.fn[It].Constructor = Jt,
    g.fn[It].noConflict = function() {
        return g.fn[It] = Nt,
        Jt._jQueryInterface
    }
    ;
    var Zt = "modal"
      , te = "bs.modal"
      , ee = "." + te
      , ne = g.fn[Zt]
      , ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , re = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    }
      , se = "modal-dialog-scrollable"
      , ae = "modal-scrollbar-measure"
      , le = "modal-backdrop"
      , ce = "modal-open"
      , he = "fade"
      , ue = "show"
      , fe = ".modal-dialog"
      , de = ".modal-body"
      , ge = '[data-toggle="modal"]'
      , _e = '[data-dismiss="modal"]'
      , me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , pe = ".sticky-top"
      , ve = function() {
        function o(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(fe),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(he) && (this._isTransitioning = !0);
                var n = g.Event(re.SHOW, {
                    relatedTarget: t
                });
                g(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                    return e.hide(t)
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                    g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);
                if (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(he);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g(document).off(re.FOCUSIN),
                    g(this._element).removeClass(ue),
                    g(this._element).off(re.CLICK_DISMISS),
                    g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                    i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return g(t).off(ee)
            }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ie, t),
            _.typeCheckConfig(Zt, t, oe),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = g(this._element).hasClass(he);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0,
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus();
            var i = g.Event(re.SHOWN, {
                relatedTarget: t
            })
              , o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                g(e._element).trigger(i)
            };
            if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else
                o()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : g(window).off(re.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (g(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = g(this._element).hasClass(he) ? he : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = le,
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(re.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ue),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(ue);
                var o = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (g(this._element).hasClass(he)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(me))
                  , e = [].slice.call(document.querySelectorAll(pe));
                g(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                g(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            g(document.body).addClass(ce)
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(me));
            g(t).each(function(t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + pe));
            g(e).each(function(t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = ae,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = g(this).data(te)
                  , e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this,e),
                g(this).data(te, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ie
            }
        }]),
        o
    }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }),
    g.fn[Zt] = ve._jQueryInterface,
    g.fn[Zt].Constructor = ve,
    g.fn[Zt].noConflict = function() {
        return g.fn[Zt] = ne,
        ve._jQueryInterface
    }
    ;
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Ee = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
            var n = l[t]
              , i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var o = [].slice.call(n.attributes)
              , r = [].concat(s["*"] || [], s[i] || []);
            o.forEach(function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                    for (var i = e.filter(function(t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, r) || n.removeAttribute(t.nodeName)
            })
        }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var be = "tooltip"
      , Ie = "bs.tooltip"
      , De = "." + Ie
      , we = g.fn[be]
      , Ae = "bs-tooltip"
      , Ne = new RegExp("(^|\\s)" + Ae + "\\S+","g")
      , Oe = ["sanitize", "whiteList", "sanitizeFn"]
      , ke = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Pe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Ee
    }
      , je = "show"
      , He = "out"
      , Re = {
        HIDE: "hide" + De,
        HIDDEN: "hidden" + De,
        SHOW: "show" + De,
        SHOWN: "shown" + De,
        INSERTED: "inserted" + De,
        CLICK: "click" + De,
        FOCUSIN: "focusin" + De,
        FOCUSOUT: "focusout" + De,
        MOUSEENTER: "mouseenter" + De,
        MOUSELEAVE: "mouseleave" + De
    }
      , xe = "fade"
      , Fe = "show"
      , Ue = ".tooltip-inner"
      , We = ".arrow"
      , qe = "hover"
      , Me = "focus"
      , Ke = "click"
      , Qe = "manual"
      , Be = function() {
        function i(t, e) {
            if ("undefined" == typeof u)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = g(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    g(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (g(this.getTipElement()).hasClass(Fe))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && g(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === g(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element)
                  , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(xe);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this),
                g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new u(this.element,o,{
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: We
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }),
                g(o).addClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    g(e.element).trigger(e.constructor.Event.SHOWN),
                    t === He && e._leave(null, e)
                };
                if (g(this.tip).hasClass(xe)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = g.Event(this.constructor.Event.HIDE)
              , o = function() {
                e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                g(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (g(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (g(n).removeClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                this._activeTrigger[Ke] = !1,
                this._activeTrigger[Me] = !1,
                this._activeTrigger[qe] = !1,
                g(this.tip).hasClass(xe)) {
                    var r = _.getTransitionDurationFromElement(n);
                    g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Ae + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
            g(t).removeClass(xe + " " + Fe)
        }
        ,
        t.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(t) {
            return Pe[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== Qe) {
                    var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
            }),
            g(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout),
            e._hoverState = je,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === je && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = He,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === He && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            var e = g(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== Oe.indexOf(t) && delete e[t]
            }),
            "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ne);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(xe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ie)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ie, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Le
            }
        }, {
            key: "NAME",
            get: function() {
                return be
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "Event",
            get: function() {
                return Re
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return De
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ke
            }
        }]),
        i
    }();
    g.fn[be] = Be._jQueryInterface,
    g.fn[be].Constructor = Be,
    g.fn[be].noConflict = function() {
        return g.fn[be] = we,
        Be._jQueryInterface
    }
    ;
    var Ve = "popover"
      , Ye = "bs.popover"
      , ze = "." + Ye
      , Xe = g.fn[Ve]
      , $e = "bs-popover"
      , Ge = new RegExp("(^|\\s)" + $e + "\\S+","g")
      , Je = l({}, Be.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ze = l({}, Be.DefaultType, {
        content: "(string|element|function)"
    })
      , tn = "fade"
      , en = "show"
      , nn = ".popover-header"
      , on = ".popover-body"
      , rn = {
        HIDE: "hide" + ze,
        HIDDEN: "hidden" + ze,
        SHOW: "show" + ze,
        SHOWN: "shown" + ze,
        INSERTED: "inserted" + ze,
        CLICK: "click" + ze,
        FOCUSIN: "focusin" + ze,
        FOCUSOUT: "focusout" + ze,
        MOUSEENTER: "mouseenter" + ze,
        MOUSELEAVE: "mouseleave" + ze
    }
      , sn = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass($e + "-" + t)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(nn), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + " " + en)
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ye)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ye, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Je
            }
        }, {
            key: "NAME",
            get: function() {
                return Ve
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ye
            }
        }, {
            key: "Event",
            get: function() {
                return rn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ze
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ze
            }
        }]),
        i
    }(Be);
    g.fn[Ve] = sn._jQueryInterface,
    g.fn[Ve].Constructor = sn,
    g.fn[Ve].noConflict = function() {
        return g.fn[Ve] = Xe,
        sn._jQueryInterface
    }
    ;
    var an = "scrollspy"
      , ln = "bs.scrollspy"
      , cn = "." + ln
      , hn = g.fn[an]
      , un = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , fn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , dn = {
        ACTIVATE: "activate" + cn,
        SCROLL: "scroll" + cn,
        LOAD_DATA_API: "load" + cn + ".data-api"
    }
      , gn = "dropdown-item"
      , _n = "active"
      , mn = '[data-spy="scroll"]'
      , pn = ".nav, .list-group"
      , vn = ".nav-link"
      , yn = ".nav-item"
      , En = ".list-group-item"
      , Cn = ".dropdown"
      , Tn = ".dropdown-item"
      , Sn = ".dropdown-toggle"
      , bn = "offset"
      , In = "position"
      , Dn = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            g(this._scrollElement).on(dn.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? bn : In
              , o = "auto" === this._config.method ? t : this._config.method
              , r = o === In ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [g(e)[o]().top + r, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(an),
                g(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return _.typeCheckConfig(an, t, fn),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n),
            n.addClass(_n)) : (n.addClass(_n),
            n.parents(pn).prev(vn + ", " + En).addClass(_n),
            n.parents(pn).prev(yn).children(vn).addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(_n)
            }).forEach(function(t) {
                return t.classList.remove(_n)
            })
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(ln);
                if (t || (t = new n(this,"object" == typeof e && e),
                g(this).data(ln, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return un
            }
        }]),
        n
    }();
    g(window).on(dn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }),
    g.fn[an] = Dn._jQueryInterface,
    g.fn[an].Constructor = Dn,
    g.fn[an].noConflict = function() {
        return g.fn[an] = hn,
        Dn._jQueryInterface
    }
    ;
    var wn = "bs.tab"
      , An = "." + wn
      , Nn = g.fn.tab
      , On = {
        HIDE: "hide" + An,
        HIDDEN: "hidden" + An,
        SHOW: "show" + An,
        SHOWN: "shown" + An,
        CLICK_DATA_API: "click" + An + ".data-api"
    }
      , kn = "dropdown-menu"
      , Pn = "active"
      , Ln = "disabled"
      , jn = "fade"
      , Hn = "show"
      , Rn = ".dropdown"
      , xn = ".nav, .list-group"
      , Fn = ".active"
      , Un = "> li > .active"
      , Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , qn = ".dropdown-toggle"
      , Mn = "> .dropdown-menu .active"
      , Kn = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                }
                var s = g.Event(On.HIDE, {
                    relatedTarget: this._element
                })
                  , a = g.Event(On.SHOW, {
                    relatedTarget: i
                });
                if (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = g.Event(On.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = g.Event(On.SHOWN, {
                            relatedTarget: i
                        });
                        g(i).trigger(t),
                        g(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, wn),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0]
              , r = n && o && g(o).hasClass(jn)
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = _.getTransitionDurationFromElement(o);
                g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                g(e).removeClass(Pn);
                var i = g(e.parentNode).find(Mn)[0];
                i && g(i).removeClass(Pn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (g(t).addClass(Pn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn)) {
                var o = g(t).closest(Rn)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(qn));
                    g(r).addClass(Pn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(wn);
                if (e || (e = new i(this),
                t.data(wn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
        t.preventDefault(),
        Kn._jQueryInterface.call(g(this), "show")
    }),
    g.fn.tab = Kn._jQueryInterface,
    g.fn.tab.Constructor = Kn,
    g.fn.tab.noConflict = function() {
        return g.fn.tab = Nn,
        Kn._jQueryInterface
    }
    ;
    var Qn = "toast"
      , Bn = "bs.toast"
      , Vn = "." + Bn
      , Yn = g.fn[Qn]
      , zn = {
        CLICK_DISMISS: "click.dismiss" + Vn,
        HIDE: "hide" + Vn,
        HIDDEN: "hidden" + Vn,
        SHOW: "show" + Vn,
        SHOWN: "shown" + Vn
    }
      , Xn = "fade"
      , $n = "hide"
      , Gn = "show"
      , Jn = "showing"
      , Zn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ti = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , ei = '[data-dismiss="toast"]'
      , ni = function() {
        function i(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this;
            g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn);
            var e = function() {
                t._element.classList.remove(Jn),
                t._element.classList.add(Gn),
                g(t._element).trigger(zn.SHOWN),
                t._config.autohide && t.hide()
            };
            if (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        t.hide = function(t) {
            var e = this;
            this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE),
            t ? this._close() : this._timeout = setTimeout(function() {
                e._close()
            }, this._config.delay))
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
        }
        ,
        t._setListeners = function() {
            var t = this;
            g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                return t.hide(!0)
            })
        }
        ,
        t._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add($n),
                g(t._element).trigger(zn.HIDDEN)
            };
            if (this._element.classList.remove(Gn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(Bn);
                if (e || (e = new i(this,"object" == typeof n && n),
                t.data(Bn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zn
            }
        }, {
            key: "Default",
            get: function() {
                return ti
            }
        }]),
        i
    }();
    g.fn[Qn] = ni._jQueryInterface,
    g.fn[Qn].Constructor = ni,
    g.fn[Qn].noConflict = function() {
        return g.fn[Qn] = Yn,
        ni._jQueryInterface
    }
    ,
    function() {
        if ("undefined" == typeof g)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    t.Util = _,
    t.Alert = p,
    t.Button = P,
    t.Carousel = lt,
    t.Collapse = bt,
    t.Dropdown = Jt,
    t.Modal = ve,
    t.Popover = sn,
    t.Scrollspy = Dn,
    t.Tab = Kn,
    t.Toast = ni,
    t.Tooltip = Be,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.min.js.map

// Jquery Easing
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
}
)(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow
      , sqrt = Math.sqrt
      , sin = Math.sin
      , cos = Math.cos
      , PI = Math.PI
      , c1 = 1.70158
      , c2 = c1 * 1.525
      , c3 = c1 + 1
      , c4 = 2 * PI / 3
      , c5 = 2 * PI / 4.5;
    function bounceOut(x) {
        var n1 = 7.5625
          , d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function(x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function(x) {
            return x * x
        },
        easeOutQuad: function(x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function(x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function(x) {
            return x * x * x
        },
        easeOutCubic: function(x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function(x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function(x) {
            return x * x * x * x
        },
        easeOutQuart: function(x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function(x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function(x) {
            return x * x * x * x * x
        },
        easeOutQuint: function(x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function(x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function(x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function(x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function(x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function(x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function(x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function(x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function(x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function(x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function(x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function(x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
});

// IMPORTANT!
// If you're already using Modernizr, delete it from this file. If you don't know what Modernizr is, leave it :)

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr = function(a, b, c) {
    function z(a) {
        j.cssText = a
    }
    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }
    function B(a, b) {
        return typeof a === b
    }
    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "),
        E(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
        return x.call(a, b)
    }
    : y = function(a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = u.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }
    ),
    q.csstransforms = function() {
        return !!F("transform")
    }
    ,
    q.csstransforms3d = function() {
        var a = !!F("perspective");
        return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    }
    ,
    q.csstransitions = function() {
        return F("transition")
    }
    ;
    for (var G in q)
        y(q, G) && (v = G.toLowerCase(),
        e[v] = q[G](),
        t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                y(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    z(""),
    i = k = null,
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.testProp = function(a) {
        return D([a])
    }
    ,
    e.testAllProps = F,
    e.testStyles = w,
    e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""),
    e
}(this, this.document);

/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e) {
    var t, n, i, o, r, a, s, l = "Close", c = "BeforeClose", d = "AfterClose", u = "BeforeAppend", p = "MarkupParse", f = "Open", m = "Change", g = "mfp", h = "." + g, v = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close", w = function() {}, b = !!window.jQuery, I = e(window), x = function(e, n) {
        t.ev.on(g + e + h, n)
    }, k = function(t, n, i, o) {
        var r = document.createElement("div");
        return r.className = "mfp-" + t,
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : (r = e(r),
        n && r.appendTo(n)),
        r
    }, T = function(n, i) {
        t.ev.triggerHandler(g + n, i),
        t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
    }, E = function(n) {
        return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        s = n),
        t.currTemplate.closeBtn
    }, _ = function() {
        e.magnificPopup.instance || (t = new w,
        t.init(),
        e.magnificPopup.instance = t)
    }, S = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."),
            t.isIE8 = -1 !== n.indexOf("MSIE 8."),
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = S(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            o = e(document),
            t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(),
                t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r],
                    s.parsed && (s = s.el[0]),
                    s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else
                t.items = e.isArray(n.items) ? n.items : [n.items],
                t.index = n.index || 0;
            if (t.isOpen)
                return t.updateItemHTML(),
                void 0;
            t.types = [],
            a = "",
            t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o,
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }),
            t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }),
            t.container = k("container", t.wrap)),
            t.contentContainer = k("content"),
            t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1),
                t["init" + d].call(t)
            }
            T("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }),
            a += " mfp-close-btn-in") : t.wrap.append(E())),
            t.st.alignTop && (a += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }),
            I.on("resize" + h, function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && t.wrap.addClass(a);
            var u = t.wH = I.height()
              , m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"),
            C && t._addClassToMFP(C),
            t.updateItemHTML(),
            T("BuildControls"),
            e("html").css(m),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(v),
                t._setFocus()) : t.bgOverlay.addClass(v),
                o.on("focusin" + h, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(u),
            T(f),
            n
        },
        close: function() {
            t.isOpen && (T(c),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C),
            setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (n += t.st.mainClass + " "),
            t._removeClassFromMFP(n),
            t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "",
                e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h),
            t.ev.off(h),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth
                  , i = window.innerHeight * n;
                t.wrap.css("height", i),
                t.wH = i
            } else
                t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
            t.currItem = n,
            !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o),
                t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i),
            n.preloaded = !0,
            T(m, n),
            r = n.type,
            t.container.prepend(t.contentContainer),
            T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "",
            T(u),
            t.container.addClass("mfp-" + n + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type,
            o = {
                data: o,
                src: o.src
            }),
            o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"),
                o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline",
            o.index = n,
            o.parsed = !0,
            t.items[n] = o,
            T("ElementParse", o),
            t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this,
                t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e,
            n.items ? (n.isObj = !0,
            e.off(o).on(o, i)) : (n.isObj = !1,
            n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e,
            e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (a > I.width())
                        return !0;
                n.type && (n.preventDefault(),
                t.isOpen && n.stopPropagation()),
                o.el = e(n.mfpEl),
                o.delegate && (o.items = i.find(o.delegate)),
                t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o),
                e = o.status,
                i = o.text,
                t.preloader.html(i),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick
                  , o = t.st.closeOnBgClick;
                if (i && o)
                    return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0])
                    return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i)
                        return !0
                } else if (o && e.contains(document, n))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(),
            !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)),
            T(p, [t, n, i]),
            e.each(n, function(e, n) {
                if (void 0 === n || n === !1)
                    return !0;
                if (o = e.split("_"),
                o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else
                    t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm",
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = n || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i,
                r.delegate && (o = o.find(r.delegate)),
                o = o.eq(a)),
                t._openClick({
                    mfpEl: o
                }, i, r)
            } else
                t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            n = e.extend(!0, {}, n),
            b ? i.data("magnificPopup", n) : i[0].magnificPopup = n,
            t.addGroup(i, n);
        return i
    }
    ;
    var P, O, z, M = "inline", B = function() {
        z && (O.after(z.addClass(P)).detach(),
        z = null)
    };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M),
                x(l + "." + M, function() {
                    B()
                })
            },
            getInline: function(n, i) {
                if (B(),
                n.src) {
                    var o = t.st.inline
                      , r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass,
                        O = k(P),
                        P = "mfp-" + P),
                        z = r.after(O).detach().removeClass(P)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", o.tNotFound),
                        r = e("<div>");
                    return n.inlineElement = r,
                    r
                }
                return t.updateStatus("ready"),
                t._parseMarkup(i, {}, n),
                i
            }
        }
    });
    var F, H = "ajax", L = function() {
        F && i.removeClass(F)
    }, A = function() {
        L(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded. Click here to download the video or click to share button to download it in the top right corner.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H),
                F = t.st.ajax.cursor,
                x(l + "." + H, A),
                x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F),
                t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a),
                        t.appendContent(e(a.data), H),
                        n.finished = !0,
                        L(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16),
                        t.updateStatus("ready"),
                        T("AjaxContentAdded")
                    },
                    error: function() {
                        L(),
                        n.finished = n.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o),
                ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title)
            return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i))
                return i.call(t, n);
            if (n.el)
                return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The content</a> could not be loaded. Click here to download the video or click to share button to download it in the top right corner.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image
                  , n = ".image";
                t.types.push("image"),
                x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }),
                x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor),
                    I.off("resize" + h)
                }),
                x("Resize" + n, t.resizeImage),
                t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                j && clearInterval(j),
                e.isCheckingImgSize = !1,
                T("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0
                  , i = e.img[0]
                  , o = function(r) {
                    j && clearInterval(j),
                    j = setInterval(function() {
                        return i.naturalWidth > 0 ? (t._onImageHasSize(e),
                        void 0) : (n > 200 && clearInterval(j),
                        n++,
                        3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500),
                        void 0)
                    }, r)
                };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0
                  , r = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("ready")),
                    n.hasSize = !0,
                    n.loaded = !0,
                    T("ImageLoadComplete")) : (o++,
                    200 > o ? setTimeout(r, 100) : a()))
                }
                  , a = function() {
                    n && (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("error", s.tError.replace("%url%", n.src))),
                    n.hasSize = !0,
                    n.loaded = !0,
                    n.loadError = !0)
                }
                  , s = t.st.image
                  , l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    n.img = e(c).on("load.mfploader", r).on("error.mfploader", a),
                    c.src = n.src,
                    l.is("img") && (n.img = n.img.clone()),
                    c = n.img[0],
                    c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n),
                t.resizeImage(),
                n.hasSize ? (j && clearInterval(j),
                n.loadError ? (i.addClass("mfp-loading"),
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                i) : (t.updateStatus("loading"),
                n.loading = !0,
                n.hasSize || (n.imgHidden = !0,
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
                i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform),
        W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration, s = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , i = "all " + n.duration / 1e3 + "s " + n.easing
                          , o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , r = "transition";
                        return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i,
                        t.css(o),
                        t
                    }, d = function() {
                        t.content.css("visibility", "visible")
                    };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return d(),
                                void 0;
                            r = s(e),
                            r.css(t._getOffset()),
                            t.wrap.append(r),
                            o = setTimeout(function() {
                                r.css(t._getOffset(!0)),
                                o = setTimeout(function() {
                                    d(),
                                    setTimeout(function() {
                                        r.remove(),
                                        e = r = null,
                                        T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }),
                    x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.st.removalDelay = a,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)),
                            t.wrap.append(r),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }),
                    x(l + i, function() {
                        t._allowZoom() && (d(),
                        r && r.remove(),
                        e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset()
                  , r = parseInt(i.css("padding-top"), 10)
                  , a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left,
                s.top = o.top),
                s
            }
        }
    });
    var Z = "iframe"
      , q = "//about:blank"
      , D = function(e) {
        if (t.currTemplate[Z]) {
            var n = t.currTemplate[Z].find("iframe");
            n.length && (e || (n[0].src = q),
            t.isIE8 && n.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z),
                x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }),
                x(l + "." + Z, function() {
                    D()
                })
            },
            getIframe: function(n, i) {
                var o = n.src
                  , r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                    o = this.src.replace("%id%", o),
                    !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o),
                t._parseMarkup(i, a, n),
                t.updateStatus("ready"),
                i
            }
        }
    });
    var K = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }
      , Y = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery
                  , i = ".mfp-gallery"
                  , r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0,
                n && n.enabled ? (a += " mfp-gallery",
                x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(),
                        !1) : void 0
                    }),
                    o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }),
                x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }),
                x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }),
                x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup
                          , o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y)
                          , a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y)
                          , s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }),
                        a[s](function() {
                            t.next()
                        }),
                        t.isIE7 && (k("b", o[0], !1, !0),
                        k("a", o[0], !1, !0),
                        k("b", a[0], !1, !0),
                        k("a", a[0], !1, !0)),
                        t.container.append(o.add(a))
                    }
                }),
                x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }, 16)
                }),
                x(l + i, function() {
                    o.off(i),
                    t.wrap.off("click" + i),
                    t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                    t.arrowRight = t.arrowLeft = null
                }),
                void 0) : !1
            },
            next: function() {
                t.direction = !0,
                t.index = K(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = K(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length);
                for (e = 1; (t.direction ? o : i) >= e; e++)
                    t._preloadItem(t.index + e);
                for (e = 1; (t.direction ? i : o) >= e; e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n),
                !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                    T("LazyLoad", i),
                    "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0,
                        i.loadError = !0,
                        T("LazyLoadError", i)
                    }).attr("src", i.src)),
                    i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , n = e.ratio;
                    n = isNaN(n) ? n() : n,
                    n > 1 && (x("ImageHasSize." + U, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }),
                    x("ElementParse." + U, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    function() {
        var t = 1e3
          , n = "ontouchstart"in window
          , i = function() {
            I.off("touchmove" + r + " touchend" + r)
        }
          , o = "mfpFastClick"
          , r = "." + o;
        e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
                var a, s = e(this);
                if (n) {
                    var l, c, d, u, p, f;
                    s.on("touchstart" + r, function(e) {
                        u = !1,
                        f = 1,
                        p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        c = p.clientX,
                        d = p.clientY,
                        I.on("touchmove" + r, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches,
                            f = p.length,
                            p = p[0],
                            (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0,
                            i())
                        }).on("touchend" + r, function(e) {
                            i(),
                            u || f > 1 || (a = !0,
                            e.preventDefault(),
                            clearTimeout(l),
                            l = setTimeout(function() {
                                a = !1
                            }, t),
                            o())
                        })
                    })
                }
                s.on("click" + r, function() {
                    a || o()
                })
            })
        }
        ,
        e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + r + " click" + r),
            n && I.off("touchmove" + r + " touchend" + r)
        }
    }(),
    _()
}
)(window.jQuery || window.Zepto);

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , J = "undefined" == typeof window ? {
        document: f,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function L(e, t) {
        var a = []
          , i = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"),
                    0 === n.indexOf("<tr") && (o = "tbody"),
                    0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"),
                    0 === n.indexOf("<tbody") && (o = "table"),
                    0 === n.indexOf("<option") && (o = "select"),
                    (r = f.createElement(o)).innerHTML = n,
                    i = 0; i < r.childNodes.length; i += 1)
                        a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])],
                    i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === J || e === f)
                a.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new l(a)
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype,
    L.Class = l,
    L.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length)
                    this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        this[i][s] = e[s],
                        this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                    a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e,
                a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e,
                a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
              , r = t[1]
              , n = t[2]
              , s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e),
                    L(t).is(r))
                        n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1)
                            L(i[s]).is(r) && n.apply(i[s], a)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0],
            n = e[1],
            s = e[2],
            r = void 0),
            s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
                        u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }),
                        u.addEventListener(h, o, s)
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                        u.dom7Listeners[v].push({
                            listener: n,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, s)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
              , s = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0],
            r = e[1],
            n = e[2],
            s = void 0),
            n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p]
                      , u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
                    u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n]
                      , l = void 0;
                    try {
                        l = new J.CustomEvent(r,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0),
                        l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                    o.dispatchEvent(l),
                    o.dom7EventData = [],
                    delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function r(e) {
                if (e.target === this)
                    for (t.call(this, e),
                    a = 0; a < i.length; a += 1)
                        s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1)
                    s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , a = f.body
                  , i = e.clientTop || a.clientTop || 0
                  , s = e.clientLeft || a.clientLeft || 0
                  , r = e === J ? J.scrollY : e.scrollTop
                  , n = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e)
                            this[a].style[i] = e[i];
                    return this
                }
                if (this[0])
                    return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (t = L(e),
                a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            if (e === f)
                return i === f;
            if (e === J)
                return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild; )
                            this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                        for (var n = 0; n < e.length; n += 1)
                            this[s].appendChild(e[n]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e,
                    a = i.childNodes.length - 1; 0 <= a; a -= 1)
                        this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                    for (a = 0; a < e.length; a += 1)
                        this[t].insertBefore(e[a], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i),
                a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i),
                a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e ? L(i).is(e) && t.push(i) : t.push(i),
                    i = i.parentNode;
            return L(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
                    t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
                    e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1)
                    this[this.length] = s[i],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e]
    });
    var e, a, i, s, ee = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, s, r = {}, n = e || J.location.href;
            if ("string" == typeof n && n.length)
                for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                t = 0; t < s; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                    r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s)
                    for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , d = Object.getOwnPropertyDescriptor(s, l);
                        void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {},
                        ee.extend(a[l], s[l])) : a[l] = s[l])
                    }
            }
            return a
        }
    }, te = (i = f.createElement("div"),
    {
        touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart"in J || J.DocumentTouch && f instanceof J.DocumentTouch),
        pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints"in J.navigator && 0 < J.navigator.maxTouchPoints),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition: (a = i.style,
        "transition"in a || "webkitTransition"in a || "MozTransition"in a),
        transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style,
        "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e),
        flexbox: function() {
            for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                if (t[a]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in J || "WebkitMutationObserver"in J,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                J.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in J
    }), I = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: (s = J.navigator.userAgent.toLowerCase(),
        0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    }, n = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, o = {
        components: {
            configurable: !0
        }
    };
    n.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t)
            return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][s](t)
        }),
        i
    }
    ,
    n.prototype.once = function(a, i, e) {
        var s = this;
        if ("function" != typeof i)
            return s;
        function r() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            i.apply(s, e),
            s.off(a, r),
            r.f7proxy && delete r.f7proxy
        }
        return r.f7proxy = i,
        s.on(a, r, e)
    }
    ,
    n.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
            })
        }),
        s
    }
    ,
    n.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0],
        i = e.slice(1, e.length),
        s = r) : (a = e[0].events,
        i = e[0].data,
        s = e[0].context || r),
        (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        })),
        r
    }
    ,
    n.prototype.useModulesParams = function(a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }
    ,
    n.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var a = s.modules[e]
              , t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function(e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }),
            a.on && s.on && Object.keys(a.on).forEach(function(e) {
                s.on(e, a.on[e])
            }),
            a.create && a.create.bind(s)(t)
        })
    }
    ,
    o.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    n.installModule = function(t) {
        for (var e = [], a = arguments.length - 1; 0 < a--; )
            e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }),
        t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }),
        t.install && t.install.apply(i, e),
        i
    }
    ,
    n.use = function(e) {
        for (var t = [], a = arguments.length - 1; 0 < a--; )
            t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }),
        i) : i.installModule.apply(i, [e].concat(t))
    }
    ,
    Object.defineProperties(n, o);
    var d = {
        updateSize: function() {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth,
            t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight,
            0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this
              , t = e.params
              , a = e.$wrapperEl
              , i = e.size
              , s = e.rtlTranslate
              , r = e.wrongRTL
              , n = e.virtual && t.virtual.enabled
              , o = n ? e.virtual.slides.length : e.slides.length
              , l = a.children("." + e.params.slideClass)
              , d = n ? e.virtual.slides.length : l.length
              , p = []
              , c = []
              , u = []
              , h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length
              , m = e.snapGrid.length
              , g = t.spaceBetween
              , b = -h
              , w = 0
              , y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i),
                e.virtualSize = -g,
                s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
                    T = 0;
                    var P = l.eq(z);
                    if (1 < t.slidesPerColumn) {
                        var k = void 0
                          , $ = void 0
                          , L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S,
                        (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0,
                        $ += 1),
                        k = $ + L * x / S,
                        P.css({
                            "-webkit-box-ordinal-group": k,
                            "-moz-box-ordinal-group": k,
                            "-ms-flex-order": k,
                            "-webkit-order": k,
                            order: k
                        })) : $ = z - (L = Math.floor(z / C)) * C,
                        P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null)
                              , D = P[0].style.transform
                              , O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"),
                            O && (P[0].style.webkitTransform = "none"),
                            t.roundLengths)
                                T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width"))
                                  , H = parseFloat(I.getPropertyValue("padding-left"))
                                  , N = parseFloat(I.getPropertyValue("padding-right"))
                                  , G = parseFloat(I.getPropertyValue("margin-left"))
                                  , B = parseFloat(I.getPropertyValue("margin-right"))
                                  , X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + H + N + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height"))
                                  , V = parseFloat(I.getPropertyValue("padding-top"))
                                  , F = parseFloat(I.getPropertyValue("padding-bottom"))
                                  , R = parseFloat(I.getPropertyValue("margin-top"))
                                  , q = parseFloat(I.getPropertyValue("margin-bottom"))
                                  , W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D),
                            O && (P[0].style.webkitTransform = O),
                            t.roundLengths && (T = Math.floor(T))
                        } else
                            T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                            t.roundLengths && (T = Math.floor(T)),
                            l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
                        l[z] && (l[z].swiperSlideSize = T),
                        u.push(T),
                        t.centeredSlides ? (b = b + T / 2 + w / 2 + g,
                        0 === w && 0 !== z && (b = b - i / 2 - g),
                        0 === z && (b = b - i / 2 - g),
                        Math.abs(b) < .001 && (b = 0),
                        t.roundLengths && (b = Math.floor(b)),
                        y % t.slidesPerGroup == 0 && p.push(b),
                        c.push(b)) : (t.roundLengths && (b = Math.floor(b)),
                        y % t.slidesPerGroup == 0 && p.push(b),
                        c.push(b),
                        b = b + T + g),
                        e.virtualSize += T + g,
                        w = T,
                        y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v,
                s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)),
                        p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)),
                        p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E,
                    1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                    marginLeft: g + "px"
                }) : l.css({
                    marginRight: g + "px"
                }) : l.css({
                    marginBottom: g + "px"
                })),
                t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function(e) {
                        Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }),
                    (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q
                        }),
                        c.forEach(function(e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                d !== o && e.emit("slidesLengthChange"),
                p.length !== f && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                c.length !== m && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed),
            "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length)
                        break;
                    i.push(a.slides.eq(r)[0])
                }
            else
                i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                }
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , a = t.params
              , i = t.slides
              , s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e),
                i.removeClass(a.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                      , l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset)
                          , p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(n),
                        i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , a = t.params
              , i = t.maxTranslate() - t.minTranslate()
              , s = t.progress
              , r = t.isBeginning
              , n = t.isEnd
              , o = r
              , l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0,
            n = 1 <= s),
            ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }),
            (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !l && t.emit("reachEnd toEdge"),
            (o && !r || l && !n) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1)
                    void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1),
            p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }),
                a.emit("activeIndexChange"),
                a.emit("snapIndexChange"),
                l !== u && a.emit("realIndexChange"),
                a.emit("slideChange")
            } else
                t !== d && (a.snapIndex = t,
                a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
              , a = t.params
              , i = L(e.target).closest("." + a.slideClass)[0]
              , s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1)
                    t.slides[r] === i && (s = !0);
            if (!i || !s)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = i,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(),
            a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , a = this.rtlTranslate
              , i = this.translate
              , s = this.$wrapperEl;
            if (t.virtualTranslate)
                return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var a = this
              , i = a.rtlTranslate
              , s = a.params
              , r = a.$wrapperEl
              , n = a.progress
              , o = 0
              , l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
            a.previousTranslate = a.translate,
            a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
            a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
              , i = a.activeIndex
              , s = a.params
              , r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
            a.emit("transitionStart"),
            e && i !== r) {
                if ("reset" === n)
                    return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
              , i = a.activeIndex
              , s = a.previousIndex;
            a.animating = !1,
            a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
            a.emit("transitionEnd"),
            e && i !== s) {
                if ("reset" === r)
                    return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var u = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this
              , r = e;
            r < 0 && (r = 0);
            var n = s.params
              , o = s.snapGrid
              , l = s.slidesGrid
              , d = s.previousIndex
              , p = s.activeIndex
              , c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition)
                return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1),
            (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v),
            n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
                    return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r)
                    return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset",
            c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            "reset" !== h && (s.transitionStart(a, h),
            s.transitionEnd(a, h)),
            !1) : (0 !== t && te.transition ? (s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a, h),
            s.animating || (s.animating = !0,
            s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                s.onSlideToWrapperTransitionEnd = null,
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(a, h))
            }
            ),
            s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
            s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a, h),
            s.transitionEnd(a, h)),
            !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides),
            this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating;
            return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating
              , n = i.snapGrid
              , o = i.slidesGrid
              , l = i.rtlTranslate;
            if (s.loop) {
                if (r)
                    return !1;
                i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate), u = n.map(function(e) {
                return d(e)
            }), h = (o.map(function(e) {
                return d(e)
            }),
            n[u.indexOf(c)],
            n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
            i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.activeIndex
              , r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate
                  , o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating)
                    return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this
              , e = i.params
              , t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
            i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
            i.loopedSlides += e.loopAdditionalSlides,
            i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = []
              , l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t),
                e < s.length && e >= s.length - i.loopedSlides && o.push(t),
                a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1)
                t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i,
            e += r,
            t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r,
            e += r,
            t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n,
            t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            a.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var m = {
        appendSlide: function(e) {
            var t = this
              , a = t.$wrapperEl
              , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && a.append(e[s]);
            else
                a.append(e);
            i.loop && t.loopCreate(),
            i.observer && te.observer || t.update()
        },
        prependSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    e[n] && i.prepend(e[n]);
                r = s + e.length
            } else
                i.prepend(e);
            a.loop && t.loopCreate(),
            a.observer && te.observer || t.update(),
            t.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            var a = this
              , i = a.$wrapperEl
              , s = a.params
              , r = a.activeIndex;
            s.loop && (r -= a.loopedSlides,
            a.loopDestroy(),
            a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0)
                a.prependSlide(t);
            else if (n <= e)
                a.appendSlide(t);
            else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(),
                    l.unshift(p)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var c = 0; c < t.length; c += 1)
                        t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else
                    i.append(t);
                for (var u = 0; u < l.length; u += 1)
                    i.append(l[u]);
                s.loop && a.loopCreate(),
                s.observer && te.observer || a.update(),
                s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && (s -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    r = e[o],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < n && (n -= 1);
                n = Math.max(n, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1),
                n = Math.max(n, 0);
            a.loop && t.loopCreate(),
            a.observer && te.observer || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , g = function() {
        var e = J.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: J.cordova || J.phonegap,
            phonegap: J.cordova || J.phonegap
        }
          , a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , s = e.match(/(iPad).*OS\s([\d_]+)/)
          , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows",
        t.osVersion = a[2],
        t.windows = !0),
        i && !a && (t.os = "android",
        t.osVersion = i[2],
        t.android = !0,
        t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")),
        (s || n || r) && (t.os = "ios",
        t.ios = !0),
        n && !r && (t.osVersion = n[2].replace(/_/g, "."),
        t.iphone = !0),
        s && (t.osVersion = s[2].replace(/_/g, "."),
        t.ipad = !0),
        r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var o = t.osVersion.split(".")
              , l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = J.devicePixelRatio || 1,
        t
    }();
    function b() {
        var e = this
          , t = e.params
          , a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext
              , s = e.allowSlidePrev
              , r = e.snapGrid;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s,
            e.allowSlideNext = i,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , y = {
        update: d,
        translate: p,
        transition: c,
        slide: u,
        loop: h,
        grabCursor: v,
        manipulation: m,
        events: {
            attachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl;
                e.onTouchStart = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches;
                    if (!t.animating || !i.preventInteractionOnTransition) {
                        var r = e;
                        if (r.originalEvent && (r = r.originalEvent),
                        a.isTouchEvent = "touchstart" === r.type,
                        (a.isTouchEvent || !("which"in r) || 3 !== r.which) && !(!a.isTouchEvent && "button"in r && 0 < r.button || a.isTouched && a.isMoved))
                            if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0])
                                t.allowClick = !0;
                            else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                var n = s.currentX
                                  , o = s.currentY
                                  , l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                                  , d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(n <= d || n >= J.screen.width - d)) {
                                    if (ee.extend(a, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }),
                                    s.startX = n,
                                    s.startY = o,
                                    a.touchStartTime = ee.now(),
                                    t.allowClick = !0,
                                    t.updateSize(),
                                    t.swipeDirection = void 0,
                                    0 < i.threshold && (a.allowThresholdMove = !1),
                                    "touchstart" !== r.type) {
                                        var p = !0;
                                        L(r.target).is(a.formElements) && (p = !1),
                                        f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && r.preventDefault()
                                    }
                                    t.emit("touchStart", r)
                                }
                            }
                    }
                }
                .bind(e),
                e.onTouchMove = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches
                      , r = t.rtlTranslate
                      , n = e;
                    if (n.originalEvent && (n = n.originalEvent),
                    a.isTouched) {
                        if (!a.isTouchEvent || "mousemove" !== n.type) {
                            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX
                              , l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                            if (n.preventedByNestedSwiper)
                                return s.startX = o,
                                void (s.startY = l);
                            if (!t.allowTouchMove)
                                return t.allowClick = !1,
                                void (a.isTouched && (ee.extend(s, {
                                    startX: o,
                                    startY: l,
                                    currentX: o,
                                    currentY: l
                                }),
                                a.touchStartTime = ee.now()));
                            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate())
                                        return a.isTouched = !1,
                                        void (a.isMoved = !1)
                                } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate())
                                    return;
                            if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements))
                                return a.isMoved = !0,
                                void (t.allowClick = !1);
                            if (a.allowTouchCallbacks && t.emit("touchMove", n),
                            !(n.targetTouches && 1 < n.targetTouches.length)) {
                                s.currentX = o,
                                s.currentY = l;
                                var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
                                if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                    if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI,
                                    a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)),
                                    a.isScrolling && t.emit("touchMoveOpposite", n),
                                    void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)),
                                    a.isScrolling)
                                        a.isTouched = !1;
                                    else if (a.startMoving) {
                                        t.allowClick = !1,
                                        n.preventDefault(),
                                        i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                        a.isMoved || (i.loop && t.loopFix(),
                                        a.startTranslate = t.getTranslate(),
                                        t.setTransition(0),
                                        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        a.allowMomentumBounce = !1,
                                        !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                        t.emit("sliderFirstMove", n)),
                                        t.emit("sliderMove", n),
                                        a.isMoved = !0;
                                        var u = t.isHorizontal() ? p : c;
                                        s.diff = u,
                                        u *= i.touchRatio,
                                        r && (u = -u),
                                        t.swipeDirection = 0 < u ? "prev" : "next",
                                        a.currentTranslate = u + a.startTranslate;
                                        var h = !0
                                          , v = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (v = 0),
                                        0 < u && a.currentTranslate > t.minTranslate() ? (h = !1,
                                        i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1,
                                        i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))),
                                        h && (n.preventedByNestedSwiper = !0),
                                        !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        0 < i.threshold) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove))
                                                return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove)
                                                return a.allowThresholdMove = !0,
                                                s.startX = s.currentX,
                                                s.startY = s.currentY,
                                                a.currentTranslate = a.startTranslate,
                                                void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                                        t.updateSlidesClasses()),
                                        i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                            position: s[t.isHorizontal() ? "startX" : "startY"],
                                            time: a.touchStartTime
                                        }),
                                        a.velocities.push({
                                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                            time: ee.now()
                                        })),
                                        t.updateProgress(a.currentTranslate),
                                        t.setTranslate(a.currentTranslate))
                                    }
                            }
                        }
                    } else
                        a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
                }
                .bind(e),
                e.onTouchEnd = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches
                      , r = t.rtlTranslate
                      , n = t.$wrapperEl
                      , o = t.slidesGrid
                      , l = t.snapGrid
                      , d = e;
                    if (d.originalEvent && (d = d.originalEvent),
                    a.allowTouchCallbacks && t.emit("touchEnd", d),
                    a.allowTouchCallbacks = !1,
                    !a.isTouched)
                        return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p, c = ee.now(), u = c - a.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(d),
                    t.emit("tap", d),
                    u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout),
                    a.clickTimeout = ee.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)),
                    u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                    t.emit("doubleTap", d))),
                    a.lastClickTime = ee.now(),
                    ee.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }),
                    !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                        return a.isTouched = !1,
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    if (a.isTouched = !1,
                    a.isMoved = !1,
                    a.startMoving = !1,
                    p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
                    i.freeMode) {
                        if (p < -t.minTranslate())
                            return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate())
                            return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (1 < a.velocities.length) {
                                var h = a.velocities.pop()
                                  , v = a.velocities.pop()
                                  , f = h.position - v.position
                                  , m = h.time - v.time;
                                t.velocity = f / m,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= i.freeModeMomentumVelocityRatio,
                            a.velocities.length = 0;
                            var g = 1e3 * i.freeModeMomentumRatio
                              , b = t.velocity * g
                              , w = t.translate + b;
                            r && (w = -w);
                            var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (w < t.maxTranslate())
                                i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E),
                                y = t.maxTranslate(),
                                T = !0,
                                a.allowMomentumBounce = !0) : w = t.maxTranslate(),
                                i.loop && i.centeredSlides && (x = !0);
                            else if (w > t.minTranslate())
                                i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E),
                                y = t.minTranslate(),
                                T = !0,
                                a.allowMomentumBounce = !0) : w = t.minTranslate(),
                                i.loop && i.centeredSlides && (x = !0);
                            else if (i.freeModeSticky) {
                                for (var S, C = 0; C < l.length; C += 1)
                                    if (l[C] > -w) {
                                        S = C;
                                        break
                                    }
                                w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                            }
                            if (x && t.once("transitionEnd", function() {
                                t.loopFix()
                            }),
                            0 !== t.velocity)
                                g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                            else if (i.freeModeSticky)
                                return void t.slideToClosest();
                            i.freeModeMomentumBounce && T ? (t.updateProgress(y),
                            t.setTransition(g),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                t.setTranslate(y),
                                n.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(w),
                            t.setTransition(g),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(w),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else if (i.freeModeSticky)
                            return void t.slideToClosest();
                        (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    } else {
                        for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                            void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P,
                            z = o[o.length - 1] - o[o.length - 2]);
                        var k = (p - o[M]) / z;
                        if (u > i.longSwipesMs) {
                            if (!i.longSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                            "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                        } else {
                            if (!i.shortSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
                            "prev" === t.swipeDirection && t.slideTo(M)
                        }
                    }
                }
                .bind(e),
                e.onClick = function(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                .bind(e);
                var r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                    if (te.touch) {
                        var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(a.start, e.onTouchStart, o),
                        r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                            passive: !1,
                            capture: n
                        } : n),
                        r.addEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                    f.addEventListener("mousemove", e.onTouchMove, n),
                    f.addEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.addEventListener(a.start, e.onTouchStart, !1),
                    f.addEventListener(a.move, e.onTouchMove, n),
                    f.addEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
            },
            detachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl
                  , r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                    if (te.touch) {
                        var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(a.start, e.onTouchStart, o),
                        r.removeEventListener(a.move, e.onTouchMove, n),
                        r.removeEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                    f.removeEventListener("mousemove", e.onTouchMove, n),
                    f.removeEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.removeEventListener(a.start, e.onTouchStart, !1),
                    f.removeEventListener(a.move, e.onTouchMove, n),
                    f.removeEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                  , t = e.activeIndex
                  , a = e.initialized
                  , i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || e.originalParams
                          , d = l.direction && l.direction !== s.direction
                          , p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                        d && a && e.changeDirection(),
                        ee.extend(e.params, l),
                        ee.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        e.currentBreakpoint = n,
                        p && a && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - i + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }),
                    a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                  , a = this.params
                  , e = this.rtl
                  , i = this.$el
                  , s = [];
                s.push("initialized"),
                s.push(a.direction),
                a.freeMode && s.push("free-mode"),
                te.flexbox || s.push("no-flexbox"),
                a.autoHeight && s.push("autoheight"),
                e && s.push("rtl"),
                1 < a.slidesPerColumn && s.push("multirow"),
                g.android && s.push("android"),
                g.ios && s.push("ios"),
                (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction),
                s.forEach(function(e) {
                    t.push(a.containerModifierClass + e)
                }),
                i.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, r) {
                var n;
                function o() {
                    r && r()
                }
                e.complete && s ? o() : t ? ((n = new J.Image).onload = o,
                n.onerror = o,
                i && (n.sizes = i),
                a && (n.srcset = a),
                t && (n.src = t)) : o()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , x = {}
      , T = function(u) {
        function h() {
            for (var e, t, s, a = [], i = arguments.length; i--; )
                a[i] = arguments[i];
            1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0],
            s = e[1]),
            s || (s = {}),
            s = ee.extend({}, s),
            t && !s.el && (s.el = t),
            u.call(this, s),
            Object.keys(y).forEach(function(t) {
                Object.keys(y[t]).forEach(function(e) {
                    h.prototype[e] || (h.prototype[e] = y[t][e])
                })
            });
            var r = this;
            void 0 === r.modules && (r.modules = {}),
            Object.keys(r.modules).forEach(function(e) {
                var t = r.modules[e];
                if (t.params) {
                    var a = Object.keys(t.params)[0]
                      , i = t.params[a];
                    if ("object" != typeof i || null === i)
                        return;
                    if (!(a in s && "enabled"in i))
                        return;
                    !0 === s[a] && (s[a] = {
                        enabled: !0
                    }),
                    "object" != typeof s[a] || "enabled"in s[a] || (s[a].enabled = !0),
                    s[a] || (s[a] = {
                        enabled: !1
                    })
                }
            });
            var n = ee.extend({}, w);
            r.useModulesParams(n),
            r.params = ee.extend({}, n, x, s),
            r.originalParams = ee.extend({}, r.params),
            r.passedParams = ee.extend({}, s);
            var o = (r.$ = L)(r.params.el);
            if (t = o[0]) {
                if (1 < o.length) {
                    var l = [];
                    return o.each(function(e, t) {
                        var a = ee.extend({}, s, {
                            el: t
                        });
                        l.push(new h(a))
                    }),
                    l
                }
                t.swiper = r,
                o.data("swiper", r);
                var d, p, c = o.children("." + r.params.wrapperClass);
                return ee.extend(r, {
                    $el: o,
                    el: t,
                    $wrapperEl: c,
                    wrapperEl: c[0],
                    classNames: [],
                    slides: L(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === r.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === r.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === c.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (d = ["touchstart", "touchmove", "touchend"],
                    p = ["mousedown", "mousemove", "mouseup"],
                    te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    r.touchEventsTouch = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    },
                    r.touchEventsDesktop = {
                        start: p[0],
                        move: p[1],
                        end: p[2]
                    },
                    te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: ee.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                r.useModules(),
                r.params.init && r.init(),
                r
            }
        }
        u && (h.__proto__ = u);
        var e = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
            var e = this
              , t = e.params
              , a = e.slides
              , i = e.slidesGrid
              , s = e.size
              , r = e.activeIndex
              , n = 1;
            if (t.centeredSlides) {
                for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                    a[d] && !o && (n += 1,
                    s < (l += a[d].swiperSlideSize) && (o = !0));
                for (var p = r - 1; 0 <= p; p -= 1)
                    a[p] && !o && (n += 1,
                    s < (l += a[p].swiperSlideSize) && (o = !0))
            } else
                for (var c = r + 1; c < a.length; c += 1)
                    i[c] - i[r] < s && (n += 1);
            return n
        }
        ,
        h.prototype.update = function() {
            var a = this;
            if (a && !a.destroyed) {
                var e = a.snapGrid
                  , t = a.params;
                t.breakpoints && a.setBreakpoint(),
                a.updateSize(),
                a.updateSlides(),
                a.updateProgress(),
                a.updateSlidesClasses(),
                a.params.freeMode ? (i(),
                a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
                t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
                a.emit("update")
            }
            function i() {
                var e = a.rtlTranslate ? -1 * a.translate : a.translate
                  , t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                a.setTranslate(t),
                a.updateActiveIndex(),
                a.updateSlidesClasses()
            }
        }
        ,
        h.prototype.changeDirection = function(a, e) {
            void 0 === e && (e = !0);
            var t = this
              , i = t.params.direction;
            return a || (a = "horizontal" === i ? "vertical" : "horizontal"),
            a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a),
            (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
            "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a),
            (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
            t.params.direction = a,
            t.slides.each(function(e, t) {
                "vertical" === a ? t.style.width = "" : t.style.height = ""
            }),
            t.emit("changeDirection"),
            e && t.update()),
            t
        }
        ,
        h.prototype.init = function() {
            var e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        ,
        h.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var a = this
              , i = a.params
              , s = a.$el
              , r = a.$wrapperEl
              , n = a.slides;
            return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"),
            a.initialized = !1,
            a.detachEvents(),
            i.loop && a.loopDestroy(),
            t && (a.removeClasses(),
            s.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            a.emit("destroy"),
            Object.keys(a.eventsListeners).forEach(function(e) {
                a.off(e)
            }),
            !1 !== e && (a.$el[0].swiper = null,
            a.$el.data("swiper", null),
            ee.deleteProps(a)),
            a.destroyed = !0),
            null
        }
        ,
        h.extendDefaults = function(e) {
            ee.extend(x, e)
        }
        ,
        e.extendedDefaults.get = function() {
            return x
        }
        ,
        e.defaults.get = function() {
            return w
        }
        ,
        e.Class.get = function() {
            return u
        }
        ,
        e.$.get = function() {
            return L
        }
        ,
        Object.defineProperties(h, e),
        h
    }(n)
      , E = {
        name: "device",
        proto: {
            device: g
        },
        static: {
            device: g
        }
    }
      , S = {
        name: "support",
        proto: {
            support: te
        },
        static: {
            support: te
        }
    }
      , C = {
        name: "browser",
        proto: {
            browser: I
        },
        static: {
            browser: I
        }
    }
      , M = {
        name: "resize",
        create: function() {
            var e = this;
            ee.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                J.addEventListener("resize", this.resize.resizeHandler),
                J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                J.removeEventListener("resize", this.resize.resizeHandler),
                J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , z = {
        func: J.MutationObserver || J.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
              , i = new z.func(function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        a.emit("observerUpdate", e[0])
                    };
                    J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                } else
                    a.emit("observerUpdate", e[0])
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            a.observer.observers.push(i)
        },
        init: function() {
            var e = this;
            if (te.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , P = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            ee.extend(this, {
                observer: {
                    init: z.init.bind(this),
                    attach: z.attach.bind(this),
                    destroy: z.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , k = {
        update: function(e) {
            var t = this
              , a = t.params
              , i = a.slidesPerView
              , s = a.slidesPerGroup
              , r = a.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , l = n.addSlidesAfter
              , d = t.virtual
              , p = d.from
              , c = d.to
              , u = d.slides
              , h = d.slidesGrid
              , v = d.renderSlide
              , f = d.offset;
            t.updateActiveIndex();
            var m, g, b, w = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (g = Math.floor(i / 2) + s + o,
            b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o,
            b = s + l);
            var y = Math.max((w || 0) - b, 0)
              , x = Math.min((w || 0) + g, u.length - 1)
              , T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
            function E() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (ee.extend(t.virtual, {
                from: y,
                to: x,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === y && c === x && !e)
                return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void E();
            var S = []
              , C = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var M = p; M <= c; M += 1)
                    (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z),
                z < p && S.push(z)));
            C.forEach(function(e) {
                t.$wrapperEl.append(v(u[e], e))
            }),
            S.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(v(u[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
            E()
        },
        renderSlide: function(e, t) {
            var a = this
              , i = a.params.virtual;
            if (i.cache && a.virtual.cache[t])
                return a.virtual.cache[t];
            var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (a.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this
              , a = t.activeIndex
              , i = a + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && t.virtual.slides.unshift(e[r]);
                i = a + e.length,
                s = e.length
            } else
                t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                var n = t.virtual.cache
                  , o = {};
                Object.keys(n).forEach(function(e) {
                    o[parseInt(e, 10) + s] = n[e]
                }),
                t.virtual.cache = o
            }
            t.virtual.update(!0),
            t.slideTo(i, 0)
        },
        removeSlide: function(e) {
            var t = this;
            if (null != e) {
                var a = t.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; 0 <= i; i -= 1)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < a && (a -= 1),
                        a = Math.max(a, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < a && (a -= 1),
                    a = Math.max(a, 0);
                t.virtual.update(!0),
                t.slideTo(a, 0)
            }
        },
        removeAllSlides: function() {
            var e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        }
    }
      , $ = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                virtual: {
                    update: k.update.bind(e),
                    appendSlide: k.appendSlide.bind(e),
                    prependSlide: k.prependSlide.bind(e),
                    removeSlide: k.removeSlide.bind(e),
                    removeAllSlides: k.removeAllSlides.bind(e),
                    renderSlide: k.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    ee.extend(e.params, t),
                    ee.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , D = {
        handle: function(e) {
            var t = this
              , a = t.rtlTranslate
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            var s = i.keyCode || i.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s))
                return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                    var r = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var n = J.innerWidth
                      , o = J.innerHeight
                      , l = t.$el.offset();
                    a && (l.left -= t.$el[0].scrollLeft);
                    for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                        var c = d[p];
                        0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                    }
                    if (!r)
                        return
                }
                t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                (39 === s && !a || 37 === s && a) && t.slideNext(),
                (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                40 === s && t.slideNext(),
                38 === s && t.slidePrev()),
                t.emit("keyPress", s)
            }
        },
        enable: function() {
            this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , O = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            ee.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: D.enable.bind(this),
                    disable: D.disable.bind(this),
                    handle: D.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var A = {
        lastScrollTime: ee.now(),
        event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var e = "onwheel"
              , t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"),
                t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , a = 0
              , i = 0
              , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
            a = 0),
            i = 10 * t,
            s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            (i || s) && e.delAnjode && (1 === e.delAnjode ? (i *= 40,
            s *= 40) : (i *= 800,
            s *= 800)),
            i && !t && (t = i < 1 ? -1 : 1),
            s && !a && (a = s < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , a = this
              , i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0
              , r = a.rtlTranslate ? -1 : 1
              , n = A.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                        return !0;
                    s = n.pixelX * r
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                        return !0;
                    s = n.pixelY
                }
            else
                s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s)
                return !0;
            if (i.invert && (s = -s),
            a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity
                  , l = a.isBeginning
                  , d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()),
                o <= a.maxTranslate() && (o = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(o),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                a.mousewheel.timeout = ee.nextTick(function() {
                    a.slideToClosest()
                }, 300)),
                a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                o === a.minTranslate() || o === a.maxTranslate())
                    return !0
            } else {
                if (60 < ee.now() - a.mousewheel.lastScrollTime)
                    if (s < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                            a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                        a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable: function() {
            var e = this;
            if (!A.event)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
            t.on("mouseenter", e.mousewheel.handleMouseEnter),
            t.on("mouseleave", e.mousewheel.handleMouseLeave),
            t.on(A.event, e.mousewheel.handle),
            e.mousewheel.enabled = !0
        },
        disable: function() {
            var e = this;
            if (!A.event)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
            t.off(A.event, e.mousewheel.handle),
            !(e.mousewheel.enabled = !1)
        }
    }
      , H = {
        update: function() {
            var e = this
              , t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation
                  , i = a.$nextEl
                  , s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl),
            a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
            i.prevEl && (t = L(i.prevEl),
            a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", a.navigation.onNextClick),
            t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
            ee.extend(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this
              , t = e.navigation
              , a = t.$nextEl
              , i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass))
        }
    }
      , N = {
        update: function() {
            var e = this
              , t = e.rtl
              , s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                    1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    o = r - e.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2),
                    p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"),
                    1 < i.length)
                        p.each(function(e, t) {
                            var a = L(t)
                              , i = a.index();
                            i === r && a.addClass(s.bulletActiveClass),
                            s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"),
                            i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                            i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                    else if (p.eq(r).addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                            p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                        u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4)
                          , f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                          , m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)),
                i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
                "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n
                      , w = 1
                      , y = 1;
                    "horizontal" === g ? w = b : y = b,
                    i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)),
                e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , i = e.pagination.$el
                  , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                    e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var a = this
              , e = a.params.pagination;
            if (e.el) {
                var t = L(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)),
                "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                t.addClass(e.modifierClass + e.type),
                "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
                a.pagination.dynamicBulletIndex = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                    e.preventDefault();
                    var t = L(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides),
                    a.slideTo(t)
                }),
                ee.extend(a.pagination, {
                    $el: t,
                    el: t[0]
                }))
            }
        },
        destroy: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass),
                a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }
      , G = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.rtlTranslate
                  , i = e.progress
                  , s = t.dragSize
                  , r = t.trackSize
                  , n = t.$dragEl
                  , o = t.$el
                  , l = e.params.scrollbar
                  , d = s
                  , p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p,
                p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p,
                p = 0) : r < p + s && (d = r - p),
                e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"),
                n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"),
                n[0].style.height = d + "px"),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                o[0].style.opacity = 1,
                e.scrollbar.timeout = setTimeout(function() {
                    o[0].style.opacity = 0,
                    o.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = t.$dragEl
                  , i = t.$el;
                a[0].style.width = "",
                a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px",
                i[0].style.display = 1 <= n ? "none" : "",
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                ee.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(l),
            a.setTranslate(l),
            a.updateActiveIndex(),
            a.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar
              , s = t.$wrapperEl
              , r = i.$el
              , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            n.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            a.hide && r.css("opacity", 1),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , a = this.$wrapperEl
              , i = t.$el
              , s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            a.transition(0),
            i.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = ee.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest())
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , s = e.params
                  , r = t.$el[0]
                  , n = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
                r.addEventListener(a.move, e.scrollbar.onDragMove, n),
                r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
                f.addEventListener(i.move, e.scrollbar.onDragMove, n),
                f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , s = e.params
                  , r = t.$el[0]
                  , n = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
                r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
                r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
                f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
                f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.$el
                  , i = e.params.scrollbar
                  , s = L(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'),
                s.append(r)),
                ee.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && t.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , B = {
        setTransform: function(e, t) {
            var a = this.rtl
              , i = L(e)
              , s = a ? -1 : 1
              , r = i.attr("data-swiper-parallax") || "0"
              , n = i.attr("data-swiper-parallax-x")
              , o = i.attr("data-swiper-parallax-y")
              , l = i.attr("data-swiper-parallax-scale")
              , d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0",
            o = o || "0") : this.isHorizontal() ? (n = r,
            o = "0") : (o = r,
            n = "0"),
            n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px",
            o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l)
                i.transform("translate3d(" + n + ", " + o + ", 0px)");
            else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var i = this
              , e = i.$el
              , t = i.slides
              , s = i.progress
              , r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                i.parallax.setTransform(t, s)
            }),
            t.each(function(e, t) {
                var a = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)),
                a = Math.min(Math.max(a, -1), 1),
                L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, a)
                })
            })
        },
        setTransition: function(s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                var a = L(t)
                  , i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0),
                a.transition(i)
            })
        }
    }
      , X = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , a = e.targetTouches[0].pageY
              , i = e.targetTouches[1].pageX
              , s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        },
        onGestureStart: function(e) {
            var t = this
              , a = t.params.zoom
              , i = t.zoom
              , s = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !te.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                s.scaleStart = X.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"),
            0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
            t.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , a = this.zoom
              , i = a.gesture;
            if (!te.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                a.fakeGestureMoved = !0,
                i.scaleMove = X.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale,
            a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)),
            a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)),
            i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , a = this.zoom
              , i = a.gesture;
            if (!te.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android)
                    return;
                a.fakeGestureTouched = !1,
                a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio),
            i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
            a.currentScale = a.scale,
            a.isScaling = !1,
            1 === a.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , a = t.gesture
              , i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(),
            i.isTouched = !0,
            i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this
              , a = t.zoom
              , i = a.gesture
              , s = a.image
              , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var n = s.width * a.scale
                  , o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = s.touchesCurrent.x,
                    r.prevPositionY = s.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , a = e.image
              , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                    void (a.isMoved = !1);
                a.isTouched = !1,
                a.isMoved = !1;
                var s = 300
                  , r = 300
                  , n = i.x * s
                  , o = a.currentX + n
                  , l = i.y * r
                  , d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o,
                a.currentY = d;
                var c = a.width * e.scale
                  , u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                a.maxX = -a.minX,
                a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
                a.maxY = -a.minY,
                a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex),
            y.$imageEl = y.$slideEl.find("img, svg, canvas"),
            y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass),
            void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
            a = x.touchesStart.y),
            b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            e ? (f = y.$slideEl[0].offsetWidth,
            m = y.$slideEl[0].offsetHeight,
            i = y.$slideEl.offset().left + f / 2 - t,
            s = y.$slideEl.offset().top + m / 2 - a,
            o = y.$imageEl[0].offsetWidth,
            l = y.$imageEl[0].offsetHeight,
            d = o * b.scale,
            p = l * b.scale,
            h = -(c = Math.min(f / 2 - d / 2, 0)),
            v = -(u = Math.min(m / 2 - p / 2, 0)),
            (r = i * b.scale) < c && (r = c),
            h < r && (r = h),
            (n = s * b.scale) < u && (n = u),
            v < n && (n = v)) : n = r = 0,
            y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        },
        out: function() {
            var e = this
              , t = e.zoom
              , a = e.params.zoom
              , i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this
              , t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function() {
            var e = this
              , t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }
      , Y = {
        loadInSlide: function(e, l) {
            void 0 === l && (l = !0);
            var d = this
              , p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)
                  , t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
                0 !== t.length && t.each(function(e, t) {
                    var i = L(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background")
                      , r = i.attr("data-src")
                      , n = i.attr("data-srcset")
                      , o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function() {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'),
                            i.removeAttr("data-background")) : (n && (i.attr("srcset", n),
                            i.removeAttr("data-srcset")),
                            o && (i.attr("sizes", o),
                            i.removeAttr("data-sizes")),
                            r && (i.attr("src", r),
                            i.removeAttr("data-src"))),
                            i.addClass(p.loadedClass).removeClass(p.loadingClass),
                            c.find("." + p.preloaderClass).remove(),
                            d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }),
                    d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        },
        load: function() {
            var i = this
              , t = i.$wrapperEl
              , a = i.params
              , s = i.slides
              , e = i.activeIndex
              , r = i.virtual && a.virtual.enabled
              , n = a.lazy
              , o = a.slidesPerView;
            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function d(e) {
                return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
            }
            if ("auto" === o && (o = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
            i.params.watchSlidesVisibility)
                t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
            else if (1 < o)
                for (var p = e; p < e + o; p += 1)
                    l(p) && i.lazy.loadInSlide(p);
            else
                i.lazy.loadInSlide(e);
            if (n.loadPrevNext)
                if (1 < o || n.loadPrevNexAnjount && 1 < n.loadPrevNexAnjount) {
                    for (var c = n.loadPrevNexAnjount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1)
                        l(f) && i.lazy.loadInSlide(f);
                    for (var m = v; m < e; m += 1)
                        l(m) && i.lazy.loadInSlide(m)
                } else {
                    var g = t.children("." + a.slideNextClass);
                    0 < g.length && i.lazy.loadInSlide(d(g));
                    var b = t.children("." + a.slidePrevClass);
                    0 < b.length && i.lazy.loadInSlide(d(b))
                }
        }
    }
      , V = {
        LinearSpline: function(e, t) {
            var a, i, s, r, n, o = function(e, t) {
                for (i = -1,
                a = e.length; 1 < a - i; )
                    e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid,e.slidesGrid) : new V.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var a, i, s = this, r = s.controller.control;
            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                i = -s.controller.spline.interpolate(-t)),
                i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                i = (t - s.minTranslate()) * a + e.minTranslate()),
                s.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof T && n(r[o]);
            else
                r instanceof T && t !== r && n(r)
        },
        setTransition: function(t, e) {
            var a, i = this, s = i.controller.control;
            function r(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && ee.nextTick(function() {
                    e.updateAutoHeight()
                }),
                e.$wrapperEl.transitionEnd(function() {
                    s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(s))
                for (a = 0; a < s.length; a += 1)
                    s[a] !== e && s[a]instanceof T && r(s[a]);
            else
                s instanceof T && e !== s && r(s)
        }
    }
      , F = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this
              , a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = L(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
                t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation
                  , a = t.$nextEl
                  , i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        },
        updatePagination: function() {
            var i = this
              , s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                var a = L(t);
                i.a11y.makeElFocusable(a),
                i.a11y.addElRole(a, "button"),
                i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }
      , R = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!J.history || !J.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                t.paths = R.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = R.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t)
                  , i = R.slugify(a.attr("data-history"));
                J.location.pathname.includes(e) || (i = e + "/" + i);
                var s = J.history.state;
                s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
                    value: i
                }, null, i) : J.history.pushState({
                    value: i
                }, null, i))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s);
                    if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                        var o = n.index();
                        i.slideTo(o, e, a)
                    }
                }
            else
                i.slideTo(0, e, a)
        }
    }
      , q = {
        onHashCange: function() {
            var e = this
              , t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a)
                    return;
                e.slideTo(a)
            }
        },
        setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState)
                    J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    var t = e.slides.eq(e.activeIndex)
                      , a = t.attr("data-hash") || t.attr("data-history");
                    f.location.hash = a || ""
                }
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t)
                    for (var a = 0, i = e.slides.length; a < i; a += 1) {
                        var s = e.slides.eq(a);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            var r = s.index();
                            e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                        }
                    }
                e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , W = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            e.autoplay.timeout = ee.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    }
      , j = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                  , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s,
                s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var a = this
              , t = a.slides
              , i = a.$wrapperEl;
            if (t.transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function() {
                    if (!s && a && !a.destroyed) {
                        s = !0,
                        a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            i.trigger(e[t])
                    }
                })
            }
        }
    }
      , U = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
            a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h)
                  , f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                p || (y = w,
                w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b,
                o && (u = 90 * -f - 90 * b)),
                v.transform(T),
                d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'),
                    v.append(E)),
                    0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    E.length && (E[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (p)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , z = d.shadowScale
                      , P = d.shadowScale / M
                      , k = d.shadowOffset;
                    e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                }
            var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , K = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i)
                  , r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l,
                o = -n,
                n = l = 0),
                s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(p)),
                    0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(c)),
                    p.length && (p[0].style.opacity = Math.max(-r, 0)),
                    c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var a = this
              , t = a.slides
              , i = a.activeIndex
              , s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function() {
                    if (!r && a && !a.destroyed) {
                        r = !0,
                        a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            s.trigger(e[t])
                    }
                })
            }
        }
    }
      , _ = {
        setTranslate: function() {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u)
                  , f = r[u]
                  , m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier
                  , g = o ? p * m : 0
                  , b = o ? 0 : p * m
                  , w = -c * Math.abs(m)
                  , y = o ? 0 : n.stretch * m
                  , x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T),
                v[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    v.append(E)),
                    0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    E.length && (E[0].style.opacity = 0 < m ? m : 0),
                    S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , Z = {
        init: function() {
            var e = this
              , t = e.params.thumbs
              , a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper,
            ee.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            ee.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this
              , t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex
                  , i = t.clickedSlide;
                if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a,
                    e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                        e._clientLeft = e.$wrapperEl[0].clientLeft,
                        r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    e.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this
              , a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(),
                        a._clientLeft = a.$wrapperEl[0].clientLeft,
                        r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                          , o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                    } else
                        s = t.realIndex;
                    a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1),
                    a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1
                  , d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView),
                a.slides.removeClass(d),
                a.params.loop)
                    for (var p = 0; p < l; p += 1)
                        a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                else
                    for (var c = 0; c < l; c += 1)
                        a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }
      , Q = [E, S, C, M, P, $, O, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: A.enable.bind(e),
                    disable: A.disable.bind(e),
                    handle: A.handle.bind(e),
                    handleMouseEnter: A.handleMouseEnter.bind(e),
                    handleMouseLeave: A.handleMouseLeave.bind(e),
                    lastScrollTime: ee.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                navigation: {
                    init: H.init.bind(e),
                    update: H.update.bind(e),
                    destroy: H.destroy.bind(e),
                    onNextClick: H.onNextClick.bind(e),
                    onPrevClick: H.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, a = this, i = a.navigation, s = i.$nextEl, r = i.$prevEl;
                !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
                !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a),
                s && s.toggleClass(a.params.navigation.hiddenClass),
                r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                pagination: {
                    init: N.init.bind(e),
                    render: N.render.bind(e),
                    update: N.update.bind(e),
                    destroy: N.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                scrollbar: {
                    init: G.init.bind(e),
                    destroy: G.destroy.bind(e),
                    updateSize: G.updateSize.bind(e),
                    setTranslate: G.setTranslate.bind(e),
                    setTransition: G.setTransition.bind(e),
                    enableDraggable: G.enableDraggable.bind(e),
                    disableDraggable: G.disableDraggable.bind(e),
                    setDragPosition: G.setDragPosition.bind(e),
                    onDragStart: G.onDragStart.bind(e),
                    onDragMove: G.onDragMove.bind(e),
                    onDragEnd: G.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            ee.extend(this, {
                parallax: {
                    setTransform: B.setTransform.bind(this),
                    setTranslate: B.setTranslate.bind(this),
                    setTransition: B.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var i = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                t[e] = X[e].bind(i)
            }),
            ee.extend(i, {
                zoom: t
            });
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function() {
                    return s
                },
                set: function(e) {
                    if (s !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0
                          , a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, a)
                    }
                    s = e
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNexAnjount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            ee.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Y.load.bind(this),
                    loadInSlide: Y.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: V.getInterpolateFunction.bind(e),
                    setTranslate: V.setTranslate.bind(e),
                    setTransition: V.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                a11y: {
                    liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(F).forEach(function(e) {
                t.a11y[e] = F[e].bind(t)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                history: {
                    init: R.init.bind(e),
                    setHistory: R.setHistory.bind(e),
                    setHistoryPopState: R.setHistoryPopState.bind(e),
                    scrollToSlide: R.scrollToSlide.bind(e),
                    destroy: R.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    setHash: q.setHash.bind(e),
                    onHashCange: q.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: W.run.bind(t),
                    start: W.start.bind(t),
                    stop: W.stop.bind(t),
                    pause: W.pause.bind(t),
                    onTransitionEnd: function(e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                        t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            ee.extend(this, {
                fadeEffect: {
                    setTranslate: j.setTranslate.bind(this),
                    setTransition: j.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                    ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            ee.extend(this, {
                cubeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                    ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            ee.extend(this, {
                flipEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                    ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            ee.extend(this, {
                coverflowEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            ee.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Z.init.bind(this),
                    update: Z.update.bind(this),
                    onThumbClick: Z.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === T.use && (T.use = T.Class.use,
    T.installModule = T.Class.installModule),
    T.use(Q),
    T
});
//# sourceMappingURL=swiper.min.js.map


(function($) {
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function() {
        windowHeight = $window.height();
    });

    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it
        $this.each(function() {
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            }
            ;
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            }
            ;
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null)
            xpos = "50%";
        if (arguments.length < 2 || speedFactor === null)
            speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null)
            outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = $window.scrollTop();

            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        $window.bind('scroll', update).resize(update);
        update();
    }
    ;
}
)(jQuery);


!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});
