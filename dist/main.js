(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}var f=document.createElement("template");f.innerHTML='\n    <style>\n    step {\n      display: block;\n    }\n    step::before {\n      display: block;\n      margin-top: 20px;\n      font-size: 20px;\n      content: "步骤" counter(step-value) "：" attr(text);\n    }\n    step {\n      margin: 0 50px;\n      border-bottom: 1px solid;\n      counter-increment: step-value;\n    }\n    step:last-child {\n      border-bottom: none;\n    }</style>\n    <step></step>\n';var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(y,t);var r,o,a,l,s,p=(r=y,o=u(),function(){var t,e=i(r);if(o){var u=i(this).constructor;t=Reflect.construct(e,arguments,u)}else t=e.apply(this,arguments);return n(this,t)});function y(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(t=p.call(this))._shadowRoot=t.attachShadow({mode:"closed"}),t._shadowRoot.appendChild(f.content.cloneNode(!0)),t.$step=t._shadowRoot.querySelector("step"),t}return a=y,s=[{key:"observedAttributes",get:function(){return["text"]}}],(l=[{key:"text",get:function(){return this.getAttribute("text")},set:function(t){this.setAttribute("text",t)}},{key:"attributeChangedCallback",value:function(t,e,n){this.render()}},{key:"render",value:function(){this.$step.innerHTML=this.text}}])&&e(a.prototype,l),s&&e(a,s),y}(r(HTMLElement));function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){var e="function"==typeof Map?new Map:void 0;return y=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return b(t,arguments,v(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,t)},y(t)}function b(t,e,n){return b=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&h(o,n.prototype),o},b.apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=document.createElement("template");m.innerHTML='\n    <style>\n    case{\n      display: block;\n    }\n    case {\n      border-bottom: 2px solid;\n      counter-increment: case-value;\n    }\n    case::before {\n      display: block;\n      margin-top: 30px;\n      font-size: 30px;\n      font-weight: bold;\n      content: "例" counter(case-value) "：" attr(text);\n    }</style>\n    <case></case>\n';var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,r,o,u,c=(e=i,n=d(),function(){var t,r=v(e);if(n){var o=v(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)});function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=c.call(this)).shadow=t.attachShadow({mode:"closed"}),t.shadow.appendChild(m.content.cloneNode(!0)),t.$case=t.shadow.querySelector("case"),t}return r=i,u=[{key:"observedAttributes",get:function(){return["text"]}}],(o=[{key:"text",get:function(){return this.getAttribute("text")},set:function(t){this.setAttribute("text",t)}},{key:"attributeChangedCallback",value:function(t,e,n){this.render()}},{key:"render",value:function(){this.$case.setAttribute("text",this.text)}}])&&s(r.prototype,o),u&&s(r,u),i}(y(HTMLElement));window.customElements.define("codepen-step",a),window.customElements.define("codepen-case",w)})();