"use strict";
(self["webpackChunkpapathemes_mooncat"] = self["webpackChunkpapathemes_mooncat"] || []).push([["assets_js_papathemes_bulk-order_js-assets_js_papathemes_compare-products_js-assets_js_theme_c-409ae5"],{

/***/ "./assets/js/beautify/shop-by-price-slider.js":
/*!****************************************************!*\
  !*** ./assets/js/beautify/shop-by-price-slider.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var ShopByPriceSlider = /*#__PURE__*/function () {
  function ShopByPriceSlider($scope) {
    var _this = this;

    if ($scope.data('beautifyShopByPriceSliderInstance')) {
      return;
    }

    $scope.data('beautifyShopByPriceSliderInstance', this);
    this.onPriceInput = this.onPriceInput.bind(this);
    this.$scope = $scope;
    this.$slider = $('[data-slider]', $scope);
    this.$min = $('input[name="min_price"], input[data-input-min]', $scope);
    this.$max = $('input[name="max_price"], input[data-input-max]', $scope);
    this.$cancel = $('[data-cancel]', $scope);
    this.$clear = $('[data-clear]', $scope);
    this.$form = $('form', $scope).not('[data-faceted-search-range]'); // exclude faceted form

    this.$apply = $('[data-apply]', $scope);
    this.shopByPrice = $scope.data('beautifyShopByPrice');
    var min = this.shopByPrice[0].low.value;
    var max = this.shopByPrice[this.shopByPrice.length - 1].high.value;
    var params = new URLSearchParams(window.location.search);
    var values = [params.get('price_min') || params.get('min_price') || min, params.get('price_max') || params.get('max_price') || max];

    if (params.has('price_min') || params.has('min_price') || params.has('price_max') || params.has('max_price')) {
      this.$clear.show();
    } else {
      this.$clear.hide();
    }

    this.originalValues = values;
    this.$slider.slider({
      range: true,
      min: min,
      max: max,
      values: values,
      slide: function slide(event, ui) {
        _this.$min.val(ui.values[0]);

        _this.$max.val(ui.values[1]);

        if (ui.values[0] !== _this.originalValues[0] || ui.values[1] !== _this.originalValues[1]) {
          _this.$cancel.show();
        }
      }
    });
    this.$min.attr({
      min: min,
      max: max,
      value: params.get('price_min') || params.get('min_price') || ''
    }).on('input', this.onPriceInput);
    this.$max.attr({
      min: min,
      max: max,
      value: params.get('price_max') || params.get('max_price') || ''
    }).on('input', this.onPriceInput);
    this.$cancel.on('click', function (event) {
      event.preventDefault();

      _this.$slider.slider('values', _this.originalValues);

      _this.$min.val(_this.originalValues[0]);

      _this.$max.val(_this.originalValues[1]);

      _this.$cancel.hide();
    });
    this.$form.on('submit', function (event) {
      event.preventDefault();

      _this.apply();
    });
    this.$apply.on('click', function (event) {
      event.preventDefault();

      _this.apply();
    });
  }

  var _proto = ShopByPriceSlider.prototype;

  _proto.apply = function apply() {
    var _this$$slider$slider = this.$slider.slider('values'),
        slideMin = _this$$slider$slider[0],
        slideMax = _this$$slider$slider[1];

    var min = Number(this.$min.val()) || slideMin;
    var max = Number(this.$max.val()) || slideMax;
    var params = new URLSearchParams(window.location.search);
    params.set('price_min', min);
    params.set('price_max', max);
    window.location = window.location.pathname + "?" + params.toString();
  };

  _proto.onPriceInput = function onPriceInput(event) {
    var val = Number(event.target.value) || 0;
    var min = Number(this.$min.prop('min')) || 0;
    var max = Number(this.$min.prop('max')) || 0;
    var curMin = Number(this.$min.val()) || this.originalValues[0];
    var curMax = Number(this.$max.val()) || this.originalValues[1];

    if (val < min) {
      val = min;
    }

    if (val > max) {
      val = max;
    }

    if (this.$min.is(event.target) && curMax > 0 && val > curMax) {
      val = curMax;
    }

    if (this.$max.is(event.target) && curMin > 0 && val < curMin) {
      val = curMin;
    }

    event.target.value = val;
    /* eslint-disable-line no-param-reassign */

    var newMin = Number(this.$min.val()) || this.originalValues[0];
    var newMax = Number(this.$max.val()) || this.originalValues[1];
    this.$slider.slider('values', [newMin, newMax]);

    if (newMin !== this.originalValues[0] || newMax !== this.originalValues[1]) {
      this.$cancel.show();
    } else {
      this.$cancel.hide();
    }
  };

  return ShopByPriceSlider;
}();

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  if (selector === void 0) {
    selector = '[data-beautify-shop-by-price]';
  }

  $(selector).each(function (i, el) {
    return new ShopByPriceSlider($(el));
  });
}

/***/ }),

/***/ "./assets/js/papathemes/action-bar.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/action-bar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ actionBarFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");




var instantloadBinded = false;
var actionBar;

function removeModeClass(index, className) {
  return (className.match(/(^|\s)mode-\S+/g) || []).join(' ');
}

var ActionBar = /*#__PURE__*/function () {
  function ActionBar(options) {
    if (options === void 0) {
      options = {};
    }

    // console.log('actionbar constructor');
    this.onModeChange = this.onModeChange.bind(this);
    this.onSortBtnClick = this.onSortBtnClick.bind(this);
    this.options = options;
    this.init();
  }

  var _proto = ActionBar.prototype;

  _proto.init = function init() {
    this.$sortBy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-sort-by]');

    if (!this.$sortBy.length) {
      return;
    }

    var $limit = this.$sortBy.find('[name=limit]');
    var $mode = this.$sortBy.find('input[name=mode]');
    var url = url__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.href, true);

    if (url.query.limit) {
      $limit.val(url.query.limit);
    }

    if (url.query.mode) {
      $mode.prop('checked', false).filter("[value=" + url.query.mode + "]").prop('checked', true);
    } // Stop action bar if the page is category bulk order custom template


    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

    if ($body.hasClass('supermarket-page--pages-custom-category-bulk-order') || $body.hasClass('supermarket-page--pages-custom-brand-bulk-order')) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + $mode.filter(':checked').val());
    this.unbindEvents();
    this.bindEvents();
  };

  _proto.reinit = function reinit(newOptions) {
    // console.log('actionbar reinit');
    if (newOptions) {
      this.options = newOptions;
    }

    this.init();
  };

  _proto.destroy = function destroy() {
    // console.log('actionbar destroyed');
    this.unbindEvents();
  };

  _proto.bindEvents = function bindEvents() {
    this.$sortBy.find('input[name=mode]').on('change', this.onModeChange);
    this.$sortBy.find('button, input[type="button"]').on('click', this.onSortBtnClick);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$sortBy.find('input[name=mode]').off('change', this.onModeChange);
    this.$sortBy.find('button, input[type="button"]').off('click', this.onSortBtnClick);
  };

  _proto.onModeChange = function onModeChange(event) {
    event.preventDefault();
    var mode = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + mode);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .pagination-link').each(function (i, el) {
      var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceParams($a.attr('href'), {
        mode: mode
      });
      $a.attr('href', url);
    });
    var url = url__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.href, true);
    url.query.mode = mode;
    window.history.pushState({}, document.title, url__WEBPACK_IMPORTED_MODULE_1__.format({
      pathname: url.pathname,
      search: _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onSortBtnClick = function onSortBtnClick(event) {
    var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var sort = $btn.data('sort');

    if (sort) {
      this.$sortBy.find('[name="sort"]').val(sort);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].hooks.emit('sortBy-submitted', event, $btn.closest('form').get(0));
    }
  };

  return ActionBar;
}();
/**
 * Call this function when:
 * - Page is loaded
 * - Ajax page returned
 */


function actionBarFactory(options) {
  if (actionBar) {
    actionBar.reinit(options);
  } else {
    actionBar = new ActionBar(options);
  } // Destroy actionBar when loading new page


  if (!instantloadBinded) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      if (actionBar) {
        actionBar.destroy();
        actionBar = null;
      }
    });
    instantloadBinded = true;
  }
}

/***/ }),

