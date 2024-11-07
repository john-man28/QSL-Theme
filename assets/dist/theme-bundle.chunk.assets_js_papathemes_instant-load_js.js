(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_instant-load_js"],{

/***/ "./assets/js/papathemes/instant-load.js":
/*!**********************************************!*\
  !*** ./assets/js/papathemes/instant-load.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/delay */ "./node_modules/lodash/delay.js");
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var isTouchDevice = (0,_theme_utils__WEBPACK_IMPORTED_MODULE_9__.checkTouchDevice)();
var history = window.history;
var Preloader = {
  cache: {},
  cacheLimit: 100,
  loading: {},
  /**
   * Wait until no other the same url loading
   * @param {String} cacheKey
   */
  waitLoading: function waitLoading(cacheKey) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (Preloader.loading[cacheKey]) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.next = 4;
            return new Promise(function (resolve) {
              var _check = function check() {
                if (!Preloader.loading[cacheKey]) {
                  resolve();
                } else {
                  lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(_check, 300);
                }
              };
              _check();
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * @param {Function} request Promise function
   * @param {String} cacheKey
   * @return {Promise}
   */
  load: function load(request, cacheKey) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.waitLoading(cacheKey);
          case 2:
            if (!Preloader.getCache(cacheKey)) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", Preloader.getCache(cacheKey));
          case 4:
            Preloader.loading[cacheKey] = true;
            _context2.prev = 5;
            _context2.next = 8;
            return request();
          case 8:
            response = _context2.sent;
            Preloader.saveCache(response, cacheKey);
            delete Preloader.loading[cacheKey];
            return _context2.abrupt("return", response);
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](5);
            delete Preloader.loading[cacheKey];
            throw _context2.t0;
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 14]]);
    }))();
  },
  getCache: function getCache(cacheKey) {
    if (cacheKey && Preloader.cache[cacheKey]) {
      return Preloader.cache[cacheKey];
    }
    return null;
  },
  saveCache: function saveCache(data, cacheKey) {
    if (cacheKey) {
      if (lodash_size__WEBPACK_IMPORTED_MODULE_1___default()(Preloader.cache) >= Preloader.cacheLimit) {
        for (var k in Preloader.cache) {
          if (Preloader.cache.hasOwnProperty(k)) {
            delete Preloader.cache[k];
            break;
          }
        }
      }
      Preloader.cache[cacheKey] = data;
    }
  }
};
var InstantQuickView = /*#__PURE__*/function () {
  function InstantQuickView(context) {
    this.context = context;
    this.modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_4__.defaultModal)();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }

  /**
   * Load a product quickview content
   * @param {String} productId
   * @return {Promise}
   */
  var _proto = InstantQuickView.prototype;
  _proto.loadProduct = function loadProduct(productId) {
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
          template: 'products/quick-view'
        }, function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    return Preloader.load(request, "quick-view|" + productId);
  };
  _proto.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    var _this2 = this;
    event.preventDefault();
    var $el = $(event.currentTarget);
    if (event.type === 'click') {
      this.modal.open({
        size: 'large'
      });
    }
    this.loadProduct($el.data('productId')).then(function (response) {
      if (event.type === 'click') {
        _this2.modal.updateContent(response);
        _this2.modal.$content.find('.productView').addClass('productView--quickView');
        _this2.modal.$content.find('[data-slick]').slick();
        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          var $quickView = _this2.modal.$content.find('.quickView');
          var product;
          if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this2.context, {
              enableAlsoBought: true
            }));
          } else {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, _this2.context);
          }
          $('body').trigger('loaded.quickview', [product]);
          return product;
        }, 200);
        if (window.addthis && typeof window.addthis.toolbox === 'function') {
          window.addthis.toolbox('.addthis_toolbox');
        }
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    $('body').on('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    $('body').off('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  return InstantQuickView;
}();
var InstantLoad = /*#__PURE__*/function () {
  function InstantLoad(context) {
    // Won't init on touch screen
    if (isTouchDevice) {
      return;
    }
    this.context = context;
    this.$head = $('head');
    this.$body = $('body');
    this.$pageBody = $('.body').first();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.onLoadPageManually = this.onLoadPageManually.bind(this);
    this.onPopstate = this.onPopstate.bind(this);
    if (!history.state) {
      history.replaceState({
        instantload: true,
        pageType: this.context.pageType
      }, document.title, window.location);
    }
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto2 = InstantLoad.prototype;
  _proto2.initGlobal = function initGlobal($scope) {
    (0,_theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document));
    (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])('[data-collapsible]', {
      $context: $scope
    });
    $('[data-slick]', $scope).slick();
    if (window.addthis && typeof window.addthis.toolbox === 'function') {
      window.addthis.toolbox('.addthis_toolbox');
    }
  };
  _proto2.redirect = function redirect(url) {
    window.location = url;
  };
  _proto2.isUnsupportedPage = function isUnsupportedPage(response) {
    return response.trim() === 'UNSUPPORTED' || !$(response).first().is('#instantload-html-element');
  };
  _proto2.loadPage = function loadPage(url, show, pushState, pageType) {
    var _this3 = this;
    if (show) {
      this.$pageBody.addClass('instantload-loading');
    }
    if (pushState) {
      try {
        history.pushState({
          instantload: true,
          pageType: this.context.pageType
        }, null, url);
      } catch (e) {
        if (show) {
          return this.redirect(url);
        }
        return;
      }
    }
    var config;
    if (pageType === 'home') {
      config = {
        carousel: this.context.homepage_show_carousel,
        products: {
          new: {
            limit: this.context.product_new_count
          },
          featured: {
            limit: this.context.product_featured_count
          },
          top_sellers: {
            limit: this.context.product_top_count
          }
        },
        blog: {
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        customer: {
          recently_viewed_products: true
        },
        shop_by_brand: {
          limit: this.context.sidebar_shop_by_brand
        },
        categories: true,
        cart: true
      };
    } else {
      config = {
        product: {
          videos: {
            limit: 100
          },
          reviews: {
            limit: this.context.productpage_reviews_count
          },
          related_products: {
            limit: this.context.productpage_related_products_count
          },
          similar_by_views: {
            limit: this.context.productpage_similar_by_views_count
          }
        },
        category: {
          shop_by_price: true,
          products: {
            limit: this.context.categorypage_products_per_page
          }
        },
        blog: {
          posts: {
            limit: 5,
            pages: 3,
            summary: 500
          },
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        products: {
          new: {
            limit: 5
          }
        },
        brands: {
          limit: 100
        },
        brand: {
          products: {
            limit: this.context.brandpage_products_per_page
          }
        },
        shop_by_brand: {
          limit: 9
        },
        customer: {
          recently_viewed_products: true
        },
        categories: true,
        cart: true
      };
    }
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
          config: config
        }, function (err, response) {
          if (err || !response) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    Preloader.load(request, "loadPage|" + url).then(function (response) {
      if (show) {
        if (_this3.isUnsupportedPage(response)) {
          return _this3.redirect(url);
        }
        _this3.$body.trigger('beforeload.instantload', [response]);
        var $response = $(response);
        var $respBody = $response.find('#instantload-body-element');
        $('html, body').scrollTop(0);

        // Remove the previous appended <head>'s child tags
        _this3.$head.children().each(function (i, el) {
          var $elm = $(el);
          if ($elm.is('[data-instantload-head-dynamic]')) {
            $elm.remove();
          }
        });

        // Remove title, meta[property] ...
        _this3.$head.children('title, meta[property], link[rel=amphtml], link[rel=canonical]').remove();

        // Append new <head>'s child tags
        $response.find('#instantload-head-element').children().each(function (i, el) {
          var $elm = $(el);
          $elm.attr('data-instantload-head-dynamic', '');
          _this3.$head.append($elm);
        });

        // Replace <body>'s classes
        _this3.$body.attr('class', $respBody.attr('class'));

        // Replace '.body' element
        var $pageBody = $response.find('#instantload-page-body');
        if ($pageBody.length > 0) {
          _this3.$pageBody.empty().append($pageBody.children());
          _this3.initGlobal(_this3.$pageBody);
        }

        // Replace top & bottom banners
        _this3.$body.find('[data-banner-location=top]').empty().append($response.find('#instantload-banners-top').children());
        _this3.$body.find('[data-banner-location=bottom]').empty().append($response.find('#instantload-banners-bottom').children());

        // Remove and append the new script #instantload-script
        _this3.$body.find('#instantload-script').remove();
        _this3.$body.append($response.find('#instantload-script'));

        // Remove and append new elements match [data-instantload-body-dynamic]
        // Useful for loading third-party scripts
        _this3.$body.children('[data-instantload-body-dynamic]').remove();
        _this3.$body.append($respBody.children('[data-instantload-body-dynamic]'));
        _this3.$pageBody.removeClass('instantload-loading').addClass('instantload-loaded');
        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          return _this3.$pageBody.removeClass('instantload-loaded');
        }, 300);
        _this3.$body.trigger('loaded.instantload', [response]);
      }
    }).catch(function () {
      if (show) {
        return _this3.redirect(url);
      }
    });
  };
  _proto2.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    event.preventDefault();
    var $el = $(event.currentTarget);
    var data = $el.data('instantload');
    var url = (typeof data === 'object' ? data.url : null) || $el.data('instantloadUrl') || $el.prop('href');
    var pageType = typeof data === 'object' ? data.page : null;
    if (!url) {
      return;
    }
    this.loadPage(url, event.type === 'click', event.type === 'click', pageType);
  };
  _proto2.onPopstate = function onPopstate() {
    // console.log('onPopstate - state:', history.state);
    if (!history.state) {
      return;
    }
    // console.log(history);

    if (history.state.instantload) {
      this.loadPage(window.location, true, false, history.state.pageType);
    } else {
      // Unsupported pages instantly at this stage - reload it
      window.location.reload();
    }
  };
  _proto2.onLoadPageManually = function onLoadPageManually(event, url, eventType, pageType) {
    if (eventType === void 0) {
      eventType = '';
    }
    if (pageType === void 0) {
      pageType = null;
    }
    this.loadPage(url, eventType === 'click', eventType === 'click', pageType);
  };
  _proto2.bindEvents = function bindEvents() {
    $('body, [data-menu]').on('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').on('loadPage.instantload', this.onLoadPageManually);
    $(window).on('popstate', this.onPopstate);
  };
  _proto2.unbindEvents = function unbindEvents() {
    $('body, [data-menu]').off('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').off('loadPage.instantload', this.onLoadPageManually);
    $(window).off('popstate', this.onPopstate);
  };
  return InstantLoad;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  // eslint-disable-next-line no-new
  new InstantQuickView(context);

  // eslint-disable-next-line no-new
  new InstantLoad(context);
}

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/size.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/size.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2luc3RhbnQtbG9hZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVC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eS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2luc3RhbnQtbG9hZC5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVNpemUuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGUuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nU2l6ZS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlU2l6ZS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc2l6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbmltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4uL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi4vdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IGNoZWNrVG91Y2hEZXZpY2UgfSBmcm9tICcuL3RoZW1lLXV0aWxzJztcblxuY29uc3QgaXNUb3VjaERldmljZSA9IGNoZWNrVG91Y2hEZXZpY2UoKTtcbmNvbnN0IGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbmNvbnN0IFByZWxvYWRlciA9IHtcbiAgICBjYWNoZToge30sXG4gICAgY2FjaGVMaW1pdDogMTAwLFxuICAgIGxvYWRpbmc6IHt9LFxuXG4gICAgLyoqXG4gICAgICogV2FpdCB1bnRpbCBubyBvdGhlciB0aGUgc2FtZSB1cmwgbG9hZGluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYWNoZUtleVxuICAgICAqL1xuICAgIGFzeW5jIHdhaXRMb2FkaW5nKGNhY2hlS2V5KSB7XG4gICAgICAgIGlmICghUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmRlbGF5KGNoZWNrLCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWVzdCBQcm9taXNlIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhY2hlS2V5XG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKHJlcXVlc3QsIGNhY2hlS2V5KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0TG9hZGluZyhjYWNoZUtleSk7XG5cbiAgICAgICAgaWYgKFByZWxvYWRlci5nZXRDYWNoZShjYWNoZUtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcmVsb2FkZXIuZ2V0Q2FjaGUoY2FjaGVLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCk7XG4gICAgICAgICAgICBQcmVsb2FkZXIuc2F2ZUNhY2hlKHJlc3BvbnNlLCBjYWNoZUtleSk7XG4gICAgICAgICAgICBkZWxldGUgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkZWxldGUgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRDYWNoZShjYWNoZUtleSkge1xuICAgICAgICBpZiAoY2FjaGVLZXkgJiYgUHJlbG9hZGVyLmNhY2hlW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHNhdmVDYWNoZShkYXRhLCBjYWNoZUtleSkge1xuICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIGlmIChfLnNpemUoUHJlbG9hZGVyLmNhY2hlKSA+PSBQcmVsb2FkZXIuY2FjaGVMaW1pdCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBQcmVsb2FkZXIuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFByZWxvYWRlci5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5jYWNoZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJlbG9hZGVyLmNhY2hlW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY2xhc3MgSW5zdGFudFF1aWNrVmlldyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLm1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayA9IHRoaXMub25Nb3VzZUVudGVyT3JDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGEgcHJvZHVjdCBxdWlja3ZpZXcgY29udGVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9kdWN0SWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwcm9kdWN0cy9xdWljay12aWV3JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJlbG9hZGVyLmxvYWQocmVxdWVzdCwgYHF1aWNrLXZpZXd8JHtwcm9kdWN0SWR9YCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyT3JDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLm9wZW4oeyBzaXplOiAnbGFyZ2UnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdCgkZWwuZGF0YSgncHJvZHVjdElkJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC4kY29udGVudC5maW5kKCcucHJvZHVjdFZpZXcnKS5hZGRDbGFzcygncHJvZHVjdFZpZXctLXF1aWNrVmlldycpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soKTtcbiAgICAgICAgICAgICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHF1aWNrVmlldyA9IHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnLnF1aWNrVmlldycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWFsc28tYm91Z2h0XSAucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtJywgJHF1aWNrVmlldykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcXVpY2tWaWV3LCBfLmV4dGVuZCh0aGlzLmNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogdHJ1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRxdWlja1ZpZXcsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2xvYWRlZC5xdWlja3ZpZXcnLCBbcHJvZHVjdF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkdGhpcyAmJiB0eXBlb2Ygd2luZG93LmFkZHRoaXMudG9vbGJveCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkdGhpcy50b29sYm94KCcuYWRkdGhpc190b29sYm94Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXIgY2xpY2snLCAnLnF1aWNrdmlldywgLnF1aWNrdmlldy1hbHQnLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keScpLm9mZignbW91c2VlbnRlciBjbGljaycsICcucXVpY2t2aWV3LCAucXVpY2t2aWV3LWFsdCcsIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayk7XG4gICAgfVxufVxuXG5jbGFzcyBJbnN0YW50TG9hZCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAvLyBXb24ndCBpbml0IG9uIHRvdWNoIHNjcmVlblxuICAgICAgICBpZiAoaXNUb3VjaERldmljZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy4kaGVhZCA9ICQoJ2hlYWQnKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy4kcGFnZUJvZHkgPSAkKCcuYm9keScpLmZpcnN0KCk7XG5cbiAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrID0gdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5ID0gdGhpcy5vbkxvYWRQYWdlTWFudWFsbHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBvcHN0YXRlID0gdGhpcy5vblBvcHN0YXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKCFoaXN0b3J5LnN0YXRlKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGluc3RhbnRsb2FkOiB0cnVlLCBwYWdlVHlwZTogdGhpcy5jb250ZXh0LnBhZ2VUeXBlIH0sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEdsb2JhbCgkc2NvcGUpIHtcbiAgICAgICAgZm91bmRhdGlvbigkKGRvY3VtZW50KSk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtY29sbGFwc2libGVdJywgeyAkY29udGV4dDogJHNjb3BlIH0pO1xuICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkc2NvcGUpLnNsaWNrKCk7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkdGhpcyAmJiB0eXBlb2Ygd2luZG93LmFkZHRoaXMudG9vbGJveCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgd2luZG93LmFkZHRoaXMudG9vbGJveCgnLmFkZHRoaXNfdG9vbGJveCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkaXJlY3QodXJsKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICB9XG5cbiAgICBpc1Vuc3VwcG9ydGVkUGFnZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudHJpbSgpID09PSAnVU5TVVBQT1JURUQnIHx8ICEkKHJlc3BvbnNlKS5maXJzdCgpLmlzKCcjaW5zdGFudGxvYWQtaHRtbC1lbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgbG9hZFBhZ2UodXJsLCBzaG93LCBwdXNoU3RhdGUsIHBhZ2VUeXBlKSB7XG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlQm9keS5hZGRDbGFzcygnaW5zdGFudGxvYWQtbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHB1c2hTdGF0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGluc3RhbnRsb2FkOiB0cnVlLCBwYWdlVHlwZTogdGhpcy5jb250ZXh0LnBhZ2VUeXBlIH0sIG51bGwsIHVybCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbmZpZztcbiAgICAgICAgaWYgKHBhZ2VUeXBlID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBjYXJvdXNlbDogdGhpcy5jb250ZXh0LmhvbWVwYWdlX3Nob3dfY2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RfbmV3X2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0X2ZlYXR1cmVkX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3Bfc2VsbGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0X3RvcF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50X3Bvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmhvbWVwYWdlX2Jsb2dfcG9zdHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgICAgICAgICAgICByZWNlbnRseV92aWV3ZWRfcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuc2lkZWJhcl9zaG9wX2J5X2JyYW5kLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0cGFnZV9yZXZpZXdzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWxhdGVkX3Byb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RwYWdlX3JlbGF0ZWRfcHJvZHVjdHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJfYnlfdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdHBhZ2Vfc2ltaWxhcl9ieV92aWV3c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmNhdGVnb3J5cGFnZV9wcm9kdWN0c19wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlY2VudF9wb3N0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5ob21lcGFnZV9ibG9nX3Bvc3RzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJyYW5kczoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuYnJhbmRwYWdlX3Byb2R1Y3RzX3Blcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogOSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VudGx5X3ZpZXdlZF9wcm9kdWN0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FydDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IGNvbmZpZyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcmVsb2FkZXIubG9hZChyZXF1ZXN0LCBgbG9hZFBhZ2V8JHt1cmx9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbnN1cHBvcnRlZFBhZ2UocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgW3Jlc3BvbnNlXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzcG9uc2UgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzcEJvZHkgPSAkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWJvZHktZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcHJldmlvdXMgYXBwZW5kZWQgPGhlYWQ+J3MgY2hpbGQgdGFnc1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlYWQuY2hpbGRyZW4oKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxtID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxtLmlzKCdbZGF0YS1pbnN0YW50bG9hZC1oZWFkLWR5bmFtaWNdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbG0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aXRsZSwgbWV0YVtwcm9wZXJ0eV0gLi4uXG4gICAgICAgICAgICAgICAgdGhpcy4kaGVhZC5jaGlsZHJlbigndGl0bGUsIG1ldGFbcHJvcGVydHldLCBsaW5rW3JlbD1hbXBodG1sXSwgbGlua1tyZWw9Y2Fub25pY2FsXScpLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgbmV3IDxoZWFkPidzIGNoaWxkIHRhZ3NcbiAgICAgICAgICAgICAgICAkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWhlYWQtZWxlbWVudCcpLmNoaWxkcmVuKCkuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsbSA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAkZWxtLmF0dHIoJ2RhdGEtaW5zdGFudGxvYWQtaGVhZC1keW5hbWljJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWFkLmFwcGVuZCgkZWxtKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgPGJvZHk+J3MgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYXR0cignY2xhc3MnLCAkcmVzcEJvZHkuYXR0cignY2xhc3MnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlICcuYm9keScgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0ICRwYWdlQm9keSA9ICRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtcGFnZS1ib2R5Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCRwYWdlQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhZ2VCb2R5LmVtcHR5KCkuYXBwZW5kKCRwYWdlQm9keS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2xvYmFsKHRoaXMuJHBhZ2VCb2R5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRvcCAmIGJvdHRvbSBiYW5uZXJzXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5maW5kKCdbZGF0YS1iYW5uZXItbG9jYXRpb249dG9wXScpLmVtcHR5KCkuYXBwZW5kKCRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtYmFubmVycy10b3AnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmZpbmQoJ1tkYXRhLWJhbm5lci1sb2NhdGlvbj1ib3R0b21dJykuZW1wdHkoKS5hcHBlbmQoJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1iYW5uZXJzLWJvdHRvbScpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuZCBhcHBlbmQgdGhlIG5ldyBzY3JpcHQgI2luc3RhbnRsb2FkLXNjcmlwdFxuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuZmluZCgnI2luc3RhbnRsb2FkLXNjcmlwdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKCRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtc2NyaXB0JykpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuZCBhcHBlbmQgbmV3IGVsZW1lbnRzIG1hdGNoIFtkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY11cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIGxvYWRpbmcgdGhpcmQtcGFydHkgc2NyaXB0c1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuY2hpbGRyZW4oJ1tkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY10nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmFwcGVuZCgkcmVzcEJvZHkuY2hpbGRyZW4oJ1tkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY10nKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRwYWdlQm9keS5yZW1vdmVDbGFzcygnaW5zdGFudGxvYWQtbG9hZGluZycpLmFkZENsYXNzKCdpbnN0YW50bG9hZC1sb2FkZWQnKTtcbiAgICAgICAgICAgICAgICBfLmRlbGF5KCgpID0+IHRoaXMuJHBhZ2VCb2R5LnJlbW92ZUNsYXNzKCdpbnN0YW50bG9hZC1sb2FkZWQnKSwgMzAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignbG9hZGVkLmluc3RhbnRsb2FkJywgW3Jlc3BvbnNlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyT3JDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAkZWwuZGF0YSgnaW5zdGFudGxvYWQnKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEudXJsIDogbnVsbCkgfHwgJGVsLmRhdGEoJ2luc3RhbnRsb2FkVXJsJykgfHwgJGVsLnByb3AoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgcGFnZVR5cGUgPSB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhLnBhZ2UgOiBudWxsO1xuXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCwgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJywgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJywgcGFnZVR5cGUpO1xuICAgIH1cblxuICAgIG9uUG9wc3RhdGUoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvblBvcHN0YXRlIC0gc3RhdGU6JywgaGlzdG9yeS5zdGF0ZSk7XG4gICAgICAgIGlmICghaGlzdG9yeS5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhpc3RvcnkpO1xuXG4gICAgICAgIGlmIChoaXN0b3J5LnN0YXRlLmluc3RhbnRsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlKHdpbmRvdy5sb2NhdGlvbiwgdHJ1ZSwgZmFsc2UsIGhpc3Rvcnkuc3RhdGUucGFnZVR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVW5zdXBwb3J0ZWQgcGFnZXMgaW5zdGFudGx5IGF0IHRoaXMgc3RhZ2UgLSByZWxvYWQgaXRcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZFBhZ2VNYW51YWxseShldmVudCwgdXJsLCBldmVudFR5cGUgPSAnJywgcGFnZVR5cGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubG9hZFBhZ2UodXJsLCBldmVudFR5cGUgPT09ICdjbGljaycsIGV2ZW50VHlwZSA9PT0gJ2NsaWNrJywgcGFnZVR5cGUpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHksIFtkYXRhLW1lbnVdJykub24oJ21vdXNlZW50ZXIgY2xpY2snLCAnW2RhdGEtaW5zdGFudGxvYWRdLCBbZGF0YS1pbnN0YW50bG9hZC11cmxdJywgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrKTtcbiAgICAgICAgJCgnYm9keScpLm9uKCdsb2FkUGFnZS5pbnN0YW50bG9hZCcsIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5KTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BzdGF0ZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5LCBbZGF0YS1tZW51XScpLm9mZignbW91c2VlbnRlciBjbGljaycsICdbZGF0YS1pbnN0YW50bG9hZF0sIFtkYXRhLWluc3RhbnRsb2FkLXVybF0nLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgICAgICAkKCdib2R5Jykub2ZmKCdsb2FkUGFnZS5pbnN0YW50bG9hZCcsIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5KTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wc3RhdGUpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgSW5zdGFudFF1aWNrVmlldyhjb250ZXh0KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgSW5zdGFudExvYWQoY29udGV4dCk7XG59XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBhbiBBU0NJSSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xudmFyIGFzY2lpU2l6ZSA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlTaXplO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuIiwidmFyIGFzY2lpU2l6ZSA9IHJlcXVpcmUoJy4vX2FzY2lpU2l6ZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVNpemUgPSByZXF1aXJlKCcuL191bmljb2RlU2l6ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG51bWJlciBvZiBzeW1ib2xzIGluIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN0cmluZyBzaXplLlxuICovXG5mdW5jdGlvbiBzdHJpbmdTaXplKHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlU2l6ZShzdHJpbmcpXG4gICAgOiBhc2NpaVNpemUoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdTaXplO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzaXplIG9mIGEgVW5pY29kZSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVNpemUoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSByZVVuaWNvZGUubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKHJlVW5pY29kZS50ZXN0KHN0cmluZykpIHtcbiAgICArK3Jlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVTaXplO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKSxcbiAgICBzdHJpbmdTaXplID0gcmVxdWlyZSgnLi9fc3RyaW5nU2l6ZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBgY29sbGVjdGlvbmAgYnkgcmV0dXJuaW5nIGl0cyBsZW5ndGggZm9yIGFycmF5LWxpa2VcbiAqIHZhbHVlcyBvciB0aGUgbnVtYmVyIG9mIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIGZvciBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbGxlY3Rpb24gc2l6ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zaXplKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5zaXplKHsgJ2EnOiAxLCAnYic6IDIgfSk7XG4gKiAvLyA9PiAyXG4gKlxuICogXy5zaXplKCdwZWJibGVzJyk7XG4gKiAvLyA9PiA3XG4gKi9cbmZ1bmN0aW9uIHNpemUoY29sbGVjdGlvbikge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGNvbGxlY3Rpb24pID8gc3RyaW5nU2l6ZShjb2xsZWN0aW9uKSA6IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICB9XG4gIHZhciB0YWcgPSBnZXRUYWcoY29sbGVjdGlvbik7XG4gIGlmICh0YWcgPT0gbWFwVGFnIHx8IHRhZyA9PSBzZXRUYWcpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5zaXplO1xuICB9XG4gIHJldHVybiBiYXNlS2V5cyhjb2xsZWN0aW9uKS5sZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2l6ZTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInV0aWxzIiwiZGVmYXVsdE1vZGFsIiwiUHJvZHVjdERldGFpbHMiLCJmb3VuZGF0aW9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiY2hlY2tUb3VjaERldmljZSIsImlzVG91Y2hEZXZpY2UiLCJoaXN0b3J5Iiwid2luZG93IiwiUHJlbG9hZGVyIiwiY2FjaGUiLCJjYWNoZUxpbWl0IiwibG9hZGluZyIsIndhaXRMb2FkaW5nIiwiY2FjaGVLZXkiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoZWNrIiwiX2RlbGF5IiwibG9hZCIsInJlcXVlc3QiLCJfdGhpcyIsIl9jYWxsZWUyIiwicmVzcG9uc2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRDYWNoZSIsInNhdmVDYWNoZSIsInQwIiwiZGF0YSIsIl9zaXplIiwiayIsIkluc3RhbnRRdWlja1ZpZXciLCJjb250ZXh0IiwibW9kYWwiLCJvbk1vdXNlRW50ZXJPckNsaWNrIiwiYmluZCIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJfcHJvdG8iLCJsb2FkUHJvZHVjdCIsInByb2R1Y3RJZCIsInJlamVjdCIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwidGVtcGxhdGUiLCJlcnIiLCJldmVudCIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0IiwiJGVsIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJvcGVuIiwic2l6ZSIsInVwZGF0ZUNvbnRlbnQiLCIkY29udGVudCIsImZpbmQiLCJhZGRDbGFzcyIsInNsaWNrIiwiJHF1aWNrVmlldyIsIl9leHRlbmQiLCJlbmFibGVBbHNvQm91Z2h0IiwidHJpZ2dlciIsImFkZHRoaXMiLCJ0b29sYm94Iiwib24iLCJvZmYiLCJJbnN0YW50TG9hZCIsIiRoZWFkIiwiJGJvZHkiLCIkcGFnZUJvZHkiLCJmaXJzdCIsIm9uTG9hZFBhZ2VNYW51YWxseSIsIm9uUG9wc3RhdGUiLCJzdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImluc3RhbnRsb2FkIiwicGFnZVR5cGUiLCJkb2N1bWVudCIsInRpdGxlIiwibG9jYXRpb24iLCJfcHJvdG8yIiwiaW5pdEdsb2JhbCIsIiRzY29wZSIsIiRjb250ZXh0IiwicmVkaXJlY3QiLCJ1cmwiLCJpc1Vuc3VwcG9ydGVkUGFnZSIsInRyaW0iLCJpcyIsImxvYWRQYWdlIiwic2hvdyIsInB1c2hTdGF0ZSIsIl90aGlzMyIsImNvbmZpZyIsImNhcm91c2VsIiwiaG9tZXBhZ2Vfc2hvd19jYXJvdXNlbCIsInByb2R1Y3RzIiwibmV3IiwibGltaXQiLCJwcm9kdWN0X25ld19jb3VudCIsImZlYXR1cmVkIiwicHJvZHVjdF9mZWF0dXJlZF9jb3VudCIsInRvcF9zZWxsZXJzIiwicHJvZHVjdF90b3BfY291bnQiLCJibG9nIiwicmVjZW50X3Bvc3RzIiwiaG9tZXBhZ2VfYmxvZ19wb3N0c19jb3VudCIsImN1c3RvbWVyIiwicmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzIiwic2hvcF9ieV9icmFuZCIsInNpZGViYXJfc2hvcF9ieV9icmFuZCIsImNhdGVnb3JpZXMiLCJjYXJ0IiwidmlkZW9zIiwicmV2aWV3cyIsInByb2R1Y3RwYWdlX3Jldmlld3NfY291bnQiLCJyZWxhdGVkX3Byb2R1Y3RzIiwicHJvZHVjdHBhZ2VfcmVsYXRlZF9wcm9kdWN0c19jb3VudCIsInNpbWlsYXJfYnlfdmlld3MiLCJwcm9kdWN0cGFnZV9zaW1pbGFyX2J5X3ZpZXdzX2NvdW50IiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwiY2F0ZWdvcnlwYWdlX3Byb2R1Y3RzX3Blcl9wYWdlIiwicG9zdHMiLCJwYWdlcyIsInN1bW1hcnkiLCJicmFuZHMiLCJicmFuZCIsImJyYW5kcGFnZV9wcm9kdWN0c19wZXJfcGFnZSIsImdldFBhZ2UiLCIkcmVzcG9uc2UiLCIkcmVzcEJvZHkiLCJzY3JvbGxUb3AiLCJjaGlsZHJlbiIsImVhY2giLCJlbCIsIiRlbG0iLCJyZW1vdmUiLCJhdHRyIiwiYXBwZW5kIiwiZW1wdHkiLCJyZW1vdmVDbGFzcyIsInByb3AiLCJwYWdlIiwicmVsb2FkIiwiZXZlbnRUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==
