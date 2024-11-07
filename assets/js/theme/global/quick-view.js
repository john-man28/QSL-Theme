import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import ProductDetails from '../common/product-details';
import { defaultModal } from './modal';
import 'slick-carousel';

/**
 * Prepare quick-view hook and context for Bulk Order layout
 *
 * @param {HTMLElement} currentTarget current target clicked element
 * @param {Modal} modal Quick view modal instance
 * @param {object} context Context object
 * @returns {object} New content object
 */
export function initBulkOrderQuickView(currentTarget, modal, context) {
    const $card = $(currentTarget).closest('.card');
    const $qty = $card.find('[data-quantity-change] input');
    const qty = Number($qty.val()) || Number($qty.data('quantityMin'));
    const showAddToCartLater = $(currentTarget).closest('.card-bulkOrder').length > 0;
    const $cardBulkOrderOptions = $card.find('[data-bulkorder-options]');
    const $productView = modal.$content.find('.productView');
    const newContext = { ...context };

    // Update qty from product card's qty input
    if (qty && qty > 0) {
        const $quickViewQty = $productView.find('[data-quantity-change] input[name="qty[]"]');
        const minQty = Number($quickViewQty.data('quantityMin')) || 1;
        const maxQty = Number($quickViewQty.data('quantityMax')) || 0;
        if (qty >= minQty && (maxQty === 0 || qty <= maxQty)) {
            $quickViewQty.val(qty);
        }
    }

    // Show Add to Cart Later button for Bulk Order layout
    if (showAddToCartLater) {
        $productView.find('#form-action-addToCartLater').show();
        newContext.showAddToCartLater = true;
        newContext.closeQuickView = () => modal.close();
    }

    // Insert the source $cart element initialize the quick view
    if ($card.length > 0) {
        newContext.$card = $card;
    }

    // Populate the quick view product form with the selected options from previous selection
    if ($cardBulkOrderOptions.length > 0) {
        newContext.$cardBulkOrderOptions = $cardBulkOrderOptions;
        const $form = $cardBulkOrderOptions.find('form');

        if ($form.length > 0) {
            const formData = new FormData($form[0]);
            const $newForm = $productView.find('form[data-cart-item-add]');

            formData.entries().forEach(([key, value]) => {
                if (key.match(/attribute/)) {
                    const $el = $newForm.find(`[name="${key}"][type!="hidden"]`);

                    if ($el.attr('type') === 'radio' || $el.attr('type') === 'checkbox') {
                        $el.filter(`[value="${value}"]`).prop('checked', true);
                        newContext.forceUpdateView = true;
                    } else if ($el.attr('type') === 'file') {
                        if (value instanceof File && value.size > 0) {
                            const dt = new DataTransfer();
                            dt.items.add(value);
                            $el[0].files = dt.files;

                            // For Safari
                            if ($el[0].webkitEntries?.length) {
                                $el[0].dataset.file = `${dt.files[0].name}`;
                            }

                            newContext.forceUpdateView = true;
                        }
                    } else {
                        $el.val(value);
                        newContext.forceUpdateView = true;
                    }
                }
            });
        }
    }

    return newContext;
}

export default function (context) {
    // Supermarket - Instantload feature
    if (context.instantload && !window.previewSdk) {
        return;
    }

    const modal = defaultModal();

    // Fetch widget region by Product ID
    async function fetchWidgetById(productId) {
        if (!productId) return [];
        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    query {
                        site {
                            content {
                                renderedRegionsByPageTypeAndEntityId(entityPageType: PRODUCT, entityId: ${productId}){
                                    regions {
                                        name
                                        html
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    productId,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${context.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });
        const listRegion = resp?.data?.site?.content?.renderedRegionsByPageTypeAndEntityId?.regions;

        const productRegion = [];

        $.each(listRegion, (i, el) => {
            if (el.name === 'product_description_tab_content--global' || el.name === 'product_description_tab_content') {
                productRegion.push(el);
            }
        });

        return productRegion;
    }

    // supermarket add .quickview-alt to support Choose Options show quickview
    $('body').on('click', '.quickview, .quickview-alt', event => {
        event.preventDefault();
        const currentTarget = event.currentTarget;
        const productId = $(currentTarget).data('productId');

        // papathemes-inhealth
        const size = $(currentTarget).hasClass('quickview-alt') ? 'purchaseOptions' : 'large';

        modal.open({ size });

        // papathemes-beautify
        const config = {
            product: {
                videos: context.productpage_videos_count,
                reviews: context.productpage_reviews_count,
                related_products: {
                    limit: context.productpage_related_products_count,
                },
                similar_by_views: {
                    limit: context.productpage_similar_by_views_count,
                },
            },
        };

        // papathemes-inhealth
        const template = $(currentTarget).hasClass('quickview-alt') ? 'products/quick-view-alt' : 'products/quick-view';

        const fetchWidget = fetchWidgetById(productId);

        utils.api.product.getById(productId, { template, config }, (err, response) => {
            modal.updateContent(response);

            modal.$content.find('.productView').addClass('productView--quickView');

            modal.$content.find('[data-slick]').slick();

            // papathemes: inject features for bulk order layout
            const newContext = initBulkOrderQuickView(currentTarget, modal, context);

            // Papathemes Also Bought MOD {{{
            const $quickView = modal.$content.find('.quickView');
            let product;
            if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
                product = new ProductDetails($quickView, { ...newContext, enableAlsoBought: true });
            } else {
                product = new ProductDetails($quickView, newContext);
            }

            $('body').trigger('loaded.quickview', [product]);

            // Supermarket: Track recently viewed products
            $('body').trigger('productviewed', [Number($quickView.find('input[name="product_id"]').val())]);

            // Get widget region by Product ID
            const $scope = modal.$content.find('.productView--quickView');
            const $tabContentGlobal = $scope.find('[data-content-region="product_description_tab_content--global"]');
            const $tabContent = $scope.find('[data-content-region="product_description_tab_content"]');

            fetchWidget.then(data => {
                $.each(data, (i, el) => {
                    if (el.name === 'product_description_tab_content--global') {
                        $tabContentGlobal.html(el.html);
                    } else {
                        $tabContent.html(el.html);
                    }
                });
            });

            return product;
            // }}}
        });
    });
}
