"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_also-bought_js-assets_js_theme_common_product-details_js"],{

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


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








 //
// https://javascript.info/task/delay-promise
//

function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} //
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
        showProductRating = _ref$showProductRatin === void 0 ? true : _ref$showProductRatin,
        _ref$product_sale_bad = _ref.product_sale_badges,
        product_sale_badges = _ref$product_sale_bad === void 0 ? 'Label' : _ref$product_sale_bad,
        _ref$product_sale_lab = _ref.product_sale_label,
        product_sale_label = _ref$product_sale_lab === void 0 ? 'Sale' : _ref$product_sale_lab;

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
    this.product_sale_badges = product_sale_badges;
    this.product_sale_label = product_sale_label; // try to guess any price on the page

    this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax // is default currency?
    || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null) // any price on the page
    || $('[data-product-price-without-tax], [data-product-price-with-tax]').get().reduce(function (_money, el) {
      return _money || (0,_utils__WEBPACK_IMPORTED_MODULE_5__.extractMoney)($(el).text());
    }, null) // use currency code
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
              if (!(prices != null && prices.salePrice) || prices.salePrice.value === prices.basePrice.value) return ''; // return 'sale' badge

              if (_this.product_sale_badges === 'label') return _this.product_sale_label;
              var n = prices.salePrice ? Math.round((prices.basePrice.value - prices.salePrice.value) / prices.basePrice.value * 100) : 0;
              var percent = n > 0 ? n + "%" : ''; // return 'sale {percent}' badge

              if (_this.product_sale_label.includes('{percent}')) return _this.product_sale_label.replace('{percent}', percent); // recent 'sale ...%' badge

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
            $thumbnails.append(thumbnailHtml); // load simple product details

            if (node.productOptions.edges.length === 0) {
              var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this.context, {
                enableAlsoBought: false
              })); // listen price change

              product.$scope.on('price-change', function () {
                return _this.updateTotalPrice();
              }); // store the product object for later use

              _this.products.push(product);

              $productEl.data('productDetails', product);
            } // init foundation collapsible


            (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
              $context: $productEl
            }); // bind events

            $productEl.find('[data-also-bought-checkbox]').on('change', _this.onAlsoBoughtCheckboxChange.bind(_this, $productEl));
            $productEl.find('[data-options-collapsible]').on(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.open, _this.onOptionsOpen.bind(_this, $productEl));

            _this.updateTotalPrice();

            _this.updateAddSelectedToCartButton();
          });
        }
      }); // init parent product item

      var $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
      (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
        $context: $parentProductEl
      });
      $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl)); // listen parent product price change

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
    }); // merge productNodes & product details objects

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
    var $thumb = $("[data-thumbnail-product-id=\"" + $productEl.data('productId') + "\"]", this.$alsoBoughtEl); // open (close) product options form if checkbox is checked (unchecked)

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
    var $qty = $productEl.find('[data-product-quantity]');
    var $alsoBoughtCheckbox = $productEl.find('[data-also-bought-checkbox]');
    var $form = $productEl.find('[data-cart-item-add]');

    if ($form.hasClass('_unPurchase')) {
      return;
    }

    if ($qty.val() < 1) {
      $qty.val(1);
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
      var _this3 = this;

      var productId, $content, $alsoBoughtCheckbox, $form;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
                  }), null, true); // listen price change

                  product.$scope.on('price-change', function () {
                    return _this3.updateTotalPrice();
                  }); // listen product-view-update event
                  // for toggle checkbox depending on product pachasibility

                  var $qty = $content.find('[data-product-quantity]');
                  product.$scope.on('product-view-update', function (event, data) {
                    if (!data.purchasable || !data.instock) {
                      $alsoBoughtCheckbox.prop('checked', false);
                      $alsoBoughtCheckbox.trigger('change');
                      $alsoBoughtCheckbox.data('purchasable', false);
                    } else {
                      if ($qty.val() < 1) {
                        $qty.val(1);
                      }

                      $alsoBoughtCheckbox.prop('checked', true);
                      $alsoBoughtCheckbox.trigger('change');
                      $alsoBoughtCheckbox.data('purchasable', true);
                    }
                  }); // store the product object for later use

                  _this3.products.push(product);

                  $productEl.data('productDetails', product);

                  _this3.updateTotalPrice();

                  resolve();
                });
              });

            case 6:
              $form = $productEl.find('[data-cart-item-add]');

              if ($form.hasClass('_unPurchase')) {
                $alsoBoughtCheckbox.prop('checked', false);
                $alsoBoughtCheckbox.trigger('change');
              }

            case 8:
            case "end":
              return _context.stop();
          }
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
      var qty = parseInt($input.val(), 10); // If action is incrementing

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
      } // update hidden input


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
    }); // --------------------------------------------------------------------
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
  } // No longer used. Keep for other third-party scripts compatibility.

  /**
   * Promise to Call after the parent product is added to add also-bought products.
   */
  ;

  _proto.parentProductAddedToCart =
  /*#__PURE__*/
  function () {
    var _parentProductAddedToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this4 = this;

      var promises, success;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // console.log('parent product added');
              promises = [];
              success = true;
              this.products.forEach(function (product) {
                if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                  promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
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
      var productIds, results, newProductAdded, success, $addToCartBtn, originalBtnVal, waitMessage, _yield$this$parentPro, err, resp, errorMsg, $productEls, i, productId, $productEl, product, _yield$product$addPro, _err, _resp, _errorMsg, $toggle, _results$, _product, _resp2, modal;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
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
              $addToCartBtn.html(waitMessage).prop('disabled', true); // add parent product to cart

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
              $productEl = $productEls.filter("[data-product-id=\"" + productId + "\"]");

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
                id: _resp.data.cart_item.id,
                qty: $('[data-product-quantity]', product.$scope).val(),
                product: product
              });
              $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change'); // Reset quantity also bought item

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
                _context4.next = 87;
                break;
              }

              _results$ = results[0], _product = _results$.product, _resp2 = _results$.resp; // Open preview modal and update content

              if (!_product.previewModal) {
                _context4.next = 86;
                break;
              }

              // Supermarket OBPS Mod
              modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_6__.defaultModal)();
              modal.close();

              if (!(this.context.add_to_cart_popup === 'cart')) {
                _context4.next = 82;
                break;
              }

              return _context4.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_5__.openCartPreview)(newProductAdded, this.context));

            case 82:
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

              _context4.next = 87;
              break;

            case 86:
              // if no modal, redirect to the cart page
              this.redirectTo(_resp2.data.cart_item.cart_url || this.context.urls.cart);

            case 87:
            case "end":
              return _context4.stop();
          }
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
      var $checkbox = $('[data-also-bought-checkbox]', product.$scope); // Do not do AJAX if browser doesn't support FormData

      if (window.FormData === undefined) {
        resolve();
      }

      $addToCartBtn.val(waitMessage).prop('disabled', true);
      product.$overlay.show(); // Add item to cart

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error; // console.log(form);

        $addToCartBtn.val(originalBtnVal).prop('disabled', false);
        product.$overlay.hide(); // Guard statement

        if (errorMessage) {
          // console.log('reject add product');
          $errorMsg.html(errorMessage);
          $errorBox.removeClass('u-hiddenVisually');

          if ($errorBox.length > 0) {
            scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default()($errorBox.get(0));
          }

          reject();
          return;
        } // console.log('resolve add product');


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
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* harmony import */ var _papathemes_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../papathemes/utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // Supermarket







 // Papathemes - AlsoBought

 // papathemes-beautify

 // papathemes-beautify

 // papathemes-inhealth


var smallMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_15__["default"])('small'); // papathemes-kitchenary

var mediumMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_15__["default"])('medium'); // papathemes-beautify
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
    this.$productViewScope = $scopeArg; // }}}

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
    this.getTabRequests(); // Papathemes - AlsoBought

    if (context.enableAlsoBought) {
      try {
        var _ref2 = window.supermarketThemeExtraConfig || {},
            alsoBoughtOptions = _ref2.alsoBoughtOptions;

        this.alsoBought = new _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_14__["default"](this, alsoBoughtOptions);
      } catch (err) {
        console.error(err);
      }
    }

    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = ($productOptionsElement.html() || '').trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length; // papathemes-chiara edited for also-bought

    this.price = null;
    /** @type {string} */

    this.productId = $('input[name="product_id"]', this.$scope).val();
    this.$form = $form; // Papathemes - Supermarket: Fix click reviews link open tab

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
    }); // mooncat: display brand image

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
    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    });
    $('#form-action-buyNow', $scope).on('click', function () {
      $form.find('input[name=action]').val('buy');
    }); // Update product attributes. Also update the initial view in case items are oos
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
    this.previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#previewModal')[0]; // Supermarket

    if (this.previewModal) {
      this.previewModal.$modal.addClass('preview-modal').addClass("preview-modal--" + context.add_to_cart_popup);

      if (context.add_to_cart_popup === 'mini') {
        // unbind open/close event of the original modal
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.open, this.previewModal.onModalOpen);
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.close, this.previewModal.onModalClose); // bind open/class event for mini preview modal

        this.previewModal.onModalOpen = this.onMiniPreviewModalOpen.bind(this.previewModal);
        this.previewModal.onModalClose = this.onMiniPreviewModalClose.bind(this.previewModal);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.open, this.previewModal.onModalOpen);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__.ModalEvents.close, this.previewModal.onModalClose);
      }
    } // papathemes-beautify
    // this.initTabScrollToViewport();


    this.initGoToTab();
    this.initCountdown(); // Need for papathemes-mqpo + alsobought v2 compliance

    this.$scope.data('productDetailsInstance', this);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.emit('product-productdetails-init', this); // Chiara: dropdown color swatches

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
    (0,_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_18__["default"])(context);
  } // Time countdown


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
          blockTime.addClass('hide'); // eslint-disable-next-line no-use-before-define

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
          blockTime.addClass('hide'); // eslint-disable-next-line no-use-before-define

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
  } // papathemes-beautify
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
  } // papathemes-beautify
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

        (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_16__.scrollTop)(_$target.offset().top - 100);
      }
    });
  }
  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  ;

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
   */
  ;

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
   */
  ;

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
   */
  ;

  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this4 = this;

    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val(); // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData

    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    } // Supermarket: display selected swatch title


    if ($changedOption.data('productAttributeLabel')) {
      $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html($changedOption.data('productAttributeLabel'));
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};

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
      */
      );
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.product_size
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */
      );
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
   */
  ;

  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this5 = this;

    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);

      var viewModel = _this5.getViewModel(_this5.$scope);

      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = parseInt($input.val(), 10); // If action is incrementing

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
      } // update hidden input


      viewModel.quantity.$input.val(qty); // update text

      viewModel.quantity.$text.text(qty);
    });
    this.$scope.on('change', '[data-quantity-change] input', function (event) {
      var viewModel = _this5.getViewModel(_this5.$scope);

      var $input = $(event.currentTarget);
      var qty = parseInt($input.val(), 10);

      if (qty <= 0 || !qty) {
        qty = 1;
      }

      viewModel.quantity.$input.val(qty);
      viewModel.quantity.$text.text(qty);
    }); // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when enter on quantity box won't decrease 1 unit
    // --------------------------------------------------------------------

    this.getViewModel(this.$scope).quantity.$input.on('keypress', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    }); // --------------------------------------------------------------------
  } // papathemes-chiara added for also-bought
  ;

  _proto.addProductToCartAsync = function addProductToCartAsync() {
    var _this6 = this;

    return new Promise(function (resolve) {
      var $form = $('form[data-cart-item-add]', _this6.$scope);
      var form = $form.get(0);
      var $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', _this6.$scope);
      var originalBtnVal = $addToCartBtn.html();
      var waitMessage = $addToCartBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData

      if (window.FormData === undefined) {
        return;
      }

      $addToCartBtn.html(waitMessage).prop('disabled', true);

      _this6.$overlay.show(); // Add item to cart


      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(_this6.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, response) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // AlsoBought Mod
                  $addToCartBtn.html(originalBtnVal).prop('disabled', false);

                  _this6.$overlay.hide();

                  resolve([err, response]);

                case 3:
                case "end":
                  return _context.stop();
              }
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
   */
  ;

  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this7 = this;

    var $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', $(event.target));
    var originalBtnVal = $addToCartBtn.html();
    var waitMessage = $addToCartBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData

    if (window.FormData === undefined) {
      return;
    } // Prevent default


    event.preventDefault();
    $addToCartBtn.html(waitMessage).prop('disabled', true);
    this.$overlay.show(); // Add item to cart

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, response) {
        var errorMessage, tmp, modal, _modal;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (response && response.data && response.data.cart_id) {
                  (0,_global_currency_selector__WEBPACK_IMPORTED_MODULE_13__["default"])(response.data.cart_id);
                }

                errorMessage = err || response.data.error;
                $addToCartBtn.html(originalBtnVal).prop('disabled', false);

                _this7.$overlay.hide(); // Guard statement


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

                return _context2.abrupt("return", (0,_papathemes_utils__WEBPACK_IMPORTED_MODULE_17__.openCartPreview)(response.data.cart_item.id, _this7.context));

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
                  _this7.$overlay.show(); // if no modal, redirect to the cart page


                  _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
                }

              case 19:
              case "end":
                return _context2.stop();
            }
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
   */
  ;

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
   */
  ;

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
   */
  ;

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
      } // Supermarket - OBPS Mod
      // shake($('.navUser-item--cart > .navUser-action'));

    }, template);
  }
  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */
  ;

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
   */
  ;

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
   */
  ;

  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted); // papathemes-beautify

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
      viewModel.$priceWithoutTax.html(price.without_tax.formatted); // papathemes-beautify

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
   */
  ;

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
    } // Set variation_id if it exists for adding to wishlist


    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    } // If SKU is available


    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    } // If UPC is available


    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    } // If MPN is available


    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else if (viewModel.mpn.$value.data('originalMpn')) {
      viewModel.mpn.$value.text(viewModel.mpn.$value.data('originalMpn'));
      viewModel.mpn.$label.show();
    } else {
      viewModel.mpn.$label.hide();
      viewModel.mpn.$value.text('');
    } // if stock view is on (CP settings)


    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock); // mooncat: show low stock status

      if (data.low_stock && data.stock < data.low_stock) {
        viewModel.stock.$container.addClass('_lowStock');
      } else {
        viewModel.stock.$container.removeClass('_lowStock');
      }
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } // papathemes-beautify: show / hide stock badge


    if (data.instock && data.purchasable) {
      viewModel.stock.$badge.removeClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('instockMessage'));
      });
    } else {
      // viewModel.stock.$badge.addClass('_outstock').text(data.stock_message || data.purchasing_message);
      viewModel.stock.$badge.addClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('outstockMessage'));
      });
    }

    this.updateDefaultAttributesForOOS(data); // If Bulk Pricing rendered HTML is available

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
    } // papathemes-kitchenary: dispatch event for also-bought


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
   */
  ;

  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this9 = this;

    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")"; // papathemes-chiara edited for also-bought

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
      $attribute.toggleOption(false); // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)

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
   */
  ;

  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this10 = this;

    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio); // Only bind to click once

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
   */
  ;

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
   */
  ;

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
    }); // Click product tab in Mobile

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
    }; // Handle product tab when change divice


    smallMediaQueryList.addListener(updateTabs);
    updateTabs();
  } // Papathemes - Supermarket
  ;

  _proto.onMiniPreviewModalOpen = function onMiniPreviewModalOpen() {
    $('body').addClass('has-activeModal--miniPreview');
  } // Papathemes - Supermarket
  ;

  _proto.onMiniPreviewModalClose = function onMiniPreviewModalClose() {
    $('body').removeClass('has-activeModal--miniPreview');

    if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
      window.clearInterval(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
  } // Papathemes - Supermarket
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
/* harmony export */   "convertIntoArray": () => (/* binding */ convertIntoArray),
/* harmony export */   "isBrowserIE": () => (/* binding */ isBrowserIE)
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
/* harmony export */   "wishlistPaginatorHelper": () => (/* binding */ wishlistPaginatorHelper)
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

      _this2.stopVideo(); // eslint-disable-next-line no-use-before-define


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
          _this2.$navCarousel.find('.slick-track').css('transform', 'none'); // eslint-disable-next-line no-use-before-define

        } else if (slick.slideCount <= slidesToShowDesktop) {
          _this2.$navCarousel.find('.slick-track').css('transform', 'none');
        }
      } catch (e) {// ignore
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
    this.initBaguetteBox(); //
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
  } // Fix CLS issue for nav carousel
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
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);

  function WishList(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }
  /**
   * Creates a confirm box before deleting all wish lists
   */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2Fsc28tYm91Z2h0X2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fcHJvZHVjdC1kZXRhaWxzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTVyxLQUFULENBQWVDLEVBQWYsRUFBbUI7RUFDZixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0lBQUEsT0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtFQUFBLENBQW5CLENBQVA7QUFDSCxFQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0ksYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7RUFDMUIsT0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQ0gsVUFBQ0MsT0FBRCxFQUFVQyxJQUFWO0lBQUEsT0FBbUJELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQUFDLE1BQU07TUFBQSxPQUFJRixJQUFJLEdBQUdDLElBQVAsQ0FBWUUsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsSUFBdkIsQ0FBNEJKLE1BQTVCLENBQVosQ0FBSjtJQUFBLENBQW5CLENBQW5CO0VBQUEsQ0FERyxFQUVIVCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FGRyxDQUFQO0FBSUg7O0FBRUQsU0FBU2Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0VBQzlCLElBQUlDLEtBQUssR0FBRyxJQUFaOztFQUNBLElBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRSxhQUFqQixFQUFnQztJQUM1QkQsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGFBQUwsRUFBUjs7SUFDQSxJQUFJLENBQUNELEtBQUwsRUFBWTtNQUNSLElBQUlELElBQUksQ0FBQ0csY0FBVCxFQUF5QjtRQUNyQkgs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QUEwQk8sWUFBMUI7O01BRUEsSUFBSSxNQUFJLENBQUNQLG9CQUFMLENBQTBCUSxNQUExQixDQUFpQyxPQUFqQyxDQUFKLEVBQStDO1FBQzNDO01BQ0g7O01BRURwZixLQUFLLENBQUNILGNBQU47SUFDSCxDQVJEO0VBU0g7O1NBRUR3ZixVQUFBLG1CQUFVO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUduc0IsQ0FBQyxDQUFDLGdCQUFELENBQTFCOztJQUVBLElBQUlBLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDb0MsTUFBcEMsRUFBNEM7TUFDeEM0aUIsdUZBQXVCO0lBQzFCOztJQUVELElBQUltSCxnQkFBZ0IsQ0FBQy9wQixNQUFyQixFQUE2QjtNQUN6QixLQUFLbXBCLDZCQUFMLENBQW1DWSxnQkFBbkM7SUFDSDs7SUFFRCxLQUFLaEIscUJBQUw7RUFDSDs7O0VBbEVpQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9hbHNvLWJvdWdodC5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSwgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBleHRyYWN0TW9uZXksIG9wZW5DYXJ0UHJldmlldyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcbmltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG4vL1xuLy8gaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vdGFzay9kZWxheS1wcm9taXNlXG4vL1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8vXG4vLyBodHRwczovL2hhY2tlcm5vb24uY29tL2Z1bmN0aW9uYWwtamF2YXNjcmlwdC1yZXNvbHZpbmctcHJvbWlzZXMtc2VxdWVudGlhbGx5LTdhYWMxOGM0NDMxZVxuLy9cbmZ1bmN0aW9uIHByb21pc2VTZXJpYWwoZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKFxuICAgICAgICAocHJvbWlzZSwgZnVuYykgPT4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBmdW5jKCkudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSkpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUoW10pLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydEZvcm1WYWxpZGl0eShmb3JtKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoZm9ybSAmJiBmb3JtLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgdmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsc29Cb3VnaHQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UHJvZHVjdERldGFpbHN9IHBhcmVudFByb2R1Y3REZXRhaWxzXG4gICAgICogQHBhcmFtIHsqfSBwYXJhbTFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRQcm9kdWN0RGV0YWlscywge1xuICAgICAgICB0aHVtYm5haWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LXRodW1ibmFpbC1pdGVtIHt7I2NoZWNrZWR9fWlzLWNoZWNrZWR7ey9jaGVja2VkfX1cIiBkYXRhLXRodW1ibmFpbC1wcm9kdWN0LWlkPVwie3tpZH19XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtdGh1bWJuYWlsLWxhYmVsXCIgaHJlZj1cInt7dXJsfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCJ7e2xvYWRpbmdJbWd9fVwiIGRhdGEtc3JjPVwie3tpbWd9fVwiIGFsdD1cInt7bmFtZX19XCIgdGl0bGU9XCJ7e25hbWV9fVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcm9kdWN0RGV0YWlsc1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tpZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wdXJjaGFzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ7e25hbWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3NhbGVCYWRnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1mbGFnLXNpZGUge3sjcHJvZHVjdF9zYWxlX2JhZGdlc319X3BlcmNlbnR7ey9wcm9kdWN0X3NhbGVfYmFkZ2VzfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNhbGUtdGV4dFwiPnt7JnNhbGVCYWRnZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3NhbGVCYWRnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmN1c3RvbUJhZGdlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0taW1hZ2UtdGh1bWJuYWlsXCIgaHJlZj1cInt7dXJsfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZCBjYXJkLWltYWdlXCIgc3JjPVwie3tsb2FkaW5nSW1nfX1cIiBkYXRhLXNyYz1cInt7aW1nfX1cIiBhbHQ9XCJ7e25hbWV9fVwiIHRpdGxlPVwie3tuYW1lfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2hvdmVySW1hZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJ7e3VybH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlIGxhenlsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3tuYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7bmFtZX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9ob3ZlckltYWdlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1kZXRhaWxcIiBocmVmPVwie3t1cmx9fVwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tdGl0bGVcImhyZWY9XCJ7e3VybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3tuYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3JhdGluZ0h0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tcmF0aW5nIGNhcmQtdGV4dCBjYXJkLXRleHQtLXJhdGluZ1wiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcm9kdWN0UmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnJhdGluZ0h0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svcmF0aW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxvZ2luUHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZwcmljZVJhbmdlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm9wdGlvbnNUb2dnbGVIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtXCIgaWQ9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS17e2lkfX1cIiBkYXRhLXByb2R1Y3QtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmZvcm1IdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgcHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uLWdyb3VwIHByaWNlLXNlY3Rpb24tZ3JvdXAtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gU2FsZSBwcmljZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2Utc2VjdGlvbi0tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsXCIge3sjbm9uU2FsZVByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJ7ey9ub25TYWxlUHJpY2V9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWxcIiB7e15ub25TYWxlUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTtcInt7L25vblNhbGVQcmljZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3tzYWxlUHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS0tbWFpblwiPnt7cHJpY2UuZm9ybWF0dGVkfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBOb24tc2FsZSBwcmljZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gbm9uLXNhbGUtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiIHt7Xm5vblNhbGVQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svbm9uU2FsZVByaWNlfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utd2FzLWxhYmVsXCI+e3tub25TYWxlUHJpY2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bm9uU2FsZVByaWNlLmZvcm1hdHRlZH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIFJldGFpbCBwcmljZSAtLT5cbiAgICAgICAgICAgICAgICB7eyZyZXRhaWxQcmljZUh0bWx9fVxuICAgICAgICAgICAgICAgIHt7JnRheExhYmVsSHRtbH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgcHJpY2VSYW5nZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24tZ3JvdXAgcHJpY2Utc2VjdGlvbi1ncm91cC0te3t0YXhDbGFzc1ByZWZpeH19XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLXNlY3Rpb24tLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1sYWJlbFwiPnt7cHJpY2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj57e3NhbGVQcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2UtLW1haW5cIj57e3ByaWNlUmFuZ2UubWluLmZvcm1hdHRlZH19IC0ge3twcmljZVJhbmdlLm1heC5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3smdGF4TGFiZWxIdG1sfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gbm9uLXNhbGUtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS13YXMtbGFiZWxcIj57e25vblNhbGVQcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tub25TYWxlUHJpY2UuZm9ybWF0dGVkfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlUmFuZ2VIdG1sfX1cbiAgICAgICAgICAgICAgICB7eyZyZXRhaWxQcmljZUh0bWx9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHRheExhYmVsVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8YWJiciB0aXRsZT1cInt7dGl0bGV9fVwiPnt7dGV4dH19PC9hYmJyPlxuICAgICAgICBgLFxuICAgICAgICByZXRhaWxQcmljZVJhbmdlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcnJwLXByaWNlLS17e3RheENsYXNzUHJlZml4fX1cIj5cbiAgICAgICAgICAgICAgICB7e3JldGFpbFByaWNlTGFiZWx9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0tcnJwXCI+e3tyZXRhaWxQcmljZVJhbmdlLm1pbi5mb3JtYXR0ZWR9fSAtIHt7cmV0YWlsUHJpY2VSYW5nZS5tYXguZm9ybWF0dGVkfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgcmV0YWlsUHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBycnAtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiIHt7XnJldGFpbFByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7e3svcmV0YWlsUHJpY2V9fVwiPlxuICAgICAgICAgICAgICAgIHt7cmV0YWlsUHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ycnBcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZXRhaWxQcmljZS5mb3JtYXR0ZWR9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBsb2dpblByaWNlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8YSBjbGFzcz1cInByaWNlLS1sb2dpblwiIGhyZWY9XCJ7e2xvZ2luVXJsfX1cIiB0cmFuc2xhdGU+e3tsb2dpbkZvclByaWNlVHh0fX08L2E+XG4gICAgICAgIGAsXG4gICAgICAgIG9wdGlvbnNUb2dnbGVUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybVRvZ2dsZVwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tb3V0bGluZVwiIGhyZWY9XCIjcHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm0te3tpZH19XCIgZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlPnt7Y2hvb3NlT3B0aW9uc1R4dH19PC9hPjwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBzaW1wbGVGb3JtVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0gZm9ybS0tYWRkVG9DYXJ0IF9zaW5nbGUtcHJvZHVjdFwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJ7e2FkZFRvQ2FydFVybH19XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBkYXRhLWNhcnQtaXRlbS1hZGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwcm9kdWN0X2lkXCIgdmFsdWU9XCJ7e2lkfX1cIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5jcmVtZW50XCIgZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJkZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3txdWFudGl0eURlY3JlYXNlVHh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0taW5wdXQgZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcm9kdWN0LXF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXR5W11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7cXR5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1xdWFudGl0eS1taW49XCJ7e3F0eX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcXVhbnRpdHktbWF4PVwie3ttYXhQdXJjaGFzZVF1YW50aXR5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie3t0eHRRdWFudGl0eX19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJpbmNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3txdWFudGl0eUluY3JlYXNlVHh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hZGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt7I3B1cmNoYXNhYmlsaXR5fX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLW91dHN0b2NrIF9wdXJjaGFzYWJpbGl0eVwiPnt7cHVyY2hhc2FiaWxpdHl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHt7L3B1cmNoYXNhYmlsaXR5fX1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgYCxcbiAgICAgICAgbG9hZGluZ1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj48aW1nIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgYWx0PVwibG9hZGluZ1wiLz48L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzID0gbnVsbCxcbiAgICAgICAgcmF0aW5nU3Rhckh0bWxGdW5jID0gKGlzRnVsbCA9IHRydWUpID0+IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLS1yYXRpbmcke2lzRnVsbCA/ICdGdWxsJyA6ICdFbXB0eSd9XCI+XG4gICAgICAgICAgICAgICAgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1zdGFyXCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYCxcbiAgICAgICAgY3VzdG9tQmFkZ2VUZW1wbGF0ZSA9ICh2YWx1ZSkgPT4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNhbGUtZmxhZy1zaWRlIHNhbGUtZmxhZy1zaWRlLS1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNhbGUtdGV4dFwiPiR7dmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHNob3dQcm9kdWN0UmF0aW5nID0gdHJ1ZSxcbiAgICAgICAgcHJvZHVjdF9zYWxlX2JhZGdlcyA9ICdMYWJlbCcsXG4gICAgICAgIHByb2R1Y3Rfc2FsZV9sYWJlbCA9ICdTYWxlJyxcblxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzID0gcGFyZW50UHJvZHVjdERldGFpbHM7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsVGVtcGxhdGUgPSB0aHVtYm5haWxUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlsc1RlbXBsYXRlID0gcHJvZHVjdERldGFpbHNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVRlbXBsYXRlID0gcHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVGVtcGxhdGUgPSBwcmljZVJhbmdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMudGF4TGFiZWxUZW1wbGF0ZSA9IHRheExhYmVsVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlID0gcmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnJldGFpbFByaWNlVGVtcGxhdGUgPSByZXRhaWxQcmljZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvZ2luUHJpY2VUZW1wbGF0ZSA9IGxvZ2luUHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9nZ2xlVGVtcGxhdGUgPSBvcHRpb25zVG9nZ2xlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlID0gc2ltcGxlRm9ybVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvYWRpbmdUZW1wbGF0ZSA9IGxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuY29udGV4dDtcbiAgICAgICAgdGhpcy5udW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0TnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy5hbGxOdW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsID0gJCgnW2RhdGEtYWxzby1ib3VnaHRdJywgcGFyZW50UHJvZHVjdERldGFpbHMuJHByb2R1Y3RWaWV3U2NvcGUpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGFsc29Cb3VnaHRFbC5kYXRhKCdhbHNvQm91Z2h0JykgfHwge307XG4gICAgICAgIHRoaXMubW9uZXlXaXRoVGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRoVGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMubW9uZXlXaXRob3V0VGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRob3V0VGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aG91dFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RSYXRpbmcgPSBzaG93UHJvZHVjdFJhdGluZztcbiAgICAgICAgdGhpcy5yYXRpbmdTdGFySHRtbEZ1bmMgPSByYXRpbmdTdGFySHRtbEZ1bmM7XG4gICAgICAgIHRoaXMuY3VzdG9tQmFkZ2VUZW1wbGF0ZSA9IGN1c3RvbUJhZGdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdF9zYWxlX2JhZGdlcyA9IHByb2R1Y3Rfc2FsZV9iYWRnZXM7XG4gICAgICAgIHRoaXMucHJvZHVjdF9zYWxlX2xhYmVsID0gcHJvZHVjdF9zYWxlX2xhYmVsO1xuXG4gICAgICAgIC8vIHRyeSB0byBndWVzcyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgdGhpcy5tb25leUZhbGxiYWNrID0gdGhpcy5tb25leVdpdGhUYXggfHwgdGhpcy5tb25leVdpdGhvdXRUYXhcbiAgICAgICAgICAgIC8vIGlzIGRlZmF1bHQgY3VycmVuY3k/XG4gICAgICAgICAgICB8fCAodGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZSAmJiB0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID09PSB0aGlzLmNvbnRleHQuZGVmYXVsdEN1cnJlbmN5Q29kZSA/IHRoaXMuY29udGV4dC5tb25leSA6IG51bGwpXG4gICAgICAgICAgICAvLyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIHx8ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdLCBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScpLmdldCgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoX21vbmV5LCBlbCkgPT4gX21vbmV5IHx8IGV4dHJhY3RNb25leSgkKGVsKS50ZXh0KCkpLCBudWxsKVxuICAgICAgICAgICAgLy8gdXNlIGN1cnJlbmN5IGNvZGVcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID8geyAuLi50aGlzLmNvbnRleHQubW9uZXksIGN1cnJlbmN5X3Rva2VuOiBgICR7dGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZX0gYCB9IDogdGhpcy5jb250ZXh0Lm1vbmV5KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIHRoaXMucHJvZHVjdE5vZGVzID0gW107XG4gICAgICAgIHRoaXMub25BZGRBbGxCdXR0b25DbGljayA9IHRoaXMub25BZGRBbGxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayA9IHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJTaXplID0gdGhpcy5jb250ZXh0LmFsc29ib3VnaHRfdGh1bWJuYWlsX3NpemUuc3BsaXQoJ3gnKTtcblxuICAgICAgICB0aGlzLnRodW1ibmFpbFdpZHRoID0gTnVtYmVyKHRodW1iU2l6ZVswXSkgfHwgMTAwO1xuICAgICAgICB0aGlzLnRodW1ibmFpbEhlaWdodCA9IE51bWJlcih0aHVtYlNpemVbMV0pIHx8IDEwMDtcblxuICAgICAgICB0aGlzLnJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlBbHNvQm91Z2h0Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tPcHRpb25zKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtYWRkLWFsbF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm9uKCdjbGljaycsIHRoaXMub25BZGRBbGxCdXR0b25DbGljayk7XG4gICAgICAgICQoJ1tkYXRhLWFkZC1zZWxlY3RlZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm9uKCdjbGljaycsIHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBjdXJyZW5jeUZvcm1hdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY3VycmVuY3lGb3JtYXQodmFsdWUsICh0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5tb25leVdpdGhUYXggOiB0aGlzLm1vbmV5V2l0aG91dFRheCkgfHwgdGhpcy5tb25leUZhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZUFsc29Cb3VnaHRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJHRodW1ibmFpbHMgPSAkKCdbZGF0YS10aHVtYm5haWxzXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0RWxzID0gJCgnW2RhdGEtcHJvZHVjdC1pZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm5vdCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJyk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyW119ICovXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkcHJvZHVjdEVscy5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgncHJvZHVjdElkJykpO1xuXG4gICAgICAgIGlmICgkcHJvZHVjdEVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWRzOiBbSW50IV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RzQ291bnQ6IEludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmNsdWRlVGF4OiBCb29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1nV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGltZ0hlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkczogJHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogJHByb2R1Y3RzQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhQdXJjaGFzZVF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaW1nSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIChmaXJzdDogMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGltZ1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpbWdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5VjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gUHJvZHVjdFVuYXZhaWxhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gUHJvZHVjdFByZU9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlVGF4OiAkaW5jbHVkZVRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPdXRPZlN0b2NrTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5UmFuZ2VGaWVsZHMgb24gTW9uZXlSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0SWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVUYXg6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aDogdGhpcy50aHVtYm5haWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogdGhpcy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dE91dE9mU3RvY2sgPSByZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncy5pbnZlbnRvcnkuZGVmYXVsdE91dE9mU3RvY2tNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzLmZvckVhY2goKHsgbm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3ROb2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG5vZGUuZW50aXR5SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbm9kZS5wYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkVG9DYXJ0VXJsID0gbm9kZS5hZGRUb0NhcnRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBub2RlLm1pblB1cmNoYXNlUXVhbnRpdHkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdJbWcgPSB0aGlzLmNvbnRleHQubG9hZGluZ0ltZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5vZGUuZGVmYXVsdEltYWdlPy51cmwgfHwgdGhpcy5jb250ZXh0LmRlZmF1bHRQcm9kdWN0SW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdEVsID0gJHByb2R1Y3RFbHMuZmlsdGVyKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheENsYXNzUHJlZml4ID0gdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoVGF4JyA6ICd3aXRob3V0VGF4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheERhdGFQcmVmaXggPSB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gJ3dpdGgtdGF4JyA6ICd3aXRob3V0LXRheCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9zYWxlX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uU2FsZVByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX25vbl9zYWxlX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfcmV0YWlsX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvb3NlT3B0aW9uc1R4dCA9IHRoaXMuY29udGV4dC5jaG9vc2VPcHRpb25zVHh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0UXVhbnRpdHkgPSB0aGlzLmNvbnRleHQudHh0UXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eURlY3JlYXNlVHh0ID0gdGhpcy5jb250ZXh0LnR4dFF1YW50aXR5RGVjcmVhc2UucmVwbGFjZSgvKG9mKS4qL2csIGAkMSAke25vZGUubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5SW5jcmVhc2VUeHQgPSB0aGlzLmNvbnRleHQudHh0UXVhbnRpdHlJbmNyZWFzZS5yZXBsYWNlKC8ob2YpLiovZywgYCQxICR7bm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4UHVyY2hhc2VRdWFudGl0eSA9IG5vZGUubWF4UHVyY2hhc2VRdWFudGl0eSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5Gb3JQcmljZVR4dCA9IHRoaXMuY29udGV4dC5sb2dpbkZvclByaWNlVHh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5VcmwgPSB0aGlzLmNvbnRleHQubG9naW5VcmwgfHwgJy9sb2dpbi5waHAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY29udGV4dC5hbHNvYm91Z2h0X2NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93UmF0aW5nSHRtbCA9IHRoaXMuY29udGV4dC5zaG93UHJvZHVjdFJhdGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rfc2FsZV9iYWRnZXMgPSB0aGlzLmNvbnRleHQucHJvZHVjdF9zYWxlX2JhZGdlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rfc2FsZV9sYWJlbCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X3NhbGVfbGFiZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IG5vZGUuYXZhaWxhYmlsaXR5VjIgJiYgbm9kZS5hdmFpbGFiaWxpdHlWMi5zdGF0dXMgPT09ICdVbmF2YWlsYWJsZScgPyAobm9kZS5hdmFpbGFiaWxpdHlWMi5tZXNzYWdlIHx8IHRoaXMuY29udGV4dC50eHRVbmF2YWlsYWJsZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlT3JkZXIgPSBub2RlLmF2YWlsYWJpbGl0eVYyICYmIG5vZGUuYXZhaWxhYmlsaXR5VjIuc3RhdHVzID09PSAnUHJlb3JkZXInID8gKG5vZGUuYXZhaWxhYmlsaXR5VjIubWVzc2FnZSB8fCB0aGlzLmNvbnRleHQudHh0UHJlT3JkZXIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dE9mU3RvY2sgPSAhKG5vZGUuaW52ZW50b3J5LmlzSW5TdG9jayAmJiBub2RlLmF2YWlsYWJpbGl0eVYyLnN0YXR1cyA9PT0gJ1VuYXZhaWxhYmxlJykgJiYgIShub2RlLmludmVudG9yeS5pc0luU3RvY2spID8gKG5vZGUuYXZhaWxhYmlsaXR5VjIuZGVzY3JpcHRpb24gfHwgdHh0T3V0T2ZTdG9jaykgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzYWJpbGl0eSA9IGF2YWlsYWJsZSB8fCBwcmVPcmRlciB8fCBvdXRPZlN0b2NrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3ZlclByb2R1Y3RJbWFnZSA9IGltYWdlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXMuZmluZChpbWdIb3ZlciA9PiAhaW1nSG92ZXIubm9kZS5pc0RlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2UgPyBpbWFnZS5ub2RlIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3ZlckltYWdlID0gaG92ZXJQcm9kdWN0SW1hZ2Uobm9kZS5pbWFnZXMuZWRnZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXRpbmdIdG1sID0gKHJhdGluZykgPT4gKCFyYXRpbmcgPyAnJyA6IEFycmF5LmZyb20oQXJyYXkoNSkua2V5cygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiB0aGlzLnJhdGluZ1N0YXJIdG1sRnVuYyhyYXRpbmcgPiBpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlQmFkZ2UgPSBwcmljZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiAnJyBpZiBubyBzYWxlIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmljZXM/LnNhbGVQcmljZSB8fCBwcmljZXMuc2FsZVByaWNlLnZhbHVlID09PSBwcmljZXMuYmFzZVByaWNlLnZhbHVlKSByZXR1cm4gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gJ3NhbGUnIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdF9zYWxlX2JhZGdlcyA9PT0gJ2xhYmVsJykgcmV0dXJuIHRoaXMucHJvZHVjdF9zYWxlX2xhYmVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHByaWNlcy5zYWxlUHJpY2UgPyBNYXRoLnJvdW5kKChwcmljZXMuYmFzZVByaWNlLnZhbHVlIC0gcHJpY2VzLnNhbGVQcmljZS52YWx1ZSkgLyBwcmljZXMuYmFzZVByaWNlLnZhbHVlICogMTAwKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IG4gPiAwID8gYCR7bn0lYCA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuICdzYWxlIHtwZXJjZW50fScgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0X3NhbGVfbGFiZWwuaW5jbHVkZXMoJ3twZXJjZW50fScpKSByZXR1cm4gdGhpcy5wcm9kdWN0X3NhbGVfbGFiZWwucmVwbGFjZSgne3BlcmNlbnR9JywgcGVyY2VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNlbnQgJ3NhbGUgLi4uJScgYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9kdWN0X3NhbGVfbGFiZWx9PHNwYW4+JHtwZXJjZW50fTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tQmFkZ2UgPSAoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZmllbGQuZmlsdGVyKGUgPT4gZS5ub2RlLm5hbWUgPT09ICdfX2JhZGdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gdGhpcy5jdXN0b21CYWRnZVRlbXBsYXRlKGkubm9kZS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlUHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5iYXNlUHJpY2UgJiYgbm9kZS5wcmljZXMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUgIT09IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXM/LnJldGFpbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmFuZ2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5wcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUgIT09IG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlUmFuZ2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzPy5yZXRhaWxQcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5taW4udmFsdWUgIT09IG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWF4LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUHJpY2VIdG1sID0gdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gTXVzdGFjaGUucmVuZGVyKHRoaXMubG9naW5QcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5VcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Gb3JQcmljZVR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhMYWJlbEh0bWwgPSB0aGlzLmNvbmZpZy5zaG93VGF4TGFiZWwgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy50YXhMYWJlbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLmNvbnRleHQuaW5jbHVkaW5nVGF4VHh0IDogdGhpcy5jb250ZXh0LmV4Y2x1ZGluZ1RheFR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5jb250ZXh0LnByaWNlV2l0aFRheFR4dCA6IHRoaXMuY29udGV4dC5wcmljZVdpdGhvdXRUYXhUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VSYW5nZUh0bWwgPSByZXRhaWxQcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VIdG1sID0gIXJldGFpbFByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5yZXRhaWxQcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmFuZ2VIdG1sID0gcHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnByaWNlUmFuZ2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhMYWJlbEh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNUb2dnbGVIdG1sID0gbm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5sZW5ndGggPiAwID8gTXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uc1RvZ2dsZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlT3B0aW9uc1R4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmICFwcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucHJpY2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4TGFiZWxIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtSHRtbCA9IG5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMubGVuZ3RoID09PSAwID8gTXVzdGFjaGUucmVuZGVyKHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eURlY3JlYXNlVHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5SW5jcmVhc2VUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UHVyY2hhc2VRdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzYWJpbGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzSHRtbCA9IE11c3RhY2hlLnJlbmRlcih0aGlzLnByb2R1Y3REZXRhaWxzVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVG9nZ2xlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSYXRpbmdIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZ0h0bWw6IHRoaXMuc2hvd1Byb2R1Y3RSYXRpbmcgPyByYXRpbmdIdG1sKG5vZGUucmV2aWV3U3VtbWFyeT8uYXZlcmFnZVJhdGluZykgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3NhbGVfYmFkZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfc2FsZV9sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlQmFkZ2U6IHNhbGVCYWRnZShub2RlLnByaWNlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQmFkZ2U6IGN1c3RvbUJhZGdlKG5vZGUuY3VzdG9tRmllbGRzLmVkZ2VzLmxlbmd0aCA+IDAgPyBub2RlLmN1c3RvbUZpZWxkcy5lZGdlcyA6ICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsSHRtbCA9ICQoTXVzdGFjaGUucmVuZGVyKHRoaXMudGh1bWJuYWlsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5odG1sKGRldGFpbHNIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYm5haWxzLmFwcGVuZCh0aHVtYm5haWxIdG1sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBzaW1wbGUgcHJvZHVjdCBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwsIF8uZXh0ZW5kKHRoaXMuY29udGV4dCwgeyBlbmFibGVBbHNvQm91Z2h0OiBmYWxzZSB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJpY2UgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC4kc2NvcGUub24oJ3ByaWNlLWNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVG90YWxQcmljZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBwcm9kdWN0IG9iamVjdCBmb3IgbGF0ZXIgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnLCBwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdCBmb3VuZGF0aW9uIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJywgeyAkY29udGV4dDogJHByb2R1Y3RFbCB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmluZCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJykub24oJ2NoYW5nZScsIHRoaXMub25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UuYmluZCh0aGlzLCAkcHJvZHVjdEVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJykub24oQ29sbGFwc2libGVFdmVudHMub3BlbiwgdGhpcy5vbk9wdGlvbnNPcGVuLmJpbmQodGhpcywgJHByb2R1Y3RFbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBpbml0IHBhcmVudCBwcm9kdWN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0ICRwYXJlbnRQcm9kdWN0RWwgPSAkKCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQ6ICRwYXJlbnRQcm9kdWN0RWwgfSk7XG4gICAgICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCAkcGFyZW50UHJvZHVjdEVsKS5vbignY2hhbmdlJywgdGhpcy5vbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZS5iaW5kKHRoaXMsICRwYXJlbnRQcm9kdWN0RWwpKTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHBhcmVudCBwcm9kdWN0IHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kc2NvcGUub24oJ3ByaWNlLWNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVG90YWxQcmljZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIC8vIHN0b3Agc2hvd2luZyB0b3RhbCBwcmljZSBpZiByZXF1aXJlIGxvZ2luXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS52YWwoKSk7XG5cbiAgICAgICAgY29uc3QgcHJpY2VCeUlkID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0Tm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5wcmljZXMgJiYgbm9kZS5wcmljZXMucHJpY2UpLnJlZHVjZSgoX3ByaWNlQnlJZCwgbm9kZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5fcHJpY2VCeUlkLFxuICAgICAgICAgICAgICAgIFtub2RlLmVudGl0eUlkXToge1xuICAgICAgICAgICAgICAgICAgICBbdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoX3RheCcgOiAnd2l0aG91dF90YXgnXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5wcmljZSAmJiBwcm9kdWN0LnByb2R1Y3RJZCkucmVkdWNlKChfcHJpY2VCeUlkLCBwcm9kdWN0KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLl9wcmljZUJ5SWQsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdElkXTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgIH0pLCB7fSksXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdFF0eSA9IHt9O1xuICAgICAgICBwcm9kdWN0SWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRRdHkgPSAkKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtpZH1cIl0gW2RhdGEtcHJvZHVjdC1xdWFudGl0eV1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgaWYgKGlucHV0UXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RRdHlbaWRdID0geyBxdWFudGl0eTogcGFyc2VJbnQoaW5wdXRRdHkudmFsKCksIDEwKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWVyZ2VQcm9kdWN0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHByaWNlQnlJZCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBtZXJnZVByb2R1Y3QgPSB7XG4gICAgICAgICAgICAgICAgLi4ubWVyZ2VQcm9kdWN0LFxuICAgICAgICAgICAgICAgIFtrZXldOiB7IC4uLnByaWNlQnlJZFtrZXldLCAuLi5wcm9kdWN0UXR5W2tleV0gfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VQcm9kdWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtZXJnZSBwcm9kdWN0Tm9kZXMgJiBwcm9kdWN0IGRldGFpbHMgb2JqZWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IE9iamVjdC5rZXlzKG1lcmdlUHJvZHVjdCkubWFwKHByb2R1Y3RJZCA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgcHJpY2U6IG1lcmdlUHJvZHVjdFtwcm9kdWN0SWRdLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBbdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscywgLi4ucHJvZHVjdHNdXG4gICAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdElkcy5pbmRleE9mKHByb2R1Y3QucHJvZHVjdElkKSA+IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgoe1xuICAgICAgICAgICAgICAgIHdpdGhfdGF4ID0gMCwgd2l0aG91dF90YXggPSAwLCBtb25leV93aXRoX3RheCwgbW9uZXlfd2l0aG91dF90YXgsXG4gICAgICAgICAgICB9LCB7IHByaWNlIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgd2l0aF90YXg6IHByaWNlICYmIHByaWNlLndpdGhfdGF4ID8gd2l0aF90YXggKyAocHJpY2Uud2l0aF90YXgudmFsdWUgKiAocHJpY2UucXVhbnRpdHkgPyBwcmljZS5xdWFudGl0eSA6IDEpKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgd2l0aG91dF90YXg6IHByaWNlICYmIHByaWNlLndpdGhvdXRfdGF4ID8gd2l0aG91dF90YXggKyAocHJpY2Uud2l0aG91dF90YXgudmFsdWUgKiAocHJpY2UucXVhbnRpdHkgPyBwcmljZS5xdWFudGl0eSA6IDEpKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbW9uZXlfd2l0aF90YXg6IG1vbmV5X3dpdGhfdGF4IHx8ICgocHJpY2UgJiYgcHJpY2Uud2l0aF90YXgpID8gZXh0cmFjdE1vbmV5KHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGwpLFxuICAgICAgICAgICAgICAgIG1vbmV5X3dpdGhvdXRfdGF4OiBtb25leV93aXRob3V0X3RheCB8fCAoKHByaWNlICYmIHByaWNlLndpdGhvdXRfdGF4KSA/IGV4dHJhY3RNb25leShwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsIHRoaXMuY29udGV4dC5tb25leSkgOiBudWxsKSxcbiAgICAgICAgICAgIH0pLCB7fSk7XG5cbiAgICAgICAgY29uc3QgJHdpdGhUYXggPSAkKCdbZGF0YS10b3RhbC13aXRoLXRheF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCAkd2l0aG91dFRheCA9ICQoJ1tkYXRhLXRvdGFsLXdpdGhvdXQtdGF4XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgaWYgKHRvdGFsLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcmljZV0nLCAkd2l0aFRheCkuaHRtbCh0aGlzLmN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhfdGF4LCB0b3RhbC5tb25leV93aXRoX3RheCkpO1xuICAgICAgICAgICAgJHdpdGhUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRoVGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhUYXguaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcmljZV0nLCAkd2l0aG91dFRheCkuaHRtbCh0aGlzLmN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhvdXRfdGF4LCB0b3RhbC5tb25leV93aXRob3V0X3RheCkpO1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRob3V0VGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aG91dFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRBbGxCdXR0b25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tPcHRpb25zKCkge1xuICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwub24oJ2NsaWNrJywgJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdOm5vdCguaXMtb3BlbiknLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdEVsID0gJHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWlkXScpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9ICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRhbHNvQm91Z2h0Q2hlY2tib3ggPSAkdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGlmICghcHJvZHVjdD8uJGZvcm0/LmdldCgwKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5vbignY2xpY2snLCAnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJHRhcmdldC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG4gICAgICAgICAgICBpZiAoISRhbHNvQm91Z2h0Q2hlY2tib3guZGF0YSgncHVyY2hhc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCgpO1xuICAgIH1cblxuICAgIG9uQWxzb0JvdWdodENoZWNrYm94Q2hhbmdlKCRwcm9kdWN0RWwsIGUpIHtcbiAgICAgICAgY29uc3QgJGNiID0gJChlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICQoYGxhYmVsW2Zvcj1cIiR7JGNiLmF0dHIoJ2lkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJHRodW1iID0gJChgW2RhdGEtdGh1bWJuYWlsLXByb2R1Y3QtaWQ9XCIkeyRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdElkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcblxuICAgICAgICAvLyBvcGVuIChjbG9zZSkgcHJvZHVjdCBvcHRpb25zIGZvcm0gaWYgY2hlY2tib3ggaXMgY2hlY2tlZCAodW5jaGVja2VkKVxuICAgICAgICBpZiAoJGNiLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJGxhYmVsLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAkdGh1bWIuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsYWJlbC5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgJHRodW1iLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVBZGRTZWxlY3RlZFRvQ2FydEJ1dHRvbigpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uc09wZW4oJHByb2R1Y3RFbCkge1xuICAgICAgICBjb25zdCAkcXR5ID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1wcm9kdWN0LXF1YW50aXR5XScpO1xuICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnX3VuUHVyY2hhc2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRxdHkudmFsKCkgPCAxKSB7XG4gICAgICAgICAgICAkcXR5LnZhbCgxKTtcbiAgICAgICAgfVxuICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBpZiAoJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtY29udGVudF0nKTtcbiAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRjb250ZW50LmNsb3Nlc3QoJy5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2snKS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nKTtcblxuICAgICAgICAkY29udGVudC5odG1sKE11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdUZW1wbGF0ZSwgeyBsb2FkaW5nSW1nOiB0aGlzLmNvbnRleHQubG9hZGluZ0ltZyB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwYXBhdGhlbWVzL2Fsc28tYm91Z2h0L3Byb2R1Y3QtZGV0YWlscycgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgIXJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRjb250ZW50Lmh0bWwoJChyZXNwKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcHJvZHVjdEVsLCBfLmV4dGVuZCh0aGlzLmNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogZmFsc2UgfSksIG51bGwsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gcHJvZHVjdC12aWV3LXVwZGF0ZSBldmVudFxuICAgICAgICAgICAgICAgIC8vIGZvciB0b2dnbGUgY2hlY2tib3ggZGVwZW5kaW5nIG9uIHByb2R1Y3QgcGFjaGFzaWJpbGl0eVxuICAgICAgICAgICAgICAgIGNvbnN0ICRxdHkgPSAkY29udGVudC5maW5kKCdbZGF0YS1wcm9kdWN0LXF1YW50aXR5XScpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcm9kdWN0LXZpZXctdXBkYXRlJywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5kYXRhKCdwdXJjaGFzYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcXR5LnZhbCgpIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRxdHkudmFsKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5kYXRhKCdwdXJjaGFzYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgcHJvZHVjdCBvYmplY3QgZm9yIGxhdGVyIHVzZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJywgcHJvZHVjdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnX3VuUHVyY2hhc2UnKSkge1xuICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RlblF1YW50aXR5QWxzb0JvdWdodENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1hbHNvLWJvdWdodC1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2libGluZ3MoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCAkYWxzb0JvdWdodENoZWNrYm94ID0gJHRhcmdldC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcblxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWF4IG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWluIG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgICAgIGlmICgocXR5IC0gMSkgPj0gcXVhbnRpdHlNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICAkaW5wdXQudmFsKHF0eSk7XG5cbiAgICAgICAgICAgIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGFsc29Cb3VnaHRDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5vbignaW5wdXQnLCAnW2RhdGEtcXVhbnRpdHktYWxzby1ib3VnaHQtY2hhbmdlXSBpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgJGFsc29Cb3VnaHRDaGVja2JveCA9ICRpbnB1dC5jbG9zZXN0KCcucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrJykuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJyk7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBpZiAocXR5ID4gMCkge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhbHNvQm91Z2h0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAkYWxzb0JvdWdodENoZWNrYm94LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwub24oJ2JsdXInLCAnW2RhdGEtcXVhbnRpdHktYWxzby1ib3VnaHQtY2hhbmdlXSBpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgaWYgKCRpbnB1dC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIH1cblxuICAgIHVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCAkYWxsID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkYWxsLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgJGJ0bnMgPSAkKCdbZGF0YS1idXR0b25zXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRidG5zLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYnRucy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gbG9uZ2VyIHVzZWQuIEtlZXAgZm9yIG90aGVyIHRoaXJkLXBhcnR5IHNjcmlwdHMgY29tcGF0aWJpbGl0eS5cbiAgICAvKipcbiAgICAgKiBQcm9taXNlIHRvIENhbGwgYWZ0ZXIgdGhlIHBhcmVudCBwcm9kdWN0IGlzIGFkZGVkIHRvIGFkZCBhbHNvLWJvdWdodCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBhc3luYyBwYXJlbnRQcm9kdWN0QWRkZWRUb0NhcnQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXJlbnQgcHJvZHVjdCBhZGRlZCcpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC4kc2NvcGUuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdOmNoZWNrZWQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHByb21pc2VTZXJpYWwocHJvbWlzZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICB9XG5cblxuICAgIGFzeW5jIGFkZFNlbGVjdGVkUHJvZHVjdHNUb0NhcnQoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS52YWwoKSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTx7cHJvZHVjdDogUHJvZHVjdERldGFpbHMsIHJlc3A6IGFueX0+fSAqL1xuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RBZGRlZCA9IFtdO1xuICAgICAgICBsZXQgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJ1tkYXRhLWFkZC1zZWxlY3RlZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4uaHRtbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAuaHRtbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIC8vIGFkZCBwYXJlbnQgcHJvZHVjdCB0byBjYXJ0XG4gICAgICAgIGlmIChwcm9kdWN0SWRzLmluZGV4T2YodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQpID4gLTEpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSByZXBvcnRGb3JtVmFsaWRpdHkodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kZm9ybS5nZXQoMCkpO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXJyLCByZXNwXSA9IGF3YWl0IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuYWRkUHJvZHVjdFRvQ2FydEFzeW5jKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBlcnIgfHwgcmVzcC5kYXRhLmVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvck1zZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBTd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoYFtkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XVt2YWx1ZT1cIiR7dGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWR9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkcHJvZHVjdEVscyA9ICQoJ1tkYXRhLXByb2R1Y3QtaWRdJywgdGhpcy4kYWxzb0JvdWdodEVsKS5ub3QoJ1tkYXRhLXBhcmVudC1wcm9kdWN0XScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdElkcy5sZW5ndGggJiYgc3VjY2VzczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwcm9kdWN0SWRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCB8fCBwcm9kdWN0SWQgPT09IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMucHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkcHJvZHVjdEVscy5maWx0ZXIoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIl1gKTtcblxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzID0gcmVwb3J0Rm9ybVZhbGlkaXR5KHByb2R1Y3QuJGZvcm0uZ2V0KDApKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VyciwgcmVzcF0gPSBhd2FpdCBwcm9kdWN0LmFkZFByb2R1Y3RUb0NhcnRBc3luYygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyIHx8IHJlc3AuZGF0YS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgU3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1xdWFudGl0eV0nLCBwcm9kdWN0LiRzY29wZSkudmFsKDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RBZGRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXNwLmRhdGEuY2FydF9pdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiAkKCdbZGF0YS1wcm9kdWN0LXF1YW50aXR5XScsIHByb2R1Y3QuJHNjb3BlKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCBxdWFudGl0eSBhbHNvIGJvdWdodCBpdGVtXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcXVhbnRpdHldJywgcHJvZHVjdC4kc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsKCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBwcm9kdWN0SWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvcGVuIHRoZSBwcm9kdWN0IGZvcm1cbiAgICAgICAgICAgICAgICBjb25zdCAkdG9nZ2xlID0gJCgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICAgICAgaWYgKCEkdG9nZ2xlLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvZ2dsZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByb2R1Y3QsIHJlc3AgfSA9IHJlc3VsdHNbMF07XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IE9CUFMgTW9kXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5hZGRfdG9fY2FydF9wb3B1cCA9PT0gJ2NhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuQ2FydFByZXZpZXcobmV3UHJvZHVjdEFkZGVkLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwICE9PSAnaGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0LnVwZGF0ZUNhcnRDb250ZW50KHByb2R1Y3QucHJldmlld01vZGFsLCBuZXdQcm9kdWN0QWRkZWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBuZXcgcHJvZHVjdCBhZGRlZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RBZGRlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGl0ZW0ucHJvZHVjdC5wcmV2aWV3TW9kYWwuJGNvbnRlbnQuZ2V0KDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICRtb2RhbC5maW5kKGAucHJvZHVjdFZpZXcgW2RhdGEtYWxzb2JvdWdodC1pZD1cIiR7aXRlbS5pZH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRxdHkgPSAkZWwuZmluZCgnW2RhdGEtY2FydC1pdGVtLXF1YW50aXR5XScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGVsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRxdHkudGV4dChgJHtpdGVtLnF0eX0geGApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAncGFwYXRoZW1lcy9hbHNvLWJvdWdodC9wcmV2aWV3Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3AuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCBwcm9kdWN0LiRzY29wZSkuZ2V0KDApO1xuICAgICAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlcnJvckJveCA9ICQoJ1tkYXRhLWVycm9yLWJveF0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkZXJyb3JNc2cgPSAkKCdbZGF0YS1lcnJvci1tZXNzYWdlXScsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja2JveCA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKTtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHByb2R1Y3QuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHByb2R1Y3QuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcblxuICAgICAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdC4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWplY3QgYWRkIHByb2R1Y3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAkZXJyb3JNc2cuaHRtbChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkZXJyb3JCb3gucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlcnJvckJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnQoJGVycm9yQm94LmdldCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvbHZlIGFkZCBwcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgJGVycm9yTXNnLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgJGVycm9yQm94LmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi4vZ2xvYmFsL2ZvdW5kYXRpb24nOyAvLyBTdXBlcm1hcmtldFxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGRlZmF1bHRNb2RhbCwgTW9kYWxFdmVudHMsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnO1xuaW1wb3J0IGJhbm5lclV0aWxzIGZyb20gJy4vdXRpbHMvYmFubmVyLXV0aWxzJztcbmltcG9ydCBjdXJyZW5jeVNlbGVjdG9yIGZyb20gJy4uL2dsb2JhbC9jdXJyZW5jeS1zZWxlY3Rvcic7XG5pbXBvcnQgQWxzb0JvdWdodCBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2Fsc28tYm91Z2h0JzsgLy8gUGFwYXRoZW1lcyAtIEFsc29Cb3VnaHRcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QnOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5pbXBvcnQgeyBzY3JvbGxUb3AgfSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL3RoZW1lLXV0aWxzJzsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuaW1wb3J0IHsgb3BlbkNhcnRQcmV2aWV3IH0gZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy91dGlscyc7IC8vIHBhcGF0aGVtZXMtaW5oZWFsdGhcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcblxuY29uc3Qgc21hbGxNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnc21hbGwnKTsgLy8gcGFwYXRoZW1lcy1raXRjaGVuYXJ5XG5jb25zdCBtZWRpdW1NZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnbWVkaXVtJyk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcblxuLy8gU3VwZXJtYXJrZXQgLSBPQlBTIE1vZFxuLyogZXNsaW50LWRpc2FibGUgKi9cbmZ1bmN0aW9uIHNoYWtlKCRlbCwgc2V0dGluZ3MpIHtcbiAgICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuaW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmludGVydmFsID0gMTAwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuZGlzdGFuY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmRpc3RhbmNlID0gMTA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy50aW1lcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MudGltZXMgPSA0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuY29tcGxldGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cblxuICAgICRlbC5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cbiAgICBmb3IgKGxldCBpdGVyID0gMDsgaXRlciA8IChzZXR0aW5ncy50aW1lcyArIDEpOyBpdGVyKyspIHtcbiAgICAgICAgJGVsLmFuaW1hdGUoeyBsZWZ0OiAoKGl0ZXIgJSAyID09PSAwID8gc2V0dGluZ3MuZGlzdGFuY2UgOiBzZXR0aW5ncy5kaXN0YW5jZSAqIC0xKSkgfSwgc2V0dGluZ3MuaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgICRlbC5hbmltYXRlKHsgbGVmdDogMCB9LCBzZXR0aW5ncy5pbnRlcnZhbCwgc2V0dGluZ3MuY29tcGxldGUpO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG4vLyBTdXBlcm1hcmtldDogRml4IFByaWNlIG5vdCB1cGRhdGUgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGlzIGNoZWNrZWRcbmZ1bmN0aW9uIHN1cGVybWFya2V0U2VyaWFsaXplKCRmb3JtKSB7XG4gICAgY29uc3QgYXNzb2MgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpLnJlZHVjZSgoX2Fzc29jLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIF9hc3NvY1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gX2Fzc29jO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gJC5wYXJhbShhc3NvYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGVBcmcsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7IC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EIHt7e1xuICAgICAgICBjb25zdCAkc2NvcGUgPSBjb250ZXh0LmVuYWJsZUFsc29Cb3VnaHQgPyAkc2NvcGVBcmcuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtcGFyZW50LXNjb3BlXScpIDogJHNjb3BlQXJnO1xuICAgICAgICB0aGlzLiRwcm9kdWN0Vmlld1Njb3BlID0gJHNjb3BlQXJnO1xuICAgICAgICAvLyB9fX1cblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIGZvdW5kYXRpb24oJChkb2N1bWVudCkpOyAvLyBTdXBlcm1hcmtldFxuICAgICAgICB0aGlzLmluaXRDdXN0b21UYWJzKCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuICAgICAgICB0aGlzLmluaXRUYWJzQURBKCk7IC8vIFBhcGF0aGVtZXMgLSBLaXRjaGVuYXJ5XG5cbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEFsc29Cb3VnaHRcbiAgICAgICAgaWYgKGNvbnRleHQuZW5hYmxlQWxzb0JvdWdodCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFsc29Cb3VnaHRPcHRpb25zIH0gPSB3aW5kb3cuc3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuYWxzb0JvdWdodCA9IG5ldyBBbHNvQm91Z2h0KHRoaXMsIGFsc29Cb3VnaHRPcHRpb25zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAoJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkgfHwgJycpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtY2hpYXJhIGVkaXRlZCBmb3IgYWxzby1ib3VnaHRcbiAgICAgICAgdGhpcy5wcmljZSA9IG51bGw7XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9ICQoJ2lucHV0W25hbWU9XCJwcm9kdWN0X2lkXCJdJywgdGhpcy4kc2NvcGUpLnZhbCgpO1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0OiBGaXggY2xpY2sgcmV2aWV3cyBsaW5rIG9wZW4gdGFiXG4gICAgICAgICQoJ2FbaHJlZio9XCIjdGFiLXJldmlld3NcIl0nLCAkc2NvcGUpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBpZiAoISR0YXJnZXQuaXMoJy50YWItdGl0bGUnKSAmJiAhJHRhcmdldC5pcygnW2RhdGEtdGFiLW1vYmlsZV0nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YWIgPSAkKGAudGFiLXRpdGxlW2hyZWY9XCIjdGFiLXJldmlld3MtJHt0aGlzLnByb2R1Y3RJZH1cIl06dmlzaWJsZSwgW2RhdGEtdGFiLW1vYmlsZV1baHJlZj1cIiN0YWItcmV2aWV3cy0ke3RoaXMucHJvZHVjdElkfVwiXTp2aXNpYmxlYCwgJHNjb3BlKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIGlmICghJHRhYi5pcygnLmlzLW9wZW4sIC5pcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGFiLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR0YWIuZ2V0KDApLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtb29uY2F0OiBkaXNwbGF5IGJyYW5kIGltYWdlXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJyYW5kLWltYWdlXScpLmVhY2goKGksIGltZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoaW1nKTtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9ICRpbWcuZGF0YSgnYnJhbmRJbWFnZScpO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9ICRpbWcuZGF0YSgnc2l6ZXMnKTtcbiAgICAgICAgICAgIGNvbnN0IHNpemUyeCA9IHNpemUuc3BsaXQoJ3gnKS5tYXAobiA9PiBOdW1iZXIobikgKiAyKS5qb2luKCd4Jyk7XG4gICAgICAgICAgICAkaW1nLmF0dHIoJ3NyY3NldCcsIGAke3NyYy5yZXBsYWNlKCcvb3JpZ2luYWwvJywgYC8ke3NpemV9L2ApfSAxeCwgJHtzcmMucmVwbGFjZSgnL29yaWdpbmFsLycsIGAvJHtzaXplMnh9L2ApfSAyeGApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsICRmb3JtWzBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2Zvcm0tYWN0aW9uLWJ1eU5vdycsICRzY29wZSkub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1hY3Rpb25dJykudmFsKCdidXknKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xuICAgICAgICBpZiAoKF8uaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kdWN0SWQsIHN1cGVybWFya2V0U2VyaWFsaXplKCRmb3JtKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuc2hvdygpO1xuXG4gICAgICAgIHRoaXMucHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXRcbiAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwuYWRkQ2xhc3MoJ3ByZXZpZXctbW9kYWwnKS5hZGRDbGFzcyhgcHJldmlldy1tb2RhbC0tJHtjb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwfWApO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgPT09ICdtaW5pJykge1xuICAgICAgICAgICAgICAgIC8vIHVuYmluZCBvcGVuL2Nsb3NlIGV2ZW50IG9mIHRoZSBvcmlnaW5hbCBtb2RhbFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMub3BlbiwgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbE9wZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxDbG9zZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBiaW5kIG9wZW4vY2xhc3MgZXZlbnQgZm9yIG1pbmkgcHJldmlldyBtb2RhbFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxPcGVuID0gdGhpcy5vbk1pbmlQcmV2aWV3TW9kYWxPcGVuLmJpbmQodGhpcy5wcmV2aWV3TW9kYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxDbG9zZSA9IHRoaXMub25NaW5pUHJldmlld01vZGFsQ2xvc2UuYmluZCh0aGlzLnByZXZpZXdNb2RhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxDbG9zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIC8vIHRoaXMuaW5pdFRhYlNjcm9sbFRvVmlld3BvcnQoKTtcbiAgICAgICAgdGhpcy5pbml0R29Ub1RhYigpO1xuICAgICAgICB0aGlzLmluaXRDb3VudGRvd24oKTtcbiAgICAgICAgLy8gTmVlZCBmb3IgcGFwYXRoZW1lcy1tcXBvICsgYWxzb2JvdWdodCB2MiBjb21wbGlhbmNlXG4gICAgICAgIHRoaXMuJHNjb3BlLmRhdGEoJ3Byb2R1Y3REZXRhaWxzSW5zdGFuY2UnLCB0aGlzKTtcbiAgICAgICAgdXRpbHMuaG9va3MuZW1pdCgncHJvZHVjdC1wcm9kdWN0ZGV0YWlscy1pbml0JywgdGhpcyk7XG5cbiAgICAgICAgLy8gQ2hpYXJhOiBkcm9wZG93biBjb2xvciBzd2F0Y2hlc1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlID09PSAnZHJvcGRvd24nIHx8IHRoaXMuY29udGV4dC5zd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uL3BhcGF0aGVtZXMvZHJvcGRvd24tc3dhdGNoZXMnKVxuICAgICAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzOiB0aGlzLmNvbnRleHQuc3dhdGNoX29wdGlvbl9kaXNwbGF5X3R5cGUgPT09ICdkcm9wZG93bicsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1zaGFyZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQoJy5mb3JtLXNoYXJlJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5wdXRTaGFyZUxpbmsgPSB0aGlzLiRzY29wZS5maW5kKCcuZm9ybS1zaGFyZSAuZm9ybS1pbnB1dCcpO1xuICAgICAgICBpbnB1dFNoYXJlTGluay5vbignY2xpY2snLCAoX2V2ZW50KSA9PiB7XG4gICAgICAgICAgICBpbnB1dFNoYXJlTGluay5zZWxlY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKGNvbnRleHQpO1xuICAgIH1cbiAgICAvLyBUaW1lIGNvdW50ZG93blxuICAgIGluaXRDb3VudGRvd24oKSB7XG4gICAgICAgIGNvbnN0IGluaXRUaW1lQ291bnRkb3duID0gKGRheXNUZXh0LCBob3Vyc1RleHQsIG1pbnV0ZXNUZXh0LCBzZWNvbmRzVGV4dCwgZW5kVGltZSwgYmxvY2tUaW1lLCBsYWJlbFRpdGxlLCBibG9ja0RheXMsIGJsb2NrSG91cnMsIGJsb2NrTWludXRlcywgYmxvY2tUaW1lcikgPT4ge1xuICAgICAgICAgICAgYmxvY2tUaW1lci5yZW1vdmVDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVUaW1lRGF0ZSA9IChzdGFydFRpbWUsIGRhdGVTZXRUaW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gTWF0aC5mbG9vcigoZGF0ZVNldFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gODY0MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA4NjQwMDtcbiAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQudGV4dChgJHtkYXlzIDwgMTAgPyBgMCR7IGRheXN9YCA6IGRheXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RheXMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbCAvIDM2MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSAzNjAwO1xuICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQudGV4dChgMCR7aG91cnN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tIb3Vycy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlc1RleHQudGV4dChgMCR7bWludXRlc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTWludXRlcy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzVGV4dC5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVGV4dC50ZXh0KGAwJHtzZWNvbmRzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUaXRsZS5yZW1vdmVDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lUnVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChzdGFydFRpbWUsIGRhdGVTZXRUaW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gTWF0aC5mbG9vcigoZGF0ZVNldFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gODY0MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA4NjQwMDtcbiAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQudGV4dChgJHtkYXlzIDwgMTAgPyBgMCR7IGRheXN9YCA6IGRheXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RheXMuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbCAvIDM2MDApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSAzNjAwO1xuICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQudGV4dChgMCR7aG91cnN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tIb3Vycy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Vyc1RleHQuYWRkQ2xhc3MoJ2lzLXNyT25seScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAlPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlc1RleHQudGV4dChgMCR7bWludXRlc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTWludXRlcy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzVGV4dC5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVGV4dC50ZXh0KGAwJHtzZWNvbmRzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUaXRsZS5yZW1vdmVDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVSdW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWwgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTZXRUaW1lLnNldERhdGUoZGF0ZVNldFRpbWUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsID0gTWF0aC5mbG9vcigoZGF0ZVNldFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyA4NjQwMCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICU9IDg2NDAwO1xuICAgICAgICAgICAgICAgICAgICBkYXlzVGV4dC50ZXh0KGAke2RheXMgPCAxMCA/IGAwJHsgZGF5c31gIDogZGF5c31gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGF5cy5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzVGV4dC5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsIC8gMzYwMCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICU9IDM2MDA7XG4gICAgICAgICAgICAgICAgICAgIGhvdXJzVGV4dC50ZXh0KGAwJHtob3Vyc31gLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzID09PSAwICYmIGhvdXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0hvdXJzLmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzVGV4dC5hZGRDbGFzcygnaXMtc3JPbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWwgLyA2MCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICU9IDYwO1xuICAgICAgICAgICAgICAgICAgICBtaW51dGVzVGV4dC50ZXh0KGAwJHttaW51dGVzfWAuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tNaW51dGVzLmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXNUZXh0LmFkZENsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHNUZXh0LnRleHQoYDAke3NlY29uZHN9YC5zbGljZSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFRpdGxlLnJlbW92ZUNsYXNzKCdpcy1zck9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghZW5kVGltZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZVJ1bik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4VGltZSA9IC8oMDB8WzAtOV18MVswLTldfDJbMC0zXSk6KFswLTldfFswLTVdWzAtOV0pOihbMC05XXxbMC01XVswLTldKVxcYi87XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXhUaW1lem9uZSA9IC9bKy1dWzAtOV17MSwyfVxcYiQvO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4RGF0ZSA9IC9eXFxkXFxkXFxkXFxkLSgwP1sxLTldfDFbMC0yXSktKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKVxcYi87XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0VGltZXpvbmUgPSBlbmRUaW1lLm1hdGNoKHJlZ2V4VGltZXpvbmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRpbWUgPSBlbmRUaW1lLm1hdGNoKHJlZ2V4VGltZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RGF0ZSA9IGVuZFRpbWUubWF0Y2gocmVnZXhEYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHJlc3VsdFRpbWVbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHJlc3VsdFRpbWVbMl07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHJlc3VsdFRpbWVbM107XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdERhdGUgJiYgIXJlc3VsdFRpbWV6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lID0gbmV3IERhdGUoZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVEYXRlKHN0YXJ0VGltZSwgZGF0ZVNldFRpbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc3VsdERhdGUgJiYgcmVzdWx0VGltZXpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVpvbmUgPSByZXN1bHRUaW1lem9uZVswXS5yZXBsYWNlKC9bXFwrJ10rL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVNldFRpbWVab25lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHpEaWZmZXJlbmNlID0gdGltZVpvbmUgKiA2MCArIGRhdGVTZXRUaW1lWm9uZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRUaW1lID0gbmV3IERhdGUoZGF0ZVNldFRpbWVab25lLmdldFRpbWUoKSArIHR6RGlmZmVyZW5jZSAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lRW5kID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVNldFRpbWVFbmQuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZUVuZC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZUVuZC5zZXRTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lKG9mZnNldFRpbWUsIGRhdGVTZXRUaW1lRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdERhdGUgJiYgcmVzdWx0VGltZXpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVpvbmUgPSByZXN1bHRUaW1lem9uZVswXS5yZXBsYWNlKC9bXFwrJ10rL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVNldFRpbWVab25lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHpEaWZmZXJlbmNlID0gdGltZVpvbmUgKiA2MCArIGRhdGVTZXRUaW1lWm9uZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRUaW1lID0gbmV3IERhdGUoZGF0ZVNldFRpbWVab25lLmdldFRpbWUoKSArIHR6RGlmZmVyZW5jZSAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lID0gYCR7cmVzdWx0RGF0ZVswXX0gJHtyZXN1bHRUaW1lWzBdfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTZXRUaW1lRW5kID0gbmV3IERhdGUoZGF0ZVNldFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lRGF0ZShvZmZzZXRUaW1lLCBkYXRlU2V0VGltZUVuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVNldFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlU2V0VGltZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTZXRUaW1lLnNldE1pbnV0ZXMobWludXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVTZXRUaW1lLnNldFNlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWUoc3RhcnRUaW1lLCBkYXRlU2V0VGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCAkc2NvcGUgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdFZpZXctc2FsZUNvdW50Jyk7XG4gICAgICAgIGNvbnN0IGRheXNUZXh0ID0gJHNjb3BlLmZpbmQoJy5fZGF5cycpO1xuICAgICAgICBjb25zdCBob3Vyc1RleHQgPSAkc2NvcGUuZmluZCgnLl9ob3VycycpO1xuICAgICAgICBjb25zdCBtaW51dGVzVGV4dCA9ICRzY29wZS5maW5kKCcuX21pbnV0ZXMnKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc1RleHQgPSAkc2NvcGUuZmluZCgnLl9zZWNvbmRzJyk7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSAkc2NvcGUuZGF0YSgnY291bnRkb3duJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSAkc2NvcGUuZmluZCgnLl9sYWJlbFRpbWVfX3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGJsb2NrVGltZXIgPSAkc2NvcGUuZmluZCgnLl9zaG93VGltZXInKTtcbiAgICAgICAgY29uc3QgYmxvY2tEYXlzID0gJHNjb3BlLmZpbmQoJy5fYmxvY2tEYXlzJyk7XG4gICAgICAgIGNvbnN0IGJsb2NrSG91cnMgPSAkc2NvcGUuZmluZCgnLl9ibG9ja0hvdXJzJyk7XG4gICAgICAgIGNvbnN0IGJsb2NrTWludXRlcyA9ICRzY29wZS5maW5kKCcuX2Jsb2NrTWludXRlcycpO1xuICAgICAgICBjb25zdCB0aW1lUnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaW5pdFRpbWVDb3VudGRvd24oZGF5c1RleHQsIGhvdXJzVGV4dCwgbWludXRlc1RleHQsIHNlY29uZHNUZXh0LCBlbmRUaW1lLCAkc2NvcGUsIGxhYmVsVGl0bGUsIGJsb2NrRGF5cywgYmxvY2tIb3VycywgYmxvY2tNaW51dGVzLCBibG9ja1RpbWVyKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdFRhYlNjcm9sbFRvVmlld3BvcnQoKSB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICBjb25zdCAkcXVpY2tWaWV3ID0gdGhpcy4kc2NvcGUuY2xvc2VzdCgnLnF1aWNrVmlldycpLmZpcnN0KCk7XG4gICAgICAgICRxdWlja1ZpZXcuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXG4gICAgICAgIGxldCByZXN1bWVTdGlja3lIZWFkZXI7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9WaWV3ID0gZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoJChlbCkuYXR0cignaHJlZicpLCB0aGlzLiRzY29wZSkuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICgkcXVpY2tWaWV3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaCA9ICRxdWlja1ZpZXcuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0ICRlbCA9ICR0YXJnZXQ7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICghJGVsLmlzKCcucXVpY2tWaWV3JykgJiYgJGVsLmxlbmd0aCA+IDAgJiYgaSsrIDwgMjApIHtcbiAgICAgICAgICAgICAgICAgICAgaCArPSAkZWwucG9zaXRpb24oKS50b3A7XG4gICAgICAgICAgICAgICAgICAgICRlbCA9ICRlbC5vZmZzZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcXVpY2tWaWV3LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGggLSA1MCxcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJHRhcmdldC5vZmZzZXQoKS50b3AgLSA1MCxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgc3RpY2t5IGhlYWRlciB3aGlsZSBzY3JvbGxpbmcgdG8gdGhlIHRhYiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzdW1lU3RpY2t5SGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdfc2tpcENoZWNrU2Nyb2xsVXBTdGlja3lIZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+ICQoJ2h0bWwsIGJvZHknKS5jbGVhclF1ZXVlKCksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc3VtZVN0aWNreUhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bWVTdGlja3lIZWFkZXIgPSBzZXRUaW1lb3V0KCgpID0+ICRib2R5LnJlbW92ZUNsYXNzKCdfc2tpcENoZWNrU2Nyb2xsVXBTdGlja3lIZWFkZXInKSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gLnRhYicsIHRoaXMuJHNjb3BlKVxuICAgICAgICAgICAgLm9uKCdvcGVuZWQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9WaWV3KCQoZXZlbnQudGFyZ2V0KS5maW5kKCdhJykuZ2V0KDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdEdvVG9UYWIoKSB7XG4gICAgICAgICQoJ1tkYXRhLWdvdG90YWJdJywgdGhpcy4kc2NvcGUpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gJGVsLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC10YWJdJykuZmluZChgYVtocmVmPVwiJHtocmVmfVwiYCkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSB0aGlzLiRzY29wZS5maW5kKGhyZWYpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wKCR0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICAgICAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gICAgICovXG4gICAgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzID8gY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0IDogJChgbGFiZWxbZm9yPSR7Y2hlY2tlZC5pZH1dYCkuZmlyc3QoKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHMgPyBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXSA6ICQoYGxhYmVsW2Zvcj0ke2NoZWNrZWQuaWR9XWApLmNoaWxkcmVuKCkuZ2V0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPSR7SlNPTi5zdHJpbmdpZnkocHJvZHVjdE5hbWUpfV1gKTsgLy8gRml4ZWQgYnkgUGFwYVRoZW1lc1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRidXlOb3c6ICQoJyNmb3JtLWFjdGlvbi1idXlOb3cnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCwgI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydFN0aWNreScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2ssIC5wcm9kdWN0Vmlldy1pbmZvLW5hbWUtLXN0b2NrLCAucHJvZHVjdFZpZXctaW5mby12YWx1ZS0tc3RvY2snLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGVkaXRlZFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRiYWRnZTogJCgnLnByb2R1Y3RWaWV3LXN0b2NrTGFiZWwnLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1wbjoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQubXBuLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHNhbGVDb3VudGRvd246IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJvZHVjdFZpZXctc2FsZUNvdW50JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhblNhbGU6ICQoJy5fbGFiZWxUaW1lX190aXRsZSAuX3ByaWNlU2FsZScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByb2R1Y3RWaWV3LXNhbGVMYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcm9kdWN0Vmlldy1zYWxlTGFiZWwgLl9wcmljZVNhbGUnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQ6IGRpc3BsYXkgc2VsZWN0ZWQgc3dhdGNoIHRpdGxlXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5kYXRhKCdwcm9kdWN0QXR0cmlidXRlTGFiZWwnKSkge1xuICAgICAgICAgICAgJGNoYW5nZWRPcHRpb25cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgLmh0bWwoJGNoYW5nZWRPcHRpb24uZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsIHN1cGVybWFya2V0U2VyaWFsaXplKCRmb3JtKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGltYWdlKSkge1xuICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQuem9vbV9zaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC5wcm9kdWN0X3NpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdGhpcy5jb250ZXh0LnByb2R1Y3RfaW1hZ2VfcmVzcG9uc2l2ZSA/IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhKSA6ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XG4gICAgICAgICAgICAgICAgLy8gbWFpbkltYWdlVXJsOiBgJHttYWluSW1hZ2VVcmx9P2ltYnlwYXNzPW9uYCxcbiAgICAgICAgICAgICAgICAvLyB6b29tSW1hZ2VVcmw6IGAke3pvb21JbWFnZVVybH0/aW1ieXBhc3M9b25gLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1pbiBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSAtIDEpID49IHF1YW50aXR5TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2hhbmdlJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAocXR5IDw9IDAgfHwgIXF0eSkge1xuICAgICAgICAgICAgICAgIHF0eSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBHaWFvIC0gc3VwZXJtYXJrZXQ6XG4gICAgICAgIC8vIEZpeCBwcm9ibGVtIHdoZW4gZW50ZXIgb24gcXVhbnRpdHkgYm94IHdvbid0IGRlY3JlYXNlIDEgdW5pdFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSkucXVhbnRpdHkuJGlucHV0Lm9uKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWNoaWFyYSBhZGRlZCBmb3IgYWxzby1ib3VnaHRcbiAgICBhZGRQcm9kdWN0VG9DYXJ0QXN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcbiAgICAgICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0LCAjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0U3RpY2t5JywgdGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLmh0bWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLmh0bWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIGFzeW5jIChlcnIsIHJlc3BvbnNlKSA9PiB7IC8vIEFsc29Cb3VnaHQgTW9kXG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAuaHRtbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKFtlcnIsIHJlc3BvbnNlXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQsICNmb3JtLWFjdGlvbi1hZGRUb0NhcnRTdGlja3knLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4uaHRtbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC5odG1sKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIGFzeW5jIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmNhcnRfaWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC5odG1sKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0OiBTdXBwb3J0IHJlZGlyZWN0IHRvIGNhcnQgcGFnZSBhZnRlciBhZGRlZCB0byBjYXJ0XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnJlZGlyZWN0X2NhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGlhcmFcbiAgICAgICAgICAgIGlmIChmb3JtLmFjdGlvbi52YWx1ZSA9PT0gJ2J1eScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8odGhpcy5jb250ZXh0LnVybHMuY2hlY2tvdXQuc2luZ2xlX2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcGFwYXRoZW1lcy1pbmhlYWx0aDogU2hvdyBjYXJ0IHByZXZpZXcgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHF1aWNrLXZpZXcgbW9kYWxcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbkNhcnRQcmV2aWV3KHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBlcm1hcmtldCBPQlBTIE1vZFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwICE9PSAnaGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlLCB0ZW1wbGF0ZSA9ICdjYXJ0L3ByZXZpZXcnKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSwgdGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5TW9kYWxBdXRvQ2xvc2UobW9kYWwpOyAvLyBTdXBlcm1hcmtldFxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UHJpY2UgPSAkKCdbZGF0YS1jYXJ0LXByaWNlXScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9ICRjYXJ0UHJpY2UuZGF0YSgnY2FydFByaWNlJykgfHwgMDtcblxuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIFtxdWFudGl0eSwgcHJpY2VdKTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3VwZXJtYXJrZXQgLSBPQlBTIE1vZFxuICAgICAgICAgICAgLy8gc2hha2UoJCgnLm5hdlVzZXItaXRlbS0tY2FydCA+IC5uYXZVc2VyLWFjdGlvbicpKTtcbiAgICAgICAgfSwgdGVtcGxhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScsIHRoaXMuJHNjb3BlKTsgLy8gUGFwYXRoZW1lcyBmaXggbWlzc2luZyAkc2NvcGVcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXggfHwgcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5hZGRDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKCgocHJpY2UucnJwX3dpdGhfdGF4ID8gcHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlIDogcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgudmFsdWUpIC0gcHJpY2Uud2l0aF90YXgudmFsdWUpIC8gKHByaWNlLnJycF93aXRoX3RheCA/IHByaWNlLnJycF93aXRoX3RheC52YWx1ZSA6IHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSkgKiAxMDApO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRzcGFuU2FsZS50ZXh0KGAke3NhbGVQZXJjZW50fSVgKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2FsZUxhYmVsLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlTGFiZWwuJHNwYW4udGV4dChgJHtzYWxlUGVyY2VudH0lYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4LnJlbW92ZUNsYXNzKCdfaGFzU2FsZScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlQ291bnRkb3duLiRkaXYuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlTGFiZWwuJGRpdi5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcblxuICAgICAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCB8fCBwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4LmFkZENsYXNzKCdfaGFzU2FsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoKChwcmljZS5ycnBfd2l0aG91dF90YXggPyBwcmljZS5ycnBfd2l0aG91dF90YXgudmFsdWUgOiBwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgLSBwcmljZS53aXRob3V0X3RheC52YWx1ZSkgLyAocHJpY2UucnJwX3dpdGhvdXRfdGF4ID8gcHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlIDogcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWUpKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVDb3VudGRvd24uJGRpdi5zaG93KCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVDb3VudGRvd24uJHNwYW5TYWxlLnRleHQoYCR7c2FsZVBlcmNlbnR9JWApO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zYWxlTGFiZWwuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVMYWJlbC4kc3Bhbi50ZXh0KGAke3NhbGVQZXJjZW50fSVgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXgucmVtb3ZlQ2xhc3MoJ19oYXNTYWxlJyk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVDb3VudGRvd24uJGRpdi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnNhbGVMYWJlbC4kZGl2LmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBNUE4gaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLm1wbikge1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kdmFsdWUudGV4dChkYXRhLm1wbik7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlld01vZGVsLm1wbi4kdmFsdWUuZGF0YSgnb3JpZ2luYWxNcG4nKSkge1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kdmFsdWUudGV4dCh2aWV3TW9kZWwubXBuLiR2YWx1ZS5kYXRhKCdvcmlnaW5hbE1wbicpKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgXy5pc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcblxuICAgICAgICAgICAgLy8gbW9vbmNhdDogc2hvdyBsb3cgc3RvY2sgc3RhdHVzXG4gICAgICAgICAgICBpZiAoZGF0YS5sb3dfc3RvY2sgJiYgZGF0YS5zdG9jayA8IGRhdGEubG93X3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ19sb3dTdG9jaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnX2xvd1N0b2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeTogc2hvdyAvIGhpZGUgc3RvY2sgYmFkZ2VcbiAgICAgICAgaWYgKGRhdGEuaW5zdG9jayAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGJhZGdlLnJlbW92ZUNsYXNzKCdfb3V0c3RvY2snKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICQoZWwpLnRleHQoJChlbCkuZGF0YSgnaW5zdG9ja01lc3NhZ2UnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHZpZXdNb2RlbC5zdG9jay4kYmFkZ2UuYWRkQ2xhc3MoJ19vdXRzdG9jaycpLnRleHQoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kYmFkZ2UuYWRkQ2xhc3MoJ19vdXRzdG9jaycpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgJChlbCkudGV4dCgkKGVsKS5kYXRhKCdvdXRzdG9ja01lc3NhZ2UnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XG5cbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMgJiYgY29udGVudCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLl9hZGRUb0NhcnRWaXNpYmlsaXR5JykuZmlsdGVyKCc6aGlkZGVuJykuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnI2Zvcm0tYWN0aW9uLWJ1eU5vdycpLmZpbHRlcignOmhpZGRlbicpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5fYWRkVG9DYXJ0VmlzaWJpbGl0eScpLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNmb3JtLWFjdGlvbi1idXlOb3cnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWtpdGNoZW5hcnk6IGRpc3BhdGNoIGV2ZW50IGZvciBhbHNvLWJvdWdodFxuICAgICAgICB0aGlzLiRzY29wZS50cmlnZ2VyKCdwcm9kdWN0LXZpZXctdXBkYXRlJywgW2RhdGFdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1eU5vdy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpOyAvLyBwYXBhdGhlbWVzLWNoaWFyYVxuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnV5Tm93LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpOyAvLyBwYXBhdGhlbWVzLWNoaWFyYVxuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgZWRpdGVkIGZvciBhbHNvLWJvdWdodFxuICAgICAgICB0aGlzLnByaWNlID0gZGF0YS5wcmljZTtcbiAgICAgICAgdGhpcy4kc2NvcGUudHJpZ2dlcigncHJpY2UtY2hhbmdlJyk7XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdEltYWdlKGRhdGEuaW1hZ2UpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS50cmlnZ2VyKCd1cGRhdGVQcm9kdWN0QXR0cmlidXRlcycpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGZvciBkcm9wZG93bi1zd2F0Y2hlc1xuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjdXN0b20gdGFicyBieSBwYXJzaW5nIHByb2R1Y3QgZGVzY3JpcHRpb25cbiAgICAgKiAoQWRkZWQgYnkgUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0KVxuICAgICAqL1xuICAgIGluaXRDdXN0b21UYWJzKCkge1xuICAgICAgICBjb25zdCAkY3VzdG9tVGFicyA9ICQoJ1tkYXRhLWN1c3RvbS10YWJdJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoJGN1c3RvbVRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkdGFicyA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiA+IC50YWJzJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCAkdGFic0NvbnRlbnQgPSAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24nLCB0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgaWYgKCR0YWJzLmxlbmd0aCA9PT0gMCB8fCAkdGFic0NvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkY3VzdG9tVGFicy5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCAkdGl0bGUgPSAkZWwuZmluZCgnW2RhdGEtY3VzdG9tLXRhYi10aXRsZV0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gJHRpdGxlLmh0bWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHR4dFRpdGxlID0gJHRpdGxlLnRleHQoKTtcblxuICAgICAgICAgICAgbGV0IGV4cGFuZCA9ICR0aXRsZS5kYXRhKCdleHBhbmQnKTtcblxuICAgICAgICAgICAgaWYgKCFleHBhbmQpIHtcbiAgICAgICAgICAgICAgICBleHBhbmQgPSAnVmlldyBBbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2xvc2UgPSAkdGl0bGUuZGF0YSgnY2xvc2UnKTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlID0gJ0Nsb3NlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRpdGxlLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gJGVsLmh0bWwoKTtcblxuICAgICAgICAgICAgJGVsLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkdGFicy5jaGlsZHJlbigpLmFwcGVuZChgPGxpIGNsYXNzPVwidGFiIHRhYi0tY3VzdG9tIHRhYi0tY3VzdG9tLSR7aX1cIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgY2xhc3M9XCJ0YWItdGl0bGVcIiBocmVmPVwiI3RhYi1jdXN0b20tJHtpfVwiIHJvbGU9XCJ0YWJcIj4ke3RpdGxlfTwvYT48L2xpPmApO1xuICAgICAgICAgICAgJHRhYnNDb250ZW50LmFwcGVuZChgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHRhYi1jb250ZW50LS1jdXN0b20gdGFiLWNvbnRlbnQtLWN1c3RvbS0ke2l9XCIgaWQ9XCJ0YWItY3VzdG9tLSR7aX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsPVwiJHt0eHRUaXRsZX1cIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGEgY2xhc3M9XCJwcm9kdWN0Vmlldy1kZXNjcmlwdGlvbi10YWJIZWFkaW5nXCIgZGF0YS10YWItbW9iaWxlIGhyZWY9XCIjdGFiLWN1c3RvbS0ke2l9XCI+JHt0aXRsZX08c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLXByb2R1Y3QtdGFiLWFycm93XCI+PC9zdmc+PC9hPjxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1kZXNjcmlwdGlvbi10YWJDb250ZW50XCI+JHtjb250ZW50fTwvZGl2PjwvZGl2PjwvZGl2PmApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VGFic0FEQSgpIHtcbiAgICAgICAgLy8gQ2xpY2sgcHJvZHVjdCB0YWIgaW4gVGFibGV0IC0gRGVza3RvcFxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXRhYl0gLnRhYicpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZENvbnRlbnQgPSAkZWwuZmluZCgnLnRhYi10aXRsZScpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0VGFiID0gJGVsLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtdGFiXScpO1xuICAgICAgICAgICAgJGVsLnBhcmVudCgpLmZpbmQoJy50YWInKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkZWwucGFyZW50KCkuZmluZCgnLnRhYi10aXRsZScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkcHJvZHVjdFRhYi5maW5kKCcudGFiLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkZWwuZmluZCgnLnRhYi10aXRsZScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICRwcm9kdWN0VGFiLmZpbmQoYCR7aWRDb250ZW50fWApXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2sgcHJvZHVjdCB0YWIgaW4gTW9iaWxlXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtdGFiXSBbZGF0YS10YWItbW9iaWxlXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAkZWwudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICRlbC5zaWJsaW5ncygnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uLXRhYkNvbnRlbnQnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJGVsLmNsb3Nlc3QoJy50YWItY29udGVudCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJGVsLmNsb3Nlc3QoJy50YWItY29udGVudCcpLmF0dHIoJ2FyaWEtaGlkZGVuJykgPT09ICdmYWxzZScgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlVGFicyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzbWFsbE1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcHJvZHVjdCB0YWIgLSBNb2JpbGUgdG8gVGFibGV0XG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRlZmF1bHQgYXR0cmlidXRlLCBjbGFzc1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtdGFiXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLnRhYicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCd0YWItdGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy50YWItY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHByb2R1Y3QgdGFiIC0gVGFibGV0IHRvIE1vYmlsZVxuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtdGFiXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnW2RhdGEtdGFiLW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uLXRhYkNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLnRhYi1jb250ZW50JykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJykuZmluZCgnW2RhdGEtdGFiLW1vYmlsZV0nKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLmZpbmQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbi10YWJDb250ZW50JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSGFuZGxlIHByb2R1Y3QgdGFiIHdoZW4gY2hhbmdlIGRpdmljZVxuICAgICAgICBzbWFsbE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHVwZGF0ZVRhYnMpO1xuICAgICAgICB1cGRhdGVUYWJzKCk7XG4gICAgfVxuXG4gICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgb25NaW5pUHJldmlld01vZGFsT3BlbigpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtYWN0aXZlTW9kYWwtLW1pbmlQcmV2aWV3Jyk7XG4gICAgfVxuXG4gICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgb25NaW5pUHJldmlld01vZGFsQ2xvc2UoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLWFjdGl2ZU1vZGFsLS1taW5pUHJldmlldycpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b0Nsb3NlVGltZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuYXV0b0Nsb3NlVGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuYXV0b0Nsb3NlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICBhcHBseU1vZGFsQXV0b0Nsb3NlKG1vZGFsKSB7XG4gICAgICAgIGNvbnN0ICRhdXRvQ2xvc2VFbCA9IG1vZGFsLiRtb2RhbC5maW5kKCdbZGF0YS1hdXRvLWNsb3NlXScpO1xuICAgICAgICBpZiAoJGF1dG9DbG9zZUVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzZWMgPSAkYXV0b0Nsb3NlRWwuZGF0YSgnYXV0b0Nsb3NlJykgfHwgNTtcbiAgICAgICAgICAgIGNvbnN0ICRjb3VudCA9ICRhdXRvQ2xvc2VFbC5maW5kKCcuY291bnQnKTtcbiAgICAgICAgICAgICRjb3VudC5odG1sKHNlYyk7XG5cbiAgICAgICAgICAgIG1vZGFsLmF1dG9DbG9zZVRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIGlmIChzZWMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYy0tO1xuICAgICAgICAgICAgICAgICAgICAkY291bnQuaHRtbChzZWMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG1vZGFsLmF1dG9DbG9zZVRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuYXV0b0Nsb3NlVGltZXIgPSBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlcklFID0gISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0SW50b0FycmF5ID0gY29sbGVjdGlvbiA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcbiIsImNvbnN0IGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzID0gKHdpc2hsaXN0VXJsLCAuLi5wYWdpbmF0aW9uSXRlbXMpID0+ICQuZWFjaChwYWdpbmF0aW9uSXRlbXMsIChfLCAkaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBhZ2luYXRpb25MaW5rID0gJGl0ZW0uY2hpbGRyZW4oJy5wYWdpbmF0aW9uLWxpbmsnKTtcblxuICAgIGlmICgkaXRlbS5sZW5ndGggJiYgIXBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKS5pbmNsdWRlcygncGFnZT0nKSkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJywgYCR7d2lzaGxpc3RVcmx9cGFnZT0ke3BhZ2VOdW1iZXJ9YCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogaGVscHMgdG8gd2l0aGRyYXcgZGlmZmVyZW5jZXMgaW4gc3RydWN0dXJlcyBhcm91bmQgdGhlIHN0ZW5jaWwgcmVzb3VyY2UgcGFnaW5hdGlvblxuICovXG5leHBvcnQgY29uc3Qgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgJHBhZ2luYXRpb25MaXN0ID0gJCgnLnBhZ2luYXRpb24tbGlzdCcpO1xuXG4gICAgaWYgKCEkcGFnaW5hdGlvbkxpc3QubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCAkbmV4dEl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCAkcHJldkl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cycsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgY3VycmVudEhyZWYgPSAkKCdbZGF0YS1wYWdpbmF0aW9uLWN1cnJlbnQtcGFnZS1saW5rXScpLmF0dHIoJ2hyZWYnKTtcbiAgICBjb25zdCBwYXJ0aWFsUGFnaW5hdGlvblVybCA9IGN1cnJlbnRIcmVmLnNwbGl0KCdwYWdlPScpLnNoaWZ0KCk7XG5cbiAgICBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyhwYXJ0aWFsUGFnaW5hdGlvblVybCwgJHByZXZJdGVtLCAkbmV4dEl0ZW0pO1xufTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBUEFUSEVNRVMgU0FSQUhNQVJLRVQgQ1VTVE9NSVpBVElPTjpcbi8vIC0gVXNpbmcgc2xpY2sgY2Fyb3VzZWwgZm9yIGltYWdlIHRodW1ibmFpbHMuXG4vLyAtIFVzaW5nIGJhZ3VldHRlQm94IGZvciBpbWFnZSBsaWdodGJveC5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IGJhZ3VldHRlQm94IGZyb20gJ2JhZ3VldHRlYm94JztcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5jb25zdCBzbWFsbE1lZGlhUXVlcnkgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ3NtYWxsJyk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcblxuZnVuY3Rpb24gZml4QURBKCRzbGljaykge1xuICAgICRzbGljay5vbignaW5pdCBhZnRlckNoYW5nZScsIChfZSwgc2xpY2spID0+IHtcbiAgICAgICAgY29uc3QgJHNsaWRlID0gc2xpY2suJGxpc3QuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICRzbGlkZS5ub3QoJy5zbGljay1hY3RpdmUnKS5maW5kKCdhLCBidXR0b24nKS5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAkc2xpZGUuZmlsdGVyKCcuc2xpY2stYWN0aXZlJykuZmluZCgnYSwgYnV0dG9uJykuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuICAgIH0pO1xuXG4gICAgJHNsaWNrLm9uKCdpbml0JywgKF9lLCBzbGljaykgPT4ge1xuICAgICAgICBzbGljay4kbGlzdC5vbigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNsaWNrLiRzbGlkZXMuZmlsdGVyKCcuc2xpY2stY3VycmVudCcpLmZvY3VzKCksIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzbGljay4kc2xpZGVzLmZpbHRlcignLnNsaWNrLWN1cnJlbnQnKS5maW5kKCdhLCBidXR0b24nKS5nZXQoMCkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeSA9ICRnYWxsZXJ5O1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG5hdkNhcm91c2VsID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXZdJykubm90KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW5hdi1kaXNhYmxlLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy4kbmF2RGlzYWJsZUNhcm91c2VsID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXZdW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXYtZGlzYWJsZS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvUGxheWVyID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuXG4gICAgICAgIGNvbnN0ICRkZWZTbGlkZSA9IHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xuICAgICAgICBjb25zdCBkZWZTbGlkZUlkeCA9ICRkZWZTbGlkZS5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4KCRkZWZTbGlkZSk7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0U2xpZGVJbmRleCA9IGRlZlNsaWRlSWR4ID4gLTEgPyBkZWZTbGlkZUlkeCA6IDA7XG5cbiAgICAgICAgY29uc3QgdWlkID0gXy51bmlxdWVJZCgnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmF0dHIoJ2lkJywgYGltYWdlR2FsbGVyeU1haW5DYXJvdXNlbCR7dWlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJG5hdkNhcm91c2VsLmF0dHIoJ2lkJykgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcsIGBpbWFnZUdhbGxlcnlOYXZDYXJvdXNlbCR7dWlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYXZSb3dzID0gcGFyc2VJbnQodGhpcy4kbmF2Q2Fyb3VzZWwuZGF0YSgnaW1hZ2UtZ2FsbGVyeS1uYXYtcm93cycpLCAxMCkgfHwgMTtcbiAgICAgICAgdGhpcy5wbGF5VmlkZW9JbmxpbmUgPSB0aGlzLiRuYXZEaXNhYmxlQ2Fyb3VzZWwubGVuZ3RoID09PSAwICYmIHRoaXMubmF2Um93cyA9PT0gMTtcblxuICAgICAgICB0aGlzLmJhZ3VldHRlQm94T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR2aWRlb1BsYXllci5yZW1vdmVDbGFzcygnX2JiJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeS5yZW1vdmVDbGFzcygnX2JiJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSAodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGdhbGxlcnkuYWRkQ2xhc3MoJ19iYicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR2aWRlb1BsYXllci5hZGRDbGFzcygnX2JiJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvKHVybCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNrID0gdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChzbGljay4kc2xpZGVzW2N1cnJlbnRJbmRleF0pLmZpbmQoJ1tkYXRhLXZpZGVvLWlkXScpXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5VmlkZW8oJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd2aWRlb1VybCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZmlndXJlID0gJCgnI2JhZ3VldHRlQm94LXNsaWRlcicpLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4KS5jaGlsZHJlbignZmlndXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICRmaWd1cmUuaHRtbCgnJykuYXBwZW5kKCRhKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVZpZGVvKCRhLmRhdGEoJ3ZpZGVvVXJsJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZnRlckhpZGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BWaWRlbygpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHZpZGVvUGxheWVyLnJlbW92ZUNsYXNzKCdfYmInKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5LnJlbW92ZUNsYXNzKCdfYmInKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVWaWRlb0NsaWNrRXZlbnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5VmlkZW9JbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJ1tkYXRhLXZpZGVvLWlkXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjbG9uZSA9ICRlbC5jbG9uZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZWwuYWZ0ZXIoJGNsb25lKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wVmlkZW8oKSB7XG4gICAgICAgIGNvbnN0ICRpZnJhbWUgPSB0aGlzLiR2aWRlb1BsYXllci5maW5kKCdpZnJhbWUnKTtcbiAgICAgICAgJGlmcmFtZS5yZXBsYWNlV2l0aCgkaWZyYW1lLmNsb25lKCkuYXR0cignc3JjJywgJycpKTtcbiAgICAgICAgdGhpcy4kdmlkZW9QbGF5ZXIuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBzaG93VmlkZW8oc3JjKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvUGxheWVyLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIGNvbnN0ICRpZnJhbWUgPSB0aGlzLiR2aWRlb1BsYXllci5maW5kKCdpZnJhbWUnKTtcbiAgICAgICAgJGlmcmFtZS5yZXBsYWNlV2l0aCgkaWZyYW1lLmNsb25lKCkuYXR0cignc3JjJywgc3JjKSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IF8uY2xvbmUoaW1nT2JqKTtcblxuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IF8uY2xvbmUodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy4kbmF2Q2Fyb3VzZWwuc2xpY2soJ3NsaWNrQ3VycmVudFNsaWRlJyk7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnc2xpY2stY3VycmVudCBzbGljay1hY3RpdmUnKS5lcShpKS5hZGRDbGFzcygnc2xpY2stY3VycmVudCBzbGljay1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKHtcbiAgICAgICAgaWdub3JlQmFndWV0dGVCb3ggPSBmYWxzZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgLypcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5zbGljaygnc2xpY2tHb1RvJywgdGhpcy5jdXJyZW50U2xpZGVJbmRleCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stc2xpZGUnKS5lcSh0aGlzLmRlZmF1bHRTbGlkZUluZGV4KS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEodGhpcy5kZWZhdWx0U2xpZGVJbmRleCkuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JywgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0KTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKHRoaXMuZGVmYXVsdFNsaWRlSW5kZXgpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJywgdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsKTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdzbGlja0dvVG8nLCB0aGlzLmRlZmF1bHRTbGlkZUluZGV4KTtcblxuICAgICAgICBpZiAoIWlnbm9yZUJhZ3VldHRlQm94KSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBsaWdodGJveCBjb250ZW50cyBvZiBjdXJyZW50IGdhbGxleSBzbyB0aGF0IGl0IHdpbGwgYmUgY3JlYXRlZCBhZ2FpblxuICAgICAgICAgICAgJCgnI2JhZ3VldHRlQm94LXNsaWRlcicpLmh0bWwoJycpO1xuICAgICAgICAgICAgdGhpcy5pbml0QmFndWV0dGVCb3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGZpeEFEQSh0aGlzLiRtYWluQ2Fyb3VzZWwpO1xuXG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbFxuICAgICAgICAgICAgLm9uKCdpbml0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbWcgPSAkKGBbZGF0YS1zbGljay1pbmRleD1cIiR7dGhpcy5kZWZhdWx0U2xpZGVJbmRleH1cIl0gaW1nYCwgdGhpcy4kbWFpbkNhcm91c2VsKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICRpbWcuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogJGEuZGF0YSgnb3JpZ2luYWxJbWcnKSB8fCAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsWm9vbScpLFxuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICRhLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdiZWZvcmVDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgb25OYXZDYXJvdXNlbFNldFBvc2l0aW9uKGV2ZW50LCBzbGljayk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdhZnRlckNoYW5nZScsIChldmVudCwgc2xpY2spID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgICAgICBvbk5hdkNhcm91c2VsU2V0UG9zaXRpb24oZXZlbnQsIHNsaWNrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiB0aGlzLmRlZmF1bHRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLiRuYXZDYXJvdXNlbC5sZW5ndGggPiAwICYmIHRoaXMubmF2Um93cyA9PT0gMSA/IGAjJHt0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbk5hdkNhcm91c2VsU2V0UG9zaXRpb24gPSAoZXZlbnQsIHNsaWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNsaWNrKSByZXR1cm47XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdyA+PSBzbGljay5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmZpbmQoJy5zbGljay10cmFjaycpLmNzcygndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNsaWNrLnNsaWRlQ291bnQgPD0gc2xpZGVzVG9TaG93RGVza3RvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5maW5kKCcuc2xpY2stdHJhY2snKS5jc3MoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uTmF2Q2Fyb3VzZWxJbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykub24oJ2tleXByZXNzJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAxMyB8fCBrZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuc2xpY2soJ3NsaWNrR29UbycsICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdzbGlja0luZGV4JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uTmF2Q2Fyb3VzZWxTd2lwZSA9IChfZXZlbnQsIHNsaWNrLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcgJiYgc2xpY2suY3VycmVudFNsaWRlIDw9IHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgc2xpY2suc2xpY2tHb1RvKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZpeEFEQSh0aGlzLiRuYXZDYXJvdXNlbCk7XG5cbiAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxDbG9uZSA9IHRoaXMuJG5hdkNhcm91c2VsLmNsb25lKGZhbHNlKTtcblxuICAgICAgICBjb25zdCBuYXZDb2wgPSBwYXJzZUludCh0aGlzLiRuYXZDYXJvdXNlbC5kYXRhKCdpbWFnZS1nYWxsZXJ5LW5hdi1zbGlkZXMnKSwgMTApO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlc1RvU2hvd0Rlc2t0b3AgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIG5hdkNvbCxcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmNoaWxkcmVuKCkubGVuZ3RoLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlc1RvU2hvd01vYmlsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgbmF2Q29sICogdGhpcy5uYXZSb3dzLFxuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGgsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaW5pdE5hdkNhcm91c2VsID0gKGRlc2t0b3AgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kbmF2Q2Fyb3VzZWwuaXMoJy5zbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmJlZm9yZSh0aGlzLiRuYXZDYXJvdXNlbENsb25lKTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwgPSB0aGlzLiRuYXZDYXJvdXNlbENsb25lO1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwub24oJ3NldFBvc2l0aW9uJywgb25OYXZDYXJvdXNlbFNldFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLm9uKCdpbml0Jywgb25OYXZDYXJvdXNlbEluaXQpO1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwub24oJ3N3aXBlJywgb25OYXZDYXJvdXNlbFN3aXBlKTtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsQ2xvbmUgPSB0aGlzLiRuYXZDYXJvdXNlbC5jbG9uZShmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRuYXZDYXJvdXNlbC5pcygnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXYtaG9yaXpvbnRhbF0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZml4TmF2Q0xTKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVza3RvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvd0Rlc2t0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6ICh0aGlzLiRuYXZDYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCA+IG5hdkNvbCAmJiB0aGlzLm5hdlJvd3MgPT09IDEpID8gMSA6IHNsaWRlc1RvU2hvd0Rlc2t0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5kZWZhdWx0U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy5uYXZSb3dzID09PSAxID8gYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdGhpcy5uYXZSb3dzICE9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLiRuYXZDYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCA+IG5hdkNvbCA/IHRoaXMubmF2Um93cyA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogc2xpZGVzVG9TaG93TW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNUb1Nob3dNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5kZWZhdWx0U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy5uYXZSb3dzID09PSAxID8gYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lbHktaWZcbiAgICAgICAgICAgICAgICBpZiAoZGVza3RvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvd0Rlc2t0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6ICh0aGlzLiRuYXZDYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCA+IG5hdkNvbCAmJiB0aGlzLm5hdlJvd3MgPT09IDEpID8gMSA6IHNsaWRlc1RvU2hvd0Rlc2t0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5kZWZhdWx0U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy5uYXZSb3dzID09PSAxID8gYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdGhpcy5uYXZSb3dzICE9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0aGlzLm5hdlJvd3MgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0aGlzLm5hdlJvd3MgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdGhpcy5uYXZSb3dzID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy4kbmF2Q2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGggPiBuYXZDb2wgPyB0aGlzLm5hdlJvd3MgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3dNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5kZWZhdWx0U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy5uYXZSb3dzID09PSAxID8gYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdGhpcy5uYXZSb3dzID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmVhY2goKGksIGVsKSA9PiBiYWd1ZXR0ZUJveC5ydW4oYCMke2VsLmlkfWAsIHsgLi4udGhpcy5iYWd1ZXR0ZUJveE9wdGlvbnMgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluaXROYXZDYXJvdXNlbChzbWFsbE1lZGlhUXVlcnkubWF0Y2hlcyk7XG5cbiAgICAgICAgc21hbGxNZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIGluaXROYXZDYXJvdXNlbChzbWFsbE1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdEJhZ3VldHRlQm94KCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gcGxheSB2aWRlbyBpbmxpbmUgaWYgbm90IGRpc2FibGUgbmF2IGNhcm91c2VsIGlzIGVuYWJsZWQgYW5kIG5hdiByb3dzID0gMVxuICAgICAgICAvL1xuICAgICAgICBpZiAodGhpcy5wbGF5VmlkZW9JbmxpbmUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9uVmlkZW9DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8oJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd2aWRlb1VybCcpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwub24oJ2NsaWNrJywgJ1tkYXRhLXZpZGVvLWlkXScsIG9uVmlkZW9DbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0QmFndWV0dGVCb3goKSB7XG4gICAgICAgIGJhZ3VldHRlQm94LnJ1bihgIyR7dGhpcy4kbWFpbkNhcm91c2VsLmF0dHIoJ2lkJyl9YCwgeyAuLi50aGlzLmJhZ3VldHRlQm94T3B0aW9ucyB9KTtcbiAgICAgICAgdGhpcy4kbmF2RGlzYWJsZUNhcm91c2VsLmVhY2goKGksIGVsKSA9PiBiYWd1ZXR0ZUJveC5ydW4oYCMke2VsLmlkfWAsIHsgLi4udGhpcy5iYWd1ZXR0ZUJveE9wdGlvbnMgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm5hdlJvd3MgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5lYWNoKChpLCBlbCkgPT4gYmFndWV0dGVCb3gucnVuKGAjJHtlbC5pZH1gLCB7IC4uLnRoaXMuYmFndWV0dGVCb3hPcHRpb25zIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmFndWV0dGVCb3hPcHRpb25zLnJlbW92ZVZpZGVvQ2xpY2tFdmVudCgpO1xuICAgIH1cblxuICAgIC8vIEZpeCBDTFMgaXNzdWUgZm9yIG5hdiBjYXJvdXNlbFxuICAgIGZpeE5hdkNMUygpIHtcbiAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuY3NzKCdoZWlnaHQnLCB0aGlzLiRuYXZDYXJvdXNlbC5vdXRlckhlaWdodCgpKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uZSgncmVzaXplJywgKCkgPT4gdGhpcy4kbmF2Q2Fyb3VzZWwuY3NzKCdoZWlnaHQnLCAnJykpO1xuXG4gICAgICAgIGlmICghdGhpcy5maXhlZE5hdkhlaWdodEZpcnN0TG9hZCkge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuY3NzKCdoZWlnaHQnLCB0aGlzLiRuYXZDYXJvdXNlbC5vdXRlckhlaWdodCgpKTtcbiAgICAgICAgICAgIHRoaXMuZml4ZWROYXZIZWlnaHRGaXJzdExvYWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2hMaXN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvdW50L2FkZC13aXNobGlzdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvbmZpcm0gYm94IGJlZm9yZSBkZWxldGluZyBhbGwgd2lzaCBsaXN0c1xuICAgICAqL1xuICAgIHdpc2hsaXN0RGVsZXRlQ29uZmlybSgpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS13aXNobGlzdC1kZWxldGVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaGxpc3RGb3JtKSB7XG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJXaXNobGlzdE5hbWVFcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aXNobGlzdFBhZ2luYXRvckhlbHBlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNoTGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aXNobGlzdERlbGV0ZUNvbmZpcm0oKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIlByb2R1Y3REZXRhaWxzIiwic2Nyb2xsVG9FbGVtZW50IiwiY3VycmVuY3lGb3JtYXQiLCJleHRyYWN0TW9uZXkiLCJvcGVuQ2FydFByZXZpZXciLCJkZWZhdWx0TW9kYWwiLCJNdXN0YWNoZSIsIlN3YWwiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicHJvbWlzZVNlcmlhbCIsImZ1bmNzIiwicmVkdWNlIiwicHJvbWlzZSIsImZ1bmMiLCJ0aGVuIiwicmVzdWx0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJiaW5kIiwicmVwb3J0Rm9ybVZhbGlkaXR5IiwiZm9ybSIsInZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiQWxzb0JvdWdodCIsInBhcmVudFByb2R1Y3REZXRhaWxzIiwidGh1bWJuYWlsVGVtcGxhdGUiLCJwcm9kdWN0RGV0YWlsc1RlbXBsYXRlIiwicHJpY2VUZW1wbGF0ZSIsInByaWNlUmFuZ2VUZW1wbGF0ZSIsInRheExhYmVsVGVtcGxhdGUiLCJyZXRhaWxQcmljZVJhbmdlVGVtcGxhdGUiLCJyZXRhaWxQcmljZVRlbXBsYXRlIiwibG9naW5QcmljZVRlbXBsYXRlIiwib3B0aW9uc1RvZ2dsZVRlbXBsYXRlIiwic2ltcGxlRm9ybVRlbXBsYXRlIiwibG9hZGluZ1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwicmF0aW5nU3Rhckh0bWxGdW5jIiwiaXNGdWxsIiwiY3VzdG9tQmFkZ2VUZW1wbGF0ZSIsInZhbHVlIiwic2hvd1Byb2R1Y3RSYXRpbmciLCJwcm9kdWN0X3NhbGVfYmFkZ2VzIiwicHJvZHVjdF9zYWxlX2xhYmVsIiwiY29udGV4dCIsIm51bWJlclRleHRzIiwidHh0QWxzb0JvdWdodE51bWJlckFycmF5Iiwic3BsaXQiLCJhbGxOdW1iZXJUZXh0cyIsInR4dEFsc29Cb3VnaHRBbGxOdW1iZXJBcnJheSIsIiRhbHNvQm91Z2h0RWwiLCIkIiwiJHByb2R1Y3RWaWV3U2NvcGUiLCJjb25maWciLCJkYXRhIiwibW9uZXlXaXRoVGF4Iiwic2FtcGxlUHJpY2VXaXRoVGF4IiwibW9uZXkiLCJtb25leVdpdGhvdXRUYXgiLCJzYW1wbGVQcmljZVdpdGhvdXRUYXgiLCJtb25leUZhbGxiYWNrIiwiYWN0aXZlQ3VycmVuY3lDb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImdldCIsIl9tb25leSIsImVsIiwidGV4dCIsImN1cnJlbmN5X3Rva2VuIiwicHJvZHVjdHMiLCJwcm9kdWN0Tm9kZXMiLCJvbkFkZEFsbEJ1dHRvbkNsaWNrIiwib25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrIiwidGh1bWJTaXplIiwiYWxzb2JvdWdodF90aHVtYm5haWxfc2l6ZSIsInRodW1ibmFpbFdpZHRoIiwiTnVtYmVyIiwidGh1bWJuYWlsSGVpZ2h0IiwicmV0cmlldmVBbHNvQm91Z2h0UHJvZHVjdHMiLCJsaXN0ZW5RdWFudGl0eUFsc29Cb3VnaHRDaGFuZ2UiLCJoYW5kbGVDbGlja09wdGlvbnMiLCJvbiIsImluY2x1ZGVUYXgiLCIkdGh1bWJuYWlscyIsIiRwcm9kdWN0RWxzIiwibm90IiwicHJvZHVjdElkcyIsIm1hcCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYWpheCIsInVybCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcXVpcmVMb2dpbiIsInZhcmlhYmxlcyIsInByb2R1Y3RzQ291bnQiLCJjdXJyZW5jeUNvZGUiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ3JhcGhRTFRva2VuIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic3VjY2VzcyIsInJlc3AiLCJ0eHRPdXRPZlN0b2NrIiwic2l0ZSIsInNldHRpbmdzIiwiaW52ZW50b3J5IiwiZGVmYXVsdE91dE9mU3RvY2tNZXNzYWdlIiwiZWRnZXMiLCJmb3JFYWNoIiwibm9kZSIsInB1c2giLCJpZCIsImVudGl0eUlkIiwibmFtZSIsInBhdGgiLCJhZGRUb0NhcnRVcmwiLCJxdHkiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwibG9hZGluZ0ltZyIsImltZyIsImRlZmF1bHRJbWFnZSIsImRlZmF1bHRQcm9kdWN0SW1hZ2UiLCIkcHJvZHVjdEVsIiwiZmlsdGVyIiwidGF4Q2xhc3NQcmVmaXgiLCJ0YXhEYXRhUHJlZml4IiwicHJpY2VMYWJlbCIsInBkcF9wcmljZV9sYWJlbCIsInNhbGVQcmljZUxhYmVsIiwicGRwX3NhbGVfcHJpY2VfbGFiZWwiLCJub25TYWxlUHJpY2VMYWJlbCIsInBkcF9ub25fc2FsZV9wcmljZV9sYWJlbCIsInJldGFpbFByaWNlTGFiZWwiLCJwZHBfcmV0YWlsX3ByaWNlX2xhYmVsIiwiY2hvb3NlT3B0aW9uc1R4dCIsInR4dFF1YW50aXR5IiwicXVhbnRpdHlEZWNyZWFzZVR4dCIsInR4dFF1YW50aXR5RGVjcmVhc2UiLCJyZXBsYWNlIiwicXVhbnRpdHlJbmNyZWFzZVR4dCIsInR4dFF1YW50aXR5SW5jcmVhc2UiLCJtYXhQdXJjaGFzZVF1YW50aXR5IiwibG9naW5Gb3JQcmljZVR4dCIsImxvZ2luVXJsIiwiY2hlY2tlZCIsImFsc29ib3VnaHRfY2hlY2tlZCIsInNob3dSYXRpbmdIdG1sIiwiYXZhaWxhYmxlIiwiYXZhaWxhYmlsaXR5VjIiLCJzdGF0dXMiLCJtZXNzYWdlIiwidHh0VW5hdmFpbGFibGUiLCJwcmVPcmRlciIsInR4dFByZU9yZGVyIiwib3V0T2ZTdG9jayIsImlzSW5TdG9jayIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2FiaWxpdHkiLCJob3ZlclByb2R1Y3RJbWFnZSIsImltYWdlcyIsImltYWdlIiwiZmluZCIsImltZ0hvdmVyIiwiaXNEZWZhdWx0IiwiZXIiLCJob3ZlckltYWdlIiwicmF0aW5nSHRtbCIsInJhdGluZyIsImZyb20iLCJrZXlzIiwiaSIsImpvaW4iLCJzYWxlQmFkZ2UiLCJwcmljZXMiLCJzYWxlUHJpY2UiLCJiYXNlUHJpY2UiLCJuIiwiTWF0aCIsInJvdW5kIiwicGVyY2VudCIsImluY2x1ZGVzIiwiY3VzdG9tQmFkZ2UiLCJmaWVsZCIsImxpc3QiLCJlIiwicHJpY2UiLCJmb3JtYXR0ZWQiLCJub25TYWxlUHJpY2UiLCJyZXRhaWxQcmljZSIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJyZXRhaWxQcmljZVJhbmdlIiwibG9naW5QcmljZUh0bWwiLCJyZW5kZXIiLCJ0YXhMYWJlbEh0bWwiLCJzaG93VGF4TGFiZWwiLCJ0aXRsZSIsImluY2x1ZGluZ1RheFR4dCIsImV4Y2x1ZGluZ1RheFR4dCIsInByaWNlV2l0aFRheFR4dCIsInByaWNlV2l0aG91dFRheFR4dCIsInJldGFpbFByaWNlUmFuZ2VIdG1sIiwicmV0YWlsUHJpY2VIdG1sIiwicHJpY2VSYW5nZUh0bWwiLCJvcHRpb25zVG9nZ2xlSHRtbCIsInByb2R1Y3RPcHRpb25zIiwicHJpY2VIdG1sIiwiZm9ybUh0bWwiLCJkZXRhaWxzSHRtbCIsInJldmlld1N1bW1hcnkiLCJhdmVyYWdlUmF0aW5nIiwiY3VzdG9tRmllbGRzIiwidGh1bWJuYWlsSHRtbCIsImh0bWwiLCJhcHBlbmQiLCJwcm9kdWN0IiwiZW5hYmxlQWxzb0JvdWdodCIsIiRzY29wZSIsInVwZGF0ZVRvdGFsUHJpY2UiLCIkY29udGV4dCIsIm9uQWxzb0JvdWdodENoZWNrYm94Q2hhbmdlIiwib3BlbiIsIm9uT3B0aW9uc09wZW4iLCJ1cGRhdGVBZGRTZWxlY3RlZFRvQ2FydEJ1dHRvbiIsIiRwYXJlbnRQcm9kdWN0RWwiLCJ2YWwiLCJwcmljZUJ5SWQiLCJfcHJpY2VCeUlkIiwicHJvZHVjdElkIiwicHJvZHVjdFF0eSIsImlucHV0UXR5IiwicXVhbnRpdHkiLCJwYXJzZUludCIsIm1lcmdlUHJvZHVjdCIsIk9iamVjdCIsImtleSIsInRvdGFsIiwiaW5kZXhPZiIsIndpdGhfdGF4Iiwid2l0aG91dF90YXgiLCJtb25leV93aXRoX3RheCIsIm1vbmV5X3dpdGhvdXRfdGF4IiwiJHdpdGhUYXgiLCIkd2l0aG91dFRheCIsInNob3ciLCJoaWRlIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidHJpZ2dlciIsImV2ZW50IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiJGFsc29Cb3VnaHRDaGVja2JveCIsIiRmb3JtIiwiYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCIsIiRjYiIsInRhcmdldCIsIiRsYWJlbCIsImF0dHIiLCIkdGh1bWIiLCJhZGRDbGFzcyIsIiRxdHkiLCJoYXNDbGFzcyIsImxvYWRQcm9kdWN0RGV0YWlscyIsIiRjb250ZW50IiwiYXBpIiwiZ2V0QnlJZCIsInRlbXBsYXRlIiwiZXJyIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGlucHV0Iiwic2libGluZ3MiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwiJGFsbCIsIiRjaGVja2VkIiwiJGJ0bnMiLCJwYXJlbnRQcm9kdWN0QWRkZWRUb0NhcnQiLCJwcm9taXNlcyIsImFkZFByb2R1Y3RUb0NhcnQiLCJyZXN1bHRzIiwibmV3UHJvZHVjdEFkZGVkIiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJhZGRQcm9kdWN0VG9DYXJ0QXN5bmMiLCJlcnJvck1zZyIsImVycm9yIiwidHlwZSIsImNhcnRfaXRlbSIsIiR0b2dnbGUiLCJwcmV2aWV3TW9kYWwiLCJtb2RhbCIsImNsb3NlIiwiYWRkX3RvX2NhcnRfcG9wdXAiLCJ1cGRhdGVDYXJ0Q29udGVudCIsIml0ZW0iLCIkbW9kYWwiLCIkZWwiLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiY2FydCIsInJlamVjdCIsIiRlcnJvckJveCIsIiRlcnJvck1zZyIsIiRjaGVja2JveCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiJG92ZXJsYXkiLCJpdGVtQWRkIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwicmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eSIsImZvdW5kYXRpb24iLCJJbWFnZUdhbGxlcnkiLCJtb2RhbEZhY3RvcnkiLCJNb2RhbEV2ZW50cyIsInNob3dBbGVydE1vZGFsIiwiV2lzaGxpc3QiLCJiYW5uZXJVdGlscyIsImN1cnJlbmN5U2VsZWN0b3IiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJzY3JvbGxUb3AiLCJjb21wYXJlUHJvZHVjdHMiLCJzbWFsbE1lZGlhUXVlcnlMaXN0IiwibWVkaXVtTWVkaWFRdWVyeUxpc3QiLCJzaGFrZSIsImludGVydmFsIiwiZGlzdGFuY2UiLCJ0aW1lcyIsImNvbXBsZXRlIiwiY3NzIiwiaXRlciIsImFuaW1hdGUiLCJsZWZ0Iiwic3VwZXJtYXJrZXRTZXJpYWxpemUiLCJhc3NvYyIsInNlcmlhbGl6ZUFycmF5IiwiX2Fzc29jIiwicGFyYW0iLCIkc2NvcGVBcmciLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJpbWFnZUdhbGxlcnkiLCJpbml0IiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZG9jdW1lbnQiLCJpbml0Q3VzdG9tVGFicyIsImluaXRUYWJzQURBIiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwic3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnIiwiYWxzb0JvdWdodE9wdGlvbnMiLCJhbHNvQm91Z2h0IiwiY29uc29sZSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwidHJpbSIsImhhc0RlZmF1bHRPcHRpb25zIiwiaXMiLCIkdGFiIiwiZmlyc3QiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZWFjaCIsIiRpbWciLCJzcmMiLCJzaXplIiwic2l6ZTJ4IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCIkcHJvZHVjdElkIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJvZmYiLCJvbk1vZGFsT3BlbiIsIm9uTW9kYWxDbG9zZSIsIm9uTWluaVByZXZpZXdNb2RhbE9wZW4iLCJvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZSIsImluaXRHb1RvVGFiIiwiaW5pdENvdW50ZG93biIsImhvb2tzIiwiZW1pdCIsInN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlIiwibW9kdWxlIiwiZGVmYXVsdCIsImhpZGVPcmlnaW5hbFN3YXRjaGVzIiwiY2hpbGRyZW4iLCJpbnB1dFNoYXJlTGluayIsIl9ldmVudCIsInNlbGVjdCIsImluaXRUaW1lQ291bnRkb3duIiwiZGF5c1RleHQiLCJob3Vyc1RleHQiLCJtaW51dGVzVGV4dCIsInNlY29uZHNUZXh0IiwiZW5kVGltZSIsImJsb2NrVGltZSIsImxhYmVsVGl0bGUiLCJibG9ja0RheXMiLCJibG9ja0hvdXJzIiwiYmxvY2tNaW51dGVzIiwiYmxvY2tUaW1lciIsImNhbGN1bGF0ZVRpbWVEYXRlIiwic3RhcnRUaW1lIiwiZGF0ZVNldFRpbWUiLCJmbG9vciIsImdldFRpbWUiLCJkYXlzIiwiaG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVSdW4iLCJjYWxjdWxhdGVUaW1lIiwic2V0RGF0ZSIsImdldERhdGUiLCJyZWdleFRpbWUiLCJyZWdleFRpbWV6b25lIiwicmVnZXhEYXRlIiwicmVzdWx0VGltZXpvbmUiLCJtYXRjaCIsInJlc3VsdFRpbWUiLCJyZXN1bHREYXRlIiwiRGF0ZSIsInRpbWVab25lIiwiZGF0ZVNldFRpbWVab25lIiwidHpEaWZmZXJlbmNlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJvZmZzZXRUaW1lIiwiZGF0ZVNldFRpbWVFbmQiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwic2V0SW50ZXJ2YWwiLCJpbml0VGFiU2Nyb2xsVG9WaWV3cG9ydCIsIiRib2R5IiwiJHF1aWNrVmlldyIsInJlc3VtZVN0aWNreUhlYWRlciIsInNjcm9sbFRvVmlldyIsImgiLCJwb3NpdGlvbiIsInRvcCIsIm9mZnNldFBhcmVudCIsIm9mZnNldCIsImR1cmF0aW9uIiwic3RhcnQiLCJjbGVhclRpbWVvdXQiLCJjbGVhclF1ZXVlIiwiYWx3YXlzIiwibWF0Y2hlcyIsImhyZWYiLCJmb3JtRGF0YSIsIkZpbGUiLCJkZWxldGUiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9ucyIsImluZGV4Iiwib3B0aW9uTGFiZWwiLCJpbm5lclRleHQiLCJvcHRpb25UaXRsZSIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIngiLCJsYWJlbCIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJnZXRWaWV3TW9kZWwiLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGJ1eU5vdyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRjb250YWluZXIiLCIkYmFkZ2UiLCJza3UiLCIkdmFsdWUiLCJ1cGMiLCJtcG4iLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsInNhbGVDb3VudGRvd24iLCIkc3BhblNhbGUiLCJzYWxlTGFiZWwiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiem9vbUltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInpvb21fc2l6ZSIsIm1haW5JbWFnZVVybCIsInByb2R1Y3Rfc2l6ZSIsIm1haW5JbWFnZVNyY3NldCIsInByb2R1Y3RfaW1hZ2VfcmVzcG9uc2l2ZSIsInNldEFsdGVybmF0ZUltYWdlIiwicmVzdG9yZUltYWdlIiwidmlld01vZGVsIiwia2V5Q29kZSIsImNhcnRfaWQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJyZWRpcmVjdF9jYXJ0IiwiYWN0aW9uIiwiY2hlY2tvdXQiLCJzaW5nbGVfYWRkcmVzcyIsIkFwcGxlUGF5U2Vzc2lvbiIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJwYXJhbXMiLCJzdWdnZXN0Iiwic3VnZ2VzdGlvbnMiLCJsaW1pdCIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJsb2NhdGlvbiIsInVwZGF0ZUNvbnRlbnQiLCJhcHBseU1vZGFsQXV0b0Nsb3NlIiwiJGNhcnRRdWFudGl0eSIsIiRjYXJ0UHJpY2UiLCIkY2FydENvdW50ZXIiLCJzaG93TWVzc2FnZUJveCIsIiRtZXNzYWdlQm94IiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ1cGRhdGVQcmljZVZpZXciLCJycnBfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsInNhbGVQZXJjZW50IiwicnJwX3dpdGhvdXRfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJzYXZlZCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJsb3dfc3RvY2siLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRzZWxlY3QiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwicmFkaW8iLCIkcmFkaW8iLCJoYXNoIiwiJGFjdGl2ZVRhYiIsImhhcyIsIiR0YWJDb250ZW50IiwiJGN1c3RvbVRhYnMiLCIkdGFicyIsIiR0YWJzQ29udGVudCIsIiR0aXRsZSIsInR4dFRpdGxlIiwiZXhwYW5kIiwicmVtb3ZlIiwiaWRDb250ZW50IiwiJHByb2R1Y3RUYWIiLCJ0b2dnbGVDbGFzcyIsInVwZGF0ZVRhYnMiLCJhZGRMaXN0ZW5lciIsImF1dG9DbG9zZVRpbWVyIiwiJGF1dG9DbG9zZUVsIiwic2VjIiwiJGNvdW50IiwiaXNCcm93c2VySUUiLCJwcmljZV9yYW5nZSIsImV2dCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYW1vdW50IiwiZGlzcGF0Y2hFdmVudCIsImRvY3VtZW50TW9kZSIsImNvbnZlcnRJbnRvQXJyYXkiLCJjb2xsZWN0aW9uIiwiY2FsbCIsImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJwYWdpbmF0aW9uSXRlbXMiLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsInBhZ2VOdW1iZXIiLCJ3aXNobGlzdFBhZ2luYXRvckhlbHBlciIsIiRwYWdpbmF0aW9uTGlzdCIsIiRuZXh0SXRlbSIsIiRwcmV2SXRlbSIsImN1cnJlbnRIcmVmIiwicGFydGlhbFBhZ2luYXRpb25VcmwiLCJzaGlmdCIsImJhZ3VldHRlQm94Iiwic21hbGxNZWRpYVF1ZXJ5IiwiZml4QURBIiwiJHNsaWNrIiwiX2UiLCJzbGljayIsIiRzbGlkZSIsIiRsaXN0IiwiJHNsaWRlcyIsImZvY3VzIiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIiRnYWxsZXJ5IiwiJG1haW5DYXJvdXNlbCIsIiRuYXZDYXJvdXNlbCIsIiRuYXZEaXNhYmxlQ2Fyb3VzZWwiLCIkdmlkZW9QbGF5ZXIiLCIkZGVmU2xpZGUiLCJkZWZTbGlkZUlkeCIsImRlZmF1bHRTbGlkZUluZGV4IiwidWlkIiwibmF2Um93cyIsInBsYXlWaWRlb0lubGluZSIsImJhZ3VldHRlQm94T3B0aW9ucyIsIm9uQ2hhbmdlIiwiY3VycmVudEluZGV4Iiwic3RvcFZpZGVvIiwicGxheVZpZGVvIiwic2hvd1ZpZGVvIiwiJGEiLCJjbG9uZSIsIiRmaWd1cmUiLCJlcSIsImFmdGVySGlkZSIsInJlbW92ZVZpZGVvQ2xpY2tFdmVudCIsIiRjbG9uZSIsImFmdGVyIiwiJGlmcmFtZSIsInJlcGxhY2VXaXRoIiwiYmluZEV2ZW50cyIsInNldE1haW5JbWFnZSIsImltZ09iaiIsImN1cnJlbnRJbWFnZSIsInN3YXBNYWluSW1hZ2UiLCJzYXZlZEltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJpZ25vcmVCYWd1ZXR0ZUJveCIsImluaXRCYWd1ZXR0ZUJveCIsIiRzZWxlY3RlZFRodW1iIiwib25OYXZDYXJvdXNlbFNldFBvc2l0aW9uIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImFzTmF2Rm9yIiwic3dpcGUiLCJhcnJvd3MiLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzd2lwZVRvU2xpZGUiLCJzbGlkZUNvdW50Iiwic2xpZGVzVG9TaG93RGVza3RvcCIsIm9uTmF2Q2Fyb3VzZWxJbml0Iiwid2hpY2giLCJvbk5hdkNhcm91c2VsU3dpcGUiLCJkaXJlY3Rpb24iLCJjdXJyZW50U2xpZGUiLCJzbGlja0dvVG8iLCIkbmF2Q2Fyb3VzZWxDbG9uZSIsIm5hdkNvbCIsInNsaWRlc1RvU2hvd01vYmlsZSIsImluaXROYXZDYXJvdXNlbCIsImRlc2t0b3AiLCJiZWZvcmUiLCJmaXhOYXZDTFMiLCJmb2N1c09uU2VsZWN0IiwiY2VudGVyUGFkZGluZyIsInJvd3MiLCJhZGFwdGl2ZUhlaWdodCIsImxhenlMb2FkIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJydW4iLCJvblZpZGVvQ2xpY2siLCJvdXRlckhlaWdodCIsIm9uZSIsImZpeGVkTmF2SGVpZ2h0Rmlyc3RMb2FkIiwibm9kIiwiUGFnZU1hbmFnZXIiLCJXaXNoTGlzdCIsIndpc2hsaXN0RGVsZXRlQ29uZmlybSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwic3VibWl0IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiZW50ZXJXaXNobGlzdE5hbWVFcnJvciIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIm9uUmVhZHkiLCIkYWRkV2lzaExpc3RGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==
