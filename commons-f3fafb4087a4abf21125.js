(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[351],{6862:function(e,t,r){"use strict";t.Z=void 0;var n,a=(n=r(2054))&&n.__esModule?n:{default:n};var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.reduce((function(t,r){return(0,a.default)(e,r)>(0,a.default)(e,t)?r:t}))};t.Z=o},2054:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(9739))&&n.__esModule?n:{default:n};var o=function(e,t){var r=(0,a.default)(e),n=(0,a.default)(t),o=(Math.max(r,n)+.05)/(Math.min(r,n)+.05);return Math.floor(100*o)/100};t.default=o},9739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7331))&&n.__esModule?n:{default:n};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.ignoreTransparency,n=void 0!==r&&r;if(!e)throw new TypeError("getRelativeLuminance() needs you to pass the color parameter.");var i=(0,a.default)(e),l=o(i.rgba,4),c=l[0],u=l[1],d=l[2],s=l[3];if(s<1&&!n)throw new TypeError("getRelativeLuminance() does not now how to handle transparency.");var f=[c,u,d].map((function(e){return e/255})),m=f.map((function(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),p=o(m,3),h=p[0],g=p[1],v=p[2],b=.2126*h+.7152*g+.0722*v;return b};t.default=i},3507:function(e,t,r){"use strict";var n,a=(n=r(1766))&&"object"==typeof n&&"default"in n?n.default:n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,l=(e.children,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size","children"])),c="mdi-icon "+(l.className||"");return a.createElement("svg",o({},l,{className:c,width:i,height:i,fill:r,viewBox:"0 0 24 24"}),a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))},l=a.memo?a.memo(i):i;e.exports=l},1307:function(e,t,r){"use strict";var n,a=(n=r(1766))&&"object"==typeof n&&"default"in n?n.default:n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,l=(e.children,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size","children"])),c="mdi-icon "+(l.className||"");return a.createElement("svg",o({},l,{className:c,width:i,height:i,fill:r,viewBox:"0 0 24 24"}),a.createElement("path",{d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"}))},l=a.memo?a.memo(i):i;e.exports=l},2449:function(e,t,r){"use strict";var n,a=(n=r(1766))&&"object"==typeof n&&"default"in n?n.default:n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,l=(e.children,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size","children"])),c="mdi-icon "+(l.className||"");return a.createElement("svg",o({},l,{className:c,width:i,height:i,fill:r,viewBox:"0 0 24 24"}),a.createElement("path",{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}))},l=a.memo?a.memo(i):i;e.exports=l},7331:function(e,t,r){var n=r(3183);e.exports=function(e){var t,r,a,o;if(t=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(e)){var i=t[1],l="cmyk"===(c=i.replace(/a$/,""))?4:3;r=n[c],a=t[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map((function(e,t){return/%$/.test(e)&&t===l?parseFloat(e)/100:(/%$/.test(e),parseFloat(e))})),i===c&&a.push(1),o=void 0===a[l]?1:a[l],a=a.slice(0,l),r[c]=function(){return a}}else if(/^#[A-Fa-f0-9]+$/.test(e)){var c;l=(c=e.replace(/^#/,"")).length;r=n.rgb,a=(a=c.split(3===l?/(.)/:/(..)/)).filter(Boolean).map((function(e){return 3===l?parseInt(e+e,16):parseInt(e,16)})),o=1,r.rgb=function(){return a},a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0)}else(r=n.keyword).keyword=function(){return e},a=e,o=1;var u={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{u.rgb=r.rgb(a)}catch(d){}try{u.hsl=r.hsl(a)}catch(d){}try{u.hsv=r.hsv(a)}catch(d){}try{u.cmyk=r.cmyk(a)}catch(d){}try{u.keyword=r.keyword(a)}catch(d){}return u.rgb&&(u.hex="#"+u.rgb.map((function(e){var t=e.toString(16);return 1===t.length?"0"+t:t})).join("")),u.rgb&&(u.rgba=u.rgb.concat(o)),u.hsl&&(u.hsla=u.hsl.concat(o)),u.hsv&&(u.hsva=u.hsv.concat(o)),u.cmyk&&(u.cmyka=u.cmyk.concat(o)),u}},5767:function(e){function t(e){var t,r,n=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.min(n,a,o),l=Math.max(n,a,o),c=l-i;return l==i?t=0:n==l?t=(a-o)/c:a==l?t=2+(o-n)/c:o==l&&(t=4+(n-a)/c),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+l)/2,[t,100*(l==i?0:r<=.5?c/(l+i):c/(2-l-i)),100*r]}function n(e){var t,r,n=e[0],a=e[1],o=e[2],i=Math.min(n,a,o),l=Math.max(n,a,o),c=l-i;return r=0==l?0:c/l*1e3/10,l==i?t=0:n==l?t=(a-o)/c:a==l?t=2+(o-n)/c:o==l&&(t=4+(n-a)/c),(t=Math.min(60*t,360))<0&&(t+=360),[t,r,l/255*1e3/10]}function a(e){var r=e[0],n=e[1],a=e[2];return[t(e)[0],100*(1/255*Math.min(r,Math.min(n,a))),100*(a=1-1/255*Math.max(r,Math.max(n,a)))]}function o(e){var t,r=e[0]/255,n=e[1]/255,a=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-a)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-a-t)/(1-t)||0),100*t]}function i(e){return E[JSON.stringify(e)]}function l(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]}function c(e){var t=l(e),r=t[0],n=t[1],a=t[2];return n/=100,a/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function u(e){var t,r,n,a,o,i=e[0]/360,l=e[1]/100,c=e[2]/100;if(0==l)return[o=255*c,o,o];t=2*c-(r=c<.5?c*(1+l):c+l-c*l),a=[0,0,0];for(var u=0;u<3;u++)(n=i+1/3*-(u-1))<0&&n++,n>1&&n--,o=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,a[u]=255*o;return a}function d(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,a=Math.floor(t)%6,o=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*o),c=255*n*(1-r*(1-o));n*=255;switch(a){case 0:return[n,c,i];case 1:return[l,n,i];case 2:return[i,n,c];case 3:return[i,l,n];case 4:return[c,i,n];case 5:return[n,i,l]}}function s(e){var t,n,a,o,i=e[0]/360,l=e[1]/100,c=e[2]/100,u=l+c;switch(u>1&&(l/=u,c/=u),a=6*i-(t=Math.floor(6*i)),0!=(1&t)&&(a=1-a),o=l+a*((n=1-c)-l),t){default:r=n,g=o,b=l;break;case 1:r=o,g=n,b=l;break;case 2:r=l,g=n,b=o;break;case 3:r=l,g=o,b=n;break;case 4:r=o,g=l,b=n;break;case 5:r=n,g=l,b=o}return[255*r,255*g,255*b]}function f(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function m(e){var t,r,n,a=e[0]/100,o=e[1]/100,i=e[2]/100;return r=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,t=(t=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]}function p(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function h(e){var t,r,n,a,o=e[0],i=e[1],l=e[2];return o<=8?a=(r=100*o/903.3)/100*7.787+16/116:(r=100*Math.pow((o+16)/116,3),a=Math.pow(r/100,1/3)),[t=t/95.047<=.008856?t=95.047*(i/500+a-16/116)/7.787:95.047*Math.pow(i/500+a,3),r,n=n/108.883<=.008859?n=108.883*(a-l/200-16/116)/7.787:108.883*Math.pow(a-l/200,3)]}function v(e){var t,r=e[0],n=e[1],a=e[2];return(t=360*Math.atan2(a,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+a*a),t]}function y(e){return m(h(e))}function w(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]}function k(e){return M[e]}e.exports={rgb2hsl:t,rgb2hsv:n,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:i,rgb2xyz:l,rgb2lab:c,rgb2lch:function(e){return v(c(e))},hsl2rgb:u,hsl2hsv:function(e){var t=e[0],r=e[1]/100,n=e[2]/100;if(0===n)return[0,0,0];return[t,100*(2*(r*=(n*=2)<=1?n:2-n)/(n+r)),100*((n+r)/2)]},hsl2hwb:function(e){return a(u(e))},hsl2cmyk:function(e){return o(u(e))},hsl2keyword:function(e){return i(u(e))},hsv2rgb:d,hsv2hsl:function(e){var t,r,n=e[0],a=e[1]/100,o=e[2]/100;return t=a*o,[n,100*(t=(t/=(r=(2-a)*o)<=1?r:2-r)||0),100*(r/=2)]},hsv2hwb:function(e){return a(d(e))},hsv2cmyk:function(e){return o(d(e))},hsv2keyword:function(e){return i(d(e))},hwb2rgb:s,hwb2hsl:function(e){return t(s(e))},hwb2hsv:function(e){return n(s(e))},hwb2cmyk:function(e){return o(s(e))},hwb2keyword:function(e){return i(s(e))},cmyk2rgb:f,cmyk2hsl:function(e){return t(f(e))},cmyk2hsv:function(e){return n(f(e))},cmyk2hwb:function(e){return a(f(e))},cmyk2keyword:function(e){return i(f(e))},keyword2rgb:k,keyword2hsl:function(e){return t(k(e))},keyword2hsv:function(e){return n(k(e))},keyword2hwb:function(e){return a(k(e))},keyword2cmyk:function(e){return o(k(e))},keyword2lab:function(e){return c(k(e))},keyword2xyz:function(e){return l(k(e))},xyz2rgb:m,xyz2lab:p,xyz2lch:function(e){return v(p(e))},lab2xyz:h,lab2rgb:y,lab2lch:v,lch2lab:w,lch2xyz:function(e){return h(w(e))},lch2rgb:function(e){return y(w(e))}};var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},E={};for(var x in M)E[JSON.stringify(M[x])]=x},3183:function(e,t,r){var n=r(5767),a=function(){return new u};for(var o in n){a[o+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),n[e](t)}}(o);var i=/(\w+)2(\w+)/.exec(o),l=i[1],c=i[2];(a[l]=a[l]||{})[c]=a[o]=function(e){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var r=n[e](t);if("string"==typeof r||void 0===r)return r;for(var a=0;a<r.length;a++)r[a]=Math.round(r[a]);return r}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(e,t){var r=t[0];return void 0===r?this.getValues(e):("number"==typeof r&&(r=Array.prototype.slice.call(t)),this.setValues(e,r))},u.prototype.setValues=function(e,t){return this.space=e,this.convs={},this.convs[e]=t,this},u.prototype.getValues=function(e){var t=this.convs[e];if(!t){var r=this.space,n=this.convs[r];t=a[r][e](n),this.convs[e]=t}return t},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(e){u.prototype[e]=function(t){return this.routeSpace(e,arguments)}})),e.exports=a},2925:function(e,t,r){"use strict";var n,a,o,i,l,c=r(1766),u=r(2585),d=r(6862),s=r(7399),f=r(1931),m=(0,s.Z)({hero:{width:"100vw",position:"relative",marginLeft:"-50vw",left:"50%",background:"#000",color:"#fff",overflow:"hidden"},heroInner:(n={width:"100%",margin:"auto",maxWidth:1e3,paddingLeft:48,paddingRight:48,paddingTop:48,paddingBottom:48,"& p, & h1, & h2, & h3, & h4, & h5, & h6":{marginBottom:"0.1em","&:last-child":{margin:0}}},n[f.Z.upTo.desktopSmall]={paddingLeft:36,paddingRight:36},n[f.Z.upTo.phone]={paddingLeft:24,paddingRight:24},n),firstElement:{marginTop:-24},heroSmall:{"& $heroInner":(a={paddingTop:24,paddingBottom:24},a[f.Z.upTo.desktopSmall]={paddingTop:16,paddingBottom:16},a)},heroNormal:{"& $heroInner":(o={paddingTop:48,paddingBottom:48},o[f.Z.upTo.desktopSmall]={paddingTop:24,paddingBottom:24},o)},heroLarge:{"& $heroInner":(i={paddingTop:56,paddingBottom:56},i[f.Z.upTo.desktopSmall]={paddingTop:36,paddingBottom:36},i)},heroHuge:{"& $heroInner":(l={paddingTop:72,paddingBottom:72},l[f.Z.upTo.desktopSmall]={paddingTop:48,paddingBottom:48},l)}});t.Z=function(e){var t=e.children,r=e.color,n=void 0===r?"#000":r,a=e.size,o=void 0===a?"normal":a,i=e.firstElement,l=void 0!==i&&i,s=e.className,f=e.innerClassName,p=m();return c.default.createElement("section",{className:(0,u.Z)(p.hero,[l&&p.firstElement],["small"===o&&p.heroSmall],["normal"===o&&p.heroNormal],["large"===o&&p.heroLarge],["huge"===o&&p.heroHuge],s),style:{backgroundColor:n,color:(0,d.Z)(n,["#000","#fff"])}},c.default.createElement("div",{className:(0,u.Z)(p.heroInner,f)},t))}},726:function(e,t,r){"use strict";var n,a,o=r(4942),i=r(3366),l=r(1766),c=r(2585),u=r(7399),d=r(1931),s=r(4236),f=["children","usePadding","width","darker","component"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,u.Z)({pageSection:(n={marginTop:24,marginBottom:24},n[d.Z.downTo.desktopSmall]={marginTop:48,marginBottom:48},n),pad:(a={marginTop:0,marginBottom:0,paddingTop:24,paddingBottom:24},a[d.Z.downTo.desktopSmall]={marginTop:0,marginBottom:0,paddingTop:48,paddingBottom:48},a),fullWidth:{width:"100vw",position:"relative",marginLeft:"-50vw",left:"50%"},fullWidthInner:{padding:"0 8px"},wider:{width:"100vw",position:"relative",marginLeft:"-50vw",left:"50%"},darkBg:{background:s.CA,paddingTop:36,paddingBottom:36,width:"100vw",position:"relative",marginLeft:"-50vw",left:"50%","& > div:not($widerInner)":{maxWidth:720,margin:"auto",paddingLeft:24,paddingRight:24}},widerInner:{maxWidth:960,margin:"auto",paddingLeft:24,paddingRight:24}});t.Z=function(e){var t,r=e.children,n=e.usePadding,a=e.width,o=void 0===a?"normal":a,u=e.darker,d=void 0!==u&&u,s=e.component,m=void 0===s?"section":s,g=(0,i.Z)(e,f),v=h();return l.default.createElement(m,p(p({},g),{},{className:(0,c.Z)(v.pageSection,[n&&v.pad,"full"===o&&v.fullWidth,"wider"===o&&v.wider,d&&v.darkBg]),children:l.default.createElement("div",{className:(0,c.Z)((t={},t[v.fullWidthInner]="full"===o,t[v.widerInner]="wider"===o,t))},r)}))}},9392:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var n,a,o,i,l=r(1766),c=r(4942),u=r(7399),d=r(3889),s=r(1931),f=r(9880);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=1e6,g=(0,u.Z)({header:{background:"#000",color:"#fff",height:56,borderBottom:"1px solid #fff",marginBottom:24,lineHeight:"56px"},headerInnerContainer:{maxWidth:960,margin:"auto",paddingLeft:24,paddingRight:24,display:"flex",alignItems:"center"},name:{fontWeight:700,textDecoration:"none",paddingLeft:12,paddingRight:12,outline:"none","&:hover, &:focus, &:active":{backgroundColor:"#fff",color:"#000"},"&:focus:not(:focus-visible)":{backgroundColor:"unset",color:"unset"}},spacer:{flexGrow:1},nav:(a={"& a:any-link":(n={textDecoration:"none",paddingLeft:12,paddingRight:12,lineHeight:"56px",height:56,display:"inline-block",outline:"none","&:hover, &:focus, &:active":{backgroundColor:"#fff",color:"#000"},"&:focus:not(:focus-visible)":{backgroundColor:"unset",color:"unset"}},n[s.Z.upTo.tablet]={paddingLeft:24,paddingRight:24,marginLeft:-16,marginRight:-16},n)},a[s.Z.upTo.tablet]=p(p({padding:16,paddingBottom:64,background:"#000",position:"fixed",bottom:0,left:0,right:0,width:"100vw",display:"flex",flexDirection:"column",gap:8,zIndex:h,transform:"translateY(100%)",animationFillMode:"forwards",animationDuration:f.UF.long,animationIterationCount:1,animationName:"$menuExit",maxHeight:"50vh",overflowY:"auto"},(0,f.ZP)("transform","long")),{},{"@media (max-height: 600px)":{paddingBottom:48}}),a),navBtn:(o={display:"none"},o[s.Z.upTo.tablet]={"&:checked":{"&~ $nav":{animationName:"$menuEnter"},"&~ $navBackdrop":{transform:"translate(0, 0)",opacity:1,transitionDelay:"0ms"},"&~ $navBtnLabel":{"&::before":{opacity:1},"&::after":{opacity:0}}}},o),navBtnLabel:(i={display:"none",fontSize:0,height:56,width:56,position:"relative",zIndex:1000001,marginRight:-20,cursor:"pointer"},i[s.Z.upTo.tablet]={display:"block"},i["&::after, &::before"]=p({position:"absolute",display:"block",top:0,left:0,right:0,bottom:0,textAlign:"center",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"65%"},(0,f.ZP)("opacity")),i["&::after"]={content:'""',opacity:1,backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iMjAiIHk9IjI1Ii8+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiB4PSIyMCIgeT0iNDUiLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjIwIiB5PSI2NSIvPjwvc3ZnPg==)"},i["&::before"]={content:'""',opacity:0,backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgc3Ryb2tlPSIjZmZmIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggc3Ryb2tlLXdpZHRoPSIxMCIgZD0iTTI1IDI1IEw3NSA3NXogTTc1IDI1IEwyNSA3NXoiLz48L3N2Zz4=)"},i),navBackdrop:p({display:"block",transform:"translate(2000vw, 2000vh)",position:"fixed",top:0,right:0,left:0,bottom:0,background:"rgba(0, 0, 0, 0.25)",opacity:0,zIndex:999999,transitionDelay:"0ms, "+f.UF.long+"ms"},(0,f.ZP)(["opacity","transform"],["long",1],["ease-out","linear"])),"@keyframes menuEnter":{"0%":{visibility:"hidden",transform:"translateY(100%)"},"0.01%":{visibility:"visible",transform:"translateY(100%)"},"100%":{visibility:"visible",transform:"translateY(0)"}},"@keyframes menuExit":{"0%":{visibility:"visible",transform:"translateY(0)"},"99.99%":{visibility:"visible",transform:"translateY(100%)"},"100%":{visibility:"hidden",transform:"translateY(100%)"}}}),v=function(){var e=g(),t=(0,l.useRef)(null),r=(0,l.useRef)(null);return l.default.createElement("header",{className:e.header},l.default.createElement("div",{className:e.headerInnerContainer},l.default.createElement(d.Z,{href:"/",className:e.name},"David Wheatley"),l.default.createElement("div",{"aria-hidden":!0,className:e.spacer}),l.default.createElement("input",{ref:r,onChange:function(){return t.current.style.animationName=""},type:"checkbox",id:"navbar-menu-btn",className:e.navBtn}),l.default.createElement("div",{onClick:function(){r.current&&(r.current.checked=!1)},"aria-hidden":!0,className:e.navBackdrop}),l.default.createElement("label",{htmlFor:"navbar-menu-btn",className:e.navBtnLabel},"Toggle menu"),l.default.createElement("nav",{ref:t,id:"navbar",style:{animationName:"none"},className:e.nav},l.default.createElement(d.Z,{href:"/"},"Home"),l.default.createElement(d.Z,{href:"/my-projects"},"My projects"),l.default.createElement(d.Z,{href:"/mobile-networking"},"Networking"),l.default.createElement(d.Z,{href:"/blog"},"Blog"))))},b=r(2449),y=r.n(b),w=r(1307),k=r.n(w),M=r(3507),E=r.n(M),x=r(7617),C=r.n(x),I=[{name:"Twitter",icon:l.default.createElement(y(),{size:24}),url:"https://twitter.com/davwheat_"},{name:"LinkedIn",icon:l.default.createElement(k(),{size:24}),url:"https://linkedin.com/in/davwheat"},{name:"GitHub",icon:l.default.createElement(E(),null),url:"https://github.com/davwheat"},{name:"Telegram",icon:l.default.createElement(C(),null),url:"https://t.me/davwheat"}],O=(0,u.Z)({grid:{display:"flex"},link:{width:48,height:48,border:"2px solid white",display:"flex",alignItems:"center",justifyContent:"center","&:focus, &:active, &:hover":{background:"#fff",color:"#000"},"& + &":{marginLeft:8}},icon:{width:24,height:24}});function Z(){var e=O();return l.default.createElement("aside",null,l.default.createElement("p",{className:"text-speak-up"},"Stalk me online"),l.default.createElement("div",{className:e.grid},I.map((function(t){var r=t.name,n=t.icon,a=t.url;return l.default.createElement("a",{href:a,key:r,target:"_blank",className:e.link,"aria-label":r},l.default.createElement("span",{className:e.icon},n))}))))}var j,N,P=r(1597),B=(0,u.Z)({container:{background:"#000",color:"#fff",padding:"48px 0",marginTop:24},content:{maxWidth:960,margin:"auto",padding:"0 24px"},topContainer:(j={display:"flex"},j[s.Z.upTo.desktopSmall]={flexDirection:"column"},j),about:(N={marginRight:16,"& p":{paddingBottom:4}},N[s.Z.upTo.desktopSmall]={marginRight:0,marginBottom:12},N),nav:{marginTop:24,display:"flex",justifyContent:"center",flexWrap:"wrap",marginBottom:-8,"& a":{padding:"8px 16px",textDecoration:"none",display:"inline-block",borderRight:"1px #ccc solid",borderLeft:"1px #ccc solid",marginBottom:8,fontWeight:400,"&:not(:first-child)":{marginLeft:-1},"&:hover, &:focus, &:active":{background:"#fff",color:"#000",borderColor:"#000"}}}}),T=(0,u.Z)({separator:{display:"inline-block",verticalAlign:"middle",transformOrigin:"center",transform:"scale(2)",marginLeft:8,marginRight:8,color:"#fff"}}),S=function(){var e=T();return l.default.createElement("span",{className:e.separator},"•")},D=function(){var e=B(),t=(0,P.useStaticQuery)("3360246512").siteBuildMetadata;return l.default.createElement("footer",{className:e.container},l.default.createElement("main",{className:e.content},l.default.createElement("section",{className:e.topContainer},l.default.createElement("div",{className:e.about},l.default.createElement("p",{className:"text-speak-up"},"© ",(new Date).getFullYear()," David Wheatley"),l.default.createElement("p",{className:"text-whisper"},l.default.createElement("a",{href:"https://github.com/davwheat/personal-portfolio",rel:"noopener noreferrer"},"View this site on GitHub"),l.default.createElement(S,null),"This site collects anonymised analytics that does not track individual users."," ",l.default.createElement("a",{href:"https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web",rel:"noopener noreferrer"},"Learn more about Cloudflare analytics")),l.default.createElement("p",{className:"text-whisper"},"Last updated ",t.buildTime,".")),l.default.createElement(Z,null)),l.default.createElement("nav",{className:e.nav},l.default.createElement(d.Z,{href:"/"},"Home"),l.default.createElement(d.Z,{href:"/blog"},"Blog"),l.default.createElement(d.Z,{href:"/my-projects"},"My projects"),l.default.createElement(d.Z,{href:"/mobile-networking"},"Networking"),l.default.createElement("a",{href:"https://github.com/davwheat",rel:"noopener noreferrer"},"My GitHub"))))},L=r(2013),H=function(e){var t=e.description,r=e.meta,n=e.title,a=(0,P.useStaticQuery)("63159454").site,o=t||a.siteMetadata.description;return l.default.createElement(l.default.Fragment,null,l.default.createElement(L.Title,null,n?n+" | "+a.siteMetadata.title:a.siteMetadata.title),l.default.createElement(L.Meta,{name:"description",content:o}),l.default.createElement(L.Meta,{name:"og:title",content:n}),l.default.createElement(L.Meta,{name:"og:description",content:o}),l.default.createElement(L.Meta,{name:"og:type",content:"website"}),l.default.createElement(L.Meta,{name:"twitter:card",content:"summary"}),l.default.createElement(L.Meta,{name:"twitter:title",content:n}),l.default.createElement(L.Meta,{name:"twitter:description",content:o}),l.default.createElement(L.Meta,{name:"twitter:creator",content:"@davwheat"}),r&&r.map((function(e,t){return l.default.createElement(L.Meta,{key:e.name+"--"+t,name:e.name,content:e.content})})))},R=r(2185),z=r(6373),A=r(4268),W=r(4236),V=(0,A.Z)({typography:{allVariants:{fontFamily:"'Jost*', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}},palette:{primary:{main:W.tE},secondary:{main:W.vB}},props:{MuiChip:{variant:"outlined"}}}),$=r(2519),_=(0,R.Z)({mainContent:{maxWidth:768,margin:"auto",paddingLeft:24,paddingRight:24,flex:"1",width:"100%"}}),F=function(e){var t=e.children,r=e.title,n=e.description,a=e.location,o=_();return l.default.createElement($.$C,{location:a},l.default.createElement(z.Z,{theme:V},l.default.createElement(H,{title:r,description:n}),l.default.createElement(v,null),l.default.createElement("main",{className:o.mainContent},t),l.default.createElement(D,null)))}},3889:function(e,t,r){"use strict";var n=r(4942),a=r(3366),o=r(1766),i=r(1597),l=r(7399),c=r(2585),u=["href","children","className","internal"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=(0,l.Z)({link:{fontWeight:700,textDecoration:"underline"}});t.Z=function(e){var t,r=e.href,l=e.children,f=e.className,m=e.internal,p=(0,a.Z)(e,u),h=s(),g=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:(0,c.Z)(h.link,f)},p);return!1===m||!0!==m&&(null!=(t=r)&&t.match(/^(https?:\/\/|mailto:)/))?o.default.createElement("a",Object.assign({href:r,rel:"noopener"},g),l):o.default.createElement(i.Link,Object.assign({to:r},g),l)}},7617:function(e,t,r){var n=r(1766);function a(e){return n.createElement("svg",e,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M43.72 92.58c35-15.2 58.3-25.3 70-30.2 33.3-13.9 40.3-16.3 44.8-16.4 1 0 3.2.2 4.7 1.4 1.2 1 1.5 2.3 1.7 3.3s.4 3.1.2 4.7c-1.8 19-9.6 65.1-13.6 86.3-1.7 9-5 12-8.2 12.3-7 .6-12.3-4.6-19-9-10.6-6.9-16.5-11.2-26.8-18-11.9-7.8-4.2-12.1 2.6-19.1 1.8-1.8 32.5-29.8 33.1-32.3.1-.3.1-1.5-.6-2.1s-1.7-.4-2.5-.2c-1.1.2-17.9 11.4-50.6 33.5-4.8 3.3-9.1 4.9-13 4.8-4.3-.1-12.5-2.4-18.7-4.4-7.5-2.4-13.5-3.7-13-7.9.3-2.2 3.3-4.4 8.9-6.7z",clipRule:"evenodd"}))}a.defaultProps={viewBox:"0 0 200 200"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=commons-f3fafb4087a4abf21125.js.map