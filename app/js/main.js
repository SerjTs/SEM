$(function() {

// smooth scroll
  $(".header__menu-link, .footer__menu-link, .header__logo, .footer__logo, .services__item-link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });

// slick-carousel slider
  $('.feedbacks__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5 1.81347L2 20L33.5 38.1865L33.5 1.81347Z" fill="white" stroke="#E8B500" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 38.1865L33 20L1.5 1.81347L1.5 38.1865Z" fill="white" stroke="#E8B500" stroke-width="2"/></svg></button>',
    arrows: true,
	  slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    //responsive: [
    //  {
    //    breakpoint: 500,
    //    settings: {
    //      slidesToShow: 1,
    //      slidesToScroll: 1
    //    }
    //  }
    //]
  });

  $(".feedbacks__slide-rating").rateYo({
    rating: 5,
    spacing: "13px",
    readOnly: true,
    // numStars: 5,
    // minValue: 0,
    // maxValue: 5,
    // normalFill: 'black',
    // ratedFill: '#E8B500',
    // Подставляем свои звёзды
    starSvg: '<svg width="31" height="30" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg"><path d="M30.1364 11.558C30.0331 11.2398 29.7581 11.0079 29.427 10.9599L20.1269 9.60839L15.9676 1.18106C15.8196 0.881064 15.5141 0.691162 15.1796 0.691162C14.845 0.691162 14.5395 0.881064 14.3914 1.18106L10.232 9.60839L0.932006 10.9599C0.601011 11.0079 0.325914 11.2398 0.222555 11.558C0.119138 11.8762 0.205387 12.2255 0.444976 12.459L7.17433 19.0187L5.58597 28.2814C5.52937 28.6112 5.66496 28.9443 5.9356 29.141C6.08871 29.2522 6.27005 29.3088 6.45228 29.3088C6.5922 29.3088 6.73259 29.2755 6.86114 29.2079L15.1795 24.8346L23.4975 29.2078C23.7937 29.3635 24.1524 29.3376 24.4231 29.141C24.6937 28.9443 24.8294 28.611 24.7728 28.2813L23.184 19.0187L29.9141 12.4589C30.1536 12.2255 30.2399 11.8762 30.1364 11.558Z" fill="#E8B500"/></svg>',
    starWidth: "30px"
  })

  // burger menu
  $(".header__menu-btn").click(function () {
    $(this).toggleClass("header__menu-on");
    $(".header__menu").toggleClass("header__menu--visible");
  });

});
