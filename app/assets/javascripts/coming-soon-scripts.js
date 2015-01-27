/*
* Elite - Landing Page
* Version: 1.2.1
* Copyright 2015
* Created by: DamterThemes
* URL: https://wrapbootstrap.com/user/damterthemes
* Designed and built based on Twitter Bootstrap 3.
*/

/*
IMPORTANT: To modify the code of the subscription form, edit the file php/mcapi-subscribe/js/mailing-list.js
*/

/*******************************************
Countdown initializer
********************************************/
(function ($) {
    /**
     * (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
     * according to the GMT+0 Timezone
     **/
    var launch = new Date(2015, 3, 10, 11, 00);
    /**
     * The script
     **/
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');

    setDate();

    function setDate() {
        var now = new Date();
        if (launch < now) {
            days.html('<h1>0</H1><p>Day</p>');
            hours.html('<h1>0</h1><p>Hour</p>');
            minutes.html('<h1>0</h1><p>Minute</p>');
            seconds.html('<h1>0</h1><p>Second</p>');
        } else {
            var s = -now.getTimezoneOffset() * 60 + (launch.getTime() - now.getTime()) / 1000;
            var d = Math.floor(s / 86400);
            days.html('<h1>' + d + '</h1><p>Day' + (d > 1 ? 's' : ''), '</p>');
            s -= d * 86400;

            var h = Math.floor(s / 3600);
            hours.html('<h1>' + h + '</h1><p>Hour' + (h > 1 ? 's' : ''), '</p>');
            s -= h * 3600;

            var m = Math.floor(s / 60);
            minutes.html('<h1>' + m + '</h1><p>Minute' + (m > 1 ? 's' : ''), '</p>');

            s = Math.floor(s - m * 60);
            seconds.html('<h1>' + s + '</h1><p>Second' + (s > 1 ? 's' : ''), '</p>');
            setTimeout(setDate, 1000);

        }
    }
})(jQuery);

/*******************************************
Placeholder
********************************************/

jQuery('input, textarea').placeholder();

/*******************************************
Go to top button
********************************************/

jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.to-top').fadeIn(duration);
        } else {
            jQuery('.to-top').fadeOut(duration);
        }
    });

    jQuery('.to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});