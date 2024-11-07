"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */






// import { autoExpandCategoryMenu } from '../papathemes/theme-utils'; // Supermarket
var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // autoExpandCategoryMenu(this.context); // Supermarket

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView-scope'), this.context, window.BCData ? window.BCData.product_attributes : null); // Supermarket Mod
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();

    // Supermarket: Track recently viewed products
    $('body').trigger('productviewed', [Number($('.productView-scope').find('input[name="product_id"]').val())]);
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    // papathemes-supermarket
    var anchor = $('#tab-reviews').length > 0 ? 'tab-reviews' : 'product-reviews';
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + "#" + anchor);
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + "#" + anchor);
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMEM7QUFDSDtBQUNlO0FBQ0E7QUFDSDtBQUNNO0FBQ3pEO0FBQUEsSUFHcUJNLE9BQU8sMEJBQUFDLFlBQUE7RUFDeEIsU0FBQUQsUUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0UsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtJQUMvQkwsS0FBQSxDQUFLTSxXQUFXLEdBQUdDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM1RFAsS0FBQSxDQUFLUSxnQkFBZ0IsR0FBR0QsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDO0lBQUMsT0FBQVAsS0FBQTtFQUN2RTtFQUFDUyxjQUFBLENBQUFaLE9BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFZLE1BQUEsR0FBQWIsT0FBQSxDQUFBYyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDTjs7SUFFQTtJQUNBTixDQUFDLENBQUNPLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBTTtNQUN2QyxJQUFJRixNQUFJLENBQUNYLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU9iLE1BQU0sQ0FBQ2MsT0FBTyxDQUFDQyxZQUFZLEtBQUssVUFBVSxFQUFFO1FBQy9GZixNQUFNLENBQUNjLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLElBQUksRUFBRUosUUFBUSxDQUFDSyxLQUFLLEVBQUVoQixNQUFNLENBQUNDLFFBQVEsQ0FBQ2dCLFFBQVEsQ0FBQztNQUMv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QyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbi8vIGltcG9ydCB7IGF1dG9FeHBhbmRDYXRlZ29yeU1lbnUgfSBmcm9tICcuLi9wYXBhdGhlbWVzL3RoZW1lLXV0aWxzJzsgLy8gU3VwZXJtYXJrZXRcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBhdXRvRXhwYW5kQ2F0ZWdvcnlNZW51KHRoaXMuY29udGV4dCk7IC8vIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3LXNjb3BlJyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YSA/IHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzIDogbnVsbCk7IC8vIFN1cGVybWFya2V0IE1vZFxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldDogVHJhY2sgcmVjZW50bHkgdmlld2VkIHByb2R1Y3RzXG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdwcm9kdWN0dmlld2VkJywgW051bWJlcigkKCcucHJvZHVjdFZpZXctc2NvcGUnKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKV0pO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldFxuICAgICAgICBjb25zdCBhbmNob3IgPSAkKCcjdGFiLXJldmlld3MnKS5sZW5ndGggPiAwID8gJ3RhYi1yZXZpZXdzJyA6ICdwcm9kdWN0LXJldmlld3MnO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9IyR7YW5jaG9yfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0jJHthbmNob3J9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJCIsIiRidWxrUHJpY2luZ0xpbmsiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpczIiLCJkb2N1bWVudCIsIm9uIiwiaW5kZXhPZiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJ0cmlnZ2VyIiwiTnVtYmVyIiwiZmluZCIsInZhbCIsImRlZmF1bHQiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiaGFzQ2xhc3MiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhbmNob3IiLCJsZW5ndGgiLCJhdHRyIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkYXRhIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==
