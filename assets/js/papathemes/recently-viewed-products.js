import utils from '@bigcommerce/stencil-utils';
import { uniq } from 'lodash';
import Mustache from 'mustache';
import { parseJSON, ProductCardsGraphQLQuery } from './utils';
import compareProducts from './compare-products';
import BlazeSlider from 'blaze-slider';

let observer;

const dummyStorage = {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
};

class RecentlyViewedProductsObserver {
    constructor({
        customerRecentlyViewedProductIds = [],
        customerId = 0,
        ...options
    } = {}) {
        this.onProductViewed = this.onProductViewed.bind(this);

        this.storage = window.localStorage || dummyStorage;
        this.productIds = parseJSON(this.storage.getItem('supermarket_recentlyViewedProducts') || '[]') || [];
        this.customerRecentlyViewedProductIds = customerRecentlyViewedProductIds;
        this.customerId = customerId;
        this.options = options;
        this.query = new ProductCardsGraphQLQuery(options);

        const lastCustomerId = parseJSON(this.storage.getItem('supermarket_customerId') || '0') || 0;

        // Clear recently viewed products of other customer last logged in
        if (lastCustomerId && lastCustomerId !== this.customerId) {
            this.productIds = [];
            this.storage.setItem('supermarket_recentlyViewedProducts', JSON.stringify(this.productIds));
        }

        this.storage.setItem('supermarket_customerId', JSON.stringify(this.customerId));

        this.unbindEvents();
        this.bindEvents();
    }

    bindEvents() {
        $('body').on('productviewed', this.onProductViewed);
    }

    unbindEvents() {
        $('body').off('productviewed', this.onProductViewed);
    }

    onProductViewed(event, productId) {
        try {
            if (productId && !this.productIds.includes(productId)) {
                this.productIds.unshift(productId);
                this.storage.setItem('supermarket_recentlyViewedProducts', JSON.stringify(this.productIds));
                utils.hooks.emit('product-view', productId);
            }
        } catch (e) {
            console.error(e);
        }
    }

    async load() {
        if (this.customerId && this.customerRecentlyViewedProductIds.length === 0) {
            this.customerRecentlyViewedProductIds = await new Promise(resolve => {
                utils.api.getPage('/', {
                    template: 'supermarket/recently-viewed-products/customer-product-ids',
                    config: {
                        customer: {
                            recently_viewed_products: true,
                        },
                    },
                }, (err, resp) => {
                    resolve(String($(resp).data('productIds')).split(',').map(s => Number(s)).filter(i => i));
                });
            });
        }

        const productIds = uniq([...this.customerRecentlyViewedProductIds, ...this.productIds]).filter(productId => productId).slice(0, 100);
        return this.query.load(productIds);
    }
}

