"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_bulk-order_js-assets_js_theme_catalog_js-assets_js_theme_common_faceted--e6cbb0"],{

/***/ "./assets/js/beautify/jquery-ui.js":
/*!*****************************************!*\
  !*** ./assets/js/beautify/jquery-ui.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _andxor_jquery_ui_touch_punch_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @andxor/jquery-ui-touch-punch-fix */ "./node_modules/@andxor/jquery-ui-touch-punch-fix/jquery.ui.touch-punch.js");
/* harmony import */ var _andxor_jquery_ui_touch_punch_fix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_andxor_jquery_ui_touch_punch_fix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ "./node_modules/jquery-ui/ui/widgets/slider.js");
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1__);
//
// Import query-ui widgets/effects used in the theme here
//



/***/ }),

/***/ "./assets/js/beautify/shop-by-price-slider.js":
/*!****************************************************!*\
  !*** ./assets/js/beautify/shop-by-price-slider.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jquery_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery-ui */ "./assets/js/beautify/jquery-ui.js");
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
    event.target.value = val; /* eslint-disable-line no-param-reassign */

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

/***/ "./assets/js/papathemes/bulk-order.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/bulk-order.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkOrder: () => (/* binding */ BulkOrder),
/* harmony export */   "default": () => (/* binding */ bulkOrderFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/papathemes/theme-utils.js");
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
    this.reinit();

    // Supermarket
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
    var qty = parseInt($input.val(), 10);
    if (Number.isNaN(qty)) {
      qty = quantityMin || 1;
    }

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
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this3.progressCurrent++;
                _this3.updateProgressPopup();
                _context.next = 4;
                return _this3.addProduct(productId, qty);
              case 4:
                // eslint-disable-line no-unused-expressions

                $input.val(0);
                _this3.calculate();

                // wait 1s before adding to cart a new item in order to avoid request failed.
                _context.next = 8;
                return delay(1000);
              case 8:
              case "end":
                return _context.stop();
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
      _this3.hideProgressBar();
      // this.updateQtyInCart();
      _this3.updateCartCounter();
    });
  };
  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId, qty) {
      var formData, promise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
                var errorMessage = err || response.data.error;

                // Guard statement
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
      }

      // Update cart counter
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
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
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
    event.isDefaultPrevented = true; /* eslint-disable-line */ // papathemes-supermarket: quickfix stop stencil-utils SortByHook submitting the form when select changed
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
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/delay */ "./node_modules/lodash/delay.js");
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/once */ "./node_modules/lodash/once.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");
/* harmony import */ var _theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../theme/common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










 // papathemes-mooncat mod


 // Papathemes - Supermarket


