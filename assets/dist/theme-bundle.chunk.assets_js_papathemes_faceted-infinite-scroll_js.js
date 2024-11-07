(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_faceted-infinite-scroll_js"],{

/***/ "./assets/js/papathemes/action-bar.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/action-bar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    }

    // Stop action bar if the page is category bulk order custom template
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
  }

  // Destroy actionBar when loading new page
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

/***/ "./assets/js/papathemes/faceted-infinite-scroll.js":
/*!*********************************************************!*\
  !*** ./assets/js/papathemes/faceted-infinite-scroll.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacetedInfiniteScroll: () => (/* binding */ FacetedInfiniteScroll),
/* harmony export */   StandardInfiniteScroll: () => (/* binding */ StandardInfiniteScroll)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-bar */ "./assets/js/papathemes/action-bar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
var _excluded = ["requestOptions"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }


var DEBUG = false;
var isTopInViewport = function isTopInViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return distance.top >= 0 && distance.top <= (window.innerHeight || document.documentElement.clientHeight);
};

/**
 * Check if 2 urls are the same except 'page' query param
 * @param {string} url Current URL string
 * @param {string} prevUrl Previous URL string
 * @param {boolean} ignoreSortParam Ignore 'sort' query param, this should be set to true if the link is from pagination element
 * @returns Boolean
 */
