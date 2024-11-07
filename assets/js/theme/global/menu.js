import collapsibleFactory from '../common/collapsible';
import collapsibleGroupFactory from '../common/collapsible-group';
import mediaQueryListFactory from '../common/media-query-list'; // papathemes-beautify
import mobileMenuToggleFactory from '../global/mobile-menu-toggle';

const PLUGIN_KEY = 'menu';

const mediumMediaQueryList = mediaQueryListFactory('medium'); // papathemes-beautify

/*
 * Manage the behaviour of a menu
 * @param {jQuery} $menu
 */
class Menu {
    constructor($menu) {
        this.$menu = $menu;
        this.$body = $('body');
        this.hasMaxMenuDisplayDepth = this.$body.find('.navPages-list').hasClass('navPages-list-depth-max');

        // Init collapsible
        this.collapsibles = collapsibleFactory('[data-collapsible]', { $context: this.$menu });
        this.defaultCollapsibles = collapsibleFactory('.is-default[data-collapsible]', { $context: this.$menu }); // papathemes-beautify
        this.collapsibleGroups = collapsibleGroupFactory($menu);
        this.$navChildlist = $('.navPage-childList', this.$menu);

        // papathemes-beautify: fix not collapse others if an element has is-open class at init.
        this.collapsibleGroups.forEach(group => {
            const _arr = collapsibleFactory($('.is-open[data-collapsible]', group.$component).first());
            if (_arr.length > 0) {
                // eslint-disable-next-line no-param-reassign
                group.openCollapsibles.push(_arr[0]);
            }
        });

        // Auto-bind
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onMediumMediaQueryMatch = this.onMediumMediaQueryMatch.bind(this); // papathemes-beautify
        this.onMenuTab = this.onMenuTab.bind(this);

        // Listen
        this.bindEvents();
    }

    collapseAll() {
        this.disableSubAnimation = true; // papathemes-inhealth
        this.collapsibles.forEach(collapsible => collapsible.close()); // papathemes - supermarket: fix issue when click body dropdown menu being hidden
        this.collapsibleGroups.forEach(group => group.close());
        this.disableSubAnimation = false; // papathemes-inhealth

        // papathemes-beautify
        // Re-open the firt menu item
        if (mediumMediaQueryList.matches) {
            this.defaultCollapsibles.forEach(group => group.open());
        }
    }

    collapseNeighbors($neighbors) {
        const $collapsibles = collapsibleFactory('[data-collapsible]', { $context: $neighbors });

        $collapsibles.forEach($collapsible => $collapsible.close());
    }

    bindEvents() {
        this.$menu.on('click', this.onMenuClick);
        this.$body.on('click', this.onDocumentClick);
        this.$menu.find('[data-nav-tab]').on('click', this.onMenuTab);

        // papathemes-beautify: collapse menu when switching to desktop
        mediumMediaQueryList.addListener(this.onMediumMediaQueryMatch);
    }

    unbindEvents() {
        this.$menu.off('click', this.onMenuClick);
        this.$body.off('click', this.onDocumentClick);

        // papathemes-beautify: collapse menu when switching to desktop
        mediumMediaQueryList.removeListener(this.onMediumMediaQueryMatch);
    }

    // papathemes-beautify
    onMediumMediaQueryMatch(media) {
        if (media.matches) {
            this.collapseAll();
        }
    }


    // On click tab menu left
    onMenuTab(event) {
        event.preventDefault();
        const $thisNav = $(event.target);
        const $navEleOther = $thisNav.parent().siblings();
        $navEleOther.children('[data-nav-tab]').removeClass('is-open');
        $thisNav.addClass('is-open');
        const dataNav = $thisNav.data('navTab');
        if ($thisNav.hasClass('is-open')) {
            this.collapsibles.forEach(item => {
                item.close();
                if (item.targetId === dataNav) {
                    item.open();
                }
            });
        }
        if (!this.$menu.find('.navPage-subMenu-item .navPage-childList').hasClass('is-open')) {
            const navData = this.$menu.find('._titleSubmenu').children('.navPages-action-toggle').attr('aria-controls');
            this.collapsibles.forEach(item => {
                if (item.targetId === navData) {
                    this.$menu.find('.navPage-subMenu.is-open').css('overflow', 'auto');
                }
            });
        }
        this.$menu.find('.navPage-subMenu.is-open').css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' });
    }