var mediumMediaQueryList = (0,_theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_15__["default"])('medium');

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
      facetedSearchFilterItems: '.facetedSearch-filterItems .form-input',
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_9__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_5___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];
    this.load = false;

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // papathemes-beautify
    this.initPriceSlider();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
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
    this.bindEvents();

    // Supermarket
    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    });

    // papathemes-beautify
    this.initFindGate();
  }
  var _proto = FacetedSearch.prototype;
  _proto.bindHorizontalLayoutEvents = function bindHorizontalLayoutEvents() {
    var _this2 = this;
    if (!$('#faceted-search-container').hasClass('_horizontal')) return;
    $(document).on('click', this.onDocumentClickOfHorizontalLayout);
    $(this.options.accordionToggleSelector).on(_collapsible__WEBPACK_IMPORTED_MODULE_10__.CollapsibleEvents.open, function (event) {
      var _$$data, _$$data2;
      // Close all other collapsible elements
      $(_this2.options.accordionToggleSelector).not(event.currentTarget).each(function (index, accordionToggle) {
        return _this2.collapseFacet($(accordionToggle));
      });

      // Correct the dropdown position
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
    });

    // Move the dropdown outside the scrolling container
    $(this.options.componentSelector).find('._accordion--navList').each(function (i, navListEl) {
      var $navList = $(navListEl);
      var $contents = $navList.find('._accordion-content').insertAfter($navList);

      // Improve accessibility - enable keyboard navigation on dropdown of each faceted item
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
   */;
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
  }

  // papathemes-beautify
  ;
  _proto.initFindGate = function initFindGate() {
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(), true);
    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      this.findGate(width);
    }
  };
  _proto.findGate = function findGate(width) {
    var _this3 = this;
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(), true);
    delete url.query._bs_width;
    delete url.query['Minimum Gate Width'];
    delete url.query['Minimum Gate Width[]'];
    delete url.query['Maximum Gate Width'];
    delete url.query['Maximum Gate Width[]'];
    if (width) {
      var showMoreUrl = url__WEBPACK_IMPORTED_MODULE_7__.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query)
      });
      var minWidthPromise = new Promise(function (resolve) {
        var findMinWidthValues = function findMinWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_7__.parse($(el).attr('href'), true);
            return Number(_url.query['Minimum Gate Width']);
          });
        };
        var $minWidth = $('#facetedSearch [data-facet="Minimum Gate Width"]');
        if ($minWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(showMoreUrl, {
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
            var _url = url__WEBPACK_IMPORTED_MODULE_7__.parse($(el).attr('href'), true);
            return Number(_url.query['Maximum Gate Width']);
          });
        };
        var $maxWidth = $('#facetedSearch [data-facet="Maximum Gate Width"]');
        if ($maxWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(showMoreUrl, {
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
        _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
          pathname: url.pathname,
          search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query)
        }));
      });
    } else {
      _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query)
      }));
    }
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    this.unbindEvents();
  }

  // Public methods
  ;
  _proto.refreshView = function refreshView(content, url) {
    // papathemes: faceted-infinite-scroll mod
    if (content) {
      this.callback(content, url); // papathemes: faceted-infinite-scroll mod
    }
    (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_13__["default"])(); // Papathemes - Supermarket

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // papathemes-beautify
    this.initPriceSlider();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();
    if ($('#faceted-search-container').hasClass('_horizontal')) {
      var dropdownId = $('._accordion-content.is-open', '#facetedSearch').attr('id');
      $('._accordion-navigation', '#facetedSearch').each(function (index, item) {
        if (dropdownId === $(item).attr('aria-controls')) {
          $('._accordion-content.is-open', '#facetedSearch').css('left', $(item).position().left);
        }
      });
    }

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this4 = this;
    // Supermarket
    if (this.updateViewCallback) {
      return this.updateViewCallback();
    }
    $(this.options.blockerSelector).show();
    var url = _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(); // papathemes: faceted-infinite-scroll mod

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(url, this.requestOptions, function (err, content) {
      $(_this4.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this4.refreshView(content, url); // papathemes: faceted-infinite-scroll mod

      // kitchenary mod
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.emit('facetedSearch-updateViewComplete', _this4);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_4___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_4___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this5 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl();
    var navListHeight = $navList.height();
    if (this.requestOptions.showMore && $navList.data('loadResult') !== 'on') {
      $(this.options.blockerSelector).show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        $navList.html(response);
        if ($('#faceted-search-container').hasClass('_horizontal')) {
          $navList.css({
            height: navListHeight + "px",
            marginBottom: '21px'
          });
        } else {
          $navList.css({
            height: navListHeight + "px",
            marginBottom: '50px'
          });
        }
        $navList.parent().find('.toggleLink').hide();
        $navList.removeAttr('data-count-item');
        $(_this5.options.blockerSelector).hide();
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var _this6 = this;
    var $navList = $(event.currentTarget).parent().next();
    var query = $(event.currentTarget).val().toLowerCase();
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl();
    var navListHeight = $navList.height();
    if (this.requestOptions.showMore && $navList.data('loadResult') === 'off' && query.length > 0 && !$navList.next().is(':hidden') && !this.load && $navList.next('.toggleLink').length > 0) {
      this.load = true;
      $(this.options.blockerSelector).show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          console.error(err);
          return;
        }
        $navList.html(response);
        if ($('#faceted-search-container').hasClass('_horizontal')) {
          $navList.css({
            height: navListHeight + "px",
            marginBottom: '21px'
          });
        } else {
          $navList.css({
            height: navListHeight + "px",
            marginBottom: '50px'
          });
        }
        $navList.data('loadResult', 'on');
        $(_this6.options.blockerSelector).hide();
        var $items = $('.navList-item', $navList);
        _this6.load = false;
        $navList.next().hide();
        $items.each(function (index, element) {
          var text = $(element).text().toLocaleLowerCase();
          if (text.indexOf(query) !== -1) {
            $(element).show();
          } else {
            $(element).hide();
          }
        });
      });
    }
    if ($navList.data('loadResult') === 'on' || $navList.next().is(':hidden') || $navList.next('.toggleLink').length === 0) {
      var $items = $('.navList-item', $navList);
      $navList.css('height', navListHeight + "px");
      $items.each(function (index, element) {
        var text = $(element).text().toLocaleLowerCase();
        if (text.indexOf(query) !== -1) {
          $(element).show();
        } else {
          $(element).hide();
        }
      });
      if (query.length <= 0 && $navList.is('[data-count-item]')) {
        $navList.next().show();
        $navList.css({
          overflowY: 'hidden',
          marginBottom: '0px'
        });
      } else {
        $navList.next().hide();
        if ($navList.parent().find('.toggleLink').length === 0) {
          $navList.css('margin-bottom', '0px');
        } else if ($('#faceted-search-container').hasClass('_horizontal')) {
          $navList.css('margin-bottom', '21px');
        } else {
          $navList.css('margin-bottom', '50px');
        }
      }
    }
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
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this7.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this8 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this8.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_12__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_11__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this9 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(_this9.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this9.collapseFacetItems($navList);
      } else {
        _this9.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this10 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(_this10.collapsedFacets, id);
      if (shouldCollapse) {
        _this10.collapseFacet($accordionToggle);
      } else {
        _this10.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    var _this11 = this;
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);
    this.bindHorizontalLayoutEvents();

    // papathemes-beautify {{{
    var $minMaxFacets = $('#facetedSearch-navList--maximum-gate-width, #facetedSearch-content--minimum-gate-width');
    if ($minMaxFacets.length > 0) {
      $('.sidebarBlock--findGate').show();
      $minMaxFacets.closest('._accordion-block').hide();
    } else {
      $('.sidebarBlock--findGate').hide();
    }
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(), true);
    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      $('#beautify__findGate-sidebar form [name=_bs_width]').val(width);
    }
    $('#beautify__findGate-sidebar form').off('submit').on('submit', function (event) {
      event.preventDefault();
      _this11.findGate($(event.target).find('[name=_bs_width]').val());
    });
    // }}}

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);
    this.unbindHorizontalLayoutEvents();

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // kitchenary mod {{{

    // Close sidebar callback function
    // only call once
    if (!mediumMediaQueryList.matches && $('._accordion-block', '#facetedSearch').has(event.target).length === 0) {
      var closeSidebar = lodash_once__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        $('[data-toggle="sidebar-top"]').first().trigger('click');
      });

      // // close the sidebar after 1s timeout
      lodash_delay__WEBPACK_IMPORTED_MODULE_0___default()(closeSidebar, 2000);

      // Callback function when faceted search view is updated
      var _callback = function callback() {
        closeSidebar();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-updateViewComplete', _callback);
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-updateViewComplete', _callback);
    }

    // }}}

    // event.preventDefault();
    // event.stopPropagation();

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_7__.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    if ($navList.data('loadResult') !== 'on') {
      this.toggleFacetItems($navList);
      $navList.attr('data-load-result', 'on');
    } else {
      $toggle.hide();
      $('.navList-item', $navList).show();
      if ($('#faceted-search-container').hasClass('_horizontal')) {
        $navList.css({
          overflowY: 'auto',
          marginBottom: '21px'
        });
      } else {
        $navList.css({
          overflowY: 'auto',
          marginBottom: '50px'
        });
      }
      $navList.removeAttr('data-count-item');
    }
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_7__.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href, true);
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
    // eslint-disable-next-line no-param-reassign
    event.isDefaultPrevented = true; // papathemes-supermarket: quick-fixed stencil-utils for sorting ajax request

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].constants.VALID)) {
      return;
    }

    /* MOD by papathemes - supermarket
    ---
    const url = Url.parse(window.location.href);
    const queryParams = decodeURI($(currentTarget).serialize());
    ---
    */
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href, true);
    var queryParamsArray = $(currentTarget).serializeArray();
    queryParamsArray.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    var queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query);
    /* END MOD */

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
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
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_4___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var searchParams = new URLSearchParams(window.location.search);
    // If searchParams does not contain a page value then modify url query string to have page=1
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
  }

  // papathemes-beautify
  ;
  _proto.initPriceSlider = function initPriceSlider() {
    $('#facetedSearch[data-beautify-faceted-shop-by-price]').get().map(function (el) {
      return $(el);
    }).forEach(function ($facetedSearch) {
      var $shopByPrice = $facetedSearch.find('#facetedSearch-content--price');
      $shopByPrice.data('beautifyShopByPrice', $facetedSearch.data('beautifyFacetedShopByPrice'));
      (0,_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_14__["default"])($shopByPrice);
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
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
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

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


// WeakMap will defined in the global scope if native WeakMap is not supported.
var weakMap = new WeakMap(); // eslint-disable-line no-unused-vars

// Set defaults for sweetalert2 popup boxes
var Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'button',
    cancelButton: 'button'
  }
});

