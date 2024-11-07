"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_theme_subscribe_js"],{

/***/ "./assets/js/theme/subscribe.js":
/*!**************************************!*\
  !*** ./assets/js/theme/subscribe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _papathemes_newsletter_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../papathemes/newsletter-popup */ "./assets/js/papathemes/newsletter-popup.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// Supermarket Theme: Implement for newsletter popup



var Subscribe = /*#__PURE__*/function (_PageManager) {
  function Subscribe() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Subscribe, _PageManager);
  var _proto = Subscribe.prototype;
  _proto.loaded = function loaded(next) {
    if (this.context.nl_popup_show !== '' && this.context.nl_popup_show !== 'hide') {
      var params = new URLSearchParams(window.location.search);
      if (params.get('result') === 'success') {
        (0,_papathemes_newsletter_popup__WEBPACK_IMPORTED_MODULE_1__.hideForSubscribed)();
      }
    }
    next();
  };
  return Subscribe;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zdWJzY3JpYmVfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDeUI7QUFBQSxJQUU5Q0UsU0FBUywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFVBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosU0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxTQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUMxQkUsTUFBTSxHQUFOLFNBQUFBLE1BQU1BLENBQUNDLElBQUksRUFBRTtJQUNULElBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLGFBQWEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDRCxPQUFPLENBQUNDLGFBQWEsS0FBSyxNQUFNLEVBQUU7TUFDNUUsSUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztNQUMxRCxJQUFJSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDcENqQiwrRUFBaUIsQ0FBQyxDQUFDO01BQ3ZCO0lBQ0o7SUFDQVMsSUFBSSxDQUFDLENBQUM7RUFDVixDQUFDO0VBQUEsT0FBQVIsU0FBQTtBQUFBLEVBVGtDRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy90aGVtZS9zdWJzY3JpYmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwZXJtYXJrZXQgVGhlbWU6IEltcGxlbWVudCBmb3IgbmV3c2xldHRlciBwb3B1cFxuXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGhpZGVGb3JTdWJzY3JpYmVkIH0gZnJvbSAnLi4vcGFwYXRoZW1lcy9uZXdzbGV0dGVyLXBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaWJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGxvYWRlZChuZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQubmxfcG9wdXBfc2hvdyAhPT0gJycgJiYgdGhpcy5jb250ZXh0Lm5sX3BvcHVwX3Nob3cgIT09ICdoaWRlJykge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuZ2V0KCdyZXN1bHQnKSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgaGlkZUZvclN1YnNjcmliZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiaGlkZUZvclN1YnNjcmliZWQiLCJTdWJzY3JpYmUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwibG9hZGVkIiwibmV4dCIsImNvbnRleHQiLCJubF9wb3B1cF9zaG93IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
