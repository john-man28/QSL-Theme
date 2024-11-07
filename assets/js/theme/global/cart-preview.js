import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import { inert, initCartPopup } from '../../papathemes/utils';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function (secureBaseUrl, cartId, context) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');
    const $labelPrice = $('[data-cart-preview-price]');
    const $singleItem = $('._single-item', '[data-cart-preview]');
    const $pluralItem = $('._plural-item', '[data-cart-preview]');
    const $body = $('body');

    if (window.ApplePaySession) {
        $cartDropdown.addClass('apple-pay-supported');
    }

    $body.on('cart-quantity-update', (event, quantity, price) => {
        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity && quantity > 0);
        $labelPrice.text(price).toggleClass('price--positive', !!price);

        // Ensure quantity is always displayed
        if (!quantity) {
            $('.cart-quantity').text('0');
        }

        // Update visibility of single and plural item indicators
        if (quantity === 1) {
            $singleItem.show();
            $pluralItem.hide();
        } else {
            $singleItem.hide();
            $pluralItem.show();
        }

        // Store quantity and price in localStorage if available
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
            localStorage.setItem('cart-price', price);
        }
    });

    $cart.on('click', event => {
        const options = {
            template: 'common/cart-preview',
        };

        // Redirect to full cart page for mobile devices
        // if (/Mobi/i.test(navigator.userAgent)) {
        //     return event.stopPropagation();
        // }

        event.preventDefault();

        // Prevent re-triggering if cart is already open
        if ($cart.hasClass('is-open')) return;

        // Show loading overlay while fetching cart content
        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown.removeClass(loadingClass).html(response);
            $cartLoading.hide();

            // Initialize full functionality cart popup and slick slider
            initCartPopup(context, $cartDropdown);
            $cartDropdown.find('[data-slick]').not('.slick-initialized').slick();

            $('body').trigger('cartpreviewshown', [$cartDropdown]);
        });
    });

    // Close cart preview popup when clicking outside
    $body.on('click', event => {
        if ($cartDropdown.is('.is-open') && $(event.target).closest('[data-cart-preview], #cart-preview-dropdown, [data-reveal]').length === 0) {
            $cart.first().trigger('click');
        }
    });

    // Accessibility enhancements
    $cartDropdown.on('open.toggle', (event, $toggle) => {
        $('body').addClass('has-previewCartOpened');
        inert($cartDropdown);
        $cartDropdown.data('lastToggle', $toggle);
        $cartDropdown.find('a,button[tabindex!="-1"]').first().focus();
    });

    $cartDropdown.on('close.toggle', () => {
        $('body').removeClass('has-previewCartOpened');
        inert($cartDropdown, false);
        const $toggle = $cartDropdown.data('lastToggle');
        if ($toggle) {
            $toggle.get(0).focus();
            $cartDropdown.data('lastToggle', null);
        }
    });

    let quantity = 0;
    let price = 0;

    if (cartId) {
        // Retrieve existing quantity from localStorage
        if (utils.tools.storage.localStorageAvailable()) {
            const storedQuantity = localStorage.getItem('cart-quantity');
            const storedPrice = localStorage.getItem('cart-price');
            if (storedQuantity) {
                quantity = Number(storedQuantity);
                price = storedPrice || '';
                $body.trigger('cart-quantity-update', [quantity, price]);
            }
        }

        // Fetch updated cart quantity from Cart API
        const cartQtyPromise = new Promise((resolve) => {
            utils.api.cart.getContent({ baseUrl: secureBaseUrl, cartId, template: 'common/cart-preview' }, (err, response) => {
                let qty = 0;
                let cartPrice = '';
                if (err) {
                    resolve([qty, cartPrice]);
                } else {
                    qty = Number($('[data-cart-quantity]', response).data('cart-quantity'));
                    cartPrice = $('[data-cart-formatted]', response).data('cart-formatted') || '';
                    resolve([qty, cartPrice]);
                }
            });
        });

        cartQtyPromise.then(([qty, cartPrice]) => {
            quantity = qty;
            price = cartPrice;
            $body.trigger('cart-quantity-update', [quantity, price]);
        });
    } else {
        $body.trigger('cart-quantity-update', [quantity, price]);
    }
}