/***/ "./assets/js/papathemes/bulk-order.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/bulk-order.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulkOrder": () => (/* binding */ BulkOrder),
/* harmony export */   "default": () => (/* binding */ bulkOrderFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/papathemes/theme-utils.js");
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

var BulkOrder = /*#__PURE__*/function () {
  function BulkOrder(context, $scope) {
    var _this = this;

    this.context = context || {};
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    this.$scope = $scope;
    this.itemCount = 0;
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onQuantityButtonClick = this.onQuantityButtonClick.bind(this);
    this.onProductAdded = this.onProductAdded.bind(this);
    this.onAddAllClick = this.onAddAllClick.bind(this);
    this.onCartQtyChange = this.onCartQtyChange.bind(this);
    this.onProgressPopupCloseClick = this.onProgressPopupCloseClick.bind(this);
    this.reinit(); // Supermarket

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
  }

  var _proto = BulkOrder.prototype;

  _proto.reinit = function reinit() {
    this.$progressPopup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal', this.$scope);
    this.$progressBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.progressBar', this.$progressPopup);
    this.$progressPopupCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-current', this.$scope);
    this.$progressPopupActions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-actions', this.$scope);
    this.$progressPopupClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-close]', this.$scope);
    this.unbindEvents();
    this.bindEvents();
    this.calculate();

    if (this.context.cartId) {
      this.updateQtyInCart();
    }
  };

  _proto.bindEvents = function bindEvents() {
    this.$scope.on('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.on('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.on('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.on('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.on('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.on('click', this.onProgressPopupCloseClick);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$scope.off('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.off('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.off('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.off('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.off('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.off('click', this.onProgressPopupCloseClick);
  };

  _proto.onProgressPopupCloseClick = function onProgressPopupCloseClick(event) {
    event.preventDefault();
    this.hideProgressPopup();
  };

  _proto.onCartQtyChange = function onCartQtyChange() {
    this.updateQtyInCart();
  };

  _proto.showProgressPopup = function showProgressPopup() {
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.addClass('is-open');
  };

  _proto.hideProgressPopup = function hideProgressPopup() {
    this.$progressPopupCurrent.css('width', 0);
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.removeClass('is-open');
  };

  _proto.updateProgressPopup = function updateProgressPopup() {
    if (this.progressTotal > 0) {
      this.$progressPopupCurrent.css('width', this.progressCurrent / this.progressTotal * 100 + "%");
    } else {
      this.$progressPopupCurrent.css('width', 0);
    }
  };

  _proto.showProgressPopupActions = function showProgressPopupActions() {
    this.$progressPopupActions.removeClass('u-hiddenVisually');
  };

  _proto.showProgressBar = function showProgressBar() {
    this.$progressBar.removeClass('u-hiddenVisually');
  };

  _proto.hideProgressBar = function hideProgressBar() {
    this.$progressBar.addClass('u-hiddenVisually');
  };

  _proto.onAddAllClick = function onAddAllClick(event) {
    event.preventDefault();

    if (this.itemCount === 0) {
      _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].fire({
        text: this.context.bulkOrderEnterQty || 'Please enter product quantity',
        icon: 'error'
      });
      return;
    }

    this.addAllProducts();
  };

  _proto.onProductAdded = function onProductAdded(event, productId) {
    this.$scope.find("[data-bulkorder-qty-id='" + productId + "']").val(0);
    this.calculate();
  };

  _proto.onQuantityButtonClick = function onQuantityButtonClick(event) {
    event.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var $input = $target.closest('[data-quantity-change]').find('input');
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
    } else if (qty > 0) {
      // If quantity min option is set
      if (quantityMin > 0) {
        // Check quantity does not fall below min
        if (qty - 1 >= quantityMin) {
          qty--;
        } else {
          qty = 0;
        }
      } else {
        qty--;
      }
    }

    $input.val(qty);
    this.calculate();
  };

  _proto.onQuantityChange = function onQuantityChange() {
    this.calculate();
  };

  _proto.calculate = function calculate() {
    var _this2 = this;

    var total = 0;
    var count = 0;
    var money;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');

      var $price = _this2.$scope.find("[data-bulkorder-price-id='" + productId + "']");

      var priceVal = parseFloat($price.data('bulkorderPriceValue'));
      var priceFmt = "" + $price.data('bulkorderPriceFormatted');
      var subtotal = Math.round(priceVal * qty * 100) / 100;

      var $subtotal = _this2.$scope.find("[data-bulkorder-subtotal-id='" + productId + "']");

      if (priceFmt) {
        money = (0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.extractMoney)(priceFmt);
      }

      $subtotal.html((0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(subtotal, money));
      total += subtotal;
      count += qty;
    });
    this.itemCount = count;
    this.$scope.find('[data-bulkorder-total-count]').html(count);
    this.$scope.find('[data-bulkorder-total-amount]').html((0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(Math.round(total * 100) / 100, money));
  };

  _proto.addAllProducts = function addAllProducts() {
    var _this3 = this;

    var promises = [];
    this.progressCurrent = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');

      if (qty > 0) {
        promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this3.progressCurrent++;

                  _this3.updateProgressPopup();

                  _context.next = 4;
                  return _this3.addProduct(productId, qty);

                case 4:
                  // eslint-disable-line no-unused-expressions
                  $input.val(0);

                  _this3.calculate(); // wait 1s before adding to cart a new item in order to avoid request failed.


                  _context.next = 8;
                  return delay(1000);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    });
    this.progressTotal = promises.length;
    this.showProgressPopup();
    this.showProgressBar();
    promiseSerial(promises).then(function () {
      _this3.showProgressPopupActions();

      _this3.hideProgressBar(); // this.updateQtyInCart();


      _this3.updateCartCounter();
    });
  };

  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId, qty) {
      var formData, promise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.FormData === undefined)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              formData = new FormData();
              formData.append('product_id', productId);
              formData.append('qty[]', qty);
              promise = new Promise(function (resolve) {
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(formData, function (err, response) {
                  var errorMessage = err || response.data.error; // Guard statement

                  if (errorMessage) {
                    // Strip the HTML from the error message
                    var tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;
                    alert(tmp.textContent || tmp.innerText);
                  }

                  resolve();
                });
              });
              _context2.next = 8;
              return promise;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function addProduct(_x, _x2) {
      return _addProduct.apply(this, arguments);
    }

    return addProduct;
  }();

  _proto.updateQtyInCart = function updateQtyInCart() {
    var _this4 = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/api/storefront/cart', function (data) {
      if (!data.length) {
        return;
      }

      var qtys = {};
      data[0].lineItems.physicalItems.forEach(function (item) {
        if (typeof qtys[item.productId] !== 'undefined') {
          qtys[item.productId] += item.quantity;
        } else {
          qtys[item.productId] = item.quantity;
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-bulkorder-cart-qty-id]', _this4.$scope).each(function (i, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var productId = parseInt($el.data('bulkorderCartQtyId'), 10);

        if (qtys[productId]) {
          $el.html(qtys[productId]);
          $el.closest('._qtyInCartWrapper').show();
        } else {
          $el.html('0');
          $el.closest('._qtyInCartWrapper').hide();
        }
      });
    });
  };

  _proto.updateCartCounter = function updateCartCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent({
      template: 'cart/preview'
    }, function (err, resp) {
      if (err) {
        return;
      } // Update cart counter


      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-quantity]', resp);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cart-quantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
    });
  };

  return BulkOrder;
}();
function bulkOrderFactory(context, selector) {
  if (context === void 0) {
    context = null;
  }

  if (selector === void 0) {
    selector = '#product-listing-container';
  }

  var $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
  var bulkOrder = $selector.data('bulkOrderInstance');

  if (!(bulkOrder instanceof BulkOrder)) {
    bulkOrder = new BulkOrder(context, $selector);
    $selector.data('bulkOrderInstance', bulkOrder);
  }

  return bulkOrder;
}

/***/ }),

/***/ "./assets/js/papathemes/compare-products.js":
/*!**************************************************!*\
  !*** ./assets/js/papathemes/compare-products.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareProducts)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var singleton;
var compareListTmpl = "\n    <div class=\"supermarket-compareList-panel-wrapper is-empty\" id=\"supermarketCompareList\">\n        <div class=\"supermarket-compareList-panel\">\n            <button type=\"button\" class=\"button button--close\" data-compare-product-toggle btn-close>\n                <span class=\"is-srOnly\">Close</span>\n                <span class=\"supermarket-compareList-icon\"><svg><use xlink:href=\"#icon-double-arrow-right\"></use></svg></span>\n                <span class=\"supermarket-compareList-text\">{{compare}}</span>\n            </button>\n            <button type=\"button\" class=\"button button--open\" data-compare-product-toggle btn-open>\n                <span class=\"is-srOnly\">Open</span>\n                <span class=\"supermarket-compareList-icon\"><svg><use xlink:href=\"#icon-double-arrow-left\"></use></svg></span>\n                <span class=\"supermarket-compareList-text\">{{compare}}</span>\n            </button>\n            <div class=\"supermarket-compareList-panel-body\">\n                <div class=\"supermarket-compareList\" data-compare-product-list>{{{renderItems}}}</div>\n                <div class=\"supermarket-compareList-actions\">\n                    <a role=\"button\" href=\"{{compare_url}}\" class=\"button button--primary button--small button--compare\" data-compare-product-button>{{compare}}</a>\n                    <button type=\"button\" class=\"button button--plain button--small button--clearAll\" data-compare-product-clearall>{{clear_all}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n";
var compareListItemTmpl = "\n    <div class=\"supermarket-compareList-item\" data-compare-product-item=\"{{id}}\">\n        <a href=\"{{url}}\" class=\"quickview\" data-product-id=\"{{id}}\">\n            <img class=\"supermarket-compareList-img quickview\" src=\"{{image}}\" alt=\"{{alt}}\" title=\"{{alt}}\" data-product-id=\"{{id}}\">\n        </a>\n        <button type=\"button\" class=\"supermarket-compareList-remove\" data-compare-product-remove=\"{{id}}\">\n            <span class=\"is-srOnly\">{{remove}}{{alt}}</span>\n            <svg class=\"icon\"><use xlink:href=\"#icon-close\"></use></svg>\n        </button>\n    </div>\n";

var CompareProducts = /*#__PURE__*/function () {
  function CompareProducts(context) {
    var _this = this;

    this.context = context;
    this.animationTime = 300;
    this.$body = $('body');
    this.products = this.loadProductsFromLocalStorage() || [];
    this.$scope = $(mustache__WEBPACK_IMPORTED_MODULE_0___default().render(compareListTmpl, {
      compare: context.compareAddonLang_compare,
      clear_all: context.compareAddonLang_clear_all,
      renderItems: function renderItems() {
        return _this.products.map(function (product) {
          return _this.renderItem(product);
        }).join('');
      }
    }));

    if (this.products.length === 0) {
      this.$scope.addClass('is-empty').hide();
    } else {
      this.$scope.removeClass('is-empty').show();
    }

    this.$body.find('.body').before(this.$scope);
    this.$productList = this.$scope.find('[data-compare-product-list]');
    this.$compareButton = this.$scope.find('[data-compare-product-button]');
    this.updateCompareUrl();
    this.loadStateToggle();
    this.bindEvents();
  }

  var _proto = CompareProducts.prototype;

  _proto.loadStateToggle = function loadStateToggle() {
    if (!window.sessionStorage) {
      return;
    }

    var s = Number(window.sessionStorage.getItem('supermarket_recentlyViewedProducts_close'));

    if (s && s === 0) {
      this.$scope.remove('is-closed');
    } else if (s && s !== 0) {
      this.$scope.addClass('is-closed');
    }
  };

  _proto.saveToggleToSessionStorage = function saveToggleToSessionStorage(state) {
    if (!window.sessionStorage) {
      return;
    }

    window.sessionStorage.setItem('supermarket_recentlyViewedProducts_close', state);
  };

  _proto.loadProductsFromLocalStorage = function loadProductsFromLocalStorage() {
    if (!window.localStorage) {
      return;
    }

    var s = window.localStorage.getItem('compareProducts');

    if (s) {
      try {
        return JSON.parse(s);
      } catch (e) {
        return null;
      }
    } else {
      return null;
    }
  };

  _proto.saveProductsToLocalStorage = function saveProductsToLocalStorage() {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.setItem('compareProducts', JSON.stringify(this.products));
  };

  _proto.bindEvents = function bindEvents() {
    var _this2 = this;

    this.$body.on('click', '[data-compare-id]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareId'));

      if (_this2.products.filter(function (item) {
        return item.id === id;
      }).length === 0) {
        _this2.addProduct({
          image: $el.data('compareImage'),
          alt: $el.data('compareTitle'),
          url: $el.data('compareUrl'),
          id: id
        });
      }

      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.on('click', '[data-compare-product-remove]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareProductRemove'));

      _this2.removeProduct(id);

      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.find('[data-compare-product-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.$scope.toggleClass('is-closed');
    });
    this.$scope.find('[data-compare-product-clearall]').on('click', function (event) {
      event.preventDefault();

      _this2.clearAllProducts();
    });
    this.$scope.find('[btn-close]').on('click', function (event) {
      event.preventDefault();

      _this2.saveToggleToSessionStorage(1);
    });
    this.$scope.find('[btn-open]').on('click', function (event) {
      event.preventDefault();

      _this2.saveToggleToSessionStorage(0);
    });
  };

  _proto.addProduct = function addProduct(product) {
    var _this3 = this;

    this.products.push(product);
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = $(this.renderItem(product)).hide();
    this.$productList.append($el);
    $el.show(this.animationTime, function () {
      _this3.$scope.removeClass('is-empty').fadeIn(_this3.animationTime);
    });
  };

  _proto.removeProduct = function removeProduct(id) {
    var _this4 = this;

    this.products = this.products.filter(function (item) {
      return item.id !== id;
    });
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find("[data-compare-product-item=" + id + "]");
    $el.fadeOut(this.animationTime, function () {
      $el.remove();

      if (_this4.products.length === 0) {
        _this4.$scope.addClass('is-empty').fadeOut(_this4.animationTime);
      }
    });
  };

  _proto.clearAllProducts = function clearAllProducts() {
    var _this5 = this;

    this.products = [];
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find('[data-compare-product-item]');
    $el.fadeOut(this.animationTime, function () {
      $el.remove();

      _this5.$scope.addClass('is-empty').fadeOut(_this5.animationTime);
    });
  };

  _proto.updateCompareUrl = function updateCompareUrl() {
    var path = this.products.map(function (product) {
      return product.id;
    }).join('/');
    this.$compareButton.attr('href', this.context.urls.compare + "/" + path);
  };

  _proto.renderItem = function renderItem(item) {
    return mustache__WEBPACK_IMPORTED_MODULE_0___default().render(compareListItemTmpl, Object.assign({}, item, {
      quick_view: this.context.compareAddonLang_quick_view,
      remove: this.context.compareAddonLang_remove
    }));
  };

  return CompareProducts;
}();

