// Old browser warning

var $buoop = {
  required: { e: -4, f: -3, o: -3, s: -2, c: -5 },
  insecure: true,
  unsupported: true,
  style: 'bottom',
  api: 2020.07,
  reminder: 0,
  reminderClosed: 48,
  l: 'en',
  text:
    "Oops, your browser ({brow_name}) is a tad outdated. This page is designed for modern browsers. <a class='gg-u-link gg-u-link--arrow'{up_but}>Update my browser</a>",
  noclose: true,
  no_permanent_hide: true,
};
function $buo_f() {
  var e = document.createElement('script');
  e.src = '//browser-update.org/update.min.js';
  document.body.appendChild(e);
}
try {
  document.addEventListener('DOMContentLoaded', $buo_f, false);
} catch (e) {
  window.attachEvent('onload', $buo_f);
}
