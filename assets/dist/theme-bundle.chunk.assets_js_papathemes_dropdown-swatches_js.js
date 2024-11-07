"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_dropdown-swatches_js"],{

/***/ "./assets/js/papathemes/dropdown-swatches.js":
/*!***************************************************!*\
  !*** ./assets/js/papathemes/dropdown-swatches.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! selectize */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var selectize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selectize-css */ "./node_modules/selectize/dist/css/selectize.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

 // eslint-disable-line import/no-unresolved

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(product, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$swatchFieldSelec = _ref.swatchFieldSelector,
    swatchFieldSelector = _ref$swatchFieldSelec === void 0 ? 'form[data-cart-item-add] [data-product-option-change] [data-product-attribute="swatch"]' : _ref$swatchFieldSelec,
    _ref$getSwatchLabelFr = _ref.getSwatchLabelFromInput,
    getSwatchLabelFromInput = _ref$getSwatchLabelFr === void 0 ? function (inputEl) {
      return $(inputEl).next().children().first().attr('title');
    } : _ref$getSwatchLabelFr,
    _ref$getSwatchImageHT = _ref.getSwatchImageHTMLFromInput,
    getSwatchImageHTMLFromInput = _ref$getSwatchImageHT === void 0 ? function (inputEl) {
      return $(inputEl).next().html();
    } : _ref$getSwatchImageHT,
    _ref$isSwatchHidden = _ref.isSwatchHidden,
    isSwatchHidden = _ref$isSwatchHidden === void 0 ? function (inputEl) {
      return $(inputEl).next().is(':hidden');
    } : _ref$isSwatchHidden,
    _ref$isSwatchUnavaila = _ref.isSwatchUnavailable,
    isSwatchUnavailable = _ref$isSwatchUnavaila === void 0 ? function (inputEl) {
      return $(inputEl).next().hasClass('unavailable');
    } : _ref$isSwatchUnavaila,
    _ref$renderSelect = _ref.renderSelect,
    renderSelect = _ref$renderSelect === void 0 ? function ($formField, $select) {
      return $formField.find('.form-label').first().after($select);
    } : _ref$renderSelect,
    _ref$hideOriginalSwat = _ref.hideOriginalSwatches,
    hideOriginalSwatches = _ref$hideOriginalSwat === void 0 ? false : _ref$hideOriginalSwat,
    _ref$hideOriginalSwat2 = _ref.hideOriginalSwatchesFunc,
    hideOriginalSwatchesFunc = _ref$hideOriginalSwat2 === void 0 ? function ($formField) {
      return $formField.children('.form-option-swatch, .form-radio').css({
        position: 'absolute',
        visibility: 'hidden',
        height: 0,
        width: 0,
        overflow: 'hidden',
        margin: 0
      });
    } : _ref$hideOriginalSwat2;
  product.$scope.find(swatchFieldSelector).not('._dropdownSwatchesLoaded').addClass('_dropdownSwatchesLoaded').get().map(function (el) {
    return $(el);
  }).forEach(function ($formField) {
    var $inputs = $formField.find('input');
    var selectId = "chiara__dropdownSwatches-" + String($inputs.first().attr('name')).replace(/attribute\[(.*)\]/, 'attribute_$1');

    // Hidden select for initializing Selectize
    var $select = $("<select class=\"chiara__dropdownSwatches\" id=\"" + selectId + "\"><option value=\"\">" + product.context.txtSelectOne + "</option></select>").hide().on('change', function (event) {
      // Stop the form's change event
      event.preventDefault();
      event.stopPropagation();
    });

    // Populate the hidden select options
    $inputs.each(function (i, el) {
      var label = getSwatchLabelFromInput(el);
      $select.append("<option value=\"" + $(el).attr('value') + "\" title=\"" + label + "\" " + (el.checked ? 'selected' : '') + ">" + label + "</option>");
    });

    // Insert the hidden select to the form field
    renderSelect($formField, $select);

    // Hide the original swatches if specified
    if (hideOriginalSwatches) {
      hideOriginalSwatchesFunc($formField);
    }

    // Add label for accessibility compliance
    $select.after("<label class=\"is-srOnly\" for=\"" + selectId + "-selectized\">" + product.context.txtSelectOne + "</label>");

    // Initialize 'Selectize' select box
    $select.selectize({
      copyClassesToDropdown: true,
      render: {
        item: function item(_item, escape) {
          var $input = $inputs.filter("[value=\"" + _item.value + "\"]");
          return "\n                            <div class=\"_item " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(_item.text) + "</span>\n                            </div>\n                        ";
        },
        option: function option(item, escape) {
          var $input = $inputs.filter("[value=\"" + item.value + "\"]");
          return "\n                            <div class=\"_option " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(item.text) + "</span>\n                            </div>\n                        ";
        }
      }
    });
    var selectize = $select[0].selectize;

    // Select the original swatch when the dropdown swatch selected
    selectize.on('change', function () {
      // console.log('selectize change');
      $inputs.filter("[value=\"" + $select.val() + "\"]").trigger('click');
    });

    // Select the dropdown swatch when the original swatch selected
    product.$scope.find('[data-product-option-change]').on('change', function (_event) {
      // console.log('data-product-option-change change');
      var value = $inputs.filter(':checked').val();
      selectize.setValue(value, true);
    });

    // Update 'Selectize' options when the availablity of the original swatches changed
    product.$scope.first().on('updateProductAttributes', function () {
      // console.log('updateProductAttributes');
      var value = $inputs.filter(':checked').val();
      selectize.clearCache();
      selectize.clear(true);
      selectize.setValue(value, true);
      selectize.refreshOptions(false);
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2Ryb3Bkb3duLXN3YXRjaGVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0ksQ0FBQzs7QUFFeEIsNkJBQWUsb0NBQVVBLE9BQU8sRUFBQUMsS0FBQSxFQWdCeEI7RUFBQSxJQUFBQyxJQUFBLEdBQUFELEtBQUEsY0FBSixDQUFDLENBQUMsR0FBQUEsS0FBQTtJQUFBRSxxQkFBQSxHQUFBRCxJQUFBLENBZkZFLG1CQUFtQjtJQUFuQkEsbUJBQW1CLEdBQUFELHFCQUFBLGNBQUcseUZBQXlGLEdBQUFBLHFCQUFBO0lBQUFFLHFCQUFBLEdBQUFILElBQUEsQ0FDL0dJLHVCQUF1QjtJQUF2QkEsdUJBQXVCLEdBQUFELHFCQUFBLGNBQUcsVUFBQUUsT0FBTztNQUFBLE9BQUlDLENBQUMsQ0FBQ0QsT0FBTyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFBQSxJQUFBUCxxQkFBQTtJQUFBUSxxQkFBQSxHQUFBWCxJQUFBLENBQ3ZGWSwyQkFBMkI7SUFBM0JBLDJCQUEyQixHQUFBRCxxQkFBQSxjQUFHLFVBQUFOLE9BQU87TUFBQSxPQUFJQyxDQUFDLENBQUNELE9BQU8sQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDTSxJQUFJLENBQUMsQ0FBQztJQUFBLElBQUFGLHFCQUFBO0lBQUFHLG1CQUFBLEdBQUFkLElBQUEsQ0FDakVlLGNBQWM7SUFBZEEsY0FBYyxHQUFBRCxtQkFBQSxjQUFHLFVBQUFULE9BQU87TUFBQSxPQUFJQyxDQUFDLENBQUNELE9BQU8sQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDUyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQUEsSUFBQUYsbUJBQUE7SUFBQUcscUJBQUEsR0FBQWpCLElBQUEsQ0FDM0Rr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QUFDVCxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDekI7TUFDQVAsT0FBTyxDQUFDc0IsTUFBTSxlQUFZM0MsT0FBTyxDQUFDK0MsR0FBRyxDQUFDLENBQUMsUUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDakUsQ0FBQyxDQUFDOztJQUVGO0lBQ0F6RSxPQUFPLENBQUN1QyxNQUFNLENBQUNiLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDMkIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBcUIsTUFBTSxFQUFJO01BQ3ZFO01BQ0EsSUFBTUwsS0FBSyxHQUFHdkIsT0FBTyxDQUFDc0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDSSxHQUFHLENBQUMsQ0FBQztNQUM5Q1YsU0FBUyxDQUFDYSxRQUFRLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQyxDQUFDOztJQUVGO0lBQ0FyRSxPQUFPLENBQUN1QyxNQUFNLENBQUM1QixLQUFLLENBQUMsQ0FBQyxDQUFDMEMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLFlBQU07TUFDdkQ7TUFDQSxJQUFNZ0IsS0FBSyxHQUFHdkIsT0FBTyxDQUFDc0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDSSxHQUFHLENBQUMsQ0FBQztNQUM5Q1YsU0FBUyxDQUFDYyxVQUFVLENBQUMsQ0FBQztNQUN0QmQsU0FBUyxDQUFDZSxLQUFLLENBQUMsSUFBSSxDQUFDO01BQ3JCZixTQUFTLENBQUNhLFFBQVEsQ0FBQ04sS0FBSyxFQUFFLElBQUksQ0FBQztNQUMvQlAsU0FBUyxDQUFDZ0IsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2Ryb3Bkb3duLXN3YXRjaGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2VsZWN0aXplJztcbmltcG9ydCAnc2VsZWN0aXplLWNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb2R1Y3QsIHtcbiAgICBzd2F0Y2hGaWVsZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXSBbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic3dhdGNoXCJdJyxcbiAgICBnZXRTd2F0Y2hMYWJlbEZyb21JbnB1dCA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ3RpdGxlJyksXG4gICAgZ2V0U3dhdGNoSW1hZ2VIVE1MRnJvbUlucHV0ID0gaW5wdXRFbCA9PiAkKGlucHV0RWwpLm5leHQoKS5odG1sKCksXG4gICAgaXNTd2F0Y2hIaWRkZW4gPSBpbnB1dEVsID0+ICQoaW5wdXRFbCkubmV4dCgpLmlzKCc6aGlkZGVuJyksXG4gICAgaXNTd2F0Y2hVbmF2YWlsYWJsZSA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuaGFzQ2xhc3MoJ3VuYXZhaWxhYmxlJyksXG4gICAgcmVuZGVyU2VsZWN0ID0gKCRmb3JtRmllbGQsICRzZWxlY3QpID0+ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tbGFiZWwnKS5maXJzdCgpLmFmdGVyKCRzZWxlY3QpLFxuICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzID0gZmFsc2UsXG4gICAgaGlkZU9yaWdpbmFsU3dhdGNoZXNGdW5jID0gJGZvcm1GaWVsZCA9PiAkZm9ybUZpZWxkLmNoaWxkcmVuKCcuZm9ybS1vcHRpb24tc3dhdGNoLCAuZm9ybS1yYWRpbycpLmNzcyh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSksXG59ID0ge30pIHtcbiAgICBwcm9kdWN0LiRzY29wZS5maW5kKHN3YXRjaEZpZWxkU2VsZWN0b3IpLm5vdCgnLl9kcm9wZG93blN3YXRjaGVzTG9hZGVkJylcbiAgICAgICAgLmFkZENsYXNzKCdfZHJvcGRvd25Td2F0Y2hlc0xvYWRlZCcpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAubWFwKGVsID0+ICQoZWwpKVxuICAgICAgICAuZm9yRWFjaCgkZm9ybUZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybUZpZWxkLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJZCA9IGBjaGlhcmFfX2Ryb3Bkb3duU3dhdGNoZXMtJHtTdHJpbmcoJGlucHV0cy5maXJzdCgpLmF0dHIoJ25hbWUnKSkucmVwbGFjZSgvYXR0cmlidXRlXFxbKC4qKVxcXS8sICdhdHRyaWJ1dGVfJDEnKX1gO1xuXG4gICAgICAgICAgICAvLyBIaWRkZW4gc2VsZWN0IGZvciBpbml0aWFsaXppbmcgU2VsZWN0aXplXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChgPHNlbGVjdCBjbGFzcz1cImNoaWFyYV9fZHJvcGRvd25Td2F0Y2hlc1wiIGlkPVwiJHtzZWxlY3RJZH1cIj48b3B0aW9uIHZhbHVlPVwiXCI+JHtwcm9kdWN0LmNvbnRleHQudHh0U2VsZWN0T25lfTwvb3B0aW9uPjwvc2VsZWN0PmApXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSBmb3JtJ3MgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgaGlkZGVuIHNlbGVjdCBvcHRpb25zXG4gICAgICAgICAgICAkaW5wdXRzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBnZXRTd2F0Y2hMYWJlbEZyb21JbnB1dChlbCk7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIkeyQoZWwpLmF0dHIoJ3ZhbHVlJyl9XCIgdGl0bGU9XCIke2xhYmVsfVwiICR7ZWwuY2hlY2tlZCA/ICdzZWxlY3RlZCcgOiAnJ30+JHtsYWJlbH08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBzZWxlY3QgdG8gdGhlIGZvcm0gZmllbGRcbiAgICAgICAgICAgIHJlbmRlclNlbGVjdCgkZm9ybUZpZWxkLCAkc2VsZWN0KTtcblxuICAgICAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc3dhdGNoZXMgaWYgc3BlY2lmaWVkXG4gICAgICAgICAgICBpZiAoaGlkZU9yaWdpbmFsU3dhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMoJGZvcm1GaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBsYWJlbCBmb3IgYWNjZXNzaWJpbGl0eSBjb21wbGlhbmNlXG4gICAgICAgICAgICAkc2VsZWN0LmFmdGVyKGA8bGFiZWwgY2xhc3M9XCJpcy1zck9ubHlcIiBmb3I9XCIke3NlbGVjdElkfS1zZWxlY3RpemVkXCI+JHtwcm9kdWN0LmNvbnRleHQudHh0U2VsZWN0T25lfTwvbGFiZWw+YCk7XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgJ1NlbGVjdGl6ZScgc2VsZWN0IGJveFxuICAgICAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9pdGVtICR7aXNTd2F0Y2hVbmF2YWlsYWJsZSgkaW5wdXQpID8gJ3VuYXZhaWxhYmxlJyA6ICcnfVwiICR7aXNTd2F0Y2hIaWRkZW4oJGlucHV0KSA/ICdzdHlsZT1cImRpc3BsYXk6bm9uZVwiJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfaW1nXCI+JHtnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQoJGlucHV0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiX3RleHRcIj4ke2VzY2FwZShpdGVtLnRleHQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9vcHRpb24gJHtpc1N3YXRjaFVuYXZhaWxhYmxlKCRpbnB1dCkgPyAndW5hdmFpbGFibGUnIDogJyd9XCIgJHtpc1N3YXRjaEhpZGRlbigkaW5wdXQpID8gJ3N0eWxlPVwiZGlzcGxheTpub25lXCInIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIl9pbWdcIj4ke2dldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCgkaW5wdXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfdGV4dFwiPiR7ZXNjYXBlKGl0ZW0udGV4dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGl6ZSA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuXG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhlIG9yaWdpbmFsIHN3YXRjaCB3aGVuIHRoZSBkcm9wZG93biBzd2F0Y2ggc2VsZWN0ZWRcbiAgICAgICAgICAgIHNlbGVjdGl6ZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RpemUgY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7JHNlbGVjdC52YWwoKX1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgZHJvcGRvd24gc3dhdGNoIHdoZW4gdGhlIG9yaWdpbmFsIHN3YXRjaCBzZWxlY3RlZFxuICAgICAgICAgICAgcHJvZHVjdC4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLm9uKCdjaGFuZ2UnLCBfZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZSBjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dHMuZmlsdGVyKCc6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlICdTZWxlY3RpemUnIG9wdGlvbnMgd2hlbiB0aGUgYXZhaWxhYmxpdHkgb2YgdGhlIG9yaWdpbmFsIHN3YXRjaGVzIGNoYW5nZWRcbiAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLmZpcnN0KCkub24oJ3VwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVQcm9kdWN0QXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGlucHV0cy5maWx0ZXIoJzpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUuY2xlYXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUucmVmcmVzaE9wdGlvbnMoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInByb2R1Y3QiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJHN3YXRjaEZpZWxkU2VsZWMiLCJzd2F0Y2hGaWVsZFNlbGVjdG9yIiwiX3JlZiRnZXRTd2F0Y2hMYWJlbEZyIiwiZ2V0U3dhdGNoTGFiZWxGcm9tSW5wdXQiLCJpbnB1dEVsIiwiJCIsIm5leHQiLCJjaGlsZHJlbiIsImZpcnN0IiwiYXR0ciIsIl9yZWYkZ2V0U3dhdGNoSW1hZ2VIVCIsImdldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCIsImh0bWwiLCJfcmVmJGlzU3dhdGNoSGlkZGVuIiwiaXNTd2F0Y2hIaWRkZW4iLCJpcyIsIl9yZWYkaXNTd2F0Y2hVbmF2YWlsYSIsImlzU3dhdGNoVW5hdmFpbGFibGUiLCJoYXNDbGFzcyIsIl9yZWYkcmVuZGVyU2VsZWN0IiwicmVuZGVyU2VsZWN0IiwiJGZvcm1GaWVsZCIsIiRzZWxlY3QiLCJmaW5kIiwiYWZ0ZXIiLCJfcmVmJGhpZGVPcmlnaW5hbFN3YXQiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlcyIsIl9yZWYkaGlkZU9yaWdpbmFsU3dhdDIiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMiLCJjc3MiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWFyZ2luIiwiJHNjb3BlIiwibm90IiwiYWRkQ2xhc3MiLCJnZXQiLCJtYXAiLCJlbCIsImZvckVhY2giLCIkaW5wdXRzIiwic2VsZWN0SWQiLCJTdHJpbmciLCJyZXBsYWNlIiwiY29udGV4dCIsInR4dFNlbGVjdE9uZSIsImhpZGUiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlYWNoIiwiaSIsImxhYmVsIiwiYXBwZW5kIiwiY2hlY2tlZCIsInNlbGVjdGl6ZSIsImNvcHlDbGFzc2VzVG9Ecm9wZG93biIsInJlbmRlciIsIml0ZW0iLCJlc2NhcGUiLCIkaW5wdXQiLCJmaWx0ZXIiLCJ2YWx1ZSIsInRleHQiLCJvcHRpb24iLCJ2YWwiLCJ0cmlnZ2VyIiwiX2V2ZW50Iiwic2V0VmFsdWUiLCJjbGVhckNhY2hlIiwiY2xlYXIiLCJyZWZyZXNoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=
