"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
/* harmony import */ var _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../papathemes/faceted-infinite-scroll */ "./assets/js/papathemes/faceted-infinite-scroll.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




// Supermarket Mod
// import compareProducts from './global/compare-products';






 // Papathemes - Supermarket

 // Chiara
 // papathemes-kitchenary
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this2 = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this2.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    // Supermarket Mod
    // compareProducts(this.context.urls);
    (0,_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    var enableInfiniteScroll = $('#product-listing-container').data('searchInfiniteScroll');
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = (0,_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);
    }
    (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Papathemes - Supermarket

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

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      // Chiara: init infinite scroll for faceted search
      if (enableInfiniteScroll) {
        this.facetedInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__.FacetedInfiniteScroll(infiniteScrollOptions);
      }
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Chiara: init infinite scroll for standard category page without faceted filters
      if (enableInfiniteScroll) {
        this.standardInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__.StandardInfiniteScroll(Object.assign({
          requestOptions: {
            config: {
              product_results: {
                limit: this.context.searchProductsPerPage
              }
            },
            template: 'search/product-listing'
          }
        }, infiniteScrollOptions));
      }
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this3.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this3.showContent();
    });
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this3.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }

      // Stop from submission
      event.preventDefault();

      // Clear empty fields
      var params = $searchForm.serializeArray().filter(function (param) {
        return param.value;
      });
      var query = params.map(function (param) {
        return param.name + "=" + param.value;
      }).join('&');
      var searchUrl = ($searchForm.attr('action') || url.pathname).concat(query ? "?" + query : '');

      // Redirect to the search results page
      window.location = searchUrl;
    });
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.off('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this4 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this4.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this5 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this5.categoryTreeData);
          } else {
            // Lazy loaded children
            _this5.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);

    // papathemes-beautify: fix accessibility
    $container.on('ready.jstree, redraw.jstree', function () {
      return $container.find('.jstree-node').removeAttr('aria-selected');
    });
    $container.on('changed.jstree', function (event, node) {
      if (node.event) {
        $(node.event.currentTarget.closest('.jstree-node')).removeAttr('aria-selected');
      }
    });
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this6 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content, url) {
      // Chiara: Infinite Scroll mod
      if (_this6.facetedInfiniteScroll) {
        return _this6.facetedInfiniteScroll.refreshView(content, url, _this6.context);
      }
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      $productListingContainer.find('img[data-no-img]').attr('src', "" + _this6.context.defaultProductImage);
      $('body').triggerHandler('compareReset');

      // Papathemes - Bulk Order
      if (_this6.bulkOrder) {
        _this6.bulkOrder.reinit();
      }

      // kitchenary: scroll to top of product listing
      (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_13__.scrollToTopProducts)();
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
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ2dCO0FBQ21DO0FBQ3ZGO0FBQ0E7QUFDNkQ7QUFDYjtBQUMxQjtBQUNnQztBQUN0QztBQUNlO0FBQ3lCLENBQUM7QUFDRDtBQUM4QyxDQUFDO0FBQ3ZDLENBQUM7QUFBQSxJQUU1Q2MsTUFBTSwwQkFBQUMsWUFBQTtFQUN2QixTQUFBRCxPQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR2hCLG1HQUEyQixDQUFDYSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sTUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxNQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNm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RUFBRUosUUFBUSxDQUFDbkosSUFBSSxDQUFDLGNBQWM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQUFQLE1BQUEsQ0FFRDZFLEtBQUssR0FBTCxTQUFBQSxLQUFLQSxDQUFBLEVBQUc7SUFDSixJQUFJLElBQUksQ0FBQ1QsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDMkYsWUFBWSxDQUFDLENBQUM7TUFDN0IsT0FBTyxJQUFJLENBQUMzRixTQUFTLENBQUM0RixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3pDO0lBRUEsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQSxPQUFBdkssTUFBQTtBQUFBLEVBcFYrQmIsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbmltcG9ydCBidWxrT3JkZXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYnVsay1vcmRlcic7XG5pbXBvcnQgeyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsLCBGYWNldGVkSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuLi9wYXBhdGhlbWVzL2ZhY2V0ZWQtaW5maW5pdGUtc2Nyb2xsJzsgLy8gQ2hpYXJhXG5pbXBvcnQgeyBzY3JvbGxUb1RvcFByb2R1Y3RzIH0gZnJvbSAnLi4vcGFwYXRoZW1lcy90aGVtZS11dGlscyc7IC8vIHBhcGF0aGVtZXMta2l0Y2hlbmFyeVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAncHJvZHVjdCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAnY29udGVudCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIFN1cGVybWFya2V0IE1vZFxuICAgICAgICAvLyBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBjb25zdCBlbmFibGVJbmZpbml0ZVNjcm9sbCA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuZGF0YSgnc2VhcmNoSW5maW5pdGVTY3JvbGwnKTtcblxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQgJiYgKHRoaXMuY29udGV4dC5zaG93X2J1bGtfb3JkZXJfbW9kZSB8fCB0aGlzLmNvbnRleHQudXNlQnVsa09yZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIgPSBidWxrT3JkZXJGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3Rpb25CYXJGYWN0b3J5KCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIFBhcGF0aGVtZXM6IGluZmluaXRlIHNjcm9sbFxuICAgICAgICBjb25zdCBpbmZpbml0ZVNjcm9sbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBidWxrT3JkZXI6IHRoaXMuYnVsa09yZGVyLFxuICAgICAgICAgICAgZW5hYmxlSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICB0eHRMb2FkTW9yZTogdGhpcy5jb250ZXh0LnR4dExvYWRNb3JlLFxuICAgICAgICAgICAgaW5zZXJ0VG9wUGFnaW5hdGlvbkZ1bmM6ICgkcGFnaW5hdGlvbiwgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKSA9PiAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnLnByb2R1Y3RHcmlkJykuYmVmb3JlKCRwYWdpbmF0aW9uKSxcbiAgICAgICAgICAgIGluc2VydEJvdHRvbVBhZ2luYXRpb25GdW5jOiAoJHBhZ2luYXRpb24sICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lcikgPT4gJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJy5wcm9kdWN0R3JpZCcpLmFmdGVyKCRwYWdpbmF0aW9uKSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgICAgICBpZiAoZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2V0ZWRJbmZpbml0ZVNjcm9sbCA9IG5ldyBGYWNldGVkSW5maW5pdGVTY3JvbGwoaW5maW5pdGVTY3JvbGxPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIHN0YW5kYXJkIGNhdGVnb3J5IHBhZ2Ugd2l0aG91dCBmYWNldGVkIGZpbHRlcnNcbiAgICAgICAgICAgIGlmIChlbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRhcmRJbmZpbml0ZVNjcm9sbCA9IG5ldyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnc2VhcmNoL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmluZmluaXRlU2Nyb2xsT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RvcCBmcm9tIHN1Ym1pc3Npb25cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIGVtcHR5IGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gJHNlYXJjaEZvcm0uc2VyaWFsaXplQXJyYXkoKS5maWx0ZXIocGFyYW0gPT4gcGFyYW0udmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwYXJhbXMubWFwKHBhcmFtID0+IGAke3BhcmFtLm5hbWV9PSR7cGFyYW0udmFsdWV9YCkuam9pbignJicpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVXJsID0gKCRzZWFyY2hGb3JtLmF0dHIoJ2FjdGlvbicpIHx8IHVybC5wYXRobmFtZSkuY29uY2F0KHF1ZXJ5ID8gYD8ke3F1ZXJ5fWAgOiAnJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBzZWFyY2ggcmVzdWx0cyBwYWdlXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBzZWFyY2hVcmw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmFjZXRlZFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeTogZml4IGFjY2Vzc2liaWxpdHlcbiAgICAgICAgJGNvbnRhaW5lci5vbigncmVhZHkuanN0cmVlLCByZWRyYXcuanN0cmVlJywgKCkgPT4gJGNvbnRhaW5lci5maW5kKCcuanN0cmVlLW5vZGUnKS5yZW1vdmVBdHRyKCdhcmlhLXNlbGVjdGVkJykpO1xuICAgICAgICAkY29udGFpbmVyLm9uKCdjaGFuZ2VkLmpzdHJlZScsIChldmVudCwgbm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkKG5vZGUuZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcuanN0cmVlLW5vZGUnKSkucmVtb3ZlQXR0cignYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQsIHVybCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2hpYXJhOiBJbmZpbml0ZSBTY3JvbGwgbW9kXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNldGVkSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mYWNldGVkSW5maW5pdGVTY3JvbGwucmVmcmVzaFZpZXcoY29udGVudCwgdXJsLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcbiAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcblxuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2ltZ1tkYXRhLW5vLWltZ10nKS5hdHRyKCdzcmMnLCBgJHt0aGlzLmNvbnRleHQuZGVmYXVsdFByb2R1Y3RJbWFnZX1gKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEJ1bGsgT3JkZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGtPcmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyLnJlaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBraXRjaGVuYXJ5OiBzY3JvbGwgdG8gdG9wIG9mIHByb2R1Y3QgbGlzdGluZ1xuICAgICAgICAgICAgc2Nyb2xsVG9Ub3BQcm9kdWN0cygpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiY29tcGFyZVByb2R1Y3RzIiwidXJsVXRpbHMiLCJVcmwiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJub2QiLCJhY3Rpb25CYXJGYWN0b3J5IiwiYnVsa09yZGVyRmFjdG9yeSIsIlN0YW5kYXJkSW5maW5pdGVTY3JvbGwiLCJGYWNldGVkSW5maW5pdGVTY3JvbGwiLCJzY3JvbGxUb1RvcFByb2R1Y3RzIiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMyIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsImlkIiwibWV0YWRhdGEiLCJzdGF0ZSIsInNlbGVjdGVkIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwicHVzaCIsInNob3dQcm9kdWN0cyIsInVybCIsInJlcGxhY2VQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWN0aW9uIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJCIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIm9uUmVhZHkiLCJfdGhpczMiLCJlbmFibGVJbmZpbml0ZVNjcm9sbCIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJwYXJzZSIsInRyZWVEYXRhIiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJpbmZpbml0ZVNjcm9sbE9wdGlvbnMiLCJ0eHRMb2FkTW9yZSIsImluc2VydFRvcFBhZ2luYXRpb25GdW5jIiwiJHBhZ2luYXRpb24iLCJiZWZvcmUiLCJpbnNlcnRCb3R0b21QYWdpbmF0aW9uRnVuYyIsImFmdGVyIiwibGVuZ3RoIiwiZmFjZXRlZEluZmluaXRlU2Nyb2xsIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInN0YW5kYXJkSW5maW5pdGVTY3JvbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwidGVtcGxhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJjYXRlZ29yeUlkIiwidmFsdWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYXBwZW5kIiwicGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJmaWx0ZXIiLCJwYXJhbSIsIm1hcCIsImpvaW4iLCJzZWFyY2hVcmwiLCJhdHRyIiwicGF0aG5hbWUiLCJjb25jYXQiLCJkZXN0cm95IiwiZmFjZXRlZFNlYXJjaCIsIm9mZiIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzNCIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczUiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwicmVtb3ZlQXR0ciIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiX3RoaXM2IiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsInNob3dNb3JlIiwiY29udGVudCIsInJlZnJlc2hWaWV3IiwiaHRtbCIsImRlZmF1bHRQcm9kdWN0SW1hZ2UiLCJ0cmlnZ2VySGFuZGxlciIsInJlaW5pdCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiJGZvcm0iLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
