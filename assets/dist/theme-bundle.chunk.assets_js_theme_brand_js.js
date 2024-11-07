"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
/* harmony import */ var _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../papathemes/faceted-infinite-scroll */ "./assets/js/papathemes/faceted-infinite-scroll.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// Supermarket Mod
// import compareProducts from './global/compare-products';



 // Papathemes - Supermarket

 // Chiara

 // papathemes-kitchenary

var largeMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_8__["default"])('large');
var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    // Chiara: infinite scroll
    var enableInfiniteScroll = $('#product-listing-container').data('brandInfiniteScroll');

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
    (0,_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Papathemes - Supermarket
    if ($('#facetedSearch').length > 0) {
      // Chiara: init infinite scroll for faceted search
      if (enableInfiniteScroll) {
        this.facetedInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.FacetedInfiniteScroll(infiniteScrollOptions);
      }
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Chiara: init infinite scroll for standard category page without faceted filters
      if (enableInfiniteScroll) {
        this.standardInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.StandardInfiniteScroll(Object.assign({
          requestOptions: {
            config: {
              brand: {
                products: {
                  limit: this.context.brandProductsPerPage
                }
              }
            },
            template: 'brand/product-listing'
          }
        }, infiniteScrollOptions));
      }
    }
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
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.off('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content, url) {
      // Chiara: Infinite Scroll mod
      if (_this2.facetedInfiniteScroll) {
        return _this2.facetedInfiniteScroll.refreshView(content, url);
      }
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');

      // Papathemes - Bulk Order
      if (_this2.bulkOrder) {
        _this2.bulkOrder.reinit();
      }

      // kitchenary: scroll to top of product listing
      (0,_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_9__.scrollToTopProducts)();
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
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ3BDO0FBQ0E7QUFDNkQ7QUFDVDtBQUNtQztBQUMvQixDQUFDO0FBQ0Q7QUFDOEMsQ0FBQztBQUN6QztBQUNFLENBQUM7O0FBRWpFLElBQU1XLG1CQUFtQixHQUFHRixvRUFBcUIsQ0FBQyxPQUFPLENBQUM7QUFBQyxJQUN0Q0csS0FBSywwQkFBQUMsWUFBQTtFQUN0QixTQUFBRCxNQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR2IsbUdBQTJCLENBQUNVLE9BQU8sQ0FBQztJQUFDLE9BQUFDLEtBQUE7RUFDckU7RUFBQ0csY0FBQSxDQUFBTixLQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBTSxNQUFBLEdBQUFQLEtBQUEsQ0FBQVEsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTjtJQUNBLElBQU1DLG9CQUFvQixHQUFHQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDOztJQUV4RjtJQUNBLElBQUksSUFBSSxDQUFDVixPQUFPLEtBQUssSUFBSSxDQUFDQSxPQUFPLENBQUNXLG9CQUFvQixJQUFJLElBQUksQ0FBQ1gsT0FBTyxDQUFDWSxZQUFZLENBQUMsRUFBRTtNQUNsRixJQUFJLENBQUNDLFNBQVMsR0FBR3JCLGtFQUFnQixDQUFDLElBQUksQ0FBQ1EsT0FBTyxDQUFDO0lBQ25EOztJQUVBO0lBQ0E7SUFDQVosd0VBQWUsQ0FBQyxJQUFJLENBQUNZLE9BQU8sQ0FBQzs7SUFFN0I7SUFDQSxJQUFNYyxxQkFBcUIsR0FBRztNQUMxQkQsU0FB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QUcsRUFBSztNQUNyRTtNQUNBLElBQUluQixNQUFJLENBQUMvQixxQkFBcUIsRUFBRTtRQUM1QixPQUFPK0IsTUFBSSxDQUFDL0IscUJBQXFCLENBQUNtRCxXQUFXLENBQUNGLE9BQU8sRUFBRUMsR0FBRyxDQUFDO01BQy9EO01BRUF4RCx3QkFBd0IsQ0FBQzBELElBQUksQ0FBQ0gsT0FBTyxDQUFDSixjQUFjLENBQUM7TUFDckRGLHVCQUF1QixDQUFDUyxJQUFJLENBQUNILE9BQU8sQ0FBQ0gsT0FBTyxDQUFDO01BRTdDN0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDb0UsY0FBYyxDQUFDLGNBQWMsQ0FBQzs7TUFFeEM7TUFDQSxJQUFJdEIsTUFBSSxDQUFDMUMsU0FBUyxFQUFFO1FBQ2hCMEMsTUFBSSxDQUFDMUMsU0FBUyxDQUFDaUUsTUFBTSxDQUFDLENBQUM7TUFDM0I7O01BRUE7TUFDQWxGLDRFQUFtQixDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFFO01BQ0NtRix1QkFBdUIsRUFBRTtRQUNyQnRCLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxlQUFlLEVBQWZBLGVBQWU7UUFDZkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCRSxjQUFjLEVBQWRBO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQW5FLEtBQUE7QUFBQSxFQXhKOEJYLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG4vLyBTdXBlcm1hcmtldCBNb2Rcbi8vIGltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4uL3BhcGF0aGVtZXMvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYWN0aW9uLWJhcic7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuaW1wb3J0IGJ1bGtPcmRlckZhY3RvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9idWxrLW9yZGVyJztcbmltcG9ydCB7IFN0YW5kYXJkSW5maW5pdGVTY3JvbGwsIEZhY2V0ZWRJbmZpbml0ZVNjcm9sbCB9IGZyb20gJy4uL3BhcGF0aGVtZXMvZmFjZXRlZC1pbmZpbml0ZS1zY3JvbGwnOyAvLyBDaGlhcmFcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XG5pbXBvcnQgeyBzY3JvbGxUb1RvcFByb2R1Y3RzIH0gZnJvbSAnLi4vcGFwYXRoZW1lcy90aGVtZS11dGlscyc7IC8vIHBhcGF0aGVtZXMta2l0Y2hlbmFyeVxuXG5jb25zdCBsYXJnZU1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KCdsYXJnZScpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBDaGlhcmE6IGluZmluaXRlIHNjcm9sbFxuICAgICAgICBjb25zdCBlbmFibGVJbmZpbml0ZVNjcm9sbCA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuZGF0YSgnYnJhbmRJbmZpbml0ZVNjcm9sbCcpO1xuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQgJiYgKHRoaXMuY29udGV4dC5zaG93X2J1bGtfb3JkZXJfbW9kZSB8fCB0aGlzLmNvbnRleHQudXNlQnVsa09yZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIgPSBidWxrT3JkZXJGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBlcm1hcmtldCBNb2RcbiAgICAgICAgLy8gY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lczogaW5maW5pdGUgc2Nyb2xsXG4gICAgICAgIGNvbnN0IGluZmluaXRlU2Nyb2xsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGJ1bGtPcmRlcjogdGhpcy5idWxrT3JkZXIsXG4gICAgICAgICAgICBlbmFibGVJbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgICAgIHR4dExvYWRNb3JlOiB0aGlzLmNvbnRleHQudHh0TG9hZE1vcmUsXG4gICAgICAgICAgICBpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYzogKCRwYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpID0+ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcucHJvZHVjdEdyaWQnKS5iZWZvcmUoJHBhZ2luYXRpb24pLFxuICAgICAgICAgICAgaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmM6ICgkcGFnaW5hdGlvbiwgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyKSA9PiAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnLnByb2R1Y3RHcmlkJykuYWZ0ZXIoJHBhZ2luYXRpb24pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgICAgICBpZiAoZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2V0ZWRJbmZpbml0ZVNjcm9sbCA9IG5ldyBGYWNldGVkSW5maW5pdGVTY3JvbGwoaW5maW5pdGVTY3JvbGxPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIC8vIENoaWFyYTogaW5pdCBpbmZpbml0ZSBzY3JvbGwgZm9yIHN0YW5kYXJkIGNhdGVnb3J5IHBhZ2Ugd2l0aG91dCBmYWNldGVkIGZpbHRlcnNcbiAgICAgICAgICAgIGlmIChlbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRhcmRJbmZpbml0ZVNjcm9sbCA9IG5ldyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAuLi5pbmZpbml0ZVNjcm9sbE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRlQWN0aW9uTm90Q2hlY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RmlsdGVyID0gJCgnI3BhcGF0aGVtZXMtcHJvZHVjdHNGaWx0ZXItZm9ybScpO1xuICAgICAgICAgICAgaWYgKCFsYXJnZU1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yYWRpbycsICRwcm9kdWN0RmlsdGVyKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoY2hlY2tib3gpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoY2hlY2tib3gpLmF0dHIoJ2lkJykgPT09ICdtb2RlXzFfbWFpbicgfHwgJChjaGVja2JveCkuYXR0cignaWQnKSA9PT0gJ21vZGVfMl9tYWluJyB8fCAkKGNoZWNrYm94KS5hdHRyKCdpZCcpID09PSAnbW9kZV9ib19tYWluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvW3ZhbHVlPVwiMlwiXScsICRwcm9kdWN0RmlsdGVyKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdICsgbGFiZWwuZm9ybS1vcHRpb24nLCAkcHJvZHVjdEZpbHRlcikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1mbGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvW3ZhbHVlPVwiMlwiXScsICRwcm9kdWN0RmlsdGVyKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvW3ZhbHVlPVwiMlwiXSArIGxhYmVsLmZvcm0tb3B0aW9uJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yYWRpbycsICRwcm9kdWN0RmlsdGVyKS5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNoZWNrZWQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1DaGVja2VkLmF0dHIoJ2lkJykgPT09ICdtb2RlXzFfbWFpbicgfHwgaXRlbUNoZWNrZWQuYXR0cignaWQnKSA9PT0gJ21vZGVfMl9tYWluJyB8fCBpdGVtQ2hlY2tlZC5hdHRyKCdpZCcpID09PSAnbW9kZV9ib19tYWluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvW3ZhbHVlPVwiMlwiXSArIGxhYmVsLmZvcm0tb3B0aW9uJywgJHByb2R1Y3RGaWx0ZXIpLmNzcygnZGlzcGxheScsICdpbmxpbmUtZmxleCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5mb3JtLXJhZGlvW3ZhbHVlPVwiMlwiXScsICRwcm9kdWN0RmlsdGVyKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgJCgnLmZvcm0tcmFkaW9bdmFsdWU9XCIyXCJdICsgbGFiZWwuZm9ybS1vcHRpb24nLCAkcHJvZHVjdEZpbHRlcikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1mbGV4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGlkZUFjdGlvbk5vdENoZWNrZWQoKTtcbiAgICAgICAgbGFyZ2VNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcihoaWRlQWN0aW9uTm90Q2hlY2tlZCk7XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2guZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCwgdXJsKSA9PiB7XG4gICAgICAgICAgICAvLyBDaGlhcmE6IEluZmluaXRlIFNjcm9sbCBtb2RcbiAgICAgICAgICAgIGlmICh0aGlzLmZhY2V0ZWRJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY2V0ZWRJbmZpbml0ZVNjcm9sbC5yZWZyZXNoVmlldyhjb250ZW50LCB1cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEJ1bGsgT3JkZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGtPcmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyLnJlaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBraXRjaGVuYXJ5OiBzY3JvbGwgdG8gdG9wIG9mIHByb2R1Y3QgbGlzdGluZ1xuICAgICAgICAgICAgc2Nyb2xsVG9Ub3BQcm9kdWN0cygpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImFjdGlvbkJhckZhY3RvcnkiLCJidWxrT3JkZXJGYWN0b3J5IiwiU3RhbmRhcmRJbmZpbml0ZVNjcm9sbCIsIkZhY2V0ZWRJbmZpbml0ZVNjcm9sbCIsIm1lZGlhUXVlcnlMaXN0RmFjdG9yeSIsInNjcm9sbFRvVG9wUHJvZHVjdHMiLCJsYXJnZU1lZGlhUXVlcnlMaXN0IiwiQnJhbmQiLCJfQ2F0YWxvZ1BhZ2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJlbmFibGVJbmZpbml0ZVNjcm9sbCIsIiQiLCJkYXRhIiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJpbmZpbml0ZVNjcm9sbE9wdGlvbnMiLCJ0eHRMb2FkTW9yZSIsImluc2VydFRvcFBhZ2luYXRpb25GdW5jIiwiJHBhZ2luYXRpb24iLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJmaW5kIiwiYmVmb3JlIiwiaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmMiLCJhZnRlciIsImxlbmd0aCIsImZhY2V0ZWRJbmZpbml0ZVNjcm9sbCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJzdGFuZGFyZEluZmluaXRlU2Nyb2xsIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJicmFuZFByb2R1Y3RzUGVyUGFnZSIsInRlbXBsYXRlIiwiaGlkZUFjdGlvbk5vdENoZWNrZWQiLCIkcHJvZHVjdEZpbHRlciIsIm1hdGNoZXMiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsInByb3AiLCJhdHRyIiwiY3NzIiwiZSIsIml0ZW1DaGVja2VkIiwidGFyZ2V0IiwiYWRkTGlzdGVuZXIiLCJkZXN0cm95IiwiZmFjZXRlZFNlYXJjaCIsIm9mZiIsIl90aGlzMiIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3BfYnlfYnJhbmQiLCJzaG93TW9yZSIsImNvbnRlbnQiLCJ1cmwiLCJyZWZyZXNoVmlldyIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsInJlaW5pdCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