class RecentlyViewedProductsDropdown {
    constructor({
        $dropdownHandler,
        $dropdown,
        template = `
            <h2 class="_heading">{{heading}}</h2>
            <ul class="_productList">
                {{#products}}
                    <li class="_productList-item">
                        <article class="card"
                            data-event-type="list"
                            data-entity-id="{{id}}"
                            data-position="{{index}}"
                            data-name="{{name}}"
                            data-product-price="{{price.value}}">
                            <figure class="card-figure">
                                <a class="card-img-container" href="{{url}}">
                                    <img
                                        {{#defaultImage}}
                                            src="{{url320wide}}"
                                            srcset="{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w"
                                        {{/defaultImage}}
                                        {{^defaultImage}}
                                            src="{{defaultProductImage}}"
                                        {{/defaultImage}}
                                        data-sizes="auto"
                                        class="card-image lazyload"
                                        alt="{{name}}"
                                        title="{{name}}">
                                </a>
                            </figure>
                            <div class="card-body">
                                <h3 class="card-title">
                                    <a href="{{url}}" data-event-type="product-click">{{name}}</a>
                                </h3>
                                {{#ratingHtml}}
                                    <p class="card-text card-text--rating" data-test-info-type="productRating">
                                        <span class="rating--small">
                                            {{&ratingHtml}}
                                        </span>
                                    </p>
                                {{/ratingHtml}}
                                {{#card_show_sku}}
                                    {{#sku}}
                                        <div class="card-text card-text--sku" data-test-info-type="sku">
                                            {{sku}}
                                        </div>
                                    {{/sku}}
                                {{/card_show_sku}}
                                {{#card_show_brand}}
                                    {{#brand}}
                                        <div class="card-text card-text--brand" data-test-info-type="brandName">
                                            <a href="{{brand.path}}" alt="{{brand.name}}">{{brand.name}}</a>
                                        </div>
                                    {{/brand}}
                                {{/card_show_brand}}
                                {{#cusomFields}}
                                    <div class="card-text card-text--info">
                                        {{&cusomFields}}
                                    </div>
                                {{/cusomFields}}
                                {{#price}}
                                    <div class="card-text--price">
                                        {{&price.formatted}}
                                    </div>
                                {{/price}}
                            </div>
                        </article>
                    </li>
                {{/products}}
            </ul>
        `,
    } = {}) {
        if (!observer) return;

        this.onDropdownOpened = this.onDropdownOpened.bind(this);
        this.onProductViewed = this.onProductViewed.bind(this);
        this.template = template;
        this.$dropdownHandler = $dropdownHandler;
        this.$dropdown = $dropdown;

        if (this.$dropdownHandler.length === 0) return;

        if (observer.customerId || observer.productIds.length > 0) {
            this.$dropdownHandler.show();
        } else {
            this.$dropdownHandler.hide();
        }

        this.unbindEvents();
        this.bindEvents();
    }

    bindEvents() {
        this.$dropdown.on('opened.fndtn.dropdown', this.onDropdownOpened);
        utils.hooks.on('product-view', this.onProductViewed);
    }

    unbindEvents() {
        this.$dropdown.off('opened.fndtn.dropdown', this.onDropdownOpened);
        utils.hooks.off('product-view', this.onProductViewed);
    }

    onProductViewed() {
        this.$dropdownHandler.show();
    }

    async onDropdownOpened(event, $dropdown) {
        $dropdown.addClass('is-loading').html($('<div class="loadingOverlay" style="display: block"></div>'));

        const products = await observer.load();
        const heading = this.$dropdownHandler.attr('title');
        const html = Mustache.render(this.template, { products, heading });

        $dropdown.html(html).removeClass('is-loading');
    }
}

