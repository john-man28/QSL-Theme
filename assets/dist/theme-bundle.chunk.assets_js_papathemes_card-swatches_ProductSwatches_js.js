"use strict";
(self["webpackChunkpapathemes_kitchenary"] = self["webpackChunkpapathemes_kitchenary"] || []).push([["assets_js_papathemes_card-swatches_ProductSwatches_js"],{

/***/ "./assets/js/papathemes/card-swatches/Card.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/Card.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var Card = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {jQuery} options.$scope
   * @param {jQuery} options.$attributesContainer
   * @param {number} options.productId
   * @param {string} options.productViewFile
   * @param {string} options.attributesTemplate
   * @param {string} options.templateCustomTags
   * @param {string} options.addToCartFormSelector
   * @param {jQuery} options.$cardImage
   * @param {string} options.imageSize
   * @param {function} options.inputFinderFunc
   * @param {number} options.swatchesLimit
   * @param {function} options.imageReplacerFunc
   * @param {string[]} options.includeOptions
   * @param {boolean} options.displayInStockOnly
   * @param {boolean} options.autoSelectOptionValues
   * @param {boolean} [options.autoInit]
   * @param {Object} [options.graphQLNode]
   * @param {boolean} options.showSwatches
   * @param {boolean} options.shouldUpdateMinMaxQty
   */
  function Card(_ref) {
    var $scope = _ref.$scope,
      $attributesContainer = _ref.$attributesContainer,
      productId = _ref.productId,
      productViewFile = _ref.productViewFile,
      attributesTemplate = _ref.attributesTemplate,
      templateCustomTags = _ref.templateCustomTags,
      addToCartFormSelector = _ref.addToCartFormSelector,
      $cardImage = _ref.$cardImage,
      imageSize = _ref.imageSize,
      inputFinderFunc = _ref.inputFinderFunc,
      swatchesLimit = _ref.swatchesLimit,
      imageReplacerFunc = _ref.imageReplacerFunc,
      includeOptions = _ref.includeOptions,
      displayInStockOnly = _ref.displayInStockOnly,
      autoSelectOptionValues = _ref.autoSelectOptionValues,
      _ref$autoInit = _ref.autoInit,
      autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
      graphQLNode = _ref.graphQLNode,
      showSwatches = _ref.showSwatches,
      shouldUpdateMinMaxQty = _ref.shouldUpdateMinMaxQty;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.imageSize = imageSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.includeOptions = includeOptions;
    this.displayInStockOnly = displayInStockOnly;
    this.autoSelectOptionValues = autoSelectOptionValues;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;
    this.showSwatches = showSwatches;
    this.shouldUpdateMinMaxQty = shouldUpdateMinMaxQty;
    if (this.autoInit) {
      this.init();
    }
  }
  var _proto = Card.prototype;
  _proto.init = function init() {
    if (this.showSwatches) {
      if (this.displayInStockOnly) {
        this.requestInStockAttributes();
      } else if (this.graphQLNode) {
        this.buildProductOptions();
      } else {
        this.requestProductOptions();
      }
    }
    if (this.shouldUpdateMinMaxQty && this.graphQLNode) {
      this.updateMinMaxQty();
    }
  };
  _proto.updateMinMaxQty = function updateMinMaxQty() {
    var _this$graphQLNode = this.graphQLNode,
      minPurchaseQuantity = _this$graphQLNode.minPurchaseQuantity,
      maxPurchaseQuantity = _this$graphQLNode.maxPurchaseQuantity;
    var $input = this.$scope.find('[data-card-quantity-change] input');
    var qty = Number($input.val()) || 1;
    if (minPurchaseQuantity) {
      $input.attr('min', minPurchaseQuantity).attr('data-quantity-min', minPurchaseQuantity);
      if (qty < minPurchaseQuantity) {
        $input.val(minPurchaseQuantity);
      }
    }
    if (maxPurchaseQuantity) {
      $input.attr('max', maxPurchaseQuantity).attr('data-quantity-max', maxPurchaseQuantity);
      if (qty > maxPurchaseQuantity) {
        $input.val(maxPurchaseQuantity);
      }
    }
  };
  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};
        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };
  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;
    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };
  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;
    if (attributesData === void 0) {
      attributesData = {};
    }
    var data = {
      attributes: []
    };
    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;
        if (_this3.includeOptions.length > 0 && !_this3.includeOptions.includes(String(optionNode.displayName).toLocaleUpperCase())) {
          return _options;
        }

        // only display swatch or rectangle options if includeOptions is empty
        if ((!_this3.includeOptions || _this3.includeOptions.length === 0) && optionNode.displayStyle !== 'Swatch' && optionNode.displayStyle !== 'RectangleBoxes') {
          return _options;
        }
        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;
            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors || valueNode.label) {
                _values.push({
                  content: valueNode.imageUrl // eslint-disable-line no-nested-ternary
                  ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors ? valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join('') : "<span class=\"form-option-variant\">" + valueNode.label + "</span>",
                  label: valueNode.label,
                  type: valueNode.imageUrl || valueNode.hexColors ? 'swatch' : 'rectangle',
                  attributeId: optionNode.entityId,
                  attributeName: optionNode.displayName,
                  attributeValue: valueNode.entityId
                });
              }
            }
            return _values;
          }, []);
          if (values.length > 0) {
            _options.push(values);
          }
        }
        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (_i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));
          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });
        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }
    if (data.attributes.length === 0) {
      return;
    }
    var html = mustache__WEBPACK_IMPORTED_MODULE_0___default().render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;
    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append('<input type="hidden" name="action" value="add">');
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';
        if (optionNode.values) {
          defaultValue = _this3.autoSelectOptionValues && optionNode.values.edges.length > 0 ? optionNode.values.edges[0].node.entityId : '';
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, defaultValue);
          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }
        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
    } else {
      // build Form from AJAX request
      var $form2 = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide();

      // Remove all 'id' to avoid duplicated label.for in quick-view
      $form2.find('[id]').prop('id', null);
    }
    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');
      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);
      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);
      _this3.requestAttributesChange($form);
    });
    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');
        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }
        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };
  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;
    if (!window.FormData) {
      return;
    }
    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
          image = _resp$data.image,
          price = _resp$data.price;
        if (_this4.imageReplacerFunc) {
          var img = image ? image.data.replace('{:size}', _this4.imageSize) : null;
          _this4.imageReplacerFunc(_this4.$cardImage, img);
        } else if (image) {
          var _img = image.data.replace('{:size}', _this4.imageSize);
          if (!_this4.$cardImage.data('originalSrc')) {
            _this4.$cardImage.data('originalSrc', _this4.$cardImage.attr('src')).data('originalSrcset', _this4.$cardImage.attr('srcset'));
          }
          _this4.$cardImage.attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
        } else if (_this4.$cardImage.data('originalSrc')) {
          _this4.$cardImage.attr('src', _this4.$cardImage.data('originalSrc')).attr('srcset', _this4.$cardImage.data('originalSrcset')).attr('data-srcset', _this4.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
        }
        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);
          _this4.updatePriceView(viewModel, price);
        }
      }
    });
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */;
  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
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
      }
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
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
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
  };
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./assets/js/papathemes/card-swatches/ProductSwatches.js":
/*!***************************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/ProductSwatches.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./assets/js/papathemes/card-swatches/Card.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$showSwatches = _ref.showSwatches,
      showSwatches = _ref$showSwatches === void 0 ? true : _ref$showSwatches,
      _ref$shouldUpdateMinM = _ref.shouldUpdateMinMaxQty,
      shouldUpdateMinMaxQty = _ref$shouldUpdateMinM === void 0 ? false : _ref$shouldUpdateMinM,
      _ref$cardSelector = _ref.cardSelector,
      cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card' : _ref$cardSelector,
      _ref$productIdSelecto = _ref.productIdSelector,
      productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
      _ref$findProductIdByI = _ref.findProductIdByImg,
      findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
      _ref$swatchesContaine = _ref.swatchesContainerSelector,
      swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
      _ref$cardImageSelecto = _ref.cardImageSelector,
      cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
      _ref$addToCartFormSel = _ref.addToCartFormSelector,
      addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
      _ref$productViewFile = _ref.productViewFile,
      productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
      _ref$attributesTempla = _ref.attributesTemplate,
      attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches=\"{{0.attributeName}}\">\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item productSwatches-swatches-item--{{type}}\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
      _ref$imageSize = _ref.imageSize,
      imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
      _ref$inputFinderFunc = _ref.inputFinderFunc,
      inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
      _ref$swatchesLimit = _ref.swatchesLimit,
      swatchesLimit = _ref$swatchesLimit === void 0 ? 5 : _ref$swatchesLimit,
      _ref$imageReplacerFun = _ref.imageReplacerFunc,
      imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
      _ref$includeOptions = _ref.includeOptions,
      includeOptions = _ref$includeOptions === void 0 ? [] : _ref$includeOptions,
      _ref$displayInStockOn = _ref.displayInStockOnly,
      displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
      _ref$autoSelectOption = _ref.autoSelectOptionValues,
      autoSelectOptionValues = _ref$autoSelectOption === void 0 ? true : _ref$autoSelectOption,
      _ref$graphQLToken = _ref.graphQLToken,
      graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken;
    this.config = {
      showSwatches: showSwatches,
      shouldUpdateMinMaxQty: shouldUpdateMinMaxQty,
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      includeOptions: includeOptions.map(function (s) {
        return String(s).trim().toLocaleUpperCase();
      }),
      displayInStockOnly: displayInStockOnly,
      autoSelectOptionValues: autoSelectOptionValues,
      graphQLToken: graphQLToken
    };
    this.bindEvents();
  }
  var _proto = ProductSwatches.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this.onWindowScroll();
      }, 200));
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };
  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;
    if ($body === void 0) {
      $body = null;
    }
    /**
     * @type {Card[]}
     */
    var cards = [];
    $(this.config.cardSelector, $body).not('.productSwatchesLoaded').each(function (i, el) {
      var $scope = $(el).addClass('productSwatchesLoaded');
      if ($scope.data('productSwatchesCard')) {
        return;
      }
      var productId = Number($scope.data('productId') || $scope.find(_this2.config.productIdSelector).data('productId'));
      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }
        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }
          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);
        if (!productId) {
          return;
        }
      }
      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);
      var _this2$config = _this2.config,
        productViewFile = _this2$config.productViewFile,
        attributesTemplate = _this2$config.attributesTemplate,
        templateCustomTags = _this2$config.templateCustomTags,
        addToCartFormSelector = _this2$config.addToCartFormSelector,
        imageSize = _this2$config.imageSize,
        inputFinderFunc = _this2$config.inputFinderFunc,
        swatchesLimit = _this2$config.swatchesLimit,
        imageReplacerFunc = _this2$config.imageReplacerFunc,
        includeOptions = _this2$config.includeOptions,
        displayInStockOnly = _this2$config.displayInStockOnly,
        autoSelectOptionValues = _this2$config.autoSelectOptionValues,
        graphQLToken = _this2$config.graphQLToken,
        showSwatches = _this2$config.showSwatches,
        shouldUpdateMinMaxQty = _this2$config.shouldUpdateMinMaxQty;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        imageSize: imageSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        includeOptions: includeOptions,
        displayInStockOnly: displayInStockOnly,
        autoSelectOptionValues: autoSelectOptionValues,
        autoInit: !graphQLToken,
        showSwatches: showSwatches,
        shouldUpdateMinMaxQty: shouldUpdateMinMaxQty
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
    });
    if (this.config.graphQLToken && cards.length > 0) {
      var ids = Array.from(new Set(cards.map(function (card) {
        return card.productId;
      })));
      this.fetchGraphQLProducts(ids).then(function (edges) {
        edges.forEach(function (edge) {
          cards.filter(function (card) {
            return card.productId === edge.node.entityId;
          }).forEach(function (card) {
            card.graphQLNode = edge.node; // eslint-disable-line no-param-reassign
            card.init();
          });
        });
      });
    }
  };
  _proto.fetchGraphQLProducts = /*#__PURE__*/function () {
    var _fetchGraphQLProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ids) {
      var edges, i, _ids, resp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            edges = [];
            i = 0;
          case 2:
            if (!(i < ids.length)) {
              _context.next = 11;
              break;
            }
            _ids = ids.slice(i, i + 50);
            _context.next = 6;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                        query ($entityIds: [Int!]) {\n                            site {\n                                products (entityIds: $entityIds, first: 50) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            minPurchaseQuantity\n                                            maxPurchaseQuantity\n                                            " + (this.config.showSwatches ? "\n                                                productOptions {\n                                                    edges {\n                                                        node {\n                                                            entityId\n                                                            displayName\n                                                            ... on CheckboxOption {\n                                                                checkedByDefault\n                                                            }\n                                                            ... on MultipleChoiceOption {\n                                                                displayStyle\n                                                                values {\n                                                                    edges {\n                                                                        node {\n                                                                            entityId\n                                                                            isDefault\n                                                                            ... on SwatchOptionValue {\n                                                                                label\n                                                                                hexColors\n                                                                                imageUrl(width: 100)\n                                                                            }\n                                                                            ... on MultipleChoiceOptionValue {\n                                                                                label\n                                                                            }\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            " : '') + "\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ",
                variables: {
                  entityIds: _ids
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.config.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 6:
            resp = _context.sent;
            edges = edges.concat(resp.data.site.products.edges);
          case 8:
            i += 50;
            _context.next = 2;
            break;
          case 11:
            return _context.abrupt("return", edges);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function fetchGraphQLProducts(_x) {
      return _fetchGraphQLProducts.apply(this, arguments);
    }
    return fetchGraphQLProducts;
  }();
  return ProductSwatches;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSwatches);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2NhcmQtc3dhdGNoZXNfUHJvZHVjdFN3YXRjaGVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFBQSxJQUUxQkMsSUFBSTtFQUNOO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksU0FBQUEsS0FBQUMsSUFBQSxFQW9CRztJQUFBLElBbkJDQyxNQUFNLEdBQUFELElBQUEsQ0FBTkMsTUFBTTtNQUNOQyxvQkFBb0IsR0FBQUYsSUFBQSxDQUFwQkUsb0JBQW9CO01BQ3BCQyxTQUFTLEdBQUFILElBQUEsQ0FBVEcsU0FBUztNQUNUQyxlQUFlLEdBQUFKLElBQUEsQ0FBZkksZUFBZTtNQUNmQyxrQkFBa0IsR0FBQUwsSUFBQSxDQUFsQkssa0JBQWtCO01BQ2xCQyxrQkFBa0IsR0FBQU4sSUFBQSxDQUFsQk0sa0JBQWtCO01BQ2xCQyxxQkFBcUIsR0FBQVAsSUFBQSxDQUFyQk8scUJBQXFCO01BQ3JCQyxVQUFVLEdBQUFSLElBQUEsQ0FBVlEsVUFBVTtNQUNWQyxTQUFTLEdBQUFULElBQUEsQ0FBVFMsU0FBUztNQUNUQyxlQUFlLEdBQUFWLElBQUEsQ0FBZlUsZUFBZTtNQUNmQyxhQUFhLEdBQUFYLElBQUEsQ0FBYlcsYUFBYTtNQUNiQyxpQkFBaUIsR0FBQVosSUFBQSxDQUFqQlksaUJBQWlCO01BQ2pCQyxjQUFjLEdBQUFiLElBQUEsQ0FBZGEsY0FBYztNQUNkQyxrQkFBa0IsR0FBQWQsSUFBQSxDQUFsQmMsa0JBQWtCO01BQ2xCQyxzQkFBc0IsR0FBQWYsSUFBQSxDQUF0QmUsc0JBQXNCO01BQUFDLGFBQUEsR0FBQWhCLElBQUEsQ0FDdEJpQixRQUFRO01BQVJBLFFBQVEsR0FBQUQsYUFBQSxjQUFHLElBQUks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RUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQzRTLGFBQWEsY0FBWSxJQUFJLENBQUN4QyxNQUFNLENBQUNEO2NBQ3pDLENBQUM7Y0FDRC9QLFNBQVMsRUFBRTtnQkFDUEMsZUFBZSxFQUFFO2NBQ3JCO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUE5RElFLElBQUksR0FBQStSLFFBQUEsQ0FBQTVHLElBQUE7WUErRFYzSyxLQUFLLEdBQUdBLEtBQUssQ0FBQzhSLE1BQU0sQ0FBQ3RTLElBQUksQ0FBQ1YsSUFBSSxDQUFDaVQsSUFBSSxDQUFDQyxRQUFRLENBQUNoUyxLQUFLLENBQUM7VUFBQztZQWpFeEIrQixDQUFDLElBQUksRUFBRTtZQUFBd1AsUUFBQSxDQUFBckcsSUFBQTtZQUFBO1VBQUE7WUFBQSxPQUFBcUcsUUFBQSxDQUFBekcsTUFBQSxXQW1FaEM5SyxLQUFLO1VBQUE7VUFBQTtZQUFBLE9BQUF1UixRQUFBLENBQUEzRSxJQUFBO1FBQUE7TUFBQSxHQUFBd0UsT0FBQTtJQUFBLENBQ2Y7SUFBQSxTQXRFS0gsb0JBQW9CQSxDQUFBZ0IsRUFBQTtNQUFBLE9BQUFkLHFCQUFBLENBQUE1RCxLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQXBCMkQsb0JBQW9CO0VBQUE7RUFBQSxPQUFBdkQsZUFBQTtBQUFBO0FBeUU5QixpRUFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMta2l0Y2hlbmFyeS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2NhcmQtc3dhdGNoZXMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLWtpdGNoZW5hcnkvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jYXJkLXN3YXRjaGVzL1Byb2R1Y3RTd2F0Y2hlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuXG5jbGFzcyBDYXJkIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25zLiRzY29wZVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25zLiRhdHRyaWJ1dGVzQ29udGFpbmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMucHJvZHVjdElkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucHJvZHVjdFZpZXdGaWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYXR0cmlidXRlc1RlbXBsYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGVtcGxhdGVDdXN0b21UYWdzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IG9wdGlvbnMuJGNhcmRJbWFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmltYWdlU2l6ZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuaW5wdXRGaW5kZXJGdW5jXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuc3dhdGNoZXNMaW1pdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuaW1hZ2VSZXBsYWNlckZ1bmNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zLmluY2x1ZGVPcHRpb25zXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmRpc3BsYXlJblN0b2NrT25seVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hdXRvU2VsZWN0T3B0aW9uVmFsdWVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvSW5pdF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZ3JhcGhRTE5vZGVdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNob3dTd2F0Y2hlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zaG91bGRVcGRhdGVNaW5NYXhRdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgICRzY29wZSxcbiAgICAgICAgJGF0dHJpYnV0ZXNDb250YWluZXIsXG4gICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgcHJvZHVjdFZpZXdGaWxlLFxuICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcbiAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxuICAgICAgICAkY2FyZEltYWdlLFxuICAgICAgICBpbWFnZVNpemUsXG4gICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgc3dhdGNoZXNMaW1pdCxcbiAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXG4gICAgICAgIGluY2x1ZGVPcHRpb25zLFxuICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHksXG4gICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXG4gICAgICAgIGF1dG9Jbml0ID0gdHJ1ZSxcbiAgICAgICAgZ3JhcGhRTE5vZGUsXG4gICAgICAgIHNob3dTd2F0Y2hlcyxcbiAgICAgICAgc2hvdWxkVXBkYXRlTWluTWF4UXR5LFxuICAgIH0pIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyID0gJGF0dHJpYnV0ZXNDb250YWluZXI7XG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdGaWxlID0gcHJvZHVjdFZpZXdGaWxlO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGF0dHJpYnV0ZXNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yO1xuICAgICAgICB0aGlzLiRjYXJkSW1hZ2UgPSAkY2FyZEltYWdlO1xuICAgICAgICB0aGlzLmltYWdlU2l6ZSA9IGltYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5pbnB1dEZpbmRlckZ1bmMgPSBpbnB1dEZpbmRlckZ1bmM7XG4gICAgICAgIHRoaXMuc3dhdGNoZXNMaW1pdCA9IHN3YXRjaGVzTGltaXQ7XG4gICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMgPSBpbWFnZVJlcGxhY2VyRnVuYztcbiAgICAgICAgdGhpcy5pbmNsdWRlT3B0aW9ucyA9IGluY2x1ZGVPcHRpb25zO1xuICAgICAgICB0aGlzLmRpc3BsYXlJblN0b2NrT25seSA9IGRpc3BsYXlJblN0b2NrT25seTtcbiAgICAgICAgdGhpcy5hdXRvU2VsZWN0T3B0aW9uVmFsdWVzID0gYXV0b1NlbGVjdE9wdGlvblZhbHVlcztcbiAgICAgICAgdGhpcy5hdXRvSW5pdCA9IGF1dG9Jbml0O1xuICAgICAgICB0aGlzLmdyYXBoUUxOb2RlID0gZ3JhcGhRTE5vZGU7XG4gICAgICAgIHRoaXMuc2hvd1N3YXRjaGVzID0gc2hvd1N3YXRjaGVzO1xuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZU1pbk1heFF0eSA9IHNob3VsZFVwZGF0ZU1pbk1heFF0eTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zaG93U3dhdGNoZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlJblN0b2NrT25seSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UHJvZHVjdE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZU1pbk1heFF0eSAmJiB0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pbk1heFF0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTWluTWF4UXR5KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBtaW5QdXJjaGFzZVF1YW50aXR5LFxuICAgICAgICAgICAgbWF4UHVyY2hhc2VRdWFudGl0eSxcbiAgICAgICAgfSA9IHRoaXMuZ3JhcGhRTE5vZGU7XG5cbiAgICAgICAgY29uc3QgJGlucHV0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FyZC1xdWFudGl0eS1jaGFuZ2VdIGlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHF0eSA9IE51bWJlcigkaW5wdXQudmFsKCkpIHx8IDE7XG5cbiAgICAgICAgaWYgKG1pblB1cmNoYXNlUXVhbnRpdHkpIHtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdtaW4nLCBtaW5QdXJjaGFzZVF1YW50aXR5KS5hdHRyKCdkYXRhLXF1YW50aXR5LW1pbicsIG1pblB1cmNoYXNlUXVhbnRpdHkpO1xuICAgICAgICAgICAgaWYgKHF0eSA8IG1pblB1cmNoYXNlUXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1pblB1cmNoYXNlUXVhbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heFB1cmNoYXNlUXVhbnRpdHkpIHtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdtYXgnLCBtYXhQdXJjaGFzZVF1YW50aXR5KS5hdHRyKCdkYXRhLXF1YW50aXR5LW1heCcsIG1heFB1cmNoYXNlUXVhbnRpdHkpO1xuICAgICAgICAgICAgaWYgKHF0eSA+IG1heFB1cmNoYXNlUXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heFB1cmNoYXNlUXVhbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL3JlbW90ZS92MS9wcm9kdWN0LWF0dHJpYnV0ZXMvJHt0aGlzLnByb2R1Y3RJZH1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLnByb2R1Y3RJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3AuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMgPT09ICdvYmplY3QnIHx8IGF0dHJpYnV0ZXNEYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0UHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogYC9wcm9kdWN0cy5waHA/cHJvZHVjdElkPSR7dGhpcy5wcm9kdWN0SWR9YCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogYHtcInJlbmRlcl93aXRoXCI6XCIke3RoaXMucHJvZHVjdFZpZXdGaWxlfVwifWAsXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhLCByZXNwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEgPSB7fSwgcmVzcCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xuICAgICAgICAgICAgLy8gbG9hZCBhdHRyaWJ1dGVzIGZyb20gZ3JhcGhRTFxuICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzID0gdGhpcy5ncmFwaFFMTm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5yZWR1Y2UoKF9vcHRpb25zLCB7IG5vZGU6IG9wdGlvbk5vZGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluY2x1ZGVPcHRpb25zLmxlbmd0aCA+IDAgJiYgIXRoaXMuaW5jbHVkZU9wdGlvbnMuaW5jbHVkZXMoU3RyaW5nKG9wdGlvbk5vZGUuZGlzcGxheU5hbWUpLnRvTG9jYWxlVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3B0aW9ucztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvbmx5IGRpc3BsYXkgc3dhdGNoIG9yIHJlY3RhbmdsZSBvcHRpb25zIGlmIGluY2x1ZGVPcHRpb25zIGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKCghdGhpcy5pbmNsdWRlT3B0aW9ucyB8fCB0aGlzLmluY2x1ZGVPcHRpb25zLmxlbmd0aCA9PT0gMCkgJiYgb3B0aW9uTm9kZS5kaXNwbGF5U3R5bGUgIT09ICdTd2F0Y2gnICYmIG9wdGlvbk5vZGUuZGlzcGxheVN0eWxlICE9PSAnUmVjdGFuZ2xlQm94ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3B0aW9ucztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uTm9kZS52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfdmFsdWVzLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMgIT09ICdvYmplY3QnIHx8IGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVOb2RlLmltYWdlVXJsIHx8IHZhbHVlTm9kZS5oZXhDb2xvcnMgfHwgdmFsdWVOb2RlLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZU5vZGUuaW1hZ2VVcmwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCIke3ZhbHVlTm9kZS5sYWJlbH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZU5vZGUuaW1hZ2VVcmx9Jyk7XCI+PC9zcGFuPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh2YWx1ZU5vZGUuaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVOb2RlLmhleENvbG9ycy5tYXAoY29sb3IgPT4gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+YCkuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgPHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50XCI+JHt2YWx1ZU5vZGUubGFiZWx9PC9zcGFuPmApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlTm9kZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzID8gJ3N3YXRjaCcgOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUlkOiBvcHRpb25Ob2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogb3B0aW9uTm9kZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiB2YWx1ZU5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbnMucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfb3B0aW9ucztcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxvYWQgYXR0cmlidXRlcyBmcm9tIEFKQVggcmVxdWVzdFxuICAgICAgICAgICAgJChyZXNwKS5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHN3YXRjaGVzID0gJChlbCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICRzd2F0Y2hlcy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nKS5lYWNoKChfaSwgbGFiZWxFbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkKGxhYmVsRWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB0aGlzLmlucHV0RmluZGVyRnVuYyA/IHRoaXMuaW5wdXRGaW5kZXJGdW5jKCRzd2F0Y2hlcywgJGxhYmVsKSA6ICRzd2F0Y2hlcy5maW5kKGBbaWQ9XCIkeyRsYWJlbC5hdHRyKCdmb3InKX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBOdW1iZXIoJGlucHV0LmF0dHIoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVJZCA9IE51bWJlcigkaW5wdXQuYXR0cignbmFtZScpLnJlcGxhY2UoL2F0dHJpYnV0ZVxcWyhbMC05XSspXFxdLywgJyQxJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZVZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAkbGFiZWwuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkaW5wdXQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN3YXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLnB1c2goc3dhdGNoZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy5hdHRyaWJ1dGVzVGVtcGxhdGUsIGRhdGEsIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgbGV0ICRmb3JtO1xuXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAvLyBidWlsZCBGb3JtIGZyb20gZ3JhcGhRTFxuICAgICAgICAgICAgJGZvcm0gPSAkKCc8Zm9ybSBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtXCI+PC9mb3JtPicpLmhpZGUoKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj4nKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvZHVjdF9pZFwiIHZhbHVlPVwiJHt0aGlzLnByb2R1Y3RJZH1cIj5gKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicXR5W11cIiB2YWx1ZT1cIiR7dGhpcy5ncmFwaFFMTm9kZS5taW5QdXJjaGFzZVF1YW50aXR5IHx8IDF9XCI+YCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmZvckVhY2goKHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgJiYgb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMubGVuZ3RoID4gMCA/IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzWzBdLm5vZGUuZW50aXR5SWQgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfZGVmYXVsdFZhbHVlLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiAodmFsdWVOb2RlLmlzRGVmYXVsdCA/IHZhbHVlTm9kZS5lbnRpdHlJZCA6IF9kZWZhdWx0VmFsdWUpLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRWYWx1ZSAmJiBhdHRyaWJ1dGVzRGF0YSAmJiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5yZWR1Y2UoKF9kZWZhdWx0VmFsdWUsIHsgbm9kZTogdmFsdWVOb2RlIH0pID0+IF9kZWZhdWx0VmFsdWUgfHwgKGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEgPyB2YWx1ZU5vZGUuZW50aXR5SWQgOiAnJyksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uTm9kZS5jaGVja2VkQnlEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uTm9kZS5lbnRpdHlJZH1dXCIgdmFsdWU9XCIke2RlZmF1bHRWYWx1ZX1cIj5gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYnVpbGQgRm9ybSBmcm9tIEFKQVggcmVxdWVzdFxuICAgICAgICAgICAgY29uc3QgJGZvcm0yID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQocmVzcCkuZmluZCh0aGlzLmFkZFRvQ2FydEZvcm1TZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtJylcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsICdpZCcgdG8gYXZvaWQgZHVwbGljYXRlZCBsYWJlbC5mb3IgaW4gcXVpY2stdmlld1xuICAgICAgICAgICAgJGZvcm0yLmZpbmQoJ1tpZF0nKS5wcm9wKCdpZCcsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoJGZvcm0pO1xuXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIub24oJ2NsaWNrJywgJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJGEuZGF0YSgnYXR0cmlidXRlSWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGEuZGF0YSgnYXR0cmlidXRlVmFsdWUnKTtcblxuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1hdHRyaWJ1dGUtaWQ9JHtpZH1dYCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKFt2YWx1ZV0pO1xuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBdHRyaWJ1dGVzQ2hhbmdlKCRmb3JtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoZXNMaW1pdCkge1xuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5maW5kKCdbZGF0YS1tb3JlXScpLmVhY2goKGksIG1vcmVFbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtb3JlID0gJChtb3JlRWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJG1vcmUuY2xvc2VzdCgnW2RhdGEtc3dhdGNoZXNdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGxlc3MgPSAkbGlzdC5maW5kKCdbZGF0YS1sZXNzXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaXRlbXMubGVuZ3RoID4gdGhpcy5zd2F0Y2hlc0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRoaWRkZW5JdGVtcyA9ICRpdGVtcy5maWx0ZXIoaiA9PiBqID49IHRoaXMuc3dhdGNoZXNMaW1pdCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkbW9yZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSXRlbXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxlc3Muc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJGxlc3Mub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhpZGRlbkl0ZW1zLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXNzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb3JlLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJG1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRsZXNzLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5maW5kKCdbZGF0YS1tb3JlXSwgW2RhdGEtbGVzc10nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSgkZm9ybSkge1xuICAgICAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL3JlbW90ZS92MS9wcm9kdWN0LWF0dHJpYnV0ZXMvJHt0aGlzLnByb2R1Y3RJZH1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdzdGVuY2lsLWNvbmZpZyc6ICd7fScsXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6ICd7fScsXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpbWFnZSwgcHJpY2UgfSA9IHJlc3AuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmVwbGFjZXJGdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGltYWdlID8gaW1hZ2UuZGF0YS5yZXBsYWNlKCd7OnNpemV9JywgdGhpcy5pbWFnZVNpemUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJlcGxhY2VyRnVuYyh0aGlzLiRjYXJkSW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBpbWFnZS5kYXRhLnJlcGxhY2UoJ3s6c2l6ZX0nLCB0aGlzLmltYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhcmRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyYycsIHRoaXMuJGNhcmRJbWFnZS5hdHRyKCdzcmMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuYXR0cignc3Jjc2V0JykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhcmRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltZylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmNzZXQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyYycsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmNzZXQnLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gICAgICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICAgICAqL1xuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuY2xhc3MgUHJvZHVjdFN3YXRjaGVzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIHNob3dTd2F0Y2hlcyA9IHRydWUsXG4gICAgICAgIHNob3VsZFVwZGF0ZU1pbk1heFF0eSA9IGZhbHNlLFxuICAgICAgICBjYXJkU2VsZWN0b3IgPSAnLnByb2R1Y3QgLmNhcmQsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUgLmNhcmQnLFxuICAgICAgICBwcm9kdWN0SWRTZWxlY3RvciA9ICdbZGF0YS1wcm9kdWN0LWlkXScsXG4gICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyA9IGZhbHNlLFxuICAgICAgICBzd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yID0gJy5jYXJkLXRleHQtLWNvbG9yc3dhdGNoZXMnLFxuICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvciA9ICcuY2FyZC1pbWFnZScsXG4gICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLFxuICAgICAgICBwcm9kdWN0Vmlld0ZpbGUgPSAncHJvZHVjdHMvcHJvZHVjdC12aWV3JyxcbiAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1hdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgICAge3sjYXR0cmlidXRlc319XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXNcIiBkYXRhLXN3YXRjaGVzPVwie3swLmF0dHJpYnV0ZU5hbWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sjLn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlcy1pdGVtIHByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlcy1pdGVtLS17e3R5cGV9fVwiIHRpdGxlPVwie3tsYWJlbH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHRyaWJ1dGUtaWQ9XCJ7e2F0dHJpYnV0ZUlkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0dHJpYnV0ZS12YWx1ZT1cInt7YXR0cmlidXRlVmFsdWV9fVwiPnt7JmNvbnRlbnR9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Ly59fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtbW9yZVwiIGRhdGEtbW9yZT4rIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWxlc3NcIiBkYXRhLWxlc3M+LSBMZXNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt7L2F0dHJpYnV0ZXN9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyA9IG51bGwsXG4gICAgICAgIGltYWdlU2l6ZSA9ICc1OTB4NTkwJyxcbiAgICAgICAgaW5wdXRGaW5kZXJGdW5jID0gbnVsbCxcbiAgICAgICAgc3dhdGNoZXNMaW1pdCA9IDUsXG4gICAgICAgIGltYWdlUmVwbGFjZXJGdW5jID0gbnVsbCxcbiAgICAgICAgaW5jbHVkZU9wdGlvbnMgPSBbXSxcbiAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5ID0gZmFsc2UsXG4gICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgPSB0cnVlLFxuICAgICAgICBncmFwaFFMVG9rZW4gPSAnJyxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBzaG93U3dhdGNoZXMsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVNaW5NYXhRdHksXG4gICAgICAgICAgICBjYXJkU2VsZWN0b3IsXG4gICAgICAgICAgICBwcm9kdWN0SWRTZWxlY3RvcixcbiAgICAgICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyxcbiAgICAgICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IsXG4gICAgICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvcixcbiAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcbiAgICAgICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXG4gICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zOiBpbmNsdWRlT3B0aW9ucy5tYXAocyA9PiBTdHJpbmcocykudHJpbSgpLnRvTG9jYWxlVXBwZXJDYXNlKCkpLFxuICAgICAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxuICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCgpO1xuICAgICAgICAgICAgfSwgMjAwKSk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uV2luZG93U2Nyb2xsKCRib2R5ID0gbnVsbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0NhcmRbXX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNhcmRzID0gW107XG5cbiAgICAgICAgJCh0aGlzLmNvbmZpZy5jYXJkU2VsZWN0b3IsICRib2R5KS5ub3QoJy5wcm9kdWN0U3dhdGNoZXNMb2FkZWQnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHNjb3BlID0gJChlbCkuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlc0xvYWRlZCcpO1xuICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhKCdwcm9kdWN0U3dhdGNoZXNDYXJkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcm9kdWN0SWQgPSBOdW1iZXIoJHNjb3BlLmRhdGEoJ3Byb2R1Y3RJZCcpIHx8ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLnByb2R1Y3RJZFNlbGVjdG9yKS5kYXRhKCdwcm9kdWN0SWQnKSk7XG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIHByb2R1Y3QgSUQgYnkgaW1nIHNyY1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb25maWcuZmluZFByb2R1Y3RJZEJ5SW1nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvZHVjdElkID0gJHNjb3BlLmZpbmQoJ2ltZycpLmdldCgpLnJlZHVjZSgoaWQsIGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gU3RyaW5nKGltZy5zcmMpLm1hdGNoKC9wcm9kdWN0c1xcLyhbMC05XSspXFwvLyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtID8gTnVtYmVyKG1bMV0pIDogaWQ7XG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZXNDb250YWluZXIgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5zd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUsXG4gICAgICAgICAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXG4gICAgICAgICAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXG4gICAgICAgICAgICAgICAgaW5jbHVkZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxuICAgICAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXG4gICAgICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxuICAgICAgICAgICAgICAgIHNob3dTd2F0Y2hlcyxcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVNaW5NYXhRdHksXG4gICAgICAgICAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgICAgIGNvbnN0ICRjYXJkSW1hZ2UgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5jYXJkSW1hZ2VTZWxlY3RvcikuZmlyc3QoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcbiAgICAgICAgICAgICAgICAkc2NvcGUsXG4gICAgICAgICAgICAgICAgJGF0dHJpYnV0ZXNDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgICAgICAkY2FyZEltYWdlLFxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICBpbnB1dEZpbmRlckZ1bmMsXG4gICAgICAgICAgICAgICAgc3dhdGNoZXNMaW1pdCxcbiAgICAgICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgICAgICAgICBpbmNsdWRlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHksXG4gICAgICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcbiAgICAgICAgICAgICAgICBhdXRvSW5pdDogIWdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgICAgICBzaG93U3dhdGNoZXMsXG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlTWluTWF4UXR5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkcy5wdXNoKGNhcmQpO1xuXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSgncHJvZHVjdFN3YXRjaGVzQ2FyZCcsIGNhcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZ3JhcGhRTFRva2VuICYmIGNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IEFycmF5LmZyb20obmV3IFNldChjYXJkcy5tYXAoY2FyZCA9PiBjYXJkLnByb2R1Y3RJZCkpKTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hHcmFwaFFMUHJvZHVjdHMoaWRzKS50aGVuKGVkZ2VzID0+IHtcbiAgICAgICAgICAgICAgICBlZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLnByb2R1Y3RJZCA9PT0gZWRnZS5ub2RlLmVudGl0eUlkKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5ncmFwaFFMTm9kZSA9IGVkZ2Uubm9kZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaEdyYXBoUUxQcm9kdWN0cyhpZHMpIHtcbiAgICAgICAgbGV0IGVkZ2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSArPSA1MCkge1xuICAgICAgICAgICAgY29uc3QgX2lkcyA9IGlkcy5zbGljZShpLCBpICsgNTApO1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkZW50aXR5SWRzOiBbSW50IV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKGVudGl0eUlkczogJGVudGl0eUlkcywgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblB1cmNoYXNlUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY29uZmlnLnNob3dTd2F0Y2hlcyA/IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gQ2hlY2tib3hPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRCeURlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZHM6IF9pZHMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb25maWcuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVkZ2VzID0gZWRnZXMuY29uY2F0KHJlc3AuZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWRnZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3dhdGNoZXM7XG4iXSwibmFtZXMiOlsiTXVzdGFjaGUiLCJDYXJkIiwiX3JlZiIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdElkIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsImltYWdlU2l6ZSIsImlucHV0RmluZGVyRnVuYyIsInN3YXRjaGVzTGltaXQiLCJpbWFnZVJlcGxhY2VyRnVuYyIsImluY2x1ZGVPcHRpb25zIiwiZGlzcGxheUluU3RvY2tPbmx5IiwiYXV0b1NlbGVjdE9wdGlvblZhbHVlcyIsIl9yZWYkYXV0b0luaXQiLCJhdXRvSW5pdCIsImdyYXBoUUxOb2RlIiwic2hvd1N3YXRjaGVzIiwic2hvdWxkVXBkYXRlTWluTWF4UXR5IiwiaW5pdCIsIl9wcm90byIsInByb3RvdHlwZSIsInJlcXVlc3RJblN0b2NrQXR0cmlidXRlcyIsImJ1aWxkUHJvZHVjdE9wdGlvbnMiLCJyZXF1ZXN0UHJvZHVjdE9wdGlvbnMiLCJ1cGRhdGVNaW5NYXhRdHkiLCJfdGhpcyRncmFwaFFMTm9kZSIsIm1pblB1cmNoYXNlUXVhbnRpdHkiLCJtYXhQdXJjaGFzZVF1YW50aXR5IiwiJGlucHV0IiwiZmluZCIsInF0eSIsIk51bWJlciIsInZhbCIsImF0dHIiLCJfdGhpcyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJoZWFkZXJzIiwid2luZG93IiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiYXR0cmlidXRlc0RhdGEiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwiaW5zdG9jayIsIl90aGlzMiIsIl90aGlzMyIsImF0dHJpYnV0ZXMiLCJwcm9kdWN0T3B0aW9ucyIsImVkZ2VzIiwicmVkdWNlIiwiX29wdGlvbnMiLCJfcmVmMiIsIm9wdGlvbk5vZGUiLCJub2RlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJkaXNwbGF5TmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZGlzcGxheVN0eWxlIiwidmFsdWVzIiwiX3ZhbHVlcyIsIl9yZWYzIiwidmFsdWVOb2RlIiwiaW5kZXhPZiIsImVudGl0eUlkIiwiaW1hZ2VVcmwiLCJoZXhDb2xvcnMiLCJsYWJlbCIsInB1c2giLCJjb250ZW50IiwibWFwIiwiY29sb3IiLCJqb2luIiwidHlwZSIsImF0dHJpYnV0ZUlkIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiZWFjaCIsImkiLCJlbCIsIiRzd2F0Y2hlcyIsInN3YXRjaGVzIiwiX2kiLCJsYWJlbEVsIiwiJGxhYmVsIiwicmVwbGFjZSIsImh0bWwiLCJyZW5kZXIiLCJhcHBlbmQiLCIkZm9ybSIsImhpZGUiLCJmb3JFYWNoIiwiX3JlZjQiLCJkZWZhdWx0VmFsdWUiLCJfZGVmYXVsdFZhbHVlIiwiX3JlZjUiLCJpc0RlZmF1bHQiLCJfcmVmNiIsImNoZWNrZWRCeURlZmF1bHQiLCIkZm9ybTIiLCJhZGRDbGFzcyIsInByb3AiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInZhbHVlIiwicmVtb3ZlQ2xhc3MiLCJyZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSIsIm1vcmVFbCIsIiRtb3JlIiwiJGxpc3QiLCJjbG9zZXN0IiwiJGxlc3MiLCIkaXRlbXMiLCIkaGlkZGVuSXRlbXMiLCJmaWx0ZXIiLCJqIiwic2hvdyIsIl90aGlzNCIsIkZvcm1EYXRhIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiZ2V0IiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIl9yZXNwJGRhdGEiLCJpbWFnZSIsInByaWNlIiwiaW1nIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwidXBkYXRlUHJpY2VWaWV3IiwiZm9ybURhdGEiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJrZXkiLCJGaWxlIiwibmFtZSIsInNpemUiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmV0dXJuIiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJQcm9kdWN0U3dhdGNoZXMiLCJfdGVtcCIsIl9yZWYkc2hvd1N3YXRjaGVzIiwiX3JlZiRzaG91bGRVcGRhdGVNaW5NIiwiX3JlZiRjYXJkU2VsZWN0b3IiLCJjYXJkU2VsZWN0b3IiLCJfcmVmJHByb2R1Y3RJZFNlbGVjdG8iLCJwcm9kdWN0SWRTZWxlY3RvciIsIl9yZWYkZmluZFByb2R1Y3RJZEJ5SSIsImZpbmRQcm9kdWN0SWRCeUltZyIsIl9yZWYkc3dhdGNoZXNDb250YWluZSIsInN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IiLCJfcmVmJGNhcmRJbWFnZVNlbGVjdG8iLCJjYXJkSW1hZ2VTZWxlY3RvciIsIl9yZWYkYWRkVG9DYXJ0Rm9ybVNlbCIsIl9yZWYkcHJvZHVjdFZpZXdGaWxlIiwiX3JlZiRhdHRyaWJ1dGVzVGVtcGxhIiwiX3JlZiR0ZW1wbGF0ZUN1c3RvbVRhIiwiX3JlZiRpbWFnZVNpemUiLCJfcmVmJGlucHV0RmluZGVyRnVuYyIsIl9yZWYkc3dhdGNoZXNMaW1pdCIsIl9yZWYkaW1hZ2VSZXBsYWNlckZ1biIsIl9yZWYkaW5jbHVkZU9wdGlvbnMiLCJfcmVmJGRpc3BsYXlJblN0b2NrT24iLCJfcmVmJGF1dG9TZWxlY3RPcHRpb24iLCJfcmVmJGdyYXBoUUxUb2tlbiIsImdyYXBoUUxUb2tlbiIsImNvbmZpZyIsInRyaW0iLCJiaW5kRXZlbnRzIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbk9ic2VydmVyIiwiX2RlYm91bmNlIiwib25XaW5kb3dTY3JvbGwiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidW5iaW5kRXZlbnRzIiwiZGlzY29ubmVjdCIsIiRib2R5IiwiY2FyZHMiLCJub3QiLCJtIiwic3JjIiwibWF0Y2giLCJfdGhpczIkY29uZmlnIiwiZmlyc3QiLCJjYXJkIiwiaWRzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmV0Y2hHcmFwaFFMUHJvZHVjdHMiLCJlZGdlIiwiX2ZldGNoR3JhcGhRTFByb2R1Y3RzIiwiX2NhbGxlZSIsIl9pZHMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiZW50aXR5SWRzIiwiQXV0aG9yaXphdGlvbiIsImNvbmNhdCIsInNpdGUiLCJwcm9kdWN0cyIsIl94Il0sInNvdXJjZVJvb3QiOiIifQ==
