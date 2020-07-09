!(function (e, t) {
  if ('function' == typeof define && define.amd) define(['exports'], t);
  else if ('undefined' != typeof exports) t(exports);
  else {
    var o = {};
    t(o), (e.bodyScrollLock = o);
  }
})(this, function (e) {
  'use strict';
  function t(e) {
    if (Array.isArray(e)) {
      for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
      return o;
    }
    return Array.from(e);
  }
  Object.defineProperty(e, '__esModule', { value: !0 });
  var o = !1;
  if ('undefined' != typeof window) {
    var n = {
      get passive() {
        o = !0;
      },
    };
    window.addEventListener('testPassive', null, n), window.removeEventListener('testPassive', null, n);
  }
  function i(e) {
    return c.some(function (t) {
      return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
    });
  }
  function r(e) {
    var t = e || window.event;
    return !!i(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
  }
  function l() {
    setTimeout(function () {
      void 0 !== v && ((document.body.style.paddingRight = v), (v = void 0)), void 0 !== s && ((document.body.style.overflow = s), (s = void 0));
    });
  }
  var d =
      'undefined' != typeof window &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) || ('MacIntel' === window.navigator.platform && 1 < window.navigator.maxTouchPoints)),
    c = [],
    a = !1,
    u = -1,
    s = void 0,
    v = void 0;
  (e.disableBodyScroll = function (e, n) {
    if (d) {
      if (!e)
        return void console.error(
          'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
        );
      if (
        e &&
        !c.some(function (t) {
          return t.targetElement === e;
        })
      ) {
        var l = { targetElement: e, options: n || {} };
        (c = [].concat(t(c), [l])),
          (e.ontouchstart = function (e) {
            1 === e.targetTouches.length && (u = e.targetTouches[0].clientY);
          }),
          (e.ontouchmove = function (t) {
            var o, n, l, d;
            1 === t.targetTouches.length &&
              ((n = e),
              (d = (o = t).targetTouches[0].clientY - u),
              i(o.target) ||
                ((n && 0 === n.scrollTop && 0 < d) || ((l = n) && l.scrollHeight - l.scrollTop <= l.clientHeight && d < 0)
                  ? r(o)
                  : o.stopPropagation()));
          }),
          a || (document.addEventListener('touchmove', r, o ? { passive: !1 } : void 0), (a = !0));
      }
    } else {
      (m = n),
        setTimeout(function () {
          if (void 0 === v) {
            var e = !!m && !0 === m.reserveScrollBarGap,
              t = window.innerWidth - document.documentElement.clientWidth;
            e && 0 < t && ((v = document.body.style.paddingRight), (document.body.style.paddingRight = t + 'px'));
          }
          void 0 === s && ((s = document.body.style.overflow), (document.body.style.overflow = 'hidden'));
        });
      var f = { targetElement: e, options: n || {} };
      c = [].concat(t(c), [f]);
    }
    var m;
  }),
    (e.clearAllBodyScrollLocks = function () {
      d
        ? (c.forEach(function (e) {
            (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
          }),
          a && (document.removeEventListener('touchmove', r, o ? { passive: !1 } : void 0), (a = !1)),
          (c = []),
          (u = -1))
        : (l(), (c = []));
    }),
    (e.enableBodyScroll = function (e) {
      if (d) {
        if (!e)
          return void console.error(
            'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
          );
        (e.ontouchstart = null),
          (e.ontouchmove = null),
          (c = c.filter(function (t) {
            return t.targetElement !== e;
          })),
          a && 0 === c.length && (document.removeEventListener('touchmove', r, o ? { passive: !1 } : void 0), (a = !1));
      } else
        (c = c.filter(function (t) {
          return t.targetElement !== e;
        })).length || l();
    });
});
