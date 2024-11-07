import utils from '@bigcommerce/stencil-utils';
import { shuffle } from 'lodash';
import Mustache from 'mustache';
import { ProductCardsGraphQLQuery } from './utils';
import compareProducts from './compare-products';
import BlazeSlider from 'blaze-slider';

let observer;

class CartSuggestedProductsObserver {
    constructor(options = {}) {
        this.onCartChanged = this.onCartChanged.bind(this);

        this.loaded = false;
        this.products = [];
        this.options = options;
        this.query = new ProductCardsGraphQLQuery(options);

        this.unbindEvents();
        this.bindEvents();
    }

    bindEvents() {
        utils.hooks.on('cart-item-add-remote', this.onCartChanged);
        utils.hooks.on('cart-item-update-remote', this.onCartChanged);
        utils.hooks.on('cart-item-remove-remote', this.onCartChanged);
    }

    unbindEvents() {
        utils.hooks.off('cart-item-add-remote', this.onCartChanged);
        utils.hooks.off('cart-item-update-remote', this.onCartChanged);
        utils.hooks.off('cart-item-remove-remote', this.onCartChanged);
    }

    onCartChanged() {
        this.loaded = false;
        this.products = [];
        utils.hooks.emit('cart-suggested-products-change');
    }

    async load() {
        if (this.loaded) return this.products;

        const cart = await new Promise(resolve => {
            utils.api.cart.getCart({}, (err, response) => {
                resolve(response);
            });
        });

        const cartProductIds = [...cart.lineItems.physicalItems, ...cart.lineItems.digitalItems].map(item => item.productId).filter(productId => productId).slice(0, 50);
        this.products = this.fetchRelatedProducts(cartProductIds);
        this.loaded = true;
        return this.products;
    }

    async fetchRelatedProducts(_productIds) {
        const productIds = _productIds.slice(0, 50);
        if (!productIds || productIds.length === 0) return [];

        const relatedProductIds = await new Promise(resolve => {
            $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                    query: `
                        query relatedProducts(
                            $productIds: [Int!]
                            $first: Int
                        ) {
                            site {
                                products(entityIds: $productIds, first: $first) {
                                    edges {
                                        node {
                                            relatedProducts(hideOutOfStock: true) {
                                                edges {
                                                    node {
                                                        entityId
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        productIds,
                        first: productIds.length,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.options.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: (resp) => {
                    const ids = resp.data.site.products.edges.reduce((_ids, { node: { relatedProducts } }) =>
                        relatedProducts.edges.reduce(
                            (_ids2, { node: { entityId } }) => (_ids2.includes(entityId) ? _ids2 : [..._ids2, entityId]),
                            _ids,
                        ), []);

                    resolve(ids);
                },
                error: () => {
                    resolve([]);
                },
            });
        });

        return this.query.load(relatedProductIds);
    }
}

class CartSuggestedProducts {
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
                                            data-product-id="{{id}}" >
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
        this.defaultProductsCount = Number(this.context.product_cartsuggested_count) || 0;
        this.onRemove = this.onRemove.bind(this);
        this.onViewport = this.onViewport.bind(this);
        this.onCartChanged = this.onCartChanged.bind(this);
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
        utils.hooks.on('cart-suggested-products-change', this.onCartChanged);
    }

    unbindEvents() {
        if (this.viewportObserver) {
            this.$scope.get().forEach(el => this.viewportObserver.disconnect(el));
            this.$loadMore.off('click', this.onLoadMore);
            this.$collapse.off('click', this.onCollapse);
        }
        this.$scope.off('remove', this.onRemove);
        utils.hooks.off('cart-suggested-products-change', this.onCartChanged);
    }

    onLoadMore(event) {
        event.preventDefault();
        const $products = this.$scope.find('.productGrid .product').filter(':hidden');

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

        const $products = this.$scope.find('.productGrid .product');

        $products.slice(this.defaultProductsCount).hide();

        this.$collapse.hide();

        if ($products.length > this.defaultProductsCount) {
            this.$loadMore.show();
        }

        if (!$(event.currentTarget).parents('#cart-preview-dropdown').length) {
            $('html, body').animate({
                scrollTop: this.$scope.offset().top,
            });
        }
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

        const products = shuffle(await observer.load());

        const html = Mustache.render(this.template, { products });
        const $cardCarousel = $(html).children();
        const $cardGrid = $(html).children();

        if ($cardCarousel.length === 0) {
            this.$scope.hide();
            return;
        }

        // Process Blaze carouse
        const $carouselBlaze = this.$scope.find('.productCarousel.blaze-slider');

        if ($carouselBlaze.length > 0) {
            const blazeSlider = $carouselBlaze.data('blazeSliderInstance');
            $carouselBlaze.find('.blaze-track-container .blaze-track').html($cardCarousel.get().map(el => $('<div class="productCarousel-slide"></div>').append(el)));
            if (blazeSlider) {
                blazeSlider.totalSlides = $cardCarousel.length;
                blazeSlider.refresh();
            } else {
                $carouselBlaze.data('blazeSliderInstance', new BlazeSlider($carouselBlaze.get(0), $carouselBlaze.data('blazeSlider')));
            }
        }

        // Process stick carousel
        const $carouselSlick = this.$scope.find('.productCarousel:not(.blaze-slider)');

        if ($carouselSlick.length > 0) {
            $carouselSlick.filter('.slick-initialized[data-slick]').slick('unslick');
            $carouselSlick.html($cardCarousel.get().map(el => $('<div class="productCarousel-slide"></div>').append(el)));
            $carouselSlick.filter('[data-slick]').slick();
        }

        // Process grid
        const $grid = this.$scope.find('.productGrid');
        if ($grid.length > 0) {
            $grid.html($cardGrid.get().map(el => $('<li class="product"></li>').append(el)));
            $grid.children().slice(this.defaultProductsCount).hide();
            if (products.length > this.defaultProductsCount) {
                this.$loadMore.show();
            } else {
                this.$scope.find('.actionGroup').addClass('notActive');
            }
        }

        this.$loading.hide();
    }

    onCartChanged(productId) {
        if (productId && !observer.productIds.includes(productId)) {
            this.loaded = false;
        }
    }
}

function initObserver(context) {
    const restrictToLogin = !context.customerId && context.hidePriceFromGuests;

    if (!observer) {
        observer = new CartSuggestedProductsObserver({
            ...context,
            restrictToLogin,
        });
    }
}

export default function initCartSuggestedProducts(
    context,
    $scope = $('[data-cart-suggested-products]'),
) {
    try {
        initObserver(context);
        const $el = $scope.filter((i, el) => !$(el).data('cartSuggestedProductsInstance'));

        if ($el.length > 0) {
            const instance = new CartSuggestedProducts({
                $scope: $el,
                context,
            });
            $el.data('cartSuggestedProductsInstance', instance);
            return instance;
        }
    } catch (e) {
        console.error(e);
    }
}
