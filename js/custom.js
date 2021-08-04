(function ($) {
    "use strict";
    //counter-up
    $('.banner-counter span').counterUp({
        delay: 10,
        time: 3000
    });

    
    //top scroll
    var cre_top_scroll = $('.top-scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            cre_top_scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

}(jQuery));