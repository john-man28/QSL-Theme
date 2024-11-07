"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/papathemes/search-in-category.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/search-in-category.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInCategory)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var SearchInCategory = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * Should be constructed after FacetedSearch object constructed
   * so that FacetedSearch `statechange` event callback can be executed.
   *
   * `options` includes:
   * - (object) `context`: from PageManager.context.
   * - (object) `facetedSearch`
   * - (function) `searchCallback`: callback to re-render search results.
   *
   * @param {object} options
   */
  function SearchInCategory(options) {
    // console.log('search-in-category constructor');
    this.doSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.doSearch.bind(this), 500);
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.options = options;
    this.$body = $('body');
    this.$input = $('[data-search-in-category]');
    this.$form = this.$input.closest('form');
    this.$clear = this.$form.find('[data-clear]').hide();
    this.originalPathname = window.location.pathname;
    if (options && options.facetedSearch) {
      this.options.facetedSearch.updateViewCallback = this.updateViewFacetedSearch.bind(this);
    }
    this.bindEvents();
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), true);
    if (url.query.q) {
      this.$input.val(url.query.q);
      this.$clear.show();
      $(window).trigger('statechange');
    }
  }
  var _proto = SearchInCategory.prototype;
  _proto.destroy = function destroy() {
    // console.log('search-in-category destroy');
    this.unbindEvents();
  };
  _proto.bindEvents = function bindEvents() {
    this.$input.on('input', this.onInput);
    this.$form.on('submit', this.onFormSubmit);
    this.$clear.on('click', this.onClear);
    if ($('#facetedSearch').length === 0) {
      $(window).on('statechange', this.onStateChange);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$input.off('input', this.onInput);
    this.$form.off('submit', this.onFormSubmit);
    this.$clear.off('click', this.onClear);
    $(window).off('statechange', this.onStateChange);
  };
  _proto.onFormSubmit = function onFormSubmit() {
    return false;
  };
  _proto.onClear = function onClear(event) {
    event.preventDefault();
    this.$clear.hide();
    this.$input.val('').trigger('input');
  };
  _proto.onInput = function onInput(event) {
    this.doSearch($(event.target).val());
  };
  _proto.onStateChange = function onStateChange() {
    var _this = this;
    // console.log('search-in-category statechange');
    var locationUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(); // papathemes: infinite scroll + search in category compatibility
    var searchUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(searchUrl, true);
    var searchQuery = url.query.search_query || url.query.search_query_adv || url.query.q;
    var requestOptions = {
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      config: {
        category: {
          shop_by_price: true
        }
      }
    };
    if (searchQuery) {
      url.query.search_query_adv = searchQuery;
      delete url.query.search_query;
      delete url.query.q;
      delete url.query.category;
      if (this.options.context.categoryId) {
        url.query['category[]'] = this.options.context.categoryId;
      } else {
        delete url.query['category[]'];
      }
      if (this.options.context.categorypage_search_subs) {
        url.query.searchsubs = 'ON';
      }
      searchUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    }
    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__.api.getPage(searchUrl, requestOptions, function (err, content) {
      _this.$form.removeClass('loading');
      if (err) {
        throw new Error(err);
      }
      _this.$body.trigger('beforeupdate.searchincategory');
      if (content && _this.options.searchCallback) {
        _this.options.searchCallback(content, locationUrl); // papathemes: infinite scroll + search in category compatibility
      }
      _this.$body.trigger('afterupdate.searchincategory');
    });
  };
  _proto.doSearch = function doSearch(searchQuery) {
    if (searchQuery.length === 0) {
      this.$clear.hide();
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'category', 'page']);
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(url);
    } else if (searchQuery.length >= 3) {
      this.$clear.show();
      var _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'page']);
      _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceParams(_url, {
        q: searchQuery
      });
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(_url);
    }
  };
  _proto.updateViewFacetedSearch = function updateViewFacetedSearch() {
    var _this2 = this;
    var facetedSearch = this.options.facetedSearch;
    var locationUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(); // papathemes: infinite scroll + search in category compatibility
    var requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var requestOptions = facetedSearch.requestOptions;
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(requestUrl, true);
    var searchQuery = url.query.q || url.query.search_query;

    // Check if the URL is 'Clear All', then clear the search query as well
    var stdParams = ['_bc_fsnf', 'search_query', 'q', 'sort', 'limit', 'mode', 'page'];
    var filterParams = Object.keys(url.query).filter(function (key) {
      return stdParams.indexOf(key) === -1;
    });
    var isClearAll = window.location.pathname === '/search.php' && filterParams.length === 0;
    if (isClearAll) {
      this.$input.val('');
      this.$clear.hide();
      requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(requestUrl, [].concat(filterParams, ['search_query', 'q', '_bc_fsnf'])).replace('/search.php', this.originalPathname);
      window.history.replaceState({}, document.title, requestUrl);
    } else if (searchQuery) {
      // Show nice URL on the location bar
      if (window.location.pathname === '/search.php') {
        url.query.q = searchQuery;
        delete url.query.search_query;
        if (Number(url.query.category) === this.options.context.categoryId) {
          delete url.query.category;
        }
        window.history.replaceState({}, document.title, this.originalPathname + "?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query));
      }
      delete url.query.q;
      url.query.search_query = searchQuery;
      if (!url.query.category) {
        url.query.category = this.options.context.categoryId;
      }
      requestUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    } else {
      this.$input.val('');
    }
    $(facetedSearch.options.blockerSelector).show();
    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__.api.getPage(requestUrl, requestOptions, function (err, content) {
      // Supermarket MOD
      $(facetedSearch.options.blockerSelector).hide();
      _this2.$form.removeClass('loading');
      if (err) {
        throw new Error(err);
      }
      if (content != null && content.sidebar) {
        // Faceted accordions before updating
        var existingAccordionTargetId = $(facetedSearch.options.accordionToggleSelector).get().map(function (el) {
          var _$$data;
          return (_$$data = $(el).data('collapsibleInstance')) == null ? void 0 : _$$data.targetId;
        }).filter(function (id) {
          return id;
        });

        // Collapse all new faceted accordions if it's not opened by default
        // (Fix category faceted accordion opened after searching in category page fullwidth layout)
        $(content.sidebar).find(facetedSearch.options.accordionToggleSelector).each(function (i, el) {
          var $el = $(el);
          var id = $el.data('collapsible').replace('#', '');
          if ($el.not('.is-open') && !existingAccordionTargetId.includes(id)) {
            facetedSearch.collapsedFacets.push(id);
          }
        });
      }
      _this2.$body.trigger('beforeupdate.searchincategory');

      // Refresh view with new content
      facetedSearch.refreshView(content, locationUrl); // papathemes: infinite scroll + search in category compatibility

      _this2.$body.trigger('afterupdate.searchincategory');
    });
  };
  return SearchInCategory;
}();


/***/ }),

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
/* harmony import */ var _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../papathemes/search-in-category */ "./assets/js/papathemes/search-in-category.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");
/* harmony import */ var _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../papathemes/faceted-infinite-scroll */ "./assets/js/papathemes/faceted-infinite-scroll.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// Supermarket Mod
// import compareProducts from './global/compare-products';



 // Papathemes - Supermarket
// import { autoExpandCategoryMenu } from '../papathemes/theme-utils'; // Supermarket



 // Chiara

 // papathemes-kitchenary

var largeMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_10__["default"])('large');
var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    // Chiara: infinite scroll
    var enableInfiniteScroll = $('#product-listing-container').data('categoryInfiniteScroll');

    // console.log('category onReady');
    // autoExpandCategoryMenu(this.context); // Supermarket

    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = (0,_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    }

    // Supermarket Mod
    // compareProducts(this.context.urls);
    (0,_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);

    // Papathemes: infinite scroll
    var infiniteScrollOptions = {
      bulkOrder: this.bulkOrder,
      enableInfiniteScroll: enableInfiniteScroll,
      txtLoadMore: this.context.txtLoadMore,
      insertTopPaginationFunc: function insertTopPaginationFunc($pagination, $productListingContainer) {
        return $productListingContainer.find('.productGrid').before($pagination);
      },
      insertBottomPaginationFunc: function insertBottomPaginationFunc($pagination, $productListingContainer) {
        return $productListingContainer.find('.productGrid').after($pagination);
      }
    };
    if ($('#facetedSearch').length > 0) {
      // Chiara: init infinite scroll for faceted search
      if (enableInfiniteScroll) {
        this.facetedInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.FacetedInfiniteScroll(infiniteScrollOptions);
      }
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // papathemes-beautify
      (0,_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
      if (this.context.categorypage_search === 'show') {
        $('body').on('afterupdate.searchincategory', function () {
          return (0,_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
        });
      }

      // Chiara: init infinite scroll for standard category page without faceted filters
      if (enableInfiniteScroll) {
        this.standardInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.StandardInfiniteScroll(Object.assign({
          requestOptions: {
            config: {
              category: {
                products: {
                  limit: this.context.categoryProductsPerPage
                }
              }
            },
            template: 'category/product-listing'
          }
        }, infiniteScrollOptions));
      }
    }

    // Papathemes - Supermarket
    (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])();

    // Supermarket
    if (this.context.categorypage_search === 'show') {
      this.initSearchInCategory();
    }

    // papathemes-beautify
    $('#categories-navList .navList-action--checkbox').on('click', function (event) {
      return $(event.target).toggleClass('is-selected');
    });
    $('#subCategories-loadMore').on('click', function (e) {
      var $btn = $(e.target);
      var textShowmore = $btn.data('show-more');
      var textShowLess = $btn.data('show-less');
      if ($btn.hasClass('_showMore-off')) {
        $btn.removeClass('_showMore-off').text(textShowLess).attr('aria-label', textShowLess).siblings('.subCategories-list').toggleClass('_showMore');
      } else {
        $btn.addClass('_showMore-off').text(textShowmore).attr('aria-label', textShowmore).siblings('.subCategories-list').toggleClass('_showMore');
      }
    });
    var hideActionNotChecked = function hideActionNotChecked() {
      var $productFilter = $('#papathemes-productsFilter-form');
      if (!largeMediaQueryList.matches) {
        $('.form-radio', $productFilter).each(function (index, checkbox) {
          if ($(checkbox).prop('checked')) {
            if ($(checkbox).attr('id') === 'mode_1_main' || $(checkbox).attr('id') === 'mode_2_main' || $(checkbox).attr('id') === 'mode_bo_main') {
              $('.form-radio[value="2"]', $productFilter).css('display', 'inline-block');
              $('.form-radio[value="2"] + label.form-option', $productFilter).css('display', 'inline-flex');
            } else {
              $('.form-radio[value="2"]', $productFilter).css('display', 'none');
              $('.form-radio[value="2"] + label.form-option', $productFilter).css('display', 'none');
            }
          }
        });
        $('.form-radio', $productFilter).on('change', function (e) {
          var itemChecked = $(e.target);
          if (itemChecked.attr('id') === 'mode_1_main' || itemChecked.attr('id') === 'mode_2_main' || itemChecked.attr('id') === 'mode_bo_main') {
            $('.form-radio[value="2"]', $productFilter).css('display', 'inline-block');
            $('.form-radio[value="2"] + label.form-option', $productFilter).css('display', 'inline-flex');
          }
        });
      } else {
        $('.form-radio[value="2"]', $productFilter).css('display', 'inline-block');
        $('.form-radio[value="2"] + label.form-option', $productFilter).css('display', 'inline-flex');
      }
    };
    hideActionNotChecked();
    largeMediaQueryList.addListener(hideActionNotChecked);
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    if (this.searchInCategory) {
      this.searchInCategory.destroy();
    }
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.off('sortBy-submitted', this.onSortBySubmit);
    }
  }

  // Supermarket
  ;
  _proto.initSearchInCategory = function initSearchInCategory() {
    var _this2 = this;
    this.searchInCategory = new _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__["default"]({
      context: this.context,
      facetedSearch: this.facetedSearch,
      searchCallback: function searchCallback(content, url) {
        // papathemes: infinite scroll + search in category compatibility
        if (_this2.standardInfiniteScroll) {
          return _this2.standardInfiniteScroll.refreshView(content, url);
        }
        $('#product-listing-container').html(content.productListing);
        if (_this2.bulkOrder) {
          _this2.bulkOrder.reinit();
        }
        (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])();
        $('body').triggerHandler('compareReset');

        // kitchenary: scroll to top of product listing
        (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_11__.scrollToTopProducts)();
      }
    });
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this3 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content, url) {
      // chiara mod
      // Chiara: Infinite Scroll mod
      if (_this3.facetedInfiniteScroll) {
        return _this3.facetedInfiniteScroll.refreshView(content, url);
      }
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // Papathemes - Bulk Order
      if (_this3.bulkOrder) {
        _this3.bulkOrder.reinit();
      }
      $('body').triggerHandler('compareReset');

      // kitchenary: scroll to top of product listing
      (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_11__.scrollToTopProducts)();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUUzQjtBQUNpQztBQUFBLElBRWxDRyxnQkFBZ0I7RUFDakM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxpQkFBWUMsT0FBTyxFQUFFO0lBQ2pCO0lBQ0EsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLHNEQUFBLENBQVMsSUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDdkQsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNILElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDSSxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEQsSUFBSSxDQUFDSCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDUSxLQUFLLEdBQUdDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdELENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1QyxJQUFJLENBQUNFLEtBQUssR0FBRyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUVoRCxJQUFJbkIsT0FBTyxJQUFJQSxPQUFPLENBQUNvQixhQUFhLEVBQUU7TUFDbEMsSUFBSSxDQUFDcEIsT0FBTyxDQUFDb0IsYUFBYSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNDLHVCQUF1QixDQUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzRjtJQUVBLElBQUksQ0FBQ29CLFVBQVUsQ0FBQyxDQUFDO0lBRWpCLElBQU1DLEdBQUcsR0FBRzNCLHNDQUFTLENBQUNDLHFFQUFRLENBQUM0QixNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUM5QyxJQUFJRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFO01BQ2IsSUFBSSxDQUFDbEIsTUFBTSxDQUFDbUIsR0FBRyxDQUFDTCxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDO01BQzVCLElBQUksQ0FBQ2YsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLENBQUM7TUFDbEJyQixDQUFDLENBQUNRLE1BQU0sQ0FBQyxDQUFDYyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BDO0VBQ0o7RUFBQyxJQUFBQyxNQUFBLEdBQUFqQyxnQkFBQSxDQUFBa0MsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTjtJQUNBLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBSCxNQUFBLENBRURULFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNiLE1BQU0sQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDaEMsT0FBTyxDQUFDO0lBQ3JDLElBQUksQ0FBQ08sS0FBSyxDQUFDeUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMvQixZQUFZLENBQUM7SUFDMUMsSUFBSSxDQUFDUSxNQUFNLENBQUN1QixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzlCLE9BQU8sQ0FBQztJQUVyQyxJQUFJRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzRCLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDbEM1QixDQUFDLENBQUNRLE1BQU0sQ0FBQyxDQUFDbUIsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM3QixhQUFhLENBQUM7SUFDbkQ7RUFDSixDQUFDO0VBQUF5QixNQUFBLENBRURHLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUN6QixNQUFNLENBQUM0QixHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQztJQUN0QyxJQUFJLENBQUNPLEtBQUssQ0FBQzJCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDakMsWUFBWSxDQUFDO0lBQzNDLElBQUksQ0FBQ1EsTUFBTSxDQUFDeUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNoQyxPQUFPLENBQUM7SUFDdENHLENBQUMsQ0FBQ1EsTUFBTSxDQUFDLENBQUNxQixHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQy9CLGFBQWEsQ0FBQztFQUNwRCxDQUFDO0VBQUF5QixNQUFBLENBRUQzQixZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQTJCLE1BQUEsQ0FFRDFCLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFDaUMsS0FBSyxFQUFFO0lBQ1hBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDM0IsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNMLE1BQU0sQ0FBQ21CLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUN4QyxDQUFDO0VBQUFDLE1BQUEsQ0FFRDVCLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFDbUMsS0FBSyxFQUFFO0lBQ1gsSUFBSSxDQUFDdEMsUUFBUSxDQUFDUSxDQUFDLENBQUM4QixLQUFLLENBQUNFLE1BQU0sQ0FBQyxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3hDLENBQUM7RUFBQUcsTUFBQSxDQUVEekIsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUFBLElBQUFtQyxLQUFBO0lBQ1o7SUFDQSxJQUFNQyxXQUFXLEdBQUc3QyxxRUFBUSxDQUFDNEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUlrQixTQUFTLEdBQUc5QyxxRUFBUSxDQUFDNEIsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBTUYsR0FBRyxHQUFHM0Isc0NBQVMsQ0FBQytDLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDdEMsSUFBTUMsV0FBVyxHQUFHckIsR0FBRyxDQUFDRyxLQUFLLENBQUNtQixZQUFZLElBQUl0QixHQUFHLENBQUNHLEtBQUssQ0FBQ29CLGdCQUFnQixJQUFJdkIsR0FBRyxDQUFDRyxLQUFLLENBQUNDLENBQUM7SUFDdkYsSUFBSW9CLGNBQWMsR0FBRztNQUNqQkMsUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSwwQkFBMEI7UUFDMUNDLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDREMsTUFBTSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtVQUNOQyxhQUFhLEVBQUU7UUFDbkI7TUFDSjtJQUNKLENBQUM7SUFFRCxJQUFJVCxXQUFXLEVBQUU7TUFDYnJCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDb0IsZ0JBQWdCLEdBQUdGLFdBQVc7TUFFeEMsT0FBT3JCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDbUIsWUFBWTtNQUM3QixPQUFPdEIsR0FBRyxDQUFDRyxLQUFLLENBQUNDLENBQUM7TUFDbEIsT0FBT0osR0FBRyxDQUFDRyxLQUFLLENBQUMwQixRQUFRO01BRXpCLElBQUksSUFBSSxDQUFDckQsT0FBTyxDQUFDdUQsT0FBTyxDQUFDQyxVQUFVLEVBQUU7UUFDakNoQyxHQUFHLENBQUNHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMzQixPQUFPLENBQUN1RCxPQUFPLENBQUNDLFVBQVU7TUFDN0QsQ0FBQyxNQUFNO1FBQ0gsT0FBT2hDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLFlBQVksQ0FBQztNQUNsQztNQUVBLElBQUksSUFBSSxDQUFDM0IsT0FBTyxDQUFDdUQsT0FBTyxDQUFDRSx3QkFBd0IsRUFBRTtRQUMvQ2pDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDK0IsVUFBVSxHQUFHLElBQUk7TUFDL0I7TUFFQWQsU0FBUyxvQkFBa0I5QyxxRUFBUSxDQUFDNkQsZ0JBQWdCLENBQUNuQyxHQUFHLENBQUNHLEtBQUssQ0FBRztNQUVqRXFCLGNBQWMsR0FBRztRQUNiQyxRQUFRLEVBQUU7VUFDTkMsY0FBYyxFQUFFLGdEQUFnRDtVQUNoRUMsT0FBTyxFQUFFO1FBQ2IsQ0FBQztRQUNEUyxRQUFRLEVBQUU7TUFDZCxDQUFDO0lBQ0w7SUFFQSxJQUFJLENBQUNqRCxLQUFLLENBQUNrRCxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLElBQUksQ0FBQ3JELEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQztJQUVwRG5DLDJEQUFHLENBQUNrRSxPQUFPLENBQUNsQixTQUFTLEVBQUVJLGNBQWMsRUFBRSxVQUFDZSxHQUFHLEVBQUVDLE9BQU8sRUFBSztNQUNyRHRCLEtBQUksQ0FBQy9CLEtBQUssQ0FBQ3NELFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFFakMsSUFBSUYsR0FBRyxFQUFFO1FBQ0wsTUFBTSxJQUFJRyxLQUFLLENBQUNILEdBQUcsQ0FBQztNQUN4QjtNQUVBckIsS0FBSSxDQUFDbEMsS0FBSyxDQUFDdUIsT0FBTyxDQUFDLCtCQUErQixDQUFDO01BRW5ELElBQUlpQyxPQUFPLElBQUl0QixLQUFJLENBQUMxQyxPQUFPLENBQUNtRSxjQUFjLEVBQUU7UUFDeEN6QixLQUFJLENBQUMxQyxPQUFPLENBQUNtRSxjQUFjLENBQUNILE9BQU8sRUFBRXJCLFdBQVcsQ0FBQyxDQUFDLENBQUM7TUFDdkQ7TUFFQUQsS0FBSSxDQUFDbEMsS0FBSyxDQUFDdUIsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUMsTUFBQSxDQUVEL0IsUUFBUSxHQUFSLFNBQUFBLFFBQVFBLENBQUM0QyxXQUFXLEVBQUU7SUFDbEIsSUFBSUEsV0FBVyxDQUFDUixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzFCLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFDbEIsSUFBTVMsR0FBRyxHQUFHMUIscUVBQVEsQ0FBQ3NFLFlBQVksQ0FBQ3RFLHFFQUFRLENBQUM0QixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7TUFDbkg1QixxRUFBUSxDQUFDdUUsT0FBTyxDQUFDN0MsR0FBRyxDQUFDO0lBQ3pCLENBQUMsTUFBTSxJQUFJcUIsV0FBVyxDQUFDUixNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxDQUFDO01BQ2xCLElBQUlOLElBQUcsR0FBRzFCLHFFQUFRLENBQUNzRSxZQUFZLENBQUN0RSxxRUFBUSxDQUFDNEIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7TUFDckdGLElBQUcsR0FBRzFCLHFFQUFRLENBQUN3RSxhQUFhLENBQUM5QyxJQUFHLEVBQUU7UUFBRUksQ0FBQyxFQUFFaUI7TUFBWSxDQUFDLENBQUM7TUFDckQvQyxxRUFBUSxDQUFDdUUsT0FBTyxDQUFDN0MsSUFBRyxDQUFDO0lBQ3pCO0VBQ0osQ0FBQztFQUFBUSxNQUFBLENBRURWLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUEsRUFBRztJQUFBLElBQUFpRCxNQUFBO0lBQ3RCLElBQU1uRCxhQUFhLEdBQUcsSUFBSSxDQUFDcEIsT0FBTyxDQUFDb0IsYUFBYTtJQUNoRCxJQUFNdUIsV0FBVyxHQUFHN0MscUVBQVEsQ0FBQzRCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJOEMsVUFBVSxHQUFHMUUscUVBQVEsQ0FBQzRCLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUlzQixjQUFjLEdBQUc1QixhQUFhLENBQUM0QixjQUFjO0lBQ2pELElBQU14QixHQUFHLEdBQUczQixzQ0FBUyxDQUFDMkUsVUFBVSxFQUFFLElBQUksQ0FBQztJQUN2QyxJQUFNM0IsV0FBVyxHQUFHckIsR0FBRyxDQUFDRyxLQUFLLENBQUNDLENBQUMsSUFBSUosR0FBRyxDQUFDRyxLQUFLLENBQUNtQixZQUFZOztJQUV6RDtJQUNBLElBQU0yQixTQUFTLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDcEYsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ3BELEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUNrRCxNQUFNLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlMLFNBQVMsQ0FBQ00sT0FBTyxDQUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQ3hGLElBQU1FLFVBQVUsR0FBRy9ELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLEtBQUssYUFBYSxJQUFJdUQsWUFBWSxDQUFDckMsTUFBTSxLQUFLLENBQUM7SUFFMUYsSUFBSTJDLFVBQVUsRUFBRTtNQUNaLElBQUksQ0FBQ3RFLE1BQU0sQ0FBQ21CLEdBQUcsQ0FBQyxFQUFFLENBQUM7TUFDbkIsSUFBSSxDQUFDaEIsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUNsQnlELFVBQVUsR0FBRzFFLHFFQUFRLENBQUNzRSxZQUFZLENBQUNJLFVBQVUsS0FBQVMsTUFBQSxDQUFNUCxZQUFZLEdBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDUSxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQ2xFLGdCQUFnQixDQUFDO01BQ2hKQyxNQUFNLENBQUNrRSxPQUFPLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDQyxLQUFLLEVBQUVkLFVBQVUsQ0FBQztJQUMvRCxDQUFDLE1BQU0sSUFBSTNCLFdBQVcsRUFBRTtNQUNwQjtNQUNBLElBQUk1QixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLLGFBQWEsRUFBRTtRQUM1Q0ssR0FBRyxDQUFDRyxLQUFLLENBQUNDLENBQUMsR0FBR2lCLFdBQVc7UUFDekIsT0FBT3JCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDbUIsWUFBWTtRQUM3QixJQUFJeUMsTUFBTSxDQUFDL0QsR0FBRyxDQUFDRyxLQUFLLENBQUMwQixRQUFRLENBQUMsS0FBSyxJQUFJLENBQUNyRCxPQUFPLENBQUN1RCxPQUFPLENBQUNDLFVBQVUsRUFBRTtVQUNoRSxPQUFPaEMsR0FBRyxDQUFDRyxLQUFLLENBQUMwQixRQUFRO1FBQzdCO1FBQ0FwQyxNQUFNLENBQUNrRSxPQUFPLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDQyxLQUFLLEVBQUssSUFBSSxDQUFDdEUsZ0JBQWdCLFNBQUlsQixxRUFBUSxDQUFDNkQsZ0JBQWdCLENBQUNuQyxHQUFHLENBQUNHLEtBQUssQ0FBRyxDQUFDO01BQ3ZIO01BRUEsT0FBT0gsR0FBRyxDQUFDRyxLQUFLLENBQUNDLENBQUM7TUFDbEJKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDbUIsWUFBWSxHQUFHRCxXQUFXO01BQ3BDLElBQUksQ0FBQ3JCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDMEIsUUFBUSxFQUFFO1FBQ3JCN0IsR0FBRyxDQUFDRyxLQUFLLENBQUMwQixRQUFRLEdBQUcsSUFBSSxDQUFDckQsT0FBTyxDQUFDdUQsT0FBTyxDQUFDQyxVQUFVO01BQ3hEO01BRUFnQixVQUFVLG9CQUFrQjFFLHFFQUFRLENBQUM2RCxnQkFBZ0IsQ0FBQ25DLEdBQUcsQ0FBQ0csS0FBSyxDQUFHO01BQ2xFcUIsY0FBYyxHQUFHO1FBQ2JDLFFBQVEsRUFBRTtVQUNOQyxjQUFjLEVBQUUsZ0RBQWdEO1VBQ2hFQyxPQUFPLEVBQUU7UUFDYixDQUFDO1FBQ0RTLFFBQVEsRUFBRTtNQUNkLENBQUM7SUFDTCxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNsRCxNQUFNLENBQUNtQixHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3ZCO0lBRUFwQixDQUFDLENBQUNXLGFBQWEsQ0FBQ3BCLE9BQU8sQ0FBQ3dGLGVBQWUsQ0FBQyxDQUFDMUQsSUFBSSxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDbkIsS0FBSyxDQUFDa0QsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUU5QixJQUFJLENBQUNyRCxLQUFLLENBQUN1QixPQUFPLENBQUMsZ0NBQWdDLENBQUM7SUFFcERuQywyREFBRyxDQUFDa0UsT0FBTyxDQUFDVSxVQUFVLEVBQUV4QixjQUFjLEVBQUUsVUFBQ2UsR0FBRyxFQUFFQyxPQUFPLEVBQUs7TUFBRTtNQUN4RHZELENBQUMsQ0FBQ1csYUFBYSxDQUFDcEIsT0FBTyxDQUFDd0YsZUFBZSxDQUFDLENBQUN6RSxJQUFJLENBQUMsQ0FBQztNQUMvQ3dELE1BQUksQ0FBQzVELEtBQUssQ0FBQ3NELFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFFakMsSUFBSUYsR0FBRyxFQUFFO1FBQ0wsTUFBTSxJQUFJRyxLQUFLLENBQUNILEdBQUcsQ0FBQztNQUN4QjtNQUVBLElBQUlDLE9BQU8sWUFBUEEsT0FBTyxDQUFFYixPQUFPLEVBQUU7UUFDbEI7UUFDQSxJQUFNc0MseUJBQXlCLEdBQUdoRixDQUFDLENBQUNXLGFBQWEsQ0FBQ3BCLE9BQU8sQ0FBQzBGLHVCQUF1QixDQUFDLENBQzdFQyxHQUFHLENBQUMsQ0FBQyxDQUNMQyxHQUFHLENBQUMsVUFBQUMsRUFBRTtVQUFBLElBQUFDLE9BQUE7VUFBQSxRQUFBQSxPQUFBLEdBQUlyRixDQUFDLENBQUNvRixFQUFFLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFqQ0QsT0FBQSxDQUFtQ0UsUUFBUTtRQUFBLEVBQUMsQ0FDdERuQixNQUFNLENBQUMsVUFBQW9CLEVBQUU7VUFBQSxPQUFJQSxFQUFFO1FBQUEsRUFBQzs7UUFFckI7UUFDQTtRQUNBeEYsQ0FBQyxDQUFDdUQsT0FBTyxDQUFDYixPQUFPLENBQUMsQ0FBQ3JDLElBQUksQ0FBQ00sYUFBYSxDQUFDcEIsT0FBTyxDQUFDMEYsdUJBQXVCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRU4sRUFBRSxFQUFLO1VBQ25GLElBQU1PLEdBQUcsR0FBRzNGLENBQUMsQ0FBQ29GLEVBQUUsQ0FBQztVQUNqQixJQUFNSSxFQUFFLEdBQUdHLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDYixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztVQUNuRCxJQUFJa0IsR0FBRyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQ1oseUJBQXlCLENBQUNhLFFBQVEsQ0FBQ0wsRUFBRSxDQUFDLEVBQUU7WUFDaEU3RSxhQUFhLENBQUNtRixlQUFlLENBQUNDLElBQUksQ0FBQ1AsRUFBRSxDQUFDO1VBQzFDO1FBQ0osQ0FBQyxDQUFDO01BQ047TUFFQTFCLE1BQUksQ0FBQy9ELEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQzs7TUFFbkQ7TUFDQVgsYUFBYSxDQUFDcUYsV0FBVyxDQUFDekMsT0FBTyxFQUFFckIsV0FBVyxDQUFDLENBQUMsQ0FBQzs7TUFFakQ0QixNQUFJLENBQUMvRCxLQUFLLENBQUN1QixPQUFPLENBQUMsOEJBQThCLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFoQyxnQkFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UDhDO0FBQ2Y7QUFDcEM7QUFDQTtBQUM2RDtBQUNUO0FBQ21DO0FBQy9CLENBQUM7QUFDekQ7QUFDd0Q7QUFDUTtBQUNLO0FBQ2lDLENBQUM7QUFDekM7QUFDRSxDQUFDOztBQUVqRSxJQUFNd0gsbUJBQW1CLEdBQUdGLHFFQUFxQixDQUFDLE9BQU8sQ0FBQztBQUFDLElBRXRDRyxRQUFRLDBCQUFBQyxZQUFBO0VBQ3pCLFNBQUFELFNBQVlqRSxPQUFPLEVBQUU7SUFBQSxJQUFBYixLQUFBO0lBQ2pCQSxLQUFBLEdBQUErRSxZQUFBLENBQUFDLElBQUEsT0FBTW5FLE9BQU8sQ0FBQztJQUNkYixLQUFBLENBQUtpRixvQkFBb0IsR0FBR1osbUdBQTJCLENBQUN4RCxPQUFPLENBQUM7SUFBQyxPQUFBYixLQUFBO0VBQ3JFO0VBQUNrRixjQUFBLENBQUFKLFFBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUF6RixNQUFBLEdBQUF3RixRQUFBLENBQUF2RixTQUFBO0VBQUFELE1BQUEsQ0FFRDZGLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTjtJQUNBLElBQU1DLG9CQUFvQixHQUFHckgsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNzRixJQUFJLENBQUMsd0JBQXdCLENBQUM7O0lBRTNGO0lBQ0E7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ3hDLE9BQU8sS0FBSyxJQUFJLENBQUNBLE9BQU8sQ0FBQ3dFLG9CQUFvQixJQUFJLElBQUksQ0FBQ3hFLE9BQU8sQ0FBQ3lFLFlBQVksQ0FBQyxFQUFFO01BQ2xGLElBQUksQ0FBQ0MsU0FBUyxHQUFHaEIsa0VBQWdCLENBQUMsSUFBSSxDQUFDMUQsT0FBTyxDQUFDO0lBQ25EOztJQUVBO0lBQ0E7SUFDQXNELHdFQUFlLENBQUMsSUFBSSxDQUFDdEQsT0FBTyxDQUFDOztJQUU3QjtJQUNBLElBQU0yRSxxQkFBcUIsR0FBRztNQUMxQkQsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztNQUN6Qkgsb0JBQW9CLEVBQXBCQSxvQkFBb0I7TUFDcEJLLFdBQVcsRUFBRSxJQUFJLENBQUM1RSxPQUFPLENBQUM0RSxXQUFXO01BQ3JDQyx1QkFBdUIsRUFBRSxTQUF6QkEsdUJBQXVCQSxDQUFHQyxXQUFXLEVBQUVDLHdCQUF3QjtRQUFBLE9BQUtBLHdCQUF3QixDQUFDeEgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDeUgsTUFBTSxDQUFDRixXQUFXLENBQUM7TUFBQTtNQUNySUcsMEJBQTBCLEVBQUUsU0FBNUJBLDBCQUEwQkEsQ0FBR0gsV0FBVyxFQUFFQyx3QkFBd0I7UUFBQSxPQUFLQSx3QkFBd0IsQ0FBQ3hILElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzJILEtBQUssQ0FBQ0osV0FBVyxDQUFDO01BQUE7SUFDM0ksQ0FBQztJQUVELElBQUk1SCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzRCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEM7TUFDQSxJQUFJeUYsb0JBQW9CLEVBQUU7UUFDdEIsSUFBSSxDQUFDWSxxQkFBcUIsR0FBRyxJQUFJdEIsc0ZBQXFCLENBQUNjLHFCQUFxQixDQUFDO01BQ2pGO01BRUEsSUFBSSxDQUFDUyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDekksSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRHdHLDZEQUFLLENBQUN2RSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDd0csY0FBYyxDQUFDOztNQUVqRDtNQUNBMUIsMEVBQXFCLENBQUMsQ0FBQztNQUN2QixJQUFJLElBQUksQ0FBQzNELE9BQU8sQ0FBQ3NGLG1CQUFtQixLQUFLLE1BQU0sRUFBRTtRQUM3Q3BJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzJCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTtVQUFBLE9BQU04RSwwRUFBcUIsQ0FBQyxDQUFDO1FBQUEsRUFBQztNQUMvRTs7TUFFQTtNQUNBLElBQUlZLG9CQUFvQixFQUFFO1FBQ3RCLElBQUksQ0FBQ2dCLHNCQUFzQixHQUFHLElBQUkzQix1RkFBc0IsQ0FBQXhDLE1BQUEsQ0FBQW9FLE1BQUE7VUFDcEQvRixjQUFjLEVBQUU7WUFDWkksTUFBTSxFQUFFO2NBQ0pDLFFBQVEsRUFBRTtnQkFDTjJGLFFBQVEsRUFBRTtrQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQzFGLE9BQU8sQ0FBQzJGO2dCQUN4QjtjQUNKO1lBQ0osQ0FBQztZQUNEakcsUUFBUSxFQUFFO1VBQ2Q7UUFBQyxHQUNFaUYscUJBQXFCLENBQzNCLENBQUM7TUFDTjtJQUNKOztJQUVBO0lBQ0FsQixrRUFBZ0IsQ0FBQyxDQUFDOztJQUVsQjtJQUNBLElBQUksSUFBSSxDQUFDekQsT0FBTyxDQUFDc0YsbUJBQW1CLEtBQUssTUFBTSxFQUFFO01BQzdDLElBQUksQ0FBQ00sb0JBQW9CLENBQUMsQ0FBQztJQUMvQjs7SUFFQTtJQUNBMUksQ0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUMyQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFHLEtBQUs7TUFBQSxPQUFJOUIsQ0FBQyxDQUFDOEIsS0FBSyxDQUFDRSxNQUFNLENBQUMsQ0FBQzJHLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFBQSxFQUFDO0lBQ25IM0ksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMyQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNpSCxDQUFDLEVBQUs7TUFDNUMsSUFBTUMsSUFBSSxHQUFHN0ksQ0FBQyxDQUFDNEksQ0FBQyxDQUFDNUcsTUFBTSxDQUFDO01BQ3hCLElBQU04RyxZQUFZLEdBQUdELElBQUksQ0FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUM7TUFDM0MsSUFBTXlELFlBQVksR0FBR0YsSUFBSSxDQUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUMzQyxJQUFJdUQsSUFBSSxDQUFDRyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDaENILElBQUksQ0FDQ3JGLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJ5RixJQUFJLENBQUNGLFlBQVksQ0FBQyxDQUNsQkcsSUFBSSxDQUFDLFlBQVksRUFBRUgsWUFBWSxDQUFDLENBQ2hDSSxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQ1IsV0FBVyxDQUFDLFdBQVcsQ0FBQztNQUNqRSxDQUFDLE1BQU07UUFDSEUsSUFBSSxDQUNDekYsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN6QjZGLElBQUksQ0FBQ0gsWUFBWSxDQUFDLENBQ2xCSSxJQUFJLENBQUMsWUFBWSxFQUFFSixZQUFZLENBQUMsQ0FDaENLLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDUixXQUFXLENBQUMsV0FBVyxDQUFDO01BQ2pFO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsSUFBTVMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBQSxFQUFTO01BQy9CLElBQU1DLGNBQWMsR0FBR3JKLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQztNQUMzRCxJQUFJLENBQUM4RyxtQkFBbUIsQ0FBQ3dDLE9BQU8sRUFBRTtRQUM5QnRKLENBQUMsQ0FBQyxhQUFhLEVBQUVxSixjQUFjLENBQUMsQ0FBQzVELElBQUksQ0FBQyxVQUFDOEQsS0FBSyxFQUFFQyxRQUFRLEVBQUs7VUFDdkQsSUFBSXhKLENBQUMsQ0FBQ3dKLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0IsSUFBSXpKLENBQUMsQ0FBQ3dKLFFBQVEsQ0FBQyxDQUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssYUFBYSxJQUFJbEosQ0FBQyxDQUFDd0osUUFBUSxDQUFDLENBQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLElBQUlsSixDQUFDLENBQUN3SixRQUFRLENBQUMsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGNBQWMsRUFBRTtjQUNuSWxKLENBQUMsQ0FBQyx3QkFBd0IsRUFBRXFKLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQztjQUMxRTFKLENBQUMsQ0FBQyw0Q0FBNEMsRUFBRXFKLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQztZQUNqRyxDQUFDLE1BQU07Y0FDSDFKLENBQUMsQ0FBQyx3QkFBd0IsRUFBRXFKLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztjQUNsRTFKLENBQUMsQ0FBQyw0Q0FBNEMsRUFBRXFKLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUMxRjtVQUNKO1FBQ0osQ0FBQyxDQUFDO1FBQ0YxSixDQUFDLENBQUMsYUFBYSxFQUFFcUosY0FBYyxDQUFDLENBQUMxSCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUNpSCxDQUFDLEVBQUs7VUFDakQsSUFBTWUsV0FBVyxHQUFHM0osQ0FBQyxDQUFDNEksQ0FBQyxDQUFDNUcsTUFBTSxDQUFDO1VBQy9CLElBQUkySCxXQUFXLENBQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLElBQUlTLFdBQVcsQ0FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsSUFBSVMsV0FBVyxDQUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssY0FBYyxFQUFFO1lBQ25JbEosQ0FBQyxDQUFDLHdCQUF3QixFQUFFcUosY0FBYyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO1lBQzFFMUosQ0FBQyxDQUFDLDRDQUE0QyxFQUFFcUosY0FBYyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDO1VBQ2pHO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUFNO1FBQ0gxSixDQUFDLENBQUMsd0JBQXdCLEVBQUVxSixjQUFjLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7UUFDMUUxSixDQUFDLENBQUMsNENBQTRDLEVBQUVxSixjQUFjLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7TUFDakc7SUFDSixDQUFDO0lBRUROLG9CQUFvQixDQUFDLENBQUM7SUFDdEJ0QyxtQkFBbUIsQ0FBQzhDLFdBQVcsQ0FBQ1Isb0JBQW9CLENBQUM7RUFDekQ7O0VBRUE7RUFBQTtFQUFBN0gsTUFBQSxDQUNBRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxJQUFJLENBQUNvSSxnQkFBZ0IsRUFBRTtNQUN2QixJQUFJLENBQUNBLGdCQUFnQixDQUFDcEksT0FBTyxDQUFDLENBQUM7SUFDbkM7SUFDQSxJQUFJLElBQUksQ0FBQ2QsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsYUFBYSxDQUFDYyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDLE1BQU07TUFDSHlFLDZEQUFLLENBQUNyRSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDc0csY0FBYyxDQUFDO0lBQ3REO0VBQ0o7O0VBRUE7RUFBQTtFQUFBNUcsTUFBQSxDQUNBbUgsb0JBQW9CLEdBQXBCLFNBQUFBLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTVFLE1BQUE7SUFDbkIsSUFBSSxDQUFDK0YsZ0JBQWdCLEdBQUcsSUFBSXZLLHNFQUFnQixDQUFDO01BQ3pDd0QsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQm5DLGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWE7TUFDakMrQyxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUdILE9BQU8sRUFBRXhDLEdBQUcsRUFBSztRQUFFO1FBQ2hDLElBQUkrQyxNQUFJLENBQUN1RSxzQkFBc0IsRUFBRTtVQUM3QixPQUFPdkUsTUFBSSxDQUFDdUUsc0JBQXNCLENBQUNyQyxXQUFXLENBQUN6QyxPQUFPLEVBQUV4QyxHQUFHLENBQUM7UUFDaEU7UUFFQWYsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM4SixJQUFJLENBQUN2RyxPQUFPLENBQUNkLGNBQWMsQ0FBQztRQUU1RCxJQUFJcUIsTUFBSSxDQUFDMEQsU0FBUyxFQUFFO1VBQ2hCMUQsTUFBSSxDQUFDMEQsU0FBUyxDQUFDdUMsTUFBTSxDQUFDLENBQUM7UUFDM0I7UUFFQXhELGtFQUFnQixDQUFDLENBQUM7UUFFbEJ2RyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnSyxjQUFjLENBQUMsY0FBYyxDQUFDOztRQUV4QztRQUNBbkQsNkVBQW1CLENBQUMsQ0FBQztNQUN6QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXRGLE1BQUEsQ0FFRDJHLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUFBLElBQUErQixNQUFBO0lBQ2hCLElBQUFDLHFCQUFBLEdBTUksSUFBSSxDQUFDaEQsb0JBQW9CO01BTEhpRCxlQUFlLEdBQUFELHFCQUFBLENBQXJDRSxvQkFBb0I7TUFDRUMsZUFBZSxHQUFBSCxxQkFBQSxDQUFyQ0ksb0JBQW9CO01BQ0dDLGtCQUFrQixHQUFBTCxxQkFBQSxDQUF6Q00scUJBQXFCO01BQ0VDLGtCQUFrQixHQUFBUCxxQkFBQSxDQUF6Q1EscUJBQXFCO01BQ0FDLGNBQWMsR0FBQVQscUJBQUEsQ0FBbkNVLG1CQUFtQjtJQUV2QixJQUFNL0Msd0JBQXdCLEdBQUc3SCxDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFDaEUsSUFBTTZLLHVCQUF1QixHQUFHN0ssQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzlELElBQU04SyxlQUFlLEdBQUcsSUFBSSxDQUFDaEksT0FBTyxDQUFDMkYsdUJBQXVCO0lBQzVELElBQU1sRyxjQUFjLEdBQUc7TUFDbkJJLE1BQU0sRUFBRTtRQUNKQyxRQUFRLEVBQUU7VUFDTkMsYUFBYSxFQUFFLElBQUk7VUFDbkIwRixRQUFRLEVBQUU7WUFDTkMsS0FBSyxFQUFFc0M7VUFDWDtRQUNKO01BQ0osQ0FBQztNQUNEdEksUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSwwQkFBMEI7UUFDMUNDLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDRFMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQ3hDLGFBQWEsR0FBRyxJQUFJMEYsOERBQWEsQ0FBQzlELGNBQWMsRUFBRSxVQUFDZ0IsT0FBTyxFQUFFeEMsR0FBRyxFQUFLO01BQUU7TUFDdkU7TUFDQSxJQUFJa0osTUFBSSxDQUFDaEMscUJBQXFCLEVBQUU7UUFDNUIsT0FBT2dDLE1BQUksQ0FBQ2hDLHFCQUFxQixDQUFDakMsV0FBVyxDQUFDekMsT0FBTyxFQUFFeEMsR0FBRyxDQUFDO01BQy9EO01BRUE4Ryx3QkFBd0IsQ0FBQ2lDLElBQUksQ0FBQ3ZHLE9BQU8sQ0FBQ2QsY0FBYyxDQUFDO01BQ3JEb0ksdUJBQXVCLENBQUNmLElBQUksQ0FBQ3ZHLE9BQU8sQ0FBQ2IsT0FBTyxDQUFDOztNQUU3QztNQUNBLElBQUl1SCxNQUFJLENBQUN6QyxTQUFTLEVBQUU7UUFDaEJ5QyxNQUFJLENBQUN6QyxTQUFTLENBQUN1QyxNQUFNLENBQUMsQ0FBQztNQUMzQjtNQUVBL0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0ssY0FBYyxDQUFDLGNBQWMsQ0FBQzs7TUFFeEM7TUFDQW5ELDZFQUFtQixDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFFO01BQ0NrRSx1QkFBdUIsRUFBRTtRQUNyQlosZUFBZSxFQUFmQSxlQUFlO1FBQ2ZFLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGNBQWMsRUFBZEE7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBNUQsUUFBQTtBQUFBLEVBek5pQ1osZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zZWFyY2gtaW4tY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW5DYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIFNob3VsZCBiZSBjb25zdHJ1Y3RlZCBhZnRlciBGYWNldGVkU2VhcmNoIG9iamVjdCBjb25zdHJ1Y3RlZFxuICAgICAqIHNvIHRoYXQgRmFjZXRlZFNlYXJjaCBgc3RhdGVjaGFuZ2VgIGV2ZW50IGNhbGxiYWNrIGNhbiBiZSBleGVjdXRlZC5cbiAgICAgKlxuICAgICAqIGBvcHRpb25zYCBpbmNsdWRlczpcbiAgICAgKiAtIChvYmplY3QpIGBjb250ZXh0YDogZnJvbSBQYWdlTWFuYWdlci5jb250ZXh0LlxuICAgICAqIC0gKG9iamVjdCkgYGZhY2V0ZWRTZWFyY2hgXG4gICAgICogLSAoZnVuY3Rpb24pIGBzZWFyY2hDYWxsYmFja2A6IGNhbGxiYWNrIHRvIHJlLXJlbmRlciBzZWFyY2ggcmVzdWx0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VhcmNoLWluLWNhdGVnb3J5IGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMuZG9TZWFyY2ggPSBkZWJvdW5jZSh0aGlzLmRvU2VhcmNoLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRm9ybVN1Ym1pdCA9IHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhciA9IHRoaXMub25DbGVhci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy4kaW5wdXQgPSAkKCdbZGF0YS1zZWFyY2gtaW4tY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRpbnB1dC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIHRoaXMuJGNsZWFyID0gdGhpcy4kZm9ybS5maW5kKCdbZGF0YS1jbGVhcl0nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmZhY2V0ZWRTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoLnVwZGF0ZVZpZXdDYWxsYmFjayA9IHRoaXMudXBkYXRlVmlld0ZhY2V0ZWRTZWFyY2guYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh1cmxVdGlscy5nZXRVcmwoKSwgdHJ1ZSk7XG4gICAgICAgIGlmICh1cmwucXVlcnkucSkge1xuICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKHVybC5xdWVyeS5xKTtcbiAgICAgICAgICAgIHRoaXMuJGNsZWFyLnNob3coKTtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlYXJjaC1pbi1jYXRlZ29yeSBkZXN0cm95Jyk7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kaW5wdXQub24oJ2lucHV0JywgdGhpcy5vbklucHV0KTtcbiAgICAgICAgdGhpcy4kZm9ybS5vbignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQpO1xuICAgICAgICB0aGlzLiRjbGVhci5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXIpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGlucHV0Lm9mZignaW5wdXQnLCB0aGlzLm9uSW5wdXQpO1xuICAgICAgICB0aGlzLiRmb3JtLm9mZignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQpO1xuICAgICAgICB0aGlzLiRjbGVhci5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIG9uRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2xlYXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy4kY2xlYXIuaGlkZSgpO1xuICAgICAgICB0aGlzLiRpbnB1dC52YWwoJycpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgfVxuXG4gICAgb25JbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLmRvU2VhcmNoKCQoZXZlbnQudGFyZ2V0KS52YWwoKSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlYXJjaC1pbi1jYXRlZ29yeSBzdGF0ZWNoYW5nZScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvblVybCA9IHVybFV0aWxzLmdldFVybCgpOyAvLyBwYXBhdGhlbWVzOiBpbmZpbml0ZSBzY3JvbGwgKyBzZWFyY2ggaW4gY2F0ZWdvcnkgY29tcGF0aWJpbGl0eVxuICAgICAgICBsZXQgc2VhcmNoVXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZShzZWFyY2hVcmwsIHRydWUpO1xuICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHVybC5xdWVyeS5zZWFyY2hfcXVlcnkgfHwgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeV9hZHYgfHwgdXJsLnF1ZXJ5LnE7XG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeV9hZHYgPSBzZWFyY2hRdWVyeTtcblxuICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5zZWFyY2hfcXVlcnk7XG4gICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnE7XG4gICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LmNhdGVnb3J5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRleHQuY2F0ZWdvcnlJZCkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVsnY2F0ZWdvcnlbXSddID0gdGhpcy5vcHRpb25zLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnY2F0ZWdvcnlbXSddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRleHQuY2F0ZWdvcnlwYWdlX3NlYXJjaF9zdWJzKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5LnNlYXJjaHN1YnMgPSAnT04nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWFyY2hVcmwgPSBgL3NlYXJjaC5waHA/JHt1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSl9YDtcblxuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzdXBlcm1hcmtldC9zZWFyY2gtaW4tY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogJ3N1cGVybWFya2V0L3NlYXJjaC1pbi1jYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZm9ybS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZXJlcXVlc3Quc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHNlYXJjaFVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGZvcm0ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZXVwZGF0ZS5zZWFyY2hpbmNhdGVnb3J5Jyk7XG5cbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIHRoaXMub3B0aW9ucy5zZWFyY2hDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWFyY2hDYWxsYmFjayhjb250ZW50LCBsb2NhdGlvblVybCk7IC8vIHBhcGF0aGVtZXM6IGluZmluaXRlIHNjcm9sbCArIHNlYXJjaCBpbiBjYXRlZ29yeSBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYWZ0ZXJ1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb1NlYXJjaChzZWFyY2hRdWVyeSkge1xuICAgICAgICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZW1vdmVQYXJhbXModXJsVXRpbHMuZ2V0VXJsKCksIFsncScsICdzZWFyY2hfcXVlcnknLCAnc2VhcmNoX3F1ZXJ5X2FkdicsICdjYXRlZ29yeScsICdwYWdlJ10pO1xuICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5zaG93KCk7XG4gICAgICAgICAgICBsZXQgdXJsID0gdXJsVXRpbHMucmVtb3ZlUGFyYW1zKHVybFV0aWxzLmdldFVybCgpLCBbJ3EnLCAnc2VhcmNoX3F1ZXJ5JywgJ3NlYXJjaF9xdWVyeV9hZHYnLCAncGFnZSddKTtcbiAgICAgICAgICAgIHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXModXJsLCB7IHE6IHNlYXJjaFF1ZXJ5IH0pO1xuICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVmlld0ZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ZWRTZWFyY2ggPSB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaDtcbiAgICAgICAgY29uc3QgbG9jYXRpb25VcmwgPSB1cmxVdGlscy5nZXRVcmwoKTsgLy8gcGFwYXRoZW1lczogaW5maW5pdGUgc2Nyb2xsICsgc2VhcmNoIGluIGNhdGVnb3J5IGNvbXBhdGliaWxpdHlcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gZmFjZXRlZFNlYXJjaC5yZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHJlcXVlc3RVcmwsIHRydWUpO1xuICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHVybC5xdWVyeS5xIHx8IHVybC5xdWVyeS5zZWFyY2hfcXVlcnk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIFVSTCBpcyAnQ2xlYXIgQWxsJywgdGhlbiBjbGVhciB0aGUgc2VhcmNoIHF1ZXJ5IGFzIHdlbGxcbiAgICAgICAgY29uc3Qgc3RkUGFyYW1zID0gWydfYmNfZnNuZicsICdzZWFyY2hfcXVlcnknLCAncScsICdzb3J0JywgJ2xpbWl0JywgJ21vZGUnLCAncGFnZSddO1xuICAgICAgICBjb25zdCBmaWx0ZXJQYXJhbXMgPSBPYmplY3Qua2V5cyh1cmwucXVlcnkpLmZpbHRlcihrZXkgPT4gc3RkUGFyYW1zLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgICBjb25zdCBpc0NsZWFyQWxsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NlYXJjaC5waHAnICYmIGZpbHRlclBhcmFtcy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKGlzQ2xlYXJBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsVXRpbHMucmVtb3ZlUGFyYW1zKHJlcXVlc3RVcmwsIFsuLi5maWx0ZXJQYXJhbXMsICdzZWFyY2hfcXVlcnknLCAncScsICdfYmNfZnNuZiddKS5yZXBsYWNlKCcvc2VhcmNoLnBocCcsIHRoaXMub3JpZ2luYWxQYXRobmFtZSk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCByZXF1ZXN0VXJsKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgICAgICAgLy8gU2hvdyBuaWNlIFVSTCBvbiB0aGUgbG9jYXRpb24gYmFyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NlYXJjaC5waHAnKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5LnEgPSBzZWFyY2hRdWVyeTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHVybC5xdWVyeS5jYXRlZ29yeSkgPT09IHRoaXMub3B0aW9ucy5jb250ZXh0LmNhdGVnb3J5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgYCR7dGhpcy5vcmlnaW5hbFBhdGhuYW1lfT8ke3VybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5xO1xuICAgICAgICAgICAgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeSA9IHNlYXJjaFF1ZXJ5O1xuICAgICAgICAgICAgaWYgKCF1cmwucXVlcnkuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnkuY2F0ZWdvcnkgPSB0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gYC9zZWFyY2gucGhwPyR7dXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpfWA7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3N1cGVybWFya2V0L3NlYXJjaC1pbi1jYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc3VwZXJtYXJrZXQvc2VhcmNoLWluLWNhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRpbnB1dC52YWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmYWNldGVkU2VhcmNoLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG4gICAgICAgIHRoaXMuJGZvcm0uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZXJlcXVlc3Quc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHJlcXVlc3RVcmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7IC8vIFN1cGVybWFya2V0IE1PRFxuICAgICAgICAgICAgJChmYWNldGVkU2VhcmNoLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQ/LnNpZGViYXIpIHtcbiAgICAgICAgICAgICAgICAvLyBGYWNldGVkIGFjY29yZGlvbnMgYmVmb3JlIHVwZGF0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdBY2NvcmRpb25UYXJnZXRJZCA9ICQoZmFjZXRlZFNlYXJjaC5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk/LnRhcmdldElkKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbGxhcHNlIGFsbCBuZXcgZmFjZXRlZCBhY2NvcmRpb25zIGlmIGl0J3Mgbm90IG9wZW5lZCBieSBkZWZhdWx0XG4gICAgICAgICAgICAgICAgLy8gKEZpeCBjYXRlZ29yeSBmYWNldGVkIGFjY29yZGlvbiBvcGVuZWQgYWZ0ZXIgc2VhcmNoaW5nIGluIGNhdGVnb3J5IHBhZ2UgZnVsbHdpZHRoIGxheW91dClcbiAgICAgICAgICAgICAgICAkKGNvbnRlbnQuc2lkZWJhcikuZmluZChmYWNldGVkU2VhcmNoLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICRlbC5kYXRhKCdjb2xsYXBzaWJsZScpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWwubm90KCcuaXMtb3BlbicpICYmICFleGlzdGluZ0FjY29yZGlvblRhcmdldElkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRlZFNlYXJjaC5jb2xsYXBzZWRGYWNldHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmV1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaC5yZWZyZXNoVmlldyhjb250ZW50LCBsb2NhdGlvblVybCk7IC8vIHBhcGF0aGVtZXM6IGluZmluaXRlIHNjcm9sbCArIHNlYXJjaCBpbiBjYXRlZ29yeSBjb21wYXRpYmlsaXR5XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYWZ0ZXJ1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuLy8gU3VwZXJtYXJrZXQgTW9kXG4vLyBpbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuLi9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbi8vIGltcG9ydCB7IGF1dG9FeHBhbmRDYXRlZ29yeU1lbnUgfSBmcm9tICcuLi9wYXBhdGhlbWVzL3RoZW1lLXV0aWxzJzsgLy8gU3VwZXJtYXJrZXRcbmltcG9ydCBidWxrT3JkZXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYnVsay1vcmRlcic7XG5pbXBvcnQgU2VhcmNoSW5DYXRlZ29yeSBmcm9tICcuLi9wYXBhdGhlbWVzL3NlYXJjaC1pbi1jYXRlZ29yeSc7XG5pbXBvcnQgaW5pdFNob3BCeVByaWNlU2xpZGVyIGZyb20gJy4uL2JlYXV0aWZ5L3Nob3AtYnktcHJpY2Utc2xpZGVyJztcbmltcG9ydCB7IFN0YW5kYXJkSW5maW5pdGVTY3JvbGwsIEZhY2V0ZWRJbmZpbml0ZVNjcm9sbCB9IGZyb20gJy4uL3BhcGF0aGVtZXMvZmFjZXRlZC1pbmZpbml0ZS1zY3JvbGwnOyAvLyBDaGlhcmFcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XG5pbXBvcnQgeyBzY3JvbGxUb1RvcFByb2R1Y3RzIH0gZnJvbSAnLi4vcGFwYXRoZW1lcy90aGVtZS11dGlscyc7IC8vIHBhcGF0aGVtZXMta2l0Y2hlbmFyeVxuXG5jb25zdCBsYXJnZU1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KCdsYXJnZScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIENoaWFyYTogaW5maW5pdGUgc2Nyb2xsXG4gICAgICAgIGNvbnN0IGVuYWJsZUluZmluaXRlU2Nyb2xsID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKS5kYXRhKCdjYXRlZ29yeUluZmluaXRlU2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhdGVnb3J5IG9uUmVhZHknKTtcbiAgICAgICAgLy8gYXV0b0V4cGFuZENhdGVnb3J5TWVudSh0aGlzLmNvbnRleHQpOyAvLyBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQgJiYgKHRoaXMuY29udGV4dC5zaG93X2J1bGtfb3JkZXJfbW9kZSB8fCB0aGlzLmNvbnRleHQudXNlQnVsa09yZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIgPSBidWxrT3JkZXJGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBlcm1hcmtldCBNb2RcbiAgICAgICAgLy8gY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lczogaW5maW5pdGUgc2Nyb2xsXG4gICAgICAgIGNvbnN0IGluZmluaXRlU2Nyb2xsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGJ1bGtPcmRlcjogdGhpcy5idWxrT3JkZXIsXG4gICAgICAgICAgICBlbmFibGVJbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgICAgIHR4dExvYWRNb3JlOiB0aGlzLmNvbnRleHQudHh0TG9hZE1vcmUsXG4gICAgICAgICAgICBpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYzogKCRwYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpID0+ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcucHJvZHVjdEdyaWQnKS5iZWZvcmUoJHBhZ2luYXRpb24pLFxuICAgICAgICAgICAgaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmM6ICgkcGFnaW5hdGlvbiwgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKSA9PiAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnLnByb2R1Y3RHcmlkJykuYWZ0ZXIoJHBhZ2luYXRpb24pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgICAgICBpZiAoZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2V0ZWRJbmZpbml0ZVNjcm9sbCA9IG5ldyBGYWNldGVkSW5maW5pdGVTY3JvbGwoaW5maW5pdGVTY3JvbGxPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGluaXRTaG9wQnlQcmljZVNsaWRlcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jYXRlZ29yeXBhZ2Vfc2VhcmNoID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ2FmdGVydXBkYXRlLnNlYXJjaGluY2F0ZWdvcnknLCAoKSA9PiBpbml0U2hvcEJ5UHJpY2VTbGlkZXIoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIHN0YW5kYXJkIGNhdGVnb3J5IHBhZ2Ugd2l0aG91dCBmYWNldGVkIGZpbHRlcnNcbiAgICAgICAgICAgIGlmIChlbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRhcmRJbmZpbml0ZVNjcm9sbCA9IG5ldyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAuLi5pbmZpbml0ZVNjcm9sbE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICAgICAgYWN0aW9uQmFyRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2F0ZWdvcnlwYWdlX3NlYXJjaCA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRTZWFyY2hJbkNhdGVnb3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICQoJyNjYXRlZ29yaWVzLW5hdkxpc3QgLm5hdkxpc3QtYWN0aW9uLS1jaGVja2JveCcpLm9uKCdjbGljaycsIGV2ZW50ID0+ICQoZXZlbnQudGFyZ2V0KS50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKSk7XG4gICAgICAgICQoJyNzdWJDYXRlZ29yaWVzLWxvYWRNb3JlJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRidG4gPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHRleHRTaG93bW9yZSA9ICRidG4uZGF0YSgnc2hvdy1tb3JlJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0U2hvd0xlc3MgPSAkYnRuLmRhdGEoJ3Nob3ctbGVzcycpO1xuICAgICAgICAgICAgaWYgKCRidG4uaGFzQ2xhc3MoJ19zaG93TW9yZS1vZmYnKSkge1xuICAgICAgICAgICAgICAgICRidG5cbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdfc2hvd01vcmUtb2ZmJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHQodGV4dFNob3dMZXNzKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1sYWJlbCcsIHRleHRTaG93TGVzcylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuc3ViQ2F0ZWdvcmllcy1saXN0JykudG9nZ2xlQ2xhc3MoJ19zaG93TW9yZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkYnRuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnX3Nob3dNb3JlLW9mZicpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KHRleHRTaG93bW9yZSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtbGFiZWwnLCB0ZXh0U2hvd21vcmUpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLnN1YkNhdGVnb3JpZXMtbGlzdCcpLnRvZ2dsZUNsYXNzKCdfc2hvd01vcmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGhpZGVBY3Rpb25Ob3RDaGVja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RGaWx0ZXIgPSAkKCcjcGFwYXRoZW1lcy1wcm9kdWN0c0ZpbHRlci1mb3JtJyk7XG4gICAgICAgICAgICBpZiAoIWxhcmdlTWVkaWFRdWVyeUxpc3QubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvJywgJHByb2R1Y3RGaWx0ZXIpLmVhY2goKGluZGV4LCBjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChjaGVja2JveCkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChjaGVja2JveCkuYXR0cignaWQnKSA9PT0gJ21vZGVfMV9tYWluJyB8fCAkKGNoZWNrYm94KS5hdHRyKCdpZCcpID09PSAnbW9kZV8yX21haW4nIHx8ICQoY2hlY2tib3gpLmF0dHIoJ2lkJykgPT09ICdtb2RlX2JvX21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yYWRpb1t2YWx1ZT1cIjJcIl0gKyBsYWJlbC5mb3JtLW9wdGlvbicsICRwcm9kdWN0RmlsdGVyKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWZsZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdICsgbGFiZWwuZm9ybS1vcHRpb24nLCAkcHJvZHVjdEZpbHRlcikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvJywgJHByb2R1Y3RGaWx0ZXIpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ2hlY2tlZCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNoZWNrZWQuYXR0cignaWQnKSA9PT0gJ21vZGVfMV9tYWluJyB8fCBpdGVtQ2hlY2tlZC5hdHRyKCdpZCcpID09PSAnbW9kZV8yX21haW4nIHx8IGl0ZW1DaGVja2VkLmF0dHIoJ2lkJykgPT09ICdtb2RlX2JvX21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yYWRpb1t2YWx1ZT1cIjJcIl0nLCAkcHJvZHVjdEZpbHRlcikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdICsgbGFiZWwuZm9ybS1vcHRpb24nLCAkcHJvZHVjdEZpbHRlcikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1mbGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yYWRpb1t2YWx1ZT1cIjJcIl0gKyBsYWJlbC5mb3JtLW9wdGlvbicsICRwcm9kdWN0RmlsdGVyKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWZsZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoaWRlQWN0aW9uTm90Q2hlY2tlZCgpO1xuICAgICAgICBsYXJnZU1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKGhpZGVBY3Rpb25Ob3RDaGVja2VkKTtcbiAgICB9XG5cbiAgICAvLyBTdXBlcm1hcmtldFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEluQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5DYXRlZ29yeS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFjZXRlZFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBpbml0U2VhcmNoSW5DYXRlZ29yeSgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hJbkNhdGVnb3J5ID0gbmV3IFNlYXJjaEluQ2F0ZWdvcnkoe1xuICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaDogdGhpcy5mYWNldGVkU2VhcmNoLFxuICAgICAgICAgICAgc2VhcmNoQ2FsbGJhY2s6IChjb250ZW50LCB1cmwpID0+IHsgLy8gcGFwYXRoZW1lczogaW5maW5pdGUgc2Nyb2xsICsgc2VhcmNoIGluIGNhdGVnb3J5IGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFuZGFyZEluZmluaXRlU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkSW5maW5pdGVTY3JvbGwucmVmcmVzaFZpZXcoY29udGVudCwgdXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIucmVpbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyRmFjdG9yeSgpO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgICAgIC8vIGtpdGNoZW5hcnk6IHNjcm9sbCB0byB0b3Agb2YgcHJvZHVjdCBsaXN0aW5nXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9Ub3BQcm9kdWN0cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50LCB1cmwpID0+IHsgLy8gY2hpYXJhIG1vZFxuICAgICAgICAgICAgLy8gQ2hpYXJhOiBJbmZpbml0ZSBTY3JvbGwgbW9kXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNldGVkSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mYWNldGVkSW5maW5pdGVTY3JvbGwucmVmcmVzaFZpZXcoY29udGVudCwgdXJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGtPcmRlci5yZWluaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgLy8ga2l0Y2hlbmFyeTogc2Nyb2xsIHRvIHRvcCBvZiBwcm9kdWN0IGxpc3RpbmdcbiAgICAgICAgICAgIHNjcm9sbFRvVG9wUHJvZHVjdHMoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiYXBpIiwiVXJsIiwidXJsVXRpbHMiLCJTZWFyY2hJbkNhdGVnb3J5Iiwib3B0aW9ucyIsImRvU2VhcmNoIiwiX2RlYm91bmNlIiwiYmluZCIsIm9uSW5wdXQiLCJvbkZvcm1TdWJtaXQiLCJvbkNsZWFyIiwib25TdGF0ZUNoYW5nZSIsIiRib2R5IiwiJCIsIiRpbnB1dCIsIiRmb3JtIiwiY2xvc2VzdCIsIiRjbGVhciIsImZpbmQiLCJoaWRlIiwib3JpZ2luYWxQYXRobmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmYWNldGVkU2VhcmNoIiwidXBkYXRlVmlld0NhbGxiYWNrIiwidXBkYXRlVmlld0ZhY2V0ZWRTZWFyY2giLCJiaW5kRXZlbnRzIiwidXJsIiwicGFyc2UiLCJnZXRVcmwiLCJxdWVyeSIsInEiLCJ2YWwiLCJzaG93IiwidHJpZ2dlciIsIl9wcm90byIsInByb3RvdHlwZSIsImRlc3Ryb3kiLCJ1bmJpbmRFdmVudHMiLCJvbiIsImxlbmd0aCIsIm9mZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJfdGhpcyIsImxvY2F0aW9uVXJsIiwic2VhcmNoVXJsIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hfcXVlcnkiLCJzZWFyY2hfcXVlcnlfYWR2IiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsImNvbnRleHQiLCJjYXRlZ29yeUlkIiwiY2F0ZWdvcnlwYWdlX3NlYXJjaF9zdWJzIiwic2VhcmNoc3VicyIsImJ1aWxkUXVlcnlTdHJpbmciLCJzaG93TW9yZSIsImFkZENsYXNzIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJyZW1vdmVDbGFzcyIsIkVycm9yIiwic2VhcmNoQ2FsbGJhY2siLCJyZW1vdmVQYXJhbXMiLCJnb1RvVXJsIiwicmVwbGFjZVBhcmFtcyIsIl90aGlzMiIsInJlcXVlc3RVcmwiLCJzdGRQYXJhbXMiLCJmaWx0ZXJQYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwiaW5kZXhPZiIsImlzQ2xlYXJBbGwiLCJjb25jYXQiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJOdW1iZXIiLCJibG9ja2VyU2VsZWN0b3IiLCJleGlzdGluZ0FjY29yZGlvblRhcmdldElkIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJnZXQiLCJtYXAiLCJlbCIsIl8kJGRhdGEiLCJkYXRhIiwidGFyZ2V0SWQiLCJpZCIsImVhY2giLCJpIiwiJGVsIiwibm90IiwiaW5jbHVkZXMiLCJjb2xsYXBzZWRGYWNldHMiLCJwdXNoIiwicmVmcmVzaFZpZXciLCJkZWZhdWx0IiwiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJhY3Rpb25CYXJGYWN0b3J5IiwiYnVsa09yZGVyRmFjdG9yeSIsImluaXRTaG9wQnlQcmljZVNsaWRlciIsIlN0YW5kYXJkSW5maW5pdGVTY3JvbGwiLCJGYWNldGVkSW5maW5pdGVTY3JvbGwiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJzY3JvbGxUb1RvcFByb2R1Y3RzIiwibGFyZ2VNZWRpYVF1ZXJ5TGlzdCIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX2luaGVyaXRzTG9vc2UiLCJvblJlYWR5IiwiZW5hYmxlSW5maW5pdGVTY3JvbGwiLCJzaG93X2J1bGtfb3JkZXJfbW9kZSIsInVzZUJ1bGtPcmRlciIsImJ1bGtPcmRlciIsImluZmluaXRlU2Nyb2xsT3B0aW9ucyIsInR4dExvYWRNb3JlIiwiaW5zZXJ0VG9wUGFnaW5hdGlvbkZ1bmMiLCIkcGFnaW5hdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsImJlZm9yZSIsImluc2VydEJvdHRvbVBhZ2luYXRpb25GdW5jIiwiYWZ0ZXIiLCJmYWNldGVkSW5maW5pdGVTY3JvbGwiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiY2F0ZWdvcnlwYWdlX3NlYXJjaCIsInN0YW5kYXJkSW5maW5pdGVTY3JvbGwiLCJhc3NpZ24iLCJwcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJpbml0U2VhcmNoSW5DYXRlZ29yeSIsInRvZ2dsZUNsYXNzIiwiZSIsIiRidG4iLCJ0ZXh0U2hvd21vcmUiLCJ0ZXh0U2hvd0xlc3MiLCJoYXNDbGFzcyIsInRleHQiLCJhdHRyIiwic2libGluZ3MiLCJoaWRlQWN0aW9uTm90Q2hlY2tlZCIsIiRwcm9kdWN0RmlsdGVyIiwibWF0Y2hlcyIsImluZGV4IiwiY2hlY2tib3giLCJwcm9wIiwiY3NzIiwiaXRlbUNoZWNrZWQiLCJhZGRMaXN0ZW5lciIsInNlYXJjaEluQ2F0ZWdvcnkiLCJodG1sIiwicmVpbml0IiwidHJpZ2dlckhhbmRsZXIiLCJfdGhpczMiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=
