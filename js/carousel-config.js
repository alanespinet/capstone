$(".owl-carousel").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
        items:1
    },
    992:{
        items:2
    }
  }
});


$('.owl-prev').html('<i class="fa fa-angle-double-left" aria-hidden="true"></i>');
$('.owl-next').html('<i class="fa fa-angle-double-right" aria-hidden="true"></i>');