function compareProducts(context) {
  if (!singleton) {
    singleton = new CompareProducts(context);
  }

  return singleton;
}

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */

    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */

    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true;
    /* eslint-disable-line */
    // papathemes-supermarket: quickfix stop stencil-utils SortByHook submitting the form when select changed

    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");








 // papathemes-mooncat mod



 // Papathemes - Supermarket


/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch ._accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker, #beautify__findGate-sidebar .blocker',
      // papathemes-beautify edited
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch ._accordion-content .toggleLink',
      // papathemes-beautify edited
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // papathemes-beautify

    this.initPriceSlider(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onPopState = this.onPopState.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.onDocumentClickOfHorizontalLayout = this.onDocumentClickOfHorizontalLayout.bind(this);
    this.bindEvents(); // Supermarket

    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    }); // papathemes-beautify

    this.initFindGate();
  }

  var _proto = FacetedSearch.prototype;

  _proto.bindHorizontalLayoutEvents = function bindHorizontalLayoutEvents() {
    var _this2 = this;

    if (!$('#faceted-search-container').hasClass('_horizontal')) return;
    $(document).on('click', this.onDocumentClickOfHorizontalLayout);
    $(this.options.accordionToggleSelector).on(_collapsible__WEBPACK_IMPORTED_MODULE_8__.CollapsibleEvents.open, function (event) {
      var _$$data, _$$data2;

      // Close all other collapsible elements
      $(_this2.options.accordionToggleSelector).not(event.currentTarget).each(function (index, accordionToggle) {
        return _this2.collapseFacet($(accordionToggle));
      }); // Correct the dropdown position

      var $content = (_$$data = $(event.currentTarget).data('collapsibleInstance')) == null ? void 0 : _$$data.$target;
      var $toggle = (_$$data2 = $(event.currentTarget).data('collapsibleInstance')) == null ? void 0 : _$$data2.$toggle;

      if ($content) {
        $content.css('left', $toggle.position().left);
        $content.css('marginLeft', '');
        var right = $content.offset().left + $content.outerWidth() + 10;

        if (right > document.body.clientWidth) {
          $content.css('marginLeft', -(right - document.body.clientWidth));
        }

        $content.attr('tabindex', 0).focus();
      }
    }); // Move the dropdown outside the scrolling container

    $(this.options.componentSelector).find('._accordion--navList').each(function (i, navListEl) {
      var $navList = $(navListEl);
      var $contents = $navList.find('._accordion-content').insertAfter($navList); // Improve accessibility - enable keyboard navigation on dropdown of each faceted item

      if ($contents.length > 0) {
        $contents.insertAfter($navList).append('<a class="is-srOnly _closeBtn" href="#">Close</a>').each(function (j, el) {
          var $content = $(el);
          var collapsible = $('[data-collapsible]').get().map(function (el2) {
            return $(el2).data('collapsibleInstance');
          }).filter(function (instance) {
            return instance.targetId === $content.attr('id');
          })[0];
          $content.on('keydown', function (event) {
            if (event.key === 'Escape' && collapsible) {
              collapsible.close();
              collapsible.$toggle.focus();
            }
          });
          $content.find('a._closeBtn').on('click focus keydown', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (collapsible) {
              collapsible.close();
              collapsible.$toggle.focus();
            }
          });
        });
      }
    });
  };

  _proto.unbindHorizontalLayoutEvents = function unbindHorizontalLayoutEvents() {
    $(document).off('click', this.onDocumentClickOfHorizontalLayout);
  }
  /**
   * Close all collapsibles when click outside
   * @param {jQuery.Event} event
   */
  ;

  _proto.onDocumentClickOfHorizontalLayout = function onDocumentClickOfHorizontalLayout(event) {
    var collapsibleElements = $(this.options.accordionToggleSelector).get().map(function (el) {
      return $(el).data('collapsibleInstance');
    }).filter(function (collapsible) {
      return collapsible;
    }).reduce(function (_collapsibleElements, collapsible) {
      return [].concat(_collapsibleElements, collapsible.$target.get(), collapsible.$toggle.get());
    }, []);

    if ($(event.target).closest($(collapsibleElements)).length === 0) {
      this.collapseAllFacets();
    }
  } // papathemes-beautify
  ;

  _proto.initFindGate = function initFindGate() {
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);

    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      this.findGate(width);
    }
  };

  _proto.findGate = function findGate(width) {
    var _this3 = this;

    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);
    delete url.query._bs_width;
    delete url.query['Minimum Gate Width'];
    delete url.query['Minimum Gate Width[]'];
    delete url.query['Maximum Gate Width'];
    delete url.query['Maximum Gate Width[]'];

    if (width) {
      var showMoreUrl = url__WEBPACK_IMPORTED_MODULE_5__.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      });
      var minWidthPromise = new Promise(function (resolve) {
        var findMinWidthValues = function findMinWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5__.parse($(el).attr('href'), true);

            return Number(_url.query['Minimum Gate Width']);
          });
        };

        var $minWidth = $('#facetedSearch [data-facet="Minimum Gate Width"]');

        if ($minWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(showMoreUrl, {
            template: _this3.requestOptions.showMore,
            params: {
              list_all: 'Minimum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMinWidthValues($(resp)));
          });
        } else {
          resolve(findMinWidthValues($minWidth));
        }
      });
      var maxWidthPromise = new Promise(function (resolve) {
        var findMaxWidthValues = function findMaxWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5__.parse($(el).attr('href'), true);

            return Number(_url.query['Maximum Gate Width']);
          });
        };

        var $maxWidth = $('#facetedSearch [data-facet="Maximum Gate Width"]');

        if ($maxWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(showMoreUrl, {
            template: _this3.requestOptions.showMore,
            params: {
              list_all: 'Maximum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMaxWidthValues($(resp)));
          });
        } else {
          resolve(findMaxWidthValues($maxWidth));
        }
      });
      Promise.all([minWidthPromise, maxWidthPromise]).then(function (_ref) {
        var minWidthArr = _ref[0],
            maxWidthArr = _ref[1];
        url.query._bs_width = width;
        url.query['Minimum Gate Width[]'] = minWidthArr.filter(function (val) {
          return val <= width;
        });
        url.query['Maximum Gate Width[]'] = maxWidthArr.filter(function (val) {
          return val >= width;
        });

        if (url.query['Minimum Gate Width[]'].length === minWidthArr.length) {
          delete url.query['Minimum Gate Width[]'];
        }

        if (url.query['Maximum Gate Width[]'].length === maxWidthArr.length) {
          delete url.query['Maximum Gate Width[]'];
        }

        _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
          pathname: url.pathname,
          search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
        }));
      });
    } else {
      _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      }));
    }
  } // Supermarket
  ;

  _proto.destroy = function destroy() {
    this.unbindEvents();
  } // Public methods
  ;

  _proto.refreshView = function refreshView(content, url) {
    // papathemes: faceted-infinite-scroll mod
    if (content) {
      this.callback(content, url); // papathemes: faceted-infinite-scroll mod
    }

    (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Papathemes - Supermarket
    // Init collapsibles

    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // papathemes-beautify

    this.initPriceSlider(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this4 = this;

    // Supermarket
    if (this.updateViewCallback) {
      return this.updateViewCallback();
    }

    $(this.options.blockerSelector).show();
    var url = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(); // papathemes: faceted-infinite-scroll mod

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(url, this.requestOptions, function (err, content) {
      $(_this4.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this4.refreshView(content, url); // papathemes: faceted-infinite-scroll mod

    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this5 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this5.options.modal.open();

        _this5.options.modalOpen = true;

        _this5.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this6 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this6.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this7.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this8 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this8.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this8.collapseFacetItems($navList);
      } else {
        _this8.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this9 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this9.collapsedFacets, id);

      if (shouldCollapse) {
        _this9.collapseFacet($accordionToggle);
      } else {
        _this9.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    var _this10 = this;

    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);
    this.bindHorizontalLayoutEvents(); // papathemes-beautify {{{

    var $minMaxFacets = $('#facetedSearch-navList--maximum-gate-width, #facetedSearch-content--minimum-gate-width');

    if ($minMaxFacets.length > 0) {
      $('.sidebarBlock--findGate').show();
      $minMaxFacets.closest('._accordion-block').hide();
    } else {
      $('.sidebarBlock--findGate').hide();
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);

    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      $('#beautify__findGate-sidebar form [name=_bs_width]').val(width);
    }

    $('#beautify__findGate-sidebar form').off('submit').on('submit', function (event) {
      event.preventDefault();

      _this10.findGate($(event.target).find('[name=_bs_width]').val());
    }); // }}}
    // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);
    this.unbindHorizontalLayoutEvents(); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */

    var winUrl = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5__.parse(url, true);

    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }

    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */

    var winUrl = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5__.parse(url, true);

    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }

    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */

    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */

    delete url.query.page;
    event.preventDefault(); // eslint-disable-next-line no-param-reassign

    event.isDefaultPrevented = true; // papathemes-supermarket: quick-fixed stencil-utils for sorting ajax request

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }
    /* MOD by papathemes - supermarket
    ---
    const url = Url.parse(window.location.href);
    const queryParams = decodeURI($(currentTarget).serialize());
    ---
    */


    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParamsArray = $(currentTarget).serializeArray();
    queryParamsArray.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    var queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query);
    /* END MOD */

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var searchParams = new URLSearchParams(window.location.search); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');

      if (linkUrl) {
        // Supermarket Fix undefined
        var re = /page=[0-9]+/i;
        var updatedLinkUrl = linkUrl.replace(re, 'page=1');
        window.history.replaceState({}, document.title, updatedLinkUrl);
      }
    }

    $(window).trigger('statechange');
  } // papathemes-beautify
  ;

  _proto.initPriceSlider = function initPriceSlider() {
    $('#facetedSearch[data-beautify-faceted-shop-by-price]').get().map(function (el) {
      return $(el);
    }).forEach(function ($facetedSearch) {
      var $shopByPrice = $facetedSearch.find('#facetedSearch-content--price');
      $shopByPrice.data('beautifyShopByPrice', $facetedSearch.data('beautifyFacetedShopByPrice'));
      (0,_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__["default"])($shopByPrice);
    });
  };

  return FacetedSearch;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslationDictionary": () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    } // supermarket: Fix url encode RFC 3986


    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }

    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  // Supermarket
  removeParams: function removeParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true); // Let the formatter use the query object to build the new url

    parsed.search = null;

    if (typeof params === 'string') {
      if (parsed.query.hasOwnProperty(params)) {
        parsed.query[params] = null;
        delete parsed.query[params];
      }
    } else if (typeof params === 'object') {
      params.forEach(function (param) {
        if (parsed.query.hasOwnProperty(param)) {
          parsed.query[param] = null;
          delete parsed.query[param];
        }
      });
    } // supermarket: Fix url encode RFC 3986


    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }

    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  // supermarket: Fix faceted value contains both + and a spacing character (ie. "DVD+R DL")
  encodeParam: function encodeParam(val) {
    return encodeURIComponent(val).split('%20').join('+').replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key][ndx]); // supermarket mod
            }
          }
        } else {
          out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key]); // supermarket mod
        }
      }
    }

    return out.substring(1);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2J1bGstb3JkZXJfanMtYXNzZXRzX2pzX3BhcGF0aGVtZXNfY29tcGFyZS1wcm9kdWN0c19qcy1hc3NldHNfanNfdGhlbWVfYy00MDlhZTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTUE7RUFDRiwyQkFBWUMsTUFBWixFQUFvQjtJQUFBOztJQUNoQixJQUFJQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxtQ0FBWixDQUFKLEVBQXNEO01BQ2xEO0lBQ0g7O0lBRURELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1DQUFaLEVBQWlELElBQWpEO0lBRUEsS0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtJQUVBLEtBQUtILE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtJLE9BQUwsR0FBZUMsQ0FBQyxDQUFDLGVBQUQsRUFBa0JMLE1BQWxCLENBQWhCO0lBQ0EsS0FBS00sSUFBTCxHQUFZRCxDQUFDLENBQUMsZ0RBQUQsRUFBbURMLE1BQW5ELENBQWI7SUFDQSxLQUFLTyxJQUFMLEdBQVlGLENBQUMsQ0FBQyxnREFBRCxFQUFtREwsTUFBbkQsQ0FBYjtJQUNBLEtBQUtRLE9BQUwsR0FBZUgsQ0FBQyxDQUFDLGVBQUQsRUFBa0JMLE1BQWxCLENBQWhCO0lBQ0EsS0FBS1MsTUFBTCxHQUFjSixDQUFDLENBQUMsY0FBRCxFQUFpQkwsTUFBakIsQ0FBZjtJQUNBLEtBQUtVLEtBQUwsR0FBYUwsQ0FBQyxDQUFDLE1BQUQsRUFBU0wsTUFBVCxDQUFELENBQWtCVyxHQUFsQixDQUFzQiw2QkFBdEIsQ0FBYixDQWZnQixDQWVtRDs7SUFDbkUsS0FBS0MsTUFBTCxHQUFjUCxDQUFDLENBQUMsY0FBRCxFQUFpQkwsTUFBakIsQ0FBZjtJQUNBLEtBQUthLFdBQUwsR0FBbUJiLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFaLENBQW5CO0lBRUEsSUFB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LEdBQXJCLENBQVIsU0FBcUN0UixRQUFRLENBQUNrWCxXQUFULENBQXFCSSxTQUFTLENBQUNoRyxHQUFELENBQVQsQ0FBZW1HLEdBQWYsQ0FBckIsQ0FBeEMsQ0FEb0MsQ0FDaUQ7WUFDeEY7VUFDSjtRQUNKLENBUkQsTUFRTztVQUNIRixHQUFHLFVBQVF2WCxRQUFRLENBQUNrWCxXQUFULENBQXFCNUYsR0FBckIsQ0FBUixTQUFxQ3RSLFFBQVEsQ0FBQ2tYLFdBQVQsQ0FBcUJJLFNBQVMsQ0FBQ2hHLEdBQUQsQ0FBOUIsQ0FBeEMsQ0FERyxDQUM2RTtRQUNuRjtNQUNKO0lBQ0o7O0lBRUQsT0FBT2lHLEdBQUcsQ0FBQ0csU0FBSixDQUFjLENBQWQsQ0FBUDtFQUNIO0FBbkZZLENBQWpCO0FBc0ZBLGlFQUFlMVgsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMtbW9vbmNhdC8uL2Fzc2V0cy9qcy9iZWF1dGlmeS9zaG9wLWJ5LXByaWNlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLW1vb25jYXQvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9hY3Rpb24tYmFyLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtbW9vbmNhdC8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2J1bGstb3JkZXIuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1tb29uY2F0Ly4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLW1vb25jYXQvLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLW1vb25jYXQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtbW9vbmNhdC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtbW9vbmNhdC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNob3BCeVByaWNlU2xpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgaWYgKCRzY29wZS5kYXRhKCdiZWF1dGlmeVNob3BCeVByaWNlU2xpZGVySW5zdGFuY2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2VTbGlkZXJJbnN0YW5jZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25QcmljZUlucHV0ID0gdGhpcy5vblByaWNlSW5wdXQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJG1pbiA9ICQoJ2lucHV0W25hbWU9XCJtaW5fcHJpY2VcIl0sIGlucHV0W2RhdGEtaW5wdXQtbWluXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJG1heCA9ICQoJ2lucHV0W25hbWU9XCJtYXhfcHJpY2VcIl0sIGlucHV0W2RhdGEtaW5wdXQtbWF4XScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJGNhbmNlbCA9ICQoJ1tkYXRhLWNhbmNlbF0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRjbGVhciA9ICQoJ1tkYXRhLWNsZWFyXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKCdmb3JtJywgJHNjb3BlKS5ub3QoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXScpOyAvLyBleGNsdWRlIGZhY2V0ZWQgZm9ybVxuICAgICAgICB0aGlzLiRhcHBseSA9ICQoJ1tkYXRhLWFwcGx5XScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuc2hvcEJ5UHJpY2UgPSAkc2NvcGUuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZScpO1xuXG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuc2hvcEJ5UHJpY2VbMF0ubG93LnZhbHVlO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLnNob3BCeVByaWNlW3RoaXMuc2hvcEJ5UHJpY2UubGVuZ3RoIC0gMV0uaGlnaC52YWx1ZTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICAgICAgICBwYXJhbXMuZ2V0KCdwcmljZV9taW4nKSB8fCBwYXJhbXMuZ2V0KCdtaW5fcHJpY2UnKSB8fCBtaW4sXG4gICAgICAgICAgICBwYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSB8fCBwYXJhbXMuZ2V0KCdtYXhfcHJpY2UnKSB8fCBtYXgsXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHBhcmFtcy5oYXMoJ3ByaWNlX21pbicpIHx8IHBhcmFtcy5oYXMoJ21pbl9wcmljZScpIHx8IHBhcmFtcy5oYXMoJ3ByaWNlX21heCcpIHx8IHBhcmFtcy5oYXMoJ21heF9wcmljZScpKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9yaWdpbmFsVmFsdWVzID0gdmFsdWVzO1xuXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoe1xuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBzbGlkZTogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1pbi52YWwodWkudmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtYXgudmFsKHVpLnZhbHVlc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKHVpLnZhbHVlc1swXSAhPT0gdGhpcy5vcmlnaW5hbFZhbHVlc1swXSB8fCB1aS52YWx1ZXNbMV0gIT09IHRoaXMub3JpZ2luYWxWYWx1ZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FuY2VsLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRtaW4uYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWluJykgfHwgcGFyYW1zLmdldCgnbWluX3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuICAgICAgICB0aGlzLiRtYXguYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWF4JykgfHwgcGFyYW1zLmdldCgnbWF4X3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCd2YWx1ZXMnLCB0aGlzLm9yaWdpbmFsVmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuJG1pbi52YWwodGhpcy5vcmlnaW5hbFZhbHVlc1swXSk7XG4gICAgICAgICAgICB0aGlzLiRtYXgudmFsKHRoaXMub3JpZ2luYWxWYWx1ZXNbMV0pO1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYXBwbHkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwbHkoKSB7XG4gICAgICAgIGNvbnN0IFtzbGlkZU1pbiwgc2xpZGVNYXhdID0gdGhpcy4kc2xpZGVyLnNsaWRlcigndmFsdWVzJyk7XG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLiRtaW4udmFsKCkpIHx8IHNsaWRlTWluO1xuICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCBzbGlkZU1heDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgcGFyYW1zLnNldCgncHJpY2VfbWluJywgbWluKTtcbiAgICAgICAgcGFyYW1zLnNldCgncHJpY2VfbWF4JywgbWF4KTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3BhcmFtcy50b1N0cmluZygpfWA7XG4gICAgfVxuXG4gICAgb25QcmljZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB8fCAwO1xuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy4kbWluLnByb3AoJ21pbicpKSB8fCAwO1xuICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy4kbWluLnByb3AoJ21heCcpKSB8fCAwO1xuXG4gICAgICAgIGNvbnN0IGN1ck1pbiA9IE51bWJlcih0aGlzLiRtaW4udmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMF07XG4gICAgICAgIGNvbnN0IGN1ck1heCA9IE51bWJlcih0aGlzLiRtYXgudmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMV07XG5cbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xuICAgICAgICAgICAgdmFsID0gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IG1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRtaW4uaXMoZXZlbnQudGFyZ2V0KSAmJiBjdXJNYXggPiAwICYmIHZhbCA+IGN1ck1heCkge1xuICAgICAgICAgICAgdmFsID0gY3VyTWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJG1heC5pcyhldmVudC50YXJnZXQpICYmIGN1ck1pbiA+IDAgJiYgdmFsIDwgY3VyTWluKSB7XG4gICAgICAgICAgICB2YWwgPSBjdXJNaW47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSB2YWw7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICAgICAgICBjb25zdCBuZXdNaW4gPSBOdW1iZXIodGhpcy4kbWluLnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdO1xuICAgICAgICBjb25zdCBuZXdNYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdO1xuXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ3ZhbHVlcycsIFtuZXdNaW4sIG5ld01heF0pO1xuXG4gICAgICAgIGlmIChuZXdNaW4gIT09IHRoaXMub3JpZ2luYWxWYWx1ZXNbMF0gfHwgbmV3TWF4ICE9PSB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdKSB7XG4gICAgICAgICAgICB0aGlzLiRjYW5jZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNlbGVjdG9yID0gJ1tkYXRhLWJlYXV0aWZ5LXNob3AtYnktcHJpY2VdJykge1xuICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiBuZXcgU2hvcEJ5UHJpY2VTbGlkZXIoJChlbCkpKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5sZXQgaW5zdGFudGxvYWRCaW5kZWQgPSBmYWxzZTtcbmxldCBhY3Rpb25CYXI7XG5cbmZ1bmN0aW9uIHJlbW92ZU1vZGVDbGFzcyhpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccyltb2RlLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbn1cblxuY2xhc3MgQWN0aW9uQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB0aGlzLm9uTW9kZUNoYW5nZSA9IHRoaXMub25Nb2RlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnRuQ2xpY2sgPSB0aGlzLm9uU29ydEJ0bkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeSA9ICQoJ1tkYXRhLXNvcnQtYnldJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRzb3J0QnkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkbGltaXQgPSB0aGlzLiRzb3J0QnkuZmluZCgnW25hbWU9bGltaXRdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RlID0gdGhpcy4kc29ydEJ5LmZpbmQoJ2lucHV0W25hbWU9bW9kZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcblxuICAgICAgICBpZiAodXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICAkbGltaXQudmFsKHVybC5xdWVyeS5saW1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgICRtb2RlLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbdmFsdWU9JHt1cmwucXVlcnkubW9kZX1dYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcCBhY3Rpb24gYmFyIGlmIHRoZSBwYWdlIGlzIGNhdGVnb3J5IGJ1bGsgb3JkZXIgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3N1cGVybWFya2V0LXBhZ2UtLXBhZ2VzLWN1c3RvbS1jYXRlZ29yeS1idWxrLW9yZGVyJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3N1cGVybWFya2V0LXBhZ2UtLXBhZ2VzLWN1c3RvbS1icmFuZC1idWxrLW9yZGVyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhyZW1vdmVNb2RlQ2xhc3MpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYG1vZGUtJHskbW9kZS5maWx0ZXIoJzpjaGVja2VkJykudmFsKCl9YCk7XG5cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVpbml0KG5ld09wdGlvbnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciByZWluaXQnKTtcbiAgICAgICAgaWYgKG5ld09wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciBkZXN0cm95ZWQnKTtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpLm9uKCdjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdidXR0b24sIGlucHV0W3R5cGU9XCJidXR0b25cIl0nKS5vbignY2xpY2snLCB0aGlzLm9uU29ydEJ0bkNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdpbnB1dFtuYW1lPW1vZGVdJykub2ZmKCdjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdidXR0b24sIGlucHV0W3R5cGU9XCJidXR0b25cIl0nKS5vZmYoJ2NsaWNrJywgdGhpcy5vblNvcnRCdG5DbGljayk7XG4gICAgfVxuXG4gICAgb25Nb2RlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kZSA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKTtcblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MocmVtb3ZlTW9kZUNsYXNzKVxuICAgICAgICAgICAgLmFkZENsYXNzKGBtb2RlLSR7bW9kZX1gKTtcblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucGFnaW5hdGlvbi1saW5rJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKCRhLmF0dHIoJ2hyZWYnKSwgeyBtb2RlIH0pO1xuICAgICAgICAgICAgJGEuYXR0cignaHJlZicsIHVybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHVybC5xdWVyeS5tb2RlID0gbW9kZTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblNvcnRCdG5DbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkYnRuID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3Qgc29ydCA9ICRidG4uZGF0YSgnc29ydCcpO1xuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ1tuYW1lPVwic29ydFwiXScpLnZhbChzb3J0KTtcbiAgICAgICAgICAgIHV0aWxzLmhvb2tzLmVtaXQoJ3NvcnRCeS1zdWJtaXR0ZWQnLCBldmVudCwgJGJ0bi5jbG9zZXN0KCdmb3JtJykuZ2V0KDApKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxsIHRoaXMgZnVuY3Rpb24gd2hlbjpcbiAqIC0gUGFnZSBpcyBsb2FkZWRcbiAqIC0gQWpheCBwYWdlIHJldHVybmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGlvbkJhckZhY3Rvcnkob3B0aW9ucykge1xuICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgYWN0aW9uQmFyLnJlaW5pdChvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgYWN0aW9uQmFyIHdoZW4gbG9hZGluZyBuZXcgcGFnZVxuICAgIGlmICghaW5zdGFudGxvYWRCaW5kZWQpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbkJhcikge1xuICAgICAgICAgICAgICAgIGFjdGlvbkJhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGluc3RhbnRsb2FkQmluZGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgeyBleHRyYWN0TW9uZXksIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi90aGVtZS11dGlscyc7XG5cbi8vXG4vLyBodHRwczovL2phdmFzY3JpcHQuaW5mby90YXNrL2RlbGF5LXByb21pc2Vcbi8vXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLy9cbi8vIGh0dHBzOi8vaGFja2Vybm9vbi5jb20vZnVuY3Rpb25hbC1qYXZhc2NyaXB0LXJlc29sdmluZy1wcm9taXNlcy1zZXF1ZW50aWFsbHktN2FhYzE4YzQ0MzFlXG4vL1xuZnVuY3Rpb24gcHJvbWlzZVNlcmlhbChmdW5jcykge1xuICAgIHJldHVybiBmdW5jcy5yZWR1Y2UoXG4gICAgICAgIChwcm9taXNlLCBmdW5jKSA9PiBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IGZ1bmMoKS50aGVuKEFycmF5LnByb3RvdHlwZS5jb25jYXQuYmluZChyZXN1bHQpKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShbXSksXG4gICAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGtPcmRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgJHNjb3BlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RvdGFsID0gMDtcblxuICAgICAgICB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UgPSB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2sgPSB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZHVjdEFkZGVkID0gdGhpcy5vblByb2R1Y3RBZGRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWRkQWxsQ2xpY2sgPSB0aGlzLm9uQWRkQWxsQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhcnRRdHlDaGFuZ2UgPSB0aGlzLm9uQ2FydFF0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2sgPSB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlaW5pdCgpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgICQoJ2JvZHknKS5vbignYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuICAgIH1cblxuICAgIHJlaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cCA9ICQoJy5idWxrT3JkZXItcHJvZ3Jlc3NNb2RhbCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NCYXIgPSAkKCcucHJvZ3Jlc3NCYXInLCB0aGlzLiRwcm9ncmVzc1BvcHVwKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtY3VycmVudCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtYWN0aW9ucycsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlID0gJCgnW2RhdGEtY2xvc2VdJywgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2FydElkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF0eUluQ2FydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NoYW5nZScsICdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScsIHRoaXMub25RdWFudGl0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2FqYXgtYWRkdG9jYXJ0LWl0ZW0tYWRkZWQnLCB0aGlzLm9uUHJvZHVjdEFkZGVkKTtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2FydC1xdWFudGl0eS11cGRhdGUnLCB0aGlzLm9uQ2FydFF0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDbG9zZS5vbignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjaGFuZ2UnLCAnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nLCB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdhamF4LWFkZHRvY2FydC1pdGVtLWFkZGVkJywgdGhpcy5vblByb2R1Y3RBZGRlZCk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHRoaXMub25DYXJ0UXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlLm9mZignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NQb3B1cCgpO1xuICAgIH1cblxuICAgIG9uQ2FydFF0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NQb3B1cCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIGhpZGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudC5jc3MoJ3dpZHRoJywgMCk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQuY3NzKCd3aWR0aCcsIGAke3RoaXMucHJvZ3Jlc3NDdXJyZW50IC8gdGhpcy5wcm9ncmVzc1RvdGFsICogMTAwfSVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50LmNzcygnd2lkdGgnLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQmFyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgfVxuXG4gICAgaGlkZVByb2dyZXNzQmFyKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0Jhci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgIH1cblxuICAgIG9uQWRkQWxsQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5pdGVtQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmJ1bGtPcmRlckVudGVyUXR5IHx8ICdQbGVhc2UgZW50ZXIgcHJvZHVjdCBxdWFudGl0eScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRBbGxQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIG9uUHJvZHVjdEFkZGVkKGV2ZW50LCBwcm9kdWN0SWQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXF0eS1pZD0nJHtwcm9kdWN0SWR9J11gKS52YWwoMCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0nKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG5cbiAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1heCBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgIGlmICgocXR5ICsgMSkgPD0gcXVhbnRpdHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkaW5wdXQudmFsKHF0eSk7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBvblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZSgpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IG1vbmV5O1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkaW5wdXQuZGF0YSgnYnVsa29yZGVyUXR5SWQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9IHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLWJ1bGtvcmRlci1wcmljZS1pZD0nJHtwcm9kdWN0SWR9J11gKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsID0gcGFyc2VGbG9hdCgkcHJpY2UuZGF0YSgnYnVsa29yZGVyUHJpY2VWYWx1ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRm10ID0gYCR7JHByaWNlLmRhdGEoJ2J1bGtvcmRlclByaWNlRm9ybWF0dGVkJyl9YDtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRvdGFsID0gTWF0aC5yb3VuZChwcmljZVZhbCAqIHF0eSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICBjb25zdCAkc3VidG90YWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1idWxrb3JkZXItc3VidG90YWwtaWQ9JyR7cHJvZHVjdElkfSddYCk7XG5cbiAgICAgICAgICAgIGlmIChwcmljZUZtdCkge1xuICAgICAgICAgICAgICAgIG1vbmV5ID0gZXh0cmFjdE1vbmV5KHByaWNlRm10KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHN1YnRvdGFsLmh0bWwoY3VycmVuY3lGb3JtYXQoc3VidG90YWwsIG1vbmV5KSk7XG5cbiAgICAgICAgICAgIHRvdGFsICs9IHN1YnRvdGFsO1xuICAgICAgICAgICAgY291bnQgKz0gcXR5O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IGNvdW50O1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci10b3RhbC1jb3VudF0nKS5odG1sKGNvdW50KTtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXRvdGFsLWFtb3VudF0nKS5odG1sKGN1cnJlbmN5Rm9ybWF0KE1hdGgucm91bmQodG90YWwgKiAxMDApIC8gMTAwLCBtb25leSkpO1xuICAgIH1cblxuICAgIGFkZEFsbFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ3VycmVudCA9IDA7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICRpbnB1dC5kYXRhKCdidWxrb3JkZXJRdHlJZCcpO1xuXG4gICAgICAgICAgICBpZiAocXR5ID4gMCkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ3VycmVudCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzUG9wdXAoKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFByb2R1Y3QocHJvZHVjdElkLCBxdHkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCAxcyBiZWZvcmUgYWRkaW5nIHRvIGNhcnQgYSBuZXcgaXRlbSBpbiBvcmRlciB0byBhdm9pZCByZXF1ZXN0IGZhaWxlZC5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUb3RhbCA9IHByb21pc2VzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NQb3B1cCgpO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0JhcigpO1xuXG4gICAgICAgIHByb21pc2VTZXJpYWwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NQb3B1cEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVF0eUluQ2FydCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q291bnRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBhZGRQcm9kdWN0KHByb2R1Y3RJZCwgcXR5KSB7XG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2lkJywgcHJvZHVjdElkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdxdHlbXScsIHF0eSk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZvcm1EYXRhLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcHJvbWlzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICB9XG5cbiAgICB1cGRhdGVRdHlJbkNhcnQoKSB7XG4gICAgICAgICQuZ2V0KCcvYXBpL3N0b3JlZnJvbnQvY2FydCcsIGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcXR5cyA9IHt9O1xuXG4gICAgICAgICAgICBkYXRhWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxdHlzW2l0ZW0ucHJvZHVjdElkXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5c1tpdGVtLnByb2R1Y3RJZF0gKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHlzW2l0ZW0ucHJvZHVjdElkXSA9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWJ1bGtvcmRlci1jYXJ0LXF0eS1pZF0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwYXJzZUludCgkZWwuZGF0YSgnYnVsa29yZGVyQ2FydFF0eUlkJyksIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAocXR5c1twcm9kdWN0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC5odG1sKHF0eXNbcHJvZHVjdElkXSk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5jbG9zZXN0KCcuX3F0eUluQ2FydFdyYXBwZXInKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmh0bWwoJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmNsb3Nlc3QoJy5fcXR5SW5DYXJ0V3JhcHBlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FydENvdW50ZXIoKSB7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQoeyB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCByZXNwKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnQtcXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWxrT3JkZXJGYWN0b3J5KGNvbnRleHQgPSBudWxsLCBzZWxlY3RvciA9ICcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpIHtcbiAgICBjb25zdCAkc2VsZWN0b3IgPSAkKHNlbGVjdG9yKTtcbiAgICBsZXQgYnVsa09yZGVyID0gJHNlbGVjdG9yLmRhdGEoJ2J1bGtPcmRlckluc3RhbmNlJyk7XG5cbiAgICBpZiAoIShidWxrT3JkZXIgaW5zdGFuY2VvZiBCdWxrT3JkZXIpKSB7XG4gICAgICAgIGJ1bGtPcmRlciA9IG5ldyBCdWxrT3JkZXIoY29udGV4dCwgJHNlbGVjdG9yKTtcbiAgICAgICAgJHNlbGVjdG9yLmRhdGEoJ2J1bGtPcmRlckluc3RhbmNlJywgYnVsa09yZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVsa09yZGVyO1xufVxuIiwiaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxubGV0IHNpbmdsZXRvbjtcblxuY29uc3QgY29tcGFyZUxpc3RUbXBsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbC13cmFwcGVyIGlzLWVtcHR5XCIgaWQ9XCJzdXBlcm1hcmtldENvbXBhcmVMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1jbG9zZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZSBidG4tY2xvc2U+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWljb25cIj48c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWRvdWJsZS1hcnJvdy1yaWdodFwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXRleHRcIj57e2NvbXBhcmV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vcGVuXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlIGJ0bi1vcGVuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+T3Blbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWljb25cIj48c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWRvdWJsZS1hcnJvdy1sZWZ0XCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtdGV4dFwiPnt7Y29tcGFyZX19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3Q+e3t7cmVuZGVySXRlbXN9fX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgaHJlZj1cInt7Y29tcGFyZV91cmx9fVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY29tcGFyZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbj57e2NvbXBhcmV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wbGFpbiBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY2xlYXJBbGxcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbD57e2NsZWFyX2FsbH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG5jb25zdCBjb21wYXJlTGlzdEl0ZW1UbXBsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1pdGVtXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT1cInt7aWR9fVwiPlxuICAgICAgICA8YSBocmVmPVwie3t1cmx9fVwiIGNsYXNzPVwicXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwie3tpZH19XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtaW1nIHF1aWNrdmlld1wiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7YWx0fX1cIiB0aXRsZT1cInt7YWx0fX1cIiBkYXRhLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXJlbW92ZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZT1cInt7aWR9fVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3JlbW92ZX19e3thbHR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tY2xvc2VcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5gO1xuXG5jbGFzcyBDb21wYXJlUHJvZHVjdHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMzAwO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcblxuICAgICAgICB0aGlzLiRzY29wZSA9ICQoTXVzdGFjaGUucmVuZGVyKGNvbXBhcmVMaXN0VG1wbCwge1xuICAgICAgICAgICAgY29tcGFyZTogY29udGV4dC5jb21wYXJlQWRkb25MYW5nX2NvbXBhcmUsXG4gICAgICAgICAgICBjbGVhcl9hbGw6IGNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19jbGVhcl9hbGwsXG4gICAgICAgICAgICByZW5kZXJJdGVtczogKCkgPT4gdGhpcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmpvaW4oJycpLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRib2R5LmZpbmQoJy5ib2R5JykuYmVmb3JlKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0XScpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbl0nKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICB0aGlzLmxvYWRTdGF0ZVRvZ2dsZSgpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxvYWRTdGF0ZVRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHMgPSBOdW1iZXIod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3N1cGVybWFya2V0X3JlY2VudGx5Vmlld2VkUHJvZHVjdHNfY2xvc2UnKSk7XG5cbiAgICAgICAgaWYgKHMgJiYgcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzICYmIHMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVUb2dnbGVUb1Nlc3Npb25TdG9yYWdlKHN0YXRlKSB7XG4gICAgICAgIGlmICghd2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3N1cGVybWFya2V0X3JlY2VudGx5Vmlld2VkUHJvZHVjdHNfY2xvc2UnLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFyZVByb2R1Y3RzJyk7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlUHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzKSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKCRlbC5kYXRhKCdjb21wYXJlSWQnKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3Qoe1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJGVsLmRhdGEoJ2NvbXBhcmVJbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICRlbC5kYXRhKCdjb21wYXJlVGl0bGUnKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAkZWwuZGF0YSgnY29tcGFyZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKCRlbC5kYXRhKCdjb21wYXJlUHJvZHVjdFJlbW92ZScpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJvZHVjdChpZCk7XG5cbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUudG9nZ2xlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtY2xlYXJhbGxdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGxQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbYnRuLWNsb3NlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVUb2dnbGVUb1Nlc3Npb25TdG9yYWdlKDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbYnRuLW9wZW5dJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRvZ2dsZVRvU2Vzc2lvblN0b3JhZ2UoMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2R1Y3QocHJvZHVjdCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdC5hcHBlbmQoJGVsKTtcblxuICAgICAgICAkZWwuc2hvdyh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLmZhZGVJbih0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9kdWN0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT0ke2lkfV1gKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtXScpO1xuICAgICAgICAkZWwuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29tcGFyZVVybCgpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCkuam9pbignLycpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uLmF0dHIoJ2hyZWYnLCBgJHt0aGlzLmNvbnRleHQudXJscy5jb21wYXJlfS8ke3BhdGh9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RJdGVtVG1wbCwge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHF1aWNrX3ZpZXc6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3F1aWNrX3ZpZXcsXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3JlbW92ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlUHJvZHVjdHMoY29udGV4dCkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBDb21wYXJlUHJvZHVjdHMoY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8gLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldDogcXVpY2tmaXggc3RvcCBzdGVuY2lsLXV0aWxzIFNvcnRCeUhvb2sgc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIHNlbGVjdCBjaGFuZ2VkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5LCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi9jb2xsYXBzaWJsZSc7IC8vIHBhcGF0aGVtZXMtbW9vbmNhdCBtb2RcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbmltcG9ydCBpbml0U2hvcEJ5UHJpY2VTbGlkZXIgZnJvbSAnLi4vLi4vYmVhdXRpZnkvc2hvcC1ieS1wcmljZS1zbGlkZXInO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5fYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlciwgI2JlYXV0aWZ5X19maW5kR2F0ZS1zaWRlYmFyIC5ibG9ja2VyJywgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLl9hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgZWRpdGVkXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgdGhpcy5pbml0UHJpY2VTbGlkZXIoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrT2ZIb3Jpem9udGFsTGF5b3V0ID0gdGhpcy5vbkRvY3VtZW50Q2xpY2tPZkhvcml6b250YWxMYXlvdXQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICAkKCdib2R5Jykub25lKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRGaW5kR2F0ZSgpO1xuICAgIH1cblxuICAgIGJpbmRIb3Jpem9udGFsTGF5b3V0RXZlbnRzKCkge1xuICAgICAgICBpZiAoISQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKS5oYXNDbGFzcygnX2hvcml6b250YWwnKSkgcmV0dXJuO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGlja09mSG9yaXpvbnRhbExheW91dCk7XG5cbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLm9uKENvbGxhcHNpYmxlRXZlbnRzLm9wZW4sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBjb2xsYXBzaWJsZSBlbGVtZW50c1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLm5vdChldmVudC5jdXJyZW50VGFyZ2V0KS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB0aGlzLmNvbGxhcHNlRmFjZXQoJChhY2NvcmRpb25Ub2dnbGUpKSk7XG5cbiAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIGRyb3Bkb3duIHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpPy4kdGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpPy4kdG9nZ2xlO1xuICAgICAgICAgICAgaWYgKCRjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuY3NzKCdsZWZ0JywgJHRvZ2dsZS5wb3NpdGlvbigpLmxlZnQpO1xuICAgICAgICAgICAgICAgICRjb250ZW50LmNzcygnbWFyZ2luTGVmdCcsICcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9ICRjb250ZW50Lm9mZnNldCgpLmxlZnQgKyAkY29udGVudC5vdXRlcldpZHRoKCkgKyAxMDtcbiAgICAgICAgICAgICAgICBpZiAocmlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LmNzcygnbWFyZ2luTGVmdCcsIC0ocmlnaHQgLSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNb3ZlIHRoZSBkcm9wZG93biBvdXRzaWRlIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5maW5kKCcuX2FjY29yZGlvbi0tbmF2TGlzdCcpLmVhY2goKGksIG5hdkxpc3RFbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3RFbCk7XG4gICAgICAgICAgICBjb25zdCAkY29udGVudHMgPSAkbmF2TGlzdC5maW5kKCcuX2FjY29yZGlvbi1jb250ZW50JylcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICAvLyBJbXByb3ZlIGFjY2Vzc2liaWxpdHkgLSBlbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBvbiBkcm9wZG93biBvZiBlYWNoIGZhY2V0ZWQgaXRlbVxuICAgICAgICAgICAgaWYgKCRjb250ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgIC5pbnNlcnRBZnRlcigkbmF2TGlzdClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPGEgY2xhc3M9XCJpcy1zck9ubHkgX2Nsb3NlQnRuXCIgaHJlZj1cIiNcIj5DbG9zZTwvYT4nKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaCgoaiwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLmdldCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChlbDIgPT4gJChlbDIpLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGluc3RhbmNlID0+IGluc3RhbmNlLnRhcmdldElkID09PSAkY29udGVudC5hdHRyKCdpZCcpKVswXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQub24oJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgY29sbGFwc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGUuJHRvZ2dsZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5maW5kKCdhLl9jbG9zZUJ0bicpLm9uKCdjbGljayBmb2N1cyBrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGFwc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGUuJHRvZ2dsZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kSG9yaXpvbnRhbExheW91dEV2ZW50cygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrT2ZIb3Jpem9udGFsTGF5b3V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSBhbGwgY29sbGFwc2libGVzIHdoZW4gY2xpY2sgb3V0c2lkZVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5LkV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uRG9jdW1lbnRDbGlja09mSG9yaXpvbnRhbExheW91dChldmVudCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZUVsZW1lbnRzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpXG4gICAgICAgICAgICAuZ2V0KClcbiAgICAgICAgICAgIC5tYXAoZWwgPT4gJChlbCkuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpKVxuICAgICAgICAgICAgLmZpbHRlcihjb2xsYXBzaWJsZSA9PiBjb2xsYXBzaWJsZSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKF9jb2xsYXBzaWJsZUVsZW1lbnRzLCBjb2xsYXBzaWJsZSkgPT4gWy4uLl9jb2xsYXBzaWJsZUVsZW1lbnRzLCAuLi5jb2xsYXBzaWJsZS4kdGFyZ2V0LmdldCgpLCAuLi5jb2xsYXBzaWJsZS4kdG9nZ2xlLmdldCgpXSwgW10pO1xuXG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkKGNvbGxhcHNpYmxlRWxlbWVudHMpKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICBpbml0RmluZEdhdGUoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh1cmxVdGlscy5nZXRVcmwoKSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHVybC5xdWVyeS5fYnNfd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHVybC5xdWVyeS5fYnNfd2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5maW5kR2F0ZSh3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kR2F0ZSh3aWR0aCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkuX2JzX3dpZHRoO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGgnXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoJ107XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ107XG5cbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBzaG93TW9yZVVybCA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcblxuICAgICAgICAgICAgY29uc3QgbWluV2lkdGhQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmluZE1pbldpZHRoVmFsdWVzID0gJHNjb3BlID0+ICRzY29wZS5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5nZXQoKS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdXJsID0gVXJsLnBhcnNlKCQoZWwpLmF0dHIoJ2hyZWYnKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoX3VybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoJ10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtaW5XaWR0aCA9ICQoJyNmYWNldGVkU2VhcmNoIFtkYXRhLWZhY2V0PVwiTWluaW11bSBHYXRlIFdpZHRoXCJdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRtaW5XaWR0aC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXRQYWdlKHNob3dNb3JlVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiAnTWluaW11bSBHYXRlIFdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZE1pbldpZHRoVmFsdWVzKCQocmVzcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5kTWluV2lkdGhWYWx1ZXMoJG1pbldpZHRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRNYXhXaWR0aFZhbHVlcyA9ICRzY29wZSA9PiAkc2NvcGUuZmluZCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXRdJykuZ2V0KCkubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3VybCA9IFVybC5wYXJzZSgkKGVsKS5hdHRyKCdocmVmJyksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKF91cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aCddKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCAkbWF4V2lkdGggPSAkKCcjZmFjZXRlZFNlYXJjaCBbZGF0YS1mYWNldD1cIk1heGltdW0gR2F0ZSBXaWR0aFwiXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbWF4V2lkdGguZGF0YSgnaGFzTW9yZVJlc3VsdHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0UGFnZShzaG93TW9yZVVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogJ01heGltdW0gR2F0ZSBXaWR0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNYXhXaWR0aFZhbHVlcygkKHJlc3ApKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZE1heFdpZHRoVmFsdWVzKCRtYXhXaWR0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbWluV2lkdGhQcm9taXNlLCBtYXhXaWR0aFByb21pc2VdKS50aGVuKChbbWluV2lkdGhBcnIsIG1heFdpZHRoQXJyXSkgPT4ge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeS5fYnNfd2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aFtdJ10gPSBtaW5XaWR0aEFyci5maWx0ZXIodmFsID0+IHZhbCA8PSB3aWR0aCk7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGhbXSddID0gbWF4V2lkdGhBcnIuZmlsdGVyKHZhbCA9PiB2YWwgPj0gd2lkdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXS5sZW5ndGggPT09IG1pbldpZHRoQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ10ubGVuZ3RoID09PSBtYXhXaWR0aEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoW10nXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCwgdXJsKSB7IC8vIHBhcGF0aGVtZXM6IGZhY2V0ZWQtaW5maW5pdGUtc2Nyb2xsIG1vZFxuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50LCB1cmwpOyAvLyBwYXBhdGhlbWVzOiBmYWNldGVkLWluZmluaXRlLXNjcm9sbCBtb2RcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIHRoaXMuaW5pdFByaWNlU2xpZGVyKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy8gU3VwZXJtYXJrZXRcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVmlld0NhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVWaWV3Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLmdldFVybCgpOyAvLyBwYXBhdGhlbWVzOiBmYWNldGVkLWluZmluaXRlLXNjcm9sbCBtb2RcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmwsIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQsIHVybCk7IC8vIHBhcGF0aGVtZXM6IGZhY2V0ZWQtaW5maW5pdGUtc2Nyb2xsIG1vZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIHRoaXMuYmluZEhvcml6b250YWxMYXlvdXRFdmVudHMoKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IHt7e1xuICAgICAgICBjb25zdCAkbWluTWF4RmFjZXRzID0gJCgnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdC0tbWF4aW11bS1nYXRlLXdpZHRoLCAjZmFjZXRlZFNlYXJjaC1jb250ZW50LS1taW5pbXVtLWdhdGUtd2lkdGgnKTtcbiAgICAgICAgaWYgKCRtaW5NYXhGYWNldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLnNpZGViYXJCbG9jay0tZmluZEdhdGUnKS5zaG93KCk7XG4gICAgICAgICAgICAkbWluTWF4RmFjZXRzLmNsb3Nlc3QoJy5fYWNjb3JkaW9uLWJsb2NrJykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnNpZGViYXJCbG9jay0tZmluZEdhdGUnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuICAgICAgICBpZiAodXJsLnF1ZXJ5Ll9ic193aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBOdW1iZXIodXJsLnF1ZXJ5Ll9ic193aWR0aCk7XG4gICAgICAgICAgICAkKCcjYmVhdXRpZnlfX2ZpbmRHYXRlLXNpZGViYXIgZm9ybSBbbmFtZT1fYnNfd2lkdGhdJykudmFsKHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjYmVhdXRpZnlfX2ZpbmRHYXRlLXNpZGViYXIgZm9ybScpLm9mZignc3VibWl0Jykub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZEdhdGUoJChldmVudC50YXJnZXQpLmZpbmQoJ1tuYW1lPV9ic193aWR0aF0nKS52YWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9fX1cblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgdGhpcy51bmJpbmRIb3Jpem9udGFsTGF5b3V0RXZlbnRzKCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCB3aW5VcmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5Lm1vZGUgPSB3aW5VcmwucXVlcnkubW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5saW1pdCA9IHdpblVybC5xdWVyeS5saW1pdDtcbiAgICAgICAgfVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogZmFjZXRVcmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhmYWNldFVybC5xdWVyeSkgfSkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgd2luVXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgaWYgKHdpblVybC5xdWVyeS5tb2RlKSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5tb2RlID0gd2luVXJsLnF1ZXJ5Lm1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpblVybC5xdWVyeS5saW1pdCkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubGltaXQgPSB3aW5VcmwucXVlcnkubGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogZmFjZXRVcmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhmYWNldFVybC5xdWVyeSkgfSkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5W3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBFTkQgTU9EICovXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gdHJ1ZTsgLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldDogcXVpY2stZml4ZWQgc3RlbmNpbC11dGlscyBmb3Igc29ydGluZyBhamF4IHJlcXVlc3RcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSk7XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtc0FycmF5ID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICBxdWVyeVBhcmFtc0FycmF5LmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5W3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KTtcbiAgICAgICAgLyogRU5EIE1PRCAqL1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogYD8ke3F1ZXJ5UGFyYW1zfWAgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxuICAgICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAobGlua1VybCkgeyAvLyBTdXBlcm1hcmtldCBGaXggdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlua1VybCA9IGxpbmtVcmwucmVwbGFjZShyZSwgJ3BhZ2U9MScpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdFByaWNlU2xpZGVyKCkge1xuICAgICAgICAkKCcjZmFjZXRlZFNlYXJjaFtkYXRhLWJlYXV0aWZ5LWZhY2V0ZWQtc2hvcC1ieS1wcmljZV0nKS5nZXQoKS5tYXAoZWwgPT4gJChlbCkpXG4gICAgICAgICAgICAuZm9yRWFjaCgkZmFjZXRlZFNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHNob3BCeVByaWNlID0gJGZhY2V0ZWRTZWFyY2guZmluZCgnI2ZhY2V0ZWRTZWFyY2gtY29udGVudC0tcHJpY2UnKTtcbiAgICAgICAgICAgICAgICAkc2hvcEJ5UHJpY2UuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZScsICRmYWNldGVkU2VhcmNoLmRhdGEoJ2JlYXV0aWZ5RmFjZXRlZFNob3BCeVByaWNlJykpO1xuICAgICAgICAgICAgICAgIGluaXRTaG9wQnlQcmljZVNsaWRlcigkc2hvcEJ5UHJpY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCB1cmwgZW5jb2RlIFJGQyAzOTg2XG4gICAgICAgIGlmIChwYXJzZWQucXVlcnkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWFyY2ggPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHBhcnNlZC5xdWVyeSk7XG4gICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICByZW1vdmVQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucXVlcnkuaGFzT3duUHJvcGVydHkocGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbXNdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5W3BhcmFtc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5Lmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeVtwYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBlcm1hcmtldDogRml4IHVybCBlbmNvZGUgUkZDIDM5ODZcbiAgICAgICAgaWYgKHBhcnNlZC5xdWVyeSkge1xuICAgICAgICAgICAgcGFyc2VkLnNlYXJjaCA9IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcocGFyc2VkLnF1ZXJ5KTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICAvLyBzdXBlcm1hcmtldDogRml4IGZhY2V0ZWQgdmFsdWUgY29udGFpbnMgYm90aCArIGFuZCBhIHNwYWNpbmcgY2hhcmFjdGVyIChpZS4gXCJEVkQrUiBETFwiKVxuICAgIGVuY29kZVBhcmFtOiAodmFsKSA9PiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5zcGxpdCgnJTIwJykuam9pbignKycpLnJlcGxhY2UoL1shJygpKl0vZywgYyA9PiBgJSR7Yy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7dXJsVXRpbHMuZW5jb2RlUGFyYW0oa2V5KX09JHt1cmxVdGlscy5lbmNvZGVQYXJhbShxdWVyeURhdGFba2V5XVtuZHhdKX1gOyAvLyBzdXBlcm1hcmtldCBtb2RcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7dXJsVXRpbHMuZW5jb2RlUGFyYW0oa2V5KX09JHt1cmxVdGlscy5lbmNvZGVQYXJhbShxdWVyeURhdGFba2V5XSl9YDsgLy8gc3VwZXJtYXJrZXQgbW9kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIl0sIm5hbWVzIjpbIlNob3BCeVByaWNlU2xpZGVyIiwiJHNjb3BlIiwiZGF0YSIsIm9uUHJpY2VJbnB1dCIsImJpbmQiLCIkc2xpZGVyIiwiJCIsIiRtaW4iLCIkbWF4IiwiJGNhbmNlbCIsIiRjbGVhciIsIiRmb3JtIiwibm90IiwiJGFwcGx5Iiwic2hvcEJ5UHJpY2UiLCJtaW4iLCJsb3ciLCJ2YWx1ZSIsIm1heCIsImxlbmd0aCIsImhpZ2giLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInZhbHVlcyIsImdldCIsImhhcyIsInNob3ciLCJoaWRlIiwib3JpZ2luYWxWYWx1ZXMiLCJzbGlkZXIiLCJyYW5nZSIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbCIsImF0dHIiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiYXBwbHkiLCJzbGlkZU1pbiIsInNsaWRlTWF4IiwiTnVtYmVyIiwic2V0IiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsInRhcmdldCIsInByb3AiLCJjdXJNaW4iLCJjdXJNYXgiLCJpcyIsIm5ld01pbiIsIm5ld01heCIsInNlbGVjdG9yIiwiZWFjaCIsImkiLCJlbCIsIlVybCIsInV0aWxzIiwidXJsVXRpbHMiLCJpbnN0YW50bG9hZEJpbmRlZCIsImFjdGlvbkJhciIsInJlbW92ZU1vZGVDbGFzcyIsImluZGV4IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJqb2luIiwiQWN0aW9uQmFyIiwib3B0aW9ucyIsIm9uTW9kZUNoYW5nZSIsIm9uU29ydEJ0bkNsaWNrIiwiaW5pdCIsIiRzb3J0QnkiLCIkbGltaXQiLCJmaW5kIiwiJG1vZGUiLCJ1cmwiLCJwYXJzZSIsImhyZWYiLCJxdWVyeSIsImxpbWl0IiwibW9kZSIsImZpbHRlciIsIiRib2R5IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidW5iaW5kRXZlbnRzIiwiYmluZEV2ZW50cyIsInJlaW5pdCIsIm5ld09wdGlvbnMiLCJkZXN0cm95Iiwib2ZmIiwiJGEiLCJyZXBsYWNlUGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJmb3JtYXQiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiJGJ0biIsImN1cnJlbnRUYXJnZXQiLCJzb3J0IiwiaG9va3MiLCJlbWl0IiwiY2xvc2VzdCIsImFjdGlvbkJhckZhY3RvcnkiLCJzd2FsIiwiZXh0cmFjdE1vbmV5IiwiY3VycmVuY3lGb3JtYXQiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicHJvbWlzZVNlcmlhbCIsImZ1bmNzIiwicmVkdWNlIiwicHJvbWlzZSIsImZ1bmMiLCJ0aGVuIiwicmVzdWx0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJCdWxrT3JkZXIiLCJjb250ZXh0IiwiaXRlbUNvdW50IiwicHJvZ3Jlc3NDdXJyZW50IiwicHJvZ3Jlc3NUb3RhbCIsIm9uUXVhbnRpdHlDaGFuZ2UiLCJvblF1YW50aXR5QnV0dG9uQ2xpY2siLCJvblByb2R1Y3RBZGRlZCIsIm9uQWRkQWxsQ2xpY2siLCJvbkNhcnRRdHlDaGFuZ2UiLCJvblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrIiwiJHByb2dyZXNzUG9wdXAiLCIkcHJvZ3Jlc3NCYXIiLCIkcHJvZ3Jlc3NQb3B1cEN1cnJlbnQiLCIkcHJvZ3Jlc3NQb3B1cEFjdGlvbnMiLCIkcHJvZ3Jlc3NQb3B1cENsb3NlIiwiY2FsY3VsYXRlIiwiY2FydElkIiwidXBkYXRlUXR5SW5DYXJ0IiwiaGlkZVByb2dyZXNzUG9wdXAiLCJzaG93UHJvZ3Jlc3NQb3B1cCIsImNzcyIsInVwZGF0ZVByb2dyZXNzUG9wdXAiLCJzaG93UHJvZ3Jlc3NQb3B1cEFjdGlvbnMiLCJzaG93UHJvZ3Jlc3NCYXIiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJmaXJlIiwidGV4dCIsImJ1bGtPcmRlckVudGVyUXR5IiwiaWNvbiIsImFkZEFsbFByb2R1Y3RzIiwicHJvZHVjdElkIiwiJHRhcmdldCIsIiRpbnB1dCIsInF1YW50aXR5TWluIiwicGFyc2VJbnQiLCJxdWFudGl0eU1heCIsInF0eSIsInRvdGFsIiwiY291bnQiLCJtb25leSIsIiRwcmljZSIsInByaWNlVmFsIiwicGFyc2VGbG9hdCIsInByaWNlRm10Iiwic3VidG90YWwiLCJNYXRoIiwicm91bmQiLCIkc3VidG90YWwiLCJodG1sIiwicHJvbWlzZXMiLCJwdXNoIiwiYWRkUHJvZHVjdCIsInVwZGF0ZUNhcnRDb3VudGVyIiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCJmb3JtRGF0YSIsImFwcGVuZCIsImFwaSIsImNhcnQiLCJpdGVtQWRkIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhbGVydCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwicXR5cyIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiJGVsIiwiZ2V0Q29udGVudCIsInRlbXBsYXRlIiwicmVzcCIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJ0cmlnZ2VyIiwiYnVsa09yZGVyRmFjdG9yeSIsIiRzZWxlY3RvciIsImJ1bGtPcmRlciIsIk11c3RhY2hlIiwic2luZ2xldG9uIiwiY29tcGFyZUxpc3RUbXBsIiwiY29tcGFyZUxpc3RJdGVtVG1wbCIsIkNvbXBhcmVQcm9kdWN0cyIsImFuaW1hdGlvblRpbWUiLCJwcm9kdWN0cyIsImxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJyZW5kZXIiLCJjb21wYXJlIiwiY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlIiwiY2xlYXJfYWxsIiwiY29tcGFyZUFkZG9uTGFuZ19jbGVhcl9hbGwiLCJyZW5kZXJJdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJyZW5kZXJJdGVtIiwiYmVmb3JlIiwiJHByb2R1Y3RMaXN0IiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwibG9hZFN0YXRlVG9nZ2xlIiwic2Vzc2lvblN0b3JhZ2UiLCJzIiwiZ2V0SXRlbSIsInJlbW92ZSIsInNhdmVUb2dnbGVUb1Nlc3Npb25TdG9yYWdlIiwic3RhdGUiLCJzZXRJdGVtIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsImUiLCJzYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSIsInN0cmluZ2lmeSIsImlkIiwiaW1hZ2UiLCJhbHQiLCJyZW1vdmVQcm9kdWN0IiwidG9nZ2xlQ2xhc3MiLCJjbGVhckFsbFByb2R1Y3RzIiwiZmFkZUluIiwiZmFkZU91dCIsInBhdGgiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiUGFnZU1hbmFnZXIiLCJDYXRhbG9nUGFnZSIsIm9uU29ydEJ5U3VibWl0IiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsInBhcmFtIiwibmFtZSIsInBhZ2UiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIlZhbGlkYXRvcnMiLCJub2QiLCJpbml0U2hvcEJ5UHJpY2VTbGlkZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImluaXRQcmljZVNsaWRlciIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwib25Qb3BTdGF0ZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwib25Eb2N1bWVudENsaWNrT2ZIb3Jpem9udGFsTGF5b3V0Iiwib25lIiwiaW5pdEZpbmRHYXRlIiwiYmluZEhvcml6b250YWxMYXlvdXRFdmVudHMiLCJvcGVuIiwiY29sbGFwc2VGYWNldCIsIiRjb250ZW50IiwiJHRvZ2dsZSIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0Iiwib2Zmc2V0Iiwib3V0ZXJXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImZvY3VzIiwibmF2TGlzdEVsIiwiJG5hdkxpc3QiLCIkY29udGVudHMiLCJpbnNlcnRBZnRlciIsImoiLCJlbDIiLCJpbnN0YW5jZSIsImtleSIsImNsb3NlIiwic3RvcFByb3BhZ2F0aW9uIiwidW5iaW5kSG9yaXpvbnRhbExheW91dEV2ZW50cyIsImNvbGxhcHNpYmxlRWxlbWVudHMiLCJfY29sbGFwc2libGVFbGVtZW50cyIsImdldFVybCIsIl9ic193aWR0aCIsIndpZHRoIiwiZmluZEdhdGUiLCJzaG93TW9yZVVybCIsIm1pbldpZHRoUHJvbWlzZSIsImZpbmRNaW5XaWR0aFZhbHVlcyIsIl91cmwiLCIkbWluV2lkdGgiLCJnZXRQYWdlIiwic2hvd01vcmUiLCJsaXN0X2FsbCIsIm1heFdpZHRoUHJvbWlzZSIsImZpbmRNYXhXaWR0aFZhbHVlcyIsIiRtYXhXaWR0aCIsImFsbCIsIm1pbldpZHRoQXJyIiwibWF4V2lkdGhBcnIiLCJnb1RvVXJsIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInVwZGF0ZVZpZXdDYWxsYmFjayIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiJG1pbk1heEZhY2V0cyIsIiRsaW5rIiwid2luVXJsIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJxdWVyeVBhcmFtc0FycmF5Iiwic2VhcmNoUGFyYW1zIiwibGlua1VybCIsInJlIiwidXBkYXRlZExpbmtVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVN0YXRlIiwiJGZhY2V0ZWRTZWFyY2giLCIkc2hvcEJ5UHJpY2UiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJzcGxpdCIsInBvcCIsImFjYyIsInBhcnNlZCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUGFyYW1zIiwiZW5jb2RlUGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJjIiwiY2hhckNvZGVBdCIsInF1ZXJ5RGF0YSIsIm91dCIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9
