if (!ThanksRoy) {
    var ThanksRoy = {};
}

(function ($) {

    ThanksRoy.mobileMenu = function() {
        ThanksRoy.navTree('primary-nav');

        $(document).on('click', '.menu-button', function(e) {
            e.preventDefault();
            var toggle = $(this);
            var navigation = $('#primary-nav ul.navigation');
            navigation.toggleClass('open');
            if (navigation.hasClass('open')) {
                toggle.attr('aria-expanded', 'true');
            } else {
                toggle.attr('aria-expanded', 'false')
            }
        });
    };

    ThanksRoy.navTree = function(navId) {
        let subNavId = 1;
        let navElement = $('#' + navId);
        navElement.find('li ul').each(function() {
            let childMenu = $(this);
            let subnavToggle = $('<button type="button" class="sub-nav-toggle" aria-label="Toggle subnavigation" aria-expanded="false"></button>');
            childMenu.parent().addClass('parent');
            childMenu.attr('id', 'sub-nav-' + subNavId);
            subnavToggle.attr('aria-controls', navId + '-sub-nav-' + subNavId);
            subNavId++;
            childMenu.addClass('sub-nav').before(subnavToggle);
        });

        navElement.on('click', '.sub-nav-toggle', function() {
            let subnavToggle = $(this);
            subnavToggle.parent('.parent').toggleClass('open');
            if (subnavToggle.attr('aria-expanded') == 'false') {
                subnavToggle.attr('aria-expanded', 'true');
            } else {
                subnavToggle.attr('aria-expanded', 'false');
            }
        });

        if (navElement.find('.active').length > 0) { 
            let activeParent = navElement.find('.active').parents('.parent');
            activeParent.find('.sub-nav-toggle').click();
        }
    };

})(jQuery);
