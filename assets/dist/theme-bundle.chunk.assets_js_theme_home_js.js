"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/papathemes/product-loadmore.js":
/*!**************************************************!*\
  !*** ./assets/js/papathemes/product-loadmore.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var ProductLoadMore = /*#__PURE__*/function () {
  function ProductLoadMore($scope, context) {
    this.$scope = $scope;
    this.context = context;
    this.$loading = $scope.find('.loading').hide();
    this.$loadMore = $scope.find('.loadMore').hide();
    this.$collapse = $scope.find('.collapse').hide();
    this.options = {};
    this.options.product_new_count = Number(this.context.product_new_count) || 0;
    this.options.product_featured_count = Number(this.context.product_featured_count) || 0;
    this.options.product_top_count = Number(this.context.product_top_count) || 0;
    this.type = this.$scope.find('[data-product-type]').data('productType');
    this.defaultProductsCount = this.getDefaultProductsCount();
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    var $products = $scope.find('.product, .productCarousel-slide');
    if ($products.length >= this.defaultProductsCount) {
      this.$loadMore.show();
    }
    this.bindEvents();
  }
  var _proto = ProductLoadMore.prototype;
  _proto.getDefaultProductsCount = function getDefaultProductsCount() {
    if (this.type === 'new') return this.options.product_new_count;
    if (this.type === 'featured') return this.options.product_featured_count;
    if (this.type === 'top_sellers') return this.options.product_top_count;
    return 0;
  };
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
    this.$loadMore.on('click', this.onLoadMore);
    this.$collapse.on('click', this.onCollapse);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$loadMore.off('click', this.onLoadMore);
    this.$collapse.off('click', this.onCollapse);
  };
  _proto.onLoadMore = function onLoadMore(event) {
    var _this2 = this;
    event.preventDefault();
    var $content = this.$scope.find(['.productGrid', '.productList', '.productCarousel:not(.blaze-slider)', '.productCarousel.blaze-slider .blaze-track'].join(', '));
    var isSlick = $content.is('[data-slick]');
    if (!this.$scope.data('loadedMore')) {
      this.$scope.data('loadedMore', true);
      var template = 'papathemes/list-product/products';
      var limit = 100;
      var config = {
        products: {
          featured: {
            limit: this.type === 'featured' ? limit : 0
          },
          top_sellers: {
            limit: this.type === 'top_sellers' ? limit : 0
          },
          new: {
            limit: this.type === 'new' ? limit : 0
          }
        }
      };
      this.$loading.show();
      this.$loadMore.attr('disabled', true);
      var $blazeSliderArrow = this.$scope.find('.blaze-prev, .blaze-next');
      $blazeSliderArrow.hide();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(this.context.urls.search, {
        template: template,
        config: config
      }, function (err, resp) {
        _this2.$loading.hide();
        _this2.$loadMore.removeAttr('disabled');
        $blazeSliderArrow.css('display', '');
        if (err || !resp) {
          return;
        }
        var existProductIds = _this2.$scope.find('.product, .productCarousel-slide').map(function (i, el) {
          return $(el).data('productId');
        }).get();
        var $products = $(resp).find('.product, .productCarousel-slide').filter(function (i, el) {
          return existProductIds.indexOf($(el).data('productId')) === -1;
        });
        var $blazeSlider = _this2.$scope.find('.productCarousel.blaze-slider');
        var isCarouselBlaze = $blazeSlider.length > 0;

        // Append new products
        if ($products.length > 0) {
          if (isSlick) {
            $content.slick('unslick');
          } else if (!isCarouselBlaze) {
            $products.slice(_this2.defaultProductsCount).hide();
          }
          $content.append($products);
          if (isSlick) {
            $content.slick();
            $content.slick('slickGoTo', existProductIds.length);
          } else if (isCarouselBlaze) {
            var blazeSlider = $blazeSlider.data('blazeSliderInstance');
            if (blazeSlider) {
              blazeSlider.totalSlides = $content.children().length;
              blazeSlider.refresh();
            } else {
              $blazeSlider.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_1__["default"]($blazeSlider.get(0), $blazeSlider.data('blazeSlider')));
            }
          }
        } else {
          _this2.$loadMore.hide();
          _this2.$collapse.hide();
        }
        if (!$products.is(':hidden')) {
          _this2.$loadMore.hide();
        }
        if ($products.length > 0 && !isSlick && !isCarouselBlaze) {
          _this2.$collapse.show();
        }
      });
    } else {
      var $products = this.$scope.find('.product').filter(':hidden');
      $products.slice(0, this.defaultProductsCount).show();
      if (!$products.is(':hidden')) {
        this.$loadMore.hide();
      }
      this.$collapse.show();
    }
  };
  _proto.onCollapse = function onCollapse(event) {
    event.preventDefault();
    var $products = this.$scope.find('.product');
    $products.slice(this.defaultProductsCount).hide();
    this.$collapse.hide();
    if ($products.length > this.defaultProductsCount) {
      this.$loadMore.show();
    }
    $('html, body').animate({
      scrollTop: this.$scope.offset().top
    });
  };
  return ProductLoadMore;
}();
function init(_ref) {
  var _ref$selectors = _ref.selectors,
    selectors = _ref$selectors === void 0 ? ['.beautify__section--newProducts', '.beautify__section--featuredProducts', '.beautify__section--topProducts'] : _ref$selectors,
    context = _ref.context;
  $(selectors.join(', ')).each(function (i, el) {
    var $el = $(el);
    if (!$el.data('productLoadMoreInstance')) {
      $el.data('productLoadMoreInstance', new ProductLoadMore($el, context));
    }
  });
}

/***/ }),

