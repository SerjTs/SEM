$(function() {

// smooth scroll
  $(".header__menu-link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });

// slick-carousel slider
$('.top-banner__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14"><path d="M.867 6.535l3.719-3.719a.65.65 0 01.926 0l.617.618a.65.65 0 010 .925L3.496 7l2.637 2.637a.65.65 0 010 .925l-.617.622a.65.65 0 01-.926 0L.87 7.464a.652.652 0 01-.004-.929zm0 0"/></svg></>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14"><path d="M6.133 7.465l-3.719 3.719a.65.65 0 01-.926 0l-.617-.618a.65.65 0 010-.925l2.633-2.637L.87 4.367a.65.65 0 010-.926l.613-.625a.65.65 0 01.926 0l3.719 3.72a.652.652 0 01.004.929zm0 0"/></svg></button>',
    // arrows: true,
	//slidesToShow: 2,
    //slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 4000,
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



});