// Re-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2J1bGstb3JkZXJfanMtYXNzZXRzX2pzX3RoZW1lX2NhdGFsb2dfanMtYXNzZXRzX2pzX3RoZW1lX2NvbW1vbl9mYWNldGVkLS1lNmNiYjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHRCO0FBQUEsSUFFZkEsaUJBQWlCO0VBQ25CLFNBQUFBLGtCQUFZQyxNQUFNLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2hCLElBQUlELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7TUFDbEQ7SUFDSjtJQUVBRixNQUFNLENBQUNFLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUM7SUFFdEQsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFaEQsSUFBSSxDQUFDSixNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDSyxPQUFPLEdBQUdDLENBQUMsQ0FBQyxlQUFlLEVBQUVOLE1BQU0sQ0FBQztJQUN6QyxJQUFJLENBQUNPLElBQUksR0FBR0QsQ0FBQyxDQUFDLGdEQUFnRCxFQUFFTixNQUFNLENBQUM7SUFDdkUsSUFBSSxDQUFDUSxJQUFJLEdBQUdGLENBQUMsQ0FBQyxnREFBZ0QsRUFBRU4sTUFBTSxDQUFDO0lBQ3ZFLElBQUksQ0FBQ1MsT0FBTyxHQUFHSCxDQUFDLENBQUMsZUFBZSxFQUFFTixNQUFNLENBQUM7SUFDekMsSUFBSSxDQUFDVSxNQUFNLEdBQUdKLENBQUMsQ0FBQyxjQUFjLEVBQUVOLE1BQU0sQ0FBQztJQUN2QyxJQUFJLENBQUNXLEtBQUssR0FBR0wsQ0FBQyxDQUFDLE1BQU0sRUFBRU4sTUFBTSxDQUFDLENBQUNZLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFD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QUs5VCxPQUFPLENBQTNDOFQsK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHTixzQkFBc0IsQ0FBQ0csd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUdwYixNQUFNLENBQUN4QyxNQUFNLENBQUMyZCxnQkFBZ0IsQ0FBQ1QsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTVcsZUFBZSxHQUFHcmIsTUFBTSxDQUFDaUYsSUFBSSxDQUFDa1csZ0JBQWdCLENBQUNULFlBQVksQ0FBQyxDQUFDLENBQUM1RyxHQUFHLENBQUMsVUFBQUksR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQ29ILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ25XLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPa1csZUFBZSxDQUFDeFUsTUFBTSxDQUFDLFVBQUMwVSxHQUFHLEVBQUVySCxHQUFHLEVBQUV4VSxDQUFDLEVBQUs7SUFDM0M2YixHQUFHLENBQUNySCxHQUFHLENBQUMsR0FBR2tILGFBQWEsQ0FBQzFiLENBQUMsQ0FBQztJQUMzQixPQUFPNmIsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQm9DOztBQUVyQztBQUNBLElBQU1FLE9BQU8sR0FBRyxJQUFJQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSCx3REFBZ0IsQ0FBQztFQUMxQkssY0FBYyxFQUFFLEtBQUs7RUFDckJDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsWUFBWSxFQUFFO0VBQ2xCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0EsaUVBQWVMLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvYmVhdXRpZnkvanF1ZXJ5LXVpLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9iZWF1dGlmeS9zaG9wLWJ5LXByaWNlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9idWxrLW9yZGVyLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gSW1wb3J0IHF1ZXJ5LXVpIHdpZGdldHMvZWZmZWN0cyB1c2VkIGluIHRoZSB0aGVtZSBoZXJlXG4vL1xuaW1wb3J0ICdAYW5keG9yL2pxdWVyeS11aS10b3VjaC1wdW5jaC1maXgnO1xuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zbGlkZXInO1xuIiwiaW1wb3J0ICcuL2pxdWVyeS11aSc7XG5cbmNsYXNzIFNob3BCeVByaWNlU2xpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgaWYgKCRzY29wZS5kYXRhKCdiZWF1dGlmeVNob3BCeVByaWNlU2xpZGVySW5zdGFuY2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2VTbGlkZXJJbnN0YW5jZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25QcmljZUlucHV0ID0gdGhpcy5vblByaWNlSW5wdXQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJG1pbiA9ICQoJ2lucHV0W25hbWU9XCJtaW5fcHJpY2VcIl0sIGlucHV0W2RhdGEtaW5wdXQtbWluXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJG1heCA9ICQoJ2lucHV0W25hbWU9XCJtYXhfcHJpY2VcIl0sIGlucHV0W2RhdGEtaW5wdXQtbWF4XScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJGNhbmNlbCA9ICQoJ1tkYXRhLWNhbmNlbF0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRjbGVhciA9ICQoJ1tkYXRhLWNsZWFyXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKCdmb3JtJywgJHNjb3BlKS5ub3QoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXScpOyAvLyBleGNsdWRlIGZhY2V0ZWQgZm9ybVxuICAgICAgICB0aGlzLiRhcHBseSA9ICQoJ1tkYXRhLWFwcGx5XScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuc2hvcEJ5UHJpY2UgPSAkc2NvcGUuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZScpO1xuXG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuc2hvcEJ5UHJpY2VbMF0ubG93LnZhbHVlO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLnNob3BCeVByaWNlW3RoaXMuc2hvcEJ5UHJpY2UubGVuZ3RoIC0gMV0uaGlnaC52YWx1ZTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICAgICAgICBwYXJhbXMuZ2V0KCdwcmljZV9taW4nKSB8fCBwYXJhbXMuZ2V0KCdtaW5fcHJpY2UnKSB8fCBtaW4sXG4gICAgICAgICAgICBwYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSB8fCBwYXJhbXMuZ2V0KCdtYXhfcHJpY2UnKSB8fCBtYXgsXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHBhcmFtcy5oYXMoJ3ByaWNlX21pbicpIHx8IHBhcmFtcy5oYXMoJ21pbl9wcmljZScpIHx8IHBhcmFtcy5oYXMoJ3ByaWNlX21heCcpIHx8IHBhcmFtcy5oYXMoJ21heF9wcmljZScpKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9yaWdpbmFsVmFsdWVzID0gdmFsdWVzO1xuXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoe1xuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBzbGlkZTogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1pbi52YWwodWkudmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtYXgudmFsKHVpLnZhbHVlc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKHVpLnZhbHVlc1swXSAhPT0gdGhpcy5vcmlnaW5hbFZhbHVlc1swXSB8fCB1aS52YWx1ZXNbMV0gIT09IHRoaXMub3JpZ2luYWxWYWx1ZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FuY2VsLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRtaW4uYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWluJykgfHwgcGFyYW1zLmdldCgnbWluX3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuICAgICAgICB0aGlzLiRtYXguYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWF4JykgfHwgcGFyYW1zLmdldCgnbWF4X3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCd2YWx1ZXMnLCB0aGlzLm9yaWdpbmFsVmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuJG1pbi52YWwodGhpcy5vcmlnaW5hbFZhbHVlc1swXSk7XG4gICAgICAgICAgICB0aGlzLiRtYXgudmFsKHRoaXMub3JpZ2luYWxWYWx1ZXNbMV0pO1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYXBwbHkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwbHkoKSB7XG4gICAgICAgIGNvbnN0IFtzbGlkZU1pbiwgc2xpZGVNYXhdID0gdGhpcy4kc2xpZGVyLnNsaWRlcigndmFsdWVzJyk7XG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLiRtaW4udmFsKCkpIHx8IHNsaWRlTWluO1xuICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCBzbGlkZU1heDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgcGFyYW1zLnNldCgncHJpY2VfbWluJywgbWluKTtcbiAgICAgICAgcGFyYW1zLnNldCgncHJpY2VfbWF4JywgbWF4KTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3BhcmFtcy50b1N0cmluZygpfWA7XG4gICAgfVxuXG4gICAgb25QcmljZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB8fCAwO1xuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy4kbWluLnByb3AoJ21pbicpKSB8fCAwO1xuICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy4kbWluLnByb3AoJ21heCcpKSB8fCAwO1xuXG4gICAgICAgIGNvbnN0IGN1ck1pbiA9IE51bWJlcih0aGlzLiRtaW4udmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMF07XG4gICAgICAgIGNvbnN0IGN1ck1heCA9IE51bWJlcih0aGlzLiRtYXgudmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMV07XG5cbiAgICAgICAgaWYgKHZhbCA8IG1pbikge1xuICAgICAgICAgICAgdmFsID0gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IG1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRtaW4uaXMoZXZlbnQudGFyZ2V0KSAmJiBjdXJNYXggPiAwICYmIHZhbCA+IGN1ck1heCkge1xuICAgICAgICAgICAgdmFsID0gY3VyTWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJG1heC5pcyhldmVudC50YXJnZXQpICYmIGN1ck1pbiA+IDAgJiYgdmFsIDwgY3VyTWluKSB7XG4gICAgICAgICAgICB2YWwgPSBjdXJNaW47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSB2YWw7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICAgICAgICBjb25zdCBuZXdNaW4gPSBOdW1iZXIodGhpcy4kbWluLnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdO1xuICAgICAgICBjb25zdCBuZXdNYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdO1xuXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ3ZhbHVlcycsIFtuZXdNaW4sIG5ld01heF0pO1xuXG4gICAgICAgIGlmIChuZXdNaW4gIT09IHRoaXMub3JpZ2luYWxWYWx1ZXNbMF0gfHwgbmV3TWF4ICE9PSB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdKSB7XG4gICAgICAgICAgICB0aGlzLiRjYW5jZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNlbGVjdG9yID0gJ1tkYXRhLWJlYXV0aWZ5LXNob3AtYnktcHJpY2VdJykge1xuICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiBuZXcgU2hvcEJ5UHJpY2VTbGlkZXIoJChlbCkpKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcbmltcG9ydCB7IGV4dHJhY3RNb25leSwgY3VycmVuY3lGb3JtYXQgfSBmcm9tICcuL3RoZW1lLXV0aWxzJztcblxuLy9cbi8vIGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3Rhc2svZGVsYXktcHJvbWlzZVxuLy9cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG4vL1xuLy8gaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9mdW5jdGlvbmFsLWphdmFzY3JpcHQtcmVzb2x2aW5nLXByb21pc2VzLXNlcXVlbnRpYWxseS03YWFjMThjNDQzMWVcbi8vXG5mdW5jdGlvbiBwcm9taXNlU2VyaWFsKGZ1bmNzKSB7XG4gICAgcmV0dXJuIGZ1bmNzLnJlZHVjZShcbiAgICAgICAgKHByb21pc2UsIGZ1bmMpID0+IHByb21pc2UudGhlbihyZXN1bHQgPT4gZnVuYygpLnRoZW4oQXJyYXkucHJvdG90eXBlLmNvbmNhdC5iaW5kKHJlc3VsdCkpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFtdKSxcbiAgICApO1xufVxuXG5leHBvcnQgY2xhc3MgQnVsa09yZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCAkc2NvcGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7fTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzVG90YWwgPSAwO1xuXG4gICAgICAgIHRoaXMub25RdWFudGl0eUNoYW5nZSA9IHRoaXMub25RdWFudGl0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljayA9IHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Qcm9kdWN0QWRkZWQgPSB0aGlzLm9uUHJvZHVjdEFkZGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BZGRBbGxDbGljayA9IHRoaXMub25BZGRBbGxDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2FydFF0eUNoYW5nZSA9IHRoaXMub25DYXJ0UXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljayA9IHRoaXMub25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVpbml0KCk7XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXRcbiAgICAgICAgJCgnYm9keScpLm9uKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG4gICAgfVxuXG4gICAgcmVpbml0KCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwID0gJCgnLmJ1bGtPcmRlci1wcm9ncmVzc01vZGFsJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0JhciA9ICQoJy5wcm9ncmVzc0JhcicsIHRoaXMuJHByb2dyZXNzUG9wdXApO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudCA9ICQoJy5idWxrT3JkZXItcHJvZ3Jlc3NNb2RhbC1jdXJyZW50JywgdGhpcy4kc2NvcGUpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQWN0aW9ucyA9ICQoJy5idWxrT3JkZXItcHJvZ3Jlc3NNb2RhbC1hY3Rpb25zJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ2xvc2UgPSAkKCdbZGF0YS1jbG9zZV0nLCB0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jYXJ0SWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXR5SW5DYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2hhbmdlJywgJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJywgdGhpcy5vblF1YW50aXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtYnVsa29yZGVyLWFkZC1hbGxdJywgdGhpcy5vbkFkZEFsbENsaWNrKTtcbiAgICAgICAgdGhpcy4kYm9keS5vbignYWpheC1hZGR0b2NhcnQtaXRlbS1hZGRlZCcsIHRoaXMub25Qcm9kdWN0QWRkZWQpO1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHRoaXMub25DYXJ0UXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlLm9uKCdjbGljaycsIHRoaXMub25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljayk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NoYW5nZScsICdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScsIHRoaXMub25RdWFudGl0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9mZignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9mZignY2xpY2snLCAnW2RhdGEtYnVsa29yZGVyLWFkZC1hbGxdJywgdGhpcy5vbkFkZEFsbENsaWNrKTtcbiAgICAgICAgdGhpcy4kYm9keS5vZmYoJ2FqYXgtYWRkdG9jYXJ0LWl0ZW0tYWRkZWQnLCB0aGlzLm9uUHJvZHVjdEFkZGVkKTtcbiAgICAgICAgdGhpcy4kYm9keS5vZmYoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgdGhpcy5vbkNhcnRRdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ2xvc2Uub2ZmKCdjbGljaycsIHRoaXMub25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljayk7XG4gICAgfVxuXG4gICAgb25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc1BvcHVwKCk7XG4gICAgfVxuXG4gICAgb25DYXJ0UXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVF0eUluQ2FydCgpO1xuICAgIH1cblxuICAgIHNob3dQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQWN0aW9ucy5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgfVxuXG4gICAgaGlkZVByb2dyZXNzUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50LmNzcygnd2lkdGgnLCAwKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzUG9wdXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudC5jc3MoJ3dpZHRoJywgYCR7dGhpcy5wcm9ncmVzc0N1cnJlbnQgLyB0aGlzLnByb2dyZXNzVG90YWwgKiAxMDB9JWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQuY3NzKCd3aWR0aCcsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2dyZXNzUG9wdXBBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQWN0aW9ucy5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgIH1cblxuICAgIHNob3dQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NCYXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICB9XG5cbiAgICBoaWRlUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQmFyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgfVxuXG4gICAgb25BZGRBbGxDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLml0ZW1Db3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuYnVsa09yZGVyRW50ZXJRdHkgfHwgJ1BsZWFzZSBlbnRlciBwcm9kdWN0IHF1YW50aXR5JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZEFsbFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgb25Qcm9kdWN0QWRkZWQoZXZlbnQsIHByb2R1Y3RJZCkge1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1idWxrb3JkZXItcXR5LWlkPScke3Byb2R1Y3RJZH0nXWApLnZhbCgwKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBvblF1YW50aXR5QnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRpbnB1dCA9ICR0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXScpLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgIGxldCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihxdHkpKSB7XG4gICAgICAgICAgICBxdHkgPSBxdWFudGl0eU1pbiB8fCAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1heCBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgIGlmICgocXR5ICsgMSkgPD0gcXVhbnRpdHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJGlucHV0LnZhbChxdHkpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGUoKSB7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBtb25leTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJGlucHV0LmRhdGEoJ2J1bGtvcmRlclF0eUlkJyk7XG4gICAgICAgICAgICBjb25zdCAkcHJpY2UgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1idWxrb3JkZXItcHJpY2UtaWQ9JyR7cHJvZHVjdElkfSddYCk7XG4gICAgICAgICAgICBjb25zdCBwcmljZVZhbCA9IHBhcnNlRmxvYXQoJHByaWNlLmRhdGEoJ2J1bGtvcmRlclByaWNlVmFsdWUnKSk7XG4gICAgICAgICAgICBjb25zdCBwcmljZUZtdCA9IGAkeyRwcmljZS5kYXRhKCdidWxrb3JkZXJQcmljZUZvcm1hdHRlZCcpfWA7XG4gICAgICAgICAgICBjb25zdCBzdWJ0b3RhbCA9IE1hdGgucm91bmQocHJpY2VWYWwgKiBxdHkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXN1YnRvdGFsLWlkPScke3Byb2R1Y3RJZH0nXWApO1xuXG4gICAgICAgICAgICBpZiAocHJpY2VGbXQpIHtcbiAgICAgICAgICAgICAgICBtb25leSA9IGV4dHJhY3RNb25leShwcmljZUZtdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzdWJ0b3RhbC5odG1sKGN1cnJlbmN5Rm9ybWF0KHN1YnRvdGFsLCBtb25leSkpO1xuXG4gICAgICAgICAgICB0b3RhbCArPSBzdWJ0b3RhbDtcbiAgICAgICAgICAgIGNvdW50ICs9IHF0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtQ291bnQgPSBjb3VudDtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItdG90YWwtY291bnRdJykuaHRtbChjb3VudCk7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci10b3RhbC1hbW91bnRdJykuaHRtbChjdXJyZW5jeUZvcm1hdChNYXRoLnJvdW5kKHRvdGFsICogMTAwKSAvIDEwMCwgbW9uZXkpKTtcbiAgICB9XG5cbiAgICBhZGRBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0N1cnJlbnQgPSAwO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkaW5wdXQuZGF0YSgnYnVsa29yZGVyUXR5SWQnKTtcblxuICAgICAgICAgICAgaWYgKHF0eSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0N1cnJlbnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc1BvcHVwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRQcm9kdWN0KHByb2R1Y3RJZCwgcXR5KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgMXMgYmVmb3JlIGFkZGluZyB0byBjYXJ0IGEgbmV3IGl0ZW0gaW4gb3JkZXIgdG8gYXZvaWQgcmVxdWVzdCBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzVG90YWwgPSBwcm9taXNlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzUG9wdXAoKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NCYXIoKTtcblxuICAgICAgICBwcm9taXNlU2VyaWFsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzUG9wdXBBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvdW50ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkUHJvZHVjdChwcm9kdWN0SWQsIHF0eSkge1xuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pZCcsIHByb2R1Y3RJZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncXR5W10nLCBxdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmb3JtRGF0YSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHByb21pc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgfVxuXG4gICAgdXBkYXRlUXR5SW5DYXJ0KCkge1xuICAgICAgICAkLmdldCgnL2FwaS9zdG9yZWZyb250L2NhcnQnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHF0eXMgPSB7fTtcblxuICAgICAgICAgICAgZGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcXR5c1tpdGVtLnByb2R1Y3RJZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eXNbaXRlbS5wcm9kdWN0SWRdICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5c1tpdGVtLnByb2R1Y3RJZF0gPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1idWxrb3JkZXItY2FydC1xdHktaWRdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcGFyc2VJbnQoJGVsLmRhdGEoJ2J1bGtvcmRlckNhcnRRdHlJZCcpLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKHF0eXNbcHJvZHVjdElkXSkge1xuICAgICAgICAgICAgICAgICAgICAkZWwuaHRtbChxdHlzW3Byb2R1Y3RJZF0pO1xuICAgICAgICAgICAgICAgICAgICAkZWwuY2xvc2VzdCgnLl9xdHlJbkNhcnRXcmFwcGVyJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC5odG1sKCcwJyk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5jbG9zZXN0KCcuX3F0eUluQ2FydFdyYXBwZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUNhcnRDb3VudGVyKCkge1xuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KHsgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgcmVzcCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0LXF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVsa09yZGVyRmFjdG9yeShjb250ZXh0ID0gbnVsbCwgc2VsZWN0b3IgPSAnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKSB7XG4gICAgY29uc3QgJHNlbGVjdG9yID0gJChzZWxlY3Rvcik7XG4gICAgbGV0IGJ1bGtPcmRlciA9ICRzZWxlY3Rvci5kYXRhKCdidWxrT3JkZXJJbnN0YW5jZScpO1xuXG4gICAgaWYgKCEoYnVsa09yZGVyIGluc3RhbmNlb2YgQnVsa09yZGVyKSkge1xuICAgICAgICBidWxrT3JkZXIgPSBuZXcgQnVsa09yZGVyKGNvbnRleHQsICRzZWxlY3Rvcik7XG4gICAgICAgICRzZWxlY3Rvci5kYXRhKCdidWxrT3JkZXJJbnN0YW5jZScsIGJ1bGtPcmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1bGtPcmRlcjtcbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIHVybC5xdWVyeVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgLyogRU5EIE1PRCAqL1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gdHJ1ZTsgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLyAvLyBwYXBhdGhlbWVzLXN1cGVybWFya2V0OiBxdWlja2ZpeCBzdG9wIHN0ZW5jaWwtdXRpbHMgU29ydEJ5SG9vayBzdWJtaXR0aW5nIHRoZSBmb3JtIHdoZW4gc2VsZWN0IGNoYW5nZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnksIHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuL2NvbGxhcHNpYmxlJzsgLy8gcGFwYXRoZW1lcy1tb29uY2F0IG1vZFxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvYWN0aW9uLWJhcic7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuaW1wb3J0IGluaXRTaG9wQnlQcmljZVNsaWRlciBmcm9tICcuLi8uLi9iZWF1dGlmeS9zaG9wLWJ5LXByaWNlLXNsaWRlcic7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0JztcblxuY29uc3QgbWVkaXVtTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ21lZGl1bScpO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5fYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlciwgI2JlYXV0aWZ5X19maW5kR2F0ZS1zaWRlYmFyIC5ibG9ja2VyJywgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLl9hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgZWRpdGVkXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcuZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIHRoaXMuaW5pdFByaWNlU2xpZGVyKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRG9jdW1lbnRDbGlja09mSG9yaXpvbnRhbExheW91dCA9IHRoaXMub25Eb2N1bWVudENsaWNrT2ZIb3Jpem9udGFsTGF5b3V0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXRcbiAgICAgICAgJCgnYm9keScpLm9uZSgnYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgdGhpcy5pbml0RmluZEdhdGUoKTtcbiAgICB9XG5cbiAgICBiaW5kSG9yaXpvbnRhbExheW91dEV2ZW50cygpIHtcbiAgICAgICAgaWYgKCEkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJykuaGFzQ2xhc3MoJ19ob3Jpem9udGFsJykpIHJldHVybjtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2tPZkhvcml6b250YWxMYXlvdXQpO1xuXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5vbihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgY29sbGFwc2libGUgZWxlbWVudHNcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5ub3QoZXZlbnQuY3VycmVudFRhcmdldCkuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4gdGhpcy5jb2xsYXBzZUZhY2V0KCQoYWNjb3JkaW9uVG9nZ2xlKSkpO1xuXG4gICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBkcm9wZG93biBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKT8uJHRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKT8uJHRvZ2dsZTtcbiAgICAgICAgICAgIGlmICgkY29udGVudCkge1xuICAgICAgICAgICAgICAgICRjb250ZW50LmNzcygnbGVmdCcsICR0b2dnbGUucG9zaXRpb24oKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICAkY29udGVudC5jc3MoJ21hcmdpbkxlZnQnLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSAkY29udGVudC5vZmZzZXQoKS5sZWZ0ICsgJGNvbnRlbnQub3V0ZXJXaWR0aCgpICsgMTA7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5jc3MoJ21hcmdpbkxlZnQnLCAtKHJpZ2h0IC0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRjb250ZW50LmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTW92ZSB0aGUgZHJvcGRvd24gb3V0c2lkZSB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuZmluZCgnLl9hY2NvcmRpb24tLW5hdkxpc3QnKS5lYWNoKChpLCBuYXZMaXN0RWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0RWwpO1xuICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJG5hdkxpc3QuZmluZCgnLl9hY2NvcmRpb24tY29udGVudCcpXG4gICAgICAgICAgICAgICAgLmluc2VydEFmdGVyKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgLy8gSW1wcm92ZSBhY2Nlc3NpYmlsaXR5IC0gZW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb24gb24gZHJvcGRvd24gb2YgZWFjaCBmYWNldGVkIGl0ZW1cbiAgICAgICAgICAgIGlmICgkY29udGVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoJG5hdkxpc3QpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJzxhIGNsYXNzPVwiaXMtc3JPbmx5IF9jbG9zZUJ0blwiIGhyZWY9XCIjXCI+Q2xvc2U8L2E+JylcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goKGosIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nKS5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZWwyID0+ICQoZWwyKS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS50YXJnZXRJZCA9PT0gJGNvbnRlbnQuYXR0cignaWQnKSlbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50Lm9uKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIGNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlLiR0b2dnbGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuZmluZCgnYS5fY2xvc2VCdG4nKS5vbignY2xpY2sgZm9jdXMga2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlLiR0b2dnbGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZEhvcml6b250YWxMYXlvdXRFdmVudHMoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGlja09mSG9yaXpvbnRhbExheW91dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgYWxsIGNvbGxhcHNpYmxlcyB3aGVuIGNsaWNrIG91dHNpZGVcbiAgICAgKiBAcGFyYW0ge2pRdWVyeS5FdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50Q2xpY2tPZkhvcml6b250YWxMYXlvdXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGVFbGVtZW50cyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAubWFwKGVsID0+ICQoZWwpLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKSlcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGFwc2libGUgPT4gY29sbGFwc2libGUpXG4gICAgICAgICAgICAucmVkdWNlKChfY29sbGFwc2libGVFbGVtZW50cywgY29sbGFwc2libGUpID0+IFsuLi5fY29sbGFwc2libGVFbGVtZW50cywgLi4uY29sbGFwc2libGUuJHRhcmdldC5nZXQoKSwgLi4uY29sbGFwc2libGUuJHRvZ2dsZS5nZXQoKV0sIFtdKTtcblxuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJChjb2xsYXBzaWJsZUVsZW1lbnRzKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdEZpbmRHYXRlKCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuXG4gICAgICAgIGlmICh1cmwucXVlcnkuX2JzX3dpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE51bWJlcih1cmwucXVlcnkuX2JzX3dpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZEdhdGUod2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEdhdGUod2lkdGgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHVybFV0aWxzLmdldFVybCgpLCB0cnVlKTtcblxuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5Ll9ic193aWR0aDtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoJ107XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aFtdJ107XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aCddO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGhbXSddO1xuXG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2hvd01vcmVVcmwgPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbldpZHRoUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRNaW5XaWR0aFZhbHVlcyA9ICRzY29wZSA9PiAkc2NvcGUuZmluZCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXRdJykuZ2V0KCkubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3VybCA9IFVybC5wYXJzZSgkKGVsKS5hdHRyKCdocmVmJyksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKF91cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aCddKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCAkbWluV2lkdGggPSAkKCcjZmFjZXRlZFNlYXJjaCBbZGF0YS1mYWNldD1cIk1pbmltdW0gR2F0ZSBXaWR0aFwiXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbWluV2lkdGguZGF0YSgnaGFzTW9yZVJlc3VsdHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0UGFnZShzaG93TW9yZVVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogJ01pbmltdW0gR2F0ZSBXaWR0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNaW5XaWR0aFZhbHVlcygkKHJlc3ApKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZE1pbldpZHRoVmFsdWVzKCRtaW5XaWR0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBtYXhXaWR0aFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kTWF4V2lkdGhWYWx1ZXMgPSAkc2NvcGUgPT4gJHNjb3BlLmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpLmdldCgpLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF91cmwgPSBVcmwucGFyc2UoJChlbCkuYXR0cignaHJlZicpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihfdXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGgnXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgJG1heFdpZHRoID0gJCgnI2ZhY2V0ZWRTZWFyY2ggW2RhdGEtZmFjZXQ9XCJNYXhpbXVtIEdhdGUgV2lkdGhcIl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJG1heFdpZHRoLmRhdGEoJ2hhc01vcmVSZXN1bHRzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldFBhZ2Uoc2hvd01vcmVVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6ICdNYXhpbXVtIEdhdGUgV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5kTWF4V2lkdGhWYWx1ZXMoJChyZXNwKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNYXhXaWR0aFZhbHVlcygkbWF4V2lkdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW21pbldpZHRoUHJvbWlzZSwgbWF4V2lkdGhQcm9taXNlXSkudGhlbigoW21pbldpZHRoQXJyLCBtYXhXaWR0aEFycl0pID0+IHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnkuX2JzX3dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddID0gbWluV2lkdGhBcnIuZmlsdGVyKHZhbCA9PiB2YWwgPD0gd2lkdGgpO1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoW10nXSA9IG1heFdpZHRoQXJyLmZpbHRlcih2YWwgPT4gdmFsID49IHdpZHRoKTtcblxuICAgICAgICAgICAgICAgIGlmICh1cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aFtdJ10ubGVuZ3RoID09PSBtaW5XaWR0aEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGhbXSddLmxlbmd0aCA9PT0gbWF4V2lkdGhBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQsIHVybCkgeyAvLyBwYXBhdGhlbWVzOiBmYWNldGVkLWluZmluaXRlLXNjcm9sbCBtb2RcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCwgdXJsKTsgLy8gcGFwYXRoZW1lczogZmFjZXRlZC1pbmZpbml0ZS1zY3JvbGwgbW9kXG4gICAgICAgIH1cblxuICAgICAgICBhY3Rpb25CYXJGYWN0b3J5KCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRQcmljZVNsaWRlcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJykuaGFzQ2xhc3MoJ19ob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duSWQgPSAkKCcuX2FjY29yZGlvbi1jb250ZW50LmlzLW9wZW4nLCAnI2ZhY2V0ZWRTZWFyY2gnKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgJCgnLl9hY2NvcmRpb24tbmF2aWdhdGlvbicsICcjZmFjZXRlZFNlYXJjaCcpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duSWQgPT09ICQoaXRlbSkuYXR0cignYXJpYS1jb250cm9scycpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5fYWNjb3JkaW9uLWNvbnRlbnQuaXMtb3BlbicsICcjZmFjZXRlZFNlYXJjaCcpLmNzcygnbGVmdCcsICQoaXRlbSkucG9zaXRpb24oKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVZpZXdDYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlVmlld0NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5nZXRVcmwoKTsgLy8gcGFwYXRoZW1lczogZmFjZXRlZC1pbmZpbml0ZS1zY3JvbGwgbW9kXG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50LCB1cmwpOyAvLyBwYXBhdGhlbWVzOiBmYWNldGVkLWluZmluaXRlLXNjcm9sbCBtb2RcblxuICAgICAgICAgICAgLy8ga2l0Y2hlbmFyeSBtb2RcbiAgICAgICAgICAgIGhvb2tzLmVtaXQoJ2ZhY2V0ZWRTZWFyY2gtdXBkYXRlVmlld0NvbXBsZXRlJywgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuICAgICAgICBjb25zdCBuYXZMaXN0SGVpZ2h0ID0gJG5hdkxpc3QuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUgJiYgJG5hdkxpc3QuZGF0YSgnbG9hZFJlc3VsdCcpICE9PSAnb24nKSB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRuYXZMaXN0Lmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmICgkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJykuaGFzQ2xhc3MoJ19ob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdkxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7bmF2TGlzdEhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdkxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7bmF2TGlzdEhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRuYXZMaXN0LnBhcmVudCgpLmZpbmQoJy50b2dnbGVMaW5rJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICRuYXZMaXN0LnJlbW92ZUF0dHIoJ2RhdGEtY291bnQtaXRlbScpO1xuICAgICAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkubmV4dCgpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuICAgICAgICBjb25zdCBuYXZMaXN0SGVpZ2h0ID0gJG5hdkxpc3QuaGVpZ2h0KCk7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlICYmICRuYXZMaXN0LmRhdGEoJ2xvYWRSZXN1bHQnKSA9PT0gJ29mZicgJiYgcXVlcnkubGVuZ3RoID4gMCAmJiAhJG5hdkxpc3QubmV4dCgpLmlzKCc6aGlkZGVuJykgJiYgIXRoaXMubG9hZCAmJiAkbmF2TGlzdC5uZXh0KCcudG9nZ2xlTGluaycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCA9IHRydWU7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkbmF2TGlzdC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpLmhhc0NsYXNzKCdfaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRuYXZMaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke25hdkxpc3RIZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjFweCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRuYXZMaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke25hdkxpc3RIZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkbmF2TGlzdC5kYXRhKCdsb2FkUmVzdWx0JywgJ29uJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScsICRuYXZMaXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbmF2TGlzdC5uZXh0KCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkbmF2TGlzdC5kYXRhKCdsb2FkUmVzdWx0JykgPT09ICdvbicgfHwgJG5hdkxpc3QubmV4dCgpLmlzKCc6aGlkZGVuJykgfHwgJG5hdkxpc3QubmV4dCgnLnRvZ2dsZUxpbmsnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nLCAkbmF2TGlzdCk7XG4gICAgICAgICAgICAkbmF2TGlzdC5jc3MoJ2hlaWdodCcsIGAke25hdkxpc3RIZWlnaHR9cHhgKTtcbiAgICAgICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8PSAwICYmICRuYXZMaXN0LmlzKCdbZGF0YS1jb3VudC1pdGVtXScpKSB7XG4gICAgICAgICAgICAgICAgJG5hdkxpc3QubmV4dCgpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbmF2TGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbmF2TGlzdC5uZXh0KCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGlmICgkbmF2TGlzdC5wYXJlbnQoKS5maW5kKCcudG9nZ2xlTGluaycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkbmF2TGlzdC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnMHB4Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJykuaGFzQ2xhc3MoJ19ob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdkxpc3QuY3NzKCdtYXJnaW4tYm90dG9tJywgJzIxcHgnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbmF2TGlzdC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnNTBweCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICB0aGlzLmJpbmRIb3Jpem9udGFsTGF5b3V0RXZlbnRzKCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSB7e3tcbiAgICAgICAgY29uc3QgJG1pbk1heEZhY2V0cyA9ICQoJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QtLW1heGltdW0tZ2F0ZS13aWR0aCwgI2ZhY2V0ZWRTZWFyY2gtY29udGVudC0tbWluaW11bS1nYXRlLXdpZHRoJyk7XG4gICAgICAgIGlmICgkbWluTWF4RmFjZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2stLWZpbmRHYXRlJykuc2hvdygpO1xuICAgICAgICAgICAgJG1pbk1heEZhY2V0cy5jbG9zZXN0KCcuX2FjY29yZGlvbi1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2stLWZpbmRHYXRlJykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHVybFV0aWxzLmdldFVybCgpLCB0cnVlKTtcbiAgICAgICAgaWYgKHVybC5xdWVyeS5fYnNfd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHVybC5xdWVyeS5fYnNfd2lkdGgpO1xuICAgICAgICAgICAgJCgnI2JlYXV0aWZ5X19maW5kR2F0ZS1zaWRlYmFyIGZvcm0gW25hbWU9X2JzX3dpZHRoXScpLnZhbCh3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2JlYXV0aWZ5X19maW5kR2F0ZS1zaWRlYmFyIGZvcm0nKS5vZmYoJ3N1Ym1pdCcpLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRHYXRlKCQoZXZlbnQudGFyZ2V0KS5maW5kKCdbbmFtZT1fYnNfd2lkdGhdJykudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfX19XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIHRoaXMudW5iaW5kSG9yaXpvbnRhbExheW91dEV2ZW50cygpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIGtpdGNoZW5hcnkgbW9kIHt7e1xuXG4gICAgICAgIC8vIENsb3NlIHNpZGViYXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgLy8gb25seSBjYWxsIG9uY2VcbiAgICAgICAgaWYgKCFtZWRpdW1NZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzICYmICQoJy5fYWNjb3JkaW9uLWJsb2NrJywgJyNmYWNldGVkU2VhcmNoJykuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9zZVNpZGViYXIgPSBfLm9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItdG9wXCJdJykuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC8vIGNsb3NlIHRoZSBzaWRlYmFyIGFmdGVyIDFzIHRpbWVvdXRcbiAgICAgICAgICAgIF8uZGVsYXkoY2xvc2VTaWRlYmFyLCAyMDAwKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBmYWNldGVkIHNlYXJjaCB2aWV3IGlzIHVwZGF0ZWRcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC11cGRhdGVWaWV3Q29tcGxldGUnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC11cGRhdGVWaWV3Q29tcGxldGUnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB9fX1cblxuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHdpblVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubW9kZSA9IHdpblVybC5xdWVyeS5tb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5LmxpbWl0ID0gd2luVXJsLnF1ZXJ5LmxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiBmYWNldFVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKGZhY2V0VXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIGlmICgkbmF2TGlzdC5kYXRhKCdsb2FkUmVzdWx0JykgIT09ICdvbicpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICAkbmF2TGlzdC5hdHRyKCdkYXRhLWxvYWQtcmVzdWx0JywgJ29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdG9nZ2xlLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5uYXZMaXN0LWl0ZW0nLCAkbmF2TGlzdCkuc2hvdygpO1xuICAgICAgICAgICAgaWYgKCQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKS5oYXNDbGFzcygnX2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgICAgICRuYXZMaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyMXB4JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJG5hdkxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzUwcHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJG5hdkxpc3QucmVtb3ZlQXR0cignZGF0YS1jb3VudC1pdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHdpblVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubW9kZSA9IHdpblVybC5xdWVyeS5tb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5LmxpbWl0ID0gd2luVXJsLnF1ZXJ5LmxpbWl0O1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IGZhY2V0VXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcoZmFjZXRVcmwucXVlcnkpIH0pKTtcbiAgICAgICAgLyogRU5EIE1PRCAqL1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIHVybC5xdWVyeVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgLyogRU5EIE1PRCAqL1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IC8vIHBhcGF0aGVtZXMtc3VwZXJtYXJrZXQ6IHF1aWNrLWZpeGVkIHN0ZW5jaWwtdXRpbHMgZm9yIHNvcnRpbmcgYWpheCByZXF1ZXN0XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXNBcnJheSA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXNBcnJheS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIHVybC5xdWVyeVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgaWYgKGxpbmtVcmwpIHsgLy8gU3VwZXJtYXJrZXQgRml4IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlID0gL3BhZ2U9WzAtOV0rL2k7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UocmUsICdwYWdlPTEnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRQcmljZVNsaWRlcigpIHtcbiAgICAgICAgJCgnI2ZhY2V0ZWRTZWFyY2hbZGF0YS1iZWF1dGlmeS1mYWNldGVkLXNob3AtYnktcHJpY2VdJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpKVxuICAgICAgICAgICAgLmZvckVhY2goJGZhY2V0ZWRTZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRzaG9wQnlQcmljZSA9ICRmYWNldGVkU2VhcmNoLmZpbmQoJyNmYWNldGVkU2VhcmNoLWNvbnRlbnQtLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgJHNob3BCeVByaWNlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2UnLCAkZmFjZXRlZFNlYXJjaC5kYXRhKCdiZWF1dGlmeUZhY2V0ZWRTaG9wQnlQcmljZScpKTtcbiAgICAgICAgICAgICAgICBpbml0U2hvcEJ5UHJpY2VTbGlkZXIoJHNob3BCeVByaWNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsImltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gV2Vha01hcCB3aWxsIGRlZmluZWQgaW4gdGhlIGdsb2JhbCBzY29wZSBpZiBuYXRpdmUgV2Vha01hcCBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3Qgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuY29uc3QgU3dhbCA9IHN3ZWV0QWxlcnQubWl4aW4oe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnV0dG9uJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnV0dG9uJyxcbiAgICB9LFxufSk7XG5cbi8vIFJlLWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgU3dhbDtcbiJdLCJuYW1lcyI6WyJTaG9wQnlQcmljZVNsaWRlciIsIiRzY29wZSIsIl90aGlzIiwiZGF0YSIsIm9uUHJpY2VJbnB1dCIsImJpbmQiLCIkc2xpZGVyIiwiJCIsIiRtaW4iLCIkbWF4IiwiJGNhbmNlbCIsIiRjbGVhciIsIiRmb3JtIiwibm90IiwiJGFwcGx5Iiwic2hvcEJ5UHJpY2UiLCJtaW4iLCJsb3ciLCJ2YWx1ZSIsIm1heCIsImxlbmd0aCIsImhpZ2giLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInZhbHVlcyIsImdldCIsImhhcyIsInNob3ciLCJoaWRlIiwib3JpZ2luYWxWYWx1ZXMiLCJzbGlkZXIiLCJyYW5nZSIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbCIsImF0dHIiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiYXBwbHkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGhpcyQkc2xpZGVyJHNsaWRlciIsInNsaWRlTWluIiwic2xpZGVNYXgiLCJOdW1iZXIiLCJzZXQiLCJwYXRobmFtZSIsInRvU3RyaW5nIiwidGFyZ2V0IiwicHJvcCIsImN1ck1pbiIsImN1ck1heCIsImlzIiwibmV3TWluIiwibmV3TWF4Iiwic2VsZWN0b3IiLCJlYWNoIiwiaSIsImVsIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsIl9uZXh0IiwiX3Rocm93IiwidXRpbHMiLCJzd2FsIiwiZXh0cmFjdE1vbmV5IiwiY3VycmVuY3lGb3JtYXQiLCJkZWxheSIsIm1zIiwic2V0VGltZW91dCIsInByb21pc2VTZXJpYWwiLCJmdW5jcyIsInJlZHVjZSIsInByb21pc2UiLCJmdW5jIiwicmVzdWx0IiwiQXJyYXkiLCJjb25jYXQiLCJCdWxrT3JkZXIiLCJjb250ZXh0IiwiJGJvZHkiLCJpdGVtQ291bnQiLCJwcm9ncmVzc0N1cnJlbnQiLCJwcm9ncmVzc1RvdGFsIiwib25RdWFudGl0eUNoYW5nZSIsIm9uUXVhbnRpdHlCdXR0b25DbGljayIsIm9uUHJvZHVjdEFkZGVkIiwib25BZGRBbGxDbGljayIsIm9uQ2FydFF0eUNoYW5nZSIsIm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2siLCJyZWluaXQiLCJ1bmJpbmRFdmVudHMiLCIkcHJvZ3Jlc3NQb3B1cCIsIiRwcm9ncmVzc0JhciIsIiRwcm9ncmVzc1BvcHVwQ3VycmVudCIsIiRwcm9ncmVzc1BvcHVwQWN0aW9ucyIsIiRwcm9ncmVzc1BvcHVwQ2xvc2UiLCJiaW5kRXZlbnRzIiwiY2FsY3VsYXRlIiwiY2FydElkIiwidXBkYXRlUXR5SW5DYXJ0Iiwib2ZmIiwiaGlkZVByb2dyZXNzUG9wdXAiLCJzaG93UHJvZ3Jlc3NQb3B1cCIsImFkZENsYXNzIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGVQcm9ncmVzc1BvcHVwIiwic2hvd1Byb2dyZXNzUG9wdXBBY3Rpb25zIiwic2hvd1Byb2dyZXNzQmFyIiwiaGlkZVByb2dyZXNzQmFyIiwiZmlyZSIsInRleHQiLCJidWxrT3JkZXJFbnRlclF0eSIsImljb24iLCJhZGRBbGxQcm9kdWN0cyIsInByb2R1Y3RJZCIsImZpbmQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIiRpbnB1dCIsImNsb3Nlc3QiLCJxdWFudGl0eU1pbiIsInBhcnNlSW50IiwicXVhbnRpdHlNYXgiLCJxdHkiLCJfdGhpczIiLCJ0b3RhbCIsImNvdW50IiwibW9uZXkiLCIkcHJpY2UiLCJwcmljZVZhbCIsInBhcnNlRmxvYXQiLCJwcmljZUZtdCIsInN1YnRvdGFsIiwiTWF0aCIsInJvdW5kIiwiJHN1YnRvdGFsIiwiaHRtbCIsIl90aGlzMyIsInByb21pc2VzIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhZGRQcm9kdWN0IiwidXBkYXRlQ2FydENvdW50ZXIiLCJfYWRkUHJvZHVjdCIsIl9jYWxsZWUyIiwiZm9ybURhdGEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsImFwcGVuZCIsImFwaSIsImNhcnQiLCJpdGVtQWRkIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInRtcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJfeCIsIl94MiIsIl90aGlzNCIsInF0eXMiLCJsaW5lSXRlbXMiLCJwaHlzaWNhbEl0ZW1zIiwiaXRlbSIsInF1YW50aXR5IiwiJGVsIiwiZ2V0Q29udGVudCIsInRlbXBsYXRlIiwicmVzcCIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJ0cmlnZ2VyIiwiYnVsa09yZGVyRmFjdG9yeSIsIiRzZWxlY3RvciIsImJ1bGtPcmRlciIsIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwib25Tb3J0QnlTdWJtaXQiLCJ1cmwiLCJwYXJzZSIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZUFycmF5IiwicGFyYW0iLCJxdWVyeSIsInBhZ2UiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJmb3JtYXQiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiZGVmYXVsdCIsImhvb2tzIiwibW9kYWxGYWN0b3J5IiwiY29sbGFwc2libGVGYWN0b3J5IiwiQ29sbGFwc2libGVFdmVudHMiLCJWYWxpZGF0b3JzIiwibm9kIiwiYWN0aW9uQmFyRmFjdG9yeSIsImluaXRTaG9wQnlQcmljZVNsaWRlciIsIm1lZGlhUXVlcnlMaXN0RmFjdG9yeSIsIm1lZGl1bU1lZGlhUXVlcnlMaXN0IiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImxvYWQiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJpbml0UHJpY2VTbGlkZXIiLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwib25Qb3BTdGF0ZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwib25Eb2N1bWVudENsaWNrT2ZIb3Jpem9udGFsTGF5b3V0Iiwib25lIiwiaW5pdEZpbmRHYXRlIiwiYmluZEhvcml6b250YWxMYXlvdXRFdmVudHMiLCJoYXNDbGFzcyIsIm9wZW4iLCJfJCRkYXRhIiwiXyQkZGF0YTIiLCJjb2xsYXBzZUZhY2V0IiwiJGNvbnRlbnQiLCIkdG9nZ2xlIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJvZmZzZXQiLCJvdXRlcldpZHRoIiwiYm9keSIsImNsaWVudFdpZHRoIiwiZm9jdXMiLCJuYXZMaXN0RWwiLCIkbmF2TGlzdCIsIiRjb250ZW50cyIsImluc2VydEFmdGVyIiwiaiIsIm1hcCIsImVsMiIsImZpbHRlciIsImluc3RhbmNlIiwia2V5IiwiY2xvc2UiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmJpbmRIb3Jpem9udGFsTGF5b3V0RXZlbnRzIiwiY29sbGFwc2libGVFbGVtZW50cyIsIl9jb2xsYXBzaWJsZUVsZW1lbnRzIiwiZ2V0VXJsIiwiX2JzX3dpZHRoIiwid2lkdGgiLCJmaW5kR2F0ZSIsInNob3dNb3JlVXJsIiwibWluV2lkdGhQcm9taXNlIiwiZmluZE1pbldpZHRoVmFsdWVzIiwiX3VybCIsIiRtaW5XaWR0aCIsImdldFBhZ2UiLCJzaG93TW9yZSIsImxpc3RfYWxsIiwibWF4V2lkdGhQcm9taXNlIiwiZmluZE1heFdpZHRoVmFsdWVzIiwiJG1heFdpZHRoIiwiYWxsIiwiX3JlZiIsIm1pbldpZHRoQXJyIiwibWF4V2lkdGhBcnIiLCJnb1RvVXJsIiwiZGVzdHJveSIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsImRyb3Bkb3duSWQiLCJ1cGRhdGVWaWV3IiwidXBkYXRlVmlld0NhbGxiYWNrIiwiZW1pdCIsImV4cGFuZEZhY2V0SXRlbXMiLCJpZCIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX2luY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzNSIsImZhY2V0IiwiZmFjZXRVcmwiLCJuYXZMaXN0SGVpZ2h0IiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwicGFyZW50IiwicmVtb3ZlQXR0ciIsIl90aGlzNiIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsIiRpdGVtcyIsImVsZW1lbnQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluZGV4T2YiLCJvdmVyZmxvd1kiLCJleHBhbmRGYWNldCIsIl90aGlzNyIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM4IiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzOSIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXMxMCIsIl90aGlzMTEiLCIkbWluTWF4RmFjZXRzIiwiJGxpbmsiLCJtYXRjaGVzIiwiY2xvc2VTaWRlYmFyIiwiX29uY2UiLCJmaXJzdCIsIl9kZWxheSIsIndpblVybCIsIm1vZGUiLCJsaW1pdCIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJxdWVyeVBhcmFtc0FycmF5Iiwic2VhcmNoUGFyYW1zIiwibGlua1VybCIsInJlIiwidXBkYXRlZExpbmtVcmwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwiJGZhY2V0ZWRTZWFyY2giLCIkc2hvcEJ5UHJpY2UiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJKU09OIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJzcGxpdCIsImFjYyIsInN3ZWV0QWxlcnQiLCJ3ZWFrTWFwIiwiV2Vha01hcCIsIlN3YWwiLCJtaXhpbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==