class RecentlyViewedProductsSection {
    constructor({
        $scope,
        template = `
            <div>
            {{#products}}
                <article class="card {{cardExtraClass}}"
                    data-event-type="list"
                    data-entity-id="{{id}}"
                    data-position="{{index}}"
                    data-name="{{name}}"
                    data-product-price="{{price.value}}">
                    <div class="card-wrapper-figure">
                        <figure class="card-figure">
                            {{#saleBadge}}
                                <div class="sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}">
                                    <span class="sale-text">{{&saleBadge}}</span>
                                </div>
                            {{/saleBadge}}
                            <a class="card-img-container" href="{{url}}">
                                <img
                                    {{#defaultImage}}
                                        src="{{url320wide}}"
                                        srcset="{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w"
                                    {{/defaultImage}}
                                    {{^defaultImage}}
                                        src="{{defaultProductImage}}"
                                    {{/defaultImage}}
                                    data-sizes="auto"
                                    class="card-image lazyload"
                                    alt="{{name}}"
                                    title="{{name}}">
                                {{#hoverImage}}
                                    <img
                                        src="{{url320wide}}"
                                        srcset="{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w"
                                        data-sizes="auto"
                                        class="card-image lazyload"
                                        alt="{{name}}"
                                        title="{{name}}">
                                {{/hoverImage}}
                            </a>
                            <figcaption class="card-figcaption">
                                <div class="card-figcaption-body">
                                    <div class="card-buttons card-buttons--alt">
                                        {{#show_product_quick_view}}
                                            <a class="button card-figcaption-button quickview" tabindex="0" data-event-type="product-click" data-product-id="{{id}}"><svg class="icon"><use xlink:href="#icon-bs-search"></use></svg>{{txtQuickView}}</a>
                                        {{/show_product_quick_view}}
                                        <button type="button" tabindex="0" class="button card-figcaption-button _compare2" 
                                            data-compare-id="{{id}}"
                                            data-compare-image="{{#defaultImage}}{{url320wide}}{{/defaultImage}}"
                                            data-compare-title="{{name}}"
                                            data-compare-url="{{url}}"
                                        ><svg class="icon"><use xlink:href="#icon-compare"></use></svg>{{txtCompare}}</button>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-body">
                        <div class="card-badges">
                            {{#saleBadge}}
                                <div class="sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}">
                                    <span class="sale-text">{{&saleBadge}}</span>
                                </div>
                            {{/saleBadge}}
                        </div>
                        <h3 class="card-title">
                            <a href="{{url}}" data-event-type="product-click">{{name}}</a>
                        </h3>
                        {{#ratingHtml}}
                            <p class="card-text card-text--rating" data-test-info-type="productRating">
                                <span class="rating--small">
                                    {{&ratingHtml}}
                                </span>
                            </p>
                        {{/ratingHtml}}
                        {{#card_show_sku}}
                            {{#sku}}
                                <div class="card-text card-text--sku" data-test-info-type="sku">
                                    {{sku}}
                                </div>
                            {{/sku}}
                        {{/card_show_sku}}
                        {{#card_show_brand}}
                            {{#brand}}
                                <div class="card-text card-text--brand" data-test-info-type="brandName">
                                    <a href="{{brand.path}}" alt="{{brand.name}}">{{brand.name}}</a>
                                </div>
                            {{/brand}}
                        {{/card_show_brand}}
                        {{#cusomFields}}
                            <div class="card-text card-text--info">
                                {{&cusomFields}}
                            </div>
                        {{/cusomFields}}
                        {{#card_show_swatches}}
                            <div class="card-text card-text--colorswatches"></div>
                        {{/card_show_swatches}}
                        {{#price}}
                            <div class="card-text--price card-text">
                                {{&price.formatted}}
                            </div>
                        {{/price}}
                    </div>
                    <div class="card-footer{{#card_show_button}} _show{{/card_show_button}}">
                        <div class="card-buttons" {{^card_show_button}}tabindex="0"{{/card_show_button}}>
                            {{^restrictToLogin}}
                                {{#hasOptions}}
                                    <div class="_qtyAdd">
                                        {{&qtyBoxHtml}}
                                        <a href="{{url}}" target="_blank" title="{{txtChooseOptions}}" data-event-type="product-click" class="button button--primary card-figcaption-button{{#show_product_quick_view}}{{#ajax_add_to_cart}} quickview-alt{{/ajax_add_to_cart}}{{/show_product_quick_view}}" data-product-id="{{id}}">
                                            <span>{{txtChooseOptions}}</span>
                                            <i>
                                                <svg class="icon"><use xlink:href="#icon-cart-add"></use></svg>
                                            </i>
                                        </a>
                                    </div>
                                {{/hasOptions}}
                                {{#preOrder}}
                                    <div class="_qtyAdd">
                                        {{&qtyBoxHtml}}
                                        <a href="{{url}}" title="{{txtPreOrder}}" data-event-type="product-click" class="button button--primary card-figcaption-button">
                                            <span>{{txtPreOrder}}</span>
                                            <i>
                                                <svg class="icon"><use xlink:href="#icon-cart-add"></use></svg>
                                            </i>
                                        </a>
                                    </div>
                                {{/preOrder}}
                                {{#addToCartUrl}}
                                    <div class="_qtyAdd">
                                        {{&qtyBoxHtml}}
                                        <a href="{{addToCartUrl}}" title="{{txtAddToCart}}"{{^ajax_add_to_cart}} data-event-type="product-click"{{/ajax_add_to_cart}} class="button button--primary card-figcaption-button"{{#ajax_add_to_cart}} data-papathemes-cart-item-add{{/ajax_add_to_cart}}>
                                            <span>{{txtAddToCart}}</span>
                                            <i>
                                                <svg class="icon"><use xlink:href="#icon-cart-add"></use></svg>
                                            </i>
                                        </a>
                                    </div>
                                {{/addToCartUrl}}
                                {{#outOfStockMessage}}
                                    <a href="{{url}}" data-event-type="product-click" class="button button--outstock card-figcaption-button" data-product-id="{{id}}">
                                        <span>{{outOfStockMessage}}</span>
                                    </a>
                                {{/outOfStockMessage}}
                                <div class="_quickViewAndCompare">
                                    {{#show_product_quick_view}}
                                        <a href="#"
                                            title="{{txtQuickView}}"
                                            class="button card-figcaption-button quickview" 
                                            tabindex="0" 
                                            data-event-type="product-click" 
                                            data-product-id="{{id}}">
                                                <span class="btn-icon">
                                                    <svg class="icon"><use xlink:href="#icon-bs-search"></use></svg>
                                                </span>
                                        </a>
                                    {{/show_product_quick_view}}
                                    {{#show_compare}}
                                        <a href="#" class="button button--primary card-figcaption-button" 
                                            title="{{txtCompare}}"
                                            data-compare-id="{{id}}"
                                            data-compare-image="{{#defaultImage}}{{url320wide}}{{/defaultImage}}"
                                            data-compare-title="{{name}}"
                                            data-compare-url="{{url}}">
                                            <span class="btn-icon">
                                                <svg class="icon"><use xlink:href="#icon-compare"></use></svg>
                                            </span>
                                        </a>
                                    {{/show_compare}}
                                </div>
                            {{/restrictToLogin}}
                        </div>
                    </div>
                </article>
            {{/products}}
            </div>
        `,
        context,
    } = {}) {
        if (!observer) return;

        this.context = context;
        this.defaultProductsCount = Number(this.context.product_recentviewed_count) || 0;
        this.onRemove = this.onRemove.bind(this);
        this.onViewport = this.onViewport.bind(this);
        this.onProductViewed = this.onProductViewed.bind(this);
        this.template = template;
        this.loaded = false;
        this.$scope = $scope;
        this.$loading = $scope.find('.loading').show();
        this.$loadMore = $scope.find('.loadMore').hide();
        this.$collapse = $scope.find('.collapse').hide();

        if (this.$scope.length === 0) return;

        this.onLoadMore = this.onLoadMore.bind(this);
        this.onCollapse = this.onCollapse.bind(this);

        this.unbindEvents();
        this.bindEvents();
        compareProducts(this.context);
    }

