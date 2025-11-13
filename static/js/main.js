if (!Omeka) {
    var Omeka = {};
}

if (!ThanksRoy) {
    var ThanksRoy = {};
}

(function ($) {
    Omeka.showAdvancedForm = function () {
        $('#search-form').on('click', '.show-advanced', function() {
            var advanced_toggle = $(this);
            advanced_toggle.toggleClass('open');
            if (advanced_toggle.hasClass('open')) {
                advanced_toggle.attr('aria-expanded', true);
            } else {
                advanced_toggle.attr('aria-expanded', false);
            }
        });
    };

    Omeka.skipNav = function () {
        $("#skipnav").click(function() {
            $("#content").attr("tabindex", -1).focus();
        });

        $("#content").on("blur focusout", function () {
            $(this).removeAttr("tabindex");
        });
    };

    ThanksRoy.mobileMenu = function() {
        var subNavId = 1;
        $('#primary-nav li ul').each(function() {
            var childMenu = $(this);
            var subnavToggle = $('<button type="button" class="sub-nav-toggle" aria-label="Toggle subnavigation" aria-expanded="false"></button>');
            childMenu.parent().addClass('parent');
            childMenu.attr('id', 'sub-nav-' + subNavId);
            subnavToggle.attr('aria-controls', 'sub-nav-' + subNavId);
            subNavId++;
            childMenu.addClass('sub-nav').before(subnavToggle);
        });

        $('#primary-nav').on('click', '.sub-nav-toggle', function() {
            var subnavToggle = $(this);
            subnavToggle.parent('.parent').toggleClass('open');
            if (subnavToggle.attr('aria-expanded', 'false')) {
                subnavToggle.attr('aria-expanded', 'true');
            } else {
                subnavToggle.attr('aria-expanded', 'false');
            }
        });

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

    $(document).ready(function() {
        var mobileMenu = $('<button type="button" class="menu-button button" aria-expanded="false" aria-controls="primary-nav">Menu <span class="menu-icon" aria-hidden="true"></span></button>');
        $('#primary-nav').before(mobileMenu);
        Omeka.showAdvancedForm();
        Omeka.skipNav();
        ThanksRoy.mobileMenu();
    });
})(jQuery);