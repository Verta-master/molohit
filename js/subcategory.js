function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".subcategory__list");
  
  if (checkWidth > 1200) {
    if (typeof owlPost.data('owl.carousel') != 'undefined') {
      owlPost.data('owl.carousel').destroy();
    }
    owlPost.removeClass('owl-carousel');
  } else if (checkWidth < 1201) {
    owlPost.addClass('owl-carousel');
    owlPost.owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText:["",""],
      responsive:{
        0:{
          items: 2
        },
        480:{
          items: 3,
        },
        766:{
          items: 4,
        },
        960:{
          items: 5,
        }
      }
    });
  }
}

postsCarousel();
$(window).resize(postsCarousel);	