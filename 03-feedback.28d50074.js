!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),s?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=g();if(S(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function I(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),I.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},I.flush=function(){return void 0===f?u:w(g())},I}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,S,T,w="feedback-form-state",I={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')};I.form.addEventListener("input",e(t)((function(e){var t={email:I.emailInput.value,message:I.messageInput.value};localStorage.setItem(w,JSON.stringify(t))}),500)),I.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""===n.value||""===r.value.trim())return void alert("Please fill in all the fields!");var i={};new FormData(I.form).forEach((function(e,t){i[t]=e})),console.log(i),localStorage.removeItem(w),e.currentTarget.reset()})),(T=JSON.parse(localStorage.getItem(w)))&&(I.emailInput.value=null!==(j=T.email)&&void 0!==j?j:"",I.messageInput.value=null!==(S=T.message)&&void 0!==S?S:"")}();
//# sourceMappingURL=03-feedback.28d50074.js.map