/***/ "./assets/js/papathemes/products-by-category.js":
/*!******************************************************!*\
  !*** ./assets/js/papathemes/products-by-category.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var ProductsByCategory = /*#__PURE__*/function () {
  function ProductsByCategory(_ref) {
    var id = _ref.id,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? '' : _ref$sort,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? '' : _ref$limit,
      $parent = _ref.$parent;
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.id = id;
    this.currentCategoryId = id;
    this.index = index;
    this.sort = sort;
    this.limit = limit;
    this.page = 1;
    this.$parent = $parent;
    this.$scope = $('<div class="papathemes-pbcst-loading"></div>');
    this.$shopBtn = $();
    this.$loadMore = $();
    this.$collapse = $();
    this.$loader = $();
    this.$parent.append(this.$scope);
    this.init();
  }
  var _proto = ProductsByCategory.prototype;
  _proto.init = function init() {
    var _this = this;
    var limitQuery = this.limit ? "&limit=" + this.limit : '';
    var sortQuery = this.sort ? "&sort=" + this.sort : '';
    var template = 'papathemes/pbcst/section';
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage("/categories.php?category=" + this.currentCategoryId + limitQuery + sortQuery, {
      template: template
    }, function (err, resp) {
      if (err || !resp || resp.error) {
        _this.$scope.remove();
        return;
      }
      var $resp = $(resp);
      _this.$scope.replaceWith($resp);
      _this.$scope = $resp;
      _this.$content = _this.$scope.find('[data-pbcst-products-placement]');
      _this.$loader = _this.$scope.find('.loader');
      _this.initTabs();
      _this.initSlick();
      _this.initWidgetRegion();
      _this.initButtons();
    });
  };
  _proto.loadProducts = function loadProducts(callback) {
    var _this2 = this;
    var categoryId = this.currentCategoryId || this.id;
    var limitQuery = this.limit ? "&limit=" + this.limit : '';
    var sortQuery = this.sort ? "&sort=" + this.sort : '';
    var pageQuery = this.page ? "&page=" + this.page : '';
    var template = 'papathemes/pbcst/products';
    this.$loader.addClass('loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage("/categories.php?category=" + categoryId + limitQuery + sortQuery + pageQuery, {
      template: template
    }, function (err, resp) {
      _this2.$loader.removeClass('loading');
      if (err || !resp) {
        return;
      }
      var $resp = $(resp);
      var $currentPage = _this2.$content.find('[data-current-page]');
      if ($currentPage.length > 0) {
        $currentPage.data({
          currentPage: $resp.data('currentPage'),
          hasNextPage: Boolean($resp.data('hasNextPage'))
        });
        $currentPage.find('.productGrid').append($resp.find('.productGrid').children());
      } else {
        _this2.$content.html(resp);
      }
      _this2.$content.find('.product._hideOnTabletWhenNoBanner').removeClass('_hideOnTabletWhenNoBanner');
      _this2.initSlick();
      if ($resp.data('hasNextPage')) {
        _this2.$loadMore.show();
      } else {
        _this2.$loadMore.hide();
      }
      if ($resp.data('currentPage') > 1) {
        _this2.$collapse.show();
      } else {
        _this2.$collapse.hide();
      }

      // Update the Shop Category button and link to match the current category
      _this2.$shopBtn.get().map(function (el) {
        return $(el);
      }).forEach(function ($el) {
        return $el.text($el.data('text').replace('{name}', $resp.data('categoryName')));
      });
      _this2.$shopBtn.attr('href', $resp.data('categoryUrl'));
      if (typeof callback === 'function') {
        callback();
      }
    });
  };
  _proto.initTabs = function initTabs() {
    var _this3 = this;
    (0,_theme_global_foundation__WEBPACK_IMPORTED_MODULE_2__["default"])(this.$scope);
    $('[data-tab]', this.$scope).on('toggled', function (event, $tab) {
      var $a = $tab.find('a');
      var sort = $a.data('pbcstSort') || _this3.sort;
      var subcategoryId = $a.data('pbcstSubcategoryId');

      // Click the same subcategory tab will deactivate it and display the parent category products
      if (subcategoryId && subcategoryId === _this3.currentCategoryId) {
        $tab.removeClass('is-active');
        $tab.find('.tab-title').prop('aria-selected', false);
        subcategoryId = _this3.id;
      }
      var id = subcategoryId || _this3.currentCategoryId;

      // Stop if no tab changed
      if (sort === _this3.sort && id === _this3.currentCategoryId) {
        return;
      }
      _this3.sort = sort;
      _this3.currentCategoryId = id;
      _this3.page = 1;
      _this3.$content.html('');
      _this3.$loadMore.hide();
      _this3.$collapse.hide();
      _this3.loadProducts();
    });
  };
  _proto.initSlick = function initSlick() {
    // init products carousel
    $('[data-slick]', this.$scope).on('init', function (e) {
      return setTimeout(function () {
        // init nested carousel
        $('[data-slick-nested]', e.target).each(function (i, el) {
          $(el).slick($(el).data('slickNested'));
        });
      }, 200);
    }).on('breakpoint', function (e) {
      return setTimeout(function () {
        $('[data-slick-nested]', e.target).slick('setPosition');
      }, 200);
    }).slick();
  };
  _proto.initWidgetRegion = function initWidgetRegion() {
    var $widgetRegion = this.$parent.find("[data-pbcst-widget-region=\"" + this.index + "\"]");
    var $widgetRegionBelow = this.$parent.find("[data-pbcst-widget-region=\"below_" + this.index + "\"]");
    var $placement = this.$scope.find('[data-pbcst-widget-region-placement=""]');
    var $placementBelow = this.$scope.find('[data-pbcst-widget-region-placement="below"]');
    $placement.append($widgetRegion);
    $placementBelow.append($widgetRegionBelow);
  };
  _proto.initButtons = function initButtons() {
    this.$shopBtn = this.$scope.find('._shopBtn');
    this.$loadMore = this.$scope.find('.loadMore').hide();
    this.$collapse = this.$scope.find('.collapse').hide();
    if (this.$content.find('[data-current-page]').data('hasNextPage')) {
      this.$loadMore.show();
    }
    this.$loadMore.on('click', this.onLoadMore);
    this.$collapse.on('click', this.onCollapse);
  };
  _proto.onLoadMore = function onLoadMore(event) {
    event.preventDefault();
    var $currentPage = this.$content.find('[data-current-page]');
    var $hide = this.$content.find('.product.hide');
    if ($hide.length > 0) {
      $hide.show().removeClass('hide');
      this.$collapse.show();
      if (!$currentPage.data('hasNextPage')) {
        this.$loadMore.hide();
      }
      return;
    }
    if ($currentPage.data('hasNextPage')) {
      this.page++;
      this.loadProducts();
    } else {
      this.$loadMore.hide();
    }
  };
  _proto.onCollapse = function onCollapse(event) {
    event.preventDefault();
    if (this.limit) {
      var $hide = this.$content.find('.product').slice(this.limit).hide().addClass('hide');
      if ($hide.length > 0) {
        this.$loadMore.show();
      }
      $('html, body').animate({
        scrollTop: this.$content.offset().top
      }, 500);
    }
    this.$collapse.hide();
  };
  return ProductsByCategory;
}();
var ProductsByCategories = /*#__PURE__*/function () {
  function ProductsByCategories($scope) {
    var _window$supermarketTh;
    this.$scope = $scope;
    this.lazy = this.$scope.is('[data-lazy]');
    this.lazyOffset = ((_window$supermarketTh = window.supermarketThemeExtraConfig) == null ? void 0 : _window$supermarketTh.pbcLazyOffset) || 300;
    this.loaded = false;
    this.onCheckViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onCheckViewport.bind(this), 100);
    this.bindEvents();
    if (!this.lazy) {
      this.load();
    }
  }
  var _proto2 = ProductsByCategories.prototype;
  _proto2.load = function load() {
    var _this4 = this;
    this.loaded = true;
    var sort = this.$scope.data('sort');
    var limit = this.$scope.data('limit');
    String(this.$scope.data('pbcstGroup')).split(',').map(function (idStr, index) {
      return new ProductsByCategory({
        id: idStr.trim(),
        index: index,
        sort: sort,
        limit: limit,
        $parent: _this4.$scope
      });
    });
  };
  _proto2.bindEvents = function bindEvents() {
    var _this5 = this;
    $('body').one('beforeload.instantload', function () {
      return _this5.unbindEvents();
    });
    if (this.lazy) {
      $(window).on('load resize scroll', this.onCheckViewport);
    }
  };
  _proto2.unbindEvents = function unbindEvents() {
    $(window).off('load resize scroll', this.onCheckViewport);
  };
  _proto2.onCheckViewport = function onCheckViewport() {
    if (this.loaded) {
      $(window).off('load resize scroll', this.onCheckViewport);
      return;
    }
    if (!this.$scope.is(':visible')) {
      return;
    }
    var offset = this.lazyOffset;
    var elTop = this.$scope.offset().top;
    var elBottom = elTop + this.$scope.outerHeight();
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).innerHeight();
    if (elTop - offset < winBottom && elBottom + offset > winTop) {
      this.load();
    }
  };
  return ProductsByCategories;
}();
function init(selector) {
  if (selector === void 0) {
    selector = '[data-pbcst-group]';
  }
  $(selector).each(function (i, el) {
    return new ProductsByCategories($(el));
  });
}

/***/ }),

