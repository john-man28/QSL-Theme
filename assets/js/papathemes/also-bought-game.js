import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import collapsibleFactory, { CollapsibleEvents } from '../theme/common/collapsible';
import ProductDetails from '../theme/common/product-details';
import scrollToElement from 'scroll-to-element';
import { currencyFormat, extractMoney, openCartPreview } from './utils';
import { defaultModal } from '../theme/global/modal';
import Mustache from 'mustache';
import Swal from 'sweetalert2';
//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
    return funcs.reduce(
        (promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))),
        Promise.resolve([]),
    );
}

function reportFormValidity(form) {
    let valid = true;
    if (form && form.checkValidity) {
        valid = form.checkValidity();
        if (!valid) {
            if (form.reportValidity) {
                form.reportValidity();
            } else {
                valid = true;
            }
        }
    }
    return valid;
}

export default class AlsoBoughtGame {
    /**
     * @param {ProductDetails} parentProductDetails
     * @param {*} param1
     */
    constructor(parentProductDetails, {
        thumbnailTemplate = `
            <div class="productView-alsoBought-thumbnail-item {{#checked}}is-checked{{/checked}}" data-thumbnail-product-id="{{id}}">
                <div class="productView-alsoBought-item-image">
                    <a class="productView-alsoBought-thumbnail-label" href="{{url}}" target="_blank"><img class="lazyload" src="{{loadingImg}}" data-src="{{img}}" alt="{{name}}" title="{{name}}"></a>
                </div>
            </div>
        `,
        productDetailsTemplate = `
            <div class="productView-alsoBought-item-inner">
                <div class="productView-alsoBought-item-check">
                    <div class="form-field">
                        <input
                            class="form-checkbox"
                            type="checkbox"
                            name="productView-alsoBought-item-checkbox"
                            id="productView-alsoBought-item-checkbox-{{id}}"
                            value="{{id}}"
                            data-also-bought-checkbox
                            data-purchasable
                            aria-label="{{name}}">
                        <div class="form-label">
                            <div class="productView-alsoBought-item-image">
                                {{#saleBadge}}
                                    <div class="sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}">
                                        <span class="sale-text">{{&saleBadge}}</span>
                                    </div>
                                {{/saleBadge}}
                                {{&customBadge}}
                                <a class="productView-alsoBought-item-image-thumbnail" href="{{url}}" target="_blank">
                                    <img class="lazyload card-image" src="{{loadingImg}}" data-src="{{img}}" alt="{{name}}" title="{{name}}">
                                    {{#hoverImage}}
                                        <img
                                            data-src="{{url}}"
                                            class="card-image lazyload"
                                            alt="{{name}}"
                                            title="{{name}}">
                                    {{/hoverImage}}
                                </a>
                            </div>
                            <div class="productView-alsoBought-item-content">
                                <a class="productView-alsoBought-item-title"href="{{url}}" target="_blank">{{name}}</a>
                                {{#ratingHtml}}
                                    <p class="productView-alsoBought-item-rating card-text card-text--rating" data-test-info-type="productRating">
                                        <span class="rating--small">
                                            {{&ratingHtml}}
                                        </span>
                                    </p>
                                {{/ratingHtml}}
                                <div class="productView-alsoBought-item-price">
                                    {{&loginPriceHtml}}
                                    {{&priceHtml}}
                                    {{&priceRangeHtml}}
                                </div>
                                {{#hideQty}}
                                    {{&buttonToggleHtml}}
                                {{/hideQty}}
                                {{&optionsToggleHtml}}
                                <div class="productView-alsoBought-item-form {{#hideQty}}_hide-quantity{{/hideQty}}" id="productView-alsoBought-item-form-{{id}}" data-product-content>
                                    {{&formHtml}}
                                </div>
                                <div class="productView-alsoBought-item-form-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        priceTemplate = `
            <div class="price-section-group price-section-group--{{taxClassPrefix}}">
                <!-- Sale price -->
                <div class="price-section price-section--{{taxClassPrefix}} price-section--main">
                    <span class="price-label" {{#nonSalePrice}}style="display: none;"{{/nonSalePrice}}>
                        {{priceLabel}}
                    </span>
                    <span class="price-now-label" {{^nonSalePrice}}style="display: none;"{{/nonSalePrice}}>
                        {{salePriceLabel}}
                    </span>
                    <span data-product-price-{{taxDataPrefix}} class="price price--{{taxClassPrefix}} price--main">{{price.formatted}}</span>
                </div>
                <!-- Non-sale price -->
                <div class="price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}" {{^nonSalePrice}}style="display: none;"{{/nonSalePrice}}>
                    <span class="price-was-label">{{nonSalePriceLabel}}</span>
                    <span data-product-non-sale-price-{{taxDataPrefix}} class="price price--non-sale">
                        {{nonSalePrice.formatted}}
                    </span>
                </div>
                <!-- Retail price -->
                {{&retailPriceHtml}}
                {{&taxLabelHtml}}
            </div>
        `,
        priceRangeTemplate = `
            <div class="price-section-group price-section-group--{{taxClassPrefix}}">
                <div class="price-section price-section--{{taxClassPrefix}} price-section--main">
                    <span class="price-label">{{priceLabel}}</span>
                    <span class="price-now-label" style="display: none;">{{salePriceLabel}}</span>
                    <span data-product-price-{{taxDataPrefix}} class="price price--{{taxClassPrefix}} price--main">{{priceRange.min.formatted}} - {{priceRange.max.formatted}}</span>
                    {{&taxLabelHtml}}
                </div>
                <div class="price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}" style="display: none;">
                    <span class="price-was-label">{{nonSalePriceLabel}}</span>
                    <span data-product-non-sale-price-{{taxDataPrefix}} class="price price--non-sale">
                        {{nonSalePrice.formatted}}
                    </span>
                </div>
                {{&retailPriceRangeHtml}}
                {{&retailPriceHtml}}
            </div>
        `,
        taxLabelTemplate = `
            <abbr title="{{title}}">{{text}}</abbr>
        `,
        retailPriceRangeTemplate = `
            <div class="price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}">
                {{retailPriceLabel}}
                <span data-product-rrp-price-{{taxDataPrefix}} class="price price--rrp">{{retailPriceRange.min.formatted}} - {{retailPriceRange.max.formatted}}</span>
            </div>
        `,
        retailPriceTemplate = `
            <div class="price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}" {{^retailPrice}}style="display: none;{{/retailPrice}}">
                {{retailPriceLabel}}
                <span data-product-rrp-{{taxDataPrefix}} class="price price--rrp">
                    {{retailPrice.formatted}}
                </span>
            </div>
        `,
        loginPriceTemplate = `
            <a class="price--login" href="{{loginUrl}}" translate>{{loginForPriceTxt}}</a>
        `,
        optionsToggleTemplate = `
            <div class="productView-alsoBought-item-formToggle">
                <label class="form-label" for="productView-alsoBought-item-checkbox-{{id}}" data-label-collapsible></label>
                <a class="button button--primary" href="#productView-alsoBought-item-form-{{id}}" data-choose-option="{{chooseOptionsTxt}}" data-options-collapsible>
                    <span>{{chooseOptionsTxt}}</span>
                    <svg class="icon"><use xlink:href="#icon-cart-add"></use></svg>
                </a>
            </div>
        `,
        buttonToggleTemplate = `
            <div class="productView-alsoBought-item-formToggle _single-product {{#hideQty}}_hide-quantity{{/hideQty}} {{#purchasability}}_purchasability{{/purchasability}}">
                <label class="form-label" for="productView-alsoBought-item-checkbox-{{id}}" data-label-collapsible></label>
                <label for="productView-alsoBought-item-checkbox-{{id}}" class="button button--primary" data-label-collapsible>
                    <span>{{txtSelect}}</span>
                    <svg class="icon"><use xlink:href="#icon-cart-add"></use></svg>
                </label>
                {{#purchasability}}
                    <button class="button button--outstock">{{purchasability}}</button>
                {{/purchasability}}
            </div>
        `,
        simpleFormTemplate = `
            <form class="form form--addToCart _single-product" method="post" action="{{addToCartUrl}}" enctype="multipart/form-data" data-cart-item-add {{#hideQty}}style="display: none;"{{/hideQty}}">
                <input type="hidden" name="action" value="add">
                <input type="hidden" name="product_id" value="{{id}}"/>
                <div class="form-increment" data-quantity-also-bought-change>
                    <button class="button button--icon" data-action="dec">
                        <span class="is-srOnly">{{quantityDecreaseTxt}}</span>
                        <i class="icon" aria-hidden="true">
                            <svg>
                                <use xlink:href="#icon-minus"/>
                            </svg>
                        </i>
                    </button>
                    <input class="form-input form-input--incrementTotal"
                        data-product-quantity
                        name="qty[]"
                        type="tel"
                        value="{{qty}}"
                        data-quantity-min="{{qty}}"
                        data-quantity-max="{{maxPurchaseQuantity}}"
                        min="0"
                        pattern="[0-9]*"
                        aria-live="polite"
                        aria-label="{{txtQuantity}}">
                    <button class="button button--icon" data-action="inc">
                        <span class="is-srOnly">{{quantityIncreaseTxt}}</span>
                        <i class="icon" aria-hidden="true">
                            <svg>
                                <use xlink:href="#icon-add"/>
                            </svg>
                        </i>
                    </button>
                </div>
                {{#purchasability}}
                    <button class="button button--outstock _purchasability">{{purchasability}}</button>
                {{/purchasability}}
            </form>
        `,
        loadingTemplate = `
            <div class="loading"><img src="{{loadingImg}}" alt="loading"/></div>
        `,
        templateCustomTags = null,
        ratingStarHtmlFunc = (isFull = true) => `
            <span class="icon icon--rating${isFull ? 'Full' : 'Empty'}">
                <svg><use xlink:href="#icon-star" /></svg>
            </span>
        `,
        customBadgeTemplate = (value) => `
            <div class="sale-flag-side sale-flag-side--custom">
                <span class="sale-text">${value}</span>
            </div>
        `,
        showProductRating = true,
    } = {}) {
        this.parentProductDetails = parentProductDetails;
        this.thumbnailTemplate = thumbnailTemplate;
        this.productDetailsTemplate = productDetailsTemplate;
        this.priceTemplate = priceTemplate;
        this.priceRangeTemplate = priceRangeTemplate;
        this.taxLabelTemplate = taxLabelTemplate;
        this.retailPriceRangeTemplate = retailPriceRangeTemplate;
        this.retailPriceTemplate = retailPriceTemplate;
        this.loginPriceTemplate = loginPriceTemplate;
        this.optionsToggleTemplate = optionsToggleTemplate;
        this.buttonToggleTemplate = buttonToggleTemplate;
        this.simpleFormTemplate = simpleFormTemplate;
        this.loadingTemplate = loadingTemplate;
        this.templateCustomTags = templateCustomTags;
        this.context = this.parentProductDetails.context;
        this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
        this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
        this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
        this.config = this.$alsoBoughtEl.data('alsoBought') || {};
        this.moneyWithTax = this.config.samplePriceWithTax ? extractMoney(this.config.samplePriceWithTax, this.context.money) : null;
        this.moneyWithoutTax = this.config.samplePriceWithoutTax ? extractMoney(this.config.samplePriceWithoutTax, this.context.money) : null;
        this.showProductRating = showProductRating;
        this.ratingStarHtmlFunc = ratingStarHtmlFunc;
        this.customBadgeTemplate = customBadgeTemplate;
        this.product_sale_badges = this.context.product_sale_badges;
        this.product_sale_label = this.context.product_sale_label;

        // try to guess any price on the page
        this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax
            // is default currency?
            || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null)
            // any price on the page
            || $('[data-product-price-without-tax], [data-product-price-with-tax]').get()
                .reduce((_money, el) => _money || extractMoney($(el).text()), null)
            // use currency code
            || (this.context.activeCurrencyCode ? { ...this.context.money, currency_token: ` ${this.context.activeCurrencyCode} ` } : this.context.money);

        this.products = [];
        this.productNodes = [];
        this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
        this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);

        const thumbSize = this.context.alsobought_thumbnail_size.split('x');

        this.thumbnailWidth = Number(thumbSize[0]) || 100;
        this.thumbnailHeight = Number(thumbSize[1]) || 100;

        this.retrieveAlsoBoughtProducts();
        this.listenQuantityAlsoBoughtChange();
        this.handleClickOptions();

        $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
        $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
    }

    currencyFormat(value) {
        return currencyFormat(value, (this.config.includeTax ? this.moneyWithTax : this.moneyWithoutTax) || this.moneyFallback);
    }

    retrieveAlsoBoughtProducts() {
        const $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
        const $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
        /** @type {number[]} */
        const productIds = $productEls.get().map(el => $(el).data('productId'));

        if ($productEls.length > 0) {
            this.$alsoBoughtEl.removeClass('u-hiddenVisually');

            $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                    query: `
                        query (
                            $productIds: [Int!],
                            $productsCount: Int,
                            ${!this.config.requireLogin ? `
                                $includeTax: Boolean,
                                $currencyCode: currencyCode,
                            ` : ''}
                                $imgWidth: Int!,
                            $imgHeight: Int!
                        ) {
                            site {
                                products (
                                    entityIds: $productIds,
                                    first: $productsCount
                                ) {
                                    edges {
                                        node {
                                            entityId
                                            name
                                            path
                                            addToCartUrl
                                            minPurchaseQuantity
                                            maxPurchaseQuantity
                                            defaultImage {
                                                url (
                                                    width: $imgWidth,
                                                    height: $imgHeight
                                                )
                                            }
                                            images (first: 2) {
                                                edges {
                                                  node {
                                                    url (
                                                        width: $imgWidth,
                                                        height: $imgHeight
                                                    )
                                                    isDefault
                                                  }
                                                }
                                            }
                                            inventory {
                                                isInStock
                                            }
                                            availabilityV2 {
                                                status
                                                ... on ProductUnavailable {
                                                    message
                                                }
                                                ... on ProductPreOrder {
                                                    message
                                                    status
                                                }
                                            }
                                            ${!this.config.requireLogin ? `
                                                prices (
                                                    includeTax: $includeTax,
                                                    currencyCode: $currencyCode
                                                ) {
                                                    price {
                                                        ...MoneyFields
                                                    }
                                                    salePrice {
                                                        ...MoneyFields
                                                    }
                                                    basePrice {
                                                        ...MoneyFields
                                                    }
                                                    retailPrice {
                                                        ...MoneyFields
                                                    }
                                                    mapPrice {
                                                        ...MoneyFields
                                                    }
                                                    priceRange {
                                                        ...MoneyRangeFields
                                                    }
                                                    retailPriceRange {
                                                        ...MoneyRangeFields
                                                    }
                                                }
                                            ` : ''}
                                            productOptions (
                                                first: 1
                                            ) {
                                                edges {
                                                    node {
                                                        entityId
                                                        displayName
                                                    }
                                                }
                                            }
                                            reviewSummary {
                                                averageRating
                                            }
                                            customFields {
                                                edges {
                                                    node {
                                                        name
                                                        value
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                settings {
                                    tax {
                                        plp
                                    }
                                    inventory {
                                        defaultOutOfStockMessage
                                    }
                                }
                            }
                        }
                        ${!this.config.requireLogin ? `
                            fragment MoneyFields on Money {
                                value
                                currencyCode
                            }
                            fragment MoneyRangeFields on MoneyRange {
                                min {
                                    ...MoneyFields
                                }
                                max {
                                    ...MoneyFields
                                }
                            }
                        ` : ''}
                    `,
                    variables: {
                        productIds,
                        productsCount: productIds.length,
                        includeTax: this.config.includeTax,
                        currencyCode: this.context.activeCurrencyCode,
                        imgWidth: this.thumbnailWidth,
                        imgHeight: this.thumbnailHeight,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.context.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: (resp) => {
                    const txtOutOfStock = resp.data.site.settings.inventory.defaultOutOfStockMessage;

                    resp.data.site.products.edges.forEach(({ node }) => {
                        this.productNodes.push(node);

                        const id = node.entityId;
                        const name = node.name;
                        const url = node.path;
                        const addToCartUrl = node.addToCartUrl;
                        const hideQty = !this.context.show_product_quantity_box;
                        const showQty = this.context.show_product_quantity_box;
                        const qty = hideQty ? (node.minPurchaseQuantity || 1) : (node.minPurchaseQuantity || 0);
                        const loadingImg = this.context.loadingImg;
                        const img = node.defaultImage?.url || this.context.defaultProductImage;
                        const $productEl = $productEls.filter(`[data-product-id="${id}"]`);
                        const taxClassPrefix = this.config.includeTax ? 'withTax' : 'withoutTax';
                        const taxDataPrefix = this.config.includeTax ? 'with-tax' : 'without-tax';
                        const priceLabel = this.context.pdp_price_label;
                        const salePriceLabel = this.context.pdp_sale_price_label;
                        const nonSalePriceLabel = this.context.pdp_non_sale_price_label;
                        const retailPriceLabel = this.context.pdp_retail_price_label;
                        const chooseOptionsTxt = this.context.chooseOptionsTxt;
                        const txtSelect = this.context.txtSelect;
                        const txtQuantity = this.context.txtQuantity;
                        const quantityDecreaseTxt = this.context.txtQuantityDecrease.replace(/(of).*/g, `$1 ${node.name}`);
                        const quantityIncreaseTxt = this.context.txtQuantityIncrease.replace(/(of).*/g, `$1 ${node.name}`);
                        const maxPurchaseQuantity = node.maxPurchaseQuantity || 0;
                        const loginForPriceTxt = this.context.loginForPriceTxt;
                        const loginUrl = this.context.loginUrl || '/login.php';
                        const checked = this.context.alsobought_checked;
                        const showRatingHtml = this.context.showProductRating;
                        const product_sale_badges = this.context.product_sale_badges;
                        const product_sale_label = this.context.product_sale_label;

                        const available = node.availabilityV2 && node.availabilityV2.status === 'Unavailable' ? (node.availabilityV2.message || this.context.txtUnavailable) : null;
                        const preOrder = node.availabilityV2 && node.availabilityV2.status === 'Preorder' ? (node.availabilityV2.message || this.context.txtPreOrder) : null;
                        const outOfStock = !(node.inventory.isInStock && node.availabilityV2.status === 'Unavailable') && !(node.inventory.isInStock) ? (node.availabilityV2.description || txtOutOfStock) : null;

                        const purchasability = available || preOrder || outOfStock;

                        const hoverProductImage = images => {
                            try {
                                const image = images.find(imgHover => !imgHover.node.isDefault);
                                return image ? image.node : null;
                            } catch (er) {
                                return null;
                            }
                        };

                        const hoverImage = hoverProductImage(node.images.edges);

                        const ratingHtml = (rating) => (!rating ? '' : Array.from(Array(5).keys())
                            .map(i => this.ratingStarHtmlFunc(rating > i))
                            .join(''));

                        const saleBadge = prices => {
                            // return '' if no sale price
                            if (!prices?.salePrice || prices.salePrice.value === prices.basePrice.value) return '';

                            // Return '' badge
                            if (this.product_sale_badges === 'hide') return '';
                            // return 'sale' badge
                            if (this.product_sale_badges === 'label') return this.product_sale_label;

                            const n = prices.salePrice ? Math.round((prices.basePrice.value - prices.salePrice.value) / prices.basePrice.value * 100) : 0;
                            const percent = n > 0 ? `${n}%` : '';

                            // return 'sale {percent}' badge
                            if (this.product_sale_label.includes('{percent}')) return this.product_sale_label.replace('{percent}', percent);

                            // recent 'sale ...%' badge
                            return `${this.product_sale_label}<span>${percent}</span>`;
                        };

                        const customBadge = (field) => {
                            if (field && field.length > 0) {
                                const list = field.filter(e => e.node.name === '__badge');
                                return list
                                    .map(i => this.customBadgeTemplate(i.node.value))
                                    .join('');
                            }
                            return null;
                        };

                        const price = !this.config.requireLogin && node.prices?.price
                            ? {
                                formatted: this.currencyFormat(node.prices.price.value),
                            } : null;

                        const nonSalePrice = !this.config.requireLogin && node.prices?.basePrice && node.prices.price
                            && node.prices.basePrice.value !== node.prices.price.value
                            ? {
                                formatted: this.currencyFormat(node.prices.basePrice.value),
                            } : null;

                        const retailPrice = !this.config.requireLogin && node.prices?.retailPrice
                            ? {
                                formatted: this.currencyFormat(node.prices.retailPrice.value),
                            } : null;

                        const priceRange = !this.config.requireLogin && node.prices?.priceRange
                            && node.prices.priceRange.min.value !== node.prices.priceRange.max.value
                            ? {
                                min: {
                                    formatted: this.currencyFormat(node.prices.priceRange.min.value),
                                },
                                max: {
                                    formatted: this.currencyFormat(node.prices.priceRange.max.value),
                                },
                            }
                            : null;

                        const retailPriceRange = !this.config.requireLogin && node.prices?.retailPriceRange
                            && node.prices.retailPriceRange.min.value !== node.prices.retailPriceRange.max.value
                            ? {
                                min: {
                                    formatted: this.currencyFormat(node.prices.retailPriceRange.min.value),
                                },
                                max: {
                                    formatted: this.currencyFormat(node.prices.retailPriceRange.max.value),
                                },
                            }
                            : null;

                        const loginPriceHtml = this.config.requireLogin ? Mustache.render(this.loginPriceTemplate, {
                            loginUrl,
                            loginForPriceTxt,
                        }, null, this.templateCustomTags) : '';

                        const taxLabelHtml = this.config.showTaxLabel ? Mustache.render(this.taxLabelTemplate, {
                            title: this.config.includeTax ? this.context.includingTaxTxt : this.context.excludingTaxTxt,
                            text: this.config.includeTax ? this.context.priceWithTaxTxt : this.context.priceWithoutTaxTxt,
                        }, null, this.templateCustomTags) : '';

                        const retailPriceRangeHtml = retailPriceRange ? Mustache.render(this.retailPriceRangeTemplate, {
                            taxClassPrefix,
                            taxDataPrefix,
                            retailPriceLabel,
                            retailPriceRange,
                        }, null, this.templateCustomTags) : '';

                        const retailPriceHtml = !retailPriceRange ? Mustache.render(this.retailPriceTemplate, {
                            taxClassPrefix,
                            taxDataPrefix,
                            retailPriceLabel,
                            retailPrice,
                        }, null, this.templateCustomTags) : '';

                        const priceRangeHtml = priceRange ? Mustache.render(this.priceRangeTemplate, {
                            taxClassPrefix,
                            taxDataPrefix,
                            priceLabel,
                            salePriceLabel,
                            nonSalePriceLabel,
                            priceRange,
                            nonSalePrice,
                            taxLabelHtml,
                            retailPriceRangeHtml,
                            retailPriceHtml,
                        }, null, this.templateCustomTags) : '';

                        const optionsToggleHtml = node.productOptions.edges.length > 0 ? Mustache.render(this.optionsToggleTemplate, {
                            id,
                            chooseOptionsTxt,
                        }, null, this.templateCustomTags) : '';

                        const buttonToggleHtml = node.productOptions.edges.length === 0 ? Mustache.render(this.buttonToggleTemplate, {
                            id,
                            txtSelect,
                            hideQty,
                            purchasability,
                        }, null, this.templateCustomTags) : '';

                        const priceHtml = !this.config.requireLogin && !priceRange ? Mustache.render(this.priceTemplate, {
                            taxClassPrefix,
                            taxDataPrefix,
                            priceLabel,
                            salePriceLabel,
                            nonSalePriceLabel,
                            price,
                            nonSalePrice,
                            taxLabelHtml,
                            retailPriceHtml,
                        }, null, this.templateCustomTags) : '';

                        const formHtml = node.productOptions.edges.length === 0 ? Mustache.render(this.simpleFormTemplate, {
                            id,
                            addToCartUrl,
                            hideQty,
                            qty,
                            txtQuantity,
                            quantityDecreaseTxt,
                            quantityIncreaseTxt,
                            maxPurchaseQuantity,
                            purchasability,
                        }, null, this.templateCustomTags) : '';

                        const detailsHtml = Mustache.render(this.productDetailsTemplate, {
                            id,
                            name,
                            url,
                            loadingImg,
                            img,
                            hoverImage,
                            loginPriceHtml,
                            priceHtml,
                            priceRangeHtml,
                            optionsToggleHtml,
                            buttonToggleHtml,
                            formHtml,
                            checked,
                            showRatingHtml,
                            ratingHtml: this.showProductRating ? ratingHtml(node.reviewSummary?.averageRating) : '',
                            product_sale_badges,
                            product_sale_label,
                            saleBadge: saleBadge(node.prices),
                            customBadge: customBadge(node.customFields.edges.length > 0 ? node.customFields.edges : ''),
                            showQty,
                            hideQty,
                        }, null, this.templateCustomTags);

                        const thumbnailHtml = $(Mustache.render(this.thumbnailTemplate, {
                            id,
                            name,
                            url,
                            loadingImg,
                            img,
                            checked,
                        }, null, this.templateCustomTags));

                        $productEl.html(detailsHtml);
                        $thumbnails.append(thumbnailHtml);

                        // load simple product details
                        if (node.productOptions.edges.length === 0) {
                            const product = new ProductDetails($productEl, _.extend(this.context, { enableAlsoBought: false }));

                            // listen price change
                            product.$scope.on('price-change', () => this.updateTotalPrice());

                            // store the product object for later use
                            this.products.push(product);
                            $productEl.data('productDetails', product);
                        }

                        // init foundation collapsible
                        collapsibleFactory('[data-options-collapsible]', { $context: $productEl });

                        // bind events
                        $productEl.find('[data-also-bought-checkbox]').on('change', this.onAlsoBoughtCheckboxChange.bind(this, $productEl));
                        $productEl.find('[data-options-collapsible]').on(CollapsibleEvents.open, this.onOptionsOpen.bind(this, $productEl));

                        this.updateTotalPrice();
                        this.updateAddSelectedToCartButton();
                    });
                },
            });

            // init parent product item
            const $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
            collapsibleFactory('[data-options-collapsible]', { $context: $parentProductEl });
            $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl));

            // listen parent product price change
            this.parentProductDetails.$scope.on('price-change', () => this.updateTotalPrice());
        }
    }

    updateTotalPrice() {
        // stop showing total price if require login
        if (this.config.requireLogin) {
            return;
        }

        const productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl)
            .get()
            .map(el => $(el).val());

        const priceById = {
            ...this.productNodes.filter(node => node.prices && node.prices.price).reduce((_priceById, node) => ({
                ..._priceById,
                [node.entityId]: {
                    [this.config.includeTax ? 'with_tax' : 'without_tax']: {
                        value: node.prices.price.value,
                        formatted: this.currencyFormat(node.prices.price.value),
                    },
                },
            }), {}),
            ...this.products.filter(product => product.price && product.productId).reduce((_priceById, product) => ({
                ..._priceById,
                [product.productId]: product.price,
            }), {}),
        };

        const productQty = {};
        productIds.forEach(id => {
            const inputQty = $(`[data-product-id="${id}"] [data-product-quantity]`, this.$alsoBoughtEl);
            if (inputQty.length) {
                productQty[id] = { quantity: parseInt(inputQty.val(), 10) };
            }
        });

        let mergeProduct = {};
        Object.keys(priceById).map(key => {
            mergeProduct = {
                ...mergeProduct,
                [key]: { ...priceById[key], ...productQty[key] },
            };
            return mergeProduct;
        });

        // merge productNodes & product details objects
        const products = Object.keys(mergeProduct).map(productId => ({
            productId,
            price: mergeProduct[productId],
        }));

        const total = [this.parentProductDetails, ...products]
            .filter(product => productIds.indexOf(product.productId) > -1)
            .reduce(({
                with_tax = 0, without_tax = 0, money_with_tax, money_without_tax,
            }, { price }) => ({
                with_tax: price && price.with_tax ? with_tax + (price.with_tax.value * (price.quantity ? price.quantity : 1)) : null,
                without_tax: price && price.without_tax ? without_tax + (price.without_tax.value * (price.quantity ? price.quantity : 1)) : null,
                money_with_tax: money_with_tax || ((price && price.with_tax) ? extractMoney(price.with_tax.formatted, this.context.money) : null),
                money_without_tax: money_without_tax || ((price && price.without_tax) ? extractMoney(price.without_tax.formatted, this.context.money) : null),
            }), {});

        const $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
        const $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);

        if (total.with_tax) {
            $('[data-price]', $withTax).html(this.currencyFormat(total.with_tax, total.money_with_tax));
            $withTax.show();
            if (total.without_tax) {
                $('[data-tax-label]', $withTax).show();
            } else {
                $('[data-tax-label]', $withTax).hide();
            }
        } else {
            $withTax.hide();
        }

        if (total.without_tax) {
            $('[data-price]', $withoutTax).html(this.currencyFormat(total.without_tax, total.money_without_tax));
            $withoutTax.show();
            if (total.with_tax) {
                $('[data-tax-label]', $withoutTax).show();
            } else {
                $('[data-tax-label]', $withoutTax).hide();
            }
        } else {
            $withoutTax.hide();
        }
    }

    onAddAllButtonClick(e) {
        e.preventDefault();

        $('[data-also-bought-checkbox]', this.$alsoBoughtEl)
            .prop('checked', true)
            .trigger('change');
    }

    handleClickOptions() {
        this.$alsoBoughtEl.on('click', '[data-options-collapsible]:not(.is-open)', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const $productEl = $target.closest('[data-product-id]');
            const product = $productEl.data('productDetails');
            const $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
            if (!product?.$form?.get(0).checkValidity()) {
                $alsoBoughtCheckbox
                    .prop('checked', false)
                    .trigger('change');
            }
        });

        this.$alsoBoughtEl.on('click', '[data-options-collapsible]', event => {
            event.preventDefault();
            const $el = $(event.currentTarget);
            const $alsoBoughtCheckbox = $el.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');

            if (!$alsoBoughtCheckbox.data('purchasable')) {
                $alsoBoughtCheckbox
                    .prop('checked', false)
                    .trigger('change');
            }

            $('body').toggleClass('_has-optionModal', $el.hasClass('is-open'));
        });

        $('body').on('click', '[data-label-collapsible]', e => {
            const $el = $(e.currentTarget);
            const $productEl = $el.closest('.productView-alsoBought-item');
            const $optionToggle = $el.siblings('[data-options-collapsible]');
            const $optionContent = $productEl.find('[data-cart-item-add]');
            const $alsoBoughtCheckbox = $el.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');

            if (!$optionContent.length || !$alsoBoughtCheckbox.data('purchasable')) {
                $optionToggle.trigger('click');
            }
        });

        // Close Modal option
        $('body').on('click', '.productView-alsoBought-item-form-overlay, #optionClose', e => {
            const $el = $(e.currentTarget);
            const $optionContentItem = $el.closest('.productView-alsoBought-item-content');
            const $optionToggle = $optionContentItem.find('[data-options-collapsible]');
            if ($optionToggle.hasClass('is-open')) {
                $optionToggle.trigger('click');
            }
        });

        // checkValidity Modal option
        $('body').on('click', '#optionDone', event => {
            const $target = $(event.currentTarget);
            const $productEl = $target.closest('[data-product-id]');
            const $optionToggle = $productEl.find('[data-options-collapsible]');

            const product = $productEl.data('productDetails');
            const success = reportFormValidity(product.$form.get(0));

            if (success) {
                $optionToggle.trigger('click');
            }
        });
    }

    onAddSelectedButtonClick(e) {
        e.preventDefault();
        this.addSelectedProductsToCart();
    }

    onAlsoBoughtCheckboxChange($productEl, e) {
        const $cb = $(e.target);
        const $label = $(`label[for="${$cb.attr('id')}"]`, this.$alsoBoughtEl);
        const $thumb = $(`[data-thumbnail-product-id="${$productEl.data('productId')}"]`, this.$alsoBoughtEl);
        const cbId = $cb.attr('id');
        const $labelForCheckbox = $(`label[for="${cbId}"]`);

        const $inputQty = $productEl.find('[data-product-quantity]');
        const inputQty = parseInt($inputQty.val(), 10);
        const quantityMin = parseInt($inputQty.data('quantityMin'), 10);
        const qty = quantityMin || 1;

        // open (close) product options form if checkbox is checked (unchecked)
        if ($cb.prop('checked')) {
            $label.addClass('is-checked');
            $thumb.addClass('is-checked');
            $labelForCheckbox.addClass('is-checked');

            if (!inputQty) {
                $inputQty.val(qty);
            }
        } else {
            $label.removeClass('is-checked');
            $thumb.removeClass('is-checked');
            $labelForCheckbox.removeClass('is-checked');
        }

        this.updateTotalPrice();
        this.updateAddSelectedToCartButton();
    }

    onOptionsOpen($productEl) {
        const $inputQty = $productEl.find('[data-product-quantity]');
        const inputQty = parseInt($inputQty.val(), 10);
        const quantityMin = parseInt($inputQty.data('quantityMin'), 10);
        const qty = quantityMin || 1;

        const $alsoBoughtCheckbox = $productEl.find('[data-also-bought-checkbox]');
        const $form = $productEl.find('[data-cart-item-add]');
        if ($form.hasClass('_unPurchase')) {
            return;
        }

        if (!inputQty) {
            $inputQty.val(qty);
        }

        $alsoBoughtCheckbox.prop('checked', true);
        $alsoBoughtCheckbox.trigger('change');

        if ($productEl.data('productDetails')) {
            return;
        }
        this.loadProductDetails($productEl);
    }

    async loadProductDetails($productEl) {
        const productId = $productEl.data('productId');
        const $content = $productEl.find('[data-product-content]');
        const $alsoBoughtCheckbox = $content.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');

        $content.html(Mustache.render(this.loadingTemplate, { loadingImg: this.context.loadingImg }, null, this.templateCustomTags));

        await new Promise(resolve => {
            utils.api.product.getById(productId, { template: 'papathemes/also-bought-game/product-details' }, (err, resp) => {
                if (err || !resp) {
                    return;
                }

                $content.html($(resp).html());

                const product = new ProductDetails($productEl, _.extend(this.context, { enableAlsoBought: false }), null, true);

                // listen price change
                const $inputQty = $content.find('[data-product-quantity]');
                const inputQty = parseInt($inputQty.val(), 10);
                const quantityMin = parseInt($inputQty.data('quantityMin'), 10);
                const qty = quantityMin || 1;
                product.$scope.on('price-change', () => this.updateTotalPrice());

                if (!inputQty) {
                    $inputQty.val(qty);
                }

                // listen product-view-update event
                // for toggle checkbox depending on product pachasibility
                product.$scope.on('product-view-update', (event, data) => {
                    const productForm = $productEl.data('productDetails');
                    const check = productForm?.$form?.get(0).checkValidity();

                    if (!data.purchasable || !data.instock || !check) {
                        $alsoBoughtCheckbox
                            .prop('checked', false)
                            .trigger('change')
                            .data('purchasable', false);
                    } else {
                        $alsoBoughtCheckbox
                            .prop('checked', true)
                            .trigger('change')
                            .data('purchasable', true);
                    }
                });

                // store the product object for later use
                this.products.push(product);
                $productEl.data('productDetails', product);

                this.updateTotalPrice();

                resolve();
            });
        });

        // The product has optional not required
        const product = $productEl.data('productDetails');
        const check = product?.$form?.get(0).checkValidity();
        if (check) {
            $alsoBoughtCheckbox
                .prop('checked', true)
                .trigger('change')
                .data('purchasable', true);
        }

        const $form = $productEl.find('[data-cart-item-add]');
        const cbId = $alsoBoughtCheckbox.attr('id');
        const $labelForCheckbox = $(`label[for="${cbId}"]`);
        if ($form.hasClass('_unPurchase')) {
            $alsoBoughtCheckbox.prop('checked', false);
            $alsoBoughtCheckbox.trigger('change');
            $labelForCheckbox.addClass('_disable');
        }
    }

    listenQuantityAlsoBoughtChange() {
        this.$alsoBoughtEl.on('click', '[data-quantity-also-bought-change] button', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const $input = $(event.currentTarget).siblings('input');
            const $alsoBoughtCheckbox = $target.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
            const quantityMin = parseInt($input.data('quantityMin'), 10);
            const quantityMax = parseInt($input.data('quantityMax'), 10);

            let qty = parseInt($input.val(), 10);

            // If action is incrementing
            if ($target.data('action') === 'inc') {
                // If quantity max option is set
                if (quantityMax > 0) {
                    // Check quantity does not exceed max
                    if ((qty + 1) <= quantityMax) {
                        qty++;
                    }
                } else {
                    qty++;
                }
            } else if (qty >= 1) {
                // If quantity min option is set
                if (quantityMin > 0) {
                    // Check quantity does not fall below min
                    if ((qty - 1) >= quantityMin) {
                        qty--;
                    }
                } else {
                    qty--;
                }
            }

            // update hidden input
            $input.val(qty);

            if (qty > 0) {
                $alsoBoughtCheckbox.prop('checked', true);
                $alsoBoughtCheckbox.trigger('change');
            } else {
                $alsoBoughtCheckbox.prop('checked', false);
                $alsoBoughtCheckbox.trigger('change');
            }
        });

        this.$alsoBoughtEl.on('input', '[data-quantity-also-bought-change] input', event => {
            event.preventDefault();
            const $input = $(event.currentTarget);
            const $alsoBoughtCheckbox = $input.closest('.productView-alsoBought-item-check').find('[data-also-bought-checkbox]');
            const qty = $input.val();
            if (qty > 0) {
                $alsoBoughtCheckbox.prop('checked', true);
                $alsoBoughtCheckbox.trigger('change');
            } else {
                $alsoBoughtCheckbox.prop('checked', false);
                $alsoBoughtCheckbox.trigger('change');
            }
        });

        this.$alsoBoughtEl.on('blur', '[data-quantity-also-bought-change] input', event => {
            event.preventDefault();
            const $input = $(event.currentTarget);
            if ($input.val() === '') {
                $input.val('0');
            }
        });
        // --------------------------------------------------------------------
    }

    updateAddSelectedToCartButton() {
        const $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
        const $checked = $all.filter(':checked');
        const $btns = $('[data-buttons]', this.$alsoBoughtEl);

        if ($checked.length > 0) {
            $btns.addClass('show');
        } else {
            $btns.removeClass('show');
        }
    }

    // No longer used. Keep for other third-party scripts compatibility.
    /**
     * Promise to Call after the parent product is added to add also-bought products.
     */
    async parentProductAddedToCart() {
        // console.log('parent product added');

        const promises = [];
        let success = true;

        this.products.forEach(product => {
            if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                promises.push(async () => {
                    try {
                        await this.addProductToCart(product); // eslint-disable-line no-unused-expressions
                        await delay(1000); // eslint-disable-line no-unused-expressions
                    } catch (e) {
                        success = false;
                    }
                });
            }
        });

        await promiseSerial(promises); // eslint-disable-line no-unused-expressions
        return success;
    }


    async addSelectedProductsToCart() {
        /** @type {string[]} */
        const productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl)
            .get()
            .map(el => $(el).val());

        /** @type {Array<{product: ProductDetails, resp: any}>} */
        const results = [];
        const newProductAdded = [];
        let success = true;

        const $addToCartBtn = $('[data-add-selected]', this.$alsoBoughtEl);
        const originalBtnVal = $addToCartBtn.html();
        const waitMessage = $addToCartBtn.data('waitMessage');

        $addToCartBtn
            .html(waitMessage)
            .prop('disabled', true);

        // add parent product to cart
        if (productIds.indexOf(this.parentProductDetails.productId) > -1) {
            success = reportFormValidity(this.parentProductDetails.$form.get(0));
            if (success) {
                const [err, resp] = await this.parentProductDetails.addProductToCartAsync();
                const errorMsg = err || resp.data.error;
                if (errorMsg) {
                    // eslint-disable-next-line no-unused-expressions
                    await new Swal({
                        text: errorMsg,
                        type: 'error',
                    });
                    success = false;
                } else {
                    results.push({
                        product: this.parentProductDetails,
                        resp,
                    });

                    $(`[data-also-bought-checkbox][value="${this.parentProductDetails.productId}"]`, this.$alsoBoughtEl)
                        .prop('checked', false)
                        .trigger('change');
                }
            }
        }

        const $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');

        for (let i = 0; i < productIds.length && success; i++) {
            const productId = productIds[i];

            if (!productId || productId === this.parentProductDetails.productId) {
                continue;
            }

            const $productEl = $productEls.filter(`[data-product-id="${productId}"]`).filter((j, el) => $(el).closest('[data-cart-item-add]').length === 0);

            if ($productEl.length === 0) {
                continue;
            }

            if (!$productEl.data('productDetails')) {
                await this.loadProductDetails($productEl);
            }

            const product = $productEl.data('productDetails');

            if (!product) {
                continue;
            }

            success = reportFormValidity(product.$form.get(0));
            if (success) {
                const [err, resp] = await product.addProductToCartAsync();
                const errorMsg = err || resp.data.error;
                if (errorMsg) {
                    // eslint-disable-next-line no-unused-expressions
                    await new Swal({
                        text: errorMsg,
                        type: 'error',
                    });

                    $('[data-also-bought-checkbox]', product.$scope)
                        .prop('checked', false)
                        .trigger('change');
                    $addToCartBtn
                        .html(originalBtnVal)
                        .prop('disabled', false);

                    $('[data-product-quantity]', product.$scope).val(0);

                    success = false;
                } else {
                    results.push({
                        product,
                        resp,
                    });

                    newProductAdded.push({
                        id: resp?.data?.cart_item?.id,
                        qty: $('[data-product-quantity]', product.$scope).val(),
                        product,
                    });

                    $('[data-also-bought-checkbox]', product.$scope)
                        .prop('checked', false)
                        .trigger('change');

                    // Reset quantity also bought item
                    $('[data-product-quantity]', product.$scope)
                        .val('0');

                    if (i < productIds.length - 1) {
                        await delay(200);
                    } else {
                        $addToCartBtn
                            .html(originalBtnVal)
                            .prop('disabled', false);
                    }
                }
            } else {
                // open the product form
                const $toggle = $('[data-options-collapsible]', product.$scope);
                if (!$toggle.hasClass('is-open')) {
                    $toggle.trigger('click');
                }
                $addToCartBtn
                    .html(originalBtnVal)
                    .prop('disabled', false);
            }
        }

        if (results.length > 0) {
            const { product, resp } = results[0];

            // Open preview modal and update content
            if (product.previewModal) {
                if (!success) {
                    product.updateCartContent(product.previewModal, newProductAdded);
                } else {
                    // Supermarket OBPS Mod
                    const modal = defaultModal();
                    modal.close();
                    if (this.context.add_to_cart_popup === 'cart') {
                        return openCartPreview(newProductAdded, this.context);
                    }
                    if (this.context.add_to_cart_popup !== 'hide') {
                        product.previewModal.open();
                    }
                    product.updateCartContent(product.previewModal, newProductAdded, () => {
                        // Show new product added to cart
                        newProductAdded.forEach((item) => {
                            const $modal = $(item.product.previewModal.$content.get(0));
                            const $el = $modal.find(`.productView [data-alsobought-id="${item.id}"]`);
                            const $qty = $el.find('[data-cart-item-quantity]');
                            $el.show();
                            $qty.text(`${item.qty} x`);
                        });
                    }, 'papathemes/also-bought/preview');
                }
            } else {
                // if no modal, redirect to the cart page
                this.redirectTo(resp.data.cart_item.cart_url || this.context.urls.cart);
            }
        }
    }

    addProductToCart(product) {
        return new Promise((resolve, reject) => {
            const form = $('form[data-cart-item-add]', product.$scope).get(0);
            const $addToCartBtn = $('#form-action-addToCart', product.$scope);
            const originalBtnVal = $addToCartBtn.val();
            const waitMessage = $addToCartBtn.data('waitMessage');
            const $errorBox = $('[data-error-box]', product.$scope);
            const $errorMsg = $('[data-error-message]', product.$scope);
            const $checkbox = $('[data-also-bought-checkbox]', product.$scope);

            // Do not do AJAX if browser doesn't support FormData
            if (window.FormData === undefined) {
                resolve();
            }

            $addToCartBtn
                .val(waitMessage)
                .prop('disabled', true);

            product.$overlay.show();

            // Add item to cart
            utils.api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
                const errorMessage = err || response.data.error;

                // console.log(form);

                $addToCartBtn
                    .val(originalBtnVal)
                    .prop('disabled', false);

                product.$overlay.hide();

                // Guard statement
                if (errorMessage) {
                    // console.log('reject add product');

                    $errorMsg.html(errorMessage);
                    $errorBox.removeClass('u-hiddenVisually');
                    if ($errorBox.length > 0) {
                        scrollToElement($errorBox.get(0));
                    }

                    reject();
                    return;
                }

                // console.log('resolve add product');
                $errorMsg.empty();
                $errorBox.addClass('u-hiddenVisually');
                $checkbox.prop('checked', false).trigger('change');

                resolve();
            });
        });
    }
}
