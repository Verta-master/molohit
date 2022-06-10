//Mobile menu
//$('.menu__btn').click(function() {
//  $('.menu').toggleClass('menu--opened');
//  $('.menu__list').slideToggle();
//})

//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

//Search
$('.search__open').click(function() {
  $(this).toggleClass('search__open--close');
  $('.search__form').toggleClass('search__form--show');
})