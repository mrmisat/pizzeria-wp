/**
 * Created by javie on 30/03/2018.
 */
$ = jQuery.noConflict();
var breakpoint = 768;

$(document).ready(function () {

    $('.mobile-menu a').on('click', function (e) {

        $('nav.menu-sitio').toggle('slow');
    });

    $(window).resize(function (e) {
        var windowSize = $(document).width();
        if (windowSize >= breakpoint) {
            $('nav.menu-sitio').show();
        } else {
            $('nav.menu-sitio').hide();
        }
    });

    /**
     * Fluidbox
     */
    jQuery('.gallery a').each(function () {
        jQuery(this).attr({'data-fluidbox': ''});
    });

    if($('[data-fluidbox]').length > 0){
        jQuery('[data-fluidbox]').fluidbox();
    }

});