function isPagingUrl(url, prevUrl, ignoreSortParam) {
  if (ignoreSortParam === void 0) {
    ignoreSortParam = false;
  }
  var oUrl = new URL(url, window.location.origin);
  var oPrevUrl = new URL(prevUrl, window.location.origin);

  // remove the last /
  oUrl.pathname = oUrl.pathname.replace(/\/$/, '');
  oPrevUrl.pathname = oPrevUrl.pathname.replace(/\/$/, '');

  // path is different
  if (oUrl.pathname !== oPrevUrl.pathname) {
    return false;
  }

  // no 'page' param in both urls
  if (!oUrl.searchParams.get('page') && !oPrevUrl.searchParams.get('page')) {
    return false;
  }

  // previous url has 'sort' param and different from 'sort' param of the current url
  // => assume sort by is changed
  if (!ignoreSortParam && oPrevUrl.searchParams.get('sort') && oUrl.searchParams.get('sort') !== oPrevUrl.searchParams.get('sort')) {
    return false;
  }

  // current url has 'sort' param but not have 'page' param
  // => assume sort by is changed
  if (oUrl.searchParams.get('sort') && !oUrl.searchParams.get('page')) {
    return false;
  }

  // delete 'page', 'limit', 'sort' params from both urls
  oUrl.searchParams.delete('page');
  oUrl.searchParams.delete('limit');
  oUrl.searchParams.delete('sort');
  oUrl.searchParams.delete('_bc_fsnf');
  oUrl.hash = '';
  oPrevUrl.searchParams.delete('page');
  oPrevUrl.searchParams.delete('limit');
  oPrevUrl.searchParams.delete('sort');
  oPrevUrl.searchParams.delete('_bc_fsnf');
  oPrevUrl.hash = '';
  var sUrl = oUrl.toString().replace(/%5B[0-9]+%5D/g, '%5B%5D').replace(/\[[0-9]+\]/g, '[]');
  var sPrevUrl = oUrl.toString().replace(/%5B[0-9]+%5D/g, '%5B%5D').replace(/\[[0-9]+\]/g, '[]');

  // compare urls
  return sUrl === sPrevUrl;

  // const diffKeys = [
  //     ...oUrl.searchParams.keys().reduce((_diffKeys, key) => (oUrl.searchParams.get(key) !== oPrevUrl.searchParams.get(key) ? [..._diffKeys, key] : _diffKeys), []),
  //     ...oPrevUrl.searchParams.keys().reduce((_diffKeys, key) => (oUrl.searchParams.get(key) !== oPrevUrl.searchParams.get(key) ? [..._diffKeys, key] : _diffKeys), []),
  // ];
}
function getPageFromUrl(url, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = 1;
  }
  var oUrl = new URL(url, window.location.origin);
  return Number(oUrl.searchParams.get('page')) || defaultValue;
}
var FacetedInfiniteScroll = /*#__PURE__*/function () {
  function FacetedInfiniteScroll(_temp) {
    var _this = this;
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$productListingCo = _ref.productListingContainerSelector,
      productListingContainerSelector = _ref$productListingCo === void 0 ? '#product-listing-container' : _ref$productListingCo,
      _ref$facetedSearchSel = _ref.facetedSearchSelectorContainer,
      facetedSearchSelectorContainer = _ref$facetedSearchSel === void 0 ? '#faceted-search-container' : _ref$facetedSearchSel,
      _ref$paginationSelect = _ref.paginationSelector,
      paginationSelector = _ref$paginationSelect === void 0 ? '.pagination' : _ref$paginationSelect,
      _ref$productGridSelec = _ref.productGridSelector,
      productGridSelector = _ref$productGridSelec === void 0 ? '.productGrid' : _ref$productGridSelec,
      _ref$productSelector = _ref.productSelector,
      productSelector = _ref$productSelector === void 0 ? '.productGrid .product' : _ref$productSelector,
      _ref$paginationItemNe = _ref.paginationItemNextSelector,
      paginationItemNextSelector = _ref$paginationItemNe === void 0 ? '.pagination-item--next' : _ref$paginationItemNe,
      _ref$paginationItemPr = _ref.paginationItemPrevSelector,
      paginationItemPrevSelector = _ref$paginationItemPr === void 0 ? '.pagination-item--previous' : _ref$paginationItemPr,
      _ref$bulkOrder = _ref.bulkOrder,
      bulkOrder = _ref$bulkOrder === void 0 ? null : _ref$bulkOrder,
      _ref$enableInfiniteSc = _ref.enableInfiniteScroll,
      enableInfiniteScroll = _ref$enableInfiniteSc === void 0 ? 'scroll' : _ref$enableInfiniteSc,
      _ref$txtLoadMore = _ref.txtLoadMore,
      txtLoadMore = _ref$txtLoadMore === void 0 ? 'Load More' : _ref$txtLoadMore,
      _ref$insertTopPaginat = _ref.insertTopPaginationFunc,
      insertTopPaginationFunc = _ref$insertTopPaginat === void 0 ? function ($pagination, $productListingContainer) {} : _ref$insertTopPaginat,
      _ref$insertBottomPagi = _ref.insertBottomPaginationFunc,
      insertBottomPaginationFunc = _ref$insertBottomPagi === void 0 ? function ($pagination, $productListingContainer) {} : _ref$insertBottomPagi;
    this.onScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onScroll.bind(this), 200);
    this.replaceStateLastUrlDebounced = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      return window.history.replaceState({}, document.title, _this.lastUrl);
    }, 500);
    this.productListingContainerSelector = productListingContainerSelector;
    this.facetedSearchSelectorContainer = facetedSearchSelectorContainer;
    this.paginationSelector = paginationSelector;
    this.productGridSelector = productGridSelector;
    this.productSelector = productSelector;
    this.paginationItemNextSelector = paginationItemNextSelector;
    this.paginationItemPrevSelector = paginationItemPrevSelector;
    this.bulkOrder = bulkOrder;
    this.enableInfiniteScroll = enableInfiniteScroll;
    this.txtLoadMore = txtLoadMore;
    this.insertTopPaginationFunc = insertTopPaginationFunc.bind(this);
    this.insertBottomPaginationFunc = insertBottomPaginationFunc.bind(this);
    $(window).on('scroll', this.onScroll);
    var $productListingContainer = $(this.productListingContainerSelector);

    //  Clone the pagination and prepend to the product listing container
    var $bottomPagination = $productListingContainer.find(this.paginationSelector).addClass('_bottom');
    var $topPagination = $productListingContainer.find(this.paginationSelector).filter('._bottom').first().clone().removeClass('_bottom').addClass('_top').prependTo($productListingContainer);

    // Update the position of the top pagination and bottom pagination
    this.insertTopPaginationFunc($topPagination, $productListingContainer);
    this.insertBottomPaginationFunc($bottomPagination, $productListingContainer);

    // Add data-page to .product elements
    $productListingContainer.find(this.productSelector).attr('data-page', getPageFromUrl(window.location.href));

    // Go to the last scroll position
    this.scrollTo();

    // The last URL
    this.lastUrl = window.location.href;

    // Observe the pagination or load more button
    this.observePagination();
  }

  /**
   * Observe the pagination in viewport to load more products
   * or listen the load more button event
   */
  var _proto = FacetedInfiniteScroll.prototype;
  _proto.observePagination = function observePagination() {
    var _this2 = this;
    var $productListingContainer = $(this.productListingContainerSelector);
    var $topPagination = $productListingContainer.find(this.paginationSelector).filter('._top');
    var $bottomPagination = $productListingContainer.find(this.paginationSelector).filter('._bottom');
    if (this.enableInfiniteScroll === 'scroll') {
      if (!this.ob) {
        // Check the pagination is in viewport
        this.ob = new IntersectionObserver(function (entries) {
          var href = entries.filter(function (entry) {
            return entry.isIntersecting;
          }).map(function (entry) {
            var _entry$target$querySe;
            return (_entry$target$querySe = entry.target.querySelector('a')) == null ? void 0 : _entry$target$querySe.getAttribute('href');
          }).filter(function (_href) {
            return _href && isPagingUrl(_href, window.location.href, true);
          })[0];
          if (href) {
            DEBUG && console.log('Pagination link is in viewport. href = ', href);

            // display loading indicator
            $productListingContainer.find(_this2.paginationSelector).addClass('is-loading');

            // update the URL in browser address bar
            window.history.replaceState({}, document.title, href);
            $(window).trigger('statechange');
          }
        });
      }

      // Watch the next, previous pagination in viewport
      $topPagination.find(this.paginationItemPrevSelector).first().each(function (i, el) {
        return _this2.ob.observe(el);
      });
      $bottomPagination.find(this.paginationItemNextSelector).first().each(function (i, el) {
        return _this2.ob.observe(el);
      });
      //
    } else if (this.enableInfiniteScroll === 'button') {
      var prevLink = $topPagination.find(this.paginationItemPrevSelector).find('a').attr('href');
      var nextLink = $bottomPagination.find(this.paginationItemNextSelector).find('a').attr('href');
      if (this.$loadPrevButton) {
        this.$loadPrevButton.parent('.infiniteScroll-loadMoreWrapper').remove();
        this.$loadPrevButton.off('click').remove();
      }
      if (this.$loadNextButton) {
        this.$loadNextButton.parent('.infiniteScroll-loadMoreWrapper').remove();
        this.$loadNextButton.off('click').remove();
      }
      var onClick = function onClick(event) {
        var $button = $(event.currentTarget);
        var href = $button.data('href');
        if (href) {
          // display loading indicator
          $productListingContainer.find(_this2.paginationSelector).addClass('is-loading');

          // update the URL in browser address bar
          window.history.replaceState({}, document.title, href);
          $(window).trigger('statechange');
        }
      };
      if (prevLink) {
        this.$loadPrevButton = $("<button type=\"button\" class=\"button button--primary button--small button--prev\">" + this.txtLoadMore + "</button>").insertAfter($topPagination).wrap('<div class="infiniteScroll-loadMoreWrapper _top"></div>');
        this.$loadPrevButton.data('href', prevLink);
        this.$loadPrevButton.on('click', onClick);
      }
      if (nextLink) {
        this.$loadNextButton = $("<button type=\"button\" class=\"button button--primary button--small button--next\">" + this.txtLoadMore + "</button>").insertAfter($bottomPagination).wrap('<div class="infiniteScroll-loadMoreWrapper _bottom"></div>');
        this.$loadNextButton.data('href', nextLink);
        this.$loadNextButton.on('click', onClick);
      }
    }
  }

  /**
   * Scroll the page to the position specified by window.location.hash
   */;
  _proto.scrollTo = function scrollTo() {
    if (window.location.hash) {
      var m = window.location.hash.replace(/^#/, '').match(/y=(-?\d+)/);
      if (m && m[1]) {
        var $productListingContainer = $(this.productListingContainerSelector);
        var y = Number(m[1]);
        var page = getPageFromUrl(window.location.href);
        var $el = $productListingContainer.find(this.productSelector).filter("[data-page=\"" + page + "\"]").first();
        window.scrollTo(0, $el.offset().top - y);
      }
    }
  };
  _proto.onScroll = function onScroll() {
    this.updateScrollingUrl();
  }

  /**
   * Update the address bar URL to store the current scroll position
   */;
  _proto.updateScrollingUrl = function updateScrollingUrl() {
    // the first product element in viewport
    var $products = $(this.productListingContainerSelector).find(this.productSelector);
    var $el = $products.filter(function (i, el) {
      var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        bottom = _el$getBoundingClient.bottom;
      return top >= 0 && top <= window.innerHeight || bottom >= 0 && bottom <= window.innerHeight;
    }).first();

    // update the 'page' parameter of the current url in relation to the product element in viewport
    // store the top position of the first element of the current page to the URL's hash
    if ($el.length > 0) {
      var url = new URL(window.location.href, window.origin);
      var page = Number($el.data('page')) || 1;
      if (page > 1) {
        url.searchParams.set('page', page);
      } else {
        url.searchParams.delete('page');
      }
      var pageFirstEl = $products.filter("[data-page=\"" + page + "\"]").get(0);
      var _pageFirstEl$getBound = pageFirstEl.getBoundingClientRect(),
        top = _pageFirstEl$getBound.top;
      url.hash = "#y=" + Math.round(top);

      // Store the last URL
      this.lastUrl = url.toString();
      DEBUG && console.log('Stored the lastUrl ', this.lastUrl);

      // replaceState by the last URL
      // window.history.replaceState({}, document.title, this.lastUrl);
      this.replaceStateLastUrlDebounced();

      // Disable the browser's scroll restoration when go back
      window.history.scrollRestoration = 'manual';
    }
  }

  /**
   * Append or refresh the product listing.
   * This function should be called inside the callback of faceted filter.
   * @param {string|object<{sidebar: string, productListing: string}>} content HTML content
   * @param {string} url the request URL that returns the content
   */;
  _proto.refreshView = function refreshView(content, url, context) {
    var _this3 = this;
    if (url === void 0) {
      url = window.location.href;
    }
    if (context === void 0) {
      context = '';
    }
    var $productListingContainer = $(this.productListingContainerSelector);
    var $facetedSearchContainer = $(this.facetedSearchSelectorContainer);
    var page = getPageFromUrl(url);
    var shouldScrollToTop = false;
    var sidebar = typeof content === 'object' && typeof content.sidebar !== 'undefined' ? content.sidebar : null;
    var productListing = typeof content === 'object' && typeof content.productListing !== 'undefined' ? content.productListing : content;

    // Update the sidebar
    if (sidebar !== null) {
      $facetedSearchContainer.html(sidebar);
    }
    if (isPagingUrl(url, this.lastUrl)) {
      // Remove the loading indicator
      $productListingContainer.find(this.paginationSelector).removeClass('is-loading');

      // Append new products if not exist
      if ($productListingContainer.find(this.productSelector).filter("[data-page=\"" + page + "\"]").length === 0) {
        var $productListing = $("<div>" + productListing + "</div>");

        // The first element that has data-page > current page
        var $nextPageEl = $productListingContainer.find(this.productSelector).filter(function (i, el) {
          return (Number($(el).attr('data-page')) || 1) > page;
        }).first();
        if ($nextPageEl.length > 0) {
          // if the next page is already loaded,
          // then insert the new products before the first element of the next page
          $nextPageEl.before($productListing.find(this.productGridSelector).html());
        } else {
          // otherwise, append the new products to the end
          $productListingContainer.find(this.productGridSelector).append($productListing.find(this.productGridSelector).html());
        }
        var curNextPage = getPageFromUrl($productListingContainer.find(this.paginationSelector).filter('._bottom').find(this.paginationItemNextSelector).find('a').attr('href'), 0);
        var curPrevPage = getPageFromUrl($productListingContainer.find(this.paginationSelector).filter('._top').find(this.paginationItemPrevSelector).find('a').attr('href'), 0);
        var nextPage = getPageFromUrl($productListing.find(this.paginationSelector).find(this.paginationItemNextSelector).find('a').attr('href'), 0);
        var prevPage = getPageFromUrl($productListing.find(this.paginationSelector).find(this.paginationItemPrevSelector).find('a').attr('href'), 0);

        // Update the bottom pagination if required
        if (curNextPage > 0 && (!nextPage || nextPage > curNextPage)) {
          $productListingContainer.find(this.paginationSelector).filter('._bottom').html($productListing.find(this.paginationSelector).html());
        }

        // Update the top pagination if required
        if (prevPage < curPrevPage) {
          $productListingContainer.find(this.paginationSelector).filter('._top').html($productListing.find(this.paginationSelector).html());
        }
      }

      // Scroll to the position specified by the window.location.hash
      // or the last scroll position
      if (window.location.hash) {
        this.scrollTo();
      } else if (this.lastUrl) {
        if (this.lastUrl.includes('#')) {
          DEBUG && console.log('restore the lastUrl and scroll to ', this.lastUrl);
          window.history.replaceState({}, document.title, this.lastUrl);
          this.scrollTo();
        }
      }
    } else {
      // Replace the product listing by the new products
      $productListingContainer.html(productListing);
      if (context) {
        $productListingContainer.find('img[data-no-img]').attr('src', "" + context.defaultProductImage);
      }

      // Update the bottom pagination
      var $bottomPagination = $productListingContainer.find(this.paginationSelector).addClass('_bottom');

      // Clone the pagination and prepend to the top of product listing
      var $topPagination = $productListingContainer.find(this.paginationSelector).first().clone().removeClass('_bottom').addClass('_top').prependTo($productListingContainer);

      // Update the position of the top pagination and bottom pagination
      this.insertTopPaginationFunc($topPagination, $productListingContainer);
      this.insertBottomPaginationFunc($bottomPagination, $productListingContainer);
      if ($productListingContainer.length > 0 && !isTopInViewport($productListingContainer.get(0))) {
        shouldScrollToTop = true;
      }

      // Store the last URL
      this.lastUrl = url;
      DEBUG && console.log('Update the lastUrl due to the new URL is not pagination link', this.lastUrl);
    }

    // Add data-page to .product elements
    $productListingContainer.find(this.productSelector).not('[data-page]').attr('data-page', page);

    // Papathemes - Bulk Order
    if (this.bulkOrder) {
      this.bulkOrder.reinit();
    }
    if (shouldScrollToTop) {
      $('#product-listing-container').get(0).scrollIntoView();
      setTimeout(function () {
        return _this3.observePagination();
      }, 200);
      // $('#product-listing-container').animate({
      //     scrollTop: 0,
      // }, 100, null, () => this.observePagination());
    } else {
      this.observePagination();
    }
  };
  return FacetedInfiniteScroll;
}();
var StandardInfiniteScroll = /*#__PURE__*/function () {
  function StandardInfiniteScroll(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$requestOptions = _ref2.requestOptions,
      requestOptions = _ref2$requestOptions === void 0 ? {
        config: {
          category: {
            products: {
              limit: 12
            }
          }
        },
        template: 'category/product-listing'
      } : _ref2$requestOptions,
      options = _objectWithoutPropertiesLoose(_ref2, _excluded);
    this.onStateChange = this.onStateChange.bind(this);
    this.onPopState = this.onPopState.bind(this);
    this.requestOptions = requestOptions;
    this.infiniteScroll = new FacetedInfiniteScroll(options);
    this.bindEvents();
  }
  var _proto2 = StandardInfiniteScroll.prototype;
  _proto2.bindEvents = function bindEvents() {
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
  };
  _proto2.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
  };
  _proto2.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto2.onPopState = function onPopState() {
    this.updateView();
  };
  _proto2.updateView = function updateView() {
    var _this4 = this;
    var url = window.location.href;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__.api.getPage(url, this.requestOptions, function (err, content) {
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this4.refreshView(content, url);
    });
  };
  _proto2.refreshView = function refreshView(content, url) {
    this.infiniteScroll.refreshView(content, url);
    (0,_action_bar__WEBPACK_IMPORTED_MODULE_3__["default"])();
  };
  return StandardInfiniteScroll;
}();

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    // supermarket: Fix url encode RFC 3986
    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  // Supermarket
  removeParams: function removeParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);

    // Let the formatter use the query object to build the new url
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
    }

    // supermarket: Fix url encode RFC 3986
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

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2ZhY2V0ZWQtaW5maW5pdGUtc2Nyb2xsX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNEO0FBQ3lCO0FBQ1E7QUFFdkQsSUFBSUksaUJBQWlCLEdBQUcsS0FBSztBQUM3QixJQUFJQyxTQUFTO0FBRWIsU0FBU0MsZUFBZUEsQ0FBQ0MsS0FBSyxFQUFFQyxTQUFTLEVBQUU7RUFDdkMsT0FBTyxDQUFDQSxTQUFTLENBQUNDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMvRDtBQUFDLElBRUtDLFNBQVM7RUFDWCxTQUFBQSxVQUFZQyxPQUFPLEVBQU87SUFBQSxJQUFkQSxPQUFPO01BQVBBLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFBQTtJQUNwQjtJQUNBLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2hELElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BELElBQUksQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7RUFDZjtFQUFDLElBQUFDLE1BQUEsR0FBQU4sU0FBQSxDQUFBTyxTQUFBO0VBQUFELE1BQUEsQ0FFREQsSUFBSSxHQUFKLFNBQUFBLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0csT0FBTyxHQUFHbkIsNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDbUIsT0FBTyxDQUFDQyxNQUFNLEVBQUU7TUFDdEI7SUFDSjtJQUVBLElBQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNoRCxJQUFN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LFVBQVFoUCxRQUFRLENBQUMwTyxXQUFXLENBQUNPLEdBQUcsQ0FBQyxTQUFJalAsUUFBUSxDQUFDME8sV0FBVyxDQUFDSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxDQUFDRyxHQUFHLENBQUMsQ0FBRyxDQUFDLENBQUM7WUFDekY7VUFDSjtRQUNKLENBQUMsTUFBTTtVQUNISixHQUFHLFVBQVFoUCxRQUFRLENBQUMwTyxXQUFXLENBQUNPLEdBQUcsQ0FBQyxTQUFJalAsUUFBUSxDQUFDME8sV0FBVyxDQUFDSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxDQUFHLENBQUMsQ0FBQztRQUNwRjtNQUNKO0lBQ0o7SUFFQSxPQUFPRCxHQUFHLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUM7RUFDM0I7QUFDSixDQUFDO0FBRUQsaUVBQWVyUCxRQUFROzs7Ozs7Ozs7O0FDeEZ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2FjdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZmFjZXRlZC1pbmZpbml0ZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5L2lnbm9yZWR8RzpcXEtpdGNoZW5hcnktMS4zLjRcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmxldCBpbnN0YW50bG9hZEJpbmRlZCA9IGZhbHNlO1xubGV0IGFjdGlvbkJhcjtcblxuZnVuY3Rpb24gcmVtb3ZlTW9kZUNsYXNzKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKW1vZGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xufVxuXG5jbGFzcyBBY3Rpb25CYXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCdG5DbGljayA9IHRoaXMub25Tb3J0QnRuQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5ID0gJCgnW2RhdGEtc29ydC1ieV0nKTtcblxuICAgICAgICBpZiAoIXRoaXMuJHNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRsaW1pdCA9IHRoaXMuJHNvcnRCeS5maW5kKCdbbmFtZT1saW1pdF0nKTtcbiAgICAgICAgY29uc3QgJG1vZGUgPSB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuXG4gICAgICAgIGlmICh1cmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgICRsaW1pdC52YWwodXJsLnF1ZXJ5LmxpbWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgJG1vZGUucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFt2YWx1ZT0ke3VybC5xdWVyeS5tb2RlfV1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIGFjdGlvbiBiYXIgaWYgdGhlIHBhZ2UgaXMgY2F0ZWdvcnkgYnVsayBvcmRlciBjdXN0b20gdGVtcGxhdGVcbiAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnc3VwZXJtYXJrZXQtcGFnZS0tcGFnZXMtY3VzdG9tLWNhdGVnb3J5LWJ1bGstb3JkZXInKSB8fCAkYm9keS5oYXNDbGFzcygnc3VwZXJtYXJrZXQtcGFnZS0tcGFnZXMtY3VzdG9tLWJyYW5kLWJ1bGstb3JkZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHJlbW92ZU1vZGVDbGFzcylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhgbW9kZS0keyRtb2RlLmZpbHRlcignOmNoZWNrZWQnKS52YWwoKX1gKTtcblxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWluaXQobmV3T3B0aW9ucykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIHJlaW5pdCcpO1xuICAgICAgICBpZiAobmV3T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIGRlc3Ryb3llZCcpO1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdpbnB1dFtuYW1lPW1vZGVdJykub24oJ2NoYW5nZScsIHRoaXMub25Nb2RlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ2J1dHRvbiwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXScpLm9uKCdjbGljaycsIHRoaXMub25Tb3J0QnRuQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ2lucHV0W25hbWU9bW9kZV0nKS5vZmYoJ2NoYW5nZScsIHRoaXMub25Nb2RlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ2J1dHRvbiwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXScpLm9mZignY2xpY2snLCB0aGlzLm9uU29ydEJ0bkNsaWNrKTtcbiAgICB9XG5cbiAgICBvbk1vZGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBtb2RlID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhyZW1vdmVNb2RlQ2xhc3MpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYG1vZGUtJHttb2RlfWApO1xuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wYWdpbmF0aW9uLWxpbmsnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoJGEuYXR0cignaHJlZicpLCB7IG1vZGUgfSk7XG4gICAgICAgICAgICAkYS5hdHRyKCdocmVmJywgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgdXJsLnF1ZXJ5Lm1vZGUgPSBtb2RlO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uU29ydEJ0bkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRidG4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBzb3J0ID0gJGJ0bi5kYXRhKCdzb3J0Jyk7XG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0aGlzLiRzb3J0QnkuZmluZCgnW25hbWU9XCJzb3J0XCJdJykudmFsKHNvcnQpO1xuICAgICAgICAgICAgdXRpbHMuaG9va3MuZW1pdCgnc29ydEJ5LXN1Ym1pdHRlZCcsIGV2ZW50LCAkYnRuLmNsb3Nlc3QoJ2Zvcm0nKS5nZXQoMCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB3aGVuOlxuICogLSBQYWdlIGlzIGxvYWRlZFxuICogLSBBamF4IHBhZ2UgcmV0dXJuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aW9uQmFyRmFjdG9yeShvcHRpb25zKSB7XG4gICAgaWYgKGFjdGlvbkJhcikge1xuICAgICAgICBhY3Rpb25CYXIucmVpbml0KG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBhY3Rpb25CYXIgd2hlbiBsb2FkaW5nIG5ldyBwYWdlXG4gICAgaWYgKCFpbnN0YW50bG9hZEJpbmRlZCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uQmFyKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBhY3Rpb25CYXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5zdGFudGxvYWRCaW5kZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4vYWN0aW9uLWJhcic7XG5cbmNvbnN0IERFQlVHID0gZmFsc2U7XG5cbmNvbnN0IGlzVG9wSW5WaWV3cG9ydCA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIGRpc3RhbmNlLnRvcCA+PSAwICYmXG4gICAgICAgIGRpc3RhbmNlLnRvcCA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgMiB1cmxzIGFyZSB0aGUgc2FtZSBleGNlcHQgJ3BhZ2UnIHF1ZXJ5IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIEN1cnJlbnQgVVJMIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHByZXZVcmwgUHJldmlvdXMgVVJMIHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBpZ25vcmVTb3J0UGFyYW0gSWdub3JlICdzb3J0JyBxdWVyeSBwYXJhbSwgdGhpcyBzaG91bGQgYmUgc2V0IHRvIHRydWUgaWYgdGhlIGxpbmsgaXMgZnJvbSBwYWdpbmF0aW9uIGVsZW1lbnRcbiAqIEByZXR1cm5zIEJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNQYWdpbmdVcmwodXJsLCBwcmV2VXJsLCBpZ25vcmVTb3J0UGFyYW0gPSBmYWxzZSkge1xuICAgIGNvbnN0IG9VcmwgPSBuZXcgVVJMKHVybCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG4gICAgY29uc3Qgb1ByZXZVcmwgPSBuZXcgVVJMKHByZXZVcmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBsYXN0IC9cbiAgICBvVXJsLnBhdGhuYW1lID0gb1VybC5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIG9QcmV2VXJsLnBhdGhuYW1lID0gb1ByZXZVcmwucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAgIC8vIHBhdGggaXMgZGlmZmVyZW50XG4gICAgaWYgKG9VcmwucGF0aG5hbWUgIT09IG9QcmV2VXJsLnBhdGhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBubyAncGFnZScgcGFyYW0gaW4gYm90aCB1cmxzXG4gICAgaWYgKCFvVXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKSAmJiAhb1ByZXZVcmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBwcmV2aW91cyB1cmwgaGFzICdzb3J0JyBwYXJhbSBhbmQgZGlmZmVyZW50IGZyb20gJ3NvcnQnIHBhcmFtIG9mIHRoZSBjdXJyZW50IHVybFxuICAgIC8vID0+IGFzc3VtZSBzb3J0IGJ5IGlzIGNoYW5nZWRcbiAgICBpZiAoIWlnbm9yZVNvcnRQYXJhbSAmJiBvUHJldlVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzb3J0JykgJiYgb1VybC5zZWFyY2hQYXJhbXMuZ2V0KCdzb3J0JykgIT09IG9QcmV2VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY3VycmVudCB1cmwgaGFzICdzb3J0JyBwYXJhbSBidXQgbm90IGhhdmUgJ3BhZ2UnIHBhcmFtXG4gICAgLy8gPT4gYXNzdW1lIHNvcnQgYnkgaXMgY2hhbmdlZFxuICAgIGlmIChvVXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKSAmJiAhb1VybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYWdlJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSAncGFnZScsICdsaW1pdCcsICdzb3J0JyBwYXJhbXMgZnJvbSBib3RoIHVybHNcbiAgICBvVXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3BhZ2UnKTtcbiAgICBvVXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2xpbWl0Jyk7XG4gICAgb1VybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdzb3J0Jyk7XG4gICAgb1VybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdfYmNfZnNuZicpO1xuICAgIG9VcmwuaGFzaCA9ICcnO1xuICAgIG9QcmV2VXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3BhZ2UnKTtcbiAgICBvUHJldlVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdsaW1pdCcpO1xuICAgIG9QcmV2VXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3NvcnQnKTtcbiAgICBvUHJldlVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdfYmNfZnNuZicpO1xuICAgIG9QcmV2VXJsLmhhc2ggPSAnJztcblxuICAgIGNvbnN0IHNVcmwgPSBvVXJsLnRvU3RyaW5nKCkucmVwbGFjZSgvJTVCWzAtOV0rJTVEL2csICclNUIlNUQnKS5yZXBsYWNlKC9cXFtbMC05XStcXF0vZywgJ1tdJyk7XG4gICAgY29uc3Qgc1ByZXZVcmwgPSBvVXJsLnRvU3RyaW5nKCkucmVwbGFjZSgvJTVCWzAtOV0rJTVEL2csICclNUIlNUQnKS5yZXBsYWNlKC9cXFtbMC05XStcXF0vZywgJ1tdJyk7XG5cbiAgICAvLyBjb21wYXJlIHVybHNcbiAgICByZXR1cm4gc1VybCA9PT0gc1ByZXZVcmw7XG5cbiAgICAvLyBjb25zdCBkaWZmS2V5cyA9IFtcbiAgICAvLyAgICAgLi4ub1VybC5zZWFyY2hQYXJhbXMua2V5cygpLnJlZHVjZSgoX2RpZmZLZXlzLCBrZXkpID0+IChvVXJsLnNlYXJjaFBhcmFtcy5nZXQoa2V5KSAhPT0gb1ByZXZVcmwuc2VhcmNoUGFyYW1zLmdldChrZXkpID8gWy4uLl9kaWZmS2V5cywga2V5XSA6IF9kaWZmS2V5cyksIFtdKSxcbiAgICAvLyAgICAgLi4ub1ByZXZVcmwuc2VhcmNoUGFyYW1zLmtleXMoKS5yZWR1Y2UoKF9kaWZmS2V5cywga2V5KSA9PiAob1VybC5zZWFyY2hQYXJhbXMuZ2V0KGtleSkgIT09IG9QcmV2VXJsLnNlYXJjaFBhcmFtcy5nZXQoa2V5KSA/IFsuLi5fZGlmZktleXMsIGtleV0gOiBfZGlmZktleXMpLCBbXSksXG4gICAgLy8gXTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZUZyb21VcmwodXJsLCBkZWZhdWx0VmFsdWUgPSAxKSB7XG4gICAgY29uc3Qgb1VybCA9IG5ldyBVUkwodXJsLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgICByZXR1cm4gTnVtYmVyKG9Vcmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpKSB8fCBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNldGVkSW5maW5pdGVTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgcHJvZHVjdExpc3RpbmdDb250YWluZXJTZWxlY3RvciA9ICcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicsXG4gICAgICAgIGZhY2V0ZWRTZWFyY2hTZWxlY3RvckNvbnRhaW5lciA9ICcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyxcbiAgICAgICAgcGFnaW5hdGlvblNlbGVjdG9yID0gJy5wYWdpbmF0aW9uJyxcbiAgICAgICAgcHJvZHVjdEdyaWRTZWxlY3RvciA9ICcucHJvZHVjdEdyaWQnLFxuICAgICAgICBwcm9kdWN0U2VsZWN0b3IgPSAnLnByb2R1Y3RHcmlkIC5wcm9kdWN0JyxcbiAgICAgICAgcGFnaW5hdGlvbkl0ZW1OZXh0U2VsZWN0b3IgPSAnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsXG4gICAgICAgIHBhZ2luYXRpb25JdGVtUHJldlNlbGVjdG9yID0gJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJyxcbiAgICAgICAgYnVsa09yZGVyID0gbnVsbCxcbiAgICAgICAgZW5hYmxlSW5maW5pdGVTY3JvbGwgPSAnc2Nyb2xsJywgLy8gZmFsc2UgfCAnc2Nyb2xsJyB8ICdidXR0b24nXG4gICAgICAgIHR4dExvYWRNb3JlID0gJ0xvYWQgTW9yZScsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICBpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYyA9ICgkcGFnaW5hdGlvbiwgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKSA9PiB7fSxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIGluc2VydEJvdHRvbVBhZ2luYXRpb25GdW5jID0gKCRwYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpID0+IHt9LFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsID0gdGhyb3R0bGUodGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpLCAyMDApO1xuICAgICAgICB0aGlzLnJlcGxhY2VTdGF0ZUxhc3RVcmxEZWJvdW5jZWQgPSBkZWJvdW5jZSgoKSA9PiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB0aGlzLmxhc3RVcmwpLCA1MDApO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RpbmdDb250YWluZXJTZWxlY3RvciA9IHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaFNlbGVjdG9yQ29udGFpbmVyID0gZmFjZXRlZFNlYXJjaFNlbGVjdG9yQ29udGFpbmVyO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5wcm9kdWN0R3JpZFNlbGVjdG9yID0gcHJvZHVjdEdyaWRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2VsZWN0b3IgPSBwcm9kdWN0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbkl0ZW1OZXh0U2VsZWN0b3IgPSBwYWdpbmF0aW9uSXRlbU5leHRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uSXRlbVByZXZTZWxlY3RvciA9IHBhZ2luYXRpb25JdGVtUHJldlNlbGVjdG9yO1xuICAgICAgICB0aGlzLmJ1bGtPcmRlciA9IGJ1bGtPcmRlcjtcbiAgICAgICAgdGhpcy5lbmFibGVJbmZpbml0ZVNjcm9sbCA9IGVuYWJsZUluZmluaXRlU2Nyb2xsO1xuICAgICAgICB0aGlzLnR4dExvYWRNb3JlID0gdHh0TG9hZE1vcmU7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9wUGFnaW5hdGlvbkZ1bmMgPSBpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmluc2VydEJvdHRvbVBhZ2luYXRpb25GdW5jID0gaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmMuYmluZCh0aGlzKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQodGhpcy5wcm9kdWN0TGlzdGluZ0NvbnRhaW5lclNlbGVjdG9yKTtcblxuICAgICAgICAvLyAgQ2xvbmUgdGhlIHBhZ2luYXRpb24gYW5kIHByZXBlbmQgdG8gdGhlIHByb2R1Y3QgbGlzdGluZyBjb250YWluZXJcbiAgICAgICAgY29uc3QgJGJvdHRvbVBhZ2luYXRpb24gPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuYWRkQ2xhc3MoJ19ib3R0b20nKTtcbiAgICAgICAgY29uc3QgJHRvcFBhZ2luYXRpb24gPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlsdGVyKCcuX2JvdHRvbScpLmZpcnN0KCkuY2xvbmUoKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdfYm90dG9tJykuYWRkQ2xhc3MoJ190b3AnKVxuICAgICAgICAgICAgLnByZXBlbmRUbygkcHJvZHVjdExpc3RpbmdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRvcCBwYWdpbmF0aW9uIGFuZCBib3R0b20gcGFnaW5hdGlvblxuICAgICAgICB0aGlzLmluc2VydFRvcFBhZ2luYXRpb25GdW5jKCR0b3BQYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpO1xuICAgICAgICB0aGlzLmluc2VydEJvdHRvbVBhZ2luYXRpb25GdW5jKCRib3R0b21QYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIEFkZCBkYXRhLXBhZ2UgdG8gLnByb2R1Y3QgZWxlbWVudHNcbiAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQodGhpcy5wcm9kdWN0U2VsZWN0b3IpLmF0dHIoJ2RhdGEtcGFnZScsIGdldFBhZ2VGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSk7XG5cbiAgICAgICAgLy8gR28gdG8gdGhlIGxhc3Qgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oKTtcblxuICAgICAgICAvLyBUaGUgbGFzdCBVUkxcbiAgICAgICAgdGhpcy5sYXN0VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB0aGUgcGFnaW5hdGlvbiBvciBsb2FkIG1vcmUgYnV0dG9uXG4gICAgICAgIHRoaXMub2JzZXJ2ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIHRoZSBwYWdpbmF0aW9uIGluIHZpZXdwb3J0IHRvIGxvYWQgbW9yZSBwcm9kdWN0c1xuICAgICAqIG9yIGxpc3RlbiB0aGUgbG9hZCBtb3JlIGJ1dHRvbiBldmVudFxuICAgICAqL1xuICAgIG9ic2VydmVQYWdpbmF0aW9uKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKHRoaXMucHJvZHVjdExpc3RpbmdDb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0ICR0b3BQYWdpbmF0aW9uID0gJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQodGhpcy5wYWdpbmF0aW9uU2VsZWN0b3IpLmZpbHRlcignLl90b3AnKTtcbiAgICAgICAgY29uc3QgJGJvdHRvbVBhZ2luYXRpb24gPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlsdGVyKCcuX2JvdHRvbScpO1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUluZmluaXRlU2Nyb2xsID09PSAnc2Nyb2xsJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9iKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIHBhZ2luYXRpb24gaXMgaW4gdmlld3BvcnRcbiAgICAgICAgICAgICAgICB0aGlzLm9iID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcignYScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoX2hyZWYgPT4gX2hyZWYgJiYgaXNQYWdpbmdVcmwoX2hyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKSlbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERFQlVHICYmIGNvbnNvbGUubG9nKCdQYWdpbmF0aW9uIGxpbmsgaXMgaW4gdmlld3BvcnQuIGhyZWYgPSAnLCBocmVmKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBsb2FkaW5nIGluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQodGhpcy5wYWdpbmF0aW9uU2VsZWN0b3IpLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgVVJMIGluIGJyb3dzZXIgYWRkcmVzcyBiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2F0Y2ggdGhlIG5leHQsIHByZXZpb3VzIHBhZ2luYXRpb24gaW4gdmlld3BvcnRcbiAgICAgICAgICAgICR0b3BQYWdpbmF0aW9uLmZpbmQodGhpcy5wYWdpbmF0aW9uSXRlbVByZXZTZWxlY3RvcikuZmlyc3QoKS5lYWNoKChpLCBlbCkgPT4gdGhpcy5vYi5vYnNlcnZlKGVsKSk7XG4gICAgICAgICAgICAkYm90dG9tUGFnaW5hdGlvbi5maW5kKHRoaXMucGFnaW5hdGlvbkl0ZW1OZXh0U2VsZWN0b3IpLmZpcnN0KCkuZWFjaCgoaSwgZWwpID0+IHRoaXMub2Iub2JzZXJ2ZShlbCkpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuYWJsZUluZmluaXRlU2Nyb2xsID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgcHJldkxpbmsgPSAkdG9wUGFnaW5hdGlvbi5maW5kKHRoaXMucGFnaW5hdGlvbkl0ZW1QcmV2U2VsZWN0b3IpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0TGluayA9ICRib3R0b21QYWdpbmF0aW9uLmZpbmQodGhpcy5wYWdpbmF0aW9uSXRlbU5leHRTZWxlY3RvcikuZmluZCgnYScpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJGxvYWRQcmV2QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZFByZXZCdXR0b24ucGFyZW50KCcuaW5maW5pdGVTY3JvbGwtbG9hZE1vcmVXcmFwcGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZFByZXZCdXR0b24ub2ZmKCdjbGljaycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy4kbG9hZE5leHRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTmV4dEJ1dHRvbi5wYXJlbnQoJy5pbmZpbml0ZVNjcm9sbC1sb2FkTW9yZVdyYXBwZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTmV4dEJ1dHRvbi5vZmYoJ2NsaWNrJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gJGJ1dHRvbi5kYXRhKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKHRoaXMucGFnaW5hdGlvblNlbGVjdG9yKS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgVVJMIGluIGJyb3dzZXIgYWRkcmVzcyBiYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChwcmV2TGluaykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRQcmV2QnV0dG9uID0gJChgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1wcmV2XCI+JHt0aGlzLnR4dExvYWRNb3JlfTwvYnV0dG9uPmApLmluc2VydEFmdGVyKCR0b3BQYWdpbmF0aW9uKS53cmFwKCc8ZGl2IGNsYXNzPVwiaW5maW5pdGVTY3JvbGwtbG9hZE1vcmVXcmFwcGVyIF90b3BcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkUHJldkJ1dHRvbi5kYXRhKCdocmVmJywgcHJldkxpbmspO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRQcmV2QnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dExpbmspIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTmV4dEJ1dHRvbiA9ICQoYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsIGJ1dHRvbi0tbmV4dFwiPiR7dGhpcy50eHRMb2FkTW9yZX08L2J1dHRvbj5gKS5pbnNlcnRBZnRlcigkYm90dG9tUGFnaW5hdGlvbikud3JhcCgnPGRpdiBjbGFzcz1cImluZmluaXRlU2Nyb2xsLWxvYWRNb3JlV3JhcHBlciBfYm90dG9tXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE5leHRCdXR0b24uZGF0YSgnaHJlZicsIG5leHRMaW5rKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTmV4dEJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gICAgICovXG4gICAgc2Nyb2xsVG8oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpLm1hdGNoKC95PSgtP1xcZCspLyk7XG4gICAgICAgICAgICBpZiAobSAmJiBtWzFdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCh0aGlzLnByb2R1Y3RMaXN0aW5nQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIobVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGdldFBhZ2VGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnByb2R1Y3RTZWxlY3RvcikuZmlsdGVyKGBbZGF0YS1wYWdlPVwiJHtwYWdlfVwiXWApLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsICRlbC5vZmZzZXQoKS50b3AgLSB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGluZ1VybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgYWRkcmVzcyBiYXIgVVJMIHRvIHN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZVNjcm9sbGluZ1VybCgpIHtcbiAgICAgICAgLy8gdGhlIGZpcnN0IHByb2R1Y3QgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICBjb25zdCAkcHJvZHVjdHMgPSAkKHRoaXMucHJvZHVjdExpc3RpbmdDb250YWluZXJTZWxlY3RvcikuZmluZCh0aGlzLnByb2R1Y3RTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0ICRlbCA9ICRwcm9kdWN0c1xuICAgICAgICAgICAgLmZpbHRlcigoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRvcCwgYm90dG9tIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9wID49IDAgJiYgdG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBib3R0b20gPj0gMCAmJiBib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maXJzdCgpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgJ3BhZ2UnIHBhcmFtZXRlciBvZiB0aGUgY3VycmVudCB1cmwgaW4gcmVsYXRpb24gdG8gdGhlIHByb2R1Y3QgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICAvLyBzdG9yZSB0aGUgdG9wIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBjdXJyZW50IHBhZ2UgdG8gdGhlIFVSTCdzIGhhc2hcbiAgICAgICAgaWYgKCRlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB3aW5kb3cub3JpZ2luKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIoJGVsLmRhdGEoJ3BhZ2UnKSkgfHwgMTtcblxuICAgICAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3BhZ2UnLCBwYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3BhZ2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFnZUZpcnN0RWwgPSAkcHJvZHVjdHMuZmlsdGVyKGBbZGF0YS1wYWdlPVwiJHtwYWdlfVwiXWApLmdldCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9wIH0gPSBwYWdlRmlyc3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgdXJsLmhhc2ggPSBgI3k9JHtNYXRoLnJvdW5kKHRvcCl9YDtcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGxhc3QgVVJMXG4gICAgICAgICAgICB0aGlzLmxhc3RVcmwgPSB1cmwudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgREVCVUcgJiYgY29uc29sZS5sb2coJ1N0b3JlZCB0aGUgbGFzdFVybCAnLCB0aGlzLmxhc3RVcmwpO1xuXG4gICAgICAgICAgICAvLyByZXBsYWNlU3RhdGUgYnkgdGhlIGxhc3QgVVJMXG4gICAgICAgICAgICAvLyB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB0aGlzLmxhc3RVcmwpO1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlU3RhdGVMYXN0VXJsRGVib3VuY2VkKCk7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgdGhlIGJyb3dzZXIncyBzY3JvbGwgcmVzdG9yYXRpb24gd2hlbiBnbyBiYWNrXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIG9yIHJlZnJlc2ggdGhlIHByb2R1Y3QgbGlzdGluZy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgaW5zaWRlIHRoZSBjYWxsYmFjayBvZiBmYWNldGVkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3Q8e3NpZGViYXI6IHN0cmluZywgcHJvZHVjdExpc3Rpbmc6IHN0cmluZ30+fSBjb250ZW50IEhUTUwgY29udGVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdGhlIHJlcXVlc3QgVVJMIHRoYXQgcmV0dXJucyB0aGUgY29udGVudFxuICAgICAqL1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQsIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBjb250ZXh0ID0gJycpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCh0aGlzLnByb2R1Y3RMaXN0aW5nQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQodGhpcy5mYWNldGVkU2VhcmNoU2VsZWN0b3JDb250YWluZXIpO1xuICAgICAgICBjb25zdCBwYWdlID0gZ2V0UGFnZUZyb21VcmwodXJsKTtcbiAgICAgICAgbGV0IHNob3VsZFNjcm9sbFRvVG9wID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29udGVudC5zaWRlYmFyICE9PSAndW5kZWZpbmVkJyA/IGNvbnRlbnQuc2lkZWJhciA6IG51bGw7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RMaXN0aW5nID0gdHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjb250ZW50LnByb2R1Y3RMaXN0aW5nICE9PSAndW5kZWZpbmVkJyA/IGNvbnRlbnQucHJvZHVjdExpc3RpbmcgOiBjb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2lkZWJhclxuICAgICAgICBpZiAoc2lkZWJhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChzaWRlYmFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1BhZ2luZ1VybCh1cmwsIHRoaXMubGFzdFVybCkpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZyBpbmRpY2F0b3JcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKHRoaXMucGFnaW5hdGlvblNlbGVjdG9yKS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgbmV3IHByb2R1Y3RzIGlmIG5vdCBleGlzdFxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKHRoaXMucHJvZHVjdFNlbGVjdG9yKS5maWx0ZXIoYFtkYXRhLXBhZ2U9XCIke3BhZ2V9XCJdYCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nID0gJChgPGRpdj4ke3Byb2R1Y3RMaXN0aW5nfTwvZGl2PmApO1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBoYXMgZGF0YS1wYWdlID4gY3VycmVudCBwYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgJG5leHRQYWdlRWwgPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnByb2R1Y3RTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gKE51bWJlcigkKGVsKS5hdHRyKCdkYXRhLXBhZ2UnKSkgfHwgMSkgPiBwYWdlKS5maXJzdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRuZXh0UGFnZUVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIG5leHQgcGFnZSBpcyBhbHJlYWR5IGxvYWRlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBpbnNlcnQgdGhlIG5ldyBwcm9kdWN0cyBiZWZvcmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIG5leHQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAkbmV4dFBhZ2VFbC5iZWZvcmUoJHByb2R1Y3RMaXN0aW5nLmZpbmQodGhpcy5wcm9kdWN0R3JpZFNlbGVjdG9yKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgYXBwZW5kIHRoZSBuZXcgcHJvZHVjdHMgdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnByb2R1Y3RHcmlkU2VsZWN0b3IpLmFwcGVuZCgkcHJvZHVjdExpc3RpbmcuZmluZCh0aGlzLnByb2R1Y3RHcmlkU2VsZWN0b3IpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyTmV4dFBhZ2UgPSBnZXRQYWdlRnJvbVVybCgkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlsdGVyKCcuX2JvdHRvbScpLmZpbmQodGhpcy5wYWdpbmF0aW9uSXRlbU5leHRTZWxlY3RvcikuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VyUHJldlBhZ2UgPSBnZXRQYWdlRnJvbVVybCgkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlsdGVyKCcuX3RvcCcpLmZpbmQodGhpcy5wYWdpbmF0aW9uSXRlbVByZXZTZWxlY3RvcikuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFBhZ2UgPSBnZXRQYWdlRnJvbVVybCgkcHJvZHVjdExpc3RpbmcuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmluZCh0aGlzLnBhZ2luYXRpb25JdGVtTmV4dFNlbGVjdG9yKS5maW5kKCdhJykuYXR0cignaHJlZicpLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2UGFnZSA9IGdldFBhZ2VGcm9tVXJsKCRwcm9kdWN0TGlzdGluZy5maW5kKHRoaXMucGFnaW5hdGlvblNlbGVjdG9yKS5maW5kKHRoaXMucGFnaW5hdGlvbkl0ZW1QcmV2U2VsZWN0b3IpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyksIDApO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBib3R0b20gcGFnaW5hdGlvbiBpZiByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlmIChjdXJOZXh0UGFnZSA+IDAgJiYgKCFuZXh0UGFnZSB8fCBuZXh0UGFnZSA+IGN1ck5leHRQYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlsdGVyKCcuX2JvdHRvbScpLmh0bWwoJHByb2R1Y3RMaXN0aW5nLmZpbmQodGhpcy5wYWdpbmF0aW9uU2VsZWN0b3IpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3AgcGFnaW5hdGlvbiBpZiByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSA8IGN1clByZXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKHRoaXMucGFnaW5hdGlvblNlbGVjdG9yKS5maWx0ZXIoJy5fdG9wJykuaHRtbCgkcHJvZHVjdExpc3RpbmcuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHRoZSB3aW5kb3cubG9jYXRpb24uaGFzaFxuICAgICAgICAgICAgLy8gb3IgdGhlIGxhc3Qgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdFVybCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RVcmwuaW5jbHVkZXMoJyMnKSkge1xuICAgICAgICAgICAgICAgICAgICBERUJVRyAmJiBjb25zb2xlLmxvZygncmVzdG9yZSB0aGUgbGFzdFVybCBhbmQgc2Nyb2xsIHRvICcsIHRoaXMubGFzdFVybCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHRoaXMubGFzdFVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBwcm9kdWN0IGxpc3RpbmcgYnkgdGhlIG5ldyBwcm9kdWN0c1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwocHJvZHVjdExpc3RpbmcpO1xuXG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdpbWdbZGF0YS1uby1pbWddJykuYXR0cignc3JjJywgYCR7Y29udGV4dC5kZWZhdWx0UHJvZHVjdEltYWdlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJvdHRvbSBwYWdpbmF0aW9uXG4gICAgICAgICAgICBjb25zdCAkYm90dG9tUGFnaW5hdGlvbiA9ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKHRoaXMucGFnaW5hdGlvblNlbGVjdG9yKS5hZGRDbGFzcygnX2JvdHRvbScpO1xuXG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgcGFnaW5hdGlvbiBhbmQgcHJlcGVuZCB0byB0aGUgdG9wIG9mIHByb2R1Y3QgbGlzdGluZ1xuICAgICAgICAgICAgY29uc3QgJHRvcFBhZ2luYXRpb24gPSAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCh0aGlzLnBhZ2luYXRpb25TZWxlY3RvcikuZmlyc3QoKS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdfYm90dG9tJykuYWRkQ2xhc3MoJ190b3AnKVxuICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9wIHBhZ2luYXRpb24gYW5kIGJvdHRvbSBwYWdpbmF0aW9uXG4gICAgICAgICAgICB0aGlzLmluc2VydFRvcFBhZ2luYXRpb25GdW5jKCR0b3BQYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRCb3R0b21QYWdpbmF0aW9uRnVuYygkYm90dG9tUGFnaW5hdGlvbiwgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5sZW5ndGggPiAwICYmICFpc1RvcEluVmlld3BvcnQoJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmdldCgwKSkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRTY3JvbGxUb1RvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBsYXN0IFVSTFxuICAgICAgICAgICAgdGhpcy5sYXN0VXJsID0gdXJsO1xuXG4gICAgICAgICAgICBERUJVRyAmJiBjb25zb2xlLmxvZygnVXBkYXRlIHRoZSBsYXN0VXJsIGR1ZSB0byB0aGUgbmV3IFVSTCBpcyBub3QgcGFnaW5hdGlvbiBsaW5rJywgdGhpcy5sYXN0VXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBkYXRhLXBhZ2UgdG8gLnByb2R1Y3QgZWxlbWVudHNcbiAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQodGhpcy5wcm9kdWN0U2VsZWN0b3IpLm5vdCgnW2RhdGEtcGFnZV0nKS5hdHRyKCdkYXRhLXBhZ2UnLCBwYWdlKTtcblxuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyLnJlaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbFRvVG9wKSB7XG4gICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmdldCgwKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9ic2VydmVQYWdpbmF0aW9uKCksIDIwMCk7XG4gICAgICAgICAgICAvLyAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmFuaW1hdGUoe1xuICAgICAgICAgICAgLy8gICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIC8vIH0sIDEwMCwgbnVsbCwgKCkgPT4gdGhpcy5vYnNlcnZlUGFnaW5hdGlvbigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YW5kYXJkSW5maW5pdGVTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICB9LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGwgPSBuZXcgRmFjZXRlZEluZmluaXRlU2Nyb2xsKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybCwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50LCB1cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoVmlldyhjb250ZW50LCB1cmwpIHtcbiAgICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbC5yZWZyZXNoVmlldyhjb250ZW50LCB1cmwpO1xuICAgICAgICBhY3Rpb25CYXJGYWN0b3J5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCB1cmwgZW5jb2RlIFJGQyAzOTg2XG4gICAgICAgIGlmIChwYXJzZWQucXVlcnkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWFyY2ggPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHBhcnNlZC5xdWVyeSk7XG4gICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICByZW1vdmVQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucXVlcnkuaGFzT3duUHJvcGVydHkocGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbXNdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5W3BhcmFtc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5Lmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeVtwYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBlcm1hcmtldDogRml4IHVybCBlbmNvZGUgUkZDIDM5ODZcbiAgICAgICAgaWYgKHBhcnNlZC5xdWVyeSkge1xuICAgICAgICAgICAgcGFyc2VkLnNlYXJjaCA9IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcocGFyc2VkLnF1ZXJ5KTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICAvLyBzdXBlcm1hcmtldDogRml4IGZhY2V0ZWQgdmFsdWUgY29udGFpbnMgYm90aCArIGFuZCBhIHNwYWNpbmcgY2hhcmFjdGVyIChpZS4gXCJEVkQrUiBETFwiKVxuICAgIGVuY29kZVBhcmFtOiAodmFsKSA9PiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5zcGxpdCgnJTIwJykuam9pbignKycpLnJlcGxhY2UoL1shJygpKl0vZywgYyA9PiBgJSR7Yy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7dXJsVXRpbHMuZW5jb2RlUGFyYW0oa2V5KX09JHt1cmxVdGlscy5lbmNvZGVQYXJhbShxdWVyeURhdGFba2V5XVtuZHhdKX1gOyAvLyBzdXBlcm1hcmtldCBtb2RcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7dXJsVXRpbHMuZW5jb2RlUGFyYW0oa2V5KX09JHt1cmxVdGlscy5lbmNvZGVQYXJhbShxdWVyeURhdGFba2V5XSl9YDsgLy8gc3VwZXJtYXJrZXQgbW9kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIiQiLCJVcmwiLCJ1dGlscyIsInVybFV0aWxzIiwiaW5zdGFudGxvYWRCaW5kZWQiLCJhY3Rpb25CYXIiLCJyZW1vdmVNb2RlQ2xhc3MiLCJpbmRleCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiam9pbiIsIkFjdGlvbkJhciIsIm9wdGlvbnMiLCJvbk1vZGVDaGFuZ2UiLCJiaW5kIiwib25Tb3J0QnRuQ2xpY2siLCJpbml0IiwiX3Byb3RvIiwicHJvdG90eXBlIiwiJHNvcnRCeSIsImxlbmd0aCIsIiRsaW1pdCIsImZpbmQiLCIkbW9kZSIsInVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnkiLCJsaW1pdCIsInZhbCIsIm1vZGUiLCJwcm9wIiwiZmlsdGVyIiwiJGJvZHkiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ1bmJpbmRFdmVudHMiLCJiaW5kRXZlbnRzIiwicmVpbml0IiwibmV3T3B0aW9ucyIsImRlc3Ryb3kiLCJvbiIsIm9mZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJlYWNoIiwiaSIsImVsIiwiJGEiLCJyZXBsYWNlUGFyYW1zIiwiYXR0ciIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkb2N1bWVudCIsInRpdGxlIiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJidWlsZFF1ZXJ5U3RyaW5nIiwiJGJ0biIsImN1cnJlbnRUYXJnZXQiLCJzb3J0IiwiZGF0YSIsImhvb2tzIiwiZW1pdCIsImNsb3Nlc3QiLCJnZXQiLCJhY3Rpb25CYXJGYWN0b3J5IiwiX2V4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJyIiwiZSIsInQiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5jbHVkZXMiLCJhcGkiLCJERUJVRyIsImlzVG9wSW5WaWV3cG9ydCIsImVsZW0iLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaXNQYWdpbmdVcmwiLCJwcmV2VXJsIiwiaWdub3JlU29ydFBhcmFtIiwib1VybCIsIlVSTCIsIm9yaWdpbiIsIm9QcmV2VXJsIiwicmVwbGFjZSIsInNlYXJjaFBhcmFtcyIsImRlbGV0ZSIsImhhc2giLCJzVXJsIiwidG9TdHJpbmciLCJzUHJldlVybCIsImdldFBhZ2VGcm9tVXJsIiwiZGVmYXVsdFZhbHVlIiwiTnVtYmVyIiwiRmFjZXRlZEluZmluaXRlU2Nyb2xsIiwiX3RlbXAiLCJfdGhpcyIsIl9yZWYiLCJfcmVmJHByb2R1Y3RMaXN0aW5nQ28iLCJwcm9kdWN0TGlzdGluZ0NvbnRhaW5lclNlbGVjdG9yIiwiX3JlZiRmYWNldGVkU2VhcmNoU2VsIiwiZmFjZXRlZFNlYXJjaFNlbGVjdG9yQ29udGFpbmVyIiwiX3JlZiRwYWdpbmF0aW9uU2VsZWN0IiwicGFnaW5hdGlvblNlbGVjdG9yIiwiX3JlZiRwcm9kdWN0R3JpZFNlbGVjIiwicHJvZHVjdEdyaWRTZWxlY3RvciIsIl9yZWYkcHJvZHVjdFNlbGVjdG9yIiwicHJvZHVjdFNlbGVjdG9yIiwiX3JlZiRwYWdpbmF0aW9uSXRlbU5lIiwicGFnaW5hdGlvbkl0ZW1OZXh0U2VsZWN0b3IiLCJfcmVmJHBhZ2luYXRpb25JdGVtUHIiLCJwYWdpbmF0aW9uSXRlbVByZXZTZWxlY3RvciIsIl9yZWYkYnVsa09yZGVyIiwiYnVsa09yZGVyIiwiX3JlZiRlbmFibGVJbmZpbml0ZVNjIiwiZW5hYmxlSW5maW5pdGVTY3JvbGwiLCJfcmVmJHR4dExvYWRNb3JlIiwidHh0TG9hZE1vcmUiLCJfcmVmJGluc2VydFRvcFBhZ2luYXQiLCJpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYyIsIiRwYWdpbmF0aW9uIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiX3JlZiRpbnNlcnRCb3R0b21QYWdpIiwiaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmMiLCJvblNjcm9sbCIsIl90aHJvdHRsZSIsInJlcGxhY2VTdGF0ZUxhc3RVcmxEZWJvdW5jZWQiLCJfZGVib3VuY2UiLCJyZXBsYWNlU3RhdGUiLCJsYXN0VXJsIiwiJGJvdHRvbVBhZ2luYXRpb24iLCIkdG9wUGFnaW5hdGlvbiIsImZpcnN0IiwiY2xvbmUiLCJwcmVwZW5kVG8iLCJzY3JvbGxUbyIsIm9ic2VydmVQYWdpbmF0aW9uIiwiX3RoaXMyIiwib2IiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibWFwIiwiX2VudHJ5JHRhcmdldCRxdWVyeVNlIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsIl9ocmVmIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXIiLCJvYnNlcnZlIiwicHJldkxpbmsiLCJuZXh0TGluayIsIiRsb2FkUHJldkJ1dHRvbiIsInBhcmVudCIsInJlbW92ZSIsIiRsb2FkTmV4dEJ1dHRvbiIsIm9uQ2xpY2siLCIkYnV0dG9uIiwiaW5zZXJ0QWZ0ZXIiLCJ3cmFwIiwibSIsInkiLCJwYWdlIiwiJGVsIiwib2Zmc2V0IiwidXBkYXRlU2Nyb2xsaW5nVXJsIiwiJHByb2R1Y3RzIiwiX2VsJGdldEJvdW5kaW5nQ2xpZW50IiwiYm90dG9tIiwic2V0IiwicGFnZUZpcnN0RWwiLCJfcGFnZUZpcnN0RWwkZ2V0Qm91bmQiLCJNYXRoIiwicm91bmQiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsImNvbnRleHQiLCJfdGhpczMiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInNob3VsZFNjcm9sbFRvVG9wIiwic2lkZWJhciIsInByb2R1Y3RMaXN0aW5nIiwiaHRtbCIsIiRwcm9kdWN0TGlzdGluZyIsIiRuZXh0UGFnZUVsIiwiYmVmb3JlIiwiYXBwZW5kIiwiY3VyTmV4dFBhZ2UiLCJjdXJQcmV2UGFnZSIsIm5leHRQYWdlIiwicHJldlBhZ2UiLCJkZWZhdWx0UHJvZHVjdEltYWdlIiwibm90Iiwic2Nyb2xsSW50b1ZpZXciLCJzZXRUaW1lb3V0IiwiU3RhbmRhcmRJbmZpbml0ZVNjcm9sbCIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkcmVxdWVzdE9wdGlvbnMiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJ0ZW1wbGF0ZSIsIm9uU3RhdGVDaGFuZ2UiLCJvblBvcFN0YXRlIiwiaW5maW5pdGVTY3JvbGwiLCJfcHJvdG8yIiwidXBkYXRlVmlldyIsIl90aGlzNCIsImdldFBhZ2UiLCJlcnIiLCJFcnJvciIsImdldFVybCIsImdvVG9VcmwiLCJwYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInJlbW92ZVBhcmFtcyIsImZvckVhY2giLCJlbmNvZGVQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNwbGl0IiwiYyIsImNoYXJDb2RlQXQiLCJxdWVyeURhdGEiLCJvdXQiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9
