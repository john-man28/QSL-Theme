import PageManager from '../page-manager';
import { bind, debounce } from 'lodash';
import checkIsGiftCertValid from './common/gift-certificate-validator';
import { createTranslationDictionary } from './common/utils/translations-utils';
import utils from '@bigcommerce/stencil-utils';
import ShippingEstimator from './cart/shipping-estimator';
import { defaultModal, showAlertModal, ModalEvents } from './global/modal';
import CartItemDetails from './common/cart-item-details';
import swal from './global/sweet-alert';

// papathemes-kitchenary
const serial = funcs => funcs.reduce((promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));
export default class Cart extends PageManager {
    onReady() {
        // mooncat
        this.onCartUpdate = this.onCartUpdate.bind(this);

        this.$modal = null;
        this.$cartPageContent = $('[data-cart]');
        this.$cartContent = $('[data-cart-content]');
        this.$cartMessages = $('[data-cart-status]');
        this.$cartTotals = $('[data-cart-totals]');
        this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
        this.$overlay = $('[data-cart] .loadingOverlay')
            .hide(); // TODO: temporary until roper pulls in his cart components
        this.$activeCartItemId = null;
        this.$activeCartItemBtnAction = null;

        // mooncat
        this.template = {
            content: 'cart/content',
            totals: 'cart/totals',
            pageTitle: 'cart/page-title',
            statusMessages: 'cart/status-messages',
            additionalCheckoutButtons: 'cart/additional-checkout-buttons',
        };

        this.setApplePaySupport();
        this.bindEvents();
    }

    setApplePaySupport() {
        if (window.ApplePaySession) {
            this.$cartPageContent.addClass('apple-pay-supported');
        }
    }

    cartUpdate($target) {
        const itemId = $target.data('cartItemid');
        this.$activeCartItemId = itemId;
        this.$activeCartItemBtnAction = $target.data('action');

        const $el = this.$cartPageContent.find(`input[name="qty-${itemId}"]`); // mooncat edited
        const oldQty = parseInt($el.val(), 10);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
         // Start Ticket 1002
        let newQty_updated;
        let getPackValue = $target.parent('.form-increment').siblings('[data-pack-value]').val();
        if(getPackValue && getPackValue !== undefined){
            getPackValue = parseInt(getPackValue);
            newQty_updated = $target.data('action') === 'inc' ? oldQty + getPackValue : oldQty - getPackValue;
        }else{
            newQty_updated = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
        }
        const newQty = newQty_updated;
        //console.log('newQty '+newQty); 
        // End Ticket 1002

        // Does not quality for min/max quantity
        if (newQty < minQty) {
            return showAlertModal(minError);
        } else if (maxQty > 0 && newQty > maxQty) {
            return showAlertModal(maxError);
        }

        this.$overlay.show();

        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);

