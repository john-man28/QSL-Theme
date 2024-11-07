"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_cart-popup_js"],{

/***/ "./assets/js/papathemes/cart-popup.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/cart-popup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartPopup)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/cart */ "./assets/js/theme/cart.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var DATAKEY = 'data-papathemes-cart-popup';
var CartPopup = /*#__PURE__*/function (_Cart) {
  function CartPopup(context, $scope) {
    var _this;
    _this = _Cart.call(this, context) || this;
    // mooncat
    _this.onCartUpdate = _this.onCartUpdate.bind(_this);
    _this.$scope = $scope;
    _this.$modal = null;
    _this.$cartPageContent = _this.$scope.find("[" + DATAKEY + "]").length > 0 ? _this.$scope.find("[" + DATAKEY + "]") : _this.$scope;
    _this.$cartContent = _this.$scope.find("[" + DATAKEY + "-content]");
    _this.$cartMessages = _this.$scope.find("[" + DATAKEY + "-status]");
    _this.$cartTotals = _this.$scope.find("[" + DATAKEY + "-totals]");
    _this.$cartAdditionalCheckoutBtns = _this.$scope.find("[" + DATAKEY + "-additional-checkout-buttons]");
    _this.$overlay = _this.$cartPageContent.find('.loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    _this.template = {
      content: 'papathemes/cart-popup/content',
      totals: 'papathemes/cart-popup/totals',
      pageTitle: 'papathemes/cart-popup/page-title',
      statusMessages: 'papathemes/cart-popup/status-messages',
      additionalCheckoutButtons: 'papathemes/cart-popup/additional-checkout-buttons'
    };
    _this.requireMainCartReload = false;
    _this.setApplePaySupport();
    _this.bindEvents();
    return _this;
  }
  _inheritsLoose(CartPopup, _Cart);
  var _proto = CartPopup.prototype;
  _proto.onReady = function onReady() {
    // don't use onReady from parent class
  };
  _proto.bindEvents = function bindEvents() {
    var _this2 = this;
    _Cart.prototype.bindEvents.call(this);

    // Remove 'cart-update' event for this class
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hooks.off('cart-update', this.onCartUpdate);

    // Trigger 'cart-update' event when closing the cart preview popup if required
    this.$scope.one('close.toggle', function () {
      if (_this2.requireMainCartReload) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hooks.emit('cart-update');
      }
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    _Cart.prototype.refreshContent.call(this, remove);

    // Mark the main cart should be updated
    this.requireMainCartReload = true;
  };
  return CartPopup;
}(_theme_cart__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2NhcnQtcG9wdXBfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZDtBQUVqQyxJQUFNRSxPQUFPLEdBQUcsNEJBQTRCO0FBQUMsSUFFeEJDLFNBQVMsMEJBQUFDLEtBQUE7RUFDMUIsU0FBQUQsVUFBWUUsT0FBTyxFQUFFQyxNQUFNLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ3pCQSxLQUFBLEdBQUFILEtBQUEsQ0FBQUksSUFBQSxPQUFNSCxPQUFPLENBQUM7SUFDZDtJQUNBRSxLQUFBLENBQUtFLFlBQVksR0FBR0YsS0FBQSxDQUFLRSxZQUFZLENBQUNDLElBQUksQ0FBQUgsS0FBSyxDQUFDO0lBRWhEQSxLQUFBLENBQUtELE1BQU0sR0FBR0EsTUFBTTtJQUNwQkMsS0FBQSxDQUFLSSxNQUFNLEdBQUcsSUFBSTtJQUNsQkosS0FBQSxDQUFLSyxnQkFBZ0IsR0FBR0wsS0FBQSxDQUFLRCxNQUFNLENBQUNPLElBQUksT0FBS1gsT0FBTyxNQUFHLENBQUMsQ0FBQ1ksTUFBTSxHQUFHLENBQUMsR0FBR1AsS0FBQSxDQUFLRCxNQUFNLENBQUNPLElBQUksT0FBS1gsT0FBTyxNQUFHLENBQUMsR0FBR0ssS0FBQSxDQUFLRCxNQUFNO0lBQ3BIQyxLQUFBLENBQUtRLFlBQVksR0FBR1IsS0FBQSxDQUFLRCxNQUFNLENBQUNPLElBQUksT0FBS1gsT0FBTyxjQUFXLENBQUM7SUFDNURLLEtBQUEsQ0FBS1MsYUFBYSxHQUFHVCxLQUFBLENBQUtELE1BQU0sQ0FBQ08sSUFBSSxPQUFLWCxPQUFPLGFBQVUsQ0FBQztJQUM1REssS0FBQSxDQUFLVSxXQUFXLEdBQUdWLEtBQUEsQ0FBS0QsTUFBTSxDQUFDTyxJQUFJLE9BQUtYLE9BQU8sYUFBVSxDQUFDO0lBQzFESyxLQUFBLENBQUtXLDJCQUEyQixHQUFHWCxLQUFBLENBQUtELE1BQU0sQ0FBQ08sSUFBSSxPQUFLWCxPQUFPLGtDQUErQixDQUFDO0lBQy9GSyxLQUFBLENBQUtZLFFBQVEsR0FBR1osS0FBQSxDQUFLSyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hETyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWJiLEtBQUEsQ0FBS2MsUUFBUSxHQUFHO01BQ1pDLE9BQU8sRUFBRSwrQkFBK0I7TUFDeENDLE1BQU0sRUFBRSw4QkFBOEI7TUFDdENDLFNBQVMsRUFBRSxrQ0FBa0M7TUFDN0NDLGNBQWMsRUFBRSx1Q0FBdUM7TUFDdkRDLHlCQUF5QixFQUFFO0lBQy9CLENBQUM7SUFFRG5CLEtBQUEsQ0FBS29CLHFCQUFxQixHQUFHLEtBQUs7SUFFbENwQixLQUFBLENBQUtxQixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pCckIsS0FBQSxDQUFLc0IsVUFBVSxDQUFDLENBQUM7SUFBQyxPQUFBdEIsS0FBQTtFQUN0QjtFQUFDdUIsY0FBQSxDQUFBM0IsU0FBQSxFQUFBQyxLQUFBO0VBQUEsSUFBQTJCLE1BQUEsR0FBQTVCLFNBQUEsQ0FBQTZCLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ047RUFBQSxDQUNIO0VBQUFGLE1BQUEsQ0FFREYsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUFBLElBQUFLLE1BQUE7SUFDVDlCLEtBQUEsQ0FBQTRCLFNBQUEsQ0FBTUgsVUFBVSxDQUFBckIsSUFBQTs7SUFFaEI7SUFDQVIsd0VBQVcsQ0FBQ29DLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDM0IsWUFBWSxDQUFDOztJQUVqRDtJQUNBLElBQUksQ0FBQ0gsTUFBTSxDQUFDK0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFNO01BQ2xDLElBQUlILE1BQUksQ0FBQ1AscUJBQXFCLEVBQUU7UUFDNUIzQix3RUFBVyxDQUFDc0MsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQVAsTUFBQSxDQUVEUSxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ25CcEMsS0FBQSxDQUFBNEIsU0FBQSxDQUFNTyxjQUFjLENBQUEvQixJQUFBLE9BQUNnQyxNQUFNOztJQUUzQjtJQUNBLElBQUksQ0FBQ2IscUJBQXFCLEdBQUcsSUFBSTtFQUNyQyxDQUFDO0VBQUEsT0FBQXhCLFNBQUE7QUFBQSxFQXJEa0NGLG1EQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1raXRjaGVuYXJ5Ly4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FydC1wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vdGhlbWUvY2FydCc7XG5cbmNvbnN0IERBVEFLRVkgPSAnZGF0YS1wYXBhdGhlbWVzLWNhcnQtcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0UG9wdXAgZXh0ZW5kcyBDYXJ0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCAkc2NvcGUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIC8vIG1vb25jYXRcbiAgICAgICAgdGhpcy5vbkNhcnRVcGRhdGUgPSB0aGlzLm9uQ2FydFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudCA9IHRoaXMuJHNjb3BlLmZpbmQoYFske0RBVEFLRVl9XWApLmxlbmd0aCA+IDAgPyB0aGlzLiRzY29wZS5maW5kKGBbJHtEQVRBS0VZfV1gKSA6IHRoaXMuJHNjb3BlO1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9IHRoaXMuJHNjb3BlLmZpbmQoYFske0RBVEFLRVl9LWNvbnRlbnRdYCk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9IHRoaXMuJHNjb3BlLmZpbmQoYFske0RBVEFLRVl9LXN0YXR1c11gKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9IHRoaXMuJHNjb3BlLmZpbmQoYFske0RBVEFLRVl9LXRvdGFsc11gKTtcbiAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSB0aGlzLiRzY29wZS5maW5kKGBbJHtEQVRBS0VZfS1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdYCk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuZmluZCgnLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdwYXBhdGhlbWVzL2NhcnQtcG9wdXAvY29udGVudCcsXG4gICAgICAgICAgICB0b3RhbHM6ICdwYXBhdGhlbWVzL2NhcnQtcG9wdXAvdG90YWxzJyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ3BhcGF0aGVtZXMvY2FydC1wb3B1cC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAncGFwYXRoZW1lcy9jYXJ0LXBvcHVwL3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICBhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zOiAncGFwYXRoZW1lcy9jYXJ0LXBvcHVwL2FkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9ucycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZXF1aXJlTWFpbkNhcnRSZWxvYWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBkb24ndCB1c2Ugb25SZWFkeSBmcm9tIHBhcmVudCBjbGFzc1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBSZW1vdmUgJ2NhcnQtdXBkYXRlJyBldmVudCBmb3IgdGhpcyBjbGFzc1xuICAgICAgICB1dGlscy5ob29rcy5vZmYoJ2NhcnQtdXBkYXRlJywgdGhpcy5vbkNhcnRVcGRhdGUpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgJ2NhcnQtdXBkYXRlJyBldmVudCB3aGVuIGNsb3NpbmcgdGhlIGNhcnQgcHJldmlldyBwb3B1cCBpZiByZXF1aXJlZFxuICAgICAgICB0aGlzLiRzY29wZS5vbmUoJ2Nsb3NlLnRvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVNYWluQ2FydFJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmhvb2tzLmVtaXQoJ2NhcnQtdXBkYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBzdXBlci5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuXG4gICAgICAgIC8vIE1hcmsgdGhlIG1haW4gY2FydCBzaG91bGQgYmUgdXBkYXRlZFxuICAgICAgICB0aGlzLnJlcXVpcmVNYWluQ2FydFJlbG9hZCA9IHRydWU7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwiQ2FydCIsIkRBVEFLRVkiLCJDYXJ0UG9wdXAiLCJfQ2FydCIsImNvbnRleHQiLCIkc2NvcGUiLCJfdGhpcyIsImNhbGwiLCJvbkNhcnRVcGRhdGUiLCJiaW5kIiwiJG1vZGFsIiwiJGNhcnRQYWdlQ29udGVudCIsImZpbmQiLCJsZW5ndGgiLCIkY2FydENvbnRlbnQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkb3ZlcmxheSIsImhpZGUiLCJ0ZW1wbGF0ZSIsImNvbnRlbnQiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMiLCJyZXF1aXJlTWFpbkNhcnRSZWxvYWQiLCJzZXRBcHBsZVBheVN1cHBvcnQiLCJiaW5kRXZlbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiaG9va3MiLCJvZmYiLCJvbmUiLCJlbWl0IiwicmVmcmVzaENvbnRlbnQiLCJyZW1vdmUiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
