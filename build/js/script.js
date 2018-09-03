$('.btn-popup').click(function(e) {
	e.preventDefault()
	var data = $(this).attr('data-target');
	$('' + data).addClass('open')
});

$('.popup-close').click(function(e) {
	e.preventDefault()
	$('.popup').removeClass('open')
});

$('.main-slider').slick();


$('.product-carousel').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});

$('.news-carousel').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});

$(document).ready(function() {
   $('.card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card-thumb'
  });
  $('.card-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.card-slider',
    dots: false,
    vertical: true
  });
});

$('.menu-btn').click(function(event) {
  var menu = $('#mobile-menu')
  menu.show()
});

$('.menu-close').click(function(e) {
  e.preventDefault()
  var menu = $('#mobile-menu')
  menu.hide()
});