"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_common_product-details_js"],{

/***/ "./assets/js/papathemes/also-bought-game.js":
/*!**************************************************!*\
  !*** ./assets/js/papathemes/also-bought-game.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlsoBoughtGame)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_to_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
}
function reportFormValidity(form) {
  var valid = true;
  if (form && form.checkValidity) {
    valid = form.checkValidity();
    if (!valid) {
      if (form.reportValidity) {
        form.reportValidity();
      } else {
        valid = true;
      }
    }
  }
  return valid;
}
var AlsoBoughtGame = /*#__PURE__*/function () {
  /**
   * @param {ProductDetails} parentProductDetails
   * @param {*} param1
   */
  function AlsoBoughtGame(parentProductDetails, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$thumbnailTemplat = _ref.thumbnailTemplate,
      thumbnailTemplate = _ref$thumbnailTemplat === void 0 ? "\n            <div class=\"productView-alsoBought-thumbnail-item {{#checked}}is-checked{{/checked}}\" data-thumbnail-product-id=\"{{id}}\">\n                <div class=\"productView-alsoBought-item-image\">\n                    <a class=\"productView-alsoBought-thumbnail-label\" href=\"{{url}}\" target=\"_blank\"><img class=\"lazyload\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\"></a>\n                </div>\n            </div>\n        " : _ref$thumbnailTemplat,
      _ref$productDetailsTe = _ref.productDetailsTemplate,
      productDetailsTemplate = _ref$productDetailsTe === void 0 ? "\n            <div class=\"productView-alsoBought-item-inner\">\n                <div class=\"productView-alsoBought-item-check\">\n                    <div class=\"form-field\">\n                        <input\n                            class=\"form-checkbox\"\n                            type=\"checkbox\"\n                            name=\"productView-alsoBought-item-checkbox\"\n                            id=\"productView-alsoBought-item-checkbox-{{id}}\"\n                            value=\"{{id}}\"\n                            data-also-bought-checkbox\n                            data-purchasable\n                            aria-label=\"{{name}}\">\n                        <div class=\"form-label\">\n                            <div class=\"productView-alsoBought-item-image\">\n                                {{#saleBadge}}\n                                    <div class=\"sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}\">\n                                        <span class=\"sale-text\">{{&saleBadge}}</span>\n                                    </div>\n                                {{/saleBadge}}\n                                {{&customBadge}}\n                                <a class=\"productView-alsoBought-item-image-thumbnail\" href=\"{{url}}\" target=\"_blank\">\n                                    <img class=\"lazyload card-image\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\">\n                                    {{#hoverImage}}\n                                        <img\n                                            data-src=\"{{url}}\"\n                                            class=\"card-image lazyload\"\n                                            alt=\"{{name}}\"\n                                            title=\"{{name}}\">\n                                    {{/hoverImage}}\n                                </a>\n                            </div>\n                            <div class=\"productView-alsoBought-item-content\">\n                                <a class=\"productView-alsoBought-item-title\"href=\"{{url}}\" target=\"_blank\">{{name}}</a>\n                                {{#ratingHtml}}\n                                    <p class=\"productView-alsoBought-item-rating card-text card-text--rating\" data-test-info-type=\"productRating\">\n                                        <span class=\"rating--small\">\n                                            {{&ratingHtml}}\n                                        </span>\n                                    </p>\n                                {{/ratingHtml}}\n                                <div class=\"productView-alsoBought-item-price\">\n                                    {{&loginPriceHtml}}\n                                    {{&priceHtml}}\n                                    {{&priceRangeHtml}}\n                                </div>\n                                {{#hideQty}}\n                                    {{&buttonToggleHtml}}\n                                {{/hideQty}}\n                                {{&optionsToggleHtml}}\n                                <div class=\"productView-alsoBought-item-form {{#hideQty}}_hide-quantity{{/hideQty}}\" id=\"productView-alsoBought-item-form-{{id}}\" data-product-content>\n                                    {{&formHtml}}\n                                </div>\n                                <div class=\"productView-alsoBought-item-form-overlay\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        " : _ref$productDetailsTe,
      _ref$priceTemplate = _ref.priceTemplate,
      priceTemplate = _ref$priceTemplate === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <!-- Sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\" {{#nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{priceLabel}}\n                    </span>\n                    <span class=\"price-now-label\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{salePriceLabel}}\n                    </span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{price.formatted}}</span>\n                </div>\n                <!-- Non-sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                <!-- Retail price -->\n                {{&retailPriceHtml}}\n                {{&taxLabelHtml}}\n            </div>\n        " : _ref$priceTemplate,
      _ref$priceRangeTempla = _ref.priceRangeTemplate,
      priceRangeTemplate = _ref$priceRangeTempla === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\">{{priceLabel}}</span>\n                    <span class=\"price-now-label\" style=\"display: none;\">{{salePriceLabel}}</span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{priceRange.min.formatted}} - {{priceRange.max.formatted}}</span>\n                    {{&taxLabelHtml}}\n                </div>\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" style=\"display: none;\">\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                {{&retailPriceRangeHtml}}\n                {{&retailPriceHtml}}\n            </div>\n        " : _ref$priceRangeTempla,
      _ref$taxLabelTemplate = _ref.taxLabelTemplate,
      taxLabelTemplate = _ref$taxLabelTemplate === void 0 ? "\n            <abbr title=\"{{title}}\">{{text}}</abbr>\n        " : _ref$taxLabelTemplate,
      _ref$retailPriceRange = _ref.retailPriceRangeTemplate,
      retailPriceRangeTemplate = _ref$retailPriceRange === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-price-{{taxDataPrefix}} class=\"price price--rrp\">{{retailPriceRange.min.formatted}} - {{retailPriceRange.max.formatted}}</span>\n            </div>\n        " : _ref$retailPriceRange,
      _ref$retailPriceTempl = _ref.retailPriceTemplate,
      retailPriceTemplate = _ref$retailPriceTempl === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\" {{^retailPrice}}style=\"display: none;{{/retailPrice}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-{{taxDataPrefix}} class=\"price price--rrp\">\n                    {{retailPrice.formatted}}\n                </span>\n            </div>\n        " : _ref$retailPriceTempl,
      _ref$loginPriceTempla = _ref.loginPriceTemplate,
      loginPriceTemplate = _ref$loginPriceTempla === void 0 ? "\n            <a class=\"price--login\" href=\"{{loginUrl}}\" translate>{{loginForPriceTxt}}</a>\n        " : _ref$loginPriceTempla,
      _ref$optionsToggleTem = _ref.optionsToggleTemplate,
      optionsToggleTemplate = _ref$optionsToggleTem === void 0 ? "\n            <div class=\"productView-alsoBought-item-formToggle\">\n                <label class=\"form-label\" for=\"productView-alsoBought-item-checkbox-{{id}}\" data-label-collapsible></label>\n                <a class=\"button button--primary\" href=\"#productView-alsoBought-item-form-{{id}}\" data-choose-option=\"{{chooseOptionsTxt}}\" data-options-collapsible>\n                    <span>{{chooseOptionsTxt}}</span>\n                    <svg class=\"icon\"><use xlink:href=\"#icon-cart-add\"></use></svg>\n                </a>\n            </div>\n        " : _ref$optionsToggleTem,
      _ref$buttonToggleTemp = _ref.buttonToggleTemplate,
      buttonToggleTemplate = _ref$buttonToggleTemp === void 0 ? "\n            <div class=\"productView-alsoBought-item-formToggle _single-product {{#hideQty}}_hide-quantity{{/hideQty}} {{#purchasability}}_purchasability{{/purchasability}}\">\n                <label class=\"form-label\" for=\"productView-alsoBought-item-checkbox-{{id}}\" data-label-collapsible></label>\n                <label for=\"productView-alsoBought-item-checkbox-{{id}}\" class=\"button button--primary\" data-label-collapsible>\n                    <span>{{txtSelect}}</span>\n                    <svg class=\"icon\"><use xlink:href=\"#icon-cart-add\"></use></svg>\n                </label>\n                {{#purchasability}}\n                    <button class=\"button button--outstock\">{{purchasability}}</button>\n                {{/purchasability}}\n            </div>\n        " : _ref$buttonToggleTemp,
      _ref$simpleFormTempla = _ref.simpleFormTemplate,
      simpleFormTemplate = _ref$simpleFormTempla === void 0 ? "\n            <form class=\"form form--addToCart _single-product\" method=\"post\" action=\"{{addToCartUrl}}\" enctype=\"multipart/form-data\" data-cart-item-add {{#hideQty}}style=\"display: none;\"{{/hideQty}}\">\n                <input type=\"hidden\" name=\"action\" value=\"add\">\n                <input type=\"hidden\" name=\"product_id\" value=\"{{id}}\"/>\n                <div class=\"form-increment\" data-quantity-also-bought-change>\n                    <button class=\"button button--icon\" data-action=\"dec\">\n                        <span class=\"is-srOnly\">{{quantityDecreaseTxt}}</span>\n                        <i class=\"icon\" aria-hidden=\"true\">\n                            <svg>\n                                <use xlink:href=\"#icon-minus\"/>\n                            </svg>\n                        </i>\n                    </button>\n                    <input class=\"form-input form-input--incrementTotal\"\n                        data-product-quantity\n                        name=\"qty[]\"\n                        type=\"tel\"\n                        value=\"{{qty}}\"\n                        data-quantity-min=\"{{qty}}\"\n                        data-quantity-max=\"{{maxPurchaseQuantity}}\"\n                        min=\"0\"\n                        pattern=\"[0-9]*\"\n                        aria-live=\"polite\"\n                        aria-label=\"{{txtQuantity}}\">\n                    <button class=\"button button--icon\" data-action=\"inc\">\n                        <span class=\"is-srOnly\">{{quantityIncreaseTxt}}</span>\n                        <i class=\"icon\" aria-hidden=\"true\">\n                            <svg>\n                                <use xlink:href=\"#icon-add\"/>\n                            </svg>\n                        </i>\n                    </button>\n                </div>\n                {{#purchasability}}\n                    <button class=\"button button--outstock _purchasability\">{{purchasability}}</button>\n                {{/purchasability}}\n            </form>\n        " : _ref$simpleFormTempla,
      _ref$loadingTemplate = _ref.loadingTemplate,
      loadingTemplate = _ref$loadingTemplate === void 0 ? "\n            <div class=\"loading\"><img src=\"{{loadingImg}}\" alt=\"loading\"/></div>\n        " : _ref$loadingTemplate,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
      _ref$ratingStarHtmlFu = _ref.ratingStarHtmlFunc,
      ratingStarHtmlFunc = _ref$ratingStarHtmlFu === void 0 ? function (isFull) {
        if (isFull === void 0) {
          isFull = true;
        }
        return "\n            <span class=\"icon icon--rating" + (isFull ? 'Full' : 'Empty') + "\">\n                <svg><use xlink:href=\"#icon-star\" /></svg>\n            </span>\n        ";
      } : _ref$ratingStarHtmlFu,
      _ref$customBadgeTempl = _ref.customBadgeTemplate,
      customBadgeTemplate = _ref$customBadgeTempl === void 0 ? function (value) {
        return "\n            <div class=\"sale-flag-side sale-flag-side--custom\">\n                <span class=\"sale-text\">" + value + "</span>\n            </div>\n        ";
      } : _ref$customBadgeTempl,
      _ref$showProductRatin = _ref.showProductRating,
      showProductRating = _ref$showProductRatin === void 0 ? true : _ref$showProductRatin;
    this.parentProductDetails = parentProductDetails;
    this.thumbnailTemplate = thumbnailTemplate;
    this.productDetailsTemplate = productDetailsTemplate;
    this.priceTemplate = priceTemplate;
    this.priceRangeTemplate = priceRangeTemplate;
    this.taxLabelTemplate = taxLabelTemplate;
    this.retailPriceRangeTemplate = retailPriceRangeTemplate;
    this.retailPriceTemplate = retailPriceTemplate;
    this.loginPriceTemplate = loginPriceTemplate;
    this.optionsToggleTemplate = optionsToggleTemplate;
    this.buttonToggleTemplate = buttonToggleTemplate;
    this.simpleFormTemplate = simpleFormTemplate;
    this.loadingTemplate = loadingTemplate;
    this.templateCustomTags = templateCustomTags;
    this.context = this.parentProductDetails.context;
    this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
    this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
    this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
    this.config = this.$alsoBoughtEl.data('alsoBought') || {};
    this.moneyWithTax = this.config.samplePriceWithTax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(this.config.samplePriceWithTax, this.context.money) : null;
    this.moneyWithoutTax = this.config.samplePriceWithoutTax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(this.config.samplePriceWithoutTax, this.context.money) : null;
    this.showProductRating = showProductRating;
    this.ratingStarHtmlFunc = ratingStarHtmlFunc;
    this.customBadgeTemplate = customBadgeTemplate;
    this.product_sale_badges = this.context.product_sale_badges;
    this.product_sale_label = this.context.product_sale_label;

    // try to guess any price on the page
    this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax
    // is default currency?
    || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null)
    // any price on the page
    || $('[data-product-price-without-tax], [data-product-price-with-tax]').get().reduce(function (_money, el) {
      return _money || (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)($(el).text());
    }, null)
    // use currency code
    || (this.context.activeCurrencyCode ? Object.assign({}, this.context.money, {
      currency_token: " " + this.context.activeCurrencyCode + " "
    }) : this.context.money);
    this.products = [];
    this.productNodes = [];
    this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
    this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);
    var thumbSize = this.context.alsobought_thumbnail_size.split('x');
    this.thumbnailWidth = Number(thumbSize[0]) || 100;
    this.thumbnailHeight = Number(thumbSize[1]) || 100;
    this.retrieveAlsoBoughtProducts();
    this.listenQuantityAlsoBoughtChange();
    this.handleClickOptions();
    $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
    $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
  }
  var _proto = AlsoBoughtGame.prototype;
  _proto.currencyFormat = function currencyFormat(value) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.currencyFormat)(value, (this.config.includeTax ? this.moneyWithTax : this.moneyWithoutTax) || this.moneyFallback);
  };
  _proto.retrieveAlsoBoughtProducts = function retrieveAlsoBoughtProducts() {
    var _this = this;
    var $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
    var $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
    /** @type {number[]} */
    var productIds = $productEls.get().map(function (el) {
      return $(el).data('productId');
    });
    if ($productEls.length > 0) {
      this.$alsoBoughtEl.removeClass('u-hiddenVisually');
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query (\n                            $productIds: [Int!],\n                            $productsCount: Int,\n                            " + (!this.config.requireLogin ? "\n                                $includeTax: Boolean,\n                                $currencyCode: currencyCode,\n                            " : '') + "\n                                $imgWidth: Int!,\n                            $imgHeight: Int!\n                        ) {\n                            site {\n                                products (\n                                    entityIds: $productIds,\n                                    first: $productsCount\n                                ) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            path\n                                            addToCartUrl\n                                            minPurchaseQuantity\n                                            maxPurchaseQuantity\n                                            defaultImage {\n                                                url (\n                                                    width: $imgWidth,\n                                                    height: $imgHeight\n                                                )\n                                            }\n                                            images (first: 2) {\n                                                edges {\n                                                  node {\n                                                    url (\n                                                        width: $imgWidth,\n                                                        height: $imgHeight\n                                                    )\n                                                    isDefault\n                                                  }\n                                                }\n                                            }\n                                            inventory {\n                                                isInStock\n                                            }\n                                            availabilityV2 {\n                                                status\n                                                ... on ProductUnavailable {\n                                                    message\n                                                }\n                                                ... on ProductPreOrder {\n                                                    message\n                                                    status\n                                                }\n                                            }\n                                            " + (!this.config.requireLogin ? "\n                                                prices (\n                                                    includeTax: $includeTax,\n                                                    currencyCode: $currencyCode\n                                                ) {\n                                                    price {\n                                                        ...MoneyFields\n                                                    }\n                                                    salePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    basePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    retailPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    mapPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    priceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                    retailPriceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                }\n                                            " : '') + "\n                                            productOptions (\n                                                first: 1\n                                            ) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                    }\n                                                }\n                                            }\n                                            reviewSummary {\n                                                averageRating\n                                            }\n                                            customFields {\n                                                edges {\n                                                    node {\n                                                        name\n                                                        value\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                                settings {\n                                    tax {\n                                        plp\n                                    }\n                                    inventory {\n                                        defaultOutOfStockMessage\n                                    }\n                                }\n                            }\n                        }\n                        " + (!this.config.requireLogin ? "\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment MoneyRangeFields on MoneyRange {\n                                min {\n                                    ...MoneyFields\n                                }\n                                max {\n                                    ...MoneyFields\n                                }\n                            }\n                        " : '') + "\n                    ",
          variables: {
            productIds: productIds,
            productsCount: productIds.length,
            includeTax: this.config.includeTax,
            currencyCode: this.context.activeCurrencyCode,
            imgWidth: this.thumbnailWidth,
            imgHeight: this.thumbnailHeight
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + this.context.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          var txtOutOfStock = resp.data.site.settings.inventory.defaultOutOfStockMessage;
          resp.data.site.products.edges.forEach(function (_ref2) {
            var _node$defaultImage, _node$prices, _node$prices2, _node$prices3, _node$prices4, _node$prices5, _node$reviewSummary;
            var node = _ref2.node;
            _this.productNodes.push(node);
            var id = node.entityId;
            var name = node.name;
            var url = node.path;
            var addToCartUrl = node.addToCartUrl;
            var hideQty = !_this.context.show_product_quantity_box;
            var showQty = _this.context.show_product_quantity_box;
            var qty = hideQty ? node.minPurchaseQuantity || 1 : node.minPurchaseQuantity || 0;
            var loadingImg = _this.context.loadingImg;
            var img = ((_node$defaultImage = node.defaultImage) == null ? void 0 : _node$defaultImage.url) || _this.context.defaultProductImage;
            var $productEl = $productEls.filter("[data-product-id=\"" + id + "\"]");
            var taxClassPrefix = _this.config.includeTax ? 'withTax' : 'withoutTax';
            var taxDataPrefix = _this.config.includeTax ? 'with-tax' : 'without-tax';
            var priceLabel = _this.context.pdp_price_label;
            var salePriceLabel = _this.context.pdp_sale_price_label;
            var nonSalePriceLabel = _this.context.pdp_non_sale_price_label;
            var retailPriceLabel = _this.context.pdp_retail_price_label;
            var chooseOptionsTxt = _this.context.chooseOptionsTxt;
            var txtSelect = _this.context.txtSelect;
            var txtQuantity = _this.context.txtQuantity;
            var quantityDecreaseTxt = _this.context.txtQuantityDecrease.replace(/(of).*/g, "$1 " + node.name);
            var quantityIncreaseTxt = _this.context.txtQuantityIncrease.replace(/(of).*/g, "$1 " + node.name);
            var maxPurchaseQuantity = node.maxPurchaseQuantity || 0;
            var loginForPriceTxt = _this.context.loginForPriceTxt;
            var loginUrl = _this.context.loginUrl || '/login.php';
            var checked = _this.context.alsobought_checked;
            var showRatingHtml = _this.context.showProductRating;
            var product_sale_badges = _this.context.product_sale_badges;
            var product_sale_label = _this.context.product_sale_label;
            var available = node.availabilityV2 && node.availabilityV2.status === 'Unavailable' ? node.availabilityV2.message || _this.context.txtUnavailable : null;
            var preOrder = node.availabilityV2 && node.availabilityV2.status === 'Preorder' ? node.availabilityV2.message || _this.context.txtPreOrder : null;
            var outOfStock = !(node.inventory.isInStock && node.availabilityV2.status === 'Unavailable') && !node.inventory.isInStock ? node.availabilityV2.description || txtOutOfStock : null;
            var purchasability = available || preOrder || outOfStock;
            var hoverProductImage = function hoverProductImage(images) {
              try {
                var image = images.find(function (imgHover) {
                  return !imgHover.node.isDefault;
                });
                return image ? image.node : null;
              } catch (er) {
                return null;
              }
            };
            var hoverImage = hoverProductImage(node.images.edges);
            var ratingHtml = function ratingHtml(rating) {
              return !rating ? '' : Array.from(Array(5).keys()).map(function (i) {
                return _this.ratingStarHtmlFunc(rating > i);
              }).join('');
            };
            var saleBadge = function saleBadge(prices) {
              // return '' if no sale price
              if (!(prices != null && prices.salePrice) || prices.salePrice.value === prices.basePrice.value) return '';

              // Return '' badge
              if (_this.product_sale_badges === 'hide') return '';
              // return 'sale' badge
              if (_this.product_sale_badges === 'label') return _this.product_sale_label;
              var n = prices.salePrice ? Math.round((prices.basePrice.value - prices.salePrice.value) / prices.basePrice.value * 100) : 0;
              var percent = n > 0 ? n + "%" : '';

              // return 'sale {percent}' badge
              if (_this.product_sale_label.includes('{percent}')) return _this.product_sale_label.replace('{percent}', percent);

              // recent 'sale ...%' badge
              return _this.product_sale_label + "<span>" + percent + "</span>";
            };
            var customBadge = function customBadge(field) {
              if (field && field.length > 0) {
                var list = field.filter(function (e) {
                  return e.node.name === '__badge';
                });
                return list.map(function (i) {
                  return _this.customBadgeTemplate(i.node.value);
                }).join('');
              }
              return null;
            };
            var price = !_this.config.requireLogin && (_node$prices = node.prices) != null && _node$prices.price ? {
              formatted: _this.currencyFormat(node.prices.price.value)
            } : null;
            var nonSalePrice = !_this.config.requireLogin && (_node$prices2 = node.prices) != null && _node$prices2.basePrice && node.prices.price && node.prices.basePrice.value !== node.prices.price.value ? {
              formatted: _this.currencyFormat(node.prices.basePrice.value)
            } : null;
            var retailPrice = !_this.config.requireLogin && (_node$prices3 = node.prices) != null && _node$prices3.retailPrice ? {
              formatted: _this.currencyFormat(node.prices.retailPrice.value)
            } : null;
            var priceRange = !_this.config.requireLogin && (_node$prices4 = node.prices) != null && _node$prices4.priceRange && node.prices.priceRange.min.value !== node.prices.priceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.priceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.priceRange.max.value)
              }
            } : null;
            var retailPriceRange = !_this.config.requireLogin && (_node$prices5 = node.prices) != null && _node$prices5.retailPriceRange && node.prices.retailPriceRange.min.value !== node.prices.retailPriceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.max.value)
              }
            } : null;
            var loginPriceHtml = _this.config.requireLogin ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.loginPriceTemplate, {
              loginUrl: loginUrl,
              loginForPriceTxt: loginForPriceTxt
            }, null, _this.templateCustomTags) : '';
            var taxLabelHtml = _this.config.showTaxLabel ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.taxLabelTemplate, {
              title: _this.config.includeTax ? _this.context.includingTaxTxt : _this.context.excludingTaxTxt,
              text: _this.config.includeTax ? _this.context.priceWithTaxTxt : _this.context.priceWithoutTaxTxt
            }, null, _this.templateCustomTags) : '';
            var retailPriceRangeHtml = retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.retailPriceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPriceRange: retailPriceRange
            }, null, _this.templateCustomTags) : '';
            var retailPriceHtml = !retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.retailPriceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPrice: retailPrice
            }, null, _this.templateCustomTags) : '';
            var priceRangeHtml = priceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.priceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              priceRange: priceRange,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceRangeHtml: retailPriceRangeHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var optionsToggleHtml = node.productOptions.edges.length > 0 ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.optionsToggleTemplate, {
              id: id,
              chooseOptionsTxt: chooseOptionsTxt
            }, null, _this.templateCustomTags) : '';
            var buttonToggleHtml = node.productOptions.edges.length === 0 ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.buttonToggleTemplate, {
              id: id,
              txtSelect: txtSelect,
              hideQty: hideQty,
              purchasability: purchasability
            }, null, _this.templateCustomTags) : '';
            var priceHtml = !_this.config.requireLogin && !priceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.priceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              price: price,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var formHtml = node.productOptions.edges.length === 0 ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.simpleFormTemplate, {
              id: id,
              addToCartUrl: addToCartUrl,
              hideQty: hideQty,
              qty: qty,
              txtQuantity: txtQuantity,
              quantityDecreaseTxt: quantityDecreaseTxt,
              quantityIncreaseTxt: quantityIncreaseTxt,
              maxPurchaseQuantity: maxPurchaseQuantity,
              purchasability: purchasability
            }, null, _this.templateCustomTags) : '';
            var detailsHtml = mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.productDetailsTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              hoverImage: hoverImage,
              loginPriceHtml: loginPriceHtml,
              priceHtml: priceHtml,
              priceRangeHtml: priceRangeHtml,
              optionsToggleHtml: optionsToggleHtml,
              buttonToggleHtml: buttonToggleHtml,
              formHtml: formHtml,
              checked: checked,
              showRatingHtml: showRatingHtml,
              ratingHtml: _this.showProductRating ? ratingHtml((_node$reviewSummary = node.reviewSummary) == null ? void 0 : _node$reviewSummary.averageRating) : '',
              product_sale_badges: product_sale_badges,
              product_sale_label: product_sale_label,
              saleBadge: saleBadge(node.prices),
              customBadge: customBadge(node.customFields.edges.length > 0 ? node.customFields.edges : ''),
              showQty: showQty,
              hideQty: hideQty
            }, null, _this.templateCustomTags);
            var thumbnailHtml = $(mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.thumbnailTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              checked: checked
            }, null, _this.templateCustomTags));
            $productEl.html(detailsHtml);
            $thumbnails.append(thumbnailHtml);

            // load simple product details
            if (node.productOptions.edges.length === 0) {
              var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this.context, {
                enableAlsoBought: false
              }));

              // listen price change
              product.$scope.on('price-change', function () {
                return _this.updateTotalPrice();
              });

              // store the product object for later use
              _this.products.push(product);
              $productEl.data('productDetails', product);
            }

            // init foundation collapsible
            (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
              $context: $productEl
            });

            // bind events
            $productEl.find('[data-also-bought-checkbox]').on('change', _this.onAlsoBoughtCheckboxChange.bind(_this, $productEl));
            $productEl.find('[data-options-collapsible]').on(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.open, _this.onOptionsOpen.bind(_this, $productEl));
            _this.updateTotalPrice();
            _this.updateAddSelectedToCartButton();
          });
        }
      });

      // init parent product item
      var $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
      (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
        $context: $parentProductEl
      });
      $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl));

      // listen parent product price change
      this.parentProductDetails.$scope.on('price-change', function () {
        return _this.updateTotalPrice();
      });
    }
  };
  _proto.updateTotalPrice = function updateTotalPrice() {
    var _this2 = this;
    // stop showing total price if require login
    if (this.config.requireLogin) {
      return;
    }
    var productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
      return $(el).val();
    });
    var priceById = Object.assign({}, this.productNodes.filter(function (node) {
      return node.prices && node.prices.price;
    }).reduce(function (_priceById, node) {
      var _node$entityId, _Object$assign;
      return Object.assign({}, _priceById, (_Object$assign = {}, _Object$assign[node.entityId] = (_node$entityId = {}, _node$entityId[_this2.config.includeTax ? 'with_tax' : 'without_tax'] = {
        value: node.prices.price.value,
        formatted: _this2.currencyFormat(node.prices.price.value)
      }, _node$entityId), _Object$assign));
    }, {}), this.products.filter(function (product) {
      return product.price && product.productId;
    }).reduce(function (_priceById, product) {
      var _Object$assign2;
      return Object.assign({}, _priceById, (_Object$assign2 = {}, _Object$assign2[product.productId] = product.price, _Object$assign2));
    }, {}));
    var productQty = {};
    productIds.forEach(function (id) {
      var inputQty = $("[data-product-id=\"" + id + "\"] [data-product-quantity]", _this2.$alsoBoughtEl);
      if (inputQty.length) {
        productQty[id] = {
          quantity: parseInt(inputQty.val(), 10)
        };
      }
    });
    var mergeProduct = {};
    Object.keys(priceById).map(function (key) {
      var _Object$assign3;
      mergeProduct = Object.assign({}, mergeProduct, (_Object$assign3 = {}, _Object$assign3[key] = Object.assign({}, priceById[key], productQty[key]), _Object$assign3));
      return mergeProduct;
    });

    // merge productNodes & product details objects
    var products = Object.keys(mergeProduct).map(function (productId) {
      return {
        productId: productId,
        price: mergeProduct[productId]
      };
    });
    var total = [this.parentProductDetails].concat(products).filter(function (product) {
      return productIds.indexOf(product.productId) > -1;
    }).reduce(function (_ref3, _ref4) {
      var _ref3$with_tax = _ref3.with_tax,
        with_tax = _ref3$with_tax === void 0 ? 0 : _ref3$with_tax,
        _ref3$without_tax = _ref3.without_tax,
        without_tax = _ref3$without_tax === void 0 ? 0 : _ref3$without_tax,
        money_with_tax = _ref3.money_with_tax,
        money_without_tax = _ref3.money_without_tax;
      var price = _ref4.price;
      return {
        with_tax: price && price.with_tax ? with_tax + price.with_tax.value * (price.quantity ? price.quantity : 1) : null,
        without_tax: price && price.without_tax ? without_tax + price.without_tax.value * (price.quantity ? price.quantity : 1) : null,
        money_with_tax: money_with_tax || (price && price.with_tax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(price.with_tax.formatted, _this2.context.money) : null),
        money_without_tax: money_without_tax || (price && price.without_tax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(price.without_tax.formatted, _this2.context.money) : null)
      };
    }, {});
    var $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
    var $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);
    if (total.with_tax) {
      $('[data-price]', $withTax).html(this.currencyFormat(total.with_tax, total.money_with_tax));
      $withTax.show();
      if (total.without_tax) {
        $('[data-tax-label]', $withTax).show();
      } else {
        $('[data-tax-label]', $withTax).hide();
      }
    } else {
      $withTax.hide();
    }
    if (total.without_tax) {
      $('[data-price]', $withoutTax).html(this.currencyFormat(total.without_tax, total.money_without_tax));
      $withoutTax.show();
      if (total.with_tax) {
        $('[data-tax-label]', $withoutTax).show();
      } else {
        $('[data-tax-label]', $withoutTax).hide();
      }
    } else {
      $withoutTax.hide();
    }
  };
  _proto.onAddAllButtonClick = function onAddAllButtonClick(e) {
    e.preventDefault();
    $('[data-also-bought-checkbox]', this.$alsoBoughtEl).prop('checked', true).trigger('change');
  };
  _proto.handleClickOptions = function handleClickOptions() {
    this.$alsoBoughtEl.on('click', '[data-options-collapsible]:not(.is-open)', function (event) {
      var _product$$form;
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $productEl = $target.closest('[data-product-id]');
      var product = $productEl.data('productDetails');
      var $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      if (!(product != null && (_product$$form = product.$form) != null && _product$$form.get(0).checkValidity())) {
        $alsoBoughtCheckbox.prop('checked', false).trigger('change');
      }
    });
    this.$alsoBoughtEl.on('click', '[data-options-collapsible]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var $alsoBoughtCheckbox = $el.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      if (!$alsoBoughtCheckbox.data('purchasable')) {
        $alsoBoughtCheckbox.prop('checked', false).trigger('change');
      }
      $('body').toggleClass('_has-optionModal', $el.hasClass('is-open'));
    });
    $('body').on('click', '[data-label-collapsible]', function (e) {
      var $el = $(e.currentTarget);
      var $productEl = $el.closest('.productView-alsoBought-item');
      var $optionToggle = $el.siblings('[data-options-collapsible]');
      var $optionContent = $productEl.find('[data-cart-item-add]');
      var $alsoBoughtCheckbox = $el.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      if (!$optionContent.length || !$alsoBoughtCheckbox.data('purchasable')) {
        $optionToggle.trigger('click');
      }
    });

    // Close Modal option
    $('body').on('click', '.productView-alsoBought-item-form-overlay, #optionClose', function (e) {
      var $el = $(e.currentTarget);
      var $optionContentItem = $el.closest('.productView-alsoBought-item-content');
      var $optionToggle = $optionContentItem.find('[data-options-collapsible]');
      if ($optionToggle.hasClass('is-open')) {
        $optionToggle.trigger('click');
      }
    });

    // checkValidity Modal option
    $('body').on('click', '#optionDone', function (event) {
      var $target = $(event.currentTarget);
      var $productEl = $target.closest('[data-product-id]');
      var $optionToggle = $productEl.find('[data-options-collapsible]');
      var product = $productEl.data('productDetails');
      var success = reportFormValidity(product.$form.get(0));
      if (success) {
        $optionToggle.trigger('click');
      }
    });
  };
  _proto.onAddSelectedButtonClick = function onAddSelectedButtonClick(e) {
    e.preventDefault();
    this.addSelectedProductsToCart();
  };
  _proto.onAlsoBoughtCheckboxChange = function onAlsoBoughtCheckboxChange($productEl, e) {
    var $cb = $(e.target);
    var $label = $("label[for=\"" + $cb.attr('id') + "\"]", this.$alsoBoughtEl);
    var $thumb = $("[data-thumbnail-product-id=\"" + $productEl.data('productId') + "\"]", this.$alsoBoughtEl);
    var cbId = $cb.attr('id');
    var $labelForCheckbox = $("label[for=\"" + cbId + "\"]");
    var $inputQty = $productEl.find('[data-product-quantity]');
    var inputQty = parseInt($inputQty.val(), 10);
    var quantityMin = parseInt($inputQty.data('quantityMin'), 10);
    var qty = quantityMin || 1;

    // open (close) product options form if checkbox is checked (unchecked)
    if ($cb.prop('checked')) {
      $label.addClass('is-checked');
      $thumb.addClass('is-checked');
      $labelForCheckbox.addClass('is-checked');
      if (!inputQty) {
        $inputQty.val(qty);
      }
    } else {
      $label.removeClass('is-checked');
      $thumb.removeClass('is-checked');
      $labelForCheckbox.removeClass('is-checked');
    }
    this.updateTotalPrice();
    this.updateAddSelectedToCartButton();
  };
  _proto.onOptionsOpen = function onOptionsOpen($productEl) {
    var $inputQty = $productEl.find('[data-product-quantity]');
    var inputQty = parseInt($inputQty.val(), 10);
    var quantityMin = parseInt($inputQty.data('quantityMin'), 10);
    var qty = quantityMin || 1;
    var $alsoBoughtCheckbox = $productEl.find('[data-also-bought-checkbox]');
    var $form = $productEl.find('[data-cart-item-add]');
    if ($form.hasClass('_unPurchase')) {
      return;
    }
    if (!inputQty) {
      $inputQty.val(qty);
    }
    $alsoBoughtCheckbox.prop('checked', true);
    $alsoBoughtCheckbox.trigger('change');
    if ($productEl.data('productDetails')) {
      return;
    }
    this.loadProductDetails($productEl);
  };
  _proto.loadProductDetails = /*#__PURE__*/function () {
    var _loadProductDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($productEl) {
      var _this3 = this,
        _product$$form2;
      var productId, $content, $alsoBoughtCheckbox, product, check, $form, cbId, $labelForCheckbox;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            productId = $productEl.data('productId');
            $content = $productEl.find('[data-product-content]');
            $alsoBoughtCheckbox = $content.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
            $content.html(mustache__WEBPACK_IMPORTED_MODULE_7___default().render(this.loadingTemplate, {
              loadingImg: this.context.loadingImg
            }, null, this.templateCustomTags));
            _context.next = 6;
            return new Promise(function (resolve) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, {
                template: 'papathemes/also-bought-game/product-details'
              }, function (err, resp) {
                if (err || !resp) {
                  return;
                }
                $content.html($(resp).html());
                var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context, {
                  enableAlsoBought: false
                }), null, true);

                // listen price change
                var $inputQty = $content.find('[data-product-quantity]');
                var inputQty = parseInt($inputQty.val(), 10);
                var quantityMin = parseInt($inputQty.data('quantityMin'), 10);
                var qty = quantityMin || 1;
                product.$scope.on('price-change', function () {
                  return _this3.updateTotalPrice();
                });
                if (!inputQty) {
                  $inputQty.val(qty);
                }

                // listen product-view-update event
                // for toggle checkbox depending on product pachasibility
                product.$scope.on('product-view-update', function (event, data) {
                  var _productForm$$form;
                  var productForm = $productEl.data('productDetails');
                  var check = productForm == null || (_productForm$$form = productForm.$form) == null ? void 0 : _productForm$$form.get(0).checkValidity();
                  if (!data.purchasable || !data.instock || !check) {
                    $alsoBoughtCheckbox.prop('checked', false).trigger('change').data('purchasable', false);
                  } else {
                    $alsoBoughtCheckbox.prop('checked', true).trigger('change').data('purchasable', true);
                  }
                });

                // store the product object for later use
                _this3.products.push(product);
                $productEl.data('productDetails', product);
                _this3.updateTotalPrice();
                resolve();
              });
            });
          case 6:
            // The product has optional not required
            product = $productEl.data('productDetails');
            check = product == null || (_product$$form2 = product.$form) == null ? void 0 : _product$$form2.get(0).checkValidity();
            if (check) {
              $alsoBoughtCheckbox.prop('checked', true).trigger('change').data('purchasable', true);
            }
            $form = $productEl.find('[data-cart-item-add]');
            cbId = $alsoBoughtCheckbox.attr('id');
            $labelForCheckbox = $("label[for=\"" + cbId + "\"]");
            if ($form.hasClass('_unPurchase')) {
              $alsoBoughtCheckbox.prop('checked', false);
              $alsoBoughtCheckbox.trigger('change');
              $labelForCheckbox.addClass('_disable');
            }
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function loadProductDetails(_x) {
      return _loadProductDetails.apply(this, arguments);
    }
    return loadProductDetails;
  }();
  _proto.listenQuantityAlsoBoughtChange = function listenQuantityAlsoBoughtChange() {
    this.$alsoBoughtEl.on('click', '[data-quantity-also-bought-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $input = $(event.currentTarget).siblings('input');
      var $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = parseInt($input.val(), 10);

      // If action is incrementing
      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty >= 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      $input.val(qty);
      if (qty > 0) {
        $alsoBoughtCheckbox.prop('checked', true);
        $alsoBoughtCheckbox.trigger('change');
      } else {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
    this.$alsoBoughtEl.on('input', '[data-quantity-also-bought-change] input', function (event) {
      event.preventDefault();
      var $input = $(event.currentTarget);
      var $alsoBoughtCheckbox = $input.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      var qty = $input.val();
      if (qty > 0) {
        $alsoBoughtCheckbox.prop('checked', true);
        $alsoBoughtCheckbox.trigger('change');
      } else {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
    this.$alsoBoughtEl.on('blur', '[data-quantity-also-bought-change] input', function (event) {
      event.preventDefault();
      var $input = $(event.currentTarget);
      if ($input.val() === '') {
        $input.val('0');
      }
    });
    // --------------------------------------------------------------------
  };
  _proto.updateAddSelectedToCartButton = function updateAddSelectedToCartButton() {
    var $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
    var $checked = $all.filter(':checked');
    var $btns = $('[data-buttons]', this.$alsoBoughtEl);
    if ($checked.length > 0) {
      $btns.addClass('show');
    } else {
      $btns.removeClass('show');
    }
  }

  // No longer used. Keep for other third-party scripts compatibility.
  /**
   * Promise to Call after the parent product is added to add also-bought products.
   */;
  _proto.parentProductAddedToCart =
  /*#__PURE__*/
  function () {
    var _parentProductAddedToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this4 = this;
      var promises, success;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // console.log('parent product added');
            promises = [];
            success = true;
            this.products.forEach(function (product) {
              if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _this4.addProductToCart(product);
                      case 3:
                        _context2.next = 5;
                        return delay(1000);
                      case 5:
                        _context2.next = 10;
                        break;
                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](0);
                        success = false;
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 7]]);
                })));
              }
            });
            _context3.next = 5;
            return promiseSerial(promises);
          case 5:
            return _context3.abrupt("return", success);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function parentProductAddedToCart() {
      return _parentProductAddedToCart.apply(this, arguments);
    }
    return parentProductAddedToCart;
  }();
  _proto.addSelectedProductsToCart = /*#__PURE__*/function () {
    var _addSelectedProductsToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var productIds, results, newProductAdded, success, $addToCartBtn, originalBtnVal, waitMessage, _yield$this$parentPro, err, resp, errorMsg, $productEls, i, productId, $productEl, product, _yield$product$addPro, _err, _resp, _errorMsg, _resp$data, $toggle, _results$, _product, _resp2, modal;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            /** @type {string[]} */
            productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
              return $(el).val();
            });
            /** @type {Array<{product: ProductDetails, resp: any}>} */
            results = [];
            newProductAdded = [];
            success = true;
            $addToCartBtn = $('[data-add-selected]', this.$alsoBoughtEl);
            originalBtnVal = $addToCartBtn.html();
            waitMessage = $addToCartBtn.data('waitMessage');
            $addToCartBtn.html(waitMessage).prop('disabled', true);

            // add parent product to cart
            if (!(productIds.indexOf(this.parentProductDetails.productId) > -1)) {
              _context4.next = 25;
              break;
            }
            success = reportFormValidity(this.parentProductDetails.$form.get(0));
            if (!success) {
              _context4.next = 25;
              break;
            }
            _context4.next = 13;
            return this.parentProductDetails.addProductToCartAsync();
          case 13:
            _yield$this$parentPro = _context4.sent;
            err = _yield$this$parentPro[0];
            resp = _yield$this$parentPro[1];
            errorMsg = err || resp.data.error;
            if (!errorMsg) {
              _context4.next = 23;
              break;
            }
            _context4.next = 20;
            return new (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default())({
              text: errorMsg,
              type: 'error'
            });
          case 20:
            success = false;
            _context4.next = 25;
            break;
          case 23:
            results.push({
              product: this.parentProductDetails,
              resp: resp
            });
            $("[data-also-bought-checkbox][value=\"" + this.parentProductDetails.productId + "\"]", this.$alsoBoughtEl).prop('checked', false).trigger('change');
          case 25:
            $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
            i = 0;
          case 27:
            if (!(i < productIds.length && success)) {
              _context4.next = 75;
              break;
            }
            productId = productIds[i];
            if (!(!productId || productId === this.parentProductDetails.productId)) {
              _context4.next = 31;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 31:
            $productEl = $productEls.filter("[data-product-id=\"" + productId + "\"]").filter(function (j, el) {
              return $(el).closest('[data-cart-item-add]').length === 0;
            });
            if (!($productEl.length === 0)) {
              _context4.next = 34;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 34:
            if ($productEl.data('productDetails')) {
              _context4.next = 37;
              break;
            }
            _context4.next = 37;
            return this.loadProductDetails($productEl);
          case 37:
            product = $productEl.data('productDetails');
            if (product) {
              _context4.next = 40;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 40:
            success = reportFormValidity(product.$form.get(0));
            if (!success) {
              _context4.next = 69;
              break;
            }
            _context4.next = 44;
            return product.addProductToCartAsync();
          case 44:
            _yield$product$addPro = _context4.sent;
            _err = _yield$product$addPro[0];
            _resp = _yield$product$addPro[1];
            _errorMsg = _err || _resp.data.error;
            if (!_errorMsg) {
              _context4.next = 57;
              break;
            }
            _context4.next = 51;
            return new (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default())({
              text: _errorMsg,
              type: 'error'
            });
          case 51:
            $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
            $('[data-product-quantity]', product.$scope).val(0);
            success = false;
            _context4.next = 67;
            break;
          case 57:
            results.push({
              product: product,
              resp: _resp
            });
            newProductAdded.push({
              id: _resp == null || (_resp$data = _resp.data) == null || (_resp$data = _resp$data.cart_item) == null ? void 0 : _resp$data.id,
              qty: $('[data-product-quantity]', product.$scope).val(),
              product: product
            });
            $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');

            // Reset quantity also bought item
            $('[data-product-quantity]', product.$scope).val('0');
            if (!(i < productIds.length - 1)) {
              _context4.next = 66;
              break;
            }
            _context4.next = 64;
            return delay(200);
          case 64:
            _context4.next = 67;
            break;
          case 66:
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
          case 67:
            _context4.next = 72;
            break;
          case 69:
            // open the product form
            $toggle = $('[data-options-collapsible]', product.$scope);
            if (!$toggle.hasClass('is-open')) {
              $toggle.trigger('click');
            }
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
          case 72:
            i++;
            _context4.next = 27;
            break;
          case 75:
            if (!(results.length > 0)) {
              _context4.next = 91;
              break;
            }
            _results$ = results[0], _product = _results$.product, _resp2 = _results$.resp; // Open preview modal and update content
            if (!_product.previewModal) {
              _context4.next = 90;
              break;
            }
            if (success) {
              _context4.next = 82;
              break;
            }
            _product.updateCartContent(_product.previewModal, newProductAdded);
            _context4.next = 88;
            break;
          case 82:
            // Supermarket OBPS Mod
            modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_6__.defaultModal)();
            modal.close();
            if (!(this.context.add_to_cart_popup === 'cart')) {
              _context4.next = 86;
              break;
            }
            return _context4.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_5__.openCartPreview)(newProductAdded, this.context));
          case 86:
            if (this.context.add_to_cart_popup !== 'hide') {
              _product.previewModal.open();
            }
            _product.updateCartContent(_product.previewModal, newProductAdded, function () {
              // Show new product added to cart
              newProductAdded.forEach(function (item) {
                var $modal = $(item.product.previewModal.$content.get(0));
                var $el = $modal.find(".productView [data-alsobought-id=\"" + item.id + "\"]");
                var $qty = $el.find('[data-cart-item-quantity]');
                $el.show();
                $qty.text(item.qty + " x");
              });
            }, 'papathemes/also-bought/preview');
          case 88:
            _context4.next = 91;
            break;
          case 90:
            // if no modal, redirect to the cart page
            this.redirectTo(_resp2.data.cart_item.cart_url || this.context.urls.cart);
          case 91:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function addSelectedProductsToCart() {
      return _addSelectedProductsToCart.apply(this, arguments);
    }
    return addSelectedProductsToCart;
  }();
  _proto.addProductToCart = function addProductToCart(product) {
    return new Promise(function (resolve, reject) {
      var form = $('form[data-cart-item-add]', product.$scope).get(0);
      var $addToCartBtn = $('#form-action-addToCart', product.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage');
      var $errorBox = $('[data-error-box]', product.$scope);
      var $errorMsg = $('[data-error-message]', product.$scope);
      var $checkbox = $('[data-also-bought-checkbox]', product.$scope);

      // Do not do AJAX if browser doesn't support FormData
      if (window.FormData === undefined) {
        resolve();
      }
      $addToCartBtn.val(waitMessage).prop('disabled', true);
      product.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error;

        // console.log(form);

        $addToCartBtn.val(originalBtnVal).prop('disabled', false);
        product.$overlay.hide();

        // Guard statement
        if (errorMessage) {
          // console.log('reject add product');

          $errorMsg.html(errorMessage);
          $errorBox.removeClass('u-hiddenVisually');
          if ($errorBox.length > 0) {
            scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default()($errorBox.get(0));
          }
          reject();
          return;
        }

        // console.log('resolve add product');
        $errorMsg.empty();
        $errorBox.addClass('u-hiddenVisually');
        $checkbox.prop('checked', false).trigger('change');
        resolve();
      });
    });
  };
  return AlsoBoughtGame;
}();


/***/ }),

/***/ "./assets/js/papathemes/also-bought.js":
/*!*********************************************!*\
  !*** ./assets/js/papathemes/also-bought.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlsoBought)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_to_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
}
function reportFormValidity(form) {
  var valid = true;
  if (form && form.checkValidity) {
    valid = form.checkValidity();
    if (!valid) {
      if (form.reportValidity) {
        form.reportValidity();
      } else {
        valid = true;
      }
    }
  }
  return valid;
}
var AlsoBought = /*#__PURE__*/function () {
  /**
   * @param {ProductDetails} parentProductDetails
   * @param {*} param1
   */
  function AlsoBought(parentProductDetails, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$thumbnailTemplat = _ref.thumbnailTemplate,
      thumbnailTemplate = _ref$thumbnailTemplat === void 0 ? "\n            <div class=\"productView-alsoBought-thumbnail-item {{#checked}}is-checked{{/checked}}\" data-thumbnail-product-id=\"{{id}}\">\n                <div class=\"productView-alsoBought-item-image\">\n                    <a class=\"productView-alsoBought-thumbnail-label\" href=\"{{url}}\" target=\"_blank\"><img class=\"lazyload\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\"></a>\n                </div>\n            </div>\n        " : _ref$thumbnailTemplat,
      _ref$productDetailsTe = _ref.productDetailsTemplate,
      productDetailsTemplate = _ref$productDetailsTe === void 0 ? "\n            <div class=\"productView-alsoBought-item-inner\">\n                <div class=\"productView-alsoBought-item-check\">\n                    <div class=\"form-field\">\n                        <input\n                            class=\"form-checkbox\"\n                            type=\"checkbox\"\n                            name=\"productView-alsoBought-item-checkbox\"\n                            id=\"productView-alsoBought-item-checkbox-{{id}}\"\n                            value=\"{{id}}\"\n                            data-also-bought-checkbox\n                            data-purchasable\n                            aria-label=\"{{name}}\">\n                        <div class=\"form-label\">\n                            <div class=\"productView-alsoBought-item-image\">\n                                {{#saleBadge}}\n                                    <div class=\"sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}\">\n                                        <span class=\"sale-text\">{{&saleBadge}}</span>\n                                    </div>\n                                {{/saleBadge}}\n                                {{&customBadge}}\n                                <a class=\"productView-alsoBought-item-image-thumbnail\" href=\"{{url}}\" target=\"_blank\">\n                                    <img class=\"lazyload card-image\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\">\n                                    {{#hoverImage}}\n                                        <img\n                                            data-src=\"{{url}}\"\n                                            class=\"card-image lazyload\"\n                                            alt=\"{{name}}\"\n                                            title=\"{{name}}\">\n                                    {{/hoverImage}}\n                                </a>\n                                <a class=\"productView-alsoBought-item-detail\" href=\"{{url}}\" target=\"_blank\">View Details</a>\n                            </div>\n                            <div class=\"productView-alsoBought-item-content\">\n                                <a class=\"productView-alsoBought-item-title\"href=\"{{url}}\" target=\"_blank\">{{name}}</a>\n                                {{#ratingHtml}}\n                                    <p class=\"productView-alsoBought-item-rating card-text card-text--rating\" data-test-info-type=\"productRating\">\n                                        <span class=\"rating--small\">\n                                            {{&ratingHtml}}\n                                        </span>\n                                    </p>\n                                {{/ratingHtml}}\n                                <div class=\"productView-alsoBought-item-price\">\n                                    {{&loginPriceHtml}}\n                                    {{&priceHtml}}\n                                    {{&priceRangeHtml}}\n                                </div>\n\n                                {{&optionsToggleHtml}}\n                                <div class=\"productView-alsoBought-item-form\" id=\"productView-alsoBought-item-form-{{id}}\" data-product-content>\n                                    {{&formHtml}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        " : _ref$productDetailsTe,
      _ref$priceTemplate = _ref.priceTemplate,
      priceTemplate = _ref$priceTemplate === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <!-- Sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\" {{#nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{priceLabel}}\n                    </span>\n                    <span class=\"price-now-label\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{salePriceLabel}}\n                    </span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{price.formatted}}</span>\n                </div>\n                <!-- Non-sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                <!-- Retail price -->\n                {{&retailPriceHtml}}\n                {{&taxLabelHtml}}\n            </div>\n        " : _ref$priceTemplate,
      _ref$priceRangeTempla = _ref.priceRangeTemplate,
      priceRangeTemplate = _ref$priceRangeTempla === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\">{{priceLabel}}</span>\n                    <span class=\"price-now-label\" style=\"display: none;\">{{salePriceLabel}}</span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{priceRange.min.formatted}} - {{priceRange.max.formatted}}</span>\n                    {{&taxLabelHtml}}\n                </div>\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" style=\"display: none;\">\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                {{&retailPriceRangeHtml}}\n                {{&retailPriceHtml}}\n            </div>\n        " : _ref$priceRangeTempla,
      _ref$taxLabelTemplate = _ref.taxLabelTemplate,
      taxLabelTemplate = _ref$taxLabelTemplate === void 0 ? "\n            <abbr title=\"{{title}}\">{{text}}</abbr>\n        " : _ref$taxLabelTemplate,
      _ref$retailPriceRange = _ref.retailPriceRangeTemplate,
      retailPriceRangeTemplate = _ref$retailPriceRange === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-price-{{taxDataPrefix}} class=\"price price--rrp\">{{retailPriceRange.min.formatted}} - {{retailPriceRange.max.formatted}}</span>\n            </div>\n        " : _ref$retailPriceRange,
      _ref$retailPriceTempl = _ref.retailPriceTemplate,
      retailPriceTemplate = _ref$retailPriceTempl === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\" {{^retailPrice}}style=\"display: none;{{/retailPrice}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-{{taxDataPrefix}} class=\"price price--rrp\">\n                    {{retailPrice.formatted}}\n                </span>\n            </div>\n        " : _ref$retailPriceTempl,
      _ref$loginPriceTempla = _ref.loginPriceTemplate,
      loginPriceTemplate = _ref$loginPriceTempla === void 0 ? "\n            <a class=\"price--login\" href=\"{{loginUrl}}\" translate>{{loginForPriceTxt}}</a>\n        " : _ref$loginPriceTempla,
      _ref$optionsToggleTem = _ref.optionsToggleTemplate,
      optionsToggleTemplate = _ref$optionsToggleTem === void 0 ? "\n            <div class=\"productView-alsoBought-item-formToggle\"><a class=\"button button--outline\" href=\"#productView-alsoBought-item-form-{{id}}\" data-options-collapsible>{{chooseOptionsTxt}}</a></div>\n        " : _ref$optionsToggleTem,
      _ref$simpleFormTempla = _ref.simpleFormTemplate,
      simpleFormTemplate = _ref$simpleFormTempla === void 0 ? "\n            <form class=\"form form--addToCart _single-product\" method=\"post\" action=\"{{addToCartUrl}}\" enctype=\"multipart/form-data\" data-cart-item-add>\n                <input type=\"hidden\" name=\"action\" value=\"add\">\n                <input type=\"hidden\" name=\"product_id\" value=\"{{id}}\"/>\n                <div class=\"form-increment\" data-quantity-also-bought-change>\n                    <button class=\"button button--icon\" data-action=\"dec\">\n                        <span class=\"is-srOnly\">{{quantityDecreaseTxt}}</span>\n                        <i class=\"icon\" aria-hidden=\"true\">\n                            <svg>\n                                <use xlink:href=\"#icon-minus\"/>\n                            </svg>\n                        </i>\n                    </button>\n                    <input class=\"form-input form-input--incrementTotal\"\n                        data-product-quantity\n                        name=\"qty[]\"\n                        type=\"tel\"\n                        value=\"{{qty}}\"\n                        data-quantity-min=\"{{qty}}\"\n                        data-quantity-max=\"{{maxPurchaseQuantity}}\"\n                        min=\"0\"\n                        pattern=\"[0-9]*\"\n                        aria-live=\"polite\"\n                        aria-label=\"{{txtQuantity}}\">\n                    <button class=\"button button--icon\" data-action=\"inc\">\n                        <span class=\"is-srOnly\">{{quantityIncreaseTxt}}</span>\n                        <i class=\"icon\" aria-hidden=\"true\">\n                            <svg>\n                                <use xlink:href=\"#icon-add\"/>\n                            </svg>\n                        </i>\n                    </button>\n                </div>\n                {{#purchasability}}\n                    <button class=\"button button--outstock _purchasability\">{{purchasability}}</button>\n                {{/purchasability}}\n            </form>\n        " : _ref$simpleFormTempla,
      _ref$loadingTemplate = _ref.loadingTemplate,
      loadingTemplate = _ref$loadingTemplate === void 0 ? "\n            <div class=\"loading\"><img src=\"{{loadingImg}}\" alt=\"loading\"/></div>\n        " : _ref$loadingTemplate,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
      _ref$ratingStarHtmlFu = _ref.ratingStarHtmlFunc,
      ratingStarHtmlFunc = _ref$ratingStarHtmlFu === void 0 ? function (isFull) {
        if (isFull === void 0) {
          isFull = true;
        }
        return "\n            <span class=\"icon icon--rating" + (isFull ? 'Full' : 'Empty') + "\">\n                <svg><use xlink:href=\"#icon-star\" /></svg>\n            </span>\n        ";
      } : _ref$ratingStarHtmlFu,
      _ref$customBadgeTempl = _ref.customBadgeTemplate,
      customBadgeTemplate = _ref$customBadgeTempl === void 0 ? function (value) {
        return "\n            <div class=\"sale-flag-side sale-flag-side--custom\">\n                <span class=\"sale-text\">" + value + "</span>\n            </div>\n        ";
      } : _ref$customBadgeTempl,
      _ref$showProductRatin = _ref.showProductRating,
      showProductRating = _ref$showProductRatin === void 0 ? true : _ref$showProductRatin;
    this.parentProductDetails = parentProductDetails;
    this.thumbnailTemplate = thumbnailTemplate;
    this.productDetailsTemplate = productDetailsTemplate;
    this.priceTemplate = priceTemplate;
    this.priceRangeTemplate = priceRangeTemplate;
    this.taxLabelTemplate = taxLabelTemplate;
    this.retailPriceRangeTemplate = retailPriceRangeTemplate;
    this.retailPriceTemplate = retailPriceTemplate;
    this.loginPriceTemplate = loginPriceTemplate;
    this.optionsToggleTemplate = optionsToggleTemplate;
    this.simpleFormTemplate = simpleFormTemplate;
    this.loadingTemplate = loadingTemplate;
    this.templateCustomTags = templateCustomTags;
    this.context = this.parentProductDetails.context;
    this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
    this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
    this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
    this.config = this.$alsoBoughtEl.data('alsoBought') || {};
    this.moneyWithTax = this.config.samplePriceWithTax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(this.config.samplePriceWithTax, this.context.money) : null;
    this.moneyWithoutTax = this.config.samplePriceWithoutTax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(this.config.samplePriceWithoutTax, this.context.money) : null;
    this.showProductRating = showProductRating;
    this.ratingStarHtmlFunc = ratingStarHtmlFunc;
    this.customBadgeTemplate = customBadgeTemplate;
    this.product_sale_badges = this.context.product_sale_badges;
    this.product_sale_label = this.context.product_sale_label;
    this.showRetailPrice = this.context.show_rrp;

    // try to guess any price on the page
    this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax
    // is default currency?
    || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null)
    // any price on the page
    || $('[data-product-price-without-tax], [data-product-price-with-tax]').get().reduce(function (_money, el) {
      return _money || (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)($(el).text());
    }, null)
    // use currency code
    || (this.context.activeCurrencyCode ? Object.assign({}, this.context.money, {
      currency_token: " " + this.context.activeCurrencyCode + " "
    }) : this.context.money);
    this.products = [];
    this.productNodes = [];
    this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
    this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);
    var thumbSize = this.context.alsobought_thumbnail_size.split('x');
    this.thumbnailWidth = Number(thumbSize[0]) || 100;
    this.thumbnailHeight = Number(thumbSize[1]) || 100;
    this.retrieveAlsoBoughtProducts();
    this.listenQuantityAlsoBoughtChange();
    this.handleClickOptions();
    $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
    $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
  }
  var _proto = AlsoBought.prototype;
  _proto.currencyFormat = function currencyFormat(value) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.currencyFormat)(value, (this.config.includeTax ? this.moneyWithTax : this.moneyWithoutTax) || this.moneyFallback);
  };
  _proto.retrieveAlsoBoughtProducts = function retrieveAlsoBoughtProducts() {
    var _this = this;
    var $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
    var $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
    /** @type {number[]} */
    var productIds = $productEls.get().map(function (el) {
      return $(el).data('productId');
    });
    if ($productEls.length > 0) {
      this.$alsoBoughtEl.removeClass('u-hiddenVisually');
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query (\n                            $productIds: [Int!],\n                            $productsCount: Int,\n                            " + (!this.config.requireLogin ? "\n                                $includeTax: Boolean,\n                                $currencyCode: currencyCode,\n                            " : '') + "\n                                $imgWidth: Int!,\n                            $imgHeight: Int!\n                        ) {\n                            site {\n                                products (\n                                    entityIds: $productIds,\n                                    first: $productsCount\n                                ) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            path\n                                            addToCartUrl\n                                            minPurchaseQuantity\n                                            maxPurchaseQuantity\n                                            defaultImage {\n                                                url (\n                                                    width: $imgWidth,\n                                                    height: $imgHeight\n                                                )\n                                            }\n                                            images (first: 2) {\n                                                edges {\n                                                  node {\n                                                    url (\n                                                        width: $imgWidth,\n                                                        height: $imgHeight\n                                                    )\n                                                    isDefault\n                                                  }\n                                                }\n                                            }\n                                            inventory {\n                                                isInStock\n                                            }\n                                            availabilityV2 {\n                                                status\n                                                ... on ProductUnavailable {\n                                                    message\n                                                }\n                                                ... on ProductPreOrder {\n                                                    message\n                                                    status\n                                                }\n                                            }\n                                            " + (!this.config.requireLogin ? "\n                                                prices (\n                                                    includeTax: $includeTax,\n                                                    currencyCode: $currencyCode\n                                                ) {\n                                                    price {\n                                                        ...MoneyFields\n                                                    }\n                                                    salePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    basePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    retailPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    mapPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    priceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                    retailPriceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                }\n                                            " : '') + "\n                                            productOptions (\n                                                first: 1\n                                            ) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                    }\n                                                }\n                                            }\n                                            reviewSummary {\n                                                averageRating\n                                            }\n                                            customFields {\n                                                edges {\n                                                    node {\n                                                        name\n                                                        value\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                                settings {\n                                    tax {\n                                        plp\n                                    }\n                                    inventory {\n                                        defaultOutOfStockMessage\n                                    }\n                                }\n                            }\n                        }\n                        " + (!this.config.requireLogin ? "\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment MoneyRangeFields on MoneyRange {\n                                min {\n                                    ...MoneyFields\n                                }\n                                max {\n                                    ...MoneyFields\n                                }\n                            }\n                        " : '') + "\n                    ",
          variables: {
            productIds: productIds,
            productsCount: productIds.length,
            includeTax: this.config.includeTax,
            currencyCode: this.context.activeCurrencyCode,
            imgWidth: this.thumbnailWidth,
            imgHeight: this.thumbnailHeight
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + this.context.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          var txtOutOfStock = resp.data.site.settings.inventory.defaultOutOfStockMessage;
          resp.data.site.products.edges.forEach(function (_ref2) {
            var _node$defaultImage, _node$prices, _node$prices2, _node$prices3, _node$prices4, _node$prices5, _node$reviewSummary;
            var node = _ref2.node;
            _this.productNodes.push(node);
            var id = node.entityId;
            var name = node.name;
            var url = node.path;
            var addToCartUrl = node.addToCartUrl;
            var qty = node.minPurchaseQuantity || 0;
            var loadingImg = _this.context.loadingImg;
            var img = ((_node$defaultImage = node.defaultImage) == null ? void 0 : _node$defaultImage.url) || _this.context.defaultProductImage;
            var $productEl = $productEls.filter("[data-product-id=\"" + id + "\"]");
            var taxClassPrefix = _this.config.includeTax ? 'withTax' : 'withoutTax';
            var taxDataPrefix = _this.config.includeTax ? 'with-tax' : 'without-tax';
            var priceLabel = _this.context.pdp_price_label;
            var salePriceLabel = _this.context.pdp_sale_price_label;
            var nonSalePriceLabel = _this.context.pdp_non_sale_price_label;
            var retailPriceLabel = _this.context.pdp_retail_price_label;
            var chooseOptionsTxt = _this.context.chooseOptionsTxt;
            var txtQuantity = _this.context.txtQuantity;
            var quantityDecreaseTxt = _this.context.txtQuantityDecrease.replace(/(of).*/g, "$1 " + node.name);
            var quantityIncreaseTxt = _this.context.txtQuantityIncrease.replace(/(of).*/g, "$1 " + node.name);
            var maxPurchaseQuantity = node.maxPurchaseQuantity || 0;
            var loginForPriceTxt = _this.context.loginForPriceTxt;
            var loginUrl = _this.context.loginUrl || '/login.php';
            var checked = _this.context.alsobought_checked;
            var showRatingHtml = _this.context.showProductRating;
            var product_sale_badges = _this.context.product_sale_badges;
            var product_sale_label = _this.context.product_sale_label;
            var available = node.availabilityV2 && node.availabilityV2.status === 'Unavailable' ? node.availabilityV2.message || _this.context.txtUnavailable : null;
            var preOrder = node.availabilityV2 && node.availabilityV2.status === 'Preorder' ? node.availabilityV2.message || _this.context.txtPreOrder : null;
            var outOfStock = !(node.inventory.isInStock && node.availabilityV2.status === 'Unavailable') && !node.inventory.isInStock ? node.availabilityV2.description || txtOutOfStock : null;
            var purchasability = available || preOrder || outOfStock;
            var hoverProductImage = function hoverProductImage(images) {
              try {
                var image = images.find(function (imgHover) {
                  return !imgHover.node.isDefault;
                });
                return image ? image.node : null;
              } catch (er) {
                return null;
              }
            };
            var hoverImage = hoverProductImage(node.images.edges);
            var ratingHtml = function ratingHtml(rating) {
              return !rating ? '' : Array.from(Array(5).keys()).map(function (i) {
                return _this.ratingStarHtmlFunc(rating > i);
              }).join('');
            };
            var saleBadge = function saleBadge(prices) {
              // return '' if no sale price
              if (!(prices != null && prices.salePrice) || prices.salePrice.value === prices.basePrice.value) return '';

              // Return '' badge
              if (_this.product_sale_badges === 'hide') return '';
              // return 'sale' badge
              if (_this.product_sale_badges === 'label') return _this.product_sale_label;
              var n = prices.salePrice ? Math.round((prices.basePrice.value - prices.salePrice.value) / prices.basePrice.value * 100) : 0;
              var percent = n > 0 ? n + "%" : '';

              // return 'sale {percent}' badge
              if (_this.product_sale_label.includes('{percent}')) return _this.product_sale_label.replace('{percent}', percent);

              // recent 'sale ...%' badge
              return _this.product_sale_label + "<span>" + percent + "</span>";
            };
            var customBadge = function customBadge(field) {
              if (field && field.length > 0) {
                var list = field.filter(function (e) {
                  return e.node.name === '__badge';
                });
                return list.map(function (i) {
                  return _this.customBadgeTemplate(i.node.value);
                }).join('');
              }
              return null;
            };
            var price = !_this.config.requireLogin && (_node$prices = node.prices) != null && _node$prices.price ? {
              formatted: _this.currencyFormat(node.prices.price.value)
            } : null;
            var nonSalePrice = !_this.config.requireLogin && (_node$prices2 = node.prices) != null && _node$prices2.basePrice && node.prices.price && node.prices.basePrice.value !== node.prices.price.value ? {
              formatted: _this.currencyFormat(node.prices.basePrice.value)
            } : null;
            var retailPrice = !_this.config.requireLogin && (_node$prices3 = node.prices) != null && _node$prices3.retailPrice ? {
              formatted: _this.currencyFormat(node.prices.retailPrice.value)
            } : null;
            var priceRange = !_this.config.requireLogin && (_node$prices4 = node.prices) != null && _node$prices4.priceRange && node.prices.priceRange.min.value !== node.prices.priceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.priceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.priceRange.max.value)
              }
            } : null;
            var retailPriceRange = !_this.config.requireLogin && (_node$prices5 = node.prices) != null && _node$prices5.retailPriceRange && node.prices.retailPriceRange.min.value !== node.prices.retailPriceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.max.value)
              }
            } : null;
            var loginPriceHtml = _this.config.requireLogin ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.loginPriceTemplate, {
              loginUrl: loginUrl,
              loginForPriceTxt: loginForPriceTxt
            }, null, _this.templateCustomTags) : '';
            var taxLabelHtml = _this.config.showTaxLabel ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.taxLabelTemplate, {
              title: _this.config.includeTax ? _this.context.includingTaxTxt : _this.context.excludingTaxTxt,
              text: _this.config.includeTax ? _this.context.priceWithTaxTxt : _this.context.priceWithoutTaxTxt
            }, null, _this.templateCustomTags) : '';
            var retailPriceRangeHtml = retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.retailPriceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPriceRange: retailPriceRange
            }, null, _this.templateCustomTags) : '';
            var retailPriceHtml = !retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.retailPriceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPrice: retailPrice
            }, null, _this.templateCustomTags) : '';
            var priceRangeHtml = priceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.priceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              priceRange: priceRange,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceRangeHtml: _this.showRetailPrice ? retailPriceRangeHtml : '',
              retailPriceHtml: _this.showRetailPrice ? retailPriceHtml : ''
            }, null, _this.templateCustomTags) : '';
            var optionsToggleHtml = node.productOptions.edges.length > 0 ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.optionsToggleTemplate, {
              id: id,
              chooseOptionsTxt: chooseOptionsTxt
            }, null, _this.templateCustomTags) : '';
            var priceHtml = !_this.config.requireLogin && !priceRange ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.priceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              price: price,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceHtml: _this.showRetailPrice ? retailPriceHtml : ''
            }, null, _this.templateCustomTags) : '';
            var formHtml = node.productOptions.edges.length === 0 ? mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.simpleFormTemplate, {
              id: id,
              addToCartUrl: addToCartUrl,
              qty: qty,
              txtQuantity: txtQuantity,
              quantityDecreaseTxt: quantityDecreaseTxt,
              quantityIncreaseTxt: quantityIncreaseTxt,
              maxPurchaseQuantity: maxPurchaseQuantity,
              purchasability: purchasability
            }, null, _this.templateCustomTags) : '';
            var detailsHtml = mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.productDetailsTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              hoverImage: hoverImage,
              loginPriceHtml: loginPriceHtml,
              priceHtml: priceHtml,
              priceRangeHtml: priceRangeHtml,
              optionsToggleHtml: optionsToggleHtml,
              formHtml: formHtml,
              checked: checked,
              showRatingHtml: showRatingHtml,
              ratingHtml: _this.showProductRating ? ratingHtml((_node$reviewSummary = node.reviewSummary) == null ? void 0 : _node$reviewSummary.averageRating) : '',
              product_sale_badges: product_sale_badges,
              product_sale_label: product_sale_label,
              saleBadge: saleBadge(node.prices),
              customBadge: customBadge(node.customFields.edges.length > 0 ? node.customFields.edges : '')
            }, null, _this.templateCustomTags);
            var thumbnailHtml = $(mustache__WEBPACK_IMPORTED_MODULE_7___default().render(_this.thumbnailTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              checked: checked
            }, null, _this.templateCustomTags));
            $productEl.html(detailsHtml);
            $thumbnails.append(thumbnailHtml);

            // load simple product details
            if (node.productOptions.edges.length === 0) {
              var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this.context, {
                enableAlsoBought: false
              }));

              // listen price change
              product.$scope.on('price-change', function () {
                return _this.updateTotalPrice();
              });

              // store the product object for later use
              _this.products.push(product);
              $productEl.data('productDetails', product);
            }

            // init foundation collapsible
            (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
              $context: $productEl
            });

            // bind events
            $productEl.find('[data-also-bought-checkbox]').on('change', _this.onAlsoBoughtCheckboxChange.bind(_this, $productEl));
            $productEl.find('[data-options-collapsible]').on(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.open, _this.onOptionsOpen.bind(_this, $productEl));
            _this.updateTotalPrice();
            _this.updateAddSelectedToCartButton();
          });
        }
      });

      // init parent product item
      var $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
      (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
        $context: $parentProductEl
      });
      $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl));

      // listen parent product price change
      this.parentProductDetails.$scope.on('price-change', function () {
        return _this.updateTotalPrice();
      });
    }
  };
  _proto.updateTotalPrice = function updateTotalPrice() {
    var _this2 = this;
    // stop showing total price if require login
    if (this.config.requireLogin) {
      return;
    }
    var productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
      return $(el).val();
    });
    var priceById = Object.assign({}, this.productNodes.filter(function (node) {
      return node.prices && node.prices.price;
    }).reduce(function (_priceById, node) {
      var _node$entityId, _Object$assign;
      return Object.assign({}, _priceById, (_Object$assign = {}, _Object$assign[node.entityId] = (_node$entityId = {}, _node$entityId[_this2.config.includeTax ? 'with_tax' : 'without_tax'] = {
        value: node.prices.price.value,
        formatted: _this2.currencyFormat(node.prices.price.value)
      }, _node$entityId), _Object$assign));
    }, {}), this.products.filter(function (product) {
      return product.price && product.productId;
    }).reduce(function (_priceById, product) {
      var _Object$assign2;
      return Object.assign({}, _priceById, (_Object$assign2 = {}, _Object$assign2[product.productId] = product.price, _Object$assign2));
    }, {}));
    var productQty = {};
    productIds.forEach(function (id) {
      var inputQty = $("[data-product-id=\"" + id + "\"] [data-product-quantity]", _this2.$alsoBoughtEl);
      if (inputQty.length) {
        productQty[id] = {
          quantity: parseInt(inputQty.val(), 10)
        };
      }
    });
    var mergeProduct = {};
    Object.keys(priceById).map(function (key) {
      var _Object$assign3;
      mergeProduct = Object.assign({}, mergeProduct, (_Object$assign3 = {}, _Object$assign3[key] = Object.assign({}, priceById[key], productQty[key]), _Object$assign3));
      return mergeProduct;
    });

    // merge productNodes & product details objects
    var products = Object.keys(mergeProduct).map(function (productId) {
      return {
        productId: productId,
        price: mergeProduct[productId]
      };
    });
    var total = [this.parentProductDetails].concat(products).filter(function (product) {
      return productIds.indexOf(product.productId) > -1;
    }).reduce(function (_ref3, _ref4) {
      var _ref3$with_tax = _ref3.with_tax,
        with_tax = _ref3$with_tax === void 0 ? 0 : _ref3$with_tax,
        _ref3$without_tax = _ref3.without_tax,
        without_tax = _ref3$without_tax === void 0 ? 0 : _ref3$without_tax,
        money_with_tax = _ref3.money_with_tax,
        money_without_tax = _ref3.money_without_tax;
      var price = _ref4.price;
      return {
        with_tax: price && price.with_tax ? with_tax + price.with_tax.value * (price.quantity ? price.quantity : 1) : null,
        without_tax: price && price.without_tax ? without_tax + price.without_tax.value * (price.quantity ? price.quantity : 1) : null,
        money_with_tax: money_with_tax || (price && price.with_tax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(price.with_tax.formatted, _this2.context.money) : null),
        money_without_tax: money_without_tax || (price && price.without_tax ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)(price.without_tax.formatted, _this2.context.money) : null)
      };
    }, {});
    var $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
    var $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);
    if (total.with_tax) {
      $('[data-price]', $withTax).html(this.currencyFormat(total.with_tax, total.money_with_tax));
      $withTax.show();
      if (total.without_tax) {
        $('[data-tax-label]', $withTax).show();
      } else {
        $('[data-tax-label]', $withTax).hide();
      }
    } else {
      $withTax.hide();
    }
    if (total.without_tax) {
      $('[data-price]', $withoutTax).html(this.currencyFormat(total.without_tax, total.money_without_tax));
      $withoutTax.show();
      if (total.with_tax) {
        $('[data-tax-label]', $withoutTax).show();
      } else {
        $('[data-tax-label]', $withoutTax).hide();
      }
    } else {
      $withoutTax.hide();
    }
  };
  _proto.onAddAllButtonClick = function onAddAllButtonClick(e) {
    e.preventDefault();
    $('[data-also-bought-checkbox]', this.$alsoBoughtEl).prop('checked', true).trigger('change');
  };
  _proto.handleClickOptions = function handleClickOptions() {
    this.$alsoBoughtEl.on('click', '[data-options-collapsible]:not(.is-open)', function (event) {
      var _product$$form;
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $productEl = $target.closest('[data-product-id]');
      var product = $productEl.data('productDetails');
      var $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      if (!(product != null && (_product$$form = product.$form) != null && _product$$form.get(0).checkValidity())) {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
    this.$alsoBoughtEl.on('click', '[data-options-collapsible]', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      if (!$alsoBoughtCheckbox.data('purchasable')) {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
  };
  _proto.onAddSelectedButtonClick = function onAddSelectedButtonClick(e) {
    e.preventDefault();
    this.addSelectedProductsToCart();
  };
  _proto.onAlsoBoughtCheckboxChange = function onAlsoBoughtCheckboxChange($productEl, e) {
    var $cb = $(e.target);
    var $label = $("label[for=\"" + $cb.attr('id') + "\"]", this.$alsoBoughtEl);
    var $thumb = $("[data-thumbnail-product-id=\"" + $productEl.data('productId') + "\"]", this.$alsoBoughtEl);

    // open (close) product options form if checkbox is checked (unchecked)
    if ($cb.prop('checked')) {
      $label.addClass('is-checked');
      $thumb.addClass('is-checked');
    } else {
      $label.removeClass('is-checked');
      $thumb.removeClass('is-checked');
    }
    this.updateTotalPrice();
    this.updateAddSelectedToCartButton();
  };
  _proto.onOptionsOpen = function onOptionsOpen($productEl) {
    var $inputQty = $productEl.find('[data-product-quantity]');
    var inputQty = parseInt($inputQty.val(), 10);
    var quantityMin = parseInt($inputQty.data('quantityMin'), 10);
    var qty = quantityMin || 1;
    var $alsoBoughtCheckbox = $productEl.find('[data-also-bought-checkbox]');
    var $form = $productEl.find('[data-cart-item-add]');
    if ($form.hasClass('_unPurchase')) {
      return;
    }
    if (!inputQty) {
      $inputQty.val(qty);
    }
    $alsoBoughtCheckbox.prop('checked', true);
    $alsoBoughtCheckbox.trigger('change');
    if ($productEl.data('productDetails')) {
      return;
    }
    this.loadProductDetails($productEl);
  };
  _proto.loadProductDetails = /*#__PURE__*/function () {
    var _loadProductDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($productEl) {
      var _this3 = this,
        _product$$form2;
      var productId, $content, $alsoBoughtCheckbox, product, check, $form;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            productId = $productEl.data('productId');
            $content = $productEl.find('[data-product-content]');
            $alsoBoughtCheckbox = $content.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
            $content.html(mustache__WEBPACK_IMPORTED_MODULE_7___default().render(this.loadingTemplate, {
              loadingImg: this.context.loadingImg
            }, null, this.templateCustomTags));
            _context.next = 6;
            return new Promise(function (resolve) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, {
                template: 'papathemes/also-bought/product-details'
              }, function (err, resp) {
                if (err || !resp) {
                  return;
                }
                $content.html($(resp).html());
                var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context, {
                  enableAlsoBought: false
                }), null, true);

                // listen price change
                var $inputQty = $content.find('[data-product-quantity]');
                var inputQty = parseInt($inputQty.val(), 10);
                var quantityMin = parseInt($inputQty.data('quantityMin'), 10);
                var qty = quantityMin || 1;
                product.$scope.on('price-change', function () {
                  return _this3.updateTotalPrice();
                });
                if (!inputQty) {
                  $inputQty.val(qty);
                }
                $alsoBoughtCheckbox.prop('checked', true).trigger('change').data('purchasable', true);

                // listen product-view-update event
                // for toggle checkbox depending on product pachasibility
                product.$scope.on('product-view-update', function (event, data) {
                  if (!data.purchasable || !data.instock) {
                    $alsoBoughtCheckbox.prop('checked', false).trigger('change').data('purchasable', false);
                    $inputQty.val(0);
                  } else {
                    $alsoBoughtCheckbox.prop('checked', true).trigger('change').data('purchasable', true);
                    if (!inputQty) {
                      $inputQty.val(qty);
                    }
                  }
                });

                // store the product object for later use
                _this3.products.push(product);
                $productEl.data('productDetails', product);
                _this3.updateTotalPrice();
                resolve();
              });
            });
          case 6:
            // The product has optional not required
            product = $productEl.data('productDetails');
            check = product == null || (_product$$form2 = product.$form) == null ? void 0 : _product$$form2.get(0).checkValidity();
            if (check) {
              $alsoBoughtCheckbox.prop('checked', true).trigger('change').data('purchasable', true);
            }
            $form = $productEl.find('[data-cart-item-add]');
            if ($form.hasClass('_unPurchase')) {
              $alsoBoughtCheckbox.prop('checked', false);
              $alsoBoughtCheckbox.trigger('change');
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function loadProductDetails(_x) {
      return _loadProductDetails.apply(this, arguments);
    }
    return loadProductDetails;
  }();
  _proto.listenQuantityAlsoBoughtChange = function listenQuantityAlsoBoughtChange() {
    this.$alsoBoughtEl.on('click', '[data-quantity-also-bought-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $input = $(event.currentTarget).siblings('input');
      var $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = parseInt($input.val(), 10);

      // If action is incrementing
      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty >= 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      $input.val(qty);
      if (qty > 0) {
        $alsoBoughtCheckbox.prop('checked', true);
        $alsoBoughtCheckbox.trigger('change');
      } else {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
    this.$alsoBoughtEl.on('input', '[data-quantity-also-bought-change] input', function (event) {
      event.preventDefault();
      var $input = $(event.currentTarget);
      var $alsoBoughtCheckbox = $input.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
      var qty = $input.val();
      if (qty > 0) {
        $alsoBoughtCheckbox.prop('checked', true);
        $alsoBoughtCheckbox.trigger('change');
      } else {
        $alsoBoughtCheckbox.prop('checked', false);
        $alsoBoughtCheckbox.trigger('change');
      }
    });
    this.$alsoBoughtEl.on('blur', '[data-quantity-also-bought-change] input', function (event) {
      event.preventDefault();
      var $input = $(event.currentTarget);
      if ($input.val() === '') {
        $input.val('0');
      }
    });
    // --------------------------------------------------------------------
  };
  _proto.updateAddSelectedToCartButton = function updateAddSelectedToCartButton() {
    var $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
    var $checked = $all.filter(':checked');
    var $btns = $('[data-buttons]', this.$alsoBoughtEl);
    if ($checked.length > 0) {
      $btns.addClass('show');
    } else {
      $btns.removeClass('show');
    }
  }

  // No longer used. Keep for other third-party scripts compatibility.
  /**
   * Promise to Call after the parent product is added to add also-bought products.
   */;
  _proto.parentProductAddedToCart =
  /*#__PURE__*/
  function () {
    var _parentProductAddedToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this4 = this;
      var promises, success;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // console.log('parent product added');
            promises = [];
            success = true;
            this.products.forEach(function (product) {
              if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _this4.addProductToCart(product);
                      case 3:
                        _context2.next = 5;
                        return delay(1000);
                      case 5:
                        _context2.next = 10;
                        break;
                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](0);
                        success = false;
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 7]]);
                })));
              }
            });
            _context3.next = 5;
            return promiseSerial(promises);
          case 5:
            return _context3.abrupt("return", success);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function parentProductAddedToCart() {
      return _parentProductAddedToCart.apply(this, arguments);
    }
    return parentProductAddedToCart;
  }();
  _proto.addSelectedProductsToCart = /*#__PURE__*/function () {
    var _addSelectedProductsToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var productIds, results, newProductAdded, success, $addToCartBtn, originalBtnVal, waitMessage, _yield$this$parentPro, err, resp, errorMsg, $productEls, i, productId, $productEl, product, _yield$product$addPro, _err, _resp, _errorMsg, _resp$data, $toggle, _results$, _product, _resp2, modal;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            /** @type {string[]} */
            productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
              return $(el).val();
            });
            /** @type {Array<{product: ProductDetails, resp: any}>} */
            results = [];
            newProductAdded = [];
            success = true;
            $addToCartBtn = $('[data-add-selected]', this.$alsoBoughtEl);
            originalBtnVal = $addToCartBtn.html();
            waitMessage = $addToCartBtn.data('waitMessage');
            $addToCartBtn.html(waitMessage).prop('disabled', true);

            // add parent product to cart
            if (!(productIds.indexOf(this.parentProductDetails.productId) > -1)) {
              _context4.next = 25;
              break;
            }
            success = reportFormValidity(this.parentProductDetails.$form.get(0));
            if (!success) {
              _context4.next = 25;
              break;
            }
            _context4.next = 13;
            return this.parentProductDetails.addProductToCartAsync();
          case 13:
            _yield$this$parentPro = _context4.sent;
            err = _yield$this$parentPro[0];
            resp = _yield$this$parentPro[1];
            errorMsg = err || resp.data.error;
            if (!errorMsg) {
              _context4.next = 23;
              break;
            }
            _context4.next = 20;
            return new (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default())({
              text: errorMsg,
              type: 'error'
            });
          case 20:
            success = false;
            _context4.next = 25;
            break;
          case 23:
            results.push({
              product: this.parentProductDetails,
              resp: resp
            });
            $("[data-also-bought-checkbox][value=\"" + this.parentProductDetails.productId + "\"]", this.$alsoBoughtEl).prop('checked', false).trigger('change');
          case 25:
            $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
            i = 0;
          case 27:
            if (!(i < productIds.length && success)) {
              _context4.next = 75;
              break;
            }
            productId = productIds[i];
            if (!(!productId || productId === this.parentProductDetails.productId)) {
              _context4.next = 31;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 31:
            $productEl = $productEls.filter("[data-product-id=\"" + productId + "\"]").filter(function (j, el) {
              return $(el).closest('[data-cart-item-add]').length === 0;
            });
            if (!($productEl.length === 0)) {
              _context4.next = 34;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 34:
            if ($productEl.data('productDetails')) {
              _context4.next = 37;
              break;
            }
            _context4.next = 37;
            return this.loadProductDetails($productEl);
          case 37:
            product = $productEl.data('productDetails');
            if (product) {
              _context4.next = 40;
              break;
            }
            return _context4.abrupt("continue", 72);
          case 40:
            success = reportFormValidity(product.$form.get(0));
            if (!success) {
              _context4.next = 69;
              break;
            }
            _context4.next = 44;
            return product.addProductToCartAsync();
          case 44:
            _yield$product$addPro = _context4.sent;
            _err = _yield$product$addPro[0];
            _resp = _yield$product$addPro[1];
            _errorMsg = _err || _resp.data.error;
            if (!_errorMsg) {
              _context4.next = 57;
              break;
            }
            _context4.next = 51;
            return new (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default())({
              text: _errorMsg,
              type: 'error'
            });
          case 51:
            $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
            $('[data-product-quantity]', product.$scope).val(0);
            success = false;
            _context4.next = 67;
            break;
          case 57:
            results.push({
              product: product,
              resp: _resp
            });
            newProductAdded.push({
              id: _resp == null || (_resp$data = _resp.data) == null || (_resp$data = _resp$data.cart_item) == null ? void 0 : _resp$data.id,
              qty: $('[data-product-quantity]', product.$scope).val(),
              product: product
            });
            $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');

            // Reset quantity also bought item
            $('[data-product-quantity]', product.$scope).val('0');
            if (!(i < productIds.length - 1)) {
              _context4.next = 66;
              break;
            }
            _context4.next = 64;
            return delay(200);
          case 64:
            _context4.next = 67;
            break;
          case 66:
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
          case 67:
            _context4.next = 72;
            break;
          case 69:
            // open the product form
            $toggle = $('[data-options-collapsible]', product.$scope);
            if (!$toggle.hasClass('is-open')) {
              $toggle.trigger('click');
            }
            $addToCartBtn.html(originalBtnVal).prop('disabled', false);
          case 72:
            i++;
            _context4.next = 27;
            break;
          case 75:
            if (!(results.length > 0)) {
              _context4.next = 91;
              break;
            }
            _results$ = results[0], _product = _results$.product, _resp2 = _results$.resp; // Open preview modal and update content
            if (!_product.previewModal) {
              _context4.next = 90;
              break;
            }
            if (success) {
              _context4.next = 82;
              break;
            }
            _product.updateCartContent(_product.previewModal, newProductAdded);
            _context4.next = 88;
            break;
          case 82:
            // Supermarket OBPS Mod
            modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_6__.defaultModal)();
            modal.close();
            if (!(this.context.add_to_cart_popup === 'cart')) {
              _context4.next = 86;
              break;
            }
            return _context4.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_5__.openCartPreview)(newProductAdded, this.context));
          case 86:
            if (this.context.add_to_cart_popup !== 'hide') {
              _product.previewModal.open();
            }
            _product.updateCartContent(_product.previewModal, newProductAdded, function () {
              // Show new product added to cart
              newProductAdded.forEach(function (item) {
                var $modal = $(item.product.previewModal.$content.get(0));
                var $el = $modal.find(".productView [data-alsobought-id=\"" + item.id + "\"]");
                var $qty = $el.find('[data-cart-item-quantity]');
                $el.show();
                $qty.text(item.qty + " x");
              });
            }, 'papathemes/also-bought/preview');
          case 88:
            _context4.next = 91;
            break;
          case 90:
            // if no modal, redirect to the cart page
            this.redirectTo(_resp2.data.cart_item.cart_url || this.context.urls.cart);
          case 91:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function addSelectedProductsToCart() {
      return _addSelectedProductsToCart.apply(this, arguments);
    }
    return addSelectedProductsToCart;
  }();
  _proto.addProductToCart = function addProductToCart(product) {
    return new Promise(function (resolve, reject) {
      var form = $('form[data-cart-item-add]', product.$scope).get(0);
      var $addToCartBtn = $('#form-action-addToCart', product.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage');
      var $errorBox = $('[data-error-box]', product.$scope);
      var $errorMsg = $('[data-error-message]', product.$scope);
      var $checkbox = $('[data-also-bought-checkbox]', product.$scope);

      // Do not do AJAX if browser doesn't support FormData
      if (window.FormData === undefined) {
        resolve();
      }
      $addToCartBtn.val(waitMessage).prop('disabled', true);
      product.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error;

        // console.log(form);

        $addToCartBtn.val(originalBtnVal).prop('disabled', false);
        product.$overlay.hide();

        // Guard statement
        if (errorMessage) {
          // console.log('reject add product');

          $errorMsg.html(errorMessage);
          $errorBox.removeClass('u-hiddenVisually');
          if ($errorBox.length > 0) {
            scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default()($errorBox.get(0));
          }
          reject();
          return;
        }

        // console.log('resolve add product');
        $errorMsg.empty();
        $errorBox.addClass('u-hiddenVisually');
        $checkbox.prop('checked', false).trigger('change');
        resolve();
      });
    });
  };
  return AlsoBought;
}();


/***/ }),

/***/ "./assets/js/theme/common/countries.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/countries.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var countries = [{
  countryCode: 'AF',
  countryName: 'Afghanistan'
}, {
  countryCode: 'AX',
  countryName: 'Aland Islands'
}, {
  countryCode: 'AL',
  countryName: 'Albania'
}, {
  countryCode: 'DZ',
  countryName: 'Algeria'
}, {
  countryCode: 'AS',
  countryName: 'American Samoa'
}, {
  countryCode: 'AD',
  countryName: 'Andorra'
}, {
  countryCode: 'AO',
  countryName: 'Angola'
}, {
  countryCode: 'AI',
  countryName: 'Anguilla'
}, {
  countryCode: 'AQ',
  countryName: 'Antarctica'
}, {
  countryCode: 'AG',
  countryName: 'Antigua and Barbuda'
}, {
  countryCode: 'AR',
  countryName: 'Argentina'
}, {
  countryCode: 'AM',
  countryName: 'Armenia'
}, {
  countryCode: 'AW',
  countryName: 'Aruba'
}, {
  countryCode: 'AU',
  countryName: 'Australia'
}, {
  countryCode: 'AT',
  countryName: 'Austria'
}, {
  countryCode: 'AZ',
  countryName: 'Azerbaijan'
}, {
  countryCode: 'BS',
  countryName: 'Bahamas'
}, {
  countryCode: 'BH',
  countryName: 'Bahrain'
}, {
  countryCode: 'BD',
  countryName: 'Bangladesh'
}, {
  countryCode: 'BB',
  countryName: 'Barbados'
}, {
  countryCode: 'BY',
  countryName: 'Belarus'
}, {
  countryCode: 'BE',
  countryName: 'Belgium'
}, {
  countryCode: 'BZ',
  countryName: 'Belize'
}, {
  countryCode: 'BJ',
  countryName: 'Benin'
}, {
  countryCode: 'BM',
  countryName: 'Bermuda'
}, {
  countryCode: 'BT',
  countryName: 'Bhutan'
}, {
  countryCode: 'BO',
  countryName: 'Bolivia'
}, {
  countryCode: 'BA',
  countryName: 'Bosnia and Herzegovina'
}, {
  countryCode: 'BW',
  countryName: 'Botswana'
}, {
  countryCode: 'BV',
  countryName: 'Bouvet Island'
}, {
  countryCode: 'BR',
  countryName: 'Brazil'
}, {
  countryCode: 'IO',
  countryName: 'British Indian Ocean Territory'
}, {
  countryCode: 'VG',
  countryName: 'British Virgin Islands'
}, {
  countryCode: 'BN',
  countryName: 'Brunei'
}, {
  countryCode: 'BG',
  countryName: 'Bulgaria'
}, {
  countryCode: 'BF',
  countryName: 'Burkina Faso'
}, {
  countryCode: 'BI',
  countryName: 'Burundi'
}, {
  countryCode: 'KH',
  countryName: 'Cambodia'
}, {
  countryCode: 'CM',
  countryName: 'Cameroon'
}, {
  countryCode: 'CA',
  countryName: 'Canada'
}, {
  countryCode: 'CV',
  countryName: 'Cape Verde'
}, {
  countryCode: 'BQ',
  countryName: 'Caribbean Netherlands'
}, {
  countryCode: 'KY',
  countryName: 'Cayman Islands'
}, {
  countryCode: 'CF',
  countryName: 'Central African Republic'
}, {
  countryCode: 'TD',
  countryName: 'Chad'
}, {
  countryCode: 'CL',
  countryName: 'Chile'
}, {
  countryCode: 'CN',
  countryName: 'China'
}, {
  countryCode: 'CX',
  countryName: 'Christmas Island'
}, {
  countryCode: 'CC',
  countryName: 'Cocos (Keeling) Islands'
}, {
  countryCode: 'CO',
  countryName: 'Colombia'
}, {
  countryCode: 'KM',
  countryName: 'Comoros'
}, {
  countryCode: 'CK',
  countryName: 'Cook Islands'
}, {
  countryCode: 'CR',
  countryName: 'Costa Rica'
}, {
  countryCode: 'HR',
  countryName: 'Croatia'
}, {
  countryCode: 'CU',
  countryName: 'Cuba'
}, {
  countryCode: 'CW',
  countryName: 'Curaçao'
}, {
  countryCode: 'CY',
  countryName: 'Cyprus'
}, {
  countryCode: 'CZ',
  countryName: 'Czechia'
}, {
  countryCode: 'DK',
  countryName: 'Denmark'
}, {
  countryCode: 'DJ',
  countryName: 'Djibouti'
}, {
  countryCode: 'DM',
  countryName: 'Dominica'
}, {
  countryCode: 'DO',
  countryName: 'Dominican Republic'
}, {
  countryCode: 'CD',
  countryName: 'DR Congo'
}, {
  countryCode: 'EC',
  countryName: 'Ecuador'
}, {
  countryCode: 'EG',
  countryName: 'Egypt'
}, {
  countryCode: 'SV',
  countryName: 'El Salvador'
}, {
  countryCode: 'GQ',
  countryName: 'Equatorial Guinea'
}, {
  countryCode: 'ER',
  countryName: 'Eritrea'
}, {
  countryCode: 'EE',
  countryName: 'Estonia'
}, {
  countryCode: 'SZ',
  countryName: 'Eswatini'
}, {
  countryCode: 'ET',
  countryName: 'Ethiopia'
}, {
  countryCode: 'FK',
  countryName: 'Falkland Islands'
}, {
  countryCode: 'FO',
  countryName: 'Faroe Islands'
}, {
  countryCode: 'FJ',
  countryName: 'Fiji'
}, {
  countryCode: 'FI',
  countryName: 'Finland'
}, {
  countryCode: 'FR',
  countryName: 'France'
}, {
  countryCode: 'GF',
  countryName: 'French Guiana'
}, {
  countryCode: 'PF',
  countryName: 'French Polynesia'
}, {
  countryCode: 'TF',
  countryName: 'French Southern and Antarctic Lands'
}, {
  countryCode: 'GA',
  countryName: 'Gabon'
}, {
  countryCode: 'GM',
  countryName: 'Gambia'
}, {
  countryCode: 'GE',
  countryName: 'Georgia'
}, {
  countryCode: 'DE',
  countryName: 'Germany'
}, {
  countryCode: 'GH',
  countryName: 'Ghana'
}, {
  countryCode: 'GI',
  countryName: 'Gibraltar'
}, {
  countryCode: 'GR',
  countryName: 'Greece'
}, {
  countryCode: 'GL',
  countryName: 'Greenland'
}, {
  countryCode: 'GD',
  countryName: 'Grenada'
}, {
  countryCode: 'GP',
  countryName: 'Guadeloupe'
}, {
  countryCode: 'GU',
  countryName: 'Guam'
}, {
  countryCode: 'GT',
  countryName: 'Guatemala'
}, {
  countryCode: 'GG',
  countryName: 'Guernsey'
}, {
  countryCode: 'GN',
  countryName: 'Guinea'
}, {
  countryCode: 'GW',
  countryName: 'Guinea-Bissau'
}, {
  countryCode: 'GY',
  countryName: 'Guyana'
}, {
  countryCode: 'HT',
  countryName: 'Haiti'
}, {
  countryCode: 'HM',
  countryName: 'Heard Island and McDonald Islands'
}, {
  countryCode: 'HN',
  countryName: 'Honduras'
}, {
  countryCode: 'HK',
  countryName: 'Hong Kong'
}, {
  countryCode: 'HU',
  countryName: 'Hungary'
}, {
  countryCode: 'IS',
  countryName: 'Iceland'
}, {
  countryCode: 'IN',
  countryName: 'India'
}, {
  countryCode: 'ID',
  countryName: 'Indonesia'
}, {
  countryCode: 'IR',
  countryName: 'Iran'
}, {
  countryCode: 'IQ',
  countryName: 'Iraq'
}, {
  countryCode: 'IE',
  countryName: 'Ireland'
}, {
  countryCode: 'IM',
  countryName: 'Isle of Man'
}, {
  countryCode: 'IL',
  countryName: 'Israel'
}, {
  countryCode: 'IT',
  countryName: 'Italy'
}, {
  countryCode: 'CI',
  countryName: 'Ivory Coast'
}, {
  countryCode: 'JM',
  countryName: 'Jamaica'
}, {
  countryCode: 'JP',
  countryName: 'Japan'
}, {
  countryCode: 'JE',
  countryName: 'Jersey'
}, {
  countryCode: 'JO',
  countryName: 'Jordan'
}, {
  countryCode: 'KZ',
  countryName: 'Kazakhstan'
}, {
  countryCode: 'KE',
  countryName: 'Kenya'
}, {
  countryCode: 'KI',
  countryName: 'Kiribati'
}, {
  countryCode: 'XK',
  countryName: 'Kosovo'
}, {
  countryCode: 'KW',
  countryName: 'Kuwait'
}, {
  countryCode: 'KG',
  countryName: 'Kyrgyzstan'
}, {
  countryCode: 'LA',
  countryName: 'Laos'
}, {
  countryCode: 'LV',
  countryName: 'Latvia'
}, {
  countryCode: 'LB',
  countryName: 'Lebanon'
}, {
  countryCode: 'LS',
  countryName: 'Lesotho'
}, {
  countryCode: 'LR',
  countryName: 'Liberia'
}, {
  countryCode: 'LY',
  countryName: 'Libya'
}, {
  countryCode: 'LI',
  countryName: 'Liechtenstein'
}, {
  countryCode: 'LT',
  countryName: 'Lithuania'
}, {
  countryCode: 'LU',
  countryName: 'Luxembourg'
}, {
  countryCode: 'MO',
  countryName: 'Macau'
}, {
  countryCode: 'MG',
  countryName: 'Madagascar'
}, {
  countryCode: 'MW',
  countryName: 'Malawi'
}, {
  countryCode: 'MY',
  countryName: 'Malaysia'
}, {
  countryCode: 'MV',
  countryName: 'Maldives'
}, {
  countryCode: 'ML',
  countryName: 'Mali'
}, {
  countryCode: 'MT',
  countryName: 'Malta'
}, {
  countryCode: 'MH',
  countryName: 'Marshall Islands'
}, {
  countryCode: 'MQ',
  countryName: 'Martinique'
}, {
  countryCode: 'MR',
  countryName: 'Mauritania'
}, {
  countryCode: 'MU',
  countryName: 'Mauritius'
}, {
  countryCode: 'YT',
  countryName: 'Mayotte'
}, {
  countryCode: 'MX',
  countryName: 'Mexico'
}, {
  countryCode: 'FM',
  countryName: 'Micronesia'
}, {
  countryCode: 'MD',
  countryName: 'Moldova'
}, {
  countryCode: 'MC',
  countryName: 'Monaco'
}, {
  countryCode: 'MN',
  countryName: 'Mongolia'
}, {
  countryCode: 'ME',
  countryName: 'Montenegro'
}, {
  countryCode: 'MS',
  countryName: 'Montserrat'
}, {
  countryCode: 'MA',
  countryName: 'Morocco'
}, {
  countryCode: 'MZ',
  countryName: 'Mozambique'
}, {
  countryCode: 'MM',
  countryName: 'Myanmar'
}, {
  countryCode: 'NA',
  countryName: 'Namibia'
}, {
  countryCode: 'NR',
  countryName: 'Nauru'
}, {
  countryCode: 'NP',
  countryName: 'Nepal'
}, {
  countryCode: 'NL',
  countryName: 'Netherlands'
}, {
  countryCode: 'NC',
  countryName: 'New Caledonia'
}, {
  countryCode: 'NZ',
  countryName: 'New Zealand'
}, {
  countryCode: 'NI',
  countryName: 'Nicaragua'
}, {
  countryCode: 'NE',
  countryName: 'Niger'
}, {
  countryCode: 'NG',
  countryName: 'Nigeria'
}, {
  countryCode: 'NU',
  countryName: 'Niue'
}, {
  countryCode: 'NF',
  countryName: 'Norfolk Island'
}, {
  countryCode: 'KP',
  countryName: 'North Korea'
}, {
  countryCode: 'MK',
  countryName: 'North Macedonia'
}, {
  countryCode: 'MP',
  countryName: 'Northern Mariana Islands'
}, {
  countryCode: 'NO',
  countryName: 'Norway'
}, {
  countryCode: 'OM',
  countryName: 'Oman'
}, {
  countryCode: 'PK',
  countryName: 'Pakistan'
}, {
  countryCode: 'PW',
  countryName: 'Palau'
}, {
  countryCode: 'PS',
  countryName: 'Palestine'
}, {
  countryCode: 'PA',
  countryName: 'Panama'
}, {
  countryCode: 'PG',
  countryName: 'Papua New Guinea'
}, {
  countryCode: 'PY',
  countryName: 'Paraguay'
}, {
  countryCode: 'PE',
  countryName: 'Peru'
}, {
  countryCode: 'PH',
  countryName: 'Philippines'
}, {
  countryCode: 'PN',
  countryName: 'Pitcairn Islands'
}, {
  countryCode: 'PL',
  countryName: 'Poland'
}, {
  countryCode: 'PT',
  countryName: 'Portugal'
}, {
  countryCode: 'PR',
  countryName: 'Puerto Rico'
}, {
  countryCode: 'QA',
  countryName: 'Qatar'
}, {
  countryCode: 'CG',
  countryName: 'Republic of the Congo'
}, {
  countryCode: 'RE',
  countryName: 'Réunion'
}, {
  countryCode: 'RO',
  countryName: 'Romania'
}, {
  countryCode: 'RU',
  countryName: 'Russia'
}, {
  countryCode: 'RW',
  countryName: 'Rwanda'
}, {
  countryCode: 'BL',
  countryName: 'Saint Barthélemy'
}, {
  countryCode: 'SH',
  countryName: 'Saint Helena, Ascension and Tristan da Cunha'
}, {
  countryCode: 'KN',
  countryName: 'Saint Kitts and Nevis'
}, {
  countryCode: 'LC',
  countryName: 'Saint Lucia'
}, {
  countryCode: 'MF',
  countryName: 'Saint Martin'
}, {
  countryCode: 'PM',
  countryName: 'Saint Pierre and Miquelon'
}, {
  countryCode: 'VC',
  countryName: 'Saint Vincent and the Grenadines'
}, {
  countryCode: 'WS',
  countryName: 'Samoa'
}, {
  countryCode: 'SM',
  countryName: 'San Marino'
}, {
  countryCode: 'ST',
  countryName: 'São Tomé and Príncipe'
}, {
  countryCode: 'SA',
  countryName: 'Saudi Arabia'
}, {
  countryCode: 'SN',
  countryName: 'Senegal'
}, {
  countryCode: 'RS',
  countryName: 'Serbia'
}, {
  countryCode: 'SC',
  countryName: 'Seychelles'
}, {
  countryCode: 'SL',
  countryName: 'Sierra Leone'
}, {
  countryCode: 'SG',
  countryName: 'Singapore'
}, {
  countryCode: 'SX',
  countryName: 'Sint Maarten'
}, {
  countryCode: 'SK',
  countryName: 'Slovakia'
}, {
  countryCode: 'SI',
  countryName: 'Slovenia'
}, {
  countryCode: 'SB',
  countryName: 'Solomon Islands'
}, {
  countryCode: 'SO',
  countryName: 'Somalia'
}, {
  countryCode: 'ZA',
  countryName: 'South Africa'
}, {
  countryCode: 'GS',
  countryName: 'South Georgia'
}, {
  countryCode: 'KR',
  countryName: 'South Korea'
}, {
  countryCode: 'SS',
  countryName: 'South Sudan'
}, {
  countryCode: 'ES',
  countryName: 'Spain'
}, {
  countryCode: 'LK',
  countryName: 'Sri Lanka'
}, {
  countryCode: 'SD',
  countryName: 'Sudan'
}, {
  countryCode: 'SR',
  countryName: 'Suriname'
}, {
  countryCode: 'SJ',
  countryName: 'Svalbard and Jan Mayen'
}, {
  countryCode: 'SE',
  countryName: 'Sweden'
}, {
  countryCode: 'CH',
  countryName: 'Switzerland'
}, {
  countryCode: 'SY',
  countryName: 'Syria'
}, {
  countryCode: 'TW',
  countryName: 'Taiwan'
}, {
  countryCode: 'TJ',
  countryName: 'Tajikistan'
}, {
  countryCode: 'TZ',
  countryName: 'Tanzania'
}, {
  countryCode: 'TH',
  countryName: 'Thailand'
}, {
  countryCode: 'TL',
  countryName: 'Timor-Leste'
}, {
  countryCode: 'TG',
  countryName: 'Togo'
}, {
  countryCode: 'TK',
  countryName: 'Tokelau'
}, {
  countryCode: 'TO',
  countryName: 'Tonga'
}, {
  countryCode: 'TT',
  countryName: 'Trinidad and Tobago'
}, {
  countryCode: 'TN',
  countryName: 'Tunisia'
}, {
  countryCode: 'TR',
  countryName: 'Turkey'
}, {
  countryCode: 'TM',
  countryName: 'Turkmenistan'
}, {
  countryCode: 'TC',
  countryName: 'Turks and Caicos Islands'
}, {
  countryCode: 'TV',
  countryName: 'Tuvalu'
}, {
  countryCode: 'UG',
  countryName: 'Uganda'
}, {
  countryCode: 'UA',
  countryName: 'Ukraine'
}, {
  countryCode: 'AE',
  countryName: 'United Arab Emirates'
}, {
  countryCode: 'GB',
  countryName: 'United Kingdom'
}, {
  countryCode: 'US',
  countryName: 'United States'
}, {
  countryCode: 'UM',
  countryName: 'United States Minor Outlying Islands'
}, {
  countryCode: 'VI',
  countryName: 'United States Virgin Islands'
}, {
  countryCode: 'UY',
  countryName: 'Uruguay'
}, {
  countryCode: 'UZ',
  countryName: 'Uzbekistan'
}, {
  countryCode: 'VU',
  countryName: 'Vanuatu'
}, {
  countryCode: 'VA',
  countryName: 'Vatican City'
}, {
  countryCode: 'VE',
  countryName: 'Venezuela'
}, {
  countryCode: 'VN',
  countryName: 'Viet Nam'
}, {
  countryCode: 'WF',
  countryName: 'Wallis and Futuna'
}, {
  countryCode: 'EH',
  countryName: 'Western Sahara'
}, {
  countryCode: 'YE',
  countryName: 'Yemen'
}, {
  countryCode: 'ZM',
  countryName: 'Zambia'
}, {
  countryCode: 'ZW',
  countryName: 'Zimbabwe'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);

/***/ }),

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/banner-utils */ "./assets/js/theme/common/utils/banner-utils.js");
/* harmony import */ var _global_currency_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global/currency-selector */ "./assets/js/theme/global/currency-selector.js");
/* harmony import */ var _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../papathemes/also-bought */ "./assets/js/papathemes/also-bought.js");
/* harmony import */ var _papathemes_also_bought_game__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../papathemes/also-bought-game */ "./assets/js/papathemes/also-bought-game.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* harmony import */ var _papathemes_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../papathemes/utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./countries */ "./assets/js/theme/common/countries.js");
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



 // Supermarket






 // Papathemes - AlsoBought
 // Papathemes - AlsoBought - Theme Game
 // papathemes-beautify
 // papathemes-beautify
 // papathemes-inhealth



var smallMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_16__["default"])('small'); // papathemes-kitchenary
var mediumMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_16__["default"])('medium'); // papathemes-beautify

// Supermarket - OBPS Mod
/* eslint-disable */
function shake($el, settings) {
  if (typeof settings === 'undefined') {
    settings = {};
  }
  if (typeof settings.interval === 'undefined') {
    settings.interval = 100;
  }
  if (typeof settings.distance === 'undefined') {
    settings.distance = 10;
  }
  if (typeof settings.times === 'undefined') {
    settings.times = 4;
  }
  if (typeof settings.complete === 'undefined') {
    settings.complete = function () {};
  }
  $el.css('position', 'relative');
  for (var iter = 0; iter < settings.times + 1; iter++) {
    $el.animate({
      left: iter % 2 === 0 ? settings.distance : settings.distance * -1
    }, settings.interval);
  }
  $el.animate({
    left: 0
  }, settings.interval, settings.complete);
}
/* eslint-enable */

// Supermarket: Fix Price not update when a product option is checked
function supermarketSerialize($form) {
  var assoc = $form.serializeArray().reduce(function (_assoc, _ref) {
    var name = _ref.name,
      value = _ref.value;
    // eslint-disable-next-line no-param-reassign
    _assoc[name] = value;
    return _assoc;
  }, {});
  return $.param(assoc);
}
var ProductDetails = /*#__PURE__*/function () {
  function ProductDetails($scopeArg, context, productAttributesData) {
    var _this = this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    // Papathemes Also Bought MOD
    // Papathemes Also Bought MOD {{{
    var $scope = context.enableAlsoBought ? $scopeArg.find('[data-also-bought-parent-scope]') : $scopeArg;
    this.$productViewScope = $scopeArg;
    // }}}

    this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    this.$scope = $scope;
    this.context = context;
    this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__["default"]($('[data-image-gallery]', this.$scope));
    this.imageGallery.init();
    this.listenQuantityChange();
    this.initRadioAttributes();
    (0,_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document)); // Supermarket
    this.initCustomTabs(); // Papathemes - Supermarket
    this.initTabsADA(); // Papathemes - Kitchenary

    _wishlist__WEBPACK_IMPORTED_MODULE_11__["default"].load(this.context);
    this.getTabRequests();
    micromodal__WEBPACK_IMPORTED_MODULE_21__["default"].init({
      disableScroll: true,
      openTrigger: 'data-micromodal-trigger',
      closeTrigger: 'data-micromodal-close'
    });

    // Papathemes - AlsoBought
    if (context.enableAlsoBought) {
      try {
        var _ref2 = window.supermarketThemeExtraConfig || {},
          alsoBoughtOptions = _ref2.alsoBoughtOptions;
        if (context.variant === 'game') {
          this.alsoBought = new _papathemes_also_bought_game__WEBPACK_IMPORTED_MODULE_15__["default"](this, alsoBoughtOptions);
        } else {
          this.alsoBought = new _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_14__["default"](this, alsoBoughtOptions);
        }
      } catch (err) {
        console.error(err);
      }
    }
    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = ($productOptionsElement.html() || '').trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;

    // papathemes-chiara edited for also-bought
    this.price = null;
    /** @type {string} */
    this.productId = $('input[name="product_id"]', this.$scope).val();
    this.$form = $form;

    // Papathemes - Supermarket: Fix click reviews link open tab
    $('a[href*="#tab-reviews"]', $scope).on('click', function (event) {
      var $target = $(event.currentTarget);
      if (!$target.is('.tab-title') && !$target.is('[data-tab-mobile]')) {
        var $tab = $(".tab-title[href=\"#tab-reviews-" + _this.productId + "\"]:visible, [data-tab-mobile][href=\"#tab-reviews-" + _this.productId + "\"]:visible", $scope).first();
        if (!$tab.is('.is-open, .is-active')) {
          $tab.trigger('click');
        }
        $tab.get(0).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });

    // mooncat: display brand image
    this.$scope.find('[data-brand-image]').each(function (i, img) {
      var $img = $(img);
      var src = $img.data('brandImage');
      var size = $img.data('sizes');
      var size2x = size.split('x').map(function (n) {
        return Number(n) * 2;
      }).join('x');
      $img.attr('srcset', src.replace('/original/', "/" + size + "/") + " 1x, " + src.replace('/original/', "/" + size2x + "/") + " 2x");
    });
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
      _this.setProductVariant();
    });

    // kitchenary: allow unchecking radio options of rectangle and swatch attributes {{{
    this.previousRadioValues = $productOptionsElement.find('[data-product-attribute="set-rectangle"], [data-product-attribute="set-radio"], [data-product-attribute="swatch"]').find('input[type="radio"]:checked').get().reduce(function (acc, el) {
      var _Object$assign;
      return Object.assign((_Object$assign = {}, _Object$assign[el.name] = el.value, _Object$assign), acc);
    }, {});
    $productOptionsElement.on('click', '[data-product-attribute="set-rectangle"] input[type="radio"], [data-product-attribute="set-radio"] input[type="radio"], [data-product-attribute="swatch"] input[type="radio"]', function (event) {
      var $el = $(event.currentTarget);
      var _$el$ = $el[0],
        name = _$el$.name,
        value = _$el$.value;
      if (_this.previousRadioValues[name] === value) {
        $el.prop('checked', false).trigger('change');
        _this.previousRadioValues[name] = null;
      } else {
        _this.previousRadioValues[name] = value;
      }
    });
    // }}}

    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    });
    $('#form-action-buyNow', $scope).on('click', function () {
      $form.find('input[name=action]').val('buy');
    });

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange($productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        _this.updateProductAttributes(attributesData);
        if (hasDefaultOptions) {
          _this.updateView(attributesData, attributesContent);
        } else {
          _this.updateDefaultAttributesForOOS(attributesData);
        }
      });
    } else {
      this.updateProductAttributes(productAttributesData);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    }
    $productOptionsElement.show();
    this.previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#previewModal')[0];

    // Supermarket
    if (this.previewModal) {
      this.previewModal.$modal.addClass('preview-modal').addClass("preview-modal--" + context.add_to_cart_popup);
      if (context.add_to_cart_popup === 'mini') {
        // unbind open/close event of the original modal
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.open, this.previewModal.onModalOpen);
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.close, this.previewModal.onModalClose);

        // bind open/class event for mini preview modal
        this.previewModal.onModalOpen = this.onMiniPreviewModalOpen.bind(this.previewModal);
        this.previewModal.onModalClose = this.onMiniPreviewModalClose.bind(this.previewModal);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.open, this.previewModal.onModalOpen);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.close, this.previewModal.onModalClose);
      }
    }

    // papathemes-beautify
    // this.initTabScrollToViewport();
    this.initGoToTab();
    this.initCountdown();
    // Need for papathemes-mqpo + alsobought v2 compliance
    this.$scope.data('productDetailsInstance', this);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.emit('product-productdetails-init', this);

    // Chiara: dropdown color swatches
    if (this.context.swatch_option_display_type === 'dropdown' || this.context.swatch_option_display_type === 'both') {
      Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_selectize_dist_js_standalone_selectize_min_js-node_modules_selectize_dis-91aa51"), __webpack_require__.e("assets_js_papathemes_dropdown-swatches_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../papathemes/dropdown-swatches */ "./assets/js/papathemes/dropdown-swatches.js")).then(function (module) {
        return module.default(_this, {
          hideOriginalSwatches: _this.context.swatch_option_display_type === 'dropdown'
        });
      });
    }
    $(document).on('click', function (event) {
      if ($(event.target).closest('.form-share').length === 0) {
        $('.form-share').children().removeClass('is-open');
      }
    });
    var inputShareLink = this.$scope.find('.form-share .form-input');
    inputShareLink.on('click', function (_event) {
      inputShareLink.select();
    });
    (0,_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_19__["default"])(context);
    this.getFlagLanguage();
    this.handleRegionCountry();
    this.searchRegionInModal();
    this.loadMoreRegion();
  }

  // Time countdown
  var _proto = ProductDetails.prototype;
  _proto.initCountdown = function initCountdown() {
    var initTimeCountdown = function initTimeCountdown(daysText, hoursText, minutesText, secondsText, endTime, blockTime, labelTitle, blockDays, blockHours, blockMinutes, blockTimer) {
      blockTimer.removeClass('is-srOnly');
      var calculateTimeDate = function calculateTimeDate(startTime, dateSetTime) {
        var total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
        if (total > 0) {
          var days = Math.floor(total / 86400);
          total %= 86400;
          daysText.text("" + (days < 10 ? "0" + days : days));
          if (days === 0) {
            blockDays.addClass('is-srOnly');
            daysText.addClass('is-srOnly');
          }
          var hours = Math.floor(total / 3600);
          total %= 3600;
          hoursText.text(("0" + hours).slice(-2));
          if (days === 0 && hours === 0) {
            blockHours.addClass('is-srOnly');
            hoursText.addClass('is-srOnly');
          }
          var minutes = Math.floor(total / 60);
          total %= 60;
          minutesText.text(("0" + minutes).slice(-2));
          if (days === 0 && hours === 0 && minutes === 0) {
            blockMinutes.addClass('is-srOnly');
            minutesText.addClass('is-srOnly');
          }
          var seconds = total;
          secondsText.text(("0" + seconds).slice(-2));
          labelTitle.removeClass('is-srOnly');
          blockTime.removeClass('hide');
        } else {
          blockTime.addClass('hide');
          // eslint-disable-next-line no-use-before-define
          clearInterval(timeRun);
        }
      };
      var calculateTime = function calculateTime(startTime, dateSetTime) {
        var total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
        if (total > 0) {
          var days = Math.floor(total / 86400);
          total %= 86400;
          daysText.text("" + (days < 10 ? "0" + days : days));
          if (days === 0) {
            blockDays.addClass('is-srOnly');
            daysText.addClass('is-srOnly');
          }
          var hours = Math.floor(total / 3600);
          total %= 3600;
          hoursText.text(("0" + hours).slice(-2));
          if (days === 0 && hours === 0) {
            blockHours.addClass('is-srOnly');
            hoursText.addClass('is-srOnly');
          }
          var minutes = Math.floor(total / 60);
          total %= 60;
          minutesText.text(("0" + minutes).slice(-2));
          if (days === 0 && hours === 0 && minutes === 0) {
            blockMinutes.addClass('is-srOnly');
            minutesText.addClass('is-srOnly');
          }
          var seconds = total;
          secondsText.text(("0" + seconds).slice(-2));
          labelTitle.removeClass('is-srOnly');
          blockTime.removeClass('hide');
        } else if (total === 0) {
          blockTime.addClass('hide');
          // eslint-disable-next-line no-use-before-define
          clearInterval(timeRun);
        } else if (total < 0) {
          dateSetTime.setDate(dateSetTime.getDate() + 1);
          total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
          var _days = Math.floor(total / 86400);
          total %= 86400;
          daysText.text("" + (_days < 10 ? "0" + _days : _days));
          if (_days === 0) {
            blockDays.addClass('is-srOnly');
            daysText.addClass('is-srOnly');
          }
          var _hours = Math.floor(total / 3600);
          total %= 3600;
          hoursText.text(("0" + _hours).slice(-2));
          if (_days === 0 && _hours === 0) {
            blockHours.addClass('is-srOnly');
            hoursText.addClass('is-srOnly');
          }
          var _minutes = Math.floor(total / 60);
          total %= 60;
          minutesText.text(("0" + _minutes).slice(-2));
          if (_days === 0 && _hours === 0 && _minutes === 0) {
            blockMinutes.addClass('is-srOnly');
            minutesText.addClass('is-srOnly');
          }
          var _seconds = total;
          secondsText.text(("0" + _seconds).slice(-2));
          labelTitle.removeClass('is-srOnly');
          blockTime.removeClass('hide');
        }
      };
      if (!endTime) {
        // eslint-disable-next-line no-use-before-define
        clearInterval(timeRun);
      } else {
        var regexTime = /(00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])\b/;
        var regexTimezone = /[+-][0-9]{1,2}\b$/;
        var regexDate = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])\b/;
        var resultTimezone = endTime.match(regexTimezone);
        var resultTime = endTime.match(regexTime);
        var resultDate = endTime.match(regexDate);
        var hours = resultTime[1];
        var minutes = resultTime[2];
        var seconds = resultTime[3];
        if (resultDate && !resultTimezone) {
          var dateSetTime = new Date(endTime);
          var startTime = new Date();
          calculateTimeDate(startTime, dateSetTime);
        } else if (!resultDate && resultTimezone) {
          var timeZone = resultTimezone[0].replace(/[\+']+/g, '');
          var dateSetTimeZone = new Date();
          var tzDifference = timeZone * 60 + dateSetTimeZone.getTimezoneOffset();
          var offsetTime = new Date(dateSetTimeZone.getTime() + tzDifference * 60 * 1000);
          var dateSetTimeEnd = new Date();
          dateSetTimeEnd.setHours(hours);
          dateSetTimeEnd.setMinutes(minutes);
          dateSetTimeEnd.setSeconds(seconds);
          calculateTime(offsetTime, dateSetTimeEnd);
        } else if (resultDate && resultTimezone) {
          var _timeZone = resultTimezone[0].replace(/[\+']+/g, '');
          var _dateSetTimeZone = new Date();
          var _tzDifference = _timeZone * 60 + _dateSetTimeZone.getTimezoneOffset();
          var _offsetTime = new Date(_dateSetTimeZone.getTime() + _tzDifference * 60 * 1000);
          var _dateSetTime = resultDate[0] + " " + resultTime[0];
          var _dateSetTimeEnd = new Date(_dateSetTime);
          calculateTimeDate(_offsetTime, _dateSetTimeEnd);
        } else {
          var _startTime = new Date();
          var _dateSetTime2 = new Date();
          _dateSetTime2.setHours(hours);
          _dateSetTime2.setMinutes(minutes);
          _dateSetTime2.setSeconds(seconds);
          calculateTime(_startTime, _dateSetTime2);
        }
      }
    };
    var $scope = this.$scope.find('.productView-saleCount');
    var daysText = $scope.find('._days');
    var hoursText = $scope.find('._hours');
    var minutesText = $scope.find('._minutes');
    var secondsText = $scope.find('._seconds');
    var endTime = $scope.data('countdown');
    var labelTitle = $scope.find('._labelTime__title');
    var blockTimer = $scope.find('._showTimer');
    var blockDays = $scope.find('._blockDays');
    var blockHours = $scope.find('._blockHours');
    var blockMinutes = $scope.find('._blockMinutes');
    var timeRun = setInterval(function () {
      initTimeCountdown(daysText, hoursText, minutesText, secondsText, endTime, $scope, labelTitle, blockDays, blockHours, blockMinutes, blockTimer);
    }, 1000);
  }

  // papathemes-beautify
  ;
  _proto.initTabScrollToViewport = function initTabScrollToViewport() {
    var _this2 = this;
    var $body = $('body');
    var $quickView = this.$scope.closest('.quickView').first();
    $quickView.css('position', 'relative');
    var resumeStickyHeader;
    var scrollToView = function scrollToView(el) {
      var $target = $($(el).attr('href'), _this2.$scope).first();
      if ($quickView.length > 0) {
        var h = $quickView.scrollTop();
        var $el = $target;
        var i = 0;
        while (!$el.is('.quickView') && $el.length > 0 && i++ < 20) {
          h += $el.position().top;
          $el = $el.offsetParent();
        }
        $quickView.animate({
          scrollTop: h - 50
        }, 300);
      } else {
        $('html, body').animate({
          scrollTop: $target.offset().top - 50
        }, {
          duration: 300,
          // skip sticky header while scrolling to the tab content
          start: function start() {
            clearTimeout(resumeStickyHeader);
            $body.addClass('_skipCheckScrollUpStickyHeader');
          },
          complete: function complete() {
            return $('html, body').clearQueue();
          },
          always: function always() {
            clearTimeout(resumeStickyHeader);
            resumeStickyHeader = setTimeout(function () {
              return $body.removeClass('_skipCheckScrollUpStickyHeader');
            }, 200);
          }
        });
      }
    };
    $('.productView-description .tab', this.$scope).on('opened', function (event) {
      if (mediumMediaQueryList.matches) {
        scrollToView($(event.target).find('a').get(0));
      }
    });
  }

  // papathemes-beautify
  ;
  _proto.initGoToTab = function initGoToTab() {
    var _this3 = this;
    $('[data-gototab]', this.$scope).on('click', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var href = $el.attr('href');
      if (mediumMediaQueryList.matches) {
        var $target = _this3.$scope.find('[data-product-tab]').find("a[href=\"" + href + "\"").first();
        $target.trigger('click');
      } else {
        var _$target = _this3.$scope.find(href).first();
        (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_17__.scrollTop)(_$target.offset().top - 100);
      }
    });
  };
  _proto.getFlagLanguage = function getFlagLanguage() {
    var $summaryLang = $('[data-summary-language]', this.$scope);
    if (!$summaryLang.length) {
      return;
    }
    var $flagList = $('[data-summary-language]', this.$scope).siblings('.flag-group').find('.flag-list');
    var $flagMore = $('[data-summary-language]', this.$scope).siblings('.flag-group').find('#flag-more');
    var showMoreTxt = $flagMore.data('showMore');
    var showLessTxt = $flagMore.data('showLess');
    var langTxt = $summaryLang.text();
    var flagArr = [];
    langTxt.split('|').forEach(function (element) {
      if (element.length === 2) {
        flagArr.push(element.toLowerCase());
      } else {
        for (var i = 0; i < element.length - 1; i += 2) {
          var txt = element.slice(i, i + 2);
          flagArr.push(txt.toLowerCase());
        }
      }
    });
    var path = $flagList.data('src');

    // add flag
    $flagList.not('._added').addClass('_added').each(function () {
      for (var i = 0; i < flagArr.length; i++) {
        var flag = "<img class=\"flag-item\" src=\"" + path + flagArr[i] + ".png\" alt=\"" + flagArr[i] + "\" title=\"" + flagArr[i] + "\">";
        $flagMore.before(flag);
      }
    });

    // Load more flag left
    var more = "+ " + (flagArr.length - 2) + " " + showMoreTxt;
    if (flagArr.length > 2) {
      $flagMore.show();
      $flagMore.text(more);
    }

    // Load more - less
    $flagMore.on('click', function (e) {
      var $btn = $(e.currentTarget);
      if (!$btn.data('flagCollapse')) {
        $flagList.addClass('is-open');
        $btn.text("- " + showLessTxt);
        $btn.data('flagCollapse', true);
      } else {
        $flagList.removeClass('is-open');
        $btn.text(more);
        $btn.data('flagCollapse', false);
      }
    });
  };
  _proto.handleRegionCountry = function handleRegionCountry() {
    var $customfiledRegion = $('._special-info-region', this.$scope).find('[data-customfield-region]');
    var $currentRegion = $('._special-info-region', this.$scope).find('[data-current-region]');
    var regionCannotActiveTxt = $customfiledRegion.data('cannotActive');
    var regionTxt = $customfiledRegion.data('customfieldRegion');
    if (!$customfiledRegion.length || !regionTxt) {
      return;
    }
    var currentCountryCode = this.context.country_code;
    var currentCountryName = _countries__WEBPACK_IMPORTED_MODULE_20__["default"].find(function (country) {
      return country.countryCode === currentCountryCode;
    }).countryName;

    // Change productView-info
    var listCustomfieldRegion = [];
    $currentRegion.text(currentCountryName + ".");
    if (regionTxt.toLowerCase() === 'all') {
      listCustomfieldRegion.push(regionTxt.toLowerCase());
    } else {
      // Format list region customfield
      regionTxt.split('|').forEach(function (element) {
        if (element.length === 2) {
          listCustomfieldRegion.push(element);
        } else {
          for (var i = 0; i < element.length - 1; i += 2) {
            var txt = element.slice(i, i + 2);
            listCustomfieldRegion.push(txt);
          }
        }
      });
      listCustomfieldRegion.sort();
      $customfiledRegion.attr('data-customfield-region', listCustomfieldRegion.join('|'));
      if ($.inArray(currentCountryCode, listCustomfieldRegion) === -1) {
        $customfiledRegion.text(regionCannotActiveTxt);
      }
    }
    $('body').not('._added-region').addClass('_added-region').each(function () {
      var lastClicked = null;
      $('body').on('click', '[data-micromodal-trigger="regionRetrictionModal"]', function (event) {
        event.preventDefault();
        var $currentButton = $(event.currentTarget);
        if ($currentButton.is(lastClicked)) {
          return;
        }
        var $listRegion = $currentButton.parents('._special-info-region').find('.productView-info-value');
        var arrRegion = $listRegion.attr('data-customfield-region').split('|');
        var $modal = $('#regionRetrictionModal');
        var $modalHeader = $modal.find('.modal__header');
        var $regionTitle = $modal.find('[data-region-title]');
        var $regionName = $modal.find('[data-region-name]');
        var $regionList = $modal.find('.region-list');
        var $labelCountry = $modal.find('.region-info-country .region-info-value');
        var $restricted = $modal.find('.region-info-restricted');
        var $restrictedList = $restricted.find('.region-info-restrictedList');
        var globalTxt = $restrictedList.data('regionGlobal');
        var $restrictedMore = $restricted.find('#restricted-more');
        var restrictedCannotActive = $regionTitle.data('regionCannotActivated');
        var showMoreTxt = $restrictedMore.data('showMore');
        $labelCountry.text(currentCountryName);
        $regionName.text(currentCountryName);
        // Region customfield == 'All'
        if (arrRegion[0].toLowerCase() === 'all') {
          $restrictedList.find('span').remove();
          $restrictedList.prepend("<span>" + globalTxt + "</span>");
          $regionList.html('');
          $restrictedMore.hide();
          $.each(_countries__WEBPACK_IMPORTED_MODULE_20__["default"], function (index, country) {
            var listItem = $('<li>').text(country.countryName);
            $regionList.append(listItem);
          });
        } else {
          var specialCountryArr = [];
          $restrictedList.find('span').remove();
          $regionList.html('');
          var _loop = function _loop() {
            var countryCode = arrRegion[i];
            var countryObject = _countries__WEBPACK_IMPORTED_MODULE_20__["default"].find(function (country) {
              return country.countryCode === countryCode;
            });
            if (countryObject) {
              specialCountryArr.push({
                countryCode: countryObject.countryCode,
                countryName: countryObject.countryName
              });

              // add country in search box
              var li = "<li>" + countryObject.countryName + "</li>";
              $regionList.append(li);

              // add country in search restrictedList
              var span = "<span>" + countryObject.countryName + "</span>";
              $restrictedMore.before(span);
            }
          };
          for (var i = 0; i < _countries__WEBPACK_IMPORTED_MODULE_20__["default"].length; i++) {
            _loop();
          }

          // not includes current country
          if ($.inArray(currentCountryCode, arrRegion) === -1) {
            $modalHeader.addClass('_not-activated');
            $regionTitle.text(restrictedCannotActive);
          }

          // Handle loadmore in popup
          var more = "+ " + (arrRegion.length - 2) + " " + showMoreTxt;
          // Show 2 flag
          if (arrRegion.length > 2) {
            $restrictedMore.show();
            $restrictedMore.text(more);
          }
        }
        lastClicked = $currentButton;
      });
    });
  };
  _proto.loadMoreRegion = function loadMoreRegion() {
    var $modal = $('#regionRetrictionModal');
    var $restricted = $modal.find('.region-info-restricted');
    var $restrictedList = $restricted.find('.region-info-restrictedList');
    var $restrictedMore = $restricted.find('#restricted-more');
    var showMoreTxt = $restrictedMore.data('showMore');
    var showLessTxt = $restrictedMore.data('showLess');
    $restrictedList.not('._added').addClass('_added').each(function () {
      // Load more - less region in modal
      $restrictedMore.on('click', function (e) {
        var $btn = $(e.currentTarget);
        var countRegion = $btn.siblings('span').length;
        if (!$btn.data('restrictedCollapse')) {
          $restrictedList.addClass('is-open');
          $btn.text("- " + showLessTxt);
          $btn.data('restrictedCollapse', true);
        } else {
          $restrictedList.removeClass('is-open');
          $btn.text("+ " + (countRegion - 2) + " " + showMoreTxt);
          $btn.data('restrictedCollapse', false);
        }
      });
    });
  };
  _proto.searchRegionInModal = function searchRegionInModal() {
    var $modal = $('#regionRetrictionModal');
    var $regionList = $modal.find('.region-list');
    var $input = $modal.find('#region-search');
    $input.on('input', function () {
      var filter = $input.val().toUpperCase();
      $regionList.find('li').each(function (index, element) {
        var txtValue = $(element).text() || $(element).html();
        $(element).toggle(txtValue.toUpperCase().indexOf(filter) > -1);
      });
    });
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */;
  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
  };
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector('input:checked'); // papathemes-beautify edited
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels ? checked.labels[0].innerText : $("label[for=" + checked.id + "]").first().text();
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels ? checked.labels[0].children[0] : $("label[for=" + checked.id + "]").children().get(0);
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText;
        var card = $("[data-name=" + JSON.stringify(productName) + "]"); // Fixed by PapaThemes
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $buyNow: $('#form-action-buyNow', $scope),
      $addToCart: $('#form-action-addToCart, #form-action-addToCartSticky', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock, .productView-info-name--stock, .productView-info-value--stock', $scope),
        // papathemes-beautify edited
        $input: $('[data-product-stock]', $scope),
        $badge: $('.productView-stockLabel', $scope) // papathemes-beautify
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      mpn: {
        $label: $('dt.mpn-label', $scope),
        $value: $('[data-product-mpn]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope),
      saleCountdown: {
        $div: $('.productView-saleCount', $scope),
        $spanSale: $('._labelTime__title ._priceSale', $scope)
      },
      saleLabel: {
        $div: $('.productView-saleLabel', $scope),
        $span: $('.productView-saleLabel ._priceSale', $scope)
      }
    };
  }

  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */;
  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   *
   * Handle product options changes
   *
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this4 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }

    // Supermarket: display selected swatch title
    if ($changedOption.data('productAttributeLabel')) {
      $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html($changedOption.data('productAttributeLabel'));

      // kitchenary: clear swatch title when uncheck radio
      if ($changedOption.is('input[type="radio"]') && !$changedOption.prop('checked')) {
        $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html('');
      }
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = (response == null ? void 0 : response.data) || {};
      var productAttributesContent = (response == null ? void 0 : response.content) || {};
      _this4.updateProductAttributes(productAttributesData);
      _this4.updateView(productAttributesData, productAttributesContent);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    });
  };
  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.zoom_size
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.product_size
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageSrcset = this.context.product_image_responsive ? _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data) : '';
      this.imageGallery.setAlternateImage({
        // mainImageUrl: `${mainImageUrl}?imbypass=on`,
        // zoomImageUrl: `${zoomImageUrl}?imbypass=on`,
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this5 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this5.getViewModel(_this5.$scope);
      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = parseInt($input.val(), 10);
      // Start Ticket 1002
      var getPackValue = $('body').find('[data-pack-value]').val();
      //console.log('getPackValue '+getPackValue);
      if (getPackValue && getPackValue !== undefined) {
        if (getPackValue) {
          getPackValue = parseInt(getPackValue);
        }
        var getQtyInput = $('body').find('[data-product-qty]');
        if ($target.data('action') === 'inc') {
          // If quantity max option is set
          if (quantityMax > 0) {
            // Check quantity does not exceed max
            if (qty + 1 <= quantityMax) {
              //qty++;
            }
          } else {
            //qty++;
          }
          var qty_updated = qty + getPackValue;
          setTimeout(function () {
            $(getQtyInput).val(qty_updated);
            $(getQtyInput).removeClass('tempClassActive');
          }, 250);
        } else if (qty > 1) {
          $(getQtyInput).addClass('tempClassActive');
          if (qty > getPackValue) {
            var _qty_updated = qty - getPackValue;
            setTimeout(function () {
              $(getQtyInput).val(_qty_updated);
              $(getQtyInput).removeClass('tempClassActive');
            }, 250);
          } else {
            setTimeout(function () {
              $(getQtyInput).val(getPackValue);
              $(getQtyInput).removeClass('tempClassActive');
            }, 250);
          }
        }
      } else {
        // If action is incrementing
        if ($target.data('action') === 'inc') {
          // If quantity max option is set
          if (quantityMax > 0) {
            // Check quantity does not exceed max
            if (qty + 1 <= quantityMax) {
              qty++;
            }
          } else {
            qty++;
          }
        } else if (qty > 1) {
          // If quantity min option is set
          if (quantityMin > 0) {
            // Check quantity does not fall below min
            if (qty - 1 >= quantityMin) {
              qty--;
            }
          } else {
            qty--;
          }
        }
      }
      // End Ticket 1002
      viewModel.quantity.$input.val(qty);
      viewModel.quantity.$text.text(qty);
    });

    // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when enter on quantity box won't decrease 1 unit
    // --------------------------------------------------------------------
    this.getViewModel(this.$scope).quantity.$input.on('keypress', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });

    // --------------------------------------------------------------------
  }

  // papathemes-chiara added for also-bought
  ;
  _proto.addProductToCartAsync = function addProductToCartAsync() {
    var _this6 = this;
    return new Promise(function (resolve) {
      var $form = $('form[data-cart-item-add]', _this6.$scope);
      var form = $form.get(0);
      var $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', _this6.$scope);
      var originalBtnVal = $addToCartBtn.html();
      var waitMessage = $addToCartBtn.data('waitMessage');

      // Do not do AJAX if browser doesn't support FormData
      if (window.FormData === undefined) {
        return;
      }
      $addToCartBtn.html(waitMessage).prop('disabled', true);
      _this6.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(_this6.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, response) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                // AlsoBought Mod
                $addToCartBtn.html(originalBtnVal).prop('disabled', false);
                _this6.$overlay.hide();
                resolve([err, response]);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this7 = this;
    var $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', $(event.target));
    var originalBtnVal = $addToCartBtn.html();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }

    // Prevent default
    event.preventDefault();
    $addToCartBtn.html(waitMessage).prop('disabled', true);
    this.$overlay.show();

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, response) {
        var errorMessage, tmp, modal, _modal;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (response && response.data && response.data.cart_id) {
                (0,_global_currency_selector__WEBPACK_IMPORTED_MODULE_13__["default"])(response.data.cart_id);
              }
              errorMessage = err || response.data.error;
              $addToCartBtn.html(originalBtnVal).prop('disabled', false);
              _this7.$overlay.hide();

              // Guard statement
              if (!errorMessage) {
                _context2.next = 8;
                break;
              }
              // Strip the HTML from the error message
              tmp = document.createElement('DIV');
              tmp.innerHTML = errorMessage;
              return _context2.abrupt("return", (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(tmp.textContent || tmp.innerText));
            case 8:
              if (!_this7.context.redirect_cart) {
                _context2.next = 11;
                break;
              }
              _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
              return _context2.abrupt("return");
            case 11:
              if (!(form.action.value === 'buy')) {
                _context2.next = 14;
                break;
              }
              _this7.redirectTo(_this7.context.urls.checkout.single_address);
              return _context2.abrupt("return");
            case 14:
              if (!(_this7.context.add_to_cart_popup === 'cart')) {
                _context2.next = 18;
                break;
              }
              // close quick-view modal
              modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.defaultModal)();
              if (modal) {
                modal.close();
              }
              return _context2.abrupt("return", (0,_papathemes_utils__WEBPACK_IMPORTED_MODULE_18__.openCartPreview)(response.data.cart_item.id, _this7.context));
            case 18:
              // Open preview modal and update content
              if (_this7.previewModal) {
                // Supermarket OBPS Mod
                _modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.defaultModal)();
                _modal.close();
                if (_this7.context.add_to_cart_popup !== 'hide') {
                  _this7.previewModal.open();
                }
                if (window.ApplePaySession) {
                  _this7.previewModal.$modal.addClass('apple-pay-supported');
                }
                _this7.updateCartContent(_this7.previewModal, response.data.cart_item.id);
              } else {
                _this7.$overlay.show();
                // if no modal, redirect to the cart page
                _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
              }
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.getCartContent = function getCartContent(cartItemId, onComplete, template) {
    if (template === void 0) {
      template = 'cart/preview';
    }
    var options = {
      template: template,
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, onComplete);
  }

  /**
   * Redirect to url
   *
   * @param {String} url
   */;
  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete, template) {
    var _this8 = this;
    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);
      _this8.applyModalAutoClose(modal); // Supermarket

      // Update cart counter
      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartPrice = $('[data-cart-price]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      var price = $cartPrice.data('cartPrice') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', [quantity, price]);
      if (onComplete) {
        onComplete(response);
      }

      // Supermarket - OBPS Mod
      // shake($('.navUser-item--cart > .navUser-action'));
    }, template);
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message', this.$scope); // Papathemes fix missing $scope

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);

      // papathemes-beautify
      if (price.rrp_with_tax || price.non_sale_price_with_tax) {
        viewModel.$priceWithTax.addClass('_hasSale');
        var salePercent = Math.round(((price.rrp_with_tax ? price.rrp_with_tax.value : price.non_sale_price_with_tax.value) - price.with_tax.value) / (price.rrp_with_tax ? price.rrp_with_tax.value : price.non_sale_price_with_tax.value) * 100);
        viewModel.saleCountdown.$div.show();
        viewModel.saleCountdown.$spanSale.text(salePercent + "%");
        viewModel.saleLabel.$div.show();
        viewModel.saleLabel.$span.text(salePercent + "%");
      } else {
        viewModel.$priceWithTax.removeClass('_hasSale');
        viewModel.saleCountdown.$div.hide();
        viewModel.saleLabel.$div.hide();
      }
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);

      // papathemes-beautify
      if (price.rrp_without_tax || price.non_sale_price_without_tax) {
        viewModel.$priceWithoutTax.addClass('_hasSale');
        var _salePercent = Math.round(((price.rrp_without_tax ? price.rrp_without_tax.value : price.non_sale_price_without_tax.value) - price.without_tax.value) / (price.rrp_without_tax ? price.rrp_without_tax.value : price.non_sale_price_without_tax.value) * 100);
        viewModel.saleCountdown.$div.show();
        viewModel.saleCountdown.$spanSale.text(_salePercent + "%");
        viewModel.saleLabel.$div.show();
        viewModel.saleLabel.$span.text(_salePercent + "%");
      } else {
        viewModel.$priceWithoutTax.removeClass('_hasSale');
        viewModel.saleCountdown.$div.hide();
        viewModel.saleLabel.$div.hide();
      }
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // If MPN is available
    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else if (viewModel.mpn.$value.data('originalMpn')) {
      viewModel.mpn.$value.text(viewModel.mpn.$value.data('originalMpn'));
      viewModel.mpn.$label.show();
    } else {
      viewModel.mpn.$label.hide();
      viewModel.mpn.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);

      // mooncat: show low stock status
      if (data.low_stock && data.stock < data.low_stock) {
        viewModel.stock.$container.addClass('_lowStock');
      } else {
        viewModel.stock.$container.removeClass('_lowStock');
      }
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }

    // papathemes-beautify: show / hide stock badge
    if (data.instock && data.purchasable) {
      viewModel.stock.$badge.removeClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('instockMessage'));
      });
    } else {
      viewModel.stock.$badge.addClass('_outstock').text(data.stock_message || data.purchasing_message);
      // viewModel.stock.$badge.addClass('_outstock').each((i, el) => {
      //     $(el).text($(el).data('outstockMessage'));
      // });
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    if (data.purchasable) {
      this.$scope.find('._addToCartVisibility').filter(':hidden').show();
      this.$scope.find('#form-action-buyNow').filter(':hidden').show();
    } else {
      this.$scope.find('._addToCartVisibility').hide();
      this.$scope.find('#form-action-buyNow').hide();
    }

    // papathemes-kitchenary: dispatch event for also-bought
    this.$scope.trigger('product-view-update', [data]);
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$buyNow.prop('disabled', true); // papathemes-chiara
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$buyNow.prop('disabled', false); // papathemes-chiara
      viewModel.$increments.prop('disabled', false);
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this9 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";

    // papathemes-chiara edited for also-bought
    this.price = data.price;
    this.$scope.trigger('price-change');
    this.showProductImage(data.image);
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this9.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this9.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
    this.$scope.trigger('updateProductAttributes'); // papathemes-beautify for dropdown-swatches
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this10 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this10.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Init custom tabs by parsing product description
   * (Added by Papathemes - Supermarket)
   */;
  _proto.initCustomTabs = function initCustomTabs() {
    var $customTabs = $('[data-custom-tab]', this.$scope);
    if ($customTabs.length === 0) {
      return;
    }
    var $tabs = $('.productView-description > .tabs', this.$scope);
    var $tabsContent = $('.productView-description', this.$scope);
    if ($tabs.length === 0 || $tabsContent.length === 0) {
      return;
    }
    $customTabs.each(function (i, el) {
      var $el = $(el);
      var $title = $el.find('[data-custom-tab-title]');
      var title = $title.html();
      var txtTitle = $title.text();
      var expand = $title.data('expand');
      if (!expand) {
        expand = 'View All';
      }
      var close = $title.data('close');
      if (!close) {
        close = 'Close';
      }
      $title.remove();
      var content = $el.html();
      $el.remove();
      $tabs.children().append("<li class=\"tab tab--custom tab--custom-" + i + "\" role=\"presentation\"><a class=\"tab-title\" href=\"#tab-custom-" + i + "\" role=\"tab\">" + title + "</a></li>");
      $tabsContent.append("<div class=\"tab-content tab-content--custom tab-content--custom-" + i + "\" id=\"tab-custom-" + i + "\" aria-hidden=\"true\" role=\"tabpanel\" aria-label=\"" + txtTitle + "\"><div class=\"container\"><a class=\"productView-description-tabHeading\" data-tab-mobile href=\"#tab-custom-" + i + "\">" + title + "<svg class=\"icon\"><use xlink:href=\"#icon-product-tab-arrow\"></svg></a><div class=\"productView-description-tabContent\">" + content + "</div></div></div>");
    });
  };
  _proto.initTabsADA = function initTabsADA() {
    var _this11 = this;
    // Click product tab in Tablet - Desktop
    this.$scope.find('[data-product-tab] .tab').on('click', function (e) {
      e.preventDefault();
      var $el = $(e.currentTarget);
      var idContent = $el.find('.tab-title').attr('href');
      var $productTab = $el.closest('[data-product-tab]');
      $el.parent().find('.tab').removeClass('is-active');
      $el.parent().find('.tab-title').attr('aria-selected', false);
      $productTab.find('.tab-content').removeClass('is-active').attr('aria-hidden', true);
      $el.addClass('is-active');
      $el.find('.tab-title').attr('aria-selected', true);
      $productTab.find("" + idContent).addClass('is-active').attr('aria-hidden', false);
    });

    // Click product tab in Mobile
    this.$scope.find('[data-product-tab] [data-tab-mobile]').on('click', function (e) {
      e.preventDefault();
      var $el = $(e.currentTarget);
      $el.toggleClass('is-open');
      $el.siblings('.productView-description-tabContent').toggleClass('is-open');
      $el.closest('.tab-content').attr('aria-hidden', $el.closest('.tab-content').attr('aria-hidden') === 'false' ? 'true' : 'false');
    });
    var updateTabs = function updateTabs() {
      if (smallMediaQueryList.matches) {
        // Handle product tab - Mobile to Tablet
        // Change default attribute, class
        _this11.$scope.find('[data-product-tab]').each(function (i, el) {
          var $el = $(el);
          $el.find('.tab').removeClass('is-active').first().addClass('is-active');
          $el.find('tab-title').attr('aria-selected', false).first().attr('aria-selected', true);
          $el.find('.tab-content').removeClass('is-active').attr('aria-hidden', true).first().addClass('is-active').first().attr('aria-hidden', false);
        });
      } else {
        // Handle product tab - Tablet to Mobile
        _this11.$scope.find('[data-product-tab]').each(function (i, el) {
          var $el = $(el);
          $el.find('[data-tab-mobile]').removeClass('is-open');
          $el.find('.productView-description-tabContent').removeClass('is-open');
          $el.find('.tab-content').attr('aria-hidden', false);
          $el.find('.tab-content.is-active').find('[data-tab-mobile]').addClass('is-open');
          $el.find('.tab-content.is-active').find('.productView-description-tabContent').addClass('is-open');
          $el.find('.tab-content.is-active').removeClass('is-active');
        });
      }
    };

    // Handle product tab when change divice
    smallMediaQueryList.addListener(updateTabs);
    updateTabs();
  }

  // Papathemes - Supermarket
  ;
  _proto.onMiniPreviewModalOpen = function onMiniPreviewModalOpen() {
    $('body').addClass('has-activeModal--miniPreview');
  }

  // Papathemes - Supermarket
  ;
  _proto.onMiniPreviewModalClose = function onMiniPreviewModalClose() {
    $('body').removeClass('has-activeModal--miniPreview');
    if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
      window.clearInterval(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
  }

  // Papathemes - Supermarket
  ;
  _proto.applyModalAutoClose = function applyModalAutoClose(modal) {
    var $autoCloseEl = modal.$modal.find('[data-auto-close]');
    if ($autoCloseEl.length > 0) {
      var sec = $autoCloseEl.data('autoClose') || 5;
      var $count = $autoCloseEl.find('.count');
      $count.html(sec);
      modal.autoCloseTimer = window.setInterval(function () {
        // eslint-disable-line
        if (sec > 1) {
          sec--;
          $count.html(sec);
        } else {
          window.clearInterval(modal.autoCloseTimer);
          modal.autoCloseTimer = null; // eslint-disable-line
          modal.close();
        }
      }, 1000);
    }
  };
  return ProductDetails;
}();


/***/ }),

/***/ "./assets/js/theme/common/utils/banner-utils.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/common/utils/banner-utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

var bannerUtils = {
  dispatchProductBannerEvent: function dispatchProductBannerEvent(productAttributes) {
    if (!productAttributes.price || _ie_helpers__WEBPACK_IMPORTED_MODULE_0__.isBrowserIE) return;
    var price = 0;
    if (!productAttributes.price.price_range) {
      if (productAttributes.price.without_tax) {
        price = productAttributes.price.without_tax.value;
      }
      if (productAttributes.price.with_tax) {
        price = productAttributes.price.with_tax.value;
      }
    }
    var evt = new CustomEvent('bigcommerce.productpricechange', {
      detail: {
        amount: price
      }
    });
    window.dispatchEvent(evt);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerUtils);

/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baguettebox */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baguettebox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");


// ============================================================================
// PAPATHEMES SARAHMARKET CUSTOMIZATION:
// - Using slick carousel for image thumbnails.
// - Using baguetteBox for image lightbox.
// ============================================================================



// eslint-disable-next-line import/no-unresolved


var smallMediaQuery = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_5__["default"])('small'); // papathemes-beautify

function fixADA($slick) {
  $slick.on('init afterChange', function (_e, slick) {
    var $slide = slick.$list.find('.slick-slide');
    $slide.not('.slick-active').find('a, button').attr('tabindex', '-1');
    $slide.filter('.slick-active').find('a, button').attr('tabindex', '0');
  });
  $slick.on('init', function (_e, slick) {
    slick.$list.on('keydown', function (event) {
      if (event.keyCode === 37 || event.keyCode === 39) {
        window.setTimeout(function () {
          return slick.$slides.filter('.slick-current').focus();
        }, 100);
      }
      if (event.keyCode === 13) {
        slick.$slides.filter('.slick-current').find('a, button').get(0).dispatchEvent(new Event('click', {
          bubbles: true,
          cancelable: true
        }));
      }
    });
  });
}
var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    var _this = this;
    this.$gallery = $gallery;
    this.$mainCarousel = $gallery.find('[data-image-gallery-main]');
    this.$navCarousel = $gallery.find('[data-image-gallery-nav]').not('[data-image-gallery-nav-disable-slider]');
    this.$navDisableCarousel = $gallery.find('[data-image-gallery-nav][data-image-gallery-nav-disable-slider]');
    this.$videoPlayer = $gallery.find('[data-video-player]');
    var $defSlide = this.$mainCarousel.find('.slick-current');
    var defSlideIdx = $defSlide.parent().children().index($defSlide);
    this.defaultSlideIndex = defSlideIdx > -1 ? defSlideIdx : 0;
    var uid = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('');
    if (this.$mainCarousel.attr('id') === '') {
      this.$mainCarousel.attr('id', "imageGalleryMainCarousel" + uid);
    }
    if (this.$navCarousel.attr('id') === '') {
      this.$navCarousel.attr('id', "imageGalleryNavCarousel" + uid);
    }
    this.navRows = parseInt(this.$navCarousel.data('image-gallery-nav-rows'), 10) || 1;
    this.playVideoInline = this.$navDisableCarousel.length === 0 && this.navRows === 1;
    this.baguetteBoxOptions = {
      onChange: function onChange(currentIndex) {
        _this.stopVideo();
        _this.$videoPlayer.removeClass('_bb');
        _this.$gallery.removeClass('_bb');
        var playVideo = function playVideo(url) {
          _this.$gallery.addClass('_bb');
          _this.$videoPlayer.addClass('_bb');
          _this.showVideo(url);
        };
        var slick = _this.$mainCarousel.slick('getSlick');
        var $a = jquery__WEBPACK_IMPORTED_MODULE_2___default()(slick.$slides[currentIndex]).find('[data-video-id]').clone(false).on('click', function (event) {
          event.preventDefault();
          playVideo(jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget).data('videoUrl'));
        });
        if ($a.length > 0) {
          var $figure = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#baguetteBox-slider').children().eq(currentIndex).children('figure');
          $figure.html('').append($a);
          playVideo($a.data('videoUrl'));
        }
      },
      afterHide: function afterHide() {
        _this.stopVideo();
        _this.$videoPlayer.removeClass('_bb');
        _this.$gallery.removeClass('_bb');
      },
      removeVideoClickEvent: function removeVideoClickEvent() {
        if (_this.playVideoInline) {
          _this.$mainCarousel.find('[data-video-id]').each(function (i, el) {
            var $el = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el);
            var $clone = $el.clone(false);
            $el.after($clone).remove();
          });
        }
      }
    };
  }
  var _proto = ImageGallery.prototype;
  _proto.stopVideo = function stopVideo() {
    var $iframe = this.$videoPlayer.find('iframe');
    $iframe.replaceWith($iframe.clone().attr('src', ''));
    this.$videoPlayer.addClass('hide');
  };
  _proto.showVideo = function showVideo(src) {
    this.$videoPlayer.removeClass('hide');
    var $iframe = this.$videoPlayer.find('iframe');
    $iframe.replaceWith($iframe.clone().attr('src', src));
  };
  _proto.init = function init() {
    this.bindEvents();
  };
  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(imgObj);
    this.swapMainImage();
  };
  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(this.currentImage);
    }
    this.setMainImage(imgObj);
  };
  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };
  _proto.setActiveThumb = function setActiveThumb() {
    var i = this.$navCarousel.slick('slickCurrentSlide');
    this.$mainCarousel.find('.slick-slide').removeClass('slick-current slick-active').eq(i).addClass('slick-current slick-active');
  };
  _proto.swapMainImage = function swapMainImage(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$ignoreBaguetteBo = _ref.ignoreBaguetteBox,
      ignoreBaguetteBox = _ref$ignoreBaguetteBo === void 0 ? false : _ref$ignoreBaguetteBo;
    /*
    try {
        this.$mainCarousel.slick('slickGoTo', this.currentSlideIndex);
    } catch (e) {
        // ignore
    }
    */
    this.$mainCarousel.find('.slick-slide').eq(this.defaultSlideIndex).find('img').attr('src', this.currentImage.mainImageUrl);
    this.$mainCarousel.find('.slick-slide').eq(this.defaultSlideIndex).find('img').attr('srcset', this.currentImage.mainImageSrcset);
    this.$mainCarousel.find('.slick-slide').eq(this.defaultSlideIndex).find('a').attr('href', this.currentImage.zoomImageUrl);
    this.$mainCarousel.slick('slickGoTo', this.defaultSlideIndex);
    if (!ignoreBaguetteBox) {
      // empty lightbox contents of current galley so that it will be created again
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#baguetteBox-slider').html('');
      this.initBaguetteBox();
    }
  };
  _proto.bindEvents = function bindEvents() {
    var _this2 = this;
    fixADA(this.$mainCarousel);
    this.$mainCarousel.on('init', function () {
      var $img = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-slick-index=\"" + _this2.defaultSlideIndex + "\"] img", _this2.$mainCarousel);
      var $a = $img.closest('a');
      _this2.currentImage = {
        mainImageUrl: $a.data('originalImg') || $img.attr('src'),
        zoomImageUrl: $a.data('originalZoom'),
        mainImageSrcset: $a.data('originalSrcset'),
        $selectedThumb: null
      };
    }).on('beforeChange', function (event, slick) {
      // eslint-disable-next-line no-use-before-define
      onNavCarouselSetPosition(event, slick);
    }).on('afterChange', function (event, slick) {
      _this2.setActiveThumb();
      _this2.stopVideo();
      // eslint-disable-next-line no-use-before-define
      onNavCarouselSetPosition(event, slick);
    }).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      initialSlide: this.defaultSlideIndex,
      asNavFor: this.$navCarousel.length > 0 && this.navRows === 1 ? "#" + this.$navCarousel.attr('id') : null,
      swipe: false,
      arrows: true,
      dots: false,
      responsive: [{
        breakpoint: 800,
        settings: {
          swipe: true,
          swipeToSlide: false
        }
      }, {
        breakpoint: 550,
        settings: {
          arrows: false,
          swipe: true
        }
      }]
    });
    var onNavCarouselSetPosition = function onNavCarouselSetPosition(event, slick) {
      if (!slick) return;
      try {
        if (slick.options.slidesToShow >= slick.slideCount) {
          _this2.$navCarousel.find('.slick-track').css('transform', 'none');
          // eslint-disable-next-line no-use-before-define
        } else if (slick.slideCount <= slidesToShowDesktop) {
          _this2.$navCarousel.find('.slick-track').css('transform', 'none');
        }
      } catch (e) {
        // ignore
      }
    };
    var onNavCarouselInit = function onNavCarouselInit() {
      _this2.$navCarousel.find('.slick-slide').on('keypress', function (event) {
        var keyCode = event.keyCode || event.which;
        if (keyCode === 13 || keyCode === 32) {
          event.preventDefault();
          _this2.$mainCarousel.slick('slickGoTo', jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).data('slickIndex'));
        }
      });
    };
    var onNavCarouselSwipe = function onNavCarouselSwipe(_event, slick, direction) {
      if (direction === 'right' && slick.currentSlide <= slick.options.slidesToShow) {
        slick.slickGoTo(0);
      }
    };
    fixADA(this.$navCarousel);
    this.$navCarouselClone = this.$navCarousel.clone(false);
    var navCol = parseInt(this.$navCarousel.data('image-gallery-nav-slides'), 10);
    var slidesToShowDesktop = Math.min(navCol, this.$navCarousel.children().length);
    var slidesToShowMobile = Math.min(navCol * this.navRows, this.$navCarousel.children().length);
    var initNavCarousel = function initNavCarousel(desktop) {
      if (desktop === void 0) {
        desktop = true;
      }
      if (_this2.$navCarousel.is('.slick-initialized')) {
        _this2.$navCarousel.slick('unslick');
      }
      _this2.$navCarousel.before(_this2.$navCarouselClone);
      _this2.$navCarousel.remove();
      _this2.$navCarousel = _this2.$navCarouselClone;
      _this2.$navCarousel.on('setPosition', onNavCarouselSetPosition);
      _this2.$navCarousel.on('init', onNavCarouselInit);
      _this2.$navCarousel.on('swipe', onNavCarouselSwipe);
      _this2.$navCarouselClone = _this2.$navCarousel.clone(false);
      if (_this2.$navCarousel.is('[data-image-gallery-nav-horizontal]')) {
        _this2.fixNavCLS();
        if (desktop) {
          _this2.$navCarousel.slick({
            slidesToShow: slidesToShowDesktop,
            slidesToScroll: _this2.$navCarousel.children().length > navCol && _this2.navRows === 1 ? 1 : slidesToShowDesktop,
            infinite: false,
            initialSlide: _this2.defaultSlideIndex,
            asNavFor: _this2.navRows === 1 ? "#" + _this2.$mainCarousel.attr('id') : null,
            arrows: _this2.navRows !== 0,
            dots: false,
            focusOnSelect: true,
            centerPadding: 0,
            rows: _this2.$navCarousel.children().length > navCol ? _this2.navRows : 1,
            adaptiveHeight: true,
            // variableWidth: true,
            lazyLoad: 'progressive'
          });
        } else {
          _this2.$navCarousel.slick({
            slidesToShow: slidesToShowMobile,
            slidesToScroll: slidesToShowMobile,
            infinite: false,
            initialSlide: _this2.defaultSlideIndex,
            asNavFor: _this2.navRows === 1 ? "#" + _this2.$mainCarousel.attr('id') : null,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            centerPadding: 0,
            adaptiveHeight: true,
            // variableWidth: true,
            lazyLoad: 'progressive'
          });
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (desktop) {
          _this2.$navCarousel.slick({
            slidesToShow: slidesToShowDesktop,
            slidesToScroll: _this2.$navCarousel.children().length > navCol && _this2.navRows === 1 ? 1 : slidesToShowDesktop,
            infinite: false,
            initialSlide: _this2.defaultSlideIndex,
            asNavFor: _this2.navRows === 1 ? "#" + _this2.$mainCarousel.attr('id') : null,
            arrows: _this2.navRows !== 0,
            dots: false,
            vertical: _this2.navRows === 1,
            verticalSwiping: _this2.navRows === 1,
            focusOnSelect: _this2.navRows === 1,
            centerPadding: 0,
            rows: _this2.$navCarousel.children().length > navCol ? _this2.navRows : 1,
            adaptiveHeight: true,
            lazyLoad: 'progressive'
          });
        } else {
          _this2.$navCarousel.slick({
            slidesToShow: slidesToShowMobile,
            slidesToScroll: 1,
            infinite: false,
            initialSlide: _this2.defaultSlideIndex,
            asNavFor: _this2.navRows === 1 ? "#" + _this2.$mainCarousel.attr('id') : null,
            arrows: true,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: _this2.navRows === 1,
            centerPadding: 0,
            adaptiveHeight: true,
            lazyLoad: 'progressive'
          });
        }
      }
      _this2.$navCarousel.each(function (i, el) {
        return baguettebox__WEBPACK_IMPORTED_MODULE_4___default().run("#" + el.id, Object.assign({}, _this2.baguetteBoxOptions));
      });
    };
    initNavCarousel(smallMediaQuery.matches);
    smallMediaQuery.addListener(function () {
      initNavCarousel(smallMediaQuery.matches);
    });
    this.initBaguetteBox();

    //
    // play video inline if not disable nav carousel is enabled and nav rows = 1
    //
    if (this.playVideoInline) {
      var onVideoClick = function onVideoClick(event) {
        event.preventDefault();
        _this2.showVideo(jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget).data('videoUrl'));
      };
      this.$mainCarousel.on('click', '[data-video-id]', onVideoClick);
    }
  };
  _proto.initBaguetteBox = function initBaguetteBox() {
    var _this3 = this;
    baguettebox__WEBPACK_IMPORTED_MODULE_4___default().run("#" + this.$mainCarousel.attr('id'), Object.assign({}, this.baguetteBoxOptions));
    this.$navDisableCarousel.each(function (i, el) {
      return baguettebox__WEBPACK_IMPORTED_MODULE_4___default().run("#" + el.id, Object.assign({}, _this3.baguetteBoxOptions));
    });
    if (this.navRows > 1) {
      this.$navCarousel.each(function (i, el) {
        return baguettebox__WEBPACK_IMPORTED_MODULE_4___default().run("#" + el.id, Object.assign({}, _this3.baguetteBoxOptions));
      });
    }
    this.baguetteBoxOptions.removeVideoClickEvent();
  }

  // Fix CLS issue for nav carousel
  ;
  _proto.fixNavCLS = function fixNavCLS() {
    var _this4 = this;
    this.$navCarousel.css('height', this.$navCarousel.outerHeight());
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).one('resize', function () {
      return _this4.$navCarousel.css('height', '');
    });
    if (!this.fixedNavHeightFirstLoad) {
      this.$navCarousel.css('height', this.$navCarousel.outerHeight());
      this.fixedNavHeightFirstLoad = true;
    }
  };
  return ImageGallery;
}();


/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fcHJvZHVjdC1kZXRhaWxzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFB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RDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsRUFDRDtFQUNJRCxXQUFXLEVBQUUs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dTdCLDZCQUE2QixDQUFDWSxnQkFBZ0IsQ0FBQztJQUN4RDtJQUVBLElBQUksQ0FBQ2hCLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFKLFFBQUE7QUFBQSxFQWxFaUNELHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvYWxzby1ib3VnaHQtZ2FtZS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9hbHNvLWJvdWdodC5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSwgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBleHRyYWN0TW9uZXksIG9wZW5DYXJ0UHJldmlldyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcbmltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG4vL1xuLy8gaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vdGFzay9kZWxheS1wcm9taXNlXG4vL1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8vXG4vLyBodHRwczovL2hhY2tlcm5vb24uY29tL2Z1bmN0aW9uYWwtamF2YXNjcmlwdC1yZXNvbHZpbmctcHJvbWlzZXMtc2VxdWVudGlhbGx5LTdhYWMxOGM0NDMxZVxuLy9cbmZ1bmN0aW9uIHByb21pc2VTZXJpYWwoZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKFxuICAgICAgICAocHJvbWlzZSwgZnVuYykgPT4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBmdW5jKCkudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSkpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUoW10pLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydEZvcm1WYWxpZGl0eShmb3JtKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoZm9ybSAmJiBmb3JtLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgdmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsc29Cb3VnaHRHYW1lIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Byb2R1Y3REZXRhaWxzfSBwYXJlbnRQcm9kdWN0RGV0YWlsc1xuICAgICAqIEBwYXJhbSB7Kn0gcGFyYW0xXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50UHJvZHVjdERldGFpbHMsIHtcbiAgICAgICAgdGh1bWJuYWlsVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC10aHVtYm5haWwtaXRlbSB7eyNjaGVja2VkfX1pcy1jaGVja2Vke3svY2hlY2tlZH19XCIgZGF0YS10aHVtYm5haWwtcHJvZHVjdC1pZD1cInt7aWR9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LXRodW1ibmFpbC1sYWJlbFwiIGhyZWY9XCJ7e3VybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwie3tsb2FkaW5nSW1nfX1cIiBkYXRhLXNyYz1cInt7aW1nfX1cIiBhbHQ9XCJ7e25hbWV9fVwiIHRpdGxlPVwie3tuYW1lfX1cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgcHJvZHVjdERldGFpbHNUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tib3gte3tpZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7aWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHVyY2hhc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie3tuYW1lfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzYWxlQmFkZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNhbGUtZmxhZy1zaWRlIHt7I3Byb2R1Y3Rfc2FsZV9iYWRnZXN9fV9wZXJjZW50e3svcHJvZHVjdF9zYWxlX2JhZGdlc319XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj57eyZzYWxlQmFkZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9zYWxlQmFkZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZjdXN0b21CYWRnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWltYWdlLXRodW1ibmFpbFwiIGhyZWY9XCJ7e3VybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWQgY2FyZC1pbWFnZVwiIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgZGF0YS1zcmM9XCJ7e2ltZ319XCIgYWx0PVwie3tuYW1lfX1cIiB0aXRsZT1cInt7bmFtZX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNob3ZlckltYWdlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwie3t1cmx9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5bG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInt7bmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJ7e25hbWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaG92ZXJJbWFnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tdGl0bGVcImhyZWY9XCJ7e3VybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3tuYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3JhdGluZ0h0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tcmF0aW5nIGNhcmQtdGV4dCBjYXJkLXRleHQtLXJhdGluZ1wiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcm9kdWN0UmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnJhdGluZ0h0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svcmF0aW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxvZ2luUHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZwcmljZVJhbmdlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNoaWRlUXR5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmJ1dHRvblRvZ2dsZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9oaWRlUXR5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smb3B0aW9uc1RvZ2dsZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm0ge3sjaGlkZVF0eX19X2hpZGUtcXVhbnRpdHl7ey9oaWRlUXR5fX1cIiBpZD1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtLXt7aWR9fVwiIGRhdGEtcHJvZHVjdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smZm9ybUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24tZ3JvdXAgcHJpY2Utc2VjdGlvbi1ncm91cC0te3t0YXhDbGFzc1ByZWZpeH19XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBTYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS1zZWN0aW9uLS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIiB7eyNub25TYWxlUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTtcInt7L25vblNhbGVQcmljZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3twcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbFwiIHt7Xm5vblNhbGVQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svbm9uU2FsZVByaWNlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NhbGVQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLS1tYWluXCI+e3twcmljZS5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIE5vbi1zYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tebm9uU2FsZVByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJ7ey9ub25TYWxlUHJpY2V9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS13YXMtbGFiZWxcIj57e25vblNhbGVQcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tub25TYWxlUHJpY2UuZm9ybWF0dGVkfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmV0YWlsIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAge3smdGF4TGFiZWxIdG1sfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVJhbmdlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbi1ncm91cCBwcmljZS1zZWN0aW9uLWdyb3VwLS17e3RheENsYXNzUHJlZml4fX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2Utc2VjdGlvbi0tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsXCI+e3twcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPnt7c2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS0tbWFpblwiPnt7cHJpY2VSYW5nZS5taW4uZm9ybWF0dGVkfX0gLSB7e3ByaWNlUmFuZ2UubWF4LmZvcm1hdHRlZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyZ0YXhMYWJlbEh0bWx9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLXdhcy1sYWJlbFwiPnt7bm9uU2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e25vblNhbGVQcmljZS5mb3JtYXR0ZWR9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3smcmV0YWlsUHJpY2VSYW5nZUh0bWx9fVxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGF4TGFiZWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhYmJyIHRpdGxlPVwie3t0aXRsZX19XCI+e3t0ZXh0fX08L2FiYnI+XG4gICAgICAgIGAsXG4gICAgICAgIHJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBycnAtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiPlxuICAgICAgICAgICAgICAgIHt7cmV0YWlsUHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ycnBcIj57e3JldGFpbFByaWNlUmFuZ2UubWluLmZvcm1hdHRlZH19IC0ge3tyZXRhaWxQcmljZVJhbmdlLm1heC5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICByZXRhaWxQcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHJycC1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tecmV0YWlsUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTt7ey9yZXRhaWxQcmljZX19XCI+XG4gICAgICAgICAgICAgICAge3tyZXRhaWxQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcnJwLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycFwiPlxuICAgICAgICAgICAgICAgICAgICB7e3JldGFpbFByaWNlLmZvcm1hdHRlZH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIGxvZ2luUHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicHJpY2UtLWxvZ2luXCIgaHJlZj1cInt7bG9naW5Vcmx9fVwiIHRyYW5zbGF0ZT57e2xvZ2luRm9yUHJpY2VUeHR9fTwvYT5cbiAgICAgICAgYCxcbiAgICAgICAgb3B0aW9uc1RvZ2dsZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtVG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiIGZvcj1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIiBkYXRhLWxhYmVsLWNvbGxhcHNpYmxlPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgaHJlZj1cIiNwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS17e2lkfX1cIiBkYXRhLWNob29zZS1vcHRpb249XCJ7e2Nob29zZU9wdGlvbnNUeHR9fVwiIGRhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tjaG9vc2VPcHRpb25zVHh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tY2FydC1hZGRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgYnV0dG9uVG9nZ2xlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm1Ub2dnbGUgX3NpbmdsZS1wcm9kdWN0IHt7I2hpZGVRdHl9fV9oaWRlLXF1YW50aXR5e3svaGlkZVF0eX19IHt7I3B1cmNoYXNhYmlsaXR5fX1fcHVyY2hhc2FiaWxpdHl7ey9wdXJjaGFzYWJpbGl0eX19XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiIGZvcj1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIiBkYXRhLWxhYmVsLWNvbGxhcHNpYmxlPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiBkYXRhLWxhYmVsLWNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3R4dFNlbGVjdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNhcnQtYWRkXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7eyNwdXJjaGFzYWJpbGl0eX19XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vdXRzdG9ja1wiPnt7cHVyY2hhc2FiaWxpdHl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHt7L3B1cmNoYXNhYmlsaXR5fX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBzaW1wbGVGb3JtVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0gZm9ybS0tYWRkVG9DYXJ0IF9zaW5nbGUtcHJvZHVjdFwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJ7e2FkZFRvQ2FydFVybH19XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBkYXRhLWNhcnQtaXRlbS1hZGQge3sjaGlkZVF0eX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svaGlkZVF0eX19XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwcm9kdWN0X2lkXCIgdmFsdWU9XCJ7e2lkfX1cIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5jcmVtZW50XCIgZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJkZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3txdWFudGl0eURlY3JlYXNlVHh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0taW5wdXQgZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcm9kdWN0LXF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXR5W11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7cXR5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1xdWFudGl0eS1taW49XCJ7e3F0eX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcXVhbnRpdHktbWF4PVwie3ttYXhQdXJjaGFzZVF1YW50aXR5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie3t0eHRRdWFudGl0eX19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJpbmNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3txdWFudGl0eUluY3JlYXNlVHh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hZGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt7I3B1cmNoYXNhYmlsaXR5fX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLW91dHN0b2NrIF9wdXJjaGFzYWJpbGl0eVwiPnt7cHVyY2hhc2FiaWxpdHl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHt7L3B1cmNoYXNhYmlsaXR5fX1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgYCxcbiAgICAgICAgbG9hZGluZ1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj48aW1nIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgYWx0PVwibG9hZGluZ1wiLz48L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzID0gbnVsbCxcbiAgICAgICAgcmF0aW5nU3Rhckh0bWxGdW5jID0gKGlzRnVsbCA9IHRydWUpID0+IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLS1yYXRpbmcke2lzRnVsbCA/ICdGdWxsJyA6ICdFbXB0eSd9XCI+XG4gICAgICAgICAgICAgICAgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1zdGFyXCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYCxcbiAgICAgICAgY3VzdG9tQmFkZ2VUZW1wbGF0ZSA9ICh2YWx1ZSkgPT4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNhbGUtZmxhZy1zaWRlIHNhbGUtZmxhZy1zaWRlLS1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNhbGUtdGV4dFwiPiR7dmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHNob3dQcm9kdWN0UmF0aW5nID0gdHJ1ZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscyA9IHBhcmVudFByb2R1Y3REZXRhaWxzO1xuICAgICAgICB0aGlzLnRodW1ibmFpbFRlbXBsYXRlID0gdGh1bWJuYWlsVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHNUZW1wbGF0ZSA9IHByb2R1Y3REZXRhaWxzVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJpY2VUZW1wbGF0ZSA9IHByaWNlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVRlbXBsYXRlID0gcHJpY2VSYW5nZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnRheExhYmVsVGVtcGxhdGUgPSB0YXhMYWJlbFRlbXBsYXRlO1xuICAgICAgICB0aGlzLnJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSA9IHJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5yZXRhaWxQcmljZVRlbXBsYXRlID0gcmV0YWlsUHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2dpblByaWNlVGVtcGxhdGUgPSBsb2dpblByaWNlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uc1RvZ2dsZVRlbXBsYXRlID0gb3B0aW9uc1RvZ2dsZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVRlbXBsYXRlID0gYnV0dG9uVG9nZ2xlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlID0gc2ltcGxlRm9ybVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvYWRpbmdUZW1wbGF0ZSA9IGxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuY29udGV4dDtcbiAgICAgICAgdGhpcy5udW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0TnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy5hbGxOdW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsID0gJCgnW2RhdGEtYWxzby1ib3VnaHRdJywgcGFyZW50UHJvZHVjdERldGFpbHMuJHByb2R1Y3RWaWV3U2NvcGUpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGFsc29Cb3VnaHRFbC5kYXRhKCdhbHNvQm91Z2h0JykgfHwge307XG4gICAgICAgIHRoaXMubW9uZXlXaXRoVGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRoVGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMubW9uZXlXaXRob3V0VGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRob3V0VGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aG91dFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RSYXRpbmcgPSBzaG93UHJvZHVjdFJhdGluZztcbiAgICAgICAgdGhpcy5yYXRpbmdTdGFySHRtbEZ1bmMgPSByYXRpbmdTdGFySHRtbEZ1bmM7XG4gICAgICAgIHRoaXMuY3VzdG9tQmFkZ2VUZW1wbGF0ZSA9IGN1c3RvbUJhZGdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdF9zYWxlX2JhZGdlcyA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfYmFkZ2VzO1xuICAgICAgICB0aGlzLnByb2R1Y3Rfc2FsZV9sYWJlbCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfbGFiZWw7XG5cbiAgICAgICAgLy8gdHJ5IHRvIGd1ZXNzIGFueSBwcmljZSBvbiB0aGUgcGFnZVxuICAgICAgICB0aGlzLm1vbmV5RmFsbGJhY2sgPSB0aGlzLm1vbmV5V2l0aFRheCB8fCB0aGlzLm1vbmV5V2l0aG91dFRheFxuICAgICAgICAgICAgLy8gaXMgZGVmYXVsdCBjdXJyZW5jeT9cbiAgICAgICAgICAgIHx8ICh0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlICYmIHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUgPT09IHRoaXMuY29udGV4dC5kZWZhdWx0Q3VycmVuY3lDb2RlID8gdGhpcy5jb250ZXh0Lm1vbmV5IDogbnVsbClcbiAgICAgICAgICAgIC8vIGFueSBwcmljZSBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgfHwgJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0sIFtkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJykuZ2V0KClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChfbW9uZXksIGVsKSA9PiBfbW9uZXkgfHwgZXh0cmFjdE1vbmV5KCQoZWwpLnRleHQoKSksIG51bGwpXG4gICAgICAgICAgICAvLyB1c2UgY3VycmVuY3kgY29kZVxuICAgICAgICAgICAgfHwgKHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUgPyB7IC4uLnRoaXMuY29udGV4dC5tb25leSwgY3VycmVuY3lfdG9rZW46IGAgJHt0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlfSBgIH0gOiB0aGlzLmNvbnRleHQubW9uZXkpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Tm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrID0gdGhpcy5vbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBjb25zdCB0aHVtYlNpemUgPSB0aGlzLmNvbnRleHQuYWxzb2JvdWdodF90aHVtYm5haWxfc2l6ZS5zcGxpdCgneCcpO1xuXG4gICAgICAgIHRoaXMudGh1bWJuYWlsV2lkdGggPSBOdW1iZXIodGh1bWJTaXplWzBdKSB8fCAxMDA7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsSGVpZ2h0ID0gTnVtYmVyKHRodW1iU2l6ZVsxXSkgfHwgMTAwO1xuXG4gICAgICAgIHRoaXMucmV0cmlldmVBbHNvQm91Z2h0UHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5RdWFudGl0eUFsc29Cb3VnaHRDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja09wdGlvbnMoKTtcblxuICAgICAgICAkKCdbZGF0YS1hZGQtYWxsXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkub24oJ2NsaWNrJywgdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgJCgnW2RhdGEtYWRkLXNlbGVjdGVkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkub24oJ2NsaWNrJywgdGhpcy5vbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2spO1xuICAgIH1cblxuICAgIGN1cnJlbmN5Rm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW5jeUZvcm1hdCh2YWx1ZSwgKHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLm1vbmV5V2l0aFRheCA6IHRoaXMubW9uZXlXaXRob3V0VGF4KSB8fCB0aGlzLm1vbmV5RmFsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkdGh1bWJuYWlscyA9ICQoJ1tkYXRhLXRodW1ibmFpbHNdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RFbHMgPSAkKCdbZGF0YS1wcm9kdWN0LWlkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkubm90KCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJbXX0gKi9cbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9ICRwcm9kdWN0RWxzLmdldCgpLm1hcChlbCA9PiAkKGVsKS5kYXRhKCdwcm9kdWN0SWQnKSk7XG5cbiAgICAgICAgaWYgKCRwcm9kdWN0RWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZHM6IFtJbnQhXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdHNDb3VudDogSW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiA/IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluY2x1ZGVUYXg6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbWdXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1nSGVpZ2h0OiBJbnQhXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRzOiAkcHJvZHVjdElkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiAkcHJvZHVjdHNDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QdXJjaGFzZVF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFB1cmNoYXNlUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRpbWdXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpbWdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgKGZpcnN0OiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJGltZ0hlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luU3RvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHlWMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0VW5hdmFpbGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0UHJlT3JkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVUYXg6ICRpbmNsdWRlVGF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5UmFuZ2VGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5UmFuZ2VGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlld1N1bW1hcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZVJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE91dE9mU3RvY2tNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgTW9uZXlGaWVsZHMgb24gTW9uZXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgTW9uZXlSYW5nZUZpZWxkcyBvbiBNb25leVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZVRheDogdGhpcy5jb25maWcuaW5jbHVkZVRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1dpZHRoOiB0aGlzLnRodW1ibmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiB0aGlzLnRodW1ibmFpbEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0T3V0T2ZTdG9jayA9IHJlc3AuZGF0YS5zaXRlLnNldHRpbmdzLmludmVudG9yeS5kZWZhdWx0T3V0T2ZTdG9ja01lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMuZm9yRWFjaCgoeyBub2RlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdE5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gbm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBub2RlLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRUb0NhcnRVcmwgPSBub2RlLmFkZFRvQ2FydFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVRdHkgPSAhdGhpcy5jb250ZXh0LnNob3dfcHJvZHVjdF9xdWFudGl0eV9ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93UXR5ID0gdGhpcy5jb250ZXh0LnNob3dfcHJvZHVjdF9xdWFudGl0eV9ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBoaWRlUXR5ID8gKG5vZGUubWluUHVyY2hhc2VRdWFudGl0eSB8fCAxKSA6IChub2RlLm1pblB1cmNoYXNlUXVhbnRpdHkgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nSW1nID0gdGhpcy5jb250ZXh0LmxvYWRpbmdJbWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBub2RlLmRlZmF1bHRJbWFnZT8udXJsIHx8IHRoaXMuY29udGV4dC5kZWZhdWx0UHJvZHVjdEltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RFbCA9ICRwcm9kdWN0RWxzLmZpbHRlcihgW2RhdGEtcHJvZHVjdC1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhDbGFzc1ByZWZpeCA9IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyAnd2l0aFRheCcgOiAnd2l0aG91dFRheCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhEYXRhUHJlZml4ID0gdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoLXRheCcgOiAnd2l0aG91dC10YXgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfcHJpY2VfbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfc2FsZV9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGVQcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9ub25fc2FsZV9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX3JldGFpbF9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNob29zZU9wdGlvbnNUeHQgPSB0aGlzLmNvbnRleHQuY2hvb3NlT3B0aW9uc1R4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dFNlbGVjdCA9IHRoaXMuY29udGV4dC50eHRTZWxlY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRRdWFudGl0eSA9IHRoaXMuY29udGV4dC50eHRRdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RGVjcmVhc2VUeHQgPSB0aGlzLmNvbnRleHQudHh0UXVhbnRpdHlEZWNyZWFzZS5yZXBsYWNlKC8ob2YpLiovZywgYCQxICR7bm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlJbmNyZWFzZVR4dCA9IHRoaXMuY29udGV4dC50eHRRdWFudGl0eUluY3JlYXNlLnJlcGxhY2UoLyhvZikuKi9nLCBgJDEgJHtub2RlLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhQdXJjaGFzZVF1YW50aXR5ID0gbm9kZS5tYXhQdXJjaGFzZVF1YW50aXR5IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpbkZvclByaWNlVHh0ID0gdGhpcy5jb250ZXh0LmxvZ2luRm9yUHJpY2VUeHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpblVybCA9IHRoaXMuY29udGV4dC5sb2dpblVybCB8fCAnL2xvZ2luLnBocCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jb250ZXh0LmFsc29ib3VnaHRfY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dSYXRpbmdIdG1sID0gdGhpcy5jb250ZXh0LnNob3dQcm9kdWN0UmF0aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9zYWxlX2JhZGdlcyA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfYmFkZ2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9zYWxlX2xhYmVsID0gdGhpcy5jb250ZXh0LnByb2R1Y3Rfc2FsZV9sYWJlbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gbm9kZS5hdmFpbGFiaWxpdHlWMiAmJiBub2RlLmF2YWlsYWJpbGl0eVYyLnN0YXR1cyA9PT0gJ1VuYXZhaWxhYmxlJyA/IChub2RlLmF2YWlsYWJpbGl0eVYyLm1lc3NhZ2UgfHwgdGhpcy5jb250ZXh0LnR4dFVuYXZhaWxhYmxlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVPcmRlciA9IG5vZGUuYXZhaWxhYmlsaXR5VjIgJiYgbm9kZS5hdmFpbGFiaWxpdHlWMi5zdGF0dXMgPT09ICdQcmVvcmRlcicgPyAobm9kZS5hdmFpbGFiaWxpdHlWMi5tZXNzYWdlIHx8IHRoaXMuY29udGV4dC50eHRQcmVPcmRlcikgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0T2ZTdG9jayA9ICEobm9kZS5pbnZlbnRvcnkuaXNJblN0b2NrICYmIG5vZGUuYXZhaWxhYmlsaXR5VjIuc3RhdHVzID09PSAnVW5hdmFpbGFibGUnKSAmJiAhKG5vZGUuaW52ZW50b3J5LmlzSW5TdG9jaykgPyAobm9kZS5hdmFpbGFiaWxpdHlWMi5kZXNjcmlwdGlvbiB8fCB0eHRPdXRPZlN0b2NrKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNhYmlsaXR5ID0gYXZhaWxhYmxlIHx8IHByZU9yZGVyIHx8IG91dE9mU3RvY2s7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdmVyUHJvZHVjdEltYWdlID0gaW1hZ2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlcy5maW5kKGltZ0hvdmVyID0+ICFpbWdIb3Zlci5ub2RlLmlzRGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZSA/IGltYWdlLm5vZGUgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdmVySW1hZ2UgPSBob3ZlclByb2R1Y3RJbWFnZShub2RlLmltYWdlcy5lZGdlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhdGluZ0h0bWwgPSAocmF0aW5nKSA9PiAoIXJhdGluZyA/ICcnIDogQXJyYXkuZnJvbShBcnJheSg1KS5rZXlzKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IHRoaXMucmF0aW5nU3Rhckh0bWxGdW5jKHJhdGluZyA+IGkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVCYWRnZSA9IHByaWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuICcnIGlmIG5vIHNhbGUgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByaWNlcz8uc2FsZVByaWNlIHx8IHByaWNlcy5zYWxlUHJpY2UudmFsdWUgPT09IHByaWNlcy5iYXNlUHJpY2UudmFsdWUpIHJldHVybiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiAnJyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3Rfc2FsZV9iYWRnZXMgPT09ICdoaWRlJykgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiAnc2FsZScgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0X3NhbGVfYmFkZ2VzID09PSAnbGFiZWwnKSByZXR1cm4gdGhpcy5wcm9kdWN0X3NhbGVfbGFiZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gcHJpY2VzLnNhbGVQcmljZSA/IE1hdGgucm91bmQoKHByaWNlcy5iYXNlUHJpY2UudmFsdWUgLSBwcmljZXMuc2FsZVByaWNlLnZhbHVlKSAvIHByaWNlcy5iYXNlUHJpY2UudmFsdWUgKiAxMDApIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gbiA+IDAgPyBgJHtufSVgIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gJ3NhbGUge3BlcmNlbnR9JyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3Rfc2FsZV9sYWJlbC5pbmNsdWRlcygne3BlcmNlbnR9JykpIHJldHVybiB0aGlzLnByb2R1Y3Rfc2FsZV9sYWJlbC5yZXBsYWNlKCd7cGVyY2VudH0nLCBwZXJjZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY2VudCAnc2FsZSAuLi4lJyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByb2R1Y3Rfc2FsZV9sYWJlbH08c3Bhbj4ke3BlcmNlbnR9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21CYWRnZSA9IChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBmaWVsZC5maWx0ZXIoZSA9PiBlLm5vZGUubmFtZSA9PT0gJ19fYmFkZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiB0aGlzLmN1c3RvbUJhZGdlVGVtcGxhdGUoaS5ub2RlLnZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5wcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGVQcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LmJhc2VQcmljZSAmJiBub2RlLnByaWNlcy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIG5vZGUucHJpY2VzLmJhc2VQcmljZS52YWx1ZSAhPT0gbm9kZS5wcmljZXMucHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLmJhc2VQcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiBub2RlLnByaWNlcz8ucmV0YWlsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VSYW5nZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LnByaWNlUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBub2RlLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSAhPT0gbm9kZS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5wcmljZVJhbmdlLm1heC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VSYW5nZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LnJldGFpbFByaWNlUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBub2RlLnByaWNlcy5yZXRhaWxQcmljZVJhbmdlLm1pbi52YWx1ZSAhPT0gbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5tYXgudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5taW4udmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5yZXRhaWxQcmljZVJhbmdlLm1heC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5QcmljZUh0bWwgPSB0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5sb2dpblByaWNlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbkZvclByaWNlVHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheExhYmVsSHRtbCA9IHRoaXMuY29uZmlnLnNob3dUYXhMYWJlbCA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnRheExhYmVsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jb25maWcuaW5jbHVkZVRheCA/IHRoaXMuY29udGV4dC5pbmNsdWRpbmdUYXhUeHQgOiB0aGlzLmNvbnRleHQuZXhjbHVkaW5nVGF4VHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLmNvbnRleHQucHJpY2VXaXRoVGF4VHh0IDogdGhpcy5jb250ZXh0LnByaWNlV2l0aG91dFRheFR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZVJhbmdlSHRtbCA9IHJldGFpbFByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5yZXRhaWxQcmljZVJhbmdlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhDbGFzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhEYXRhUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZUh0bWwgPSAhcmV0YWlsUHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnJldGFpbFByaWNlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhDbGFzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhEYXRhUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VSYW5nZUh0bWwgPSBwcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucHJpY2VSYW5nZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheExhYmVsSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZVJhbmdlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1RvZ2dsZUh0bWwgPSBub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA+IDAgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25zVG9nZ2xlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VPcHRpb25zVHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRvZ2dsZUh0bWwgPSBub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA9PT0gMCA/IE11c3RhY2hlLnJlbmRlcih0aGlzLmJ1dHRvblRvZ2dsZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0U2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVRdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2FiaWxpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiAhcHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnByaWNlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhDbGFzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhEYXRhUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheExhYmVsSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUh0bWwgPSBub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA9PT0gMCA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnNpbXBsZUZvcm1UZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlUXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eURlY3JlYXNlVHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5jcmVhc2VUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UHVyY2hhc2VRdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzYWJpbGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzSHRtbCA9IE11c3RhY2hlLnJlbmRlcih0aGlzLnByb2R1Y3REZXRhaWxzVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVG9nZ2xlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Ub2dnbGVIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1IdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JhdGluZ0h0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nSHRtbDogdGhpcy5zaG93UHJvZHVjdFJhdGluZyA/IHJhdGluZ0h0bWwobm9kZS5yZXZpZXdTdW1tYXJ5Py5hdmVyYWdlUmF0aW5nKSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfc2FsZV9iYWRnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9zYWxlX2xhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVCYWRnZTogc2FsZUJhZGdlKG5vZGUucHJpY2VzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CYWRnZTogY3VzdG9tQmFkZ2Uobm9kZS5jdXN0b21GaWVsZHMuZWRnZXMubGVuZ3RoID4gMCA/IG5vZGUuY3VzdG9tRmllbGRzLmVkZ2VzIDogJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVF0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsSHRtbCA9ICQoTXVzdGFjaGUucmVuZGVyKHRoaXMudGh1bWJuYWlsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5odG1sKGRldGFpbHNIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYm5haWxzLmFwcGVuZCh0aHVtYm5haWxIdG1sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBzaW1wbGUgcHJvZHVjdCBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwsIF8uZXh0ZW5kKHRoaXMuY29udGV4dCwgeyBlbmFibGVBbHNvQm91Z2h0OiBmYWxzZSB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJpY2UgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC4kc2NvcGUub24oJ3ByaWNlLWNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVG90YWxQcmljZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBwcm9kdWN0IG9iamVjdCBmb3IgbGF0ZXIgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnLCBwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdCBmb3VuZGF0aW9uIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJywgeyAkY29udGV4dDogJHByb2R1Y3RFbCB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmluZCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJykub24oJ2NoYW5nZScsIHRoaXMub25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UuYmluZCh0aGlzLCAkcHJvZHVjdEVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJykub24oQ29sbGFwc2libGVFdmVudHMub3BlbiwgdGhpcy5vbk9wdGlvbnNPcGVuLmJpbmQodGhpcywgJHByb2R1Y3RFbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBpbml0IHBhcmVudCBwcm9kdWN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0ICRwYXJlbnRQcm9kdWN0RWwgPSAkKCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQ6ICRwYXJlbnRQcm9kdWN0RWwgfSk7XG4gICAgICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCAkcGFyZW50UHJvZHVjdEVsKS5vbignY2hhbmdlJywgdGhpcy5vbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZS5iaW5kKHRoaXMsICRwYXJlbnRQcm9kdWN0RWwpKTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHBhcmVudCBwcm9kdWN0IHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kc2NvcGUub24oJ3ByaWNlLWNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVG90YWxQcmljZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIC8vIHN0b3Agc2hvd2luZyB0b3RhbCBwcmljZSBpZiByZXF1aXJlIGxvZ2luXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS52YWwoKSk7XG5cbiAgICAgICAgY29uc3QgcHJpY2VCeUlkID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0Tm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5wcmljZXMgJiYgbm9kZS5wcmljZXMucHJpY2UpLnJlZHVjZSgoX3ByaWNlQnlJZCwgbm9kZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5fcHJpY2VCeUlkLFxuICAgICAgICAgICAgICAgIFtub2RlLmVudGl0eUlkXToge1xuICAgICAgICAgICAgICAgICAgICBbdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoX3RheCcgOiAnd2l0aG91dF90YXgnXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5wcmljZSAmJiBwcm9kdWN0LnByb2R1Y3RJZCkucmVkdWNlKChfcHJpY2VCeUlkLCBwcm9kdWN0KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLl9wcmljZUJ5SWQsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdElkXTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgIH0pLCB7fSksXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdFF0eSA9IHt9O1xuICAgICAgICBwcm9kdWN0SWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRRdHkgPSAkKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtpZH1cIl0gW2RhdGEtcHJvZHVjdC1xdWFudGl0eV1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgaWYgKGlucHV0UXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RRdHlbaWRdID0geyBxdWFudGl0eTogcGFyc2VJbnQoaW5wdXRRdHkudmFsKCksIDEwKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWVyZ2VQcm9kdWN0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHByaWNlQnlJZCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBtZXJnZVByb2R1Y3QgPSB7XG4gICAgICAgICAgICAgICAgLi4ubWVyZ2VQcm9kdWN0LFxuICAgICAgICAgICAgICAgIFtrZXldOiB7IC4uLnByaWNlQnlJZFtrZXldLCAuLi5wcm9kdWN0UXR5W2tleV0gfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VQcm9kdWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtZXJnZSBwcm9kdWN0Tm9kZXMgJiBwcm9kdWN0IGRldGFpbHMgb2JqZWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IE9iamVjdC5rZXlzKG1lcmdlUHJvZHVjdCkubWFwKHByb2R1Y3RJZCA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgcHJpY2U6IG1lcmdlUHJvZHVjdFtwcm9kdWN0SWRdLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBbdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscywgLi4ucHJvZHVjdHNdXG4gICAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdElkcy5pbmRleE9mKHByb2R1Y3QucHJvZHVjdElkKSA+IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgoe1xuICAgICAgICAgICAgICAgIHdpdGhfdGF4ID0gMCwgd2l0aG91dF90YXggPSAwLCBtb25leV93aXRoX3RheCwgbW9uZXlfd2l0aG91dF90YXgsXG4gICAgICAgICAgICB9LCB7IHByaWNlIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgd2l0aF90YXg6IHByaWNlICYmIHByaWNlLndpdGhfdGF4ID8gd2l0aF90YXggKyAocHJpY2Uud2l0aF90YXgudmFsdWUgKiAocHJpY2UucXVhbnRpdHkgPyBwcmljZS5xdWFudGl0eSA6IDEpKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgd2l0aG91dF90YXg6IHByaWNlICYmIHByaWNlLndpdGhvdXRfdGF4ID8gd2l0aG91dF90YXggKyAocHJpY2Uud2l0aG91dF90YXgudmFsdWUgKiAocHJpY2UucXVhbnRpdHkgPyBwcmljZS5xdWFudGl0eSA6IDEpKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbW9uZXlfd2l0aF90YXg6IG1vbmV5X3dpdGhfdGF4IHx8ICgocHJpY2UgJiYgcHJpY2Uud2l0aF90YXgpID8gZXh0cmFjdE1vbmV5KHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGwpLFxuICAgICAgICAgICAgICAgIG1vbmV5X3dpdGhvdXRfdGF4OiBtb25leV93aXRob3V0X3RheCB8fCAoKHByaWNlICYmIHByaWNlLndpdGhvdXRfdGF4KSA/IGV4dHJhY3RNb25leShwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsIHRoaXMuY29udGV4dC5tb25leSkgOiBudWxsKSxcbiAgICAgICAgICAgIH0pLCB7fSk7XG5cbiAgICAgICAgY29uc3QgJHdpdGhUYXggPSAkKCdbZGF0YS10b3RhbC13aXRoLXRheF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCAkd2l0aG91dFRheCA9ICQoJ1tkYXRhLXRvdGFsLXdpdGhvdXQtdGF4XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgaWYgKHRvdGFsLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcmljZV0nLCAkd2l0aFRheCkuaHRtbCh0aGlzLmN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhfdGF4LCB0b3RhbC5tb25leV93aXRoX3RheCkpO1xuICAgICAgICAgICAgJHdpdGhUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRoVGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhUYXguaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcmljZV0nLCAkd2l0aG91dFRheCkuaHRtbCh0aGlzLmN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhvdXRfdGF4LCB0b3RhbC5tb25leV93aXRob3V0X3RheCkpO1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRob3V0VGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aG91dFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRBbGxCdXR0b25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tPcHRpb25zKCkge1xuICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwub24oJ2NsaWNrJywgJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdOm5vdCguaXMtb3BlbiknLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdEVsID0gJHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWlkXScpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9ICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRhbHNvQm91Z2h0Q2hlY2tib3ggPSAkdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGlmICghcHJvZHVjdD8uJGZvcm0/LmdldCgwKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsLm9uKCdjbGljaycsICdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRlbC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG5cbiAgICAgICAgICAgIGlmICghJGFsc29Cb3VnaHRDaGVja2JveC5kYXRhKCdwdXJjaGFzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnX2hhcy1vcHRpb25Nb2RhbCcsICRlbC5oYXNDbGFzcygnaXMtb3BlbicpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1sYWJlbC1jb2xsYXBzaWJsZV0nLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkZWwuY2xvc2VzdCgnLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvblRvZ2dsZSA9ICRlbC5zaWJsaW5ncygnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb25Db250ZW50ID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRlbC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG5cbiAgICAgICAgICAgIGlmICghJG9wdGlvbkNvbnRlbnQubGVuZ3RoIHx8ICEkYWxzb0JvdWdodENoZWNrYm94LmRhdGEoJ3B1cmNoYXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAkb3B0aW9uVG9nZ2xlLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsb3NlIE1vZGFsIG9wdGlvblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS1vdmVybGF5LCAjb3B0aW9uQ2xvc2UnLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb25Db250ZW50SXRlbSA9ICRlbC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb25Ub2dnbGUgPSAkb3B0aW9uQ29udGVudEl0ZW0uZmluZCgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nKTtcbiAgICAgICAgICAgIGlmICgkb3B0aW9uVG9nZ2xlLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkb3B0aW9uVG9nZ2xlLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNrVmFsaWRpdHkgTW9kYWwgb3B0aW9uXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI29wdGlvbkRvbmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtaWRdJyk7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uVG9nZ2xlID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcG9ydEZvcm1WYWxpZGl0eShwcm9kdWN0LiRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvblRvZ2dsZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCgpO1xuICAgIH1cblxuICAgIG9uQWxzb0JvdWdodENoZWNrYm94Q2hhbmdlKCRwcm9kdWN0RWwsIGUpIHtcbiAgICAgICAgY29uc3QgJGNiID0gJChlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICQoYGxhYmVsW2Zvcj1cIiR7JGNiLmF0dHIoJ2lkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJHRodW1iID0gJChgW2RhdGEtdGh1bWJuYWlsLXByb2R1Y3QtaWQ9XCIkeyRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdElkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgY2JJZCA9ICRjYi5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCAkbGFiZWxGb3JDaGVja2JveCA9ICQoYGxhYmVsW2Zvcj1cIiR7Y2JJZH1cIl1gKTtcblxuICAgICAgICBjb25zdCAkaW5wdXRRdHkgPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcXVhbnRpdHldJyk7XG4gICAgICAgIGNvbnN0IGlucHV0UXR5ID0gcGFyc2VJbnQoJGlucHV0UXR5LnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0UXR5LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgcXR5ID0gcXVhbnRpdHlNaW4gfHwgMTtcblxuICAgICAgICAvLyBvcGVuIChjbG9zZSkgcHJvZHVjdCBvcHRpb25zIGZvcm0gaWYgY2hlY2tib3ggaXMgY2hlY2tlZCAodW5jaGVja2VkKVxuICAgICAgICBpZiAoJGNiLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJGxhYmVsLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAkdGh1bWIuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICRsYWJlbEZvckNoZWNrYm94LmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XG5cbiAgICAgICAgICAgIGlmICghaW5wdXRRdHkpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXRRdHkudmFsKHF0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICR0aHVtYi5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGxhYmVsRm9yQ2hlY2tib3gucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25zT3BlbigkcHJvZHVjdEVsKSB7XG4gICAgICAgIGNvbnN0ICRpbnB1dFF0eSA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nKTtcbiAgICAgICAgY29uc3QgaW5wdXRRdHkgPSBwYXJzZUludCgkaW5wdXRRdHkudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXRRdHkuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBxdHkgPSBxdWFudGl0eU1pbiB8fCAxO1xuXG4gICAgICAgIGNvbnN0ICRhbHNvQm91Z2h0Q2hlY2tib3ggPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdfdW5QdXJjaGFzZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlucHV0UXR5KSB7XG4gICAgICAgICAgICAkaW5wdXRRdHkudmFsKHF0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBpZiAoJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtY29udGVudF0nKTtcbiAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRjb250ZW50LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcblxuICAgICAgICAkY29udGVudC5odG1sKE11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdUZW1wbGF0ZSwgeyBsb2FkaW5nSW1nOiB0aGlzLmNvbnRleHQubG9hZGluZ0ltZyB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwYXBhdGhlbWVzL2Fsc28tYm91Z2h0LWdhbWUvcHJvZHVjdC1kZXRhaWxzJyB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuaHRtbCgkKHJlc3ApLmh0bWwoKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwsIF8uZXh0ZW5kKHRoaXMuY29udGV4dCwgeyBlbmFibGVBbHNvQm91Z2h0OiBmYWxzZSB9KSwgbnVsbCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJpY2UgY2hhbmdlXG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0UXR5ID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFF0eSA9IHBhcnNlSW50KCRpbnB1dFF0eS52YWwoKSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0UXR5LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBxdWFudGl0eU1pbiB8fCAxO1xuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0UXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dFF0eS52YWwocXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJvZHVjdC12aWV3LXVwZGF0ZSBldmVudFxuICAgICAgICAgICAgICAgIC8vIGZvciB0b2dnbGUgY2hlY2tib3ggZGVwZW5kaW5nIG9uIHByb2R1Y3QgcGFjaGFzaWJpbGl0eVxuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcm9kdWN0LXZpZXctdXBkYXRlJywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RGb3JtID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IHByb2R1Y3RGb3JtPy4kZm9ybT8uZ2V0KDApLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jayB8fCAhY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdwdXJjaGFzYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ3B1cmNoYXNhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBwcm9kdWN0IG9iamVjdCBmb3IgbGF0ZXIgdXNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnLCBwcm9kdWN0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoZSBwcm9kdWN0IGhhcyBvcHRpb25hbCBub3QgcmVxdWlyZWRcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9ICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBwcm9kdWN0Py4kZm9ybT8uZ2V0KDApLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94XG4gICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICAgICAgICAgIC5kYXRhKCdwdXJjaGFzYWJsZScsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0IGNiSWQgPSAkYWxzb0JvdWdodENoZWNrYm94LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0ICRsYWJlbEZvckNoZWNrYm94ID0gJChgbGFiZWxbZm9yPVwiJHtjYklkfVwiXWApO1xuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ191blB1cmNoYXNlJykpIHtcbiAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAkbGFiZWxGb3JDaGVja2JveC5hZGRDbGFzcygnX2Rpc2FibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RlblF1YW50aXR5QWxzb0JvdWdodENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2libGluZ3MoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJHRhcmdldC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcblxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWF4IG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWluIG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgICAgIGlmICgocXR5IC0gMSkgPj0gcXVhbnRpdHlNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICAkaW5wdXQudmFsKHF0eSk7XG5cbiAgICAgICAgICAgIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5vbignaW5wdXQnLCAnW2RhdGEtcXVhbnRpdHktYWxzby1ib3VnaHQtY2hhbmdlXSBpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRpbnB1dC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBpZiAocXR5ID4gMCkge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwub24oJ2JsdXInLCAnW2RhdGEtcXVhbnRpdHktYWxzby1ib3VnaHQtY2hhbmdlXSBpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgaWYgKCRpbnB1dC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIH1cblxuICAgIHVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCAkYWxsID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkYWxsLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgJGJ0bnMgPSAkKCdbZGF0YS1idXR0b25zXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRidG5zLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYnRucy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gbG9uZ2VyIHVzZWQuIEtlZXAgZm9yIG90aGVyIHRoaXJkLXBhcnR5IHNjcmlwdHMgY29tcGF0aWJpbGl0eS5cbiAgICAvKipcbiAgICAgKiBQcm9taXNlIHRvIENhbGwgYWZ0ZXIgdGhlIHBhcmVudCBwcm9kdWN0IGlzIGFkZGVkIHRvIGFkZCBhbHNvLWJvdWdodCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBhc3luYyBwYXJlbnRQcm9kdWN0QWRkZWRUb0NhcnQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXJlbnQgcHJvZHVjdCBhZGRlZCcpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC4kc2NvcGUuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdOmNoZWNrZWQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHByb21pc2VTZXJpYWwocHJvbWlzZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICB9XG5cblxuICAgIGFzeW5jIGFkZFNlbGVjdGVkUHJvZHVjdHNUb0NhcnQoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS52YWwoKSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTx7cHJvZHVjdDogUHJvZHVjdERldGFpbHMsIHJlc3A6IGFueX0+fSAqL1xuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RBZGRlZCA9IFtdO1xuICAgICAgICBsZXQgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJ1tkYXRhLWFkZC1zZWxlY3RlZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4uaHRtbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAuaHRtbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIC8vIGFkZCBwYXJlbnQgcHJvZHVjdCB0byBjYXJ0XG4gICAgICAgIGlmIChwcm9kdWN0SWRzLmluZGV4T2YodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQpID4gLTEpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSByZXBvcnRGb3JtVmFsaWRpdHkodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kZm9ybS5nZXQoMCkpO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXJyLCByZXNwXSA9IGF3YWl0IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuYWRkUHJvZHVjdFRvQ2FydEFzeW5jKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBlcnIgfHwgcmVzcC5kYXRhLmVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvck1zZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBTd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoYFtkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XVt2YWx1ZT1cIiR7dGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWR9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkcHJvZHVjdEVscyA9ICQoJ1tkYXRhLXByb2R1Y3QtaWRdJywgdGhpcy4kYWxzb0JvdWdodEVsKS5ub3QoJ1tkYXRhLXBhcmVudC1wcm9kdWN0XScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdElkcy5sZW5ndGggJiYgc3VjY2VzczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwcm9kdWN0SWRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCB8fCBwcm9kdWN0SWQgPT09IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMucHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkcHJvZHVjdEVscy5maWx0ZXIoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIl1gKS5maWx0ZXIoKGosIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmxlbmd0aCA9PT0gMCk7XG5cbiAgICAgICAgICAgIGlmICgkcHJvZHVjdEVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VjY2VzcyA9IHJlcG9ydEZvcm1WYWxpZGl0eShwcm9kdWN0LiRmb3JtLmdldCgwKSk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlcnIsIHJlc3BdID0gYXdhaXQgcHJvZHVjdC5hZGRQcm9kdWN0VG9DYXJ0QXN5bmMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGVyciB8fCByZXNwLmRhdGEuZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNc2csXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCBwcm9kdWN0LiRzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcXVhbnRpdHldJywgcHJvZHVjdC4kc2NvcGUpLnZhbCgwKTtcblxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0QWRkZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVzcD8uZGF0YT8uY2FydF9pdGVtPy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogJCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nLCBwcm9kdWN0LiRzY29wZSkudmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCBwcm9kdWN0LiRzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgcXVhbnRpdHkgYWxzbyBib3VnaHQgaXRlbVxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXF1YW50aXR5XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbCgnMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcHJvZHVjdElkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3BlbiB0aGUgcHJvZHVjdCBmb3JtXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJywgcHJvZHVjdC4kc2NvcGUpO1xuICAgICAgICAgICAgICAgIGlmICghJHRvZ2dsZS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b2dnbGUudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAuaHRtbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcm9kdWN0LCByZXNwIH0gPSByZXN1bHRzWzBdO1xuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC51cGRhdGVDYXJ0Q29udGVudChwcm9kdWN0LnByZXZpZXdNb2RhbCwgbmV3UHJvZHVjdEFkZGVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBlcm1hcmtldCBPQlBTIE1vZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuQ2FydFByZXZpZXcobmV3UHJvZHVjdEFkZGVkLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgIT09ICdoaWRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudXBkYXRlQ2FydENvbnRlbnQocHJvZHVjdC5wcmV2aWV3TW9kYWwsIG5ld1Byb2R1Y3RBZGRlZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBuZXcgcHJvZHVjdCBhZGRlZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0QWRkZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoaXRlbS5wcm9kdWN0LnByZXZpZXdNb2RhbC4kY29udGVudC5nZXQoMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICRtb2RhbC5maW5kKGAucHJvZHVjdFZpZXcgW2RhdGEtYWxzb2JvdWdodC1pZD1cIiR7aXRlbS5pZH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcXR5ID0gJGVsLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1xdWFudGl0eV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRxdHkudGV4dChgJHtpdGVtLnF0eX0geGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sICdwYXBhdGhlbWVzL2Fsc28tYm91Z2h0L3ByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3AuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCBwcm9kdWN0LiRzY29wZSkuZ2V0KDApO1xuICAgICAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlcnJvckJveCA9ICQoJ1tkYXRhLWVycm9yLWJveF0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkZXJyb3JNc2cgPSAkKCdbZGF0YS1lcnJvci1tZXNzYWdlXScsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja2JveCA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKTtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHByb2R1Y3QuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHByb2R1Y3QuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcblxuICAgICAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdC4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWplY3QgYWRkIHByb2R1Y3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAkZXJyb3JNc2cuaHRtbChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkZXJyb3JCb3gucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlcnJvckJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnQoJGVycm9yQm94LmdldCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvbHZlIGFkZCBwcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgJGVycm9yTXNnLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgJGVycm9yQm94LmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5LCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VycmVuY3lGb3JtYXQsIGV4dHJhY3RNb25leSwgb3BlbkNhcnRQcmV2aWV3IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbi8vXG4vLyBodHRwczovL2phdmFzY3JpcHQuaW5mby90YXNrL2RlbGF5LXByb21pc2Vcbi8vXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLy9cbi8vIGh0dHBzOi8vaGFja2Vybm9vbi5jb20vZnVuY3Rpb25hbC1qYXZhc2NyaXB0LXJlc29sdmluZy1wcm9taXNlcy1zZXF1ZW50aWFsbHktN2FhYzE4YzQ0MzFlXG4vL1xuZnVuY3Rpb24gcHJvbWlzZVNlcmlhbChmdW5jcykge1xuICAgIHJldHVybiBmdW5jcy5yZWR1Y2UoXG4gICAgICAgIChwcm9taXNlLCBmdW5jKSA9PiBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IGZ1bmMoKS50aGVuKEFycmF5LnByb3RvdHlwZS5jb25jYXQuYmluZChyZXN1bHQpKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShbXSksXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcmVwb3J0Rm9ybVZhbGlkaXR5KGZvcm0pIHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIGlmIChmb3JtICYmIGZvcm0uY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICB2YWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxzb0JvdWdodCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcm9kdWN0RGV0YWlsc30gcGFyZW50UHJvZHVjdERldGFpbHNcbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtMVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudFByb2R1Y3REZXRhaWxzLCB7XG4gICAgICAgIHRodW1ibmFpbFRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtdGh1bWJuYWlsLWl0ZW0ge3sjY2hlY2tlZH19aXMtY2hlY2tlZHt7L2NoZWNrZWR9fVwiIGRhdGEtdGh1bWJuYWlsLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC10aHVtYm5haWwtbGFiZWxcIiBocmVmPVwie3t1cmx9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgZGF0YS1zcmM9XCJ7e2ltZ319XCIgYWx0PVwie3tuYW1lfX1cIiB0aXRsZT1cInt7bmFtZX19XCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByb2R1Y3REZXRhaWxzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrYm94LXt7aWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2lkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXB1cmNoYXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInt7bmFtZX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjc2FsZUJhZGdlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYWxlLWZsYWctc2lkZSB7eyNwcm9kdWN0X3NhbGVfYmFkZ2VzfX1fcGVyY2VudHt7L3Byb2R1Y3Rfc2FsZV9iYWRnZXN9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2FsZS10ZXh0XCI+e3smc2FsZUJhZGdlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svc2FsZUJhZGdlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smY3VzdG9tQmFkZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbWFnZS10aHVtYm5haWxcIiBocmVmPVwie3t1cmx9fVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkIGNhcmQtaW1hZ2VcIiBzcmM9XCJ7e2xvYWRpbmdJbWd9fVwiIGRhdGEtc3JjPVwie3tpbWd9fVwiIGFsdD1cInt7bmFtZX19XCIgdGl0bGU9XCJ7e25hbWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaG92ZXJJbWFnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNyYz1cInt7dXJsfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1hZ2UgbGF6eWxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ7e25hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3tuYW1lfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2hvdmVySW1hZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWRldGFpbFwiIGhyZWY9XCJ7e3VybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBEZXRhaWxzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS10aXRsZVwiaHJlZj1cInt7dXJsfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e25hbWV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjcmF0aW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1yYXRpbmcgY2FyZC10ZXh0IGNhcmQtdGV4dC0tcmF0aW5nXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByb2R1Y3RSYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhdGluZy0tc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcmF0aW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9yYXRpbmdIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbG9naW5QcmljZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByaWNlUmFuZ2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smb3B0aW9uc1RvZ2dsZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm1cIiBpZD1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtLXt7aWR9fVwiIGRhdGEtcHJvZHVjdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smZm9ybUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24tZ3JvdXAgcHJpY2Utc2VjdGlvbi1ncm91cC0te3t0YXhDbGFzc1ByZWZpeH19XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBTYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS1zZWN0aW9uLS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIiB7eyNub25TYWxlUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTtcInt7L25vblNhbGVQcmljZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3twcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbFwiIHt7Xm5vblNhbGVQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svbm9uU2FsZVByaWNlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NhbGVQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLS1tYWluXCI+e3twcmljZS5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIE5vbi1zYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tebm9uU2FsZVByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJ7ey9ub25TYWxlUHJpY2V9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS13YXMtbGFiZWxcIj57e25vblNhbGVQcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tub25TYWxlUHJpY2UuZm9ybWF0dGVkfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmV0YWlsIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAge3smdGF4TGFiZWxIdG1sfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVJhbmdlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbi1ncm91cCBwcmljZS1zZWN0aW9uLWdyb3VwLS17e3RheENsYXNzUHJlZml4fX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2Utc2VjdGlvbi0tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsXCI+e3twcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPnt7c2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS0tbWFpblwiPnt7cHJpY2VSYW5nZS5taW4uZm9ybWF0dGVkfX0gLSB7e3ByaWNlUmFuZ2UubWF4LmZvcm1hdHRlZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyZ0YXhMYWJlbEh0bWx9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLXdhcy1sYWJlbFwiPnt7bm9uU2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e25vblNhbGVQcmljZS5mb3JtYXR0ZWR9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3smcmV0YWlsUHJpY2VSYW5nZUh0bWx9fVxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGF4TGFiZWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhYmJyIHRpdGxlPVwie3t0aXRsZX19XCI+e3t0ZXh0fX08L2FiYnI+XG4gICAgICAgIGAsXG4gICAgICAgIHJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBycnAtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiPlxuICAgICAgICAgICAgICAgIHt7cmV0YWlsUHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ycnBcIj57e3JldGFpbFByaWNlUmFuZ2UubWluLmZvcm1hdHRlZH19IC0ge3tyZXRhaWxQcmljZVJhbmdlLm1heC5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICByZXRhaWxQcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHJycC1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tecmV0YWlsUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTt7ey9yZXRhaWxQcmljZX19XCI+XG4gICAgICAgICAgICAgICAge3tyZXRhaWxQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcnJwLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycFwiPlxuICAgICAgICAgICAgICAgICAgICB7e3JldGFpbFByaWNlLmZvcm1hdHRlZH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIGxvZ2luUHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicHJpY2UtLWxvZ2luXCIgaHJlZj1cInt7bG9naW5Vcmx9fVwiIHRyYW5zbGF0ZT57e2xvZ2luRm9yUHJpY2VUeHR9fTwvYT5cbiAgICAgICAgYCxcbiAgICAgICAgb3B0aW9uc1RvZ2dsZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtVG9nZ2xlXCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vdXRsaW5lXCIgaHJlZj1cIiNwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS17e2lkfX1cIiBkYXRhLW9wdGlvbnMtY29sbGFwc2libGU+e3tjaG9vc2VPcHRpb25zVHh0fX08L2E+PC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHNpbXBsZUZvcm1UZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybSBmb3JtLS1hZGRUb0NhcnQgX3NpbmdsZS1wcm9kdWN0XCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cInt7YWRkVG9DYXJ0VXJsfX1cIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGRhdGEtY2FydC1pdGVtLWFkZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhY3Rpb25cIiB2YWx1ZT1cImFkZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByb2R1Y3RfaWRcIiB2YWx1ZT1cInt7aWR9fVwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmNyZW1lbnRcIiBkYXRhLXF1YW50aXR5LWFsc28tYm91Z2h0LWNoYW5nZT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImRlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3F1YW50aXR5RGVjcmVhc2VUeHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLW1pbnVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1pbnB1dCBmb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByb2R1Y3QtcXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdHlbXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3txdHl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXF1YW50aXR5LW1pbj1cInt7cXR5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1xdWFudGl0eS1tYXg9XCJ7e21heFB1cmNoYXNlUXVhbnRpdHl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ7e3R4dFF1YW50aXR5fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImluY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3F1YW50aXR5SW5jcmVhc2VUeHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWFkZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3sjcHVyY2hhc2FiaWxpdHl9fVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tb3V0c3RvY2sgX3B1cmNoYXNhYmlsaXR5XCI+e3twdXJjaGFzYWJpbGl0eX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAge3svcHVyY2hhc2FiaWxpdHl9fVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICBgLFxuICAgICAgICBsb2FkaW5nVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPjxpbWcgc3JjPVwie3tsb2FkaW5nSW1nfX1cIiBhbHQ9XCJsb2FkaW5nXCIvPjwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MgPSBudWxsLFxuICAgICAgICByYXRpbmdTdGFySHRtbEZ1bmMgPSAoaXNGdWxsID0gdHJ1ZSkgPT4gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tLXJhdGluZyR7aXNGdWxsID8gJ0Z1bGwnIDogJ0VtcHR5J31cIj5cbiAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLXN0YXJcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICBgLFxuICAgICAgICBjdXN0b21CYWRnZVRlbXBsYXRlID0gKHZhbHVlKSA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1mbGFnLXNpZGUgc2FsZS1mbGFnLXNpZGUtLWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2FsZS10ZXh0XCI+JHt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgc2hvd1Byb2R1Y3RSYXRpbmcgPSB0cnVlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzID0gcGFyZW50UHJvZHVjdERldGFpbHM7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsVGVtcGxhdGUgPSB0aHVtYm5haWxUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlsc1RlbXBsYXRlID0gcHJvZHVjdERldGFpbHNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVRlbXBsYXRlID0gcHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVGVtcGxhdGUgPSBwcmljZVJhbmdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMudGF4TGFiZWxUZW1wbGF0ZSA9IHRheExhYmVsVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlID0gcmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnJldGFpbFByaWNlVGVtcGxhdGUgPSByZXRhaWxQcmljZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvZ2luUHJpY2VUZW1wbGF0ZSA9IGxvZ2luUHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9nZ2xlVGVtcGxhdGUgPSBvcHRpb25zVG9nZ2xlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlID0gc2ltcGxlRm9ybVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvYWRpbmdUZW1wbGF0ZSA9IGxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuY29udGV4dDtcbiAgICAgICAgdGhpcy5udW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0TnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy5hbGxOdW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsID0gJCgnW2RhdGEtYWxzby1ib3VnaHRdJywgcGFyZW50UHJvZHVjdERldGFpbHMuJHByb2R1Y3RWaWV3U2NvcGUpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGFsc29Cb3VnaHRFbC5kYXRhKCdhbHNvQm91Z2h0JykgfHwge307XG4gICAgICAgIHRoaXMubW9uZXlXaXRoVGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRoVGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMubW9uZXlXaXRob3V0VGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRob3V0VGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aG91dFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RSYXRpbmcgPSBzaG93UHJvZHVjdFJhdGluZztcbiAgICAgICAgdGhpcy5yYXRpbmdTdGFySHRtbEZ1bmMgPSByYXRpbmdTdGFySHRtbEZ1bmM7XG4gICAgICAgIHRoaXMuY3VzdG9tQmFkZ2VUZW1wbGF0ZSA9IGN1c3RvbUJhZGdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdF9zYWxlX2JhZGdlcyA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfYmFkZ2VzO1xuICAgICAgICB0aGlzLnByb2R1Y3Rfc2FsZV9sYWJlbCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfbGFiZWw7XG4gICAgICAgIHRoaXMuc2hvd1JldGFpbFByaWNlID0gdGhpcy5jb250ZXh0LnNob3dfcnJwO1xuXG4gICAgICAgIC8vIHRyeSB0byBndWVzcyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgdGhpcy5tb25leUZhbGxiYWNrID0gdGhpcy5tb25leVdpdGhUYXggfHwgdGhpcy5tb25leVdpdGhvdXRUYXhcbiAgICAgICAgICAgIC8vIGlzIGRlZmF1bHQgY3VycmVuY3k/XG4gICAgICAgICAgICB8fCAodGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZSAmJiB0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID09PSB0aGlzLmNvbnRleHQuZGVmYXVsdEN1cnJlbmN5Q29kZSA/IHRoaXMuY29udGV4dC5tb25leSA6IG51bGwpXG4gICAgICAgICAgICAvLyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIHx8ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdLCBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScpLmdldCgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoX21vbmV5LCBlbCkgPT4gX21vbmV5IHx8IGV4dHJhY3RNb25leSgkKGVsKS50ZXh0KCkpLCBudWxsKVxuICAgICAgICAgICAgLy8gdXNlIGN1cnJlbmN5IGNvZGVcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID8geyAuLi50aGlzLmNvbnRleHQubW9uZXksIGN1cnJlbmN5X3Rva2VuOiBgICR7dGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZX0gYCB9IDogdGhpcy5jb250ZXh0Lm1vbmV5KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIHRoaXMucHJvZHVjdE5vZGVzID0gW107XG4gICAgICAgIHRoaXMub25BZGRBbGxCdXR0b25DbGljayA9IHRoaXMub25BZGRBbGxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayA9IHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJTaXplID0gdGhpcy5jb250ZXh0LmFsc29ib3VnaHRfdGh1bWJuYWlsX3NpemUuc3BsaXQoJ3gnKTtcblxuICAgICAgICB0aGlzLnRodW1ibmFpbFdpZHRoID0gTnVtYmVyKHRodW1iU2l6ZVswXSkgfHwgMTAwO1xuICAgICAgICB0aGlzLnRodW1ibmFpbEhlaWdodCA9IE51bWJlcih0aHVtYlNpemVbMV0pIHx8IDEwMDtcblxuICAgICAgICB0aGlzLnJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlBbHNvQm91Z2h0Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tPcHRpb25zKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtYWRkLWFsbF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm9uKCdjbGljaycsIHRoaXMub25BZGRBbGxCdXR0b25DbGljayk7XG4gICAgICAgICQoJ1tkYXRhLWFkZC1zZWxlY3RlZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm9uKCdjbGljaycsIHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBjdXJyZW5jeUZvcm1hdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY3VycmVuY3lGb3JtYXQodmFsdWUsICh0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5tb25leVdpdGhUYXggOiB0aGlzLm1vbmV5V2l0aG91dFRheCkgfHwgdGhpcy5tb25leUZhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZUFsc29Cb3VnaHRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJHRodW1ibmFpbHMgPSAkKCdbZGF0YS10aHVtYm5haWxzXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0RWxzID0gJCgnW2RhdGEtcHJvZHVjdC1pZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm5vdCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJyk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyW119ICovXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkcHJvZHVjdEVscy5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgncHJvZHVjdElkJykpO1xuXG4gICAgICAgIGlmICgkcHJvZHVjdEVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWRzOiBbSW50IV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RzQ291bnQ6IEludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmNsdWRlVGF4OiBCb29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1nV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGltZ0hlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkczogJHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogJHByb2R1Y3RzQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhQdXJjaGFzZVF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaW1nSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIChmaXJzdDogMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGltZ1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpbWdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5VjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gUHJvZHVjdFVuYXZhaWxhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gUHJvZHVjdFByZU9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlVGF4OiAkaW5jbHVkZVRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPdXRPZlN0b2NrTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5UmFuZ2VGaWVsZHMgb24gTW9uZXlSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0SWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVUYXg6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aDogdGhpcy50aHVtYm5haWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogdGhpcy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dE91dE9mU3RvY2sgPSByZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncy5pbnZlbnRvcnkuZGVmYXVsdE91dE9mU3RvY2tNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzLmZvckVhY2goKHsgbm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3ROb2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG5vZGUuZW50aXR5SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbm9kZS5wYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkVG9DYXJ0VXJsID0gbm9kZS5hZGRUb0NhcnRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBub2RlLm1pblB1cmNoYXNlUXVhbnRpdHkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdJbWcgPSB0aGlzLmNvbnRleHQubG9hZGluZ0ltZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5vZGUuZGVmYXVsdEltYWdlPy51cmwgfHwgdGhpcy5jb250ZXh0LmRlZmF1bHRQcm9kdWN0SW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdEVsID0gJHByb2R1Y3RFbHMuZmlsdGVyKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheENsYXNzUHJlZml4ID0gdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoVGF4JyA6ICd3aXRob3V0VGF4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheERhdGFQcmVmaXggPSB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gJ3dpdGgtdGF4JyA6ICd3aXRob3V0LXRheCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9zYWxlX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uU2FsZVByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX25vbl9zYWxlX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfcmV0YWlsX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvb3NlT3B0aW9uc1R4dCA9IHRoaXMuY29udGV4dC5jaG9vc2VPcHRpb25zVHh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0UXVhbnRpdHkgPSB0aGlzLmNvbnRleHQudHh0UXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eURlY3JlYXNlVHh0ID0gdGhpcy5jb250ZXh0LnR4dFF1YW50aXR5RGVjcmVhc2UucmVwbGFjZSgvKG9mKS4qL2csIGAkMSAke25vZGUubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5SW5jcmVhc2VUeHQgPSB0aGlzLmNvbnRleHQudHh0UXVhbnRpdHlJbmNyZWFzZS5yZXBsYWNlKC8ob2YpLiovZywgYCQxICR7bm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4UHVyY2hhc2VRdWFudGl0eSA9IG5vZGUubWF4UHVyY2hhc2VRdWFudGl0eSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5Gb3JQcmljZVR4dCA9IHRoaXMuY29udGV4dC5sb2dpbkZvclByaWNlVHh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5VcmwgPSB0aGlzLmNvbnRleHQubG9naW5VcmwgfHwgJy9sb2dpbi5waHAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY29udGV4dC5hbHNvYm91Z2h0X2NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93UmF0aW5nSHRtbCA9IHRoaXMuY29udGV4dC5zaG93UHJvZHVjdFJhdGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rfc2FsZV9iYWRnZXMgPSB0aGlzLmNvbnRleHQucHJvZHVjdF9zYWxlX2JhZGdlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rfc2FsZV9sYWJlbCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfbGFiZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IG5vZGUuYXZhaWxhYmlsaXR5VjIgJiYgbm9kZS5hdmFpbGFiaWxpdHlWMi5zdGF0dXMgPT09ICdVbmF2YWlsYWJsZScgPyAobm9kZS5hdmFpbGFiaWxpdHlWMi5tZXNzYWdlIHx8IHRoaXMuY29udGV4dC50eHRVbmF2YWlsYWJsZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlT3JkZXIgPSBub2RlLmF2YWlsYWJpbGl0eVYyICYmIG5vZGUuYXZhaWxhYmlsaXR5VjIuc3RhdHVzID09PSAnUHJlb3JkZXInID8gKG5vZGUuYXZhaWxhYmlsaXR5VjIubWVzc2FnZSB8fCB0aGlzLmNvbnRleHQudHh0UHJlT3JkZXIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dE9mU3RvY2sgPSAhKG5vZGUuaW52ZW50b3J5LmlzSW5TdG9jayAmJiBub2RlLmF2YWlsYWJpbGl0eVYyLnN0YXR1cyA9PT0gJ1VuYXZhaWxhYmxlJykgJiYgIShub2RlLmludmVudG9yeS5pc0luU3RvY2spID8gKG5vZGUuYXZhaWxhYmlsaXR5VjIuZGVzY3JpcHRpb24gfHwgdHh0T3V0T2ZTdG9jaykgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzYWJpbGl0eSA9IGF2YWlsYWJsZSB8fCBwcmVPcmRlciB8fCBvdXRPZlN0b2NrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3ZlclByb2R1Y3RJbWFnZSA9IGltYWdlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXMuZmluZChpbWdIb3ZlciA9PiAhaW1nSG92ZXIubm9kZS5pc0RlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2UgPyBpbWFnZS5ub2RlIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3ZlckltYWdlID0gaG92ZXJQcm9kdWN0SW1hZ2Uobm9kZS5pbWFnZXMuZWRnZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXRpbmdIdG1sID0gKHJhdGluZykgPT4gKCFyYXRpbmcgPyAnJyA6IEFycmF5LmZyb20oQXJyYXkoNSkua2V5cygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiB0aGlzLnJhdGluZ1N0YXJIdG1sRnVuYyhyYXRpbmcgPiBpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlQmFkZ2UgPSBwcmljZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiAnJyBpZiBubyBzYWxlIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmljZXM/LnNhbGVQcmljZSB8fCBwcmljZXMuc2FsZVByaWNlLnZhbHVlID09PSBwcmljZXMuYmFzZVByaWNlLnZhbHVlKSByZXR1cm4gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gJycgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0X3NhbGVfYmFkZ2VzID09PSAnaGlkZScpIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gJ3NhbGUnIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdF9zYWxlX2JhZGdlcyA9PT0gJ2xhYmVsJykgcmV0dXJuIHRoaXMucHJvZHVjdF9zYWxlX2xhYmVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHByaWNlcy5zYWxlUHJpY2UgPyBNYXRoLnJvdW5kKChwcmljZXMuYmFzZVByaWNlLnZhbHVlIC0gcHJpY2VzLnNhbGVQcmljZS52YWx1ZSkgLyBwcmljZXMuYmFzZVByaWNlLnZhbHVlICogMTAwKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IG4gPiAwID8gYCR7bn0lYCA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuICdzYWxlIHtwZXJjZW50fScgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0X3NhbGVfbGFiZWwuaW5jbHVkZXMoJ3twZXJjZW50fScpKSByZXR1cm4gdGhpcy5wcm9kdWN0X3NhbGVfbGFiZWwucmVwbGFjZSgne3BlcmNlbnR9JywgcGVyY2VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNlbnQgJ3NhbGUgLi4uJScgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9kdWN0X3NhbGVfbGFiZWx9PHNwYW4+JHtwZXJjZW50fTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tQmFkZ2UgPSAoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZmllbGQuZmlsdGVyKGUgPT4gZS5ub2RlLm5hbWUgPT09ICdfX2JhZGdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gdGhpcy5jdXN0b21CYWRnZVRlbXBsYXRlKGkubm9kZS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlUHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5iYXNlUHJpY2UgJiYgbm9kZS5wcmljZXMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUgIT09IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LnJldGFpbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmFuZ2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5wcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUgIT09IG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlUmFuZ2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5yZXRhaWxQcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5taW4udmFsdWUgIT09IG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWF4LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUHJpY2VIdG1sID0gdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gTXVzdGFjaGUucmVuZGVyKHRoaXMubG9naW5QcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5VcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Gb3JQcmljZVR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhMYWJlbEh0bWwgPSB0aGlzLmNvbmZpZy5zaG93VGF4TGFiZWwgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy50YXhMYWJlbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLmNvbnRleHQuaW5jbHVkaW5nVGF4VHh0IDogdGhpcy5jb250ZXh0LmV4Y2x1ZGluZ1RheFR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5jb250ZXh0LnByaWNlV2l0aFRheFR4dCA6IHRoaXMuY29udGV4dC5wcmljZVdpdGhvdXRUYXhUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VSYW5nZUh0bWwgPSByZXRhaWxQcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VIdG1sID0gIXJldGFpbFByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5yZXRhaWxQcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmFuZ2VIdG1sID0gcHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnByaWNlUmFuZ2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhMYWJlbEh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZUh0bWw6IHRoaXMuc2hvd1JldGFpbFByaWNlID8gcmV0YWlsUHJpY2VSYW5nZUh0bWwgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUh0bWw6IHRoaXMuc2hvd1JldGFpbFByaWNlID8gcmV0YWlsUHJpY2VIdG1sIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1RvZ2dsZUh0bWwgPSBub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA+IDAgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25zVG9nZ2xlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VPcHRpb25zVHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgIXByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5wcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhMYWJlbEh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VIdG1sOiB0aGlzLnNob3dSZXRhaWxQcmljZSA/IHJldGFpbFByaWNlSHRtbCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1IdG1sID0gbm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5sZW5ndGggPT09IDAgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5zaW1wbGVGb3JtVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dFF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5RGVjcmVhc2VUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlJbmNyZWFzZVR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhQdXJjaGFzZVF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNhYmlsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNIdG1sID0gTXVzdGFjaGUucmVuZGVyKHRoaXMucHJvZHVjdERldGFpbHNUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVySW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5QcmljZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNUb2dnbGVIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1IdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JhdGluZ0h0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nSHRtbDogdGhpcy5zaG93UHJvZHVjdFJhdGluZyA/IHJhdGluZ0h0bWwobm9kZS5yZXZpZXdTdW1tYXJ5Py5hdmVyYWdlUmF0aW5nKSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfc2FsZV9iYWRnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9zYWxlX2xhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVCYWRnZTogc2FsZUJhZGdlKG5vZGUucHJpY2VzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CYWRnZTogY3VzdG9tQmFkZ2Uobm9kZS5jdXN0b21GaWVsZHMuZWRnZXMubGVuZ3RoID4gMCA/IG5vZGUuY3VzdG9tRmllbGRzLmVkZ2VzIDogJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWxIdG1sID0gJChNdXN0YWNoZS5yZW5kZXIodGhpcy50aHVtYm5haWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmh0bWwoZGV0YWlsc0h0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1ibmFpbHMuYXBwZW5kKHRodW1ibmFpbEh0bWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHNpbXBsZSBwcm9kdWN0IGRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCwgXy5leHRlbmQodGhpcy5jb250ZXh0LCB7IGVuYWJsZUFsc29Cb3VnaHQ6IGZhbHNlIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBwcmljZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5vbigncHJpY2UtY2hhbmdlJywgKCkgPT4gdGhpcy51cGRhdGVUb3RhbFByaWNlKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHByb2R1Y3Qgb2JqZWN0IGZvciBsYXRlciB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycsIHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0IGZvdW5kYXRpb24gY29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0OiAkcHJvZHVjdEVsIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKS5vbignY2hhbmdlJywgdGhpcy5vbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZS5iaW5kKHRoaXMsICRwcm9kdWN0RWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nKS5vbihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCB0aGlzLm9uT3B0aW9uc09wZW4uYmluZCh0aGlzLCAkcHJvZHVjdEVsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBZGRTZWxlY3RlZFRvQ2FydEJ1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGluaXQgcGFyZW50IHByb2R1Y3QgaXRlbVxuICAgICAgICAgICAgY29uc3QgJHBhcmVudFByb2R1Y3RFbCA9ICQoJ1tkYXRhLXBhcmVudC1wcm9kdWN0XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJywgeyAkY29udGV4dDogJHBhcmVudFByb2R1Y3RFbCB9KTtcbiAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsICRwYXJlbnRQcm9kdWN0RWwpLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQWxzb0JvdWdodENoZWNrYm94Q2hhbmdlLmJpbmQodGhpcywgJHBhcmVudFByb2R1Y3RFbCkpO1xuXG4gICAgICAgICAgICAvLyBsaXN0ZW4gcGFyZW50IHByb2R1Y3QgcHJpY2UgY2hhbmdlXG4gICAgICAgICAgICB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLiRzY29wZS5vbigncHJpY2UtY2hhbmdlJywgKCkgPT4gdGhpcy51cGRhdGVUb3RhbFByaWNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVG90YWxQcmljZSgpIHtcbiAgICAgICAgLy8gc3RvcCBzaG93aW5nIHRvdGFsIHByaWNlIGlmIHJlcXVpcmUgbG9naW5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XTpjaGVja2VkJywgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAubWFwKGVsID0+ICQoZWwpLnZhbCgpKTtcblxuICAgICAgICBjb25zdCBwcmljZUJ5SWQgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb2R1Y3ROb2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLnByaWNlcyAmJiBub2RlLnByaWNlcy5wcmljZSkucmVkdWNlKChfcHJpY2VCeUlkLCBub2RlKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLl9wcmljZUJ5SWQsXG4gICAgICAgICAgICAgICAgW25vZGUuZW50aXR5SWRdOiB7XG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gJ3dpdGhfdGF4JyA6ICd3aXRob3V0X3RheCddOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5wcmljZXMucHJpY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnByaWNlICYmIHByb2R1Y3QucHJvZHVjdElkKS5yZWR1Y2UoKF9wcmljZUJ5SWQsIHByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uX3ByaWNlQnlJZCxcbiAgICAgICAgICAgICAgICBbcHJvZHVjdC5wcm9kdWN0SWRdOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0UXR5ID0ge307XG4gICAgICAgIHByb2R1Y3RJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFF0eSA9ICQoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke2lkfVwiXSBbZGF0YS1wcm9kdWN0LXF1YW50aXR5XWAsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgICAgICBpZiAoaW5wdXRRdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFF0eVtpZF0gPSB7IHF1YW50aXR5OiBwYXJzZUludChpbnB1dFF0eS52YWwoKSwgMTApIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXJnZVByb2R1Y3QgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJpY2VCeUlkKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIG1lcmdlUHJvZHVjdCA9IHtcbiAgICAgICAgICAgICAgICAuLi5tZXJnZVByb2R1Y3QsXG4gICAgICAgICAgICAgICAgW2tleV06IHsgLi4ucHJpY2VCeUlkW2tleV0sIC4uLnByb2R1Y3RRdHlba2V5XSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZVByb2R1Y3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1lcmdlIHByb2R1Y3ROb2RlcyAmIHByb2R1Y3QgZGV0YWlscyBvYmplY3RzXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gT2JqZWN0LmtleXMobWVyZ2VQcm9kdWN0KS5tYXAocHJvZHVjdElkID0+ICh7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBwcmljZTogbWVyZ2VQcm9kdWN0W3Byb2R1Y3RJZF0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCB0b3RhbCA9IFt0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLCAuLi5wcm9kdWN0c11cbiAgICAgICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0SWRzLmluZGV4T2YocHJvZHVjdC5wcm9kdWN0SWQpID4gLTEpXG4gICAgICAgICAgICAucmVkdWNlKCh7XG4gICAgICAgICAgICAgICAgd2l0aF90YXggPSAwLCB3aXRob3V0X3RheCA9IDAsIG1vbmV5X3dpdGhfdGF4LCBtb25leV93aXRob3V0X3RheCxcbiAgICAgICAgICAgIH0sIHsgcHJpY2UgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICB3aXRoX3RheDogcHJpY2UgJiYgcHJpY2Uud2l0aF90YXggPyB3aXRoX3RheCArIChwcmljZS53aXRoX3RheC52YWx1ZSAqIChwcmljZS5xdWFudGl0eSA/IHByaWNlLnF1YW50aXR5IDogMSkpIDogbnVsbCxcbiAgICAgICAgICAgICAgICB3aXRob3V0X3RheDogcHJpY2UgJiYgcHJpY2Uud2l0aG91dF90YXggPyB3aXRob3V0X3RheCArIChwcmljZS53aXRob3V0X3RheC52YWx1ZSAqIChwcmljZS5xdWFudGl0eSA/IHByaWNlLnF1YW50aXR5IDogMSkpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBtb25leV93aXRoX3RheDogbW9uZXlfd2l0aF90YXggfHwgKChwcmljZSAmJiBwcmljZS53aXRoX3RheCkgPyBleHRyYWN0TW9uZXkocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkLCB0aGlzLmNvbnRleHQubW9uZXkpIDogbnVsbCksXG4gICAgICAgICAgICAgICAgbW9uZXlfd2l0aG91dF90YXg6IG1vbmV5X3dpdGhvdXRfdGF4IHx8ICgocHJpY2UgJiYgcHJpY2Uud2l0aG91dF90YXgpID8gZXh0cmFjdE1vbmV5KHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGwpLFxuICAgICAgICAgICAgfSksIHt9KTtcblxuICAgICAgICBjb25zdCAkd2l0aFRheCA9ICQoJ1tkYXRhLXRvdGFsLXdpdGgtdGF4XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICR3aXRob3V0VGF4ID0gJCgnW2RhdGEtdG90YWwtd2l0aG91dC10YXhdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcblxuICAgICAgICBpZiAodG90YWwud2l0aF90YXgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByaWNlXScsICR3aXRoVGF4KS5odG1sKHRoaXMuY3VycmVuY3lGb3JtYXQodG90YWwud2l0aF90YXgsIHRvdGFsLm1vbmV5X3dpdGhfdGF4KSk7XG4gICAgICAgICAgICAkd2l0aFRheC5zaG93KCk7XG4gICAgICAgICAgICBpZiAodG90YWwud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10YXgtbGFiZWxdJywgJHdpdGhUYXgpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRoVGF4KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd2l0aFRheC5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG90YWwud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByaWNlXScsICR3aXRob3V0VGF4KS5odG1sKHRoaXMuY3VycmVuY3lGb3JtYXQodG90YWwud2l0aG91dF90YXgsIHRvdGFsLm1vbmV5X3dpdGhvdXRfdGF4KSk7XG4gICAgICAgICAgICAkd2l0aG91dFRheC5zaG93KCk7XG4gICAgICAgICAgICBpZiAodG90YWwud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10YXgtbGFiZWxdJywgJHdpdGhvdXRUYXgpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRob3V0VGF4KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd2l0aG91dFRheC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZEFsbEJ1dHRvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGlja09wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5vbignY2xpY2snLCAnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV06bm90KC5pcy1vcGVuKScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtaWRdJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuICAgICAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICR0YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVjaycpLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScpO1xuICAgICAgICAgICAgaWYgKCFwcm9kdWN0Py4kZm9ybT8uZ2V0KDApLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsLm9uKCdjbGljaycsICdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRhbHNvQm91Z2h0Q2hlY2tib3ggPSAkdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGlmICghJGFsc29Cb3VnaHRDaGVja2JveC5kYXRhKCdwdXJjaGFzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGRTZWxlY3RlZFByb2R1Y3RzVG9DYXJ0KCk7XG4gICAgfVxuXG4gICAgb25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UoJHByb2R1Y3RFbCwgZSkge1xuICAgICAgICBjb25zdCAkY2IgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGxhYmVsID0gJChgbGFiZWxbZm9yPVwiJHskY2IuYXR0cignaWQnKX1cIl1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCAkdGh1bWIgPSAkKGBbZGF0YS10aHVtYm5haWwtcHJvZHVjdC1pZD1cIiR7JHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0SWQnKX1cIl1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuXG4gICAgICAgIC8vIG9wZW4gKGNsb3NlKSBwcm9kdWN0IG9wdGlvbnMgZm9ybSBpZiBjaGVja2JveCBpcyBjaGVja2VkICh1bmNoZWNrZWQpXG4gICAgICAgIGlmICgkY2IucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkbGFiZWwuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICR0aHVtYi5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxhYmVsLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAkdGh1bWIucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25zT3BlbigkcHJvZHVjdEVsKSB7XG4gICAgICAgIGNvbnN0ICRpbnB1dFF0eSA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nKTtcbiAgICAgICAgY29uc3QgaW5wdXRRdHkgPSBwYXJzZUludCgkaW5wdXRRdHkudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXRRdHkuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBxdHkgPSBxdWFudGl0eU1pbiB8fCAxO1xuICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnX3VuUHVyY2hhc2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbnB1dFF0eSkge1xuICAgICAgICAgICAgJGlucHV0UXR5LnZhbChxdHkpO1xuICAgICAgICB9XG4gICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGlmICgkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0RGV0YWlscygkcHJvZHVjdEVsKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtcHJvZHVjdC1jb250ZW50XScpO1xuICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJGNvbnRlbnQuY2xvc2VzdCgnLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVjaycpLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScpO1xuXG4gICAgICAgICRjb250ZW50Lmh0bWwoTXVzdGFjaGUucmVuZGVyKHRoaXMubG9hZGluZ1RlbXBsYXRlLCB7IGxvYWRpbmdJbWc6IHRoaXMuY29udGV4dC5sb2FkaW5nSW1nIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSk7XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgeyB0ZW1wbGF0ZTogJ3BhcGF0aGVtZXMvYWxzby1ib3VnaHQvcHJvZHVjdC1kZXRhaWxzJyB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuaHRtbCgkKHJlc3ApLmh0bWwoKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwsIF8uZXh0ZW5kKHRoaXMuY29udGV4dCwgeyBlbmFibGVBbHNvQm91Z2h0OiBmYWxzZSB9KSwgbnVsbCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJpY2UgY2hhbmdlXG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0UXR5ID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFF0eSA9IHBhcnNlSW50KCRpbnB1dFF0eS52YWwoKSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0UXR5LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBxdWFudGl0eU1pbiB8fCAxO1xuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0UXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dFF0eS52YWwocXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKCdwdXJjaGFzYWJsZScsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIHByb2R1Y3Qtdmlldy11cGRhdGUgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyBmb3IgdG9nZ2xlIGNoZWNrYm94IGRlcGVuZGluZyBvbiBwcm9kdWN0IHBhY2hhc2liaWxpdHlcbiAgICAgICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5vbigncHJvZHVjdC12aWV3LXVwZGF0ZScsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ3B1cmNoYXNhYmxlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXRRdHkudmFsKDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgncHVyY2hhc2FibGUnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFF0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dFF0eS52YWwocXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHByb2R1Y3Qgb2JqZWN0IGZvciBsYXRlciB1c2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycsIHByb2R1Y3QpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFByaWNlKCk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhlIHByb2R1Y3QgaGFzIG9wdGlvbmFsIG5vdCByZXF1aXJlZFxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuICAgICAgICBjb25zdCBjaGVjayA9IHByb2R1Y3Q/LiRmb3JtPy5nZXQoMCkuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ3B1cmNoYXNhYmxlJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdfdW5QdXJjaGFzZScpKSB7XG4gICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdGVuUXVhbnRpdHlBbHNvQm91Z2h0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWFsc28tYm91Z2h0LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zaWJsaW5ncygnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRhbHNvQm91Z2h0Q2hlY2tib3ggPSAkdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID49IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgICRpbnB1dC52YWwocXR5KTtcblxuICAgICAgICAgICAgaWYgKHF0eSA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsLm9uKCdpbnB1dCcsICdbZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2VdIGlucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJGlucHV0LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5vbignYmx1cicsICdbZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2VdIGlucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBpZiAoJGlucHV0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfVxuXG4gICAgdXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0ICRhbGwgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRhbGwuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICAgICAgICBjb25zdCAkYnRucyA9ICQoJ1tkYXRhLWJ1dHRvbnNdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcblxuICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGJ0bnMuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRidG5zLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBsb25nZXIgdXNlZC4gS2VlcCBmb3Igb3RoZXIgdGhpcmQtcGFydHkgc2NyaXB0cyBjb21wYXRpYmlsaXR5LlxuICAgIC8qKlxuICAgICAqIFByb21pc2UgdG8gQ2FsbCBhZnRlciB0aGUgcGFyZW50IHByb2R1Y3QgaXMgYWRkZWQgdG8gYWRkIGFsc28tYm91Z2h0IHByb2R1Y3RzLlxuICAgICAqL1xuICAgIGFzeW5jIHBhcmVudFByb2R1Y3RBZGRlZFRvQ2FydCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudCBwcm9kdWN0IGFkZGVkJyk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LiRzY29wZS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcHJvbWlzZVNlcmlhbChwcm9taXNlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgIH1cblxuXG4gICAgYXN5bmMgYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XTpjaGVja2VkJywgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAubWFwKGVsID0+ICQoZWwpLnZhbCgpKTtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5PHtwcm9kdWN0OiBQcm9kdWN0RGV0YWlscywgcmVzcDogYW55fT59ICovXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdEFkZGVkID0gW107XG4gICAgICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnW2RhdGEtYWRkLXNlbGVjdGVkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi5odG1sKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC5odG1sKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgLy8gYWRkIHBhcmVudCBwcm9kdWN0IHRvIGNhcnRcbiAgICAgICAgaWYgKHByb2R1Y3RJZHMuaW5kZXhPZih0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCkgPiAtMSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHJlcG9ydEZvcm1WYWxpZGl0eSh0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLiRmb3JtLmdldCgwKSk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlcnIsIHJlc3BdID0gYXdhaXQgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5hZGRQcm9kdWN0VG9DYXJ0QXN5bmMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGVyciB8fCByZXNwLmRhdGEuZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNc2csXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChgW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdW3ZhbHVlPVwiJHt0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZH1cIl1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0RWxzID0gJCgnW2RhdGEtcHJvZHVjdC1pZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm5vdCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0SWRzLmxlbmd0aCAmJiBzdWNjZXNzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb2R1Y3RJZHNbaV07XG5cbiAgICAgICAgICAgIGlmICghcHJvZHVjdElkIHx8IHByb2R1Y3RJZCA9PT0gdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RFbCA9ICRwcm9kdWN0RWxzLmZpbHRlcihgW2RhdGEtcHJvZHVjdC1pZD1cIiR7cHJvZHVjdElkfVwiXWApLmZpbHRlcigoaiwgZWwpID0+ICQoZWwpLmNsb3Nlc3QoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykubGVuZ3RoID09PSAwKTtcblxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzID0gcmVwb3J0Rm9ybVZhbGlkaXR5KHByb2R1Y3QuJGZvcm0uZ2V0KDApKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VyciwgcmVzcF0gPSBhd2FpdCBwcm9kdWN0LmFkZFByb2R1Y3RUb0NhcnRBc3luYygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyIHx8IHJlc3AuZGF0YS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgU3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nLCBwcm9kdWN0LiRzY29wZSkudmFsKDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RBZGRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXNwPy5kYXRhPy5jYXJ0X2l0ZW0/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiAkKCdbZGF0YS1wcm9kdWN0LXF1YW50aXR5XScsIHByb2R1Y3QuJHNjb3BlKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCBxdWFudGl0eSBhbHNvIGJvdWdodCBpdGVtXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcXVhbnRpdHldJywgcHJvZHVjdC4kc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsKCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBwcm9kdWN0SWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvcGVuIHRoZSBwcm9kdWN0IGZvcm1cbiAgICAgICAgICAgICAgICBjb25zdCAkdG9nZ2xlID0gJCgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICAgICAgaWYgKCEkdG9nZ2xlLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvZ2dsZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByb2R1Y3QsIHJlc3AgfSA9IHJlc3VsdHNbMF07XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnVwZGF0ZUNhcnRDb250ZW50KHByb2R1Y3QucHJldmlld01vZGFsLCBuZXdQcm9kdWN0QWRkZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IE9CUFMgTW9kXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5DYXJ0UHJldmlldyhuZXdQcm9kdWN0QWRkZWQsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5hZGRfdG9fY2FydF9wb3B1cCAhPT0gJ2hpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByZXZpZXdNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC51cGRhdGVDYXJ0Q29udGVudChwcm9kdWN0LnByZXZpZXdNb2RhbCwgbmV3UHJvZHVjdEFkZGVkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG5ldyBwcm9kdWN0IGFkZGVkIHRvIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RBZGRlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJChpdGVtLnByb2R1Y3QucHJldmlld01vZGFsLiRjb250ZW50LmdldCgwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJG1vZGFsLmZpbmQoYC5wcm9kdWN0VmlldyBbZGF0YS1hbHNvYm91Z2h0LWlkPVwiJHtpdGVtLmlkfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRxdHkgPSAkZWwuZmluZCgnW2RhdGEtY2FydC1pdGVtLXF1YW50aXR5XScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHF0eS50ZXh0KGAke2l0ZW0ucXR5fSB4YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgJ3BhcGF0aGVtZXMvYWxzby1ib3VnaHQvcHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcC5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsIHByb2R1Y3QuJHNjb3BlKS5nZXQoMCk7XG4gICAgICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuICAgICAgICAgICAgY29uc3QgJGVycm9yQm94ID0gJCgnW2RhdGEtZXJyb3ItYm94XScsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRlcnJvck1zZyA9ICQoJ1tkYXRhLWVycm9yLW1lc3NhZ2VdJywgcHJvZHVjdC4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGNoZWNrYm94ID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgcHJvZHVjdC4kc2NvcGUpO1xuXG4gICAgICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgcHJvZHVjdC4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQocHJvZHVjdC5maWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuXG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0LiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlamVjdCBhZGQgcHJvZHVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICRlcnJvck1zZy5odG1sKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRlcnJvckJveC5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGVycm9yQm94Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvRWxlbWVudCgkZXJyb3JCb3guZ2V0KDApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc29sdmUgYWRkIHByb2R1Y3QnKTtcbiAgICAgICAgICAgICAgICAkZXJyb3JNc2cuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAkZXJyb3JCb3guYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjb25zdCBjb3VudHJpZXMgPSBbXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FGJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBZmdoYW5pc3RhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQVgnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0FsYW5kIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FMJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBbGJhbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdEWicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQWxnZXJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQVMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdBRCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQW5kb3JyYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQU8nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0FuZ29sYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQUknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0FuZ3VpbGxhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdBUScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQW50YXJjdGljYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQUcnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBcmdlbnRpbmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBcm1lbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdBVycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQXJ1YmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FVJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0FUJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdBdXN0cmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdBWicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQXplcmJhaWphbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQlMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JhaGFtYXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JIJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCYWhyYWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdCRCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQmFuZ2xhZGVzaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQkInLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JhcmJhZG9zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdCWScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQmVsYXJ1cycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQkUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JlbGdpdW0nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JaJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCZWxpemUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JKJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCZW5pbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQk0nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0Jlcm11ZGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JUJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCaHV0YW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCb2xpdmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdCQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQlcnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JvdHN3YW5hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdCVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQm91dmV0IElzbGFuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQlInLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JyYXppbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSU8nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVkcnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0JyaXRpc2ggVmlyZ2luIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JOJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCcnVuZWknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0JHJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdCdWxnYXJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQkYnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0J1cmtpbmEgRmFzbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQkknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0J1cnVuZGknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0tIJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDYW1ib2RpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ00nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0NhbWVyb29uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ2FuYWRhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ2FwZSBWZXJkZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQlEnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0NhcmliYmVhbiBOZXRoZXJsYW5kcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS1knLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0NheW1hbiBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDRicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdURCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ2hhZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ0wnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0NoaWxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDTicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ2hpbmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0NYJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDQycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0NPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDb2xvbWJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS00nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0NvbW9yb3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0NLJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDb29rIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0NSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDb3N0YSBSaWNhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdIUicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnQ3JvYXRpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ1UnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0N1YmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0NXJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdDdXJhw6dhbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ1knLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0N5cHJ1cycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ1onLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0N6ZWNoaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0RLJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdEZW5tYXJrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdESicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRGppYm91dGknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0RNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdEb21pbmljYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnRE8nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ0QnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0RSIENvbmdvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdFQycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRWN1YWRvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnRUcnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0VneXB0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRWwgU2FsdmFkb3InLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dRJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnRVInLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0VyaXRyZWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0VFJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdFc3RvbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTWicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRXN3YXRpbmknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0VUJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdFdGhpb3BpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnRksnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0ZPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdGYXJvZSBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdGSicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRmlqaScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnRkknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0ZpbmxhbmQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0ZSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdGcmFuY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dGJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdGcmVuY2ggR3VpYW5hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQRicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnRnJlbmNoIFBvbHluZXNpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVEYnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0ZyZW5jaCBTb3V0aGVybiBhbmQgQW50YXJjdGljIExhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR2Fib24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdHYW1iaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dFJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdHZW9yZ2lhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdERScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR2VybWFueScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnR0gnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0doYW5hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHSScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR2licmFsdGFyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHUicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3JlZWNlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHTCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3JlZW5sYW5kJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHRCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3JlbmFkYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnR1AnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0d1YWRlbG91cGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dVJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdHdWFtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3VhdGVtYWxhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHRycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3Vlcm5zZXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dOJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdHdWluZWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0dXJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdHdWluZWEtQmlzc2F1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHWScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnR3V5YW5hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdIVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnSGFpdGknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0hNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0hOJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdIb25kdXJhcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSEsnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0hvbmcgS29uZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSFUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0h1bmdhcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0lTJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdJY2VsYW5kJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdJTicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnSW5kaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0lEJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdJbmRvbmVzaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0lSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdJcmFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdJUScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnSXJhcScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSUUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0lyZWxhbmQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0lNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdJc2xlIG9mIE1hbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSUwnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0lzcmFlbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnSVQnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0l0YWx5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDSScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnSXZvcnkgQ29hc3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0pNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdKYW1haWNhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdKUCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnSmFwYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0pFJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdKZXJzZXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0pPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdKb3JkYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0taJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdLYXpha2hzdGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdLRScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnS2VueWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0tJJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdLaXJpYmF0aScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnWEsnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0tvc292bycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS1cnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0t1d2FpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS0cnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0t5cmd5enN0YW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0xBJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdMYW9zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdMVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTGF0dmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdMQicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTGViYW5vbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTFMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ0xlc290aG8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0xSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdMaWJlcmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdMWScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTGlieWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0xJJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdMaWVjaHRlbnN0ZWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdMVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTGl0aHVhbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdMVScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTHV4ZW1ib3VyZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTU8nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01hY2F1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNRycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWFkYWdhc2NhcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTVcnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01hbGF3aScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTVknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01hbGF5c2lhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWFsZGl2ZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01MJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNYWxpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWFsdGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01IJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNUScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWFydGluaXF1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTVInLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01hdXJpdGFuaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01VJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNYXVyaXRpdXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1lUJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNYXlvdHRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNWCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWV4aWNvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdGTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTWljcm9uZXNpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTUQnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01vbGRvdmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01DJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNb25hY28nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01OJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNb25nb2xpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTUUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01vbnRlbmVncm8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01TJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNb250c2VycmF0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTW9yb2NjbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTVonLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ01vemFtYmlxdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ01NJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdNeWFubWFyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdOQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTmFtaWJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTlInLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05hdXJ1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdOUCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTmVwYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ05MJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdOZXRoZXJsYW5kcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTkMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05ldyBDYWxlZG9uaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ05aJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdOZXcgWmVhbGFuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTkknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05pY2FyYWd1YScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTkUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05pZ2VyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdORycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTmlnZXJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTlUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05pdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ05GJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdOb3Jmb2xrIElzbGFuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS1AnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ05vcnRoIEtvcmVhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNSycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTm9ydGggTWFjZWRvbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNUCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdOTycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnTm9yd2F5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdPTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnT21hbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnUEsnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1Bha2lzdGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQVycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUGFsYXUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BTJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQYWxlc3RpbmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BBJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQYW5hbWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BHJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQWScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUGFyYWd1YXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BFJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQZXJ1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQSCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUGhpbGlwcGluZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BOJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQaXRjYWlybiBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQTCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUG9sYW5kJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUG9ydHVnYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1BSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdQdWVydG8gUmljbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnUUEnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1FhdGFyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdDRycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdSRScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUsOpdW5pb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1JPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdSb21hbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdSVScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUnVzc2lhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdSVycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnUndhbmRhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdCTCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2FpbnQgQmFydGjDqWxlbXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NIJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnS04nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnTEMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NhaW50IEx1Y2lhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdNRicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2FpbnQgTWFydGluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdQTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVkMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdXUycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2Ftb2EnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NNJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTYW4gTWFyaW5vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTVCcsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2F1ZGkgQXJhYmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTTicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU2VuZWdhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnUlMnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NlcmJpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnU0MnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NleWNoZWxsZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NMJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTaWVycmEgTGVvbmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NHJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTaW5nYXBvcmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NYJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTaW50IE1hYXJ0ZW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NLJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTbG92YWtpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnU0knLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1Nsb3ZlbmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTQicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTTycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU29tYWxpYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnWkEnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NvdXRoIEFmcmljYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnR1MnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NvdXRoIEdlb3JnaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0tSJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTb3V0aCBLb3JlYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnU1MnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1NvdXRoIFN1ZGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdFUycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU3BhaW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0xLJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTcmkgTGFua2EnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1NEJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdTdWRhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnU1InLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1N1cmluYW1lJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTSicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnU0UnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1N3ZWRlbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQ0gnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1N3aXR6ZXJsYW5kJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdTWScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnU3lyaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1RXJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdUYWl3YW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1RKJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdUYWppa2lzdGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdUWicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVGFuemFuaWEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1RIJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdUaGFpbGFuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVEwnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1RpbW9yLUxlc3RlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdURycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVG9nbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVEsnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1Rva2VsYXUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1RPJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdUb25nYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVFQnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1ROJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdUdW5pc2lhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdUUicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVHVya2V5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdUTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVHVya21lbmlzdGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdUQycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdUVicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVHV2YWx1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdVRycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVWdhbmRhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdVQScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVWtyYWluZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnQUUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdHQicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVW5pdGVkIEtpbmdkb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1VTJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdVTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdWSScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVW5pdGVkIFN0YXRlcyBWaXJnaW4gSXNsYW5kcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVVknLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1VydWd1YXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ1VaJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdVemJla2lzdGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdWVScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnVmFudWF0dScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVkEnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1ZhdGljYW4gQ2l0eScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVkUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1ZlbmV6dWVsYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnVk4nLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1ZpZXQgTmFtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdXRicsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb3VudHJ5Q29kZTogJ0VIJyxcbiAgICAgICAgY291bnRyeU5hbWU6ICdXZXN0ZXJuIFNhaGFyYScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvdW50cnlDb2RlOiAnWUUnLFxuICAgICAgICBjb3VudHJ5TmFtZTogJ1llbWVuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdaTScsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnWmFtYmlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY291bnRyeUNvZGU6ICdaVycsXG4gICAgICAgIGNvdW50cnlOYW1lOiAnWmltYmFid2UnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJpZXM7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgZm91bmRhdGlvbiBmcm9tICcuLi9nbG9iYWwvZm91bmRhdGlvbic7IC8vIFN1cGVybWFya2V0XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgZGVmYXVsdE1vZGFsLCBNb2RhbEV2ZW50cywgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7XG5pbXBvcnQgYmFubmVyVXRpbHMgZnJvbSAnLi91dGlscy9iYW5uZXItdXRpbHMnO1xuaW1wb3J0IGN1cnJlbmN5U2VsZWN0b3IgZnJvbSAnLi4vZ2xvYmFsL2N1cnJlbmN5LXNlbGVjdG9yJztcbmltcG9ydCBBbHNvQm91Z2h0IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvYWxzby1ib3VnaHQnOyAvLyBQYXBhdGhlbWVzIC0gQWxzb0JvdWdodFxuaW1wb3J0IEFsc29Cb3VnaHRHYW1lIGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvYWxzby1ib3VnaHQtZ2FtZSc7IC8vIFBhcGF0aGVtZXMgLSBBbHNvQm91Z2h0IC0gVGhlbWUgR2FtZVxuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbmltcG9ydCB7IHNjcm9sbFRvcCB9IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvdGhlbWUtdXRpbHMnOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5pbXBvcnQgeyBvcGVuQ2FydFByZXZpZXcgfSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL3V0aWxzJzsgLy8gcGFwYXRoZW1lcy1pbmhlYWx0aFxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tICcuL2NvdW50cmllcyc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuY29uc3Qgc21hbGxNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnc21hbGwnKTsgLy8gcGFwYXRoZW1lcy1raXRjaGVuYXJ5XG5jb25zdCBtZWRpdW1NZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnbWVkaXVtJyk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcblxuLy8gU3VwZXJtYXJrZXQgLSBPQlBTIE1vZFxuLyogZXNsaW50LWRpc2FibGUgKi9cbmZ1bmN0aW9uIHNoYWtlKCRlbCwgc2V0dGluZ3MpIHtcbiAgICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuaW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmludGVydmFsID0gMTAwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuZGlzdGFuY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmRpc3RhbmNlID0gMTA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy50aW1lcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MudGltZXMgPSA0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuY29tcGxldGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cblxuICAgICRlbC5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cbiAgICBmb3IgKGxldCBpdGVyID0gMDsgaXRlciA8IChzZXR0aW5ncy50aW1lcyArIDEpOyBpdGVyKyspIHtcbiAgICAgICAgJGVsLmFuaW1hdGUoeyBsZWZ0OiAoKGl0ZXIgJSAyID09PSAwID8gc2V0dGluZ3MuZGlzdGFuY2UgOiBzZXR0aW5ncy5kaXN0YW5jZSAqIC0xKSkgfSwgc2V0dGluZ3MuaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgICRlbC5hbmltYXRlKHsgbGVmdDogMCB9LCBzZXR0aW5ncy5pbnRlcnZhbCwgc2V0dGluZ3MuY29tcGxldGUpO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG4vLyBTdXBlcm1hcmtldDogRml4IFByaWNlIG5vdCB1cGRhdGUgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGlzIGNoZWNrZWRcbmZ1bmN0aW9uIHN1cGVybWFya2V0U2VyaWFsaXplKCRmb3JtKSB7XG4gICAgY29uc3QgYXNzb2MgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpLnJlZHVjZSgoX2Fzc29jLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIF9hc3NvY1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gX2Fzc29jO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gJC5wYXJhbShhc3NvYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGVBcmcsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7IC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EIHt7e1xuICAgICAgICBjb25zdCAkc2NvcGUgPSBjb250ZXh0LmVuYWJsZUFsc29Cb3VnaHQgPyAkc2NvcGVBcmcuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtcGFyZW50LXNjb3BlXScpIDogJHNjb3BlQXJnO1xuICAgICAgICB0aGlzLiRwcm9kdWN0Vmlld1Njb3BlID0gJHNjb3BlQXJnO1xuICAgICAgICAvLyB9fX1cblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIGZvdW5kYXRpb24oJChkb2N1bWVudCkpOyAvLyBTdXBlcm1hcmtldFxuICAgICAgICB0aGlzLmluaXRDdXN0b21UYWJzKCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuICAgICAgICB0aGlzLmluaXRUYWJzQURBKCk7IC8vIFBhcGF0aGVtZXMgLSBLaXRjaGVuYXJ5XG5cbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgTWljcm9Nb2RhbC5pbml0KHtcbiAgICAgICAgICAgIGRpc2FibGVTY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyxcbiAgICAgICAgICAgIGNsb3NlVHJpZ2dlcjogJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBBbHNvQm91Z2h0XG4gICAgICAgIGlmIChjb250ZXh0LmVuYWJsZUFsc29Cb3VnaHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhbHNvQm91Z2h0T3B0aW9ucyB9ID0gd2luZG93LnN1cGVybWFya2V0VGhlbWVFeHRyYUNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC52YXJpYW50ID09PSAnZ2FtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbHNvQm91Z2h0ID0gbmV3IEFsc29Cb3VnaHRHYW1lKHRoaXMsIGFsc29Cb3VnaHRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsc29Cb3VnaHQgPSBuZXcgQWxzb0JvdWdodCh0aGlzLCBhbHNvQm91Z2h0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICgkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKSB8fCAnJykudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgZWRpdGVkIGZvciBhbHNvLWJvdWdodFxuICAgICAgICB0aGlzLnByaWNlID0gbnVsbDtcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gJCgnaW5wdXRbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCB0aGlzLiRzY29wZSkudmFsKCk7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcblxuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXQ6IEZpeCBjbGljayByZXZpZXdzIGxpbmsgb3BlbiB0YWJcbiAgICAgICAgJCgnYVtocmVmKj1cIiN0YWItcmV2aWV3c1wiXScsICRzY29wZSkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghJHRhcmdldC5pcygnLnRhYi10aXRsZScpICYmICEkdGFyZ2V0LmlzKCdbZGF0YS10YWItbW9iaWxlXScpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQoYC50YWItdGl0bGVbaHJlZj1cIiN0YWItcmV2aWV3cy0ke3RoaXMucHJvZHVjdElkfVwiXTp2aXNpYmxlLCBbZGF0YS10YWItbW9iaWxlXVtocmVmPVwiI3RhYi1yZXZpZXdzLSR7dGhpcy5wcm9kdWN0SWR9XCJdOnZpc2libGVgLCAkc2NvcGUpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCEkdGFiLmlzKCcuaXMtb3BlbiwgLmlzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0YWIudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHRhYi5nZXQoMCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1vb25jYXQ6IGRpc3BsYXkgYnJhbmQgaW1hZ2VcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnJhbmQtaW1hZ2VdJykuZWFjaCgoaSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW1nID0gJChpbWcpO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gJGltZy5kYXRhKCdicmFuZEltYWdlJyk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gJGltZy5kYXRhKCdzaXplcycpO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZTJ4ID0gc2l6ZS5zcGxpdCgneCcpLm1hcChuID0+IE51bWJlcihuKSAqIDIpLmpvaW4oJ3gnKTtcbiAgICAgICAgICAgICRpbWcuYXR0cignc3Jjc2V0JywgYCR7c3JjLnJlcGxhY2UoJy9vcmlnaW5hbC8nLCBgLyR7c2l6ZX0vYCl9IDF4LCAke3NyYy5yZXBsYWNlKCcvb3JpZ2luYWwvJywgYC8ke3NpemUyeH0vYCl9IDJ4YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8ga2l0Y2hlbmFyeTogYWxsb3cgdW5jaGVja2luZyByYWRpbyBvcHRpb25zIG9mIHJlY3RhbmdsZSBhbmQgc3dhdGNoIGF0dHJpYnV0ZXMge3t7XG4gICAgICAgIHRoaXMucHJldmlvdXNSYWRpb1ZhbHVlcyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnRcbiAgICAgICAgICAgIC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInNldC1yZWN0YW5nbGVcIl0sIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic2V0LXJhZGlvXCJdLCBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXScpXG4gICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5nZXQoKS5yZWR1Y2UoKGFjYywgZWwpID0+ICh7IFtlbC5uYW1lXTogZWwudmFsdWUsIC4uLmFjYyB9KSwge30pO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NsaWNrJywgJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic2V0LXJlY3RhbmdsZVwiXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic2V0LXJhZGlvXCJdIGlucHV0W3R5cGU9XCJyYWRpb1wiXSwgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9ICRlbFswXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzUmFkaW9WYWx1ZXNbbmFtZV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JhZGlvVmFsdWVzW25hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JhZGlvVmFsdWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9fX1cblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNmb3JtLWFjdGlvbi1idXlOb3cnLCAkc2NvcGUpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9YWN0aW9uXScpLnZhbCgnYnV5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChfLmlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZHVjdElkLCBzdXBlcm1hcmtldFNlcmlhbGl6ZSgkZm9ybSksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLmFkZENsYXNzKCdwcmV2aWV3LW1vZGFsJykuYWRkQ2xhc3MoYHByZXZpZXctbW9kYWwtLSR7Y29udGV4dC5hZGRfdG9fY2FydF9wb3B1cH1gKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnbWluaScpIHtcbiAgICAgICAgICAgICAgICAvLyB1bmJpbmQgb3Blbi9jbG9zZSBldmVudCBvZiB0aGUgb3JpZ2luYWwgbW9kYWxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCBvcGVuL2NsYXNzIGV2ZW50IGZvciBtaW5pIHByZXZpZXcgbW9kYWxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsT3BlbiA9IHRoaXMub25NaW5pUHJldmlld01vZGFsT3Blbi5iaW5kKHRoaXMucHJldmlld01vZGFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UgPSB0aGlzLm9uTWluaVByZXZpZXdNb2RhbENsb3NlLmJpbmQodGhpcy5wcmV2aWV3TW9kYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsT3Blbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAvLyB0aGlzLmluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0KCk7XG4gICAgICAgIHRoaXMuaW5pdEdvVG9UYWIoKTtcbiAgICAgICAgdGhpcy5pbml0Q291bnRkb3duKCk7XG4gICAgICAgIC8vIE5lZWQgZm9yIHBhcGF0aGVtZXMtbXFwbyArIGFsc29ib3VnaHQgdjIgY29tcGxpYW5jZVxuICAgICAgICB0aGlzLiRzY29wZS5kYXRhKCdwcm9kdWN0RGV0YWlsc0luc3RhbmNlJywgdGhpcyk7XG4gICAgICAgIHV0aWxzLmhvb2tzLmVtaXQoJ3Byb2R1Y3QtcHJvZHVjdGRldGFpbHMtaW5pdCcsIHRoaXMpO1xuXG4gICAgICAgIC8vIENoaWFyYTogZHJvcGRvd24gY29sb3Igc3dhdGNoZXNcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5zd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSA9PT0gJ2Ryb3Bkb3duJyB8fCB0aGlzLmNvbnRleHQuc3dhdGNoX29wdGlvbl9kaXNwbGF5X3R5cGUgPT09ICdib3RoJykge1xuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi9wYXBhdGhlbWVzL2Ryb3Bkb3duLXN3YXRjaGVzJylcbiAgICAgICAgICAgICAgICAudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQodGhpcywge1xuICAgICAgICAgICAgICAgICAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlczogdGhpcy5jb250ZXh0LnN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlID09PSAnZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tc2hhcmUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1zaGFyZScpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGlucHV0U2hhcmVMaW5rID0gdGhpcy4kc2NvcGUuZmluZCgnLmZvcm0tc2hhcmUgLmZvcm0taW5wdXQnKTtcbiAgICAgICAgaW5wdXRTaGFyZUxpbmsub24oJ2NsaWNrJywgKF9ldmVudCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRTaGFyZUxpbmsuc2VsZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyhjb250ZXh0KTtcbiAgICAgICAgdGhpcy5nZXRGbGFnTGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWdpb25Db3VudHJ5KCk7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVnaW9uSW5Nb2RhbCgpO1xuICAgICAgICB0aGlzLmxvYWRNb3JlUmVnaW9uKCk7XG4gICAgfVxuXG4gICAgLy8gVGltZSBjb3VudGRvd25cbiAgICBpbml0Q291bnRkb3duKCkge1xuICAgICAgICBjb25zdCBpbml0VGltZUNvdW50ZG93biA9IChkYXlzVGV4dCwgaG91cnNUZXh0LCBtaW51dGVzVGV4dCwgc2Vjb25kc1RleHQsIGVuZFRpbWUsIGJsb2NrVGltZSwgbGFiZWxUaXRsZSwgYmxvY2tEYXlzLCBibG9ja0hvdXJzLCBibG9ja01pbnV0ZXMsIGJsb2NrVGltZXIpID0+IHtcbiAgICAgICAgICAgIGJsb2NrVGltZXIucmVtb3ZlQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlVGltZURhdGUgPSAoc3RhcnRUaW1lLCBkYXRlU2V0VGltZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IE1hdGguZmxvb3IoKGRhdGVTZXRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvIDg2NDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gODY0MDA7XG4gICAgICAgICAgICAgICAgICAgIGRheXNUZXh0LnRleHQoYCR7ZGF5cyA8IDEwID8gYDAkeyBkYXlzfWAgOiBkYXlzfWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXlzLmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNUZXh0LmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWwgLyAzNjAwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gMzYwMDtcbiAgICAgICAgICAgICAgICAgICAgaG91cnNUZXh0LnRleHQoYDAke2hvdXJzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSG91cnMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUZXh0LmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbCAvIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gNjA7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXNUZXh0LnRleHQoYDAke21pbnV0ZXN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja01pbnV0ZXMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlc1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RleHQudGV4dChgMCR7c2Vjb25kc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUucmVtb3ZlQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZVJ1bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoc3RhcnRUaW1lLCBkYXRlU2V0VGltZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IE1hdGguZmxvb3IoKGRhdGVTZXRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvIDg2NDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gODY0MDA7XG4gICAgICAgICAgICAgICAgICAgIGRheXNUZXh0LnRleHQoYCR7ZGF5cyA8IDEwID8gYDAkeyBkYXlzfWAgOiBkYXlzfWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXlzLmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNUZXh0LmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWwgLyAzNjAwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gMzYwMDtcbiAgICAgICAgICAgICAgICAgICAgaG91cnNUZXh0LnRleHQoYDAke2hvdXJzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSG91cnMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUZXh0LmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbCAvIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgJT0gNjA7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXNUZXh0LnRleHQoYDAke21pbnV0ZXN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja01pbnV0ZXMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlc1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RleHQudGV4dChgMCR7c2Vjb25kc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUucmVtb3ZlQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWUucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lUnVuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZS5zZXREYXRlKGRhdGVTZXRUaW1lLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IE1hdGguZmxvb3IoKGRhdGVTZXRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gODY0MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA4NjQwMDtcbiAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQudGV4dChgJHtkYXlzIDwgMTAgPyBgMCR7IGRheXN9YCA6IGRheXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RheXMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbCAvIDM2MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSAzNjAwO1xuICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQudGV4dChgMCR7aG91cnN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tIb3Vycy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlc1RleHQudGV4dChgMCR7bWludXRlc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTWludXRlcy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzVGV4dC5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVGV4dC50ZXh0KGAwJHtzZWNvbmRzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUaXRsZS5yZW1vdmVDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIWVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVSdW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleFRpbWUgPSAvKDAwfFswLTldfDFbMC05XXwyWzAtM10pOihbMC05XXxbMC01XVswLTldKTooWzAtOV18WzAtNV1bMC05XSlcXGIvO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4VGltZXpvbmUgPSAvWystXVswLTldezEsMn1cXGIkLztcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleERhdGUgPSAvXlxcZFxcZFxcZFxcZC0oMD9bMS05XXwxWzAtMl0pLSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSlcXGIvO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRpbWV6b25lID0gZW5kVGltZS5tYXRjaChyZWdleFRpbWV6b25lKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRUaW1lID0gZW5kVGltZS5tYXRjaChyZWdleFRpbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdERhdGUgPSBlbmRUaW1lLm1hdGNoKHJlZ2V4RGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSByZXN1bHRUaW1lWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSByZXN1bHRUaW1lWzJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSByZXN1bHRUaW1lWzNdO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHREYXRlICYmICFyZXN1bHRUaW1lem9uZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2V0VGltZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lRGF0ZShzdGFydFRpbWUsIGRhdGVTZXRUaW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZXN1bHREYXRlICYmIHJlc3VsdFRpbWV6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVab25lID0gcmVzdWx0VGltZXpvbmVbMF0ucmVwbGFjZSgvW1xcKyddKy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lWm9uZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR6RGlmZmVyZW5jZSA9IHRpbWVab25lICogNjAgKyBkYXRlU2V0VGltZVpvbmUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VGltZSA9IG5ldyBEYXRlKGRhdGVTZXRUaW1lWm9uZS5nZXRUaW1lKCkgKyB0ekRpZmZlcmVuY2UgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2V0VGltZUVuZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTZXRUaW1lRW5kLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVNldFRpbWVFbmQuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVNldFRpbWVFbmQuc2V0U2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZShvZmZzZXRUaW1lLCBkYXRlU2V0VGltZUVuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHREYXRlICYmIHJlc3VsdFRpbWV6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVab25lID0gcmVzdWx0VGltZXpvbmVbMF0ucmVwbGFjZSgvW1xcKyddKy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lWm9uZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR6RGlmZmVyZW5jZSA9IHRpbWVab25lICogNjAgKyBkYXRlU2V0VGltZVpvbmUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VGltZSA9IG5ldyBEYXRlKGRhdGVTZXRUaW1lWm9uZS5nZXRUaW1lKCkgKyB0ekRpZmZlcmVuY2UgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2V0VGltZSA9IGAke3Jlc3VsdERhdGVbMF19ICR7cmVzdWx0VGltZVswXX1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU2V0VGltZUVuZCA9IG5ldyBEYXRlKGRhdGVTZXRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZURhdGUob2Zmc2V0VGltZSwgZGF0ZVNldFRpbWVFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVNldFRpbWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZS5zZXRTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lKHN0YXJ0VGltZSwgZGF0ZVNldFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgJHNjb3BlID0gdGhpcy4kc2NvcGUuZmluZCgnLnByb2R1Y3RWaWV3LXNhbGVDb3VudCcpO1xuICAgICAgICBjb25zdCBkYXlzVGV4dCA9ICRzY29wZS5maW5kKCcuX2RheXMnKTtcbiAgICAgICAgY29uc3QgaG91cnNUZXh0ID0gJHNjb3BlLmZpbmQoJy5faG91cnMnKTtcbiAgICAgICAgY29uc3QgbWludXRlc1RleHQgPSAkc2NvcGUuZmluZCgnLl9taW51dGVzJyk7XG4gICAgICAgIGNvbnN0IHNlY29uZHNUZXh0ID0gJHNjb3BlLmZpbmQoJy5fc2Vjb25kcycpO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gJHNjb3BlLmRhdGEoJ2NvdW50ZG93bicpO1xuICAgICAgICBjb25zdCBsYWJlbFRpdGxlID0gJHNjb3BlLmZpbmQoJy5fbGFiZWxUaW1lX190aXRsZScpO1xuICAgICAgICBjb25zdCBibG9ja1RpbWVyID0gJHNjb3BlLmZpbmQoJy5fc2hvd1RpbWVyJyk7XG4gICAgICAgIGNvbnN0IGJsb2NrRGF5cyA9ICRzY29wZS5maW5kKCcuX2Jsb2NrRGF5cycpO1xuICAgICAgICBjb25zdCBibG9ja0hvdXJzID0gJHNjb3BlLmZpbmQoJy5fYmxvY2tIb3VycycpO1xuICAgICAgICBjb25zdCBibG9ja01pbnV0ZXMgPSAkc2NvcGUuZmluZCgnLl9ibG9ja01pbnV0ZXMnKTtcbiAgICAgICAgY29uc3QgdGltZVJ1biA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGluaXRUaW1lQ291bnRkb3duKGRheXNUZXh0LCBob3Vyc1RleHQsIG1pbnV0ZXNUZXh0LCBzZWNvbmRzVGV4dCwgZW5kVGltZSwgJHNjb3BlLCBsYWJlbFRpdGxlLCBibG9ja0RheXMsIGJsb2NrSG91cnMsIGJsb2NrTWludXRlcywgYmxvY2tUaW1lcik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0KCkge1xuICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgJHF1aWNrVmlldyA9IHRoaXMuJHNjb3BlLmNsb3Nlc3QoJy5xdWlja1ZpZXcnKS5maXJzdCgpO1xuICAgICAgICAkcXVpY2tWaWV3LmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblxuICAgICAgICBsZXQgcmVzdW1lU3RpY2t5SGVhZGVyO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvVmlldyA9IGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKCQoZWwpLmF0dHIoJ2hyZWYnKSwgdGhpcy4kc2NvcGUpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJHF1aWNrVmlldy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGggPSAkcXVpY2tWaWV3LnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIGxldCAkZWwgPSAkdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoISRlbC5pcygnLnF1aWNrVmlldycpICYmICRlbC5sZW5ndGggPiAwICYmIGkrKyA8IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGggKz0gJGVsLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAgICAgICAgICAgICAkZWwgPSAkZWwub2Zmc2V0UGFyZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHF1aWNrVmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBoIC0gNTAsXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICR0YXJnZXQub2Zmc2V0KCkudG9wIC0gNTAsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHN0aWNreSBoZWFkZXIgd2hpbGUgc2Nyb2xsaW5nIHRvIHRoZSB0YWIgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc3VtZVN0aWNreUhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnX3NraXBDaGVja1Njcm9sbFVwU3RpY2t5SGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiAkKCdodG1sLCBib2R5JykuY2xlYXJRdWV1ZSgpLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXN1bWVTdGlja3lIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdW1lU3RpY2t5SGVhZGVyID0gc2V0VGltZW91dCgoKSA9PiAkYm9keS5yZW1vdmVDbGFzcygnX3NraXBDaGVja1Njcm9sbFVwU3RpY2t5SGVhZGVyJyksIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC50YWInLCB0aGlzLiRzY29wZSlcbiAgICAgICAgICAgIC5vbignb3BlbmVkJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZWRpdW1NZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvVmlldygkKGV2ZW50LnRhcmdldCkuZmluZCgnYScpLmdldCgwKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRHb1RvVGFiKCkge1xuICAgICAgICAkKCdbZGF0YS1nb3RvdGFiXScsIHRoaXMuJHNjb3BlKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9ICRlbC5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpdW1NZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtdGFiXScpLmZpbmQoYGFbaHJlZj1cIiR7aHJlZn1cImApLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gdGhpcy4kc2NvcGUuZmluZChocmVmKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCgkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0RmxhZ0xhbmd1YWdlKCkge1xuICAgICAgICBjb25zdCAkc3VtbWFyeUxhbmcgPSAkKCdbZGF0YS1zdW1tYXJ5LWxhbmd1YWdlXScsIHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoISRzdW1tYXJ5TGFuZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRmbGFnTGlzdCA9ICQoJ1tkYXRhLXN1bW1hcnktbGFuZ3VhZ2VdJywgdGhpcy4kc2NvcGUpLnNpYmxpbmdzKCcuZmxhZy1ncm91cCcpLmZpbmQoJy5mbGFnLWxpc3QnKTtcbiAgICAgICAgY29uc3QgJGZsYWdNb3JlID0gJCgnW2RhdGEtc3VtbWFyeS1sYW5ndWFnZV0nLCB0aGlzLiRzY29wZSkuc2libGluZ3MoJy5mbGFnLWdyb3VwJykuZmluZCgnI2ZsYWctbW9yZScpO1xuICAgICAgICBjb25zdCBzaG93TW9yZVR4dCA9ICRmbGFnTW9yZS5kYXRhKCdzaG93TW9yZScpO1xuICAgICAgICBjb25zdCBzaG93TGVzc1R4dCA9ICRmbGFnTW9yZS5kYXRhKCdzaG93TGVzcycpO1xuICAgICAgICBjb25zdCBsYW5nVHh0ID0gJHN1bW1hcnlMYW5nLnRleHQoKTtcbiAgICAgICAgY29uc3QgZmxhZ0FyciA9IFtdO1xuICAgICAgICBsYW5nVHh0LnNwbGl0KCd8JykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZmxhZ0Fyci5wdXNoKGVsZW1lbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gZWxlbWVudC5zbGljZShpLCBpICsgMik7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdBcnIucHVzaCh0eHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwYXRoID0gJGZsYWdMaXN0LmRhdGEoJ3NyYycpO1xuXG4gICAgICAgIC8vIGFkZCBmbGFnXG4gICAgICAgICRmbGFnTGlzdC5ub3QoJy5fYWRkZWQnKS5hZGRDbGFzcygnX2FkZGVkJykuZWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsYWdBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnID0gYDxpbWcgY2xhc3M9XCJmbGFnLWl0ZW1cIiBzcmM9XCIke3BhdGh9JHtmbGFnQXJyW2ldfS5wbmdcIiBhbHQ9XCIke2ZsYWdBcnJbaV19XCIgdGl0bGU9XCIke2ZsYWdBcnJbaV19XCI+YDtcbiAgICAgICAgICAgICAgICAkZmxhZ01vcmUuYmVmb3JlKGZsYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMb2FkIG1vcmUgZmxhZyBsZWZ0XG4gICAgICAgIGNvbnN0IG1vcmUgPSBgKyAke2ZsYWdBcnIubGVuZ3RoIC0gMn0gJHtzaG93TW9yZVR4dH1gO1xuICAgICAgICBpZiAoZmxhZ0Fyci5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAkZmxhZ01vcmUuc2hvdygpO1xuICAgICAgICAgICAgJGZsYWdNb3JlLnRleHQobW9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2FkIG1vcmUgLSBsZXNzXG4gICAgICAgICRmbGFnTW9yZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGJ0biA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghJGJ0bi5kYXRhKCdmbGFnQ29sbGFwc2UnKSkge1xuICAgICAgICAgICAgICAgICRmbGFnTGlzdC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICRidG4udGV4dChgLSAke3Nob3dMZXNzVHh0fWApO1xuICAgICAgICAgICAgICAgICRidG4uZGF0YSgnZmxhZ0NvbGxhcHNlJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmbGFnTGlzdC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICRidG4udGV4dChtb3JlKTtcbiAgICAgICAgICAgICAgICAkYnRuLmRhdGEoJ2ZsYWdDb2xsYXBzZScsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVnaW9uQ291bnRyeSgpIHtcbiAgICAgICAgY29uc3QgJGN1c3RvbWZpbGVkUmVnaW9uID0gJCgnLl9zcGVjaWFsLWluZm8tcmVnaW9uJywgdGhpcy4kc2NvcGUpLmZpbmQoJ1tkYXRhLWN1c3RvbWZpZWxkLXJlZ2lvbl0nKTtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRSZWdpb24gPSAkKCcuX3NwZWNpYWwtaW5mby1yZWdpb24nLCB0aGlzLiRzY29wZSkuZmluZCgnW2RhdGEtY3VycmVudC1yZWdpb25dJyk7XG4gICAgICAgIGNvbnN0IHJlZ2lvbkNhbm5vdEFjdGl2ZVR4dCA9ICRjdXN0b21maWxlZFJlZ2lvbi5kYXRhKCdjYW5ub3RBY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVnaW9uVHh0ID0gJGN1c3RvbWZpbGVkUmVnaW9uLmRhdGEoJ2N1c3RvbWZpZWxkUmVnaW9uJyk7XG5cbiAgICAgICAgaWYgKCEkY3VzdG9tZmlsZWRSZWdpb24ubGVuZ3RoIHx8ICFyZWdpb25UeHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudHJ5Q29kZSA9IHRoaXMuY29udGV4dC5jb3VudHJ5X2NvZGU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudHJ5TmFtZSA9IGNvdW50cmllcy5maW5kKGNvdW50cnkgPT4gY291bnRyeS5jb3VudHJ5Q29kZSA9PT0gY3VycmVudENvdW50cnlDb2RlKS5jb3VudHJ5TmFtZTtcblxuICAgICAgICAvLyBDaGFuZ2UgcHJvZHVjdFZpZXctaW5mb1xuICAgICAgICBjb25zdCBsaXN0Q3VzdG9tZmllbGRSZWdpb24gPSBbXTtcbiAgICAgICAgJGN1cnJlbnRSZWdpb24udGV4dChgJHtjdXJyZW50Q291bnRyeU5hbWUgfS5gKTtcblxuICAgICAgICBpZiAocmVnaW9uVHh0LnRvTG93ZXJDYXNlKCkgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICBsaXN0Q3VzdG9tZmllbGRSZWdpb24ucHVzaChyZWdpb25UeHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgbGlzdCByZWdpb24gY3VzdG9tZmllbGRcbiAgICAgICAgICAgIHJlZ2lvblR4dC5zcGxpdCgnfCcpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEN1c3RvbWZpZWxkUmVnaW9uLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gZWxlbWVudC5zbGljZShpLCBpICsgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Q3VzdG9tZmllbGRSZWdpb24ucHVzaCh0eHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0Q3VzdG9tZmllbGRSZWdpb24uc29ydCgpO1xuICAgICAgICAgICAgJGN1c3RvbWZpbGVkUmVnaW9uLmF0dHIoJ2RhdGEtY3VzdG9tZmllbGQtcmVnaW9uJywgbGlzdEN1c3RvbWZpZWxkUmVnaW9uLmpvaW4oJ3wnKSk7XG5cbiAgICAgICAgICAgIGlmICgkLmluQXJyYXkoY3VycmVudENvdW50cnlDb2RlLCBsaXN0Q3VzdG9tZmllbGRSZWdpb24pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICRjdXN0b21maWxlZFJlZ2lvbi50ZXh0KHJlZ2lvbkNhbm5vdEFjdGl2ZVR4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCdib2R5Jykubm90KCcuX2FkZGVkLXJlZ2lvbicpLmFkZENsYXNzKCdfYWRkZWQtcmVnaW9uJykuZWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENsaWNrZWQgPSBudWxsO1xuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XCJyZWdpb25SZXRyaWN0aW9uTW9kYWxcIl0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50QnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoJGN1cnJlbnRCdXR0b24uaXMobGFzdENsaWNrZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkbGlzdFJlZ2lvbiA9ICRjdXJyZW50QnV0dG9uLnBhcmVudHMoJy5fc3BlY2lhbC1pbmZvLXJlZ2lvbicpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvLXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyUmVnaW9uID0gJGxpc3RSZWdpb24uYXR0cignZGF0YS1jdXN0b21maWVsZC1yZWdpb24nKS5zcGxpdCgnfCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3JlZ2lvblJldHJpY3Rpb25Nb2RhbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbEhlYWRlciA9ICRtb2RhbC5maW5kKCcubW9kYWxfX2hlYWRlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRyZWdpb25UaXRsZSA9ICRtb2RhbC5maW5kKCdbZGF0YS1yZWdpb24tdGl0bGVdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHJlZ2lvbk5hbWUgPSAkbW9kYWwuZmluZCgnW2RhdGEtcmVnaW9uLW5hbWVdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHJlZ2lvbkxpc3QgPSAkbW9kYWwuZmluZCgnLnJlZ2lvbi1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsQ291bnRyeSA9ICRtb2RhbC5maW5kKCcucmVnaW9uLWluZm8tY291bnRyeSAucmVnaW9uLWluZm8tdmFsdWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzdHJpY3RlZCA9ICRtb2RhbC5maW5kKCcucmVnaW9uLWluZm8tcmVzdHJpY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRyZXN0cmljdGVkTGlzdCA9ICRyZXN0cmljdGVkLmZpbmQoJy5yZWdpb24taW5mby1yZXN0cmljdGVkTGlzdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbFR4dCA9ICRyZXN0cmljdGVkTGlzdC5kYXRhKCdyZWdpb25HbG9iYWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzdHJpY3RlZE1vcmUgPSAkcmVzdHJpY3RlZC5maW5kKCcjcmVzdHJpY3RlZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdHJpY3RlZENhbm5vdEFjdGl2ZSA9ICRyZWdpb25UaXRsZS5kYXRhKCdyZWdpb25DYW5ub3RBY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93TW9yZVR4dCA9ICRyZXN0cmljdGVkTW9yZS5kYXRhKCdzaG93TW9yZScpO1xuXG4gICAgICAgICAgICAgICAgJGxhYmVsQ291bnRyeS50ZXh0KGN1cnJlbnRDb3VudHJ5TmFtZSk7XG4gICAgICAgICAgICAgICAgJHJlZ2lvbk5hbWUudGV4dChjdXJyZW50Q291bnRyeU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIFJlZ2lvbiBjdXN0b21maWVsZCA9PSAnQWxsJ1xuICAgICAgICAgICAgICAgIGlmIChhcnJSZWdpb25bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJHJlc3RyaWN0ZWRMaXN0LmZpbmQoJ3NwYW4nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHJlc3RyaWN0ZWRMaXN0LnByZXBlbmQoYDxzcGFuPiR7Z2xvYmFsVHh0fTwvc3Bhbj5gKTtcbiAgICAgICAgICAgICAgICAgICAgJHJlZ2lvbkxpc3QuaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICRyZXN0cmljdGVkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChjb3VudHJpZXMsIChpbmRleCwgY291bnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSAkKCc8bGk+JykudGV4dChjb3VudHJ5LmNvdW50cnlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZWdpb25MaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpYWxDb3VudHJ5QXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICRyZXN0cmljdGVkTGlzdC5maW5kKCdzcGFuJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRyZWdpb25MaXN0Lmh0bWwoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5Q29kZSA9IGFyclJlZ2lvbltpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeU9iamVjdCA9IGNvdW50cmllcy5maW5kKGNvdW50cnkgPT4gY291bnRyeS5jb3VudHJ5Q29kZSA9PT0gY291bnRyeUNvZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxDb3VudHJ5QXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZTogY291bnRyeU9iamVjdC5jb3VudHJ5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeU5hbWU6IGNvdW50cnlPYmplY3QuY291bnRyeU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgY291bnRyeSBpbiBzZWFyY2ggYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGkgPSBgPGxpPiR7Y291bnRyeU9iamVjdC5jb3VudHJ5TmFtZX08L2xpPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlZ2lvbkxpc3QuYXBwZW5kKGxpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBjb3VudHJ5IGluIHNlYXJjaCByZXN0cmljdGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBgPHNwYW4+JHtjb3VudHJ5T2JqZWN0LmNvdW50cnlOYW1lfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN0cmljdGVkTW9yZS5iZWZvcmUoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBub3QgaW5jbHVkZXMgY3VycmVudCBjb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoY3VycmVudENvdW50cnlDb2RlLCBhcnJSZWdpb24pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGFsSGVhZGVyLmFkZENsYXNzKCdfbm90LWFjdGl2YXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJlZ2lvblRpdGxlLnRleHQocmVzdHJpY3RlZENhbm5vdEFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9hZG1vcmUgaW4gcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9yZSA9IGArICR7YXJyUmVnaW9uLmxlbmd0aCAtIDJ9ICR7c2hvd01vcmVUeHR9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyAyIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclJlZ2lvbi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVzdHJpY3RlZE1vcmUuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3RyaWN0ZWRNb3JlLnRleHQobW9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYXN0Q2xpY2tlZCA9ICRjdXJyZW50QnV0dG9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRNb3JlUmVnaW9uKCkge1xuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjcmVnaW9uUmV0cmljdGlvbk1vZGFsJyk7XG4gICAgICAgIGNvbnN0ICRyZXN0cmljdGVkID0gJG1vZGFsLmZpbmQoJy5yZWdpb24taW5mby1yZXN0cmljdGVkJyk7XG4gICAgICAgIGNvbnN0ICRyZXN0cmljdGVkTGlzdCA9ICRyZXN0cmljdGVkLmZpbmQoJy5yZWdpb24taW5mby1yZXN0cmljdGVkTGlzdCcpO1xuICAgICAgICBjb25zdCAkcmVzdHJpY3RlZE1vcmUgPSAkcmVzdHJpY3RlZC5maW5kKCcjcmVzdHJpY3RlZC1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHNob3dNb3JlVHh0ID0gJHJlc3RyaWN0ZWRNb3JlLmRhdGEoJ3Nob3dNb3JlJyk7XG4gICAgICAgIGNvbnN0IHNob3dMZXNzVHh0ID0gJHJlc3RyaWN0ZWRNb3JlLmRhdGEoJ3Nob3dMZXNzJyk7XG5cblxuICAgICAgICAkcmVzdHJpY3RlZExpc3Qubm90KCcuX2FkZGVkJykuYWRkQ2xhc3MoJ19hZGRlZCcpLmVhY2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gTG9hZCBtb3JlIC0gbGVzcyByZWdpb24gaW4gbW9kYWxcbiAgICAgICAgICAgICRyZXN0cmljdGVkTW9yZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRidG4gPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRSZWdpb24gPSAkYnRuLnNpYmxpbmdzKCdzcGFuJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkYnRuLmRhdGEoJ3Jlc3RyaWN0ZWRDb2xsYXBzZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICRyZXN0cmljdGVkTGlzdC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAkYnRuLnRleHQoYC0gJHtzaG93TGVzc1R4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgJGJ0bi5kYXRhKCdyZXN0cmljdGVkQ29sbGFwc2UnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkcmVzdHJpY3RlZExpc3QucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGJ0bi50ZXh0KGArICR7Y291bnRSZWdpb24gLSAyfSAke3Nob3dNb3JlVHh0fWApO1xuICAgICAgICAgICAgICAgICAgICAkYnRuLmRhdGEoJ3Jlc3RyaWN0ZWRDb2xsYXBzZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VhcmNoUmVnaW9uSW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3JlZ2lvblJldHJpY3Rpb25Nb2RhbCcpO1xuICAgICAgICBjb25zdCAkcmVnaW9uTGlzdCA9ICRtb2RhbC5maW5kKCcucmVnaW9uLWxpc3QnKTtcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJG1vZGFsLmZpbmQoJyNyZWdpb24tc2VhcmNoJyk7XG5cbiAgICAgICAgJGlucHV0Lm9uKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9ICRpbnB1dC52YWwoKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgJHJlZ2lvbkxpc3QuZmluZCgnbGknKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4dFZhbHVlID0gJChlbGVtZW50KS50ZXh0KCkgfHwgJChlbGVtZW50KS5odG1sKCk7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS50b2dnbGUodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICAgICAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gICAgICovXG4gICAgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzID8gY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0IDogJChgbGFiZWxbZm9yPSR7Y2hlY2tlZC5pZH1dYCkuZmlyc3QoKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHMgPyBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXSA6ICQoYGxhYmVsW2Zvcj0ke2NoZWNrZWQuaWR9XWApLmNoaWxkcmVuKCkuZ2V0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPSR7SlNPTi5zdHJpbmdpZnkocHJvZHVjdE5hbWUpfV1gKTsgLy8gRml4ZWQgYnkgUGFwYVRoZW1lc1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRidXlOb3c6ICQoJyNmb3JtLWFjdGlvbi1idXlOb3cnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCwgI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydFN0aWNreScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2ssIC5wcm9kdWN0Vmlldy1pbmZvLW5hbWUtLXN0b2NrLCAucHJvZHVjdFZpZXctaW5mby12YWx1ZS0tc3RvY2snLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGVkaXRlZFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRiYWRnZTogJCgnLnByb2R1Y3RWaWV3LXN0b2NrTGFiZWwnLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1wbjoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQubXBuLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHNhbGVDb3VudGRvd246IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJvZHVjdFZpZXctc2FsZUNvdW50JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhblNhbGU6ICQoJy5fbGFiZWxUaW1lX190aXRsZSAuX3ByaWNlU2FsZScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByb2R1Y3RWaWV3LXNhbGVMYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcm9kdWN0Vmlldy1zYWxlTGFiZWwgLl9wcmljZVNhbGUnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQ6IGRpc3BsYXkgc2VsZWN0ZWQgc3dhdGNoIHRpdGxlXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5kYXRhKCdwcm9kdWN0QXR0cmlidXRlTGFiZWwnKSkge1xuICAgICAgICAgICAgJGNoYW5nZWRPcHRpb25cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgLmh0bWwoJGNoYW5nZWRPcHRpb24uZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJykpO1xuXG4gICAgICAgICAgICAvLyBraXRjaGVuYXJ5OiBjbGVhciBzd2F0Y2ggdGl0bGUgd2hlbiB1bmNoZWNrIHJhZGlvXG4gICAgICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpICYmICEkY2hhbmdlZE9wdGlvbi5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgc3VwZXJtYXJrZXRTZXJpYWxpemUoJGZvcm0pLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZT8uZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlPy5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21fc2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCB6b29tIHNpemUgdXNlZCBmb3IgZGF0YS16b29tLWltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdF9zaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X2ltYWdlX3Jlc3BvbnNpdmUgPyB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSkgOiAnJztcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIC8vIG1haW5JbWFnZVVybDogYCR7bWFpbkltYWdlVXJsfT9pbWJ5cGFzcz1vbmAsXG4gICAgICAgICAgICAgICAgLy8gem9vbUltYWdlVXJsOiBgJHt6b29tSW1hZ2VVcmx9P2ltYnlwYXNzPW9uYCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkucmVzdG9yZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBhY3Rpb24gd2hlbiB0aGUgc2hvcHBlciBjbGlja3Mgb24gKyAvIC0gZm9yIHF1YW50aXR5XG4gICAgICpcbiAgICAgKi9cbiAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuICAgICAgICAgICAgICAvLyBTdGFydCBUaWNrZXQgMTAwMlxuICAgICAgICAgICAgbGV0IGdldFBhY2tWYWx1ZSA9ICQoJ2JvZHknKS5maW5kKCdbZGF0YS1wYWNrLXZhbHVlXScpLnZhbCgpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0UGFja1ZhbHVlICcrZ2V0UGFja1ZhbHVlKTtcbiAgICAgICAgICAgIGlmKGdldFBhY2tWYWx1ZSAmJiBnZXRQYWNrVmFsdWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgaWYoZ2V0UGFja1ZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFja1ZhbHVlID0gcGFyc2VJbnQoZ2V0UGFja1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGdldFF0eUlucHV0ID0gJCgnYm9keScpLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcXR5XScpO1xuICAgICAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBleGNlZWQgbWF4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9xdHkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHF0eV91cGRhdGVkID0gIHF0eSArIGdldFBhY2tWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJChnZXRRdHlJbnB1dCkudmFsKHF0eV91cGRhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZ2V0UXR5SW5wdXQpLnJlbW92ZUNsYXNzKCd0ZW1wQ2xhc3NBY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwyNTApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAkKGdldFF0eUlucHV0KS5hZGRDbGFzcygndGVtcENsYXNzQWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdHkgPiBnZXRQYWNrVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdHlfdXBkYXRlZCA9ICBxdHkgLSBnZXRQYWNrVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChnZXRRdHlJbnB1dCkudmFsKHF0eV91cGRhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGdldFF0eUlucHV0KS5yZW1vdmVDbGFzcygndGVtcENsYXNzQWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDI1MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChnZXRRdHlJbnB1dCkudmFsKGdldFBhY2tWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChnZXRRdHlJbnB1dCkucmVtb3ZlQ2xhc3MoJ3RlbXBDbGFzc0FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwyNTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBleGNlZWQgbWF4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy8gRW5kIFRpY2tldCAxMDAyXG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gR2lhbyAtIHN1cGVybWFya2V0OlxuICAgICAgICAvLyBGaXggcHJvYmxlbSB3aGVuIGVudGVyIG9uIHF1YW50aXR5IGJveCB3b24ndCBkZWNyZWFzZSAxIHVuaXRcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpLnF1YW50aXR5LiRpbnB1dC5vbigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgYWRkZWQgZm9yIGFsc28tYm91Z2h0XG4gICAgYWRkUHJvZHVjdFRvQ2FydEFzeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XG4gICAgICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCwgI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydFN0aWNreScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi5odG1sKCk7XG4gICAgICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC5odG1sKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZCh0aGlzLmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybSkpLCBhc3luYyAoZXJyLCByZXNwb25zZSkgPT4geyAvLyBBbHNvQm91Z2h0IE1vZFxuICAgICAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgLmh0bWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbZXJyLCByZXNwb25zZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byBjYXJ0XG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0LCAjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0U3RpY2t5JywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLmh0bWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAuaHRtbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZCh0aGlzLmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybSkpLCBhc3luYyAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5jYXJ0X2lkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVuY3lTZWxlY3RvcihyZXNwb25zZS5kYXRhLmNhcnRfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAuaHRtbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldDogU3VwcG9ydCByZWRpcmVjdCB0byBjYXJ0IHBhZ2UgYWZ0ZXIgYWRkZWQgdG8gY2FydFxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5yZWRpcmVjdF9jYXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hpYXJhXG4gICAgICAgICAgICBpZiAoZm9ybS5hY3Rpb24udmFsdWUgPT09ICdidXknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHRoaXMuY29udGV4dC51cmxzLmNoZWNrb3V0LnNpbmdsZV9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtaW5oZWFsdGg6IFNob3cgY2FydCBwcmV2aWV3IG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSBxdWljay12aWV3IG1vZGFsXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5DYXJ0UHJldmlldyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwZXJtYXJrZXQgT0JQUyBNb2RcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5hZGRfdG9fY2FydF9wb3B1cCAhPT0gJ2hpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KHRoaXMucHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBjb250ZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSwgdGVtcGxhdGUgPSAnY2FydC9wcmV2aWV3Jykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUsIHRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5hcHBseU1vZGFsQXV0b0Nsb3NlKG1vZGFsKTsgLy8gU3VwZXJtYXJrZXRcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFByaWNlID0gJCgnW2RhdGEtY2FydC1wcmljZV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAkY2FydFByaWNlLmRhdGEoJ2NhcnRQcmljZScpIHx8IDA7XG5cblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBbcXVhbnRpdHksIHByaWNlXSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IC0gT0JQUyBNb2RcbiAgICAgICAgICAgIC8vIHNoYWtlKCQoJy5uYXZVc2VyLWl0ZW0tLWNhcnQgPiAubmF2VXNlci1hY3Rpb24nKSk7XG4gICAgICAgIH0sIHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnLCB0aGlzLiRzY29wZSk7IC8vIFBhcGF0aGVtZXMgZml4IG1pc3NpbmcgJHNjb3BlXG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuXG4gICAgICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4IHx8IHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguYWRkQ2xhc3MoJ19oYXNTYWxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgoKHByaWNlLnJycF93aXRoX3RheCA/IHByaWNlLnJycF93aXRoX3RheC52YWx1ZSA6IHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSAtIHByaWNlLndpdGhfdGF4LnZhbHVlKSAvIChwcmljZS5ycnBfd2l0aF90YXggPyBwcmljZS5ycnBfd2l0aF90YXgudmFsdWUgOiBwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkpICogMTAwKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUNvdW50ZG93bi4kZGl2LnNob3coKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUNvdW50ZG93bi4kc3BhblNhbGUudGV4dChgJHtzYWxlUGVyY2VudH0lYCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVMYWJlbC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUxhYmVsLiRzcGFuLnRleHQoYCR7c2FsZVBlcmNlbnR9JWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5yZW1vdmVDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUNvdW50ZG93bi4kZGl2LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUxhYmVsLiRkaXYuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXggfHwgcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5hZGRDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKCgocHJpY2UucnJwX3dpdGhvdXRfdGF4ID8gcHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlIDogcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWUpIC0gcHJpY2Uud2l0aG91dF90YXgudmFsdWUpIC8gKHByaWNlLnJycF93aXRob3V0X3RheCA/IHByaWNlLnJycF93aXRob3V0X3RheC52YWx1ZSA6IHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlKSkgKiAxMDApO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRzcGFuU2FsZS50ZXh0KGAke3NhbGVQZXJjZW50fSVgKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUxhYmVsLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlTGFiZWwuJHNwYW4udGV4dChgJHtzYWxlUGVyY2VudH0lYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4LnJlbW92ZUNsYXNzKCdfaGFzU2FsZScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRkaXYuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlTGFiZWwuJGRpdi5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLndlaWdodCkpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdpc2hsaXN0VmFyaWF0aW9uLnZhbChkYXRhLnZhcmlhbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBTS1UgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFVQQyBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgTVBOIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5tcG4pIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQoZGF0YS5tcG4pO1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlbC5tcG4uJHZhbHVlLmRhdGEoJ29yaWdpbmFsTXBuJykpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQodmlld01vZGVsLm1wbi4kdmFsdWUuZGF0YSgnb3JpZ2luYWxNcG4nKSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIF8uaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG5cbiAgICAgICAgICAgIC8vIG1vb25jYXQ6IHNob3cgbG93IHN0b2NrIHN0YXR1c1xuICAgICAgICAgICAgaWYgKGRhdGEubG93X3N0b2NrICYmIGRhdGEuc3RvY2sgPCBkYXRhLmxvd19zdG9jaykge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCdfbG93U3RvY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ19sb3dTdG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnk6IHNob3cgLyBoaWRlIHN0b2NrIGJhZGdlXG4gICAgICAgIGlmIChkYXRhLmluc3RvY2sgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRiYWRnZS5yZW1vdmVDbGFzcygnX291dHN0b2NrJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAkKGVsKS50ZXh0KCQoZWwpLmRhdGEoJ2luc3RvY2tNZXNzYWdlJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGJhZGdlLmFkZENsYXNzKCdfb3V0c3RvY2snKS50ZXh0KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAvLyB2aWV3TW9kZWwuc3RvY2suJGJhZGdlLmFkZENsYXNzKCdfb3V0c3RvY2snKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICQoZWwpLnRleHQoJChlbCkuZGF0YSgnb3V0c3RvY2tNZXNzYWdlJykpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5fYWRkVG9DYXJ0VmlzaWJpbGl0eScpLmZpbHRlcignOmhpZGRlbicpLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNmb3JtLWFjdGlvbi1idXlOb3cnKS5maWx0ZXIoJzpoaWRkZW4nKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCcuX2FkZFRvQ2FydFZpc2liaWxpdHknKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCcjZm9ybS1hY3Rpb24tYnV5Tm93JykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1raXRjaGVuYXJ5OiBkaXNwYXRjaCBldmVudCBmb3IgYWxzby1ib3VnaHRcbiAgICAgICAgdGhpcy4kc2NvcGUudHJpZ2dlcigncHJvZHVjdC12aWV3LXVwZGF0ZScsIFtkYXRhXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRidXlOb3cucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTsgLy8gcGFwYXRoZW1lcy1jaGlhcmFcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1eU5vdy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTsgLy8gcGFwYXRoZW1lcy1jaGlhcmFcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtY2hpYXJhIGVkaXRlZCBmb3IgYWxzby1ib3VnaHRcbiAgICAgICAgdGhpcy5wcmljZSA9IGRhdGEucHJpY2U7XG4gICAgICAgIHRoaXMuJHNjb3BlLnRyaWdnZXIoJ3ByaWNlLWNoYW5nZScpO1xuXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUudHJpZ2dlcigndXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMnKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBmb3IgZHJvcGRvd24tc3dhdGNoZXNcbiAgICB9XG5cbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgY3VzdG9tIHRhYnMgYnkgcGFyc2luZyBwcm9kdWN0IGRlc2NyaXB0aW9uXG4gICAgICogKEFkZGVkIGJ5IFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldClcbiAgICAgKi9cbiAgICBpbml0Q3VzdG9tVGFicygpIHtcbiAgICAgICAgY29uc3QgJGN1c3RvbVRhYnMgPSAkKCdbZGF0YS1jdXN0b20tdGFiXScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCRjdXN0b21UYWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHRhYnMgPSAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gPiAudGFicycsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHRhYnNDb250ZW50ID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJywgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmICgkdGFicy5sZW5ndGggPT09IDAgfHwgJHRhYnNDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGN1c3RvbVRhYnMuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgJHRpdGxlID0gJGVsLmZpbmQoJ1tkYXRhLWN1c3RvbS10YWItdGl0bGVdJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9ICR0aXRsZS5odG1sKCk7XG4gICAgICAgICAgICBjb25zdCB0eHRUaXRsZSA9ICR0aXRsZS50ZXh0KCk7XG5cbiAgICAgICAgICAgIGxldCBleHBhbmQgPSAkdGl0bGUuZGF0YSgnZXhwYW5kJyk7XG5cbiAgICAgICAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gJ1ZpZXcgQWxsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNsb3NlID0gJHRpdGxlLmRhdGEoJ2Nsb3NlJyk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZSA9ICdDbG9zZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR0aXRsZS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9ICRlbC5odG1sKCk7XG5cbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJHRhYnMuY2hpbGRyZW4oKS5hcHBlbmQoYDxsaSBjbGFzcz1cInRhYiB0YWItLWN1c3RvbSB0YWItLWN1c3RvbS0ke2l9XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGNsYXNzPVwidGFiLXRpdGxlXCIgaHJlZj1cIiN0YWItY3VzdG9tLSR7aX1cIiByb2xlPVwidGFiXCI+JHt0aXRsZX08L2E+PC9saT5gKTtcbiAgICAgICAgICAgICR0YWJzQ29udGVudC5hcHBlbmQoYDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCB0YWItY29udGVudC0tY3VzdG9tIHRhYi1jb250ZW50LS1jdXN0b20tJHtpfVwiIGlkPVwidGFiLWN1c3RvbS0ke2l9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbD1cIiR7dHh0VGl0bGV9XCI+PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxhIGNsYXNzPVwicHJvZHVjdFZpZXctZGVzY3JpcHRpb24tdGFiSGVhZGluZ1wiIGRhdGEtdGFiLW1vYmlsZSBocmVmPVwiI3RhYi1jdXN0b20tJHtpfVwiPiR7dGl0bGV9PHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1wcm9kdWN0LXRhYi1hcnJvd1wiPjwvc3ZnPjwvYT48ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctZGVzY3JpcHRpb24tdGFiQ29udGVudFwiPiR7Y29udGVudH08L2Rpdj48L2Rpdj48L2Rpdj5gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFRhYnNBREEoKSB7XG4gICAgICAgIC8vIENsaWNrIHByb2R1Y3QgdGFiIGluIFRhYmxldCAtIERlc2t0b3BcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC10YWJdIC50YWInKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWRDb250ZW50ID0gJGVsLmZpbmQoJy50YWItdGl0bGUnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFRhYiA9ICRlbC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LXRhYl0nKTtcbiAgICAgICAgICAgICRlbC5wYXJlbnQoKS5maW5kKCcudGFiJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJGVsLnBhcmVudCgpLmZpbmQoJy50YWItdGl0bGUnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJHByb2R1Y3RUYWIuZmluZCgnLnRhYi1jb250ZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJGVsLmZpbmQoJy50YWItdGl0bGUnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAkcHJvZHVjdFRhYi5maW5kKGAke2lkQ29udGVudH1gKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNrIHByb2R1Y3QgdGFiIGluIE1vYmlsZVxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXRhYl0gW2RhdGEtdGFiLW1vYmlsZV0nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkZWwuc2libGluZ3MoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbi10YWJDb250ZW50JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICRlbC5jbG9zZXN0KCcudGFiLWNvbnRlbnQnKS5hdHRyKCdhcmlhLWhpZGRlbicsICRlbC5jbG9zZXN0KCcudGFiLWNvbnRlbnQnKS5hdHRyKCdhcmlhLWhpZGRlbicpID09PSAnZmFsc2UnID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRhYnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc21hbGxNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHByb2R1Y3QgdGFiIC0gTW9iaWxlIHRvIFRhYmxldFxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkZWZhdWx0IGF0dHJpYnV0ZSwgY2xhc3NcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXRhYl0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgndGFiLXRpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCcudGFiLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KCkuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBwcm9kdWN0IHRhYiAtIFRhYmxldCB0byBNb2JpbGVcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXRhYl0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJ1tkYXRhLXRhYi1tb2JpbGVdJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbi10YWJDb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy50YWItY29udGVudCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLmZpbmQoJ1tkYXRhLXRhYi1tb2JpbGVdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKS5maW5kKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24tdGFiQ29udGVudCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEhhbmRsZSBwcm9kdWN0IHRhYiB3aGVuIGNoYW5nZSBkaXZpY2VcbiAgICAgICAgc21hbGxNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih1cGRhdGVUYWJzKTtcbiAgICAgICAgdXBkYXRlVGFicygpO1xuICAgIH1cblxuICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuICAgIG9uTWluaVByZXZpZXdNb2RhbE9wZW4oKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFzLWFjdGl2ZU1vZGFsLS1taW5pUHJldmlldycpO1xuICAgIH1cblxuICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuICAgIG9uTWluaVByZXZpZXdNb2RhbENsb3NlKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1hY3RpdmVNb2RhbC0tbWluaVByZXZpZXcnKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dG9DbG9zZVRpbWVyICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmF1dG9DbG9zZVRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9DbG9zZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0Nsb3NlVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgYXBwbHlNb2RhbEF1dG9DbG9zZShtb2RhbCkge1xuICAgICAgICBjb25zdCAkYXV0b0Nsb3NlRWwgPSBtb2RhbC4kbW9kYWwuZmluZCgnW2RhdGEtYXV0by1jbG9zZV0nKTtcbiAgICAgICAgaWYgKCRhdXRvQ2xvc2VFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2VjID0gJGF1dG9DbG9zZUVsLmRhdGEoJ2F1dG9DbG9zZScpIHx8IDU7XG4gICAgICAgICAgICBjb25zdCAkY291bnQgPSAkYXV0b0Nsb3NlRWwuZmluZCgnLmNvdW50Jyk7XG4gICAgICAgICAgICAkY291bnQuaHRtbChzZWMpO1xuXG4gICAgICAgICAgICBtb2RhbC5hdXRvQ2xvc2VUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBpZiAoc2VjID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWMtLTtcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50Lmh0bWwoc2VjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChtb2RhbC5hdXRvQ2xvc2VUaW1lcik7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmF1dG9DbG9zZVRpbWVyID0gbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaXNCcm93c2VySUUgfSBmcm9tICcuL2llLWhlbHBlcnMnO1xuXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcbiAgICBkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudDogKHByb2R1Y3RBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UgfHwgaXNCcm93c2VySUUpIHJldHVybjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAwO1xuXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2JpZ2NvbW1lcmNlLnByb2R1Y3RwcmljZWNoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJVdGlscztcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJjb25zdCBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyA9ICh3aXNobGlzdFVybCwgLi4ucGFnaW5hdGlvbkl0ZW1zKSA9PiAkLmVhY2gocGFnaW5hdGlvbkl0ZW1zLCAoXywgJGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XG5cbiAgICBpZiAoJGl0ZW0ubGVuZ3RoICYmICFwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJykuaW5jbHVkZXMoJ3BhZ2U9JykpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyID0gKCkgPT4ge1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcblxuICAgIGlmICghJHBhZ2luYXRpb25MaXN0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgJHByZXZJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xuXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcbn07XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQVBBVEhFTUVTIFNBUkFITUFSS0VUIENVU1RPTUlaQVRJT046XG4vLyAtIFVzaW5nIHNsaWNrIGNhcm91c2VsIGZvciBpbWFnZSB0aHVtYm5haWxzLlxuLy8gLSBVc2luZyBiYWd1ZXR0ZUJveCBmb3IgaW1hZ2UgbGlnaHRib3guXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCBiYWd1ZXR0ZUJveCBmcm9tICdiYWd1ZXR0ZWJveCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0JztcblxuY29uc3Qgc21hbGxNZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KCdzbWFsbCcpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5cbmZ1bmN0aW9uIGZpeEFEQSgkc2xpY2spIHtcbiAgICAkc2xpY2sub24oJ2luaXQgYWZ0ZXJDaGFuZ2UnLCAoX2UsIHNsaWNrKSA9PiB7XG4gICAgICAgIGNvbnN0ICRzbGlkZSA9IHNsaWNrLiRsaXN0LmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAkc2xpZGUubm90KCcuc2xpY2stYWN0aXZlJykuZmluZCgnYSwgYnV0dG9uJykuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgJHNsaWRlLmZpbHRlcignLnNsaWNrLWFjdGl2ZScpLmZpbmQoJ2EsIGJ1dHRvbicpLmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9KTtcblxuICAgICRzbGljay5vbignaW5pdCcsIChfZSwgc2xpY2spID0+IHtcbiAgICAgICAgc2xpY2suJGxpc3Qub24oJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzbGljay4kc2xpZGVzLmZpbHRlcignLnNsaWNrLWN1cnJlbnQnKS5mb2N1cygpLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc2xpY2suJHNsaWRlcy5maWx0ZXIoJy5zbGljay1jdXJyZW50JykuZmluZCgnYSwgYnV0dG9uJykuZ2V0KDApLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnkgPSAkZ2FsbGVyeTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmF2XScpLm5vdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXYtZGlzYWJsZS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuJG5hdkRpc2FibGVDYXJvdXNlbCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmF2XVtkYXRhLWltYWdlLWdhbGxlcnktbmF2LWRpc2FibGUtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb1BsYXllciA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcblxuICAgICAgICBjb25zdCAkZGVmU2xpZGUgPSB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbiAgICAgICAgY29uc3QgZGVmU2xpZGVJZHggPSAkZGVmU2xpZGUucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleCgkZGVmU2xpZGUpO1xuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNsaWRlSW5kZXggPSBkZWZTbGlkZUlkeCA+IC0xID8gZGVmU2xpZGVJZHggOiAwO1xuXG4gICAgICAgIGNvbnN0IHVpZCA9IF8udW5pcXVlSWQoJycpO1xuXG4gICAgICAgIGlmICh0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcsIGBpbWFnZUdhbGxlcnlNYWluQ2Fyb3VzZWwke3VpZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuYXR0cignaWQnLCBgaW1hZ2VHYWxsZXJ5TmF2Q2Fyb3VzZWwke3VpZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmF2Um93cyA9IHBhcnNlSW50KHRoaXMuJG5hdkNhcm91c2VsLmRhdGEoJ2ltYWdlLWdhbGxlcnktbmF2LXJvd3MnKSwgMTApIHx8IDE7XG4gICAgICAgIHRoaXMucGxheVZpZGVvSW5saW5lID0gdGhpcy4kbmF2RGlzYWJsZUNhcm91c2VsLmxlbmd0aCA9PT0gMCAmJiB0aGlzLm5hdlJvd3MgPT09IDE7XG5cbiAgICAgICAgdGhpcy5iYWd1ZXR0ZUJveE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBvbkNoYW5nZTogKGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmlkZW9QbGF5ZXIucmVtb3ZlQ2xhc3MoJ19iYicpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGdhbGxlcnkucmVtb3ZlQ2xhc3MoJ19iYicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheVZpZGVvID0gKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5LmFkZENsYXNzKCdfYmInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmlkZW9QbGF5ZXIuYWRkQ2xhc3MoJ19iYicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyh1cmwpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbGljayA9IHRoaXMuJG1haW5DYXJvdXNlbC5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoc2xpY2suJHNsaWRlc1tjdXJyZW50SW5kZXhdKS5maW5kKCdbZGF0YS12aWRlby1pZF0nKVxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVZpZGVvKCQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndmlkZW9VcmwnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZpZ3VyZSA9ICQoJyNiYWd1ZXR0ZUJveC1zbGlkZXInKS5jaGlsZHJlbigpLmVxKGN1cnJlbnRJbmRleCkuY2hpbGRyZW4oJ2ZpZ3VyZScpO1xuICAgICAgICAgICAgICAgICAgICAkZmlndXJlLmh0bWwoJycpLmFwcGVuZCgkYSk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlWaWRlbygkYS5kYXRhKCd2aWRlb1VybCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWZ0ZXJIaWRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR2aWRlb1BsYXllci5yZW1vdmVDbGFzcygnX2JiJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeS5yZW1vdmVDbGFzcygnX2JiJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlVmlkZW9DbGlja0V2ZW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheVZpZGVvSW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCdbZGF0YS12aWRlby1pZF0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2xvbmUgPSAkZWwuY2xvbmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGVsLmFmdGVyKCRjbG9uZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcFZpZGVvKCkge1xuICAgICAgICBjb25zdCAkaWZyYW1lID0gdGhpcy4kdmlkZW9QbGF5ZXIuZmluZCgnaWZyYW1lJyk7XG4gICAgICAgICRpZnJhbWUucmVwbGFjZVdpdGgoJGlmcmFtZS5jbG9uZSgpLmF0dHIoJ3NyYycsICcnKSk7XG4gICAgICAgIHRoaXMuJHZpZGVvUGxheWVyLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgc2hvd1ZpZGVvKHNyYykge1xuICAgICAgICB0aGlzLiR2aWRlb1BsYXllci5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICBjb25zdCAkaWZyYW1lID0gdGhpcy4kdmlkZW9QbGF5ZXIuZmluZCgnaWZyYW1lJyk7XG4gICAgICAgICRpZnJhbWUucmVwbGFjZVdpdGgoJGlmcmFtZS5jbG9uZSgpLmF0dHIoJ3NyYycsIHNyYykpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBfLmNsb25lKGltZ09iaik7XG5cbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSBfLmNsb25lKHRoaXMuY3VycmVudEltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuJG5hdkNhcm91c2VsLnNsaWNrKCdzbGlja0N1cnJlbnRTbGlkZScpO1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ3NsaWNrLWN1cnJlbnQgc2xpY2stYWN0aXZlJykuZXEoaSkuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQgc2xpY2stYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSh7XG4gICAgICAgIGlnbm9yZUJhZ3VldHRlQm94ID0gZmFsc2UsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIC8qXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuc2xpY2soJ3NsaWNrR29UbycsIHRoaXMuY3VycmVudFNsaWRlSW5kZXgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEodGhpcy5kZWZhdWx0U2xpZGVJbmRleCkuZmluZCgnaW1nJykuYXR0cignc3JjJywgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyY3NldCcsIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCk7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stc2xpZGUnKS5lcSh0aGlzLmRlZmF1bHRTbGlkZUluZGV4KS5maW5kKCdhJykuYXR0cignaHJlZicsIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5zbGljaygnc2xpY2tHb1RvJywgdGhpcy5kZWZhdWx0U2xpZGVJbmRleCk7XG5cbiAgICAgICAgaWYgKCFpZ25vcmVCYWd1ZXR0ZUJveCkge1xuICAgICAgICAgICAgLy8gZW1wdHkgbGlnaHRib3ggY29udGVudHMgb2YgY3VycmVudCBnYWxsZXkgc28gdGhhdCBpdCB3aWxsIGJlIGNyZWF0ZWQgYWdhaW5cbiAgICAgICAgICAgICQoJyNiYWd1ZXR0ZUJveC1zbGlkZXInKS5odG1sKCcnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEJhZ3VldHRlQm94KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBmaXhBREEodGhpcy4kbWFpbkNhcm91c2VsKTtcblxuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWxcbiAgICAgICAgICAgIC5vbignaW5pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW1nID0gJChgW2RhdGEtc2xpY2staW5kZXg9XCIke3RoaXMuZGVmYXVsdFNsaWRlSW5kZXh9XCJdIGltZ2AsIHRoaXMuJG1haW5DYXJvdXNlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkaW1nLmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsSW1nJykgfHwgJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkYS5kYXRhKCdvcmlnaW5hbFpvb20nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiAkYS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYmVmb3JlQ2hhbmdlJywgKGV2ZW50LCBzbGljaykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgICAgIG9uTmF2Q2Fyb3VzZWxTZXRQb3NpdGlvbihldmVudCwgc2xpY2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYWZ0ZXJDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgb25OYXZDYXJvdXNlbFNldFBvc2l0aW9uKGV2ZW50LCBzbGljayk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5kZWZhdWx0U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy4kbmF2Q2Fyb3VzZWwubGVuZ3RoID4gMCAmJiB0aGlzLm5hdlJvd3MgPT09IDEgPyBgIyR7dGhpcy4kbmF2Q2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25OYXZDYXJvdXNlbFNldFBvc2l0aW9uID0gKGV2ZW50LCBzbGljaykgPT4ge1xuICAgICAgICAgICAgaWYgKCFzbGljaykgcmV0dXJuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Nob3cgPj0gc2xpY2suc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5maW5kKCcuc2xpY2stdHJhY2snKS5jc3MoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzbGljay5zbGlkZUNvdW50IDw9IHNsaWRlc1RvU2hvd0Rlc2t0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuZmluZCgnLnNsaWNrLXRyYWNrJykuY3NzKCd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbk5hdkNhcm91c2VsSW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLm9uKCdrZXlwcmVzcycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMgfHwga2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdzbGlja0dvVG8nLCAkKGV2ZW50LnRhcmdldCkuZGF0YSgnc2xpY2tJbmRleCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbk5hdkNhcm91c2VsU3dpcGUgPSAoX2V2ZW50LCBzbGljaywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIHNsaWNrLmN1cnJlbnRTbGlkZSA8PSBzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIHNsaWNrLnNsaWNrR29UbygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmaXhBREEodGhpcy4kbmF2Q2Fyb3VzZWwpO1xuXG4gICAgICAgIHRoaXMuJG5hdkNhcm91c2VsQ2xvbmUgPSB0aGlzLiRuYXZDYXJvdXNlbC5jbG9uZShmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgbmF2Q29sID0gcGFyc2VJbnQodGhpcy4kbmF2Q2Fyb3VzZWwuZGF0YSgnaW1hZ2UtZ2FsbGVyeS1uYXYtc2xpZGVzJyksIDEwKTtcblxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3dEZXNrdG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgICBuYXZDb2wsXG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3dNb2JpbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIG5hdkNvbCAqIHRoaXMubmF2Um93cyxcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmNoaWxkcmVuKCkubGVuZ3RoLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGluaXROYXZDYXJvdXNlbCA9IChkZXNrdG9wID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJG5hdkNhcm91c2VsLmlzKCcuc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5iZWZvcmUodGhpcy4kbmF2Q2Fyb3VzZWxDbG9uZSk7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsID0gdGhpcy4kbmF2Q2Fyb3VzZWxDbG9uZTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLm9uKCdzZXRQb3NpdGlvbicsIG9uTmF2Q2Fyb3VzZWxTZXRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5vbignaW5pdCcsIG9uTmF2Q2Fyb3VzZWxJbml0KTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLm9uKCdzd2lwZScsIG9uTmF2Q2Fyb3VzZWxTd2lwZSk7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbENsb25lID0gdGhpcy4kbmF2Q2Fyb3VzZWwuY2xvbmUoZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kbmF2Q2Fyb3VzZWwuaXMoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmF2LWhvcml6b250YWxdJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpeE5hdkNMUygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlc2t0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3dEZXNrdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAodGhpcy4kbmF2Q2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGggPiBuYXZDb2wgJiYgdGhpcy5uYXZSb3dzID09PSAxKSA/IDEgOiBzbGlkZXNUb1Nob3dEZXNrdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMubmF2Um93cyA9PT0gMSA/IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRoaXMubmF2Um93cyAhPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy4kbmF2Q2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGggPiBuYXZDb2wgPyB0aGlzLm5hdlJvd3MgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvd01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogc2xpZGVzVG9TaG93TW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMubmF2Um93cyA9PT0gMSA/IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZWx5LWlmXG4gICAgICAgICAgICAgICAgaWYgKGRlc2t0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3dEZXNrdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAodGhpcy4kbmF2Q2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGggPiBuYXZDb2wgJiYgdGhpcy5uYXZSb3dzID09PSAxKSA/IDEgOiBzbGlkZXNUb1Nob3dEZXNrdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMubmF2Um93cyA9PT0gMSA/IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRoaXMubmF2Um93cyAhPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdGhpcy5uYXZSb3dzID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdGhpcy5uYXZSb3dzID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRoaXMubmF2Um93cyA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuJG5hdkNhcm91c2VsLmNoaWxkcmVuKCkubGVuZ3RoID4gbmF2Q29sID8gdGhpcy5uYXZSb3dzIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogc2xpZGVzVG9TaG93TW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMubmF2Um93cyA9PT0gMSA/IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRoaXMubmF2Um93cyA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5lYWNoKChpLCBlbCkgPT4gYmFndWV0dGVCb3gucnVuKGAjJHtlbC5pZH1gLCB7IC4uLnRoaXMuYmFndWV0dGVCb3hPcHRpb25zIH0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbml0TmF2Q2Fyb3VzZWwoc21hbGxNZWRpYVF1ZXJ5Lm1hdGNoZXMpO1xuXG4gICAgICAgIHNtYWxsTWVkaWFRdWVyeS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBpbml0TmF2Q2Fyb3VzZWwoc21hbGxNZWRpYVF1ZXJ5Lm1hdGNoZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXRCYWd1ZXR0ZUJveCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHBsYXkgdmlkZW8gaW5saW5lIGlmIG5vdCBkaXNhYmxlIG5hdiBjYXJvdXNlbCBpcyBlbmFibGVkIGFuZCBuYXYgcm93cyA9IDFcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHRoaXMucGxheVZpZGVvSW5saW5lKSB7XG4gICAgICAgICAgICBjb25zdCBvblZpZGVvQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvKCQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndmlkZW9VcmwnKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLm9uKCdjbGljaycsICdbZGF0YS12aWRlby1pZF0nLCBvblZpZGVvQ2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEJhZ3VldHRlQm94KCkge1xuICAgICAgICBiYWd1ZXR0ZUJveC5ydW4oYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAsIHsgLi4udGhpcy5iYWd1ZXR0ZUJveE9wdGlvbnMgfSk7XG4gICAgICAgIHRoaXMuJG5hdkRpc2FibGVDYXJvdXNlbC5lYWNoKChpLCBlbCkgPT4gYmFndWV0dGVCb3gucnVuKGAjJHtlbC5pZH1gLCB7IC4uLnRoaXMuYmFndWV0dGVCb3hPcHRpb25zIH0pKTtcblxuICAgICAgICBpZiAodGhpcy5uYXZSb3dzID4gMSkge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuZWFjaCgoaSwgZWwpID0+IGJhZ3VldHRlQm94LnJ1bihgIyR7ZWwuaWR9YCwgeyAuLi50aGlzLmJhZ3VldHRlQm94T3B0aW9ucyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJhZ3VldHRlQm94T3B0aW9ucy5yZW1vdmVWaWRlb0NsaWNrRXZlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBGaXggQ0xTIGlzc3VlIGZvciBuYXYgY2Fyb3VzZWxcbiAgICBmaXhOYXZDTFMoKSB7XG4gICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmNzcygnaGVpZ2h0JywgdGhpcy4kbmF2Q2Fyb3VzZWwub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICQod2luZG93KS5vbmUoJ3Jlc2l6ZScsICgpID0+IHRoaXMuJG5hdkNhcm91c2VsLmNzcygnaGVpZ2h0JywgJycpKTtcblxuICAgICAgICBpZiAoIXRoaXMuZml4ZWROYXZIZWlnaHRGaXJzdExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmNzcygnaGVpZ2h0JywgdGhpcy4kbmF2Q2Fyb3VzZWwub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgICB0aGlzLmZpeGVkTmF2SGVpZ2h0Rmlyc3RMb2FkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyV2lzaGxpc3ROYW1lRXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmV0dXJuIiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiY2F0Y2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwidXRpbHMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIlByb2R1Y3REZXRhaWxzIiwic2Nyb2xsVG9FbGVtZW50IiwiY3VycmVuY3lGb3JtYXQiLCJleHRyYWN0TW9uZXkiLCJvcGVuQ2FydFByZXZpZXciLCJkZWZhdWx0TW9kYWwiLCJNdXN0YWNoZSIsIlN3YWwiLCJkZWxheSIsIm1zIiwic2V0VGltZW91dCIsInByb21pc2VTZXJpYWwiLCJmdW5jcyIsInJlZHVjZSIsInByb21pc2UiLCJmdW5jIiwicmVzdWx0IiwiQXJyYXkiLCJjb25jYXQiLCJiaW5kIiwicmVwb3J0Rm9ybVZhbGlkaXR5IiwiZm9ybSIsInZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiQWxzb0JvdWdodEdhbWUiLCJwYXJlbnRQcm9kdWN0RGV0YWlscyIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkdGh1bWJuYWlsVGVtcGxhdCIsInRodW1ibmFpbFRlbXBsYXRlIiwiX3JlZiRwcm9kdWN0RGV0YWlsc1RlIiwicHJvZHVjdERldGFpbHNUZW1wbGF0ZSIsIl9yZWYkcHJpY2VUZW1wbGF0ZSIsInByaWNlVGVtcGxhdGUiLCJfcmVmJHByaWNlUmFuZ2VUZW1wbGEiLCJwcmljZVJhbmdlVGVtcGxhdGUiLCJfcmVmJHRheExhYmVsVGVtcGxhdGUiLCJ0YXhMYWJlbFRlbXBsYXRlIiwiX3JlZiRyZXRhaWxQcmljZVJhbmdlIiwicmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlIiwiX3JlZiRyZXRhaWxQcmljZVRlbXBsIiwicmV0YWlsUHJpY2VUZW1wbGF0ZSIsIl9yZWYkbG9naW5QcmljZVRlbXBsYSIsImxvZ2luUHJpY2VUZW1wbGF0ZSIsIl9yZWYkb3B0aW9uc1RvZ2dsZVRlbSIsIm9wdGlvbnNUb2dnbGVUZW1wbGF0ZSIsIl9yZWYkYnV0dG9uVG9nZ2xlVGVtcCIsImJ1dHRvblRvZ2dsZVRlbXBsYXRlIiwiX3JlZiRzaW1wbGVGb3JtVGVtcGxhIiwic2ltcGxlRm9ybVRlbXBsYXRlIiwiX3JlZiRsb2FkaW5nVGVtcGxhdGUiLCJsb2FkaW5nVGVtcGxhdGUiLCJfcmVmJHRlbXBsYXRlQ3VzdG9tVGEiLCJ0ZW1wbGF0ZUN1c3RvbVRhZ3MiLCJfcmVmJHJhdGluZ1N0YXJIdG1sRnUiLCJyYXRpbmdTdGFySHRtbEZ1bmMiLCJpc0Z1bGwiLCJfcmVmJGN1c3RvbUJhZGdlVGVtcGwiLCJjdXN0b21CYWRnZVRlbXBsYXRlIiwiX3JlZiRzaG93UHJvZHVjdFJhdGluIiwic2hvd1Byb2R1Y3RSYXRpbmciLCJjb250ZXh0IiwibnVtYmVyVGV4dHMiLCJ0eHRBbHNvQm91Z2h0TnVtYmVyQXJyYXkiLCJzcGxpdCIsImFsbE51bWJlclRleHRzIiwidHh0QWxzb0JvdWdodEFsbE51bWJlckFycmF5IiwiJGFsc29Cb3VnaHRFbCIsIiQiLCIkcHJvZHVjdFZpZXdTY29wZSIsImNvbmZpZyIsImRhdGEiLCJtb25leVdpdGhUYXgiLCJzYW1wbGVQcmljZVdpdGhUYXgiLCJtb25leSIsIm1vbmV5V2l0aG91dFRheCIsInNhbXBsZVByaWNlV2l0aG91dFRheCIsInByb2R1Y3Rfc2FsZV9iYWRnZXMiLCJwcm9kdWN0X3NhbGVfbGFiZWwiLCJtb25leUZhbGxiYWNrIiwiYWN0aXZlQ3VycmVuY3lDb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImdldCIsIl9tb25leSIsImVsIiwidGV4dCIsImFzc2lnbiIsImN1cnJlbmN5X3Rva2VuIiwicHJvZHVjdHMiLCJwcm9kdWN0Tm9kZXMiLCJvbkFkZEFsbEJ1dHRvbkNsaWNrIiwib25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrIiwidGh1bWJTaXplIiwiYWxzb2JvdWdodF90aHVtYm5haWxfc2l6ZSIsInRodW1ibmFpbFdpZHRoIiwiTnVtYmVyIiwidGh1bWJuYWlsSGVpZ2h0IiwicmV0cmlldmVBbHNvQm91Z2h0UHJvZHVjdHMiLCJsaXN0ZW5RdWFudGl0eUFsc29Cb3VnaHRDaGFuZ2UiLCJoYW5kbGVDbGlja09wdGlvbnMiLCJvbiIsIl9wcm90byIsImluY2x1ZGVUYXgiLCJfdGhpcyIsIiR0aHVtYm5haWxzIiwiJHByb2R1Y3RFbHMiLCJub3QiLCJwcm9kdWN0SWRzIiwibWFwIiwicmVtb3ZlQ2xhc3MiLCJhamF4IiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicmVxdWlyZUxvZ2luIiwidmFyaWFibGVzIiwicHJvZHVjdHNDb3VudCIsImN1cnJlbmN5Q29kZSIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcCIsInR4dE91dE9mU3RvY2siLCJzaXRlIiwic2V0dGluZ3MiLCJpbnZlbnRvcnkiLCJkZWZhdWx0T3V0T2ZTdG9ja01lc3NhZ2UiLCJlZGdlcyIsIl9yZWYyIiwiX25vZGUkZGVmYXVsdEltYWdlIiwiX25vZGUkcHJpY2VzIiwiX25vZGUkcHJpY2VzMiIsIl9ub2RlJHByaWNlczMiLCJfbm9kZSRwcmljZXM0IiwiX25vZGUkcHJpY2VzNSIsIl9ub2RlJHJldmlld1N1bW1hcnkiLCJub2RlIiwiaWQiLCJlbnRpdHlJZCIsInBhdGgiLCJhZGRUb0NhcnRVcmwiLCJoaWRlUXR5Iiwic2hvd19wcm9kdWN0X3F1YW50aXR5X2JveCIsInNob3dRdHkiLCJxdHkiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwibG9hZGluZ0ltZyIsImltZyIsImRlZmF1bHRJbWFnZSIsImRlZmF1bHRQcm9kdWN0SW1hZ2UiLCIkcHJvZHVjdEVsIiwiZmlsdGVyIiwidGF4Q2xhc3NQcmVmaXgiLCJ0YXhEYXRhUHJlZml4IiwicHJpY2VMYWJlbCIsInBkcF9wcmljZV9sYWJlbCIsInNhbGVQcmljZUxhYmVsIiwicGRwX3NhbGVfcHJpY2VfbGFiZWwiLCJub25TYWxlUHJpY2VMYWJlbCIsInBkcF9ub25fc2FsZV9wcmljZV9sYWJlbCIsInJldGFpbFByaWNlTGFiZWwiLCJwZHBfcmV0YWlsX3ByaWNlX2xhYmVsIiwiY2hvb3NlT3B0aW9uc1R4dCIsInR4dFNlbGVjdCIsInR4dFF1YW50aXR5IiwicXVhbnRpdHlEZWNyZWFzZVR4dCIsInR4dFF1YW50aXR5RGVjcmVhc2UiLCJyZXBsYWNlIiwicXVhbnRpdHlJbmNyZWFzZVR4dCIsInR4dFF1YW50aXR5SW5jcmVhc2UiLCJtYXhQdXJjaGFzZVF1YW50aXR5IiwibG9naW5Gb3JQcmljZVR4dCIsImxvZ2luVXJsIiwiY2hlY2tlZCIsImFsc29ib3VnaHRfY2hlY2tlZCIsInNob3dSYXRpbmdIdG1sIiwiYXZhaWxhYmxlIiwiYXZhaWxhYmlsaXR5VjIiLCJzdGF0dXMiLCJtZXNzYWdlIiwidHh0VW5hdmFpbGFibGUiLCJwcmVPcmRlciIsInR4dFByZU9yZGVyIiwib3V0T2ZTdG9jayIsImlzSW5TdG9jayIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2FiaWxpdHkiLCJob3ZlclByb2R1Y3RJbWFnZSIsImltYWdlcyIsImltYWdlIiwiZmluZCIsImltZ0hvdmVyIiwiaXNEZWZhdWx0IiwiZXIiLCJob3ZlckltYWdlIiwicmF0aW5nSHRtbCIsInJhdGluZyIsImZyb20iLCJqb2luIiwic2FsZUJhZGdlIiwicHJpY2VzIiwic2FsZVByaWNlIiwiYmFzZVByaWNlIiwiTWF0aCIsInJvdW5kIiwicGVyY2VudCIsImluY2x1ZGVzIiwiY3VzdG9tQmFkZ2UiLCJmaWVsZCIsImxpc3QiLCJwcmljZSIsImZvcm1hdHRlZCIsIm5vblNhbGVQcmljZSIsInJldGFpbFByaWNlIiwicHJpY2VSYW5nZSIsIm1pbiIsIm1heCIsInJldGFpbFByaWNlUmFuZ2UiLCJsb2dpblByaWNlSHRtbCIsInJlbmRlciIsInRheExhYmVsSHRtbCIsInNob3dUYXhMYWJlbCIsInRpdGxlIiwiaW5jbHVkaW5nVGF4VHh0IiwiZXhjbHVkaW5nVGF4VHh0IiwicHJpY2VXaXRoVGF4VHh0IiwicHJpY2VXaXRob3V0VGF4VHh0IiwicmV0YWlsUHJpY2VSYW5nZUh0bWwiLCJyZXRhaWxQcmljZUh0bWwiLCJwcmljZVJhbmdlSHRtbCIsIm9wdGlvbnNUb2dnbGVIdG1sIiwicHJvZHVjdE9wdGlvbnMiLCJidXR0b25Ub2dnbGVIdG1sIiwicHJpY2VIdG1sIiwiZm9ybUh0bWwiLCJkZXRhaWxzSHRtbCIsInJldmlld1N1bW1hcnkiLCJhdmVyYWdlUmF0aW5nIiwiY3VzdG9tRmllbGRzIiwidGh1bWJuYWlsSHRtbCIsImh0bWwiLCJhcHBlbmQiLCJwcm9kdWN0IiwiX2V4dGVuZCIsImVuYWJsZUFsc29Cb3VnaHQiLCIkc2NvcGUiLCJ1cGRhdGVUb3RhbFByaWNlIiwiJGNvbnRleHQiLCJvbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZSIsIm9wZW4iLCJvbk9wdGlvbnNPcGVuIiwidXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24iLCIkcGFyZW50UHJvZHVjdEVsIiwiX3RoaXMyIiwidmFsIiwicHJpY2VCeUlkIiwiX3ByaWNlQnlJZCIsIl9ub2RlJGVudGl0eUlkIiwiX09iamVjdCRhc3NpZ24iLCJwcm9kdWN0SWQiLCJfT2JqZWN0JGFzc2lnbjIiLCJwcm9kdWN0UXR5IiwiaW5wdXRRdHkiLCJxdWFudGl0eSIsInBhcnNlSW50IiwibWVyZ2VQcm9kdWN0Iiwia2V5IiwiX09iamVjdCRhc3NpZ24zIiwidG90YWwiLCJpbmRleE9mIiwiX3JlZjMiLCJfcmVmNCIsIl9yZWYzJHdpdGhfdGF4Iiwid2l0aF90YXgiLCJfcmVmMyR3aXRob3V0X3RheCIsIndpdGhvdXRfdGF4IiwibW9uZXlfd2l0aF90YXgiLCJtb25leV93aXRob3V0X3RheCIsIiR3aXRoVGF4IiwiJHdpdGhvdXRUYXgiLCJzaG93IiwiaGlkZSIsInByZXZlbnREZWZhdWx0IiwicHJvcCIsInRyaWdnZXIiLCJldmVudCIsIl9wcm9kdWN0JCRmb3JtIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiJGFsc29Cb3VnaHRDaGVja2JveCIsIiRmb3JtIiwiJGVsIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsIiRvcHRpb25Ub2dnbGUiLCJzaWJsaW5ncyIsIiRvcHRpb25Db250ZW50IiwiJG9wdGlvbkNvbnRlbnRJdGVtIiwiYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCIsIiRjYiIsInRhcmdldCIsIiRsYWJlbCIsImF0dHIiLCIkdGh1bWIiLCJjYklkIiwiJGxhYmVsRm9yQ2hlY2tib3giLCIkaW5wdXRRdHkiLCJxdWFudGl0eU1pbiIsImFkZENsYXNzIiwibG9hZFByb2R1Y3REZXRhaWxzIiwiX2xvYWRQcm9kdWN0RGV0YWlscyIsIl9jYWxsZWUiLCJfdGhpczMiLCJfcHJvZHVjdCQkZm9ybTIiLCIkY29udGVudCIsImNoZWNrIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFwaSIsImdldEJ5SWQiLCJ0ZW1wbGF0ZSIsImVyciIsIl9wcm9kdWN0Rm9ybSQkZm9ybSIsInByb2R1Y3RGb3JtIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiX3giLCIkaW5wdXQiLCJxdWFudGl0eU1heCIsIiRhbGwiLCIkY2hlY2tlZCIsIiRidG5zIiwicGFyZW50UHJvZHVjdEFkZGVkVG9DYXJ0IiwiX3BhcmVudFByb2R1Y3RBZGRlZFRvQ2FydCIsIl9jYWxsZWUzIiwiX3RoaXM0IiwicHJvbWlzZXMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImFkZFByb2R1Y3RUb0NhcnQiLCJ0MCIsIl9hZGRTZWxlY3RlZFByb2R1Y3RzVG9DYXJ0IiwiX2NhbGxlZTQiLCJyZXN1bHRzIiwibmV3UHJvZHVjdEFkZGVkIiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJfeWllbGQkdGhpcyRwYXJlbnRQcm8iLCJlcnJvck1zZyIsIl95aWVsZCRwcm9kdWN0JGFkZFBybyIsIl9lcnIiLCJfcmVzcCIsIl9lcnJvck1zZyIsIl9yZXNwJGRhdGEiLCIkdG9nZ2xlIiwiX3Jlc3VsdHMkIiwiX3Byb2R1Y3QiLCJfcmVzcDIiLCJtb2RhbCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImFkZFByb2R1Y3RUb0NhcnRBc3luYyIsImVycm9yIiwiaiIsImNhcnRfaXRlbSIsInByZXZpZXdNb2RhbCIsInVwZGF0ZUNhcnRDb250ZW50IiwiY2xvc2UiLCJhZGRfdG9fY2FydF9wb3B1cCIsIml0ZW0iLCIkbW9kYWwiLCIkcXR5IiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImNhcnQiLCJyZWplY3QiLCIkZXJyb3JCb3giLCIkZXJyb3JNc2ciLCIkY2hlY2tib3giLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsInJlc3BvbnNlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHkiLCJkZWZhdWx0IiwiQWxzb0JvdWdodCIsInNob3dSZXRhaWxQcmljZSIsInNob3dfcnJwIiwiY291bnRyaWVzIiwiY291bnRyeUNvZGUiLCJjb3VudHJ5TmFtZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInRlc3QiLCJmb3VuZGF0aW9uIiwiSW1hZ2VHYWxsZXJ5IiwibW9kYWxGYWN0b3J5IiwiTW9kYWxFdmVudHMiLCJzaG93QWxlcnRNb2RhbCIsIldpc2hsaXN0IiwiYmFubmVyVXRpbHMiLCJjdXJyZW5jeVNlbGVjdG9yIiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5Iiwic2Nyb2xsVG9wIiwiY29tcGFyZVByb2R1Y3RzIiwiTWljcm9Nb2RhbCIsInNtYWxsTWVkaWFRdWVyeUxpc3QiLCJtZWRpdW1NZWRpYVF1ZXJ5TGlzdCIsInNoYWtlIiwiaW50ZXJ2YWwiLCJkaXN0YW5jZSIsInRpbWVzIiwiY3NzIiwiaXRlciIsImFuaW1hdGUiLCJsZWZ0Iiwic3VwZXJtYXJrZXRTZXJpYWxpemUiLCJhc3NvYyIsInNlcmlhbGl6ZUFycmF5IiwiX2Fzc29jIiwicGFyYW0iLCIkc2NvcGVBcmciLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJpbWFnZUdhbGxlcnkiLCJpbml0IiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZG9jdW1lbnQiLCJpbml0Q3VzdG9tVGFicyIsImluaXRUYWJzQURBIiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwiZGlzYWJsZVNjcm9sbCIsIm9wZW5UcmlnZ2VyIiwiY2xvc2VUcmlnZ2VyIiwic3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnIiwiYWxzb0JvdWdodE9wdGlvbnMiLCJ2YXJpYW50IiwiYWxzb0JvdWdodCIsImNvbnNvbGUiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsInRyaW0iLCJoYXNEZWZhdWx0T3B0aW9ucyIsImlzIiwiJHRhYiIsImZpcnN0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImVhY2giLCIkaW1nIiwic3JjIiwic2l6ZSIsInNpemUyeCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50IiwicHJldmlvdXNSYWRpb1ZhbHVlcyIsImFjYyIsIl8kZWwkIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJvZmYiLCJvbk1vZGFsT3BlbiIsIm9uTW9kYWxDbG9zZSIsIm9uTWluaVByZXZpZXdNb2RhbE9wZW4iLCJvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZSIsImluaXRHb1RvVGFiIiwiaW5pdENvdW50ZG93biIsImhvb2tzIiwiZW1pdCIsInN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlIiwibW9kdWxlIiwiaGlkZU9yaWdpbmFsU3dhdGNoZXMiLCJjaGlsZHJlbiIsImlucHV0U2hhcmVMaW5rIiwiX2V2ZW50Iiwic2VsZWN0IiwiZ2V0RmxhZ0xhbmd1YWdlIiwiaGFuZGxlUmVnaW9uQ291bnRyeSIsInNlYXJjaFJlZ2lvbkluTW9kYWwiLCJsb2FkTW9yZVJlZ2lvbiIsImluaXRUaW1lQ291bnRkb3duIiwiZGF5c1RleHQiLCJob3Vyc1RleHQiLCJtaW51dGVzVGV4dCIsInNlY29uZHNUZXh0IiwiZW5kVGltZSIsImJsb2NrVGltZSIsImxhYmVsVGl0bGUiLCJibG9ja0RheXMiLCJibG9ja0hvdXJzIiwiYmxvY2tNaW51dGVzIiwiYmxvY2tUaW1lciIsImNhbGN1bGF0ZVRpbWVEYXRlIiwic3RhcnRUaW1lIiwiZGF0ZVNldFRpbWUiLCJmbG9vciIsImdldFRpbWUiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lUnVuIiwiY2FsY3VsYXRlVGltZSIsInNldERhdGUiLCJnZXREYXRlIiwicmVnZXhUaW1lIiwicmVnZXhUaW1lem9uZSIsInJlZ2V4RGF0ZSIsInJlc3VsdFRpbWV6b25lIiwibWF0Y2giLCJyZXN1bHRUaW1lIiwicmVzdWx0RGF0ZSIsIkRhdGUiLCJ0aW1lWm9uZSIsImRhdGVTZXRUaW1lWm9uZSIsInR6RGlmZmVyZW5jZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwib2Zmc2V0VGltZSIsImRhdGVTZXRUaW1lRW5kIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInNldEludGVydmFsIiwiaW5pdFRhYlNjcm9sbFRvVmlld3BvcnQiLCIkYm9keSIsIiRxdWlja1ZpZXciLCJyZXN1bWVTdGlja3lIZWFkZXIiLCJzY3JvbGxUb1ZpZXciLCJwb3NpdGlvbiIsInRvcCIsIm9mZnNldFBhcmVudCIsIm9mZnNldCIsImR1cmF0aW9uIiwic3RhcnQiLCJjbGVhclRpbWVvdXQiLCJjbGVhclF1ZXVlIiwiYWx3YXlzIiwibWF0Y2hlcyIsImhyZWYiLCIkc3VtbWFyeUxhbmciLCIkZmxhZ0xpc3QiLCIkZmxhZ01vcmUiLCJzaG93TW9yZVR4dCIsInNob3dMZXNzVHh0IiwibGFuZ1R4dCIsImZsYWdBcnIiLCJlbGVtZW50IiwidG9Mb3dlckNhc2UiLCJ0eHQiLCJmbGFnIiwiYmVmb3JlIiwibW9yZSIsIiRidG4iLCIkY3VzdG9tZmlsZWRSZWdpb24iLCIkY3VycmVudFJlZ2lvbiIsInJlZ2lvbkNhbm5vdEFjdGl2ZVR4dCIsInJlZ2lvblR4dCIsImN1cnJlbnRDb3VudHJ5Q29kZSIsImNvdW50cnlfY29kZSIsImN1cnJlbnRDb3VudHJ5TmFtZSIsImNvdW50cnkiLCJsaXN0Q3VzdG9tZmllbGRSZWdpb24iLCJzb3J0IiwiaW5BcnJheSIsImxhc3RDbGlja2VkIiwiJGN1cnJlbnRCdXR0b24iLCIkbGlzdFJlZ2lvbiIsInBhcmVudHMiLCJhcnJSZWdpb24iLCIkbW9kYWxIZWFkZXIiLCIkcmVnaW9uVGl0bGUiLCIkcmVnaW9uTmFtZSIsIiRyZWdpb25MaXN0IiwiJGxhYmVsQ291bnRyeSIsIiRyZXN0cmljdGVkIiwiJHJlc3RyaWN0ZWRMaXN0IiwiZ2xvYmFsVHh0IiwiJHJlc3RyaWN0ZWRNb3JlIiwicmVzdHJpY3RlZENhbm5vdEFjdGl2ZSIsInJlbW92ZSIsInByZXBlbmQiLCJpbmRleCIsImxpc3RJdGVtIiwic3BlY2lhbENvdW50cnlBcnIiLCJfbG9vcCIsImNvdW50cnlPYmplY3QiLCJsaSIsInNwYW4iLCJjb3VudFJlZ2lvbiIsInRvVXBwZXJDYXNlIiwidHh0VmFsdWUiLCJ0b2dnbGUiLCJmb3JtRGF0YSIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX3N0ZXAkdmFsdWUiLCJGaWxlIiwiZGVsZXRlIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbnMiLCJvcHRpb25MYWJlbCIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwicmVxdWlyZWQiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIngiLCJsYWJlbCIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50IiwidmlldyIsInByb2R1Y3ROYW1lIiwiY2FyZCIsImdldFZpZXdNb2RlbCIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYnV5Tm93IiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRiYWRnZSIsInNrdSIsIiR2YWx1ZSIsInVwYyIsIm1wbiIsIiR0ZXh0IiwiJGJ1bGtQcmljaW5nIiwic2FsZUNvdW50ZG93biIsIiRzcGFuU2FsZSIsInNhbGVMYWJlbCIsImlzUnVubmluZ0luSWZyYW1lIiwic2VsZiIsIiRjaGFuZ2VkT3B0aW9uIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIl9pc1BsYWluT2JqZWN0Iiwiem9vbUltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInpvb21fc2l6ZSIsIm1haW5JbWFnZVVybCIsInByb2R1Y3Rfc2l6ZSIsIm1haW5JbWFnZVNyY3NldCIsInByb2R1Y3RfaW1hZ2VfcmVzcG9uc2l2ZSIsInNldEFsdGVybmF0ZUltYWdlIiwicmVzdG9yZUltYWdlIiwiX3RoaXM1Iiwidmlld01vZGVsIiwiZ2V0UGFja1ZhbHVlIiwiZ2V0UXR5SW5wdXQiLCJxdHlfdXBkYXRlZCIsImtleUNvZGUiLCJfdGhpczYiLCJfeDIiLCJfdGhpczciLCJ0bXAiLCJfbW9kYWwiLCJjYXJ0X2lkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwicmVkaXJlY3RfY2FydCIsImFjdGlvbiIsImNoZWNrb3V0Iiwic2luZ2xlX2FkZHJlc3MiLCJBcHBsZVBheVNlc3Npb24iLCJfeDMiLCJfeDQiLCJnZXRDYXJ0Q29udGVudCIsImNhcnRJdGVtSWQiLCJvbkNvbXBsZXRlIiwicGFyYW1zIiwic3VnZ2VzdCIsInN1Z2dlc3Rpb25zIiwibGltaXQiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibG9jYXRpb24iLCJfdGhpczgiLCJ1cGRhdGVDb250ZW50IiwiYXBwbHlNb2RhbEF1dG9DbG9zZSIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydFByaWNlIiwiJGNhcnRDb3VudGVyIiwic2hvd01lc3NhZ2VCb3giLCIkbWVzc2FnZUJveCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidXBkYXRlUHJpY2VWaWV3IiwicnJwX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJzYWxlUGVyY2VudCIsInJycF93aXRob3V0X3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzT2JqZWN0Iiwid2VpZ2h0IiwidmFyaWFudElkIiwiX2lzTnVtYmVyIiwibG93X3N0b2NrIiwiYnVsa19kaXNjb3VudF9yYXRlcyIsIl90aGlzOSIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsIl90aGlzMTAiLCJyYWRpbyIsIiRyYWRpbyIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCIkY3VzdG9tVGFicyIsIiR0YWJzIiwiJHRhYnNDb250ZW50IiwiJHRpdGxlIiwidHh0VGl0bGUiLCJleHBhbmQiLCJfdGhpczExIiwiaWRDb250ZW50IiwiJHByb2R1Y3RUYWIiLCJ1cGRhdGVUYWJzIiwiYWRkTGlzdGVuZXIiLCJhdXRvQ2xvc2VUaW1lciIsIiRhdXRvQ2xvc2VFbCIsInNlYyIsIiRjb3VudCIsImlzQnJvd3NlcklFIiwicHJpY2VfcmFuZ2UiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImFtb3VudCIsImRpc3BhdGNoRXZlbnQiLCJkb2N1bWVudE1vZGUiLCJjb252ZXJ0SW50b0FycmF5IiwiY29sbGVjdGlvbiIsImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJfbGVuIiwicGFnaW5hdGlvbkl0ZW1zIiwiX2tleSIsIl8iLCIkaXRlbSIsInBhZ2luYXRpb25MaW5rIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNoaWZ0IiwiYmFndWV0dGVCb3giLCJzbWFsbE1lZGlhUXVlcnkiLCJmaXhBREEiLCIkc2xpY2siLCJfZSIsInNsaWNrIiwiJHNsaWRlIiwiJGxpc3QiLCIkc2xpZGVzIiwiZm9jdXMiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiJGdhbGxlcnkiLCIkbWFpbkNhcm91c2VsIiwiJG5hdkNhcm91c2VsIiwiJG5hdkRpc2FibGVDYXJvdXNlbCIsIiR2aWRlb1BsYXllciIsIiRkZWZTbGlkZSIsImRlZlNsaWRlSWR4IiwiZGVmYXVsdFNsaWRlSW5kZXgiLCJ1aWQiLCJfdW5pcXVlSWQiLCJuYXZSb3dzIiwicGxheVZpZGVvSW5saW5lIiwiYmFndWV0dGVCb3hPcHRpb25zIiwib25DaGFuZ2UiLCJjdXJyZW50SW5kZXgiLCJzdG9wVmlkZW8iLCJwbGF5VmlkZW8iLCJzaG93VmlkZW8iLCIkYSIsImNsb25lIiwiJGZpZ3VyZSIsImVxIiwiYWZ0ZXJIaWRlIiwicmVtb3ZlVmlkZW9DbGlja0V2ZW50IiwiJGNsb25lIiwiYWZ0ZXIiLCIkaWZyYW1lIiwicmVwbGFjZVdpdGgiLCJiaW5kRXZlbnRzIiwic2V0TWFpbkltYWdlIiwiaW1nT2JqIiwiY3VycmVudEltYWdlIiwiX2Nsb25lIiwic3dhcE1haW5JbWFnZSIsInNhdmVkSW1hZ2UiLCJzZXRBY3RpdmVUaHVtYiIsIl9yZWYkaWdub3JlQmFndWV0dGVCbyIsImlnbm9yZUJhZ3VldHRlQm94IiwiaW5pdEJhZ3VldHRlQm94IiwiJHNlbGVjdGVkVGh1bWIiLCJvbk5hdkNhcm91c2VsU2V0UG9zaXRpb24iLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwiYXNOYXZGb3IiLCJzd2lwZSIsImFycm93cyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInN3aXBlVG9TbGlkZSIsInNsaWRlQ291bnQiLCJzbGlkZXNUb1Nob3dEZXNrdG9wIiwib25OYXZDYXJvdXNlbEluaXQiLCJ3aGljaCIsIm9uTmF2Q2Fyb3VzZWxTd2lwZSIsImRpcmVjdGlvbiIsImN1cnJlbnRTbGlkZSIsInNsaWNrR29UbyIsIiRuYXZDYXJvdXNlbENsb25lIiwibmF2Q29sIiwic2xpZGVzVG9TaG93TW9iaWxlIiwiaW5pdE5hdkNhcm91c2VsIiwiZGVza3RvcCIsImZpeE5hdkNMUyIsImZvY3VzT25TZWxlY3QiLCJjZW50ZXJQYWRkaW5nIiwicm93cyIsImFkYXB0aXZlSGVpZ2h0IiwibGF6eUxvYWQiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsInJ1biIsIm9uVmlkZW9DbGljayIsIm91dGVySGVpZ2h0Iiwib25lIiwiZml4ZWROYXZIZWlnaHRGaXJzdExvYWQiLCJub2QiLCJQYWdlTWFuYWdlciIsIldpc2hMaXN0IiwiX1BhZ2VNYW5hZ2VyIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9pbmhlcml0c0xvb3NlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiY29uZmlybWVkIiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJzdWJtaXQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwib25SZWFkeSIsIiRhZGRXaXNoTGlzdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9
