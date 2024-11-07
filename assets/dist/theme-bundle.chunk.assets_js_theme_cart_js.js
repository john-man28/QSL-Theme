(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









// papathemes-kitchenary
var serial = function serial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
};
var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    // mooncat
    this.onCartUpdate = this.onCartUpdate.bind(this);
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;

    // mooncat
    this.template = {
      content: 'cart/content',
      totals: 'cart/totals',
      pageTitle: 'cart/page-title',
      statusMessages: 'cart/status-messages',
      additionalCheckoutButtons: 'cart/additional-checkout-buttons'
    };
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = this.$cartPageContent.find("input[name=\"qty-" + itemId + "\"]"); // mooncat edited
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    // Start Ticket 1002
    var newQty_updated;
    var getPackValue = $target.parent('.form-increment').siblings('[data-pack-value]').val();
    if (getPackValue && getPackValue !== undefined) {
      getPackValue = parseInt(getPackValue);
      newQty_updated = $target.data('action') === 'inc' ? oldQty + getPackValue : oldQty - getPackValue;
    } else {
      newQty_updated = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    }
    var newQty = newQty_updated;
    //console.log('newQty '+newQty); 
    // End Ticket 1002

    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = this.$cartPageContent.find("input[name=\"qty-" + itemId + "\"]"); // mooncat edited
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (!this.$modal) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $changedOption = $(currentTarget); // papathemes-supermarket fix Cornerstone bug
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');

      // Supermarket: display selected swatch title
      if ($changedOption.data('productAttributeLabel')) {
        $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html($changedOption.data('productAttributeLabel'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = this.$cartPageContent.find('[data-cart-page-title]');
    // mooncat edited
    var options = {
      template: this.template
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      if (!quantity) {
        return window.location.reload();
      }
      _this5.bindEvents();
      _this5.$overlay.hide();
      var price = $('[data-cart-price]', _this5.$cartContent).data('cart-price') || 0;
      var priceFormatted = $('[data-cart-formatted]', _this5.$cartContent).data('cart-formatted') || '';
      if (price === 0) {
        $('body').trigger('cart-quantity-update', quantity);
      } else {
        $('body').trigger('cart-quantity-update', [quantity, priceFormatted]);
      }
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: _this6.context.cancelButtonText
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
    // }}}

    // papathemes-kitchenary {{{
    // Select and remove item cart checked
    var $delete = this.$cartContent.find('[data-cart-delete]').on('click', function (event) {
      event.preventDefault();
      $delete.prop('disabled', true);
      _this6.$overlay.show();
      var itemIds = _this6.$cartContent.find('[data-cart-item-checkbox]').filter(':checked').get().map(function (el) {
        return $(el).val();
      });
      var funcs = itemIds.map(function (itemId) {
        return function () {
          return new Promise(function (resolve) {
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function () {
              resolve();
            });
          });
        };
      });
      serial(funcs).then(function () {
        _this6.refreshContent(true);
      });
    });
    var $select = this.$cartContent.find('[data-cart-select]').on('change', function () {
      if ($select.is(':checked')) {
        $('[data-cart-item-checkbox]', _this6.$cartContent).prop('checked', true).trigger('change');
      } else {
        $('[data-cart-item-checkbox]', _this6.$cartContent).prop('checked', false).trigger('change');
      }
    });
    $('[data-cart-item-checkbox]', this.$cartContent).on('change', function () {
      if (_this6.$cartContent.find('[data-cart-item-checkbox]').filter(':checked').length > 0) {
        $delete.prop('disabled', false);
      } else {
        $delete.prop('disabled', true);
      }
      if ($('[data-cart-item-checkbox]:checked', _this6.$cartContent).length === $('[data-cart-item-checkbox]', _this6.$cartContent).length) {
        $select.prop('checked', true);
      } else {
        $select.prop('checked', false);
      }
    });
    // }}}

    // mooncat: attach 'cart-update' event to refresh the cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('cart-update', this.onCartUpdate);
  }

  // mooncat
  ;
  _proto.onCartUpdate = function onCartUpdate() {
    this.refreshContent();
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    // mooncat edited
    var $couponForm = this.$cartPageContent.find('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    var $couponContainer = this.$cartPageContent.find('.coupon-code');
    this.$cartPageContent.find('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      _this7.$cartPageContent.find('.coupon-code-cancel').show().focus(); // papathemes-beautify mod
      $codeInput.trigger('focus');
    });
    this.$cartPageContent.find('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      _this7.$cartPageContent.find('.coupon-code-cancel').hide();
      _this7.$cartPageContent.find('.coupon-code-add').show().focus(); // papathemes-beautify mod
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    // mooncat edited
    var $certContainer = this.$cartPageContent.find('.gift-certificate-code');
    var $certForm = this.$cartPageContent.find('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    this.$cartPageContent.find('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      _this8.$cartPageContent.find('.gift-certificate-cancel').toggle();
      _this8.$cartPageContent.find('.gift-certificate-cancel:visible').focus(); // papathemes-beautify
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      _this8.$cartPageContent.find('.gift-certificate-add').toggle();
      _this8.$cartPageContent.find('.gift-certificate-cancel').toggle();
      _this8.$cartPageContent.find('.gift-certificate-add:visible').focus(); // papathemes-beautify
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    this.$cartContent.find('[data-item-giftwrap]').on('click', function (event) {
      // mooncat edited
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"](this.$cartPageContent.find('[data-shipping-estimator]'), shippingErrorMessages); // mooncat edited
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-field-type="State"]', this.$element);
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--ups');
      var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }
      var $field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimator');
    var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-country"]', $estimatorForm).val(),
        state_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-state"]', $estimatorForm).val(),
        city: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quotes').html(response.content);

        // bind the select button
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').show().focus();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').show().focus();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_0__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_1__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockDefaultMessage = this.context.outOfStockDefaultMessage;
    var outOfStockMessage = data.out_of_stock_message;
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    if (outOfStockMessage) {
      outOfStockMessage = " (" + outOfStockMessage + ")";
    } else {
      outOfStockMessage = " (" + outOfStockDefaultMessage + ")";
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope),
      $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (data.price instanceof Object) {
      this.updatePriceView(viewModel, data.price);
    }
    if (data.weight instanceof Object) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && typeof data.stock === 'number') {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);
    this.updateWalletButtonsView(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.updateWalletButtonsView = function updateWalletButtonsView(data) {
    this.toggleWalletButtonsVisibility(data.purchasable && data.instock);
  };
  _proto.toggleWalletButtonsVisibility = function toggleWalletButtonsVisibility(shouldShow) {
    var viewModel = this.getViewModel(this.$scope);
    if (shouldShow) {
      viewModel.$walletButtons.show();
    } else {
      viewModel.$walletButtons.hide();
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUU2QjtBQUNTO0FBQ2pDO0FBQ1c7QUFDaUI7QUFDbEI7QUFDakI7O0FBRXhDO0FBQ0EsSUFBTVUsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLElBQUk7SUFBQSxPQUFLRCxPQUFPLENBQUNFLElBQUksQ0FBQyxVQUFBQyxNQUFNO01BQUEsT0FBSUYsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUFBLEdBQUVLLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFBQyxJQUNsSUMsSUFBSSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELEtBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxJQUFBLENBQUFMLFNBQUE7RUFBQVUsTUFBQSxDQUNyQkMsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNWLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFaEQsSUFBSSxDQUFDVyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3hDLElBQUksQ0FBQ0MsWUFBWSxHQUFHRCxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0QkEsZUFBZSxtQkFBTyxDQUFDLHVEQUFhO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9zdGF0ZS1jb3VudHJ5LmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydC5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvdGhlbWUvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ3Rvci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVXcmFwLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEhvbGRlci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yZXBsYWNlSG9sZGVycy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JpbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2hlY2tJc0dpZnRDZXJ0VmFsaWQgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG4vLyBwYXBhdGhlbWVzLWtpdGNoZW5hcnlcbmNvbnN0IHNlcmlhbCA9IGZ1bmNzID0+IGZ1bmNzLnJlZHVjZSgocHJvbWlzZSwgZnVuYykgPT4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBmdW5jKCkudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSkpLCBQcm9taXNlLnJlc29sdmUoW10pKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gbW9vbmNhdFxuICAgICAgICB0aGlzLm9uQ2FydFVwZGF0ZSA9IHRoaXMub25DYXJ0VXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xuICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0XScpO1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXG4gICAgICAgICAgICAuaGlkZSgpOyAvLyBUT0RPOiB0ZW1wb3JhcnkgdW50aWwgcm9wZXIgcHVsbHMgaW4gaGlzIGNhcnQgY29tcG9uZW50c1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSBudWxsO1xuXG4gICAgICAgIC8vIG1vb25jYXRcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxuICAgICAgICAgICAgYWRkaXRpb25hbENoZWNrb3V0QnV0dG9uczogJ2NhcnQvYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZXRBcHBsZVBheVN1cHBvcnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKGBpbnB1dFtuYW1lPVwicXR5LSR7aXRlbUlkfVwiXWApOyAvLyBtb29uY2F0IGVkaXRlZFxuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgICAvLyBTdGFydCBUaWNrZXQgMTAwMlxuICAgICAgICBsZXQgbmV3UXR5X3VwZGF0ZWQ7XG4gICAgICAgIGxldCBnZXRQYWNrVmFsdWUgPSAkdGFyZ2V0LnBhcmVudCgnLmZvcm0taW5jcmVtZW50Jykuc2libGluZ3MoJ1tkYXRhLXBhY2stdmFsdWVdJykudmFsKCk7XG4gICAgICAgIGlmKGdldFBhY2tWYWx1ZSAmJiBnZXRQYWNrVmFsdWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBnZXRQYWNrVmFsdWUgPSBwYXJzZUludChnZXRQYWNrVmFsdWUpO1xuICAgICAgICAgICAgbmV3UXR5X3VwZGF0ZWQgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIGdldFBhY2tWYWx1ZSA6IG9sZFF0eSAtIGdldFBhY2tWYWx1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuZXdRdHlfdXBkYXRlZCA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UXR5ID0gbmV3UXR5X3VwZGF0ZWQ7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ25ld1F0eSAnK25ld1F0eSk7IFxuICAgICAgICAvLyBFbmQgVGlja2V0IDEwMDJcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtYXhFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kY2FydFBhZ2VDb250ZW50LmZpbmQoYGlucHV0W25hbWU9XCJxdHktJHtpdGVtSWR9XCJdYCk7IC8vIG1vb25jYXQgZWRpdGVkXG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG5cbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobmV3UXR5KSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5pbnZhbGlkRW50cnlNZXNzYWdlLnJlcGxhY2UoJ1tFTlRSWV0nLCBpbnZhbGlkRW50cnkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtYXhFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IHByb2R1Y3RGb3JDaGFuZ2VJZDogcHJvZHVjdElkLCAuLi50aGlzLmNvbnRleHQgfTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICBpZiAoIXRoaXMuJG1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaGlkZS1jb250ZW50Jyk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCB0aGlzLiRtb2RhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdE9wdGlvbnNDb250YWluZXIubGVuZ3RoICYmIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5jc3MoJ2hlaWdodCcsIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbkNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoY3VycmVudFRhcmdldCk7IC8vIHBhcGF0aGVtZXMtc3VwZXJtYXJrZXQgZml4IENvcm5lcnN0b25lIGJ1Z1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkKGN1cnJlbnRUYXJnZXQpLmZpbmQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcblxuICAgICAgICAgICAgLy8gU3VwZXJtYXJrZXQ6IGRpc3BsYXkgc2VsZWN0ZWQgc3dhdGNoIHRpdGxlXG4gICAgICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAkY2hhbmdlZE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbCgkY2hhbmdlZE9wdGlvbi5kYXRhKCdwcm9kdWN0QXR0cmlidXRlTGFiZWwnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICAvLyBtb29uY2F0IGVkaXRlZFxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgaWYgKCFxdWFudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gJCgnW2RhdGEtY2FydC1wcmljZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydC1wcmljZScpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBwcmljZUZvcm1hdHRlZCA9ICQoJ1tkYXRhLWNhcnQtZm9ybWF0dGVkXScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0LWZvcm1hdHRlZCcpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKHByaWNlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBbcXVhbnRpdHksIHByaWNlRm9ybWF0dGVkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcbiAgICAgICAgICAgIHByZVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY29udGV4dC5jYW5jZWxCdXR0b25UZXh0LFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfX19XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1raXRjaGVuYXJ5IHt7e1xuICAgICAgICAvLyBTZWxlY3QgYW5kIHJlbW92ZSBpdGVtIGNhcnQgY2hlY2tlZFxuICAgICAgICBjb25zdCAkZGVsZXRlID0gdGhpcy4kY2FydENvbnRlbnQuZmluZCgnW2RhdGEtY2FydC1kZWxldGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRkZWxldGUucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkcyA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1jaGVja2JveF0nKS5maWx0ZXIoJzpjaGVja2VkJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpLnZhbCgpKTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmNzID0gaXRlbUlkcy5tYXAoaXRlbUlkID0+ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc2VyaWFsKGZ1bmNzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSB0aGlzLiRjYXJ0Q29udGVudC5maW5kKCdbZGF0YS1jYXJ0LXNlbGVjdF0nKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCRzZWxlY3QuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1jYXJ0LWl0ZW0tY2hlY2tib3hdJywgdGhpcy4kY2FydENvbnRlbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY2FydC1pdGVtLWNoZWNrYm94XScsIHRoaXMuJGNhcnRDb250ZW50KS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jYXJ0LWl0ZW0tY2hlY2tib3hdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kY2FydENvbnRlbnQuZmluZCgnW2RhdGEtY2FydC1pdGVtLWNoZWNrYm94XScpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGRlbGV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRlbGV0ZS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWNhcnQtaXRlbS1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGNhcnRDb250ZW50KS5sZW5ndGggPT09ICQoJ1tkYXRhLWNhcnQtaXRlbS1jaGVja2JveF0nLCB0aGlzLiRjYXJ0Q29udGVudCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzZWxlY3QucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIH19fVxuXG4gICAgICAgIC8vIG1vb25jYXQ6IGF0dGFjaCAnY2FydC11cGRhdGUnIGV2ZW50IHRvIHJlZnJlc2ggdGhlIGNhcnRcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ2NhcnQtdXBkYXRlJywgdGhpcy5vbkNhcnRVcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIG1vb25jYXRcbiAgICBvbkNhcnRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICAvLyBtb29uY2F0IGVkaXRlZFxuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9IHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9IHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKCcuY291cG9uLWNvZGUnKTtcblxuICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKS5mb2N1cygpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IG1vZFxuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50LmZpbmQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKS5mb2N1cygpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IG1vZFxuICAgICAgICB9KTtcblxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEVtcHR5IGNvZGVcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCgkY29kZUlucHV0LmRhdGEoJ2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUNvZGUoY29kZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xuICAgICAgICAvLyBtb29uY2F0IGVkaXRlZFxuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9IHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9IHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudC5maW5kKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50LmZpbmQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50LmZpbmQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbDp2aXNpYmxlJykuZm9jdXMoKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkOnZpc2libGUnKS5mb2N1cygpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjZXJ0SW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICghY2hlY2tJc0dpZnRDZXJ0VmFsaWQoY29kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh2YWxpZGF0aW9uRGljdGlvbmFyeS5pbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuZmluZCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7IC8vIG1vb25jYXQgZWRpdGVkXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb250ZXh0LnNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIHByb3ZpbmNlOiB0aGlzLmNvbnRleHQuc2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcih0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpLCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpOyAvLyBtb29uY2F0IGVkaXRlZFxuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcy5jb3VudHJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCkuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGFyaWFLZXlDb2RlcyA9IHtcbiAgICBSRVRVUk46IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxufTtcbiIsImltcG9ydCB7IGFyaWFLZXlDb2RlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xuICAgIGl0ZW1Db2xsZWN0aW9uLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLmZvY3VzKCk7XG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uID0gKGxhc3RJdGVtSWR4LCBjdXJyZW50SWR4KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xuICAgIGNhc2UgY3VycmVudElkeCA8IDA6IHJldHVybiBsYXN0SXRlbUlkeDtcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZTtcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xuICAgICAgICBjb25zdCBwcmV2SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS5mb2N1cygpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5ET1dOOiB7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLmZvY3VzKCk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0ICRpdGVtQ29sbGVjdGlvbiA9ICRjb250YWluZXIuZmluZChpdGVtU2VsZWN0b3IpO1xuXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XG59O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjQ2FydEVkaXRQcm9kdWN0RmllbGRzRm9ybScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3Lmh0bWwoKS5tYXRjaCgvJyguKj8pJy8pWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JztcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3Rpb25zU2V0KSB7XG4gICAgcmV0dXJuIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICBpZiAoYXJlRGVmYXVsdE90aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xuICAgICAgICBsZXQgb3V0T2ZTdG9ja01lc3NhZ2UgPSBkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tNZXNzYWdlfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tEZWZhdWx0TWVzc2FnZX0pYDtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiB0eXBlb2YgZGF0YS5zdG9jayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcblxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xuXG4gICAgICAgIGlmIChhZGRUb0NhcnRXcmFwcGVyLmlzKCc6aGlkZGVuJykgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aG91dF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhvdXRfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJyk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkxpbmsgPSAkaXRlbS5jaGlsZHJlbignLnBhZ2luYXRpb24tbGluaycpO1xuXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgIHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnLCBgJHt3aXNobGlzdFVybH1wYWdlPSR7cGFnZU51bWJlcn1gKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBoZWxwcyB0byB3aXRoZHJhdyBkaWZmZXJlbmNlcyBpbiBzdHJ1Y3R1cmVzIGFyb3VuZCB0aGUgc3RlbmNpbCByZXNvdXJjZSBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcbiAgICBjb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG5cbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0ICRuZXh0SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9ICQoJ1tkYXRhLXBhZ2luYXRpb24tY3VycmVudC1wYWdlLWxpbmtdJykuYXR0cignaHJlZicpO1xuICAgIGNvbnN0IHBhcnRpYWxQYWdpbmF0aW9uVXJsID0gY3VycmVudEhyZWYuc3BsaXQoJ3BhZ2U9Jykuc2hpZnQoKTtcblxuICAgIGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzKHBhcnRpYWxQYWdpbmF0aW9uVXJsLCAkcHJldkl0ZW0sICRuZXh0SXRlbSk7XG59O1xuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBXZWFrTWFwIHdpbGwgZGVmaW5lZCBpbiB0aGUgZ2xvYmFsIHNjb3BlIGlmIG5hdGl2ZSBXZWFrTWFwIGlzIG5vdCBzdXBwb3J0ZWQuXG5jb25zdCB3ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5jb25zdCBTd2FsID0gc3dlZXRBbGVydC5taXhpbih7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidXR0b24nLFxuICAgICAgICBjYW5jZWxCdXR0b246ICdidXR0b24nLFxuICAgIH0sXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBTd2FsO1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2hMaXN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvdW50L2FkZC13aXNobGlzdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvbmZpcm0gYm94IGJlZm9yZSBkZWxldGluZyBhbGwgd2lzaCBsaXN0c1xuICAgICAqL1xuICAgIHdpc2hsaXN0RGVsZXRlQ29uZmlybSgpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS13aXNobGlzdC1kZWxldGVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaGxpc3RGb3JtKSB7XG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJXaXNobGlzdE5hbWVFcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aXNobGlzdFBhZ2luYXRvckhlbHBlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNoTGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aXNobGlzdERlbGV0ZUNvbmZpcm0oKTtcbiAgICB9XG59XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpbnN0YW5jZSBvZiBgQ3RvcmAgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBpdCB3YXMgaW52b2tlZCBhcyBwYXJ0IG9mIGEgYG5ld2AgZXhwcmVzc2lvbiBvciBieSBgY2FsbGAgb3IgYGFwcGx5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ3RvciBUaGUgY29uc3RydWN0b3IgdG8gd3JhcC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN0b3IoQ3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlIGEgYHN3aXRjaGAgc3RhdGVtZW50IHRvIHdvcmsgd2l0aCBjbGFzcyBjb25zdHJ1Y3RvcnMuIFNlZVxuICAgIC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtZnVuY3Rpb24tb2JqZWN0cy1jYWxsLXRoaXNhcmd1bWVudC1hcmd1bWVudHNsaXN0XG4gICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBuZXcgQ3RvcjtcbiAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0pO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICBjYXNlIDM6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XG4gICAgICBjYXNlIDY6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdKTtcbiAgICAgIGNhc2UgNzogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0pO1xuICAgIH1cbiAgICB2YXIgdGhpc0JpbmRpbmcgPSBiYXNlQ3JlYXRlKEN0b3IucHJvdG90eXBlKSxcbiAgICAgICAgcmVzdWx0ID0gQ3Rvci5hcHBseSh0aGlzQmluZGluZywgYXJncyk7XG5cbiAgICAvLyBNaW1pYyB0aGUgY29uc3RydWN0b3IncyBgcmV0dXJuYCBiZWhhdmlvci5cbiAgICAvLyBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTMuMi4yIGZvciBtb3JlIGRldGFpbHMuXG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiB0aGlzQmluZGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDdG9yO1xuIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBjcmVhdGVDdG9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQ3RvcicpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gaW52b2tlIGl0IHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nXG4gKiBvZiBgdGhpc0FyZ2AgYW5kIGBwYXJ0aWFsc2AgcHJlcGVuZGVkIHRvIHRoZSBhcmd1bWVudHMgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJ0aWFscyBUaGUgYXJndW1lbnRzIHRvIHByZXBlbmQgdG8gdGhvc2UgcHJvdmlkZWQgdG9cbiAqICB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgd3JhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFydGlhbChmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgaXNCaW5kID0gYml0bWFzayAmIFdSQVBfQklORF9GTEFHLFxuICAgICAgQ3RvciA9IGNyZWF0ZUN0b3IoZnVuYyk7XG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICAgIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBsZWZ0SW5kZXggPSAtMSxcbiAgICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgICAgYXJncyA9IEFycmF5KGxlZnRMZW5ndGggKyBhcmdzTGVuZ3RoKSxcbiAgICAgICAgZm4gPSAodGhpcyAmJiB0aGlzICE9PSByb290ICYmIHRoaXMgaW5zdGFuY2VvZiB3cmFwcGVyKSA/IEN0b3IgOiBmdW5jO1xuXG4gICAgd2hpbGUgKCsrbGVmdEluZGV4IDwgbGVmdExlbmd0aCkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXhdID0gcGFydGlhbHNbbGVmdEluZGV4XTtcbiAgICB9XG4gICAgd2hpbGUgKGFyZ3NMZW5ndGgtLSkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXgrK10gPSBhcmd1bWVudHNbKythcmdzSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHkoZm4sIGlzQmluZCA/IHRoaXNBcmcgOiB0aGlzLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQYXJ0aWFsO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGNyZWF0ZVdyYXAgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwJyksXG4gICAgZ2V0SG9sZGVyID0gcmVxdWlyZSgnLi9fZ2V0SG9sZGVyJyksXG4gICAgcmVwbGFjZUhvbGRlcnMgPSByZXF1aXJlKCcuL19yZXBsYWNlSG9sZGVycycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDEsXG4gICAgV1JBUF9QQVJUSUFMX0ZMQUcgPSAzMjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2BcbiAqIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIFRoZSBgXy5iaW5kLnBsYWNlaG9sZGVyYCB2YWx1ZSwgd2hpY2ggZGVmYXVsdHMgdG8gYF9gIGluIG1vbm9saXRoaWMgYnVpbGRzLFxuICogbWF5IGJlIHVzZWQgYXMgYSBwbGFjZWhvbGRlciBmb3IgcGFydGlhbGx5IGFwcGxpZWQgYXJndW1lbnRzLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgbmF0aXZlIGBGdW5jdGlvbiNiaW5kYCwgdGhpcyBtZXRob2QgZG9lc24ndCBzZXQgdGhlIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IG9mIGJvdW5kIGZ1bmN0aW9ucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcnRpYWxzXSBUaGUgYXJndW1lbnRzIHRvIGJlIHBhcnRpYWxseSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYm91bmQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGdyZWV0KGdyZWV0aW5nLCBwdW5jdHVhdGlvbikge1xuICogICByZXR1cm4gZ3JlZXRpbmcgKyAnICcgKyB0aGlzLnVzZXIgKyBwdW5jdHVhdGlvbjtcbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIHZhciBib3VuZCA9IF8uYmluZChncmVldCwgb2JqZWN0LCAnaGknKTtcbiAqIGJvdW5kKCchJyk7XG4gKiAvLyA9PiAnaGkgZnJlZCEnXG4gKlxuICogLy8gQm91bmQgd2l0aCBwbGFjZWhvbGRlcnMuXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgXywgJyEnKTtcbiAqIGJvdW5kKCdoaScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICovXG52YXIgYmluZCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmMsIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gIHZhciBiaXRtYXNrID0gV1JBUF9CSU5EX0ZMQUc7XG4gIGlmIChwYXJ0aWFscy5sZW5ndGgpIHtcbiAgICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRIb2xkZXIoYmluZCkpO1xuICAgIGJpdG1hc2sgfD0gV1JBUF9QQVJUSUFMX0ZMQUc7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVdyYXAoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMpO1xufSk7XG5cbi8vIEFzc2lnbiBkZWZhdWx0IHBsYWNlaG9sZGVycy5cbmJpbmQucGxhY2Vob2xkZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kO1xuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiY2hlY2tJc0dpZnRDZXJ0VmFsaWQiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJ1dGlscyIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsIkNhcnRJdGVtRGV0YWlscyIsInN3YWwiLCJzZXJpYWwiLCJmdW5jcyIsInJlZHVjZSIsInByb21pc2UiLCJmdW5jIiwidGhlbiIsInJlc3VsdCIsIkFycmF5IiwicHJvdG90eXBlIiwiY29uY2F0IiwiYmluZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ2FydCIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJvblJlYWR5Iiwib25DYXJ0VXBkYXRlIiwiJG1vZGFsIiwiJGNhcnRQYWdlQ29udGVudCIsIiQiLCIkY2FydENvbnRlbnQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkb3ZlcmxheSIsImhpZGUiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsInRlbXBsYXRlIiwiY29udGVudCIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwiYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyIsInNldEFwcGxlUGF5U3VwcG9ydCIsImJpbmRFdmVudHMiLCJ3aW5kb3ciLCJBcHBsZVBheVNlc3Npb24iLCJhZGRDbGFzcyIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMiLCJpdGVtSWQiLCJkYXRhIiwiJGVsIiwiZmluZCIsIm9sZFF0eSIsInBhcnNlSW50IiwidmFsIiwibWF4UXR5IiwibWluUXR5IiwibWluRXJyb3IiLCJtYXhFcnJvciIsIm5ld1F0eV91cGRhdGVkIiwiZ2V0UGFja1ZhbHVlIiwicGFyZW50Iiwic2libGluZ3MiLCJ1bmRlZmluZWQiLCJuZXdRdHkiLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiX3RoaXMyIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaXNJbnRlZ2VyIiwiY29udGV4dCIsImludmFsaWRFbnRyeU1lc3NhZ2UiLCJyZXBsYWNlIiwiY2FydFJlbW92ZUl0ZW0iLCJfdGhpczMiLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwiX3RoaXM0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdEZvckNoYW5nZUlkIiwibW9kYWwiLCJvcHRpb25zIiwib3BlbiIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsIm9wdGlvbkNoYW5nZUhhbmRsZXIiLCIkcHJvZHVjdE9wdGlvbnNDb250YWluZXIiLCJtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCIsIm91dGVySGVpZ2h0IiwibGVuZ3RoIiwiY3NzIiwiaGFzQ2xhc3MiLCJvbmUiLCJvcGVuZWQiLCJwcm9kdWN0RGV0YWlscyIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJjbG9zZXN0IiwiaHRtbCIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInRleHQiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiX3RoaXM1IiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJwcmljZSIsInByaWNlRm9ybWF0dGVkIiwidHJpZ2dlciIsImJpbmRDYXJ0RXZlbnRzIiwiX3RoaXM2IiwiZGVib3VuY2VUaW1lb3V0IiwiX2JpbmQiLCJfZGVib3VuY2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uUXR5Rm9jdXMiLCJ2YWx1ZSIsImNoYW5nZSIsInN0cmluZyIsImZpcmUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCIkZGVsZXRlIiwiaXRlbUlkcyIsImZpbHRlciIsImdldCIsIm1hcCIsImVsIiwiJHNlbGVjdCIsImlzIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIl90aGlzNyIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsIiRjb3Vwb25Db250YWluZXIiLCJmb2N1cyIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXM4IiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJpbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXM5IiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCJpZCIsImluZGV4IiwiYWxsb3dNZXNzYWdlIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0Vycm9yTWVzc2FnZXMiLCJjb3VudHJ5Iiwic2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlIiwicHJvdmluY2UiLCJzaGlwcGluZ1Byb3ZpbmNlRXJyb3JNZXNzYWdlIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0Iiwic3RhdGVDb3VudHJ5Iiwibm9kIiwiVmFsaWRhdG9ycyIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsInN1Ym1pdCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImlzTmFOIiwiZXJyb3JNZXNzYWdlIiwiJGVsZSIsImVsZVZhbCIsIlVQU1JhdGVUb2dnbGUiLCIkZXN0aW1hdG9yRm9ybVVwcyIsIiRlc3RpbWF0b3JGb3JtRGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiJGxhc3QiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJhdHRyIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInJlbW92ZUNsYXNzIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsInNldENoZWNrZWRSYWRpb0l0ZW0iLCJpdGVtQ29sbGVjdGlvbiIsIml0ZW1JZHgiLCJlYWNoIiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJlIiwia2V5Q29kZSIsImxhc3RDb2xsZWN0aW9uSXRlbUlkeCIsInZhbHVlcyIsImluY2x1ZGVzIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJpc0Jyb3dzZXJJRSIsImNvbnZlcnRJbnRvQXJyYXkiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiY2FsbCIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwidHJpbSIsImhhc0RlZmF1bHRPcHRpb25zIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsIl9pc0VtcHR5IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaXNTYXRpc2ZpZWQiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJ4IiwiY2hlY2tlZCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsIm1hdGNoIiwiY2FyZCIsImNlcnQiLCJXaXNobGlzdCIsImluaXRSYWRpb09wdGlvbnMiLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJhcmVEZWZhdWx0T3Rpb25zU2V0IiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsImluaXRSYWRpb0F0dHJpYnV0ZXMiLCJsb2FkIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsImkiLCJyYWRpbyIsIiRyYWRpbyIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImluZGV4T2YiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsImdldFZpZXdNb2RlbCIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwiJGxhYmVsIiwiJHZhbHVlIiwidXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCIkd2FsbGV0QnV0dG9ucyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwiZm9ybWF0dGVkIiwidmFyaWFudElkIiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsIndpdGhfdGF4IiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtaW4iLCJtYXgiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIm1lc3NhZ2UiLCJ0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eSIsInNob3VsZFNob3ciLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJyZXQiLCJuYW1lIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiY2xhc3MiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4IiwiX2VhY2giLCJzdGF0ZXMiLCJzdGF0ZU9iaiIsImNhbGxiYWNrIiwiY291bnRyeU5hbWUiLCJnZXRCeU5hbWUiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJjb2xsZWN0aW9uIiwic2xpY2UiLCJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwiX2xlbiIsInBhZ2luYXRpb25JdGVtcyIsIl9rZXkiLCJfIiwicGFnaW5hdGlvbkxpbmsiLCJwYWdlTnVtYmVyIiwid2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIiLCIkcGFnaW5hdGlvbkxpc3QiLCIkbmV4dEl0ZW0iLCIkcHJldkl0ZW0iLCJjdXJyZW50SHJlZiIsInBhcnRpYWxQYWdpbmF0aW9uVXJsIiwic2hpZnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJwb3AiLCJhY2MiLCJzd2VldEFsZXJ0Iiwid2Vha01hcCIsIldlYWtNYXAiLCJTd2FsIiwibWl4aW4iLCJidXR0b25zU3R5bGluZyIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsIldpc2hMaXN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndpc2hsaXN0RGVsZXRlQ29uZmlybSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwiZW50ZXJXaXNobGlzdE5hbWVFcnJvciIsIiRhZGRXaXNoTGlzdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9
