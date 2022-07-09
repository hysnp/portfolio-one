const Gi = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
};
Gi();
function Ir(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const el =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  tl = Ir(el);
function Cs(e) {
  return !!e || e === "";
}
function $r(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = ve(r) ? ol(r) : $r(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (ve(e)) return e;
    if (we(e)) return e;
  }
}
const nl = /;(?![^(]*\))/g,
  rl = /:(.+)/;
function ol(e) {
  const t = {};
  return (
    e.split(nl).forEach((n) => {
      if (n) {
        const r = n.split(rl);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function Fr(e) {
  let t = "";
  if (ve(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = Fr(e[n]);
      r && (t += r + " ");
    }
  else if (we(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const sl = (e) =>
    ve(e)
      ? e
      : e == null
      ? ""
      : K(e) || (we(e) && (e.toString === Os || !W(e.toString)))
      ? JSON.stringify(e, As, 2)
      : String(e),
  As = (e, t) =>
    t && t.__v_isRef
      ? As(e, t.value)
      : Ot(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : Ss(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : we(t) && !K(t) && !Rs(t)
      ? String(t)
      : t,
  ue = {},
  Pt = [],
  ze = () => {},
  il = () => !1,
  ll = /^on[^a-z]/,
  Fn = (e) => ll.test(e),
  Lr = (e) => e.startsWith("onUpdate:"),
  xe = Object.assign,
  Nr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  cl = Object.prototype.hasOwnProperty,
  J = (e, t) => cl.call(e, t),
  K = Array.isArray,
  Ot = (e) => Ln(e) === "[object Map]",
  Ss = (e) => Ln(e) === "[object Set]",
  W = (e) => typeof e == "function",
  ve = (e) => typeof e == "string",
  jr = (e) => typeof e == "symbol",
  we = (e) => e !== null && typeof e == "object",
  Ps = (e) => we(e) && W(e.then) && W(e.catch),
  Os = Object.prototype.toString,
  Ln = (e) => Os.call(e),
  al = (e) => Ln(e).slice(8, -1),
  Rs = (e) => Ln(e) === "[object Object]",
  zr = (e) =>
    ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bn = Ir(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Nn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ul = /-(\w)/g,
  Ve = Nn((e) => e.replace(ul, (t, n) => (n ? n.toUpperCase() : ""))),
  fl = /\B([A-Z])/g,
  Nt = Nn((e) => e.replace(fl, "-$1").toLowerCase()),
  jn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Qn = Nn((e) => (e ? `on${jn(e)}` : "")),
  tn = (e, t) => !Object.is(e, t),
  Zn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Tn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ms = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let bo;
const dl = () =>
  bo ||
  (bo =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let Ke;
class Is {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ke &&
        ((this.parent = Ke),
        (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Ke;
      try {
        return (Ke = this), t();
      } finally {
        Ke = n;
      }
    }
  }
  on() {
    Ke = this;
  }
  off() {
    Ke = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.active = !1;
    }
  }
}
function $s(e) {
  return new Is(e);
}
function hl(e, t = Ke) {
  t && t.active && t.effects.push(e);
}
const Dr = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Fs = (e) => (e.w & ut) > 0,
  Ls = (e) => (e.n & ut) > 0,
  pl = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ut;
  },
  gl = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        Fs(o) && !Ls(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~ut),
          (o.n &= ~ut);
      }
      t.length = n;
    }
  },
  ar = new WeakMap();
let qt = 0,
  ut = 1;
const ur = 30;
let $e;
const vt = Symbol(""),
  fr = Symbol("");
class Br {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      hl(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = $e,
      n = ct;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = $e),
        ($e = this),
        (ct = !0),
        (ut = 1 << ++qt),
        qt <= ur ? pl(this) : vo(this),
        this.fn()
      );
    } finally {
      qt <= ur && gl(this),
        (ut = 1 << --qt),
        ($e = this.parent),
        (ct = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    $e === this
      ? (this.deferStop = !0)
      : this.active &&
        (vo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function vo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ct = !0;
const Ns = [];
function jt() {
  Ns.push(ct), (ct = !1);
}
function zt() {
  const e = Ns.pop();
  ct = e === void 0 ? !0 : e;
}
function Se(e, t, n) {
  if (ct && $e) {
    let r = ar.get(e);
    r || ar.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Dr())), js(o);
  }
}
function js(e, t) {
  let n = !1;
  qt <= ur ? Ls(e) || ((e.n |= ut), (n = !Fs(e))) : (n = !e.has($e)),
    n && (e.add($e), $e.deps.push(e));
}
function Ze(e, t, n, r, o, s) {
  const i = ar.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && K(e))
    i.forEach((c, u) => {
      (u === "length" || u >= r) && l.push(c);
    });
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        K(e)
          ? zr(n) && l.push(i.get("length"))
          : (l.push(i.get(vt)), Ot(e) && l.push(i.get(fr)));
        break;
      case "delete":
        K(e) || (l.push(i.get(vt)), Ot(e) && l.push(i.get(fr)));
        break;
      case "set":
        Ot(e) && l.push(i.get(vt));
        break;
    }
  if (l.length === 1) l[0] && dr(l[0]);
  else {
    const c = [];
    for (const u of l) u && c.push(...u);
    dr(Dr(c));
  }
}
function dr(e, t) {
  const n = K(e) ? e : [...e];
  for (const r of n) r.computed && yo(r);
  for (const r of n) r.computed || yo(r);
}
function yo(e, t) {
  (e !== $e || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ml = Ir("__proto__,__v_isRef,__isVue"),
  zs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(jr)
  ),
  wl = Hr(),
  bl = Hr(!1, !0),
  vl = Hr(!0),
  xo = yl();
function yl() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = G(this);
        for (let s = 0, i = this.length; s < i; s++) Se(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(G)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        jt();
        const r = G(this)[t].apply(this, n);
        return zt(), r;
      };
    }),
    e
  );
}
function Hr(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && s === (e ? (t ? Ll : Ks) : t ? Us : Hs).get(r))
      return r;
    const i = K(r);
    if (!e && i && J(xo, o)) return Reflect.get(xo, o, s);
    const l = Reflect.get(r, o, s);
    return (jr(o) ? zs.has(o) : ml(o)) || (e || Se(r, "get", o), t)
      ? l
      : pe(l)
      ? i && zr(o)
        ? l
        : l.value
      : we(l)
      ? e
        ? qs(l)
        : Dt(l)
      : l;
  };
}
const xl = Ds(),
  _l = Ds(!0);
function Ds(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (nn(i) && pe(i) && !pe(o)) return !1;
    if (
      !e &&
      !nn(o) &&
      (hr(o) || ((o = G(o)), (i = G(i))), !K(n) && pe(i) && !pe(o))
    )
      return (i.value = o), !0;
    const l = K(n) && zr(r) ? Number(r) < n.length : J(n, r),
      c = Reflect.set(n, r, o, s);
    return (
      n === G(s) && (l ? tn(o, i) && Ze(n, "set", r, o) : Ze(n, "add", r, o)), c
    );
  };
}
function El(e, t) {
  const n = J(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Ze(e, "delete", t, void 0), r;
}
function kl(e, t) {
  const n = Reflect.has(e, t);
  return (!jr(t) || !zs.has(t)) && Se(e, "has", t), n;
}
function Tl(e) {
  return Se(e, "iterate", K(e) ? "length" : vt), Reflect.ownKeys(e);
}
const Bs = { get: wl, set: xl, deleteProperty: El, has: kl, ownKeys: Tl },
  Cl = {
    get: vl,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Al = xe({}, Bs, { get: bl, set: _l }),
  Ur = (e) => e,
  zn = (e) => Reflect.getPrototypeOf(e);
function dn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = G(e),
    s = G(t);
  n || (t !== s && Se(o, "get", t), Se(o, "get", s));
  const { has: i } = zn(o),
    l = r ? Ur : n ? Vr : rn;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, s)) return l(e.get(s));
  e !== o && e.get(t);
}
function hn(e, t = !1) {
  const n = this.__v_raw,
    r = G(n),
    o = G(e);
  return (
    t || (e !== o && Se(r, "has", e), Se(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function pn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Se(G(e), "iterate", vt), Reflect.get(e, "size", e)
  );
}
function _o(e) {
  e = G(e);
  const t = G(this);
  return zn(t).has.call(t, e) || (t.add(e), Ze(t, "add", e, e)), this;
}
function Eo(e, t) {
  t = G(t);
  const n = G(this),
    { has: r, get: o } = zn(n);
  let s = r.call(n, e);
  s || ((e = G(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), s ? tn(t, i) && Ze(n, "set", e, t) : Ze(n, "add", e, t), this
  );
}
function ko(e) {
  const t = G(this),
    { has: n, get: r } = zn(t);
  let o = n.call(t, e);
  o || ((e = G(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && Ze(t, "delete", e, void 0), s;
}
function To() {
  const e = G(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ze(e, "clear", void 0, void 0), n;
}
function gn(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      l = G(i),
      c = t ? Ur : e ? Vr : rn;
    return (
      !e && Se(l, "iterate", vt), i.forEach((u, f) => r.call(o, c(u), c(f), s))
    );
  };
}
function mn(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = G(o),
      i = Ot(s),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      u = o[e](...r),
      f = n ? Ur : t ? Vr : rn;
    return (
      !t && Se(s, "iterate", c ? fr : vt),
      {
        next() {
          const { value: d, done: h } = u.next();
          return h
            ? { value: d, done: h }
            : { value: l ? [f(d[0]), f(d[1])] : f(d), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function et(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Sl() {
  const e = {
      get(s) {
        return dn(this, s);
      },
      get size() {
        return pn(this);
      },
      has: hn,
      add: _o,
      set: Eo,
      delete: ko,
      clear: To,
      forEach: gn(!1, !1),
    },
    t = {
      get(s) {
        return dn(this, s, !1, !0);
      },
      get size() {
        return pn(this);
      },
      has: hn,
      add: _o,
      set: Eo,
      delete: ko,
      clear: To,
      forEach: gn(!1, !0),
    },
    n = {
      get(s) {
        return dn(this, s, !0);
      },
      get size() {
        return pn(this, !0);
      },
      has(s) {
        return hn.call(this, s, !0);
      },
      add: et("add"),
      set: et("set"),
      delete: et("delete"),
      clear: et("clear"),
      forEach: gn(!0, !1),
    },
    r = {
      get(s) {
        return dn(this, s, !0, !0);
      },
      get size() {
        return pn(this, !0);
      },
      has(s) {
        return hn.call(this, s, !0);
      },
      add: et("add"),
      set: et("set"),
      delete: et("delete"),
      clear: et("clear"),
      forEach: gn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = mn(s, !1, !1)),
        (n[s] = mn(s, !0, !1)),
        (t[s] = mn(s, !1, !0)),
        (r[s] = mn(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Pl, Ol, Rl, Ml] = Sl();
function Kr(e, t) {
  const n = t ? (e ? Ml : Rl) : e ? Ol : Pl;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(J(n, o) && o in r ? n : r, o, s);
}
const Il = { get: Kr(!1, !1) },
  $l = { get: Kr(!1, !0) },
  Fl = { get: Kr(!0, !1) },
  Hs = new WeakMap(),
  Us = new WeakMap(),
  Ks = new WeakMap(),
  Ll = new WeakMap();
function Nl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nl(al(e));
}
function Dt(e) {
  return nn(e) ? e : qr(e, !1, Bs, Il, Hs);
}
function zl(e) {
  return qr(e, !1, Al, $l, Us);
}
function qs(e) {
  return qr(e, !0, Cl, Fl, Ks);
}
function qr(e, t, n, r, o) {
  if (!we(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = jl(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function Je(e) {
  return nn(e) ? Je(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nn(e) {
  return !!(e && e.__v_isReadonly);
}
function hr(e) {
  return !!(e && e.__v_isShallow);
}
function Vs(e) {
  return Je(e) || nn(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Rt(e) {
  return Tn(e, "__v_skip", !0), e;
}
const rn = (e) => (we(e) ? Dt(e) : e),
  Vr = (e) => (we(e) ? qs(e) : e);
function Ws(e) {
  ct && $e && ((e = G(e)), js(e.dep || (e.dep = Dr())));
}
function Ys(e, t) {
  (e = G(e)), e.dep && dr(e.dep);
}
function pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Wr(e) {
  return Xs(e, !1);
}
function Dl(e) {
  return Xs(e, !0);
}
function Xs(e, t) {
  return pe(e) ? e : new Bl(e, t);
}
class Bl {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : G(t)),
      (this._value = n ? t : rn(t));
  }
  get value() {
    return Ws(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : G(t)),
      tn(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : rn(t)),
        Ys(this));
  }
}
function ge(e) {
  return pe(e) ? e.value : e;
}
const Hl = {
  get: (e, t, n) => ge(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return pe(o) && !pe(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Js(e) {
  return Je(e) ? e : new Proxy(e, Hl);
}
function Ul(e) {
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Qs(e, n);
  return t;
}
class Kl {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Qs(e, t, n) {
  const r = e[t];
  return pe(r) ? r : new Kl(e, t, n);
}
class ql {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Br(t, () => {
        this._dirty || ((this._dirty = !0), Ys(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = G(this);
    return (
      Ws(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Vl(e, t, n = !1) {
  let r, o;
  const s = W(e);
  return (
    s ? ((r = e), (o = ze)) : ((r = e.get), (o = e.set)),
    new ql(r, o, s || !o, n)
  );
}
function at(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Dn(s, t, n);
  }
  return o;
}
function Re(e, t, n, r) {
  if (W(e)) {
    const s = at(e, t, n, r);
    return (
      s &&
        Ps(s) &&
        s.catch((i) => {
          Dn(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(Re(e[s], t, n, r));
  return o;
}
function Dn(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      l = n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, l) === !1) return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      at(c, null, 10, [e, i, l]);
      return;
    }
  }
  Wl(e, n, o, r);
}
function Wl(e, t, n, r = !0) {
  console.error(e);
}
let Cn = !1,
  pr = !1;
const Ae = [];
let Xe = 0;
const Yt = [];
let Vt = null,
  Tt = 0;
const Xt = [];
let st = null,
  Ct = 0;
const Zs = Promise.resolve();
let Yr = null,
  gr = null;
function Xr(e) {
  const t = Yr || Zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yl(e) {
  let t = Xe + 1,
    n = Ae.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    on(Ae[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Gs(e) {
  (!Ae.length || !Ae.includes(e, Cn && e.allowRecurse ? Xe + 1 : Xe)) &&
    e !== gr &&
    (e.id == null ? Ae.push(e) : Ae.splice(Yl(e.id), 0, e), ei());
}
function ei() {
  !Cn && !pr && ((pr = !0), (Yr = Zs.then(ri)));
}
function Xl(e) {
  const t = Ae.indexOf(e);
  t > Xe && Ae.splice(t, 1);
}
function ti(e, t, n, r) {
  K(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    ei();
}
function Jl(e) {
  ti(e, Vt, Yt, Tt);
}
function Ql(e) {
  ti(e, st, Xt, Ct);
}
function Bn(e, t = null) {
  if (Yt.length) {
    for (
      gr = t, Vt = [...new Set(Yt)], Yt.length = 0, Tt = 0;
      Tt < Vt.length;
      Tt++
    )
      Vt[Tt]();
    (Vt = null), (Tt = 0), (gr = null), Bn(e, t);
  }
}
function ni(e) {
  if ((Bn(), Xt.length)) {
    const t = [...new Set(Xt)];
    if (((Xt.length = 0), st)) {
      st.push(...t);
      return;
    }
    for (st = t, st.sort((n, r) => on(n) - on(r)), Ct = 0; Ct < st.length; Ct++)
      st[Ct]();
    (st = null), (Ct = 0);
  }
}
const on = (e) => (e.id == null ? 1 / 0 : e.id);
function ri(e) {
  (pr = !1), (Cn = !0), Bn(e), Ae.sort((n, r) => on(n) - on(r));
  const t = ze;
  try {
    for (Xe = 0; Xe < Ae.length; Xe++) {
      const n = Ae[Xe];
      n && n.active !== !1 && at(n, null, 14);
    }
  } finally {
    (Xe = 0),
      (Ae.length = 0),
      ni(),
      (Cn = !1),
      (Yr = null),
      (Ae.length || Yt.length || Xt.length) && ri(e);
  }
}
function Zl(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ue;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: d, trim: h } = r[f] || ue;
    h && (o = n.map((m) => m.trim())), d && (o = n.map(Ms));
  }
  let l,
    c = r[(l = Qn(t))] || r[(l = Qn(Ve(t)))];
  !c && s && (c = r[(l = Qn(Nt(t)))]), c && Re(c, e, 6, o);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Re(u, e, 6, o);
  }
}
function oi(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    l = !1;
  if (!W(e)) {
    const c = (u) => {
      const f = oi(u, t, !0);
      f && ((l = !0), xe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !s && !l
    ? (r.set(e, null), null)
    : (K(s) ? s.forEach((c) => (i[c] = null)) : xe(i, s), r.set(e, i), i);
}
function Hn(e, t) {
  return !e || !Fn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, Nt(t)) || J(e, t));
}
let Le = null,
  si = null;
function An(e) {
  const t = Le;
  return (Le = e), (si = (e && e.type.__scopeId) || null), t;
}
function Jr(e, t = Le, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && No(-1);
    const s = An(t),
      i = e(...o);
    return An(s), r._d && No(1), i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Gn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: u,
    render: f,
    renderCache: d,
    data: h,
    setupState: m,
    ctx: y,
    inheritAttrs: C,
  } = e;
  let _, E;
  const S = An(e);
  try {
    if (n.shapeFlag & 4) {
      const N = o || r;
      (_ = qe(f.call(N, N, d, s, m, h, y))), (E = c);
    } else {
      const N = t;
      (_ = qe(
        N.length > 1 ? N(s, { attrs: c, slots: l, emit: u }) : N(s, null)
      )),
        (E = t.props ? c : Gl(c));
    }
  } catch (N) {
    (Qt.length = 0), Dn(N, e, 1), (_ = ce(De));
  }
  let F = _;
  if (E && C !== !1) {
    const N = Object.keys(E),
      { shapeFlag: B } = F;
    N.length && B & 7 && (i && N.some(Lr) && (E = ec(E, i)), (F = ft(F, E)));
  }
  return (
    n.dirs && ((F = ft(F)), (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (F.transition = n.transition),
    (_ = F),
    An(S),
    _
  );
}
const Gl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Fn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ec = (e, t) => {
    const n = {};
    for (const r in e) (!Lr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function tc(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: l, patchFlag: c } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Co(r, i, u) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        const h = f[d];
        if (i[h] !== r[h] && !Hn(u, h)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Co(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Co(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Hn(n, s)) return !0;
  }
  return !1;
}
function nc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const rc = (e) => e.__isSuspense;
function oc(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ql(e);
}
function vn(e, t) {
  if (be) {
    let n = be.provides;
    const r = be.parent && be.parent.provides;
    r === n && (n = be.provides = Object.create(r)), (n[e] = t);
  }
}
function Qe(e, t, n = !1) {
  const r = be || Le;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && W(t) ? t.call(r.proxy) : t;
  }
}
const Ao = {};
function Jt(e, t, n) {
  return ii(e, t, n);
}
function ii(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = ue
) {
  const l = be;
  let c,
    u = !1,
    f = !1;
  if (
    (pe(e)
      ? ((c = () => e.value), (u = hr(e)))
      : Je(e)
      ? ((c = () => e), (r = !0))
      : K(e)
      ? ((f = !0),
        (u = e.some((E) => Je(E) || hr(E))),
        (c = () =>
          e.map((E) => {
            if (pe(E)) return E.value;
            if (Je(E)) return St(E);
            if (W(E)) return at(E, l, 2);
          })))
      : W(e)
      ? t
        ? (c = () => at(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return d && d(), Re(e, l, 3, [h]);
          })
      : (c = ze),
    t && r)
  ) {
    const E = c;
    c = () => St(E());
  }
  let d,
    h = (E) => {
      d = _.onStop = () => {
        at(E, l, 4);
      };
    };
  if (ln)
    return (h = ze), t ? n && Re(t, l, 3, [c(), f ? [] : void 0, h]) : c(), ze;
  let m = f ? [] : Ao;
  const y = () => {
    if (_.active)
      if (t) {
        const E = _.run();
        (r || u || (f ? E.some((S, F) => tn(S, m[F])) : tn(E, m))) &&
          (d && d(), Re(t, l, 3, [E, m === Ao ? void 0 : m, h]), (m = E));
      } else _.run();
  };
  y.allowRecurse = !!t;
  let C;
  o === "sync"
    ? (C = y)
    : o === "post"
    ? (C = () => Ee(y, l && l.suspense))
    : (C = () => Jl(y));
  const _ = new Br(c, C);
  return (
    t
      ? n
        ? y()
        : (m = _.run())
      : o === "post"
      ? Ee(_.run.bind(_), l && l.suspense)
      : _.run(),
    () => {
      _.stop(), l && l.scope && Nr(l.scope.effects, _);
    }
  );
}
function sc(e, t, n) {
  const r = this.proxy,
    o = ve(e) ? (e.includes(".") ? li(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  W(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = be;
  It(this);
  const l = ii(o, s.bind(r), n);
  return i ? It(i) : yt(), l;
}
function li(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function St(e, t) {
  if (!we(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), pe(e))) St(e.value, t);
  else if (K(e)) for (let n = 0; n < e.length; n++) St(e[n], t);
  else if (Ss(e) || Ot(e))
    e.forEach((n) => {
      St(n, t);
    });
  else if (Rs(e)) for (const n in e) St(e[n], t);
  return e;
}
function ic() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    qn(() => {
      e.isMounted = !0;
    }),
    hi(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  lc = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(e, { slots: t }) {
      const n = no(),
        r = ic();
      let o;
      return () => {
        const s = t.default && ui(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const C of s)
            if (C.type !== De) {
              i = C;
              break;
            }
        }
        const l = G(e),
          { mode: c } = l;
        if (r.isLeaving) return er(i);
        const u = So(i);
        if (!u) return er(i);
        const f = mr(u, l, r, n);
        wr(u, f);
        const d = n.subTree,
          h = d && So(d);
        let m = !1;
        const { getTransitionKey: y } = u.type;
        if (y) {
          const C = y();
          o === void 0 ? (o = C) : C !== o && ((o = C), (m = !0));
        }
        if (h && h.type !== De && (!wt(u, h) || m)) {
          const C = mr(h, l, r, n);
          if ((wr(h, C), c === "out-in"))
            return (
              (r.isLeaving = !0),
              (C.afterLeave = () => {
                (r.isLeaving = !1), n.update();
              }),
              er(i)
            );
          c === "in-out" &&
            u.type !== De &&
            (C.delayLeave = (_, E, S) => {
              const F = ai(r, h);
              (F[String(h.key)] = h),
                (_._leaveCb = () => {
                  E(), (_._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = S);
            });
        }
        return i;
      };
    },
  },
  ci = lc;
function ai(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function mr(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: y,
      onBeforeAppear: C,
      onAppear: _,
      onAfterAppear: E,
      onAppearCancelled: S,
    } = t,
    F = String(e.key),
    N = ai(n, e),
    B = (k, U) => {
      k && Re(k, r, 9, U);
    },
    H = (k, U) => {
      const Y = U[1];
      B(k, U),
        K(k) ? k.every((ee) => ee.length <= 1) && Y() : k.length <= 1 && Y();
    },
    L = {
      mode: s,
      persisted: i,
      beforeEnter(k) {
        let U = l;
        if (!n.isMounted)
          if (o) U = C || l;
          else return;
        k._leaveCb && k._leaveCb(!0);
        const Y = N[F];
        Y && wt(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), B(U, [k]);
      },
      enter(k) {
        let U = c,
          Y = u,
          ee = f;
        if (!n.isMounted)
          if (o) (U = _ || c), (Y = E || u), (ee = S || f);
          else return;
        let M = !1;
        const te = (k._enterCb = (fe) => {
          M ||
            ((M = !0),
            fe ? B(ee, [k]) : B(Y, [k]),
            L.delayedLeave && L.delayedLeave(),
            (k._enterCb = void 0));
        });
        U ? H(U, [k, te]) : te();
      },
      leave(k, U) {
        const Y = String(e.key);
        if ((k._enterCb && k._enterCb(!0), n.isUnmounting)) return U();
        B(d, [k]);
        let ee = !1;
        const M = (k._leaveCb = (te) => {
          ee ||
            ((ee = !0),
            U(),
            te ? B(y, [k]) : B(m, [k]),
            (k._leaveCb = void 0),
            N[Y] === e && delete N[Y]);
        });
        (N[Y] = e), h ? H(h, [k, M]) : M();
      },
      clone(k) {
        return mr(k, t, n, r);
      },
    };
  return L;
}
function er(e) {
  if (Un(e)) return (e = ft(e)), (e.children = null), e;
}
function So(e) {
  return Un(e) ? (e.children ? e.children[0] : void 0) : e;
}
function wr(e, t) {
  e.shapeFlag & 6 && e.component
    ? wr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function ui(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ie
      ? (i.patchFlag & 128 && o++, (r = r.concat(ui(i.children, t, l))))
      : (t || i.type !== De) && r.push(l != null ? ft(i, { key: l }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function fi(e) {
  return W(e) ? { setup: e, name: e.name } : e;
}
const yn = (e) => !!e.type.__asyncLoader,
  Un = (e) => e.type.__isKeepAlive;
function cc(e, t) {
  di(e, "a", t);
}
function ac(e, t) {
  di(e, "da", t);
}
function di(e, t, n = be) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Kn(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Un(o.parent.vnode) && uc(r, t, n, o), (o = o.parent);
  }
}
function uc(e, t, n, r) {
  const o = Kn(t, e, r, !0);
  Qr(() => {
    Nr(r[t], o);
  }, n);
}
function Kn(e, t, n = be, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          jt(), It(n);
          const l = Re(t, n, e, i);
          return yt(), zt(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Ge =
    (e) =>
    (t, n = be) =>
      (!ln || e === "sp") && Kn(e, t, n),
  fc = Ge("bm"),
  qn = Ge("m"),
  dc = Ge("bu"),
  hc = Ge("u"),
  hi = Ge("bum"),
  Qr = Ge("um"),
  pc = Ge("sp"),
  gc = Ge("rtg"),
  mc = Ge("rtc");
function wc(e, t = be) {
  Kn("ec", e, t);
}
function dt(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let c = l.dir[r];
    c && (jt(), Re(c, n, 8, [e.el, l, e, t]), zt());
  }
}
const pi = "components";
function Po(e, t) {
  return vc(pi, e, !0, t) || e;
}
const bc = Symbol();
function vc(e, t, n = !0, r = !1) {
  const o = Le || be;
  if (o) {
    const s = o.type;
    if (e === pi) {
      const l = Xc(s, !1);
      if (l && (l === t || l === Ve(t) || l === jn(Ve(t)))) return s;
    }
    const i = Oo(o[e] || s[e], t) || Oo(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function Oo(e, t) {
  return e && (e[t] || e[Ve(t)] || e[jn(Ve(t))]);
}
function yc(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (K(e) || ve(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (we(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
const br = (e) => (e ? (Ci(e) ? ro(e) || e.proxy : br(e.parent)) : null),
  Sn = xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => br(e.parent),
    $root: (e) => br(e.root),
    $emit: (e) => e.emit,
    $options: (e) => mi(e),
    $forceUpdate: (e) => e.f || (e.f = () => Gs(e.update)),
    $nextTick: (e) => e.n || (e.n = Xr.bind(e.proxy)),
    $watch: (e) => sc.bind(e),
  }),
  xc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (r !== ue && J(r, t)) return (i[t] = 1), r[t];
          if (o !== ue && J(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && J(u, t)) return (i[t] = 3), s[t];
          if (n !== ue && J(n, t)) return (i[t] = 4), n[t];
          vr && (i[t] = 0);
        }
      }
      const f = Sn[t];
      let d, h;
      if (f) return t === "$attrs" && Se(e, "get", t), f(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== ue && J(n, t)) return (i[t] = 4), n[t];
      if (((h = c.config.globalProperties), J(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return o !== ue && J(o, t)
        ? ((o[t] = n), !0)
        : r !== ue && J(r, t)
        ? ((r[t] = n), !0)
        : J(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ue && J(e, i)) ||
        (t !== ue && J(t, i)) ||
        ((l = s[0]) && J(l, i)) ||
        J(r, i) ||
        J(Sn, i) ||
        J(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : J(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let vr = !0;
function _c(e) {
  const t = mi(e),
    n = e.proxy,
    r = e.ctx;
  (vr = !1), t.beforeCreate && Ro(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    created: f,
    beforeMount: d,
    mounted: h,
    beforeUpdate: m,
    updated: y,
    activated: C,
    deactivated: _,
    beforeDestroy: E,
    beforeUnmount: S,
    destroyed: F,
    unmounted: N,
    render: B,
    renderTracked: H,
    renderTriggered: L,
    errorCaptured: k,
    serverPrefetch: U,
    expose: Y,
    inheritAttrs: ee,
    components: M,
    directives: te,
    filters: fe,
  } = t;
  if ((u && Ec(u, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ne in i) {
      const Q = i[ne];
      W(Q) && (r[ne] = Q.bind(n));
    }
  if (o) {
    const ne = o.call(n, n);
    we(ne) && (e.data = Dt(ne));
  }
  if (((vr = !0), s))
    for (const ne in s) {
      const Q = s[ne],
        Te = W(Q) ? Q.bind(n, n) : W(Q.get) ? Q.get.bind(n, n) : ze,
        xt = !W(Q) && W(Q.set) ? Q.set.bind(n) : ze,
        We = Fe({ get: Te, set: xt });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Be) => (We.value = Be),
      });
    }
  if (l) for (const ne in l) gi(l[ne], r, n, ne);
  if (c) {
    const ne = W(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((Q) => {
      vn(Q, ne[Q]);
    });
  }
  f && Ro(f, e, "c");
  function de(ne, Q) {
    K(Q) ? Q.forEach((Te) => ne(Te.bind(n))) : Q && ne(Q.bind(n));
  }
  if (
    (de(fc, d),
    de(qn, h),
    de(dc, m),
    de(hc, y),
    de(cc, C),
    de(ac, _),
    de(wc, k),
    de(mc, H),
    de(gc, L),
    de(hi, S),
    de(Qr, N),
    de(pc, U),
    K(Y))
  )
    if (Y.length) {
      const ne = e.exposed || (e.exposed = {});
      Y.forEach((Q) => {
        Object.defineProperty(ne, Q, {
          get: () => n[Q],
          set: (Te) => (n[Q] = Te),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === ze && (e.render = B),
    ee != null && (e.inheritAttrs = ee),
    M && (e.components = M),
    te && (e.directives = te);
}
function Ec(e, t, n = ze, r = !1) {
  K(e) && (e = yr(e));
  for (const o in e) {
    const s = e[o];
    let i;
    we(s)
      ? "default" in s
        ? (i = Qe(s.from || o, s.default, !0))
        : (i = Qe(s.from || o))
      : (i = Qe(s)),
      pe(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[o] = i);
  }
}
function Ro(e, t, n) {
  Re(K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function gi(e, t, n, r) {
  const o = r.includes(".") ? li(n, r) : () => n[r];
  if (ve(e)) {
    const s = t[e];
    W(s) && Jt(o, s);
  } else if (W(e)) Jt(o, e.bind(n));
  else if (we(e))
    if (K(e)) e.forEach((s) => gi(s, t, n, r));
    else {
      const s = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(s) && Jt(o, s, e);
    }
}
function mi(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = s.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !o.length && !n && !r
      ? (c = t)
      : ((c = {}), o.length && o.forEach((u) => Pn(c, u, i, !0)), Pn(c, t, i)),
    s.set(t, c),
    c
  );
}
function Pn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Pn(e, s, n, !0), o && o.forEach((i) => Pn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = kc[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const kc = {
  data: Mo,
  props: mt,
  emits: mt,
  methods: mt,
  computed: mt,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: mt,
  directives: mt,
  watch: Cc,
  provide: Mo,
  inject: Tc,
};
function Mo(e, t) {
  return t
    ? e
      ? function () {
          return xe(
            W(e) ? e.call(this, this) : e,
            W(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Tc(e, t) {
  return mt(yr(e), yr(t));
}
function yr(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mt(e, t) {
  return e ? xe(xe(Object.create(null), e), t) : t;
}
function Cc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xe(Object.create(null), e);
  for (const r in t) n[r] = _e(e[r], t[r]);
  return n;
}
function Ac(e, t, n, r = !1) {
  const o = {},
    s = {};
  Tn(s, Vn, 1), (e.propsDefaults = Object.create(null)), wi(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : zl(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Sc(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    l = G(o),
    [c] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        let h = f[d];
        if (Hn(e.emitsOptions, h)) continue;
        const m = t[h];
        if (c)
          if (J(s, h)) m !== s[h] && ((s[h] = m), (u = !0));
          else {
            const y = Ve(h);
            o[y] = xr(c, l, y, m, e, !1);
          }
        else m !== s[h] && ((s[h] = m), (u = !0));
      }
    }
  } else {
    wi(e, t, o, s) && (u = !0);
    let f;
    for (const d in l)
      (!t || (!J(t, d) && ((f = Nt(d)) === d || !J(t, f)))) &&
        (c
          ? n &&
            (n[d] !== void 0 || n[f] !== void 0) &&
            (o[d] = xr(c, l, d, void 0, e, !0))
          : delete o[d]);
    if (s !== l)
      for (const d in s) (!t || (!J(t, d) && !0)) && (delete s[d], (u = !0));
  }
  u && Ze(e, "set", "$attrs");
}
function wi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (bn(c)) continue;
      const u = t[c];
      let f;
      o && J(o, (f = Ve(c)))
        ? !s || !s.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : Hn(e.emitsOptions, c) ||
          ((!(c in r) || u !== r[c]) && ((r[c] = u), (i = !0)));
    }
  if (s) {
    const c = G(n),
      u = l || ue;
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      n[d] = xr(o, c, d, u[d], e, !J(u, d));
    }
  }
  return i;
}
function xr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && W(c)) {
        const { propsDefaults: u } = o;
        n in u ? (r = u[n]) : (It(o), (r = u[n] = c.call(null, t)), yt());
      } else r = c;
    }
    i[0] &&
      (s && !l ? (r = !1) : i[1] && (r === "" || r === Nt(n)) && (r = !0));
  }
  return r;
}
function bi(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!W(e)) {
    const f = (d) => {
      c = !0;
      const [h, m] = bi(d, t, !0);
      xe(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!s && !c) return r.set(e, Pt), Pt;
  if (K(s))
    for (let f = 0; f < s.length; f++) {
      const d = Ve(s[f]);
      Io(d) && (i[d] = ue);
    }
  else if (s)
    for (const f in s) {
      const d = Ve(f);
      if (Io(d)) {
        const h = s[f],
          m = (i[d] = K(h) || W(h) ? { type: h } : h);
        if (m) {
          const y = Lo(Boolean, m.type),
            C = Lo(String, m.type);
          (m[0] = y > -1),
            (m[1] = C < 0 || y < C),
            (y > -1 || J(m, "default")) && l.push(d);
        }
      }
    }
  const u = [i, l];
  return r.set(e, u), u;
}
function Io(e) {
  return e[0] !== "$";
}
function $o(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Fo(e, t) {
  return $o(e) === $o(t);
}
function Lo(e, t) {
  return K(t) ? t.findIndex((n) => Fo(n, e)) : W(t) && Fo(t, e) ? 0 : -1;
}
const vi = (e) => e[0] === "_" || e === "$stable",
  Zr = (e) => (K(e) ? e.map(qe) : [qe(e)]),
  Pc = (e, t, n) => {
    if (t._n) return t;
    const r = Jr((...o) => Zr(t(...o)), n);
    return (r._c = !1), r;
  },
  yi = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (vi(o)) continue;
      const s = e[o];
      if (W(s)) t[o] = Pc(o, s, r);
      else if (s != null) {
        const i = Zr(s);
        t[o] = () => i;
      }
    }
  },
  xi = (e, t) => {
    const n = Zr(t);
    e.slots.default = () => n;
  },
  Oc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = G(t)), Tn(t, "_", n)) : yi(t, (e.slots = {}));
    } else (e.slots = {}), t && xi(e, t);
    Tn(e.slots, Vn, 1);
  },
  Rc = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = ue;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (s = !1)
          : (xe(o, t), !n && l === 1 && delete o._)
        : ((s = !t.$stable), yi(t, o)),
        (i = t);
    } else t && (xi(e, t), (i = { default: 1 }));
    if (s) for (const l in o) !vi(l) && !(l in i) && delete o[l];
  };
function _i() {
  return {
    app: null,
    config: {
      isNativeTag: il,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Mc = 0;
function Ic(e, t) {
  return function (r, o = null) {
    W(r) || (r = Object.assign({}, r)), o != null && !we(o) && (o = null);
    const s = _i(),
      i = new Set();
    let l = !1;
    const c = (s.app = {
      _uid: Mc++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Qc,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && W(u.install)
              ? (i.add(u), u.install(c, ...f))
              : W(u) && (i.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((s.components[u] = f), c) : s.components[u];
      },
      directive(u, f) {
        return f ? ((s.directives[u] = f), c) : s.directives[u];
      },
      mount(u, f, d) {
        if (!l) {
          const h = ce(r, o);
          return (
            (h.appContext = s),
            f && t ? t(h, u) : e(h, u, d),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            ro(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (s.provides[u] = f), c;
      },
    });
    return c;
  };
}
function _r(e, t, n, r, o = !1) {
  if (K(e)) {
    e.forEach((h, m) => _r(h, t && (K(t) ? t[m] : t), n, r, o));
    return;
  }
  if (yn(r) && !o) return;
  const s = r.shapeFlag & 4 ? ro(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: l, r: c } = e,
    u = t && t.r,
    f = l.refs === ue ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (u != null &&
      u !== c &&
      (ve(u)
        ? ((f[u] = null), J(d, u) && (d[u] = null))
        : pe(u) && (u.value = null)),
    W(c))
  )
    at(c, l, 12, [i, f]);
  else {
    const h = ve(c),
      m = pe(c);
    if (h || m) {
      const y = () => {
        if (e.f) {
          const C = h ? f[c] : c.value;
          o
            ? K(C) && Nr(C, s)
            : K(C)
            ? C.includes(s) || C.push(s)
            : h
            ? ((f[c] = [s]), J(d, c) && (d[c] = f[c]))
            : ((c.value = [s]), e.k && (f[e.k] = c.value));
        } else
          h
            ? ((f[c] = i), J(d, c) && (d[c] = i))
            : m && ((c.value = i), e.k && (f[e.k] = i));
      };
      i ? ((y.id = -1), Ee(y, n)) : y();
    }
  }
}
const Ee = oc;
function $c(e) {
  return Fc(e);
}
function Fc(e, t) {
  const n = dl();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: d,
      nextSibling: h,
      setScopeId: m = ze,
      cloneNode: y,
      insertStaticContent: C,
    } = e,
    _ = (
      a,
      p,
      g,
      v = null,
      b = null,
      A = null,
      R = !1,
      T = null,
      P = !!p.dynamicChildren
    ) => {
      if (a === p) return;
      a && !wt(a, p) && ((v = j(a)), Pe(a, b, A, !0), (a = null)),
        p.patchFlag === -2 && ((P = !1), (p.dynamicChildren = null));
      const { type: x, ref: z, shapeFlag: I } = p;
      switch (x) {
        case Gr:
          E(a, p, g, v);
          break;
        case De:
          S(a, p, g, v);
          break;
        case xn:
          a == null && F(p, g, v, R);
          break;
        case Ie:
          te(a, p, g, v, b, A, R, T, P);
          break;
        default:
          I & 1
            ? H(a, p, g, v, b, A, R, T, P)
            : I & 6
            ? fe(a, p, g, v, b, A, R, T, P)
            : (I & 64 || I & 128) && x.process(a, p, g, v, b, A, R, T, P, ae);
      }
      z != null && b && _r(z, a && a.ref, A, p || a, !p);
    },
    E = (a, p, g, v) => {
      if (a == null) r((p.el = l(p.children)), g, v);
      else {
        const b = (p.el = a.el);
        p.children !== a.children && u(b, p.children);
      }
    },
    S = (a, p, g, v) => {
      a == null ? r((p.el = c(p.children || "")), g, v) : (p.el = a.el);
    },
    F = (a, p, g, v) => {
      [a.el, a.anchor] = C(a.children, p, g, v, a.el, a.anchor);
    },
    N = ({ el: a, anchor: p }, g, v) => {
      let b;
      for (; a && a !== p; ) (b = h(a)), r(a, g, v), (a = b);
      r(p, g, v);
    },
    B = ({ el: a, anchor: p }) => {
      let g;
      for (; a && a !== p; ) (g = h(a)), o(a), (a = g);
      o(p);
    },
    H = (a, p, g, v, b, A, R, T, P) => {
      (R = R || p.type === "svg"),
        a == null ? L(p, g, v, b, A, R, T, P) : Y(a, p, b, A, R, T, P);
    },
    L = (a, p, g, v, b, A, R, T) => {
      let P, x;
      const {
        type: z,
        props: I,
        shapeFlag: D,
        transition: q,
        patchFlag: Z,
        dirs: se,
      } = a;
      if (a.el && y !== void 0 && Z === -1) P = a.el = y(a.el);
      else {
        if (
          ((P = a.el = i(a.type, A, I && I.is, I)),
          D & 8
            ? f(P, a.children)
            : D & 16 &&
              U(a.children, P, null, v, b, A && z !== "foreignObject", R, T),
          se && dt(a, null, v, "created"),
          I)
        ) {
          for (const he in I)
            he !== "value" &&
              !bn(he) &&
              s(P, he, null, I[he], A, a.children, v, b, O);
          "value" in I && s(P, "value", null, I.value),
            (x = I.onVnodeBeforeMount) && Ue(x, v, a);
        }
        k(P, a, a.scopeId, R, v);
      }
      se && dt(a, null, v, "beforeMount");
      const ie = (!b || (b && !b.pendingBranch)) && q && !q.persisted;
      ie && q.beforeEnter(P),
        r(P, p, g),
        ((x = I && I.onVnodeMounted) || ie || se) &&
          Ee(() => {
            x && Ue(x, v, a), ie && q.enter(P), se && dt(a, null, v, "mounted");
          }, b);
    },
    k = (a, p, g, v, b) => {
      if ((g && m(a, g), v)) for (let A = 0; A < v.length; A++) m(a, v[A]);
      if (b) {
        let A = b.subTree;
        if (p === A) {
          const R = b.vnode;
          k(a, R, R.scopeId, R.slotScopeIds, b.parent);
        }
      }
    },
    U = (a, p, g, v, b, A, R, T, P = 0) => {
      for (let x = P; x < a.length; x++) {
        const z = (a[x] = T ? it(a[x]) : qe(a[x]));
        _(null, z, p, g, v, b, A, R, T);
      }
    },
    Y = (a, p, g, v, b, A, R) => {
      const T = (p.el = a.el);
      let { patchFlag: P, dynamicChildren: x, dirs: z } = p;
      P |= a.patchFlag & 16;
      const I = a.props || ue,
        D = p.props || ue;
      let q;
      g && ht(g, !1),
        (q = D.onVnodeBeforeUpdate) && Ue(q, g, p, a),
        z && dt(p, a, g, "beforeUpdate"),
        g && ht(g, !0);
      const Z = b && p.type !== "foreignObject";
      if (
        (x
          ? ee(a.dynamicChildren, x, T, g, v, Z, A)
          : R || Te(a, p, T, null, g, v, Z, A, !1),
        P > 0)
      ) {
        if (P & 16) M(T, p, I, D, g, v, b);
        else if (
          (P & 2 && I.class !== D.class && s(T, "class", null, D.class, b),
          P & 4 && s(T, "style", I.style, D.style, b),
          P & 8)
        ) {
          const se = p.dynamicProps;
          for (let ie = 0; ie < se.length; ie++) {
            const he = se[ie],
              Me = I[he],
              _t = D[he];
            (_t !== Me || he === "value") &&
              s(T, he, Me, _t, b, a.children, g, v, O);
          }
        }
        P & 1 && a.children !== p.children && f(T, p.children);
      } else !R && x == null && M(T, p, I, D, g, v, b);
      ((q = D.onVnodeUpdated) || z) &&
        Ee(() => {
          q && Ue(q, g, p, a), z && dt(p, a, g, "updated");
        }, v);
    },
    ee = (a, p, g, v, b, A, R) => {
      for (let T = 0; T < p.length; T++) {
        const P = a[T],
          x = p[T],
          z =
            P.el && (P.type === Ie || !wt(P, x) || P.shapeFlag & 70)
              ? d(P.el)
              : g;
        _(P, x, z, null, v, b, A, R, !0);
      }
    },
    M = (a, p, g, v, b, A, R) => {
      if (g !== v) {
        for (const T in v) {
          if (bn(T)) continue;
          const P = v[T],
            x = g[T];
          P !== x && T !== "value" && s(a, T, x, P, R, p.children, b, A, O);
        }
        if (g !== ue)
          for (const T in g)
            !bn(T) && !(T in v) && s(a, T, g[T], null, R, p.children, b, A, O);
        "value" in v && s(a, "value", g.value, v.value);
      }
    },
    te = (a, p, g, v, b, A, R, T, P) => {
      const x = (p.el = a ? a.el : l("")),
        z = (p.anchor = a ? a.anchor : l(""));
      let { patchFlag: I, dynamicChildren: D, slotScopeIds: q } = p;
      q && (T = T ? T.concat(q) : q),
        a == null
          ? (r(x, g, v), r(z, g, v), U(p.children, g, z, b, A, R, T, P))
          : I > 0 && I & 64 && D && a.dynamicChildren
          ? (ee(a.dynamicChildren, D, g, b, A, R, T),
            (p.key != null || (b && p === b.subTree)) && Ei(a, p, !0))
          : Te(a, p, g, z, b, A, R, T, P);
    },
    fe = (a, p, g, v, b, A, R, T, P) => {
      (p.slotScopeIds = T),
        a == null
          ? p.shapeFlag & 512
            ? b.ctx.activate(p, g, v, R, P)
            : re(p, g, v, b, A, R, P)
          : de(a, p, P);
    },
    re = (a, p, g, v, b, A, R) => {
      const T = (a.component = Kc(a, v, b));
      if ((Un(a) && (T.ctx.renderer = ae), qc(T), T.asyncDep)) {
        if ((b && b.registerDep(T, ne), !a.el)) {
          const P = (T.subTree = ce(De));
          S(null, P, p, g);
        }
        return;
      }
      ne(T, a, p, g, b, A, R);
    },
    de = (a, p, g) => {
      const v = (p.component = a.component);
      if (tc(a, p, g))
        if (v.asyncDep && !v.asyncResolved) {
          Q(v, p, g);
          return;
        } else (v.next = p), Xl(v.update), v.update();
      else (p.el = a.el), (v.vnode = p);
    },
    ne = (a, p, g, v, b, A, R) => {
      const T = () => {
          if (a.isMounted) {
            let { next: z, bu: I, u: D, parent: q, vnode: Z } = a,
              se = z,
              ie;
            ht(a, !1),
              z ? ((z.el = Z.el), Q(a, z, R)) : (z = Z),
              I && Zn(I),
              (ie = z.props && z.props.onVnodeBeforeUpdate) && Ue(ie, q, z, Z),
              ht(a, !0);
            const he = Gn(a),
              Me = a.subTree;
            (a.subTree = he),
              _(Me, he, d(Me.el), j(Me), a, b, A),
              (z.el = he.el),
              se === null && nc(a, he.el),
              D && Ee(D, b),
              (ie = z.props && z.props.onVnodeUpdated) &&
                Ee(() => Ue(ie, q, z, Z), b);
          } else {
            let z;
            const { el: I, props: D } = p,
              { bm: q, m: Z, parent: se } = a,
              ie = yn(p);
            if (
              (ht(a, !1),
              q && Zn(q),
              !ie && (z = D && D.onVnodeBeforeMount) && Ue(z, se, p),
              ht(a, !0),
              I && V)
            ) {
              const he = () => {
                (a.subTree = Gn(a)), V(I, a.subTree, a, b, null);
              };
              ie
                ? p.type.__asyncLoader().then(() => !a.isUnmounted && he())
                : he();
            } else {
              const he = (a.subTree = Gn(a));
              _(null, he, g, v, a, b, A), (p.el = he.el);
            }
            if ((Z && Ee(Z, b), !ie && (z = D && D.onVnodeMounted))) {
              const he = p;
              Ee(() => Ue(z, se, he), b);
            }
            (p.shapeFlag & 256 ||
              (se && yn(se.vnode) && se.vnode.shapeFlag & 256)) &&
              a.a &&
              Ee(a.a, b),
              (a.isMounted = !0),
              (p = g = v = null);
          }
        },
        P = (a.effect = new Br(T, () => Gs(x), a.scope)),
        x = (a.update = () => P.run());
      (x.id = a.uid), ht(a, !0), x();
    },
    Q = (a, p, g) => {
      p.component = a;
      const v = a.vnode.props;
      (a.vnode = p),
        (a.next = null),
        Sc(a, p.props, v, g),
        Rc(a, p.children, g),
        jt(),
        Bn(void 0, a.update),
        zt();
    },
    Te = (a, p, g, v, b, A, R, T, P = !1) => {
      const x = a && a.children,
        z = a ? a.shapeFlag : 0,
        I = p.children,
        { patchFlag: D, shapeFlag: q } = p;
      if (D > 0) {
        if (D & 128) {
          We(x, I, g, v, b, A, R, T, P);
          return;
        } else if (D & 256) {
          xt(x, I, g, v, b, A, R, T, P);
          return;
        }
      }
      q & 8
        ? (z & 16 && O(x, b, A), I !== x && f(g, I))
        : z & 16
        ? q & 16
          ? We(x, I, g, v, b, A, R, T, P)
          : O(x, b, A, !0)
        : (z & 8 && f(g, ""), q & 16 && U(I, g, v, b, A, R, T, P));
    },
    xt = (a, p, g, v, b, A, R, T, P) => {
      (a = a || Pt), (p = p || Pt);
      const x = a.length,
        z = p.length,
        I = Math.min(x, z);
      let D;
      for (D = 0; D < I; D++) {
        const q = (p[D] = P ? it(p[D]) : qe(p[D]));
        _(a[D], q, g, null, b, A, R, T, P);
      }
      x > z ? O(a, b, A, !0, !1, I) : U(p, g, v, b, A, R, T, P, I);
    },
    We = (a, p, g, v, b, A, R, T, P) => {
      let x = 0;
      const z = p.length;
      let I = a.length - 1,
        D = z - 1;
      for (; x <= I && x <= D; ) {
        const q = a[x],
          Z = (p[x] = P ? it(p[x]) : qe(p[x]));
        if (wt(q, Z)) _(q, Z, g, null, b, A, R, T, P);
        else break;
        x++;
      }
      for (; x <= I && x <= D; ) {
        const q = a[I],
          Z = (p[D] = P ? it(p[D]) : qe(p[D]));
        if (wt(q, Z)) _(q, Z, g, null, b, A, R, T, P);
        else break;
        I--, D--;
      }
      if (x > I) {
        if (x <= D) {
          const q = D + 1,
            Z = q < z ? p[q].el : v;
          for (; x <= D; )
            _(null, (p[x] = P ? it(p[x]) : qe(p[x])), g, Z, b, A, R, T, P), x++;
        }
      } else if (x > D) for (; x <= I; ) Pe(a[x], b, A, !0), x++;
      else {
        const q = x,
          Z = x,
          se = new Map();
        for (x = Z; x <= D; x++) {
          const Ce = (p[x] = P ? it(p[x]) : qe(p[x]));
          Ce.key != null && se.set(Ce.key, x);
        }
        let ie,
          he = 0;
        const Me = D - Z + 1;
        let _t = !1,
          go = 0;
        const Ht = new Array(Me);
        for (x = 0; x < Me; x++) Ht[x] = 0;
        for (x = q; x <= I; x++) {
          const Ce = a[x];
          if (he >= Me) {
            Pe(Ce, b, A, !0);
            continue;
          }
          let He;
          if (Ce.key != null) He = se.get(Ce.key);
          else
            for (ie = Z; ie <= D; ie++)
              if (Ht[ie - Z] === 0 && wt(Ce, p[ie])) {
                He = ie;
                break;
              }
          He === void 0
            ? Pe(Ce, b, A, !0)
            : ((Ht[He - Z] = x + 1),
              He >= go ? (go = He) : (_t = !0),
              _(Ce, p[He], g, null, b, A, R, T, P),
              he++);
        }
        const mo = _t ? Lc(Ht) : Pt;
        for (ie = mo.length - 1, x = Me - 1; x >= 0; x--) {
          const Ce = Z + x,
            He = p[Ce],
            wo = Ce + 1 < z ? p[Ce + 1].el : v;
          Ht[x] === 0
            ? _(null, He, g, wo, b, A, R, T, P)
            : _t && (ie < 0 || x !== mo[ie] ? Be(He, g, wo, 2) : ie--);
        }
      }
    },
    Be = (a, p, g, v, b = null) => {
      const { el: A, type: R, transition: T, children: P, shapeFlag: x } = a;
      if (x & 6) {
        Be(a.component.subTree, p, g, v);
        return;
      }
      if (x & 128) {
        a.suspense.move(p, g, v);
        return;
      }
      if (x & 64) {
        R.move(a, p, g, ae);
        return;
      }
      if (R === Ie) {
        r(A, p, g);
        for (let I = 0; I < P.length; I++) Be(P[I], p, g, v);
        r(a.anchor, p, g);
        return;
      }
      if (R === xn) {
        N(a, p, g);
        return;
      }
      if (v !== 2 && x & 1 && T)
        if (v === 0) T.beforeEnter(A), r(A, p, g), Ee(() => T.enter(A), b);
        else {
          const { leave: I, delayLeave: D, afterLeave: q } = T,
            Z = () => r(A, p, g),
            se = () => {
              I(A, () => {
                Z(), q && q();
              });
            };
          D ? D(A, Z, se) : se();
        }
      else r(A, p, g);
    },
    Pe = (a, p, g, v = !1, b = !1) => {
      const {
        type: A,
        props: R,
        ref: T,
        children: P,
        dynamicChildren: x,
        shapeFlag: z,
        patchFlag: I,
        dirs: D,
      } = a;
      if ((T != null && _r(T, null, g, a, !0), z & 256)) {
        p.ctx.deactivate(a);
        return;
      }
      const q = z & 1 && D,
        Z = !yn(a);
      let se;
      if ((Z && (se = R && R.onVnodeBeforeUnmount) && Ue(se, p, a), z & 6))
        $(a.component, g, v);
      else {
        if (z & 128) {
          a.suspense.unmount(g, v);
          return;
        }
        q && dt(a, null, p, "beforeUnmount"),
          z & 64
            ? a.type.remove(a, p, g, b, ae, v)
            : x && (A !== Ie || (I > 0 && I & 64))
            ? O(x, p, g, !1, !0)
            : ((A === Ie && I & 384) || (!b && z & 16)) && O(P, p, g),
          v && Jn(a);
      }
      ((Z && (se = R && R.onVnodeUnmounted)) || q) &&
        Ee(() => {
          se && Ue(se, p, a), q && dt(a, null, p, "unmounted");
        }, g);
    },
    Jn = (a) => {
      const { type: p, el: g, anchor: v, transition: b } = a;
      if (p === Ie) {
        w(g, v);
        return;
      }
      if (p === xn) {
        B(a);
        return;
      }
      const A = () => {
        o(g), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (a.shapeFlag & 1 && b && !b.persisted) {
        const { leave: R, delayLeave: T } = b,
          P = () => R(g, A);
        T ? T(a.el, A, P) : P();
      } else A();
    },
    w = (a, p) => {
      let g;
      for (; a !== p; ) (g = h(a)), o(a), (a = g);
      o(p);
    },
    $ = (a, p, g) => {
      const { bum: v, scope: b, update: A, subTree: R, um: T } = a;
      v && Zn(v),
        b.stop(),
        A && ((A.active = !1), Pe(R, a, p, g)),
        T && Ee(T, p),
        Ee(() => {
          a.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    O = (a, p, g, v = !1, b = !1, A = 0) => {
      for (let R = A; R < a.length; R++) Pe(a[R], p, g, v, b);
    },
    j = (a) =>
      a.shapeFlag & 6
        ? j(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : h(a.anchor || a.el),
    oe = (a, p, g) => {
      a == null
        ? p._vnode && Pe(p._vnode, null, null, !0)
        : _(p._vnode || null, a, p, null, null, null, g),
        ni(),
        (p._vnode = a);
    },
    ae = {
      p: _,
      um: Pe,
      m: Be,
      r: Jn,
      mt: re,
      mc: U,
      pc: Te,
      pbc: ee,
      n: j,
      o: e,
    };
  let X, V;
  return (
    t && ([X, V] = t(ae)), { render: oe, hydrate: X, createApp: Ic(oe, X) }
  );
}
function ht({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ei(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (K(r) && K(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[s] = it(o[s])), (l.el = i.el)),
        n || Ei(i, l));
    }
}
function Lc(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (l = (s + i) >> 1), e[n[l]] < u ? (s = l + 1) : (i = l);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const Nc = (e) => e.__isTeleport,
  Ie = Symbol(void 0),
  Gr = Symbol(void 0),
  De = Symbol(void 0),
  xn = Symbol(void 0),
  Qt = [];
let Ne = null;
function ye(e = !1) {
  Qt.push((Ne = e ? null : []));
}
function jc() {
  Qt.pop(), (Ne = Qt[Qt.length - 1] || null);
}
let sn = 1;
function No(e) {
  sn += e;
}
function ki(e) {
  return (
    (e.dynamicChildren = sn > 0 ? Ne || Pt : null),
    jc(),
    sn > 0 && Ne && Ne.push(e),
    e
  );
}
function je(e, t, n, r, o, s) {
  return ki(me(e, t, n, r, o, s, !0));
}
function Mt(e, t, n, r, o) {
  return ki(ce(e, t, n, r, o, !0));
}
function Er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vn = "__vInternal",
  Ti = ({ key: e }) => (e != null ? e : null),
  _n = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ve(e) || pe(e) || W(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null;
function me(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Ie ? 0 : 1,
  i = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ti(t),
    ref: t && _n(t),
    scopeId: si,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (to(c, n), s & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ve(n) ? 8 : 16),
    sn > 0 &&
      !i &&
      Ne &&
      (c.patchFlag > 0 || s & 6) &&
      c.patchFlag !== 32 &&
      Ne.push(c),
    c
  );
}
const ce = zc;
function zc(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === bc) && (e = De), Er(e))) {
    const l = ft(e, t, !0);
    return (
      n && to(l, n),
      sn > 0 &&
        !s &&
        Ne &&
        (l.shapeFlag & 6 ? (Ne[Ne.indexOf(e)] = l) : Ne.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Jc(e) && (e = e.__vccOpts), t)) {
    t = Dc(t);
    let { class: l, style: c } = t;
    l && !ve(l) && (t.class = Fr(l)),
      we(c) && (Vs(c) && !K(c) && (c = xe({}, c)), (t.style = $r(c)));
  }
  const i = ve(e) ? 1 : rc(e) ? 128 : Nc(e) ? 64 : we(e) ? 4 : W(e) ? 2 : 0;
  return me(e, t, n, r, o, i, s, !0);
}
function Dc(e) {
  return e ? (Vs(e) || Vn in e ? xe({}, e) : e) : null;
}
function ft(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    l = t ? Bc(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ti(l),
    ref:
      t && t.ref ? (n && o ? (K(o) ? o.concat(_n(t)) : [o, _n(t)]) : _n(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ie ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function On(e = " ", t = 0) {
  return ce(Gr, null, e, t);
}
function eo(e, t) {
  const n = ce(xn, null, e);
  return (n.staticCount = t), n;
}
function tr(e = "", t = !1) {
  return t ? (ye(), Mt(De, null, e)) : ce(De, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean"
    ? ce(De)
    : K(e)
    ? ce(Ie, null, e.slice())
    : typeof e == "object"
    ? it(e)
    : ce(Gr, null, String(e));
}
function it(e) {
  return e.el === null || e.memo ? e : ft(e);
}
function to(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), to(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Vn in t)
        ? (t._ctx = Le)
        : o === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    W(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [On(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Fr([t.class, r.class]));
      else if (o === "style") t.style = $r([t.style, r.style]);
      else if (Fn(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(K(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ue(e, t, n, r = null) {
  Re(e, t, 7, [n, r]);
}
const Hc = _i();
let Uc = 0;
function Kc(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Hc,
    s = {
      uid: Uc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Is(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: bi(r, o),
      emitsOptions: oi(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ue,
      inheritAttrs: r.inheritAttrs,
      ctx: ue,
      data: ue,
      props: ue,
      attrs: ue,
      slots: ue,
      refs: ue,
      setupState: ue,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = Zl.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let be = null;
const no = () => be || Le,
  It = (e) => {
    (be = e), e.scope.on();
  },
  yt = () => {
    be && be.scope.off(), (be = null);
  };
function Ci(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function qc(e, t = !1) {
  ln = t;
  const { props: n, children: r } = e.vnode,
    o = Ci(e);
  Ac(e, n, o, t), Oc(e, r);
  const s = o ? Vc(e, t) : void 0;
  return (ln = !1), s;
}
function Vc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Rt(new Proxy(e.ctx, xc)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Yc(e) : null);
    It(e), jt();
    const s = at(r, e, 0, [e.props, o]);
    if ((zt(), yt(), Ps(s))) {
      if ((s.then(yt, yt), t))
        return s
          .then((i) => {
            jo(e, i, t);
          })
          .catch((i) => {
            Dn(i, e, 0);
          });
      e.asyncDep = s;
    } else jo(e, s, t);
  } else Ai(e, t);
}
function jo(e, t, n) {
  W(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : we(t) && (e.setupState = Js(t)),
    Ai(e, n);
}
let zo;
function Ai(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && zo && !r.render) {
      const o = r.template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          u = xe(xe({ isCustomElement: s, delimiters: l }, i), c);
        r.render = zo(o, u);
      }
    }
    e.render = r.render || ze;
  }
  It(e), jt(), _c(e), zt(), yt();
}
function Wc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Se(e, "get", "$attrs"), t[n];
    },
  });
}
function Yc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Wc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ro(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Js(Rt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Sn) return Sn[n](e);
        },
      }))
    );
}
function Xc(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Jc(e) {
  return W(e) && "__vccOpts" in e;
}
const Fe = (e, t) => Vl(e, t, ln);
function oo(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? we(t) && !K(t)
      ? Er(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Er(n) && (n = [n]),
      ce(e, t, n));
}
const Qc = "3.2.37",
  Zc = "http://www.w3.org/2000/svg",
  bt = typeof document != "undefined" ? document : null,
  Do = bt && bt.createElement("template"),
  Gc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? bt.createElementNS(Zc, e)
        : bt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => bt.createTextNode(e),
    createComment: (e) => bt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => bt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        Do.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Do.content;
        if (r) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function ea(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function ta(e, t, n) {
  const r = e.style,
    o = ve(n);
  if (n && !o) {
    for (const s in n) kr(r, s, n[s]);
    if (t && !ve(t)) for (const s in t) n[s] == null && kr(r, s, "");
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = s);
  }
}
const Bo = /\s*!important$/;
function kr(e, t, n) {
  if (K(n)) n.forEach((r) => kr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = na(e, t);
    Bo.test(n)
      ? e.setProperty(Nt(r), n.replace(Bo, ""), "important")
      : (e[r] = n);
  }
}
const Ho = ["Webkit", "Moz", "ms"],
  nr = {};
function na(e, t) {
  const n = nr[t];
  if (n) return n;
  let r = Ve(t);
  if (r !== "filter" && r in e) return (nr[t] = r);
  r = jn(r);
  for (let o = 0; o < Ho.length; o++) {
    const s = Ho[o] + r;
    if (s in e) return (nr[t] = s);
  }
  return t;
}
const Uo = "http://www.w3.org/1999/xlink";
function ra(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Uo, t.slice(6, t.length))
      : e.setAttributeNS(Uo, t, n);
  else {
    const s = tl(t);
    n == null || (s && !Cs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function oa(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = Cs(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
const [Si, sa] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Tr = 0;
const ia = Promise.resolve(),
  la = () => {
    Tr = 0;
  },
  ca = () => Tr || (ia.then(la), (Tr = Si()));
function aa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ua(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function fa(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [l, c] = da(t);
    if (r) {
      const u = (s[t] = ha(r, o));
      aa(e, l, u, c);
    } else i && (ua(e, l, i, c), (s[t] = void 0));
  }
}
const Ko = /(?:Once|Passive|Capture)$/;
function da(e) {
  let t;
  if (Ko.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Ko)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [Nt(e.slice(2)), t];
}
function ha(e, t) {
  const n = (r) => {
    const o = r.timeStamp || Si();
    (sa || o >= n.attached - 1) && Re(pa(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = ca()), n;
}
function pa(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const qo = /^on[a-z]/,
  ga = (e, t, n, r, o = !1, s, i, l, c) => {
    t === "class"
      ? ea(e, r, o)
      : t === "style"
      ? ta(e, n, r)
      : Fn(t)
      ? Lr(t) || fa(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ma(e, t, r, o)
        )
      ? oa(e, t, r, s, i, l, c)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        ra(e, t, r, o));
  };
function ma(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && qo.test(t) && W(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (qo.test(t) && ve(n))
    ? !1
    : t in e;
}
const tt = "transition",
  Ut = "animation",
  so = (e, { slots: t }) => oo(ci, wa(e), t);
so.displayName = "Transition";
const Pi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
so.props = xe({}, ci.props, Pi);
const pt = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Vo = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function wa(e) {
  const t = {};
  for (const M in e) M in Pi || (t[M] = e[M]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = s,
      appearActiveClass: u = i,
      appearToClass: f = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    y = ba(o),
    C = y && y[0],
    _ = y && y[1],
    {
      onBeforeEnter: E,
      onEnter: S,
      onEnterCancelled: F,
      onLeave: N,
      onLeaveCancelled: B,
      onBeforeAppear: H = E,
      onAppear: L = S,
      onAppearCancelled: k = F,
    } = t,
    U = (M, te, fe) => {
      gt(M, te ? f : l), gt(M, te ? u : i), fe && fe();
    },
    Y = (M, te) => {
      (M._isLeaving = !1), gt(M, d), gt(M, m), gt(M, h), te && te();
    },
    ee = (M) => (te, fe) => {
      const re = M ? L : S,
        de = () => U(te, M, fe);
      pt(re, [te, de]),
        Wo(() => {
          gt(te, M ? c : s), nt(te, M ? f : l), Vo(re) || Yo(te, r, C, de);
        });
    };
  return xe(t, {
    onBeforeEnter(M) {
      pt(E, [M]), nt(M, s), nt(M, i);
    },
    onBeforeAppear(M) {
      pt(H, [M]), nt(M, c), nt(M, u);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(M, te) {
      M._isLeaving = !0;
      const fe = () => Y(M, te);
      nt(M, d),
        xa(),
        nt(M, h),
        Wo(() => {
          !M._isLeaving || (gt(M, d), nt(M, m), Vo(N) || Yo(M, r, _, fe));
        }),
        pt(N, [M, fe]);
    },
    onEnterCancelled(M) {
      U(M, !1), pt(F, [M]);
    },
    onAppearCancelled(M) {
      U(M, !0), pt(k, [M]);
    },
    onLeaveCancelled(M) {
      Y(M), pt(B, [M]);
    },
  });
}
function ba(e) {
  if (e == null) return null;
  if (we(e)) return [rr(e.enter), rr(e.leave)];
  {
    const t = rr(e);
    return [t, t];
  }
}
function rr(e) {
  return Ms(e);
}
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function gt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Wo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let va = 0;
function Yo(e, t, n, r) {
  const o = (e._endId = ++va),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: l, propCount: c } = ya(e, t);
  if (!i) return r();
  const u = i + "end";
  let f = 0;
  const d = () => {
      e.removeEventListener(u, h), s();
    },
    h = (m) => {
      m.target === e && ++f >= c && d();
    };
  setTimeout(() => {
    f < c && d();
  }, l + 1),
    e.addEventListener(u, h);
}
function ya(e, t) {
  const n = window.getComputedStyle(e),
    r = (y) => (n[y] || "").split(", "),
    o = r(tt + "Delay"),
    s = r(tt + "Duration"),
    i = Xo(o, s),
    l = r(Ut + "Delay"),
    c = r(Ut + "Duration"),
    u = Xo(l, c);
  let f = null,
    d = 0,
    h = 0;
  t === tt
    ? i > 0 && ((f = tt), (d = i), (h = s.length))
    : t === Ut
    ? u > 0 && ((f = Ut), (d = u), (h = c.length))
    : ((d = Math.max(i, u)),
      (f = d > 0 ? (i > u ? tt : Ut) : null),
      (h = f ? (f === tt ? s.length : c.length) : 0));
  const m = f === tt && /\b(transform|all)(,|$)/.test(n[tt + "Property"]);
  return { type: f, timeout: d, propCount: h, hasTransform: m };
}
function Xo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Jo(n) + Jo(e[r])));
}
function Jo(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xa() {
  return document.body.offsetHeight;
}
const _a = xe({ patchProp: ga }, Gc);
let Qo;
function Ea() {
  return Qo || (Qo = $c(_a));
}
const ka = (...e) => {
  const t = Ea().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Ta(r);
      if (!o) return;
      const s = t._component;
      !W(s) && !s.render && !s.template && (s.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Ta(e) {
  return ve(e) ? document.querySelector(e) : e;
}
var Wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Ca = {},
  Aa = { id: "section-one", class: "flex lg:flex-row flex-col" },
  Sa = {
    class:
      "relative grid place-content-center h-screen lg:w-3/4 w-full px-10 lg:bg-gradient-to-r bg-gradient-to-b from-white to-neutral-200 dark:from-black dark:to-neutral-900 lg:rounded-r-75px rounded-b-75px overflow-hidden z-10",
  },
  Pa = me(
    "h1",
    {
      id: "text-show-1",
      class:
        "relative text-eva lg:text-6vw text-5vh lg:text-left text-center z-20",
      style: { filter: "opacity(0)", top: "-40px" },
    },
    [
      On(
        " \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 "
      ),
      me(
        "span",
        { class: "text-orange-500" },
        "\u041C\u0438\u0445\u0430\u0438\u043B"
      ),
      On(". "),
    ],
    -1
  ),
  Oa = me(
    "p",
    {
      id: "text-show-2",
      class:
        "relative text-noto lg:text-2vw text-2vh lg:text-left text-center z-20",
      style: { filter: "opacity(0)" },
    },
    " \u0418 \u044F - FrontEnd \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A. \u0411\u0443\u0434\u0443\u0449\u0438\u0439. ",
    -1
  ),
  Ra = {
    width: "400",
    height: "400",
    viewBox: "0 0 400 400",
    xmlns: "http://www.w3.org/2000/svg",
    id: "circle-one",
    class: "absolute",
    style: { top: "-500px", left: "250px" },
  },
  Ma = me(
    "circle",
    {
      cx: "200",
      cy: "200",
      r: "200",
      class: "dark:fill-neutral-800 fill-neutral-300",
    },
    null,
    -1
  ),
  Ia = [Ma],
  $a = {
    width: "200",
    height: "200",
    viewBox: "0 0 200 200",
    xmlns: "http://www.w3.org/2000/svg",
    id: "circle-two",
    class: "absolute",
    style: { top: "-300px", left: "60vw" },
  },
  Fa = me(
    "circle",
    {
      cx: "100",
      cy: "100",
      r: "100",
      class: "dark:fill-neutral-900 fill-white",
    },
    null,
    -1
  ),
  La = [Fa],
  Na = {
    width: "900",
    height: "900",
    viewBox: "0 0 900 900",
    xmlns: "http://www.w3.org/2000/svg",
    id: "circle-three",
    class: "absolute",
    style: { top: "-900px", left: "-500px" },
  },
  ja = me(
    "circle",
    {
      cx: "450",
      cy: "450",
      r: "450",
      class: "dark:fill-neutral-800 fill-neutral-200",
    },
    null,
    -1
  ),
  za = [ja],
  Da = eo(
    '<nav class="flex lg:flex-nowrap flex-wrap lg:flex-col flex-row justify-center items-center lg:w-1/4 w-full lg:my-10 my-5 lg:space-y-5 text-center text-raleway lg:text-2vw text-3vh"><a id="nav-anim-1" class="px-5 py-2 hover:text-orange-500 duration-200" style="filter:opacity(0);" href="#section-two">\u0420\u0435\u0437\u044E\u043C\u0435</a><a id="nav-anim-2" class="px-5 py-2 hover:text-orange-500 duration-200" style="filter:opacity(0);" href="#section-three">\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</a><a id="nav-anim-3" class="px-5 py-2 hover:text-orange-500 duration-200" style="filter:opacity(0);" href="">\u041E \u0441\u0430\u0439\u0442\u0435</a><a id="nav-anim-4" class="px-5 py-2 hover:text-orange-500 duration-200" style="filter:opacity(0);" href="">\u0421\u0441\u044B\u043B\u043A\u0438</a></nav>',
    1
  );
function Ba(e, t) {
  return (
    ye(),
    je("section", Aa, [
      me("div", Sa, [
        Pa,
        Oa,
        (ye(), je("svg", Ra, Ia)),
        (ye(), je("svg", $a, La)),
        (ye(), je("svg", Na, za)),
      ]),
      Da,
    ])
  );
}
var Ha = Wn(Ca, [["render", Ba]]);
const Ua = {},
  Ka = { id: "section-two" },
  qa = eo(
    '<h1 class="p-5 text-eva lg:text-5vw text-4vh text-center text-orange-500"> \u041C\u043E\u0451 \u0440\u0435\u0437\u044E\u043C\u0435. </h1><div class="flex lg:flex-row flex-col-reverse"><div class="relative flex justify-center items-center lg:w-1/2 w-full"><p id="skills-anim" class="lg:mt-0 mt-5 m-10 lg:text-2vw text-3vh text-center text-raleway z-10"> HTML5 / CSS3 / SCSS / TAILWIND / JS / JQUERY / VUE / PINIA / VUE ROUTER / VITE / WEBPACK / GIT / FIGMA </p></div><p class="lg:w-1/2 w-full p-10 text-noto lg:text-left text-justify lg:text-3/2vw text-2vh lg:bg-gradient-to-r bg-gradient-to-b dark:from-neutral-900 dark:to-black from-neutral-200 to-white overflow-hidden lg:rounded-l-75px rounded-t-75px"> \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u041E\u043F\u043B\u0430\u0447\u043A\u043E \u041C\u0438\u0445\u0430\u0438\u043B \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447. \u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u044F \u0438\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443 FrontEnd \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. \u0415\u0441\u043B\u0438 \u043A\u0440\u0430\u0442\u043A\u043E, \u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C \u0441\u0430\u0439\u0442\u043E\u0432 \u044F \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0443\u0436\u0435 \u0442\u0440\u0435\u0442\u0438\u0439 \u0433\u043E\u0434. \u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0436\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u043A\u0430\u043A\u0438\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u044F \u0443\u043C\u0435\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F. FrontEnd \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430 \u043C\u043D\u0435, \u0438 \u044F \u0441 \u043B\u0451\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u0438\u0437\u0443\u0447\u0430\u044E \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F. \u0415\u0441\u043B\u0438 \u044F \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D \u0432\u0430\u043C, \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u044F\u043B\u043D\u0443\u0442\u044C \u0432 \u043C\u043E\u0451 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0438\u043B\u0438 \u0436\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 <a class="text-orange-500" target="_blank" href="https://barnaul.hh.ru/resume/e86a7784ff0a557c590039ed1f596d57716f37">\u0442\u0443\u0442</a>. </p></div>',
    2
  ),
  Va = [qa];
function Wa(e, t) {
  return ye(), je("section", Ka, Va);
}
var Ya = Wn(Ua, [["render", Wa]]);
const Xa = { id: "section-three" },
  Ja = me(
    "h1",
    { class: "p-5 text-eva lg:text-5vw text-4vh text-center text-orange-500" },
    " \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E. ",
    -1
  ),
  Qa = { class: "flex lg:flex-row flex-col h-full" },
  Za = me(
    "h2",
    {
      id: "portfolio-years",
      class:
        "h-full text-eva text-center lg:text-8vw text-5vh dark:text-neutral-800 text-neutral-300 lg:vertical-rl z-10",
    },
    " 2019 - 2022 ",
    -1
  ),
  Ga = { class: "router w-full" },
  eu = { class: "flex flex-wrap justify-around p-2" },
  tu = {
    class:
      "router-base lg:p-10 p-5 bg-gradient-to-t dark:from-neutral-900 dark:to-black from-neutral-200 to-white rounded-b-75px z-20",
  },
  nu = {
    __name: "SectionThree",
    setup(e) {
      const t = [
        {
          id: 1,
          name: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u0430\u0439\u0442",
          to: "siteOne",
        },
        {
          id: 2,
          name: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0411\u0430\u0440\u043D\u0430\u0443\u043B\u0430",
          to: "siteTwo",
        },
        {
          id: 3,
          name: "\u0421\u0430\u043C\u043E\u043B\u0451\u0442\u044B \u0412\u041E\u0412",
          to: "siteTwo",
        },
        {
          id: 4,
          name: "\u041A\u043E\u0444\u0435\u0439\u043D\u044F",
          to: "siteTwo",
        },
        {
          id: 5,
          name: "\u0421\u0430\u0439\u0442 \u0433\u043E\u0440\u043E\u0434\u0430",
          to: "siteTwo",
        },
        { id: 6, name: "ToDo", to: "siteTwo" },
        {
          id: 7,
          name: "\u041D\u044B\u043D\u0435\u0448\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
          to: "siteTwo",
        },
        {
          id: 8,
          name: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
          to: "siteTwo",
        },
      ];
      return (n, r) => {
        const o = Po("router-link"),
          s = Po("router-view");
        return (
          ye(),
          je("section", Xa, [
            Ja,
            me("div", Qa, [
              Za,
              me("div", Ga, [
                me("nav", eu, [
                  (ye(),
                  je(
                    Ie,
                    null,
                    yc(t, (i) =>
                      ce(
                        o,
                        {
                          key: i.id,
                          to: { name: i.to },
                          class:
                            "m-2 px-5 py-2 text-raleway text-center lg:text-3/2vw text-2vh hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-200 duration-200 rounded-full z-20",
                        },
                        { default: Jr(() => [On(sl(i.name), 1)]), _: 2 },
                        1032,
                        ["to"]
                      )
                    ),
                    64
                  )),
                ]),
                me("div", tu, [ce(s)]),
              ]),
            ]),
          ])
        );
      };
    },
  };
class ru {
  setAnimation(t) {
    (this.animation = t),
      t == null || t.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const or = new WeakMap();
function Oi(e) {
  return (
    or.has(e) || or.set(e, { transforms: [], values: new Map() }), or.get(e)
  );
}
function ou(e, t) {
  return e.has(t) || e.set(t, new ru()), e.get(t);
}
function su(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function iu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const lu = (e, t, n) => Math.min(Math.max(n, e), t),
  ke = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  cn = (e) => typeof e == "number",
  cu = (e) => typeof e == "string",
  Rn = (e) => typeof e == "object" && Boolean(e.createAnimation),
  au = (e) => Array.isArray(e) && cn(e[0]),
  an = (e) => Array.isArray(e) && !cn(e[0]),
  io = (e, t, n) => -n * e + n * t + e,
  Ri = () => {},
  $t = (e) => e,
  lo = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e));
function co(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = lo(0, t, r);
    e.push(io(n, 1, o));
  }
}
function Mi(e) {
  const t = [0];
  return co(t, e - 1), t;
}
const En = { ms: (e) => e * 1e3, s: (e) => e / 1e3 },
  uu = (e, t, n) => {
    const r = t - e;
    return ((((n - e) % r) + r) % r) + e;
  },
  fu = ["", "X", "Y", "Z"],
  du = ["translate", "scale", "rotate", "skew"],
  Mn = { x: "translateX", y: "translateY", z: "translateZ" },
  Zo = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  hu = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: Zo,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: $t },
    skew: Zo,
  },
  un = new Map(),
  ao = (e) => `--motion-${e}`,
  In = ["x", "y", "z"];
du.forEach((e) => {
  fu.forEach((t) => {
    In.push(e + t), un.set(ao(e + t), hu[e]);
  });
});
const pu = (e, t) => In.indexOf(e) - In.indexOf(t),
  gu = new Set(In),
  uo = (e) => gu.has(e),
  mu = (e, t) => {
    Mn[t] && (t = Mn[t]);
    const { transforms: n } = Oi(e);
    su(n, t), (e.style.transform = wu(n));
  },
  wu = (e) => e.sort(pu).reduce(bu, "").trim(),
  bu = (e, t) => `${e} ${t}(var(${ao(t)}))`,
  Cr = (e) => e.startsWith("--"),
  Go = new Set();
function vu(e) {
  if (!Go.has(e)) {
    Go.add(e);
    try {
      const { syntax: t, initialValue: n } = un.has(e) ? un.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: !1,
        syntax: t,
        initialValue: n,
      });
    } catch {}
  }
}
const Ii = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  yu = 1e-7,
  xu = 12;
function _u(e, t, n, r, o) {
  let s,
    i,
    l = 0;
  do (i = t + (n - t) / 2), (s = Ii(i, r, o) - e), s > 0 ? (n = i) : (t = i);
  while (Math.abs(s) > yu && ++l < xu);
  return i;
}
function Wt(e, t, n, r) {
  if (e === t && n === r) return $t;
  const o = (s) => _u(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Ii(o(s), t, r));
}
const Eu =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        o = t === "end" ? Math.floor(r) : Math.ceil(r);
      return lu(0, 1, o / e);
    },
  es = {
    ease: Wt(0.25, 0.1, 0.25, 1),
    "ease-in": Wt(0.42, 0, 1, 1),
    "ease-in-out": Wt(0.42, 0, 0.58, 1),
    "ease-out": Wt(0, 0, 0.58, 1),
  },
  ku = /\((.*?)\)/;
function ts(e) {
  if (typeof e == "function") return e;
  if (Array.isArray(e)) return Wt(...e);
  if (es[e]) return es[e];
  if (e.startsWith("steps")) {
    const t = ku.exec(e);
    if (t) {
      const n = t[1].split(",");
      return Eu(parseFloat(n[0]), n[1].trim());
    }
  }
  return $t;
}
function $i(e, t) {
  return an(e) ? e[uu(0, e.length, t)] : e;
}
const Tu = (e) => Math.min(1, Math.max(e, 0));
function Cu(e, t = Mi(e.length), n = $t) {
  const r = e.length,
    o = r - t.length;
  return (
    o > 0 && co(t, o),
    (s) => {
      let i = 0;
      for (; i < r - 2 && !(s < t[i + 1]); i++);
      let l = Tu(lo(t[i], t[i + 1], s));
      return (l = $i(n, i)(l)), io(e[i], e[i + 1], l);
    }
  );
}
class Au {
  constructor(
    t,
    n = [0, 1],
    {
      easing: r = ke.easing,
      duration: o = ke.duration,
      delay: s = ke.delay,
      endDelay: i = ke.endDelay,
      repeat: l = ke.repeat,
      offset: c,
      direction: u = "normal",
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.playState = "idle"),
      (this.finished = new Promise((m, y) => {
        (this.resolve = m), (this.reject = y);
      })),
      Rn(r))
    ) {
      const m = r.createAnimation(n, () => "0", !0);
      (r = m.easing),
        m.keyframes !== void 0 && (n = m.keyframes),
        m.duration !== void 0 && (o = m.duration);
    }
    const f = an(r) ? $t : ts(r),
      d = o * (l + 1),
      h = Cu(n, c, an(r) ? r.map(ts) : $t);
    (this.tick = (m) => {
      var y;
      (s = s), this.pauseTime && (m = this.pauseTime);
      let C = (m - this.startTime) * this.rate;
      (this.t = C),
        (C /= 1e3),
        (C = Math.max(C - s, 0)),
        this.playState === "finished" && (C = d);
      const _ = C / o;
      let E = Math.floor(_),
        S = _ % 1;
      !S && _ >= 1 && (S = 1), S === 1 && E--;
      const F = E % 2;
      (u === "reverse" ||
        (u === "alternate" && F) ||
        (u === "alternate-reverse" && !F)) &&
        (S = 1 - S);
      const N = C >= d ? 1 : Math.min(S, 1),
        B = h(f(N));
      t(B),
        this.playState === "finished" || C >= d + i
          ? ((this.playState = "finished"),
            (y = this.resolve) === null || y === void 0 || y.call(this, B))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      this.play();
  }
  play() {
    var t;
    const n = performance.now();
    (this.playState = "running"),
      this.pauseTime
        ? (this.startTime =
            n -
            (this.pauseTime -
              ((t = this.startTime) !== null && t !== void 0 ? t : 0)))
        : this.startTime || (this.startTime = n),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      requestAnimationFrame(this.tick);
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = performance.now());
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var t;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime || this.rate === 0
      ? (this.pauseTime = t)
      : (this.startTime = performance.now() - t / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
}
const ns = (e) => (au(e) ? Su(e) : e),
  Su = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  rs = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  os = {
    cssRegisterProperty: () =>
      typeof CSS != "undefined" &&
      Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        rs({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => Boolean(rs({ opacity: [0, 1] }).finished),
  },
  sr = {},
  kn = {};
for (const e in os)
  kn[e] = () => (sr[e] === void 0 && (sr[e] = os[e]()), sr[e]);
function Pu(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const Fi = (e) => (Array.isArray(e) ? e : [e]);
function Ar(e) {
  return Mn[e] && (e = Mn[e]), uo(e) ? ao(e) : e;
}
const wn = {
  get: (e, t) => {
    t = Ar(t);
    let n = Cr(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const r = un.get(t);
      r && (n = r.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    (t = Ar(t)), Cr(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
  },
};
function Li(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {}
}
function Ou() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Ru(e, t, n, r = {}) {
  const o = Ou(),
    s = r.record !== !1 && o;
  let i,
    {
      duration: l = ke.duration,
      delay: c = ke.delay,
      endDelay: u = ke.endDelay,
      repeat: f = ke.repeat,
      easing: d = ke.easing,
      direction: h,
      offset: m,
      allowWebkitAcceleration: y = !1,
    } = r;
  const C = Oi(e);
  let _ = kn.waapi();
  const E = uo(t);
  E && mu(e, t);
  const S = Ar(t),
    F = ou(C.values, S),
    N = un.get(S);
  return (
    Li(F.animation, !(Rn(d) && F.generator) && r.record !== !1),
    () => {
      const B = () => {
        var L, k;
        return (k =
          (L = wn.get(e, S)) !== null && L !== void 0
            ? L
            : N == null
            ? void 0
            : N.initialValue) !== null && k !== void 0
          ? k
          : 0;
      };
      let H = Pu(Fi(n), B);
      if (Rn(d)) {
        const L = d.createAnimation(H, B, E, S, F);
        (d = L.easing),
          L.keyframes !== void 0 && (H = L.keyframes),
          L.duration !== void 0 && (l = L.duration);
      }
      if ((Cr(S) && (kn.cssRegisterProperty() ? vu(S) : (_ = !1)), _)) {
        N && (H = H.map((U) => (cn(U) ? N.toDefaultUnit(U) : U))),
          H.length === 1 && (!kn.partialKeyframes() || s) && H.unshift(B());
        const L = {
          delay: En.ms(c),
          duration: En.ms(l),
          endDelay: En.ms(u),
          easing: an(d) ? void 0 : ns(d),
          direction: h,
          iterations: f + 1,
          fill: "both",
        };
        (i = e.animate(
          { [S]: H, offset: m, easing: an(d) ? d.map(ns) : void 0 },
          L
        )),
          i.finished ||
            (i.finished = new Promise((U, Y) => {
              (i.onfinish = U), (i.oncancel = Y);
            }));
        const k = H[H.length - 1];
        i.finished
          .then(() => {
            wn.set(e, S, k), i.cancel();
          })
          .catch(Ri),
          y || (i.playbackRate = 1.000001);
      } else if (E) {
        (H = H.map((k) => (typeof k == "string" ? parseFloat(k) : k))),
          H.length === 1 && H.unshift(parseFloat(B()));
        const L = (k) => {
          N && (k = N.toDefaultUnit(k)), wn.set(e, S, k);
        };
        i = new Au(
          L,
          H,
          Object.assign(Object.assign({}, r), { duration: l, easing: d })
        );
      } else {
        const L = H[H.length - 1];
        wn.set(e, S, N && cn(L) ? N.toDefaultUnit(L) : L);
      }
      return (
        s &&
          o(
            e,
            t,
            H,
            { duration: l, delay: c, easing: d, repeat: f, offset: m },
            "motion-one"
          ),
        F.setAnimation(i),
        i
      );
    }
  );
}
const Mu = (e, t) =>
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
function Iu(e, t) {
  var n;
  return (
    typeof e == "string"
      ? t
        ? (((n = t[e]) !== null && n !== void 0) ||
            (t[e] = document.querySelectorAll(e)),
          (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const $u = (e) => e(),
  Fu = (e, t = ke.duration) =>
    new Proxy({ animations: e.map($u).filter(Boolean), duration: t }, Nu),
  Lu = (e) => e.animations[0],
  Nu = {
    get: (e, t) => {
      const n = Lu(e);
      switch (t) {
        case "duration":
          return e.duration;
        case "currentTime":
          let r = (n == null ? void 0 : n[t]) || 0;
          return r ? r / 1e3 : 0;
        case "playbackRate":
        case "playState":
          return n == null ? void 0 : n[t];
        case "finished":
          return (
            e.finished ||
              (e.finished = Promise.all(e.animations.map(ju)).catch(Ri)),
            e.finished
          );
        case "stop":
          return () => e.animations.forEach((o) => Li(o));
        default:
          return typeof (n == null ? void 0 : n[t]) == "undefined"
            ? void 0
            : () => e.animations.forEach((o) => o[t]());
      }
    },
    set: (e, t, n) => {
      switch (t) {
        case "currentTime":
          n = En.ms(n);
        case "currentTime":
        case "playbackRate":
          for (let r = 0; r < e.animations.length; r++) e.animations[r][t] = n;
          return !0;
      }
      return !1;
    },
  },
  ju = (e) => e.finished;
function zu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Du(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
var Bu = function () {};
function ss(e, t, n, r) {
  var o;
  return cn(t)
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (o = r.get(t)) !== null && o !== void 0
    ? o
    : e;
}
function Hu(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    o.at > t && o.at < n && (iu(e, o), r--);
  }
}
function Uu(e, t, n, r, o, s) {
  Hu(e, o, s);
  for (let i = 0; i < t.length; i++)
    e.push({ value: t[i], at: io(o, s, r[i]), easing: $i(n, i) });
}
function Ku(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : -1) : e.at - t.at;
}
function is(e, t = {}) {
  var n;
  const r = qu(e, t),
    o = r.map((s) => Ru(...s)).filter(Boolean);
  return Fu(o, (n = r[0]) === null || n === void 0 ? void 0 : n[3].duration);
}
function qu(e, t = {}) {
  var { defaultOptions: n = {} } = t,
    r = Du(t, ["defaultOptions"]);
  const o = [],
    s = new Map(),
    i = {},
    l = new Map();
  let c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    const h = e[d];
    if (cu(h)) {
      l.set(h, u);
      continue;
    } else if (!Array.isArray(h)) {
      l.set(h.name, ss(u, h.at, c, l));
      continue;
    }
    const [m, y, C = {}] = h;
    C.at !== void 0 && (u = ss(u, C.at, c, l));
    let _ = 0;
    const E = Iu(m, i),
      S = E.length;
    for (let F = 0; F < S; F++) {
      const N = E[F],
        B = Vu(N, s);
      for (const H in y) {
        const L = Wu(H, B);
        let k = Fi(y[H]);
        const U = Mu(C, H);
        let {
          duration: Y = n.duration || ke.duration,
          easing: ee = n.easing || ke.easing,
        } = U;
        if (Rn(ee)) {
          const ne = uo(H);
          Bu(k.length === 2 || !ne);
          const Q = ee.createAnimation(k, () => "0", ne);
          (ee = Q.easing),
            Q.keyframes !== void 0 && (k = Q.keyframes),
            Q.duration !== void 0 && (Y = Q.duration);
        }
        const M = zu(C.delay, F, S) || 0,
          te = u + M,
          fe = te + Y;
        let { offset: re = Mi(k.length) } = U;
        re.length === 1 && re[0] === 0 && (re[1] = 1);
        const de = length - k.length;
        de > 0 && co(re, de),
          k.length === 1 && k.unshift(null),
          Uu(L, k, ee, re, te, fe),
          (_ = Math.max(M + Y, _)),
          (f = Math.max(fe, f));
      }
    }
    (c = u), (u += _);
  }
  return (
    s.forEach((d, h) => {
      for (const m in d) {
        const y = d[m];
        y.sort(Ku);
        const C = [],
          _ = [],
          E = [];
        for (let S = 0; S < y.length; S++) {
          const { at: F, value: N, easing: B } = y[S];
          C.push(N), _.push(lo(0, f, F)), E.push(B || ke.easing);
        }
        _[0] !== 0 && (_.unshift(0), C.unshift(C[0]), E.unshift("linear")),
          _[_.length - 1] !== 1 && (_.push(1), C.push(null)),
          o.push([
            h,
            m,
            C,
            Object.assign(
              Object.assign(Object.assign({}, n), {
                duration: f,
                easing: E,
                offset: _,
              }),
              r
            ),
          ]);
      }
    }),
    o
  );
}
function Vu(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Wu(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function Yu(e, t, n) {
  var r = n || {},
    o = r.noTrailing,
    s = o === void 0 ? !1 : o,
    i = r.noLeading,
    l = i === void 0 ? !1 : i,
    c = r.debounceMode,
    u = c === void 0 ? void 0 : c,
    f,
    d = !1,
    h = 0;
  function m() {
    f && clearTimeout(f);
  }
  function y(_) {
    var E = _ || {},
      S = E.upcomingOnly,
      F = S === void 0 ? !1 : S;
    m(), (d = !F);
  }
  function C() {
    for (var _ = arguments.length, E = new Array(_), S = 0; S < _; S++)
      E[S] = arguments[S];
    var F = this,
      N = Date.now() - h;
    if (d) return;
    function B() {
      (h = Date.now()), t.apply(F, E);
    }
    function H() {
      f = void 0;
    }
    !l && u && !f && B(),
      m(),
      u === void 0 && N > e
        ? l
          ? ((h = Date.now()), s || (f = setTimeout(u ? H : B, e)))
          : B()
        : s !== !0 && (f = setTimeout(u ? H : B, u === void 0 ? e - N : e));
  }
  return (C.cancel = y), C;
}
function Xu(e, t) {
  return (
    ye(),
    Mt(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        ce("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        }),
      ]
    )
  );
}
function ls(e, t) {
  return (
    ye(),
    Mt(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        ce("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
        }),
      ]
    )
  );
}
function cs(e, t) {
  return (
    ye(),
    Mt(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        ce("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
        }),
      ]
    )
  );
}
var Ju = !1;
/*!
 * pinia v2.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ let Ni;
const Yn = (e) => (Ni = e),
  ji = Symbol();
function Sr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Zt;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Zt || (Zt = {}));
function Qu() {
  const e = $s(!0),
    t = e.run(() => Wr({}));
  let n = [],
    r = [];
  const o = Rt({
    install(s) {
      Yn(o),
        (o._a = s),
        s.provide(ji, o),
        (s.config.globalProperties.$pinia = o),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(s) {
      return !this._a && !Ju ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const zi = () => {};
function as(e, t, n, r = zi) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && no() && Qr(o), o;
}
function Et(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function Pr(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    Sr(o) && Sr(r) && e.hasOwnProperty(n) && !pe(r) && !Je(r)
      ? (e[n] = Pr(o, r))
      : (e[n] = r);
  }
  return e;
}
const Zu = Symbol();
function Gu(e) {
  return !Sr(e) || !e.hasOwnProperty(Zu);
}
const { assign: Ye } = Object;
function ef(e) {
  return !!(pe(e) && e.effect);
}
function tf(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t,
    l = n.state.value[e];
  let c;
  function u() {
    l || (n.state.value[e] = o ? o() : {});
    const f = Ul(n.state.value[e]);
    return Ye(
      f,
      s,
      Object.keys(i || {}).reduce(
        (d, h) => (
          (d[h] = Rt(
            Fe(() => {
              Yn(n);
              const m = n._s.get(e);
              return i[h].call(m, m);
            })
          )),
          d
        ),
        {}
      )
    );
  }
  return (
    (c = Di(e, u, t, n, r, !0)),
    (c.$reset = function () {
      const d = o ? o() : {};
      this.$patch((h) => {
        Ye(h, d);
      });
    }),
    c
  );
}
function Di(e, t, n = {}, r, o, s) {
  let i;
  const l = Ye({ actions: {} }, n),
    c = { deep: !0 };
  let u,
    f,
    d = Rt([]),
    h = Rt([]),
    m;
  const y = r.state.value[e];
  !s && !y && (r.state.value[e] = {}), Wr({});
  let C;
  function _(L) {
    let k;
    (u = f = !1),
      typeof L == "function"
        ? (L(r.state.value[e]),
          (k = { type: Zt.patchFunction, storeId: e, events: m }))
        : (Pr(r.state.value[e], L),
          (k = { type: Zt.patchObject, payload: L, storeId: e, events: m }));
    const U = (C = Symbol());
    Xr().then(() => {
      C === U && (u = !0);
    }),
      (f = !0),
      Et(d, k, r.state.value[e]);
  }
  const E = zi;
  function S() {
    i.stop(), (d = []), (h = []), r._s.delete(e);
  }
  function F(L, k) {
    return function () {
      Yn(r);
      const U = Array.from(arguments),
        Y = [],
        ee = [];
      function M(re) {
        Y.push(re);
      }
      function te(re) {
        ee.push(re);
      }
      Et(h, { args: U, name: L, store: B, after: M, onError: te });
      let fe;
      try {
        fe = k.apply(this && this.$id === e ? this : B, U);
      } catch (re) {
        throw (Et(ee, re), re);
      }
      return fe instanceof Promise
        ? fe
            .then((re) => (Et(Y, re), re))
            .catch((re) => (Et(ee, re), Promise.reject(re)))
        : (Et(Y, fe), fe);
    };
  }
  const N = {
      _p: r,
      $id: e,
      $onAction: as.bind(null, h),
      $patch: _,
      $reset: E,
      $subscribe(L, k = {}) {
        const U = as(d, L, k.detached, () => Y()),
          Y = i.run(() =>
            Jt(
              () => r.state.value[e],
              (ee) => {
                (k.flush === "sync" ? f : u) &&
                  L({ storeId: e, type: Zt.direct, events: m }, ee);
              },
              Ye({}, c, k)
            )
          );
        return U;
      },
      $dispose: S,
    },
    B = Dt(Ye({}, N));
  r._s.set(e, B);
  const H = r._e.run(() => ((i = $s()), i.run(() => t())));
  for (const L in H) {
    const k = H[L];
    if ((pe(k) && !ef(k)) || Je(k))
      s ||
        (y && Gu(k) && (pe(k) ? (k.value = y[L]) : Pr(k, y[L])),
        (r.state.value[e][L] = k));
    else if (typeof k == "function") {
      const U = F(L, k);
      (H[L] = U), (l.actions[L] = k);
    }
  }
  return (
    Ye(B, H),
    Ye(G(B), H),
    Object.defineProperty(B, "$state", {
      get: () => r.state.value[e],
      set: (L) => {
        _((k) => {
          Ye(k, L);
        });
      },
    }),
    r._p.forEach((L) => {
      Ye(
        B,
        i.run(() => L({ store: B, app: r._a, pinia: r, options: l }))
      );
    }),
    y && s && n.hydrate && n.hydrate(B.$state, y),
    (u = !0),
    (f = !0),
    B
  );
}
function nf(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? ((r = e), (o = s ? n : t)) : ((o = e), (r = e.id));
  function i(l, c) {
    const u = no();
    return (
      (l = l || (u && Qe(ji))),
      l && Yn(l),
      (l = Ni),
      l._s.has(r) || (s ? Di(r, t, o, l) : tf(r, o, l)),
      l._s.get(r)
    );
  }
  return (i.$id = r), i;
}
function rf(e) {
  {
    e = G(e);
    const t = {};
    for (const n in e) {
      const r = e[n];
      (pe(r) || Je(r)) && (t[n] = Qs(e, n));
    }
    return t;
  }
}
const of = nf({
  id: "currentTheme",
  state: () => ({
    themes: { themeSwitch: !1, sysTheme: !0, currentTheme: "system" },
  }),
  actions: {
    setDarkTheme() {
      (this.themes.sysTheme = !1),
        (this.themes.themeSwitch = !1),
        (this.themes.currentTheme = "dark");
    },
    setLightTheme() {
      (this.themes.sysTheme = !1),
        (this.themes.themeSwitch = !1),
        (this.themes.currentTheme = "light");
    },
    setSysTheme() {
      (this.themes.sysTheme = !0),
        (this.themes.themeSwitch = !1),
        (this.themes.currentTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light");
    },
    themeList() {
      this.themes.themeSwitch = !this.themes.themeSwitch;
    },
  },
});
const sf = { class: "fixed h-max right-5 top-5 z-50" },
  lf = {
    key: 0,
    class:
      "absolute top-0 flex flex-col w-5vh pb-1vh pt-6vh space-y-1vh dark:bg-neutral-900 bg-neutral-200 rounded-full -z-10",
  },
  cf = {
    __name: "ThemeSwitcher",
    setup(e) {
      const t = of(),
        { themes: n } = rf(t);
      return (
        qn(() => {
          (n.value.currentTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches
            ? "dark"
            : "light"),
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .addEventListener("change", (r) => {
                n.value.sysTheme &&
                  (n.value.currentTheme = r.matches ? "dark" : "light");
              });
        }),
        t.$subscribe((r, o) => {
          o.themes.currentTheme === "dark"
            ? document.documentElement.classList.add("dark")
            : o.themes.currentTheme === "light"
            ? document.documentElement.classList.remove("dark")
            : (o.themes.currentTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
              ).matches
                ? "dark"
                : "light");
        }),
        (r, o) => (
          ye(),
          je("div", sf, [
            me(
              "div",
              {
                class:
                  "grid place-content-center h-5vh w-5vh dark:bg-neutral-800 bg-neutral-100 rounded-full",
                onClick:
                  o[0] ||
                  (o[0] = (...s) => ge(t).themeList && ge(t).themeList(...s)),
              },
              [
                me("button", null, [
                  ge(n).currentTheme === "light"
                    ? (ye(),
                      Mt(ge(ls), {
                        key: 0,
                        class: "lg:icon-size icon-size-sm",
                      }))
                    : tr("", !0),
                  ge(n).currentTheme === "dark"
                    ? (ye(),
                      Mt(ge(cs), {
                        key: 1,
                        class: "lg:icon-size icon-size-sm",
                      }))
                    : tr("", !0),
                ]),
              ]
            ),
            ce(so, null, {
              default: Jr(() => [
                ge(t).themes.themeSwitch === !0
                  ? (ye(),
                    je("div", lf, [
                      me(
                        "button",
                        {
                          onClick:
                            o[1] ||
                            (o[1] = (...s) =>
                              ge(t).setLightTheme && ge(t).setLightTheme(...s)),
                        },
                        [
                          ce(ge(cs), {
                            class:
                              "lg:icon-size icon-size-sm mx-auto duration-200 hover:text-yellow-500",
                          }),
                        ]
                      ),
                      me(
                        "button",
                        {
                          onClick:
                            o[2] ||
                            (o[2] = (...s) =>
                              ge(t).setDarkTheme && ge(t).setDarkTheme(...s)),
                        },
                        [
                          ce(ge(ls), {
                            class:
                              "lg:icon-size icon-size-sm mx-auto duration-200 hover:text-sky-400",
                          }),
                        ]
                      ),
                      me(
                        "button",
                        {
                          onClick:
                            o[3] ||
                            (o[3] = (...s) =>
                              ge(t).setSysTheme && ge(t).setSysTheme(...s)),
                        },
                        [
                          ce(ge(Xu), {
                            class:
                              "lg:icon-size icon-size-sm mx-auto duration-200 hover:text-green-400",
                          }),
                        ]
                      ),
                    ]))
                  : tr("", !0),
              ]),
              _: 1,
            }),
          ])
        )
      );
    },
  };
var af = Wn(cf, [["__scopeId", "data-v-b1b46f8a"]]);
const uf = { class: "h-full dark:bg-black bg-white" },
  ff = {
    __name: "App",
    setup(e) {
      return (
        qn(() => {
          window.innerWidth >= 1024
            ? is([
                [
                  "#text-show-1",
                  { filter: "opacity(1)", top: "0px" },
                  { duration: 1, delay: 0.5 },
                ],
                [
                  "#text-show-2",
                  { filter: "opacity(1)" },
                  { duration: 1, delay: 0.5 },
                ],
                ["#circle-one", { top: "-40px" }, { duration: 1, at: 2.5 }],
                ["#circle-two", { top: "70vh" }, { duration: 1.3, at: 2.5 }],
                ["#circle-three", { top: "40vh" }, { duration: 1.8, at: 2.5 }],
                ["#nav-anim-1", { filter: "opacity(1)" }, { duration: 0.2 }],
                ["#nav-anim-2", { filter: "opacity(1)" }, { duration: 0.2 }],
                ["#nav-anim-3", { filter: "opacity(1)" }, { duration: 0.4 }],
                ["#nav-anim-4", { filter: "opacity(1)" }, { duration: 0.6 }],
              ])
            : is([
                [
                  "#text-show-1",
                  { filter: "opacity(1)", top: "0px" },
                  { duration: 1, delay: 0.5 },
                ],
                [
                  "#text-show-2",
                  { filter: "opacity(1)" },
                  { duration: 1, delay: 0.5 },
                ],
                [
                  "#circle-one",
                  { top: "-100px", left: "50px" },
                  { duration: 1, at: 2.5 },
                ],
                ["#circle-two", { top: "40vh" }, { duration: 1.3, at: 2.5 }],
                ["#circle-three", { top: "60vh" }, { duration: 1.8, at: 2.5 }],
                ["#nav-anim-1", { filter: "opacity(1)" }, { duration: 0.2 }],
                ["#nav-anim-2", { filter: "opacity(1)" }, { duration: 0.2 }],
                ["#nav-anim-3", { filter: "opacity(1)" }, { duration: 0.4 }],
                ["#nav-anim-4", { filter: "opacity(1)" }, { duration: 0.6 }],
              ]);
          const t = document.querySelector("#circle-one"),
            n = document.querySelector("#circle-two"),
            r = document.querySelector("#circle-three"),
            o = document.querySelector("#skills-anim"),
            s = document.querySelector("#portfolio-years");
          function i() {
            window.innerWidth >= 1024 &&
              window.addEventListener(
                "pointermove",
                Yu(10, (l) => {
                  (t.style.transform = `translate(${l.clientX / 75 + "px"}, ${
                    l.clientY / 75 + "px"
                  })`),
                    (n.style.transform = `translate(${
                      -l.clientX / 50 + "px"
                    }, ${-l.clientY / 50 + "px"})`),
                    (r.style.transform = `translate(${
                      -l.clientX / 125 + "px"
                    }, ${-l.clientY / 125 + "px"})`),
                    (o.style.transform = `translate(${
                      l.clientX / 100 + "px"
                    }, ${l.clientY / 100 + "px"})`),
                    (s.style.transform = `translate(${
                      -l.clientX / 150 + "px"
                    }, ${-l.clientY / 150 + "px"})`);
                })
              );
          }
          window.innerWidth >= 1024 && i();
        }),
        (t, n) => (ye(), je("main", uf, [ce(af), ce(Ha), ce(Ya), ce(nu)]))
      );
    },
  },
  df = "modulepreload",
  us = {},
  hf = "/portfolio-one/",
  pf = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${hf}${r}`), r in us)) return;
            us[r] = !0;
            const o = r.endsWith(".css"),
              s = o ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${r}"]${s}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = o ? "stylesheet" : df),
              o || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = r),
              document.head.appendChild(i),
              o)
            )
              return new Promise((l, c) => {
                i.addEventListener("load", l),
                  i.addEventListener("error", () =>
                    c(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
/*!
 * vue-router v4.0.16
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Bi =
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  Bt = (e) => (Bi ? Symbol(e) : "_vr_" + e),
  gf = Bt("rvlm"),
  fs = Bt("rvd"),
  fo = Bt("r"),
  Hi = Bt("rl"),
  Or = Bt("rvl"),
  At = typeof window != "undefined";
function mf(e) {
  return e.__esModule || (Bi && e[Symbol.toStringTag] === "Module");
}
const le = Object.assign;
function ir(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Array.isArray(o) ? o.map(e) : e(o);
  }
  return n;
}
const Gt = () => {},
  wf = /\/$/,
  bf = (e) => e.replace(wf, "");
function lr(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const l = t.indexOf("?"),
    c = t.indexOf("#", l > -1 ? l : 0);
  return (
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, c > -1 ? c : t.length)),
      (o = e(s))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = _f(r != null ? r : t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function vf(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ds(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function yf(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Ft(t.matched[r], n.matched[o]) &&
    Ui(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ft(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ui(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!xf(e[n], t[n])) return !1;
  return !0;
}
function xf(e, t) {
  return Array.isArray(e) ? hs(e, t) : Array.isArray(t) ? hs(t, e) : e === t;
}
function hs(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function _f(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), !(o === 1 || i === ".")))
      if (i === "..") o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
var fn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(fn || (fn = {}));
var en;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(en || (en = {}));
function Ef(e) {
  if (!e)
    if (At) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), bf(e);
}
const kf = /^[^#]+#/;
function Tf(e, t) {
  return e.replace(kf, "#") + t;
}
function Cf(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Xn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Af(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Cf(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function ps(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Rr = new Map();
function Sf(e, t) {
  Rr.set(e, t);
}
function Pf(e) {
  const t = Rr.get(e);
  return Rr.delete(e), t;
}
let Of = () => location.protocol + "//" + location.host;
function Ki(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      c = o.slice(l);
    return c[0] !== "/" && (c = "/" + c), ds(c, "");
  }
  return ds(n, e) + r + o;
}
function Rf(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const l = ({ state: h }) => {
    const m = Ki(e, location),
      y = n.value,
      C = t.value;
    let _ = 0;
    if (h) {
      if (((n.value = m), (t.value = h), i && i === y)) {
        i = null;
        return;
      }
      _ = C ? h.position - C.position : 0;
    } else r(m);
    o.forEach((E) => {
      E(n.value, y, {
        delta: _,
        type: fn.pop,
        direction: _ ? (_ > 0 ? en.forward : en.back) : en.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function u(h) {
    o.push(h);
    const m = () => {
      const y = o.indexOf(h);
      y > -1 && o.splice(y, 1);
    };
    return s.push(m), m;
  }
  function f() {
    const { history: h } = window;
    !h.state || h.replaceState(le({}, h.state, { scroll: Xn() }), "");
  }
  function d() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    { pauseListeners: c, listen: u, destroy: d }
  );
}
function gs(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Xn() : null,
  };
}
function Mf(e) {
  const { history: t, location: n } = window,
    r = { value: Ki(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(c, u, f) {
    const d = e.indexOf("#"),
      h =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c
          : Of() + e + c;
    try {
      t[f ? "replaceState" : "pushState"](u, "", h), (o.value = u);
    } catch (m) {
      console.error(m), n[f ? "replace" : "assign"](h);
    }
  }
  function i(c, u) {
    const f = le({}, t.state, gs(o.value.back, c, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(c, f, !0), (r.value = c);
  }
  function l(c, u) {
    const f = le({}, o.value, t.state, { forward: c, scroll: Xn() });
    s(f.current, f, !0);
    const d = le({}, gs(r.value, c, null), { position: f.position + 1 }, u);
    s(c, d, !1), (r.value = c);
  }
  return { location: r, state: o, push: l, replace: i };
}
function If(e) {
  e = Ef(e);
  const t = Mf(e),
    n = Rf(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = le(
    { location: "", base: e, go: r, createHref: Tf.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function $f(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function qi(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const rt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Vi = Bt("nf");
var ms;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(ms || (ms = {}));
function Lt(e, t) {
  return le(new Error(), { type: e, [Vi]: !0 }, t);
}
function ot(e, t) {
  return e instanceof Error && Vi in e && (t == null || !!(e.type & t));
}
const ws = "[^/]+?",
  Ff = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Lf = /[.+*?^${}()[\]/\\]/g;
function Nf(e, t) {
  const n = le({}, Ff, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const f = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let d = 0; d < u.length; d++) {
      const h = u[d];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (o += "/"), (o += h.value.replace(Lf, "\\$&")), (m += 40);
      else if (h.type === 1) {
        const { value: y, repeatable: C, optional: _, regexp: E } = h;
        s.push({ name: y, repeatable: C, optional: _ });
        const S = E || ws;
        if (S !== ws) {
          m += 10;
          try {
            new RegExp(`(${S})`);
          } catch (N) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${S}): ` + N.message
            );
          }
        }
        let F = C ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        d || (F = _ && u.length < 2 ? `(?:/${F})` : "/" + F),
          _ && (F += "?"),
          (o += F),
          (m += 20),
          _ && (m += -8),
          C && (m += -20),
          S === ".*" && (m += -50);
      }
      f.push(m);
    }
    r.push(f);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function l(u) {
    const f = u.match(i),
      d = {};
    if (!f) return null;
    for (let h = 1; h < f.length; h++) {
      const m = f[h] || "",
        y = s[h - 1];
      d[y.name] = m && y.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function c(u) {
    let f = "",
      d = !1;
    for (const h of e) {
      (!d || !f.endsWith("/")) && (f += "/"), (d = !1);
      for (const m of h)
        if (m.type === 0) f += m.value;
        else if (m.type === 1) {
          const { value: y, repeatable: C, optional: _ } = m,
            E = y in u ? u[y] : "";
          if (Array.isArray(E) && !C)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
            );
          const S = Array.isArray(E) ? E.join("/") : E;
          if (!S)
            if (_)
              h.length < 2 &&
                e.length > 1 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${y}"`);
          f += S;
        }
    }
    return f;
  }
  return { re: i, score: r, keys: s, parse: l, stringify: c };
}
function jf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function zf(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = jf(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (bs(r)) return 1;
    if (bs(o)) return -1;
  }
  return o.length - r.length;
}
function bs(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Df = { type: 0, value: "" },
  Bf = /[a-zA-Z0-9_]/;
function Hf(e) {
  if (!e) return [[]];
  if (e === "/") return [[Df]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let l = 0,
    c,
    u = "",
    f = "";
  function d() {
    !u ||
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (u && d(), i()) : c === ":" ? (d(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : Bf.test(c)
          ? h()
          : (d(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + c)
            : (n = 3)
          : (f += c);
        break;
      case 3:
        d(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), i(), o;
}
function Uf(e, t, n) {
  const r = Nf(Hf(e.path), n),
    o = le(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Kf(e, t) {
  const n = [],
    r = new Map();
  t = ys({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return r.get(f);
  }
  function s(f, d, h) {
    const m = !h,
      y = Vf(f);
    y.aliasOf = h && h.record;
    const C = ys(t, f),
      _ = [y];
    if ("alias" in f) {
      const F = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const N of F)
        _.push(
          le({}, y, {
            components: h ? h.record.components : y.components,
            path: N,
            aliasOf: h ? h.record : y,
          })
        );
    }
    let E, S;
    for (const F of _) {
      const { path: N } = F;
      if (d && N[0] !== "/") {
        const B = d.record.path,
          H = B[B.length - 1] === "/" ? "" : "/";
        F.path = d.record.path + (N && H + N);
      }
      if (
        ((E = Uf(F, d, C)),
        h
          ? h.alias.push(E)
          : ((S = S || E),
            S !== E && S.alias.push(E),
            m && f.name && !vs(E) && i(f.name)),
        "children" in y)
      ) {
        const B = y.children;
        for (let H = 0; H < B.length; H++) s(B[H], E, h && h.children[H]);
      }
      (h = h || E), c(E);
    }
    return S
      ? () => {
          i(S);
        }
      : Gt;
  }
  function i(f) {
    if (qi(f)) {
      const d = r.get(f);
      d &&
        (r.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(f) {
    let d = 0;
    for (
      ;
      d < n.length &&
      zf(f, n[d]) >= 0 &&
      (f.record.path !== n[d].record.path || !Wi(f, n[d]));

    )
      d++;
    n.splice(d, 0, f), f.record.name && !vs(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let h,
      m = {},
      y,
      C;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h)) throw Lt(1, { location: f });
      (C = h.record.name),
        (m = le(
          qf(
            d.params,
            h.keys.filter((S) => !S.optional).map((S) => S.name)
          ),
          f.params
        )),
        (y = h.stringify(m));
    } else if ("path" in f)
      (y = f.path),
        (h = n.find((S) => S.re.test(y))),
        h && ((m = h.parse(y)), (C = h.record.name));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((S) => S.re.test(d.path))), !h))
        throw Lt(1, { location: f, currentLocation: d });
      (C = h.record.name),
        (m = le({}, d.params, f.params)),
        (y = h.stringify(m));
    }
    const _ = [];
    let E = h;
    for (; E; ) _.unshift(E.record), (E = E.parent);
    return { name: C, path: y, params: m, matched: _, meta: Yf(_) };
  }
  return (
    e.forEach((f) => s(f)),
    {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function qf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Vf(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Wf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e ? e.components || {} : { default: e.component },
  };
}
function Wf(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function vs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Yf(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function ys(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Wi(e, t) {
  return t.children.some((n) => n === e || Wi(e, n));
}
const Yi = /#/g,
  Xf = /&/g,
  Jf = /\//g,
  Qf = /=/g,
  Zf = /\?/g,
  Xi = /\+/g,
  Gf = /%5B/g,
  ed = /%5D/g,
  Ji = /%5E/g,
  td = /%60/g,
  Qi = /%7B/g,
  nd = /%7C/g,
  Zi = /%7D/g,
  rd = /%20/g;
function ho(e) {
  return encodeURI("" + e)
    .replace(nd, "|")
    .replace(Gf, "[")
    .replace(ed, "]");
}
function od(e) {
  return ho(e).replace(Qi, "{").replace(Zi, "}").replace(Ji, "^");
}
function Mr(e) {
  return ho(e)
    .replace(Xi, "%2B")
    .replace(rd, "+")
    .replace(Yi, "%23")
    .replace(Xf, "%26")
    .replace(td, "`")
    .replace(Qi, "{")
    .replace(Zi, "}")
    .replace(Ji, "^");
}
function sd(e) {
  return Mr(e).replace(Qf, "%3D");
}
function id(e) {
  return ho(e).replace(Yi, "%23").replace(Zf, "%3F");
}
function ld(e) {
  return e == null ? "" : id(e).replace(Jf, "%2F");
}
function $n(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function cd(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Xi, " "),
      i = s.indexOf("="),
      l = $n(i < 0 ? s : s.slice(0, i)),
      c = i < 0 ? null : $n(s.slice(i + 1));
    if (l in t) {
      let u = t[l];
      Array.isArray(u) || (u = t[l] = [u]), u.push(c);
    } else t[l] = c;
  }
  return t;
}
function xs(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = sd(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(r) ? r.map((s) => s && Mr(s)) : [r && Mr(r)]).forEach(
      (s) => {
        s !== void 0 &&
          ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
      }
    );
  }
  return t;
}
function ad(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
function Kt() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function lt(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, l) => {
      const c = (d) => {
          d === !1
            ? l(Lt(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : $f(d)
            ? l(Lt(2, { from: t, to: d }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof d == "function" &&
                s.push(d),
              i());
        },
        u = e.call(r && r.instances[o], t, n, c);
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((d) => l(d));
    });
}
function cr(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      let l = s.components[i];
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (ud(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(lt(u, n, r, s, i));
        } else {
          let c = l();
          o.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const f = mf(u) ? u.default : u;
              s.components[i] = f;
              const h = (f.__vccOpts || f)[t];
              return h && lt(h, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function ud(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function _s(e) {
  const t = Qe(fo),
    n = Qe(Hi),
    r = Fe(() => t.resolve(ge(e.to))),
    o = Fe(() => {
      const { matched: c } = r.value,
        { length: u } = c,
        f = c[u - 1],
        d = n.matched;
      if (!f || !d.length) return -1;
      const h = d.findIndex(Ft.bind(null, f));
      if (h > -1) return h;
      const m = Es(c[u - 2]);
      return u > 1 && Es(f) === m && d[d.length - 1].path !== m
        ? d.findIndex(Ft.bind(null, c[u - 2]))
        : h;
    }),
    s = Fe(() => o.value > -1 && pd(n.params, r.value.params)),
    i = Fe(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Ui(n.params, r.value.params)
    );
  function l(c = {}) {
    return hd(c)
      ? t[ge(e.replace) ? "replace" : "push"](ge(e.to)).catch(Gt)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Fe(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l,
  };
}
const fd = fi({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: _s,
    setup(e, { slots: t }) {
      const n = Dt(_s(e)),
        { options: r } = Qe(fo),
        o = Fe(() => ({
          [ks(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ks(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : oo(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  dd = fd;
function hd(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function pd(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (
      !Array.isArray(o) ||
      o.length !== r.length ||
      r.some((s, i) => s !== o[i])
    )
      return !1;
  }
  return !0;
}
function Es(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ks = (e, t, n) => (e != null ? e : t != null ? t : n),
  gd = fi({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Qe(Or),
        o = Fe(() => e.route || r.value),
        s = Qe(fs, 0),
        i = Fe(() => o.value.matched[s]);
      vn(fs, s + 1), vn(gf, i), vn(Or, o);
      const l = Wr();
      return (
        Jt(
          () => [l.value, i.value, e.name],
          ([c, u, f], [d, h, m]) => {
            u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Ft(u, h) || !d) &&
                (u.enterCallbacks[f] || []).forEach((y) => y(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = i.value,
            f = u && u.components[e.name],
            d = e.name;
          if (!f) return Ts(n.default, { Component: f, route: c });
          const h = u.props[e.name],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            C = oo(
              f,
              le({}, m, t, {
                onVnodeUnmounted: (_) => {
                  _.component.isUnmounted && (u.instances[d] = null);
                },
                ref: l,
              })
            );
          return Ts(n.default, { Component: C, route: c }) || C;
        }
      );
    },
  });
function Ts(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const md = gd;
function wd(e) {
  const t = Kf(e.routes, e),
    n = e.parseQuery || cd,
    r = e.stringifyQuery || xs,
    o = e.history,
    s = Kt(),
    i = Kt(),
    l = Kt(),
    c = Dl(rt);
  let u = rt;
  At &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = ir.bind(null, (w) => "" + w),
    d = ir.bind(null, ld),
    h = ir.bind(null, $n);
  function m(w, $) {
    let O, j;
    return (
      qi(w) ? ((O = t.getRecordMatcher(w)), (j = $)) : (j = w), t.addRoute(j, O)
    );
  }
  function y(w) {
    const $ = t.getRecordMatcher(w);
    $ && t.removeRoute($);
  }
  function C() {
    return t.getRoutes().map((w) => w.record);
  }
  function _(w) {
    return !!t.getRecordMatcher(w);
  }
  function E(w, $) {
    if ((($ = le({}, $ || c.value)), typeof w == "string")) {
      const V = lr(n, w, $.path),
        a = t.resolve({ path: V.path }, $),
        p = o.createHref(V.fullPath);
      return le(V, a, {
        params: h(a.params),
        hash: $n(V.hash),
        redirectedFrom: void 0,
        href: p,
      });
    }
    let O;
    if ("path" in w) O = le({}, w, { path: lr(n, w.path, $.path).path });
    else {
      const V = le({}, w.params);
      for (const a in V) V[a] == null && delete V[a];
      (O = le({}, w, { params: d(w.params) })), ($.params = d($.params));
    }
    const j = t.resolve(O, $),
      oe = w.hash || "";
    j.params = f(h(j.params));
    const ae = vf(r, le({}, w, { hash: od(oe), path: j.path })),
      X = o.createHref(ae);
    return le(
      { fullPath: ae, hash: oe, query: r === xs ? ad(w.query) : w.query || {} },
      j,
      { redirectedFrom: void 0, href: X }
    );
  }
  function S(w) {
    return typeof w == "string" ? lr(n, w, c.value.path) : le({}, w);
  }
  function F(w, $) {
    if (u !== w) return Lt(8, { from: $, to: w });
  }
  function N(w) {
    return L(w);
  }
  function B(w) {
    return N(le(S(w), { replace: !0 }));
  }
  function H(w) {
    const $ = w.matched[w.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: O } = $;
      let j = typeof O == "function" ? O(w) : O;
      return (
        typeof j == "string" &&
          ((j = j.includes("?") || j.includes("#") ? (j = S(j)) : { path: j }),
          (j.params = {})),
        le({ query: w.query, hash: w.hash, params: w.params }, j)
      );
    }
  }
  function L(w, $) {
    const O = (u = E(w)),
      j = c.value,
      oe = w.state,
      ae = w.force,
      X = w.replace === !0,
      V = H(O);
    if (V) return L(le(S(V), { state: oe, force: ae, replace: X }), $ || O);
    const a = O;
    a.redirectedFrom = $;
    let p;
    return (
      !ae &&
        yf(r, j, O) &&
        ((p = Lt(16, { to: a, from: j })), xt(j, j, !0, !1)),
      (p ? Promise.resolve(p) : U(a, j))
        .catch((g) => (ot(g) ? (ot(g, 2) ? g : Te(g)) : ne(g, a, j)))
        .then((g) => {
          if (g) {
            if (ot(g, 2))
              return L(
                le(S(g.to), { state: oe, force: ae, replace: X }),
                $ || a
              );
          } else g = ee(a, j, !0, X, oe);
          return Y(a, j, g), g;
        })
    );
  }
  function k(w, $) {
    const O = F(w, $);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function U(w, $) {
    let O;
    const [j, oe, ae] = bd(w, $);
    O = cr(j.reverse(), "beforeRouteLeave", w, $);
    for (const V of j)
      V.leaveGuards.forEach((a) => {
        O.push(lt(a, w, $));
      });
    const X = k.bind(null, w, $);
    return (
      O.push(X),
      kt(O)
        .then(() => {
          O = [];
          for (const V of s.list()) O.push(lt(V, w, $));
          return O.push(X), kt(O);
        })
        .then(() => {
          O = cr(oe, "beforeRouteUpdate", w, $);
          for (const V of oe)
            V.updateGuards.forEach((a) => {
              O.push(lt(a, w, $));
            });
          return O.push(X), kt(O);
        })
        .then(() => {
          O = [];
          for (const V of w.matched)
            if (V.beforeEnter && !$.matched.includes(V))
              if (Array.isArray(V.beforeEnter))
                for (const a of V.beforeEnter) O.push(lt(a, w, $));
              else O.push(lt(V.beforeEnter, w, $));
          return O.push(X), kt(O);
        })
        .then(
          () => (
            w.matched.forEach((V) => (V.enterCallbacks = {})),
            (O = cr(ae, "beforeRouteEnter", w, $)),
            O.push(X),
            kt(O)
          )
        )
        .then(() => {
          O = [];
          for (const V of i.list()) O.push(lt(V, w, $));
          return O.push(X), kt(O);
        })
        .catch((V) => (ot(V, 8) ? V : Promise.reject(V)))
    );
  }
  function Y(w, $, O) {
    for (const j of l.list()) j(w, $, O);
  }
  function ee(w, $, O, j, oe) {
    const ae = F(w, $);
    if (ae) return ae;
    const X = $ === rt,
      V = At ? history.state : {};
    O &&
      (j || X
        ? o.replace(w.fullPath, le({ scroll: X && V && V.scroll }, oe))
        : o.push(w.fullPath, oe)),
      (c.value = w),
      xt(w, $, O, X),
      Te();
  }
  let M;
  function te() {
    M ||
      (M = o.listen((w, $, O) => {
        const j = E(w),
          oe = H(j);
        if (oe) {
          L(le(oe, { replace: !0 }), j).catch(Gt);
          return;
        }
        u = j;
        const ae = c.value;
        At && Sf(ps(ae.fullPath, O.delta), Xn()),
          U(j, ae)
            .catch((X) =>
              ot(X, 12)
                ? X
                : ot(X, 2)
                ? (L(X.to, j)
                    .then((V) => {
                      ot(V, 20) &&
                        !O.delta &&
                        O.type === fn.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Gt),
                  Promise.reject())
                : (O.delta && o.go(-O.delta, !1), ne(X, j, ae))
            )
            .then((X) => {
              (X = X || ee(j, ae, !1)),
                X &&
                  (O.delta
                    ? o.go(-O.delta, !1)
                    : O.type === fn.pop && ot(X, 20) && o.go(-1, !1)),
                Y(j, ae, X);
            })
            .catch(Gt);
      }));
  }
  let fe = Kt(),
    re = Kt(),
    de;
  function ne(w, $, O) {
    Te(w);
    const j = re.list();
    return (
      j.length ? j.forEach((oe) => oe(w, $, O)) : console.error(w),
      Promise.reject(w)
    );
  }
  function Q() {
    return de && c.value !== rt
      ? Promise.resolve()
      : new Promise((w, $) => {
          fe.add([w, $]);
        });
  }
  function Te(w) {
    return (
      de ||
        ((de = !w),
        te(),
        fe.list().forEach(([$, O]) => (w ? O(w) : $())),
        fe.reset()),
      w
    );
  }
  function xt(w, $, O, j) {
    const { scrollBehavior: oe } = e;
    if (!At || !oe) return Promise.resolve();
    const ae =
      (!O && Pf(ps(w.fullPath, 0))) ||
      ((j || !O) && history.state && history.state.scroll) ||
      null;
    return Xr()
      .then(() => oe(w, $, ae))
      .then((X) => X && Af(X))
      .catch((X) => ne(X, w, $));
  }
  const We = (w) => o.go(w);
  let Be;
  const Pe = new Set();
  return {
    currentRoute: c,
    addRoute: m,
    removeRoute: y,
    hasRoute: _,
    getRoutes: C,
    resolve: E,
    options: e,
    push: N,
    replace: B,
    go: We,
    back: () => We(-1),
    forward: () => We(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: re.add,
    isReady: Q,
    install(w) {
      const $ = this;
      w.component("RouterLink", dd),
        w.component("RouterView", md),
        (w.config.globalProperties.$router = $),
        Object.defineProperty(w.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => ge(c),
        }),
        At &&
          !Be &&
          c.value === rt &&
          ((Be = !0), N(o.location).catch((oe) => {}));
      const O = {};
      for (const oe in rt) O[oe] = Fe(() => c.value[oe]);
      w.provide(fo, $), w.provide(Hi, Dt(O)), w.provide(Or, c);
      const j = w.unmount;
      Pe.add(w),
        (w.unmount = function () {
          Pe.delete(w),
            Pe.size < 1 &&
              ((u = rt),
              M && M(),
              (M = null),
              (c.value = rt),
              (Be = !1),
              (de = !1)),
            j();
        });
    },
  };
}
function kt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function bd(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => Ft(u, l)) ? r.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((u) => Ft(u, c)) || o.push(c));
  }
  return [n, r, o];
}
var vd = "/portfolio-one/assets/page1-v1.0245ad35.webp",
  yd = "/portfolio-one/assets/page1-v2.3119d9d6.webp";
const xd = {},
  _d = { class: "flex lg:flex-row-reverse flex-col" },
  Ed = eo(
    '<div class="txt lg:w-3/5 w-auto m-5 z-20"><h1 class="text-eva text-center lg:text-4vw text-3vh text-orange-500"> \u041C\u043E\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u0430\u0439\u0442. </h1><p class="text-noto text-justify lg:text-3/2vw text-2vh"> \u0412\u0441\u0435 \u043C\u044B \u0441 \u0447\u0435\u0433\u043E-\u0442\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0438. \u042F, \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043D\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435. \u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C, \u0441\u0432\u043E\u0439 \u043F\u0443\u0442\u044C \u0432 FrontEnd-\u0435 \u044F \u043D\u0430\u0447\u0438\u043D\u0430\u043B \u0441 \u0441\u0430\u0439\u0442\u0430 HTMLBook \u0438 MDN. \u0418\u0437\u0440\u0435\u0434\u043A\u0430 \u0441\u043C\u043E\u0442\u0440\u0435\u043B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0432\u0438\u0434\u0435\u043E, \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u0442\u0435\u043C\u044B, \u0440\u0430\u0437\u0432\u0435 \u0447\u0442\u043E \u0438\u0437\u0431\u0435\u0433\u0430\u043B &quot;\u0441\u0430\u043C\u044B\u0435 \u0430\u0445\u0443### \u0441\u043F\u043E\u0441\u043E\u0431\u044B&quot;. \u041A\u0430\u0436\u0434\u0443\u044E \u0442\u0435\u043C\u0443 \u044F \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u043B \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435, \u043F\u0443\u0442\u0451\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0430\u0439\u0442\u0430, \u043D\u043E \u0442\u043E\u0433\u0434\u0430 \u044F \u043D\u0435 \u043E\u0441\u043E\u0431\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u043B \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0432\u044B\u0445 \u0448\u0430\u0433\u043E\u0432, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0451 \u044F \u0434\u0435\u043B\u0430\u043B \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435. \u0414\u043E \u043D\u0430\u0448\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0430\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0441\u0430\u0439\u0442\u0430 \u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0439 \u0430\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0430\u043C\u0438 &quot;\u0411\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u044B\u0439.png&quot; \u0444\u0430\u0439\u043B. \u0414\u0443\u043C\u0430\u044E, \u043A\u043E\u0434 \u0432\u0430\u043C \u043D\u0435 \u043E\u0441\u043E\u0431\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0442\u0443\u0442 \u0435\u0433\u043E \u043D\u0435\u0442. </p><div class="h-px my-5 dark:bg-white bg-black"></div><blockquote class="m-5 text-raleway lg:text-3/2vw text-2vh lg:text-right text-center text-orange-500"> \u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F: \u0410\u0432\u0433. 2019 - \u041E\u043A\u0442. 2019 (\u043F\u0440\u0438\u043C.) </blockquote></div><div class="img flex flex-col lg:w-2/5 w-auto"><img class="m-2 rounded-2xl object-cover border-2 dark:border-white border-black" src="' +
      vd +
      '" alt="\u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u0435\u0440\u0432\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0439 \u0441\u0430\u0439\u0442\u0430."><img class="m-2 rounded-2xl object-cover border-2 dark:border-white border-black" src="' +
      yd +
      '" alt="\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F."></div>',
    2
  ),
  kd = [Ed];
function Td(e, t) {
  return ye(), je("div", _d, kd);
}
var Cd = Wn(xd, [["render", Td]]);
const Ad = () => pf(() => import("./SiteTwoVue.63fe5499.js"), []),
  Sd = wd({
    history: If("/portfolio-one/"),
    routes: [
      { path: "/", name: "siteOne", component: Cd },
      { path: "/site-two/", name: "siteTwo", component: Ad },
    ],
  });
const po = ka(ff);
po.use(Qu());
po.use(Sd);
po.mount("#app");
export { Wn as _, eo as a, je as c, ye as o };
