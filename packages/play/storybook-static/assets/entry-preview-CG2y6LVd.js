import { r as d, i as h, h as p, a as w, c as y } from './vue.esm-bundler-CvFCRGgQ.js';

var v = Object.defineProperty,
  P = (r, t) => {
    for (var e in t) v(r, e, { get: t[e], enumerable: !0 });
  };
const { sanitizeStoryContextUpdate: U } = __STORYBOOK_MODULE_PREVIEW_API__;
var b = {};
P(b, {
  applyDecorators: () => z,
  mount: () => A,
  parameters: () => C,
  render: () => j,
  renderToCanvas: () => N,
});
var j = (r, t) => {
    const { id: e, component: i } = t;
    if (!i)
      throw new Error(
        `Unable to render story ${e} as the component annotation is missing from the default export`,
      );
    return () => p(i, r, E(r, t));
  },
  I = async (r, t) => {
    globalThis?.PLUGINS_SETUP_FUNCTIONS &&
      (await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map((e) => e(r, t))));
  },
  f = new Map();
async function N(
  { storyFn: r, forceRemount: t, showMain: e, showException: i, storyContext: n, id: a },
  s,
) {
  const o = f.get(s);
  if (o && !t) {
    const l = r(),
      c = S(l, n);
    return (
      R(o.reactiveArgs, c),
      () => {
        g(o.vueApp, s);
      }
    );
  }
  o && t && g(o.vueApp, s);
  const u = y({
    setup() {
      n.args = d(n.args);
      const l = r(),
        c = S(l, n),
        _ = { vueApp: u, reactiveArgs: d(c) };
      return f.set(s, _), () => p(l);
    },
  });
  return (
    (u.config.errorHandler = (l, _c, _) => {
      var m;
      (m = window.__STORYBOOK_PREVIEW__) != null &&
      m.storyRenders.some((O) => O.id === a && O.phase === 'playing')
        ? setTimeout(() => {
            throw l;
          }, 0)
        : i(l);
    }),
    await I(u, n),
    u.mount(s),
    e(),
    () => {
      g(u, s);
    }
  );
}
function E(r, t) {
  const { argTypes: e } = t,
    i = Object.entries(r)
      .filter(([n]) => {
        var a, s;
        return (
          ((s = (a = e[n]) == null ? void 0 : a.table) == null ? void 0 : s.category) === 'slots'
        );
      })
      .map(([n, a]) => [n, typeof a === 'function' ? a : () => a]);
  return Object.fromEntries(i);
}
function S(r, t) {
  return r.props && h(r) ? r.props : t.args;
}
function R(r, t) {
  if (Object.keys(t).length === 0) return;
  const e = w(r) ? r : d(r);
  Object.keys(e).forEach((i) => {
    i in t || delete e[i];
  }),
    Object.assign(e, t);
}
function g(r, t) {
  r == null || r.unmount(), f.has(t) && f.delete(t);
}
function F(r) {
  return typeof r === 'function' ? { render: r, name: r.name } : r;
}
function T(r, t) {
  const e = r;
  return e === null
    ? null
    : typeof e === 'function'
      ? e
      : t
        ? { ...F(e), components: { ...(e.components || {}), story: t } }
        : {
            render() {
              return p(e);
            },
          };
}
function z(r, t) {
  return t.reduce(
    (e, i) => (n) => {
      let a,
        s = i((o) => {
          const u = U(o);
          return o && (u.args = Object.assign(n.args, u.args)), (a = e({ ...n, ...u })), a;
        }, n);
      return a || (a = e(n)), s === a ? a : T(s, () => p(a));
    },
    (e) => T(r(e)),
  );
}
var A = (r) => async (t, e) => (
    t &&
      (r.originalStoryFn = () => () =>
        p(t, e == null ? void 0 : e.props, e == null ? void 0 : e.slots)),
    await r.renderToCanvas(),
    r.canvas
  ),
  C = { renderer: 'vue3' };
export { z as applyDecorators, A as mount, C as parameters, j as render, N as renderToCanvas };
