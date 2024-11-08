import lazySwal from './sweet-alert-lazy';
import utils from '@bigcommerce/stencil-utils';

let currencySelectorCalled = false;

export default function (cartId) {
    if (!cartId) return;

    if (!currencySelectorCalled) {
        currencySelectorCalled = true;
    } else {
        return;
    }

    function changeCurrency(url, currencyCode) {
        $.ajax({
            url,
            contentType: 'application/json',
            method: 'POST',
            data: JSON.stringify({ currencyCode }),
        }).done(() => {
            window.location.reload();
        }).fail((e) => {
            lazySwal().then(swal => swal.fire({
                text: JSON.parse(e.responseText).error,
                icon: 'warning',
                showCancelButton: true,
            }));
        });
    }

    $(document.body).on('click', '.currencySelector', () => {
        $('.currency-selection-list').toggleClass('active');
    });

    $(document.body).on('click', '[data-cart-currency-switch-url]', event => {
        const currencySessionSwitcher = event.target.href;
        event.preventDefault();
        utils.api.cart.getCart({ cartId }, (err, response) => {
            if (err || response === undefined) {
                window.location.href = currencySessionSwitcher;
                return;
            }

            const showWarning = response.discounts.some(discount => discount.discountedAmount > 0) ||
                response.coupons.length > 0 ||
                response.lineItems.giftCertificates.length > 0;

            if (showWarning) {
                lazySwal().then(swal =>
                    swal.fire({
                        text: $(event.target).data('warning'),
                        icon: 'warning',
                        showCancelButton: true,
                    }).then(result => {
                        if (result === true || result.value && result.value === true) { // papathemes-supermarket edited
                            changeCurrency($(event.target).data('cart-currency-switch-url'), $(event.target).data('currency-code'));
                        }
                    }));
            } else {
                changeCurrency($(event.target).data('cart-currency-switch-url'), $(event.target).data('currency-code'));
            }
        });
    });
}
