import BlazeSlider from 'blaze-slider';
import initPageBuilder from '../papathemes/page-builder';
import mediaQueryListFactory from '../theme/common/media-query-list';
import { debounce } from 'lodash';

const mediumMediaQueryList = mediaQueryListFactory('medium');

function updateMegaMenuWidth() {
    const navPagesMega = $('.navPages._hasMegamenu');
    if (navPagesMega.length > 0) {
        const $navPagesItem = $('.navPages._hasMegamenu > ul > li.navPages-item');
        const update = () => {
            $navPagesItem.each((_i, el) => {
                const $subMenu = $(el).find('ul').first();
                if ($(window).width() > 800) {
                    $subMenu.css('width', `${navPagesMega.width() - 40}px`);
                } else {
                    $subMenu.css('width', 'unset');
                }
            });
        };
        update();
        $(window).on('resize', debounce(update, 400));
    }
}

export default function (context) {
    if ($('.navPages._hasWidgets').length > 0) {
        initPageBuilder(context);
    }

    const menuColumnScreenChange = () => {
        if (mediumMediaQueryList.matches) {
            $('.navPages > ul > li.navPages-item--column').each((_i, el) => {
                const $subMenuUl = $(el).find('ul');
                let maxHeight = 0;
                $subMenuUl.each((_j, ul) => {
                    maxHeight = maxHeight > $(ul).height() ? maxHeight : $(ul).height();
                });
                $subMenuUl.height(maxHeight);
            });
        } else {
            $('.navPages > ul > li.navPages-item--column').each((_i, el) => {
                const $subMenuUl = $(el).find('ul');
                $subMenuUl.css('height', '100%');
            });
        }
    };

    menuColumnScreenChange();
    updateMegaMenuWidth();


    const $scopeSlider = $('#banners-carousel');
    const $wrapperWidget = $('[data-widget-id]', $scopeSlider);
    const $childWidgetSlider = $wrapperWidget.children();
    if ($childWidgetSlider.length > 0) {
        const templateSlider = `<div class="banners blaze-slider" data-banner-location="top">
            <div class="blaze-container">
                <button class="blaze-button blaze-prev" aria-label="Previous"></button>
                <button class="blaze-button blaze-next" aria-label="Next"></button>
                <div class="blaze-track-container">
                    <div class="blaze-track">
                    </div>
                </div>
            </div>
        </div>`;

        $wrapperWidget.append(templateSlider);
        $childWidgetSlider.appendTo($('.blaze-track', $scopeSlider));

        if ($childWidgetSlider.length < 2) {
            $('.blaze-button', $scopeSlider).hide();
        } else {
            $('.blaze-button', $scopeSlider).show();
        }

        const el = document.querySelector('#banners-carousel .blaze-slider');
        if (el) {
            const initSlider = new BlazeSlider(el, {
                all: {
                    enableAutoplay: true,
                    autoplayInterval: 5000,
                    transitionDuration: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    loop: true,
                    slideGap: '100px',
                },
            });
            initSlider.refresh();
        }
    }

    $('.banners-close', '.banners-wrapper').on('click', (e) => {
        $(e.target).closest('.banners-wrapper').hide();
    });

    mediumMediaQueryList.addListener(menuColumnScreenChange);
}
