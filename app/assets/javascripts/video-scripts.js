/*
* Elite - Landing Page
* Version: 1.2.1
* Copyright 2015
* Created by: DamterThemes
* URL: https://wrapbootstrap.com/user/damterthemes
* Designed and built based on Twitter Bootstrap 3.
*/

/*******************************************
Faqs
********************************************/
$(document).ready(function () {
    $('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-plus"></i>');
    });
});

/*******************************************
Contact form
********************************************/

//Validations
var name, email, subject, message;
jQuery("#send-contact").click(function () {
    jQuery(".error").hide();
    var form = jQuery(this).closest('#ajax-contacts');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddressVal = jQuery(form).find("[name=email]").val();
    var nameVal = jQuery(form).find("[name=name]").val();
    var subjectVal = jQuery(form).find("[name=subject]").val();
    var messageVal = jQuery(form).find("[name=message]").val();

    if (nameVal == '' || subjectVal == '' || messageVal == '') {
        jQuery("#message-contact").html("<div class='alert alert-danger'>All fields are required</div>");
        return false;
    }

    if (emailaddressVal == '') {
        jQuery("#message-contact").html('<div class="alert alert-danger">Enter your email address before submitting.</div>');
        return false;
    } else if (!emailReg.test(emailaddressVal)) {
        jQuery("#message-contact").html("<div class='alert alert-danger'>That is not an email address.&nbsp;  Typo?</div>");
        return false;
    } else {
        email = escape(emailaddressVal);
    }

    name = escape(nameVal);
    subject = escape(subjectVal);
    message = escape(messageVal);

});

//Sending...
jQuery('#ajax-contacts').submit(function () {
    jQuery("#message-contact").html("<div class='alert alert-danger'>Sending message...</div>");
    jQuery.ajax({
        type: 'POST',
        url: 'php/contact/contact.php',
        data: 'email=' + email + '&name=' + name + '&subject=' + subject + '&message=' + message,
        success: function (msg) {
            jQuery('#message-contact').html(msg);
        },
        error: function () {
            jQuery("#message-contact").html("<div class='alert alert-danger'>Error while sending the message</div>");
        }
    });
    return false;
});

/*******************************************
prettyPhoto Initialization
********************************************/

$("a.prettyPhoto").prettyPhoto();

/*******************************************
Testimonials
********************************************/

$('#media').carousel({
    pause: true,
    interval: false,
});

// TouchSwipe plugin
$(document).ready(function () {

    //Enable swiping...
    $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function () {
            $(this).parent().carousel('prev');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
});

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