!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return u.default(e)||a.default(e)||l.default(e)||f.default()};var u=c(o("kMC0W")),a=c(o("7AJDX")),f=c(o("8CtQK")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,O=_||x||Function("return this")(),j=Object.prototype.toString,h=Math.max,M=Math.min,S=function(){return O.Date.now()};function w(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){return l=e,a=setTimeout(m,t),c?v(e):u}function g(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function m(){var e=S();if(g(e))return b(e);a=setTimeout(m,function(e){var r=t-(e-f);return s?M(r,i-(e-l)):r}(e))}function b(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function _(){var e=S(),r=g(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return y(f);if(s)return a=setTimeout(m,t),v(f)}return void 0===a&&(a=setTimeout(m,t)),u}return t=N(t)||0,T(r)&&(c=!!r.leading,i=(s="maxWait"in r)?h(N(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),_.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},_.flush=function(){return void 0===a?u:b(S())},_}function T(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=g.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):y.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),w(e,t,{leading:n,maxWait:t,trailing:o})};var P="feedback-form-state",A=document.querySelector(".feedback-form"),I=document.querySelectorAll("input"),k=e(i)(I);console.log(I),A.addEventListener("input",e(s)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(P,JSON.stringify(E))}),500)),A.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email.value,n=t.message.value;if(""===r||""===n)return void alert("Please fill in all the fields!");e.currentTarget.reset(),localStorage.removeItem(P),console.log(E)}));var E={};!function(e){var t=function(e){k.forEach((function(t){t.value=n[e]}))},r=localStorage.getItem(P),n=JSON.parse(r);if(console.log(r),console.log(n),r)for(var o in n)t(o)}()}();
//# sourceMappingURL=03-feedback.e488d89a.js.map