                this.refreshContent(remove);
            } else {
                $el.val(oldQty);
                showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartUpdateQtyTextChange($target, preVal = null) {
        const itemId = $target.data('cartItemid');
        const $el = this.$cartPageContent.find(`input[name="qty-${itemId}"]`); // mooncat edited
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const oldQty = preVal !== null ? preVal : minQty;
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = parseInt(Number($el.val()), 10);
        let invalidEntry;

        // Does not quality for min/max quantity
        if (!Number.isInteger(newQty)) {
            invalidEntry = $el.val();
            $el.val(oldQty);
            return showAlertModal(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
        } else if (newQty < minQty) {
            $el.val(oldQty);
            return showAlertModal(minError);
        } else if (maxQty > 0 && newQty > maxQty) {
            $el.val(oldQty);
            return showAlertModal(maxError);
        }

        this.$overlay.show();
        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);

                this.refreshContent(remove);
            } else {
                $el.val(oldQty);

                return showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartRemoveItem(itemId) {
        this.$overlay.show();
        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                this.refreshContent(true);
            } else {
                this.$overlay.hide();
                showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartEditOptions(itemId, productId) {
        const context = { productForChangeId: productId, ...this.context };
        const modal = defaultModal();

        if (!this.$modal) {
            this.$modal = $('#modal');
        }

        const options = {
            template: 'cart/modals/configure-product',
        };

        modal.open();
        this.$modal.find('.modal-content').addClass('hide-content');

        utils.api.productAttributes.configureInCart(itemId, options, (err, response) => {
            modal.updateContent(response.content);
            const optionChangeHandler = () => {
                const $productOptionsContainer = $('[data-product-attributes-wrapper]', this.$modal);
                const modalBodyReservedHeight = $productOptionsContainer.outerHeight();

                if ($productOptionsContainer.length && modalBodyReservedHeight) {
                    $productOptionsContainer.css('height', modalBodyReservedHeight);
                }
            };

            if (this.$modal.hasClass('open')) {
                optionChangeHandler();
            } else {
                this.$modal.one(ModalEvents.opened, optionChangeHandler);
            }

            this.productDetails = new CartItemDetails(this.$modal, context);

            this.bindGiftWrappingForm();
        });

        utils.hooks.on('product-option-change', (event, currentTarget) => {
            const $changedOption = $(currentTarget); // papathemes-supermarket fix Cornerstone bug
            const $form = $(currentTarget).find('form');
            const $submit = $('input.button', $form);
            const $messageBox = $('.alertMessageBox');

            // Supermarket: display selected swatch title
            if ($changedOption.data('productAttributeLabel')) {
                $changedOption
                    .closest('[data-product-attribute]')
                    .find('[data-option-value]')
                    .html($changedOption.data('productAttributeLabel'));
            }

            utils.api.productAttributes.optionChange(productId, $form.serialize(), (err, result) => {
                const data = result.data || {};

                if (err) {
                    showAlertModal(err);
                    return false;
                }

                if (data.purchasing_message) {
                    $('.alertBox-message', $messageBox).text(data.purchasing_message);
                    $submit.prop('disabled', true);
                    $messageBox.show();
                } else {
                    $submit.prop('disabled', false);
                    $messageBox.hide();
                }

                if (!data.purchasable || !data.instock) {
                    $submit.prop('disabled', true);
                } else {
                    $submit.prop('disabled', false);
                }
            });
        });
    }

    refreshContent(remove) {
        const $cartItemsRows = $('[data-item-row]', this.$cartContent);
        const $cartPageTitle = this.$cartPageContent.find('[data-cart-page-title]');
        // mooncat edited
        const options = {
            template: this.template,
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        utils.api.cart.getContent(options, (err, response) => {
            this.$cartContent.html(response.content);
            this.$cartTotals.html(response.totals);
            this.$cartMessages.html(response.statusMessages);
            this.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);

            $cartPageTitle.replaceWith(response.pageTitle);

            const quantity = $('[data-cart-quantity]', this.$cartContent).data('cartQuantity') || 0;

            if (!quantity) {
                return window.location.reload();
            }

            this.bindEvents();
            this.$overlay.hide();

            const price = $('[data-cart-price]', this.$cartContent).data('cart-price') || 0;
            const priceFormatted = $('[data-cart-formatted]', this.$cartContent).data('cart-formatted') || '';
            if (price === 0) {
                $('body').trigger('cart-quantity-update', quantity);
            } else {
                $('body').trigger('cart-quantity-update', [quantity, priceFormatted]);
            }
        });
    }

    bindCartEvents() {
        const debounceTimeout = 400;
        const cartUpdate = bind(debounce(this.cartUpdate, debounceTimeout), this);
        const cartUpdateQtyTextChange = bind(debounce(this.cartUpdateQtyTextChange, debounceTimeout), this);
        const cartRemoveItem = bind(debounce(this.cartRemoveItem, debounceTimeout), this);
        let preVal;

        // cart update
        $('[data-cart-update]', this.$cartContent).on('click', event => {
            const $target = $(event.currentTarget);

            event.preventDefault();

            // update cart quantity
            cartUpdate($target);
        });

        // cart qty manually updates
        $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
            preVal = this.value;
        }).change(event => {
            const $target = $(event.currentTarget);
            event.preventDefault();

            // update cart quantity
            cartUpdateQtyTextChange($target, preVal);
        });

        $('.cart-remove', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('cartItemid');
            const string = $(event.currentTarget).data('confirmDelete');
            swal.fire({
                text: string,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: this.context.cancelButtonText,
            }).then((result) => {
                if (result.value) {
                    // remove item from cart
                    cartRemoveItem(itemId);
                }
            });
            event.preventDefault();
        });

        $('[data-item-edit]', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('itemEdit');
            const productId = $(event.currentTarget).data('productId');
            event.preventDefault();
            // edit item in cart
            this.cartEditOptions(itemId, productId);
        });
        // }}}

        // papathemes-kitchenary {{{
        // Select and remove item cart checked
        const $delete = this.$cartContent.find('[data-cart-delete]').on('click', event => {
            event.preventDefault();
            $delete.prop('disabled', true);
            this.$overlay.show();
            const itemIds = this.$cartContent.find('[data-cart-item-checkbox]').filter(':checked').get().map(el => $(el).val());
            const funcs = itemIds.map(itemId => () => new Promise((resolve) => {
                utils.api.cart.itemRemove(itemId, () => {
                    resolve();
                });
            }));
            serial(funcs).then(() => {
                this.refreshContent(true);
            });
        });

        const $select = this.$cartContent.find('[data-cart-select]').on('change', () => {
            if ($select.is(':checked')) {
                $('[data-cart-item-checkbox]', this.$cartContent).prop('checked', true).trigger('change');
            } else {
                $('[data-cart-item-checkbox]', this.$cartContent).prop('checked', false).trigger('change');
            }
        });

        $('[data-cart-item-checkbox]', this.$cartContent).on('change', () => {
            if (this.$cartContent.find('[data-cart-item-checkbox]').filter(':checked').length > 0) {
                $delete.prop('disabled', false);
            } else {
                $delete.prop('disabled', true);
            }
            if ($('[data-cart-item-checkbox]:checked', this.$cartContent).length === $('[data-cart-item-checkbox]', this.$cartContent).length) {
                $select.prop('checked', true);
            } else {
                $select.prop('checked', false);
            }
        });
        // }}}

        // mooncat: attach 'cart-update' event to refresh the cart
        utils.hooks.on('cart-update', this.onCartUpdate);
    }

    // mooncat
    onCartUpdate() {
        this.refreshContent();
    }

    bindPromoCodeEvents() {
        // mooncat edited
        const $couponForm = this.$cartPageContent.find('.coupon-form');
        const $codeInput = $('[name="couponcode"]', $couponForm);
        const $couponContainer = this.$cartPageContent.find('.coupon-code');

        this.$cartPageContent.find('.coupon-code-add').on('click', event => {
            event.preventDefault();

            $(event.currentTarget).hide();
            $couponContainer.show();
            this.$cartPageContent.find('.coupon-code-cancel').show().focus(); // papathemes-beautify mod
            $codeInput.trigger('focus');
        });

        this.$cartPageContent.find('.coupon-code-cancel').on('click', event => {
            event.preventDefault();

            $couponContainer.hide();
            this.$cartPageContent.find('.coupon-code-cancel').hide();
            this.$cartPageContent.find('.coupon-code-add').show().focus(); // papathemes-beautify mod
        });

        $couponForm.on('submit', event => {
            const code = $codeInput.val();

            event.preventDefault();

            // Empty code
            if (!code) {
                return showAlertModal($codeInput.data('error'));
            }

            utils.api.cart.applyCode(code, (err, response) => {
                if (response.data.status === 'success') {
                    this.refreshContent();
                } else {
                    showAlertModal(response.data.errors.join('\n'));
                }
            });
        });
    }

    bindGiftCertificateEvents() {
        // mooncat edited
        const $certContainer = this.$cartPageContent.find('.gift-certificate-code');
        const $certForm = this.$cartPageContent.find('.cart-gift-certificate-form');
        const $certInput = $('[name="certcode"]', $certForm);

        this.$cartPageContent.find('.gift-certificate-add').on('click', event => {
            event.preventDefault();
            $(event.currentTarget).toggle();
            $certContainer.toggle();
            this.$cartPageContent.find('.gift-certificate-cancel').toggle();
            this.$cartPageContent.find('.gift-certificate-cancel:visible').focus(); // papathemes-beautify
        });

        $('.gift-certificate-cancel').on('click', event => {
            event.preventDefault();
            $certContainer.toggle();
            this.$cartPageContent.find('.gift-certificate-add').toggle();
            this.$cartPageContent.find('.gift-certificate-cancel').toggle();
            this.$cartPageContent.find('.gift-certificate-add:visible').focus(); // papathemes-beautify
        });

        $certForm.on('submit', event => {
            const code = $certInput.val();

            event.preventDefault();

            if (!checkIsGiftCertValid(code)) {
                const validationDictionary = createTranslationDictionary(this.context);
                return showAlertModal(validationDictionary.invalid_gift_certificate);
            }

            utils.api.cart.applyGiftCertificate(code, (err, resp) => {
                if (resp.data.status === 'success') {
                    this.refreshContent();
                } else {
                    showAlertModal(resp.data.errors.join('\n'));
                }
            });
        });
    }

    bindGiftWrappingEvents() {
        const modal = defaultModal();

        this.$cartContent.find('[data-item-giftwrap]').on('click', event => { // mooncat edited
            const itemId = $(event.currentTarget).data('itemGiftwrap');
            const options = {
                template: 'cart/modals/gift-wrapping-form',
            };

            event.preventDefault();

            modal.open();

            utils.api.cart.getItemGiftWrappingOptions(itemId, options, (err, response) => {
                modal.updateContent(response.content);

                this.bindGiftWrappingForm();
            });
        });
    }

    bindGiftWrappingForm() {
        $('.giftWrapping-select').on('change', event => {
            const $select = $(event.currentTarget);
            const id = $select.val();
            const index = $select.data('index');

            if (!id) {
                return;
            }

            const allowMessage = $select.find(`option[value=${id}]`).data('allowMessage');

            $(`.giftWrapping-image-${index}`).hide();
            $(`#giftWrapping-image-${index}-${id}`).show();

            if (allowMessage) {
                $(`#giftWrapping-message-${index}`).show();
            } else {
                $(`#giftWrapping-message-${index}`).hide();
            }
        });

        $('.giftWrapping-select').trigger('change');

        function toggleViews() {
            const value = $('input:radio[name ="giftwraptype"]:checked').val();
            const $singleForm = $('.giftWrapping-single');
            const $multiForm = $('.giftWrapping-multiple');

            if (value === 'same') {
                $singleForm.show();
                $multiForm.hide();
            } else {
                $singleForm.hide();
                $multiForm.show();
            }
        }

        $('[name="giftwraptype"]').on('click', toggleViews);

        toggleViews();
    }

    bindEvents() {
        this.bindCartEvents();
        this.bindPromoCodeEvents();
        this.bindGiftWrappingEvents();
        this.bindGiftCertificateEvents();

        // initiate shipping estimator module
        const shippingErrorMessages = {
            country: this.context.shippingCountryErrorMessage,
            province: this.context.shippingProvinceErrorMessage,
        };
        this.shippingEstimator = new ShippingEstimator(this.$cartPageContent.find('[data-shipping-estimator]'), shippingErrorMessages); // mooncat edited
    }
}