    bindEvents() {
        this.viewportObserver = new IntersectionObserver(this.onViewport);
        this.$scope.get().forEach(el => this.viewportObserver.observe(el));
        this.$scope.on('remove', this.onRemove);
        this.$loadMore.on('click', this.onLoadMore);
        this.$collapse.on('click', this.onCollapse);
        utils.hooks.on('product-view', this.onProductViewed);
    }

    unbindEvents() {
        if (this.viewportObserver) {
            this.$scope.get().forEach(el => this.viewportObserver.disconnect(el));
            this.$loadMore.off('click', this.onLoadMore);
            this.$collapse.off('click', this.onCollapse);
        }
        this.$scope.off('remove', this.onRemove);
        utils.hooks.off('product-view', this.onProductViewed);
    }

    onLoadMore(event) {
        event.preventDefault();
        const $products = this.$scope.find('.product').filter(':hidden');

        $products
            .slice(0, this.defaultProductsCount)
            .show();
        if (!$products.is(':hidden')) {
            this.$loadMore.hide();
        }

        this.$collapse.show();
    }

    onCollapse(event) {
        event.preventDefault();

        const $products = this.$scope.find('.product');

        $products.slice(this.defaultProductsCount).hide();

        this.$collapse.hide();

        if ($products.length > this.defaultProductsCount) {
            this.$loadMore.show();
        }

        $('html, body').animate({
            scrollTop: this.$scope.offset().top,
        });
    }

