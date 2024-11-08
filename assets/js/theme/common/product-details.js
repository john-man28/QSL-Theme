import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import foundation from '../global/foundation'; // Supermarket
import 'slick-carousel';
import ImageGallery from '../product/image-gallery';
import modalFactory, { defaultModal, ModalEvents, showAlertModal } from '../global/modal';
import { isEmpty, isPlainObject } from 'lodash';
import Wishlist from '../wishlist';
import bannerUtils from './utils/banner-utils';
import currencySelector from '../global/currency-selector';
import AlsoBought from '../../papathemes/also-bought'; // Papathemes - AlsoBought
import AlsoBoughtGame from '../../papathemes/also-bought-game'; // Papathemes - AlsoBought - Theme Game
import mediaQueryListFactory from '../common/media-query-list'; // papathemes-beautify
import { scrollTop } from '../../papathemes/theme-utils'; // papathemes-beautify
import { openCartPreview } from '../../papathemes/utils'; // papathemes-inhealth
import compareProducts from '../../papathemes/compare-products';
import countries from './countries';
import MicroModal from 'micromodal';

const smallMediaQueryList = mediaQueryListFactory('small'); // papathemes-kitchenary
const mediumMediaQueryList = mediaQueryListFactory('medium'); // papathemes-beautify

// Supermarket - OBPS Mod
/* eslint-disable */
function shake($el, settings) {
    if (typeof settings === 'undefined') {
        settings = {};
    }

    if (typeof settings.interval === 'undefined') {
        settings.interval = 100;
    }

    if (typeof settings.distance === 'undefined') {
        settings.distance = 10;
    }

    if (typeof settings.times === 'undefined') {
        settings.times = 4;
    }

    if (typeof settings.complete === 'undefined') {
        settings.complete = function () { };
    }

    $el.css('position', 'relative');

    for (let iter = 0; iter < (settings.times + 1); iter++) {
        $el.animate({ left: ((iter % 2 === 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
    }

    $el.animate({ left: 0 }, settings.interval, settings.complete);
}
/* eslint-enable */

// Supermarket: Fix Price not update when a product option is checked
function supermarketSerialize($form) {
    const assoc = $form.serializeArray().reduce((_assoc, { name, value }) => {
        // eslint-disable-next-line no-param-reassign
        _assoc[name] = value;
        return _assoc;
    }, {});
    return $.param(assoc);
}

export default class ProductDetails {
    constructor($scopeArg, context, productAttributesData = {}) { // Papathemes Also Bought MOD
        // Papathemes Also Bought MOD {{{
        const $scope = context.enableAlsoBought ? $scopeArg.find('[data-also-bought-parent-scope]') : $scopeArg;
        this.$productViewScope = $scopeArg;
        // }}}

        this.$overlay = $('[data-cart-item-add] .loadingOverlay');
        this.$scope = $scope;
        this.context = context;

        // papathemes: need for bulk-order layout
        this.$card = context.$card;
        this.$cardBulkOrderOptions = context.$cardBulkOrderOptions;
        this.closeQuickView = context.closeQuickView;

        this.imageGallery = new ImageGallery($('[data-image-gallery]', this.$scope));
        this.imageGallery.init();
        this.listenQuantityChange();
        this.initRadioAttributes();
        foundation($(document)); // Supermarket
        this.initCustomTabs(); // Papathemes - Supermarket
        this.initTabsADA(); // Papathemes - Kitchenary

        Wishlist.load(this.context);
        this.getTabRequests();

        MicroModal.init({
            disableScroll: true,
            openTrigger: 'data-micromodal-trigger',
            closeTrigger: 'data-micromodal-close',
        });

        if (context.enableAlsoBought) {
            try {
                const { alsoBoughtOptions } = window.supermarketThemeExtraConfig || {};
                if (context.variant === 'game') {
                    this.alsoBought = new AlsoBoughtGame(this, alsoBoughtOptions);
                } else {
                    this.alsoBought = new AlsoBought(this, alsoBoughtOptions);
                }
            } catch (err) {
                console.error(err);
            }
        }

        const $form = $('form[data-cart-item-add]', $scope);
        const $productOptionsElement = $('[data-product-option-change]', $form);
        const hasOptions = ($productOptionsElement.html() || '').trim().length;
        const hasDefaultOptions = $productOptionsElement.find('[data-default]').length;

        if ($form[0].checkValidity()) {
            this.updateProductDetailsData();
        } else {
            this.toggleWalletButtonsVisibility(false);
        }

        // papathemes-chiara edited for also-bought
        this.price = null;
        /** @type {string} */
        this.productId = $('input[name="product_id"]', this.$scope).val();
        this.$form = $form;

        // Papathemes - Supermarket: Fix click reviews link open tab
        $('a[href*="#tab-reviews"]', $scope).on('click', (event) => {
            const $target = $(event.currentTarget);
            if (!$target.is('.tab-title') && !$target.is('[data-tab-mobile]')) {
                const $tab = $(`.tab-title[href="#tab-reviews-${this.productId}"]:visible, [data-tab-mobile][href="#tab-reviews-${this.productId}"]:visible`, $scope).first();
                if (!$tab.is('.is-open, .is-active')) {
                    $tab.trigger('click');
                }
                $tab.get(0).scrollIntoView({ behavior: 'smooth' });
            }
        });

        // mooncat: display brand image
        this.$scope.find('[data-brand-image]').each((i, img) => {
            const $img = $(img);
            const src = $img.data('brandImage');
            const size = $img.data('sizes');
            const size2x = size.split('x').map(n => Number(n) * 2).join('x');
            $img.attr('srcset', `${src.replace('/original/', `/${size}/`)} 1x, ${src.replace('/original/', `/${size2x}/`)} 2x`);
        });

        $productOptionsElement.on('change', event => {
            this.productOptionsChanged(event);
            this.setProductVariant();
        });

        // kitchenary: allow unchecking radio options of rectangle and swatch attributes {{{
        this.previousRadioValues = $productOptionsElement
            .find('[data-product-attribute="set-rectangle"], [data-product-attribute="set-radio"], [data-product-attribute="swatch"]')
            .find('input[type="radio"]:checked').get().reduce((acc, el) => ({ [el.name]: el.value, ...acc }), {});

        $productOptionsElement.on('click', '[data-product-attribute="set-rectangle"] input[type="radio"], [data-product-attribute="set-radio"] input[type="radio"], [data-product-attribute="swatch"] input[type="radio"]', event => {
            const $el = $(event.currentTarget);
            const { name, value } = $el[0];
            if (this.previousRadioValues[name] === value) {
                $el.prop('checked', false).trigger('change');
                this.previousRadioValues[name] = null;
            } else {
                this.previousRadioValues[name] = value;
            }
        });
        // }}}

        $form.on('submit', event => {
            this.addProductToCart(event, $form[0]);
        });

        // papathemes: need for bulk-order layout
        $form.find('#form-action-addToCartLater').on('click', (event) => {
            event.preventDefault();
            this.addProductToCartLater(event, $form[0]);
        });

        $('#form-action-buyNow', $scope).on('click', () => {
            $form.find('input[name=action]').val('buy');
        });

        // Update product attributes. Also update the initial view in case items are oos
        // or have default variant properties that change the view
        if ((isEmpty(productAttributesData) || hasDefaultOptions) && hasOptions) {
            const $productId = $('[name="product_id"]', $form).val();

            utils.api.productAttributes.optionChange($productId, supermarketSerialize($form), 'products/bulk-discount-rates', (err, response) => {
                const attributesData = response.data || {};
                const attributesContent = response.content || {};
                this.updateProductAttributes(attributesData);
                if (hasDefaultOptions || context.forceUpdateView) { // papathemes: bulk-order layout edited
                    this.updateView(attributesData, attributesContent);
                } else {
                    this.updateDefaultAttributesForOOS(attributesData);
                }
            });
        } else {
            this.updateProductAttributes(productAttributesData);
            bannerUtils.dispatchProductBannerEvent(productAttributesData);
        }

        $productOptionsElement.show();

        this.previewModal = modalFactory('#previewModal')[0];

        // Supermarket
        if (this.previewModal) {
            this.previewModal.$modal.addClass('preview-modal').addClass(`preview-modal--${context.add_to_cart_popup}`);
            if (context.add_to_cart_popup === 'mini') {
                // unbind open/close event of the original modal
                this.previewModal.$modal.off(ModalEvents.open, this.previewModal.onModalOpen);
                this.previewModal.$modal.off(ModalEvents.close, this.previewModal.onModalClose);

                // bind open/class event for mini preview modal
                this.previewModal.onModalOpen = this.onMiniPreviewModalOpen.bind(this.previewModal);
                this.previewModal.onModalClose = this.onMiniPreviewModalClose.bind(this.previewModal);
                this.previewModal.$modal.on(ModalEvents.open, this.previewModal.onModalOpen);
                this.previewModal.$modal.on(ModalEvents.close, this.previewModal.onModalClose);
            }
        }

        // papathemes-beautify
        // this.initTabScrollToViewport();
        this.initGoToTab();
        this.initCountdown();
        // Need for papathemes-mqpo + alsobought v2 compliance
        this.$scope.data('productDetailsInstance', this);
        utils.hooks.emit('product-productdetails-init', this);

        // Chiara: dropdown color swatches
        if (this.context.swatch_option_display_type === 'dropdown' || this.context.swatch_option_display_type === 'both') {
            import('../../papathemes/dropdown-swatches')
                .then(module => module.default(this, {
                    hideOriginalSwatches: this.context.swatch_option_display_type === 'dropdown',
                }));
        }
        $(document).on('click', (event) => {
            if ($(event.target).closest('.form-share').length === 0) {
                $('.form-share').children().removeClass('is-open');
            }
        });
        const inputShareLink = this.$scope.find('.form-share .form-input');
        inputShareLink.on('click', (_event) => {
            inputShareLink.select();
        });

        compareProducts(context);
        this.getFlagLanguage();
        this.handleRegionCountry();
        this.searchRegionInModal();
        this.loadMoreRegion();
    }

    // Time countdown
    initCountdown() {
        const initTimeCountdown = (daysText, hoursText, minutesText, secondsText, endTime, blockTime, labelTitle, blockDays, blockHours, blockMinutes, blockTimer) => {
            blockTimer.removeClass('is-srOnly');
            const calculateTimeDate = (startTime, dateSetTime) => {
                let total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
                if (total > 0) {
                    const days = Math.floor(total / 86400);
                    total %= 86400;
                    daysText.text(`${days < 10 ? `0${ days}` : days}`);
                    if (days === 0) {
                        blockDays.addClass('is-srOnly');
                        daysText.addClass('is-srOnly');
                    }
                    const hours = Math.floor(total / 3600);
                    total %= 3600;
                    hoursText.text(`0${hours}`.slice(-2));
                    if (days === 0 && hours === 0) {
                        blockHours.addClass('is-srOnly');
                        hoursText.addClass('is-srOnly');
                    }
                    const minutes = Math.floor(total / 60);
                    total %= 60;
                    minutesText.text(`0${minutes}`.slice(-2));
                    if (days === 0 && hours === 0 && minutes === 0) {
                        blockMinutes.addClass('is-srOnly');
                        minutesText.addClass('is-srOnly');
                    }
                    const seconds = total;
                    secondsText.text(`0${seconds}`.slice(-2));
                    labelTitle.removeClass('is-srOnly');
                    blockTime.removeClass('hide');
                } else {
                    blockTime.addClass('hide');
                    // eslint-disable-next-line no-use-before-define
                    clearInterval(timeRun);
                }
            };
            const calculateTime = (startTime, dateSetTime) => {
                let total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
                if (total > 0) {
                    const days = Math.floor(total / 86400);
                    total %= 86400;
                    daysText.text(`${days < 10 ? `0${ days}` : days}`);
                    if (days === 0) {
                        blockDays.addClass('is-srOnly');
                        daysText.addClass('is-srOnly');
                    }
                    const hours = Math.floor(total / 3600);
                    total %= 3600;
                    hoursText.text(`0${hours}`.slice(-2));
                    if (days === 0 && hours === 0) {
                        blockHours.addClass('is-srOnly');
                        hoursText.addClass('is-srOnly');
                    }
                    const minutes = Math.floor(total / 60);
                    total %= 60;
                    minutesText.text(`0${minutes}`.slice(-2));
                    if (days === 0 && hours === 0 && minutes === 0) {
                        blockMinutes.addClass('is-srOnly');
                        minutesText.addClass('is-srOnly');
                    }
                    const seconds = total;
                    secondsText.text(`0${seconds}`.slice(-2));
                    labelTitle.removeClass('is-srOnly');
                    blockTime.removeClass('hide');
                } else if (total === 0) {
                    blockTime.addClass('hide');
                    // eslint-disable-next-line no-use-before-define
                    clearInterval(timeRun);
                } else if (total < 0) {
                    dateSetTime.setDate(dateSetTime.getDate() + 1);
                    total = Math.floor((dateSetTime.getTime() - startTime.getTime()) / 1000);
                    const days = Math.floor(total / 86400);
                    total %= 86400;
                    daysText.text(`${days < 10 ? `0${ days}` : days}`);
                    if (days === 0) {
                        blockDays.addClass('is-srOnly');
                        daysText.addClass('is-srOnly');
                    }
                    const hours = Math.floor(total / 3600);
                    total %= 3600;
                    hoursText.text(`0${hours}`.slice(-2));
                    if (days === 0 && hours === 0) {
                        blockHours.addClass('is-srOnly');
                        hoursText.addClass('is-srOnly');
                    }
                    const minutes = Math.floor(total / 60);
                    total %= 60;
                    minutesText.text(`0${minutes}`.slice(-2));
                    if (days === 0 && hours === 0 && minutes === 0) {
                        blockMinutes.addClass('is-srOnly');
                        minutesText.addClass('is-srOnly');
                    }
                    const seconds = total;
                    secondsText.text(`0${seconds}`.slice(-2));
                    labelTitle.removeClass('is-srOnly');
                    blockTime.removeClass('hide');
                }
            };
            if (!endTime) {
                // eslint-disable-next-line no-use-before-define
                clearInterval(timeRun);
            } else {
                const regexTime = /(00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])\b/;
                const regexTimezone = /[+-][0-9]{1,2}\b$/;
                const regexDate = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])\b/;
                const resultTimezone = endTime.match(regexTimezone);
                const resultTime = endTime.match(regexTime);
                const resultDate = endTime.match(regexDate);
                const hours = resultTime[1];
                const minutes = resultTime[2];
                const seconds = resultTime[3];
                if (resultDate && !resultTimezone) {
                    const dateSetTime = new Date(endTime);
                    const startTime = new Date();
                    calculateTimeDate(startTime, dateSetTime);
                } else if (!resultDate && resultTimezone) {
                    const timeZone = resultTimezone[0].replace(/[\+']+/g, '');
                    const dateSetTimeZone = new Date();
                    const tzDifference = timeZone * 60 + dateSetTimeZone.getTimezoneOffset();
                    const offsetTime = new Date(dateSetTimeZone.getTime() + tzDifference * 60 * 1000);
                    const dateSetTimeEnd = new Date();
                    dateSetTimeEnd.setHours(hours);
                    dateSetTimeEnd.setMinutes(minutes);
                    dateSetTimeEnd.setSeconds(seconds);
                    calculateTime(offsetTime, dateSetTimeEnd);
                } else if (resultDate && resultTimezone) {
                    const timeZone = resultTimezone[0].replace(/[\+']+/g, '');
                    const dateSetTimeZone = new Date();
                    const tzDifference = timeZone * 60 + dateSetTimeZone.getTimezoneOffset();
                    const offsetTime = new Date(dateSetTimeZone.getTime() + tzDifference * 60 * 1000);
                    const dateSetTime = `${resultDate[0]} ${resultTime[0]}`;
                    const dateSetTimeEnd = new Date(dateSetTime);
                    calculateTimeDate(offsetTime, dateSetTimeEnd);
                } else {
                    const startTime = new Date();
                    const dateSetTime = new Date();
                    dateSetTime.setHours(hours);
                    dateSetTime.setMinutes(minutes);
                    dateSetTime.setSeconds(seconds);
                    calculateTime(startTime, dateSetTime);
                }
            }
        };
        const $scope = this.$scope.find('.productView-saleCount');
        const daysText = $scope.find('._days');
        const hoursText = $scope.find('._hours');
        const minutesText = $scope.find('._minutes');
        const secondsText = $scope.find('._seconds');
        const endTime = $scope.data('countdown');
        const labelTitle = $scope.find('._labelTime__title');
        const blockTimer = $scope.find('._showTimer');
        const blockDays = $scope.find('._blockDays');
        const blockHours = $scope.find('._blockHours');
        const blockMinutes = $scope.find('._blockMinutes');
        const timeRun = setInterval(() => {
            initTimeCountdown(daysText, hoursText, minutesText, secondsText, endTime, $scope, labelTitle, blockDays, blockHours, blockMinutes, blockTimer);
        }, 1000);
    }


    // papathemes-beautify
    initTabScrollToViewport() {
        const $body = $('body');
        const $quickView = this.$scope.closest('.quickView').first();
        $quickView.css('position', 'relative');

        let resumeStickyHeader;

        const scrollToView = el => {
            const $target = $($(el).attr('href'), this.$scope).first();
            if ($quickView.length > 0) {
                let h = $quickView.scrollTop();
                let $el = $target;
                let i = 0;
                while (!$el.is('.quickView') && $el.length > 0 && i++ < 20) {
                    h += $el.position().top;
                    $el = $el.offsetParent();
                }

                $quickView.animate({
                    scrollTop: h - 50,
                }, 300);
            } else {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 50,
                }, {
                    duration: 300,
                    // skip sticky header while scrolling to the tab content
                    start: () => {
                        clearTimeout(resumeStickyHeader);
                        $body.addClass('_skipCheckScrollUpStickyHeader');
                    },
                    complete: () => $('html, body').clearQueue(),
                    always: () => {
                        clearTimeout(resumeStickyHeader);
                        resumeStickyHeader = setTimeout(() => $body.removeClass('_skipCheckScrollUpStickyHeader'), 200);
                    },
                });
            }
        };

        $('.productView-description .tab', this.$scope)
            .on('opened', event => {
                if (mediumMediaQueryList.matches) {
                    scrollToView($(event.target).find('a').get(0));
                }
            });
    }

    // papathemes-beautify
    initGoToTab() {
        $('[data-gototab]', this.$scope).on('click', (event) => {
            event.preventDefault();
            const $el = $(event.currentTarget);
            const href = $el.attr('href');

            if (mediumMediaQueryList.matches) {
                const $target = this.$scope.find('[data-product-tab]').find(`a[href="${href}"`).first();
                $target.trigger('click');
            } else {
                const $target = this.$scope.find(href).first();
                scrollTop($target.offset().top - 100);
            }
        });
    }


    getFlagLanguage() {
        const $summaryLang = $('[data-summary-language]', this.$scope);

        if (!$summaryLang.length) {
            return;
        }

        const $flagList = $('[data-summary-language]', this.$scope).siblings('.flag-group').find('.flag-list');
        const $flagMore = $('[data-summary-language]', this.$scope).siblings('.flag-group').find('#flag-more');
        const showMoreTxt = $flagMore.data('showMore');
        const showLessTxt = $flagMore.data('showLess');
        const langTxt = $summaryLang.text();
        const flagArr = [];
        langTxt.split('|').forEach((element) => {
            if (element.length === 2) {
                flagArr.push(element.toLowerCase());
            } else {
                for (let i = 0; i < element.length - 1; i += 2) {
                    const txt = element.slice(i, i + 2);
                    flagArr.push(txt.toLowerCase());
                }
            }
        });

        const path = $flagList.data('src');

        // add flag
        $flagList.not('._added').addClass('_added').each(() => {
            for (let i = 0; i < flagArr.length; i++) {
                const flag = `<img class="flag-item" src="${path}${flagArr[i]}.png" alt="${flagArr[i]}" title="${flagArr[i]}">`;
                $flagMore.before(flag);
            }
        });

        // Load more flag left
        const more = `+ ${flagArr.length - 2} ${showMoreTxt}`;
        if (flagArr.length > 2) {
            $flagMore.show();
            $flagMore.text(more);
        }

        // Load more - less
        $flagMore.on('click', (e) => {
            const $btn = $(e.currentTarget);
            if (!$btn.data('flagCollapse')) {
                $flagList.addClass('is-open');
                $btn.text(`- ${showLessTxt}`);
                $btn.data('flagCollapse', true);
            } else {
                $flagList.removeClass('is-open');
                $btn.text(more);
                $btn.data('flagCollapse', false);
            }
        });
    }

    handleRegionCountry() {
        const $customfiledRegion = $('._special-info-region', this.$scope).find('[data-customfield-region]');
        const $currentRegion = $('._special-info-region', this.$scope).find('[data-current-region]');
        const regionCannotActiveTxt = $customfiledRegion.data('cannotActive');
        const regionTxt = $customfiledRegion.data('customfieldRegion');

        if (!$customfiledRegion.length || !regionTxt) {
            return;
        }

        const currentCountryCode = this.context.country_code;
        const currentCountryName = countries.find(country => country.countryCode === currentCountryCode).countryName;

        // Change productView-info
        const listCustomfieldRegion = [];
        $currentRegion.text(`${currentCountryName }.`);

        if (regionTxt.toLowerCase() === 'all') {
            listCustomfieldRegion.push(regionTxt.toLowerCase());
        } else {
            // Format list region customfield
            regionTxt.split('|').forEach((element) => {
                if (element.length === 2) {
                    listCustomfieldRegion.push(element);
                } else {
                    for (let i = 0; i < element.length - 1; i += 2) {
                        const txt = element.slice(i, i + 2);
                        listCustomfieldRegion.push(txt);
                    }
                }
            });
            listCustomfieldRegion.sort();
            $customfiledRegion.attr('data-customfield-region', listCustomfieldRegion.join('|'));

            if ($.inArray(currentCountryCode, listCustomfieldRegion) === -1) {
                $customfiledRegion.text(regionCannotActiveTxt);
            }
        }

        $('body').not('._added-region').addClass('_added-region').each(() => {
            let lastClicked = null;
            $('body').on('click', '[data-micromodal-trigger="regionRetrictionModal"]', (event) => {
                event.preventDefault();
                const $currentButton = $(event.currentTarget);
                if ($currentButton.is(lastClicked)) {
                    return;
                }

                const $listRegion = $currentButton.parents('._special-info-region').find('.productView-info-value');
                const arrRegion = $listRegion.attr('data-customfield-region').split('|');

                const $modal = $('#regionRetrictionModal');
                const $modalHeader = $modal.find('.modal__header');
                const $regionTitle = $modal.find('[data-region-title]');
                const $regionName = $modal.find('[data-region-name]');
                const $regionList = $modal.find('.region-list');
                const $labelCountry = $modal.find('.region-info-country .region-info-value');
                const $restricted = $modal.find('.region-info-restricted');
                const $restrictedList = $restricted.find('.region-info-restrictedList');
                const globalTxt = $restrictedList.data('regionGlobal');
                const $restrictedMore = $restricted.find('#restricted-more');
                const restrictedCannotActive = $regionTitle.data('regionCannotActivated');
                const showMoreTxt = $restrictedMore.data('showMore');

                $labelCountry.text(currentCountryName);
                $regionName.text(currentCountryName);
                // Region customfield == 'All'
                if (arrRegion[0].toLowerCase() === 'all') {
                    $restrictedList.find('span').remove();
                    $restrictedList.prepend(`<span>${globalTxt}</span>`);
                    $regionList.html('');
                    $restrictedMore.hide();
                    $.each(countries, (index, country) => {
                        const listItem = $('<li>').text(country.countryName);
                        $regionList.append(listItem);
                    });
                } else {
                    const specialCountryArr = [];
                    $restrictedList.find('span').remove();
                    $regionList.html('');

                    for (let i = 0; i < countries.length; i++) {
                        const countryCode = arrRegion[i];

                        const countryObject = countries.find(country => country.countryCode === countryCode);

                        if (countryObject) {
                            specialCountryArr.push({
                                countryCode: countryObject.countryCode,
                                countryName: countryObject.countryName,
                            });

                            // add country in search box
                            const li = `<li>${countryObject.countryName}</li>`;
                            $regionList.append(li);

                            // add country in search restrictedList
                            const span = `<span>${countryObject.countryName}</span>`;
                            $restrictedMore.before(span);
                        }
                    }

                    // not includes current country
                    if ($.inArray(currentCountryCode, arrRegion) === -1) {
                        $modalHeader.addClass('_not-activated');
                        $regionTitle.text(restrictedCannotActive);
                    }

                    // Handle loadmore in popup
                    const more = `+ ${arrRegion.length - 2} ${showMoreTxt}`;
                    // Show 2 flag
                    if (arrRegion.length > 2) {
                        $restrictedMore.show();
                        $restrictedMore.text(more);
                    }
                }

                lastClicked = $currentButton;
            });
        });
    }

    loadMoreRegion() {
        const $modal = $('#regionRetrictionModal');
        const $restricted = $modal.find('.region-info-restricted');
        const $restrictedList = $restricted.find('.region-info-restrictedList');
        const $restrictedMore = $restricted.find('#restricted-more');
        const showMoreTxt = $restrictedMore.data('showMore');
        const showLessTxt = $restrictedMore.data('showLess');


        $restrictedList.not('._added').addClass('_added').each(() => {
            // Load more - less region in modal
            $restrictedMore.on('click', (e) => {
                const $btn = $(e.currentTarget);
                const countRegion = $btn.siblings('span').length;

                if (!$btn.data('restrictedCollapse')) {
                    $restrictedList.addClass('is-open');
                    $btn.text(`- ${showLessTxt}`);
                    $btn.data('restrictedCollapse', true);
                } else {
                    $restrictedList.removeClass('is-open');
                    $btn.text(`+ ${countRegion - 2} ${showMoreTxt}`);
                    $btn.data('restrictedCollapse', false);
                }
            });
        });
    }

    searchRegionInModal() {
        const $modal = $('#regionRetrictionModal');
        const $regionList = $modal.find('.region-list');
        const $input = $modal.find('#region-search');

        $input.on('input', () => {
            const filter = $input.val().toUpperCase();
            $regionList.find('li').each((index, element) => {
                const txtValue = $(element).text() || $(element).html();
                $(element).toggle(txtValue.toUpperCase().indexOf(filter) > -1);
            });
        });
    }

    /**
     * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
     * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
     * @param formData: FormData object
     * @returns FormData object
     */
    filterEmptyFilesFromForm(formData) {
        try {
            for (const [key, val] of formData) {
                if (val instanceof File && !val.name && !val.size) {
                    formData.delete(key);
                }
            }
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
        }
        return formData;
    }

    setProductVariant() {
        const unsatisfiedRequiredFields = [];
        const options = [];

        this.$scope.find('[data-product-attribute]').each((index, value) => { // papathemes: fix selector don't respect the scope
            const optionLabel = value.children[0].innerText;
            const optionTitle = optionLabel.split(':')[0].trim();
            const required = optionLabel.toLowerCase().includes('required');
            const type = value.getAttribute('data-product-attribute');

            if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
                unsatisfiedRequiredFields.push(value);
            }

            if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
                unsatisfiedRequiredFields.push(value);
            }

            if (type === 'date') {
                const isSatisfied = Array.from(value.querySelectorAll('select')).every((select) => select.selectedIndex !== 0);

                if (isSatisfied) {
                    const dateString = Array.from(value.querySelectorAll('select')).map((x) => x.value).join('-');
                    options.push(`${optionTitle}:${dateString}`);

                    return;
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }

            if (type === 'set-select') {
                const select = value.querySelector('select');
                const selectedIndex = select.selectedIndex;

                if (selectedIndex !== 0) {
                    options.push(`${optionTitle}:${select.options[selectedIndex].innerText}`);

                    return;
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
                const checked = value.querySelector('input:checked'); // papathemes-beautify edited
                if (checked) {
                    if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
                        const label = checked.labels ? checked.labels[0].innerText : $(`label[for=${checked.id}]`).first().text();
                        if (label) {
                            options.push(`${optionTitle}:${label}`);
                        }
                    }

                    if (type === 'swatch') {
                        const label = checked.labels ? checked.labels[0].children[0] : $(`label[for=${checked.id}]`).children().get(0);
                        if (label) {
                            options.push(`${optionTitle}:${label.title}`);
                        }
                    }

                    if (type === 'input-checkbox') {
                        options.push(`${optionTitle}:Yes`);
                    }

                    return;
                }

                if (type === 'input-checkbox') {
                    options.push(`${optionTitle}:No`);
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }
        });
        let productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
        const view = $('.productView');

        if (productVariant) {
            productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
            if (view.attr('data-event-type')) {
                view.attr('data-product-variant', productVariant);
            } else {
                const productName = view.find('.productView-title')[0].innerText;
                const card = $(`[data-name=${JSON.stringify(productName)}]`); // Fixed by PapaThemes
                card.attr('data-product-variant', productVariant);
            }
        }
    }

    // papathemes: need for bulk-order layout
    createSelectedOptionsHtml() {
        const $dl = $('<dl></dl>');

        this.$scope.find('[data-product-attribute]').each((index, el) => {
            const optionTitle = el.children[0]?.childNodes[0]?.nodeValue?.split(':')[0].trim();
            const type = el.getAttribute('data-product-attribute');

            if (type === 'date') {
                const isSatisfied = Array.from(el.querySelectorAll('select')).every((select) => select.selectedIndex !== 0);

                if (isSatisfied) {
                    const dateString = Array.from(el.querySelectorAll('select')).map((x) => x.value).join('-');
                    $('<dt></dt>').text(optionTitle).appendTo($dl);
                    $('<dd></dd>').text(dateString).appendTo($dl);
                }
            } else if (type === 'set-select') {
                const select = el.querySelector('select');
                const selectedIndex = select.selectedIndex;

                if (selectedIndex !== 0) {
                    $('<dt></dt>').text(optionTitle).appendTo($dl);
                    $('<dd></dd>').text(select.options[selectedIndex].textContent).appendTo($dl);
                }
            } else if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
                const checked = el.querySelector(':checked');
                if (checked) {
                    if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list' || type === 'input-checkbox') {
                        const label = checked.labels ? checked.labels[0].textContent : $(`label[for=${checked.id}]`).first().text();
                        $('<dt></dt>').text(optionTitle).appendTo($dl);
                        $('<dd></dd>').text(label).appendTo($dl);
                    }

                    if (type === 'swatch') {
                        let valueLabel;
                        if (checked.tagName === 'OPTION') {
                            valueLabel = checked.textContent;
                        } else {
                            const label = checked.labels ? checked.labels[0].children[0] : $(`label[for=${checked.id}]`).children().get(0);
                            valueLabel = label.title;
                        }
                        $('<dt></dt>').text(optionTitle).appendTo($dl);
                        $('<dd></dd>').text(valueLabel).appendTo($dl);
                    }
                }
            } else if (type === 'input-file') {
                const input = el.querySelector('input[type="file"]');
                if (input.files.length) {
                    $('<dt></dt>').text(optionTitle).appendTo($dl);
                    $('<dd></dd>').text(input.files[0].name).appendTo($dl);
                }
            } else if (type === 'textarea') {
                const textarea = el.querySelector('textarea');
                if (textarea.value) {
                    $('<dt></dt>').text(optionTitle).appendTo($dl);
                    $('<dd></dd>').text(textarea.value).appendTo($dl);
                }
            } else {
                const input = el.querySelector('input');
                if (input.value) {
                    $('<dt></dt>').text(optionTitle).appendTo($dl);
                    $('<dd></dd>').text(input.value).appendTo($dl);
                }
            }
        });

        return $dl.children().length > 0 ? $dl.prop('outerHTML') : '';
    }

    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
    getViewModel($scope) {
        return {
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            rrpWithTax: {
                $div: $('.rrp-price--withTax', $scope),
                $span: $('[data-product-rrp-with-tax]', $scope),
            },
            rrpWithoutTax: {
                $div: $('.rrp-price--withoutTax', $scope),
                $span: $('[data-product-rrp-price-without-tax]', $scope),
            },
            nonSaleWithTax: {
                $div: $('.non-sale-price--withTax', $scope),
                $span: $('[data-product-non-sale-price-with-tax]', $scope),
            },
            nonSaleWithoutTax: {
                $div: $('.non-sale-price--withoutTax', $scope),
                $span: $('[data-product-non-sale-price-without-tax]', $scope),
            },
            priceSaved: {
                $div: $('.price-section--saving', $scope),
                $span: $('[data-product-price-saved]', $scope),
            },
            priceNowLabel: {
                $span: $('.price-now-label', $scope),
            },
            priceLabel: {
                $span: $('.price-label', $scope),
            },
            $weight: $('.productView-info [data-product-weight]', $scope),
            $increments: $('.form-field--increments :input', $scope),
            $buyNow: $('#form-action-buyNow', $scope),
            $addToCart: $('#form-action-addToCart, #form-action-addToCartSticky', $scope),
            $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: $('.form-field--stock, .productView-info-name--stock, .productView-info-value--stock', $scope), // papathemes-beautify edited
                $input: $('[data-product-stock]', $scope),
                $badge: $('.productView-stockLabel', $scope), // papathemes-beautify
            },
            sku: {
                $label: $('dt.sku-label', $scope),
                $value: $('[data-product-sku]', $scope),
            },
            upc: {
                $label: $('dt.upc-label', $scope),
                $value: $('[data-product-upc]', $scope),
            },
            mpn: {
                $label: $('dt.mpn-label', $scope),
                $value: $('[data-product-mpn]', $scope),
            },
            quantity: {
                $text: $('.incrementTotal', $scope),
                $input: $('[name=qty\\[\\]]', $scope),
            },
            $bulkPricing: $('.productView-info-bulkPricing', $scope),
            $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope),
            saleCountdown: {
                $div: $('.productView-saleCount', $scope),
                $spanSale: $('._labelTime__title ._priceSale', $scope),
            },
            saleLabel: {
                $div: $('.productView-saleLabel', $scope),
                $span: $('.productView-saleLabel ._priceSale', $scope),
            },
        };
    }

    /**
     * Checks if the current window is being run inside an iframe
     * @returns {boolean}
     */
    isRunningInIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    /**
     *
     * Handle product options changes
     *
     */
    productOptionsChanged(event) {
        const $changedOption = $(event.target);
        const $form = $changedOption.parents('form');
        const productId = $('[name="product_id"]', $form).val();

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }

        // Supermarket: display selected swatch title
        if ($changedOption.data('productAttributeLabel')) {
            $changedOption
                .closest('[data-product-attribute]')
                .find('[data-option-value]')
                .html($changedOption.data('productAttributeLabel'));

            // kitchenary: clear swatch title when uncheck radio
            if ($changedOption.is('input[type="radio"]') && !$changedOption.prop('checked')) {
                $changedOption
                    .closest('[data-product-attribute]')
                    .find('[data-option-value]')
                    .html('');
            }
        }

        utils.api.productAttributes.optionChange(productId, supermarketSerialize($form), 'products/bulk-discount-rates', (err, response) => {
            const productAttributesData = response?.data || {};
            const productAttributesContent = response?.content || {};
            this.updateProductAttributes(productAttributesData);
            this.updateView(productAttributesData, productAttributesContent);
            this.updateProductDetailsData();
            bannerUtils.dispatchProductBannerEvent(productAttributesData);
        });
    }

    showProductImage(image) {
        if (isPlainObject(image)) {
            const zoomImageUrl = utils.tools.imageSrcset.getSrcset(
                image.data,
                { '1x': this.context.zoom_size },
                /*
                    Should match zoom size used for data-zoom-image in
                    components/products/product-view.html
                    Note that this will only be used as a fallback image for browsers that do not support srcset
                    Also note that getSrcset returns a simple src string when exactly one size is provided
                */
            );

            const mainImageUrl = utils.tools.imageSrcset.getSrcset(
                image.data,
                { '1x': this.context.product_size },
                /*
                    Should match fallback image size used for the main product image in
                    components/products/product-view.html
                    Note that this will only be used as a fallback image for browsers that do not support srcset
                    Also note that getSrcset returns a simple src string when exactly one size is provided
                */
            );

            const mainImageSrcset = this.context.product_image_responsive ? utils.tools.imageSrcset.getSrcset(image.data) : '';

            this.imageGallery.setAlternateImage({
                // mainImageUrl: `${mainImageUrl}?imbypass=on`,
                // zoomImageUrl: `${zoomImageUrl}?imbypass=on`,
                mainImageUrl,
                zoomImageUrl,
                mainImageSrcset,
            });
        } else {
            this.imageGallery.restoreImage();
        }
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
    listenQuantityChange() {
        this.$scope.on('click', '[data-quantity-change] button', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const viewModel = this.getViewModel(this.$scope);
            const $input = viewModel.quantity.$input;
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
            } else if (qty > 1) {
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
            viewModel.quantity.$input.val(qty);
            // update text
            viewModel.quantity.$text.text(qty);

            this.updateProductDetailsData();
        });

        // mooncat: check input quantity
        this.$scope.on('change', '[data-quantity-change] input', event => {
            const viewModel = this.getViewModel(this.$scope);
            const $input = $(event.currentTarget);
            let qty = parseInt($input.val(), 10);

            if (qty <= 0 || !qty) {
                qty = 1;
            }

            viewModel.quantity.$input.val(qty);
            viewModel.quantity.$text.text(qty);
        });

        // --------------------------------------------------------------------
        // Giao - supermarket:
        // Fix problem when enter on quantity box won't decrease 1 unit
        // --------------------------------------------------------------------
        this.getViewModel(this.$scope).quantity.$input.on('keypress', (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
            }
        });

        // --------------------------------------------------------------------

        this.$scope.on('keyup', '.form-input--incrementTotal', () => {
            this.updateProductDetailsData();
        });
    }

    // papathemes-chiara added for also-bought
    addProductToCartAsync() {
        return new Promise(resolve => {
            const $form = $('form[data-cart-item-add]', this.$scope);
            const form = $form.get(0);
            const $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', this.$scope);
            const originalBtnVal = $addToCartBtn.html();
            const waitMessage = $addToCartBtn.data('waitMessage');

            // Do not do AJAX if browser doesn't support FormData
            if (window.FormData === undefined) {
                return;
            }

            $addToCartBtn
                .html(waitMessage)
                .prop('disabled', true);

            this.$overlay.show();

            // Add item to cart
            utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), async (err, response) => { // AlsoBought Mod
                $addToCartBtn
                    .html(originalBtnVal)
                    .prop('disabled', false);

                this.$overlay.hide();

                resolve([err, response]);
            });
        });
    }

    /**
     *
     * Add a product to cart
     *
     */
    addProductToCart(event, form) {
        const $addToCartBtn = $('#form-action-addToCart, #form-action-addToCartSticky', $(event.target));
        const originalBtnVal = $addToCartBtn.html();
        const waitMessage = $addToCartBtn.data('waitMessage');

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        $addToCartBtn
            .html(waitMessage)
            .prop('disabled', true);

        this.$overlay.show();

        // Add item to cart
        utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), async (err, response) => {
            if (response && response.data && response.data.cart_id) {
                currencySelector(response.data.cart_id);
            }
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .html(originalBtnVal)
                .prop('disabled', false);

            this.$overlay.hide();

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;

                return showAlertModal(tmp.textContent || tmp.innerText);
            }

            // Papathemes - Supermarket: Support redirect to cart page after added to cart
            if (this.context.redirect_cart) {
                this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
                return;
            }

            // Chiara
            if (form.action.value === 'buy') {
                this.redirectTo(this.context.urls.checkout.single_address);
                return;
            }

            // papathemes-inhealth: Show cart preview on the right side
            if (this.context.add_to_cart_popup === 'cart') {
                // close quick-view modal
                const modal = defaultModal();
                if (modal) {
                    modal.close();
                }
                return openCartPreview(response.data.cart_item.id, this.context);
            }

            // Open preview modal and update content
            if (this.previewModal) {
                // Supermarket OBPS Mod
                const modal = defaultModal();
                modal.close();
                if (this.context.add_to_cart_popup !== 'hide') {
                    this.previewModal.open();
                }

                if (window.ApplePaySession) {
                    this.previewModal.$modal.addClass('apple-pay-supported');
                }

                this.updateCartContent(this.previewModal, response.data.cart_item.id);
            } else {
                this.$overlay.show();
                // if no modal, redirect to the cart page
                this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
            }
        });
    }

    // papathemes: need for bulk-order layout
    addProductToCartLater(event, form) {
        if (form.reportValidity && !form.reportValidity()) {
            return;
        }

        if (this.$cardBulkOrderOptions) {
            const $form = this.$scope.find('form[data-cart-item-add]');
            $form.addClass('u-hiddenVisually');

            // Update price and qty of the bulk-order item
            if (this.$card) {
                const viewModel = this.getViewModel(this.$scope);
                const $cardPriceWithTax = this.$card.find('[data-product-price-with-tax]');
                const $cardPriceWithoutTax = this.$card.find('[data-product-price-without-tax]');
                const $boPriceFormatted = this.$card.find('[data-bulkorder-price-formatted]');
                const $boPriceValue = this.$card.find('[data-bulkorder-price-value]');

                if (viewModel.$priceWithTax.length > 0) {
                    const priceFormatted = viewModel.$priceWithTax.html();
                    const priceValue = viewModel.$priceWithTax.data('priceValue');

                    $cardPriceWithTax.html(priceFormatted);

                    if ($cardPriceWithTax.length > 0) {
                        $boPriceFormatted.data('bulkorderPriceFormatted', priceFormatted);

                        if (priceValue) {
                            $boPriceValue.data('bulkorderPriceValue', priceValue);
                        }
                    }
                }

                if (viewModel.$priceWithoutTax.length > 0) {
                    const priceFormatted = viewModel.$priceWithoutTax.html();
                    const priceValue = viewModel.$priceWithoutTax.data('priceValue');

                    $cardPriceWithoutTax.html(priceFormatted);

                    if ($cardPriceWithoutTax.length > 0 && $cardPriceWithTax.length === 0) {
                        $boPriceFormatted.data('bulkorderPriceFormatted', priceFormatted);

                        if (priceValue) {
                            $boPriceValue.data('bulkorderPriceValue', priceValue);
                        }
                    }
                }

                // Update card quantity box
                const qty = viewModel.quantity.$input.val() || 1;
                const minQty = viewModel.quantity.$input.data('quantityMin');
                const maxQty = viewModel.quantity.$input.data('quantityMax');
                const $cardQty = this.$card.find('[data-quantity-change] input');
                if (minQty) {
                    $cardQty.attr('data-quantity-min', minQty);
                }
                if (maxQty) {
                    $cardQty.attr('data-quantity-max', maxQty);
                }
                $cardQty.val(qty).trigger('change');
            }

            // Insert the add to cart form to the bulk-order item
            this.$cardBulkOrderOptions
                .html(this.createSelectedOptionsHtml())
                .append($form);

            // remove ID to avoid duplicate ID in the DOM
            $form.find('[id]').each((_index, el) => {
                const $el = $(el);
                $el.attr('data-last-element-id', $el.attr('id'))
                    .removeAttr('id');
            });
        }

        if (typeof this.closeQuickView === 'function') {
            this.closeQuickView();
        }
    }

    /**
     * Get cart contents
     *
     * @param {String} cartItemId
     * @param {Function} onComplete
     */
    getCartContent(cartItemId, onComplete, template = 'cart/preview') {
        const options = {
            template,
            params: {
                suggest: cartItemId,
            },
            config: {
                cart: {
                    suggestions: {
                        limit: 4,
                    },
                },
            },
        };

        utils.api.cart.getContent(options, onComplete);
    }

    /**
     * Redirect to url
     *
     * @param {String} url
     */
    redirectTo(url) {
        if (this.isRunningInIframe() && !window.iframeSdk) {
            window.top.location = url;
        } else {
            window.location = url;
        }
    }

    /**
     * Update cart content
     *
     * @param {Modal} modal
     * @param {String} cartItemId
     * @param {Function} onComplete
     */
    updateCartContent(modal, cartItemId, onComplete, template) {
        this.getCartContent(cartItemId, (err, response) => {
            if (err) {
                return;
            }

            modal.updateContent(response);
            this.applyModalAutoClose(modal); // Supermarket

            // Update cart counter
            const $body = $('body');
            const $cartQuantity = $('[data-cart-quantity]', modal.$content);
            const $cartPrice = $('[data-cart-price]', modal.$content);
            const $cartCounter = $('.navUser-action .cart-count');
            const quantity = $cartQuantity.data('cartQuantity') || 0;
            const price = $cartPrice.data('cartPrice') || 0;


            $cartCounter.addClass('cart-count--positive');
            $body.trigger('cart-quantity-update', [quantity, price]);

            if (onComplete) {
                onComplete(response);
            }

            // Supermarket - OBPS Mod
            // shake($('.navUser-item--cart > .navUser-action'));
        }, template);
    }

    /**
     * Show an message box if a message is passed
     * Hide the box if the message is empty
     * @param  {String} message
     */
    showMessageBox(message) {
        const $messageBox = $('.productAttributes-message', this.$scope); // Papathemes fix missing $scope

        if (message) {
            $('.alertBox-message', $messageBox).text(message);
            $messageBox.show();
        } else {
            $messageBox.hide();
        }
    }

    /**
     * Hide the pricing elements that will show up only when the price exists in API
     * @param viewModel
     */
    clearPricingNotFound(viewModel) {
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
     */
    updatePriceView(viewModel, price) {
        this.clearPricingNotFound(viewModel);

        if (price.with_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithTax.html(price.with_tax.formatted);
            viewModel.$priceWithTax.data('priceValue', price.with_tax.value); // papathemes: need for bulk-order layout

            // papathemes-beautify
            if (price.rrp_with_tax || price.non_sale_price_with_tax) {
                viewModel.$priceWithTax.addClass('_hasSale');
                const salePercent = Math.round((((price.rrp_with_tax ? price.rrp_with_tax.value : price.non_sale_price_with_tax.value) - price.with_tax.value) / (price.rrp_with_tax ? price.rrp_with_tax.value : price.non_sale_price_with_tax.value)) * 100);
                viewModel.saleCountdown.$div.show();
                viewModel.saleCountdown.$spanSale.text(`${salePercent}%`);
                viewModel.saleLabel.$div.show();
                viewModel.saleLabel.$span.text(`${salePercent}%`);
            } else {
                viewModel.$priceWithTax.removeClass('_hasSale');
                viewModel.saleCountdown.$div.hide();
                viewModel.saleLabel.$div.hide();
            }
        }

        if (price.without_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithoutTax.html(price.without_tax.formatted);
            viewModel.$priceWithoutTax.data('priceValue', price.without_tax.value); // papathemes: need for bulk-order layout

            // papathemes-beautify
            if (price.rrp_without_tax || price.non_sale_price_without_tax) {
                viewModel.$priceWithoutTax.addClass('_hasSale');
                const salePercent = Math.round((((price.rrp_without_tax ? price.rrp_without_tax.value : price.non_sale_price_without_tax.value) - price.without_tax.value) / (price.rrp_without_tax ? price.rrp_without_tax.value : price.non_sale_price_without_tax.value)) * 100);
                viewModel.saleCountdown.$div.show();
                viewModel.saleCountdown.$spanSale.text(`${salePercent}%`);
                viewModel.saleLabel.$div.show();
                viewModel.saleLabel.$span.text(`${salePercent}%`);
            } else {
                viewModel.$priceWithoutTax.removeClass('_hasSale');
                viewModel.saleCountdown.$div.hide();
                viewModel.saleLabel.$div.hide();
            }
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
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updateView(data, content = null) {
        const viewModel = this.getViewModel(this.$scope);

        this.showMessageBox(data.stock_message || data.purchasing_message);

        if (data.price instanceof Object) {
            this.updatePriceView(viewModel, data.price);
        }

        if (data.weight instanceof Object) {
            viewModel.$weight.html(data.weight.formatted);
        }

        // Set variation_id if it exists for adding to wishlist
        if (data.variantId) {
            viewModel.$wishlistVariation.val(data.variantId);
        }

        // If SKU is available
        if (data.sku) {
            viewModel.sku.$value.text(data.sku);
            viewModel.sku.$label.show();
        } else {
            viewModel.sku.$label.hide();
            viewModel.sku.$value.text('');
        }

        // If UPC is available
        if (data.upc) {
            viewModel.upc.$value.text(data.upc);
            viewModel.upc.$label.show();
        } else {
            viewModel.upc.$label.hide();
            viewModel.upc.$value.text('');
        }

        // If MPN is available
        if (data.mpn) {
            viewModel.mpn.$value.text(data.mpn);
            viewModel.mpn.$label.show();
        } else if (viewModel.mpn.$value.data('originalMpn')) {
            viewModel.mpn.$value.text(viewModel.mpn.$value.data('originalMpn'));
            viewModel.mpn.$label.show();
        } else {
            viewModel.mpn.$label.hide();
            viewModel.mpn.$value.text('');
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && typeof data.stock === 'number') {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);

            // mooncat: show low stock status
            if (data.low_stock && data.stock < data.low_stock) {
                viewModel.stock.$container.addClass('_lowStock');
            } else {
                viewModel.stock.$container.removeClass('_lowStock');
            }
        } else {
            viewModel.stock.$container.addClass('u-hiddenVisually');
            viewModel.stock.$input.text(data.stock);
        }

        // papathemes-beautify: show / hide stock badge
        if (data.instock && data.purchasable) {
            viewModel.stock.$badge.removeClass('_outstock').each((i, el) => {
                $(el).text($(el).data('instockMessage'));
            });
        } else {
            viewModel.stock.$badge.addClass('_outstock').text(data.stock_message || data.purchasing_message);
            // viewModel.stock.$badge.addClass('_outstock').each((i, el) => {
            //     $(el).text($(el).data('outstockMessage'));
            // });
        }

        this.updateDefaultAttributesForOOS(data);
        this.updateWalletButtonsView(data);

        // If Bulk Pricing rendered HTML is available
        if (data.bulk_discount_rates && content) {
            viewModel.$bulkPricing.html(content);
        } else if (typeof (data.bulk_discount_rates) !== 'undefined') {
            viewModel.$bulkPricing.html('');
        }

        if (data.purchasable) {
            this.$scope.find('._addToCartVisibility').filter(':hidden').show();
            this.$scope.find('#form-action-buyNow').filter(':hidden').show();
        } else {
            this.$scope.find('._addToCartVisibility').hide();
            this.$scope.find('#form-action-buyNow').hide();
        }

        // papathemes-kitchenary: dispatch event for also-bought
        this.$scope.trigger('product-view-update', [data]);
    }

    updateWalletButtonsView(data) {
        this.toggleWalletButtonsVisibility(data.purchasable && data.instock);
    }

    toggleWalletButtonsVisibility(shouldShow) {
        const viewModel = this.getViewModel(this.$scope);

        if (shouldShow) {
            viewModel.$walletButtons.show();
        } else {
            viewModel.$walletButtons.hide();
        }
    }

    updateDefaultAttributesForOOS(data) {
        const viewModel = this.getViewModel(this.$scope);
        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$buyNow.prop('disabled', true); // papathemes-chiara
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$buyNow.prop('disabled', false); // papathemes-chiara
            viewModel.$increments.prop('disabled', false);
        }
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    updateProductAttributes(data) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockDefaultMessage = this.context.outOfStockDefaultMessage;
        let outOfStockMessage = data.out_of_stock_message;

        // papathemes-chiara edited for also-bought
        this.price = data.price;
        this.$scope.trigger('price-change');

        this.showProductImage(data.image);

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        if (outOfStockMessage) {
            outOfStockMessage = ` (${outOfStockMessage})`;
        } else {
            outOfStockMessage = ` (${outOfStockDefaultMessage})`;
        }

        $('[data-product-attribute-value]', this.$scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('productAttributeValue'), 10);


            if (inStockIds.indexOf(attrId) !== -1) {
                this.enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                this.disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });

        this.$scope.trigger('updateProductAttributes'); // papathemes-beautify for dropdown-swatches
    }

    updateProductDetailsData() {
        // papathemes-supermarket:
        // Stop if product is also-bought product (FBT) to prevent incorrect price from quick payment button
        if (this.$scope.closest('[data-also-bought]').length > 0) {
            return;
        }

        const $form = this.$scope.find('form[data-cart-item-add]'); // papathemes: fix selector don't respect the scope
        const formDataItems = $form.serializeArray();

        const productDetails = {};

        for (const formDataItem of formDataItems) {
            const { name, value } = formDataItem;

            if (name === 'product_id') {
                productDetails.productId = Number(value);
            }

            if (name === 'qty[]') {
                productDetails.quantity = Number(value);
            }

            if (name.match(/attribute/)) {
                const productOption = {
                    optionId: Number(name.match(/\d+/g)[0]),
                    optionValue: value,
                };

                productDetails.optionSelections = productDetails?.optionSelections
                    ? [...productDetails.optionSelections, productOption]
                    : [productOption];
            }
        }

        document.dispatchEvent(new CustomEvent('onProductUpdate', {
            bubbles: true,
            detail: { productDetails },
        }));
    }

    disableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($select.val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    enableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('productAttribute') : null;
    }

    /**
     * Allow radio buttons to get deselected
     */
    initRadioAttributes() {
        $('[data-product-attribute] input[type="radio"]', this.$scope).each((i, radio) => {
            const $radio = $(radio);

            // Only bind to click once
            if ($radio.attr('data-state') !== undefined) {
                $radio.on('click', () => {
                    if ($radio.data('state') === true) {
                        $radio.prop('checked', false);
                        $radio.data('state', false);

                        $radio.trigger('change');
                    } else {
                        $radio.data('state', true);
                    }

                    this.initRadioAttributes();
                });
            }

            $radio.attr('data-state', $radio.prop('checked'));
        });
    }

    /**
     * Check for fragment identifier in URL requesting a specific tab
     */
    getTabRequests() {
        if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
            const $activeTab = $('.tabs').has(`[href='${window.location.hash}']`);
            const $tabContent = $(`${window.location.hash}`);

            if ($activeTab.length > 0) {
                $activeTab.find('.tab')
                    .removeClass('is-active')
                    .has(`[href='${window.location.hash}']`)
                    .addClass('is-active');

                $tabContent.addClass('is-active')
                    .siblings()
                    .removeClass('is-active');
            }
        }
    }

    /**
     * Init custom tabs by parsing product description
     * (Added by Papathemes - Supermarket)
     */
    initCustomTabs() {
        const $customTabs = $('[data-custom-tab]', this.$scope);
        if ($customTabs.length === 0) {
            return;
        }

        const $tabs = $('.productView-description > .tabs', this.$scope);
        const $tabsContent = $('.productView-description', this.$scope);

        if ($tabs.length === 0 || $tabsContent.length === 0) {
            return;
        }

        $customTabs.each((i, el) => {
            const $el = $(el);
            const $title = $el.find('[data-custom-tab-title]');
            const title = $title.html();
            const txtTitle = $title.text();

            let expand = $title.data('expand');

            if (!expand) {
                expand = 'View All';
            }

            let close = $title.data('close');

            if (!close) {
                close = 'Close';
            }

            $title.remove();

            const content = $el.html();

            $el.remove();

            $tabs.children().append(`<li class="tab tab--custom tab--custom-${i}" role="presentation"><a class="tab-title" href="#tab-custom-${i}" role="tab">${title}</a></li>`);
            $tabsContent.append(`<div class="tab-content tab-content--custom tab-content--custom-${i}" id="tab-custom-${i}" aria-hidden="true" role="tabpanel" aria-label="${txtTitle}"><div class="container"><a class="productView-description-tabHeading" data-tab-mobile href="#tab-custom-${i}">${title}<svg class="icon"><use href="#icon-product-tab-arrow"></svg></a><div class="productView-description-tabContent">${content}</div></div></div>`);
        });
    }

    initTabsADA() {
        // Click product tab in Tablet - Desktop
        this.$scope.find('[data-product-tab] .tab').on('click', (e) => {
            e.preventDefault();
            const $el = $(e.currentTarget);
            const idContent = $el.find('.tab-title').attr('href');
            const $productTab = $el.closest('[data-product-tab]');
            $el.parent().find('.tab').removeClass('is-active');
            $el.parent().find('.tab-title').attr('aria-selected', false);
            $productTab.find('.tab-content')
                .removeClass('is-active')
                .attr('aria-hidden', true);
            $el.addClass('is-active');
            $el.find('.tab-title').attr('aria-selected', true);
            $productTab.find(`${idContent}`)
                .addClass('is-active')
                .attr('aria-hidden', false);
        });

        // Click product tab in Mobile
        this.$scope.find('[data-product-tab] [data-tab-mobile]').on('click', (e) => {
            e.preventDefault();
            const $el = $(e.currentTarget);
            $el.toggleClass('is-open');
            $el.siblings('.productView-description-tabContent').toggleClass('is-open');
            $el.closest('.tab-content').attr('aria-hidden', $el.closest('.tab-content').attr('aria-hidden') === 'false' ? 'true' : 'false');
        });

        const updateTabs = () => {
            if (smallMediaQueryList.matches) {
                // Handle product tab - Mobile to Tablet
                // Change default attribute, class
                this.$scope.find('[data-product-tab]').each((i, el) => {
                    const $el = $(el);
                    $el.find('.tab')
                        .removeClass('is-active')
                        .first().addClass('is-active');
                    $el.find('tab-title')
                        .attr('aria-selected', false)
                        .first().attr('aria-selected', true);
                    $el.find('.tab-content')
                        .removeClass('is-active')
                        .attr('aria-hidden', true)
                        .first().addClass('is-active')
                        .first().attr('aria-hidden', false);
                });
            } else {
                // Handle product tab - Tablet to Mobile
                this.$scope.find('[data-product-tab]').each((i, el) => {
                    const $el = $(el);
                    $el.find('[data-tab-mobile]').removeClass('is-open');
                    $el.find('.productView-description-tabContent').removeClass('is-open');
                    $el.find('.tab-content').attr('aria-hidden', false);
                    $el.find('.tab-content.is-active').find('[data-tab-mobile]').addClass('is-open');
                    $el.find('.tab-content.is-active').find('.productView-description-tabContent').addClass('is-open');
                    $el.find('.tab-content.is-active').removeClass('is-active');
                });
            }
        };

        // Handle product tab when change divice
        smallMediaQueryList.addListener(updateTabs);
        updateTabs();
    }

    // Papathemes - Supermarket
    onMiniPreviewModalOpen() {
        $('body').addClass('has-activeModal--miniPreview');
    }

    // Papathemes - Supermarket
    onMiniPreviewModalClose() {
        $('body').removeClass('has-activeModal--miniPreview');
        if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
            window.clearInterval(this.autoCloseTimer);
            this.autoCloseTimer = null;
        }
    }

    // Papathemes - Supermarket
    applyModalAutoClose(modal) {
        const $autoCloseEl = modal.$modal.find('[data-auto-close]');
        if ($autoCloseEl.length > 0) {
            let sec = $autoCloseEl.data('autoClose') || 5;
            const $count = $autoCloseEl.find('.count');
            $count.html(sec);

            modal.autoCloseTimer = window.setInterval(() => { // eslint-disable-line
                if (sec > 1) {
                    sec--;
                    $count.html(sec);
                } else {
                    window.clearInterval(modal.autoCloseTimer);
                    modal.autoCloseTimer = null; // eslint-disable-line
                    modal.close();
                }
            }, 1000);
        }
    }
}
