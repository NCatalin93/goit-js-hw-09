!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var u=r("ejkSG");document.querySelector(".form").addEventListener("submit",(function(n){var t=function(n){var t=n+1,i=o+r*n;(function(e,n){var t=Math.random()>.3;return new Promise(t?function(t,o){setTimeout((function(){t(e)}),n)}:function(t,o){setTimeout((function(){o(e)}),n)})})(t,i).then((function(){e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(i," ms"))})).catch((function(){e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(i," ms"))}))};n.preventDefault();for(var o=parseInt(document.querySelector('[name="delay"]').value),r=parseInt(document.querySelector('[name="step"]').value),i=parseInt(document.querySelector('[name="amount"]').value),c=0;c<i;c++)t(c)}))}();
//# sourceMappingURL=03-promises.3f27f4b6.js.map