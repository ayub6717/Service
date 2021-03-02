//*****************star ratting ****************** */
$(document)
    .ready(function () {
        /* 1. Visualizing things on Hover - See next part for action on click */
        $('#stars li')
            .on('mouseover', function () {
                var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

                // Now highlight all the stars that's not after the current hovered star
                $(this)
                    .parent()
                    .children('li.star')
                    .each(function (e) {
                        if (e < onStar) {
                            $(this).addClass('hover');
                        } else {
                            $(this).removeClass('hover');
                        }
                    });

            })
            .on('mouseout', function () {
                $(this)
                    .parent()
                    .children('li.star')
                    .each(function (e) {
                        $(this).removeClass('hover');
                    });
            });

        /* 2. Action to perform on click */
        $('#stars li').on('click', function () {
            var onStar = parseInt($(this).data('value'), 10); // The star currently selected
            var stars = $(this)
                .parent()
                .children('li.star');

            for (i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected');
            }

            for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass('selected');
            }

            // JUST RESPONSE (Not needed)
            var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
            var msg = "";
            if (ratingValue > 1) {
                msg = "Your Rattiong is " + ratingValue + " stars.";
            } else {
                msg = "Your Rattiong is " + ratingValue + " stars.";
            }
            responseMessage(msg);
        });
    });

function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
//*****************star ratting end****************** */

// **************************category*********************
$(document).ready(function () {

    // Initialise Selectric Dropdown and Slick Carousel
    $('#categories').selectric();

    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                // centerMode: true,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    var currentIndex = 0;
    $('#categories').on('change', function () {
        currentIndex = $(this).prop('selectedIndex');
        var currentSlide = $('.responsive').slick('slickCurrentSlide');
        $('.responsive').slick('slickGoTo', parseInt(currentIndex));
    });


    $('.category .show-more-link').on('click', function () {
        $(this).next().css('display', 'block');
    });


    $('.category .close').on('click', function () {
        $(this).parent().css('display', 'none');
    });


});

// *******************end category*****************

/* *************Our Client say*************** */


// for animation 

$(document).ready(function () {
    $('.pp-quote').click(function () {
        $('.pp-quote').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {

    // hide-top

    $('.li-quote-1').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-1').addClass('show');
        $('.quote-text-1').removeClass('hide-bottom');
    });

    $('.li-quote-2').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-2').addClass('show');
        $('.quote-text-2').removeClass('hide-bottom');
    });

    $('.li-quote-3').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-3').addClass('show');
        $('.quote-text-3').removeClass('hide-bottom');
    });
    $('.li-quote-4').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-4').addClass('show');
        $('.quote-text-4').removeClass('hide-bottom');
    });
    $('.li-quote-5').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-5').addClass('show');
        $('.quote-text-5').removeClass('hide-bottom');
    });
    $('.li-quote-6').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-6').addClass('show');
        $('.quote-text-6').removeClass('hide-bottom');
    });
    $('.li-quote-7').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-7').addClass('show');
        $('.quote-text-7').removeClass('hide-bottom');
    });
    $('.li-quote-8').click(function (e) {
        e.stopPropagation();
        $(".show").addClass('hide-top');
        $(".hide-top").removeClass('show');
        $('.quote-text-8').addClass('show');
        $('.quote-text-8').removeClass('hide-bottom');
    });


});


$(document).ready(function () {

    // hide-top

    $('.li-quote-1').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-1').addClass('look');
        $('.dp-name-1').removeClass('hide-dp-bottom');
    });

    $('.li-quote-2').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-2').addClass('look');
        $('.dp-name-2').removeClass('hide-dp-bottom');
    });

    $('.li-quote-3').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-3').addClass('look');
        $('.dp-name-3').removeClass('hide-dp-bottom');
    });
    $('.li-quote-4').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-4').addClass('look');
        $('.dp-name-4').removeClass('hide-dp-bottom');
    });

    $('.li-quote-5').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-5').addClass('look');
        $('.dp-name-5').removeClass('hide-dp-bottom');
    });

    $('.li-quote-6').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-6').addClass('look');
        $('.dp-name-6').removeClass('hide-dp-bottom');
    });
    $('.li-quote-7').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-7').addClass('look');
        $('.dp-name-7').removeClass('hide-dp-bottom');
    });
    $('.li-quote-8').click(function (e) {
        e.stopPropagation();
        $(".look").addClass('hide-dp-top');
        $(".hide-dp-top").removeClass('look');
        $('.dp-name-8').addClass('look');
        $('.dp-name-8').removeClass('hide-dp-bottom');
    });


});
/* *************Our Client say end*************** */
// <!-- **********Live Chat Start**************** -->


hideChat(0);

$('#prime').click(function () {
    toggleFab();
});


//Toggle chat and links
function toggleFab() {
    $('.prime').toggleClass('zmdi-comment-outline');
    $('.prime').toggleClass('zmdi-close');
    $('.prime').toggleClass('is-active');
    $('.prime').toggleClass('is-visible');
    $('#prime').toggleClass('is-float');
    $('.chat').toggleClass('is-visible');
    $('.fab').toggleClass('is-visible');

}

$('#chat_first_screen').click(function (e) {
    hideChat(1);
});

$('#chat_second_screen').click(function (e) {
    hideChat(2);
});

$('#chat_third_screen').click(function (e) {
    hideChat(3);
});

$('#chat_fourth_screen').click(function (e) {
    hideChat(4);
});

$('#chat_fullscreen_loader').click(function (e) {
    $('.fullscreen').toggleClass('zmdi-window-maximize');
    $('.fullscreen').toggleClass('zmdi-window-restore');
    $('.chat').toggleClass('chat_fullscreen');
    $('.fab').toggleClass('is-hide');
    $('.header_img').toggleClass('change_img');
    $('.img_container').toggleClass('change_img');
    $('.chat_header').toggleClass('chat_header2');
    $('.fab_field').toggleClass('fab_field2');
    $('.chat_converse').toggleClass('chat_converse2');
    //$('#chat_converse').css('display', 'none');
    // $('#chat_body').css('display', 'none');
    // $('#chat_form').css('display', 'none');
    // $('.chat_login').css('display', 'none');
    // $('#chat_fullscreen').css('display', 'block');
});

function hideChat(hide) {
    switch (hide) {
        case 0:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'none');
            $('#chat_fullscreen').css('display', 'none');
            break;
        case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
        case 2:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'block');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
        case 3:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'block');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
        case 4:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            $('#chat_fullscreen').css('display', 'block');
            break;
    }
}

// <!-- **********Live Chat end**************** -->

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

