import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import swal from '../theme/global/sweet-alert';
import { extractMoney, currencyFormat } from './theme-utils';

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

export class BulkOrder {
    constructor(context, $scope) {
        this.context = context || {};
        this.$body = $('body');
        this.$scope = $scope;
        this.itemCount = 0;
        this.progressCurrent = 0;
        this.progressTotal = 0;

        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onQuantityButtonClick = this.onQuantityButtonClick.bind(this);
        this.onProductAdded = this.onProductAdded.bind(this);
        this.onAddAllClick = this.onAddAllClick.bind(this);
        this.onCartQtyChange = this.onCartQtyChange.bind(this);
        this.onProgressPopupCloseClick = this.onProgressPopupCloseClick.bind(this);

        this.reinit();

        // Supermarket
        $('body').on('beforeload.instantload', () => this.unbindEvents());
    }

    reinit() {
        this.$progressPopup = $('.bulkOrder-progressModal', this.$scope);
        this.$progressBar = $('.progressBar', this.$progressPopup);
        this.$progressPopupCurrent = $('.bulkOrder-progressModal-current', this.$scope);
        this.$progressPopupActions = $('.bulkOrder-progressModal-actions', this.$scope);
        this.$progressPopupClose = $('[data-close]', this.$scope);

        this.unbindEvents();
        this.bindEvents();

        this.calculate();
        if (this.context.cartId) {
            this.updateQtyInCart();
        }
    }