    onMenuClick(event) {
        // papathemes-supermarket - Fix to allow [data-cart-currency-switch-url] works in menu
        if ($(event.target).is('[data-cart-currency-switch-url]') || $(event.target).closest('[data-cart-currency-switch-url]').length > 0) {
            return;
        }

        if ($(event.target).is('[data-cart-preview]') || $(event.target).closest('[data-cart-preview]').length > 0) {
            return;
        }

        // mooncat: ignore clicks on widget regions
        if ($(event.target).closest('[data-content-region]').length > 0) {
            return;
        }

        if ($(event.target).closest('.navPages-item--currency').length > 0) {
            const $toggle = $('[data-nav-tab]', this.$menu);
            $toggle.removeClass('is-open');
        }

        if ($(event.target).closest('.navPage-subMenu-item').length > 0) {
            const navToggle = $(event.target).closest('.navPages-action-toggle');
            const navChildlist = $(event.target).closest('.navPage-subMenu-item').find('.navPage-childList');
            const navChildlistId = $(event.target).closest('.navPage-subMenu-item').find('.navPage-childList').attr('id');
            const navChildlistItemId = $(event.target).closest('.navPage-childList-item').find('.navPage-childList').attr('id');
            const navChildlistItem = $(event.target).closest('.navPage-childList-item');
            const navData = navToggle.attr('aria-controls');
            if (!mediumMediaQueryList.matches) {
                if (navChildlist.hasClass('is-open') && navChildlistId === navData) {
                    this.$menu.find('.navPage-subMenu.is-open').css('overflow', 'hidden');
                    navChildlist.css('top', `${this.$menu.offset().top - $(window).scrollTop()}px`);
                }
                if (navChildlist.find('.navPage-childList').hasClass('is-open') && navChildlistItemId === navData) {
                    navChildlist.first().css('overflow-y', 'auto');
                } else {
                    navChildlist.first().css('overflow-y', 'unset');
                    navChildlistItem.css('top', '0px');
                }
            } else {
                navChildlist.css('top', '');
            }
        }

        if (!this.$navChildlist.hasClass('is-open')) {
            if (!mediumMediaQueryList.matches) {
                this.$menu.find('.navPage-subMenu.is-open').css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' });
            }
        }

        // papathemes-beautify edited to fix cart dropdown not show
        if ($(event.target).closest('[data-dropdown]').length === 0) {
            event.stopPropagation();
        }

        event.stopPropagation();

        if (this.hasMaxMenuDisplayDepth) {
            const $neighbors = $(event.target).parent().siblings();

            this.collapseNeighbors($neighbors);
        }
    }

    onDocumentClick(e) {
        if (mediumMediaQueryList.matches) {
            this.collapseAll();
        }
        const mobileMenu = mobileMenuToggleFactory();
        // Open the first tab mennu
        if (this.$body.hasClass('has-activeNavPages')) {
            $('[data-nav-tab]', this.$menu).removeClass('is-open');
            this.$menu.find('[data-nav-tab]').first().addClass('is-open');
            const firstNavData = this.$menu.find('[data-nav-tab]').first().data('navTab');
            this.collapsibles.forEach(item => {
                item.close();
                if (item.targetId === firstNavData) {
                    item.open();
                    $(item.$target).css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' });
                }
            });
        }
        // Close menu when click document outside
        if (mobileMenu.$toggle.has(e.target).length === 0 && !mobileMenu.$toggle.is(e.target)) {
            if (mobileMenu.isOpen) {
                mobileMenu.hide();
            }
        }
    }
}

/*
 * Create a new Menu instance
 * @param {string} [selector]
 * @return {Menu}
 */
export default function menuFactory(selector = `[data-${PLUGIN_KEY}]`) {
    const $menu = $(selector).eq(0);
    const instanceKey = `${PLUGIN_KEY}Instance`;
    const cachedMenu = $menu.data(instanceKey);

    if (cachedMenu instanceof Menu) {
        return cachedMenu;
    }

    const menu = new Menu($menu);

    $menu.data(instanceKey, menu);

    return menu;
}
