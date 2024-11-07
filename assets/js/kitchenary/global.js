import collapsibleFactory from '../theme/common/collapsible';
import mediaQueryListFactory from '../theme/common/media-query-list';

const mediumMediaQueryList = mediaQueryListFactory('medium');


function initCollapsibleToggleClose() {
    $('[data-collapsible-close]').on('click', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).data('collapsibleClose');
        collapsibleFactory(`[data-collapsible=${id}]`).forEach(collapsible => {
            collapsible.close();
        });
    });
}

function initMenuADA() {
    const $menu = $('#menu');
    const navSubmenu = $('.navPage-subMenu-item > .navPages-action-toggle', $menu);
    const toggleSub = $('._titleSubmenu > .navPages-action-toggle', $menu);
    const toggleSubChild = $('._titleSubMenu > .navPages-action-toggle', $menu);
    const navChildList = $('.navPage-childList-item > .navPages-action-toggle', $menu);

    navSubmenu.on('click', (e) => {
        if (!mediumMediaQueryList.matches) {
            setTimeout(() => {
                $('.navPages-all-mobile', $menu).children().prop('inert', true);
                $('.navPage-subMenu-list', $menu).children().children().not('.navPage-childList').prop('inert', true);
                $(e.target).siblings().find('._titleSubmenu .navPages-action-toggle').first().focus();
            }, 100);
        }
    });

    $('._hideToggle', $menu).on('focus', (e) => {
        if (!mediumMediaQueryList.matches) {
            $(e.target).parent().find('._titleSubmenu .navPages-action-toggle, ._titleSubMenu .navPages-action-toggle').focus();
        }
    });

    navChildList.on('click', (e) => {
        if (!mediumMediaQueryList.matches) {
            setTimeout(() => {
                $(e.target.offsetParent).siblings().not('.navPage-childList').prop('inert', true);
                $(e.target).siblings().find('._titleSubMenu .navPages-action-toggle').first().focus();
            }, 100);
        }
    });

    toggleSub.on('click', (e) => {
        if (!mediumMediaQueryList.matches) {
            setTimeout(() => {
                $('.navPages-all-mobile', $menu).children().prop('inert', false);
                $('.navPage-subMenu-list', $menu).children().children().prop('inert', false);
                setTimeout(() => {
                    $(e.target.offsetParent).parent().find('.navPages-action-toggle').first().focus();
                }, 50);
            }, 100);
        }
    });

    toggleSubChild.on('click', (e) => {
        if (!mediumMediaQueryList.matches) {
            setTimeout(() => {
                $('._titleSubmenu', $menu).children().prop('inert', false);
                navChildList.parent().siblings().prop('inert', false);
                $(e.target.offsetParent).parent().parent().find('.navPages-action-toggle').first().focus();
            }, 100);
        }
    });

    $('.navPages-item > .navPages-action-toggle', $menu).on('click', () => {
        if (!mediumMediaQueryList.matches) {
            setTimeout(() => {
                $('.navPages-all-mobile', $menu).children().prop('inert', false);
                $('.navPage-subMenu-list', $menu).children().children().prop('inert', false);
            }, 100);
        }
    });
}

function initCheckedLinkBrand() {
    const $listBrand = $('#brands-navList');
    const $navCheckbox = $('.navList-action--checkbox', $listBrand);
    const currentURL = window.location.href;
    $navCheckbox.each((index, item) => {
        if ($(item).attr('href') === currentURL) {
            $(item).addClass('is-selected');
        } else {
            $(item).removeClass('is-selected');
        }
    });

    $navCheckbox.on('click', (event) => {
        $navCheckbox.removeClass('is-selected');
        $(event.currentTarget).addClass('is-selected');
    });
}

function initCheckedLinkPrice() {
    const $listPrice = $('#shopByPrice-navList');
    const $navCheckbox = $('.navList-action--checkbox', $listPrice);

    $navCheckbox.on('click', (event) => {
        $navCheckbox.removeClass('is-selected');
        $(event.currentTarget).addClass('is-selected');
    });
}

export default function () {
    initCollapsibleToggleClose();
    initMenuADA();
    initCheckedLinkBrand();
    initCheckedLinkPrice();
}