    bindEvents() {
        this.$scope.on('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
        this.$scope.on('click', '[data-quantity-change] button', this.onQuantityButtonClick);
        this.$scope.on('click', '[data-bulkorder-add-all]', this.onAddAllClick);
        this.$body.on('ajax-addtocart-item-added', this.onProductAdded);
        this.$body.on('cart-quantity-update', this.onCartQtyChange);
        this.$progressPopupClose.on('click', this.onProgressPopupCloseClick);
    }

    unbindEvents() {
        this.$scope.off('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
        this.$scope.off('click', '[data-quantity-change] button', this.onQuantityButtonClick);
        this.$scope.off('click', '[data-bulkorder-add-all]', this.onAddAllClick);
        this.$body.off('ajax-addtocart-item-added', this.onProductAdded);
        this.$body.off('cart-quantity-update', this.onCartQtyChange);
        this.$progressPopupClose.off('click', this.onProgressPopupCloseClick);
    }

    onProgressPopupCloseClick(event) {
        event.preventDefault();
        this.hideProgressPopup();
    }

    onCartQtyChange() {
        this.updateQtyInCart();
    }

    showProgressPopup() {
        this.$progressPopupActions.addClass('u-hiddenVisually');
        this.$progressPopup.addClass('is-open');
    }

    hideProgressPopup() {
        this.$progressPopupCurrent.css('width', 0);
        this.$progressPopupActions.addClass('u-hiddenVisually');
        this.$progressPopup.removeClass('is-open');
    }

    updateProgressPopup() {
        if (this.progressTotal > 0) {
            this.$progressPopupCurrent.css('width', `${this.progressCurrent / this.progressTotal * 100}%`);
        } else {
            this.$progressPopupCurrent.css('width', 0);
        }
    }

    showProgressPopupActions() {
        this.$progressPopupActions.removeClass('u-hiddenVisually');
    }

    showProgressBar() {
        this.$progressBar.removeClass('u-hiddenVisually');
    }

    hideProgressBar() {
        this.$progressBar.addClass('u-hiddenVisually');
    }

    onAddAllClick(event) {
        event.preventDefault();

        if (this.itemCount === 0) {
            swal.fire({
                text: this.context.bulkOrderEnterQty || 'Please enter product quantity',
                icon: 'error',
            });
            return;
        }

        this.addAllProducts();
    }

    onProductAdded(event, productId) {
        this.$scope.find(`[data-bulkorder-qty-id='${productId}']`).val(0);
        this.calculate();
    }

    onQuantityButtonClick(event) {
        event.preventDefault();
        const $target = $(event.currentTarget);
        const $input = $target.closest('[data-quantity-change]').find('input');
        const quantityMin = parseInt($input.data('quantityMin'), 10);
        const quantityMax = parseInt($input.data('quantityMax'), 10);

        let qty = parseInt($input.val(), 10);
        if (Number.isNaN(qty)) {
            qty = quantityMin || 1;
        }

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
        } else if (qty > 0) {
            // If quantity min option is set
            if (quantityMin > 0) {
                // Check quantity does not fall below min
                if ((qty - 1) >= quantityMin) {
                    qty--;
                } else {
                    qty = 0;
                }
            } else {
                qty--;
            }
        }
        $input.val(qty);

        if (qty <= 0) {
            this.clearErrorMsg($input[0]);
        }

        this.calculate();
    }

    onQuantityChange(event) {
        const qty = parseInt(event.currentTarget.value, 10);
        if (qty <= 0) {
            this.clearErrorMsg(event.currentTarget);
        }

        this.calculate();
    }

    clearErrorMsg(input) {
        $(input).closest('.card').find('[data-bulkorder-options] .alertBox').remove();
    }

    calculate() {
        let total = 0;
        let count = 0;
        let money;

        this.$scope.find('[data-bulkorder-qty-id]').each((i, el) => {
            const $input = $(el);
            const qty = parseInt($input.val(), 10);
            const productId = $input.data('bulkorderQtyId');
            const $price = this.$scope.find(`[data-bulkorder-price-id='${productId}']`);
            const priceVal = parseFloat($price.data('bulkorderPriceValue'));
            const priceFmt = $price.data('bulkorderPriceFormatted');
            const subtotal = priceVal ? Math.round(priceVal * qty * 100) / 100 : 0;
            const $subtotal = this.$scope.find(`[data-bulkorder-subtotal-id='${productId}']`);

            if (priceFmt) {
                money = extractMoney(priceFmt);
            }

            $subtotal.html(priceFmt ? currencyFormat(subtotal, money) : '');

            total += subtotal;
            count += qty;
        });

        this.itemCount = count;

        this.$scope.find('[data-bulkorder-total-count]').html(count);
        this.$scope.find('[data-bulkorder-total-amount]').html(currencyFormat(Math.round(total * 100) / 100, money));
    }

    addAllProducts() {
        let valid = true;

        // check products which have options much choose options before add to cart
        this.$scope.find('[data-bulkorder-options]').each((i, el) => {
            const $el = $(el);
            const qty = Number($el.closest('.card').find('[data-bulkorder-qty-id]').val()) || 0;

            if (qty > 0 && $el.find('form').length === 0) {
                $el.html(`
                    <div class="alertBox alertBox--error">
                        <div class="alertBox-column alertBox-icon">
                            <icon glyph="ic-error" class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></icon>
                        </div>
                        <p class="alertBox-column alertBox-message">
                            <span>${this.context.bulkOrderChooseOptions}</span>
                        </p>
                    </div>
                `);
                $el.find('.alertBox').hide().fadeIn(300);
                valid = false;
            }
        });

        if (!valid) return;

        const promises = [];
        this.progressCurrent = 0;

        this.$scope.find('[data-bulkorder-qty-id]').each((i, el) => {
            const $input = $(el);
            const qty = parseInt($input.val(), 10);
            const productId = $input.data('bulkorderQtyId');
            const form = $input.closest('.card').find('[data-bulkorder-options] form')[0];

            if (qty > 0) {
                promises.push(async () => {
                    this.progressCurrent++;
                    this.updateProgressPopup();

                    await this.addProduct(productId, qty, form); // eslint-disable-line no-unused-expressions

                    $input.val(0);
                    this.calculate();

                    // wait 1s before adding to cart a new item in order to avoid request failed.
                    await delay(1000); // eslint-disable-line no-unused-expressions
                });
            }
        });

        this.progressTotal = promises.length;
        this.showProgressPopup();
        this.showProgressBar();

        promiseSerial(promises).then(() => {
            this.showProgressPopupActions();
            this.hideProgressBar();
            // this.updateQtyInCart();
            this.updateCartCounter();
        });
    }

    async addProduct(productId, qty, form = undefined) {
        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        const formData = new FormData(form || undefined);
        formData.set('product_id', productId);
        formData.set('qty[]', qty);

        const promise = new Promise((resolve) => {
            utils.api.cart.itemAdd(formData, (err, response) => {
                let errorMessage = err || response.data.error;

                if (response?.data?.error?.minqty) {
                    errorMessage = this.context.txtMinQty.replace('%qty%', response.data.error.minqty);
                }

                if (response?.data?.error?.maxqty) {
                    errorMessage = this.context.txtMaxQty.replace('%qty%', response.data.error.maxqty);
                }

                // Guard statement
                if (errorMessage) {
                    // Strip the HTML from the error message
                    const tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;

                    alert(tmp.textContent || tmp.innerText);
                }

                resolve();
            });
        });

        await promise; // eslint-disable-line no-unused-expressions
    }

    updateQtyInCart() {
        $.get('/api/storefront/cart', data => {
            if (!data.length) {
                return;
            }

            const qtys = {};

            data[0].lineItems.physicalItems.forEach(item => {
                if (typeof qtys[item.productId] !== 'undefined') {
                    qtys[item.productId] += item.quantity;
                } else {
                    qtys[item.productId] = item.quantity;
                }
            });

            $('[data-bulkorder-cart-qty-id]', this.$scope).each((i, el) => {
                const $el = $(el);
                const productId = parseInt($el.data('bulkorderCartQtyId'), 10);
                if (qtys[productId]) {
                    $el.html(qtys[productId]);
                    $el.closest('._qtyInCartWrapper').show();
                } else {
                    $el.html('0');
                    $el.closest('._qtyInCartWrapper').hide();
                }
            });
        });
    }

    updateCartCounter() {
        utils.api.cart.getContent({ template: 'cart/preview' }, (err, resp) => {
            if (err) {
                return;
            }

            // Update cart counter
            const $body = $('body');
            const $cartQuantity = $('[data-cart-quantity]', resp);
            const $cartPrice = $('[data-cart-price]', resp);
            const $cartCounter = $('.navUser-action .cart-count');
            const quantity = $cartQuantity.data('cart-quantity') || 0;
            const price = $cartPrice.data('cartPrice') || 0;

            $cartCounter.addClass('cart-count--positive');
            $body.trigger('cart-quantity-update', [quantity, price]);
        });
    }
}

export default function bulkOrderFactory(context = null, selector = '#product-listing-container') {
    const $selector = $(selector);
    let bulkOrder = $selector.data('bulkOrderInstance');

    if (!(bulkOrder instanceof BulkOrder)) {
        bulkOrder = new BulkOrder(context, $selector);
        $selector.data('bulkOrderInstance', bulkOrder);
    }

    return bulkOrder;
}
