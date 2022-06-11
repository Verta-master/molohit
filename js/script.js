//Mobile menu
//$('.menu__open').click(function() {
//  $(this).toggleClass('menu__open--close');
//  $('.menu__list').slideToggle();
//})

if (window.innerWidth < 1023) {
//  $('.menu__btn').click(function() {
//    $(this).next().slideToggle();
//    $(this).toggleClass('menu__btn--top');
//  });
//  $('.menu__next').click(function() {
//    $(this).next().slideToggle();
//    $(this).toggleClass('menu__next--top');
//  });
  $('.footer__nav .footer__title').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__title--top');
  })
}

//Search
if (window.innerWidth < 1023) {
  $('.search__open').click(function() {
    $(this).toggleClass('search__open--close');
     $('.search__form').slideToggle();
  })
} else {
  $('.search__open').click(function() {
    $(this).toggleClass('search__open--close');
    $('.search__form').toggleClass('search__form--show');
  });
}