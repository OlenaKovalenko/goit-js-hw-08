function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(j,t),c?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=v();if(T(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function w(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function I(){var e=v(),n=T(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),I.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},I.flush=function(){return void 0===u?a:w(v())},I}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')};function h(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));var t,n;e&&(b.emailInput.value=null!==(t=e.email)&&void 0!==t?t:"",b.messageInput.value=null!==(n=e.message)&&void 0!==n?n:"")}b.form.addEventListener("input",e(t)((function(e){const t={email:b.emailInput.value,message:b.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value.trim())return void alert("Please fill in all the fields!");{const t={};new FormData(b.form).forEach(((e,n)=>{t[n]=e})),console.log(t),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}})),b.form.addEventListener("input",h),h();
//# sourceMappingURL=03-feedback.74e5bee5.js.map