/***/ "./assets/js/papathemes/special-products-tabs.js":
/*!*******************************************************!*\
  !*** ./assets/js/papathemes/special-products-tabs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var SpecialProductsTabs = /*#__PURE__*/function () {
  function SpecialProductsTabs($scope, context) {
    this.$scope = $scope;
    this.context = context;
    this.$viewportCheck = $scope.find('[data-viewport-check]');
    this.$loading = $scope.find('.loading').hide();
    this.$loadMore = $scope.find('.loadMore').hide();
    this.$collapse = $scope.find('.collapse').hide();
    this.options = this.$scope.data('specialProductsTabs') || {};
    this.options.lazyCount = Number(this.options.lazyCount) || 0;
    this.options.initCount = Number(this.options.initCount) || 0;
    this.defaultProductsCount = this.options.lazyCount + this.options.initCount;
    this.onCheckViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onCheckViewport.bind(this), 100);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.onTabToggled = this.onTabToggled.bind(this);
    if (this.options.showMore) {
      this.$loadMore.show();
    }
    this.bindEvents();
  }
  var _proto = SpecialProductsTabs.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
    if (this.$viewportCheck.length > 0) {
      $(window).on('load resize scroll', this.onCheckViewport);
    }
    if (this.options.showMore) {
      this.$loadMore.on('click', this.onLoadMore);
    }
    this.$collapse.on('click', this.onCollapse);
    $('[data-tab]', this.$scope).on('toggled', this.onTabToggled);
  };
  _proto.unbindEvents = function unbindEvents() {
    $(window).off('load resize scroll', this.onCheckViewport);
    this.$loadMore.off('click', this.onLoadMore);
    this.$collapse.off('click', this.onCollapse);
    $('[data-tab]', this.$scope).off('toggled', this.onTabToggled);
  };
  _proto.onCheckViewport = function onCheckViewport() {
    var _this2 = this;
    var offset = 250;
    this.$viewportCheck.each(function (i, el) {
      var $el = $(el);
      if (!$el.is(':visible')) {
        return;
      }
      var elTop = $el.offset().top;
      var elBottom = elTop + $el.outerHeight();
      var winTop = $(window).scrollTop();
      var winBottom = winTop + $(window).innerHeight();
      if (elTop - offset < winBottom && elBottom + offset > winTop) {
        _this2.loadViewportProducts($el.data('viewportCheck'), $el.closest('.tab-content').find(['.productGrid', '.productList', '.productCarousel:not(.blaze-slider)', '.productCarousel.blaze-slider .blaze-track'].join(', ')));
        _this2.$viewportCheck = _this2.$viewportCheck.not($el);
        $el.remove();
      }
    });
  };
  _proto.onLoadMore = function onLoadMore(event) {
    var _this3 = this;
    event.preventDefault();
    var $tab = this.$scope.find('.tab-content.is-active');
    var $content = $tab.find(['.productGrid', '.productList', '.productCarousel:not(.blaze-slider)', '.productCarousel.blaze-slider .blaze-track'].join(', '));
    var isSlick = $content.is('[data-slick]');
    var $blazeCarousel = $tab.find('.productCarousel.blaze-slider');
    var isBlazeCarousel = $blazeCarousel.length > 0;
    if (!$tab.data('loadedMore')) {
      $tab.data('loadedMore', true);
      var template = 'papathemes/special-products-tabs/products';
      var limit = 100;
      var config = {
        products: {
          featured: {
            limit: 0
          },
          top: {
            limit: 0
          },
          new: {
            limit: 0
          }
        }
      };
      var type = $tab.data('productType');
      switch (type) {
        case 'featured':
          config.products.featured = {
            limit: limit
          };
          break;
        case 'top':
          config.products.top_sellers = {
            limit: limit
          };
          break;
        case 'new':
        default:
          config.products.new = {
            limit: limit
          };
          break;
      }
      this.$loading.show();
      this.$loadMore.attr('disabled', true);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(this.context.urls.search, {
        template: template,
        config: config
      }, function (err, resp) {
        _this3.$loading.hide();
        _this3.$loadMore.removeAttr('disabled');
        if (err || !resp) {
          return;
        }
        var existProductIds = $tab.find('.product, .productCarousel-slide').map(function (i, el) {
          return $(el).data('productId');
        }).get();
        var $products = $(resp).find('.product, .productCarousel-slide').filter(function (i, el) {
          return existProductIds.indexOf($(el).data('productId')) === -1;
        });

        // Append new products and reinit carousel
        if ($products.length > 0) {
          if (isSlick) {
            $content.slick('unslick');
          } else if (!isBlazeCarousel) {
            $products.slice(_this3.defaultProductsCount).hide();
          }
          $content.append($products);
          if (isSlick) {
            $content.slick();
            $content.slick('slickGoTo', existProductIds.length);
          }
          if (isBlazeCarousel) {
            var blazeSlider = $blazeCarousel.data('blazeSliderInstance');
            if (blazeSlider) {
              blazeSlider.totalSlides = $content.children().length;
              blazeSlider.refresh();
            } else {
              $blazeCarousel.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($blazeCarousel.get(0), $blazeCarousel.data('blazeSlider')));
            }
          }
        }
        if (!$products.is(':hidden')) {
          _this3.$loadMore.hide();
        }
        if ($products.length > 0 && !isSlick && !isBlazeCarousel) {
          _this3.$collapse.show();
        }
      });
    } else if (!isSlick && !isBlazeCarousel) {
      var $products = $tab.find('.product, .productCarousel-slide').filter(':hidden');
      $products.slice(0, this.defaultProductsCount).show();
      if (!$products.is(':hidden')) {
        this.$loadMore.hide();
      }
      this.$collapse.show();
    }
  };
  _proto.onCollapse = function onCollapse(event) {
    event.preventDefault();
    var $tab = this.$scope.find('.tab-content.is-active');
    var $products = $tab.find('.product, .productCarousel-slide');
    $products.slice(this.defaultProductsCount).hide();
    this.$collapse.hide();
    if ($products.length > this.defaultProductsCount) {
      this.$loadMore.show();
    }
    $('html, body').animate({
      scrollTop: $tab.offset().top
    });
  };
  _proto.onTabToggled = function onTabToggled(event, tab) {
    var $tabContent = $($('a', tab).attr('href'));
    var isSlick = $tabContent.find(['.productGrid', '.productList', '.productCarousel:not(.blaze-slider)', '.productCarousel.blaze-slider .blaze-track'].join(', ')).is('[data-slick]');
    $('[data-slick]', $tabContent).slick('setPosition');
    var $blazeCarousel = $tabContent.find('.productCarousel.blaze-slider');
    var isBlazeCarousel = $blazeCarousel.length > 0;
    if (this.$viewportCheck.length > 0) {
      this.onCheckViewport();
    }
    var $products = $tabContent.find('.product, .productCarousel-slide');
    var visible = $products.filter(':visible').length;
    if (this.options.showMore) {
      if (!$tabContent.data('loadedMore') || $products.is(':hidden')) {
        this.$loadMore.show();
      } else {
        this.$loadMore.hide();
      }
      if (!isSlick && !isBlazeCarousel) {
        if (visible > this.defaultProductsCount) {
          this.$collapse.show();
        } else {
          this.$collapse.hide();
        }
      }
    }
  };
  _proto.loadViewportProducts = function loadViewportProducts(type, $container) {
    var _this4 = this;
    var template = 'papathemes/special-products-tabs/products';
    var limit = this.defaultProductsCount;
    var config = {
      products: {
        featured: {
          limit: 0
        },
        top: {
          limit: 0
        },
        new: {
          limit: 0
        }
      }
    };
    switch (type) {
      case 'featured':
        config.products.featured = {
          limit: limit
        };
        break;
      case 'top_sellers':
        config.products.top_sellers = {
          limit: limit
        };
        break;
      case 'new':
      default:
        config.products.new = {
          limit: limit
        };
        break;
    }
    var isSlick = $container.is('[data-slick]');
    var $blazeCarousel = this.$scope.find(".productCarousel.blaze-slider[data-product-type=\"" + type + "\"]");
    var isBlazeCarousel = $blazeCarousel.length > 0;
    this.$loading.show();
    this.$loadMore.attr('disabled', true);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage('/', {
      template: template,
      config: config
    }, function (err, resp) {
      _this4.$loading.hide();
      _this4.$loadMore.removeAttr('disabled');
      if (err || !resp) {
        return;
      }
      var $products = $(resp).find('.product, .productCarousel-slide');
      if (isSlick) $container.slick('unslick');
      $container.empty().append($products);
      if (isSlick) $container.slick();else if (isBlazeCarousel) {
        var blazeSlider = $blazeCarousel.data('blazeSliderInstance');
        if (blazeSlider) {
          blazeSlider.totalSlides = $container.children().length;
          blazeSlider.refresh();
        } else {
          $blazeCarousel.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($blazeCarousel.get(0), $blazeCarousel.data('blazeSlider')));
        }
      }
    });
  };
  return SpecialProductsTabs;
}();
function init(_ref) {
  var _ref$selector = _ref.selector,
    selector = _ref$selector === void 0 ? '[data-special-products-tabs]' : _ref$selector,
    context = _ref.context;
  $(selector).each(function (i, el) {
    var $el = $(el);
    if (!$el.data('specialProductsTabsInstance')) {
      $el.data('specialProductsTabsInstance', new SpecialProductsTabs($el, context));
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _papathemes_products_by_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/products-by-category */ "./assets/js/papathemes/products-by-category.js");
/* harmony import */ var _papathemes_special_products_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../papathemes/special-products-tabs */ "./assets/js/papathemes/special-products-tabs.js");
/* harmony import */ var _papathemes_product_loadmore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../papathemes/product-loadmore */ "./assets/js/papathemes/product-loadmore.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var _excluded = ["responsive"],
  _excluded2 = ["breakpoint"],
  _excluded3 = ["breakpoint"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * This file is added by Supermarket theme.
 */





var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.initProductsByCategorySection();
    this.initSpecialProductsTabsSection();
    this.initProductLoadMore();
    this.fixHomeBrandsCarousel();

    // papathemes-beautify
    $('#yotpo_testimonials_btn_copy').on('click', function (event) {
      event.preventDefault();
      $('#yotpo_testimonials_btn').trigger('click');
    });
  };
  _proto.initProductsByCategorySection = function initProductsByCategorySection() {
    if (this.context.haspbcst) {
      (0,_papathemes_products_by_category__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  };
  _proto.initSpecialProductsTabsSection = function initSpecialProductsTabsSection() {
    // Refresh products carousel when tab is open
    if (this.context.hasSpecialProductsTabs) {
      (0,_papathemes_special_products_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])({
        context: this.context
      });
    }
  };
  _proto.initProductLoadMore = function initProductLoadMore() {
    if (this.context.hasFeaturedProducts || this.context.hasNewProducts || this.context.hasTopProducts) {
      (0,_papathemes_product_loadmore__WEBPACK_IMPORTED_MODULE_4__["default"])({
        context: this.context
      });
    }
  };
  _proto.fixHomeBrandsCarousel = function fixHomeBrandsCarousel() {
    var $slick = $('[data-home-brands-slick]');
    if ($slick.length === 0) {
      return;
    }
    var _$slick$data = $slick.data('homeBrandsSlick'),
      responsive = _$slick$data.responsive,
      data = _objectWithoutPropertiesLoose(_$slick$data, _excluded);
    var breakpoints = responsive.map(function (r) {
      return Object.assign({}, data, {
        breakpoint: r.breakpoint
      }, r.settings);
    });
    var getBreakpoint = function getBreakpoint() {
      var width = $(window).innerWidth();
      return breakpoints.reduce(function (prev, current) {
        return current.breakpoint >= width ? current : prev;
      }, data);
    };
    var _getBreakpoint = getBreakpoint(),
      currentBreakpoint = _getBreakpoint.breakpoint,
      currentData = _objectWithoutPropertiesLoose(_getBreakpoint, _excluded2);
    $slick.slick(currentData);
    $(window).on('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      var _getBreakpoint2 = getBreakpoint(),
        newBreakpoint = _getBreakpoint2.breakpoint,
        newData = _objectWithoutPropertiesLoose(_getBreakpoint2, _excluded3);
      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        currentData = newData;
        $slick.slick('unslick').slick(currentData);
      }
    }, 500));
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDUjtBQUFBLElBRWpDRSxlQUFlO0VBQ2pCLFNBQUFBLGdCQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQ0MsU0FBUyxHQUFHTCxNQUFNLENBQUNHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDRSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUNHLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDQSxPQUFPLENBQUNDLGlCQUFpQixHQUFHQyxNQUFNLENBQUMsSUFBSSxDQUFDUixPQUFPLENBQUNPLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUM1RSxJQUFJLENBQUNELE9BQU8sQ0FBQ0csc0JBQXNCLEdBQUdELE1BQU0sQ0FBQyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1Msc0JBQXNCLENBQUMsSUFBSSxDQUFDO0lBQ3RGLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxpQkFBaUIsR0FBR0YsTUFBTSxDQUFDLElBQUksQ0FBQ1IsT0FBTyxDQUFDVSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDNUUsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDWixNQUFNLENBQUNHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDVSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3ZFLElBQUks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QUFBLEVBQVM7TUFDeEIsSUFBTUMsS0FBSyxHQUFHbEwsQ0FBQyxDQUFDNkcsTUFBTSxDQUFDLENBQUNzRSxVQUFVLENBQUMsQ0FBQztNQUNwQyxPQUFPUixXQUFXLENBQUNTLE1BQU0sQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLE9BQU87UUFBQSxPQUFNQSxPQUFPLENBQUNQLFVBQVUsSUFBSUcsS0FBSyxHQUFHSSxPQUFPLEdBQUdELElBQUk7TUFBQSxDQUFDLEVBQUVsTSxJQUFJLENBQUM7SUFDdEcsQ0FBQztJQUVELElBQUFvTSxjQUFBLEdBQXdETixhQUFhLENBQUMsQ0FBQztNQUFyRE8saUJBQWlCLEdBQUFELGNBQUEsQ0FBN0JSLFVBQVU7TUFBd0JVLFdBQVcsR0FBQWhCLDZCQUFBLENBQUFjLGNBQUEsRUFBQUcsVUFBQTtJQUVuRHBCLE1BQU0sQ0FBQ2hJLEtBQUssQ0FBQ21KLFdBQVcsQ0FBQztJQUV6QnpMLENBQUMsQ0FBQzZHLE1BQU0sQ0FBQyxDQUFDMUcsRUFBRSxDQUFDLFFBQVEsRUFBRXdMLHNEQUFBLENBQVMsWUFBTTtNQUNsQyxJQUFBQyxlQUFBLEdBQWtEWCxhQUFhLENBQUMsQ0FBQztRQUE3Q1ksYUFBYSxHQUFBRCxlQUFBLENBQXpCYixVQUFVO1FBQW9CZSxPQUFPLEdBQUFyQiw2QkFBQSxDQUFBbUIsZUFBQSxFQUFBRyxVQUFBO01BQzdDLElBQUlGLGFBQWEsS0FBS0wsaUJBQWlCLEVBQUU7UUFDckNBLGlCQUFpQixHQUFHSyxhQUFhO1FBQ2pDSixXQUFXLEdBQUdLLE9BQU87UUFDckJ4QixNQUFNLENBQUNoSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUNBLEtBQUssQ0FBQ21KLFdBQVcsQ0FBQztNQUM5QztJQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUNaLENBQUM7RUFBQSxPQUFBbEMsSUFBQTtBQUFBLEVBcEU2QkoscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9wcm9kdWN0LWxvYWRtb3JlLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5LmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NwZWNpYWwtcHJvZHVjdHMtdGFicy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IEJsYXplU2xpZGVyIGZyb20gJ2JsYXplLXNsaWRlcic7XG5cbmNsYXNzIFByb2R1Y3RMb2FkTW9yZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLiRsb2FkaW5nID0gJHNjb3BlLmZpbmQoJy5sb2FkaW5nJykuaGlkZSgpO1xuICAgICAgICB0aGlzLiRsb2FkTW9yZSA9ICRzY29wZS5maW5kKCcubG9hZE1vcmUnKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlID0gJHNjb3BlLmZpbmQoJy5jb2xsYXBzZScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIHRoaXMub3B0aW9ucy5wcm9kdWN0X25ld19jb3VudCA9IE51bWJlcih0aGlzLmNvbnRleHQucHJvZHVjdF9uZXdfY291bnQpIHx8IDA7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wcm9kdWN0X2ZlYXR1cmVkX2NvdW50ID0gTnVtYmVyKHRoaXMuY29udGV4dC5wcm9kdWN0X2ZlYXR1cmVkX2NvdW50KSB8fCAwO1xuICAgICAgICB0aGlzLm9wdGlvbnMucHJvZHVjdF90b3BfY291bnQgPSBOdW1iZXIodGhpcy5jb250ZXh0LnByb2R1Y3RfdG9wX2NvdW50KSB8fCAwO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXR5cGVdJykuZGF0YSgncHJvZHVjdFR5cGUnKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCA9IHRoaXMuZ2V0RGVmYXVsdFByb2R1Y3RzQ291bnQoKTtcblxuICAgICAgICB0aGlzLm9uTG9hZE1vcmUgPSB0aGlzLm9uTG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbGxhcHNlID0gdGhpcy5vbkNvbGxhcHNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJHNjb3BlLmZpbmQoJy5wcm9kdWN0LCAucHJvZHVjdENhcm91c2VsLXNsaWRlJyk7XG4gICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID49IHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9kdWN0c0NvdW50KCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbmV3JykgcmV0dXJuIHRoaXMub3B0aW9ucy5wcm9kdWN0X25ld19jb3VudDtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZlYXR1cmVkJykgcmV0dXJuIHRoaXMub3B0aW9ucy5wcm9kdWN0X2ZlYXR1cmVkX2NvdW50O1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAndG9wX3NlbGxlcnMnKSByZXR1cm4gdGhpcy5vcHRpb25zLnByb2R1Y3RfdG9wX2NvdW50O1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5Jykub25lKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIHRoaXMuJGxvYWRNb3JlLm9uKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLm9uKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRsb2FkTW9yZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkxvYWRNb3JlKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2Uub2ZmKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XG4gICAgfVxuXG4gICAgb25Mb2FkTW9yZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gdGhpcy4kc2NvcGUuZmluZChbXG4gICAgICAgICAgICAnLnByb2R1Y3RHcmlkJyxcbiAgICAgICAgICAgICcucHJvZHVjdExpc3QnLFxuICAgICAgICAgICAgJy5wcm9kdWN0Q2Fyb3VzZWw6bm90KC5ibGF6ZS1zbGlkZXIpJyxcbiAgICAgICAgICAgICcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlciAuYmxhemUtdHJhY2snLFxuICAgICAgICBdLmpvaW4oJywgJykpO1xuXG4gICAgICAgIGNvbnN0IGlzU2xpY2sgPSAkY29udGVudC5pcygnW2RhdGEtc2xpY2tdJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRzY29wZS5kYXRhKCdsb2FkZWRNb3JlJykpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRhdGEoJ2xvYWRlZE1vcmUnLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSAncGFwYXRoZW1lcy9saXN0LXByb2R1Y3QvcHJvZHVjdHMnO1xuICAgICAgICAgICAgY29uc3QgbGltaXQgPSAxMDA7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLnR5cGUgPT09ICdmZWF0dXJlZCcgPyBsaW1pdCA6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvcF9zZWxsZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy50eXBlID09PSAndG9wX3NlbGxlcnMnID8gbGltaXQgOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLnR5cGUgPT09ICduZXcnID8gbGltaXQgOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCAkYmxhemVTbGlkZXJBcnJvdyA9IHRoaXMuJHNjb3BlLmZpbmQoJy5ibGF6ZS1wcmV2LCAuYmxhemUtbmV4dCcpO1xuICAgICAgICAgICAgJGJsYXplU2xpZGVyQXJyb3cuaGlkZSgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh0aGlzLmNvbnRleHQudXJscy5zZWFyY2gsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZGluZy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkYmxhemVTbGlkZXJBcnJvdy5jc3MoJ2Rpc3BsYXknLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyIHx8ICFyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdFByb2R1Y3RJZHMgPSB0aGlzLiRzY29wZVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChpLCBlbCkgPT4gJChlbCkuZGF0YSgncHJvZHVjdElkJykpLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJChyZXNwKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChpLCBlbCkgPT4gZXhpc3RQcm9kdWN0SWRzLmluZGV4T2YoJChlbCkuZGF0YSgncHJvZHVjdElkJykpID09PSAtMSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkYmxhemVTbGlkZXIgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2Fyb3VzZWxCbGF6ZSA9ICRibGF6ZVNsaWRlci5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG5ldyBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNDYXJvdXNlbEJsYXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuYXBwZW5kKCRwcm9kdWN0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGljaygnc2xpY2tHb1RvJywgZXhpc3RQcm9kdWN0SWRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDYXJvdXNlbEJsYXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibGF6ZVNsaWRlciA9ICRibGF6ZVNsaWRlci5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhemVTbGlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZVNsaWRlci50b3RhbFNsaWRlcyA9ICRjb250ZW50LmNoaWxkcmVuKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsYXplU2xpZGVyLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJsYXplU2xpZGVyLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnLCBuZXcgQmxhemVTbGlkZXIoJGJsYXplU2xpZGVyLmdldCgwKSwgJGJsYXplU2xpZGVyLmRhdGEoJ2JsYXplU2xpZGVyJykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghJHByb2R1Y3RzLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID4gMCAmJiAhaXNTbGljayAmJiAhaXNDYXJvdXNlbEJsYXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0JykuZmlsdGVyKCc6aGlkZGVuJyk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0c1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KVxuICAgICAgICAgICAgICAgIC5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmICghJHByb2R1Y3RzLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sbGFwc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdHMgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdCcpO1xuXG4gICAgICAgICRwcm9kdWN0cy5zbGljZSh0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KS5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuXG4gICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID4gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLiRzY29wZS5vZmZzZXQoKS50b3AsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCh7XG4gICAgc2VsZWN0b3JzID0gW1xuICAgICAgICAnLmJlYXV0aWZ5X19zZWN0aW9uLS1uZXdQcm9kdWN0cycsXG4gICAgICAgICcuYmVhdXRpZnlfX3NlY3Rpb24tLWZlYXR1cmVkUHJvZHVjdHMnLFxuICAgICAgICAnLmJlYXV0aWZ5X19zZWN0aW9uLS10b3BQcm9kdWN0cycsXG4gICAgXSxcbiAgICBjb250ZXh0LFxufSkge1xuICAgICQoc2VsZWN0b3JzLmpvaW4oJywgJykpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICBpZiAoISRlbC5kYXRhKCdwcm9kdWN0TG9hZE1vcmVJbnN0YW5jZScpKSB7XG4gICAgICAgICAgICAkZWwuZGF0YSgncHJvZHVjdExvYWRNb3JlSW5zdGFuY2UnLCBuZXcgUHJvZHVjdExvYWRNb3JlKCRlbCwgY29udGV4dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL2ZvdW5kYXRpb24nO1xuXG5jbGFzcyBQcm9kdWN0c0J5Q2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgc29ydCA9ICcnLFxuICAgICAgICBsaW1pdCA9ICcnLFxuICAgICAgICAkcGFyZW50LFxuICAgIH0pIHtcbiAgICAgICAgdGhpcy5vbkxvYWRNb3JlID0gdGhpcy5vbkxvYWRNb3JlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db2xsYXBzZSA9IHRoaXMub25Db2xsYXBzZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnlJZCA9IGlkO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gJHBhcmVudDtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKCc8ZGl2IGNsYXNzPVwicGFwYXRoZW1lcy1wYmNzdC1sb2FkaW5nXCI+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMuJHNob3BCdG4gPSAkKCk7XG4gICAgICAgIHRoaXMuJGxvYWRNb3JlID0gJCgpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzZSA9ICQoKTtcbiAgICAgICAgdGhpcy4kbG9hZGVyID0gJCgpO1xuXG4gICAgICAgIHRoaXMuJHBhcmVudC5hcHBlbmQodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGxpbWl0UXVlcnkgPSB0aGlzLmxpbWl0ID8gYCZsaW1pdD0ke3RoaXMubGltaXR9YCA6ICcnO1xuICAgICAgICBjb25zdCBzb3J0UXVlcnkgPSB0aGlzLnNvcnQgPyBgJnNvcnQ9JHt0aGlzLnNvcnR9YCA6ICcnO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICdwYXBhdGhlbWVzL3BiY3N0L3NlY3Rpb24nO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKGAvY2F0ZWdvcmllcy5waHA/Y2F0ZWdvcnk9JHt0aGlzLmN1cnJlbnRDYXRlZ29yeUlkfSR7bGltaXRRdWVyeX0ke3NvcnRRdWVyeX1gLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIXJlc3AgfHwgcmVzcC5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHJlc3AgPSAkKHJlc3ApO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVwbGFjZVdpdGgoJHJlc3ApO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSAkcmVzcDtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYmNzdC1wcm9kdWN0cy1wbGFjZW1lbnRdJyk7XG4gICAgICAgICAgICB0aGlzLiRsb2FkZXIgPSB0aGlzLiRzY29wZS5maW5kKCcubG9hZGVyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdFRhYnMoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNsaWNrKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRXaWRnZXRSZWdpb24oKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RzKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeUlkIHx8IHRoaXMuaWQ7XG4gICAgICAgIGNvbnN0IGxpbWl0UXVlcnkgPSB0aGlzLmxpbWl0ID8gYCZsaW1pdD0ke3RoaXMubGltaXR9YCA6ICcnO1xuICAgICAgICBjb25zdCBzb3J0UXVlcnkgPSB0aGlzLnNvcnQgPyBgJnNvcnQ9JHt0aGlzLnNvcnR9YCA6ICcnO1xuICAgICAgICBjb25zdCBwYWdlUXVlcnkgPSB0aGlzLnBhZ2UgPyBgJnBhZ2U9JHt0aGlzLnBhZ2V9YCA6ICcnO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICdwYXBhdGhlbWVzL3BiY3N0L3Byb2R1Y3RzJztcblxuICAgICAgICB0aGlzLiRsb2FkZXIuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZShgL2NhdGVnb3JpZXMucGhwP2NhdGVnb3J5PSR7Y2F0ZWdvcnlJZH0ke2xpbWl0UXVlcnl9JHtzb3J0UXVlcnl9JHtwYWdlUXVlcnl9YCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRsb2FkZXIucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHJlc3AgPSAkKHJlc3ApO1xuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRQYWdlID0gdGhpcy4kY29udGVudC5maW5kKCdbZGF0YS1jdXJyZW50LXBhZ2VdJyk7XG5cbiAgICAgICAgICAgIGlmICgkY3VycmVudFBhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRjdXJyZW50UGFnZS5kYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6ICRyZXNwLmRhdGEoJ2N1cnJlbnRQYWdlJyksXG4gICAgICAgICAgICAgICAgICAgIGhhc05leHRQYWdlOiBCb29sZWFuKCRyZXNwLmRhdGEoJ2hhc05leHRQYWdlJykpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRjdXJyZW50UGFnZS5maW5kKCcucHJvZHVjdEdyaWQnKS5hcHBlbmQoJHJlc3AuZmluZCgnLnByb2R1Y3RHcmlkJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuaHRtbChyZXNwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kY29udGVudC5maW5kKCcucHJvZHVjdC5faGlkZU9uVGFibGV0V2hlbk5vQmFubmVyJykucmVtb3ZlQ2xhc3MoJ19oaWRlT25UYWJsZXRXaGVuTm9CYW5uZXInKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcblxuICAgICAgICAgICAgaWYgKCRyZXNwLmRhdGEoJ2hhc05leHRQYWdlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRyZXNwLmRhdGEoJ2N1cnJlbnRQYWdlJykgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgU2hvcCBDYXRlZ29yeSBidXR0b24gYW5kIGxpbmsgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgY2F0ZWdvcnlcbiAgICAgICAgICAgIHRoaXMuJHNob3BCdG4uZ2V0KCkubWFwKGVsID0+ICQoZWwpKS5mb3JFYWNoKCRlbCA9PiAkZWwudGV4dCgkZWwuZGF0YSgndGV4dCcpLnJlcGxhY2UoJ3tuYW1lfScsICRyZXNwLmRhdGEoJ2NhdGVnb3J5TmFtZScpKSkpO1xuICAgICAgICAgICAgdGhpcy4kc2hvcEJ0bi5hdHRyKCdocmVmJywgJHJlc3AuZGF0YSgnY2F0ZWdvcnlVcmwnKSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VGFicygpIHtcbiAgICAgICAgZm91bmRhdGlvbih0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgJCgnW2RhdGEtdGFiXScsIHRoaXMuJHNjb3BlKS5vbigndG9nZ2xlZCcsIChldmVudCwgJHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkdGFiLmZpbmQoJ2EnKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnQgPSAkYS5kYXRhKCdwYmNzdFNvcnQnKSB8fCB0aGlzLnNvcnQ7XG4gICAgICAgICAgICBsZXQgc3ViY2F0ZWdvcnlJZCA9ICRhLmRhdGEoJ3BiY3N0U3ViY2F0ZWdvcnlJZCcpO1xuXG4gICAgICAgICAgICAvLyBDbGljayB0aGUgc2FtZSBzdWJjYXRlZ29yeSB0YWIgd2lsbCBkZWFjdGl2YXRlIGl0IGFuZCBkaXNwbGF5IHRoZSBwYXJlbnQgY2F0ZWdvcnkgcHJvZHVjdHNcbiAgICAgICAgICAgIGlmIChzdWJjYXRlZ29yeUlkICYmIHN1YmNhdGVnb3J5SWQgPT09IHRoaXMuY3VycmVudENhdGVnb3J5SWQpIHtcbiAgICAgICAgICAgICAgICAkdGFiLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGFiLmZpbmQoJy50YWItdGl0bGUnKS5wcm9wKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHN1YmNhdGVnb3J5SWQgPSB0aGlzLmlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpZCA9IHN1YmNhdGVnb3J5SWQgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnlJZDtcblxuICAgICAgICAgICAgLy8gU3RvcCBpZiBubyB0YWIgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHNvcnQgPT09IHRoaXMuc29ydCAmJiBpZCA9PT0gdGhpcy5jdXJyZW50Q2F0ZWdvcnlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5SWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJycpO1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9kdWN0cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U2xpY2soKSB7XG4gICAgICAgIC8vIGluaXQgcHJvZHVjdHMgY2Fyb3VzZWxcbiAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgdGhpcy4kc2NvcGUpXG4gICAgICAgICAgICAub24oJ2luaXQnLCBlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGluaXQgbmVzdGVkIGNhcm91c2VsXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2stbmVzdGVkXScsIGUudGFyZ2V0KS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVsKS5zbGljaygkKGVsKS5kYXRhKCdzbGlja05lc3RlZCcpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwMCkpXG4gICAgICAgICAgICAub24oJ2JyZWFrcG9pbnQnLCBlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrLW5lc3RlZF0nLCBlLnRhcmdldCkuc2xpY2soJ3NldFBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9LCAyMDApKVxuICAgICAgICAgICAgLnNsaWNrKCk7XG4gICAgfVxuXG4gICAgaW5pdFdpZGdldFJlZ2lvbigpIHtcbiAgICAgICAgY29uc3QgJHdpZGdldFJlZ2lvbiA9IHRoaXMuJHBhcmVudC5maW5kKGBbZGF0YS1wYmNzdC13aWRnZXQtcmVnaW9uPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgICAgICBjb25zdCAkd2lkZ2V0UmVnaW9uQmVsb3cgPSB0aGlzLiRwYXJlbnQuZmluZChgW2RhdGEtcGJjc3Qtd2lkZ2V0LXJlZ2lvbj1cImJlbG93XyR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICAgICAgY29uc3QgJHBsYWNlbWVudCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXBiY3N0LXdpZGdldC1yZWdpb24tcGxhY2VtZW50PVwiXCJdJyk7XG4gICAgICAgIGNvbnN0ICRwbGFjZW1lbnRCZWxvdyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXBiY3N0LXdpZGdldC1yZWdpb24tcGxhY2VtZW50PVwiYmVsb3dcIl0nKTtcbiAgICAgICAgJHBsYWNlbWVudC5hcHBlbmQoJHdpZGdldFJlZ2lvbik7XG4gICAgICAgICRwbGFjZW1lbnRCZWxvdy5hcHBlbmQoJHdpZGdldFJlZ2lvbkJlbG93KTtcbiAgICB9XG5cbiAgICBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy4kc2hvcEJ0biA9IHRoaXMuJHNjb3BlLmZpbmQoJy5fc2hvcEJ0bicpO1xuICAgICAgICB0aGlzLiRsb2FkTW9yZSA9IHRoaXMuJHNjb3BlLmZpbmQoJy5sb2FkTW9yZScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2UgPSB0aGlzLiRzY29wZS5maW5kKCcuY29sbGFwc2UnKS5oaWRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbnRlbnQuZmluZCgnW2RhdGEtY3VycmVudC1wYWdlXScpLmRhdGEoJ2hhc05leHRQYWdlJykpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxvYWRNb3JlLm9uKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLm9uKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XG4gICAgfVxuXG4gICAgb25Mb2FkTW9yZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFnZSA9IHRoaXMuJGNvbnRlbnQuZmluZCgnW2RhdGEtY3VycmVudC1wYWdlXScpO1xuICAgICAgICBjb25zdCAkaGlkZSA9IHRoaXMuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3QuaGlkZScpO1xuXG4gICAgICAgIGlmICgkaGlkZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkaGlkZS5zaG93KCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKCEkY3VycmVudFBhZ2UuZGF0YSgnaGFzTmV4dFBhZ2UnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhZ2UuZGF0YSgnaGFzTmV4dFBhZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9kdWN0cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2xsYXBzZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpbWl0KSB7XG4gICAgICAgICAgICBjb25zdCAkaGlkZSA9IHRoaXMuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3QnKS5zbGljZSh0aGlzLmxpbWl0KS5oaWRlKCkuYWRkQ2xhc3MoJ2hpZGUnKTtcblxuICAgICAgICAgICAgaWYgKCRoaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJGNvbnRlbnQub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLmhpZGUoKTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2R1Y3RzQnlDYXRlZ29yaWVzIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMubGF6eSA9IHRoaXMuJHNjb3BlLmlzKCdbZGF0YS1sYXp5XScpO1xuICAgICAgICB0aGlzLmxhenlPZmZzZXQgPSB3aW5kb3cuc3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnPy5wYmNMYXp5T2Zmc2V0IHx8IDMwMDtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uQ2hlY2tWaWV3cG9ydCA9IHRocm90dGxlKHRoaXMub25DaGVja1ZpZXdwb3J0LmJpbmQodGhpcyksIDEwMCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNvcnQgPSB0aGlzLiRzY29wZS5kYXRhKCdzb3J0Jyk7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy4kc2NvcGUuZGF0YSgnbGltaXQnKTtcblxuICAgICAgICBTdHJpbmcodGhpcy4kc2NvcGUuZGF0YSgncGJjc3RHcm91cCcpKS5zcGxpdCgnLCcpLm1hcCgoaWRTdHIsIGluZGV4KSA9PiBuZXcgUHJvZHVjdHNCeUNhdGVnb3J5KHtcbiAgICAgICAgICAgIGlkOiBpZFN0ci50cmltKCksXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICRwYXJlbnQ6IHRoaXMuJHNjb3BlLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keScpLm9uZSgnYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUgc2Nyb2xsJywgdGhpcy5vbkNoZWNrVmlld3BvcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkIHJlc2l6ZSBzY3JvbGwnLCB0aGlzLm9uQ2hlY2tWaWV3cG9ydCk7XG4gICAgfVxuXG4gICAgb25DaGVja1ZpZXdwb3J0KCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQgcmVzaXplIHNjcm9sbCcsIHRoaXMub25DaGVja1ZpZXdwb3J0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy4kc2NvcGUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubGF6eU9mZnNldDtcbiAgICAgICAgY29uc3QgZWxUb3AgPSB0aGlzLiRzY29wZS5vZmZzZXQoKS50b3A7XG4gICAgICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyB0aGlzLiRzY29wZS5vdXRlckhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aW5Ub3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IHdpbkJvdHRvbSA9IHdpblRvcCArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xuXG4gICAgICAgIGlmIChlbFRvcCAtIG9mZnNldCA8IHdpbkJvdHRvbSAmJiBlbEJvdHRvbSArIG9mZnNldCA+IHdpblRvcCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoc2VsZWN0b3IgPSAnW2RhdGEtcGJjc3QtZ3JvdXBdJykge1xuICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiBuZXcgUHJvZHVjdHNCeUNhdGVnb3JpZXMoJChlbCkpKTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmxhemVTbGlkZXIgZnJvbSAnYmxhemUtc2xpZGVyJztcblxuY2xhc3MgU3BlY2lhbFByb2R1Y3RzVGFicyB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLiR2aWV3cG9ydENoZWNrID0gJHNjb3BlLmZpbmQoJ1tkYXRhLXZpZXdwb3J0LWNoZWNrXScpO1xuICAgICAgICB0aGlzLiRsb2FkaW5nID0gJHNjb3BlLmZpbmQoJy5sb2FkaW5nJykuaGlkZSgpO1xuICAgICAgICB0aGlzLiRsb2FkTW9yZSA9ICRzY29wZS5maW5kKCcubG9hZE1vcmUnKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlID0gJHNjb3BlLmZpbmQoJy5jb2xsYXBzZScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy4kc2NvcGUuZGF0YSgnc3BlY2lhbFByb2R1Y3RzVGFicycpIHx8IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnMubGF6eUNvdW50ID0gTnVtYmVyKHRoaXMub3B0aW9ucy5sYXp5Q291bnQpIHx8IDA7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbml0Q291bnQgPSBOdW1iZXIodGhpcy5vcHRpb25zLmluaXRDb3VudCkgfHwgMDtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCA9IHRoaXMub3B0aW9ucy5sYXp5Q291bnQgKyB0aGlzLm9wdGlvbnMuaW5pdENvdW50O1xuXG4gICAgICAgIHRoaXMub25DaGVja1ZpZXdwb3J0ID0gdGhyb3R0bGUodGhpcy5vbkNoZWNrVmlld3BvcnQuYmluZCh0aGlzKSwgMTAwKTtcbiAgICAgICAgdGhpcy5vbkxvYWRNb3JlID0gdGhpcy5vbkxvYWRNb3JlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db2xsYXBzZSA9IHRoaXMub25Db2xsYXBzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVGFiVG9nZ2xlZCA9IHRoaXMub25UYWJUb2dnbGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keScpLm9uZSgnYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLiR2aWV3cG9ydENoZWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUgc2Nyb2xsJywgdGhpcy5vbkNoZWNrVmlld3BvcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUub24oJ2NsaWNrJywgdGhpcy5vbkxvYWRNb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLm9uKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XG5cbiAgICAgICAgJCgnW2RhdGEtdGFiXScsIHRoaXMuJHNjb3BlKS5vbigndG9nZ2xlZCcsIHRoaXMub25UYWJUb2dnbGVkKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQgcmVzaXplIHNjcm9sbCcsIHRoaXMub25DaGVja1ZpZXdwb3J0KTtcbiAgICAgICAgdGhpcy4kbG9hZE1vcmUub2ZmKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLm9mZignY2xpY2snLCB0aGlzLm9uQ29sbGFwc2UpO1xuICAgICAgICAkKCdbZGF0YS10YWJdJywgdGhpcy4kc2NvcGUpLm9mZigndG9nZ2xlZCcsIHRoaXMub25UYWJUb2dnbGVkKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrVmlld3BvcnQoKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDI1MDtcblxuICAgICAgICB0aGlzLiR2aWV3cG9ydENoZWNrLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcblxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gJGVsLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyAkZWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpblRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbkJvdHRvbSA9IHdpblRvcCArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xuXG4gICAgICAgICAgICBpZiAoZWxUb3AgLSBvZmZzZXQgPCB3aW5Cb3R0b20gJiYgZWxCb3R0b20gKyBvZmZzZXQgPiB3aW5Ub3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaWV3cG9ydFByb2R1Y3RzKFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgndmlld3BvcnRDaGVjaycpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuY2xvc2VzdCgnLnRhYi1jb250ZW50JykuZmluZChbXG4gICAgICAgICAgICAgICAgICAgICAgICAnLnByb2R1Y3RHcmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcucHJvZHVjdExpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy5wcm9kdWN0Q2Fyb3VzZWw6bm90KC5ibGF6ZS1zbGlkZXIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlciAuYmxhemUtdHJhY2snLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJywgJykpLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiR2aWV3cG9ydENoZWNrID0gdGhpcy4kdmlld3BvcnRDaGVjay5ub3QoJGVsKTtcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTG9hZE1vcmUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFiID0gdGhpcy4kc2NvcGUuZmluZCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICR0YWIuZmluZChbXG4gICAgICAgICAgICAnLnByb2R1Y3RHcmlkJyxcbiAgICAgICAgICAgICcucHJvZHVjdExpc3QnLFxuICAgICAgICAgICAgJy5wcm9kdWN0Q2Fyb3VzZWw6bm90KC5ibGF6ZS1zbGlkZXIpJyxcbiAgICAgICAgICAgICcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlciAuYmxhemUtdHJhY2snLFxuICAgICAgICBdLmpvaW4oJywgJykpO1xuICAgICAgICBjb25zdCBpc1NsaWNrID0gJGNvbnRlbnQuaXMoJ1tkYXRhLXNsaWNrXScpO1xuICAgICAgICBjb25zdCAkYmxhemVDYXJvdXNlbCA9ICR0YWIuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC5ibGF6ZS1zbGlkZXInKTtcbiAgICAgICAgY29uc3QgaXNCbGF6ZUNhcm91c2VsID0gJGJsYXplQ2Fyb3VzZWwubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAoISR0YWIuZGF0YSgnbG9hZGVkTW9yZScpKSB7XG4gICAgICAgICAgICAkdGFiLmRhdGEoJ2xvYWRlZE1vcmUnLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSAncGFwYXRoZW1lcy9zcGVjaWFsLXByb2R1Y3RzLXRhYnMvcHJvZHVjdHMnO1xuICAgICAgICAgICAgY29uc3QgbGltaXQgPSAxMDA7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICR0YWIuZGF0YSgncHJvZHVjdFR5cGUnKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdmZWF0dXJlZCc6XG4gICAgICAgICAgICAgICAgY29uZmlnLnByb2R1Y3RzLmZlYXR1cmVkID0geyBsaW1pdCB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICBjb25maWcucHJvZHVjdHMudG9wX3NlbGxlcnMgPSB7IGxpbWl0IH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25maWcucHJvZHVjdHMubmV3ID0geyBsaW1pdCB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHRoaXMuY29udGV4dC51cmxzLnNlYXJjaCwgeyB0ZW1wbGF0ZSwgY29uZmlnIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RQcm9kdWN0SWRzID0gJHRhYlxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChpLCBlbCkgPT4gJChlbCkuZGF0YSgncHJvZHVjdElkJykpLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJChyZXNwKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChpLCBlbCkgPT4gZXhpc3RQcm9kdWN0SWRzLmluZGV4T2YoJChlbCkuZGF0YSgncHJvZHVjdElkJykpID09PSAtMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgbmV3IHByb2R1Y3RzIGFuZCByZWluaXQgY2Fyb3VzZWxcbiAgICAgICAgICAgICAgICBpZiAoJHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzQmxhemVDYXJvdXNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LmFwcGVuZCgkcHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWNrKCdzbGlja0dvVG8nLCBleGlzdFByb2R1Y3RJZHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JsYXplQ2Fyb3VzZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYXplU2xpZGVyID0gJGJsYXplQ2Fyb3VzZWwuZGF0YSgnYmxhemVTbGlkZXJJbnN0YW5jZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsYXplU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxhemVTbGlkZXIudG90YWxTbGlkZXMgPSAkY29udGVudC5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZVNsaWRlci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRibGF6ZUNhcm91c2VsLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnLCBuZXcgQmxhemVTbGlkZXIoJGJsYXplQ2Fyb3VzZWwuZ2V0KDApLCAkYmxhemVDYXJvdXNlbC5kYXRhKCdibGF6ZVNsaWRlcicpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICghJHByb2R1Y3RzLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID4gMCAmJiAhaXNTbGljayAmJiAhaXNCbGF6ZUNhcm91c2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTbGljayAmJiAhaXNCbGF6ZUNhcm91c2VsKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdHMgPSAkdGFiLmZpbmQoJy5wcm9kdWN0LCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykuZmlsdGVyKCc6aGlkZGVuJyk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0c1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KVxuICAgICAgICAgICAgICAgIC5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmICghJHByb2R1Y3RzLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sbGFwc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFiID0gdGhpcy4kc2NvcGUuZmluZCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdHMgPSAkdGFiLmZpbmQoJy5wcm9kdWN0LCAucHJvZHVjdENhcm91c2VsLXNsaWRlJyk7XG5cbiAgICAgICAgJHByb2R1Y3RzLnNsaWNlKHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRjb2xsYXBzZS5oaWRlKCk7XG5cbiAgICAgICAgaWYgKCRwcm9kdWN0cy5sZW5ndGggPiB0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICR0YWIub2Zmc2V0KCkudG9wLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhYlRvZ2dsZWQoZXZlbnQsIHRhYikge1xuICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoJCgnYScsIHRhYikuYXR0cignaHJlZicpKTtcbiAgICAgICAgY29uc3QgaXNTbGljayA9ICR0YWJDb250ZW50LmZpbmQoW1xuICAgICAgICAgICAgJy5wcm9kdWN0R3JpZCcsXG4gICAgICAgICAgICAnLnByb2R1Y3RMaXN0JyxcbiAgICAgICAgICAgICcucHJvZHVjdENhcm91c2VsOm5vdCguYmxhemUtc2xpZGVyKScsXG4gICAgICAgICAgICAnLnByb2R1Y3RDYXJvdXNlbC5ibGF6ZS1zbGlkZXIgLmJsYXplLXRyYWNrJyxcbiAgICAgICAgXS5qb2luKCcsICcpKS5pcygnW2RhdGEtc2xpY2tdJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHRhYkNvbnRlbnQpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xuXG4gICAgICAgIGNvbnN0ICRibGF6ZUNhcm91c2VsID0gJHRhYkNvbnRlbnQuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC5ibGF6ZS1zbGlkZXInKTtcbiAgICAgICAgY29uc3QgaXNCbGF6ZUNhcm91c2VsID0gJGJsYXplQ2Fyb3VzZWwubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAodGhpcy4kdmlld3BvcnRDaGVjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2tWaWV3cG9ydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJHRhYkNvbnRlbnQuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9ICRwcm9kdWN0cy5maWx0ZXIoJzp2aXNpYmxlJykubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGlmICghJHRhYkNvbnRlbnQuZGF0YSgnbG9hZGVkTW9yZScpIHx8ICRwcm9kdWN0cy5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNTbGljayAmJiAhaXNCbGF6ZUNhcm91c2VsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpc2libGUgPiB0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFZpZXdwb3J0UHJvZHVjdHModHlwZSwgJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICdwYXBhdGhlbWVzL3NwZWNpYWwtcHJvZHVjdHMtdGFicy9wcm9kdWN0cyc7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudDtcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlZDoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5ldzoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmVhdHVyZWQnOlxuICAgICAgICAgICAgY29uZmlnLnByb2R1Y3RzLmZlYXR1cmVkID0geyBsaW1pdCB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvcF9zZWxsZXJzJzpcbiAgICAgICAgICAgIGNvbmZpZy5wcm9kdWN0cy50b3Bfc2VsbGVycyA9IHsgbGltaXQgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uZmlnLnByb2R1Y3RzLm5ldyA9IHsgbGltaXQgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTbGljayA9ICRjb250YWluZXIuaXMoJ1tkYXRhLXNsaWNrXScpO1xuICAgICAgICBjb25zdCAkYmxhemVDYXJvdXNlbCA9IHRoaXMuJHNjb3BlLmZpbmQoYC5wcm9kdWN0Q2Fyb3VzZWwuYmxhemUtc2xpZGVyW2RhdGEtcHJvZHVjdC10eXBlPVwiJHt0eXBlfVwiXWApO1xuICAgICAgICBjb25zdCBpc0JsYXplQ2Fyb3VzZWwgPSAkYmxhemVDYXJvdXNlbC5sZW5ndGggPiAwO1xuXG4gICAgICAgIHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuICAgICAgICB0aGlzLiRsb2FkTW9yZS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCcvJywgeyB0ZW1wbGF0ZSwgY29uZmlnIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblxuICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJChyZXNwKS5maW5kKCcucHJvZHVjdCwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xuICAgICAgICAgICAgaWYgKGlzU2xpY2spICRjb250YWluZXIuc2xpY2soJ3Vuc2xpY2snKTtcblxuICAgICAgICAgICAgJGNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZCgkcHJvZHVjdHMpO1xuXG4gICAgICAgICAgICBpZiAoaXNTbGljaykgJGNvbnRhaW5lci5zbGljaygpO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNCbGF6ZUNhcm91c2VsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxhemVTbGlkZXIgPSAkYmxhemVDYXJvdXNlbC5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGJsYXplU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYXplU2xpZGVyLnRvdGFsU2xpZGVzID0gJGNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYmxhemVTbGlkZXIucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRibGF6ZUNhcm91c2VsLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnLCBuZXcgQmxhemVTbGlkZXIoJGJsYXplQ2Fyb3VzZWwuZ2V0KDApLCAkYmxhemVDYXJvdXNlbC5kYXRhKCdibGF6ZVNsaWRlcicpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoeyBzZWxlY3RvciA9ICdbZGF0YS1zcGVjaWFsLXByb2R1Y3RzLXRhYnNdJywgY29udGV4dCB9KSB7XG4gICAgJChzZWxlY3RvcikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICghJGVsLmRhdGEoJ3NwZWNpYWxQcm9kdWN0c1RhYnNJbnN0YW5jZScpKSB7XG4gICAgICAgICAgICAkZWwuZGF0YSgnc3BlY2lhbFByb2R1Y3RzVGFic0luc3RhbmNlJywgbmV3IFNwZWNpYWxQcm9kdWN0c1RhYnMoJGVsLCBjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogVGhpcyBmaWxlIGlzIGFkZGVkIGJ5IFN1cGVybWFya2V0IHRoZW1lLlxuICovXG5cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGluaXRQcm9kdWN0c0J5Q2F0ZWdvcmllcyBmcm9tICcuLi9wYXBhdGhlbWVzL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5JztcbmltcG9ydCBpbml0U3BlY2lhbFByb2R1Y3RzVGFicyBmcm9tICcuLi9wYXBhdGhlbWVzL3NwZWNpYWwtcHJvZHVjdHMtdGFicyc7XG5pbXBvcnQgaW5pdFByb2R1Y3RMb2FkTW9yZSBmcm9tICcuLi9wYXBhdGhlbWVzL3Byb2R1Y3QtbG9hZG1vcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuaW5pdFByb2R1Y3RzQnlDYXRlZ29yeVNlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5pbml0U3BlY2lhbFByb2R1Y3RzVGFic1NlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5pbml0UHJvZHVjdExvYWRNb3JlKCk7XG4gICAgICAgIHRoaXMuZml4SG9tZUJyYW5kc0Nhcm91c2VsKCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAkKCcjeW90cG9fdGVzdGltb25pYWxzX2J0bl9jb3B5Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCgnI3lvdHBvX3Rlc3RpbW9uaWFsc19idG4nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UHJvZHVjdHNCeUNhdGVnb3J5U2VjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNwYmNzdCkge1xuICAgICAgICAgICAgaW5pdFByb2R1Y3RzQnlDYXRlZ29yaWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U3BlY2lhbFByb2R1Y3RzVGFic1NlY3Rpb24oKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggcHJvZHVjdHMgY2Fyb3VzZWwgd2hlbiB0YWIgaXMgb3BlblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0Lmhhc1NwZWNpYWxQcm9kdWN0c1RhYnMpIHtcbiAgICAgICAgICAgIGluaXRTcGVjaWFsUHJvZHVjdHNUYWJzKHsgY29udGV4dDogdGhpcy5jb250ZXh0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFByb2R1Y3RMb2FkTW9yZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNGZWF0dXJlZFByb2R1Y3RzIHx8XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuaGFzTmV3UHJvZHVjdHMgfHxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5oYXNUb3BQcm9kdWN0cykge1xuICAgICAgICAgICAgaW5pdFByb2R1Y3RMb2FkTW9yZSh7XG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXhIb21lQnJhbmRzQ2Fyb3VzZWwoKSB7XG4gICAgICAgIGNvbnN0ICRzbGljayA9ICQoJ1tkYXRhLWhvbWUtYnJhbmRzLXNsaWNrXScpO1xuXG4gICAgICAgIGlmICgkc2xpY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHJlc3BvbnNpdmUsIC4uLmRhdGEgfSA9ICRzbGljay5kYXRhKCdob21lQnJhbmRzU2xpY2snKTtcbiAgICAgICAgY29uc3QgYnJlYWtwb2ludHMgPSByZXNwb25zaXZlLm1hcChyID0+ICh7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgYnJlYWtwb2ludDogci5icmVha3BvaW50LFxuICAgICAgICAgICAgLi4uci5zZXR0aW5ncyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGdldEJyZWFrcG9pbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAoY3VycmVudC5icmVha3BvaW50ID49IHdpZHRoID8gY3VycmVudCA6IHByZXYpLCBkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgeyBicmVha3BvaW50OiBjdXJyZW50QnJlYWtwb2ludCwgLi4uY3VycmVudERhdGEgfSA9IGdldEJyZWFrcG9pbnQoKTtcblxuICAgICAgICAkc2xpY2suc2xpY2soY3VycmVudERhdGEpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBicmVha3BvaW50OiBuZXdCcmVha3BvaW50LCAuLi5uZXdEYXRhIH0gPSBnZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAobmV3QnJlYWtwb2ludCAhPT0gY3VycmVudEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IG5ld0JyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgICAgICAgICRzbGljay5zbGljaygndW5zbGljaycpLnNsaWNrKGN1cnJlbnREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwiQmxhemVTbGlkZXIiLCJQcm9kdWN0TG9hZE1vcmUiLCIkc2NvcGUiLCJjb250ZXh0IiwiJGxvYWRpbmciLCJmaW5kIiwiaGlkZSIsIiRsb2FkTW9yZSIsIiRjb2xsYXBzZSIsIm9wdGlvbnMiLCJwcm9kdWN0X25ld19jb3VudCIsIk51bWJlciIsInByb2R1Y3RfZmVhdHVyZWRfY291bnQiLCJwcm9kdWN0X3RvcF9jb3VudCIsInR5cGUiLCJkYXRhIiwiZGVmYXVsdFByb2R1Y3RzQ291bnQiLCJnZXREZWZhdWx0UHJvZHVjdHNDb3VudCIsIm9uTG9hZE1vcmUiLCJiaW5kIiwib25Db2xsYXBzZSIsIiRwcm9kdWN0cyIsImxlbmd0aCIsInNob3ciLCJiaW5kRXZlbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiX3RoaXMiLCIkIiwib25lIiwidW5iaW5kRXZlbnRzIiwib24iLCJvZmYiLCJldmVudCIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0IiwiJGNvbnRlbnQiLCJqb2luIiwiaXNTbGljayIsImlzIiwidGVtcGxhdGUiLCJsaW1pdCIsImNvbmZpZyIsInByb2R1Y3RzIiwiZmVhdHVyZWQiLCJ0b3Bfc2VsbGVycyIsIm5ldyIsImF0dHIiLCIkYmxhemVTbGlkZXJBcnJvdyIsImFwaSIsImdldFBhZ2UiLCJ1cmxzIiwic2VhcmNoIiwiZXJyIiwicmVzcCIsInJlbW92ZUF0dHIiLCJjc3MiLCJleGlzdFByb2R1Y3RJZHMiLCJtYXAiLCJpIiwiZWwiLCJnZXQiLCJmaWx0ZXIiLCJpbmRleE9mIiwiJGJsYXplU2xpZGVyIiwiaXNDYXJvdXNlbEJsYXplIiwic2xpY2siLCJzbGljZSIsImFwcGVuZCIsImJsYXplU2xpZGVyIiwidG90YWxTbGlkZXMiLCJjaGlsZHJlbiIsInJlZnJlc2giLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaW5pdCIsIl9yZWYiLCJfcmVmJHNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImVhY2giLCIkZWwiLCJmb3VuZGF0aW9uIiwiUHJvZHVjdHNCeUNhdGVnb3J5IiwiaWQiLCJfcmVmJGluZGV4IiwiaW5kZXgiLCJfcmVmJHNvcnQiLCJzb3J0IiwiX3JlZiRsaW1pdCIsIiRwYXJlbnQiLCJjdXJyZW50Q2F0ZWdvcnlJZCIsInBhZ2UiLCIkc2hvcEJ0biIsIiRsb2FkZXIiLCJsaW1pdFF1ZXJ5Iiwic29ydFF1ZXJ5IiwiZXJyb3IiLCJyZW1vdmUiLCIkcmVzcCIsInJlcGxhY2VXaXRoIiwiaW5pdFRhYnMiLCJpbml0U2xpY2siLCJpbml0V2lkZ2V0UmVnaW9uIiwiaW5pdEJ1dHRvbnMiLCJsb2FkUHJvZHVjdHMiLCJjYWxsYmFjayIsImNhdGVnb3J5SWQiLCJwYWdlUXVlcnkiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGN1cnJlbnRQYWdlIiwiY3VycmVudFBhZ2UiLCJoYXNOZXh0UGFnZSIsIkJvb2xlYW4iLCJodG1sIiwiZm9yRWFjaCIsInRleHQiLCJyZXBsYWNlIiwiX3RoaXMzIiwiJHRhYiIsIiRhIiwic3ViY2F0ZWdvcnlJZCIsInByb3AiLCJlIiwic2V0VGltZW91dCIsInRhcmdldCIsIiR3aWRnZXRSZWdpb24iLCIkd2lkZ2V0UmVnaW9uQmVsb3ciLCIkcGxhY2VtZW50IiwiJHBsYWNlbWVudEJlbG93IiwiJGhpZGUiLCJQcm9kdWN0c0J5Q2F0ZWdvcmllcyIsIl93aW5kb3ckc3VwZXJtYXJrZXRUaCIsImxhenkiLCJsYXp5T2Zmc2V0Iiwid2luZG93Iiwic3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnIiwicGJjTGF6eU9mZnNldCIsImxvYWRlZCIsIm9uQ2hlY2tWaWV3cG9ydCIsIl90aHJvdHRsZSIsImxvYWQiLCJfcHJvdG8yIiwiX3RoaXM0IiwiU3RyaW5nIiwic3BsaXQiLCJpZFN0ciIsInRyaW0iLCJfdGhpczUiLCJlbFRvcCIsImVsQm90dG9tIiwib3V0ZXJIZWlnaHQiLCJ3aW5Ub3AiLCJ3aW5Cb3R0b20iLCJpbm5lckhlaWdodCIsInNlbGVjdG9yIiwiU3BlY2lhbFByb2R1Y3RzVGFicyIsIiR2aWV3cG9ydENoZWNrIiwibGF6eUNvdW50IiwiaW5pdENvdW50Iiwib25UYWJUb2dnbGVkIiwic2hvd01vcmUiLCJsb2FkVmlld3BvcnRQcm9kdWN0cyIsImNsb3Nlc3QiLCJub3QiLCIkYmxhemVDYXJvdXNlbCIsImlzQmxhemVDYXJvdXNlbCIsInRhYiIsIiR0YWJDb250ZW50IiwidmlzaWJsZSIsIiRjb250YWluZXIiLCJlbXB0eSIsIl9yZWYkc2VsZWN0b3IiLCJQYWdlTWFuYWdlciIsImluaXRQcm9kdWN0c0J5Q2F0ZWdvcmllcyIsImluaXRTcGVjaWFsUHJvZHVjdHNUYWJzIiwiaW5pdFByb2R1Y3RMb2FkTW9yZSIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwib25SZWFkeSIsImluaXRQcm9kdWN0c0J5Q2F0ZWdvcnlTZWN0aW9uIiwiaW5pdFNwZWNpYWxQcm9kdWN0c1RhYnNTZWN0aW9uIiwiZml4SG9tZUJyYW5kc0Nhcm91c2VsIiwidHJpZ2dlciIsImhhc3BiY3N0IiwiaGFzU3BlY2lhbFByb2R1Y3RzVGFicyIsImhhc0ZlYXR1cmVkUHJvZHVjdHMiLCJoYXNOZXdQcm9kdWN0cyIsImhhc1RvcFByb2R1Y3RzIiwiJHNsaWNrIiwiXyRzbGljayRkYXRhIiwicmVzcG9uc2l2ZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiX2V4Y2x1ZGVkIiwiYnJlYWtwb2ludHMiLCJyIiwiT2JqZWN0IiwiYXNzaWduIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZ2V0QnJlYWtwb2ludCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiX2dldEJyZWFrcG9pbnQiLCJjdXJyZW50QnJlYWtwb2ludCIsImN1cnJlbnREYXRhIiwiX2V4Y2x1ZGVkMiIsIl9kZWJvdW5jZSIsIl9nZXRCcmVha3BvaW50MiIsIm5ld0JyZWFrcG9pbnQiLCJuZXdEYXRhIiwiX2V4Y2x1ZGVkMyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
