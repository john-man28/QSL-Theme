"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../papathemes/faceted-infinite-scroll */ "./assets/js/papathemes/faceted-infinite-scroll.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

 // Chiara
var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    // Chiara: infinite scroll
    var enableInfiniteScroll = $('[data-brands-infinite-scroll]').data('brandsInfiniteScroll');

    // Chiara: init infinite scroll for standard category page without faceted filters
    if (enableInfiniteScroll) {
      this.standardInfiniteScroll = new _papathemes_faceted_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__.StandardInfiniteScroll({
        requestOptions: {
          config: {
            brands: {
              limit: this.context.brandsPerPage
            }
          },
          template: 'brand/brand-listing'
        },
        productListingContainerSelector: '[data-brands-infinite-scroll]',
        productSelector: '.brandGrid .brand',
        productGridSelector: '.brandGrid',
        enableInfiniteScroll: enableInfiniteScroll,
        txtLoadMore: this.context.txtLoadMore,
        insertTopPaginationFunc: function insertTopPaginationFunc($pagination, $productListingContainer) {
          return $productListingContainer.find('.brandGrid').before($pagination);
        },
        insertBottomPaginationFunc: function insertBottomPaginationFunc($pagination, $productListingContainer) {
          return $productListingContainer.find('.brandGrid').after($pagination);
        }
      });
    }
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3FDLENBQUM7QUFBQSxJQUUzREUsTUFBTSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELE9BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosTUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxNQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN2QkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOO0lBQ0EsSUFBTUMsb0JBQW9CLEdBQUdDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7O0lBRTVGO0lBQ0EsSUFBSUYsb0JBQW9CLEVBQUU7TUFDdEIsSUFBSSxDQUFDRyxzQkFBc0IsR0FBRyxJQUFJWix1RkFBc0IsQ0FBQztRQUNyRGEsY0FBYyxFQUFFO1VBQ1pDLE1BQU0sRUFBRTtZQUNKQyxNQUFNLEVBQUU7Y0FDSkMsS0FBSyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQztZQUN4QjtVQUNKLENBQUM7VUFDREMsUUFBUSxFQUFFO1FBQ2QsQ0FBQztRQUNEQywrQkFBK0IsRUFBRSwrQkFBK0I7UUFDaEVDLGVBQWUsRUFBRSxtQkFBbUI7UUFDcENDLG1CQUFtQixFQUFFLFlBQVk7UUFDakNiLG9CQUFvQixFQUFwQkEsb0JBQW9CO1FBQ3BCYyxXQUFXLEVBQUUsSUFBSSxDQUFDTixPQUFPLENBQUNNLFdBQVc7UUFDckNDLHVCQUF1QixFQUFFLFNBQXpCQSx1QkFBdUJBLENBQUdDLFdBQVcsRUFBRUMsd0JBQXdCO1VBQUEsT0FBS0Esd0JBQXdCLENBQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxXQUFXLENBQUM7UUFBQTtRQUNuSUksMEJBQTBCLEVBQUUsU0FBNUJBLDBCQUEwQkEsQ0FBR0osV0FBVyxFQUFFQyx3QkFBd0I7VUFBQSxPQUFLQSx3QkFBd0IsQ0FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDRyxLQUFLLENBQUNMLFdBQVcsQ0FBQztRQUFBO01BQ3pJLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUFBLE9BQUF4QixNQUFBO0FBQUEsRUF6QitCRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsIH0gZnJvbSAnLi4vcGFwYXRoZW1lcy9mYWNldGVkLWluZmluaXRlLXNjcm9sbCc7IC8vIENoaWFyYVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gQ2hpYXJhOiBpbmZpbml0ZSBzY3JvbGxcbiAgICAgICAgY29uc3QgZW5hYmxlSW5maW5pdGVTY3JvbGwgPSAkKCdbZGF0YS1icmFuZHMtaW5maW5pdGUtc2Nyb2xsXScpLmRhdGEoJ2JyYW5kc0luZmluaXRlU2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gQ2hpYXJhOiBpbml0IGluZmluaXRlIHNjcm9sbCBmb3Igc3RhbmRhcmQgY2F0ZWdvcnkgcGFnZSB3aXRob3V0IGZhY2V0ZWQgZmlsdGVyc1xuICAgICAgICBpZiAoZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhbmRhcmRJbmZpbml0ZVNjcm9sbCA9IG5ldyBTdGFuZGFyZEluZmluaXRlU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuYnJhbmRzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnYnJhbmQvYnJhbmQtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZ0NvbnRhaW5lclNlbGVjdG9yOiAnW2RhdGEtYnJhbmRzLWluZmluaXRlLXNjcm9sbF0nLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RTZWxlY3RvcjogJy5icmFuZEdyaWQgLmJyYW5kJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0R3JpZFNlbGVjdG9yOiAnLmJyYW5kR3JpZCcsXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICAgICAgdHh0TG9hZE1vcmU6IHRoaXMuY29udGV4dC50eHRMb2FkTW9yZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRUb3BQYWdpbmF0aW9uRnVuYzogKCRwYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpID0+ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcuYnJhbmRHcmlkJykuYmVmb3JlKCRwYWdpbmF0aW9uKSxcbiAgICAgICAgICAgICAgICBpbnNlcnRCb3R0b21QYWdpbmF0aW9uRnVuYzogKCRwYWdpbmF0aW9uLCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIpID0+ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcuYnJhbmRHcmlkJykuYWZ0ZXIoJHBhZ2luYXRpb24pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJTdGFuZGFyZEluZmluaXRlU2Nyb2xsIiwiQnJhbmRzIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJlbmFibGVJbmZpbml0ZVNjcm9sbCIsIiQiLCJkYXRhIiwic3RhbmRhcmRJbmZpbml0ZVNjcm9sbCIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYnJhbmRzIiwibGltaXQiLCJjb250ZXh0IiwiYnJhbmRzUGVyUGFnZSIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmdDb250YWluZXJTZWxlY3RvciIsInByb2R1Y3RTZWxlY3RvciIsInByb2R1Y3RHcmlkU2VsZWN0b3IiLCJ0eHRMb2FkTW9yZSIsImluc2VydFRvcFBhZ2luYXRpb25GdW5jIiwiJHBhZ2luYXRpb24iLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJmaW5kIiwiYmVmb3JlIiwiaW5zZXJ0Qm90dG9tUGFnaW5hdGlvbkZ1bmMiLCJhZnRlciIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