    onRemove(event) {
        if (this.viewportObserver) {
            this.viewportObserver.disconnect(event.currentTarget);
        }
    }

    async onViewport() {
        if (this.loaded) return;

        this.loaded = true;
        this.$scope.show();

        const products = await observer.load();
        const html = Mustache.render(this.template, { products });
        const $cards = $(html).children();

        if ($cards.length === 0) {
            this.$scope.hide();
            return;
        }

        // Process Blaze carouse
        const $carouselBlaze = this.$scope.find('.productCarousel.blaze-slider');

        if ($carouselBlaze.length > 0) {
            const blazeSlider = $carouselBlaze.data('blazeSliderInstance');
            $carouselBlaze.find('.blaze-track-container .blaze-track').html($cards.get().map(el => $('<div class="productCarousel-slide"></div>').append(el)));
            if (blazeSlider) {
                blazeSlider.totalSlides = $cards.length;
                blazeSlider.refresh();
            } else {
                $carouselBlaze.data('blazeSliderInstance', new BlazeSlider($carouselBlaze.get(0), $carouselBlaze.data('blazeSlider')));
            }
        }

        // Process stick carousel
        const $carouselSlick = this.$scope.find('.productCarousel:not(.blaze-slider)');

        if ($carouselSlick.length > 0) {
            $carouselSlick.filter('.slick-initialized[data-slick]').slick('unslick');
            $carouselSlick.html($cards.get().map(el => $('<div class="productCarousel-slide"></div>').append(el)));
            $carouselSlick.filter('[data-slick]').slick();
        }

        // Process grid
        const $grid = this.$scope.find('.productGrid');
        if ($grid.length > 0) {
            $grid.html($cards.get().map(el => $('<li class="product"></li>').append(el)));
            $grid.children().slice(this.defaultProductsCount).hide();
            if (products.length > this.defaultProductsCount) {
                this.$loadMore.show();
            } else {
                this.$scope.find('.actionGroup').addClass('notActive');
            }
        }

        this.$loading.hide();
    }

    onProductViewed(productId) {
        if (productId && !observer.productIds.includes(productId)) {
            this.loaded = false;
        }
    }
}

function initObserver(context) {
    const customerRecentlyViewedProductIds = String(context.customerRecentlyViewedProductIds).split(',').map(s => Number(s)).filter(i => i);
    const restrictToLogin = !context.customerId && context.hidePriceFromGuests;

    if (!observer) {
        observer = new RecentlyViewedProductsObserver({
            ...context,
            customerRecentlyViewedProductIds,
            restrictToLogin,
        });
    }
}

export function initRecentlyViewedProductsDropdown(
    context,
    $dropdownHandler = $('[data-dropdown="recently-viewed-dropdown"]'),
    $dropdown = $('#recently-viewed-dropdown'),
) {
    try {
        initObserver(context);
        return new RecentlyViewedProductsDropdown({
            $dropdownHandler,
            $dropdown,
        });
    } catch (e) {
        console.error(e);
    }
}

export function initRecentlyViewedProductsSection(
    context,
    $scope = $('[data-recently-viewed-products-section]'),
) {
    try {
        initObserver(context);
        const $el = $scope.filter((i, el) => !$(el).data('recentlyViewedProductsSectionInstance'));

        if ($el.length > 0) {
            const instance = new RecentlyViewedProductsSection({
                $scope: $el,
                context,
            });
            $el.data('recentlyViewedProductsSectionInstance', instance);
            return instance;
        }
    } catch (e) {
        console.error(e);
    }
}
