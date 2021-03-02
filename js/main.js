
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
$(document).ready(function() {
  
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
    $('#categories').on('change', function() {
      currentIndex = $(this).prop('selectedIndex');
      var currentSlide = $('.responsive').slick('slickCurrentSlide');
      $('.responsive').slick('slickGoTo', parseInt(currentIndex));
    });
    
    
    $('.category .show-more-link').on('click', function() {
      $(this).next().css('display', 'block');
    });
    
    
    $('.category .close').on('click', function() {
      $(this).parent().css('display', 'none');
    });
  
  
  });

